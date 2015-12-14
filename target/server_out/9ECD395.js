goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44245__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44246__i = 0, G__44246__a = new Array(arguments.length -  0);
while (G__44246__i < G__44246__a.length) {G__44246__a[G__44246__i] = arguments[G__44246__i + 0]; ++G__44246__i;}
  args = new cljs.core.IndexedSeq(G__44246__a,0);
} 
return G__44245__delegate.call(this,args);};
G__44245.cljs$lang$maxFixedArity = 0;
G__44245.cljs$lang$applyTo = (function (arglist__44247){
var args = cljs.core.seq(arglist__44247);
return G__44245__delegate(args);
});
G__44245.cljs$core$IFn$_invoke$arity$variadic = G__44245__delegate;
return G__44245;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44248__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44249__i = 0, G__44249__a = new Array(arguments.length -  0);
while (G__44249__i < G__44249__a.length) {G__44249__a[G__44249__i] = arguments[G__44249__i + 0]; ++G__44249__i;}
  args = new cljs.core.IndexedSeq(G__44249__a,0);
} 
return G__44248__delegate.call(this,args);};
G__44248.cljs$lang$maxFixedArity = 0;
G__44248.cljs$lang$applyTo = (function (arglist__44250){
var args = cljs.core.seq(arglist__44250);
return G__44248__delegate(args);
});
G__44248.cljs$core$IFn$_invoke$arity$variadic = G__44248__delegate;
return G__44248;
})()
;

return null;
});
