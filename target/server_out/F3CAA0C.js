goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39325__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39326__i = 0, G__39326__a = new Array(arguments.length -  0);
while (G__39326__i < G__39326__a.length) {G__39326__a[G__39326__i] = arguments[G__39326__i + 0]; ++G__39326__i;}
  args = new cljs.core.IndexedSeq(G__39326__a,0);
} 
return G__39325__delegate.call(this,args);};
G__39325.cljs$lang$maxFixedArity = 0;
G__39325.cljs$lang$applyTo = (function (arglist__39327){
var args = cljs.core.seq(arglist__39327);
return G__39325__delegate(args);
});
G__39325.cljs$core$IFn$_invoke$arity$variadic = G__39325__delegate;
return G__39325;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39328__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39329__i = 0, G__39329__a = new Array(arguments.length -  0);
while (G__39329__i < G__39329__a.length) {G__39329__a[G__39329__i] = arguments[G__39329__i + 0]; ++G__39329__i;}
  args = new cljs.core.IndexedSeq(G__39329__a,0);
} 
return G__39328__delegate.call(this,args);};
G__39328.cljs$lang$maxFixedArity = 0;
G__39328.cljs$lang$applyTo = (function (arglist__39330){
var args = cljs.core.seq(arglist__39330);
return G__39328__delegate(args);
});
G__39328.cljs$core$IFn$_invoke$arity$variadic = G__39328__delegate;
return G__39328;
})()
;

return null;
});
