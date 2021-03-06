goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33460__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33461__i = 0, G__33461__a = new Array(arguments.length -  0);
while (G__33461__i < G__33461__a.length) {G__33461__a[G__33461__i] = arguments[G__33461__i + 0]; ++G__33461__i;}
  args = new cljs.core.IndexedSeq(G__33461__a,0);
} 
return G__33460__delegate.call(this,args);};
G__33460.cljs$lang$maxFixedArity = 0;
G__33460.cljs$lang$applyTo = (function (arglist__33462){
var args = cljs.core.seq(arglist__33462);
return G__33460__delegate(args);
});
G__33460.cljs$core$IFn$_invoke$arity$variadic = G__33460__delegate;
return G__33460;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33463__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33464__i = 0, G__33464__a = new Array(arguments.length -  0);
while (G__33464__i < G__33464__a.length) {G__33464__a[G__33464__i] = arguments[G__33464__i + 0]; ++G__33464__i;}
  args = new cljs.core.IndexedSeq(G__33464__a,0);
} 
return G__33463__delegate.call(this,args);};
G__33463.cljs$lang$maxFixedArity = 0;
G__33463.cljs$lang$applyTo = (function (arglist__33465){
var args = cljs.core.seq(arglist__33465);
return G__33463__delegate(args);
});
G__33463.cljs$core$IFn$_invoke$arity$variadic = G__33463__delegate;
return G__33463;
})()
;

return null;
});
