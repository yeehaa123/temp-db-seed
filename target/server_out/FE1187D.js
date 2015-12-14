goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35967__i = 0, G__35967__a = new Array(arguments.length -  0);
while (G__35967__i < G__35967__a.length) {G__35967__a[G__35967__i] = arguments[G__35967__i + 0]; ++G__35967__i;}
  args = new cljs.core.IndexedSeq(G__35967__a,0);
} 
return G__35966__delegate.call(this,args);};
G__35966.cljs$lang$maxFixedArity = 0;
G__35966.cljs$lang$applyTo = (function (arglist__35968){
var args = cljs.core.seq(arglist__35968);
return G__35966__delegate(args);
});
G__35966.cljs$core$IFn$_invoke$arity$variadic = G__35966__delegate;
return G__35966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35970__i = 0, G__35970__a = new Array(arguments.length -  0);
while (G__35970__i < G__35970__a.length) {G__35970__a[G__35970__i] = arguments[G__35970__i + 0]; ++G__35970__i;}
  args = new cljs.core.IndexedSeq(G__35970__a,0);
} 
return G__35969__delegate.call(this,args);};
G__35969.cljs$lang$maxFixedArity = 0;
G__35969.cljs$lang$applyTo = (function (arglist__35971){
var args = cljs.core.seq(arglist__35971);
return G__35969__delegate(args);
});
G__35969.cljs$core$IFn$_invoke$arity$variadic = G__35969__delegate;
return G__35969;
})()
;

return null;
});
