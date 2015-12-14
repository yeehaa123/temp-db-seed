goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42163__i = 0, G__42163__a = new Array(arguments.length -  0);
while (G__42163__i < G__42163__a.length) {G__42163__a[G__42163__i] = arguments[G__42163__i + 0]; ++G__42163__i;}
  args = new cljs.core.IndexedSeq(G__42163__a,0);
} 
return G__42162__delegate.call(this,args);};
G__42162.cljs$lang$maxFixedArity = 0;
G__42162.cljs$lang$applyTo = (function (arglist__42164){
var args = cljs.core.seq(arglist__42164);
return G__42162__delegate(args);
});
G__42162.cljs$core$IFn$_invoke$arity$variadic = G__42162__delegate;
return G__42162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42166__i = 0, G__42166__a = new Array(arguments.length -  0);
while (G__42166__i < G__42166__a.length) {G__42166__a[G__42166__i] = arguments[G__42166__i + 0]; ++G__42166__i;}
  args = new cljs.core.IndexedSeq(G__42166__a,0);
} 
return G__42165__delegate.call(this,args);};
G__42165.cljs$lang$maxFixedArity = 0;
G__42165.cljs$lang$applyTo = (function (arglist__42167){
var args = cljs.core.seq(arglist__42167);
return G__42165__delegate(args);
});
G__42165.cljs$core$IFn$_invoke$arity$variadic = G__42165__delegate;
return G__42165;
})()
;

return null;
});
