goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38840__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38841__i = 0, G__38841__a = new Array(arguments.length -  0);
while (G__38841__i < G__38841__a.length) {G__38841__a[G__38841__i] = arguments[G__38841__i + 0]; ++G__38841__i;}
  args = new cljs.core.IndexedSeq(G__38841__a,0);
} 
return G__38840__delegate.call(this,args);};
G__38840.cljs$lang$maxFixedArity = 0;
G__38840.cljs$lang$applyTo = (function (arglist__38842){
var args = cljs.core.seq(arglist__38842);
return G__38840__delegate(args);
});
G__38840.cljs$core$IFn$_invoke$arity$variadic = G__38840__delegate;
return G__38840;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38843__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38844__i = 0, G__38844__a = new Array(arguments.length -  0);
while (G__38844__i < G__38844__a.length) {G__38844__a[G__38844__i] = arguments[G__38844__i + 0]; ++G__38844__i;}
  args = new cljs.core.IndexedSeq(G__38844__a,0);
} 
return G__38843__delegate.call(this,args);};
G__38843.cljs$lang$maxFixedArity = 0;
G__38843.cljs$lang$applyTo = (function (arglist__38845){
var args = cljs.core.seq(arglist__38845);
return G__38843__delegate(args);
});
G__38843.cljs$core$IFn$_invoke$arity$variadic = G__38843__delegate;
return G__38843;
})()
;

return null;
});
