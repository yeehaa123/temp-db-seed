goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43676__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43677__i = 0, G__43677__a = new Array(arguments.length -  0);
while (G__43677__i < G__43677__a.length) {G__43677__a[G__43677__i] = arguments[G__43677__i + 0]; ++G__43677__i;}
  args = new cljs.core.IndexedSeq(G__43677__a,0);
} 
return G__43676__delegate.call(this,args);};
G__43676.cljs$lang$maxFixedArity = 0;
G__43676.cljs$lang$applyTo = (function (arglist__43678){
var args = cljs.core.seq(arglist__43678);
return G__43676__delegate(args);
});
G__43676.cljs$core$IFn$_invoke$arity$variadic = G__43676__delegate;
return G__43676;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43679__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43680__i = 0, G__43680__a = new Array(arguments.length -  0);
while (G__43680__i < G__43680__a.length) {G__43680__a[G__43680__i] = arguments[G__43680__i + 0]; ++G__43680__i;}
  args = new cljs.core.IndexedSeq(G__43680__a,0);
} 
return G__43679__delegate.call(this,args);};
G__43679.cljs$lang$maxFixedArity = 0;
G__43679.cljs$lang$applyTo = (function (arglist__43681){
var args = cljs.core.seq(arglist__43681);
return G__43679__delegate(args);
});
G__43679.cljs$core$IFn$_invoke$arity$variadic = G__43679__delegate;
return G__43679;
})()
;

return null;
});
