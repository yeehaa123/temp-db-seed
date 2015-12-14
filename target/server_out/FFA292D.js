goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43480__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43481__i = 0, G__43481__a = new Array(arguments.length -  0);
while (G__43481__i < G__43481__a.length) {G__43481__a[G__43481__i] = arguments[G__43481__i + 0]; ++G__43481__i;}
  args = new cljs.core.IndexedSeq(G__43481__a,0);
} 
return G__43480__delegate.call(this,args);};
G__43480.cljs$lang$maxFixedArity = 0;
G__43480.cljs$lang$applyTo = (function (arglist__43482){
var args = cljs.core.seq(arglist__43482);
return G__43480__delegate(args);
});
G__43480.cljs$core$IFn$_invoke$arity$variadic = G__43480__delegate;
return G__43480;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43483__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43484__i = 0, G__43484__a = new Array(arguments.length -  0);
while (G__43484__i < G__43484__a.length) {G__43484__a[G__43484__i] = arguments[G__43484__i + 0]; ++G__43484__i;}
  args = new cljs.core.IndexedSeq(G__43484__a,0);
} 
return G__43483__delegate.call(this,args);};
G__43483.cljs$lang$maxFixedArity = 0;
G__43483.cljs$lang$applyTo = (function (arglist__43485){
var args = cljs.core.seq(arglist__43485);
return G__43483__delegate(args);
});
G__43483.cljs$core$IFn$_invoke$arity$variadic = G__43483__delegate;
return G__43483;
})()
;

return null;
});
