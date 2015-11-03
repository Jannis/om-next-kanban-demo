(ns cards.cards
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [om.next :as om]
            [om.dom :as dom]
            [kanban.components.card :as kanban-card]
            [cards.util :refer [render-cb-info update-cb-info]]))

(enable-console-print!)

(defcard
  "# Kanban cards

   Examples demonstrating how Kanban cards look given different properties
   or layout constraints.")

(defcard
  "## Properties

  Kanban cards are identified by IDs, have a text and assignees. But what
  happens if some of these properties are missing? And what happens if there
  are many assignees?")

(defcard
  "### Card with no id, text and assignees"
  (fn [props _] (kanban-card/card @props))
  {}
  {:inspect-data true})

(defcard
  "### Card with no assignees"
  (fn [props _] (kanban-card/card @props))
  {:id 1 :text "Card with no assignees"}
  {:inspect-data true})

(defcard
  "### Card with one assignee"
  (fn [props _] (kanban-card/card @props))
  {:id 1 :text "Card with one assignee"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}]}
  {:inspect-data true})

(defcard
  "### Card with two assignees"
  (fn [props _] (kanban-card/card @props))
  {:id 1 :text "Card with two assignees"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}
               {:id 3 :username "zuse" :name "Konrad Zuse"}]}
  {:inspect-data true})

(defcard
  "## Layout

  In the Kanban user interface, cards usually appear in lanes with
  narrow width. It is therefor interesting to see how their rendering
  is affected by different layout constraints.")

(defcard
  "### Card in a 50px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:width "50px"
                              :border "thin solid black"}}
      (kanban-card/card @props)))
  {:id 1 :text "Card with a reasonable amount of text in a 50px wide parent"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}
               {:id 3 :username "zuse" :name "Konrad Zuse"}]})

(defcard
  "### Card in a 100px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:width "100px"
                              :border "thin solid black"}}
      (kanban-card/card @props)))
  {:id 1 :text "Card with a reasonable amount of text in a 100px wide parent"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}
               {:id 3 :username "zuse" :name "Konrad Zuse"}]})

(defcard
  "### Card in a 200px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:width "200px"
                              :border "thin solid black"}}
      (kanban-card/card @props)))
  {:id 1 :text "Card with a reasonable amount of text in a 200px wide parent"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}
               {:id 3 :username "zuse" :name "Konrad Zuse"}]})

(defcard
  "### Card in a 300px wide parent"
  (fn [props _]
    (dom/div #js {:style #js {:width "300px"
                              :border "thin solid black"}}
      (kanban-card/card @props)))
  {:id 1 :text "Card with a reasonable amount of text in a 300px wide parent"
   :assignees [{:id 2 :username "ada" :name "Ada Lovelace"}
               {:id 3 :username "zuse" :name "Konrad Zuse"}]})

(defcard
  "## Behaviour")

(defcard
  "### Card with an activate callback"
  (fn [state _]
    (dom/div nil
      (kanban-card/card
        (om/computed (:card @state)
                     {:activate-fn (partial update-cb-info :activate state)}))
      (render-cb-info :activate state "Activate")))
  {:card {:id 1 :text "Initial text"}}
  {:inspect-data true :history true})

(defcard
  "### Card with a drag start callback"
  (fn [state _]
    (dom/div nil
      (kanban-card/card
        (om/computed (:card @state)
                     {:drag-fns
                      {:start (partial update-cb-info :drag-start state)}}))
      (render-cb-info :drag-start state "Drag start")))
  {:card {:id 1 :text "Initial text"}}
  {:inspect-data true :history true})

(defcard
  "### Card with a drag end callback"
  (fn [state _]
    (dom/div nil
      (kanban-card/card
        (om/computed (:card @state)
                     {:drag-fns
                      {:end (partial update-cb-info :drag-end state)}}))
      (render-cb-info :drag-end state "Drag end")))
  {:card {:id 1 :text "Initial text"}}
  {:inspect-data true :history true})
