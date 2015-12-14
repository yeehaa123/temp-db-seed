goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33504__i = 0, G__33504__a = new Array(arguments.length -  0);
while (G__33504__i < G__33504__a.length) {G__33504__a[G__33504__i] = arguments[G__33504__i + 0]; ++G__33504__i;}
  args = new cljs.core.IndexedSeq(G__33504__a,0);
} 
return G__33503__delegate.call(this,args);};
G__33503.cljs$lang$maxFixedArity = 0;
G__33503.cljs$lang$applyTo = (function (arglist__33505){
var args = cljs.core.seq(arglist__33505);
return G__33503__delegate(args);
});
G__33503.cljs$core$IFn$_invoke$arity$variadic = G__33503__delegate;
return G__33503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33507__i = 0, G__33507__a = new Array(arguments.length -  0);
while (G__33507__i < G__33507__a.length) {G__33507__a[G__33507__i] = arguments[G__33507__i + 0]; ++G__33507__i;}
  args = new cljs.core.IndexedSeq(G__33507__a,0);
} 
return G__33506__delegate.call(this,args);};
G__33506.cljs$lang$maxFixedArity = 0;
G__33506.cljs$lang$applyTo = (function (arglist__33508){
var args = cljs.core.seq(arglist__33508);
return G__33506__delegate(args);
});
G__33506.cljs$core$IFn$_invoke$arity$variadic = G__33506__delegate;
return G__33506;
})()
;

return null;
});
