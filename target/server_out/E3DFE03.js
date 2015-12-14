goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42456__i = 0, G__42456__a = new Array(arguments.length -  0);
while (G__42456__i < G__42456__a.length) {G__42456__a[G__42456__i] = arguments[G__42456__i + 0]; ++G__42456__i;}
  args = new cljs.core.IndexedSeq(G__42456__a,0);
} 
return G__42455__delegate.call(this,args);};
G__42455.cljs$lang$maxFixedArity = 0;
G__42455.cljs$lang$applyTo = (function (arglist__42457){
var args = cljs.core.seq(arglist__42457);
return G__42455__delegate(args);
});
G__42455.cljs$core$IFn$_invoke$arity$variadic = G__42455__delegate;
return G__42455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42459__i = 0, G__42459__a = new Array(arguments.length -  0);
while (G__42459__i < G__42459__a.length) {G__42459__a[G__42459__i] = arguments[G__42459__i + 0]; ++G__42459__i;}
  args = new cljs.core.IndexedSeq(G__42459__a,0);
} 
return G__42458__delegate.call(this,args);};
G__42458.cljs$lang$maxFixedArity = 0;
G__42458.cljs$lang$applyTo = (function (arglist__42460){
var args = cljs.core.seq(arglist__42460);
return G__42458__delegate(args);
});
G__42458.cljs$core$IFn$_invoke$arity$variadic = G__42458__delegate;
return G__42458;
})()
;

return null;
});
