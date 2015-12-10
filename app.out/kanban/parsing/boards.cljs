(ns kanban.parsing.boards
  (:require [om.next :as om]
            [kanban.parsing.lanes :as lanes]
            [kanban.reconciler :refer [mutate read]]))

(defmethod read :boards
  [{:keys [state query]} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

(defmethod read :boards/active
  [{:keys [state query]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (om/db->tree query (get st key) st)}
      {:value nil})))

(defmethod mutate 'boards/activate
  [{:keys [state]} _ {:keys [ref]}]
  {:value {:keys [:boards/active]}
   :action #(swap! state assoc :boards/active ref)})

(defmethod read :boards/editing
  [{:keys [state query]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (om/db->tree query (get st key) st)}
      {:value nil})))

(defmethod mutate 'boards/edit
  [{:keys [state]} _ {:keys [board]}]
  {:value {:keys [:boards/editing]}
   :action (fn [] (swap! state assoc :boards/editing board))})

(defmethod mutate 'boards/update
  [{:keys [state]} _ {:keys [board data]}]
  {:value {:keys [board]}
   :action (fn [] (swap! state update-in board #(merge % data)))})

(defn create-board [st]
  (let [id    (->> (om/db->tree [:id] (get st :boards) st)
                   (map :id)
                   (cons 0)
                   (reduce max)
                   inc)
        board {:id id :name "" :lanes []}
        ref   [:board/by-id id]]
    (-> st
        (assoc-in ref board)
        (update :boards conj ref)
        (assoc :boards/editing ref))))

(defmethod mutate 'boards/create-board
  [{:keys [state]} _ _]
  {:value {:keys [:boards :boards/editing]}
   :action #(swap! state create-board)})
