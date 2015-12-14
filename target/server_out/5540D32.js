goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38960__i = 0, G__38960__a = new Array(arguments.length -  0);
while (G__38960__i < G__38960__a.length) {G__38960__a[G__38960__i] = arguments[G__38960__i + 0]; ++G__38960__i;}
  args = new cljs.core.IndexedSeq(G__38960__a,0);
} 
return G__38959__delegate.call(this,args);};
G__38959.cljs$lang$maxFixedArity = 0;
G__38959.cljs$lang$applyTo = (function (arglist__38961){
var args = cljs.core.seq(arglist__38961);
return G__38959__delegate(args);
});
G__38959.cljs$core$IFn$_invoke$arity$variadic = G__38959__delegate;
return G__38959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38963__i = 0, G__38963__a = new Array(arguments.length -  0);
while (G__38963__i < G__38963__a.length) {G__38963__a[G__38963__i] = arguments[G__38963__i + 0]; ++G__38963__i;}
  args = new cljs.core.IndexedSeq(G__38963__a,0);
} 
return G__38962__delegate.call(this,args);};
G__38962.cljs$lang$maxFixedArity = 0;
G__38962.cljs$lang$applyTo = (function (arglist__38964){
var args = cljs.core.seq(arglist__38964);
return G__38962__delegate(args);
});
G__38962.cljs$core$IFn$_invoke$arity$variadic = G__38962__delegate;
return G__38962;
})()
;

return null;
});
