(ns kanban.components.board
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui Board
  static om/Ident
  (ident [this props]
    [:board/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name :lanes])
  Object
  (render [this]
    (dom/div #js {:className "board"}
      (let [{:keys [name]} (om/props this)]
        (dom/h2 #js {:className "title"} name " Board")))))

(def board (om/factory Board {:keyfn :id}))
