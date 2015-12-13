goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35422__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35423__i = 0, G__35423__a = new Array(arguments.length -  0);
while (G__35423__i < G__35423__a.length) {G__35423__a[G__35423__i] = arguments[G__35423__i + 0]; ++G__35423__i;}
  args = new cljs.core.IndexedSeq(G__35423__a,0);
} 
return G__35422__delegate.call(this,args);};
G__35422.cljs$lang$maxFixedArity = 0;
G__35422.cljs$lang$applyTo = (function (arglist__35424){
var args = cljs.core.seq(arglist__35424);
return G__35422__delegate(args);
});
G__35422.cljs$core$IFn$_invoke$arity$variadic = G__35422__delegate;
return G__35422;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35425__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35426__i = 0, G__35426__a = new Array(arguments.length -  0);
while (G__35426__i < G__35426__a.length) {G__35426__a[G__35426__i] = arguments[G__35426__i + 0]; ++G__35426__i;}
  args = new cljs.core.IndexedSeq(G__35426__a,0);
} 
return G__35425__delegate.call(this,args);};
G__35425.cljs$lang$maxFixedArity = 0;
G__35425.cljs$lang$applyTo = (function (arglist__35427){
var args = cljs.core.seq(arglist__35427);
return G__35425__delegate(args);
});
G__35425.cljs$core$IFn$_invoke$arity$variadic = G__35425__delegate;
return G__35425;
})()
;

return null;
});
