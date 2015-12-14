goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36789__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36791__i = 0, G__36791__a = new Array(arguments.length -  0);
while (G__36791__i < G__36791__a.length) {G__36791__a[G__36791__i] = arguments[G__36791__i + 0]; ++G__36791__i;}
  args = new cljs.core.IndexedSeq(G__36791__a,0);
} 
return G__36789__delegate.call(this,args);};
G__36789.cljs$lang$maxFixedArity = 0;
G__36789.cljs$lang$applyTo = (function (arglist__36792){
var args = cljs.core.seq(arglist__36792);
return G__36789__delegate(args);
});
G__36789.cljs$core$IFn$_invoke$arity$variadic = G__36789__delegate;
return G__36789;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36793__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36794__i = 0, G__36794__a = new Array(arguments.length -  0);
while (G__36794__i < G__36794__a.length) {G__36794__a[G__36794__i] = arguments[G__36794__i + 0]; ++G__36794__i;}
  args = new cljs.core.IndexedSeq(G__36794__a,0);
} 
return G__36793__delegate.call(this,args);};
G__36793.cljs$lang$maxFixedArity = 0;
G__36793.cljs$lang$applyTo = (function (arglist__36795){
var args = cljs.core.seq(arglist__36795);
return G__36793__delegate(args);
});
G__36793.cljs$core$IFn$_invoke$arity$variadic = G__36793__delegate;
return G__36793;
})()
;

return null;
});
