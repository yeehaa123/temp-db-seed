// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('dbseed.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof dbseed.core.nano !== 'undefined'){
} else {
dbseed.core.nano = cljs.nodejs.require.call(null,"nano").call(null,"http://localhost:5984");
}
dbseed.core.db = dbseed.core.nano.db.use("sample");
dbseed.core.to_clj = (function dbseed$core$to_clj(json){
return cljs.core.println.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))));
});
dbseed.core.list_all = (function dbseed$core$list_all(){
return dbseed.core.db.list(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true], null)),(function (err,body){
return dbseed.core.to_clj.call(null,body);
}));
});
dbseed.core._main = (function dbseed$core$_main(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = dbseed.core._main;

//# sourceMappingURL=core.js.map