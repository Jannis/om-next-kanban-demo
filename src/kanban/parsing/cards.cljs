(ns kanban.parsing.cards
  (:require [om.next :as om]
            [kanban.parsing.users :as users]
            [kanban.reconciler :refer [mutate read]]))

(defn create-card [st]
  (let [id   (->> (om/db->tree [:id] (get st :cards) st)
                  (map :id)
                  (cons 0)
                  (reduce max)
                  inc)
        card {:id id :text "" :assignees []}
        ref  [:card/by-id id]]
    {:card ref
     :state (-> st
                (assoc-in ref card)
                (update :cards conj ref))}))

(defn delete-card [st ref]
  (-> st
      (update :cards #(remove #{%2} %1) ref)
      (update :card/by-id dissoc (second ref))))

(defmethod read :cards
  [{:keys [state query]} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

(defmethod read :cards/dragged
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get st key)}))

(defmethod mutate 'cards/drag
  [{:keys [state]} _ params]
  {:value {:keys [:cards/dragged]}
   :action (fn []
             (if-not (empty? params)
               (swap! state assoc :cards/dragged params)
               (swap! state assoc :cards/dragged nil)))})

(defmethod read :cards/editing
  [{:keys [state query]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (om/db->tree query (get st key) st)}
      {:value nil})))

(defmethod mutate 'cards/edit
  [{:keys [state]} _ {:keys [card]}]
  {:value {:keys [:cards/editing]}
   :action (fn [] (swap! state assoc :cards/editing card))})

(defmethod mutate 'cards/update
  [{:keys [state]} _ {:keys [card data]}]
  {:value {:keys [card]}
   :action (fn [] (swap! state update-in card #(merge % data)))})
