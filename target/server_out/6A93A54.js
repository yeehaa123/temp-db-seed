goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39802__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39803__i = 0, G__39803__a = new Array(arguments.length -  0);
while (G__39803__i < G__39803__a.length) {G__39803__a[G__39803__i] = arguments[G__39803__i + 0]; ++G__39803__i;}
  args = new cljs.core.IndexedSeq(G__39803__a,0);
} 
return G__39802__delegate.call(this,args);};
G__39802.cljs$lang$maxFixedArity = 0;
G__39802.cljs$lang$applyTo = (function (arglist__39804){
var args = cljs.core.seq(arglist__39804);
return G__39802__delegate(args);
});
G__39802.cljs$core$IFn$_invoke$arity$variadic = G__39802__delegate;
return G__39802;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39805__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39806__i = 0, G__39806__a = new Array(arguments.length -  0);
while (G__39806__i < G__39806__a.length) {G__39806__a[G__39806__i] = arguments[G__39806__i + 0]; ++G__39806__i;}
  args = new cljs.core.IndexedSeq(G__39806__a,0);
} 
return G__39805__delegate.call(this,args);};
G__39805.cljs$lang$maxFixedArity = 0;
G__39805.cljs$lang$applyTo = (function (arglist__39807){
var args = cljs.core.seq(arglist__39807);
return G__39805__delegate(args);
});
G__39805.cljs$core$IFn$_invoke$arity$variadic = G__39805__delegate;
return G__39805;
})()
;

return null;
});
