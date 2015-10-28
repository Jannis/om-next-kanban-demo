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
    [:id :name :description {:lanes (om/get-query Lane)}])
  Object
  (render [this]
    (let [{:keys [name description lanes dragging
                  card-add-fn card-drag-fns card-edit-fn]} (om/props this)]
      (dom/div #js {:className "board"}
        (dom/h2 #js {:className "board-title"} name " Board")
        (dom/p #js {:className "board-description"} description)
        (when dragging
          (dom/div #js {:className "delete"
                        :onDragOver (fn [e] (.preventDefault e))
                        :onDrop (:delete card-drag-fns)}
            "Delete"))
        (dom/div #js {:className "lanes"}
          (for [l lanes]
            (lane (assoc l :card-add-fn card-add-fn
                           :card-drag-fns card-drag-fns
                           :card-edit-fn card-edit-fn))))))))

(def board (om/factory Board {:keyfn #(-> [:board/by-id (:id %)])}))
