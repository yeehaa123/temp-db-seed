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

(defn design_doc []
  (.insert db
           (clj->js
            { :views
             { :test
              { :map (fn [doc]
                       (let [flags (aget doc "flags")]
                         (js/emit flags nil)))}}})
           "_design/query"
           (fn [err succes] (println err succes))))

(defn list-all []
  (let [options (clj->js {:include_docs true})
        callback (fn [err body] (to-clj body))]
  (->  (.list db options callback))))

(def -main (fn [] nil))
(set! *main-cli-fn* -main)
