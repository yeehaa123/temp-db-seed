// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__31282__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__31282__auto__){
return or__31282__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__31282__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38639_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38639_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38644 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38645 = null;
var count__38646 = (0);
var i__38647 = (0);
while(true){
if((i__38647 < count__38646)){
var n = cljs.core._nth.call(null,chunk__38645,i__38647);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38648 = seq__38644;
var G__38649 = chunk__38645;
var G__38650 = count__38646;
var G__38651 = (i__38647 + (1));
seq__38644 = G__38648;
chunk__38645 = G__38649;
count__38646 = G__38650;
i__38647 = G__38651;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38644);
if(temp__4425__auto__){
var seq__38644__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38644__$1)){
var c__32085__auto__ = cljs.core.chunk_first.call(null,seq__38644__$1);
var G__38652 = cljs.core.chunk_rest.call(null,seq__38644__$1);
var G__38653 = c__32085__auto__;
var G__38654 = cljs.core.count.call(null,c__32085__auto__);
var G__38655 = (0);
seq__38644 = G__38652;
chunk__38645 = G__38653;
count__38646 = G__38654;
i__38647 = G__38655;
continue;
} else {
var n = cljs.core.first.call(null,seq__38644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38656 = cljs.core.next.call(null,seq__38644__$1);
var G__38657 = null;
var G__38658 = (0);
var G__38659 = (0);
seq__38644 = G__38656;
chunk__38645 = G__38657;
count__38646 = G__38658;
i__38647 = G__38659;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38698_38705 = cljs.core.seq.call(null,deps);
var chunk__38699_38706 = null;
var count__38700_38707 = (0);
var i__38701_38708 = (0);
while(true){
if((i__38701_38708 < count__38700_38707)){
var dep_38709 = cljs.core._nth.call(null,chunk__38699_38706,i__38701_38708);
topo_sort_helper_STAR_.call(null,dep_38709,(depth + (1)),state);

var G__38710 = seq__38698_38705;
var G__38711 = chunk__38699_38706;
var G__38712 = count__38700_38707;
var G__38713 = (i__38701_38708 + (1));
seq__38698_38705 = G__38710;
chunk__38699_38706 = G__38711;
count__38700_38707 = G__38712;
i__38701_38708 = G__38713;
continue;
} else {
var temp__4425__auto___38714 = cljs.core.seq.call(null,seq__38698_38705);
if(temp__4425__auto___38714){
var seq__38698_38715__$1 = temp__4425__auto___38714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38698_38715__$1)){
var c__32085__auto___38716 = cljs.core.chunk_first.call(null,seq__38698_38715__$1);
var G__38717 = cljs.core.chunk_rest.call(null,seq__38698_38715__$1);
var G__38718 = c__32085__auto___38716;
var G__38719 = cljs.core.count.call(null,c__32085__auto___38716);
var G__38720 = (0);
seq__38698_38705 = G__38717;
chunk__38699_38706 = G__38718;
count__38700_38707 = G__38719;
i__38701_38708 = G__38720;
continue;
} else {
var dep_38721 = cljs.core.first.call(null,seq__38698_38715__$1);
topo_sort_helper_STAR_.call(null,dep_38721,(depth + (1)),state);

var G__38722 = cljs.core.next.call(null,seq__38698_38715__$1);
var G__38723 = null;
var G__38724 = (0);
var G__38725 = (0);
seq__38698_38705 = G__38722;
chunk__38699_38706 = G__38723;
count__38700_38707 = G__38724;
i__38701_38708 = G__38725;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38702){
var vec__38704 = p__38702;
var x = cljs.core.nth.call(null,vec__38704,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38704,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38704,x,xs,get_deps__$1){
return (function (p1__38660_SHARP_){
return clojure.set.difference.call(null,p1__38660_SHARP_,x);
});})(vec__38704,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38738 = cljs.core.seq.call(null,provides);
var chunk__38739 = null;
var count__38740 = (0);
var i__38741 = (0);
while(true){
if((i__38741 < count__38740)){
var prov = cljs.core._nth.call(null,chunk__38739,i__38741);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38742_38750 = cljs.core.seq.call(null,requires);
var chunk__38743_38751 = null;
var count__38744_38752 = (0);
var i__38745_38753 = (0);
while(true){
if((i__38745_38753 < count__38744_38752)){
var req_38754 = cljs.core._nth.call(null,chunk__38743_38751,i__38745_38753);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38754,prov);

var G__38755 = seq__38742_38750;
var G__38756 = chunk__38743_38751;
var G__38757 = count__38744_38752;
var G__38758 = (i__38745_38753 + (1));
seq__38742_38750 = G__38755;
chunk__38743_38751 = G__38756;
count__38744_38752 = G__38757;
i__38745_38753 = G__38758;
continue;
} else {
var temp__4425__auto___38759 = cljs.core.seq.call(null,seq__38742_38750);
if(temp__4425__auto___38759){
var seq__38742_38760__$1 = temp__4425__auto___38759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38742_38760__$1)){
var c__32085__auto___38761 = cljs.core.chunk_first.call(null,seq__38742_38760__$1);
var G__38762 = cljs.core.chunk_rest.call(null,seq__38742_38760__$1);
var G__38763 = c__32085__auto___38761;
var G__38764 = cljs.core.count.call(null,c__32085__auto___38761);
var G__38765 = (0);
seq__38742_38750 = G__38762;
chunk__38743_38751 = G__38763;
count__38744_38752 = G__38764;
i__38745_38753 = G__38765;
continue;
} else {
var req_38766 = cljs.core.first.call(null,seq__38742_38760__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38766,prov);

var G__38767 = cljs.core.next.call(null,seq__38742_38760__$1);
var G__38768 = null;
var G__38769 = (0);
var G__38770 = (0);
seq__38742_38750 = G__38767;
chunk__38743_38751 = G__38768;
count__38744_38752 = G__38769;
i__38745_38753 = G__38770;
continue;
}
} else {
}
}
break;
}

var G__38771 = seq__38738;
var G__38772 = chunk__38739;
var G__38773 = count__38740;
var G__38774 = (i__38741 + (1));
seq__38738 = G__38771;
chunk__38739 = G__38772;
count__38740 = G__38773;
i__38741 = G__38774;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38738);
if(temp__4425__auto__){
var seq__38738__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38738__$1)){
var c__32085__auto__ = cljs.core.chunk_first.call(null,seq__38738__$1);
var G__38775 = cljs.core.chunk_rest.call(null,seq__38738__$1);
var G__38776 = c__32085__auto__;
var G__38777 = cljs.core.count.call(null,c__32085__auto__);
var G__38778 = (0);
seq__38738 = G__38775;
chunk__38739 = G__38776;
count__38740 = G__38777;
i__38741 = G__38778;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38738__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38746_38779 = cljs.core.seq.call(null,requires);
var chunk__38747_38780 = null;
var count__38748_38781 = (0);
var i__38749_38782 = (0);
while(true){
if((i__38749_38782 < count__38748_38781)){
var req_38783 = cljs.core._nth.call(null,chunk__38747_38780,i__38749_38782);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38783,prov);

var G__38784 = seq__38746_38779;
var G__38785 = chunk__38747_38780;
var G__38786 = count__38748_38781;
var G__38787 = (i__38749_38782 + (1));
seq__38746_38779 = G__38784;
chunk__38747_38780 = G__38785;
count__38748_38781 = G__38786;
i__38749_38782 = G__38787;
continue;
} else {
var temp__4425__auto___38788__$1 = cljs.core.seq.call(null,seq__38746_38779);
if(temp__4425__auto___38788__$1){
var seq__38746_38789__$1 = temp__4425__auto___38788__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38746_38789__$1)){
var c__32085__auto___38790 = cljs.core.chunk_first.call(null,seq__38746_38789__$1);
var G__38791 = cljs.core.chunk_rest.call(null,seq__38746_38789__$1);
var G__38792 = c__32085__auto___38790;
var G__38793 = cljs.core.count.call(null,c__32085__auto___38790);
var G__38794 = (0);
seq__38746_38779 = G__38791;
chunk__38747_38780 = G__38792;
count__38748_38781 = G__38793;
i__38749_38782 = G__38794;
continue;
} else {
var req_38795 = cljs.core.first.call(null,seq__38746_38789__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38795,prov);

var G__38796 = cljs.core.next.call(null,seq__38746_38789__$1);
var G__38797 = null;
var G__38798 = (0);
var G__38799 = (0);
seq__38746_38779 = G__38796;
chunk__38747_38780 = G__38797;
count__38748_38781 = G__38798;
i__38749_38782 = G__38799;
continue;
}
} else {
}
}
break;
}

