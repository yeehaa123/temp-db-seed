goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33699__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33700__i = 0, G__33700__a = new Array(arguments.length -  0);
while (G__33700__i < G__33700__a.length) {G__33700__a[G__33700__i] = arguments[G__33700__i + 0]; ++G__33700__i;}
  args = new cljs.core.IndexedSeq(G__33700__a,0);
} 
return G__33699__delegate.call(this,args);};
G__33699.cljs$lang$maxFixedArity = 0;
G__33699.cljs$lang$applyTo = (function (arglist__33701){
var args = cljs.core.seq(arglist__33701);
return G__33699__delegate(args);
});
G__33699.cljs$core$IFn$_invoke$arity$variadic = G__33699__delegate;
return G__33699;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33702__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33703__i = 0, G__33703__a = new Array(arguments.length -  0);
while (G__33703__i < G__33703__a.length) {G__33703__a[G__33703__i] = arguments[G__33703__i + 0]; ++G__33703__i;}
  args = new cljs.core.IndexedSeq(G__33703__a,0);
} 
return G__33702__delegate.call(this,args);};
G__33702.cljs$lang$maxFixedArity = 0;
G__33702.cljs$lang$applyTo = (function (arglist__33704){
var args = cljs.core.seq(arglist__33704);
return G__33702__delegate(args);
});
G__33702.cljs$core$IFn$_invoke$arity$variadic = G__33702__delegate;
return G__33702;
})()
;

return null;
});
