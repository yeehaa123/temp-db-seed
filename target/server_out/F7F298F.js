goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44181__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44182__i = 0, G__44182__a = new Array(arguments.length -  0);
while (G__44182__i < G__44182__a.length) {G__44182__a[G__44182__i] = arguments[G__44182__i + 0]; ++G__44182__i;}
  args = new cljs.core.IndexedSeq(G__44182__a,0);
} 
return G__44181__delegate.call(this,args);};
G__44181.cljs$lang$maxFixedArity = 0;
G__44181.cljs$lang$applyTo = (function (arglist__44183){
var args = cljs.core.seq(arglist__44183);
return G__44181__delegate(args);
});
G__44181.cljs$core$IFn$_invoke$arity$variadic = G__44181__delegate;
return G__44181;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44184__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44185__i = 0, G__44185__a = new Array(arguments.length -  0);
while (G__44185__i < G__44185__a.length) {G__44185__a[G__44185__i] = arguments[G__44185__i + 0]; ++G__44185__i;}
  args = new cljs.core.IndexedSeq(G__44185__a,0);
} 
return G__44184__delegate.call(this,args);};
G__44184.cljs$lang$maxFixedArity = 0;
G__44184.cljs$lang$applyTo = (function (arglist__44186){
var args = cljs.core.seq(arglist__44186);
return G__44184__delegate(args);
});
G__44184.cljs$core$IFn$_invoke$arity$variadic = G__44184__delegate;
return G__44184;
})()
;

return null;
});
