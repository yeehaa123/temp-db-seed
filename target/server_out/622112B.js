goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35089__i = 0, G__35089__a = new Array(arguments.length -  0);
while (G__35089__i < G__35089__a.length) {G__35089__a[G__35089__i] = arguments[G__35089__i + 0]; ++G__35089__i;}
  args = new cljs.core.IndexedSeq(G__35089__a,0);
} 
return G__35088__delegate.call(this,args);};
G__35088.cljs$lang$maxFixedArity = 0;
G__35088.cljs$lang$applyTo = (function (arglist__35090){
var args = cljs.core.seq(arglist__35090);
return G__35088__delegate(args);
});
G__35088.cljs$core$IFn$_invoke$arity$variadic = G__35088__delegate;
return G__35088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35093__i = 0, G__35093__a = new Array(arguments.length -  0);
while (G__35093__i < G__35093__a.length) {G__35093__a[G__35093__i] = arguments[G__35093__i + 0]; ++G__35093__i;}
  args = new cljs.core.IndexedSeq(G__35093__a,0);
} 
return G__35091__delegate.call(this,args);};
G__35091.cljs$lang$maxFixedArity = 0;
G__35091.cljs$lang$applyTo = (function (arglist__35094){
var args = cljs.core.seq(arglist__35094);
return G__35091__delegate(args);
});
G__35091.cljs$core$IFn$_invoke$arity$variadic = G__35091__delegate;
return G__35091;
})()
;

return null;
});
