goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40717__i = 0, G__40717__a = new Array(arguments.length -  0);
while (G__40717__i < G__40717__a.length) {G__40717__a[G__40717__i] = arguments[G__40717__i + 0]; ++G__40717__i;}
  args = new cljs.core.IndexedSeq(G__40717__a,0);
} 
return G__40716__delegate.call(this,args);};
G__40716.cljs$lang$maxFixedArity = 0;
G__40716.cljs$lang$applyTo = (function (arglist__40718){
var args = cljs.core.seq(arglist__40718);
return G__40716__delegate(args);
});
G__40716.cljs$core$IFn$_invoke$arity$variadic = G__40716__delegate;
return G__40716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40720__i = 0, G__40720__a = new Array(arguments.length -  0);
while (G__40720__i < G__40720__a.length) {G__40720__a[G__40720__i] = arguments[G__40720__i + 0]; ++G__40720__i;}
  args = new cljs.core.IndexedSeq(G__40720__a,0);
} 
return G__40719__delegate.call(this,args);};
G__40719.cljs$lang$maxFixedArity = 0;
G__40719.cljs$lang$applyTo = (function (arglist__40721){
var args = cljs.core.seq(arglist__40721);
return G__40719__delegate(args);
});
G__40719.cljs$core$IFn$_invoke$arity$variadic = G__40719__delegate;
return G__40719;
})()
;

return null;
});
