goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39041__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39042__i = 0, G__39042__a = new Array(arguments.length -  0);
while (G__39042__i < G__39042__a.length) {G__39042__a[G__39042__i] = arguments[G__39042__i + 0]; ++G__39042__i;}
  args = new cljs.core.IndexedSeq(G__39042__a,0);
} 
return G__39041__delegate.call(this,args);};
G__39041.cljs$lang$maxFixedArity = 0;
G__39041.cljs$lang$applyTo = (function (arglist__39043){
var args = cljs.core.seq(arglist__39043);
return G__39041__delegate(args);
});
G__39041.cljs$core$IFn$_invoke$arity$variadic = G__39041__delegate;
return G__39041;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39044__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39045__i = 0, G__39045__a = new Array(arguments.length -  0);
while (G__39045__i < G__39045__a.length) {G__39045__a[G__39045__i] = arguments[G__39045__i + 0]; ++G__39045__i;}
  args = new cljs.core.IndexedSeq(G__39045__a,0);
} 
return G__39044__delegate.call(this,args);};
G__39044.cljs$lang$maxFixedArity = 0;
G__39044.cljs$lang$applyTo = (function (arglist__39046){
var args = cljs.core.seq(arglist__39046);
return G__39044__delegate(args);
});
G__39044.cljs$core$IFn$_invoke$arity$variadic = G__39044__delegate;
return G__39044;
})()
;

return null;
});
