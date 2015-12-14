goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36825__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36826__i = 0, G__36826__a = new Array(arguments.length -  0);
while (G__36826__i < G__36826__a.length) {G__36826__a[G__36826__i] = arguments[G__36826__i + 0]; ++G__36826__i;}
  args = new cljs.core.IndexedSeq(G__36826__a,0);
} 
return G__36825__delegate.call(this,args);};
G__36825.cljs$lang$maxFixedArity = 0;
G__36825.cljs$lang$applyTo = (function (arglist__36827){
var args = cljs.core.seq(arglist__36827);
return G__36825__delegate(args);
});
G__36825.cljs$core$IFn$_invoke$arity$variadic = G__36825__delegate;
return G__36825;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36828__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36829__i = 0, G__36829__a = new Array(arguments.length -  0);
while (G__36829__i < G__36829__a.length) {G__36829__a[G__36829__i] = arguments[G__36829__i + 0]; ++G__36829__i;}
  args = new cljs.core.IndexedSeq(G__36829__a,0);
} 
return G__36828__delegate.call(this,args);};
G__36828.cljs$lang$maxFixedArity = 0;
G__36828.cljs$lang$applyTo = (function (arglist__36830){
var args = cljs.core.seq(arglist__36830);
return G__36828__delegate(args);
});
G__36828.cljs$core$IFn$_invoke$arity$variadic = G__36828__delegate;
return G__36828;
})()
;

return null;
});
