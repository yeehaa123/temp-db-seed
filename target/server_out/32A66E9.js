goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35009__i = 0, G__35009__a = new Array(arguments.length -  0);
while (G__35009__i < G__35009__a.length) {G__35009__a[G__35009__i] = arguments[G__35009__i + 0]; ++G__35009__i;}
  args = new cljs.core.IndexedSeq(G__35009__a,0);
} 
return G__35008__delegate.call(this,args);};
G__35008.cljs$lang$maxFixedArity = 0;
G__35008.cljs$lang$applyTo = (function (arglist__35010){
var args = cljs.core.seq(arglist__35010);
return G__35008__delegate(args);
});
G__35008.cljs$core$IFn$_invoke$arity$variadic = G__35008__delegate;
return G__35008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35012__i = 0, G__35012__a = new Array(arguments.length -  0);
while (G__35012__i < G__35012__a.length) {G__35012__a[G__35012__i] = arguments[G__35012__i + 0]; ++G__35012__i;}
  args = new cljs.core.IndexedSeq(G__35012__a,0);
} 
return G__35011__delegate.call(this,args);};
G__35011.cljs$lang$maxFixedArity = 0;
G__35011.cljs$lang$applyTo = (function (arglist__35013){
var args = cljs.core.seq(arglist__35013);
return G__35011__delegate(args);
});
G__35011.cljs$core$IFn$_invoke$arity$variadic = G__35011__delegate;
return G__35011;
})()
;

return null;
});
