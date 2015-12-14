goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40339__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40340__i = 0, G__40340__a = new Array(arguments.length -  0);
while (G__40340__i < G__40340__a.length) {G__40340__a[G__40340__i] = arguments[G__40340__i + 0]; ++G__40340__i;}
  args = new cljs.core.IndexedSeq(G__40340__a,0);
} 
return G__40339__delegate.call(this,args);};
G__40339.cljs$lang$maxFixedArity = 0;
G__40339.cljs$lang$applyTo = (function (arglist__40341){
var args = cljs.core.seq(arglist__40341);
return G__40339__delegate(args);
});
G__40339.cljs$core$IFn$_invoke$arity$variadic = G__40339__delegate;
return G__40339;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40342__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40343__i = 0, G__40343__a = new Array(arguments.length -  0);
while (G__40343__i < G__40343__a.length) {G__40343__a[G__40343__i] = arguments[G__40343__i + 0]; ++G__40343__i;}
  args = new cljs.core.IndexedSeq(G__40343__a,0);
} 
return G__40342__delegate.call(this,args);};
G__40342.cljs$lang$maxFixedArity = 0;
G__40342.cljs$lang$applyTo = (function (arglist__40344){
var args = cljs.core.seq(arglist__40344);
return G__40342__delegate(args);
});
G__40342.cljs$core$IFn$_invoke$arity$variadic = G__40342__delegate;
return G__40342;
})()
;

return null;
});
