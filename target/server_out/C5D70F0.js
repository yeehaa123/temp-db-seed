goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34562__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34563__i = 0, G__34563__a = new Array(arguments.length -  0);
while (G__34563__i < G__34563__a.length) {G__34563__a[G__34563__i] = arguments[G__34563__i + 0]; ++G__34563__i;}
  args = new cljs.core.IndexedSeq(G__34563__a,0);
} 
return G__34562__delegate.call(this,args);};
G__34562.cljs$lang$maxFixedArity = 0;
G__34562.cljs$lang$applyTo = (function (arglist__34564){
var args = cljs.core.seq(arglist__34564);
return G__34562__delegate(args);
});
G__34562.cljs$core$IFn$_invoke$arity$variadic = G__34562__delegate;
return G__34562;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34565__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34565 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34566__i = 0, G__34566__a = new Array(arguments.length -  0);
while (G__34566__i < G__34566__a.length) {G__34566__a[G__34566__i] = arguments[G__34566__i + 0]; ++G__34566__i;}
  args = new cljs.core.IndexedSeq(G__34566__a,0);
} 
return G__34565__delegate.call(this,args);};
G__34565.cljs$lang$maxFixedArity = 0;
G__34565.cljs$lang$applyTo = (function (arglist__34567){
var args = cljs.core.seq(arglist__34567);
return G__34565__delegate(args);
});
G__34565.cljs$core$IFn$_invoke$arity$variadic = G__34565__delegate;
return G__34565;
})()
;

return null;
});
