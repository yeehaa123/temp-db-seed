goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34873__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34874__i = 0, G__34874__a = new Array(arguments.length -  0);
while (G__34874__i < G__34874__a.length) {G__34874__a[G__34874__i] = arguments[G__34874__i + 0]; ++G__34874__i;}
  args = new cljs.core.IndexedSeq(G__34874__a,0);
} 
return G__34873__delegate.call(this,args);};
G__34873.cljs$lang$maxFixedArity = 0;
G__34873.cljs$lang$applyTo = (function (arglist__34875){
var args = cljs.core.seq(arglist__34875);
return G__34873__delegate(args);
});
G__34873.cljs$core$IFn$_invoke$arity$variadic = G__34873__delegate;
return G__34873;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34876__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34877__i = 0, G__34877__a = new Array(arguments.length -  0);
while (G__34877__i < G__34877__a.length) {G__34877__a[G__34877__i] = arguments[G__34877__i + 0]; ++G__34877__i;}
  args = new cljs.core.IndexedSeq(G__34877__a,0);
} 
return G__34876__delegate.call(this,args);};
G__34876.cljs$lang$maxFixedArity = 0;
G__34876.cljs$lang$applyTo = (function (arglist__34878){
var args = cljs.core.seq(arglist__34878);
return G__34876__delegate(args);
});
G__34876.cljs$core$IFn$_invoke$arity$variadic = G__34876__delegate;
return G__34876;
})()
;

return null;
});
