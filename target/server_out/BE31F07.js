goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33790__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33791__i = 0, G__33791__a = new Array(arguments.length -  0);
while (G__33791__i < G__33791__a.length) {G__33791__a[G__33791__i] = arguments[G__33791__i + 0]; ++G__33791__i;}
  args = new cljs.core.IndexedSeq(G__33791__a,0);
} 
return G__33790__delegate.call(this,args);};
G__33790.cljs$lang$maxFixedArity = 0;
G__33790.cljs$lang$applyTo = (function (arglist__33792){
var args = cljs.core.seq(arglist__33792);
return G__33790__delegate(args);
});
G__33790.cljs$core$IFn$_invoke$arity$variadic = G__33790__delegate;
return G__33790;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33794__i = 0, G__33794__a = new Array(arguments.length -  0);
while (G__33794__i < G__33794__a.length) {G__33794__a[G__33794__i] = arguments[G__33794__i + 0]; ++G__33794__i;}
  args = new cljs.core.IndexedSeq(G__33794__a,0);
} 
return G__33793__delegate.call(this,args);};
G__33793.cljs$lang$maxFixedArity = 0;
G__33793.cljs$lang$applyTo = (function (arglist__33795){
var args = cljs.core.seq(arglist__33795);
return G__33793__delegate(args);
});
G__33793.cljs$core$IFn$_invoke$arity$variadic = G__33793__delegate;
return G__33793;
})()
;

return null;
});
