goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38983__i = 0, G__38983__a = new Array(arguments.length -  0);
while (G__38983__i < G__38983__a.length) {G__38983__a[G__38983__i] = arguments[G__38983__i + 0]; ++G__38983__i;}
  args = new cljs.core.IndexedSeq(G__38983__a,0);
} 
return G__38982__delegate.call(this,args);};
G__38982.cljs$lang$maxFixedArity = 0;
G__38982.cljs$lang$applyTo = (function (arglist__38984){
var args = cljs.core.seq(arglist__38984);
return G__38982__delegate(args);
});
G__38982.cljs$core$IFn$_invoke$arity$variadic = G__38982__delegate;
return G__38982;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38985__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38986__i = 0, G__38986__a = new Array(arguments.length -  0);
while (G__38986__i < G__38986__a.length) {G__38986__a[G__38986__i] = arguments[G__38986__i + 0]; ++G__38986__i;}
  args = new cljs.core.IndexedSeq(G__38986__a,0);
} 
return G__38985__delegate.call(this,args);};
G__38985.cljs$lang$maxFixedArity = 0;
G__38985.cljs$lang$applyTo = (function (arglist__38987){
var args = cljs.core.seq(arglist__38987);
return G__38985__delegate(args);
});
G__38985.cljs$core$IFn$_invoke$arity$variadic = G__38985__delegate;
return G__38985;
})()
;

return null;
});
