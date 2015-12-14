goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33630__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33631__i = 0, G__33631__a = new Array(arguments.length -  0);
while (G__33631__i < G__33631__a.length) {G__33631__a[G__33631__i] = arguments[G__33631__i + 0]; ++G__33631__i;}
  args = new cljs.core.IndexedSeq(G__33631__a,0);
} 
return G__33630__delegate.call(this,args);};
G__33630.cljs$lang$maxFixedArity = 0;
G__33630.cljs$lang$applyTo = (function (arglist__33632){
var args = cljs.core.seq(arglist__33632);
return G__33630__delegate(args);
});
G__33630.cljs$core$IFn$_invoke$arity$variadic = G__33630__delegate;
return G__33630;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33633__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33634__i = 0, G__33634__a = new Array(arguments.length -  0);
while (G__33634__i < G__33634__a.length) {G__33634__a[G__33634__i] = arguments[G__33634__i + 0]; ++G__33634__i;}
  args = new cljs.core.IndexedSeq(G__33634__a,0);
} 
return G__33633__delegate.call(this,args);};
G__33633.cljs$lang$maxFixedArity = 0;
G__33633.cljs$lang$applyTo = (function (arglist__33635){
var args = cljs.core.seq(arglist__33635);
return G__33633__delegate(args);
});
G__33633.cljs$core$IFn$_invoke$arity$variadic = G__33633__delegate;
return G__33633;
})()
;

return null;
});
