goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38633__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38634__i = 0, G__38634__a = new Array(arguments.length -  0);
while (G__38634__i < G__38634__a.length) {G__38634__a[G__38634__i] = arguments[G__38634__i + 0]; ++G__38634__i;}
  args = new cljs.core.IndexedSeq(G__38634__a,0);
} 
return G__38633__delegate.call(this,args);};
G__38633.cljs$lang$maxFixedArity = 0;
G__38633.cljs$lang$applyTo = (function (arglist__38635){
var args = cljs.core.seq(arglist__38635);
return G__38633__delegate(args);
});
G__38633.cljs$core$IFn$_invoke$arity$variadic = G__38633__delegate;
return G__38633;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38636__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38637__i = 0, G__38637__a = new Array(arguments.length -  0);
while (G__38637__i < G__38637__a.length) {G__38637__a[G__38637__i] = arguments[G__38637__i + 0]; ++G__38637__i;}
  args = new cljs.core.IndexedSeq(G__38637__a,0);
} 
return G__38636__delegate.call(this,args);};
G__38636.cljs$lang$maxFixedArity = 0;
G__38636.cljs$lang$applyTo = (function (arglist__38638){
var args = cljs.core.seq(arglist__38638);
return G__38636__delegate(args);
});
G__38636.cljs$core$IFn$_invoke$arity$variadic = G__38636__delegate;
return G__38636;
})()
;

return null;
});
