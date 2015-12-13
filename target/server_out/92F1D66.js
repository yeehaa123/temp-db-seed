goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34389__i = 0, G__34389__a = new Array(arguments.length -  0);
while (G__34389__i < G__34389__a.length) {G__34389__a[G__34389__i] = arguments[G__34389__i + 0]; ++G__34389__i;}
  args = new cljs.core.IndexedSeq(G__34389__a,0);
} 
return G__34388__delegate.call(this,args);};
G__34388.cljs$lang$maxFixedArity = 0;
G__34388.cljs$lang$applyTo = (function (arglist__34390){
var args = cljs.core.seq(arglist__34390);
return G__34388__delegate(args);
});
G__34388.cljs$core$IFn$_invoke$arity$variadic = G__34388__delegate;
return G__34388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34392__i = 0, G__34392__a = new Array(arguments.length -  0);
while (G__34392__i < G__34392__a.length) {G__34392__a[G__34392__i] = arguments[G__34392__i + 0]; ++G__34392__i;}
  args = new cljs.core.IndexedSeq(G__34392__a,0);
} 
return G__34391__delegate.call(this,args);};
G__34391.cljs$lang$maxFixedArity = 0;
G__34391.cljs$lang$applyTo = (function (arglist__34393){
var args = cljs.core.seq(arglist__34393);
return G__34391__delegate(args);
});
G__34391.cljs$core$IFn$_invoke$arity$variadic = G__34391__delegate;
return G__34391;
})()
;

return null;
});
