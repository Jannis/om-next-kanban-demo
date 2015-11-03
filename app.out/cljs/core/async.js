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
if(typeof cljs.core.async.t_cljs$core$async17515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17515 = (function (fn_handler,f,meta17516){
this.fn_handler = fn_handler;
this.f = f;
this.meta17516 = meta17516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17517,meta17516__$1){
var self__ = this;
var _17517__$1 = this;
return (new cljs.core.async.t_cljs$core$async17515(self__.fn_handler,self__.f,meta17516__$1));
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
return true;
});

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17516","meta17516",-396583397,null)], null);
});

cljs.core.async.t_cljs$core$async17515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17515";

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17515");
});

cljs.core.async.__GT_t_cljs$core$async17515 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17515(fn_handler__$1,f__$1,meta17516){
return (new cljs.core.async.t_cljs$core$async17515(fn_handler__$1,f__$1,meta17516));
});

}

return (new cljs.core.async.t_cljs$core$async17515(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17520 = [];
var len__6152__auto___17523 = arguments.length;
var i__6153__auto___17524 = (0);
while(true){
if((i__6153__auto___17524 < len__6152__auto___17523)){
args17520.push((arguments[i__6153__auto___17524]));

var G__17525 = (i__6153__auto___17524 + (1));
i__6153__auto___17524 = G__17525;
continue;
} else {
}
break;
}

var G__17522 = args17520.length;
switch (G__17522) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17520.length)].join('')));

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
var args17527 = [];
var len__6152__auto___17530 = arguments.length;
var i__6153__auto___17531 = (0);
while(true){
if((i__6153__auto___17531 < len__6152__auto___17530)){
args17527.push((arguments[i__6153__auto___17531]));

var G__17532 = (i__6153__auto___17531 + (1));
i__6153__auto___17531 = G__17532;
continue;
} else {
}
break;
}

var G__17529 = args17527.length;
switch (G__17529) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17527.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17534 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17534);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17534,ret){
return (function (){
return fn1.call(null,val_17534);
});})(val_17534,ret))
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
var args17535 = [];
var len__6152__auto___17538 = arguments.length;
var i__6153__auto___17539 = (0);
while(true){
if((i__6153__auto___17539 < len__6152__auto___17538)){
args17535.push((arguments[i__6153__auto___17539]));

var G__17540 = (i__6153__auto___17539 + (1));
i__6153__auto___17539 = G__17540;
continue;
} else {
}
break;
}

var G__17537 = args17535.length;
switch (G__17537) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17535.length)].join('')));

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
var n__5997__auto___17542 = n;
var x_17543 = (0);
while(true){
if((x_17543 < n__5997__auto___17542)){
(a[x_17543] = (0));

var G__17544 = (x_17543 + (1));
x_17543 = G__17544;
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

var G__17545 = (i + (1));
i = G__17545;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17549 = (function (alt_flag,flag,meta17550){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17550 = meta17550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17551,meta17550__$1){
var self__ = this;
var _17551__$1 = this;
return (new cljs.core.async.t_cljs$core$async17549(self__.alt_flag,self__.flag,meta17550__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17551){
var self__ = this;
var _17551__$1 = this;
return self__.meta17550;
});})(flag))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17549.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17550","meta17550",1360531342,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17549";

cljs.core.async.t_cljs$core$async17549.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17549");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17549 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17549(alt_flag__$1,flag__$1,meta17550){
return (new cljs.core.async.t_cljs$core$async17549(alt_flag__$1,flag__$1,meta17550));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17549(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17555 = (function (alt_handler,flag,cb,meta17556){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17556 = meta17556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17557,meta17556__$1){
var self__ = this;
var _17557__$1 = this;
return (new cljs.core.async.t_cljs$core$async17555(self__.alt_handler,self__.flag,self__.cb,meta17556__$1));
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17557){
var self__ = this;
var _17557__$1 = this;
return self__.meta17556;
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17556","meta17556",-1412986461,null)], null);
});

cljs.core.async.t_cljs$core$async17555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17555";

cljs.core.async.t_cljs$core$async17555.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17555");
});

cljs.core.async.__GT_t_cljs$core$async17555 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17555(alt_handler__$1,flag__$1,cb__$1,meta17556){
return (new cljs.core.async.t_cljs$core$async17555(alt_handler__$1,flag__$1,cb__$1,meta17556));
});

}

