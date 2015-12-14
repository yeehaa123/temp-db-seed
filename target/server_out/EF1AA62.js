goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40691__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40692__i = 0, G__40692__a = new Array(arguments.length -  0);
while (G__40692__i < G__40692__a.length) {G__40692__a[G__40692__i] = arguments[G__40692__i + 0]; ++G__40692__i;}
  args = new cljs.core.IndexedSeq(G__40692__a,0);
} 
return G__40691__delegate.call(this,args);};
G__40691.cljs$lang$maxFixedArity = 0;
G__40691.cljs$lang$applyTo = (function (arglist__40693){
var args = cljs.core.seq(arglist__40693);
return G__40691__delegate(args);
});
G__40691.cljs$core$IFn$_invoke$arity$variadic = G__40691__delegate;
return G__40691;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40694__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40695__i = 0, G__40695__a = new Array(arguments.length -  0);
while (G__40695__i < G__40695__a.length) {G__40695__a[G__40695__i] = arguments[G__40695__i + 0]; ++G__40695__i;}
  args = new cljs.core.IndexedSeq(G__40695__a,0);
} 
return G__40694__delegate.call(this,args);};
G__40694.cljs$lang$maxFixedArity = 0;
G__40694.cljs$lang$applyTo = (function (arglist__40696){
var args = cljs.core.seq(arglist__40696);
return G__40694__delegate(args);
});
G__40694.cljs$core$IFn$_invoke$arity$variadic = G__40694__delegate;
return G__40694;
})()
;

return null;
});
