goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35759__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35760__i = 0, G__35760__a = new Array(arguments.length -  0);
while (G__35760__i < G__35760__a.length) {G__35760__a[G__35760__i] = arguments[G__35760__i + 0]; ++G__35760__i;}
  args = new cljs.core.IndexedSeq(G__35760__a,0);
} 
return G__35759__delegate.call(this,args);};
G__35759.cljs$lang$maxFixedArity = 0;
G__35759.cljs$lang$applyTo = (function (arglist__35761){
var args = cljs.core.seq(arglist__35761);
return G__35759__delegate(args);
});
G__35759.cljs$core$IFn$_invoke$arity$variadic = G__35759__delegate;
return G__35759;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35762__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35763__i = 0, G__35763__a = new Array(arguments.length -  0);
while (G__35763__i < G__35763__a.length) {G__35763__a[G__35763__i] = arguments[G__35763__i + 0]; ++G__35763__i;}
  args = new cljs.core.IndexedSeq(G__35763__a,0);
} 
return G__35762__delegate.call(this,args);};
G__35762.cljs$lang$maxFixedArity = 0;
G__35762.cljs$lang$applyTo = (function (arglist__35764){
var args = cljs.core.seq(arglist__35764);
return G__35762__delegate(args);
});
G__35762.cljs$core$IFn$_invoke$arity$variadic = G__35762__delegate;
return G__35762;
})()
;

return null;
});
