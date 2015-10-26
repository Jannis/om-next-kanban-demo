(ns kanban.parsing.cards
  (:require [kanban.reconciler :refer [mutate read]]))

(defn get-card [st ref]
   (->> (get-in st ref)))

(defn get-cards [st key]
  (->> (get st key)
       (into [] (map #(get-card st %)))))

(defn resolve-cards [st refs]
  (->> refs
       (map #(get-card st %))
       (into [])))

(defmethod read :cards
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-cards st key)}))
