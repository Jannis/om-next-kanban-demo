(ns kanban.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.reconciler :refer [reconciler]]
            [kanban.parsing.boards :as boards]
            [kanban.components.boards-menu :refer [BoardMenuItem boards-menu]]
            [kanban.components.board :refer [Board board]]
            [kanban.components.card :refer [Assignee Card]]
            [kanban.components.card-editor :refer [CardEditor card-editor]]
            [kanban.components.lane :refer [Lane]]
            [kanban.components.about :refer [about]]))

(enable-console-print!)

(defui App
  static om/IQuery
  (query [this]
    [{:boards (om/get-query Board)}
     {:boards/active (om/get-query Board)}
     {:lanes (om/get-query Lane)}
     {:cards (om/get-query Card)}
     {:users (om/get-query Assignee)}
     :cards/dragged
     {:cards/editing (om/get-query CardEditor)}])
  Object
  (activate-board [this ref]
    (om/transact! this `[(boards/activate {:ref ~ref})]))

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

  (card-add [this lane]
    (om/transact! this `[(lanes/create-card {:lane ~lane})]))

  (card-edit [this card]
    (om/transact! this `[(cards/edit {:card ~card})]))

  (card-update [this card data]
    (om/transact! this `[(cards/update {:card ~card :data ~data})]))

  (render [this]
    (dom/div #js {:className "app"}
      (dom/header #js {:className "header"}
        (dom/h1 nil
          (dom/a #js {:onClick #(.activate-board this nil)}
            "Om Next Kanban Demo"))
        (dom/nav nil
          (let [props (-> this om/props (select-keys [:boards]))]
            (boards-menu
              (assoc props
                     :activate-fn #(.activate-board this %))))))
      (dom/main nil
        (if-let [active-board (-> this om/props :boards/active)]
          (board (assoc active-board
                        :dragging (-> this om/props :cards/dragged)
                        :card-add-fn #(.card-add this %)
                        :card-edit-fn #(.card-edit this %)
                        :card-drag-fns {:start #(.card-drag-start this %1 %2)
                                        :end #(.card-drag-end this %1 %2)
                                        :drop #(.card-drag-drop this %)
                                        :delete #(.card-drag-delete this)}))
          (about))
        (if-let [card (-> this om/props :cards/editing)]
          (card-editor (assoc card
                              :users (-> this om/props :users)
                              :close-fn #(.card-edit this nil)
                              :update-fn #(.card-update this %1 %2))))))))

(defn run []
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
