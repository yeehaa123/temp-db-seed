goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34059__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34060__i = 0, G__34060__a = new Array(arguments.length -  0);
while (G__34060__i < G__34060__a.length) {G__34060__a[G__34060__i] = arguments[G__34060__i + 0]; ++G__34060__i;}
  args = new cljs.core.IndexedSeq(G__34060__a,0);
} 
return G__34059__delegate.call(this,args);};
G__34059.cljs$lang$maxFixedArity = 0;
G__34059.cljs$lang$applyTo = (function (arglist__34061){
var args = cljs.core.seq(arglist__34061);
return G__34059__delegate(args);
});
G__34059.cljs$core$IFn$_invoke$arity$variadic = G__34059__delegate;
return G__34059;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34062__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34063__i = 0, G__34063__a = new Array(arguments.length -  0);
while (G__34063__i < G__34063__a.length) {G__34063__a[G__34063__i] = arguments[G__34063__i + 0]; ++G__34063__i;}
  args = new cljs.core.IndexedSeq(G__34063__a,0);
} 
return G__34062__delegate.call(this,args);};
G__34062.cljs$lang$maxFixedArity = 0;
G__34062.cljs$lang$applyTo = (function (arglist__34065){
var args = cljs.core.seq(arglist__34065);
return G__34062__delegate(args);
});
G__34062.cljs$core$IFn$_invoke$arity$variadic = G__34062__delegate;
return G__34062;
})()
;

return null;
});
