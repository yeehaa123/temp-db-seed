goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33386__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33387__i = 0, G__33387__a = new Array(arguments.length -  0);
while (G__33387__i < G__33387__a.length) {G__33387__a[G__33387__i] = arguments[G__33387__i + 0]; ++G__33387__i;}
  args = new cljs.core.IndexedSeq(G__33387__a,0);
} 
return G__33386__delegate.call(this,args);};
G__33386.cljs$lang$maxFixedArity = 0;
G__33386.cljs$lang$applyTo = (function (arglist__33388){
var args = cljs.core.seq(arglist__33388);
return G__33386__delegate(args);
});
G__33386.cljs$core$IFn$_invoke$arity$variadic = G__33386__delegate;
return G__33386;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33389__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33390__i = 0, G__33390__a = new Array(arguments.length -  0);
while (G__33390__i < G__33390__a.length) {G__33390__a[G__33390__i] = arguments[G__33390__i + 0]; ++G__33390__i;}
  args = new cljs.core.IndexedSeq(G__33390__a,0);
} 
return G__33389__delegate.call(this,args);};
G__33389.cljs$lang$maxFixedArity = 0;
G__33389.cljs$lang$applyTo = (function (arglist__33391){
var args = cljs.core.seq(arglist__33391);
return G__33389__delegate(args);
});
G__33389.cljs$core$IFn$_invoke$arity$variadic = G__33389__delegate;
return G__33389;
})()
;

return null;
});
