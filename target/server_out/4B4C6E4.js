goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33554__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33555__i = 0, G__33555__a = new Array(arguments.length -  0);
while (G__33555__i < G__33555__a.length) {G__33555__a[G__33555__i] = arguments[G__33555__i + 0]; ++G__33555__i;}
  args = new cljs.core.IndexedSeq(G__33555__a,0);
} 
return G__33554__delegate.call(this,args);};
G__33554.cljs$lang$maxFixedArity = 0;
G__33554.cljs$lang$applyTo = (function (arglist__33556){
var args = cljs.core.seq(arglist__33556);
return G__33554__delegate(args);
});
G__33554.cljs$core$IFn$_invoke$arity$variadic = G__33554__delegate;
return G__33554;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33557__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33558__i = 0, G__33558__a = new Array(arguments.length -  0);
while (G__33558__i < G__33558__a.length) {G__33558__a[G__33558__i] = arguments[G__33558__i + 0]; ++G__33558__i;}
  args = new cljs.core.IndexedSeq(G__33558__a,0);
} 
return G__33557__delegate.call(this,args);};
G__33557.cljs$lang$maxFixedArity = 0;
G__33557.cljs$lang$applyTo = (function (arglist__33559){
var args = cljs.core.seq(arglist__33559);
return G__33557__delegate(args);
});
G__33557.cljs$core$IFn$_invoke$arity$variadic = G__33557__delegate;
return G__33557;
})()
;

return null;
});
