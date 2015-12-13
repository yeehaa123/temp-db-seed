goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35491__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35492__i = 0, G__35492__a = new Array(arguments.length -  0);
while (G__35492__i < G__35492__a.length) {G__35492__a[G__35492__i] = arguments[G__35492__i + 0]; ++G__35492__i;}
  args = new cljs.core.IndexedSeq(G__35492__a,0);
} 
return G__35491__delegate.call(this,args);};
G__35491.cljs$lang$maxFixedArity = 0;
G__35491.cljs$lang$applyTo = (function (arglist__35493){
var args = cljs.core.seq(arglist__35493);
return G__35491__delegate(args);
});
G__35491.cljs$core$IFn$_invoke$arity$variadic = G__35491__delegate;
return G__35491;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35494__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35495__i = 0, G__35495__a = new Array(arguments.length -  0);
while (G__35495__i < G__35495__a.length) {G__35495__a[G__35495__i] = arguments[G__35495__i + 0]; ++G__35495__i;}
  args = new cljs.core.IndexedSeq(G__35495__a,0);
} 
return G__35494__delegate.call(this,args);};
G__35494.cljs$lang$maxFixedArity = 0;
G__35494.cljs$lang$applyTo = (function (arglist__35496){
var args = cljs.core.seq(arglist__35496);
return G__35494__delegate(args);
});
G__35494.cljs$core$IFn$_invoke$arity$variadic = G__35494__delegate;
return G__35494;
})()
;

return null;
});
