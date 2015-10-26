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
    [:id :name :lanes])
  Object
  (render [this]
    (dom/li nil
      (let [{:keys [name]} (om/props this)]
        (dom/a nil name)))))

(def board-menu-item (om/factory BoardMenuItem {:keyfn :id}))

(defui BoardsMenu
  Object
  (render [this]
    (dom/div #js {:className "header-menu"}
      (dom/a nil "Boards")
      (dom/ul nil
        (let [{:keys [boards]} (om/props this)]
          (for [board boards]
            (board-menu-item board)))))))

(def boards-menu (om/factory BoardsMenu))
