(ns kanban.parsing.boards
  (:require [kanban.parsing.lanes :as lanes]
            [kanban.reconciler :refer [mutate read]]))

(defn resolve-lanes [st board]
  (update board :lanes #(lanes/resolve-lanes st %)))

(defn get-board [st ref]
   (->> (get-in st ref)
        (resolve-lanes st)))

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
  {:value [:boards/active]
   :action #(swap! state assoc :boards/active ref)})

(defmethod read :boards/editing
  [{:keys [state]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (get-board st ref)}
      {:value nil})))

(defmethod mutate 'boards/edit
  [{:keys [state]} _ {:keys [board]}]
  {:value [:boards/editing]
   :action (fn [] (swap! state assoc :boards/editing board))})

(defmethod mutate 'boards/update
  [{:keys [state]} _ {:keys [board data]}]
  {:value [:boards :boards/active]
   :action (fn [] (swap! state update-in board #(merge % data)))})

(defn create-board [st]
  (let [id    (->> (get-boards st :boards) (map :id) (cons 0) (reduce max) inc)
        board {:id id :name "" :lanes []}
        ref   [:board/by-id id]]
    (-> st
        (assoc-in ref board)
        (update :boards conj ref)
        (assoc :boards/editing ref))))

(defmethod mutate 'boards/create-board
  [{:keys [state]} _ _]
  {:value [:boards :boards/editing]
   :action #(swap! state create-board)})
