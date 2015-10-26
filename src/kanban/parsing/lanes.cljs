(ns kanban.parsing.lanes
  (:require [kanban.reconciler :refer [mutate read]]))

(defn get-lane [st ref]
   (->> (get-in st ref)))

(defn get-lanes [st key]
  (->> (get st key)
       (into [] (map #(get-lane st %)))))

(defn resolve-lanes [st refs]
  (->> refs
       (map #(get-lane st %))
       (into [])))

(defmethod read :lanes
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-lanes st key)}))
