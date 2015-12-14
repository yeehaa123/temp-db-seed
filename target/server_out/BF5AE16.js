goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41209__i = 0, G__41209__a = new Array(arguments.length -  0);
while (G__41209__i < G__41209__a.length) {G__41209__a[G__41209__i] = arguments[G__41209__i + 0]; ++G__41209__i;}
  args = new cljs.core.IndexedSeq(G__41209__a,0);
} 
return G__41208__delegate.call(this,args);};
G__41208.cljs$lang$maxFixedArity = 0;
G__41208.cljs$lang$applyTo = (function (arglist__41210){
var args = cljs.core.seq(arglist__41210);
return G__41208__delegate(args);
});
G__41208.cljs$core$IFn$_invoke$arity$variadic = G__41208__delegate;
return G__41208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41212__i = 0, G__41212__a = new Array(arguments.length -  0);
while (G__41212__i < G__41212__a.length) {G__41212__a[G__41212__i] = arguments[G__41212__i + 0]; ++G__41212__i;}
  args = new cljs.core.IndexedSeq(G__41212__a,0);
} 
return G__41211__delegate.call(this,args);};
G__41211.cljs$lang$maxFixedArity = 0;
G__41211.cljs$lang$applyTo = (function (arglist__41213){
var args = cljs.core.seq(arglist__41213);
return G__41211__delegate(args);
});
G__41211.cljs$core$IFn$_invoke$arity$variadic = G__41211__delegate;
return G__41211;
})()
;

return null;
});
