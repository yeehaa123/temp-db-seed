goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33686__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33687__i = 0, G__33687__a = new Array(arguments.length -  0);
while (G__33687__i < G__33687__a.length) {G__33687__a[G__33687__i] = arguments[G__33687__i + 0]; ++G__33687__i;}
  args = new cljs.core.IndexedSeq(G__33687__a,0);
} 
return G__33686__delegate.call(this,args);};
G__33686.cljs$lang$maxFixedArity = 0;
G__33686.cljs$lang$applyTo = (function (arglist__33688){
var args = cljs.core.seq(arglist__33688);
return G__33686__delegate(args);
});
G__33686.cljs$core$IFn$_invoke$arity$variadic = G__33686__delegate;
return G__33686;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33689__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33690__i = 0, G__33690__a = new Array(arguments.length -  0);
while (G__33690__i < G__33690__a.length) {G__33690__a[G__33690__i] = arguments[G__33690__i + 0]; ++G__33690__i;}
  args = new cljs.core.IndexedSeq(G__33690__a,0);
} 
return G__33689__delegate.call(this,args);};
G__33689.cljs$lang$maxFixedArity = 0;
G__33689.cljs$lang$applyTo = (function (arglist__33691){
var args = cljs.core.seq(arglist__33691);
return G__33689__delegate(args);
});
G__33689.cljs$core$IFn$_invoke$arity$variadic = G__33689__delegate;
return G__33689;
})()
;

return null;
});
