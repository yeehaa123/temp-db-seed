goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40573__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40574__i = 0, G__40574__a = new Array(arguments.length -  0);
while (G__40574__i < G__40574__a.length) {G__40574__a[G__40574__i] = arguments[G__40574__i + 0]; ++G__40574__i;}
  args = new cljs.core.IndexedSeq(G__40574__a,0);
} 
return G__40573__delegate.call(this,args);};
G__40573.cljs$lang$maxFixedArity = 0;
G__40573.cljs$lang$applyTo = (function (arglist__40575){
var args = cljs.core.seq(arglist__40575);
return G__40573__delegate(args);
});
G__40573.cljs$core$IFn$_invoke$arity$variadic = G__40573__delegate;
return G__40573;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40576__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40577__i = 0, G__40577__a = new Array(arguments.length -  0);
while (G__40577__i < G__40577__a.length) {G__40577__a[G__40577__i] = arguments[G__40577__i + 0]; ++G__40577__i;}
  args = new cljs.core.IndexedSeq(G__40577__a,0);
} 
return G__40576__delegate.call(this,args);};
G__40576.cljs$lang$maxFixedArity = 0;
G__40576.cljs$lang$applyTo = (function (arglist__40578){
var args = cljs.core.seq(arglist__40578);
return G__40576__delegate(args);
});
G__40576.cljs$core$IFn$_invoke$arity$variadic = G__40576__delegate;
return G__40576;
})()
;

return null;
});
