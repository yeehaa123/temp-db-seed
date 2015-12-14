goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37802__i = 0, G__37802__a = new Array(arguments.length -  0);
while (G__37802__i < G__37802__a.length) {G__37802__a[G__37802__i] = arguments[G__37802__i + 0]; ++G__37802__i;}
  args = new cljs.core.IndexedSeq(G__37802__a,0);
} 
return G__37801__delegate.call(this,args);};
G__37801.cljs$lang$maxFixedArity = 0;
G__37801.cljs$lang$applyTo = (function (arglist__37803){
var args = cljs.core.seq(arglist__37803);
return G__37801__delegate(args);
});
G__37801.cljs$core$IFn$_invoke$arity$variadic = G__37801__delegate;
return G__37801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37806__i = 0, G__37806__a = new Array(arguments.length -  0);
while (G__37806__i < G__37806__a.length) {G__37806__a[G__37806__i] = arguments[G__37806__i + 0]; ++G__37806__i;}
  args = new cljs.core.IndexedSeq(G__37806__a,0);
} 
return G__37804__delegate.call(this,args);};
G__37804.cljs$lang$maxFixedArity = 0;
G__37804.cljs$lang$applyTo = (function (arglist__37807){
var args = cljs.core.seq(arglist__37807);
return G__37804__delegate(args);
});
G__37804.cljs$core$IFn$_invoke$arity$variadic = G__37804__delegate;
return G__37804;
})()
;

return null;
});
