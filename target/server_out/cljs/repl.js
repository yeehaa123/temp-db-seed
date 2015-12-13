// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38587_38601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38588_38602 = null;
var count__38589_38603 = (0);
var i__38590_38604 = (0);
while(true){
if((i__38590_38604 < count__38589_38603)){
var f_38605 = cljs.core._nth.call(null,chunk__38588_38602,i__38590_38604);
cljs.core.println.call(null,"  ",f_38605);

var G__38606 = seq__38587_38601;
var G__38607 = chunk__38588_38602;
var G__38608 = count__38589_38603;
var G__38609 = (i__38590_38604 + (1));
seq__38587_38601 = G__38606;
chunk__38588_38602 = G__38607;
count__38589_38603 = G__38608;
i__38590_38604 = G__38609;
continue;
} else {
var temp__4425__auto___38610 = cljs.core.seq.call(null,seq__38587_38601);
if(temp__4425__auto___38610){
var seq__38587_38611__$1 = temp__4425__auto___38610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38587_38611__$1)){
var c__32085__auto___38612 = cljs.core.chunk_first.call(null,seq__38587_38611__$1);
var G__38613 = cljs.core.chunk_rest.call(null,seq__38587_38611__$1);
var G__38614 = c__32085__auto___38612;
var G__38615 = cljs.core.count.call(null,c__32085__auto___38612);
var G__38616 = (0);
seq__38587_38601 = G__38613;
chunk__38588_38602 = G__38614;
count__38589_38603 = G__38615;
i__38590_38604 = G__38616;
continue;
} else {
var f_38617 = cljs.core.first.call(null,seq__38587_38611__$1);
cljs.core.println.call(null,"  ",f_38617);

var G__38618 = cljs.core.next.call(null,seq__38587_38611__$1);
var G__38619 = null;
var G__38620 = (0);
var G__38621 = (0);
seq__38587_38601 = G__38618;
chunk__38588_38602 = G__38619;
count__38589_38603 = G__38620;
i__38590_38604 = G__38621;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38622 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__31282__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38622);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38622)))?cljs.core.second.call(null,arglists_38622):arglists_38622));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38591 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38592 = null;
var count__38593 = (0);
var i__38594 = (0);
while(true){
if((i__38594 < count__38593)){
var vec__38595 = cljs.core._nth.call(null,chunk__38592,i__38594);
var name = cljs.core.nth.call(null,vec__38595,(0),null);
var map__38596 = cljs.core.nth.call(null,vec__38595,(1),null);
var map__38596__$1 = ((((!((map__38596 == null)))?((((map__38596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38596):map__38596);
var doc = cljs.core.get.call(null,map__38596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38623 = seq__38591;
var G__38624 = chunk__38592;
var G__38625 = count__38593;
var G__38626 = (i__38594 + (1));
seq__38591 = G__38623;
chunk__38592 = G__38624;
count__38593 = G__38625;
i__38594 = G__38626;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38591);
if(temp__4425__auto__){
var seq__38591__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38591__$1)){
var c__32085__auto__ = cljs.core.chunk_first.call(null,seq__38591__$1);
var G__38627 = cljs.core.chunk_rest.call(null,seq__38591__$1);
var G__38628 = c__32085__auto__;
var G__38629 = cljs.core.count.call(null,c__32085__auto__);
var G__38630 = (0);
seq__38591 = G__38627;
chunk__38592 = G__38628;
count__38593 = G__38629;
i__38594 = G__38630;
continue;
} else {
var vec__38598 = cljs.core.first.call(null,seq__38591__$1);
var name = cljs.core.nth.call(null,vec__38598,(0),null);
var map__38599 = cljs.core.nth.call(null,vec__38598,(1),null);
var map__38599__$1 = ((((!((map__38599 == null)))?((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38599):map__38599);
var doc = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38631 = cljs.core.next.call(null,seq__38591__$1);
var G__38632 = null;
var G__38633 = (0);
var G__38634 = (0);
seq__38591 = G__38631;
chunk__38592 = G__38632;
count__38593 = G__38633;
i__38594 = G__38634;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map