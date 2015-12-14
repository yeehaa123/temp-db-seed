goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39018__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39019__i = 0, G__39019__a = new Array(arguments.length -  0);
while (G__39019__i < G__39019__a.length) {G__39019__a[G__39019__i] = arguments[G__39019__i + 0]; ++G__39019__i;}
  args = new cljs.core.IndexedSeq(G__39019__a,0);
} 
return G__39018__delegate.call(this,args);};
G__39018.cljs$lang$maxFixedArity = 0;
G__39018.cljs$lang$applyTo = (function (arglist__39020){
var args = cljs.core.seq(arglist__39020);
return G__39018__delegate(args);
});
G__39018.cljs$core$IFn$_invoke$arity$variadic = G__39018__delegate;
return G__39018;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39021__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39022__i = 0, G__39022__a = new Array(arguments.length -  0);
while (G__39022__i < G__39022__a.length) {G__39022__a[G__39022__i] = arguments[G__39022__i + 0]; ++G__39022__i;}
  args = new cljs.core.IndexedSeq(G__39022__a,0);
} 
return G__39021__delegate.call(this,args);};
G__39021.cljs$lang$maxFixedArity = 0;
G__39021.cljs$lang$applyTo = (function (arglist__39023){
var args = cljs.core.seq(arglist__39023);
return G__39021__delegate(args);
});
G__39021.cljs$core$IFn$_invoke$arity$variadic = G__39021__delegate;
return G__39021;
})()
;

return null;
});
