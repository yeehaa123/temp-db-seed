goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33999__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34000__i = 0, G__34000__a = new Array(arguments.length -  0);
while (G__34000__i < G__34000__a.length) {G__34000__a[G__34000__i] = arguments[G__34000__i + 0]; ++G__34000__i;}
  args = new cljs.core.IndexedSeq(G__34000__a,0);
} 
return G__33999__delegate.call(this,args);};
G__33999.cljs$lang$maxFixedArity = 0;
G__33999.cljs$lang$applyTo = (function (arglist__34001){
var args = cljs.core.seq(arglist__34001);
return G__33999__delegate(args);
});
G__33999.cljs$core$IFn$_invoke$arity$variadic = G__33999__delegate;
return G__33999;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34002__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34003__i = 0, G__34003__a = new Array(arguments.length -  0);
while (G__34003__i < G__34003__a.length) {G__34003__a[G__34003__i] = arguments[G__34003__i + 0]; ++G__34003__i;}
  args = new cljs.core.IndexedSeq(G__34003__a,0);
} 
return G__34002__delegate.call(this,args);};
G__34002.cljs$lang$maxFixedArity = 0;
G__34002.cljs$lang$applyTo = (function (arglist__34004){
var args = cljs.core.seq(arglist__34004);
return G__34002__delegate(args);
});
G__34002.cljs$core$IFn$_invoke$arity$variadic = G__34002__delegate;
return G__34002;
})()
;

return null;
});
