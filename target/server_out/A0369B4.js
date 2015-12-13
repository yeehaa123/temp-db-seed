goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34505__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34506__i = 0, G__34506__a = new Array(arguments.length -  0);
while (G__34506__i < G__34506__a.length) {G__34506__a[G__34506__i] = arguments[G__34506__i + 0]; ++G__34506__i;}
  args = new cljs.core.IndexedSeq(G__34506__a,0);
} 
return G__34505__delegate.call(this,args);};
G__34505.cljs$lang$maxFixedArity = 0;
G__34505.cljs$lang$applyTo = (function (arglist__34507){
var args = cljs.core.seq(arglist__34507);
return G__34505__delegate(args);
});
G__34505.cljs$core$IFn$_invoke$arity$variadic = G__34505__delegate;
return G__34505;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34508__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34509__i = 0, G__34509__a = new Array(arguments.length -  0);
while (G__34509__i < G__34509__a.length) {G__34509__a[G__34509__i] = arguments[G__34509__i + 0]; ++G__34509__i;}
  args = new cljs.core.IndexedSeq(G__34509__a,0);
} 
return G__34508__delegate.call(this,args);};
G__34508.cljs$lang$maxFixedArity = 0;
G__34508.cljs$lang$applyTo = (function (arglist__34510){
var args = cljs.core.seq(arglist__34510);
return G__34508__delegate(args);
});
G__34508.cljs$core$IFn$_invoke$arity$variadic = G__34508__delegate;
return G__34508;
})()
;

return null;
});
