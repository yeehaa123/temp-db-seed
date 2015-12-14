goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41947__i = 0, G__41947__a = new Array(arguments.length -  0);
while (G__41947__i < G__41947__a.length) {G__41947__a[G__41947__i] = arguments[G__41947__i + 0]; ++G__41947__i;}
  args = new cljs.core.IndexedSeq(G__41947__a,0);
} 
return G__41946__delegate.call(this,args);};
G__41946.cljs$lang$maxFixedArity = 0;
G__41946.cljs$lang$applyTo = (function (arglist__41948){
var args = cljs.core.seq(arglist__41948);
return G__41946__delegate(args);
});
G__41946.cljs$core$IFn$_invoke$arity$variadic = G__41946__delegate;
return G__41946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41950__i = 0, G__41950__a = new Array(arguments.length -  0);
while (G__41950__i < G__41950__a.length) {G__41950__a[G__41950__i] = arguments[G__41950__i + 0]; ++G__41950__i;}
  args = new cljs.core.IndexedSeq(G__41950__a,0);
} 
return G__41949__delegate.call(this,args);};
G__41949.cljs$lang$maxFixedArity = 0;
G__41949.cljs$lang$applyTo = (function (arglist__41951){
var args = cljs.core.seq(arglist__41951);
return G__41949__delegate(args);
});
G__41949.cljs$core$IFn$_invoke$arity$variadic = G__41949__delegate;
return G__41949;
})()
;

return null;
});
