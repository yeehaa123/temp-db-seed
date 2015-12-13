// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34882__i = 0, G__34882__a = new Array(arguments.length -  0);
while (G__34882__i < G__34882__a.length) {G__34882__a[G__34882__i] = arguments[G__34882__i + 0]; ++G__34882__i;}
  args = new cljs.core.IndexedSeq(G__34882__a,0);
} 
return G__34881__delegate.call(this,args);};
G__34881.cljs$lang$maxFixedArity = 0;
G__34881.cljs$lang$applyTo = (function (arglist__34883){
var args = cljs.core.seq(arglist__34883);
return G__34881__delegate(args);
});
G__34881.cljs$core$IFn$_invoke$arity$variadic = G__34881__delegate;
return G__34881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34885__i = 0, G__34885__a = new Array(arguments.length -  0);
while (G__34885__i < G__34885__a.length) {G__34885__a[G__34885__i] = arguments[G__34885__i + 0]; ++G__34885__i;}
  args = new cljs.core.IndexedSeq(G__34885__a,0);
} 
return G__34884__delegate.call(this,args);};
G__34884.cljs$lang$maxFixedArity = 0;
G__34884.cljs$lang$applyTo = (function (arglist__34886){
var args = cljs.core.seq(arglist__34886);
return G__34884__delegate(args);
});
G__34884.cljs$core$IFn$_invoke$arity$variadic = G__34884__delegate;
return G__34884;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map