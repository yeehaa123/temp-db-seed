goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41910__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41911__i = 0, G__41911__a = new Array(arguments.length -  0);
while (G__41911__i < G__41911__a.length) {G__41911__a[G__41911__i] = arguments[G__41911__i + 0]; ++G__41911__i;}
  args = new cljs.core.IndexedSeq(G__41911__a,0);
} 
return G__41910__delegate.call(this,args);};
G__41910.cljs$lang$maxFixedArity = 0;
G__41910.cljs$lang$applyTo = (function (arglist__41912){
var args = cljs.core.seq(arglist__41912);
return G__41910__delegate(args);
});
G__41910.cljs$core$IFn$_invoke$arity$variadic = G__41910__delegate;
return G__41910;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41913__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41914__i = 0, G__41914__a = new Array(arguments.length -  0);
while (G__41914__i < G__41914__a.length) {G__41914__a[G__41914__i] = arguments[G__41914__i + 0]; ++G__41914__i;}
  args = new cljs.core.IndexedSeq(G__41914__a,0);
} 
return G__41913__delegate.call(this,args);};
G__41913.cljs$lang$maxFixedArity = 0;
G__41913.cljs$lang$applyTo = (function (arglist__41915){
var args = cljs.core.seq(arglist__41915);
return G__41913__delegate(args);
});
G__41913.cljs$core$IFn$_invoke$arity$variadic = G__41913__delegate;
return G__41913;
})()
;

return null;
});
