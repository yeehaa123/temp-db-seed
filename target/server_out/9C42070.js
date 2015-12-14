goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41054__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41055__i = 0, G__41055__a = new Array(arguments.length -  0);
while (G__41055__i < G__41055__a.length) {G__41055__a[G__41055__i] = arguments[G__41055__i + 0]; ++G__41055__i;}
  args = new cljs.core.IndexedSeq(G__41055__a,0);
} 
return G__41054__delegate.call(this,args);};
G__41054.cljs$lang$maxFixedArity = 0;
G__41054.cljs$lang$applyTo = (function (arglist__41056){
var args = cljs.core.seq(arglist__41056);
return G__41054__delegate(args);
});
G__41054.cljs$core$IFn$_invoke$arity$variadic = G__41054__delegate;
return G__41054;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41057__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41058__i = 0, G__41058__a = new Array(arguments.length -  0);
while (G__41058__i < G__41058__a.length) {G__41058__a[G__41058__i] = arguments[G__41058__i + 0]; ++G__41058__i;}
  args = new cljs.core.IndexedSeq(G__41058__a,0);
} 
return G__41057__delegate.call(this,args);};
G__41057.cljs$lang$maxFixedArity = 0;
G__41057.cljs$lang$applyTo = (function (arglist__41059){
var args = cljs.core.seq(arglist__41059);
return G__41057__delegate(args);
});
G__41057.cljs$core$IFn$_invoke$arity$variadic = G__41057__delegate;
return G__41057;
})()
;

return null;
});
