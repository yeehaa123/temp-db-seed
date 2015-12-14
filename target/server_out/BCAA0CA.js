goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42646__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42647__i = 0, G__42647__a = new Array(arguments.length -  0);
while (G__42647__i < G__42647__a.length) {G__42647__a[G__42647__i] = arguments[G__42647__i + 0]; ++G__42647__i;}
  args = new cljs.core.IndexedSeq(G__42647__a,0);
} 
return G__42646__delegate.call(this,args);};
G__42646.cljs$lang$maxFixedArity = 0;
G__42646.cljs$lang$applyTo = (function (arglist__42648){
var args = cljs.core.seq(arglist__42648);
return G__42646__delegate(args);
});
G__42646.cljs$core$IFn$_invoke$arity$variadic = G__42646__delegate;
return G__42646;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42649__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42650__i = 0, G__42650__a = new Array(arguments.length -  0);
while (G__42650__i < G__42650__a.length) {G__42650__a[G__42650__i] = arguments[G__42650__i + 0]; ++G__42650__i;}
  args = new cljs.core.IndexedSeq(G__42650__a,0);
} 
return G__42649__delegate.call(this,args);};
G__42649.cljs$lang$maxFixedArity = 0;
G__42649.cljs$lang$applyTo = (function (arglist__42651){
var args = cljs.core.seq(arglist__42651);
return G__42649__delegate(args);
});
G__42649.cljs$core$IFn$_invoke$arity$variadic = G__42649__delegate;
return G__42649;
})()
;

return null;
});
