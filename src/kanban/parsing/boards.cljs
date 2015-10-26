(ns kanban.parsing.boards
  (:require [kanban.reconciler :refer [read]]))

(defn get-boards [st key]
  (->> (get st key)
       (into [] (map #(get-in st %)))))

(defmethod read :boards
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-boards st key)}))
