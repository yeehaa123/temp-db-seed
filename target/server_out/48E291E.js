goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35580__i = 0, G__35580__a = new Array(arguments.length -  0);
while (G__35580__i < G__35580__a.length) {G__35580__a[G__35580__i] = arguments[G__35580__i + 0]; ++G__35580__i;}
  args = new cljs.core.IndexedSeq(G__35580__a,0);
} 
return G__35579__delegate.call(this,args);};
G__35579.cljs$lang$maxFixedArity = 0;
G__35579.cljs$lang$applyTo = (function (arglist__35581){
var args = cljs.core.seq(arglist__35581);
return G__35579__delegate(args);
});
G__35579.cljs$core$IFn$_invoke$arity$variadic = G__35579__delegate;
return G__35579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35583__i = 0, G__35583__a = new Array(arguments.length -  0);
while (G__35583__i < G__35583__a.length) {G__35583__a[G__35583__i] = arguments[G__35583__i + 0]; ++G__35583__i;}
  args = new cljs.core.IndexedSeq(G__35583__a,0);
} 
return G__35582__delegate.call(this,args);};
G__35582.cljs$lang$maxFixedArity = 0;
G__35582.cljs$lang$applyTo = (function (arglist__35584){
var args = cljs.core.seq(arglist__35584);
return G__35582__delegate(args);
});
G__35582.cljs$core$IFn$_invoke$arity$variadic = G__35582__delegate;
return G__35582;
})()
;

return null;
});
