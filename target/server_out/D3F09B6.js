goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37004__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37005__i = 0, G__37005__a = new Array(arguments.length -  0);
while (G__37005__i < G__37005__a.length) {G__37005__a[G__37005__i] = arguments[G__37005__i + 0]; ++G__37005__i;}
  args = new cljs.core.IndexedSeq(G__37005__a,0);
} 
return G__37004__delegate.call(this,args);};
G__37004.cljs$lang$maxFixedArity = 0;
G__37004.cljs$lang$applyTo = (function (arglist__37007){
var args = cljs.core.seq(arglist__37007);
return G__37004__delegate(args);
});
G__37004.cljs$core$IFn$_invoke$arity$variadic = G__37004__delegate;
return G__37004;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37008__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37009__i = 0, G__37009__a = new Array(arguments.length -  0);
while (G__37009__i < G__37009__a.length) {G__37009__a[G__37009__i] = arguments[G__37009__i + 0]; ++G__37009__i;}
  args = new cljs.core.IndexedSeq(G__37009__a,0);
} 
return G__37008__delegate.call(this,args);};
G__37008.cljs$lang$maxFixedArity = 0;
G__37008.cljs$lang$applyTo = (function (arglist__37010){
var args = cljs.core.seq(arglist__37010);
return G__37008__delegate(args);
});
G__37008.cljs$core$IFn$_invoke$arity$variadic = G__37008__delegate;
return G__37008;
})()
;

return null;
});
