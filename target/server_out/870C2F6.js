goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35829__i = 0, G__35829__a = new Array(arguments.length -  0);
while (G__35829__i < G__35829__a.length) {G__35829__a[G__35829__i] = arguments[G__35829__i + 0]; ++G__35829__i;}
  args = new cljs.core.IndexedSeq(G__35829__a,0);
} 
return G__35828__delegate.call(this,args);};
G__35828.cljs$lang$maxFixedArity = 0;
G__35828.cljs$lang$applyTo = (function (arglist__35830){
var args = cljs.core.seq(arglist__35830);
return G__35828__delegate(args);
});
G__35828.cljs$core$IFn$_invoke$arity$variadic = G__35828__delegate;
return G__35828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35832__i = 0, G__35832__a = new Array(arguments.length -  0);
while (G__35832__i < G__35832__a.length) {G__35832__a[G__35832__i] = arguments[G__35832__i + 0]; ++G__35832__i;}
  args = new cljs.core.IndexedSeq(G__35832__a,0);
} 
return G__35831__delegate.call(this,args);};
G__35831.cljs$lang$maxFixedArity = 0;
G__35831.cljs$lang$applyTo = (function (arglist__35833){
var args = cljs.core.seq(arglist__35833);
return G__35831__delegate(args);
});
G__35831.cljs$core$IFn$_invoke$arity$variadic = G__35831__delegate;
return G__35831;
})()
;

return null;
});
