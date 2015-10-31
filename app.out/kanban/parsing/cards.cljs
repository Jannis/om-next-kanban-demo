(ns kanban.parsing.cards
  (:require [thi.ng.validate.core :as v]
            [kanban.parsing.users :as users]
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

(defn create-card [st]
  (let [id   (->> (get-cards st :cards) (map :id) (cons 0) (reduce max) inc)
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
   :action (fn []
             (if-not (empty? params)
               (swap! state assoc :cards/dragged params)
               (swap! state assoc :cards/dragged nil)))})

(defmethod read :cards/editing
  [{:keys [state]} key _]
  (let [st @state]
    (if-let [ref (get st key)]
      {:value (get-card st ref)}
      {:value nil})))

(defmethod read :cards/editing-errors
  [{:keys [state]} key _]
  (let [st @state]
    (println (get st key))
    {:value (or (get st key) {})}))

(defmethod mutate 'cards/edit
  [{:keys [state]} _ {:keys [card]}]
  {:value [:cards/editing]
   :action (fn [] (swap! state assoc :cards/editing card))})

(def card-schema
  {:id        [(v/number) (v/pos)]
   :assignees [(v/optional (v/vector))]
   :text      [(v/string) (v/min-length 1 "The description may not be empty")]})

(defn validate-card [card]
  (assoc card :errors (second (v/validate card card-schema))))

(defmethod mutate 'cards/update
  [{:keys [state]} _ {:keys [card data]}]
  {:value [:cards]
   :action #(swap! state update-in card (comp validate-card merge) data)})
