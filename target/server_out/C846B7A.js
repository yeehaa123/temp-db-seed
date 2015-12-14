goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41253__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41254__i = 0, G__41254__a = new Array(arguments.length -  0);
while (G__41254__i < G__41254__a.length) {G__41254__a[G__41254__i] = arguments[G__41254__i + 0]; ++G__41254__i;}
  args = new cljs.core.IndexedSeq(G__41254__a,0);
} 
return G__41253__delegate.call(this,args);};
G__41253.cljs$lang$maxFixedArity = 0;
G__41253.cljs$lang$applyTo = (function (arglist__41255){
var args = cljs.core.seq(arglist__41255);
return G__41253__delegate(args);
});
G__41253.cljs$core$IFn$_invoke$arity$variadic = G__41253__delegate;
return G__41253;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41256__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41257__i = 0, G__41257__a = new Array(arguments.length -  0);
while (G__41257__i < G__41257__a.length) {G__41257__a[G__41257__i] = arguments[G__41257__i + 0]; ++G__41257__i;}
  args = new cljs.core.IndexedSeq(G__41257__a,0);
} 
return G__41256__delegate.call(this,args);};
G__41256.cljs$lang$maxFixedArity = 0;
G__41256.cljs$lang$applyTo = (function (arglist__41258){
var args = cljs.core.seq(arglist__41258);
return G__41256__delegate(args);
});
G__41256.cljs$core$IFn$_invoke$arity$variadic = G__41256__delegate;
return G__41256;
})()
;

return null;
});
