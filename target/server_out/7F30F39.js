goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34780__i = 0, G__34780__a = new Array(arguments.length -  0);
while (G__34780__i < G__34780__a.length) {G__34780__a[G__34780__i] = arguments[G__34780__i + 0]; ++G__34780__i;}
  args = new cljs.core.IndexedSeq(G__34780__a,0);
} 
return G__34779__delegate.call(this,args);};
G__34779.cljs$lang$maxFixedArity = 0;
G__34779.cljs$lang$applyTo = (function (arglist__34781){
var args = cljs.core.seq(arglist__34781);
return G__34779__delegate(args);
});
G__34779.cljs$core$IFn$_invoke$arity$variadic = G__34779__delegate;
return G__34779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34783__i = 0, G__34783__a = new Array(arguments.length -  0);
while (G__34783__i < G__34783__a.length) {G__34783__a[G__34783__i] = arguments[G__34783__i + 0]; ++G__34783__i;}
  args = new cljs.core.IndexedSeq(G__34783__a,0);
} 
return G__34782__delegate.call(this,args);};
G__34782.cljs$lang$maxFixedArity = 0;
G__34782.cljs$lang$applyTo = (function (arglist__34784){
var args = cljs.core.seq(arglist__34784);
return G__34782__delegate(args);
});
G__34782.cljs$core$IFn$_invoke$arity$variadic = G__34782__delegate;
return G__34782;
})()
;

return null;
});
