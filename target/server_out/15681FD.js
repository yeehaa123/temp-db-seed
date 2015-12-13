goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33568__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33569__i = 0, G__33569__a = new Array(arguments.length -  0);
while (G__33569__i < G__33569__a.length) {G__33569__a[G__33569__i] = arguments[G__33569__i + 0]; ++G__33569__i;}
  args = new cljs.core.IndexedSeq(G__33569__a,0);
} 
return G__33568__delegate.call(this,args);};
G__33568.cljs$lang$maxFixedArity = 0;
G__33568.cljs$lang$applyTo = (function (arglist__33570){
var args = cljs.core.seq(arglist__33570);
return G__33568__delegate(args);
});
G__33568.cljs$core$IFn$_invoke$arity$variadic = G__33568__delegate;
return G__33568;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33571__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33572__i = 0, G__33572__a = new Array(arguments.length -  0);
while (G__33572__i < G__33572__a.length) {G__33572__a[G__33572__i] = arguments[G__33572__i + 0]; ++G__33572__i;}
  args = new cljs.core.IndexedSeq(G__33572__a,0);
} 
return G__33571__delegate.call(this,args);};
G__33571.cljs$lang$maxFixedArity = 0;
G__33571.cljs$lang$applyTo = (function (arglist__33573){
var args = cljs.core.seq(arglist__33573);
return G__33571__delegate(args);
});
G__33571.cljs$core$IFn$_invoke$arity$variadic = G__33571__delegate;
return G__33571;
})()
;

return null;
});
