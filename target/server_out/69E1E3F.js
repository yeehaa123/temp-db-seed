goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35802__i = 0, G__35802__a = new Array(arguments.length -  0);
while (G__35802__i < G__35802__a.length) {G__35802__a[G__35802__i] = arguments[G__35802__i + 0]; ++G__35802__i;}
  args = new cljs.core.IndexedSeq(G__35802__a,0);
} 
return G__35801__delegate.call(this,args);};
G__35801.cljs$lang$maxFixedArity = 0;
G__35801.cljs$lang$applyTo = (function (arglist__35803){
var args = cljs.core.seq(arglist__35803);
return G__35801__delegate(args);
});
G__35801.cljs$core$IFn$_invoke$arity$variadic = G__35801__delegate;
return G__35801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35805__i = 0, G__35805__a = new Array(arguments.length -  0);
while (G__35805__i < G__35805__a.length) {G__35805__a[G__35805__i] = arguments[G__35805__i + 0]; ++G__35805__i;}
  args = new cljs.core.IndexedSeq(G__35805__a,0);
} 
return G__35804__delegate.call(this,args);};
G__35804.cljs$lang$maxFixedArity = 0;
G__35804.cljs$lang$applyTo = (function (arglist__35806){
var args = cljs.core.seq(arglist__35806);
return G__35804__delegate(args);
});
G__35804.cljs$core$IFn$_invoke$arity$variadic = G__35804__delegate;
return G__35804;
})()
;

return null;
});
