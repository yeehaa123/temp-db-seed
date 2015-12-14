goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42432__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42433__i = 0, G__42433__a = new Array(arguments.length -  0);
while (G__42433__i < G__42433__a.length) {G__42433__a[G__42433__i] = arguments[G__42433__i + 0]; ++G__42433__i;}
  args = new cljs.core.IndexedSeq(G__42433__a,0);
} 
return G__42432__delegate.call(this,args);};
G__42432.cljs$lang$maxFixedArity = 0;
G__42432.cljs$lang$applyTo = (function (arglist__42434){
var args = cljs.core.seq(arglist__42434);
return G__42432__delegate(args);
});
G__42432.cljs$core$IFn$_invoke$arity$variadic = G__42432__delegate;
return G__42432;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42435__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42436__i = 0, G__42436__a = new Array(arguments.length -  0);
while (G__42436__i < G__42436__a.length) {G__42436__a[G__42436__i] = arguments[G__42436__i + 0]; ++G__42436__i;}
  args = new cljs.core.IndexedSeq(G__42436__a,0);
} 
return G__42435__delegate.call(this,args);};
G__42435.cljs$lang$maxFixedArity = 0;
G__42435.cljs$lang$applyTo = (function (arglist__42437){
var args = cljs.core.seq(arglist__42437);
return G__42435__delegate(args);
});
G__42435.cljs$core$IFn$_invoke$arity$variadic = G__42435__delegate;
return G__42435;
})()
;

return null;
});
