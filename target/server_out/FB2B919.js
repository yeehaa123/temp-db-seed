goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41734__i = 0, G__41734__a = new Array(arguments.length -  0);
while (G__41734__i < G__41734__a.length) {G__41734__a[G__41734__i] = arguments[G__41734__i + 0]; ++G__41734__i;}
  args = new cljs.core.IndexedSeq(G__41734__a,0);
} 
return G__41733__delegate.call(this,args);};
G__41733.cljs$lang$maxFixedArity = 0;
G__41733.cljs$lang$applyTo = (function (arglist__41735){
var args = cljs.core.seq(arglist__41735);
return G__41733__delegate(args);
});
G__41733.cljs$core$IFn$_invoke$arity$variadic = G__41733__delegate;
return G__41733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41737__i = 0, G__41737__a = new Array(arguments.length -  0);
while (G__41737__i < G__41737__a.length) {G__41737__a[G__41737__i] = arguments[G__41737__i + 0]; ++G__41737__i;}
  args = new cljs.core.IndexedSeq(G__41737__a,0);
} 
return G__41736__delegate.call(this,args);};
G__41736.cljs$lang$maxFixedArity = 0;
G__41736.cljs$lang$applyTo = (function (arglist__41738){
var args = cljs.core.seq(arglist__41738);
return G__41736__delegate(args);
});
G__41736.cljs$core$IFn$_invoke$arity$variadic = G__41736__delegate;
return G__41736;
})()
;

return null;
});
