goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34240__i = 0, G__34240__a = new Array(arguments.length -  0);
while (G__34240__i < G__34240__a.length) {G__34240__a[G__34240__i] = arguments[G__34240__i + 0]; ++G__34240__i;}
  args = new cljs.core.IndexedSeq(G__34240__a,0);
} 
return G__34239__delegate.call(this,args);};
G__34239.cljs$lang$maxFixedArity = 0;
G__34239.cljs$lang$applyTo = (function (arglist__34241){
var args = cljs.core.seq(arglist__34241);
return G__34239__delegate(args);
});
G__34239.cljs$core$IFn$_invoke$arity$variadic = G__34239__delegate;
return G__34239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34243__i = 0, G__34243__a = new Array(arguments.length -  0);
while (G__34243__i < G__34243__a.length) {G__34243__a[G__34243__i] = arguments[G__34243__i + 0]; ++G__34243__i;}
  args = new cljs.core.IndexedSeq(G__34243__a,0);
} 
return G__34242__delegate.call(this,args);};
G__34242.cljs$lang$maxFixedArity = 0;
G__34242.cljs$lang$applyTo = (function (arglist__34244){
var args = cljs.core.seq(arglist__34244);
return G__34242__delegate(args);
});
G__34242.cljs$core$IFn$_invoke$arity$variadic = G__34242__delegate;
return G__34242;
})()
;

return null;
});
