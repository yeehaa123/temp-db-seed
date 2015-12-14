goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40363__i = 0, G__40363__a = new Array(arguments.length -  0);
while (G__40363__i < G__40363__a.length) {G__40363__a[G__40363__i] = arguments[G__40363__i + 0]; ++G__40363__i;}
  args = new cljs.core.IndexedSeq(G__40363__a,0);
} 
return G__40362__delegate.call(this,args);};
G__40362.cljs$lang$maxFixedArity = 0;
G__40362.cljs$lang$applyTo = (function (arglist__40364){
var args = cljs.core.seq(arglist__40364);
return G__40362__delegate(args);
});
G__40362.cljs$core$IFn$_invoke$arity$variadic = G__40362__delegate;
return G__40362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40366__i = 0, G__40366__a = new Array(arguments.length -  0);
while (G__40366__i < G__40366__a.length) {G__40366__a[G__40366__i] = arguments[G__40366__i + 0]; ++G__40366__i;}
  args = new cljs.core.IndexedSeq(G__40366__a,0);
} 
return G__40365__delegate.call(this,args);};
G__40365.cljs$lang$maxFixedArity = 0;
G__40365.cljs$lang$applyTo = (function (arglist__40367){
var args = cljs.core.seq(arglist__40367);
return G__40365__delegate(args);
});
G__40365.cljs$core$IFn$_invoke$arity$variadic = G__40365__delegate;
return G__40365;
})()
;

return null;
});
