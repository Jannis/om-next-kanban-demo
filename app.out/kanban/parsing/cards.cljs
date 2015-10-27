(ns kanban.parsing.cards
  (:require [kanban.parsing.users :as users]
            [kanban.reconciler :refer [mutate read]]))

(defn get-card [st ref]
   (-> (get-in st ref)
       (update :assignees #(users/resolve-users st %))))

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

(defmethod read :cards/editing
  [{:keys [state]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (get-card st ref)}
      {:value nil})))

(defmethod mutate 'cards/edit
  [{:keys [state]} _ {:keys [card]}]
  {:value [:cards/editing]
   :action (fn [] (swap! state assoc :cards/editing card))})

(defmethod mutate 'cards/update
  [{:keys [state]} _ {:keys [card data]}]
  {:action (fn [] (swap! state update-in card #(merge % data)))})
