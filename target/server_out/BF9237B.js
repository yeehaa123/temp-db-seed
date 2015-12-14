goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42526__i = 0, G__42526__a = new Array(arguments.length -  0);
while (G__42526__i < G__42526__a.length) {G__42526__a[G__42526__i] = arguments[G__42526__i + 0]; ++G__42526__i;}
  args = new cljs.core.IndexedSeq(G__42526__a,0);
} 
return G__42525__delegate.call(this,args);};
G__42525.cljs$lang$maxFixedArity = 0;
G__42525.cljs$lang$applyTo = (function (arglist__42527){
var args = cljs.core.seq(arglist__42527);
return G__42525__delegate(args);
});
G__42525.cljs$core$IFn$_invoke$arity$variadic = G__42525__delegate;
return G__42525;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42529__i = 0, G__42529__a = new Array(arguments.length -  0);
while (G__42529__i < G__42529__a.length) {G__42529__a[G__42529__i] = arguments[G__42529__i + 0]; ++G__42529__i;}
  args = new cljs.core.IndexedSeq(G__42529__a,0);
} 
return G__42528__delegate.call(this,args);};
G__42528.cljs$lang$maxFixedArity = 0;
G__42528.cljs$lang$applyTo = (function (arglist__42530){
var args = cljs.core.seq(arglist__42530);
return G__42528__delegate(args);
});
G__42528.cljs$core$IFn$_invoke$arity$variadic = G__42528__delegate;
return G__42528;
})()
;

return null;
});
