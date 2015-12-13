goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35559__i = 0, G__35559__a = new Array(arguments.length -  0);
while (G__35559__i < G__35559__a.length) {G__35559__a[G__35559__i] = arguments[G__35559__i + 0]; ++G__35559__i;}
  args = new cljs.core.IndexedSeq(G__35559__a,0);
} 
return G__35558__delegate.call(this,args);};
G__35558.cljs$lang$maxFixedArity = 0;
G__35558.cljs$lang$applyTo = (function (arglist__35560){
var args = cljs.core.seq(arglist__35560);
return G__35558__delegate(args);
});
G__35558.cljs$core$IFn$_invoke$arity$variadic = G__35558__delegate;
return G__35558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35562__i = 0, G__35562__a = new Array(arguments.length -  0);
while (G__35562__i < G__35562__a.length) {G__35562__a[G__35562__i] = arguments[G__35562__i + 0]; ++G__35562__i;}
  args = new cljs.core.IndexedSeq(G__35562__a,0);
} 
return G__35561__delegate.call(this,args);};
G__35561.cljs$lang$maxFixedArity = 0;
G__35561.cljs$lang$applyTo = (function (arglist__35563){
var args = cljs.core.seq(arglist__35563);
return G__35561__delegate(args);
});
G__35561.cljs$core$IFn$_invoke$arity$variadic = G__35561__delegate;
return G__35561;
})()
;

return null;
});
