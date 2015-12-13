goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34185__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34186__i = 0, G__34186__a = new Array(arguments.length -  0);
while (G__34186__i < G__34186__a.length) {G__34186__a[G__34186__i] = arguments[G__34186__i + 0]; ++G__34186__i;}
  args = new cljs.core.IndexedSeq(G__34186__a,0);
} 
return G__34185__delegate.call(this,args);};
G__34185.cljs$lang$maxFixedArity = 0;
G__34185.cljs$lang$applyTo = (function (arglist__34187){
var args = cljs.core.seq(arglist__34187);
return G__34185__delegate(args);
});
G__34185.cljs$core$IFn$_invoke$arity$variadic = G__34185__delegate;
return G__34185;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34188__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34189__i = 0, G__34189__a = new Array(arguments.length -  0);
while (G__34189__i < G__34189__a.length) {G__34189__a[G__34189__i] = arguments[G__34189__i + 0]; ++G__34189__i;}
  args = new cljs.core.IndexedSeq(G__34189__a,0);
} 
return G__34188__delegate.call(this,args);};
G__34188.cljs$lang$maxFixedArity = 0;
G__34188.cljs$lang$applyTo = (function (arglist__34190){
var args = cljs.core.seq(arglist__34190);
return G__34188__delegate(args);
});
G__34188.cljs$core$IFn$_invoke$arity$variadic = G__34188__delegate;
return G__34188;
})()
;

return null;
});
