goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35148__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35149__i = 0, G__35149__a = new Array(arguments.length -  0);
while (G__35149__i < G__35149__a.length) {G__35149__a[G__35149__i] = arguments[G__35149__i + 0]; ++G__35149__i;}
  args = new cljs.core.IndexedSeq(G__35149__a,0);
} 
return G__35148__delegate.call(this,args);};
G__35148.cljs$lang$maxFixedArity = 0;
G__35148.cljs$lang$applyTo = (function (arglist__35150){
var args = cljs.core.seq(arglist__35150);
return G__35148__delegate(args);
});
G__35148.cljs$core$IFn$_invoke$arity$variadic = G__35148__delegate;
return G__35148;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35151__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35153__i = 0, G__35153__a = new Array(arguments.length -  0);
while (G__35153__i < G__35153__a.length) {G__35153__a[G__35153__i] = arguments[G__35153__i + 0]; ++G__35153__i;}
  args = new cljs.core.IndexedSeq(G__35153__a,0);
} 
return G__35151__delegate.call(this,args);};
G__35151.cljs$lang$maxFixedArity = 0;
G__35151.cljs$lang$applyTo = (function (arglist__35154){
var args = cljs.core.seq(arglist__35154);
return G__35151__delegate(args);
});
G__35151.cljs$core$IFn$_invoke$arity$variadic = G__35151__delegate;
return G__35151;
})()
;

return null;
});
