goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38060__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38061__i = 0, G__38061__a = new Array(arguments.length -  0);
while (G__38061__i < G__38061__a.length) {G__38061__a[G__38061__i] = arguments[G__38061__i + 0]; ++G__38061__i;}
  args = new cljs.core.IndexedSeq(G__38061__a,0);
} 
return G__38060__delegate.call(this,args);};
G__38060.cljs$lang$maxFixedArity = 0;
G__38060.cljs$lang$applyTo = (function (arglist__38062){
var args = cljs.core.seq(arglist__38062);
return G__38060__delegate(args);
});
G__38060.cljs$core$IFn$_invoke$arity$variadic = G__38060__delegate;
return G__38060;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38063__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38064__i = 0, G__38064__a = new Array(arguments.length -  0);
while (G__38064__i < G__38064__a.length) {G__38064__a[G__38064__i] = arguments[G__38064__i + 0]; ++G__38064__i;}
  args = new cljs.core.IndexedSeq(G__38064__a,0);
} 
return G__38063__delegate.call(this,args);};
G__38063.cljs$lang$maxFixedArity = 0;
G__38063.cljs$lang$applyTo = (function (arglist__38065){
var args = cljs.core.seq(arglist__38065);
return G__38063__delegate(args);
});
G__38063.cljs$core$IFn$_invoke$arity$variadic = G__38063__delegate;
return G__38063;
})()
;

return null;
});
