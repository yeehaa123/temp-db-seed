goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43737__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43738__i = 0, G__43738__a = new Array(arguments.length -  0);
while (G__43738__i < G__43738__a.length) {G__43738__a[G__43738__i] = arguments[G__43738__i + 0]; ++G__43738__i;}
  args = new cljs.core.IndexedSeq(G__43738__a,0);
} 
return G__43737__delegate.call(this,args);};
G__43737.cljs$lang$maxFixedArity = 0;
G__43737.cljs$lang$applyTo = (function (arglist__43739){
var args = cljs.core.seq(arglist__43739);
return G__43737__delegate(args);
});
G__43737.cljs$core$IFn$_invoke$arity$variadic = G__43737__delegate;
return G__43737;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43740__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43741__i = 0, G__43741__a = new Array(arguments.length -  0);
while (G__43741__i < G__43741__a.length) {G__43741__a[G__43741__i] = arguments[G__43741__i + 0]; ++G__43741__i;}
  args = new cljs.core.IndexedSeq(G__43741__a,0);
} 
return G__43740__delegate.call(this,args);};
G__43740.cljs$lang$maxFixedArity = 0;
G__43740.cljs$lang$applyTo = (function (arglist__43742){
var args = cljs.core.seq(arglist__43742);
return G__43740__delegate(args);
});
G__43740.cljs$core$IFn$_invoke$arity$variadic = G__43740__delegate;
return G__43740;
})()
;

return null;
});
