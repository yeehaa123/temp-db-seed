goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42262__i = 0, G__42262__a = new Array(arguments.length -  0);
while (G__42262__i < G__42262__a.length) {G__42262__a[G__42262__i] = arguments[G__42262__i + 0]; ++G__42262__i;}
  args = new cljs.core.IndexedSeq(G__42262__a,0);
} 
return G__42261__delegate.call(this,args);};
G__42261.cljs$lang$maxFixedArity = 0;
G__42261.cljs$lang$applyTo = (function (arglist__42263){
var args = cljs.core.seq(arglist__42263);
return G__42261__delegate(args);
});
G__42261.cljs$core$IFn$_invoke$arity$variadic = G__42261__delegate;
return G__42261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42265__i = 0, G__42265__a = new Array(arguments.length -  0);
while (G__42265__i < G__42265__a.length) {G__42265__a[G__42265__i] = arguments[G__42265__i + 0]; ++G__42265__i;}
  args = new cljs.core.IndexedSeq(G__42265__a,0);
} 
return G__42264__delegate.call(this,args);};
G__42264.cljs$lang$maxFixedArity = 0;
G__42264.cljs$lang$applyTo = (function (arglist__42266){
var args = cljs.core.seq(arglist__42266);
return G__42264__delegate(args);
});
G__42264.cljs$core$IFn$_invoke$arity$variadic = G__42264__delegate;
return G__42264;
})()
;

return null;
});
