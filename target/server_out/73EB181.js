goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37294__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37295__i = 0, G__37295__a = new Array(arguments.length -  0);
while (G__37295__i < G__37295__a.length) {G__37295__a[G__37295__i] = arguments[G__37295__i + 0]; ++G__37295__i;}
  args = new cljs.core.IndexedSeq(G__37295__a,0);
} 
return G__37294__delegate.call(this,args);};
G__37294.cljs$lang$maxFixedArity = 0;
G__37294.cljs$lang$applyTo = (function (arglist__37296){
var args = cljs.core.seq(arglist__37296);
return G__37294__delegate(args);
});
G__37294.cljs$core$IFn$_invoke$arity$variadic = G__37294__delegate;
return G__37294;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37297__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37298__i = 0, G__37298__a = new Array(arguments.length -  0);
while (G__37298__i < G__37298__a.length) {G__37298__a[G__37298__i] = arguments[G__37298__i + 0]; ++G__37298__i;}
  args = new cljs.core.IndexedSeq(G__37298__a,0);
} 
return G__37297__delegate.call(this,args);};
G__37297.cljs$lang$maxFixedArity = 0;
G__37297.cljs$lang$applyTo = (function (arglist__37299){
var args = cljs.core.seq(arglist__37299);
return G__37297__delegate(args);
});
G__37297.cljs$core$IFn$_invoke$arity$variadic = G__37297__delegate;
return G__37297;
})()
;

return null;
});
