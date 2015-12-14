goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39607__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39608__i = 0, G__39608__a = new Array(arguments.length -  0);
while (G__39608__i < G__39608__a.length) {G__39608__a[G__39608__i] = arguments[G__39608__i + 0]; ++G__39608__i;}
  args = new cljs.core.IndexedSeq(G__39608__a,0);
} 
return G__39607__delegate.call(this,args);};
G__39607.cljs$lang$maxFixedArity = 0;
G__39607.cljs$lang$applyTo = (function (arglist__39609){
var args = cljs.core.seq(arglist__39609);
return G__39607__delegate(args);
});
G__39607.cljs$core$IFn$_invoke$arity$variadic = G__39607__delegate;
return G__39607;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39610__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39611__i = 0, G__39611__a = new Array(arguments.length -  0);
while (G__39611__i < G__39611__a.length) {G__39611__a[G__39611__i] = arguments[G__39611__i + 0]; ++G__39611__i;}
  args = new cljs.core.IndexedSeq(G__39611__a,0);
} 
return G__39610__delegate.call(this,args);};
G__39610.cljs$lang$maxFixedArity = 0;
G__39610.cljs$lang$applyTo = (function (arglist__39612){
var args = cljs.core.seq(arglist__39612);
return G__39610__delegate(args);
});
G__39610.cljs$core$IFn$_invoke$arity$variadic = G__39610__delegate;
return G__39610;
})()
;

return null;
});
