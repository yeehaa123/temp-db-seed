goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40770__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40771__i = 0, G__40771__a = new Array(arguments.length -  0);
while (G__40771__i < G__40771__a.length) {G__40771__a[G__40771__i] = arguments[G__40771__i + 0]; ++G__40771__i;}
  args = new cljs.core.IndexedSeq(G__40771__a,0);
} 
return G__40770__delegate.call(this,args);};
G__40770.cljs$lang$maxFixedArity = 0;
G__40770.cljs$lang$applyTo = (function (arglist__40772){
var args = cljs.core.seq(arglist__40772);
return G__40770__delegate(args);
});
G__40770.cljs$core$IFn$_invoke$arity$variadic = G__40770__delegate;
return G__40770;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40773__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40774__i = 0, G__40774__a = new Array(arguments.length -  0);
while (G__40774__i < G__40774__a.length) {G__40774__a[G__40774__i] = arguments[G__40774__i + 0]; ++G__40774__i;}
  args = new cljs.core.IndexedSeq(G__40774__a,0);
} 
return G__40773__delegate.call(this,args);};
G__40773.cljs$lang$maxFixedArity = 0;
G__40773.cljs$lang$applyTo = (function (arglist__40775){
var args = cljs.core.seq(arglist__40775);
return G__40773__delegate(args);
});
G__40773.cljs$core$IFn$_invoke$arity$variadic = G__40773__delegate;
return G__40773;
})()
;

return null;
});
