goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38587__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38588__i = 0, G__38588__a = new Array(arguments.length -  0);
while (G__38588__i < G__38588__a.length) {G__38588__a[G__38588__i] = arguments[G__38588__i + 0]; ++G__38588__i;}
  args = new cljs.core.IndexedSeq(G__38588__a,0);
} 
return G__38587__delegate.call(this,args);};
G__38587.cljs$lang$maxFixedArity = 0;
G__38587.cljs$lang$applyTo = (function (arglist__38589){
var args = cljs.core.seq(arglist__38589);
return G__38587__delegate(args);
});
G__38587.cljs$core$IFn$_invoke$arity$variadic = G__38587__delegate;
return G__38587;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38590__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38591__i = 0, G__38591__a = new Array(arguments.length -  0);
while (G__38591__i < G__38591__a.length) {G__38591__a[G__38591__i] = arguments[G__38591__i + 0]; ++G__38591__i;}
  args = new cljs.core.IndexedSeq(G__38591__a,0);
} 
return G__38590__delegate.call(this,args);};
G__38590.cljs$lang$maxFixedArity = 0;
G__38590.cljs$lang$applyTo = (function (arglist__38592){
var args = cljs.core.seq(arglist__38592);
return G__38590__delegate(args);
});
G__38590.cljs$core$IFn$_invoke$arity$variadic = G__38590__delegate;
return G__38590;
})()
;

return null;
});
