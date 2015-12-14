goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43186__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43187__i = 0, G__43187__a = new Array(arguments.length -  0);
while (G__43187__i < G__43187__a.length) {G__43187__a[G__43187__i] = arguments[G__43187__i + 0]; ++G__43187__i;}
  args = new cljs.core.IndexedSeq(G__43187__a,0);
} 
return G__43186__delegate.call(this,args);};
G__43186.cljs$lang$maxFixedArity = 0;
G__43186.cljs$lang$applyTo = (function (arglist__43188){
var args = cljs.core.seq(arglist__43188);
return G__43186__delegate(args);
});
G__43186.cljs$core$IFn$_invoke$arity$variadic = G__43186__delegate;
return G__43186;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43189__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43190__i = 0, G__43190__a = new Array(arguments.length -  0);
while (G__43190__i < G__43190__a.length) {G__43190__a[G__43190__i] = arguments[G__43190__i + 0]; ++G__43190__i;}
  args = new cljs.core.IndexedSeq(G__43190__a,0);
} 
return G__43189__delegate.call(this,args);};
G__43189.cljs$lang$maxFixedArity = 0;
G__43189.cljs$lang$applyTo = (function (arglist__43191){
var args = cljs.core.seq(arglist__43191);
return G__43189__delegate(args);
});
G__43189.cljs$core$IFn$_invoke$arity$variadic = G__43189__delegate;
return G__43189;
})()
;

return null;
});
