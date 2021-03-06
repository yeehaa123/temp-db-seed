goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33955__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33956__i = 0, G__33956__a = new Array(arguments.length -  0);
while (G__33956__i < G__33956__a.length) {G__33956__a[G__33956__i] = arguments[G__33956__i + 0]; ++G__33956__i;}
  args = new cljs.core.IndexedSeq(G__33956__a,0);
} 
return G__33955__delegate.call(this,args);};
G__33955.cljs$lang$maxFixedArity = 0;
G__33955.cljs$lang$applyTo = (function (arglist__33957){
var args = cljs.core.seq(arglist__33957);
return G__33955__delegate(args);
});
G__33955.cljs$core$IFn$_invoke$arity$variadic = G__33955__delegate;
return G__33955;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33958__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33959__i = 0, G__33959__a = new Array(arguments.length -  0);
while (G__33959__i < G__33959__a.length) {G__33959__a[G__33959__i] = arguments[G__33959__i + 0]; ++G__33959__i;}
  args = new cljs.core.IndexedSeq(G__33959__a,0);
} 
return G__33958__delegate.call(this,args);};
G__33958.cljs$lang$maxFixedArity = 0;
G__33958.cljs$lang$applyTo = (function (arglist__33960){
var args = cljs.core.seq(arglist__33960);
return G__33958__delegate(args);
});
G__33958.cljs$core$IFn$_invoke$arity$variadic = G__33958__delegate;
return G__33958;
})()
;

return null;
});
