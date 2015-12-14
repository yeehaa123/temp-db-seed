goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39531__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39532__i = 0, G__39532__a = new Array(arguments.length -  0);
while (G__39532__i < G__39532__a.length) {G__39532__a[G__39532__i] = arguments[G__39532__i + 0]; ++G__39532__i;}
  args = new cljs.core.IndexedSeq(G__39532__a,0);
} 
return G__39531__delegate.call(this,args);};
G__39531.cljs$lang$maxFixedArity = 0;
G__39531.cljs$lang$applyTo = (function (arglist__39533){
var args = cljs.core.seq(arglist__39533);
return G__39531__delegate(args);
});
G__39531.cljs$core$IFn$_invoke$arity$variadic = G__39531__delegate;
return G__39531;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39534__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39535__i = 0, G__39535__a = new Array(arguments.length -  0);
while (G__39535__i < G__39535__a.length) {G__39535__a[G__39535__i] = arguments[G__39535__i + 0]; ++G__39535__i;}
  args = new cljs.core.IndexedSeq(G__39535__a,0);
} 
return G__39534__delegate.call(this,args);};
G__39534.cljs$lang$maxFixedArity = 0;
G__39534.cljs$lang$applyTo = (function (arglist__39536){
var args = cljs.core.seq(arglist__39536);
return G__39534__delegate(args);
});
G__39534.cljs$core$IFn$_invoke$arity$variadic = G__39534__delegate;
return G__39534;
})()
;

return null;
});
