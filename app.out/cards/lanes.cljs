(ns cards.lanes
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [om.next :as om]
            [om.dom :as dom]
            [kanban.components.lane :as kanban-lane]
            [cards.util :refer [render-cb-info update-cb-info]]))

(def ^:export front-matter
  {:base-card-options {:frame false}})

(enable-console-print!)

(defcard
  "# Kanban lanes

   Examples demonstrating how Kanban lanes look given different properties
   or layout constraints.")

(defcard
  "## Properties

  Kanban lanes are identified by IDs, have a name and cards. But what
  happens if some of these properties are missing? And what happens if there
  are many cards?")

(defcard
  "### Lane with no id, name and lanes"
  (fn [props _] (kanban-lane/lane @props))
  {}
  {:inspect-data true})

(defcard
  "### Lane with no cards"
  (fn [props _] (kanban-lane/lane @props))
  {:id 1 :name "Backlog"}
  {:inspect-data true})

(defcard
  "### Lane with one card"
  (fn [props _] (kanban-lane/lane @props))
  {:id 1 :name "Backlog"
   :cards [{:id 2
            :text "The only card in this lane"
            :assignees [{:id 3 :username "ada" :name "Ada Lovelace"}]}]}
  {:inspect-data true})

(defcard
  "### Lane with two cards"
  (fn [props _] (kanban-lane/lane @props))
  {:id 1 :name "Backlog"
   :cards [{:id 2
            :text "The first card in this lane"
            :assignees [{:id 4 :username "ada" :name "Ada Lovelace"}]}
           {:id 3
            :text "The second card in this lane"
            :assignees [{:id 4 :username "ada" :name "Ada Lovelace"}
                        {:id 5 :username "zuse" :name "Konrad Zuse"}]}]}
  {:inspect-data true})

(defcard
  "### Lane with 50 cards"
  (fn [props _] (kanban-lane/lane @props))
  {:id 1 :name "Backlog"
   :cards (for [i (range 0 50)]
            {:id i
             :text (str "Card number " i " in this lane. "
                        "This one has a rather long caption.")
             :assignees [{:id 1 :username "ada" :name "Ada Lovelace"}]})})

(defcard
  "## Layout

  In the Kanban user interface, lanes usually appear as columns in
  boards. Due to limited screen space to render these columns, it is
  interesting to see how the rendering of lanes is affected by different
  layout constraints.")

(defcard
  "### Lane in a 50px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:display "table"
                              :width "50px"
                              :border "thin solid black"}}
      (kanban-lane/lane @props)))
  {:id 1 :name "Backlog"
   :cards [{:id 2 :text "The first card in this lane"}
           {:id 3 :text "The second card in this lane"}]})

(defcard
  "### Lane in a 100px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:display "table"
                              :width "100px"
                              :border "thin solid black"}}
      (kanban-lane/lane @props)))
  {:id 1 :name "Backlog"
   :cards [{:id 2 :text "The first card in this lane"}
           {:id 3 :text "The second card in this lane"}]})

(defcard
  "### Lane in a 150px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:display "table"
                              :width "150px"
                              :border "thin solid black"}}
      (kanban-lane/lane @props)))
  {:id 1 :name "Backlog"
   :cards [{:id 2 :text "The first card in this lane"}
           {:id 3 :text "The second card in this lane"}]})

(defcard
  "### Lane in a 200px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:display "table"
                              :width "200px"
                              :border "thin solid black"}}
      (kanban-lane/lane @props)))
  {:id 1 :name "Backlog"
   :cards [{:id 2 :text "The first card in this lane"}
           {:id 3 :text "The second card in this lane"}]})

(defcard
  "### Lane in a 300px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:display "table"
                              :width "300px"
                              :border "thin solid black"}}
      (kanban-lane/lane @props)))
  {:id 1 :name "Backlog"
   :cards [{:id 2 :text "The first card in this lane"}
           {:id 3 :text "The second card in this lane"}]})

 (defcard
   "### Lane with 50 cards in a 300px high parent with no overflow

   The resulting layout should be 300px high with the lane providing
   a way to scroll up and down."
   (fn [props _]
     (dom/div #js {:style #js {:display "table"
                               :width "300px"
                               :height "300px"
                               :border "thin solid black"}}
       (kanban-lane/lane @props)))
   {:id 1 :name "Backlog"
    :cards (for [i (range 0 50)]
             {:id i
              :text (str "Card number " i " in this lane. "
                         "This one has a rather long caption.")
              :assignees [{:id 1 :username "ada" :name "Ada Lovelace"}]})})

(defcard
  "## Behaviour")

(defcard
  "### Lane with a card create callback"
  (fn [state _]
    (dom/div nil
      (kanban-lane/lane
        (om/computed (:lane @state)
                     {:card-create-fn (partial update-cb-info :create state)}))
      (render-cb-info :create state "Card create")))
  {:lane {:id 1 :name "Backlog"}}
  {:inspect-data true :history true})

