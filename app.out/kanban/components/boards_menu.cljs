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
      (let [{:keys [name]} (om/props this)
            {:keys [activate-fn]} (om/get-computed this)]
        (dom/a #js {:onClick #(activate-fn (om/get-ident this))}
          name)))))

(def board-menu-item (om/factory BoardMenuItem {:keyfn :id}))

(defui BoardsMenu
  Object
  (render [this]
    (let [{:keys [boards]} (om/props this)
          {:keys [activate-fn create-fn]} (om/get-computed this)]
      (dom/div #js {:className "header-menu"}
        (dom/a nil "▾ Boards")
        (dom/ul nil
          (for [board boards]
            (board-menu-item
              (om/computed board {:activate-fn activate-fn})))
          (dom/li #js {:className "header-menu-separator"})
          (dom/li nil
            (dom/a #js {:onClick create-fn}
              "Create")))))))

(def boards-menu (om/factory BoardsMenu))
