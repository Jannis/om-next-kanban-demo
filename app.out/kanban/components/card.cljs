(ns kanban.components.card
  (:require [clojure.string :as str]
            [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui Assignee
  static om/Ident
  (ident [this props]
    [:user/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :username :name])
  Object
  (render [this]
    (let [{:keys [username name
                  selected with-name activate-fn]} (om/props this)]
      (dom/span #js {:className (str/join " " ["assignee"
                                               (when selected "selected")])
                     :onClick #(when activate-fn
                                 (activate-fn (om/get-ident this)))
                     :title name}
        (if with-name
          (str name " (@" username ")" " ")
          (str "@" username " "))))))

(def assignee (om/factory Assignee {:keyfn :id}))

(defui Card
  static om/Ident
  (ident [this props]
    [:card/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :text {:assignees (om/get-query Assignee)}])
  Object
  (render [this]
    (let [{:keys [id text assignees drag-fns edit-fn]} (om/props this)]
      (let [ref (om/get-ident this)]
        (dom/div #js {:className "card"
                      :onClick #(edit-fn ref)
                      :draggable true
                      :onDragStart #((:start drag-fns) ref)
                      :onDragEnd #((:end drag-fns) ref)}
          (dom/span #js {:className "card-id"} id)
          (for [a assignees]
            (assignee a))
          (dom/span #js {:className "text"} text))))))

(def card (om/factory Card {:keyfn :id}))
