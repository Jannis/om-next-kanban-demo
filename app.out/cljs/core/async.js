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
if(typeof cljs.core.async.t_cljs$core$async17508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17508 = (function (fn_handler,f,meta17509){
this.fn_handler = fn_handler;
this.f = f;
this.meta17509 = meta17509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17510,meta17509__$1){
var self__ = this;
var _17510__$1 = this;
return (new cljs.core.async.t_cljs$core$async17508(self__.fn_handler,self__.f,meta17509__$1));
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17510){
var self__ = this;
var _17510__$1 = this;
return self__.meta17509;
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17509","meta17509",-1117772147,null)], null);
});

cljs.core.async.t_cljs$core$async17508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17508";

cljs.core.async.t_cljs$core$async17508.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17508");
});

cljs.core.async.__GT_t_cljs$core$async17508 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17508(fn_handler__$1,f__$1,meta17509){
return (new cljs.core.async.t_cljs$core$async17508(fn_handler__$1,f__$1,meta17509));
});

}

return (new cljs.core.async.t_cljs$core$async17508(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17513 = [];
var len__6152__auto___17516 = arguments.length;
var i__6153__auto___17517 = (0);
while(true){
if((i__6153__auto___17517 < len__6152__auto___17516)){
args17513.push((arguments[i__6153__auto___17517]));

var G__17518 = (i__6153__auto___17517 + (1));
i__6153__auto___17517 = G__17518;
continue;
} else {
}
break;
}

var G__17515 = args17513.length;
switch (G__17515) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17513.length)].join('')));

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
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17520.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17527 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17527);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17527,ret){
return (function (){
return fn1.call(null,val_17527);
});})(val_17527,ret))
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
var args17528 = [];
var len__6152__auto___17531 = arguments.length;
var i__6153__auto___17532 = (0);
while(true){
if((i__6153__auto___17532 < len__6152__auto___17531)){
args17528.push((arguments[i__6153__auto___17532]));

var G__17533 = (i__6153__auto___17532 + (1));
i__6153__auto___17532 = G__17533;
continue;
} else {
}
break;
}

var G__17530 = args17528.length;
switch (G__17530) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17528.length)].join('')));

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
var n__5997__auto___17535 = n;
var x_17536 = (0);
while(true){
if((x_17536 < n__5997__auto___17535)){
(a[x_17536] = (0));

var G__17537 = (x_17536 + (1));
x_17536 = G__17537;
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

var G__17538 = (i + (1));
i = G__17538;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17542 = (function (alt_flag,flag,meta17543){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17543 = meta17543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17544,meta17543__$1){
var self__ = this;
var _17544__$1 = this;
return (new cljs.core.async.t_cljs$core$async17542(self__.alt_flag,self__.flag,meta17543__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17544){
var self__ = this;
var _17544__$1 = this;
return self__.meta17543;
});})(flag))
;

cljs.core.async.t_cljs$core$async17542.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17542.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17543","meta17543",-1778110745,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17542";

cljs.core.async.t_cljs$core$async17542.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17542");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17542 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17542(alt_flag__$1,flag__$1,meta17543){
return (new cljs.core.async.t_cljs$core$async17542(alt_flag__$1,flag__$1,meta17543));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17542(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17548 = (function (alt_handler,flag,cb,meta17549){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17549 = meta17549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17550,meta17549__$1){
var self__ = this;
var _17550__$1 = this;
return (new cljs.core.async.t_cljs$core$async17548(self__.alt_handler,self__.flag,self__.cb,meta17549__$1));
});

cljs.core.async.t_cljs$core$async17548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17550){
var self__ = this;
var _17550__$1 = this;
return self__.meta17549;
});

cljs.core.async.t_cljs$core$async17548.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17549","meta17549",-733137401,null)], null);
});

cljs.core.async.t_cljs$core$async17548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17548";

cljs.core.async.t_cljs$core$async17548.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17548");
});

cljs.core.async.__GT_t_cljs$core$async17548 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17548(alt_handler__$1,flag__$1,cb__$1,meta17549){
return (new cljs.core.async.t_cljs$core$async17548(alt_handler__$1,flag__$1,cb__$1,meta17549));
});

}

