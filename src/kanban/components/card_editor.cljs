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
    (let [{:keys [assignees]} (om/props this)
          {:keys [update-fn]} (om/get-computed this)]
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
    (let [{:keys [update-fn]} (om/get-computed this)]
      (update-fn (om/get-ident this) {:text text})))

  (render [this]
    (let [{:keys [id text assignees]} (om/props this)
          {:keys [users close-fn update-fn]} (om/get-computed this)]
      (dom/div #js {:className "dialog"}
        (dom/div #js {:className "dialog-closer" :onClick close-fn})
        (dom/div #js {:className "dialog-content"}
          (dom/h1 #js {:className "dialog-title"}
            "Edit card" (dom/span #js {:className "card-id"} id))
          (dom/form #js {:onSubmit #(.preventDefault %)}
            (dom/div #js {:className "form-row"}
              (dom/label nil "Assignees:")
              (dom/div #js {:className "input"} nil
                (for [user users]
                  (let [selected (some #{user} assignees)]
                    (assignee
                      (om/computed user
                                   {:with-name true
                                    :activate-fn #(.toggle-assignee this %)
                                    :selected selected}))))))
            (dom/div #js {:className "form-row"}
              (dom/label nil "Text:")
              (dom/textarea
                #js {:value text
                     :placeholder "Enter a card description here..."
                     :onChange #(.update-text this (.. % -target -value))})))
          (dom/p #js {:className "dialog-buttons"}
            (dom/button #js {:onClick close-fn} "Close"))
          (dom/div #js {:className "help"}
            (dom/h3 #js {:className "help-title"} "Help")
            (dom/ul #js {:className "instructions"}
              (dom/li nil "Edit card assignees by clicking on their names")
              (dom/li nil "Change the card description via the text field")
              (dom/li nil "Click anywhere to close the dialog"))))))))

(def card-editor (om/factory CardEditor {:keyfn #(-> [:card-editor (:id %)])}))
