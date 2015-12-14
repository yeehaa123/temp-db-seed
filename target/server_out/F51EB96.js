goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36516__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36517__i = 0, G__36517__a = new Array(arguments.length -  0);
while (G__36517__i < G__36517__a.length) {G__36517__a[G__36517__i] = arguments[G__36517__i + 0]; ++G__36517__i;}
  args = new cljs.core.IndexedSeq(G__36517__a,0);
} 
return G__36516__delegate.call(this,args);};
G__36516.cljs$lang$maxFixedArity = 0;
G__36516.cljs$lang$applyTo = (function (arglist__36518){
var args = cljs.core.seq(arglist__36518);
return G__36516__delegate(args);
});
G__36516.cljs$core$IFn$_invoke$arity$variadic = G__36516__delegate;
return G__36516;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36519__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36520__i = 0, G__36520__a = new Array(arguments.length -  0);
while (G__36520__i < G__36520__a.length) {G__36520__a[G__36520__i] = arguments[G__36520__i + 0]; ++G__36520__i;}
  args = new cljs.core.IndexedSeq(G__36520__a,0);
} 
return G__36519__delegate.call(this,args);};
G__36519.cljs$lang$maxFixedArity = 0;
G__36519.cljs$lang$applyTo = (function (arglist__36521){
var args = cljs.core.seq(arglist__36521);
return G__36519__delegate(args);
});
G__36519.cljs$core$IFn$_invoke$arity$variadic = G__36519__delegate;
return G__36519;
})()
;

return null;
});
