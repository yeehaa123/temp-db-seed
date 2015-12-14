goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38485__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38486__i = 0, G__38486__a = new Array(arguments.length -  0);
while (G__38486__i < G__38486__a.length) {G__38486__a[G__38486__i] = arguments[G__38486__i + 0]; ++G__38486__i;}
  args = new cljs.core.IndexedSeq(G__38486__a,0);
} 
return G__38485__delegate.call(this,args);};
G__38485.cljs$lang$maxFixedArity = 0;
G__38485.cljs$lang$applyTo = (function (arglist__38487){
var args = cljs.core.seq(arglist__38487);
return G__38485__delegate(args);
});
G__38485.cljs$core$IFn$_invoke$arity$variadic = G__38485__delegate;
return G__38485;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38488__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38489__i = 0, G__38489__a = new Array(arguments.length -  0);
while (G__38489__i < G__38489__a.length) {G__38489__a[G__38489__i] = arguments[G__38489__i + 0]; ++G__38489__i;}
  args = new cljs.core.IndexedSeq(G__38489__a,0);
} 
return G__38488__delegate.call(this,args);};
G__38488.cljs$lang$maxFixedArity = 0;
G__38488.cljs$lang$applyTo = (function (arglist__38490){
var args = cljs.core.seq(arglist__38490);
return G__38488__delegate(args);
});
G__38488.cljs$core$IFn$_invoke$arity$variadic = G__38488__delegate;
return G__38488;
})()
;

return null;
});
