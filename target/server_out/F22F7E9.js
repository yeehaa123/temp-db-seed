goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43343__i = 0, G__43343__a = new Array(arguments.length -  0);
while (G__43343__i < G__43343__a.length) {G__43343__a[G__43343__i] = arguments[G__43343__i + 0]; ++G__43343__i;}
  args = new cljs.core.IndexedSeq(G__43343__a,0);
} 
return G__43342__delegate.call(this,args);};
G__43342.cljs$lang$maxFixedArity = 0;
G__43342.cljs$lang$applyTo = (function (arglist__43344){
var args = cljs.core.seq(arglist__43344);
return G__43342__delegate(args);
});
G__43342.cljs$core$IFn$_invoke$arity$variadic = G__43342__delegate;
return G__43342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43346__i = 0, G__43346__a = new Array(arguments.length -  0);
while (G__43346__i < G__43346__a.length) {G__43346__a[G__43346__i] = arguments[G__43346__i + 0]; ++G__43346__i;}
  args = new cljs.core.IndexedSeq(G__43346__a,0);
} 
return G__43345__delegate.call(this,args);};
G__43345.cljs$lang$maxFixedArity = 0;
G__43345.cljs$lang$applyTo = (function (arglist__43347){
var args = cljs.core.seq(arglist__43347);
return G__43345__delegate(args);
});
G__43345.cljs$core$IFn$_invoke$arity$variadic = G__43345__delegate;
return G__43345;
})()
;

return null;
});
