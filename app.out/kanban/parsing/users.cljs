(ns kanban.parsing.users
  (:require [kanban.reconciler :refer [mutate read]]))

(defn get-user [st ref]
   (->> (get-in st ref)))

(defn get-users [st key]
  (->> (get st key)
       (into [] (map #(get-user st %)))))

(defn resolve-users [st refs]
  (->> refs
       (map #(get-user st %))
       (into [])))

(defmethod read :users
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-users st key)}))
