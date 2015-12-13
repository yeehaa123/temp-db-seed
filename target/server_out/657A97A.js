goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34735__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34736__i = 0, G__34736__a = new Array(arguments.length -  0);
while (G__34736__i < G__34736__a.length) {G__34736__a[G__34736__i] = arguments[G__34736__i + 0]; ++G__34736__i;}
  args = new cljs.core.IndexedSeq(G__34736__a,0);
} 
return G__34735__delegate.call(this,args);};
G__34735.cljs$lang$maxFixedArity = 0;
G__34735.cljs$lang$applyTo = (function (arglist__34737){
var args = cljs.core.seq(arglist__34737);
return G__34735__delegate(args);
});
G__34735.cljs$core$IFn$_invoke$arity$variadic = G__34735__delegate;
return G__34735;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34738__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34739__i = 0, G__34739__a = new Array(arguments.length -  0);
while (G__34739__i < G__34739__a.length) {G__34739__a[G__34739__i] = arguments[G__34739__i + 0]; ++G__34739__i;}
  args = new cljs.core.IndexedSeq(G__34739__a,0);
} 
return G__34738__delegate.call(this,args);};
G__34738.cljs$lang$maxFixedArity = 0;
G__34738.cljs$lang$applyTo = (function (arglist__34740){
var args = cljs.core.seq(arglist__34740);
return G__34738__delegate(args);
});
G__34738.cljs$core$IFn$_invoke$arity$variadic = G__34738__delegate;
return G__34738;
})()
;

return null;
});
