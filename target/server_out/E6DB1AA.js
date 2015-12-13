goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34342__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34343__i = 0, G__34343__a = new Array(arguments.length -  0);
while (G__34343__i < G__34343__a.length) {G__34343__a[G__34343__i] = arguments[G__34343__i + 0]; ++G__34343__i;}
  args = new cljs.core.IndexedSeq(G__34343__a,0);
} 
return G__34342__delegate.call(this,args);};
G__34342.cljs$lang$maxFixedArity = 0;
G__34342.cljs$lang$applyTo = (function (arglist__34344){
var args = cljs.core.seq(arglist__34344);
return G__34342__delegate(args);
});
G__34342.cljs$core$IFn$_invoke$arity$variadic = G__34342__delegate;
return G__34342;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34345__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34346__i = 0, G__34346__a = new Array(arguments.length -  0);
while (G__34346__i < G__34346__a.length) {G__34346__a[G__34346__i] = arguments[G__34346__i + 0]; ++G__34346__i;}
  args = new cljs.core.IndexedSeq(G__34346__a,0);
} 
return G__34345__delegate.call(this,args);};
G__34345.cljs$lang$maxFixedArity = 0;
G__34345.cljs$lang$applyTo = (function (arglist__34347){
var args = cljs.core.seq(arglist__34347);
return G__34345__delegate(args);
});
G__34345.cljs$core$IFn$_invoke$arity$variadic = G__34345__delegate;
return G__34345;
})()
;

return null;
});
