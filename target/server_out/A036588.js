goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39907__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39908__i = 0, G__39908__a = new Array(arguments.length -  0);
while (G__39908__i < G__39908__a.length) {G__39908__a[G__39908__i] = arguments[G__39908__i + 0]; ++G__39908__i;}
  args = new cljs.core.IndexedSeq(G__39908__a,0);
} 
return G__39907__delegate.call(this,args);};
G__39907.cljs$lang$maxFixedArity = 0;
G__39907.cljs$lang$applyTo = (function (arglist__39909){
var args = cljs.core.seq(arglist__39909);
return G__39907__delegate(args);
});
G__39907.cljs$core$IFn$_invoke$arity$variadic = G__39907__delegate;
return G__39907;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39910__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39911__i = 0, G__39911__a = new Array(arguments.length -  0);
while (G__39911__i < G__39911__a.length) {G__39911__a[G__39911__i] = arguments[G__39911__i + 0]; ++G__39911__i;}
  args = new cljs.core.IndexedSeq(G__39911__a,0);
} 
return G__39910__delegate.call(this,args);};
G__39910.cljs$lang$maxFixedArity = 0;
G__39910.cljs$lang$applyTo = (function (arglist__39912){
var args = cljs.core.seq(arglist__39912);
return G__39910__delegate(args);
});
G__39910.cljs$core$IFn$_invoke$arity$variadic = G__39910__delegate;
return G__39910;
})()
;

return null;
});
