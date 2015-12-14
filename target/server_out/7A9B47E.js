goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42316__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42317__i = 0, G__42317__a = new Array(arguments.length -  0);
while (G__42317__i < G__42317__a.length) {G__42317__a[G__42317__i] = arguments[G__42317__i + 0]; ++G__42317__i;}
  args = new cljs.core.IndexedSeq(G__42317__a,0);
} 
return G__42316__delegate.call(this,args);};
G__42316.cljs$lang$maxFixedArity = 0;
G__42316.cljs$lang$applyTo = (function (arglist__42318){
var args = cljs.core.seq(arglist__42318);
return G__42316__delegate(args);
});
G__42316.cljs$core$IFn$_invoke$arity$variadic = G__42316__delegate;
return G__42316;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42319__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42320__i = 0, G__42320__a = new Array(arguments.length -  0);
while (G__42320__i < G__42320__a.length) {G__42320__a[G__42320__i] = arguments[G__42320__i + 0]; ++G__42320__i;}
  args = new cljs.core.IndexedSeq(G__42320__a,0);
} 
return G__42319__delegate.call(this,args);};
G__42319.cljs$lang$maxFixedArity = 0;
G__42319.cljs$lang$applyTo = (function (arglist__42321){
var args = cljs.core.seq(arglist__42321);
return G__42319__delegate(args);
});
G__42319.cljs$core$IFn$_invoke$arity$variadic = G__42319__delegate;
return G__42319;
})()
;

return null;
});
