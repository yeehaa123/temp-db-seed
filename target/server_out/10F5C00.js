goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38152__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38153__i = 0, G__38153__a = new Array(arguments.length -  0);
while (G__38153__i < G__38153__a.length) {G__38153__a[G__38153__i] = arguments[G__38153__i + 0]; ++G__38153__i;}
  args = new cljs.core.IndexedSeq(G__38153__a,0);
} 
return G__38152__delegate.call(this,args);};
G__38152.cljs$lang$maxFixedArity = 0;
G__38152.cljs$lang$applyTo = (function (arglist__38154){
var args = cljs.core.seq(arglist__38154);
return G__38152__delegate(args);
});
G__38152.cljs$core$IFn$_invoke$arity$variadic = G__38152__delegate;
return G__38152;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38155__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38156__i = 0, G__38156__a = new Array(arguments.length -  0);
while (G__38156__i < G__38156__a.length) {G__38156__a[G__38156__i] = arguments[G__38156__i + 0]; ++G__38156__i;}
  args = new cljs.core.IndexedSeq(G__38156__a,0);
} 
return G__38155__delegate.call(this,args);};
G__38155.cljs$lang$maxFixedArity = 0;
G__38155.cljs$lang$applyTo = (function (arglist__38157){
var args = cljs.core.seq(arglist__38157);
return G__38155__delegate(args);
});
G__38155.cljs$core$IFn$_invoke$arity$variadic = G__38155__delegate;
return G__38155;
})()
;

return null;
});
