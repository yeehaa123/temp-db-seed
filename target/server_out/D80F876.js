goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36678__i = 0, G__36678__a = new Array(arguments.length -  0);
while (G__36678__i < G__36678__a.length) {G__36678__a[G__36678__i] = arguments[G__36678__i + 0]; ++G__36678__i;}
  args = new cljs.core.IndexedSeq(G__36678__a,0);
} 
return G__36677__delegate.call(this,args);};
G__36677.cljs$lang$maxFixedArity = 0;
G__36677.cljs$lang$applyTo = (function (arglist__36679){
var args = cljs.core.seq(arglist__36679);
return G__36677__delegate(args);
});
G__36677.cljs$core$IFn$_invoke$arity$variadic = G__36677__delegate;
return G__36677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36681__i = 0, G__36681__a = new Array(arguments.length -  0);
while (G__36681__i < G__36681__a.length) {G__36681__a[G__36681__i] = arguments[G__36681__i + 0]; ++G__36681__i;}
  args = new cljs.core.IndexedSeq(G__36681__a,0);
} 
return G__36680__delegate.call(this,args);};
G__36680.cljs$lang$maxFixedArity = 0;
G__36680.cljs$lang$applyTo = (function (arglist__36682){
var args = cljs.core.seq(arglist__36682);
return G__36680__delegate(args);
});
G__36680.cljs$core$IFn$_invoke$arity$variadic = G__36680__delegate;
return G__36680;
})()
;

return null;
});
