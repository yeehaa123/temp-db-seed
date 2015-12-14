goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43822__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43823__i = 0, G__43823__a = new Array(arguments.length -  0);
while (G__43823__i < G__43823__a.length) {G__43823__a[G__43823__i] = arguments[G__43823__i + 0]; ++G__43823__i;}
  args = new cljs.core.IndexedSeq(G__43823__a,0);
} 
return G__43822__delegate.call(this,args);};
G__43822.cljs$lang$maxFixedArity = 0;
G__43822.cljs$lang$applyTo = (function (arglist__43824){
var args = cljs.core.seq(arglist__43824);
return G__43822__delegate(args);
});
G__43822.cljs$core$IFn$_invoke$arity$variadic = G__43822__delegate;
return G__43822;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43825__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43826__i = 0, G__43826__a = new Array(arguments.length -  0);
while (G__43826__i < G__43826__a.length) {G__43826__a[G__43826__i] = arguments[G__43826__i + 0]; ++G__43826__i;}
  args = new cljs.core.IndexedSeq(G__43826__a,0);
} 
return G__43825__delegate.call(this,args);};
G__43825.cljs$lang$maxFixedArity = 0;
G__43825.cljs$lang$applyTo = (function (arglist__43827){
var args = cljs.core.seq(arglist__43827);
return G__43825__delegate(args);
});
G__43825.cljs$core$IFn$_invoke$arity$variadic = G__43825__delegate;
return G__43825;
})()
;

return null;
});
