goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35218__i = 0, G__35218__a = new Array(arguments.length -  0);
while (G__35218__i < G__35218__a.length) {G__35218__a[G__35218__i] = arguments[G__35218__i + 0]; ++G__35218__i;}
  args = new cljs.core.IndexedSeq(G__35218__a,0);
} 
return G__35217__delegate.call(this,args);};
G__35217.cljs$lang$maxFixedArity = 0;
G__35217.cljs$lang$applyTo = (function (arglist__35219){
var args = cljs.core.seq(arglist__35219);
return G__35217__delegate(args);
});
G__35217.cljs$core$IFn$_invoke$arity$variadic = G__35217__delegate;
return G__35217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35221__i = 0, G__35221__a = new Array(arguments.length -  0);
while (G__35221__i < G__35221__a.length) {G__35221__a[G__35221__i] = arguments[G__35221__i + 0]; ++G__35221__i;}
  args = new cljs.core.IndexedSeq(G__35221__a,0);
} 
return G__35220__delegate.call(this,args);};
G__35220.cljs$lang$maxFixedArity = 0;
G__35220.cljs$lang$applyTo = (function (arglist__35222){
var args = cljs.core.seq(arglist__35222);
return G__35220__delegate(args);
});
G__35220.cljs$core$IFn$_invoke$arity$variadic = G__35220__delegate;
return G__35220;
})()
;

return null;
});
