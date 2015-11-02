// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async17460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17460 = (function (fn_handler,f,meta17461){
this.fn_handler = fn_handler;
this.f = f;
this.meta17461 = meta17461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17462,meta17461__$1){
var self__ = this;
var _17462__$1 = this;
return (new cljs.core.async.t_cljs$core$async17460(self__.fn_handler,self__.f,meta17461__$1));
});

cljs.core.async.t_cljs$core$async17460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17462){
var self__ = this;
var _17462__$1 = this;
return self__.meta17461;
});

cljs.core.async.t_cljs$core$async17460.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17461","meta17461",2130096254,null)], null);
});

cljs.core.async.t_cljs$core$async17460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17460";

cljs.core.async.t_cljs$core$async17460.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17460");
});

cljs.core.async.__GT_t_cljs$core$async17460 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17460(fn_handler__$1,f__$1,meta17461){
return (new cljs.core.async.t_cljs$core$async17460(fn_handler__$1,f__$1,meta17461));
});

}

return (new cljs.core.async.t_cljs$core$async17460(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args17465 = [];
var len__6152__auto___17468 = arguments.length;
var i__6153__auto___17469 = (0);
while(true){
if((i__6153__auto___17469 < len__6152__auto___17468)){
args17465.push((arguments[i__6153__auto___17469]));

var G__17470 = (i__6153__auto___17469 + (1));
i__6153__auto___17469 = G__17470;
continue;
} else {
}
break;
}

var G__17467 = args17465.length;
switch (G__17467) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17465.length)].join('')));

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
var args17472 = [];
var len__6152__auto___17475 = arguments.length;
var i__6153__auto___17476 = (0);
while(true){
if((i__6153__auto___17476 < len__6152__auto___17475)){
args17472.push((arguments[i__6153__auto___17476]));

var G__17477 = (i__6153__auto___17476 + (1));
i__6153__auto___17476 = G__17477;
continue;
} else {
}
break;
}

var G__17474 = args17472.length;
switch (G__17474) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17472.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17479 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17479);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17479,ret){
return (function (){
return fn1.call(null,val_17479);
});})(val_17479,ret))
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
var args17480 = [];
var len__6152__auto___17483 = arguments.length;
var i__6153__auto___17484 = (0);
while(true){
if((i__6153__auto___17484 < len__6152__auto___17483)){
args17480.push((arguments[i__6153__auto___17484]));

var G__17485 = (i__6153__auto___17484 + (1));
i__6153__auto___17484 = G__17485;
continue;
} else {
}
break;
}

