goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39427__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39428__i = 0, G__39428__a = new Array(arguments.length -  0);
while (G__39428__i < G__39428__a.length) {G__39428__a[G__39428__i] = arguments[G__39428__i + 0]; ++G__39428__i;}
  args = new cljs.core.IndexedSeq(G__39428__a,0);
} 
return G__39427__delegate.call(this,args);};
G__39427.cljs$lang$maxFixedArity = 0;
G__39427.cljs$lang$applyTo = (function (arglist__39429){
var args = cljs.core.seq(arglist__39429);
return G__39427__delegate(args);
});
G__39427.cljs$core$IFn$_invoke$arity$variadic = G__39427__delegate;
return G__39427;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39430__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39431__i = 0, G__39431__a = new Array(arguments.length -  0);
while (G__39431__i < G__39431__a.length) {G__39431__a[G__39431__i] = arguments[G__39431__i + 0]; ++G__39431__i;}
  args = new cljs.core.IndexedSeq(G__39431__a,0);
} 
return G__39430__delegate.call(this,args);};
G__39430.cljs$lang$maxFixedArity = 0;
G__39430.cljs$lang$applyTo = (function (arglist__39432){
var args = cljs.core.seq(arglist__39432);
return G__39430__delegate(args);
});
G__39430.cljs$core$IFn$_invoke$arity$variadic = G__39430__delegate;
return G__39430;
})()
;

return null;
});
