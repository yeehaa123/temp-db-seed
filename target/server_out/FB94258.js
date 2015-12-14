goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36013__i = 0, G__36013__a = new Array(arguments.length -  0);
while (G__36013__i < G__36013__a.length) {G__36013__a[G__36013__i] = arguments[G__36013__i + 0]; ++G__36013__i;}
  args = new cljs.core.IndexedSeq(G__36013__a,0);
} 
return G__36012__delegate.call(this,args);};
G__36012.cljs$lang$maxFixedArity = 0;
G__36012.cljs$lang$applyTo = (function (arglist__36014){
var args = cljs.core.seq(arglist__36014);
return G__36012__delegate(args);
});
G__36012.cljs$core$IFn$_invoke$arity$variadic = G__36012__delegate;
return G__36012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36016__i = 0, G__36016__a = new Array(arguments.length -  0);
while (G__36016__i < G__36016__a.length) {G__36016__a[G__36016__i] = arguments[G__36016__i + 0]; ++G__36016__i;}
  args = new cljs.core.IndexedSeq(G__36016__a,0);
} 
return G__36015__delegate.call(this,args);};
G__36015.cljs$lang$maxFixedArity = 0;
G__36015.cljs$lang$applyTo = (function (arglist__36017){
var args = cljs.core.seq(arglist__36017);
return G__36015__delegate(args);
});
G__36015.cljs$core$IFn$_invoke$arity$variadic = G__36015__delegate;
return G__36015;
})()
;

return null;
});
