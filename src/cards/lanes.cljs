(ns cards.lanes
  (:require [devcards.core :as dc :refer-macros [defcard]]
            [om.next :as om]
            [om.dom :as dom]
            [kanban.components.lane :as kanban-lane]))

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
