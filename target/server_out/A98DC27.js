goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34804__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34805__i = 0, G__34805__a = new Array(arguments.length -  0);
while (G__34805__i < G__34805__a.length) {G__34805__a[G__34805__i] = arguments[G__34805__i + 0]; ++G__34805__i;}
  args = new cljs.core.IndexedSeq(G__34805__a,0);
} 
return G__34804__delegate.call(this,args);};
G__34804.cljs$lang$maxFixedArity = 0;
G__34804.cljs$lang$applyTo = (function (arglist__34806){
var args = cljs.core.seq(arglist__34806);
return G__34804__delegate(args);
});
G__34804.cljs$core$IFn$_invoke$arity$variadic = G__34804__delegate;
return G__34804;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34807__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34808__i = 0, G__34808__a = new Array(arguments.length -  0);
while (G__34808__i < G__34808__a.length) {G__34808__a[G__34808__i] = arguments[G__34808__i + 0]; ++G__34808__i;}
  args = new cljs.core.IndexedSeq(G__34808__a,0);
} 
return G__34807__delegate.call(this,args);};
G__34807.cljs$lang$maxFixedArity = 0;
G__34807.cljs$lang$applyTo = (function (arglist__34809){
var args = cljs.core.seq(arglist__34809);
return G__34807__delegate(args);
});
G__34807.cljs$core$IFn$_invoke$arity$variadic = G__34807__delegate;
return G__34807;
})()
;

return null;
});
