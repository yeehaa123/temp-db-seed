goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40184__i = 0, G__40184__a = new Array(arguments.length -  0);
while (G__40184__i < G__40184__a.length) {G__40184__a[G__40184__i] = arguments[G__40184__i + 0]; ++G__40184__i;}
  args = new cljs.core.IndexedSeq(G__40184__a,0);
} 
return G__40183__delegate.call(this,args);};
G__40183.cljs$lang$maxFixedArity = 0;
G__40183.cljs$lang$applyTo = (function (arglist__40185){
var args = cljs.core.seq(arglist__40185);
return G__40183__delegate(args);
});
G__40183.cljs$core$IFn$_invoke$arity$variadic = G__40183__delegate;
return G__40183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40187__i = 0, G__40187__a = new Array(arguments.length -  0);
while (G__40187__i < G__40187__a.length) {G__40187__a[G__40187__i] = arguments[G__40187__i + 0]; ++G__40187__i;}
  args = new cljs.core.IndexedSeq(G__40187__a,0);
} 
return G__40186__delegate.call(this,args);};
G__40186.cljs$lang$maxFixedArity = 0;
G__40186.cljs$lang$applyTo = (function (arglist__40188){
var args = cljs.core.seq(arglist__40188);
return G__40186__delegate(args);
});
G__40186.cljs$core$IFn$_invoke$arity$variadic = G__40186__delegate;
return G__40186;
})()
;

return null;
});
