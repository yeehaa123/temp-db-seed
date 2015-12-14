goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36546__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36547__i = 0, G__36547__a = new Array(arguments.length -  0);
while (G__36547__i < G__36547__a.length) {G__36547__a[G__36547__i] = arguments[G__36547__i + 0]; ++G__36547__i;}
  args = new cljs.core.IndexedSeq(G__36547__a,0);
} 
return G__36546__delegate.call(this,args);};
G__36546.cljs$lang$maxFixedArity = 0;
G__36546.cljs$lang$applyTo = (function (arglist__36548){
var args = cljs.core.seq(arglist__36548);
return G__36546__delegate(args);
});
G__36546.cljs$core$IFn$_invoke$arity$variadic = G__36546__delegate;
return G__36546;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36549__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36550__i = 0, G__36550__a = new Array(arguments.length -  0);
while (G__36550__i < G__36550__a.length) {G__36550__a[G__36550__i] = arguments[G__36550__i + 0]; ++G__36550__i;}
  args = new cljs.core.IndexedSeq(G__36550__a,0);
} 
return G__36549__delegate.call(this,args);};
G__36549.cljs$lang$maxFixedArity = 0;
G__36549.cljs$lang$applyTo = (function (arglist__36551){
var args = cljs.core.seq(arglist__36551);
return G__36549__delegate(args);
});
G__36549.cljs$core$IFn$_invoke$arity$variadic = G__36549__delegate;
return G__36549;
})()
;

return null;
});
