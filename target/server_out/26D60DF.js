goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39694__i = 0, G__39694__a = new Array(arguments.length -  0);
while (G__39694__i < G__39694__a.length) {G__39694__a[G__39694__i] = arguments[G__39694__i + 0]; ++G__39694__i;}
  args = new cljs.core.IndexedSeq(G__39694__a,0);
} 
return G__39693__delegate.call(this,args);};
G__39693.cljs$lang$maxFixedArity = 0;
G__39693.cljs$lang$applyTo = (function (arglist__39695){
var args = cljs.core.seq(arglist__39695);
return G__39693__delegate(args);
});
G__39693.cljs$core$IFn$_invoke$arity$variadic = G__39693__delegate;
return G__39693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39697__i = 0, G__39697__a = new Array(arguments.length -  0);
while (G__39697__i < G__39697__a.length) {G__39697__a[G__39697__i] = arguments[G__39697__i + 0]; ++G__39697__i;}
  args = new cljs.core.IndexedSeq(G__39697__a,0);
} 
return G__39696__delegate.call(this,args);};
G__39696.cljs$lang$maxFixedArity = 0;
G__39696.cljs$lang$applyTo = (function (arglist__39698){
var args = cljs.core.seq(arglist__39698);
return G__39696__delegate(args);
});
G__39696.cljs$core$IFn$_invoke$arity$variadic = G__39696__delegate;
return G__39696;
})()
;

return null;
});
