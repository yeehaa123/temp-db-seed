goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42111__i = 0, G__42111__a = new Array(arguments.length -  0);
while (G__42111__i < G__42111__a.length) {G__42111__a[G__42111__i] = arguments[G__42111__i + 0]; ++G__42111__i;}
  args = new cljs.core.IndexedSeq(G__42111__a,0);
} 
return G__42110__delegate.call(this,args);};
G__42110.cljs$lang$maxFixedArity = 0;
G__42110.cljs$lang$applyTo = (function (arglist__42112){
var args = cljs.core.seq(arglist__42112);
return G__42110__delegate(args);
});
G__42110.cljs$core$IFn$_invoke$arity$variadic = G__42110__delegate;
return G__42110;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42114__i = 0, G__42114__a = new Array(arguments.length -  0);
while (G__42114__i < G__42114__a.length) {G__42114__a[G__42114__i] = arguments[G__42114__i + 0]; ++G__42114__i;}
  args = new cljs.core.IndexedSeq(G__42114__a,0);
} 
return G__42113__delegate.call(this,args);};
G__42113.cljs$lang$maxFixedArity = 0;
G__42113.cljs$lang$applyTo = (function (arglist__42116){
var args = cljs.core.seq(arglist__42116);
return G__42113__delegate(args);
});
G__42113.cljs$core$IFn$_invoke$arity$variadic = G__42113__delegate;
return G__42113;
})()
;

return null;
});
