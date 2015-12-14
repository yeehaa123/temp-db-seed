goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37622__i = 0, G__37622__a = new Array(arguments.length -  0);
while (G__37622__i < G__37622__a.length) {G__37622__a[G__37622__i] = arguments[G__37622__i + 0]; ++G__37622__i;}
  args = new cljs.core.IndexedSeq(G__37622__a,0);
} 
return G__37621__delegate.call(this,args);};
G__37621.cljs$lang$maxFixedArity = 0;
G__37621.cljs$lang$applyTo = (function (arglist__37623){
var args = cljs.core.seq(arglist__37623);
return G__37621__delegate(args);
});
G__37621.cljs$core$IFn$_invoke$arity$variadic = G__37621__delegate;
return G__37621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37625__i = 0, G__37625__a = new Array(arguments.length -  0);
while (G__37625__i < G__37625__a.length) {G__37625__a[G__37625__i] = arguments[G__37625__i + 0]; ++G__37625__i;}
  args = new cljs.core.IndexedSeq(G__37625__a,0);
} 
return G__37624__delegate.call(this,args);};
G__37624.cljs$lang$maxFixedArity = 0;
G__37624.cljs$lang$applyTo = (function (arglist__37626){
var args = cljs.core.seq(arglist__37626);
return G__37624__delegate(args);
});
G__37624.cljs$core$IFn$_invoke$arity$variadic = G__37624__delegate;
return G__37624;
})()
;

return null;
});
