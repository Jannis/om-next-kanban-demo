(ns kanban.components.lane
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.components.card :refer [Card card]]))

(defui Lane
  static om/Ident
  (ident [this props]
    [:lane/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name {:cards (om/get-query Card)}])
  Object
  (render [this]
    (let [{:keys [name cards]} (om/props this)
          {:keys [card-create-fn card-drag-fns card-edit-fn]}
            (om/get-computed this)]
      (dom/div #js {:className "lane"
                    :onDragOver (fn [e] (.preventDefault e))
                    :onDrop #((:drop card-drag-fns) (om/get-ident this))}
        (dom/h3 #js {:className "lane-title"}
          name
          (dom/span #js {:className "count"}
            (count cards)))
        (dom/div #js {:className "add"}
          (dom/a #js {:onClick #(card-create-fn (om/get-ident this))} "+"))
        (dom/div #js {:className "cards"}
          (let [ref      (om/get-ident this)
                drag-fns (into {} (map (fn [[k f]] [k (partial f ref)])
                                       card-drag-fns))]
            (for [c cards]
              (card (om/computed c {:drag-fns drag-fns
                                    :activate-fn card-edit-fn})))))))))

(def lane (om/factory Lane {:keyfn :id}))
