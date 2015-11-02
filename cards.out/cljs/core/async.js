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
if(typeof cljs.core.async.t_cljs$core$async17462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17462 = (function (fn_handler,f,meta17463){
this.fn_handler = fn_handler;
this.f = f;
this.meta17463 = meta17463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17464,meta17463__$1){
var self__ = this;
var _17464__$1 = this;
return (new cljs.core.async.t_cljs$core$async17462(self__.fn_handler,self__.f,meta17463__$1));
});

cljs.core.async.t_cljs$core$async17462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17464){
var self__ = this;
var _17464__$1 = this;
return self__.meta17463;
});

cljs.core.async.t_cljs$core$async17462.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17463","meta17463",-1434900754,null)], null);
});

cljs.core.async.t_cljs$core$async17462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17462";

cljs.core.async.t_cljs$core$async17462.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17462");
});

cljs.core.async.__GT_t_cljs$core$async17462 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17462(fn_handler__$1,f__$1,meta17463){
return (new cljs.core.async.t_cljs$core$async17462(fn_handler__$1,f__$1,meta17463));
});

}

return (new cljs.core.async.t_cljs$core$async17462(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17467 = [];
var len__6152__auto___17470 = arguments.length;
var i__6153__auto___17471 = (0);
while(true){
if((i__6153__auto___17471 < len__6152__auto___17470)){
args17467.push((arguments[i__6153__auto___17471]));

var G__17472 = (i__6153__auto___17471 + (1));
i__6153__auto___17471 = G__17472;
continue;
} else {
}
break;
}

var G__17469 = args17467.length;
switch (G__17469) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17467.length)].join('')));

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
var args17474 = [];
var len__6152__auto___17477 = arguments.length;
var i__6153__auto___17478 = (0);
while(true){
if((i__6153__auto___17478 < len__6152__auto___17477)){
args17474.push((arguments[i__6153__auto___17478]));

var G__17479 = (i__6153__auto___17478 + (1));
i__6153__auto___17478 = G__17479;
continue;
} else {
}
break;
}

var G__17476 = args17474.length;
switch (G__17476) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17474.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17481 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17481);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17481,ret){
return (function (){
return fn1.call(null,val_17481);
});})(val_17481,ret))
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
var args17482 = [];
var len__6152__auto___17485 = arguments.length;
var i__6153__auto___17486 = (0);
while(true){
if((i__6153__auto___17486 < len__6152__auto___17485)){
args17482.push((arguments[i__6153__auto___17486]));

var G__17487 = (i__6153__auto___17486 + (1));
i__6153__auto___17486 = G__17487;
continue;
} else {
}
break;
}

var G__17484 = args17482.length;
switch (G__17484) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17482.length)].join('')));

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
var n__5997__auto___17489 = n;
var x_17490 = (0);
while(true){
if((x_17490 < n__5997__auto___17489)){
(a[x_17490] = (0));

var G__17491 = (x_17490 + (1));
x_17490 = G__17491;
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

var G__17492 = (i + (1));
i = G__17492;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17496 = (function (alt_flag,flag,meta17497){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17497 = meta17497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17498,meta17497__$1){
var self__ = this;
var _17498__$1 = this;
return (new cljs.core.async.t_cljs$core$async17496(self__.alt_flag,self__.flag,meta17497__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17498){
var self__ = this;
var _17498__$1 = this;
return self__.meta17497;
});})(flag))
;

cljs.core.async.t_cljs$core$async17496.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17496.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17496.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17496.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17497","meta17497",-975348532,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17496";

cljs.core.async.t_cljs$core$async17496.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17496");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17496 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17496(alt_flag__$1,flag__$1,meta17497){
return (new cljs.core.async.t_cljs$core$async17496(alt_flag__$1,flag__$1,meta17497));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17496(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17502 = (function (alt_handler,flag,cb,meta17503){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17503 = meta17503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17504,meta17503__$1){
var self__ = this;
var _17504__$1 = this;
return (new cljs.core.async.t_cljs$core$async17502(self__.alt_handler,self__.flag,self__.cb,meta17503__$1));
});

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17504){
var self__ = this;
var _17504__$1 = this;
return self__.meta17503;
});

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17503","meta17503",-498050657,null)], null);
});

cljs.core.async.t_cljs$core$async17502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17502";

cljs.core.async.t_cljs$core$async17502.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17502");
});

cljs.core.async.__GT_t_cljs$core$async17502 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17502(alt_handler__$1,flag__$1,cb__$1,meta17503){
return (new cljs.core.async.t_cljs$core$async17502(alt_handler__$1,flag__$1,cb__$1,meta17503));
});

}

