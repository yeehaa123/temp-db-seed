goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39175__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39176__i = 0, G__39176__a = new Array(arguments.length -  0);
while (G__39176__i < G__39176__a.length) {G__39176__a[G__39176__i] = arguments[G__39176__i + 0]; ++G__39176__i;}
  args = new cljs.core.IndexedSeq(G__39176__a,0);
} 
return G__39175__delegate.call(this,args);};
G__39175.cljs$lang$maxFixedArity = 0;
G__39175.cljs$lang$applyTo = (function (arglist__39177){
var args = cljs.core.seq(arglist__39177);
return G__39175__delegate(args);
});
G__39175.cljs$core$IFn$_invoke$arity$variadic = G__39175__delegate;
return G__39175;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39178__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39179__i = 0, G__39179__a = new Array(arguments.length -  0);
while (G__39179__i < G__39179__a.length) {G__39179__a[G__39179__i] = arguments[G__39179__i + 0]; ++G__39179__i;}
  args = new cljs.core.IndexedSeq(G__39179__a,0);
} 
return G__39178__delegate.call(this,args);};
G__39178.cljs$lang$maxFixedArity = 0;
G__39178.cljs$lang$applyTo = (function (arglist__39180){
var args = cljs.core.seq(arglist__39180);
return G__39178__delegate(args);
});
G__39178.cljs$core$IFn$_invoke$arity$variadic = G__39178__delegate;
return G__39178;
})()
;

return null;
});
