goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43263__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43264__i = 0, G__43264__a = new Array(arguments.length -  0);
while (G__43264__i < G__43264__a.length) {G__43264__a[G__43264__i] = arguments[G__43264__i + 0]; ++G__43264__i;}
  args = new cljs.core.IndexedSeq(G__43264__a,0);
} 
return G__43263__delegate.call(this,args);};
G__43263.cljs$lang$maxFixedArity = 0;
G__43263.cljs$lang$applyTo = (function (arglist__43265){
var args = cljs.core.seq(arglist__43265);
return G__43263__delegate(args);
});
G__43263.cljs$core$IFn$_invoke$arity$variadic = G__43263__delegate;
return G__43263;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43266__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43267__i = 0, G__43267__a = new Array(arguments.length -  0);
while (G__43267__i < G__43267__a.length) {G__43267__a[G__43267__i] = arguments[G__43267__i + 0]; ++G__43267__i;}
  args = new cljs.core.IndexedSeq(G__43267__a,0);
} 
return G__43266__delegate.call(this,args);};
G__43266.cljs$lang$maxFixedArity = 0;
G__43266.cljs$lang$applyTo = (function (arglist__43268){
var args = cljs.core.seq(arglist__43268);
return G__43266__delegate(args);
});
G__43266.cljs$core$IFn$_invoke$arity$variadic = G__43266__delegate;
return G__43266;
})()
;

return null;
});
