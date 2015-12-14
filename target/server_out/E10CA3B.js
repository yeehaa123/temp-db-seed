goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33457__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33459__i = 0, G__33459__a = new Array(arguments.length -  0);
while (G__33459__i < G__33459__a.length) {G__33459__a[G__33459__i] = arguments[G__33459__i + 0]; ++G__33459__i;}
  args = new cljs.core.IndexedSeq(G__33459__a,0);
} 
return G__33457__delegate.call(this,args);};
G__33457.cljs$lang$maxFixedArity = 0;
G__33457.cljs$lang$applyTo = (function (arglist__33460){
var args = cljs.core.seq(arglist__33460);
return G__33457__delegate(args);
});
G__33457.cljs$core$IFn$_invoke$arity$variadic = G__33457__delegate;
return G__33457;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33461__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33462__i = 0, G__33462__a = new Array(arguments.length -  0);
while (G__33462__i < G__33462__a.length) {G__33462__a[G__33462__i] = arguments[G__33462__i + 0]; ++G__33462__i;}
  args = new cljs.core.IndexedSeq(G__33462__a,0);
} 
return G__33461__delegate.call(this,args);};
G__33461.cljs$lang$maxFixedArity = 0;
G__33461.cljs$lang$applyTo = (function (arglist__33463){
var args = cljs.core.seq(arglist__33463);
return G__33461__delegate(args);
});
G__33461.cljs$core$IFn$_invoke$arity$variadic = G__33461__delegate;
return G__33461;
})()
;

return null;
});
