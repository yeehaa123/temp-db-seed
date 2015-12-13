var path = require("path");
try {
    require("source-map-support").install();
} catch(err) {
}
require(path.join(path.resolve("."),"target/server_out","goog","bootstrap","nodejs.js"));
require(path.join(path.resolve("."),"target/server_out","cljs_deps.js"));
goog.global.CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"nodejs"};
goog.require("dbseed.core");
goog.require("cljs.nodejscli");

goog.require("figwheel.connect");