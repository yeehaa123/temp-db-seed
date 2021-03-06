goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42394__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42395__i = 0, G__42395__a = new Array(arguments.length -  0);
while (G__42395__i < G__42395__a.length) {G__42395__a[G__42395__i] = arguments[G__42395__i + 0]; ++G__42395__i;}
  args = new cljs.core.IndexedSeq(G__42395__a,0);
} 
return G__42394__delegate.call(this,args);};
G__42394.cljs$lang$maxFixedArity = 0;
G__42394.cljs$lang$applyTo = (function (arglist__42396){
var args = cljs.core.seq(arglist__42396);
return G__42394__delegate(args);
});
G__42394.cljs$core$IFn$_invoke$arity$variadic = G__42394__delegate;
return G__42394;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42397__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42398__i = 0, G__42398__a = new Array(arguments.length -  0);
while (G__42398__i < G__42398__a.length) {G__42398__a[G__42398__i] = arguments[G__42398__i + 0]; ++G__42398__i;}
  args = new cljs.core.IndexedSeq(G__42398__a,0);
} 
return G__42397__delegate.call(this,args);};
G__42397.cljs$lang$maxFixedArity = 0;
G__42397.cljs$lang$applyTo = (function (arglist__42399){
var args = cljs.core.seq(arglist__42399);
return G__42397__delegate(args);
});
G__42397.cljs$core$IFn$_invoke$arity$variadic = G__42397__delegate;
return G__42397;
})()
;

return null;
});
