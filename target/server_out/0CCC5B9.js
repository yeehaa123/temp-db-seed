goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39943__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39944__i = 0, G__39944__a = new Array(arguments.length -  0);
while (G__39944__i < G__39944__a.length) {G__39944__a[G__39944__i] = arguments[G__39944__i + 0]; ++G__39944__i;}
  args = new cljs.core.IndexedSeq(G__39944__a,0);
} 
return G__39943__delegate.call(this,args);};
G__39943.cljs$lang$maxFixedArity = 0;
G__39943.cljs$lang$applyTo = (function (arglist__39945){
var args = cljs.core.seq(arglist__39945);
return G__39943__delegate(args);
});
G__39943.cljs$core$IFn$_invoke$arity$variadic = G__39943__delegate;
return G__39943;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39946__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39947__i = 0, G__39947__a = new Array(arguments.length -  0);
while (G__39947__i < G__39947__a.length) {G__39947__a[G__39947__i] = arguments[G__39947__i + 0]; ++G__39947__i;}
  args = new cljs.core.IndexedSeq(G__39947__a,0);
} 
return G__39946__delegate.call(this,args);};
G__39946.cljs$lang$maxFixedArity = 0;
G__39946.cljs$lang$applyTo = (function (arglist__39948){
var args = cljs.core.seq(arglist__39948);
return G__39946__delegate(args);
});
G__39946.cljs$core$IFn$_invoke$arity$variadic = G__39946__delegate;
return G__39946;
})()
;

return null;
});
