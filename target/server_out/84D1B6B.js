goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33771__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33772__i = 0, G__33772__a = new Array(arguments.length -  0);
while (G__33772__i < G__33772__a.length) {G__33772__a[G__33772__i] = arguments[G__33772__i + 0]; ++G__33772__i;}
  args = new cljs.core.IndexedSeq(G__33772__a,0);
} 
return G__33771__delegate.call(this,args);};
G__33771.cljs$lang$maxFixedArity = 0;
G__33771.cljs$lang$applyTo = (function (arglist__33773){
var args = cljs.core.seq(arglist__33773);
return G__33771__delegate(args);
});
G__33771.cljs$core$IFn$_invoke$arity$variadic = G__33771__delegate;
return G__33771;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33774__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33775__i = 0, G__33775__a = new Array(arguments.length -  0);
while (G__33775__i < G__33775__a.length) {G__33775__a[G__33775__i] = arguments[G__33775__i + 0]; ++G__33775__i;}
  args = new cljs.core.IndexedSeq(G__33775__a,0);
} 
return G__33774__delegate.call(this,args);};
G__33774.cljs$lang$maxFixedArity = 0;
G__33774.cljs$lang$applyTo = (function (arglist__33776){
var args = cljs.core.seq(arglist__33776);
return G__33774__delegate(args);
});
G__33774.cljs$core$IFn$_invoke$arity$variadic = G__33774__delegate;
return G__33774;
})()
;

return null;
});
