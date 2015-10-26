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

(defmethod read :cards/dragged
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get st key)}))

(defmethod mutate 'cards/drag
  [{:keys [state]} _ params]
  {:value [:cards/dragged]
   :action (fn [] (swap! state assoc :cards/dragged params))})
