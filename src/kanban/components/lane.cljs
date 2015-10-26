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
    (let [{:keys [name cards]} (om/props this)]
      (dom/div #js {:className "lane"}
        (dom/h3 #js {:className "lane-title"} name)
        (dom/div #js {:className "cards"}
          (for [c cards]
            (card c)))))))

(def lane (om/factory Lane {:keyfn :id}))
