goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42781__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42782__i = 0, G__42782__a = new Array(arguments.length -  0);
while (G__42782__i < G__42782__a.length) {G__42782__a[G__42782__i] = arguments[G__42782__i + 0]; ++G__42782__i;}
  args = new cljs.core.IndexedSeq(G__42782__a,0);
} 
return G__42781__delegate.call(this,args);};
G__42781.cljs$lang$maxFixedArity = 0;
G__42781.cljs$lang$applyTo = (function (arglist__42783){
var args = cljs.core.seq(arglist__42783);
return G__42781__delegate(args);
});
G__42781.cljs$core$IFn$_invoke$arity$variadic = G__42781__delegate;
return G__42781;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42784__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42785__i = 0, G__42785__a = new Array(arguments.length -  0);
while (G__42785__i < G__42785__a.length) {G__42785__a[G__42785__i] = arguments[G__42785__i + 0]; ++G__42785__i;}
  args = new cljs.core.IndexedSeq(G__42785__a,0);
} 
return G__42784__delegate.call(this,args);};
G__42784.cljs$lang$maxFixedArity = 0;
G__42784.cljs$lang$applyTo = (function (arglist__42786){
var args = cljs.core.seq(arglist__42786);
return G__42784__delegate(args);
});
G__42784.cljs$core$IFn$_invoke$arity$variadic = G__42784__delegate;
return G__42784;
})()
;

return null;
});
