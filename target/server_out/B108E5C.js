goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33677__i = 0, G__33677__a = new Array(arguments.length -  0);
while (G__33677__i < G__33677__a.length) {G__33677__a[G__33677__i] = arguments[G__33677__i + 0]; ++G__33677__i;}
  args = new cljs.core.IndexedSeq(G__33677__a,0);
} 
return G__33676__delegate.call(this,args);};
G__33676.cljs$lang$maxFixedArity = 0;
G__33676.cljs$lang$applyTo = (function (arglist__33678){
var args = cljs.core.seq(arglist__33678);
return G__33676__delegate(args);
});
G__33676.cljs$core$IFn$_invoke$arity$variadic = G__33676__delegate;
return G__33676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33680__i = 0, G__33680__a = new Array(arguments.length -  0);
while (G__33680__i < G__33680__a.length) {G__33680__a[G__33680__i] = arguments[G__33680__i + 0]; ++G__33680__i;}
  args = new cljs.core.IndexedSeq(G__33680__a,0);
} 
return G__33679__delegate.call(this,args);};
G__33679.cljs$lang$maxFixedArity = 0;
G__33679.cljs$lang$applyTo = (function (arglist__33681){
var args = cljs.core.seq(arglist__33681);
return G__33679__delegate(args);
});
G__33679.cljs$core$IFn$_invoke$arity$variadic = G__33679__delegate;
return G__33679;
})()
;

return null;
});
