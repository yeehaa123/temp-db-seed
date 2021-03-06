goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42198__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42199__i = 0, G__42199__a = new Array(arguments.length -  0);
while (G__42199__i < G__42199__a.length) {G__42199__a[G__42199__i] = arguments[G__42199__i + 0]; ++G__42199__i;}
  args = new cljs.core.IndexedSeq(G__42199__a,0);
} 
return G__42198__delegate.call(this,args);};
G__42198.cljs$lang$maxFixedArity = 0;
G__42198.cljs$lang$applyTo = (function (arglist__42200){
var args = cljs.core.seq(arglist__42200);
return G__42198__delegate(args);
});
G__42198.cljs$core$IFn$_invoke$arity$variadic = G__42198__delegate;
return G__42198;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42201__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42202__i = 0, G__42202__a = new Array(arguments.length -  0);
while (G__42202__i < G__42202__a.length) {G__42202__a[G__42202__i] = arguments[G__42202__i + 0]; ++G__42202__i;}
  args = new cljs.core.IndexedSeq(G__42202__a,0);
} 
return G__42201__delegate.call(this,args);};
G__42201.cljs$lang$maxFixedArity = 0;
G__42201.cljs$lang$applyTo = (function (arglist__42203){
var args = cljs.core.seq(arglist__42203);
return G__42201__delegate(args);
});
G__42201.cljs$core$IFn$_invoke$arity$variadic = G__42201__delegate;
return G__42201;
})()
;

return null;
});
