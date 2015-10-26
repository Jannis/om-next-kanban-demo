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
   [{:id 10 :name "Issues" :cards []}
    {:id 11 :name "Backlog" :cards []}
    {:id 12 :name "Doing" :cards []}
    {:id 13 :name "Test" :cards []}
    {:id 14 :name "Testing" :cards []}
    {:id 15 :name "Done" :cards []}]})
