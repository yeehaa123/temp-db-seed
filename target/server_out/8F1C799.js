goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35625__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35626__i = 0, G__35626__a = new Array(arguments.length -  0);
while (G__35626__i < G__35626__a.length) {G__35626__a[G__35626__i] = arguments[G__35626__i + 0]; ++G__35626__i;}
  args = new cljs.core.IndexedSeq(G__35626__a,0);
} 
return G__35625__delegate.call(this,args);};
G__35625.cljs$lang$maxFixedArity = 0;
G__35625.cljs$lang$applyTo = (function (arglist__35627){
var args = cljs.core.seq(arglist__35627);
return G__35625__delegate(args);
});
G__35625.cljs$core$IFn$_invoke$arity$variadic = G__35625__delegate;
return G__35625;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35628__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35629__i = 0, G__35629__a = new Array(arguments.length -  0);
while (G__35629__i < G__35629__a.length) {G__35629__a[G__35629__i] = arguments[G__35629__i + 0]; ++G__35629__i;}
  args = new cljs.core.IndexedSeq(G__35629__a,0);
} 
return G__35628__delegate.call(this,args);};
G__35628.cljs$lang$maxFixedArity = 0;
G__35628.cljs$lang$applyTo = (function (arglist__35630){
var args = cljs.core.seq(arglist__35630);
return G__35628__delegate(args);
});
G__35628.cljs$core$IFn$_invoke$arity$variadic = G__35628__delegate;
return G__35628;
})()
;

return null;
});
