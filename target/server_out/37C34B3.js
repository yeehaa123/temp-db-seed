goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33768__i = 0, G__33768__a = new Array(arguments.length -  0);
while (G__33768__i < G__33768__a.length) {G__33768__a[G__33768__i] = arguments[G__33768__i + 0]; ++G__33768__i;}
  args = new cljs.core.IndexedSeq(G__33768__a,0);
} 
return G__33767__delegate.call(this,args);};
G__33767.cljs$lang$maxFixedArity = 0;
G__33767.cljs$lang$applyTo = (function (arglist__33769){
var args = cljs.core.seq(arglist__33769);
return G__33767__delegate(args);
});
G__33767.cljs$core$IFn$_invoke$arity$variadic = G__33767__delegate;
return G__33767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33771__i = 0, G__33771__a = new Array(arguments.length -  0);
while (G__33771__i < G__33771__a.length) {G__33771__a[G__33771__i] = arguments[G__33771__i + 0]; ++G__33771__i;}
  args = new cljs.core.IndexedSeq(G__33771__a,0);
} 
return G__33770__delegate.call(this,args);};
G__33770.cljs$lang$maxFixedArity = 0;
G__33770.cljs$lang$applyTo = (function (arglist__33772){
var args = cljs.core.seq(arglist__33772);
return G__33770__delegate(args);
});
G__33770.cljs$core$IFn$_invoke$arity$variadic = G__33770__delegate;
return G__33770;
})()
;

return null;
});
