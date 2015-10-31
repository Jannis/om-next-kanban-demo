(ns kanban.util
  (:require [clojure.string :refer [join]]))

(defn class-names [m]
  (->> (filter second m)
       (map (comp name first))
       (join " ")))
