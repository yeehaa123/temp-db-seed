goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40262__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40263__i = 0, G__40263__a = new Array(arguments.length -  0);
while (G__40263__i < G__40263__a.length) {G__40263__a[G__40263__i] = arguments[G__40263__i + 0]; ++G__40263__i;}
  args = new cljs.core.IndexedSeq(G__40263__a,0);
} 
return G__40262__delegate.call(this,args);};
G__40262.cljs$lang$maxFixedArity = 0;
G__40262.cljs$lang$applyTo = (function (arglist__40264){
var args = cljs.core.seq(arglist__40264);
return G__40262__delegate(args);
});
G__40262.cljs$core$IFn$_invoke$arity$variadic = G__40262__delegate;
return G__40262;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40265__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40266__i = 0, G__40266__a = new Array(arguments.length -  0);
while (G__40266__i < G__40266__a.length) {G__40266__a[G__40266__i] = arguments[G__40266__i + 0]; ++G__40266__i;}
  args = new cljs.core.IndexedSeq(G__40266__a,0);
} 
return G__40265__delegate.call(this,args);};
G__40265.cljs$lang$maxFixedArity = 0;
G__40265.cljs$lang$applyTo = (function (arglist__40267){
var args = cljs.core.seq(arglist__40267);
return G__40265__delegate(args);
});
G__40265.cljs$core$IFn$_invoke$arity$variadic = G__40265__delegate;
return G__40265;
})()
;

return null;
});
