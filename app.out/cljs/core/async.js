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
if(typeof cljs.core.async.t_cljs$core$async17475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17475 = (function (fn_handler,f,meta17476){
this.fn_handler = fn_handler;
this.f = f;
this.meta17476 = meta17476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17477,meta17476__$1){
var self__ = this;
var _17477__$1 = this;
return (new cljs.core.async.t_cljs$core$async17475(self__.fn_handler,self__.f,meta17476__$1));
});

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17477){
var self__ = this;
var _17477__$1 = this;
return self__.meta17476;
});

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17476","meta17476",1563235257,null)], null);
});

cljs.core.async.t_cljs$core$async17475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17475";

cljs.core.async.t_cljs$core$async17475.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17475");
});

cljs.core.async.__GT_t_cljs$core$async17475 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17475(fn_handler__$1,f__$1,meta17476){
return (new cljs.core.async.t_cljs$core$async17475(fn_handler__$1,f__$1,meta17476));
});

}

return (new cljs.core.async.t_cljs$core$async17475(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17480.length)].join('')));

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
var args17487 = [];
var len__6152__auto___17490 = arguments.length;
var i__6153__auto___17491 = (0);
while(true){
if((i__6153__auto___17491 < len__6152__auto___17490)){
args17487.push((arguments[i__6153__auto___17491]));

var G__17492 = (i__6153__auto___17491 + (1));
i__6153__auto___17491 = G__17492;
continue;
} else {
}
break;
}

var G__17489 = args17487.length;
switch (G__17489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17487.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17494 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17494);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17494,ret){
return (function (){
return fn1.call(null,val_17494);
});})(val_17494,ret))
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
var args17495 = [];
var len__6152__auto___17498 = arguments.length;
var i__6153__auto___17499 = (0);
while(true){
if((i__6153__auto___17499 < len__6152__auto___17498)){
args17495.push((arguments[i__6153__auto___17499]));

var G__17500 = (i__6153__auto___17499 + (1));
i__6153__auto___17499 = G__17500;
continue;
} else {
}
break;
}

var G__17497 = args17495.length;
switch (G__17497) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17495.length)].join('')));

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
var n__5997__auto___17502 = n;
var x_17503 = (0);
while(true){
if((x_17503 < n__5997__auto___17502)){
(a[x_17503] = (0));

var G__17504 = (x_17503 + (1));
x_17503 = G__17504;
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

var G__17505 = (i + (1));
i = G__17505;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17509 = (function (alt_flag,flag,meta17510){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17510 = meta17510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17511,meta17510__$1){
var self__ = this;
var _17511__$1 = this;
return (new cljs.core.async.t_cljs$core$async17509(self__.alt_flag,self__.flag,meta17510__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17511){
var self__ = this;
var _17511__$1 = this;
return self__.meta17510;
});})(flag))
;

cljs.core.async.t_cljs$core$async17509.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17509.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17510","meta17510",21619082,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17509";

cljs.core.async.t_cljs$core$async17509.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17509");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17509 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17509(alt_flag__$1,flag__$1,meta17510){
return (new cljs.core.async.t_cljs$core$async17509(alt_flag__$1,flag__$1,meta17510));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17509(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17515 = (function (alt_handler,flag,cb,meta17516){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17516 = meta17516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17517,meta17516__$1){
var self__ = this;
var _17517__$1 = this;
return (new cljs.core.async.t_cljs$core$async17515(self__.alt_handler,self__.flag,self__.cb,meta17516__$1));
});

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17517){
var self__ = this;
var _17517__$1 = this;
return self__.meta17516;
});

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17516","meta17516",-396583397,null)], null);
});

cljs.core.async.t_cljs$core$async17515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17515";

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17515");
});

cljs.core.async.__GT_t_cljs$core$async17515 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17515(alt_handler__$1,flag__$1,cb__$1,meta17516){
return (new cljs.core.async.t_cljs$core$async17515(alt_handler__$1,flag__$1,cb__$1,meta17516));
});

}

