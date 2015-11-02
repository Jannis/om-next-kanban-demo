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
if(typeof cljs.core.async.t_cljs$core$async17445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17445 = (function (fn_handler,f,meta17446){
this.fn_handler = fn_handler;
this.f = f;
this.meta17446 = meta17446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17447,meta17446__$1){
var self__ = this;
var _17447__$1 = this;
return (new cljs.core.async.t_cljs$core$async17445(self__.fn_handler,self__.f,meta17446__$1));
});

cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17447){
var self__ = this;
var _17447__$1 = this;
return self__.meta17446;
});

cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17446","meta17446",1721974465,null)], null);
});

cljs.core.async.t_cljs$core$async17445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17445";

cljs.core.async.t_cljs$core$async17445.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17445");
});

cljs.core.async.__GT_t_cljs$core$async17445 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17445(fn_handler__$1,f__$1,meta17446){
return (new cljs.core.async.t_cljs$core$async17445(fn_handler__$1,f__$1,meta17446));
});

}

return (new cljs.core.async.t_cljs$core$async17445(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17450 = [];
var len__6152__auto___17453 = arguments.length;
var i__6153__auto___17454 = (0);
while(true){
if((i__6153__auto___17454 < len__6152__auto___17453)){
args17450.push((arguments[i__6153__auto___17454]));

var G__17455 = (i__6153__auto___17454 + (1));
i__6153__auto___17454 = G__17455;
continue;
} else {
}
break;
}

var G__17452 = args17450.length;
switch (G__17452) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17450.length)].join('')));

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
var args17457 = [];
var len__6152__auto___17460 = arguments.length;
var i__6153__auto___17461 = (0);
while(true){
if((i__6153__auto___17461 < len__6152__auto___17460)){
args17457.push((arguments[i__6153__auto___17461]));

var G__17462 = (i__6153__auto___17461 + (1));
i__6153__auto___17461 = G__17462;
continue;
} else {
}
break;
}

var G__17459 = args17457.length;
switch (G__17459) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17457.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17464 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17464);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17464,ret){
return (function (){
return fn1.call(null,val_17464);
});})(val_17464,ret))
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17465.length)].join('')));

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
var n__5997__auto___17472 = n;
var x_17473 = (0);
while(true){
if((x_17473 < n__5997__auto___17472)){
(a[x_17473] = (0));

var G__17474 = (x_17473 + (1));
x_17473 = G__17474;
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

var G__17475 = (i + (1));
i = G__17475;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17479 = (function (alt_flag,flag,meta17480){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17480 = meta17480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17481,meta17480__$1){
var self__ = this;
var _17481__$1 = this;
return (new cljs.core.async.t_cljs$core$async17479(self__.alt_flag,self__.flag,meta17480__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17481){
var self__ = this;
var _17481__$1 = this;
return self__.meta17480;
});})(flag))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17479.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17480","meta17480",-441668207,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17479";

cljs.core.async.t_cljs$core$async17479.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17479");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17479 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17479(alt_flag__$1,flag__$1,meta17480){
return (new cljs.core.async.t_cljs$core$async17479(alt_flag__$1,flag__$1,meta17480));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17479(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17485 = (function (alt_handler,flag,cb,meta17486){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17486 = meta17486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17487,meta17486__$1){
var self__ = this;
var _17487__$1 = this;
return (new cljs.core.async.t_cljs$core$async17485(self__.alt_handler,self__.flag,self__.cb,meta17486__$1));
});

cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17487){
var self__ = this;
var _17487__$1 = this;
return self__.meta17486;
});

cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17486","meta17486",-1040471368,null)], null);
});

cljs.core.async.t_cljs$core$async17485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17485";

cljs.core.async.t_cljs$core$async17485.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17485");
});

cljs.core.async.__GT_t_cljs$core$async17485 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17485(alt_handler__$1,flag__$1,cb__$1,meta17486){
return (new cljs.core.async.t_cljs$core$async17485(alt_handler__$1,flag__$1,cb__$1,meta17486));
});

}

