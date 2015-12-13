goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34662__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34663__i = 0, G__34663__a = new Array(arguments.length -  0);
while (G__34663__i < G__34663__a.length) {G__34663__a[G__34663__i] = arguments[G__34663__i + 0]; ++G__34663__i;}
  args = new cljs.core.IndexedSeq(G__34663__a,0);
} 
return G__34662__delegate.call(this,args);};
G__34662.cljs$lang$maxFixedArity = 0;
G__34662.cljs$lang$applyTo = (function (arglist__34664){
var args = cljs.core.seq(arglist__34664);
return G__34662__delegate(args);
});
G__34662.cljs$core$IFn$_invoke$arity$variadic = G__34662__delegate;
return G__34662;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34665__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34666__i = 0, G__34666__a = new Array(arguments.length -  0);
while (G__34666__i < G__34666__a.length) {G__34666__a[G__34666__i] = arguments[G__34666__i + 0]; ++G__34666__i;}
  args = new cljs.core.IndexedSeq(G__34666__a,0);
} 
return G__34665__delegate.call(this,args);};
G__34665.cljs$lang$maxFixedArity = 0;
G__34665.cljs$lang$applyTo = (function (arglist__34667){
var args = cljs.core.seq(arglist__34667);
return G__34665__delegate(args);
});
G__34665.cljs$core$IFn$_invoke$arity$variadic = G__34665__delegate;
return G__34665;
})()
;

return null;
});
