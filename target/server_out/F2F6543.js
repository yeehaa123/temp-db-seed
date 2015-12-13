goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34091__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34092__i = 0, G__34092__a = new Array(arguments.length -  0);
while (G__34092__i < G__34092__a.length) {G__34092__a[G__34092__i] = arguments[G__34092__i + 0]; ++G__34092__i;}
  args = new cljs.core.IndexedSeq(G__34092__a,0);
} 
return G__34091__delegate.call(this,args);};
G__34091.cljs$lang$maxFixedArity = 0;
G__34091.cljs$lang$applyTo = (function (arglist__34093){
var args = cljs.core.seq(arglist__34093);
return G__34091__delegate(args);
});
G__34091.cljs$core$IFn$_invoke$arity$variadic = G__34091__delegate;
return G__34091;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34094__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34095__i = 0, G__34095__a = new Array(arguments.length -  0);
while (G__34095__i < G__34095__a.length) {G__34095__a[G__34095__i] = arguments[G__34095__i + 0]; ++G__34095__i;}
  args = new cljs.core.IndexedSeq(G__34095__a,0);
} 
return G__34094__delegate.call(this,args);};
G__34094.cljs$lang$maxFixedArity = 0;
G__34094.cljs$lang$applyTo = (function (arglist__34096){
var args = cljs.core.seq(arglist__34096);
return G__34094__delegate(args);
});
G__34094.cljs$core$IFn$_invoke$arity$variadic = G__34094__delegate;
return G__34094;
})()
;

return null;
});
