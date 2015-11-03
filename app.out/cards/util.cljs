(ns cards.util
  (:require [om.dom :as dom]))

(defn update-cb-info [tag state & params]
  (swap! state (fn [state] (-> state
                               (update-in [:callbacks tag :counter] inc)
                               (assoc-in [:callbacks tag :params] params)))))

(defn render-cb-info [tag state label]
  (let [{:keys [counter params]} (get-in @state [:callbacks tag])]
    (dom/div #js {:style #js {:marginTop "1rem"}}
      (dom/strong nil "Callback info: " label)
      (dom/div nil (str "Triggered " (or counter 0) " times"))
      (dom/div nil "Parameters: " (dom/code nil (str params))))))
