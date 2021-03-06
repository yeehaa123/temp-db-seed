goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42479__i = 0, G__42479__a = new Array(arguments.length -  0);
while (G__42479__i < G__42479__a.length) {G__42479__a[G__42479__i] = arguments[G__42479__i + 0]; ++G__42479__i;}
  args = new cljs.core.IndexedSeq(G__42479__a,0);
} 
return G__42478__delegate.call(this,args);};
G__42478.cljs$lang$maxFixedArity = 0;
G__42478.cljs$lang$applyTo = (function (arglist__42480){
var args = cljs.core.seq(arglist__42480);
return G__42478__delegate(args);
});
G__42478.cljs$core$IFn$_invoke$arity$variadic = G__42478__delegate;
return G__42478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42482__i = 0, G__42482__a = new Array(arguments.length -  0);
while (G__42482__i < G__42482__a.length) {G__42482__a[G__42482__i] = arguments[G__42482__i + 0]; ++G__42482__i;}
  args = new cljs.core.IndexedSeq(G__42482__a,0);
} 
return G__42481__delegate.call(this,args);};
G__42481.cljs$lang$maxFixedArity = 0;
G__42481.cljs$lang$applyTo = (function (arglist__42483){
var args = cljs.core.seq(arglist__42483);
return G__42481__delegate(args);
});
G__42481.cljs$core$IFn$_invoke$arity$variadic = G__42481__delegate;
return G__42481;
})()
;

return null;
});
