(ns kanban.components.about
  (:require [om.dom :as dom]))

(defn about []
  (dom/div #js {:className "about"}
    (dom/h2 nil "What is this?")
    (dom/p nil
      "This is an inofficial demo application built with "
      (dom/a #js {:href "https://github.com/omcljs/om"} "Om Next")
      ". It demonstrates how Om Next can be used to write a "
      "Kanban web app with drag and drop, modal dialogs and more. "
      "Why not start by selecting a Kanban board from the menu?")
    (dom/h2 nil "How about user interface tests?")
    (dom/p nil
      "There aren't any for this demo. However, there is a "
      (dom/a #js {:href "cards.html"} "devcard interface") " exercising "
      "some of the user interface components in isolation from the demo "
      "app itself.")
    (dom/h2 nil "Where can I find the source code?")
    (dom/p nil
      "The source code for this demo app is " (dom/a
      #js {:href "https://github.com/jannis/om-next-kanban-demo"}
      "available on GitHub") ". It is licensed under GNU Affero "
      "General Public License 3.0.")
    (dom/p nil
      "For up-to-date source and documentation for Om, please refer to "
      (dom/a #js {:href "https://github.com/omcljs/om"} "its official "
      "GitHub repository") ".")
    (dom/h2 nil "Notes")
    (dom/ul nil
      (dom/li nil
        "The state and data of this app are reset on every page load or "
        "refresh.")
      (dom/li nil
        "Drag and drop may be broken on some browsers. I'm looking "
        "into a fix already.")
      (dom/li nil
        (dom/em nil
          "This app is based on an alpha version of Om Next, so the "
          "way Om works may have changed in the meantime. I also do "
          "notclaim to be using Om Next correctly in all aspects.")))))