return (new cljs.core.async.t_cljs$core$async17485(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17488_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17488_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17489_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17489_SHARP_,port], null));
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
var G__17490 = (i + (1));
i = G__17490;
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
var len__6152__auto___17496 = arguments.length;
var i__6153__auto___17497 = (0);
while(true){
if((i__6153__auto___17497 < len__6152__auto___17496)){
args__6159__auto__.push((arguments[i__6153__auto___17497]));

var G__17498 = (i__6153__auto___17497 + (1));
i__6153__auto___17497 = G__17498;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17493){
var map__17494 = p__17493;
var map__17494__$1 = ((((!((map__17494 == null)))?((((map__17494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17494):map__17494);
var opts = map__17494__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17491){
var G__17492 = cljs.core.first.call(null,seq17491);
var seq17491__$1 = cljs.core.next.call(null,seq17491);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17492,seq17491__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17499 = [];
var len__6152__auto___17549 = arguments.length;
var i__6153__auto___17550 = (0);
while(true){
if((i__6153__auto___17550 < len__6152__auto___17549)){
args17499.push((arguments[i__6153__auto___17550]));

var G__17551 = (i__6153__auto___17550 + (1));
i__6153__auto___17550 = G__17551;
continue;
} else {
}
break;
}

var G__17501 = args17499.length;
switch (G__17501) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17499.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10257__auto___17553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___17553){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___17553){
return (function (state_17525){
var state_val_17526 = (state_17525[(1)]);
if((state_val_17526 === (7))){
var inst_17521 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17527_17554 = state_17525__$1;
(statearr_17527_17554[(2)] = inst_17521);

(statearr_17527_17554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (1))){
var state_17525__$1 = state_17525;
var statearr_17528_17555 = state_17525__$1;
(statearr_17528_17555[(2)] = null);

(statearr_17528_17555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (4))){
var inst_17504 = (state_17525[(7)]);
var inst_17504__$1 = (state_17525[(2)]);
var inst_17505 = (inst_17504__$1 == null);
var state_17525__$1 = (function (){var statearr_17529 = state_17525;
(statearr_17529[(7)] = inst_17504__$1);

return statearr_17529;
})();
if(cljs.core.truth_(inst_17505)){
var statearr_17530_17556 = state_17525__$1;
(statearr_17530_17556[(1)] = (5));

} else {
var statearr_17531_17557 = state_17525__$1;
(statearr_17531_17557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (13))){
var state_17525__$1 = state_17525;
var statearr_17532_17558 = state_17525__$1;
(statearr_17532_17558[(2)] = null);

(statearr_17532_17558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (6))){
var inst_17504 = (state_17525[(7)]);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17525__$1,(11),to,inst_17504);
} else {
if((state_val_17526 === (3))){
var inst_17523 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17525__$1,inst_17523);
} else {
if((state_val_17526 === (12))){
var state_17525__$1 = state_17525;
var statearr_17533_17559 = state_17525__$1;
(statearr_17533_17559[(2)] = null);

(statearr_17533_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (2))){
var state_17525__$1 = state_17525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17525__$1,(4),from);
} else {
if((state_val_17526 === (11))){
var inst_17514 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
if(cljs.core.truth_(inst_17514)){
var statearr_17534_17560 = state_17525__$1;
(statearr_17534_17560[(1)] = (12));

} else {
var statearr_17535_17561 = state_17525__$1;
(statearr_17535_17561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (9))){
var state_17525__$1 = state_17525;
var statearr_17536_17562 = state_17525__$1;
(statearr_17536_17562[(2)] = null);

(statearr_17536_17562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (5))){
var state_17525__$1 = state_17525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17537_17563 = state_17525__$1;
(statearr_17537_17563[(1)] = (8));

} else {
var statearr_17538_17564 = state_17525__$1;
(statearr_17538_17564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (14))){
var inst_17519 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17539_17565 = state_17525__$1;
(statearr_17539_17565[(2)] = inst_17519);

(statearr_17539_17565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (10))){
var inst_17511 = (state_17525[(2)]);
var state_17525__$1 = state_17525;
var statearr_17540_17566 = state_17525__$1;
(statearr_17540_17566[(2)] = inst_17511);

(statearr_17540_17566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17526 === (8))){
var inst_17508 = cljs.core.async.close_BANG_.call(null,to);
var state_17525__$1 = state_17525;
var statearr_17541_17567 = state_17525__$1;
(statearr_17541_17567[(2)] = inst_17508);

(statearr_17541_17567[(1)] = (10));


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
});})(c__10257__auto___17553))
;
return ((function (switch__10192__auto__,c__10257__auto___17553){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_17525){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17546){if((e17546 instanceof Object)){
var ex__10196__auto__ = e17546;
var statearr_17547_17568 = state_17525;
(statearr_17547_17568[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17569 = state_17525;
state_17525 = G__17569;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_17525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_17525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___17553))
})();
var state__10259__auto__ = (function (){var statearr_17548 = f__10258__auto__.call(null);
(statearr_17548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___17553);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___17553))
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
return (function (p__17753){
var vec__17754 = p__17753;
var v = cljs.core.nth.call(null,vec__17754,(0),null);
var p = cljs.core.nth.call(null,vec__17754,(1),null);
var job = vec__17754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10257__auto___17936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results){
return (function (state_17759){
var state_val_17760 = (state_17759[(1)]);
if((state_val_17760 === (1))){
var state_17759__$1 = state_17759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17759__$1,(2),res,v);
} else {
if((state_val_17760 === (2))){
var inst_17756 = (state_17759[(2)]);
var inst_17757 = cljs.core.async.close_BANG_.call(null,res);
var state_17759__$1 = (function (){var statearr_17761 = state_17759;
(statearr_17761[(7)] = inst_17756);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17759__$1,inst_17757);
} else {
return null;
}
}
});})(c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results))
;
return ((function (switch__10192__auto__,c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_17765 = [null,null,null,null,null,null,null,null];
(statearr_17765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__);

(statearr_17765[(1)] = (1));

return statearr_17765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1 = (function (state_17759){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17766){if((e17766 instanceof Object)){
var ex__10196__auto__ = e17766;
var statearr_17767_17937 = state_17759;
(statearr_17767_17937[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17938 = state_17759;
state_17759 = G__17938;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = function(state_17759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1.call(this,state_17759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results))
})();
var state__10259__auto__ = (function (){var statearr_17768 = f__10258__auto__.call(null);
(statearr_17768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___17936);

return statearr_17768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___17936,res,vec__17754,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17769){
var vec__17770 = p__17769;
var v = cljs.core.nth.call(null,vec__17770,(0),null);
var p = cljs.core.nth.call(null,vec__17770,(1),null);
var job = vec__17770;
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
var n__5997__auto___17939 = n;
var __17940 = (0);
while(true){
if((__17940 < n__5997__auto___17939)){
var G__17771_17941 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17771_17941) {
case "compute":
var c__10257__auto___17943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17940,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (__17940,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function (state_17784){
var state_val_17785 = (state_17784[(1)]);
if((state_val_17785 === (1))){
var state_17784__$1 = state_17784;
var statearr_17786_17944 = state_17784__$1;
(statearr_17786_17944[(2)] = null);

(statearr_17786_17944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (2))){
var state_17784__$1 = state_17784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17784__$1,(4),jobs);
} else {
if((state_val_17785 === (3))){
var inst_17782 = (state_17784[(2)]);
var state_17784__$1 = state_17784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17784__$1,inst_17782);
} else {
if((state_val_17785 === (4))){
var inst_17774 = (state_17784[(2)]);
var inst_17775 = process.call(null,inst_17774);
var state_17784__$1 = state_17784;
if(cljs.core.truth_(inst_17775)){
var statearr_17787_17945 = state_17784__$1;
(statearr_17787_17945[(1)] = (5));

} else {
var statearr_17788_17946 = state_17784__$1;
(statearr_17788_17946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (5))){
var state_17784__$1 = state_17784;
var statearr_17789_17947 = state_17784__$1;
(statearr_17789_17947[(2)] = null);

(statearr_17789_17947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (6))){
var state_17784__$1 = state_17784;
var statearr_17790_17948 = state_17784__$1;
(statearr_17790_17948[(2)] = null);

(statearr_17790_17948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17785 === (7))){
var inst_17780 = (state_17784[(2)]);
var state_17784__$1 = state_17784;
var statearr_17791_17949 = state_17784__$1;
(statearr_17791_17949[(2)] = inst_17780);

(statearr_17791_17949[(1)] = (3));


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
});})(__17940,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
;
return ((function (__17940,switch__10192__auto__,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_17795 = [null,null,null,null,null,null,null];
(statearr_17795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__);

(statearr_17795[(1)] = (1));

return statearr_17795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1 = (function (state_17784){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17796){if((e17796 instanceof Object)){
var ex__10196__auto__ = e17796;
var statearr_17797_17950 = state_17784;
(statearr_17797_17950[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17951 = state_17784;
state_17784 = G__17951;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = function(state_17784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1.call(this,state_17784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__;
})()
;})(__17940,switch__10192__auto__,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
})();
var state__10259__auto__ = (function (){var statearr_17798 = f__10258__auto__.call(null);
(statearr_17798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___17943);

return statearr_17798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(__17940,c__10257__auto___17943,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
);


break;
case "async":
var c__10257__auto___17952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17940,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (__17940,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function (state_17811){
var state_val_17812 = (state_17811[(1)]);
if((state_val_17812 === (1))){
var state_17811__$1 = state_17811;
var statearr_17813_17953 = state_17811__$1;
(statearr_17813_17953[(2)] = null);

(statearr_17813_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (2))){
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17811__$1,(4),jobs);
} else {
if((state_val_17812 === (3))){
var inst_17809 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17811__$1,inst_17809);
} else {
if((state_val_17812 === (4))){
var inst_17801 = (state_17811[(2)]);
var inst_17802 = async.call(null,inst_17801);
var state_17811__$1 = state_17811;
if(cljs.core.truth_(inst_17802)){
var statearr_17814_17954 = state_17811__$1;
(statearr_17814_17954[(1)] = (5));

} else {
var statearr_17815_17955 = state_17811__$1;
(statearr_17815_17955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (5))){
var state_17811__$1 = state_17811;
var statearr_17816_17956 = state_17811__$1;
(statearr_17816_17956[(2)] = null);

(statearr_17816_17956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (6))){
var state_17811__$1 = state_17811;
var statearr_17817_17957 = state_17811__$1;
(statearr_17817_17957[(2)] = null);

(statearr_17817_17957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17812 === (7))){
var inst_17807 = (state_17811[(2)]);
var state_17811__$1 = state_17811;
var statearr_17818_17958 = state_17811__$1;
(statearr_17818_17958[(2)] = inst_17807);

(statearr_17818_17958[(1)] = (3));


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
});})(__17940,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
;
return ((function (__17940,switch__10192__auto__,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null];
(statearr_17822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1 = (function (state_17811){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17823){if((e17823 instanceof Object)){
var ex__10196__auto__ = e17823;
var statearr_17824_17959 = state_17811;
(statearr_17824_17959[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17960 = state_17811;
state_17811 = G__17960;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = function(state_17811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1.call(this,state_17811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__;
})()
;})(__17940,switch__10192__auto__,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
})();
var state__10259__auto__ = (function (){var statearr_17825 = f__10258__auto__.call(null);
(statearr_17825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___17952);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(__17940,c__10257__auto___17952,G__17771_17941,n__5997__auto___17939,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17961 = (__17940 + (1));
__17940 = G__17961;
continue;
} else {
}
break;
}

var c__10257__auto___17962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___17962,jobs,results,process,async){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___17962,jobs,results,process,async){
return (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (1))){
var state_17847__$1 = state_17847;
var statearr_17849_17963 = state_17847__$1;
(statearr_17849_17963[(2)] = null);

(statearr_17849_17963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (2))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17847__$1,(4),from);
} else {
if((state_val_17848 === (3))){
var inst_17845 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (4))){
var inst_17828 = (state_17847[(7)]);
var inst_17828__$1 = (state_17847[(2)]);
var inst_17829 = (inst_17828__$1 == null);
var state_17847__$1 = (function (){var statearr_17850 = state_17847;
(statearr_17850[(7)] = inst_17828__$1);

return statearr_17850;
})();
if(cljs.core.truth_(inst_17829)){
var statearr_17851_17964 = state_17847__$1;
(statearr_17851_17964[(1)] = (5));

} else {
var statearr_17852_17965 = state_17847__$1;
(statearr_17852_17965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (5))){
var inst_17831 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17847__$1 = state_17847;
var statearr_17853_17966 = state_17847__$1;
(statearr_17853_17966[(2)] = inst_17831);

(statearr_17853_17966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (6))){
var inst_17828 = (state_17847[(7)]);
var inst_17833 = (state_17847[(8)]);
var inst_17833__$1 = cljs.core.async.chan.call(null,(1));
var inst_17834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17835 = [inst_17828,inst_17833__$1];
var inst_17836 = (new cljs.core.PersistentVector(null,2,(5),inst_17834,inst_17835,null));
var state_17847__$1 = (function (){var statearr_17854 = state_17847;
(statearr_17854[(8)] = inst_17833__$1);

return statearr_17854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17847__$1,(8),jobs,inst_17836);
} else {
if((state_val_17848 === (7))){
var inst_17843 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17855_17967 = state_17847__$1;
(statearr_17855_17967[(2)] = inst_17843);

(statearr_17855_17967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (8))){
var inst_17833 = (state_17847[(8)]);
var inst_17838 = (state_17847[(2)]);
var state_17847__$1 = (function (){var statearr_17856 = state_17847;
(statearr_17856[(9)] = inst_17838);

return statearr_17856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17847__$1,(9),results,inst_17833);
} else {
if((state_val_17848 === (9))){
var inst_17840 = (state_17847[(2)]);
var state_17847__$1 = (function (){var statearr_17857 = state_17847;
(statearr_17857[(10)] = inst_17840);

return statearr_17857;
})();
var statearr_17858_17968 = state_17847__$1;
(statearr_17858_17968[(2)] = null);

(statearr_17858_17968[(1)] = (2));


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
});})(c__10257__auto___17962,jobs,results,process,async))
;
return ((function (switch__10192__auto__,c__10257__auto___17962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_17862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__);

(statearr_17862[(1)] = (1));

return statearr_17862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1 = (function (state_17847){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17863){if((e17863 instanceof Object)){
var ex__10196__auto__ = e17863;
var statearr_17864_17969 = state_17847;
(statearr_17864_17969[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17970 = state_17847;
state_17847 = G__17970;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___17962,jobs,results,process,async))
})();
var state__10259__auto__ = (function (){var statearr_17865 = f__10258__auto__.call(null);
(statearr_17865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___17962);

return statearr_17865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___17962,jobs,results,process,async))
);


var c__10257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto__,jobs,results,process,async){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto__,jobs,results,process,async){
return (function (state_17903){
var state_val_17904 = (state_17903[(1)]);
if((state_val_17904 === (7))){
var inst_17899 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17905_17971 = state_17903__$1;
(statearr_17905_17971[(2)] = inst_17899);

(statearr_17905_17971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (20))){
var state_17903__$1 = state_17903;
var statearr_17906_17972 = state_17903__$1;
(statearr_17906_17972[(2)] = null);

(statearr_17906_17972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (1))){
var state_17903__$1 = state_17903;
var statearr_17907_17973 = state_17903__$1;
(statearr_17907_17973[(2)] = null);

(statearr_17907_17973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (4))){
var inst_17868 = (state_17903[(7)]);
var inst_17868__$1 = (state_17903[(2)]);
var inst_17869 = (inst_17868__$1 == null);
var state_17903__$1 = (function (){var statearr_17908 = state_17903;
(statearr_17908[(7)] = inst_17868__$1);

return statearr_17908;
})();
if(cljs.core.truth_(inst_17869)){
var statearr_17909_17974 = state_17903__$1;
(statearr_17909_17974[(1)] = (5));

} else {
var statearr_17910_17975 = state_17903__$1;
(statearr_17910_17975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (15))){
var inst_17881 = (state_17903[(8)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17903__$1,(18),to,inst_17881);
} else {
if((state_val_17904 === (21))){
var inst_17894 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17911_17976 = state_17903__$1;
(statearr_17911_17976[(2)] = inst_17894);

(statearr_17911_17976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (13))){
var inst_17896 = (state_17903[(2)]);
var state_17903__$1 = (function (){var statearr_17912 = state_17903;
(statearr_17912[(9)] = inst_17896);

return statearr_17912;
})();
var statearr_17913_17977 = state_17903__$1;
(statearr_17913_17977[(2)] = null);

(statearr_17913_17977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (6))){
var inst_17868 = (state_17903[(7)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17903__$1,(11),inst_17868);
} else {
if((state_val_17904 === (17))){
var inst_17889 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
if(cljs.core.truth_(inst_17889)){
var statearr_17914_17978 = state_17903__$1;
(statearr_17914_17978[(1)] = (19));

} else {
var statearr_17915_17979 = state_17903__$1;
(statearr_17915_17979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (3))){
var inst_17901 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17903__$1,inst_17901);
} else {
if((state_val_17904 === (12))){
var inst_17878 = (state_17903[(10)]);
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17903__$1,(14),inst_17878);
} else {
if((state_val_17904 === (2))){
var state_17903__$1 = state_17903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17903__$1,(4),results);
} else {
if((state_val_17904 === (19))){
var state_17903__$1 = state_17903;
var statearr_17916_17980 = state_17903__$1;
(statearr_17916_17980[(2)] = null);

(statearr_17916_17980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (11))){
var inst_17878 = (state_17903[(2)]);
var state_17903__$1 = (function (){var statearr_17917 = state_17903;
(statearr_17917[(10)] = inst_17878);

return statearr_17917;
})();
var statearr_17918_17981 = state_17903__$1;
(statearr_17918_17981[(2)] = null);

(statearr_17918_17981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (9))){
var state_17903__$1 = state_17903;
var statearr_17919_17982 = state_17903__$1;
(statearr_17919_17982[(2)] = null);

(statearr_17919_17982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (5))){
var state_17903__$1 = state_17903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17920_17983 = state_17903__$1;
(statearr_17920_17983[(1)] = (8));

} else {
var statearr_17921_17984 = state_17903__$1;
(statearr_17921_17984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (14))){
var inst_17881 = (state_17903[(8)]);
var inst_17883 = (state_17903[(11)]);
var inst_17881__$1 = (state_17903[(2)]);
var inst_17882 = (inst_17881__$1 == null);
var inst_17883__$1 = cljs.core.not.call(null,inst_17882);
var state_17903__$1 = (function (){var statearr_17922 = state_17903;
(statearr_17922[(8)] = inst_17881__$1);

(statearr_17922[(11)] = inst_17883__$1);

return statearr_17922;
})();
if(inst_17883__$1){
var statearr_17923_17985 = state_17903__$1;
(statearr_17923_17985[(1)] = (15));

} else {
var statearr_17924_17986 = state_17903__$1;
(statearr_17924_17986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (16))){
var inst_17883 = (state_17903[(11)]);
var state_17903__$1 = state_17903;
var statearr_17925_17987 = state_17903__$1;
(statearr_17925_17987[(2)] = inst_17883);

(statearr_17925_17987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (10))){
var inst_17875 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17926_17988 = state_17903__$1;
(statearr_17926_17988[(2)] = inst_17875);

(statearr_17926_17988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (18))){
var inst_17886 = (state_17903[(2)]);
var state_17903__$1 = state_17903;
var statearr_17927_17989 = state_17903__$1;
(statearr_17927_17989[(2)] = inst_17886);

(statearr_17927_17989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17904 === (8))){
var inst_17872 = cljs.core.async.close_BANG_.call(null,to);
var state_17903__$1 = state_17903;
var statearr_17928_17990 = state_17903__$1;
(statearr_17928_17990[(2)] = inst_17872);

(statearr_17928_17990[(1)] = (10));


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
});})(c__10257__auto__,jobs,results,process,async))
;
return ((function (switch__10192__auto__,c__10257__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_17932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__);

(statearr_17932[(1)] = (1));

return statearr_17932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1 = (function (state_17903){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_17903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e17933){if((e17933 instanceof Object)){
var ex__10196__auto__ = e17933;
var statearr_17934_17991 = state_17903;
(statearr_17934_17991[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17992 = state_17903;
state_17903 = G__17992;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__ = function(state_17903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1.call(this,state_17903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto__,jobs,results,process,async))
})();
var state__10259__auto__ = (function (){var statearr_17935 = f__10258__auto__.call(null);
(statearr_17935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto__);

return statearr_17935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto__,jobs,results,process,async))
);

return c__10257__auto__;
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
var args17993 = [];
var len__6152__auto___17996 = arguments.length;
var i__6153__auto___17997 = (0);
while(true){
if((i__6153__auto___17997 < len__6152__auto___17996)){
args17993.push((arguments[i__6153__auto___17997]));

var G__17998 = (i__6153__auto___17997 + (1));
i__6153__auto___17997 = G__17998;
continue;
} else {
}
break;
}

var G__17995 = args17993.length;
switch (G__17995) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17993.length)].join('')));

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
var args18000 = [];
var len__6152__auto___18003 = arguments.length;
var i__6153__auto___18004 = (0);
while(true){
if((i__6153__auto___18004 < len__6152__auto___18003)){
args18000.push((arguments[i__6153__auto___18004]));

var G__18005 = (i__6153__auto___18004 + (1));
i__6153__auto___18004 = G__18005;
continue;
} else {
}
break;
}

var G__18002 = args18000.length;
switch (G__18002) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18000.length)].join('')));

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
var args18007 = [];
var len__6152__auto___18060 = arguments.length;
var i__6153__auto___18061 = (0);
while(true){
if((i__6153__auto___18061 < len__6152__auto___18060)){
args18007.push((arguments[i__6153__auto___18061]));

var G__18062 = (i__6153__auto___18061 + (1));
i__6153__auto___18061 = G__18062;
continue;
} else {
}
break;
}

var G__18009 = args18007.length;
switch (G__18009) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18007.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10257__auto___18064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___18064,tc,fc){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___18064,tc,fc){
return (function (state_18035){
var state_val_18036 = (state_18035[(1)]);
if((state_val_18036 === (7))){
var inst_18031 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18037_18065 = state_18035__$1;
(statearr_18037_18065[(2)] = inst_18031);

(statearr_18037_18065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (1))){
var state_18035__$1 = state_18035;
var statearr_18038_18066 = state_18035__$1;
(statearr_18038_18066[(2)] = null);

(statearr_18038_18066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (4))){
var inst_18012 = (state_18035[(7)]);
var inst_18012__$1 = (state_18035[(2)]);
var inst_18013 = (inst_18012__$1 == null);
var state_18035__$1 = (function (){var statearr_18039 = state_18035;
(statearr_18039[(7)] = inst_18012__$1);

return statearr_18039;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18040_18067 = state_18035__$1;
(statearr_18040_18067[(1)] = (5));

} else {
var statearr_18041_18068 = state_18035__$1;
(statearr_18041_18068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (13))){
var state_18035__$1 = state_18035;
var statearr_18042_18069 = state_18035__$1;
(statearr_18042_18069[(2)] = null);

(statearr_18042_18069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (6))){
var inst_18012 = (state_18035[(7)]);
var inst_18018 = p.call(null,inst_18012);
var state_18035__$1 = state_18035;
if(cljs.core.truth_(inst_18018)){
var statearr_18043_18070 = state_18035__$1;
(statearr_18043_18070[(1)] = (9));

} else {
var statearr_18044_18071 = state_18035__$1;
(statearr_18044_18071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (3))){
var inst_18033 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18035__$1,inst_18033);
} else {
if((state_val_18036 === (12))){
var state_18035__$1 = state_18035;
var statearr_18045_18072 = state_18035__$1;
(statearr_18045_18072[(2)] = null);

(statearr_18045_18072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (2))){
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18035__$1,(4),ch);
} else {
if((state_val_18036 === (11))){
var inst_18012 = (state_18035[(7)]);
var inst_18022 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18035__$1,(8),inst_18022,inst_18012);
} else {
if((state_val_18036 === (9))){
var state_18035__$1 = state_18035;
var statearr_18046_18073 = state_18035__$1;
(statearr_18046_18073[(2)] = tc);

(statearr_18046_18073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (5))){
var inst_18015 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18016 = cljs.core.async.close_BANG_.call(null,fc);
var state_18035__$1 = (function (){var statearr_18047 = state_18035;
(statearr_18047[(8)] = inst_18015);

return statearr_18047;
})();
var statearr_18048_18074 = state_18035__$1;
(statearr_18048_18074[(2)] = inst_18016);

(statearr_18048_18074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (14))){
var inst_18029 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
var statearr_18049_18075 = state_18035__$1;
(statearr_18049_18075[(2)] = inst_18029);

(statearr_18049_18075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (10))){
var state_18035__$1 = state_18035;
var statearr_18050_18076 = state_18035__$1;
(statearr_18050_18076[(2)] = fc);

(statearr_18050_18076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18036 === (8))){
var inst_18024 = (state_18035[(2)]);
var state_18035__$1 = state_18035;
if(cljs.core.truth_(inst_18024)){
var statearr_18051_18077 = state_18035__$1;
(statearr_18051_18077[(1)] = (12));

} else {
var statearr_18052_18078 = state_18035__$1;
(statearr_18052_18078[(1)] = (13));

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
});})(c__10257__auto___18064,tc,fc))
;
return ((function (switch__10192__auto__,c__10257__auto___18064,tc,fc){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_18056 = [null,null,null,null,null,null,null,null,null];
(statearr_18056[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_18056[(1)] = (1));

return statearr_18056;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_18035){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_18035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e18057){if((e18057 instanceof Object)){
var ex__10196__auto__ = e18057;
var statearr_18058_18079 = state_18035;
(statearr_18058_18079[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18080 = state_18035;
state_18035 = G__18080;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_18035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_18035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___18064,tc,fc))
})();
var state__10259__auto__ = (function (){var statearr_18059 = f__10258__auto__.call(null);
(statearr_18059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___18064);

return statearr_18059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___18064,tc,fc))
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
var c__10257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto__){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto__){
return (function (state_18127){
var state_val_18128 = (state_18127[(1)]);
if((state_val_18128 === (1))){
var inst_18113 = init;
var state_18127__$1 = (function (){var statearr_18129 = state_18127;
(statearr_18129[(7)] = inst_18113);

return statearr_18129;
})();
var statearr_18130_18145 = state_18127__$1;
(statearr_18130_18145[(2)] = null);

(statearr_18130_18145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (2))){
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18127__$1,(4),ch);
} else {
if((state_val_18128 === (3))){
var inst_18125 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18127__$1,inst_18125);
} else {
if((state_val_18128 === (4))){
var inst_18116 = (state_18127[(8)]);
var inst_18116__$1 = (state_18127[(2)]);
var inst_18117 = (inst_18116__$1 == null);
var state_18127__$1 = (function (){var statearr_18131 = state_18127;
(statearr_18131[(8)] = inst_18116__$1);

return statearr_18131;
})();
if(cljs.core.truth_(inst_18117)){
var statearr_18132_18146 = state_18127__$1;
(statearr_18132_18146[(1)] = (5));

} else {
var statearr_18133_18147 = state_18127__$1;
(statearr_18133_18147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (5))){
var inst_18113 = (state_18127[(7)]);
var state_18127__$1 = state_18127;
var statearr_18134_18148 = state_18127__$1;
(statearr_18134_18148[(2)] = inst_18113);

(statearr_18134_18148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (6))){
var inst_18116 = (state_18127[(8)]);
var inst_18113 = (state_18127[(7)]);
var inst_18120 = f.call(null,inst_18113,inst_18116);
var inst_18113__$1 = inst_18120;
var state_18127__$1 = (function (){var statearr_18135 = state_18127;
(statearr_18135[(7)] = inst_18113__$1);

return statearr_18135;
})();
var statearr_18136_18149 = state_18127__$1;
(statearr_18136_18149[(2)] = null);

(statearr_18136_18149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18128 === (7))){
var inst_18123 = (state_18127[(2)]);
var state_18127__$1 = state_18127;
var statearr_18137_18150 = state_18127__$1;
(statearr_18137_18150[(2)] = inst_18123);

(statearr_18137_18150[(1)] = (3));


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
});})(c__10257__auto__))
;
return ((function (switch__10192__auto__,c__10257__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10193__auto____0 = (function (){
var statearr_18141 = [null,null,null,null,null,null,null,null,null];
(statearr_18141[(0)] = cljs$core$async$reduce_$_state_machine__10193__auto__);

(statearr_18141[(1)] = (1));

return statearr_18141;
});
var cljs$core$async$reduce_$_state_machine__10193__auto____1 = (function (state_18127){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_18127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e18142){if((e18142 instanceof Object)){
var ex__10196__auto__ = e18142;
var statearr_18143_18151 = state_18127;
(statearr_18143_18151[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18152 = state_18127;
state_18127 = G__18152;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10193__auto__ = function(state_18127){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10193__auto____1.call(this,state_18127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10193__auto____0;
cljs$core$async$reduce_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10193__auto____1;
return cljs$core$async$reduce_$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto__))
})();
var state__10259__auto__ = (function (){var statearr_18144 = f__10258__auto__.call(null);
(statearr_18144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto__);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto__))
);

return c__10257__auto__;
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
var args18153 = [];
var len__6152__auto___18205 = arguments.length;
var i__6153__auto___18206 = (0);
while(true){
if((i__6153__auto___18206 < len__6152__auto___18205)){
args18153.push((arguments[i__6153__auto___18206]));

var G__18207 = (i__6153__auto___18206 + (1));
i__6153__auto___18206 = G__18207;
continue;
} else {
}
break;
}

var G__18155 = args18153.length;
switch (G__18155) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18153.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto__){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto__){
return (function (state_18180){
var state_val_18181 = (state_18180[(1)]);
if((state_val_18181 === (7))){
var inst_18162 = (state_18180[(2)]);
var state_18180__$1 = state_18180;
var statearr_18182_18209 = state_18180__$1;
(statearr_18182_18209[(2)] = inst_18162);

(statearr_18182_18209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (1))){
var inst_18156 = cljs.core.seq.call(null,coll);
var inst_18157 = inst_18156;
var state_18180__$1 = (function (){var statearr_18183 = state_18180;
(statearr_18183[(7)] = inst_18157);

return statearr_18183;
})();
var statearr_18184_18210 = state_18180__$1;
(statearr_18184_18210[(2)] = null);

(statearr_18184_18210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (4))){
var inst_18157 = (state_18180[(7)]);
var inst_18160 = cljs.core.first.call(null,inst_18157);
var state_18180__$1 = state_18180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18180__$1,(7),ch,inst_18160);
} else {
if((state_val_18181 === (13))){
var inst_18174 = (state_18180[(2)]);
var state_18180__$1 = state_18180;
var statearr_18185_18211 = state_18180__$1;
(statearr_18185_18211[(2)] = inst_18174);

(statearr_18185_18211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (6))){
var inst_18165 = (state_18180[(2)]);
var state_18180__$1 = state_18180;
if(cljs.core.truth_(inst_18165)){
var statearr_18186_18212 = state_18180__$1;
(statearr_18186_18212[(1)] = (8));

} else {
var statearr_18187_18213 = state_18180__$1;
(statearr_18187_18213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (3))){
var inst_18178 = (state_18180[(2)]);
var state_18180__$1 = state_18180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18180__$1,inst_18178);
} else {
if((state_val_18181 === (12))){
var state_18180__$1 = state_18180;
var statearr_18188_18214 = state_18180__$1;
(statearr_18188_18214[(2)] = null);

(statearr_18188_18214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (2))){
var inst_18157 = (state_18180[(7)]);
var state_18180__$1 = state_18180;
if(cljs.core.truth_(inst_18157)){
var statearr_18189_18215 = state_18180__$1;
(statearr_18189_18215[(1)] = (4));

} else {
var statearr_18190_18216 = state_18180__$1;
(statearr_18190_18216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (11))){
var inst_18171 = cljs.core.async.close_BANG_.call(null,ch);
var state_18180__$1 = state_18180;
var statearr_18191_18217 = state_18180__$1;
(statearr_18191_18217[(2)] = inst_18171);

(statearr_18191_18217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (9))){
var state_18180__$1 = state_18180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18192_18218 = state_18180__$1;
(statearr_18192_18218[(1)] = (11));

} else {
var statearr_18193_18219 = state_18180__$1;
(statearr_18193_18219[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (5))){
var inst_18157 = (state_18180[(7)]);
var state_18180__$1 = state_18180;
var statearr_18194_18220 = state_18180__$1;
(statearr_18194_18220[(2)] = inst_18157);

(statearr_18194_18220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (10))){
var inst_18176 = (state_18180[(2)]);
var state_18180__$1 = state_18180;
var statearr_18195_18221 = state_18180__$1;
(statearr_18195_18221[(2)] = inst_18176);

(statearr_18195_18221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18181 === (8))){
var inst_18157 = (state_18180[(7)]);
var inst_18167 = cljs.core.next.call(null,inst_18157);
var inst_18157__$1 = inst_18167;
var state_18180__$1 = (function (){var statearr_18196 = state_18180;
(statearr_18196[(7)] = inst_18157__$1);

return statearr_18196;
})();
var statearr_18197_18222 = state_18180__$1;
(statearr_18197_18222[(2)] = null);

(statearr_18197_18222[(1)] = (2));


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
});})(c__10257__auto__))
;
return ((function (switch__10192__auto__,c__10257__auto__){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_18201 = [null,null,null,null,null,null,null,null];
(statearr_18201[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_18201[(1)] = (1));

return statearr_18201;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_18180){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_18180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e18202){if((e18202 instanceof Object)){
var ex__10196__auto__ = e18202;
var statearr_18203_18223 = state_18180;
(statearr_18203_18223[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18224 = state_18180;
state_18180 = G__18224;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_18180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_18180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto__))
})();
var state__10259__auto__ = (function (){var statearr_18204 = f__10258__auto__.call(null);
(statearr_18204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto__);

return statearr_18204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto__))
);

return c__10257__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18446 = (function (mult,ch,cs,meta18447){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18447 = meta18447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18448,meta18447__$1){
var self__ = this;
var _18448__$1 = this;
return (new cljs.core.async.t_cljs$core$async18446(self__.mult,self__.ch,self__.cs,meta18447__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18448){
var self__ = this;
var _18448__$1 = this;
return self__.meta18447;
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18447","meta18447",785141401,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18446";

cljs.core.async.t_cljs$core$async18446.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18446");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18446 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18446(mult__$1,ch__$1,cs__$1,meta18447){
return (new cljs.core.async.t_cljs$core$async18446(mult__$1,ch__$1,cs__$1,meta18447));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18446(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10257__auto___18667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___18667,cs,m,dchan,dctr,done){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___18667,cs,m,dchan,dctr,done){
return (function (state_18579){
var state_val_18580 = (state_18579[(1)]);
if((state_val_18580 === (7))){
var inst_18575 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18581_18668 = state_18579__$1;
(statearr_18581_18668[(2)] = inst_18575);

(statearr_18581_18668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (20))){
var inst_18480 = (state_18579[(7)]);
var inst_18490 = cljs.core.first.call(null,inst_18480);
var inst_18491 = cljs.core.nth.call(null,inst_18490,(0),null);
var inst_18492 = cljs.core.nth.call(null,inst_18490,(1),null);
var state_18579__$1 = (function (){var statearr_18582 = state_18579;
(statearr_18582[(8)] = inst_18491);

return statearr_18582;
})();
if(cljs.core.truth_(inst_18492)){
var statearr_18583_18669 = state_18579__$1;
(statearr_18583_18669[(1)] = (22));

} else {
var statearr_18584_18670 = state_18579__$1;
(statearr_18584_18670[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (27))){
var inst_18520 = (state_18579[(9)]);
var inst_18451 = (state_18579[(10)]);
var inst_18527 = (state_18579[(11)]);
var inst_18522 = (state_18579[(12)]);
var inst_18527__$1 = cljs.core._nth.call(null,inst_18520,inst_18522);
var inst_18528 = cljs.core.async.put_BANG_.call(null,inst_18527__$1,inst_18451,done);
var state_18579__$1 = (function (){var statearr_18585 = state_18579;
(statearr_18585[(11)] = inst_18527__$1);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18528)){
var statearr_18586_18671 = state_18579__$1;
(statearr_18586_18671[(1)] = (30));

} else {
var statearr_18587_18672 = state_18579__$1;
(statearr_18587_18672[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (1))){
var state_18579__$1 = state_18579;
var statearr_18588_18673 = state_18579__$1;
(statearr_18588_18673[(2)] = null);

(statearr_18588_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (24))){
var inst_18480 = (state_18579[(7)]);
var inst_18497 = (state_18579[(2)]);
var inst_18498 = cljs.core.next.call(null,inst_18480);
var inst_18460 = inst_18498;
var inst_18461 = null;
var inst_18462 = (0);
var inst_18463 = (0);
var state_18579__$1 = (function (){var statearr_18589 = state_18579;
(statearr_18589[(13)] = inst_18462);

(statearr_18589[(14)] = inst_18461);

(statearr_18589[(15)] = inst_18497);

(statearr_18589[(16)] = inst_18463);

(statearr_18589[(17)] = inst_18460);

return statearr_18589;
})();
var statearr_18590_18674 = state_18579__$1;
(statearr_18590_18674[(2)] = null);

(statearr_18590_18674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (39))){
var state_18579__$1 = state_18579;
var statearr_18594_18675 = state_18579__$1;
(statearr_18594_18675[(2)] = null);

(statearr_18594_18675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (4))){
var inst_18451 = (state_18579[(10)]);
var inst_18451__$1 = (state_18579[(2)]);
var inst_18452 = (inst_18451__$1 == null);
var state_18579__$1 = (function (){var statearr_18595 = state_18579;
(statearr_18595[(10)] = inst_18451__$1);

return statearr_18595;
})();
if(cljs.core.truth_(inst_18452)){
var statearr_18596_18676 = state_18579__$1;
(statearr_18596_18676[(1)] = (5));

} else {
var statearr_18597_18677 = state_18579__$1;
(statearr_18597_18677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (15))){
var inst_18462 = (state_18579[(13)]);
var inst_18461 = (state_18579[(14)]);
var inst_18463 = (state_18579[(16)]);
var inst_18460 = (state_18579[(17)]);
var inst_18476 = (state_18579[(2)]);
var inst_18477 = (inst_18463 + (1));
var tmp18591 = inst_18462;
var tmp18592 = inst_18461;
var tmp18593 = inst_18460;
var inst_18460__$1 = tmp18593;
var inst_18461__$1 = tmp18592;
var inst_18462__$1 = tmp18591;
var inst_18463__$1 = inst_18477;
var state_18579__$1 = (function (){var statearr_18598 = state_18579;
(statearr_18598[(13)] = inst_18462__$1);

(statearr_18598[(14)] = inst_18461__$1);

(statearr_18598[(18)] = inst_18476);

(statearr_18598[(16)] = inst_18463__$1);

(statearr_18598[(17)] = inst_18460__$1);

return statearr_18598;
})();
var statearr_18599_18678 = state_18579__$1;
(statearr_18599_18678[(2)] = null);

(statearr_18599_18678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (21))){
var inst_18501 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18603_18679 = state_18579__$1;
(statearr_18603_18679[(2)] = inst_18501);

(statearr_18603_18679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (31))){
var inst_18527 = (state_18579[(11)]);
var inst_18531 = done.call(null,null);
var inst_18532 = cljs.core.async.untap_STAR_.call(null,m,inst_18527);
var state_18579__$1 = (function (){var statearr_18604 = state_18579;
(statearr_18604[(19)] = inst_18531);

return statearr_18604;
})();
var statearr_18605_18680 = state_18579__$1;
(statearr_18605_18680[(2)] = inst_18532);

(statearr_18605_18680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (32))){
var inst_18521 = (state_18579[(20)]);
var inst_18520 = (state_18579[(9)]);
var inst_18519 = (state_18579[(21)]);
var inst_18522 = (state_18579[(12)]);
var inst_18534 = (state_18579[(2)]);
var inst_18535 = (inst_18522 + (1));
var tmp18600 = inst_18521;
var tmp18601 = inst_18520;
var tmp18602 = inst_18519;
var inst_18519__$1 = tmp18602;
var inst_18520__$1 = tmp18601;
var inst_18521__$1 = tmp18600;
var inst_18522__$1 = inst_18535;
var state_18579__$1 = (function (){var statearr_18606 = state_18579;
(statearr_18606[(20)] = inst_18521__$1);

(statearr_18606[(22)] = inst_18534);

(statearr_18606[(9)] = inst_18520__$1);

(statearr_18606[(21)] = inst_18519__$1);

(statearr_18606[(12)] = inst_18522__$1);

return statearr_18606;
})();
var statearr_18607_18681 = state_18579__$1;
(statearr_18607_18681[(2)] = null);

(statearr_18607_18681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (40))){
var inst_18547 = (state_18579[(23)]);
var inst_18551 = done.call(null,null);
var inst_18552 = cljs.core.async.untap_STAR_.call(null,m,inst_18547);
var state_18579__$1 = (function (){var statearr_18608 = state_18579;
(statearr_18608[(24)] = inst_18551);

return statearr_18608;
})();
var statearr_18609_18682 = state_18579__$1;
(statearr_18609_18682[(2)] = inst_18552);

(statearr_18609_18682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (33))){
var inst_18538 = (state_18579[(25)]);
var inst_18540 = cljs.core.chunked_seq_QMARK_.call(null,inst_18538);
var state_18579__$1 = state_18579;
if(inst_18540){
var statearr_18610_18683 = state_18579__$1;
(statearr_18610_18683[(1)] = (36));

} else {
var statearr_18611_18684 = state_18579__$1;
(statearr_18611_18684[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (13))){
var inst_18470 = (state_18579[(26)]);
var inst_18473 = cljs.core.async.close_BANG_.call(null,inst_18470);
var state_18579__$1 = state_18579;
var statearr_18612_18685 = state_18579__$1;
(statearr_18612_18685[(2)] = inst_18473);

(statearr_18612_18685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (22))){
var inst_18491 = (state_18579[(8)]);
var inst_18494 = cljs.core.async.close_BANG_.call(null,inst_18491);
var state_18579__$1 = state_18579;
var statearr_18613_18686 = state_18579__$1;
(statearr_18613_18686[(2)] = inst_18494);

(statearr_18613_18686[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (36))){
var inst_18538 = (state_18579[(25)]);
var inst_18542 = cljs.core.chunk_first.call(null,inst_18538);
var inst_18543 = cljs.core.chunk_rest.call(null,inst_18538);
var inst_18544 = cljs.core.count.call(null,inst_18542);
var inst_18519 = inst_18543;
var inst_18520 = inst_18542;
var inst_18521 = inst_18544;
var inst_18522 = (0);
var state_18579__$1 = (function (){var statearr_18614 = state_18579;
(statearr_18614[(20)] = inst_18521);

(statearr_18614[(9)] = inst_18520);

(statearr_18614[(21)] = inst_18519);

(statearr_18614[(12)] = inst_18522);

return statearr_18614;
})();
var statearr_18615_18687 = state_18579__$1;
(statearr_18615_18687[(2)] = null);

(statearr_18615_18687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (41))){
var inst_18538 = (state_18579[(25)]);
var inst_18554 = (state_18579[(2)]);
var inst_18555 = cljs.core.next.call(null,inst_18538);
var inst_18519 = inst_18555;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18579__$1 = (function (){var statearr_18616 = state_18579;
(statearr_18616[(20)] = inst_18521);

(statearr_18616[(9)] = inst_18520);

(statearr_18616[(27)] = inst_18554);

(statearr_18616[(21)] = inst_18519);

(statearr_18616[(12)] = inst_18522);

return statearr_18616;
})();
var statearr_18617_18688 = state_18579__$1;
(statearr_18617_18688[(2)] = null);

(statearr_18617_18688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (43))){
var state_18579__$1 = state_18579;
var statearr_18618_18689 = state_18579__$1;
(statearr_18618_18689[(2)] = null);

(statearr_18618_18689[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (29))){
var inst_18563 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18619_18690 = state_18579__$1;
(statearr_18619_18690[(2)] = inst_18563);

(statearr_18619_18690[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (44))){
var inst_18572 = (state_18579[(2)]);
var state_18579__$1 = (function (){var statearr_18620 = state_18579;
(statearr_18620[(28)] = inst_18572);

return statearr_18620;
})();
var statearr_18621_18691 = state_18579__$1;
(statearr_18621_18691[(2)] = null);

(statearr_18621_18691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (6))){
var inst_18511 = (state_18579[(29)]);
var inst_18510 = cljs.core.deref.call(null,cs);
var inst_18511__$1 = cljs.core.keys.call(null,inst_18510);
var inst_18512 = cljs.core.count.call(null,inst_18511__$1);
var inst_18513 = cljs.core.reset_BANG_.call(null,dctr,inst_18512);
var inst_18518 = cljs.core.seq.call(null,inst_18511__$1);
var inst_18519 = inst_18518;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18579__$1 = (function (){var statearr_18622 = state_18579;
(statearr_18622[(20)] = inst_18521);

(statearr_18622[(9)] = inst_18520);

(statearr_18622[(29)] = inst_18511__$1);

(statearr_18622[(21)] = inst_18519);

(statearr_18622[(30)] = inst_18513);

(statearr_18622[(12)] = inst_18522);

return statearr_18622;
})();
var statearr_18623_18692 = state_18579__$1;
(statearr_18623_18692[(2)] = null);

(statearr_18623_18692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (28))){
var inst_18538 = (state_18579[(25)]);
var inst_18519 = (state_18579[(21)]);
var inst_18538__$1 = cljs.core.seq.call(null,inst_18519);
var state_18579__$1 = (function (){var statearr_18624 = state_18579;
(statearr_18624[(25)] = inst_18538__$1);

return statearr_18624;
})();
if(inst_18538__$1){
var statearr_18625_18693 = state_18579__$1;
(statearr_18625_18693[(1)] = (33));

} else {
var statearr_18626_18694 = state_18579__$1;
(statearr_18626_18694[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (25))){
var inst_18521 = (state_18579[(20)]);
var inst_18522 = (state_18579[(12)]);
var inst_18524 = (inst_18522 < inst_18521);
var inst_18525 = inst_18524;
var state_18579__$1 = state_18579;
if(cljs.core.truth_(inst_18525)){
var statearr_18627_18695 = state_18579__$1;
(statearr_18627_18695[(1)] = (27));

} else {
var statearr_18628_18696 = state_18579__$1;
(statearr_18628_18696[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (34))){
var state_18579__$1 = state_18579;
var statearr_18629_18697 = state_18579__$1;
(statearr_18629_18697[(2)] = null);

(statearr_18629_18697[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (17))){
var state_18579__$1 = state_18579;
var statearr_18630_18698 = state_18579__$1;
(statearr_18630_18698[(2)] = null);

(statearr_18630_18698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (3))){
var inst_18577 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18579__$1,inst_18577);
} else {
if((state_val_18580 === (12))){
var inst_18506 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18631_18699 = state_18579__$1;
(statearr_18631_18699[(2)] = inst_18506);

(statearr_18631_18699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (2))){
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18579__$1,(4),ch);
} else {
if((state_val_18580 === (23))){
var state_18579__$1 = state_18579;
var statearr_18632_18700 = state_18579__$1;
(statearr_18632_18700[(2)] = null);

(statearr_18632_18700[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (35))){
var inst_18561 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18633_18701 = state_18579__$1;
(statearr_18633_18701[(2)] = inst_18561);

(statearr_18633_18701[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (19))){
var inst_18480 = (state_18579[(7)]);
var inst_18484 = cljs.core.chunk_first.call(null,inst_18480);
var inst_18485 = cljs.core.chunk_rest.call(null,inst_18480);
var inst_18486 = cljs.core.count.call(null,inst_18484);
var inst_18460 = inst_18485;
var inst_18461 = inst_18484;
var inst_18462 = inst_18486;
var inst_18463 = (0);
var state_18579__$1 = (function (){var statearr_18634 = state_18579;
(statearr_18634[(13)] = inst_18462);

(statearr_18634[(14)] = inst_18461);

(statearr_18634[(16)] = inst_18463);

(statearr_18634[(17)] = inst_18460);

return statearr_18634;
})();
var statearr_18635_18702 = state_18579__$1;
(statearr_18635_18702[(2)] = null);

(statearr_18635_18702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (11))){
var inst_18480 = (state_18579[(7)]);
var inst_18460 = (state_18579[(17)]);
var inst_18480__$1 = cljs.core.seq.call(null,inst_18460);
var state_18579__$1 = (function (){var statearr_18636 = state_18579;
(statearr_18636[(7)] = inst_18480__$1);

return statearr_18636;
})();
if(inst_18480__$1){
var statearr_18637_18703 = state_18579__$1;
(statearr_18637_18703[(1)] = (16));

} else {
var statearr_18638_18704 = state_18579__$1;
(statearr_18638_18704[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (9))){
var inst_18508 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18639_18705 = state_18579__$1;
(statearr_18639_18705[(2)] = inst_18508);

(statearr_18639_18705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (5))){
var inst_18458 = cljs.core.deref.call(null,cs);
var inst_18459 = cljs.core.seq.call(null,inst_18458);
var inst_18460 = inst_18459;
var inst_18461 = null;
var inst_18462 = (0);
var inst_18463 = (0);
var state_18579__$1 = (function (){var statearr_18640 = state_18579;
(statearr_18640[(13)] = inst_18462);

(statearr_18640[(14)] = inst_18461);

(statearr_18640[(16)] = inst_18463);

(statearr_18640[(17)] = inst_18460);

return statearr_18640;
})();
var statearr_18641_18706 = state_18579__$1;
(statearr_18641_18706[(2)] = null);

(statearr_18641_18706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (14))){
var state_18579__$1 = state_18579;
var statearr_18642_18707 = state_18579__$1;
(statearr_18642_18707[(2)] = null);

(statearr_18642_18707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (45))){
var inst_18569 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18643_18708 = state_18579__$1;
(statearr_18643_18708[(2)] = inst_18569);

(statearr_18643_18708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (26))){
var inst_18511 = (state_18579[(29)]);
var inst_18565 = (state_18579[(2)]);
var inst_18566 = cljs.core.seq.call(null,inst_18511);
var state_18579__$1 = (function (){var statearr_18644 = state_18579;
(statearr_18644[(31)] = inst_18565);

return statearr_18644;
})();
if(inst_18566){
var statearr_18645_18709 = state_18579__$1;
(statearr_18645_18709[(1)] = (42));

} else {
var statearr_18646_18710 = state_18579__$1;
(statearr_18646_18710[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (16))){
var inst_18480 = (state_18579[(7)]);
var inst_18482 = cljs.core.chunked_seq_QMARK_.call(null,inst_18480);
var state_18579__$1 = state_18579;
if(inst_18482){
var statearr_18647_18711 = state_18579__$1;
(statearr_18647_18711[(1)] = (19));

} else {
var statearr_18648_18712 = state_18579__$1;
(statearr_18648_18712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (38))){
var inst_18558 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18649_18713 = state_18579__$1;
(statearr_18649_18713[(2)] = inst_18558);

(statearr_18649_18713[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (30))){
var state_18579__$1 = state_18579;
var statearr_18650_18714 = state_18579__$1;
(statearr_18650_18714[(2)] = null);

(statearr_18650_18714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (10))){
var inst_18461 = (state_18579[(14)]);
var inst_18463 = (state_18579[(16)]);
var inst_18469 = cljs.core._nth.call(null,inst_18461,inst_18463);
var inst_18470 = cljs.core.nth.call(null,inst_18469,(0),null);
var inst_18471 = cljs.core.nth.call(null,inst_18469,(1),null);
var state_18579__$1 = (function (){var statearr_18651 = state_18579;
(statearr_18651[(26)] = inst_18470);

return statearr_18651;
})();
if(cljs.core.truth_(inst_18471)){
var statearr_18652_18715 = state_18579__$1;
(statearr_18652_18715[(1)] = (13));

} else {
var statearr_18653_18716 = state_18579__$1;
(statearr_18653_18716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (18))){
var inst_18504 = (state_18579[(2)]);
var state_18579__$1 = state_18579;
var statearr_18654_18717 = state_18579__$1;
(statearr_18654_18717[(2)] = inst_18504);

(statearr_18654_18717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (42))){
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18579__$1,(45),dchan);
} else {
if((state_val_18580 === (37))){
var inst_18547 = (state_18579[(23)]);
var inst_18538 = (state_18579[(25)]);
var inst_18451 = (state_18579[(10)]);
var inst_18547__$1 = cljs.core.first.call(null,inst_18538);
var inst_18548 = cljs.core.async.put_BANG_.call(null,inst_18547__$1,inst_18451,done);
var state_18579__$1 = (function (){var statearr_18655 = state_18579;
(statearr_18655[(23)] = inst_18547__$1);

return statearr_18655;
})();
if(cljs.core.truth_(inst_18548)){
var statearr_18656_18718 = state_18579__$1;
(statearr_18656_18718[(1)] = (39));

} else {
var statearr_18657_18719 = state_18579__$1;
(statearr_18657_18719[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18580 === (8))){
var inst_18462 = (state_18579[(13)]);
var inst_18463 = (state_18579[(16)]);
var inst_18465 = (inst_18463 < inst_18462);
var inst_18466 = inst_18465;
var state_18579__$1 = state_18579;
if(cljs.core.truth_(inst_18466)){
var statearr_18658_18720 = state_18579__$1;
(statearr_18658_18720[(1)] = (10));

} else {
var statearr_18659_18721 = state_18579__$1;
(statearr_18659_18721[(1)] = (11));

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
});})(c__10257__auto___18667,cs,m,dchan,dctr,done))
;
return ((function (switch__10192__auto__,c__10257__auto___18667,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10193__auto__ = null;
var cljs$core$async$mult_$_state_machine__10193__auto____0 = (function (){
var statearr_18663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18663[(0)] = cljs$core$async$mult_$_state_machine__10193__auto__);

(statearr_18663[(1)] = (1));

return statearr_18663;
});
var cljs$core$async$mult_$_state_machine__10193__auto____1 = (function (state_18579){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_18579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e18664){if((e18664 instanceof Object)){
var ex__10196__auto__ = e18664;
var statearr_18665_18722 = state_18579;
(statearr_18665_18722[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18723 = state_18579;
state_18579 = G__18723;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10193__auto__ = function(state_18579){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10193__auto____1.call(this,state_18579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10193__auto____0;
cljs$core$async$mult_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10193__auto____1;
return cljs$core$async$mult_$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___18667,cs,m,dchan,dctr,done))
})();
var state__10259__auto__ = (function (){var statearr_18666 = f__10258__auto__.call(null);
(statearr_18666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___18667);

return statearr_18666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___18667,cs,m,dchan,dctr,done))
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
var args18724 = [];
var len__6152__auto___18727 = arguments.length;
var i__6153__auto___18728 = (0);
while(true){
if((i__6153__auto___18728 < len__6152__auto___18727)){
args18724.push((arguments[i__6153__auto___18728]));

var G__18729 = (i__6153__auto___18728 + (1));
i__6153__auto___18728 = G__18729;
continue;
} else {
}
break;
}

var G__18726 = args18724.length;
switch (G__18726) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18724.length)].join('')));

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
var len__6152__auto___18741 = arguments.length;
var i__6153__auto___18742 = (0);
while(true){
if((i__6153__auto___18742 < len__6152__auto___18741)){
args__6159__auto__.push((arguments[i__6153__auto___18742]));

var G__18743 = (i__6153__auto___18742 + (1));
i__6153__auto___18742 = G__18743;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18735){
var map__18736 = p__18735;
var map__18736__$1 = ((((!((map__18736 == null)))?((((map__18736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18736):map__18736);
var opts = map__18736__$1;
var statearr_18738_18744 = state;
(statearr_18738_18744[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18736,map__18736__$1,opts){
return (function (val){
var statearr_18739_18745 = state;
(statearr_18739_18745[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18736,map__18736__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18740_18746 = state;
(statearr_18740_18746[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18731){
var G__18732 = cljs.core.first.call(null,seq18731);
var seq18731__$1 = cljs.core.next.call(null,seq18731);
var G__18733 = cljs.core.first.call(null,seq18731__$1);
var seq18731__$2 = cljs.core.next.call(null,seq18731__$1);
var G__18734 = cljs.core.first.call(null,seq18731__$2);
var seq18731__$3 = cljs.core.next.call(null,seq18731__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18732,G__18733,G__18734,seq18731__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18910 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18911){
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
this.meta18911 = meta18911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18912,meta18911__$1){
var self__ = this;
var _18912__$1 = this;
return (new cljs.core.async.t_cljs$core$async18910(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18911__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18912){
var self__ = this;
var _18912__$1 = this;
return self__.meta18911;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18910.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18911","meta18911",257436291,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18910";

cljs.core.async.t_cljs$core$async18910.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18910");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18910 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18910(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18911){
return (new cljs.core.async.t_cljs$core$async18910(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18911));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18910(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10257__auto___19073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19010){
var state_val_19011 = (state_19010[(1)]);
if((state_val_19011 === (7))){
var inst_18928 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19012_19074 = state_19010__$1;
(statearr_19012_19074[(2)] = inst_18928);

(statearr_19012_19074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (20))){
var inst_18940 = (state_19010[(7)]);
var state_19010__$1 = state_19010;
var statearr_19013_19075 = state_19010__$1;
(statearr_19013_19075[(2)] = inst_18940);

(statearr_19013_19075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (27))){
var state_19010__$1 = state_19010;
var statearr_19014_19076 = state_19010__$1;
(statearr_19014_19076[(2)] = null);

(statearr_19014_19076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (1))){
var inst_18916 = (state_19010[(8)]);
var inst_18916__$1 = calc_state.call(null);
var inst_18918 = (inst_18916__$1 == null);
var inst_18919 = cljs.core.not.call(null,inst_18918);
var state_19010__$1 = (function (){var statearr_19015 = state_19010;
(statearr_19015[(8)] = inst_18916__$1);

return statearr_19015;
})();
if(inst_18919){
var statearr_19016_19077 = state_19010__$1;
(statearr_19016_19077[(1)] = (2));

} else {
var statearr_19017_19078 = state_19010__$1;
(statearr_19017_19078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (24))){
var inst_18984 = (state_19010[(9)]);
var inst_18970 = (state_19010[(10)]);
var inst_18963 = (state_19010[(11)]);
var inst_18984__$1 = inst_18963.call(null,inst_18970);
var state_19010__$1 = (function (){var statearr_19018 = state_19010;
(statearr_19018[(9)] = inst_18984__$1);

return statearr_19018;
})();
if(cljs.core.truth_(inst_18984__$1)){
var statearr_19019_19079 = state_19010__$1;
(statearr_19019_19079[(1)] = (29));

} else {
var statearr_19020_19080 = state_19010__$1;
(statearr_19020_19080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (4))){
var inst_18931 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18931)){
var statearr_19021_19081 = state_19010__$1;
(statearr_19021_19081[(1)] = (8));

} else {
var statearr_19022_19082 = state_19010__$1;
(statearr_19022_19082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (15))){
var inst_18957 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18957)){
var statearr_19023_19083 = state_19010__$1;
(statearr_19023_19083[(1)] = (19));

} else {
var statearr_19024_19084 = state_19010__$1;
(statearr_19024_19084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (21))){
var inst_18962 = (state_19010[(12)]);
var inst_18962__$1 = (state_19010[(2)]);
var inst_18963 = cljs.core.get.call(null,inst_18962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18964 = cljs.core.get.call(null,inst_18962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18965 = cljs.core.get.call(null,inst_18962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19010__$1 = (function (){var statearr_19025 = state_19010;
(statearr_19025[(13)] = inst_18964);

(statearr_19025[(11)] = inst_18963);

(statearr_19025[(12)] = inst_18962__$1);

return statearr_19025;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19010__$1,(22),inst_18965);
} else {
if((state_val_19011 === (31))){
var inst_18992 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18992)){
var statearr_19026_19085 = state_19010__$1;
(statearr_19026_19085[(1)] = (32));

} else {
var statearr_19027_19086 = state_19010__$1;
(statearr_19027_19086[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (32))){
var inst_18969 = (state_19010[(14)]);
var state_19010__$1 = state_19010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19010__$1,(35),out,inst_18969);
} else {
if((state_val_19011 === (33))){
var inst_18962 = (state_19010[(12)]);
var inst_18940 = inst_18962;
var state_19010__$1 = (function (){var statearr_19028 = state_19010;
(statearr_19028[(7)] = inst_18940);

return statearr_19028;
})();
var statearr_19029_19087 = state_19010__$1;
(statearr_19029_19087[(2)] = null);

(statearr_19029_19087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (13))){
var inst_18940 = (state_19010[(7)]);
var inst_18947 = inst_18940.cljs$lang$protocol_mask$partition0$;
var inst_18948 = (inst_18947 & (64));
var inst_18949 = inst_18940.cljs$core$ISeq$;
var inst_18950 = (inst_18948) || (inst_18949);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18950)){
var statearr_19030_19088 = state_19010__$1;
(statearr_19030_19088[(1)] = (16));

} else {
var statearr_19031_19089 = state_19010__$1;
(statearr_19031_19089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (22))){
var inst_18969 = (state_19010[(14)]);
var inst_18970 = (state_19010[(10)]);
var inst_18968 = (state_19010[(2)]);
var inst_18969__$1 = cljs.core.nth.call(null,inst_18968,(0),null);
var inst_18970__$1 = cljs.core.nth.call(null,inst_18968,(1),null);
var inst_18971 = (inst_18969__$1 == null);
var inst_18972 = cljs.core._EQ_.call(null,inst_18970__$1,change);
var inst_18973 = (inst_18971) || (inst_18972);
var state_19010__$1 = (function (){var statearr_19032 = state_19010;
(statearr_19032[(14)] = inst_18969__$1);

(statearr_19032[(10)] = inst_18970__$1);

return statearr_19032;
})();
if(cljs.core.truth_(inst_18973)){
var statearr_19033_19090 = state_19010__$1;
(statearr_19033_19090[(1)] = (23));

} else {
var statearr_19034_19091 = state_19010__$1;
(statearr_19034_19091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (36))){
var inst_18962 = (state_19010[(12)]);
var inst_18940 = inst_18962;
var state_19010__$1 = (function (){var statearr_19035 = state_19010;
(statearr_19035[(7)] = inst_18940);

return statearr_19035;
})();
var statearr_19036_19092 = state_19010__$1;
(statearr_19036_19092[(2)] = null);

(statearr_19036_19092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (29))){
var inst_18984 = (state_19010[(9)]);
var state_19010__$1 = state_19010;
var statearr_19037_19093 = state_19010__$1;
(statearr_19037_19093[(2)] = inst_18984);

(statearr_19037_19093[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (6))){
var state_19010__$1 = state_19010;
var statearr_19038_19094 = state_19010__$1;
(statearr_19038_19094[(2)] = false);

(statearr_19038_19094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (28))){
var inst_18980 = (state_19010[(2)]);
var inst_18981 = calc_state.call(null);
var inst_18940 = inst_18981;
var state_19010__$1 = (function (){var statearr_19039 = state_19010;
(statearr_19039[(7)] = inst_18940);

(statearr_19039[(15)] = inst_18980);

return statearr_19039;
})();
var statearr_19040_19095 = state_19010__$1;
(statearr_19040_19095[(2)] = null);

(statearr_19040_19095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (25))){
var inst_19006 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19041_19096 = state_19010__$1;
(statearr_19041_19096[(2)] = inst_19006);

(statearr_19041_19096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (34))){
var inst_19004 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19042_19097 = state_19010__$1;
(statearr_19042_19097[(2)] = inst_19004);

(statearr_19042_19097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (17))){
var state_19010__$1 = state_19010;
var statearr_19043_19098 = state_19010__$1;
(statearr_19043_19098[(2)] = false);

(statearr_19043_19098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (3))){
var state_19010__$1 = state_19010;
var statearr_19044_19099 = state_19010__$1;
(statearr_19044_19099[(2)] = false);

(statearr_19044_19099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (12))){
var inst_19008 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19010__$1,inst_19008);
} else {
if((state_val_19011 === (2))){
var inst_18916 = (state_19010[(8)]);
var inst_18921 = inst_18916.cljs$lang$protocol_mask$partition0$;
var inst_18922 = (inst_18921 & (64));
var inst_18923 = inst_18916.cljs$core$ISeq$;
var inst_18924 = (inst_18922) || (inst_18923);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18924)){
var statearr_19045_19100 = state_19010__$1;
(statearr_19045_19100[(1)] = (5));

} else {
var statearr_19046_19101 = state_19010__$1;
(statearr_19046_19101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (23))){
var inst_18969 = (state_19010[(14)]);
var inst_18975 = (inst_18969 == null);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18975)){
var statearr_19047_19102 = state_19010__$1;
(statearr_19047_19102[(1)] = (26));

} else {
var statearr_19048_19103 = state_19010__$1;
(statearr_19048_19103[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (35))){
var inst_18995 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
if(cljs.core.truth_(inst_18995)){
var statearr_19049_19104 = state_19010__$1;
(statearr_19049_19104[(1)] = (36));

} else {
var statearr_19050_19105 = state_19010__$1;
(statearr_19050_19105[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (19))){
var inst_18940 = (state_19010[(7)]);
var inst_18959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18940);
var state_19010__$1 = state_19010;
var statearr_19051_19106 = state_19010__$1;
(statearr_19051_19106[(2)] = inst_18959);

(statearr_19051_19106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (11))){
var inst_18940 = (state_19010[(7)]);
var inst_18944 = (inst_18940 == null);
var inst_18945 = cljs.core.not.call(null,inst_18944);
var state_19010__$1 = state_19010;
if(inst_18945){
var statearr_19052_19107 = state_19010__$1;
(statearr_19052_19107[(1)] = (13));

} else {
var statearr_19053_19108 = state_19010__$1;
(statearr_19053_19108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (9))){
var inst_18916 = (state_19010[(8)]);
var state_19010__$1 = state_19010;
var statearr_19054_19109 = state_19010__$1;
(statearr_19054_19109[(2)] = inst_18916);

(statearr_19054_19109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (5))){
var state_19010__$1 = state_19010;
var statearr_19055_19110 = state_19010__$1;
(statearr_19055_19110[(2)] = true);

(statearr_19055_19110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (14))){
var state_19010__$1 = state_19010;
var statearr_19056_19111 = state_19010__$1;
(statearr_19056_19111[(2)] = false);

(statearr_19056_19111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (26))){
var inst_18970 = (state_19010[(10)]);
var inst_18977 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18970);
var state_19010__$1 = state_19010;
var statearr_19057_19112 = state_19010__$1;
(statearr_19057_19112[(2)] = inst_18977);

(statearr_19057_19112[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (16))){
var state_19010__$1 = state_19010;
var statearr_19058_19113 = state_19010__$1;
(statearr_19058_19113[(2)] = true);

(statearr_19058_19113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (38))){
var inst_19000 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19059_19114 = state_19010__$1;
(statearr_19059_19114[(2)] = inst_19000);

(statearr_19059_19114[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (30))){
var inst_18964 = (state_19010[(13)]);
var inst_18970 = (state_19010[(10)]);
var inst_18963 = (state_19010[(11)]);
var inst_18987 = cljs.core.empty_QMARK_.call(null,inst_18963);
var inst_18988 = inst_18964.call(null,inst_18970);
var inst_18989 = cljs.core.not.call(null,inst_18988);
var inst_18990 = (inst_18987) && (inst_18989);
var state_19010__$1 = state_19010;
var statearr_19060_19115 = state_19010__$1;
(statearr_19060_19115[(2)] = inst_18990);

(statearr_19060_19115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (10))){
var inst_18916 = (state_19010[(8)]);
var inst_18936 = (state_19010[(2)]);
var inst_18937 = cljs.core.get.call(null,inst_18936,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18938 = cljs.core.get.call(null,inst_18936,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18939 = cljs.core.get.call(null,inst_18936,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18940 = inst_18916;
var state_19010__$1 = (function (){var statearr_19061 = state_19010;
(statearr_19061[(16)] = inst_18939);

(statearr_19061[(7)] = inst_18940);

(statearr_19061[(17)] = inst_18937);

(statearr_19061[(18)] = inst_18938);

return statearr_19061;
})();
var statearr_19062_19116 = state_19010__$1;
(statearr_19062_19116[(2)] = null);

(statearr_19062_19116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (18))){
var inst_18954 = (state_19010[(2)]);
var state_19010__$1 = state_19010;
var statearr_19063_19117 = state_19010__$1;
(statearr_19063_19117[(2)] = inst_18954);

(statearr_19063_19117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (37))){
var state_19010__$1 = state_19010;
var statearr_19064_19118 = state_19010__$1;
(statearr_19064_19118[(2)] = null);

(statearr_19064_19118[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19011 === (8))){
var inst_18916 = (state_19010[(8)]);
var inst_18933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18916);
var state_19010__$1 = state_19010;
var statearr_19065_19119 = state_19010__$1;
(statearr_19065_19119[(2)] = inst_18933);

(statearr_19065_19119[(1)] = (10));


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
});})(c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10192__auto__,c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10193__auto__ = null;
var cljs$core$async$mix_$_state_machine__10193__auto____0 = (function (){
var statearr_19069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = cljs$core$async$mix_$_state_machine__10193__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var cljs$core$async$mix_$_state_machine__10193__auto____1 = (function (state_19010){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19070){if((e19070 instanceof Object)){
var ex__10196__auto__ = e19070;
var statearr_19071_19120 = state_19010;
(statearr_19071_19120[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19121 = state_19010;
state_19010 = G__19121;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10193__auto__ = function(state_19010){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10193__auto____1.call(this,state_19010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10193__auto____0;
cljs$core$async$mix_$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10193__auto____1;
return cljs$core$async$mix_$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10259__auto__ = (function (){var statearr_19072 = f__10258__auto__.call(null);
(statearr_19072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19073);

return statearr_19072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19073,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19122 = [];
var len__6152__auto___19125 = arguments.length;
var i__6153__auto___19126 = (0);
while(true){
if((i__6153__auto___19126 < len__6152__auto___19125)){
args19122.push((arguments[i__6153__auto___19126]));

var G__19127 = (i__6153__auto___19126 + (1));
i__6153__auto___19126 = G__19127;
continue;
} else {
}
break;
}

var G__19124 = args19122.length;
switch (G__19124) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19122.length)].join('')));

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
var args19130 = [];
var len__6152__auto___19255 = arguments.length;
var i__6153__auto___19256 = (0);
while(true){
if((i__6153__auto___19256 < len__6152__auto___19255)){
args19130.push((arguments[i__6153__auto___19256]));

var G__19257 = (i__6153__auto___19256 + (1));
i__6153__auto___19256 = G__19257;
continue;
} else {
}
break;
}

var G__19132 = args19130.length;
switch (G__19132) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19130.length)].join('')));

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
return (function (p1__19129_SHARP_){
if(cljs.core.truth_(p1__19129_SHARP_.call(null,topic))){
return p1__19129_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19129_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19133 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19134){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19134 = meta19134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19135,meta19134__$1){
var self__ = this;
var _19135__$1 = this;
return (new cljs.core.async.t_cljs$core$async19133(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19134__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19135){
var self__ = this;
var _19135__$1 = this;
return self__.meta19134;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19134","meta19134",-1653356350,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19133";

cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19133");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19133 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19134){
return (new cljs.core.async.t_cljs$core$async19133(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19134));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19133(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10257__auto___19259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19259,mults,ensure_mult,p){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19259,mults,ensure_mult,p){
return (function (state_19207){
var state_val_19208 = (state_19207[(1)]);
if((state_val_19208 === (7))){
var inst_19203 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19209_19260 = state_19207__$1;
(statearr_19209_19260[(2)] = inst_19203);

(statearr_19209_19260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (20))){
var state_19207__$1 = state_19207;
var statearr_19210_19261 = state_19207__$1;
(statearr_19210_19261[(2)] = null);

(statearr_19210_19261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (1))){
var state_19207__$1 = state_19207;
var statearr_19211_19262 = state_19207__$1;
(statearr_19211_19262[(2)] = null);

(statearr_19211_19262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (24))){
var inst_19186 = (state_19207[(7)]);
var inst_19195 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19186);
var state_19207__$1 = state_19207;
var statearr_19212_19263 = state_19207__$1;
(statearr_19212_19263[(2)] = inst_19195);

(statearr_19212_19263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (4))){
var inst_19138 = (state_19207[(8)]);
var inst_19138__$1 = (state_19207[(2)]);
var inst_19139 = (inst_19138__$1 == null);
var state_19207__$1 = (function (){var statearr_19213 = state_19207;
(statearr_19213[(8)] = inst_19138__$1);

return statearr_19213;
})();
if(cljs.core.truth_(inst_19139)){
var statearr_19214_19264 = state_19207__$1;
(statearr_19214_19264[(1)] = (5));

} else {
var statearr_19215_19265 = state_19207__$1;
(statearr_19215_19265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (15))){
var inst_19180 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19216_19266 = state_19207__$1;
(statearr_19216_19266[(2)] = inst_19180);

(statearr_19216_19266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (21))){
var inst_19200 = (state_19207[(2)]);
var state_19207__$1 = (function (){var statearr_19217 = state_19207;
(statearr_19217[(9)] = inst_19200);

return statearr_19217;
})();
var statearr_19218_19267 = state_19207__$1;
(statearr_19218_19267[(2)] = null);

(statearr_19218_19267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (13))){
var inst_19162 = (state_19207[(10)]);
var inst_19164 = cljs.core.chunked_seq_QMARK_.call(null,inst_19162);
var state_19207__$1 = state_19207;
if(inst_19164){
var statearr_19219_19268 = state_19207__$1;
(statearr_19219_19268[(1)] = (16));

} else {
var statearr_19220_19269 = state_19207__$1;
(statearr_19220_19269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (22))){
var inst_19192 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
if(cljs.core.truth_(inst_19192)){
var statearr_19221_19270 = state_19207__$1;
(statearr_19221_19270[(1)] = (23));

} else {
var statearr_19222_19271 = state_19207__$1;
(statearr_19222_19271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (6))){
var inst_19186 = (state_19207[(7)]);
var inst_19138 = (state_19207[(8)]);
var inst_19188 = (state_19207[(11)]);
var inst_19186__$1 = topic_fn.call(null,inst_19138);
var inst_19187 = cljs.core.deref.call(null,mults);
var inst_19188__$1 = cljs.core.get.call(null,inst_19187,inst_19186__$1);
var state_19207__$1 = (function (){var statearr_19223 = state_19207;
(statearr_19223[(7)] = inst_19186__$1);

(statearr_19223[(11)] = inst_19188__$1);

return statearr_19223;
})();
if(cljs.core.truth_(inst_19188__$1)){
var statearr_19224_19272 = state_19207__$1;
(statearr_19224_19272[(1)] = (19));

} else {
var statearr_19225_19273 = state_19207__$1;
(statearr_19225_19273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (25))){
var inst_19197 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19226_19274 = state_19207__$1;
(statearr_19226_19274[(2)] = inst_19197);

(statearr_19226_19274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (17))){
var inst_19162 = (state_19207[(10)]);
var inst_19171 = cljs.core.first.call(null,inst_19162);
var inst_19172 = cljs.core.async.muxch_STAR_.call(null,inst_19171);
var inst_19173 = cljs.core.async.close_BANG_.call(null,inst_19172);
var inst_19174 = cljs.core.next.call(null,inst_19162);
var inst_19148 = inst_19174;
var inst_19149 = null;
var inst_19150 = (0);
var inst_19151 = (0);
var state_19207__$1 = (function (){var statearr_19227 = state_19207;
(statearr_19227[(12)] = inst_19150);

(statearr_19227[(13)] = inst_19148);

(statearr_19227[(14)] = inst_19173);

(statearr_19227[(15)] = inst_19149);

(statearr_19227[(16)] = inst_19151);

return statearr_19227;
})();
var statearr_19228_19275 = state_19207__$1;
(statearr_19228_19275[(2)] = null);

(statearr_19228_19275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (3))){
var inst_19205 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19207__$1,inst_19205);
} else {
if((state_val_19208 === (12))){
var inst_19182 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19229_19276 = state_19207__$1;
(statearr_19229_19276[(2)] = inst_19182);

(statearr_19229_19276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (2))){
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19207__$1,(4),ch);
} else {
if((state_val_19208 === (23))){
var state_19207__$1 = state_19207;
var statearr_19230_19277 = state_19207__$1;
(statearr_19230_19277[(2)] = null);

(statearr_19230_19277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (19))){
var inst_19138 = (state_19207[(8)]);
var inst_19188 = (state_19207[(11)]);
var inst_19190 = cljs.core.async.muxch_STAR_.call(null,inst_19188);
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19207__$1,(22),inst_19190,inst_19138);
} else {
if((state_val_19208 === (11))){
var inst_19162 = (state_19207[(10)]);
var inst_19148 = (state_19207[(13)]);
var inst_19162__$1 = cljs.core.seq.call(null,inst_19148);
var state_19207__$1 = (function (){var statearr_19231 = state_19207;
(statearr_19231[(10)] = inst_19162__$1);

return statearr_19231;
})();
if(inst_19162__$1){
var statearr_19232_19278 = state_19207__$1;
(statearr_19232_19278[(1)] = (13));

} else {
var statearr_19233_19279 = state_19207__$1;
(statearr_19233_19279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (9))){
var inst_19184 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19234_19280 = state_19207__$1;
(statearr_19234_19280[(2)] = inst_19184);

(statearr_19234_19280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (5))){
var inst_19145 = cljs.core.deref.call(null,mults);
var inst_19146 = cljs.core.vals.call(null,inst_19145);
var inst_19147 = cljs.core.seq.call(null,inst_19146);
var inst_19148 = inst_19147;
var inst_19149 = null;
var inst_19150 = (0);
var inst_19151 = (0);
var state_19207__$1 = (function (){var statearr_19235 = state_19207;
(statearr_19235[(12)] = inst_19150);

(statearr_19235[(13)] = inst_19148);

(statearr_19235[(15)] = inst_19149);

(statearr_19235[(16)] = inst_19151);

return statearr_19235;
})();
var statearr_19236_19281 = state_19207__$1;
(statearr_19236_19281[(2)] = null);

(statearr_19236_19281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (14))){
var state_19207__$1 = state_19207;
var statearr_19240_19282 = state_19207__$1;
(statearr_19240_19282[(2)] = null);

(statearr_19240_19282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (16))){
var inst_19162 = (state_19207[(10)]);
var inst_19166 = cljs.core.chunk_first.call(null,inst_19162);
var inst_19167 = cljs.core.chunk_rest.call(null,inst_19162);
var inst_19168 = cljs.core.count.call(null,inst_19166);
var inst_19148 = inst_19167;
var inst_19149 = inst_19166;
var inst_19150 = inst_19168;
var inst_19151 = (0);
var state_19207__$1 = (function (){var statearr_19241 = state_19207;
(statearr_19241[(12)] = inst_19150);

(statearr_19241[(13)] = inst_19148);

(statearr_19241[(15)] = inst_19149);

(statearr_19241[(16)] = inst_19151);

return statearr_19241;
})();
var statearr_19242_19283 = state_19207__$1;
(statearr_19242_19283[(2)] = null);

(statearr_19242_19283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (10))){
var inst_19150 = (state_19207[(12)]);
var inst_19148 = (state_19207[(13)]);
var inst_19149 = (state_19207[(15)]);
var inst_19151 = (state_19207[(16)]);
var inst_19156 = cljs.core._nth.call(null,inst_19149,inst_19151);
var inst_19157 = cljs.core.async.muxch_STAR_.call(null,inst_19156);
var inst_19158 = cljs.core.async.close_BANG_.call(null,inst_19157);
var inst_19159 = (inst_19151 + (1));
var tmp19237 = inst_19150;
var tmp19238 = inst_19148;
var tmp19239 = inst_19149;
var inst_19148__$1 = tmp19238;
var inst_19149__$1 = tmp19239;
var inst_19150__$1 = tmp19237;
var inst_19151__$1 = inst_19159;
var state_19207__$1 = (function (){var statearr_19243 = state_19207;
(statearr_19243[(12)] = inst_19150__$1);

(statearr_19243[(13)] = inst_19148__$1);

(statearr_19243[(15)] = inst_19149__$1);

(statearr_19243[(17)] = inst_19158);

(statearr_19243[(16)] = inst_19151__$1);

return statearr_19243;
})();
var statearr_19244_19284 = state_19207__$1;
(statearr_19244_19284[(2)] = null);

(statearr_19244_19284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (18))){
var inst_19177 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19245_19285 = state_19207__$1;
(statearr_19245_19285[(2)] = inst_19177);

(statearr_19245_19285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (8))){
var inst_19150 = (state_19207[(12)]);
var inst_19151 = (state_19207[(16)]);
var inst_19153 = (inst_19151 < inst_19150);
var inst_19154 = inst_19153;
var state_19207__$1 = state_19207;
if(cljs.core.truth_(inst_19154)){
var statearr_19246_19286 = state_19207__$1;
(statearr_19246_19286[(1)] = (10));

} else {
var statearr_19247_19287 = state_19207__$1;
(statearr_19247_19287[(1)] = (11));

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
});})(c__10257__auto___19259,mults,ensure_mult,p))
;
return ((function (switch__10192__auto__,c__10257__auto___19259,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19251[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19251[(1)] = (1));

return statearr_19251;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19207){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19252){if((e19252 instanceof Object)){
var ex__10196__auto__ = e19252;
var statearr_19253_19288 = state_19207;
(statearr_19253_19288[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19289 = state_19207;
state_19207 = G__19289;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19259,mults,ensure_mult,p))
})();
var state__10259__auto__ = (function (){var statearr_19254 = f__10258__auto__.call(null);
(statearr_19254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19259);

return statearr_19254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19259,mults,ensure_mult,p))
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
var args19290 = [];
var len__6152__auto___19293 = arguments.length;
var i__6153__auto___19294 = (0);
while(true){
if((i__6153__auto___19294 < len__6152__auto___19293)){
args19290.push((arguments[i__6153__auto___19294]));

var G__19295 = (i__6153__auto___19294 + (1));
i__6153__auto___19294 = G__19295;
continue;
} else {
}
break;
}

var G__19292 = args19290.length;
switch (G__19292) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19290.length)].join('')));

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
var args19297 = [];
var len__6152__auto___19300 = arguments.length;
var i__6153__auto___19301 = (0);
while(true){
if((i__6153__auto___19301 < len__6152__auto___19300)){
args19297.push((arguments[i__6153__auto___19301]));

var G__19302 = (i__6153__auto___19301 + (1));
i__6153__auto___19301 = G__19302;
continue;
} else {
}
break;
}

var G__19299 = args19297.length;
switch (G__19299) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19297.length)].join('')));

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
var args19304 = [];
var len__6152__auto___19375 = arguments.length;
var i__6153__auto___19376 = (0);
while(true){
if((i__6153__auto___19376 < len__6152__auto___19375)){
args19304.push((arguments[i__6153__auto___19376]));

var G__19377 = (i__6153__auto___19376 + (1));
i__6153__auto___19376 = G__19377;
continue;
} else {
}
break;
}

var G__19306 = args19304.length;
switch (G__19306) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19304.length)].join('')));

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
var c__10257__auto___19379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19345){
var state_val_19346 = (state_19345[(1)]);
if((state_val_19346 === (7))){
var state_19345__$1 = state_19345;
var statearr_19347_19380 = state_19345__$1;
(statearr_19347_19380[(2)] = null);

(statearr_19347_19380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (1))){
var state_19345__$1 = state_19345;
var statearr_19348_19381 = state_19345__$1;
(statearr_19348_19381[(2)] = null);

(statearr_19348_19381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (4))){
var inst_19309 = (state_19345[(7)]);
var inst_19311 = (inst_19309 < cnt);
var state_19345__$1 = state_19345;
if(cljs.core.truth_(inst_19311)){
var statearr_19349_19382 = state_19345__$1;
(statearr_19349_19382[(1)] = (6));

} else {
var statearr_19350_19383 = state_19345__$1;
(statearr_19350_19383[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (15))){
var inst_19341 = (state_19345[(2)]);
var state_19345__$1 = state_19345;
var statearr_19351_19384 = state_19345__$1;
(statearr_19351_19384[(2)] = inst_19341);

(statearr_19351_19384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (13))){
var inst_19334 = cljs.core.async.close_BANG_.call(null,out);
var state_19345__$1 = state_19345;
var statearr_19352_19385 = state_19345__$1;
(statearr_19352_19385[(2)] = inst_19334);

(statearr_19352_19385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (6))){
var state_19345__$1 = state_19345;
var statearr_19353_19386 = state_19345__$1;
(statearr_19353_19386[(2)] = null);

(statearr_19353_19386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (3))){
var inst_19343 = (state_19345[(2)]);
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19345__$1,inst_19343);
} else {
if((state_val_19346 === (12))){
var inst_19331 = (state_19345[(8)]);
var inst_19331__$1 = (state_19345[(2)]);
var inst_19332 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19331__$1);
var state_19345__$1 = (function (){var statearr_19354 = state_19345;
(statearr_19354[(8)] = inst_19331__$1);

return statearr_19354;
})();
if(cljs.core.truth_(inst_19332)){
var statearr_19355_19387 = state_19345__$1;
(statearr_19355_19387[(1)] = (13));

} else {
var statearr_19356_19388 = state_19345__$1;
(statearr_19356_19388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (2))){
var inst_19308 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19309 = (0);
var state_19345__$1 = (function (){var statearr_19357 = state_19345;
(statearr_19357[(9)] = inst_19308);

(statearr_19357[(7)] = inst_19309);

return statearr_19357;
})();
var statearr_19358_19389 = state_19345__$1;
(statearr_19358_19389[(2)] = null);

(statearr_19358_19389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (11))){
var inst_19309 = (state_19345[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19345,(10),Object,null,(9));
var inst_19318 = chs__$1.call(null,inst_19309);
var inst_19319 = done.call(null,inst_19309);
var inst_19320 = cljs.core.async.take_BANG_.call(null,inst_19318,inst_19319);
var state_19345__$1 = state_19345;
var statearr_19359_19390 = state_19345__$1;
(statearr_19359_19390[(2)] = inst_19320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (9))){
var inst_19309 = (state_19345[(7)]);
var inst_19322 = (state_19345[(2)]);
var inst_19323 = (inst_19309 + (1));
var inst_19309__$1 = inst_19323;
var state_19345__$1 = (function (){var statearr_19360 = state_19345;
(statearr_19360[(10)] = inst_19322);

(statearr_19360[(7)] = inst_19309__$1);

return statearr_19360;
})();
var statearr_19361_19391 = state_19345__$1;
(statearr_19361_19391[(2)] = null);

(statearr_19361_19391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (5))){
var inst_19329 = (state_19345[(2)]);
var state_19345__$1 = (function (){var statearr_19362 = state_19345;
(statearr_19362[(11)] = inst_19329);

return statearr_19362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19345__$1,(12),dchan);
} else {
if((state_val_19346 === (14))){
var inst_19331 = (state_19345[(8)]);
var inst_19336 = cljs.core.apply.call(null,f,inst_19331);
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19345__$1,(16),out,inst_19336);
} else {
if((state_val_19346 === (16))){
var inst_19338 = (state_19345[(2)]);
var state_19345__$1 = (function (){var statearr_19363 = state_19345;
(statearr_19363[(12)] = inst_19338);

return statearr_19363;
})();
var statearr_19364_19392 = state_19345__$1;
(statearr_19364_19392[(2)] = null);

(statearr_19364_19392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (10))){
var inst_19313 = (state_19345[(2)]);
var inst_19314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19345__$1 = (function (){var statearr_19365 = state_19345;
(statearr_19365[(13)] = inst_19313);

return statearr_19365;
})();
var statearr_19366_19393 = state_19345__$1;
(statearr_19366_19393[(2)] = inst_19314);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (8))){
var inst_19327 = (state_19345[(2)]);
var state_19345__$1 = state_19345;
var statearr_19367_19394 = state_19345__$1;
(statearr_19367_19394[(2)] = inst_19327);

(statearr_19367_19394[(1)] = (5));


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
});})(c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10192__auto__,c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19371[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19371[(1)] = (1));

return statearr_19371;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19345){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19372){if((e19372 instanceof Object)){
var ex__10196__auto__ = e19372;
var statearr_19373_19395 = state_19345;
(statearr_19373_19395[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19396 = state_19345;
state_19345 = G__19396;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10259__auto__ = (function (){var statearr_19374 = f__10258__auto__.call(null);
(statearr_19374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19379);

return statearr_19374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19379,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19398 = [];
var len__6152__auto___19454 = arguments.length;
var i__6153__auto___19455 = (0);
while(true){
if((i__6153__auto___19455 < len__6152__auto___19454)){
args19398.push((arguments[i__6153__auto___19455]));

var G__19456 = (i__6153__auto___19455 + (1));
i__6153__auto___19455 = G__19456;
continue;
} else {
}
break;
}

var G__19400 = args19398.length;
switch (G__19400) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19398.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___19458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19458,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19458,out){
return (function (state_19430){
var state_val_19431 = (state_19430[(1)]);
if((state_val_19431 === (7))){
var inst_19409 = (state_19430[(7)]);
var inst_19410 = (state_19430[(8)]);
var inst_19409__$1 = (state_19430[(2)]);
var inst_19410__$1 = cljs.core.nth.call(null,inst_19409__$1,(0),null);
var inst_19411 = cljs.core.nth.call(null,inst_19409__$1,(1),null);
var inst_19412 = (inst_19410__$1 == null);
var state_19430__$1 = (function (){var statearr_19432 = state_19430;
(statearr_19432[(7)] = inst_19409__$1);

(statearr_19432[(8)] = inst_19410__$1);

(statearr_19432[(9)] = inst_19411);

return statearr_19432;
})();
if(cljs.core.truth_(inst_19412)){
var statearr_19433_19459 = state_19430__$1;
(statearr_19433_19459[(1)] = (8));

} else {
var statearr_19434_19460 = state_19430__$1;
(statearr_19434_19460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (1))){
var inst_19401 = cljs.core.vec.call(null,chs);
var inst_19402 = inst_19401;
var state_19430__$1 = (function (){var statearr_19435 = state_19430;
(statearr_19435[(10)] = inst_19402);

return statearr_19435;
})();
var statearr_19436_19461 = state_19430__$1;
(statearr_19436_19461[(2)] = null);

(statearr_19436_19461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (4))){
var inst_19402 = (state_19430[(10)]);
var state_19430__$1 = state_19430;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19430__$1,(7),inst_19402);
} else {
if((state_val_19431 === (6))){
var inst_19426 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19437_19462 = state_19430__$1;
(statearr_19437_19462[(2)] = inst_19426);

(statearr_19437_19462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (3))){
var inst_19428 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19430__$1,inst_19428);
} else {
if((state_val_19431 === (2))){
var inst_19402 = (state_19430[(10)]);
var inst_19404 = cljs.core.count.call(null,inst_19402);
var inst_19405 = (inst_19404 > (0));
var state_19430__$1 = state_19430;
if(cljs.core.truth_(inst_19405)){
var statearr_19439_19463 = state_19430__$1;
(statearr_19439_19463[(1)] = (4));

} else {
var statearr_19440_19464 = state_19430__$1;
(statearr_19440_19464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (11))){
var inst_19402 = (state_19430[(10)]);
var inst_19419 = (state_19430[(2)]);
var tmp19438 = inst_19402;
var inst_19402__$1 = tmp19438;
var state_19430__$1 = (function (){var statearr_19441 = state_19430;
(statearr_19441[(11)] = inst_19419);

(statearr_19441[(10)] = inst_19402__$1);

return statearr_19441;
})();
var statearr_19442_19465 = state_19430__$1;
(statearr_19442_19465[(2)] = null);

(statearr_19442_19465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (9))){
var inst_19410 = (state_19430[(8)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19430__$1,(11),out,inst_19410);
} else {
if((state_val_19431 === (5))){
var inst_19424 = cljs.core.async.close_BANG_.call(null,out);
var state_19430__$1 = state_19430;
var statearr_19443_19466 = state_19430__$1;
(statearr_19443_19466[(2)] = inst_19424);

(statearr_19443_19466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (10))){
var inst_19422 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19444_19467 = state_19430__$1;
(statearr_19444_19467[(2)] = inst_19422);

(statearr_19444_19467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19431 === (8))){
var inst_19409 = (state_19430[(7)]);
var inst_19410 = (state_19430[(8)]);
var inst_19402 = (state_19430[(10)]);
var inst_19411 = (state_19430[(9)]);
var inst_19414 = (function (){var cs = inst_19402;
var vec__19407 = inst_19409;
var v = inst_19410;
var c = inst_19411;
return ((function (cs,vec__19407,v,c,inst_19409,inst_19410,inst_19402,inst_19411,state_val_19431,c__10257__auto___19458,out){
return (function (p1__19397_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19397_SHARP_);
});
;})(cs,vec__19407,v,c,inst_19409,inst_19410,inst_19402,inst_19411,state_val_19431,c__10257__auto___19458,out))
})();
var inst_19415 = cljs.core.filterv.call(null,inst_19414,inst_19402);
var inst_19402__$1 = inst_19415;
var state_19430__$1 = (function (){var statearr_19445 = state_19430;
(statearr_19445[(10)] = inst_19402__$1);

return statearr_19445;
})();
var statearr_19446_19468 = state_19430__$1;
(statearr_19446_19468[(2)] = null);

(statearr_19446_19468[(1)] = (2));


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
});})(c__10257__auto___19458,out))
;
return ((function (switch__10192__auto__,c__10257__auto___19458,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19450[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19450[(1)] = (1));

return statearr_19450;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19430){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19451){if((e19451 instanceof Object)){
var ex__10196__auto__ = e19451;
var statearr_19452_19469 = state_19430;
(statearr_19452_19469[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19470 = state_19430;
state_19430 = G__19470;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19458,out))
})();
var state__10259__auto__ = (function (){var statearr_19453 = f__10258__auto__.call(null);
(statearr_19453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19458);

return statearr_19453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19458,out))
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
var args19471 = [];
var len__6152__auto___19520 = arguments.length;
var i__6153__auto___19521 = (0);
while(true){
if((i__6153__auto___19521 < len__6152__auto___19520)){
args19471.push((arguments[i__6153__auto___19521]));

var G__19522 = (i__6153__auto___19521 + (1));
i__6153__auto___19521 = G__19522;
continue;
} else {
}
break;
}

var G__19473 = args19471.length;
switch (G__19473) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19471.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___19524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19524,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19524,out){
return (function (state_19497){
var state_val_19498 = (state_19497[(1)]);
if((state_val_19498 === (7))){
var inst_19479 = (state_19497[(7)]);
var inst_19479__$1 = (state_19497[(2)]);
var inst_19480 = (inst_19479__$1 == null);
var inst_19481 = cljs.core.not.call(null,inst_19480);
var state_19497__$1 = (function (){var statearr_19499 = state_19497;
(statearr_19499[(7)] = inst_19479__$1);

return statearr_19499;
})();
if(inst_19481){
var statearr_19500_19525 = state_19497__$1;
(statearr_19500_19525[(1)] = (8));

} else {
var statearr_19501_19526 = state_19497__$1;
(statearr_19501_19526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (1))){
var inst_19474 = (0);
var state_19497__$1 = (function (){var statearr_19502 = state_19497;
(statearr_19502[(8)] = inst_19474);

return statearr_19502;
})();
var statearr_19503_19527 = state_19497__$1;
(statearr_19503_19527[(2)] = null);

(statearr_19503_19527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (4))){
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19497__$1,(7),ch);
} else {
if((state_val_19498 === (6))){
var inst_19492 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19504_19528 = state_19497__$1;
(statearr_19504_19528[(2)] = inst_19492);

(statearr_19504_19528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (3))){
var inst_19494 = (state_19497[(2)]);
var inst_19495 = cljs.core.async.close_BANG_.call(null,out);
var state_19497__$1 = (function (){var statearr_19505 = state_19497;
(statearr_19505[(9)] = inst_19494);

return statearr_19505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19497__$1,inst_19495);
} else {
if((state_val_19498 === (2))){
var inst_19474 = (state_19497[(8)]);
var inst_19476 = (inst_19474 < n);
var state_19497__$1 = state_19497;
if(cljs.core.truth_(inst_19476)){
var statearr_19506_19529 = state_19497__$1;
(statearr_19506_19529[(1)] = (4));

} else {
var statearr_19507_19530 = state_19497__$1;
(statearr_19507_19530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (11))){
var inst_19474 = (state_19497[(8)]);
var inst_19484 = (state_19497[(2)]);
var inst_19485 = (inst_19474 + (1));
var inst_19474__$1 = inst_19485;
var state_19497__$1 = (function (){var statearr_19508 = state_19497;
(statearr_19508[(8)] = inst_19474__$1);

(statearr_19508[(10)] = inst_19484);

return statearr_19508;
})();
var statearr_19509_19531 = state_19497__$1;
(statearr_19509_19531[(2)] = null);

(statearr_19509_19531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (9))){
var state_19497__$1 = state_19497;
var statearr_19510_19532 = state_19497__$1;
(statearr_19510_19532[(2)] = null);

(statearr_19510_19532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (5))){
var state_19497__$1 = state_19497;
var statearr_19511_19533 = state_19497__$1;
(statearr_19511_19533[(2)] = null);

(statearr_19511_19533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (10))){
var inst_19489 = (state_19497[(2)]);
var state_19497__$1 = state_19497;
var statearr_19512_19534 = state_19497__$1;
(statearr_19512_19534[(2)] = inst_19489);

(statearr_19512_19534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19498 === (8))){
var inst_19479 = (state_19497[(7)]);
var state_19497__$1 = state_19497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19497__$1,(11),out,inst_19479);
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
});})(c__10257__auto___19524,out))
;
return ((function (switch__10192__auto__,c__10257__auto___19524,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19516[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19516[(1)] = (1));

return statearr_19516;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19497){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19517){if((e19517 instanceof Object)){
var ex__10196__auto__ = e19517;
var statearr_19518_19535 = state_19497;
(statearr_19518_19535[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19536 = state_19497;
state_19497 = G__19536;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19524,out))
})();
var state__10259__auto__ = (function (){var statearr_19519 = f__10258__auto__.call(null);
(statearr_19519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19524);

return statearr_19519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19524,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19544 = (function (map_LT_,f,ch,meta19545){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19545 = meta19545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19546,meta19545__$1){
var self__ = this;
var _19546__$1 = this;
return (new cljs.core.async.t_cljs$core$async19544(self__.map_LT_,self__.f,self__.ch,meta19545__$1));
});

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19546){
var self__ = this;
var _19546__$1 = this;
return self__.meta19545;
});

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19547 = (function (map_LT_,f,ch,meta19545,_,fn1,meta19548){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19545 = meta19545;
this._ = _;
this.fn1 = fn1;
this.meta19548 = meta19548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19549,meta19548__$1){
var self__ = this;
var _19549__$1 = this;
return (new cljs.core.async.t_cljs$core$async19547(self__.map_LT_,self__.f,self__.ch,self__.meta19545,self__._,self__.fn1,meta19548__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19549){
var self__ = this;
var _19549__$1 = this;
return self__.meta19548;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19537_SHARP_){
return f1.call(null,(((p1__19537_SHARP_ == null))?null:self__.f.call(null,p1__19537_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19547.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19545","meta19545",1569883502,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19544","cljs.core.async/t_cljs$core$async19544",-1022406095,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19548","meta19548",1266988821,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19547";

cljs.core.async.t_cljs$core$async19547.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19547");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19547 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19547(map_LT___$1,f__$1,ch__$1,meta19545__$1,___$2,fn1__$1,meta19548){
return (new cljs.core.async.t_cljs$core$async19547(map_LT___$1,f__$1,ch__$1,meta19545__$1,___$2,fn1__$1,meta19548));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19547(self__.map_LT_,self__.f,self__.ch,self__.meta19545,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19545","meta19545",1569883502,null)], null);
});

cljs.core.async.t_cljs$core$async19544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19544";

cljs.core.async.t_cljs$core$async19544.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19544");
});

cljs.core.async.__GT_t_cljs$core$async19544 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19544(map_LT___$1,f__$1,ch__$1,meta19545){
return (new cljs.core.async.t_cljs$core$async19544(map_LT___$1,f__$1,ch__$1,meta19545));
});

}

return (new cljs.core.async.t_cljs$core$async19544(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19553 = (function (map_GT_,f,ch,meta19554){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19554 = meta19554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19555,meta19554__$1){
var self__ = this;
var _19555__$1 = this;
return (new cljs.core.async.t_cljs$core$async19553(self__.map_GT_,self__.f,self__.ch,meta19554__$1));
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19555){
var self__ = this;
var _19555__$1 = this;
return self__.meta19554;
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19554","meta19554",538712978,null)], null);
});

cljs.core.async.t_cljs$core$async19553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19553";

cljs.core.async.t_cljs$core$async19553.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19553");
});

cljs.core.async.__GT_t_cljs$core$async19553 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19553(map_GT___$1,f__$1,ch__$1,meta19554){
return (new cljs.core.async.t_cljs$core$async19553(map_GT___$1,f__$1,ch__$1,meta19554));
});

}

return (new cljs.core.async.t_cljs$core$async19553(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async19559 = (function (filter_GT_,p,ch,meta19560){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19560 = meta19560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19561,meta19560__$1){
var self__ = this;
var _19561__$1 = this;
return (new cljs.core.async.t_cljs$core$async19559(self__.filter_GT_,self__.p,self__.ch,meta19560__$1));
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
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19559.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19560","meta19560",-924460327,null)], null);
});

cljs.core.async.t_cljs$core$async19559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19559";

cljs.core.async.t_cljs$core$async19559.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19559");
});

cljs.core.async.__GT_t_cljs$core$async19559 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19559(filter_GT___$1,p__$1,ch__$1,meta19560){
return (new cljs.core.async.t_cljs$core$async19559(filter_GT___$1,p__$1,ch__$1,meta19560));
});

}

return (new cljs.core.async.t_cljs$core$async19559(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19562 = [];
var len__6152__auto___19606 = arguments.length;
var i__6153__auto___19607 = (0);
while(true){
if((i__6153__auto___19607 < len__6152__auto___19606)){
args19562.push((arguments[i__6153__auto___19607]));

var G__19608 = (i__6153__auto___19607 + (1));
i__6153__auto___19607 = G__19608;
continue;
} else {
}
break;
}

var G__19564 = args19562.length;
switch (G__19564) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19562.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___19610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19610,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19610,out){
return (function (state_19585){
var state_val_19586 = (state_19585[(1)]);
if((state_val_19586 === (7))){
var inst_19581 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19587_19611 = state_19585__$1;
(statearr_19587_19611[(2)] = inst_19581);

(statearr_19587_19611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (1))){
var state_19585__$1 = state_19585;
var statearr_19588_19612 = state_19585__$1;
(statearr_19588_19612[(2)] = null);

(statearr_19588_19612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (4))){
var inst_19567 = (state_19585[(7)]);
var inst_19567__$1 = (state_19585[(2)]);
var inst_19568 = (inst_19567__$1 == null);
var state_19585__$1 = (function (){var statearr_19589 = state_19585;
(statearr_19589[(7)] = inst_19567__$1);

return statearr_19589;
})();
if(cljs.core.truth_(inst_19568)){
var statearr_19590_19613 = state_19585__$1;
(statearr_19590_19613[(1)] = (5));

} else {
var statearr_19591_19614 = state_19585__$1;
(statearr_19591_19614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (6))){
var inst_19567 = (state_19585[(7)]);
var inst_19572 = p.call(null,inst_19567);
var state_19585__$1 = state_19585;
if(cljs.core.truth_(inst_19572)){
var statearr_19592_19615 = state_19585__$1;
(statearr_19592_19615[(1)] = (8));

} else {
var statearr_19593_19616 = state_19585__$1;
(statearr_19593_19616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (3))){
var inst_19583 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19585__$1,inst_19583);
} else {
if((state_val_19586 === (2))){
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19585__$1,(4),ch);
} else {
if((state_val_19586 === (11))){
var inst_19575 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19594_19617 = state_19585__$1;
(statearr_19594_19617[(2)] = inst_19575);

(statearr_19594_19617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (9))){
var state_19585__$1 = state_19585;
var statearr_19595_19618 = state_19585__$1;
(statearr_19595_19618[(2)] = null);

(statearr_19595_19618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (5))){
var inst_19570 = cljs.core.async.close_BANG_.call(null,out);
var state_19585__$1 = state_19585;
var statearr_19596_19619 = state_19585__$1;
(statearr_19596_19619[(2)] = inst_19570);

(statearr_19596_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (10))){
var inst_19578 = (state_19585[(2)]);
var state_19585__$1 = (function (){var statearr_19597 = state_19585;
(statearr_19597[(8)] = inst_19578);

return statearr_19597;
})();
var statearr_19598_19620 = state_19585__$1;
(statearr_19598_19620[(2)] = null);

(statearr_19598_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (8))){
var inst_19567 = (state_19585[(7)]);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(11),out,inst_19567);
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
});})(c__10257__auto___19610,out))
;
return ((function (switch__10192__auto__,c__10257__auto___19610,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19602 = [null,null,null,null,null,null,null,null,null];
(statearr_19602[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19602[(1)] = (1));

return statearr_19602;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19585){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19603){if((e19603 instanceof Object)){
var ex__10196__auto__ = e19603;
var statearr_19604_19621 = state_19585;
(statearr_19604_19621[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19622 = state_19585;
state_19585 = G__19622;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19610,out))
})();
var state__10259__auto__ = (function (){var statearr_19605 = f__10258__auto__.call(null);
(statearr_19605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19610);

return statearr_19605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19610,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19623 = [];
var len__6152__auto___19626 = arguments.length;
var i__6153__auto___19627 = (0);
while(true){
if((i__6153__auto___19627 < len__6152__auto___19626)){
args19623.push((arguments[i__6153__auto___19627]));

var G__19628 = (i__6153__auto___19627 + (1));
i__6153__auto___19627 = G__19628;
continue;
} else {
}
break;
}

var G__19625 = args19623.length;
switch (G__19625) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19623.length)].join('')));

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
var c__10257__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto__){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto__){
return (function (state_19795){
var state_val_19796 = (state_19795[(1)]);
if((state_val_19796 === (7))){
var inst_19791 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19797_19838 = state_19795__$1;
(statearr_19797_19838[(2)] = inst_19791);

(statearr_19797_19838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (20))){
var inst_19761 = (state_19795[(7)]);
var inst_19772 = (state_19795[(2)]);
var inst_19773 = cljs.core.next.call(null,inst_19761);
var inst_19747 = inst_19773;
var inst_19748 = null;
var inst_19749 = (0);
var inst_19750 = (0);
var state_19795__$1 = (function (){var statearr_19798 = state_19795;
(statearr_19798[(8)] = inst_19749);

(statearr_19798[(9)] = inst_19748);

(statearr_19798[(10)] = inst_19747);

(statearr_19798[(11)] = inst_19750);

(statearr_19798[(12)] = inst_19772);

return statearr_19798;
})();
var statearr_19799_19839 = state_19795__$1;
(statearr_19799_19839[(2)] = null);

(statearr_19799_19839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (1))){
var state_19795__$1 = state_19795;
var statearr_19800_19840 = state_19795__$1;
(statearr_19800_19840[(2)] = null);

(statearr_19800_19840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (4))){
var inst_19736 = (state_19795[(13)]);
var inst_19736__$1 = (state_19795[(2)]);
var inst_19737 = (inst_19736__$1 == null);
var state_19795__$1 = (function (){var statearr_19801 = state_19795;
(statearr_19801[(13)] = inst_19736__$1);

return statearr_19801;
})();
if(cljs.core.truth_(inst_19737)){
var statearr_19802_19841 = state_19795__$1;
(statearr_19802_19841[(1)] = (5));

} else {
var statearr_19803_19842 = state_19795__$1;
(statearr_19803_19842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (15))){
var state_19795__$1 = state_19795;
var statearr_19807_19843 = state_19795__$1;
(statearr_19807_19843[(2)] = null);

(statearr_19807_19843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (21))){
var state_19795__$1 = state_19795;
var statearr_19808_19844 = state_19795__$1;
(statearr_19808_19844[(2)] = null);

(statearr_19808_19844[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (13))){
var inst_19749 = (state_19795[(8)]);
var inst_19748 = (state_19795[(9)]);
var inst_19747 = (state_19795[(10)]);
var inst_19750 = (state_19795[(11)]);
var inst_19757 = (state_19795[(2)]);
var inst_19758 = (inst_19750 + (1));
var tmp19804 = inst_19749;
var tmp19805 = inst_19748;
var tmp19806 = inst_19747;
var inst_19747__$1 = tmp19806;
var inst_19748__$1 = tmp19805;
var inst_19749__$1 = tmp19804;
var inst_19750__$1 = inst_19758;
var state_19795__$1 = (function (){var statearr_19809 = state_19795;
(statearr_19809[(8)] = inst_19749__$1);

(statearr_19809[(14)] = inst_19757);

(statearr_19809[(9)] = inst_19748__$1);

(statearr_19809[(10)] = inst_19747__$1);

(statearr_19809[(11)] = inst_19750__$1);

return statearr_19809;
})();
var statearr_19810_19845 = state_19795__$1;
(statearr_19810_19845[(2)] = null);

(statearr_19810_19845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (22))){
var state_19795__$1 = state_19795;
var statearr_19811_19846 = state_19795__$1;
(statearr_19811_19846[(2)] = null);

(statearr_19811_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (6))){
var inst_19736 = (state_19795[(13)]);
var inst_19745 = f.call(null,inst_19736);
var inst_19746 = cljs.core.seq.call(null,inst_19745);
var inst_19747 = inst_19746;
var inst_19748 = null;
var inst_19749 = (0);
var inst_19750 = (0);
var state_19795__$1 = (function (){var statearr_19812 = state_19795;
(statearr_19812[(8)] = inst_19749);

(statearr_19812[(9)] = inst_19748);

(statearr_19812[(10)] = inst_19747);

(statearr_19812[(11)] = inst_19750);

return statearr_19812;
})();
var statearr_19813_19847 = state_19795__$1;
(statearr_19813_19847[(2)] = null);

(statearr_19813_19847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (17))){
var inst_19761 = (state_19795[(7)]);
var inst_19765 = cljs.core.chunk_first.call(null,inst_19761);
var inst_19766 = cljs.core.chunk_rest.call(null,inst_19761);
var inst_19767 = cljs.core.count.call(null,inst_19765);
var inst_19747 = inst_19766;
var inst_19748 = inst_19765;
var inst_19749 = inst_19767;
var inst_19750 = (0);
var state_19795__$1 = (function (){var statearr_19814 = state_19795;
(statearr_19814[(8)] = inst_19749);

(statearr_19814[(9)] = inst_19748);

(statearr_19814[(10)] = inst_19747);

(statearr_19814[(11)] = inst_19750);

return statearr_19814;
})();
var statearr_19815_19848 = state_19795__$1;
(statearr_19815_19848[(2)] = null);

(statearr_19815_19848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (3))){
var inst_19793 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19795__$1,inst_19793);
} else {
if((state_val_19796 === (12))){
var inst_19781 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19816_19849 = state_19795__$1;
(statearr_19816_19849[(2)] = inst_19781);

(statearr_19816_19849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (2))){
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19795__$1,(4),in$);
} else {
if((state_val_19796 === (23))){
var inst_19789 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19817_19850 = state_19795__$1;
(statearr_19817_19850[(2)] = inst_19789);

(statearr_19817_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (19))){
var inst_19776 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19818_19851 = state_19795__$1;
(statearr_19818_19851[(2)] = inst_19776);

(statearr_19818_19851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (11))){
var inst_19761 = (state_19795[(7)]);
var inst_19747 = (state_19795[(10)]);
var inst_19761__$1 = cljs.core.seq.call(null,inst_19747);
var state_19795__$1 = (function (){var statearr_19819 = state_19795;
(statearr_19819[(7)] = inst_19761__$1);

return statearr_19819;
})();
if(inst_19761__$1){
var statearr_19820_19852 = state_19795__$1;
(statearr_19820_19852[(1)] = (14));

} else {
var statearr_19821_19853 = state_19795__$1;
(statearr_19821_19853[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (9))){
var inst_19783 = (state_19795[(2)]);
var inst_19784 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19795__$1 = (function (){var statearr_19822 = state_19795;
(statearr_19822[(15)] = inst_19783);

return statearr_19822;
})();
if(cljs.core.truth_(inst_19784)){
var statearr_19823_19854 = state_19795__$1;
(statearr_19823_19854[(1)] = (21));

} else {
var statearr_19824_19855 = state_19795__$1;
(statearr_19824_19855[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (5))){
var inst_19739 = cljs.core.async.close_BANG_.call(null,out);
var state_19795__$1 = state_19795;
var statearr_19825_19856 = state_19795__$1;
(statearr_19825_19856[(2)] = inst_19739);

(statearr_19825_19856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (14))){
var inst_19761 = (state_19795[(7)]);
var inst_19763 = cljs.core.chunked_seq_QMARK_.call(null,inst_19761);
var state_19795__$1 = state_19795;
if(inst_19763){
var statearr_19826_19857 = state_19795__$1;
(statearr_19826_19857[(1)] = (17));

} else {
var statearr_19827_19858 = state_19795__$1;
(statearr_19827_19858[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (16))){
var inst_19779 = (state_19795[(2)]);
var state_19795__$1 = state_19795;
var statearr_19828_19859 = state_19795__$1;
(statearr_19828_19859[(2)] = inst_19779);

(statearr_19828_19859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19796 === (10))){
var inst_19748 = (state_19795[(9)]);
var inst_19750 = (state_19795[(11)]);
var inst_19755 = cljs.core._nth.call(null,inst_19748,inst_19750);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19795__$1,(13),out,inst_19755);
} else {
if((state_val_19796 === (18))){
var inst_19761 = (state_19795[(7)]);
var inst_19770 = cljs.core.first.call(null,inst_19761);
var state_19795__$1 = state_19795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19795__$1,(20),out,inst_19770);
} else {
if((state_val_19796 === (8))){
var inst_19749 = (state_19795[(8)]);
var inst_19750 = (state_19795[(11)]);
var inst_19752 = (inst_19750 < inst_19749);
var inst_19753 = inst_19752;
var state_19795__$1 = state_19795;
if(cljs.core.truth_(inst_19753)){
var statearr_19829_19860 = state_19795__$1;
(statearr_19829_19860[(1)] = (10));

} else {
var statearr_19830_19861 = state_19795__$1;
(statearr_19830_19861[(1)] = (11));

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
});})(c__10257__auto__))
;
return ((function (switch__10192__auto__,c__10257__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____0 = (function (){
var statearr_19834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19834[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__);

(statearr_19834[(1)] = (1));

return statearr_19834;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____1 = (function (state_19795){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19835){if((e19835 instanceof Object)){
var ex__10196__auto__ = e19835;
var statearr_19836_19862 = state_19795;
(statearr_19836_19862[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19863 = state_19795;
state_19795 = G__19863;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__ = function(state_19795){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____1.call(this,state_19795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto__))
})();
var state__10259__auto__ = (function (){var statearr_19837 = f__10258__auto__.call(null);
(statearr_19837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto__);

return statearr_19837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto__))
);

return c__10257__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19864 = [];
var len__6152__auto___19867 = arguments.length;
var i__6153__auto___19868 = (0);
while(true){
if((i__6153__auto___19868 < len__6152__auto___19867)){
args19864.push((arguments[i__6153__auto___19868]));

var G__19869 = (i__6153__auto___19868 + (1));
i__6153__auto___19868 = G__19869;
continue;
} else {
}
break;
}

var G__19866 = args19864.length;
switch (G__19866) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19864.length)].join('')));

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
var args19871 = [];
var len__6152__auto___19874 = arguments.length;
var i__6153__auto___19875 = (0);
while(true){
if((i__6153__auto___19875 < len__6152__auto___19874)){
args19871.push((arguments[i__6153__auto___19875]));

var G__19876 = (i__6153__auto___19875 + (1));
i__6153__auto___19875 = G__19876;
continue;
} else {
}
break;
}

var G__19873 = args19871.length;
switch (G__19873) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19871.length)].join('')));

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
var args19878 = [];
var len__6152__auto___19929 = arguments.length;
var i__6153__auto___19930 = (0);
while(true){
if((i__6153__auto___19930 < len__6152__auto___19929)){
args19878.push((arguments[i__6153__auto___19930]));

var G__19931 = (i__6153__auto___19930 + (1));
i__6153__auto___19930 = G__19931;
continue;
} else {
}
break;
}

var G__19880 = args19878.length;
switch (G__19880) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19878.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___19933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___19933,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___19933,out){
return (function (state_19904){
var state_val_19905 = (state_19904[(1)]);
if((state_val_19905 === (7))){
var inst_19899 = (state_19904[(2)]);
var state_19904__$1 = state_19904;
var statearr_19906_19934 = state_19904__$1;
(statearr_19906_19934[(2)] = inst_19899);

(statearr_19906_19934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (1))){
var inst_19881 = null;
var state_19904__$1 = (function (){var statearr_19907 = state_19904;
(statearr_19907[(7)] = inst_19881);

return statearr_19907;
})();
var statearr_19908_19935 = state_19904__$1;
(statearr_19908_19935[(2)] = null);

(statearr_19908_19935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (4))){
var inst_19884 = (state_19904[(8)]);
var inst_19884__$1 = (state_19904[(2)]);
var inst_19885 = (inst_19884__$1 == null);
var inst_19886 = cljs.core.not.call(null,inst_19885);
var state_19904__$1 = (function (){var statearr_19909 = state_19904;
(statearr_19909[(8)] = inst_19884__$1);

return statearr_19909;
})();
if(inst_19886){
var statearr_19910_19936 = state_19904__$1;
(statearr_19910_19936[(1)] = (5));

} else {
var statearr_19911_19937 = state_19904__$1;
(statearr_19911_19937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (6))){
var state_19904__$1 = state_19904;
var statearr_19912_19938 = state_19904__$1;
(statearr_19912_19938[(2)] = null);

(statearr_19912_19938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (3))){
var inst_19901 = (state_19904[(2)]);
var inst_19902 = cljs.core.async.close_BANG_.call(null,out);
var state_19904__$1 = (function (){var statearr_19913 = state_19904;
(statearr_19913[(9)] = inst_19901);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19904__$1,inst_19902);
} else {
if((state_val_19905 === (2))){
var state_19904__$1 = state_19904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19904__$1,(4),ch);
} else {
if((state_val_19905 === (11))){
var inst_19884 = (state_19904[(8)]);
var inst_19893 = (state_19904[(2)]);
var inst_19881 = inst_19884;
var state_19904__$1 = (function (){var statearr_19914 = state_19904;
(statearr_19914[(7)] = inst_19881);

(statearr_19914[(10)] = inst_19893);

return statearr_19914;
})();
var statearr_19915_19939 = state_19904__$1;
(statearr_19915_19939[(2)] = null);

(statearr_19915_19939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (9))){
var inst_19884 = (state_19904[(8)]);
var state_19904__$1 = state_19904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19904__$1,(11),out,inst_19884);
} else {
if((state_val_19905 === (5))){
var inst_19881 = (state_19904[(7)]);
var inst_19884 = (state_19904[(8)]);
var inst_19888 = cljs.core._EQ_.call(null,inst_19884,inst_19881);
var state_19904__$1 = state_19904;
if(inst_19888){
var statearr_19917_19940 = state_19904__$1;
(statearr_19917_19940[(1)] = (8));

} else {
var statearr_19918_19941 = state_19904__$1;
(statearr_19918_19941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (10))){
var inst_19896 = (state_19904[(2)]);
var state_19904__$1 = state_19904;
var statearr_19919_19942 = state_19904__$1;
(statearr_19919_19942[(2)] = inst_19896);

(statearr_19919_19942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19905 === (8))){
var inst_19881 = (state_19904[(7)]);
var tmp19916 = inst_19881;
var inst_19881__$1 = tmp19916;
var state_19904__$1 = (function (){var statearr_19920 = state_19904;
(statearr_19920[(7)] = inst_19881__$1);

return statearr_19920;
})();
var statearr_19921_19943 = state_19904__$1;
(statearr_19921_19943[(2)] = null);

(statearr_19921_19943[(1)] = (2));


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
});})(c__10257__auto___19933,out))
;
return ((function (switch__10192__auto__,c__10257__auto___19933,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_19925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19925[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_19925[(1)] = (1));

return statearr_19925;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19904){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e19926){if((e19926 instanceof Object)){
var ex__10196__auto__ = e19926;
var statearr_19927_19944 = state_19904;
(statearr_19927_19944[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19945 = state_19904;
state_19904 = G__19945;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___19933,out))
})();
var state__10259__auto__ = (function (){var statearr_19928 = f__10258__auto__.call(null);
(statearr_19928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___19933);

return statearr_19928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___19933,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19946 = [];
var len__6152__auto___20016 = arguments.length;
var i__6153__auto___20017 = (0);
while(true){
if((i__6153__auto___20017 < len__6152__auto___20016)){
args19946.push((arguments[i__6153__auto___20017]));

var G__20018 = (i__6153__auto___20017 + (1));
i__6153__auto___20017 = G__20018;
continue;
} else {
}
break;
}

var G__19948 = args19946.length;
switch (G__19948) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19946.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___20020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___20020,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___20020,out){
return (function (state_19986){
var state_val_19987 = (state_19986[(1)]);
if((state_val_19987 === (7))){
var inst_19982 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_19988_20021 = state_19986__$1;
(statearr_19988_20021[(2)] = inst_19982);

(statearr_19988_20021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (1))){
var inst_19949 = (new Array(n));
var inst_19950 = inst_19949;
var inst_19951 = (0);
var state_19986__$1 = (function (){var statearr_19989 = state_19986;
(statearr_19989[(7)] = inst_19951);

(statearr_19989[(8)] = inst_19950);

return statearr_19989;
})();
var statearr_19990_20022 = state_19986__$1;
(statearr_19990_20022[(2)] = null);

(statearr_19990_20022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (4))){
var inst_19954 = (state_19986[(9)]);
var inst_19954__$1 = (state_19986[(2)]);
var inst_19955 = (inst_19954__$1 == null);
var inst_19956 = cljs.core.not.call(null,inst_19955);
var state_19986__$1 = (function (){var statearr_19991 = state_19986;
(statearr_19991[(9)] = inst_19954__$1);

return statearr_19991;
})();
if(inst_19956){
var statearr_19992_20023 = state_19986__$1;
(statearr_19992_20023[(1)] = (5));

} else {
var statearr_19993_20024 = state_19986__$1;
(statearr_19993_20024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (15))){
var inst_19976 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_19994_20025 = state_19986__$1;
(statearr_19994_20025[(2)] = inst_19976);

(statearr_19994_20025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (13))){
var state_19986__$1 = state_19986;
var statearr_19995_20026 = state_19986__$1;
(statearr_19995_20026[(2)] = null);

(statearr_19995_20026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (6))){
var inst_19951 = (state_19986[(7)]);
var inst_19972 = (inst_19951 > (0));
var state_19986__$1 = state_19986;
if(cljs.core.truth_(inst_19972)){
var statearr_19996_20027 = state_19986__$1;
(statearr_19996_20027[(1)] = (12));

} else {
var statearr_19997_20028 = state_19986__$1;
(statearr_19997_20028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (3))){
var inst_19984 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19986__$1,inst_19984);
} else {
if((state_val_19987 === (12))){
var inst_19950 = (state_19986[(8)]);
var inst_19974 = cljs.core.vec.call(null,inst_19950);
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19986__$1,(15),out,inst_19974);
} else {
if((state_val_19987 === (2))){
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19986__$1,(4),ch);
} else {
if((state_val_19987 === (11))){
var inst_19966 = (state_19986[(2)]);
var inst_19967 = (new Array(n));
var inst_19950 = inst_19967;
var inst_19951 = (0);
var state_19986__$1 = (function (){var statearr_19998 = state_19986;
(statearr_19998[(10)] = inst_19966);

(statearr_19998[(7)] = inst_19951);

(statearr_19998[(8)] = inst_19950);

return statearr_19998;
})();
var statearr_19999_20029 = state_19986__$1;
(statearr_19999_20029[(2)] = null);

(statearr_19999_20029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (9))){
var inst_19950 = (state_19986[(8)]);
var inst_19964 = cljs.core.vec.call(null,inst_19950);
var state_19986__$1 = state_19986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19986__$1,(11),out,inst_19964);
} else {
if((state_val_19987 === (5))){
var inst_19954 = (state_19986[(9)]);
var inst_19951 = (state_19986[(7)]);
var inst_19950 = (state_19986[(8)]);
var inst_19959 = (state_19986[(11)]);
var inst_19958 = (inst_19950[inst_19951] = inst_19954);
var inst_19959__$1 = (inst_19951 + (1));
var inst_19960 = (inst_19959__$1 < n);
var state_19986__$1 = (function (){var statearr_20000 = state_19986;
(statearr_20000[(12)] = inst_19958);

(statearr_20000[(11)] = inst_19959__$1);

return statearr_20000;
})();
if(cljs.core.truth_(inst_19960)){
var statearr_20001_20030 = state_19986__$1;
(statearr_20001_20030[(1)] = (8));

} else {
var statearr_20002_20031 = state_19986__$1;
(statearr_20002_20031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (14))){
var inst_19979 = (state_19986[(2)]);
var inst_19980 = cljs.core.async.close_BANG_.call(null,out);
var state_19986__$1 = (function (){var statearr_20004 = state_19986;
(statearr_20004[(13)] = inst_19979);

return statearr_20004;
})();
var statearr_20005_20032 = state_19986__$1;
(statearr_20005_20032[(2)] = inst_19980);

(statearr_20005_20032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (10))){
var inst_19970 = (state_19986[(2)]);
var state_19986__$1 = state_19986;
var statearr_20006_20033 = state_19986__$1;
(statearr_20006_20033[(2)] = inst_19970);

(statearr_20006_20033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19987 === (8))){
var inst_19950 = (state_19986[(8)]);
var inst_19959 = (state_19986[(11)]);
var tmp20003 = inst_19950;
var inst_19950__$1 = tmp20003;
var inst_19951 = inst_19959;
var state_19986__$1 = (function (){var statearr_20007 = state_19986;
(statearr_20007[(7)] = inst_19951);

(statearr_20007[(8)] = inst_19950__$1);

return statearr_20007;
})();
var statearr_20008_20034 = state_19986__$1;
(statearr_20008_20034[(2)] = null);

(statearr_20008_20034[(1)] = (2));


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
});})(c__10257__auto___20020,out))
;
return ((function (switch__10192__auto__,c__10257__auto___20020,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_20012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20012[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_20012[(1)] = (1));

return statearr_20012;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_19986){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_19986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e20013){if((e20013 instanceof Object)){
var ex__10196__auto__ = e20013;
var statearr_20014_20035 = state_19986;
(statearr_20014_20035[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20036 = state_19986;
state_19986 = G__20036;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_19986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_19986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___20020,out))
})();
var state__10259__auto__ = (function (){var statearr_20015 = f__10258__auto__.call(null);
(statearr_20015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___20020);

return statearr_20015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___20020,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20037 = [];
var len__6152__auto___20111 = arguments.length;
var i__6153__auto___20112 = (0);
while(true){
if((i__6153__auto___20112 < len__6152__auto___20111)){
args20037.push((arguments[i__6153__auto___20112]));

var G__20113 = (i__6153__auto___20112 + (1));
i__6153__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var G__20039 = args20037.length;
switch (G__20039) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20037.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10257__auto___20115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10257__auto___20115,out){
return (function (){
var f__10258__auto__ = (function (){var switch__10192__auto__ = ((function (c__10257__auto___20115,out){
return (function (state_20081){
var state_val_20082 = (state_20081[(1)]);
if((state_val_20082 === (7))){
var inst_20077 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20083_20116 = state_20081__$1;
(statearr_20083_20116[(2)] = inst_20077);

(statearr_20083_20116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (1))){
var inst_20040 = [];
var inst_20041 = inst_20040;
var inst_20042 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20081__$1 = (function (){var statearr_20084 = state_20081;
(statearr_20084[(7)] = inst_20042);

(statearr_20084[(8)] = inst_20041);

return statearr_20084;
})();
var statearr_20085_20117 = state_20081__$1;
(statearr_20085_20117[(2)] = null);

(statearr_20085_20117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (4))){
var inst_20045 = (state_20081[(9)]);
var inst_20045__$1 = (state_20081[(2)]);
var inst_20046 = (inst_20045__$1 == null);
var inst_20047 = cljs.core.not.call(null,inst_20046);
var state_20081__$1 = (function (){var statearr_20086 = state_20081;
(statearr_20086[(9)] = inst_20045__$1);

return statearr_20086;
})();
if(inst_20047){
var statearr_20087_20118 = state_20081__$1;
(statearr_20087_20118[(1)] = (5));

} else {
var statearr_20088_20119 = state_20081__$1;
(statearr_20088_20119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (15))){
var inst_20071 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20089_20120 = state_20081__$1;
(statearr_20089_20120[(2)] = inst_20071);

(statearr_20089_20120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (13))){
var state_20081__$1 = state_20081;
var statearr_20090_20121 = state_20081__$1;
(statearr_20090_20121[(2)] = null);

(statearr_20090_20121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (6))){
var inst_20041 = (state_20081[(8)]);
var inst_20066 = inst_20041.length;
var inst_20067 = (inst_20066 > (0));
var state_20081__$1 = state_20081;
if(cljs.core.truth_(inst_20067)){
var statearr_20091_20122 = state_20081__$1;
(statearr_20091_20122[(1)] = (12));

} else {
var statearr_20092_20123 = state_20081__$1;
(statearr_20092_20123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (3))){
var inst_20079 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20081__$1,inst_20079);
} else {
if((state_val_20082 === (12))){
var inst_20041 = (state_20081[(8)]);
var inst_20069 = cljs.core.vec.call(null,inst_20041);
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20081__$1,(15),out,inst_20069);
} else {
if((state_val_20082 === (2))){
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20081__$1,(4),ch);
} else {
if((state_val_20082 === (11))){
var inst_20049 = (state_20081[(10)]);
var inst_20045 = (state_20081[(9)]);
var inst_20059 = (state_20081[(2)]);
var inst_20060 = [];
var inst_20061 = inst_20060.push(inst_20045);
var inst_20041 = inst_20060;
var inst_20042 = inst_20049;
var state_20081__$1 = (function (){var statearr_20093 = state_20081;
(statearr_20093[(7)] = inst_20042);

(statearr_20093[(8)] = inst_20041);

(statearr_20093[(11)] = inst_20061);

(statearr_20093[(12)] = inst_20059);

return statearr_20093;
})();
var statearr_20094_20124 = state_20081__$1;
(statearr_20094_20124[(2)] = null);

(statearr_20094_20124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (9))){
var inst_20041 = (state_20081[(8)]);
var inst_20057 = cljs.core.vec.call(null,inst_20041);
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20081__$1,(11),out,inst_20057);
} else {
if((state_val_20082 === (5))){
var inst_20049 = (state_20081[(10)]);
var inst_20042 = (state_20081[(7)]);
var inst_20045 = (state_20081[(9)]);
var inst_20049__$1 = f.call(null,inst_20045);
var inst_20050 = cljs.core._EQ_.call(null,inst_20049__$1,inst_20042);
var inst_20051 = cljs.core.keyword_identical_QMARK_.call(null,inst_20042,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20052 = (inst_20050) || (inst_20051);
var state_20081__$1 = (function (){var statearr_20095 = state_20081;
(statearr_20095[(10)] = inst_20049__$1);

return statearr_20095;
})();
if(cljs.core.truth_(inst_20052)){
var statearr_20096_20125 = state_20081__$1;
(statearr_20096_20125[(1)] = (8));

} else {
var statearr_20097_20126 = state_20081__$1;
(statearr_20097_20126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (14))){
var inst_20074 = (state_20081[(2)]);
var inst_20075 = cljs.core.async.close_BANG_.call(null,out);
var state_20081__$1 = (function (){var statearr_20099 = state_20081;
(statearr_20099[(13)] = inst_20074);

return statearr_20099;
})();
var statearr_20100_20127 = state_20081__$1;
(statearr_20100_20127[(2)] = inst_20075);

(statearr_20100_20127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (10))){
var inst_20064 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20101_20128 = state_20081__$1;
(statearr_20101_20128[(2)] = inst_20064);

(statearr_20101_20128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (8))){
var inst_20049 = (state_20081[(10)]);
var inst_20041 = (state_20081[(8)]);
var inst_20045 = (state_20081[(9)]);
var inst_20054 = inst_20041.push(inst_20045);
var tmp20098 = inst_20041;
var inst_20041__$1 = tmp20098;
var inst_20042 = inst_20049;
var state_20081__$1 = (function (){var statearr_20102 = state_20081;
(statearr_20102[(7)] = inst_20042);

(statearr_20102[(8)] = inst_20041__$1);

(statearr_20102[(14)] = inst_20054);

return statearr_20102;
})();
var statearr_20103_20129 = state_20081__$1;
(statearr_20103_20129[(2)] = null);

(statearr_20103_20129[(1)] = (2));


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
});})(c__10257__auto___20115,out))
;
return ((function (switch__10192__auto__,c__10257__auto___20115,out){
return (function() {
var cljs$core$async$state_machine__10193__auto__ = null;
var cljs$core$async$state_machine__10193__auto____0 = (function (){
var statearr_20107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20107[(0)] = cljs$core$async$state_machine__10193__auto__);

(statearr_20107[(1)] = (1));

return statearr_20107;
});
var cljs$core$async$state_machine__10193__auto____1 = (function (state_20081){
while(true){
var ret_value__10194__auto__ = (function (){try{while(true){
var result__10195__auto__ = switch__10192__auto__.call(null,state_20081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10195__auto__;
}
break;
}
}catch (e20108){if((e20108 instanceof Object)){
var ex__10196__auto__ = e20108;
var statearr_20109_20130 = state_20081;
(statearr_20109_20130[(5)] = ex__10196__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20131 = state_20081;
state_20081 = G__20131;
continue;
} else {
return ret_value__10194__auto__;
}
break;
}
});
cljs$core$async$state_machine__10193__auto__ = function(state_20081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10193__auto____1.call(this,state_20081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10193__auto____0;
cljs$core$async$state_machine__10193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10193__auto____1;
return cljs$core$async$state_machine__10193__auto__;
})()
;})(switch__10192__auto__,c__10257__auto___20115,out))
})();
var state__10259__auto__ = (function (){var statearr_20110 = f__10258__auto__.call(null);
(statearr_20110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10257__auto___20115);

return statearr_20110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10259__auto__);
});})(c__10257__auto___20115,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map