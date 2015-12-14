goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41656__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41657__i = 0, G__41657__a = new Array(arguments.length -  0);
while (G__41657__i < G__41657__a.length) {G__41657__a[G__41657__i] = arguments[G__41657__i + 0]; ++G__41657__i;}
  args = new cljs.core.IndexedSeq(G__41657__a,0);
} 
return G__41656__delegate.call(this,args);};
G__41656.cljs$lang$maxFixedArity = 0;
G__41656.cljs$lang$applyTo = (function (arglist__41658){
var args = cljs.core.seq(arglist__41658);
return G__41656__delegate(args);
});
G__41656.cljs$core$IFn$_invoke$arity$variadic = G__41656__delegate;
return G__41656;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41659__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41660__i = 0, G__41660__a = new Array(arguments.length -  0);
while (G__41660__i < G__41660__a.length) {G__41660__a[G__41660__i] = arguments[G__41660__i + 0]; ++G__41660__i;}
  args = new cljs.core.IndexedSeq(G__41660__a,0);
} 
return G__41659__delegate.call(this,args);};
G__41659.cljs$lang$maxFixedArity = 0;
G__41659.cljs$lang$applyTo = (function (arglist__41661){
var args = cljs.core.seq(arglist__41661);
return G__41659__delegate(args);
});
G__41659.cljs$core$IFn$_invoke$arity$variadic = G__41659__delegate;
return G__41659;
})()
;

return null;
});
