goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43419__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43420__i = 0, G__43420__a = new Array(arguments.length -  0);
while (G__43420__i < G__43420__a.length) {G__43420__a[G__43420__i] = arguments[G__43420__i + 0]; ++G__43420__i;}
  args = new cljs.core.IndexedSeq(G__43420__a,0);
} 
return G__43419__delegate.call(this,args);};
G__43419.cljs$lang$maxFixedArity = 0;
G__43419.cljs$lang$applyTo = (function (arglist__43421){
var args = cljs.core.seq(arglist__43421);
return G__43419__delegate(args);
});
G__43419.cljs$core$IFn$_invoke$arity$variadic = G__43419__delegate;
return G__43419;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43422__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43423__i = 0, G__43423__a = new Array(arguments.length -  0);
while (G__43423__i < G__43423__a.length) {G__43423__a[G__43423__i] = arguments[G__43423__i + 0]; ++G__43423__i;}
  args = new cljs.core.IndexedSeq(G__43423__a,0);
} 
return G__43422__delegate.call(this,args);};
G__43422.cljs$lang$maxFixedArity = 0;
G__43422.cljs$lang$applyTo = (function (arglist__43424){
var args = cljs.core.seq(arglist__43424);
return G__43422__delegate(args);
});
G__43422.cljs$core$IFn$_invoke$arity$variadic = G__43422__delegate;
return G__43422;
})()
;

return null;
});