var G__38800 = cljs.core.next.call(null,seq__38738__$1);
var G__38801 = null;
var G__38802 = (0);
var G__38803 = (0);
seq__38738 = G__38800;
chunk__38739 = G__38801;
count__38740 = G__38802;
i__38741 = G__38803;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38808_38812 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38809_38813 = null;
var count__38810_38814 = (0);
var i__38811_38815 = (0);
while(true){
if((i__38811_38815 < count__38810_38814)){
var ns_38816 = cljs.core._nth.call(null,chunk__38809_38813,i__38811_38815);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38816);

var G__38817 = seq__38808_38812;
var G__38818 = chunk__38809_38813;
var G__38819 = count__38810_38814;
var G__38820 = (i__38811_38815 + (1));
seq__38808_38812 = G__38817;
chunk__38809_38813 = G__38818;
count__38810_38814 = G__38819;
i__38811_38815 = G__38820;
continue;
} else {
var temp__4425__auto___38821 = cljs.core.seq.call(null,seq__38808_38812);
if(temp__4425__auto___38821){
var seq__38808_38822__$1 = temp__4425__auto___38821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38808_38822__$1)){
var c__32085__auto___38823 = cljs.core.chunk_first.call(null,seq__38808_38822__$1);
var G__38824 = cljs.core.chunk_rest.call(null,seq__38808_38822__$1);
var G__38825 = c__32085__auto___38823;
var G__38826 = cljs.core.count.call(null,c__32085__auto___38823);
var G__38827 = (0);
seq__38808_38812 = G__38824;
chunk__38809_38813 = G__38825;
count__38810_38814 = G__38826;
i__38811_38815 = G__38827;
continue;
} else {
var ns_38828 = cljs.core.first.call(null,seq__38808_38822__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38828);

var G__38829 = cljs.core.next.call(null,seq__38808_38822__$1);
var G__38830 = null;
var G__38831 = (0);
var G__38832 = (0);
seq__38808_38812 = G__38829;
chunk__38809_38813 = G__38830;
count__38810_38814 = G__38831;
i__38811_38815 = G__38832;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__31282__auto__ = goog.require__;
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__38833__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38834__i = 0, G__38834__a = new Array(arguments.length -  0);
while (G__38834__i < G__38834__a.length) {G__38834__a[G__38834__i] = arguments[G__38834__i + 0]; ++G__38834__i;}
  args = new cljs.core.IndexedSeq(G__38834__a,0);
} 
return G__38833__delegate.call(this,args);};
G__38833.cljs$lang$maxFixedArity = 0;
G__38833.cljs$lang$applyTo = (function (arglist__38835){
var args = cljs.core.seq(arglist__38835);
return G__38833__delegate(args);
});
G__38833.cljs$core$IFn$_invoke$arity$variadic = G__38833__delegate;
return G__38833;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38837 = cljs.core._EQ_;
var expr__38838 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38837.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38838))){
var path_parts = ((function (pred__38837,expr__38838){
return (function (p1__38836_SHARP_){
return clojure.string.split.call(null,p1__38836_SHARP_,/[\/\\]/);
});})(pred__38837,expr__38838))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38837,expr__38838){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38840){if((e38840 instanceof Error)){
var e = e38840;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38840;

}
}})());
});
;})(path_parts,sep,root,pred__38837,expr__38838))
} else {
if(cljs.core.truth_(pred__38837.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38838))){
return ((function (pred__38837,expr__38838){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38837,expr__38838){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38837,expr__38838))
);

return deferred.addErrback(((function (deferred,pred__38837,expr__38838){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38837,expr__38838))
);
});
;})(pred__38837,expr__38838))
} else {
return ((function (pred__38837,expr__38838){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38837,expr__38838))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38841,callback){
var map__38844 = p__38841;
var map__38844__$1 = ((((!((map__38844 == null)))?((((map__38844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38844):map__38844);
var file_msg = map__38844__$1;
var request_url = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38844,map__38844__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38844,map__38844__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_38868){
var state_val_38869 = (state_38868[(1)]);
if((state_val_38869 === (7))){
var inst_38864 = (state_38868[(2)]);
var state_38868__$1 = state_38868;
var statearr_38870_38890 = state_38868__$1;
(statearr_38870_38890[(2)] = inst_38864);

(statearr_38870_38890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (1))){
var state_38868__$1 = state_38868;
var statearr_38871_38891 = state_38868__$1;
(statearr_38871_38891[(2)] = null);

(statearr_38871_38891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (4))){
var inst_38848 = (state_38868[(7)]);
var inst_38848__$1 = (state_38868[(2)]);
var state_38868__$1 = (function (){var statearr_38872 = state_38868;
(statearr_38872[(7)] = inst_38848__$1);

return statearr_38872;
})();
if(cljs.core.truth_(inst_38848__$1)){
var statearr_38873_38892 = state_38868__$1;
(statearr_38873_38892[(1)] = (5));

} else {
var statearr_38874_38893 = state_38868__$1;
(statearr_38874_38893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (6))){
var state_38868__$1 = state_38868;
var statearr_38875_38894 = state_38868__$1;
(statearr_38875_38894[(2)] = null);

(statearr_38875_38894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (3))){
var inst_38866 = (state_38868[(2)]);
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38868__$1,inst_38866);
} else {
if((state_val_38869 === (2))){
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38868__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38869 === (11))){
var inst_38860 = (state_38868[(2)]);
var state_38868__$1 = (function (){var statearr_38876 = state_38868;
(statearr_38876[(8)] = inst_38860);

return statearr_38876;
})();
var statearr_38877_38895 = state_38868__$1;
(statearr_38877_38895[(2)] = null);

(statearr_38877_38895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (9))){
var inst_38854 = (state_38868[(9)]);
var inst_38852 = (state_38868[(10)]);
var inst_38856 = inst_38854.call(null,inst_38852);
var state_38868__$1 = state_38868;
var statearr_38878_38896 = state_38868__$1;
(statearr_38878_38896[(2)] = inst_38856);

(statearr_38878_38896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (5))){
var inst_38848 = (state_38868[(7)]);
var inst_38850 = figwheel.client.file_reloading.blocking_load.call(null,inst_38848);
var state_38868__$1 = state_38868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38868__$1,(8),inst_38850);
} else {
if((state_val_38869 === (10))){
var inst_38852 = (state_38868[(10)]);
var inst_38858 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38852);
var state_38868__$1 = state_38868;
var statearr_38879_38897 = state_38868__$1;
(statearr_38879_38897[(2)] = inst_38858);

(statearr_38879_38897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38869 === (8))){
var inst_38854 = (state_38868[(9)]);
var inst_38848 = (state_38868[(7)]);
var inst_38852 = (state_38868[(2)]);
var inst_38853 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38854__$1 = cljs.core.get.call(null,inst_38853,inst_38848);
var state_38868__$1 = (function (){var statearr_38880 = state_38868;
(statearr_38880[(9)] = inst_38854__$1);

(statearr_38880[(10)] = inst_38852);

return statearr_38880;
})();
if(cljs.core.truth_(inst_38854__$1)){
var statearr_38881_38898 = state_38868__$1;
(statearr_38881_38898[(1)] = (9));

} else {
var statearr_38882_38899 = state_38868__$1;
(statearr_38882_38899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33301__auto__ = null;
var figwheel$client$file_reloading$state_machine__33301__auto____0 = (function (){
var statearr_38886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38886[(0)] = figwheel$client$file_reloading$state_machine__33301__auto__);

(statearr_38886[(1)] = (1));

return statearr_38886;
});
var figwheel$client$file_reloading$state_machine__33301__auto____1 = (function (state_38868){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e38887){if((e38887 instanceof Object)){
var ex__33304__auto__ = e38887;
var statearr_38888_38900 = state_38868;
(statearr_38888_38900[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38901 = state_38868;
state_38868 = G__38901;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33301__auto__ = function(state_38868){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33301__auto____1.call(this,state_38868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33301__auto____0;
figwheel$client$file_reloading$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33301__auto____1;
return figwheel$client$file_reloading$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_38889 = f__33366__auto__.call(null);
(statearr_38889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_38889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38902,callback){
var map__38905 = p__38902;
var map__38905__$1 = ((((!((map__38905 == null)))?((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38905):map__38905);
var file_msg = map__38905__$1;
var namespace = cljs.core.get.call(null,map__38905__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38905,map__38905__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38905,map__38905__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38907){
var map__38910 = p__38907;
var map__38910__$1 = ((((!((map__38910 == null)))?((((map__38910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38910):map__38910);
var file_msg = map__38910__$1;
var namespace = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__31270__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__31270__auto__){
var or__31282__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
var or__31282__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__31282__auto____$1)){
return or__31282__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__31270__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38912,callback){
var map__38915 = p__38912;
var map__38915__$1 = ((((!((map__38915 == null)))?((((map__38915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38915):map__38915);
var file_msg = map__38915__$1;
var request_url = cljs.core.get.call(null,map__38915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33365__auto___39003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___39003,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___39003,out){
return (function (state_38985){
var state_val_38986 = (state_38985[(1)]);
if((state_val_38986 === (1))){
var inst_38963 = cljs.core.nth.call(null,files,(0),null);
var inst_38964 = cljs.core.nthnext.call(null,files,(1));
var inst_38965 = files;
var state_38985__$1 = (function (){var statearr_38987 = state_38985;
(statearr_38987[(7)] = inst_38963);

(statearr_38987[(8)] = inst_38964);

(statearr_38987[(9)] = inst_38965);

return statearr_38987;
})();
var statearr_38988_39004 = state_38985__$1;
(statearr_38988_39004[(2)] = null);

(statearr_38988_39004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38986 === (2))){
var inst_38965 = (state_38985[(9)]);
var inst_38968 = (state_38985[(10)]);
var inst_38968__$1 = cljs.core.nth.call(null,inst_38965,(0),null);
var inst_38969 = cljs.core.nthnext.call(null,inst_38965,(1));
var inst_38970 = (inst_38968__$1 == null);
var inst_38971 = cljs.core.not.call(null,inst_38970);
var state_38985__$1 = (function (){var statearr_38989 = state_38985;
(statearr_38989[(11)] = inst_38969);

(statearr_38989[(10)] = inst_38968__$1);

return statearr_38989;
})();
if(inst_38971){
var statearr_38990_39005 = state_38985__$1;
(statearr_38990_39005[(1)] = (4));

} else {
var statearr_38991_39006 = state_38985__$1;
(statearr_38991_39006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38986 === (3))){
var inst_38983 = (state_38985[(2)]);
var state_38985__$1 = state_38985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38985__$1,inst_38983);
} else {
if((state_val_38986 === (4))){
var inst_38968 = (state_38985[(10)]);
var inst_38973 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38968);
var state_38985__$1 = state_38985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38985__$1,(7),inst_38973);
} else {
if((state_val_38986 === (5))){
var inst_38979 = cljs.core.async.close_BANG_.call(null,out);
var state_38985__$1 = state_38985;
var statearr_38992_39007 = state_38985__$1;
(statearr_38992_39007[(2)] = inst_38979);

(statearr_38992_39007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38986 === (6))){
var inst_38981 = (state_38985[(2)]);
var state_38985__$1 = state_38985;
var statearr_38993_39008 = state_38985__$1;
(statearr_38993_39008[(2)] = inst_38981);

(statearr_38993_39008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38986 === (7))){
var inst_38969 = (state_38985[(11)]);
var inst_38975 = (state_38985[(2)]);
var inst_38976 = cljs.core.async.put_BANG_.call(null,out,inst_38975);
var inst_38965 = inst_38969;
var state_38985__$1 = (function (){var statearr_38994 = state_38985;
(statearr_38994[(12)] = inst_38976);

(statearr_38994[(9)] = inst_38965);

return statearr_38994;
})();
var statearr_38995_39009 = state_38985__$1;
(statearr_38995_39009[(2)] = null);

(statearr_38995_39009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33365__auto___39003,out))
;
return ((function (switch__33300__auto__,c__33365__auto___39003,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____0 = (function (){
var statearr_38999 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38999[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__);

(statearr_38999[(1)] = (1));

return statearr_38999;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____1 = (function (state_38985){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_38985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e39000){if((e39000 instanceof Object)){
var ex__33304__auto__ = e39000;
var statearr_39001_39010 = state_38985;
(statearr_39001_39010[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39011 = state_38985;
state_38985 = G__39011;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__ = function(state_38985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____1.call(this,state_38985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___39003,out))
})();
var state__33367__auto__ = (function (){var statearr_39002 = f__33366__auto__.call(null);
(statearr_39002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___39003);

return statearr_39002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___39003,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39012,opts){
var map__39016 = p__39012;
var map__39016__$1 = ((((!((map__39016 == null)))?((((map__39016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39016):map__39016);
var eval_body__$1 = cljs.core.get.call(null,map__39016__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__31270__auto__ = eval_body__$1;
if(cljs.core.truth_(and__31270__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__31270__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39018){var e = e39018;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39019_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39019_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39024){
var vec__39025 = p__39024;
var k = cljs.core.nth.call(null,vec__39025,(0),null);
var v = cljs.core.nth.call(null,vec__39025,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39026){
var vec__39027 = p__39026;
var k = cljs.core.nth.call(null,vec__39027,(0),null);
var v = cljs.core.nth.call(null,vec__39027,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39031,p__39032){
var map__39279 = p__39031;
var map__39279__$1 = ((((!((map__39279 == null)))?((((map__39279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39279):map__39279);
var opts = map__39279__$1;
var before_jsload = cljs.core.get.call(null,map__39279__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39279__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39279__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39280 = p__39032;
var map__39280__$1 = ((((!((map__39280 == null)))?((((map__39280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39280):map__39280);
var msg = map__39280__$1;
var files = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39433){
var state_val_39434 = (state_39433[(1)]);
if((state_val_39434 === (7))){
var inst_39296 = (state_39433[(7)]);
var inst_39294 = (state_39433[(8)]);
var inst_39297 = (state_39433[(9)]);
var inst_39295 = (state_39433[(10)]);
var inst_39302 = cljs.core._nth.call(null,inst_39295,inst_39297);
var inst_39303 = figwheel.client.file_reloading.eval_body.call(null,inst_39302,opts);
var inst_39304 = (inst_39297 + (1));
var tmp39435 = inst_39296;
var tmp39436 = inst_39294;
var tmp39437 = inst_39295;
var inst_39294__$1 = tmp39436;
var inst_39295__$1 = tmp39437;
var inst_39296__$1 = tmp39435;
var inst_39297__$1 = inst_39304;
var state_39433__$1 = (function (){var statearr_39438 = state_39433;
(statearr_39438[(11)] = inst_39303);

(statearr_39438[(7)] = inst_39296__$1);

(statearr_39438[(8)] = inst_39294__$1);

(statearr_39438[(9)] = inst_39297__$1);

(statearr_39438[(10)] = inst_39295__$1);

return statearr_39438;
})();
var statearr_39439_39525 = state_39433__$1;
(statearr_39439_39525[(2)] = null);

(statearr_39439_39525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (20))){
var inst_39337 = (state_39433[(12)]);
var inst_39345 = figwheel.client.file_reloading.sort_files.call(null,inst_39337);
var state_39433__$1 = state_39433;
var statearr_39440_39526 = state_39433__$1;
(statearr_39440_39526[(2)] = inst_39345);

(statearr_39440_39526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (27))){
var state_39433__$1 = state_39433;
var statearr_39441_39527 = state_39433__$1;
(statearr_39441_39527[(2)] = null);

(statearr_39441_39527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (1))){
var inst_39286 = (state_39433[(13)]);
var inst_39283 = before_jsload.call(null,files);
var inst_39284 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39285 = (function (){return ((function (inst_39286,inst_39283,inst_39284,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39028_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39028_SHARP_);
});
;})(inst_39286,inst_39283,inst_39284,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39286__$1 = cljs.core.filter.call(null,inst_39285,files);
var inst_39287 = cljs.core.not_empty.call(null,inst_39286__$1);
var state_39433__$1 = (function (){var statearr_39442 = state_39433;
(statearr_39442[(13)] = inst_39286__$1);

(statearr_39442[(14)] = inst_39283);

(statearr_39442[(15)] = inst_39284);

return statearr_39442;
})();
if(cljs.core.truth_(inst_39287)){
var statearr_39443_39528 = state_39433__$1;
(statearr_39443_39528[(1)] = (2));

} else {
var statearr_39444_39529 = state_39433__$1;
(statearr_39444_39529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (24))){
var state_39433__$1 = state_39433;
var statearr_39445_39530 = state_39433__$1;
(statearr_39445_39530[(2)] = null);

(statearr_39445_39530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (39))){
var inst_39387 = (state_39433[(16)]);
var state_39433__$1 = state_39433;
var statearr_39446_39531 = state_39433__$1;
(statearr_39446_39531[(2)] = inst_39387);

(statearr_39446_39531[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (46))){
var inst_39428 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39447_39532 = state_39433__$1;
(statearr_39447_39532[(2)] = inst_39428);

(statearr_39447_39532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (4))){
var inst_39331 = (state_39433[(2)]);
var inst_39332 = cljs.core.List.EMPTY;
var inst_39333 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39332);
var inst_39334 = (function (){return ((function (inst_39331,inst_39332,inst_39333,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39029_SHARP_){
var and__31270__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39029_SHARP_);
if(cljs.core.truth_(and__31270__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39029_SHARP_));
} else {
return and__31270__auto__;
}
});
;})(inst_39331,inst_39332,inst_39333,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39335 = cljs.core.filter.call(null,inst_39334,files);
var inst_39336 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39337 = cljs.core.concat.call(null,inst_39335,inst_39336);
var state_39433__$1 = (function (){var statearr_39448 = state_39433;
(statearr_39448[(17)] = inst_39331);

(statearr_39448[(18)] = inst_39333);

(statearr_39448[(12)] = inst_39337);

return statearr_39448;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39449_39533 = state_39433__$1;
(statearr_39449_39533[(1)] = (16));

} else {
var statearr_39450_39534 = state_39433__$1;
(statearr_39450_39534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (15))){
var inst_39321 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39451_39535 = state_39433__$1;
(statearr_39451_39535[(2)] = inst_39321);

(statearr_39451_39535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (21))){
var inst_39347 = (state_39433[(19)]);
var inst_39347__$1 = (state_39433[(2)]);
var inst_39348 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39347__$1);
var state_39433__$1 = (function (){var statearr_39452 = state_39433;
(statearr_39452[(19)] = inst_39347__$1);

return statearr_39452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39433__$1,(22),inst_39348);
} else {
if((state_val_39434 === (31))){
var inst_39431 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39433__$1,inst_39431);
} else {
if((state_val_39434 === (32))){
var inst_39387 = (state_39433[(16)]);
var inst_39392 = inst_39387.cljs$lang$protocol_mask$partition0$;
var inst_39393 = (inst_39392 & (64));
var inst_39394 = inst_39387.cljs$core$ISeq$;
var inst_39395 = (inst_39393) || (inst_39394);
var state_39433__$1 = state_39433;
if(cljs.core.truth_(inst_39395)){
var statearr_39453_39536 = state_39433__$1;
(statearr_39453_39536[(1)] = (35));

} else {
var statearr_39454_39537 = state_39433__$1;
(statearr_39454_39537[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (40))){
var inst_39408 = (state_39433[(20)]);
var inst_39407 = (state_39433[(2)]);
var inst_39408__$1 = cljs.core.get.call(null,inst_39407,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39409 = cljs.core.get.call(null,inst_39407,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39410 = cljs.core.not_empty.call(null,inst_39408__$1);
var state_39433__$1 = (function (){var statearr_39455 = state_39433;
(statearr_39455[(21)] = inst_39409);

(statearr_39455[(20)] = inst_39408__$1);

return statearr_39455;
})();
if(cljs.core.truth_(inst_39410)){
var statearr_39456_39538 = state_39433__$1;
(statearr_39456_39538[(1)] = (41));

} else {
var statearr_39457_39539 = state_39433__$1;
(statearr_39457_39539[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (33))){
var state_39433__$1 = state_39433;
var statearr_39458_39540 = state_39433__$1;
(statearr_39458_39540[(2)] = false);

(statearr_39458_39540[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (13))){
var inst_39307 = (state_39433[(22)]);
var inst_39311 = cljs.core.chunk_first.call(null,inst_39307);
var inst_39312 = cljs.core.chunk_rest.call(null,inst_39307);
var inst_39313 = cljs.core.count.call(null,inst_39311);
var inst_39294 = inst_39312;
var inst_39295 = inst_39311;
var inst_39296 = inst_39313;
var inst_39297 = (0);
var state_39433__$1 = (function (){var statearr_39459 = state_39433;
(statearr_39459[(7)] = inst_39296);

(statearr_39459[(8)] = inst_39294);

(statearr_39459[(9)] = inst_39297);

(statearr_39459[(10)] = inst_39295);

return statearr_39459;
})();
var statearr_39460_39541 = state_39433__$1;
(statearr_39460_39541[(2)] = null);

(statearr_39460_39541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (22))){
var inst_39347 = (state_39433[(19)]);
var inst_39355 = (state_39433[(23)]);
var inst_39350 = (state_39433[(24)]);
var inst_39351 = (state_39433[(25)]);
var inst_39350__$1 = (state_39433[(2)]);
var inst_39351__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39350__$1);
var inst_39352 = (function (){var all_files = inst_39347;
var res_SINGLEQUOTE_ = inst_39350__$1;
var res = inst_39351__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39347,inst_39355,inst_39350,inst_39351,inst_39350__$1,inst_39351__$1,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39030_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39030_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39347,inst_39355,inst_39350,inst_39351,inst_39350__$1,inst_39351__$1,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39353 = cljs.core.filter.call(null,inst_39352,inst_39350__$1);
var inst_39354 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39355__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39354);
var inst_39356 = cljs.core.not_empty.call(null,inst_39355__$1);
var state_39433__$1 = (function (){var statearr_39461 = state_39433;
(statearr_39461[(23)] = inst_39355__$1);

(statearr_39461[(24)] = inst_39350__$1);

(statearr_39461[(25)] = inst_39351__$1);

(statearr_39461[(26)] = inst_39353);

return statearr_39461;
})();
if(cljs.core.truth_(inst_39356)){
var statearr_39462_39542 = state_39433__$1;
(statearr_39462_39542[(1)] = (23));

} else {
var statearr_39463_39543 = state_39433__$1;
(statearr_39463_39543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (36))){
var state_39433__$1 = state_39433;
var statearr_39464_39544 = state_39433__$1;
(statearr_39464_39544[(2)] = false);

(statearr_39464_39544[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (41))){
var inst_39408 = (state_39433[(20)]);
var inst_39412 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39413 = cljs.core.map.call(null,inst_39412,inst_39408);
var inst_39414 = cljs.core.pr_str.call(null,inst_39413);
var inst_39415 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39414)].join('');
var inst_39416 = figwheel.client.utils.log.call(null,inst_39415);
var state_39433__$1 = state_39433;
var statearr_39465_39545 = state_39433__$1;
(statearr_39465_39545[(2)] = inst_39416);

(statearr_39465_39545[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (43))){
var inst_39409 = (state_39433[(21)]);
var inst_39419 = (state_39433[(2)]);
var inst_39420 = cljs.core.not_empty.call(null,inst_39409);
var state_39433__$1 = (function (){var statearr_39466 = state_39433;
(statearr_39466[(27)] = inst_39419);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39420)){
var statearr_39467_39546 = state_39433__$1;
(statearr_39467_39546[(1)] = (44));

} else {
var statearr_39468_39547 = state_39433__$1;
(statearr_39468_39547[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (29))){
var inst_39347 = (state_39433[(19)]);
var inst_39387 = (state_39433[(16)]);
var inst_39355 = (state_39433[(23)]);
var inst_39350 = (state_39433[(24)]);
var inst_39351 = (state_39433[(25)]);
var inst_39353 = (state_39433[(26)]);
var inst_39383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39386 = (function (){var all_files = inst_39347;
var res_SINGLEQUOTE_ = inst_39350;
var res = inst_39351;
var files_not_loaded = inst_39353;
var dependencies_that_loaded = inst_39355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39387,inst_39355,inst_39350,inst_39351,inst_39353,inst_39383,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39385){
var map__39469 = p__39385;
var map__39469__$1 = ((((!((map__39469 == null)))?((((map__39469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39469):map__39469);
var namespace = cljs.core.get.call(null,map__39469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39387,inst_39355,inst_39350,inst_39351,inst_39353,inst_39383,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39387__$1 = cljs.core.group_by.call(null,inst_39386,inst_39353);
var inst_39389 = (inst_39387__$1 == null);
var inst_39390 = cljs.core.not.call(null,inst_39389);
var state_39433__$1 = (function (){var statearr_39471 = state_39433;
(statearr_39471[(16)] = inst_39387__$1);

(statearr_39471[(28)] = inst_39383);

return statearr_39471;
})();
if(inst_39390){
var statearr_39472_39548 = state_39433__$1;
(statearr_39472_39548[(1)] = (32));

} else {
var statearr_39473_39549 = state_39433__$1;
(statearr_39473_39549[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (44))){
var inst_39409 = (state_39433[(21)]);
var inst_39422 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39409);
var inst_39423 = cljs.core.pr_str.call(null,inst_39422);
var inst_39424 = [cljs.core.str("not required: "),cljs.core.str(inst_39423)].join('');
var inst_39425 = figwheel.client.utils.log.call(null,inst_39424);
var state_39433__$1 = state_39433;
var statearr_39474_39550 = state_39433__$1;
(statearr_39474_39550[(2)] = inst_39425);

(statearr_39474_39550[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (6))){
var inst_39328 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39475_39551 = state_39433__$1;
(statearr_39475_39551[(2)] = inst_39328);

(statearr_39475_39551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (28))){
var inst_39353 = (state_39433[(26)]);
var inst_39380 = (state_39433[(2)]);
var inst_39381 = cljs.core.not_empty.call(null,inst_39353);
var state_39433__$1 = (function (){var statearr_39476 = state_39433;
(statearr_39476[(29)] = inst_39380);

return statearr_39476;
})();
if(cljs.core.truth_(inst_39381)){
var statearr_39477_39552 = state_39433__$1;
(statearr_39477_39552[(1)] = (29));

} else {
var statearr_39478_39553 = state_39433__$1;
(statearr_39478_39553[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (25))){
var inst_39351 = (state_39433[(25)]);
var inst_39367 = (state_39433[(2)]);
var inst_39368 = cljs.core.not_empty.call(null,inst_39351);
var state_39433__$1 = (function (){var statearr_39479 = state_39433;
(statearr_39479[(30)] = inst_39367);

return statearr_39479;
})();
if(cljs.core.truth_(inst_39368)){
var statearr_39480_39554 = state_39433__$1;
(statearr_39480_39554[(1)] = (26));

} else {
var statearr_39481_39555 = state_39433__$1;
(statearr_39481_39555[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (34))){
var inst_39402 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
if(cljs.core.truth_(inst_39402)){
var statearr_39482_39556 = state_39433__$1;
(statearr_39482_39556[(1)] = (38));

} else {
var statearr_39483_39557 = state_39433__$1;
(statearr_39483_39557[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (17))){
var state_39433__$1 = state_39433;
var statearr_39484_39558 = state_39433__$1;
(statearr_39484_39558[(2)] = recompile_dependents);

(statearr_39484_39558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (3))){
var state_39433__$1 = state_39433;
var statearr_39485_39559 = state_39433__$1;
(statearr_39485_39559[(2)] = null);

(statearr_39485_39559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (12))){
var inst_39324 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39486_39560 = state_39433__$1;
(statearr_39486_39560[(2)] = inst_39324);

(statearr_39486_39560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (2))){
var inst_39286 = (state_39433[(13)]);
var inst_39293 = cljs.core.seq.call(null,inst_39286);
var inst_39294 = inst_39293;
var inst_39295 = null;
var inst_39296 = (0);
var inst_39297 = (0);
var state_39433__$1 = (function (){var statearr_39487 = state_39433;
(statearr_39487[(7)] = inst_39296);

(statearr_39487[(8)] = inst_39294);

(statearr_39487[(9)] = inst_39297);

(statearr_39487[(10)] = inst_39295);

return statearr_39487;
})();
var statearr_39488_39561 = state_39433__$1;
(statearr_39488_39561[(2)] = null);

(statearr_39488_39561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (23))){
var inst_39347 = (state_39433[(19)]);
var inst_39355 = (state_39433[(23)]);
var inst_39350 = (state_39433[(24)]);
var inst_39351 = (state_39433[(25)]);
var inst_39353 = (state_39433[(26)]);
var inst_39358 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39360 = (function (){var all_files = inst_39347;
var res_SINGLEQUOTE_ = inst_39350;
var res = inst_39351;
var files_not_loaded = inst_39353;
var dependencies_that_loaded = inst_39355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39358,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39359){
var map__39489 = p__39359;
var map__39489__$1 = ((((!((map__39489 == null)))?((((map__39489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39489):map__39489);
var request_url = cljs.core.get.call(null,map__39489__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39358,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39361 = cljs.core.reverse.call(null,inst_39355);
var inst_39362 = cljs.core.map.call(null,inst_39360,inst_39361);
var inst_39363 = cljs.core.pr_str.call(null,inst_39362);
var inst_39364 = figwheel.client.utils.log.call(null,inst_39363);
var state_39433__$1 = (function (){var statearr_39491 = state_39433;
(statearr_39491[(31)] = inst_39358);

return statearr_39491;
})();
var statearr_39492_39562 = state_39433__$1;
(statearr_39492_39562[(2)] = inst_39364);

(statearr_39492_39562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (35))){
var state_39433__$1 = state_39433;
var statearr_39493_39563 = state_39433__$1;
(statearr_39493_39563[(2)] = true);

(statearr_39493_39563[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (19))){
var inst_39337 = (state_39433[(12)]);
var inst_39343 = figwheel.client.file_reloading.expand_files.call(null,inst_39337);
var state_39433__$1 = state_39433;
var statearr_39494_39564 = state_39433__$1;
(statearr_39494_39564[(2)] = inst_39343);

(statearr_39494_39564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (11))){
var state_39433__$1 = state_39433;
var statearr_39495_39565 = state_39433__$1;
(statearr_39495_39565[(2)] = null);

(statearr_39495_39565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (9))){
var inst_39326 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39496_39566 = state_39433__$1;
(statearr_39496_39566[(2)] = inst_39326);

(statearr_39496_39566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (5))){
var inst_39296 = (state_39433[(7)]);
var inst_39297 = (state_39433[(9)]);
var inst_39299 = (inst_39297 < inst_39296);
var inst_39300 = inst_39299;
var state_39433__$1 = state_39433;
if(cljs.core.truth_(inst_39300)){
var statearr_39497_39567 = state_39433__$1;
(statearr_39497_39567[(1)] = (7));

} else {
var statearr_39498_39568 = state_39433__$1;
(statearr_39498_39568[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (14))){
var inst_39307 = (state_39433[(22)]);
var inst_39316 = cljs.core.first.call(null,inst_39307);
var inst_39317 = figwheel.client.file_reloading.eval_body.call(null,inst_39316,opts);
var inst_39318 = cljs.core.next.call(null,inst_39307);
var inst_39294 = inst_39318;
var inst_39295 = null;
var inst_39296 = (0);
var inst_39297 = (0);
var state_39433__$1 = (function (){var statearr_39499 = state_39433;
(statearr_39499[(7)] = inst_39296);

(statearr_39499[(32)] = inst_39317);

(statearr_39499[(8)] = inst_39294);

(statearr_39499[(9)] = inst_39297);

(statearr_39499[(10)] = inst_39295);

return statearr_39499;
})();
var statearr_39500_39569 = state_39433__$1;
(statearr_39500_39569[(2)] = null);

(statearr_39500_39569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (45))){
var state_39433__$1 = state_39433;
var statearr_39501_39570 = state_39433__$1;
(statearr_39501_39570[(2)] = null);

(statearr_39501_39570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (26))){
var inst_39347 = (state_39433[(19)]);
var inst_39355 = (state_39433[(23)]);
var inst_39350 = (state_39433[(24)]);
var inst_39351 = (state_39433[(25)]);
var inst_39353 = (state_39433[(26)]);
var inst_39370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39372 = (function (){var all_files = inst_39347;
var res_SINGLEQUOTE_ = inst_39350;
var res = inst_39351;
var files_not_loaded = inst_39353;
var dependencies_that_loaded = inst_39355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39370,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39371){
var map__39502 = p__39371;
var map__39502__$1 = ((((!((map__39502 == null)))?((((map__39502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39502):map__39502);
var namespace = cljs.core.get.call(null,map__39502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39370,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39373 = cljs.core.map.call(null,inst_39372,inst_39351);
var inst_39374 = cljs.core.pr_str.call(null,inst_39373);
var inst_39375 = figwheel.client.utils.log.call(null,inst_39374);
var inst_39376 = (function (){var all_files = inst_39347;
var res_SINGLEQUOTE_ = inst_39350;
var res = inst_39351;
var files_not_loaded = inst_39353;
var dependencies_that_loaded = inst_39355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39370,inst_39372,inst_39373,inst_39374,inst_39375,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39347,inst_39355,inst_39350,inst_39351,inst_39353,inst_39370,inst_39372,inst_39373,inst_39374,inst_39375,state_val_39434,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39377 = setTimeout(inst_39376,(10));
var state_39433__$1 = (function (){var statearr_39504 = state_39433;
(statearr_39504[(33)] = inst_39370);

(statearr_39504[(34)] = inst_39375);

return statearr_39504;
})();
var statearr_39505_39571 = state_39433__$1;
(statearr_39505_39571[(2)] = inst_39377);

(statearr_39505_39571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (16))){
var state_39433__$1 = state_39433;
var statearr_39506_39572 = state_39433__$1;
(statearr_39506_39572[(2)] = reload_dependents);

(statearr_39506_39572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (38))){
var inst_39387 = (state_39433[(16)]);
var inst_39404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39387);
var state_39433__$1 = state_39433;
var statearr_39507_39573 = state_39433__$1;
(statearr_39507_39573[(2)] = inst_39404);

(statearr_39507_39573[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (30))){
var state_39433__$1 = state_39433;
var statearr_39508_39574 = state_39433__$1;
(statearr_39508_39574[(2)] = null);

(statearr_39508_39574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (10))){
var inst_39307 = (state_39433[(22)]);
var inst_39309 = cljs.core.chunked_seq_QMARK_.call(null,inst_39307);
var state_39433__$1 = state_39433;
if(inst_39309){
var statearr_39509_39575 = state_39433__$1;
(statearr_39509_39575[(1)] = (13));

} else {
var statearr_39510_39576 = state_39433__$1;
(statearr_39510_39576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (18))){
var inst_39341 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
if(cljs.core.truth_(inst_39341)){
var statearr_39511_39577 = state_39433__$1;
(statearr_39511_39577[(1)] = (19));

} else {
var statearr_39512_39578 = state_39433__$1;
(statearr_39512_39578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (42))){
var state_39433__$1 = state_39433;
var statearr_39513_39579 = state_39433__$1;
(statearr_39513_39579[(2)] = null);

(statearr_39513_39579[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (37))){
var inst_39399 = (state_39433[(2)]);
var state_39433__$1 = state_39433;
var statearr_39514_39580 = state_39433__$1;
(statearr_39514_39580[(2)] = inst_39399);

(statearr_39514_39580[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39434 === (8))){
var inst_39294 = (state_39433[(8)]);
var inst_39307 = (state_39433[(22)]);
var inst_39307__$1 = cljs.core.seq.call(null,inst_39294);
var state_39433__$1 = (function (){var statearr_39515 = state_39433;
(statearr_39515[(22)] = inst_39307__$1);

return statearr_39515;
})();
if(inst_39307__$1){
var statearr_39516_39581 = state_39433__$1;
(statearr_39516_39581[(1)] = (10));

} else {
var statearr_39517_39582 = state_39433__$1;
(statearr_39517_39582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33300__auto__,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____0 = (function (){
var statearr_39521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39521[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__);

(statearr_39521[(1)] = (1));

return statearr_39521;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____1 = (function (state_39433){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_39433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e39522){if((e39522 instanceof Object)){
var ex__33304__auto__ = e39522;
var statearr_39523_39583 = state_39433;
(statearr_39523_39583[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39584 = state_39433;
state_39433 = G__39584;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__ = function(state_39433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____1.call(this,state_39433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33367__auto__ = (function (){var statearr_39524 = f__33366__auto__.call(null);
(statearr_39524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_39524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__,map__39279,map__39279__$1,opts,before_jsload,on_jsload,reload_dependents,map__39280,map__39280__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33365__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39587,link){
var map__39590 = p__39587;
var map__39590__$1 = ((((!((map__39590 == null)))?((((map__39590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39590):map__39590);
var file = cljs.core.get.call(null,map__39590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39590,map__39590__$1,file){
return (function (p1__39585_SHARP_,p2__39586_SHARP_){
if(cljs.core._EQ_.call(null,p1__39585_SHARP_,p2__39586_SHARP_)){
return p1__39585_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39590,map__39590__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39596){
var map__39597 = p__39596;
var map__39597__$1 = ((((!((map__39597 == null)))?((((map__39597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39597):map__39597);
var match_length = cljs.core.get.call(null,map__39597__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39597__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39592_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39592_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args39599 = [];
var len__32340__auto___39602 = arguments.length;
var i__32341__auto___39603 = (0);
while(true){
if((i__32341__auto___39603 < len__32340__auto___39602)){
args39599.push((arguments[i__32341__auto___39603]));

var G__39604 = (i__32341__auto___39603 + (1));
i__32341__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var G__39601 = args39599.length;
switch (G__39601) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39599.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39606_SHARP_,p2__39607_SHARP_){
return cljs.core.assoc.call(null,p1__39606_SHARP_,cljs.core.get.call(null,p2__39607_SHARP_,key),p2__39607_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39608){
var map__39611 = p__39608;
var map__39611__$1 = ((((!((map__39611 == null)))?((((map__39611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39611):map__39611);
var f_data = map__39611__$1;
var file = cljs.core.get.call(null,map__39611__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39613,files_msg){
var map__39620 = p__39613;
var map__39620__$1 = ((((!((map__39620 == null)))?((((map__39620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39620):map__39620);
var opts = map__39620__$1;
var on_cssload = cljs.core.get.call(null,map__39620__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39622_39626 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39623_39627 = null;
var count__39624_39628 = (0);
var i__39625_39629 = (0);
while(true){
if((i__39625_39629 < count__39624_39628)){
var f_39630 = cljs.core._nth.call(null,chunk__39623_39627,i__39625_39629);
figwheel.client.file_reloading.reload_css_file.call(null,f_39630);

var G__39631 = seq__39622_39626;
var G__39632 = chunk__39623_39627;
var G__39633 = count__39624_39628;
var G__39634 = (i__39625_39629 + (1));
seq__39622_39626 = G__39631;
chunk__39623_39627 = G__39632;
count__39624_39628 = G__39633;
i__39625_39629 = G__39634;
continue;
} else {
var temp__4425__auto___39635 = cljs.core.seq.call(null,seq__39622_39626);
if(temp__4425__auto___39635){
var seq__39622_39636__$1 = temp__4425__auto___39635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39622_39636__$1)){
var c__32085__auto___39637 = cljs.core.chunk_first.call(null,seq__39622_39636__$1);
var G__39638 = cljs.core.chunk_rest.call(null,seq__39622_39636__$1);
var G__39639 = c__32085__auto___39637;
var G__39640 = cljs.core.count.call(null,c__32085__auto___39637);
var G__39641 = (0);
seq__39622_39626 = G__39638;
chunk__39623_39627 = G__39639;
count__39624_39628 = G__39640;
i__39625_39629 = G__39641;
continue;
} else {
var f_39642 = cljs.core.first.call(null,seq__39622_39636__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39642);

var G__39643 = cljs.core.next.call(null,seq__39622_39636__$1);
var G__39644 = null;
var G__39645 = (0);
var G__39646 = (0);
seq__39622_39626 = G__39643;
chunk__39623_39627 = G__39644;
count__39624_39628 = G__39645;
i__39625_39629 = G__39646;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39620,map__39620__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39620,map__39620__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map