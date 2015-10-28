(ns kanban.components.card-editor
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.components.card :refer [Assignee assignee]]))

(defui CardEditor
  static om/Ident
  (ident [this props]
    [:card/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :text {:assignees (om/get-query Assignee)}])
  Object
  (toggle-assignee [this ref]
    (let [{:keys [assignees update-fn]} (om/props this)]
      (letfn [(add-or-remove* [x xs]
                (if (some #{x} xs)
                  (remove #{x} xs)
                  (conj xs x)))]
        (->> assignees
            (map #(-> [:user/by-id (:id %)]))
            (add-or-remove* ref)
            (into [])
            (assoc {} :assignees)
            (update-fn (om/get-ident this))))))

  (update-text [this text]
    (let [{:keys [update-fn]} (om/props this)]
      (update-fn (om/get-ident this) {:text text})))

  (render [this]
    (let [{:keys [id text assignees users close-fn update-fn]} (om/props this)]
      (dom/div #js {:className "card-editor"}
        (dom/div #js {:className "closer" :onClick close-fn})
        (dom/div #js {:className "content"}
          (dom/h1 #js {:className "title"}
            "Edit card"
            (dom/span #js {:className "card-id"} id))
          (dom/form #js {:onSubmit #(.preventDefault %)}
            (dom/div #js {:className "form-row"}
              (dom/label nil "Assignees:")
              (dom/div #js {:className "input"} nil
                (for [user users]
                  (let [selected (some #{user} assignees)]
                    (assignee
                      (assoc user :with-name true
                                  :activate-fn
                                  #(.toggle-assignee this %)
                                  :selected selected))))))
            (dom/div #js {:className "form-row"}
              (dom/label nil "Text:")
              (dom/textarea
                #js {:value text
                     :placeholder "Enter a card description here..."
                     :onChange #(.update-text this (.. % -target -value))})))
          (dom/p #js {:className "buttons"}
            (dom/button #js {:onClick close-fn} "Close")))))))

(def card-editor (om/factory CardEditor {:keyfn #(-> [:card-editor (:id %)])}))
