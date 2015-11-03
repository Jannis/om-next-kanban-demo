(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:36643" {:on-jsload (fn* [] (+))})