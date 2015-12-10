(ns kanban.components.board-dialog
  (:require [goog.object :as gobj]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.components.card :refer [Assignee assignee]]
            [kanban.components.sortable-list :refer [sortable-list]]))

(defui BoardDialog
  static om/Ident
  (ident [this props]
    [:board/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :name :description {:lanes [:id :name]}])
  Object
  (update [this prop value]
    (let [{:keys [update-fn]} (om/get-computed this)]
      (update-fn (om/get-ident this) {prop value})))

  (render [this]
    (let [{:keys [id name description lanes]} (om/props this)
          {:keys [close-fn]} (om/get-computed this)]
      (dom/div #js {:className "dialog"}
        (dom/div #js {:className "dialog-closer" :onClick close-fn})
        (dom/div #js {:className "dialog-content"}
          (dom/h1 #js {:className "dialog-title"}
            "Edit board" (dom/span #js {:className "board-name"} name))
          (dom/form #js {:onSubmit #(.preventDefault %)}
            (dom/div #js {:className "form-row"}
              (dom/label nil "Name:")
              (dom/input
                #js {:value name
                     :placeholder "Enter the name of the board here..."
                     :onChange #(.update this :name (.. % -target -value))}))
            (dom/div #js {:className "form-row"}
              (dom/label nil "Description:")
              (dom/textarea
                #js {:value description
                     :placeholder "Enter a description for the board here..."
                     :onChange
                     #(.update this :description (.. % -target -value))}))
            (dom/div #js {:className "form-row"}
              (dom/label nil "Lanes:")
              (sortable-list
                {:items lanes
                 :key-fn :id
                 :element-fn #(dom/span #js {:className "lane-name"} (:name %))
                 :change-fn (fn [lanes]
                              (->> lanes
                                   (map #(-> [:lane/by-id (:id %)]))
                                   (.update this :lanes)))})))
          (dom/p #js {:className "dialog-buttons"}
            (dom/button #js {:onClick close-fn} "Close"))
          (dom/div #js {:className "help"}
            (dom/h3 #js {:className "help-title"} "Help")
            (dom/ul #js {:className "instructions"}
              (dom/li nil "Change the board name via the name field")
              (dom/li nil "Change the board description via the description field")
              (dom/li nil "Change the order of lanes via drag and drop")
              (dom/li nil "Click anywhere to close the dialog"))))))))

(def board-dialog (om/factory BoardDialog {:keyfn #(-> [:board-dialog (:id %)])}))
