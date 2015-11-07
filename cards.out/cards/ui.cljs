(ns cards.ui
  (:require [devcards.core :as dc :include-macros true]
            [cards.cards]
            [cards.lanes]
            [cards.sortable-list]))

(defn start []
  (dc/start-devcard-ui!))
