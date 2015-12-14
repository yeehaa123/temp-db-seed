goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37744__i = 0, G__37744__a = new Array(arguments.length -  0);
while (G__37744__i < G__37744__a.length) {G__37744__a[G__37744__i] = arguments[G__37744__i + 0]; ++G__37744__i;}
  args = new cljs.core.IndexedSeq(G__37744__a,0);
} 
return G__37743__delegate.call(this,args);};
G__37743.cljs$lang$maxFixedArity = 0;
G__37743.cljs$lang$applyTo = (function (arglist__37745){
var args = cljs.core.seq(arglist__37745);
return G__37743__delegate(args);
});
G__37743.cljs$core$IFn$_invoke$arity$variadic = G__37743__delegate;
return G__37743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37747__i = 0, G__37747__a = new Array(arguments.length -  0);
while (G__37747__i < G__37747__a.length) {G__37747__a[G__37747__i] = arguments[G__37747__i + 0]; ++G__37747__i;}
  args = new cljs.core.IndexedSeq(G__37747__a,0);
} 
return G__37746__delegate.call(this,args);};
G__37746.cljs$lang$maxFixedArity = 0;
G__37746.cljs$lang$applyTo = (function (arglist__37748){
var args = cljs.core.seq(arglist__37748);
return G__37746__delegate(args);
});
G__37746.cljs$core$IFn$_invoke$arity$variadic = G__37746__delegate;
return G__37746;
})()
;

return null;
});
