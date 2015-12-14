goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41712__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41713__i = 0, G__41713__a = new Array(arguments.length -  0);
while (G__41713__i < G__41713__a.length) {G__41713__a[G__41713__i] = arguments[G__41713__i + 0]; ++G__41713__i;}
  args = new cljs.core.IndexedSeq(G__41713__a,0);
} 
return G__41712__delegate.call(this,args);};
G__41712.cljs$lang$maxFixedArity = 0;
G__41712.cljs$lang$applyTo = (function (arglist__41714){
var args = cljs.core.seq(arglist__41714);
return G__41712__delegate(args);
});
G__41712.cljs$core$IFn$_invoke$arity$variadic = G__41712__delegate;
return G__41712;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41715__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41716__i = 0, G__41716__a = new Array(arguments.length -  0);
while (G__41716__i < G__41716__a.length) {G__41716__a[G__41716__i] = arguments[G__41716__i + 0]; ++G__41716__i;}
  args = new cljs.core.IndexedSeq(G__41716__a,0);
} 
return G__41715__delegate.call(this,args);};
G__41715.cljs$lang$maxFixedArity = 0;
G__41715.cljs$lang$applyTo = (function (arglist__41717){
var args = cljs.core.seq(arglist__41717);
return G__41715__delegate(args);
});
G__41715.cljs$core$IFn$_invoke$arity$variadic = G__41715__delegate;
return G__41715;
})()
;

return null;
});
