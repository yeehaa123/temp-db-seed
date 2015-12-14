goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43363__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43364__i = 0, G__43364__a = new Array(arguments.length -  0);
while (G__43364__i < G__43364__a.length) {G__43364__a[G__43364__i] = arguments[G__43364__i + 0]; ++G__43364__i;}
  args = new cljs.core.IndexedSeq(G__43364__a,0);
} 
return G__43363__delegate.call(this,args);};
G__43363.cljs$lang$maxFixedArity = 0;
G__43363.cljs$lang$applyTo = (function (arglist__43365){
var args = cljs.core.seq(arglist__43365);
return G__43363__delegate(args);
});
G__43363.cljs$core$IFn$_invoke$arity$variadic = G__43363__delegate;
return G__43363;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43366__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43367__i = 0, G__43367__a = new Array(arguments.length -  0);
while (G__43367__i < G__43367__a.length) {G__43367__a[G__43367__i] = arguments[G__43367__i + 0]; ++G__43367__i;}
  args = new cljs.core.IndexedSeq(G__43367__a,0);
} 
return G__43366__delegate.call(this,args);};
G__43366.cljs$lang$maxFixedArity = 0;
G__43366.cljs$lang$applyTo = (function (arglist__43368){
var args = cljs.core.seq(arglist__43368);
return G__43366__delegate(args);
});
G__43366.cljs$core$IFn$_invoke$arity$variadic = G__43366__delegate;
return G__43366;
})()
;

return null;
});
