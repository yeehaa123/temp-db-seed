goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38745__i = 0, G__38745__a = new Array(arguments.length -  0);
while (G__38745__i < G__38745__a.length) {G__38745__a[G__38745__i] = arguments[G__38745__i + 0]; ++G__38745__i;}
  args = new cljs.core.IndexedSeq(G__38745__a,0);
} 
return G__38744__delegate.call(this,args);};
G__38744.cljs$lang$maxFixedArity = 0;
G__38744.cljs$lang$applyTo = (function (arglist__38746){
var args = cljs.core.seq(arglist__38746);
return G__38744__delegate(args);
});
G__38744.cljs$core$IFn$_invoke$arity$variadic = G__38744__delegate;
return G__38744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38748__i = 0, G__38748__a = new Array(arguments.length -  0);
while (G__38748__i < G__38748__a.length) {G__38748__a[G__38748__i] = arguments[G__38748__i + 0]; ++G__38748__i;}
  args = new cljs.core.IndexedSeq(G__38748__a,0);
} 
return G__38747__delegate.call(this,args);};
G__38747.cljs$lang$maxFixedArity = 0;
G__38747.cljs$lang$applyTo = (function (arglist__38749){
var args = cljs.core.seq(arglist__38749);
return G__38747__delegate(args);
});
G__38747.cljs$core$IFn$_invoke$arity$variadic = G__38747__delegate;
return G__38747;
})()
;

return null;
});
