goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40891__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40892__i = 0, G__40892__a = new Array(arguments.length -  0);
while (G__40892__i < G__40892__a.length) {G__40892__a[G__40892__i] = arguments[G__40892__i + 0]; ++G__40892__i;}
  args = new cljs.core.IndexedSeq(G__40892__a,0);
} 
return G__40891__delegate.call(this,args);};
G__40891.cljs$lang$maxFixedArity = 0;
G__40891.cljs$lang$applyTo = (function (arglist__40893){
var args = cljs.core.seq(arglist__40893);
return G__40891__delegate(args);
});
G__40891.cljs$core$IFn$_invoke$arity$variadic = G__40891__delegate;
return G__40891;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40894__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40894 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40895__i = 0, G__40895__a = new Array(arguments.length -  0);
while (G__40895__i < G__40895__a.length) {G__40895__a[G__40895__i] = arguments[G__40895__i + 0]; ++G__40895__i;}
  args = new cljs.core.IndexedSeq(G__40895__a,0);
} 
return G__40894__delegate.call(this,args);};
G__40894.cljs$lang$maxFixedArity = 0;
G__40894.cljs$lang$applyTo = (function (arglist__40896){
var args = cljs.core.seq(arglist__40896);
return G__40894__delegate(args);
});
G__40894.cljs$core$IFn$_invoke$arity$variadic = G__40894__delegate;
return G__40894;
})()
;

return null;
});
