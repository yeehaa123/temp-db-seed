goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43894__i = 0, G__43894__a = new Array(arguments.length -  0);
while (G__43894__i < G__43894__a.length) {G__43894__a[G__43894__i] = arguments[G__43894__i + 0]; ++G__43894__i;}
  args = new cljs.core.IndexedSeq(G__43894__a,0);
} 
return G__43893__delegate.call(this,args);};
G__43893.cljs$lang$maxFixedArity = 0;
G__43893.cljs$lang$applyTo = (function (arglist__43895){
var args = cljs.core.seq(arglist__43895);
return G__43893__delegate(args);
});
G__43893.cljs$core$IFn$_invoke$arity$variadic = G__43893__delegate;
return G__43893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43897__i = 0, G__43897__a = new Array(arguments.length -  0);
while (G__43897__i < G__43897__a.length) {G__43897__a[G__43897__i] = arguments[G__43897__i + 0]; ++G__43897__i;}
  args = new cljs.core.IndexedSeq(G__43897__a,0);
} 
return G__43896__delegate.call(this,args);};
G__43896.cljs$lang$maxFixedArity = 0;
G__43896.cljs$lang$applyTo = (function (arglist__43898){
var args = cljs.core.seq(arglist__43898);
return G__43896__delegate(args);
});
G__43896.cljs$core$IFn$_invoke$arity$variadic = G__43896__delegate;
return G__43896;
})()
;

return null;
});
