goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40029__i = 0, G__40029__a = new Array(arguments.length -  0);
while (G__40029__i < G__40029__a.length) {G__40029__a[G__40029__i] = arguments[G__40029__i + 0]; ++G__40029__i;}
  args = new cljs.core.IndexedSeq(G__40029__a,0);
} 
return G__40028__delegate.call(this,args);};
G__40028.cljs$lang$maxFixedArity = 0;
G__40028.cljs$lang$applyTo = (function (arglist__40030){
var args = cljs.core.seq(arglist__40030);
return G__40028__delegate(args);
});
G__40028.cljs$core$IFn$_invoke$arity$variadic = G__40028__delegate;
return G__40028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40032__i = 0, G__40032__a = new Array(arguments.length -  0);
while (G__40032__i < G__40032__a.length) {G__40032__a[G__40032__i] = arguments[G__40032__i + 0]; ++G__40032__i;}
  args = new cljs.core.IndexedSeq(G__40032__a,0);
} 
return G__40031__delegate.call(this,args);};
G__40031.cljs$lang$maxFixedArity = 0;
G__40031.cljs$lang$applyTo = (function (arglist__40033){
var args = cljs.core.seq(arglist__40033);
return G__40031__delegate(args);
});
G__40031.cljs$core$IFn$_invoke$arity$variadic = G__40031__delegate;
return G__40031;
})()
;

return null;
});