var G__17482 = args17480.length;
switch (G__17482) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17480.length)].join('')));

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
var n__5997__auto___17487 = n;
var x_17488 = (0);
while(true){
if((x_17488 < n__5997__auto___17487)){
(a[x_17488] = (0));

var G__17489 = (x_17488 + (1));
x_17488 = G__17489;
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

var G__17490 = (i + (1));
i = G__17490;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17494 = (function (alt_flag,flag,meta17495){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17495 = meta17495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17496,meta17495__$1){
var self__ = this;
var _17496__$1 = this;
return (new cljs.core.async.t_cljs$core$async17494(self__.alt_flag,self__.flag,meta17495__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17496){
var self__ = this;
var _17496__$1 = this;
return self__.meta17495;
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17495","meta17495",1907903016,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17494";

cljs.core.async.t_cljs$core$async17494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17494");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17494 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17494(alt_flag__$1,flag__$1,meta17495){
return (new cljs.core.async.t_cljs$core$async17494(alt_flag__$1,flag__$1,meta17495));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17494(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17500 = (function (alt_handler,flag,cb,meta17501){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17501 = meta17501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17502,meta17501__$1){
var self__ = this;
var _17502__$1 = this;
return (new cljs.core.async.t_cljs$core$async17500(self__.alt_handler,self__.flag,self__.cb,meta17501__$1));
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17502){
var self__ = this;
var _17502__$1 = this;
return self__.meta17501;
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17501","meta17501",-1609133597,null)], null);
});

cljs.core.async.t_cljs$core$async17500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17500";

cljs.core.async.t_cljs$core$async17500.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17500");
});

cljs.core.async.__GT_t_cljs$core$async17500 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17500(alt_handler__$1,flag__$1,cb__$1,meta17501){
return (new cljs.core.async.t_cljs$core$async17500(alt_handler__$1,flag__$1,cb__$1,meta17501));
});

}

return (new cljs.core.async.t_cljs$core$async17500(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17503_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17503_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17504_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17504_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5094__auto__ = wport;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17505 = (i + (1));
i = G__17505;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5094__auto__ = ret;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5082__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5082__auto__;
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
var args__6159__auto__ = [];
var len__6152__auto___17511 = arguments.length;
var i__6153__auto___17512 = (0);
while(true){
if((i__6153__auto___17512 < len__6152__auto___17511)){
args__6159__auto__.push((arguments[i__6153__auto___17512]));

var G__17513 = (i__6153__auto___17512 + (1));
i__6153__auto___17512 = G__17513;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17508){
var map__17509 = p__17508;
var map__17509__$1 = ((((!((map__17509 == null)))?((((map__17509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17509):map__17509);
var opts = map__17509__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17506){
var G__17507 = cljs.core.first.call(null,seq17506);
var seq17506__$1 = cljs.core.next.call(null,seq17506);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17507,seq17506__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17514 = [];
var len__6152__auto___17564 = arguments.length;
var i__6153__auto___17565 = (0);
while(true){
if((i__6153__auto___17565 < len__6152__auto___17564)){
args17514.push((arguments[i__6153__auto___17565]));

var G__17566 = (i__6153__auto___17565 + (1));
i__6153__auto___17565 = G__17566;
continue;
} else {
}
break;
}

var G__17516 = args17514.length;
switch (G__17516) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17514.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10260__auto___17568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17568){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17568){
return (function (state_17540){
var state_val_17541 = (state_17540[(1)]);
if((state_val_17541 === (7))){
var inst_17536 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17542_17569 = state_17540__$1;
(statearr_17542_17569[(2)] = inst_17536);

(statearr_17542_17569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (1))){
var state_17540__$1 = state_17540;
var statearr_17543_17570 = state_17540__$1;
(statearr_17543_17570[(2)] = null);

(statearr_17543_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (4))){
var inst_17519 = (state_17540[(7)]);
var inst_17519__$1 = (state_17540[(2)]);
var inst_17520 = (inst_17519__$1 == null);
var state_17540__$1 = (function (){var statearr_17544 = state_17540;
(statearr_17544[(7)] = inst_17519__$1);

return statearr_17544;
})();
if(cljs.core.truth_(inst_17520)){
var statearr_17545_17571 = state_17540__$1;
(statearr_17545_17571[(1)] = (5));

} else {
var statearr_17546_17572 = state_17540__$1;
(statearr_17546_17572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (13))){
var state_17540__$1 = state_17540;
var statearr_17547_17573 = state_17540__$1;
(statearr_17547_17573[(2)] = null);

(statearr_17547_17573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (6))){
var inst_17519 = (state_17540[(7)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17540__$1,(11),to,inst_17519);
} else {
if((state_val_17541 === (3))){
var inst_17538 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17540__$1,inst_17538);
} else {
if((state_val_17541 === (12))){
var state_17540__$1 = state_17540;
var statearr_17548_17574 = state_17540__$1;
(statearr_17548_17574[(2)] = null);

(statearr_17548_17574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (2))){
var state_17540__$1 = state_17540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17540__$1,(4),from);
} else {
if((state_val_17541 === (11))){
var inst_17529 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
if(cljs.core.truth_(inst_17529)){
var statearr_17549_17575 = state_17540__$1;
(statearr_17549_17575[(1)] = (12));

} else {
var statearr_17550_17576 = state_17540__$1;
(statearr_17550_17576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (9))){
var state_17540__$1 = state_17540;
var statearr_17551_17577 = state_17540__$1;
(statearr_17551_17577[(2)] = null);

(statearr_17551_17577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (5))){
var state_17540__$1 = state_17540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17552_17578 = state_17540__$1;
(statearr_17552_17578[(1)] = (8));

} else {
var statearr_17553_17579 = state_17540__$1;
(statearr_17553_17579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (14))){
var inst_17534 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17554_17580 = state_17540__$1;
(statearr_17554_17580[(2)] = inst_17534);

(statearr_17554_17580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (10))){
var inst_17526 = (state_17540[(2)]);
var state_17540__$1 = state_17540;
var statearr_17555_17581 = state_17540__$1;
(statearr_17555_17581[(2)] = inst_17526);

(statearr_17555_17581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17541 === (8))){
var inst_17523 = cljs.core.async.close_BANG_.call(null,to);
var state_17540__$1 = state_17540;
var statearr_17556_17582 = state_17540__$1;
(statearr_17556_17582[(2)] = inst_17523);

(statearr_17556_17582[(1)] = (10));


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
});})(c__10260__auto___17568))
;
return ((function (switch__10195__auto__,c__10260__auto___17568){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_17560 = [null,null,null,null,null,null,null,null];
(statearr_17560[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_17560[(1)] = (1));

return statearr_17560;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_17540){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17561){if((e17561 instanceof Object)){
var ex__10199__auto__ = e17561;
var statearr_17562_17583 = state_17540;
(statearr_17562_17583[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17584 = state_17540;
state_17540 = G__17584;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_17540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_17540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17568))
})();
var state__10262__auto__ = (function (){var statearr_17563 = f__10261__auto__.call(null);
(statearr_17563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17568);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17568))
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
return (function (p__17768){
var vec__17769 = p__17768;
var v = cljs.core.nth.call(null,vec__17769,(0),null);
var p = cljs.core.nth.call(null,vec__17769,(1),null);
var job = vec__17769;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10260__auto___17951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results){
return (function (state_17774){
var state_val_17775 = (state_17774[(1)]);
if((state_val_17775 === (1))){
var state_17774__$1 = state_17774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17774__$1,(2),res,v);
} else {
if((state_val_17775 === (2))){
var inst_17771 = (state_17774[(2)]);
var inst_17772 = cljs.core.async.close_BANG_.call(null,res);
var state_17774__$1 = (function (){var statearr_17776 = state_17774;
(statearr_17776[(7)] = inst_17771);

return statearr_17776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17774__$1,inst_17772);
} else {
return null;
}
}
});})(c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results))
;
return ((function (switch__10195__auto__,c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17780 = [null,null,null,null,null,null,null,null];
(statearr_17780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17780[(1)] = (1));

return statearr_17780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17774){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17781){if((e17781 instanceof Object)){
var ex__10199__auto__ = e17781;
var statearr_17782_17952 = state_17774;
(statearr_17782_17952[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17953 = state_17774;
state_17774 = G__17953;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results))
})();
var state__10262__auto__ = (function (){var statearr_17783 = f__10261__auto__.call(null);
(statearr_17783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17951);

return statearr_17783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17951,res,vec__17769,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17784){
var vec__17785 = p__17784;
var v = cljs.core.nth.call(null,vec__17785,(0),null);
var p = cljs.core.nth.call(null,vec__17785,(1),null);
var job = vec__17785;
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
var n__5997__auto___17954 = n;
var __17955 = (0);
while(true){
if((__17955 < n__5997__auto___17954)){
var G__17786_17956 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17786_17956) {
case "compute":
var c__10260__auto___17958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17955,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (__17955,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function (state_17799){
var state_val_17800 = (state_17799[(1)]);
if((state_val_17800 === (1))){
var state_17799__$1 = state_17799;
var statearr_17801_17959 = state_17799__$1;
(statearr_17801_17959[(2)] = null);

(statearr_17801_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (2))){
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17799__$1,(4),jobs);
} else {
if((state_val_17800 === (3))){
var inst_17797 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17799__$1,inst_17797);
} else {
if((state_val_17800 === (4))){
var inst_17789 = (state_17799[(2)]);
var inst_17790 = process.call(null,inst_17789);
var state_17799__$1 = state_17799;
if(cljs.core.truth_(inst_17790)){
var statearr_17802_17960 = state_17799__$1;
(statearr_17802_17960[(1)] = (5));

} else {
var statearr_17803_17961 = state_17799__$1;
(statearr_17803_17961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (5))){
var state_17799__$1 = state_17799;
var statearr_17804_17962 = state_17799__$1;
(statearr_17804_17962[(2)] = null);

(statearr_17804_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (6))){
var state_17799__$1 = state_17799;
var statearr_17805_17963 = state_17799__$1;
(statearr_17805_17963[(2)] = null);

(statearr_17805_17963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17800 === (7))){
var inst_17795 = (state_17799[(2)]);
var state_17799__$1 = state_17799;
var statearr_17806_17964 = state_17799__$1;
(statearr_17806_17964[(2)] = inst_17795);

(statearr_17806_17964[(1)] = (3));


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
});})(__17955,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
;
return ((function (__17955,switch__10195__auto__,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17810 = [null,null,null,null,null,null,null];
(statearr_17810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17810[(1)] = (1));

return statearr_17810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17799){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17811){if((e17811 instanceof Object)){
var ex__10199__auto__ = e17811;
var statearr_17812_17965 = state_17799;
(statearr_17812_17965[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17966 = state_17799;
state_17799 = G__17966;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(__17955,switch__10195__auto__,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17813 = f__10261__auto__.call(null);
(statearr_17813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17958);

return statearr_17813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(__17955,c__10260__auto___17958,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
);


break;
case "async":
var c__10260__auto___17967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17955,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (__17955,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function (state_17826){
var state_val_17827 = (state_17826[(1)]);
if((state_val_17827 === (1))){
var state_17826__$1 = state_17826;
var statearr_17828_17968 = state_17826__$1;
(statearr_17828_17968[(2)] = null);

(statearr_17828_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (2))){
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17826__$1,(4),jobs);
} else {
if((state_val_17827 === (3))){
var inst_17824 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17826__$1,inst_17824);
} else {
if((state_val_17827 === (4))){
var inst_17816 = (state_17826[(2)]);
var inst_17817 = async.call(null,inst_17816);
var state_17826__$1 = state_17826;
if(cljs.core.truth_(inst_17817)){
var statearr_17829_17969 = state_17826__$1;
(statearr_17829_17969[(1)] = (5));

} else {
var statearr_17830_17970 = state_17826__$1;
(statearr_17830_17970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (5))){
var state_17826__$1 = state_17826;
var statearr_17831_17971 = state_17826__$1;
(statearr_17831_17971[(2)] = null);

(statearr_17831_17971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (6))){
var state_17826__$1 = state_17826;
var statearr_17832_17972 = state_17826__$1;
(statearr_17832_17972[(2)] = null);

(statearr_17832_17972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (7))){
var inst_17822 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17833_17973 = state_17826__$1;
(statearr_17833_17973[(2)] = inst_17822);

(statearr_17833_17973[(1)] = (3));


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
});})(__17955,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
;
return ((function (__17955,switch__10195__auto__,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17837 = [null,null,null,null,null,null,null];
(statearr_17837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17837[(1)] = (1));

return statearr_17837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17826){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17838){if((e17838 instanceof Object)){
var ex__10199__auto__ = e17838;
var statearr_17839_17974 = state_17826;
(statearr_17839_17974[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17975 = state_17826;
state_17826 = G__17975;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(__17955,switch__10195__auto__,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17840 = f__10261__auto__.call(null);
(statearr_17840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17967);

return statearr_17840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(__17955,c__10260__auto___17967,G__17786_17956,n__5997__auto___17954,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17976 = (__17955 + (1));
__17955 = G__17976;
continue;
} else {
}
break;
}

var c__10260__auto___17977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17977,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17977,jobs,results,process,async){
return (function (state_17862){
var state_val_17863 = (state_17862[(1)]);
if((state_val_17863 === (1))){
var state_17862__$1 = state_17862;
var statearr_17864_17978 = state_17862__$1;
(statearr_17864_17978[(2)] = null);

(statearr_17864_17978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (2))){
var state_17862__$1 = state_17862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17862__$1,(4),from);
} else {
if((state_val_17863 === (3))){
var inst_17860 = (state_17862[(2)]);
var state_17862__$1 = state_17862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17862__$1,inst_17860);
} else {
if((state_val_17863 === (4))){
var inst_17843 = (state_17862[(7)]);
var inst_17843__$1 = (state_17862[(2)]);
var inst_17844 = (inst_17843__$1 == null);
var state_17862__$1 = (function (){var statearr_17865 = state_17862;
(statearr_17865[(7)] = inst_17843__$1);

return statearr_17865;
})();
if(cljs.core.truth_(inst_17844)){
var statearr_17866_17979 = state_17862__$1;
(statearr_17866_17979[(1)] = (5));

} else {
var statearr_17867_17980 = state_17862__$1;
(statearr_17867_17980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (5))){
var inst_17846 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17862__$1 = state_17862;
var statearr_17868_17981 = state_17862__$1;
(statearr_17868_17981[(2)] = inst_17846);

(statearr_17868_17981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (6))){
var inst_17848 = (state_17862[(8)]);
var inst_17843 = (state_17862[(7)]);
var inst_17848__$1 = cljs.core.async.chan.call(null,(1));
var inst_17849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17850 = [inst_17843,inst_17848__$1];
var inst_17851 = (new cljs.core.PersistentVector(null,2,(5),inst_17849,inst_17850,null));
var state_17862__$1 = (function (){var statearr_17869 = state_17862;
(statearr_17869[(8)] = inst_17848__$1);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17862__$1,(8),jobs,inst_17851);
} else {
if((state_val_17863 === (7))){
var inst_17858 = (state_17862[(2)]);
var state_17862__$1 = state_17862;
var statearr_17870_17982 = state_17862__$1;
(statearr_17870_17982[(2)] = inst_17858);

(statearr_17870_17982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (8))){
var inst_17848 = (state_17862[(8)]);
var inst_17853 = (state_17862[(2)]);
var state_17862__$1 = (function (){var statearr_17871 = state_17862;
(statearr_17871[(9)] = inst_17853);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17862__$1,(9),results,inst_17848);
} else {
if((state_val_17863 === (9))){
var inst_17855 = (state_17862[(2)]);
var state_17862__$1 = (function (){var statearr_17872 = state_17862;
(statearr_17872[(10)] = inst_17855);

return statearr_17872;
})();
var statearr_17873_17983 = state_17862__$1;
(statearr_17873_17983[(2)] = null);

(statearr_17873_17983[(1)] = (2));


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
});})(c__10260__auto___17977,jobs,results,process,async))
;
return ((function (switch__10195__auto__,c__10260__auto___17977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17877[(1)] = (1));

return statearr_17877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17862){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17878){if((e17878 instanceof Object)){
var ex__10199__auto__ = e17878;
var statearr_17879_17984 = state_17862;
(statearr_17879_17984[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17985 = state_17862;
state_17862 = G__17985;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17977,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17880 = f__10261__auto__.call(null);
(statearr_17880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17977);

return statearr_17880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17977,jobs,results,process,async))
);


var c__10260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto__,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto__,jobs,results,process,async){
return (function (state_17918){
var state_val_17919 = (state_17918[(1)]);
if((state_val_17919 === (7))){
var inst_17914 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17920_17986 = state_17918__$1;
(statearr_17920_17986[(2)] = inst_17914);

(statearr_17920_17986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (20))){
var state_17918__$1 = state_17918;
var statearr_17921_17987 = state_17918__$1;
(statearr_17921_17987[(2)] = null);

(statearr_17921_17987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (1))){
var state_17918__$1 = state_17918;
var statearr_17922_17988 = state_17918__$1;
(statearr_17922_17988[(2)] = null);

(statearr_17922_17988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (4))){
var inst_17883 = (state_17918[(7)]);
var inst_17883__$1 = (state_17918[(2)]);
var inst_17884 = (inst_17883__$1 == null);
var state_17918__$1 = (function (){var statearr_17923 = state_17918;
(statearr_17923[(7)] = inst_17883__$1);

return statearr_17923;
})();
if(cljs.core.truth_(inst_17884)){
var statearr_17924_17989 = state_17918__$1;
(statearr_17924_17989[(1)] = (5));

} else {
var statearr_17925_17990 = state_17918__$1;
(statearr_17925_17990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (15))){
var inst_17896 = (state_17918[(8)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17918__$1,(18),to,inst_17896);
} else {
if((state_val_17919 === (21))){
var inst_17909 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17926_17991 = state_17918__$1;
(statearr_17926_17991[(2)] = inst_17909);

(statearr_17926_17991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (13))){
var inst_17911 = (state_17918[(2)]);
var state_17918__$1 = (function (){var statearr_17927 = state_17918;
(statearr_17927[(9)] = inst_17911);

return statearr_17927;
})();
var statearr_17928_17992 = state_17918__$1;
(statearr_17928_17992[(2)] = null);

(statearr_17928_17992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (6))){
var inst_17883 = (state_17918[(7)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17918__$1,(11),inst_17883);
} else {
if((state_val_17919 === (17))){
var inst_17904 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
if(cljs.core.truth_(inst_17904)){
var statearr_17929_17993 = state_17918__$1;
(statearr_17929_17993[(1)] = (19));

} else {
var statearr_17930_17994 = state_17918__$1;
(statearr_17930_17994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (3))){
var inst_17916 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17918__$1,inst_17916);
} else {
if((state_val_17919 === (12))){
var inst_17893 = (state_17918[(10)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17918__$1,(14),inst_17893);
} else {
if((state_val_17919 === (2))){
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17918__$1,(4),results);
} else {
if((state_val_17919 === (19))){
var state_17918__$1 = state_17918;
var statearr_17931_17995 = state_17918__$1;
(statearr_17931_17995[(2)] = null);

(statearr_17931_17995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (11))){
var inst_17893 = (state_17918[(2)]);
var state_17918__$1 = (function (){var statearr_17932 = state_17918;
(statearr_17932[(10)] = inst_17893);

return statearr_17932;
})();
var statearr_17933_17996 = state_17918__$1;
(statearr_17933_17996[(2)] = null);

(statearr_17933_17996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (9))){
var state_17918__$1 = state_17918;
var statearr_17934_17997 = state_17918__$1;
(statearr_17934_17997[(2)] = null);

(statearr_17934_17997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (5))){
var state_17918__$1 = state_17918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17935_17998 = state_17918__$1;
(statearr_17935_17998[(1)] = (8));

} else {
var statearr_17936_17999 = state_17918__$1;
(statearr_17936_17999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (14))){
var inst_17898 = (state_17918[(11)]);
var inst_17896 = (state_17918[(8)]);
var inst_17896__$1 = (state_17918[(2)]);
var inst_17897 = (inst_17896__$1 == null);
var inst_17898__$1 = cljs.core.not.call(null,inst_17897);
var state_17918__$1 = (function (){var statearr_17937 = state_17918;
(statearr_17937[(11)] = inst_17898__$1);

(statearr_17937[(8)] = inst_17896__$1);

return statearr_17937;
})();
if(inst_17898__$1){
var statearr_17938_18000 = state_17918__$1;
(statearr_17938_18000[(1)] = (15));

} else {
var statearr_17939_18001 = state_17918__$1;
(statearr_17939_18001[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (16))){
var inst_17898 = (state_17918[(11)]);
var state_17918__$1 = state_17918;
var statearr_17940_18002 = state_17918__$1;
(statearr_17940_18002[(2)] = inst_17898);

(statearr_17940_18002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (10))){
var inst_17890 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17941_18003 = state_17918__$1;
(statearr_17941_18003[(2)] = inst_17890);

(statearr_17941_18003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (18))){
var inst_17901 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17942_18004 = state_17918__$1;
(statearr_17942_18004[(2)] = inst_17901);

(statearr_17942_18004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (8))){
var inst_17887 = cljs.core.async.close_BANG_.call(null,to);
var state_17918__$1 = state_17918;
var statearr_17943_18005 = state_17918__$1;
(statearr_17943_18005[(2)] = inst_17887);

(statearr_17943_18005[(1)] = (10));


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
});})(c__10260__auto__,jobs,results,process,async))
;
return ((function (switch__10195__auto__,c__10260__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17947 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17947[(1)] = (1));

return statearr_17947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17918){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17948){if((e17948 instanceof Object)){
var ex__10199__auto__ = e17948;
var statearr_17949_18006 = state_17918;
(statearr_17949_18006[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18007 = state_17918;
state_17918 = G__18007;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17950 = f__10261__auto__.call(null);
(statearr_17950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_17950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto__,jobs,results,process,async))
);

return c__10260__auto__;
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
var args18008 = [];
var len__6152__auto___18011 = arguments.length;
var i__6153__auto___18012 = (0);
while(true){
if((i__6153__auto___18012 < len__6152__auto___18011)){
args18008.push((arguments[i__6153__auto___18012]));

var G__18013 = (i__6153__auto___18012 + (1));
i__6153__auto___18012 = G__18013;
continue;
} else {
}
break;
}

var G__18010 = args18008.length;
switch (G__18010) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18008.length)].join('')));

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
var args18015 = [];
var len__6152__auto___18018 = arguments.length;
var i__6153__auto___18019 = (0);
while(true){
if((i__6153__auto___18019 < len__6152__auto___18018)){
args18015.push((arguments[i__6153__auto___18019]));

var G__18020 = (i__6153__auto___18019 + (1));
i__6153__auto___18019 = G__18020;
continue;
} else {
}
break;
}

var G__18017 = args18015.length;
switch (G__18017) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18015.length)].join('')));

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
var args18022 = [];
var len__6152__auto___18075 = arguments.length;
var i__6153__auto___18076 = (0);
while(true){
if((i__6153__auto___18076 < len__6152__auto___18075)){
args18022.push((arguments[i__6153__auto___18076]));

var G__18077 = (i__6153__auto___18076 + (1));
i__6153__auto___18076 = G__18077;
continue;
} else {
}
break;
}

var G__18024 = args18022.length;
switch (G__18024) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18022.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10260__auto___18079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___18079,tc,fc){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___18079,tc,fc){
return (function (state_18050){
var state_val_18051 = (state_18050[(1)]);
if((state_val_18051 === (7))){
var inst_18046 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18052_18080 = state_18050__$1;
(statearr_18052_18080[(2)] = inst_18046);

(statearr_18052_18080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (1))){
var state_18050__$1 = state_18050;
var statearr_18053_18081 = state_18050__$1;
(statearr_18053_18081[(2)] = null);

(statearr_18053_18081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (4))){
var inst_18027 = (state_18050[(7)]);
var inst_18027__$1 = (state_18050[(2)]);
var inst_18028 = (inst_18027__$1 == null);
var state_18050__$1 = (function (){var statearr_18054 = state_18050;
(statearr_18054[(7)] = inst_18027__$1);

return statearr_18054;
})();
if(cljs.core.truth_(inst_18028)){
var statearr_18055_18082 = state_18050__$1;
(statearr_18055_18082[(1)] = (5));

} else {
var statearr_18056_18083 = state_18050__$1;
(statearr_18056_18083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (13))){
var state_18050__$1 = state_18050;
var statearr_18057_18084 = state_18050__$1;
(statearr_18057_18084[(2)] = null);

(statearr_18057_18084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (6))){
var inst_18027 = (state_18050[(7)]);
var inst_18033 = p.call(null,inst_18027);
var state_18050__$1 = state_18050;
if(cljs.core.truth_(inst_18033)){
var statearr_18058_18085 = state_18050__$1;
(statearr_18058_18085[(1)] = (9));

} else {
var statearr_18059_18086 = state_18050__$1;
(statearr_18059_18086[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (3))){
var inst_18048 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18050__$1,inst_18048);
} else {
if((state_val_18051 === (12))){
var state_18050__$1 = state_18050;
var statearr_18060_18087 = state_18050__$1;
(statearr_18060_18087[(2)] = null);

(statearr_18060_18087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (2))){
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18050__$1,(4),ch);
} else {
if((state_val_18051 === (11))){
var inst_18027 = (state_18050[(7)]);
var inst_18037 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18050__$1,(8),inst_18037,inst_18027);
} else {
if((state_val_18051 === (9))){
var state_18050__$1 = state_18050;
var statearr_18061_18088 = state_18050__$1;
(statearr_18061_18088[(2)] = tc);

(statearr_18061_18088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (5))){
var inst_18030 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18031 = cljs.core.async.close_BANG_.call(null,fc);
var state_18050__$1 = (function (){var statearr_18062 = state_18050;
(statearr_18062[(8)] = inst_18030);

return statearr_18062;
})();
var statearr_18063_18089 = state_18050__$1;
(statearr_18063_18089[(2)] = inst_18031);

(statearr_18063_18089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (14))){
var inst_18044 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
var statearr_18064_18090 = state_18050__$1;
(statearr_18064_18090[(2)] = inst_18044);

(statearr_18064_18090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (10))){
var state_18050__$1 = state_18050;
var statearr_18065_18091 = state_18050__$1;
(statearr_18065_18091[(2)] = fc);

(statearr_18065_18091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18051 === (8))){
var inst_18039 = (state_18050[(2)]);
var state_18050__$1 = state_18050;
if(cljs.core.truth_(inst_18039)){
var statearr_18066_18092 = state_18050__$1;
(statearr_18066_18092[(1)] = (12));

} else {
var statearr_18067_18093 = state_18050__$1;
(statearr_18067_18093[(1)] = (13));

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
});})(c__10260__auto___18079,tc,fc))
;
return ((function (switch__10195__auto__,c__10260__auto___18079,tc,fc){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_18071 = [null,null,null,null,null,null,null,null,null];
(statearr_18071[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_18071[(1)] = (1));

return statearr_18071;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_18050){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18072){if((e18072 instanceof Object)){
var ex__10199__auto__ = e18072;
var statearr_18073_18094 = state_18050;
(statearr_18073_18094[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18095 = state_18050;
state_18050 = G__18095;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_18050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_18050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___18079,tc,fc))
})();
var state__10262__auto__ = (function (){var statearr_18074 = f__10261__auto__.call(null);
(statearr_18074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___18079);

return statearr_18074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___18079,tc,fc))
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
var c__10260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto__){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto__){
return (function (state_18142){
var state_val_18143 = (state_18142[(1)]);
if((state_val_18143 === (1))){
var inst_18128 = init;
var state_18142__$1 = (function (){var statearr_18144 = state_18142;
(statearr_18144[(7)] = inst_18128);

return statearr_18144;
})();
var statearr_18145_18160 = state_18142__$1;
(statearr_18145_18160[(2)] = null);

(statearr_18145_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (2))){
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18142__$1,(4),ch);
} else {
if((state_val_18143 === (3))){
var inst_18140 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18142__$1,inst_18140);
} else {
if((state_val_18143 === (4))){
var inst_18131 = (state_18142[(8)]);
var inst_18131__$1 = (state_18142[(2)]);
var inst_18132 = (inst_18131__$1 == null);
var state_18142__$1 = (function (){var statearr_18146 = state_18142;
(statearr_18146[(8)] = inst_18131__$1);

return statearr_18146;
})();
if(cljs.core.truth_(inst_18132)){
var statearr_18147_18161 = state_18142__$1;
(statearr_18147_18161[(1)] = (5));

} else {
var statearr_18148_18162 = state_18142__$1;
(statearr_18148_18162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (5))){
var inst_18128 = (state_18142[(7)]);
var state_18142__$1 = state_18142;
var statearr_18149_18163 = state_18142__$1;
(statearr_18149_18163[(2)] = inst_18128);

(statearr_18149_18163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (6))){
var inst_18131 = (state_18142[(8)]);
var inst_18128 = (state_18142[(7)]);
var inst_18135 = f.call(null,inst_18128,inst_18131);
var inst_18128__$1 = inst_18135;
var state_18142__$1 = (function (){var statearr_18150 = state_18142;
(statearr_18150[(7)] = inst_18128__$1);

return statearr_18150;
})();
var statearr_18151_18164 = state_18142__$1;
(statearr_18151_18164[(2)] = null);

(statearr_18151_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (7))){
var inst_18138 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18152_18165 = state_18142__$1;
(statearr_18152_18165[(2)] = inst_18138);

(statearr_18152_18165[(1)] = (3));


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
});})(c__10260__auto__))
;
return ((function (switch__10195__auto__,c__10260__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10196__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10196__auto____0 = (function (){
var statearr_18156 = [null,null,null,null,null,null,null,null,null];
(statearr_18156[(0)] = cljs$core$async$reduce_$_state_machine__10196__auto__);

(statearr_18156[(1)] = (1));

return statearr_18156;
});
var cljs$core$async$reduce_$_state_machine__10196__auto____1 = (function (state_18142){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18157){if((e18157 instanceof Object)){
var ex__10199__auto__ = e18157;
var statearr_18158_18166 = state_18142;
(statearr_18158_18166[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18167 = state_18142;
state_18142 = G__18167;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10196__auto__ = function(state_18142){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10196__auto____1.call(this,state_18142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10196__auto____0;
cljs$core$async$reduce_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10196__auto____1;
return cljs$core$async$reduce_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_18159 = f__10261__auto__.call(null);
(statearr_18159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_18159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto__))
);

return c__10260__auto__;
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
var args18168 = [];
var len__6152__auto___18220 = arguments.length;
var i__6153__auto___18221 = (0);
while(true){
if((i__6153__auto___18221 < len__6152__auto___18220)){
args18168.push((arguments[i__6153__auto___18221]));

var G__18222 = (i__6153__auto___18221 + (1));
i__6153__auto___18221 = G__18222;
continue;
} else {
}
break;
}

var G__18170 = args18168.length;
switch (G__18170) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18168.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto__){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto__){
return (function (state_18195){
var state_val_18196 = (state_18195[(1)]);
if((state_val_18196 === (7))){
var inst_18177 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18197_18224 = state_18195__$1;
(statearr_18197_18224[(2)] = inst_18177);

(statearr_18197_18224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (1))){
var inst_18171 = cljs.core.seq.call(null,coll);
var inst_18172 = inst_18171;
var state_18195__$1 = (function (){var statearr_18198 = state_18195;
(statearr_18198[(7)] = inst_18172);

return statearr_18198;
})();
var statearr_18199_18225 = state_18195__$1;
(statearr_18199_18225[(2)] = null);

(statearr_18199_18225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (4))){
var inst_18172 = (state_18195[(7)]);
var inst_18175 = cljs.core.first.call(null,inst_18172);
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18195__$1,(7),ch,inst_18175);
} else {
if((state_val_18196 === (13))){
var inst_18189 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18200_18226 = state_18195__$1;
(statearr_18200_18226[(2)] = inst_18189);

(statearr_18200_18226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (6))){
var inst_18180 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
if(cljs.core.truth_(inst_18180)){
var statearr_18201_18227 = state_18195__$1;
(statearr_18201_18227[(1)] = (8));

} else {
var statearr_18202_18228 = state_18195__$1;
(statearr_18202_18228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (3))){
var inst_18193 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18195__$1,inst_18193);
} else {
if((state_val_18196 === (12))){
var state_18195__$1 = state_18195;
var statearr_18203_18229 = state_18195__$1;
(statearr_18203_18229[(2)] = null);

(statearr_18203_18229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (2))){
var inst_18172 = (state_18195[(7)]);
var state_18195__$1 = state_18195;
if(cljs.core.truth_(inst_18172)){
var statearr_18204_18230 = state_18195__$1;
(statearr_18204_18230[(1)] = (4));

} else {
var statearr_18205_18231 = state_18195__$1;
(statearr_18205_18231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (11))){
var inst_18186 = cljs.core.async.close_BANG_.call(null,ch);
var state_18195__$1 = state_18195;
var statearr_18206_18232 = state_18195__$1;
(statearr_18206_18232[(2)] = inst_18186);

(statearr_18206_18232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (9))){
var state_18195__$1 = state_18195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18207_18233 = state_18195__$1;
(statearr_18207_18233[(1)] = (11));

} else {
var statearr_18208_18234 = state_18195__$1;
(statearr_18208_18234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (5))){
var inst_18172 = (state_18195[(7)]);
var state_18195__$1 = state_18195;
var statearr_18209_18235 = state_18195__$1;
(statearr_18209_18235[(2)] = inst_18172);

(statearr_18209_18235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (10))){
var inst_18191 = (state_18195[(2)]);
var state_18195__$1 = state_18195;
var statearr_18210_18236 = state_18195__$1;
(statearr_18210_18236[(2)] = inst_18191);

(statearr_18210_18236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18196 === (8))){
var inst_18172 = (state_18195[(7)]);
var inst_18182 = cljs.core.next.call(null,inst_18172);
var inst_18172__$1 = inst_18182;
var state_18195__$1 = (function (){var statearr_18211 = state_18195;
(statearr_18211[(7)] = inst_18172__$1);

return statearr_18211;
})();
var statearr_18212_18237 = state_18195__$1;
(statearr_18212_18237[(2)] = null);

(statearr_18212_18237[(1)] = (2));


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
});})(c__10260__auto__))
;
return ((function (switch__10195__auto__,c__10260__auto__){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_18216 = [null,null,null,null,null,null,null,null];
(statearr_18216[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_18216[(1)] = (1));

return statearr_18216;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_18195){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18217){if((e18217 instanceof Object)){
var ex__10199__auto__ = e18217;
var statearr_18218_18238 = state_18195;
(statearr_18218_18238[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18239 = state_18195;
state_18195 = G__18239;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_18195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_18195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_18219 = f__10261__auto__.call(null);
(statearr_18219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_18219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto__))
);

return c__10260__auto__;
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
var x__5749__auto__ = (((_ == null))?null:_);
var m__5750__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,_);
} else {
var m__5750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,_);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async18461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18461 = (function (mult,ch,cs,meta18462){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18462 = meta18462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18463,meta18462__$1){
var self__ = this;
var _18463__$1 = this;
return (new cljs.core.async.t_cljs$core$async18461(self__.mult,self__.ch,self__.cs,meta18462__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18463){
var self__ = this;
var _18463__$1 = this;
return self__.meta18462;
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18462","meta18462",-605014700,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18461";

cljs.core.async.t_cljs$core$async18461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18461");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18461 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18461(mult__$1,ch__$1,cs__$1,meta18462){
return (new cljs.core.async.t_cljs$core$async18461(mult__$1,ch__$1,cs__$1,meta18462));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18461(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10260__auto___18682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___18682,cs,m,dchan,dctr,done){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___18682,cs,m,dchan,dctr,done){
return (function (state_18594){
var state_val_18595 = (state_18594[(1)]);
if((state_val_18595 === (7))){
var inst_18590 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18596_18683 = state_18594__$1;
(statearr_18596_18683[(2)] = inst_18590);

(statearr_18596_18683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (20))){
var inst_18495 = (state_18594[(7)]);
var inst_18505 = cljs.core.first.call(null,inst_18495);
var inst_18506 = cljs.core.nth.call(null,inst_18505,(0),null);
var inst_18507 = cljs.core.nth.call(null,inst_18505,(1),null);
var state_18594__$1 = (function (){var statearr_18597 = state_18594;
(statearr_18597[(8)] = inst_18506);

return statearr_18597;
})();
if(cljs.core.truth_(inst_18507)){
var statearr_18598_18684 = state_18594__$1;
(statearr_18598_18684[(1)] = (22));

} else {
var statearr_18599_18685 = state_18594__$1;
(statearr_18599_18685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (27))){
var inst_18537 = (state_18594[(9)]);
var inst_18535 = (state_18594[(10)]);
var inst_18466 = (state_18594[(11)]);
var inst_18542 = (state_18594[(12)]);
var inst_18542__$1 = cljs.core._nth.call(null,inst_18535,inst_18537);
var inst_18543 = cljs.core.async.put_BANG_.call(null,inst_18542__$1,inst_18466,done);
var state_18594__$1 = (function (){var statearr_18600 = state_18594;
(statearr_18600[(12)] = inst_18542__$1);

return statearr_18600;
})();
if(cljs.core.truth_(inst_18543)){
var statearr_18601_18686 = state_18594__$1;
(statearr_18601_18686[(1)] = (30));

} else {
var statearr_18602_18687 = state_18594__$1;
(statearr_18602_18687[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (1))){
var state_18594__$1 = state_18594;
var statearr_18603_18688 = state_18594__$1;
(statearr_18603_18688[(2)] = null);

(statearr_18603_18688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (24))){
var inst_18495 = (state_18594[(7)]);
var inst_18512 = (state_18594[(2)]);
var inst_18513 = cljs.core.next.call(null,inst_18495);
var inst_18475 = inst_18513;
var inst_18476 = null;
var inst_18477 = (0);
var inst_18478 = (0);
var state_18594__$1 = (function (){var statearr_18604 = state_18594;
(statearr_18604[(13)] = inst_18477);

(statearr_18604[(14)] = inst_18476);

(statearr_18604[(15)] = inst_18475);

(statearr_18604[(16)] = inst_18478);

(statearr_18604[(17)] = inst_18512);

return statearr_18604;
})();
var statearr_18605_18689 = state_18594__$1;
(statearr_18605_18689[(2)] = null);

(statearr_18605_18689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (39))){
var state_18594__$1 = state_18594;
var statearr_18609_18690 = state_18594__$1;
(statearr_18609_18690[(2)] = null);

(statearr_18609_18690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (4))){
var inst_18466 = (state_18594[(11)]);
var inst_18466__$1 = (state_18594[(2)]);
var inst_18467 = (inst_18466__$1 == null);
var state_18594__$1 = (function (){var statearr_18610 = state_18594;
(statearr_18610[(11)] = inst_18466__$1);

return statearr_18610;
})();
if(cljs.core.truth_(inst_18467)){
var statearr_18611_18691 = state_18594__$1;
(statearr_18611_18691[(1)] = (5));

} else {
var statearr_18612_18692 = state_18594__$1;
(statearr_18612_18692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (15))){
var inst_18477 = (state_18594[(13)]);
var inst_18476 = (state_18594[(14)]);
var inst_18475 = (state_18594[(15)]);
var inst_18478 = (state_18594[(16)]);
var inst_18491 = (state_18594[(2)]);
var inst_18492 = (inst_18478 + (1));
var tmp18606 = inst_18477;
var tmp18607 = inst_18476;
var tmp18608 = inst_18475;
var inst_18475__$1 = tmp18608;
var inst_18476__$1 = tmp18607;
var inst_18477__$1 = tmp18606;
var inst_18478__$1 = inst_18492;
var state_18594__$1 = (function (){var statearr_18613 = state_18594;
(statearr_18613[(18)] = inst_18491);

(statearr_18613[(13)] = inst_18477__$1);

(statearr_18613[(14)] = inst_18476__$1);

(statearr_18613[(15)] = inst_18475__$1);

(statearr_18613[(16)] = inst_18478__$1);

return statearr_18613;
})();
var statearr_18614_18693 = state_18594__$1;
(statearr_18614_18693[(2)] = null);

(statearr_18614_18693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (21))){
var inst_18516 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18618_18694 = state_18594__$1;
(statearr_18618_18694[(2)] = inst_18516);

(statearr_18618_18694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (31))){
var inst_18542 = (state_18594[(12)]);
var inst_18546 = done.call(null,null);
var inst_18547 = cljs.core.async.untap_STAR_.call(null,m,inst_18542);
var state_18594__$1 = (function (){var statearr_18619 = state_18594;
(statearr_18619[(19)] = inst_18546);

return statearr_18619;
})();
var statearr_18620_18695 = state_18594__$1;
(statearr_18620_18695[(2)] = inst_18547);

(statearr_18620_18695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (32))){
var inst_18534 = (state_18594[(20)]);
var inst_18537 = (state_18594[(9)]);
var inst_18536 = (state_18594[(21)]);
var inst_18535 = (state_18594[(10)]);
var inst_18549 = (state_18594[(2)]);
var inst_18550 = (inst_18537 + (1));
var tmp18615 = inst_18534;
var tmp18616 = inst_18536;
var tmp18617 = inst_18535;
var inst_18534__$1 = tmp18615;
var inst_18535__$1 = tmp18617;
var inst_18536__$1 = tmp18616;
var inst_18537__$1 = inst_18550;
var state_18594__$1 = (function (){var statearr_18621 = state_18594;
(statearr_18621[(20)] = inst_18534__$1);

(statearr_18621[(9)] = inst_18537__$1);

(statearr_18621[(22)] = inst_18549);

(statearr_18621[(21)] = inst_18536__$1);

(statearr_18621[(10)] = inst_18535__$1);

return statearr_18621;
})();
var statearr_18622_18696 = state_18594__$1;
(statearr_18622_18696[(2)] = null);

(statearr_18622_18696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (40))){
var inst_18562 = (state_18594[(23)]);
var inst_18566 = done.call(null,null);
var inst_18567 = cljs.core.async.untap_STAR_.call(null,m,inst_18562);
var state_18594__$1 = (function (){var statearr_18623 = state_18594;
(statearr_18623[(24)] = inst_18566);

return statearr_18623;
})();
var statearr_18624_18697 = state_18594__$1;
(statearr_18624_18697[(2)] = inst_18567);

(statearr_18624_18697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (33))){
var inst_18553 = (state_18594[(25)]);
var inst_18555 = cljs.core.chunked_seq_QMARK_.call(null,inst_18553);
var state_18594__$1 = state_18594;
if(inst_18555){
var statearr_18625_18698 = state_18594__$1;
(statearr_18625_18698[(1)] = (36));

} else {
var statearr_18626_18699 = state_18594__$1;
(statearr_18626_18699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (13))){
var inst_18485 = (state_18594[(26)]);
var inst_18488 = cljs.core.async.close_BANG_.call(null,inst_18485);
var state_18594__$1 = state_18594;
var statearr_18627_18700 = state_18594__$1;
(statearr_18627_18700[(2)] = inst_18488);

(statearr_18627_18700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (22))){
var inst_18506 = (state_18594[(8)]);
var inst_18509 = cljs.core.async.close_BANG_.call(null,inst_18506);
var state_18594__$1 = state_18594;
var statearr_18628_18701 = state_18594__$1;
(statearr_18628_18701[(2)] = inst_18509);

(statearr_18628_18701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (36))){
var inst_18553 = (state_18594[(25)]);
var inst_18557 = cljs.core.chunk_first.call(null,inst_18553);
var inst_18558 = cljs.core.chunk_rest.call(null,inst_18553);
var inst_18559 = cljs.core.count.call(null,inst_18557);
var inst_18534 = inst_18558;
var inst_18535 = inst_18557;
var inst_18536 = inst_18559;
var inst_18537 = (0);
var state_18594__$1 = (function (){var statearr_18629 = state_18594;
(statearr_18629[(20)] = inst_18534);

(statearr_18629[(9)] = inst_18537);

(statearr_18629[(21)] = inst_18536);

(statearr_18629[(10)] = inst_18535);

return statearr_18629;
})();
var statearr_18630_18702 = state_18594__$1;
(statearr_18630_18702[(2)] = null);

(statearr_18630_18702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (41))){
var inst_18553 = (state_18594[(25)]);
var inst_18569 = (state_18594[(2)]);
var inst_18570 = cljs.core.next.call(null,inst_18553);
var inst_18534 = inst_18570;
var inst_18535 = null;
var inst_18536 = (0);
var inst_18537 = (0);
var state_18594__$1 = (function (){var statearr_18631 = state_18594;
(statearr_18631[(20)] = inst_18534);

(statearr_18631[(9)] = inst_18537);

(statearr_18631[(21)] = inst_18536);

(statearr_18631[(10)] = inst_18535);

(statearr_18631[(27)] = inst_18569);

return statearr_18631;
})();
var statearr_18632_18703 = state_18594__$1;
(statearr_18632_18703[(2)] = null);

(statearr_18632_18703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (43))){
var state_18594__$1 = state_18594;
var statearr_18633_18704 = state_18594__$1;
(statearr_18633_18704[(2)] = null);

(statearr_18633_18704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (29))){
var inst_18578 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18634_18705 = state_18594__$1;
(statearr_18634_18705[(2)] = inst_18578);

(statearr_18634_18705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (44))){
var inst_18587 = (state_18594[(2)]);
var state_18594__$1 = (function (){var statearr_18635 = state_18594;
(statearr_18635[(28)] = inst_18587);

return statearr_18635;
})();
var statearr_18636_18706 = state_18594__$1;
(statearr_18636_18706[(2)] = null);

(statearr_18636_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (6))){
var inst_18526 = (state_18594[(29)]);
var inst_18525 = cljs.core.deref.call(null,cs);
var inst_18526__$1 = cljs.core.keys.call(null,inst_18525);
var inst_18527 = cljs.core.count.call(null,inst_18526__$1);
var inst_18528 = cljs.core.reset_BANG_.call(null,dctr,inst_18527);
var inst_18533 = cljs.core.seq.call(null,inst_18526__$1);
var inst_18534 = inst_18533;
var inst_18535 = null;
var inst_18536 = (0);
var inst_18537 = (0);
var state_18594__$1 = (function (){var statearr_18637 = state_18594;
(statearr_18637[(20)] = inst_18534);

(statearr_18637[(9)] = inst_18537);

(statearr_18637[(21)] = inst_18536);

(statearr_18637[(29)] = inst_18526__$1);

(statearr_18637[(10)] = inst_18535);

(statearr_18637[(30)] = inst_18528);

return statearr_18637;
})();
var statearr_18638_18707 = state_18594__$1;
(statearr_18638_18707[(2)] = null);

(statearr_18638_18707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (28))){
var inst_18534 = (state_18594[(20)]);
var inst_18553 = (state_18594[(25)]);
var inst_18553__$1 = cljs.core.seq.call(null,inst_18534);
var state_18594__$1 = (function (){var statearr_18639 = state_18594;
(statearr_18639[(25)] = inst_18553__$1);

return statearr_18639;
})();
if(inst_18553__$1){
var statearr_18640_18708 = state_18594__$1;
(statearr_18640_18708[(1)] = (33));

} else {
var statearr_18641_18709 = state_18594__$1;
(statearr_18641_18709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (25))){
var inst_18537 = (state_18594[(9)]);
var inst_18536 = (state_18594[(21)]);
var inst_18539 = (inst_18537 < inst_18536);
var inst_18540 = inst_18539;
var state_18594__$1 = state_18594;
if(cljs.core.truth_(inst_18540)){
var statearr_18642_18710 = state_18594__$1;
(statearr_18642_18710[(1)] = (27));

} else {
var statearr_18643_18711 = state_18594__$1;
(statearr_18643_18711[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (34))){
var state_18594__$1 = state_18594;
var statearr_18644_18712 = state_18594__$1;
(statearr_18644_18712[(2)] = null);

(statearr_18644_18712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (17))){
var state_18594__$1 = state_18594;
var statearr_18645_18713 = state_18594__$1;
(statearr_18645_18713[(2)] = null);

(statearr_18645_18713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (3))){
var inst_18592 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18594__$1,inst_18592);
} else {
if((state_val_18595 === (12))){
var inst_18521 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18646_18714 = state_18594__$1;
(statearr_18646_18714[(2)] = inst_18521);

(statearr_18646_18714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (2))){
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18594__$1,(4),ch);
} else {
if((state_val_18595 === (23))){
var state_18594__$1 = state_18594;
var statearr_18647_18715 = state_18594__$1;
(statearr_18647_18715[(2)] = null);

(statearr_18647_18715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (35))){
var inst_18576 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18648_18716 = state_18594__$1;
(statearr_18648_18716[(2)] = inst_18576);

(statearr_18648_18716[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (19))){
var inst_18495 = (state_18594[(7)]);
var inst_18499 = cljs.core.chunk_first.call(null,inst_18495);
var inst_18500 = cljs.core.chunk_rest.call(null,inst_18495);
var inst_18501 = cljs.core.count.call(null,inst_18499);
var inst_18475 = inst_18500;
var inst_18476 = inst_18499;
var inst_18477 = inst_18501;
var inst_18478 = (0);
var state_18594__$1 = (function (){var statearr_18649 = state_18594;
(statearr_18649[(13)] = inst_18477);

(statearr_18649[(14)] = inst_18476);

(statearr_18649[(15)] = inst_18475);

(statearr_18649[(16)] = inst_18478);

return statearr_18649;
})();
var statearr_18650_18717 = state_18594__$1;
(statearr_18650_18717[(2)] = null);

(statearr_18650_18717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (11))){
var inst_18495 = (state_18594[(7)]);
var inst_18475 = (state_18594[(15)]);
var inst_18495__$1 = cljs.core.seq.call(null,inst_18475);
var state_18594__$1 = (function (){var statearr_18651 = state_18594;
(statearr_18651[(7)] = inst_18495__$1);

return statearr_18651;
})();
if(inst_18495__$1){
var statearr_18652_18718 = state_18594__$1;
(statearr_18652_18718[(1)] = (16));

} else {
var statearr_18653_18719 = state_18594__$1;
(statearr_18653_18719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (9))){
var inst_18523 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18654_18720 = state_18594__$1;
(statearr_18654_18720[(2)] = inst_18523);

(statearr_18654_18720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (5))){
var inst_18473 = cljs.core.deref.call(null,cs);
var inst_18474 = cljs.core.seq.call(null,inst_18473);
var inst_18475 = inst_18474;
var inst_18476 = null;
var inst_18477 = (0);
var inst_18478 = (0);
var state_18594__$1 = (function (){var statearr_18655 = state_18594;
(statearr_18655[(13)] = inst_18477);

(statearr_18655[(14)] = inst_18476);

(statearr_18655[(15)] = inst_18475);

(statearr_18655[(16)] = inst_18478);

return statearr_18655;
})();
var statearr_18656_18721 = state_18594__$1;
(statearr_18656_18721[(2)] = null);

(statearr_18656_18721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (14))){
var state_18594__$1 = state_18594;
var statearr_18657_18722 = state_18594__$1;
(statearr_18657_18722[(2)] = null);

(statearr_18657_18722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (45))){
var inst_18584 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18658_18723 = state_18594__$1;
(statearr_18658_18723[(2)] = inst_18584);

(statearr_18658_18723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (26))){
var inst_18526 = (state_18594[(29)]);
var inst_18580 = (state_18594[(2)]);
var inst_18581 = cljs.core.seq.call(null,inst_18526);
var state_18594__$1 = (function (){var statearr_18659 = state_18594;
(statearr_18659[(31)] = inst_18580);

return statearr_18659;
})();
if(inst_18581){
var statearr_18660_18724 = state_18594__$1;
(statearr_18660_18724[(1)] = (42));

} else {
var statearr_18661_18725 = state_18594__$1;
(statearr_18661_18725[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (16))){
var inst_18495 = (state_18594[(7)]);
var inst_18497 = cljs.core.chunked_seq_QMARK_.call(null,inst_18495);
var state_18594__$1 = state_18594;
if(inst_18497){
var statearr_18662_18726 = state_18594__$1;
(statearr_18662_18726[(1)] = (19));

} else {
var statearr_18663_18727 = state_18594__$1;
(statearr_18663_18727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (38))){
var inst_18573 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18664_18728 = state_18594__$1;
(statearr_18664_18728[(2)] = inst_18573);

(statearr_18664_18728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (30))){
var state_18594__$1 = state_18594;
var statearr_18665_18729 = state_18594__$1;
(statearr_18665_18729[(2)] = null);

(statearr_18665_18729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (10))){
var inst_18476 = (state_18594[(14)]);
var inst_18478 = (state_18594[(16)]);
var inst_18484 = cljs.core._nth.call(null,inst_18476,inst_18478);
var inst_18485 = cljs.core.nth.call(null,inst_18484,(0),null);
var inst_18486 = cljs.core.nth.call(null,inst_18484,(1),null);
var state_18594__$1 = (function (){var statearr_18666 = state_18594;
(statearr_18666[(26)] = inst_18485);

return statearr_18666;
})();
if(cljs.core.truth_(inst_18486)){
var statearr_18667_18730 = state_18594__$1;
(statearr_18667_18730[(1)] = (13));

} else {
var statearr_18668_18731 = state_18594__$1;
(statearr_18668_18731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (18))){
var inst_18519 = (state_18594[(2)]);
var state_18594__$1 = state_18594;
var statearr_18669_18732 = state_18594__$1;
(statearr_18669_18732[(2)] = inst_18519);

(statearr_18669_18732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (42))){
var state_18594__$1 = state_18594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18594__$1,(45),dchan);
} else {
if((state_val_18595 === (37))){
var inst_18553 = (state_18594[(25)]);
var inst_18562 = (state_18594[(23)]);
var inst_18466 = (state_18594[(11)]);
var inst_18562__$1 = cljs.core.first.call(null,inst_18553);
var inst_18563 = cljs.core.async.put_BANG_.call(null,inst_18562__$1,inst_18466,done);
var state_18594__$1 = (function (){var statearr_18670 = state_18594;
(statearr_18670[(23)] = inst_18562__$1);

return statearr_18670;
})();
if(cljs.core.truth_(inst_18563)){
var statearr_18671_18733 = state_18594__$1;
(statearr_18671_18733[(1)] = (39));

} else {
var statearr_18672_18734 = state_18594__$1;
(statearr_18672_18734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18595 === (8))){
var inst_18477 = (state_18594[(13)]);
var inst_18478 = (state_18594[(16)]);
var inst_18480 = (inst_18478 < inst_18477);
var inst_18481 = inst_18480;
var state_18594__$1 = state_18594;
if(cljs.core.truth_(inst_18481)){
var statearr_18673_18735 = state_18594__$1;
(statearr_18673_18735[(1)] = (10));

} else {
var statearr_18674_18736 = state_18594__$1;
(statearr_18674_18736[(1)] = (11));

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
});})(c__10260__auto___18682,cs,m,dchan,dctr,done))
;
return ((function (switch__10195__auto__,c__10260__auto___18682,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10196__auto__ = null;
var cljs$core$async$mult_$_state_machine__10196__auto____0 = (function (){
var statearr_18678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18678[(0)] = cljs$core$async$mult_$_state_machine__10196__auto__);

(statearr_18678[(1)] = (1));

return statearr_18678;
});
var cljs$core$async$mult_$_state_machine__10196__auto____1 = (function (state_18594){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18679){if((e18679 instanceof Object)){
var ex__10199__auto__ = e18679;
var statearr_18680_18737 = state_18594;
(statearr_18680_18737[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18738 = state_18594;
state_18594 = G__18738;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10196__auto__ = function(state_18594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10196__auto____1.call(this,state_18594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10196__auto____0;
cljs$core$async$mult_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10196__auto____1;
return cljs$core$async$mult_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___18682,cs,m,dchan,dctr,done))
})();
var state__10262__auto__ = (function (){var statearr_18681 = f__10261__auto__.call(null);
(statearr_18681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___18682);

return statearr_18681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___18682,cs,m,dchan,dctr,done))
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
var args18739 = [];
var len__6152__auto___18742 = arguments.length;
var i__6153__auto___18743 = (0);
while(true){
if((i__6153__auto___18743 < len__6152__auto___18742)){
args18739.push((arguments[i__6153__auto___18743]));

var G__18744 = (i__6153__auto___18743 + (1));
i__6153__auto___18743 = G__18744;
continue;
} else {
}
break;
}

var G__18741 = args18739.length;
switch (G__18741) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18739.length)].join('')));

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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,state_map);
} else {
var m__5750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,state_map);
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
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,mode);
} else {
var m__5750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18756 = arguments.length;
var i__6153__auto___18757 = (0);
while(true){
if((i__6153__auto___18757 < len__6152__auto___18756)){
args__6159__auto__.push((arguments[i__6153__auto___18757]));

var G__18758 = (i__6153__auto___18757 + (1));
i__6153__auto___18757 = G__18758;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18750){
var map__18751 = p__18750;
var map__18751__$1 = ((((!((map__18751 == null)))?((((map__18751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18751):map__18751);
var opts = map__18751__$1;
var statearr_18753_18759 = state;
(statearr_18753_18759[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18751,map__18751__$1,opts){
return (function (val){
var statearr_18754_18760 = state;
(statearr_18754_18760[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18751,map__18751__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18755_18761 = state;
(statearr_18755_18761[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18746){
var G__18747 = cljs.core.first.call(null,seq18746);
var seq18746__$1 = cljs.core.next.call(null,seq18746);
var G__18748 = cljs.core.first.call(null,seq18746__$1);
var seq18746__$2 = cljs.core.next.call(null,seq18746__$1);
var G__18749 = cljs.core.first.call(null,seq18746__$2);
var seq18746__$3 = cljs.core.next.call(null,seq18746__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18747,G__18748,G__18749,seq18746__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18925 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18926){
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
this.meta18926 = meta18926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18927,meta18926__$1){
var self__ = this;
var _18927__$1 = this;
return (new cljs.core.async.t_cljs$core$async18925(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18926__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18927){
var self__ = this;
var _18927__$1 = this;
return self__.meta18926;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18925.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18926","meta18926",-273136538,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18925";

cljs.core.async.t_cljs$core$async18925.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18925");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18925 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18925(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18926){
return (new cljs.core.async.t_cljs$core$async18925(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18926));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18925(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10260__auto___19088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19025){
var state_val_19026 = (state_19025[(1)]);
if((state_val_19026 === (7))){
var inst_18943 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19027_19089 = state_19025__$1;
(statearr_19027_19089[(2)] = inst_18943);

(statearr_19027_19089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (20))){
var inst_18955 = (state_19025[(7)]);
var state_19025__$1 = state_19025;
var statearr_19028_19090 = state_19025__$1;
(statearr_19028_19090[(2)] = inst_18955);

(statearr_19028_19090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (27))){
var state_19025__$1 = state_19025;
var statearr_19029_19091 = state_19025__$1;
(statearr_19029_19091[(2)] = null);

(statearr_19029_19091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (1))){
var inst_18931 = (state_19025[(8)]);
var inst_18931__$1 = calc_state.call(null);
var inst_18933 = (inst_18931__$1 == null);
var inst_18934 = cljs.core.not.call(null,inst_18933);
var state_19025__$1 = (function (){var statearr_19030 = state_19025;
(statearr_19030[(8)] = inst_18931__$1);

return statearr_19030;
})();
if(inst_18934){
var statearr_19031_19092 = state_19025__$1;
(statearr_19031_19092[(1)] = (2));

} else {
var statearr_19032_19093 = state_19025__$1;
(statearr_19032_19093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (24))){
var inst_18999 = (state_19025[(9)]);
var inst_18985 = (state_19025[(10)]);
var inst_18978 = (state_19025[(11)]);
var inst_18999__$1 = inst_18978.call(null,inst_18985);
var state_19025__$1 = (function (){var statearr_19033 = state_19025;
(statearr_19033[(9)] = inst_18999__$1);

return statearr_19033;
})();
if(cljs.core.truth_(inst_18999__$1)){
var statearr_19034_19094 = state_19025__$1;
(statearr_19034_19094[(1)] = (29));

} else {
var statearr_19035_19095 = state_19025__$1;
(statearr_19035_19095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (4))){
var inst_18946 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18946)){
var statearr_19036_19096 = state_19025__$1;
(statearr_19036_19096[(1)] = (8));

} else {
var statearr_19037_19097 = state_19025__$1;
(statearr_19037_19097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (15))){
var inst_18972 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18972)){
var statearr_19038_19098 = state_19025__$1;
(statearr_19038_19098[(1)] = (19));

} else {
var statearr_19039_19099 = state_19025__$1;
(statearr_19039_19099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (21))){
var inst_18977 = (state_19025[(12)]);
var inst_18977__$1 = (state_19025[(2)]);
var inst_18978 = cljs.core.get.call(null,inst_18977__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18979 = cljs.core.get.call(null,inst_18977__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18980 = cljs.core.get.call(null,inst_18977__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19025__$1 = (function (){var statearr_19040 = state_19025;
(statearr_19040[(12)] = inst_18977__$1);

(statearr_19040[(11)] = inst_18978);

(statearr_19040[(13)] = inst_18979);

return statearr_19040;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19025__$1,(22),inst_18980);
} else {
if((state_val_19026 === (31))){
var inst_19007 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_19007)){
var statearr_19041_19100 = state_19025__$1;
(statearr_19041_19100[(1)] = (32));

} else {
var statearr_19042_19101 = state_19025__$1;
(statearr_19042_19101[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (32))){
var inst_18984 = (state_19025[(14)]);
var state_19025__$1 = state_19025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19025__$1,(35),out,inst_18984);
} else {
if((state_val_19026 === (33))){
var inst_18977 = (state_19025[(12)]);
var inst_18955 = inst_18977;
var state_19025__$1 = (function (){var statearr_19043 = state_19025;
(statearr_19043[(7)] = inst_18955);

return statearr_19043;
})();
var statearr_19044_19102 = state_19025__$1;
(statearr_19044_19102[(2)] = null);

(statearr_19044_19102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (13))){
var inst_18955 = (state_19025[(7)]);
var inst_18962 = inst_18955.cljs$lang$protocol_mask$partition0$;
var inst_18963 = (inst_18962 & (64));
var inst_18964 = inst_18955.cljs$core$ISeq$;
var inst_18965 = (inst_18963) || (inst_18964);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18965)){
var statearr_19045_19103 = state_19025__$1;
(statearr_19045_19103[(1)] = (16));

} else {
var statearr_19046_19104 = state_19025__$1;
(statearr_19046_19104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (22))){
var inst_18984 = (state_19025[(14)]);
var inst_18985 = (state_19025[(10)]);
var inst_18983 = (state_19025[(2)]);
var inst_18984__$1 = cljs.core.nth.call(null,inst_18983,(0),null);
var inst_18985__$1 = cljs.core.nth.call(null,inst_18983,(1),null);
var inst_18986 = (inst_18984__$1 == null);
var inst_18987 = cljs.core._EQ_.call(null,inst_18985__$1,change);
var inst_18988 = (inst_18986) || (inst_18987);
var state_19025__$1 = (function (){var statearr_19047 = state_19025;
(statearr_19047[(14)] = inst_18984__$1);

(statearr_19047[(10)] = inst_18985__$1);

return statearr_19047;
})();
if(cljs.core.truth_(inst_18988)){
var statearr_19048_19105 = state_19025__$1;
(statearr_19048_19105[(1)] = (23));

} else {
var statearr_19049_19106 = state_19025__$1;
(statearr_19049_19106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (36))){
var inst_18977 = (state_19025[(12)]);
var inst_18955 = inst_18977;
var state_19025__$1 = (function (){var statearr_19050 = state_19025;
(statearr_19050[(7)] = inst_18955);

return statearr_19050;
})();
var statearr_19051_19107 = state_19025__$1;
(statearr_19051_19107[(2)] = null);

(statearr_19051_19107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (29))){
var inst_18999 = (state_19025[(9)]);
var state_19025__$1 = state_19025;
var statearr_19052_19108 = state_19025__$1;
(statearr_19052_19108[(2)] = inst_18999);

(statearr_19052_19108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (6))){
var state_19025__$1 = state_19025;
var statearr_19053_19109 = state_19025__$1;
(statearr_19053_19109[(2)] = false);

(statearr_19053_19109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (28))){
var inst_18995 = (state_19025[(2)]);
var inst_18996 = calc_state.call(null);
var inst_18955 = inst_18996;
var state_19025__$1 = (function (){var statearr_19054 = state_19025;
(statearr_19054[(15)] = inst_18995);

(statearr_19054[(7)] = inst_18955);

return statearr_19054;
})();
var statearr_19055_19110 = state_19025__$1;
(statearr_19055_19110[(2)] = null);

(statearr_19055_19110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (25))){
var inst_19021 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19056_19111 = state_19025__$1;
(statearr_19056_19111[(2)] = inst_19021);

(statearr_19056_19111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (34))){
var inst_19019 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19057_19112 = state_19025__$1;
(statearr_19057_19112[(2)] = inst_19019);

(statearr_19057_19112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (17))){
var state_19025__$1 = state_19025;
var statearr_19058_19113 = state_19025__$1;
(statearr_19058_19113[(2)] = false);

(statearr_19058_19113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (3))){
var state_19025__$1 = state_19025;
var statearr_19059_19114 = state_19025__$1;
(statearr_19059_19114[(2)] = false);

(statearr_19059_19114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (12))){
var inst_19023 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19025__$1,inst_19023);
} else {
if((state_val_19026 === (2))){
var inst_18931 = (state_19025[(8)]);
var inst_18936 = inst_18931.cljs$lang$protocol_mask$partition0$;
var inst_18937 = (inst_18936 & (64));
var inst_18938 = inst_18931.cljs$core$ISeq$;
var inst_18939 = (inst_18937) || (inst_18938);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18939)){
var statearr_19060_19115 = state_19025__$1;
(statearr_19060_19115[(1)] = (5));

} else {
var statearr_19061_19116 = state_19025__$1;
(statearr_19061_19116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (23))){
var inst_18984 = (state_19025[(14)]);
var inst_18990 = (inst_18984 == null);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18990)){
var statearr_19062_19117 = state_19025__$1;
(statearr_19062_19117[(1)] = (26));

} else {
var statearr_19063_19118 = state_19025__$1;
(statearr_19063_19118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (35))){
var inst_19010 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_19010)){
var statearr_19064_19119 = state_19025__$1;
(statearr_19064_19119[(1)] = (36));

} else {
var statearr_19065_19120 = state_19025__$1;
(statearr_19065_19120[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (19))){
var inst_18955 = (state_19025[(7)]);
var inst_18974 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18955);
var state_19025__$1 = state_19025;
var statearr_19066_19121 = state_19025__$1;
(statearr_19066_19121[(2)] = inst_18974);

(statearr_19066_19121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (11))){
var inst_18955 = (state_19025[(7)]);
var inst_18959 = (inst_18955 == null);
var inst_18960 = cljs.core.not.call(null,inst_18959);
var state_19025__$1 = state_19025;
if(inst_18960){
var statearr_19067_19122 = state_19025__$1;
(statearr_19067_19122[(1)] = (13));

} else {
var statearr_19068_19123 = state_19025__$1;
(statearr_19068_19123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (9))){
var inst_18931 = (state_19025[(8)]);
var state_19025__$1 = state_19025;
var statearr_19069_19124 = state_19025__$1;
(statearr_19069_19124[(2)] = inst_18931);

(statearr_19069_19124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (5))){
var state_19025__$1 = state_19025;
var statearr_19070_19125 = state_19025__$1;
(statearr_19070_19125[(2)] = true);

(statearr_19070_19125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (14))){
var state_19025__$1 = state_19025;
var statearr_19071_19126 = state_19025__$1;
(statearr_19071_19126[(2)] = false);

(statearr_19071_19126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (26))){
var inst_18985 = (state_19025[(10)]);
var inst_18992 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18985);
var state_19025__$1 = state_19025;
var statearr_19072_19127 = state_19025__$1;
(statearr_19072_19127[(2)] = inst_18992);

(statearr_19072_19127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (16))){
var state_19025__$1 = state_19025;
var statearr_19073_19128 = state_19025__$1;
(statearr_19073_19128[(2)] = true);

(statearr_19073_19128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (38))){
var inst_19015 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19074_19129 = state_19025__$1;
(statearr_19074_19129[(2)] = inst_19015);

(statearr_19074_19129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (30))){
var inst_18985 = (state_19025[(10)]);
var inst_18978 = (state_19025[(11)]);
var inst_18979 = (state_19025[(13)]);
var inst_19002 = cljs.core.empty_QMARK_.call(null,inst_18978);
var inst_19003 = inst_18979.call(null,inst_18985);
var inst_19004 = cljs.core.not.call(null,inst_19003);
var inst_19005 = (inst_19002) && (inst_19004);
var state_19025__$1 = state_19025;
var statearr_19075_19130 = state_19025__$1;
(statearr_19075_19130[(2)] = inst_19005);

(statearr_19075_19130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (10))){
var inst_18931 = (state_19025[(8)]);
var inst_18951 = (state_19025[(2)]);
var inst_18952 = cljs.core.get.call(null,inst_18951,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18953 = cljs.core.get.call(null,inst_18951,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18954 = cljs.core.get.call(null,inst_18951,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18955 = inst_18931;
var state_19025__$1 = (function (){var statearr_19076 = state_19025;
(statearr_19076[(7)] = inst_18955);

(statearr_19076[(16)] = inst_18953);

(statearr_19076[(17)] = inst_18952);

(statearr_19076[(18)] = inst_18954);

return statearr_19076;
})();
var statearr_19077_19131 = state_19025__$1;
(statearr_19077_19131[(2)] = null);

(statearr_19077_19131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (18))){
var inst_18969 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19078_19132 = state_19025__$1;
(statearr_19078_19132[(2)] = inst_18969);

(statearr_19078_19132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (37))){
var state_19025__$1 = state_19025;
var statearr_19079_19133 = state_19025__$1;
(statearr_19079_19133[(2)] = null);

(statearr_19079_19133[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (8))){
var inst_18931 = (state_19025[(8)]);
var inst_18948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18931);
var state_19025__$1 = state_19025;
var statearr_19080_19134 = state_19025__$1;
(statearr_19080_19134[(2)] = inst_18948);

(statearr_19080_19134[(1)] = (10));


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
});})(c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10195__auto__,c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10196__auto__ = null;
var cljs$core$async$mix_$_state_machine__10196__auto____0 = (function (){
var statearr_19084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19084[(0)] = cljs$core$async$mix_$_state_machine__10196__auto__);

(statearr_19084[(1)] = (1));

return statearr_19084;
});
var cljs$core$async$mix_$_state_machine__10196__auto____1 = (function (state_19025){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19085){if((e19085 instanceof Object)){
var ex__10199__auto__ = e19085;
var statearr_19086_19135 = state_19025;
(statearr_19086_19135[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19136 = state_19025;
state_19025 = G__19136;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10196__auto__ = function(state_19025){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10196__auto____1.call(this,state_19025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10196__auto____0;
cljs$core$async$mix_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10196__auto____1;
return cljs$core$async$mix_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10262__auto__ = (function (){var statearr_19087 = f__10261__auto__.call(null);
(statearr_19087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19088);

return statearr_19087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args19137 = [];
var len__6152__auto___19140 = arguments.length;
var i__6153__auto___19141 = (0);
while(true){
if((i__6153__auto___19141 < len__6152__auto___19140)){
args19137.push((arguments[i__6153__auto___19141]));

var G__19142 = (i__6153__auto___19141 + (1));
i__6153__auto___19141 = G__19142;
continue;
} else {
}
break;
}

var G__19139 = args19137.length;
switch (G__19139) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19137.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p);
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
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v);
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
var args19145 = [];
var len__6152__auto___19270 = arguments.length;
var i__6153__auto___19271 = (0);
while(true){
if((i__6153__auto___19271 < len__6152__auto___19270)){
args19145.push((arguments[i__6153__auto___19271]));

var G__19272 = (i__6153__auto___19271 + (1));
i__6153__auto___19271 = G__19272;
continue;
} else {
}
break;
}

var G__19147 = args19145.length;
switch (G__19147) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19145.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5094__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5094__auto__,mults){
return (function (p1__19144_SHARP_){
if(cljs.core.truth_(p1__19144_SHARP_.call(null,topic))){
return p1__19144_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19144_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19148 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19149){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19149 = meta19149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19150,meta19149__$1){
var self__ = this;
var _19150__$1 = this;
return (new cljs.core.async.t_cljs$core$async19148(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19149__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19150){
var self__ = this;
var _19150__$1 = this;
return self__.meta19149;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19149","meta19149",1271926015,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19148";

cljs.core.async.t_cljs$core$async19148.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19148");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19148 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19149){
return (new cljs.core.async.t_cljs$core$async19148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19149));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19148(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10260__auto___19274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19274,mults,ensure_mult,p){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19274,mults,ensure_mult,p){
return (function (state_19222){
var state_val_19223 = (state_19222[(1)]);
if((state_val_19223 === (7))){
var inst_19218 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19224_19275 = state_19222__$1;
(statearr_19224_19275[(2)] = inst_19218);

(statearr_19224_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (20))){
var state_19222__$1 = state_19222;
var statearr_19225_19276 = state_19222__$1;
(statearr_19225_19276[(2)] = null);

(statearr_19225_19276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (1))){
var state_19222__$1 = state_19222;
var statearr_19226_19277 = state_19222__$1;
(statearr_19226_19277[(2)] = null);

(statearr_19226_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (24))){
var inst_19201 = (state_19222[(7)]);
var inst_19210 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19201);
var state_19222__$1 = state_19222;
var statearr_19227_19278 = state_19222__$1;
(statearr_19227_19278[(2)] = inst_19210);

(statearr_19227_19278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (4))){
var inst_19153 = (state_19222[(8)]);
var inst_19153__$1 = (state_19222[(2)]);
var inst_19154 = (inst_19153__$1 == null);
var state_19222__$1 = (function (){var statearr_19228 = state_19222;
(statearr_19228[(8)] = inst_19153__$1);

return statearr_19228;
})();
if(cljs.core.truth_(inst_19154)){
var statearr_19229_19279 = state_19222__$1;
(statearr_19229_19279[(1)] = (5));

} else {
var statearr_19230_19280 = state_19222__$1;
(statearr_19230_19280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (15))){
var inst_19195 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19231_19281 = state_19222__$1;
(statearr_19231_19281[(2)] = inst_19195);

(statearr_19231_19281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (21))){
var inst_19215 = (state_19222[(2)]);
var state_19222__$1 = (function (){var statearr_19232 = state_19222;
(statearr_19232[(9)] = inst_19215);

return statearr_19232;
})();
var statearr_19233_19282 = state_19222__$1;
(statearr_19233_19282[(2)] = null);

(statearr_19233_19282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (13))){
var inst_19177 = (state_19222[(10)]);
var inst_19179 = cljs.core.chunked_seq_QMARK_.call(null,inst_19177);
var state_19222__$1 = state_19222;
if(inst_19179){
var statearr_19234_19283 = state_19222__$1;
(statearr_19234_19283[(1)] = (16));

} else {
var statearr_19235_19284 = state_19222__$1;
(statearr_19235_19284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (22))){
var inst_19207 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
if(cljs.core.truth_(inst_19207)){
var statearr_19236_19285 = state_19222__$1;
(statearr_19236_19285[(1)] = (23));

} else {
var statearr_19237_19286 = state_19222__$1;
(statearr_19237_19286[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (6))){
var inst_19153 = (state_19222[(8)]);
var inst_19203 = (state_19222[(11)]);
var inst_19201 = (state_19222[(7)]);
var inst_19201__$1 = topic_fn.call(null,inst_19153);
var inst_19202 = cljs.core.deref.call(null,mults);
var inst_19203__$1 = cljs.core.get.call(null,inst_19202,inst_19201__$1);
var state_19222__$1 = (function (){var statearr_19238 = state_19222;
(statearr_19238[(11)] = inst_19203__$1);

(statearr_19238[(7)] = inst_19201__$1);

return statearr_19238;
})();
if(cljs.core.truth_(inst_19203__$1)){
var statearr_19239_19287 = state_19222__$1;
(statearr_19239_19287[(1)] = (19));

} else {
var statearr_19240_19288 = state_19222__$1;
(statearr_19240_19288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (25))){
var inst_19212 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19241_19289 = state_19222__$1;
(statearr_19241_19289[(2)] = inst_19212);

(statearr_19241_19289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (17))){
var inst_19177 = (state_19222[(10)]);
var inst_19186 = cljs.core.first.call(null,inst_19177);
var inst_19187 = cljs.core.async.muxch_STAR_.call(null,inst_19186);
var inst_19188 = cljs.core.async.close_BANG_.call(null,inst_19187);
var inst_19189 = cljs.core.next.call(null,inst_19177);
var inst_19163 = inst_19189;
var inst_19164 = null;
var inst_19165 = (0);
var inst_19166 = (0);
var state_19222__$1 = (function (){var statearr_19242 = state_19222;
(statearr_19242[(12)] = inst_19165);

(statearr_19242[(13)] = inst_19164);

(statearr_19242[(14)] = inst_19166);

(statearr_19242[(15)] = inst_19163);

(statearr_19242[(16)] = inst_19188);

return statearr_19242;
})();
var statearr_19243_19290 = state_19222__$1;
(statearr_19243_19290[(2)] = null);

(statearr_19243_19290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (3))){
var inst_19220 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19222__$1,inst_19220);
} else {
if((state_val_19223 === (12))){
var inst_19197 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19244_19291 = state_19222__$1;
(statearr_19244_19291[(2)] = inst_19197);

(statearr_19244_19291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (2))){
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19222__$1,(4),ch);
} else {
if((state_val_19223 === (23))){
var state_19222__$1 = state_19222;
var statearr_19245_19292 = state_19222__$1;
(statearr_19245_19292[(2)] = null);

(statearr_19245_19292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (19))){
var inst_19153 = (state_19222[(8)]);
var inst_19203 = (state_19222[(11)]);
var inst_19205 = cljs.core.async.muxch_STAR_.call(null,inst_19203);
var state_19222__$1 = state_19222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19222__$1,(22),inst_19205,inst_19153);
} else {
if((state_val_19223 === (11))){
var inst_19177 = (state_19222[(10)]);
var inst_19163 = (state_19222[(15)]);
var inst_19177__$1 = cljs.core.seq.call(null,inst_19163);
var state_19222__$1 = (function (){var statearr_19246 = state_19222;
(statearr_19246[(10)] = inst_19177__$1);

return statearr_19246;
})();
if(inst_19177__$1){
var statearr_19247_19293 = state_19222__$1;
(statearr_19247_19293[(1)] = (13));

} else {
var statearr_19248_19294 = state_19222__$1;
(statearr_19248_19294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (9))){
var inst_19199 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19249_19295 = state_19222__$1;
(statearr_19249_19295[(2)] = inst_19199);

(statearr_19249_19295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (5))){
var inst_19160 = cljs.core.deref.call(null,mults);
var inst_19161 = cljs.core.vals.call(null,inst_19160);
var inst_19162 = cljs.core.seq.call(null,inst_19161);
var inst_19163 = inst_19162;
var inst_19164 = null;
var inst_19165 = (0);
var inst_19166 = (0);
var state_19222__$1 = (function (){var statearr_19250 = state_19222;
(statearr_19250[(12)] = inst_19165);

(statearr_19250[(13)] = inst_19164);

(statearr_19250[(14)] = inst_19166);

(statearr_19250[(15)] = inst_19163);

return statearr_19250;
})();
var statearr_19251_19296 = state_19222__$1;
(statearr_19251_19296[(2)] = null);

(statearr_19251_19296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (14))){
var state_19222__$1 = state_19222;
var statearr_19255_19297 = state_19222__$1;
(statearr_19255_19297[(2)] = null);

(statearr_19255_19297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (16))){
var inst_19177 = (state_19222[(10)]);
var inst_19181 = cljs.core.chunk_first.call(null,inst_19177);
var inst_19182 = cljs.core.chunk_rest.call(null,inst_19177);
var inst_19183 = cljs.core.count.call(null,inst_19181);
var inst_19163 = inst_19182;
var inst_19164 = inst_19181;
var inst_19165 = inst_19183;
var inst_19166 = (0);
var state_19222__$1 = (function (){var statearr_19256 = state_19222;
(statearr_19256[(12)] = inst_19165);

(statearr_19256[(13)] = inst_19164);

(statearr_19256[(14)] = inst_19166);

(statearr_19256[(15)] = inst_19163);

return statearr_19256;
})();
var statearr_19257_19298 = state_19222__$1;
(statearr_19257_19298[(2)] = null);

(statearr_19257_19298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (10))){
var inst_19165 = (state_19222[(12)]);
var inst_19164 = (state_19222[(13)]);
var inst_19166 = (state_19222[(14)]);
var inst_19163 = (state_19222[(15)]);
var inst_19171 = cljs.core._nth.call(null,inst_19164,inst_19166);
var inst_19172 = cljs.core.async.muxch_STAR_.call(null,inst_19171);
var inst_19173 = cljs.core.async.close_BANG_.call(null,inst_19172);
var inst_19174 = (inst_19166 + (1));
var tmp19252 = inst_19165;
var tmp19253 = inst_19164;
var tmp19254 = inst_19163;
var inst_19163__$1 = tmp19254;
var inst_19164__$1 = tmp19253;
var inst_19165__$1 = tmp19252;
var inst_19166__$1 = inst_19174;
var state_19222__$1 = (function (){var statearr_19258 = state_19222;
(statearr_19258[(12)] = inst_19165__$1);

(statearr_19258[(17)] = inst_19173);

(statearr_19258[(13)] = inst_19164__$1);

(statearr_19258[(14)] = inst_19166__$1);

(statearr_19258[(15)] = inst_19163__$1);

return statearr_19258;
})();
var statearr_19259_19299 = state_19222__$1;
(statearr_19259_19299[(2)] = null);

(statearr_19259_19299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (18))){
var inst_19192 = (state_19222[(2)]);
var state_19222__$1 = state_19222;
var statearr_19260_19300 = state_19222__$1;
(statearr_19260_19300[(2)] = inst_19192);

(statearr_19260_19300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19223 === (8))){
var inst_19165 = (state_19222[(12)]);
var inst_19166 = (state_19222[(14)]);
var inst_19168 = (inst_19166 < inst_19165);
var inst_19169 = inst_19168;
var state_19222__$1 = state_19222;
if(cljs.core.truth_(inst_19169)){
var statearr_19261_19301 = state_19222__$1;
(statearr_19261_19301[(1)] = (10));

} else {
var statearr_19262_19302 = state_19222__$1;
(statearr_19262_19302[(1)] = (11));

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
});})(c__10260__auto___19274,mults,ensure_mult,p))
;
return ((function (switch__10195__auto__,c__10260__auto___19274,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19266[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19266[(1)] = (1));

return statearr_19266;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19222){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19267){if((e19267 instanceof Object)){
var ex__10199__auto__ = e19267;
var statearr_19268_19303 = state_19222;
(statearr_19268_19303[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19304 = state_19222;
state_19222 = G__19304;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19274,mults,ensure_mult,p))
})();
var state__10262__auto__ = (function (){var statearr_19269 = f__10261__auto__.call(null);
(statearr_19269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19274);

return statearr_19269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19274,mults,ensure_mult,p))
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
var args19305 = [];
var len__6152__auto___19308 = arguments.length;
var i__6153__auto___19309 = (0);
while(true){
if((i__6153__auto___19309 < len__6152__auto___19308)){
args19305.push((arguments[i__6153__auto___19309]));

var G__19310 = (i__6153__auto___19309 + (1));
i__6153__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var G__19307 = args19305.length;
switch (G__19307) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19305.length)].join('')));

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
var args19312 = [];
var len__6152__auto___19315 = arguments.length;
var i__6153__auto___19316 = (0);
while(true){
if((i__6153__auto___19316 < len__6152__auto___19315)){
args19312.push((arguments[i__6153__auto___19316]));

var G__19317 = (i__6153__auto___19316 + (1));
i__6153__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var G__19314 = args19312.length;
switch (G__19314) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19312.length)].join('')));

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
var args19319 = [];
var len__6152__auto___19390 = arguments.length;
var i__6153__auto___19391 = (0);
while(true){
if((i__6153__auto___19391 < len__6152__auto___19390)){
args19319.push((arguments[i__6153__auto___19391]));

var G__19392 = (i__6153__auto___19391 + (1));
i__6153__auto___19391 = G__19392;
continue;
} else {
}
break;
}

var G__19321 = args19319.length;
switch (G__19321) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19319.length)].join('')));

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
var c__10260__auto___19394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19360){
var state_val_19361 = (state_19360[(1)]);
if((state_val_19361 === (7))){
var state_19360__$1 = state_19360;
var statearr_19362_19395 = state_19360__$1;
(statearr_19362_19395[(2)] = null);

(statearr_19362_19395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (1))){
var state_19360__$1 = state_19360;
var statearr_19363_19396 = state_19360__$1;
(statearr_19363_19396[(2)] = null);

(statearr_19363_19396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (4))){
var inst_19324 = (state_19360[(7)]);
var inst_19326 = (inst_19324 < cnt);
var state_19360__$1 = state_19360;
if(cljs.core.truth_(inst_19326)){
var statearr_19364_19397 = state_19360__$1;
(statearr_19364_19397[(1)] = (6));

} else {
var statearr_19365_19398 = state_19360__$1;
(statearr_19365_19398[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (15))){
var inst_19356 = (state_19360[(2)]);
var state_19360__$1 = state_19360;
var statearr_19366_19399 = state_19360__$1;
(statearr_19366_19399[(2)] = inst_19356);

(statearr_19366_19399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (13))){
var inst_19349 = cljs.core.async.close_BANG_.call(null,out);
var state_19360__$1 = state_19360;
var statearr_19367_19400 = state_19360__$1;
(statearr_19367_19400[(2)] = inst_19349);

(statearr_19367_19400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (6))){
var state_19360__$1 = state_19360;
var statearr_19368_19401 = state_19360__$1;
(statearr_19368_19401[(2)] = null);

(statearr_19368_19401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (3))){
var inst_19358 = (state_19360[(2)]);
var state_19360__$1 = state_19360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19360__$1,inst_19358);
} else {
if((state_val_19361 === (12))){
var inst_19346 = (state_19360[(8)]);
var inst_19346__$1 = (state_19360[(2)]);
var inst_19347 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19346__$1);
var state_19360__$1 = (function (){var statearr_19369 = state_19360;
(statearr_19369[(8)] = inst_19346__$1);

return statearr_19369;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19370_19402 = state_19360__$1;
(statearr_19370_19402[(1)] = (13));

} else {
var statearr_19371_19403 = state_19360__$1;
(statearr_19371_19403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (2))){
var inst_19323 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19324 = (0);
var state_19360__$1 = (function (){var statearr_19372 = state_19360;
(statearr_19372[(7)] = inst_19324);

(statearr_19372[(9)] = inst_19323);

return statearr_19372;
})();
var statearr_19373_19404 = state_19360__$1;
(statearr_19373_19404[(2)] = null);

(statearr_19373_19404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (11))){
var inst_19324 = (state_19360[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19360,(10),Object,null,(9));
var inst_19333 = chs__$1.call(null,inst_19324);
var inst_19334 = done.call(null,inst_19324);
var inst_19335 = cljs.core.async.take_BANG_.call(null,inst_19333,inst_19334);
var state_19360__$1 = state_19360;
var statearr_19374_19405 = state_19360__$1;
(statearr_19374_19405[(2)] = inst_19335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (9))){
var inst_19324 = (state_19360[(7)]);
var inst_19337 = (state_19360[(2)]);
var inst_19338 = (inst_19324 + (1));
var inst_19324__$1 = inst_19338;
var state_19360__$1 = (function (){var statearr_19375 = state_19360;
(statearr_19375[(7)] = inst_19324__$1);

(statearr_19375[(10)] = inst_19337);

return statearr_19375;
})();
var statearr_19376_19406 = state_19360__$1;
(statearr_19376_19406[(2)] = null);

(statearr_19376_19406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (5))){
var inst_19344 = (state_19360[(2)]);
var state_19360__$1 = (function (){var statearr_19377 = state_19360;
(statearr_19377[(11)] = inst_19344);

return statearr_19377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19360__$1,(12),dchan);
} else {
if((state_val_19361 === (14))){
var inst_19346 = (state_19360[(8)]);
var inst_19351 = cljs.core.apply.call(null,f,inst_19346);
var state_19360__$1 = state_19360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19360__$1,(16),out,inst_19351);
} else {
if((state_val_19361 === (16))){
var inst_19353 = (state_19360[(2)]);
var state_19360__$1 = (function (){var statearr_19378 = state_19360;
(statearr_19378[(12)] = inst_19353);

return statearr_19378;
})();
var statearr_19379_19407 = state_19360__$1;
(statearr_19379_19407[(2)] = null);

(statearr_19379_19407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (10))){
var inst_19328 = (state_19360[(2)]);
var inst_19329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19360__$1 = (function (){var statearr_19380 = state_19360;
(statearr_19380[(13)] = inst_19328);

return statearr_19380;
})();
var statearr_19381_19408 = state_19360__$1;
(statearr_19381_19408[(2)] = inst_19329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19361 === (8))){
var inst_19342 = (state_19360[(2)]);
var state_19360__$1 = state_19360;
var statearr_19382_19409 = state_19360__$1;
(statearr_19382_19409[(2)] = inst_19342);

(statearr_19382_19409[(1)] = (5));


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
});})(c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10195__auto__,c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19386[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19386[(1)] = (1));

return statearr_19386;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19360){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19387){if((e19387 instanceof Object)){
var ex__10199__auto__ = e19387;
var statearr_19388_19410 = state_19360;
(statearr_19388_19410[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19411 = state_19360;
state_19360 = G__19411;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10262__auto__ = (function (){var statearr_19389 = f__10261__auto__.call(null);
(statearr_19389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19394);

return statearr_19389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19394,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19413 = [];
var len__6152__auto___19469 = arguments.length;
var i__6153__auto___19470 = (0);
while(true){
if((i__6153__auto___19470 < len__6152__auto___19469)){
args19413.push((arguments[i__6153__auto___19470]));

var G__19471 = (i__6153__auto___19470 + (1));
i__6153__auto___19470 = G__19471;
continue;
} else {
}
break;
}

var G__19415 = args19413.length;
switch (G__19415) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19413.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19473,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19473,out){
return (function (state_19445){
var state_val_19446 = (state_19445[(1)]);
if((state_val_19446 === (7))){
var inst_19425 = (state_19445[(7)]);
var inst_19424 = (state_19445[(8)]);
var inst_19424__$1 = (state_19445[(2)]);
var inst_19425__$1 = cljs.core.nth.call(null,inst_19424__$1,(0),null);
var inst_19426 = cljs.core.nth.call(null,inst_19424__$1,(1),null);
var inst_19427 = (inst_19425__$1 == null);
var state_19445__$1 = (function (){var statearr_19447 = state_19445;
(statearr_19447[(7)] = inst_19425__$1);

(statearr_19447[(9)] = inst_19426);

(statearr_19447[(8)] = inst_19424__$1);

return statearr_19447;
})();
if(cljs.core.truth_(inst_19427)){
var statearr_19448_19474 = state_19445__$1;
(statearr_19448_19474[(1)] = (8));

} else {
var statearr_19449_19475 = state_19445__$1;
(statearr_19449_19475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (1))){
var inst_19416 = cljs.core.vec.call(null,chs);
var inst_19417 = inst_19416;
var state_19445__$1 = (function (){var statearr_19450 = state_19445;
(statearr_19450[(10)] = inst_19417);

return statearr_19450;
})();
var statearr_19451_19476 = state_19445__$1;
(statearr_19451_19476[(2)] = null);

(statearr_19451_19476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (4))){
var inst_19417 = (state_19445[(10)]);
var state_19445__$1 = state_19445;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19445__$1,(7),inst_19417);
} else {
if((state_val_19446 === (6))){
var inst_19441 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19452_19477 = state_19445__$1;
(statearr_19452_19477[(2)] = inst_19441);

(statearr_19452_19477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (3))){
var inst_19443 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19445__$1,inst_19443);
} else {
if((state_val_19446 === (2))){
var inst_19417 = (state_19445[(10)]);
var inst_19419 = cljs.core.count.call(null,inst_19417);
var inst_19420 = (inst_19419 > (0));
var state_19445__$1 = state_19445;
if(cljs.core.truth_(inst_19420)){
var statearr_19454_19478 = state_19445__$1;
(statearr_19454_19478[(1)] = (4));

} else {
var statearr_19455_19479 = state_19445__$1;
(statearr_19455_19479[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (11))){
var inst_19417 = (state_19445[(10)]);
var inst_19434 = (state_19445[(2)]);
var tmp19453 = inst_19417;
var inst_19417__$1 = tmp19453;
var state_19445__$1 = (function (){var statearr_19456 = state_19445;
(statearr_19456[(10)] = inst_19417__$1);

(statearr_19456[(11)] = inst_19434);

return statearr_19456;
})();
var statearr_19457_19480 = state_19445__$1;
(statearr_19457_19480[(2)] = null);

(statearr_19457_19480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (9))){
var inst_19425 = (state_19445[(7)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19445__$1,(11),out,inst_19425);
} else {
if((state_val_19446 === (5))){
var inst_19439 = cljs.core.async.close_BANG_.call(null,out);
var state_19445__$1 = state_19445;
var statearr_19458_19481 = state_19445__$1;
(statearr_19458_19481[(2)] = inst_19439);

(statearr_19458_19481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (10))){
var inst_19437 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19459_19482 = state_19445__$1;
(statearr_19459_19482[(2)] = inst_19437);

(statearr_19459_19482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (8))){
var inst_19425 = (state_19445[(7)]);
var inst_19426 = (state_19445[(9)]);
var inst_19417 = (state_19445[(10)]);
var inst_19424 = (state_19445[(8)]);
var inst_19429 = (function (){var cs = inst_19417;
var vec__19422 = inst_19424;
var v = inst_19425;
var c = inst_19426;
return ((function (cs,vec__19422,v,c,inst_19425,inst_19426,inst_19417,inst_19424,state_val_19446,c__10260__auto___19473,out){
return (function (p1__19412_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19412_SHARP_);
});
;})(cs,vec__19422,v,c,inst_19425,inst_19426,inst_19417,inst_19424,state_val_19446,c__10260__auto___19473,out))
})();
var inst_19430 = cljs.core.filterv.call(null,inst_19429,inst_19417);
var inst_19417__$1 = inst_19430;
var state_19445__$1 = (function (){var statearr_19460 = state_19445;
(statearr_19460[(10)] = inst_19417__$1);

return statearr_19460;
})();
var statearr_19461_19483 = state_19445__$1;
(statearr_19461_19483[(2)] = null);

(statearr_19461_19483[(1)] = (2));


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
});})(c__10260__auto___19473,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19473,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19465 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19465[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19465[(1)] = (1));

return statearr_19465;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19445){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19466){if((e19466 instanceof Object)){
var ex__10199__auto__ = e19466;
var statearr_19467_19484 = state_19445;
(statearr_19467_19484[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19485 = state_19445;
state_19445 = G__19485;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19473,out))
})();
var state__10262__auto__ = (function (){var statearr_19468 = f__10261__auto__.call(null);
(statearr_19468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19473);

return statearr_19468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19473,out))
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
var args19486 = [];
var len__6152__auto___19535 = arguments.length;
var i__6153__auto___19536 = (0);
while(true){
if((i__6153__auto___19536 < len__6152__auto___19535)){
args19486.push((arguments[i__6153__auto___19536]));

var G__19537 = (i__6153__auto___19536 + (1));
i__6153__auto___19536 = G__19537;
continue;
} else {
}
break;
}

var G__19488 = args19486.length;
switch (G__19488) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19486.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19539,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19539,out){
return (function (state_19512){
var state_val_19513 = (state_19512[(1)]);
if((state_val_19513 === (7))){
var inst_19494 = (state_19512[(7)]);
var inst_19494__$1 = (state_19512[(2)]);
var inst_19495 = (inst_19494__$1 == null);
var inst_19496 = cljs.core.not.call(null,inst_19495);
var state_19512__$1 = (function (){var statearr_19514 = state_19512;
(statearr_19514[(7)] = inst_19494__$1);

return statearr_19514;
})();
if(inst_19496){
var statearr_19515_19540 = state_19512__$1;
(statearr_19515_19540[(1)] = (8));

} else {
var statearr_19516_19541 = state_19512__$1;
(statearr_19516_19541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (1))){
var inst_19489 = (0);
var state_19512__$1 = (function (){var statearr_19517 = state_19512;
(statearr_19517[(8)] = inst_19489);

return statearr_19517;
})();
var statearr_19518_19542 = state_19512__$1;
(statearr_19518_19542[(2)] = null);

(statearr_19518_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (4))){
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(7),ch);
} else {
if((state_val_19513 === (6))){
var inst_19507 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19519_19543 = state_19512__$1;
(statearr_19519_19543[(2)] = inst_19507);

(statearr_19519_19543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (3))){
var inst_19509 = (state_19512[(2)]);
var inst_19510 = cljs.core.async.close_BANG_.call(null,out);
var state_19512__$1 = (function (){var statearr_19520 = state_19512;
(statearr_19520[(9)] = inst_19509);

return statearr_19520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19512__$1,inst_19510);
} else {
if((state_val_19513 === (2))){
var inst_19489 = (state_19512[(8)]);
var inst_19491 = (inst_19489 < n);
var state_19512__$1 = state_19512;
if(cljs.core.truth_(inst_19491)){
var statearr_19521_19544 = state_19512__$1;
(statearr_19521_19544[(1)] = (4));

} else {
var statearr_19522_19545 = state_19512__$1;
(statearr_19522_19545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (11))){
var inst_19489 = (state_19512[(8)]);
var inst_19499 = (state_19512[(2)]);
var inst_19500 = (inst_19489 + (1));
var inst_19489__$1 = inst_19500;
var state_19512__$1 = (function (){var statearr_19523 = state_19512;
(statearr_19523[(8)] = inst_19489__$1);

(statearr_19523[(10)] = inst_19499);

return statearr_19523;
})();
var statearr_19524_19546 = state_19512__$1;
(statearr_19524_19546[(2)] = null);

(statearr_19524_19546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (9))){
var state_19512__$1 = state_19512;
var statearr_19525_19547 = state_19512__$1;
(statearr_19525_19547[(2)] = null);

(statearr_19525_19547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (5))){
var state_19512__$1 = state_19512;
var statearr_19526_19548 = state_19512__$1;
(statearr_19526_19548[(2)] = null);

(statearr_19526_19548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (10))){
var inst_19504 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19527_19549 = state_19512__$1;
(statearr_19527_19549[(2)] = inst_19504);

(statearr_19527_19549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (8))){
var inst_19494 = (state_19512[(7)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19512__$1,(11),out,inst_19494);
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
});})(c__10260__auto___19539,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19539,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19531[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19531[(1)] = (1));

return statearr_19531;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19512){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19532){if((e19532 instanceof Object)){
var ex__10199__auto__ = e19532;
var statearr_19533_19550 = state_19512;
(statearr_19533_19550[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19551 = state_19512;
state_19512 = G__19551;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19539,out))
})();
var state__10262__auto__ = (function (){var statearr_19534 = f__10261__auto__.call(null);
(statearr_19534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19539);

return statearr_19534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19539,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19559 = (function (map_LT_,f,ch,meta19560){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19560 = meta19560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19561,meta19560__$1){
var self__ = this;
var _19561__$1 = this;
return (new cljs.core.async.t_cljs$core$async19559(self__.map_LT_,self__.f,self__.ch,meta19560__$1));
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19561){
var self__ = this;
var _19561__$1 = this;
return self__.meta19560;
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19562 = (function (map_LT_,f,ch,meta19560,_,fn1,meta19563){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19560 = meta19560;
this._ = _;
this.fn1 = fn1;
this.meta19563 = meta19563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19564,meta19563__$1){
var self__ = this;
var _19564__$1 = this;
return (new cljs.core.async.t_cljs$core$async19562(self__.map_LT_,self__.f,self__.ch,self__.meta19560,self__._,self__.fn1,meta19563__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19564){
var self__ = this;
var _19564__$1 = this;
return self__.meta19563;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19562.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19552_SHARP_){
return f1.call(null,(((p1__19552_SHARP_ == null))?null:self__.f.call(null,p1__19552_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19562.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19560","meta19560",-924460327,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19559","cljs.core.async/t_cljs$core$async19559",882344013,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19563","meta19563",-342050910,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19562";

cljs.core.async.t_cljs$core$async19562.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19562");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19562 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19562(map_LT___$1,f__$1,ch__$1,meta19560__$1,___$2,fn1__$1,meta19563){
return (new cljs.core.async.t_cljs$core$async19562(map_LT___$1,f__$1,ch__$1,meta19560__$1,___$2,fn1__$1,meta19563));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19562(self__.map_LT_,self__.f,self__.ch,self__.meta19560,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5082__auto__ = ret;
if(cljs.core.truth_(and__5082__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5082__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19560","meta19560",-924460327,null)], null);
});

cljs.core.async.t_cljs$core$async19559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19559";

cljs.core.async.t_cljs$core$async19559.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19559");
});

cljs.core.async.__GT_t_cljs$core$async19559 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19559(map_LT___$1,f__$1,ch__$1,meta19560){
return (new cljs.core.async.t_cljs$core$async19559(map_LT___$1,f__$1,ch__$1,meta19560));
});

}

return (new cljs.core.async.t_cljs$core$async19559(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19568 = (function (map_GT_,f,ch,meta19569){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19569 = meta19569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19570,meta19569__$1){
var self__ = this;
var _19570__$1 = this;
return (new cljs.core.async.t_cljs$core$async19568(self__.map_GT_,self__.f,self__.ch,meta19569__$1));
});

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19570){
var self__ = this;
var _19570__$1 = this;
return self__.meta19569;
});

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19569","meta19569",-497509005,null)], null);
});

cljs.core.async.t_cljs$core$async19568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19568";

cljs.core.async.t_cljs$core$async19568.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19568");
});

cljs.core.async.__GT_t_cljs$core$async19568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19568(map_GT___$1,f__$1,ch__$1,meta19569){
return (new cljs.core.async.t_cljs$core$async19568(map_GT___$1,f__$1,ch__$1,meta19569));
});

}

return (new cljs.core.async.t_cljs$core$async19568(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19574 = (function (filter_GT_,p,ch,meta19575){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19575 = meta19575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19576,meta19575__$1){
var self__ = this;
var _19576__$1 = this;
return (new cljs.core.async.t_cljs$core$async19574(self__.filter_GT_,self__.p,self__.ch,meta19575__$1));
});

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19576){
var self__ = this;
var _19576__$1 = this;
return self__.meta19575;
});

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19575","meta19575",1417900025,null)], null);
});

cljs.core.async.t_cljs$core$async19574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19574";

cljs.core.async.t_cljs$core$async19574.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19574");
});

cljs.core.async.__GT_t_cljs$core$async19574 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19574(filter_GT___$1,p__$1,ch__$1,meta19575){
return (new cljs.core.async.t_cljs$core$async19574(filter_GT___$1,p__$1,ch__$1,meta19575));
});

}

return (new cljs.core.async.t_cljs$core$async19574(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19577 = [];
var len__6152__auto___19621 = arguments.length;
var i__6153__auto___19622 = (0);
while(true){
if((i__6153__auto___19622 < len__6152__auto___19621)){
args19577.push((arguments[i__6153__auto___19622]));

var G__19623 = (i__6153__auto___19622 + (1));
i__6153__auto___19622 = G__19623;
continue;
} else {
}
break;
}

var G__19579 = args19577.length;
switch (G__19579) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19577.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19625,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19625,out){
return (function (state_19600){
var state_val_19601 = (state_19600[(1)]);
if((state_val_19601 === (7))){
var inst_19596 = (state_19600[(2)]);
var state_19600__$1 = state_19600;
var statearr_19602_19626 = state_19600__$1;
(statearr_19602_19626[(2)] = inst_19596);

(statearr_19602_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (1))){
var state_19600__$1 = state_19600;
var statearr_19603_19627 = state_19600__$1;
(statearr_19603_19627[(2)] = null);

(statearr_19603_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (4))){
var inst_19582 = (state_19600[(7)]);
var inst_19582__$1 = (state_19600[(2)]);
var inst_19583 = (inst_19582__$1 == null);
var state_19600__$1 = (function (){var statearr_19604 = state_19600;
(statearr_19604[(7)] = inst_19582__$1);

return statearr_19604;
})();
if(cljs.core.truth_(inst_19583)){
var statearr_19605_19628 = state_19600__$1;
(statearr_19605_19628[(1)] = (5));

} else {
var statearr_19606_19629 = state_19600__$1;
(statearr_19606_19629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (6))){
var inst_19582 = (state_19600[(7)]);
var inst_19587 = p.call(null,inst_19582);
var state_19600__$1 = state_19600;
if(cljs.core.truth_(inst_19587)){
var statearr_19607_19630 = state_19600__$1;
(statearr_19607_19630[(1)] = (8));

} else {
var statearr_19608_19631 = state_19600__$1;
(statearr_19608_19631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (3))){
var inst_19598 = (state_19600[(2)]);
var state_19600__$1 = state_19600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19600__$1,inst_19598);
} else {
if((state_val_19601 === (2))){
var state_19600__$1 = state_19600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19600__$1,(4),ch);
} else {
if((state_val_19601 === (11))){
var inst_19590 = (state_19600[(2)]);
var state_19600__$1 = state_19600;
var statearr_19609_19632 = state_19600__$1;
(statearr_19609_19632[(2)] = inst_19590);

(statearr_19609_19632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (9))){
var state_19600__$1 = state_19600;
var statearr_19610_19633 = state_19600__$1;
(statearr_19610_19633[(2)] = null);

(statearr_19610_19633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (5))){
var inst_19585 = cljs.core.async.close_BANG_.call(null,out);
var state_19600__$1 = state_19600;
var statearr_19611_19634 = state_19600__$1;
(statearr_19611_19634[(2)] = inst_19585);

(statearr_19611_19634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (10))){
var inst_19593 = (state_19600[(2)]);
var state_19600__$1 = (function (){var statearr_19612 = state_19600;
(statearr_19612[(8)] = inst_19593);

return statearr_19612;
})();
var statearr_19613_19635 = state_19600__$1;
(statearr_19613_19635[(2)] = null);

(statearr_19613_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19601 === (8))){
var inst_19582 = (state_19600[(7)]);
var state_19600__$1 = state_19600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19600__$1,(11),out,inst_19582);
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
});})(c__10260__auto___19625,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19625,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19617 = [null,null,null,null,null,null,null,null,null];
(statearr_19617[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19617[(1)] = (1));

return statearr_19617;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19600){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19618){if((e19618 instanceof Object)){
var ex__10199__auto__ = e19618;
var statearr_19619_19636 = state_19600;
(statearr_19619_19636[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19637 = state_19600;
state_19600 = G__19637;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19625,out))
})();
var state__10262__auto__ = (function (){var statearr_19620 = f__10261__auto__.call(null);
(statearr_19620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19625);

return statearr_19620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19625,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19638 = [];
var len__6152__auto___19641 = arguments.length;
var i__6153__auto___19642 = (0);
while(true){
if((i__6153__auto___19642 < len__6152__auto___19641)){
args19638.push((arguments[i__6153__auto___19642]));

var G__19643 = (i__6153__auto___19642 + (1));
i__6153__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var G__19640 = args19638.length;
switch (G__19640) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19638.length)].join('')));

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
var c__10260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto__){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto__){
return (function (state_19810){
var state_val_19811 = (state_19810[(1)]);
if((state_val_19811 === (7))){
var inst_19806 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19812_19853 = state_19810__$1;
(statearr_19812_19853[(2)] = inst_19806);

(statearr_19812_19853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (20))){
var inst_19776 = (state_19810[(7)]);
var inst_19787 = (state_19810[(2)]);
var inst_19788 = cljs.core.next.call(null,inst_19776);
var inst_19762 = inst_19788;
var inst_19763 = null;
var inst_19764 = (0);
var inst_19765 = (0);
var state_19810__$1 = (function (){var statearr_19813 = state_19810;
(statearr_19813[(8)] = inst_19764);

(statearr_19813[(9)] = inst_19787);

(statearr_19813[(10)] = inst_19765);

(statearr_19813[(11)] = inst_19762);

(statearr_19813[(12)] = inst_19763);

return statearr_19813;
})();
var statearr_19814_19854 = state_19810__$1;
(statearr_19814_19854[(2)] = null);

(statearr_19814_19854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (1))){
var state_19810__$1 = state_19810;
var statearr_19815_19855 = state_19810__$1;
(statearr_19815_19855[(2)] = null);

(statearr_19815_19855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (4))){
var inst_19751 = (state_19810[(13)]);
var inst_19751__$1 = (state_19810[(2)]);
var inst_19752 = (inst_19751__$1 == null);
var state_19810__$1 = (function (){var statearr_19816 = state_19810;
(statearr_19816[(13)] = inst_19751__$1);

return statearr_19816;
})();
if(cljs.core.truth_(inst_19752)){
var statearr_19817_19856 = state_19810__$1;
(statearr_19817_19856[(1)] = (5));

} else {
var statearr_19818_19857 = state_19810__$1;
(statearr_19818_19857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (15))){
var state_19810__$1 = state_19810;
var statearr_19822_19858 = state_19810__$1;
(statearr_19822_19858[(2)] = null);

(statearr_19822_19858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (21))){
var state_19810__$1 = state_19810;
var statearr_19823_19859 = state_19810__$1;
(statearr_19823_19859[(2)] = null);

(statearr_19823_19859[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (13))){
var inst_19764 = (state_19810[(8)]);
var inst_19765 = (state_19810[(10)]);
var inst_19762 = (state_19810[(11)]);
var inst_19763 = (state_19810[(12)]);
var inst_19772 = (state_19810[(2)]);
var inst_19773 = (inst_19765 + (1));
var tmp19819 = inst_19764;
var tmp19820 = inst_19762;
var tmp19821 = inst_19763;
var inst_19762__$1 = tmp19820;
var inst_19763__$1 = tmp19821;
var inst_19764__$1 = tmp19819;
var inst_19765__$1 = inst_19773;
var state_19810__$1 = (function (){var statearr_19824 = state_19810;
(statearr_19824[(8)] = inst_19764__$1);

(statearr_19824[(10)] = inst_19765__$1);

(statearr_19824[(11)] = inst_19762__$1);

(statearr_19824[(14)] = inst_19772);

(statearr_19824[(12)] = inst_19763__$1);

return statearr_19824;
})();
var statearr_19825_19860 = state_19810__$1;
(statearr_19825_19860[(2)] = null);

(statearr_19825_19860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (22))){
var state_19810__$1 = state_19810;
var statearr_19826_19861 = state_19810__$1;
(statearr_19826_19861[(2)] = null);

(statearr_19826_19861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (6))){
var inst_19751 = (state_19810[(13)]);
var inst_19760 = f.call(null,inst_19751);
var inst_19761 = cljs.core.seq.call(null,inst_19760);
var inst_19762 = inst_19761;
var inst_19763 = null;
var inst_19764 = (0);
var inst_19765 = (0);
var state_19810__$1 = (function (){var statearr_19827 = state_19810;
(statearr_19827[(8)] = inst_19764);

(statearr_19827[(10)] = inst_19765);

(statearr_19827[(11)] = inst_19762);

(statearr_19827[(12)] = inst_19763);

return statearr_19827;
})();
var statearr_19828_19862 = state_19810__$1;
(statearr_19828_19862[(2)] = null);

(statearr_19828_19862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (17))){
var inst_19776 = (state_19810[(7)]);
var inst_19780 = cljs.core.chunk_first.call(null,inst_19776);
var inst_19781 = cljs.core.chunk_rest.call(null,inst_19776);
var inst_19782 = cljs.core.count.call(null,inst_19780);
var inst_19762 = inst_19781;
var inst_19763 = inst_19780;
var inst_19764 = inst_19782;
var inst_19765 = (0);
var state_19810__$1 = (function (){var statearr_19829 = state_19810;
(statearr_19829[(8)] = inst_19764);

(statearr_19829[(10)] = inst_19765);

(statearr_19829[(11)] = inst_19762);

(statearr_19829[(12)] = inst_19763);

return statearr_19829;
})();
var statearr_19830_19863 = state_19810__$1;
(statearr_19830_19863[(2)] = null);

(statearr_19830_19863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (3))){
var inst_19808 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19810__$1,inst_19808);
} else {
if((state_val_19811 === (12))){
var inst_19796 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19831_19864 = state_19810__$1;
(statearr_19831_19864[(2)] = inst_19796);

(statearr_19831_19864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (2))){
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19810__$1,(4),in$);
} else {
if((state_val_19811 === (23))){
var inst_19804 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19832_19865 = state_19810__$1;
(statearr_19832_19865[(2)] = inst_19804);

(statearr_19832_19865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (19))){
var inst_19791 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19833_19866 = state_19810__$1;
(statearr_19833_19866[(2)] = inst_19791);

(statearr_19833_19866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (11))){
var inst_19776 = (state_19810[(7)]);
var inst_19762 = (state_19810[(11)]);
var inst_19776__$1 = cljs.core.seq.call(null,inst_19762);
var state_19810__$1 = (function (){var statearr_19834 = state_19810;
(statearr_19834[(7)] = inst_19776__$1);

return statearr_19834;
})();
if(inst_19776__$1){
var statearr_19835_19867 = state_19810__$1;
(statearr_19835_19867[(1)] = (14));

} else {
var statearr_19836_19868 = state_19810__$1;
(statearr_19836_19868[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (9))){
var inst_19798 = (state_19810[(2)]);
var inst_19799 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19810__$1 = (function (){var statearr_19837 = state_19810;
(statearr_19837[(15)] = inst_19798);

return statearr_19837;
})();
if(cljs.core.truth_(inst_19799)){
var statearr_19838_19869 = state_19810__$1;
(statearr_19838_19869[(1)] = (21));

} else {
var statearr_19839_19870 = state_19810__$1;
(statearr_19839_19870[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (5))){
var inst_19754 = cljs.core.async.close_BANG_.call(null,out);
var state_19810__$1 = state_19810;
var statearr_19840_19871 = state_19810__$1;
(statearr_19840_19871[(2)] = inst_19754);

(statearr_19840_19871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (14))){
var inst_19776 = (state_19810[(7)]);
var inst_19778 = cljs.core.chunked_seq_QMARK_.call(null,inst_19776);
var state_19810__$1 = state_19810;
if(inst_19778){
var statearr_19841_19872 = state_19810__$1;
(statearr_19841_19872[(1)] = (17));

} else {
var statearr_19842_19873 = state_19810__$1;
(statearr_19842_19873[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (16))){
var inst_19794 = (state_19810[(2)]);
var state_19810__$1 = state_19810;
var statearr_19843_19874 = state_19810__$1;
(statearr_19843_19874[(2)] = inst_19794);

(statearr_19843_19874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19811 === (10))){
var inst_19765 = (state_19810[(10)]);
var inst_19763 = (state_19810[(12)]);
var inst_19770 = cljs.core._nth.call(null,inst_19763,inst_19765);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(13),out,inst_19770);
} else {
if((state_val_19811 === (18))){
var inst_19776 = (state_19810[(7)]);
var inst_19785 = cljs.core.first.call(null,inst_19776);
var state_19810__$1 = state_19810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19810__$1,(20),out,inst_19785);
} else {
if((state_val_19811 === (8))){
var inst_19764 = (state_19810[(8)]);
var inst_19765 = (state_19810[(10)]);
var inst_19767 = (inst_19765 < inst_19764);
var inst_19768 = inst_19767;
var state_19810__$1 = state_19810;
if(cljs.core.truth_(inst_19768)){
var statearr_19844_19875 = state_19810__$1;
(statearr_19844_19875[(1)] = (10));

} else {
var statearr_19845_19876 = state_19810__$1;
(statearr_19845_19876[(1)] = (11));

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
});})(c__10260__auto__))
;
return ((function (switch__10195__auto__,c__10260__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_19849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19849[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__);

(statearr_19849[(1)] = (1));

return statearr_19849;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1 = (function (state_19810){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19850){if((e19850 instanceof Object)){
var ex__10199__auto__ = e19850;
var statearr_19851_19877 = state_19810;
(statearr_19851_19877[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19878 = state_19810;
state_19810 = G__19878;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__ = function(state_19810){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1.call(this,state_19810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_19852 = f__10261__auto__.call(null);
(statearr_19852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto__))
);

return c__10260__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19879 = [];
var len__6152__auto___19882 = arguments.length;
var i__6153__auto___19883 = (0);
while(true){
if((i__6153__auto___19883 < len__6152__auto___19882)){
args19879.push((arguments[i__6153__auto___19883]));

var G__19884 = (i__6153__auto___19883 + (1));
i__6153__auto___19883 = G__19884;
continue;
} else {
}
break;
}

var G__19881 = args19879.length;
switch (G__19881) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19879.length)].join('')));

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
var args19886 = [];
var len__6152__auto___19889 = arguments.length;
var i__6153__auto___19890 = (0);
while(true){
if((i__6153__auto___19890 < len__6152__auto___19889)){
args19886.push((arguments[i__6153__auto___19890]));

var G__19891 = (i__6153__auto___19890 + (1));
i__6153__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var G__19888 = args19886.length;
switch (G__19888) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19886.length)].join('')));

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
var args19893 = [];
var len__6152__auto___19944 = arguments.length;
var i__6153__auto___19945 = (0);
while(true){
if((i__6153__auto___19945 < len__6152__auto___19944)){
args19893.push((arguments[i__6153__auto___19945]));

var G__19946 = (i__6153__auto___19945 + (1));
i__6153__auto___19945 = G__19946;
continue;
} else {
}
break;
}

var G__19895 = args19893.length;
switch (G__19895) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19893.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19948,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19948,out){
return (function (state_19919){
var state_val_19920 = (state_19919[(1)]);
if((state_val_19920 === (7))){
var inst_19914 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
var statearr_19921_19949 = state_19919__$1;
(statearr_19921_19949[(2)] = inst_19914);

(statearr_19921_19949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (1))){
var inst_19896 = null;
var state_19919__$1 = (function (){var statearr_19922 = state_19919;
(statearr_19922[(7)] = inst_19896);

return statearr_19922;
})();
var statearr_19923_19950 = state_19919__$1;
(statearr_19923_19950[(2)] = null);

(statearr_19923_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (4))){
var inst_19899 = (state_19919[(8)]);
var inst_19899__$1 = (state_19919[(2)]);
var inst_19900 = (inst_19899__$1 == null);
var inst_19901 = cljs.core.not.call(null,inst_19900);
var state_19919__$1 = (function (){var statearr_19924 = state_19919;
(statearr_19924[(8)] = inst_19899__$1);

return statearr_19924;
})();
if(inst_19901){
var statearr_19925_19951 = state_19919__$1;
(statearr_19925_19951[(1)] = (5));

} else {
var statearr_19926_19952 = state_19919__$1;
(statearr_19926_19952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (6))){
var state_19919__$1 = state_19919;
var statearr_19927_19953 = state_19919__$1;
(statearr_19927_19953[(2)] = null);

(statearr_19927_19953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (3))){
var inst_19916 = (state_19919[(2)]);
var inst_19917 = cljs.core.async.close_BANG_.call(null,out);
var state_19919__$1 = (function (){var statearr_19928 = state_19919;
(statearr_19928[(9)] = inst_19916);

return statearr_19928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19919__$1,inst_19917);
} else {
if((state_val_19920 === (2))){
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19919__$1,(4),ch);
} else {
if((state_val_19920 === (11))){
var inst_19899 = (state_19919[(8)]);
var inst_19908 = (state_19919[(2)]);
var inst_19896 = inst_19899;
var state_19919__$1 = (function (){var statearr_19929 = state_19919;
(statearr_19929[(7)] = inst_19896);

(statearr_19929[(10)] = inst_19908);

return statearr_19929;
})();
var statearr_19930_19954 = state_19919__$1;
(statearr_19930_19954[(2)] = null);

(statearr_19930_19954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (9))){
var inst_19899 = (state_19919[(8)]);
var state_19919__$1 = state_19919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19919__$1,(11),out,inst_19899);
} else {
if((state_val_19920 === (5))){
var inst_19896 = (state_19919[(7)]);
var inst_19899 = (state_19919[(8)]);
var inst_19903 = cljs.core._EQ_.call(null,inst_19899,inst_19896);
var state_19919__$1 = state_19919;
if(inst_19903){
var statearr_19932_19955 = state_19919__$1;
(statearr_19932_19955[(1)] = (8));

} else {
var statearr_19933_19956 = state_19919__$1;
(statearr_19933_19956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (10))){
var inst_19911 = (state_19919[(2)]);
var state_19919__$1 = state_19919;
var statearr_19934_19957 = state_19919__$1;
(statearr_19934_19957[(2)] = inst_19911);

(statearr_19934_19957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19920 === (8))){
var inst_19896 = (state_19919[(7)]);
var tmp19931 = inst_19896;
var inst_19896__$1 = tmp19931;
var state_19919__$1 = (function (){var statearr_19935 = state_19919;
(statearr_19935[(7)] = inst_19896__$1);

return statearr_19935;
})();
var statearr_19936_19958 = state_19919__$1;
(statearr_19936_19958[(2)] = null);

(statearr_19936_19958[(1)] = (2));


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
});})(c__10260__auto___19948,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19948,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19940[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19940[(1)] = (1));

return statearr_19940;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19919){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19941){if((e19941 instanceof Object)){
var ex__10199__auto__ = e19941;
var statearr_19942_19959 = state_19919;
(statearr_19942_19959[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19960 = state_19919;
state_19919 = G__19960;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19948,out))
})();
var state__10262__auto__ = (function (){var statearr_19943 = f__10261__auto__.call(null);
(statearr_19943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19948);

return statearr_19943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19948,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19961 = [];
var len__6152__auto___20031 = arguments.length;
var i__6153__auto___20032 = (0);
while(true){
if((i__6153__auto___20032 < len__6152__auto___20031)){
args19961.push((arguments[i__6153__auto___20032]));

var G__20033 = (i__6153__auto___20032 + (1));
i__6153__auto___20032 = G__20033;
continue;
} else {
}
break;
}

var G__19963 = args19961.length;
switch (G__19963) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19961.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___20035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___20035,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___20035,out){
return (function (state_20001){
var state_val_20002 = (state_20001[(1)]);
if((state_val_20002 === (7))){
var inst_19997 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20003_20036 = state_20001__$1;
(statearr_20003_20036[(2)] = inst_19997);

(statearr_20003_20036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (1))){
var inst_19964 = (new Array(n));
var inst_19965 = inst_19964;
var inst_19966 = (0);
var state_20001__$1 = (function (){var statearr_20004 = state_20001;
(statearr_20004[(7)] = inst_19966);

(statearr_20004[(8)] = inst_19965);

return statearr_20004;
})();
var statearr_20005_20037 = state_20001__$1;
(statearr_20005_20037[(2)] = null);

(statearr_20005_20037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (4))){
var inst_19969 = (state_20001[(9)]);
var inst_19969__$1 = (state_20001[(2)]);
var inst_19970 = (inst_19969__$1 == null);
var inst_19971 = cljs.core.not.call(null,inst_19970);
var state_20001__$1 = (function (){var statearr_20006 = state_20001;
(statearr_20006[(9)] = inst_19969__$1);

return statearr_20006;
})();
if(inst_19971){
var statearr_20007_20038 = state_20001__$1;
(statearr_20007_20038[(1)] = (5));

} else {
var statearr_20008_20039 = state_20001__$1;
(statearr_20008_20039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (15))){
var inst_19991 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20009_20040 = state_20001__$1;
(statearr_20009_20040[(2)] = inst_19991);

(statearr_20009_20040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (13))){
var state_20001__$1 = state_20001;
var statearr_20010_20041 = state_20001__$1;
(statearr_20010_20041[(2)] = null);

(statearr_20010_20041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (6))){
var inst_19966 = (state_20001[(7)]);
var inst_19987 = (inst_19966 > (0));
var state_20001__$1 = state_20001;
if(cljs.core.truth_(inst_19987)){
var statearr_20011_20042 = state_20001__$1;
(statearr_20011_20042[(1)] = (12));

} else {
var statearr_20012_20043 = state_20001__$1;
(statearr_20012_20043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (3))){
var inst_19999 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20001__$1,inst_19999);
} else {
if((state_val_20002 === (12))){
var inst_19965 = (state_20001[(8)]);
var inst_19989 = cljs.core.vec.call(null,inst_19965);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20001__$1,(15),out,inst_19989);
} else {
if((state_val_20002 === (2))){
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20001__$1,(4),ch);
} else {
if((state_val_20002 === (11))){
var inst_19981 = (state_20001[(2)]);
var inst_19982 = (new Array(n));
var inst_19965 = inst_19982;
var inst_19966 = (0);
var state_20001__$1 = (function (){var statearr_20013 = state_20001;
(statearr_20013[(7)] = inst_19966);

(statearr_20013[(8)] = inst_19965);

(statearr_20013[(10)] = inst_19981);

return statearr_20013;
})();
var statearr_20014_20044 = state_20001__$1;
(statearr_20014_20044[(2)] = null);

(statearr_20014_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (9))){
var inst_19965 = (state_20001[(8)]);
var inst_19979 = cljs.core.vec.call(null,inst_19965);
var state_20001__$1 = state_20001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20001__$1,(11),out,inst_19979);
} else {
if((state_val_20002 === (5))){
var inst_19966 = (state_20001[(7)]);
var inst_19965 = (state_20001[(8)]);
var inst_19969 = (state_20001[(9)]);
var inst_19974 = (state_20001[(11)]);
var inst_19973 = (inst_19965[inst_19966] = inst_19969);
var inst_19974__$1 = (inst_19966 + (1));
var inst_19975 = (inst_19974__$1 < n);
var state_20001__$1 = (function (){var statearr_20015 = state_20001;
(statearr_20015[(12)] = inst_19973);

(statearr_20015[(11)] = inst_19974__$1);

return statearr_20015;
})();
if(cljs.core.truth_(inst_19975)){
var statearr_20016_20045 = state_20001__$1;
(statearr_20016_20045[(1)] = (8));

} else {
var statearr_20017_20046 = state_20001__$1;
(statearr_20017_20046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (14))){
var inst_19994 = (state_20001[(2)]);
var inst_19995 = cljs.core.async.close_BANG_.call(null,out);
var state_20001__$1 = (function (){var statearr_20019 = state_20001;
(statearr_20019[(13)] = inst_19994);

return statearr_20019;
})();
var statearr_20020_20047 = state_20001__$1;
(statearr_20020_20047[(2)] = inst_19995);

(statearr_20020_20047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (10))){
var inst_19985 = (state_20001[(2)]);
var state_20001__$1 = state_20001;
var statearr_20021_20048 = state_20001__$1;
(statearr_20021_20048[(2)] = inst_19985);

(statearr_20021_20048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20002 === (8))){
var inst_19965 = (state_20001[(8)]);
var inst_19974 = (state_20001[(11)]);
var tmp20018 = inst_19965;
var inst_19965__$1 = tmp20018;
var inst_19966 = inst_19974;
var state_20001__$1 = (function (){var statearr_20022 = state_20001;
(statearr_20022[(7)] = inst_19966);

(statearr_20022[(8)] = inst_19965__$1);

return statearr_20022;
})();
var statearr_20023_20049 = state_20001__$1;
(statearr_20023_20049[(2)] = null);

(statearr_20023_20049[(1)] = (2));


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
});})(c__10260__auto___20035,out))
;
return ((function (switch__10195__auto__,c__10260__auto___20035,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_20027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20027[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_20027[(1)] = (1));

return statearr_20027;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_20001){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_20001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e20028){if((e20028 instanceof Object)){
var ex__10199__auto__ = e20028;
var statearr_20029_20050 = state_20001;
(statearr_20029_20050[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_20001;
state_20001 = G__20051;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_20001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_20001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___20035,out))
})();
var state__10262__auto__ = (function (){var statearr_20030 = f__10261__auto__.call(null);
(statearr_20030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___20035);

return statearr_20030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___20035,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20052 = [];
var len__6152__auto___20126 = arguments.length;
var i__6153__auto___20127 = (0);
while(true){
if((i__6153__auto___20127 < len__6152__auto___20126)){
args20052.push((arguments[i__6153__auto___20127]));

var G__20128 = (i__6153__auto___20127 + (1));
i__6153__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var G__20054 = args20052.length;
switch (G__20054) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20052.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___20130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___20130,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___20130,out){
return (function (state_20096){
var state_val_20097 = (state_20096[(1)]);
if((state_val_20097 === (7))){
var inst_20092 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
var statearr_20098_20131 = state_20096__$1;
(statearr_20098_20131[(2)] = inst_20092);

(statearr_20098_20131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (1))){
var inst_20055 = [];
var inst_20056 = inst_20055;
var inst_20057 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20096__$1 = (function (){var statearr_20099 = state_20096;
(statearr_20099[(7)] = inst_20057);

(statearr_20099[(8)] = inst_20056);

return statearr_20099;
})();
var statearr_20100_20132 = state_20096__$1;
(statearr_20100_20132[(2)] = null);

(statearr_20100_20132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (4))){
var inst_20060 = (state_20096[(9)]);
var inst_20060__$1 = (state_20096[(2)]);
var inst_20061 = (inst_20060__$1 == null);
var inst_20062 = cljs.core.not.call(null,inst_20061);
var state_20096__$1 = (function (){var statearr_20101 = state_20096;
(statearr_20101[(9)] = inst_20060__$1);

return statearr_20101;
})();
if(inst_20062){
var statearr_20102_20133 = state_20096__$1;
(statearr_20102_20133[(1)] = (5));

} else {
var statearr_20103_20134 = state_20096__$1;
(statearr_20103_20134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (15))){
var inst_20086 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
var statearr_20104_20135 = state_20096__$1;
(statearr_20104_20135[(2)] = inst_20086);

(statearr_20104_20135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (13))){
var state_20096__$1 = state_20096;
var statearr_20105_20136 = state_20096__$1;
(statearr_20105_20136[(2)] = null);

(statearr_20105_20136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (6))){
var inst_20056 = (state_20096[(8)]);
var inst_20081 = inst_20056.length;
var inst_20082 = (inst_20081 > (0));
var state_20096__$1 = state_20096;
if(cljs.core.truth_(inst_20082)){
var statearr_20106_20137 = state_20096__$1;
(statearr_20106_20137[(1)] = (12));

} else {
var statearr_20107_20138 = state_20096__$1;
(statearr_20107_20138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (3))){
var inst_20094 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20096__$1,inst_20094);
} else {
if((state_val_20097 === (12))){
var inst_20056 = (state_20096[(8)]);
var inst_20084 = cljs.core.vec.call(null,inst_20056);
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20096__$1,(15),out,inst_20084);
} else {
if((state_val_20097 === (2))){
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20096__$1,(4),ch);
} else {
if((state_val_20097 === (11))){
var inst_20060 = (state_20096[(9)]);
var inst_20064 = (state_20096[(10)]);
var inst_20074 = (state_20096[(2)]);
var inst_20075 = [];
var inst_20076 = inst_20075.push(inst_20060);
var inst_20056 = inst_20075;
var inst_20057 = inst_20064;
var state_20096__$1 = (function (){var statearr_20108 = state_20096;
(statearr_20108[(11)] = inst_20076);

(statearr_20108[(7)] = inst_20057);

(statearr_20108[(12)] = inst_20074);

(statearr_20108[(8)] = inst_20056);

return statearr_20108;
})();
var statearr_20109_20139 = state_20096__$1;
(statearr_20109_20139[(2)] = null);

(statearr_20109_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (9))){
var inst_20056 = (state_20096[(8)]);
var inst_20072 = cljs.core.vec.call(null,inst_20056);
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20096__$1,(11),out,inst_20072);
} else {
if((state_val_20097 === (5))){
var inst_20060 = (state_20096[(9)]);
var inst_20057 = (state_20096[(7)]);
var inst_20064 = (state_20096[(10)]);
var inst_20064__$1 = f.call(null,inst_20060);
var inst_20065 = cljs.core._EQ_.call(null,inst_20064__$1,inst_20057);
var inst_20066 = cljs.core.keyword_identical_QMARK_.call(null,inst_20057,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20067 = (inst_20065) || (inst_20066);
var state_20096__$1 = (function (){var statearr_20110 = state_20096;
(statearr_20110[(10)] = inst_20064__$1);

return statearr_20110;
})();
if(cljs.core.truth_(inst_20067)){
var statearr_20111_20140 = state_20096__$1;
(statearr_20111_20140[(1)] = (8));

} else {
var statearr_20112_20141 = state_20096__$1;
(statearr_20112_20141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (14))){
var inst_20089 = (state_20096[(2)]);
var inst_20090 = cljs.core.async.close_BANG_.call(null,out);
var state_20096__$1 = (function (){var statearr_20114 = state_20096;
(statearr_20114[(13)] = inst_20089);

return statearr_20114;
})();
var statearr_20115_20142 = state_20096__$1;
(statearr_20115_20142[(2)] = inst_20090);

(statearr_20115_20142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (10))){
var inst_20079 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
var statearr_20116_20143 = state_20096__$1;
(statearr_20116_20143[(2)] = inst_20079);

(statearr_20116_20143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (8))){
var inst_20060 = (state_20096[(9)]);
var inst_20056 = (state_20096[(8)]);
var inst_20064 = (state_20096[(10)]);
var inst_20069 = inst_20056.push(inst_20060);
var tmp20113 = inst_20056;
var inst_20056__$1 = tmp20113;
var inst_20057 = inst_20064;
var state_20096__$1 = (function (){var statearr_20117 = state_20096;
(statearr_20117[(7)] = inst_20057);

(statearr_20117[(8)] = inst_20056__$1);

(statearr_20117[(14)] = inst_20069);

return statearr_20117;
})();
var statearr_20118_20144 = state_20096__$1;
(statearr_20118_20144[(2)] = null);

(statearr_20118_20144[(1)] = (2));


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
});})(c__10260__auto___20130,out))
;
return ((function (switch__10195__auto__,c__10260__auto___20130,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_20122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20122[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_20122[(1)] = (1));

return statearr_20122;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_20096){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_20096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e20123){if((e20123 instanceof Object)){
var ex__10199__auto__ = e20123;
var statearr_20124_20145 = state_20096;
(statearr_20124_20145[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20146 = state_20096;
state_20096 = G__20146;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_20096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_20096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___20130,out))
})();
var state__10262__auto__ = (function (){var statearr_20125 = f__10261__auto__.call(null);
(statearr_20125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___20130);

return statearr_20125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___20130,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map