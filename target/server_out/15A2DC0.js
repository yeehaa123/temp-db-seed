goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37830__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37831__i = 0, G__37831__a = new Array(arguments.length -  0);
while (G__37831__i < G__37831__a.length) {G__37831__a[G__37831__i] = arguments[G__37831__i + 0]; ++G__37831__i;}
  args = new cljs.core.IndexedSeq(G__37831__a,0);
} 
return G__37830__delegate.call(this,args);};
G__37830.cljs$lang$maxFixedArity = 0;
G__37830.cljs$lang$applyTo = (function (arglist__37832){
var args = cljs.core.seq(arglist__37832);
return G__37830__delegate(args);
});
G__37830.cljs$core$IFn$_invoke$arity$variadic = G__37830__delegate;
return G__37830;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37833__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37834__i = 0, G__37834__a = new Array(arguments.length -  0);
while (G__37834__i < G__37834__a.length) {G__37834__a[G__37834__i] = arguments[G__37834__i + 0]; ++G__37834__i;}
  args = new cljs.core.IndexedSeq(G__37834__a,0);
} 
return G__37833__delegate.call(this,args);};
G__37833.cljs$lang$maxFixedArity = 0;
G__37833.cljs$lang$applyTo = (function (arglist__37835){
var args = cljs.core.seq(arglist__37835);
return G__37833__delegate(args);
});
G__37833.cljs$core$IFn$_invoke$arity$variadic = G__37833__delegate;
return G__37833;
})()
;

return null;
});
