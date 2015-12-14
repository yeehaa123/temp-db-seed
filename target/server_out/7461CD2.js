goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42860__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42861__i = 0, G__42861__a = new Array(arguments.length -  0);
while (G__42861__i < G__42861__a.length) {G__42861__a[G__42861__i] = arguments[G__42861__i + 0]; ++G__42861__i;}
  args = new cljs.core.IndexedSeq(G__42861__a,0);
} 
return G__42860__delegate.call(this,args);};
G__42860.cljs$lang$maxFixedArity = 0;
G__42860.cljs$lang$applyTo = (function (arglist__42862){
var args = cljs.core.seq(arglist__42862);
return G__42860__delegate(args);
});
G__42860.cljs$core$IFn$_invoke$arity$variadic = G__42860__delegate;
return G__42860;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42863__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42864__i = 0, G__42864__a = new Array(arguments.length -  0);
while (G__42864__i < G__42864__a.length) {G__42864__a[G__42864__i] = arguments[G__42864__i + 0]; ++G__42864__i;}
  args = new cljs.core.IndexedSeq(G__42864__a,0);
} 
return G__42863__delegate.call(this,args);};
G__42863.cljs$lang$maxFixedArity = 0;
G__42863.cljs$lang$applyTo = (function (arglist__42865){
var args = cljs.core.seq(arglist__42865);
return G__42863__delegate(args);
});
G__42863.cljs$core$IFn$_invoke$arity$variadic = G__42863__delegate;
return G__42863;
})()
;

return null;
});
