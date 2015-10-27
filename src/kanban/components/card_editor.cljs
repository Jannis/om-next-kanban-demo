(ns kanban.components.card-editor
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui CardEditor
  static om/Ident
  (ident [this props]
    [:card/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :text])
  Object
  (render [this]
    (let [{:keys [id text close-fn update-fn]} (om/props this)]
      (dom/div #js {:className "card-editor"}
        (dom/div #js {:className "closer" :onClick close-fn})
        (dom/div #js {:className "content"}
          (dom/h1 #js {:className "title"}
            "Edit card"
            (dom/span #js {:className "card-id"} id))
          (dom/form #js {:onSubmit #(.preventDefault %)}
            (dom/p #js {:className "form-row"}
              (dom/label nil "Text:")
              (dom/textarea
                #js {:value text
                     :onChange
                     #(update-fn (om/get-ident this)
                                 {:text (.. % -target -value)})})))
          (dom/p #js {:className "buttons"}
            (dom/button #js {:onClick close-fn} "Close")))))))

(def card-editor (om/factory CardEditor {:keyfn :id}))
