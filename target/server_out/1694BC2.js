goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34597__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34598__i = 0, G__34598__a = new Array(arguments.length -  0);
while (G__34598__i < G__34598__a.length) {G__34598__a[G__34598__i] = arguments[G__34598__i + 0]; ++G__34598__i;}
  args = new cljs.core.IndexedSeq(G__34598__a,0);
} 
return G__34597__delegate.call(this,args);};
G__34597.cljs$lang$maxFixedArity = 0;
G__34597.cljs$lang$applyTo = (function (arglist__34599){
var args = cljs.core.seq(arglist__34599);
return G__34597__delegate(args);
});
G__34597.cljs$core$IFn$_invoke$arity$variadic = G__34597__delegate;
return G__34597;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34600__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34601__i = 0, G__34601__a = new Array(arguments.length -  0);
while (G__34601__i < G__34601__a.length) {G__34601__a[G__34601__i] = arguments[G__34601__i + 0]; ++G__34601__i;}
  args = new cljs.core.IndexedSeq(G__34601__a,0);
} 
return G__34600__delegate.call(this,args);};
G__34600.cljs$lang$maxFixedArity = 0;
G__34600.cljs$lang$applyTo = (function (arglist__34602){
var args = cljs.core.seq(arglist__34602);
return G__34600__delegate(args);
});
G__34600.cljs$core$IFn$_invoke$arity$variadic = G__34600__delegate;
return G__34600;
})()
;

return null;
});
