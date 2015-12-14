goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43649__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43650__i = 0, G__43650__a = new Array(arguments.length -  0);
while (G__43650__i < G__43650__a.length) {G__43650__a[G__43650__i] = arguments[G__43650__i + 0]; ++G__43650__i;}
  args = new cljs.core.IndexedSeq(G__43650__a,0);
} 
return G__43649__delegate.call(this,args);};
G__43649.cljs$lang$maxFixedArity = 0;
G__43649.cljs$lang$applyTo = (function (arglist__43651){
var args = cljs.core.seq(arglist__43651);
return G__43649__delegate(args);
});
G__43649.cljs$core$IFn$_invoke$arity$variadic = G__43649__delegate;
return G__43649;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43652__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43653__i = 0, G__43653__a = new Array(arguments.length -  0);
while (G__43653__i < G__43653__a.length) {G__43653__a[G__43653__i] = arguments[G__43653__i + 0]; ++G__43653__i;}
  args = new cljs.core.IndexedSeq(G__43653__a,0);
} 
return G__43652__delegate.call(this,args);};
G__43652.cljs$lang$maxFixedArity = 0;
G__43652.cljs$lang$applyTo = (function (arglist__43654){
var args = cljs.core.seq(arglist__43654);
return G__43652__delegate(args);
});
G__43652.cljs$core$IFn$_invoke$arity$variadic = G__43652__delegate;
return G__43652;
})()
;

return null;
});
