goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39244__i = 0, G__39244__a = new Array(arguments.length -  0);
while (G__39244__i < G__39244__a.length) {G__39244__a[G__39244__i] = arguments[G__39244__i + 0]; ++G__39244__i;}
  args = new cljs.core.IndexedSeq(G__39244__a,0);
} 
return G__39243__delegate.call(this,args);};
G__39243.cljs$lang$maxFixedArity = 0;
G__39243.cljs$lang$applyTo = (function (arglist__39245){
var args = cljs.core.seq(arglist__39245);
return G__39243__delegate(args);
});
G__39243.cljs$core$IFn$_invoke$arity$variadic = G__39243__delegate;
return G__39243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39247__i = 0, G__39247__a = new Array(arguments.length -  0);
while (G__39247__i < G__39247__a.length) {G__39247__a[G__39247__i] = arguments[G__39247__i + 0]; ++G__39247__i;}
  args = new cljs.core.IndexedSeq(G__39247__a,0);
} 
return G__39246__delegate.call(this,args);};
G__39246.cljs$lang$maxFixedArity = 0;
G__39246.cljs$lang$applyTo = (function (arglist__39248){
var args = cljs.core.seq(arglist__39248);
return G__39246__delegate(args);
});
G__39246.cljs$core$IFn$_invoke$arity$variadic = G__39246__delegate;
return G__39246;
})()
;

return null;
});
