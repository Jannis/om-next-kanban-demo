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

(defn add-to-cards [cards ref]
  (into [] (cond-> cards
             (not (some #{ref} cards)) (conj ref))))

(defn move-card [state card from to]
  (letfn [(remove* [cards ref]
            (into [] (remove #{ref} cards)))]
    (-> state
        (update-in (conj from :cards) remove* card)
        (update-in (conj to :cards) add-to-cards card))))

(defmethod mutate 'lanes/move-card
  [{:keys [state]} _ {:keys [card from to]}]
  {:value [:lanes :cards]
   :action #(swap! state move-card card from to)})

(defn create-card [st lane]
  (println "create-card" lane)
  (let [{:keys [card state]} (cards/create-card st)]
    (-> state
        (update-in (conj lane :cards) add-to-cards card)
        (assoc :cards/editing card))))

(defmethod mutate 'lanes/create-card
  [{:keys [state]} _ {:keys [lane]}]
  {:value [:lanes :cards :cards/editing]
   :action #(swap! state create-card lane)})
