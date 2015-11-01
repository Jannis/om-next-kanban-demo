(ns kanban.components.sortable-list
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.util :refer [class-names index-of]]))

(defui SortableItem
  Object
  (get-item [this]
    (select-keys (om/props this) [:key :data :element]))

  (drag-start [this e]
    (let [{:keys [key data element]} (om/props this)
          {:keys [drag-fns]} (om/get-computed this)]
      (-> e .-dataTransfer .-effectAllowed (set! "move"))
      (.. e -dataTransfer (setData "text/html" element))
      ((:start drag-fns) e this)))

  (render [this]
    (let [{:keys [key data element]} (om/props this)
          {:keys [placeholder drag-fns]} (om/get-computed this)]
      (dom/li #js {:className (class-names {:sortable-item true
                                            :placeholder placeholder})
                   :draggable true
                   :onDragStart #(.drag-start this %)
                   :onDragEnd #((:end drag-fns) % this)
                   :onDragOver #((:over drag-fns) % this)
                   :onDrop #((:drop drag-fns) % this)}
        element))))

(def sortable-item (om/factory SortableItem {:keyfn :key}))

(defui SortableList
  Object
  (drag-start [this e item]
    (let [node (dom/node item)]
      (om/update-state! this assoc :drag-item item)))

  (drag-end [this e item]
    (om/update-state! this dissoc :drag-item))

  (drag-over-item [this e target-item]
    (let [drag-item (:drag-item (om/get-state this))]
      (-> e .-dataTransfer .-dropEffect (set! "move"))
      (.preventDefault e)
      (when-not (= drag-item target-item)
        (let [x (.-clientX e)
              y (.-clientY e)
              node (dom/node target-item)
              rect (.getBoundingClientRect node)
              center-x (-> (.-left rect) (+ (.-right rect)) (/ 2))
              center-y (-> (.-top rect) (+ (.-bottom rect)) (/ 2))
              where (if (< x center-x) :before :after)
              items (or (:items (om/get-state this))
                        (:items (om/props this)))
              items-without-drag (remove #{(.get-item drag-item)} items)
              index (-> (.get-item target-item)
                        (index-of items-without-drag)
                        (cond-> (= where :before) identity
                                (= where :after)  inc))]
          (->> items-without-drag
               (split-at index)
               (#(concat (first %) [(.get-item drag-item)] (second %)))
               (om/update-state! this assoc :items))))))

  (drag-drop [this e target-item]
    (let [{:keys [change-fn]} (om/props this)]
      (change-fn (map :data (om/get-state this :items)))))

  (render [this]
    (let [items (or (:items (om/get-state this)
                    (:items (om/props this))))
          {:keys [drag-item]} (om/get-state this)]
      (dom/ul #js {:className "sortable-list"}
        (for [item items]
          (sortable-item
            (om/computed
              item
              {:placeholder (= item (some-> drag-item .get-item))
               :drag-fns {:start #(.drag-start this %1 %2)
                          :end #(.drag-end this %1 %2)
                          :over #(.drag-over-item this %1 %2)
                          :drop #(.drag-drop this %1 %2)}})))))))

(def sortable-list (om/factory SortableList))
