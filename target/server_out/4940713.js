goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43980__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43981__i = 0, G__43981__a = new Array(arguments.length -  0);
while (G__43981__i < G__43981__a.length) {G__43981__a[G__43981__i] = arguments[G__43981__i + 0]; ++G__43981__i;}
  args = new cljs.core.IndexedSeq(G__43981__a,0);
} 
return G__43980__delegate.call(this,args);};
G__43980.cljs$lang$maxFixedArity = 0;
G__43980.cljs$lang$applyTo = (function (arglist__43982){
var args = cljs.core.seq(arglist__43982);
return G__43980__delegate(args);
});
G__43980.cljs$core$IFn$_invoke$arity$variadic = G__43980__delegate;
return G__43980;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43983__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43984__i = 0, G__43984__a = new Array(arguments.length -  0);
while (G__43984__i < G__43984__a.length) {G__43984__a[G__43984__i] = arguments[G__43984__i + 0]; ++G__43984__i;}
  args = new cljs.core.IndexedSeq(G__43984__a,0);
} 
return G__43983__delegate.call(this,args);};
G__43983.cljs$lang$maxFixedArity = 0;
G__43983.cljs$lang$applyTo = (function (arglist__43985){
var args = cljs.core.seq(arglist__43985);
return G__43983__delegate(args);
});
G__43983.cljs$core$IFn$_invoke$arity$variadic = G__43983__delegate;
return G__43983;
})()
;

return null;
});
