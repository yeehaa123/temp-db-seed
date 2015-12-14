goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39766__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39767__i = 0, G__39767__a = new Array(arguments.length -  0);
while (G__39767__i < G__39767__a.length) {G__39767__a[G__39767__i] = arguments[G__39767__i + 0]; ++G__39767__i;}
  args = new cljs.core.IndexedSeq(G__39767__a,0);
} 
return G__39766__delegate.call(this,args);};
G__39766.cljs$lang$maxFixedArity = 0;
G__39766.cljs$lang$applyTo = (function (arglist__39768){
var args = cljs.core.seq(arglist__39768);
return G__39766__delegate(args);
});
G__39766.cljs$core$IFn$_invoke$arity$variadic = G__39766__delegate;
return G__39766;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39769__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39770__i = 0, G__39770__a = new Array(arguments.length -  0);
while (G__39770__i < G__39770__a.length) {G__39770__a[G__39770__i] = arguments[G__39770__i + 0]; ++G__39770__i;}
  args = new cljs.core.IndexedSeq(G__39770__a,0);
} 
return G__39769__delegate.call(this,args);};
G__39769.cljs$lang$maxFixedArity = 0;
G__39769.cljs$lang$applyTo = (function (arglist__39771){
var args = cljs.core.seq(arglist__39771);
return G__39769__delegate(args);
});
G__39769.cljs$core$IFn$_invoke$arity$variadic = G__39769__delegate;
return G__39769;
})()
;

return null;
});
