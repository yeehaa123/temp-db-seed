goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34827__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34828__i = 0, G__34828__a = new Array(arguments.length -  0);
while (G__34828__i < G__34828__a.length) {G__34828__a[G__34828__i] = arguments[G__34828__i + 0]; ++G__34828__i;}
  args = new cljs.core.IndexedSeq(G__34828__a,0);
} 
return G__34827__delegate.call(this,args);};
G__34827.cljs$lang$maxFixedArity = 0;
G__34827.cljs$lang$applyTo = (function (arglist__34829){
var args = cljs.core.seq(arglist__34829);
return G__34827__delegate(args);
});
G__34827.cljs$core$IFn$_invoke$arity$variadic = G__34827__delegate;
return G__34827;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34830__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34831__i = 0, G__34831__a = new Array(arguments.length -  0);
while (G__34831__i < G__34831__a.length) {G__34831__a[G__34831__i] = arguments[G__34831__i + 0]; ++G__34831__i;}
  args = new cljs.core.IndexedSeq(G__34831__a,0);
} 
return G__34830__delegate.call(this,args);};
G__34830.cljs$lang$maxFixedArity = 0;
G__34830.cljs$lang$applyTo = (function (arglist__34832){
var args = cljs.core.seq(arglist__34832);
return G__34830__delegate(args);
});
G__34830.cljs$core$IFn$_invoke$arity$variadic = G__34830__delegate;
return G__34830;
})()
;

return null;
});
