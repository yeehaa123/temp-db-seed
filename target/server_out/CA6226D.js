goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35512__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35513__i = 0, G__35513__a = new Array(arguments.length -  0);
while (G__35513__i < G__35513__a.length) {G__35513__a[G__35513__i] = arguments[G__35513__i + 0]; ++G__35513__i;}
  args = new cljs.core.IndexedSeq(G__35513__a,0);
} 
return G__35512__delegate.call(this,args);};
G__35512.cljs$lang$maxFixedArity = 0;
G__35512.cljs$lang$applyTo = (function (arglist__35514){
var args = cljs.core.seq(arglist__35514);
return G__35512__delegate(args);
});
G__35512.cljs$core$IFn$_invoke$arity$variadic = G__35512__delegate;
return G__35512;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35515__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35516__i = 0, G__35516__a = new Array(arguments.length -  0);
while (G__35516__i < G__35516__a.length) {G__35516__a[G__35516__i] = arguments[G__35516__i + 0]; ++G__35516__i;}
  args = new cljs.core.IndexedSeq(G__35516__a,0);
} 
return G__35515__delegate.call(this,args);};
G__35515.cljs$lang$maxFixedArity = 0;
G__35515.cljs$lang$applyTo = (function (arglist__35517){
var args = cljs.core.seq(arglist__35517);
return G__35515__delegate(args);
});
G__35515.cljs$core$IFn$_invoke$arity$variadic = G__35515__delegate;
return G__35515;
})()
;

return null;
});
