goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36071__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36072__i = 0, G__36072__a = new Array(arguments.length -  0);
while (G__36072__i < G__36072__a.length) {G__36072__a[G__36072__i] = arguments[G__36072__i + 0]; ++G__36072__i;}
  args = new cljs.core.IndexedSeq(G__36072__a,0);
} 
return G__36071__delegate.call(this,args);};
G__36071.cljs$lang$maxFixedArity = 0;
G__36071.cljs$lang$applyTo = (function (arglist__36073){
var args = cljs.core.seq(arglist__36073);
return G__36071__delegate(args);
});
G__36071.cljs$core$IFn$_invoke$arity$variadic = G__36071__delegate;
return G__36071;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36074__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36075__i = 0, G__36075__a = new Array(arguments.length -  0);
while (G__36075__i < G__36075__a.length) {G__36075__a[G__36075__i] = arguments[G__36075__i + 0]; ++G__36075__i;}
  args = new cljs.core.IndexedSeq(G__36075__a,0);
} 
return G__36074__delegate.call(this,args);};
G__36074.cljs$lang$maxFixedArity = 0;
G__36074.cljs$lang$applyTo = (function (arglist__36076){
var args = cljs.core.seq(arglist__36076);
return G__36074__delegate(args);
});
G__36074.cljs$core$IFn$_invoke$arity$variadic = G__36074__delegate;
return G__36074;
})()
;

return null;
});
