(ns kanban.parsing.boards
  (:require [kanban.reconciler :refer [mutate read]]))

(defn get-board [st ref]
   (->> (get-in st ref)))

(defn get-boards [st key]
  (->> (get st key)
       (into [] (map #(get-board st %)))))

(defmethod read :boards
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-boards st key)}))

(defmethod read :boards/active
  [{:keys [state]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (get-board st ref)}
      {:value nil})))

(defmethod mutate 'boards/activate
  [{:keys [state]} _ {:keys [ref]}]
  {:action #(swap! state assoc :boards/active ref)})
