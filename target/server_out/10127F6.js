goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35680__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35681__i = 0, G__35681__a = new Array(arguments.length -  0);
while (G__35681__i < G__35681__a.length) {G__35681__a[G__35681__i] = arguments[G__35681__i + 0]; ++G__35681__i;}
  args = new cljs.core.IndexedSeq(G__35681__a,0);
} 
return G__35680__delegate.call(this,args);};
G__35680.cljs$lang$maxFixedArity = 0;
G__35680.cljs$lang$applyTo = (function (arglist__35682){
var args = cljs.core.seq(arglist__35682);
return G__35680__delegate(args);
});
G__35680.cljs$core$IFn$_invoke$arity$variadic = G__35680__delegate;
return G__35680;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35683__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35684__i = 0, G__35684__a = new Array(arguments.length -  0);
while (G__35684__i < G__35684__a.length) {G__35684__a[G__35684__i] = arguments[G__35684__i + 0]; ++G__35684__i;}
  args = new cljs.core.IndexedSeq(G__35684__a,0);
} 
return G__35683__delegate.call(this,args);};
G__35683.cljs$lang$maxFixedArity = 0;
G__35683.cljs$lang$applyTo = (function (arglist__35685){
var args = cljs.core.seq(arglist__35685);
return G__35683__delegate(args);
});
G__35683.cljs$core$IFn$_invoke$arity$variadic = G__35683__delegate;
return G__35683;
})()
;

return null;
});
