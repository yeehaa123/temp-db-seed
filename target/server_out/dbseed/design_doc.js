// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('dbseed.design_doc');
goog.require('cljs.core');
dbseed.design_doc.goals = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(function (doc){
var goal = (doc["goal"]);
return emit(goal,null);
}),new cljs.core.Keyword(null,"reduce","reduce",-281692167),"_count"], null);
dbseed.design_doc.flags = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(function (doc){
var flags = (doc["flags"]);
return flags.forEach(((function (flags){
return (function (flag){
return emit(flag,null);
});})(flags))
);
}),new cljs.core.Keyword(null,"reduce","reduce",-281692167),"_count"], null);
dbseed.design_doc.curators = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(function (doc){
return emit((doc["curator"]),null);
}),new cljs.core.Keyword(null,"reduce","reduce",-281692167),"_count"], null);
dbseed.design_doc.tags = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),(function (doc){
var checkpoints = (doc["checkpoints"]);
var checkpoint_keys = Object.keys((doc["checkpoints"]));
var concat_tags = ((function (checkpoints,checkpoint_keys){
return (function (acc,key){
return acc.concat(((checkpoints[key])["tags"]));
});})(checkpoints,checkpoint_keys))
;
var tags = checkpoint_keys.reduce(concat_tags,(new Array()));
return tags.forEach(((function (checkpoints,checkpoint_keys,concat_tags,tags){
return (function (tag){
return emit(tag,null);
});})(checkpoints,checkpoint_keys,concat_tags,tags))
);
}),new cljs.core.Keyword(null,"reduce","reduce",-281692167),"_count"], null);
dbseed.design_doc.views = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"goals","goals",-1712076283),dbseed.design_doc.goals,new cljs.core.Keyword(null,"flags","flags",1775418075),dbseed.design_doc.flags,new cljs.core.Keyword(null,"curators","curators",-1054568106),dbseed.design_doc.curators,new cljs.core.Keyword(null,"tags","tags",1771418977),dbseed.design_doc.tags], null);
dbseed.design_doc.design_doc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"views","views",1450155487),dbseed.design_doc.views], null);

//# sourceMappingURL=design_doc.js.map