return (new cljs.core.async.t_cljs$core$async17548(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17551_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17551_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17552_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17552_SHARP_,port], null));
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
var G__17553 = (i + (1));
i = G__17553;
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
var len__6152__auto___17559 = arguments.length;
var i__6153__auto___17560 = (0);
while(true){
if((i__6153__auto___17560 < len__6152__auto___17559)){
args__6159__auto__.push((arguments[i__6153__auto___17560]));

var G__17561 = (i__6153__auto___17560 + (1));
i__6153__auto___17560 = G__17561;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17556){
var map__17557 = p__17556;
var map__17557__$1 = ((((!((map__17557 == null)))?((((map__17557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17557):map__17557);
var opts = map__17557__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17554){
var G__17555 = cljs.core.first.call(null,seq17554);
var seq17554__$1 = cljs.core.next.call(null,seq17554);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17555,seq17554__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17562 = [];
var len__6152__auto___17612 = arguments.length;
var i__6153__auto___17613 = (0);
while(true){
if((i__6153__auto___17613 < len__6152__auto___17612)){
args17562.push((arguments[i__6153__auto___17613]));

var G__17614 = (i__6153__auto___17613 + (1));
i__6153__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var G__17564 = args17562.length;
switch (G__17564) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17562.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10342__auto___17616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___17616){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___17616){
return (function (state_17588){
var state_val_17589 = (state_17588[(1)]);
if((state_val_17589 === (7))){
var inst_17584 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17590_17617 = state_17588__$1;
(statearr_17590_17617[(2)] = inst_17584);

(statearr_17590_17617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (1))){
var state_17588__$1 = state_17588;
var statearr_17591_17618 = state_17588__$1;
(statearr_17591_17618[(2)] = null);

(statearr_17591_17618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (4))){
var inst_17567 = (state_17588[(7)]);
var inst_17567__$1 = (state_17588[(2)]);
var inst_17568 = (inst_17567__$1 == null);
var state_17588__$1 = (function (){var statearr_17592 = state_17588;
(statearr_17592[(7)] = inst_17567__$1);

return statearr_17592;
})();
if(cljs.core.truth_(inst_17568)){
var statearr_17593_17619 = state_17588__$1;
(statearr_17593_17619[(1)] = (5));

} else {
var statearr_17594_17620 = state_17588__$1;
(statearr_17594_17620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (13))){
var state_17588__$1 = state_17588;
var statearr_17595_17621 = state_17588__$1;
(statearr_17595_17621[(2)] = null);

(statearr_17595_17621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (6))){
var inst_17567 = (state_17588[(7)]);
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17588__$1,(11),to,inst_17567);
} else {
if((state_val_17589 === (3))){
var inst_17586 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17588__$1,inst_17586);
} else {
if((state_val_17589 === (12))){
var state_17588__$1 = state_17588;
var statearr_17596_17622 = state_17588__$1;
(statearr_17596_17622[(2)] = null);

(statearr_17596_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (2))){
var state_17588__$1 = state_17588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17588__$1,(4),from);
} else {
if((state_val_17589 === (11))){
var inst_17577 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
if(cljs.core.truth_(inst_17577)){
var statearr_17597_17623 = state_17588__$1;
(statearr_17597_17623[(1)] = (12));

} else {
var statearr_17598_17624 = state_17588__$1;
(statearr_17598_17624[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (9))){
var state_17588__$1 = state_17588;
var statearr_17599_17625 = state_17588__$1;
(statearr_17599_17625[(2)] = null);

(statearr_17599_17625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (5))){
var state_17588__$1 = state_17588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17600_17626 = state_17588__$1;
(statearr_17600_17626[(1)] = (8));

} else {
var statearr_17601_17627 = state_17588__$1;
(statearr_17601_17627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (14))){
var inst_17582 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17602_17628 = state_17588__$1;
(statearr_17602_17628[(2)] = inst_17582);

(statearr_17602_17628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (10))){
var inst_17574 = (state_17588[(2)]);
var state_17588__$1 = state_17588;
var statearr_17603_17629 = state_17588__$1;
(statearr_17603_17629[(2)] = inst_17574);

(statearr_17603_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17589 === (8))){
var inst_17571 = cljs.core.async.close_BANG_.call(null,to);
var state_17588__$1 = state_17588;
var statearr_17604_17630 = state_17588__$1;
(statearr_17604_17630[(2)] = inst_17571);

(statearr_17604_17630[(1)] = (10));


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
});})(c__10342__auto___17616))
;
return ((function (switch__10277__auto__,c__10342__auto___17616){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_17608 = [null,null,null,null,null,null,null,null];
(statearr_17608[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_17608[(1)] = (1));

return statearr_17608;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_17588){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17609){if((e17609 instanceof Object)){
var ex__10281__auto__ = e17609;
var statearr_17610_17631 = state_17588;
(statearr_17610_17631[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17632 = state_17588;
state_17588 = G__17632;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_17588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_17588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___17616))
})();
var state__10344__auto__ = (function (){var statearr_17611 = f__10343__auto__.call(null);
(statearr_17611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___17616);

return statearr_17611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___17616))
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
return (function (p__17816){
var vec__17817 = p__17816;
var v = cljs.core.nth.call(null,vec__17817,(0),null);
var p = cljs.core.nth.call(null,vec__17817,(1),null);
var job = vec__17817;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10342__auto___17999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function (state_17822){
var state_val_17823 = (state_17822[(1)]);
if((state_val_17823 === (1))){
var state_17822__$1 = state_17822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17822__$1,(2),res,v);
} else {
if((state_val_17823 === (2))){
var inst_17819 = (state_17822[(2)]);
var inst_17820 = cljs.core.async.close_BANG_.call(null,res);
var state_17822__$1 = (function (){var statearr_17824 = state_17822;
(statearr_17824[(7)] = inst_17819);

return statearr_17824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17822__$1,inst_17820);
} else {
return null;
}
}
});})(c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results))
;
return ((function (switch__10277__auto__,c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_17828 = [null,null,null,null,null,null,null,null];
(statearr_17828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__);

(statearr_17828[(1)] = (1));

return statearr_17828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1 = (function (state_17822){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17829){if((e17829 instanceof Object)){
var ex__10281__auto__ = e17829;
var statearr_17830_18000 = state_17822;
(statearr_17830_18000[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18001 = state_17822;
state_17822 = G__18001;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = function(state_17822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1.call(this,state_17822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results))
})();
var state__10344__auto__ = (function (){var statearr_17831 = f__10343__auto__.call(null);
(statearr_17831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___17999);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___17999,res,vec__17817,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17832){
var vec__17833 = p__17832;
var v = cljs.core.nth.call(null,vec__17833,(0),null);
var p = cljs.core.nth.call(null,vec__17833,(1),null);
var job = vec__17833;
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
var n__5997__auto___18002 = n;
var __18003 = (0);
while(true){
if((__18003 < n__5997__auto___18002)){
var G__17834_18004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17834_18004) {
case "compute":
var c__10342__auto___18006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18003,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (__18003,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (1))){
var state_17847__$1 = state_17847;
var statearr_17849_18007 = state_17847__$1;
(statearr_17849_18007[(2)] = null);

(statearr_17849_18007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (2))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17847__$1,(4),jobs);
} else {
if((state_val_17848 === (3))){
var inst_17845 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (4))){
var inst_17837 = (state_17847[(2)]);
var inst_17838 = process.call(null,inst_17837);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17838)){
var statearr_17850_18008 = state_17847__$1;
(statearr_17850_18008[(1)] = (5));

} else {
var statearr_17851_18009 = state_17847__$1;
(statearr_17851_18009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (5))){
var state_17847__$1 = state_17847;
var statearr_17852_18010 = state_17847__$1;
(statearr_17852_18010[(2)] = null);

(statearr_17852_18010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (6))){
var state_17847__$1 = state_17847;
var statearr_17853_18011 = state_17847__$1;
(statearr_17853_18011[(2)] = null);

(statearr_17853_18011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17848 === (7))){
var inst_17843 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17854_18012 = state_17847__$1;
(statearr_17854_18012[(2)] = inst_17843);

(statearr_17854_18012[(1)] = (3));


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
});})(__18003,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
;
return ((function (__18003,switch__10277__auto__,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_17858 = [null,null,null,null,null,null,null];
(statearr_17858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__);

(statearr_17858[(1)] = (1));

return statearr_17858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1 = (function (state_17847){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17859){if((e17859 instanceof Object)){
var ex__10281__auto__ = e17859;
var statearr_17860_18013 = state_17847;
(statearr_17860_18013[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18014 = state_17847;
state_17847 = G__18014;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__;
})()
;})(__18003,switch__10277__auto__,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
})();
var state__10344__auto__ = (function (){var statearr_17861 = f__10343__auto__.call(null);
(statearr_17861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___18006);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(__18003,c__10342__auto___18006,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
);


break;
case "async":
var c__10342__auto___18015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18003,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (__18003,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function (state_17874){
var state_val_17875 = (state_17874[(1)]);
if((state_val_17875 === (1))){
var state_17874__$1 = state_17874;
var statearr_17876_18016 = state_17874__$1;
(statearr_17876_18016[(2)] = null);

(statearr_17876_18016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (2))){
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17874__$1,(4),jobs);
} else {
if((state_val_17875 === (3))){
var inst_17872 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17874__$1,inst_17872);
} else {
if((state_val_17875 === (4))){
var inst_17864 = (state_17874[(2)]);
var inst_17865 = async.call(null,inst_17864);
var state_17874__$1 = state_17874;
if(cljs.core.truth_(inst_17865)){
var statearr_17877_18017 = state_17874__$1;
(statearr_17877_18017[(1)] = (5));

} else {
var statearr_17878_18018 = state_17874__$1;
(statearr_17878_18018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (5))){
var state_17874__$1 = state_17874;
var statearr_17879_18019 = state_17874__$1;
(statearr_17879_18019[(2)] = null);

(statearr_17879_18019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (6))){
var state_17874__$1 = state_17874;
var statearr_17880_18020 = state_17874__$1;
(statearr_17880_18020[(2)] = null);

(statearr_17880_18020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17875 === (7))){
var inst_17870 = (state_17874[(2)]);
var state_17874__$1 = state_17874;
var statearr_17881_18021 = state_17874__$1;
(statearr_17881_18021[(2)] = inst_17870);

(statearr_17881_18021[(1)] = (3));


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
});})(__18003,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
;
return ((function (__18003,switch__10277__auto__,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_17885 = [null,null,null,null,null,null,null];
(statearr_17885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__);

(statearr_17885[(1)] = (1));

return statearr_17885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1 = (function (state_17874){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17886){if((e17886 instanceof Object)){
var ex__10281__auto__ = e17886;
var statearr_17887_18022 = state_17874;
(statearr_17887_18022[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18023 = state_17874;
state_17874 = G__18023;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = function(state_17874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1.call(this,state_17874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__;
})()
;})(__18003,switch__10277__auto__,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
})();
var state__10344__auto__ = (function (){var statearr_17888 = f__10343__auto__.call(null);
(statearr_17888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___18015);

return statearr_17888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(__18003,c__10342__auto___18015,G__17834_18004,n__5997__auto___18002,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18024 = (__18003 + (1));
__18003 = G__18024;
continue;
} else {
}
break;
}

var c__10342__auto___18025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___18025,jobs,results,process,async){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___18025,jobs,results,process,async){
return (function (state_17910){
var state_val_17911 = (state_17910[(1)]);
if((state_val_17911 === (1))){
var state_17910__$1 = state_17910;
var statearr_17912_18026 = state_17910__$1;
(statearr_17912_18026[(2)] = null);

(statearr_17912_18026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (2))){
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(4),from);
} else {
if((state_val_17911 === (3))){
var inst_17908 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17910__$1,inst_17908);
} else {
if((state_val_17911 === (4))){
var inst_17891 = (state_17910[(7)]);
var inst_17891__$1 = (state_17910[(2)]);
var inst_17892 = (inst_17891__$1 == null);
var state_17910__$1 = (function (){var statearr_17913 = state_17910;
(statearr_17913[(7)] = inst_17891__$1);

return statearr_17913;
})();
if(cljs.core.truth_(inst_17892)){
var statearr_17914_18027 = state_17910__$1;
(statearr_17914_18027[(1)] = (5));

} else {
var statearr_17915_18028 = state_17910__$1;
(statearr_17915_18028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (5))){
var inst_17894 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17910__$1 = state_17910;
var statearr_17916_18029 = state_17910__$1;
(statearr_17916_18029[(2)] = inst_17894);

(statearr_17916_18029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (6))){
var inst_17896 = (state_17910[(8)]);
var inst_17891 = (state_17910[(7)]);
var inst_17896__$1 = cljs.core.async.chan.call(null,(1));
var inst_17897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17898 = [inst_17891,inst_17896__$1];
var inst_17899 = (new cljs.core.PersistentVector(null,2,(5),inst_17897,inst_17898,null));
var state_17910__$1 = (function (){var statearr_17917 = state_17910;
(statearr_17917[(8)] = inst_17896__$1);

return statearr_17917;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17910__$1,(8),jobs,inst_17899);
} else {
if((state_val_17911 === (7))){
var inst_17906 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17918_18030 = state_17910__$1;
(statearr_17918_18030[(2)] = inst_17906);

(statearr_17918_18030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (8))){
var inst_17896 = (state_17910[(8)]);
var inst_17901 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17919 = state_17910;
(statearr_17919[(9)] = inst_17901);

return statearr_17919;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17910__$1,(9),results,inst_17896);
} else {
if((state_val_17911 === (9))){
var inst_17903 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17920 = state_17910;
(statearr_17920[(10)] = inst_17903);

return statearr_17920;
})();
var statearr_17921_18031 = state_17910__$1;
(statearr_17921_18031[(2)] = null);

(statearr_17921_18031[(1)] = (2));


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
});})(c__10342__auto___18025,jobs,results,process,async))
;
return ((function (switch__10277__auto__,c__10342__auto___18025,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_17925 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__);

(statearr_17925[(1)] = (1));

return statearr_17925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1 = (function (state_17910){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17926){if((e17926 instanceof Object)){
var ex__10281__auto__ = e17926;
var statearr_17927_18032 = state_17910;
(statearr_17927_18032[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18033 = state_17910;
state_17910 = G__18033;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___18025,jobs,results,process,async))
})();
var state__10344__auto__ = (function (){var statearr_17928 = f__10343__auto__.call(null);
(statearr_17928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___18025);

return statearr_17928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___18025,jobs,results,process,async))
);


var c__10342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto__,jobs,results,process,async){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto__,jobs,results,process,async){
return (function (state_17966){
var state_val_17967 = (state_17966[(1)]);
if((state_val_17967 === (7))){
var inst_17962 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17968_18034 = state_17966__$1;
(statearr_17968_18034[(2)] = inst_17962);

(statearr_17968_18034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (20))){
var state_17966__$1 = state_17966;
var statearr_17969_18035 = state_17966__$1;
(statearr_17969_18035[(2)] = null);

(statearr_17969_18035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (1))){
var state_17966__$1 = state_17966;
var statearr_17970_18036 = state_17966__$1;
(statearr_17970_18036[(2)] = null);

(statearr_17970_18036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (4))){
var inst_17931 = (state_17966[(7)]);
var inst_17931__$1 = (state_17966[(2)]);
var inst_17932 = (inst_17931__$1 == null);
var state_17966__$1 = (function (){var statearr_17971 = state_17966;
(statearr_17971[(7)] = inst_17931__$1);

return statearr_17971;
})();
if(cljs.core.truth_(inst_17932)){
var statearr_17972_18037 = state_17966__$1;
(statearr_17972_18037[(1)] = (5));

} else {
var statearr_17973_18038 = state_17966__$1;
(statearr_17973_18038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (15))){
var inst_17944 = (state_17966[(8)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17966__$1,(18),to,inst_17944);
} else {
if((state_val_17967 === (21))){
var inst_17957 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17974_18039 = state_17966__$1;
(statearr_17974_18039[(2)] = inst_17957);

(statearr_17974_18039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (13))){
var inst_17959 = (state_17966[(2)]);
var state_17966__$1 = (function (){var statearr_17975 = state_17966;
(statearr_17975[(9)] = inst_17959);

return statearr_17975;
})();
var statearr_17976_18040 = state_17966__$1;
(statearr_17976_18040[(2)] = null);

(statearr_17976_18040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (6))){
var inst_17931 = (state_17966[(7)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(11),inst_17931);
} else {
if((state_val_17967 === (17))){
var inst_17952 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
if(cljs.core.truth_(inst_17952)){
var statearr_17977_18041 = state_17966__$1;
(statearr_17977_18041[(1)] = (19));

} else {
var statearr_17978_18042 = state_17966__$1;
(statearr_17978_18042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (3))){
var inst_17964 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17966__$1,inst_17964);
} else {
if((state_val_17967 === (12))){
var inst_17941 = (state_17966[(10)]);
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(14),inst_17941);
} else {
if((state_val_17967 === (2))){
var state_17966__$1 = state_17966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17966__$1,(4),results);
} else {
if((state_val_17967 === (19))){
var state_17966__$1 = state_17966;
var statearr_17979_18043 = state_17966__$1;
(statearr_17979_18043[(2)] = null);

(statearr_17979_18043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (11))){
var inst_17941 = (state_17966[(2)]);
var state_17966__$1 = (function (){var statearr_17980 = state_17966;
(statearr_17980[(10)] = inst_17941);

return statearr_17980;
})();
var statearr_17981_18044 = state_17966__$1;
(statearr_17981_18044[(2)] = null);

(statearr_17981_18044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (9))){
var state_17966__$1 = state_17966;
var statearr_17982_18045 = state_17966__$1;
(statearr_17982_18045[(2)] = null);

(statearr_17982_18045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (5))){
var state_17966__$1 = state_17966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17983_18046 = state_17966__$1;
(statearr_17983_18046[(1)] = (8));

} else {
var statearr_17984_18047 = state_17966__$1;
(statearr_17984_18047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (14))){
var inst_17946 = (state_17966[(11)]);
var inst_17944 = (state_17966[(8)]);
var inst_17944__$1 = (state_17966[(2)]);
var inst_17945 = (inst_17944__$1 == null);
var inst_17946__$1 = cljs.core.not.call(null,inst_17945);
var state_17966__$1 = (function (){var statearr_17985 = state_17966;
(statearr_17985[(11)] = inst_17946__$1);

(statearr_17985[(8)] = inst_17944__$1);

return statearr_17985;
})();
if(inst_17946__$1){
var statearr_17986_18048 = state_17966__$1;
(statearr_17986_18048[(1)] = (15));

} else {
var statearr_17987_18049 = state_17966__$1;
(statearr_17987_18049[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (16))){
var inst_17946 = (state_17966[(11)]);
var state_17966__$1 = state_17966;
var statearr_17988_18050 = state_17966__$1;
(statearr_17988_18050[(2)] = inst_17946);

(statearr_17988_18050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (10))){
var inst_17938 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17989_18051 = state_17966__$1;
(statearr_17989_18051[(2)] = inst_17938);

(statearr_17989_18051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (18))){
var inst_17949 = (state_17966[(2)]);
var state_17966__$1 = state_17966;
var statearr_17990_18052 = state_17966__$1;
(statearr_17990_18052[(2)] = inst_17949);

(statearr_17990_18052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17967 === (8))){
var inst_17935 = cljs.core.async.close_BANG_.call(null,to);
var state_17966__$1 = state_17966;
var statearr_17991_18053 = state_17966__$1;
(statearr_17991_18053[(2)] = inst_17935);

(statearr_17991_18053[(1)] = (10));


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
});})(c__10342__auto__,jobs,results,process,async))
;
return ((function (switch__10277__auto__,c__10342__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_17995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__);

(statearr_17995[(1)] = (1));

return statearr_17995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1 = (function (state_17966){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_17966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e17996){if((e17996 instanceof Object)){
var ex__10281__auto__ = e17996;
var statearr_17997_18054 = state_17966;
(statearr_17997_18054[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18055 = state_17966;
state_17966 = G__18055;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__ = function(state_17966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1.call(this,state_17966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto__,jobs,results,process,async))
})();
var state__10344__auto__ = (function (){var statearr_17998 = f__10343__auto__.call(null);
(statearr_17998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto__);

return statearr_17998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto__,jobs,results,process,async))
);

return c__10342__auto__;
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
var args18056 = [];
var len__6152__auto___18059 = arguments.length;
var i__6153__auto___18060 = (0);
while(true){
if((i__6153__auto___18060 < len__6152__auto___18059)){
args18056.push((arguments[i__6153__auto___18060]));

var G__18061 = (i__6153__auto___18060 + (1));
i__6153__auto___18060 = G__18061;
continue;
} else {
}
break;
}

var G__18058 = args18056.length;
switch (G__18058) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18056.length)].join('')));

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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18063.length)].join('')));

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
var args18070 = [];
var len__6152__auto___18123 = arguments.length;
var i__6153__auto___18124 = (0);
while(true){
if((i__6153__auto___18124 < len__6152__auto___18123)){
args18070.push((arguments[i__6153__auto___18124]));

var G__18125 = (i__6153__auto___18124 + (1));
i__6153__auto___18124 = G__18125;
continue;
} else {
}
break;
}

var G__18072 = args18070.length;
switch (G__18072) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18070.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10342__auto___18127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___18127,tc,fc){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___18127,tc,fc){
return (function (state_18098){
var state_val_18099 = (state_18098[(1)]);
if((state_val_18099 === (7))){
var inst_18094 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18100_18128 = state_18098__$1;
(statearr_18100_18128[(2)] = inst_18094);

(statearr_18100_18128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (1))){
var state_18098__$1 = state_18098;
var statearr_18101_18129 = state_18098__$1;
(statearr_18101_18129[(2)] = null);

(statearr_18101_18129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (4))){
var inst_18075 = (state_18098[(7)]);
var inst_18075__$1 = (state_18098[(2)]);
var inst_18076 = (inst_18075__$1 == null);
var state_18098__$1 = (function (){var statearr_18102 = state_18098;
(statearr_18102[(7)] = inst_18075__$1);

return statearr_18102;
})();
if(cljs.core.truth_(inst_18076)){
var statearr_18103_18130 = state_18098__$1;
(statearr_18103_18130[(1)] = (5));

} else {
var statearr_18104_18131 = state_18098__$1;
(statearr_18104_18131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (13))){
var state_18098__$1 = state_18098;
var statearr_18105_18132 = state_18098__$1;
(statearr_18105_18132[(2)] = null);

(statearr_18105_18132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (6))){
var inst_18075 = (state_18098[(7)]);
var inst_18081 = p.call(null,inst_18075);
var state_18098__$1 = state_18098;
if(cljs.core.truth_(inst_18081)){
var statearr_18106_18133 = state_18098__$1;
(statearr_18106_18133[(1)] = (9));

} else {
var statearr_18107_18134 = state_18098__$1;
(statearr_18107_18134[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (3))){
var inst_18096 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18098__$1,inst_18096);
} else {
if((state_val_18099 === (12))){
var state_18098__$1 = state_18098;
var statearr_18108_18135 = state_18098__$1;
(statearr_18108_18135[(2)] = null);

(statearr_18108_18135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (2))){
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18098__$1,(4),ch);
} else {
if((state_val_18099 === (11))){
var inst_18075 = (state_18098[(7)]);
var inst_18085 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18098__$1,(8),inst_18085,inst_18075);
} else {
if((state_val_18099 === (9))){
var state_18098__$1 = state_18098;
var statearr_18109_18136 = state_18098__$1;
(statearr_18109_18136[(2)] = tc);

(statearr_18109_18136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (5))){
var inst_18078 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18079 = cljs.core.async.close_BANG_.call(null,fc);
var state_18098__$1 = (function (){var statearr_18110 = state_18098;
(statearr_18110[(8)] = inst_18078);

return statearr_18110;
})();
var statearr_18111_18137 = state_18098__$1;
(statearr_18111_18137[(2)] = inst_18079);

(statearr_18111_18137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (14))){
var inst_18092 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18112_18138 = state_18098__$1;
(statearr_18112_18138[(2)] = inst_18092);

(statearr_18112_18138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (10))){
var state_18098__$1 = state_18098;
var statearr_18113_18139 = state_18098__$1;
(statearr_18113_18139[(2)] = fc);

(statearr_18113_18139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (8))){
var inst_18087 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
if(cljs.core.truth_(inst_18087)){
var statearr_18114_18140 = state_18098__$1;
(statearr_18114_18140[(1)] = (12));

} else {
var statearr_18115_18141 = state_18098__$1;
(statearr_18115_18141[(1)] = (13));

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
});})(c__10342__auto___18127,tc,fc))
;
return ((function (switch__10277__auto__,c__10342__auto___18127,tc,fc){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_18119 = [null,null,null,null,null,null,null,null,null];
(statearr_18119[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_18119[(1)] = (1));

return statearr_18119;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_18098){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_18098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e18120){if((e18120 instanceof Object)){
var ex__10281__auto__ = e18120;
var statearr_18121_18142 = state_18098;
(statearr_18121_18142[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18143 = state_18098;
state_18098 = G__18143;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_18098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_18098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___18127,tc,fc))
})();
var state__10344__auto__ = (function (){var statearr_18122 = f__10343__auto__.call(null);
(statearr_18122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___18127);

return statearr_18122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___18127,tc,fc))
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
var c__10342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto__){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto__){
return (function (state_18190){
var state_val_18191 = (state_18190[(1)]);
if((state_val_18191 === (1))){
var inst_18176 = init;
var state_18190__$1 = (function (){var statearr_18192 = state_18190;
(statearr_18192[(7)] = inst_18176);

return statearr_18192;
})();
var statearr_18193_18208 = state_18190__$1;
(statearr_18193_18208[(2)] = null);

(statearr_18193_18208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (2))){
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18190__$1,(4),ch);
} else {
if((state_val_18191 === (3))){
var inst_18188 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18190__$1,inst_18188);
} else {
if((state_val_18191 === (4))){
var inst_18179 = (state_18190[(8)]);
var inst_18179__$1 = (state_18190[(2)]);
var inst_18180 = (inst_18179__$1 == null);
var state_18190__$1 = (function (){var statearr_18194 = state_18190;
(statearr_18194[(8)] = inst_18179__$1);

return statearr_18194;
})();
if(cljs.core.truth_(inst_18180)){
var statearr_18195_18209 = state_18190__$1;
(statearr_18195_18209[(1)] = (5));

} else {
var statearr_18196_18210 = state_18190__$1;
(statearr_18196_18210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (5))){
var inst_18176 = (state_18190[(7)]);
var state_18190__$1 = state_18190;
var statearr_18197_18211 = state_18190__$1;
(statearr_18197_18211[(2)] = inst_18176);

(statearr_18197_18211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (6))){
var inst_18176 = (state_18190[(7)]);
var inst_18179 = (state_18190[(8)]);
var inst_18183 = f.call(null,inst_18176,inst_18179);
var inst_18176__$1 = inst_18183;
var state_18190__$1 = (function (){var statearr_18198 = state_18190;
(statearr_18198[(7)] = inst_18176__$1);

return statearr_18198;
})();
var statearr_18199_18212 = state_18190__$1;
(statearr_18199_18212[(2)] = null);

(statearr_18199_18212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18191 === (7))){
var inst_18186 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18200_18213 = state_18190__$1;
(statearr_18200_18213[(2)] = inst_18186);

(statearr_18200_18213[(1)] = (3));


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
});})(c__10342__auto__))
;
return ((function (switch__10277__auto__,c__10342__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10278__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10278__auto____0 = (function (){
var statearr_18204 = [null,null,null,null,null,null,null,null,null];
(statearr_18204[(0)] = cljs$core$async$reduce_$_state_machine__10278__auto__);

(statearr_18204[(1)] = (1));

return statearr_18204;
});
var cljs$core$async$reduce_$_state_machine__10278__auto____1 = (function (state_18190){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_18190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e18205){if((e18205 instanceof Object)){
var ex__10281__auto__ = e18205;
var statearr_18206_18214 = state_18190;
(statearr_18206_18214[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18215 = state_18190;
state_18190 = G__18215;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10278__auto__ = function(state_18190){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10278__auto____1.call(this,state_18190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10278__auto____0;
cljs$core$async$reduce_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10278__auto____1;
return cljs$core$async$reduce_$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto__))
})();
var state__10344__auto__ = (function (){var statearr_18207 = f__10343__auto__.call(null);
(statearr_18207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto__);

return statearr_18207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto__))
);

return c__10342__auto__;
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
var args18216 = [];
var len__6152__auto___18268 = arguments.length;
var i__6153__auto___18269 = (0);
while(true){
if((i__6153__auto___18269 < len__6152__auto___18268)){
args18216.push((arguments[i__6153__auto___18269]));

var G__18270 = (i__6153__auto___18269 + (1));
i__6153__auto___18269 = G__18270;
continue;
} else {
}
break;
}

var G__18218 = args18216.length;
switch (G__18218) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18216.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto__){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto__){
return (function (state_18243){
var state_val_18244 = (state_18243[(1)]);
if((state_val_18244 === (7))){
var inst_18225 = (state_18243[(2)]);
var state_18243__$1 = state_18243;
var statearr_18245_18272 = state_18243__$1;
(statearr_18245_18272[(2)] = inst_18225);

(statearr_18245_18272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (1))){
var inst_18219 = cljs.core.seq.call(null,coll);
var inst_18220 = inst_18219;
var state_18243__$1 = (function (){var statearr_18246 = state_18243;
(statearr_18246[(7)] = inst_18220);

return statearr_18246;
})();
var statearr_18247_18273 = state_18243__$1;
(statearr_18247_18273[(2)] = null);

(statearr_18247_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (4))){
var inst_18220 = (state_18243[(7)]);
var inst_18223 = cljs.core.first.call(null,inst_18220);
var state_18243__$1 = state_18243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18243__$1,(7),ch,inst_18223);
} else {
if((state_val_18244 === (13))){
var inst_18237 = (state_18243[(2)]);
var state_18243__$1 = state_18243;
var statearr_18248_18274 = state_18243__$1;
(statearr_18248_18274[(2)] = inst_18237);

(statearr_18248_18274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (6))){
var inst_18228 = (state_18243[(2)]);
var state_18243__$1 = state_18243;
if(cljs.core.truth_(inst_18228)){
var statearr_18249_18275 = state_18243__$1;
(statearr_18249_18275[(1)] = (8));

} else {
var statearr_18250_18276 = state_18243__$1;
(statearr_18250_18276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (3))){
var inst_18241 = (state_18243[(2)]);
var state_18243__$1 = state_18243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18243__$1,inst_18241);
} else {
if((state_val_18244 === (12))){
var state_18243__$1 = state_18243;
var statearr_18251_18277 = state_18243__$1;
(statearr_18251_18277[(2)] = null);

(statearr_18251_18277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (2))){
var inst_18220 = (state_18243[(7)]);
var state_18243__$1 = state_18243;
if(cljs.core.truth_(inst_18220)){
var statearr_18252_18278 = state_18243__$1;
(statearr_18252_18278[(1)] = (4));

} else {
var statearr_18253_18279 = state_18243__$1;
(statearr_18253_18279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (11))){
var inst_18234 = cljs.core.async.close_BANG_.call(null,ch);
var state_18243__$1 = state_18243;
var statearr_18254_18280 = state_18243__$1;
(statearr_18254_18280[(2)] = inst_18234);

(statearr_18254_18280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (9))){
var state_18243__$1 = state_18243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18255_18281 = state_18243__$1;
(statearr_18255_18281[(1)] = (11));

} else {
var statearr_18256_18282 = state_18243__$1;
(statearr_18256_18282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (5))){
var inst_18220 = (state_18243[(7)]);
var state_18243__$1 = state_18243;
var statearr_18257_18283 = state_18243__$1;
(statearr_18257_18283[(2)] = inst_18220);

(statearr_18257_18283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (10))){
var inst_18239 = (state_18243[(2)]);
var state_18243__$1 = state_18243;
var statearr_18258_18284 = state_18243__$1;
(statearr_18258_18284[(2)] = inst_18239);

(statearr_18258_18284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18244 === (8))){
var inst_18220 = (state_18243[(7)]);
var inst_18230 = cljs.core.next.call(null,inst_18220);
var inst_18220__$1 = inst_18230;
var state_18243__$1 = (function (){var statearr_18259 = state_18243;
(statearr_18259[(7)] = inst_18220__$1);

return statearr_18259;
})();
var statearr_18260_18285 = state_18243__$1;
(statearr_18260_18285[(2)] = null);

(statearr_18260_18285[(1)] = (2));


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
});})(c__10342__auto__))
;
return ((function (switch__10277__auto__,c__10342__auto__){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_18264 = [null,null,null,null,null,null,null,null];
(statearr_18264[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_18264[(1)] = (1));

return statearr_18264;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_18243){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_18243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e18265){if((e18265 instanceof Object)){
var ex__10281__auto__ = e18265;
var statearr_18266_18286 = state_18243;
(statearr_18266_18286[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18287 = state_18243;
state_18243 = G__18287;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_18243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_18243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto__))
})();
var state__10344__auto__ = (function (){var statearr_18267 = f__10343__auto__.call(null);
(statearr_18267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto__);

return statearr_18267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto__))
);

return c__10342__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18509 = (function (mult,ch,cs,meta18510){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18510 = meta18510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18511,meta18510__$1){
var self__ = this;
var _18511__$1 = this;
return (new cljs.core.async.t_cljs$core$async18509(self__.mult,self__.ch,self__.cs,meta18510__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18511){
var self__ = this;
var _18511__$1 = this;
return self__.meta18510;
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18510","meta18510",2127276117,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18509";

cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18509");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18509 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18509(mult__$1,ch__$1,cs__$1,meta18510){
return (new cljs.core.async.t_cljs$core$async18509(mult__$1,ch__$1,cs__$1,meta18510));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18509(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10342__auto___18730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___18730,cs,m,dchan,dctr,done){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___18730,cs,m,dchan,dctr,done){
return (function (state_18642){
var state_val_18643 = (state_18642[(1)]);
if((state_val_18643 === (7))){
var inst_18638 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18644_18731 = state_18642__$1;
(statearr_18644_18731[(2)] = inst_18638);

(statearr_18644_18731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (20))){
var inst_18543 = (state_18642[(7)]);
var inst_18553 = cljs.core.first.call(null,inst_18543);
var inst_18554 = cljs.core.nth.call(null,inst_18553,(0),null);
var inst_18555 = cljs.core.nth.call(null,inst_18553,(1),null);
var state_18642__$1 = (function (){var statearr_18645 = state_18642;
(statearr_18645[(8)] = inst_18554);

return statearr_18645;
})();
if(cljs.core.truth_(inst_18555)){
var statearr_18646_18732 = state_18642__$1;
(statearr_18646_18732[(1)] = (22));

} else {
var statearr_18647_18733 = state_18642__$1;
(statearr_18647_18733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (27))){
var inst_18514 = (state_18642[(9)]);
var inst_18583 = (state_18642[(10)]);
var inst_18585 = (state_18642[(11)]);
var inst_18590 = (state_18642[(12)]);
var inst_18590__$1 = cljs.core._nth.call(null,inst_18583,inst_18585);
var inst_18591 = cljs.core.async.put_BANG_.call(null,inst_18590__$1,inst_18514,done);
var state_18642__$1 = (function (){var statearr_18648 = state_18642;
(statearr_18648[(12)] = inst_18590__$1);

return statearr_18648;
})();
if(cljs.core.truth_(inst_18591)){
var statearr_18649_18734 = state_18642__$1;
(statearr_18649_18734[(1)] = (30));

} else {
var statearr_18650_18735 = state_18642__$1;
(statearr_18650_18735[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (1))){
var state_18642__$1 = state_18642;
var statearr_18651_18736 = state_18642__$1;
(statearr_18651_18736[(2)] = null);

(statearr_18651_18736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (24))){
var inst_18543 = (state_18642[(7)]);
var inst_18560 = (state_18642[(2)]);
var inst_18561 = cljs.core.next.call(null,inst_18543);
var inst_18523 = inst_18561;
var inst_18524 = null;
var inst_18525 = (0);
var inst_18526 = (0);
var state_18642__$1 = (function (){var statearr_18652 = state_18642;
(statearr_18652[(13)] = inst_18525);

(statearr_18652[(14)] = inst_18526);

(statearr_18652[(15)] = inst_18523);

(statearr_18652[(16)] = inst_18524);

(statearr_18652[(17)] = inst_18560);

return statearr_18652;
})();
var statearr_18653_18737 = state_18642__$1;
(statearr_18653_18737[(2)] = null);

(statearr_18653_18737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (39))){
var state_18642__$1 = state_18642;
var statearr_18657_18738 = state_18642__$1;
(statearr_18657_18738[(2)] = null);

(statearr_18657_18738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (4))){
var inst_18514 = (state_18642[(9)]);
var inst_18514__$1 = (state_18642[(2)]);
var inst_18515 = (inst_18514__$1 == null);
var state_18642__$1 = (function (){var statearr_18658 = state_18642;
(statearr_18658[(9)] = inst_18514__$1);

return statearr_18658;
})();
if(cljs.core.truth_(inst_18515)){
var statearr_18659_18739 = state_18642__$1;
(statearr_18659_18739[(1)] = (5));

} else {
var statearr_18660_18740 = state_18642__$1;
(statearr_18660_18740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (15))){
var inst_18525 = (state_18642[(13)]);
var inst_18526 = (state_18642[(14)]);
var inst_18523 = (state_18642[(15)]);
var inst_18524 = (state_18642[(16)]);
var inst_18539 = (state_18642[(2)]);
var inst_18540 = (inst_18526 + (1));
var tmp18654 = inst_18525;
var tmp18655 = inst_18523;
var tmp18656 = inst_18524;
var inst_18523__$1 = tmp18655;
var inst_18524__$1 = tmp18656;
var inst_18525__$1 = tmp18654;
var inst_18526__$1 = inst_18540;
var state_18642__$1 = (function (){var statearr_18661 = state_18642;
(statearr_18661[(13)] = inst_18525__$1);

(statearr_18661[(18)] = inst_18539);

(statearr_18661[(14)] = inst_18526__$1);

(statearr_18661[(15)] = inst_18523__$1);

(statearr_18661[(16)] = inst_18524__$1);

return statearr_18661;
})();
var statearr_18662_18741 = state_18642__$1;
(statearr_18662_18741[(2)] = null);

(statearr_18662_18741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (21))){
var inst_18564 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18666_18742 = state_18642__$1;
(statearr_18666_18742[(2)] = inst_18564);

(statearr_18666_18742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (31))){
var inst_18590 = (state_18642[(12)]);
var inst_18594 = done.call(null,null);
var inst_18595 = cljs.core.async.untap_STAR_.call(null,m,inst_18590);
var state_18642__$1 = (function (){var statearr_18667 = state_18642;
(statearr_18667[(19)] = inst_18594);

return statearr_18667;
})();
var statearr_18668_18743 = state_18642__$1;
(statearr_18668_18743[(2)] = inst_18595);

(statearr_18668_18743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (32))){
var inst_18584 = (state_18642[(20)]);
var inst_18582 = (state_18642[(21)]);
var inst_18583 = (state_18642[(10)]);
var inst_18585 = (state_18642[(11)]);
var inst_18597 = (state_18642[(2)]);
var inst_18598 = (inst_18585 + (1));
var tmp18663 = inst_18584;
var tmp18664 = inst_18582;
var tmp18665 = inst_18583;
var inst_18582__$1 = tmp18664;
var inst_18583__$1 = tmp18665;
var inst_18584__$1 = tmp18663;
var inst_18585__$1 = inst_18598;
var state_18642__$1 = (function (){var statearr_18669 = state_18642;
(statearr_18669[(20)] = inst_18584__$1);

(statearr_18669[(21)] = inst_18582__$1);

(statearr_18669[(10)] = inst_18583__$1);

(statearr_18669[(22)] = inst_18597);

(statearr_18669[(11)] = inst_18585__$1);

return statearr_18669;
})();
var statearr_18670_18744 = state_18642__$1;
(statearr_18670_18744[(2)] = null);

(statearr_18670_18744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (40))){
var inst_18610 = (state_18642[(23)]);
var inst_18614 = done.call(null,null);
var inst_18615 = cljs.core.async.untap_STAR_.call(null,m,inst_18610);
var state_18642__$1 = (function (){var statearr_18671 = state_18642;
(statearr_18671[(24)] = inst_18614);

return statearr_18671;
})();
var statearr_18672_18745 = state_18642__$1;
(statearr_18672_18745[(2)] = inst_18615);

(statearr_18672_18745[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (33))){
var inst_18601 = (state_18642[(25)]);
var inst_18603 = cljs.core.chunked_seq_QMARK_.call(null,inst_18601);
var state_18642__$1 = state_18642;
if(inst_18603){
var statearr_18673_18746 = state_18642__$1;
(statearr_18673_18746[(1)] = (36));

} else {
var statearr_18674_18747 = state_18642__$1;
(statearr_18674_18747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (13))){
var inst_18533 = (state_18642[(26)]);
var inst_18536 = cljs.core.async.close_BANG_.call(null,inst_18533);
var state_18642__$1 = state_18642;
var statearr_18675_18748 = state_18642__$1;
(statearr_18675_18748[(2)] = inst_18536);

(statearr_18675_18748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (22))){
var inst_18554 = (state_18642[(8)]);
var inst_18557 = cljs.core.async.close_BANG_.call(null,inst_18554);
var state_18642__$1 = state_18642;
var statearr_18676_18749 = state_18642__$1;
(statearr_18676_18749[(2)] = inst_18557);

(statearr_18676_18749[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (36))){
var inst_18601 = (state_18642[(25)]);
var inst_18605 = cljs.core.chunk_first.call(null,inst_18601);
var inst_18606 = cljs.core.chunk_rest.call(null,inst_18601);
var inst_18607 = cljs.core.count.call(null,inst_18605);
var inst_18582 = inst_18606;
var inst_18583 = inst_18605;
var inst_18584 = inst_18607;
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18677 = state_18642;
(statearr_18677[(20)] = inst_18584);

(statearr_18677[(21)] = inst_18582);

(statearr_18677[(10)] = inst_18583);

(statearr_18677[(11)] = inst_18585);

return statearr_18677;
})();
var statearr_18678_18750 = state_18642__$1;
(statearr_18678_18750[(2)] = null);

(statearr_18678_18750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (41))){
var inst_18601 = (state_18642[(25)]);
var inst_18617 = (state_18642[(2)]);
var inst_18618 = cljs.core.next.call(null,inst_18601);
var inst_18582 = inst_18618;
var inst_18583 = null;
var inst_18584 = (0);
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18679 = state_18642;
(statearr_18679[(20)] = inst_18584);

(statearr_18679[(21)] = inst_18582);

(statearr_18679[(10)] = inst_18583);

(statearr_18679[(11)] = inst_18585);

(statearr_18679[(27)] = inst_18617);

return statearr_18679;
})();
var statearr_18680_18751 = state_18642__$1;
(statearr_18680_18751[(2)] = null);

(statearr_18680_18751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (43))){
var state_18642__$1 = state_18642;
var statearr_18681_18752 = state_18642__$1;
(statearr_18681_18752[(2)] = null);

(statearr_18681_18752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (29))){
var inst_18626 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18682_18753 = state_18642__$1;
(statearr_18682_18753[(2)] = inst_18626);

(statearr_18682_18753[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (44))){
var inst_18635 = (state_18642[(2)]);
var state_18642__$1 = (function (){var statearr_18683 = state_18642;
(statearr_18683[(28)] = inst_18635);

return statearr_18683;
})();
var statearr_18684_18754 = state_18642__$1;
(statearr_18684_18754[(2)] = null);

(statearr_18684_18754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (6))){
var inst_18574 = (state_18642[(29)]);
var inst_18573 = cljs.core.deref.call(null,cs);
var inst_18574__$1 = cljs.core.keys.call(null,inst_18573);
var inst_18575 = cljs.core.count.call(null,inst_18574__$1);
var inst_18576 = cljs.core.reset_BANG_.call(null,dctr,inst_18575);
var inst_18581 = cljs.core.seq.call(null,inst_18574__$1);
var inst_18582 = inst_18581;
var inst_18583 = null;
var inst_18584 = (0);
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18685 = state_18642;
(statearr_18685[(20)] = inst_18584);

(statearr_18685[(21)] = inst_18582);

(statearr_18685[(10)] = inst_18583);

(statearr_18685[(29)] = inst_18574__$1);

(statearr_18685[(11)] = inst_18585);

(statearr_18685[(30)] = inst_18576);

return statearr_18685;
})();
var statearr_18686_18755 = state_18642__$1;
(statearr_18686_18755[(2)] = null);

(statearr_18686_18755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (28))){
var inst_18582 = (state_18642[(21)]);
var inst_18601 = (state_18642[(25)]);
var inst_18601__$1 = cljs.core.seq.call(null,inst_18582);
var state_18642__$1 = (function (){var statearr_18687 = state_18642;
(statearr_18687[(25)] = inst_18601__$1);

return statearr_18687;
})();
if(inst_18601__$1){
var statearr_18688_18756 = state_18642__$1;
(statearr_18688_18756[(1)] = (33));

} else {
var statearr_18689_18757 = state_18642__$1;
(statearr_18689_18757[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (25))){
var inst_18584 = (state_18642[(20)]);
var inst_18585 = (state_18642[(11)]);
var inst_18587 = (inst_18585 < inst_18584);
var inst_18588 = inst_18587;
var state_18642__$1 = state_18642;
if(cljs.core.truth_(inst_18588)){
var statearr_18690_18758 = state_18642__$1;
(statearr_18690_18758[(1)] = (27));

} else {
var statearr_18691_18759 = state_18642__$1;
(statearr_18691_18759[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (34))){
var state_18642__$1 = state_18642;
var statearr_18692_18760 = state_18642__$1;
(statearr_18692_18760[(2)] = null);

(statearr_18692_18760[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (17))){
var state_18642__$1 = state_18642;
var statearr_18693_18761 = state_18642__$1;
(statearr_18693_18761[(2)] = null);

(statearr_18693_18761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (3))){
var inst_18640 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18642__$1,inst_18640);
} else {
if((state_val_18643 === (12))){
var inst_18569 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18694_18762 = state_18642__$1;
(statearr_18694_18762[(2)] = inst_18569);

(statearr_18694_18762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (2))){
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18642__$1,(4),ch);
} else {
if((state_val_18643 === (23))){
var state_18642__$1 = state_18642;
var statearr_18695_18763 = state_18642__$1;
(statearr_18695_18763[(2)] = null);

(statearr_18695_18763[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (35))){
var inst_18624 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18696_18764 = state_18642__$1;
(statearr_18696_18764[(2)] = inst_18624);

(statearr_18696_18764[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (19))){
var inst_18543 = (state_18642[(7)]);
var inst_18547 = cljs.core.chunk_first.call(null,inst_18543);
var inst_18548 = cljs.core.chunk_rest.call(null,inst_18543);
var inst_18549 = cljs.core.count.call(null,inst_18547);
var inst_18523 = inst_18548;
var inst_18524 = inst_18547;
var inst_18525 = inst_18549;
var inst_18526 = (0);
var state_18642__$1 = (function (){var statearr_18697 = state_18642;
(statearr_18697[(13)] = inst_18525);

(statearr_18697[(14)] = inst_18526);

(statearr_18697[(15)] = inst_18523);

(statearr_18697[(16)] = inst_18524);

return statearr_18697;
})();
var statearr_18698_18765 = state_18642__$1;
(statearr_18698_18765[(2)] = null);

(statearr_18698_18765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (11))){
var inst_18543 = (state_18642[(7)]);
var inst_18523 = (state_18642[(15)]);
var inst_18543__$1 = cljs.core.seq.call(null,inst_18523);
var state_18642__$1 = (function (){var statearr_18699 = state_18642;
(statearr_18699[(7)] = inst_18543__$1);

return statearr_18699;
})();
if(inst_18543__$1){
var statearr_18700_18766 = state_18642__$1;
(statearr_18700_18766[(1)] = (16));

} else {
var statearr_18701_18767 = state_18642__$1;
(statearr_18701_18767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (9))){
var inst_18571 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18702_18768 = state_18642__$1;
(statearr_18702_18768[(2)] = inst_18571);

(statearr_18702_18768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (5))){
var inst_18521 = cljs.core.deref.call(null,cs);
var inst_18522 = cljs.core.seq.call(null,inst_18521);
var inst_18523 = inst_18522;
var inst_18524 = null;
var inst_18525 = (0);
var inst_18526 = (0);
var state_18642__$1 = (function (){var statearr_18703 = state_18642;
(statearr_18703[(13)] = inst_18525);

(statearr_18703[(14)] = inst_18526);

(statearr_18703[(15)] = inst_18523);

(statearr_18703[(16)] = inst_18524);

return statearr_18703;
})();
var statearr_18704_18769 = state_18642__$1;
(statearr_18704_18769[(2)] = null);

(statearr_18704_18769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (14))){
var state_18642__$1 = state_18642;
var statearr_18705_18770 = state_18642__$1;
(statearr_18705_18770[(2)] = null);

(statearr_18705_18770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (45))){
var inst_18632 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18706_18771 = state_18642__$1;
(statearr_18706_18771[(2)] = inst_18632);

(statearr_18706_18771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (26))){
var inst_18574 = (state_18642[(29)]);
var inst_18628 = (state_18642[(2)]);
var inst_18629 = cljs.core.seq.call(null,inst_18574);
var state_18642__$1 = (function (){var statearr_18707 = state_18642;
(statearr_18707[(31)] = inst_18628);

return statearr_18707;
})();
if(inst_18629){
var statearr_18708_18772 = state_18642__$1;
(statearr_18708_18772[(1)] = (42));

} else {
var statearr_18709_18773 = state_18642__$1;
(statearr_18709_18773[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (16))){
var inst_18543 = (state_18642[(7)]);
var inst_18545 = cljs.core.chunked_seq_QMARK_.call(null,inst_18543);
var state_18642__$1 = state_18642;
if(inst_18545){
var statearr_18710_18774 = state_18642__$1;
(statearr_18710_18774[(1)] = (19));

} else {
var statearr_18711_18775 = state_18642__$1;
(statearr_18711_18775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (38))){
var inst_18621 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18712_18776 = state_18642__$1;
(statearr_18712_18776[(2)] = inst_18621);

(statearr_18712_18776[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (30))){
var state_18642__$1 = state_18642;
var statearr_18713_18777 = state_18642__$1;
(statearr_18713_18777[(2)] = null);

(statearr_18713_18777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (10))){
var inst_18526 = (state_18642[(14)]);
var inst_18524 = (state_18642[(16)]);
var inst_18532 = cljs.core._nth.call(null,inst_18524,inst_18526);
var inst_18533 = cljs.core.nth.call(null,inst_18532,(0),null);
var inst_18534 = cljs.core.nth.call(null,inst_18532,(1),null);
var state_18642__$1 = (function (){var statearr_18714 = state_18642;
(statearr_18714[(26)] = inst_18533);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18534)){
var statearr_18715_18778 = state_18642__$1;
(statearr_18715_18778[(1)] = (13));

} else {
var statearr_18716_18779 = state_18642__$1;
(statearr_18716_18779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (18))){
var inst_18567 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18717_18780 = state_18642__$1;
(statearr_18717_18780[(2)] = inst_18567);

(statearr_18717_18780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (42))){
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18642__$1,(45),dchan);
} else {
if((state_val_18643 === (37))){
var inst_18514 = (state_18642[(9)]);
var inst_18610 = (state_18642[(23)]);
var inst_18601 = (state_18642[(25)]);
var inst_18610__$1 = cljs.core.first.call(null,inst_18601);
var inst_18611 = cljs.core.async.put_BANG_.call(null,inst_18610__$1,inst_18514,done);
var state_18642__$1 = (function (){var statearr_18718 = state_18642;
(statearr_18718[(23)] = inst_18610__$1);

return statearr_18718;
})();
if(cljs.core.truth_(inst_18611)){
var statearr_18719_18781 = state_18642__$1;
(statearr_18719_18781[(1)] = (39));

} else {
var statearr_18720_18782 = state_18642__$1;
(statearr_18720_18782[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18643 === (8))){
var inst_18525 = (state_18642[(13)]);
var inst_18526 = (state_18642[(14)]);
var inst_18528 = (inst_18526 < inst_18525);
var inst_18529 = inst_18528;
var state_18642__$1 = state_18642;
if(cljs.core.truth_(inst_18529)){
var statearr_18721_18783 = state_18642__$1;
(statearr_18721_18783[(1)] = (10));

} else {
var statearr_18722_18784 = state_18642__$1;
(statearr_18722_18784[(1)] = (11));

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
});})(c__10342__auto___18730,cs,m,dchan,dctr,done))
;
return ((function (switch__10277__auto__,c__10342__auto___18730,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10278__auto__ = null;
var cljs$core$async$mult_$_state_machine__10278__auto____0 = (function (){
var statearr_18726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18726[(0)] = cljs$core$async$mult_$_state_machine__10278__auto__);

(statearr_18726[(1)] = (1));

return statearr_18726;
});
var cljs$core$async$mult_$_state_machine__10278__auto____1 = (function (state_18642){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_18642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e18727){if((e18727 instanceof Object)){
var ex__10281__auto__ = e18727;
var statearr_18728_18785 = state_18642;
(statearr_18728_18785[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18786 = state_18642;
state_18642 = G__18786;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10278__auto__ = function(state_18642){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10278__auto____1.call(this,state_18642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10278__auto____0;
cljs$core$async$mult_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10278__auto____1;
return cljs$core$async$mult_$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___18730,cs,m,dchan,dctr,done))
})();
var state__10344__auto__ = (function (){var statearr_18729 = f__10343__auto__.call(null);
(statearr_18729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___18730);

return statearr_18729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___18730,cs,m,dchan,dctr,done))
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
var args18787 = [];
var len__6152__auto___18790 = arguments.length;
var i__6153__auto___18791 = (0);
while(true){
if((i__6153__auto___18791 < len__6152__auto___18790)){
args18787.push((arguments[i__6153__auto___18791]));

var G__18792 = (i__6153__auto___18791 + (1));
i__6153__auto___18791 = G__18792;
continue;
} else {
}
break;
}

var G__18789 = args18787.length;
switch (G__18789) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18787.length)].join('')));

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
var len__6152__auto___18804 = arguments.length;
var i__6153__auto___18805 = (0);
while(true){
if((i__6153__auto___18805 < len__6152__auto___18804)){
args__6159__auto__.push((arguments[i__6153__auto___18805]));

var G__18806 = (i__6153__auto___18805 + (1));
i__6153__auto___18805 = G__18806;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18798){
var map__18799 = p__18798;
var map__18799__$1 = ((((!((map__18799 == null)))?((((map__18799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18799):map__18799);
var opts = map__18799__$1;
var statearr_18801_18807 = state;
(statearr_18801_18807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18799,map__18799__$1,opts){
return (function (val){
var statearr_18802_18808 = state;
(statearr_18802_18808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18799,map__18799__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18803_18809 = state;
(statearr_18803_18809[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18794){
var G__18795 = cljs.core.first.call(null,seq18794);
var seq18794__$1 = cljs.core.next.call(null,seq18794);
var G__18796 = cljs.core.first.call(null,seq18794__$1);
var seq18794__$2 = cljs.core.next.call(null,seq18794__$1);
var G__18797 = cljs.core.first.call(null,seq18794__$2);
var seq18794__$3 = cljs.core.next.call(null,seq18794__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18795,G__18796,G__18797,seq18794__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18973 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18974){
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
this.meta18974 = meta18974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18975,meta18974__$1){
var self__ = this;
var _18975__$1 = this;
return (new cljs.core.async.t_cljs$core$async18973(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18974__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18975){
var self__ = this;
var _18975__$1 = this;
return self__.meta18974;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18973.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18974","meta18974",213654395,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18973";

cljs.core.async.t_cljs$core$async18973.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18973");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18973 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18974){
return (new cljs.core.async.t_cljs$core$async18973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18974));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18973(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10342__auto___19136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19073){
var state_val_19074 = (state_19073[(1)]);
if((state_val_19074 === (7))){
var inst_18991 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19075_19137 = state_19073__$1;
(statearr_19075_19137[(2)] = inst_18991);

(statearr_19075_19137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (20))){
var inst_19003 = (state_19073[(7)]);
var state_19073__$1 = state_19073;
var statearr_19076_19138 = state_19073__$1;
(statearr_19076_19138[(2)] = inst_19003);

(statearr_19076_19138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (27))){
var state_19073__$1 = state_19073;
var statearr_19077_19139 = state_19073__$1;
(statearr_19077_19139[(2)] = null);

(statearr_19077_19139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (1))){
var inst_18979 = (state_19073[(8)]);
var inst_18979__$1 = calc_state.call(null);
var inst_18981 = (inst_18979__$1 == null);
var inst_18982 = cljs.core.not.call(null,inst_18981);
var state_19073__$1 = (function (){var statearr_19078 = state_19073;
(statearr_19078[(8)] = inst_18979__$1);

return statearr_19078;
})();
if(inst_18982){
var statearr_19079_19140 = state_19073__$1;
(statearr_19079_19140[(1)] = (2));

} else {
var statearr_19080_19141 = state_19073__$1;
(statearr_19080_19141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (24))){
var inst_19047 = (state_19073[(9)]);
var inst_19026 = (state_19073[(10)]);
var inst_19033 = (state_19073[(11)]);
var inst_19047__$1 = inst_19026.call(null,inst_19033);
var state_19073__$1 = (function (){var statearr_19081 = state_19073;
(statearr_19081[(9)] = inst_19047__$1);

return statearr_19081;
})();
if(cljs.core.truth_(inst_19047__$1)){
var statearr_19082_19142 = state_19073__$1;
(statearr_19082_19142[(1)] = (29));

} else {
var statearr_19083_19143 = state_19073__$1;
(statearr_19083_19143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (4))){
var inst_18994 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_18994)){
var statearr_19084_19144 = state_19073__$1;
(statearr_19084_19144[(1)] = (8));

} else {
var statearr_19085_19145 = state_19073__$1;
(statearr_19085_19145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (15))){
var inst_19020 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19020)){
var statearr_19086_19146 = state_19073__$1;
(statearr_19086_19146[(1)] = (19));

} else {
var statearr_19087_19147 = state_19073__$1;
(statearr_19087_19147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (21))){
var inst_19025 = (state_19073[(12)]);
var inst_19025__$1 = (state_19073[(2)]);
var inst_19026 = cljs.core.get.call(null,inst_19025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19027 = cljs.core.get.call(null,inst_19025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19028 = cljs.core.get.call(null,inst_19025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19073__$1 = (function (){var statearr_19088 = state_19073;
(statearr_19088[(13)] = inst_19027);

(statearr_19088[(10)] = inst_19026);

(statearr_19088[(12)] = inst_19025__$1);

return statearr_19088;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19073__$1,(22),inst_19028);
} else {
if((state_val_19074 === (31))){
var inst_19055 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19055)){
var statearr_19089_19148 = state_19073__$1;
(statearr_19089_19148[(1)] = (32));

} else {
var statearr_19090_19149 = state_19073__$1;
(statearr_19090_19149[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (32))){
var inst_19032 = (state_19073[(14)]);
var state_19073__$1 = state_19073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19073__$1,(35),out,inst_19032);
} else {
if((state_val_19074 === (33))){
var inst_19025 = (state_19073[(12)]);
var inst_19003 = inst_19025;
var state_19073__$1 = (function (){var statearr_19091 = state_19073;
(statearr_19091[(7)] = inst_19003);

return statearr_19091;
})();
var statearr_19092_19150 = state_19073__$1;
(statearr_19092_19150[(2)] = null);

(statearr_19092_19150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (13))){
var inst_19003 = (state_19073[(7)]);
var inst_19010 = inst_19003.cljs$lang$protocol_mask$partition0$;
var inst_19011 = (inst_19010 & (64));
var inst_19012 = inst_19003.cljs$core$ISeq$;
var inst_19013 = (inst_19011) || (inst_19012);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19013)){
var statearr_19093_19151 = state_19073__$1;
(statearr_19093_19151[(1)] = (16));

} else {
var statearr_19094_19152 = state_19073__$1;
(statearr_19094_19152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (22))){
var inst_19032 = (state_19073[(14)]);
var inst_19033 = (state_19073[(11)]);
var inst_19031 = (state_19073[(2)]);
var inst_19032__$1 = cljs.core.nth.call(null,inst_19031,(0),null);
var inst_19033__$1 = cljs.core.nth.call(null,inst_19031,(1),null);
var inst_19034 = (inst_19032__$1 == null);
var inst_19035 = cljs.core._EQ_.call(null,inst_19033__$1,change);
var inst_19036 = (inst_19034) || (inst_19035);
var state_19073__$1 = (function (){var statearr_19095 = state_19073;
(statearr_19095[(14)] = inst_19032__$1);

(statearr_19095[(11)] = inst_19033__$1);

return statearr_19095;
})();
if(cljs.core.truth_(inst_19036)){
var statearr_19096_19153 = state_19073__$1;
(statearr_19096_19153[(1)] = (23));

} else {
var statearr_19097_19154 = state_19073__$1;
(statearr_19097_19154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (36))){
var inst_19025 = (state_19073[(12)]);
var inst_19003 = inst_19025;
var state_19073__$1 = (function (){var statearr_19098 = state_19073;
(statearr_19098[(7)] = inst_19003);

return statearr_19098;
})();
var statearr_19099_19155 = state_19073__$1;
(statearr_19099_19155[(2)] = null);

(statearr_19099_19155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (29))){
var inst_19047 = (state_19073[(9)]);
var state_19073__$1 = state_19073;
var statearr_19100_19156 = state_19073__$1;
(statearr_19100_19156[(2)] = inst_19047);

(statearr_19100_19156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (6))){
var state_19073__$1 = state_19073;
var statearr_19101_19157 = state_19073__$1;
(statearr_19101_19157[(2)] = false);

(statearr_19101_19157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (28))){
var inst_19043 = (state_19073[(2)]);
var inst_19044 = calc_state.call(null);
var inst_19003 = inst_19044;
var state_19073__$1 = (function (){var statearr_19102 = state_19073;
(statearr_19102[(7)] = inst_19003);

(statearr_19102[(15)] = inst_19043);

return statearr_19102;
})();
var statearr_19103_19158 = state_19073__$1;
(statearr_19103_19158[(2)] = null);

(statearr_19103_19158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (25))){
var inst_19069 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19104_19159 = state_19073__$1;
(statearr_19104_19159[(2)] = inst_19069);

(statearr_19104_19159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (34))){
var inst_19067 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19105_19160 = state_19073__$1;
(statearr_19105_19160[(2)] = inst_19067);

(statearr_19105_19160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (17))){
var state_19073__$1 = state_19073;
var statearr_19106_19161 = state_19073__$1;
(statearr_19106_19161[(2)] = false);

(statearr_19106_19161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (3))){
var state_19073__$1 = state_19073;
var statearr_19107_19162 = state_19073__$1;
(statearr_19107_19162[(2)] = false);

(statearr_19107_19162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (12))){
var inst_19071 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19073__$1,inst_19071);
} else {
if((state_val_19074 === (2))){
var inst_18979 = (state_19073[(8)]);
var inst_18984 = inst_18979.cljs$lang$protocol_mask$partition0$;
var inst_18985 = (inst_18984 & (64));
var inst_18986 = inst_18979.cljs$core$ISeq$;
var inst_18987 = (inst_18985) || (inst_18986);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_18987)){
var statearr_19108_19163 = state_19073__$1;
(statearr_19108_19163[(1)] = (5));

} else {
var statearr_19109_19164 = state_19073__$1;
(statearr_19109_19164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (23))){
var inst_19032 = (state_19073[(14)]);
var inst_19038 = (inst_19032 == null);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19038)){
var statearr_19110_19165 = state_19073__$1;
(statearr_19110_19165[(1)] = (26));

} else {
var statearr_19111_19166 = state_19073__$1;
(statearr_19111_19166[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (35))){
var inst_19058 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
if(cljs.core.truth_(inst_19058)){
var statearr_19112_19167 = state_19073__$1;
(statearr_19112_19167[(1)] = (36));

} else {
var statearr_19113_19168 = state_19073__$1;
(statearr_19113_19168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (19))){
var inst_19003 = (state_19073[(7)]);
var inst_19022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19003);
var state_19073__$1 = state_19073;
var statearr_19114_19169 = state_19073__$1;
(statearr_19114_19169[(2)] = inst_19022);

(statearr_19114_19169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (11))){
var inst_19003 = (state_19073[(7)]);
var inst_19007 = (inst_19003 == null);
var inst_19008 = cljs.core.not.call(null,inst_19007);
var state_19073__$1 = state_19073;
if(inst_19008){
var statearr_19115_19170 = state_19073__$1;
(statearr_19115_19170[(1)] = (13));

} else {
var statearr_19116_19171 = state_19073__$1;
(statearr_19116_19171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (9))){
var inst_18979 = (state_19073[(8)]);
var state_19073__$1 = state_19073;
var statearr_19117_19172 = state_19073__$1;
(statearr_19117_19172[(2)] = inst_18979);

(statearr_19117_19172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (5))){
var state_19073__$1 = state_19073;
var statearr_19118_19173 = state_19073__$1;
(statearr_19118_19173[(2)] = true);

(statearr_19118_19173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (14))){
var state_19073__$1 = state_19073;
var statearr_19119_19174 = state_19073__$1;
(statearr_19119_19174[(2)] = false);

(statearr_19119_19174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (26))){
var inst_19033 = (state_19073[(11)]);
var inst_19040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19033);
var state_19073__$1 = state_19073;
var statearr_19120_19175 = state_19073__$1;
(statearr_19120_19175[(2)] = inst_19040);

(statearr_19120_19175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (16))){
var state_19073__$1 = state_19073;
var statearr_19121_19176 = state_19073__$1;
(statearr_19121_19176[(2)] = true);

(statearr_19121_19176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (38))){
var inst_19063 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19122_19177 = state_19073__$1;
(statearr_19122_19177[(2)] = inst_19063);

(statearr_19122_19177[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (30))){
var inst_19027 = (state_19073[(13)]);
var inst_19026 = (state_19073[(10)]);
var inst_19033 = (state_19073[(11)]);
var inst_19050 = cljs.core.empty_QMARK_.call(null,inst_19026);
var inst_19051 = inst_19027.call(null,inst_19033);
var inst_19052 = cljs.core.not.call(null,inst_19051);
var inst_19053 = (inst_19050) && (inst_19052);
var state_19073__$1 = state_19073;
var statearr_19123_19178 = state_19073__$1;
(statearr_19123_19178[(2)] = inst_19053);

(statearr_19123_19178[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (10))){
var inst_18979 = (state_19073[(8)]);
var inst_18999 = (state_19073[(2)]);
var inst_19000 = cljs.core.get.call(null,inst_18999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19001 = cljs.core.get.call(null,inst_18999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19002 = cljs.core.get.call(null,inst_18999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19003 = inst_18979;
var state_19073__$1 = (function (){var statearr_19124 = state_19073;
(statearr_19124[(7)] = inst_19003);

(statearr_19124[(16)] = inst_19000);

(statearr_19124[(17)] = inst_19001);

(statearr_19124[(18)] = inst_19002);

return statearr_19124;
})();
var statearr_19125_19179 = state_19073__$1;
(statearr_19125_19179[(2)] = null);

(statearr_19125_19179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (18))){
var inst_19017 = (state_19073[(2)]);
var state_19073__$1 = state_19073;
var statearr_19126_19180 = state_19073__$1;
(statearr_19126_19180[(2)] = inst_19017);

(statearr_19126_19180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (37))){
var state_19073__$1 = state_19073;
var statearr_19127_19181 = state_19073__$1;
(statearr_19127_19181[(2)] = null);

(statearr_19127_19181[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19074 === (8))){
var inst_18979 = (state_19073[(8)]);
var inst_18996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18979);
var state_19073__$1 = state_19073;
var statearr_19128_19182 = state_19073__$1;
(statearr_19128_19182[(2)] = inst_18996);

(statearr_19128_19182[(1)] = (10));


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
});})(c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10277__auto__,c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10278__auto__ = null;
var cljs$core$async$mix_$_state_machine__10278__auto____0 = (function (){
var statearr_19132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19132[(0)] = cljs$core$async$mix_$_state_machine__10278__auto__);

(statearr_19132[(1)] = (1));

return statearr_19132;
});
var cljs$core$async$mix_$_state_machine__10278__auto____1 = (function (state_19073){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19133){if((e19133 instanceof Object)){
var ex__10281__auto__ = e19133;
var statearr_19134_19183 = state_19073;
(statearr_19134_19183[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19184 = state_19073;
state_19073 = G__19184;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10278__auto__ = function(state_19073){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10278__auto____1.call(this,state_19073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10278__auto____0;
cljs$core$async$mix_$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10278__auto____1;
return cljs$core$async$mix_$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10344__auto__ = (function (){var statearr_19135 = f__10343__auto__.call(null);
(statearr_19135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19136);

return statearr_19135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19185 = [];
var len__6152__auto___19188 = arguments.length;
var i__6153__auto___19189 = (0);
while(true){
if((i__6153__auto___19189 < len__6152__auto___19188)){
args19185.push((arguments[i__6153__auto___19189]));

var G__19190 = (i__6153__auto___19189 + (1));
i__6153__auto___19189 = G__19190;
continue;
} else {
}
break;
}

var G__19187 = args19185.length;
switch (G__19187) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19185.length)].join('')));

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
var args19193 = [];
var len__6152__auto___19318 = arguments.length;
var i__6153__auto___19319 = (0);
while(true){
if((i__6153__auto___19319 < len__6152__auto___19318)){
args19193.push((arguments[i__6153__auto___19319]));

var G__19320 = (i__6153__auto___19319 + (1));
i__6153__auto___19319 = G__19320;
continue;
} else {
}
break;
}

var G__19195 = args19193.length;
switch (G__19195) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19193.length)].join('')));

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
return (function (p1__19192_SHARP_){
if(cljs.core.truth_(p1__19192_SHARP_.call(null,topic))){
return p1__19192_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19192_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19196 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19197){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19197 = meta19197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19198,meta19197__$1){
var self__ = this;
var _19198__$1 = this;
return (new cljs.core.async.t_cljs$core$async19196(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19197__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19198){
var self__ = this;
var _19198__$1 = this;
return self__.meta19197;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19197","meta19197",2041070217,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19196";

cljs.core.async.t_cljs$core$async19196.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19196");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19196 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19197){
return (new cljs.core.async.t_cljs$core$async19196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19197));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19196(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10342__auto___19322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19322,mults,ensure_mult,p){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19322,mults,ensure_mult,p){
return (function (state_19270){
var state_val_19271 = (state_19270[(1)]);
if((state_val_19271 === (7))){
var inst_19266 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19272_19323 = state_19270__$1;
(statearr_19272_19323[(2)] = inst_19266);

(statearr_19272_19323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (20))){
var state_19270__$1 = state_19270;
var statearr_19273_19324 = state_19270__$1;
(statearr_19273_19324[(2)] = null);

(statearr_19273_19324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (1))){
var state_19270__$1 = state_19270;
var statearr_19274_19325 = state_19270__$1;
(statearr_19274_19325[(2)] = null);

(statearr_19274_19325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (24))){
var inst_19249 = (state_19270[(7)]);
var inst_19258 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19249);
var state_19270__$1 = state_19270;
var statearr_19275_19326 = state_19270__$1;
(statearr_19275_19326[(2)] = inst_19258);

(statearr_19275_19326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (4))){
var inst_19201 = (state_19270[(8)]);
var inst_19201__$1 = (state_19270[(2)]);
var inst_19202 = (inst_19201__$1 == null);
var state_19270__$1 = (function (){var statearr_19276 = state_19270;
(statearr_19276[(8)] = inst_19201__$1);

return statearr_19276;
})();
if(cljs.core.truth_(inst_19202)){
var statearr_19277_19327 = state_19270__$1;
(statearr_19277_19327[(1)] = (5));

} else {
var statearr_19278_19328 = state_19270__$1;
(statearr_19278_19328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (15))){
var inst_19243 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19279_19329 = state_19270__$1;
(statearr_19279_19329[(2)] = inst_19243);

(statearr_19279_19329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (21))){
var inst_19263 = (state_19270[(2)]);
var state_19270__$1 = (function (){var statearr_19280 = state_19270;
(statearr_19280[(9)] = inst_19263);

return statearr_19280;
})();
var statearr_19281_19330 = state_19270__$1;
(statearr_19281_19330[(2)] = null);

(statearr_19281_19330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (13))){
var inst_19225 = (state_19270[(10)]);
var inst_19227 = cljs.core.chunked_seq_QMARK_.call(null,inst_19225);
var state_19270__$1 = state_19270;
if(inst_19227){
var statearr_19282_19331 = state_19270__$1;
(statearr_19282_19331[(1)] = (16));

} else {
var statearr_19283_19332 = state_19270__$1;
(statearr_19283_19332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (22))){
var inst_19255 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
if(cljs.core.truth_(inst_19255)){
var statearr_19284_19333 = state_19270__$1;
(statearr_19284_19333[(1)] = (23));

} else {
var statearr_19285_19334 = state_19270__$1;
(statearr_19285_19334[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (6))){
var inst_19201 = (state_19270[(8)]);
var inst_19249 = (state_19270[(7)]);
var inst_19251 = (state_19270[(11)]);
var inst_19249__$1 = topic_fn.call(null,inst_19201);
var inst_19250 = cljs.core.deref.call(null,mults);
var inst_19251__$1 = cljs.core.get.call(null,inst_19250,inst_19249__$1);
var state_19270__$1 = (function (){var statearr_19286 = state_19270;
(statearr_19286[(7)] = inst_19249__$1);

(statearr_19286[(11)] = inst_19251__$1);

return statearr_19286;
})();
if(cljs.core.truth_(inst_19251__$1)){
var statearr_19287_19335 = state_19270__$1;
(statearr_19287_19335[(1)] = (19));

} else {
var statearr_19288_19336 = state_19270__$1;
(statearr_19288_19336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (25))){
var inst_19260 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19289_19337 = state_19270__$1;
(statearr_19289_19337[(2)] = inst_19260);

(statearr_19289_19337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (17))){
var inst_19225 = (state_19270[(10)]);
var inst_19234 = cljs.core.first.call(null,inst_19225);
var inst_19235 = cljs.core.async.muxch_STAR_.call(null,inst_19234);
var inst_19236 = cljs.core.async.close_BANG_.call(null,inst_19235);
var inst_19237 = cljs.core.next.call(null,inst_19225);
var inst_19211 = inst_19237;
var inst_19212 = null;
var inst_19213 = (0);
var inst_19214 = (0);
var state_19270__$1 = (function (){var statearr_19290 = state_19270;
(statearr_19290[(12)] = inst_19236);

(statearr_19290[(13)] = inst_19214);

(statearr_19290[(14)] = inst_19213);

(statearr_19290[(15)] = inst_19211);

(statearr_19290[(16)] = inst_19212);

return statearr_19290;
})();
var statearr_19291_19338 = state_19270__$1;
(statearr_19291_19338[(2)] = null);

(statearr_19291_19338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (3))){
var inst_19268 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19270__$1,inst_19268);
} else {
if((state_val_19271 === (12))){
var inst_19245 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19292_19339 = state_19270__$1;
(statearr_19292_19339[(2)] = inst_19245);

(statearr_19292_19339[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (2))){
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19270__$1,(4),ch);
} else {
if((state_val_19271 === (23))){
var state_19270__$1 = state_19270;
var statearr_19293_19340 = state_19270__$1;
(statearr_19293_19340[(2)] = null);

(statearr_19293_19340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (19))){
var inst_19201 = (state_19270[(8)]);
var inst_19251 = (state_19270[(11)]);
var inst_19253 = cljs.core.async.muxch_STAR_.call(null,inst_19251);
var state_19270__$1 = state_19270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19270__$1,(22),inst_19253,inst_19201);
} else {
if((state_val_19271 === (11))){
var inst_19211 = (state_19270[(15)]);
var inst_19225 = (state_19270[(10)]);
var inst_19225__$1 = cljs.core.seq.call(null,inst_19211);
var state_19270__$1 = (function (){var statearr_19294 = state_19270;
(statearr_19294[(10)] = inst_19225__$1);

return statearr_19294;
})();
if(inst_19225__$1){
var statearr_19295_19341 = state_19270__$1;
(statearr_19295_19341[(1)] = (13));

} else {
var statearr_19296_19342 = state_19270__$1;
(statearr_19296_19342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (9))){
var inst_19247 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19297_19343 = state_19270__$1;
(statearr_19297_19343[(2)] = inst_19247);

(statearr_19297_19343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (5))){
var inst_19208 = cljs.core.deref.call(null,mults);
var inst_19209 = cljs.core.vals.call(null,inst_19208);
var inst_19210 = cljs.core.seq.call(null,inst_19209);
var inst_19211 = inst_19210;
var inst_19212 = null;
var inst_19213 = (0);
var inst_19214 = (0);
var state_19270__$1 = (function (){var statearr_19298 = state_19270;
(statearr_19298[(13)] = inst_19214);

(statearr_19298[(14)] = inst_19213);

(statearr_19298[(15)] = inst_19211);

(statearr_19298[(16)] = inst_19212);

return statearr_19298;
})();
var statearr_19299_19344 = state_19270__$1;
(statearr_19299_19344[(2)] = null);

(statearr_19299_19344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (14))){
var state_19270__$1 = state_19270;
var statearr_19303_19345 = state_19270__$1;
(statearr_19303_19345[(2)] = null);

(statearr_19303_19345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (16))){
var inst_19225 = (state_19270[(10)]);
var inst_19229 = cljs.core.chunk_first.call(null,inst_19225);
var inst_19230 = cljs.core.chunk_rest.call(null,inst_19225);
var inst_19231 = cljs.core.count.call(null,inst_19229);
var inst_19211 = inst_19230;
var inst_19212 = inst_19229;
var inst_19213 = inst_19231;
var inst_19214 = (0);
var state_19270__$1 = (function (){var statearr_19304 = state_19270;
(statearr_19304[(13)] = inst_19214);

(statearr_19304[(14)] = inst_19213);

(statearr_19304[(15)] = inst_19211);

(statearr_19304[(16)] = inst_19212);

return statearr_19304;
})();
var statearr_19305_19346 = state_19270__$1;
(statearr_19305_19346[(2)] = null);

(statearr_19305_19346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (10))){
var inst_19214 = (state_19270[(13)]);
var inst_19213 = (state_19270[(14)]);
var inst_19211 = (state_19270[(15)]);
var inst_19212 = (state_19270[(16)]);
var inst_19219 = cljs.core._nth.call(null,inst_19212,inst_19214);
var inst_19220 = cljs.core.async.muxch_STAR_.call(null,inst_19219);
var inst_19221 = cljs.core.async.close_BANG_.call(null,inst_19220);
var inst_19222 = (inst_19214 + (1));
var tmp19300 = inst_19213;
var tmp19301 = inst_19211;
var tmp19302 = inst_19212;
var inst_19211__$1 = tmp19301;
var inst_19212__$1 = tmp19302;
var inst_19213__$1 = tmp19300;
var inst_19214__$1 = inst_19222;
var state_19270__$1 = (function (){var statearr_19306 = state_19270;
(statearr_19306[(17)] = inst_19221);

(statearr_19306[(13)] = inst_19214__$1);

(statearr_19306[(14)] = inst_19213__$1);

(statearr_19306[(15)] = inst_19211__$1);

(statearr_19306[(16)] = inst_19212__$1);

return statearr_19306;
})();
var statearr_19307_19347 = state_19270__$1;
(statearr_19307_19347[(2)] = null);

(statearr_19307_19347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (18))){
var inst_19240 = (state_19270[(2)]);
var state_19270__$1 = state_19270;
var statearr_19308_19348 = state_19270__$1;
(statearr_19308_19348[(2)] = inst_19240);

(statearr_19308_19348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19271 === (8))){
var inst_19214 = (state_19270[(13)]);
var inst_19213 = (state_19270[(14)]);
var inst_19216 = (inst_19214 < inst_19213);
var inst_19217 = inst_19216;
var state_19270__$1 = state_19270;
if(cljs.core.truth_(inst_19217)){
var statearr_19309_19349 = state_19270__$1;
(statearr_19309_19349[(1)] = (10));

} else {
var statearr_19310_19350 = state_19270__$1;
(statearr_19310_19350[(1)] = (11));

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
});})(c__10342__auto___19322,mults,ensure_mult,p))
;
return ((function (switch__10277__auto__,c__10342__auto___19322,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19270){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19315){if((e19315 instanceof Object)){
var ex__10281__auto__ = e19315;
var statearr_19316_19351 = state_19270;
(statearr_19316_19351[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19352 = state_19270;
state_19270 = G__19352;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19322,mults,ensure_mult,p))
})();
var state__10344__auto__ = (function (){var statearr_19317 = f__10343__auto__.call(null);
(statearr_19317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19322);

return statearr_19317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19322,mults,ensure_mult,p))
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
var args19353 = [];
var len__6152__auto___19356 = arguments.length;
var i__6153__auto___19357 = (0);
while(true){
if((i__6153__auto___19357 < len__6152__auto___19356)){
args19353.push((arguments[i__6153__auto___19357]));

var G__19358 = (i__6153__auto___19357 + (1));
i__6153__auto___19357 = G__19358;
continue;
} else {
}
break;
}

var G__19355 = args19353.length;
switch (G__19355) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19353.length)].join('')));

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
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19360.length)].join('')));

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
var args19367 = [];
var len__6152__auto___19438 = arguments.length;
var i__6153__auto___19439 = (0);
while(true){
if((i__6153__auto___19439 < len__6152__auto___19438)){
args19367.push((arguments[i__6153__auto___19439]));

var G__19440 = (i__6153__auto___19439 + (1));
i__6153__auto___19439 = G__19440;
continue;
} else {
}
break;
}

var G__19369 = args19367.length;
switch (G__19369) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19367.length)].join('')));

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
var c__10342__auto___19442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19408){
var state_val_19409 = (state_19408[(1)]);
if((state_val_19409 === (7))){
var state_19408__$1 = state_19408;
var statearr_19410_19443 = state_19408__$1;
(statearr_19410_19443[(2)] = null);

(statearr_19410_19443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (1))){
var state_19408__$1 = state_19408;
var statearr_19411_19444 = state_19408__$1;
(statearr_19411_19444[(2)] = null);

(statearr_19411_19444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (4))){
var inst_19372 = (state_19408[(7)]);
var inst_19374 = (inst_19372 < cnt);
var state_19408__$1 = state_19408;
if(cljs.core.truth_(inst_19374)){
var statearr_19412_19445 = state_19408__$1;
(statearr_19412_19445[(1)] = (6));

} else {
var statearr_19413_19446 = state_19408__$1;
(statearr_19413_19446[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (15))){
var inst_19404 = (state_19408[(2)]);
var state_19408__$1 = state_19408;
var statearr_19414_19447 = state_19408__$1;
(statearr_19414_19447[(2)] = inst_19404);

(statearr_19414_19447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (13))){
var inst_19397 = cljs.core.async.close_BANG_.call(null,out);
var state_19408__$1 = state_19408;
var statearr_19415_19448 = state_19408__$1;
(statearr_19415_19448[(2)] = inst_19397);

(statearr_19415_19448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (6))){
var state_19408__$1 = state_19408;
var statearr_19416_19449 = state_19408__$1;
(statearr_19416_19449[(2)] = null);

(statearr_19416_19449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (3))){
var inst_19406 = (state_19408[(2)]);
var state_19408__$1 = state_19408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19408__$1,inst_19406);
} else {
if((state_val_19409 === (12))){
var inst_19394 = (state_19408[(8)]);
var inst_19394__$1 = (state_19408[(2)]);
var inst_19395 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19394__$1);
var state_19408__$1 = (function (){var statearr_19417 = state_19408;
(statearr_19417[(8)] = inst_19394__$1);

return statearr_19417;
})();
if(cljs.core.truth_(inst_19395)){
var statearr_19418_19450 = state_19408__$1;
(statearr_19418_19450[(1)] = (13));

} else {
var statearr_19419_19451 = state_19408__$1;
(statearr_19419_19451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (2))){
var inst_19371 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19372 = (0);
var state_19408__$1 = (function (){var statearr_19420 = state_19408;
(statearr_19420[(7)] = inst_19372);

(statearr_19420[(9)] = inst_19371);

return statearr_19420;
})();
var statearr_19421_19452 = state_19408__$1;
(statearr_19421_19452[(2)] = null);

(statearr_19421_19452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (11))){
var inst_19372 = (state_19408[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19408,(10),Object,null,(9));
var inst_19381 = chs__$1.call(null,inst_19372);
var inst_19382 = done.call(null,inst_19372);
var inst_19383 = cljs.core.async.take_BANG_.call(null,inst_19381,inst_19382);
var state_19408__$1 = state_19408;
var statearr_19422_19453 = state_19408__$1;
(statearr_19422_19453[(2)] = inst_19383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (9))){
var inst_19372 = (state_19408[(7)]);
var inst_19385 = (state_19408[(2)]);
var inst_19386 = (inst_19372 + (1));
var inst_19372__$1 = inst_19386;
var state_19408__$1 = (function (){var statearr_19423 = state_19408;
(statearr_19423[(7)] = inst_19372__$1);

(statearr_19423[(10)] = inst_19385);

return statearr_19423;
})();
var statearr_19424_19454 = state_19408__$1;
(statearr_19424_19454[(2)] = null);

(statearr_19424_19454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (5))){
var inst_19392 = (state_19408[(2)]);
var state_19408__$1 = (function (){var statearr_19425 = state_19408;
(statearr_19425[(11)] = inst_19392);

return statearr_19425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19408__$1,(12),dchan);
} else {
if((state_val_19409 === (14))){
var inst_19394 = (state_19408[(8)]);
var inst_19399 = cljs.core.apply.call(null,f,inst_19394);
var state_19408__$1 = state_19408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19408__$1,(16),out,inst_19399);
} else {
if((state_val_19409 === (16))){
var inst_19401 = (state_19408[(2)]);
var state_19408__$1 = (function (){var statearr_19426 = state_19408;
(statearr_19426[(12)] = inst_19401);

return statearr_19426;
})();
var statearr_19427_19455 = state_19408__$1;
(statearr_19427_19455[(2)] = null);

(statearr_19427_19455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (10))){
var inst_19376 = (state_19408[(2)]);
var inst_19377 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19408__$1 = (function (){var statearr_19428 = state_19408;
(statearr_19428[(13)] = inst_19376);

return statearr_19428;
})();
var statearr_19429_19456 = state_19408__$1;
(statearr_19429_19456[(2)] = inst_19377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19409 === (8))){
var inst_19390 = (state_19408[(2)]);
var state_19408__$1 = state_19408;
var statearr_19430_19457 = state_19408__$1;
(statearr_19430_19457[(2)] = inst_19390);

(statearr_19430_19457[(1)] = (5));


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
});})(c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10277__auto__,c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19434[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19434[(1)] = (1));

return statearr_19434;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19408){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19435){if((e19435 instanceof Object)){
var ex__10281__auto__ = e19435;
var statearr_19436_19458 = state_19408;
(statearr_19436_19458[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19459 = state_19408;
state_19408 = G__19459;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10344__auto__ = (function (){var statearr_19437 = f__10343__auto__.call(null);
(statearr_19437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19442);

return statearr_19437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19442,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19461 = [];
var len__6152__auto___19517 = arguments.length;
var i__6153__auto___19518 = (0);
while(true){
if((i__6153__auto___19518 < len__6152__auto___19517)){
args19461.push((arguments[i__6153__auto___19518]));

var G__19519 = (i__6153__auto___19518 + (1));
i__6153__auto___19518 = G__19519;
continue;
} else {
}
break;
}

var G__19463 = args19461.length;
switch (G__19463) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19461.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___19521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19521,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19521,out){
return (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19473 = (state_19493[(7)]);
var inst_19472 = (state_19493[(8)]);
var inst_19472__$1 = (state_19493[(2)]);
var inst_19473__$1 = cljs.core.nth.call(null,inst_19472__$1,(0),null);
var inst_19474 = cljs.core.nth.call(null,inst_19472__$1,(1),null);
var inst_19475 = (inst_19473__$1 == null);
var state_19493__$1 = (function (){var statearr_19495 = state_19493;
(statearr_19495[(7)] = inst_19473__$1);

(statearr_19495[(9)] = inst_19474);

(statearr_19495[(8)] = inst_19472__$1);

return statearr_19495;
})();
if(cljs.core.truth_(inst_19475)){
var statearr_19496_19522 = state_19493__$1;
(statearr_19496_19522[(1)] = (8));

} else {
var statearr_19497_19523 = state_19493__$1;
(statearr_19497_19523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (1))){
var inst_19464 = cljs.core.vec.call(null,chs);
var inst_19465 = inst_19464;
var state_19493__$1 = (function (){var statearr_19498 = state_19493;
(statearr_19498[(10)] = inst_19465);

return statearr_19498;
})();
var statearr_19499_19524 = state_19493__$1;
(statearr_19499_19524[(2)] = null);

(statearr_19499_19524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (4))){
var inst_19465 = (state_19493[(10)]);
var state_19493__$1 = state_19493;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19493__$1,(7),inst_19465);
} else {
if((state_val_19494 === (6))){
var inst_19489 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19500_19525 = state_19493__$1;
(statearr_19500_19525[(2)] = inst_19489);

(statearr_19500_19525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (3))){
var inst_19491 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (2))){
var inst_19465 = (state_19493[(10)]);
var inst_19467 = cljs.core.count.call(null,inst_19465);
var inst_19468 = (inst_19467 > (0));
var state_19493__$1 = state_19493;
if(cljs.core.truth_(inst_19468)){
var statearr_19502_19526 = state_19493__$1;
(statearr_19502_19526[(1)] = (4));

} else {
var statearr_19503_19527 = state_19493__$1;
(statearr_19503_19527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (11))){
var inst_19465 = (state_19493[(10)]);
var inst_19482 = (state_19493[(2)]);
var tmp19501 = inst_19465;
var inst_19465__$1 = tmp19501;
var state_19493__$1 = (function (){var statearr_19504 = state_19493;
(statearr_19504[(10)] = inst_19465__$1);

(statearr_19504[(11)] = inst_19482);

return statearr_19504;
})();
var statearr_19505_19528 = state_19493__$1;
(statearr_19505_19528[(2)] = null);

(statearr_19505_19528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (9))){
var inst_19473 = (state_19493[(7)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19493__$1,(11),out,inst_19473);
} else {
if((state_val_19494 === (5))){
var inst_19487 = cljs.core.async.close_BANG_.call(null,out);
var state_19493__$1 = state_19493;
var statearr_19506_19529 = state_19493__$1;
(statearr_19506_19529[(2)] = inst_19487);

(statearr_19506_19529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (10))){
var inst_19485 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19507_19530 = state_19493__$1;
(statearr_19507_19530[(2)] = inst_19485);

(statearr_19507_19530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (8))){
var inst_19473 = (state_19493[(7)]);
var inst_19465 = (state_19493[(10)]);
var inst_19474 = (state_19493[(9)]);
var inst_19472 = (state_19493[(8)]);
var inst_19477 = (function (){var cs = inst_19465;
var vec__19470 = inst_19472;
var v = inst_19473;
var c = inst_19474;
return ((function (cs,vec__19470,v,c,inst_19473,inst_19465,inst_19474,inst_19472,state_val_19494,c__10342__auto___19521,out){
return (function (p1__19460_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19460_SHARP_);
});
;})(cs,vec__19470,v,c,inst_19473,inst_19465,inst_19474,inst_19472,state_val_19494,c__10342__auto___19521,out))
})();
var inst_19478 = cljs.core.filterv.call(null,inst_19477,inst_19465);
var inst_19465__$1 = inst_19478;
var state_19493__$1 = (function (){var statearr_19508 = state_19493;
(statearr_19508[(10)] = inst_19465__$1);

return statearr_19508;
})();
var statearr_19509_19531 = state_19493__$1;
(statearr_19509_19531[(2)] = null);

(statearr_19509_19531[(1)] = (2));


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
});})(c__10342__auto___19521,out))
;
return ((function (switch__10277__auto__,c__10342__auto___19521,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19513[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19513[(1)] = (1));

return statearr_19513;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19493){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19514){if((e19514 instanceof Object)){
var ex__10281__auto__ = e19514;
var statearr_19515_19532 = state_19493;
(statearr_19515_19532[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19533 = state_19493;
state_19493 = G__19533;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19521,out))
})();
var state__10344__auto__ = (function (){var statearr_19516 = f__10343__auto__.call(null);
(statearr_19516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19521);

return statearr_19516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19521,out))
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
var args19534 = [];
var len__6152__auto___19583 = arguments.length;
var i__6153__auto___19584 = (0);
while(true){
if((i__6153__auto___19584 < len__6152__auto___19583)){
args19534.push((arguments[i__6153__auto___19584]));

var G__19585 = (i__6153__auto___19584 + (1));
i__6153__auto___19584 = G__19585;
continue;
} else {
}
break;
}

var G__19536 = args19534.length;
switch (G__19536) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19534.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___19587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19587,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19587,out){
return (function (state_19560){
var state_val_19561 = (state_19560[(1)]);
if((state_val_19561 === (7))){
var inst_19542 = (state_19560[(7)]);
var inst_19542__$1 = (state_19560[(2)]);
var inst_19543 = (inst_19542__$1 == null);
var inst_19544 = cljs.core.not.call(null,inst_19543);
var state_19560__$1 = (function (){var statearr_19562 = state_19560;
(statearr_19562[(7)] = inst_19542__$1);

return statearr_19562;
})();
if(inst_19544){
var statearr_19563_19588 = state_19560__$1;
(statearr_19563_19588[(1)] = (8));

} else {
var statearr_19564_19589 = state_19560__$1;
(statearr_19564_19589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (1))){
var inst_19537 = (0);
var state_19560__$1 = (function (){var statearr_19565 = state_19560;
(statearr_19565[(8)] = inst_19537);

return statearr_19565;
})();
var statearr_19566_19590 = state_19560__$1;
(statearr_19566_19590[(2)] = null);

(statearr_19566_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (4))){
var state_19560__$1 = state_19560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19560__$1,(7),ch);
} else {
if((state_val_19561 === (6))){
var inst_19555 = (state_19560[(2)]);
var state_19560__$1 = state_19560;
var statearr_19567_19591 = state_19560__$1;
(statearr_19567_19591[(2)] = inst_19555);

(statearr_19567_19591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (3))){
var inst_19557 = (state_19560[(2)]);
var inst_19558 = cljs.core.async.close_BANG_.call(null,out);
var state_19560__$1 = (function (){var statearr_19568 = state_19560;
(statearr_19568[(9)] = inst_19557);

return statearr_19568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19560__$1,inst_19558);
} else {
if((state_val_19561 === (2))){
var inst_19537 = (state_19560[(8)]);
var inst_19539 = (inst_19537 < n);
var state_19560__$1 = state_19560;
if(cljs.core.truth_(inst_19539)){
var statearr_19569_19592 = state_19560__$1;
(statearr_19569_19592[(1)] = (4));

} else {
var statearr_19570_19593 = state_19560__$1;
(statearr_19570_19593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (11))){
var inst_19537 = (state_19560[(8)]);
var inst_19547 = (state_19560[(2)]);
var inst_19548 = (inst_19537 + (1));
var inst_19537__$1 = inst_19548;
var state_19560__$1 = (function (){var statearr_19571 = state_19560;
(statearr_19571[(8)] = inst_19537__$1);

(statearr_19571[(10)] = inst_19547);

return statearr_19571;
})();
var statearr_19572_19594 = state_19560__$1;
(statearr_19572_19594[(2)] = null);

(statearr_19572_19594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (9))){
var state_19560__$1 = state_19560;
var statearr_19573_19595 = state_19560__$1;
(statearr_19573_19595[(2)] = null);

(statearr_19573_19595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (5))){
var state_19560__$1 = state_19560;
var statearr_19574_19596 = state_19560__$1;
(statearr_19574_19596[(2)] = null);

(statearr_19574_19596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (10))){
var inst_19552 = (state_19560[(2)]);
var state_19560__$1 = state_19560;
var statearr_19575_19597 = state_19560__$1;
(statearr_19575_19597[(2)] = inst_19552);

(statearr_19575_19597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19561 === (8))){
var inst_19542 = (state_19560[(7)]);
var state_19560__$1 = state_19560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19560__$1,(11),out,inst_19542);
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
});})(c__10342__auto___19587,out))
;
return ((function (switch__10277__auto__,c__10342__auto___19587,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19579[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19579[(1)] = (1));

return statearr_19579;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19560){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19580){if((e19580 instanceof Object)){
var ex__10281__auto__ = e19580;
var statearr_19581_19598 = state_19560;
(statearr_19581_19598[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19599 = state_19560;
state_19560 = G__19599;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19587,out))
})();
var state__10344__auto__ = (function (){var statearr_19582 = f__10343__auto__.call(null);
(statearr_19582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19587);

return statearr_19582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19587,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19607 = (function (map_LT_,f,ch,meta19608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19608 = meta19608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19609,meta19608__$1){
var self__ = this;
var _19609__$1 = this;
return (new cljs.core.async.t_cljs$core$async19607(self__.map_LT_,self__.f,self__.ch,meta19608__$1));
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19609){
var self__ = this;
var _19609__$1 = this;
return self__.meta19608;
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19610 = (function (map_LT_,f,ch,meta19608,_,fn1,meta19611){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19608 = meta19608;
this._ = _;
this.fn1 = fn1;
this.meta19611 = meta19611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19612,meta19611__$1){
var self__ = this;
var _19612__$1 = this;
return (new cljs.core.async.t_cljs$core$async19610(self__.map_LT_,self__.f,self__.ch,self__.meta19608,self__._,self__.fn1,meta19611__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19612){
var self__ = this;
var _19612__$1 = this;
return self__.meta19611;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19600_SHARP_){
return f1.call(null,(((p1__19600_SHARP_ == null))?null:self__.f.call(null,p1__19600_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19608","meta19608",-337717575,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19607","cljs.core.async/t_cljs$core$async19607",1670788776,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19611","meta19611",-1648152014,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19610";

cljs.core.async.t_cljs$core$async19610.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19610");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19610 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19610(map_LT___$1,f__$1,ch__$1,meta19608__$1,___$2,fn1__$1,meta19611){
return (new cljs.core.async.t_cljs$core$async19610(map_LT___$1,f__$1,ch__$1,meta19608__$1,___$2,fn1__$1,meta19611));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19610(self__.map_LT_,self__.f,self__.ch,self__.meta19608,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19608","meta19608",-337717575,null)], null);
});

cljs.core.async.t_cljs$core$async19607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19607";

cljs.core.async.t_cljs$core$async19607.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19607");
});

cljs.core.async.__GT_t_cljs$core$async19607 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19607(map_LT___$1,f__$1,ch__$1,meta19608){
return (new cljs.core.async.t_cljs$core$async19607(map_LT___$1,f__$1,ch__$1,meta19608));
});

}

return (new cljs.core.async.t_cljs$core$async19607(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19616 = (function (map_GT_,f,ch,meta19617){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19617 = meta19617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19618,meta19617__$1){
var self__ = this;
var _19618__$1 = this;
return (new cljs.core.async.t_cljs$core$async19616(self__.map_GT_,self__.f,self__.ch,meta19617__$1));
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19618){
var self__ = this;
var _19618__$1 = this;
return self__.meta19617;
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19617","meta19617",-1226695533,null)], null);
});

cljs.core.async.t_cljs$core$async19616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19616";

cljs.core.async.t_cljs$core$async19616.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19616");
});

cljs.core.async.__GT_t_cljs$core$async19616 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19616(map_GT___$1,f__$1,ch__$1,meta19617){
return (new cljs.core.async.t_cljs$core$async19616(map_GT___$1,f__$1,ch__$1,meta19617));
});

}

return (new cljs.core.async.t_cljs$core$async19616(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19622 = (function (filter_GT_,p,ch,meta19623){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19623 = meta19623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19624,meta19623__$1){
var self__ = this;
var _19624__$1 = this;
return (new cljs.core.async.t_cljs$core$async19622(self__.filter_GT_,self__.p,self__.ch,meta19623__$1));
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19624){
var self__ = this;
var _19624__$1 = this;
return self__.meta19623;
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19623","meta19623",-697415032,null)], null);
});

cljs.core.async.t_cljs$core$async19622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19622";

cljs.core.async.t_cljs$core$async19622.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19622");
});

cljs.core.async.__GT_t_cljs$core$async19622 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19622(filter_GT___$1,p__$1,ch__$1,meta19623){
return (new cljs.core.async.t_cljs$core$async19622(filter_GT___$1,p__$1,ch__$1,meta19623));
});

}

return (new cljs.core.async.t_cljs$core$async19622(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19625 = [];
var len__6152__auto___19669 = arguments.length;
var i__6153__auto___19670 = (0);
while(true){
if((i__6153__auto___19670 < len__6152__auto___19669)){
args19625.push((arguments[i__6153__auto___19670]));

var G__19671 = (i__6153__auto___19670 + (1));
i__6153__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19627 = args19625.length;
switch (G__19627) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19625.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___19673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19673,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19673,out){
return (function (state_19648){
var state_val_19649 = (state_19648[(1)]);
if((state_val_19649 === (7))){
var inst_19644 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
var statearr_19650_19674 = state_19648__$1;
(statearr_19650_19674[(2)] = inst_19644);

(statearr_19650_19674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (1))){
var state_19648__$1 = state_19648;
var statearr_19651_19675 = state_19648__$1;
(statearr_19651_19675[(2)] = null);

(statearr_19651_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (4))){
var inst_19630 = (state_19648[(7)]);
var inst_19630__$1 = (state_19648[(2)]);
var inst_19631 = (inst_19630__$1 == null);
var state_19648__$1 = (function (){var statearr_19652 = state_19648;
(statearr_19652[(7)] = inst_19630__$1);

return statearr_19652;
})();
if(cljs.core.truth_(inst_19631)){
var statearr_19653_19676 = state_19648__$1;
(statearr_19653_19676[(1)] = (5));

} else {
var statearr_19654_19677 = state_19648__$1;
(statearr_19654_19677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (6))){
var inst_19630 = (state_19648[(7)]);
var inst_19635 = p.call(null,inst_19630);
var state_19648__$1 = state_19648;
if(cljs.core.truth_(inst_19635)){
var statearr_19655_19678 = state_19648__$1;
(statearr_19655_19678[(1)] = (8));

} else {
var statearr_19656_19679 = state_19648__$1;
(statearr_19656_19679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (3))){
var inst_19646 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19648__$1,inst_19646);
} else {
if((state_val_19649 === (2))){
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19648__$1,(4),ch);
} else {
if((state_val_19649 === (11))){
var inst_19638 = (state_19648[(2)]);
var state_19648__$1 = state_19648;
var statearr_19657_19680 = state_19648__$1;
(statearr_19657_19680[(2)] = inst_19638);

(statearr_19657_19680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (9))){
var state_19648__$1 = state_19648;
var statearr_19658_19681 = state_19648__$1;
(statearr_19658_19681[(2)] = null);

(statearr_19658_19681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (5))){
var inst_19633 = cljs.core.async.close_BANG_.call(null,out);
var state_19648__$1 = state_19648;
var statearr_19659_19682 = state_19648__$1;
(statearr_19659_19682[(2)] = inst_19633);

(statearr_19659_19682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (10))){
var inst_19641 = (state_19648[(2)]);
var state_19648__$1 = (function (){var statearr_19660 = state_19648;
(statearr_19660[(8)] = inst_19641);

return statearr_19660;
})();
var statearr_19661_19683 = state_19648__$1;
(statearr_19661_19683[(2)] = null);

(statearr_19661_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19649 === (8))){
var inst_19630 = (state_19648[(7)]);
var state_19648__$1 = state_19648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19648__$1,(11),out,inst_19630);
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
});})(c__10342__auto___19673,out))
;
return ((function (switch__10277__auto__,c__10342__auto___19673,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19665 = [null,null,null,null,null,null,null,null,null];
(statearr_19665[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19665[(1)] = (1));

return statearr_19665;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19648){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19666){if((e19666 instanceof Object)){
var ex__10281__auto__ = e19666;
var statearr_19667_19684 = state_19648;
(statearr_19667_19684[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19685 = state_19648;
state_19648 = G__19685;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19673,out))
})();
var state__10344__auto__ = (function (){var statearr_19668 = f__10343__auto__.call(null);
(statearr_19668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19673);

return statearr_19668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19673,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19686 = [];
var len__6152__auto___19689 = arguments.length;
var i__6153__auto___19690 = (0);
while(true){
if((i__6153__auto___19690 < len__6152__auto___19689)){
args19686.push((arguments[i__6153__auto___19690]));

var G__19691 = (i__6153__auto___19690 + (1));
i__6153__auto___19690 = G__19691;
continue;
} else {
}
break;
}

var G__19688 = args19686.length;
switch (G__19688) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19686.length)].join('')));

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
var c__10342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto__){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto__){
return (function (state_19858){
var state_val_19859 = (state_19858[(1)]);
if((state_val_19859 === (7))){
var inst_19854 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19860_19901 = state_19858__$1;
(statearr_19860_19901[(2)] = inst_19854);

(statearr_19860_19901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (20))){
var inst_19824 = (state_19858[(7)]);
var inst_19835 = (state_19858[(2)]);
var inst_19836 = cljs.core.next.call(null,inst_19824);
var inst_19810 = inst_19836;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19861 = state_19858;
(statearr_19861[(8)] = inst_19835);

(statearr_19861[(9)] = inst_19810);

(statearr_19861[(10)] = inst_19812);

(statearr_19861[(11)] = inst_19813);

(statearr_19861[(12)] = inst_19811);

return statearr_19861;
})();
var statearr_19862_19902 = state_19858__$1;
(statearr_19862_19902[(2)] = null);

(statearr_19862_19902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (1))){
var state_19858__$1 = state_19858;
var statearr_19863_19903 = state_19858__$1;
(statearr_19863_19903[(2)] = null);

(statearr_19863_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (4))){
var inst_19799 = (state_19858[(13)]);
var inst_19799__$1 = (state_19858[(2)]);
var inst_19800 = (inst_19799__$1 == null);
var state_19858__$1 = (function (){var statearr_19864 = state_19858;
(statearr_19864[(13)] = inst_19799__$1);

return statearr_19864;
})();
if(cljs.core.truth_(inst_19800)){
var statearr_19865_19904 = state_19858__$1;
(statearr_19865_19904[(1)] = (5));

} else {
var statearr_19866_19905 = state_19858__$1;
(statearr_19866_19905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (15))){
var state_19858__$1 = state_19858;
var statearr_19870_19906 = state_19858__$1;
(statearr_19870_19906[(2)] = null);

(statearr_19870_19906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (21))){
var state_19858__$1 = state_19858;
var statearr_19871_19907 = state_19858__$1;
(statearr_19871_19907[(2)] = null);

(statearr_19871_19907[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (13))){
var inst_19810 = (state_19858[(9)]);
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19820 = (state_19858[(2)]);
var inst_19821 = (inst_19813 + (1));
var tmp19867 = inst_19810;
var tmp19868 = inst_19812;
var tmp19869 = inst_19811;
var inst_19810__$1 = tmp19867;
var inst_19811__$1 = tmp19869;
var inst_19812__$1 = tmp19868;
var inst_19813__$1 = inst_19821;
var state_19858__$1 = (function (){var statearr_19872 = state_19858;
(statearr_19872[(14)] = inst_19820);

(statearr_19872[(9)] = inst_19810__$1);

(statearr_19872[(10)] = inst_19812__$1);

(statearr_19872[(11)] = inst_19813__$1);

(statearr_19872[(12)] = inst_19811__$1);

return statearr_19872;
})();
var statearr_19873_19908 = state_19858__$1;
(statearr_19873_19908[(2)] = null);

(statearr_19873_19908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (22))){
var state_19858__$1 = state_19858;
var statearr_19874_19909 = state_19858__$1;
(statearr_19874_19909[(2)] = null);

(statearr_19874_19909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (6))){
var inst_19799 = (state_19858[(13)]);
var inst_19808 = f.call(null,inst_19799);
var inst_19809 = cljs.core.seq.call(null,inst_19808);
var inst_19810 = inst_19809;
var inst_19811 = null;
var inst_19812 = (0);
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19875 = state_19858;
(statearr_19875[(9)] = inst_19810);

(statearr_19875[(10)] = inst_19812);

(statearr_19875[(11)] = inst_19813);

(statearr_19875[(12)] = inst_19811);

return statearr_19875;
})();
var statearr_19876_19910 = state_19858__$1;
(statearr_19876_19910[(2)] = null);

(statearr_19876_19910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (17))){
var inst_19824 = (state_19858[(7)]);
var inst_19828 = cljs.core.chunk_first.call(null,inst_19824);
var inst_19829 = cljs.core.chunk_rest.call(null,inst_19824);
var inst_19830 = cljs.core.count.call(null,inst_19828);
var inst_19810 = inst_19829;
var inst_19811 = inst_19828;
var inst_19812 = inst_19830;
var inst_19813 = (0);
var state_19858__$1 = (function (){var statearr_19877 = state_19858;
(statearr_19877[(9)] = inst_19810);

(statearr_19877[(10)] = inst_19812);

(statearr_19877[(11)] = inst_19813);

(statearr_19877[(12)] = inst_19811);

return statearr_19877;
})();
var statearr_19878_19911 = state_19858__$1;
(statearr_19878_19911[(2)] = null);

(statearr_19878_19911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (3))){
var inst_19856 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19858__$1,inst_19856);
} else {
if((state_val_19859 === (12))){
var inst_19844 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19879_19912 = state_19858__$1;
(statearr_19879_19912[(2)] = inst_19844);

(statearr_19879_19912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (2))){
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19858__$1,(4),in$);
} else {
if((state_val_19859 === (23))){
var inst_19852 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19880_19913 = state_19858__$1;
(statearr_19880_19913[(2)] = inst_19852);

(statearr_19880_19913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (19))){
var inst_19839 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19881_19914 = state_19858__$1;
(statearr_19881_19914[(2)] = inst_19839);

(statearr_19881_19914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (11))){
var inst_19810 = (state_19858[(9)]);
var inst_19824 = (state_19858[(7)]);
var inst_19824__$1 = cljs.core.seq.call(null,inst_19810);
var state_19858__$1 = (function (){var statearr_19882 = state_19858;
(statearr_19882[(7)] = inst_19824__$1);

return statearr_19882;
})();
if(inst_19824__$1){
var statearr_19883_19915 = state_19858__$1;
(statearr_19883_19915[(1)] = (14));

} else {
var statearr_19884_19916 = state_19858__$1;
(statearr_19884_19916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (9))){
var inst_19846 = (state_19858[(2)]);
var inst_19847 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19858__$1 = (function (){var statearr_19885 = state_19858;
(statearr_19885[(15)] = inst_19846);

return statearr_19885;
})();
if(cljs.core.truth_(inst_19847)){
var statearr_19886_19917 = state_19858__$1;
(statearr_19886_19917[(1)] = (21));

} else {
var statearr_19887_19918 = state_19858__$1;
(statearr_19887_19918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (5))){
var inst_19802 = cljs.core.async.close_BANG_.call(null,out);
var state_19858__$1 = state_19858;
var statearr_19888_19919 = state_19858__$1;
(statearr_19888_19919[(2)] = inst_19802);

(statearr_19888_19919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (14))){
var inst_19824 = (state_19858[(7)]);
var inst_19826 = cljs.core.chunked_seq_QMARK_.call(null,inst_19824);
var state_19858__$1 = state_19858;
if(inst_19826){
var statearr_19889_19920 = state_19858__$1;
(statearr_19889_19920[(1)] = (17));

} else {
var statearr_19890_19921 = state_19858__$1;
(statearr_19890_19921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (16))){
var inst_19842 = (state_19858[(2)]);
var state_19858__$1 = state_19858;
var statearr_19891_19922 = state_19858__$1;
(statearr_19891_19922[(2)] = inst_19842);

(statearr_19891_19922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19859 === (10))){
var inst_19813 = (state_19858[(11)]);
var inst_19811 = (state_19858[(12)]);
var inst_19818 = cljs.core._nth.call(null,inst_19811,inst_19813);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19858__$1,(13),out,inst_19818);
} else {
if((state_val_19859 === (18))){
var inst_19824 = (state_19858[(7)]);
var inst_19833 = cljs.core.first.call(null,inst_19824);
var state_19858__$1 = state_19858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19858__$1,(20),out,inst_19833);
} else {
if((state_val_19859 === (8))){
var inst_19812 = (state_19858[(10)]);
var inst_19813 = (state_19858[(11)]);
var inst_19815 = (inst_19813 < inst_19812);
var inst_19816 = inst_19815;
var state_19858__$1 = state_19858;
if(cljs.core.truth_(inst_19816)){
var statearr_19892_19923 = state_19858__$1;
(statearr_19892_19923[(1)] = (10));

} else {
var statearr_19893_19924 = state_19858__$1;
(statearr_19893_19924[(1)] = (11));

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
});})(c__10342__auto__))
;
return ((function (switch__10277__auto__,c__10342__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____0 = (function (){
var statearr_19897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19897[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__);

(statearr_19897[(1)] = (1));

return statearr_19897;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____1 = (function (state_19858){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19898){if((e19898 instanceof Object)){
var ex__10281__auto__ = e19898;
var statearr_19899_19925 = state_19858;
(statearr_19899_19925[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19926 = state_19858;
state_19858 = G__19926;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__ = function(state_19858){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____1.call(this,state_19858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10278__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto__))
})();
var state__10344__auto__ = (function (){var statearr_19900 = f__10343__auto__.call(null);
(statearr_19900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto__);

return statearr_19900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto__))
);

return c__10342__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19927 = [];
var len__6152__auto___19930 = arguments.length;
var i__6153__auto___19931 = (0);
while(true){
if((i__6153__auto___19931 < len__6152__auto___19930)){
args19927.push((arguments[i__6153__auto___19931]));

var G__19932 = (i__6153__auto___19931 + (1));
i__6153__auto___19931 = G__19932;
continue;
} else {
}
break;
}

var G__19929 = args19927.length;
switch (G__19929) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19927.length)].join('')));

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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19934.length)].join('')));

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
var args19941 = [];
var len__6152__auto___19992 = arguments.length;
var i__6153__auto___19993 = (0);
while(true){
if((i__6153__auto___19993 < len__6152__auto___19992)){
args19941.push((arguments[i__6153__auto___19993]));

var G__19994 = (i__6153__auto___19993 + (1));
i__6153__auto___19993 = G__19994;
continue;
} else {
}
break;
}

var G__19943 = args19941.length;
switch (G__19943) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19941.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___19996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___19996,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___19996,out){
return (function (state_19967){
var state_val_19968 = (state_19967[(1)]);
if((state_val_19968 === (7))){
var inst_19962 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19969_19997 = state_19967__$1;
(statearr_19969_19997[(2)] = inst_19962);

(statearr_19969_19997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (1))){
var inst_19944 = null;
var state_19967__$1 = (function (){var statearr_19970 = state_19967;
(statearr_19970[(7)] = inst_19944);

return statearr_19970;
})();
var statearr_19971_19998 = state_19967__$1;
(statearr_19971_19998[(2)] = null);

(statearr_19971_19998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (4))){
var inst_19947 = (state_19967[(8)]);
var inst_19947__$1 = (state_19967[(2)]);
var inst_19948 = (inst_19947__$1 == null);
var inst_19949 = cljs.core.not.call(null,inst_19948);
var state_19967__$1 = (function (){var statearr_19972 = state_19967;
(statearr_19972[(8)] = inst_19947__$1);

return statearr_19972;
})();
if(inst_19949){
var statearr_19973_19999 = state_19967__$1;
(statearr_19973_19999[(1)] = (5));

} else {
var statearr_19974_20000 = state_19967__$1;
(statearr_19974_20000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (6))){
var state_19967__$1 = state_19967;
var statearr_19975_20001 = state_19967__$1;
(statearr_19975_20001[(2)] = null);

(statearr_19975_20001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (3))){
var inst_19964 = (state_19967[(2)]);
var inst_19965 = cljs.core.async.close_BANG_.call(null,out);
var state_19967__$1 = (function (){var statearr_19976 = state_19967;
(statearr_19976[(9)] = inst_19964);

return statearr_19976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19967__$1,inst_19965);
} else {
if((state_val_19968 === (2))){
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19967__$1,(4),ch);
} else {
if((state_val_19968 === (11))){
var inst_19947 = (state_19967[(8)]);
var inst_19956 = (state_19967[(2)]);
var inst_19944 = inst_19947;
var state_19967__$1 = (function (){var statearr_19977 = state_19967;
(statearr_19977[(10)] = inst_19956);

(statearr_19977[(7)] = inst_19944);

return statearr_19977;
})();
var statearr_19978_20002 = state_19967__$1;
(statearr_19978_20002[(2)] = null);

(statearr_19978_20002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (9))){
var inst_19947 = (state_19967[(8)]);
var state_19967__$1 = state_19967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19967__$1,(11),out,inst_19947);
} else {
if((state_val_19968 === (5))){
var inst_19947 = (state_19967[(8)]);
var inst_19944 = (state_19967[(7)]);
var inst_19951 = cljs.core._EQ_.call(null,inst_19947,inst_19944);
var state_19967__$1 = state_19967;
if(inst_19951){
var statearr_19980_20003 = state_19967__$1;
(statearr_19980_20003[(1)] = (8));

} else {
var statearr_19981_20004 = state_19967__$1;
(statearr_19981_20004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (10))){
var inst_19959 = (state_19967[(2)]);
var state_19967__$1 = state_19967;
var statearr_19982_20005 = state_19967__$1;
(statearr_19982_20005[(2)] = inst_19959);

(statearr_19982_20005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19968 === (8))){
var inst_19944 = (state_19967[(7)]);
var tmp19979 = inst_19944;
var inst_19944__$1 = tmp19979;
var state_19967__$1 = (function (){var statearr_19983 = state_19967;
(statearr_19983[(7)] = inst_19944__$1);

return statearr_19983;
})();
var statearr_19984_20006 = state_19967__$1;
(statearr_19984_20006[(2)] = null);

(statearr_19984_20006[(1)] = (2));


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
});})(c__10342__auto___19996,out))
;
return ((function (switch__10277__auto__,c__10342__auto___19996,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_19988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19988[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_19988[(1)] = (1));

return statearr_19988;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_19967){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_19967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e19989){if((e19989 instanceof Object)){
var ex__10281__auto__ = e19989;
var statearr_19990_20007 = state_19967;
(statearr_19990_20007[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20008 = state_19967;
state_19967 = G__20008;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_19967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_19967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___19996,out))
})();
var state__10344__auto__ = (function (){var statearr_19991 = f__10343__auto__.call(null);
(statearr_19991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___19996);

return statearr_19991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___19996,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20009 = [];
var len__6152__auto___20079 = arguments.length;
var i__6153__auto___20080 = (0);
while(true){
if((i__6153__auto___20080 < len__6152__auto___20079)){
args20009.push((arguments[i__6153__auto___20080]));

var G__20081 = (i__6153__auto___20080 + (1));
i__6153__auto___20080 = G__20081;
continue;
} else {
}
break;
}

var G__20011 = args20009.length;
switch (G__20011) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20009.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___20083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___20083,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___20083,out){
return (function (state_20049){
var state_val_20050 = (state_20049[(1)]);
if((state_val_20050 === (7))){
var inst_20045 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20051_20084 = state_20049__$1;
(statearr_20051_20084[(2)] = inst_20045);

(statearr_20051_20084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (1))){
var inst_20012 = (new Array(n));
var inst_20013 = inst_20012;
var inst_20014 = (0);
var state_20049__$1 = (function (){var statearr_20052 = state_20049;
(statearr_20052[(7)] = inst_20013);

(statearr_20052[(8)] = inst_20014);

return statearr_20052;
})();
var statearr_20053_20085 = state_20049__$1;
(statearr_20053_20085[(2)] = null);

(statearr_20053_20085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (4))){
var inst_20017 = (state_20049[(9)]);
var inst_20017__$1 = (state_20049[(2)]);
var inst_20018 = (inst_20017__$1 == null);
var inst_20019 = cljs.core.not.call(null,inst_20018);
var state_20049__$1 = (function (){var statearr_20054 = state_20049;
(statearr_20054[(9)] = inst_20017__$1);

return statearr_20054;
})();
if(inst_20019){
var statearr_20055_20086 = state_20049__$1;
(statearr_20055_20086[(1)] = (5));

} else {
var statearr_20056_20087 = state_20049__$1;
(statearr_20056_20087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (15))){
var inst_20039 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20057_20088 = state_20049__$1;
(statearr_20057_20088[(2)] = inst_20039);

(statearr_20057_20088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (13))){
var state_20049__$1 = state_20049;
var statearr_20058_20089 = state_20049__$1;
(statearr_20058_20089[(2)] = null);

(statearr_20058_20089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (6))){
var inst_20014 = (state_20049[(8)]);
var inst_20035 = (inst_20014 > (0));
var state_20049__$1 = state_20049;
if(cljs.core.truth_(inst_20035)){
var statearr_20059_20090 = state_20049__$1;
(statearr_20059_20090[(1)] = (12));

} else {
var statearr_20060_20091 = state_20049__$1;
(statearr_20060_20091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (3))){
var inst_20047 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20049__$1,inst_20047);
} else {
if((state_val_20050 === (12))){
var inst_20013 = (state_20049[(7)]);
var inst_20037 = cljs.core.vec.call(null,inst_20013);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20049__$1,(15),out,inst_20037);
} else {
if((state_val_20050 === (2))){
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20049__$1,(4),ch);
} else {
if((state_val_20050 === (11))){
var inst_20029 = (state_20049[(2)]);
var inst_20030 = (new Array(n));
var inst_20013 = inst_20030;
var inst_20014 = (0);
var state_20049__$1 = (function (){var statearr_20061 = state_20049;
(statearr_20061[(7)] = inst_20013);

(statearr_20061[(10)] = inst_20029);

(statearr_20061[(8)] = inst_20014);

return statearr_20061;
})();
var statearr_20062_20092 = state_20049__$1;
(statearr_20062_20092[(2)] = null);

(statearr_20062_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (9))){
var inst_20013 = (state_20049[(7)]);
var inst_20027 = cljs.core.vec.call(null,inst_20013);
var state_20049__$1 = state_20049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20049__$1,(11),out,inst_20027);
} else {
if((state_val_20050 === (5))){
var inst_20017 = (state_20049[(9)]);
var inst_20013 = (state_20049[(7)]);
var inst_20022 = (state_20049[(11)]);
var inst_20014 = (state_20049[(8)]);
var inst_20021 = (inst_20013[inst_20014] = inst_20017);
var inst_20022__$1 = (inst_20014 + (1));
var inst_20023 = (inst_20022__$1 < n);
var state_20049__$1 = (function (){var statearr_20063 = state_20049;
(statearr_20063[(12)] = inst_20021);

(statearr_20063[(11)] = inst_20022__$1);

return statearr_20063;
})();
if(cljs.core.truth_(inst_20023)){
var statearr_20064_20093 = state_20049__$1;
(statearr_20064_20093[(1)] = (8));

} else {
var statearr_20065_20094 = state_20049__$1;
(statearr_20065_20094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (14))){
var inst_20042 = (state_20049[(2)]);
var inst_20043 = cljs.core.async.close_BANG_.call(null,out);
var state_20049__$1 = (function (){var statearr_20067 = state_20049;
(statearr_20067[(13)] = inst_20042);

return statearr_20067;
})();
var statearr_20068_20095 = state_20049__$1;
(statearr_20068_20095[(2)] = inst_20043);

(statearr_20068_20095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (10))){
var inst_20033 = (state_20049[(2)]);
var state_20049__$1 = state_20049;
var statearr_20069_20096 = state_20049__$1;
(statearr_20069_20096[(2)] = inst_20033);

(statearr_20069_20096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20050 === (8))){
var inst_20013 = (state_20049[(7)]);
var inst_20022 = (state_20049[(11)]);
var tmp20066 = inst_20013;
var inst_20013__$1 = tmp20066;
var inst_20014 = inst_20022;
var state_20049__$1 = (function (){var statearr_20070 = state_20049;
(statearr_20070[(7)] = inst_20013__$1);

(statearr_20070[(8)] = inst_20014);

return statearr_20070;
})();
var statearr_20071_20097 = state_20049__$1;
(statearr_20071_20097[(2)] = null);

(statearr_20071_20097[(1)] = (2));


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
});})(c__10342__auto___20083,out))
;
return ((function (switch__10277__auto__,c__10342__auto___20083,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_20075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20075[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_20075[(1)] = (1));

return statearr_20075;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_20049){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_20049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e20076){if((e20076 instanceof Object)){
var ex__10281__auto__ = e20076;
var statearr_20077_20098 = state_20049;
(statearr_20077_20098[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20099 = state_20049;
state_20049 = G__20099;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_20049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_20049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___20083,out))
})();
var state__10344__auto__ = (function (){var statearr_20078 = f__10343__auto__.call(null);
(statearr_20078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___20083);

return statearr_20078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___20083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20100 = [];
var len__6152__auto___20174 = arguments.length;
var i__6153__auto___20175 = (0);
while(true){
if((i__6153__auto___20175 < len__6152__auto___20174)){
args20100.push((arguments[i__6153__auto___20175]));

var G__20176 = (i__6153__auto___20175 + (1));
i__6153__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var G__20102 = args20100.length;
switch (G__20102) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20100.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10342__auto___20178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10342__auto___20178,out){
return (function (){
var f__10343__auto__ = (function (){var switch__10277__auto__ = ((function (c__10342__auto___20178,out){
return (function (state_20144){
var state_val_20145 = (state_20144[(1)]);
if((state_val_20145 === (7))){
var inst_20140 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20146_20179 = state_20144__$1;
(statearr_20146_20179[(2)] = inst_20140);

(statearr_20146_20179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (1))){
var inst_20103 = [];
var inst_20104 = inst_20103;
var inst_20105 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20144__$1 = (function (){var statearr_20147 = state_20144;
(statearr_20147[(7)] = inst_20104);

(statearr_20147[(8)] = inst_20105);

return statearr_20147;
})();
var statearr_20148_20180 = state_20144__$1;
(statearr_20148_20180[(2)] = null);

(statearr_20148_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (4))){
var inst_20108 = (state_20144[(9)]);
var inst_20108__$1 = (state_20144[(2)]);
var inst_20109 = (inst_20108__$1 == null);
var inst_20110 = cljs.core.not.call(null,inst_20109);
var state_20144__$1 = (function (){var statearr_20149 = state_20144;
(statearr_20149[(9)] = inst_20108__$1);

return statearr_20149;
})();
if(inst_20110){
var statearr_20150_20181 = state_20144__$1;
(statearr_20150_20181[(1)] = (5));

} else {
var statearr_20151_20182 = state_20144__$1;
(statearr_20151_20182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (15))){
var inst_20134 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20152_20183 = state_20144__$1;
(statearr_20152_20183[(2)] = inst_20134);

(statearr_20152_20183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (13))){
var state_20144__$1 = state_20144;
var statearr_20153_20184 = state_20144__$1;
(statearr_20153_20184[(2)] = null);

(statearr_20153_20184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (6))){
var inst_20104 = (state_20144[(7)]);
var inst_20129 = inst_20104.length;
var inst_20130 = (inst_20129 > (0));
var state_20144__$1 = state_20144;
if(cljs.core.truth_(inst_20130)){
var statearr_20154_20185 = state_20144__$1;
(statearr_20154_20185[(1)] = (12));

} else {
var statearr_20155_20186 = state_20144__$1;
(statearr_20155_20186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (3))){
var inst_20142 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20144__$1,inst_20142);
} else {
if((state_val_20145 === (12))){
var inst_20104 = (state_20144[(7)]);
var inst_20132 = cljs.core.vec.call(null,inst_20104);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20144__$1,(15),out,inst_20132);
} else {
if((state_val_20145 === (2))){
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20144__$1,(4),ch);
} else {
if((state_val_20145 === (11))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20122 = (state_20144[(2)]);
var inst_20123 = [];
var inst_20124 = inst_20123.push(inst_20108);
var inst_20104 = inst_20123;
var inst_20105 = inst_20112;
var state_20144__$1 = (function (){var statearr_20156 = state_20144;
(statearr_20156[(11)] = inst_20122);

(statearr_20156[(7)] = inst_20104);

(statearr_20156[(12)] = inst_20124);

(statearr_20156[(8)] = inst_20105);

return statearr_20156;
})();
var statearr_20157_20187 = state_20144__$1;
(statearr_20157_20187[(2)] = null);

(statearr_20157_20187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (9))){
var inst_20104 = (state_20144[(7)]);
var inst_20120 = cljs.core.vec.call(null,inst_20104);
var state_20144__$1 = state_20144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20144__$1,(11),out,inst_20120);
} else {
if((state_val_20145 === (5))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20105 = (state_20144[(8)]);
var inst_20112__$1 = f.call(null,inst_20108);
var inst_20113 = cljs.core._EQ_.call(null,inst_20112__$1,inst_20105);
var inst_20114 = cljs.core.keyword_identical_QMARK_.call(null,inst_20105,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20115 = (inst_20113) || (inst_20114);
var state_20144__$1 = (function (){var statearr_20158 = state_20144;
(statearr_20158[(10)] = inst_20112__$1);

return statearr_20158;
})();
if(cljs.core.truth_(inst_20115)){
var statearr_20159_20188 = state_20144__$1;
(statearr_20159_20188[(1)] = (8));

} else {
var statearr_20160_20189 = state_20144__$1;
(statearr_20160_20189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (14))){
var inst_20137 = (state_20144[(2)]);
var inst_20138 = cljs.core.async.close_BANG_.call(null,out);
var state_20144__$1 = (function (){var statearr_20162 = state_20144;
(statearr_20162[(13)] = inst_20137);

return statearr_20162;
})();
var statearr_20163_20190 = state_20144__$1;
(statearr_20163_20190[(2)] = inst_20138);

(statearr_20163_20190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (10))){
var inst_20127 = (state_20144[(2)]);
var state_20144__$1 = state_20144;
var statearr_20164_20191 = state_20144__$1;
(statearr_20164_20191[(2)] = inst_20127);

(statearr_20164_20191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20145 === (8))){
var inst_20112 = (state_20144[(10)]);
var inst_20108 = (state_20144[(9)]);
var inst_20104 = (state_20144[(7)]);
var inst_20117 = inst_20104.push(inst_20108);
var tmp20161 = inst_20104;
var inst_20104__$1 = tmp20161;
var inst_20105 = inst_20112;
var state_20144__$1 = (function (){var statearr_20165 = state_20144;
(statearr_20165[(7)] = inst_20104__$1);

(statearr_20165[(8)] = inst_20105);

(statearr_20165[(14)] = inst_20117);

return statearr_20165;
})();
var statearr_20166_20192 = state_20144__$1;
(statearr_20166_20192[(2)] = null);

(statearr_20166_20192[(1)] = (2));


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
});})(c__10342__auto___20178,out))
;
return ((function (switch__10277__auto__,c__10342__auto___20178,out){
return (function() {
var cljs$core$async$state_machine__10278__auto__ = null;
var cljs$core$async$state_machine__10278__auto____0 = (function (){
var statearr_20170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20170[(0)] = cljs$core$async$state_machine__10278__auto__);

(statearr_20170[(1)] = (1));

return statearr_20170;
});
var cljs$core$async$state_machine__10278__auto____1 = (function (state_20144){
while(true){
var ret_value__10279__auto__ = (function (){try{while(true){
var result__10280__auto__ = switch__10277__auto__.call(null,state_20144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10280__auto__;
}
break;
}
}catch (e20171){if((e20171 instanceof Object)){
var ex__10281__auto__ = e20171;
var statearr_20172_20193 = state_20144;
(statearr_20172_20193[(5)] = ex__10281__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20194 = state_20144;
state_20144 = G__20194;
continue;
} else {
return ret_value__10279__auto__;
}
break;
}
});
cljs$core$async$state_machine__10278__auto__ = function(state_20144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10278__auto____1.call(this,state_20144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10278__auto____0;
cljs$core$async$state_machine__10278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10278__auto____1;
return cljs$core$async$state_machine__10278__auto__;
})()
;})(switch__10277__auto__,c__10342__auto___20178,out))
})();
var state__10344__auto__ = (function (){var statearr_20173 = f__10343__auto__.call(null);
(statearr_20173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10342__auto___20178);

return statearr_20173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10344__auto__);
});})(c__10342__auto___20178,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map