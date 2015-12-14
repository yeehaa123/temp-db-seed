goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38533__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38534__i = 0, G__38534__a = new Array(arguments.length -  0);
while (G__38534__i < G__38534__a.length) {G__38534__a[G__38534__i] = arguments[G__38534__i + 0]; ++G__38534__i;}
  args = new cljs.core.IndexedSeq(G__38534__a,0);
} 
return G__38533__delegate.call(this,args);};
G__38533.cljs$lang$maxFixedArity = 0;
G__38533.cljs$lang$applyTo = (function (arglist__38535){
var args = cljs.core.seq(arglist__38535);
return G__38533__delegate(args);
});
G__38533.cljs$core$IFn$_invoke$arity$variadic = G__38533__delegate;
return G__38533;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38536__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38537__i = 0, G__38537__a = new Array(arguments.length -  0);
while (G__38537__i < G__38537__a.length) {G__38537__a[G__38537__i] = arguments[G__38537__i + 0]; ++G__38537__i;}
  args = new cljs.core.IndexedSeq(G__38537__a,0);
} 
return G__38536__delegate.call(this,args);};
G__38536.cljs$lang$maxFixedArity = 0;
G__38536.cljs$lang$applyTo = (function (arglist__38538){
var args = cljs.core.seq(arglist__38538);
return G__38536__delegate(args);
});
G__38536.cljs$core$IFn$_invoke$arity$variadic = G__38536__delegate;
return G__38536;
})()
;

return null;
});
