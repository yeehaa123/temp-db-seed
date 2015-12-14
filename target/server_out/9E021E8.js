goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44285__i = 0, G__44285__a = new Array(arguments.length -  0);
while (G__44285__i < G__44285__a.length) {G__44285__a[G__44285__i] = arguments[G__44285__i + 0]; ++G__44285__i;}
  args = new cljs.core.IndexedSeq(G__44285__a,0);
} 
return G__44284__delegate.call(this,args);};
G__44284.cljs$lang$maxFixedArity = 0;
G__44284.cljs$lang$applyTo = (function (arglist__44286){
var args = cljs.core.seq(arglist__44286);
return G__44284__delegate(args);
});
G__44284.cljs$core$IFn$_invoke$arity$variadic = G__44284__delegate;
return G__44284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44288__i = 0, G__44288__a = new Array(arguments.length -  0);
while (G__44288__i < G__44288__a.length) {G__44288__a[G__44288__i] = arguments[G__44288__i + 0]; ++G__44288__i;}
  args = new cljs.core.IndexedSeq(G__44288__a,0);
} 
return G__44287__delegate.call(this,args);};
G__44287.cljs$lang$maxFixedArity = 0;
G__44287.cljs$lang$applyTo = (function (arglist__44289){
var args = cljs.core.seq(arglist__44289);
return G__44287__delegate(args);
});
G__44287.cljs$core$IFn$_invoke$arity$variadic = G__44287__delegate;
return G__44287;
})()
;

return null;
});
