(ns kanban.components.card
  (:require [goog.object :as gobj]
            [goog.string :as gstring]
            [goog.string.format]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.util :refer [class-names]]))

(defui Assignee
  static om/Ident
  (ident [this props]
    [:user/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :username :name])
  Object
  (render [this]
    (let [{:keys [username name]} (om/props this)
          {:keys [selected with-name activate-fn]} (om/get-computed this)]
      (dom/span #js {:className (class-names {:assignee true
                                              :selected selected})
                     :onClick #(when activate-fn
                                 (activate-fn (om/get-ident this)))
                     :title name}
        (if with-name
          (gstring/format "%s (@%s) " name username)
          (gstring/format "@%s " username))))))

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
    (let [{:keys [id text assignees]} (om/props this)
          {:keys [drag-fns activate-fn]} (om/get-computed this)]
      (let [ref (om/get-ident this)]
        (dom/div #js {:className "card"
                      :onClick #(some-> activate-fn (apply [ref]))
                      :draggable true
                      :onDragStart
                      (fn [e]
                        (.setData (.-dataTransfer e) "text/plain" (str ref))
                        (some-> drag-fns :start (apply [ref])))
                      :onDragEnd #(some-> drag-fns :end (apply [ref]))}
          (dom/span #js {:className "card-id"} id)
          (for [a assignees]
            (assignee a))
          (dom/span #js {:className "text"} text))))))

(def card (om/factory Card {:keyfn :id}))
