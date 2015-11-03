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
if(typeof cljs.core.async.t_cljs$core$async17549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17549 = (function (fn_handler,f,meta17550){
this.fn_handler = fn_handler;
this.f = f;
this.meta17550 = meta17550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17551,meta17550__$1){
var self__ = this;
var _17551__$1 = this;
return (new cljs.core.async.t_cljs$core$async17549(self__.fn_handler,self__.f,meta17550__$1));
});

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17551){
var self__ = this;
var _17551__$1 = this;
return self__.meta17550;
});

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17550","meta17550",1360531342,null)], null);
});

cljs.core.async.t_cljs$core$async17549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17549";

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17549");
});

cljs.core.async.__GT_t_cljs$core$async17549 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17549(fn_handler__$1,f__$1,meta17550){
return (new cljs.core.async.t_cljs$core$async17549(fn_handler__$1,f__$1,meta17550));
});

}

return (new cljs.core.async.t_cljs$core$async17549(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17554 = [];
var len__6152__auto___17557 = arguments.length;
var i__6153__auto___17558 = (0);
while(true){
if((i__6153__auto___17558 < len__6152__auto___17557)){
args17554.push((arguments[i__6153__auto___17558]));

var G__17559 = (i__6153__auto___17558 + (1));
i__6153__auto___17558 = G__17559;
continue;
} else {
}
break;
}

var G__17556 = args17554.length;
switch (G__17556) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17554.length)].join('')));

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
var args17561 = [];
var len__6152__auto___17564 = arguments.length;
var i__6153__auto___17565 = (0);
while(true){
if((i__6153__auto___17565 < len__6152__auto___17564)){
args17561.push((arguments[i__6153__auto___17565]));

var G__17566 = (i__6153__auto___17565 + (1));
i__6153__auto___17565 = G__17566;
continue;
} else {
}
break;
}

var G__17563 = args17561.length;
switch (G__17563) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17561.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17568);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17568,ret){
return (function (){
return fn1.call(null,val_17568);
});})(val_17568,ret))
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
var args17569 = [];
var len__6152__auto___17572 = arguments.length;
var i__6153__auto___17573 = (0);
while(true){
if((i__6153__auto___17573 < len__6152__auto___17572)){
args17569.push((arguments[i__6153__auto___17573]));

var G__17574 = (i__6153__auto___17573 + (1));
i__6153__auto___17573 = G__17574;
continue;
} else {
}
break;
}

var G__17571 = args17569.length;
switch (G__17571) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17569.length)].join('')));

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
var n__5997__auto___17576 = n;
var x_17577 = (0);
while(true){
if((x_17577 < n__5997__auto___17576)){
(a[x_17577] = (0));

var G__17578 = (x_17577 + (1));
x_17577 = G__17578;
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

var G__17579 = (i + (1));
i = G__17579;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17583 = (function (alt_flag,flag,meta17584){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17584 = meta17584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17585,meta17584__$1){
var self__ = this;
var _17585__$1 = this;
return (new cljs.core.async.t_cljs$core$async17583(self__.alt_flag,self__.flag,meta17584__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17585){
var self__ = this;
var _17585__$1 = this;
return self__.meta17584;
});})(flag))
;

cljs.core.async.t_cljs$core$async17583.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17583.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17584","meta17584",-1825234974,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17583";

cljs.core.async.t_cljs$core$async17583.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17583");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17583 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17583(alt_flag__$1,flag__$1,meta17584){
return (new cljs.core.async.t_cljs$core$async17583(alt_flag__$1,flag__$1,meta17584));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17583(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17589 = (function (alt_handler,flag,cb,meta17590){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17590 = meta17590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17591,meta17590__$1){
var self__ = this;
var _17591__$1 = this;
return (new cljs.core.async.t_cljs$core$async17589(self__.alt_handler,self__.flag,self__.cb,meta17590__$1));
});

cljs.core.async.t_cljs$core$async17589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17591){
var self__ = this;
var _17591__$1 = this;
return self__.meta17590;
});

cljs.core.async.t_cljs$core$async17589.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17590","meta17590",-580169321,null)], null);
});

cljs.core.async.t_cljs$core$async17589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17589";

cljs.core.async.t_cljs$core$async17589.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17589");
});

cljs.core.async.__GT_t_cljs$core$async17589 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17589(alt_handler__$1,flag__$1,cb__$1,meta17590){
return (new cljs.core.async.t_cljs$core$async17589(alt_handler__$1,flag__$1,cb__$1,meta17590));
});

}

