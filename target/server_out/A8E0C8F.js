goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41453__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41454__i = 0, G__41454__a = new Array(arguments.length -  0);
while (G__41454__i < G__41454__a.length) {G__41454__a[G__41454__i] = arguments[G__41454__i + 0]; ++G__41454__i;}
  args = new cljs.core.IndexedSeq(G__41454__a,0);
} 
return G__41453__delegate.call(this,args);};
G__41453.cljs$lang$maxFixedArity = 0;
G__41453.cljs$lang$applyTo = (function (arglist__41455){
var args = cljs.core.seq(arglist__41455);
return G__41453__delegate(args);
});
G__41453.cljs$core$IFn$_invoke$arity$variadic = G__41453__delegate;
return G__41453;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41456__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41457__i = 0, G__41457__a = new Array(arguments.length -  0);
while (G__41457__i < G__41457__a.length) {G__41457__a[G__41457__i] = arguments[G__41457__i + 0]; ++G__41457__i;}
  args = new cljs.core.IndexedSeq(G__41457__a,0);
} 
return G__41456__delegate.call(this,args);};
G__41456.cljs$lang$maxFixedArity = 0;
G__41456.cljs$lang$applyTo = (function (arglist__41458){
var args = cljs.core.seq(arglist__41458);
return G__41456__delegate(args);
});
G__41456.cljs$core$IFn$_invoke$arity$variadic = G__41456__delegate;
return G__41456;
})()
;

return null;
});