(defcard
  "### Lane with a card edit callback"
  (fn [state _]
    (dom/div nil
      (kanban-lane/lane
        (om/computed (:lane @state)
                     {:card-edit-fn (partial update-cb-info :edit state)}))
      (render-cb-info :edit state "Card edit")))
  {:lane {:id 1
          :name "Backlog"
          :cards [{:id 2 :text "Click this card to edit it"}
                  {:id 3 :text "Or click this one instead"}]}}
  {:inspect-data true :history true})

(defcard
  "### Lane with a card drag start callback"
  (fn [state _]
    (dom/div nil
      (kanban-lane/lane
        (om/computed (:lane @state)
                     {:card-drag-fns
                      {:start (partial update-cb-info :drag-start state)}}))
      (render-cb-info :drag-start state "Card drag start")))
  {:lane {:id 1
          :name "Backlog"
          :cards [{:id 2 :text "Drag me to trigger the drag start callback"}
                  {:id 3 :text "Or drag me instead"}]}}
  {:inspect-data true :history true})

(defcard
  "### Lane with a card drag end callback"
  (fn [state _]
    (dom/div nil
      (kanban-lane/lane
        (om/computed (:lane @state)
                     {:card-drag-fns
                      {:end (partial update-cb-info :drag-end state)}}))
      (render-cb-info :drag-end state "Card drag end")))
  {:lane {:id 1
          :name "Backlog"
          :cards [{:id 2 :text "Drop the card anywhere to end dragging it"}
                  {:id 3 :text "It works with this card as well"}]}}
  {:inspect-data true :history true})

(defcard
  "### Lane with a card drop callback"
  (fn [state _]
    (dom/div nil
      (kanban-lane/lane
        (om/computed (:lane @state)
                     {:card-drag-fns
                      {:drop (partial update-cb-info :drop state)}}))
      (render-cb-info :drop state "Card drop")))
  {:lane {:id 1
          :name "Backlog"
          :cards [{:id 2 :text "Drag and drop this card inside the lane"}
                  {:id 3 :text "It works with this card as well"}]}}
  {:inspect-data true :history true})

(defcard
  "### Two lanes with a card drag and drop callbacks"
  (fn [state _]
    (dom/div nil
      (dom/div #js {:style #js {:display "table"
                                :width "100%"
                                :tableLayout "fixed"
                                :borderSpacing "0.5rem"}}
        (for [lane (:lanes @state)]
          (kanban-lane/lane
            (om/computed lane
                         {:card-drag-fns
                          {:start (partial update-cb-info :start state)
                           :end (partial update-cb-info :end state)
                           :drop (partial update-cb-info :drop state)}}))))
      (render-cb-info :start state "Card drag start")
      (render-cb-info :end state "Card drag end")
      (render-cb-info :drop state "Card drop")))
  {:lanes [{:id 1
            :name "Backlog"
            :cards [{:id 20 :text "This is a card from backlog"}
                    {:id 30 :text "This is also a card from backlog"}]}
           {:id 2
            :name "Doing"
            :cards [{:id 40 :text "This is a card from doing"}
                    {:id 50 :text "This is also a card from doing"}]}]}
  {:inspect-data true :history true})

(defn item-with-id [coll id]
  (println "item-with-id" coll id)
  (->> coll (filter #(= id (:id %))) first))

(defn move-card [state to-ref]
  (swap! state
    (fn [state]
      (let [[from-ref card-ref] (:drag-info state)]
        (if (= to-ref from-ref)
          state
          (let [from (-> state :lanes (item-with-id (second from-ref)))
                to   (-> state :lanes (item-with-id (second to-ref)))
                card (-> from :cards (item-with-id (second card-ref)))
                new-from (update from :cards #(remove #{%2} %1) card)
                new-to (update to :cards conj card)]
            (-> state
                (update :lanes #(replace {from new-from
                                          to new-to} %)))))))))

(defcard
  "### Two lanes with working drag and drop"
  (fn [state _]
    (dom/div nil
      (dom/div #js {:style #js {:display "table"
                                :width "100%"
                                :tableLayout "fixed"
                                :borderSpacing "0.5rem"}}
        (for [lane (:lanes @state)]
          (kanban-lane/lane
            (om/computed
              lane
              {:card-drag-fns
               {:start #(swap! state assoc :drag-info [%1 %2])
                :end #(swap! state dissoc :drag-info)
                :drop #(move-card state %)}}))))))
  {:lanes [{:id 1
            :name "Backlog"
            :cards [{:id 20 :text "This is a card from backlog"}
                    {:id 30 :text "This is also a card from backlog"}]}
           {:id 2
            :name "Doing"
            :cards [{:id 40 :text "This is a card from doing"}
                    {:id 50 :text "This is also a card from doing"}]}]}
  {:inspect-data true :history true})
