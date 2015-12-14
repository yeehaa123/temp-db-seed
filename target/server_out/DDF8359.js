goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43515__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43516__i = 0, G__43516__a = new Array(arguments.length -  0);
while (G__43516__i < G__43516__a.length) {G__43516__a[G__43516__i] = arguments[G__43516__i + 0]; ++G__43516__i;}
  args = new cljs.core.IndexedSeq(G__43516__a,0);
} 
return G__43515__delegate.call(this,args);};
G__43515.cljs$lang$maxFixedArity = 0;
G__43515.cljs$lang$applyTo = (function (arglist__43517){
var args = cljs.core.seq(arglist__43517);
return G__43515__delegate(args);
});
G__43515.cljs$core$IFn$_invoke$arity$variadic = G__43515__delegate;
return G__43515;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43518__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43519__i = 0, G__43519__a = new Array(arguments.length -  0);
while (G__43519__i < G__43519__a.length) {G__43519__a[G__43519__i] = arguments[G__43519__i + 0]; ++G__43519__i;}
  args = new cljs.core.IndexedSeq(G__43519__a,0);
} 
return G__43518__delegate.call(this,args);};
G__43518.cljs$lang$maxFixedArity = 0;
G__43518.cljs$lang$applyTo = (function (arglist__43520){
var args = cljs.core.seq(arglist__43520);
return G__43518__delegate(args);
});
G__43518.cljs$core$IFn$_invoke$arity$variadic = G__43518__delegate;
return G__43518;
})()
;

return null;
});
