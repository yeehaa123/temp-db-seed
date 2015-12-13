goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35302__i = 0, G__35302__a = new Array(arguments.length -  0);
while (G__35302__i < G__35302__a.length) {G__35302__a[G__35302__i] = arguments[G__35302__i + 0]; ++G__35302__i;}
  args = new cljs.core.IndexedSeq(G__35302__a,0);
} 
return G__35301__delegate.call(this,args);};
G__35301.cljs$lang$maxFixedArity = 0;
G__35301.cljs$lang$applyTo = (function (arglist__35303){
var args = cljs.core.seq(arglist__35303);
return G__35301__delegate(args);
});
G__35301.cljs$core$IFn$_invoke$arity$variadic = G__35301__delegate;
return G__35301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35305__i = 0, G__35305__a = new Array(arguments.length -  0);
while (G__35305__i < G__35305__a.length) {G__35305__a[G__35305__i] = arguments[G__35305__i + 0]; ++G__35305__i;}
  args = new cljs.core.IndexedSeq(G__35305__a,0);
} 
return G__35304__delegate.call(this,args);};
G__35304.cljs$lang$maxFixedArity = 0;
G__35304.cljs$lang$applyTo = (function (arglist__35306){
var args = cljs.core.seq(arglist__35306);
return G__35304__delegate(args);
});
G__35304.cljs$core$IFn$_invoke$arity$variadic = G__35304__delegate;
return G__35304;
})()
;

return null;
});
