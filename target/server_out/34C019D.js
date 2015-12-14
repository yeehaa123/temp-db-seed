goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40934__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40935__i = 0, G__40935__a = new Array(arguments.length -  0);
while (G__40935__i < G__40935__a.length) {G__40935__a[G__40935__i] = arguments[G__40935__i + 0]; ++G__40935__i;}
  args = new cljs.core.IndexedSeq(G__40935__a,0);
} 
return G__40934__delegate.call(this,args);};
G__40934.cljs$lang$maxFixedArity = 0;
G__40934.cljs$lang$applyTo = (function (arglist__40936){
var args = cljs.core.seq(arglist__40936);
return G__40934__delegate(args);
});
G__40934.cljs$core$IFn$_invoke$arity$variadic = G__40934__delegate;
return G__40934;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40937__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40938__i = 0, G__40938__a = new Array(arguments.length -  0);
while (G__40938__i < G__40938__a.length) {G__40938__a[G__40938__i] = arguments[G__40938__i + 0]; ++G__40938__i;}
  args = new cljs.core.IndexedSeq(G__40938__a,0);
} 
return G__40937__delegate.call(this,args);};
G__40937.cljs$lang$maxFixedArity = 0;
G__40937.cljs$lang$applyTo = (function (arglist__40939){
var args = cljs.core.seq(arglist__40939);
return G__40937__delegate(args);
});
G__40937.cljs$core$IFn$_invoke$arity$variadic = G__40937__delegate;
return G__40937;
})()
;

return null;
});
