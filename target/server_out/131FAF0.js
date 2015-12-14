goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37175__i = 0, G__37175__a = new Array(arguments.length -  0);
while (G__37175__i < G__37175__a.length) {G__37175__a[G__37175__i] = arguments[G__37175__i + 0]; ++G__37175__i;}
  args = new cljs.core.IndexedSeq(G__37175__a,0);
} 
return G__37174__delegate.call(this,args);};
G__37174.cljs$lang$maxFixedArity = 0;
G__37174.cljs$lang$applyTo = (function (arglist__37176){
var args = cljs.core.seq(arglist__37176);
return G__37174__delegate(args);
});
G__37174.cljs$core$IFn$_invoke$arity$variadic = G__37174__delegate;
return G__37174;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37178__i = 0, G__37178__a = new Array(arguments.length -  0);
while (G__37178__i < G__37178__a.length) {G__37178__a[G__37178__i] = arguments[G__37178__i + 0]; ++G__37178__i;}
  args = new cljs.core.IndexedSeq(G__37178__a,0);
} 
return G__37177__delegate.call(this,args);};
G__37177.cljs$lang$maxFixedArity = 0;
G__37177.cljs$lang$applyTo = (function (arglist__37179){
var args = cljs.core.seq(arglist__37179);
return G__37177__delegate(args);
});
G__37177.cljs$core$IFn$_invoke$arity$variadic = G__37177__delegate;
return G__37177;
})()
;

return null;
});
