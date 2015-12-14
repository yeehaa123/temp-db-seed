goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38111__i = 0, G__38111__a = new Array(arguments.length -  0);
while (G__38111__i < G__38111__a.length) {G__38111__a[G__38111__i] = arguments[G__38111__i + 0]; ++G__38111__i;}
  args = new cljs.core.IndexedSeq(G__38111__a,0);
} 
return G__38110__delegate.call(this,args);};
G__38110.cljs$lang$maxFixedArity = 0;
G__38110.cljs$lang$applyTo = (function (arglist__38112){
var args = cljs.core.seq(arglist__38112);
return G__38110__delegate(args);
});
G__38110.cljs$core$IFn$_invoke$arity$variadic = G__38110__delegate;
return G__38110;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38114__i = 0, G__38114__a = new Array(arguments.length -  0);
while (G__38114__i < G__38114__a.length) {G__38114__a[G__38114__i] = arguments[G__38114__i + 0]; ++G__38114__i;}
  args = new cljs.core.IndexedSeq(G__38114__a,0);
} 
return G__38113__delegate.call(this,args);};
G__38113.cljs$lang$maxFixedArity = 0;
G__38113.cljs$lang$applyTo = (function (arglist__38115){
var args = cljs.core.seq(arglist__38115);
return G__38113__delegate(args);
});
G__38113.cljs$core$IFn$_invoke$arity$variadic = G__38113__delegate;
return G__38113;
})()
;

return null;
});
