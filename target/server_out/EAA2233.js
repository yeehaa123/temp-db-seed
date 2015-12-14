goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38380__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38381__i = 0, G__38381__a = new Array(arguments.length -  0);
while (G__38381__i < G__38381__a.length) {G__38381__a[G__38381__i] = arguments[G__38381__i + 0]; ++G__38381__i;}
  args = new cljs.core.IndexedSeq(G__38381__a,0);
} 
return G__38380__delegate.call(this,args);};
G__38380.cljs$lang$maxFixedArity = 0;
G__38380.cljs$lang$applyTo = (function (arglist__38382){
var args = cljs.core.seq(arglist__38382);
return G__38380__delegate(args);
});
G__38380.cljs$core$IFn$_invoke$arity$variadic = G__38380__delegate;
return G__38380;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38383__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38384__i = 0, G__38384__a = new Array(arguments.length -  0);
while (G__38384__i < G__38384__a.length) {G__38384__a[G__38384__i] = arguments[G__38384__i + 0]; ++G__38384__i;}
  args = new cljs.core.IndexedSeq(G__38384__a,0);
} 
return G__38383__delegate.call(this,args);};
G__38383.cljs$lang$maxFixedArity = 0;
G__38383.cljs$lang$applyTo = (function (arglist__38385){
var args = cljs.core.seq(arglist__38385);
return G__38383__delegate(args);
});
G__38383.cljs$core$IFn$_invoke$arity$variadic = G__38383__delegate;
return G__38383;
})()
;

return null;
});
