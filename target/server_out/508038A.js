goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38861__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38862__i = 0, G__38862__a = new Array(arguments.length -  0);
while (G__38862__i < G__38862__a.length) {G__38862__a[G__38862__i] = arguments[G__38862__i + 0]; ++G__38862__i;}
  args = new cljs.core.IndexedSeq(G__38862__a,0);
} 
return G__38861__delegate.call(this,args);};
G__38861.cljs$lang$maxFixedArity = 0;
G__38861.cljs$lang$applyTo = (function (arglist__38863){
var args = cljs.core.seq(arglist__38863);
return G__38861__delegate(args);
});
G__38861.cljs$core$IFn$_invoke$arity$variadic = G__38861__delegate;
return G__38861;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38864__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38865__i = 0, G__38865__a = new Array(arguments.length -  0);
while (G__38865__i < G__38865__a.length) {G__38865__a[G__38865__i] = arguments[G__38865__i + 0]; ++G__38865__i;}
  args = new cljs.core.IndexedSeq(G__38865__a,0);
} 
return G__38864__delegate.call(this,args);};
G__38864.cljs$lang$maxFixedArity = 0;
G__38864.cljs$lang$applyTo = (function (arglist__38866){
var args = cljs.core.seq(arglist__38866);
return G__38864__delegate(args);
});
G__38864.cljs$core$IFn$_invoke$arity$variadic = G__38864__delegate;
return G__38864;
})()
;

return null;
});
