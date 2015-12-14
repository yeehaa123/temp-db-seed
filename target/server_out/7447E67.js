goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38772__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38773__i = 0, G__38773__a = new Array(arguments.length -  0);
while (G__38773__i < G__38773__a.length) {G__38773__a[G__38773__i] = arguments[G__38773__i + 0]; ++G__38773__i;}
  args = new cljs.core.IndexedSeq(G__38773__a,0);
} 
return G__38772__delegate.call(this,args);};
G__38772.cljs$lang$maxFixedArity = 0;
G__38772.cljs$lang$applyTo = (function (arglist__38774){
var args = cljs.core.seq(arglist__38774);
return G__38772__delegate(args);
});
G__38772.cljs$core$IFn$_invoke$arity$variadic = G__38772__delegate;
return G__38772;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38775__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38777__i = 0, G__38777__a = new Array(arguments.length -  0);
while (G__38777__i < G__38777__a.length) {G__38777__a[G__38777__i] = arguments[G__38777__i + 0]; ++G__38777__i;}
  args = new cljs.core.IndexedSeq(G__38777__a,0);
} 
return G__38775__delegate.call(this,args);};
G__38775.cljs$lang$maxFixedArity = 0;
G__38775.cljs$lang$applyTo = (function (arglist__38778){
var args = cljs.core.seq(arglist__38778);
return G__38775__delegate(args);
});
G__38775.cljs$core$IFn$_invoke$arity$variadic = G__38775__delegate;
return G__38775;
})()
;

return null;
});
