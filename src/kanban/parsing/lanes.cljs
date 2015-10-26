(ns kanban.parsing.lanes
  (:require [kanban.parsing.cards :as cards]
            [kanban.reconciler :refer [mutate read]]))

(defn resolve-cards [st lane]
  (update lane :cards #(cards/resolve-cards st %)))

(defn get-lane [st ref]
   (->> (get-in st ref)
        (resolve-cards st)))

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
