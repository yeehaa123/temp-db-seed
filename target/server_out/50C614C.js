goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38267__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38268__i = 0, G__38268__a = new Array(arguments.length -  0);
while (G__38268__i < G__38268__a.length) {G__38268__a[G__38268__i] = arguments[G__38268__i + 0]; ++G__38268__i;}
  args = new cljs.core.IndexedSeq(G__38268__a,0);
} 
return G__38267__delegate.call(this,args);};
G__38267.cljs$lang$maxFixedArity = 0;
G__38267.cljs$lang$applyTo = (function (arglist__38269){
var args = cljs.core.seq(arglist__38269);
return G__38267__delegate(args);
});
G__38267.cljs$core$IFn$_invoke$arity$variadic = G__38267__delegate;
return G__38267;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38270__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38271__i = 0, G__38271__a = new Array(arguments.length -  0);
while (G__38271__i < G__38271__a.length) {G__38271__a[G__38271__i] = arguments[G__38271__i + 0]; ++G__38271__i;}
  args = new cljs.core.IndexedSeq(G__38271__a,0);
} 
return G__38270__delegate.call(this,args);};
G__38270.cljs$lang$maxFixedArity = 0;
G__38270.cljs$lang$applyTo = (function (arglist__38272){
var args = cljs.core.seq(arglist__38272);
return G__38270__delegate(args);
});
G__38270.cljs$core$IFn$_invoke$arity$variadic = G__38270__delegate;
return G__38270;
})()
;

return null;
});
