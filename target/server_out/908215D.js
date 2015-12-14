goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42012__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42013__i = 0, G__42013__a = new Array(arguments.length -  0);
while (G__42013__i < G__42013__a.length) {G__42013__a[G__42013__i] = arguments[G__42013__i + 0]; ++G__42013__i;}
  args = new cljs.core.IndexedSeq(G__42013__a,0);
} 
return G__42012__delegate.call(this,args);};
G__42012.cljs$lang$maxFixedArity = 0;
G__42012.cljs$lang$applyTo = (function (arglist__42014){
var args = cljs.core.seq(arglist__42014);
return G__42012__delegate(args);
});
G__42012.cljs$core$IFn$_invoke$arity$variadic = G__42012__delegate;
return G__42012;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42015__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42016__i = 0, G__42016__a = new Array(arguments.length -  0);
while (G__42016__i < G__42016__a.length) {G__42016__a[G__42016__i] = arguments[G__42016__i + 0]; ++G__42016__i;}
  args = new cljs.core.IndexedSeq(G__42016__a,0);
} 
return G__42015__delegate.call(this,args);};
G__42015.cljs$lang$maxFixedArity = 0;
G__42015.cljs$lang$applyTo = (function (arglist__42017){
var args = cljs.core.seq(arglist__42017);
return G__42015__delegate(args);
});
G__42015.cljs$core$IFn$_invoke$arity$variadic = G__42015__delegate;
return G__42015;
})()
;

return null;
});
