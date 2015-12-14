goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36372__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36373__i = 0, G__36373__a = new Array(arguments.length -  0);
while (G__36373__i < G__36373__a.length) {G__36373__a[G__36373__i] = arguments[G__36373__i + 0]; ++G__36373__i;}
  args = new cljs.core.IndexedSeq(G__36373__a,0);
} 
return G__36372__delegate.call(this,args);};
G__36372.cljs$lang$maxFixedArity = 0;
G__36372.cljs$lang$applyTo = (function (arglist__36374){
var args = cljs.core.seq(arglist__36374);
return G__36372__delegate(args);
});
G__36372.cljs$core$IFn$_invoke$arity$variadic = G__36372__delegate;
return G__36372;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36375__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36375 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36376__i = 0, G__36376__a = new Array(arguments.length -  0);
while (G__36376__i < G__36376__a.length) {G__36376__a[G__36376__i] = arguments[G__36376__i + 0]; ++G__36376__i;}
  args = new cljs.core.IndexedSeq(G__36376__a,0);
} 
return G__36375__delegate.call(this,args);};
G__36375.cljs$lang$maxFixedArity = 0;
G__36375.cljs$lang$applyTo = (function (arglist__36377){
var args = cljs.core.seq(arglist__36377);
return G__36375__delegate(args);
});
G__36375.cljs$core$IFn$_invoke$arity$variadic = G__36375__delegate;
return G__36375;
})()
;

return null;
});
