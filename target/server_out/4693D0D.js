goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33653__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33654__i = 0, G__33654__a = new Array(arguments.length -  0);
while (G__33654__i < G__33654__a.length) {G__33654__a[G__33654__i] = arguments[G__33654__i + 0]; ++G__33654__i;}
  args = new cljs.core.IndexedSeq(G__33654__a,0);
} 
return G__33653__delegate.call(this,args);};
G__33653.cljs$lang$maxFixedArity = 0;
G__33653.cljs$lang$applyTo = (function (arglist__33655){
var args = cljs.core.seq(arglist__33655);
return G__33653__delegate(args);
});
G__33653.cljs$core$IFn$_invoke$arity$variadic = G__33653__delegate;
return G__33653;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33656__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33657__i = 0, G__33657__a = new Array(arguments.length -  0);
while (G__33657__i < G__33657__a.length) {G__33657__a[G__33657__i] = arguments[G__33657__i + 0]; ++G__33657__i;}
  args = new cljs.core.IndexedSeq(G__33657__a,0);
} 
return G__33656__delegate.call(this,args);};
G__33656.cljs$lang$maxFixedArity = 0;
G__33656.cljs$lang$applyTo = (function (arglist__33658){
var args = cljs.core.seq(arglist__33658);
return G__33656__delegate(args);
});
G__33656.cljs$core$IFn$_invoke$arity$variadic = G__33656__delegate;
return G__33656;
})()
;

return null;
});
