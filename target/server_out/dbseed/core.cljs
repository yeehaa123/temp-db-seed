(ns ^:figwheel-always dbseed.core
    (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defonce nano ((nodejs/require "nano") "http://localhost:5984"))

(def db (-> nano
            .-db
            (.use "sample")))

(defn to-clj [json]
  (-> json
      (js->clj :keywordize-keys true)
      :rows
      first
      println))

(defn list-all []
  (->  (.list db (clj->js {:include_docs true}) (fn [err body] (to-clj body)))))

(def -main (fn [] nil))
(set! *main-cli-fn* -main)
