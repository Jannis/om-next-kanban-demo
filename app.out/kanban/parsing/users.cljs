(ns kanban.parsing.users
  (:require [om.next :as om]
            [kanban.reconciler :refer [mutate read]]))

(defmethod read :users
  [{:keys [state query]} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))
