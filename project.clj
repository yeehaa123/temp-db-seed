(defproject dbseed "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.107"]]
  :plugins [[lein-figwheel "0.5.0-2"]
            [lein-npm "0.6.1"]]
  :npm {:dependencies [[nano "6.1.5"]]}
  :clean-targets ^{:protect false} ["target"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["server_src", "dev"]
                        :figwheel true
                        :compiler {:main dbseed.core
                                   :output-to "target/server_out/dbseed.js"
                                   :output-dir "target/server_out"
                                   :target :nodejs
                                   :optimizations :none
                                   :source-map true }}]}
  :profiles {:dev
             {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.0-2"]]
                   :source-paths ["server_src" "dev"] }
             :repl { :plugins [[cider/cider-nrepl "0.9.1"]] }}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :figwheel {})
