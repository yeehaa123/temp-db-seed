goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39266__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39267__i = 0, G__39267__a = new Array(arguments.length -  0);
while (G__39267__i < G__39267__a.length) {G__39267__a[G__39267__i] = arguments[G__39267__i + 0]; ++G__39267__i;}
  args = new cljs.core.IndexedSeq(G__39267__a,0);
} 
return G__39266__delegate.call(this,args);};
G__39266.cljs$lang$maxFixedArity = 0;
G__39266.cljs$lang$applyTo = (function (arglist__39268){
var args = cljs.core.seq(arglist__39268);
return G__39266__delegate(args);
});
G__39266.cljs$core$IFn$_invoke$arity$variadic = G__39266__delegate;
return G__39266;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39269__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39270__i = 0, G__39270__a = new Array(arguments.length -  0);
while (G__39270__i < G__39270__a.length) {G__39270__a[G__39270__i] = arguments[G__39270__i + 0]; ++G__39270__i;}
  args = new cljs.core.IndexedSeq(G__39270__a,0);
} 
return G__39269__delegate.call(this,args);};
G__39269.cljs$lang$maxFixedArity = 0;
G__39269.cljs$lang$applyTo = (function (arglist__39271){
var args = cljs.core.seq(arglist__39271);
return G__39269__delegate(args);
});
G__39269.cljs$core$IFn$_invoke$arity$variadic = G__39269__delegate;
return G__39269;
})()
;

return null;
});
