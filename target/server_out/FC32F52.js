goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37644__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37645__i = 0, G__37645__a = new Array(arguments.length -  0);
while (G__37645__i < G__37645__a.length) {G__37645__a[G__37645__i] = arguments[G__37645__i + 0]; ++G__37645__i;}
  args = new cljs.core.IndexedSeq(G__37645__a,0);
} 
return G__37644__delegate.call(this,args);};
G__37644.cljs$lang$maxFixedArity = 0;
G__37644.cljs$lang$applyTo = (function (arglist__37646){
var args = cljs.core.seq(arglist__37646);
return G__37644__delegate(args);
});
G__37644.cljs$core$IFn$_invoke$arity$variadic = G__37644__delegate;
return G__37644;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37647__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37648__i = 0, G__37648__a = new Array(arguments.length -  0);
while (G__37648__i < G__37648__a.length) {G__37648__a[G__37648__i] = arguments[G__37648__i + 0]; ++G__37648__i;}
  args = new cljs.core.IndexedSeq(G__37648__a,0);
} 
return G__37647__delegate.call(this,args);};
G__37647.cljs$lang$maxFixedArity = 0;
G__37647.cljs$lang$applyTo = (function (arglist__37649){
var args = cljs.core.seq(arglist__37649);
return G__37647__delegate(args);
});
G__37647.cljs$core$IFn$_invoke$arity$variadic = G__37647__delegate;
return G__37647;
})()
;

return null;
});
