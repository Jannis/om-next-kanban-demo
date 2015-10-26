(ns kanban.components.lane
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui Lane
  static om/Ident
  (ident [this props]
    [:lane/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name])
  Object
  (render [this]
    (let [{:keys [name]} (om/props this)]
      (dom/div #js {:className "lane"}
        (dom/h3 #js {:className "lane-title"} name)
        (dom/div #js {:className "cards"})))))

(def lane (om/factory Lane {:keyfn :id}))
