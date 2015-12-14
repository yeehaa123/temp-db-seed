goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37487__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37488__i = 0, G__37488__a = new Array(arguments.length -  0);
while (G__37488__i < G__37488__a.length) {G__37488__a[G__37488__i] = arguments[G__37488__i + 0]; ++G__37488__i;}
  args = new cljs.core.IndexedSeq(G__37488__a,0);
} 
return G__37487__delegate.call(this,args);};
G__37487.cljs$lang$maxFixedArity = 0;
G__37487.cljs$lang$applyTo = (function (arglist__37489){
var args = cljs.core.seq(arglist__37489);
return G__37487__delegate(args);
});
G__37487.cljs$core$IFn$_invoke$arity$variadic = G__37487__delegate;
return G__37487;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37490__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37491__i = 0, G__37491__a = new Array(arguments.length -  0);
while (G__37491__i < G__37491__a.length) {G__37491__a[G__37491__i] = arguments[G__37491__i + 0]; ++G__37491__i;}
  args = new cljs.core.IndexedSeq(G__37491__a,0);
} 
return G__37490__delegate.call(this,args);};
G__37490.cljs$lang$maxFixedArity = 0;
G__37490.cljs$lang$applyTo = (function (arglist__37492){
var args = cljs.core.seq(arglist__37492);
return G__37490__delegate(args);
});
G__37490.cljs$core$IFn$_invoke$arity$variadic = G__37490__delegate;
return G__37490;
})()
;

return null;
});
