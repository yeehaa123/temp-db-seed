goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34411__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34412__i = 0, G__34412__a = new Array(arguments.length -  0);
while (G__34412__i < G__34412__a.length) {G__34412__a[G__34412__i] = arguments[G__34412__i + 0]; ++G__34412__i;}
  args = new cljs.core.IndexedSeq(G__34412__a,0);
} 
return G__34411__delegate.call(this,args);};
G__34411.cljs$lang$maxFixedArity = 0;
G__34411.cljs$lang$applyTo = (function (arglist__34413){
var args = cljs.core.seq(arglist__34413);
return G__34411__delegate(args);
});
G__34411.cljs$core$IFn$_invoke$arity$variadic = G__34411__delegate;
return G__34411;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34414__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34415__i = 0, G__34415__a = new Array(arguments.length -  0);
while (G__34415__i < G__34415__a.length) {G__34415__a[G__34415__i] = arguments[G__34415__i + 0]; ++G__34415__i;}
  args = new cljs.core.IndexedSeq(G__34415__a,0);
} 
return G__34414__delegate.call(this,args);};
G__34414.cljs$lang$maxFixedArity = 0;
G__34414.cljs$lang$applyTo = (function (arglist__34416){
var args = cljs.core.seq(arglist__34416);
return G__34414__delegate(args);
});
G__34414.cljs$core$IFn$_invoke$arity$variadic = G__34414__delegate;
return G__34414;
})()
;

return null;
});
