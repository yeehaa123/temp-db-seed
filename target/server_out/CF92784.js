goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36869__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36870__i = 0, G__36870__a = new Array(arguments.length -  0);
while (G__36870__i < G__36870__a.length) {G__36870__a[G__36870__i] = arguments[G__36870__i + 0]; ++G__36870__i;}
  args = new cljs.core.IndexedSeq(G__36870__a,0);
} 
return G__36869__delegate.call(this,args);};
G__36869.cljs$lang$maxFixedArity = 0;
G__36869.cljs$lang$applyTo = (function (arglist__36871){
var args = cljs.core.seq(arglist__36871);
return G__36869__delegate(args);
});
G__36869.cljs$core$IFn$_invoke$arity$variadic = G__36869__delegate;
return G__36869;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36872__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36873__i = 0, G__36873__a = new Array(arguments.length -  0);
while (G__36873__i < G__36873__a.length) {G__36873__a[G__36873__i] = arguments[G__36873__i + 0]; ++G__36873__i;}
  args = new cljs.core.IndexedSeq(G__36873__a,0);
} 
return G__36872__delegate.call(this,args);};
G__36872.cljs$lang$maxFixedArity = 0;
G__36872.cljs$lang$applyTo = (function (arglist__36874){
var args = cljs.core.seq(arglist__36874);
return G__36872__delegate(args);
});
G__36872.cljs$core$IFn$_invoke$arity$variadic = G__36872__delegate;
return G__36872;
})()
;

return null;
});
