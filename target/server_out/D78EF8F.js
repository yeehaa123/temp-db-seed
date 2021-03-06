goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39472__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39473__i = 0, G__39473__a = new Array(arguments.length -  0);
while (G__39473__i < G__39473__a.length) {G__39473__a[G__39473__i] = arguments[G__39473__i + 0]; ++G__39473__i;}
  args = new cljs.core.IndexedSeq(G__39473__a,0);
} 
return G__39472__delegate.call(this,args);};
G__39472.cljs$lang$maxFixedArity = 0;
G__39472.cljs$lang$applyTo = (function (arglist__39474){
var args = cljs.core.seq(arglist__39474);
return G__39472__delegate(args);
});
G__39472.cljs$core$IFn$_invoke$arity$variadic = G__39472__delegate;
return G__39472;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39475__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39476__i = 0, G__39476__a = new Array(arguments.length -  0);
while (G__39476__i < G__39476__a.length) {G__39476__a[G__39476__i] = arguments[G__39476__i + 0]; ++G__39476__i;}
  args = new cljs.core.IndexedSeq(G__39476__a,0);
} 
return G__39475__delegate.call(this,args);};
G__39475.cljs$lang$maxFixedArity = 0;
G__39475.cljs$lang$applyTo = (function (arglist__39477){
var args = cljs.core.seq(arglist__39477);
return G__39475__delegate(args);
});
G__39475.cljs$core$IFn$_invoke$arity$variadic = G__39475__delegate;
return G__39475;
})()
;

return null;
});
