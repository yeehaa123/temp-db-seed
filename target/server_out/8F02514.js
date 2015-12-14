goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33603__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33604__i = 0, G__33604__a = new Array(arguments.length -  0);
while (G__33604__i < G__33604__a.length) {G__33604__a[G__33604__i] = arguments[G__33604__i + 0]; ++G__33604__i;}
  args = new cljs.core.IndexedSeq(G__33604__a,0);
} 
return G__33603__delegate.call(this,args);};
G__33603.cljs$lang$maxFixedArity = 0;
G__33603.cljs$lang$applyTo = (function (arglist__33605){
var args = cljs.core.seq(arglist__33605);
return G__33603__delegate(args);
});
G__33603.cljs$core$IFn$_invoke$arity$variadic = G__33603__delegate;
return G__33603;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33606__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33607__i = 0, G__33607__a = new Array(arguments.length -  0);
while (G__33607__i < G__33607__a.length) {G__33607__a[G__33607__i] = arguments[G__33607__i + 0]; ++G__33607__i;}
  args = new cljs.core.IndexedSeq(G__33607__a,0);
} 
return G__33606__delegate.call(this,args);};
G__33606.cljs$lang$maxFixedArity = 0;
G__33606.cljs$lang$applyTo = (function (arglist__33608){
var args = cljs.core.seq(arglist__33608);
return G__33606__delegate(args);
});
G__33606.cljs$core$IFn$_invoke$arity$variadic = G__33606__delegate;
return G__33606;
})()
;

return null;
});
