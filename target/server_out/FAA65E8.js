goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39865__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39866__i = 0, G__39866__a = new Array(arguments.length -  0);
while (G__39866__i < G__39866__a.length) {G__39866__a[G__39866__i] = arguments[G__39866__i + 0]; ++G__39866__i;}
  args = new cljs.core.IndexedSeq(G__39866__a,0);
} 
return G__39865__delegate.call(this,args);};
G__39865.cljs$lang$maxFixedArity = 0;
G__39865.cljs$lang$applyTo = (function (arglist__39867){
var args = cljs.core.seq(arglist__39867);
return G__39865__delegate(args);
});
G__39865.cljs$core$IFn$_invoke$arity$variadic = G__39865__delegate;
return G__39865;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39868__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39869__i = 0, G__39869__a = new Array(arguments.length -  0);
while (G__39869__i < G__39869__a.length) {G__39869__a[G__39869__i] = arguments[G__39869__i + 0]; ++G__39869__i;}
  args = new cljs.core.IndexedSeq(G__39869__a,0);
} 
return G__39868__delegate.call(this,args);};
G__39868.cljs$lang$maxFixedArity = 0;
G__39868.cljs$lang$applyTo = (function (arglist__39870){
var args = cljs.core.seq(arglist__39870);
return G__39868__delegate(args);
});
G__39868.cljs$core$IFn$_invoke$arity$variadic = G__39868__delegate;
return G__39868;
})()
;

return null;
});
