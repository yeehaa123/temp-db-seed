goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39839__i = 0, G__39839__a = new Array(arguments.length -  0);
while (G__39839__i < G__39839__a.length) {G__39839__a[G__39839__i] = arguments[G__39839__i + 0]; ++G__39839__i;}
  args = new cljs.core.IndexedSeq(G__39839__a,0);
} 
return G__39838__delegate.call(this,args);};
G__39838.cljs$lang$maxFixedArity = 0;
G__39838.cljs$lang$applyTo = (function (arglist__39840){
var args = cljs.core.seq(arglist__39840);
return G__39838__delegate(args);
});
G__39838.cljs$core$IFn$_invoke$arity$variadic = G__39838__delegate;
return G__39838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39842__i = 0, G__39842__a = new Array(arguments.length -  0);
while (G__39842__i < G__39842__a.length) {G__39842__a[G__39842__i] = arguments[G__39842__i + 0]; ++G__39842__i;}
  args = new cljs.core.IndexedSeq(G__39842__a,0);
} 
return G__39841__delegate.call(this,args);};
G__39841.cljs$lang$maxFixedArity = 0;
G__39841.cljs$lang$applyTo = (function (arglist__39843){
var args = cljs.core.seq(arglist__39843);
return G__39841__delegate(args);
});
G__39841.cljs$core$IFn$_invoke$arity$variadic = G__39841__delegate;
return G__39841;
})()
;

return null;
});
