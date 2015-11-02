(ns kanban.components.sortable-list
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.util :refer [class-names index-of]]))

(defn sortable-key [x]
  (let [props (cond-> x (om/component? x) om/props)]
    ((:key-fn (om/get-computed props)) props)))

(defui Sortable
  Object
  (render [this]
    (let [{:keys [placeholder element-fn drag-fns]} (om/get-computed this)]
      (dom/li #js {:className (class-names {:sortable true
                                            :placeholder placeholder})
                   :draggable true
                   :onDragStart #((:start drag-fns) % this)
                   :onDragEnd #((:end drag-fns) % this)
                   :onDragOver #((:over drag-fns) % this)
                   :onDrop #((:drop drag-fns) % this)}
        (element-fn (om/props this))))))

(def sortable (om/factory Sortable {:keyfn sortable-key}))

(defui SortableList
  Object
  (item-for-key [this key]
    (let [{:keys [items key-fn]} (om/props this)]
      (first (filter #(= key (key-fn %)) items))))

  (drag-start [this e child]
    (let [key (sortable-key child)]
      (om/update-state! this assoc :drag-key key)))

  (drag-end [this e child]
    (om/update-state! this dissoc :drag-key))

  (drag-over [this e]
    (.preventDefault e))

  (drag-over-item [this e target-child]
    (-> e .-dataTransfer .-dropEffect (set! "move"))
    (.preventDefault e)
    (let [target-key (sortable-key target-child)
          drag-key   (:drag-key (om/get-state this))
          key-fn     (:key-fn (om/props this))]
      (when-not (= drag-key target-key)
        (let [x (.-clientX e)
              y (.-clientY e)
              node (dom/node target-child)
              rect (.getBoundingClientRect node)
              center-x (-> (.-left rect) (+ (.-right rect)) (/ 2))
              center-y (-> (.-top rect) (+ (.-bottom rect)) (/ 2))
              where (if (< x center-x) :before :after)
              items (or (:items (om/get-state this))
                     (:items (om/props this)))
              items-without-drag (remove #(= drag-key (key-fn %)) items)
              index (-> target-key
                        (index-of (map key-fn items-without-drag))
                        (cond-> (= where :after) inc))]
          (->> items-without-drag
               (split-at index)
               (#(concat (first %) [(.item-for-key this drag-key)] (second %)))
               (om/update-state! this assoc :items))))))

  (drag-drop [this e]
    (let [{:keys [change-fn]} (om/props this)]
      (change-fn (om/get-state this :items))))

  (render [this]
    (let [items (or (:items (om/get-state this)
                    (:items (om/props this))))
          {:keys [key-fn element-fn]} (om/props this)
          {:keys [drag-key]} (om/get-state this)]
      (dom/ul #js {:className "sortable-list"
                   :onDragOver #(.drag-over this %)
                   :onDrop #(.drag-drop this %)}
        (for [item items]
          (sortable
            (om/computed
              item
              {:placeholder (= drag-key (key-fn item))
               :key-fn key-fn
               :element-fn element-fn
               :drag-fns {:start #(.drag-start this %1 %2)
                          :end #(.drag-end this %1 %2)
                          :over #(.drag-over-item this %1 %2)
                          :drop #(.drag-drop this %1)}})))))))

(def sortable-list (om/factory SortableList))
