goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34917__i = 0, G__34917__a = new Array(arguments.length -  0);
while (G__34917__i < G__34917__a.length) {G__34917__a[G__34917__i] = arguments[G__34917__i + 0]; ++G__34917__i;}
  args = new cljs.core.IndexedSeq(G__34917__a,0);
} 
return G__34916__delegate.call(this,args);};
G__34916.cljs$lang$maxFixedArity = 0;
G__34916.cljs$lang$applyTo = (function (arglist__34918){
var args = cljs.core.seq(arglist__34918);
return G__34916__delegate(args);
});
G__34916.cljs$core$IFn$_invoke$arity$variadic = G__34916__delegate;
return G__34916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34920__i = 0, G__34920__a = new Array(arguments.length -  0);
while (G__34920__i < G__34920__a.length) {G__34920__a[G__34920__i] = arguments[G__34920__i + 0]; ++G__34920__i;}
  args = new cljs.core.IndexedSeq(G__34920__a,0);
} 
return G__34919__delegate.call(this,args);};
G__34919.cljs$lang$maxFixedArity = 0;
G__34919.cljs$lang$applyTo = (function (arglist__34921){
var args = cljs.core.seq(arglist__34921);
return G__34919__delegate(args);
});
G__34919.cljs$core$IFn$_invoke$arity$variadic = G__34919__delegate;
return G__34919;
})()
;

return null;
});
