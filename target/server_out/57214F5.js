goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43930__i = 0, G__43930__a = new Array(arguments.length -  0);
while (G__43930__i < G__43930__a.length) {G__43930__a[G__43930__i] = arguments[G__43930__i + 0]; ++G__43930__i;}
  args = new cljs.core.IndexedSeq(G__43930__a,0);
} 
return G__43929__delegate.call(this,args);};
G__43929.cljs$lang$maxFixedArity = 0;
G__43929.cljs$lang$applyTo = (function (arglist__43931){
var args = cljs.core.seq(arglist__43931);
return G__43929__delegate(args);
});
G__43929.cljs$core$IFn$_invoke$arity$variadic = G__43929__delegate;
return G__43929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43933__i = 0, G__43933__a = new Array(arguments.length -  0);
while (G__43933__i < G__43933__a.length) {G__43933__a[G__43933__i] = arguments[G__43933__i + 0]; ++G__43933__i;}
  args = new cljs.core.IndexedSeq(G__43933__a,0);
} 
return G__43932__delegate.call(this,args);};
G__43932.cljs$lang$maxFixedArity = 0;
G__43932.cljs$lang$applyTo = (function (arglist__43934){
var args = cljs.core.seq(arglist__43934);
return G__43932__delegate(args);
});
G__43932.cljs$core$IFn$_invoke$arity$variadic = G__43932__delegate;
return G__43932;
})()
;

return null;
});
