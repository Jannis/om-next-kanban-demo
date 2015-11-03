(ns cards.sortable-list
  (:require [clojure.string :as str]
            [devcards.core :as dc :refer-macros [defcard]]
            [om.dom :as dom]
            [kanban.components.sortable-list :refer [sortable-list]]))

(defcard
  "# Sortable List

  This is a generic list component that takes a sequence of items
  and allows these to be reordered via drag and drop. Custom functions
  to identify items and to render them in the list are supported.

  ## Invocation

  The overall sortable invocation looks like this:
  ```
  (sortable-list {:items ...
                  :key-fn (fn [item] ...)
                  :element-fn (fn [item] ...)
                  :change-fn (fn [items] ...)})
  ```

  Parameters:

  * `:items` is an ordered sequence of items of any type
  * `:key-fn` is function that must return a unique key for each item
  * `:element-fn` is a function that must return a React element for each
    item
  * `:change-fn` is a function that is called whenever the order of items
    in the list changes; it receives an ordered sequence of items in the
    same form that they were passed in to `:items`, so if `:items [1 2]`
    was passed in, `:change-fn` may be called with `[2 1]`.

  ### Example invocation

  ```
  (def data (atom {:people [{:id 1 :name \"John\"} {:id 2 :name \"Tina\"}]}))
  ...
  (sortable-list {:items (:people @data)
                  :key-fn :id
                  :element-fn (fn [person] (dom/span (:name person)))
                  :change-fn (fn [people] (swap! data assoc :people people))})
  ```

  Of course, rather than operating against a plain atom and having to watch
  it for changes yourself, you would normally use `sortable-list` with Om
  Next and have `:change-fn` mutate the app state.")

(defcard
  "## Examples")

(defcard
  "### Sortable list with words"
  (fn [state _]
    (sortable-list {:items (:items @state)
                    :key-fn identity
                    :element-fn
                    (fn [word]
                      (dom/span #js {:style #js {:border "thin solid black"
                                                 :padding "1rem"
                                                 :display "inline-block"}}
                        word))
                    :change-fn #(swap! state assoc :items %)}))
  {:items (str/split "This is a list of short words" " ")}
  {:inspect-data true})


(defcard
  "### Sortable list with numbers and a different element function"
  (fn [state _]
    (sortable-list {:items (:items @state)
                    :key-fn identity
                    :element-fn
                    (fn [number]
                      (dom/span #js {:style #js {:background "#eee"
                                                 :padding "0.5rem"
                                                 :display "inline-block"}}
                        number))
                    :change-fn #(swap! state assoc :items %)}))
  {:items [10000 20000 30000 40000 50000 60000]}
  {:inspect-data true})
