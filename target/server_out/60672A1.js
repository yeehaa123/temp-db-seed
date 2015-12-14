goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43078__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43079__i = 0, G__43079__a = new Array(arguments.length -  0);
while (G__43079__i < G__43079__a.length) {G__43079__a[G__43079__i] = arguments[G__43079__i + 0]; ++G__43079__i;}
  args = new cljs.core.IndexedSeq(G__43079__a,0);
} 
return G__43078__delegate.call(this,args);};
G__43078.cljs$lang$maxFixedArity = 0;
G__43078.cljs$lang$applyTo = (function (arglist__43080){
var args = cljs.core.seq(arglist__43080);
return G__43078__delegate(args);
});
G__43078.cljs$core$IFn$_invoke$arity$variadic = G__43078__delegate;
return G__43078;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43081__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43082__i = 0, G__43082__a = new Array(arguments.length -  0);
while (G__43082__i < G__43082__a.length) {G__43082__a[G__43082__i] = arguments[G__43082__i + 0]; ++G__43082__i;}
  args = new cljs.core.IndexedSeq(G__43082__a,0);
} 
return G__43081__delegate.call(this,args);};
G__43081.cljs$lang$maxFixedArity = 0;
G__43081.cljs$lang$applyTo = (function (arglist__43083){
var args = cljs.core.seq(arglist__43083);
return G__43081__delegate(args);
});
G__43081.cljs$core$IFn$_invoke$arity$variadic = G__43081__delegate;
return G__43081;
})()
;

return null;
});
