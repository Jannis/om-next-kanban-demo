(ns kanban.util
  (:require [clojure.string :refer [join]]))

(defn class-names [m]
  (->> (filter second m)
       (map (comp name first))
       (join " ")))

(defn indexes-of [x coll]
  (keep-indexed #(when (= x %2) %1) coll))

(defn index-of [x coll]
  (first (indexes-of x coll)))
