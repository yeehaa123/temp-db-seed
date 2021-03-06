goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35381__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35382__i = 0, G__35382__a = new Array(arguments.length -  0);
while (G__35382__i < G__35382__a.length) {G__35382__a[G__35382__i] = arguments[G__35382__i + 0]; ++G__35382__i;}
  args = new cljs.core.IndexedSeq(G__35382__a,0);
} 
return G__35381__delegate.call(this,args);};
G__35381.cljs$lang$maxFixedArity = 0;
G__35381.cljs$lang$applyTo = (function (arglist__35383){
var args = cljs.core.seq(arglist__35383);
return G__35381__delegate(args);
});
G__35381.cljs$core$IFn$_invoke$arity$variadic = G__35381__delegate;
return G__35381;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35384__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35385__i = 0, G__35385__a = new Array(arguments.length -  0);
while (G__35385__i < G__35385__a.length) {G__35385__a[G__35385__i] = arguments[G__35385__i + 0]; ++G__35385__i;}
  args = new cljs.core.IndexedSeq(G__35385__a,0);
} 
return G__35384__delegate.call(this,args);};
G__35384.cljs$lang$maxFixedArity = 0;
G__35384.cljs$lang$applyTo = (function (arglist__35387){
var args = cljs.core.seq(arglist__35387);
return G__35384__delegate(args);
});
G__35384.cljs$core$IFn$_invoke$arity$variadic = G__35384__delegate;
return G__35384;
})()
;

return null;
});
