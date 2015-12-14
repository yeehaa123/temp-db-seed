goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39571__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39572__i = 0, G__39572__a = new Array(arguments.length -  0);
while (G__39572__i < G__39572__a.length) {G__39572__a[G__39572__i] = arguments[G__39572__i + 0]; ++G__39572__i;}
  args = new cljs.core.IndexedSeq(G__39572__a,0);
} 
return G__39571__delegate.call(this,args);};
G__39571.cljs$lang$maxFixedArity = 0;
G__39571.cljs$lang$applyTo = (function (arglist__39573){
var args = cljs.core.seq(arglist__39573);
return G__39571__delegate(args);
});
G__39571.cljs$core$IFn$_invoke$arity$variadic = G__39571__delegate;
return G__39571;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39574__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39575__i = 0, G__39575__a = new Array(arguments.length -  0);
while (G__39575__i < G__39575__a.length) {G__39575__a[G__39575__i] = arguments[G__39575__i + 0]; ++G__39575__i;}
  args = new cljs.core.IndexedSeq(G__39575__a,0);
} 
return G__39574__delegate.call(this,args);};
G__39574.cljs$lang$maxFixedArity = 0;
G__39574.cljs$lang$applyTo = (function (arglist__39576){
var args = cljs.core.seq(arglist__39576);
return G__39574__delegate(args);
});
G__39574.cljs$core$IFn$_invoke$arity$variadic = G__39574__delegate;
return G__39574;
})()
;

return null;
});
