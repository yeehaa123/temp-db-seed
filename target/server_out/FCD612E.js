goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36230__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36231__i = 0, G__36231__a = new Array(arguments.length -  0);
while (G__36231__i < G__36231__a.length) {G__36231__a[G__36231__i] = arguments[G__36231__i + 0]; ++G__36231__i;}
  args = new cljs.core.IndexedSeq(G__36231__a,0);
} 
return G__36230__delegate.call(this,args);};
G__36230.cljs$lang$maxFixedArity = 0;
G__36230.cljs$lang$applyTo = (function (arglist__36232){
var args = cljs.core.seq(arglist__36232);
return G__36230__delegate(args);
});
G__36230.cljs$core$IFn$_invoke$arity$variadic = G__36230__delegate;
return G__36230;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36233__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36234__i = 0, G__36234__a = new Array(arguments.length -  0);
while (G__36234__i < G__36234__a.length) {G__36234__a[G__36234__i] = arguments[G__36234__i + 0]; ++G__36234__i;}
  args = new cljs.core.IndexedSeq(G__36234__a,0);
} 
return G__36233__delegate.call(this,args);};
G__36233.cljs$lang$maxFixedArity = 0;
G__36233.cljs$lang$applyTo = (function (arglist__36235){
var args = cljs.core.seq(arglist__36235);
return G__36233__delegate(args);
});
G__36233.cljs$core$IFn$_invoke$arity$variadic = G__36233__delegate;
return G__36233;
})()
;

return null;
});
