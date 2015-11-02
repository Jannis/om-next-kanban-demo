(ns cards.ui
  (:require [devcards.core :as dc :include-macros true]
            [cards.cards]))

(defn start []
  (dc/start-devcard-ui!))
