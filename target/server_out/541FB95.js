goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41789__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41790__i = 0, G__41790__a = new Array(arguments.length -  0);
while (G__41790__i < G__41790__a.length) {G__41790__a[G__41790__i] = arguments[G__41790__i + 0]; ++G__41790__i;}
  args = new cljs.core.IndexedSeq(G__41790__a,0);
} 
return G__41789__delegate.call(this,args);};
G__41789.cljs$lang$maxFixedArity = 0;
G__41789.cljs$lang$applyTo = (function (arglist__41791){
var args = cljs.core.seq(arglist__41791);
return G__41789__delegate(args);
});
G__41789.cljs$core$IFn$_invoke$arity$variadic = G__41789__delegate;
return G__41789;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41792__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41793__i = 0, G__41793__a = new Array(arguments.length -  0);
while (G__41793__i < G__41793__a.length) {G__41793__a[G__41793__i] = arguments[G__41793__i + 0]; ++G__41793__i;}
  args = new cljs.core.IndexedSeq(G__41793__a,0);
} 
return G__41792__delegate.call(this,args);};
G__41792.cljs$lang$maxFixedArity = 0;
G__41792.cljs$lang$applyTo = (function (arglist__41794){
var args = cljs.core.seq(arglist__41794);
return G__41792__delegate(args);
});
G__41792.cljs$core$IFn$_invoke$arity$variadic = G__41792__delegate;
return G__41792;
})()
;

return null;
});
