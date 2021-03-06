goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40125__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40126__i = 0, G__40126__a = new Array(arguments.length -  0);
while (G__40126__i < G__40126__a.length) {G__40126__a[G__40126__i] = arguments[G__40126__i + 0]; ++G__40126__i;}
  args = new cljs.core.IndexedSeq(G__40126__a,0);
} 
return G__40125__delegate.call(this,args);};
G__40125.cljs$lang$maxFixedArity = 0;
G__40125.cljs$lang$applyTo = (function (arglist__40127){
var args = cljs.core.seq(arglist__40127);
return G__40125__delegate(args);
});
G__40125.cljs$core$IFn$_invoke$arity$variadic = G__40125__delegate;
return G__40125;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40128__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40129__i = 0, G__40129__a = new Array(arguments.length -  0);
while (G__40129__i < G__40129__a.length) {G__40129__a[G__40129__i] = arguments[G__40129__i + 0]; ++G__40129__i;}
  args = new cljs.core.IndexedSeq(G__40129__a,0);
} 
return G__40128__delegate.call(this,args);};
G__40128.cljs$lang$maxFixedArity = 0;
G__40128.cljs$lang$applyTo = (function (arglist__40130){
var args = cljs.core.seq(arglist__40130);
return G__40128__delegate(args);
});
G__40128.cljs$core$IFn$_invoke$arity$variadic = G__40128__delegate;
return G__40128;
})()
;

return null;
});
