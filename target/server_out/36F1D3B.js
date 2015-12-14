goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38693__i = 0, G__38693__a = new Array(arguments.length -  0);
while (G__38693__i < G__38693__a.length) {G__38693__a[G__38693__i] = arguments[G__38693__i + 0]; ++G__38693__i;}
  args = new cljs.core.IndexedSeq(G__38693__a,0);
} 
return G__38692__delegate.call(this,args);};
G__38692.cljs$lang$maxFixedArity = 0;
G__38692.cljs$lang$applyTo = (function (arglist__38694){
var args = cljs.core.seq(arglist__38694);
return G__38692__delegate(args);
});
G__38692.cljs$core$IFn$_invoke$arity$variadic = G__38692__delegate;
return G__38692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38696__i = 0, G__38696__a = new Array(arguments.length -  0);
while (G__38696__i < G__38696__a.length) {G__38696__a[G__38696__i] = arguments[G__38696__i + 0]; ++G__38696__i;}
  args = new cljs.core.IndexedSeq(G__38696__a,0);
} 
return G__38695__delegate.call(this,args);};
G__38695.cljs$lang$maxFixedArity = 0;
G__38695.cljs$lang$applyTo = (function (arglist__38697){
var args = cljs.core.seq(arglist__38697);
return G__38695__delegate(args);
});
G__38695.cljs$core$IFn$_invoke$arity$variadic = G__38695__delegate;
return G__38695;
})()
;

return null;
});
