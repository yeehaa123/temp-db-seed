goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44140__i = 0, G__44140__a = new Array(arguments.length -  0);
while (G__44140__i < G__44140__a.length) {G__44140__a[G__44140__i] = arguments[G__44140__i + 0]; ++G__44140__i;}
  args = new cljs.core.IndexedSeq(G__44140__a,0);
} 
return G__44139__delegate.call(this,args);};
G__44139.cljs$lang$maxFixedArity = 0;
G__44139.cljs$lang$applyTo = (function (arglist__44141){
var args = cljs.core.seq(arglist__44141);
return G__44139__delegate(args);
});
G__44139.cljs$core$IFn$_invoke$arity$variadic = G__44139__delegate;
return G__44139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44143__i = 0, G__44143__a = new Array(arguments.length -  0);
while (G__44143__i < G__44143__a.length) {G__44143__a[G__44143__i] = arguments[G__44143__i + 0]; ++G__44143__i;}
  args = new cljs.core.IndexedSeq(G__44143__a,0);
} 
return G__44142__delegate.call(this,args);};
G__44142.cljs$lang$maxFixedArity = 0;
G__44142.cljs$lang$applyTo = (function (arglist__44144){
var args = cljs.core.seq(arglist__44144);
return G__44142__delegate(args);
});
G__44142.cljs$core$IFn$_invoke$arity$variadic = G__44142__delegate;
return G__44142;
})()
;

return null;
});
