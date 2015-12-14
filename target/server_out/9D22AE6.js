goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33837__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33838__i = 0, G__33838__a = new Array(arguments.length -  0);
while (G__33838__i < G__33838__a.length) {G__33838__a[G__33838__i] = arguments[G__33838__i + 0]; ++G__33838__i;}
  args = new cljs.core.IndexedSeq(G__33838__a,0);
} 
return G__33837__delegate.call(this,args);};
G__33837.cljs$lang$maxFixedArity = 0;
G__33837.cljs$lang$applyTo = (function (arglist__33839){
var args = cljs.core.seq(arglist__33839);
return G__33837__delegate(args);
});
G__33837.cljs$core$IFn$_invoke$arity$variadic = G__33837__delegate;
return G__33837;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33840__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33841__i = 0, G__33841__a = new Array(arguments.length -  0);
while (G__33841__i < G__33841__a.length) {G__33841__a[G__33841__i] = arguments[G__33841__i + 0]; ++G__33841__i;}
  args = new cljs.core.IndexedSeq(G__33841__a,0);
} 
return G__33840__delegate.call(this,args);};
G__33840.cljs$lang$maxFixedArity = 0;
G__33840.cljs$lang$applyTo = (function (arglist__33842){
var args = cljs.core.seq(arglist__33842);
return G__33840__delegate(args);
});
G__33840.cljs$core$IFn$_invoke$arity$variadic = G__33840__delegate;
return G__33840;
})()
;

return null;
});
