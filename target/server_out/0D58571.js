goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42967__i = 0, G__42967__a = new Array(arguments.length -  0);
while (G__42967__i < G__42967__a.length) {G__42967__a[G__42967__i] = arguments[G__42967__i + 0]; ++G__42967__i;}
  args = new cljs.core.IndexedSeq(G__42967__a,0);
} 
return G__42966__delegate.call(this,args);};
G__42966.cljs$lang$maxFixedArity = 0;
G__42966.cljs$lang$applyTo = (function (arglist__42968){
var args = cljs.core.seq(arglist__42968);
return G__42966__delegate(args);
});
G__42966.cljs$core$IFn$_invoke$arity$variadic = G__42966__delegate;
return G__42966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42970__i = 0, G__42970__a = new Array(arguments.length -  0);
while (G__42970__i < G__42970__a.length) {G__42970__a[G__42970__i] = arguments[G__42970__i + 0]; ++G__42970__i;}
  args = new cljs.core.IndexedSeq(G__42970__a,0);
} 
return G__42969__delegate.call(this,args);};
G__42969.cljs$lang$maxFixedArity = 0;
G__42969.cljs$lang$applyTo = (function (arglist__42971){
var args = cljs.core.seq(arglist__42971);
return G__42969__delegate(args);
});
G__42969.cljs$core$IFn$_invoke$arity$variadic = G__42969__delegate;
return G__42969;
})()
;

return null;
});
