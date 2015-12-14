goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37244__i = 0, G__37244__a = new Array(arguments.length -  0);
while (G__37244__i < G__37244__a.length) {G__37244__a[G__37244__i] = arguments[G__37244__i + 0]; ++G__37244__i;}
  args = new cljs.core.IndexedSeq(G__37244__a,0);
} 
return G__37243__delegate.call(this,args);};
G__37243.cljs$lang$maxFixedArity = 0;
G__37243.cljs$lang$applyTo = (function (arglist__37245){
var args = cljs.core.seq(arglist__37245);
return G__37243__delegate(args);
});
G__37243.cljs$core$IFn$_invoke$arity$variadic = G__37243__delegate;
return G__37243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37247__i = 0, G__37247__a = new Array(arguments.length -  0);
while (G__37247__i < G__37247__a.length) {G__37247__a[G__37247__i] = arguments[G__37247__i + 0]; ++G__37247__i;}
  args = new cljs.core.IndexedSeq(G__37247__a,0);
} 
return G__37246__delegate.call(this,args);};
G__37246.cljs$lang$maxFixedArity = 0;
G__37246.cljs$lang$applyTo = (function (arglist__37248){
var args = cljs.core.seq(arglist__37248);
return G__37246__delegate(args);
});
G__37246.cljs$core$IFn$_invoke$arity$variadic = G__37246__delegate;
return G__37246;
})()
;

return null;
});
