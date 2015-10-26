(ns kanban.components.card
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui Card
  static om/Ident
  (ident [this props]
    [:card/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :text])
  Object
  (render [this]
    (let [{:keys [id text]} (om/props this)]
      (dom/div #js {:className "card"}
        (dom/span #js {:className "id"} id)
        (dom/span #js {:className "text"} text)))))

(def card (om/factory Card {:keyfn :id}))
