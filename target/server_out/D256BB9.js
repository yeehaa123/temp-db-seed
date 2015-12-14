goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41277__i = 0, G__41277__a = new Array(arguments.length -  0);
while (G__41277__i < G__41277__a.length) {G__41277__a[G__41277__i] = arguments[G__41277__i + 0]; ++G__41277__i;}
  args = new cljs.core.IndexedSeq(G__41277__a,0);
} 
return G__41276__delegate.call(this,args);};
G__41276.cljs$lang$maxFixedArity = 0;
G__41276.cljs$lang$applyTo = (function (arglist__41278){
var args = cljs.core.seq(arglist__41278);
return G__41276__delegate(args);
});
G__41276.cljs$core$IFn$_invoke$arity$variadic = G__41276__delegate;
return G__41276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41280__i = 0, G__41280__a = new Array(arguments.length -  0);
while (G__41280__i < G__41280__a.length) {G__41280__a[G__41280__i] = arguments[G__41280__i + 0]; ++G__41280__i;}
  args = new cljs.core.IndexedSeq(G__41280__a,0);
} 
return G__41279__delegate.call(this,args);};
G__41279.cljs$lang$maxFixedArity = 0;
G__41279.cljs$lang$applyTo = (function (arglist__41281){
var args = cljs.core.seq(arglist__41281);
return G__41279__delegate(args);
});
G__41279.cljs$core$IFn$_invoke$arity$variadic = G__41279__delegate;
return G__41279;
})()
;

return null;
});
