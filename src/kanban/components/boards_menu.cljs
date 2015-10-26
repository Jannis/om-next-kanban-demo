(ns kanban.components.boards-menu
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui BoardMenuItem
  static om/Ident
  (ident [this props]
    [:board/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name])
  Object
  (render [this]
    (dom/li nil
      (let [{:keys [name activate-fn]} (om/props this)]
        (dom/a #js {:onClick #(activate-fn (om/get-ident this))}
          name)))))

(def board-menu-item (om/factory BoardMenuItem {:keyfn :id}))

(defui BoardsMenu
  Object
  (render [this]
    (dom/div #js {:className "header-menu"}
      (dom/a nil "Boards")
      (dom/ul nil
        (let [{:keys [boards activate-fn]} (om/props this)]
          (for [board boards]
            (board-menu-item
              (assoc board :activate-fn activate-fn))))))))

(def boards-menu (om/factory BoardsMenu))
