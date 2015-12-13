goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34275__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34276__i = 0, G__34276__a = new Array(arguments.length -  0);
while (G__34276__i < G__34276__a.length) {G__34276__a[G__34276__i] = arguments[G__34276__i + 0]; ++G__34276__i;}
  args = new cljs.core.IndexedSeq(G__34276__a,0);
} 
return G__34275__delegate.call(this,args);};
G__34275.cljs$lang$maxFixedArity = 0;
G__34275.cljs$lang$applyTo = (function (arglist__34277){
var args = cljs.core.seq(arglist__34277);
return G__34275__delegate(args);
});
G__34275.cljs$core$IFn$_invoke$arity$variadic = G__34275__delegate;
return G__34275;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34278__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34279__i = 0, G__34279__a = new Array(arguments.length -  0);
while (G__34279__i < G__34279__a.length) {G__34279__a[G__34279__i] = arguments[G__34279__i + 0]; ++G__34279__i;}
  args = new cljs.core.IndexedSeq(G__34279__a,0);
} 
return G__34278__delegate.call(this,args);};
G__34278.cljs$lang$maxFixedArity = 0;
G__34278.cljs$lang$applyTo = (function (arglist__34280){
var args = cljs.core.seq(arglist__34280);
return G__34278__delegate(args);
});
G__34278.cljs$core$IFn$_invoke$arity$variadic = G__34278__delegate;
return G__34278;
})()
;

return null;
});
