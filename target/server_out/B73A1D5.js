goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33713__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33714__i = 0, G__33714__a = new Array(arguments.length -  0);
while (G__33714__i < G__33714__a.length) {G__33714__a[G__33714__i] = arguments[G__33714__i + 0]; ++G__33714__i;}
  args = new cljs.core.IndexedSeq(G__33714__a,0);
} 
return G__33713__delegate.call(this,args);};
G__33713.cljs$lang$maxFixedArity = 0;
G__33713.cljs$lang$applyTo = (function (arglist__33715){
var args = cljs.core.seq(arglist__33715);
return G__33713__delegate(args);
});
G__33713.cljs$core$IFn$_invoke$arity$variadic = G__33713__delegate;
return G__33713;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33716__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33717__i = 0, G__33717__a = new Array(arguments.length -  0);
while (G__33717__i < G__33717__a.length) {G__33717__a[G__33717__i] = arguments[G__33717__i + 0]; ++G__33717__i;}
  args = new cljs.core.IndexedSeq(G__33717__a,0);
} 
return G__33716__delegate.call(this,args);};
G__33716.cljs$lang$maxFixedArity = 0;
G__33716.cljs$lang$applyTo = (function (arglist__33718){
var args = cljs.core.seq(arglist__33718);
return G__33716__delegate(args);
});
G__33716.cljs$core$IFn$_invoke$arity$variadic = G__33716__delegate;
return G__33716;
})()
;

return null;
});