return (new cljs.core.async.t_cljs$core$async17589(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17592_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17593_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17593_SHARP_,port], null));
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
var G__17594 = (i + (1));
i = G__17594;
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
var len__6152__auto___17600 = arguments.length;
var i__6153__auto___17601 = (0);
while(true){
if((i__6153__auto___17601 < len__6152__auto___17600)){
args__6159__auto__.push((arguments[i__6153__auto___17601]));

var G__17602 = (i__6153__auto___17601 + (1));
i__6153__auto___17601 = G__17602;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17597){
var map__17598 = p__17597;
var map__17598__$1 = ((((!((map__17598 == null)))?((((map__17598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17598):map__17598);
var opts = map__17598__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17595){
var G__17596 = cljs.core.first.call(null,seq17595);
var seq17595__$1 = cljs.core.next.call(null,seq17595);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17596,seq17595__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17603 = [];
var len__6152__auto___17653 = arguments.length;
var i__6153__auto___17654 = (0);
while(true){
if((i__6153__auto___17654 < len__6152__auto___17653)){
args17603.push((arguments[i__6153__auto___17654]));

var G__17655 = (i__6153__auto___17654 + (1));
i__6153__auto___17654 = G__17655;
continue;
} else {
}
break;
}

var G__17605 = args17603.length;
switch (G__17605) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17603.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10274__auto___17657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___17657){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___17657){
return (function (state_17629){
var state_val_17630 = (state_17629[(1)]);
if((state_val_17630 === (7))){
var inst_17625 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17631_17658 = state_17629__$1;
(statearr_17631_17658[(2)] = inst_17625);

(statearr_17631_17658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (1))){
var state_17629__$1 = state_17629;
var statearr_17632_17659 = state_17629__$1;
(statearr_17632_17659[(2)] = null);

(statearr_17632_17659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (4))){
var inst_17608 = (state_17629[(7)]);
var inst_17608__$1 = (state_17629[(2)]);
var inst_17609 = (inst_17608__$1 == null);
var state_17629__$1 = (function (){var statearr_17633 = state_17629;
(statearr_17633[(7)] = inst_17608__$1);

return statearr_17633;
})();
if(cljs.core.truth_(inst_17609)){
var statearr_17634_17660 = state_17629__$1;
(statearr_17634_17660[(1)] = (5));

} else {
var statearr_17635_17661 = state_17629__$1;
(statearr_17635_17661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (13))){
var state_17629__$1 = state_17629;
var statearr_17636_17662 = state_17629__$1;
(statearr_17636_17662[(2)] = null);

(statearr_17636_17662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (6))){
var inst_17608 = (state_17629[(7)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17629__$1,(11),to,inst_17608);
} else {
if((state_val_17630 === (3))){
var inst_17627 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17629__$1,inst_17627);
} else {
if((state_val_17630 === (12))){
var state_17629__$1 = state_17629;
var statearr_17637_17663 = state_17629__$1;
(statearr_17637_17663[(2)] = null);

(statearr_17637_17663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (2))){
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17629__$1,(4),from);
} else {
if((state_val_17630 === (11))){
var inst_17618 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
if(cljs.core.truth_(inst_17618)){
var statearr_17638_17664 = state_17629__$1;
(statearr_17638_17664[(1)] = (12));

} else {
var statearr_17639_17665 = state_17629__$1;
(statearr_17639_17665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (9))){
var state_17629__$1 = state_17629;
var statearr_17640_17666 = state_17629__$1;
(statearr_17640_17666[(2)] = null);

(statearr_17640_17666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (5))){
var state_17629__$1 = state_17629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17641_17667 = state_17629__$1;
(statearr_17641_17667[(1)] = (8));

} else {
var statearr_17642_17668 = state_17629__$1;
(statearr_17642_17668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (14))){
var inst_17623 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17643_17669 = state_17629__$1;
(statearr_17643_17669[(2)] = inst_17623);

(statearr_17643_17669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (10))){
var inst_17615 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17644_17670 = state_17629__$1;
(statearr_17644_17670[(2)] = inst_17615);

(statearr_17644_17670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (8))){
var inst_17612 = cljs.core.async.close_BANG_.call(null,to);
var state_17629__$1 = state_17629;
var statearr_17645_17671 = state_17629__$1;
(statearr_17645_17671[(2)] = inst_17612);

(statearr_17645_17671[(1)] = (10));


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
});})(c__10274__auto___17657))
;
return ((function (switch__10209__auto__,c__10274__auto___17657){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_17649 = [null,null,null,null,null,null,null,null];
(statearr_17649[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_17649[(1)] = (1));

return statearr_17649;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_17629){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17650){if((e17650 instanceof Object)){
var ex__10213__auto__ = e17650;
var statearr_17651_17672 = state_17629;
(statearr_17651_17672[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17673 = state_17629;
state_17629 = G__17673;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_17629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_17629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___17657))
})();
var state__10276__auto__ = (function (){var statearr_17652 = f__10275__auto__.call(null);
(statearr_17652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___17657);

return statearr_17652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___17657))
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
return (function (p__17857){
var vec__17858 = p__17857;
var v = cljs.core.nth.call(null,vec__17858,(0),null);
var p = cljs.core.nth.call(null,vec__17858,(1),null);
var job = vec__17858;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10274__auto___18040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results){
return (function (state_17863){
var state_val_17864 = (state_17863[(1)]);
if((state_val_17864 === (1))){
var state_17863__$1 = state_17863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17863__$1,(2),res,v);
} else {
if((state_val_17864 === (2))){
var inst_17860 = (state_17863[(2)]);
var inst_17861 = cljs.core.async.close_BANG_.call(null,res);
var state_17863__$1 = (function (){var statearr_17865 = state_17863;
(statearr_17865[(7)] = inst_17860);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17863__$1,inst_17861);
} else {
return null;
}
}
});})(c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results))
;
return ((function (switch__10209__auto__,c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17869 = [null,null,null,null,null,null,null,null];
(statearr_17869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17869[(1)] = (1));

return statearr_17869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17863){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17870){if((e17870 instanceof Object)){
var ex__10213__auto__ = e17870;
var statearr_17871_18041 = state_17863;
(statearr_17871_18041[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_17863;
state_17863 = G__18042;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results))
})();
var state__10276__auto__ = (function (){var statearr_17872 = f__10275__auto__.call(null);
(statearr_17872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18040);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18040,res,vec__17858,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17873){
var vec__17874 = p__17873;
var v = cljs.core.nth.call(null,vec__17874,(0),null);
var p = cljs.core.nth.call(null,vec__17874,(1),null);
var job = vec__17874;
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
var n__5997__auto___18043 = n;
var __18044 = (0);
while(true){
if((__18044 < n__5997__auto___18043)){
var G__17875_18045 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17875_18045) {
case "compute":
var c__10274__auto___18047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18044,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (__18044,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function (state_17888){
var state_val_17889 = (state_17888[(1)]);
if((state_val_17889 === (1))){
var state_17888__$1 = state_17888;
var statearr_17890_18048 = state_17888__$1;
(statearr_17890_18048[(2)] = null);

(statearr_17890_18048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (2))){
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17888__$1,(4),jobs);
} else {
if((state_val_17889 === (3))){
var inst_17886 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17888__$1,inst_17886);
} else {
if((state_val_17889 === (4))){
var inst_17878 = (state_17888[(2)]);
var inst_17879 = process.call(null,inst_17878);
var state_17888__$1 = state_17888;
if(cljs.core.truth_(inst_17879)){
var statearr_17891_18049 = state_17888__$1;
(statearr_17891_18049[(1)] = (5));

} else {
var statearr_17892_18050 = state_17888__$1;
(statearr_17892_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (5))){
var state_17888__$1 = state_17888;
var statearr_17893_18051 = state_17888__$1;
(statearr_17893_18051[(2)] = null);

(statearr_17893_18051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (6))){
var state_17888__$1 = state_17888;
var statearr_17894_18052 = state_17888__$1;
(statearr_17894_18052[(2)] = null);

(statearr_17894_18052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17889 === (7))){
var inst_17884 = (state_17888[(2)]);
var state_17888__$1 = state_17888;
var statearr_17895_18053 = state_17888__$1;
(statearr_17895_18053[(2)] = inst_17884);

(statearr_17895_18053[(1)] = (3));


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
});})(__18044,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
;
return ((function (__18044,switch__10209__auto__,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17899 = [null,null,null,null,null,null,null];
(statearr_17899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17899[(1)] = (1));

return statearr_17899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17888){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17900){if((e17900 instanceof Object)){
var ex__10213__auto__ = e17900;
var statearr_17901_18054 = state_17888;
(statearr_17901_18054[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18055 = state_17888;
state_17888 = G__18055;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(__18044,switch__10209__auto__,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17902 = f__10275__auto__.call(null);
(statearr_17902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18047);

return statearr_17902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(__18044,c__10274__auto___18047,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
);


break;
case "async":
var c__10274__auto___18056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18044,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (__18044,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function (state_17915){
var state_val_17916 = (state_17915[(1)]);
if((state_val_17916 === (1))){
var state_17915__$1 = state_17915;
var statearr_17917_18057 = state_17915__$1;
(statearr_17917_18057[(2)] = null);

(statearr_17917_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (2))){
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17915__$1,(4),jobs);
} else {
if((state_val_17916 === (3))){
var inst_17913 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17915__$1,inst_17913);
} else {
if((state_val_17916 === (4))){
var inst_17905 = (state_17915[(2)]);
var inst_17906 = async.call(null,inst_17905);
var state_17915__$1 = state_17915;
if(cljs.core.truth_(inst_17906)){
var statearr_17918_18058 = state_17915__$1;
(statearr_17918_18058[(1)] = (5));

} else {
var statearr_17919_18059 = state_17915__$1;
(statearr_17919_18059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (5))){
var state_17915__$1 = state_17915;
var statearr_17920_18060 = state_17915__$1;
(statearr_17920_18060[(2)] = null);

(statearr_17920_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (6))){
var state_17915__$1 = state_17915;
var statearr_17921_18061 = state_17915__$1;
(statearr_17921_18061[(2)] = null);

(statearr_17921_18061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17916 === (7))){
var inst_17911 = (state_17915[(2)]);
var state_17915__$1 = state_17915;
var statearr_17922_18062 = state_17915__$1;
(statearr_17922_18062[(2)] = inst_17911);

(statearr_17922_18062[(1)] = (3));


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
});})(__18044,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
;
return ((function (__18044,switch__10209__auto__,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17926 = [null,null,null,null,null,null,null];
(statearr_17926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17926[(1)] = (1));

return statearr_17926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17915){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17927){if((e17927 instanceof Object)){
var ex__10213__auto__ = e17927;
var statearr_17928_18063 = state_17915;
(statearr_17928_18063[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18064 = state_17915;
state_17915 = G__18064;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(__18044,switch__10209__auto__,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17929 = f__10275__auto__.call(null);
(statearr_17929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18056);

return statearr_17929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(__18044,c__10274__auto___18056,G__17875_18045,n__5997__auto___18043,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18065 = (__18044 + (1));
__18044 = G__18065;
continue;
} else {
}
break;
}

var c__10274__auto___18066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18066,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18066,jobs,results,process,async){
return (function (state_17951){
var state_val_17952 = (state_17951[(1)]);
if((state_val_17952 === (1))){
var state_17951__$1 = state_17951;
var statearr_17953_18067 = state_17951__$1;
(statearr_17953_18067[(2)] = null);

(statearr_17953_18067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (2))){
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17951__$1,(4),from);
} else {
if((state_val_17952 === (3))){
var inst_17949 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17951__$1,inst_17949);
} else {
if((state_val_17952 === (4))){
var inst_17932 = (state_17951[(7)]);
var inst_17932__$1 = (state_17951[(2)]);
var inst_17933 = (inst_17932__$1 == null);
var state_17951__$1 = (function (){var statearr_17954 = state_17951;
(statearr_17954[(7)] = inst_17932__$1);

return statearr_17954;
})();
if(cljs.core.truth_(inst_17933)){
var statearr_17955_18068 = state_17951__$1;
(statearr_17955_18068[(1)] = (5));

} else {
var statearr_17956_18069 = state_17951__$1;
(statearr_17956_18069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (5))){
var inst_17935 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17951__$1 = state_17951;
var statearr_17957_18070 = state_17951__$1;
(statearr_17957_18070[(2)] = inst_17935);

(statearr_17957_18070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (6))){
var inst_17932 = (state_17951[(7)]);
var inst_17937 = (state_17951[(8)]);
var inst_17937__$1 = cljs.core.async.chan.call(null,(1));
var inst_17938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17939 = [inst_17932,inst_17937__$1];
var inst_17940 = (new cljs.core.PersistentVector(null,2,(5),inst_17938,inst_17939,null));
var state_17951__$1 = (function (){var statearr_17958 = state_17951;
(statearr_17958[(8)] = inst_17937__$1);

return statearr_17958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17951__$1,(8),jobs,inst_17940);
} else {
if((state_val_17952 === (7))){
var inst_17947 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17959_18071 = state_17951__$1;
(statearr_17959_18071[(2)] = inst_17947);

(statearr_17959_18071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (8))){
var inst_17937 = (state_17951[(8)]);
var inst_17942 = (state_17951[(2)]);
var state_17951__$1 = (function (){var statearr_17960 = state_17951;
(statearr_17960[(9)] = inst_17942);

return statearr_17960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17951__$1,(9),results,inst_17937);
} else {
if((state_val_17952 === (9))){
var inst_17944 = (state_17951[(2)]);
var state_17951__$1 = (function (){var statearr_17961 = state_17951;
(statearr_17961[(10)] = inst_17944);

return statearr_17961;
})();
var statearr_17962_18072 = state_17951__$1;
(statearr_17962_18072[(2)] = null);

(statearr_17962_18072[(1)] = (2));


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
});})(c__10274__auto___18066,jobs,results,process,async))
;
return ((function (switch__10209__auto__,c__10274__auto___18066,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17966[(1)] = (1));

return statearr_17966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17951){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17967){if((e17967 instanceof Object)){
var ex__10213__auto__ = e17967;
var statearr_17968_18073 = state_17951;
(statearr_17968_18073[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18074 = state_17951;
state_17951 = G__18074;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18066,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17969 = f__10275__auto__.call(null);
(statearr_17969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18066);

return statearr_17969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18066,jobs,results,process,async))
);


var c__10274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto__,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto__,jobs,results,process,async){
return (function (state_18007){
var state_val_18008 = (state_18007[(1)]);
if((state_val_18008 === (7))){
var inst_18003 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18009_18075 = state_18007__$1;
(statearr_18009_18075[(2)] = inst_18003);

(statearr_18009_18075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (20))){
var state_18007__$1 = state_18007;
var statearr_18010_18076 = state_18007__$1;
(statearr_18010_18076[(2)] = null);

(statearr_18010_18076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (1))){
var state_18007__$1 = state_18007;
var statearr_18011_18077 = state_18007__$1;
(statearr_18011_18077[(2)] = null);

(statearr_18011_18077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (4))){
var inst_17972 = (state_18007[(7)]);
var inst_17972__$1 = (state_18007[(2)]);
var inst_17973 = (inst_17972__$1 == null);
var state_18007__$1 = (function (){var statearr_18012 = state_18007;
(statearr_18012[(7)] = inst_17972__$1);

return statearr_18012;
})();
if(cljs.core.truth_(inst_17973)){
var statearr_18013_18078 = state_18007__$1;
(statearr_18013_18078[(1)] = (5));

} else {
var statearr_18014_18079 = state_18007__$1;
(statearr_18014_18079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (15))){
var inst_17985 = (state_18007[(8)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18007__$1,(18),to,inst_17985);
} else {
if((state_val_18008 === (21))){
var inst_17998 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18015_18080 = state_18007__$1;
(statearr_18015_18080[(2)] = inst_17998);

(statearr_18015_18080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (13))){
var inst_18000 = (state_18007[(2)]);
var state_18007__$1 = (function (){var statearr_18016 = state_18007;
(statearr_18016[(9)] = inst_18000);

return statearr_18016;
})();
var statearr_18017_18081 = state_18007__$1;
(statearr_18017_18081[(2)] = null);

(statearr_18017_18081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (6))){
var inst_17972 = (state_18007[(7)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(11),inst_17972);
} else {
if((state_val_18008 === (17))){
var inst_17993 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
if(cljs.core.truth_(inst_17993)){
var statearr_18018_18082 = state_18007__$1;
(statearr_18018_18082[(1)] = (19));

} else {
var statearr_18019_18083 = state_18007__$1;
(statearr_18019_18083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (3))){
var inst_18005 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18007__$1,inst_18005);
} else {
if((state_val_18008 === (12))){
var inst_17982 = (state_18007[(10)]);
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(14),inst_17982);
} else {
if((state_val_18008 === (2))){
var state_18007__$1 = state_18007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(4),results);
} else {
if((state_val_18008 === (19))){
var state_18007__$1 = state_18007;
var statearr_18020_18084 = state_18007__$1;
(statearr_18020_18084[(2)] = null);

(statearr_18020_18084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (11))){
var inst_17982 = (state_18007[(2)]);
var state_18007__$1 = (function (){var statearr_18021 = state_18007;
(statearr_18021[(10)] = inst_17982);

return statearr_18021;
})();
var statearr_18022_18085 = state_18007__$1;
(statearr_18022_18085[(2)] = null);

(statearr_18022_18085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (9))){
var state_18007__$1 = state_18007;
var statearr_18023_18086 = state_18007__$1;
(statearr_18023_18086[(2)] = null);

(statearr_18023_18086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (5))){
var state_18007__$1 = state_18007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18024_18087 = state_18007__$1;
(statearr_18024_18087[(1)] = (8));

} else {
var statearr_18025_18088 = state_18007__$1;
(statearr_18025_18088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (14))){
var inst_17985 = (state_18007[(8)]);
var inst_17987 = (state_18007[(11)]);
var inst_17985__$1 = (state_18007[(2)]);
var inst_17986 = (inst_17985__$1 == null);
var inst_17987__$1 = cljs.core.not.call(null,inst_17986);
var state_18007__$1 = (function (){var statearr_18026 = state_18007;
(statearr_18026[(8)] = inst_17985__$1);

(statearr_18026[(11)] = inst_17987__$1);

return statearr_18026;
})();
if(inst_17987__$1){
var statearr_18027_18089 = state_18007__$1;
(statearr_18027_18089[(1)] = (15));

} else {
var statearr_18028_18090 = state_18007__$1;
(statearr_18028_18090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (16))){
var inst_17987 = (state_18007[(11)]);
var state_18007__$1 = state_18007;
var statearr_18029_18091 = state_18007__$1;
(statearr_18029_18091[(2)] = inst_17987);

(statearr_18029_18091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (10))){
var inst_17979 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18030_18092 = state_18007__$1;
(statearr_18030_18092[(2)] = inst_17979);

(statearr_18030_18092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (18))){
var inst_17990 = (state_18007[(2)]);
var state_18007__$1 = state_18007;
var statearr_18031_18093 = state_18007__$1;
(statearr_18031_18093[(2)] = inst_17990);

(statearr_18031_18093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18008 === (8))){
var inst_17976 = cljs.core.async.close_BANG_.call(null,to);
var state_18007__$1 = state_18007;
var statearr_18032_18094 = state_18007__$1;
(statearr_18032_18094[(2)] = inst_17976);

(statearr_18032_18094[(1)] = (10));


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
});})(c__10274__auto__,jobs,results,process,async))
;
return ((function (switch__10209__auto__,c__10274__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_18036 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_18036[(1)] = (1));

return statearr_18036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_18007){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18037){if((e18037 instanceof Object)){
var ex__10213__auto__ = e18037;
var statearr_18038_18095 = state_18007;
(statearr_18038_18095[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18096 = state_18007;
state_18007 = G__18096;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_18007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_18039 = f__10275__auto__.call(null);
(statearr_18039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto__,jobs,results,process,async))
);

return c__10274__auto__;
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
var args18097 = [];
var len__6152__auto___18100 = arguments.length;
var i__6153__auto___18101 = (0);
while(true){
if((i__6153__auto___18101 < len__6152__auto___18100)){
args18097.push((arguments[i__6153__auto___18101]));

var G__18102 = (i__6153__auto___18101 + (1));
i__6153__auto___18101 = G__18102;
continue;
} else {
}
break;
}

var G__18099 = args18097.length;
switch (G__18099) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18097.length)].join('')));

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
var args18104 = [];
var len__6152__auto___18107 = arguments.length;
var i__6153__auto___18108 = (0);
while(true){
if((i__6153__auto___18108 < len__6152__auto___18107)){
args18104.push((arguments[i__6153__auto___18108]));

var G__18109 = (i__6153__auto___18108 + (1));
i__6153__auto___18108 = G__18109;
continue;
} else {
}
break;
}

var G__18106 = args18104.length;
switch (G__18106) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18104.length)].join('')));

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
var args18111 = [];
var len__6152__auto___18164 = arguments.length;
var i__6153__auto___18165 = (0);
while(true){
if((i__6153__auto___18165 < len__6152__auto___18164)){
args18111.push((arguments[i__6153__auto___18165]));

var G__18166 = (i__6153__auto___18165 + (1));
i__6153__auto___18165 = G__18166;
continue;
} else {
}
break;
}

var G__18113 = args18111.length;
switch (G__18113) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18111.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10274__auto___18168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18168,tc,fc){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18168,tc,fc){
return (function (state_18139){
var state_val_18140 = (state_18139[(1)]);
if((state_val_18140 === (7))){
var inst_18135 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
var statearr_18141_18169 = state_18139__$1;
(statearr_18141_18169[(2)] = inst_18135);

(statearr_18141_18169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (1))){
var state_18139__$1 = state_18139;
var statearr_18142_18170 = state_18139__$1;
(statearr_18142_18170[(2)] = null);

(statearr_18142_18170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (4))){
var inst_18116 = (state_18139[(7)]);
var inst_18116__$1 = (state_18139[(2)]);
var inst_18117 = (inst_18116__$1 == null);
var state_18139__$1 = (function (){var statearr_18143 = state_18139;
(statearr_18143[(7)] = inst_18116__$1);

return statearr_18143;
})();
if(cljs.core.truth_(inst_18117)){
var statearr_18144_18171 = state_18139__$1;
(statearr_18144_18171[(1)] = (5));

} else {
var statearr_18145_18172 = state_18139__$1;
(statearr_18145_18172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (13))){
var state_18139__$1 = state_18139;
var statearr_18146_18173 = state_18139__$1;
(statearr_18146_18173[(2)] = null);

(statearr_18146_18173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (6))){
var inst_18116 = (state_18139[(7)]);
var inst_18122 = p.call(null,inst_18116);
var state_18139__$1 = state_18139;
if(cljs.core.truth_(inst_18122)){
var statearr_18147_18174 = state_18139__$1;
(statearr_18147_18174[(1)] = (9));

} else {
var statearr_18148_18175 = state_18139__$1;
(statearr_18148_18175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (3))){
var inst_18137 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18139__$1,inst_18137);
} else {
if((state_val_18140 === (12))){
var state_18139__$1 = state_18139;
var statearr_18149_18176 = state_18139__$1;
(statearr_18149_18176[(2)] = null);

(statearr_18149_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (2))){
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18139__$1,(4),ch);
} else {
if((state_val_18140 === (11))){
var inst_18116 = (state_18139[(7)]);
var inst_18126 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18139__$1,(8),inst_18126,inst_18116);
} else {
if((state_val_18140 === (9))){
var state_18139__$1 = state_18139;
var statearr_18150_18177 = state_18139__$1;
(statearr_18150_18177[(2)] = tc);

(statearr_18150_18177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (5))){
var inst_18119 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18120 = cljs.core.async.close_BANG_.call(null,fc);
var state_18139__$1 = (function (){var statearr_18151 = state_18139;
(statearr_18151[(8)] = inst_18119);

return statearr_18151;
})();
var statearr_18152_18178 = state_18139__$1;
(statearr_18152_18178[(2)] = inst_18120);

(statearr_18152_18178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (14))){
var inst_18133 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
var statearr_18153_18179 = state_18139__$1;
(statearr_18153_18179[(2)] = inst_18133);

(statearr_18153_18179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (10))){
var state_18139__$1 = state_18139;
var statearr_18154_18180 = state_18139__$1;
(statearr_18154_18180[(2)] = fc);

(statearr_18154_18180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (8))){
var inst_18128 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
if(cljs.core.truth_(inst_18128)){
var statearr_18155_18181 = state_18139__$1;
(statearr_18155_18181[(1)] = (12));

} else {
var statearr_18156_18182 = state_18139__$1;
(statearr_18156_18182[(1)] = (13));

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
});})(c__10274__auto___18168,tc,fc))
;
return ((function (switch__10209__auto__,c__10274__auto___18168,tc,fc){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_18160 = [null,null,null,null,null,null,null,null,null];
(statearr_18160[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_18160[(1)] = (1));

return statearr_18160;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_18139){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18161){if((e18161 instanceof Object)){
var ex__10213__auto__ = e18161;
var statearr_18162_18183 = state_18139;
(statearr_18162_18183[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18184 = state_18139;
state_18139 = G__18184;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_18139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_18139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18168,tc,fc))
})();
var state__10276__auto__ = (function (){var statearr_18163 = f__10275__auto__.call(null);
(statearr_18163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18168);

return statearr_18163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18168,tc,fc))
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
var c__10274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto__){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto__){
return (function (state_18231){
var state_val_18232 = (state_18231[(1)]);
if((state_val_18232 === (1))){
var inst_18217 = init;
var state_18231__$1 = (function (){var statearr_18233 = state_18231;
(statearr_18233[(7)] = inst_18217);

return statearr_18233;
})();
var statearr_18234_18249 = state_18231__$1;
(statearr_18234_18249[(2)] = null);

(statearr_18234_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (2))){
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(4),ch);
} else {
if((state_val_18232 === (3))){
var inst_18229 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18231__$1,inst_18229);
} else {
if((state_val_18232 === (4))){
var inst_18220 = (state_18231[(8)]);
var inst_18220__$1 = (state_18231[(2)]);
var inst_18221 = (inst_18220__$1 == null);
var state_18231__$1 = (function (){var statearr_18235 = state_18231;
(statearr_18235[(8)] = inst_18220__$1);

return statearr_18235;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18236_18250 = state_18231__$1;
(statearr_18236_18250[(1)] = (5));

} else {
var statearr_18237_18251 = state_18231__$1;
(statearr_18237_18251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (5))){
var inst_18217 = (state_18231[(7)]);
var state_18231__$1 = state_18231;
var statearr_18238_18252 = state_18231__$1;
(statearr_18238_18252[(2)] = inst_18217);

(statearr_18238_18252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (6))){
var inst_18220 = (state_18231[(8)]);
var inst_18217 = (state_18231[(7)]);
var inst_18224 = f.call(null,inst_18217,inst_18220);
var inst_18217__$1 = inst_18224;
var state_18231__$1 = (function (){var statearr_18239 = state_18231;
(statearr_18239[(7)] = inst_18217__$1);

return statearr_18239;
})();
var statearr_18240_18253 = state_18231__$1;
(statearr_18240_18253[(2)] = null);

(statearr_18240_18253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18232 === (7))){
var inst_18227 = (state_18231[(2)]);
var state_18231__$1 = state_18231;
var statearr_18241_18254 = state_18231__$1;
(statearr_18241_18254[(2)] = inst_18227);

(statearr_18241_18254[(1)] = (3));


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
});})(c__10274__auto__))
;
return ((function (switch__10209__auto__,c__10274__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10210__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = cljs$core$async$reduce_$_state_machine__10210__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var cljs$core$async$reduce_$_state_machine__10210__auto____1 = (function (state_18231){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18246){if((e18246 instanceof Object)){
var ex__10213__auto__ = e18246;
var statearr_18247_18255 = state_18231;
(statearr_18247_18255[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18256 = state_18231;
state_18231 = G__18256;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10210__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10210__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10210__auto____0;
cljs$core$async$reduce_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10210__auto____1;
return cljs$core$async$reduce_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_18248 = f__10275__auto__.call(null);
(statearr_18248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto__))
);

return c__10274__auto__;
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
var args18257 = [];
var len__6152__auto___18309 = arguments.length;
var i__6153__auto___18310 = (0);
while(true){
if((i__6153__auto___18310 < len__6152__auto___18309)){
args18257.push((arguments[i__6153__auto___18310]));

var G__18311 = (i__6153__auto___18310 + (1));
i__6153__auto___18310 = G__18311;
continue;
} else {
}
break;
}

var G__18259 = args18257.length;
switch (G__18259) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18257.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto__){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto__){
return (function (state_18284){
var state_val_18285 = (state_18284[(1)]);
if((state_val_18285 === (7))){
var inst_18266 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18286_18313 = state_18284__$1;
(statearr_18286_18313[(2)] = inst_18266);

(statearr_18286_18313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (1))){
var inst_18260 = cljs.core.seq.call(null,coll);
var inst_18261 = inst_18260;
var state_18284__$1 = (function (){var statearr_18287 = state_18284;
(statearr_18287[(7)] = inst_18261);

return statearr_18287;
})();
var statearr_18288_18314 = state_18284__$1;
(statearr_18288_18314[(2)] = null);

(statearr_18288_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (4))){
var inst_18261 = (state_18284[(7)]);
var inst_18264 = cljs.core.first.call(null,inst_18261);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18284__$1,(7),ch,inst_18264);
} else {
if((state_val_18285 === (13))){
var inst_18278 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18289_18315 = state_18284__$1;
(statearr_18289_18315[(2)] = inst_18278);

(statearr_18289_18315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (6))){
var inst_18269 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
if(cljs.core.truth_(inst_18269)){
var statearr_18290_18316 = state_18284__$1;
(statearr_18290_18316[(1)] = (8));

} else {
var statearr_18291_18317 = state_18284__$1;
(statearr_18291_18317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (3))){
var inst_18282 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18284__$1,inst_18282);
} else {
if((state_val_18285 === (12))){
var state_18284__$1 = state_18284;
var statearr_18292_18318 = state_18284__$1;
(statearr_18292_18318[(2)] = null);

(statearr_18292_18318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (2))){
var inst_18261 = (state_18284[(7)]);
var state_18284__$1 = state_18284;
if(cljs.core.truth_(inst_18261)){
var statearr_18293_18319 = state_18284__$1;
(statearr_18293_18319[(1)] = (4));

} else {
var statearr_18294_18320 = state_18284__$1;
(statearr_18294_18320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (11))){
var inst_18275 = cljs.core.async.close_BANG_.call(null,ch);
var state_18284__$1 = state_18284;
var statearr_18295_18321 = state_18284__$1;
(statearr_18295_18321[(2)] = inst_18275);

(statearr_18295_18321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (9))){
var state_18284__$1 = state_18284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18296_18322 = state_18284__$1;
(statearr_18296_18322[(1)] = (11));

} else {
var statearr_18297_18323 = state_18284__$1;
(statearr_18297_18323[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (5))){
var inst_18261 = (state_18284[(7)]);
var state_18284__$1 = state_18284;
var statearr_18298_18324 = state_18284__$1;
(statearr_18298_18324[(2)] = inst_18261);

(statearr_18298_18324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (10))){
var inst_18280 = (state_18284[(2)]);
var state_18284__$1 = state_18284;
var statearr_18299_18325 = state_18284__$1;
(statearr_18299_18325[(2)] = inst_18280);

(statearr_18299_18325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18285 === (8))){
var inst_18261 = (state_18284[(7)]);
var inst_18271 = cljs.core.next.call(null,inst_18261);
var inst_18261__$1 = inst_18271;
var state_18284__$1 = (function (){var statearr_18300 = state_18284;
(statearr_18300[(7)] = inst_18261__$1);

return statearr_18300;
})();
var statearr_18301_18326 = state_18284__$1;
(statearr_18301_18326[(2)] = null);

(statearr_18301_18326[(1)] = (2));


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
});})(c__10274__auto__))
;
return ((function (switch__10209__auto__,c__10274__auto__){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_18305 = [null,null,null,null,null,null,null,null];
(statearr_18305[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_18305[(1)] = (1));

return statearr_18305;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_18284){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18306){if((e18306 instanceof Object)){
var ex__10213__auto__ = e18306;
var statearr_18307_18327 = state_18284;
(statearr_18307_18327[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18328 = state_18284;
state_18284 = G__18328;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_18284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_18284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_18308 = f__10275__auto__.call(null);
(statearr_18308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto__))
);

return c__10274__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18550 = (function (mult,ch,cs,meta18551){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18551 = meta18551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18552,meta18551__$1){
var self__ = this;
var _18552__$1 = this;
return (new cljs.core.async.t_cljs$core$async18550(self__.mult,self__.ch,self__.cs,meta18551__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18552){
var self__ = this;
var _18552__$1 = this;
return self__.meta18551;
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18551","meta18551",902674226,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18550";

cljs.core.async.t_cljs$core$async18550.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18550");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18550 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18550(mult__$1,ch__$1,cs__$1,meta18551){
return (new cljs.core.async.t_cljs$core$async18550(mult__$1,ch__$1,cs__$1,meta18551));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18550(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10274__auto___18771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18771,cs,m,dchan,dctr,done){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18771,cs,m,dchan,dctr,done){
return (function (state_18683){
var state_val_18684 = (state_18683[(1)]);
if((state_val_18684 === (7))){
var inst_18679 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18685_18772 = state_18683__$1;
(statearr_18685_18772[(2)] = inst_18679);

(statearr_18685_18772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (20))){
var inst_18584 = (state_18683[(7)]);
var inst_18594 = cljs.core.first.call(null,inst_18584);
var inst_18595 = cljs.core.nth.call(null,inst_18594,(0),null);
var inst_18596 = cljs.core.nth.call(null,inst_18594,(1),null);
var state_18683__$1 = (function (){var statearr_18686 = state_18683;
(statearr_18686[(8)] = inst_18595);

return statearr_18686;
})();
if(cljs.core.truth_(inst_18596)){
var statearr_18687_18773 = state_18683__$1;
(statearr_18687_18773[(1)] = (22));

} else {
var statearr_18688_18774 = state_18683__$1;
(statearr_18688_18774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (27))){
var inst_18626 = (state_18683[(9)]);
var inst_18631 = (state_18683[(10)]);
var inst_18624 = (state_18683[(11)]);
var inst_18555 = (state_18683[(12)]);
var inst_18631__$1 = cljs.core._nth.call(null,inst_18624,inst_18626);
var inst_18632 = cljs.core.async.put_BANG_.call(null,inst_18631__$1,inst_18555,done);
var state_18683__$1 = (function (){var statearr_18689 = state_18683;
(statearr_18689[(10)] = inst_18631__$1);

return statearr_18689;
})();
if(cljs.core.truth_(inst_18632)){
var statearr_18690_18775 = state_18683__$1;
(statearr_18690_18775[(1)] = (30));

} else {
var statearr_18691_18776 = state_18683__$1;
(statearr_18691_18776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (1))){
var state_18683__$1 = state_18683;
var statearr_18692_18777 = state_18683__$1;
(statearr_18692_18777[(2)] = null);

(statearr_18692_18777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (24))){
var inst_18584 = (state_18683[(7)]);
var inst_18601 = (state_18683[(2)]);
var inst_18602 = cljs.core.next.call(null,inst_18584);
var inst_18564 = inst_18602;
var inst_18565 = null;
var inst_18566 = (0);
var inst_18567 = (0);
var state_18683__$1 = (function (){var statearr_18693 = state_18683;
(statearr_18693[(13)] = inst_18566);

(statearr_18693[(14)] = inst_18564);

(statearr_18693[(15)] = inst_18567);

(statearr_18693[(16)] = inst_18601);

(statearr_18693[(17)] = inst_18565);

return statearr_18693;
})();
var statearr_18694_18778 = state_18683__$1;
(statearr_18694_18778[(2)] = null);

(statearr_18694_18778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (39))){
var state_18683__$1 = state_18683;
var statearr_18698_18779 = state_18683__$1;
(statearr_18698_18779[(2)] = null);

(statearr_18698_18779[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (4))){
var inst_18555 = (state_18683[(12)]);
var inst_18555__$1 = (state_18683[(2)]);
var inst_18556 = (inst_18555__$1 == null);
var state_18683__$1 = (function (){var statearr_18699 = state_18683;
(statearr_18699[(12)] = inst_18555__$1);

return statearr_18699;
})();
if(cljs.core.truth_(inst_18556)){
var statearr_18700_18780 = state_18683__$1;
(statearr_18700_18780[(1)] = (5));

} else {
var statearr_18701_18781 = state_18683__$1;
(statearr_18701_18781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (15))){
var inst_18566 = (state_18683[(13)]);
var inst_18564 = (state_18683[(14)]);
var inst_18567 = (state_18683[(15)]);
var inst_18565 = (state_18683[(17)]);
var inst_18580 = (state_18683[(2)]);
var inst_18581 = (inst_18567 + (1));
var tmp18695 = inst_18566;
var tmp18696 = inst_18564;
var tmp18697 = inst_18565;
var inst_18564__$1 = tmp18696;
var inst_18565__$1 = tmp18697;
var inst_18566__$1 = tmp18695;
var inst_18567__$1 = inst_18581;
var state_18683__$1 = (function (){var statearr_18702 = state_18683;
(statearr_18702[(18)] = inst_18580);

(statearr_18702[(13)] = inst_18566__$1);

(statearr_18702[(14)] = inst_18564__$1);

(statearr_18702[(15)] = inst_18567__$1);

(statearr_18702[(17)] = inst_18565__$1);

return statearr_18702;
})();
var statearr_18703_18782 = state_18683__$1;
(statearr_18703_18782[(2)] = null);

(statearr_18703_18782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (21))){
var inst_18605 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18707_18783 = state_18683__$1;
(statearr_18707_18783[(2)] = inst_18605);

(statearr_18707_18783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (31))){
var inst_18631 = (state_18683[(10)]);
var inst_18635 = done.call(null,null);
var inst_18636 = cljs.core.async.untap_STAR_.call(null,m,inst_18631);
var state_18683__$1 = (function (){var statearr_18708 = state_18683;
(statearr_18708[(19)] = inst_18635);

return statearr_18708;
})();
var statearr_18709_18784 = state_18683__$1;
(statearr_18709_18784[(2)] = inst_18636);

(statearr_18709_18784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (32))){
var inst_18625 = (state_18683[(20)]);
var inst_18623 = (state_18683[(21)]);
var inst_18626 = (state_18683[(9)]);
var inst_18624 = (state_18683[(11)]);
var inst_18638 = (state_18683[(2)]);
var inst_18639 = (inst_18626 + (1));
var tmp18704 = inst_18625;
var tmp18705 = inst_18623;
var tmp18706 = inst_18624;
var inst_18623__$1 = tmp18705;
var inst_18624__$1 = tmp18706;
var inst_18625__$1 = tmp18704;
var inst_18626__$1 = inst_18639;
var state_18683__$1 = (function (){var statearr_18710 = state_18683;
(statearr_18710[(20)] = inst_18625__$1);

(statearr_18710[(21)] = inst_18623__$1);

(statearr_18710[(22)] = inst_18638);

(statearr_18710[(9)] = inst_18626__$1);

(statearr_18710[(11)] = inst_18624__$1);

return statearr_18710;
})();
var statearr_18711_18785 = state_18683__$1;
(statearr_18711_18785[(2)] = null);

(statearr_18711_18785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (40))){
var inst_18651 = (state_18683[(23)]);
var inst_18655 = done.call(null,null);
var inst_18656 = cljs.core.async.untap_STAR_.call(null,m,inst_18651);
var state_18683__$1 = (function (){var statearr_18712 = state_18683;
(statearr_18712[(24)] = inst_18655);

return statearr_18712;
})();
var statearr_18713_18786 = state_18683__$1;
(statearr_18713_18786[(2)] = inst_18656);

(statearr_18713_18786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (33))){
var inst_18642 = (state_18683[(25)]);
var inst_18644 = cljs.core.chunked_seq_QMARK_.call(null,inst_18642);
var state_18683__$1 = state_18683;
if(inst_18644){
var statearr_18714_18787 = state_18683__$1;
(statearr_18714_18787[(1)] = (36));

} else {
var statearr_18715_18788 = state_18683__$1;
(statearr_18715_18788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (13))){
var inst_18574 = (state_18683[(26)]);
var inst_18577 = cljs.core.async.close_BANG_.call(null,inst_18574);
var state_18683__$1 = state_18683;
var statearr_18716_18789 = state_18683__$1;
(statearr_18716_18789[(2)] = inst_18577);

(statearr_18716_18789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (22))){
var inst_18595 = (state_18683[(8)]);
var inst_18598 = cljs.core.async.close_BANG_.call(null,inst_18595);
var state_18683__$1 = state_18683;
var statearr_18717_18790 = state_18683__$1;
(statearr_18717_18790[(2)] = inst_18598);

(statearr_18717_18790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (36))){
var inst_18642 = (state_18683[(25)]);
var inst_18646 = cljs.core.chunk_first.call(null,inst_18642);
var inst_18647 = cljs.core.chunk_rest.call(null,inst_18642);
var inst_18648 = cljs.core.count.call(null,inst_18646);
var inst_18623 = inst_18647;
var inst_18624 = inst_18646;
var inst_18625 = inst_18648;
var inst_18626 = (0);
var state_18683__$1 = (function (){var statearr_18718 = state_18683;
(statearr_18718[(20)] = inst_18625);

(statearr_18718[(21)] = inst_18623);

(statearr_18718[(9)] = inst_18626);

(statearr_18718[(11)] = inst_18624);

return statearr_18718;
})();
var statearr_18719_18791 = state_18683__$1;
(statearr_18719_18791[(2)] = null);

(statearr_18719_18791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (41))){
var inst_18642 = (state_18683[(25)]);
var inst_18658 = (state_18683[(2)]);
var inst_18659 = cljs.core.next.call(null,inst_18642);
var inst_18623 = inst_18659;
var inst_18624 = null;
var inst_18625 = (0);
var inst_18626 = (0);
var state_18683__$1 = (function (){var statearr_18720 = state_18683;
(statearr_18720[(20)] = inst_18625);

(statearr_18720[(21)] = inst_18623);

(statearr_18720[(27)] = inst_18658);

(statearr_18720[(9)] = inst_18626);

(statearr_18720[(11)] = inst_18624);

return statearr_18720;
})();
var statearr_18721_18792 = state_18683__$1;
(statearr_18721_18792[(2)] = null);

(statearr_18721_18792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (43))){
var state_18683__$1 = state_18683;
var statearr_18722_18793 = state_18683__$1;
(statearr_18722_18793[(2)] = null);

(statearr_18722_18793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (29))){
var inst_18667 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18723_18794 = state_18683__$1;
(statearr_18723_18794[(2)] = inst_18667);

(statearr_18723_18794[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (44))){
var inst_18676 = (state_18683[(2)]);
var state_18683__$1 = (function (){var statearr_18724 = state_18683;
(statearr_18724[(28)] = inst_18676);

return statearr_18724;
})();
var statearr_18725_18795 = state_18683__$1;
(statearr_18725_18795[(2)] = null);

(statearr_18725_18795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (6))){
var inst_18615 = (state_18683[(29)]);
var inst_18614 = cljs.core.deref.call(null,cs);
var inst_18615__$1 = cljs.core.keys.call(null,inst_18614);
var inst_18616 = cljs.core.count.call(null,inst_18615__$1);
var inst_18617 = cljs.core.reset_BANG_.call(null,dctr,inst_18616);
var inst_18622 = cljs.core.seq.call(null,inst_18615__$1);
var inst_18623 = inst_18622;
var inst_18624 = null;
var inst_18625 = (0);
var inst_18626 = (0);
var state_18683__$1 = (function (){var statearr_18726 = state_18683;
(statearr_18726[(20)] = inst_18625);

(statearr_18726[(21)] = inst_18623);

(statearr_18726[(29)] = inst_18615__$1);

(statearr_18726[(9)] = inst_18626);

(statearr_18726[(11)] = inst_18624);

(statearr_18726[(30)] = inst_18617);

return statearr_18726;
})();
var statearr_18727_18796 = state_18683__$1;
(statearr_18727_18796[(2)] = null);

(statearr_18727_18796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (28))){
var inst_18623 = (state_18683[(21)]);
var inst_18642 = (state_18683[(25)]);
var inst_18642__$1 = cljs.core.seq.call(null,inst_18623);
var state_18683__$1 = (function (){var statearr_18728 = state_18683;
(statearr_18728[(25)] = inst_18642__$1);

return statearr_18728;
})();
if(inst_18642__$1){
var statearr_18729_18797 = state_18683__$1;
(statearr_18729_18797[(1)] = (33));

} else {
var statearr_18730_18798 = state_18683__$1;
(statearr_18730_18798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (25))){
var inst_18625 = (state_18683[(20)]);
var inst_18626 = (state_18683[(9)]);
var inst_18628 = (inst_18626 < inst_18625);
var inst_18629 = inst_18628;
var state_18683__$1 = state_18683;
if(cljs.core.truth_(inst_18629)){
var statearr_18731_18799 = state_18683__$1;
(statearr_18731_18799[(1)] = (27));

} else {
var statearr_18732_18800 = state_18683__$1;
(statearr_18732_18800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (34))){
var state_18683__$1 = state_18683;
var statearr_18733_18801 = state_18683__$1;
(statearr_18733_18801[(2)] = null);

(statearr_18733_18801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (17))){
var state_18683__$1 = state_18683;
var statearr_18734_18802 = state_18683__$1;
(statearr_18734_18802[(2)] = null);

(statearr_18734_18802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (3))){
var inst_18681 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18683__$1,inst_18681);
} else {
if((state_val_18684 === (12))){
var inst_18610 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18735_18803 = state_18683__$1;
(statearr_18735_18803[(2)] = inst_18610);

(statearr_18735_18803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (2))){
var state_18683__$1 = state_18683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18683__$1,(4),ch);
} else {
if((state_val_18684 === (23))){
var state_18683__$1 = state_18683;
var statearr_18736_18804 = state_18683__$1;
(statearr_18736_18804[(2)] = null);

(statearr_18736_18804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (35))){
var inst_18665 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18737_18805 = state_18683__$1;
(statearr_18737_18805[(2)] = inst_18665);

(statearr_18737_18805[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (19))){
var inst_18584 = (state_18683[(7)]);
var inst_18588 = cljs.core.chunk_first.call(null,inst_18584);
var inst_18589 = cljs.core.chunk_rest.call(null,inst_18584);
var inst_18590 = cljs.core.count.call(null,inst_18588);
var inst_18564 = inst_18589;
var inst_18565 = inst_18588;
var inst_18566 = inst_18590;
var inst_18567 = (0);
var state_18683__$1 = (function (){var statearr_18738 = state_18683;
(statearr_18738[(13)] = inst_18566);

(statearr_18738[(14)] = inst_18564);

(statearr_18738[(15)] = inst_18567);

(statearr_18738[(17)] = inst_18565);

return statearr_18738;
})();
var statearr_18739_18806 = state_18683__$1;
(statearr_18739_18806[(2)] = null);

(statearr_18739_18806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (11))){
var inst_18584 = (state_18683[(7)]);
var inst_18564 = (state_18683[(14)]);
var inst_18584__$1 = cljs.core.seq.call(null,inst_18564);
var state_18683__$1 = (function (){var statearr_18740 = state_18683;
(statearr_18740[(7)] = inst_18584__$1);

return statearr_18740;
})();
if(inst_18584__$1){
var statearr_18741_18807 = state_18683__$1;
(statearr_18741_18807[(1)] = (16));

} else {
var statearr_18742_18808 = state_18683__$1;
(statearr_18742_18808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (9))){
var inst_18612 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18743_18809 = state_18683__$1;
(statearr_18743_18809[(2)] = inst_18612);

(statearr_18743_18809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (5))){
var inst_18562 = cljs.core.deref.call(null,cs);
var inst_18563 = cljs.core.seq.call(null,inst_18562);
var inst_18564 = inst_18563;
var inst_18565 = null;
var inst_18566 = (0);
var inst_18567 = (0);
var state_18683__$1 = (function (){var statearr_18744 = state_18683;
(statearr_18744[(13)] = inst_18566);

(statearr_18744[(14)] = inst_18564);

(statearr_18744[(15)] = inst_18567);

(statearr_18744[(17)] = inst_18565);

return statearr_18744;
})();
var statearr_18745_18810 = state_18683__$1;
(statearr_18745_18810[(2)] = null);

(statearr_18745_18810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (14))){
var state_18683__$1 = state_18683;
var statearr_18746_18811 = state_18683__$1;
(statearr_18746_18811[(2)] = null);

(statearr_18746_18811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (45))){
var inst_18673 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18747_18812 = state_18683__$1;
(statearr_18747_18812[(2)] = inst_18673);

(statearr_18747_18812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (26))){
var inst_18615 = (state_18683[(29)]);
var inst_18669 = (state_18683[(2)]);
var inst_18670 = cljs.core.seq.call(null,inst_18615);
var state_18683__$1 = (function (){var statearr_18748 = state_18683;
(statearr_18748[(31)] = inst_18669);

return statearr_18748;
})();
if(inst_18670){
var statearr_18749_18813 = state_18683__$1;
(statearr_18749_18813[(1)] = (42));

} else {
var statearr_18750_18814 = state_18683__$1;
(statearr_18750_18814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (16))){
var inst_18584 = (state_18683[(7)]);
var inst_18586 = cljs.core.chunked_seq_QMARK_.call(null,inst_18584);
var state_18683__$1 = state_18683;
if(inst_18586){
var statearr_18751_18815 = state_18683__$1;
(statearr_18751_18815[(1)] = (19));

} else {
var statearr_18752_18816 = state_18683__$1;
(statearr_18752_18816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (38))){
var inst_18662 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18753_18817 = state_18683__$1;
(statearr_18753_18817[(2)] = inst_18662);

(statearr_18753_18817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (30))){
var state_18683__$1 = state_18683;
var statearr_18754_18818 = state_18683__$1;
(statearr_18754_18818[(2)] = null);

(statearr_18754_18818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (10))){
var inst_18567 = (state_18683[(15)]);
var inst_18565 = (state_18683[(17)]);
var inst_18573 = cljs.core._nth.call(null,inst_18565,inst_18567);
var inst_18574 = cljs.core.nth.call(null,inst_18573,(0),null);
var inst_18575 = cljs.core.nth.call(null,inst_18573,(1),null);
var state_18683__$1 = (function (){var statearr_18755 = state_18683;
(statearr_18755[(26)] = inst_18574);

return statearr_18755;
})();
if(cljs.core.truth_(inst_18575)){
var statearr_18756_18819 = state_18683__$1;
(statearr_18756_18819[(1)] = (13));

} else {
var statearr_18757_18820 = state_18683__$1;
(statearr_18757_18820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (18))){
var inst_18608 = (state_18683[(2)]);
var state_18683__$1 = state_18683;
var statearr_18758_18821 = state_18683__$1;
(statearr_18758_18821[(2)] = inst_18608);

(statearr_18758_18821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (42))){
var state_18683__$1 = state_18683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18683__$1,(45),dchan);
} else {
if((state_val_18684 === (37))){
var inst_18651 = (state_18683[(23)]);
var inst_18555 = (state_18683[(12)]);
var inst_18642 = (state_18683[(25)]);
var inst_18651__$1 = cljs.core.first.call(null,inst_18642);
var inst_18652 = cljs.core.async.put_BANG_.call(null,inst_18651__$1,inst_18555,done);
var state_18683__$1 = (function (){var statearr_18759 = state_18683;
(statearr_18759[(23)] = inst_18651__$1);

return statearr_18759;
})();
if(cljs.core.truth_(inst_18652)){
var statearr_18760_18822 = state_18683__$1;
(statearr_18760_18822[(1)] = (39));

} else {
var statearr_18761_18823 = state_18683__$1;
(statearr_18761_18823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18684 === (8))){
var inst_18566 = (state_18683[(13)]);
var inst_18567 = (state_18683[(15)]);
var inst_18569 = (inst_18567 < inst_18566);
var inst_18570 = inst_18569;
var state_18683__$1 = state_18683;
if(cljs.core.truth_(inst_18570)){
var statearr_18762_18824 = state_18683__$1;
(statearr_18762_18824[(1)] = (10));

} else {
var statearr_18763_18825 = state_18683__$1;
(statearr_18763_18825[(1)] = (11));

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
});})(c__10274__auto___18771,cs,m,dchan,dctr,done))
;
return ((function (switch__10209__auto__,c__10274__auto___18771,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10210__auto__ = null;
var cljs$core$async$mult_$_state_machine__10210__auto____0 = (function (){
var statearr_18767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18767[(0)] = cljs$core$async$mult_$_state_machine__10210__auto__);

(statearr_18767[(1)] = (1));

return statearr_18767;
});
var cljs$core$async$mult_$_state_machine__10210__auto____1 = (function (state_18683){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18768){if((e18768 instanceof Object)){
var ex__10213__auto__ = e18768;
var statearr_18769_18826 = state_18683;
(statearr_18769_18826[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18827 = state_18683;
state_18683 = G__18827;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10210__auto__ = function(state_18683){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10210__auto____1.call(this,state_18683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10210__auto____0;
cljs$core$async$mult_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10210__auto____1;
return cljs$core$async$mult_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18771,cs,m,dchan,dctr,done))
})();
var state__10276__auto__ = (function (){var statearr_18770 = f__10275__auto__.call(null);
(statearr_18770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18771);

return statearr_18770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18771,cs,m,dchan,dctr,done))
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
var args18828 = [];
var len__6152__auto___18831 = arguments.length;
var i__6153__auto___18832 = (0);
while(true){
if((i__6153__auto___18832 < len__6152__auto___18831)){
args18828.push((arguments[i__6153__auto___18832]));

var G__18833 = (i__6153__auto___18832 + (1));
i__6153__auto___18832 = G__18833;
continue;
} else {
}
break;
}

var G__18830 = args18828.length;
switch (G__18830) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18828.length)].join('')));

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
var len__6152__auto___18845 = arguments.length;
var i__6153__auto___18846 = (0);
while(true){
if((i__6153__auto___18846 < len__6152__auto___18845)){
args__6159__auto__.push((arguments[i__6153__auto___18846]));

var G__18847 = (i__6153__auto___18846 + (1));
i__6153__auto___18846 = G__18847;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18839){
var map__18840 = p__18839;
var map__18840__$1 = ((((!((map__18840 == null)))?((((map__18840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18840):map__18840);
var opts = map__18840__$1;
var statearr_18842_18848 = state;
(statearr_18842_18848[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18840,map__18840__$1,opts){
return (function (val){
var statearr_18843_18849 = state;
(statearr_18843_18849[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18840,map__18840__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18844_18850 = state;
(statearr_18844_18850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18835){
var G__18836 = cljs.core.first.call(null,seq18835);
var seq18835__$1 = cljs.core.next.call(null,seq18835);
var G__18837 = cljs.core.first.call(null,seq18835__$1);
var seq18835__$2 = cljs.core.next.call(null,seq18835__$1);
var G__18838 = cljs.core.first.call(null,seq18835__$2);
var seq18835__$3 = cljs.core.next.call(null,seq18835__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18836,G__18837,G__18838,seq18835__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19014 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19015){
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
this.meta19015 = meta19015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19016,meta19015__$1){
var self__ = this;
var _19016__$1 = this;
return (new cljs.core.async.t_cljs$core$async19014(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19015__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19016){
var self__ = this;
var _19016__$1 = this;
return self__.meta19015;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19014.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19015","meta19015",-814824388,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19014";

cljs.core.async.t_cljs$core$async19014.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19014");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19014 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19014(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19015){
return (new cljs.core.async.t_cljs$core$async19014(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19015));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19014(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10274__auto___19177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19114){
var state_val_19115 = (state_19114[(1)]);
if((state_val_19115 === (7))){
var inst_19032 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19116_19178 = state_19114__$1;
(statearr_19116_19178[(2)] = inst_19032);

(statearr_19116_19178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (20))){
var inst_19044 = (state_19114[(7)]);
var state_19114__$1 = state_19114;
var statearr_19117_19179 = state_19114__$1;
(statearr_19117_19179[(2)] = inst_19044);

(statearr_19117_19179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (27))){
var state_19114__$1 = state_19114;
var statearr_19118_19180 = state_19114__$1;
(statearr_19118_19180[(2)] = null);

(statearr_19118_19180[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (1))){
var inst_19020 = (state_19114[(8)]);
var inst_19020__$1 = calc_state.call(null);
var inst_19022 = (inst_19020__$1 == null);
var inst_19023 = cljs.core.not.call(null,inst_19022);
var state_19114__$1 = (function (){var statearr_19119 = state_19114;
(statearr_19119[(8)] = inst_19020__$1);

return statearr_19119;
})();
if(inst_19023){
var statearr_19120_19181 = state_19114__$1;
(statearr_19120_19181[(1)] = (2));

} else {
var statearr_19121_19182 = state_19114__$1;
(statearr_19121_19182[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (24))){
var inst_19067 = (state_19114[(9)]);
var inst_19088 = (state_19114[(10)]);
var inst_19074 = (state_19114[(11)]);
var inst_19088__$1 = inst_19067.call(null,inst_19074);
var state_19114__$1 = (function (){var statearr_19122 = state_19114;
(statearr_19122[(10)] = inst_19088__$1);

return statearr_19122;
})();
if(cljs.core.truth_(inst_19088__$1)){
var statearr_19123_19183 = state_19114__$1;
(statearr_19123_19183[(1)] = (29));

} else {
var statearr_19124_19184 = state_19114__$1;
(statearr_19124_19184[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (4))){
var inst_19035 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19035)){
var statearr_19125_19185 = state_19114__$1;
(statearr_19125_19185[(1)] = (8));

} else {
var statearr_19126_19186 = state_19114__$1;
(statearr_19126_19186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (15))){
var inst_19061 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19061)){
var statearr_19127_19187 = state_19114__$1;
(statearr_19127_19187[(1)] = (19));

} else {
var statearr_19128_19188 = state_19114__$1;
(statearr_19128_19188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (21))){
var inst_19066 = (state_19114[(12)]);
var inst_19066__$1 = (state_19114[(2)]);
var inst_19067 = cljs.core.get.call(null,inst_19066__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19068 = cljs.core.get.call(null,inst_19066__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19069 = cljs.core.get.call(null,inst_19066__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19114__$1 = (function (){var statearr_19129 = state_19114;
(statearr_19129[(12)] = inst_19066__$1);

(statearr_19129[(9)] = inst_19067);

(statearr_19129[(13)] = inst_19068);

return statearr_19129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19114__$1,(22),inst_19069);
} else {
if((state_val_19115 === (31))){
var inst_19096 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19096)){
var statearr_19130_19189 = state_19114__$1;
(statearr_19130_19189[(1)] = (32));

} else {
var statearr_19131_19190 = state_19114__$1;
(statearr_19131_19190[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (32))){
var inst_19073 = (state_19114[(14)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19114__$1,(35),out,inst_19073);
} else {
if((state_val_19115 === (33))){
var inst_19066 = (state_19114[(12)]);
var inst_19044 = inst_19066;
var state_19114__$1 = (function (){var statearr_19132 = state_19114;
(statearr_19132[(7)] = inst_19044);

return statearr_19132;
})();
var statearr_19133_19191 = state_19114__$1;
(statearr_19133_19191[(2)] = null);

(statearr_19133_19191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (13))){
var inst_19044 = (state_19114[(7)]);
var inst_19051 = inst_19044.cljs$lang$protocol_mask$partition0$;
var inst_19052 = (inst_19051 & (64));
var inst_19053 = inst_19044.cljs$core$ISeq$;
var inst_19054 = (inst_19052) || (inst_19053);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19054)){
var statearr_19134_19192 = state_19114__$1;
(statearr_19134_19192[(1)] = (16));

} else {
var statearr_19135_19193 = state_19114__$1;
(statearr_19135_19193[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (22))){
var inst_19073 = (state_19114[(14)]);
var inst_19074 = (state_19114[(11)]);
var inst_19072 = (state_19114[(2)]);
var inst_19073__$1 = cljs.core.nth.call(null,inst_19072,(0),null);
var inst_19074__$1 = cljs.core.nth.call(null,inst_19072,(1),null);
var inst_19075 = (inst_19073__$1 == null);
var inst_19076 = cljs.core._EQ_.call(null,inst_19074__$1,change);
var inst_19077 = (inst_19075) || (inst_19076);
var state_19114__$1 = (function (){var statearr_19136 = state_19114;
(statearr_19136[(14)] = inst_19073__$1);

(statearr_19136[(11)] = inst_19074__$1);

return statearr_19136;
})();
if(cljs.core.truth_(inst_19077)){
var statearr_19137_19194 = state_19114__$1;
(statearr_19137_19194[(1)] = (23));

} else {
var statearr_19138_19195 = state_19114__$1;
(statearr_19138_19195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (36))){
var inst_19066 = (state_19114[(12)]);
var inst_19044 = inst_19066;
var state_19114__$1 = (function (){var statearr_19139 = state_19114;
(statearr_19139[(7)] = inst_19044);

return statearr_19139;
})();
var statearr_19140_19196 = state_19114__$1;
(statearr_19140_19196[(2)] = null);

(statearr_19140_19196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (29))){
var inst_19088 = (state_19114[(10)]);
var state_19114__$1 = state_19114;
var statearr_19141_19197 = state_19114__$1;
(statearr_19141_19197[(2)] = inst_19088);

(statearr_19141_19197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (6))){
var state_19114__$1 = state_19114;
var statearr_19142_19198 = state_19114__$1;
(statearr_19142_19198[(2)] = false);

(statearr_19142_19198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (28))){
var inst_19084 = (state_19114[(2)]);
var inst_19085 = calc_state.call(null);
var inst_19044 = inst_19085;
var state_19114__$1 = (function (){var statearr_19143 = state_19114;
(statearr_19143[(15)] = inst_19084);

(statearr_19143[(7)] = inst_19044);

return statearr_19143;
})();
var statearr_19144_19199 = state_19114__$1;
(statearr_19144_19199[(2)] = null);

(statearr_19144_19199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (25))){
var inst_19110 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19145_19200 = state_19114__$1;
(statearr_19145_19200[(2)] = inst_19110);

(statearr_19145_19200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (34))){
var inst_19108 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19146_19201 = state_19114__$1;
(statearr_19146_19201[(2)] = inst_19108);

(statearr_19146_19201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (17))){
var state_19114__$1 = state_19114;
var statearr_19147_19202 = state_19114__$1;
(statearr_19147_19202[(2)] = false);

(statearr_19147_19202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (3))){
var state_19114__$1 = state_19114;
var statearr_19148_19203 = state_19114__$1;
(statearr_19148_19203[(2)] = false);

(statearr_19148_19203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (12))){
var inst_19112 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19114__$1,inst_19112);
} else {
if((state_val_19115 === (2))){
var inst_19020 = (state_19114[(8)]);
var inst_19025 = inst_19020.cljs$lang$protocol_mask$partition0$;
var inst_19026 = (inst_19025 & (64));
var inst_19027 = inst_19020.cljs$core$ISeq$;
var inst_19028 = (inst_19026) || (inst_19027);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19028)){
var statearr_19149_19204 = state_19114__$1;
(statearr_19149_19204[(1)] = (5));

} else {
var statearr_19150_19205 = state_19114__$1;
(statearr_19150_19205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (23))){
var inst_19073 = (state_19114[(14)]);
var inst_19079 = (inst_19073 == null);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19079)){
var statearr_19151_19206 = state_19114__$1;
(statearr_19151_19206[(1)] = (26));

} else {
var statearr_19152_19207 = state_19114__$1;
(statearr_19152_19207[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (35))){
var inst_19099 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
if(cljs.core.truth_(inst_19099)){
var statearr_19153_19208 = state_19114__$1;
(statearr_19153_19208[(1)] = (36));

} else {
var statearr_19154_19209 = state_19114__$1;
(statearr_19154_19209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (19))){
var inst_19044 = (state_19114[(7)]);
var inst_19063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19044);
var state_19114__$1 = state_19114;
var statearr_19155_19210 = state_19114__$1;
(statearr_19155_19210[(2)] = inst_19063);

(statearr_19155_19210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (11))){
var inst_19044 = (state_19114[(7)]);
var inst_19048 = (inst_19044 == null);
var inst_19049 = cljs.core.not.call(null,inst_19048);
var state_19114__$1 = state_19114;
if(inst_19049){
var statearr_19156_19211 = state_19114__$1;
(statearr_19156_19211[(1)] = (13));

} else {
var statearr_19157_19212 = state_19114__$1;
(statearr_19157_19212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (9))){
var inst_19020 = (state_19114[(8)]);
var state_19114__$1 = state_19114;
var statearr_19158_19213 = state_19114__$1;
(statearr_19158_19213[(2)] = inst_19020);

(statearr_19158_19213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (5))){
var state_19114__$1 = state_19114;
var statearr_19159_19214 = state_19114__$1;
(statearr_19159_19214[(2)] = true);

(statearr_19159_19214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (14))){
var state_19114__$1 = state_19114;
var statearr_19160_19215 = state_19114__$1;
(statearr_19160_19215[(2)] = false);

(statearr_19160_19215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (26))){
var inst_19074 = (state_19114[(11)]);
var inst_19081 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19074);
var state_19114__$1 = state_19114;
var statearr_19161_19216 = state_19114__$1;
(statearr_19161_19216[(2)] = inst_19081);

(statearr_19161_19216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (16))){
var state_19114__$1 = state_19114;
var statearr_19162_19217 = state_19114__$1;
(statearr_19162_19217[(2)] = true);

(statearr_19162_19217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (38))){
var inst_19104 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19163_19218 = state_19114__$1;
(statearr_19163_19218[(2)] = inst_19104);

(statearr_19163_19218[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (30))){
var inst_19067 = (state_19114[(9)]);
var inst_19068 = (state_19114[(13)]);
var inst_19074 = (state_19114[(11)]);
var inst_19091 = cljs.core.empty_QMARK_.call(null,inst_19067);
var inst_19092 = inst_19068.call(null,inst_19074);
var inst_19093 = cljs.core.not.call(null,inst_19092);
var inst_19094 = (inst_19091) && (inst_19093);
var state_19114__$1 = state_19114;
var statearr_19164_19219 = state_19114__$1;
(statearr_19164_19219[(2)] = inst_19094);

(statearr_19164_19219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (10))){
var inst_19020 = (state_19114[(8)]);
var inst_19040 = (state_19114[(2)]);
var inst_19041 = cljs.core.get.call(null,inst_19040,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19042 = cljs.core.get.call(null,inst_19040,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19043 = cljs.core.get.call(null,inst_19040,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19044 = inst_19020;
var state_19114__$1 = (function (){var statearr_19165 = state_19114;
(statearr_19165[(16)] = inst_19043);

(statearr_19165[(17)] = inst_19041);

(statearr_19165[(18)] = inst_19042);

(statearr_19165[(7)] = inst_19044);

return statearr_19165;
})();
var statearr_19166_19220 = state_19114__$1;
(statearr_19166_19220[(2)] = null);

(statearr_19166_19220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (18))){
var inst_19058 = (state_19114[(2)]);
var state_19114__$1 = state_19114;
var statearr_19167_19221 = state_19114__$1;
(statearr_19167_19221[(2)] = inst_19058);

(statearr_19167_19221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (37))){
var state_19114__$1 = state_19114;
var statearr_19168_19222 = state_19114__$1;
(statearr_19168_19222[(2)] = null);

(statearr_19168_19222[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19115 === (8))){
var inst_19020 = (state_19114[(8)]);
var inst_19037 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19020);
var state_19114__$1 = state_19114;
var statearr_19169_19223 = state_19114__$1;
(statearr_19169_19223[(2)] = inst_19037);

(statearr_19169_19223[(1)] = (10));


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
});})(c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10209__auto__,c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10210__auto__ = null;
var cljs$core$async$mix_$_state_machine__10210__auto____0 = (function (){
var statearr_19173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19173[(0)] = cljs$core$async$mix_$_state_machine__10210__auto__);

(statearr_19173[(1)] = (1));

return statearr_19173;
});
var cljs$core$async$mix_$_state_machine__10210__auto____1 = (function (state_19114){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19174){if((e19174 instanceof Object)){
var ex__10213__auto__ = e19174;
var statearr_19175_19224 = state_19114;
(statearr_19175_19224[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19225 = state_19114;
state_19114 = G__19225;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10210__auto__ = function(state_19114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10210__auto____1.call(this,state_19114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10210__auto____0;
cljs$core$async$mix_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10210__auto____1;
return cljs$core$async$mix_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10276__auto__ = (function (){var statearr_19176 = f__10275__auto__.call(null);
(statearr_19176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19177);

return statearr_19176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19177,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19226 = [];
var len__6152__auto___19229 = arguments.length;
var i__6153__auto___19230 = (0);
while(true){
if((i__6153__auto___19230 < len__6152__auto___19229)){
args19226.push((arguments[i__6153__auto___19230]));

var G__19231 = (i__6153__auto___19230 + (1));
i__6153__auto___19230 = G__19231;
continue;
} else {
}
break;
}

var G__19228 = args19226.length;
switch (G__19228) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19226.length)].join('')));

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
var args19234 = [];
var len__6152__auto___19359 = arguments.length;
var i__6153__auto___19360 = (0);
while(true){
if((i__6153__auto___19360 < len__6152__auto___19359)){
args19234.push((arguments[i__6153__auto___19360]));

var G__19361 = (i__6153__auto___19360 + (1));
i__6153__auto___19360 = G__19361;
continue;
} else {
}
break;
}

var G__19236 = args19234.length;
switch (G__19236) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19234.length)].join('')));

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
return (function (p1__19233_SHARP_){
if(cljs.core.truth_(p1__19233_SHARP_.call(null,topic))){
return p1__19233_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19233_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19237 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19238){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19238 = meta19238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19239,meta19238__$1){
var self__ = this;
var _19239__$1 = this;
return (new cljs.core.async.t_cljs$core$async19237(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19238__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19239){
var self__ = this;
var _19239__$1 = this;
return self__.meta19238;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19238","meta19238",1500082633,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19237";

cljs.core.async.t_cljs$core$async19237.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19237");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19237 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19238){
return (new cljs.core.async.t_cljs$core$async19237(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19238));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19237(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10274__auto___19363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19363,mults,ensure_mult,p){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19363,mults,ensure_mult,p){
return (function (state_19311){
var state_val_19312 = (state_19311[(1)]);
if((state_val_19312 === (7))){
var inst_19307 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19313_19364 = state_19311__$1;
(statearr_19313_19364[(2)] = inst_19307);

(statearr_19313_19364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (20))){
var state_19311__$1 = state_19311;
var statearr_19314_19365 = state_19311__$1;
(statearr_19314_19365[(2)] = null);

(statearr_19314_19365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (1))){
var state_19311__$1 = state_19311;
var statearr_19315_19366 = state_19311__$1;
(statearr_19315_19366[(2)] = null);

(statearr_19315_19366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (24))){
var inst_19290 = (state_19311[(7)]);
var inst_19299 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19290);
var state_19311__$1 = state_19311;
var statearr_19316_19367 = state_19311__$1;
(statearr_19316_19367[(2)] = inst_19299);

(statearr_19316_19367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (4))){
var inst_19242 = (state_19311[(8)]);
var inst_19242__$1 = (state_19311[(2)]);
var inst_19243 = (inst_19242__$1 == null);
var state_19311__$1 = (function (){var statearr_19317 = state_19311;
(statearr_19317[(8)] = inst_19242__$1);

return statearr_19317;
})();
if(cljs.core.truth_(inst_19243)){
var statearr_19318_19368 = state_19311__$1;
(statearr_19318_19368[(1)] = (5));

} else {
var statearr_19319_19369 = state_19311__$1;
(statearr_19319_19369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (15))){
var inst_19284 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19320_19370 = state_19311__$1;
(statearr_19320_19370[(2)] = inst_19284);

(statearr_19320_19370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (21))){
var inst_19304 = (state_19311[(2)]);
var state_19311__$1 = (function (){var statearr_19321 = state_19311;
(statearr_19321[(9)] = inst_19304);

return statearr_19321;
})();
var statearr_19322_19371 = state_19311__$1;
(statearr_19322_19371[(2)] = null);

(statearr_19322_19371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (13))){
var inst_19266 = (state_19311[(10)]);
var inst_19268 = cljs.core.chunked_seq_QMARK_.call(null,inst_19266);
var state_19311__$1 = state_19311;
if(inst_19268){
var statearr_19323_19372 = state_19311__$1;
(statearr_19323_19372[(1)] = (16));

} else {
var statearr_19324_19373 = state_19311__$1;
(statearr_19324_19373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (22))){
var inst_19296 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
if(cljs.core.truth_(inst_19296)){
var statearr_19325_19374 = state_19311__$1;
(statearr_19325_19374[(1)] = (23));

} else {
var statearr_19326_19375 = state_19311__$1;
(statearr_19326_19375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (6))){
var inst_19292 = (state_19311[(11)]);
var inst_19290 = (state_19311[(7)]);
var inst_19242 = (state_19311[(8)]);
var inst_19290__$1 = topic_fn.call(null,inst_19242);
var inst_19291 = cljs.core.deref.call(null,mults);
var inst_19292__$1 = cljs.core.get.call(null,inst_19291,inst_19290__$1);
var state_19311__$1 = (function (){var statearr_19327 = state_19311;
(statearr_19327[(11)] = inst_19292__$1);

(statearr_19327[(7)] = inst_19290__$1);

return statearr_19327;
})();
if(cljs.core.truth_(inst_19292__$1)){
var statearr_19328_19376 = state_19311__$1;
(statearr_19328_19376[(1)] = (19));

} else {
var statearr_19329_19377 = state_19311__$1;
(statearr_19329_19377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (25))){
var inst_19301 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19330_19378 = state_19311__$1;
(statearr_19330_19378[(2)] = inst_19301);

(statearr_19330_19378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (17))){
var inst_19266 = (state_19311[(10)]);
var inst_19275 = cljs.core.first.call(null,inst_19266);
var inst_19276 = cljs.core.async.muxch_STAR_.call(null,inst_19275);
var inst_19277 = cljs.core.async.close_BANG_.call(null,inst_19276);
var inst_19278 = cljs.core.next.call(null,inst_19266);
var inst_19252 = inst_19278;
var inst_19253 = null;
var inst_19254 = (0);
var inst_19255 = (0);
var state_19311__$1 = (function (){var statearr_19331 = state_19311;
(statearr_19331[(12)] = inst_19254);

(statearr_19331[(13)] = inst_19277);

(statearr_19331[(14)] = inst_19253);

(statearr_19331[(15)] = inst_19255);

(statearr_19331[(16)] = inst_19252);

return statearr_19331;
})();
var statearr_19332_19379 = state_19311__$1;
(statearr_19332_19379[(2)] = null);

(statearr_19332_19379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (3))){
var inst_19309 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19311__$1,inst_19309);
} else {
if((state_val_19312 === (12))){
var inst_19286 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19333_19380 = state_19311__$1;
(statearr_19333_19380[(2)] = inst_19286);

(statearr_19333_19380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (2))){
var state_19311__$1 = state_19311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19311__$1,(4),ch);
} else {
if((state_val_19312 === (23))){
var state_19311__$1 = state_19311;
var statearr_19334_19381 = state_19311__$1;
(statearr_19334_19381[(2)] = null);

(statearr_19334_19381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (19))){
var inst_19292 = (state_19311[(11)]);
var inst_19242 = (state_19311[(8)]);
var inst_19294 = cljs.core.async.muxch_STAR_.call(null,inst_19292);
var state_19311__$1 = state_19311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19311__$1,(22),inst_19294,inst_19242);
} else {
if((state_val_19312 === (11))){
var inst_19266 = (state_19311[(10)]);
var inst_19252 = (state_19311[(16)]);
var inst_19266__$1 = cljs.core.seq.call(null,inst_19252);
var state_19311__$1 = (function (){var statearr_19335 = state_19311;
(statearr_19335[(10)] = inst_19266__$1);

return statearr_19335;
})();
if(inst_19266__$1){
var statearr_19336_19382 = state_19311__$1;
(statearr_19336_19382[(1)] = (13));

} else {
var statearr_19337_19383 = state_19311__$1;
(statearr_19337_19383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (9))){
var inst_19288 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19338_19384 = state_19311__$1;
(statearr_19338_19384[(2)] = inst_19288);

(statearr_19338_19384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (5))){
var inst_19249 = cljs.core.deref.call(null,mults);
var inst_19250 = cljs.core.vals.call(null,inst_19249);
var inst_19251 = cljs.core.seq.call(null,inst_19250);
var inst_19252 = inst_19251;
var inst_19253 = null;
var inst_19254 = (0);
var inst_19255 = (0);
var state_19311__$1 = (function (){var statearr_19339 = state_19311;
(statearr_19339[(12)] = inst_19254);

(statearr_19339[(14)] = inst_19253);

(statearr_19339[(15)] = inst_19255);

(statearr_19339[(16)] = inst_19252);

return statearr_19339;
})();
var statearr_19340_19385 = state_19311__$1;
(statearr_19340_19385[(2)] = null);

(statearr_19340_19385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (14))){
var state_19311__$1 = state_19311;
var statearr_19344_19386 = state_19311__$1;
(statearr_19344_19386[(2)] = null);

(statearr_19344_19386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (16))){
var inst_19266 = (state_19311[(10)]);
var inst_19270 = cljs.core.chunk_first.call(null,inst_19266);
var inst_19271 = cljs.core.chunk_rest.call(null,inst_19266);
var inst_19272 = cljs.core.count.call(null,inst_19270);
var inst_19252 = inst_19271;
var inst_19253 = inst_19270;
var inst_19254 = inst_19272;
var inst_19255 = (0);
var state_19311__$1 = (function (){var statearr_19345 = state_19311;
(statearr_19345[(12)] = inst_19254);

(statearr_19345[(14)] = inst_19253);

(statearr_19345[(15)] = inst_19255);

(statearr_19345[(16)] = inst_19252);

return statearr_19345;
})();
var statearr_19346_19387 = state_19311__$1;
(statearr_19346_19387[(2)] = null);

(statearr_19346_19387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (10))){
var inst_19254 = (state_19311[(12)]);
var inst_19253 = (state_19311[(14)]);
var inst_19255 = (state_19311[(15)]);
var inst_19252 = (state_19311[(16)]);
var inst_19260 = cljs.core._nth.call(null,inst_19253,inst_19255);
var inst_19261 = cljs.core.async.muxch_STAR_.call(null,inst_19260);
var inst_19262 = cljs.core.async.close_BANG_.call(null,inst_19261);
var inst_19263 = (inst_19255 + (1));
var tmp19341 = inst_19254;
var tmp19342 = inst_19253;
var tmp19343 = inst_19252;
var inst_19252__$1 = tmp19343;
var inst_19253__$1 = tmp19342;
var inst_19254__$1 = tmp19341;
var inst_19255__$1 = inst_19263;
var state_19311__$1 = (function (){var statearr_19347 = state_19311;
(statearr_19347[(12)] = inst_19254__$1);

(statearr_19347[(14)] = inst_19253__$1);

(statearr_19347[(15)] = inst_19255__$1);

(statearr_19347[(17)] = inst_19262);

(statearr_19347[(16)] = inst_19252__$1);

return statearr_19347;
})();
var statearr_19348_19388 = state_19311__$1;
(statearr_19348_19388[(2)] = null);

(statearr_19348_19388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (18))){
var inst_19281 = (state_19311[(2)]);
var state_19311__$1 = state_19311;
var statearr_19349_19389 = state_19311__$1;
(statearr_19349_19389[(2)] = inst_19281);

(statearr_19349_19389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19312 === (8))){
var inst_19254 = (state_19311[(12)]);
var inst_19255 = (state_19311[(15)]);
var inst_19257 = (inst_19255 < inst_19254);
var inst_19258 = inst_19257;
var state_19311__$1 = state_19311;
if(cljs.core.truth_(inst_19258)){
var statearr_19350_19390 = state_19311__$1;
(statearr_19350_19390[(1)] = (10));

} else {
var statearr_19351_19391 = state_19311__$1;
(statearr_19351_19391[(1)] = (11));

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
});})(c__10274__auto___19363,mults,ensure_mult,p))
;
return ((function (switch__10209__auto__,c__10274__auto___19363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19355[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19355[(1)] = (1));

return statearr_19355;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19311){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19356){if((e19356 instanceof Object)){
var ex__10213__auto__ = e19356;
var statearr_19357_19392 = state_19311;
(statearr_19357_19392[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19393 = state_19311;
state_19311 = G__19393;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19363,mults,ensure_mult,p))
})();
var state__10276__auto__ = (function (){var statearr_19358 = f__10275__auto__.call(null);
(statearr_19358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19363);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19363,mults,ensure_mult,p))
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
var args19394 = [];
var len__6152__auto___19397 = arguments.length;
var i__6153__auto___19398 = (0);
while(true){
if((i__6153__auto___19398 < len__6152__auto___19397)){
args19394.push((arguments[i__6153__auto___19398]));

var G__19399 = (i__6153__auto___19398 + (1));
i__6153__auto___19398 = G__19399;
continue;
} else {
}
break;
}

var G__19396 = args19394.length;
switch (G__19396) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19394.length)].join('')));

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
var args19401 = [];
var len__6152__auto___19404 = arguments.length;
var i__6153__auto___19405 = (0);
while(true){
if((i__6153__auto___19405 < len__6152__auto___19404)){
args19401.push((arguments[i__6153__auto___19405]));

var G__19406 = (i__6153__auto___19405 + (1));
i__6153__auto___19405 = G__19406;
continue;
} else {
}
break;
}

var G__19403 = args19401.length;
switch (G__19403) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19401.length)].join('')));

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
var args19408 = [];
var len__6152__auto___19479 = arguments.length;
var i__6153__auto___19480 = (0);
while(true){
if((i__6153__auto___19480 < len__6152__auto___19479)){
args19408.push((arguments[i__6153__auto___19480]));

var G__19481 = (i__6153__auto___19480 + (1));
i__6153__auto___19480 = G__19481;
continue;
} else {
}
break;
}

var G__19410 = args19408.length;
switch (G__19410) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19408.length)].join('')));

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
var c__10274__auto___19483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19449){
var state_val_19450 = (state_19449[(1)]);
if((state_val_19450 === (7))){
var state_19449__$1 = state_19449;
var statearr_19451_19484 = state_19449__$1;
(statearr_19451_19484[(2)] = null);

(statearr_19451_19484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (1))){
var state_19449__$1 = state_19449;
var statearr_19452_19485 = state_19449__$1;
(statearr_19452_19485[(2)] = null);

(statearr_19452_19485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (4))){
var inst_19413 = (state_19449[(7)]);
var inst_19415 = (inst_19413 < cnt);
var state_19449__$1 = state_19449;
if(cljs.core.truth_(inst_19415)){
var statearr_19453_19486 = state_19449__$1;
(statearr_19453_19486[(1)] = (6));

} else {
var statearr_19454_19487 = state_19449__$1;
(statearr_19454_19487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (15))){
var inst_19445 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19455_19488 = state_19449__$1;
(statearr_19455_19488[(2)] = inst_19445);

(statearr_19455_19488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (13))){
var inst_19438 = cljs.core.async.close_BANG_.call(null,out);
var state_19449__$1 = state_19449;
var statearr_19456_19489 = state_19449__$1;
(statearr_19456_19489[(2)] = inst_19438);

(statearr_19456_19489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (6))){
var state_19449__$1 = state_19449;
var statearr_19457_19490 = state_19449__$1;
(statearr_19457_19490[(2)] = null);

(statearr_19457_19490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (3))){
var inst_19447 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19449__$1,inst_19447);
} else {
if((state_val_19450 === (12))){
var inst_19435 = (state_19449[(8)]);
var inst_19435__$1 = (state_19449[(2)]);
var inst_19436 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19435__$1);
var state_19449__$1 = (function (){var statearr_19458 = state_19449;
(statearr_19458[(8)] = inst_19435__$1);

return statearr_19458;
})();
if(cljs.core.truth_(inst_19436)){
var statearr_19459_19491 = state_19449__$1;
(statearr_19459_19491[(1)] = (13));

} else {
var statearr_19460_19492 = state_19449__$1;
(statearr_19460_19492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (2))){
var inst_19412 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19413 = (0);
var state_19449__$1 = (function (){var statearr_19461 = state_19449;
(statearr_19461[(7)] = inst_19413);

(statearr_19461[(9)] = inst_19412);

return statearr_19461;
})();
var statearr_19462_19493 = state_19449__$1;
(statearr_19462_19493[(2)] = null);

(statearr_19462_19493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (11))){
var inst_19413 = (state_19449[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19449,(10),Object,null,(9));
var inst_19422 = chs__$1.call(null,inst_19413);
var inst_19423 = done.call(null,inst_19413);
var inst_19424 = cljs.core.async.take_BANG_.call(null,inst_19422,inst_19423);
var state_19449__$1 = state_19449;
var statearr_19463_19494 = state_19449__$1;
(statearr_19463_19494[(2)] = inst_19424);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (9))){
var inst_19413 = (state_19449[(7)]);
var inst_19426 = (state_19449[(2)]);
var inst_19427 = (inst_19413 + (1));
var inst_19413__$1 = inst_19427;
var state_19449__$1 = (function (){var statearr_19464 = state_19449;
(statearr_19464[(10)] = inst_19426);

(statearr_19464[(7)] = inst_19413__$1);

return statearr_19464;
})();
var statearr_19465_19495 = state_19449__$1;
(statearr_19465_19495[(2)] = null);

(statearr_19465_19495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (5))){
var inst_19433 = (state_19449[(2)]);
var state_19449__$1 = (function (){var statearr_19466 = state_19449;
(statearr_19466[(11)] = inst_19433);

return statearr_19466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19449__$1,(12),dchan);
} else {
if((state_val_19450 === (14))){
var inst_19435 = (state_19449[(8)]);
var inst_19440 = cljs.core.apply.call(null,f,inst_19435);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19449__$1,(16),out,inst_19440);
} else {
if((state_val_19450 === (16))){
var inst_19442 = (state_19449[(2)]);
var state_19449__$1 = (function (){var statearr_19467 = state_19449;
(statearr_19467[(12)] = inst_19442);

return statearr_19467;
})();
var statearr_19468_19496 = state_19449__$1;
(statearr_19468_19496[(2)] = null);

(statearr_19468_19496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (10))){
var inst_19417 = (state_19449[(2)]);
var inst_19418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19449__$1 = (function (){var statearr_19469 = state_19449;
(statearr_19469[(13)] = inst_19417);

return statearr_19469;
})();
var statearr_19470_19497 = state_19449__$1;
(statearr_19470_19497[(2)] = inst_19418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19449__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19450 === (8))){
var inst_19431 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
var statearr_19471_19498 = state_19449__$1;
(statearr_19471_19498[(2)] = inst_19431);

(statearr_19471_19498[(1)] = (5));


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
});})(c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10209__auto__,c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19475[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19475[(1)] = (1));

return statearr_19475;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19449){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19476){if((e19476 instanceof Object)){
var ex__10213__auto__ = e19476;
var statearr_19477_19499 = state_19449;
(statearr_19477_19499[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19500 = state_19449;
state_19449 = G__19500;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10276__auto__ = (function (){var statearr_19478 = f__10275__auto__.call(null);
(statearr_19478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19483);

return statearr_19478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19483,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19502 = [];
var len__6152__auto___19558 = arguments.length;
var i__6153__auto___19559 = (0);
while(true){
if((i__6153__auto___19559 < len__6152__auto___19558)){
args19502.push((arguments[i__6153__auto___19559]));

var G__19560 = (i__6153__auto___19559 + (1));
i__6153__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var G__19504 = args19502.length;
switch (G__19504) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19502.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19562,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19562,out){
return (function (state_19534){
var state_val_19535 = (state_19534[(1)]);
if((state_val_19535 === (7))){
var inst_19513 = (state_19534[(7)]);
var inst_19514 = (state_19534[(8)]);
var inst_19513__$1 = (state_19534[(2)]);
var inst_19514__$1 = cljs.core.nth.call(null,inst_19513__$1,(0),null);
var inst_19515 = cljs.core.nth.call(null,inst_19513__$1,(1),null);
var inst_19516 = (inst_19514__$1 == null);
var state_19534__$1 = (function (){var statearr_19536 = state_19534;
(statearr_19536[(7)] = inst_19513__$1);

(statearr_19536[(9)] = inst_19515);

(statearr_19536[(8)] = inst_19514__$1);

return statearr_19536;
})();
if(cljs.core.truth_(inst_19516)){
var statearr_19537_19563 = state_19534__$1;
(statearr_19537_19563[(1)] = (8));

} else {
var statearr_19538_19564 = state_19534__$1;
(statearr_19538_19564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (1))){
var inst_19505 = cljs.core.vec.call(null,chs);
var inst_19506 = inst_19505;
var state_19534__$1 = (function (){var statearr_19539 = state_19534;
(statearr_19539[(10)] = inst_19506);

return statearr_19539;
})();
var statearr_19540_19565 = state_19534__$1;
(statearr_19540_19565[(2)] = null);

(statearr_19540_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (4))){
var inst_19506 = (state_19534[(10)]);
var state_19534__$1 = state_19534;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19534__$1,(7),inst_19506);
} else {
if((state_val_19535 === (6))){
var inst_19530 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19541_19566 = state_19534__$1;
(statearr_19541_19566[(2)] = inst_19530);

(statearr_19541_19566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (3))){
var inst_19532 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19534__$1,inst_19532);
} else {
if((state_val_19535 === (2))){
var inst_19506 = (state_19534[(10)]);
var inst_19508 = cljs.core.count.call(null,inst_19506);
var inst_19509 = (inst_19508 > (0));
var state_19534__$1 = state_19534;
if(cljs.core.truth_(inst_19509)){
var statearr_19543_19567 = state_19534__$1;
(statearr_19543_19567[(1)] = (4));

} else {
var statearr_19544_19568 = state_19534__$1;
(statearr_19544_19568[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (11))){
var inst_19506 = (state_19534[(10)]);
var inst_19523 = (state_19534[(2)]);
var tmp19542 = inst_19506;
var inst_19506__$1 = tmp19542;
var state_19534__$1 = (function (){var statearr_19545 = state_19534;
(statearr_19545[(11)] = inst_19523);

(statearr_19545[(10)] = inst_19506__$1);

return statearr_19545;
})();
var statearr_19546_19569 = state_19534__$1;
(statearr_19546_19569[(2)] = null);

(statearr_19546_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (9))){
var inst_19514 = (state_19534[(8)]);
var state_19534__$1 = state_19534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19534__$1,(11),out,inst_19514);
} else {
if((state_val_19535 === (5))){
var inst_19528 = cljs.core.async.close_BANG_.call(null,out);
var state_19534__$1 = state_19534;
var statearr_19547_19570 = state_19534__$1;
(statearr_19547_19570[(2)] = inst_19528);

(statearr_19547_19570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (10))){
var inst_19526 = (state_19534[(2)]);
var state_19534__$1 = state_19534;
var statearr_19548_19571 = state_19534__$1;
(statearr_19548_19571[(2)] = inst_19526);

(statearr_19548_19571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19535 === (8))){
var inst_19513 = (state_19534[(7)]);
var inst_19515 = (state_19534[(9)]);
var inst_19506 = (state_19534[(10)]);
var inst_19514 = (state_19534[(8)]);
var inst_19518 = (function (){var cs = inst_19506;
var vec__19511 = inst_19513;
var v = inst_19514;
var c = inst_19515;
return ((function (cs,vec__19511,v,c,inst_19513,inst_19515,inst_19506,inst_19514,state_val_19535,c__10274__auto___19562,out){
return (function (p1__19501_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19501_SHARP_);
});
;})(cs,vec__19511,v,c,inst_19513,inst_19515,inst_19506,inst_19514,state_val_19535,c__10274__auto___19562,out))
})();
var inst_19519 = cljs.core.filterv.call(null,inst_19518,inst_19506);
var inst_19506__$1 = inst_19519;
var state_19534__$1 = (function (){var statearr_19549 = state_19534;
(statearr_19549[(10)] = inst_19506__$1);

return statearr_19549;
})();
var statearr_19550_19572 = state_19534__$1;
(statearr_19550_19572[(2)] = null);

(statearr_19550_19572[(1)] = (2));


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
});})(c__10274__auto___19562,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19562,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19554[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19554[(1)] = (1));

return statearr_19554;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19534){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19555){if((e19555 instanceof Object)){
var ex__10213__auto__ = e19555;
var statearr_19556_19573 = state_19534;
(statearr_19556_19573[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19574 = state_19534;
state_19534 = G__19574;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19562,out))
})();
var state__10276__auto__ = (function (){var statearr_19557 = f__10275__auto__.call(null);
(statearr_19557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19562);

return statearr_19557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19562,out))
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
var args19575 = [];
var len__6152__auto___19624 = arguments.length;
var i__6153__auto___19625 = (0);
while(true){
if((i__6153__auto___19625 < len__6152__auto___19624)){
args19575.push((arguments[i__6153__auto___19625]));

var G__19626 = (i__6153__auto___19625 + (1));
i__6153__auto___19625 = G__19626;
continue;
} else {
}
break;
}

var G__19577 = args19575.length;
switch (G__19577) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19575.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19628,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19628,out){
return (function (state_19601){
var state_val_19602 = (state_19601[(1)]);
if((state_val_19602 === (7))){
var inst_19583 = (state_19601[(7)]);
var inst_19583__$1 = (state_19601[(2)]);
var inst_19584 = (inst_19583__$1 == null);
var inst_19585 = cljs.core.not.call(null,inst_19584);
var state_19601__$1 = (function (){var statearr_19603 = state_19601;
(statearr_19603[(7)] = inst_19583__$1);

return statearr_19603;
})();
if(inst_19585){
var statearr_19604_19629 = state_19601__$1;
(statearr_19604_19629[(1)] = (8));

} else {
var statearr_19605_19630 = state_19601__$1;
(statearr_19605_19630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (1))){
var inst_19578 = (0);
var state_19601__$1 = (function (){var statearr_19606 = state_19601;
(statearr_19606[(8)] = inst_19578);

return statearr_19606;
})();
var statearr_19607_19631 = state_19601__$1;
(statearr_19607_19631[(2)] = null);

(statearr_19607_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (4))){
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19601__$1,(7),ch);
} else {
if((state_val_19602 === (6))){
var inst_19596 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19608_19632 = state_19601__$1;
(statearr_19608_19632[(2)] = inst_19596);

(statearr_19608_19632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (3))){
var inst_19598 = (state_19601[(2)]);
var inst_19599 = cljs.core.async.close_BANG_.call(null,out);
var state_19601__$1 = (function (){var statearr_19609 = state_19601;
(statearr_19609[(9)] = inst_19598);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19601__$1,inst_19599);
} else {
if((state_val_19602 === (2))){
var inst_19578 = (state_19601[(8)]);
var inst_19580 = (inst_19578 < n);
var state_19601__$1 = state_19601;
if(cljs.core.truth_(inst_19580)){
var statearr_19610_19633 = state_19601__$1;
(statearr_19610_19633[(1)] = (4));

} else {
var statearr_19611_19634 = state_19601__$1;
(statearr_19611_19634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (11))){
var inst_19578 = (state_19601[(8)]);
var inst_19588 = (state_19601[(2)]);
var inst_19589 = (inst_19578 + (1));
var inst_19578__$1 = inst_19589;
var state_19601__$1 = (function (){var statearr_19612 = state_19601;
(statearr_19612[(8)] = inst_19578__$1);

(statearr_19612[(10)] = inst_19588);

return statearr_19612;
})();
var statearr_19613_19635 = state_19601__$1;
(statearr_19613_19635[(2)] = null);

(statearr_19613_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (9))){
var state_19601__$1 = state_19601;
var statearr_19614_19636 = state_19601__$1;
(statearr_19614_19636[(2)] = null);

(statearr_19614_19636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (5))){
var state_19601__$1 = state_19601;
var statearr_19615_19637 = state_19601__$1;
(statearr_19615_19637[(2)] = null);

(statearr_19615_19637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (10))){
var inst_19593 = (state_19601[(2)]);
var state_19601__$1 = state_19601;
var statearr_19616_19638 = state_19601__$1;
(statearr_19616_19638[(2)] = inst_19593);

(statearr_19616_19638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19602 === (8))){
var inst_19583 = (state_19601[(7)]);
var state_19601__$1 = state_19601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19601__$1,(11),out,inst_19583);
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
});})(c__10274__auto___19628,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19628,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19620[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19620[(1)] = (1));

return statearr_19620;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19601){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19621){if((e19621 instanceof Object)){
var ex__10213__auto__ = e19621;
var statearr_19622_19639 = state_19601;
(statearr_19622_19639[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19640 = state_19601;
state_19601 = G__19640;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19628,out))
})();
var state__10276__auto__ = (function (){var statearr_19623 = f__10275__auto__.call(null);
(statearr_19623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19628);

return statearr_19623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19628,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19648 = (function (map_LT_,f,ch,meta19649){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19649 = meta19649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19650,meta19649__$1){
var self__ = this;
var _19650__$1 = this;
return (new cljs.core.async.t_cljs$core$async19648(self__.map_LT_,self__.f,self__.ch,meta19649__$1));
});

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19650){
var self__ = this;
var _19650__$1 = this;
return self__.meta19649;
});

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19651 = (function (map_LT_,f,ch,meta19649,_,fn1,meta19652){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19649 = meta19649;
this._ = _;
this.fn1 = fn1;
this.meta19652 = meta19652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19653,meta19652__$1){
var self__ = this;
var _19653__$1 = this;
return (new cljs.core.async.t_cljs$core$async19651(self__.map_LT_,self__.f,self__.ch,self__.meta19649,self__._,self__.fn1,meta19652__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19653){
var self__ = this;
var _19653__$1 = this;
return self__.meta19652;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19641_SHARP_){
return f1.call(null,(((p1__19641_SHARP_ == null))?null:self__.f.call(null,p1__19641_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19651.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19649","meta19649",34982512,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19648","cljs.core.async/t_cljs$core$async19648",-690661076,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19652","meta19652",1364742891,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19651";

cljs.core.async.t_cljs$core$async19651.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19651");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19651 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19651(map_LT___$1,f__$1,ch__$1,meta19649__$1,___$2,fn1__$1,meta19652){
return (new cljs.core.async.t_cljs$core$async19651(map_LT___$1,f__$1,ch__$1,meta19649__$1,___$2,fn1__$1,meta19652));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19651(self__.map_LT_,self__.f,self__.ch,self__.meta19649,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19649","meta19649",34982512,null)], null);
});

cljs.core.async.t_cljs$core$async19648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19648";

cljs.core.async.t_cljs$core$async19648.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19648");
});

cljs.core.async.__GT_t_cljs$core$async19648 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19648(map_LT___$1,f__$1,ch__$1,meta19649){
return (new cljs.core.async.t_cljs$core$async19648(map_LT___$1,f__$1,ch__$1,meta19649));
});

}

return (new cljs.core.async.t_cljs$core$async19648(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19657 = (function (map_GT_,f,ch,meta19658){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19658 = meta19658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19659,meta19658__$1){
var self__ = this;
var _19659__$1 = this;
return (new cljs.core.async.t_cljs$core$async19657(self__.map_GT_,self__.f,self__.ch,meta19658__$1));
});

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19659){
var self__ = this;
var _19659__$1 = this;
return self__.meta19658;
});

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19658","meta19658",567102090,null)], null);
});

cljs.core.async.t_cljs$core$async19657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19657";

cljs.core.async.t_cljs$core$async19657.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19657");
});

cljs.core.async.__GT_t_cljs$core$async19657 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19657(map_GT___$1,f__$1,ch__$1,meta19658){
return (new cljs.core.async.t_cljs$core$async19657(map_GT___$1,f__$1,ch__$1,meta19658));
});

}

return (new cljs.core.async.t_cljs$core$async19657(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19663 = (function (filter_GT_,p,ch,meta19664){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19664 = meta19664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19665,meta19664__$1){
var self__ = this;
var _19665__$1 = this;
return (new cljs.core.async.t_cljs$core$async19663(self__.filter_GT_,self__.p,self__.ch,meta19664__$1));
});

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19665){
var self__ = this;
var _19665__$1 = this;
return self__.meta19664;
});

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19664","meta19664",-1322828034,null)], null);
});

cljs.core.async.t_cljs$core$async19663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19663";

cljs.core.async.t_cljs$core$async19663.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19663");
});

cljs.core.async.__GT_t_cljs$core$async19663 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19663(filter_GT___$1,p__$1,ch__$1,meta19664){
return (new cljs.core.async.t_cljs$core$async19663(filter_GT___$1,p__$1,ch__$1,meta19664));
});

}

return (new cljs.core.async.t_cljs$core$async19663(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19666 = [];
var len__6152__auto___19710 = arguments.length;
var i__6153__auto___19711 = (0);
while(true){
if((i__6153__auto___19711 < len__6152__auto___19710)){
args19666.push((arguments[i__6153__auto___19711]));

var G__19712 = (i__6153__auto___19711 + (1));
i__6153__auto___19711 = G__19712;
continue;
} else {
}
break;
}

var G__19668 = args19666.length;
switch (G__19668) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19666.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19714,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19714,out){
return (function (state_19689){
var state_val_19690 = (state_19689[(1)]);
if((state_val_19690 === (7))){
var inst_19685 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
var statearr_19691_19715 = state_19689__$1;
(statearr_19691_19715[(2)] = inst_19685);

(statearr_19691_19715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (1))){
var state_19689__$1 = state_19689;
var statearr_19692_19716 = state_19689__$1;
(statearr_19692_19716[(2)] = null);

(statearr_19692_19716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (4))){
var inst_19671 = (state_19689[(7)]);
var inst_19671__$1 = (state_19689[(2)]);
var inst_19672 = (inst_19671__$1 == null);
var state_19689__$1 = (function (){var statearr_19693 = state_19689;
(statearr_19693[(7)] = inst_19671__$1);

return statearr_19693;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19694_19717 = state_19689__$1;
(statearr_19694_19717[(1)] = (5));

} else {
var statearr_19695_19718 = state_19689__$1;
(statearr_19695_19718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (6))){
var inst_19671 = (state_19689[(7)]);
var inst_19676 = p.call(null,inst_19671);
var state_19689__$1 = state_19689;
if(cljs.core.truth_(inst_19676)){
var statearr_19696_19719 = state_19689__$1;
(statearr_19696_19719[(1)] = (8));

} else {
var statearr_19697_19720 = state_19689__$1;
(statearr_19697_19720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (3))){
var inst_19687 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19689__$1,inst_19687);
} else {
if((state_val_19690 === (2))){
var state_19689__$1 = state_19689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19689__$1,(4),ch);
} else {
if((state_val_19690 === (11))){
var inst_19679 = (state_19689[(2)]);
var state_19689__$1 = state_19689;
var statearr_19698_19721 = state_19689__$1;
(statearr_19698_19721[(2)] = inst_19679);

(statearr_19698_19721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (9))){
var state_19689__$1 = state_19689;
var statearr_19699_19722 = state_19689__$1;
(statearr_19699_19722[(2)] = null);

(statearr_19699_19722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (5))){
var inst_19674 = cljs.core.async.close_BANG_.call(null,out);
var state_19689__$1 = state_19689;
var statearr_19700_19723 = state_19689__$1;
(statearr_19700_19723[(2)] = inst_19674);

(statearr_19700_19723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (10))){
var inst_19682 = (state_19689[(2)]);
var state_19689__$1 = (function (){var statearr_19701 = state_19689;
(statearr_19701[(8)] = inst_19682);

return statearr_19701;
})();
var statearr_19702_19724 = state_19689__$1;
(statearr_19702_19724[(2)] = null);

(statearr_19702_19724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19690 === (8))){
var inst_19671 = (state_19689[(7)]);
var state_19689__$1 = state_19689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19689__$1,(11),out,inst_19671);
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
});})(c__10274__auto___19714,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19714,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19706 = [null,null,null,null,null,null,null,null,null];
(statearr_19706[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19706[(1)] = (1));

return statearr_19706;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19689){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19707){if((e19707 instanceof Object)){
var ex__10213__auto__ = e19707;
var statearr_19708_19725 = state_19689;
(statearr_19708_19725[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19726 = state_19689;
state_19689 = G__19726;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19714,out))
})();
var state__10276__auto__ = (function (){var statearr_19709 = f__10275__auto__.call(null);
(statearr_19709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19714);

return statearr_19709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19714,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19727 = [];
var len__6152__auto___19730 = arguments.length;
var i__6153__auto___19731 = (0);
while(true){
if((i__6153__auto___19731 < len__6152__auto___19730)){
args19727.push((arguments[i__6153__auto___19731]));

var G__19732 = (i__6153__auto___19731 + (1));
i__6153__auto___19731 = G__19732;
continue;
} else {
}
break;
}

var G__19729 = args19727.length;
switch (G__19729) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19727.length)].join('')));

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
var c__10274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto__){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto__){
return (function (state_19899){
var state_val_19900 = (state_19899[(1)]);
if((state_val_19900 === (7))){
var inst_19895 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19901_19942 = state_19899__$1;
(statearr_19901_19942[(2)] = inst_19895);

(statearr_19901_19942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (20))){
var inst_19865 = (state_19899[(7)]);
var inst_19876 = (state_19899[(2)]);
var inst_19877 = cljs.core.next.call(null,inst_19865);
var inst_19851 = inst_19877;
var inst_19852 = null;
var inst_19853 = (0);
var inst_19854 = (0);
var state_19899__$1 = (function (){var statearr_19902 = state_19899;
(statearr_19902[(8)] = inst_19853);

(statearr_19902[(9)] = inst_19876);

(statearr_19902[(10)] = inst_19854);

(statearr_19902[(11)] = inst_19852);

(statearr_19902[(12)] = inst_19851);

return statearr_19902;
})();
var statearr_19903_19943 = state_19899__$1;
(statearr_19903_19943[(2)] = null);

(statearr_19903_19943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (1))){
var state_19899__$1 = state_19899;
var statearr_19904_19944 = state_19899__$1;
(statearr_19904_19944[(2)] = null);

(statearr_19904_19944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (4))){
var inst_19840 = (state_19899[(13)]);
var inst_19840__$1 = (state_19899[(2)]);
var inst_19841 = (inst_19840__$1 == null);
var state_19899__$1 = (function (){var statearr_19905 = state_19899;
(statearr_19905[(13)] = inst_19840__$1);

return statearr_19905;
})();
if(cljs.core.truth_(inst_19841)){
var statearr_19906_19945 = state_19899__$1;
(statearr_19906_19945[(1)] = (5));

} else {
var statearr_19907_19946 = state_19899__$1;
(statearr_19907_19946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (15))){
var state_19899__$1 = state_19899;
var statearr_19911_19947 = state_19899__$1;
(statearr_19911_19947[(2)] = null);

(statearr_19911_19947[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (21))){
var state_19899__$1 = state_19899;
var statearr_19912_19948 = state_19899__$1;
(statearr_19912_19948[(2)] = null);

(statearr_19912_19948[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (13))){
var inst_19853 = (state_19899[(8)]);
var inst_19854 = (state_19899[(10)]);
var inst_19852 = (state_19899[(11)]);
var inst_19851 = (state_19899[(12)]);
var inst_19861 = (state_19899[(2)]);
var inst_19862 = (inst_19854 + (1));
var tmp19908 = inst_19853;
var tmp19909 = inst_19852;
var tmp19910 = inst_19851;
var inst_19851__$1 = tmp19910;
var inst_19852__$1 = tmp19909;
var inst_19853__$1 = tmp19908;
var inst_19854__$1 = inst_19862;
var state_19899__$1 = (function (){var statearr_19913 = state_19899;
(statearr_19913[(8)] = inst_19853__$1);

(statearr_19913[(14)] = inst_19861);

(statearr_19913[(10)] = inst_19854__$1);

(statearr_19913[(11)] = inst_19852__$1);

(statearr_19913[(12)] = inst_19851__$1);

return statearr_19913;
})();
var statearr_19914_19949 = state_19899__$1;
(statearr_19914_19949[(2)] = null);

(statearr_19914_19949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (22))){
var state_19899__$1 = state_19899;
var statearr_19915_19950 = state_19899__$1;
(statearr_19915_19950[(2)] = null);

(statearr_19915_19950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (6))){
var inst_19840 = (state_19899[(13)]);
var inst_19849 = f.call(null,inst_19840);
var inst_19850 = cljs.core.seq.call(null,inst_19849);
var inst_19851 = inst_19850;
var inst_19852 = null;
var inst_19853 = (0);
var inst_19854 = (0);
var state_19899__$1 = (function (){var statearr_19916 = state_19899;
(statearr_19916[(8)] = inst_19853);

(statearr_19916[(10)] = inst_19854);

(statearr_19916[(11)] = inst_19852);

(statearr_19916[(12)] = inst_19851);

return statearr_19916;
})();
var statearr_19917_19951 = state_19899__$1;
(statearr_19917_19951[(2)] = null);

(statearr_19917_19951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (17))){
var inst_19865 = (state_19899[(7)]);
var inst_19869 = cljs.core.chunk_first.call(null,inst_19865);
var inst_19870 = cljs.core.chunk_rest.call(null,inst_19865);
var inst_19871 = cljs.core.count.call(null,inst_19869);
var inst_19851 = inst_19870;
var inst_19852 = inst_19869;
var inst_19853 = inst_19871;
var inst_19854 = (0);
var state_19899__$1 = (function (){var statearr_19918 = state_19899;
(statearr_19918[(8)] = inst_19853);

(statearr_19918[(10)] = inst_19854);

(statearr_19918[(11)] = inst_19852);

(statearr_19918[(12)] = inst_19851);

return statearr_19918;
})();
var statearr_19919_19952 = state_19899__$1;
(statearr_19919_19952[(2)] = null);

(statearr_19919_19952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (3))){
var inst_19897 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19899__$1,inst_19897);
} else {
if((state_val_19900 === (12))){
var inst_19885 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19920_19953 = state_19899__$1;
(statearr_19920_19953[(2)] = inst_19885);

(statearr_19920_19953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (2))){
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19899__$1,(4),in$);
} else {
if((state_val_19900 === (23))){
var inst_19893 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19921_19954 = state_19899__$1;
(statearr_19921_19954[(2)] = inst_19893);

(statearr_19921_19954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (19))){
var inst_19880 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19922_19955 = state_19899__$1;
(statearr_19922_19955[(2)] = inst_19880);

(statearr_19922_19955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (11))){
var inst_19851 = (state_19899[(12)]);
var inst_19865 = (state_19899[(7)]);
var inst_19865__$1 = cljs.core.seq.call(null,inst_19851);
var state_19899__$1 = (function (){var statearr_19923 = state_19899;
(statearr_19923[(7)] = inst_19865__$1);

return statearr_19923;
})();
if(inst_19865__$1){
var statearr_19924_19956 = state_19899__$1;
(statearr_19924_19956[(1)] = (14));

} else {
var statearr_19925_19957 = state_19899__$1;
(statearr_19925_19957[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (9))){
var inst_19887 = (state_19899[(2)]);
var inst_19888 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19899__$1 = (function (){var statearr_19926 = state_19899;
(statearr_19926[(15)] = inst_19887);

return statearr_19926;
})();
if(cljs.core.truth_(inst_19888)){
var statearr_19927_19958 = state_19899__$1;
(statearr_19927_19958[(1)] = (21));

} else {
var statearr_19928_19959 = state_19899__$1;
(statearr_19928_19959[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (5))){
var inst_19843 = cljs.core.async.close_BANG_.call(null,out);
var state_19899__$1 = state_19899;
var statearr_19929_19960 = state_19899__$1;
(statearr_19929_19960[(2)] = inst_19843);

(statearr_19929_19960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (14))){
var inst_19865 = (state_19899[(7)]);
var inst_19867 = cljs.core.chunked_seq_QMARK_.call(null,inst_19865);
var state_19899__$1 = state_19899;
if(inst_19867){
var statearr_19930_19961 = state_19899__$1;
(statearr_19930_19961[(1)] = (17));

} else {
var statearr_19931_19962 = state_19899__$1;
(statearr_19931_19962[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (16))){
var inst_19883 = (state_19899[(2)]);
var state_19899__$1 = state_19899;
var statearr_19932_19963 = state_19899__$1;
(statearr_19932_19963[(2)] = inst_19883);

(statearr_19932_19963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19900 === (10))){
var inst_19854 = (state_19899[(10)]);
var inst_19852 = (state_19899[(11)]);
var inst_19859 = cljs.core._nth.call(null,inst_19852,inst_19854);
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19899__$1,(13),out,inst_19859);
} else {
if((state_val_19900 === (18))){
var inst_19865 = (state_19899[(7)]);
var inst_19874 = cljs.core.first.call(null,inst_19865);
var state_19899__$1 = state_19899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19899__$1,(20),out,inst_19874);
} else {
if((state_val_19900 === (8))){
var inst_19853 = (state_19899[(8)]);
var inst_19854 = (state_19899[(10)]);
var inst_19856 = (inst_19854 < inst_19853);
var inst_19857 = inst_19856;
var state_19899__$1 = state_19899;
if(cljs.core.truth_(inst_19857)){
var statearr_19933_19964 = state_19899__$1;
(statearr_19933_19964[(1)] = (10));

} else {
var statearr_19934_19965 = state_19899__$1;
(statearr_19934_19965[(1)] = (11));

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
});})(c__10274__auto__))
;
return ((function (switch__10209__auto__,c__10274__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_19938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19938[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__);

(statearr_19938[(1)] = (1));

return statearr_19938;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1 = (function (state_19899){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19939){if((e19939 instanceof Object)){
var ex__10213__auto__ = e19939;
var statearr_19940_19966 = state_19899;
(statearr_19940_19966[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19967 = state_19899;
state_19899 = G__19967;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__ = function(state_19899){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1.call(this,state_19899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_19941 = f__10275__auto__.call(null);
(statearr_19941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_19941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto__))
);

return c__10274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19968 = [];
var len__6152__auto___19971 = arguments.length;
var i__6153__auto___19972 = (0);
while(true){
if((i__6153__auto___19972 < len__6152__auto___19971)){
args19968.push((arguments[i__6153__auto___19972]));

var G__19973 = (i__6153__auto___19972 + (1));
i__6153__auto___19972 = G__19973;
continue;
} else {
}
break;
}

var G__19970 = args19968.length;
switch (G__19970) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19968.length)].join('')));

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
var args19975 = [];
var len__6152__auto___19978 = arguments.length;
var i__6153__auto___19979 = (0);
while(true){
if((i__6153__auto___19979 < len__6152__auto___19978)){
args19975.push((arguments[i__6153__auto___19979]));

var G__19980 = (i__6153__auto___19979 + (1));
i__6153__auto___19979 = G__19980;
continue;
} else {
}
break;
}

var G__19977 = args19975.length;
switch (G__19977) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19975.length)].join('')));

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
var args19982 = [];
var len__6152__auto___20033 = arguments.length;
var i__6153__auto___20034 = (0);
while(true){
if((i__6153__auto___20034 < len__6152__auto___20033)){
args19982.push((arguments[i__6153__auto___20034]));

var G__20035 = (i__6153__auto___20034 + (1));
i__6153__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var G__19984 = args19982.length;
switch (G__19984) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19982.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20037,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20037,out){
return (function (state_20008){
var state_val_20009 = (state_20008[(1)]);
if((state_val_20009 === (7))){
var inst_20003 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20010_20038 = state_20008__$1;
(statearr_20010_20038[(2)] = inst_20003);

(statearr_20010_20038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (1))){
var inst_19985 = null;
var state_20008__$1 = (function (){var statearr_20011 = state_20008;
(statearr_20011[(7)] = inst_19985);

return statearr_20011;
})();
var statearr_20012_20039 = state_20008__$1;
(statearr_20012_20039[(2)] = null);

(statearr_20012_20039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (4))){
var inst_19988 = (state_20008[(8)]);
var inst_19988__$1 = (state_20008[(2)]);
var inst_19989 = (inst_19988__$1 == null);
var inst_19990 = cljs.core.not.call(null,inst_19989);
var state_20008__$1 = (function (){var statearr_20013 = state_20008;
(statearr_20013[(8)] = inst_19988__$1);

return statearr_20013;
})();
if(inst_19990){
var statearr_20014_20040 = state_20008__$1;
(statearr_20014_20040[(1)] = (5));

} else {
var statearr_20015_20041 = state_20008__$1;
(statearr_20015_20041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (6))){
var state_20008__$1 = state_20008;
var statearr_20016_20042 = state_20008__$1;
(statearr_20016_20042[(2)] = null);

(statearr_20016_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (3))){
var inst_20005 = (state_20008[(2)]);
var inst_20006 = cljs.core.async.close_BANG_.call(null,out);
var state_20008__$1 = (function (){var statearr_20017 = state_20008;
(statearr_20017[(9)] = inst_20005);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20008__$1,inst_20006);
} else {
if((state_val_20009 === (2))){
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20008__$1,(4),ch);
} else {
if((state_val_20009 === (11))){
var inst_19988 = (state_20008[(8)]);
var inst_19997 = (state_20008[(2)]);
var inst_19985 = inst_19988;
var state_20008__$1 = (function (){var statearr_20018 = state_20008;
(statearr_20018[(7)] = inst_19985);

(statearr_20018[(10)] = inst_19997);

return statearr_20018;
})();
var statearr_20019_20043 = state_20008__$1;
(statearr_20019_20043[(2)] = null);

(statearr_20019_20043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (9))){
var inst_19988 = (state_20008[(8)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20008__$1,(11),out,inst_19988);
} else {
if((state_val_20009 === (5))){
var inst_19985 = (state_20008[(7)]);
var inst_19988 = (state_20008[(8)]);
var inst_19992 = cljs.core._EQ_.call(null,inst_19988,inst_19985);
var state_20008__$1 = state_20008;
if(inst_19992){
var statearr_20021_20044 = state_20008__$1;
(statearr_20021_20044[(1)] = (8));

} else {
var statearr_20022_20045 = state_20008__$1;
(statearr_20022_20045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (10))){
var inst_20000 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20023_20046 = state_20008__$1;
(statearr_20023_20046[(2)] = inst_20000);

(statearr_20023_20046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (8))){
var inst_19985 = (state_20008[(7)]);
var tmp20020 = inst_19985;
var inst_19985__$1 = tmp20020;
var state_20008__$1 = (function (){var statearr_20024 = state_20008;
(statearr_20024[(7)] = inst_19985__$1);

return statearr_20024;
})();
var statearr_20025_20047 = state_20008__$1;
(statearr_20025_20047[(2)] = null);

(statearr_20025_20047[(1)] = (2));


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
});})(c__10274__auto___20037,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20037,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20029[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20029[(1)] = (1));

return statearr_20029;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20008){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20030){if((e20030 instanceof Object)){
var ex__10213__auto__ = e20030;
var statearr_20031_20048 = state_20008;
(statearr_20031_20048[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20049 = state_20008;
state_20008 = G__20049;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20037,out))
})();
var state__10276__auto__ = (function (){var statearr_20032 = f__10275__auto__.call(null);
(statearr_20032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20037);

return statearr_20032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20037,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20050 = [];
var len__6152__auto___20120 = arguments.length;
var i__6153__auto___20121 = (0);
while(true){
if((i__6153__auto___20121 < len__6152__auto___20120)){
args20050.push((arguments[i__6153__auto___20121]));

var G__20122 = (i__6153__auto___20121 + (1));
i__6153__auto___20121 = G__20122;
continue;
} else {
}
break;
}

var G__20052 = args20050.length;
switch (G__20052) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20050.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20124,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20124,out){
return (function (state_20090){
var state_val_20091 = (state_20090[(1)]);
if((state_val_20091 === (7))){
var inst_20086 = (state_20090[(2)]);
var state_20090__$1 = state_20090;
var statearr_20092_20125 = state_20090__$1;
(statearr_20092_20125[(2)] = inst_20086);

(statearr_20092_20125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (1))){
var inst_20053 = (new Array(n));
var inst_20054 = inst_20053;
var inst_20055 = (0);
var state_20090__$1 = (function (){var statearr_20093 = state_20090;
(statearr_20093[(7)] = inst_20055);

(statearr_20093[(8)] = inst_20054);

return statearr_20093;
})();
var statearr_20094_20126 = state_20090__$1;
(statearr_20094_20126[(2)] = null);

(statearr_20094_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (4))){
var inst_20058 = (state_20090[(9)]);
var inst_20058__$1 = (state_20090[(2)]);
var inst_20059 = (inst_20058__$1 == null);
var inst_20060 = cljs.core.not.call(null,inst_20059);
var state_20090__$1 = (function (){var statearr_20095 = state_20090;
(statearr_20095[(9)] = inst_20058__$1);

return statearr_20095;
})();
if(inst_20060){
var statearr_20096_20127 = state_20090__$1;
(statearr_20096_20127[(1)] = (5));

} else {
var statearr_20097_20128 = state_20090__$1;
(statearr_20097_20128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (15))){
var inst_20080 = (state_20090[(2)]);
var state_20090__$1 = state_20090;
var statearr_20098_20129 = state_20090__$1;
(statearr_20098_20129[(2)] = inst_20080);

(statearr_20098_20129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (13))){
var state_20090__$1 = state_20090;
var statearr_20099_20130 = state_20090__$1;
(statearr_20099_20130[(2)] = null);

(statearr_20099_20130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (6))){
var inst_20055 = (state_20090[(7)]);
var inst_20076 = (inst_20055 > (0));
var state_20090__$1 = state_20090;
if(cljs.core.truth_(inst_20076)){
var statearr_20100_20131 = state_20090__$1;
(statearr_20100_20131[(1)] = (12));

} else {
var statearr_20101_20132 = state_20090__$1;
(statearr_20101_20132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (3))){
var inst_20088 = (state_20090[(2)]);
var state_20090__$1 = state_20090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20090__$1,inst_20088);
} else {
if((state_val_20091 === (12))){
var inst_20054 = (state_20090[(8)]);
var inst_20078 = cljs.core.vec.call(null,inst_20054);
var state_20090__$1 = state_20090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20090__$1,(15),out,inst_20078);
} else {
if((state_val_20091 === (2))){
var state_20090__$1 = state_20090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20090__$1,(4),ch);
} else {
if((state_val_20091 === (11))){
var inst_20070 = (state_20090[(2)]);
var inst_20071 = (new Array(n));
var inst_20054 = inst_20071;
var inst_20055 = (0);
var state_20090__$1 = (function (){var statearr_20102 = state_20090;
(statearr_20102[(10)] = inst_20070);

(statearr_20102[(7)] = inst_20055);

(statearr_20102[(8)] = inst_20054);

return statearr_20102;
})();
var statearr_20103_20133 = state_20090__$1;
(statearr_20103_20133[(2)] = null);

(statearr_20103_20133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (9))){
var inst_20054 = (state_20090[(8)]);
var inst_20068 = cljs.core.vec.call(null,inst_20054);
var state_20090__$1 = state_20090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20090__$1,(11),out,inst_20068);
} else {
if((state_val_20091 === (5))){
var inst_20063 = (state_20090[(11)]);
var inst_20058 = (state_20090[(9)]);
var inst_20055 = (state_20090[(7)]);
var inst_20054 = (state_20090[(8)]);
var inst_20062 = (inst_20054[inst_20055] = inst_20058);
var inst_20063__$1 = (inst_20055 + (1));
var inst_20064 = (inst_20063__$1 < n);
var state_20090__$1 = (function (){var statearr_20104 = state_20090;
(statearr_20104[(11)] = inst_20063__$1);

(statearr_20104[(12)] = inst_20062);

return statearr_20104;
})();
if(cljs.core.truth_(inst_20064)){
var statearr_20105_20134 = state_20090__$1;
(statearr_20105_20134[(1)] = (8));

} else {
var statearr_20106_20135 = state_20090__$1;
(statearr_20106_20135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (14))){
var inst_20083 = (state_20090[(2)]);
var inst_20084 = cljs.core.async.close_BANG_.call(null,out);
var state_20090__$1 = (function (){var statearr_20108 = state_20090;
(statearr_20108[(13)] = inst_20083);

return statearr_20108;
})();
var statearr_20109_20136 = state_20090__$1;
(statearr_20109_20136[(2)] = inst_20084);

(statearr_20109_20136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (10))){
var inst_20074 = (state_20090[(2)]);
var state_20090__$1 = state_20090;
var statearr_20110_20137 = state_20090__$1;
(statearr_20110_20137[(2)] = inst_20074);

(statearr_20110_20137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20091 === (8))){
var inst_20063 = (state_20090[(11)]);
var inst_20054 = (state_20090[(8)]);
var tmp20107 = inst_20054;
var inst_20054__$1 = tmp20107;
var inst_20055 = inst_20063;
var state_20090__$1 = (function (){var statearr_20111 = state_20090;
(statearr_20111[(7)] = inst_20055);

(statearr_20111[(8)] = inst_20054__$1);

return statearr_20111;
})();
var statearr_20112_20138 = state_20090__$1;
(statearr_20112_20138[(2)] = null);

(statearr_20112_20138[(1)] = (2));


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
});})(c__10274__auto___20124,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20124,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20116[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20116[(1)] = (1));

return statearr_20116;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20090){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20117){if((e20117 instanceof Object)){
var ex__10213__auto__ = e20117;
var statearr_20118_20139 = state_20090;
(statearr_20118_20139[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20140 = state_20090;
state_20090 = G__20140;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20124,out))
})();
var state__10276__auto__ = (function (){var statearr_20119 = f__10275__auto__.call(null);
(statearr_20119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20124);

return statearr_20119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20124,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20141 = [];
var len__6152__auto___20215 = arguments.length;
var i__6153__auto___20216 = (0);
while(true){
if((i__6153__auto___20216 < len__6152__auto___20215)){
args20141.push((arguments[i__6153__auto___20216]));

var G__20217 = (i__6153__auto___20216 + (1));
i__6153__auto___20216 = G__20217;
continue;
} else {
}
break;
}

var G__20143 = args20141.length;
switch (G__20143) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20141.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20219,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20219,out){
return (function (state_20185){
var state_val_20186 = (state_20185[(1)]);
if((state_val_20186 === (7))){
var inst_20181 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
var statearr_20187_20220 = state_20185__$1;
(statearr_20187_20220[(2)] = inst_20181);

(statearr_20187_20220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (1))){
var inst_20144 = [];
var inst_20145 = inst_20144;
var inst_20146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20185__$1 = (function (){var statearr_20188 = state_20185;
(statearr_20188[(7)] = inst_20146);

(statearr_20188[(8)] = inst_20145);

return statearr_20188;
})();
var statearr_20189_20221 = state_20185__$1;
(statearr_20189_20221[(2)] = null);

(statearr_20189_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (4))){
var inst_20149 = (state_20185[(9)]);
var inst_20149__$1 = (state_20185[(2)]);
var inst_20150 = (inst_20149__$1 == null);
var inst_20151 = cljs.core.not.call(null,inst_20150);
var state_20185__$1 = (function (){var statearr_20190 = state_20185;
(statearr_20190[(9)] = inst_20149__$1);

return statearr_20190;
})();
if(inst_20151){
var statearr_20191_20222 = state_20185__$1;
(statearr_20191_20222[(1)] = (5));

} else {
var statearr_20192_20223 = state_20185__$1;
(statearr_20192_20223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (15))){
var inst_20175 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
var statearr_20193_20224 = state_20185__$1;
(statearr_20193_20224[(2)] = inst_20175);

(statearr_20193_20224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (13))){
var state_20185__$1 = state_20185;
var statearr_20194_20225 = state_20185__$1;
(statearr_20194_20225[(2)] = null);

(statearr_20194_20225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (6))){
var inst_20145 = (state_20185[(8)]);
var inst_20170 = inst_20145.length;
var inst_20171 = (inst_20170 > (0));
var state_20185__$1 = state_20185;
if(cljs.core.truth_(inst_20171)){
var statearr_20195_20226 = state_20185__$1;
(statearr_20195_20226[(1)] = (12));

} else {
var statearr_20196_20227 = state_20185__$1;
(statearr_20196_20227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (3))){
var inst_20183 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20185__$1,inst_20183);
} else {
if((state_val_20186 === (12))){
var inst_20145 = (state_20185[(8)]);
var inst_20173 = cljs.core.vec.call(null,inst_20145);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20185__$1,(15),out,inst_20173);
} else {
if((state_val_20186 === (2))){
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20185__$1,(4),ch);
} else {
if((state_val_20186 === (11))){
var inst_20153 = (state_20185[(10)]);
var inst_20149 = (state_20185[(9)]);
var inst_20163 = (state_20185[(2)]);
var inst_20164 = [];
var inst_20165 = inst_20164.push(inst_20149);
var inst_20145 = inst_20164;
var inst_20146 = inst_20153;
var state_20185__$1 = (function (){var statearr_20197 = state_20185;
(statearr_20197[(7)] = inst_20146);

(statearr_20197[(11)] = inst_20163);

(statearr_20197[(8)] = inst_20145);

(statearr_20197[(12)] = inst_20165);

return statearr_20197;
})();
var statearr_20198_20228 = state_20185__$1;
(statearr_20198_20228[(2)] = null);

(statearr_20198_20228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (9))){
var inst_20145 = (state_20185[(8)]);
var inst_20161 = cljs.core.vec.call(null,inst_20145);
var state_20185__$1 = state_20185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20185__$1,(11),out,inst_20161);
} else {
if((state_val_20186 === (5))){
var inst_20146 = (state_20185[(7)]);
var inst_20153 = (state_20185[(10)]);
var inst_20149 = (state_20185[(9)]);
var inst_20153__$1 = f.call(null,inst_20149);
var inst_20154 = cljs.core._EQ_.call(null,inst_20153__$1,inst_20146);
var inst_20155 = cljs.core.keyword_identical_QMARK_.call(null,inst_20146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20156 = (inst_20154) || (inst_20155);
var state_20185__$1 = (function (){var statearr_20199 = state_20185;
(statearr_20199[(10)] = inst_20153__$1);

return statearr_20199;
})();
if(cljs.core.truth_(inst_20156)){
var statearr_20200_20229 = state_20185__$1;
(statearr_20200_20229[(1)] = (8));

} else {
var statearr_20201_20230 = state_20185__$1;
(statearr_20201_20230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (14))){
var inst_20178 = (state_20185[(2)]);
var inst_20179 = cljs.core.async.close_BANG_.call(null,out);
var state_20185__$1 = (function (){var statearr_20203 = state_20185;
(statearr_20203[(13)] = inst_20178);

return statearr_20203;
})();
var statearr_20204_20231 = state_20185__$1;
(statearr_20204_20231[(2)] = inst_20179);

(statearr_20204_20231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (10))){
var inst_20168 = (state_20185[(2)]);
var state_20185__$1 = state_20185;
var statearr_20205_20232 = state_20185__$1;
(statearr_20205_20232[(2)] = inst_20168);

(statearr_20205_20232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20186 === (8))){
var inst_20153 = (state_20185[(10)]);
var inst_20149 = (state_20185[(9)]);
var inst_20145 = (state_20185[(8)]);
var inst_20158 = inst_20145.push(inst_20149);
var tmp20202 = inst_20145;
var inst_20145__$1 = tmp20202;
var inst_20146 = inst_20153;
var state_20185__$1 = (function (){var statearr_20206 = state_20185;
(statearr_20206[(7)] = inst_20146);

(statearr_20206[(14)] = inst_20158);

(statearr_20206[(8)] = inst_20145__$1);

return statearr_20206;
})();
var statearr_20207_20233 = state_20185__$1;
(statearr_20207_20233[(2)] = null);

(statearr_20207_20233[(1)] = (2));


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
});})(c__10274__auto___20219,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20219,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20211[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20211[(1)] = (1));

return statearr_20211;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20185){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20212){if((e20212 instanceof Object)){
var ex__10213__auto__ = e20212;
var statearr_20213_20234 = state_20185;
(statearr_20213_20234[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20235 = state_20185;
state_20185 = G__20235;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20219,out))
})();
var state__10276__auto__ = (function (){var statearr_20214 = f__10275__auto__.call(null);
(statearr_20214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20219);

return statearr_20214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20219,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map