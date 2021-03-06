goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36171__i = 0, G__36171__a = new Array(arguments.length -  0);
while (G__36171__i < G__36171__a.length) {G__36171__a[G__36171__i] = arguments[G__36171__i + 0]; ++G__36171__i;}
  args = new cljs.core.IndexedSeq(G__36171__a,0);
} 
return G__36170__delegate.call(this,args);};
G__36170.cljs$lang$maxFixedArity = 0;
G__36170.cljs$lang$applyTo = (function (arglist__36172){
var args = cljs.core.seq(arglist__36172);
return G__36170__delegate(args);
});
G__36170.cljs$core$IFn$_invoke$arity$variadic = G__36170__delegate;
return G__36170;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36174__i = 0, G__36174__a = new Array(arguments.length -  0);
while (G__36174__i < G__36174__a.length) {G__36174__a[G__36174__i] = arguments[G__36174__i + 0]; ++G__36174__i;}
  args = new cljs.core.IndexedSeq(G__36174__a,0);
} 
return G__36173__delegate.call(this,args);};
G__36173.cljs$lang$maxFixedArity = 0;
G__36173.cljs$lang$applyTo = (function (arglist__36175){
var args = cljs.core.seq(arglist__36175);
return G__36173__delegate(args);
});
G__36173.cljs$core$IFn$_invoke$arity$variadic = G__36173__delegate;
return G__36173;
})()
;

return null;
});