return (new cljs.core.async.t_cljs$core$async17515(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17518_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17518_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17519_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17519_SHARP_,port], null));
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
var G__17520 = (i + (1));
i = G__17520;
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
var len__6152__auto___17526 = arguments.length;
var i__6153__auto___17527 = (0);
while(true){
if((i__6153__auto___17527 < len__6152__auto___17526)){
args__6159__auto__.push((arguments[i__6153__auto___17527]));

var G__17528 = (i__6153__auto___17527 + (1));
i__6153__auto___17527 = G__17528;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17523){
var map__17524 = p__17523;
var map__17524__$1 = ((((!((map__17524 == null)))?((((map__17524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17524):map__17524);
var opts = map__17524__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17521){
var G__17522 = cljs.core.first.call(null,seq17521);
var seq17521__$1 = cljs.core.next.call(null,seq17521);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17522,seq17521__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17529 = [];
var len__6152__auto___17579 = arguments.length;
var i__6153__auto___17580 = (0);
while(true){
if((i__6153__auto___17580 < len__6152__auto___17579)){
args17529.push((arguments[i__6153__auto___17580]));

var G__17581 = (i__6153__auto___17580 + (1));
i__6153__auto___17580 = G__17581;
continue;
} else {
}
break;
}

var G__17531 = args17529.length;
switch (G__17531) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17529.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10327__auto___17583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___17583){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___17583){
return (function (state_17555){
var state_val_17556 = (state_17555[(1)]);
if((state_val_17556 === (7))){
var inst_17551 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17557_17584 = state_17555__$1;
(statearr_17557_17584[(2)] = inst_17551);

(statearr_17557_17584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (1))){
var state_17555__$1 = state_17555;
var statearr_17558_17585 = state_17555__$1;
(statearr_17558_17585[(2)] = null);

(statearr_17558_17585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (4))){
var inst_17534 = (state_17555[(7)]);
var inst_17534__$1 = (state_17555[(2)]);
var inst_17535 = (inst_17534__$1 == null);
var state_17555__$1 = (function (){var statearr_17559 = state_17555;
(statearr_17559[(7)] = inst_17534__$1);

return statearr_17559;
})();
if(cljs.core.truth_(inst_17535)){
var statearr_17560_17586 = state_17555__$1;
(statearr_17560_17586[(1)] = (5));

} else {
var statearr_17561_17587 = state_17555__$1;
(statearr_17561_17587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (13))){
var state_17555__$1 = state_17555;
var statearr_17562_17588 = state_17555__$1;
(statearr_17562_17588[(2)] = null);

(statearr_17562_17588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (6))){
var inst_17534 = (state_17555[(7)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17555__$1,(11),to,inst_17534);
} else {
if((state_val_17556 === (3))){
var inst_17553 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17555__$1,inst_17553);
} else {
if((state_val_17556 === (12))){
var state_17555__$1 = state_17555;
var statearr_17563_17589 = state_17555__$1;
(statearr_17563_17589[(2)] = null);

(statearr_17563_17589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (2))){
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17555__$1,(4),from);
} else {
if((state_val_17556 === (11))){
var inst_17544 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17544)){
var statearr_17564_17590 = state_17555__$1;
(statearr_17564_17590[(1)] = (12));

} else {
var statearr_17565_17591 = state_17555__$1;
(statearr_17565_17591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (9))){
var state_17555__$1 = state_17555;
var statearr_17566_17592 = state_17555__$1;
(statearr_17566_17592[(2)] = null);

(statearr_17566_17592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (5))){
var state_17555__$1 = state_17555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17567_17593 = state_17555__$1;
(statearr_17567_17593[(1)] = (8));

} else {
var statearr_17568_17594 = state_17555__$1;
(statearr_17568_17594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (14))){
var inst_17549 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17569_17595 = state_17555__$1;
(statearr_17569_17595[(2)] = inst_17549);

(statearr_17569_17595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (10))){
var inst_17541 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17570_17596 = state_17555__$1;
(statearr_17570_17596[(2)] = inst_17541);

(statearr_17570_17596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (8))){
var inst_17538 = cljs.core.async.close_BANG_.call(null,to);
var state_17555__$1 = state_17555;
var statearr_17571_17597 = state_17555__$1;
(statearr_17571_17597[(2)] = inst_17538);

(statearr_17571_17597[(1)] = (10));


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
});})(c__10327__auto___17583))
;
return ((function (switch__10262__auto__,c__10327__auto___17583){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_17575 = [null,null,null,null,null,null,null,null];
(statearr_17575[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_17575[(1)] = (1));

return statearr_17575;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_17555){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17576){if((e17576 instanceof Object)){
var ex__10266__auto__ = e17576;
var statearr_17577_17598 = state_17555;
(statearr_17577_17598[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17599 = state_17555;
state_17555 = G__17599;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___17583))
})();
var state__10329__auto__ = (function (){var statearr_17578 = f__10328__auto__.call(null);
(statearr_17578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___17583);

return statearr_17578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___17583))
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
return (function (p__17783){
var vec__17784 = p__17783;
var v = cljs.core.nth.call(null,vec__17784,(0),null);
var p = cljs.core.nth.call(null,vec__17784,(1),null);
var job = vec__17784;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10327__auto___17966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results){
return (function (state_17789){
var state_val_17790 = (state_17789[(1)]);
if((state_val_17790 === (1))){
var state_17789__$1 = state_17789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17789__$1,(2),res,v);
} else {
if((state_val_17790 === (2))){
var inst_17786 = (state_17789[(2)]);
var inst_17787 = cljs.core.async.close_BANG_.call(null,res);
var state_17789__$1 = (function (){var statearr_17791 = state_17789;
(statearr_17791[(7)] = inst_17786);

return statearr_17791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17789__$1,inst_17787);
} else {
return null;
}
}
});})(c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results))
;
return ((function (switch__10262__auto__,c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_17795 = [null,null,null,null,null,null,null,null];
(statearr_17795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__);

(statearr_17795[(1)] = (1));

return statearr_17795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1 = (function (state_17789){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17796){if((e17796 instanceof Object)){
var ex__10266__auto__ = e17796;
var statearr_17797_17967 = state_17789;
(statearr_17797_17967[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17968 = state_17789;
state_17789 = G__17968;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = function(state_17789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1.call(this,state_17789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results))
})();
var state__10329__auto__ = (function (){var statearr_17798 = f__10328__auto__.call(null);
(statearr_17798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___17966);

return statearr_17798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___17966,res,vec__17784,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17799){
var vec__17800 = p__17799;
var v = cljs.core.nth.call(null,vec__17800,(0),null);
var p = cljs.core.nth.call(null,vec__17800,(1),null);
var job = vec__17800;
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
var n__5997__auto___17969 = n;
var __17970 = (0);
while(true){
if((__17970 < n__5997__auto___17969)){
var G__17801_17971 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17801_17971) {
case "compute":
var c__10327__auto___17973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17970,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (__17970,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function (state_17814){
var state_val_17815 = (state_17814[(1)]);
if((state_val_17815 === (1))){
var state_17814__$1 = state_17814;
var statearr_17816_17974 = state_17814__$1;
(statearr_17816_17974[(2)] = null);

(statearr_17816_17974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (2))){
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17814__$1,(4),jobs);
} else {
if((state_val_17815 === (3))){
var inst_17812 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17814__$1,inst_17812);
} else {
if((state_val_17815 === (4))){
var inst_17804 = (state_17814[(2)]);
var inst_17805 = process.call(null,inst_17804);
var state_17814__$1 = state_17814;
if(cljs.core.truth_(inst_17805)){
var statearr_17817_17975 = state_17814__$1;
(statearr_17817_17975[(1)] = (5));

} else {
var statearr_17818_17976 = state_17814__$1;
(statearr_17818_17976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (5))){
var state_17814__$1 = state_17814;
var statearr_17819_17977 = state_17814__$1;
(statearr_17819_17977[(2)] = null);

(statearr_17819_17977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (6))){
var state_17814__$1 = state_17814;
var statearr_17820_17978 = state_17814__$1;
(statearr_17820_17978[(2)] = null);

(statearr_17820_17978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17815 === (7))){
var inst_17810 = (state_17814[(2)]);
var state_17814__$1 = state_17814;
var statearr_17821_17979 = state_17814__$1;
(statearr_17821_17979[(2)] = inst_17810);

(statearr_17821_17979[(1)] = (3));


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
});})(__17970,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
;
return ((function (__17970,switch__10262__auto__,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_17825 = [null,null,null,null,null,null,null];
(statearr_17825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__);

(statearr_17825[(1)] = (1));

return statearr_17825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1 = (function (state_17814){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17826){if((e17826 instanceof Object)){
var ex__10266__auto__ = e17826;
var statearr_17827_17980 = state_17814;
(statearr_17827_17980[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17981 = state_17814;
state_17814 = G__17981;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = function(state_17814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1.call(this,state_17814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__;
})()
;})(__17970,switch__10262__auto__,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
})();
var state__10329__auto__ = (function (){var statearr_17828 = f__10328__auto__.call(null);
(statearr_17828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___17973);

return statearr_17828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(__17970,c__10327__auto___17973,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
);


break;
case "async":
var c__10327__auto___17982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17970,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (__17970,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function (state_17841){
var state_val_17842 = (state_17841[(1)]);
if((state_val_17842 === (1))){
var state_17841__$1 = state_17841;
var statearr_17843_17983 = state_17841__$1;
(statearr_17843_17983[(2)] = null);

(statearr_17843_17983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (2))){
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17841__$1,(4),jobs);
} else {
if((state_val_17842 === (3))){
var inst_17839 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17841__$1,inst_17839);
} else {
if((state_val_17842 === (4))){
var inst_17831 = (state_17841[(2)]);
var inst_17832 = async.call(null,inst_17831);
var state_17841__$1 = state_17841;
if(cljs.core.truth_(inst_17832)){
var statearr_17844_17984 = state_17841__$1;
(statearr_17844_17984[(1)] = (5));

} else {
var statearr_17845_17985 = state_17841__$1;
(statearr_17845_17985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (5))){
var state_17841__$1 = state_17841;
var statearr_17846_17986 = state_17841__$1;
(statearr_17846_17986[(2)] = null);

(statearr_17846_17986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (6))){
var state_17841__$1 = state_17841;
var statearr_17847_17987 = state_17841__$1;
(statearr_17847_17987[(2)] = null);

(statearr_17847_17987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17842 === (7))){
var inst_17837 = (state_17841[(2)]);
var state_17841__$1 = state_17841;
var statearr_17848_17988 = state_17841__$1;
(statearr_17848_17988[(2)] = inst_17837);

(statearr_17848_17988[(1)] = (3));


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
});})(__17970,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
;
return ((function (__17970,switch__10262__auto__,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_17852 = [null,null,null,null,null,null,null];
(statearr_17852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__);

(statearr_17852[(1)] = (1));

return statearr_17852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1 = (function (state_17841){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17853){if((e17853 instanceof Object)){
var ex__10266__auto__ = e17853;
var statearr_17854_17989 = state_17841;
(statearr_17854_17989[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17990 = state_17841;
state_17841 = G__17990;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = function(state_17841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1.call(this,state_17841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__;
})()
;})(__17970,switch__10262__auto__,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
})();
var state__10329__auto__ = (function (){var statearr_17855 = f__10328__auto__.call(null);
(statearr_17855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___17982);

return statearr_17855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(__17970,c__10327__auto___17982,G__17801_17971,n__5997__auto___17969,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17991 = (__17970 + (1));
__17970 = G__17991;
continue;
} else {
}
break;
}

var c__10327__auto___17992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___17992,jobs,results,process,async){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___17992,jobs,results,process,async){
return (function (state_17877){
var state_val_17878 = (state_17877[(1)]);
if((state_val_17878 === (1))){
var state_17877__$1 = state_17877;
var statearr_17879_17993 = state_17877__$1;
(statearr_17879_17993[(2)] = null);

(statearr_17879_17993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (2))){
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17877__$1,(4),from);
} else {
if((state_val_17878 === (3))){
var inst_17875 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17877__$1,inst_17875);
} else {
if((state_val_17878 === (4))){
var inst_17858 = (state_17877[(7)]);
var inst_17858__$1 = (state_17877[(2)]);
var inst_17859 = (inst_17858__$1 == null);
var state_17877__$1 = (function (){var statearr_17880 = state_17877;
(statearr_17880[(7)] = inst_17858__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17859)){
var statearr_17881_17994 = state_17877__$1;
(statearr_17881_17994[(1)] = (5));

} else {
var statearr_17882_17995 = state_17877__$1;
(statearr_17882_17995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (5))){
var inst_17861 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17877__$1 = state_17877;
var statearr_17883_17996 = state_17877__$1;
(statearr_17883_17996[(2)] = inst_17861);

(statearr_17883_17996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (6))){
var inst_17858 = (state_17877[(7)]);
var inst_17863 = (state_17877[(8)]);
var inst_17863__$1 = cljs.core.async.chan.call(null,(1));
var inst_17864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17865 = [inst_17858,inst_17863__$1];
var inst_17866 = (new cljs.core.PersistentVector(null,2,(5),inst_17864,inst_17865,null));
var state_17877__$1 = (function (){var statearr_17884 = state_17877;
(statearr_17884[(8)] = inst_17863__$1);

return statearr_17884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17877__$1,(8),jobs,inst_17866);
} else {
if((state_val_17878 === (7))){
var inst_17873 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17885_17997 = state_17877__$1;
(statearr_17885_17997[(2)] = inst_17873);

(statearr_17885_17997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (8))){
var inst_17863 = (state_17877[(8)]);
var inst_17868 = (state_17877[(2)]);
var state_17877__$1 = (function (){var statearr_17886 = state_17877;
(statearr_17886[(9)] = inst_17868);

return statearr_17886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17877__$1,(9),results,inst_17863);
} else {
if((state_val_17878 === (9))){
var inst_17870 = (state_17877[(2)]);
var state_17877__$1 = (function (){var statearr_17887 = state_17877;
(statearr_17887[(10)] = inst_17870);

return statearr_17887;
})();
var statearr_17888_17998 = state_17877__$1;
(statearr_17888_17998[(2)] = null);

(statearr_17888_17998[(1)] = (2));


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
});})(c__10327__auto___17992,jobs,results,process,async))
;
return ((function (switch__10262__auto__,c__10327__auto___17992,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_17892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__);

(statearr_17892[(1)] = (1));

return statearr_17892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1 = (function (state_17877){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17893){if((e17893 instanceof Object)){
var ex__10266__auto__ = e17893;
var statearr_17894_17999 = state_17877;
(statearr_17894_17999[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18000 = state_17877;
state_17877 = G__18000;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___17992,jobs,results,process,async))
})();
var state__10329__auto__ = (function (){var statearr_17895 = f__10328__auto__.call(null);
(statearr_17895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___17992);

return statearr_17895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___17992,jobs,results,process,async))
);


var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__,jobs,results,process,async){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__,jobs,results,process,async){
return (function (state_17933){
var state_val_17934 = (state_17933[(1)]);
if((state_val_17934 === (7))){
var inst_17929 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17935_18001 = state_17933__$1;
(statearr_17935_18001[(2)] = inst_17929);

(statearr_17935_18001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (20))){
var state_17933__$1 = state_17933;
var statearr_17936_18002 = state_17933__$1;
(statearr_17936_18002[(2)] = null);

(statearr_17936_18002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (1))){
var state_17933__$1 = state_17933;
var statearr_17937_18003 = state_17933__$1;
(statearr_17937_18003[(2)] = null);

(statearr_17937_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (4))){
var inst_17898 = (state_17933[(7)]);
var inst_17898__$1 = (state_17933[(2)]);
var inst_17899 = (inst_17898__$1 == null);
var state_17933__$1 = (function (){var statearr_17938 = state_17933;
(statearr_17938[(7)] = inst_17898__$1);

return statearr_17938;
})();
if(cljs.core.truth_(inst_17899)){
var statearr_17939_18004 = state_17933__$1;
(statearr_17939_18004[(1)] = (5));

} else {
var statearr_17940_18005 = state_17933__$1;
(statearr_17940_18005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (15))){
var inst_17911 = (state_17933[(8)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17933__$1,(18),to,inst_17911);
} else {
if((state_val_17934 === (21))){
var inst_17924 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17941_18006 = state_17933__$1;
(statearr_17941_18006[(2)] = inst_17924);

(statearr_17941_18006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (13))){
var inst_17926 = (state_17933[(2)]);
var state_17933__$1 = (function (){var statearr_17942 = state_17933;
(statearr_17942[(9)] = inst_17926);

return statearr_17942;
})();
var statearr_17943_18007 = state_17933__$1;
(statearr_17943_18007[(2)] = null);

(statearr_17943_18007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (6))){
var inst_17898 = (state_17933[(7)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17933__$1,(11),inst_17898);
} else {
if((state_val_17934 === (17))){
var inst_17919 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
if(cljs.core.truth_(inst_17919)){
var statearr_17944_18008 = state_17933__$1;
(statearr_17944_18008[(1)] = (19));

} else {
var statearr_17945_18009 = state_17933__$1;
(statearr_17945_18009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (3))){
var inst_17931 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17933__$1,inst_17931);
} else {
if((state_val_17934 === (12))){
var inst_17908 = (state_17933[(10)]);
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17933__$1,(14),inst_17908);
} else {
if((state_val_17934 === (2))){
var state_17933__$1 = state_17933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17933__$1,(4),results);
} else {
if((state_val_17934 === (19))){
var state_17933__$1 = state_17933;
var statearr_17946_18010 = state_17933__$1;
(statearr_17946_18010[(2)] = null);

(statearr_17946_18010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (11))){
var inst_17908 = (state_17933[(2)]);
var state_17933__$1 = (function (){var statearr_17947 = state_17933;
(statearr_17947[(10)] = inst_17908);

return statearr_17947;
})();
var statearr_17948_18011 = state_17933__$1;
(statearr_17948_18011[(2)] = null);

(statearr_17948_18011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (9))){
var state_17933__$1 = state_17933;
var statearr_17949_18012 = state_17933__$1;
(statearr_17949_18012[(2)] = null);

(statearr_17949_18012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (5))){
var state_17933__$1 = state_17933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17950_18013 = state_17933__$1;
(statearr_17950_18013[(1)] = (8));

} else {
var statearr_17951_18014 = state_17933__$1;
(statearr_17951_18014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (14))){
var inst_17911 = (state_17933[(8)]);
var inst_17913 = (state_17933[(11)]);
var inst_17911__$1 = (state_17933[(2)]);
var inst_17912 = (inst_17911__$1 == null);
var inst_17913__$1 = cljs.core.not.call(null,inst_17912);
var state_17933__$1 = (function (){var statearr_17952 = state_17933;
(statearr_17952[(8)] = inst_17911__$1);

(statearr_17952[(11)] = inst_17913__$1);

return statearr_17952;
})();
if(inst_17913__$1){
var statearr_17953_18015 = state_17933__$1;
(statearr_17953_18015[(1)] = (15));

} else {
var statearr_17954_18016 = state_17933__$1;
(statearr_17954_18016[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (16))){
var inst_17913 = (state_17933[(11)]);
var state_17933__$1 = state_17933;
var statearr_17955_18017 = state_17933__$1;
(statearr_17955_18017[(2)] = inst_17913);

(statearr_17955_18017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (10))){
var inst_17905 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17956_18018 = state_17933__$1;
(statearr_17956_18018[(2)] = inst_17905);

(statearr_17956_18018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (18))){
var inst_17916 = (state_17933[(2)]);
var state_17933__$1 = state_17933;
var statearr_17957_18019 = state_17933__$1;
(statearr_17957_18019[(2)] = inst_17916);

(statearr_17957_18019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17934 === (8))){
var inst_17902 = cljs.core.async.close_BANG_.call(null,to);
var state_17933__$1 = state_17933;
var statearr_17958_18020 = state_17933__$1;
(statearr_17958_18020[(2)] = inst_17902);

(statearr_17958_18020[(1)] = (10));


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
});})(c__10327__auto__,jobs,results,process,async))
;
return ((function (switch__10262__auto__,c__10327__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_17962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17962[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__);

(statearr_17962[(1)] = (1));

return statearr_17962;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1 = (function (state_17933){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17963){if((e17963 instanceof Object)){
var ex__10266__auto__ = e17963;
var statearr_17964_18021 = state_17933;
(statearr_17964_18021[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18022 = state_17933;
state_17933 = G__18022;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__ = function(state_17933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1.call(this,state_17933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__,jobs,results,process,async))
})();
var state__10329__auto__ = (function (){var statearr_17965 = f__10328__auto__.call(null);
(statearr_17965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_17965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__,jobs,results,process,async))
);

return c__10327__auto__;
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
var args18023 = [];
var len__6152__auto___18026 = arguments.length;
var i__6153__auto___18027 = (0);
while(true){
if((i__6153__auto___18027 < len__6152__auto___18026)){
args18023.push((arguments[i__6153__auto___18027]));

var G__18028 = (i__6153__auto___18027 + (1));
i__6153__auto___18027 = G__18028;
continue;
} else {
}
break;
}

var G__18025 = args18023.length;
switch (G__18025) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18023.length)].join('')));

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
var args18030 = [];
var len__6152__auto___18033 = arguments.length;
var i__6153__auto___18034 = (0);
while(true){
if((i__6153__auto___18034 < len__6152__auto___18033)){
args18030.push((arguments[i__6153__auto___18034]));

var G__18035 = (i__6153__auto___18034 + (1));
i__6153__auto___18034 = G__18035;
continue;
} else {
}
break;
}

var G__18032 = args18030.length;
switch (G__18032) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18030.length)].join('')));

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
var args18037 = [];
var len__6152__auto___18090 = arguments.length;
var i__6153__auto___18091 = (0);
while(true){
if((i__6153__auto___18091 < len__6152__auto___18090)){
args18037.push((arguments[i__6153__auto___18091]));

var G__18092 = (i__6153__auto___18091 + (1));
i__6153__auto___18091 = G__18092;
continue;
} else {
}
break;
}

var G__18039 = args18037.length;
switch (G__18039) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18037.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10327__auto___18094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___18094,tc,fc){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___18094,tc,fc){
return (function (state_18065){
var state_val_18066 = (state_18065[(1)]);
if((state_val_18066 === (7))){
var inst_18061 = (state_18065[(2)]);
var state_18065__$1 = state_18065;
var statearr_18067_18095 = state_18065__$1;
(statearr_18067_18095[(2)] = inst_18061);

(statearr_18067_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (1))){
var state_18065__$1 = state_18065;
var statearr_18068_18096 = state_18065__$1;
(statearr_18068_18096[(2)] = null);

(statearr_18068_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (4))){
var inst_18042 = (state_18065[(7)]);
var inst_18042__$1 = (state_18065[(2)]);
var inst_18043 = (inst_18042__$1 == null);
var state_18065__$1 = (function (){var statearr_18069 = state_18065;
(statearr_18069[(7)] = inst_18042__$1);

return statearr_18069;
})();
if(cljs.core.truth_(inst_18043)){
var statearr_18070_18097 = state_18065__$1;
(statearr_18070_18097[(1)] = (5));

} else {
var statearr_18071_18098 = state_18065__$1;
(statearr_18071_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (13))){
var state_18065__$1 = state_18065;
var statearr_18072_18099 = state_18065__$1;
(statearr_18072_18099[(2)] = null);

(statearr_18072_18099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (6))){
var inst_18042 = (state_18065[(7)]);
var inst_18048 = p.call(null,inst_18042);
var state_18065__$1 = state_18065;
if(cljs.core.truth_(inst_18048)){
var statearr_18073_18100 = state_18065__$1;
(statearr_18073_18100[(1)] = (9));

} else {
var statearr_18074_18101 = state_18065__$1;
(statearr_18074_18101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (3))){
var inst_18063 = (state_18065[(2)]);
var state_18065__$1 = state_18065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18065__$1,inst_18063);
} else {
if((state_val_18066 === (12))){
var state_18065__$1 = state_18065;
var statearr_18075_18102 = state_18065__$1;
(statearr_18075_18102[(2)] = null);

(statearr_18075_18102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (2))){
var state_18065__$1 = state_18065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18065__$1,(4),ch);
} else {
if((state_val_18066 === (11))){
var inst_18042 = (state_18065[(7)]);
var inst_18052 = (state_18065[(2)]);
var state_18065__$1 = state_18065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18065__$1,(8),inst_18052,inst_18042);
} else {
if((state_val_18066 === (9))){
var state_18065__$1 = state_18065;
var statearr_18076_18103 = state_18065__$1;
(statearr_18076_18103[(2)] = tc);

(statearr_18076_18103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (5))){
var inst_18045 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18046 = cljs.core.async.close_BANG_.call(null,fc);
var state_18065__$1 = (function (){var statearr_18077 = state_18065;
(statearr_18077[(8)] = inst_18045);

return statearr_18077;
})();
var statearr_18078_18104 = state_18065__$1;
(statearr_18078_18104[(2)] = inst_18046);

(statearr_18078_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (14))){
var inst_18059 = (state_18065[(2)]);
var state_18065__$1 = state_18065;
var statearr_18079_18105 = state_18065__$1;
(statearr_18079_18105[(2)] = inst_18059);

(statearr_18079_18105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (10))){
var state_18065__$1 = state_18065;
var statearr_18080_18106 = state_18065__$1;
(statearr_18080_18106[(2)] = fc);

(statearr_18080_18106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18066 === (8))){
var inst_18054 = (state_18065[(2)]);
var state_18065__$1 = state_18065;
if(cljs.core.truth_(inst_18054)){
var statearr_18081_18107 = state_18065__$1;
(statearr_18081_18107[(1)] = (12));

} else {
var statearr_18082_18108 = state_18065__$1;
(statearr_18082_18108[(1)] = (13));

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
});})(c__10327__auto___18094,tc,fc))
;
return ((function (switch__10262__auto__,c__10327__auto___18094,tc,fc){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_18086 = [null,null,null,null,null,null,null,null,null];
(statearr_18086[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_18086[(1)] = (1));

return statearr_18086;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_18065){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_18065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e18087){if((e18087 instanceof Object)){
var ex__10266__auto__ = e18087;
var statearr_18088_18109 = state_18065;
(statearr_18088_18109[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18110 = state_18065;
state_18065 = G__18110;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_18065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_18065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___18094,tc,fc))
})();
var state__10329__auto__ = (function (){var statearr_18089 = f__10328__auto__.call(null);
(statearr_18089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___18094);

return statearr_18089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___18094,tc,fc))
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
var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_18157){
var state_val_18158 = (state_18157[(1)]);
if((state_val_18158 === (1))){
var inst_18143 = init;
var state_18157__$1 = (function (){var statearr_18159 = state_18157;
(statearr_18159[(7)] = inst_18143);

return statearr_18159;
})();
var statearr_18160_18175 = state_18157__$1;
(statearr_18160_18175[(2)] = null);

(statearr_18160_18175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (2))){
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18157__$1,(4),ch);
} else {
if((state_val_18158 === (3))){
var inst_18155 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18157__$1,inst_18155);
} else {
if((state_val_18158 === (4))){
var inst_18146 = (state_18157[(8)]);
var inst_18146__$1 = (state_18157[(2)]);
var inst_18147 = (inst_18146__$1 == null);
var state_18157__$1 = (function (){var statearr_18161 = state_18157;
(statearr_18161[(8)] = inst_18146__$1);

return statearr_18161;
})();
if(cljs.core.truth_(inst_18147)){
var statearr_18162_18176 = state_18157__$1;
(statearr_18162_18176[(1)] = (5));

} else {
var statearr_18163_18177 = state_18157__$1;
(statearr_18163_18177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (5))){
var inst_18143 = (state_18157[(7)]);
var state_18157__$1 = state_18157;
var statearr_18164_18178 = state_18157__$1;
(statearr_18164_18178[(2)] = inst_18143);

(statearr_18164_18178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (6))){
var inst_18146 = (state_18157[(8)]);
var inst_18143 = (state_18157[(7)]);
var inst_18150 = f.call(null,inst_18143,inst_18146);
var inst_18143__$1 = inst_18150;
var state_18157__$1 = (function (){var statearr_18165 = state_18157;
(statearr_18165[(7)] = inst_18143__$1);

return statearr_18165;
})();
var statearr_18166_18179 = state_18157__$1;
(statearr_18166_18179[(2)] = null);

(statearr_18166_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18158 === (7))){
var inst_18153 = (state_18157[(2)]);
var state_18157__$1 = state_18157;
var statearr_18167_18180 = state_18157__$1;
(statearr_18167_18180[(2)] = inst_18153);

(statearr_18167_18180[(1)] = (3));


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
});})(c__10327__auto__))
;
return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10263__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10263__auto____0 = (function (){
var statearr_18171 = [null,null,null,null,null,null,null,null,null];
(statearr_18171[(0)] = cljs$core$async$reduce_$_state_machine__10263__auto__);

(statearr_18171[(1)] = (1));

return statearr_18171;
});
var cljs$core$async$reduce_$_state_machine__10263__auto____1 = (function (state_18157){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_18157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e18172){if((e18172 instanceof Object)){
var ex__10266__auto__ = e18172;
var statearr_18173_18181 = state_18157;
(statearr_18173_18181[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18182 = state_18157;
state_18157 = G__18182;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10263__auto__ = function(state_18157){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10263__auto____1.call(this,state_18157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10263__auto____0;
cljs$core$async$reduce_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10263__auto____1;
return cljs$core$async$reduce_$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();
var state__10329__auto__ = (function (){var statearr_18174 = f__10328__auto__.call(null);
(statearr_18174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_18174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);

return c__10327__auto__;
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
var args18183 = [];
var len__6152__auto___18235 = arguments.length;
var i__6153__auto___18236 = (0);
while(true){
if((i__6153__auto___18236 < len__6152__auto___18235)){
args18183.push((arguments[i__6153__auto___18236]));

var G__18237 = (i__6153__auto___18236 + (1));
i__6153__auto___18236 = G__18237;
continue;
} else {
}
break;
}

var G__18185 = args18183.length;
switch (G__18185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18183.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_18210){
var state_val_18211 = (state_18210[(1)]);
if((state_val_18211 === (7))){
var inst_18192 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
var statearr_18212_18239 = state_18210__$1;
(statearr_18212_18239[(2)] = inst_18192);

(statearr_18212_18239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (1))){
var inst_18186 = cljs.core.seq.call(null,coll);
var inst_18187 = inst_18186;
var state_18210__$1 = (function (){var statearr_18213 = state_18210;
(statearr_18213[(7)] = inst_18187);

return statearr_18213;
})();
var statearr_18214_18240 = state_18210__$1;
(statearr_18214_18240[(2)] = null);

(statearr_18214_18240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (4))){
var inst_18187 = (state_18210[(7)]);
var inst_18190 = cljs.core.first.call(null,inst_18187);
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18210__$1,(7),ch,inst_18190);
} else {
if((state_val_18211 === (13))){
var inst_18204 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
var statearr_18215_18241 = state_18210__$1;
(statearr_18215_18241[(2)] = inst_18204);

(statearr_18215_18241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (6))){
var inst_18195 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
if(cljs.core.truth_(inst_18195)){
var statearr_18216_18242 = state_18210__$1;
(statearr_18216_18242[(1)] = (8));

} else {
var statearr_18217_18243 = state_18210__$1;
(statearr_18217_18243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (3))){
var inst_18208 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18210__$1,inst_18208);
} else {
if((state_val_18211 === (12))){
var state_18210__$1 = state_18210;
var statearr_18218_18244 = state_18210__$1;
(statearr_18218_18244[(2)] = null);

(statearr_18218_18244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (2))){
var inst_18187 = (state_18210[(7)]);
var state_18210__$1 = state_18210;
if(cljs.core.truth_(inst_18187)){
var statearr_18219_18245 = state_18210__$1;
(statearr_18219_18245[(1)] = (4));

} else {
var statearr_18220_18246 = state_18210__$1;
(statearr_18220_18246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (11))){
var inst_18201 = cljs.core.async.close_BANG_.call(null,ch);
var state_18210__$1 = state_18210;
var statearr_18221_18247 = state_18210__$1;
(statearr_18221_18247[(2)] = inst_18201);

(statearr_18221_18247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (9))){
var state_18210__$1 = state_18210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18222_18248 = state_18210__$1;
(statearr_18222_18248[(1)] = (11));

} else {
var statearr_18223_18249 = state_18210__$1;
(statearr_18223_18249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (5))){
var inst_18187 = (state_18210[(7)]);
var state_18210__$1 = state_18210;
var statearr_18224_18250 = state_18210__$1;
(statearr_18224_18250[(2)] = inst_18187);

(statearr_18224_18250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (10))){
var inst_18206 = (state_18210[(2)]);
var state_18210__$1 = state_18210;
var statearr_18225_18251 = state_18210__$1;
(statearr_18225_18251[(2)] = inst_18206);

(statearr_18225_18251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18211 === (8))){
var inst_18187 = (state_18210[(7)]);
var inst_18197 = cljs.core.next.call(null,inst_18187);
var inst_18187__$1 = inst_18197;
var state_18210__$1 = (function (){var statearr_18226 = state_18210;
(statearr_18226[(7)] = inst_18187__$1);

return statearr_18226;
})();
var statearr_18227_18252 = state_18210__$1;
(statearr_18227_18252[(2)] = null);

(statearr_18227_18252[(1)] = (2));


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
});})(c__10327__auto__))
;
return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_18231 = [null,null,null,null,null,null,null,null];
(statearr_18231[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_18231[(1)] = (1));

return statearr_18231;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_18210){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_18210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e18232){if((e18232 instanceof Object)){
var ex__10266__auto__ = e18232;
var statearr_18233_18253 = state_18210;
(statearr_18233_18253[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18254 = state_18210;
state_18210 = G__18254;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_18210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_18210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();
var state__10329__auto__ = (function (){var statearr_18234 = f__10328__auto__.call(null);
(statearr_18234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_18234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);

return c__10327__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18476 = (function (mult,ch,cs,meta18477){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18477 = meta18477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18478,meta18477__$1){
var self__ = this;
var _18478__$1 = this;
return (new cljs.core.async.t_cljs$core$async18476(self__.mult,self__.ch,self__.cs,meta18477__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18478){
var self__ = this;
var _18478__$1 = this;
return self__.meta18477;
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18477","meta18477",-566035787,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18476";

cljs.core.async.t_cljs$core$async18476.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18476");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18476 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18476(mult__$1,ch__$1,cs__$1,meta18477){
return (new cljs.core.async.t_cljs$core$async18476(mult__$1,ch__$1,cs__$1,meta18477));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18476(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10327__auto___18697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___18697,cs,m,dchan,dctr,done){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___18697,cs,m,dchan,dctr,done){
return (function (state_18609){
var state_val_18610 = (state_18609[(1)]);
if((state_val_18610 === (7))){
var inst_18605 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18611_18698 = state_18609__$1;
(statearr_18611_18698[(2)] = inst_18605);

(statearr_18611_18698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (20))){
var inst_18510 = (state_18609[(7)]);
var inst_18520 = cljs.core.first.call(null,inst_18510);
var inst_18521 = cljs.core.nth.call(null,inst_18520,(0),null);
var inst_18522 = cljs.core.nth.call(null,inst_18520,(1),null);
var state_18609__$1 = (function (){var statearr_18612 = state_18609;
(statearr_18612[(8)] = inst_18521);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18522)){
var statearr_18613_18699 = state_18609__$1;
(statearr_18613_18699[(1)] = (22));

} else {
var statearr_18614_18700 = state_18609__$1;
(statearr_18614_18700[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (27))){
var inst_18557 = (state_18609[(9)]);
var inst_18481 = (state_18609[(10)]);
var inst_18550 = (state_18609[(11)]);
var inst_18552 = (state_18609[(12)]);
var inst_18557__$1 = cljs.core._nth.call(null,inst_18550,inst_18552);
var inst_18558 = cljs.core.async.put_BANG_.call(null,inst_18557__$1,inst_18481,done);
var state_18609__$1 = (function (){var statearr_18615 = state_18609;
(statearr_18615[(9)] = inst_18557__$1);

return statearr_18615;
})();
if(cljs.core.truth_(inst_18558)){
var statearr_18616_18701 = state_18609__$1;
(statearr_18616_18701[(1)] = (30));

} else {
var statearr_18617_18702 = state_18609__$1;
(statearr_18617_18702[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (1))){
var state_18609__$1 = state_18609;
var statearr_18618_18703 = state_18609__$1;
(statearr_18618_18703[(2)] = null);

(statearr_18618_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (24))){
var inst_18510 = (state_18609[(7)]);
var inst_18527 = (state_18609[(2)]);
var inst_18528 = cljs.core.next.call(null,inst_18510);
var inst_18490 = inst_18528;
var inst_18491 = null;
var inst_18492 = (0);
var inst_18493 = (0);
var state_18609__$1 = (function (){var statearr_18619 = state_18609;
(statearr_18619[(13)] = inst_18491);

(statearr_18619[(14)] = inst_18493);

(statearr_18619[(15)] = inst_18492);

(statearr_18619[(16)] = inst_18490);

(statearr_18619[(17)] = inst_18527);

return statearr_18619;
})();
var statearr_18620_18704 = state_18609__$1;
(statearr_18620_18704[(2)] = null);

(statearr_18620_18704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (39))){
var state_18609__$1 = state_18609;
var statearr_18624_18705 = state_18609__$1;
(statearr_18624_18705[(2)] = null);

(statearr_18624_18705[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (4))){
var inst_18481 = (state_18609[(10)]);
var inst_18481__$1 = (state_18609[(2)]);
var inst_18482 = (inst_18481__$1 == null);
var state_18609__$1 = (function (){var statearr_18625 = state_18609;
(statearr_18625[(10)] = inst_18481__$1);

return statearr_18625;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18626_18706 = state_18609__$1;
(statearr_18626_18706[(1)] = (5));

} else {
var statearr_18627_18707 = state_18609__$1;
(statearr_18627_18707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (15))){
var inst_18491 = (state_18609[(13)]);
var inst_18493 = (state_18609[(14)]);
var inst_18492 = (state_18609[(15)]);
var inst_18490 = (state_18609[(16)]);
var inst_18506 = (state_18609[(2)]);
var inst_18507 = (inst_18493 + (1));
var tmp18621 = inst_18491;
var tmp18622 = inst_18492;
var tmp18623 = inst_18490;
var inst_18490__$1 = tmp18623;
var inst_18491__$1 = tmp18621;
var inst_18492__$1 = tmp18622;
var inst_18493__$1 = inst_18507;
var state_18609__$1 = (function (){var statearr_18628 = state_18609;
(statearr_18628[(13)] = inst_18491__$1);

(statearr_18628[(14)] = inst_18493__$1);

(statearr_18628[(18)] = inst_18506);

(statearr_18628[(15)] = inst_18492__$1);

(statearr_18628[(16)] = inst_18490__$1);

return statearr_18628;
})();
var statearr_18629_18708 = state_18609__$1;
(statearr_18629_18708[(2)] = null);

(statearr_18629_18708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (21))){
var inst_18531 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18633_18709 = state_18609__$1;
(statearr_18633_18709[(2)] = inst_18531);

(statearr_18633_18709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (31))){
var inst_18557 = (state_18609[(9)]);
var inst_18561 = done.call(null,null);
var inst_18562 = cljs.core.async.untap_STAR_.call(null,m,inst_18557);
var state_18609__$1 = (function (){var statearr_18634 = state_18609;
(statearr_18634[(19)] = inst_18561);

return statearr_18634;
})();
var statearr_18635_18710 = state_18609__$1;
(statearr_18635_18710[(2)] = inst_18562);

(statearr_18635_18710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (32))){
var inst_18549 = (state_18609[(20)]);
var inst_18551 = (state_18609[(21)]);
var inst_18550 = (state_18609[(11)]);
var inst_18552 = (state_18609[(12)]);
var inst_18564 = (state_18609[(2)]);
var inst_18565 = (inst_18552 + (1));
var tmp18630 = inst_18549;
var tmp18631 = inst_18551;
var tmp18632 = inst_18550;
var inst_18549__$1 = tmp18630;
var inst_18550__$1 = tmp18632;
var inst_18551__$1 = tmp18631;
var inst_18552__$1 = inst_18565;
var state_18609__$1 = (function (){var statearr_18636 = state_18609;
(statearr_18636[(22)] = inst_18564);

(statearr_18636[(20)] = inst_18549__$1);

(statearr_18636[(21)] = inst_18551__$1);

(statearr_18636[(11)] = inst_18550__$1);

(statearr_18636[(12)] = inst_18552__$1);

return statearr_18636;
})();
var statearr_18637_18711 = state_18609__$1;
(statearr_18637_18711[(2)] = null);

(statearr_18637_18711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (40))){
var inst_18577 = (state_18609[(23)]);
var inst_18581 = done.call(null,null);
var inst_18582 = cljs.core.async.untap_STAR_.call(null,m,inst_18577);
var state_18609__$1 = (function (){var statearr_18638 = state_18609;
(statearr_18638[(24)] = inst_18581);

return statearr_18638;
})();
var statearr_18639_18712 = state_18609__$1;
(statearr_18639_18712[(2)] = inst_18582);

(statearr_18639_18712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (33))){
var inst_18568 = (state_18609[(25)]);
var inst_18570 = cljs.core.chunked_seq_QMARK_.call(null,inst_18568);
var state_18609__$1 = state_18609;
if(inst_18570){
var statearr_18640_18713 = state_18609__$1;
(statearr_18640_18713[(1)] = (36));

} else {
var statearr_18641_18714 = state_18609__$1;
(statearr_18641_18714[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (13))){
var inst_18500 = (state_18609[(26)]);
var inst_18503 = cljs.core.async.close_BANG_.call(null,inst_18500);
var state_18609__$1 = state_18609;
var statearr_18642_18715 = state_18609__$1;
(statearr_18642_18715[(2)] = inst_18503);

(statearr_18642_18715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (22))){
var inst_18521 = (state_18609[(8)]);
var inst_18524 = cljs.core.async.close_BANG_.call(null,inst_18521);
var state_18609__$1 = state_18609;
var statearr_18643_18716 = state_18609__$1;
(statearr_18643_18716[(2)] = inst_18524);

(statearr_18643_18716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (36))){
var inst_18568 = (state_18609[(25)]);
var inst_18572 = cljs.core.chunk_first.call(null,inst_18568);
var inst_18573 = cljs.core.chunk_rest.call(null,inst_18568);
var inst_18574 = cljs.core.count.call(null,inst_18572);
var inst_18549 = inst_18573;
var inst_18550 = inst_18572;
var inst_18551 = inst_18574;
var inst_18552 = (0);
var state_18609__$1 = (function (){var statearr_18644 = state_18609;
(statearr_18644[(20)] = inst_18549);

(statearr_18644[(21)] = inst_18551);

(statearr_18644[(11)] = inst_18550);

(statearr_18644[(12)] = inst_18552);

return statearr_18644;
})();
var statearr_18645_18717 = state_18609__$1;
(statearr_18645_18717[(2)] = null);

(statearr_18645_18717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (41))){
var inst_18568 = (state_18609[(25)]);
var inst_18584 = (state_18609[(2)]);
var inst_18585 = cljs.core.next.call(null,inst_18568);
var inst_18549 = inst_18585;
var inst_18550 = null;
var inst_18551 = (0);
var inst_18552 = (0);
var state_18609__$1 = (function (){var statearr_18646 = state_18609;
(statearr_18646[(27)] = inst_18584);

(statearr_18646[(20)] = inst_18549);

(statearr_18646[(21)] = inst_18551);

(statearr_18646[(11)] = inst_18550);

(statearr_18646[(12)] = inst_18552);

return statearr_18646;
})();
var statearr_18647_18718 = state_18609__$1;
(statearr_18647_18718[(2)] = null);

(statearr_18647_18718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (43))){
var state_18609__$1 = state_18609;
var statearr_18648_18719 = state_18609__$1;
(statearr_18648_18719[(2)] = null);

(statearr_18648_18719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (29))){
var inst_18593 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18649_18720 = state_18609__$1;
(statearr_18649_18720[(2)] = inst_18593);

(statearr_18649_18720[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (44))){
var inst_18602 = (state_18609[(2)]);
var state_18609__$1 = (function (){var statearr_18650 = state_18609;
(statearr_18650[(28)] = inst_18602);

return statearr_18650;
})();
var statearr_18651_18721 = state_18609__$1;
(statearr_18651_18721[(2)] = null);

(statearr_18651_18721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (6))){
var inst_18541 = (state_18609[(29)]);
var inst_18540 = cljs.core.deref.call(null,cs);
var inst_18541__$1 = cljs.core.keys.call(null,inst_18540);
var inst_18542 = cljs.core.count.call(null,inst_18541__$1);
var inst_18543 = cljs.core.reset_BANG_.call(null,dctr,inst_18542);
var inst_18548 = cljs.core.seq.call(null,inst_18541__$1);
var inst_18549 = inst_18548;
var inst_18550 = null;
var inst_18551 = (0);
var inst_18552 = (0);
var state_18609__$1 = (function (){var statearr_18652 = state_18609;
(statearr_18652[(20)] = inst_18549);

(statearr_18652[(21)] = inst_18551);

(statearr_18652[(11)] = inst_18550);

(statearr_18652[(30)] = inst_18543);

(statearr_18652[(12)] = inst_18552);

(statearr_18652[(29)] = inst_18541__$1);

return statearr_18652;
})();
var statearr_18653_18722 = state_18609__$1;
(statearr_18653_18722[(2)] = null);

(statearr_18653_18722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (28))){
var inst_18549 = (state_18609[(20)]);
var inst_18568 = (state_18609[(25)]);
var inst_18568__$1 = cljs.core.seq.call(null,inst_18549);
var state_18609__$1 = (function (){var statearr_18654 = state_18609;
(statearr_18654[(25)] = inst_18568__$1);

return statearr_18654;
})();
if(inst_18568__$1){
var statearr_18655_18723 = state_18609__$1;
(statearr_18655_18723[(1)] = (33));

} else {
var statearr_18656_18724 = state_18609__$1;
(statearr_18656_18724[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (25))){
var inst_18551 = (state_18609[(21)]);
var inst_18552 = (state_18609[(12)]);
var inst_18554 = (inst_18552 < inst_18551);
var inst_18555 = inst_18554;
var state_18609__$1 = state_18609;
if(cljs.core.truth_(inst_18555)){
var statearr_18657_18725 = state_18609__$1;
(statearr_18657_18725[(1)] = (27));

} else {
var statearr_18658_18726 = state_18609__$1;
(statearr_18658_18726[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (34))){
var state_18609__$1 = state_18609;
var statearr_18659_18727 = state_18609__$1;
(statearr_18659_18727[(2)] = null);

(statearr_18659_18727[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (17))){
var state_18609__$1 = state_18609;
var statearr_18660_18728 = state_18609__$1;
(statearr_18660_18728[(2)] = null);

(statearr_18660_18728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (3))){
var inst_18607 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18609__$1,inst_18607);
} else {
if((state_val_18610 === (12))){
var inst_18536 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18661_18729 = state_18609__$1;
(statearr_18661_18729[(2)] = inst_18536);

(statearr_18661_18729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (2))){
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18609__$1,(4),ch);
} else {
if((state_val_18610 === (23))){
var state_18609__$1 = state_18609;
var statearr_18662_18730 = state_18609__$1;
(statearr_18662_18730[(2)] = null);

(statearr_18662_18730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (35))){
var inst_18591 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18663_18731 = state_18609__$1;
(statearr_18663_18731[(2)] = inst_18591);

(statearr_18663_18731[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (19))){
var inst_18510 = (state_18609[(7)]);
var inst_18514 = cljs.core.chunk_first.call(null,inst_18510);
var inst_18515 = cljs.core.chunk_rest.call(null,inst_18510);
var inst_18516 = cljs.core.count.call(null,inst_18514);
var inst_18490 = inst_18515;
var inst_18491 = inst_18514;
var inst_18492 = inst_18516;
var inst_18493 = (0);
var state_18609__$1 = (function (){var statearr_18664 = state_18609;
(statearr_18664[(13)] = inst_18491);

(statearr_18664[(14)] = inst_18493);

(statearr_18664[(15)] = inst_18492);

(statearr_18664[(16)] = inst_18490);

return statearr_18664;
})();
var statearr_18665_18732 = state_18609__$1;
(statearr_18665_18732[(2)] = null);

(statearr_18665_18732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (11))){
var inst_18490 = (state_18609[(16)]);
var inst_18510 = (state_18609[(7)]);
var inst_18510__$1 = cljs.core.seq.call(null,inst_18490);
var state_18609__$1 = (function (){var statearr_18666 = state_18609;
(statearr_18666[(7)] = inst_18510__$1);

return statearr_18666;
})();
if(inst_18510__$1){
var statearr_18667_18733 = state_18609__$1;
(statearr_18667_18733[(1)] = (16));

} else {
var statearr_18668_18734 = state_18609__$1;
(statearr_18668_18734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (9))){
var inst_18538 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18669_18735 = state_18609__$1;
(statearr_18669_18735[(2)] = inst_18538);

(statearr_18669_18735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (5))){
var inst_18488 = cljs.core.deref.call(null,cs);
var inst_18489 = cljs.core.seq.call(null,inst_18488);
var inst_18490 = inst_18489;
var inst_18491 = null;
var inst_18492 = (0);
var inst_18493 = (0);
var state_18609__$1 = (function (){var statearr_18670 = state_18609;
(statearr_18670[(13)] = inst_18491);

(statearr_18670[(14)] = inst_18493);

(statearr_18670[(15)] = inst_18492);

(statearr_18670[(16)] = inst_18490);

return statearr_18670;
})();
var statearr_18671_18736 = state_18609__$1;
(statearr_18671_18736[(2)] = null);

(statearr_18671_18736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (14))){
var state_18609__$1 = state_18609;
var statearr_18672_18737 = state_18609__$1;
(statearr_18672_18737[(2)] = null);

(statearr_18672_18737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (45))){
var inst_18599 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18673_18738 = state_18609__$1;
(statearr_18673_18738[(2)] = inst_18599);

(statearr_18673_18738[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (26))){
var inst_18541 = (state_18609[(29)]);
var inst_18595 = (state_18609[(2)]);
var inst_18596 = cljs.core.seq.call(null,inst_18541);
var state_18609__$1 = (function (){var statearr_18674 = state_18609;
(statearr_18674[(31)] = inst_18595);

return statearr_18674;
})();
if(inst_18596){
var statearr_18675_18739 = state_18609__$1;
(statearr_18675_18739[(1)] = (42));

} else {
var statearr_18676_18740 = state_18609__$1;
(statearr_18676_18740[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (16))){
var inst_18510 = (state_18609[(7)]);
var inst_18512 = cljs.core.chunked_seq_QMARK_.call(null,inst_18510);
var state_18609__$1 = state_18609;
if(inst_18512){
var statearr_18677_18741 = state_18609__$1;
(statearr_18677_18741[(1)] = (19));

} else {
var statearr_18678_18742 = state_18609__$1;
(statearr_18678_18742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (38))){
var inst_18588 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18679_18743 = state_18609__$1;
(statearr_18679_18743[(2)] = inst_18588);

(statearr_18679_18743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (30))){
var state_18609__$1 = state_18609;
var statearr_18680_18744 = state_18609__$1;
(statearr_18680_18744[(2)] = null);

(statearr_18680_18744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (10))){
var inst_18491 = (state_18609[(13)]);
var inst_18493 = (state_18609[(14)]);
var inst_18499 = cljs.core._nth.call(null,inst_18491,inst_18493);
var inst_18500 = cljs.core.nth.call(null,inst_18499,(0),null);
var inst_18501 = cljs.core.nth.call(null,inst_18499,(1),null);
var state_18609__$1 = (function (){var statearr_18681 = state_18609;
(statearr_18681[(26)] = inst_18500);

return statearr_18681;
})();
if(cljs.core.truth_(inst_18501)){
var statearr_18682_18745 = state_18609__$1;
(statearr_18682_18745[(1)] = (13));

} else {
var statearr_18683_18746 = state_18609__$1;
(statearr_18683_18746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (18))){
var inst_18534 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18684_18747 = state_18609__$1;
(statearr_18684_18747[(2)] = inst_18534);

(statearr_18684_18747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (42))){
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18609__$1,(45),dchan);
} else {
if((state_val_18610 === (37))){
var inst_18481 = (state_18609[(10)]);
var inst_18577 = (state_18609[(23)]);
var inst_18568 = (state_18609[(25)]);
var inst_18577__$1 = cljs.core.first.call(null,inst_18568);
var inst_18578 = cljs.core.async.put_BANG_.call(null,inst_18577__$1,inst_18481,done);
var state_18609__$1 = (function (){var statearr_18685 = state_18609;
(statearr_18685[(23)] = inst_18577__$1);

return statearr_18685;
})();
if(cljs.core.truth_(inst_18578)){
var statearr_18686_18748 = state_18609__$1;
(statearr_18686_18748[(1)] = (39));

} else {
var statearr_18687_18749 = state_18609__$1;
(statearr_18687_18749[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (8))){
var inst_18493 = (state_18609[(14)]);
var inst_18492 = (state_18609[(15)]);
var inst_18495 = (inst_18493 < inst_18492);
var inst_18496 = inst_18495;
var state_18609__$1 = state_18609;
if(cljs.core.truth_(inst_18496)){
var statearr_18688_18750 = state_18609__$1;
(statearr_18688_18750[(1)] = (10));

} else {
var statearr_18689_18751 = state_18609__$1;
(statearr_18689_18751[(1)] = (11));

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
});})(c__10327__auto___18697,cs,m,dchan,dctr,done))
;
return ((function (switch__10262__auto__,c__10327__auto___18697,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10263__auto__ = null;
var cljs$core$async$mult_$_state_machine__10263__auto____0 = (function (){
var statearr_18693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18693[(0)] = cljs$core$async$mult_$_state_machine__10263__auto__);

(statearr_18693[(1)] = (1));

return statearr_18693;
});
var cljs$core$async$mult_$_state_machine__10263__auto____1 = (function (state_18609){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_18609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e18694){if((e18694 instanceof Object)){
var ex__10266__auto__ = e18694;
var statearr_18695_18752 = state_18609;
(statearr_18695_18752[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18753 = state_18609;
state_18609 = G__18753;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10263__auto__ = function(state_18609){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10263__auto____1.call(this,state_18609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10263__auto____0;
cljs$core$async$mult_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10263__auto____1;
return cljs$core$async$mult_$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___18697,cs,m,dchan,dctr,done))
})();
var state__10329__auto__ = (function (){var statearr_18696 = f__10328__auto__.call(null);
(statearr_18696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___18697);

return statearr_18696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___18697,cs,m,dchan,dctr,done))
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
var args18754 = [];
var len__6152__auto___18757 = arguments.length;
var i__6153__auto___18758 = (0);
while(true){
if((i__6153__auto___18758 < len__6152__auto___18757)){
args18754.push((arguments[i__6153__auto___18758]));

var G__18759 = (i__6153__auto___18758 + (1));
i__6153__auto___18758 = G__18759;
continue;
} else {
}
break;
}

var G__18756 = args18754.length;
switch (G__18756) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18754.length)].join('')));

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
var len__6152__auto___18771 = arguments.length;
var i__6153__auto___18772 = (0);
while(true){
if((i__6153__auto___18772 < len__6152__auto___18771)){
args__6159__auto__.push((arguments[i__6153__auto___18772]));

var G__18773 = (i__6153__auto___18772 + (1));
i__6153__auto___18772 = G__18773;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18765){
var map__18766 = p__18765;
var map__18766__$1 = ((((!((map__18766 == null)))?((((map__18766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18766):map__18766);
var opts = map__18766__$1;
var statearr_18768_18774 = state;
(statearr_18768_18774[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18766,map__18766__$1,opts){
return (function (val){
var statearr_18769_18775 = state;
(statearr_18769_18775[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18766,map__18766__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18770_18776 = state;
(statearr_18770_18776[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18761){
var G__18762 = cljs.core.first.call(null,seq18761);
var seq18761__$1 = cljs.core.next.call(null,seq18761);
var G__18763 = cljs.core.first.call(null,seq18761__$1);
var seq18761__$2 = cljs.core.next.call(null,seq18761__$1);
var G__18764 = cljs.core.first.call(null,seq18761__$2);
var seq18761__$3 = cljs.core.next.call(null,seq18761__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18762,G__18763,G__18764,seq18761__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18940 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18941){
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
this.meta18941 = meta18941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18942,meta18941__$1){
var self__ = this;
var _18942__$1 = this;
return (new cljs.core.async.t_cljs$core$async18940(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18941__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18942){
var self__ = this;
var _18942__$1 = this;
return self__.meta18941;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18940.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18941","meta18941",-1741485523,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18940";

cljs.core.async.t_cljs$core$async18940.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18940");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18940 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18941){
return (new cljs.core.async.t_cljs$core$async18940(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18941));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18940(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10327__auto___19103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19040){
var state_val_19041 = (state_19040[(1)]);
if((state_val_19041 === (7))){
var inst_18958 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19042_19104 = state_19040__$1;
(statearr_19042_19104[(2)] = inst_18958);

(statearr_19042_19104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (20))){
var inst_18970 = (state_19040[(7)]);
var state_19040__$1 = state_19040;
var statearr_19043_19105 = state_19040__$1;
(statearr_19043_19105[(2)] = inst_18970);

(statearr_19043_19105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (27))){
var state_19040__$1 = state_19040;
var statearr_19044_19106 = state_19040__$1;
(statearr_19044_19106[(2)] = null);

(statearr_19044_19106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (1))){
var inst_18946 = (state_19040[(8)]);
var inst_18946__$1 = calc_state.call(null);
var inst_18948 = (inst_18946__$1 == null);
var inst_18949 = cljs.core.not.call(null,inst_18948);
var state_19040__$1 = (function (){var statearr_19045 = state_19040;
(statearr_19045[(8)] = inst_18946__$1);

return statearr_19045;
})();
if(inst_18949){
var statearr_19046_19107 = state_19040__$1;
(statearr_19046_19107[(1)] = (2));

} else {
var statearr_19047_19108 = state_19040__$1;
(statearr_19047_19108[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (24))){
var inst_19000 = (state_19040[(9)]);
var inst_18993 = (state_19040[(10)]);
var inst_19014 = (state_19040[(11)]);
var inst_19014__$1 = inst_18993.call(null,inst_19000);
var state_19040__$1 = (function (){var statearr_19048 = state_19040;
(statearr_19048[(11)] = inst_19014__$1);

return statearr_19048;
})();
if(cljs.core.truth_(inst_19014__$1)){
var statearr_19049_19109 = state_19040__$1;
(statearr_19049_19109[(1)] = (29));

} else {
var statearr_19050_19110 = state_19040__$1;
(statearr_19050_19110[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (4))){
var inst_18961 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_18961)){
var statearr_19051_19111 = state_19040__$1;
(statearr_19051_19111[(1)] = (8));

} else {
var statearr_19052_19112 = state_19040__$1;
(statearr_19052_19112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (15))){
var inst_18987 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_18987)){
var statearr_19053_19113 = state_19040__$1;
(statearr_19053_19113[(1)] = (19));

} else {
var statearr_19054_19114 = state_19040__$1;
(statearr_19054_19114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (21))){
var inst_18992 = (state_19040[(12)]);
var inst_18992__$1 = (state_19040[(2)]);
var inst_18993 = cljs.core.get.call(null,inst_18992__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18994 = cljs.core.get.call(null,inst_18992__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18995 = cljs.core.get.call(null,inst_18992__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19040__$1 = (function (){var statearr_19055 = state_19040;
(statearr_19055[(10)] = inst_18993);

(statearr_19055[(12)] = inst_18992__$1);

(statearr_19055[(13)] = inst_18994);

return statearr_19055;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19040__$1,(22),inst_18995);
} else {
if((state_val_19041 === (31))){
var inst_19022 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_19022)){
var statearr_19056_19115 = state_19040__$1;
(statearr_19056_19115[(1)] = (32));

} else {
var statearr_19057_19116 = state_19040__$1;
(statearr_19057_19116[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (32))){
var inst_18999 = (state_19040[(14)]);
var state_19040__$1 = state_19040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19040__$1,(35),out,inst_18999);
} else {
if((state_val_19041 === (33))){
var inst_18992 = (state_19040[(12)]);
var inst_18970 = inst_18992;
var state_19040__$1 = (function (){var statearr_19058 = state_19040;
(statearr_19058[(7)] = inst_18970);

return statearr_19058;
})();
var statearr_19059_19117 = state_19040__$1;
(statearr_19059_19117[(2)] = null);

(statearr_19059_19117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (13))){
var inst_18970 = (state_19040[(7)]);
var inst_18977 = inst_18970.cljs$lang$protocol_mask$partition0$;
var inst_18978 = (inst_18977 & (64));
var inst_18979 = inst_18970.cljs$core$ISeq$;
var inst_18980 = (inst_18978) || (inst_18979);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_18980)){
var statearr_19060_19118 = state_19040__$1;
(statearr_19060_19118[(1)] = (16));

} else {
var statearr_19061_19119 = state_19040__$1;
(statearr_19061_19119[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (22))){
var inst_19000 = (state_19040[(9)]);
var inst_18999 = (state_19040[(14)]);
var inst_18998 = (state_19040[(2)]);
var inst_18999__$1 = cljs.core.nth.call(null,inst_18998,(0),null);
var inst_19000__$1 = cljs.core.nth.call(null,inst_18998,(1),null);
var inst_19001 = (inst_18999__$1 == null);
var inst_19002 = cljs.core._EQ_.call(null,inst_19000__$1,change);
var inst_19003 = (inst_19001) || (inst_19002);
var state_19040__$1 = (function (){var statearr_19062 = state_19040;
(statearr_19062[(9)] = inst_19000__$1);

(statearr_19062[(14)] = inst_18999__$1);

return statearr_19062;
})();
if(cljs.core.truth_(inst_19003)){
var statearr_19063_19120 = state_19040__$1;
(statearr_19063_19120[(1)] = (23));

} else {
var statearr_19064_19121 = state_19040__$1;
(statearr_19064_19121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (36))){
var inst_18992 = (state_19040[(12)]);
var inst_18970 = inst_18992;
var state_19040__$1 = (function (){var statearr_19065 = state_19040;
(statearr_19065[(7)] = inst_18970);

return statearr_19065;
})();
var statearr_19066_19122 = state_19040__$1;
(statearr_19066_19122[(2)] = null);

(statearr_19066_19122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (29))){
var inst_19014 = (state_19040[(11)]);
var state_19040__$1 = state_19040;
var statearr_19067_19123 = state_19040__$1;
(statearr_19067_19123[(2)] = inst_19014);

(statearr_19067_19123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (6))){
var state_19040__$1 = state_19040;
var statearr_19068_19124 = state_19040__$1;
(statearr_19068_19124[(2)] = false);

(statearr_19068_19124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (28))){
var inst_19010 = (state_19040[(2)]);
var inst_19011 = calc_state.call(null);
var inst_18970 = inst_19011;
var state_19040__$1 = (function (){var statearr_19069 = state_19040;
(statearr_19069[(7)] = inst_18970);

(statearr_19069[(15)] = inst_19010);

return statearr_19069;
})();
var statearr_19070_19125 = state_19040__$1;
(statearr_19070_19125[(2)] = null);

(statearr_19070_19125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (25))){
var inst_19036 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19071_19126 = state_19040__$1;
(statearr_19071_19126[(2)] = inst_19036);

(statearr_19071_19126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (34))){
var inst_19034 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19072_19127 = state_19040__$1;
(statearr_19072_19127[(2)] = inst_19034);

(statearr_19072_19127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (17))){
var state_19040__$1 = state_19040;
var statearr_19073_19128 = state_19040__$1;
(statearr_19073_19128[(2)] = false);

(statearr_19073_19128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (3))){
var state_19040__$1 = state_19040;
var statearr_19074_19129 = state_19040__$1;
(statearr_19074_19129[(2)] = false);

(statearr_19074_19129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (12))){
var inst_19038 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19040__$1,inst_19038);
} else {
if((state_val_19041 === (2))){
var inst_18946 = (state_19040[(8)]);
var inst_18951 = inst_18946.cljs$lang$protocol_mask$partition0$;
var inst_18952 = (inst_18951 & (64));
var inst_18953 = inst_18946.cljs$core$ISeq$;
var inst_18954 = (inst_18952) || (inst_18953);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_18954)){
var statearr_19075_19130 = state_19040__$1;
(statearr_19075_19130[(1)] = (5));

} else {
var statearr_19076_19131 = state_19040__$1;
(statearr_19076_19131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (23))){
var inst_18999 = (state_19040[(14)]);
var inst_19005 = (inst_18999 == null);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_19005)){
var statearr_19077_19132 = state_19040__$1;
(statearr_19077_19132[(1)] = (26));

} else {
var statearr_19078_19133 = state_19040__$1;
(statearr_19078_19133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (35))){
var inst_19025 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
if(cljs.core.truth_(inst_19025)){
var statearr_19079_19134 = state_19040__$1;
(statearr_19079_19134[(1)] = (36));

} else {
var statearr_19080_19135 = state_19040__$1;
(statearr_19080_19135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (19))){
var inst_18970 = (state_19040[(7)]);
var inst_18989 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18970);
var state_19040__$1 = state_19040;
var statearr_19081_19136 = state_19040__$1;
(statearr_19081_19136[(2)] = inst_18989);

(statearr_19081_19136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (11))){
var inst_18970 = (state_19040[(7)]);
var inst_18974 = (inst_18970 == null);
var inst_18975 = cljs.core.not.call(null,inst_18974);
var state_19040__$1 = state_19040;
if(inst_18975){
var statearr_19082_19137 = state_19040__$1;
(statearr_19082_19137[(1)] = (13));

} else {
var statearr_19083_19138 = state_19040__$1;
(statearr_19083_19138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (9))){
var inst_18946 = (state_19040[(8)]);
var state_19040__$1 = state_19040;
var statearr_19084_19139 = state_19040__$1;
(statearr_19084_19139[(2)] = inst_18946);

(statearr_19084_19139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (5))){
var state_19040__$1 = state_19040;
var statearr_19085_19140 = state_19040__$1;
(statearr_19085_19140[(2)] = true);

(statearr_19085_19140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (14))){
var state_19040__$1 = state_19040;
var statearr_19086_19141 = state_19040__$1;
(statearr_19086_19141[(2)] = false);

(statearr_19086_19141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (26))){
var inst_19000 = (state_19040[(9)]);
var inst_19007 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19000);
var state_19040__$1 = state_19040;
var statearr_19087_19142 = state_19040__$1;
(statearr_19087_19142[(2)] = inst_19007);

(statearr_19087_19142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (16))){
var state_19040__$1 = state_19040;
var statearr_19088_19143 = state_19040__$1;
(statearr_19088_19143[(2)] = true);

(statearr_19088_19143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (38))){
var inst_19030 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19089_19144 = state_19040__$1;
(statearr_19089_19144[(2)] = inst_19030);

(statearr_19089_19144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (30))){
var inst_19000 = (state_19040[(9)]);
var inst_18993 = (state_19040[(10)]);
var inst_18994 = (state_19040[(13)]);
var inst_19017 = cljs.core.empty_QMARK_.call(null,inst_18993);
var inst_19018 = inst_18994.call(null,inst_19000);
var inst_19019 = cljs.core.not.call(null,inst_19018);
var inst_19020 = (inst_19017) && (inst_19019);
var state_19040__$1 = state_19040;
var statearr_19090_19145 = state_19040__$1;
(statearr_19090_19145[(2)] = inst_19020);

(statearr_19090_19145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (10))){
var inst_18946 = (state_19040[(8)]);
var inst_18966 = (state_19040[(2)]);
var inst_18967 = cljs.core.get.call(null,inst_18966,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18968 = cljs.core.get.call(null,inst_18966,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18969 = cljs.core.get.call(null,inst_18966,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18970 = inst_18946;
var state_19040__$1 = (function (){var statearr_19091 = state_19040;
(statearr_19091[(16)] = inst_18969);

(statearr_19091[(7)] = inst_18970);

(statearr_19091[(17)] = inst_18967);

(statearr_19091[(18)] = inst_18968);

return statearr_19091;
})();
var statearr_19092_19146 = state_19040__$1;
(statearr_19092_19146[(2)] = null);

(statearr_19092_19146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (18))){
var inst_18984 = (state_19040[(2)]);
var state_19040__$1 = state_19040;
var statearr_19093_19147 = state_19040__$1;
(statearr_19093_19147[(2)] = inst_18984);

(statearr_19093_19147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (37))){
var state_19040__$1 = state_19040;
var statearr_19094_19148 = state_19040__$1;
(statearr_19094_19148[(2)] = null);

(statearr_19094_19148[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19041 === (8))){
var inst_18946 = (state_19040[(8)]);
var inst_18963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18946);
var state_19040__$1 = state_19040;
var statearr_19095_19149 = state_19040__$1;
(statearr_19095_19149[(2)] = inst_18963);

(statearr_19095_19149[(1)] = (10));


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
});})(c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10262__auto__,c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10263__auto__ = null;
var cljs$core$async$mix_$_state_machine__10263__auto____0 = (function (){
var statearr_19099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19099[(0)] = cljs$core$async$mix_$_state_machine__10263__auto__);

(statearr_19099[(1)] = (1));

return statearr_19099;
});
var cljs$core$async$mix_$_state_machine__10263__auto____1 = (function (state_19040){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19100){if((e19100 instanceof Object)){
var ex__10266__auto__ = e19100;
var statearr_19101_19150 = state_19040;
(statearr_19101_19150[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19040;
state_19040 = G__19151;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10263__auto__ = function(state_19040){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10263__auto____1.call(this,state_19040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10263__auto____0;
cljs$core$async$mix_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10263__auto____1;
return cljs$core$async$mix_$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10329__auto__ = (function (){var statearr_19102 = f__10328__auto__.call(null);
(statearr_19102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19103);

return statearr_19102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19152 = [];
var len__6152__auto___19155 = arguments.length;
var i__6153__auto___19156 = (0);
while(true){
if((i__6153__auto___19156 < len__6152__auto___19155)){
args19152.push((arguments[i__6153__auto___19156]));

var G__19157 = (i__6153__auto___19156 + (1));
i__6153__auto___19156 = G__19157;
continue;
} else {
}
break;
}

var G__19154 = args19152.length;
switch (G__19154) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19152.length)].join('')));

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
var args19160 = [];
var len__6152__auto___19285 = arguments.length;
var i__6153__auto___19286 = (0);
while(true){
if((i__6153__auto___19286 < len__6152__auto___19285)){
args19160.push((arguments[i__6153__auto___19286]));

var G__19287 = (i__6153__auto___19286 + (1));
i__6153__auto___19286 = G__19287;
continue;
} else {
}
break;
}

var G__19162 = args19160.length;
switch (G__19162) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19160.length)].join('')));

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
return (function (p1__19159_SHARP_){
if(cljs.core.truth_(p1__19159_SHARP_.call(null,topic))){
return p1__19159_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19159_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19163 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19164){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19164 = meta19164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19165,meta19164__$1){
var self__ = this;
var _19165__$1 = this;
return (new cljs.core.async.t_cljs$core$async19163(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19164__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19165){
var self__ = this;
var _19165__$1 = this;
return self__.meta19164;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19164","meta19164",-186414245,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19163";

cljs.core.async.t_cljs$core$async19163.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19163");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19163 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19164){
return (new cljs.core.async.t_cljs$core$async19163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19164));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19163(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10327__auto___19289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19289,mults,ensure_mult,p){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19289,mults,ensure_mult,p){
return (function (state_19237){
var state_val_19238 = (state_19237[(1)]);
if((state_val_19238 === (7))){
var inst_19233 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19239_19290 = state_19237__$1;
(statearr_19239_19290[(2)] = inst_19233);

(statearr_19239_19290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (20))){
var state_19237__$1 = state_19237;
var statearr_19240_19291 = state_19237__$1;
(statearr_19240_19291[(2)] = null);

(statearr_19240_19291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (1))){
var state_19237__$1 = state_19237;
var statearr_19241_19292 = state_19237__$1;
(statearr_19241_19292[(2)] = null);

(statearr_19241_19292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (24))){
var inst_19216 = (state_19237[(7)]);
var inst_19225 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19216);
var state_19237__$1 = state_19237;
var statearr_19242_19293 = state_19237__$1;
(statearr_19242_19293[(2)] = inst_19225);

(statearr_19242_19293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (4))){
var inst_19168 = (state_19237[(8)]);
var inst_19168__$1 = (state_19237[(2)]);
var inst_19169 = (inst_19168__$1 == null);
var state_19237__$1 = (function (){var statearr_19243 = state_19237;
(statearr_19243[(8)] = inst_19168__$1);

return statearr_19243;
})();
if(cljs.core.truth_(inst_19169)){
var statearr_19244_19294 = state_19237__$1;
(statearr_19244_19294[(1)] = (5));

} else {
var statearr_19245_19295 = state_19237__$1;
(statearr_19245_19295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (15))){
var inst_19210 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19246_19296 = state_19237__$1;
(statearr_19246_19296[(2)] = inst_19210);

(statearr_19246_19296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (21))){
var inst_19230 = (state_19237[(2)]);
var state_19237__$1 = (function (){var statearr_19247 = state_19237;
(statearr_19247[(9)] = inst_19230);

return statearr_19247;
})();
var statearr_19248_19297 = state_19237__$1;
(statearr_19248_19297[(2)] = null);

(statearr_19248_19297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (13))){
var inst_19192 = (state_19237[(10)]);
var inst_19194 = cljs.core.chunked_seq_QMARK_.call(null,inst_19192);
var state_19237__$1 = state_19237;
if(inst_19194){
var statearr_19249_19298 = state_19237__$1;
(statearr_19249_19298[(1)] = (16));

} else {
var statearr_19250_19299 = state_19237__$1;
(statearr_19250_19299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (22))){
var inst_19222 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
if(cljs.core.truth_(inst_19222)){
var statearr_19251_19300 = state_19237__$1;
(statearr_19251_19300[(1)] = (23));

} else {
var statearr_19252_19301 = state_19237__$1;
(statearr_19252_19301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (6))){
var inst_19168 = (state_19237[(8)]);
var inst_19216 = (state_19237[(7)]);
var inst_19218 = (state_19237[(11)]);
var inst_19216__$1 = topic_fn.call(null,inst_19168);
var inst_19217 = cljs.core.deref.call(null,mults);
var inst_19218__$1 = cljs.core.get.call(null,inst_19217,inst_19216__$1);
var state_19237__$1 = (function (){var statearr_19253 = state_19237;
(statearr_19253[(7)] = inst_19216__$1);

(statearr_19253[(11)] = inst_19218__$1);

return statearr_19253;
})();
if(cljs.core.truth_(inst_19218__$1)){
var statearr_19254_19302 = state_19237__$1;
(statearr_19254_19302[(1)] = (19));

} else {
var statearr_19255_19303 = state_19237__$1;
(statearr_19255_19303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (25))){
var inst_19227 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19256_19304 = state_19237__$1;
(statearr_19256_19304[(2)] = inst_19227);

(statearr_19256_19304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (17))){
var inst_19192 = (state_19237[(10)]);
var inst_19201 = cljs.core.first.call(null,inst_19192);
var inst_19202 = cljs.core.async.muxch_STAR_.call(null,inst_19201);
var inst_19203 = cljs.core.async.close_BANG_.call(null,inst_19202);
var inst_19204 = cljs.core.next.call(null,inst_19192);
var inst_19178 = inst_19204;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19237__$1 = (function (){var statearr_19257 = state_19237;
(statearr_19257[(12)] = inst_19203);

(statearr_19257[(13)] = inst_19179);

(statearr_19257[(14)] = inst_19181);

(statearr_19257[(15)] = inst_19178);

(statearr_19257[(16)] = inst_19180);

return statearr_19257;
})();
var statearr_19258_19305 = state_19237__$1;
(statearr_19258_19305[(2)] = null);

(statearr_19258_19305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (3))){
var inst_19235 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19237__$1,inst_19235);
} else {
if((state_val_19238 === (12))){
var inst_19212 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19259_19306 = state_19237__$1;
(statearr_19259_19306[(2)] = inst_19212);

(statearr_19259_19306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (2))){
var state_19237__$1 = state_19237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19237__$1,(4),ch);
} else {
if((state_val_19238 === (23))){
var state_19237__$1 = state_19237;
var statearr_19260_19307 = state_19237__$1;
(statearr_19260_19307[(2)] = null);

(statearr_19260_19307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (19))){
var inst_19168 = (state_19237[(8)]);
var inst_19218 = (state_19237[(11)]);
var inst_19220 = cljs.core.async.muxch_STAR_.call(null,inst_19218);
var state_19237__$1 = state_19237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19237__$1,(22),inst_19220,inst_19168);
} else {
if((state_val_19238 === (11))){
var inst_19178 = (state_19237[(15)]);
var inst_19192 = (state_19237[(10)]);
var inst_19192__$1 = cljs.core.seq.call(null,inst_19178);
var state_19237__$1 = (function (){var statearr_19261 = state_19237;
(statearr_19261[(10)] = inst_19192__$1);

return statearr_19261;
})();
if(inst_19192__$1){
var statearr_19262_19308 = state_19237__$1;
(statearr_19262_19308[(1)] = (13));

} else {
var statearr_19263_19309 = state_19237__$1;
(statearr_19263_19309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (9))){
var inst_19214 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19264_19310 = state_19237__$1;
(statearr_19264_19310[(2)] = inst_19214);

(statearr_19264_19310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (5))){
var inst_19175 = cljs.core.deref.call(null,mults);
var inst_19176 = cljs.core.vals.call(null,inst_19175);
var inst_19177 = cljs.core.seq.call(null,inst_19176);
var inst_19178 = inst_19177;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19237__$1 = (function (){var statearr_19265 = state_19237;
(statearr_19265[(13)] = inst_19179);

(statearr_19265[(14)] = inst_19181);

(statearr_19265[(15)] = inst_19178);

(statearr_19265[(16)] = inst_19180);

return statearr_19265;
})();
var statearr_19266_19311 = state_19237__$1;
(statearr_19266_19311[(2)] = null);

(statearr_19266_19311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (14))){
var state_19237__$1 = state_19237;
var statearr_19270_19312 = state_19237__$1;
(statearr_19270_19312[(2)] = null);

(statearr_19270_19312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (16))){
var inst_19192 = (state_19237[(10)]);
var inst_19196 = cljs.core.chunk_first.call(null,inst_19192);
var inst_19197 = cljs.core.chunk_rest.call(null,inst_19192);
var inst_19198 = cljs.core.count.call(null,inst_19196);
var inst_19178 = inst_19197;
var inst_19179 = inst_19196;
var inst_19180 = inst_19198;
var inst_19181 = (0);
var state_19237__$1 = (function (){var statearr_19271 = state_19237;
(statearr_19271[(13)] = inst_19179);

(statearr_19271[(14)] = inst_19181);

(statearr_19271[(15)] = inst_19178);

(statearr_19271[(16)] = inst_19180);

return statearr_19271;
})();
var statearr_19272_19313 = state_19237__$1;
(statearr_19272_19313[(2)] = null);

(statearr_19272_19313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (10))){
var inst_19179 = (state_19237[(13)]);
var inst_19181 = (state_19237[(14)]);
var inst_19178 = (state_19237[(15)]);
var inst_19180 = (state_19237[(16)]);
var inst_19186 = cljs.core._nth.call(null,inst_19179,inst_19181);
var inst_19187 = cljs.core.async.muxch_STAR_.call(null,inst_19186);
var inst_19188 = cljs.core.async.close_BANG_.call(null,inst_19187);
var inst_19189 = (inst_19181 + (1));
var tmp19267 = inst_19179;
var tmp19268 = inst_19178;
var tmp19269 = inst_19180;
var inst_19178__$1 = tmp19268;
var inst_19179__$1 = tmp19267;
var inst_19180__$1 = tmp19269;
var inst_19181__$1 = inst_19189;
var state_19237__$1 = (function (){var statearr_19273 = state_19237;
(statearr_19273[(13)] = inst_19179__$1);

(statearr_19273[(14)] = inst_19181__$1);

(statearr_19273[(15)] = inst_19178__$1);

(statearr_19273[(17)] = inst_19188);

(statearr_19273[(16)] = inst_19180__$1);

return statearr_19273;
})();
var statearr_19274_19314 = state_19237__$1;
(statearr_19274_19314[(2)] = null);

(statearr_19274_19314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (18))){
var inst_19207 = (state_19237[(2)]);
var state_19237__$1 = state_19237;
var statearr_19275_19315 = state_19237__$1;
(statearr_19275_19315[(2)] = inst_19207);

(statearr_19275_19315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19238 === (8))){
var inst_19181 = (state_19237[(14)]);
var inst_19180 = (state_19237[(16)]);
var inst_19183 = (inst_19181 < inst_19180);
var inst_19184 = inst_19183;
var state_19237__$1 = state_19237;
if(cljs.core.truth_(inst_19184)){
var statearr_19276_19316 = state_19237__$1;
(statearr_19276_19316[(1)] = (10));

} else {
var statearr_19277_19317 = state_19237__$1;
(statearr_19277_19317[(1)] = (11));

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
});})(c__10327__auto___19289,mults,ensure_mult,p))
;
return ((function (switch__10262__auto__,c__10327__auto___19289,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19281[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19281[(1)] = (1));

return statearr_19281;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19237){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19282){if((e19282 instanceof Object)){
var ex__10266__auto__ = e19282;
var statearr_19283_19318 = state_19237;
(statearr_19283_19318[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19319 = state_19237;
state_19237 = G__19319;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19289,mults,ensure_mult,p))
})();
var state__10329__auto__ = (function (){var statearr_19284 = f__10328__auto__.call(null);
(statearr_19284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19289);

return statearr_19284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19289,mults,ensure_mult,p))
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
var args19320 = [];
var len__6152__auto___19323 = arguments.length;
var i__6153__auto___19324 = (0);
while(true){
if((i__6153__auto___19324 < len__6152__auto___19323)){
args19320.push((arguments[i__6153__auto___19324]));

var G__19325 = (i__6153__auto___19324 + (1));
i__6153__auto___19324 = G__19325;
continue;
} else {
}
break;
}

var G__19322 = args19320.length;
switch (G__19322) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19320.length)].join('')));

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
var args19327 = [];
var len__6152__auto___19330 = arguments.length;
var i__6153__auto___19331 = (0);
while(true){
if((i__6153__auto___19331 < len__6152__auto___19330)){
args19327.push((arguments[i__6153__auto___19331]));

var G__19332 = (i__6153__auto___19331 + (1));
i__6153__auto___19331 = G__19332;
continue;
} else {
}
break;
}

var G__19329 = args19327.length;
switch (G__19329) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19327.length)].join('')));

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
var args19334 = [];
var len__6152__auto___19405 = arguments.length;
var i__6153__auto___19406 = (0);
while(true){
if((i__6153__auto___19406 < len__6152__auto___19405)){
args19334.push((arguments[i__6153__auto___19406]));

var G__19407 = (i__6153__auto___19406 + (1));
i__6153__auto___19406 = G__19407;
continue;
} else {
}
break;
}

var G__19336 = args19334.length;
switch (G__19336) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19334.length)].join('')));

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
var c__10327__auto___19409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19375){
var state_val_19376 = (state_19375[(1)]);
if((state_val_19376 === (7))){
var state_19375__$1 = state_19375;
var statearr_19377_19410 = state_19375__$1;
(statearr_19377_19410[(2)] = null);

(statearr_19377_19410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (1))){
var state_19375__$1 = state_19375;
var statearr_19378_19411 = state_19375__$1;
(statearr_19378_19411[(2)] = null);

(statearr_19378_19411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (4))){
var inst_19339 = (state_19375[(7)]);
var inst_19341 = (inst_19339 < cnt);
var state_19375__$1 = state_19375;
if(cljs.core.truth_(inst_19341)){
var statearr_19379_19412 = state_19375__$1;
(statearr_19379_19412[(1)] = (6));

} else {
var statearr_19380_19413 = state_19375__$1;
(statearr_19380_19413[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (15))){
var inst_19371 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
var statearr_19381_19414 = state_19375__$1;
(statearr_19381_19414[(2)] = inst_19371);

(statearr_19381_19414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (13))){
var inst_19364 = cljs.core.async.close_BANG_.call(null,out);
var state_19375__$1 = state_19375;
var statearr_19382_19415 = state_19375__$1;
(statearr_19382_19415[(2)] = inst_19364);

(statearr_19382_19415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (6))){
var state_19375__$1 = state_19375;
var statearr_19383_19416 = state_19375__$1;
(statearr_19383_19416[(2)] = null);

(statearr_19383_19416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (3))){
var inst_19373 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19375__$1,inst_19373);
} else {
if((state_val_19376 === (12))){
var inst_19361 = (state_19375[(8)]);
var inst_19361__$1 = (state_19375[(2)]);
var inst_19362 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19361__$1);
var state_19375__$1 = (function (){var statearr_19384 = state_19375;
(statearr_19384[(8)] = inst_19361__$1);

return statearr_19384;
})();
if(cljs.core.truth_(inst_19362)){
var statearr_19385_19417 = state_19375__$1;
(statearr_19385_19417[(1)] = (13));

} else {
var statearr_19386_19418 = state_19375__$1;
(statearr_19386_19418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (2))){
var inst_19338 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19339 = (0);
var state_19375__$1 = (function (){var statearr_19387 = state_19375;
(statearr_19387[(9)] = inst_19338);

(statearr_19387[(7)] = inst_19339);

return statearr_19387;
})();
var statearr_19388_19419 = state_19375__$1;
(statearr_19388_19419[(2)] = null);

(statearr_19388_19419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (11))){
var inst_19339 = (state_19375[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19375,(10),Object,null,(9));
var inst_19348 = chs__$1.call(null,inst_19339);
var inst_19349 = done.call(null,inst_19339);
var inst_19350 = cljs.core.async.take_BANG_.call(null,inst_19348,inst_19349);
var state_19375__$1 = state_19375;
var statearr_19389_19420 = state_19375__$1;
(statearr_19389_19420[(2)] = inst_19350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (9))){
var inst_19339 = (state_19375[(7)]);
var inst_19352 = (state_19375[(2)]);
var inst_19353 = (inst_19339 + (1));
var inst_19339__$1 = inst_19353;
var state_19375__$1 = (function (){var statearr_19390 = state_19375;
(statearr_19390[(10)] = inst_19352);

(statearr_19390[(7)] = inst_19339__$1);

return statearr_19390;
})();
var statearr_19391_19421 = state_19375__$1;
(statearr_19391_19421[(2)] = null);

(statearr_19391_19421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (5))){
var inst_19359 = (state_19375[(2)]);
var state_19375__$1 = (function (){var statearr_19392 = state_19375;
(statearr_19392[(11)] = inst_19359);

return statearr_19392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19375__$1,(12),dchan);
} else {
if((state_val_19376 === (14))){
var inst_19361 = (state_19375[(8)]);
var inst_19366 = cljs.core.apply.call(null,f,inst_19361);
var state_19375__$1 = state_19375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19375__$1,(16),out,inst_19366);
} else {
if((state_val_19376 === (16))){
var inst_19368 = (state_19375[(2)]);
var state_19375__$1 = (function (){var statearr_19393 = state_19375;
(statearr_19393[(12)] = inst_19368);

return statearr_19393;
})();
var statearr_19394_19422 = state_19375__$1;
(statearr_19394_19422[(2)] = null);

(statearr_19394_19422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (10))){
var inst_19343 = (state_19375[(2)]);
var inst_19344 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19375__$1 = (function (){var statearr_19395 = state_19375;
(statearr_19395[(13)] = inst_19343);

return statearr_19395;
})();
var statearr_19396_19423 = state_19375__$1;
(statearr_19396_19423[(2)] = inst_19344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19376 === (8))){
var inst_19357 = (state_19375[(2)]);
var state_19375__$1 = state_19375;
var statearr_19397_19424 = state_19375__$1;
(statearr_19397_19424[(2)] = inst_19357);

(statearr_19397_19424[(1)] = (5));


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
});})(c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10262__auto__,c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19401[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19401[(1)] = (1));

return statearr_19401;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19375){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19402){if((e19402 instanceof Object)){
var ex__10266__auto__ = e19402;
var statearr_19403_19425 = state_19375;
(statearr_19403_19425[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19426 = state_19375;
state_19375 = G__19426;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10329__auto__ = (function (){var statearr_19404 = f__10328__auto__.call(null);
(statearr_19404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19409);

return statearr_19404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19409,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19428 = [];
var len__6152__auto___19484 = arguments.length;
var i__6153__auto___19485 = (0);
while(true){
if((i__6153__auto___19485 < len__6152__auto___19484)){
args19428.push((arguments[i__6153__auto___19485]));

var G__19486 = (i__6153__auto___19485 + (1));
i__6153__auto___19485 = G__19486;
continue;
} else {
}
break;
}

var G__19430 = args19428.length;
switch (G__19430) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19428.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___19488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19488,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19488,out){
return (function (state_19460){
var state_val_19461 = (state_19460[(1)]);
if((state_val_19461 === (7))){
var inst_19440 = (state_19460[(7)]);
var inst_19439 = (state_19460[(8)]);
var inst_19439__$1 = (state_19460[(2)]);
var inst_19440__$1 = cljs.core.nth.call(null,inst_19439__$1,(0),null);
var inst_19441 = cljs.core.nth.call(null,inst_19439__$1,(1),null);
var inst_19442 = (inst_19440__$1 == null);
var state_19460__$1 = (function (){var statearr_19462 = state_19460;
(statearr_19462[(7)] = inst_19440__$1);

(statearr_19462[(9)] = inst_19441);

(statearr_19462[(8)] = inst_19439__$1);

return statearr_19462;
})();
if(cljs.core.truth_(inst_19442)){
var statearr_19463_19489 = state_19460__$1;
(statearr_19463_19489[(1)] = (8));

} else {
var statearr_19464_19490 = state_19460__$1;
(statearr_19464_19490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (1))){
var inst_19431 = cljs.core.vec.call(null,chs);
var inst_19432 = inst_19431;
var state_19460__$1 = (function (){var statearr_19465 = state_19460;
(statearr_19465[(10)] = inst_19432);

return statearr_19465;
})();
var statearr_19466_19491 = state_19460__$1;
(statearr_19466_19491[(2)] = null);

(statearr_19466_19491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (4))){
var inst_19432 = (state_19460[(10)]);
var state_19460__$1 = state_19460;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19460__$1,(7),inst_19432);
} else {
if((state_val_19461 === (6))){
var inst_19456 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
var statearr_19467_19492 = state_19460__$1;
(statearr_19467_19492[(2)] = inst_19456);

(statearr_19467_19492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (3))){
var inst_19458 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19460__$1,inst_19458);
} else {
if((state_val_19461 === (2))){
var inst_19432 = (state_19460[(10)]);
var inst_19434 = cljs.core.count.call(null,inst_19432);
var inst_19435 = (inst_19434 > (0));
var state_19460__$1 = state_19460;
if(cljs.core.truth_(inst_19435)){
var statearr_19469_19493 = state_19460__$1;
(statearr_19469_19493[(1)] = (4));

} else {
var statearr_19470_19494 = state_19460__$1;
(statearr_19470_19494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (11))){
var inst_19432 = (state_19460[(10)]);
var inst_19449 = (state_19460[(2)]);
var tmp19468 = inst_19432;
var inst_19432__$1 = tmp19468;
var state_19460__$1 = (function (){var statearr_19471 = state_19460;
(statearr_19471[(11)] = inst_19449);

(statearr_19471[(10)] = inst_19432__$1);

return statearr_19471;
})();
var statearr_19472_19495 = state_19460__$1;
(statearr_19472_19495[(2)] = null);

(statearr_19472_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (9))){
var inst_19440 = (state_19460[(7)]);
var state_19460__$1 = state_19460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19460__$1,(11),out,inst_19440);
} else {
if((state_val_19461 === (5))){
var inst_19454 = cljs.core.async.close_BANG_.call(null,out);
var state_19460__$1 = state_19460;
var statearr_19473_19496 = state_19460__$1;
(statearr_19473_19496[(2)] = inst_19454);

(statearr_19473_19496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (10))){
var inst_19452 = (state_19460[(2)]);
var state_19460__$1 = state_19460;
var statearr_19474_19497 = state_19460__$1;
(statearr_19474_19497[(2)] = inst_19452);

(statearr_19474_19497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19461 === (8))){
var inst_19440 = (state_19460[(7)]);
var inst_19432 = (state_19460[(10)]);
var inst_19441 = (state_19460[(9)]);
var inst_19439 = (state_19460[(8)]);
var inst_19444 = (function (){var cs = inst_19432;
var vec__19437 = inst_19439;
var v = inst_19440;
var c = inst_19441;
return ((function (cs,vec__19437,v,c,inst_19440,inst_19432,inst_19441,inst_19439,state_val_19461,c__10327__auto___19488,out){
return (function (p1__19427_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19427_SHARP_);
});
;})(cs,vec__19437,v,c,inst_19440,inst_19432,inst_19441,inst_19439,state_val_19461,c__10327__auto___19488,out))
})();
var inst_19445 = cljs.core.filterv.call(null,inst_19444,inst_19432);
var inst_19432__$1 = inst_19445;
var state_19460__$1 = (function (){var statearr_19475 = state_19460;
(statearr_19475[(10)] = inst_19432__$1);

return statearr_19475;
})();
var statearr_19476_19498 = state_19460__$1;
(statearr_19476_19498[(2)] = null);

(statearr_19476_19498[(1)] = (2));


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
});})(c__10327__auto___19488,out))
;
return ((function (switch__10262__auto__,c__10327__auto___19488,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19480[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19480[(1)] = (1));

return statearr_19480;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19460){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object)){
var ex__10266__auto__ = e19481;
var statearr_19482_19499 = state_19460;
(statearr_19482_19499[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19500 = state_19460;
state_19460 = G__19500;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19488,out))
})();
var state__10329__auto__ = (function (){var statearr_19483 = f__10328__auto__.call(null);
(statearr_19483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19488);

return statearr_19483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19488,out))
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
var args19501 = [];
var len__6152__auto___19550 = arguments.length;
var i__6153__auto___19551 = (0);
while(true){
if((i__6153__auto___19551 < len__6152__auto___19550)){
args19501.push((arguments[i__6153__auto___19551]));

var G__19552 = (i__6153__auto___19551 + (1));
i__6153__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19503 = args19501.length;
switch (G__19503) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19501.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___19554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19554,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19554,out){
return (function (state_19527){
var state_val_19528 = (state_19527[(1)]);
if((state_val_19528 === (7))){
var inst_19509 = (state_19527[(7)]);
var inst_19509__$1 = (state_19527[(2)]);
var inst_19510 = (inst_19509__$1 == null);
var inst_19511 = cljs.core.not.call(null,inst_19510);
var state_19527__$1 = (function (){var statearr_19529 = state_19527;
(statearr_19529[(7)] = inst_19509__$1);

return statearr_19529;
})();
if(inst_19511){
var statearr_19530_19555 = state_19527__$1;
(statearr_19530_19555[(1)] = (8));

} else {
var statearr_19531_19556 = state_19527__$1;
(statearr_19531_19556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (1))){
var inst_19504 = (0);
var state_19527__$1 = (function (){var statearr_19532 = state_19527;
(statearr_19532[(8)] = inst_19504);

return statearr_19532;
})();
var statearr_19533_19557 = state_19527__$1;
(statearr_19533_19557[(2)] = null);

(statearr_19533_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (4))){
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19527__$1,(7),ch);
} else {
if((state_val_19528 === (6))){
var inst_19522 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19534_19558 = state_19527__$1;
(statearr_19534_19558[(2)] = inst_19522);

(statearr_19534_19558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (3))){
var inst_19524 = (state_19527[(2)]);
var inst_19525 = cljs.core.async.close_BANG_.call(null,out);
var state_19527__$1 = (function (){var statearr_19535 = state_19527;
(statearr_19535[(9)] = inst_19524);

return statearr_19535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19527__$1,inst_19525);
} else {
if((state_val_19528 === (2))){
var inst_19504 = (state_19527[(8)]);
var inst_19506 = (inst_19504 < n);
var state_19527__$1 = state_19527;
if(cljs.core.truth_(inst_19506)){
var statearr_19536_19559 = state_19527__$1;
(statearr_19536_19559[(1)] = (4));

} else {
var statearr_19537_19560 = state_19527__$1;
(statearr_19537_19560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (11))){
var inst_19504 = (state_19527[(8)]);
var inst_19514 = (state_19527[(2)]);
var inst_19515 = (inst_19504 + (1));
var inst_19504__$1 = inst_19515;
var state_19527__$1 = (function (){var statearr_19538 = state_19527;
(statearr_19538[(8)] = inst_19504__$1);

(statearr_19538[(10)] = inst_19514);

return statearr_19538;
})();
var statearr_19539_19561 = state_19527__$1;
(statearr_19539_19561[(2)] = null);

(statearr_19539_19561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (9))){
var state_19527__$1 = state_19527;
var statearr_19540_19562 = state_19527__$1;
(statearr_19540_19562[(2)] = null);

(statearr_19540_19562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (5))){
var state_19527__$1 = state_19527;
var statearr_19541_19563 = state_19527__$1;
(statearr_19541_19563[(2)] = null);

(statearr_19541_19563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (10))){
var inst_19519 = (state_19527[(2)]);
var state_19527__$1 = state_19527;
var statearr_19542_19564 = state_19527__$1;
(statearr_19542_19564[(2)] = inst_19519);

(statearr_19542_19564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19528 === (8))){
var inst_19509 = (state_19527[(7)]);
var state_19527__$1 = state_19527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19527__$1,(11),out,inst_19509);
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
});})(c__10327__auto___19554,out))
;
return ((function (switch__10262__auto__,c__10327__auto___19554,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19546[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19546[(1)] = (1));

return statearr_19546;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19527){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19547){if((e19547 instanceof Object)){
var ex__10266__auto__ = e19547;
var statearr_19548_19565 = state_19527;
(statearr_19548_19565[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19566 = state_19527;
state_19527 = G__19566;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19554,out))
})();
var state__10329__auto__ = (function (){var statearr_19549 = f__10328__auto__.call(null);
(statearr_19549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19554);

return statearr_19549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19554,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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
cljs.core.async.t_cljs$core$async19574 = (function (map_LT_,f,ch,meta19575){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19575 = meta19575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19576,meta19575__$1){
var self__ = this;
var _19576__$1 = this;
return (new cljs.core.async.t_cljs$core$async19574(self__.map_LT_,self__.f,self__.ch,meta19575__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19577 = (function (map_LT_,f,ch,meta19575,_,fn1,meta19578){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19575 = meta19575;
this._ = _;
this.fn1 = fn1;
this.meta19578 = meta19578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19579,meta19578__$1){
var self__ = this;
var _19579__$1 = this;
return (new cljs.core.async.t_cljs$core$async19577(self__.map_LT_,self__.f,self__.ch,self__.meta19575,self__._,self__.fn1,meta19578__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19579){
var self__ = this;
var _19579__$1 = this;
return self__.meta19578;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19567_SHARP_){
return f1.call(null,(((p1__19567_SHARP_ == null))?null:self__.f.call(null,p1__19567_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19577.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19575","meta19575",1417900025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19574","cljs.core.async/t_cljs$core$async19574",476083233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19578","meta19578",494241997,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19577";

cljs.core.async.t_cljs$core$async19577.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19577");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19577 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19577(map_LT___$1,f__$1,ch__$1,meta19575__$1,___$2,fn1__$1,meta19578){
return (new cljs.core.async.t_cljs$core$async19577(map_LT___$1,f__$1,ch__$1,meta19575__$1,___$2,fn1__$1,meta19578));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19577(self__.map_LT_,self__.f,self__.ch,self__.meta19575,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19575","meta19575",1417900025,null)], null);
});

cljs.core.async.t_cljs$core$async19574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19574";

cljs.core.async.t_cljs$core$async19574.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19574");
});

cljs.core.async.__GT_t_cljs$core$async19574 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19574(map_LT___$1,f__$1,ch__$1,meta19575){
return (new cljs.core.async.t_cljs$core$async19574(map_LT___$1,f__$1,ch__$1,meta19575));
});

}

return (new cljs.core.async.t_cljs$core$async19574(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19583 = (function (map_GT_,f,ch,meta19584){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19584 = meta19584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19585,meta19584__$1){
var self__ = this;
var _19585__$1 = this;
return (new cljs.core.async.t_cljs$core$async19583(self__.map_GT_,self__.f,self__.ch,meta19584__$1));
});

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19585){
var self__ = this;
var _19585__$1 = this;
return self__.meta19584;
});

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19583.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19584","meta19584",499158288,null)], null);
});

cljs.core.async.t_cljs$core$async19583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19583";

cljs.core.async.t_cljs$core$async19583.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19583");
});

cljs.core.async.__GT_t_cljs$core$async19583 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19583(map_GT___$1,f__$1,ch__$1,meta19584){
return (new cljs.core.async.t_cljs$core$async19583(map_GT___$1,f__$1,ch__$1,meta19584));
});

}

return (new cljs.core.async.t_cljs$core$async19583(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19589 = (function (filter_GT_,p,ch,meta19590){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19590 = meta19590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19591,meta19590__$1){
var self__ = this;
var _19591__$1 = this;
return (new cljs.core.async.t_cljs$core$async19589(self__.filter_GT_,self__.p,self__.ch,meta19590__$1));
});

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19591){
var self__ = this;
var _19591__$1 = this;
return self__.meta19590;
});

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19589.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19590","meta19590",-665334490,null)], null);
});

cljs.core.async.t_cljs$core$async19589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19589";

cljs.core.async.t_cljs$core$async19589.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19589");
});

cljs.core.async.__GT_t_cljs$core$async19589 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19589(filter_GT___$1,p__$1,ch__$1,meta19590){
return (new cljs.core.async.t_cljs$core$async19589(filter_GT___$1,p__$1,ch__$1,meta19590));
});

}

return (new cljs.core.async.t_cljs$core$async19589(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19592 = [];
var len__6152__auto___19636 = arguments.length;
var i__6153__auto___19637 = (0);
while(true){
if((i__6153__auto___19637 < len__6152__auto___19636)){
args19592.push((arguments[i__6153__auto___19637]));

var G__19638 = (i__6153__auto___19637 + (1));
i__6153__auto___19637 = G__19638;
continue;
} else {
}
break;
}

var G__19594 = args19592.length;
switch (G__19594) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19592.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___19640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19640,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19640,out){
return (function (state_19615){
var state_val_19616 = (state_19615[(1)]);
if((state_val_19616 === (7))){
var inst_19611 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
var statearr_19617_19641 = state_19615__$1;
(statearr_19617_19641[(2)] = inst_19611);

(statearr_19617_19641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (1))){
var state_19615__$1 = state_19615;
var statearr_19618_19642 = state_19615__$1;
(statearr_19618_19642[(2)] = null);

(statearr_19618_19642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (4))){
var inst_19597 = (state_19615[(7)]);
var inst_19597__$1 = (state_19615[(2)]);
var inst_19598 = (inst_19597__$1 == null);
var state_19615__$1 = (function (){var statearr_19619 = state_19615;
(statearr_19619[(7)] = inst_19597__$1);

return statearr_19619;
})();
if(cljs.core.truth_(inst_19598)){
var statearr_19620_19643 = state_19615__$1;
(statearr_19620_19643[(1)] = (5));

} else {
var statearr_19621_19644 = state_19615__$1;
(statearr_19621_19644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (6))){
var inst_19597 = (state_19615[(7)]);
var inst_19602 = p.call(null,inst_19597);
var state_19615__$1 = state_19615;
if(cljs.core.truth_(inst_19602)){
var statearr_19622_19645 = state_19615__$1;
(statearr_19622_19645[(1)] = (8));

} else {
var statearr_19623_19646 = state_19615__$1;
(statearr_19623_19646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (3))){
var inst_19613 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19615__$1,inst_19613);
} else {
if((state_val_19616 === (2))){
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19615__$1,(4),ch);
} else {
if((state_val_19616 === (11))){
var inst_19605 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
var statearr_19624_19647 = state_19615__$1;
(statearr_19624_19647[(2)] = inst_19605);

(statearr_19624_19647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (9))){
var state_19615__$1 = state_19615;
var statearr_19625_19648 = state_19615__$1;
(statearr_19625_19648[(2)] = null);

(statearr_19625_19648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (5))){
var inst_19600 = cljs.core.async.close_BANG_.call(null,out);
var state_19615__$1 = state_19615;
var statearr_19626_19649 = state_19615__$1;
(statearr_19626_19649[(2)] = inst_19600);

(statearr_19626_19649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (10))){
var inst_19608 = (state_19615[(2)]);
var state_19615__$1 = (function (){var statearr_19627 = state_19615;
(statearr_19627[(8)] = inst_19608);

return statearr_19627;
})();
var statearr_19628_19650 = state_19615__$1;
(statearr_19628_19650[(2)] = null);

(statearr_19628_19650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19616 === (8))){
var inst_19597 = (state_19615[(7)]);
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19615__$1,(11),out,inst_19597);
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
});})(c__10327__auto___19640,out))
;
return ((function (switch__10262__auto__,c__10327__auto___19640,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19632 = [null,null,null,null,null,null,null,null,null];
(statearr_19632[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19632[(1)] = (1));

return statearr_19632;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19615){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19633){if((e19633 instanceof Object)){
var ex__10266__auto__ = e19633;
var statearr_19634_19651 = state_19615;
(statearr_19634_19651[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19652 = state_19615;
state_19615 = G__19652;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19640,out))
})();
var state__10329__auto__ = (function (){var statearr_19635 = f__10328__auto__.call(null);
(statearr_19635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19640);

return statearr_19635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19640,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19653 = [];
var len__6152__auto___19656 = arguments.length;
var i__6153__auto___19657 = (0);
while(true){
if((i__6153__auto___19657 < len__6152__auto___19656)){
args19653.push((arguments[i__6153__auto___19657]));

var G__19658 = (i__6153__auto___19657 + (1));
i__6153__auto___19657 = G__19658;
continue;
} else {
}
break;
}

var G__19655 = args19653.length;
switch (G__19655) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19653.length)].join('')));

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
var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_19825){
var state_val_19826 = (state_19825[(1)]);
if((state_val_19826 === (7))){
var inst_19821 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19827_19868 = state_19825__$1;
(statearr_19827_19868[(2)] = inst_19821);

(statearr_19827_19868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (20))){
var inst_19791 = (state_19825[(7)]);
var inst_19802 = (state_19825[(2)]);
var inst_19803 = cljs.core.next.call(null,inst_19791);
var inst_19777 = inst_19803;
var inst_19778 = null;
var inst_19779 = (0);
var inst_19780 = (0);
var state_19825__$1 = (function (){var statearr_19828 = state_19825;
(statearr_19828[(8)] = inst_19802);

(statearr_19828[(9)] = inst_19778);

(statearr_19828[(10)] = inst_19779);

(statearr_19828[(11)] = inst_19780);

(statearr_19828[(12)] = inst_19777);

return statearr_19828;
})();
var statearr_19829_19869 = state_19825__$1;
(statearr_19829_19869[(2)] = null);

(statearr_19829_19869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (1))){
var state_19825__$1 = state_19825;
var statearr_19830_19870 = state_19825__$1;
(statearr_19830_19870[(2)] = null);

(statearr_19830_19870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (4))){
var inst_19766 = (state_19825[(13)]);
var inst_19766__$1 = (state_19825[(2)]);
var inst_19767 = (inst_19766__$1 == null);
var state_19825__$1 = (function (){var statearr_19831 = state_19825;
(statearr_19831[(13)] = inst_19766__$1);

return statearr_19831;
})();
if(cljs.core.truth_(inst_19767)){
var statearr_19832_19871 = state_19825__$1;
(statearr_19832_19871[(1)] = (5));

} else {
var statearr_19833_19872 = state_19825__$1;
(statearr_19833_19872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (15))){
var state_19825__$1 = state_19825;
var statearr_19837_19873 = state_19825__$1;
(statearr_19837_19873[(2)] = null);

(statearr_19837_19873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (21))){
var state_19825__$1 = state_19825;
var statearr_19838_19874 = state_19825__$1;
(statearr_19838_19874[(2)] = null);

(statearr_19838_19874[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (13))){
var inst_19778 = (state_19825[(9)]);
var inst_19779 = (state_19825[(10)]);
var inst_19780 = (state_19825[(11)]);
var inst_19777 = (state_19825[(12)]);
var inst_19787 = (state_19825[(2)]);
var inst_19788 = (inst_19780 + (1));
var tmp19834 = inst_19778;
var tmp19835 = inst_19779;
var tmp19836 = inst_19777;
var inst_19777__$1 = tmp19836;
var inst_19778__$1 = tmp19834;
var inst_19779__$1 = tmp19835;
var inst_19780__$1 = inst_19788;
var state_19825__$1 = (function (){var statearr_19839 = state_19825;
(statearr_19839[(9)] = inst_19778__$1);

(statearr_19839[(14)] = inst_19787);

(statearr_19839[(10)] = inst_19779__$1);

(statearr_19839[(11)] = inst_19780__$1);

(statearr_19839[(12)] = inst_19777__$1);

return statearr_19839;
})();
var statearr_19840_19875 = state_19825__$1;
(statearr_19840_19875[(2)] = null);

(statearr_19840_19875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (22))){
var state_19825__$1 = state_19825;
var statearr_19841_19876 = state_19825__$1;
(statearr_19841_19876[(2)] = null);

(statearr_19841_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (6))){
var inst_19766 = (state_19825[(13)]);
var inst_19775 = f.call(null,inst_19766);
var inst_19776 = cljs.core.seq.call(null,inst_19775);
var inst_19777 = inst_19776;
var inst_19778 = null;
var inst_19779 = (0);
var inst_19780 = (0);
var state_19825__$1 = (function (){var statearr_19842 = state_19825;
(statearr_19842[(9)] = inst_19778);

(statearr_19842[(10)] = inst_19779);

(statearr_19842[(11)] = inst_19780);

(statearr_19842[(12)] = inst_19777);

return statearr_19842;
})();
var statearr_19843_19877 = state_19825__$1;
(statearr_19843_19877[(2)] = null);

(statearr_19843_19877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (17))){
var inst_19791 = (state_19825[(7)]);
var inst_19795 = cljs.core.chunk_first.call(null,inst_19791);
var inst_19796 = cljs.core.chunk_rest.call(null,inst_19791);
var inst_19797 = cljs.core.count.call(null,inst_19795);
var inst_19777 = inst_19796;
var inst_19778 = inst_19795;
var inst_19779 = inst_19797;
var inst_19780 = (0);
var state_19825__$1 = (function (){var statearr_19844 = state_19825;
(statearr_19844[(9)] = inst_19778);

(statearr_19844[(10)] = inst_19779);

(statearr_19844[(11)] = inst_19780);

(statearr_19844[(12)] = inst_19777);

return statearr_19844;
})();
var statearr_19845_19878 = state_19825__$1;
(statearr_19845_19878[(2)] = null);

(statearr_19845_19878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (3))){
var inst_19823 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19825__$1,inst_19823);
} else {
if((state_val_19826 === (12))){
var inst_19811 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19846_19879 = state_19825__$1;
(statearr_19846_19879[(2)] = inst_19811);

(statearr_19846_19879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (2))){
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19825__$1,(4),in$);
} else {
if((state_val_19826 === (23))){
var inst_19819 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19847_19880 = state_19825__$1;
(statearr_19847_19880[(2)] = inst_19819);

(statearr_19847_19880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (19))){
var inst_19806 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19848_19881 = state_19825__$1;
(statearr_19848_19881[(2)] = inst_19806);

(statearr_19848_19881[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (11))){
var inst_19791 = (state_19825[(7)]);
var inst_19777 = (state_19825[(12)]);
var inst_19791__$1 = cljs.core.seq.call(null,inst_19777);
var state_19825__$1 = (function (){var statearr_19849 = state_19825;
(statearr_19849[(7)] = inst_19791__$1);

return statearr_19849;
})();
if(inst_19791__$1){
var statearr_19850_19882 = state_19825__$1;
(statearr_19850_19882[(1)] = (14));

} else {
var statearr_19851_19883 = state_19825__$1;
(statearr_19851_19883[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (9))){
var inst_19813 = (state_19825[(2)]);
var inst_19814 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19825__$1 = (function (){var statearr_19852 = state_19825;
(statearr_19852[(15)] = inst_19813);

return statearr_19852;
})();
if(cljs.core.truth_(inst_19814)){
var statearr_19853_19884 = state_19825__$1;
(statearr_19853_19884[(1)] = (21));

} else {
var statearr_19854_19885 = state_19825__$1;
(statearr_19854_19885[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (5))){
var inst_19769 = cljs.core.async.close_BANG_.call(null,out);
var state_19825__$1 = state_19825;
var statearr_19855_19886 = state_19825__$1;
(statearr_19855_19886[(2)] = inst_19769);

(statearr_19855_19886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (14))){
var inst_19791 = (state_19825[(7)]);
var inst_19793 = cljs.core.chunked_seq_QMARK_.call(null,inst_19791);
var state_19825__$1 = state_19825;
if(inst_19793){
var statearr_19856_19887 = state_19825__$1;
(statearr_19856_19887[(1)] = (17));

} else {
var statearr_19857_19888 = state_19825__$1;
(statearr_19857_19888[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (16))){
var inst_19809 = (state_19825[(2)]);
var state_19825__$1 = state_19825;
var statearr_19858_19889 = state_19825__$1;
(statearr_19858_19889[(2)] = inst_19809);

(statearr_19858_19889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19826 === (10))){
var inst_19778 = (state_19825[(9)]);
var inst_19780 = (state_19825[(11)]);
var inst_19785 = cljs.core._nth.call(null,inst_19778,inst_19780);
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19825__$1,(13),out,inst_19785);
} else {
if((state_val_19826 === (18))){
var inst_19791 = (state_19825[(7)]);
var inst_19800 = cljs.core.first.call(null,inst_19791);
var state_19825__$1 = state_19825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19825__$1,(20),out,inst_19800);
} else {
if((state_val_19826 === (8))){
var inst_19779 = (state_19825[(10)]);
var inst_19780 = (state_19825[(11)]);
var inst_19782 = (inst_19780 < inst_19779);
var inst_19783 = inst_19782;
var state_19825__$1 = state_19825;
if(cljs.core.truth_(inst_19783)){
var statearr_19859_19890 = state_19825__$1;
(statearr_19859_19890[(1)] = (10));

} else {
var statearr_19860_19891 = state_19825__$1;
(statearr_19860_19891[(1)] = (11));

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
});})(c__10327__auto__))
;
return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____0 = (function (){
var statearr_19864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19864[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__);

(statearr_19864[(1)] = (1));

return statearr_19864;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____1 = (function (state_19825){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19865){if((e19865 instanceof Object)){
var ex__10266__auto__ = e19865;
var statearr_19866_19892 = state_19825;
(statearr_19866_19892[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19893 = state_19825;
state_19825 = G__19893;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__ = function(state_19825){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____1.call(this,state_19825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10263__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();
var state__10329__auto__ = (function (){var statearr_19867 = f__10328__auto__.call(null);
(statearr_19867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_19867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);

return c__10327__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19894 = [];
var len__6152__auto___19897 = arguments.length;
var i__6153__auto___19898 = (0);
while(true){
if((i__6153__auto___19898 < len__6152__auto___19897)){
args19894.push((arguments[i__6153__auto___19898]));

var G__19899 = (i__6153__auto___19898 + (1));
i__6153__auto___19898 = G__19899;
continue;
} else {
}
break;
}

var G__19896 = args19894.length;
switch (G__19896) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19894.length)].join('')));

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
var args19901 = [];
var len__6152__auto___19904 = arguments.length;
var i__6153__auto___19905 = (0);
while(true){
if((i__6153__auto___19905 < len__6152__auto___19904)){
args19901.push((arguments[i__6153__auto___19905]));

var G__19906 = (i__6153__auto___19905 + (1));
i__6153__auto___19905 = G__19906;
continue;
} else {
}
break;
}

var G__19903 = args19901.length;
switch (G__19903) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19901.length)].join('')));

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
var args19908 = [];
var len__6152__auto___19959 = arguments.length;
var i__6153__auto___19960 = (0);
while(true){
if((i__6153__auto___19960 < len__6152__auto___19959)){
args19908.push((arguments[i__6153__auto___19960]));

var G__19961 = (i__6153__auto___19960 + (1));
i__6153__auto___19960 = G__19961;
continue;
} else {
}
break;
}

var G__19910 = args19908.length;
switch (G__19910) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19908.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___19963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___19963,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___19963,out){
return (function (state_19934){
var state_val_19935 = (state_19934[(1)]);
if((state_val_19935 === (7))){
var inst_19929 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19936_19964 = state_19934__$1;
(statearr_19936_19964[(2)] = inst_19929);

(statearr_19936_19964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (1))){
var inst_19911 = null;
var state_19934__$1 = (function (){var statearr_19937 = state_19934;
(statearr_19937[(7)] = inst_19911);

return statearr_19937;
})();
var statearr_19938_19965 = state_19934__$1;
(statearr_19938_19965[(2)] = null);

(statearr_19938_19965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (4))){
var inst_19914 = (state_19934[(8)]);
var inst_19914__$1 = (state_19934[(2)]);
var inst_19915 = (inst_19914__$1 == null);
var inst_19916 = cljs.core.not.call(null,inst_19915);
var state_19934__$1 = (function (){var statearr_19939 = state_19934;
(statearr_19939[(8)] = inst_19914__$1);

return statearr_19939;
})();
if(inst_19916){
var statearr_19940_19966 = state_19934__$1;
(statearr_19940_19966[(1)] = (5));

} else {
var statearr_19941_19967 = state_19934__$1;
(statearr_19941_19967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (6))){
var state_19934__$1 = state_19934;
var statearr_19942_19968 = state_19934__$1;
(statearr_19942_19968[(2)] = null);

(statearr_19942_19968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (3))){
var inst_19931 = (state_19934[(2)]);
var inst_19932 = cljs.core.async.close_BANG_.call(null,out);
var state_19934__$1 = (function (){var statearr_19943 = state_19934;
(statearr_19943[(9)] = inst_19931);

return statearr_19943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19934__$1,inst_19932);
} else {
if((state_val_19935 === (2))){
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19934__$1,(4),ch);
} else {
if((state_val_19935 === (11))){
var inst_19914 = (state_19934[(8)]);
var inst_19923 = (state_19934[(2)]);
var inst_19911 = inst_19914;
var state_19934__$1 = (function (){var statearr_19944 = state_19934;
(statearr_19944[(10)] = inst_19923);

(statearr_19944[(7)] = inst_19911);

return statearr_19944;
})();
var statearr_19945_19969 = state_19934__$1;
(statearr_19945_19969[(2)] = null);

(statearr_19945_19969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (9))){
var inst_19914 = (state_19934[(8)]);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19934__$1,(11),out,inst_19914);
} else {
if((state_val_19935 === (5))){
var inst_19911 = (state_19934[(7)]);
var inst_19914 = (state_19934[(8)]);
var inst_19918 = cljs.core._EQ_.call(null,inst_19914,inst_19911);
var state_19934__$1 = state_19934;
if(inst_19918){
var statearr_19947_19970 = state_19934__$1;
(statearr_19947_19970[(1)] = (8));

} else {
var statearr_19948_19971 = state_19934__$1;
(statearr_19948_19971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (10))){
var inst_19926 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19949_19972 = state_19934__$1;
(statearr_19949_19972[(2)] = inst_19926);

(statearr_19949_19972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (8))){
var inst_19911 = (state_19934[(7)]);
var tmp19946 = inst_19911;
var inst_19911__$1 = tmp19946;
var state_19934__$1 = (function (){var statearr_19950 = state_19934;
(statearr_19950[(7)] = inst_19911__$1);

return statearr_19950;
})();
var statearr_19951_19973 = state_19934__$1;
(statearr_19951_19973[(2)] = null);

(statearr_19951_19973[(1)] = (2));


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
});})(c__10327__auto___19963,out))
;
return ((function (switch__10262__auto__,c__10327__auto___19963,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_19955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19955[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_19955[(1)] = (1));

return statearr_19955;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_19934){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_19934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e19956){if((e19956 instanceof Object)){
var ex__10266__auto__ = e19956;
var statearr_19957_19974 = state_19934;
(statearr_19957_19974[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19975 = state_19934;
state_19934 = G__19975;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_19934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_19934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___19963,out))
})();
var state__10329__auto__ = (function (){var statearr_19958 = f__10328__auto__.call(null);
(statearr_19958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___19963);

return statearr_19958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___19963,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19976 = [];
var len__6152__auto___20046 = arguments.length;
var i__6153__auto___20047 = (0);
while(true){
if((i__6153__auto___20047 < len__6152__auto___20046)){
args19976.push((arguments[i__6153__auto___20047]));

var G__20048 = (i__6153__auto___20047 + (1));
i__6153__auto___20047 = G__20048;
continue;
} else {
}
break;
}

var G__19978 = args19976.length;
switch (G__19978) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19976.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___20050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___20050,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___20050,out){
return (function (state_20016){
var state_val_20017 = (state_20016[(1)]);
if((state_val_20017 === (7))){
var inst_20012 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20018_20051 = state_20016__$1;
(statearr_20018_20051[(2)] = inst_20012);

(statearr_20018_20051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (1))){
var inst_19979 = (new Array(n));
var inst_19980 = inst_19979;
var inst_19981 = (0);
var state_20016__$1 = (function (){var statearr_20019 = state_20016;
(statearr_20019[(7)] = inst_19980);

(statearr_20019[(8)] = inst_19981);

return statearr_20019;
})();
var statearr_20020_20052 = state_20016__$1;
(statearr_20020_20052[(2)] = null);

(statearr_20020_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (4))){
var inst_19984 = (state_20016[(9)]);
var inst_19984__$1 = (state_20016[(2)]);
var inst_19985 = (inst_19984__$1 == null);
var inst_19986 = cljs.core.not.call(null,inst_19985);
var state_20016__$1 = (function (){var statearr_20021 = state_20016;
(statearr_20021[(9)] = inst_19984__$1);

return statearr_20021;
})();
if(inst_19986){
var statearr_20022_20053 = state_20016__$1;
(statearr_20022_20053[(1)] = (5));

} else {
var statearr_20023_20054 = state_20016__$1;
(statearr_20023_20054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (15))){
var inst_20006 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20024_20055 = state_20016__$1;
(statearr_20024_20055[(2)] = inst_20006);

(statearr_20024_20055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (13))){
var state_20016__$1 = state_20016;
var statearr_20025_20056 = state_20016__$1;
(statearr_20025_20056[(2)] = null);

(statearr_20025_20056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (6))){
var inst_19981 = (state_20016[(8)]);
var inst_20002 = (inst_19981 > (0));
var state_20016__$1 = state_20016;
if(cljs.core.truth_(inst_20002)){
var statearr_20026_20057 = state_20016__$1;
(statearr_20026_20057[(1)] = (12));

} else {
var statearr_20027_20058 = state_20016__$1;
(statearr_20027_20058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (3))){
var inst_20014 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20016__$1,inst_20014);
} else {
if((state_val_20017 === (12))){
var inst_19980 = (state_20016[(7)]);
var inst_20004 = cljs.core.vec.call(null,inst_19980);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20016__$1,(15),out,inst_20004);
} else {
if((state_val_20017 === (2))){
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20016__$1,(4),ch);
} else {
if((state_val_20017 === (11))){
var inst_19996 = (state_20016[(2)]);
var inst_19997 = (new Array(n));
var inst_19980 = inst_19997;
var inst_19981 = (0);
var state_20016__$1 = (function (){var statearr_20028 = state_20016;
(statearr_20028[(10)] = inst_19996);

(statearr_20028[(7)] = inst_19980);

(statearr_20028[(8)] = inst_19981);

return statearr_20028;
})();
var statearr_20029_20059 = state_20016__$1;
(statearr_20029_20059[(2)] = null);

(statearr_20029_20059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (9))){
var inst_19980 = (state_20016[(7)]);
var inst_19994 = cljs.core.vec.call(null,inst_19980);
var state_20016__$1 = state_20016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20016__$1,(11),out,inst_19994);
} else {
if((state_val_20017 === (5))){
var inst_19989 = (state_20016[(11)]);
var inst_19984 = (state_20016[(9)]);
var inst_19980 = (state_20016[(7)]);
var inst_19981 = (state_20016[(8)]);
var inst_19988 = (inst_19980[inst_19981] = inst_19984);
var inst_19989__$1 = (inst_19981 + (1));
var inst_19990 = (inst_19989__$1 < n);
var state_20016__$1 = (function (){var statearr_20030 = state_20016;
(statearr_20030[(11)] = inst_19989__$1);

(statearr_20030[(12)] = inst_19988);

return statearr_20030;
})();
if(cljs.core.truth_(inst_19990)){
var statearr_20031_20060 = state_20016__$1;
(statearr_20031_20060[(1)] = (8));

} else {
var statearr_20032_20061 = state_20016__$1;
(statearr_20032_20061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (14))){
var inst_20009 = (state_20016[(2)]);
var inst_20010 = cljs.core.async.close_BANG_.call(null,out);
var state_20016__$1 = (function (){var statearr_20034 = state_20016;
(statearr_20034[(13)] = inst_20009);

return statearr_20034;
})();
var statearr_20035_20062 = state_20016__$1;
(statearr_20035_20062[(2)] = inst_20010);

(statearr_20035_20062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (10))){
var inst_20000 = (state_20016[(2)]);
var state_20016__$1 = state_20016;
var statearr_20036_20063 = state_20016__$1;
(statearr_20036_20063[(2)] = inst_20000);

(statearr_20036_20063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20017 === (8))){
var inst_19989 = (state_20016[(11)]);
var inst_19980 = (state_20016[(7)]);
var tmp20033 = inst_19980;
var inst_19980__$1 = tmp20033;
var inst_19981 = inst_19989;
var state_20016__$1 = (function (){var statearr_20037 = state_20016;
(statearr_20037[(7)] = inst_19980__$1);

(statearr_20037[(8)] = inst_19981);

return statearr_20037;
})();
var statearr_20038_20064 = state_20016__$1;
(statearr_20038_20064[(2)] = null);

(statearr_20038_20064[(1)] = (2));


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
});})(c__10327__auto___20050,out))
;
return ((function (switch__10262__auto__,c__10327__auto___20050,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_20042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20042[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_20042[(1)] = (1));

return statearr_20042;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_20016){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_20016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e20043){if((e20043 instanceof Object)){
var ex__10266__auto__ = e20043;
var statearr_20044_20065 = state_20016;
(statearr_20044_20065[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20066 = state_20016;
state_20016 = G__20066;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_20016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_20016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___20050,out))
})();
var state__10329__auto__ = (function (){var statearr_20045 = f__10328__auto__.call(null);
(statearr_20045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___20050);

return statearr_20045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___20050,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20067 = [];
var len__6152__auto___20141 = arguments.length;
var i__6153__auto___20142 = (0);
while(true){
if((i__6153__auto___20142 < len__6152__auto___20141)){
args20067.push((arguments[i__6153__auto___20142]));

var G__20143 = (i__6153__auto___20142 + (1));
i__6153__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var G__20069 = args20067.length;
switch (G__20069) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20067.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10327__auto___20145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto___20145,out){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto___20145,out){
return (function (state_20111){
var state_val_20112 = (state_20111[(1)]);
if((state_val_20112 === (7))){
var inst_20107 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20113_20146 = state_20111__$1;
(statearr_20113_20146[(2)] = inst_20107);

(statearr_20113_20146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (1))){
var inst_20070 = [];
var inst_20071 = inst_20070;
var inst_20072 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20111__$1 = (function (){var statearr_20114 = state_20111;
(statearr_20114[(7)] = inst_20072);

(statearr_20114[(8)] = inst_20071);

return statearr_20114;
})();
var statearr_20115_20147 = state_20111__$1;
(statearr_20115_20147[(2)] = null);

(statearr_20115_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (4))){
var inst_20075 = (state_20111[(9)]);
var inst_20075__$1 = (state_20111[(2)]);
var inst_20076 = (inst_20075__$1 == null);
var inst_20077 = cljs.core.not.call(null,inst_20076);
var state_20111__$1 = (function (){var statearr_20116 = state_20111;
(statearr_20116[(9)] = inst_20075__$1);

return statearr_20116;
})();
if(inst_20077){
var statearr_20117_20148 = state_20111__$1;
(statearr_20117_20148[(1)] = (5));

} else {
var statearr_20118_20149 = state_20111__$1;
(statearr_20118_20149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (15))){
var inst_20101 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20119_20150 = state_20111__$1;
(statearr_20119_20150[(2)] = inst_20101);

(statearr_20119_20150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (13))){
var state_20111__$1 = state_20111;
var statearr_20120_20151 = state_20111__$1;
(statearr_20120_20151[(2)] = null);

(statearr_20120_20151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (6))){
var inst_20071 = (state_20111[(8)]);
var inst_20096 = inst_20071.length;
var inst_20097 = (inst_20096 > (0));
var state_20111__$1 = state_20111;
if(cljs.core.truth_(inst_20097)){
var statearr_20121_20152 = state_20111__$1;
(statearr_20121_20152[(1)] = (12));

} else {
var statearr_20122_20153 = state_20111__$1;
(statearr_20122_20153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (3))){
var inst_20109 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20111__$1,inst_20109);
} else {
if((state_val_20112 === (12))){
var inst_20071 = (state_20111[(8)]);
var inst_20099 = cljs.core.vec.call(null,inst_20071);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20111__$1,(15),out,inst_20099);
} else {
if((state_val_20112 === (2))){
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20111__$1,(4),ch);
} else {
if((state_val_20112 === (11))){
var inst_20079 = (state_20111[(10)]);
var inst_20075 = (state_20111[(9)]);
var inst_20089 = (state_20111[(2)]);
var inst_20090 = [];
var inst_20091 = inst_20090.push(inst_20075);
var inst_20071 = inst_20090;
var inst_20072 = inst_20079;
var state_20111__$1 = (function (){var statearr_20123 = state_20111;
(statearr_20123[(7)] = inst_20072);

(statearr_20123[(11)] = inst_20089);

(statearr_20123[(8)] = inst_20071);

(statearr_20123[(12)] = inst_20091);

return statearr_20123;
})();
var statearr_20124_20154 = state_20111__$1;
(statearr_20124_20154[(2)] = null);

(statearr_20124_20154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (9))){
var inst_20071 = (state_20111[(8)]);
var inst_20087 = cljs.core.vec.call(null,inst_20071);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20111__$1,(11),out,inst_20087);
} else {
if((state_val_20112 === (5))){
var inst_20072 = (state_20111[(7)]);
var inst_20079 = (state_20111[(10)]);
var inst_20075 = (state_20111[(9)]);
var inst_20079__$1 = f.call(null,inst_20075);
var inst_20080 = cljs.core._EQ_.call(null,inst_20079__$1,inst_20072);
var inst_20081 = cljs.core.keyword_identical_QMARK_.call(null,inst_20072,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20082 = (inst_20080) || (inst_20081);
var state_20111__$1 = (function (){var statearr_20125 = state_20111;
(statearr_20125[(10)] = inst_20079__$1);

return statearr_20125;
})();
if(cljs.core.truth_(inst_20082)){
var statearr_20126_20155 = state_20111__$1;
(statearr_20126_20155[(1)] = (8));

} else {
var statearr_20127_20156 = state_20111__$1;
(statearr_20127_20156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (14))){
var inst_20104 = (state_20111[(2)]);
var inst_20105 = cljs.core.async.close_BANG_.call(null,out);
var state_20111__$1 = (function (){var statearr_20129 = state_20111;
(statearr_20129[(13)] = inst_20104);

return statearr_20129;
})();
var statearr_20130_20157 = state_20111__$1;
(statearr_20130_20157[(2)] = inst_20105);

(statearr_20130_20157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (10))){
var inst_20094 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20131_20158 = state_20111__$1;
(statearr_20131_20158[(2)] = inst_20094);

(statearr_20131_20158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (8))){
var inst_20071 = (state_20111[(8)]);
var inst_20079 = (state_20111[(10)]);
var inst_20075 = (state_20111[(9)]);
var inst_20084 = inst_20071.push(inst_20075);
var tmp20128 = inst_20071;
var inst_20071__$1 = tmp20128;
var inst_20072 = inst_20079;
var state_20111__$1 = (function (){var statearr_20132 = state_20111;
(statearr_20132[(7)] = inst_20072);

(statearr_20132[(8)] = inst_20071__$1);

(statearr_20132[(14)] = inst_20084);

return statearr_20132;
})();
var statearr_20133_20159 = state_20111__$1;
(statearr_20133_20159[(2)] = null);

(statearr_20133_20159[(1)] = (2));


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
});})(c__10327__auto___20145,out))
;
return ((function (switch__10262__auto__,c__10327__auto___20145,out){
return (function() {
var cljs$core$async$state_machine__10263__auto__ = null;
var cljs$core$async$state_machine__10263__auto____0 = (function (){
var statearr_20137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20137[(0)] = cljs$core$async$state_machine__10263__auto__);

(statearr_20137[(1)] = (1));

return statearr_20137;
});
var cljs$core$async$state_machine__10263__auto____1 = (function (state_20111){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_20111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e20138){if((e20138 instanceof Object)){
var ex__10266__auto__ = e20138;
var statearr_20139_20160 = state_20111;
(statearr_20139_20160[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20161 = state_20111;
state_20111 = G__20161;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
cljs$core$async$state_machine__10263__auto__ = function(state_20111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10263__auto____1.call(this,state_20111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10263__auto____0;
cljs$core$async$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10263__auto____1;
return cljs$core$async$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto___20145,out))
})();
var state__10329__auto__ = (function (){var statearr_20140 = f__10328__auto__.call(null);
(statearr_20140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto___20145);

return statearr_20140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto___20145,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map