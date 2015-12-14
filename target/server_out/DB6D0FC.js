goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36703__i = 0, G__36703__a = new Array(arguments.length -  0);
while (G__36703__i < G__36703__a.length) {G__36703__a[G__36703__i] = arguments[G__36703__i + 0]; ++G__36703__i;}
  args = new cljs.core.IndexedSeq(G__36703__a,0);
} 
return G__36702__delegate.call(this,args);};
G__36702.cljs$lang$maxFixedArity = 0;
G__36702.cljs$lang$applyTo = (function (arglist__36704){
var args = cljs.core.seq(arglist__36704);
return G__36702__delegate(args);
});
G__36702.cljs$core$IFn$_invoke$arity$variadic = G__36702__delegate;
return G__36702;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36705__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36706__i = 0, G__36706__a = new Array(arguments.length -  0);
while (G__36706__i < G__36706__a.length) {G__36706__a[G__36706__i] = arguments[G__36706__i + 0]; ++G__36706__i;}
  args = new cljs.core.IndexedSeq(G__36706__a,0);
} 
return G__36705__delegate.call(this,args);};
G__36705.cljs$lang$maxFixedArity = 0;
G__36705.cljs$lang$applyTo = (function (arglist__36707){
var args = cljs.core.seq(arglist__36707);
return G__36705__delegate(args);
});
G__36705.cljs$core$IFn$_invoke$arity$variadic = G__36705__delegate;
return G__36705;
})()
;

return null;
});
