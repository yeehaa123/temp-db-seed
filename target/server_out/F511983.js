goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38905__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38906__i = 0, G__38906__a = new Array(arguments.length -  0);
while (G__38906__i < G__38906__a.length) {G__38906__a[G__38906__i] = arguments[G__38906__i + 0]; ++G__38906__i;}
  args = new cljs.core.IndexedSeq(G__38906__a,0);
} 
return G__38905__delegate.call(this,args);};
G__38905.cljs$lang$maxFixedArity = 0;
G__38905.cljs$lang$applyTo = (function (arglist__38907){
var args = cljs.core.seq(arglist__38907);
return G__38905__delegate(args);
});
G__38905.cljs$core$IFn$_invoke$arity$variadic = G__38905__delegate;
return G__38905;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38908__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38909__i = 0, G__38909__a = new Array(arguments.length -  0);
while (G__38909__i < G__38909__a.length) {G__38909__a[G__38909__i] = arguments[G__38909__i + 0]; ++G__38909__i;}
  args = new cljs.core.IndexedSeq(G__38909__a,0);
} 
return G__38908__delegate.call(this,args);};
G__38908.cljs$lang$maxFixedArity = 0;
G__38908.cljs$lang$applyTo = (function (arglist__38910){
var args = cljs.core.seq(arglist__38910);
return G__38908__delegate(args);
});
G__38908.cljs$core$IFn$_invoke$arity$variadic = G__38908__delegate;
return G__38908;
})()
;

return null;
});
