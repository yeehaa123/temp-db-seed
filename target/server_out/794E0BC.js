goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37058__i = 0, G__37058__a = new Array(arguments.length -  0);
while (G__37058__i < G__37058__a.length) {G__37058__a[G__37058__i] = arguments[G__37058__i + 0]; ++G__37058__i;}
  args = new cljs.core.IndexedSeq(G__37058__a,0);
} 
return G__37057__delegate.call(this,args);};
G__37057.cljs$lang$maxFixedArity = 0;
G__37057.cljs$lang$applyTo = (function (arglist__37059){
var args = cljs.core.seq(arglist__37059);
return G__37057__delegate(args);
});
G__37057.cljs$core$IFn$_invoke$arity$variadic = G__37057__delegate;
return G__37057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37061__i = 0, G__37061__a = new Array(arguments.length -  0);
while (G__37061__i < G__37061__a.length) {G__37061__a[G__37061__i] = arguments[G__37061__i + 0]; ++G__37061__i;}
  args = new cljs.core.IndexedSeq(G__37061__a,0);
} 
return G__37060__delegate.call(this,args);};
G__37060.cljs$lang$maxFixedArity = 0;
G__37060.cljs$lang$applyTo = (function (arglist__37062){
var args = cljs.core.seq(arglist__37062);
return G__37060__delegate(args);
});
G__37060.cljs$core$IFn$_invoke$arity$variadic = G__37060__delegate;
return G__37060;
})()
;

return null;
});
