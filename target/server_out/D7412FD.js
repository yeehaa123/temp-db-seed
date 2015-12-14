goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41081__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41082__i = 0, G__41082__a = new Array(arguments.length -  0);
while (G__41082__i < G__41082__a.length) {G__41082__a[G__41082__i] = arguments[G__41082__i + 0]; ++G__41082__i;}
  args = new cljs.core.IndexedSeq(G__41082__a,0);
} 
return G__41081__delegate.call(this,args);};
G__41081.cljs$lang$maxFixedArity = 0;
G__41081.cljs$lang$applyTo = (function (arglist__41083){
var args = cljs.core.seq(arglist__41083);
return G__41081__delegate(args);
});
G__41081.cljs$core$IFn$_invoke$arity$variadic = G__41081__delegate;
return G__41081;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41084__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41085__i = 0, G__41085__a = new Array(arguments.length -  0);
while (G__41085__i < G__41085__a.length) {G__41085__a[G__41085__i] = arguments[G__41085__i + 0]; ++G__41085__i;}
  args = new cljs.core.IndexedSeq(G__41085__a,0);
} 
return G__41084__delegate.call(this,args);};
G__41084.cljs$lang$maxFixedArity = 0;
G__41084.cljs$lang$applyTo = (function (arglist__41086){
var args = cljs.core.seq(arglist__41086);
return G__41084__delegate(args);
});
G__41084.cljs$core$IFn$_invoke$arity$variadic = G__41084__delegate;
return G__41084;
})()
;

return null;
});
