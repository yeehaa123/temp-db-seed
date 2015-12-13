goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34967__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34968__i = 0, G__34968__a = new Array(arguments.length -  0);
while (G__34968__i < G__34968__a.length) {G__34968__a[G__34968__i] = arguments[G__34968__i + 0]; ++G__34968__i;}
  args = new cljs.core.IndexedSeq(G__34968__a,0);
} 
return G__34967__delegate.call(this,args);};
G__34967.cljs$lang$maxFixedArity = 0;
G__34967.cljs$lang$applyTo = (function (arglist__34969){
var args = cljs.core.seq(arglist__34969);
return G__34967__delegate(args);
});
G__34967.cljs$core$IFn$_invoke$arity$variadic = G__34967__delegate;
return G__34967;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34970__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34971__i = 0, G__34971__a = new Array(arguments.length -  0);
while (G__34971__i < G__34971__a.length) {G__34971__a[G__34971__i] = arguments[G__34971__i + 0]; ++G__34971__i;}
  args = new cljs.core.IndexedSeq(G__34971__a,0);
} 
return G__34970__delegate.call(this,args);};
G__34970.cljs$lang$maxFixedArity = 0;
G__34970.cljs$lang$applyTo = (function (arglist__34972){
var args = cljs.core.seq(arglist__34972);
return G__34970__delegate(args);
});
G__34970.cljs$core$IFn$_invoke$arity$variadic = G__34970__delegate;
return G__34970;
})()
;

return null;
});
