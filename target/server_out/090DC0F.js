goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43440__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43441__i = 0, G__43441__a = new Array(arguments.length -  0);
while (G__43441__i < G__43441__a.length) {G__43441__a[G__43441__i] = arguments[G__43441__i + 0]; ++G__43441__i;}
  args = new cljs.core.IndexedSeq(G__43441__a,0);
} 
return G__43440__delegate.call(this,args);};
G__43440.cljs$lang$maxFixedArity = 0;
G__43440.cljs$lang$applyTo = (function (arglist__43442){
var args = cljs.core.seq(arglist__43442);
return G__43440__delegate(args);
});
G__43440.cljs$core$IFn$_invoke$arity$variadic = G__43440__delegate;
return G__43440;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43443__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43444__i = 0, G__43444__a = new Array(arguments.length -  0);
while (G__43444__i < G__43444__a.length) {G__43444__a[G__43444__i] = arguments[G__43444__i + 0]; ++G__43444__i;}
  args = new cljs.core.IndexedSeq(G__43444__a,0);
} 
return G__43443__delegate.call(this,args);};
G__43443.cljs$lang$maxFixedArity = 0;
G__43443.cljs$lang$applyTo = (function (arglist__43445){
var args = cljs.core.seq(arglist__43445);
return G__43443__delegate(args);
});
G__43443.cljs$core$IFn$_invoke$arity$variadic = G__43443__delegate;
return G__43443;
})()
;

return null;
});
