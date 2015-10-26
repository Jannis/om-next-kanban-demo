(ns kanban.state)

(def initial-state
  {:boards
   [{:id 1 :name "Developer" :lanes [{:id 10}
                                     {:id 11}
                                     {:id 12}
                                     {:id 13}]}
    {:id 2 :name "Tester" :lanes [{:id 13}
                                  {:id 14}
                                  {:id 15}
                                  {:id 10}]}]
   :lanes
   [{:id 10 :name "Issues" :cards [{:id 102}]}
    {:id 11 :name "Backlog" :cards [{:id 100} {:id 101} {:id 104}]}
    {:id 12 :name "Doing" :cards [{:id 103}]}
    {:id 13 :name "Test" :cards [{:id 105}]}
    {:id 14 :name "Testing" :cards []}
    {:id 15 :name "Done" :cards []}]
   :cards
   [{:id 100 :text "Allow users to edit cards"}
    {:id 101 :text "Allow users to change lane names"}
    {:id 102 :text "Fix card drag-and-drop on IE8"}
    {:id 103 :text "Implement basic Kanban demo app"}
    {:id 104 :text "Figure out how to deploy the demo app on Heroku"}
    {:id 105 :text "Write instructions on how to run the demo app"}]})