return (new cljs.core.async.t_cljs$core$async17502(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17505_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17505_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17506_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17506_SHARP_,port], null));
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
var G__17507 = (i + (1));
i = G__17507;
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
var len__6152__auto___17513 = arguments.length;
var i__6153__auto___17514 = (0);
while(true){
if((i__6153__auto___17514 < len__6152__auto___17513)){
args__6159__auto__.push((arguments[i__6153__auto___17514]));

var G__17515 = (i__6153__auto___17514 + (1));
i__6153__auto___17514 = G__17515;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17510){
var map__17511 = p__17510;
var map__17511__$1 = ((((!((map__17511 == null)))?((((map__17511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17511):map__17511);
var opts = map__17511__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17508){
var G__17509 = cljs.core.first.call(null,seq17508);
var seq17508__$1 = cljs.core.next.call(null,seq17508);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17509,seq17508__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17516 = [];
var len__6152__auto___17566 = arguments.length;
var i__6153__auto___17567 = (0);
while(true){
if((i__6153__auto___17567 < len__6152__auto___17566)){
args17516.push((arguments[i__6153__auto___17567]));

var G__17568 = (i__6153__auto___17567 + (1));
i__6153__auto___17567 = G__17568;
continue;
} else {
}
break;
}

var G__17518 = args17516.length;
switch (G__17518) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17516.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10260__auto___17570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17570){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17570){
return (function (state_17542){
var state_val_17543 = (state_17542[(1)]);
if((state_val_17543 === (7))){
var inst_17538 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17544_17571 = state_17542__$1;
(statearr_17544_17571[(2)] = inst_17538);

(statearr_17544_17571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (1))){
var state_17542__$1 = state_17542;
var statearr_17545_17572 = state_17542__$1;
(statearr_17545_17572[(2)] = null);

(statearr_17545_17572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (4))){
var inst_17521 = (state_17542[(7)]);
var inst_17521__$1 = (state_17542[(2)]);
var inst_17522 = (inst_17521__$1 == null);
var state_17542__$1 = (function (){var statearr_17546 = state_17542;
(statearr_17546[(7)] = inst_17521__$1);

return statearr_17546;
})();
if(cljs.core.truth_(inst_17522)){
var statearr_17547_17573 = state_17542__$1;
(statearr_17547_17573[(1)] = (5));

} else {
var statearr_17548_17574 = state_17542__$1;
(statearr_17548_17574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (13))){
var state_17542__$1 = state_17542;
var statearr_17549_17575 = state_17542__$1;
(statearr_17549_17575[(2)] = null);

(statearr_17549_17575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (6))){
var inst_17521 = (state_17542[(7)]);
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17542__$1,(11),to,inst_17521);
} else {
if((state_val_17543 === (3))){
var inst_17540 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17542__$1,inst_17540);
} else {
if((state_val_17543 === (12))){
var state_17542__$1 = state_17542;
var statearr_17550_17576 = state_17542__$1;
(statearr_17550_17576[(2)] = null);

(statearr_17550_17576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (2))){
var state_17542__$1 = state_17542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17542__$1,(4),from);
} else {
if((state_val_17543 === (11))){
var inst_17531 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
if(cljs.core.truth_(inst_17531)){
var statearr_17551_17577 = state_17542__$1;
(statearr_17551_17577[(1)] = (12));

} else {
var statearr_17552_17578 = state_17542__$1;
(statearr_17552_17578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (9))){
var state_17542__$1 = state_17542;
var statearr_17553_17579 = state_17542__$1;
(statearr_17553_17579[(2)] = null);

(statearr_17553_17579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (5))){
var state_17542__$1 = state_17542;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17554_17580 = state_17542__$1;
(statearr_17554_17580[(1)] = (8));

} else {
var statearr_17555_17581 = state_17542__$1;
(statearr_17555_17581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (14))){
var inst_17536 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17556_17582 = state_17542__$1;
(statearr_17556_17582[(2)] = inst_17536);

(statearr_17556_17582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (10))){
var inst_17528 = (state_17542[(2)]);
var state_17542__$1 = state_17542;
var statearr_17557_17583 = state_17542__$1;
(statearr_17557_17583[(2)] = inst_17528);

(statearr_17557_17583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17543 === (8))){
var inst_17525 = cljs.core.async.close_BANG_.call(null,to);
var state_17542__$1 = state_17542;
var statearr_17558_17584 = state_17542__$1;
(statearr_17558_17584[(2)] = inst_17525);

(statearr_17558_17584[(1)] = (10));


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
});})(c__10260__auto___17570))
;
return ((function (switch__10195__auto__,c__10260__auto___17570){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_17562 = [null,null,null,null,null,null,null,null];
(statearr_17562[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_17562[(1)] = (1));

return statearr_17562;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_17542){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17563){if((e17563 instanceof Object)){
var ex__10199__auto__ = e17563;
var statearr_17564_17585 = state_17542;
(statearr_17564_17585[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17586 = state_17542;
state_17542 = G__17586;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_17542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_17542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17570))
})();
var state__10262__auto__ = (function (){var statearr_17565 = f__10261__auto__.call(null);
(statearr_17565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17570);

return statearr_17565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17570))
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
return (function (p__17770){
var vec__17771 = p__17770;
var v = cljs.core.nth.call(null,vec__17771,(0),null);
var p = cljs.core.nth.call(null,vec__17771,(1),null);
var job = vec__17771;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10260__auto___17953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results){
return (function (state_17776){
var state_val_17777 = (state_17776[(1)]);
if((state_val_17777 === (1))){
var state_17776__$1 = state_17776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17776__$1,(2),res,v);
} else {
if((state_val_17777 === (2))){
var inst_17773 = (state_17776[(2)]);
var inst_17774 = cljs.core.async.close_BANG_.call(null,res);
var state_17776__$1 = (function (){var statearr_17778 = state_17776;
(statearr_17778[(7)] = inst_17773);

return statearr_17778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17776__$1,inst_17774);
} else {
return null;
}
}
});})(c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results))
;
return ((function (switch__10195__auto__,c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17782 = [null,null,null,null,null,null,null,null];
(statearr_17782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17782[(1)] = (1));

return statearr_17782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17776){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17783){if((e17783 instanceof Object)){
var ex__10199__auto__ = e17783;
var statearr_17784_17954 = state_17776;
(statearr_17784_17954[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17955 = state_17776;
state_17776 = G__17955;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results))
})();
var state__10262__auto__ = (function (){var statearr_17785 = f__10261__auto__.call(null);
(statearr_17785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17953);

return statearr_17785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17953,res,vec__17771,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17786){
var vec__17787 = p__17786;
var v = cljs.core.nth.call(null,vec__17787,(0),null);
var p = cljs.core.nth.call(null,vec__17787,(1),null);
var job = vec__17787;
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
var n__5997__auto___17956 = n;
var __17957 = (0);
while(true){
if((__17957 < n__5997__auto___17956)){
var G__17788_17958 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17788_17958) {
case "compute":
var c__10260__auto___17960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17957,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (__17957,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function (state_17801){
var state_val_17802 = (state_17801[(1)]);
if((state_val_17802 === (1))){
var state_17801__$1 = state_17801;
var statearr_17803_17961 = state_17801__$1;
(statearr_17803_17961[(2)] = null);

(statearr_17803_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (2))){
var state_17801__$1 = state_17801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17801__$1,(4),jobs);
} else {
if((state_val_17802 === (3))){
var inst_17799 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17801__$1,inst_17799);
} else {
if((state_val_17802 === (4))){
var inst_17791 = (state_17801[(2)]);
var inst_17792 = process.call(null,inst_17791);
var state_17801__$1 = state_17801;
if(cljs.core.truth_(inst_17792)){
var statearr_17804_17962 = state_17801__$1;
(statearr_17804_17962[(1)] = (5));

} else {
var statearr_17805_17963 = state_17801__$1;
(statearr_17805_17963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (5))){
var state_17801__$1 = state_17801;
var statearr_17806_17964 = state_17801__$1;
(statearr_17806_17964[(2)] = null);

(statearr_17806_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (6))){
var state_17801__$1 = state_17801;
var statearr_17807_17965 = state_17801__$1;
(statearr_17807_17965[(2)] = null);

(statearr_17807_17965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17802 === (7))){
var inst_17797 = (state_17801[(2)]);
var state_17801__$1 = state_17801;
var statearr_17808_17966 = state_17801__$1;
(statearr_17808_17966[(2)] = inst_17797);

(statearr_17808_17966[(1)] = (3));


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
});})(__17957,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
;
return ((function (__17957,switch__10195__auto__,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17812 = [null,null,null,null,null,null,null];
(statearr_17812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17812[(1)] = (1));

return statearr_17812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17801){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17813){if((e17813 instanceof Object)){
var ex__10199__auto__ = e17813;
var statearr_17814_17967 = state_17801;
(statearr_17814_17967[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17968 = state_17801;
state_17801 = G__17968;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(__17957,switch__10195__auto__,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17815 = f__10261__auto__.call(null);
(statearr_17815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17960);

return statearr_17815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(__17957,c__10260__auto___17960,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
);


break;
case "async":
var c__10260__auto___17969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17957,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (__17957,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function (state_17828){
var state_val_17829 = (state_17828[(1)]);
if((state_val_17829 === (1))){
var state_17828__$1 = state_17828;
var statearr_17830_17970 = state_17828__$1;
(statearr_17830_17970[(2)] = null);

(statearr_17830_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17829 === (2))){
var state_17828__$1 = state_17828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17828__$1,(4),jobs);
} else {
if((state_val_17829 === (3))){
var inst_17826 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17828__$1,inst_17826);
} else {
if((state_val_17829 === (4))){
var inst_17818 = (state_17828[(2)]);
var inst_17819 = async.call(null,inst_17818);
var state_17828__$1 = state_17828;
if(cljs.core.truth_(inst_17819)){
var statearr_17831_17971 = state_17828__$1;
(statearr_17831_17971[(1)] = (5));

} else {
var statearr_17832_17972 = state_17828__$1;
(statearr_17832_17972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17829 === (5))){
var state_17828__$1 = state_17828;
var statearr_17833_17973 = state_17828__$1;
(statearr_17833_17973[(2)] = null);

(statearr_17833_17973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17829 === (6))){
var state_17828__$1 = state_17828;
var statearr_17834_17974 = state_17828__$1;
(statearr_17834_17974[(2)] = null);

(statearr_17834_17974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17829 === (7))){
var inst_17824 = (state_17828[(2)]);
var state_17828__$1 = state_17828;
var statearr_17835_17975 = state_17828__$1;
(statearr_17835_17975[(2)] = inst_17824);

(statearr_17835_17975[(1)] = (3));


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
});})(__17957,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
;
return ((function (__17957,switch__10195__auto__,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17839 = [null,null,null,null,null,null,null];
(statearr_17839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17839[(1)] = (1));

return statearr_17839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17828){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17840){if((e17840 instanceof Object)){
var ex__10199__auto__ = e17840;
var statearr_17841_17976 = state_17828;
(statearr_17841_17976[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17977 = state_17828;
state_17828 = G__17977;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(__17957,switch__10195__auto__,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17842 = f__10261__auto__.call(null);
(statearr_17842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17969);

return statearr_17842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(__17957,c__10260__auto___17969,G__17788_17958,n__5997__auto___17956,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17978 = (__17957 + (1));
__17957 = G__17978;
continue;
} else {
}
break;
}

var c__10260__auto___17979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___17979,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___17979,jobs,results,process,async){
return (function (state_17864){
var state_val_17865 = (state_17864[(1)]);
if((state_val_17865 === (1))){
var state_17864__$1 = state_17864;
var statearr_17866_17980 = state_17864__$1;
(statearr_17866_17980[(2)] = null);

(statearr_17866_17980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (2))){
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17864__$1,(4),from);
} else {
if((state_val_17865 === (3))){
var inst_17862 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17864__$1,inst_17862);
} else {
if((state_val_17865 === (4))){
var inst_17845 = (state_17864[(7)]);
var inst_17845__$1 = (state_17864[(2)]);
var inst_17846 = (inst_17845__$1 == null);
var state_17864__$1 = (function (){var statearr_17867 = state_17864;
(statearr_17867[(7)] = inst_17845__$1);

return statearr_17867;
})();
if(cljs.core.truth_(inst_17846)){
var statearr_17868_17981 = state_17864__$1;
(statearr_17868_17981[(1)] = (5));

} else {
var statearr_17869_17982 = state_17864__$1;
(statearr_17869_17982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (5))){
var inst_17848 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17864__$1 = state_17864;
var statearr_17870_17983 = state_17864__$1;
(statearr_17870_17983[(2)] = inst_17848);

(statearr_17870_17983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (6))){
var inst_17845 = (state_17864[(7)]);
var inst_17850 = (state_17864[(8)]);
var inst_17850__$1 = cljs.core.async.chan.call(null,(1));
var inst_17851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17852 = [inst_17845,inst_17850__$1];
var inst_17853 = (new cljs.core.PersistentVector(null,2,(5),inst_17851,inst_17852,null));
var state_17864__$1 = (function (){var statearr_17871 = state_17864;
(statearr_17871[(8)] = inst_17850__$1);

return statearr_17871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17864__$1,(8),jobs,inst_17853);
} else {
if((state_val_17865 === (7))){
var inst_17860 = (state_17864[(2)]);
var state_17864__$1 = state_17864;
var statearr_17872_17984 = state_17864__$1;
(statearr_17872_17984[(2)] = inst_17860);

(statearr_17872_17984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17865 === (8))){
var inst_17850 = (state_17864[(8)]);
var inst_17855 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17873 = state_17864;
(statearr_17873[(9)] = inst_17855);

return statearr_17873;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17864__$1,(9),results,inst_17850);
} else {
if((state_val_17865 === (9))){
var inst_17857 = (state_17864[(2)]);
var state_17864__$1 = (function (){var statearr_17874 = state_17864;
(statearr_17874[(10)] = inst_17857);

return statearr_17874;
})();
var statearr_17875_17985 = state_17864__$1;
(statearr_17875_17985[(2)] = null);

(statearr_17875_17985[(1)] = (2));


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
});})(c__10260__auto___17979,jobs,results,process,async))
;
return ((function (switch__10195__auto__,c__10260__auto___17979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0 = (function (){
var statearr_17879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17879[(1)] = (1));

return statearr_17879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17864){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17880){if((e17880 instanceof Object)){
var ex__10199__auto__ = e17880;
var statearr_17881_17986 = state_17864;
(statearr_17881_17986[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17987 = state_17864;
state_17864 = G__17987;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___17979,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17882 = f__10261__auto__.call(null);
(statearr_17882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___17979);

return statearr_17882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___17979,jobs,results,process,async))
);


var c__10260__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto__,jobs,results,process,async){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto__,jobs,results,process,async){
return (function (state_17920){
var state_val_17921 = (state_17920[(1)]);
if((state_val_17921 === (7))){
var inst_17916 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17922_17988 = state_17920__$1;
(statearr_17922_17988[(2)] = inst_17916);

(statearr_17922_17988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (20))){
var state_17920__$1 = state_17920;
var statearr_17923_17989 = state_17920__$1;
(statearr_17923_17989[(2)] = null);

(statearr_17923_17989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (1))){
var state_17920__$1 = state_17920;
var statearr_17924_17990 = state_17920__$1;
(statearr_17924_17990[(2)] = null);

(statearr_17924_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (4))){
var inst_17885 = (state_17920[(7)]);
var inst_17885__$1 = (state_17920[(2)]);
var inst_17886 = (inst_17885__$1 == null);
var state_17920__$1 = (function (){var statearr_17925 = state_17920;
(statearr_17925[(7)] = inst_17885__$1);

return statearr_17925;
})();
if(cljs.core.truth_(inst_17886)){
var statearr_17926_17991 = state_17920__$1;
(statearr_17926_17991[(1)] = (5));

} else {
var statearr_17927_17992 = state_17920__$1;
(statearr_17927_17992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (15))){
var inst_17898 = (state_17920[(8)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17920__$1,(18),to,inst_17898);
} else {
if((state_val_17921 === (21))){
var inst_17911 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17928_17993 = state_17920__$1;
(statearr_17928_17993[(2)] = inst_17911);

(statearr_17928_17993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (13))){
var inst_17913 = (state_17920[(2)]);
var state_17920__$1 = (function (){var statearr_17929 = state_17920;
(statearr_17929[(9)] = inst_17913);

return statearr_17929;
})();
var statearr_17930_17994 = state_17920__$1;
(statearr_17930_17994[(2)] = null);

(statearr_17930_17994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (6))){
var inst_17885 = (state_17920[(7)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(11),inst_17885);
} else {
if((state_val_17921 === (17))){
var inst_17906 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
if(cljs.core.truth_(inst_17906)){
var statearr_17931_17995 = state_17920__$1;
(statearr_17931_17995[(1)] = (19));

} else {
var statearr_17932_17996 = state_17920__$1;
(statearr_17932_17996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (3))){
var inst_17918 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17920__$1,inst_17918);
} else {
if((state_val_17921 === (12))){
var inst_17895 = (state_17920[(10)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(14),inst_17895);
} else {
if((state_val_17921 === (2))){
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(4),results);
} else {
if((state_val_17921 === (19))){
var state_17920__$1 = state_17920;
var statearr_17933_17997 = state_17920__$1;
(statearr_17933_17997[(2)] = null);

(statearr_17933_17997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (11))){
var inst_17895 = (state_17920[(2)]);
var state_17920__$1 = (function (){var statearr_17934 = state_17920;
(statearr_17934[(10)] = inst_17895);

return statearr_17934;
})();
var statearr_17935_17998 = state_17920__$1;
(statearr_17935_17998[(2)] = null);

(statearr_17935_17998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (9))){
var state_17920__$1 = state_17920;
var statearr_17936_17999 = state_17920__$1;
(statearr_17936_17999[(2)] = null);

(statearr_17936_17999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (5))){
var state_17920__$1 = state_17920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17937_18000 = state_17920__$1;
(statearr_17937_18000[(1)] = (8));

} else {
var statearr_17938_18001 = state_17920__$1;
(statearr_17938_18001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (14))){
var inst_17898 = (state_17920[(8)]);
var inst_17900 = (state_17920[(11)]);
var inst_17898__$1 = (state_17920[(2)]);
var inst_17899 = (inst_17898__$1 == null);
var inst_17900__$1 = cljs.core.not.call(null,inst_17899);
var state_17920__$1 = (function (){var statearr_17939 = state_17920;
(statearr_17939[(8)] = inst_17898__$1);

(statearr_17939[(11)] = inst_17900__$1);

return statearr_17939;
})();
if(inst_17900__$1){
var statearr_17940_18002 = state_17920__$1;
(statearr_17940_18002[(1)] = (15));

} else {
var statearr_17941_18003 = state_17920__$1;
(statearr_17941_18003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (16))){
var inst_17900 = (state_17920[(11)]);
var state_17920__$1 = state_17920;
var statearr_17942_18004 = state_17920__$1;
(statearr_17942_18004[(2)] = inst_17900);

(statearr_17942_18004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (10))){
var inst_17892 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17943_18005 = state_17920__$1;
(statearr_17943_18005[(2)] = inst_17892);

(statearr_17943_18005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (18))){
var inst_17903 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17944_18006 = state_17920__$1;
(statearr_17944_18006[(2)] = inst_17903);

(statearr_17944_18006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17921 === (8))){
var inst_17889 = cljs.core.async.close_BANG_.call(null,to);
var state_17920__$1 = state_17920;
var statearr_17945_18007 = state_17920__$1;
(statearr_17945_18007[(2)] = inst_17889);

(statearr_17945_18007[(1)] = (10));


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
var statearr_17949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__);

(statearr_17949[(1)] = (1));

return statearr_17949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1 = (function (state_17920){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_17920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e17950){if((e17950 instanceof Object)){
var ex__10199__auto__ = e17950;
var statearr_17951_18008 = state_17920;
(statearr_17951_18008[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18009 = state_17920;
state_17920 = G__18009;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__ = function(state_17920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1.call(this,state_17920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__,jobs,results,process,async))
})();
var state__10262__auto__ = (function (){var statearr_17952 = f__10261__auto__.call(null);
(statearr_17952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_17952;
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
var args18010 = [];
var len__6152__auto___18013 = arguments.length;
var i__6153__auto___18014 = (0);
while(true){
if((i__6153__auto___18014 < len__6152__auto___18013)){
args18010.push((arguments[i__6153__auto___18014]));

var G__18015 = (i__6153__auto___18014 + (1));
i__6153__auto___18014 = G__18015;
continue;
} else {
}
break;
}

var G__18012 = args18010.length;
switch (G__18012) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18010.length)].join('')));

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
var args18017 = [];
var len__6152__auto___18020 = arguments.length;
var i__6153__auto___18021 = (0);
while(true){
if((i__6153__auto___18021 < len__6152__auto___18020)){
args18017.push((arguments[i__6153__auto___18021]));

var G__18022 = (i__6153__auto___18021 + (1));
i__6153__auto___18021 = G__18022;
continue;
} else {
}
break;
}

var G__18019 = args18017.length;
switch (G__18019) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18017.length)].join('')));

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
var args18024 = [];
var len__6152__auto___18077 = arguments.length;
var i__6153__auto___18078 = (0);
while(true){
if((i__6153__auto___18078 < len__6152__auto___18077)){
args18024.push((arguments[i__6153__auto___18078]));

var G__18079 = (i__6153__auto___18078 + (1));
i__6153__auto___18078 = G__18079;
continue;
} else {
}
break;
}

var G__18026 = args18024.length;
switch (G__18026) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18024.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10260__auto___18081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___18081,tc,fc){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___18081,tc,fc){
return (function (state_18052){
var state_val_18053 = (state_18052[(1)]);
if((state_val_18053 === (7))){
var inst_18048 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18054_18082 = state_18052__$1;
(statearr_18054_18082[(2)] = inst_18048);

(statearr_18054_18082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (1))){
var state_18052__$1 = state_18052;
var statearr_18055_18083 = state_18052__$1;
(statearr_18055_18083[(2)] = null);

(statearr_18055_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (4))){
var inst_18029 = (state_18052[(7)]);
var inst_18029__$1 = (state_18052[(2)]);
var inst_18030 = (inst_18029__$1 == null);
var state_18052__$1 = (function (){var statearr_18056 = state_18052;
(statearr_18056[(7)] = inst_18029__$1);

return statearr_18056;
})();
if(cljs.core.truth_(inst_18030)){
var statearr_18057_18084 = state_18052__$1;
(statearr_18057_18084[(1)] = (5));

} else {
var statearr_18058_18085 = state_18052__$1;
(statearr_18058_18085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (13))){
var state_18052__$1 = state_18052;
var statearr_18059_18086 = state_18052__$1;
(statearr_18059_18086[(2)] = null);

(statearr_18059_18086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (6))){
var inst_18029 = (state_18052[(7)]);
var inst_18035 = p.call(null,inst_18029);
var state_18052__$1 = state_18052;
if(cljs.core.truth_(inst_18035)){
var statearr_18060_18087 = state_18052__$1;
(statearr_18060_18087[(1)] = (9));

} else {
var statearr_18061_18088 = state_18052__$1;
(statearr_18061_18088[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (3))){
var inst_18050 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18052__$1,inst_18050);
} else {
if((state_val_18053 === (12))){
var state_18052__$1 = state_18052;
var statearr_18062_18089 = state_18052__$1;
(statearr_18062_18089[(2)] = null);

(statearr_18062_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (2))){
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18052__$1,(4),ch);
} else {
if((state_val_18053 === (11))){
var inst_18029 = (state_18052[(7)]);
var inst_18039 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18052__$1,(8),inst_18039,inst_18029);
} else {
if((state_val_18053 === (9))){
var state_18052__$1 = state_18052;
var statearr_18063_18090 = state_18052__$1;
(statearr_18063_18090[(2)] = tc);

(statearr_18063_18090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (5))){
var inst_18032 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18033 = cljs.core.async.close_BANG_.call(null,fc);
var state_18052__$1 = (function (){var statearr_18064 = state_18052;
(statearr_18064[(8)] = inst_18032);

return statearr_18064;
})();
var statearr_18065_18091 = state_18052__$1;
(statearr_18065_18091[(2)] = inst_18033);

(statearr_18065_18091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (14))){
var inst_18046 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18066_18092 = state_18052__$1;
(statearr_18066_18092[(2)] = inst_18046);

(statearr_18066_18092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (10))){
var state_18052__$1 = state_18052;
var statearr_18067_18093 = state_18052__$1;
(statearr_18067_18093[(2)] = fc);

(statearr_18067_18093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (8))){
var inst_18041 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
if(cljs.core.truth_(inst_18041)){
var statearr_18068_18094 = state_18052__$1;
(statearr_18068_18094[(1)] = (12));

} else {
var statearr_18069_18095 = state_18052__$1;
(statearr_18069_18095[(1)] = (13));

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
});})(c__10260__auto___18081,tc,fc))
;
return ((function (switch__10195__auto__,c__10260__auto___18081,tc,fc){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_18073 = [null,null,null,null,null,null,null,null,null];
(statearr_18073[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_18073[(1)] = (1));

return statearr_18073;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_18052){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18074){if((e18074 instanceof Object)){
var ex__10199__auto__ = e18074;
var statearr_18075_18096 = state_18052;
(statearr_18075_18096[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18097 = state_18052;
state_18052 = G__18097;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_18052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___18081,tc,fc))
})();
var state__10262__auto__ = (function (){var statearr_18076 = f__10261__auto__.call(null);
(statearr_18076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___18081);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___18081,tc,fc))
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
return (function (state_18144){
var state_val_18145 = (state_18144[(1)]);
if((state_val_18145 === (1))){
var inst_18130 = init;
var state_18144__$1 = (function (){var statearr_18146 = state_18144;
(statearr_18146[(7)] = inst_18130);

return statearr_18146;
})();
var statearr_18147_18162 = state_18144__$1;
(statearr_18147_18162[(2)] = null);

(statearr_18147_18162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (2))){
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18144__$1,(4),ch);
} else {
if((state_val_18145 === (3))){
var inst_18142 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18144__$1,inst_18142);
} else {
if((state_val_18145 === (4))){
var inst_18133 = (state_18144[(8)]);
var inst_18133__$1 = (state_18144[(2)]);
var inst_18134 = (inst_18133__$1 == null);
var state_18144__$1 = (function (){var statearr_18148 = state_18144;
(statearr_18148[(8)] = inst_18133__$1);

return statearr_18148;
})();
if(cljs.core.truth_(inst_18134)){
var statearr_18149_18163 = state_18144__$1;
(statearr_18149_18163[(1)] = (5));

} else {
var statearr_18150_18164 = state_18144__$1;
(statearr_18150_18164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (5))){
var inst_18130 = (state_18144[(7)]);
var state_18144__$1 = state_18144;
var statearr_18151_18165 = state_18144__$1;
(statearr_18151_18165[(2)] = inst_18130);

(statearr_18151_18165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (6))){
var inst_18133 = (state_18144[(8)]);
var inst_18130 = (state_18144[(7)]);
var inst_18137 = f.call(null,inst_18130,inst_18133);
var inst_18130__$1 = inst_18137;
var state_18144__$1 = (function (){var statearr_18152 = state_18144;
(statearr_18152[(7)] = inst_18130__$1);

return statearr_18152;
})();
var statearr_18153_18166 = state_18144__$1;
(statearr_18153_18166[(2)] = null);

(statearr_18153_18166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18145 === (7))){
var inst_18140 = (state_18144[(2)]);
var state_18144__$1 = state_18144;
var statearr_18154_18167 = state_18144__$1;
(statearr_18154_18167[(2)] = inst_18140);

(statearr_18154_18167[(1)] = (3));


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
var statearr_18158 = [null,null,null,null,null,null,null,null,null];
(statearr_18158[(0)] = cljs$core$async$reduce_$_state_machine__10196__auto__);

(statearr_18158[(1)] = (1));

return statearr_18158;
});
var cljs$core$async$reduce_$_state_machine__10196__auto____1 = (function (state_18144){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18159){if((e18159 instanceof Object)){
var ex__10199__auto__ = e18159;
var statearr_18160_18168 = state_18144;
(statearr_18160_18168[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18169 = state_18144;
state_18144 = G__18169;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10196__auto__ = function(state_18144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10196__auto____1.call(this,state_18144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10196__auto____0;
cljs$core$async$reduce_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10196__auto____1;
return cljs$core$async$reduce_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_18161 = f__10261__auto__.call(null);
(statearr_18161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_18161;
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
var args18170 = [];
var len__6152__auto___18222 = arguments.length;
var i__6153__auto___18223 = (0);
while(true){
if((i__6153__auto___18223 < len__6152__auto___18222)){
args18170.push((arguments[i__6153__auto___18223]));

var G__18224 = (i__6153__auto___18223 + (1));
i__6153__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var G__18172 = args18170.length;
switch (G__18172) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18170.length)].join('')));

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
return (function (state_18197){
var state_val_18198 = (state_18197[(1)]);
if((state_val_18198 === (7))){
var inst_18179 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18199_18226 = state_18197__$1;
(statearr_18199_18226[(2)] = inst_18179);

(statearr_18199_18226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (1))){
var inst_18173 = cljs.core.seq.call(null,coll);
var inst_18174 = inst_18173;
var state_18197__$1 = (function (){var statearr_18200 = state_18197;
(statearr_18200[(7)] = inst_18174);

return statearr_18200;
})();
var statearr_18201_18227 = state_18197__$1;
(statearr_18201_18227[(2)] = null);

(statearr_18201_18227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (4))){
var inst_18174 = (state_18197[(7)]);
var inst_18177 = cljs.core.first.call(null,inst_18174);
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18197__$1,(7),ch,inst_18177);
} else {
if((state_val_18198 === (13))){
var inst_18191 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18202_18228 = state_18197__$1;
(statearr_18202_18228[(2)] = inst_18191);

(statearr_18202_18228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (6))){
var inst_18182 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
if(cljs.core.truth_(inst_18182)){
var statearr_18203_18229 = state_18197__$1;
(statearr_18203_18229[(1)] = (8));

} else {
var statearr_18204_18230 = state_18197__$1;
(statearr_18204_18230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (3))){
var inst_18195 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18197__$1,inst_18195);
} else {
if((state_val_18198 === (12))){
var state_18197__$1 = state_18197;
var statearr_18205_18231 = state_18197__$1;
(statearr_18205_18231[(2)] = null);

(statearr_18205_18231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (2))){
var inst_18174 = (state_18197[(7)]);
var state_18197__$1 = state_18197;
if(cljs.core.truth_(inst_18174)){
var statearr_18206_18232 = state_18197__$1;
(statearr_18206_18232[(1)] = (4));

} else {
var statearr_18207_18233 = state_18197__$1;
(statearr_18207_18233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (11))){
var inst_18188 = cljs.core.async.close_BANG_.call(null,ch);
var state_18197__$1 = state_18197;
var statearr_18208_18234 = state_18197__$1;
(statearr_18208_18234[(2)] = inst_18188);

(statearr_18208_18234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (9))){
var state_18197__$1 = state_18197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18209_18235 = state_18197__$1;
(statearr_18209_18235[(1)] = (11));

} else {
var statearr_18210_18236 = state_18197__$1;
(statearr_18210_18236[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (5))){
var inst_18174 = (state_18197[(7)]);
var state_18197__$1 = state_18197;
var statearr_18211_18237 = state_18197__$1;
(statearr_18211_18237[(2)] = inst_18174);

(statearr_18211_18237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (10))){
var inst_18193 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18212_18238 = state_18197__$1;
(statearr_18212_18238[(2)] = inst_18193);

(statearr_18212_18238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (8))){
var inst_18174 = (state_18197[(7)]);
var inst_18184 = cljs.core.next.call(null,inst_18174);
var inst_18174__$1 = inst_18184;
var state_18197__$1 = (function (){var statearr_18213 = state_18197;
(statearr_18213[(7)] = inst_18174__$1);

return statearr_18213;
})();
var statearr_18214_18239 = state_18197__$1;
(statearr_18214_18239[(2)] = null);

(statearr_18214_18239[(1)] = (2));


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
var statearr_18218 = [null,null,null,null,null,null,null,null];
(statearr_18218[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_18218[(1)] = (1));

return statearr_18218;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_18197){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18219){if((e18219 instanceof Object)){
var ex__10199__auto__ = e18219;
var statearr_18220_18240 = state_18197;
(statearr_18220_18240[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18241 = state_18197;
state_18197 = G__18241;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_18197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_18197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_18221 = f__10261__auto__.call(null);
(statearr_18221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_18221;
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
if(typeof cljs.core.async.t_cljs$core$async18463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18463 = (function (mult,ch,cs,meta18464){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18464 = meta18464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18465,meta18464__$1){
var self__ = this;
var _18465__$1 = this;
return (new cljs.core.async.t_cljs$core$async18463(self__.mult,self__.ch,self__.cs,meta18464__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18465){
var self__ = this;
var _18465__$1 = this;
return self__.meta18464;
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18464","meta18464",4661836,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18463";

cljs.core.async.t_cljs$core$async18463.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18463");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18463 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18463(mult__$1,ch__$1,cs__$1,meta18464){
return (new cljs.core.async.t_cljs$core$async18463(mult__$1,ch__$1,cs__$1,meta18464));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18463(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10260__auto___18684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___18684,cs,m,dchan,dctr,done){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___18684,cs,m,dchan,dctr,done){
return (function (state_18596){
var state_val_18597 = (state_18596[(1)]);
if((state_val_18597 === (7))){
var inst_18592 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18598_18685 = state_18596__$1;
(statearr_18598_18685[(2)] = inst_18592);

(statearr_18598_18685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (20))){
var inst_18497 = (state_18596[(7)]);
var inst_18507 = cljs.core.first.call(null,inst_18497);
var inst_18508 = cljs.core.nth.call(null,inst_18507,(0),null);
var inst_18509 = cljs.core.nth.call(null,inst_18507,(1),null);
var state_18596__$1 = (function (){var statearr_18599 = state_18596;
(statearr_18599[(8)] = inst_18508);

return statearr_18599;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18600_18686 = state_18596__$1;
(statearr_18600_18686[(1)] = (22));

} else {
var statearr_18601_18687 = state_18596__$1;
(statearr_18601_18687[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (27))){
var inst_18537 = (state_18596[(9)]);
var inst_18539 = (state_18596[(10)]);
var inst_18468 = (state_18596[(11)]);
var inst_18544 = (state_18596[(12)]);
var inst_18544__$1 = cljs.core._nth.call(null,inst_18537,inst_18539);
var inst_18545 = cljs.core.async.put_BANG_.call(null,inst_18544__$1,inst_18468,done);
var state_18596__$1 = (function (){var statearr_18602 = state_18596;
(statearr_18602[(12)] = inst_18544__$1);

return statearr_18602;
})();
if(cljs.core.truth_(inst_18545)){
var statearr_18603_18688 = state_18596__$1;
(statearr_18603_18688[(1)] = (30));

} else {
var statearr_18604_18689 = state_18596__$1;
(statearr_18604_18689[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (1))){
var state_18596__$1 = state_18596;
var statearr_18605_18690 = state_18596__$1;
(statearr_18605_18690[(2)] = null);

(statearr_18605_18690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (24))){
var inst_18497 = (state_18596[(7)]);
var inst_18514 = (state_18596[(2)]);
var inst_18515 = cljs.core.next.call(null,inst_18497);
var inst_18477 = inst_18515;
var inst_18478 = null;
var inst_18479 = (0);
var inst_18480 = (0);
var state_18596__$1 = (function (){var statearr_18606 = state_18596;
(statearr_18606[(13)] = inst_18477);

(statearr_18606[(14)] = inst_18514);

(statearr_18606[(15)] = inst_18478);

(statearr_18606[(16)] = inst_18479);

(statearr_18606[(17)] = inst_18480);

return statearr_18606;
})();
var statearr_18607_18691 = state_18596__$1;
(statearr_18607_18691[(2)] = null);

(statearr_18607_18691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (39))){
var state_18596__$1 = state_18596;
var statearr_18611_18692 = state_18596__$1;
(statearr_18611_18692[(2)] = null);

(statearr_18611_18692[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (4))){
var inst_18468 = (state_18596[(11)]);
var inst_18468__$1 = (state_18596[(2)]);
var inst_18469 = (inst_18468__$1 == null);
var state_18596__$1 = (function (){var statearr_18612 = state_18596;
(statearr_18612[(11)] = inst_18468__$1);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18469)){
var statearr_18613_18693 = state_18596__$1;
(statearr_18613_18693[(1)] = (5));

} else {
var statearr_18614_18694 = state_18596__$1;
(statearr_18614_18694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (15))){
var inst_18477 = (state_18596[(13)]);
var inst_18478 = (state_18596[(15)]);
var inst_18479 = (state_18596[(16)]);
var inst_18480 = (state_18596[(17)]);
var inst_18493 = (state_18596[(2)]);
var inst_18494 = (inst_18480 + (1));
var tmp18608 = inst_18477;
var tmp18609 = inst_18478;
var tmp18610 = inst_18479;
var inst_18477__$1 = tmp18608;
var inst_18478__$1 = tmp18609;
var inst_18479__$1 = tmp18610;
var inst_18480__$1 = inst_18494;
var state_18596__$1 = (function (){var statearr_18615 = state_18596;
(statearr_18615[(18)] = inst_18493);

(statearr_18615[(13)] = inst_18477__$1);

(statearr_18615[(15)] = inst_18478__$1);

(statearr_18615[(16)] = inst_18479__$1);

(statearr_18615[(17)] = inst_18480__$1);

return statearr_18615;
})();
var statearr_18616_18695 = state_18596__$1;
(statearr_18616_18695[(2)] = null);

(statearr_18616_18695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (21))){
var inst_18518 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18620_18696 = state_18596__$1;
(statearr_18620_18696[(2)] = inst_18518);

(statearr_18620_18696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (31))){
var inst_18544 = (state_18596[(12)]);
var inst_18548 = done.call(null,null);
var inst_18549 = cljs.core.async.untap_STAR_.call(null,m,inst_18544);
var state_18596__$1 = (function (){var statearr_18621 = state_18596;
(statearr_18621[(19)] = inst_18548);

return statearr_18621;
})();
var statearr_18622_18697 = state_18596__$1;
(statearr_18622_18697[(2)] = inst_18549);

(statearr_18622_18697[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (32))){
var inst_18538 = (state_18596[(20)]);
var inst_18537 = (state_18596[(9)]);
var inst_18536 = (state_18596[(21)]);
var inst_18539 = (state_18596[(10)]);
var inst_18551 = (state_18596[(2)]);
var inst_18552 = (inst_18539 + (1));
var tmp18617 = inst_18538;
var tmp18618 = inst_18537;
var tmp18619 = inst_18536;
var inst_18536__$1 = tmp18619;
var inst_18537__$1 = tmp18618;
var inst_18538__$1 = tmp18617;
var inst_18539__$1 = inst_18552;
var state_18596__$1 = (function (){var statearr_18623 = state_18596;
(statearr_18623[(20)] = inst_18538__$1);

(statearr_18623[(9)] = inst_18537__$1);

(statearr_18623[(21)] = inst_18536__$1);

(statearr_18623[(22)] = inst_18551);

(statearr_18623[(10)] = inst_18539__$1);

return statearr_18623;
})();
var statearr_18624_18698 = state_18596__$1;
(statearr_18624_18698[(2)] = null);

(statearr_18624_18698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (40))){
var inst_18564 = (state_18596[(23)]);
var inst_18568 = done.call(null,null);
var inst_18569 = cljs.core.async.untap_STAR_.call(null,m,inst_18564);
var state_18596__$1 = (function (){var statearr_18625 = state_18596;
(statearr_18625[(24)] = inst_18568);

return statearr_18625;
})();
var statearr_18626_18699 = state_18596__$1;
(statearr_18626_18699[(2)] = inst_18569);

(statearr_18626_18699[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (33))){
var inst_18555 = (state_18596[(25)]);
var inst_18557 = cljs.core.chunked_seq_QMARK_.call(null,inst_18555);
var state_18596__$1 = state_18596;
if(inst_18557){
var statearr_18627_18700 = state_18596__$1;
(statearr_18627_18700[(1)] = (36));

} else {
var statearr_18628_18701 = state_18596__$1;
(statearr_18628_18701[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (13))){
var inst_18487 = (state_18596[(26)]);
var inst_18490 = cljs.core.async.close_BANG_.call(null,inst_18487);
var state_18596__$1 = state_18596;
var statearr_18629_18702 = state_18596__$1;
(statearr_18629_18702[(2)] = inst_18490);

(statearr_18629_18702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (22))){
var inst_18508 = (state_18596[(8)]);
var inst_18511 = cljs.core.async.close_BANG_.call(null,inst_18508);
var state_18596__$1 = state_18596;
var statearr_18630_18703 = state_18596__$1;
(statearr_18630_18703[(2)] = inst_18511);

(statearr_18630_18703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (36))){
var inst_18555 = (state_18596[(25)]);
var inst_18559 = cljs.core.chunk_first.call(null,inst_18555);
var inst_18560 = cljs.core.chunk_rest.call(null,inst_18555);
var inst_18561 = cljs.core.count.call(null,inst_18559);
var inst_18536 = inst_18560;
var inst_18537 = inst_18559;
var inst_18538 = inst_18561;
var inst_18539 = (0);
var state_18596__$1 = (function (){var statearr_18631 = state_18596;
(statearr_18631[(20)] = inst_18538);

(statearr_18631[(9)] = inst_18537);

(statearr_18631[(21)] = inst_18536);

(statearr_18631[(10)] = inst_18539);

return statearr_18631;
})();
var statearr_18632_18704 = state_18596__$1;
(statearr_18632_18704[(2)] = null);

(statearr_18632_18704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (41))){
var inst_18555 = (state_18596[(25)]);
var inst_18571 = (state_18596[(2)]);
var inst_18572 = cljs.core.next.call(null,inst_18555);
var inst_18536 = inst_18572;
var inst_18537 = null;
var inst_18538 = (0);
var inst_18539 = (0);
var state_18596__$1 = (function (){var statearr_18633 = state_18596;
(statearr_18633[(20)] = inst_18538);

(statearr_18633[(9)] = inst_18537);

(statearr_18633[(27)] = inst_18571);

(statearr_18633[(21)] = inst_18536);

(statearr_18633[(10)] = inst_18539);

return statearr_18633;
})();
var statearr_18634_18705 = state_18596__$1;
(statearr_18634_18705[(2)] = null);

(statearr_18634_18705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (43))){
var state_18596__$1 = state_18596;
var statearr_18635_18706 = state_18596__$1;
(statearr_18635_18706[(2)] = null);

(statearr_18635_18706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (29))){
var inst_18580 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18636_18707 = state_18596__$1;
(statearr_18636_18707[(2)] = inst_18580);

(statearr_18636_18707[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (44))){
var inst_18589 = (state_18596[(2)]);
var state_18596__$1 = (function (){var statearr_18637 = state_18596;
(statearr_18637[(28)] = inst_18589);

return statearr_18637;
})();
var statearr_18638_18708 = state_18596__$1;
(statearr_18638_18708[(2)] = null);

(statearr_18638_18708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (6))){
var inst_18528 = (state_18596[(29)]);
var inst_18527 = cljs.core.deref.call(null,cs);
var inst_18528__$1 = cljs.core.keys.call(null,inst_18527);
var inst_18529 = cljs.core.count.call(null,inst_18528__$1);
var inst_18530 = cljs.core.reset_BANG_.call(null,dctr,inst_18529);
var inst_18535 = cljs.core.seq.call(null,inst_18528__$1);
var inst_18536 = inst_18535;
var inst_18537 = null;
var inst_18538 = (0);
var inst_18539 = (0);
var state_18596__$1 = (function (){var statearr_18639 = state_18596;
(statearr_18639[(30)] = inst_18530);

(statearr_18639[(20)] = inst_18538);

(statearr_18639[(9)] = inst_18537);

(statearr_18639[(21)] = inst_18536);

(statearr_18639[(10)] = inst_18539);

(statearr_18639[(29)] = inst_18528__$1);

return statearr_18639;
})();
var statearr_18640_18709 = state_18596__$1;
(statearr_18640_18709[(2)] = null);

(statearr_18640_18709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (28))){
var inst_18536 = (state_18596[(21)]);
var inst_18555 = (state_18596[(25)]);
var inst_18555__$1 = cljs.core.seq.call(null,inst_18536);
var state_18596__$1 = (function (){var statearr_18641 = state_18596;
(statearr_18641[(25)] = inst_18555__$1);

return statearr_18641;
})();
if(inst_18555__$1){
var statearr_18642_18710 = state_18596__$1;
(statearr_18642_18710[(1)] = (33));

} else {
var statearr_18643_18711 = state_18596__$1;
(statearr_18643_18711[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (25))){
var inst_18538 = (state_18596[(20)]);
var inst_18539 = (state_18596[(10)]);
var inst_18541 = (inst_18539 < inst_18538);
var inst_18542 = inst_18541;
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18542)){
var statearr_18644_18712 = state_18596__$1;
(statearr_18644_18712[(1)] = (27));

} else {
var statearr_18645_18713 = state_18596__$1;
(statearr_18645_18713[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (34))){
var state_18596__$1 = state_18596;
var statearr_18646_18714 = state_18596__$1;
(statearr_18646_18714[(2)] = null);

(statearr_18646_18714[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (17))){
var state_18596__$1 = state_18596;
var statearr_18647_18715 = state_18596__$1;
(statearr_18647_18715[(2)] = null);

(statearr_18647_18715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (3))){
var inst_18594 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18596__$1,inst_18594);
} else {
if((state_val_18597 === (12))){
var inst_18523 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18648_18716 = state_18596__$1;
(statearr_18648_18716[(2)] = inst_18523);

(statearr_18648_18716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (2))){
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18596__$1,(4),ch);
} else {
if((state_val_18597 === (23))){
var state_18596__$1 = state_18596;
var statearr_18649_18717 = state_18596__$1;
(statearr_18649_18717[(2)] = null);

(statearr_18649_18717[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (35))){
var inst_18578 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18650_18718 = state_18596__$1;
(statearr_18650_18718[(2)] = inst_18578);

(statearr_18650_18718[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (19))){
var inst_18497 = (state_18596[(7)]);
var inst_18501 = cljs.core.chunk_first.call(null,inst_18497);
var inst_18502 = cljs.core.chunk_rest.call(null,inst_18497);
var inst_18503 = cljs.core.count.call(null,inst_18501);
var inst_18477 = inst_18502;
var inst_18478 = inst_18501;
var inst_18479 = inst_18503;
var inst_18480 = (0);
var state_18596__$1 = (function (){var statearr_18651 = state_18596;
(statearr_18651[(13)] = inst_18477);

(statearr_18651[(15)] = inst_18478);

(statearr_18651[(16)] = inst_18479);

(statearr_18651[(17)] = inst_18480);

return statearr_18651;
})();
var statearr_18652_18719 = state_18596__$1;
(statearr_18652_18719[(2)] = null);

(statearr_18652_18719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (11))){
var inst_18477 = (state_18596[(13)]);
var inst_18497 = (state_18596[(7)]);
var inst_18497__$1 = cljs.core.seq.call(null,inst_18477);
var state_18596__$1 = (function (){var statearr_18653 = state_18596;
(statearr_18653[(7)] = inst_18497__$1);

return statearr_18653;
})();
if(inst_18497__$1){
var statearr_18654_18720 = state_18596__$1;
(statearr_18654_18720[(1)] = (16));

} else {
var statearr_18655_18721 = state_18596__$1;
(statearr_18655_18721[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (9))){
var inst_18525 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18656_18722 = state_18596__$1;
(statearr_18656_18722[(2)] = inst_18525);

(statearr_18656_18722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (5))){
var inst_18475 = cljs.core.deref.call(null,cs);
var inst_18476 = cljs.core.seq.call(null,inst_18475);
var inst_18477 = inst_18476;
var inst_18478 = null;
var inst_18479 = (0);
var inst_18480 = (0);
var state_18596__$1 = (function (){var statearr_18657 = state_18596;
(statearr_18657[(13)] = inst_18477);

(statearr_18657[(15)] = inst_18478);

(statearr_18657[(16)] = inst_18479);

(statearr_18657[(17)] = inst_18480);

return statearr_18657;
})();
var statearr_18658_18723 = state_18596__$1;
(statearr_18658_18723[(2)] = null);

(statearr_18658_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (14))){
var state_18596__$1 = state_18596;
var statearr_18659_18724 = state_18596__$1;
(statearr_18659_18724[(2)] = null);

(statearr_18659_18724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (45))){
var inst_18586 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18660_18725 = state_18596__$1;
(statearr_18660_18725[(2)] = inst_18586);

(statearr_18660_18725[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (26))){
var inst_18528 = (state_18596[(29)]);
var inst_18582 = (state_18596[(2)]);
var inst_18583 = cljs.core.seq.call(null,inst_18528);
var state_18596__$1 = (function (){var statearr_18661 = state_18596;
(statearr_18661[(31)] = inst_18582);

return statearr_18661;
})();
if(inst_18583){
var statearr_18662_18726 = state_18596__$1;
(statearr_18662_18726[(1)] = (42));

} else {
var statearr_18663_18727 = state_18596__$1;
(statearr_18663_18727[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (16))){
var inst_18497 = (state_18596[(7)]);
var inst_18499 = cljs.core.chunked_seq_QMARK_.call(null,inst_18497);
var state_18596__$1 = state_18596;
if(inst_18499){
var statearr_18664_18728 = state_18596__$1;
(statearr_18664_18728[(1)] = (19));

} else {
var statearr_18665_18729 = state_18596__$1;
(statearr_18665_18729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (38))){
var inst_18575 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18666_18730 = state_18596__$1;
(statearr_18666_18730[(2)] = inst_18575);

(statearr_18666_18730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (30))){
var state_18596__$1 = state_18596;
var statearr_18667_18731 = state_18596__$1;
(statearr_18667_18731[(2)] = null);

(statearr_18667_18731[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (10))){
var inst_18478 = (state_18596[(15)]);
var inst_18480 = (state_18596[(17)]);
var inst_18486 = cljs.core._nth.call(null,inst_18478,inst_18480);
var inst_18487 = cljs.core.nth.call(null,inst_18486,(0),null);
var inst_18488 = cljs.core.nth.call(null,inst_18486,(1),null);
var state_18596__$1 = (function (){var statearr_18668 = state_18596;
(statearr_18668[(26)] = inst_18487);

return statearr_18668;
})();
if(cljs.core.truth_(inst_18488)){
var statearr_18669_18732 = state_18596__$1;
(statearr_18669_18732[(1)] = (13));

} else {
var statearr_18670_18733 = state_18596__$1;
(statearr_18670_18733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (18))){
var inst_18521 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18671_18734 = state_18596__$1;
(statearr_18671_18734[(2)] = inst_18521);

(statearr_18671_18734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (42))){
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18596__$1,(45),dchan);
} else {
if((state_val_18597 === (37))){
var inst_18564 = (state_18596[(23)]);
var inst_18468 = (state_18596[(11)]);
var inst_18555 = (state_18596[(25)]);
var inst_18564__$1 = cljs.core.first.call(null,inst_18555);
var inst_18565 = cljs.core.async.put_BANG_.call(null,inst_18564__$1,inst_18468,done);
var state_18596__$1 = (function (){var statearr_18672 = state_18596;
(statearr_18672[(23)] = inst_18564__$1);

return statearr_18672;
})();
if(cljs.core.truth_(inst_18565)){
var statearr_18673_18735 = state_18596__$1;
(statearr_18673_18735[(1)] = (39));

} else {
var statearr_18674_18736 = state_18596__$1;
(statearr_18674_18736[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18597 === (8))){
var inst_18479 = (state_18596[(16)]);
var inst_18480 = (state_18596[(17)]);
var inst_18482 = (inst_18480 < inst_18479);
var inst_18483 = inst_18482;
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18483)){
var statearr_18675_18737 = state_18596__$1;
(statearr_18675_18737[(1)] = (10));

} else {
var statearr_18676_18738 = state_18596__$1;
(statearr_18676_18738[(1)] = (11));

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
});})(c__10260__auto___18684,cs,m,dchan,dctr,done))
;
return ((function (switch__10195__auto__,c__10260__auto___18684,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10196__auto__ = null;
var cljs$core$async$mult_$_state_machine__10196__auto____0 = (function (){
var statearr_18680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18680[(0)] = cljs$core$async$mult_$_state_machine__10196__auto__);

(statearr_18680[(1)] = (1));

return statearr_18680;
});
var cljs$core$async$mult_$_state_machine__10196__auto____1 = (function (state_18596){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_18596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e18681){if((e18681 instanceof Object)){
var ex__10199__auto__ = e18681;
var statearr_18682_18739 = state_18596;
(statearr_18682_18739[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18740 = state_18596;
state_18596 = G__18740;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10196__auto__ = function(state_18596){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10196__auto____1.call(this,state_18596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10196__auto____0;
cljs$core$async$mult_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10196__auto____1;
return cljs$core$async$mult_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___18684,cs,m,dchan,dctr,done))
})();
var state__10262__auto__ = (function (){var statearr_18683 = f__10261__auto__.call(null);
(statearr_18683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___18684);

return statearr_18683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___18684,cs,m,dchan,dctr,done))
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
var args18741 = [];
var len__6152__auto___18744 = arguments.length;
var i__6153__auto___18745 = (0);
while(true){
if((i__6153__auto___18745 < len__6152__auto___18744)){
args18741.push((arguments[i__6153__auto___18745]));

var G__18746 = (i__6153__auto___18745 + (1));
i__6153__auto___18745 = G__18746;
continue;
} else {
}
break;
}

var G__18743 = args18741.length;
switch (G__18743) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18741.length)].join('')));

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
var len__6152__auto___18758 = arguments.length;
var i__6153__auto___18759 = (0);
while(true){
if((i__6153__auto___18759 < len__6152__auto___18758)){
args__6159__auto__.push((arguments[i__6153__auto___18759]));

var G__18760 = (i__6153__auto___18759 + (1));
i__6153__auto___18759 = G__18760;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18752){
var map__18753 = p__18752;
var map__18753__$1 = ((((!((map__18753 == null)))?((((map__18753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18753):map__18753);
var opts = map__18753__$1;
var statearr_18755_18761 = state;
(statearr_18755_18761[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18753,map__18753__$1,opts){
return (function (val){
var statearr_18756_18762 = state;
(statearr_18756_18762[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18753,map__18753__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18757_18763 = state;
(statearr_18757_18763[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18748){
var G__18749 = cljs.core.first.call(null,seq18748);
var seq18748__$1 = cljs.core.next.call(null,seq18748);
var G__18750 = cljs.core.first.call(null,seq18748__$1);
var seq18748__$2 = cljs.core.next.call(null,seq18748__$1);
var G__18751 = cljs.core.first.call(null,seq18748__$2);
var seq18748__$3 = cljs.core.next.call(null,seq18748__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18749,G__18750,G__18751,seq18748__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18927 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18928){
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
this.meta18928 = meta18928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18929,meta18928__$1){
var self__ = this;
var _18929__$1 = this;
return (new cljs.core.async.t_cljs$core$async18927(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18928__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18929){
var self__ = this;
var _18929__$1 = this;
return self__.meta18928;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18927.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18928","meta18928",698711978,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18927";

cljs.core.async.t_cljs$core$async18927.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18927");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18927 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18927(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18928){
return (new cljs.core.async.t_cljs$core$async18927(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18928));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18927(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10260__auto___19090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19027){
var state_val_19028 = (state_19027[(1)]);
if((state_val_19028 === (7))){
var inst_18945 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19029_19091 = state_19027__$1;
(statearr_19029_19091[(2)] = inst_18945);

(statearr_19029_19091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (20))){
var inst_18957 = (state_19027[(7)]);
var state_19027__$1 = state_19027;
var statearr_19030_19092 = state_19027__$1;
(statearr_19030_19092[(2)] = inst_18957);

(statearr_19030_19092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (27))){
var state_19027__$1 = state_19027;
var statearr_19031_19093 = state_19027__$1;
(statearr_19031_19093[(2)] = null);

(statearr_19031_19093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (1))){
var inst_18933 = (state_19027[(8)]);
var inst_18933__$1 = calc_state.call(null);
var inst_18935 = (inst_18933__$1 == null);
var inst_18936 = cljs.core.not.call(null,inst_18935);
var state_19027__$1 = (function (){var statearr_19032 = state_19027;
(statearr_19032[(8)] = inst_18933__$1);

return statearr_19032;
})();
if(inst_18936){
var statearr_19033_19094 = state_19027__$1;
(statearr_19033_19094[(1)] = (2));

} else {
var statearr_19034_19095 = state_19027__$1;
(statearr_19034_19095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (24))){
var inst_18987 = (state_19027[(9)]);
var inst_19001 = (state_19027[(10)]);
var inst_18980 = (state_19027[(11)]);
var inst_19001__$1 = inst_18980.call(null,inst_18987);
var state_19027__$1 = (function (){var statearr_19035 = state_19027;
(statearr_19035[(10)] = inst_19001__$1);

return statearr_19035;
})();
if(cljs.core.truth_(inst_19001__$1)){
var statearr_19036_19096 = state_19027__$1;
(statearr_19036_19096[(1)] = (29));

} else {
var statearr_19037_19097 = state_19027__$1;
(statearr_19037_19097[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (4))){
var inst_18948 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18948)){
var statearr_19038_19098 = state_19027__$1;
(statearr_19038_19098[(1)] = (8));

} else {
var statearr_19039_19099 = state_19027__$1;
(statearr_19039_19099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (15))){
var inst_18974 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18974)){
var statearr_19040_19100 = state_19027__$1;
(statearr_19040_19100[(1)] = (19));

} else {
var statearr_19041_19101 = state_19027__$1;
(statearr_19041_19101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (21))){
var inst_18979 = (state_19027[(12)]);
var inst_18979__$1 = (state_19027[(2)]);
var inst_18980 = cljs.core.get.call(null,inst_18979__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18981 = cljs.core.get.call(null,inst_18979__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18982 = cljs.core.get.call(null,inst_18979__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19027__$1 = (function (){var statearr_19042 = state_19027;
(statearr_19042[(13)] = inst_18981);

(statearr_19042[(11)] = inst_18980);

(statearr_19042[(12)] = inst_18979__$1);

return statearr_19042;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19027__$1,(22),inst_18982);
} else {
if((state_val_19028 === (31))){
var inst_19009 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_19009)){
var statearr_19043_19102 = state_19027__$1;
(statearr_19043_19102[(1)] = (32));

} else {
var statearr_19044_19103 = state_19027__$1;
(statearr_19044_19103[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (32))){
var inst_18986 = (state_19027[(14)]);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19027__$1,(35),out,inst_18986);
} else {
if((state_val_19028 === (33))){
var inst_18979 = (state_19027[(12)]);
var inst_18957 = inst_18979;
var state_19027__$1 = (function (){var statearr_19045 = state_19027;
(statearr_19045[(7)] = inst_18957);

return statearr_19045;
})();
var statearr_19046_19104 = state_19027__$1;
(statearr_19046_19104[(2)] = null);

(statearr_19046_19104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (13))){
var inst_18957 = (state_19027[(7)]);
var inst_18964 = inst_18957.cljs$lang$protocol_mask$partition0$;
var inst_18965 = (inst_18964 & (64));
var inst_18966 = inst_18957.cljs$core$ISeq$;
var inst_18967 = (inst_18965) || (inst_18966);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18967)){
var statearr_19047_19105 = state_19027__$1;
(statearr_19047_19105[(1)] = (16));

} else {
var statearr_19048_19106 = state_19027__$1;
(statearr_19048_19106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (22))){
var inst_18987 = (state_19027[(9)]);
var inst_18986 = (state_19027[(14)]);
var inst_18985 = (state_19027[(2)]);
var inst_18986__$1 = cljs.core.nth.call(null,inst_18985,(0),null);
var inst_18987__$1 = cljs.core.nth.call(null,inst_18985,(1),null);
var inst_18988 = (inst_18986__$1 == null);
var inst_18989 = cljs.core._EQ_.call(null,inst_18987__$1,change);
var inst_18990 = (inst_18988) || (inst_18989);
var state_19027__$1 = (function (){var statearr_19049 = state_19027;
(statearr_19049[(9)] = inst_18987__$1);

(statearr_19049[(14)] = inst_18986__$1);

return statearr_19049;
})();
if(cljs.core.truth_(inst_18990)){
var statearr_19050_19107 = state_19027__$1;
(statearr_19050_19107[(1)] = (23));

} else {
var statearr_19051_19108 = state_19027__$1;
(statearr_19051_19108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (36))){
var inst_18979 = (state_19027[(12)]);
var inst_18957 = inst_18979;
var state_19027__$1 = (function (){var statearr_19052 = state_19027;
(statearr_19052[(7)] = inst_18957);

return statearr_19052;
})();
var statearr_19053_19109 = state_19027__$1;
(statearr_19053_19109[(2)] = null);

(statearr_19053_19109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (29))){
var inst_19001 = (state_19027[(10)]);
var state_19027__$1 = state_19027;
var statearr_19054_19110 = state_19027__$1;
(statearr_19054_19110[(2)] = inst_19001);

(statearr_19054_19110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (6))){
var state_19027__$1 = state_19027;
var statearr_19055_19111 = state_19027__$1;
(statearr_19055_19111[(2)] = false);

(statearr_19055_19111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (28))){
var inst_18997 = (state_19027[(2)]);
var inst_18998 = calc_state.call(null);
var inst_18957 = inst_18998;
var state_19027__$1 = (function (){var statearr_19056 = state_19027;
(statearr_19056[(7)] = inst_18957);

(statearr_19056[(15)] = inst_18997);

return statearr_19056;
})();
var statearr_19057_19112 = state_19027__$1;
(statearr_19057_19112[(2)] = null);

(statearr_19057_19112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (25))){
var inst_19023 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19058_19113 = state_19027__$1;
(statearr_19058_19113[(2)] = inst_19023);

(statearr_19058_19113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (34))){
var inst_19021 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19059_19114 = state_19027__$1;
(statearr_19059_19114[(2)] = inst_19021);

(statearr_19059_19114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (17))){
var state_19027__$1 = state_19027;
var statearr_19060_19115 = state_19027__$1;
(statearr_19060_19115[(2)] = false);

(statearr_19060_19115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (3))){
var state_19027__$1 = state_19027;
var statearr_19061_19116 = state_19027__$1;
(statearr_19061_19116[(2)] = false);

(statearr_19061_19116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (12))){
var inst_19025 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19027__$1,inst_19025);
} else {
if((state_val_19028 === (2))){
var inst_18933 = (state_19027[(8)]);
var inst_18938 = inst_18933.cljs$lang$protocol_mask$partition0$;
var inst_18939 = (inst_18938 & (64));
var inst_18940 = inst_18933.cljs$core$ISeq$;
var inst_18941 = (inst_18939) || (inst_18940);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18941)){
var statearr_19062_19117 = state_19027__$1;
(statearr_19062_19117[(1)] = (5));

} else {
var statearr_19063_19118 = state_19027__$1;
(statearr_19063_19118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (23))){
var inst_18986 = (state_19027[(14)]);
var inst_18992 = (inst_18986 == null);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_18992)){
var statearr_19064_19119 = state_19027__$1;
(statearr_19064_19119[(1)] = (26));

} else {
var statearr_19065_19120 = state_19027__$1;
(statearr_19065_19120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (35))){
var inst_19012 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_19012)){
var statearr_19066_19121 = state_19027__$1;
(statearr_19066_19121[(1)] = (36));

} else {
var statearr_19067_19122 = state_19027__$1;
(statearr_19067_19122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (19))){
var inst_18957 = (state_19027[(7)]);
var inst_18976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18957);
var state_19027__$1 = state_19027;
var statearr_19068_19123 = state_19027__$1;
(statearr_19068_19123[(2)] = inst_18976);

(statearr_19068_19123[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (11))){
var inst_18957 = (state_19027[(7)]);
var inst_18961 = (inst_18957 == null);
var inst_18962 = cljs.core.not.call(null,inst_18961);
var state_19027__$1 = state_19027;
if(inst_18962){
var statearr_19069_19124 = state_19027__$1;
(statearr_19069_19124[(1)] = (13));

} else {
var statearr_19070_19125 = state_19027__$1;
(statearr_19070_19125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (9))){
var inst_18933 = (state_19027[(8)]);
var state_19027__$1 = state_19027;
var statearr_19071_19126 = state_19027__$1;
(statearr_19071_19126[(2)] = inst_18933);

(statearr_19071_19126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (5))){
var state_19027__$1 = state_19027;
var statearr_19072_19127 = state_19027__$1;
(statearr_19072_19127[(2)] = true);

(statearr_19072_19127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (14))){
var state_19027__$1 = state_19027;
var statearr_19073_19128 = state_19027__$1;
(statearr_19073_19128[(2)] = false);

(statearr_19073_19128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (26))){
var inst_18987 = (state_19027[(9)]);
var inst_18994 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18987);
var state_19027__$1 = state_19027;
var statearr_19074_19129 = state_19027__$1;
(statearr_19074_19129[(2)] = inst_18994);

(statearr_19074_19129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (16))){
var state_19027__$1 = state_19027;
var statearr_19075_19130 = state_19027__$1;
(statearr_19075_19130[(2)] = true);

(statearr_19075_19130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (38))){
var inst_19017 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19076_19131 = state_19027__$1;
(statearr_19076_19131[(2)] = inst_19017);

(statearr_19076_19131[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (30))){
var inst_18981 = (state_19027[(13)]);
var inst_18987 = (state_19027[(9)]);
var inst_18980 = (state_19027[(11)]);
var inst_19004 = cljs.core.empty_QMARK_.call(null,inst_18980);
var inst_19005 = inst_18981.call(null,inst_18987);
var inst_19006 = cljs.core.not.call(null,inst_19005);
var inst_19007 = (inst_19004) && (inst_19006);
var state_19027__$1 = state_19027;
var statearr_19077_19132 = state_19027__$1;
(statearr_19077_19132[(2)] = inst_19007);

(statearr_19077_19132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (10))){
var inst_18933 = (state_19027[(8)]);
var inst_18953 = (state_19027[(2)]);
var inst_18954 = cljs.core.get.call(null,inst_18953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18955 = cljs.core.get.call(null,inst_18953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18956 = cljs.core.get.call(null,inst_18953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18957 = inst_18933;
var state_19027__$1 = (function (){var statearr_19078 = state_19027;
(statearr_19078[(16)] = inst_18955);

(statearr_19078[(7)] = inst_18957);

(statearr_19078[(17)] = inst_18956);

(statearr_19078[(18)] = inst_18954);

return statearr_19078;
})();
var statearr_19079_19133 = state_19027__$1;
(statearr_19079_19133[(2)] = null);

(statearr_19079_19133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (18))){
var inst_18971 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19080_19134 = state_19027__$1;
(statearr_19080_19134[(2)] = inst_18971);

(statearr_19080_19134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (37))){
var state_19027__$1 = state_19027;
var statearr_19081_19135 = state_19027__$1;
(statearr_19081_19135[(2)] = null);

(statearr_19081_19135[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19028 === (8))){
var inst_18933 = (state_19027[(8)]);
var inst_18950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18933);
var state_19027__$1 = state_19027;
var statearr_19082_19136 = state_19027__$1;
(statearr_19082_19136[(2)] = inst_18950);

(statearr_19082_19136[(1)] = (10));


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
});})(c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10195__auto__,c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10196__auto__ = null;
var cljs$core$async$mix_$_state_machine__10196__auto____0 = (function (){
var statearr_19086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19086[(0)] = cljs$core$async$mix_$_state_machine__10196__auto__);

(statearr_19086[(1)] = (1));

return statearr_19086;
});
var cljs$core$async$mix_$_state_machine__10196__auto____1 = (function (state_19027){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19087){if((e19087 instanceof Object)){
var ex__10199__auto__ = e19087;
var statearr_19088_19137 = state_19027;
(statearr_19088_19137[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19138 = state_19027;
state_19027 = G__19138;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10196__auto__ = function(state_19027){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10196__auto____1.call(this,state_19027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10196__auto____0;
cljs$core$async$mix_$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10196__auto____1;
return cljs$core$async$mix_$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10262__auto__ = (function (){var statearr_19089 = f__10261__auto__.call(null);
(statearr_19089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19090);

return statearr_19089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19139 = [];
var len__6152__auto___19142 = arguments.length;
var i__6153__auto___19143 = (0);
while(true){
if((i__6153__auto___19143 < len__6152__auto___19142)){
args19139.push((arguments[i__6153__auto___19143]));

var G__19144 = (i__6153__auto___19143 + (1));
i__6153__auto___19143 = G__19144;
continue;
} else {
}
break;
}

var G__19141 = args19139.length;
switch (G__19141) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19139.length)].join('')));

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
var args19147 = [];
var len__6152__auto___19272 = arguments.length;
var i__6153__auto___19273 = (0);
while(true){
if((i__6153__auto___19273 < len__6152__auto___19272)){
args19147.push((arguments[i__6153__auto___19273]));

var G__19274 = (i__6153__auto___19273 + (1));
i__6153__auto___19273 = G__19274;
continue;
} else {
}
break;
}

var G__19149 = args19147.length;
switch (G__19149) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19147.length)].join('')));

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
return (function (p1__19146_SHARP_){
if(cljs.core.truth_(p1__19146_SHARP_.call(null,topic))){
return p1__19146_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19146_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19150 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19151){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19151 = meta19151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19152,meta19151__$1){
var self__ = this;
var _19152__$1 = this;
return (new cljs.core.async.t_cljs$core$async19150(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19151__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19152){
var self__ = this;
var _19152__$1 = this;
return self__.meta19151;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19151","meta19151",-274320074,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19150";

cljs.core.async.t_cljs$core$async19150.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19150");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19150 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19150(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19151){
return (new cljs.core.async.t_cljs$core$async19150(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19151));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19150(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10260__auto___19276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19276,mults,ensure_mult,p){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19276,mults,ensure_mult,p){
return (function (state_19224){
var state_val_19225 = (state_19224[(1)]);
if((state_val_19225 === (7))){
var inst_19220 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19226_19277 = state_19224__$1;
(statearr_19226_19277[(2)] = inst_19220);

(statearr_19226_19277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (20))){
var state_19224__$1 = state_19224;
var statearr_19227_19278 = state_19224__$1;
(statearr_19227_19278[(2)] = null);

(statearr_19227_19278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (1))){
var state_19224__$1 = state_19224;
var statearr_19228_19279 = state_19224__$1;
(statearr_19228_19279[(2)] = null);

(statearr_19228_19279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (24))){
var inst_19203 = (state_19224[(7)]);
var inst_19212 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19203);
var state_19224__$1 = state_19224;
var statearr_19229_19280 = state_19224__$1;
(statearr_19229_19280[(2)] = inst_19212);

(statearr_19229_19280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (4))){
var inst_19155 = (state_19224[(8)]);
var inst_19155__$1 = (state_19224[(2)]);
var inst_19156 = (inst_19155__$1 == null);
var state_19224__$1 = (function (){var statearr_19230 = state_19224;
(statearr_19230[(8)] = inst_19155__$1);

return statearr_19230;
})();
if(cljs.core.truth_(inst_19156)){
var statearr_19231_19281 = state_19224__$1;
(statearr_19231_19281[(1)] = (5));

} else {
var statearr_19232_19282 = state_19224__$1;
(statearr_19232_19282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (15))){
var inst_19197 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19233_19283 = state_19224__$1;
(statearr_19233_19283[(2)] = inst_19197);

(statearr_19233_19283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (21))){
var inst_19217 = (state_19224[(2)]);
var state_19224__$1 = (function (){var statearr_19234 = state_19224;
(statearr_19234[(9)] = inst_19217);

return statearr_19234;
})();
var statearr_19235_19284 = state_19224__$1;
(statearr_19235_19284[(2)] = null);

(statearr_19235_19284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (13))){
var inst_19179 = (state_19224[(10)]);
var inst_19181 = cljs.core.chunked_seq_QMARK_.call(null,inst_19179);
var state_19224__$1 = state_19224;
if(inst_19181){
var statearr_19236_19285 = state_19224__$1;
(statearr_19236_19285[(1)] = (16));

} else {
var statearr_19237_19286 = state_19224__$1;
(statearr_19237_19286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (22))){
var inst_19209 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
if(cljs.core.truth_(inst_19209)){
var statearr_19238_19287 = state_19224__$1;
(statearr_19238_19287[(1)] = (23));

} else {
var statearr_19239_19288 = state_19224__$1;
(statearr_19239_19288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (6))){
var inst_19203 = (state_19224[(7)]);
var inst_19155 = (state_19224[(8)]);
var inst_19205 = (state_19224[(11)]);
var inst_19203__$1 = topic_fn.call(null,inst_19155);
var inst_19204 = cljs.core.deref.call(null,mults);
var inst_19205__$1 = cljs.core.get.call(null,inst_19204,inst_19203__$1);
var state_19224__$1 = (function (){var statearr_19240 = state_19224;
(statearr_19240[(7)] = inst_19203__$1);

(statearr_19240[(11)] = inst_19205__$1);

return statearr_19240;
})();
if(cljs.core.truth_(inst_19205__$1)){
var statearr_19241_19289 = state_19224__$1;
(statearr_19241_19289[(1)] = (19));

} else {
var statearr_19242_19290 = state_19224__$1;
(statearr_19242_19290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (25))){
var inst_19214 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19243_19291 = state_19224__$1;
(statearr_19243_19291[(2)] = inst_19214);

(statearr_19243_19291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (17))){
var inst_19179 = (state_19224[(10)]);
var inst_19188 = cljs.core.first.call(null,inst_19179);
var inst_19189 = cljs.core.async.muxch_STAR_.call(null,inst_19188);
var inst_19190 = cljs.core.async.close_BANG_.call(null,inst_19189);
var inst_19191 = cljs.core.next.call(null,inst_19179);
var inst_19165 = inst_19191;
var inst_19166 = null;
var inst_19167 = (0);
var inst_19168 = (0);
var state_19224__$1 = (function (){var statearr_19244 = state_19224;
(statearr_19244[(12)] = inst_19167);

(statearr_19244[(13)] = inst_19168);

(statearr_19244[(14)] = inst_19190);

(statearr_19244[(15)] = inst_19165);

(statearr_19244[(16)] = inst_19166);

return statearr_19244;
})();
var statearr_19245_19292 = state_19224__$1;
(statearr_19245_19292[(2)] = null);

(statearr_19245_19292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (3))){
var inst_19222 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19224__$1,inst_19222);
} else {
if((state_val_19225 === (12))){
var inst_19199 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19246_19293 = state_19224__$1;
(statearr_19246_19293[(2)] = inst_19199);

(statearr_19246_19293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (2))){
var state_19224__$1 = state_19224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19224__$1,(4),ch);
} else {
if((state_val_19225 === (23))){
var state_19224__$1 = state_19224;
var statearr_19247_19294 = state_19224__$1;
(statearr_19247_19294[(2)] = null);

(statearr_19247_19294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (19))){
var inst_19155 = (state_19224[(8)]);
var inst_19205 = (state_19224[(11)]);
var inst_19207 = cljs.core.async.muxch_STAR_.call(null,inst_19205);
var state_19224__$1 = state_19224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19224__$1,(22),inst_19207,inst_19155);
} else {
if((state_val_19225 === (11))){
var inst_19179 = (state_19224[(10)]);
var inst_19165 = (state_19224[(15)]);
var inst_19179__$1 = cljs.core.seq.call(null,inst_19165);
var state_19224__$1 = (function (){var statearr_19248 = state_19224;
(statearr_19248[(10)] = inst_19179__$1);

return statearr_19248;
})();
if(inst_19179__$1){
var statearr_19249_19295 = state_19224__$1;
(statearr_19249_19295[(1)] = (13));

} else {
var statearr_19250_19296 = state_19224__$1;
(statearr_19250_19296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (9))){
var inst_19201 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19251_19297 = state_19224__$1;
(statearr_19251_19297[(2)] = inst_19201);

(statearr_19251_19297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (5))){
var inst_19162 = cljs.core.deref.call(null,mults);
var inst_19163 = cljs.core.vals.call(null,inst_19162);
var inst_19164 = cljs.core.seq.call(null,inst_19163);
var inst_19165 = inst_19164;
var inst_19166 = null;
var inst_19167 = (0);
var inst_19168 = (0);
var state_19224__$1 = (function (){var statearr_19252 = state_19224;
(statearr_19252[(12)] = inst_19167);

(statearr_19252[(13)] = inst_19168);

(statearr_19252[(15)] = inst_19165);

(statearr_19252[(16)] = inst_19166);

return statearr_19252;
})();
var statearr_19253_19298 = state_19224__$1;
(statearr_19253_19298[(2)] = null);

(statearr_19253_19298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (14))){
var state_19224__$1 = state_19224;
var statearr_19257_19299 = state_19224__$1;
(statearr_19257_19299[(2)] = null);

(statearr_19257_19299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (16))){
var inst_19179 = (state_19224[(10)]);
var inst_19183 = cljs.core.chunk_first.call(null,inst_19179);
var inst_19184 = cljs.core.chunk_rest.call(null,inst_19179);
var inst_19185 = cljs.core.count.call(null,inst_19183);
var inst_19165 = inst_19184;
var inst_19166 = inst_19183;
var inst_19167 = inst_19185;
var inst_19168 = (0);
var state_19224__$1 = (function (){var statearr_19258 = state_19224;
(statearr_19258[(12)] = inst_19167);

(statearr_19258[(13)] = inst_19168);

(statearr_19258[(15)] = inst_19165);

(statearr_19258[(16)] = inst_19166);

return statearr_19258;
})();
var statearr_19259_19300 = state_19224__$1;
(statearr_19259_19300[(2)] = null);

(statearr_19259_19300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (10))){
var inst_19167 = (state_19224[(12)]);
var inst_19168 = (state_19224[(13)]);
var inst_19165 = (state_19224[(15)]);
var inst_19166 = (state_19224[(16)]);
var inst_19173 = cljs.core._nth.call(null,inst_19166,inst_19168);
var inst_19174 = cljs.core.async.muxch_STAR_.call(null,inst_19173);
var inst_19175 = cljs.core.async.close_BANG_.call(null,inst_19174);
var inst_19176 = (inst_19168 + (1));
var tmp19254 = inst_19167;
var tmp19255 = inst_19165;
var tmp19256 = inst_19166;
var inst_19165__$1 = tmp19255;
var inst_19166__$1 = tmp19256;
var inst_19167__$1 = tmp19254;
var inst_19168__$1 = inst_19176;
var state_19224__$1 = (function (){var statearr_19260 = state_19224;
(statearr_19260[(17)] = inst_19175);

(statearr_19260[(12)] = inst_19167__$1);

(statearr_19260[(13)] = inst_19168__$1);

(statearr_19260[(15)] = inst_19165__$1);

(statearr_19260[(16)] = inst_19166__$1);

return statearr_19260;
})();
var statearr_19261_19301 = state_19224__$1;
(statearr_19261_19301[(2)] = null);

(statearr_19261_19301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (18))){
var inst_19194 = (state_19224[(2)]);
var state_19224__$1 = state_19224;
var statearr_19262_19302 = state_19224__$1;
(statearr_19262_19302[(2)] = inst_19194);

(statearr_19262_19302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19225 === (8))){
var inst_19167 = (state_19224[(12)]);
var inst_19168 = (state_19224[(13)]);
var inst_19170 = (inst_19168 < inst_19167);
var inst_19171 = inst_19170;
var state_19224__$1 = state_19224;
if(cljs.core.truth_(inst_19171)){
var statearr_19263_19303 = state_19224__$1;
(statearr_19263_19303[(1)] = (10));

} else {
var statearr_19264_19304 = state_19224__$1;
(statearr_19264_19304[(1)] = (11));

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
});})(c__10260__auto___19276,mults,ensure_mult,p))
;
return ((function (switch__10195__auto__,c__10260__auto___19276,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19268[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19268[(1)] = (1));

return statearr_19268;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19224){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19269){if((e19269 instanceof Object)){
var ex__10199__auto__ = e19269;
var statearr_19270_19305 = state_19224;
(statearr_19270_19305[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19306 = state_19224;
state_19224 = G__19306;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19276,mults,ensure_mult,p))
})();
var state__10262__auto__ = (function (){var statearr_19271 = f__10261__auto__.call(null);
(statearr_19271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19276);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19276,mults,ensure_mult,p))
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
var args19307 = [];
var len__6152__auto___19310 = arguments.length;
var i__6153__auto___19311 = (0);
while(true){
if((i__6153__auto___19311 < len__6152__auto___19310)){
args19307.push((arguments[i__6153__auto___19311]));

var G__19312 = (i__6153__auto___19311 + (1));
i__6153__auto___19311 = G__19312;
continue;
} else {
}
break;
}

var G__19309 = args19307.length;
switch (G__19309) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19307.length)].join('')));

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
var args19314 = [];
var len__6152__auto___19317 = arguments.length;
var i__6153__auto___19318 = (0);
while(true){
if((i__6153__auto___19318 < len__6152__auto___19317)){
args19314.push((arguments[i__6153__auto___19318]));

var G__19319 = (i__6153__auto___19318 + (1));
i__6153__auto___19318 = G__19319;
continue;
} else {
}
break;
}

var G__19316 = args19314.length;
switch (G__19316) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19314.length)].join('')));

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
var args19321 = [];
var len__6152__auto___19392 = arguments.length;
var i__6153__auto___19393 = (0);
while(true){
if((i__6153__auto___19393 < len__6152__auto___19392)){
args19321.push((arguments[i__6153__auto___19393]));

var G__19394 = (i__6153__auto___19393 + (1));
i__6153__auto___19393 = G__19394;
continue;
} else {
}
break;
}

var G__19323 = args19321.length;
switch (G__19323) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19321.length)].join('')));

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
var c__10260__auto___19396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19362){
var state_val_19363 = (state_19362[(1)]);
if((state_val_19363 === (7))){
var state_19362__$1 = state_19362;
var statearr_19364_19397 = state_19362__$1;
(statearr_19364_19397[(2)] = null);

(statearr_19364_19397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (1))){
var state_19362__$1 = state_19362;
var statearr_19365_19398 = state_19362__$1;
(statearr_19365_19398[(2)] = null);

(statearr_19365_19398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (4))){
var inst_19326 = (state_19362[(7)]);
var inst_19328 = (inst_19326 < cnt);
var state_19362__$1 = state_19362;
if(cljs.core.truth_(inst_19328)){
var statearr_19366_19399 = state_19362__$1;
(statearr_19366_19399[(1)] = (6));

} else {
var statearr_19367_19400 = state_19362__$1;
(statearr_19367_19400[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (15))){
var inst_19358 = (state_19362[(2)]);
var state_19362__$1 = state_19362;
var statearr_19368_19401 = state_19362__$1;
(statearr_19368_19401[(2)] = inst_19358);

(statearr_19368_19401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (13))){
var inst_19351 = cljs.core.async.close_BANG_.call(null,out);
var state_19362__$1 = state_19362;
var statearr_19369_19402 = state_19362__$1;
(statearr_19369_19402[(2)] = inst_19351);

(statearr_19369_19402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (6))){
var state_19362__$1 = state_19362;
var statearr_19370_19403 = state_19362__$1;
(statearr_19370_19403[(2)] = null);

(statearr_19370_19403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (3))){
var inst_19360 = (state_19362[(2)]);
var state_19362__$1 = state_19362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19362__$1,inst_19360);
} else {
if((state_val_19363 === (12))){
var inst_19348 = (state_19362[(8)]);
var inst_19348__$1 = (state_19362[(2)]);
var inst_19349 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19348__$1);
var state_19362__$1 = (function (){var statearr_19371 = state_19362;
(statearr_19371[(8)] = inst_19348__$1);

return statearr_19371;
})();
if(cljs.core.truth_(inst_19349)){
var statearr_19372_19404 = state_19362__$1;
(statearr_19372_19404[(1)] = (13));

} else {
var statearr_19373_19405 = state_19362__$1;
(statearr_19373_19405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (2))){
var inst_19325 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19326 = (0);
var state_19362__$1 = (function (){var statearr_19374 = state_19362;
(statearr_19374[(7)] = inst_19326);

(statearr_19374[(9)] = inst_19325);

return statearr_19374;
})();
var statearr_19375_19406 = state_19362__$1;
(statearr_19375_19406[(2)] = null);

(statearr_19375_19406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (11))){
var inst_19326 = (state_19362[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19362,(10),Object,null,(9));
var inst_19335 = chs__$1.call(null,inst_19326);
var inst_19336 = done.call(null,inst_19326);
var inst_19337 = cljs.core.async.take_BANG_.call(null,inst_19335,inst_19336);
var state_19362__$1 = state_19362;
var statearr_19376_19407 = state_19362__$1;
(statearr_19376_19407[(2)] = inst_19337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (9))){
var inst_19326 = (state_19362[(7)]);
var inst_19339 = (state_19362[(2)]);
var inst_19340 = (inst_19326 + (1));
var inst_19326__$1 = inst_19340;
var state_19362__$1 = (function (){var statearr_19377 = state_19362;
(statearr_19377[(7)] = inst_19326__$1);

(statearr_19377[(10)] = inst_19339);

return statearr_19377;
})();
var statearr_19378_19408 = state_19362__$1;
(statearr_19378_19408[(2)] = null);

(statearr_19378_19408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (5))){
var inst_19346 = (state_19362[(2)]);
var state_19362__$1 = (function (){var statearr_19379 = state_19362;
(statearr_19379[(11)] = inst_19346);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19362__$1,(12),dchan);
} else {
if((state_val_19363 === (14))){
var inst_19348 = (state_19362[(8)]);
var inst_19353 = cljs.core.apply.call(null,f,inst_19348);
var state_19362__$1 = state_19362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19362__$1,(16),out,inst_19353);
} else {
if((state_val_19363 === (16))){
var inst_19355 = (state_19362[(2)]);
var state_19362__$1 = (function (){var statearr_19380 = state_19362;
(statearr_19380[(12)] = inst_19355);

return statearr_19380;
})();
var statearr_19381_19409 = state_19362__$1;
(statearr_19381_19409[(2)] = null);

(statearr_19381_19409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (10))){
var inst_19330 = (state_19362[(2)]);
var inst_19331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19362__$1 = (function (){var statearr_19382 = state_19362;
(statearr_19382[(13)] = inst_19330);

return statearr_19382;
})();
var statearr_19383_19410 = state_19362__$1;
(statearr_19383_19410[(2)] = inst_19331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19362__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19363 === (8))){
var inst_19344 = (state_19362[(2)]);
var state_19362__$1 = state_19362;
var statearr_19384_19411 = state_19362__$1;
(statearr_19384_19411[(2)] = inst_19344);

(statearr_19384_19411[(1)] = (5));


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
});})(c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10195__auto__,c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19388[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19388[(1)] = (1));

return statearr_19388;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19362){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19389){if((e19389 instanceof Object)){
var ex__10199__auto__ = e19389;
var statearr_19390_19412 = state_19362;
(statearr_19390_19412[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19413 = state_19362;
state_19362 = G__19413;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10262__auto__ = (function (){var statearr_19391 = f__10261__auto__.call(null);
(statearr_19391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19396);

return statearr_19391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19396,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19415 = [];
var len__6152__auto___19471 = arguments.length;
var i__6153__auto___19472 = (0);
while(true){
if((i__6153__auto___19472 < len__6152__auto___19471)){
args19415.push((arguments[i__6153__auto___19472]));

var G__19473 = (i__6153__auto___19472 + (1));
i__6153__auto___19472 = G__19473;
continue;
} else {
}
break;
}

var G__19417 = args19415.length;
switch (G__19417) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19415.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19475,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19475,out){
return (function (state_19447){
var state_val_19448 = (state_19447[(1)]);
if((state_val_19448 === (7))){
var inst_19426 = (state_19447[(7)]);
var inst_19427 = (state_19447[(8)]);
var inst_19426__$1 = (state_19447[(2)]);
var inst_19427__$1 = cljs.core.nth.call(null,inst_19426__$1,(0),null);
var inst_19428 = cljs.core.nth.call(null,inst_19426__$1,(1),null);
var inst_19429 = (inst_19427__$1 == null);
var state_19447__$1 = (function (){var statearr_19449 = state_19447;
(statearr_19449[(9)] = inst_19428);

(statearr_19449[(7)] = inst_19426__$1);

(statearr_19449[(8)] = inst_19427__$1);

return statearr_19449;
})();
if(cljs.core.truth_(inst_19429)){
var statearr_19450_19476 = state_19447__$1;
(statearr_19450_19476[(1)] = (8));

} else {
var statearr_19451_19477 = state_19447__$1;
(statearr_19451_19477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (1))){
var inst_19418 = cljs.core.vec.call(null,chs);
var inst_19419 = inst_19418;
var state_19447__$1 = (function (){var statearr_19452 = state_19447;
(statearr_19452[(10)] = inst_19419);

return statearr_19452;
})();
var statearr_19453_19478 = state_19447__$1;
(statearr_19453_19478[(2)] = null);

(statearr_19453_19478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (4))){
var inst_19419 = (state_19447[(10)]);
var state_19447__$1 = state_19447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19447__$1,(7),inst_19419);
} else {
if((state_val_19448 === (6))){
var inst_19443 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19454_19479 = state_19447__$1;
(statearr_19454_19479[(2)] = inst_19443);

(statearr_19454_19479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (3))){
var inst_19445 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19447__$1,inst_19445);
} else {
if((state_val_19448 === (2))){
var inst_19419 = (state_19447[(10)]);
var inst_19421 = cljs.core.count.call(null,inst_19419);
var inst_19422 = (inst_19421 > (0));
var state_19447__$1 = state_19447;
if(cljs.core.truth_(inst_19422)){
var statearr_19456_19480 = state_19447__$1;
(statearr_19456_19480[(1)] = (4));

} else {
var statearr_19457_19481 = state_19447__$1;
(statearr_19457_19481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (11))){
var inst_19419 = (state_19447[(10)]);
var inst_19436 = (state_19447[(2)]);
var tmp19455 = inst_19419;
var inst_19419__$1 = tmp19455;
var state_19447__$1 = (function (){var statearr_19458 = state_19447;
(statearr_19458[(11)] = inst_19436);

(statearr_19458[(10)] = inst_19419__$1);

return statearr_19458;
})();
var statearr_19459_19482 = state_19447__$1;
(statearr_19459_19482[(2)] = null);

(statearr_19459_19482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (9))){
var inst_19427 = (state_19447[(8)]);
var state_19447__$1 = state_19447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19447__$1,(11),out,inst_19427);
} else {
if((state_val_19448 === (5))){
var inst_19441 = cljs.core.async.close_BANG_.call(null,out);
var state_19447__$1 = state_19447;
var statearr_19460_19483 = state_19447__$1;
(statearr_19460_19483[(2)] = inst_19441);

(statearr_19460_19483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (10))){
var inst_19439 = (state_19447[(2)]);
var state_19447__$1 = state_19447;
var statearr_19461_19484 = state_19447__$1;
(statearr_19461_19484[(2)] = inst_19439);

(statearr_19461_19484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19448 === (8))){
var inst_19428 = (state_19447[(9)]);
var inst_19419 = (state_19447[(10)]);
var inst_19426 = (state_19447[(7)]);
var inst_19427 = (state_19447[(8)]);
var inst_19431 = (function (){var cs = inst_19419;
var vec__19424 = inst_19426;
var v = inst_19427;
var c = inst_19428;
return ((function (cs,vec__19424,v,c,inst_19428,inst_19419,inst_19426,inst_19427,state_val_19448,c__10260__auto___19475,out){
return (function (p1__19414_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19414_SHARP_);
});
;})(cs,vec__19424,v,c,inst_19428,inst_19419,inst_19426,inst_19427,state_val_19448,c__10260__auto___19475,out))
})();
var inst_19432 = cljs.core.filterv.call(null,inst_19431,inst_19419);
var inst_19419__$1 = inst_19432;
var state_19447__$1 = (function (){var statearr_19462 = state_19447;
(statearr_19462[(10)] = inst_19419__$1);

return statearr_19462;
})();
var statearr_19463_19485 = state_19447__$1;
(statearr_19463_19485[(2)] = null);

(statearr_19463_19485[(1)] = (2));


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
});})(c__10260__auto___19475,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19475,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19467[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19467[(1)] = (1));

return statearr_19467;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19447){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19468){if((e19468 instanceof Object)){
var ex__10199__auto__ = e19468;
var statearr_19469_19486 = state_19447;
(statearr_19469_19486[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19487 = state_19447;
state_19447 = G__19487;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19475,out))
})();
var state__10262__auto__ = (function (){var statearr_19470 = f__10261__auto__.call(null);
(statearr_19470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19475);

return statearr_19470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19475,out))
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
var args19488 = [];
var len__6152__auto___19537 = arguments.length;
var i__6153__auto___19538 = (0);
while(true){
if((i__6153__auto___19538 < len__6152__auto___19537)){
args19488.push((arguments[i__6153__auto___19538]));

var G__19539 = (i__6153__auto___19538 + (1));
i__6153__auto___19538 = G__19539;
continue;
} else {
}
break;
}

var G__19490 = args19488.length;
switch (G__19490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19488.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19541,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19541,out){
return (function (state_19514){
var state_val_19515 = (state_19514[(1)]);
if((state_val_19515 === (7))){
var inst_19496 = (state_19514[(7)]);
var inst_19496__$1 = (state_19514[(2)]);
var inst_19497 = (inst_19496__$1 == null);
var inst_19498 = cljs.core.not.call(null,inst_19497);
var state_19514__$1 = (function (){var statearr_19516 = state_19514;
(statearr_19516[(7)] = inst_19496__$1);

return statearr_19516;
})();
if(inst_19498){
var statearr_19517_19542 = state_19514__$1;
(statearr_19517_19542[(1)] = (8));

} else {
var statearr_19518_19543 = state_19514__$1;
(statearr_19518_19543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (1))){
var inst_19491 = (0);
var state_19514__$1 = (function (){var statearr_19519 = state_19514;
(statearr_19519[(8)] = inst_19491);

return statearr_19519;
})();
var statearr_19520_19544 = state_19514__$1;
(statearr_19520_19544[(2)] = null);

(statearr_19520_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (4))){
var state_19514__$1 = state_19514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19514__$1,(7),ch);
} else {
if((state_val_19515 === (6))){
var inst_19509 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19521_19545 = state_19514__$1;
(statearr_19521_19545[(2)] = inst_19509);

(statearr_19521_19545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (3))){
var inst_19511 = (state_19514[(2)]);
var inst_19512 = cljs.core.async.close_BANG_.call(null,out);
var state_19514__$1 = (function (){var statearr_19522 = state_19514;
(statearr_19522[(9)] = inst_19511);

return statearr_19522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19514__$1,inst_19512);
} else {
if((state_val_19515 === (2))){
var inst_19491 = (state_19514[(8)]);
var inst_19493 = (inst_19491 < n);
var state_19514__$1 = state_19514;
if(cljs.core.truth_(inst_19493)){
var statearr_19523_19546 = state_19514__$1;
(statearr_19523_19546[(1)] = (4));

} else {
var statearr_19524_19547 = state_19514__$1;
(statearr_19524_19547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (11))){
var inst_19491 = (state_19514[(8)]);
var inst_19501 = (state_19514[(2)]);
var inst_19502 = (inst_19491 + (1));
var inst_19491__$1 = inst_19502;
var state_19514__$1 = (function (){var statearr_19525 = state_19514;
(statearr_19525[(10)] = inst_19501);

(statearr_19525[(8)] = inst_19491__$1);

return statearr_19525;
})();
var statearr_19526_19548 = state_19514__$1;
(statearr_19526_19548[(2)] = null);

(statearr_19526_19548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (9))){
var state_19514__$1 = state_19514;
var statearr_19527_19549 = state_19514__$1;
(statearr_19527_19549[(2)] = null);

(statearr_19527_19549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (5))){
var state_19514__$1 = state_19514;
var statearr_19528_19550 = state_19514__$1;
(statearr_19528_19550[(2)] = null);

(statearr_19528_19550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (10))){
var inst_19506 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19529_19551 = state_19514__$1;
(statearr_19529_19551[(2)] = inst_19506);

(statearr_19529_19551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (8))){
var inst_19496 = (state_19514[(7)]);
var state_19514__$1 = state_19514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19514__$1,(11),out,inst_19496);
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
});})(c__10260__auto___19541,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19541,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19533[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19533[(1)] = (1));

return statearr_19533;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19514){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19534){if((e19534 instanceof Object)){
var ex__10199__auto__ = e19534;
var statearr_19535_19552 = state_19514;
(statearr_19535_19552[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19553 = state_19514;
state_19514 = G__19553;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19541,out))
})();
var state__10262__auto__ = (function (){var statearr_19536 = f__10261__auto__.call(null);
(statearr_19536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19541);

return statearr_19536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19541,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19561 = (function (map_LT_,f,ch,meta19562){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19562 = meta19562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19563,meta19562__$1){
var self__ = this;
var _19563__$1 = this;
return (new cljs.core.async.t_cljs$core$async19561(self__.map_LT_,self__.f,self__.ch,meta19562__$1));
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19563){
var self__ = this;
var _19563__$1 = this;
return self__.meta19562;
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19564 = (function (map_LT_,f,ch,meta19562,_,fn1,meta19565){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19562 = meta19562;
this._ = _;
this.fn1 = fn1;
this.meta19565 = meta19565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19566,meta19565__$1){
var self__ = this;
var _19566__$1 = this;
return (new cljs.core.async.t_cljs$core$async19564(self__.map_LT_,self__.f,self__.ch,self__.meta19562,self__._,self__.fn1,meta19565__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19566){
var self__ = this;
var _19566__$1 = this;
return self__.meta19565;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19554_SHARP_){
return f1.call(null,(((p1__19554_SHARP_ == null))?null:self__.f.call(null,p1__19554_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19564.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19562","meta19562",-1922408241,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19561","cljs.core.async/t_cljs$core$async19561",1780400457,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19565","meta19565",1442121744,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19564";

cljs.core.async.t_cljs$core$async19564.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19564");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19564 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19564(map_LT___$1,f__$1,ch__$1,meta19562__$1,___$2,fn1__$1,meta19565){
return (new cljs.core.async.t_cljs$core$async19564(map_LT___$1,f__$1,ch__$1,meta19562__$1,___$2,fn1__$1,meta19565));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19564(self__.map_LT_,self__.f,self__.ch,self__.meta19562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19562","meta19562",-1922408241,null)], null);
});

cljs.core.async.t_cljs$core$async19561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19561";

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19561");
});

cljs.core.async.__GT_t_cljs$core$async19561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19561(map_LT___$1,f__$1,ch__$1,meta19562){
return (new cljs.core.async.t_cljs$core$async19561(map_LT___$1,f__$1,ch__$1,meta19562));
});

}

return (new cljs.core.async.t_cljs$core$async19561(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19570 = (function (map_GT_,f,ch,meta19571){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19571 = meta19571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19572,meta19571__$1){
var self__ = this;
var _19572__$1 = this;
return (new cljs.core.async.t_cljs$core$async19570(self__.map_GT_,self__.f,self__.ch,meta19571__$1));
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19572){
var self__ = this;
var _19572__$1 = this;
return self__.meta19571;
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19571","meta19571",-433260983,null)], null);
});

cljs.core.async.t_cljs$core$async19570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19570";

cljs.core.async.t_cljs$core$async19570.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19570");
});

cljs.core.async.__GT_t_cljs$core$async19570 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19570(map_GT___$1,f__$1,ch__$1,meta19571){
return (new cljs.core.async.t_cljs$core$async19570(map_GT___$1,f__$1,ch__$1,meta19571));
});

}

return (new cljs.core.async.t_cljs$core$async19570(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19576 = (function (filter_GT_,p,ch,meta19577){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19577 = meta19577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19578,meta19577__$1){
var self__ = this;
var _19578__$1 = this;
return (new cljs.core.async.t_cljs$core$async19576(self__.filter_GT_,self__.p,self__.ch,meta19577__$1));
});

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19578){
var self__ = this;
var _19578__$1 = this;
return self__.meta19577;
});

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19577","meta19577",1790494003,null)], null);
});

cljs.core.async.t_cljs$core$async19576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19576";

cljs.core.async.t_cljs$core$async19576.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19576");
});

cljs.core.async.__GT_t_cljs$core$async19576 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19576(filter_GT___$1,p__$1,ch__$1,meta19577){
return (new cljs.core.async.t_cljs$core$async19576(filter_GT___$1,p__$1,ch__$1,meta19577));
});

}

return (new cljs.core.async.t_cljs$core$async19576(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19579 = [];
var len__6152__auto___19623 = arguments.length;
var i__6153__auto___19624 = (0);
while(true){
if((i__6153__auto___19624 < len__6152__auto___19623)){
args19579.push((arguments[i__6153__auto___19624]));

var G__19625 = (i__6153__auto___19624 + (1));
i__6153__auto___19624 = G__19625;
continue;
} else {
}
break;
}

var G__19581 = args19579.length;
switch (G__19581) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19579.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19627,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19627,out){
return (function (state_19602){
var state_val_19603 = (state_19602[(1)]);
if((state_val_19603 === (7))){
var inst_19598 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
var statearr_19604_19628 = state_19602__$1;
(statearr_19604_19628[(2)] = inst_19598);

(statearr_19604_19628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (1))){
var state_19602__$1 = state_19602;
var statearr_19605_19629 = state_19602__$1;
(statearr_19605_19629[(2)] = null);

(statearr_19605_19629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (4))){
var inst_19584 = (state_19602[(7)]);
var inst_19584__$1 = (state_19602[(2)]);
var inst_19585 = (inst_19584__$1 == null);
var state_19602__$1 = (function (){var statearr_19606 = state_19602;
(statearr_19606[(7)] = inst_19584__$1);

return statearr_19606;
})();
if(cljs.core.truth_(inst_19585)){
var statearr_19607_19630 = state_19602__$1;
(statearr_19607_19630[(1)] = (5));

} else {
var statearr_19608_19631 = state_19602__$1;
(statearr_19608_19631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (6))){
var inst_19584 = (state_19602[(7)]);
var inst_19589 = p.call(null,inst_19584);
var state_19602__$1 = state_19602;
if(cljs.core.truth_(inst_19589)){
var statearr_19609_19632 = state_19602__$1;
(statearr_19609_19632[(1)] = (8));

} else {
var statearr_19610_19633 = state_19602__$1;
(statearr_19610_19633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (3))){
var inst_19600 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19602__$1,inst_19600);
} else {
if((state_val_19603 === (2))){
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19602__$1,(4),ch);
} else {
if((state_val_19603 === (11))){
var inst_19592 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
var statearr_19611_19634 = state_19602__$1;
(statearr_19611_19634[(2)] = inst_19592);

(statearr_19611_19634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (9))){
var state_19602__$1 = state_19602;
var statearr_19612_19635 = state_19602__$1;
(statearr_19612_19635[(2)] = null);

(statearr_19612_19635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (5))){
var inst_19587 = cljs.core.async.close_BANG_.call(null,out);
var state_19602__$1 = state_19602;
var statearr_19613_19636 = state_19602__$1;
(statearr_19613_19636[(2)] = inst_19587);

(statearr_19613_19636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (10))){
var inst_19595 = (state_19602[(2)]);
var state_19602__$1 = (function (){var statearr_19614 = state_19602;
(statearr_19614[(8)] = inst_19595);

return statearr_19614;
})();
var statearr_19615_19637 = state_19602__$1;
(statearr_19615_19637[(2)] = null);

(statearr_19615_19637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (8))){
var inst_19584 = (state_19602[(7)]);
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19602__$1,(11),out,inst_19584);
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
});})(c__10260__auto___19627,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19627,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19619 = [null,null,null,null,null,null,null,null,null];
(statearr_19619[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19619[(1)] = (1));

return statearr_19619;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19602){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19620){if((e19620 instanceof Object)){
var ex__10199__auto__ = e19620;
var statearr_19621_19638 = state_19602;
(statearr_19621_19638[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19639 = state_19602;
state_19602 = G__19639;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19627,out))
})();
var state__10262__auto__ = (function (){var statearr_19622 = f__10261__auto__.call(null);
(statearr_19622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19627);

return statearr_19622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19627,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19640 = [];
var len__6152__auto___19643 = arguments.length;
var i__6153__auto___19644 = (0);
while(true){
if((i__6153__auto___19644 < len__6152__auto___19643)){
args19640.push((arguments[i__6153__auto___19644]));

var G__19645 = (i__6153__auto___19644 + (1));
i__6153__auto___19644 = G__19645;
continue;
} else {
}
break;
}

var G__19642 = args19640.length;
switch (G__19642) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19640.length)].join('')));

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
return (function (state_19812){
var state_val_19813 = (state_19812[(1)]);
if((state_val_19813 === (7))){
var inst_19808 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19814_19855 = state_19812__$1;
(statearr_19814_19855[(2)] = inst_19808);

(statearr_19814_19855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (20))){
var inst_19778 = (state_19812[(7)]);
var inst_19789 = (state_19812[(2)]);
var inst_19790 = cljs.core.next.call(null,inst_19778);
var inst_19764 = inst_19790;
var inst_19765 = null;
var inst_19766 = (0);
var inst_19767 = (0);
var state_19812__$1 = (function (){var statearr_19815 = state_19812;
(statearr_19815[(8)] = inst_19764);

(statearr_19815[(9)] = inst_19766);

(statearr_19815[(10)] = inst_19765);

(statearr_19815[(11)] = inst_19789);

(statearr_19815[(12)] = inst_19767);

return statearr_19815;
})();
var statearr_19816_19856 = state_19812__$1;
(statearr_19816_19856[(2)] = null);

(statearr_19816_19856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (1))){
var state_19812__$1 = state_19812;
var statearr_19817_19857 = state_19812__$1;
(statearr_19817_19857[(2)] = null);

(statearr_19817_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (4))){
var inst_19753 = (state_19812[(13)]);
var inst_19753__$1 = (state_19812[(2)]);
var inst_19754 = (inst_19753__$1 == null);
var state_19812__$1 = (function (){var statearr_19818 = state_19812;
(statearr_19818[(13)] = inst_19753__$1);

return statearr_19818;
})();
if(cljs.core.truth_(inst_19754)){
var statearr_19819_19858 = state_19812__$1;
(statearr_19819_19858[(1)] = (5));

} else {
var statearr_19820_19859 = state_19812__$1;
(statearr_19820_19859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (15))){
var state_19812__$1 = state_19812;
var statearr_19824_19860 = state_19812__$1;
(statearr_19824_19860[(2)] = null);

(statearr_19824_19860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (21))){
var state_19812__$1 = state_19812;
var statearr_19825_19861 = state_19812__$1;
(statearr_19825_19861[(2)] = null);

(statearr_19825_19861[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (13))){
var inst_19764 = (state_19812[(8)]);
var inst_19766 = (state_19812[(9)]);
var inst_19765 = (state_19812[(10)]);
var inst_19767 = (state_19812[(12)]);
var inst_19774 = (state_19812[(2)]);
var inst_19775 = (inst_19767 + (1));
var tmp19821 = inst_19764;
var tmp19822 = inst_19766;
var tmp19823 = inst_19765;
var inst_19764__$1 = tmp19821;
var inst_19765__$1 = tmp19823;
var inst_19766__$1 = tmp19822;
var inst_19767__$1 = inst_19775;
var state_19812__$1 = (function (){var statearr_19826 = state_19812;
(statearr_19826[(8)] = inst_19764__$1);

(statearr_19826[(9)] = inst_19766__$1);

(statearr_19826[(10)] = inst_19765__$1);

(statearr_19826[(14)] = inst_19774);

(statearr_19826[(12)] = inst_19767__$1);

return statearr_19826;
})();
var statearr_19827_19862 = state_19812__$1;
(statearr_19827_19862[(2)] = null);

(statearr_19827_19862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (22))){
var state_19812__$1 = state_19812;
var statearr_19828_19863 = state_19812__$1;
(statearr_19828_19863[(2)] = null);

(statearr_19828_19863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (6))){
var inst_19753 = (state_19812[(13)]);
var inst_19762 = f.call(null,inst_19753);
var inst_19763 = cljs.core.seq.call(null,inst_19762);
var inst_19764 = inst_19763;
var inst_19765 = null;
var inst_19766 = (0);
var inst_19767 = (0);
var state_19812__$1 = (function (){var statearr_19829 = state_19812;
(statearr_19829[(8)] = inst_19764);

(statearr_19829[(9)] = inst_19766);

(statearr_19829[(10)] = inst_19765);

(statearr_19829[(12)] = inst_19767);

return statearr_19829;
})();
var statearr_19830_19864 = state_19812__$1;
(statearr_19830_19864[(2)] = null);

(statearr_19830_19864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (17))){
var inst_19778 = (state_19812[(7)]);
var inst_19782 = cljs.core.chunk_first.call(null,inst_19778);
var inst_19783 = cljs.core.chunk_rest.call(null,inst_19778);
var inst_19784 = cljs.core.count.call(null,inst_19782);
var inst_19764 = inst_19783;
var inst_19765 = inst_19782;
var inst_19766 = inst_19784;
var inst_19767 = (0);
var state_19812__$1 = (function (){var statearr_19831 = state_19812;
(statearr_19831[(8)] = inst_19764);

(statearr_19831[(9)] = inst_19766);

(statearr_19831[(10)] = inst_19765);

(statearr_19831[(12)] = inst_19767);

return statearr_19831;
})();
var statearr_19832_19865 = state_19812__$1;
(statearr_19832_19865[(2)] = null);

(statearr_19832_19865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (3))){
var inst_19810 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19812__$1,inst_19810);
} else {
if((state_val_19813 === (12))){
var inst_19798 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19833_19866 = state_19812__$1;
(statearr_19833_19866[(2)] = inst_19798);

(statearr_19833_19866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (2))){
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19812__$1,(4),in$);
} else {
if((state_val_19813 === (23))){
var inst_19806 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19834_19867 = state_19812__$1;
(statearr_19834_19867[(2)] = inst_19806);

(statearr_19834_19867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (19))){
var inst_19793 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19835_19868 = state_19812__$1;
(statearr_19835_19868[(2)] = inst_19793);

(statearr_19835_19868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (11))){
var inst_19764 = (state_19812[(8)]);
var inst_19778 = (state_19812[(7)]);
var inst_19778__$1 = cljs.core.seq.call(null,inst_19764);
var state_19812__$1 = (function (){var statearr_19836 = state_19812;
(statearr_19836[(7)] = inst_19778__$1);

return statearr_19836;
})();
if(inst_19778__$1){
var statearr_19837_19869 = state_19812__$1;
(statearr_19837_19869[(1)] = (14));

} else {
var statearr_19838_19870 = state_19812__$1;
(statearr_19838_19870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (9))){
var inst_19800 = (state_19812[(2)]);
var inst_19801 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19812__$1 = (function (){var statearr_19839 = state_19812;
(statearr_19839[(15)] = inst_19800);

return statearr_19839;
})();
if(cljs.core.truth_(inst_19801)){
var statearr_19840_19871 = state_19812__$1;
(statearr_19840_19871[(1)] = (21));

} else {
var statearr_19841_19872 = state_19812__$1;
(statearr_19841_19872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (5))){
var inst_19756 = cljs.core.async.close_BANG_.call(null,out);
var state_19812__$1 = state_19812;
var statearr_19842_19873 = state_19812__$1;
(statearr_19842_19873[(2)] = inst_19756);

(statearr_19842_19873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (14))){
var inst_19778 = (state_19812[(7)]);
var inst_19780 = cljs.core.chunked_seq_QMARK_.call(null,inst_19778);
var state_19812__$1 = state_19812;
if(inst_19780){
var statearr_19843_19874 = state_19812__$1;
(statearr_19843_19874[(1)] = (17));

} else {
var statearr_19844_19875 = state_19812__$1;
(statearr_19844_19875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (16))){
var inst_19796 = (state_19812[(2)]);
var state_19812__$1 = state_19812;
var statearr_19845_19876 = state_19812__$1;
(statearr_19845_19876[(2)] = inst_19796);

(statearr_19845_19876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19813 === (10))){
var inst_19765 = (state_19812[(10)]);
var inst_19767 = (state_19812[(12)]);
var inst_19772 = cljs.core._nth.call(null,inst_19765,inst_19767);
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19812__$1,(13),out,inst_19772);
} else {
if((state_val_19813 === (18))){
var inst_19778 = (state_19812[(7)]);
var inst_19787 = cljs.core.first.call(null,inst_19778);
var state_19812__$1 = state_19812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19812__$1,(20),out,inst_19787);
} else {
if((state_val_19813 === (8))){
var inst_19766 = (state_19812[(9)]);
var inst_19767 = (state_19812[(12)]);
var inst_19769 = (inst_19767 < inst_19766);
var inst_19770 = inst_19769;
var state_19812__$1 = state_19812;
if(cljs.core.truth_(inst_19770)){
var statearr_19846_19877 = state_19812__$1;
(statearr_19846_19877[(1)] = (10));

} else {
var statearr_19847_19878 = state_19812__$1;
(statearr_19847_19878[(1)] = (11));

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
var statearr_19851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19851[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__);

(statearr_19851[(1)] = (1));

return statearr_19851;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1 = (function (state_19812){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19852){if((e19852 instanceof Object)){
var ex__10199__auto__ = e19852;
var statearr_19853_19879 = state_19812;
(statearr_19853_19879[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19880 = state_19812;
state_19812 = G__19880;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__ = function(state_19812){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1.call(this,state_19812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10196__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto__))
})();
var state__10262__auto__ = (function (){var statearr_19854 = f__10261__auto__.call(null);
(statearr_19854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto__);

return statearr_19854;
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
var args19881 = [];
var len__6152__auto___19884 = arguments.length;
var i__6153__auto___19885 = (0);
while(true){
if((i__6153__auto___19885 < len__6152__auto___19884)){
args19881.push((arguments[i__6153__auto___19885]));

var G__19886 = (i__6153__auto___19885 + (1));
i__6153__auto___19885 = G__19886;
continue;
} else {
}
break;
}

var G__19883 = args19881.length;
switch (G__19883) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19881.length)].join('')));

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
var args19888 = [];
var len__6152__auto___19891 = arguments.length;
var i__6153__auto___19892 = (0);
while(true){
if((i__6153__auto___19892 < len__6152__auto___19891)){
args19888.push((arguments[i__6153__auto___19892]));

var G__19893 = (i__6153__auto___19892 + (1));
i__6153__auto___19892 = G__19893;
continue;
} else {
}
break;
}

var G__19890 = args19888.length;
switch (G__19890) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19888.length)].join('')));

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
var args19895 = [];
var len__6152__auto___19946 = arguments.length;
var i__6153__auto___19947 = (0);
while(true){
if((i__6153__auto___19947 < len__6152__auto___19946)){
args19895.push((arguments[i__6153__auto___19947]));

var G__19948 = (i__6153__auto___19947 + (1));
i__6153__auto___19947 = G__19948;
continue;
} else {
}
break;
}

var G__19897 = args19895.length;
switch (G__19897) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19895.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___19950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___19950,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___19950,out){
return (function (state_19921){
var state_val_19922 = (state_19921[(1)]);
if((state_val_19922 === (7))){
var inst_19916 = (state_19921[(2)]);
var state_19921__$1 = state_19921;
var statearr_19923_19951 = state_19921__$1;
(statearr_19923_19951[(2)] = inst_19916);

(statearr_19923_19951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (1))){
var inst_19898 = null;
var state_19921__$1 = (function (){var statearr_19924 = state_19921;
(statearr_19924[(7)] = inst_19898);

return statearr_19924;
})();
var statearr_19925_19952 = state_19921__$1;
(statearr_19925_19952[(2)] = null);

(statearr_19925_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (4))){
var inst_19901 = (state_19921[(8)]);
var inst_19901__$1 = (state_19921[(2)]);
var inst_19902 = (inst_19901__$1 == null);
var inst_19903 = cljs.core.not.call(null,inst_19902);
var state_19921__$1 = (function (){var statearr_19926 = state_19921;
(statearr_19926[(8)] = inst_19901__$1);

return statearr_19926;
})();
if(inst_19903){
var statearr_19927_19953 = state_19921__$1;
(statearr_19927_19953[(1)] = (5));

} else {
var statearr_19928_19954 = state_19921__$1;
(statearr_19928_19954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (6))){
var state_19921__$1 = state_19921;
var statearr_19929_19955 = state_19921__$1;
(statearr_19929_19955[(2)] = null);

(statearr_19929_19955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (3))){
var inst_19918 = (state_19921[(2)]);
var inst_19919 = cljs.core.async.close_BANG_.call(null,out);
var state_19921__$1 = (function (){var statearr_19930 = state_19921;
(statearr_19930[(9)] = inst_19918);

return statearr_19930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19921__$1,inst_19919);
} else {
if((state_val_19922 === (2))){
var state_19921__$1 = state_19921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19921__$1,(4),ch);
} else {
if((state_val_19922 === (11))){
var inst_19901 = (state_19921[(8)]);
var inst_19910 = (state_19921[(2)]);
var inst_19898 = inst_19901;
var state_19921__$1 = (function (){var statearr_19931 = state_19921;
(statearr_19931[(7)] = inst_19898);

(statearr_19931[(10)] = inst_19910);

return statearr_19931;
})();
var statearr_19932_19956 = state_19921__$1;
(statearr_19932_19956[(2)] = null);

(statearr_19932_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (9))){
var inst_19901 = (state_19921[(8)]);
var state_19921__$1 = state_19921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19921__$1,(11),out,inst_19901);
} else {
if((state_val_19922 === (5))){
var inst_19898 = (state_19921[(7)]);
var inst_19901 = (state_19921[(8)]);
var inst_19905 = cljs.core._EQ_.call(null,inst_19901,inst_19898);
var state_19921__$1 = state_19921;
if(inst_19905){
var statearr_19934_19957 = state_19921__$1;
(statearr_19934_19957[(1)] = (8));

} else {
var statearr_19935_19958 = state_19921__$1;
(statearr_19935_19958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (10))){
var inst_19913 = (state_19921[(2)]);
var state_19921__$1 = state_19921;
var statearr_19936_19959 = state_19921__$1;
(statearr_19936_19959[(2)] = inst_19913);

(statearr_19936_19959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19922 === (8))){
var inst_19898 = (state_19921[(7)]);
var tmp19933 = inst_19898;
var inst_19898__$1 = tmp19933;
var state_19921__$1 = (function (){var statearr_19937 = state_19921;
(statearr_19937[(7)] = inst_19898__$1);

return statearr_19937;
})();
var statearr_19938_19960 = state_19921__$1;
(statearr_19938_19960[(2)] = null);

(statearr_19938_19960[(1)] = (2));


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
});})(c__10260__auto___19950,out))
;
return ((function (switch__10195__auto__,c__10260__auto___19950,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_19942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19942[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_19942[(1)] = (1));

return statearr_19942;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_19921){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_19921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e19943){if((e19943 instanceof Object)){
var ex__10199__auto__ = e19943;
var statearr_19944_19961 = state_19921;
(statearr_19944_19961[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19962 = state_19921;
state_19921 = G__19962;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_19921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_19921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___19950,out))
})();
var state__10262__auto__ = (function (){var statearr_19945 = f__10261__auto__.call(null);
(statearr_19945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___19950);

return statearr_19945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___19950,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19963 = [];
var len__6152__auto___20033 = arguments.length;
var i__6153__auto___20034 = (0);
while(true){
if((i__6153__auto___20034 < len__6152__auto___20033)){
args19963.push((arguments[i__6153__auto___20034]));

var G__20035 = (i__6153__auto___20034 + (1));
i__6153__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var G__19965 = args19963.length;
switch (G__19965) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19963.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___20037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___20037,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___20037,out){
return (function (state_20003){
var state_val_20004 = (state_20003[(1)]);
if((state_val_20004 === (7))){
var inst_19999 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
var statearr_20005_20038 = state_20003__$1;
(statearr_20005_20038[(2)] = inst_19999);

(statearr_20005_20038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (1))){
var inst_19966 = (new Array(n));
var inst_19967 = inst_19966;
var inst_19968 = (0);
var state_20003__$1 = (function (){var statearr_20006 = state_20003;
(statearr_20006[(7)] = inst_19967);

(statearr_20006[(8)] = inst_19968);

return statearr_20006;
})();
var statearr_20007_20039 = state_20003__$1;
(statearr_20007_20039[(2)] = null);

(statearr_20007_20039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (4))){
var inst_19971 = (state_20003[(9)]);
var inst_19971__$1 = (state_20003[(2)]);
var inst_19972 = (inst_19971__$1 == null);
var inst_19973 = cljs.core.not.call(null,inst_19972);
var state_20003__$1 = (function (){var statearr_20008 = state_20003;
(statearr_20008[(9)] = inst_19971__$1);

return statearr_20008;
})();
if(inst_19973){
var statearr_20009_20040 = state_20003__$1;
(statearr_20009_20040[(1)] = (5));

} else {
var statearr_20010_20041 = state_20003__$1;
(statearr_20010_20041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (15))){
var inst_19993 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
var statearr_20011_20042 = state_20003__$1;
(statearr_20011_20042[(2)] = inst_19993);

(statearr_20011_20042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (13))){
var state_20003__$1 = state_20003;
var statearr_20012_20043 = state_20003__$1;
(statearr_20012_20043[(2)] = null);

(statearr_20012_20043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (6))){
var inst_19968 = (state_20003[(8)]);
var inst_19989 = (inst_19968 > (0));
var state_20003__$1 = state_20003;
if(cljs.core.truth_(inst_19989)){
var statearr_20013_20044 = state_20003__$1;
(statearr_20013_20044[(1)] = (12));

} else {
var statearr_20014_20045 = state_20003__$1;
(statearr_20014_20045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (3))){
var inst_20001 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20003__$1,inst_20001);
} else {
if((state_val_20004 === (12))){
var inst_19967 = (state_20003[(7)]);
var inst_19991 = cljs.core.vec.call(null,inst_19967);
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20003__$1,(15),out,inst_19991);
} else {
if((state_val_20004 === (2))){
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20003__$1,(4),ch);
} else {
if((state_val_20004 === (11))){
var inst_19983 = (state_20003[(2)]);
var inst_19984 = (new Array(n));
var inst_19967 = inst_19984;
var inst_19968 = (0);
var state_20003__$1 = (function (){var statearr_20015 = state_20003;
(statearr_20015[(7)] = inst_19967);

(statearr_20015[(10)] = inst_19983);

(statearr_20015[(8)] = inst_19968);

return statearr_20015;
})();
var statearr_20016_20046 = state_20003__$1;
(statearr_20016_20046[(2)] = null);

(statearr_20016_20046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (9))){
var inst_19967 = (state_20003[(7)]);
var inst_19981 = cljs.core.vec.call(null,inst_19967);
var state_20003__$1 = state_20003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20003__$1,(11),out,inst_19981);
} else {
if((state_val_20004 === (5))){
var inst_19967 = (state_20003[(7)]);
var inst_19971 = (state_20003[(9)]);
var inst_19976 = (state_20003[(11)]);
var inst_19968 = (state_20003[(8)]);
var inst_19975 = (inst_19967[inst_19968] = inst_19971);
var inst_19976__$1 = (inst_19968 + (1));
var inst_19977 = (inst_19976__$1 < n);
var state_20003__$1 = (function (){var statearr_20017 = state_20003;
(statearr_20017[(12)] = inst_19975);

(statearr_20017[(11)] = inst_19976__$1);

return statearr_20017;
})();
if(cljs.core.truth_(inst_19977)){
var statearr_20018_20047 = state_20003__$1;
(statearr_20018_20047[(1)] = (8));

} else {
var statearr_20019_20048 = state_20003__$1;
(statearr_20019_20048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (14))){
var inst_19996 = (state_20003[(2)]);
var inst_19997 = cljs.core.async.close_BANG_.call(null,out);
var state_20003__$1 = (function (){var statearr_20021 = state_20003;
(statearr_20021[(13)] = inst_19996);

return statearr_20021;
})();
var statearr_20022_20049 = state_20003__$1;
(statearr_20022_20049[(2)] = inst_19997);

(statearr_20022_20049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (10))){
var inst_19987 = (state_20003[(2)]);
var state_20003__$1 = state_20003;
var statearr_20023_20050 = state_20003__$1;
(statearr_20023_20050[(2)] = inst_19987);

(statearr_20023_20050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20004 === (8))){
var inst_19967 = (state_20003[(7)]);
var inst_19976 = (state_20003[(11)]);
var tmp20020 = inst_19967;
var inst_19967__$1 = tmp20020;
var inst_19968 = inst_19976;
var state_20003__$1 = (function (){var statearr_20024 = state_20003;
(statearr_20024[(7)] = inst_19967__$1);

(statearr_20024[(8)] = inst_19968);

return statearr_20024;
})();
var statearr_20025_20051 = state_20003__$1;
(statearr_20025_20051[(2)] = null);

(statearr_20025_20051[(1)] = (2));


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
});})(c__10260__auto___20037,out))
;
return ((function (switch__10195__auto__,c__10260__auto___20037,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_20029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20029[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_20029[(1)] = (1));

return statearr_20029;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_20003){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_20003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e20030){if((e20030 instanceof Object)){
var ex__10199__auto__ = e20030;
var statearr_20031_20052 = state_20003;
(statearr_20031_20052[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20053 = state_20003;
state_20003 = G__20053;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_20003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_20003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___20037,out))
})();
var state__10262__auto__ = (function (){var statearr_20032 = f__10261__auto__.call(null);
(statearr_20032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___20037);

return statearr_20032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___20037,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20054 = [];
var len__6152__auto___20128 = arguments.length;
var i__6153__auto___20129 = (0);
while(true){
if((i__6153__auto___20129 < len__6152__auto___20128)){
args20054.push((arguments[i__6153__auto___20129]));

var G__20130 = (i__6153__auto___20129 + (1));
i__6153__auto___20129 = G__20130;
continue;
} else {
}
break;
}

var G__20056 = args20054.length;
switch (G__20056) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20054.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10260__auto___20132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10260__auto___20132,out){
return (function (){
var f__10261__auto__ = (function (){var switch__10195__auto__ = ((function (c__10260__auto___20132,out){
return (function (state_20098){
var state_val_20099 = (state_20098[(1)]);
if((state_val_20099 === (7))){
var inst_20094 = (state_20098[(2)]);
var state_20098__$1 = state_20098;
var statearr_20100_20133 = state_20098__$1;
(statearr_20100_20133[(2)] = inst_20094);

(statearr_20100_20133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (1))){
var inst_20057 = [];
var inst_20058 = inst_20057;
var inst_20059 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20098__$1 = (function (){var statearr_20101 = state_20098;
(statearr_20101[(7)] = inst_20058);

(statearr_20101[(8)] = inst_20059);

return statearr_20101;
})();
var statearr_20102_20134 = state_20098__$1;
(statearr_20102_20134[(2)] = null);

(statearr_20102_20134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (4))){
var inst_20062 = (state_20098[(9)]);
var inst_20062__$1 = (state_20098[(2)]);
var inst_20063 = (inst_20062__$1 == null);
var inst_20064 = cljs.core.not.call(null,inst_20063);
var state_20098__$1 = (function (){var statearr_20103 = state_20098;
(statearr_20103[(9)] = inst_20062__$1);

return statearr_20103;
})();
if(inst_20064){
var statearr_20104_20135 = state_20098__$1;
(statearr_20104_20135[(1)] = (5));

} else {
var statearr_20105_20136 = state_20098__$1;
(statearr_20105_20136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (15))){
var inst_20088 = (state_20098[(2)]);
var state_20098__$1 = state_20098;
var statearr_20106_20137 = state_20098__$1;
(statearr_20106_20137[(2)] = inst_20088);

(statearr_20106_20137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (13))){
var state_20098__$1 = state_20098;
var statearr_20107_20138 = state_20098__$1;
(statearr_20107_20138[(2)] = null);

(statearr_20107_20138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (6))){
var inst_20058 = (state_20098[(7)]);
var inst_20083 = inst_20058.length;
var inst_20084 = (inst_20083 > (0));
var state_20098__$1 = state_20098;
if(cljs.core.truth_(inst_20084)){
var statearr_20108_20139 = state_20098__$1;
(statearr_20108_20139[(1)] = (12));

} else {
var statearr_20109_20140 = state_20098__$1;
(statearr_20109_20140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (3))){
var inst_20096 = (state_20098[(2)]);
var state_20098__$1 = state_20098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20098__$1,inst_20096);
} else {
if((state_val_20099 === (12))){
var inst_20058 = (state_20098[(7)]);
var inst_20086 = cljs.core.vec.call(null,inst_20058);
var state_20098__$1 = state_20098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20098__$1,(15),out,inst_20086);
} else {
if((state_val_20099 === (2))){
var state_20098__$1 = state_20098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20098__$1,(4),ch);
} else {
if((state_val_20099 === (11))){
var inst_20066 = (state_20098[(10)]);
var inst_20062 = (state_20098[(9)]);
var inst_20076 = (state_20098[(2)]);
var inst_20077 = [];
var inst_20078 = inst_20077.push(inst_20062);
var inst_20058 = inst_20077;
var inst_20059 = inst_20066;
var state_20098__$1 = (function (){var statearr_20110 = state_20098;
(statearr_20110[(7)] = inst_20058);

(statearr_20110[(11)] = inst_20076);

(statearr_20110[(12)] = inst_20078);

(statearr_20110[(8)] = inst_20059);

return statearr_20110;
})();
var statearr_20111_20141 = state_20098__$1;
(statearr_20111_20141[(2)] = null);

(statearr_20111_20141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (9))){
var inst_20058 = (state_20098[(7)]);
var inst_20074 = cljs.core.vec.call(null,inst_20058);
var state_20098__$1 = state_20098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20098__$1,(11),out,inst_20074);
} else {
if((state_val_20099 === (5))){
var inst_20066 = (state_20098[(10)]);
var inst_20062 = (state_20098[(9)]);
var inst_20059 = (state_20098[(8)]);
var inst_20066__$1 = f.call(null,inst_20062);
var inst_20067 = cljs.core._EQ_.call(null,inst_20066__$1,inst_20059);
var inst_20068 = cljs.core.keyword_identical_QMARK_.call(null,inst_20059,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20069 = (inst_20067) || (inst_20068);
var state_20098__$1 = (function (){var statearr_20112 = state_20098;
(statearr_20112[(10)] = inst_20066__$1);

return statearr_20112;
})();
if(cljs.core.truth_(inst_20069)){
var statearr_20113_20142 = state_20098__$1;
(statearr_20113_20142[(1)] = (8));

} else {
var statearr_20114_20143 = state_20098__$1;
(statearr_20114_20143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (14))){
var inst_20091 = (state_20098[(2)]);
var inst_20092 = cljs.core.async.close_BANG_.call(null,out);
var state_20098__$1 = (function (){var statearr_20116 = state_20098;
(statearr_20116[(13)] = inst_20091);

return statearr_20116;
})();
var statearr_20117_20144 = state_20098__$1;
(statearr_20117_20144[(2)] = inst_20092);

(statearr_20117_20144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (10))){
var inst_20081 = (state_20098[(2)]);
var state_20098__$1 = state_20098;
var statearr_20118_20145 = state_20098__$1;
(statearr_20118_20145[(2)] = inst_20081);

(statearr_20118_20145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20099 === (8))){
var inst_20058 = (state_20098[(7)]);
var inst_20066 = (state_20098[(10)]);
var inst_20062 = (state_20098[(9)]);
var inst_20071 = inst_20058.push(inst_20062);
var tmp20115 = inst_20058;
var inst_20058__$1 = tmp20115;
var inst_20059 = inst_20066;
var state_20098__$1 = (function (){var statearr_20119 = state_20098;
(statearr_20119[(7)] = inst_20058__$1);

(statearr_20119[(14)] = inst_20071);

(statearr_20119[(8)] = inst_20059);

return statearr_20119;
})();
var statearr_20120_20146 = state_20098__$1;
(statearr_20120_20146[(2)] = null);

(statearr_20120_20146[(1)] = (2));


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
});})(c__10260__auto___20132,out))
;
return ((function (switch__10195__auto__,c__10260__auto___20132,out){
return (function() {
var cljs$core$async$state_machine__10196__auto__ = null;
var cljs$core$async$state_machine__10196__auto____0 = (function (){
var statearr_20124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20124[(0)] = cljs$core$async$state_machine__10196__auto__);

(statearr_20124[(1)] = (1));

return statearr_20124;
});
var cljs$core$async$state_machine__10196__auto____1 = (function (state_20098){
while(true){
var ret_value__10197__auto__ = (function (){try{while(true){
var result__10198__auto__ = switch__10195__auto__.call(null,state_20098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10198__auto__;
}
break;
}
}catch (e20125){if((e20125 instanceof Object)){
var ex__10199__auto__ = e20125;
var statearr_20126_20147 = state_20098;
(statearr_20126_20147[(5)] = ex__10199__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10197__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20148 = state_20098;
state_20098 = G__20148;
continue;
} else {
return ret_value__10197__auto__;
}
break;
}
});
cljs$core$async$state_machine__10196__auto__ = function(state_20098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10196__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10196__auto____1.call(this,state_20098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10196__auto____0;
cljs$core$async$state_machine__10196__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10196__auto____1;
return cljs$core$async$state_machine__10196__auto__;
})()
;})(switch__10195__auto__,c__10260__auto___20132,out))
})();
var state__10262__auto__ = (function (){var statearr_20127 = f__10261__auto__.call(null);
(statearr_20127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10260__auto___20132);

return statearr_20127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10262__auto__);
});})(c__10260__auto___20132,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map