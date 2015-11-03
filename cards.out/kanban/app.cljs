(ns kanban.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.reconciler :refer [reconciler]]
            [kanban.parsing.boards :as boards]
            [kanban.components.boards-menu :refer [BoardMenuItem boards-menu]]
            [kanban.components.board :refer [Board board]]
            [kanban.components.board-dialog :refer [BoardDialog board-dialog]]
            [kanban.components.card :refer [Assignee Card]]
            [kanban.components.card-dialog :refer [CardDialog card-dialog]]
            [kanban.components.lane :refer [Lane]]
            [kanban.components.about :refer [about]]))

(enable-console-print!)

(defui App
  static om/IQuery
  (query [this]
    [{:boards (om/get-query Board)}
     {:boards/active (om/get-query Board)}
     {:boards/editing (om/get-query BoardDialog)}
     {:lanes (om/get-query Lane)}
     {:cards (om/get-query Card)}
     :cards/dragged
     {:cards/editing (om/get-query CardDialog)}
     {:users (om/get-query Assignee)}])
  Object
  (board-activate [this ref]
    (om/transact! this `[(boards/activate {:ref ~ref})]))

  (board-create [this]
    (om/transact! this `[(boards/create-board)]))

  (board-update [this board data]
    (om/transact! this `[(boards/update {:board ~board :data ~data})]))

  (board-edit [this board]
    (om/transact! this `[(boards/edit {:board ~board})]))

  (card-drag-start [this lane card]
    (om/transact! this `[(cards/drag {:lane ~lane :card ~card})]))

  (card-drag-end [this lane card]
    (om/transact! this `[(cards/drag nil)]))

  (card-drag-drop [this lane]
    (if-let [source (-> this om/props :cards/dragged)]
      (om/transact! this `[(lanes/move-card {:card ~(:card source)
                                             :from ~(:lane source)
                                             :to   ~lane})
                           (cards/drag nil)])))

  (card-drag-delete [this]
    (if-let [source (-> this om/props :cards/dragged)]
      (om/transact! this `[(lanes/delete-card {:card ~(:card source)
                                               :lane ~(:lane source)})
                           (cards/drag nil)])))

  (card-create [this lane]
    (om/transact! this `[(lanes/create-card {:lane ~lane})]))

  (card-edit [this card]
    (om/transact! this `[(cards/edit {:card ~card})]))

  (card-update [this card data]
    (om/transact! this `[(cards/update {:card ~card :data ~data})]))

  (render [this]
    (dom/div #js {:className "app"}
      (dom/header #js {:className "header"}
        (dom/h1 nil
          (dom/a #js {:onClick #(.board-activate this nil)}
            "Om Next Kanban Demo"))
        (dom/nav nil
          (let [props (-> this om/props (select-keys [:boards]))]
            (boards-menu
              (om/computed props
                           {:activate-fn #(.board-activate this %)
                            :create-fn #(.board-create this)})))))
      (dom/main nil
        (println (-> this om/props :boards/active))
        (if-let [active-board (-> this om/props :boards/active)]
          (board
            (om/computed active-board
                         {:dragging (-> this om/props :cards/dragged)
                          :edit-fn #(.board-edit this %)
                          :card-create-fn #(.card-create this %)
                          :card-edit-fn #(.card-edit this %)
                          :card-drag-fns {:start #(.card-drag-start this %1 %2)
                                          :end #(.card-drag-end this %1 %2)
                                          :drop #(.card-drag-drop this %)
                                          :delete #(.card-drag-delete this)}}))
          (about))
        (if-let [board (-> this om/props :boards/editing)]
          (board-dialog
            (om/computed board {:lanes (-> this om/props :lanes)
                                :close-fn #(.board-edit this nil)
                                :update-fn #(.board-update this %1 %2)})))
        (if-let [card (-> this om/props :cards/editing)]
          (card-dialog
            (om/computed card {:users (-> this om/props :users)
                               :close-fn #(.card-edit this nil)
                               :update-fn #(.card-update this %1 %2)})))))))

(defn run []
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
