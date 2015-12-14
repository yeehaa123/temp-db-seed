goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42789__i = 0, G__42789__a = new Array(arguments.length -  0);
while (G__42789__i < G__42789__a.length) {G__42789__a[G__42789__i] = arguments[G__42789__i + 0]; ++G__42789__i;}
  args = new cljs.core.IndexedSeq(G__42789__a,0);
} 
return G__42788__delegate.call(this,args);};
G__42788.cljs$lang$maxFixedArity = 0;
G__42788.cljs$lang$applyTo = (function (arglist__42790){
var args = cljs.core.seq(arglist__42790);
return G__42788__delegate(args);
});
G__42788.cljs$core$IFn$_invoke$arity$variadic = G__42788__delegate;
return G__42788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42792__i = 0, G__42792__a = new Array(arguments.length -  0);
while (G__42792__i < G__42792__a.length) {G__42792__a[G__42792__i] = arguments[G__42792__i + 0]; ++G__42792__i;}
  args = new cljs.core.IndexedSeq(G__42792__a,0);
} 
return G__42791__delegate.call(this,args);};
G__42791.cljs$lang$maxFixedArity = 0;
G__42791.cljs$lang$applyTo = (function (arglist__42793){
var args = cljs.core.seq(arglist__42793);
return G__42791__delegate(args);
});
G__42791.cljs$core$IFn$_invoke$arity$variadic = G__42791__delegate;
return G__42791;
})()
;

return null;
});
