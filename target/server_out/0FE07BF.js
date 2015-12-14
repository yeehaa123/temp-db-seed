goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42710__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42711__i = 0, G__42711__a = new Array(arguments.length -  0);
while (G__42711__i < G__42711__a.length) {G__42711__a[G__42711__i] = arguments[G__42711__i + 0]; ++G__42711__i;}
  args = new cljs.core.IndexedSeq(G__42711__a,0);
} 
return G__42710__delegate.call(this,args);};
G__42710.cljs$lang$maxFixedArity = 0;
G__42710.cljs$lang$applyTo = (function (arglist__42712){
var args = cljs.core.seq(arglist__42712);
return G__42710__delegate(args);
});
G__42710.cljs$core$IFn$_invoke$arity$variadic = G__42710__delegate;
return G__42710;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42713__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42714__i = 0, G__42714__a = new Array(arguments.length -  0);
while (G__42714__i < G__42714__a.length) {G__42714__a[G__42714__i] = arguments[G__42714__i + 0]; ++G__42714__i;}
  args = new cljs.core.IndexedSeq(G__42714__a,0);
} 
return G__42713__delegate.call(this,args);};
G__42713.cljs$lang$maxFixedArity = 0;
G__42713.cljs$lang$applyTo = (function (arglist__42715){
var args = cljs.core.seq(arglist__42715);
return G__42713__delegate(args);
});
G__42713.cljs$core$IFn$_invoke$arity$variadic = G__42713__delegate;
return G__42713;
})()
;

return null;
});
