goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36346__i = 0, G__36346__a = new Array(arguments.length -  0);
while (G__36346__i < G__36346__a.length) {G__36346__a[G__36346__i] = arguments[G__36346__i + 0]; ++G__36346__i;}
  args = new cljs.core.IndexedSeq(G__36346__a,0);
} 
return G__36345__delegate.call(this,args);};
G__36345.cljs$lang$maxFixedArity = 0;
G__36345.cljs$lang$applyTo = (function (arglist__36347){
var args = cljs.core.seq(arglist__36347);
return G__36345__delegate(args);
});
G__36345.cljs$core$IFn$_invoke$arity$variadic = G__36345__delegate;
return G__36345;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36349__i = 0, G__36349__a = new Array(arguments.length -  0);
while (G__36349__i < G__36349__a.length) {G__36349__a[G__36349__i] = arguments[G__36349__i + 0]; ++G__36349__i;}
  args = new cljs.core.IndexedSeq(G__36349__a,0);
} 
return G__36348__delegate.call(this,args);};
G__36348.cljs$lang$maxFixedArity = 0;
G__36348.cljs$lang$applyTo = (function (arglist__36350){
var args = cljs.core.seq(arglist__36350);
return G__36348__delegate(args);
});
G__36348.cljs$core$IFn$_invoke$arity$variadic = G__36348__delegate;
return G__36348;
})()
;

return null;
});
