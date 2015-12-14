// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33846__i = 0, G__33846__a = new Array(arguments.length -  0);
while (G__33846__i < G__33846__a.length) {G__33846__a[G__33846__i] = arguments[G__33846__i + 0]; ++G__33846__i;}
  args = new cljs.core.IndexedSeq(G__33846__a,0);
} 
return G__33845__delegate.call(this,args);};
G__33845.cljs$lang$maxFixedArity = 0;
G__33845.cljs$lang$applyTo = (function (arglist__33847){
var args = cljs.core.seq(arglist__33847);
return G__33845__delegate(args);
});
G__33845.cljs$core$IFn$_invoke$arity$variadic = G__33845__delegate;
return G__33845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33849__i = 0, G__33849__a = new Array(arguments.length -  0);
while (G__33849__i < G__33849__a.length) {G__33849__a[G__33849__i] = arguments[G__33849__i + 0]; ++G__33849__i;}
  args = new cljs.core.IndexedSeq(G__33849__a,0);
} 
return G__33848__delegate.call(this,args);};
G__33848.cljs$lang$maxFixedArity = 0;
G__33848.cljs$lang$applyTo = (function (arglist__33850){
var args = cljs.core.seq(arglist__33850);
return G__33848__delegate(args);
});
G__33848.cljs$core$IFn$_invoke$arity$variadic = G__33848__delegate;
return G__33848;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map