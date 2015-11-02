(ns kanban.components.completion-input
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.util :refer [class-names index-of]]))

(defn match-key [x]
  (let [props (cond-> x (om/component? x) om/props)]
    ((:key-fn (om/get-computed props)) props)))

(defui CompletionMatch
  Object
  (render [this]
    (let [{:keys [selected activate-fn element-fn]} (om/get-computed this)]
      (dom/div #js {:className (class-names {:completion-input-match true
                                             :selected selected})
                    :onClick #(when activate-fn (activate-fn))}
        (element-fn (om/props this))))))

(def completion-match (om/factory CompletionMatch {:keyfn match-key}))

(defui CompletionInput
  Object
  (update-matches [this text]
    (->> this om/props :items
         (filter (partial (-> this om/props :match-fn) text))
         (into [])
         (om/update-state!
           this
           (fn [state matches]
             (-> state
                 (assoc :matches matches)
                 (update :selected-match
                   (fn [state selected-match]
                     (if (some #{selected-match} matches)
                       selected-match
                       (first matches)))))))))

  (update-text [this text]
    (om/update-state! this assoc :text text)
    (.update-matches this text))

  (show-matches [this show]
    (println "show matches" show)
    (om/update-state! this assoc :show-matches show))

  (activate-match [this match]
    (.show-matches this false)
    (.update-text this "")
    (-> this (om/react-ref :input) dom/node .focus)
    (let [{:keys [activate-fn]} (om/props this)]
      (when (and activate-fn match)
        (activate-fn match))))

  (handle-backspace [this e]
    (if (and (zero? (.. e -target -selectionStart))
             (= (.. e -target -selectionStart)
                (.. e -target -selectionEnd)))
      (let [{:keys [back-fn]} (om/props this)]
        (when back-fn
          (back-fn this)
          (.preventDefault e)))))

  (handle-up [this e]
    (let [{:keys [matches selected-match]} (om/get-state this)
          index (index-of selected-match matches)]
      (->> (max (dec index) 0)
           (get matches)
           (om/update-state! this assoc :selected-match))))

  (handle-down [this e]
    (let [{:keys [matches selected-match]} (om/get-state this)
          index (index-of selected-match matches)]
      (->> (min (inc index) (-> matches count (- 1)))
           (get matches)
           (om/update-state! this assoc :selected-match))))

  (handle-escape [this e]
    (.show-matches this false))

  (handle-return [this e]
    (when-let [match (:selected-match (om/get-state this))]
      (.activate-match this match)))

  (key-down [this e]
    (.show-matches this true)
    (case (.-keyCode e)
      8  (.handle-backspace this e)
      38 (.handle-up this e)
      40 (.handle-down this e)
      27 (.handle-escape this e)
      13 (.handle-return this e)
         (println "key down" (.-keyCode e))))

  (componentWillMount [this]
    (.update-text this ""))

  (componentWillReceiveProps [this props]
    (.update-matches this (-> this (om/react-ref :input) .-value)))

  (render [this]
    (dom/div #js {:className "completion-input"
                  :onFocus #(.show-matches this true)
                  :onFocusOut #(.show-matches this false)}
      (dom/input #js {:ref :input
                      :value (:text (om/get-state this))
                      :placeholder (:placeholder (om/props this))
                      :className "completion-input-input"
                      :onChange #(.update-text this (.. % -target -value))
                      :onKeyDown #(.key-down this %)})
      (let [{:keys [matches show-matches selected-match]} (om/get-state this)
            {:keys [key-fn element-fn]} (om/props this)]
        (if (and matches show-matches)
          (dom/div #js {:className "completion-input-matches"}
            (for [m matches]
              (completion-match
                (om/computed m {:selected (= m selected-match)
                                :key-fn key-fn
                                :activate-fn #(.activate-match this m)
                                :element-fn element-fn})))))))))

(def completion-input (om/factory CompletionInput))
