goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39302__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39303__i = 0, G__39303__a = new Array(arguments.length -  0);
while (G__39303__i < G__39303__a.length) {G__39303__a[G__39303__i] = arguments[G__39303__i + 0]; ++G__39303__i;}
  args = new cljs.core.IndexedSeq(G__39303__a,0);
} 
return G__39302__delegate.call(this,args);};
G__39302.cljs$lang$maxFixedArity = 0;
G__39302.cljs$lang$applyTo = (function (arglist__39304){
var args = cljs.core.seq(arglist__39304);
return G__39302__delegate(args);
});
G__39302.cljs$core$IFn$_invoke$arity$variadic = G__39302__delegate;
return G__39302;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39305__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39306__i = 0, G__39306__a = new Array(arguments.length -  0);
while (G__39306__i < G__39306__a.length) {G__39306__a[G__39306__i] = arguments[G__39306__i + 0]; ++G__39306__i;}
  args = new cljs.core.IndexedSeq(G__39306__a,0);
} 
return G__39305__delegate.call(this,args);};
G__39305.cljs$lang$maxFixedArity = 0;
G__39305.cljs$lang$applyTo = (function (arglist__39307){
var args = cljs.core.seq(arglist__39307);
return G__39305__delegate(args);
});
G__39305.cljs$core$IFn$_invoke$arity$variadic = G__39305__delegate;
return G__39305;
})()
;

return null;
});
