goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43044__i = 0, G__43044__a = new Array(arguments.length -  0);
while (G__43044__i < G__43044__a.length) {G__43044__a[G__43044__i] = arguments[G__43044__i + 0]; ++G__43044__i;}
  args = new cljs.core.IndexedSeq(G__43044__a,0);
} 
return G__43043__delegate.call(this,args);};
G__43043.cljs$lang$maxFixedArity = 0;
G__43043.cljs$lang$applyTo = (function (arglist__43045){
var args = cljs.core.seq(arglist__43045);
return G__43043__delegate(args);
});
G__43043.cljs$core$IFn$_invoke$arity$variadic = G__43043__delegate;
return G__43043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43047__i = 0, G__43047__a = new Array(arguments.length -  0);
while (G__43047__i < G__43047__a.length) {G__43047__a[G__43047__i] = arguments[G__43047__i + 0]; ++G__43047__i;}
  args = new cljs.core.IndexedSeq(G__43047__a,0);
} 
return G__43046__delegate.call(this,args);};
G__43046.cljs$lang$maxFixedArity = 0;
G__43046.cljs$lang$applyTo = (function (arglist__43048){
var args = cljs.core.seq(arglist__43048);
return G__43046__delegate(args);
});
G__43046.cljs$core$IFn$_invoke$arity$variadic = G__43046__delegate;
return G__43046;
})()
;

return null;
});
