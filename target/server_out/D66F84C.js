goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35898__i = 0, G__35898__a = new Array(arguments.length -  0);
while (G__35898__i < G__35898__a.length) {G__35898__a[G__35898__i] = arguments[G__35898__i + 0]; ++G__35898__i;}
  args = new cljs.core.IndexedSeq(G__35898__a,0);
} 
return G__35897__delegate.call(this,args);};
G__35897.cljs$lang$maxFixedArity = 0;
G__35897.cljs$lang$applyTo = (function (arglist__35899){
var args = cljs.core.seq(arglist__35899);
return G__35897__delegate(args);
});
G__35897.cljs$core$IFn$_invoke$arity$variadic = G__35897__delegate;
return G__35897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35901__i = 0, G__35901__a = new Array(arguments.length -  0);
while (G__35901__i < G__35901__a.length) {G__35901__a[G__35901__i] = arguments[G__35901__i + 0]; ++G__35901__i;}
  args = new cljs.core.IndexedSeq(G__35901__a,0);
} 
return G__35900__delegate.call(this,args);};
G__35900.cljs$lang$maxFixedArity = 0;
G__35900.cljs$lang$applyTo = (function (arglist__35902){
var args = cljs.core.seq(arglist__35902);
return G__35900__delegate(args);
});
G__35900.cljs$core$IFn$_invoke$arity$variadic = G__35900__delegate;
return G__35900;
})()
;

return null;
});
