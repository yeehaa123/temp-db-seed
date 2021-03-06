goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34468__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34469__i = 0, G__34469__a = new Array(arguments.length -  0);
while (G__34469__i < G__34469__a.length) {G__34469__a[G__34469__i] = arguments[G__34469__i + 0]; ++G__34469__i;}
  args = new cljs.core.IndexedSeq(G__34469__a,0);
} 
return G__34468__delegate.call(this,args);};
G__34468.cljs$lang$maxFixedArity = 0;
G__34468.cljs$lang$applyTo = (function (arglist__34470){
var args = cljs.core.seq(arglist__34470);
return G__34468__delegate(args);
});
G__34468.cljs$core$IFn$_invoke$arity$variadic = G__34468__delegate;
return G__34468;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34471__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34472__i = 0, G__34472__a = new Array(arguments.length -  0);
while (G__34472__i < G__34472__a.length) {G__34472__a[G__34472__i] = arguments[G__34472__i + 0]; ++G__34472__i;}
  args = new cljs.core.IndexedSeq(G__34472__a,0);
} 
return G__34471__delegate.call(this,args);};
G__34471.cljs$lang$maxFixedArity = 0;
G__34471.cljs$lang$applyTo = (function (arglist__34473){
var args = cljs.core.seq(arglist__34473);
return G__34471__delegate(args);
});
G__34471.cljs$core$IFn$_invoke$arity$variadic = G__34471__delegate;
return G__34471;
})()
;

return null;
});
