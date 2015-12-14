goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38884__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38885__i = 0, G__38885__a = new Array(arguments.length -  0);
while (G__38885__i < G__38885__a.length) {G__38885__a[G__38885__i] = arguments[G__38885__i + 0]; ++G__38885__i;}
  args = new cljs.core.IndexedSeq(G__38885__a,0);
} 
return G__38884__delegate.call(this,args);};
G__38884.cljs$lang$maxFixedArity = 0;
G__38884.cljs$lang$applyTo = (function (arglist__38886){
var args = cljs.core.seq(arglist__38886);
return G__38884__delegate(args);
});
G__38884.cljs$core$IFn$_invoke$arity$variadic = G__38884__delegate;
return G__38884;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38887__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38888__i = 0, G__38888__a = new Array(arguments.length -  0);
while (G__38888__i < G__38888__a.length) {G__38888__a[G__38888__i] = arguments[G__38888__i + 0]; ++G__38888__i;}
  args = new cljs.core.IndexedSeq(G__38888__a,0);
} 
return G__38887__delegate.call(this,args);};
G__38887.cljs$lang$maxFixedArity = 0;
G__38887.cljs$lang$applyTo = (function (arglist__38889){
var args = cljs.core.seq(arglist__38889);
return G__38887__delegate(args);
});
G__38887.cljs$core$IFn$_invoke$arity$variadic = G__38887__delegate;
return G__38887;
})()
;

return null;
});
