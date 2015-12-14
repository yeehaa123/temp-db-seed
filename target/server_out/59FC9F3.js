goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40619__i = 0, G__40619__a = new Array(arguments.length -  0);
while (G__40619__i < G__40619__a.length) {G__40619__a[G__40619__i] = arguments[G__40619__i + 0]; ++G__40619__i;}
  args = new cljs.core.IndexedSeq(G__40619__a,0);
} 
return G__40618__delegate.call(this,args);};
G__40618.cljs$lang$maxFixedArity = 0;
G__40618.cljs$lang$applyTo = (function (arglist__40620){
var args = cljs.core.seq(arglist__40620);
return G__40618__delegate(args);
});
G__40618.cljs$core$IFn$_invoke$arity$variadic = G__40618__delegate;
return G__40618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40622__i = 0, G__40622__a = new Array(arguments.length -  0);
while (G__40622__i < G__40622__a.length) {G__40622__a[G__40622__i] = arguments[G__40622__i + 0]; ++G__40622__i;}
  args = new cljs.core.IndexedSeq(G__40622__a,0);
} 
return G__40621__delegate.call(this,args);};
G__40621.cljs$lang$maxFixedArity = 0;
G__40621.cljs$lang$applyTo = (function (arglist__40623){
var args = cljs.core.seq(arglist__40623);
return G__40621__delegate(args);
});
G__40621.cljs$core$IFn$_invoke$arity$variadic = G__40621__delegate;
return G__40621;
})()
;

return null;
});
