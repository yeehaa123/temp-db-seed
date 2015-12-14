(ns dbseed.design-doc)

(def goals   {:map (fn [doc]
                     (let [goal (aget doc "goal")]
                       (js/emit goal nil)))
              :reduce "_count"})

(def flags    {:map (fn [doc]
                      (let [flags (aget doc "flags")]
                        (.forEach flags (fn [flag] (js/emit flag nil)))))
               :reduce "_count"})

(def curators {:map (fn [doc] (js/emit (aget doc "curator") nil))
               :reduce "_count"})

(def tags     {:map (fn [doc]
                      (let [checkpoints (aget doc "checkpoints")
                            checkpoint-keys (.keys js/Object (aget doc "checkpoints"))
                            concat-tags (fn [acc key]
                                          (.concat acc (aget (aget checkpoints key) "tags")))
                            tags (.reduce checkpoint-keys concat-tags (new js/Array))]
                        (.forEach tags (fn [tag] (js/emit tag nil)))))
               :reduce "_count" })

(def views {:goals    goals
            :flags    flags
            :curators curators
            :tags     tags})

(def design-doc
  {:views views})
