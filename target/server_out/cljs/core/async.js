// Compiled by ClojureScript 1.7.107 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args39710 = [];
var len__32340__auto___39716 = arguments.length;
var i__32341__auto___39717 = (0);
while(true){
if((i__32341__auto___39717 < len__32340__auto___39716)){
args39710.push((arguments[i__32341__auto___39717]));

var G__39718 = (i__32341__auto___39717 + (1));
i__32341__auto___39717 = G__39718;
continue;
} else {
}
break;
}

var G__39712 = args39710.length;
switch (G__39712) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39710.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39713 = (function (f,blockable,meta39714){
this.f = f;
this.blockable = blockable;
this.meta39714 = meta39714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39715,meta39714__$1){
var self__ = this;
var _39715__$1 = this;
return (new cljs.core.async.t_cljs$core$async39713(self__.f,self__.blockable,meta39714__$1));
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39715){
var self__ = this;
var _39715__$1 = this;
return self__.meta39714;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39714","meta39714",-616863525,null)], null);
});

cljs.core.async.t_cljs$core$async39713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39713";

cljs.core.async.t_cljs$core$async39713.cljs$lang$ctorPrWriter = (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async39713");
});

cljs.core.async.__GT_t_cljs$core$async39713 = (function cljs$core$async$__GT_t_cljs$core$async39713(f__$1,blockable__$1,meta39714){
return (new cljs.core.async.t_cljs$core$async39713(f__$1,blockable__$1,meta39714));
});

}

return (new cljs.core.async.t_cljs$core$async39713(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args39722 = [];
var len__32340__auto___39725 = arguments.length;
var i__32341__auto___39726 = (0);
while(true){
if((i__32341__auto___39726 < len__32340__auto___39725)){
args39722.push((arguments[i__32341__auto___39726]));

var G__39727 = (i__32341__auto___39726 + (1));
i__32341__auto___39726 = G__39727;
continue;
} else {
}
break;
}

var G__39724 = args39722.length;
switch (G__39724) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39722.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args39729 = [];
var len__32340__auto___39732 = arguments.length;
var i__32341__auto___39733 = (0);
while(true){
if((i__32341__auto___39733 < len__32340__auto___39732)){
args39729.push((arguments[i__32341__auto___39733]));

var G__39734 = (i__32341__auto___39733 + (1));
i__32341__auto___39733 = G__39734;
continue;
} else {
}
break;
}

var G__39731 = args39729.length;
switch (G__39731) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39729.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args39736 = [];
var len__32340__auto___39739 = arguments.length;
var i__32341__auto___39740 = (0);
while(true){
if((i__32341__auto___39740 < len__32340__auto___39739)){
args39736.push((arguments[i__32341__auto___39740]));

var G__39741 = (i__32341__auto___39740 + (1));
i__32341__auto___39740 = G__39741;
continue;
} else {
}
break;
}

var G__39738 = args39736.length;
switch (G__39738) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39736.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39743 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39743);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39743,ret){
return (function (){
return fn1.call(null,val_39743);
});})(val_39743,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args39744 = [];
var len__32340__auto___39747 = arguments.length;
var i__32341__auto___39748 = (0);
while(true){
if((i__32341__auto___39748 < len__32340__auto___39747)){
args39744.push((arguments[i__32341__auto___39748]));

var G__39749 = (i__32341__auto___39748 + (1));
i__32341__auto___39748 = G__39749;
continue;
} else {
}
break;
}

var G__39746 = args39744.length;
switch (G__39746) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39744.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__32185__auto___39751 = n;
var x_39752 = (0);
while(true){
if((x_39752 < n__32185__auto___39751)){
(a[x_39752] = (0));

var G__39753 = (x_39752 + (1));
x_39752 = G__39753;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39754 = (i + (1));
i = G__39754;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39758 = (function (alt_flag,flag,meta39759){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39759 = meta39759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39760,meta39759__$1){
var self__ = this;
var _39760__$1 = this;
return (new cljs.core.async.t_cljs$core$async39758(self__.alt_flag,self__.flag,meta39759__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39760){
var self__ = this;
var _39760__$1 = this;
return self__.meta39759;
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39759","meta39759",1641584741,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39758";

cljs.core.async.t_cljs$core$async39758.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async39758");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39758 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39758(alt_flag__$1,flag__$1,meta39759){
return (new cljs.core.async.t_cljs$core$async39758(alt_flag__$1,flag__$1,meta39759));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39758(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39764 = (function (alt_handler,flag,cb,meta39765){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39765 = meta39765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39766,meta39765__$1){
var self__ = this;
var _39766__$1 = this;
return (new cljs.core.async.t_cljs$core$async39764(self__.alt_handler,self__.flag,self__.cb,meta39765__$1));
});

cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39766){
var self__ = this;
var _39766__$1 = this;
return self__.meta39765;
});

cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39765","meta39765",-119004026,null)], null);
});

cljs.core.async.t_cljs$core$async39764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39764";

cljs.core.async.t_cljs$core$async39764.cljs$lang$ctorPrWriter = (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async39764");
});

cljs.core.async.__GT_t_cljs$core$async39764 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39764(alt_handler__$1,flag__$1,cb__$1,meta39765){
return (new cljs.core.async.t_cljs$core$async39764(alt_handler__$1,flag__$1,cb__$1,meta39765));
});

}

return (new cljs.core.async.t_cljs$core$async39764(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39767_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39767_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39768_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39768_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__31282__auto__ = wport;
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39769 = (i + (1));
i = G__39769;
continue;
}
} else {
return null;
}
break;
}
})();
var or__31282__auto__ = ret;
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__31270__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__31270__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__31270__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__32347__auto__ = [];
var len__32340__auto___39775 = arguments.length;
var i__32341__auto___39776 = (0);
while(true){
if((i__32341__auto___39776 < len__32340__auto___39775)){
args__32347__auto__.push((arguments[i__32341__auto___39776]));

var G__39777 = (i__32341__auto___39776 + (1));
i__32341__auto___39776 = G__39777;
continue;
} else {
}
break;
}

