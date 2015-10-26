(ns kanban.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.reconciler :refer [reconciler]]))

(defui App
  Object
  (render [this]
    (dom/div nil
      (dom/h1 nil "Om Next Kanban Demo"))))

(defn run []
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
