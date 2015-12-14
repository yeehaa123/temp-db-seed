goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36937__i = 0, G__36937__a = new Array(arguments.length -  0);
while (G__36937__i < G__36937__a.length) {G__36937__a[G__36937__i] = arguments[G__36937__i + 0]; ++G__36937__i;}
  args = new cljs.core.IndexedSeq(G__36937__a,0);
} 
return G__36936__delegate.call(this,args);};
G__36936.cljs$lang$maxFixedArity = 0;
G__36936.cljs$lang$applyTo = (function (arglist__36938){
var args = cljs.core.seq(arglist__36938);
return G__36936__delegate(args);
});
G__36936.cljs$core$IFn$_invoke$arity$variadic = G__36936__delegate;
return G__36936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36940__i = 0, G__36940__a = new Array(arguments.length -  0);
while (G__36940__i < G__36940__a.length) {G__36940__a[G__36940__i] = arguments[G__36940__i + 0]; ++G__36940__i;}
  args = new cljs.core.IndexedSeq(G__36940__a,0);
} 
return G__36939__delegate.call(this,args);};
G__36939.cljs$lang$maxFixedArity = 0;
G__36939.cljs$lang$applyTo = (function (arglist__36941){
var args = cljs.core.seq(arglist__36941);
return G__36939__delegate(args);
});
G__36939.cljs$core$IFn$_invoke$arity$variadic = G__36939__delegate;
return G__36939;
})()
;

return null;
});
