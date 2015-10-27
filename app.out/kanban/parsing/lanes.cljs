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

(defn move-card [state card from to]
  (letfn [(remove* [cards ref]
            (into [] (remove #{ref} cards)))
          (add* [cards ref]
            (into [] (cond-> cards
                       (not (some #{ref} cards)) (conj ref))))]
    (-> state
        (update-in (conj from :cards) remove* card)
        (update-in (conj to :cards) add* card))))

(defmethod mutate 'lanes/move-card
  [{:keys [state]} _ {:keys [card from to]}]
  {:action #(swap! state move-card card from to)})
