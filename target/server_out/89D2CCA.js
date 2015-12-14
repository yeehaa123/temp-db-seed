goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40303__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40304__i = 0, G__40304__a = new Array(arguments.length -  0);
while (G__40304__i < G__40304__a.length) {G__40304__a[G__40304__i] = arguments[G__40304__i + 0]; ++G__40304__i;}
  args = new cljs.core.IndexedSeq(G__40304__a,0);
} 
return G__40303__delegate.call(this,args);};
G__40303.cljs$lang$maxFixedArity = 0;
G__40303.cljs$lang$applyTo = (function (arglist__40305){
var args = cljs.core.seq(arglist__40305);
return G__40303__delegate(args);
});
G__40303.cljs$core$IFn$_invoke$arity$variadic = G__40303__delegate;
return G__40303;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40306__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40307__i = 0, G__40307__a = new Array(arguments.length -  0);
while (G__40307__i < G__40307__a.length) {G__40307__a[G__40307__i] = arguments[G__40307__i + 0]; ++G__40307__i;}
  args = new cljs.core.IndexedSeq(G__40307__a,0);
} 
return G__40306__delegate.call(this,args);};
G__40306.cljs$lang$maxFixedArity = 0;
G__40306.cljs$lang$applyTo = (function (arglist__40308){
var args = cljs.core.seq(arglist__40308);
return G__40306__delegate(args);
});
G__40306.cljs$core$IFn$_invoke$arity$variadic = G__40306__delegate;
return G__40306;
})()
;

return null;
});
