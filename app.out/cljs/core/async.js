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
if(typeof cljs.core.async.t_cljs$core$async17453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17453 = (function (fn_handler,f,meta17454){
this.fn_handler = fn_handler;
this.f = f;
this.meta17454 = meta17454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17455,meta17454__$1){
var self__ = this;
var _17455__$1 = this;
return (new cljs.core.async.t_cljs$core$async17453(self__.fn_handler,self__.f,meta17454__$1));
});

cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17455){
var self__ = this;
var _17455__$1 = this;
return self__.meta17454;
});

cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17454","meta17454",1288682459,null)], null);
});

cljs.core.async.t_cljs$core$async17453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17453";

cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17453");
});

cljs.core.async.__GT_t_cljs$core$async17453 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17453(fn_handler__$1,f__$1,meta17454){
return (new cljs.core.async.t_cljs$core$async17453(fn_handler__$1,f__$1,meta17454));
});

}

return (new cljs.core.async.t_cljs$core$async17453(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17458 = [];
var len__6152__auto___17461 = arguments.length;
var i__6153__auto___17462 = (0);
while(true){
if((i__6153__auto___17462 < len__6152__auto___17461)){
args17458.push((arguments[i__6153__auto___17462]));

var G__17463 = (i__6153__auto___17462 + (1));
i__6153__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var G__17460 = args17458.length;
switch (G__17460) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17458.length)].join('')));

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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17465.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17472 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17472);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17472,ret){
return (function (){
return fn1.call(null,val_17472);
});})(val_17472,ret))
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
var args17473 = [];
var len__6152__auto___17476 = arguments.length;
var i__6153__auto___17477 = (0);
while(true){
if((i__6153__auto___17477 < len__6152__auto___17476)){
args17473.push((arguments[i__6153__auto___17477]));

var G__17478 = (i__6153__auto___17477 + (1));
i__6153__auto___17477 = G__17478;
continue;
} else {
}
break;
}

var G__17475 = args17473.length;
switch (G__17475) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17473.length)].join('')));

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
var n__5997__auto___17480 = n;
var x_17481 = (0);
while(true){
if((x_17481 < n__5997__auto___17480)){
(a[x_17481] = (0));

var G__17482 = (x_17481 + (1));
x_17481 = G__17482;
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

var G__17483 = (i + (1));
i = G__17483;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17487 = (function (alt_flag,flag,meta17488){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17488 = meta17488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17489,meta17488__$1){
var self__ = this;
var _17489__$1 = this;
return (new cljs.core.async.t_cljs$core$async17487(self__.alt_flag,self__.flag,meta17488__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17489){
var self__ = this;
var _17489__$1 = this;
return self__.meta17488;
});})(flag))
;

cljs.core.async.t_cljs$core$async17487.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17487.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17488","meta17488",727933823,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17487";

cljs.core.async.t_cljs$core$async17487.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17487");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17487 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17487(alt_flag__$1,flag__$1,meta17488){
return (new cljs.core.async.t_cljs$core$async17487(alt_flag__$1,flag__$1,meta17488));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17487(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17493 = (function (alt_handler,flag,cb,meta17494){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17494 = meta17494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17495,meta17494__$1){
var self__ = this;
var _17495__$1 = this;
return (new cljs.core.async.t_cljs$core$async17493(self__.alt_handler,self__.flag,self__.cb,meta17494__$1));
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17495){
var self__ = this;
var _17495__$1 = this;
return self__.meta17494;
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17494","meta17494",1405818042,null)], null);
});

cljs.core.async.t_cljs$core$async17493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17493";

cljs.core.async.t_cljs$core$async17493.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17493");
});

cljs.core.async.__GT_t_cljs$core$async17493 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17493(alt_handler__$1,flag__$1,cb__$1,meta17494){
return (new cljs.core.async.t_cljs$core$async17493(alt_handler__$1,flag__$1,cb__$1,meta17494));
});

}

