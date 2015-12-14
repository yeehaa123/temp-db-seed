(ns ^:figwheel-always dbseed.core
    (:require [cljs.nodejs :as nodejs]
              [dbseed.design-doc :refer [design-doc]]))

(nodejs/enable-util-print!)

(defonce nano ((nodejs/require "nano") "http://localhost:5984"))

(def design-doc-name "_design/query")

(def db (-> nano
            .-db
            (.use "sample")))

(defn to-clj [json]
  (-> json
      (js->clj :keywordize-keys true)))

(defn insert-doc [doc]
  (.insert db (clj->js doc) design-doc-name
           (fn [err succes] (println err succes))))

(defn delete-doc [name rev cb]
  (.destroy db name rev cb))

(defn update-design-doc []
  (.get db design-doc-name
        (fn [err body]
          (if-let [rev (:_rev (to-clj body))]
            (delete-doc design-doc-name rev
                        (fn [err body]
                          (when-not err (insert-doc design-doc))))
            (insert-doc design-doc)))))

(defn list-all []
  (let [options (clj->js {:include_docs true})
        callback (fn [err body] (to-clj body))]
  (->  (.list db options callback))))

(def -main (fn [] nil))
(set! *main-cli-fn* -main)
