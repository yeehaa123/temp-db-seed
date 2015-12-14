goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43576__i = 0, G__43576__a = new Array(arguments.length -  0);
while (G__43576__i < G__43576__a.length) {G__43576__a[G__43576__i] = arguments[G__43576__i + 0]; ++G__43576__i;}
  args = new cljs.core.IndexedSeq(G__43576__a,0);
} 
return G__43575__delegate.call(this,args);};
G__43575.cljs$lang$maxFixedArity = 0;
G__43575.cljs$lang$applyTo = (function (arglist__43577){
var args = cljs.core.seq(arglist__43577);
return G__43575__delegate(args);
});
G__43575.cljs$core$IFn$_invoke$arity$variadic = G__43575__delegate;
return G__43575;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43579__i = 0, G__43579__a = new Array(arguments.length -  0);
while (G__43579__i < G__43579__a.length) {G__43579__a[G__43579__i] = arguments[G__43579__i + 0]; ++G__43579__i;}
  args = new cljs.core.IndexedSeq(G__43579__a,0);
} 
return G__43578__delegate.call(this,args);};
G__43578.cljs$lang$maxFixedArity = 0;
G__43578.cljs$lang$applyTo = (function (arglist__43580){
var args = cljs.core.seq(arglist__43580);
return G__43578__delegate(args);
});
G__43578.cljs$core$IFn$_invoke$arity$variadic = G__43578__delegate;
return G__43578;
})()
;

return null;
});
