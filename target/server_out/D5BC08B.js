goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40064__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40065__i = 0, G__40065__a = new Array(arguments.length -  0);
while (G__40065__i < G__40065__a.length) {G__40065__a[G__40065__i] = arguments[G__40065__i + 0]; ++G__40065__i;}
  args = new cljs.core.IndexedSeq(G__40065__a,0);
} 
return G__40064__delegate.call(this,args);};
G__40064.cljs$lang$maxFixedArity = 0;
G__40064.cljs$lang$applyTo = (function (arglist__40066){
var args = cljs.core.seq(arglist__40066);
return G__40064__delegate(args);
});
G__40064.cljs$core$IFn$_invoke$arity$variadic = G__40064__delegate;
return G__40064;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40067__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40068__i = 0, G__40068__a = new Array(arguments.length -  0);
while (G__40068__i < G__40068__a.length) {G__40068__a[G__40068__i] = arguments[G__40068__i + 0]; ++G__40068__i;}
  args = new cljs.core.IndexedSeq(G__40068__a,0);
} 
return G__40067__delegate.call(this,args);};
G__40067.cljs$lang$maxFixedArity = 0;
G__40067.cljs$lang$applyTo = (function (arglist__40069){
var args = cljs.core.seq(arglist__40069);
return G__40067__delegate(args);
});
G__40067.cljs$core$IFn$_invoke$arity$variadic = G__40067__delegate;
return G__40067;
})()
;

return null;
});
