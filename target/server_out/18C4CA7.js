goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39657__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39658__i = 0, G__39658__a = new Array(arguments.length -  0);
while (G__39658__i < G__39658__a.length) {G__39658__a[G__39658__i] = arguments[G__39658__i + 0]; ++G__39658__i;}
  args = new cljs.core.IndexedSeq(G__39658__a,0);
} 
return G__39657__delegate.call(this,args);};
G__39657.cljs$lang$maxFixedArity = 0;
G__39657.cljs$lang$applyTo = (function (arglist__39659){
var args = cljs.core.seq(arglist__39659);
return G__39657__delegate(args);
});
G__39657.cljs$core$IFn$_invoke$arity$variadic = G__39657__delegate;
return G__39657;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39660__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39661__i = 0, G__39661__a = new Array(arguments.length -  0);
while (G__39661__i < G__39661__a.length) {G__39661__a[G__39661__i] = arguments[G__39661__i + 0]; ++G__39661__i;}
  args = new cljs.core.IndexedSeq(G__39661__a,0);
} 
return G__39660__delegate.call(this,args);};
G__39660.cljs$lang$maxFixedArity = 0;
G__39660.cljs$lang$applyTo = (function (arglist__39662){
var args = cljs.core.seq(arglist__39662);
return G__39660__delegate(args);
});
G__39660.cljs$core$IFn$_invoke$arity$variadic = G__39660__delegate;
return G__39660;
})()
;

return null;
});