return (new cljs.core.async.t_cljs$core$async17555(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17558_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17558_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17559_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17559_SHARP_,port], null));
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
var G__17560 = (i + (1));
i = G__17560;
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
var len__6152__auto___17566 = arguments.length;
var i__6153__auto___17567 = (0);
while(true){
if((i__6153__auto___17567 < len__6152__auto___17566)){
args__6159__auto__.push((arguments[i__6153__auto___17567]));

var G__17568 = (i__6153__auto___17567 + (1));
i__6153__auto___17567 = G__17568;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17563){
var map__17564 = p__17563;
var map__17564__$1 = ((((!((map__17564 == null)))?((((map__17564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17564):map__17564);
var opts = map__17564__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17561){
var G__17562 = cljs.core.first.call(null,seq17561);
var seq17561__$1 = cljs.core.next.call(null,seq17561);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17562,seq17561__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17569 = [];
var len__6152__auto___17619 = arguments.length;
var i__6153__auto___17620 = (0);
while(true){
if((i__6153__auto___17620 < len__6152__auto___17619)){
args17569.push((arguments[i__6153__auto___17620]));

var G__17621 = (i__6153__auto___17620 + (1));
i__6153__auto___17620 = G__17621;
continue;
} else {
}
break;
}

var G__17571 = args17569.length;
switch (G__17571) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17569.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10732__auto___17623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___17623){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___17623){
return (function (state_17595){
var state_val_17596 = (state_17595[(1)]);
if((state_val_17596 === (7))){
var inst_17591 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17597_17624 = state_17595__$1;
(statearr_17597_17624[(2)] = inst_17591);

(statearr_17597_17624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (1))){
var state_17595__$1 = state_17595;
var statearr_17598_17625 = state_17595__$1;
(statearr_17598_17625[(2)] = null);

(statearr_17598_17625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (4))){
var inst_17574 = (state_17595[(7)]);
var inst_17574__$1 = (state_17595[(2)]);
var inst_17575 = (inst_17574__$1 == null);
var state_17595__$1 = (function (){var statearr_17599 = state_17595;
(statearr_17599[(7)] = inst_17574__$1);

return statearr_17599;
})();
if(cljs.core.truth_(inst_17575)){
var statearr_17600_17626 = state_17595__$1;
(statearr_17600_17626[(1)] = (5));

} else {
var statearr_17601_17627 = state_17595__$1;
(statearr_17601_17627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (13))){
var state_17595__$1 = state_17595;
var statearr_17602_17628 = state_17595__$1;
(statearr_17602_17628[(2)] = null);

(statearr_17602_17628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (6))){
var inst_17574 = (state_17595[(7)]);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17595__$1,(11),to,inst_17574);
} else {
if((state_val_17596 === (3))){
var inst_17593 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17595__$1,inst_17593);
} else {
if((state_val_17596 === (12))){
var state_17595__$1 = state_17595;
var statearr_17603_17629 = state_17595__$1;
(statearr_17603_17629[(2)] = null);

(statearr_17603_17629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (2))){
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17595__$1,(4),from);
} else {
if((state_val_17596 === (11))){
var inst_17584 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
if(cljs.core.truth_(inst_17584)){
var statearr_17604_17630 = state_17595__$1;
(statearr_17604_17630[(1)] = (12));

} else {
var statearr_17605_17631 = state_17595__$1;
(statearr_17605_17631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (9))){
var state_17595__$1 = state_17595;
var statearr_17606_17632 = state_17595__$1;
(statearr_17606_17632[(2)] = null);

(statearr_17606_17632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (5))){
var state_17595__$1 = state_17595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17607_17633 = state_17595__$1;
(statearr_17607_17633[(1)] = (8));

} else {
var statearr_17608_17634 = state_17595__$1;
(statearr_17608_17634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (14))){
var inst_17589 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17609_17635 = state_17595__$1;
(statearr_17609_17635[(2)] = inst_17589);

(statearr_17609_17635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (10))){
var inst_17581 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
var statearr_17610_17636 = state_17595__$1;
(statearr_17610_17636[(2)] = inst_17581);

(statearr_17610_17636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (8))){
var inst_17578 = cljs.core.async.close_BANG_.call(null,to);
var state_17595__$1 = state_17595;
var statearr_17611_17637 = state_17595__$1;
(statearr_17611_17637[(2)] = inst_17578);

(statearr_17611_17637[(1)] = (10));


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
});})(c__10732__auto___17623))
;
return ((function (switch__10667__auto__,c__10732__auto___17623){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_17615 = [null,null,null,null,null,null,null,null];
(statearr_17615[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_17615[(1)] = (1));

return statearr_17615;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_17595){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17616){if((e17616 instanceof Object)){
var ex__10671__auto__ = e17616;
var statearr_17617_17638 = state_17595;
(statearr_17617_17638[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17639 = state_17595;
state_17595 = G__17639;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_17595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_17595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___17623))
})();
var state__10734__auto__ = (function (){var statearr_17618 = f__10733__auto__.call(null);
(statearr_17618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___17623);

return statearr_17618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___17623))
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
return (function (p__17823){
var vec__17824 = p__17823;
var v = cljs.core.nth.call(null,vec__17824,(0),null);
var p = cljs.core.nth.call(null,vec__17824,(1),null);
var job = vec__17824;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10732__auto___18006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results){
return (function (state_17829){
var state_val_17830 = (state_17829[(1)]);
if((state_val_17830 === (1))){
var state_17829__$1 = state_17829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17829__$1,(2),res,v);
} else {
if((state_val_17830 === (2))){
var inst_17826 = (state_17829[(2)]);
var inst_17827 = cljs.core.async.close_BANG_.call(null,res);
var state_17829__$1 = (function (){var statearr_17831 = state_17829;
(statearr_17831[(7)] = inst_17826);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17829__$1,inst_17827);
} else {
return null;
}
}
});})(c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results))
;
return ((function (switch__10667__auto__,c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17835 = [null,null,null,null,null,null,null,null];
(statearr_17835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17835[(1)] = (1));

return statearr_17835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17829){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17836){if((e17836 instanceof Object)){
var ex__10671__auto__ = e17836;
var statearr_17837_18007 = state_17829;
(statearr_17837_18007[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18008 = state_17829;
state_17829 = G__18008;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results))
})();
var state__10734__auto__ = (function (){var statearr_17838 = f__10733__auto__.call(null);
(statearr_17838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18006);

return statearr_17838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18006,res,vec__17824,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17839){
var vec__17840 = p__17839;
var v = cljs.core.nth.call(null,vec__17840,(0),null);
var p = cljs.core.nth.call(null,vec__17840,(1),null);
var job = vec__17840;
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
var n__5997__auto___18009 = n;
var __18010 = (0);
while(true){
if((__18010 < n__5997__auto___18009)){
var G__17841_18011 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17841_18011) {
case "compute":
var c__10732__auto___18013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18010,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (__18010,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function (state_17854){
var state_val_17855 = (state_17854[(1)]);
if((state_val_17855 === (1))){
var state_17854__$1 = state_17854;
var statearr_17856_18014 = state_17854__$1;
(statearr_17856_18014[(2)] = null);

(statearr_17856_18014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (2))){
var state_17854__$1 = state_17854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17854__$1,(4),jobs);
} else {
if((state_val_17855 === (3))){
var inst_17852 = (state_17854[(2)]);
var state_17854__$1 = state_17854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17854__$1,inst_17852);
} else {
if((state_val_17855 === (4))){
var inst_17844 = (state_17854[(2)]);
var inst_17845 = process.call(null,inst_17844);
var state_17854__$1 = state_17854;
if(cljs.core.truth_(inst_17845)){
var statearr_17857_18015 = state_17854__$1;
(statearr_17857_18015[(1)] = (5));

} else {
var statearr_17858_18016 = state_17854__$1;
(statearr_17858_18016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (5))){
var state_17854__$1 = state_17854;
var statearr_17859_18017 = state_17854__$1;
(statearr_17859_18017[(2)] = null);

(statearr_17859_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (6))){
var state_17854__$1 = state_17854;
var statearr_17860_18018 = state_17854__$1;
(statearr_17860_18018[(2)] = null);

(statearr_17860_18018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (7))){
var inst_17850 = (state_17854[(2)]);
var state_17854__$1 = state_17854;
var statearr_17861_18019 = state_17854__$1;
(statearr_17861_18019[(2)] = inst_17850);

(statearr_17861_18019[(1)] = (3));


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
});})(__18010,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
;
return ((function (__18010,switch__10667__auto__,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17865 = [null,null,null,null,null,null,null];
(statearr_17865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17865[(1)] = (1));

return statearr_17865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17854){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17866){if((e17866 instanceof Object)){
var ex__10671__auto__ = e17866;
var statearr_17867_18020 = state_17854;
(statearr_17867_18020[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18021 = state_17854;
state_17854 = G__18021;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(__18010,switch__10667__auto__,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17868 = f__10733__auto__.call(null);
(statearr_17868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18013);

return statearr_17868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(__18010,c__10732__auto___18013,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
);


break;
case "async":
var c__10732__auto___18022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18010,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (__18010,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function (state_17881){
var state_val_17882 = (state_17881[(1)]);
if((state_val_17882 === (1))){
var state_17881__$1 = state_17881;
var statearr_17883_18023 = state_17881__$1;
(statearr_17883_18023[(2)] = null);

(statearr_17883_18023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17882 === (2))){
var state_17881__$1 = state_17881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17881__$1,(4),jobs);
} else {
if((state_val_17882 === (3))){
var inst_17879 = (state_17881[(2)]);
var state_17881__$1 = state_17881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17881__$1,inst_17879);
} else {
if((state_val_17882 === (4))){
var inst_17871 = (state_17881[(2)]);
var inst_17872 = async.call(null,inst_17871);
var state_17881__$1 = state_17881;
if(cljs.core.truth_(inst_17872)){
var statearr_17884_18024 = state_17881__$1;
(statearr_17884_18024[(1)] = (5));

} else {
var statearr_17885_18025 = state_17881__$1;
(statearr_17885_18025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17882 === (5))){
var state_17881__$1 = state_17881;
var statearr_17886_18026 = state_17881__$1;
(statearr_17886_18026[(2)] = null);

(statearr_17886_18026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17882 === (6))){
var state_17881__$1 = state_17881;
var statearr_17887_18027 = state_17881__$1;
(statearr_17887_18027[(2)] = null);

(statearr_17887_18027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17882 === (7))){
var inst_17877 = (state_17881[(2)]);
var state_17881__$1 = state_17881;
var statearr_17888_18028 = state_17881__$1;
(statearr_17888_18028[(2)] = inst_17877);

(statearr_17888_18028[(1)] = (3));


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
});})(__18010,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
;
return ((function (__18010,switch__10667__auto__,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17892 = [null,null,null,null,null,null,null];
(statearr_17892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17892[(1)] = (1));

return statearr_17892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17881){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17893){if((e17893 instanceof Object)){
var ex__10671__auto__ = e17893;
var statearr_17894_18029 = state_17881;
(statearr_17894_18029[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18030 = state_17881;
state_17881 = G__18030;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(__18010,switch__10667__auto__,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17895 = f__10733__auto__.call(null);
(statearr_17895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18022);

return statearr_17895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(__18010,c__10732__auto___18022,G__17841_18011,n__5997__auto___18009,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18031 = (__18010 + (1));
__18010 = G__18031;
continue;
} else {
}
break;
}

var c__10732__auto___18032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18032,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18032,jobs,results,process,async){
return (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (1))){
var state_17917__$1 = state_17917;
var statearr_17919_18033 = state_17917__$1;
(statearr_17919_18033[(2)] = null);

(statearr_17919_18033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (2))){
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,(4),from);
} else {
if((state_val_17918 === (3))){
var inst_17915 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17917__$1,inst_17915);
} else {
if((state_val_17918 === (4))){
var inst_17898 = (state_17917[(7)]);
var inst_17898__$1 = (state_17917[(2)]);
var inst_17899 = (inst_17898__$1 == null);
var state_17917__$1 = (function (){var statearr_17920 = state_17917;
(statearr_17920[(7)] = inst_17898__$1);

return statearr_17920;
})();
if(cljs.core.truth_(inst_17899)){
var statearr_17921_18034 = state_17917__$1;
(statearr_17921_18034[(1)] = (5));

} else {
var statearr_17922_18035 = state_17917__$1;
(statearr_17922_18035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (5))){
var inst_17901 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17917__$1 = state_17917;
var statearr_17923_18036 = state_17917__$1;
(statearr_17923_18036[(2)] = inst_17901);

(statearr_17923_18036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (6))){
var inst_17898 = (state_17917[(7)]);
var inst_17903 = (state_17917[(8)]);
var inst_17903__$1 = cljs.core.async.chan.call(null,(1));
var inst_17904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17905 = [inst_17898,inst_17903__$1];
var inst_17906 = (new cljs.core.PersistentVector(null,2,(5),inst_17904,inst_17905,null));
var state_17917__$1 = (function (){var statearr_17924 = state_17917;
(statearr_17924[(8)] = inst_17903__$1);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17917__$1,(8),jobs,inst_17906);
} else {
if((state_val_17918 === (7))){
var inst_17913 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17925_18037 = state_17917__$1;
(statearr_17925_18037[(2)] = inst_17913);

(statearr_17925_18037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (8))){
var inst_17903 = (state_17917[(8)]);
var inst_17908 = (state_17917[(2)]);
var state_17917__$1 = (function (){var statearr_17926 = state_17917;
(statearr_17926[(9)] = inst_17908);

return statearr_17926;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17917__$1,(9),results,inst_17903);
} else {
if((state_val_17918 === (9))){
var inst_17910 = (state_17917[(2)]);
var state_17917__$1 = (function (){var statearr_17927 = state_17917;
(statearr_17927[(10)] = inst_17910);

return statearr_17927;
})();
var statearr_17928_18038 = state_17917__$1;
(statearr_17928_18038[(2)] = null);

(statearr_17928_18038[(1)] = (2));


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
});})(c__10732__auto___18032,jobs,results,process,async))
;
return ((function (switch__10667__auto__,c__10732__auto___18032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17932[(1)] = (1));

return statearr_17932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17917){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17933){if((e17933 instanceof Object)){
var ex__10671__auto__ = e17933;
var statearr_17934_18039 = state_17917;
(statearr_17934_18039[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18040 = state_17917;
state_17917 = G__18040;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18032,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17935 = f__10733__auto__.call(null);
(statearr_17935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18032);

return statearr_17935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18032,jobs,results,process,async))
);


var c__10732__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto__,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto__,jobs,results,process,async){
return (function (state_17973){
var state_val_17974 = (state_17973[(1)]);
if((state_val_17974 === (7))){
var inst_17969 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_17975_18041 = state_17973__$1;
(statearr_17975_18041[(2)] = inst_17969);

(statearr_17975_18041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (20))){
var state_17973__$1 = state_17973;
var statearr_17976_18042 = state_17973__$1;
(statearr_17976_18042[(2)] = null);

(statearr_17976_18042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (1))){
var state_17973__$1 = state_17973;
var statearr_17977_18043 = state_17973__$1;
(statearr_17977_18043[(2)] = null);

(statearr_17977_18043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (4))){
var inst_17938 = (state_17973[(7)]);
var inst_17938__$1 = (state_17973[(2)]);
var inst_17939 = (inst_17938__$1 == null);
var state_17973__$1 = (function (){var statearr_17978 = state_17973;
(statearr_17978[(7)] = inst_17938__$1);

return statearr_17978;
})();
if(cljs.core.truth_(inst_17939)){
var statearr_17979_18044 = state_17973__$1;
(statearr_17979_18044[(1)] = (5));

} else {
var statearr_17980_18045 = state_17973__$1;
(statearr_17980_18045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (15))){
var inst_17951 = (state_17973[(8)]);
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17973__$1,(18),to,inst_17951);
} else {
if((state_val_17974 === (21))){
var inst_17964 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_17981_18046 = state_17973__$1;
(statearr_17981_18046[(2)] = inst_17964);

(statearr_17981_18046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (13))){
var inst_17966 = (state_17973[(2)]);
var state_17973__$1 = (function (){var statearr_17982 = state_17973;
(statearr_17982[(9)] = inst_17966);

return statearr_17982;
})();
var statearr_17983_18047 = state_17973__$1;
(statearr_17983_18047[(2)] = null);

(statearr_17983_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (6))){
var inst_17938 = (state_17973[(7)]);
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17973__$1,(11),inst_17938);
} else {
if((state_val_17974 === (17))){
var inst_17959 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
if(cljs.core.truth_(inst_17959)){
var statearr_17984_18048 = state_17973__$1;
(statearr_17984_18048[(1)] = (19));

} else {
var statearr_17985_18049 = state_17973__$1;
(statearr_17985_18049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (3))){
var inst_17971 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17973__$1,inst_17971);
} else {
if((state_val_17974 === (12))){
var inst_17948 = (state_17973[(10)]);
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17973__$1,(14),inst_17948);
} else {
if((state_val_17974 === (2))){
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17973__$1,(4),results);
} else {
if((state_val_17974 === (19))){
var state_17973__$1 = state_17973;
var statearr_17986_18050 = state_17973__$1;
(statearr_17986_18050[(2)] = null);

(statearr_17986_18050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (11))){
var inst_17948 = (state_17973[(2)]);
var state_17973__$1 = (function (){var statearr_17987 = state_17973;
(statearr_17987[(10)] = inst_17948);

return statearr_17987;
})();
var statearr_17988_18051 = state_17973__$1;
(statearr_17988_18051[(2)] = null);

(statearr_17988_18051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (9))){
var state_17973__$1 = state_17973;
var statearr_17989_18052 = state_17973__$1;
(statearr_17989_18052[(2)] = null);

(statearr_17989_18052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (5))){
var state_17973__$1 = state_17973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17990_18053 = state_17973__$1;
(statearr_17990_18053[(1)] = (8));

} else {
var statearr_17991_18054 = state_17973__$1;
(statearr_17991_18054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (14))){
var inst_17953 = (state_17973[(11)]);
var inst_17951 = (state_17973[(8)]);
var inst_17951__$1 = (state_17973[(2)]);
var inst_17952 = (inst_17951__$1 == null);
var inst_17953__$1 = cljs.core.not.call(null,inst_17952);
var state_17973__$1 = (function (){var statearr_17992 = state_17973;
(statearr_17992[(11)] = inst_17953__$1);

(statearr_17992[(8)] = inst_17951__$1);

return statearr_17992;
})();
if(inst_17953__$1){
var statearr_17993_18055 = state_17973__$1;
(statearr_17993_18055[(1)] = (15));

} else {
var statearr_17994_18056 = state_17973__$1;
(statearr_17994_18056[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (16))){
var inst_17953 = (state_17973[(11)]);
var state_17973__$1 = state_17973;
var statearr_17995_18057 = state_17973__$1;
(statearr_17995_18057[(2)] = inst_17953);

(statearr_17995_18057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (10))){
var inst_17945 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_17996_18058 = state_17973__$1;
(statearr_17996_18058[(2)] = inst_17945);

(statearr_17996_18058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (18))){
var inst_17956 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_17997_18059 = state_17973__$1;
(statearr_17997_18059[(2)] = inst_17956);

(statearr_17997_18059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (8))){
var inst_17942 = cljs.core.async.close_BANG_.call(null,to);
var state_17973__$1 = state_17973;
var statearr_17998_18060 = state_17973__$1;
(statearr_17998_18060[(2)] = inst_17942);

(statearr_17998_18060[(1)] = (10));


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
});})(c__10732__auto__,jobs,results,process,async))
;
return ((function (switch__10667__auto__,c__10732__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_18002 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_18002[(1)] = (1));

return statearr_18002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17973){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18003){if((e18003 instanceof Object)){
var ex__10671__auto__ = e18003;
var statearr_18004_18061 = state_17973;
(statearr_18004_18061[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18062 = state_17973;
state_17973 = G__18062;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_18005 = f__10733__auto__.call(null);
(statearr_18005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto__,jobs,results,process,async))
);

return c__10732__auto__;
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
var args18063 = [];
var len__6152__auto___18066 = arguments.length;
var i__6153__auto___18067 = (0);
while(true){
if((i__6153__auto___18067 < len__6152__auto___18066)){
args18063.push((arguments[i__6153__auto___18067]));

var G__18068 = (i__6153__auto___18067 + (1));
i__6153__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var G__18065 = args18063.length;
switch (G__18065) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18063.length)].join('')));

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
var args18070 = [];
var len__6152__auto___18073 = arguments.length;
var i__6153__auto___18074 = (0);
while(true){
if((i__6153__auto___18074 < len__6152__auto___18073)){
args18070.push((arguments[i__6153__auto___18074]));

var G__18075 = (i__6153__auto___18074 + (1));
i__6153__auto___18074 = G__18075;
continue;
} else {
}
break;
}

var G__18072 = args18070.length;
switch (G__18072) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18070.length)].join('')));

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
var args18077 = [];
var len__6152__auto___18130 = arguments.length;
var i__6153__auto___18131 = (0);
while(true){
if((i__6153__auto___18131 < len__6152__auto___18130)){
args18077.push((arguments[i__6153__auto___18131]));

var G__18132 = (i__6153__auto___18131 + (1));
i__6153__auto___18131 = G__18132;
continue;
} else {
}
break;
}

var G__18079 = args18077.length;
switch (G__18079) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18077.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10732__auto___18134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18134,tc,fc){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18134,tc,fc){
return (function (state_18105){
var state_val_18106 = (state_18105[(1)]);
if((state_val_18106 === (7))){
var inst_18101 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
var statearr_18107_18135 = state_18105__$1;
(statearr_18107_18135[(2)] = inst_18101);

(statearr_18107_18135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (1))){
var state_18105__$1 = state_18105;
var statearr_18108_18136 = state_18105__$1;
(statearr_18108_18136[(2)] = null);

(statearr_18108_18136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (4))){
var inst_18082 = (state_18105[(7)]);
var inst_18082__$1 = (state_18105[(2)]);
var inst_18083 = (inst_18082__$1 == null);
var state_18105__$1 = (function (){var statearr_18109 = state_18105;
(statearr_18109[(7)] = inst_18082__$1);

return statearr_18109;
})();
if(cljs.core.truth_(inst_18083)){
var statearr_18110_18137 = state_18105__$1;
(statearr_18110_18137[(1)] = (5));

} else {
var statearr_18111_18138 = state_18105__$1;
(statearr_18111_18138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (13))){
var state_18105__$1 = state_18105;
var statearr_18112_18139 = state_18105__$1;
(statearr_18112_18139[(2)] = null);

(statearr_18112_18139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (6))){
var inst_18082 = (state_18105[(7)]);
var inst_18088 = p.call(null,inst_18082);
var state_18105__$1 = state_18105;
if(cljs.core.truth_(inst_18088)){
var statearr_18113_18140 = state_18105__$1;
(statearr_18113_18140[(1)] = (9));

} else {
var statearr_18114_18141 = state_18105__$1;
(statearr_18114_18141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (3))){
var inst_18103 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18105__$1,inst_18103);
} else {
if((state_val_18106 === (12))){
var state_18105__$1 = state_18105;
var statearr_18115_18142 = state_18105__$1;
(statearr_18115_18142[(2)] = null);

(statearr_18115_18142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (2))){
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18105__$1,(4),ch);
} else {
if((state_val_18106 === (11))){
var inst_18082 = (state_18105[(7)]);
var inst_18092 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18105__$1,(8),inst_18092,inst_18082);
} else {
if((state_val_18106 === (9))){
var state_18105__$1 = state_18105;
var statearr_18116_18143 = state_18105__$1;
(statearr_18116_18143[(2)] = tc);

(statearr_18116_18143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (5))){
var inst_18085 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18086 = cljs.core.async.close_BANG_.call(null,fc);
var state_18105__$1 = (function (){var statearr_18117 = state_18105;
(statearr_18117[(8)] = inst_18085);

return statearr_18117;
})();
var statearr_18118_18144 = state_18105__$1;
(statearr_18118_18144[(2)] = inst_18086);

(statearr_18118_18144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (14))){
var inst_18099 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
var statearr_18119_18145 = state_18105__$1;
(statearr_18119_18145[(2)] = inst_18099);

(statearr_18119_18145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (10))){
var state_18105__$1 = state_18105;
var statearr_18120_18146 = state_18105__$1;
(statearr_18120_18146[(2)] = fc);

(statearr_18120_18146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18106 === (8))){
var inst_18094 = (state_18105[(2)]);
var state_18105__$1 = state_18105;
if(cljs.core.truth_(inst_18094)){
var statearr_18121_18147 = state_18105__$1;
(statearr_18121_18147[(1)] = (12));

} else {
var statearr_18122_18148 = state_18105__$1;
(statearr_18122_18148[(1)] = (13));

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
});})(c__10732__auto___18134,tc,fc))
;
return ((function (switch__10667__auto__,c__10732__auto___18134,tc,fc){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_18126 = [null,null,null,null,null,null,null,null,null];
(statearr_18126[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_18126[(1)] = (1));

return statearr_18126;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_18105){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18127){if((e18127 instanceof Object)){
var ex__10671__auto__ = e18127;
var statearr_18128_18149 = state_18105;
(statearr_18128_18149[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18150 = state_18105;
state_18105 = G__18150;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_18105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_18105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18134,tc,fc))
})();
var state__10734__auto__ = (function (){var statearr_18129 = f__10733__auto__.call(null);
(statearr_18129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18134);

return statearr_18129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18134,tc,fc))
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
var c__10732__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto__){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto__){
return (function (state_18197){
var state_val_18198 = (state_18197[(1)]);
if((state_val_18198 === (1))){
var inst_18183 = init;
var state_18197__$1 = (function (){var statearr_18199 = state_18197;
(statearr_18199[(7)] = inst_18183);

return statearr_18199;
})();
var statearr_18200_18215 = state_18197__$1;
(statearr_18200_18215[(2)] = null);

(statearr_18200_18215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (2))){
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18197__$1,(4),ch);
} else {
if((state_val_18198 === (3))){
var inst_18195 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18197__$1,inst_18195);
} else {
if((state_val_18198 === (4))){
var inst_18186 = (state_18197[(8)]);
var inst_18186__$1 = (state_18197[(2)]);
var inst_18187 = (inst_18186__$1 == null);
var state_18197__$1 = (function (){var statearr_18201 = state_18197;
(statearr_18201[(8)] = inst_18186__$1);

return statearr_18201;
})();
if(cljs.core.truth_(inst_18187)){
var statearr_18202_18216 = state_18197__$1;
(statearr_18202_18216[(1)] = (5));

} else {
var statearr_18203_18217 = state_18197__$1;
(statearr_18203_18217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (5))){
var inst_18183 = (state_18197[(7)]);
var state_18197__$1 = state_18197;
var statearr_18204_18218 = state_18197__$1;
(statearr_18204_18218[(2)] = inst_18183);

(statearr_18204_18218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (6))){
var inst_18183 = (state_18197[(7)]);
var inst_18186 = (state_18197[(8)]);
var inst_18190 = f.call(null,inst_18183,inst_18186);
var inst_18183__$1 = inst_18190;
var state_18197__$1 = (function (){var statearr_18205 = state_18197;
(statearr_18205[(7)] = inst_18183__$1);

return statearr_18205;
})();
var statearr_18206_18219 = state_18197__$1;
(statearr_18206_18219[(2)] = null);

(statearr_18206_18219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (7))){
var inst_18193 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18207_18220 = state_18197__$1;
(statearr_18207_18220[(2)] = inst_18193);

(statearr_18207_18220[(1)] = (3));


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
});})(c__10732__auto__))
;
return ((function (switch__10667__auto__,c__10732__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10668__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10668__auto____0 = (function (){
var statearr_18211 = [null,null,null,null,null,null,null,null,null];
(statearr_18211[(0)] = cljs$core$async$reduce_$_state_machine__10668__auto__);

(statearr_18211[(1)] = (1));

return statearr_18211;
});
var cljs$core$async$reduce_$_state_machine__10668__auto____1 = (function (state_18197){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18212){if((e18212 instanceof Object)){
var ex__10671__auto__ = e18212;
var statearr_18213_18221 = state_18197;
(statearr_18213_18221[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18222 = state_18197;
state_18197 = G__18222;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10668__auto__ = function(state_18197){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10668__auto____1.call(this,state_18197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10668__auto____0;
cljs$core$async$reduce_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10668__auto____1;
return cljs$core$async$reduce_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_18214 = f__10733__auto__.call(null);
(statearr_18214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto__))
);

return c__10732__auto__;
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
var args18223 = [];
var len__6152__auto___18275 = arguments.length;
var i__6153__auto___18276 = (0);
while(true){
if((i__6153__auto___18276 < len__6152__auto___18275)){
args18223.push((arguments[i__6153__auto___18276]));

var G__18277 = (i__6153__auto___18276 + (1));
i__6153__auto___18276 = G__18277;
continue;
} else {
}
break;
}

var G__18225 = args18223.length;
switch (G__18225) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18223.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10732__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto__){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto__){
return (function (state_18250){
var state_val_18251 = (state_18250[(1)]);
if((state_val_18251 === (7))){
var inst_18232 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18252_18279 = state_18250__$1;
(statearr_18252_18279[(2)] = inst_18232);

(statearr_18252_18279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (1))){
var inst_18226 = cljs.core.seq.call(null,coll);
var inst_18227 = inst_18226;
var state_18250__$1 = (function (){var statearr_18253 = state_18250;
(statearr_18253[(7)] = inst_18227);

return statearr_18253;
})();
var statearr_18254_18280 = state_18250__$1;
(statearr_18254_18280[(2)] = null);

(statearr_18254_18280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (4))){
var inst_18227 = (state_18250[(7)]);
var inst_18230 = cljs.core.first.call(null,inst_18227);
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18250__$1,(7),ch,inst_18230);
} else {
if((state_val_18251 === (13))){
var inst_18244 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18255_18281 = state_18250__$1;
(statearr_18255_18281[(2)] = inst_18244);

(statearr_18255_18281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (6))){
var inst_18235 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
if(cljs.core.truth_(inst_18235)){
var statearr_18256_18282 = state_18250__$1;
(statearr_18256_18282[(1)] = (8));

} else {
var statearr_18257_18283 = state_18250__$1;
(statearr_18257_18283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (3))){
var inst_18248 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18250__$1,inst_18248);
} else {
if((state_val_18251 === (12))){
var state_18250__$1 = state_18250;
var statearr_18258_18284 = state_18250__$1;
(statearr_18258_18284[(2)] = null);

(statearr_18258_18284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (2))){
var inst_18227 = (state_18250[(7)]);
var state_18250__$1 = state_18250;
if(cljs.core.truth_(inst_18227)){
var statearr_18259_18285 = state_18250__$1;
(statearr_18259_18285[(1)] = (4));

} else {
var statearr_18260_18286 = state_18250__$1;
(statearr_18260_18286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (11))){
var inst_18241 = cljs.core.async.close_BANG_.call(null,ch);
var state_18250__$1 = state_18250;
var statearr_18261_18287 = state_18250__$1;
(statearr_18261_18287[(2)] = inst_18241);

(statearr_18261_18287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (9))){
var state_18250__$1 = state_18250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18262_18288 = state_18250__$1;
(statearr_18262_18288[(1)] = (11));

} else {
var statearr_18263_18289 = state_18250__$1;
(statearr_18263_18289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (5))){
var inst_18227 = (state_18250[(7)]);
var state_18250__$1 = state_18250;
var statearr_18264_18290 = state_18250__$1;
(statearr_18264_18290[(2)] = inst_18227);

(statearr_18264_18290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (10))){
var inst_18246 = (state_18250[(2)]);
var state_18250__$1 = state_18250;
var statearr_18265_18291 = state_18250__$1;
(statearr_18265_18291[(2)] = inst_18246);

(statearr_18265_18291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18251 === (8))){
var inst_18227 = (state_18250[(7)]);
var inst_18237 = cljs.core.next.call(null,inst_18227);
var inst_18227__$1 = inst_18237;
var state_18250__$1 = (function (){var statearr_18266 = state_18250;
(statearr_18266[(7)] = inst_18227__$1);

return statearr_18266;
})();
var statearr_18267_18292 = state_18250__$1;
(statearr_18267_18292[(2)] = null);

(statearr_18267_18292[(1)] = (2));


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
});})(c__10732__auto__))
;
return ((function (switch__10667__auto__,c__10732__auto__){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_18271 = [null,null,null,null,null,null,null,null];
(statearr_18271[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_18271[(1)] = (1));

return statearr_18271;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_18250){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18272){if((e18272 instanceof Object)){
var ex__10671__auto__ = e18272;
var statearr_18273_18293 = state_18250;
(statearr_18273_18293[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18294 = state_18250;
state_18250 = G__18294;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_18250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_18250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_18274 = f__10733__auto__.call(null);
(statearr_18274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto__))
);

return c__10732__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18516 = (function (mult,ch,cs,meta18517){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18517 = meta18517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18518,meta18517__$1){
var self__ = this;
var _18518__$1 = this;
return (new cljs.core.async.t_cljs$core$async18516(self__.mult,self__.ch,self__.cs,meta18517__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18518){
var self__ = this;
var _18518__$1 = this;
return self__.meta18517;
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18517","meta18517",-117196024,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18516";

cljs.core.async.t_cljs$core$async18516.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18516");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18516 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18516(mult__$1,ch__$1,cs__$1,meta18517){
return (new cljs.core.async.t_cljs$core$async18516(mult__$1,ch__$1,cs__$1,meta18517));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18516(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10732__auto___18737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18737,cs,m,dchan,dctr,done){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18737,cs,m,dchan,dctr,done){
return (function (state_18649){
var state_val_18650 = (state_18649[(1)]);
if((state_val_18650 === (7))){
var inst_18645 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18651_18738 = state_18649__$1;
(statearr_18651_18738[(2)] = inst_18645);

(statearr_18651_18738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (20))){
var inst_18550 = (state_18649[(7)]);
var inst_18560 = cljs.core.first.call(null,inst_18550);
var inst_18561 = cljs.core.nth.call(null,inst_18560,(0),null);
var inst_18562 = cljs.core.nth.call(null,inst_18560,(1),null);
var state_18649__$1 = (function (){var statearr_18652 = state_18649;
(statearr_18652[(8)] = inst_18561);

return statearr_18652;
})();
if(cljs.core.truth_(inst_18562)){
var statearr_18653_18739 = state_18649__$1;
(statearr_18653_18739[(1)] = (22));

} else {
var statearr_18654_18740 = state_18649__$1;
(statearr_18654_18740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (27))){
var inst_18521 = (state_18649[(9)]);
var inst_18592 = (state_18649[(10)]);
var inst_18597 = (state_18649[(11)]);
var inst_18590 = (state_18649[(12)]);
var inst_18597__$1 = cljs.core._nth.call(null,inst_18590,inst_18592);
var inst_18598 = cljs.core.async.put_BANG_.call(null,inst_18597__$1,inst_18521,done);
var state_18649__$1 = (function (){var statearr_18655 = state_18649;
(statearr_18655[(11)] = inst_18597__$1);

return statearr_18655;
})();
if(cljs.core.truth_(inst_18598)){
var statearr_18656_18741 = state_18649__$1;
(statearr_18656_18741[(1)] = (30));

} else {
var statearr_18657_18742 = state_18649__$1;
(statearr_18657_18742[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (1))){
var state_18649__$1 = state_18649;
var statearr_18658_18743 = state_18649__$1;
(statearr_18658_18743[(2)] = null);

(statearr_18658_18743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (24))){
var inst_18550 = (state_18649[(7)]);
var inst_18567 = (state_18649[(2)]);
var inst_18568 = cljs.core.next.call(null,inst_18550);
var inst_18530 = inst_18568;
var inst_18531 = null;
var inst_18532 = (0);
var inst_18533 = (0);
var state_18649__$1 = (function (){var statearr_18659 = state_18649;
(statearr_18659[(13)] = inst_18530);

(statearr_18659[(14)] = inst_18567);

(statearr_18659[(15)] = inst_18531);

(statearr_18659[(16)] = inst_18532);

(statearr_18659[(17)] = inst_18533);

return statearr_18659;
})();
var statearr_18660_18744 = state_18649__$1;
(statearr_18660_18744[(2)] = null);

(statearr_18660_18744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (39))){
var state_18649__$1 = state_18649;
var statearr_18664_18745 = state_18649__$1;
(statearr_18664_18745[(2)] = null);

(statearr_18664_18745[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (4))){
var inst_18521 = (state_18649[(9)]);
var inst_18521__$1 = (state_18649[(2)]);
var inst_18522 = (inst_18521__$1 == null);
var state_18649__$1 = (function (){var statearr_18665 = state_18649;
(statearr_18665[(9)] = inst_18521__$1);

return statearr_18665;
})();
if(cljs.core.truth_(inst_18522)){
var statearr_18666_18746 = state_18649__$1;
(statearr_18666_18746[(1)] = (5));

} else {
var statearr_18667_18747 = state_18649__$1;
(statearr_18667_18747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (15))){
var inst_18530 = (state_18649[(13)]);
var inst_18531 = (state_18649[(15)]);
var inst_18532 = (state_18649[(16)]);
var inst_18533 = (state_18649[(17)]);
var inst_18546 = (state_18649[(2)]);
var inst_18547 = (inst_18533 + (1));
var tmp18661 = inst_18530;
var tmp18662 = inst_18531;
var tmp18663 = inst_18532;
var inst_18530__$1 = tmp18661;
var inst_18531__$1 = tmp18662;
var inst_18532__$1 = tmp18663;
var inst_18533__$1 = inst_18547;
var state_18649__$1 = (function (){var statearr_18668 = state_18649;
(statearr_18668[(13)] = inst_18530__$1);

(statearr_18668[(15)] = inst_18531__$1);

(statearr_18668[(18)] = inst_18546);

(statearr_18668[(16)] = inst_18532__$1);

(statearr_18668[(17)] = inst_18533__$1);

return statearr_18668;
})();
var statearr_18669_18748 = state_18649__$1;
(statearr_18669_18748[(2)] = null);

(statearr_18669_18748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (21))){
var inst_18571 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18673_18749 = state_18649__$1;
(statearr_18673_18749[(2)] = inst_18571);

(statearr_18673_18749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (31))){
var inst_18597 = (state_18649[(11)]);
var inst_18601 = done.call(null,null);
var inst_18602 = cljs.core.async.untap_STAR_.call(null,m,inst_18597);
var state_18649__$1 = (function (){var statearr_18674 = state_18649;
(statearr_18674[(19)] = inst_18601);

return statearr_18674;
})();
var statearr_18675_18750 = state_18649__$1;
(statearr_18675_18750[(2)] = inst_18602);

(statearr_18675_18750[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (32))){
var inst_18589 = (state_18649[(20)]);
var inst_18592 = (state_18649[(10)]);
var inst_18591 = (state_18649[(21)]);
var inst_18590 = (state_18649[(12)]);
var inst_18604 = (state_18649[(2)]);
var inst_18605 = (inst_18592 + (1));
var tmp18670 = inst_18589;
var tmp18671 = inst_18591;
var tmp18672 = inst_18590;
var inst_18589__$1 = tmp18670;
var inst_18590__$1 = tmp18672;
var inst_18591__$1 = tmp18671;
var inst_18592__$1 = inst_18605;
var state_18649__$1 = (function (){var statearr_18676 = state_18649;
(statearr_18676[(20)] = inst_18589__$1);

(statearr_18676[(10)] = inst_18592__$1);

(statearr_18676[(21)] = inst_18591__$1);

(statearr_18676[(22)] = inst_18604);

(statearr_18676[(12)] = inst_18590__$1);

return statearr_18676;
})();
var statearr_18677_18751 = state_18649__$1;
(statearr_18677_18751[(2)] = null);

(statearr_18677_18751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (40))){
var inst_18617 = (state_18649[(23)]);
var inst_18621 = done.call(null,null);
var inst_18622 = cljs.core.async.untap_STAR_.call(null,m,inst_18617);
var state_18649__$1 = (function (){var statearr_18678 = state_18649;
(statearr_18678[(24)] = inst_18621);

return statearr_18678;
})();
var statearr_18679_18752 = state_18649__$1;
(statearr_18679_18752[(2)] = inst_18622);

(statearr_18679_18752[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (33))){
var inst_18608 = (state_18649[(25)]);
var inst_18610 = cljs.core.chunked_seq_QMARK_.call(null,inst_18608);
var state_18649__$1 = state_18649;
if(inst_18610){
var statearr_18680_18753 = state_18649__$1;
(statearr_18680_18753[(1)] = (36));

} else {
var statearr_18681_18754 = state_18649__$1;
(statearr_18681_18754[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (13))){
var inst_18540 = (state_18649[(26)]);
var inst_18543 = cljs.core.async.close_BANG_.call(null,inst_18540);
var state_18649__$1 = state_18649;
var statearr_18682_18755 = state_18649__$1;
(statearr_18682_18755[(2)] = inst_18543);

(statearr_18682_18755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (22))){
var inst_18561 = (state_18649[(8)]);
var inst_18564 = cljs.core.async.close_BANG_.call(null,inst_18561);
var state_18649__$1 = state_18649;
var statearr_18683_18756 = state_18649__$1;
(statearr_18683_18756[(2)] = inst_18564);

(statearr_18683_18756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (36))){
var inst_18608 = (state_18649[(25)]);
var inst_18612 = cljs.core.chunk_first.call(null,inst_18608);
var inst_18613 = cljs.core.chunk_rest.call(null,inst_18608);
var inst_18614 = cljs.core.count.call(null,inst_18612);
var inst_18589 = inst_18613;
var inst_18590 = inst_18612;
var inst_18591 = inst_18614;
var inst_18592 = (0);
var state_18649__$1 = (function (){var statearr_18684 = state_18649;
(statearr_18684[(20)] = inst_18589);

(statearr_18684[(10)] = inst_18592);

(statearr_18684[(21)] = inst_18591);

(statearr_18684[(12)] = inst_18590);

return statearr_18684;
})();
var statearr_18685_18757 = state_18649__$1;
(statearr_18685_18757[(2)] = null);

(statearr_18685_18757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (41))){
var inst_18608 = (state_18649[(25)]);
var inst_18624 = (state_18649[(2)]);
var inst_18625 = cljs.core.next.call(null,inst_18608);
var inst_18589 = inst_18625;
var inst_18590 = null;
var inst_18591 = (0);
var inst_18592 = (0);
var state_18649__$1 = (function (){var statearr_18686 = state_18649;
(statearr_18686[(20)] = inst_18589);

(statearr_18686[(10)] = inst_18592);

(statearr_18686[(21)] = inst_18591);

(statearr_18686[(27)] = inst_18624);

(statearr_18686[(12)] = inst_18590);

return statearr_18686;
})();
var statearr_18687_18758 = state_18649__$1;
(statearr_18687_18758[(2)] = null);

(statearr_18687_18758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (43))){
var state_18649__$1 = state_18649;
var statearr_18688_18759 = state_18649__$1;
(statearr_18688_18759[(2)] = null);

(statearr_18688_18759[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (29))){
var inst_18633 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18689_18760 = state_18649__$1;
(statearr_18689_18760[(2)] = inst_18633);

(statearr_18689_18760[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (44))){
var inst_18642 = (state_18649[(2)]);
var state_18649__$1 = (function (){var statearr_18690 = state_18649;
(statearr_18690[(28)] = inst_18642);

return statearr_18690;
})();
var statearr_18691_18761 = state_18649__$1;
(statearr_18691_18761[(2)] = null);

(statearr_18691_18761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (6))){
var inst_18581 = (state_18649[(29)]);
var inst_18580 = cljs.core.deref.call(null,cs);
var inst_18581__$1 = cljs.core.keys.call(null,inst_18580);
var inst_18582 = cljs.core.count.call(null,inst_18581__$1);
var inst_18583 = cljs.core.reset_BANG_.call(null,dctr,inst_18582);
var inst_18588 = cljs.core.seq.call(null,inst_18581__$1);
var inst_18589 = inst_18588;
var inst_18590 = null;
var inst_18591 = (0);
var inst_18592 = (0);
var state_18649__$1 = (function (){var statearr_18692 = state_18649;
(statearr_18692[(29)] = inst_18581__$1);

(statearr_18692[(20)] = inst_18589);

(statearr_18692[(10)] = inst_18592);

(statearr_18692[(21)] = inst_18591);

(statearr_18692[(30)] = inst_18583);

(statearr_18692[(12)] = inst_18590);

return statearr_18692;
})();
var statearr_18693_18762 = state_18649__$1;
(statearr_18693_18762[(2)] = null);

(statearr_18693_18762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (28))){
var inst_18608 = (state_18649[(25)]);
var inst_18589 = (state_18649[(20)]);
var inst_18608__$1 = cljs.core.seq.call(null,inst_18589);
var state_18649__$1 = (function (){var statearr_18694 = state_18649;
(statearr_18694[(25)] = inst_18608__$1);

return statearr_18694;
})();
if(inst_18608__$1){
var statearr_18695_18763 = state_18649__$1;
(statearr_18695_18763[(1)] = (33));

} else {
var statearr_18696_18764 = state_18649__$1;
(statearr_18696_18764[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (25))){
var inst_18592 = (state_18649[(10)]);
var inst_18591 = (state_18649[(21)]);
var inst_18594 = (inst_18592 < inst_18591);
var inst_18595 = inst_18594;
var state_18649__$1 = state_18649;
if(cljs.core.truth_(inst_18595)){
var statearr_18697_18765 = state_18649__$1;
(statearr_18697_18765[(1)] = (27));

} else {
var statearr_18698_18766 = state_18649__$1;
(statearr_18698_18766[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (34))){
var state_18649__$1 = state_18649;
var statearr_18699_18767 = state_18649__$1;
(statearr_18699_18767[(2)] = null);

(statearr_18699_18767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (17))){
var state_18649__$1 = state_18649;
var statearr_18700_18768 = state_18649__$1;
(statearr_18700_18768[(2)] = null);

(statearr_18700_18768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (3))){
var inst_18647 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18649__$1,inst_18647);
} else {
if((state_val_18650 === (12))){
var inst_18576 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18701_18769 = state_18649__$1;
(statearr_18701_18769[(2)] = inst_18576);

(statearr_18701_18769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (2))){
var state_18649__$1 = state_18649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18649__$1,(4),ch);
} else {
if((state_val_18650 === (23))){
var state_18649__$1 = state_18649;
var statearr_18702_18770 = state_18649__$1;
(statearr_18702_18770[(2)] = null);

(statearr_18702_18770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (35))){
var inst_18631 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18703_18771 = state_18649__$1;
(statearr_18703_18771[(2)] = inst_18631);

(statearr_18703_18771[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (19))){
var inst_18550 = (state_18649[(7)]);
var inst_18554 = cljs.core.chunk_first.call(null,inst_18550);
var inst_18555 = cljs.core.chunk_rest.call(null,inst_18550);
var inst_18556 = cljs.core.count.call(null,inst_18554);
var inst_18530 = inst_18555;
var inst_18531 = inst_18554;
var inst_18532 = inst_18556;
var inst_18533 = (0);
var state_18649__$1 = (function (){var statearr_18704 = state_18649;
(statearr_18704[(13)] = inst_18530);

(statearr_18704[(15)] = inst_18531);

(statearr_18704[(16)] = inst_18532);

(statearr_18704[(17)] = inst_18533);

return statearr_18704;
})();
var statearr_18705_18772 = state_18649__$1;
(statearr_18705_18772[(2)] = null);

(statearr_18705_18772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (11))){
var inst_18530 = (state_18649[(13)]);
var inst_18550 = (state_18649[(7)]);
var inst_18550__$1 = cljs.core.seq.call(null,inst_18530);
var state_18649__$1 = (function (){var statearr_18706 = state_18649;
(statearr_18706[(7)] = inst_18550__$1);

return statearr_18706;
})();
if(inst_18550__$1){
var statearr_18707_18773 = state_18649__$1;
(statearr_18707_18773[(1)] = (16));

} else {
var statearr_18708_18774 = state_18649__$1;
(statearr_18708_18774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (9))){
var inst_18578 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18709_18775 = state_18649__$1;
(statearr_18709_18775[(2)] = inst_18578);

(statearr_18709_18775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (5))){
var inst_18528 = cljs.core.deref.call(null,cs);
var inst_18529 = cljs.core.seq.call(null,inst_18528);
var inst_18530 = inst_18529;
var inst_18531 = null;
var inst_18532 = (0);
var inst_18533 = (0);
var state_18649__$1 = (function (){var statearr_18710 = state_18649;
(statearr_18710[(13)] = inst_18530);

(statearr_18710[(15)] = inst_18531);

(statearr_18710[(16)] = inst_18532);

(statearr_18710[(17)] = inst_18533);

return statearr_18710;
})();
var statearr_18711_18776 = state_18649__$1;
(statearr_18711_18776[(2)] = null);

(statearr_18711_18776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (14))){
var state_18649__$1 = state_18649;
var statearr_18712_18777 = state_18649__$1;
(statearr_18712_18777[(2)] = null);

(statearr_18712_18777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (45))){
var inst_18639 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18713_18778 = state_18649__$1;
(statearr_18713_18778[(2)] = inst_18639);

(statearr_18713_18778[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (26))){
var inst_18581 = (state_18649[(29)]);
var inst_18635 = (state_18649[(2)]);
var inst_18636 = cljs.core.seq.call(null,inst_18581);
var state_18649__$1 = (function (){var statearr_18714 = state_18649;
(statearr_18714[(31)] = inst_18635);

return statearr_18714;
})();
if(inst_18636){
var statearr_18715_18779 = state_18649__$1;
(statearr_18715_18779[(1)] = (42));

} else {
var statearr_18716_18780 = state_18649__$1;
(statearr_18716_18780[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (16))){
var inst_18550 = (state_18649[(7)]);
var inst_18552 = cljs.core.chunked_seq_QMARK_.call(null,inst_18550);
var state_18649__$1 = state_18649;
if(inst_18552){
var statearr_18717_18781 = state_18649__$1;
(statearr_18717_18781[(1)] = (19));

} else {
var statearr_18718_18782 = state_18649__$1;
(statearr_18718_18782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (38))){
var inst_18628 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18719_18783 = state_18649__$1;
(statearr_18719_18783[(2)] = inst_18628);

(statearr_18719_18783[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (30))){
var state_18649__$1 = state_18649;
var statearr_18720_18784 = state_18649__$1;
(statearr_18720_18784[(2)] = null);

(statearr_18720_18784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (10))){
var inst_18531 = (state_18649[(15)]);
var inst_18533 = (state_18649[(17)]);
var inst_18539 = cljs.core._nth.call(null,inst_18531,inst_18533);
var inst_18540 = cljs.core.nth.call(null,inst_18539,(0),null);
var inst_18541 = cljs.core.nth.call(null,inst_18539,(1),null);
var state_18649__$1 = (function (){var statearr_18721 = state_18649;
(statearr_18721[(26)] = inst_18540);

return statearr_18721;
})();
if(cljs.core.truth_(inst_18541)){
var statearr_18722_18785 = state_18649__$1;
(statearr_18722_18785[(1)] = (13));

} else {
var statearr_18723_18786 = state_18649__$1;
(statearr_18723_18786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (18))){
var inst_18574 = (state_18649[(2)]);
var state_18649__$1 = state_18649;
var statearr_18724_18787 = state_18649__$1;
(statearr_18724_18787[(2)] = inst_18574);

(statearr_18724_18787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (42))){
var state_18649__$1 = state_18649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18649__$1,(45),dchan);
} else {
if((state_val_18650 === (37))){
var inst_18608 = (state_18649[(25)]);
var inst_18521 = (state_18649[(9)]);
var inst_18617 = (state_18649[(23)]);
var inst_18617__$1 = cljs.core.first.call(null,inst_18608);
var inst_18618 = cljs.core.async.put_BANG_.call(null,inst_18617__$1,inst_18521,done);
var state_18649__$1 = (function (){var statearr_18725 = state_18649;
(statearr_18725[(23)] = inst_18617__$1);

return statearr_18725;
})();
if(cljs.core.truth_(inst_18618)){
var statearr_18726_18788 = state_18649__$1;
(statearr_18726_18788[(1)] = (39));

} else {
var statearr_18727_18789 = state_18649__$1;
(statearr_18727_18789[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18650 === (8))){
var inst_18532 = (state_18649[(16)]);
var inst_18533 = (state_18649[(17)]);
var inst_18535 = (inst_18533 < inst_18532);
var inst_18536 = inst_18535;
var state_18649__$1 = state_18649;
if(cljs.core.truth_(inst_18536)){
var statearr_18728_18790 = state_18649__$1;
(statearr_18728_18790[(1)] = (10));

} else {
var statearr_18729_18791 = state_18649__$1;
(statearr_18729_18791[(1)] = (11));

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
});})(c__10732__auto___18737,cs,m,dchan,dctr,done))
;
return ((function (switch__10667__auto__,c__10732__auto___18737,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10668__auto__ = null;
var cljs$core$async$mult_$_state_machine__10668__auto____0 = (function (){
var statearr_18733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18733[(0)] = cljs$core$async$mult_$_state_machine__10668__auto__);

(statearr_18733[(1)] = (1));

return statearr_18733;
});
var cljs$core$async$mult_$_state_machine__10668__auto____1 = (function (state_18649){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18734){if((e18734 instanceof Object)){
var ex__10671__auto__ = e18734;
var statearr_18735_18792 = state_18649;
(statearr_18735_18792[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18793 = state_18649;
state_18649 = G__18793;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10668__auto__ = function(state_18649){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10668__auto____1.call(this,state_18649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10668__auto____0;
cljs$core$async$mult_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10668__auto____1;
return cljs$core$async$mult_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18737,cs,m,dchan,dctr,done))
})();
var state__10734__auto__ = (function (){var statearr_18736 = f__10733__auto__.call(null);
(statearr_18736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18737);

return statearr_18736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18737,cs,m,dchan,dctr,done))
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
var args18794 = [];
var len__6152__auto___18797 = arguments.length;
var i__6153__auto___18798 = (0);
while(true){
if((i__6153__auto___18798 < len__6152__auto___18797)){
args18794.push((arguments[i__6153__auto___18798]));

var G__18799 = (i__6153__auto___18798 + (1));
i__6153__auto___18798 = G__18799;
continue;
} else {
}
break;
}

var G__18796 = args18794.length;
switch (G__18796) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18794.length)].join('')));

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
var len__6152__auto___18811 = arguments.length;
var i__6153__auto___18812 = (0);
while(true){
if((i__6153__auto___18812 < len__6152__auto___18811)){
args__6159__auto__.push((arguments[i__6153__auto___18812]));

var G__18813 = (i__6153__auto___18812 + (1));
i__6153__auto___18812 = G__18813;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18805){
var map__18806 = p__18805;
var map__18806__$1 = ((((!((map__18806 == null)))?((((map__18806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18806):map__18806);
var opts = map__18806__$1;
var statearr_18808_18814 = state;
(statearr_18808_18814[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18806,map__18806__$1,opts){
return (function (val){
var statearr_18809_18815 = state;
(statearr_18809_18815[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18806,map__18806__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18810_18816 = state;
(statearr_18810_18816[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18801){
var G__18802 = cljs.core.first.call(null,seq18801);
var seq18801__$1 = cljs.core.next.call(null,seq18801);
var G__18803 = cljs.core.first.call(null,seq18801__$1);
var seq18801__$2 = cljs.core.next.call(null,seq18801__$1);
var G__18804 = cljs.core.first.call(null,seq18801__$2);
var seq18801__$3 = cljs.core.next.call(null,seq18801__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18802,G__18803,G__18804,seq18801__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18980 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18981){
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
this.meta18981 = meta18981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18982,meta18981__$1){
var self__ = this;
var _18982__$1 = this;
return (new cljs.core.async.t_cljs$core$async18980(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18981__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18982){
var self__ = this;
var _18982__$1 = this;
return self__.meta18981;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18980.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18981","meta18981",-1448114367,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18980";

cljs.core.async.t_cljs$core$async18980.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18980");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18980 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18981){
return (new cljs.core.async.t_cljs$core$async18980(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18981));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18980(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10732__auto___19143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19080){
var state_val_19081 = (state_19080[(1)]);
if((state_val_19081 === (7))){
var inst_18998 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19082_19144 = state_19080__$1;
(statearr_19082_19144[(2)] = inst_18998);

(statearr_19082_19144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (20))){
var inst_19010 = (state_19080[(7)]);
var state_19080__$1 = state_19080;
var statearr_19083_19145 = state_19080__$1;
(statearr_19083_19145[(2)] = inst_19010);

(statearr_19083_19145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (27))){
var state_19080__$1 = state_19080;
var statearr_19084_19146 = state_19080__$1;
(statearr_19084_19146[(2)] = null);

(statearr_19084_19146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (1))){
var inst_18986 = (state_19080[(8)]);
var inst_18986__$1 = calc_state.call(null);
var inst_18988 = (inst_18986__$1 == null);
var inst_18989 = cljs.core.not.call(null,inst_18988);
var state_19080__$1 = (function (){var statearr_19085 = state_19080;
(statearr_19085[(8)] = inst_18986__$1);

return statearr_19085;
})();
if(inst_18989){
var statearr_19086_19147 = state_19080__$1;
(statearr_19086_19147[(1)] = (2));

} else {
var statearr_19087_19148 = state_19080__$1;
(statearr_19087_19148[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (24))){
var inst_19054 = (state_19080[(9)]);
var inst_19040 = (state_19080[(10)]);
var inst_19033 = (state_19080[(11)]);
var inst_19054__$1 = inst_19033.call(null,inst_19040);
var state_19080__$1 = (function (){var statearr_19088 = state_19080;
(statearr_19088[(9)] = inst_19054__$1);

return statearr_19088;
})();
if(cljs.core.truth_(inst_19054__$1)){
var statearr_19089_19149 = state_19080__$1;
(statearr_19089_19149[(1)] = (29));

} else {
var statearr_19090_19150 = state_19080__$1;
(statearr_19090_19150[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (4))){
var inst_19001 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19001)){
var statearr_19091_19151 = state_19080__$1;
(statearr_19091_19151[(1)] = (8));

} else {
var statearr_19092_19152 = state_19080__$1;
(statearr_19092_19152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (15))){
var inst_19027 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19027)){
var statearr_19093_19153 = state_19080__$1;
(statearr_19093_19153[(1)] = (19));

} else {
var statearr_19094_19154 = state_19080__$1;
(statearr_19094_19154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (21))){
var inst_19032 = (state_19080[(12)]);
var inst_19032__$1 = (state_19080[(2)]);
var inst_19033 = cljs.core.get.call(null,inst_19032__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19034 = cljs.core.get.call(null,inst_19032__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19035 = cljs.core.get.call(null,inst_19032__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19080__$1 = (function (){var statearr_19095 = state_19080;
(statearr_19095[(13)] = inst_19034);

(statearr_19095[(12)] = inst_19032__$1);

(statearr_19095[(11)] = inst_19033);

return statearr_19095;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19080__$1,(22),inst_19035);
} else {
if((state_val_19081 === (31))){
var inst_19062 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19062)){
var statearr_19096_19155 = state_19080__$1;
(statearr_19096_19155[(1)] = (32));

} else {
var statearr_19097_19156 = state_19080__$1;
(statearr_19097_19156[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (32))){
var inst_19039 = (state_19080[(14)]);
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19080__$1,(35),out,inst_19039);
} else {
if((state_val_19081 === (33))){
var inst_19032 = (state_19080[(12)]);
var inst_19010 = inst_19032;
var state_19080__$1 = (function (){var statearr_19098 = state_19080;
(statearr_19098[(7)] = inst_19010);

return statearr_19098;
})();
var statearr_19099_19157 = state_19080__$1;
(statearr_19099_19157[(2)] = null);

(statearr_19099_19157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (13))){
var inst_19010 = (state_19080[(7)]);
var inst_19017 = inst_19010.cljs$lang$protocol_mask$partition0$;
var inst_19018 = (inst_19017 & (64));
var inst_19019 = inst_19010.cljs$core$ISeq$;
var inst_19020 = (inst_19018) || (inst_19019);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19020)){
var statearr_19100_19158 = state_19080__$1;
(statearr_19100_19158[(1)] = (16));

} else {
var statearr_19101_19159 = state_19080__$1;
(statearr_19101_19159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (22))){
var inst_19039 = (state_19080[(14)]);
var inst_19040 = (state_19080[(10)]);
var inst_19038 = (state_19080[(2)]);
var inst_19039__$1 = cljs.core.nth.call(null,inst_19038,(0),null);
var inst_19040__$1 = cljs.core.nth.call(null,inst_19038,(1),null);
var inst_19041 = (inst_19039__$1 == null);
var inst_19042 = cljs.core._EQ_.call(null,inst_19040__$1,change);
var inst_19043 = (inst_19041) || (inst_19042);
var state_19080__$1 = (function (){var statearr_19102 = state_19080;
(statearr_19102[(14)] = inst_19039__$1);

(statearr_19102[(10)] = inst_19040__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19043)){
var statearr_19103_19160 = state_19080__$1;
(statearr_19103_19160[(1)] = (23));

} else {
var statearr_19104_19161 = state_19080__$1;
(statearr_19104_19161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (36))){
var inst_19032 = (state_19080[(12)]);
var inst_19010 = inst_19032;
var state_19080__$1 = (function (){var statearr_19105 = state_19080;
(statearr_19105[(7)] = inst_19010);

return statearr_19105;
})();
var statearr_19106_19162 = state_19080__$1;
(statearr_19106_19162[(2)] = null);

(statearr_19106_19162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (29))){
var inst_19054 = (state_19080[(9)]);
var state_19080__$1 = state_19080;
var statearr_19107_19163 = state_19080__$1;
(statearr_19107_19163[(2)] = inst_19054);

(statearr_19107_19163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (6))){
var state_19080__$1 = state_19080;
var statearr_19108_19164 = state_19080__$1;
(statearr_19108_19164[(2)] = false);

(statearr_19108_19164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (28))){
var inst_19050 = (state_19080[(2)]);
var inst_19051 = calc_state.call(null);
var inst_19010 = inst_19051;
var state_19080__$1 = (function (){var statearr_19109 = state_19080;
(statearr_19109[(15)] = inst_19050);

(statearr_19109[(7)] = inst_19010);

return statearr_19109;
})();
var statearr_19110_19165 = state_19080__$1;
(statearr_19110_19165[(2)] = null);

(statearr_19110_19165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (25))){
var inst_19076 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19111_19166 = state_19080__$1;
(statearr_19111_19166[(2)] = inst_19076);

(statearr_19111_19166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (34))){
var inst_19074 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19112_19167 = state_19080__$1;
(statearr_19112_19167[(2)] = inst_19074);

(statearr_19112_19167[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (17))){
var state_19080__$1 = state_19080;
var statearr_19113_19168 = state_19080__$1;
(statearr_19113_19168[(2)] = false);

(statearr_19113_19168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (3))){
var state_19080__$1 = state_19080;
var statearr_19114_19169 = state_19080__$1;
(statearr_19114_19169[(2)] = false);

(statearr_19114_19169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (12))){
var inst_19078 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19080__$1,inst_19078);
} else {
if((state_val_19081 === (2))){
var inst_18986 = (state_19080[(8)]);
var inst_18991 = inst_18986.cljs$lang$protocol_mask$partition0$;
var inst_18992 = (inst_18991 & (64));
var inst_18993 = inst_18986.cljs$core$ISeq$;
var inst_18994 = (inst_18992) || (inst_18993);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_18994)){
var statearr_19115_19170 = state_19080__$1;
(statearr_19115_19170[(1)] = (5));

} else {
var statearr_19116_19171 = state_19080__$1;
(statearr_19116_19171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (23))){
var inst_19039 = (state_19080[(14)]);
var inst_19045 = (inst_19039 == null);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19045)){
var statearr_19117_19172 = state_19080__$1;
(statearr_19117_19172[(1)] = (26));

} else {
var statearr_19118_19173 = state_19080__$1;
(statearr_19118_19173[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (35))){
var inst_19065 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
if(cljs.core.truth_(inst_19065)){
var statearr_19119_19174 = state_19080__$1;
(statearr_19119_19174[(1)] = (36));

} else {
var statearr_19120_19175 = state_19080__$1;
(statearr_19120_19175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (19))){
var inst_19010 = (state_19080[(7)]);
var inst_19029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19010);
var state_19080__$1 = state_19080;
var statearr_19121_19176 = state_19080__$1;
(statearr_19121_19176[(2)] = inst_19029);

(statearr_19121_19176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (11))){
var inst_19010 = (state_19080[(7)]);
var inst_19014 = (inst_19010 == null);
var inst_19015 = cljs.core.not.call(null,inst_19014);
var state_19080__$1 = state_19080;
if(inst_19015){
var statearr_19122_19177 = state_19080__$1;
(statearr_19122_19177[(1)] = (13));

} else {
var statearr_19123_19178 = state_19080__$1;
(statearr_19123_19178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (9))){
var inst_18986 = (state_19080[(8)]);
var state_19080__$1 = state_19080;
var statearr_19124_19179 = state_19080__$1;
(statearr_19124_19179[(2)] = inst_18986);

(statearr_19124_19179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (5))){
var state_19080__$1 = state_19080;
var statearr_19125_19180 = state_19080__$1;
(statearr_19125_19180[(2)] = true);

(statearr_19125_19180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (14))){
var state_19080__$1 = state_19080;
var statearr_19126_19181 = state_19080__$1;
(statearr_19126_19181[(2)] = false);

(statearr_19126_19181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (26))){
var inst_19040 = (state_19080[(10)]);
var inst_19047 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19040);
var state_19080__$1 = state_19080;
var statearr_19127_19182 = state_19080__$1;
(statearr_19127_19182[(2)] = inst_19047);

(statearr_19127_19182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (16))){
var state_19080__$1 = state_19080;
var statearr_19128_19183 = state_19080__$1;
(statearr_19128_19183[(2)] = true);

(statearr_19128_19183[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (38))){
var inst_19070 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19129_19184 = state_19080__$1;
(statearr_19129_19184[(2)] = inst_19070);

(statearr_19129_19184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (30))){
var inst_19034 = (state_19080[(13)]);
var inst_19040 = (state_19080[(10)]);
var inst_19033 = (state_19080[(11)]);
var inst_19057 = cljs.core.empty_QMARK_.call(null,inst_19033);
var inst_19058 = inst_19034.call(null,inst_19040);
var inst_19059 = cljs.core.not.call(null,inst_19058);
var inst_19060 = (inst_19057) && (inst_19059);
var state_19080__$1 = state_19080;
var statearr_19130_19185 = state_19080__$1;
(statearr_19130_19185[(2)] = inst_19060);

(statearr_19130_19185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (10))){
var inst_18986 = (state_19080[(8)]);
var inst_19006 = (state_19080[(2)]);
var inst_19007 = cljs.core.get.call(null,inst_19006,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19008 = cljs.core.get.call(null,inst_19006,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19009 = cljs.core.get.call(null,inst_19006,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19010 = inst_18986;
var state_19080__$1 = (function (){var statearr_19131 = state_19080;
(statearr_19131[(16)] = inst_19007);

(statearr_19131[(17)] = inst_19008);

(statearr_19131[(18)] = inst_19009);

(statearr_19131[(7)] = inst_19010);

return statearr_19131;
})();
var statearr_19132_19186 = state_19080__$1;
(statearr_19132_19186[(2)] = null);

(statearr_19132_19186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (18))){
var inst_19024 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
var statearr_19133_19187 = state_19080__$1;
(statearr_19133_19187[(2)] = inst_19024);

(statearr_19133_19187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (37))){
var state_19080__$1 = state_19080;
var statearr_19134_19188 = state_19080__$1;
(statearr_19134_19188[(2)] = null);

(statearr_19134_19188[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19081 === (8))){
var inst_18986 = (state_19080[(8)]);
var inst_19003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18986);
var state_19080__$1 = state_19080;
var statearr_19135_19189 = state_19080__$1;
(statearr_19135_19189[(2)] = inst_19003);

(statearr_19135_19189[(1)] = (10));


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
});})(c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10667__auto__,c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10668__auto__ = null;
var cljs$core$async$mix_$_state_machine__10668__auto____0 = (function (){
var statearr_19139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19139[(0)] = cljs$core$async$mix_$_state_machine__10668__auto__);

(statearr_19139[(1)] = (1));

return statearr_19139;
});
var cljs$core$async$mix_$_state_machine__10668__auto____1 = (function (state_19080){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19140){if((e19140 instanceof Object)){
var ex__10671__auto__ = e19140;
var statearr_19141_19190 = state_19080;
(statearr_19141_19190[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19191 = state_19080;
state_19080 = G__19191;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10668__auto__ = function(state_19080){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10668__auto____1.call(this,state_19080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10668__auto____0;
cljs$core$async$mix_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10668__auto____1;
return cljs$core$async$mix_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10734__auto__ = (function (){var statearr_19142 = f__10733__auto__.call(null);
(statearr_19142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19143);

return statearr_19142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19192 = [];
var len__6152__auto___19195 = arguments.length;
var i__6153__auto___19196 = (0);
while(true){
if((i__6153__auto___19196 < len__6152__auto___19195)){
args19192.push((arguments[i__6153__auto___19196]));

var G__19197 = (i__6153__auto___19196 + (1));
i__6153__auto___19196 = G__19197;
continue;
} else {
}
break;
}

var G__19194 = args19192.length;
switch (G__19194) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19192.length)].join('')));

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
var args19200 = [];
var len__6152__auto___19325 = arguments.length;
var i__6153__auto___19326 = (0);
while(true){
if((i__6153__auto___19326 < len__6152__auto___19325)){
args19200.push((arguments[i__6153__auto___19326]));

var G__19327 = (i__6153__auto___19326 + (1));
i__6153__auto___19326 = G__19327;
continue;
} else {
}
break;
}

var G__19202 = args19200.length;
switch (G__19202) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19200.length)].join('')));

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
return (function (p1__19199_SHARP_){
if(cljs.core.truth_(p1__19199_SHARP_.call(null,topic))){
return p1__19199_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19199_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19203 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19204){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19204 = meta19204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19205,meta19204__$1){
var self__ = this;
var _19205__$1 = this;
return (new cljs.core.async.t_cljs$core$async19203(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19204__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19205){
var self__ = this;
var _19205__$1 = this;
return self__.meta19204;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19204","meta19204",-1740953925,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19203";

cljs.core.async.t_cljs$core$async19203.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19203");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19203 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19204){
return (new cljs.core.async.t_cljs$core$async19203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19204));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19203(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10732__auto___19329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19329,mults,ensure_mult,p){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19329,mults,ensure_mult,p){
return (function (state_19277){
var state_val_19278 = (state_19277[(1)]);
if((state_val_19278 === (7))){
var inst_19273 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19279_19330 = state_19277__$1;
(statearr_19279_19330[(2)] = inst_19273);

(statearr_19279_19330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (20))){
var state_19277__$1 = state_19277;
var statearr_19280_19331 = state_19277__$1;
(statearr_19280_19331[(2)] = null);

(statearr_19280_19331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (1))){
var state_19277__$1 = state_19277;
var statearr_19281_19332 = state_19277__$1;
(statearr_19281_19332[(2)] = null);

(statearr_19281_19332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (24))){
var inst_19256 = (state_19277[(7)]);
var inst_19265 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19256);
var state_19277__$1 = state_19277;
var statearr_19282_19333 = state_19277__$1;
(statearr_19282_19333[(2)] = inst_19265);

(statearr_19282_19333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (4))){
var inst_19208 = (state_19277[(8)]);
var inst_19208__$1 = (state_19277[(2)]);
var inst_19209 = (inst_19208__$1 == null);
var state_19277__$1 = (function (){var statearr_19283 = state_19277;
(statearr_19283[(8)] = inst_19208__$1);

return statearr_19283;
})();
if(cljs.core.truth_(inst_19209)){
var statearr_19284_19334 = state_19277__$1;
(statearr_19284_19334[(1)] = (5));

} else {
var statearr_19285_19335 = state_19277__$1;
(statearr_19285_19335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (15))){
var inst_19250 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19286_19336 = state_19277__$1;
(statearr_19286_19336[(2)] = inst_19250);

(statearr_19286_19336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (21))){
var inst_19270 = (state_19277[(2)]);
var state_19277__$1 = (function (){var statearr_19287 = state_19277;
(statearr_19287[(9)] = inst_19270);

return statearr_19287;
})();
var statearr_19288_19337 = state_19277__$1;
(statearr_19288_19337[(2)] = null);

(statearr_19288_19337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (13))){
var inst_19232 = (state_19277[(10)]);
var inst_19234 = cljs.core.chunked_seq_QMARK_.call(null,inst_19232);
var state_19277__$1 = state_19277;
if(inst_19234){
var statearr_19289_19338 = state_19277__$1;
(statearr_19289_19338[(1)] = (16));

} else {
var statearr_19290_19339 = state_19277__$1;
(statearr_19290_19339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (22))){
var inst_19262 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
if(cljs.core.truth_(inst_19262)){
var statearr_19291_19340 = state_19277__$1;
(statearr_19291_19340[(1)] = (23));

} else {
var statearr_19292_19341 = state_19277__$1;
(statearr_19292_19341[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (6))){
var inst_19256 = (state_19277[(7)]);
var inst_19258 = (state_19277[(11)]);
var inst_19208 = (state_19277[(8)]);
var inst_19256__$1 = topic_fn.call(null,inst_19208);
var inst_19257 = cljs.core.deref.call(null,mults);
var inst_19258__$1 = cljs.core.get.call(null,inst_19257,inst_19256__$1);
var state_19277__$1 = (function (){var statearr_19293 = state_19277;
(statearr_19293[(7)] = inst_19256__$1);

(statearr_19293[(11)] = inst_19258__$1);

return statearr_19293;
})();
if(cljs.core.truth_(inst_19258__$1)){
var statearr_19294_19342 = state_19277__$1;
(statearr_19294_19342[(1)] = (19));

} else {
var statearr_19295_19343 = state_19277__$1;
(statearr_19295_19343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (25))){
var inst_19267 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19296_19344 = state_19277__$1;
(statearr_19296_19344[(2)] = inst_19267);

(statearr_19296_19344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (17))){
var inst_19232 = (state_19277[(10)]);
var inst_19241 = cljs.core.first.call(null,inst_19232);
var inst_19242 = cljs.core.async.muxch_STAR_.call(null,inst_19241);
var inst_19243 = cljs.core.async.close_BANG_.call(null,inst_19242);
var inst_19244 = cljs.core.next.call(null,inst_19232);
var inst_19218 = inst_19244;
var inst_19219 = null;
var inst_19220 = (0);
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19297 = state_19277;
(statearr_19297[(12)] = inst_19221);

(statearr_19297[(13)] = inst_19243);

(statearr_19297[(14)] = inst_19219);

(statearr_19297[(15)] = inst_19218);

(statearr_19297[(16)] = inst_19220);

return statearr_19297;
})();
var statearr_19298_19345 = state_19277__$1;
(statearr_19298_19345[(2)] = null);

(statearr_19298_19345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (3))){
var inst_19275 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19277__$1,inst_19275);
} else {
if((state_val_19278 === (12))){
var inst_19252 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19299_19346 = state_19277__$1;
(statearr_19299_19346[(2)] = inst_19252);

(statearr_19299_19346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (2))){
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19277__$1,(4),ch);
} else {
if((state_val_19278 === (23))){
var state_19277__$1 = state_19277;
var statearr_19300_19347 = state_19277__$1;
(statearr_19300_19347[(2)] = null);

(statearr_19300_19347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (19))){
var inst_19258 = (state_19277[(11)]);
var inst_19208 = (state_19277[(8)]);
var inst_19260 = cljs.core.async.muxch_STAR_.call(null,inst_19258);
var state_19277__$1 = state_19277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19277__$1,(22),inst_19260,inst_19208);
} else {
if((state_val_19278 === (11))){
var inst_19232 = (state_19277[(10)]);
var inst_19218 = (state_19277[(15)]);
var inst_19232__$1 = cljs.core.seq.call(null,inst_19218);
var state_19277__$1 = (function (){var statearr_19301 = state_19277;
(statearr_19301[(10)] = inst_19232__$1);

return statearr_19301;
})();
if(inst_19232__$1){
var statearr_19302_19348 = state_19277__$1;
(statearr_19302_19348[(1)] = (13));

} else {
var statearr_19303_19349 = state_19277__$1;
(statearr_19303_19349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (9))){
var inst_19254 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19304_19350 = state_19277__$1;
(statearr_19304_19350[(2)] = inst_19254);

(statearr_19304_19350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (5))){
var inst_19215 = cljs.core.deref.call(null,mults);
var inst_19216 = cljs.core.vals.call(null,inst_19215);
var inst_19217 = cljs.core.seq.call(null,inst_19216);
var inst_19218 = inst_19217;
var inst_19219 = null;
var inst_19220 = (0);
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19305 = state_19277;
(statearr_19305[(12)] = inst_19221);

(statearr_19305[(14)] = inst_19219);

(statearr_19305[(15)] = inst_19218);

(statearr_19305[(16)] = inst_19220);

return statearr_19305;
})();
var statearr_19306_19351 = state_19277__$1;
(statearr_19306_19351[(2)] = null);

(statearr_19306_19351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (14))){
var state_19277__$1 = state_19277;
var statearr_19310_19352 = state_19277__$1;
(statearr_19310_19352[(2)] = null);

(statearr_19310_19352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (16))){
var inst_19232 = (state_19277[(10)]);
var inst_19236 = cljs.core.chunk_first.call(null,inst_19232);
var inst_19237 = cljs.core.chunk_rest.call(null,inst_19232);
var inst_19238 = cljs.core.count.call(null,inst_19236);
var inst_19218 = inst_19237;
var inst_19219 = inst_19236;
var inst_19220 = inst_19238;
var inst_19221 = (0);
var state_19277__$1 = (function (){var statearr_19311 = state_19277;
(statearr_19311[(12)] = inst_19221);

(statearr_19311[(14)] = inst_19219);

(statearr_19311[(15)] = inst_19218);

(statearr_19311[(16)] = inst_19220);

return statearr_19311;
})();
var statearr_19312_19353 = state_19277__$1;
(statearr_19312_19353[(2)] = null);

(statearr_19312_19353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (10))){
var inst_19221 = (state_19277[(12)]);
var inst_19219 = (state_19277[(14)]);
var inst_19218 = (state_19277[(15)]);
var inst_19220 = (state_19277[(16)]);
var inst_19226 = cljs.core._nth.call(null,inst_19219,inst_19221);
var inst_19227 = cljs.core.async.muxch_STAR_.call(null,inst_19226);
var inst_19228 = cljs.core.async.close_BANG_.call(null,inst_19227);
var inst_19229 = (inst_19221 + (1));
var tmp19307 = inst_19219;
var tmp19308 = inst_19218;
var tmp19309 = inst_19220;
var inst_19218__$1 = tmp19308;
var inst_19219__$1 = tmp19307;
var inst_19220__$1 = tmp19309;
var inst_19221__$1 = inst_19229;
var state_19277__$1 = (function (){var statearr_19313 = state_19277;
(statearr_19313[(12)] = inst_19221__$1);

(statearr_19313[(17)] = inst_19228);

(statearr_19313[(14)] = inst_19219__$1);

(statearr_19313[(15)] = inst_19218__$1);

(statearr_19313[(16)] = inst_19220__$1);

return statearr_19313;
})();
var statearr_19314_19354 = state_19277__$1;
(statearr_19314_19354[(2)] = null);

(statearr_19314_19354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (18))){
var inst_19247 = (state_19277[(2)]);
var state_19277__$1 = state_19277;
var statearr_19315_19355 = state_19277__$1;
(statearr_19315_19355[(2)] = inst_19247);

(statearr_19315_19355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19278 === (8))){
var inst_19221 = (state_19277[(12)]);
var inst_19220 = (state_19277[(16)]);
var inst_19223 = (inst_19221 < inst_19220);
var inst_19224 = inst_19223;
var state_19277__$1 = state_19277;
if(cljs.core.truth_(inst_19224)){
var statearr_19316_19356 = state_19277__$1;
(statearr_19316_19356[(1)] = (10));

} else {
var statearr_19317_19357 = state_19277__$1;
(statearr_19317_19357[(1)] = (11));

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
});})(c__10732__auto___19329,mults,ensure_mult,p))
;
return ((function (switch__10667__auto__,c__10732__auto___19329,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19321[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19321[(1)] = (1));

return statearr_19321;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19277){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19322){if((e19322 instanceof Object)){
var ex__10671__auto__ = e19322;
var statearr_19323_19358 = state_19277;
(statearr_19323_19358[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19359 = state_19277;
state_19277 = G__19359;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19329,mults,ensure_mult,p))
})();
var state__10734__auto__ = (function (){var statearr_19324 = f__10733__auto__.call(null);
(statearr_19324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19329);

return statearr_19324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19329,mults,ensure_mult,p))
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
var args19360 = [];
var len__6152__auto___19363 = arguments.length;
var i__6153__auto___19364 = (0);
while(true){
if((i__6153__auto___19364 < len__6152__auto___19363)){
args19360.push((arguments[i__6153__auto___19364]));

var G__19365 = (i__6153__auto___19364 + (1));
i__6153__auto___19364 = G__19365;
continue;
} else {
}
break;
}

var G__19362 = args19360.length;
switch (G__19362) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19360.length)].join('')));

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
var args19367 = [];
var len__6152__auto___19370 = arguments.length;
var i__6153__auto___19371 = (0);
while(true){
if((i__6153__auto___19371 < len__6152__auto___19370)){
args19367.push((arguments[i__6153__auto___19371]));

var G__19372 = (i__6153__auto___19371 + (1));
i__6153__auto___19371 = G__19372;
continue;
} else {
}
break;
}

var G__19369 = args19367.length;
switch (G__19369) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19367.length)].join('')));

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
var args19374 = [];
var len__6152__auto___19445 = arguments.length;
var i__6153__auto___19446 = (0);
while(true){
if((i__6153__auto___19446 < len__6152__auto___19445)){
args19374.push((arguments[i__6153__auto___19446]));

var G__19447 = (i__6153__auto___19446 + (1));
i__6153__auto___19446 = G__19447;
continue;
} else {
}
break;
}

var G__19376 = args19374.length;
switch (G__19376) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19374.length)].join('')));

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
var c__10732__auto___19449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (7))){
var state_19415__$1 = state_19415;
var statearr_19417_19450 = state_19415__$1;
(statearr_19417_19450[(2)] = null);

(statearr_19417_19450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (1))){
var state_19415__$1 = state_19415;
var statearr_19418_19451 = state_19415__$1;
(statearr_19418_19451[(2)] = null);

(statearr_19418_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (4))){
var inst_19379 = (state_19415[(7)]);
var inst_19381 = (inst_19379 < cnt);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19381)){
var statearr_19419_19452 = state_19415__$1;
(statearr_19419_19452[(1)] = (6));

} else {
var statearr_19420_19453 = state_19415__$1;
(statearr_19420_19453[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (15))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19421_19454 = state_19415__$1;
(statearr_19421_19454[(2)] = inst_19411);

(statearr_19421_19454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (13))){
var inst_19404 = cljs.core.async.close_BANG_.call(null,out);
var state_19415__$1 = state_19415;
var statearr_19422_19455 = state_19415__$1;
(statearr_19422_19455[(2)] = inst_19404);

(statearr_19422_19455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (6))){
var state_19415__$1 = state_19415;
var statearr_19423_19456 = state_19415__$1;
(statearr_19423_19456[(2)] = null);

(statearr_19423_19456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (3))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (12))){
var inst_19401 = (state_19415[(8)]);
var inst_19401__$1 = (state_19415[(2)]);
var inst_19402 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19401__$1);
var state_19415__$1 = (function (){var statearr_19424 = state_19415;
(statearr_19424[(8)] = inst_19401__$1);

return statearr_19424;
})();
if(cljs.core.truth_(inst_19402)){
var statearr_19425_19457 = state_19415__$1;
(statearr_19425_19457[(1)] = (13));

} else {
var statearr_19426_19458 = state_19415__$1;
(statearr_19426_19458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (2))){
var inst_19378 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19379 = (0);
var state_19415__$1 = (function (){var statearr_19427 = state_19415;
(statearr_19427[(7)] = inst_19379);

(statearr_19427[(9)] = inst_19378);

return statearr_19427;
})();
var statearr_19428_19459 = state_19415__$1;
(statearr_19428_19459[(2)] = null);

(statearr_19428_19459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (11))){
var inst_19379 = (state_19415[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19415,(10),Object,null,(9));
var inst_19388 = chs__$1.call(null,inst_19379);
var inst_19389 = done.call(null,inst_19379);
var inst_19390 = cljs.core.async.take_BANG_.call(null,inst_19388,inst_19389);
var state_19415__$1 = state_19415;
var statearr_19429_19460 = state_19415__$1;
(statearr_19429_19460[(2)] = inst_19390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19415__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (9))){
var inst_19379 = (state_19415[(7)]);
var inst_19392 = (state_19415[(2)]);
var inst_19393 = (inst_19379 + (1));
var inst_19379__$1 = inst_19393;
var state_19415__$1 = (function (){var statearr_19430 = state_19415;
(statearr_19430[(10)] = inst_19392);

(statearr_19430[(7)] = inst_19379__$1);

return statearr_19430;
})();
var statearr_19431_19461 = state_19415__$1;
(statearr_19431_19461[(2)] = null);

(statearr_19431_19461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (5))){
var inst_19399 = (state_19415[(2)]);
var state_19415__$1 = (function (){var statearr_19432 = state_19415;
(statearr_19432[(11)] = inst_19399);

return statearr_19432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(12),dchan);
} else {
if((state_val_19416 === (14))){
var inst_19401 = (state_19415[(8)]);
var inst_19406 = cljs.core.apply.call(null,f,inst_19401);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19415__$1,(16),out,inst_19406);
} else {
if((state_val_19416 === (16))){
var inst_19408 = (state_19415[(2)]);
var state_19415__$1 = (function (){var statearr_19433 = state_19415;
(statearr_19433[(12)] = inst_19408);

return statearr_19433;
})();
var statearr_19434_19462 = state_19415__$1;
(statearr_19434_19462[(2)] = null);

(statearr_19434_19462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (10))){
var inst_19383 = (state_19415[(2)]);
var inst_19384 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19415__$1 = (function (){var statearr_19435 = state_19415;
(statearr_19435[(13)] = inst_19383);

return statearr_19435;
})();
var statearr_19436_19463 = state_19415__$1;
(statearr_19436_19463[(2)] = inst_19384);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19415__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (8))){
var inst_19397 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19437_19464 = state_19415__$1;
(statearr_19437_19464[(2)] = inst_19397);

(statearr_19437_19464[(1)] = (5));


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
});})(c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10667__auto__,c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19441[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19441[(1)] = (1));

return statearr_19441;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19415){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19442){if((e19442 instanceof Object)){
var ex__10671__auto__ = e19442;
var statearr_19443_19465 = state_19415;
(statearr_19443_19465[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19466 = state_19415;
state_19415 = G__19466;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10734__auto__ = (function (){var statearr_19444 = f__10733__auto__.call(null);
(statearr_19444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19449);

return statearr_19444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19449,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19468 = [];
var len__6152__auto___19524 = arguments.length;
var i__6153__auto___19525 = (0);
while(true){
if((i__6153__auto___19525 < len__6152__auto___19524)){
args19468.push((arguments[i__6153__auto___19525]));

var G__19526 = (i__6153__auto___19525 + (1));
i__6153__auto___19525 = G__19526;
continue;
} else {
}
break;
}

var G__19470 = args19468.length;
switch (G__19470) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19468.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19528,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19528,out){
return (function (state_19500){
var state_val_19501 = (state_19500[(1)]);
if((state_val_19501 === (7))){
var inst_19480 = (state_19500[(7)]);
var inst_19479 = (state_19500[(8)]);
var inst_19479__$1 = (state_19500[(2)]);
var inst_19480__$1 = cljs.core.nth.call(null,inst_19479__$1,(0),null);
var inst_19481 = cljs.core.nth.call(null,inst_19479__$1,(1),null);
var inst_19482 = (inst_19480__$1 == null);
var state_19500__$1 = (function (){var statearr_19502 = state_19500;
(statearr_19502[(7)] = inst_19480__$1);

(statearr_19502[(9)] = inst_19481);

(statearr_19502[(8)] = inst_19479__$1);

return statearr_19502;
})();
if(cljs.core.truth_(inst_19482)){
var statearr_19503_19529 = state_19500__$1;
(statearr_19503_19529[(1)] = (8));

} else {
var statearr_19504_19530 = state_19500__$1;
(statearr_19504_19530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (1))){
var inst_19471 = cljs.core.vec.call(null,chs);
var inst_19472 = inst_19471;
var state_19500__$1 = (function (){var statearr_19505 = state_19500;
(statearr_19505[(10)] = inst_19472);

return statearr_19505;
})();
var statearr_19506_19531 = state_19500__$1;
(statearr_19506_19531[(2)] = null);

(statearr_19506_19531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (4))){
var inst_19472 = (state_19500[(10)]);
var state_19500__$1 = state_19500;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19500__$1,(7),inst_19472);
} else {
if((state_val_19501 === (6))){
var inst_19496 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
var statearr_19507_19532 = state_19500__$1;
(statearr_19507_19532[(2)] = inst_19496);

(statearr_19507_19532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (3))){
var inst_19498 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19500__$1,inst_19498);
} else {
if((state_val_19501 === (2))){
var inst_19472 = (state_19500[(10)]);
var inst_19474 = cljs.core.count.call(null,inst_19472);
var inst_19475 = (inst_19474 > (0));
var state_19500__$1 = state_19500;
if(cljs.core.truth_(inst_19475)){
var statearr_19509_19533 = state_19500__$1;
(statearr_19509_19533[(1)] = (4));

} else {
var statearr_19510_19534 = state_19500__$1;
(statearr_19510_19534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (11))){
var inst_19472 = (state_19500[(10)]);
var inst_19489 = (state_19500[(2)]);
var tmp19508 = inst_19472;
var inst_19472__$1 = tmp19508;
var state_19500__$1 = (function (){var statearr_19511 = state_19500;
(statearr_19511[(11)] = inst_19489);

(statearr_19511[(10)] = inst_19472__$1);

return statearr_19511;
})();
var statearr_19512_19535 = state_19500__$1;
(statearr_19512_19535[(2)] = null);

(statearr_19512_19535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (9))){
var inst_19480 = (state_19500[(7)]);
var state_19500__$1 = state_19500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19500__$1,(11),out,inst_19480);
} else {
if((state_val_19501 === (5))){
var inst_19494 = cljs.core.async.close_BANG_.call(null,out);
var state_19500__$1 = state_19500;
var statearr_19513_19536 = state_19500__$1;
(statearr_19513_19536[(2)] = inst_19494);

(statearr_19513_19536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (10))){
var inst_19492 = (state_19500[(2)]);
var state_19500__$1 = state_19500;
var statearr_19514_19537 = state_19500__$1;
(statearr_19514_19537[(2)] = inst_19492);

(statearr_19514_19537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19501 === (8))){
var inst_19480 = (state_19500[(7)]);
var inst_19481 = (state_19500[(9)]);
var inst_19479 = (state_19500[(8)]);
var inst_19472 = (state_19500[(10)]);
var inst_19484 = (function (){var cs = inst_19472;
var vec__19477 = inst_19479;
var v = inst_19480;
var c = inst_19481;
return ((function (cs,vec__19477,v,c,inst_19480,inst_19481,inst_19479,inst_19472,state_val_19501,c__10732__auto___19528,out){
return (function (p1__19467_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19467_SHARP_);
});
;})(cs,vec__19477,v,c,inst_19480,inst_19481,inst_19479,inst_19472,state_val_19501,c__10732__auto___19528,out))
})();
var inst_19485 = cljs.core.filterv.call(null,inst_19484,inst_19472);
var inst_19472__$1 = inst_19485;
var state_19500__$1 = (function (){var statearr_19515 = state_19500;
(statearr_19515[(10)] = inst_19472__$1);

return statearr_19515;
})();
var statearr_19516_19538 = state_19500__$1;
(statearr_19516_19538[(2)] = null);

(statearr_19516_19538[(1)] = (2));


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
});})(c__10732__auto___19528,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19528,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19520[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19500){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19521){if((e19521 instanceof Object)){
var ex__10671__auto__ = e19521;
var statearr_19522_19539 = state_19500;
(statearr_19522_19539[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19540 = state_19500;
state_19500 = G__19540;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19528,out))
})();
var state__10734__auto__ = (function (){var statearr_19523 = f__10733__auto__.call(null);
(statearr_19523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19528);

return statearr_19523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19528,out))
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
var args19541 = [];
var len__6152__auto___19590 = arguments.length;
var i__6153__auto___19591 = (0);
while(true){
if((i__6153__auto___19591 < len__6152__auto___19590)){
args19541.push((arguments[i__6153__auto___19591]));

var G__19592 = (i__6153__auto___19591 + (1));
i__6153__auto___19591 = G__19592;
continue;
} else {
}
break;
}

var G__19543 = args19541.length;
switch (G__19543) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19541.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19594,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19594,out){
return (function (state_19567){
var state_val_19568 = (state_19567[(1)]);
if((state_val_19568 === (7))){
var inst_19549 = (state_19567[(7)]);
var inst_19549__$1 = (state_19567[(2)]);
var inst_19550 = (inst_19549__$1 == null);
var inst_19551 = cljs.core.not.call(null,inst_19550);
var state_19567__$1 = (function (){var statearr_19569 = state_19567;
(statearr_19569[(7)] = inst_19549__$1);

return statearr_19569;
})();
if(inst_19551){
var statearr_19570_19595 = state_19567__$1;
(statearr_19570_19595[(1)] = (8));

} else {
var statearr_19571_19596 = state_19567__$1;
(statearr_19571_19596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (1))){
var inst_19544 = (0);
var state_19567__$1 = (function (){var statearr_19572 = state_19567;
(statearr_19572[(8)] = inst_19544);

return statearr_19572;
})();
var statearr_19573_19597 = state_19567__$1;
(statearr_19573_19597[(2)] = null);

(statearr_19573_19597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (4))){
var state_19567__$1 = state_19567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19567__$1,(7),ch);
} else {
if((state_val_19568 === (6))){
var inst_19562 = (state_19567[(2)]);
var state_19567__$1 = state_19567;
var statearr_19574_19598 = state_19567__$1;
(statearr_19574_19598[(2)] = inst_19562);

(statearr_19574_19598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (3))){
var inst_19564 = (state_19567[(2)]);
var inst_19565 = cljs.core.async.close_BANG_.call(null,out);
var state_19567__$1 = (function (){var statearr_19575 = state_19567;
(statearr_19575[(9)] = inst_19564);

return statearr_19575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19567__$1,inst_19565);
} else {
if((state_val_19568 === (2))){
var inst_19544 = (state_19567[(8)]);
var inst_19546 = (inst_19544 < n);
var state_19567__$1 = state_19567;
if(cljs.core.truth_(inst_19546)){
var statearr_19576_19599 = state_19567__$1;
(statearr_19576_19599[(1)] = (4));

} else {
var statearr_19577_19600 = state_19567__$1;
(statearr_19577_19600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (11))){
var inst_19544 = (state_19567[(8)]);
var inst_19554 = (state_19567[(2)]);
var inst_19555 = (inst_19544 + (1));
var inst_19544__$1 = inst_19555;
var state_19567__$1 = (function (){var statearr_19578 = state_19567;
(statearr_19578[(8)] = inst_19544__$1);

(statearr_19578[(10)] = inst_19554);

return statearr_19578;
})();
var statearr_19579_19601 = state_19567__$1;
(statearr_19579_19601[(2)] = null);

(statearr_19579_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (9))){
var state_19567__$1 = state_19567;
var statearr_19580_19602 = state_19567__$1;
(statearr_19580_19602[(2)] = null);

(statearr_19580_19602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (5))){
var state_19567__$1 = state_19567;
var statearr_19581_19603 = state_19567__$1;
(statearr_19581_19603[(2)] = null);

(statearr_19581_19603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (10))){
var inst_19559 = (state_19567[(2)]);
var state_19567__$1 = state_19567;
var statearr_19582_19604 = state_19567__$1;
(statearr_19582_19604[(2)] = inst_19559);

(statearr_19582_19604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19568 === (8))){
var inst_19549 = (state_19567[(7)]);
var state_19567__$1 = state_19567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19567__$1,(11),out,inst_19549);
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
});})(c__10732__auto___19594,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19594,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19586[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19586[(1)] = (1));

return statearr_19586;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19567){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19587){if((e19587 instanceof Object)){
var ex__10671__auto__ = e19587;
var statearr_19588_19605 = state_19567;
(statearr_19588_19605[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19606 = state_19567;
state_19567 = G__19606;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19594,out))
})();
var state__10734__auto__ = (function (){var statearr_19589 = f__10733__auto__.call(null);
(statearr_19589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19594);

return statearr_19589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19594,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19614 = (function (map_LT_,f,ch,meta19615){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19615 = meta19615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19616,meta19615__$1){
var self__ = this;
var _19616__$1 = this;
return (new cljs.core.async.t_cljs$core$async19614(self__.map_LT_,self__.f,self__.ch,meta19615__$1));
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19616){
var self__ = this;
var _19616__$1 = this;
return self__.meta19615;
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19617 = (function (map_LT_,f,ch,meta19615,_,fn1,meta19618){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19615 = meta19615;
this._ = _;
this.fn1 = fn1;
this.meta19618 = meta19618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19619,meta19618__$1){
var self__ = this;
var _19619__$1 = this;
return (new cljs.core.async.t_cljs$core$async19617(self__.map_LT_,self__.f,self__.ch,self__.meta19615,self__._,self__.fn1,meta19618__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19619){
var self__ = this;
var _19619__$1 = this;
return self__.meta19618;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19617.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19607_SHARP_){
return f1.call(null,(((p1__19607_SHARP_ == null))?null:self__.f.call(null,p1__19607_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19617.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19615","meta19615",633383853,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19614","cljs.core.async/t_cljs$core$async19614",1277304347,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19618","meta19618",-965361511,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19617";

cljs.core.async.t_cljs$core$async19617.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19617");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19617 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19617(map_LT___$1,f__$1,ch__$1,meta19615__$1,___$2,fn1__$1,meta19618){
return (new cljs.core.async.t_cljs$core$async19617(map_LT___$1,f__$1,ch__$1,meta19615__$1,___$2,fn1__$1,meta19618));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19617(self__.map_LT_,self__.f,self__.ch,self__.meta19615,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19615","meta19615",633383853,null)], null);
});

cljs.core.async.t_cljs$core$async19614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19614";

cljs.core.async.t_cljs$core$async19614.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19614");
});

cljs.core.async.__GT_t_cljs$core$async19614 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19614(map_LT___$1,f__$1,ch__$1,meta19615){
return (new cljs.core.async.t_cljs$core$async19614(map_LT___$1,f__$1,ch__$1,meta19615));
});

}

return (new cljs.core.async.t_cljs$core$async19614(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19623 = (function (map_GT_,f,ch,meta19624){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19624 = meta19624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19625,meta19624__$1){
var self__ = this;
var _19625__$1 = this;
return (new cljs.core.async.t_cljs$core$async19623(self__.map_GT_,self__.f,self__.ch,meta19624__$1));
});

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19625){
var self__ = this;
var _19625__$1 = this;
return self__.meta19624;
});

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19624","meta19624",1141297274,null)], null);
});

cljs.core.async.t_cljs$core$async19623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19623";

cljs.core.async.t_cljs$core$async19623.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19623");
});

cljs.core.async.__GT_t_cljs$core$async19623 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19623(map_GT___$1,f__$1,ch__$1,meta19624){
return (new cljs.core.async.t_cljs$core$async19623(map_GT___$1,f__$1,ch__$1,meta19624));
});

}

return (new cljs.core.async.t_cljs$core$async19623(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19629 = (function (filter_GT_,p,ch,meta19630){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19630 = meta19630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19631,meta19630__$1){
var self__ = this;
var _19631__$1 = this;
return (new cljs.core.async.t_cljs$core$async19629(self__.filter_GT_,self__.p,self__.ch,meta19630__$1));
});

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19631){
var self__ = this;
var _19631__$1 = this;
return self__.meta19630;
});

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19630","meta19630",-604750470,null)], null);
});

cljs.core.async.t_cljs$core$async19629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19629";

cljs.core.async.t_cljs$core$async19629.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19629");
});

cljs.core.async.__GT_t_cljs$core$async19629 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19629(filter_GT___$1,p__$1,ch__$1,meta19630){
return (new cljs.core.async.t_cljs$core$async19629(filter_GT___$1,p__$1,ch__$1,meta19630));
});

}

return (new cljs.core.async.t_cljs$core$async19629(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19632 = [];
var len__6152__auto___19676 = arguments.length;
var i__6153__auto___19677 = (0);
while(true){
if((i__6153__auto___19677 < len__6152__auto___19676)){
args19632.push((arguments[i__6153__auto___19677]));

var G__19678 = (i__6153__auto___19677 + (1));
i__6153__auto___19677 = G__19678;
continue;
} else {
}
break;
}

var G__19634 = args19632.length;
switch (G__19634) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19632.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19680,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19680,out){
return (function (state_19655){
var state_val_19656 = (state_19655[(1)]);
if((state_val_19656 === (7))){
var inst_19651 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19657_19681 = state_19655__$1;
(statearr_19657_19681[(2)] = inst_19651);

(statearr_19657_19681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (1))){
var state_19655__$1 = state_19655;
var statearr_19658_19682 = state_19655__$1;
(statearr_19658_19682[(2)] = null);

(statearr_19658_19682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (4))){
var inst_19637 = (state_19655[(7)]);
var inst_19637__$1 = (state_19655[(2)]);
var inst_19638 = (inst_19637__$1 == null);
var state_19655__$1 = (function (){var statearr_19659 = state_19655;
(statearr_19659[(7)] = inst_19637__$1);

return statearr_19659;
})();
if(cljs.core.truth_(inst_19638)){
var statearr_19660_19683 = state_19655__$1;
(statearr_19660_19683[(1)] = (5));

} else {
var statearr_19661_19684 = state_19655__$1;
(statearr_19661_19684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (6))){
var inst_19637 = (state_19655[(7)]);
var inst_19642 = p.call(null,inst_19637);
var state_19655__$1 = state_19655;
if(cljs.core.truth_(inst_19642)){
var statearr_19662_19685 = state_19655__$1;
(statearr_19662_19685[(1)] = (8));

} else {
var statearr_19663_19686 = state_19655__$1;
(statearr_19663_19686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (3))){
var inst_19653 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19655__$1,inst_19653);
} else {
if((state_val_19656 === (2))){
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19655__$1,(4),ch);
} else {
if((state_val_19656 === (11))){
var inst_19645 = (state_19655[(2)]);
var state_19655__$1 = state_19655;
var statearr_19664_19687 = state_19655__$1;
(statearr_19664_19687[(2)] = inst_19645);

(statearr_19664_19687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (9))){
var state_19655__$1 = state_19655;
var statearr_19665_19688 = state_19655__$1;
(statearr_19665_19688[(2)] = null);

(statearr_19665_19688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (5))){
var inst_19640 = cljs.core.async.close_BANG_.call(null,out);
var state_19655__$1 = state_19655;
var statearr_19666_19689 = state_19655__$1;
(statearr_19666_19689[(2)] = inst_19640);

(statearr_19666_19689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (10))){
var inst_19648 = (state_19655[(2)]);
var state_19655__$1 = (function (){var statearr_19667 = state_19655;
(statearr_19667[(8)] = inst_19648);

return statearr_19667;
})();
var statearr_19668_19690 = state_19655__$1;
(statearr_19668_19690[(2)] = null);

(statearr_19668_19690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19656 === (8))){
var inst_19637 = (state_19655[(7)]);
var state_19655__$1 = state_19655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19655__$1,(11),out,inst_19637);
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
});})(c__10732__auto___19680,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19680,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19672 = [null,null,null,null,null,null,null,null,null];
(statearr_19672[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19672[(1)] = (1));

return statearr_19672;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19655){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19673){if((e19673 instanceof Object)){
var ex__10671__auto__ = e19673;
var statearr_19674_19691 = state_19655;
(statearr_19674_19691[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19692 = state_19655;
state_19655 = G__19692;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19680,out))
})();
var state__10734__auto__ = (function (){var statearr_19675 = f__10733__auto__.call(null);
(statearr_19675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19680);

return statearr_19675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19680,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19693 = [];
var len__6152__auto___19696 = arguments.length;
var i__6153__auto___19697 = (0);
while(true){
if((i__6153__auto___19697 < len__6152__auto___19696)){
args19693.push((arguments[i__6153__auto___19697]));

var G__19698 = (i__6153__auto___19697 + (1));
i__6153__auto___19697 = G__19698;
continue;
} else {
}
break;
}

var G__19695 = args19693.length;
switch (G__19695) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19693.length)].join('')));

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
var c__10732__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto__){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto__){
return (function (state_19865){
var state_val_19866 = (state_19865[(1)]);
if((state_val_19866 === (7))){
var inst_19861 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19867_19908 = state_19865__$1;
(statearr_19867_19908[(2)] = inst_19861);

(statearr_19867_19908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (20))){
var inst_19831 = (state_19865[(7)]);
var inst_19842 = (state_19865[(2)]);
var inst_19843 = cljs.core.next.call(null,inst_19831);
var inst_19817 = inst_19843;
var inst_19818 = null;
var inst_19819 = (0);
var inst_19820 = (0);
var state_19865__$1 = (function (){var statearr_19868 = state_19865;
(statearr_19868[(8)] = inst_19818);

(statearr_19868[(9)] = inst_19842);

(statearr_19868[(10)] = inst_19820);

(statearr_19868[(11)] = inst_19819);

(statearr_19868[(12)] = inst_19817);

return statearr_19868;
})();
var statearr_19869_19909 = state_19865__$1;
(statearr_19869_19909[(2)] = null);

(statearr_19869_19909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (1))){
var state_19865__$1 = state_19865;
var statearr_19870_19910 = state_19865__$1;
(statearr_19870_19910[(2)] = null);

(statearr_19870_19910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (4))){
var inst_19806 = (state_19865[(13)]);
var inst_19806__$1 = (state_19865[(2)]);
var inst_19807 = (inst_19806__$1 == null);
var state_19865__$1 = (function (){var statearr_19871 = state_19865;
(statearr_19871[(13)] = inst_19806__$1);

return statearr_19871;
})();
if(cljs.core.truth_(inst_19807)){
var statearr_19872_19911 = state_19865__$1;
(statearr_19872_19911[(1)] = (5));

} else {
var statearr_19873_19912 = state_19865__$1;
(statearr_19873_19912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (15))){
var state_19865__$1 = state_19865;
var statearr_19877_19913 = state_19865__$1;
(statearr_19877_19913[(2)] = null);

(statearr_19877_19913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (21))){
var state_19865__$1 = state_19865;
var statearr_19878_19914 = state_19865__$1;
(statearr_19878_19914[(2)] = null);

(statearr_19878_19914[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (13))){
var inst_19818 = (state_19865[(8)]);
var inst_19820 = (state_19865[(10)]);
var inst_19819 = (state_19865[(11)]);
var inst_19817 = (state_19865[(12)]);
var inst_19827 = (state_19865[(2)]);
var inst_19828 = (inst_19820 + (1));
var tmp19874 = inst_19818;
var tmp19875 = inst_19819;
var tmp19876 = inst_19817;
var inst_19817__$1 = tmp19876;
var inst_19818__$1 = tmp19874;
var inst_19819__$1 = tmp19875;
var inst_19820__$1 = inst_19828;
var state_19865__$1 = (function (){var statearr_19879 = state_19865;
(statearr_19879[(8)] = inst_19818__$1);

(statearr_19879[(10)] = inst_19820__$1);

(statearr_19879[(14)] = inst_19827);

(statearr_19879[(11)] = inst_19819__$1);

(statearr_19879[(12)] = inst_19817__$1);

return statearr_19879;
})();
var statearr_19880_19915 = state_19865__$1;
(statearr_19880_19915[(2)] = null);

(statearr_19880_19915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (22))){
var state_19865__$1 = state_19865;
var statearr_19881_19916 = state_19865__$1;
(statearr_19881_19916[(2)] = null);

(statearr_19881_19916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (6))){
var inst_19806 = (state_19865[(13)]);
var inst_19815 = f.call(null,inst_19806);
var inst_19816 = cljs.core.seq.call(null,inst_19815);
var inst_19817 = inst_19816;
var inst_19818 = null;
var inst_19819 = (0);
var inst_19820 = (0);
var state_19865__$1 = (function (){var statearr_19882 = state_19865;
(statearr_19882[(8)] = inst_19818);

(statearr_19882[(10)] = inst_19820);

(statearr_19882[(11)] = inst_19819);

(statearr_19882[(12)] = inst_19817);

return statearr_19882;
})();
var statearr_19883_19917 = state_19865__$1;
(statearr_19883_19917[(2)] = null);

(statearr_19883_19917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (17))){
var inst_19831 = (state_19865[(7)]);
var inst_19835 = cljs.core.chunk_first.call(null,inst_19831);
var inst_19836 = cljs.core.chunk_rest.call(null,inst_19831);
var inst_19837 = cljs.core.count.call(null,inst_19835);
var inst_19817 = inst_19836;
var inst_19818 = inst_19835;
var inst_19819 = inst_19837;
var inst_19820 = (0);
var state_19865__$1 = (function (){var statearr_19884 = state_19865;
(statearr_19884[(8)] = inst_19818);

(statearr_19884[(10)] = inst_19820);

(statearr_19884[(11)] = inst_19819);

(statearr_19884[(12)] = inst_19817);

return statearr_19884;
})();
var statearr_19885_19918 = state_19865__$1;
(statearr_19885_19918[(2)] = null);

(statearr_19885_19918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (3))){
var inst_19863 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19865__$1,inst_19863);
} else {
if((state_val_19866 === (12))){
var inst_19851 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19886_19919 = state_19865__$1;
(statearr_19886_19919[(2)] = inst_19851);

(statearr_19886_19919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (2))){
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19865__$1,(4),in$);
} else {
if((state_val_19866 === (23))){
var inst_19859 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19887_19920 = state_19865__$1;
(statearr_19887_19920[(2)] = inst_19859);

(statearr_19887_19920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (19))){
var inst_19846 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19888_19921 = state_19865__$1;
(statearr_19888_19921[(2)] = inst_19846);

(statearr_19888_19921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (11))){
var inst_19831 = (state_19865[(7)]);
var inst_19817 = (state_19865[(12)]);
var inst_19831__$1 = cljs.core.seq.call(null,inst_19817);
var state_19865__$1 = (function (){var statearr_19889 = state_19865;
(statearr_19889[(7)] = inst_19831__$1);

return statearr_19889;
})();
if(inst_19831__$1){
var statearr_19890_19922 = state_19865__$1;
(statearr_19890_19922[(1)] = (14));

} else {
var statearr_19891_19923 = state_19865__$1;
(statearr_19891_19923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (9))){
var inst_19853 = (state_19865[(2)]);
var inst_19854 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19865__$1 = (function (){var statearr_19892 = state_19865;
(statearr_19892[(15)] = inst_19853);

return statearr_19892;
})();
if(cljs.core.truth_(inst_19854)){
var statearr_19893_19924 = state_19865__$1;
(statearr_19893_19924[(1)] = (21));

} else {
var statearr_19894_19925 = state_19865__$1;
(statearr_19894_19925[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (5))){
var inst_19809 = cljs.core.async.close_BANG_.call(null,out);
var state_19865__$1 = state_19865;
var statearr_19895_19926 = state_19865__$1;
(statearr_19895_19926[(2)] = inst_19809);

(statearr_19895_19926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (14))){
var inst_19831 = (state_19865[(7)]);
var inst_19833 = cljs.core.chunked_seq_QMARK_.call(null,inst_19831);
var state_19865__$1 = state_19865;
if(inst_19833){
var statearr_19896_19927 = state_19865__$1;
(statearr_19896_19927[(1)] = (17));

} else {
var statearr_19897_19928 = state_19865__$1;
(statearr_19897_19928[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (16))){
var inst_19849 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19898_19929 = state_19865__$1;
(statearr_19898_19929[(2)] = inst_19849);

(statearr_19898_19929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (10))){
var inst_19818 = (state_19865[(8)]);
var inst_19820 = (state_19865[(10)]);
var inst_19825 = cljs.core._nth.call(null,inst_19818,inst_19820);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19865__$1,(13),out,inst_19825);
} else {
if((state_val_19866 === (18))){
var inst_19831 = (state_19865[(7)]);
var inst_19840 = cljs.core.first.call(null,inst_19831);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19865__$1,(20),out,inst_19840);
} else {
if((state_val_19866 === (8))){
var inst_19820 = (state_19865[(10)]);
var inst_19819 = (state_19865[(11)]);
var inst_19822 = (inst_19820 < inst_19819);
var inst_19823 = inst_19822;
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19823)){
var statearr_19899_19930 = state_19865__$1;
(statearr_19899_19930[(1)] = (10));

} else {
var statearr_19900_19931 = state_19865__$1;
(statearr_19900_19931[(1)] = (11));

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
});})(c__10732__auto__))
;
return ((function (switch__10667__auto__,c__10732__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_19904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__);

(statearr_19904[(1)] = (1));

return statearr_19904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1 = (function (state_19865){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19905){if((e19905 instanceof Object)){
var ex__10671__auto__ = e19905;
var statearr_19906_19932 = state_19865;
(statearr_19906_19932[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19933 = state_19865;
state_19865 = G__19933;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__ = function(state_19865){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1.call(this,state_19865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_19907 = f__10733__auto__.call(null);
(statearr_19907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_19907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto__))
);

return c__10732__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19934 = [];
var len__6152__auto___19937 = arguments.length;
var i__6153__auto___19938 = (0);
while(true){
if((i__6153__auto___19938 < len__6152__auto___19937)){
args19934.push((arguments[i__6153__auto___19938]));

var G__19939 = (i__6153__auto___19938 + (1));
i__6153__auto___19938 = G__19939;
continue;
} else {
}
break;
}

var G__19936 = args19934.length;
switch (G__19936) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19934.length)].join('')));

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
var args19941 = [];
var len__6152__auto___19944 = arguments.length;
var i__6153__auto___19945 = (0);
while(true){
if((i__6153__auto___19945 < len__6152__auto___19944)){
args19941.push((arguments[i__6153__auto___19945]));

var G__19946 = (i__6153__auto___19945 + (1));
i__6153__auto___19945 = G__19946;
continue;
} else {
}
break;
}

var G__19943 = args19941.length;
switch (G__19943) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19941.length)].join('')));

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
var args19948 = [];
var len__6152__auto___19999 = arguments.length;
var i__6153__auto___20000 = (0);
while(true){
if((i__6153__auto___20000 < len__6152__auto___19999)){
args19948.push((arguments[i__6153__auto___20000]));

var G__20001 = (i__6153__auto___20000 + (1));
i__6153__auto___20000 = G__20001;
continue;
} else {
}
break;
}

var G__19950 = args19948.length;
switch (G__19950) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19948.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20003,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20003,out){
return (function (state_19974){
var state_val_19975 = (state_19974[(1)]);
if((state_val_19975 === (7))){
var inst_19969 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19976_20004 = state_19974__$1;
(statearr_19976_20004[(2)] = inst_19969);

(statearr_19976_20004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (1))){
var inst_19951 = null;
var state_19974__$1 = (function (){var statearr_19977 = state_19974;
(statearr_19977[(7)] = inst_19951);

return statearr_19977;
})();
var statearr_19978_20005 = state_19974__$1;
(statearr_19978_20005[(2)] = null);

(statearr_19978_20005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (4))){
var inst_19954 = (state_19974[(8)]);
var inst_19954__$1 = (state_19974[(2)]);
var inst_19955 = (inst_19954__$1 == null);
var inst_19956 = cljs.core.not.call(null,inst_19955);
var state_19974__$1 = (function (){var statearr_19979 = state_19974;
(statearr_19979[(8)] = inst_19954__$1);

return statearr_19979;
})();
if(inst_19956){
var statearr_19980_20006 = state_19974__$1;
(statearr_19980_20006[(1)] = (5));

} else {
var statearr_19981_20007 = state_19974__$1;
(statearr_19981_20007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (6))){
var state_19974__$1 = state_19974;
var statearr_19982_20008 = state_19974__$1;
(statearr_19982_20008[(2)] = null);

(statearr_19982_20008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (3))){
var inst_19971 = (state_19974[(2)]);
var inst_19972 = cljs.core.async.close_BANG_.call(null,out);
var state_19974__$1 = (function (){var statearr_19983 = state_19974;
(statearr_19983[(9)] = inst_19971);

return statearr_19983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19974__$1,inst_19972);
} else {
if((state_val_19975 === (2))){
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19974__$1,(4),ch);
} else {
if((state_val_19975 === (11))){
var inst_19954 = (state_19974[(8)]);
var inst_19963 = (state_19974[(2)]);
var inst_19951 = inst_19954;
var state_19974__$1 = (function (){var statearr_19984 = state_19974;
(statearr_19984[(10)] = inst_19963);

(statearr_19984[(7)] = inst_19951);

return statearr_19984;
})();
var statearr_19985_20009 = state_19974__$1;
(statearr_19985_20009[(2)] = null);

(statearr_19985_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (9))){
var inst_19954 = (state_19974[(8)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19974__$1,(11),out,inst_19954);
} else {
if((state_val_19975 === (5))){
var inst_19954 = (state_19974[(8)]);
var inst_19951 = (state_19974[(7)]);
var inst_19958 = cljs.core._EQ_.call(null,inst_19954,inst_19951);
var state_19974__$1 = state_19974;
if(inst_19958){
var statearr_19987_20010 = state_19974__$1;
(statearr_19987_20010[(1)] = (8));

} else {
var statearr_19988_20011 = state_19974__$1;
(statearr_19988_20011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (10))){
var inst_19966 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19989_20012 = state_19974__$1;
(statearr_19989_20012[(2)] = inst_19966);

(statearr_19989_20012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (8))){
var inst_19951 = (state_19974[(7)]);
var tmp19986 = inst_19951;
var inst_19951__$1 = tmp19986;
var state_19974__$1 = (function (){var statearr_19990 = state_19974;
(statearr_19990[(7)] = inst_19951__$1);

return statearr_19990;
})();
var statearr_19991_20013 = state_19974__$1;
(statearr_19991_20013[(2)] = null);

(statearr_19991_20013[(1)] = (2));


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
});})(c__10732__auto___20003,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20003,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19995[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19995[(1)] = (1));

return statearr_19995;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19974){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19996){if((e19996 instanceof Object)){
var ex__10671__auto__ = e19996;
var statearr_19997_20014 = state_19974;
(statearr_19997_20014[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20015 = state_19974;
state_19974 = G__20015;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20003,out))
})();
var state__10734__auto__ = (function (){var statearr_19998 = f__10733__auto__.call(null);
(statearr_19998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20003);

return statearr_19998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20003,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20016 = [];
var len__6152__auto___20086 = arguments.length;
var i__6153__auto___20087 = (0);
while(true){
if((i__6153__auto___20087 < len__6152__auto___20086)){
args20016.push((arguments[i__6153__auto___20087]));

var G__20088 = (i__6153__auto___20087 + (1));
i__6153__auto___20087 = G__20088;
continue;
} else {
}
break;
}

var G__20018 = args20016.length;
switch (G__20018) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20016.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20090,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20090,out){
return (function (state_20056){
var state_val_20057 = (state_20056[(1)]);
if((state_val_20057 === (7))){
var inst_20052 = (state_20056[(2)]);
var state_20056__$1 = state_20056;
var statearr_20058_20091 = state_20056__$1;
(statearr_20058_20091[(2)] = inst_20052);

(statearr_20058_20091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (1))){
var inst_20019 = (new Array(n));
var inst_20020 = inst_20019;
var inst_20021 = (0);
var state_20056__$1 = (function (){var statearr_20059 = state_20056;
(statearr_20059[(7)] = inst_20021);

(statearr_20059[(8)] = inst_20020);

return statearr_20059;
})();
var statearr_20060_20092 = state_20056__$1;
(statearr_20060_20092[(2)] = null);

(statearr_20060_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (4))){
var inst_20024 = (state_20056[(9)]);
var inst_20024__$1 = (state_20056[(2)]);
var inst_20025 = (inst_20024__$1 == null);
var inst_20026 = cljs.core.not.call(null,inst_20025);
var state_20056__$1 = (function (){var statearr_20061 = state_20056;
(statearr_20061[(9)] = inst_20024__$1);

return statearr_20061;
})();
if(inst_20026){
var statearr_20062_20093 = state_20056__$1;
(statearr_20062_20093[(1)] = (5));

} else {
var statearr_20063_20094 = state_20056__$1;
(statearr_20063_20094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (15))){
var inst_20046 = (state_20056[(2)]);
var state_20056__$1 = state_20056;
var statearr_20064_20095 = state_20056__$1;
(statearr_20064_20095[(2)] = inst_20046);

(statearr_20064_20095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (13))){
var state_20056__$1 = state_20056;
var statearr_20065_20096 = state_20056__$1;
(statearr_20065_20096[(2)] = null);

(statearr_20065_20096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (6))){
var inst_20021 = (state_20056[(7)]);
var inst_20042 = (inst_20021 > (0));
var state_20056__$1 = state_20056;
if(cljs.core.truth_(inst_20042)){
var statearr_20066_20097 = state_20056__$1;
(statearr_20066_20097[(1)] = (12));

} else {
var statearr_20067_20098 = state_20056__$1;
(statearr_20067_20098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (3))){
var inst_20054 = (state_20056[(2)]);
var state_20056__$1 = state_20056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20056__$1,inst_20054);
} else {
if((state_val_20057 === (12))){
var inst_20020 = (state_20056[(8)]);
var inst_20044 = cljs.core.vec.call(null,inst_20020);
var state_20056__$1 = state_20056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20056__$1,(15),out,inst_20044);
} else {
if((state_val_20057 === (2))){
var state_20056__$1 = state_20056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20056__$1,(4),ch);
} else {
if((state_val_20057 === (11))){
var inst_20036 = (state_20056[(2)]);
var inst_20037 = (new Array(n));
var inst_20020 = inst_20037;
var inst_20021 = (0);
var state_20056__$1 = (function (){var statearr_20068 = state_20056;
(statearr_20068[(7)] = inst_20021);

(statearr_20068[(10)] = inst_20036);

(statearr_20068[(8)] = inst_20020);

return statearr_20068;
})();
var statearr_20069_20099 = state_20056__$1;
(statearr_20069_20099[(2)] = null);

(statearr_20069_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (9))){
var inst_20020 = (state_20056[(8)]);
var inst_20034 = cljs.core.vec.call(null,inst_20020);
var state_20056__$1 = state_20056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20056__$1,(11),out,inst_20034);
} else {
if((state_val_20057 === (5))){
var inst_20029 = (state_20056[(11)]);
var inst_20021 = (state_20056[(7)]);
var inst_20020 = (state_20056[(8)]);
var inst_20024 = (state_20056[(9)]);
var inst_20028 = (inst_20020[inst_20021] = inst_20024);
var inst_20029__$1 = (inst_20021 + (1));
var inst_20030 = (inst_20029__$1 < n);
var state_20056__$1 = (function (){var statearr_20070 = state_20056;
(statearr_20070[(12)] = inst_20028);

(statearr_20070[(11)] = inst_20029__$1);

return statearr_20070;
})();
if(cljs.core.truth_(inst_20030)){
var statearr_20071_20100 = state_20056__$1;
(statearr_20071_20100[(1)] = (8));

} else {
var statearr_20072_20101 = state_20056__$1;
(statearr_20072_20101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (14))){
var inst_20049 = (state_20056[(2)]);
var inst_20050 = cljs.core.async.close_BANG_.call(null,out);
var state_20056__$1 = (function (){var statearr_20074 = state_20056;
(statearr_20074[(13)] = inst_20049);

return statearr_20074;
})();
var statearr_20075_20102 = state_20056__$1;
(statearr_20075_20102[(2)] = inst_20050);

(statearr_20075_20102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (10))){
var inst_20040 = (state_20056[(2)]);
var state_20056__$1 = state_20056;
var statearr_20076_20103 = state_20056__$1;
(statearr_20076_20103[(2)] = inst_20040);

(statearr_20076_20103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20057 === (8))){
var inst_20029 = (state_20056[(11)]);
var inst_20020 = (state_20056[(8)]);
var tmp20073 = inst_20020;
var inst_20020__$1 = tmp20073;
var inst_20021 = inst_20029;
var state_20056__$1 = (function (){var statearr_20077 = state_20056;
(statearr_20077[(7)] = inst_20021);

(statearr_20077[(8)] = inst_20020__$1);

return statearr_20077;
})();
var statearr_20078_20104 = state_20056__$1;
(statearr_20078_20104[(2)] = null);

(statearr_20078_20104[(1)] = (2));


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
});})(c__10732__auto___20090,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20090,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_20082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20082[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_20082[(1)] = (1));

return statearr_20082;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_20056){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_20056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e20083){if((e20083 instanceof Object)){
var ex__10671__auto__ = e20083;
var statearr_20084_20105 = state_20056;
(statearr_20084_20105[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20106 = state_20056;
state_20056 = G__20106;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_20056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_20056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20090,out))
})();
var state__10734__auto__ = (function (){var statearr_20085 = f__10733__auto__.call(null);
(statearr_20085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20090);

return statearr_20085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20090,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20107 = [];
var len__6152__auto___20181 = arguments.length;
var i__6153__auto___20182 = (0);
while(true){
if((i__6153__auto___20182 < len__6152__auto___20181)){
args20107.push((arguments[i__6153__auto___20182]));

var G__20183 = (i__6153__auto___20182 + (1));
i__6153__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var G__20109 = args20107.length;
switch (G__20109) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20107.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20185,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20185,out){
return (function (state_20151){
var state_val_20152 = (state_20151[(1)]);
if((state_val_20152 === (7))){
var inst_20147 = (state_20151[(2)]);
var state_20151__$1 = state_20151;
var statearr_20153_20186 = state_20151__$1;
(statearr_20153_20186[(2)] = inst_20147);

(statearr_20153_20186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (1))){
var inst_20110 = [];
var inst_20111 = inst_20110;
var inst_20112 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20151__$1 = (function (){var statearr_20154 = state_20151;
(statearr_20154[(7)] = inst_20111);

(statearr_20154[(8)] = inst_20112);

return statearr_20154;
})();
var statearr_20155_20187 = state_20151__$1;
(statearr_20155_20187[(2)] = null);

(statearr_20155_20187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (4))){
var inst_20115 = (state_20151[(9)]);
var inst_20115__$1 = (state_20151[(2)]);
var inst_20116 = (inst_20115__$1 == null);
var inst_20117 = cljs.core.not.call(null,inst_20116);
var state_20151__$1 = (function (){var statearr_20156 = state_20151;
(statearr_20156[(9)] = inst_20115__$1);

return statearr_20156;
})();
if(inst_20117){
var statearr_20157_20188 = state_20151__$1;
(statearr_20157_20188[(1)] = (5));

} else {
var statearr_20158_20189 = state_20151__$1;
(statearr_20158_20189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (15))){
var inst_20141 = (state_20151[(2)]);
var state_20151__$1 = state_20151;
var statearr_20159_20190 = state_20151__$1;
(statearr_20159_20190[(2)] = inst_20141);

(statearr_20159_20190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (13))){
var state_20151__$1 = state_20151;
var statearr_20160_20191 = state_20151__$1;
(statearr_20160_20191[(2)] = null);

(statearr_20160_20191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (6))){
var inst_20111 = (state_20151[(7)]);
var inst_20136 = inst_20111.length;
var inst_20137 = (inst_20136 > (0));
var state_20151__$1 = state_20151;
if(cljs.core.truth_(inst_20137)){
var statearr_20161_20192 = state_20151__$1;
(statearr_20161_20192[(1)] = (12));

} else {
var statearr_20162_20193 = state_20151__$1;
(statearr_20162_20193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (3))){
var inst_20149 = (state_20151[(2)]);
var state_20151__$1 = state_20151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20151__$1,inst_20149);
} else {
if((state_val_20152 === (12))){
var inst_20111 = (state_20151[(7)]);
var inst_20139 = cljs.core.vec.call(null,inst_20111);
var state_20151__$1 = state_20151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20151__$1,(15),out,inst_20139);
} else {
if((state_val_20152 === (2))){
var state_20151__$1 = state_20151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20151__$1,(4),ch);
} else {
if((state_val_20152 === (11))){
var inst_20115 = (state_20151[(9)]);
var inst_20119 = (state_20151[(10)]);
var inst_20129 = (state_20151[(2)]);
var inst_20130 = [];
var inst_20131 = inst_20130.push(inst_20115);
var inst_20111 = inst_20130;
var inst_20112 = inst_20119;
var state_20151__$1 = (function (){var statearr_20163 = state_20151;
(statearr_20163[(7)] = inst_20111);

(statearr_20163[(8)] = inst_20112);

(statearr_20163[(11)] = inst_20129);

(statearr_20163[(12)] = inst_20131);

return statearr_20163;
})();
var statearr_20164_20194 = state_20151__$1;
(statearr_20164_20194[(2)] = null);

(statearr_20164_20194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (9))){
var inst_20111 = (state_20151[(7)]);
var inst_20127 = cljs.core.vec.call(null,inst_20111);
var state_20151__$1 = state_20151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20151__$1,(11),out,inst_20127);
} else {
if((state_val_20152 === (5))){
var inst_20112 = (state_20151[(8)]);
var inst_20115 = (state_20151[(9)]);
var inst_20119 = (state_20151[(10)]);
var inst_20119__$1 = f.call(null,inst_20115);
var inst_20120 = cljs.core._EQ_.call(null,inst_20119__$1,inst_20112);
var inst_20121 = cljs.core.keyword_identical_QMARK_.call(null,inst_20112,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20122 = (inst_20120) || (inst_20121);
var state_20151__$1 = (function (){var statearr_20165 = state_20151;
(statearr_20165[(10)] = inst_20119__$1);

return statearr_20165;
})();
if(cljs.core.truth_(inst_20122)){
var statearr_20166_20195 = state_20151__$1;
(statearr_20166_20195[(1)] = (8));

} else {
var statearr_20167_20196 = state_20151__$1;
(statearr_20167_20196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (14))){
var inst_20144 = (state_20151[(2)]);
var inst_20145 = cljs.core.async.close_BANG_.call(null,out);
var state_20151__$1 = (function (){var statearr_20169 = state_20151;
(statearr_20169[(13)] = inst_20144);

return statearr_20169;
})();
var statearr_20170_20197 = state_20151__$1;
(statearr_20170_20197[(2)] = inst_20145);

(statearr_20170_20197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (10))){
var inst_20134 = (state_20151[(2)]);
var state_20151__$1 = state_20151;
var statearr_20171_20198 = state_20151__$1;
(statearr_20171_20198[(2)] = inst_20134);

(statearr_20171_20198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20152 === (8))){
var inst_20111 = (state_20151[(7)]);
var inst_20115 = (state_20151[(9)]);
var inst_20119 = (state_20151[(10)]);
var inst_20124 = inst_20111.push(inst_20115);
var tmp20168 = inst_20111;
var inst_20111__$1 = tmp20168;
var inst_20112 = inst_20119;
var state_20151__$1 = (function (){var statearr_20172 = state_20151;
(statearr_20172[(7)] = inst_20111__$1);

(statearr_20172[(8)] = inst_20112);

(statearr_20172[(14)] = inst_20124);

return statearr_20172;
})();
var statearr_20173_20199 = state_20151__$1;
(statearr_20173_20199[(2)] = null);

(statearr_20173_20199[(1)] = (2));


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
});})(c__10732__auto___20185,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20185,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_20177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20177[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_20177[(1)] = (1));

return statearr_20177;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_20151){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_20151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e20178){if((e20178 instanceof Object)){
var ex__10671__auto__ = e20178;
var statearr_20179_20200 = state_20151;
(statearr_20179_20200[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20201 = state_20151;
state_20151 = G__20201;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_20151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_20151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20185,out))
})();
var state__10734__auto__ = (function (){var statearr_20180 = f__10733__auto__.call(null);
(statearr_20180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20185);

return statearr_20180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20185,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map