var argseq__32348__auto__ = ((((1) < args__32347__auto__.length))?(new cljs.core.IndexedSeq(args__32347__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32348__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39772){
var map__39773 = p__39772;
var map__39773__$1 = ((((!((map__39773 == null)))?((((map__39773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39773):map__39773);
var opts = map__39773__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39770){
var G__39771 = cljs.core.first.call(null,seq39770);
var seq39770__$1 = cljs.core.next.call(null,seq39770);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39771,seq39770__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args39778 = [];
var len__32340__auto___39828 = arguments.length;
var i__32341__auto___39829 = (0);
while(true){
if((i__32341__auto___39829 < len__32340__auto___39828)){
args39778.push((arguments[i__32341__auto___39829]));

var G__39830 = (i__32341__auto___39829 + (1));
i__32341__auto___39829 = G__39830;
continue;
} else {
}
break;
}

var G__39780 = args39778.length;
switch (G__39780) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39778.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33365__auto___39832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___39832){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___39832){
return (function (state_39804){
var state_val_39805 = (state_39804[(1)]);
if((state_val_39805 === (7))){
var inst_39800 = (state_39804[(2)]);
var state_39804__$1 = state_39804;
var statearr_39806_39833 = state_39804__$1;
(statearr_39806_39833[(2)] = inst_39800);

(statearr_39806_39833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (1))){
var state_39804__$1 = state_39804;
var statearr_39807_39834 = state_39804__$1;
(statearr_39807_39834[(2)] = null);

(statearr_39807_39834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (4))){
var inst_39783 = (state_39804[(7)]);
var inst_39783__$1 = (state_39804[(2)]);
var inst_39784 = (inst_39783__$1 == null);
var state_39804__$1 = (function (){var statearr_39808 = state_39804;
(statearr_39808[(7)] = inst_39783__$1);

return statearr_39808;
})();
if(cljs.core.truth_(inst_39784)){
var statearr_39809_39835 = state_39804__$1;
(statearr_39809_39835[(1)] = (5));

} else {
var statearr_39810_39836 = state_39804__$1;
(statearr_39810_39836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (13))){
var state_39804__$1 = state_39804;
var statearr_39811_39837 = state_39804__$1;
(statearr_39811_39837[(2)] = null);

(statearr_39811_39837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (6))){
var inst_39783 = (state_39804[(7)]);
var state_39804__$1 = state_39804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39804__$1,(11),to,inst_39783);
} else {
if((state_val_39805 === (3))){
var inst_39802 = (state_39804[(2)]);
var state_39804__$1 = state_39804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39804__$1,inst_39802);
} else {
if((state_val_39805 === (12))){
var state_39804__$1 = state_39804;
var statearr_39812_39838 = state_39804__$1;
(statearr_39812_39838[(2)] = null);

(statearr_39812_39838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (2))){
var state_39804__$1 = state_39804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39804__$1,(4),from);
} else {
if((state_val_39805 === (11))){
var inst_39793 = (state_39804[(2)]);
var state_39804__$1 = state_39804;
if(cljs.core.truth_(inst_39793)){
var statearr_39813_39839 = state_39804__$1;
(statearr_39813_39839[(1)] = (12));

} else {
var statearr_39814_39840 = state_39804__$1;
(statearr_39814_39840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (9))){
var state_39804__$1 = state_39804;
var statearr_39815_39841 = state_39804__$1;
(statearr_39815_39841[(2)] = null);

(statearr_39815_39841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (5))){
var state_39804__$1 = state_39804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39816_39842 = state_39804__$1;
(statearr_39816_39842[(1)] = (8));

} else {
var statearr_39817_39843 = state_39804__$1;
(statearr_39817_39843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (14))){
var inst_39798 = (state_39804[(2)]);
var state_39804__$1 = state_39804;
var statearr_39818_39844 = state_39804__$1;
(statearr_39818_39844[(2)] = inst_39798);

(statearr_39818_39844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (10))){
var inst_39790 = (state_39804[(2)]);
var state_39804__$1 = state_39804;
var statearr_39819_39845 = state_39804__$1;
(statearr_39819_39845[(2)] = inst_39790);

(statearr_39819_39845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39805 === (8))){
var inst_39787 = cljs.core.async.close_BANG_.call(null,to);
var state_39804__$1 = state_39804;
var statearr_39820_39846 = state_39804__$1;
(statearr_39820_39846[(2)] = inst_39787);

(statearr_39820_39846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___39832))
;
return ((function (switch__33300__auto__,c__33365__auto___39832){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_39824 = [null,null,null,null,null,null,null,null];
(statearr_39824[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_39824[(1)] = (1));

return statearr_39824;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_39804){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_39804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e39825){if((e39825 instanceof Object)){
var ex__33304__auto__ = e39825;
var statearr_39826_39847 = state_39804;
(statearr_39826_39847[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39848 = state_39804;
state_39804 = G__39848;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_39804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_39804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___39832))
})();
var state__33367__auto__ = (function (){var statearr_39827 = f__33366__auto__.call(null);
(statearr_39827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___39832);

return statearr_39827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___39832))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40032){
var vec__40033 = p__40032;
var v = cljs.core.nth.call(null,vec__40033,(0),null);
var p = cljs.core.nth.call(null,vec__40033,(1),null);
var job = vec__40033;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33365__auto___40215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results){
return (function (state_40038){
var state_val_40039 = (state_40038[(1)]);
if((state_val_40039 === (1))){
var state_40038__$1 = state_40038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40038__$1,(2),res,v);
} else {
if((state_val_40039 === (2))){
var inst_40035 = (state_40038[(2)]);
var inst_40036 = cljs.core.async.close_BANG_.call(null,res);
var state_40038__$1 = (function (){var statearr_40040 = state_40038;
(statearr_40040[(7)] = inst_40035);

return statearr_40040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40038__$1,inst_40036);
} else {
return null;
}
}
});})(c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results))
;
return ((function (switch__33300__auto__,c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_40044 = [null,null,null,null,null,null,null,null];
(statearr_40044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__);

(statearr_40044[(1)] = (1));

return statearr_40044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1 = (function (state_40038){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40045){if((e40045 instanceof Object)){
var ex__33304__auto__ = e40045;
var statearr_40046_40216 = state_40038;
(statearr_40046_40216[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40217 = state_40038;
state_40038 = G__40217;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = function(state_40038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1.call(this,state_40038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results))
})();
var state__33367__auto__ = (function (){var statearr_40047 = f__33366__auto__.call(null);
(statearr_40047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40215);

return statearr_40047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___40215,res,vec__40033,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40048){
var vec__40049 = p__40048;
var v = cljs.core.nth.call(null,vec__40049,(0),null);
var p = cljs.core.nth.call(null,vec__40049,(1),null);
var job = vec__40049;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__32185__auto___40218 = n;
var __40219 = (0);
while(true){
if((__40219 < n__32185__auto___40218)){
var G__40050_40220 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40050_40220) {
case "compute":
var c__33365__auto___40222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40219,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (__40219,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function (state_40063){
var state_val_40064 = (state_40063[(1)]);
if((state_val_40064 === (1))){
var state_40063__$1 = state_40063;
var statearr_40065_40223 = state_40063__$1;
(statearr_40065_40223[(2)] = null);

(statearr_40065_40223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (2))){
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40063__$1,(4),jobs);
} else {
if((state_val_40064 === (3))){
var inst_40061 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40063__$1,inst_40061);
} else {
if((state_val_40064 === (4))){
var inst_40053 = (state_40063[(2)]);
var inst_40054 = process.call(null,inst_40053);
var state_40063__$1 = state_40063;
if(cljs.core.truth_(inst_40054)){
var statearr_40066_40224 = state_40063__$1;
(statearr_40066_40224[(1)] = (5));

} else {
var statearr_40067_40225 = state_40063__$1;
(statearr_40067_40225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (5))){
var state_40063__$1 = state_40063;
var statearr_40068_40226 = state_40063__$1;
(statearr_40068_40226[(2)] = null);

(statearr_40068_40226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (6))){
var state_40063__$1 = state_40063;
var statearr_40069_40227 = state_40063__$1;
(statearr_40069_40227[(2)] = null);

(statearr_40069_40227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (7))){
var inst_40059 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40070_40228 = state_40063__$1;
(statearr_40070_40228[(2)] = inst_40059);

(statearr_40070_40228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40219,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
;
return ((function (__40219,switch__33300__auto__,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_40074 = [null,null,null,null,null,null,null];
(statearr_40074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__);

(statearr_40074[(1)] = (1));

return statearr_40074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1 = (function (state_40063){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40075){if((e40075 instanceof Object)){
var ex__33304__auto__ = e40075;
var statearr_40076_40229 = state_40063;
(statearr_40076_40229[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40230 = state_40063;
state_40063 = G__40230;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = function(state_40063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1.call(this,state_40063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__;
})()
;})(__40219,switch__33300__auto__,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
})();
var state__33367__auto__ = (function (){var statearr_40077 = f__33366__auto__.call(null);
(statearr_40077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40222);

return statearr_40077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(__40219,c__33365__auto___40222,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
);


break;
case "async":
var c__33365__auto___40231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40219,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (__40219,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function (state_40090){
var state_val_40091 = (state_40090[(1)]);
if((state_val_40091 === (1))){
var state_40090__$1 = state_40090;
var statearr_40092_40232 = state_40090__$1;
(statearr_40092_40232[(2)] = null);

(statearr_40092_40232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (2))){
var state_40090__$1 = state_40090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40090__$1,(4),jobs);
} else {
if((state_val_40091 === (3))){
var inst_40088 = (state_40090[(2)]);
var state_40090__$1 = state_40090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40090__$1,inst_40088);
} else {
if((state_val_40091 === (4))){
var inst_40080 = (state_40090[(2)]);
var inst_40081 = async.call(null,inst_40080);
var state_40090__$1 = state_40090;
if(cljs.core.truth_(inst_40081)){
var statearr_40093_40233 = state_40090__$1;
(statearr_40093_40233[(1)] = (5));

} else {
var statearr_40094_40234 = state_40090__$1;
(statearr_40094_40234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (5))){
var state_40090__$1 = state_40090;
var statearr_40095_40235 = state_40090__$1;
(statearr_40095_40235[(2)] = null);

(statearr_40095_40235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (6))){
var state_40090__$1 = state_40090;
var statearr_40096_40236 = state_40090__$1;
(statearr_40096_40236[(2)] = null);

(statearr_40096_40236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (7))){
var inst_40086 = (state_40090[(2)]);
var state_40090__$1 = state_40090;
var statearr_40097_40237 = state_40090__$1;
(statearr_40097_40237[(2)] = inst_40086);

(statearr_40097_40237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40219,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
;
return ((function (__40219,switch__33300__auto__,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_40101 = [null,null,null,null,null,null,null];
(statearr_40101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__);

(statearr_40101[(1)] = (1));

return statearr_40101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1 = (function (state_40090){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40102){if((e40102 instanceof Object)){
var ex__33304__auto__ = e40102;
var statearr_40103_40238 = state_40090;
(statearr_40103_40238[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40239 = state_40090;
state_40090 = G__40239;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = function(state_40090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1.call(this,state_40090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__;
})()
;})(__40219,switch__33300__auto__,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
})();
var state__33367__auto__ = (function (){var statearr_40104 = f__33366__auto__.call(null);
(statearr_40104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40231);

return statearr_40104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(__40219,c__33365__auto___40231,G__40050_40220,n__32185__auto___40218,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40240 = (__40219 + (1));
__40219 = G__40240;
continue;
} else {
}
break;
}

var c__33365__auto___40241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___40241,jobs,results,process,async){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___40241,jobs,results,process,async){
return (function (state_40126){
var state_val_40127 = (state_40126[(1)]);
if((state_val_40127 === (1))){
var state_40126__$1 = state_40126;
var statearr_40128_40242 = state_40126__$1;
(statearr_40128_40242[(2)] = null);

(statearr_40128_40242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40127 === (2))){
var state_40126__$1 = state_40126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40126__$1,(4),from);
} else {
if((state_val_40127 === (3))){
var inst_40124 = (state_40126[(2)]);
var state_40126__$1 = state_40126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40126__$1,inst_40124);
} else {
if((state_val_40127 === (4))){
var inst_40107 = (state_40126[(7)]);
var inst_40107__$1 = (state_40126[(2)]);
var inst_40108 = (inst_40107__$1 == null);
var state_40126__$1 = (function (){var statearr_40129 = state_40126;
(statearr_40129[(7)] = inst_40107__$1);

return statearr_40129;
})();
if(cljs.core.truth_(inst_40108)){
var statearr_40130_40243 = state_40126__$1;
(statearr_40130_40243[(1)] = (5));

} else {
var statearr_40131_40244 = state_40126__$1;
(statearr_40131_40244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40127 === (5))){
var inst_40110 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40126__$1 = state_40126;
var statearr_40132_40245 = state_40126__$1;
(statearr_40132_40245[(2)] = inst_40110);

(statearr_40132_40245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40127 === (6))){
var inst_40112 = (state_40126[(8)]);
var inst_40107 = (state_40126[(7)]);
var inst_40112__$1 = cljs.core.async.chan.call(null,(1));
var inst_40113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40114 = [inst_40107,inst_40112__$1];
var inst_40115 = (new cljs.core.PersistentVector(null,2,(5),inst_40113,inst_40114,null));
var state_40126__$1 = (function (){var statearr_40133 = state_40126;
(statearr_40133[(8)] = inst_40112__$1);

return statearr_40133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40126__$1,(8),jobs,inst_40115);
} else {
if((state_val_40127 === (7))){
var inst_40122 = (state_40126[(2)]);
var state_40126__$1 = state_40126;
var statearr_40134_40246 = state_40126__$1;
(statearr_40134_40246[(2)] = inst_40122);

(statearr_40134_40246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40127 === (8))){
var inst_40112 = (state_40126[(8)]);
var inst_40117 = (state_40126[(2)]);
var state_40126__$1 = (function (){var statearr_40135 = state_40126;
(statearr_40135[(9)] = inst_40117);

return statearr_40135;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40126__$1,(9),results,inst_40112);
} else {
if((state_val_40127 === (9))){
var inst_40119 = (state_40126[(2)]);
var state_40126__$1 = (function (){var statearr_40136 = state_40126;
(statearr_40136[(10)] = inst_40119);

return statearr_40136;
})();
var statearr_40137_40247 = state_40126__$1;
(statearr_40137_40247[(2)] = null);

(statearr_40137_40247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___40241,jobs,results,process,async))
;
return ((function (switch__33300__auto__,c__33365__auto___40241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_40141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__);

(statearr_40141[(1)] = (1));

return statearr_40141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1 = (function (state_40126){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40142){if((e40142 instanceof Object)){
var ex__33304__auto__ = e40142;
var statearr_40143_40248 = state_40126;
(statearr_40143_40248[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40249 = state_40126;
state_40126 = G__40249;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = function(state_40126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1.call(this,state_40126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___40241,jobs,results,process,async))
})();
var state__33367__auto__ = (function (){var statearr_40144 = f__33366__auto__.call(null);
(statearr_40144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40241);

return statearr_40144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___40241,jobs,results,process,async))
);


var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__,jobs,results,process,async){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__,jobs,results,process,async){
return (function (state_40182){
var state_val_40183 = (state_40182[(1)]);
if((state_val_40183 === (7))){
var inst_40178 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
var statearr_40184_40250 = state_40182__$1;
(statearr_40184_40250[(2)] = inst_40178);

(statearr_40184_40250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (20))){
var state_40182__$1 = state_40182;
var statearr_40185_40251 = state_40182__$1;
(statearr_40185_40251[(2)] = null);

(statearr_40185_40251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (1))){
var state_40182__$1 = state_40182;
var statearr_40186_40252 = state_40182__$1;
(statearr_40186_40252[(2)] = null);

(statearr_40186_40252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (4))){
var inst_40147 = (state_40182[(7)]);
var inst_40147__$1 = (state_40182[(2)]);
var inst_40148 = (inst_40147__$1 == null);
var state_40182__$1 = (function (){var statearr_40187 = state_40182;
(statearr_40187[(7)] = inst_40147__$1);

return statearr_40187;
})();
if(cljs.core.truth_(inst_40148)){
var statearr_40188_40253 = state_40182__$1;
(statearr_40188_40253[(1)] = (5));

} else {
var statearr_40189_40254 = state_40182__$1;
(statearr_40189_40254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (15))){
var inst_40160 = (state_40182[(8)]);
var state_40182__$1 = state_40182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40182__$1,(18),to,inst_40160);
} else {
if((state_val_40183 === (21))){
var inst_40173 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
var statearr_40190_40255 = state_40182__$1;
(statearr_40190_40255[(2)] = inst_40173);

(statearr_40190_40255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (13))){
var inst_40175 = (state_40182[(2)]);
var state_40182__$1 = (function (){var statearr_40191 = state_40182;
(statearr_40191[(9)] = inst_40175);

return statearr_40191;
})();
var statearr_40192_40256 = state_40182__$1;
(statearr_40192_40256[(2)] = null);

(statearr_40192_40256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (6))){
var inst_40147 = (state_40182[(7)]);
var state_40182__$1 = state_40182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40182__$1,(11),inst_40147);
} else {
if((state_val_40183 === (17))){
var inst_40168 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
if(cljs.core.truth_(inst_40168)){
var statearr_40193_40257 = state_40182__$1;
(statearr_40193_40257[(1)] = (19));

} else {
var statearr_40194_40258 = state_40182__$1;
(statearr_40194_40258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (3))){
var inst_40180 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40182__$1,inst_40180);
} else {
if((state_val_40183 === (12))){
var inst_40157 = (state_40182[(10)]);
var state_40182__$1 = state_40182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40182__$1,(14),inst_40157);
} else {
if((state_val_40183 === (2))){
var state_40182__$1 = state_40182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40182__$1,(4),results);
} else {
if((state_val_40183 === (19))){
var state_40182__$1 = state_40182;
var statearr_40195_40259 = state_40182__$1;
(statearr_40195_40259[(2)] = null);

(statearr_40195_40259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (11))){
var inst_40157 = (state_40182[(2)]);
var state_40182__$1 = (function (){var statearr_40196 = state_40182;
(statearr_40196[(10)] = inst_40157);

return statearr_40196;
})();
var statearr_40197_40260 = state_40182__$1;
(statearr_40197_40260[(2)] = null);

(statearr_40197_40260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (9))){
var state_40182__$1 = state_40182;
var statearr_40198_40261 = state_40182__$1;
(statearr_40198_40261[(2)] = null);

(statearr_40198_40261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (5))){
var state_40182__$1 = state_40182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40199_40262 = state_40182__$1;
(statearr_40199_40262[(1)] = (8));

} else {
var statearr_40200_40263 = state_40182__$1;
(statearr_40200_40263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (14))){
var inst_40162 = (state_40182[(11)]);
var inst_40160 = (state_40182[(8)]);
var inst_40160__$1 = (state_40182[(2)]);
var inst_40161 = (inst_40160__$1 == null);
var inst_40162__$1 = cljs.core.not.call(null,inst_40161);
var state_40182__$1 = (function (){var statearr_40201 = state_40182;
(statearr_40201[(11)] = inst_40162__$1);

(statearr_40201[(8)] = inst_40160__$1);

return statearr_40201;
})();
if(inst_40162__$1){
var statearr_40202_40264 = state_40182__$1;
(statearr_40202_40264[(1)] = (15));

} else {
var statearr_40203_40265 = state_40182__$1;
(statearr_40203_40265[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (16))){
var inst_40162 = (state_40182[(11)]);
var state_40182__$1 = state_40182;
var statearr_40204_40266 = state_40182__$1;
(statearr_40204_40266[(2)] = inst_40162);

(statearr_40204_40266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (10))){
var inst_40154 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
var statearr_40205_40267 = state_40182__$1;
(statearr_40205_40267[(2)] = inst_40154);

(statearr_40205_40267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (18))){
var inst_40165 = (state_40182[(2)]);
var state_40182__$1 = state_40182;
var statearr_40206_40268 = state_40182__$1;
(statearr_40206_40268[(2)] = inst_40165);

(statearr_40206_40268[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40183 === (8))){
var inst_40151 = cljs.core.async.close_BANG_.call(null,to);
var state_40182__$1 = state_40182;
var statearr_40207_40269 = state_40182__$1;
(statearr_40207_40269[(2)] = inst_40151);

(statearr_40207_40269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__,jobs,results,process,async))
;
return ((function (switch__33300__auto__,c__33365__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_40211 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__);

(statearr_40211[(1)] = (1));

return statearr_40211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1 = (function (state_40182){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40212){if((e40212 instanceof Object)){
var ex__33304__auto__ = e40212;
var statearr_40213_40270 = state_40182;
(statearr_40213_40270[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40271 = state_40182;
state_40182 = G__40271;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__ = function(state_40182){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1.call(this,state_40182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__,jobs,results,process,async))
})();
var state__33367__auto__ = (function (){var statearr_40214 = f__33366__auto__.call(null);
(statearr_40214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_40214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__,jobs,results,process,async))
);

return c__33365__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args40272 = [];
var len__32340__auto___40275 = arguments.length;
var i__32341__auto___40276 = (0);
while(true){
if((i__32341__auto___40276 < len__32340__auto___40275)){
args40272.push((arguments[i__32341__auto___40276]));

var G__40277 = (i__32341__auto___40276 + (1));
i__32341__auto___40276 = G__40277;
continue;
} else {
}
break;
}

var G__40274 = args40272.length;
switch (G__40274) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40272.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args40279 = [];
var len__32340__auto___40282 = arguments.length;
var i__32341__auto___40283 = (0);
while(true){
if((i__32341__auto___40283 < len__32340__auto___40282)){
args40279.push((arguments[i__32341__auto___40283]));

var G__40284 = (i__32341__auto___40283 + (1));
i__32341__auto___40283 = G__40284;
continue;
} else {
}
break;
}

var G__40281 = args40279.length;
switch (G__40281) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40279.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args40286 = [];
var len__32340__auto___40339 = arguments.length;
var i__32341__auto___40340 = (0);
while(true){
if((i__32341__auto___40340 < len__32340__auto___40339)){
args40286.push((arguments[i__32341__auto___40340]));

var G__40341 = (i__32341__auto___40340 + (1));
i__32341__auto___40340 = G__40341;
continue;
} else {
}
break;
}

var G__40288 = args40286.length;
switch (G__40288) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40286.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33365__auto___40343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___40343,tc,fc){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___40343,tc,fc){
return (function (state_40314){
var state_val_40315 = (state_40314[(1)]);
if((state_val_40315 === (7))){
var inst_40310 = (state_40314[(2)]);
var state_40314__$1 = state_40314;
var statearr_40316_40344 = state_40314__$1;
(statearr_40316_40344[(2)] = inst_40310);

(statearr_40316_40344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (1))){
var state_40314__$1 = state_40314;
var statearr_40317_40345 = state_40314__$1;
(statearr_40317_40345[(2)] = null);

(statearr_40317_40345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (4))){
var inst_40291 = (state_40314[(7)]);
var inst_40291__$1 = (state_40314[(2)]);
var inst_40292 = (inst_40291__$1 == null);
var state_40314__$1 = (function (){var statearr_40318 = state_40314;
(statearr_40318[(7)] = inst_40291__$1);

return statearr_40318;
})();
if(cljs.core.truth_(inst_40292)){
var statearr_40319_40346 = state_40314__$1;
(statearr_40319_40346[(1)] = (5));

} else {
var statearr_40320_40347 = state_40314__$1;
(statearr_40320_40347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (13))){
var state_40314__$1 = state_40314;
var statearr_40321_40348 = state_40314__$1;
(statearr_40321_40348[(2)] = null);

(statearr_40321_40348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (6))){
var inst_40291 = (state_40314[(7)]);
var inst_40297 = p.call(null,inst_40291);
var state_40314__$1 = state_40314;
if(cljs.core.truth_(inst_40297)){
var statearr_40322_40349 = state_40314__$1;
(statearr_40322_40349[(1)] = (9));

} else {
var statearr_40323_40350 = state_40314__$1;
(statearr_40323_40350[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (3))){
var inst_40312 = (state_40314[(2)]);
var state_40314__$1 = state_40314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40314__$1,inst_40312);
} else {
if((state_val_40315 === (12))){
var state_40314__$1 = state_40314;
var statearr_40324_40351 = state_40314__$1;
(statearr_40324_40351[(2)] = null);

(statearr_40324_40351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (2))){
var state_40314__$1 = state_40314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40314__$1,(4),ch);
} else {
if((state_val_40315 === (11))){
var inst_40291 = (state_40314[(7)]);
var inst_40301 = (state_40314[(2)]);
var state_40314__$1 = state_40314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40314__$1,(8),inst_40301,inst_40291);
} else {
if((state_val_40315 === (9))){
var state_40314__$1 = state_40314;
var statearr_40325_40352 = state_40314__$1;
(statearr_40325_40352[(2)] = tc);

(statearr_40325_40352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (5))){
var inst_40294 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40295 = cljs.core.async.close_BANG_.call(null,fc);
var state_40314__$1 = (function (){var statearr_40326 = state_40314;
(statearr_40326[(8)] = inst_40294);

return statearr_40326;
})();
var statearr_40327_40353 = state_40314__$1;
(statearr_40327_40353[(2)] = inst_40295);

(statearr_40327_40353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (14))){
var inst_40308 = (state_40314[(2)]);
var state_40314__$1 = state_40314;
var statearr_40328_40354 = state_40314__$1;
(statearr_40328_40354[(2)] = inst_40308);

(statearr_40328_40354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (10))){
var state_40314__$1 = state_40314;
var statearr_40329_40355 = state_40314__$1;
(statearr_40329_40355[(2)] = fc);

(statearr_40329_40355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40315 === (8))){
var inst_40303 = (state_40314[(2)]);
var state_40314__$1 = state_40314;
if(cljs.core.truth_(inst_40303)){
var statearr_40330_40356 = state_40314__$1;
(statearr_40330_40356[(1)] = (12));

} else {
var statearr_40331_40357 = state_40314__$1;
(statearr_40331_40357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___40343,tc,fc))
;
return ((function (switch__33300__auto__,c__33365__auto___40343,tc,fc){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_40335 = [null,null,null,null,null,null,null,null,null];
(statearr_40335[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_40335[(1)] = (1));

return statearr_40335;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_40314){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40336){if((e40336 instanceof Object)){
var ex__33304__auto__ = e40336;
var statearr_40337_40358 = state_40314;
(statearr_40337_40358[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40359 = state_40314;
state_40314 = G__40359;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_40314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_40314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___40343,tc,fc))
})();
var state__33367__auto__ = (function (){var statearr_40338 = f__33366__auto__.call(null);
(statearr_40338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40343);

return statearr_40338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___40343,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_40423){
var state_val_40424 = (state_40423[(1)]);
if((state_val_40424 === (7))){
var inst_40419 = (state_40423[(2)]);
var state_40423__$1 = state_40423;
var statearr_40425_40446 = state_40423__$1;
(statearr_40425_40446[(2)] = inst_40419);

(statearr_40425_40446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (1))){
var inst_40403 = init;
var state_40423__$1 = (function (){var statearr_40426 = state_40423;
(statearr_40426[(7)] = inst_40403);

return statearr_40426;
})();
var statearr_40427_40447 = state_40423__$1;
(statearr_40427_40447[(2)] = null);

(statearr_40427_40447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (4))){
var inst_40406 = (state_40423[(8)]);
var inst_40406__$1 = (state_40423[(2)]);
var inst_40407 = (inst_40406__$1 == null);
var state_40423__$1 = (function (){var statearr_40428 = state_40423;
(statearr_40428[(8)] = inst_40406__$1);

return statearr_40428;
})();
if(cljs.core.truth_(inst_40407)){
var statearr_40429_40448 = state_40423__$1;
(statearr_40429_40448[(1)] = (5));

} else {
var statearr_40430_40449 = state_40423__$1;
(statearr_40430_40449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (6))){
var inst_40406 = (state_40423[(8)]);
var inst_40410 = (state_40423[(9)]);
var inst_40403 = (state_40423[(7)]);
var inst_40410__$1 = f.call(null,inst_40403,inst_40406);
var inst_40411 = cljs.core.reduced_QMARK_.call(null,inst_40410__$1);
var state_40423__$1 = (function (){var statearr_40431 = state_40423;
(statearr_40431[(9)] = inst_40410__$1);

return statearr_40431;
})();
if(inst_40411){
var statearr_40432_40450 = state_40423__$1;
(statearr_40432_40450[(1)] = (8));

} else {
var statearr_40433_40451 = state_40423__$1;
(statearr_40433_40451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (3))){
var inst_40421 = (state_40423[(2)]);
var state_40423__$1 = state_40423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40423__$1,inst_40421);
} else {
if((state_val_40424 === (2))){
var state_40423__$1 = state_40423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40423__$1,(4),ch);
} else {
if((state_val_40424 === (9))){
var inst_40410 = (state_40423[(9)]);
var inst_40403 = inst_40410;
var state_40423__$1 = (function (){var statearr_40434 = state_40423;
(statearr_40434[(7)] = inst_40403);

return statearr_40434;
})();
var statearr_40435_40452 = state_40423__$1;
(statearr_40435_40452[(2)] = null);

(statearr_40435_40452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (5))){
var inst_40403 = (state_40423[(7)]);
var state_40423__$1 = state_40423;
var statearr_40436_40453 = state_40423__$1;
(statearr_40436_40453[(2)] = inst_40403);

(statearr_40436_40453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (10))){
var inst_40417 = (state_40423[(2)]);
var state_40423__$1 = state_40423;
var statearr_40437_40454 = state_40423__$1;
(statearr_40437_40454[(2)] = inst_40417);

(statearr_40437_40454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40424 === (8))){
var inst_40410 = (state_40423[(9)]);
var inst_40413 = cljs.core.deref.call(null,inst_40410);
var state_40423__$1 = state_40423;
var statearr_40438_40455 = state_40423__$1;
(statearr_40438_40455[(2)] = inst_40413);

(statearr_40438_40455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33301__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33301__auto____0 = (function (){
var statearr_40442 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40442[(0)] = cljs$core$async$reduce_$_state_machine__33301__auto__);

(statearr_40442[(1)] = (1));

return statearr_40442;
});
var cljs$core$async$reduce_$_state_machine__33301__auto____1 = (function (state_40423){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40443){if((e40443 instanceof Object)){
var ex__33304__auto__ = e40443;
var statearr_40444_40456 = state_40423;
(statearr_40444_40456[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40457 = state_40423;
state_40423 = G__40457;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33301__auto__ = function(state_40423){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33301__auto____1.call(this,state_40423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33301__auto____0;
cljs$core$async$reduce_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33301__auto____1;
return cljs$core$async$reduce_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_40445 = f__33366__auto__.call(null);
(statearr_40445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_40445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args40458 = [];
var len__32340__auto___40510 = arguments.length;
var i__32341__auto___40511 = (0);
while(true){
if((i__32341__auto___40511 < len__32340__auto___40510)){
args40458.push((arguments[i__32341__auto___40511]));

var G__40512 = (i__32341__auto___40511 + (1));
i__32341__auto___40511 = G__40512;
continue;
} else {
}
break;
}

var G__40460 = args40458.length;
switch (G__40460) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40458.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_40485){
var state_val_40486 = (state_40485[(1)]);
if((state_val_40486 === (7))){
var inst_40467 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40487_40514 = state_40485__$1;
(statearr_40487_40514[(2)] = inst_40467);

(statearr_40487_40514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (1))){
var inst_40461 = cljs.core.seq.call(null,coll);
var inst_40462 = inst_40461;
var state_40485__$1 = (function (){var statearr_40488 = state_40485;
(statearr_40488[(7)] = inst_40462);

return statearr_40488;
})();
var statearr_40489_40515 = state_40485__$1;
(statearr_40489_40515[(2)] = null);

(statearr_40489_40515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (4))){
var inst_40462 = (state_40485[(7)]);
var inst_40465 = cljs.core.first.call(null,inst_40462);
var state_40485__$1 = state_40485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40485__$1,(7),ch,inst_40465);
} else {
if((state_val_40486 === (13))){
var inst_40479 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40490_40516 = state_40485__$1;
(statearr_40490_40516[(2)] = inst_40479);

(statearr_40490_40516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (6))){
var inst_40470 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40470)){
var statearr_40491_40517 = state_40485__$1;
(statearr_40491_40517[(1)] = (8));

} else {
var statearr_40492_40518 = state_40485__$1;
(statearr_40492_40518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (3))){
var inst_40483 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40485__$1,inst_40483);
} else {
if((state_val_40486 === (12))){
var state_40485__$1 = state_40485;
var statearr_40493_40519 = state_40485__$1;
(statearr_40493_40519[(2)] = null);

(statearr_40493_40519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (2))){
var inst_40462 = (state_40485[(7)]);
var state_40485__$1 = state_40485;
if(cljs.core.truth_(inst_40462)){
var statearr_40494_40520 = state_40485__$1;
(statearr_40494_40520[(1)] = (4));

} else {
var statearr_40495_40521 = state_40485__$1;
(statearr_40495_40521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (11))){
var inst_40476 = cljs.core.async.close_BANG_.call(null,ch);
var state_40485__$1 = state_40485;
var statearr_40496_40522 = state_40485__$1;
(statearr_40496_40522[(2)] = inst_40476);

(statearr_40496_40522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (9))){
var state_40485__$1 = state_40485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40497_40523 = state_40485__$1;
(statearr_40497_40523[(1)] = (11));

} else {
var statearr_40498_40524 = state_40485__$1;
(statearr_40498_40524[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (5))){
var inst_40462 = (state_40485[(7)]);
var state_40485__$1 = state_40485;
var statearr_40499_40525 = state_40485__$1;
(statearr_40499_40525[(2)] = inst_40462);

(statearr_40499_40525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (10))){
var inst_40481 = (state_40485[(2)]);
var state_40485__$1 = state_40485;
var statearr_40500_40526 = state_40485__$1;
(statearr_40500_40526[(2)] = inst_40481);

(statearr_40500_40526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40486 === (8))){
var inst_40462 = (state_40485[(7)]);
var inst_40472 = cljs.core.next.call(null,inst_40462);
var inst_40462__$1 = inst_40472;
var state_40485__$1 = (function (){var statearr_40501 = state_40485;
(statearr_40501[(7)] = inst_40462__$1);

return statearr_40501;
})();
var statearr_40502_40527 = state_40485__$1;
(statearr_40502_40527[(2)] = null);

(statearr_40502_40527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_40506 = [null,null,null,null,null,null,null,null];
(statearr_40506[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_40506[(1)] = (1));

return statearr_40506;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_40485){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40507){if((e40507 instanceof Object)){
var ex__33304__auto__ = e40507;
var statearr_40508_40528 = state_40485;
(statearr_40508_40528[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40529 = state_40485;
state_40485 = G__40529;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_40485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_40485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_40509 = f__33366__auto__.call(null);
(statearr_40509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_40509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31937__auto__ = (((_ == null))?null:_);
var m__31938__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,_);
} else {
var m__31938__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31938__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,ch);
} else {
var m__31938__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m);
} else {
var m__31938__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40751 = (function (mult,ch,cs,meta40752){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40752 = meta40752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40753,meta40752__$1){
var self__ = this;
var _40753__$1 = this;
return (new cljs.core.async.t_cljs$core$async40751(self__.mult,self__.ch,self__.cs,meta40752__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40753){
var self__ = this;
var _40753__$1 = this;
return self__.meta40752;
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40752","meta40752",-1835651977,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40751";

cljs.core.async.t_cljs$core$async40751.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async40751");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40751 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40751(mult__$1,ch__$1,cs__$1,meta40752){
return (new cljs.core.async.t_cljs$core$async40751(mult__$1,ch__$1,cs__$1,meta40752));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40751(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33365__auto___40972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___40972,cs,m,dchan,dctr,done){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___40972,cs,m,dchan,dctr,done){
return (function (state_40884){
var state_val_40885 = (state_40884[(1)]);
if((state_val_40885 === (7))){
var inst_40880 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40886_40973 = state_40884__$1;
(statearr_40886_40973[(2)] = inst_40880);

(statearr_40886_40973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (20))){
var inst_40785 = (state_40884[(7)]);
var inst_40795 = cljs.core.first.call(null,inst_40785);
var inst_40796 = cljs.core.nth.call(null,inst_40795,(0),null);
var inst_40797 = cljs.core.nth.call(null,inst_40795,(1),null);
var state_40884__$1 = (function (){var statearr_40887 = state_40884;
(statearr_40887[(8)] = inst_40796);

return statearr_40887;
})();
if(cljs.core.truth_(inst_40797)){
var statearr_40888_40974 = state_40884__$1;
(statearr_40888_40974[(1)] = (22));

} else {
var statearr_40889_40975 = state_40884__$1;
(statearr_40889_40975[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (27))){
var inst_40756 = (state_40884[(9)]);
var inst_40827 = (state_40884[(10)]);
var inst_40832 = (state_40884[(11)]);
var inst_40825 = (state_40884[(12)]);
var inst_40832__$1 = cljs.core._nth.call(null,inst_40825,inst_40827);
var inst_40833 = cljs.core.async.put_BANG_.call(null,inst_40832__$1,inst_40756,done);
var state_40884__$1 = (function (){var statearr_40890 = state_40884;
(statearr_40890[(11)] = inst_40832__$1);

return statearr_40890;
})();
if(cljs.core.truth_(inst_40833)){
var statearr_40891_40976 = state_40884__$1;
(statearr_40891_40976[(1)] = (30));

} else {
var statearr_40892_40977 = state_40884__$1;
(statearr_40892_40977[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (1))){
var state_40884__$1 = state_40884;
var statearr_40893_40978 = state_40884__$1;
(statearr_40893_40978[(2)] = null);

(statearr_40893_40978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (24))){
var inst_40785 = (state_40884[(7)]);
var inst_40802 = (state_40884[(2)]);
var inst_40803 = cljs.core.next.call(null,inst_40785);
var inst_40765 = inst_40803;
var inst_40766 = null;
var inst_40767 = (0);
var inst_40768 = (0);
var state_40884__$1 = (function (){var statearr_40894 = state_40884;
(statearr_40894[(13)] = inst_40765);

(statearr_40894[(14)] = inst_40766);

(statearr_40894[(15)] = inst_40768);

(statearr_40894[(16)] = inst_40802);

(statearr_40894[(17)] = inst_40767);

return statearr_40894;
})();
var statearr_40895_40979 = state_40884__$1;
(statearr_40895_40979[(2)] = null);

(statearr_40895_40979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (39))){
var state_40884__$1 = state_40884;
var statearr_40899_40980 = state_40884__$1;
(statearr_40899_40980[(2)] = null);

(statearr_40899_40980[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (4))){
var inst_40756 = (state_40884[(9)]);
var inst_40756__$1 = (state_40884[(2)]);
var inst_40757 = (inst_40756__$1 == null);
var state_40884__$1 = (function (){var statearr_40900 = state_40884;
(statearr_40900[(9)] = inst_40756__$1);

return statearr_40900;
})();
if(cljs.core.truth_(inst_40757)){
var statearr_40901_40981 = state_40884__$1;
(statearr_40901_40981[(1)] = (5));

} else {
var statearr_40902_40982 = state_40884__$1;
(statearr_40902_40982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (15))){
var inst_40765 = (state_40884[(13)]);
var inst_40766 = (state_40884[(14)]);
var inst_40768 = (state_40884[(15)]);
var inst_40767 = (state_40884[(17)]);
var inst_40781 = (state_40884[(2)]);
var inst_40782 = (inst_40768 + (1));
var tmp40896 = inst_40765;
var tmp40897 = inst_40766;
var tmp40898 = inst_40767;
var inst_40765__$1 = tmp40896;
var inst_40766__$1 = tmp40897;
var inst_40767__$1 = tmp40898;
var inst_40768__$1 = inst_40782;
var state_40884__$1 = (function (){var statearr_40903 = state_40884;
(statearr_40903[(13)] = inst_40765__$1);

(statearr_40903[(14)] = inst_40766__$1);

(statearr_40903[(18)] = inst_40781);

(statearr_40903[(15)] = inst_40768__$1);

(statearr_40903[(17)] = inst_40767__$1);

return statearr_40903;
})();
var statearr_40904_40983 = state_40884__$1;
(statearr_40904_40983[(2)] = null);

(statearr_40904_40983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (21))){
var inst_40806 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40908_40984 = state_40884__$1;
(statearr_40908_40984[(2)] = inst_40806);

(statearr_40908_40984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (31))){
var inst_40832 = (state_40884[(11)]);
var inst_40836 = done.call(null,null);
var inst_40837 = cljs.core.async.untap_STAR_.call(null,m,inst_40832);
var state_40884__$1 = (function (){var statearr_40909 = state_40884;
(statearr_40909[(19)] = inst_40836);

return statearr_40909;
})();
var statearr_40910_40985 = state_40884__$1;
(statearr_40910_40985[(2)] = inst_40837);

(statearr_40910_40985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (32))){
var inst_40826 = (state_40884[(20)]);
var inst_40824 = (state_40884[(21)]);
var inst_40827 = (state_40884[(10)]);
var inst_40825 = (state_40884[(12)]);
var inst_40839 = (state_40884[(2)]);
var inst_40840 = (inst_40827 + (1));
var tmp40905 = inst_40826;
var tmp40906 = inst_40824;
var tmp40907 = inst_40825;
var inst_40824__$1 = tmp40906;
var inst_40825__$1 = tmp40907;
var inst_40826__$1 = tmp40905;
var inst_40827__$1 = inst_40840;
var state_40884__$1 = (function (){var statearr_40911 = state_40884;
(statearr_40911[(20)] = inst_40826__$1);

(statearr_40911[(21)] = inst_40824__$1);

(statearr_40911[(22)] = inst_40839);

(statearr_40911[(10)] = inst_40827__$1);

(statearr_40911[(12)] = inst_40825__$1);

return statearr_40911;
})();
var statearr_40912_40986 = state_40884__$1;
(statearr_40912_40986[(2)] = null);

(statearr_40912_40986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (40))){
var inst_40852 = (state_40884[(23)]);
var inst_40856 = done.call(null,null);
var inst_40857 = cljs.core.async.untap_STAR_.call(null,m,inst_40852);
var state_40884__$1 = (function (){var statearr_40913 = state_40884;
(statearr_40913[(24)] = inst_40856);

return statearr_40913;
})();
var statearr_40914_40987 = state_40884__$1;
(statearr_40914_40987[(2)] = inst_40857);

(statearr_40914_40987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (33))){
var inst_40843 = (state_40884[(25)]);
var inst_40845 = cljs.core.chunked_seq_QMARK_.call(null,inst_40843);
var state_40884__$1 = state_40884;
if(inst_40845){
var statearr_40915_40988 = state_40884__$1;
(statearr_40915_40988[(1)] = (36));

} else {
var statearr_40916_40989 = state_40884__$1;
(statearr_40916_40989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (13))){
var inst_40775 = (state_40884[(26)]);
var inst_40778 = cljs.core.async.close_BANG_.call(null,inst_40775);
var state_40884__$1 = state_40884;
var statearr_40917_40990 = state_40884__$1;
(statearr_40917_40990[(2)] = inst_40778);

(statearr_40917_40990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (22))){
var inst_40796 = (state_40884[(8)]);
var inst_40799 = cljs.core.async.close_BANG_.call(null,inst_40796);
var state_40884__$1 = state_40884;
var statearr_40918_40991 = state_40884__$1;
(statearr_40918_40991[(2)] = inst_40799);

(statearr_40918_40991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (36))){
var inst_40843 = (state_40884[(25)]);
var inst_40847 = cljs.core.chunk_first.call(null,inst_40843);
var inst_40848 = cljs.core.chunk_rest.call(null,inst_40843);
var inst_40849 = cljs.core.count.call(null,inst_40847);
var inst_40824 = inst_40848;
var inst_40825 = inst_40847;
var inst_40826 = inst_40849;
var inst_40827 = (0);
var state_40884__$1 = (function (){var statearr_40919 = state_40884;
(statearr_40919[(20)] = inst_40826);

(statearr_40919[(21)] = inst_40824);

(statearr_40919[(10)] = inst_40827);

(statearr_40919[(12)] = inst_40825);

return statearr_40919;
})();
var statearr_40920_40992 = state_40884__$1;
(statearr_40920_40992[(2)] = null);

(statearr_40920_40992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (41))){
var inst_40843 = (state_40884[(25)]);
var inst_40859 = (state_40884[(2)]);
var inst_40860 = cljs.core.next.call(null,inst_40843);
var inst_40824 = inst_40860;
var inst_40825 = null;
var inst_40826 = (0);
var inst_40827 = (0);
var state_40884__$1 = (function (){var statearr_40921 = state_40884;
(statearr_40921[(20)] = inst_40826);

(statearr_40921[(21)] = inst_40824);

(statearr_40921[(27)] = inst_40859);

(statearr_40921[(10)] = inst_40827);

(statearr_40921[(12)] = inst_40825);

return statearr_40921;
})();
var statearr_40922_40993 = state_40884__$1;
(statearr_40922_40993[(2)] = null);

(statearr_40922_40993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (43))){
var state_40884__$1 = state_40884;
var statearr_40923_40994 = state_40884__$1;
(statearr_40923_40994[(2)] = null);

(statearr_40923_40994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (29))){
var inst_40868 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40924_40995 = state_40884__$1;
(statearr_40924_40995[(2)] = inst_40868);

(statearr_40924_40995[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (44))){
var inst_40877 = (state_40884[(2)]);
var state_40884__$1 = (function (){var statearr_40925 = state_40884;
(statearr_40925[(28)] = inst_40877);

return statearr_40925;
})();
var statearr_40926_40996 = state_40884__$1;
(statearr_40926_40996[(2)] = null);

(statearr_40926_40996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (6))){
var inst_40816 = (state_40884[(29)]);
var inst_40815 = cljs.core.deref.call(null,cs);
var inst_40816__$1 = cljs.core.keys.call(null,inst_40815);
var inst_40817 = cljs.core.count.call(null,inst_40816__$1);
var inst_40818 = cljs.core.reset_BANG_.call(null,dctr,inst_40817);
var inst_40823 = cljs.core.seq.call(null,inst_40816__$1);
var inst_40824 = inst_40823;
var inst_40825 = null;
var inst_40826 = (0);
var inst_40827 = (0);
var state_40884__$1 = (function (){var statearr_40927 = state_40884;
(statearr_40927[(29)] = inst_40816__$1);

(statearr_40927[(20)] = inst_40826);

(statearr_40927[(21)] = inst_40824);

(statearr_40927[(10)] = inst_40827);

(statearr_40927[(30)] = inst_40818);

(statearr_40927[(12)] = inst_40825);

return statearr_40927;
})();
var statearr_40928_40997 = state_40884__$1;
(statearr_40928_40997[(2)] = null);

(statearr_40928_40997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (28))){
var inst_40824 = (state_40884[(21)]);
var inst_40843 = (state_40884[(25)]);
var inst_40843__$1 = cljs.core.seq.call(null,inst_40824);
var state_40884__$1 = (function (){var statearr_40929 = state_40884;
(statearr_40929[(25)] = inst_40843__$1);

return statearr_40929;
})();
if(inst_40843__$1){
var statearr_40930_40998 = state_40884__$1;
(statearr_40930_40998[(1)] = (33));

} else {
var statearr_40931_40999 = state_40884__$1;
(statearr_40931_40999[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (25))){
var inst_40826 = (state_40884[(20)]);
var inst_40827 = (state_40884[(10)]);
var inst_40829 = (inst_40827 < inst_40826);
var inst_40830 = inst_40829;
var state_40884__$1 = state_40884;
if(cljs.core.truth_(inst_40830)){
var statearr_40932_41000 = state_40884__$1;
(statearr_40932_41000[(1)] = (27));

} else {
var statearr_40933_41001 = state_40884__$1;
(statearr_40933_41001[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (34))){
var state_40884__$1 = state_40884;
var statearr_40934_41002 = state_40884__$1;
(statearr_40934_41002[(2)] = null);

(statearr_40934_41002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (17))){
var state_40884__$1 = state_40884;
var statearr_40935_41003 = state_40884__$1;
(statearr_40935_41003[(2)] = null);

(statearr_40935_41003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (3))){
var inst_40882 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40884__$1,inst_40882);
} else {
if((state_val_40885 === (12))){
var inst_40811 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40936_41004 = state_40884__$1;
(statearr_40936_41004[(2)] = inst_40811);

(statearr_40936_41004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (2))){
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40884__$1,(4),ch);
} else {
if((state_val_40885 === (23))){
var state_40884__$1 = state_40884;
var statearr_40937_41005 = state_40884__$1;
(statearr_40937_41005[(2)] = null);

(statearr_40937_41005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (35))){
var inst_40866 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40938_41006 = state_40884__$1;
(statearr_40938_41006[(2)] = inst_40866);

(statearr_40938_41006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (19))){
var inst_40785 = (state_40884[(7)]);
var inst_40789 = cljs.core.chunk_first.call(null,inst_40785);
var inst_40790 = cljs.core.chunk_rest.call(null,inst_40785);
var inst_40791 = cljs.core.count.call(null,inst_40789);
var inst_40765 = inst_40790;
var inst_40766 = inst_40789;
var inst_40767 = inst_40791;
var inst_40768 = (0);
var state_40884__$1 = (function (){var statearr_40939 = state_40884;
(statearr_40939[(13)] = inst_40765);

(statearr_40939[(14)] = inst_40766);

(statearr_40939[(15)] = inst_40768);

(statearr_40939[(17)] = inst_40767);

return statearr_40939;
})();
var statearr_40940_41007 = state_40884__$1;
(statearr_40940_41007[(2)] = null);

(statearr_40940_41007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (11))){
var inst_40765 = (state_40884[(13)]);
var inst_40785 = (state_40884[(7)]);
var inst_40785__$1 = cljs.core.seq.call(null,inst_40765);
var state_40884__$1 = (function (){var statearr_40941 = state_40884;
(statearr_40941[(7)] = inst_40785__$1);

return statearr_40941;
})();
if(inst_40785__$1){
var statearr_40942_41008 = state_40884__$1;
(statearr_40942_41008[(1)] = (16));

} else {
var statearr_40943_41009 = state_40884__$1;
(statearr_40943_41009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (9))){
var inst_40813 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40944_41010 = state_40884__$1;
(statearr_40944_41010[(2)] = inst_40813);

(statearr_40944_41010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (5))){
var inst_40763 = cljs.core.deref.call(null,cs);
var inst_40764 = cljs.core.seq.call(null,inst_40763);
var inst_40765 = inst_40764;
var inst_40766 = null;
var inst_40767 = (0);
var inst_40768 = (0);
var state_40884__$1 = (function (){var statearr_40945 = state_40884;
(statearr_40945[(13)] = inst_40765);

(statearr_40945[(14)] = inst_40766);

(statearr_40945[(15)] = inst_40768);

(statearr_40945[(17)] = inst_40767);

return statearr_40945;
})();
var statearr_40946_41011 = state_40884__$1;
(statearr_40946_41011[(2)] = null);

(statearr_40946_41011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (14))){
var state_40884__$1 = state_40884;
var statearr_40947_41012 = state_40884__$1;
(statearr_40947_41012[(2)] = null);

(statearr_40947_41012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (45))){
var inst_40874 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40948_41013 = state_40884__$1;
(statearr_40948_41013[(2)] = inst_40874);

(statearr_40948_41013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (26))){
var inst_40816 = (state_40884[(29)]);
var inst_40870 = (state_40884[(2)]);
var inst_40871 = cljs.core.seq.call(null,inst_40816);
var state_40884__$1 = (function (){var statearr_40949 = state_40884;
(statearr_40949[(31)] = inst_40870);

return statearr_40949;
})();
if(inst_40871){
var statearr_40950_41014 = state_40884__$1;
(statearr_40950_41014[(1)] = (42));

} else {
var statearr_40951_41015 = state_40884__$1;
(statearr_40951_41015[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (16))){
var inst_40785 = (state_40884[(7)]);
var inst_40787 = cljs.core.chunked_seq_QMARK_.call(null,inst_40785);
var state_40884__$1 = state_40884;
if(inst_40787){
var statearr_40952_41016 = state_40884__$1;
(statearr_40952_41016[(1)] = (19));

} else {
var statearr_40953_41017 = state_40884__$1;
(statearr_40953_41017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (38))){
var inst_40863 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40954_41018 = state_40884__$1;
(statearr_40954_41018[(2)] = inst_40863);

(statearr_40954_41018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (30))){
var state_40884__$1 = state_40884;
var statearr_40955_41019 = state_40884__$1;
(statearr_40955_41019[(2)] = null);

(statearr_40955_41019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (10))){
var inst_40766 = (state_40884[(14)]);
var inst_40768 = (state_40884[(15)]);
var inst_40774 = cljs.core._nth.call(null,inst_40766,inst_40768);
var inst_40775 = cljs.core.nth.call(null,inst_40774,(0),null);
var inst_40776 = cljs.core.nth.call(null,inst_40774,(1),null);
var state_40884__$1 = (function (){var statearr_40956 = state_40884;
(statearr_40956[(26)] = inst_40775);

return statearr_40956;
})();
if(cljs.core.truth_(inst_40776)){
var statearr_40957_41020 = state_40884__$1;
(statearr_40957_41020[(1)] = (13));

} else {
var statearr_40958_41021 = state_40884__$1;
(statearr_40958_41021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (18))){
var inst_40809 = (state_40884[(2)]);
var state_40884__$1 = state_40884;
var statearr_40959_41022 = state_40884__$1;
(statearr_40959_41022[(2)] = inst_40809);

(statearr_40959_41022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (42))){
var state_40884__$1 = state_40884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40884__$1,(45),dchan);
} else {
if((state_val_40885 === (37))){
var inst_40756 = (state_40884[(9)]);
var inst_40852 = (state_40884[(23)]);
var inst_40843 = (state_40884[(25)]);
var inst_40852__$1 = cljs.core.first.call(null,inst_40843);
var inst_40853 = cljs.core.async.put_BANG_.call(null,inst_40852__$1,inst_40756,done);
var state_40884__$1 = (function (){var statearr_40960 = state_40884;
(statearr_40960[(23)] = inst_40852__$1);

return statearr_40960;
})();
if(cljs.core.truth_(inst_40853)){
var statearr_40961_41023 = state_40884__$1;
(statearr_40961_41023[(1)] = (39));

} else {
var statearr_40962_41024 = state_40884__$1;
(statearr_40962_41024[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40885 === (8))){
var inst_40768 = (state_40884[(15)]);
var inst_40767 = (state_40884[(17)]);
var inst_40770 = (inst_40768 < inst_40767);
var inst_40771 = inst_40770;
var state_40884__$1 = state_40884;
if(cljs.core.truth_(inst_40771)){
var statearr_40963_41025 = state_40884__$1;
(statearr_40963_41025[(1)] = (10));

} else {
var statearr_40964_41026 = state_40884__$1;
(statearr_40964_41026[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___40972,cs,m,dchan,dctr,done))
;
return ((function (switch__33300__auto__,c__33365__auto___40972,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33301__auto__ = null;
var cljs$core$async$mult_$_state_machine__33301__auto____0 = (function (){
var statearr_40968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40968[(0)] = cljs$core$async$mult_$_state_machine__33301__auto__);

(statearr_40968[(1)] = (1));

return statearr_40968;
});
var cljs$core$async$mult_$_state_machine__33301__auto____1 = (function (state_40884){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_40884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e40969){if((e40969 instanceof Object)){
var ex__33304__auto__ = e40969;
var statearr_40970_41027 = state_40884;
(statearr_40970_41027[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41028 = state_40884;
state_40884 = G__41028;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33301__auto__ = function(state_40884){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33301__auto____1.call(this,state_40884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33301__auto____0;
cljs$core$async$mult_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33301__auto____1;
return cljs$core$async$mult_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___40972,cs,m,dchan,dctr,done))
})();
var state__33367__auto__ = (function (){var statearr_40971 = f__33366__auto__.call(null);
(statearr_40971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___40972);

return statearr_40971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___40972,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args41029 = [];
var len__32340__auto___41032 = arguments.length;
var i__32341__auto___41033 = (0);
while(true){
if((i__32341__auto___41033 < len__32340__auto___41032)){
args41029.push((arguments[i__32341__auto___41033]));

var G__41034 = (i__32341__auto___41033 + (1));
i__32341__auto___41033 = G__41034;
continue;
} else {
}
break;
}

var G__41031 = args41029.length;
switch (G__41031) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41029.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,ch);
} else {
var m__31938__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,ch);
} else {
var m__31938__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m);
} else {
var m__31938__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,state_map);
} else {
var m__31938__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31937__auto__ = (((m == null))?null:m);
var m__31938__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,m,mode);
} else {
var m__31938__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32347__auto__ = [];
var len__32340__auto___41046 = arguments.length;
var i__32341__auto___41047 = (0);
while(true){
if((i__32341__auto___41047 < len__32340__auto___41046)){
args__32347__auto__.push((arguments[i__32341__auto___41047]));

var G__41048 = (i__32341__auto___41047 + (1));
i__32341__auto___41047 = G__41048;
continue;
} else {
}
break;
}

var argseq__32348__auto__ = ((((3) < args__32347__auto__.length))?(new cljs.core.IndexedSeq(args__32347__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32348__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41040){
var map__41041 = p__41040;
var map__41041__$1 = ((((!((map__41041 == null)))?((((map__41041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41041):map__41041);
var opts = map__41041__$1;
var statearr_41043_41049 = state;
(statearr_41043_41049[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41041,map__41041__$1,opts){
return (function (val){
var statearr_41044_41050 = state;
(statearr_41044_41050[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41041,map__41041__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41045_41051 = state;
(statearr_41045_41051[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41036){
var G__41037 = cljs.core.first.call(null,seq41036);
var seq41036__$1 = cljs.core.next.call(null,seq41036);
var G__41038 = cljs.core.first.call(null,seq41036__$1);
var seq41036__$2 = cljs.core.next.call(null,seq41036__$1);
var G__41039 = cljs.core.first.call(null,seq41036__$2);
var seq41036__$3 = cljs.core.next.call(null,seq41036__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41037,G__41038,G__41039,seq41036__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41215 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41216){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41216 = meta41216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41217,meta41216__$1){
var self__ = this;
var _41217__$1 = this;
return (new cljs.core.async.t_cljs$core$async41215(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41216__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41217){
var self__ = this;
var _41217__$1 = this;
return self__.meta41216;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41216","meta41216",-178090940,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41215";

cljs.core.async.t_cljs$core$async41215.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41215");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41215 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41215(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41216){
return (new cljs.core.async.t_cljs$core$async41215(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41216));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41215(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33365__auto___41378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41315){
var state_val_41316 = (state_41315[(1)]);
if((state_val_41316 === (7))){
var inst_41233 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41317_41379 = state_41315__$1;
(statearr_41317_41379[(2)] = inst_41233);

(statearr_41317_41379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (20))){
var inst_41245 = (state_41315[(7)]);
var state_41315__$1 = state_41315;
var statearr_41318_41380 = state_41315__$1;
(statearr_41318_41380[(2)] = inst_41245);

(statearr_41318_41380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (27))){
var state_41315__$1 = state_41315;
var statearr_41319_41381 = state_41315__$1;
(statearr_41319_41381[(2)] = null);

(statearr_41319_41381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (1))){
var inst_41221 = (state_41315[(8)]);
var inst_41221__$1 = calc_state.call(null);
var inst_41223 = (inst_41221__$1 == null);
var inst_41224 = cljs.core.not.call(null,inst_41223);
var state_41315__$1 = (function (){var statearr_41320 = state_41315;
(statearr_41320[(8)] = inst_41221__$1);

return statearr_41320;
})();
if(inst_41224){
var statearr_41321_41382 = state_41315__$1;
(statearr_41321_41382[(1)] = (2));

} else {
var statearr_41322_41383 = state_41315__$1;
(statearr_41322_41383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (24))){
var inst_41275 = (state_41315[(9)]);
var inst_41268 = (state_41315[(10)]);
var inst_41289 = (state_41315[(11)]);
var inst_41289__$1 = inst_41268.call(null,inst_41275);
var state_41315__$1 = (function (){var statearr_41323 = state_41315;
(statearr_41323[(11)] = inst_41289__$1);

return statearr_41323;
})();
if(cljs.core.truth_(inst_41289__$1)){
var statearr_41324_41384 = state_41315__$1;
(statearr_41324_41384[(1)] = (29));

} else {
var statearr_41325_41385 = state_41315__$1;
(statearr_41325_41385[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (4))){
var inst_41236 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41236)){
var statearr_41326_41386 = state_41315__$1;
(statearr_41326_41386[(1)] = (8));

} else {
var statearr_41327_41387 = state_41315__$1;
(statearr_41327_41387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (15))){
var inst_41262 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41262)){
var statearr_41328_41388 = state_41315__$1;
(statearr_41328_41388[(1)] = (19));

} else {
var statearr_41329_41389 = state_41315__$1;
(statearr_41329_41389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (21))){
var inst_41267 = (state_41315[(12)]);
var inst_41267__$1 = (state_41315[(2)]);
var inst_41268 = cljs.core.get.call(null,inst_41267__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41269 = cljs.core.get.call(null,inst_41267__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41270 = cljs.core.get.call(null,inst_41267__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41315__$1 = (function (){var statearr_41330 = state_41315;
(statearr_41330[(13)] = inst_41269);

(statearr_41330[(12)] = inst_41267__$1);

(statearr_41330[(10)] = inst_41268);

return statearr_41330;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41315__$1,(22),inst_41270);
} else {
if((state_val_41316 === (31))){
var inst_41297 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41297)){
var statearr_41331_41390 = state_41315__$1;
(statearr_41331_41390[(1)] = (32));

} else {
var statearr_41332_41391 = state_41315__$1;
(statearr_41332_41391[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (32))){
var inst_41274 = (state_41315[(14)]);
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41315__$1,(35),out,inst_41274);
} else {
if((state_val_41316 === (33))){
var inst_41267 = (state_41315[(12)]);
var inst_41245 = inst_41267;
var state_41315__$1 = (function (){var statearr_41333 = state_41315;
(statearr_41333[(7)] = inst_41245);

return statearr_41333;
})();
var statearr_41334_41392 = state_41315__$1;
(statearr_41334_41392[(2)] = null);

(statearr_41334_41392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (13))){
var inst_41245 = (state_41315[(7)]);
var inst_41252 = inst_41245.cljs$lang$protocol_mask$partition0$;
var inst_41253 = (inst_41252 & (64));
var inst_41254 = inst_41245.cljs$core$ISeq$;
var inst_41255 = (inst_41253) || (inst_41254);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41255)){
var statearr_41335_41393 = state_41315__$1;
(statearr_41335_41393[(1)] = (16));

} else {
var statearr_41336_41394 = state_41315__$1;
(statearr_41336_41394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (22))){
var inst_41275 = (state_41315[(9)]);
var inst_41274 = (state_41315[(14)]);
var inst_41273 = (state_41315[(2)]);
var inst_41274__$1 = cljs.core.nth.call(null,inst_41273,(0),null);
var inst_41275__$1 = cljs.core.nth.call(null,inst_41273,(1),null);
var inst_41276 = (inst_41274__$1 == null);
var inst_41277 = cljs.core._EQ_.call(null,inst_41275__$1,change);
var inst_41278 = (inst_41276) || (inst_41277);
var state_41315__$1 = (function (){var statearr_41337 = state_41315;
(statearr_41337[(9)] = inst_41275__$1);

(statearr_41337[(14)] = inst_41274__$1);

return statearr_41337;
})();
if(cljs.core.truth_(inst_41278)){
var statearr_41338_41395 = state_41315__$1;
(statearr_41338_41395[(1)] = (23));

} else {
var statearr_41339_41396 = state_41315__$1;
(statearr_41339_41396[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (36))){
var inst_41267 = (state_41315[(12)]);
var inst_41245 = inst_41267;
var state_41315__$1 = (function (){var statearr_41340 = state_41315;
(statearr_41340[(7)] = inst_41245);

return statearr_41340;
})();
var statearr_41341_41397 = state_41315__$1;
(statearr_41341_41397[(2)] = null);

(statearr_41341_41397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (29))){
var inst_41289 = (state_41315[(11)]);
var state_41315__$1 = state_41315;
var statearr_41342_41398 = state_41315__$1;
(statearr_41342_41398[(2)] = inst_41289);

(statearr_41342_41398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (6))){
var state_41315__$1 = state_41315;
var statearr_41343_41399 = state_41315__$1;
(statearr_41343_41399[(2)] = false);

(statearr_41343_41399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (28))){
var inst_41285 = (state_41315[(2)]);
var inst_41286 = calc_state.call(null);
var inst_41245 = inst_41286;
var state_41315__$1 = (function (){var statearr_41344 = state_41315;
(statearr_41344[(7)] = inst_41245);

(statearr_41344[(15)] = inst_41285);

return statearr_41344;
})();
var statearr_41345_41400 = state_41315__$1;
(statearr_41345_41400[(2)] = null);

(statearr_41345_41400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (25))){
var inst_41311 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41346_41401 = state_41315__$1;
(statearr_41346_41401[(2)] = inst_41311);

(statearr_41346_41401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (34))){
var inst_41309 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41347_41402 = state_41315__$1;
(statearr_41347_41402[(2)] = inst_41309);

(statearr_41347_41402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (17))){
var state_41315__$1 = state_41315;
var statearr_41348_41403 = state_41315__$1;
(statearr_41348_41403[(2)] = false);

(statearr_41348_41403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (3))){
var state_41315__$1 = state_41315;
var statearr_41349_41404 = state_41315__$1;
(statearr_41349_41404[(2)] = false);

(statearr_41349_41404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (12))){
var inst_41313 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41315__$1,inst_41313);
} else {
if((state_val_41316 === (2))){
var inst_41221 = (state_41315[(8)]);
var inst_41226 = inst_41221.cljs$lang$protocol_mask$partition0$;
var inst_41227 = (inst_41226 & (64));
var inst_41228 = inst_41221.cljs$core$ISeq$;
var inst_41229 = (inst_41227) || (inst_41228);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41229)){
var statearr_41350_41405 = state_41315__$1;
(statearr_41350_41405[(1)] = (5));

} else {
var statearr_41351_41406 = state_41315__$1;
(statearr_41351_41406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (23))){
var inst_41274 = (state_41315[(14)]);
var inst_41280 = (inst_41274 == null);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41280)){
var statearr_41352_41407 = state_41315__$1;
(statearr_41352_41407[(1)] = (26));

} else {
var statearr_41353_41408 = state_41315__$1;
(statearr_41353_41408[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (35))){
var inst_41300 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
if(cljs.core.truth_(inst_41300)){
var statearr_41354_41409 = state_41315__$1;
(statearr_41354_41409[(1)] = (36));

} else {
var statearr_41355_41410 = state_41315__$1;
(statearr_41355_41410[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (19))){
var inst_41245 = (state_41315[(7)]);
var inst_41264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41245);
var state_41315__$1 = state_41315;
var statearr_41356_41411 = state_41315__$1;
(statearr_41356_41411[(2)] = inst_41264);

(statearr_41356_41411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (11))){
var inst_41245 = (state_41315[(7)]);
var inst_41249 = (inst_41245 == null);
var inst_41250 = cljs.core.not.call(null,inst_41249);
var state_41315__$1 = state_41315;
if(inst_41250){
var statearr_41357_41412 = state_41315__$1;
(statearr_41357_41412[(1)] = (13));

} else {
var statearr_41358_41413 = state_41315__$1;
(statearr_41358_41413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (9))){
var inst_41221 = (state_41315[(8)]);
var state_41315__$1 = state_41315;
var statearr_41359_41414 = state_41315__$1;
(statearr_41359_41414[(2)] = inst_41221);

(statearr_41359_41414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (5))){
var state_41315__$1 = state_41315;
var statearr_41360_41415 = state_41315__$1;
(statearr_41360_41415[(2)] = true);

(statearr_41360_41415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (14))){
var state_41315__$1 = state_41315;
var statearr_41361_41416 = state_41315__$1;
(statearr_41361_41416[(2)] = false);

(statearr_41361_41416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (26))){
var inst_41275 = (state_41315[(9)]);
var inst_41282 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41275);
var state_41315__$1 = state_41315;
var statearr_41362_41417 = state_41315__$1;
(statearr_41362_41417[(2)] = inst_41282);

(statearr_41362_41417[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (16))){
var state_41315__$1 = state_41315;
var statearr_41363_41418 = state_41315__$1;
(statearr_41363_41418[(2)] = true);

(statearr_41363_41418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (38))){
var inst_41305 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41364_41419 = state_41315__$1;
(statearr_41364_41419[(2)] = inst_41305);

(statearr_41364_41419[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (30))){
var inst_41275 = (state_41315[(9)]);
var inst_41269 = (state_41315[(13)]);
var inst_41268 = (state_41315[(10)]);
var inst_41292 = cljs.core.empty_QMARK_.call(null,inst_41268);
var inst_41293 = inst_41269.call(null,inst_41275);
var inst_41294 = cljs.core.not.call(null,inst_41293);
var inst_41295 = (inst_41292) && (inst_41294);
var state_41315__$1 = state_41315;
var statearr_41365_41420 = state_41315__$1;
(statearr_41365_41420[(2)] = inst_41295);

(statearr_41365_41420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (10))){
var inst_41221 = (state_41315[(8)]);
var inst_41241 = (state_41315[(2)]);
var inst_41242 = cljs.core.get.call(null,inst_41241,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41243 = cljs.core.get.call(null,inst_41241,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41244 = cljs.core.get.call(null,inst_41241,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41245 = inst_41221;
var state_41315__$1 = (function (){var statearr_41366 = state_41315;
(statearr_41366[(16)] = inst_41244);

(statearr_41366[(17)] = inst_41243);

(statearr_41366[(18)] = inst_41242);

(statearr_41366[(7)] = inst_41245);

return statearr_41366;
})();
var statearr_41367_41421 = state_41315__$1;
(statearr_41367_41421[(2)] = null);

(statearr_41367_41421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (18))){
var inst_41259 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41368_41422 = state_41315__$1;
(statearr_41368_41422[(2)] = inst_41259);

(statearr_41368_41422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (37))){
var state_41315__$1 = state_41315;
var statearr_41369_41423 = state_41315__$1;
(statearr_41369_41423[(2)] = null);

(statearr_41369_41423[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (8))){
var inst_41221 = (state_41315[(8)]);
var inst_41238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41221);
var state_41315__$1 = state_41315;
var statearr_41370_41424 = state_41315__$1;
(statearr_41370_41424[(2)] = inst_41238);

(statearr_41370_41424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33300__auto__,c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33301__auto__ = null;
var cljs$core$async$mix_$_state_machine__33301__auto____0 = (function (){
var statearr_41374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41374[(0)] = cljs$core$async$mix_$_state_machine__33301__auto__);

(statearr_41374[(1)] = (1));

return statearr_41374;
});
var cljs$core$async$mix_$_state_machine__33301__auto____1 = (function (state_41315){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41375){if((e41375 instanceof Object)){
var ex__33304__auto__ = e41375;
var statearr_41376_41425 = state_41315;
(statearr_41376_41425[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41426 = state_41315;
state_41315 = G__41426;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33301__auto__ = function(state_41315){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33301__auto____1.call(this,state_41315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33301__auto____0;
cljs$core$async$mix_$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33301__auto____1;
return cljs$core$async$mix_$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33367__auto__ = (function (){var statearr_41377 = f__33366__auto__.call(null);
(statearr_41377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41378);

return statearr_41377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41378,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31937__auto__ = (((p == null))?null:p);
var m__31938__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31938__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31937__auto__ = (((p == null))?null:p);
var m__31938__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,p,v,ch);
} else {
var m__31938__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41427 = [];
var len__32340__auto___41430 = arguments.length;
var i__32341__auto___41431 = (0);
while(true){
if((i__32341__auto___41431 < len__32340__auto___41430)){
args41427.push((arguments[i__32341__auto___41431]));

var G__41432 = (i__32341__auto___41431 + (1));
i__32341__auto___41431 = G__41432;
continue;
} else {
}
break;
}

var G__41429 = args41427.length;
switch (G__41429) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41427.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31937__auto__ = (((p == null))?null:p);
var m__31938__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,p);
} else {
var m__31938__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31937__auto__ = (((p == null))?null:p);
var m__31938__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31937__auto__)]);
if(!((m__31938__auto__ == null))){
return m__31938__auto__.call(null,p,v);
} else {
var m__31938__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31938__auto____$1 == null))){
return m__31938__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args41435 = [];
var len__32340__auto___41560 = arguments.length;
var i__32341__auto___41561 = (0);
while(true){
if((i__32341__auto___41561 < len__32340__auto___41560)){
args41435.push((arguments[i__32341__auto___41561]));

var G__41562 = (i__32341__auto___41561 + (1));
i__32341__auto___41561 = G__41562;
continue;
} else {
}
break;
}

var G__41437 = args41435.length;
switch (G__41437) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41435.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__31282__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__31282__auto__)){
return or__31282__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__31282__auto__,mults){
return (function (p1__41434_SHARP_){
if(cljs.core.truth_(p1__41434_SHARP_.call(null,topic))){
return p1__41434_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41434_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__31282__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41438 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41439){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41439 = meta41439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41440,meta41439__$1){
var self__ = this;
var _41440__$1 = this;
return (new cljs.core.async.t_cljs$core$async41438(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41439__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41440){
var self__ = this;
var _41440__$1 = this;
return self__.meta41439;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41439","meta41439",512969836,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41438";

cljs.core.async.t_cljs$core$async41438.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41438");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41438 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41438(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41439){
return (new cljs.core.async.t_cljs$core$async41438(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41439));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41438(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33365__auto___41564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41564,mults,ensure_mult,p){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41564,mults,ensure_mult,p){
return (function (state_41512){
var state_val_41513 = (state_41512[(1)]);
if((state_val_41513 === (7))){
var inst_41508 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41514_41565 = state_41512__$1;
(statearr_41514_41565[(2)] = inst_41508);

(statearr_41514_41565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (20))){
var state_41512__$1 = state_41512;
var statearr_41515_41566 = state_41512__$1;
(statearr_41515_41566[(2)] = null);

(statearr_41515_41566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (1))){
var state_41512__$1 = state_41512;
var statearr_41516_41567 = state_41512__$1;
(statearr_41516_41567[(2)] = null);

(statearr_41516_41567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (24))){
var inst_41491 = (state_41512[(7)]);
var inst_41500 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41491);
var state_41512__$1 = state_41512;
var statearr_41517_41568 = state_41512__$1;
(statearr_41517_41568[(2)] = inst_41500);

(statearr_41517_41568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (4))){
var inst_41443 = (state_41512[(8)]);
var inst_41443__$1 = (state_41512[(2)]);
var inst_41444 = (inst_41443__$1 == null);
var state_41512__$1 = (function (){var statearr_41518 = state_41512;
(statearr_41518[(8)] = inst_41443__$1);

return statearr_41518;
})();
if(cljs.core.truth_(inst_41444)){
var statearr_41519_41569 = state_41512__$1;
(statearr_41519_41569[(1)] = (5));

} else {
var statearr_41520_41570 = state_41512__$1;
(statearr_41520_41570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (15))){
var inst_41485 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41521_41571 = state_41512__$1;
(statearr_41521_41571[(2)] = inst_41485);

(statearr_41521_41571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (21))){
var inst_41505 = (state_41512[(2)]);
var state_41512__$1 = (function (){var statearr_41522 = state_41512;
(statearr_41522[(9)] = inst_41505);

return statearr_41522;
})();
var statearr_41523_41572 = state_41512__$1;
(statearr_41523_41572[(2)] = null);

(statearr_41523_41572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (13))){
var inst_41467 = (state_41512[(10)]);
var inst_41469 = cljs.core.chunked_seq_QMARK_.call(null,inst_41467);
var state_41512__$1 = state_41512;
if(inst_41469){
var statearr_41524_41573 = state_41512__$1;
(statearr_41524_41573[(1)] = (16));

} else {
var statearr_41525_41574 = state_41512__$1;
(statearr_41525_41574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (22))){
var inst_41497 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
if(cljs.core.truth_(inst_41497)){
var statearr_41526_41575 = state_41512__$1;
(statearr_41526_41575[(1)] = (23));

} else {
var statearr_41527_41576 = state_41512__$1;
(statearr_41527_41576[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (6))){
var inst_41491 = (state_41512[(7)]);
var inst_41493 = (state_41512[(11)]);
var inst_41443 = (state_41512[(8)]);
var inst_41491__$1 = topic_fn.call(null,inst_41443);
var inst_41492 = cljs.core.deref.call(null,mults);
var inst_41493__$1 = cljs.core.get.call(null,inst_41492,inst_41491__$1);
var state_41512__$1 = (function (){var statearr_41528 = state_41512;
(statearr_41528[(7)] = inst_41491__$1);

(statearr_41528[(11)] = inst_41493__$1);

return statearr_41528;
})();
if(cljs.core.truth_(inst_41493__$1)){
var statearr_41529_41577 = state_41512__$1;
(statearr_41529_41577[(1)] = (19));

} else {
var statearr_41530_41578 = state_41512__$1;
(statearr_41530_41578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (25))){
var inst_41502 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41531_41579 = state_41512__$1;
(statearr_41531_41579[(2)] = inst_41502);

(statearr_41531_41579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (17))){
var inst_41467 = (state_41512[(10)]);
var inst_41476 = cljs.core.first.call(null,inst_41467);
var inst_41477 = cljs.core.async.muxch_STAR_.call(null,inst_41476);
var inst_41478 = cljs.core.async.close_BANG_.call(null,inst_41477);
var inst_41479 = cljs.core.next.call(null,inst_41467);
var inst_41453 = inst_41479;
var inst_41454 = null;
var inst_41455 = (0);
var inst_41456 = (0);
var state_41512__$1 = (function (){var statearr_41532 = state_41512;
(statearr_41532[(12)] = inst_41456);

(statearr_41532[(13)] = inst_41454);

(statearr_41532[(14)] = inst_41478);

(statearr_41532[(15)] = inst_41453);

(statearr_41532[(16)] = inst_41455);

return statearr_41532;
})();
var statearr_41533_41580 = state_41512__$1;
(statearr_41533_41580[(2)] = null);

(statearr_41533_41580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (3))){
var inst_41510 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41512__$1,inst_41510);
} else {
if((state_val_41513 === (12))){
var inst_41487 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41534_41581 = state_41512__$1;
(statearr_41534_41581[(2)] = inst_41487);

(statearr_41534_41581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (2))){
var state_41512__$1 = state_41512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41512__$1,(4),ch);
} else {
if((state_val_41513 === (23))){
var state_41512__$1 = state_41512;
var statearr_41535_41582 = state_41512__$1;
(statearr_41535_41582[(2)] = null);

(statearr_41535_41582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (19))){
var inst_41493 = (state_41512[(11)]);
var inst_41443 = (state_41512[(8)]);
var inst_41495 = cljs.core.async.muxch_STAR_.call(null,inst_41493);
var state_41512__$1 = state_41512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41512__$1,(22),inst_41495,inst_41443);
} else {
if((state_val_41513 === (11))){
var inst_41467 = (state_41512[(10)]);
var inst_41453 = (state_41512[(15)]);
var inst_41467__$1 = cljs.core.seq.call(null,inst_41453);
var state_41512__$1 = (function (){var statearr_41536 = state_41512;
(statearr_41536[(10)] = inst_41467__$1);

return statearr_41536;
})();
if(inst_41467__$1){
var statearr_41537_41583 = state_41512__$1;
(statearr_41537_41583[(1)] = (13));

} else {
var statearr_41538_41584 = state_41512__$1;
(statearr_41538_41584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (9))){
var inst_41489 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41539_41585 = state_41512__$1;
(statearr_41539_41585[(2)] = inst_41489);

(statearr_41539_41585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (5))){
var inst_41450 = cljs.core.deref.call(null,mults);
var inst_41451 = cljs.core.vals.call(null,inst_41450);
var inst_41452 = cljs.core.seq.call(null,inst_41451);
var inst_41453 = inst_41452;
var inst_41454 = null;
var inst_41455 = (0);
var inst_41456 = (0);
var state_41512__$1 = (function (){var statearr_41540 = state_41512;
(statearr_41540[(12)] = inst_41456);

(statearr_41540[(13)] = inst_41454);

(statearr_41540[(15)] = inst_41453);

(statearr_41540[(16)] = inst_41455);

return statearr_41540;
})();
var statearr_41541_41586 = state_41512__$1;
(statearr_41541_41586[(2)] = null);

(statearr_41541_41586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (14))){
var state_41512__$1 = state_41512;
var statearr_41545_41587 = state_41512__$1;
(statearr_41545_41587[(2)] = null);

(statearr_41545_41587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (16))){
var inst_41467 = (state_41512[(10)]);
var inst_41471 = cljs.core.chunk_first.call(null,inst_41467);
var inst_41472 = cljs.core.chunk_rest.call(null,inst_41467);
var inst_41473 = cljs.core.count.call(null,inst_41471);
var inst_41453 = inst_41472;
var inst_41454 = inst_41471;
var inst_41455 = inst_41473;
var inst_41456 = (0);
var state_41512__$1 = (function (){var statearr_41546 = state_41512;
(statearr_41546[(12)] = inst_41456);

(statearr_41546[(13)] = inst_41454);

(statearr_41546[(15)] = inst_41453);

(statearr_41546[(16)] = inst_41455);

return statearr_41546;
})();
var statearr_41547_41588 = state_41512__$1;
(statearr_41547_41588[(2)] = null);

(statearr_41547_41588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (10))){
var inst_41456 = (state_41512[(12)]);
var inst_41454 = (state_41512[(13)]);
var inst_41453 = (state_41512[(15)]);
var inst_41455 = (state_41512[(16)]);
var inst_41461 = cljs.core._nth.call(null,inst_41454,inst_41456);
var inst_41462 = cljs.core.async.muxch_STAR_.call(null,inst_41461);
var inst_41463 = cljs.core.async.close_BANG_.call(null,inst_41462);
var inst_41464 = (inst_41456 + (1));
var tmp41542 = inst_41454;
var tmp41543 = inst_41453;
var tmp41544 = inst_41455;
var inst_41453__$1 = tmp41543;
var inst_41454__$1 = tmp41542;
var inst_41455__$1 = tmp41544;
var inst_41456__$1 = inst_41464;
var state_41512__$1 = (function (){var statearr_41548 = state_41512;
(statearr_41548[(12)] = inst_41456__$1);

(statearr_41548[(17)] = inst_41463);

(statearr_41548[(13)] = inst_41454__$1);

(statearr_41548[(15)] = inst_41453__$1);

(statearr_41548[(16)] = inst_41455__$1);

return statearr_41548;
})();
var statearr_41549_41589 = state_41512__$1;
(statearr_41549_41589[(2)] = null);

(statearr_41549_41589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (18))){
var inst_41482 = (state_41512[(2)]);
var state_41512__$1 = state_41512;
var statearr_41550_41590 = state_41512__$1;
(statearr_41550_41590[(2)] = inst_41482);

(statearr_41550_41590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41513 === (8))){
var inst_41456 = (state_41512[(12)]);
var inst_41455 = (state_41512[(16)]);
var inst_41458 = (inst_41456 < inst_41455);
var inst_41459 = inst_41458;
var state_41512__$1 = state_41512;
if(cljs.core.truth_(inst_41459)){
var statearr_41551_41591 = state_41512__$1;
(statearr_41551_41591[(1)] = (10));

} else {
var statearr_41552_41592 = state_41512__$1;
(statearr_41552_41592[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41564,mults,ensure_mult,p))
;
return ((function (switch__33300__auto__,c__33365__auto___41564,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_41556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41556[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_41556[(1)] = (1));

return statearr_41556;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_41512){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41557){if((e41557 instanceof Object)){
var ex__33304__auto__ = e41557;
var statearr_41558_41593 = state_41512;
(statearr_41558_41593[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41594 = state_41512;
state_41512 = G__41594;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_41512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_41512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41564,mults,ensure_mult,p))
})();
var state__33367__auto__ = (function (){var statearr_41559 = f__33366__auto__.call(null);
(statearr_41559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41564);

return statearr_41559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41564,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args41595 = [];
var len__32340__auto___41598 = arguments.length;
var i__32341__auto___41599 = (0);
while(true){
if((i__32341__auto___41599 < len__32340__auto___41598)){
args41595.push((arguments[i__32341__auto___41599]));

var G__41600 = (i__32341__auto___41599 + (1));
i__32341__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var G__41597 = args41595.length;
switch (G__41597) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41595.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args41602 = [];
var len__32340__auto___41605 = arguments.length;
var i__32341__auto___41606 = (0);
while(true){
if((i__32341__auto___41606 < len__32340__auto___41605)){
args41602.push((arguments[i__32341__auto___41606]));

var G__41607 = (i__32341__auto___41606 + (1));
i__32341__auto___41606 = G__41607;
continue;
} else {
}
break;
}

var G__41604 = args41602.length;
switch (G__41604) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41602.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args41609 = [];
var len__32340__auto___41680 = arguments.length;
var i__32341__auto___41681 = (0);
while(true){
if((i__32341__auto___41681 < len__32340__auto___41680)){
args41609.push((arguments[i__32341__auto___41681]));

var G__41682 = (i__32341__auto___41681 + (1));
i__32341__auto___41681 = G__41682;
continue;
} else {
}
break;
}

var G__41611 = args41609.length;
switch (G__41611) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41609.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33365__auto___41684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41650){
var state_val_41651 = (state_41650[(1)]);
if((state_val_41651 === (7))){
var state_41650__$1 = state_41650;
var statearr_41652_41685 = state_41650__$1;
(statearr_41652_41685[(2)] = null);

(statearr_41652_41685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (1))){
var state_41650__$1 = state_41650;
var statearr_41653_41686 = state_41650__$1;
(statearr_41653_41686[(2)] = null);

(statearr_41653_41686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (4))){
var inst_41614 = (state_41650[(7)]);
var inst_41616 = (inst_41614 < cnt);
var state_41650__$1 = state_41650;
if(cljs.core.truth_(inst_41616)){
var statearr_41654_41687 = state_41650__$1;
(statearr_41654_41687[(1)] = (6));

} else {
var statearr_41655_41688 = state_41650__$1;
(statearr_41655_41688[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (15))){
var inst_41646 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41656_41689 = state_41650__$1;
(statearr_41656_41689[(2)] = inst_41646);

(statearr_41656_41689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (13))){
var inst_41639 = cljs.core.async.close_BANG_.call(null,out);
var state_41650__$1 = state_41650;
var statearr_41657_41690 = state_41650__$1;
(statearr_41657_41690[(2)] = inst_41639);

(statearr_41657_41690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (6))){
var state_41650__$1 = state_41650;
var statearr_41658_41691 = state_41650__$1;
(statearr_41658_41691[(2)] = null);

(statearr_41658_41691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (3))){
var inst_41648 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41650__$1,inst_41648);
} else {
if((state_val_41651 === (12))){
var inst_41636 = (state_41650[(8)]);
var inst_41636__$1 = (state_41650[(2)]);
var inst_41637 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41636__$1);
var state_41650__$1 = (function (){var statearr_41659 = state_41650;
(statearr_41659[(8)] = inst_41636__$1);

return statearr_41659;
})();
if(cljs.core.truth_(inst_41637)){
var statearr_41660_41692 = state_41650__$1;
(statearr_41660_41692[(1)] = (13));

} else {
var statearr_41661_41693 = state_41650__$1;
(statearr_41661_41693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (2))){
var inst_41613 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41614 = (0);
var state_41650__$1 = (function (){var statearr_41662 = state_41650;
(statearr_41662[(7)] = inst_41614);

(statearr_41662[(9)] = inst_41613);

return statearr_41662;
})();
var statearr_41663_41694 = state_41650__$1;
(statearr_41663_41694[(2)] = null);

(statearr_41663_41694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (11))){
var inst_41614 = (state_41650[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41650,(10),Object,null,(9));
var inst_41623 = chs__$1.call(null,inst_41614);
var inst_41624 = done.call(null,inst_41614);
var inst_41625 = cljs.core.async.take_BANG_.call(null,inst_41623,inst_41624);
var state_41650__$1 = state_41650;
var statearr_41664_41695 = state_41650__$1;
(statearr_41664_41695[(2)] = inst_41625);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41650__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (9))){
var inst_41614 = (state_41650[(7)]);
var inst_41627 = (state_41650[(2)]);
var inst_41628 = (inst_41614 + (1));
var inst_41614__$1 = inst_41628;
var state_41650__$1 = (function (){var statearr_41665 = state_41650;
(statearr_41665[(10)] = inst_41627);

(statearr_41665[(7)] = inst_41614__$1);

return statearr_41665;
})();
var statearr_41666_41696 = state_41650__$1;
(statearr_41666_41696[(2)] = null);

(statearr_41666_41696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (5))){
var inst_41634 = (state_41650[(2)]);
var state_41650__$1 = (function (){var statearr_41667 = state_41650;
(statearr_41667[(11)] = inst_41634);

return statearr_41667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41650__$1,(12),dchan);
} else {
if((state_val_41651 === (14))){
var inst_41636 = (state_41650[(8)]);
var inst_41641 = cljs.core.apply.call(null,f,inst_41636);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41650__$1,(16),out,inst_41641);
} else {
if((state_val_41651 === (16))){
var inst_41643 = (state_41650[(2)]);
var state_41650__$1 = (function (){var statearr_41668 = state_41650;
(statearr_41668[(12)] = inst_41643);

return statearr_41668;
})();
var statearr_41669_41697 = state_41650__$1;
(statearr_41669_41697[(2)] = null);

(statearr_41669_41697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (10))){
var inst_41618 = (state_41650[(2)]);
var inst_41619 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41650__$1 = (function (){var statearr_41670 = state_41650;
(statearr_41670[(13)] = inst_41618);

return statearr_41670;
})();
var statearr_41671_41698 = state_41650__$1;
(statearr_41671_41698[(2)] = inst_41619);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41650__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (8))){
var inst_41632 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41672_41699 = state_41650__$1;
(statearr_41672_41699[(2)] = inst_41632);

(statearr_41672_41699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33300__auto__,c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_41676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41676[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_41676[(1)] = (1));

return statearr_41676;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_41650){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41677){if((e41677 instanceof Object)){
var ex__33304__auto__ = e41677;
var statearr_41678_41700 = state_41650;
(statearr_41678_41700[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41701 = state_41650;
state_41650 = G__41701;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_41650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_41650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33367__auto__ = (function (){var statearr_41679 = f__33366__auto__.call(null);
(statearr_41679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41684);

return statearr_41679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41684,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args41703 = [];
var len__32340__auto___41759 = arguments.length;
var i__32341__auto___41760 = (0);
while(true){
if((i__32341__auto___41760 < len__32340__auto___41759)){
args41703.push((arguments[i__32341__auto___41760]));

var G__41761 = (i__32341__auto___41760 + (1));
i__32341__auto___41760 = G__41761;
continue;
} else {
}
break;
}

var G__41705 = args41703.length;
switch (G__41705) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41703.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___41763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41763,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41763,out){
return (function (state_41735){
var state_val_41736 = (state_41735[(1)]);
if((state_val_41736 === (7))){
var inst_41714 = (state_41735[(7)]);
var inst_41715 = (state_41735[(8)]);
var inst_41714__$1 = (state_41735[(2)]);
var inst_41715__$1 = cljs.core.nth.call(null,inst_41714__$1,(0),null);
var inst_41716 = cljs.core.nth.call(null,inst_41714__$1,(1),null);
var inst_41717 = (inst_41715__$1 == null);
var state_41735__$1 = (function (){var statearr_41737 = state_41735;
(statearr_41737[(7)] = inst_41714__$1);

(statearr_41737[(8)] = inst_41715__$1);

(statearr_41737[(9)] = inst_41716);

return statearr_41737;
})();
if(cljs.core.truth_(inst_41717)){
var statearr_41738_41764 = state_41735__$1;
(statearr_41738_41764[(1)] = (8));

} else {
var statearr_41739_41765 = state_41735__$1;
(statearr_41739_41765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (1))){
var inst_41706 = cljs.core.vec.call(null,chs);
var inst_41707 = inst_41706;
var state_41735__$1 = (function (){var statearr_41740 = state_41735;
(statearr_41740[(10)] = inst_41707);

return statearr_41740;
})();
var statearr_41741_41766 = state_41735__$1;
(statearr_41741_41766[(2)] = null);

(statearr_41741_41766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (4))){
var inst_41707 = (state_41735[(10)]);
var state_41735__$1 = state_41735;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41735__$1,(7),inst_41707);
} else {
if((state_val_41736 === (6))){
var inst_41731 = (state_41735[(2)]);
var state_41735__$1 = state_41735;
var statearr_41742_41767 = state_41735__$1;
(statearr_41742_41767[(2)] = inst_41731);

(statearr_41742_41767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (3))){
var inst_41733 = (state_41735[(2)]);
var state_41735__$1 = state_41735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41735__$1,inst_41733);
} else {
if((state_val_41736 === (2))){
var inst_41707 = (state_41735[(10)]);
var inst_41709 = cljs.core.count.call(null,inst_41707);
var inst_41710 = (inst_41709 > (0));
var state_41735__$1 = state_41735;
if(cljs.core.truth_(inst_41710)){
var statearr_41744_41768 = state_41735__$1;
(statearr_41744_41768[(1)] = (4));

} else {
var statearr_41745_41769 = state_41735__$1;
(statearr_41745_41769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (11))){
var inst_41707 = (state_41735[(10)]);
var inst_41724 = (state_41735[(2)]);
var tmp41743 = inst_41707;
var inst_41707__$1 = tmp41743;
var state_41735__$1 = (function (){var statearr_41746 = state_41735;
(statearr_41746[(11)] = inst_41724);

(statearr_41746[(10)] = inst_41707__$1);

return statearr_41746;
})();
var statearr_41747_41770 = state_41735__$1;
(statearr_41747_41770[(2)] = null);

(statearr_41747_41770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (9))){
var inst_41715 = (state_41735[(8)]);
var state_41735__$1 = state_41735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41735__$1,(11),out,inst_41715);
} else {
if((state_val_41736 === (5))){
var inst_41729 = cljs.core.async.close_BANG_.call(null,out);
var state_41735__$1 = state_41735;
var statearr_41748_41771 = state_41735__$1;
(statearr_41748_41771[(2)] = inst_41729);

(statearr_41748_41771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (10))){
var inst_41727 = (state_41735[(2)]);
var state_41735__$1 = state_41735;
var statearr_41749_41772 = state_41735__$1;
(statearr_41749_41772[(2)] = inst_41727);

(statearr_41749_41772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41736 === (8))){
var inst_41714 = (state_41735[(7)]);
var inst_41715 = (state_41735[(8)]);
var inst_41707 = (state_41735[(10)]);
var inst_41716 = (state_41735[(9)]);
var inst_41719 = (function (){var cs = inst_41707;
var vec__41712 = inst_41714;
var v = inst_41715;
var c = inst_41716;
return ((function (cs,vec__41712,v,c,inst_41714,inst_41715,inst_41707,inst_41716,state_val_41736,c__33365__auto___41763,out){
return (function (p1__41702_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41702_SHARP_);
});
;})(cs,vec__41712,v,c,inst_41714,inst_41715,inst_41707,inst_41716,state_val_41736,c__33365__auto___41763,out))
})();
var inst_41720 = cljs.core.filterv.call(null,inst_41719,inst_41707);
var inst_41707__$1 = inst_41720;
var state_41735__$1 = (function (){var statearr_41750 = state_41735;
(statearr_41750[(10)] = inst_41707__$1);

return statearr_41750;
})();
var statearr_41751_41773 = state_41735__$1;
(statearr_41751_41773[(2)] = null);

(statearr_41751_41773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41763,out))
;
return ((function (switch__33300__auto__,c__33365__auto___41763,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_41755 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41755[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_41755[(1)] = (1));

return statearr_41755;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_41735){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41756){if((e41756 instanceof Object)){
var ex__33304__auto__ = e41756;
var statearr_41757_41774 = state_41735;
(statearr_41757_41774[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41775 = state_41735;
state_41735 = G__41775;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_41735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_41735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41763,out))
})();
var state__33367__auto__ = (function (){var statearr_41758 = f__33366__auto__.call(null);
(statearr_41758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41763);

return statearr_41758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41763,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args41776 = [];
var len__32340__auto___41825 = arguments.length;
var i__32341__auto___41826 = (0);
while(true){
if((i__32341__auto___41826 < len__32340__auto___41825)){
args41776.push((arguments[i__32341__auto___41826]));

var G__41827 = (i__32341__auto___41826 + (1));
i__32341__auto___41826 = G__41827;
continue;
} else {
}
break;
}

var G__41778 = args41776.length;
switch (G__41778) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41776.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___41829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41829,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41829,out){
return (function (state_41802){
var state_val_41803 = (state_41802[(1)]);
if((state_val_41803 === (7))){
var inst_41784 = (state_41802[(7)]);
var inst_41784__$1 = (state_41802[(2)]);
var inst_41785 = (inst_41784__$1 == null);
var inst_41786 = cljs.core.not.call(null,inst_41785);
var state_41802__$1 = (function (){var statearr_41804 = state_41802;
(statearr_41804[(7)] = inst_41784__$1);

return statearr_41804;
})();
if(inst_41786){
var statearr_41805_41830 = state_41802__$1;
(statearr_41805_41830[(1)] = (8));

} else {
var statearr_41806_41831 = state_41802__$1;
(statearr_41806_41831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (1))){
var inst_41779 = (0);
var state_41802__$1 = (function (){var statearr_41807 = state_41802;
(statearr_41807[(8)] = inst_41779);

return statearr_41807;
})();
var statearr_41808_41832 = state_41802__$1;
(statearr_41808_41832[(2)] = null);

(statearr_41808_41832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (4))){
var state_41802__$1 = state_41802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41802__$1,(7),ch);
} else {
if((state_val_41803 === (6))){
var inst_41797 = (state_41802[(2)]);
var state_41802__$1 = state_41802;
var statearr_41809_41833 = state_41802__$1;
(statearr_41809_41833[(2)] = inst_41797);

(statearr_41809_41833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (3))){
var inst_41799 = (state_41802[(2)]);
var inst_41800 = cljs.core.async.close_BANG_.call(null,out);
var state_41802__$1 = (function (){var statearr_41810 = state_41802;
(statearr_41810[(9)] = inst_41799);

return statearr_41810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41802__$1,inst_41800);
} else {
if((state_val_41803 === (2))){
var inst_41779 = (state_41802[(8)]);
var inst_41781 = (inst_41779 < n);
var state_41802__$1 = state_41802;
if(cljs.core.truth_(inst_41781)){
var statearr_41811_41834 = state_41802__$1;
(statearr_41811_41834[(1)] = (4));

} else {
var statearr_41812_41835 = state_41802__$1;
(statearr_41812_41835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (11))){
var inst_41779 = (state_41802[(8)]);
var inst_41789 = (state_41802[(2)]);
var inst_41790 = (inst_41779 + (1));
var inst_41779__$1 = inst_41790;
var state_41802__$1 = (function (){var statearr_41813 = state_41802;
(statearr_41813[(8)] = inst_41779__$1);

(statearr_41813[(10)] = inst_41789);

return statearr_41813;
})();
var statearr_41814_41836 = state_41802__$1;
(statearr_41814_41836[(2)] = null);

(statearr_41814_41836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (9))){
var state_41802__$1 = state_41802;
var statearr_41815_41837 = state_41802__$1;
(statearr_41815_41837[(2)] = null);

(statearr_41815_41837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (5))){
var state_41802__$1 = state_41802;
var statearr_41816_41838 = state_41802__$1;
(statearr_41816_41838[(2)] = null);

(statearr_41816_41838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (10))){
var inst_41794 = (state_41802[(2)]);
var state_41802__$1 = state_41802;
var statearr_41817_41839 = state_41802__$1;
(statearr_41817_41839[(2)] = inst_41794);

(statearr_41817_41839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41803 === (8))){
var inst_41784 = (state_41802[(7)]);
var state_41802__$1 = state_41802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41802__$1,(11),out,inst_41784);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41829,out))
;
return ((function (switch__33300__auto__,c__33365__auto___41829,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_41821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41821[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_41821[(1)] = (1));

return statearr_41821;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_41802){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41822){if((e41822 instanceof Object)){
var ex__33304__auto__ = e41822;
var statearr_41823_41840 = state_41802;
(statearr_41823_41840[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41841 = state_41802;
state_41802 = G__41841;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_41802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_41802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41829,out))
})();
var state__33367__auto__ = (function (){var statearr_41824 = f__33366__auto__.call(null);
(statearr_41824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41829);

return statearr_41824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41829,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41849 = (function (map_LT_,f,ch,meta41850){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41850 = meta41850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41851,meta41850__$1){
var self__ = this;
var _41851__$1 = this;
return (new cljs.core.async.t_cljs$core$async41849(self__.map_LT_,self__.f,self__.ch,meta41850__$1));
});

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41851){
var self__ = this;
var _41851__$1 = this;
return self__.meta41850;
});

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41852 = (function (map_LT_,f,ch,meta41850,_,fn1,meta41853){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41850 = meta41850;
this._ = _;
this.fn1 = fn1;
this.meta41853 = meta41853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41854,meta41853__$1){
var self__ = this;
var _41854__$1 = this;
return (new cljs.core.async.t_cljs$core$async41852(self__.map_LT_,self__.f,self__.ch,self__.meta41850,self__._,self__.fn1,meta41853__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41854){
var self__ = this;
var _41854__$1 = this;
return self__.meta41853;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41842_SHARP_){
return f1.call(null,(((p1__41842_SHARP_ == null))?null:self__.f.call(null,p1__41842_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41850","meta41850",2081002229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41849","cljs.core.async/t_cljs$core$async41849",1473026564,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41853","meta41853",842436166,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41852";

cljs.core.async.t_cljs$core$async41852.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41852");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41852 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41852(map_LT___$1,f__$1,ch__$1,meta41850__$1,___$2,fn1__$1,meta41853){
return (new cljs.core.async.t_cljs$core$async41852(map_LT___$1,f__$1,ch__$1,meta41850__$1,___$2,fn1__$1,meta41853));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41852(self__.map_LT_,self__.f,self__.ch,self__.meta41850,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__31270__auto__ = ret;
if(cljs.core.truth_(and__31270__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__31270__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41850","meta41850",2081002229,null)], null);
});

cljs.core.async.t_cljs$core$async41849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41849";

cljs.core.async.t_cljs$core$async41849.cljs$lang$ctorPrWriter = (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41849");
});

cljs.core.async.__GT_t_cljs$core$async41849 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41849(map_LT___$1,f__$1,ch__$1,meta41850){
return (new cljs.core.async.t_cljs$core$async41849(map_LT___$1,f__$1,ch__$1,meta41850));
});

}

return (new cljs.core.async.t_cljs$core$async41849(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41858 = (function (map_GT_,f,ch,meta41859){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41859 = meta41859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41860,meta41859__$1){
var self__ = this;
var _41860__$1 = this;
return (new cljs.core.async.t_cljs$core$async41858(self__.map_GT_,self__.f,self__.ch,meta41859__$1));
});

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41860){
var self__ = this;
var _41860__$1 = this;
return self__.meta41859;
});

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41859","meta41859",-1244081886,null)], null);
});

cljs.core.async.t_cljs$core$async41858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41858";

cljs.core.async.t_cljs$core$async41858.cljs$lang$ctorPrWriter = (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41858");
});

cljs.core.async.__GT_t_cljs$core$async41858 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41858(map_GT___$1,f__$1,ch__$1,meta41859){
return (new cljs.core.async.t_cljs$core$async41858(map_GT___$1,f__$1,ch__$1,meta41859));
});

}

return (new cljs.core.async.t_cljs$core$async41858(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41864 = (function (filter_GT_,p,ch,meta41865){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41865 = meta41865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41866,meta41865__$1){
var self__ = this;
var _41866__$1 = this;
return (new cljs.core.async.t_cljs$core$async41864(self__.filter_GT_,self__.p,self__.ch,meta41865__$1));
});

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41866){
var self__ = this;
var _41866__$1 = this;
return self__.meta41865;
});

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41865","meta41865",1352621116,null)], null);
});

cljs.core.async.t_cljs$core$async41864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41864";

cljs.core.async.t_cljs$core$async41864.cljs$lang$ctorPrWriter = (function (this__31880__auto__,writer__31881__auto__,opt__31882__auto__){
return cljs.core._write.call(null,writer__31881__auto__,"cljs.core.async/t_cljs$core$async41864");
});

cljs.core.async.__GT_t_cljs$core$async41864 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41864(filter_GT___$1,p__$1,ch__$1,meta41865){
return (new cljs.core.async.t_cljs$core$async41864(filter_GT___$1,p__$1,ch__$1,meta41865));
});

}

return (new cljs.core.async.t_cljs$core$async41864(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args41867 = [];
var len__32340__auto___41911 = arguments.length;
var i__32341__auto___41912 = (0);
while(true){
if((i__32341__auto___41912 < len__32340__auto___41911)){
args41867.push((arguments[i__32341__auto___41912]));

var G__41913 = (i__32341__auto___41912 + (1));
i__32341__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var G__41869 = args41867.length;
switch (G__41869) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41867.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___41915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___41915,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___41915,out){
return (function (state_41890){
var state_val_41891 = (state_41890[(1)]);
if((state_val_41891 === (7))){
var inst_41886 = (state_41890[(2)]);
var state_41890__$1 = state_41890;
var statearr_41892_41916 = state_41890__$1;
(statearr_41892_41916[(2)] = inst_41886);

(statearr_41892_41916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (1))){
var state_41890__$1 = state_41890;
var statearr_41893_41917 = state_41890__$1;
(statearr_41893_41917[(2)] = null);

(statearr_41893_41917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (4))){
var inst_41872 = (state_41890[(7)]);
var inst_41872__$1 = (state_41890[(2)]);
var inst_41873 = (inst_41872__$1 == null);
var state_41890__$1 = (function (){var statearr_41894 = state_41890;
(statearr_41894[(7)] = inst_41872__$1);

return statearr_41894;
})();
if(cljs.core.truth_(inst_41873)){
var statearr_41895_41918 = state_41890__$1;
(statearr_41895_41918[(1)] = (5));

} else {
var statearr_41896_41919 = state_41890__$1;
(statearr_41896_41919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (6))){
var inst_41872 = (state_41890[(7)]);
var inst_41877 = p.call(null,inst_41872);
var state_41890__$1 = state_41890;
if(cljs.core.truth_(inst_41877)){
var statearr_41897_41920 = state_41890__$1;
(statearr_41897_41920[(1)] = (8));

} else {
var statearr_41898_41921 = state_41890__$1;
(statearr_41898_41921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (3))){
var inst_41888 = (state_41890[(2)]);
var state_41890__$1 = state_41890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41890__$1,inst_41888);
} else {
if((state_val_41891 === (2))){
var state_41890__$1 = state_41890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41890__$1,(4),ch);
} else {
if((state_val_41891 === (11))){
var inst_41880 = (state_41890[(2)]);
var state_41890__$1 = state_41890;
var statearr_41899_41922 = state_41890__$1;
(statearr_41899_41922[(2)] = inst_41880);

(statearr_41899_41922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (9))){
var state_41890__$1 = state_41890;
var statearr_41900_41923 = state_41890__$1;
(statearr_41900_41923[(2)] = null);

(statearr_41900_41923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (5))){
var inst_41875 = cljs.core.async.close_BANG_.call(null,out);
var state_41890__$1 = state_41890;
var statearr_41901_41924 = state_41890__$1;
(statearr_41901_41924[(2)] = inst_41875);

(statearr_41901_41924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (10))){
var inst_41883 = (state_41890[(2)]);
var state_41890__$1 = (function (){var statearr_41902 = state_41890;
(statearr_41902[(8)] = inst_41883);

return statearr_41902;
})();
var statearr_41903_41925 = state_41890__$1;
(statearr_41903_41925[(2)] = null);

(statearr_41903_41925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41891 === (8))){
var inst_41872 = (state_41890[(7)]);
var state_41890__$1 = state_41890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41890__$1,(11),out,inst_41872);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___41915,out))
;
return ((function (switch__33300__auto__,c__33365__auto___41915,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_41907 = [null,null,null,null,null,null,null,null,null];
(statearr_41907[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_41907[(1)] = (1));

return statearr_41907;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_41890){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_41890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e41908){if((e41908 instanceof Object)){
var ex__33304__auto__ = e41908;
var statearr_41909_41926 = state_41890;
(statearr_41909_41926[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41927 = state_41890;
state_41890 = G__41927;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_41890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_41890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___41915,out))
})();
var state__33367__auto__ = (function (){var statearr_41910 = f__33366__auto__.call(null);
(statearr_41910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___41915);

return statearr_41910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___41915,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41928 = [];
var len__32340__auto___41931 = arguments.length;
var i__32341__auto___41932 = (0);
while(true){
if((i__32341__auto___41932 < len__32340__auto___41931)){
args41928.push((arguments[i__32341__auto___41932]));

var G__41933 = (i__32341__auto___41932 + (1));
i__32341__auto___41932 = G__41933;
continue;
} else {
}
break;
}

var G__41930 = args41928.length;
switch (G__41930) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41928.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33365__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto__){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto__){
return (function (state_42100){
var state_val_42101 = (state_42100[(1)]);
if((state_val_42101 === (7))){
var inst_42096 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
var statearr_42102_42143 = state_42100__$1;
(statearr_42102_42143[(2)] = inst_42096);

(statearr_42102_42143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (20))){
var inst_42066 = (state_42100[(7)]);
var inst_42077 = (state_42100[(2)]);
var inst_42078 = cljs.core.next.call(null,inst_42066);
var inst_42052 = inst_42078;
var inst_42053 = null;
var inst_42054 = (0);
var inst_42055 = (0);
var state_42100__$1 = (function (){var statearr_42103 = state_42100;
(statearr_42103[(8)] = inst_42052);

(statearr_42103[(9)] = inst_42055);

(statearr_42103[(10)] = inst_42054);

(statearr_42103[(11)] = inst_42077);

(statearr_42103[(12)] = inst_42053);

return statearr_42103;
})();
var statearr_42104_42144 = state_42100__$1;
(statearr_42104_42144[(2)] = null);

(statearr_42104_42144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (1))){
var state_42100__$1 = state_42100;
var statearr_42105_42145 = state_42100__$1;
(statearr_42105_42145[(2)] = null);

(statearr_42105_42145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (4))){
var inst_42041 = (state_42100[(13)]);
var inst_42041__$1 = (state_42100[(2)]);
var inst_42042 = (inst_42041__$1 == null);
var state_42100__$1 = (function (){var statearr_42106 = state_42100;
(statearr_42106[(13)] = inst_42041__$1);

return statearr_42106;
})();
if(cljs.core.truth_(inst_42042)){
var statearr_42107_42146 = state_42100__$1;
(statearr_42107_42146[(1)] = (5));

} else {
var statearr_42108_42147 = state_42100__$1;
(statearr_42108_42147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (15))){
var state_42100__$1 = state_42100;
var statearr_42112_42148 = state_42100__$1;
(statearr_42112_42148[(2)] = null);

(statearr_42112_42148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (21))){
var state_42100__$1 = state_42100;
var statearr_42113_42149 = state_42100__$1;
(statearr_42113_42149[(2)] = null);

(statearr_42113_42149[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (13))){
var inst_42052 = (state_42100[(8)]);
var inst_42055 = (state_42100[(9)]);
var inst_42054 = (state_42100[(10)]);
var inst_42053 = (state_42100[(12)]);
var inst_42062 = (state_42100[(2)]);
var inst_42063 = (inst_42055 + (1));
var tmp42109 = inst_42052;
var tmp42110 = inst_42054;
var tmp42111 = inst_42053;
var inst_42052__$1 = tmp42109;
var inst_42053__$1 = tmp42111;
var inst_42054__$1 = tmp42110;
var inst_42055__$1 = inst_42063;
var state_42100__$1 = (function (){var statearr_42114 = state_42100;
(statearr_42114[(14)] = inst_42062);

(statearr_42114[(8)] = inst_42052__$1);

(statearr_42114[(9)] = inst_42055__$1);

(statearr_42114[(10)] = inst_42054__$1);

(statearr_42114[(12)] = inst_42053__$1);

return statearr_42114;
})();
var statearr_42115_42150 = state_42100__$1;
(statearr_42115_42150[(2)] = null);

(statearr_42115_42150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (22))){
var state_42100__$1 = state_42100;
var statearr_42116_42151 = state_42100__$1;
(statearr_42116_42151[(2)] = null);

(statearr_42116_42151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (6))){
var inst_42041 = (state_42100[(13)]);
var inst_42050 = f.call(null,inst_42041);
var inst_42051 = cljs.core.seq.call(null,inst_42050);
var inst_42052 = inst_42051;
var inst_42053 = null;
var inst_42054 = (0);
var inst_42055 = (0);
var state_42100__$1 = (function (){var statearr_42117 = state_42100;
(statearr_42117[(8)] = inst_42052);

(statearr_42117[(9)] = inst_42055);

(statearr_42117[(10)] = inst_42054);

(statearr_42117[(12)] = inst_42053);

return statearr_42117;
})();
var statearr_42118_42152 = state_42100__$1;
(statearr_42118_42152[(2)] = null);

(statearr_42118_42152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (17))){
var inst_42066 = (state_42100[(7)]);
var inst_42070 = cljs.core.chunk_first.call(null,inst_42066);
var inst_42071 = cljs.core.chunk_rest.call(null,inst_42066);
var inst_42072 = cljs.core.count.call(null,inst_42070);
var inst_42052 = inst_42071;
var inst_42053 = inst_42070;
var inst_42054 = inst_42072;
var inst_42055 = (0);
var state_42100__$1 = (function (){var statearr_42119 = state_42100;
(statearr_42119[(8)] = inst_42052);

(statearr_42119[(9)] = inst_42055);

(statearr_42119[(10)] = inst_42054);

(statearr_42119[(12)] = inst_42053);

return statearr_42119;
})();
var statearr_42120_42153 = state_42100__$1;
(statearr_42120_42153[(2)] = null);

(statearr_42120_42153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (3))){
var inst_42098 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42100__$1,inst_42098);
} else {
if((state_val_42101 === (12))){
var inst_42086 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
var statearr_42121_42154 = state_42100__$1;
(statearr_42121_42154[(2)] = inst_42086);

(statearr_42121_42154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (2))){
var state_42100__$1 = state_42100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42100__$1,(4),in$);
} else {
if((state_val_42101 === (23))){
var inst_42094 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
var statearr_42122_42155 = state_42100__$1;
(statearr_42122_42155[(2)] = inst_42094);

(statearr_42122_42155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (19))){
var inst_42081 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
var statearr_42123_42156 = state_42100__$1;
(statearr_42123_42156[(2)] = inst_42081);

(statearr_42123_42156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (11))){
var inst_42052 = (state_42100[(8)]);
var inst_42066 = (state_42100[(7)]);
var inst_42066__$1 = cljs.core.seq.call(null,inst_42052);
var state_42100__$1 = (function (){var statearr_42124 = state_42100;
(statearr_42124[(7)] = inst_42066__$1);

return statearr_42124;
})();
if(inst_42066__$1){
var statearr_42125_42157 = state_42100__$1;
(statearr_42125_42157[(1)] = (14));

} else {
var statearr_42126_42158 = state_42100__$1;
(statearr_42126_42158[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (9))){
var inst_42088 = (state_42100[(2)]);
var inst_42089 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42100__$1 = (function (){var statearr_42127 = state_42100;
(statearr_42127[(15)] = inst_42088);

return statearr_42127;
})();
if(cljs.core.truth_(inst_42089)){
var statearr_42128_42159 = state_42100__$1;
(statearr_42128_42159[(1)] = (21));

} else {
var statearr_42129_42160 = state_42100__$1;
(statearr_42129_42160[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (5))){
var inst_42044 = cljs.core.async.close_BANG_.call(null,out);
var state_42100__$1 = state_42100;
var statearr_42130_42161 = state_42100__$1;
(statearr_42130_42161[(2)] = inst_42044);

(statearr_42130_42161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (14))){
var inst_42066 = (state_42100[(7)]);
var inst_42068 = cljs.core.chunked_seq_QMARK_.call(null,inst_42066);
var state_42100__$1 = state_42100;
if(inst_42068){
var statearr_42131_42162 = state_42100__$1;
(statearr_42131_42162[(1)] = (17));

} else {
var statearr_42132_42163 = state_42100__$1;
(statearr_42132_42163[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (16))){
var inst_42084 = (state_42100[(2)]);
var state_42100__$1 = state_42100;
var statearr_42133_42164 = state_42100__$1;
(statearr_42133_42164[(2)] = inst_42084);

(statearr_42133_42164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42101 === (10))){
var inst_42055 = (state_42100[(9)]);
var inst_42053 = (state_42100[(12)]);
var inst_42060 = cljs.core._nth.call(null,inst_42053,inst_42055);
var state_42100__$1 = state_42100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42100__$1,(13),out,inst_42060);
} else {
if((state_val_42101 === (18))){
var inst_42066 = (state_42100[(7)]);
var inst_42075 = cljs.core.first.call(null,inst_42066);
var state_42100__$1 = state_42100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42100__$1,(20),out,inst_42075);
} else {
if((state_val_42101 === (8))){
var inst_42055 = (state_42100[(9)]);
var inst_42054 = (state_42100[(10)]);
var inst_42057 = (inst_42055 < inst_42054);
var inst_42058 = inst_42057;
var state_42100__$1 = state_42100;
if(cljs.core.truth_(inst_42058)){
var statearr_42134_42165 = state_42100__$1;
(statearr_42134_42165[(1)] = (10));

} else {
var statearr_42135_42166 = state_42100__$1;
(statearr_42135_42166[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto__))
;
return ((function (switch__33300__auto__,c__33365__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____0 = (function (){
var statearr_42139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42139[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__);

(statearr_42139[(1)] = (1));

return statearr_42139;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____1 = (function (state_42100){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_42100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e42140){if((e42140 instanceof Object)){
var ex__33304__auto__ = e42140;
var statearr_42141_42167 = state_42100;
(statearr_42141_42167[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42168 = state_42100;
state_42100 = G__42168;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__ = function(state_42100){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____1.call(this,state_42100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33301__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto__))
})();
var state__33367__auto__ = (function (){var statearr_42142 = f__33366__auto__.call(null);
(statearr_42142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto__);

return statearr_42142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto__))
);

return c__33365__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42169 = [];
var len__32340__auto___42172 = arguments.length;
var i__32341__auto___42173 = (0);
while(true){
if((i__32341__auto___42173 < len__32340__auto___42172)){
args42169.push((arguments[i__32341__auto___42173]));

var G__42174 = (i__32341__auto___42173 + (1));
i__32341__auto___42173 = G__42174;
continue;
} else {
}
break;
}

var G__42171 = args42169.length;
switch (G__42171) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42169.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args42176 = [];
var len__32340__auto___42179 = arguments.length;
var i__32341__auto___42180 = (0);
while(true){
if((i__32341__auto___42180 < len__32340__auto___42179)){
args42176.push((arguments[i__32341__auto___42180]));

var G__42181 = (i__32341__auto___42180 + (1));
i__32341__auto___42180 = G__42181;
continue;
} else {
}
break;
}

var G__42178 = args42176.length;
switch (G__42178) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42176.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args42183 = [];
var len__32340__auto___42234 = arguments.length;
var i__32341__auto___42235 = (0);
while(true){
if((i__32341__auto___42235 < len__32340__auto___42234)){
args42183.push((arguments[i__32341__auto___42235]));

var G__42236 = (i__32341__auto___42235 + (1));
i__32341__auto___42235 = G__42236;
continue;
} else {
}
break;
}

var G__42185 = args42183.length;
switch (G__42185) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42183.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___42238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___42238,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___42238,out){
return (function (state_42209){
var state_val_42210 = (state_42209[(1)]);
if((state_val_42210 === (7))){
var inst_42204 = (state_42209[(2)]);
var state_42209__$1 = state_42209;
var statearr_42211_42239 = state_42209__$1;
(statearr_42211_42239[(2)] = inst_42204);

(statearr_42211_42239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (1))){
var inst_42186 = null;
var state_42209__$1 = (function (){var statearr_42212 = state_42209;
(statearr_42212[(7)] = inst_42186);

return statearr_42212;
})();
var statearr_42213_42240 = state_42209__$1;
(statearr_42213_42240[(2)] = null);

(statearr_42213_42240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (4))){
var inst_42189 = (state_42209[(8)]);
var inst_42189__$1 = (state_42209[(2)]);
var inst_42190 = (inst_42189__$1 == null);
var inst_42191 = cljs.core.not.call(null,inst_42190);
var state_42209__$1 = (function (){var statearr_42214 = state_42209;
(statearr_42214[(8)] = inst_42189__$1);

return statearr_42214;
})();
if(inst_42191){
var statearr_42215_42241 = state_42209__$1;
(statearr_42215_42241[(1)] = (5));

} else {
var statearr_42216_42242 = state_42209__$1;
(statearr_42216_42242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (6))){
var state_42209__$1 = state_42209;
var statearr_42217_42243 = state_42209__$1;
(statearr_42217_42243[(2)] = null);

(statearr_42217_42243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (3))){
var inst_42206 = (state_42209[(2)]);
var inst_42207 = cljs.core.async.close_BANG_.call(null,out);
var state_42209__$1 = (function (){var statearr_42218 = state_42209;
(statearr_42218[(9)] = inst_42206);

return statearr_42218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42209__$1,inst_42207);
} else {
if((state_val_42210 === (2))){
var state_42209__$1 = state_42209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42209__$1,(4),ch);
} else {
if((state_val_42210 === (11))){
var inst_42189 = (state_42209[(8)]);
var inst_42198 = (state_42209[(2)]);
var inst_42186 = inst_42189;
var state_42209__$1 = (function (){var statearr_42219 = state_42209;
(statearr_42219[(10)] = inst_42198);

(statearr_42219[(7)] = inst_42186);

return statearr_42219;
})();
var statearr_42220_42244 = state_42209__$1;
(statearr_42220_42244[(2)] = null);

(statearr_42220_42244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (9))){
var inst_42189 = (state_42209[(8)]);
var state_42209__$1 = state_42209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42209__$1,(11),out,inst_42189);
} else {
if((state_val_42210 === (5))){
var inst_42189 = (state_42209[(8)]);
var inst_42186 = (state_42209[(7)]);
var inst_42193 = cljs.core._EQ_.call(null,inst_42189,inst_42186);
var state_42209__$1 = state_42209;
if(inst_42193){
var statearr_42222_42245 = state_42209__$1;
(statearr_42222_42245[(1)] = (8));

} else {
var statearr_42223_42246 = state_42209__$1;
(statearr_42223_42246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (10))){
var inst_42201 = (state_42209[(2)]);
var state_42209__$1 = state_42209;
var statearr_42224_42247 = state_42209__$1;
(statearr_42224_42247[(2)] = inst_42201);

(statearr_42224_42247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42210 === (8))){
var inst_42186 = (state_42209[(7)]);
var tmp42221 = inst_42186;
var inst_42186__$1 = tmp42221;
var state_42209__$1 = (function (){var statearr_42225 = state_42209;
(statearr_42225[(7)] = inst_42186__$1);

return statearr_42225;
})();
var statearr_42226_42248 = state_42209__$1;
(statearr_42226_42248[(2)] = null);

(statearr_42226_42248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___42238,out))
;
return ((function (switch__33300__auto__,c__33365__auto___42238,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_42230 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42230[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_42230[(1)] = (1));

return statearr_42230;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_42209){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_42209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e42231){if((e42231 instanceof Object)){
var ex__33304__auto__ = e42231;
var statearr_42232_42249 = state_42209;
(statearr_42232_42249[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42250 = state_42209;
state_42209 = G__42250;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_42209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_42209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___42238,out))
})();
var state__33367__auto__ = (function (){var statearr_42233 = f__33366__auto__.call(null);
(statearr_42233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___42238);

return statearr_42233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___42238,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42251 = [];
var len__32340__auto___42321 = arguments.length;
var i__32341__auto___42322 = (0);
while(true){
if((i__32341__auto___42322 < len__32340__auto___42321)){
args42251.push((arguments[i__32341__auto___42322]));

var G__42323 = (i__32341__auto___42322 + (1));
i__32341__auto___42322 = G__42323;
continue;
} else {
}
break;
}

var G__42253 = args42251.length;
switch (G__42253) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42251.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___42325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___42325,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___42325,out){
return (function (state_42291){
var state_val_42292 = (state_42291[(1)]);
if((state_val_42292 === (7))){
var inst_42287 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42293_42326 = state_42291__$1;
(statearr_42293_42326[(2)] = inst_42287);

(statearr_42293_42326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (1))){
var inst_42254 = (new Array(n));
var inst_42255 = inst_42254;
var inst_42256 = (0);
var state_42291__$1 = (function (){var statearr_42294 = state_42291;
(statearr_42294[(7)] = inst_42256);

(statearr_42294[(8)] = inst_42255);

return statearr_42294;
})();
var statearr_42295_42327 = state_42291__$1;
(statearr_42295_42327[(2)] = null);

(statearr_42295_42327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (4))){
var inst_42259 = (state_42291[(9)]);
var inst_42259__$1 = (state_42291[(2)]);
var inst_42260 = (inst_42259__$1 == null);
var inst_42261 = cljs.core.not.call(null,inst_42260);
var state_42291__$1 = (function (){var statearr_42296 = state_42291;
(statearr_42296[(9)] = inst_42259__$1);

return statearr_42296;
})();
if(inst_42261){
var statearr_42297_42328 = state_42291__$1;
(statearr_42297_42328[(1)] = (5));

} else {
var statearr_42298_42329 = state_42291__$1;
(statearr_42298_42329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (15))){
var inst_42281 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42299_42330 = state_42291__$1;
(statearr_42299_42330[(2)] = inst_42281);

(statearr_42299_42330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (13))){
var state_42291__$1 = state_42291;
var statearr_42300_42331 = state_42291__$1;
(statearr_42300_42331[(2)] = null);

(statearr_42300_42331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (6))){
var inst_42256 = (state_42291[(7)]);
var inst_42277 = (inst_42256 > (0));
var state_42291__$1 = state_42291;
if(cljs.core.truth_(inst_42277)){
var statearr_42301_42332 = state_42291__$1;
(statearr_42301_42332[(1)] = (12));

} else {
var statearr_42302_42333 = state_42291__$1;
(statearr_42302_42333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (3))){
var inst_42289 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42291__$1,inst_42289);
} else {
if((state_val_42292 === (12))){
var inst_42255 = (state_42291[(8)]);
var inst_42279 = cljs.core.vec.call(null,inst_42255);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(15),out,inst_42279);
} else {
if((state_val_42292 === (2))){
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42291__$1,(4),ch);
} else {
if((state_val_42292 === (11))){
var inst_42271 = (state_42291[(2)]);
var inst_42272 = (new Array(n));
var inst_42255 = inst_42272;
var inst_42256 = (0);
var state_42291__$1 = (function (){var statearr_42303 = state_42291;
(statearr_42303[(10)] = inst_42271);

(statearr_42303[(7)] = inst_42256);

(statearr_42303[(8)] = inst_42255);

return statearr_42303;
})();
var statearr_42304_42334 = state_42291__$1;
(statearr_42304_42334[(2)] = null);

(statearr_42304_42334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (9))){
var inst_42255 = (state_42291[(8)]);
var inst_42269 = cljs.core.vec.call(null,inst_42255);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(11),out,inst_42269);
} else {
if((state_val_42292 === (5))){
var inst_42259 = (state_42291[(9)]);
var inst_42264 = (state_42291[(11)]);
var inst_42256 = (state_42291[(7)]);
var inst_42255 = (state_42291[(8)]);
var inst_42263 = (inst_42255[inst_42256] = inst_42259);
var inst_42264__$1 = (inst_42256 + (1));
var inst_42265 = (inst_42264__$1 < n);
var state_42291__$1 = (function (){var statearr_42305 = state_42291;
(statearr_42305[(11)] = inst_42264__$1);

(statearr_42305[(12)] = inst_42263);

return statearr_42305;
})();
if(cljs.core.truth_(inst_42265)){
var statearr_42306_42335 = state_42291__$1;
(statearr_42306_42335[(1)] = (8));

} else {
var statearr_42307_42336 = state_42291__$1;
(statearr_42307_42336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (14))){
var inst_42284 = (state_42291[(2)]);
var inst_42285 = cljs.core.async.close_BANG_.call(null,out);
var state_42291__$1 = (function (){var statearr_42309 = state_42291;
(statearr_42309[(13)] = inst_42284);

return statearr_42309;
})();
var statearr_42310_42337 = state_42291__$1;
(statearr_42310_42337[(2)] = inst_42285);

(statearr_42310_42337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (10))){
var inst_42275 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42311_42338 = state_42291__$1;
(statearr_42311_42338[(2)] = inst_42275);

(statearr_42311_42338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (8))){
var inst_42264 = (state_42291[(11)]);
var inst_42255 = (state_42291[(8)]);
var tmp42308 = inst_42255;
var inst_42255__$1 = tmp42308;
var inst_42256 = inst_42264;
var state_42291__$1 = (function (){var statearr_42312 = state_42291;
(statearr_42312[(7)] = inst_42256);

(statearr_42312[(8)] = inst_42255__$1);

return statearr_42312;
})();
var statearr_42313_42339 = state_42291__$1;
(statearr_42313_42339[(2)] = null);

(statearr_42313_42339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___42325,out))
;
return ((function (switch__33300__auto__,c__33365__auto___42325,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_42317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42317[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_42317[(1)] = (1));

return statearr_42317;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_42291){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_42291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e42318){if((e42318 instanceof Object)){
var ex__33304__auto__ = e42318;
var statearr_42319_42340 = state_42291;
(statearr_42319_42340[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42341 = state_42291;
state_42291 = G__42341;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_42291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_42291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___42325,out))
})();
var state__33367__auto__ = (function (){var statearr_42320 = f__33366__auto__.call(null);
(statearr_42320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___42325);

return statearr_42320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___42325,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42342 = [];
var len__32340__auto___42416 = arguments.length;
var i__32341__auto___42417 = (0);
while(true){
if((i__32341__auto___42417 < len__32340__auto___42416)){
args42342.push((arguments[i__32341__auto___42417]));

var G__42418 = (i__32341__auto___42417 + (1));
i__32341__auto___42417 = G__42418;
continue;
} else {
}
break;
}

var G__42344 = args42342.length;
switch (G__42344) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42342.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33365__auto___42420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33365__auto___42420,out){
return (function (){
var f__33366__auto__ = (function (){var switch__33300__auto__ = ((function (c__33365__auto___42420,out){
return (function (state_42386){
var state_val_42387 = (state_42386[(1)]);
if((state_val_42387 === (7))){
var inst_42382 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
var statearr_42388_42421 = state_42386__$1;
(statearr_42388_42421[(2)] = inst_42382);

(statearr_42388_42421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (1))){
var inst_42345 = [];
var inst_42346 = inst_42345;
var inst_42347 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42386__$1 = (function (){var statearr_42389 = state_42386;
(statearr_42389[(7)] = inst_42347);

(statearr_42389[(8)] = inst_42346);

return statearr_42389;
})();
var statearr_42390_42422 = state_42386__$1;
(statearr_42390_42422[(2)] = null);

(statearr_42390_42422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (4))){
var inst_42350 = (state_42386[(9)]);
var inst_42350__$1 = (state_42386[(2)]);
var inst_42351 = (inst_42350__$1 == null);
var inst_42352 = cljs.core.not.call(null,inst_42351);
var state_42386__$1 = (function (){var statearr_42391 = state_42386;
(statearr_42391[(9)] = inst_42350__$1);

return statearr_42391;
})();
if(inst_42352){
var statearr_42392_42423 = state_42386__$1;
(statearr_42392_42423[(1)] = (5));

} else {
var statearr_42393_42424 = state_42386__$1;
(statearr_42393_42424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (15))){
var inst_42376 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
var statearr_42394_42425 = state_42386__$1;
(statearr_42394_42425[(2)] = inst_42376);

(statearr_42394_42425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (13))){
var state_42386__$1 = state_42386;
var statearr_42395_42426 = state_42386__$1;
(statearr_42395_42426[(2)] = null);

(statearr_42395_42426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (6))){
var inst_42346 = (state_42386[(8)]);
var inst_42371 = inst_42346.length;
var inst_42372 = (inst_42371 > (0));
var state_42386__$1 = state_42386;
if(cljs.core.truth_(inst_42372)){
var statearr_42396_42427 = state_42386__$1;
(statearr_42396_42427[(1)] = (12));

} else {
var statearr_42397_42428 = state_42386__$1;
(statearr_42397_42428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (3))){
var inst_42384 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42386__$1,inst_42384);
} else {
if((state_val_42387 === (12))){
var inst_42346 = (state_42386[(8)]);
var inst_42374 = cljs.core.vec.call(null,inst_42346);
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42386__$1,(15),out,inst_42374);
} else {
if((state_val_42387 === (2))){
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42386__$1,(4),ch);
} else {
if((state_val_42387 === (11))){
var inst_42350 = (state_42386[(9)]);
var inst_42354 = (state_42386[(10)]);
var inst_42364 = (state_42386[(2)]);
var inst_42365 = [];
var inst_42366 = inst_42365.push(inst_42350);
var inst_42346 = inst_42365;
var inst_42347 = inst_42354;
var state_42386__$1 = (function (){var statearr_42398 = state_42386;
(statearr_42398[(11)] = inst_42364);

(statearr_42398[(7)] = inst_42347);

(statearr_42398[(12)] = inst_42366);

(statearr_42398[(8)] = inst_42346);

return statearr_42398;
})();
var statearr_42399_42429 = state_42386__$1;
(statearr_42399_42429[(2)] = null);

(statearr_42399_42429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (9))){
var inst_42346 = (state_42386[(8)]);
var inst_42362 = cljs.core.vec.call(null,inst_42346);
var state_42386__$1 = state_42386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42386__$1,(11),out,inst_42362);
} else {
if((state_val_42387 === (5))){
var inst_42347 = (state_42386[(7)]);
var inst_42350 = (state_42386[(9)]);
var inst_42354 = (state_42386[(10)]);
var inst_42354__$1 = f.call(null,inst_42350);
var inst_42355 = cljs.core._EQ_.call(null,inst_42354__$1,inst_42347);
var inst_42356 = cljs.core.keyword_identical_QMARK_.call(null,inst_42347,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42357 = (inst_42355) || (inst_42356);
var state_42386__$1 = (function (){var statearr_42400 = state_42386;
(statearr_42400[(10)] = inst_42354__$1);

return statearr_42400;
})();
if(cljs.core.truth_(inst_42357)){
var statearr_42401_42430 = state_42386__$1;
(statearr_42401_42430[(1)] = (8));

} else {
var statearr_42402_42431 = state_42386__$1;
(statearr_42402_42431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (14))){
var inst_42379 = (state_42386[(2)]);
var inst_42380 = cljs.core.async.close_BANG_.call(null,out);
var state_42386__$1 = (function (){var statearr_42404 = state_42386;
(statearr_42404[(13)] = inst_42379);

return statearr_42404;
})();
var statearr_42405_42432 = state_42386__$1;
(statearr_42405_42432[(2)] = inst_42380);

(statearr_42405_42432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (10))){
var inst_42369 = (state_42386[(2)]);
var state_42386__$1 = state_42386;
var statearr_42406_42433 = state_42386__$1;
(statearr_42406_42433[(2)] = inst_42369);

(statearr_42406_42433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42387 === (8))){
var inst_42350 = (state_42386[(9)]);
var inst_42354 = (state_42386[(10)]);
var inst_42346 = (state_42386[(8)]);
var inst_42359 = inst_42346.push(inst_42350);
var tmp42403 = inst_42346;
var inst_42346__$1 = tmp42403;
var inst_42347 = inst_42354;
var state_42386__$1 = (function (){var statearr_42407 = state_42386;
(statearr_42407[(7)] = inst_42347);

(statearr_42407[(14)] = inst_42359);

(statearr_42407[(8)] = inst_42346__$1);

return statearr_42407;
})();
var statearr_42408_42434 = state_42386__$1;
(statearr_42408_42434[(2)] = null);

(statearr_42408_42434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33365__auto___42420,out))
;
return ((function (switch__33300__auto__,c__33365__auto___42420,out){
return (function() {
var cljs$core$async$state_machine__33301__auto__ = null;
var cljs$core$async$state_machine__33301__auto____0 = (function (){
var statearr_42412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42412[(0)] = cljs$core$async$state_machine__33301__auto__);

(statearr_42412[(1)] = (1));

return statearr_42412;
});
var cljs$core$async$state_machine__33301__auto____1 = (function (state_42386){
while(true){
var ret_value__33302__auto__ = (function (){try{while(true){
var result__33303__auto__ = switch__33300__auto__.call(null,state_42386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33303__auto__;
}
break;
}
}catch (e42413){if((e42413 instanceof Object)){
var ex__33304__auto__ = e42413;
var statearr_42414_42435 = state_42386;
(statearr_42414_42435[(5)] = ex__33304__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42436 = state_42386;
state_42386 = G__42436;
continue;
} else {
return ret_value__33302__auto__;
}
break;
}
});
cljs$core$async$state_machine__33301__auto__ = function(state_42386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33301__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33301__auto____1.call(this,state_42386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33301__auto____0;
cljs$core$async$state_machine__33301__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33301__auto____1;
return cljs$core$async$state_machine__33301__auto__;
})()
;})(switch__33300__auto__,c__33365__auto___42420,out))
})();
var state__33367__auto__ = (function (){var statearr_42415 = f__33366__auto__.call(null);
(statearr_42415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33365__auto___42420);

return statearr_42415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33367__auto__);
});})(c__33365__auto___42420,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map