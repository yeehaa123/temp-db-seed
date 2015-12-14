goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43209__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43210__i = 0, G__43210__a = new Array(arguments.length -  0);
while (G__43210__i < G__43210__a.length) {G__43210__a[G__43210__i] = arguments[G__43210__i + 0]; ++G__43210__i;}
  args = new cljs.core.IndexedSeq(G__43210__a,0);
} 
return G__43209__delegate.call(this,args);};
G__43209.cljs$lang$maxFixedArity = 0;
G__43209.cljs$lang$applyTo = (function (arglist__43211){
var args = cljs.core.seq(arglist__43211);
return G__43209__delegate(args);
});
G__43209.cljs$core$IFn$_invoke$arity$variadic = G__43209__delegate;
return G__43209;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43212__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43213__i = 0, G__43213__a = new Array(arguments.length -  0);
while (G__43213__i < G__43213__a.length) {G__43213__a[G__43213__i] = arguments[G__43213__i + 0]; ++G__43213__i;}
  args = new cljs.core.IndexedSeq(G__43213__a,0);
} 
return G__43212__delegate.call(this,args);};
G__43212.cljs$lang$maxFixedArity = 0;
G__43212.cljs$lang$applyTo = (function (arglist__43214){
var args = cljs.core.seq(arglist__43214);
return G__43212__delegate(args);
});
G__43212.cljs$core$IFn$_invoke$arity$variadic = G__43212__delegate;
return G__43212;
})()
;

return null;
});