return (new cljs.core.async.t_cljs$core$async17493(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17496_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17496_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17497_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17497_SHARP_,port], null));
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
var G__17498 = (i + (1));
i = G__17498;
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
var len__6152__auto___17504 = arguments.length;
var i__6153__auto___17505 = (0);
while(true){
if((i__6153__auto___17505 < len__6152__auto___17504)){
args__6159__auto__.push((arguments[i__6153__auto___17505]));

var G__17506 = (i__6153__auto___17505 + (1));
i__6153__auto___17505 = G__17506;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17501){
var map__17502 = p__17501;
var map__17502__$1 = ((((!((map__17502 == null)))?((((map__17502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17502):map__17502);
var opts = map__17502__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17499){
var G__17500 = cljs.core.first.call(null,seq17499);
var seq17499__$1 = cljs.core.next.call(null,seq17499);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17500,seq17499__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17507 = [];
var len__6152__auto___17557 = arguments.length;
var i__6153__auto___17558 = (0);
while(true){
if((i__6153__auto___17558 < len__6152__auto___17557)){
args17507.push((arguments[i__6153__auto___17558]));

var G__17559 = (i__6153__auto___17558 + (1));
i__6153__auto___17558 = G__17559;
continue;
} else {
}
break;
}

var G__17509 = args17507.length;
switch (G__17509) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17507.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10692__auto___17561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17561){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17561){
return (function (state_17533){
var state_val_17534 = (state_17533[(1)]);
if((state_val_17534 === (7))){
var inst_17529 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
var statearr_17535_17562 = state_17533__$1;
(statearr_17535_17562[(2)] = inst_17529);

(statearr_17535_17562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (1))){
var state_17533__$1 = state_17533;
var statearr_17536_17563 = state_17533__$1;
(statearr_17536_17563[(2)] = null);

(statearr_17536_17563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (4))){
var inst_17512 = (state_17533[(7)]);
var inst_17512__$1 = (state_17533[(2)]);
var inst_17513 = (inst_17512__$1 == null);
var state_17533__$1 = (function (){var statearr_17537 = state_17533;
(statearr_17537[(7)] = inst_17512__$1);

return statearr_17537;
})();
if(cljs.core.truth_(inst_17513)){
var statearr_17538_17564 = state_17533__$1;
(statearr_17538_17564[(1)] = (5));

} else {
var statearr_17539_17565 = state_17533__$1;
(statearr_17539_17565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (13))){
var state_17533__$1 = state_17533;
var statearr_17540_17566 = state_17533__$1;
(statearr_17540_17566[(2)] = null);

(statearr_17540_17566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (6))){
var inst_17512 = (state_17533[(7)]);
var state_17533__$1 = state_17533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17533__$1,(11),to,inst_17512);
} else {
if((state_val_17534 === (3))){
var inst_17531 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17533__$1,inst_17531);
} else {
if((state_val_17534 === (12))){
var state_17533__$1 = state_17533;
var statearr_17541_17567 = state_17533__$1;
(statearr_17541_17567[(2)] = null);

(statearr_17541_17567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (2))){
var state_17533__$1 = state_17533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17533__$1,(4),from);
} else {
if((state_val_17534 === (11))){
var inst_17522 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
if(cljs.core.truth_(inst_17522)){
var statearr_17542_17568 = state_17533__$1;
(statearr_17542_17568[(1)] = (12));

} else {
var statearr_17543_17569 = state_17533__$1;
(statearr_17543_17569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (9))){
var state_17533__$1 = state_17533;
var statearr_17544_17570 = state_17533__$1;
(statearr_17544_17570[(2)] = null);

(statearr_17544_17570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (5))){
var state_17533__$1 = state_17533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17545_17571 = state_17533__$1;
(statearr_17545_17571[(1)] = (8));

} else {
var statearr_17546_17572 = state_17533__$1;
(statearr_17546_17572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (14))){
var inst_17527 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
var statearr_17547_17573 = state_17533__$1;
(statearr_17547_17573[(2)] = inst_17527);

(statearr_17547_17573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (10))){
var inst_17519 = (state_17533[(2)]);
var state_17533__$1 = state_17533;
var statearr_17548_17574 = state_17533__$1;
(statearr_17548_17574[(2)] = inst_17519);

(statearr_17548_17574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17534 === (8))){
var inst_17516 = cljs.core.async.close_BANG_.call(null,to);
var state_17533__$1 = state_17533;
var statearr_17549_17575 = state_17533__$1;
(statearr_17549_17575[(2)] = inst_17516);

(statearr_17549_17575[(1)] = (10));


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
});})(c__10692__auto___17561))
;
return ((function (switch__10627__auto__,c__10692__auto___17561){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_17553 = [null,null,null,null,null,null,null,null];
(statearr_17553[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_17553[(1)] = (1));

return statearr_17553;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_17533){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17554){if((e17554 instanceof Object)){
var ex__10631__auto__ = e17554;
var statearr_17555_17576 = state_17533;
(statearr_17555_17576[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17577 = state_17533;
state_17533 = G__17577;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_17533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_17533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17561))
})();
var state__10694__auto__ = (function (){var statearr_17556 = f__10693__auto__.call(null);
(statearr_17556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17561);

return statearr_17556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17561))
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
return (function (p__17761){
var vec__17762 = p__17761;
var v = cljs.core.nth.call(null,vec__17762,(0),null);
var p = cljs.core.nth.call(null,vec__17762,(1),null);
var job = vec__17762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10692__auto___17944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results){
return (function (state_17767){
var state_val_17768 = (state_17767[(1)]);
if((state_val_17768 === (1))){
var state_17767__$1 = state_17767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17767__$1,(2),res,v);
} else {
if((state_val_17768 === (2))){
var inst_17764 = (state_17767[(2)]);
var inst_17765 = cljs.core.async.close_BANG_.call(null,res);
var state_17767__$1 = (function (){var statearr_17769 = state_17767;
(statearr_17769[(7)] = inst_17764);

return statearr_17769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17767__$1,inst_17765);
} else {
return null;
}
}
});})(c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results))
;
return ((function (switch__10627__auto__,c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17773 = [null,null,null,null,null,null,null,null];
(statearr_17773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17773[(1)] = (1));

return statearr_17773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17767){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17774){if((e17774 instanceof Object)){
var ex__10631__auto__ = e17774;
var statearr_17775_17945 = state_17767;
(statearr_17775_17945[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17946 = state_17767;
state_17767 = G__17946;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results))
})();
var state__10694__auto__ = (function (){var statearr_17776 = f__10693__auto__.call(null);
(statearr_17776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17944);

return statearr_17776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17944,res,vec__17762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17777){
var vec__17778 = p__17777;
var v = cljs.core.nth.call(null,vec__17778,(0),null);
var p = cljs.core.nth.call(null,vec__17778,(1),null);
var job = vec__17778;
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
var n__5997__auto___17947 = n;
var __17948 = (0);
while(true){
if((__17948 < n__5997__auto___17947)){
var G__17779_17949 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17779_17949) {
case "compute":
var c__10692__auto___17951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17948,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (__17948,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function (state_17792){
var state_val_17793 = (state_17792[(1)]);
if((state_val_17793 === (1))){
var state_17792__$1 = state_17792;
var statearr_17794_17952 = state_17792__$1;
(statearr_17794_17952[(2)] = null);

(statearr_17794_17952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (2))){
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17792__$1,(4),jobs);
} else {
if((state_val_17793 === (3))){
var inst_17790 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17792__$1,inst_17790);
} else {
if((state_val_17793 === (4))){
var inst_17782 = (state_17792[(2)]);
var inst_17783 = process.call(null,inst_17782);
var state_17792__$1 = state_17792;
if(cljs.core.truth_(inst_17783)){
var statearr_17795_17953 = state_17792__$1;
(statearr_17795_17953[(1)] = (5));

} else {
var statearr_17796_17954 = state_17792__$1;
(statearr_17796_17954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (5))){
var state_17792__$1 = state_17792;
var statearr_17797_17955 = state_17792__$1;
(statearr_17797_17955[(2)] = null);

(statearr_17797_17955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (6))){
var state_17792__$1 = state_17792;
var statearr_17798_17956 = state_17792__$1;
(statearr_17798_17956[(2)] = null);

(statearr_17798_17956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (7))){
var inst_17788 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
var statearr_17799_17957 = state_17792__$1;
(statearr_17799_17957[(2)] = inst_17788);

(statearr_17799_17957[(1)] = (3));


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
});})(__17948,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
;
return ((function (__17948,switch__10627__auto__,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17803 = [null,null,null,null,null,null,null];
(statearr_17803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17803[(1)] = (1));

return statearr_17803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17792){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17804){if((e17804 instanceof Object)){
var ex__10631__auto__ = e17804;
var statearr_17805_17958 = state_17792;
(statearr_17805_17958[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_17792;
state_17792 = G__17959;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(__17948,switch__10627__auto__,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17806 = f__10693__auto__.call(null);
(statearr_17806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17951);

return statearr_17806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(__17948,c__10692__auto___17951,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
);


break;
case "async":
var c__10692__auto___17960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17948,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (__17948,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function (state_17819){
var state_val_17820 = (state_17819[(1)]);
if((state_val_17820 === (1))){
var state_17819__$1 = state_17819;
var statearr_17821_17961 = state_17819__$1;
(statearr_17821_17961[(2)] = null);

(statearr_17821_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (2))){
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17819__$1,(4),jobs);
} else {
if((state_val_17820 === (3))){
var inst_17817 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17819__$1,inst_17817);
} else {
if((state_val_17820 === (4))){
var inst_17809 = (state_17819[(2)]);
var inst_17810 = async.call(null,inst_17809);
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17810)){
var statearr_17822_17962 = state_17819__$1;
(statearr_17822_17962[(1)] = (5));

} else {
var statearr_17823_17963 = state_17819__$1;
(statearr_17823_17963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (5))){
var state_17819__$1 = state_17819;
var statearr_17824_17964 = state_17819__$1;
(statearr_17824_17964[(2)] = null);

(statearr_17824_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (6))){
var state_17819__$1 = state_17819;
var statearr_17825_17965 = state_17819__$1;
(statearr_17825_17965[(2)] = null);

(statearr_17825_17965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17820 === (7))){
var inst_17815 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17826_17966 = state_17819__$1;
(statearr_17826_17966[(2)] = inst_17815);

(statearr_17826_17966[(1)] = (3));


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
});})(__17948,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
;
return ((function (__17948,switch__10627__auto__,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17830 = [null,null,null,null,null,null,null];
(statearr_17830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17830[(1)] = (1));

return statearr_17830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17819){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17831){if((e17831 instanceof Object)){
var ex__10631__auto__ = e17831;
var statearr_17832_17967 = state_17819;
(statearr_17832_17967[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17968 = state_17819;
state_17819 = G__17968;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(__17948,switch__10627__auto__,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17833 = f__10693__auto__.call(null);
(statearr_17833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17960);

return statearr_17833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(__17948,c__10692__auto___17960,G__17779_17949,n__5997__auto___17947,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17969 = (__17948 + (1));
__17948 = G__17969;
continue;
} else {
}
break;
}

var c__10692__auto___17970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17970,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17970,jobs,results,process,async){
return (function (state_17855){
var state_val_17856 = (state_17855[(1)]);
if((state_val_17856 === (1))){
var state_17855__$1 = state_17855;
var statearr_17857_17971 = state_17855__$1;
(statearr_17857_17971[(2)] = null);

(statearr_17857_17971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (2))){
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17855__$1,(4),from);
} else {
if((state_val_17856 === (3))){
var inst_17853 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17855__$1,inst_17853);
} else {
if((state_val_17856 === (4))){
var inst_17836 = (state_17855[(7)]);
var inst_17836__$1 = (state_17855[(2)]);
var inst_17837 = (inst_17836__$1 == null);
var state_17855__$1 = (function (){var statearr_17858 = state_17855;
(statearr_17858[(7)] = inst_17836__$1);

return statearr_17858;
})();
if(cljs.core.truth_(inst_17837)){
var statearr_17859_17972 = state_17855__$1;
(statearr_17859_17972[(1)] = (5));

} else {
var statearr_17860_17973 = state_17855__$1;
(statearr_17860_17973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (5))){
var inst_17839 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17855__$1 = state_17855;
var statearr_17861_17974 = state_17855__$1;
(statearr_17861_17974[(2)] = inst_17839);

(statearr_17861_17974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (6))){
var inst_17836 = (state_17855[(7)]);
var inst_17841 = (state_17855[(8)]);
var inst_17841__$1 = cljs.core.async.chan.call(null,(1));
var inst_17842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17843 = [inst_17836,inst_17841__$1];
var inst_17844 = (new cljs.core.PersistentVector(null,2,(5),inst_17842,inst_17843,null));
var state_17855__$1 = (function (){var statearr_17862 = state_17855;
(statearr_17862[(8)] = inst_17841__$1);

return statearr_17862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17855__$1,(8),jobs,inst_17844);
} else {
if((state_val_17856 === (7))){
var inst_17851 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17863_17975 = state_17855__$1;
(statearr_17863_17975[(2)] = inst_17851);

(statearr_17863_17975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (8))){
var inst_17841 = (state_17855[(8)]);
var inst_17846 = (state_17855[(2)]);
var state_17855__$1 = (function (){var statearr_17864 = state_17855;
(statearr_17864[(9)] = inst_17846);

return statearr_17864;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17855__$1,(9),results,inst_17841);
} else {
if((state_val_17856 === (9))){
var inst_17848 = (state_17855[(2)]);
var state_17855__$1 = (function (){var statearr_17865 = state_17855;
(statearr_17865[(10)] = inst_17848);

return statearr_17865;
})();
var statearr_17866_17976 = state_17855__$1;
(statearr_17866_17976[(2)] = null);

(statearr_17866_17976[(1)] = (2));


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
});})(c__10692__auto___17970,jobs,results,process,async))
;
return ((function (switch__10627__auto__,c__10692__auto___17970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17870[(1)] = (1));

return statearr_17870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17855){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17871){if((e17871 instanceof Object)){
var ex__10631__auto__ = e17871;
var statearr_17872_17977 = state_17855;
(statearr_17872_17977[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_17855;
state_17855 = G__17978;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17970,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17873 = f__10693__auto__.call(null);
(statearr_17873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17970);

return statearr_17873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17970,jobs,results,process,async))
);


var c__10692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto__,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto__,jobs,results,process,async){
return (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (7))){
var inst_17907 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17913_17979 = state_17911__$1;
(statearr_17913_17979[(2)] = inst_17907);

(statearr_17913_17979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (20))){
var state_17911__$1 = state_17911;
var statearr_17914_17980 = state_17911__$1;
(statearr_17914_17980[(2)] = null);

(statearr_17914_17980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17915_17981 = state_17911__$1;
(statearr_17915_17981[(2)] = null);

(statearr_17915_17981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (4))){
var inst_17876 = (state_17911[(7)]);
var inst_17876__$1 = (state_17911[(2)]);
var inst_17877 = (inst_17876__$1 == null);
var state_17911__$1 = (function (){var statearr_17916 = state_17911;
(statearr_17916[(7)] = inst_17876__$1);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17877)){
var statearr_17917_17982 = state_17911__$1;
(statearr_17917_17982[(1)] = (5));

} else {
var statearr_17918_17983 = state_17911__$1;
(statearr_17918_17983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (15))){
var inst_17889 = (state_17911[(8)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17911__$1,(18),to,inst_17889);
} else {
if((state_val_17912 === (21))){
var inst_17902 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17919_17984 = state_17911__$1;
(statearr_17919_17984[(2)] = inst_17902);

(statearr_17919_17984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (13))){
var inst_17904 = (state_17911[(2)]);
var state_17911__$1 = (function (){var statearr_17920 = state_17911;
(statearr_17920[(9)] = inst_17904);

return statearr_17920;
})();
var statearr_17921_17985 = state_17911__$1;
(statearr_17921_17985[(2)] = null);

(statearr_17921_17985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (6))){
var inst_17876 = (state_17911[(7)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17911__$1,(11),inst_17876);
} else {
if((state_val_17912 === (17))){
var inst_17897 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17897)){
var statearr_17922_17986 = state_17911__$1;
(statearr_17922_17986[(1)] = (19));

} else {
var statearr_17923_17987 = state_17911__$1;
(statearr_17923_17987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (12))){
var inst_17886 = (state_17911[(10)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17911__$1,(14),inst_17886);
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17911__$1,(4),results);
} else {
if((state_val_17912 === (19))){
var state_17911__$1 = state_17911;
var statearr_17924_17988 = state_17911__$1;
(statearr_17924_17988[(2)] = null);

(statearr_17924_17988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (11))){
var inst_17886 = (state_17911[(2)]);
var state_17911__$1 = (function (){var statearr_17925 = state_17911;
(statearr_17925[(10)] = inst_17886);

return statearr_17925;
})();
var statearr_17926_17989 = state_17911__$1;
(statearr_17926_17989[(2)] = null);

(statearr_17926_17989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (9))){
var state_17911__$1 = state_17911;
var statearr_17927_17990 = state_17911__$1;
(statearr_17927_17990[(2)] = null);

(statearr_17927_17990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (5))){
var state_17911__$1 = state_17911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17928_17991 = state_17911__$1;
(statearr_17928_17991[(1)] = (8));

} else {
var statearr_17929_17992 = state_17911__$1;
(statearr_17929_17992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (14))){
var inst_17889 = (state_17911[(8)]);
var inst_17891 = (state_17911[(11)]);
var inst_17889__$1 = (state_17911[(2)]);
var inst_17890 = (inst_17889__$1 == null);
var inst_17891__$1 = cljs.core.not.call(null,inst_17890);
var state_17911__$1 = (function (){var statearr_17930 = state_17911;
(statearr_17930[(8)] = inst_17889__$1);

(statearr_17930[(11)] = inst_17891__$1);

return statearr_17930;
})();
if(inst_17891__$1){
var statearr_17931_17993 = state_17911__$1;
(statearr_17931_17993[(1)] = (15));

} else {
var statearr_17932_17994 = state_17911__$1;
(statearr_17932_17994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (16))){
var inst_17891 = (state_17911[(11)]);
var state_17911__$1 = state_17911;
var statearr_17933_17995 = state_17911__$1;
(statearr_17933_17995[(2)] = inst_17891);

(statearr_17933_17995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (10))){
var inst_17883 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17934_17996 = state_17911__$1;
(statearr_17934_17996[(2)] = inst_17883);

(statearr_17934_17996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (18))){
var inst_17894 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17935_17997 = state_17911__$1;
(statearr_17935_17997[(2)] = inst_17894);

(statearr_17935_17997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17912 === (8))){
var inst_17880 = cljs.core.async.close_BANG_.call(null,to);
var state_17911__$1 = state_17911;
var statearr_17936_17998 = state_17911__$1;
(statearr_17936_17998[(2)] = inst_17880);

(statearr_17936_17998[(1)] = (10));


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
});})(c__10692__auto__,jobs,results,process,async))
;
return ((function (switch__10627__auto__,c__10692__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17940 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17940[(1)] = (1));

return statearr_17940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17911){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17941){if((e17941 instanceof Object)){
var ex__10631__auto__ = e17941;
var statearr_17942_17999 = state_17911;
(statearr_17942_17999[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18000 = state_17911;
state_17911 = G__18000;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17943 = f__10693__auto__.call(null);
(statearr_17943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_17943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto__,jobs,results,process,async))
);

return c__10692__auto__;
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
var args18001 = [];
var len__6152__auto___18004 = arguments.length;
var i__6153__auto___18005 = (0);
while(true){
if((i__6153__auto___18005 < len__6152__auto___18004)){
args18001.push((arguments[i__6153__auto___18005]));

var G__18006 = (i__6153__auto___18005 + (1));
i__6153__auto___18005 = G__18006;
continue;
} else {
}
break;
}

var G__18003 = args18001.length;
switch (G__18003) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18001.length)].join('')));

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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18008.length)].join('')));

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
var args18015 = [];
var len__6152__auto___18068 = arguments.length;
var i__6153__auto___18069 = (0);
while(true){
if((i__6153__auto___18069 < len__6152__auto___18068)){
args18015.push((arguments[i__6153__auto___18069]));

var G__18070 = (i__6153__auto___18069 + (1));
i__6153__auto___18069 = G__18070;
continue;
} else {
}
break;
}

var G__18017 = args18015.length;
switch (G__18017) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18015.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10692__auto___18072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___18072,tc,fc){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___18072,tc,fc){
return (function (state_18043){
var state_val_18044 = (state_18043[(1)]);
if((state_val_18044 === (7))){
var inst_18039 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18045_18073 = state_18043__$1;
(statearr_18045_18073[(2)] = inst_18039);

(statearr_18045_18073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (1))){
var state_18043__$1 = state_18043;
var statearr_18046_18074 = state_18043__$1;
(statearr_18046_18074[(2)] = null);

(statearr_18046_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (4))){
var inst_18020 = (state_18043[(7)]);
var inst_18020__$1 = (state_18043[(2)]);
var inst_18021 = (inst_18020__$1 == null);
var state_18043__$1 = (function (){var statearr_18047 = state_18043;
(statearr_18047[(7)] = inst_18020__$1);

return statearr_18047;
})();
if(cljs.core.truth_(inst_18021)){
var statearr_18048_18075 = state_18043__$1;
(statearr_18048_18075[(1)] = (5));

} else {
var statearr_18049_18076 = state_18043__$1;
(statearr_18049_18076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (13))){
var state_18043__$1 = state_18043;
var statearr_18050_18077 = state_18043__$1;
(statearr_18050_18077[(2)] = null);

(statearr_18050_18077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (6))){
var inst_18020 = (state_18043[(7)]);
var inst_18026 = p.call(null,inst_18020);
var state_18043__$1 = state_18043;
if(cljs.core.truth_(inst_18026)){
var statearr_18051_18078 = state_18043__$1;
(statearr_18051_18078[(1)] = (9));

} else {
var statearr_18052_18079 = state_18043__$1;
(statearr_18052_18079[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (3))){
var inst_18041 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18043__$1,inst_18041);
} else {
if((state_val_18044 === (12))){
var state_18043__$1 = state_18043;
var statearr_18053_18080 = state_18043__$1;
(statearr_18053_18080[(2)] = null);

(statearr_18053_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (2))){
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18043__$1,(4),ch);
} else {
if((state_val_18044 === (11))){
var inst_18020 = (state_18043[(7)]);
var inst_18030 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18043__$1,(8),inst_18030,inst_18020);
} else {
if((state_val_18044 === (9))){
var state_18043__$1 = state_18043;
var statearr_18054_18081 = state_18043__$1;
(statearr_18054_18081[(2)] = tc);

(statearr_18054_18081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (5))){
var inst_18023 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18024 = cljs.core.async.close_BANG_.call(null,fc);
var state_18043__$1 = (function (){var statearr_18055 = state_18043;
(statearr_18055[(8)] = inst_18023);

return statearr_18055;
})();
var statearr_18056_18082 = state_18043__$1;
(statearr_18056_18082[(2)] = inst_18024);

(statearr_18056_18082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (14))){
var inst_18037 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18057_18083 = state_18043__$1;
(statearr_18057_18083[(2)] = inst_18037);

(statearr_18057_18083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (10))){
var state_18043__$1 = state_18043;
var statearr_18058_18084 = state_18043__$1;
(statearr_18058_18084[(2)] = fc);

(statearr_18058_18084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18044 === (8))){
var inst_18032 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
if(cljs.core.truth_(inst_18032)){
var statearr_18059_18085 = state_18043__$1;
(statearr_18059_18085[(1)] = (12));

} else {
var statearr_18060_18086 = state_18043__$1;
(statearr_18060_18086[(1)] = (13));

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
});})(c__10692__auto___18072,tc,fc))
;
return ((function (switch__10627__auto__,c__10692__auto___18072,tc,fc){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_18064 = [null,null,null,null,null,null,null,null,null];
(statearr_18064[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_18064[(1)] = (1));

return statearr_18064;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_18043){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18065){if((e18065 instanceof Object)){
var ex__10631__auto__ = e18065;
var statearr_18066_18087 = state_18043;
(statearr_18066_18087[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18088 = state_18043;
state_18043 = G__18088;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_18043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_18043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___18072,tc,fc))
})();
var state__10694__auto__ = (function (){var statearr_18067 = f__10693__auto__.call(null);
(statearr_18067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___18072);

return statearr_18067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___18072,tc,fc))
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
var c__10692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto__){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto__){
return (function (state_18135){
var state_val_18136 = (state_18135[(1)]);
if((state_val_18136 === (1))){
var inst_18121 = init;
var state_18135__$1 = (function (){var statearr_18137 = state_18135;
(statearr_18137[(7)] = inst_18121);

return statearr_18137;
})();
var statearr_18138_18153 = state_18135__$1;
(statearr_18138_18153[(2)] = null);

(statearr_18138_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18136 === (2))){
var state_18135__$1 = state_18135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18135__$1,(4),ch);
} else {
if((state_val_18136 === (3))){
var inst_18133 = (state_18135[(2)]);
var state_18135__$1 = state_18135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18135__$1,inst_18133);
} else {
if((state_val_18136 === (4))){
var inst_18124 = (state_18135[(8)]);
var inst_18124__$1 = (state_18135[(2)]);
var inst_18125 = (inst_18124__$1 == null);
var state_18135__$1 = (function (){var statearr_18139 = state_18135;
(statearr_18139[(8)] = inst_18124__$1);

return statearr_18139;
})();
if(cljs.core.truth_(inst_18125)){
var statearr_18140_18154 = state_18135__$1;
(statearr_18140_18154[(1)] = (5));

} else {
var statearr_18141_18155 = state_18135__$1;
(statearr_18141_18155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18136 === (5))){
var inst_18121 = (state_18135[(7)]);
var state_18135__$1 = state_18135;
var statearr_18142_18156 = state_18135__$1;
(statearr_18142_18156[(2)] = inst_18121);

(statearr_18142_18156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18136 === (6))){
var inst_18124 = (state_18135[(8)]);
var inst_18121 = (state_18135[(7)]);
var inst_18128 = f.call(null,inst_18121,inst_18124);
var inst_18121__$1 = inst_18128;
var state_18135__$1 = (function (){var statearr_18143 = state_18135;
(statearr_18143[(7)] = inst_18121__$1);

return statearr_18143;
})();
var statearr_18144_18157 = state_18135__$1;
(statearr_18144_18157[(2)] = null);

(statearr_18144_18157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18136 === (7))){
var inst_18131 = (state_18135[(2)]);
var state_18135__$1 = state_18135;
var statearr_18145_18158 = state_18135__$1;
(statearr_18145_18158[(2)] = inst_18131);

(statearr_18145_18158[(1)] = (3));


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
});})(c__10692__auto__))
;
return ((function (switch__10627__auto__,c__10692__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10628__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10628__auto____0 = (function (){
var statearr_18149 = [null,null,null,null,null,null,null,null,null];
(statearr_18149[(0)] = cljs$core$async$reduce_$_state_machine__10628__auto__);

(statearr_18149[(1)] = (1));

return statearr_18149;
});
var cljs$core$async$reduce_$_state_machine__10628__auto____1 = (function (state_18135){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18150){if((e18150 instanceof Object)){
var ex__10631__auto__ = e18150;
var statearr_18151_18159 = state_18135;
(statearr_18151_18159[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18160 = state_18135;
state_18135 = G__18160;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10628__auto__ = function(state_18135){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10628__auto____1.call(this,state_18135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10628__auto____0;
cljs$core$async$reduce_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10628__auto____1;
return cljs$core$async$reduce_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_18152 = f__10693__auto__.call(null);
(statearr_18152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_18152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto__))
);

return c__10692__auto__;
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
var args18161 = [];
var len__6152__auto___18213 = arguments.length;
var i__6153__auto___18214 = (0);
while(true){
if((i__6153__auto___18214 < len__6152__auto___18213)){
args18161.push((arguments[i__6153__auto___18214]));

var G__18215 = (i__6153__auto___18214 + (1));
i__6153__auto___18214 = G__18215;
continue;
} else {
}
break;
}

var G__18163 = args18161.length;
switch (G__18163) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18161.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto__){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto__){
return (function (state_18188){
var state_val_18189 = (state_18188[(1)]);
if((state_val_18189 === (7))){
var inst_18170 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18190_18217 = state_18188__$1;
(statearr_18190_18217[(2)] = inst_18170);

(statearr_18190_18217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (1))){
var inst_18164 = cljs.core.seq.call(null,coll);
var inst_18165 = inst_18164;
var state_18188__$1 = (function (){var statearr_18191 = state_18188;
(statearr_18191[(7)] = inst_18165);

return statearr_18191;
})();
var statearr_18192_18218 = state_18188__$1;
(statearr_18192_18218[(2)] = null);

(statearr_18192_18218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (4))){
var inst_18165 = (state_18188[(7)]);
var inst_18168 = cljs.core.first.call(null,inst_18165);
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18188__$1,(7),ch,inst_18168);
} else {
if((state_val_18189 === (13))){
var inst_18182 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18193_18219 = state_18188__$1;
(statearr_18193_18219[(2)] = inst_18182);

(statearr_18193_18219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (6))){
var inst_18173 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
if(cljs.core.truth_(inst_18173)){
var statearr_18194_18220 = state_18188__$1;
(statearr_18194_18220[(1)] = (8));

} else {
var statearr_18195_18221 = state_18188__$1;
(statearr_18195_18221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (3))){
var inst_18186 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18188__$1,inst_18186);
} else {
if((state_val_18189 === (12))){
var state_18188__$1 = state_18188;
var statearr_18196_18222 = state_18188__$1;
(statearr_18196_18222[(2)] = null);

(statearr_18196_18222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (2))){
var inst_18165 = (state_18188[(7)]);
var state_18188__$1 = state_18188;
if(cljs.core.truth_(inst_18165)){
var statearr_18197_18223 = state_18188__$1;
(statearr_18197_18223[(1)] = (4));

} else {
var statearr_18198_18224 = state_18188__$1;
(statearr_18198_18224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (11))){
var inst_18179 = cljs.core.async.close_BANG_.call(null,ch);
var state_18188__$1 = state_18188;
var statearr_18199_18225 = state_18188__$1;
(statearr_18199_18225[(2)] = inst_18179);

(statearr_18199_18225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (9))){
var state_18188__$1 = state_18188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18200_18226 = state_18188__$1;
(statearr_18200_18226[(1)] = (11));

} else {
var statearr_18201_18227 = state_18188__$1;
(statearr_18201_18227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (5))){
var inst_18165 = (state_18188[(7)]);
var state_18188__$1 = state_18188;
var statearr_18202_18228 = state_18188__$1;
(statearr_18202_18228[(2)] = inst_18165);

(statearr_18202_18228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (10))){
var inst_18184 = (state_18188[(2)]);
var state_18188__$1 = state_18188;
var statearr_18203_18229 = state_18188__$1;
(statearr_18203_18229[(2)] = inst_18184);

(statearr_18203_18229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18189 === (8))){
var inst_18165 = (state_18188[(7)]);
var inst_18175 = cljs.core.next.call(null,inst_18165);
var inst_18165__$1 = inst_18175;
var state_18188__$1 = (function (){var statearr_18204 = state_18188;
(statearr_18204[(7)] = inst_18165__$1);

return statearr_18204;
})();
var statearr_18205_18230 = state_18188__$1;
(statearr_18205_18230[(2)] = null);

(statearr_18205_18230[(1)] = (2));


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
});})(c__10692__auto__))
;
return ((function (switch__10627__auto__,c__10692__auto__){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_18209 = [null,null,null,null,null,null,null,null];
(statearr_18209[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_18209[(1)] = (1));

return statearr_18209;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_18188){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18210){if((e18210 instanceof Object)){
var ex__10631__auto__ = e18210;
var statearr_18211_18231 = state_18188;
(statearr_18211_18231[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18232 = state_18188;
state_18188 = G__18232;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_18188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_18188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_18212 = f__10693__auto__.call(null);
(statearr_18212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_18212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto__))
);

return c__10692__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18454 = (function (mult,ch,cs,meta18455){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18455 = meta18455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18456,meta18455__$1){
var self__ = this;
var _18456__$1 = this;
return (new cljs.core.async.t_cljs$core$async18454(self__.mult,self__.ch,self__.cs,meta18455__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18456){
var self__ = this;
var _18456__$1 = this;
return self__.meta18455;
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18455","meta18455",1706930979,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18454";

cljs.core.async.t_cljs$core$async18454.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18454");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18454 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18454(mult__$1,ch__$1,cs__$1,meta18455){
return (new cljs.core.async.t_cljs$core$async18454(mult__$1,ch__$1,cs__$1,meta18455));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18454(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10692__auto___18675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___18675,cs,m,dchan,dctr,done){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___18675,cs,m,dchan,dctr,done){
return (function (state_18587){
var state_val_18588 = (state_18587[(1)]);
if((state_val_18588 === (7))){
var inst_18583 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18589_18676 = state_18587__$1;
(statearr_18589_18676[(2)] = inst_18583);

(statearr_18589_18676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (20))){
var inst_18488 = (state_18587[(7)]);
var inst_18498 = cljs.core.first.call(null,inst_18488);
var inst_18499 = cljs.core.nth.call(null,inst_18498,(0),null);
var inst_18500 = cljs.core.nth.call(null,inst_18498,(1),null);
var state_18587__$1 = (function (){var statearr_18590 = state_18587;
(statearr_18590[(8)] = inst_18499);

return statearr_18590;
})();
if(cljs.core.truth_(inst_18500)){
var statearr_18591_18677 = state_18587__$1;
(statearr_18591_18677[(1)] = (22));

} else {
var statearr_18592_18678 = state_18587__$1;
(statearr_18592_18678[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (27))){
var inst_18530 = (state_18587[(9)]);
var inst_18535 = (state_18587[(10)]);
var inst_18459 = (state_18587[(11)]);
var inst_18528 = (state_18587[(12)]);
var inst_18535__$1 = cljs.core._nth.call(null,inst_18528,inst_18530);
var inst_18536 = cljs.core.async.put_BANG_.call(null,inst_18535__$1,inst_18459,done);
var state_18587__$1 = (function (){var statearr_18593 = state_18587;
(statearr_18593[(10)] = inst_18535__$1);

return statearr_18593;
})();
if(cljs.core.truth_(inst_18536)){
var statearr_18594_18679 = state_18587__$1;
(statearr_18594_18679[(1)] = (30));

} else {
var statearr_18595_18680 = state_18587__$1;
(statearr_18595_18680[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (1))){
var state_18587__$1 = state_18587;
var statearr_18596_18681 = state_18587__$1;
(statearr_18596_18681[(2)] = null);

(statearr_18596_18681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (24))){
var inst_18488 = (state_18587[(7)]);
var inst_18505 = (state_18587[(2)]);
var inst_18506 = cljs.core.next.call(null,inst_18488);
var inst_18468 = inst_18506;
var inst_18469 = null;
var inst_18470 = (0);
var inst_18471 = (0);
var state_18587__$1 = (function (){var statearr_18597 = state_18587;
(statearr_18597[(13)] = inst_18469);

(statearr_18597[(14)] = inst_18471);

(statearr_18597[(15)] = inst_18468);

(statearr_18597[(16)] = inst_18505);

(statearr_18597[(17)] = inst_18470);

return statearr_18597;
})();
var statearr_18598_18682 = state_18587__$1;
(statearr_18598_18682[(2)] = null);

(statearr_18598_18682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (39))){
var state_18587__$1 = state_18587;
var statearr_18602_18683 = state_18587__$1;
(statearr_18602_18683[(2)] = null);

(statearr_18602_18683[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (4))){
var inst_18459 = (state_18587[(11)]);
var inst_18459__$1 = (state_18587[(2)]);
var inst_18460 = (inst_18459__$1 == null);
var state_18587__$1 = (function (){var statearr_18603 = state_18587;
(statearr_18603[(11)] = inst_18459__$1);

return statearr_18603;
})();
if(cljs.core.truth_(inst_18460)){
var statearr_18604_18684 = state_18587__$1;
(statearr_18604_18684[(1)] = (5));

} else {
var statearr_18605_18685 = state_18587__$1;
(statearr_18605_18685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (15))){
var inst_18469 = (state_18587[(13)]);
var inst_18471 = (state_18587[(14)]);
var inst_18468 = (state_18587[(15)]);
var inst_18470 = (state_18587[(17)]);
var inst_18484 = (state_18587[(2)]);
var inst_18485 = (inst_18471 + (1));
var tmp18599 = inst_18469;
var tmp18600 = inst_18468;
var tmp18601 = inst_18470;
var inst_18468__$1 = tmp18600;
var inst_18469__$1 = tmp18599;
var inst_18470__$1 = tmp18601;
var inst_18471__$1 = inst_18485;
var state_18587__$1 = (function (){var statearr_18606 = state_18587;
(statearr_18606[(18)] = inst_18484);

(statearr_18606[(13)] = inst_18469__$1);

(statearr_18606[(14)] = inst_18471__$1);

(statearr_18606[(15)] = inst_18468__$1);

(statearr_18606[(17)] = inst_18470__$1);

return statearr_18606;
})();
var statearr_18607_18686 = state_18587__$1;
(statearr_18607_18686[(2)] = null);

(statearr_18607_18686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (21))){
var inst_18509 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18611_18687 = state_18587__$1;
(statearr_18611_18687[(2)] = inst_18509);

(statearr_18611_18687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (31))){
var inst_18535 = (state_18587[(10)]);
var inst_18539 = done.call(null,null);
var inst_18540 = cljs.core.async.untap_STAR_.call(null,m,inst_18535);
var state_18587__$1 = (function (){var statearr_18612 = state_18587;
(statearr_18612[(19)] = inst_18539);

return statearr_18612;
})();
var statearr_18613_18688 = state_18587__$1;
(statearr_18613_18688[(2)] = inst_18540);

(statearr_18613_18688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (32))){
var inst_18530 = (state_18587[(9)]);
var inst_18529 = (state_18587[(20)]);
var inst_18527 = (state_18587[(21)]);
var inst_18528 = (state_18587[(12)]);
var inst_18542 = (state_18587[(2)]);
var inst_18543 = (inst_18530 + (1));
var tmp18608 = inst_18529;
var tmp18609 = inst_18527;
var tmp18610 = inst_18528;
var inst_18527__$1 = tmp18609;
var inst_18528__$1 = tmp18610;
var inst_18529__$1 = tmp18608;
var inst_18530__$1 = inst_18543;
var state_18587__$1 = (function (){var statearr_18614 = state_18587;
(statearr_18614[(9)] = inst_18530__$1);

(statearr_18614[(20)] = inst_18529__$1);

(statearr_18614[(21)] = inst_18527__$1);

(statearr_18614[(12)] = inst_18528__$1);

(statearr_18614[(22)] = inst_18542);

return statearr_18614;
})();
var statearr_18615_18689 = state_18587__$1;
(statearr_18615_18689[(2)] = null);

(statearr_18615_18689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (40))){
var inst_18555 = (state_18587[(23)]);
var inst_18559 = done.call(null,null);
var inst_18560 = cljs.core.async.untap_STAR_.call(null,m,inst_18555);
var state_18587__$1 = (function (){var statearr_18616 = state_18587;
(statearr_18616[(24)] = inst_18559);

return statearr_18616;
})();
var statearr_18617_18690 = state_18587__$1;
(statearr_18617_18690[(2)] = inst_18560);

(statearr_18617_18690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (33))){
var inst_18546 = (state_18587[(25)]);
var inst_18548 = cljs.core.chunked_seq_QMARK_.call(null,inst_18546);
var state_18587__$1 = state_18587;
if(inst_18548){
var statearr_18618_18691 = state_18587__$1;
(statearr_18618_18691[(1)] = (36));

} else {
var statearr_18619_18692 = state_18587__$1;
(statearr_18619_18692[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (13))){
var inst_18478 = (state_18587[(26)]);
var inst_18481 = cljs.core.async.close_BANG_.call(null,inst_18478);
var state_18587__$1 = state_18587;
var statearr_18620_18693 = state_18587__$1;
(statearr_18620_18693[(2)] = inst_18481);

(statearr_18620_18693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (22))){
var inst_18499 = (state_18587[(8)]);
var inst_18502 = cljs.core.async.close_BANG_.call(null,inst_18499);
var state_18587__$1 = state_18587;
var statearr_18621_18694 = state_18587__$1;
(statearr_18621_18694[(2)] = inst_18502);

(statearr_18621_18694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (36))){
var inst_18546 = (state_18587[(25)]);
var inst_18550 = cljs.core.chunk_first.call(null,inst_18546);
var inst_18551 = cljs.core.chunk_rest.call(null,inst_18546);
var inst_18552 = cljs.core.count.call(null,inst_18550);
var inst_18527 = inst_18551;
var inst_18528 = inst_18550;
var inst_18529 = inst_18552;
var inst_18530 = (0);
var state_18587__$1 = (function (){var statearr_18622 = state_18587;
(statearr_18622[(9)] = inst_18530);

(statearr_18622[(20)] = inst_18529);

(statearr_18622[(21)] = inst_18527);

(statearr_18622[(12)] = inst_18528);

return statearr_18622;
})();
var statearr_18623_18695 = state_18587__$1;
(statearr_18623_18695[(2)] = null);

(statearr_18623_18695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (41))){
var inst_18546 = (state_18587[(25)]);
var inst_18562 = (state_18587[(2)]);
var inst_18563 = cljs.core.next.call(null,inst_18546);
var inst_18527 = inst_18563;
var inst_18528 = null;
var inst_18529 = (0);
var inst_18530 = (0);
var state_18587__$1 = (function (){var statearr_18624 = state_18587;
(statearr_18624[(9)] = inst_18530);

(statearr_18624[(20)] = inst_18529);

(statearr_18624[(21)] = inst_18527);

(statearr_18624[(27)] = inst_18562);

(statearr_18624[(12)] = inst_18528);

return statearr_18624;
})();
var statearr_18625_18696 = state_18587__$1;
(statearr_18625_18696[(2)] = null);

(statearr_18625_18696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (43))){
var state_18587__$1 = state_18587;
var statearr_18626_18697 = state_18587__$1;
(statearr_18626_18697[(2)] = null);

(statearr_18626_18697[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (29))){
var inst_18571 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18627_18698 = state_18587__$1;
(statearr_18627_18698[(2)] = inst_18571);

(statearr_18627_18698[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (44))){
var inst_18580 = (state_18587[(2)]);
var state_18587__$1 = (function (){var statearr_18628 = state_18587;
(statearr_18628[(28)] = inst_18580);

return statearr_18628;
})();
var statearr_18629_18699 = state_18587__$1;
(statearr_18629_18699[(2)] = null);

(statearr_18629_18699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (6))){
var inst_18519 = (state_18587[(29)]);
var inst_18518 = cljs.core.deref.call(null,cs);
var inst_18519__$1 = cljs.core.keys.call(null,inst_18518);
var inst_18520 = cljs.core.count.call(null,inst_18519__$1);
var inst_18521 = cljs.core.reset_BANG_.call(null,dctr,inst_18520);
var inst_18526 = cljs.core.seq.call(null,inst_18519__$1);
var inst_18527 = inst_18526;
var inst_18528 = null;
var inst_18529 = (0);
var inst_18530 = (0);
var state_18587__$1 = (function (){var statearr_18630 = state_18587;
(statearr_18630[(9)] = inst_18530);

(statearr_18630[(30)] = inst_18521);

(statearr_18630[(20)] = inst_18529);

(statearr_18630[(29)] = inst_18519__$1);

(statearr_18630[(21)] = inst_18527);

(statearr_18630[(12)] = inst_18528);

return statearr_18630;
})();
var statearr_18631_18700 = state_18587__$1;
(statearr_18631_18700[(2)] = null);

(statearr_18631_18700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (28))){
var inst_18546 = (state_18587[(25)]);
var inst_18527 = (state_18587[(21)]);
var inst_18546__$1 = cljs.core.seq.call(null,inst_18527);
var state_18587__$1 = (function (){var statearr_18632 = state_18587;
(statearr_18632[(25)] = inst_18546__$1);

return statearr_18632;
})();
if(inst_18546__$1){
var statearr_18633_18701 = state_18587__$1;
(statearr_18633_18701[(1)] = (33));

} else {
var statearr_18634_18702 = state_18587__$1;
(statearr_18634_18702[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (25))){
var inst_18530 = (state_18587[(9)]);
var inst_18529 = (state_18587[(20)]);
var inst_18532 = (inst_18530 < inst_18529);
var inst_18533 = inst_18532;
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18533)){
var statearr_18635_18703 = state_18587__$1;
(statearr_18635_18703[(1)] = (27));

} else {
var statearr_18636_18704 = state_18587__$1;
(statearr_18636_18704[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (34))){
var state_18587__$1 = state_18587;
var statearr_18637_18705 = state_18587__$1;
(statearr_18637_18705[(2)] = null);

(statearr_18637_18705[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (17))){
var state_18587__$1 = state_18587;
var statearr_18638_18706 = state_18587__$1;
(statearr_18638_18706[(2)] = null);

(statearr_18638_18706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (3))){
var inst_18585 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18587__$1,inst_18585);
} else {
if((state_val_18588 === (12))){
var inst_18514 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18639_18707 = state_18587__$1;
(statearr_18639_18707[(2)] = inst_18514);

(statearr_18639_18707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (2))){
var state_18587__$1 = state_18587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18587__$1,(4),ch);
} else {
if((state_val_18588 === (23))){
var state_18587__$1 = state_18587;
var statearr_18640_18708 = state_18587__$1;
(statearr_18640_18708[(2)] = null);

(statearr_18640_18708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (35))){
var inst_18569 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18641_18709 = state_18587__$1;
(statearr_18641_18709[(2)] = inst_18569);

(statearr_18641_18709[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (19))){
var inst_18488 = (state_18587[(7)]);
var inst_18492 = cljs.core.chunk_first.call(null,inst_18488);
var inst_18493 = cljs.core.chunk_rest.call(null,inst_18488);
var inst_18494 = cljs.core.count.call(null,inst_18492);
var inst_18468 = inst_18493;
var inst_18469 = inst_18492;
var inst_18470 = inst_18494;
var inst_18471 = (0);
var state_18587__$1 = (function (){var statearr_18642 = state_18587;
(statearr_18642[(13)] = inst_18469);

(statearr_18642[(14)] = inst_18471);

(statearr_18642[(15)] = inst_18468);

(statearr_18642[(17)] = inst_18470);

return statearr_18642;
})();
var statearr_18643_18710 = state_18587__$1;
(statearr_18643_18710[(2)] = null);

(statearr_18643_18710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (11))){
var inst_18488 = (state_18587[(7)]);
var inst_18468 = (state_18587[(15)]);
var inst_18488__$1 = cljs.core.seq.call(null,inst_18468);
var state_18587__$1 = (function (){var statearr_18644 = state_18587;
(statearr_18644[(7)] = inst_18488__$1);

return statearr_18644;
})();
if(inst_18488__$1){
var statearr_18645_18711 = state_18587__$1;
(statearr_18645_18711[(1)] = (16));

} else {
var statearr_18646_18712 = state_18587__$1;
(statearr_18646_18712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (9))){
var inst_18516 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18647_18713 = state_18587__$1;
(statearr_18647_18713[(2)] = inst_18516);

(statearr_18647_18713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (5))){
var inst_18466 = cljs.core.deref.call(null,cs);
var inst_18467 = cljs.core.seq.call(null,inst_18466);
var inst_18468 = inst_18467;
var inst_18469 = null;
var inst_18470 = (0);
var inst_18471 = (0);
var state_18587__$1 = (function (){var statearr_18648 = state_18587;
(statearr_18648[(13)] = inst_18469);

(statearr_18648[(14)] = inst_18471);

(statearr_18648[(15)] = inst_18468);

(statearr_18648[(17)] = inst_18470);

return statearr_18648;
})();
var statearr_18649_18714 = state_18587__$1;
(statearr_18649_18714[(2)] = null);

(statearr_18649_18714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (14))){
var state_18587__$1 = state_18587;
var statearr_18650_18715 = state_18587__$1;
(statearr_18650_18715[(2)] = null);

(statearr_18650_18715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (45))){
var inst_18577 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18651_18716 = state_18587__$1;
(statearr_18651_18716[(2)] = inst_18577);

(statearr_18651_18716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (26))){
var inst_18519 = (state_18587[(29)]);
var inst_18573 = (state_18587[(2)]);
var inst_18574 = cljs.core.seq.call(null,inst_18519);
var state_18587__$1 = (function (){var statearr_18652 = state_18587;
(statearr_18652[(31)] = inst_18573);

return statearr_18652;
})();
if(inst_18574){
var statearr_18653_18717 = state_18587__$1;
(statearr_18653_18717[(1)] = (42));

} else {
var statearr_18654_18718 = state_18587__$1;
(statearr_18654_18718[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (16))){
var inst_18488 = (state_18587[(7)]);
var inst_18490 = cljs.core.chunked_seq_QMARK_.call(null,inst_18488);
var state_18587__$1 = state_18587;
if(inst_18490){
var statearr_18655_18719 = state_18587__$1;
(statearr_18655_18719[(1)] = (19));

} else {
var statearr_18656_18720 = state_18587__$1;
(statearr_18656_18720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (38))){
var inst_18566 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18657_18721 = state_18587__$1;
(statearr_18657_18721[(2)] = inst_18566);

(statearr_18657_18721[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (30))){
var state_18587__$1 = state_18587;
var statearr_18658_18722 = state_18587__$1;
(statearr_18658_18722[(2)] = null);

(statearr_18658_18722[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (10))){
var inst_18469 = (state_18587[(13)]);
var inst_18471 = (state_18587[(14)]);
var inst_18477 = cljs.core._nth.call(null,inst_18469,inst_18471);
var inst_18478 = cljs.core.nth.call(null,inst_18477,(0),null);
var inst_18479 = cljs.core.nth.call(null,inst_18477,(1),null);
var state_18587__$1 = (function (){var statearr_18659 = state_18587;
(statearr_18659[(26)] = inst_18478);

return statearr_18659;
})();
if(cljs.core.truth_(inst_18479)){
var statearr_18660_18723 = state_18587__$1;
(statearr_18660_18723[(1)] = (13));

} else {
var statearr_18661_18724 = state_18587__$1;
(statearr_18661_18724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (18))){
var inst_18512 = (state_18587[(2)]);
var state_18587__$1 = state_18587;
var statearr_18662_18725 = state_18587__$1;
(statearr_18662_18725[(2)] = inst_18512);

(statearr_18662_18725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (42))){
var state_18587__$1 = state_18587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18587__$1,(45),dchan);
} else {
if((state_val_18588 === (37))){
var inst_18546 = (state_18587[(25)]);
var inst_18459 = (state_18587[(11)]);
var inst_18555 = (state_18587[(23)]);
var inst_18555__$1 = cljs.core.first.call(null,inst_18546);
var inst_18556 = cljs.core.async.put_BANG_.call(null,inst_18555__$1,inst_18459,done);
var state_18587__$1 = (function (){var statearr_18663 = state_18587;
(statearr_18663[(23)] = inst_18555__$1);

return statearr_18663;
})();
if(cljs.core.truth_(inst_18556)){
var statearr_18664_18726 = state_18587__$1;
(statearr_18664_18726[(1)] = (39));

} else {
var statearr_18665_18727 = state_18587__$1;
(statearr_18665_18727[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18588 === (8))){
var inst_18471 = (state_18587[(14)]);
var inst_18470 = (state_18587[(17)]);
var inst_18473 = (inst_18471 < inst_18470);
var inst_18474 = inst_18473;
var state_18587__$1 = state_18587;
if(cljs.core.truth_(inst_18474)){
var statearr_18666_18728 = state_18587__$1;
(statearr_18666_18728[(1)] = (10));

} else {
var statearr_18667_18729 = state_18587__$1;
(statearr_18667_18729[(1)] = (11));

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
});})(c__10692__auto___18675,cs,m,dchan,dctr,done))
;
return ((function (switch__10627__auto__,c__10692__auto___18675,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10628__auto__ = null;
var cljs$core$async$mult_$_state_machine__10628__auto____0 = (function (){
var statearr_18671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18671[(0)] = cljs$core$async$mult_$_state_machine__10628__auto__);

(statearr_18671[(1)] = (1));

return statearr_18671;
});
var cljs$core$async$mult_$_state_machine__10628__auto____1 = (function (state_18587){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18672){if((e18672 instanceof Object)){
var ex__10631__auto__ = e18672;
var statearr_18673_18730 = state_18587;
(statearr_18673_18730[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18731 = state_18587;
state_18587 = G__18731;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10628__auto__ = function(state_18587){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10628__auto____1.call(this,state_18587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10628__auto____0;
cljs$core$async$mult_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10628__auto____1;
return cljs$core$async$mult_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___18675,cs,m,dchan,dctr,done))
})();
var state__10694__auto__ = (function (){var statearr_18674 = f__10693__auto__.call(null);
(statearr_18674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___18675);

return statearr_18674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___18675,cs,m,dchan,dctr,done))
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
var args18732 = [];
var len__6152__auto___18735 = arguments.length;
var i__6153__auto___18736 = (0);
while(true){
if((i__6153__auto___18736 < len__6152__auto___18735)){
args18732.push((arguments[i__6153__auto___18736]));

var G__18737 = (i__6153__auto___18736 + (1));
i__6153__auto___18736 = G__18737;
continue;
} else {
}
break;
}

var G__18734 = args18732.length;
switch (G__18734) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18732.length)].join('')));

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
var len__6152__auto___18749 = arguments.length;
var i__6153__auto___18750 = (0);
while(true){
if((i__6153__auto___18750 < len__6152__auto___18749)){
args__6159__auto__.push((arguments[i__6153__auto___18750]));

var G__18751 = (i__6153__auto___18750 + (1));
i__6153__auto___18750 = G__18751;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18743){
var map__18744 = p__18743;
var map__18744__$1 = ((((!((map__18744 == null)))?((((map__18744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18744):map__18744);
var opts = map__18744__$1;
var statearr_18746_18752 = state;
(statearr_18746_18752[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18744,map__18744__$1,opts){
return (function (val){
var statearr_18747_18753 = state;
(statearr_18747_18753[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18744,map__18744__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18748_18754 = state;
(statearr_18748_18754[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18739){
var G__18740 = cljs.core.first.call(null,seq18739);
var seq18739__$1 = cljs.core.next.call(null,seq18739);
var G__18741 = cljs.core.first.call(null,seq18739__$1);
var seq18739__$2 = cljs.core.next.call(null,seq18739__$1);
var G__18742 = cljs.core.first.call(null,seq18739__$2);
var seq18739__$3 = cljs.core.next.call(null,seq18739__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18740,G__18741,G__18742,seq18739__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18918 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18919){
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
this.meta18919 = meta18919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18920,meta18919__$1){
var self__ = this;
var _18920__$1 = this;
return (new cljs.core.async.t_cljs$core$async18918(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18919__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18920){
var self__ = this;
var _18920__$1 = this;
return self__.meta18919;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18918.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18919","meta18919",1824051586,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18918";

cljs.core.async.t_cljs$core$async18918.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18918");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18918 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18918(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18919){
return (new cljs.core.async.t_cljs$core$async18918(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18919));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18918(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10692__auto___19081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19018){
var state_val_19019 = (state_19018[(1)]);
if((state_val_19019 === (7))){
var inst_18936 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19020_19082 = state_19018__$1;
(statearr_19020_19082[(2)] = inst_18936);

(statearr_19020_19082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (20))){
var inst_18948 = (state_19018[(7)]);
var state_19018__$1 = state_19018;
var statearr_19021_19083 = state_19018__$1;
(statearr_19021_19083[(2)] = inst_18948);

(statearr_19021_19083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (27))){
var state_19018__$1 = state_19018;
var statearr_19022_19084 = state_19018__$1;
(statearr_19022_19084[(2)] = null);

(statearr_19022_19084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (1))){
var inst_18924 = (state_19018[(8)]);
var inst_18924__$1 = calc_state.call(null);
var inst_18926 = (inst_18924__$1 == null);
var inst_18927 = cljs.core.not.call(null,inst_18926);
var state_19018__$1 = (function (){var statearr_19023 = state_19018;
(statearr_19023[(8)] = inst_18924__$1);

return statearr_19023;
})();
if(inst_18927){
var statearr_19024_19085 = state_19018__$1;
(statearr_19024_19085[(1)] = (2));

} else {
var statearr_19025_19086 = state_19018__$1;
(statearr_19025_19086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (24))){
var inst_18971 = (state_19018[(9)]);
var inst_18978 = (state_19018[(10)]);
var inst_18992 = (state_19018[(11)]);
var inst_18992__$1 = inst_18971.call(null,inst_18978);
var state_19018__$1 = (function (){var statearr_19026 = state_19018;
(statearr_19026[(11)] = inst_18992__$1);

return statearr_19026;
})();
if(cljs.core.truth_(inst_18992__$1)){
var statearr_19027_19087 = state_19018__$1;
(statearr_19027_19087[(1)] = (29));

} else {
var statearr_19028_19088 = state_19018__$1;
(statearr_19028_19088[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (4))){
var inst_18939 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18939)){
var statearr_19029_19089 = state_19018__$1;
(statearr_19029_19089[(1)] = (8));

} else {
var statearr_19030_19090 = state_19018__$1;
(statearr_19030_19090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (15))){
var inst_18965 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18965)){
var statearr_19031_19091 = state_19018__$1;
(statearr_19031_19091[(1)] = (19));

} else {
var statearr_19032_19092 = state_19018__$1;
(statearr_19032_19092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (21))){
var inst_18970 = (state_19018[(12)]);
var inst_18970__$1 = (state_19018[(2)]);
var inst_18971 = cljs.core.get.call(null,inst_18970__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18972 = cljs.core.get.call(null,inst_18970__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18973 = cljs.core.get.call(null,inst_18970__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19018__$1 = (function (){var statearr_19033 = state_19018;
(statearr_19033[(13)] = inst_18972);

(statearr_19033[(12)] = inst_18970__$1);

(statearr_19033[(9)] = inst_18971);

return statearr_19033;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19018__$1,(22),inst_18973);
} else {
if((state_val_19019 === (31))){
var inst_19000 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_19000)){
var statearr_19034_19093 = state_19018__$1;
(statearr_19034_19093[(1)] = (32));

} else {
var statearr_19035_19094 = state_19018__$1;
(statearr_19035_19094[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (32))){
var inst_18977 = (state_19018[(14)]);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19018__$1,(35),out,inst_18977);
} else {
if((state_val_19019 === (33))){
var inst_18970 = (state_19018[(12)]);
var inst_18948 = inst_18970;
var state_19018__$1 = (function (){var statearr_19036 = state_19018;
(statearr_19036[(7)] = inst_18948);

return statearr_19036;
})();
var statearr_19037_19095 = state_19018__$1;
(statearr_19037_19095[(2)] = null);

(statearr_19037_19095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (13))){
var inst_18948 = (state_19018[(7)]);
var inst_18955 = inst_18948.cljs$lang$protocol_mask$partition0$;
var inst_18956 = (inst_18955 & (64));
var inst_18957 = inst_18948.cljs$core$ISeq$;
var inst_18958 = (inst_18956) || (inst_18957);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18958)){
var statearr_19038_19096 = state_19018__$1;
(statearr_19038_19096[(1)] = (16));

} else {
var statearr_19039_19097 = state_19018__$1;
(statearr_19039_19097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (22))){
var inst_18977 = (state_19018[(14)]);
var inst_18978 = (state_19018[(10)]);
var inst_18976 = (state_19018[(2)]);
var inst_18977__$1 = cljs.core.nth.call(null,inst_18976,(0),null);
var inst_18978__$1 = cljs.core.nth.call(null,inst_18976,(1),null);
var inst_18979 = (inst_18977__$1 == null);
var inst_18980 = cljs.core._EQ_.call(null,inst_18978__$1,change);
var inst_18981 = (inst_18979) || (inst_18980);
var state_19018__$1 = (function (){var statearr_19040 = state_19018;
(statearr_19040[(14)] = inst_18977__$1);

(statearr_19040[(10)] = inst_18978__$1);

return statearr_19040;
})();
if(cljs.core.truth_(inst_18981)){
var statearr_19041_19098 = state_19018__$1;
(statearr_19041_19098[(1)] = (23));

} else {
var statearr_19042_19099 = state_19018__$1;
(statearr_19042_19099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (36))){
var inst_18970 = (state_19018[(12)]);
var inst_18948 = inst_18970;
var state_19018__$1 = (function (){var statearr_19043 = state_19018;
(statearr_19043[(7)] = inst_18948);

return statearr_19043;
})();
var statearr_19044_19100 = state_19018__$1;
(statearr_19044_19100[(2)] = null);

(statearr_19044_19100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (29))){
var inst_18992 = (state_19018[(11)]);
var state_19018__$1 = state_19018;
var statearr_19045_19101 = state_19018__$1;
(statearr_19045_19101[(2)] = inst_18992);

(statearr_19045_19101[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (6))){
var state_19018__$1 = state_19018;
var statearr_19046_19102 = state_19018__$1;
(statearr_19046_19102[(2)] = false);

(statearr_19046_19102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (28))){
var inst_18988 = (state_19018[(2)]);
var inst_18989 = calc_state.call(null);
var inst_18948 = inst_18989;
var state_19018__$1 = (function (){var statearr_19047 = state_19018;
(statearr_19047[(7)] = inst_18948);

(statearr_19047[(15)] = inst_18988);

return statearr_19047;
})();
var statearr_19048_19103 = state_19018__$1;
(statearr_19048_19103[(2)] = null);

(statearr_19048_19103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (25))){
var inst_19014 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19049_19104 = state_19018__$1;
(statearr_19049_19104[(2)] = inst_19014);

(statearr_19049_19104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (34))){
var inst_19012 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19050_19105 = state_19018__$1;
(statearr_19050_19105[(2)] = inst_19012);

(statearr_19050_19105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (17))){
var state_19018__$1 = state_19018;
var statearr_19051_19106 = state_19018__$1;
(statearr_19051_19106[(2)] = false);

(statearr_19051_19106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (3))){
var state_19018__$1 = state_19018;
var statearr_19052_19107 = state_19018__$1;
(statearr_19052_19107[(2)] = false);

(statearr_19052_19107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (12))){
var inst_19016 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19018__$1,inst_19016);
} else {
if((state_val_19019 === (2))){
var inst_18924 = (state_19018[(8)]);
var inst_18929 = inst_18924.cljs$lang$protocol_mask$partition0$;
var inst_18930 = (inst_18929 & (64));
var inst_18931 = inst_18924.cljs$core$ISeq$;
var inst_18932 = (inst_18930) || (inst_18931);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18932)){
var statearr_19053_19108 = state_19018__$1;
(statearr_19053_19108[(1)] = (5));

} else {
var statearr_19054_19109 = state_19018__$1;
(statearr_19054_19109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (23))){
var inst_18977 = (state_19018[(14)]);
var inst_18983 = (inst_18977 == null);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18983)){
var statearr_19055_19110 = state_19018__$1;
(statearr_19055_19110[(1)] = (26));

} else {
var statearr_19056_19111 = state_19018__$1;
(statearr_19056_19111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (35))){
var inst_19003 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_19003)){
var statearr_19057_19112 = state_19018__$1;
(statearr_19057_19112[(1)] = (36));

} else {
var statearr_19058_19113 = state_19018__$1;
(statearr_19058_19113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (19))){
var inst_18948 = (state_19018[(7)]);
var inst_18967 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18948);
var state_19018__$1 = state_19018;
var statearr_19059_19114 = state_19018__$1;
(statearr_19059_19114[(2)] = inst_18967);

(statearr_19059_19114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (11))){
var inst_18948 = (state_19018[(7)]);
var inst_18952 = (inst_18948 == null);
var inst_18953 = cljs.core.not.call(null,inst_18952);
var state_19018__$1 = state_19018;
if(inst_18953){
var statearr_19060_19115 = state_19018__$1;
(statearr_19060_19115[(1)] = (13));

} else {
var statearr_19061_19116 = state_19018__$1;
(statearr_19061_19116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (9))){
var inst_18924 = (state_19018[(8)]);
var state_19018__$1 = state_19018;
var statearr_19062_19117 = state_19018__$1;
(statearr_19062_19117[(2)] = inst_18924);

(statearr_19062_19117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (5))){
var state_19018__$1 = state_19018;
var statearr_19063_19118 = state_19018__$1;
(statearr_19063_19118[(2)] = true);

(statearr_19063_19118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (14))){
var state_19018__$1 = state_19018;
var statearr_19064_19119 = state_19018__$1;
(statearr_19064_19119[(2)] = false);

(statearr_19064_19119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (26))){
var inst_18978 = (state_19018[(10)]);
var inst_18985 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18978);
var state_19018__$1 = state_19018;
var statearr_19065_19120 = state_19018__$1;
(statearr_19065_19120[(2)] = inst_18985);

(statearr_19065_19120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (16))){
var state_19018__$1 = state_19018;
var statearr_19066_19121 = state_19018__$1;
(statearr_19066_19121[(2)] = true);

(statearr_19066_19121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (38))){
var inst_19008 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19067_19122 = state_19018__$1;
(statearr_19067_19122[(2)] = inst_19008);

(statearr_19067_19122[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (30))){
var inst_18972 = (state_19018[(13)]);
var inst_18971 = (state_19018[(9)]);
var inst_18978 = (state_19018[(10)]);
var inst_18995 = cljs.core.empty_QMARK_.call(null,inst_18971);
var inst_18996 = inst_18972.call(null,inst_18978);
var inst_18997 = cljs.core.not.call(null,inst_18996);
var inst_18998 = (inst_18995) && (inst_18997);
var state_19018__$1 = state_19018;
var statearr_19068_19123 = state_19018__$1;
(statearr_19068_19123[(2)] = inst_18998);

(statearr_19068_19123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (10))){
var inst_18924 = (state_19018[(8)]);
var inst_18944 = (state_19018[(2)]);
var inst_18945 = cljs.core.get.call(null,inst_18944,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18946 = cljs.core.get.call(null,inst_18944,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18947 = cljs.core.get.call(null,inst_18944,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18948 = inst_18924;
var state_19018__$1 = (function (){var statearr_19069 = state_19018;
(statearr_19069[(7)] = inst_18948);

(statearr_19069[(16)] = inst_18946);

(statearr_19069[(17)] = inst_18945);

(statearr_19069[(18)] = inst_18947);

return statearr_19069;
})();
var statearr_19070_19124 = state_19018__$1;
(statearr_19070_19124[(2)] = null);

(statearr_19070_19124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (18))){
var inst_18962 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19071_19125 = state_19018__$1;
(statearr_19071_19125[(2)] = inst_18962);

(statearr_19071_19125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (37))){
var state_19018__$1 = state_19018;
var statearr_19072_19126 = state_19018__$1;
(statearr_19072_19126[(2)] = null);

(statearr_19072_19126[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (8))){
var inst_18924 = (state_19018[(8)]);
var inst_18941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18924);
var state_19018__$1 = state_19018;
var statearr_19073_19127 = state_19018__$1;
(statearr_19073_19127[(2)] = inst_18941);

(statearr_19073_19127[(1)] = (10));


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
});})(c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10627__auto__,c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10628__auto__ = null;
var cljs$core$async$mix_$_state_machine__10628__auto____0 = (function (){
var statearr_19077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19077[(0)] = cljs$core$async$mix_$_state_machine__10628__auto__);

(statearr_19077[(1)] = (1));

return statearr_19077;
});
var cljs$core$async$mix_$_state_machine__10628__auto____1 = (function (state_19018){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19078){if((e19078 instanceof Object)){
var ex__10631__auto__ = e19078;
var statearr_19079_19128 = state_19018;
(statearr_19079_19128[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19129 = state_19018;
state_19018 = G__19129;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10628__auto__ = function(state_19018){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10628__auto____1.call(this,state_19018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10628__auto____0;
cljs$core$async$mix_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10628__auto____1;
return cljs$core$async$mix_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10694__auto__ = (function (){var statearr_19080 = f__10693__auto__.call(null);
(statearr_19080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19081);

return statearr_19080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19081,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19130 = [];
var len__6152__auto___19133 = arguments.length;
var i__6153__auto___19134 = (0);
while(true){
if((i__6153__auto___19134 < len__6152__auto___19133)){
args19130.push((arguments[i__6153__auto___19134]));

var G__19135 = (i__6153__auto___19134 + (1));
i__6153__auto___19134 = G__19135;
continue;
} else {
}
break;
}

var G__19132 = args19130.length;
switch (G__19132) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19130.length)].join('')));

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
var args19138 = [];
var len__6152__auto___19263 = arguments.length;
var i__6153__auto___19264 = (0);
while(true){
if((i__6153__auto___19264 < len__6152__auto___19263)){
args19138.push((arguments[i__6153__auto___19264]));

var G__19265 = (i__6153__auto___19264 + (1));
i__6153__auto___19264 = G__19265;
continue;
} else {
}
break;
}

var G__19140 = args19138.length;
switch (G__19140) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19138.length)].join('')));

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
return (function (p1__19137_SHARP_){
if(cljs.core.truth_(p1__19137_SHARP_.call(null,topic))){
return p1__19137_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19137_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19141 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19142){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19142 = meta19142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19143,meta19142__$1){
var self__ = this;
var _19143__$1 = this;
return (new cljs.core.async.t_cljs$core$async19141(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19142__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19143){
var self__ = this;
var _19143__$1 = this;
return self__.meta19142;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19142","meta19142",1225279326,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19141";

cljs.core.async.t_cljs$core$async19141.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19141");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19141 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19142){
return (new cljs.core.async.t_cljs$core$async19141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19142));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19141(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10692__auto___19267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19267,mults,ensure_mult,p){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19267,mults,ensure_mult,p){
return (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (7))){
var inst_19211 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19217_19268 = state_19215__$1;
(statearr_19217_19268[(2)] = inst_19211);

(statearr_19217_19268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (20))){
var state_19215__$1 = state_19215;
var statearr_19218_19269 = state_19215__$1;
(statearr_19218_19269[(2)] = null);

(statearr_19218_19269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (1))){
var state_19215__$1 = state_19215;
var statearr_19219_19270 = state_19215__$1;
(statearr_19219_19270[(2)] = null);

(statearr_19219_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (24))){
var inst_19194 = (state_19215[(7)]);
var inst_19203 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19194);
var state_19215__$1 = state_19215;
var statearr_19220_19271 = state_19215__$1;
(statearr_19220_19271[(2)] = inst_19203);

(statearr_19220_19271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (4))){
var inst_19146 = (state_19215[(8)]);
var inst_19146__$1 = (state_19215[(2)]);
var inst_19147 = (inst_19146__$1 == null);
var state_19215__$1 = (function (){var statearr_19221 = state_19215;
(statearr_19221[(8)] = inst_19146__$1);

return statearr_19221;
})();
if(cljs.core.truth_(inst_19147)){
var statearr_19222_19272 = state_19215__$1;
(statearr_19222_19272[(1)] = (5));

} else {
var statearr_19223_19273 = state_19215__$1;
(statearr_19223_19273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (15))){
var inst_19188 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19224_19274 = state_19215__$1;
(statearr_19224_19274[(2)] = inst_19188);

(statearr_19224_19274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (21))){
var inst_19208 = (state_19215[(2)]);
var state_19215__$1 = (function (){var statearr_19225 = state_19215;
(statearr_19225[(9)] = inst_19208);

return statearr_19225;
})();
var statearr_19226_19275 = state_19215__$1;
(statearr_19226_19275[(2)] = null);

(statearr_19226_19275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (13))){
var inst_19170 = (state_19215[(10)]);
var inst_19172 = cljs.core.chunked_seq_QMARK_.call(null,inst_19170);
var state_19215__$1 = state_19215;
if(inst_19172){
var statearr_19227_19276 = state_19215__$1;
(statearr_19227_19276[(1)] = (16));

} else {
var statearr_19228_19277 = state_19215__$1;
(statearr_19228_19277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (22))){
var inst_19200 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
if(cljs.core.truth_(inst_19200)){
var statearr_19229_19278 = state_19215__$1;
(statearr_19229_19278[(1)] = (23));

} else {
var statearr_19230_19279 = state_19215__$1;
(statearr_19230_19279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (6))){
var inst_19146 = (state_19215[(8)]);
var inst_19194 = (state_19215[(7)]);
var inst_19196 = (state_19215[(11)]);
var inst_19194__$1 = topic_fn.call(null,inst_19146);
var inst_19195 = cljs.core.deref.call(null,mults);
var inst_19196__$1 = cljs.core.get.call(null,inst_19195,inst_19194__$1);
var state_19215__$1 = (function (){var statearr_19231 = state_19215;
(statearr_19231[(7)] = inst_19194__$1);

(statearr_19231[(11)] = inst_19196__$1);

return statearr_19231;
})();
if(cljs.core.truth_(inst_19196__$1)){
var statearr_19232_19280 = state_19215__$1;
(statearr_19232_19280[(1)] = (19));

} else {
var statearr_19233_19281 = state_19215__$1;
(statearr_19233_19281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (25))){
var inst_19205 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19234_19282 = state_19215__$1;
(statearr_19234_19282[(2)] = inst_19205);

(statearr_19234_19282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (17))){
var inst_19170 = (state_19215[(10)]);
var inst_19179 = cljs.core.first.call(null,inst_19170);
var inst_19180 = cljs.core.async.muxch_STAR_.call(null,inst_19179);
var inst_19181 = cljs.core.async.close_BANG_.call(null,inst_19180);
var inst_19182 = cljs.core.next.call(null,inst_19170);
var inst_19156 = inst_19182;
var inst_19157 = null;
var inst_19158 = (0);
var inst_19159 = (0);
var state_19215__$1 = (function (){var statearr_19235 = state_19215;
(statearr_19235[(12)] = inst_19159);

(statearr_19235[(13)] = inst_19181);

(statearr_19235[(14)] = inst_19157);

(statearr_19235[(15)] = inst_19158);

(statearr_19235[(16)] = inst_19156);

return statearr_19235;
})();
var statearr_19236_19283 = state_19215__$1;
(statearr_19236_19283[(2)] = null);

(statearr_19236_19283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (3))){
var inst_19213 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19215__$1,inst_19213);
} else {
if((state_val_19216 === (12))){
var inst_19190 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19237_19284 = state_19215__$1;
(statearr_19237_19284[(2)] = inst_19190);

(statearr_19237_19284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (2))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19215__$1,(4),ch);
} else {
if((state_val_19216 === (23))){
var state_19215__$1 = state_19215;
var statearr_19238_19285 = state_19215__$1;
(statearr_19238_19285[(2)] = null);

(statearr_19238_19285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (19))){
var inst_19146 = (state_19215[(8)]);
var inst_19196 = (state_19215[(11)]);
var inst_19198 = cljs.core.async.muxch_STAR_.call(null,inst_19196);
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19215__$1,(22),inst_19198,inst_19146);
} else {
if((state_val_19216 === (11))){
var inst_19170 = (state_19215[(10)]);
var inst_19156 = (state_19215[(16)]);
var inst_19170__$1 = cljs.core.seq.call(null,inst_19156);
var state_19215__$1 = (function (){var statearr_19239 = state_19215;
(statearr_19239[(10)] = inst_19170__$1);

return statearr_19239;
})();
if(inst_19170__$1){
var statearr_19240_19286 = state_19215__$1;
(statearr_19240_19286[(1)] = (13));

} else {
var statearr_19241_19287 = state_19215__$1;
(statearr_19241_19287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (9))){
var inst_19192 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19242_19288 = state_19215__$1;
(statearr_19242_19288[(2)] = inst_19192);

(statearr_19242_19288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (5))){
var inst_19153 = cljs.core.deref.call(null,mults);
var inst_19154 = cljs.core.vals.call(null,inst_19153);
var inst_19155 = cljs.core.seq.call(null,inst_19154);
var inst_19156 = inst_19155;
var inst_19157 = null;
var inst_19158 = (0);
var inst_19159 = (0);
var state_19215__$1 = (function (){var statearr_19243 = state_19215;
(statearr_19243[(12)] = inst_19159);

(statearr_19243[(14)] = inst_19157);

(statearr_19243[(15)] = inst_19158);

(statearr_19243[(16)] = inst_19156);

return statearr_19243;
})();
var statearr_19244_19289 = state_19215__$1;
(statearr_19244_19289[(2)] = null);

(statearr_19244_19289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (14))){
var state_19215__$1 = state_19215;
var statearr_19248_19290 = state_19215__$1;
(statearr_19248_19290[(2)] = null);

(statearr_19248_19290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (16))){
var inst_19170 = (state_19215[(10)]);
var inst_19174 = cljs.core.chunk_first.call(null,inst_19170);
var inst_19175 = cljs.core.chunk_rest.call(null,inst_19170);
var inst_19176 = cljs.core.count.call(null,inst_19174);
var inst_19156 = inst_19175;
var inst_19157 = inst_19174;
var inst_19158 = inst_19176;
var inst_19159 = (0);
var state_19215__$1 = (function (){var statearr_19249 = state_19215;
(statearr_19249[(12)] = inst_19159);

(statearr_19249[(14)] = inst_19157);

(statearr_19249[(15)] = inst_19158);

(statearr_19249[(16)] = inst_19156);

return statearr_19249;
})();
var statearr_19250_19291 = state_19215__$1;
(statearr_19250_19291[(2)] = null);

(statearr_19250_19291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (10))){
var inst_19159 = (state_19215[(12)]);
var inst_19157 = (state_19215[(14)]);
var inst_19158 = (state_19215[(15)]);
var inst_19156 = (state_19215[(16)]);
var inst_19164 = cljs.core._nth.call(null,inst_19157,inst_19159);
var inst_19165 = cljs.core.async.muxch_STAR_.call(null,inst_19164);
var inst_19166 = cljs.core.async.close_BANG_.call(null,inst_19165);
var inst_19167 = (inst_19159 + (1));
var tmp19245 = inst_19157;
var tmp19246 = inst_19158;
var tmp19247 = inst_19156;
var inst_19156__$1 = tmp19247;
var inst_19157__$1 = tmp19245;
var inst_19158__$1 = tmp19246;
var inst_19159__$1 = inst_19167;
var state_19215__$1 = (function (){var statearr_19251 = state_19215;
(statearr_19251[(12)] = inst_19159__$1);

(statearr_19251[(14)] = inst_19157__$1);

(statearr_19251[(17)] = inst_19166);

(statearr_19251[(15)] = inst_19158__$1);

(statearr_19251[(16)] = inst_19156__$1);

return statearr_19251;
})();
var statearr_19252_19292 = state_19215__$1;
(statearr_19252_19292[(2)] = null);

(statearr_19252_19292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (18))){
var inst_19185 = (state_19215[(2)]);
var state_19215__$1 = state_19215;
var statearr_19253_19293 = state_19215__$1;
(statearr_19253_19293[(2)] = inst_19185);

(statearr_19253_19293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19216 === (8))){
var inst_19159 = (state_19215[(12)]);
var inst_19158 = (state_19215[(15)]);
var inst_19161 = (inst_19159 < inst_19158);
var inst_19162 = inst_19161;
var state_19215__$1 = state_19215;
if(cljs.core.truth_(inst_19162)){
var statearr_19254_19294 = state_19215__$1;
(statearr_19254_19294[(1)] = (10));

} else {
var statearr_19255_19295 = state_19215__$1;
(statearr_19255_19295[(1)] = (11));

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
});})(c__10692__auto___19267,mults,ensure_mult,p))
;
return ((function (switch__10627__auto__,c__10692__auto___19267,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19259[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19259[(1)] = (1));

return statearr_19259;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19215){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19260){if((e19260 instanceof Object)){
var ex__10631__auto__ = e19260;
var statearr_19261_19296 = state_19215;
(statearr_19261_19296[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19297 = state_19215;
state_19215 = G__19297;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19267,mults,ensure_mult,p))
})();
var state__10694__auto__ = (function (){var statearr_19262 = f__10693__auto__.call(null);
(statearr_19262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19267);

return statearr_19262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19267,mults,ensure_mult,p))
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
var args19298 = [];
var len__6152__auto___19301 = arguments.length;
var i__6153__auto___19302 = (0);
while(true){
if((i__6153__auto___19302 < len__6152__auto___19301)){
args19298.push((arguments[i__6153__auto___19302]));

var G__19303 = (i__6153__auto___19302 + (1));
i__6153__auto___19302 = G__19303;
continue;
} else {
}
break;
}

var G__19300 = args19298.length;
switch (G__19300) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19298.length)].join('')));

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
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19305.length)].join('')));

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
var args19312 = [];
var len__6152__auto___19383 = arguments.length;
var i__6153__auto___19384 = (0);
while(true){
if((i__6153__auto___19384 < len__6152__auto___19383)){
args19312.push((arguments[i__6153__auto___19384]));

var G__19385 = (i__6153__auto___19384 + (1));
i__6153__auto___19384 = G__19385;
continue;
} else {
}
break;
}

var G__19314 = args19312.length;
switch (G__19314) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19312.length)].join('')));

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
var c__10692__auto___19387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19353){
var state_val_19354 = (state_19353[(1)]);
if((state_val_19354 === (7))){
var state_19353__$1 = state_19353;
var statearr_19355_19388 = state_19353__$1;
(statearr_19355_19388[(2)] = null);

(statearr_19355_19388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (1))){
var state_19353__$1 = state_19353;
var statearr_19356_19389 = state_19353__$1;
(statearr_19356_19389[(2)] = null);

(statearr_19356_19389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (4))){
var inst_19317 = (state_19353[(7)]);
var inst_19319 = (inst_19317 < cnt);
var state_19353__$1 = state_19353;
if(cljs.core.truth_(inst_19319)){
var statearr_19357_19390 = state_19353__$1;
(statearr_19357_19390[(1)] = (6));

} else {
var statearr_19358_19391 = state_19353__$1;
(statearr_19358_19391[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (15))){
var inst_19349 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
var statearr_19359_19392 = state_19353__$1;
(statearr_19359_19392[(2)] = inst_19349);

(statearr_19359_19392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (13))){
var inst_19342 = cljs.core.async.close_BANG_.call(null,out);
var state_19353__$1 = state_19353;
var statearr_19360_19393 = state_19353__$1;
(statearr_19360_19393[(2)] = inst_19342);

(statearr_19360_19393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (6))){
var state_19353__$1 = state_19353;
var statearr_19361_19394 = state_19353__$1;
(statearr_19361_19394[(2)] = null);

(statearr_19361_19394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (3))){
var inst_19351 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19353__$1,inst_19351);
} else {
if((state_val_19354 === (12))){
var inst_19339 = (state_19353[(8)]);
var inst_19339__$1 = (state_19353[(2)]);
var inst_19340 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19339__$1);
var state_19353__$1 = (function (){var statearr_19362 = state_19353;
(statearr_19362[(8)] = inst_19339__$1);

return statearr_19362;
})();
if(cljs.core.truth_(inst_19340)){
var statearr_19363_19395 = state_19353__$1;
(statearr_19363_19395[(1)] = (13));

} else {
var statearr_19364_19396 = state_19353__$1;
(statearr_19364_19396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (2))){
var inst_19316 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19317 = (0);
var state_19353__$1 = (function (){var statearr_19365 = state_19353;
(statearr_19365[(7)] = inst_19317);

(statearr_19365[(9)] = inst_19316);

return statearr_19365;
})();
var statearr_19366_19397 = state_19353__$1;
(statearr_19366_19397[(2)] = null);

(statearr_19366_19397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (11))){
var inst_19317 = (state_19353[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19353,(10),Object,null,(9));
var inst_19326 = chs__$1.call(null,inst_19317);
var inst_19327 = done.call(null,inst_19317);
var inst_19328 = cljs.core.async.take_BANG_.call(null,inst_19326,inst_19327);
var state_19353__$1 = state_19353;
var statearr_19367_19398 = state_19353__$1;
(statearr_19367_19398[(2)] = inst_19328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (9))){
var inst_19317 = (state_19353[(7)]);
var inst_19330 = (state_19353[(2)]);
var inst_19331 = (inst_19317 + (1));
var inst_19317__$1 = inst_19331;
var state_19353__$1 = (function (){var statearr_19368 = state_19353;
(statearr_19368[(10)] = inst_19330);

(statearr_19368[(7)] = inst_19317__$1);

return statearr_19368;
})();
var statearr_19369_19399 = state_19353__$1;
(statearr_19369_19399[(2)] = null);

(statearr_19369_19399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (5))){
var inst_19337 = (state_19353[(2)]);
var state_19353__$1 = (function (){var statearr_19370 = state_19353;
(statearr_19370[(11)] = inst_19337);

return statearr_19370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19353__$1,(12),dchan);
} else {
if((state_val_19354 === (14))){
var inst_19339 = (state_19353[(8)]);
var inst_19344 = cljs.core.apply.call(null,f,inst_19339);
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19353__$1,(16),out,inst_19344);
} else {
if((state_val_19354 === (16))){
var inst_19346 = (state_19353[(2)]);
var state_19353__$1 = (function (){var statearr_19371 = state_19353;
(statearr_19371[(12)] = inst_19346);

return statearr_19371;
})();
var statearr_19372_19400 = state_19353__$1;
(statearr_19372_19400[(2)] = null);

(statearr_19372_19400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (10))){
var inst_19321 = (state_19353[(2)]);
var inst_19322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19353__$1 = (function (){var statearr_19373 = state_19353;
(statearr_19373[(13)] = inst_19321);

return statearr_19373;
})();
var statearr_19374_19401 = state_19353__$1;
(statearr_19374_19401[(2)] = inst_19322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (8))){
var inst_19335 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
var statearr_19375_19402 = state_19353__$1;
(statearr_19375_19402[(2)] = inst_19335);

(statearr_19375_19402[(1)] = (5));


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
});})(c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10627__auto__,c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19379[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19379[(1)] = (1));

return statearr_19379;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19353){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19380){if((e19380 instanceof Object)){
var ex__10631__auto__ = e19380;
var statearr_19381_19403 = state_19353;
(statearr_19381_19403[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19404 = state_19353;
state_19353 = G__19404;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10694__auto__ = (function (){var statearr_19382 = f__10693__auto__.call(null);
(statearr_19382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19387);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19387,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19406 = [];
var len__6152__auto___19462 = arguments.length;
var i__6153__auto___19463 = (0);
while(true){
if((i__6153__auto___19463 < len__6152__auto___19462)){
args19406.push((arguments[i__6153__auto___19463]));

var G__19464 = (i__6153__auto___19463 + (1));
i__6153__auto___19463 = G__19464;
continue;
} else {
}
break;
}

var G__19408 = args19406.length;
switch (G__19408) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19406.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19466,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19466,out){
return (function (state_19438){
var state_val_19439 = (state_19438[(1)]);
if((state_val_19439 === (7))){
var inst_19417 = (state_19438[(7)]);
var inst_19418 = (state_19438[(8)]);
var inst_19417__$1 = (state_19438[(2)]);
var inst_19418__$1 = cljs.core.nth.call(null,inst_19417__$1,(0),null);
var inst_19419 = cljs.core.nth.call(null,inst_19417__$1,(1),null);
var inst_19420 = (inst_19418__$1 == null);
var state_19438__$1 = (function (){var statearr_19440 = state_19438;
(statearr_19440[(9)] = inst_19419);

(statearr_19440[(7)] = inst_19417__$1);

(statearr_19440[(8)] = inst_19418__$1);

return statearr_19440;
})();
if(cljs.core.truth_(inst_19420)){
var statearr_19441_19467 = state_19438__$1;
(statearr_19441_19467[(1)] = (8));

} else {
var statearr_19442_19468 = state_19438__$1;
(statearr_19442_19468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (1))){
var inst_19409 = cljs.core.vec.call(null,chs);
var inst_19410 = inst_19409;
var state_19438__$1 = (function (){var statearr_19443 = state_19438;
(statearr_19443[(10)] = inst_19410);

return statearr_19443;
})();
var statearr_19444_19469 = state_19438__$1;
(statearr_19444_19469[(2)] = null);

(statearr_19444_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (4))){
var inst_19410 = (state_19438[(10)]);
var state_19438__$1 = state_19438;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19438__$1,(7),inst_19410);
} else {
if((state_val_19439 === (6))){
var inst_19434 = (state_19438[(2)]);
var state_19438__$1 = state_19438;
var statearr_19445_19470 = state_19438__$1;
(statearr_19445_19470[(2)] = inst_19434);

(statearr_19445_19470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (3))){
var inst_19436 = (state_19438[(2)]);
var state_19438__$1 = state_19438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19438__$1,inst_19436);
} else {
if((state_val_19439 === (2))){
var inst_19410 = (state_19438[(10)]);
var inst_19412 = cljs.core.count.call(null,inst_19410);
var inst_19413 = (inst_19412 > (0));
var state_19438__$1 = state_19438;
if(cljs.core.truth_(inst_19413)){
var statearr_19447_19471 = state_19438__$1;
(statearr_19447_19471[(1)] = (4));

} else {
var statearr_19448_19472 = state_19438__$1;
(statearr_19448_19472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (11))){
var inst_19410 = (state_19438[(10)]);
var inst_19427 = (state_19438[(2)]);
var tmp19446 = inst_19410;
var inst_19410__$1 = tmp19446;
var state_19438__$1 = (function (){var statearr_19449 = state_19438;
(statearr_19449[(10)] = inst_19410__$1);

(statearr_19449[(11)] = inst_19427);

return statearr_19449;
})();
var statearr_19450_19473 = state_19438__$1;
(statearr_19450_19473[(2)] = null);

(statearr_19450_19473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (9))){
var inst_19418 = (state_19438[(8)]);
var state_19438__$1 = state_19438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19438__$1,(11),out,inst_19418);
} else {
if((state_val_19439 === (5))){
var inst_19432 = cljs.core.async.close_BANG_.call(null,out);
var state_19438__$1 = state_19438;
var statearr_19451_19474 = state_19438__$1;
(statearr_19451_19474[(2)] = inst_19432);

(statearr_19451_19474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (10))){
var inst_19430 = (state_19438[(2)]);
var state_19438__$1 = state_19438;
var statearr_19452_19475 = state_19438__$1;
(statearr_19452_19475[(2)] = inst_19430);

(statearr_19452_19475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19439 === (8))){
var inst_19419 = (state_19438[(9)]);
var inst_19410 = (state_19438[(10)]);
var inst_19417 = (state_19438[(7)]);
var inst_19418 = (state_19438[(8)]);
var inst_19422 = (function (){var cs = inst_19410;
var vec__19415 = inst_19417;
var v = inst_19418;
var c = inst_19419;
return ((function (cs,vec__19415,v,c,inst_19419,inst_19410,inst_19417,inst_19418,state_val_19439,c__10692__auto___19466,out){
return (function (p1__19405_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19405_SHARP_);
});
;})(cs,vec__19415,v,c,inst_19419,inst_19410,inst_19417,inst_19418,state_val_19439,c__10692__auto___19466,out))
})();
var inst_19423 = cljs.core.filterv.call(null,inst_19422,inst_19410);
var inst_19410__$1 = inst_19423;
var state_19438__$1 = (function (){var statearr_19453 = state_19438;
(statearr_19453[(10)] = inst_19410__$1);

return statearr_19453;
})();
var statearr_19454_19476 = state_19438__$1;
(statearr_19454_19476[(2)] = null);

(statearr_19454_19476[(1)] = (2));


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
});})(c__10692__auto___19466,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19466,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19458 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19458[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19458[(1)] = (1));

return statearr_19458;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19438){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19459){if((e19459 instanceof Object)){
var ex__10631__auto__ = e19459;
var statearr_19460_19477 = state_19438;
(statearr_19460_19477[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19478 = state_19438;
state_19438 = G__19478;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19466,out))
})();
var state__10694__auto__ = (function (){var statearr_19461 = f__10693__auto__.call(null);
(statearr_19461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19466);

return statearr_19461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19466,out))
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
var args19479 = [];
var len__6152__auto___19528 = arguments.length;
var i__6153__auto___19529 = (0);
while(true){
if((i__6153__auto___19529 < len__6152__auto___19528)){
args19479.push((arguments[i__6153__auto___19529]));

var G__19530 = (i__6153__auto___19529 + (1));
i__6153__auto___19529 = G__19530;
continue;
} else {
}
break;
}

var G__19481 = args19479.length;
switch (G__19481) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19479.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19532,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19532,out){
return (function (state_19505){
var state_val_19506 = (state_19505[(1)]);
if((state_val_19506 === (7))){
var inst_19487 = (state_19505[(7)]);
var inst_19487__$1 = (state_19505[(2)]);
var inst_19488 = (inst_19487__$1 == null);
var inst_19489 = cljs.core.not.call(null,inst_19488);
var state_19505__$1 = (function (){var statearr_19507 = state_19505;
(statearr_19507[(7)] = inst_19487__$1);

return statearr_19507;
})();
if(inst_19489){
var statearr_19508_19533 = state_19505__$1;
(statearr_19508_19533[(1)] = (8));

} else {
var statearr_19509_19534 = state_19505__$1;
(statearr_19509_19534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (1))){
var inst_19482 = (0);
var state_19505__$1 = (function (){var statearr_19510 = state_19505;
(statearr_19510[(8)] = inst_19482);

return statearr_19510;
})();
var statearr_19511_19535 = state_19505__$1;
(statearr_19511_19535[(2)] = null);

(statearr_19511_19535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (4))){
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(7),ch);
} else {
if((state_val_19506 === (6))){
var inst_19500 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19512_19536 = state_19505__$1;
(statearr_19512_19536[(2)] = inst_19500);

(statearr_19512_19536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (3))){
var inst_19502 = (state_19505[(2)]);
var inst_19503 = cljs.core.async.close_BANG_.call(null,out);
var state_19505__$1 = (function (){var statearr_19513 = state_19505;
(statearr_19513[(9)] = inst_19502);

return statearr_19513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19505__$1,inst_19503);
} else {
if((state_val_19506 === (2))){
var inst_19482 = (state_19505[(8)]);
var inst_19484 = (inst_19482 < n);
var state_19505__$1 = state_19505;
if(cljs.core.truth_(inst_19484)){
var statearr_19514_19537 = state_19505__$1;
(statearr_19514_19537[(1)] = (4));

} else {
var statearr_19515_19538 = state_19505__$1;
(statearr_19515_19538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (11))){
var inst_19482 = (state_19505[(8)]);
var inst_19492 = (state_19505[(2)]);
var inst_19493 = (inst_19482 + (1));
var inst_19482__$1 = inst_19493;
var state_19505__$1 = (function (){var statearr_19516 = state_19505;
(statearr_19516[(10)] = inst_19492);

(statearr_19516[(8)] = inst_19482__$1);

return statearr_19516;
})();
var statearr_19517_19539 = state_19505__$1;
(statearr_19517_19539[(2)] = null);

(statearr_19517_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (9))){
var state_19505__$1 = state_19505;
var statearr_19518_19540 = state_19505__$1;
(statearr_19518_19540[(2)] = null);

(statearr_19518_19540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (5))){
var state_19505__$1 = state_19505;
var statearr_19519_19541 = state_19505__$1;
(statearr_19519_19541[(2)] = null);

(statearr_19519_19541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (10))){
var inst_19497 = (state_19505[(2)]);
var state_19505__$1 = state_19505;
var statearr_19520_19542 = state_19505__$1;
(statearr_19520_19542[(2)] = inst_19497);

(statearr_19520_19542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19506 === (8))){
var inst_19487 = (state_19505[(7)]);
var state_19505__$1 = state_19505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(11),out,inst_19487);
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
});})(c__10692__auto___19532,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19532,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19524[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19524[(1)] = (1));

return statearr_19524;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19505){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19525){if((e19525 instanceof Object)){
var ex__10631__auto__ = e19525;
var statearr_19526_19543 = state_19505;
(statearr_19526_19543[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19544 = state_19505;
state_19505 = G__19544;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19532,out))
})();
var state__10694__auto__ = (function (){var statearr_19527 = f__10693__auto__.call(null);
(statearr_19527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19532);

return statearr_19527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19532,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19552 = (function (map_LT_,f,ch,meta19553){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19553 = meta19553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19554,meta19553__$1){
var self__ = this;
var _19554__$1 = this;
return (new cljs.core.async.t_cljs$core$async19552(self__.map_LT_,self__.f,self__.ch,meta19553__$1));
});

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19554){
var self__ = this;
var _19554__$1 = this;
return self__.meta19553;
});

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19555 = (function (map_LT_,f,ch,meta19553,_,fn1,meta19556){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19553 = meta19553;
this._ = _;
this.fn1 = fn1;
this.meta19556 = meta19556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19557,meta19556__$1){
var self__ = this;
var _19557__$1 = this;
return (new cljs.core.async.t_cljs$core$async19555(self__.map_LT_,self__.f,self__.ch,self__.meta19553,self__._,self__.fn1,meta19556__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19557){
var self__ = this;
var _19557__$1 = this;
return self__.meta19556;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19545_SHARP_){
return f1.call(null,(((p1__19545_SHARP_ == null))?null:self__.f.call(null,p1__19545_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19555.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19553","meta19553",-2057186609,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19552","cljs.core.async/t_cljs$core$async19552",-615260233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19556","meta19556",-1790235977,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19555";

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19555");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19555 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19555(map_LT___$1,f__$1,ch__$1,meta19553__$1,___$2,fn1__$1,meta19556){
return (new cljs.core.async.t_cljs$core$async19555(map_LT___$1,f__$1,ch__$1,meta19553__$1,___$2,fn1__$1,meta19556));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19555(self__.map_LT_,self__.f,self__.ch,self__.meta19553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19553","meta19553",-2057186609,null)], null);
});

cljs.core.async.t_cljs$core$async19552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19552";

cljs.core.async.t_cljs$core$async19552.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19552");
});

cljs.core.async.__GT_t_cljs$core$async19552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19552(map_LT___$1,f__$1,ch__$1,meta19553){
return (new cljs.core.async.t_cljs$core$async19552(map_LT___$1,f__$1,ch__$1,meta19553));
});

}

return (new cljs.core.async.t_cljs$core$async19552(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async19561 = (function (map_GT_,f,ch,meta19562){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19562 = meta19562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19563,meta19562__$1){
var self__ = this;
var _19563__$1 = this;
return (new cljs.core.async.t_cljs$core$async19561(self__.map_GT_,self__.f,self__.ch,meta19562__$1));
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

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19562","meta19562",-1922408241,null)], null);
});

cljs.core.async.t_cljs$core$async19561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19561";

cljs.core.async.t_cljs$core$async19561.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19561");
});

cljs.core.async.__GT_t_cljs$core$async19561 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19561(map_GT___$1,f__$1,ch__$1,meta19562){
return (new cljs.core.async.t_cljs$core$async19561(map_GT___$1,f__$1,ch__$1,meta19562));
});

}

return (new cljs.core.async.t_cljs$core$async19561(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19567 = (function (filter_GT_,p,ch,meta19568){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19568 = meta19568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19569,meta19568__$1){
var self__ = this;
var _19569__$1 = this;
return (new cljs.core.async.t_cljs$core$async19567(self__.filter_GT_,self__.p,self__.ch,meta19568__$1));
});

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19569){
var self__ = this;
var _19569__$1 = this;
return self__.meta19568;
});

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19568","meta19568",1393145788,null)], null);
});

cljs.core.async.t_cljs$core$async19567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19567";

cljs.core.async.t_cljs$core$async19567.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19567");
});

cljs.core.async.__GT_t_cljs$core$async19567 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19567(filter_GT___$1,p__$1,ch__$1,meta19568){
return (new cljs.core.async.t_cljs$core$async19567(filter_GT___$1,p__$1,ch__$1,meta19568));
});

}

return (new cljs.core.async.t_cljs$core$async19567(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19570 = [];
var len__6152__auto___19614 = arguments.length;
var i__6153__auto___19615 = (0);
while(true){
if((i__6153__auto___19615 < len__6152__auto___19614)){
args19570.push((arguments[i__6153__auto___19615]));

var G__19616 = (i__6153__auto___19615 + (1));
i__6153__auto___19615 = G__19616;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19618,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19618,out){
return (function (state_19593){
var state_val_19594 = (state_19593[(1)]);
if((state_val_19594 === (7))){
var inst_19589 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19595_19619 = state_19593__$1;
(statearr_19595_19619[(2)] = inst_19589);

(statearr_19595_19619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (1))){
var state_19593__$1 = state_19593;
var statearr_19596_19620 = state_19593__$1;
(statearr_19596_19620[(2)] = null);

(statearr_19596_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (4))){
var inst_19575 = (state_19593[(7)]);
var inst_19575__$1 = (state_19593[(2)]);
var inst_19576 = (inst_19575__$1 == null);
var state_19593__$1 = (function (){var statearr_19597 = state_19593;
(statearr_19597[(7)] = inst_19575__$1);

return statearr_19597;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19598_19621 = state_19593__$1;
(statearr_19598_19621[(1)] = (5));

} else {
var statearr_19599_19622 = state_19593__$1;
(statearr_19599_19622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (6))){
var inst_19575 = (state_19593[(7)]);
var inst_19580 = p.call(null,inst_19575);
var state_19593__$1 = state_19593;
if(cljs.core.truth_(inst_19580)){
var statearr_19600_19623 = state_19593__$1;
(statearr_19600_19623[(1)] = (8));

} else {
var statearr_19601_19624 = state_19593__$1;
(statearr_19601_19624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (3))){
var inst_19591 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19593__$1,inst_19591);
} else {
if((state_val_19594 === (2))){
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19593__$1,(4),ch);
} else {
if((state_val_19594 === (11))){
var inst_19583 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19602_19625 = state_19593__$1;
(statearr_19602_19625[(2)] = inst_19583);

(statearr_19602_19625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (9))){
var state_19593__$1 = state_19593;
var statearr_19603_19626 = state_19593__$1;
(statearr_19603_19626[(2)] = null);

(statearr_19603_19626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (5))){
var inst_19578 = cljs.core.async.close_BANG_.call(null,out);
var state_19593__$1 = state_19593;
var statearr_19604_19627 = state_19593__$1;
(statearr_19604_19627[(2)] = inst_19578);

(statearr_19604_19627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (10))){
var inst_19586 = (state_19593[(2)]);
var state_19593__$1 = (function (){var statearr_19605 = state_19593;
(statearr_19605[(8)] = inst_19586);

return statearr_19605;
})();
var statearr_19606_19628 = state_19593__$1;
(statearr_19606_19628[(2)] = null);

(statearr_19606_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (8))){
var inst_19575 = (state_19593[(7)]);
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19593__$1,(11),out,inst_19575);
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
});})(c__10692__auto___19618,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19618,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19610 = [null,null,null,null,null,null,null,null,null];
(statearr_19610[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19610[(1)] = (1));

return statearr_19610;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19593){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19611){if((e19611 instanceof Object)){
var ex__10631__auto__ = e19611;
var statearr_19612_19629 = state_19593;
(statearr_19612_19629[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19630 = state_19593;
state_19593 = G__19630;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19618,out))
})();
var state__10694__auto__ = (function (){var statearr_19613 = f__10693__auto__.call(null);
(statearr_19613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19618);

return statearr_19613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19618,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19631 = [];
var len__6152__auto___19634 = arguments.length;
var i__6153__auto___19635 = (0);
while(true){
if((i__6153__auto___19635 < len__6152__auto___19634)){
args19631.push((arguments[i__6153__auto___19635]));

var G__19636 = (i__6153__auto___19635 + (1));
i__6153__auto___19635 = G__19636;
continue;
} else {
}
break;
}

var G__19633 = args19631.length;
switch (G__19633) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19631.length)].join('')));

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
var c__10692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto__){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto__){
return (function (state_19803){
var state_val_19804 = (state_19803[(1)]);
if((state_val_19804 === (7))){
var inst_19799 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19805_19846 = state_19803__$1;
(statearr_19805_19846[(2)] = inst_19799);

(statearr_19805_19846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (20))){
var inst_19769 = (state_19803[(7)]);
var inst_19780 = (state_19803[(2)]);
var inst_19781 = cljs.core.next.call(null,inst_19769);
var inst_19755 = inst_19781;
var inst_19756 = null;
var inst_19757 = (0);
var inst_19758 = (0);
var state_19803__$1 = (function (){var statearr_19806 = state_19803;
(statearr_19806[(8)] = inst_19755);

(statearr_19806[(9)] = inst_19757);

(statearr_19806[(10)] = inst_19780);

(statearr_19806[(11)] = inst_19758);

(statearr_19806[(12)] = inst_19756);

return statearr_19806;
})();
var statearr_19807_19847 = state_19803__$1;
(statearr_19807_19847[(2)] = null);

(statearr_19807_19847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (1))){
var state_19803__$1 = state_19803;
var statearr_19808_19848 = state_19803__$1;
(statearr_19808_19848[(2)] = null);

(statearr_19808_19848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (4))){
var inst_19744 = (state_19803[(13)]);
var inst_19744__$1 = (state_19803[(2)]);
var inst_19745 = (inst_19744__$1 == null);
var state_19803__$1 = (function (){var statearr_19809 = state_19803;
(statearr_19809[(13)] = inst_19744__$1);

return statearr_19809;
})();
if(cljs.core.truth_(inst_19745)){
var statearr_19810_19849 = state_19803__$1;
(statearr_19810_19849[(1)] = (5));

} else {
var statearr_19811_19850 = state_19803__$1;
(statearr_19811_19850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (15))){
var state_19803__$1 = state_19803;
var statearr_19815_19851 = state_19803__$1;
(statearr_19815_19851[(2)] = null);

(statearr_19815_19851[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (21))){
var state_19803__$1 = state_19803;
var statearr_19816_19852 = state_19803__$1;
(statearr_19816_19852[(2)] = null);

(statearr_19816_19852[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (13))){
var inst_19755 = (state_19803[(8)]);
var inst_19757 = (state_19803[(9)]);
var inst_19758 = (state_19803[(11)]);
var inst_19756 = (state_19803[(12)]);
var inst_19765 = (state_19803[(2)]);
var inst_19766 = (inst_19758 + (1));
var tmp19812 = inst_19755;
var tmp19813 = inst_19757;
var tmp19814 = inst_19756;
var inst_19755__$1 = tmp19812;
var inst_19756__$1 = tmp19814;
var inst_19757__$1 = tmp19813;
var inst_19758__$1 = inst_19766;
var state_19803__$1 = (function (){var statearr_19817 = state_19803;
(statearr_19817[(8)] = inst_19755__$1);

(statearr_19817[(9)] = inst_19757__$1);

(statearr_19817[(14)] = inst_19765);

(statearr_19817[(11)] = inst_19758__$1);

(statearr_19817[(12)] = inst_19756__$1);

return statearr_19817;
})();
var statearr_19818_19853 = state_19803__$1;
(statearr_19818_19853[(2)] = null);

(statearr_19818_19853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (22))){
var state_19803__$1 = state_19803;
var statearr_19819_19854 = state_19803__$1;
(statearr_19819_19854[(2)] = null);

(statearr_19819_19854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (6))){
var inst_19744 = (state_19803[(13)]);
var inst_19753 = f.call(null,inst_19744);
var inst_19754 = cljs.core.seq.call(null,inst_19753);
var inst_19755 = inst_19754;
var inst_19756 = null;
var inst_19757 = (0);
var inst_19758 = (0);
var state_19803__$1 = (function (){var statearr_19820 = state_19803;
(statearr_19820[(8)] = inst_19755);

(statearr_19820[(9)] = inst_19757);

(statearr_19820[(11)] = inst_19758);

(statearr_19820[(12)] = inst_19756);

return statearr_19820;
})();
var statearr_19821_19855 = state_19803__$1;
(statearr_19821_19855[(2)] = null);

(statearr_19821_19855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (17))){
var inst_19769 = (state_19803[(7)]);
var inst_19773 = cljs.core.chunk_first.call(null,inst_19769);
var inst_19774 = cljs.core.chunk_rest.call(null,inst_19769);
var inst_19775 = cljs.core.count.call(null,inst_19773);
var inst_19755 = inst_19774;
var inst_19756 = inst_19773;
var inst_19757 = inst_19775;
var inst_19758 = (0);
var state_19803__$1 = (function (){var statearr_19822 = state_19803;
(statearr_19822[(8)] = inst_19755);

(statearr_19822[(9)] = inst_19757);

(statearr_19822[(11)] = inst_19758);

(statearr_19822[(12)] = inst_19756);

return statearr_19822;
})();
var statearr_19823_19856 = state_19803__$1;
(statearr_19823_19856[(2)] = null);

(statearr_19823_19856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (3))){
var inst_19801 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19803__$1,inst_19801);
} else {
if((state_val_19804 === (12))){
var inst_19789 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19824_19857 = state_19803__$1;
(statearr_19824_19857[(2)] = inst_19789);

(statearr_19824_19857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (2))){
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19803__$1,(4),in$);
} else {
if((state_val_19804 === (23))){
var inst_19797 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19825_19858 = state_19803__$1;
(statearr_19825_19858[(2)] = inst_19797);

(statearr_19825_19858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (19))){
var inst_19784 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19826_19859 = state_19803__$1;
(statearr_19826_19859[(2)] = inst_19784);

(statearr_19826_19859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (11))){
var inst_19755 = (state_19803[(8)]);
var inst_19769 = (state_19803[(7)]);
var inst_19769__$1 = cljs.core.seq.call(null,inst_19755);
var state_19803__$1 = (function (){var statearr_19827 = state_19803;
(statearr_19827[(7)] = inst_19769__$1);

return statearr_19827;
})();
if(inst_19769__$1){
var statearr_19828_19860 = state_19803__$1;
(statearr_19828_19860[(1)] = (14));

} else {
var statearr_19829_19861 = state_19803__$1;
(statearr_19829_19861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (9))){
var inst_19791 = (state_19803[(2)]);
var inst_19792 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19803__$1 = (function (){var statearr_19830 = state_19803;
(statearr_19830[(15)] = inst_19791);

return statearr_19830;
})();
if(cljs.core.truth_(inst_19792)){
var statearr_19831_19862 = state_19803__$1;
(statearr_19831_19862[(1)] = (21));

} else {
var statearr_19832_19863 = state_19803__$1;
(statearr_19832_19863[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (5))){
var inst_19747 = cljs.core.async.close_BANG_.call(null,out);
var state_19803__$1 = state_19803;
var statearr_19833_19864 = state_19803__$1;
(statearr_19833_19864[(2)] = inst_19747);

(statearr_19833_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (14))){
var inst_19769 = (state_19803[(7)]);
var inst_19771 = cljs.core.chunked_seq_QMARK_.call(null,inst_19769);
var state_19803__$1 = state_19803;
if(inst_19771){
var statearr_19834_19865 = state_19803__$1;
(statearr_19834_19865[(1)] = (17));

} else {
var statearr_19835_19866 = state_19803__$1;
(statearr_19835_19866[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (16))){
var inst_19787 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19836_19867 = state_19803__$1;
(statearr_19836_19867[(2)] = inst_19787);

(statearr_19836_19867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (10))){
var inst_19758 = (state_19803[(11)]);
var inst_19756 = (state_19803[(12)]);
var inst_19763 = cljs.core._nth.call(null,inst_19756,inst_19758);
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19803__$1,(13),out,inst_19763);
} else {
if((state_val_19804 === (18))){
var inst_19769 = (state_19803[(7)]);
var inst_19778 = cljs.core.first.call(null,inst_19769);
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19803__$1,(20),out,inst_19778);
} else {
if((state_val_19804 === (8))){
var inst_19757 = (state_19803[(9)]);
var inst_19758 = (state_19803[(11)]);
var inst_19760 = (inst_19758 < inst_19757);
var inst_19761 = inst_19760;
var state_19803__$1 = state_19803;
if(cljs.core.truth_(inst_19761)){
var statearr_19837_19868 = state_19803__$1;
(statearr_19837_19868[(1)] = (10));

} else {
var statearr_19838_19869 = state_19803__$1;
(statearr_19838_19869[(1)] = (11));

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
});})(c__10692__auto__))
;
return ((function (switch__10627__auto__,c__10692__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_19842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19842[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__);

(statearr_19842[(1)] = (1));

return statearr_19842;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1 = (function (state_19803){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19843){if((e19843 instanceof Object)){
var ex__10631__auto__ = e19843;
var statearr_19844_19870 = state_19803;
(statearr_19844_19870[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19871 = state_19803;
state_19803 = G__19871;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__ = function(state_19803){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1.call(this,state_19803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_19845 = f__10693__auto__.call(null);
(statearr_19845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_19845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto__))
);

return c__10692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19872 = [];
var len__6152__auto___19875 = arguments.length;
var i__6153__auto___19876 = (0);
while(true){
if((i__6153__auto___19876 < len__6152__auto___19875)){
args19872.push((arguments[i__6153__auto___19876]));

var G__19877 = (i__6153__auto___19876 + (1));
i__6153__auto___19876 = G__19877;
continue;
} else {
}
break;
}

var G__19874 = args19872.length;
switch (G__19874) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19872.length)].join('')));

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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19879.length)].join('')));

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
var args19886 = [];
var len__6152__auto___19937 = arguments.length;
var i__6153__auto___19938 = (0);
while(true){
if((i__6153__auto___19938 < len__6152__auto___19937)){
args19886.push((arguments[i__6153__auto___19938]));

var G__19939 = (i__6153__auto___19938 + (1));
i__6153__auto___19938 = G__19939;
continue;
} else {
}
break;
}

var G__19888 = args19886.length;
switch (G__19888) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19886.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19941,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19941,out){
return (function (state_19912){
var state_val_19913 = (state_19912[(1)]);
if((state_val_19913 === (7))){
var inst_19907 = (state_19912[(2)]);
var state_19912__$1 = state_19912;
var statearr_19914_19942 = state_19912__$1;
(statearr_19914_19942[(2)] = inst_19907);

(statearr_19914_19942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (1))){
var inst_19889 = null;
var state_19912__$1 = (function (){var statearr_19915 = state_19912;
(statearr_19915[(7)] = inst_19889);

return statearr_19915;
})();
var statearr_19916_19943 = state_19912__$1;
(statearr_19916_19943[(2)] = null);

(statearr_19916_19943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (4))){
var inst_19892 = (state_19912[(8)]);
var inst_19892__$1 = (state_19912[(2)]);
var inst_19893 = (inst_19892__$1 == null);
var inst_19894 = cljs.core.not.call(null,inst_19893);
var state_19912__$1 = (function (){var statearr_19917 = state_19912;
(statearr_19917[(8)] = inst_19892__$1);

return statearr_19917;
})();
if(inst_19894){
var statearr_19918_19944 = state_19912__$1;
(statearr_19918_19944[(1)] = (5));

} else {
var statearr_19919_19945 = state_19912__$1;
(statearr_19919_19945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (6))){
var state_19912__$1 = state_19912;
var statearr_19920_19946 = state_19912__$1;
(statearr_19920_19946[(2)] = null);

(statearr_19920_19946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (3))){
var inst_19909 = (state_19912[(2)]);
var inst_19910 = cljs.core.async.close_BANG_.call(null,out);
var state_19912__$1 = (function (){var statearr_19921 = state_19912;
(statearr_19921[(9)] = inst_19909);

return statearr_19921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19912__$1,inst_19910);
} else {
if((state_val_19913 === (2))){
var state_19912__$1 = state_19912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19912__$1,(4),ch);
} else {
if((state_val_19913 === (11))){
var inst_19892 = (state_19912[(8)]);
var inst_19901 = (state_19912[(2)]);
var inst_19889 = inst_19892;
var state_19912__$1 = (function (){var statearr_19922 = state_19912;
(statearr_19922[(7)] = inst_19889);

(statearr_19922[(10)] = inst_19901);

return statearr_19922;
})();
var statearr_19923_19947 = state_19912__$1;
(statearr_19923_19947[(2)] = null);

(statearr_19923_19947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (9))){
var inst_19892 = (state_19912[(8)]);
var state_19912__$1 = state_19912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19912__$1,(11),out,inst_19892);
} else {
if((state_val_19913 === (5))){
var inst_19889 = (state_19912[(7)]);
var inst_19892 = (state_19912[(8)]);
var inst_19896 = cljs.core._EQ_.call(null,inst_19892,inst_19889);
var state_19912__$1 = state_19912;
if(inst_19896){
var statearr_19925_19948 = state_19912__$1;
(statearr_19925_19948[(1)] = (8));

} else {
var statearr_19926_19949 = state_19912__$1;
(statearr_19926_19949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (10))){
var inst_19904 = (state_19912[(2)]);
var state_19912__$1 = state_19912;
var statearr_19927_19950 = state_19912__$1;
(statearr_19927_19950[(2)] = inst_19904);

(statearr_19927_19950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19913 === (8))){
var inst_19889 = (state_19912[(7)]);
var tmp19924 = inst_19889;
var inst_19889__$1 = tmp19924;
var state_19912__$1 = (function (){var statearr_19928 = state_19912;
(statearr_19928[(7)] = inst_19889__$1);

return statearr_19928;
})();
var statearr_19929_19951 = state_19912__$1;
(statearr_19929_19951[(2)] = null);

(statearr_19929_19951[(1)] = (2));


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
});})(c__10692__auto___19941,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19941,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19933[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19933[(1)] = (1));

return statearr_19933;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19912){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19934){if((e19934 instanceof Object)){
var ex__10631__auto__ = e19934;
var statearr_19935_19952 = state_19912;
(statearr_19935_19952[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_19912;
state_19912 = G__19953;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19941,out))
})();
var state__10694__auto__ = (function (){var statearr_19936 = f__10693__auto__.call(null);
(statearr_19936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19941);

return statearr_19936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19941,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19954 = [];
var len__6152__auto___20024 = arguments.length;
var i__6153__auto___20025 = (0);
while(true){
if((i__6153__auto___20025 < len__6152__auto___20024)){
args19954.push((arguments[i__6153__auto___20025]));

var G__20026 = (i__6153__auto___20025 + (1));
i__6153__auto___20025 = G__20026;
continue;
} else {
}
break;
}

var G__19956 = args19954.length;
switch (G__19956) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19954.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___20028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___20028,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___20028,out){
return (function (state_19994){
var state_val_19995 = (state_19994[(1)]);
if((state_val_19995 === (7))){
var inst_19990 = (state_19994[(2)]);
var state_19994__$1 = state_19994;
var statearr_19996_20029 = state_19994__$1;
(statearr_19996_20029[(2)] = inst_19990);

(statearr_19996_20029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (1))){
var inst_19957 = (new Array(n));
var inst_19958 = inst_19957;
var inst_19959 = (0);
var state_19994__$1 = (function (){var statearr_19997 = state_19994;
(statearr_19997[(7)] = inst_19958);

(statearr_19997[(8)] = inst_19959);

return statearr_19997;
})();
var statearr_19998_20030 = state_19994__$1;
(statearr_19998_20030[(2)] = null);

(statearr_19998_20030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (4))){
var inst_19962 = (state_19994[(9)]);
var inst_19962__$1 = (state_19994[(2)]);
var inst_19963 = (inst_19962__$1 == null);
var inst_19964 = cljs.core.not.call(null,inst_19963);
var state_19994__$1 = (function (){var statearr_19999 = state_19994;
(statearr_19999[(9)] = inst_19962__$1);

return statearr_19999;
})();
if(inst_19964){
var statearr_20000_20031 = state_19994__$1;
(statearr_20000_20031[(1)] = (5));

} else {
var statearr_20001_20032 = state_19994__$1;
(statearr_20001_20032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (15))){
var inst_19984 = (state_19994[(2)]);
var state_19994__$1 = state_19994;
var statearr_20002_20033 = state_19994__$1;
(statearr_20002_20033[(2)] = inst_19984);

(statearr_20002_20033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (13))){
var state_19994__$1 = state_19994;
var statearr_20003_20034 = state_19994__$1;
(statearr_20003_20034[(2)] = null);

(statearr_20003_20034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (6))){
var inst_19959 = (state_19994[(8)]);
var inst_19980 = (inst_19959 > (0));
var state_19994__$1 = state_19994;
if(cljs.core.truth_(inst_19980)){
var statearr_20004_20035 = state_19994__$1;
(statearr_20004_20035[(1)] = (12));

} else {
var statearr_20005_20036 = state_19994__$1;
(statearr_20005_20036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (3))){
var inst_19992 = (state_19994[(2)]);
var state_19994__$1 = state_19994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19994__$1,inst_19992);
} else {
if((state_val_19995 === (12))){
var inst_19958 = (state_19994[(7)]);
var inst_19982 = cljs.core.vec.call(null,inst_19958);
var state_19994__$1 = state_19994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19994__$1,(15),out,inst_19982);
} else {
if((state_val_19995 === (2))){
var state_19994__$1 = state_19994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19994__$1,(4),ch);
} else {
if((state_val_19995 === (11))){
var inst_19974 = (state_19994[(2)]);
var inst_19975 = (new Array(n));
var inst_19958 = inst_19975;
var inst_19959 = (0);
var state_19994__$1 = (function (){var statearr_20006 = state_19994;
(statearr_20006[(7)] = inst_19958);

(statearr_20006[(10)] = inst_19974);

(statearr_20006[(8)] = inst_19959);

return statearr_20006;
})();
var statearr_20007_20037 = state_19994__$1;
(statearr_20007_20037[(2)] = null);

(statearr_20007_20037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (9))){
var inst_19958 = (state_19994[(7)]);
var inst_19972 = cljs.core.vec.call(null,inst_19958);
var state_19994__$1 = state_19994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19994__$1,(11),out,inst_19972);
} else {
if((state_val_19995 === (5))){
var inst_19967 = (state_19994[(11)]);
var inst_19958 = (state_19994[(7)]);
var inst_19962 = (state_19994[(9)]);
var inst_19959 = (state_19994[(8)]);
var inst_19966 = (inst_19958[inst_19959] = inst_19962);
var inst_19967__$1 = (inst_19959 + (1));
var inst_19968 = (inst_19967__$1 < n);
var state_19994__$1 = (function (){var statearr_20008 = state_19994;
(statearr_20008[(12)] = inst_19966);

(statearr_20008[(11)] = inst_19967__$1);

return statearr_20008;
})();
if(cljs.core.truth_(inst_19968)){
var statearr_20009_20038 = state_19994__$1;
(statearr_20009_20038[(1)] = (8));

} else {
var statearr_20010_20039 = state_19994__$1;
(statearr_20010_20039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (14))){
var inst_19987 = (state_19994[(2)]);
var inst_19988 = cljs.core.async.close_BANG_.call(null,out);
var state_19994__$1 = (function (){var statearr_20012 = state_19994;
(statearr_20012[(13)] = inst_19987);

return statearr_20012;
})();
var statearr_20013_20040 = state_19994__$1;
(statearr_20013_20040[(2)] = inst_19988);

(statearr_20013_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (10))){
var inst_19978 = (state_19994[(2)]);
var state_19994__$1 = state_19994;
var statearr_20014_20041 = state_19994__$1;
(statearr_20014_20041[(2)] = inst_19978);

(statearr_20014_20041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19995 === (8))){
var inst_19967 = (state_19994[(11)]);
var inst_19958 = (state_19994[(7)]);
var tmp20011 = inst_19958;
var inst_19958__$1 = tmp20011;
var inst_19959 = inst_19967;
var state_19994__$1 = (function (){var statearr_20015 = state_19994;
(statearr_20015[(7)] = inst_19958__$1);

(statearr_20015[(8)] = inst_19959);

return statearr_20015;
})();
var statearr_20016_20042 = state_19994__$1;
(statearr_20016_20042[(2)] = null);

(statearr_20016_20042[(1)] = (2));


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
});})(c__10692__auto___20028,out))
;
return ((function (switch__10627__auto__,c__10692__auto___20028,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_20020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20020[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_20020[(1)] = (1));

return statearr_20020;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19994){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e20021){if((e20021 instanceof Object)){
var ex__10631__auto__ = e20021;
var statearr_20022_20043 = state_19994;
(statearr_20022_20043[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20044 = state_19994;
state_19994 = G__20044;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___20028,out))
})();
var state__10694__auto__ = (function (){var statearr_20023 = f__10693__auto__.call(null);
(statearr_20023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___20028);

return statearr_20023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___20028,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20045 = [];
var len__6152__auto___20119 = arguments.length;
var i__6153__auto___20120 = (0);
while(true){
if((i__6153__auto___20120 < len__6152__auto___20119)){
args20045.push((arguments[i__6153__auto___20120]));

var G__20121 = (i__6153__auto___20120 + (1));
i__6153__auto___20120 = G__20121;
continue;
} else {
}
break;
}

var G__20047 = args20045.length;
switch (G__20047) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20045.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___20123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___20123,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___20123,out){
return (function (state_20089){
var state_val_20090 = (state_20089[(1)]);
if((state_val_20090 === (7))){
var inst_20085 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20091_20124 = state_20089__$1;
(statearr_20091_20124[(2)] = inst_20085);

(statearr_20091_20124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (1))){
var inst_20048 = [];
var inst_20049 = inst_20048;
var inst_20050 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20089__$1 = (function (){var statearr_20092 = state_20089;
(statearr_20092[(7)] = inst_20049);

(statearr_20092[(8)] = inst_20050);

return statearr_20092;
})();
var statearr_20093_20125 = state_20089__$1;
(statearr_20093_20125[(2)] = null);

(statearr_20093_20125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (4))){
var inst_20053 = (state_20089[(9)]);
var inst_20053__$1 = (state_20089[(2)]);
var inst_20054 = (inst_20053__$1 == null);
var inst_20055 = cljs.core.not.call(null,inst_20054);
var state_20089__$1 = (function (){var statearr_20094 = state_20089;
(statearr_20094[(9)] = inst_20053__$1);

return statearr_20094;
})();
if(inst_20055){
var statearr_20095_20126 = state_20089__$1;
(statearr_20095_20126[(1)] = (5));

} else {
var statearr_20096_20127 = state_20089__$1;
(statearr_20096_20127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (15))){
var inst_20079 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20097_20128 = state_20089__$1;
(statearr_20097_20128[(2)] = inst_20079);

(statearr_20097_20128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (13))){
var state_20089__$1 = state_20089;
var statearr_20098_20129 = state_20089__$1;
(statearr_20098_20129[(2)] = null);

(statearr_20098_20129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (6))){
var inst_20049 = (state_20089[(7)]);
var inst_20074 = inst_20049.length;
var inst_20075 = (inst_20074 > (0));
var state_20089__$1 = state_20089;
if(cljs.core.truth_(inst_20075)){
var statearr_20099_20130 = state_20089__$1;
(statearr_20099_20130[(1)] = (12));

} else {
var statearr_20100_20131 = state_20089__$1;
(statearr_20100_20131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (3))){
var inst_20087 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20089__$1,inst_20087);
} else {
if((state_val_20090 === (12))){
var inst_20049 = (state_20089[(7)]);
var inst_20077 = cljs.core.vec.call(null,inst_20049);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20089__$1,(15),out,inst_20077);
} else {
if((state_val_20090 === (2))){
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20089__$1,(4),ch);
} else {
if((state_val_20090 === (11))){
var inst_20057 = (state_20089[(10)]);
var inst_20053 = (state_20089[(9)]);
var inst_20067 = (state_20089[(2)]);
var inst_20068 = [];
var inst_20069 = inst_20068.push(inst_20053);
var inst_20049 = inst_20068;
var inst_20050 = inst_20057;
var state_20089__$1 = (function (){var statearr_20101 = state_20089;
(statearr_20101[(11)] = inst_20067);

(statearr_20101[(7)] = inst_20049);

(statearr_20101[(12)] = inst_20069);

(statearr_20101[(8)] = inst_20050);

return statearr_20101;
})();
var statearr_20102_20132 = state_20089__$1;
(statearr_20102_20132[(2)] = null);

(statearr_20102_20132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (9))){
var inst_20049 = (state_20089[(7)]);
var inst_20065 = cljs.core.vec.call(null,inst_20049);
var state_20089__$1 = state_20089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20089__$1,(11),out,inst_20065);
} else {
if((state_val_20090 === (5))){
var inst_20057 = (state_20089[(10)]);
var inst_20053 = (state_20089[(9)]);
var inst_20050 = (state_20089[(8)]);
var inst_20057__$1 = f.call(null,inst_20053);
var inst_20058 = cljs.core._EQ_.call(null,inst_20057__$1,inst_20050);
var inst_20059 = cljs.core.keyword_identical_QMARK_.call(null,inst_20050,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20060 = (inst_20058) || (inst_20059);
var state_20089__$1 = (function (){var statearr_20103 = state_20089;
(statearr_20103[(10)] = inst_20057__$1);

return statearr_20103;
})();
if(cljs.core.truth_(inst_20060)){
var statearr_20104_20133 = state_20089__$1;
(statearr_20104_20133[(1)] = (8));

} else {
var statearr_20105_20134 = state_20089__$1;
(statearr_20105_20134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (14))){
var inst_20082 = (state_20089[(2)]);
var inst_20083 = cljs.core.async.close_BANG_.call(null,out);
var state_20089__$1 = (function (){var statearr_20107 = state_20089;
(statearr_20107[(13)] = inst_20082);

return statearr_20107;
})();
var statearr_20108_20135 = state_20089__$1;
(statearr_20108_20135[(2)] = inst_20083);

(statearr_20108_20135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (10))){
var inst_20072 = (state_20089[(2)]);
var state_20089__$1 = state_20089;
var statearr_20109_20136 = state_20089__$1;
(statearr_20109_20136[(2)] = inst_20072);

(statearr_20109_20136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20090 === (8))){
var inst_20049 = (state_20089[(7)]);
var inst_20057 = (state_20089[(10)]);
var inst_20053 = (state_20089[(9)]);
var inst_20062 = inst_20049.push(inst_20053);
var tmp20106 = inst_20049;
var inst_20049__$1 = tmp20106;
var inst_20050 = inst_20057;
var state_20089__$1 = (function (){var statearr_20110 = state_20089;
(statearr_20110[(7)] = inst_20049__$1);

(statearr_20110[(14)] = inst_20062);

(statearr_20110[(8)] = inst_20050);

return statearr_20110;
})();
var statearr_20111_20137 = state_20089__$1;
(statearr_20111_20137[(2)] = null);

(statearr_20111_20137[(1)] = (2));


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
});})(c__10692__auto___20123,out))
;
return ((function (switch__10627__auto__,c__10692__auto___20123,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_20115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20115[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_20115[(1)] = (1));

return statearr_20115;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_20089){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_20089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e20116){if((e20116 instanceof Object)){
var ex__10631__auto__ = e20116;
var statearr_20117_20138 = state_20089;
(statearr_20117_20138[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20139 = state_20089;
state_20089 = G__20139;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_20089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_20089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___20123,out))
})();
var state__10694__auto__ = (function (){var statearr_20118 = f__10693__auto__.call(null);
(statearr_20118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___20123);

return statearr_20118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___20123,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map