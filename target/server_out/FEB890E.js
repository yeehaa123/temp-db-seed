goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36281__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36282__i = 0, G__36282__a = new Array(arguments.length -  0);
while (G__36282__i < G__36282__a.length) {G__36282__a[G__36282__i] = arguments[G__36282__i + 0]; ++G__36282__i;}
  args = new cljs.core.IndexedSeq(G__36282__a,0);
} 
return G__36281__delegate.call(this,args);};
G__36281.cljs$lang$maxFixedArity = 0;
G__36281.cljs$lang$applyTo = (function (arglist__36283){
var args = cljs.core.seq(arglist__36283);
return G__36281__delegate(args);
});
G__36281.cljs$core$IFn$_invoke$arity$variadic = G__36281__delegate;
return G__36281;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36284__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36285__i = 0, G__36285__a = new Array(arguments.length -  0);
while (G__36285__i < G__36285__a.length) {G__36285__a[G__36285__i] = arguments[G__36285__i + 0]; ++G__36285__i;}
  args = new cljs.core.IndexedSeq(G__36285__a,0);
} 
return G__36284__delegate.call(this,args);};
G__36284.cljs$lang$maxFixedArity = 0;
G__36284.cljs$lang$applyTo = (function (arglist__36287){
var args = cljs.core.seq(arglist__36287);
return G__36284__delegate(args);
});
G__36284.cljs$core$IFn$_invoke$arity$variadic = G__36284__delegate;
return G__36284;
})()
;

return null;
});
