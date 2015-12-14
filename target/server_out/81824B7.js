goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37898__i = 0, G__37898__a = new Array(arguments.length -  0);
while (G__37898__i < G__37898__a.length) {G__37898__a[G__37898__i] = arguments[G__37898__i + 0]; ++G__37898__i;}
  args = new cljs.core.IndexedSeq(G__37898__a,0);
} 
return G__37897__delegate.call(this,args);};
G__37897.cljs$lang$maxFixedArity = 0;
G__37897.cljs$lang$applyTo = (function (arglist__37899){
var args = cljs.core.seq(arglist__37899);
return G__37897__delegate(args);
});
G__37897.cljs$core$IFn$_invoke$arity$variadic = G__37897__delegate;
return G__37897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37901__i = 0, G__37901__a = new Array(arguments.length -  0);
while (G__37901__i < G__37901__a.length) {G__37901__a[G__37901__i] = arguments[G__37901__i + 0]; ++G__37901__i;}
  args = new cljs.core.IndexedSeq(G__37901__a,0);
} 
return G__37900__delegate.call(this,args);};
G__37900.cljs$lang$maxFixedArity = 0;
G__37900.cljs$lang$applyTo = (function (arglist__37902){
var args = cljs.core.seq(arglist__37902);
return G__37900__delegate(args);
});
G__37900.cljs$core$IFn$_invoke$arity$variadic = G__37900__delegate;
return G__37900;
})()
;

return null;
});
