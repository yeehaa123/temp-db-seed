// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('dbseed.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('dbseed.design_doc');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof dbseed.core.nano !== 'undefined'){
} else {
dbseed.core.nano = cljs.nodejs.require.call(null,"nano").call(null,"http://localhost:5984");
}
dbseed.core.design_doc_name = "_design/query";
dbseed.core.db = dbseed.core.nano.db.use("sample");
dbseed.core.to_clj = (function dbseed$core$to_clj(json){
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dbseed.core.insert_doc = (function dbseed$core$insert_doc(doc){
return dbseed.core.db.insert(cljs.core.clj__GT_js.call(null,doc),dbseed.core.design_doc_name,(function (err,succes){
return cljs.core.println.call(null,err,succes);
}));
});
dbseed.core.delete_doc = (function dbseed$core$delete_doc(name,rev,cb){
return dbseed.core.db.destroy(name,rev,cb);
});
dbseed.core.update_design_doc = (function dbseed$core$update_design_doc(){
return dbseed.core.db.get(dbseed.core.design_doc_name,(function (err,body){
var temp__4423__auto__ = new cljs.core.Keyword(null,"_rev","_rev",-756256188).cljs$core$IFn$_invoke$arity$1(dbseed.core.to_clj.call(null,body));
if(cljs.core.truth_(temp__4423__auto__)){
var rev = temp__4423__auto__;
return dbseed.core.delete_doc.call(null,dbseed.core.design_doc_name,rev,((function (rev,temp__4423__auto__){
return (function (err__$1,body__$1){
if(cljs.core.truth_(err__$1)){
return null;
} else {
return dbseed.core.insert_doc.call(null,dbseed.design_doc.design_doc);
}
});})(rev,temp__4423__auto__))
);
} else {
return dbseed.core.insert_doc.call(null,dbseed.design_doc.design_doc);
}
}));
});
dbseed.core.list_all = (function dbseed$core$list_all(){
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true], null));
var callback = ((function (options){
return (function (err,body){
return dbseed.core.to_clj.call(null,body);
});})(options))
;
return dbseed.core.db.list(options,callback);
});
dbseed.core._main = (function dbseed$core$_main(){
return null;
});
cljs.core._STAR_main_cli_fn_STAR_ = dbseed.core._main;

//# sourceMappingURL=core.js.map