(ns kanban.parsing.lanes
  (:require [om.next :as om]
            [kanban.parsing.cards :as cards]
            [kanban.reconciler :refer [mutate read]]))

(defmethod read :lanes
  [{:keys [state query]} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

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
  {:value {:keys [card from to]}
   :action #(swap! state move-card card from to)})

(defn create-card [st lane]
  (let [{:keys [card state]} (cards/create-card st)]
    (-> state
        (update-in (conj lane :cards) add-to-cards card)
        (assoc :cards/editing card))))

(defmethod mutate 'lanes/create-card
  [{:keys [state]} _ {:keys [lane]}]
  {:value {:keys [lane :cards :cards/editing]}
   :action #(swap! state create-card lane)})

(defn delete-card [st lane card]
  (-> st
      (cards/delete-card card)
      (update-in (conj lane :cards) #(remove #{%2} %1) card)))

(defmethod mutate 'lanes/delete-card
  [{:keys [state]} _ {:keys [lane card]}]
  {:value {:keys [lane card]}
   :action #(swap! state delete-card lane card)})
