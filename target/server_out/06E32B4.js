goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35352__i = 0, G__35352__a = new Array(arguments.length -  0);
while (G__35352__i < G__35352__a.length) {G__35352__a[G__35352__i] = arguments[G__35352__i + 0]; ++G__35352__i;}
  args = new cljs.core.IndexedSeq(G__35352__a,0);
} 
return G__35351__delegate.call(this,args);};
G__35351.cljs$lang$maxFixedArity = 0;
G__35351.cljs$lang$applyTo = (function (arglist__35353){
var args = cljs.core.seq(arglist__35353);
return G__35351__delegate(args);
});
G__35351.cljs$core$IFn$_invoke$arity$variadic = G__35351__delegate;
return G__35351;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35355__i = 0, G__35355__a = new Array(arguments.length -  0);
while (G__35355__i < G__35355__a.length) {G__35355__a[G__35355__i] = arguments[G__35355__i + 0]; ++G__35355__i;}
  args = new cljs.core.IndexedSeq(G__35355__a,0);
} 
return G__35354__delegate.call(this,args);};
G__35354.cljs$lang$maxFixedArity = 0;
G__35354.cljs$lang$applyTo = (function (arglist__35356){
var args = cljs.core.seq(arglist__35356);
return G__35354__delegate(args);
});
G__35354.cljs$core$IFn$_invoke$arity$variadic = G__35354__delegate;
return G__35354;
})()
;

return null;
});
