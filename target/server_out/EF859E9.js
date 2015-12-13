goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37404__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37405__i = 0, G__37405__a = new Array(arguments.length -  0);
while (G__37405__i < G__37405__a.length) {G__37405__a[G__37405__i] = arguments[G__37405__i + 0]; ++G__37405__i;}
  args = new cljs.core.IndexedSeq(G__37405__a,0);
} 
return G__37404__delegate.call(this,args);};
G__37404.cljs$lang$maxFixedArity = 0;
G__37404.cljs$lang$applyTo = (function (arglist__37406){
var args = cljs.core.seq(arglist__37406);
return G__37404__delegate(args);
});
G__37404.cljs$core$IFn$_invoke$arity$variadic = G__37404__delegate;
return G__37404;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37407__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37408__i = 0, G__37408__a = new Array(arguments.length -  0);
while (G__37408__i < G__37408__a.length) {G__37408__a[G__37408__i] = arguments[G__37408__i + 0]; ++G__37408__i;}
  args = new cljs.core.IndexedSeq(G__37408__a,0);
} 
return G__37407__delegate.call(this,args);};
G__37407.cljs$lang$maxFixedArity = 0;
G__37407.cljs$lang$applyTo = (function (arglist__37409){
var args = cljs.core.seq(arglist__37409);
return G__37407__delegate(args);
});
G__37407.cljs$core$IFn$_invoke$arity$variadic = G__37407__delegate;
return G__37407;
})()
;

return null;
});
