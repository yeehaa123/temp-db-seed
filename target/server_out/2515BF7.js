goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40102__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40103__i = 0, G__40103__a = new Array(arguments.length -  0);
while (G__40103__i < G__40103__a.length) {G__40103__a[G__40103__i] = arguments[G__40103__i + 0]; ++G__40103__i;}
  args = new cljs.core.IndexedSeq(G__40103__a,0);
} 
return G__40102__delegate.call(this,args);};
G__40102.cljs$lang$maxFixedArity = 0;
G__40102.cljs$lang$applyTo = (function (arglist__40104){
var args = cljs.core.seq(arglist__40104);
return G__40102__delegate(args);
});
G__40102.cljs$core$IFn$_invoke$arity$variadic = G__40102__delegate;
return G__40102;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40105__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40106__i = 0, G__40106__a = new Array(arguments.length -  0);
while (G__40106__i < G__40106__a.length) {G__40106__a[G__40106__i] = arguments[G__40106__i + 0]; ++G__40106__i;}
  args = new cljs.core.IndexedSeq(G__40106__a,0);
} 
return G__40105__delegate.call(this,args);};
G__40105.cljs$lang$maxFixedArity = 0;
G__40105.cljs$lang$applyTo = (function (arglist__40107){
var args = cljs.core.seq(arglist__40107);
return G__40105__delegate(args);
});
G__40105.cljs$core$IFn$_invoke$arity$variadic = G__40105__delegate;
return G__40105;
})()
;

return null;
});
