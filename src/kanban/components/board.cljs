(ns kanban.components.board
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.components.lane :refer [Lane lane]]))

(defui Board
  static om/Ident
  (ident [this props]
    [:board/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name {:lanes (om/get-query Lane)}])
  Object
  (render [this]
    (let [{:keys [name lanes card-drag-fns]} (om/props this)]
      (dom/div #js {:className "board"}
        (dom/h2 #js {:className "board-title"} name " Board")
        (dom/div #js {:className "lanes"}
          (for [l lanes]
            (lane (assoc l :card-drag-fns card-drag-fns))))))))

(def board (om/factory Board {:keyfn :id}))
