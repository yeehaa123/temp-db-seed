goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41611__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41612__i = 0, G__41612__a = new Array(arguments.length -  0);
while (G__41612__i < G__41612__a.length) {G__41612__a[G__41612__i] = arguments[G__41612__i + 0]; ++G__41612__i;}
  args = new cljs.core.IndexedSeq(G__41612__a,0);
} 
return G__41611__delegate.call(this,args);};
G__41611.cljs$lang$maxFixedArity = 0;
G__41611.cljs$lang$applyTo = (function (arglist__41613){
var args = cljs.core.seq(arglist__41613);
return G__41611__delegate(args);
});
G__41611.cljs$core$IFn$_invoke$arity$variadic = G__41611__delegate;
return G__41611;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41614__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41615__i = 0, G__41615__a = new Array(arguments.length -  0);
while (G__41615__i < G__41615__a.length) {G__41615__a[G__41615__i] = arguments[G__41615__i + 0]; ++G__41615__i;}
  args = new cljs.core.IndexedSeq(G__41615__a,0);
} 
return G__41614__delegate.call(this,args);};
G__41614.cljs$lang$maxFixedArity = 0;
G__41614.cljs$lang$applyTo = (function (arglist__41616){
var args = cljs.core.seq(arglist__41616);
return G__41614__delegate(args);
});
G__41614.cljs$core$IFn$_invoke$arity$variadic = G__41614__delegate;
return G__41614;
})()
;

return null;
});
