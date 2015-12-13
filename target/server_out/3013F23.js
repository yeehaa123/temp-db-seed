goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34710__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34711__i = 0, G__34711__a = new Array(arguments.length -  0);
while (G__34711__i < G__34711__a.length) {G__34711__a[G__34711__i] = arguments[G__34711__i + 0]; ++G__34711__i;}
  args = new cljs.core.IndexedSeq(G__34711__a,0);
} 
return G__34710__delegate.call(this,args);};
G__34710.cljs$lang$maxFixedArity = 0;
G__34710.cljs$lang$applyTo = (function (arglist__34712){
var args = cljs.core.seq(arglist__34712);
return G__34710__delegate(args);
});
G__34710.cljs$core$IFn$_invoke$arity$variadic = G__34710__delegate;
return G__34710;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34713__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34714__i = 0, G__34714__a = new Array(arguments.length -  0);
while (G__34714__i < G__34714__a.length) {G__34714__a[G__34714__i] = arguments[G__34714__i + 0]; ++G__34714__i;}
  args = new cljs.core.IndexedSeq(G__34714__a,0);
} 
return G__34713__delegate.call(this,args);};
G__34713.cljs$lang$maxFixedArity = 0;
G__34713.cljs$lang$applyTo = (function (arglist__34715){
var args = cljs.core.seq(arglist__34715);
return G__34713__delegate(args);
});
G__34713.cljs$core$IFn$_invoke$arity$variadic = G__34713__delegate;
return G__34713;
})()
;

return null;
});
