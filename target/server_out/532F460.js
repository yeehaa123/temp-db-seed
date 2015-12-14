goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42623__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42624__i = 0, G__42624__a = new Array(arguments.length -  0);
while (G__42624__i < G__42624__a.length) {G__42624__a[G__42624__i] = arguments[G__42624__i + 0]; ++G__42624__i;}
  args = new cljs.core.IndexedSeq(G__42624__a,0);
} 
return G__42623__delegate.call(this,args);};
G__42623.cljs$lang$maxFixedArity = 0;
G__42623.cljs$lang$applyTo = (function (arglist__42625){
var args = cljs.core.seq(arglist__42625);
return G__42623__delegate(args);
});
G__42623.cljs$core$IFn$_invoke$arity$variadic = G__42623__delegate;
return G__42623;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42626__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42627__i = 0, G__42627__a = new Array(arguments.length -  0);
while (G__42627__i < G__42627__a.length) {G__42627__a[G__42627__i] = arguments[G__42627__i + 0]; ++G__42627__i;}
  args = new cljs.core.IndexedSeq(G__42627__a,0);
} 
return G__42626__delegate.call(this,args);};
G__42626.cljs$lang$maxFixedArity = 0;
G__42626.cljs$lang$applyTo = (function (arglist__42628){
var args = cljs.core.seq(arglist__42628);
return G__42626__delegate(args);
});
G__42626.cljs$core$IFn$_invoke$arity$variadic = G__42626__delegate;
return G__42626;
})()
;

return null;
});
