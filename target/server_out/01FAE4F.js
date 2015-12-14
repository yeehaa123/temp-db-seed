goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38244__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38245__i = 0, G__38245__a = new Array(arguments.length -  0);
while (G__38245__i < G__38245__a.length) {G__38245__a[G__38245__i] = arguments[G__38245__i + 0]; ++G__38245__i;}
  args = new cljs.core.IndexedSeq(G__38245__a,0);
} 
return G__38244__delegate.call(this,args);};
G__38244.cljs$lang$maxFixedArity = 0;
G__38244.cljs$lang$applyTo = (function (arglist__38246){
var args = cljs.core.seq(arglist__38246);
return G__38244__delegate(args);
});
G__38244.cljs$core$IFn$_invoke$arity$variadic = G__38244__delegate;
return G__38244;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38247__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38248__i = 0, G__38248__a = new Array(arguments.length -  0);
while (G__38248__i < G__38248__a.length) {G__38248__a[G__38248__i] = arguments[G__38248__i + 0]; ++G__38248__i;}
  args = new cljs.core.IndexedSeq(G__38248__a,0);
} 
return G__38247__delegate.call(this,args);};
G__38247.cljs$lang$maxFixedArity = 0;
G__38247.cljs$lang$applyTo = (function (arglist__38249){
var args = cljs.core.seq(arglist__38249);
return G__38247__delegate(args);
});
G__38247.cljs$core$IFn$_invoke$arity$variadic = G__38247__delegate;
return G__38247;
})()
;

return null;
});
