goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33854__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33855__i = 0, G__33855__a = new Array(arguments.length -  0);
while (G__33855__i < G__33855__a.length) {G__33855__a[G__33855__i] = arguments[G__33855__i + 0]; ++G__33855__i;}
  args = new cljs.core.IndexedSeq(G__33855__a,0);
} 
return G__33854__delegate.call(this,args);};
G__33854.cljs$lang$maxFixedArity = 0;
G__33854.cljs$lang$applyTo = (function (arglist__33856){
var args = cljs.core.seq(arglist__33856);
return G__33854__delegate(args);
});
G__33854.cljs$core$IFn$_invoke$arity$variadic = G__33854__delegate;
return G__33854;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33857__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33858__i = 0, G__33858__a = new Array(arguments.length -  0);
while (G__33858__i < G__33858__a.length) {G__33858__a[G__33858__i] = arguments[G__33858__i + 0]; ++G__33858__i;}
  args = new cljs.core.IndexedSeq(G__33858__a,0);
} 
return G__33857__delegate.call(this,args);};
G__33857.cljs$lang$maxFixedArity = 0;
G__33857.cljs$lang$applyTo = (function (arglist__33859){
var args = cljs.core.seq(arglist__33859);
return G__33857__delegate(args);
});
G__33857.cljs$core$IFn$_invoke$arity$variadic = G__33857__delegate;
return G__33857;
})()
;

return null;
});
