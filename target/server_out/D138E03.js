goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39634__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39635__i = 0, G__39635__a = new Array(arguments.length -  0);
while (G__39635__i < G__39635__a.length) {G__39635__a[G__39635__i] = arguments[G__39635__i + 0]; ++G__39635__i;}
  args = new cljs.core.IndexedSeq(G__39635__a,0);
} 
return G__39634__delegate.call(this,args);};
G__39634.cljs$lang$maxFixedArity = 0;
G__39634.cljs$lang$applyTo = (function (arglist__39636){
var args = cljs.core.seq(arglist__39636);
return G__39634__delegate(args);
});
G__39634.cljs$core$IFn$_invoke$arity$variadic = G__39634__delegate;
return G__39634;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39637__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39638__i = 0, G__39638__a = new Array(arguments.length -  0);
while (G__39638__i < G__39638__a.length) {G__39638__a[G__39638__i] = arguments[G__39638__i + 0]; ++G__39638__i;}
  args = new cljs.core.IndexedSeq(G__39638__a,0);
} 
return G__39637__delegate.call(this,args);};
G__39637.cljs$lang$maxFixedArity = 0;
G__39637.cljs$lang$applyTo = (function (arglist__39639){
var args = cljs.core.seq(arglist__39639);
return G__39637__delegate(args);
});
G__39637.cljs$core$IFn$_invoke$arity$variadic = G__39637__delegate;
return G__39637;
})()
;

return null;
});
