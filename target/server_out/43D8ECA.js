goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37981__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37982__i = 0, G__37982__a = new Array(arguments.length -  0);
while (G__37982__i < G__37982__a.length) {G__37982__a[G__37982__i] = arguments[G__37982__i + 0]; ++G__37982__i;}
  args = new cljs.core.IndexedSeq(G__37982__a,0);
} 
return G__37981__delegate.call(this,args);};
G__37981.cljs$lang$maxFixedArity = 0;
G__37981.cljs$lang$applyTo = (function (arglist__37983){
var args = cljs.core.seq(arglist__37983);
return G__37981__delegate(args);
});
G__37981.cljs$core$IFn$_invoke$arity$variadic = G__37981__delegate;
return G__37981;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37984__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37986__i = 0, G__37986__a = new Array(arguments.length -  0);
while (G__37986__i < G__37986__a.length) {G__37986__a[G__37986__i] = arguments[G__37986__i + 0]; ++G__37986__i;}
  args = new cljs.core.IndexedSeq(G__37986__a,0);
} 
return G__37984__delegate.call(this,args);};
G__37984.cljs$lang$maxFixedArity = 0;
G__37984.cljs$lang$applyTo = (function (arglist__37987){
var args = cljs.core.seq(arglist__37987);
return G__37984__delegate(args);
});
G__37984.cljs$core$IFn$_invoke$arity$variadic = G__37984__delegate;
return G__37984;
})()
;

return null;
});
