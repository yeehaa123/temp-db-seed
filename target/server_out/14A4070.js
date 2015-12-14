goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41854__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41855__i = 0, G__41855__a = new Array(arguments.length -  0);
while (G__41855__i < G__41855__a.length) {G__41855__a[G__41855__i] = arguments[G__41855__i + 0]; ++G__41855__i;}
  args = new cljs.core.IndexedSeq(G__41855__a,0);
} 
return G__41854__delegate.call(this,args);};
G__41854.cljs$lang$maxFixedArity = 0;
G__41854.cljs$lang$applyTo = (function (arglist__41856){
var args = cljs.core.seq(arglist__41856);
return G__41854__delegate(args);
});
G__41854.cljs$core$IFn$_invoke$arity$variadic = G__41854__delegate;
return G__41854;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41857__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41858__i = 0, G__41858__a = new Array(arguments.length -  0);
while (G__41858__i < G__41858__a.length) {G__41858__a[G__41858__i] = arguments[G__41858__i + 0]; ++G__41858__i;}
  args = new cljs.core.IndexedSeq(G__41858__a,0);
} 
return G__41857__delegate.call(this,args);};
G__41857.cljs$lang$maxFixedArity = 0;
G__41857.cljs$lang$applyTo = (function (arglist__41859){
var args = cljs.core.seq(arglist__41859);
return G__41857__delegate(args);
});
G__41857.cljs$core$IFn$_invoke$arity$variadic = G__41857__delegate;
return G__41857;
})()
;

return null;
});
