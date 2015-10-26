(ns kanban.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.reconciler :refer [reconciler]]
            [kanban.parsing.boards :as boards]
            [kanban.components.boards-menu :refer [BoardMenuItem boards-menu]]))

(enable-console-print!)

(defui App
  static om/IQuery
  (query [this]
    [{:boards (om/get-query BoardMenuItem)}])
  Object
  (render [this]
    (dom/div #js {:className "app"}
      (dom/header #js {:className "header"}
        (dom/h1 nil "Om Next Kanban Demo")
        (dom/nav nil
          (let [props (-> this om/props (select-keys [:boards]))]
            (boards-menu props)))))))

(defn run []
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
