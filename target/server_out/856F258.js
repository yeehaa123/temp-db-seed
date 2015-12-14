goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38132__i = 0, G__38132__a = new Array(arguments.length -  0);
while (G__38132__i < G__38132__a.length) {G__38132__a[G__38132__i] = arguments[G__38132__i + 0]; ++G__38132__i;}
  args = new cljs.core.IndexedSeq(G__38132__a,0);
} 
return G__38131__delegate.call(this,args);};
G__38131.cljs$lang$maxFixedArity = 0;
G__38131.cljs$lang$applyTo = (function (arglist__38133){
var args = cljs.core.seq(arglist__38133);
return G__38131__delegate(args);
});
G__38131.cljs$core$IFn$_invoke$arity$variadic = G__38131__delegate;
return G__38131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38135__i = 0, G__38135__a = new Array(arguments.length -  0);
while (G__38135__i < G__38135__a.length) {G__38135__a[G__38135__i] = arguments[G__38135__i + 0]; ++G__38135__i;}
  args = new cljs.core.IndexedSeq(G__38135__a,0);
} 
return G__38134__delegate.call(this,args);};
G__38134.cljs$lang$maxFixedArity = 0;
G__38134.cljs$lang$applyTo = (function (arglist__38136){
var args = cljs.core.seq(arglist__38136);
return G__38134__delegate(args);
});
G__38134.cljs$core$IFn$_invoke$arity$variadic = G__38134__delegate;
return G__38134;
})()
;

return null;
});
