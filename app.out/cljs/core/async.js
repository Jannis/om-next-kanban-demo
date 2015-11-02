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
if(typeof cljs.core.async.t_cljs$core$async17452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17452 = (function (fn_handler,f,meta17453){
this.fn_handler = fn_handler;
this.f = f;
this.meta17453 = meta17453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17454,meta17453__$1){
var self__ = this;
var _17454__$1 = this;
return (new cljs.core.async.t_cljs$core$async17452(self__.fn_handler,self__.f,meta17453__$1));
});

cljs.core.async.t_cljs$core$async17452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17454){
var self__ = this;
var _17454__$1 = this;
return self__.meta17453;
});

cljs.core.async.t_cljs$core$async17452.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17452.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17452.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17453","meta17453",-1489914070,null)], null);
});

cljs.core.async.t_cljs$core$async17452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17452";

cljs.core.async.t_cljs$core$async17452.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17452");
});

cljs.core.async.__GT_t_cljs$core$async17452 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17452(fn_handler__$1,f__$1,meta17453){
return (new cljs.core.async.t_cljs$core$async17452(fn_handler__$1,f__$1,meta17453));
});

}

return (new cljs.core.async.t_cljs$core$async17452(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17457.length)].join('')));

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
var args17464 = [];
var len__6152__auto___17467 = arguments.length;
var i__6153__auto___17468 = (0);
while(true){
if((i__6153__auto___17468 < len__6152__auto___17467)){
args17464.push((arguments[i__6153__auto___17468]));

var G__17469 = (i__6153__auto___17468 + (1));
i__6153__auto___17468 = G__17469;
continue;
} else {
}
break;
}

var G__17466 = args17464.length;
switch (G__17466) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17464.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17471 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17471);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17471,ret){
return (function (){
return fn1.call(null,val_17471);
});})(val_17471,ret))
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
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17472.length)].join('')));

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
var n__5997__auto___17479 = n;
var x_17480 = (0);
while(true){
if((x_17480 < n__5997__auto___17479)){
(a[x_17480] = (0));

var G__17481 = (x_17480 + (1));
x_17480 = G__17481;
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

var G__17482 = (i + (1));
i = G__17482;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17486 = (function (alt_flag,flag,meta17487){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17487 = meta17487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17488,meta17487__$1){
var self__ = this;
var _17488__$1 = this;
return (new cljs.core.async.t_cljs$core$async17486(self__.alt_flag,self__.flag,meta17487__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17488){
var self__ = this;
var _17488__$1 = this;
return self__.meta17487;
});})(flag))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17486.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17487","meta17487",274027511,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17486";

cljs.core.async.t_cljs$core$async17486.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17486");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17486 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17486(alt_flag__$1,flag__$1,meta17487){
return (new cljs.core.async.t_cljs$core$async17486(alt_flag__$1,flag__$1,meta17487));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17486(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17492 = (function (alt_handler,flag,cb,meta17493){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17493 = meta17493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17494,meta17493__$1){
var self__ = this;
var _17494__$1 = this;
return (new cljs.core.async.t_cljs$core$async17492(self__.alt_handler,self__.flag,self__.cb,meta17493__$1));
});

cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17494){
var self__ = this;
var _17494__$1 = this;
return self__.meta17493;
});

cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17493","meta17493",167891240,null)], null);
});

cljs.core.async.t_cljs$core$async17492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17492";

cljs.core.async.t_cljs$core$async17492.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17492");
});

cljs.core.async.__GT_t_cljs$core$async17492 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17492(alt_handler__$1,flag__$1,cb__$1,meta17493){
return (new cljs.core.async.t_cljs$core$async17492(alt_handler__$1,flag__$1,cb__$1,meta17493));
});

}

return (new cljs.core.async.t_cljs$core$async17492(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17495_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17495_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17496_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17496_SHARP_,port], null));
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
var G__17497 = (i + (1));
i = G__17497;
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
var len__6152__auto___17503 = arguments.length;
var i__6153__auto___17504 = (0);
while(true){
if((i__6153__auto___17504 < len__6152__auto___17503)){
args__6159__auto__.push((arguments[i__6153__auto___17504]));

var G__17505 = (i__6153__auto___17504 + (1));
i__6153__auto___17504 = G__17505;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17500){
var map__17501 = p__17500;
var map__17501__$1 = ((((!((map__17501 == null)))?((((map__17501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17501):map__17501);
var opts = map__17501__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17498){
var G__17499 = cljs.core.first.call(null,seq17498);
var seq17498__$1 = cljs.core.next.call(null,seq17498);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17499,seq17498__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17506 = [];
var len__6152__auto___17556 = arguments.length;
var i__6153__auto___17557 = (0);
while(true){
if((i__6153__auto___17557 < len__6152__auto___17556)){
args17506.push((arguments[i__6153__auto___17557]));

var G__17558 = (i__6153__auto___17557 + (1));
i__6153__auto___17557 = G__17558;
continue;
} else {
}
break;
}

var G__17508 = args17506.length;
switch (G__17508) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17506.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10692__auto___17560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17560){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17560){
return (function (state_17532){
var state_val_17533 = (state_17532[(1)]);
if((state_val_17533 === (7))){
var inst_17528 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17534_17561 = state_17532__$1;
(statearr_17534_17561[(2)] = inst_17528);

(statearr_17534_17561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (1))){
var state_17532__$1 = state_17532;
var statearr_17535_17562 = state_17532__$1;
(statearr_17535_17562[(2)] = null);

(statearr_17535_17562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (4))){
var inst_17511 = (state_17532[(7)]);
var inst_17511__$1 = (state_17532[(2)]);
var inst_17512 = (inst_17511__$1 == null);
var state_17532__$1 = (function (){var statearr_17536 = state_17532;
(statearr_17536[(7)] = inst_17511__$1);

return statearr_17536;
})();
if(cljs.core.truth_(inst_17512)){
var statearr_17537_17563 = state_17532__$1;
(statearr_17537_17563[(1)] = (5));

} else {
var statearr_17538_17564 = state_17532__$1;
(statearr_17538_17564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (13))){
var state_17532__$1 = state_17532;
var statearr_17539_17565 = state_17532__$1;
(statearr_17539_17565[(2)] = null);

(statearr_17539_17565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (6))){
var inst_17511 = (state_17532[(7)]);
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17532__$1,(11),to,inst_17511);
} else {
if((state_val_17533 === (3))){
var inst_17530 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17532__$1,inst_17530);
} else {
if((state_val_17533 === (12))){
var state_17532__$1 = state_17532;
var statearr_17540_17566 = state_17532__$1;
(statearr_17540_17566[(2)] = null);

(statearr_17540_17566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (2))){
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17532__$1,(4),from);
} else {
if((state_val_17533 === (11))){
var inst_17521 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
if(cljs.core.truth_(inst_17521)){
var statearr_17541_17567 = state_17532__$1;
(statearr_17541_17567[(1)] = (12));

} else {
var statearr_17542_17568 = state_17532__$1;
(statearr_17542_17568[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (9))){
var state_17532__$1 = state_17532;
var statearr_17543_17569 = state_17532__$1;
(statearr_17543_17569[(2)] = null);

(statearr_17543_17569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (5))){
var state_17532__$1 = state_17532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17544_17570 = state_17532__$1;
(statearr_17544_17570[(1)] = (8));

} else {
var statearr_17545_17571 = state_17532__$1;
(statearr_17545_17571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (14))){
var inst_17526 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17546_17572 = state_17532__$1;
(statearr_17546_17572[(2)] = inst_17526);

(statearr_17546_17572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (10))){
var inst_17518 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17547_17573 = state_17532__$1;
(statearr_17547_17573[(2)] = inst_17518);

(statearr_17547_17573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (8))){
var inst_17515 = cljs.core.async.close_BANG_.call(null,to);
var state_17532__$1 = state_17532;
var statearr_17548_17574 = state_17532__$1;
(statearr_17548_17574[(2)] = inst_17515);

(statearr_17548_17574[(1)] = (10));


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
});})(c__10692__auto___17560))
;
return ((function (switch__10627__auto__,c__10692__auto___17560){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_17552 = [null,null,null,null,null,null,null,null];
(statearr_17552[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_17552[(1)] = (1));

return statearr_17552;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_17532){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17553){if((e17553 instanceof Object)){
var ex__10631__auto__ = e17553;
var statearr_17554_17575 = state_17532;
(statearr_17554_17575[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17576 = state_17532;
state_17532 = G__17576;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_17532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17560))
})();
var state__10694__auto__ = (function (){var statearr_17555 = f__10693__auto__.call(null);
(statearr_17555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17560);

return statearr_17555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17560))
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
return (function (p__17760){
var vec__17761 = p__17760;
var v = cljs.core.nth.call(null,vec__17761,(0),null);
var p = cljs.core.nth.call(null,vec__17761,(1),null);
var job = vec__17761;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10692__auto___17943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results){
return (function (state_17766){
var state_val_17767 = (state_17766[(1)]);
if((state_val_17767 === (1))){
var state_17766__$1 = state_17766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17766__$1,(2),res,v);
} else {
if((state_val_17767 === (2))){
var inst_17763 = (state_17766[(2)]);
var inst_17764 = cljs.core.async.close_BANG_.call(null,res);
var state_17766__$1 = (function (){var statearr_17768 = state_17766;
(statearr_17768[(7)] = inst_17763);

return statearr_17768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17766__$1,inst_17764);
} else {
return null;
}
}
});})(c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results))
;
return ((function (switch__10627__auto__,c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17772 = [null,null,null,null,null,null,null,null];
(statearr_17772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17772[(1)] = (1));

return statearr_17772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17766){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17773){if((e17773 instanceof Object)){
var ex__10631__auto__ = e17773;
var statearr_17774_17944 = state_17766;
(statearr_17774_17944[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17945 = state_17766;
state_17766 = G__17945;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results))
})();
var state__10694__auto__ = (function (){var statearr_17775 = f__10693__auto__.call(null);
(statearr_17775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17943);

return statearr_17775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17943,res,vec__17761,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17776){
var vec__17777 = p__17776;
var v = cljs.core.nth.call(null,vec__17777,(0),null);
var p = cljs.core.nth.call(null,vec__17777,(1),null);
var job = vec__17777;
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
var n__5997__auto___17946 = n;
var __17947 = (0);
while(true){
if((__17947 < n__5997__auto___17946)){
var G__17778_17948 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17778_17948) {
case "compute":
var c__10692__auto___17950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17947,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (__17947,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function (state_17791){
var state_val_17792 = (state_17791[(1)]);
if((state_val_17792 === (1))){
var state_17791__$1 = state_17791;
var statearr_17793_17951 = state_17791__$1;
(statearr_17793_17951[(2)] = null);

(statearr_17793_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (2))){
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(4),jobs);
} else {
if((state_val_17792 === (3))){
var inst_17789 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17791__$1,inst_17789);
} else {
if((state_val_17792 === (4))){
var inst_17781 = (state_17791[(2)]);
var inst_17782 = process.call(null,inst_17781);
var state_17791__$1 = state_17791;
if(cljs.core.truth_(inst_17782)){
var statearr_17794_17952 = state_17791__$1;
(statearr_17794_17952[(1)] = (5));

} else {
var statearr_17795_17953 = state_17791__$1;
(statearr_17795_17953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (5))){
var state_17791__$1 = state_17791;
var statearr_17796_17954 = state_17791__$1;
(statearr_17796_17954[(2)] = null);

(statearr_17796_17954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (6))){
var state_17791__$1 = state_17791;
var statearr_17797_17955 = state_17791__$1;
(statearr_17797_17955[(2)] = null);

(statearr_17797_17955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (7))){
var inst_17787 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17798_17956 = state_17791__$1;
(statearr_17798_17956[(2)] = inst_17787);

(statearr_17798_17956[(1)] = (3));


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
});})(__17947,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
;
return ((function (__17947,switch__10627__auto__,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17802 = [null,null,null,null,null,null,null];
(statearr_17802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17802[(1)] = (1));

return statearr_17802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17791){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17803){if((e17803 instanceof Object)){
var ex__10631__auto__ = e17803;
var statearr_17804_17957 = state_17791;
(statearr_17804_17957[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17958 = state_17791;
state_17791 = G__17958;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(__17947,switch__10627__auto__,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17805 = f__10693__auto__.call(null);
(statearr_17805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17950);

return statearr_17805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(__17947,c__10692__auto___17950,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
);


break;
case "async":
var c__10692__auto___17959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17947,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (__17947,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function (state_17818){
var state_val_17819 = (state_17818[(1)]);
if((state_val_17819 === (1))){
var state_17818__$1 = state_17818;
var statearr_17820_17960 = state_17818__$1;
(statearr_17820_17960[(2)] = null);

(statearr_17820_17960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (2))){
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17818__$1,(4),jobs);
} else {
if((state_val_17819 === (3))){
var inst_17816 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17818__$1,inst_17816);
} else {
if((state_val_17819 === (4))){
var inst_17808 = (state_17818[(2)]);
var inst_17809 = async.call(null,inst_17808);
var state_17818__$1 = state_17818;
if(cljs.core.truth_(inst_17809)){
var statearr_17821_17961 = state_17818__$1;
(statearr_17821_17961[(1)] = (5));

} else {
var statearr_17822_17962 = state_17818__$1;
(statearr_17822_17962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (5))){
var state_17818__$1 = state_17818;
var statearr_17823_17963 = state_17818__$1;
(statearr_17823_17963[(2)] = null);

(statearr_17823_17963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (6))){
var state_17818__$1 = state_17818;
var statearr_17824_17964 = state_17818__$1;
(statearr_17824_17964[(2)] = null);

(statearr_17824_17964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17819 === (7))){
var inst_17814 = (state_17818[(2)]);
var state_17818__$1 = state_17818;
var statearr_17825_17965 = state_17818__$1;
(statearr_17825_17965[(2)] = inst_17814);

(statearr_17825_17965[(1)] = (3));


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
});})(__17947,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
;
return ((function (__17947,switch__10627__auto__,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17829 = [null,null,null,null,null,null,null];
(statearr_17829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17829[(1)] = (1));

return statearr_17829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17818){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17830){if((e17830 instanceof Object)){
var ex__10631__auto__ = e17830;
var statearr_17831_17966 = state_17818;
(statearr_17831_17966[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17967 = state_17818;
state_17818 = G__17967;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(__17947,switch__10627__auto__,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17832 = f__10693__auto__.call(null);
(statearr_17832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17959);

return statearr_17832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(__17947,c__10692__auto___17959,G__17778_17948,n__5997__auto___17946,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17968 = (__17947 + (1));
__17947 = G__17968;
continue;
} else {
}
break;
}

var c__10692__auto___17969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___17969,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___17969,jobs,results,process,async){
return (function (state_17854){
var state_val_17855 = (state_17854[(1)]);
if((state_val_17855 === (1))){
var state_17854__$1 = state_17854;
var statearr_17856_17970 = state_17854__$1;
(statearr_17856_17970[(2)] = null);

(statearr_17856_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (2))){
var state_17854__$1 = state_17854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17854__$1,(4),from);
} else {
if((state_val_17855 === (3))){
var inst_17852 = (state_17854[(2)]);
var state_17854__$1 = state_17854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17854__$1,inst_17852);
} else {
if((state_val_17855 === (4))){
var inst_17835 = (state_17854[(7)]);
var inst_17835__$1 = (state_17854[(2)]);
var inst_17836 = (inst_17835__$1 == null);
var state_17854__$1 = (function (){var statearr_17857 = state_17854;
(statearr_17857[(7)] = inst_17835__$1);

return statearr_17857;
})();
if(cljs.core.truth_(inst_17836)){
var statearr_17858_17971 = state_17854__$1;
(statearr_17858_17971[(1)] = (5));

} else {
var statearr_17859_17972 = state_17854__$1;
(statearr_17859_17972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (5))){
var inst_17838 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17854__$1 = state_17854;
var statearr_17860_17973 = state_17854__$1;
(statearr_17860_17973[(2)] = inst_17838);

(statearr_17860_17973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (6))){
var inst_17835 = (state_17854[(7)]);
var inst_17840 = (state_17854[(8)]);
var inst_17840__$1 = cljs.core.async.chan.call(null,(1));
var inst_17841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17842 = [inst_17835,inst_17840__$1];
var inst_17843 = (new cljs.core.PersistentVector(null,2,(5),inst_17841,inst_17842,null));
var state_17854__$1 = (function (){var statearr_17861 = state_17854;
(statearr_17861[(8)] = inst_17840__$1);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17854__$1,(8),jobs,inst_17843);
} else {
if((state_val_17855 === (7))){
var inst_17850 = (state_17854[(2)]);
var state_17854__$1 = state_17854;
var statearr_17862_17974 = state_17854__$1;
(statearr_17862_17974[(2)] = inst_17850);

(statearr_17862_17974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17855 === (8))){
var inst_17840 = (state_17854[(8)]);
var inst_17845 = (state_17854[(2)]);
var state_17854__$1 = (function (){var statearr_17863 = state_17854;
(statearr_17863[(9)] = inst_17845);

return statearr_17863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17854__$1,(9),results,inst_17840);
} else {
if((state_val_17855 === (9))){
var inst_17847 = (state_17854[(2)]);
var state_17854__$1 = (function (){var statearr_17864 = state_17854;
(statearr_17864[(10)] = inst_17847);

return statearr_17864;
})();
var statearr_17865_17975 = state_17854__$1;
(statearr_17865_17975[(2)] = null);

(statearr_17865_17975[(1)] = (2));


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
});})(c__10692__auto___17969,jobs,results,process,async))
;
return ((function (switch__10627__auto__,c__10692__auto___17969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0 = (function (){
var statearr_17869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17869[(1)] = (1));

return statearr_17869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17854){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17870){if((e17870 instanceof Object)){
var ex__10631__auto__ = e17870;
var statearr_17871_17976 = state_17854;
(statearr_17871_17976[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17977 = state_17854;
state_17854 = G__17977;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___17969,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17872 = f__10693__auto__.call(null);
(statearr_17872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___17969);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___17969,jobs,results,process,async))
);


var c__10692__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto__,jobs,results,process,async){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto__,jobs,results,process,async){
return (function (state_17910){
var state_val_17911 = (state_17910[(1)]);
if((state_val_17911 === (7))){
var inst_17906 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17912_17978 = state_17910__$1;
(statearr_17912_17978[(2)] = inst_17906);

(statearr_17912_17978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (20))){
var state_17910__$1 = state_17910;
var statearr_17913_17979 = state_17910__$1;
(statearr_17913_17979[(2)] = null);

(statearr_17913_17979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (1))){
var state_17910__$1 = state_17910;
var statearr_17914_17980 = state_17910__$1;
(statearr_17914_17980[(2)] = null);

(statearr_17914_17980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (4))){
var inst_17875 = (state_17910[(7)]);
var inst_17875__$1 = (state_17910[(2)]);
var inst_17876 = (inst_17875__$1 == null);
var state_17910__$1 = (function (){var statearr_17915 = state_17910;
(statearr_17915[(7)] = inst_17875__$1);

return statearr_17915;
})();
if(cljs.core.truth_(inst_17876)){
var statearr_17916_17981 = state_17910__$1;
(statearr_17916_17981[(1)] = (5));

} else {
var statearr_17917_17982 = state_17910__$1;
(statearr_17917_17982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (15))){
var inst_17888 = (state_17910[(8)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17910__$1,(18),to,inst_17888);
} else {
if((state_val_17911 === (21))){
var inst_17901 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17918_17983 = state_17910__$1;
(statearr_17918_17983[(2)] = inst_17901);

(statearr_17918_17983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (13))){
var inst_17903 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17919 = state_17910;
(statearr_17919[(9)] = inst_17903);

return statearr_17919;
})();
var statearr_17920_17984 = state_17910__$1;
(statearr_17920_17984[(2)] = null);

(statearr_17920_17984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (6))){
var inst_17875 = (state_17910[(7)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(11),inst_17875);
} else {
if((state_val_17911 === (17))){
var inst_17896 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
if(cljs.core.truth_(inst_17896)){
var statearr_17921_17985 = state_17910__$1;
(statearr_17921_17985[(1)] = (19));

} else {
var statearr_17922_17986 = state_17910__$1;
(statearr_17922_17986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (3))){
var inst_17908 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17910__$1,inst_17908);
} else {
if((state_val_17911 === (12))){
var inst_17885 = (state_17910[(10)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(14),inst_17885);
} else {
if((state_val_17911 === (2))){
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17910__$1,(4),results);
} else {
if((state_val_17911 === (19))){
var state_17910__$1 = state_17910;
var statearr_17923_17987 = state_17910__$1;
(statearr_17923_17987[(2)] = null);

(statearr_17923_17987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (11))){
var inst_17885 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17924 = state_17910;
(statearr_17924[(10)] = inst_17885);

return statearr_17924;
})();
var statearr_17925_17988 = state_17910__$1;
(statearr_17925_17988[(2)] = null);

(statearr_17925_17988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (9))){
var state_17910__$1 = state_17910;
var statearr_17926_17989 = state_17910__$1;
(statearr_17926_17989[(2)] = null);

(statearr_17926_17989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (5))){
var state_17910__$1 = state_17910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17927_17990 = state_17910__$1;
(statearr_17927_17990[(1)] = (8));

} else {
var statearr_17928_17991 = state_17910__$1;
(statearr_17928_17991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (14))){
var inst_17890 = (state_17910[(11)]);
var inst_17888 = (state_17910[(8)]);
var inst_17888__$1 = (state_17910[(2)]);
var inst_17889 = (inst_17888__$1 == null);
var inst_17890__$1 = cljs.core.not.call(null,inst_17889);
var state_17910__$1 = (function (){var statearr_17929 = state_17910;
(statearr_17929[(11)] = inst_17890__$1);

(statearr_17929[(8)] = inst_17888__$1);

return statearr_17929;
})();
if(inst_17890__$1){
var statearr_17930_17992 = state_17910__$1;
(statearr_17930_17992[(1)] = (15));

} else {
var statearr_17931_17993 = state_17910__$1;
(statearr_17931_17993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (16))){
var inst_17890 = (state_17910[(11)]);
var state_17910__$1 = state_17910;
var statearr_17932_17994 = state_17910__$1;
(statearr_17932_17994[(2)] = inst_17890);

(statearr_17932_17994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (10))){
var inst_17882 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17933_17995 = state_17910__$1;
(statearr_17933_17995[(2)] = inst_17882);

(statearr_17933_17995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (18))){
var inst_17893 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17934_17996 = state_17910__$1;
(statearr_17934_17996[(2)] = inst_17893);

(statearr_17934_17996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (8))){
var inst_17879 = cljs.core.async.close_BANG_.call(null,to);
var state_17910__$1 = state_17910;
var statearr_17935_17997 = state_17910__$1;
(statearr_17935_17997[(2)] = inst_17879);

(statearr_17935_17997[(1)] = (10));


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
var statearr_17939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__);

(statearr_17939[(1)] = (1));

return statearr_17939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1 = (function (state_17910){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_17910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e17940){if((e17940 instanceof Object)){
var ex__10631__auto__ = e17940;
var statearr_17941_17998 = state_17910;
(statearr_17941_17998[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17999 = state_17910;
state_17910 = G__17999;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__,jobs,results,process,async))
})();
var state__10694__auto__ = (function (){var statearr_17942 = f__10693__auto__.call(null);
(statearr_17942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_17942;
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18000.length)].join('')));

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
var args18007 = [];
var len__6152__auto___18010 = arguments.length;
var i__6153__auto___18011 = (0);
while(true){
if((i__6153__auto___18011 < len__6152__auto___18010)){
args18007.push((arguments[i__6153__auto___18011]));

var G__18012 = (i__6153__auto___18011 + (1));
i__6153__auto___18011 = G__18012;
continue;
} else {
}
break;
}

var G__18009 = args18007.length;
switch (G__18009) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18007.length)].join('')));

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
var args18014 = [];
var len__6152__auto___18067 = arguments.length;
var i__6153__auto___18068 = (0);
while(true){
if((i__6153__auto___18068 < len__6152__auto___18067)){
args18014.push((arguments[i__6153__auto___18068]));

var G__18069 = (i__6153__auto___18068 + (1));
i__6153__auto___18068 = G__18069;
continue;
} else {
}
break;
}

var G__18016 = args18014.length;
switch (G__18016) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18014.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10692__auto___18071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___18071,tc,fc){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___18071,tc,fc){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18044_18072 = state_18042__$1;
(statearr_18044_18072[(2)] = inst_18038);

(statearr_18044_18072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var state_18042__$1 = state_18042;
var statearr_18045_18073 = state_18042__$1;
(statearr_18045_18073[(2)] = null);

(statearr_18045_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_18019 = (state_18042[(7)]);
var inst_18019__$1 = (state_18042[(2)]);
var inst_18020 = (inst_18019__$1 == null);
var state_18042__$1 = (function (){var statearr_18046 = state_18042;
(statearr_18046[(7)] = inst_18019__$1);

return statearr_18046;
})();
if(cljs.core.truth_(inst_18020)){
var statearr_18047_18074 = state_18042__$1;
(statearr_18047_18074[(1)] = (5));

} else {
var statearr_18048_18075 = state_18042__$1;
(statearr_18048_18075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (13))){
var state_18042__$1 = state_18042;
var statearr_18049_18076 = state_18042__$1;
(statearr_18049_18076[(2)] = null);

(statearr_18049_18076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_18019 = (state_18042[(7)]);
var inst_18025 = p.call(null,inst_18019);
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18025)){
var statearr_18050_18077 = state_18042__$1;
(statearr_18050_18077[(1)] = (9));

} else {
var statearr_18051_18078 = state_18042__$1;
(statearr_18051_18078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (12))){
var state_18042__$1 = state_18042;
var statearr_18052_18079 = state_18042__$1;
(statearr_18052_18079[(2)] = null);

(statearr_18052_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18042__$1,(4),ch);
} else {
if((state_val_18043 === (11))){
var inst_18019 = (state_18042[(7)]);
var inst_18029 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18042__$1,(8),inst_18029,inst_18019);
} else {
if((state_val_18043 === (9))){
var state_18042__$1 = state_18042;
var statearr_18053_18080 = state_18042__$1;
(statearr_18053_18080[(2)] = tc);

(statearr_18053_18080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var inst_18022 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18023 = cljs.core.async.close_BANG_.call(null,fc);
var state_18042__$1 = (function (){var statearr_18054 = state_18042;
(statearr_18054[(8)] = inst_18022);

return statearr_18054;
})();
var statearr_18055_18081 = state_18042__$1;
(statearr_18055_18081[(2)] = inst_18023);

(statearr_18055_18081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (14))){
var inst_18036 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18056_18082 = state_18042__$1;
(statearr_18056_18082[(2)] = inst_18036);

(statearr_18056_18082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var state_18042__$1 = state_18042;
var statearr_18057_18083 = state_18042__$1;
(statearr_18057_18083[(2)] = fc);

(statearr_18057_18083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18031 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18031)){
var statearr_18058_18084 = state_18042__$1;
(statearr_18058_18084[(1)] = (12));

} else {
var statearr_18059_18085 = state_18042__$1;
(statearr_18059_18085[(1)] = (13));

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
});})(c__10692__auto___18071,tc,fc))
;
return ((function (switch__10627__auto__,c__10692__auto___18071,tc,fc){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_18063 = [null,null,null,null,null,null,null,null,null];
(statearr_18063[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_18063[(1)] = (1));

return statearr_18063;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_18042){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18064){if((e18064 instanceof Object)){
var ex__10631__auto__ = e18064;
var statearr_18065_18086 = state_18042;
(statearr_18065_18086[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_18042;
state_18042 = G__18087;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___18071,tc,fc))
})();
var state__10694__auto__ = (function (){var statearr_18066 = f__10693__auto__.call(null);
(statearr_18066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___18071);

return statearr_18066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___18071,tc,fc))
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
return (function (state_18134){
var state_val_18135 = (state_18134[(1)]);
if((state_val_18135 === (1))){
var inst_18120 = init;
var state_18134__$1 = (function (){var statearr_18136 = state_18134;
(statearr_18136[(7)] = inst_18120);

return statearr_18136;
})();
var statearr_18137_18152 = state_18134__$1;
(statearr_18137_18152[(2)] = null);

(statearr_18137_18152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (2))){
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18134__$1,(4),ch);
} else {
if((state_val_18135 === (3))){
var inst_18132 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18134__$1,inst_18132);
} else {
if((state_val_18135 === (4))){
var inst_18123 = (state_18134[(8)]);
var inst_18123__$1 = (state_18134[(2)]);
var inst_18124 = (inst_18123__$1 == null);
var state_18134__$1 = (function (){var statearr_18138 = state_18134;
(statearr_18138[(8)] = inst_18123__$1);

return statearr_18138;
})();
if(cljs.core.truth_(inst_18124)){
var statearr_18139_18153 = state_18134__$1;
(statearr_18139_18153[(1)] = (5));

} else {
var statearr_18140_18154 = state_18134__$1;
(statearr_18140_18154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (5))){
var inst_18120 = (state_18134[(7)]);
var state_18134__$1 = state_18134;
var statearr_18141_18155 = state_18134__$1;
(statearr_18141_18155[(2)] = inst_18120);

(statearr_18141_18155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (6))){
var inst_18123 = (state_18134[(8)]);
var inst_18120 = (state_18134[(7)]);
var inst_18127 = f.call(null,inst_18120,inst_18123);
var inst_18120__$1 = inst_18127;
var state_18134__$1 = (function (){var statearr_18142 = state_18134;
(statearr_18142[(7)] = inst_18120__$1);

return statearr_18142;
})();
var statearr_18143_18156 = state_18134__$1;
(statearr_18143_18156[(2)] = null);

(statearr_18143_18156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18135 === (7))){
var inst_18130 = (state_18134[(2)]);
var state_18134__$1 = state_18134;
var statearr_18144_18157 = state_18134__$1;
(statearr_18144_18157[(2)] = inst_18130);

(statearr_18144_18157[(1)] = (3));


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
var statearr_18148 = [null,null,null,null,null,null,null,null,null];
(statearr_18148[(0)] = cljs$core$async$reduce_$_state_machine__10628__auto__);

(statearr_18148[(1)] = (1));

return statearr_18148;
});
var cljs$core$async$reduce_$_state_machine__10628__auto____1 = (function (state_18134){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object)){
var ex__10631__auto__ = e18149;
var statearr_18150_18158 = state_18134;
(statearr_18150_18158[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18159 = state_18134;
state_18134 = G__18159;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10628__auto__ = function(state_18134){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10628__auto____1.call(this,state_18134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10628__auto____0;
cljs$core$async$reduce_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10628__auto____1;
return cljs$core$async$reduce_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_18151 = f__10693__auto__.call(null);
(statearr_18151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_18151;
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
var args18160 = [];
var len__6152__auto___18212 = arguments.length;
var i__6153__auto___18213 = (0);
while(true){
if((i__6153__auto___18213 < len__6152__auto___18212)){
args18160.push((arguments[i__6153__auto___18213]));

var G__18214 = (i__6153__auto___18213 + (1));
i__6153__auto___18213 = G__18214;
continue;
} else {
}
break;
}

var G__18162 = args18160.length;
switch (G__18162) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18160.length)].join('')));

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
return (function (state_18187){
var state_val_18188 = (state_18187[(1)]);
if((state_val_18188 === (7))){
var inst_18169 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
var statearr_18189_18216 = state_18187__$1;
(statearr_18189_18216[(2)] = inst_18169);

(statearr_18189_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (1))){
var inst_18163 = cljs.core.seq.call(null,coll);
var inst_18164 = inst_18163;
var state_18187__$1 = (function (){var statearr_18190 = state_18187;
(statearr_18190[(7)] = inst_18164);

return statearr_18190;
})();
var statearr_18191_18217 = state_18187__$1;
(statearr_18191_18217[(2)] = null);

(statearr_18191_18217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (4))){
var inst_18164 = (state_18187[(7)]);
var inst_18167 = cljs.core.first.call(null,inst_18164);
var state_18187__$1 = state_18187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18187__$1,(7),ch,inst_18167);
} else {
if((state_val_18188 === (13))){
var inst_18181 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
var statearr_18192_18218 = state_18187__$1;
(statearr_18192_18218[(2)] = inst_18181);

(statearr_18192_18218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (6))){
var inst_18172 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
if(cljs.core.truth_(inst_18172)){
var statearr_18193_18219 = state_18187__$1;
(statearr_18193_18219[(1)] = (8));

} else {
var statearr_18194_18220 = state_18187__$1;
(statearr_18194_18220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (3))){
var inst_18185 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18187__$1,inst_18185);
} else {
if((state_val_18188 === (12))){
var state_18187__$1 = state_18187;
var statearr_18195_18221 = state_18187__$1;
(statearr_18195_18221[(2)] = null);

(statearr_18195_18221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (2))){
var inst_18164 = (state_18187[(7)]);
var state_18187__$1 = state_18187;
if(cljs.core.truth_(inst_18164)){
var statearr_18196_18222 = state_18187__$1;
(statearr_18196_18222[(1)] = (4));

} else {
var statearr_18197_18223 = state_18187__$1;
(statearr_18197_18223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (11))){
var inst_18178 = cljs.core.async.close_BANG_.call(null,ch);
var state_18187__$1 = state_18187;
var statearr_18198_18224 = state_18187__$1;
(statearr_18198_18224[(2)] = inst_18178);

(statearr_18198_18224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (9))){
var state_18187__$1 = state_18187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18199_18225 = state_18187__$1;
(statearr_18199_18225[(1)] = (11));

} else {
var statearr_18200_18226 = state_18187__$1;
(statearr_18200_18226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (5))){
var inst_18164 = (state_18187[(7)]);
var state_18187__$1 = state_18187;
var statearr_18201_18227 = state_18187__$1;
(statearr_18201_18227[(2)] = inst_18164);

(statearr_18201_18227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (10))){
var inst_18183 = (state_18187[(2)]);
var state_18187__$1 = state_18187;
var statearr_18202_18228 = state_18187__$1;
(statearr_18202_18228[(2)] = inst_18183);

(statearr_18202_18228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18188 === (8))){
var inst_18164 = (state_18187[(7)]);
var inst_18174 = cljs.core.next.call(null,inst_18164);
var inst_18164__$1 = inst_18174;
var state_18187__$1 = (function (){var statearr_18203 = state_18187;
(statearr_18203[(7)] = inst_18164__$1);

return statearr_18203;
})();
var statearr_18204_18229 = state_18187__$1;
(statearr_18204_18229[(2)] = null);

(statearr_18204_18229[(1)] = (2));


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
var statearr_18208 = [null,null,null,null,null,null,null,null];
(statearr_18208[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_18208[(1)] = (1));

return statearr_18208;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_18187){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18209){if((e18209 instanceof Object)){
var ex__10631__auto__ = e18209;
var statearr_18210_18230 = state_18187;
(statearr_18210_18230[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18231 = state_18187;
state_18187 = G__18231;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_18187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_18187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_18211 = f__10693__auto__.call(null);
(statearr_18211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_18211;
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
if(typeof cljs.core.async.t_cljs$core$async18453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18453 = (function (mult,ch,cs,meta18454){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18454 = meta18454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18455,meta18454__$1){
var self__ = this;
var _18455__$1 = this;
return (new cljs.core.async.t_cljs$core$async18453(self__.mult,self__.ch,self__.cs,meta18454__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18455){
var self__ = this;
var _18455__$1 = this;
return self__.meta18454;
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18454","meta18454",-1269531138,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18453";

cljs.core.async.t_cljs$core$async18453.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18453");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18453 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18453(mult__$1,ch__$1,cs__$1,meta18454){
return (new cljs.core.async.t_cljs$core$async18453(mult__$1,ch__$1,cs__$1,meta18454));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18453(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10692__auto___18674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___18674,cs,m,dchan,dctr,done){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___18674,cs,m,dchan,dctr,done){
return (function (state_18586){
var state_val_18587 = (state_18586[(1)]);
if((state_val_18587 === (7))){
var inst_18582 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18588_18675 = state_18586__$1;
(statearr_18588_18675[(2)] = inst_18582);

(statearr_18588_18675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (20))){
var inst_18487 = (state_18586[(7)]);
var inst_18497 = cljs.core.first.call(null,inst_18487);
var inst_18498 = cljs.core.nth.call(null,inst_18497,(0),null);
var inst_18499 = cljs.core.nth.call(null,inst_18497,(1),null);
var state_18586__$1 = (function (){var statearr_18589 = state_18586;
(statearr_18589[(8)] = inst_18498);

return statearr_18589;
})();
if(cljs.core.truth_(inst_18499)){
var statearr_18590_18676 = state_18586__$1;
(statearr_18590_18676[(1)] = (22));

} else {
var statearr_18591_18677 = state_18586__$1;
(statearr_18591_18677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (27))){
var inst_18534 = (state_18586[(9)]);
var inst_18458 = (state_18586[(10)]);
var inst_18529 = (state_18586[(11)]);
var inst_18527 = (state_18586[(12)]);
var inst_18534__$1 = cljs.core._nth.call(null,inst_18527,inst_18529);
var inst_18535 = cljs.core.async.put_BANG_.call(null,inst_18534__$1,inst_18458,done);
var state_18586__$1 = (function (){var statearr_18592 = state_18586;
(statearr_18592[(9)] = inst_18534__$1);

return statearr_18592;
})();
if(cljs.core.truth_(inst_18535)){
var statearr_18593_18678 = state_18586__$1;
(statearr_18593_18678[(1)] = (30));

} else {
var statearr_18594_18679 = state_18586__$1;
(statearr_18594_18679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (1))){
var state_18586__$1 = state_18586;
var statearr_18595_18680 = state_18586__$1;
(statearr_18595_18680[(2)] = null);

(statearr_18595_18680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (24))){
var inst_18487 = (state_18586[(7)]);
var inst_18504 = (state_18586[(2)]);
var inst_18505 = cljs.core.next.call(null,inst_18487);
var inst_18467 = inst_18505;
var inst_18468 = null;
var inst_18469 = (0);
var inst_18470 = (0);
var state_18586__$1 = (function (){var statearr_18596 = state_18586;
(statearr_18596[(13)] = inst_18469);

(statearr_18596[(14)] = inst_18468);

(statearr_18596[(15)] = inst_18467);

(statearr_18596[(16)] = inst_18470);

(statearr_18596[(17)] = inst_18504);

return statearr_18596;
})();
var statearr_18597_18681 = state_18586__$1;
(statearr_18597_18681[(2)] = null);

(statearr_18597_18681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (39))){
var state_18586__$1 = state_18586;
var statearr_18601_18682 = state_18586__$1;
(statearr_18601_18682[(2)] = null);

(statearr_18601_18682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (4))){
var inst_18458 = (state_18586[(10)]);
var inst_18458__$1 = (state_18586[(2)]);
var inst_18459 = (inst_18458__$1 == null);
var state_18586__$1 = (function (){var statearr_18602 = state_18586;
(statearr_18602[(10)] = inst_18458__$1);

return statearr_18602;
})();
if(cljs.core.truth_(inst_18459)){
var statearr_18603_18683 = state_18586__$1;
(statearr_18603_18683[(1)] = (5));

} else {
var statearr_18604_18684 = state_18586__$1;
(statearr_18604_18684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (15))){
var inst_18469 = (state_18586[(13)]);
var inst_18468 = (state_18586[(14)]);
var inst_18467 = (state_18586[(15)]);
var inst_18470 = (state_18586[(16)]);
var inst_18483 = (state_18586[(2)]);
var inst_18484 = (inst_18470 + (1));
var tmp18598 = inst_18469;
var tmp18599 = inst_18468;
var tmp18600 = inst_18467;
var inst_18467__$1 = tmp18600;
var inst_18468__$1 = tmp18599;
var inst_18469__$1 = tmp18598;
var inst_18470__$1 = inst_18484;
var state_18586__$1 = (function (){var statearr_18605 = state_18586;
(statearr_18605[(13)] = inst_18469__$1);

(statearr_18605[(18)] = inst_18483);

(statearr_18605[(14)] = inst_18468__$1);

(statearr_18605[(15)] = inst_18467__$1);

(statearr_18605[(16)] = inst_18470__$1);

return statearr_18605;
})();
var statearr_18606_18685 = state_18586__$1;
(statearr_18606_18685[(2)] = null);

(statearr_18606_18685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (21))){
var inst_18508 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18610_18686 = state_18586__$1;
(statearr_18610_18686[(2)] = inst_18508);

(statearr_18610_18686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (31))){
var inst_18534 = (state_18586[(9)]);
var inst_18538 = done.call(null,null);
var inst_18539 = cljs.core.async.untap_STAR_.call(null,m,inst_18534);
var state_18586__$1 = (function (){var statearr_18611 = state_18586;
(statearr_18611[(19)] = inst_18538);

return statearr_18611;
})();
var statearr_18612_18687 = state_18586__$1;
(statearr_18612_18687[(2)] = inst_18539);

(statearr_18612_18687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (32))){
var inst_18526 = (state_18586[(20)]);
var inst_18529 = (state_18586[(11)]);
var inst_18527 = (state_18586[(12)]);
var inst_18528 = (state_18586[(21)]);
var inst_18541 = (state_18586[(2)]);
var inst_18542 = (inst_18529 + (1));
var tmp18607 = inst_18526;
var tmp18608 = inst_18527;
var tmp18609 = inst_18528;
var inst_18526__$1 = tmp18607;
var inst_18527__$1 = tmp18608;
var inst_18528__$1 = tmp18609;
var inst_18529__$1 = inst_18542;
var state_18586__$1 = (function (){var statearr_18613 = state_18586;
(statearr_18613[(20)] = inst_18526__$1);

(statearr_18613[(11)] = inst_18529__$1);

(statearr_18613[(12)] = inst_18527__$1);

(statearr_18613[(22)] = inst_18541);

(statearr_18613[(21)] = inst_18528__$1);

return statearr_18613;
})();
var statearr_18614_18688 = state_18586__$1;
(statearr_18614_18688[(2)] = null);

(statearr_18614_18688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (40))){
var inst_18554 = (state_18586[(23)]);
var inst_18558 = done.call(null,null);
var inst_18559 = cljs.core.async.untap_STAR_.call(null,m,inst_18554);
var state_18586__$1 = (function (){var statearr_18615 = state_18586;
(statearr_18615[(24)] = inst_18558);

return statearr_18615;
})();
var statearr_18616_18689 = state_18586__$1;
(statearr_18616_18689[(2)] = inst_18559);

(statearr_18616_18689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (33))){
var inst_18545 = (state_18586[(25)]);
var inst_18547 = cljs.core.chunked_seq_QMARK_.call(null,inst_18545);
var state_18586__$1 = state_18586;
if(inst_18547){
var statearr_18617_18690 = state_18586__$1;
(statearr_18617_18690[(1)] = (36));

} else {
var statearr_18618_18691 = state_18586__$1;
(statearr_18618_18691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (13))){
var inst_18477 = (state_18586[(26)]);
var inst_18480 = cljs.core.async.close_BANG_.call(null,inst_18477);
var state_18586__$1 = state_18586;
var statearr_18619_18692 = state_18586__$1;
(statearr_18619_18692[(2)] = inst_18480);

(statearr_18619_18692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (22))){
var inst_18498 = (state_18586[(8)]);
var inst_18501 = cljs.core.async.close_BANG_.call(null,inst_18498);
var state_18586__$1 = state_18586;
var statearr_18620_18693 = state_18586__$1;
(statearr_18620_18693[(2)] = inst_18501);

(statearr_18620_18693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (36))){
var inst_18545 = (state_18586[(25)]);
var inst_18549 = cljs.core.chunk_first.call(null,inst_18545);
var inst_18550 = cljs.core.chunk_rest.call(null,inst_18545);
var inst_18551 = cljs.core.count.call(null,inst_18549);
var inst_18526 = inst_18550;
var inst_18527 = inst_18549;
var inst_18528 = inst_18551;
var inst_18529 = (0);
var state_18586__$1 = (function (){var statearr_18621 = state_18586;
(statearr_18621[(20)] = inst_18526);

(statearr_18621[(11)] = inst_18529);

(statearr_18621[(12)] = inst_18527);

(statearr_18621[(21)] = inst_18528);

return statearr_18621;
})();
var statearr_18622_18694 = state_18586__$1;
(statearr_18622_18694[(2)] = null);

(statearr_18622_18694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (41))){
var inst_18545 = (state_18586[(25)]);
var inst_18561 = (state_18586[(2)]);
var inst_18562 = cljs.core.next.call(null,inst_18545);
var inst_18526 = inst_18562;
var inst_18527 = null;
var inst_18528 = (0);
var inst_18529 = (0);
var state_18586__$1 = (function (){var statearr_18623 = state_18586;
(statearr_18623[(20)] = inst_18526);

(statearr_18623[(11)] = inst_18529);

(statearr_18623[(27)] = inst_18561);

(statearr_18623[(12)] = inst_18527);

(statearr_18623[(21)] = inst_18528);

return statearr_18623;
})();
var statearr_18624_18695 = state_18586__$1;
(statearr_18624_18695[(2)] = null);

(statearr_18624_18695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (43))){
var state_18586__$1 = state_18586;
var statearr_18625_18696 = state_18586__$1;
(statearr_18625_18696[(2)] = null);

(statearr_18625_18696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (29))){
var inst_18570 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18626_18697 = state_18586__$1;
(statearr_18626_18697[(2)] = inst_18570);

(statearr_18626_18697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (44))){
var inst_18579 = (state_18586[(2)]);
var state_18586__$1 = (function (){var statearr_18627 = state_18586;
(statearr_18627[(28)] = inst_18579);

return statearr_18627;
})();
var statearr_18628_18698 = state_18586__$1;
(statearr_18628_18698[(2)] = null);

(statearr_18628_18698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (6))){
var inst_18518 = (state_18586[(29)]);
var inst_18517 = cljs.core.deref.call(null,cs);
var inst_18518__$1 = cljs.core.keys.call(null,inst_18517);
var inst_18519 = cljs.core.count.call(null,inst_18518__$1);
var inst_18520 = cljs.core.reset_BANG_.call(null,dctr,inst_18519);
var inst_18525 = cljs.core.seq.call(null,inst_18518__$1);
var inst_18526 = inst_18525;
var inst_18527 = null;
var inst_18528 = (0);
var inst_18529 = (0);
var state_18586__$1 = (function (){var statearr_18629 = state_18586;
(statearr_18629[(30)] = inst_18520);

(statearr_18629[(20)] = inst_18526);

(statearr_18629[(11)] = inst_18529);

(statearr_18629[(12)] = inst_18527);

(statearr_18629[(21)] = inst_18528);

(statearr_18629[(29)] = inst_18518__$1);

return statearr_18629;
})();
var statearr_18630_18699 = state_18586__$1;
(statearr_18630_18699[(2)] = null);

(statearr_18630_18699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (28))){
var inst_18526 = (state_18586[(20)]);
var inst_18545 = (state_18586[(25)]);
var inst_18545__$1 = cljs.core.seq.call(null,inst_18526);
var state_18586__$1 = (function (){var statearr_18631 = state_18586;
(statearr_18631[(25)] = inst_18545__$1);

return statearr_18631;
})();
if(inst_18545__$1){
var statearr_18632_18700 = state_18586__$1;
(statearr_18632_18700[(1)] = (33));

} else {
var statearr_18633_18701 = state_18586__$1;
(statearr_18633_18701[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (25))){
var inst_18529 = (state_18586[(11)]);
var inst_18528 = (state_18586[(21)]);
var inst_18531 = (inst_18529 < inst_18528);
var inst_18532 = inst_18531;
var state_18586__$1 = state_18586;
if(cljs.core.truth_(inst_18532)){
var statearr_18634_18702 = state_18586__$1;
(statearr_18634_18702[(1)] = (27));

} else {
var statearr_18635_18703 = state_18586__$1;
(statearr_18635_18703[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (34))){
var state_18586__$1 = state_18586;
var statearr_18636_18704 = state_18586__$1;
(statearr_18636_18704[(2)] = null);

(statearr_18636_18704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (17))){
var state_18586__$1 = state_18586;
var statearr_18637_18705 = state_18586__$1;
(statearr_18637_18705[(2)] = null);

(statearr_18637_18705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (3))){
var inst_18584 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18586__$1,inst_18584);
} else {
if((state_val_18587 === (12))){
var inst_18513 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18638_18706 = state_18586__$1;
(statearr_18638_18706[(2)] = inst_18513);

(statearr_18638_18706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (2))){
var state_18586__$1 = state_18586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18586__$1,(4),ch);
} else {
if((state_val_18587 === (23))){
var state_18586__$1 = state_18586;
var statearr_18639_18707 = state_18586__$1;
(statearr_18639_18707[(2)] = null);

(statearr_18639_18707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (35))){
var inst_18568 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18640_18708 = state_18586__$1;
(statearr_18640_18708[(2)] = inst_18568);

(statearr_18640_18708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (19))){
var inst_18487 = (state_18586[(7)]);
var inst_18491 = cljs.core.chunk_first.call(null,inst_18487);
var inst_18492 = cljs.core.chunk_rest.call(null,inst_18487);
var inst_18493 = cljs.core.count.call(null,inst_18491);
var inst_18467 = inst_18492;
var inst_18468 = inst_18491;
var inst_18469 = inst_18493;
var inst_18470 = (0);
var state_18586__$1 = (function (){var statearr_18641 = state_18586;
(statearr_18641[(13)] = inst_18469);

(statearr_18641[(14)] = inst_18468);

(statearr_18641[(15)] = inst_18467);

(statearr_18641[(16)] = inst_18470);

return statearr_18641;
})();
var statearr_18642_18709 = state_18586__$1;
(statearr_18642_18709[(2)] = null);

(statearr_18642_18709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (11))){
var inst_18487 = (state_18586[(7)]);
var inst_18467 = (state_18586[(15)]);
var inst_18487__$1 = cljs.core.seq.call(null,inst_18467);
var state_18586__$1 = (function (){var statearr_18643 = state_18586;
(statearr_18643[(7)] = inst_18487__$1);

return statearr_18643;
})();
if(inst_18487__$1){
var statearr_18644_18710 = state_18586__$1;
(statearr_18644_18710[(1)] = (16));

} else {
var statearr_18645_18711 = state_18586__$1;
(statearr_18645_18711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (9))){
var inst_18515 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18646_18712 = state_18586__$1;
(statearr_18646_18712[(2)] = inst_18515);

(statearr_18646_18712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (5))){
var inst_18465 = cljs.core.deref.call(null,cs);
var inst_18466 = cljs.core.seq.call(null,inst_18465);
var inst_18467 = inst_18466;
var inst_18468 = null;
var inst_18469 = (0);
var inst_18470 = (0);
var state_18586__$1 = (function (){var statearr_18647 = state_18586;
(statearr_18647[(13)] = inst_18469);

(statearr_18647[(14)] = inst_18468);

(statearr_18647[(15)] = inst_18467);

(statearr_18647[(16)] = inst_18470);

return statearr_18647;
})();
var statearr_18648_18713 = state_18586__$1;
(statearr_18648_18713[(2)] = null);

(statearr_18648_18713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (14))){
var state_18586__$1 = state_18586;
var statearr_18649_18714 = state_18586__$1;
(statearr_18649_18714[(2)] = null);

(statearr_18649_18714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (45))){
var inst_18576 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18650_18715 = state_18586__$1;
(statearr_18650_18715[(2)] = inst_18576);

(statearr_18650_18715[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (26))){
var inst_18518 = (state_18586[(29)]);
var inst_18572 = (state_18586[(2)]);
var inst_18573 = cljs.core.seq.call(null,inst_18518);
var state_18586__$1 = (function (){var statearr_18651 = state_18586;
(statearr_18651[(31)] = inst_18572);

return statearr_18651;
})();
if(inst_18573){
var statearr_18652_18716 = state_18586__$1;
(statearr_18652_18716[(1)] = (42));

} else {
var statearr_18653_18717 = state_18586__$1;
(statearr_18653_18717[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (16))){
var inst_18487 = (state_18586[(7)]);
var inst_18489 = cljs.core.chunked_seq_QMARK_.call(null,inst_18487);
var state_18586__$1 = state_18586;
if(inst_18489){
var statearr_18654_18718 = state_18586__$1;
(statearr_18654_18718[(1)] = (19));

} else {
var statearr_18655_18719 = state_18586__$1;
(statearr_18655_18719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (38))){
var inst_18565 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18656_18720 = state_18586__$1;
(statearr_18656_18720[(2)] = inst_18565);

(statearr_18656_18720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (30))){
var state_18586__$1 = state_18586;
var statearr_18657_18721 = state_18586__$1;
(statearr_18657_18721[(2)] = null);

(statearr_18657_18721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (10))){
var inst_18468 = (state_18586[(14)]);
var inst_18470 = (state_18586[(16)]);
var inst_18476 = cljs.core._nth.call(null,inst_18468,inst_18470);
var inst_18477 = cljs.core.nth.call(null,inst_18476,(0),null);
var inst_18478 = cljs.core.nth.call(null,inst_18476,(1),null);
var state_18586__$1 = (function (){var statearr_18658 = state_18586;
(statearr_18658[(26)] = inst_18477);

return statearr_18658;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18659_18722 = state_18586__$1;
(statearr_18659_18722[(1)] = (13));

} else {
var statearr_18660_18723 = state_18586__$1;
(statearr_18660_18723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (18))){
var inst_18511 = (state_18586[(2)]);
var state_18586__$1 = state_18586;
var statearr_18661_18724 = state_18586__$1;
(statearr_18661_18724[(2)] = inst_18511);

(statearr_18661_18724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (42))){
var state_18586__$1 = state_18586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18586__$1,(45),dchan);
} else {
if((state_val_18587 === (37))){
var inst_18554 = (state_18586[(23)]);
var inst_18545 = (state_18586[(25)]);
var inst_18458 = (state_18586[(10)]);
var inst_18554__$1 = cljs.core.first.call(null,inst_18545);
var inst_18555 = cljs.core.async.put_BANG_.call(null,inst_18554__$1,inst_18458,done);
var state_18586__$1 = (function (){var statearr_18662 = state_18586;
(statearr_18662[(23)] = inst_18554__$1);

return statearr_18662;
})();
if(cljs.core.truth_(inst_18555)){
var statearr_18663_18725 = state_18586__$1;
(statearr_18663_18725[(1)] = (39));

} else {
var statearr_18664_18726 = state_18586__$1;
(statearr_18664_18726[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18587 === (8))){
var inst_18469 = (state_18586[(13)]);
var inst_18470 = (state_18586[(16)]);
var inst_18472 = (inst_18470 < inst_18469);
var inst_18473 = inst_18472;
var state_18586__$1 = state_18586;
if(cljs.core.truth_(inst_18473)){
var statearr_18665_18727 = state_18586__$1;
(statearr_18665_18727[(1)] = (10));

} else {
var statearr_18666_18728 = state_18586__$1;
(statearr_18666_18728[(1)] = (11));

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
});})(c__10692__auto___18674,cs,m,dchan,dctr,done))
;
return ((function (switch__10627__auto__,c__10692__auto___18674,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10628__auto__ = null;
var cljs$core$async$mult_$_state_machine__10628__auto____0 = (function (){
var statearr_18670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18670[(0)] = cljs$core$async$mult_$_state_machine__10628__auto__);

(statearr_18670[(1)] = (1));

return statearr_18670;
});
var cljs$core$async$mult_$_state_machine__10628__auto____1 = (function (state_18586){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_18586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e18671){if((e18671 instanceof Object)){
var ex__10631__auto__ = e18671;
var statearr_18672_18729 = state_18586;
(statearr_18672_18729[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18730 = state_18586;
state_18586 = G__18730;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10628__auto__ = function(state_18586){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10628__auto____1.call(this,state_18586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10628__auto____0;
cljs$core$async$mult_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10628__auto____1;
return cljs$core$async$mult_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___18674,cs,m,dchan,dctr,done))
})();
var state__10694__auto__ = (function (){var statearr_18673 = f__10693__auto__.call(null);
(statearr_18673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___18674);

return statearr_18673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___18674,cs,m,dchan,dctr,done))
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
var args18731 = [];
var len__6152__auto___18734 = arguments.length;
var i__6153__auto___18735 = (0);
while(true){
if((i__6153__auto___18735 < len__6152__auto___18734)){
args18731.push((arguments[i__6153__auto___18735]));

var G__18736 = (i__6153__auto___18735 + (1));
i__6153__auto___18735 = G__18736;
continue;
} else {
}
break;
}

var G__18733 = args18731.length;
switch (G__18733) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18731.length)].join('')));

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
var len__6152__auto___18748 = arguments.length;
var i__6153__auto___18749 = (0);
while(true){
if((i__6153__auto___18749 < len__6152__auto___18748)){
args__6159__auto__.push((arguments[i__6153__auto___18749]));

var G__18750 = (i__6153__auto___18749 + (1));
i__6153__auto___18749 = G__18750;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18742){
var map__18743 = p__18742;
var map__18743__$1 = ((((!((map__18743 == null)))?((((map__18743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18743):map__18743);
var opts = map__18743__$1;
var statearr_18745_18751 = state;
(statearr_18745_18751[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18743,map__18743__$1,opts){
return (function (val){
var statearr_18746_18752 = state;
(statearr_18746_18752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18743,map__18743__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18747_18753 = state;
(statearr_18747_18753[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18738){
var G__18739 = cljs.core.first.call(null,seq18738);
var seq18738__$1 = cljs.core.next.call(null,seq18738);
var G__18740 = cljs.core.first.call(null,seq18738__$1);
var seq18738__$2 = cljs.core.next.call(null,seq18738__$1);
var G__18741 = cljs.core.first.call(null,seq18738__$2);
var seq18738__$3 = cljs.core.next.call(null,seq18738__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18739,G__18740,G__18741,seq18738__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18917 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18918){
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
this.meta18918 = meta18918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18919,meta18918__$1){
var self__ = this;
var _18919__$1 = this;
return (new cljs.core.async.t_cljs$core$async18917(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18918__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18919){
var self__ = this;
var _18919__$1 = this;
return self__.meta18918;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18917.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18918","meta18918",-647274754,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18917";

cljs.core.async.t_cljs$core$async18917.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18917");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18917 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18917(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18918){
return (new cljs.core.async.t_cljs$core$async18917(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18918));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18917(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10692__auto___19080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19017){
var state_val_19018 = (state_19017[(1)]);
if((state_val_19018 === (7))){
var inst_18935 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19019_19081 = state_19017__$1;
(statearr_19019_19081[(2)] = inst_18935);

(statearr_19019_19081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (20))){
var inst_18947 = (state_19017[(7)]);
var state_19017__$1 = state_19017;
var statearr_19020_19082 = state_19017__$1;
(statearr_19020_19082[(2)] = inst_18947);

(statearr_19020_19082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (27))){
var state_19017__$1 = state_19017;
var statearr_19021_19083 = state_19017__$1;
(statearr_19021_19083[(2)] = null);

(statearr_19021_19083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (1))){
var inst_18923 = (state_19017[(8)]);
var inst_18923__$1 = calc_state.call(null);
var inst_18925 = (inst_18923__$1 == null);
var inst_18926 = cljs.core.not.call(null,inst_18925);
var state_19017__$1 = (function (){var statearr_19022 = state_19017;
(statearr_19022[(8)] = inst_18923__$1);

return statearr_19022;
})();
if(inst_18926){
var statearr_19023_19084 = state_19017__$1;
(statearr_19023_19084[(1)] = (2));

} else {
var statearr_19024_19085 = state_19017__$1;
(statearr_19024_19085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (24))){
var inst_18970 = (state_19017[(9)]);
var inst_18977 = (state_19017[(10)]);
var inst_18991 = (state_19017[(11)]);
var inst_18991__$1 = inst_18970.call(null,inst_18977);
var state_19017__$1 = (function (){var statearr_19025 = state_19017;
(statearr_19025[(11)] = inst_18991__$1);

return statearr_19025;
})();
if(cljs.core.truth_(inst_18991__$1)){
var statearr_19026_19086 = state_19017__$1;
(statearr_19026_19086[(1)] = (29));

} else {
var statearr_19027_19087 = state_19017__$1;
(statearr_19027_19087[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (4))){
var inst_18938 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18938)){
var statearr_19028_19088 = state_19017__$1;
(statearr_19028_19088[(1)] = (8));

} else {
var statearr_19029_19089 = state_19017__$1;
(statearr_19029_19089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (15))){
var inst_18964 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18964)){
var statearr_19030_19090 = state_19017__$1;
(statearr_19030_19090[(1)] = (19));

} else {
var statearr_19031_19091 = state_19017__$1;
(statearr_19031_19091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (21))){
var inst_18969 = (state_19017[(12)]);
var inst_18969__$1 = (state_19017[(2)]);
var inst_18970 = cljs.core.get.call(null,inst_18969__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18971 = cljs.core.get.call(null,inst_18969__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18972 = cljs.core.get.call(null,inst_18969__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19017__$1 = (function (){var statearr_19032 = state_19017;
(statearr_19032[(12)] = inst_18969__$1);

(statearr_19032[(9)] = inst_18970);

(statearr_19032[(13)] = inst_18971);

return statearr_19032;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19017__$1,(22),inst_18972);
} else {
if((state_val_19018 === (31))){
var inst_18999 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18999)){
var statearr_19033_19092 = state_19017__$1;
(statearr_19033_19092[(1)] = (32));

} else {
var statearr_19034_19093 = state_19017__$1;
(statearr_19034_19093[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (32))){
var inst_18976 = (state_19017[(14)]);
var state_19017__$1 = state_19017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19017__$1,(35),out,inst_18976);
} else {
if((state_val_19018 === (33))){
var inst_18969 = (state_19017[(12)]);
var inst_18947 = inst_18969;
var state_19017__$1 = (function (){var statearr_19035 = state_19017;
(statearr_19035[(7)] = inst_18947);

return statearr_19035;
})();
var statearr_19036_19094 = state_19017__$1;
(statearr_19036_19094[(2)] = null);

(statearr_19036_19094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (13))){
var inst_18947 = (state_19017[(7)]);
var inst_18954 = inst_18947.cljs$lang$protocol_mask$partition0$;
var inst_18955 = (inst_18954 & (64));
var inst_18956 = inst_18947.cljs$core$ISeq$;
var inst_18957 = (inst_18955) || (inst_18956);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18957)){
var statearr_19037_19095 = state_19017__$1;
(statearr_19037_19095[(1)] = (16));

} else {
var statearr_19038_19096 = state_19017__$1;
(statearr_19038_19096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (22))){
var inst_18976 = (state_19017[(14)]);
var inst_18977 = (state_19017[(10)]);
var inst_18975 = (state_19017[(2)]);
var inst_18976__$1 = cljs.core.nth.call(null,inst_18975,(0),null);
var inst_18977__$1 = cljs.core.nth.call(null,inst_18975,(1),null);
var inst_18978 = (inst_18976__$1 == null);
var inst_18979 = cljs.core._EQ_.call(null,inst_18977__$1,change);
var inst_18980 = (inst_18978) || (inst_18979);
var state_19017__$1 = (function (){var statearr_19039 = state_19017;
(statearr_19039[(14)] = inst_18976__$1);

(statearr_19039[(10)] = inst_18977__$1);

return statearr_19039;
})();
if(cljs.core.truth_(inst_18980)){
var statearr_19040_19097 = state_19017__$1;
(statearr_19040_19097[(1)] = (23));

} else {
var statearr_19041_19098 = state_19017__$1;
(statearr_19041_19098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (36))){
var inst_18969 = (state_19017[(12)]);
var inst_18947 = inst_18969;
var state_19017__$1 = (function (){var statearr_19042 = state_19017;
(statearr_19042[(7)] = inst_18947);

return statearr_19042;
})();
var statearr_19043_19099 = state_19017__$1;
(statearr_19043_19099[(2)] = null);

(statearr_19043_19099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (29))){
var inst_18991 = (state_19017[(11)]);
var state_19017__$1 = state_19017;
var statearr_19044_19100 = state_19017__$1;
(statearr_19044_19100[(2)] = inst_18991);

(statearr_19044_19100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (6))){
var state_19017__$1 = state_19017;
var statearr_19045_19101 = state_19017__$1;
(statearr_19045_19101[(2)] = false);

(statearr_19045_19101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (28))){
var inst_18987 = (state_19017[(2)]);
var inst_18988 = calc_state.call(null);
var inst_18947 = inst_18988;
var state_19017__$1 = (function (){var statearr_19046 = state_19017;
(statearr_19046[(15)] = inst_18987);

(statearr_19046[(7)] = inst_18947);

return statearr_19046;
})();
var statearr_19047_19102 = state_19017__$1;
(statearr_19047_19102[(2)] = null);

(statearr_19047_19102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (25))){
var inst_19013 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19048_19103 = state_19017__$1;
(statearr_19048_19103[(2)] = inst_19013);

(statearr_19048_19103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (34))){
var inst_19011 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19049_19104 = state_19017__$1;
(statearr_19049_19104[(2)] = inst_19011);

(statearr_19049_19104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (17))){
var state_19017__$1 = state_19017;
var statearr_19050_19105 = state_19017__$1;
(statearr_19050_19105[(2)] = false);

(statearr_19050_19105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (3))){
var state_19017__$1 = state_19017;
var statearr_19051_19106 = state_19017__$1;
(statearr_19051_19106[(2)] = false);

(statearr_19051_19106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (12))){
var inst_19015 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19017__$1,inst_19015);
} else {
if((state_val_19018 === (2))){
var inst_18923 = (state_19017[(8)]);
var inst_18928 = inst_18923.cljs$lang$protocol_mask$partition0$;
var inst_18929 = (inst_18928 & (64));
var inst_18930 = inst_18923.cljs$core$ISeq$;
var inst_18931 = (inst_18929) || (inst_18930);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18931)){
var statearr_19052_19107 = state_19017__$1;
(statearr_19052_19107[(1)] = (5));

} else {
var statearr_19053_19108 = state_19017__$1;
(statearr_19053_19108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (23))){
var inst_18976 = (state_19017[(14)]);
var inst_18982 = (inst_18976 == null);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18982)){
var statearr_19054_19109 = state_19017__$1;
(statearr_19054_19109[(1)] = (26));

} else {
var statearr_19055_19110 = state_19017__$1;
(statearr_19055_19110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (35))){
var inst_19002 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_19002)){
var statearr_19056_19111 = state_19017__$1;
(statearr_19056_19111[(1)] = (36));

} else {
var statearr_19057_19112 = state_19017__$1;
(statearr_19057_19112[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (19))){
var inst_18947 = (state_19017[(7)]);
var inst_18966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18947);
var state_19017__$1 = state_19017;
var statearr_19058_19113 = state_19017__$1;
(statearr_19058_19113[(2)] = inst_18966);

(statearr_19058_19113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (11))){
var inst_18947 = (state_19017[(7)]);
var inst_18951 = (inst_18947 == null);
var inst_18952 = cljs.core.not.call(null,inst_18951);
var state_19017__$1 = state_19017;
if(inst_18952){
var statearr_19059_19114 = state_19017__$1;
(statearr_19059_19114[(1)] = (13));

} else {
var statearr_19060_19115 = state_19017__$1;
(statearr_19060_19115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (9))){
var inst_18923 = (state_19017[(8)]);
var state_19017__$1 = state_19017;
var statearr_19061_19116 = state_19017__$1;
(statearr_19061_19116[(2)] = inst_18923);

(statearr_19061_19116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (5))){
var state_19017__$1 = state_19017;
var statearr_19062_19117 = state_19017__$1;
(statearr_19062_19117[(2)] = true);

(statearr_19062_19117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (14))){
var state_19017__$1 = state_19017;
var statearr_19063_19118 = state_19017__$1;
(statearr_19063_19118[(2)] = false);

(statearr_19063_19118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (26))){
var inst_18977 = (state_19017[(10)]);
var inst_18984 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18977);
var state_19017__$1 = state_19017;
var statearr_19064_19119 = state_19017__$1;
(statearr_19064_19119[(2)] = inst_18984);

(statearr_19064_19119[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (16))){
var state_19017__$1 = state_19017;
var statearr_19065_19120 = state_19017__$1;
(statearr_19065_19120[(2)] = true);

(statearr_19065_19120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (38))){
var inst_19007 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19066_19121 = state_19017__$1;
(statearr_19066_19121[(2)] = inst_19007);

(statearr_19066_19121[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (30))){
var inst_18970 = (state_19017[(9)]);
var inst_18971 = (state_19017[(13)]);
var inst_18977 = (state_19017[(10)]);
var inst_18994 = cljs.core.empty_QMARK_.call(null,inst_18970);
var inst_18995 = inst_18971.call(null,inst_18977);
var inst_18996 = cljs.core.not.call(null,inst_18995);
var inst_18997 = (inst_18994) && (inst_18996);
var state_19017__$1 = state_19017;
var statearr_19067_19122 = state_19017__$1;
(statearr_19067_19122[(2)] = inst_18997);

(statearr_19067_19122[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (10))){
var inst_18923 = (state_19017[(8)]);
var inst_18943 = (state_19017[(2)]);
var inst_18944 = cljs.core.get.call(null,inst_18943,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18945 = cljs.core.get.call(null,inst_18943,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18946 = cljs.core.get.call(null,inst_18943,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18947 = inst_18923;
var state_19017__$1 = (function (){var statearr_19068 = state_19017;
(statearr_19068[(16)] = inst_18946);

(statearr_19068[(17)] = inst_18944);

(statearr_19068[(18)] = inst_18945);

(statearr_19068[(7)] = inst_18947);

return statearr_19068;
})();
var statearr_19069_19123 = state_19017__$1;
(statearr_19069_19123[(2)] = null);

(statearr_19069_19123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (18))){
var inst_18961 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19070_19124 = state_19017__$1;
(statearr_19070_19124[(2)] = inst_18961);

(statearr_19070_19124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (37))){
var state_19017__$1 = state_19017;
var statearr_19071_19125 = state_19017__$1;
(statearr_19071_19125[(2)] = null);

(statearr_19071_19125[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (8))){
var inst_18923 = (state_19017[(8)]);
var inst_18940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18923);
var state_19017__$1 = state_19017;
var statearr_19072_19126 = state_19017__$1;
(statearr_19072_19126[(2)] = inst_18940);

(statearr_19072_19126[(1)] = (10));


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
});})(c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10627__auto__,c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10628__auto__ = null;
var cljs$core$async$mix_$_state_machine__10628__auto____0 = (function (){
var statearr_19076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19076[(0)] = cljs$core$async$mix_$_state_machine__10628__auto__);

(statearr_19076[(1)] = (1));

return statearr_19076;
});
var cljs$core$async$mix_$_state_machine__10628__auto____1 = (function (state_19017){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19077){if((e19077 instanceof Object)){
var ex__10631__auto__ = e19077;
var statearr_19078_19127 = state_19017;
(statearr_19078_19127[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19128 = state_19017;
state_19017 = G__19128;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10628__auto__ = function(state_19017){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10628__auto____1.call(this,state_19017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10628__auto____0;
cljs$core$async$mix_$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10628__auto____1;
return cljs$core$async$mix_$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10694__auto__ = (function (){var statearr_19079 = f__10693__auto__.call(null);
(statearr_19079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19080);

return statearr_19079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19080,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19129 = [];
var len__6152__auto___19132 = arguments.length;
var i__6153__auto___19133 = (0);
while(true){
if((i__6153__auto___19133 < len__6152__auto___19132)){
args19129.push((arguments[i__6153__auto___19133]));

var G__19134 = (i__6153__auto___19133 + (1));
i__6153__auto___19133 = G__19134;
continue;
} else {
}
break;
}

var G__19131 = args19129.length;
switch (G__19131) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19129.length)].join('')));

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
var args19137 = [];
var len__6152__auto___19262 = arguments.length;
var i__6153__auto___19263 = (0);
while(true){
if((i__6153__auto___19263 < len__6152__auto___19262)){
args19137.push((arguments[i__6153__auto___19263]));

var G__19264 = (i__6153__auto___19263 + (1));
i__6153__auto___19263 = G__19264;
continue;
} else {
}
break;
}

var G__19139 = args19137.length;
switch (G__19139) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19137.length)].join('')));

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
return (function (p1__19136_SHARP_){
if(cljs.core.truth_(p1__19136_SHARP_.call(null,topic))){
return p1__19136_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19136_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19140 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19141){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19141 = meta19141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19142,meta19141__$1){
var self__ = this;
var _19142__$1 = this;
return (new cljs.core.async.t_cljs$core$async19140(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19141__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19142){
var self__ = this;
var _19142__$1 = this;
return self__.meta19141;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19141","meta19141",2074700787,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19140";

cljs.core.async.t_cljs$core$async19140.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19140");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19140 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19141){
return (new cljs.core.async.t_cljs$core$async19140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19141));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19140(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10692__auto___19266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19266,mults,ensure_mult,p){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19266,mults,ensure_mult,p){
return (function (state_19214){
var state_val_19215 = (state_19214[(1)]);
if((state_val_19215 === (7))){
var inst_19210 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19216_19267 = state_19214__$1;
(statearr_19216_19267[(2)] = inst_19210);

(statearr_19216_19267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (20))){
var state_19214__$1 = state_19214;
var statearr_19217_19268 = state_19214__$1;
(statearr_19217_19268[(2)] = null);

(statearr_19217_19268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (1))){
var state_19214__$1 = state_19214;
var statearr_19218_19269 = state_19214__$1;
(statearr_19218_19269[(2)] = null);

(statearr_19218_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (24))){
var inst_19193 = (state_19214[(7)]);
var inst_19202 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19193);
var state_19214__$1 = state_19214;
var statearr_19219_19270 = state_19214__$1;
(statearr_19219_19270[(2)] = inst_19202);

(statearr_19219_19270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (4))){
var inst_19145 = (state_19214[(8)]);
var inst_19145__$1 = (state_19214[(2)]);
var inst_19146 = (inst_19145__$1 == null);
var state_19214__$1 = (function (){var statearr_19220 = state_19214;
(statearr_19220[(8)] = inst_19145__$1);

return statearr_19220;
})();
if(cljs.core.truth_(inst_19146)){
var statearr_19221_19271 = state_19214__$1;
(statearr_19221_19271[(1)] = (5));

} else {
var statearr_19222_19272 = state_19214__$1;
(statearr_19222_19272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (15))){
var inst_19187 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19223_19273 = state_19214__$1;
(statearr_19223_19273[(2)] = inst_19187);

(statearr_19223_19273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (21))){
var inst_19207 = (state_19214[(2)]);
var state_19214__$1 = (function (){var statearr_19224 = state_19214;
(statearr_19224[(9)] = inst_19207);

return statearr_19224;
})();
var statearr_19225_19274 = state_19214__$1;
(statearr_19225_19274[(2)] = null);

(statearr_19225_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (13))){
var inst_19169 = (state_19214[(10)]);
var inst_19171 = cljs.core.chunked_seq_QMARK_.call(null,inst_19169);
var state_19214__$1 = state_19214;
if(inst_19171){
var statearr_19226_19275 = state_19214__$1;
(statearr_19226_19275[(1)] = (16));

} else {
var statearr_19227_19276 = state_19214__$1;
(statearr_19227_19276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (22))){
var inst_19199 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
if(cljs.core.truth_(inst_19199)){
var statearr_19228_19277 = state_19214__$1;
(statearr_19228_19277[(1)] = (23));

} else {
var statearr_19229_19278 = state_19214__$1;
(statearr_19229_19278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (6))){
var inst_19195 = (state_19214[(11)]);
var inst_19145 = (state_19214[(8)]);
var inst_19193 = (state_19214[(7)]);
var inst_19193__$1 = topic_fn.call(null,inst_19145);
var inst_19194 = cljs.core.deref.call(null,mults);
var inst_19195__$1 = cljs.core.get.call(null,inst_19194,inst_19193__$1);
var state_19214__$1 = (function (){var statearr_19230 = state_19214;
(statearr_19230[(11)] = inst_19195__$1);

(statearr_19230[(7)] = inst_19193__$1);

return statearr_19230;
})();
if(cljs.core.truth_(inst_19195__$1)){
var statearr_19231_19279 = state_19214__$1;
(statearr_19231_19279[(1)] = (19));

} else {
var statearr_19232_19280 = state_19214__$1;
(statearr_19232_19280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (25))){
var inst_19204 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19233_19281 = state_19214__$1;
(statearr_19233_19281[(2)] = inst_19204);

(statearr_19233_19281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (17))){
var inst_19169 = (state_19214[(10)]);
var inst_19178 = cljs.core.first.call(null,inst_19169);
var inst_19179 = cljs.core.async.muxch_STAR_.call(null,inst_19178);
var inst_19180 = cljs.core.async.close_BANG_.call(null,inst_19179);
var inst_19181 = cljs.core.next.call(null,inst_19169);
var inst_19155 = inst_19181;
var inst_19156 = null;
var inst_19157 = (0);
var inst_19158 = (0);
var state_19214__$1 = (function (){var statearr_19234 = state_19214;
(statearr_19234[(12)] = inst_19157);

(statearr_19234[(13)] = inst_19155);

(statearr_19234[(14)] = inst_19158);

(statearr_19234[(15)] = inst_19156);

(statearr_19234[(16)] = inst_19180);

return statearr_19234;
})();
var statearr_19235_19282 = state_19214__$1;
(statearr_19235_19282[(2)] = null);

(statearr_19235_19282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (3))){
var inst_19212 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19214__$1,inst_19212);
} else {
if((state_val_19215 === (12))){
var inst_19189 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19236_19283 = state_19214__$1;
(statearr_19236_19283[(2)] = inst_19189);

(statearr_19236_19283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (2))){
var state_19214__$1 = state_19214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19214__$1,(4),ch);
} else {
if((state_val_19215 === (23))){
var state_19214__$1 = state_19214;
var statearr_19237_19284 = state_19214__$1;
(statearr_19237_19284[(2)] = null);

(statearr_19237_19284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (19))){
var inst_19195 = (state_19214[(11)]);
var inst_19145 = (state_19214[(8)]);
var inst_19197 = cljs.core.async.muxch_STAR_.call(null,inst_19195);
var state_19214__$1 = state_19214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19214__$1,(22),inst_19197,inst_19145);
} else {
if((state_val_19215 === (11))){
var inst_19155 = (state_19214[(13)]);
var inst_19169 = (state_19214[(10)]);
var inst_19169__$1 = cljs.core.seq.call(null,inst_19155);
var state_19214__$1 = (function (){var statearr_19238 = state_19214;
(statearr_19238[(10)] = inst_19169__$1);

return statearr_19238;
})();
if(inst_19169__$1){
var statearr_19239_19285 = state_19214__$1;
(statearr_19239_19285[(1)] = (13));

} else {
var statearr_19240_19286 = state_19214__$1;
(statearr_19240_19286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (9))){
var inst_19191 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19241_19287 = state_19214__$1;
(statearr_19241_19287[(2)] = inst_19191);

(statearr_19241_19287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (5))){
var inst_19152 = cljs.core.deref.call(null,mults);
var inst_19153 = cljs.core.vals.call(null,inst_19152);
var inst_19154 = cljs.core.seq.call(null,inst_19153);
var inst_19155 = inst_19154;
var inst_19156 = null;
var inst_19157 = (0);
var inst_19158 = (0);
var state_19214__$1 = (function (){var statearr_19242 = state_19214;
(statearr_19242[(12)] = inst_19157);

(statearr_19242[(13)] = inst_19155);

(statearr_19242[(14)] = inst_19158);

(statearr_19242[(15)] = inst_19156);

return statearr_19242;
})();
var statearr_19243_19288 = state_19214__$1;
(statearr_19243_19288[(2)] = null);

(statearr_19243_19288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (14))){
var state_19214__$1 = state_19214;
var statearr_19247_19289 = state_19214__$1;
(statearr_19247_19289[(2)] = null);

(statearr_19247_19289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (16))){
var inst_19169 = (state_19214[(10)]);
var inst_19173 = cljs.core.chunk_first.call(null,inst_19169);
var inst_19174 = cljs.core.chunk_rest.call(null,inst_19169);
var inst_19175 = cljs.core.count.call(null,inst_19173);
var inst_19155 = inst_19174;
var inst_19156 = inst_19173;
var inst_19157 = inst_19175;
var inst_19158 = (0);
var state_19214__$1 = (function (){var statearr_19248 = state_19214;
(statearr_19248[(12)] = inst_19157);

(statearr_19248[(13)] = inst_19155);

(statearr_19248[(14)] = inst_19158);

(statearr_19248[(15)] = inst_19156);

return statearr_19248;
})();
var statearr_19249_19290 = state_19214__$1;
(statearr_19249_19290[(2)] = null);

(statearr_19249_19290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (10))){
var inst_19157 = (state_19214[(12)]);
var inst_19155 = (state_19214[(13)]);
var inst_19158 = (state_19214[(14)]);
var inst_19156 = (state_19214[(15)]);
var inst_19163 = cljs.core._nth.call(null,inst_19156,inst_19158);
var inst_19164 = cljs.core.async.muxch_STAR_.call(null,inst_19163);
var inst_19165 = cljs.core.async.close_BANG_.call(null,inst_19164);
var inst_19166 = (inst_19158 + (1));
var tmp19244 = inst_19157;
var tmp19245 = inst_19155;
var tmp19246 = inst_19156;
var inst_19155__$1 = tmp19245;
var inst_19156__$1 = tmp19246;
var inst_19157__$1 = tmp19244;
var inst_19158__$1 = inst_19166;
var state_19214__$1 = (function (){var statearr_19250 = state_19214;
(statearr_19250[(12)] = inst_19157__$1);

(statearr_19250[(13)] = inst_19155__$1);

(statearr_19250[(17)] = inst_19165);

(statearr_19250[(14)] = inst_19158__$1);

(statearr_19250[(15)] = inst_19156__$1);

return statearr_19250;
})();
var statearr_19251_19291 = state_19214__$1;
(statearr_19251_19291[(2)] = null);

(statearr_19251_19291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (18))){
var inst_19184 = (state_19214[(2)]);
var state_19214__$1 = state_19214;
var statearr_19252_19292 = state_19214__$1;
(statearr_19252_19292[(2)] = inst_19184);

(statearr_19252_19292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19215 === (8))){
var inst_19157 = (state_19214[(12)]);
var inst_19158 = (state_19214[(14)]);
var inst_19160 = (inst_19158 < inst_19157);
var inst_19161 = inst_19160;
var state_19214__$1 = state_19214;
if(cljs.core.truth_(inst_19161)){
var statearr_19253_19293 = state_19214__$1;
(statearr_19253_19293[(1)] = (10));

} else {
var statearr_19254_19294 = state_19214__$1;
(statearr_19254_19294[(1)] = (11));

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
});})(c__10692__auto___19266,mults,ensure_mult,p))
;
return ((function (switch__10627__auto__,c__10692__auto___19266,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19258[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19258[(1)] = (1));

return statearr_19258;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19214){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19259){if((e19259 instanceof Object)){
var ex__10631__auto__ = e19259;
var statearr_19260_19295 = state_19214;
(statearr_19260_19295[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19296 = state_19214;
state_19214 = G__19296;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19266,mults,ensure_mult,p))
})();
var state__10694__auto__ = (function (){var statearr_19261 = f__10693__auto__.call(null);
(statearr_19261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19266);

return statearr_19261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19266,mults,ensure_mult,p))
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
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19297.length)].join('')));

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
var args19304 = [];
var len__6152__auto___19307 = arguments.length;
var i__6153__auto___19308 = (0);
while(true){
if((i__6153__auto___19308 < len__6152__auto___19307)){
args19304.push((arguments[i__6153__auto___19308]));

var G__19309 = (i__6153__auto___19308 + (1));
i__6153__auto___19308 = G__19309;
continue;
} else {
}
break;
}

var G__19306 = args19304.length;
switch (G__19306) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19304.length)].join('')));

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
var args19311 = [];
var len__6152__auto___19382 = arguments.length;
var i__6153__auto___19383 = (0);
while(true){
if((i__6153__auto___19383 < len__6152__auto___19382)){
args19311.push((arguments[i__6153__auto___19383]));

var G__19384 = (i__6153__auto___19383 + (1));
i__6153__auto___19383 = G__19384;
continue;
} else {
}
break;
}

var G__19313 = args19311.length;
switch (G__19313) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19311.length)].join('')));

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
var c__10692__auto___19386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19352){
var state_val_19353 = (state_19352[(1)]);
if((state_val_19353 === (7))){
var state_19352__$1 = state_19352;
var statearr_19354_19387 = state_19352__$1;
(statearr_19354_19387[(2)] = null);

(statearr_19354_19387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (1))){
var state_19352__$1 = state_19352;
var statearr_19355_19388 = state_19352__$1;
(statearr_19355_19388[(2)] = null);

(statearr_19355_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (4))){
var inst_19316 = (state_19352[(7)]);
var inst_19318 = (inst_19316 < cnt);
var state_19352__$1 = state_19352;
if(cljs.core.truth_(inst_19318)){
var statearr_19356_19389 = state_19352__$1;
(statearr_19356_19389[(1)] = (6));

} else {
var statearr_19357_19390 = state_19352__$1;
(statearr_19357_19390[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (15))){
var inst_19348 = (state_19352[(2)]);
var state_19352__$1 = state_19352;
var statearr_19358_19391 = state_19352__$1;
(statearr_19358_19391[(2)] = inst_19348);

(statearr_19358_19391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (13))){
var inst_19341 = cljs.core.async.close_BANG_.call(null,out);
var state_19352__$1 = state_19352;
var statearr_19359_19392 = state_19352__$1;
(statearr_19359_19392[(2)] = inst_19341);

(statearr_19359_19392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (6))){
var state_19352__$1 = state_19352;
var statearr_19360_19393 = state_19352__$1;
(statearr_19360_19393[(2)] = null);

(statearr_19360_19393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (3))){
var inst_19350 = (state_19352[(2)]);
var state_19352__$1 = state_19352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19352__$1,inst_19350);
} else {
if((state_val_19353 === (12))){
var inst_19338 = (state_19352[(8)]);
var inst_19338__$1 = (state_19352[(2)]);
var inst_19339 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19338__$1);
var state_19352__$1 = (function (){var statearr_19361 = state_19352;
(statearr_19361[(8)] = inst_19338__$1);

return statearr_19361;
})();
if(cljs.core.truth_(inst_19339)){
var statearr_19362_19394 = state_19352__$1;
(statearr_19362_19394[(1)] = (13));

} else {
var statearr_19363_19395 = state_19352__$1;
(statearr_19363_19395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (2))){
var inst_19315 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19316 = (0);
var state_19352__$1 = (function (){var statearr_19364 = state_19352;
(statearr_19364[(9)] = inst_19315);

(statearr_19364[(7)] = inst_19316);

return statearr_19364;
})();
var statearr_19365_19396 = state_19352__$1;
(statearr_19365_19396[(2)] = null);

(statearr_19365_19396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (11))){
var inst_19316 = (state_19352[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19352,(10),Object,null,(9));
var inst_19325 = chs__$1.call(null,inst_19316);
var inst_19326 = done.call(null,inst_19316);
var inst_19327 = cljs.core.async.take_BANG_.call(null,inst_19325,inst_19326);
var state_19352__$1 = state_19352;
var statearr_19366_19397 = state_19352__$1;
(statearr_19366_19397[(2)] = inst_19327);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19352__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (9))){
var inst_19316 = (state_19352[(7)]);
var inst_19329 = (state_19352[(2)]);
var inst_19330 = (inst_19316 + (1));
var inst_19316__$1 = inst_19330;
var state_19352__$1 = (function (){var statearr_19367 = state_19352;
(statearr_19367[(10)] = inst_19329);

(statearr_19367[(7)] = inst_19316__$1);

return statearr_19367;
})();
var statearr_19368_19398 = state_19352__$1;
(statearr_19368_19398[(2)] = null);

(statearr_19368_19398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (5))){
var inst_19336 = (state_19352[(2)]);
var state_19352__$1 = (function (){var statearr_19369 = state_19352;
(statearr_19369[(11)] = inst_19336);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19352__$1,(12),dchan);
} else {
if((state_val_19353 === (14))){
var inst_19338 = (state_19352[(8)]);
var inst_19343 = cljs.core.apply.call(null,f,inst_19338);
var state_19352__$1 = state_19352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19352__$1,(16),out,inst_19343);
} else {
if((state_val_19353 === (16))){
var inst_19345 = (state_19352[(2)]);
var state_19352__$1 = (function (){var statearr_19370 = state_19352;
(statearr_19370[(12)] = inst_19345);

return statearr_19370;
})();
var statearr_19371_19399 = state_19352__$1;
(statearr_19371_19399[(2)] = null);

(statearr_19371_19399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (10))){
var inst_19320 = (state_19352[(2)]);
var inst_19321 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19352__$1 = (function (){var statearr_19372 = state_19352;
(statearr_19372[(13)] = inst_19320);

return statearr_19372;
})();
var statearr_19373_19400 = state_19352__$1;
(statearr_19373_19400[(2)] = inst_19321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19352__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19353 === (8))){
var inst_19334 = (state_19352[(2)]);
var state_19352__$1 = state_19352;
var statearr_19374_19401 = state_19352__$1;
(statearr_19374_19401[(2)] = inst_19334);

(statearr_19374_19401[(1)] = (5));


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
});})(c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10627__auto__,c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19378[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19378[(1)] = (1));

return statearr_19378;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19352){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19379){if((e19379 instanceof Object)){
var ex__10631__auto__ = e19379;
var statearr_19380_19402 = state_19352;
(statearr_19380_19402[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19403 = state_19352;
state_19352 = G__19403;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10694__auto__ = (function (){var statearr_19381 = f__10693__auto__.call(null);
(statearr_19381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19386);

return statearr_19381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19386,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19405 = [];
var len__6152__auto___19461 = arguments.length;
var i__6153__auto___19462 = (0);
while(true){
if((i__6153__auto___19462 < len__6152__auto___19461)){
args19405.push((arguments[i__6153__auto___19462]));

var G__19463 = (i__6153__auto___19462 + (1));
i__6153__auto___19462 = G__19463;
continue;
} else {
}
break;
}

var G__19407 = args19405.length;
switch (G__19407) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19405.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19465,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19465,out){
return (function (state_19437){
var state_val_19438 = (state_19437[(1)]);
if((state_val_19438 === (7))){
var inst_19416 = (state_19437[(7)]);
var inst_19417 = (state_19437[(8)]);
var inst_19416__$1 = (state_19437[(2)]);
var inst_19417__$1 = cljs.core.nth.call(null,inst_19416__$1,(0),null);
var inst_19418 = cljs.core.nth.call(null,inst_19416__$1,(1),null);
var inst_19419 = (inst_19417__$1 == null);
var state_19437__$1 = (function (){var statearr_19439 = state_19437;
(statearr_19439[(7)] = inst_19416__$1);

(statearr_19439[(8)] = inst_19417__$1);

(statearr_19439[(9)] = inst_19418);

return statearr_19439;
})();
if(cljs.core.truth_(inst_19419)){
var statearr_19440_19466 = state_19437__$1;
(statearr_19440_19466[(1)] = (8));

} else {
var statearr_19441_19467 = state_19437__$1;
(statearr_19441_19467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (1))){
var inst_19408 = cljs.core.vec.call(null,chs);
var inst_19409 = inst_19408;
var state_19437__$1 = (function (){var statearr_19442 = state_19437;
(statearr_19442[(10)] = inst_19409);

return statearr_19442;
})();
var statearr_19443_19468 = state_19437__$1;
(statearr_19443_19468[(2)] = null);

(statearr_19443_19468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (4))){
var inst_19409 = (state_19437[(10)]);
var state_19437__$1 = state_19437;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19437__$1,(7),inst_19409);
} else {
if((state_val_19438 === (6))){
var inst_19433 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19444_19469 = state_19437__$1;
(statearr_19444_19469[(2)] = inst_19433);

(statearr_19444_19469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (3))){
var inst_19435 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19437__$1,inst_19435);
} else {
if((state_val_19438 === (2))){
var inst_19409 = (state_19437[(10)]);
var inst_19411 = cljs.core.count.call(null,inst_19409);
var inst_19412 = (inst_19411 > (0));
var state_19437__$1 = state_19437;
if(cljs.core.truth_(inst_19412)){
var statearr_19446_19470 = state_19437__$1;
(statearr_19446_19470[(1)] = (4));

} else {
var statearr_19447_19471 = state_19437__$1;
(statearr_19447_19471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (11))){
var inst_19409 = (state_19437[(10)]);
var inst_19426 = (state_19437[(2)]);
var tmp19445 = inst_19409;
var inst_19409__$1 = tmp19445;
var state_19437__$1 = (function (){var statearr_19448 = state_19437;
(statearr_19448[(10)] = inst_19409__$1);

(statearr_19448[(11)] = inst_19426);

return statearr_19448;
})();
var statearr_19449_19472 = state_19437__$1;
(statearr_19449_19472[(2)] = null);

(statearr_19449_19472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (9))){
var inst_19417 = (state_19437[(8)]);
var state_19437__$1 = state_19437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19437__$1,(11),out,inst_19417);
} else {
if((state_val_19438 === (5))){
var inst_19431 = cljs.core.async.close_BANG_.call(null,out);
var state_19437__$1 = state_19437;
var statearr_19450_19473 = state_19437__$1;
(statearr_19450_19473[(2)] = inst_19431);

(statearr_19450_19473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (10))){
var inst_19429 = (state_19437[(2)]);
var state_19437__$1 = state_19437;
var statearr_19451_19474 = state_19437__$1;
(statearr_19451_19474[(2)] = inst_19429);

(statearr_19451_19474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19438 === (8))){
var inst_19416 = (state_19437[(7)]);
var inst_19409 = (state_19437[(10)]);
var inst_19417 = (state_19437[(8)]);
var inst_19418 = (state_19437[(9)]);
var inst_19421 = (function (){var cs = inst_19409;
var vec__19414 = inst_19416;
var v = inst_19417;
var c = inst_19418;
return ((function (cs,vec__19414,v,c,inst_19416,inst_19409,inst_19417,inst_19418,state_val_19438,c__10692__auto___19465,out){
return (function (p1__19404_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19404_SHARP_);
});
;})(cs,vec__19414,v,c,inst_19416,inst_19409,inst_19417,inst_19418,state_val_19438,c__10692__auto___19465,out))
})();
var inst_19422 = cljs.core.filterv.call(null,inst_19421,inst_19409);
var inst_19409__$1 = inst_19422;
var state_19437__$1 = (function (){var statearr_19452 = state_19437;
(statearr_19452[(10)] = inst_19409__$1);

return statearr_19452;
})();
var statearr_19453_19475 = state_19437__$1;
(statearr_19453_19475[(2)] = null);

(statearr_19453_19475[(1)] = (2));


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
});})(c__10692__auto___19465,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19465,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19457 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19457[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19457[(1)] = (1));

return statearr_19457;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19437){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19458){if((e19458 instanceof Object)){
var ex__10631__auto__ = e19458;
var statearr_19459_19476 = state_19437;
(statearr_19459_19476[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19477 = state_19437;
state_19437 = G__19477;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19465,out))
})();
var state__10694__auto__ = (function (){var statearr_19460 = f__10693__auto__.call(null);
(statearr_19460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19465);

return statearr_19460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19465,out))
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
var args19478 = [];
var len__6152__auto___19527 = arguments.length;
var i__6153__auto___19528 = (0);
while(true){
if((i__6153__auto___19528 < len__6152__auto___19527)){
args19478.push((arguments[i__6153__auto___19528]));

var G__19529 = (i__6153__auto___19528 + (1));
i__6153__auto___19528 = G__19529;
continue;
} else {
}
break;
}

var G__19480 = args19478.length;
switch (G__19480) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19478.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19531,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19531,out){
return (function (state_19504){
var state_val_19505 = (state_19504[(1)]);
if((state_val_19505 === (7))){
var inst_19486 = (state_19504[(7)]);
var inst_19486__$1 = (state_19504[(2)]);
var inst_19487 = (inst_19486__$1 == null);
var inst_19488 = cljs.core.not.call(null,inst_19487);
var state_19504__$1 = (function (){var statearr_19506 = state_19504;
(statearr_19506[(7)] = inst_19486__$1);

return statearr_19506;
})();
if(inst_19488){
var statearr_19507_19532 = state_19504__$1;
(statearr_19507_19532[(1)] = (8));

} else {
var statearr_19508_19533 = state_19504__$1;
(statearr_19508_19533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (1))){
var inst_19481 = (0);
var state_19504__$1 = (function (){var statearr_19509 = state_19504;
(statearr_19509[(8)] = inst_19481);

return statearr_19509;
})();
var statearr_19510_19534 = state_19504__$1;
(statearr_19510_19534[(2)] = null);

(statearr_19510_19534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (4))){
var state_19504__$1 = state_19504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19504__$1,(7),ch);
} else {
if((state_val_19505 === (6))){
var inst_19499 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19511_19535 = state_19504__$1;
(statearr_19511_19535[(2)] = inst_19499);

(statearr_19511_19535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (3))){
var inst_19501 = (state_19504[(2)]);
var inst_19502 = cljs.core.async.close_BANG_.call(null,out);
var state_19504__$1 = (function (){var statearr_19512 = state_19504;
(statearr_19512[(9)] = inst_19501);

return statearr_19512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19504__$1,inst_19502);
} else {
if((state_val_19505 === (2))){
var inst_19481 = (state_19504[(8)]);
var inst_19483 = (inst_19481 < n);
var state_19504__$1 = state_19504;
if(cljs.core.truth_(inst_19483)){
var statearr_19513_19536 = state_19504__$1;
(statearr_19513_19536[(1)] = (4));

} else {
var statearr_19514_19537 = state_19504__$1;
(statearr_19514_19537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (11))){
var inst_19481 = (state_19504[(8)]);
var inst_19491 = (state_19504[(2)]);
var inst_19492 = (inst_19481 + (1));
var inst_19481__$1 = inst_19492;
var state_19504__$1 = (function (){var statearr_19515 = state_19504;
(statearr_19515[(8)] = inst_19481__$1);

(statearr_19515[(10)] = inst_19491);

return statearr_19515;
})();
var statearr_19516_19538 = state_19504__$1;
(statearr_19516_19538[(2)] = null);

(statearr_19516_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (9))){
var state_19504__$1 = state_19504;
var statearr_19517_19539 = state_19504__$1;
(statearr_19517_19539[(2)] = null);

(statearr_19517_19539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (5))){
var state_19504__$1 = state_19504;
var statearr_19518_19540 = state_19504__$1;
(statearr_19518_19540[(2)] = null);

(statearr_19518_19540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (10))){
var inst_19496 = (state_19504[(2)]);
var state_19504__$1 = state_19504;
var statearr_19519_19541 = state_19504__$1;
(statearr_19519_19541[(2)] = inst_19496);

(statearr_19519_19541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19505 === (8))){
var inst_19486 = (state_19504[(7)]);
var state_19504__$1 = state_19504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19504__$1,(11),out,inst_19486);
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
});})(c__10692__auto___19531,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19531,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19523[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19523[(1)] = (1));

return statearr_19523;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19504){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19524){if((e19524 instanceof Object)){
var ex__10631__auto__ = e19524;
var statearr_19525_19542 = state_19504;
(statearr_19525_19542[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19543 = state_19504;
state_19504 = G__19543;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19531,out))
})();
var state__10694__auto__ = (function (){var statearr_19526 = f__10693__auto__.call(null);
(statearr_19526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19531);

return statearr_19526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19531,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19551 = (function (map_LT_,f,ch,meta19552){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19552 = meta19552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19553,meta19552__$1){
var self__ = this;
var _19553__$1 = this;
return (new cljs.core.async.t_cljs$core$async19551(self__.map_LT_,self__.f,self__.ch,meta19552__$1));
});

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19553){
var self__ = this;
var _19553__$1 = this;
return self__.meta19552;
});

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19554 = (function (map_LT_,f,ch,meta19552,_,fn1,meta19555){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19552 = meta19552;
this._ = _;
this.fn1 = fn1;
this.meta19555 = meta19555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19556,meta19555__$1){
var self__ = this;
var _19556__$1 = this;
return (new cljs.core.async.t_cljs$core$async19554(self__.map_LT_,self__.f,self__.ch,self__.meta19552,self__._,self__.fn1,meta19555__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19556){
var self__ = this;
var _19556__$1 = this;
return self__.meta19555;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19544_SHARP_){
return f1.call(null,(((p1__19544_SHARP_ == null))?null:self__.f.call(null,p1__19544_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19554.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19552","meta19552",-2038324718,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19551","cljs.core.async/t_cljs$core$async19551",1029268231,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19555","meta19555",1195456797,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19554";

cljs.core.async.t_cljs$core$async19554.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19554");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19554 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19554(map_LT___$1,f__$1,ch__$1,meta19552__$1,___$2,fn1__$1,meta19555){
return (new cljs.core.async.t_cljs$core$async19554(map_LT___$1,f__$1,ch__$1,meta19552__$1,___$2,fn1__$1,meta19555));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19554(self__.map_LT_,self__.f,self__.ch,self__.meta19552,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19552","meta19552",-2038324718,null)], null);
});

cljs.core.async.t_cljs$core$async19551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19551";

cljs.core.async.t_cljs$core$async19551.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19551");
});

cljs.core.async.__GT_t_cljs$core$async19551 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19551(map_LT___$1,f__$1,ch__$1,meta19552){
return (new cljs.core.async.t_cljs$core$async19551(map_LT___$1,f__$1,ch__$1,meta19552));
});

}

return (new cljs.core.async.t_cljs$core$async19551(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19560 = (function (map_GT_,f,ch,meta19561){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19561 = meta19561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19562,meta19561__$1){
var self__ = this;
var _19562__$1 = this;
return (new cljs.core.async.t_cljs$core$async19560(self__.map_GT_,self__.f,self__.ch,meta19561__$1));
});

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19562){
var self__ = this;
var _19562__$1 = this;
return self__.meta19561;
});

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19561","meta19561",2071612884,null)], null);
});

cljs.core.async.t_cljs$core$async19560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19560";

cljs.core.async.t_cljs$core$async19560.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19560");
});

cljs.core.async.__GT_t_cljs$core$async19560 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19560(map_GT___$1,f__$1,ch__$1,meta19561){
return (new cljs.core.async.t_cljs$core$async19560(map_GT___$1,f__$1,ch__$1,meta19561));
});

}

return (new cljs.core.async.t_cljs$core$async19560(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19566 = (function (filter_GT_,p,ch,meta19567){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19567 = meta19567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19568,meta19567__$1){
var self__ = this;
var _19568__$1 = this;
return (new cljs.core.async.t_cljs$core$async19566(self__.filter_GT_,self__.p,self__.ch,meta19567__$1));
});

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19568){
var self__ = this;
var _19568__$1 = this;
return self__.meta19567;
});

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19567","meta19567",68192498,null)], null);
});

cljs.core.async.t_cljs$core$async19566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19566";

cljs.core.async.t_cljs$core$async19566.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19566");
});

cljs.core.async.__GT_t_cljs$core$async19566 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19566(filter_GT___$1,p__$1,ch__$1,meta19567){
return (new cljs.core.async.t_cljs$core$async19566(filter_GT___$1,p__$1,ch__$1,meta19567));
});

}

return (new cljs.core.async.t_cljs$core$async19566(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19569 = [];
var len__6152__auto___19613 = arguments.length;
var i__6153__auto___19614 = (0);
while(true){
if((i__6153__auto___19614 < len__6152__auto___19613)){
args19569.push((arguments[i__6153__auto___19614]));

var G__19615 = (i__6153__auto___19614 + (1));
i__6153__auto___19614 = G__19615;
continue;
} else {
}
break;
}

var G__19571 = args19569.length;
switch (G__19571) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19569.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19617,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19617,out){
return (function (state_19592){
var state_val_19593 = (state_19592[(1)]);
if((state_val_19593 === (7))){
var inst_19588 = (state_19592[(2)]);
var state_19592__$1 = state_19592;
var statearr_19594_19618 = state_19592__$1;
(statearr_19594_19618[(2)] = inst_19588);

(statearr_19594_19618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (1))){
var state_19592__$1 = state_19592;
var statearr_19595_19619 = state_19592__$1;
(statearr_19595_19619[(2)] = null);

(statearr_19595_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (4))){
var inst_19574 = (state_19592[(7)]);
var inst_19574__$1 = (state_19592[(2)]);
var inst_19575 = (inst_19574__$1 == null);
var state_19592__$1 = (function (){var statearr_19596 = state_19592;
(statearr_19596[(7)] = inst_19574__$1);

return statearr_19596;
})();
if(cljs.core.truth_(inst_19575)){
var statearr_19597_19620 = state_19592__$1;
(statearr_19597_19620[(1)] = (5));

} else {
var statearr_19598_19621 = state_19592__$1;
(statearr_19598_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (6))){
var inst_19574 = (state_19592[(7)]);
var inst_19579 = p.call(null,inst_19574);
var state_19592__$1 = state_19592;
if(cljs.core.truth_(inst_19579)){
var statearr_19599_19622 = state_19592__$1;
(statearr_19599_19622[(1)] = (8));

} else {
var statearr_19600_19623 = state_19592__$1;
(statearr_19600_19623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (3))){
var inst_19590 = (state_19592[(2)]);
var state_19592__$1 = state_19592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19592__$1,inst_19590);
} else {
if((state_val_19593 === (2))){
var state_19592__$1 = state_19592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19592__$1,(4),ch);
} else {
if((state_val_19593 === (11))){
var inst_19582 = (state_19592[(2)]);
var state_19592__$1 = state_19592;
var statearr_19601_19624 = state_19592__$1;
(statearr_19601_19624[(2)] = inst_19582);

(statearr_19601_19624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (9))){
var state_19592__$1 = state_19592;
var statearr_19602_19625 = state_19592__$1;
(statearr_19602_19625[(2)] = null);

(statearr_19602_19625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (5))){
var inst_19577 = cljs.core.async.close_BANG_.call(null,out);
var state_19592__$1 = state_19592;
var statearr_19603_19626 = state_19592__$1;
(statearr_19603_19626[(2)] = inst_19577);

(statearr_19603_19626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (10))){
var inst_19585 = (state_19592[(2)]);
var state_19592__$1 = (function (){var statearr_19604 = state_19592;
(statearr_19604[(8)] = inst_19585);

return statearr_19604;
})();
var statearr_19605_19627 = state_19592__$1;
(statearr_19605_19627[(2)] = null);

(statearr_19605_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19593 === (8))){
var inst_19574 = (state_19592[(7)]);
var state_19592__$1 = state_19592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19592__$1,(11),out,inst_19574);
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
});})(c__10692__auto___19617,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19617,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19609 = [null,null,null,null,null,null,null,null,null];
(statearr_19609[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19609[(1)] = (1));

return statearr_19609;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19592){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19610){if((e19610 instanceof Object)){
var ex__10631__auto__ = e19610;
var statearr_19611_19628 = state_19592;
(statearr_19611_19628[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19629 = state_19592;
state_19592 = G__19629;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19617,out))
})();
var state__10694__auto__ = (function (){var statearr_19612 = f__10693__auto__.call(null);
(statearr_19612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19617);

return statearr_19612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19617,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19630 = [];
var len__6152__auto___19633 = arguments.length;
var i__6153__auto___19634 = (0);
while(true){
if((i__6153__auto___19634 < len__6152__auto___19633)){
args19630.push((arguments[i__6153__auto___19634]));

var G__19635 = (i__6153__auto___19634 + (1));
i__6153__auto___19634 = G__19635;
continue;
} else {
}
break;
}

var G__19632 = args19630.length;
switch (G__19632) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19630.length)].join('')));

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
return (function (state_19802){
var state_val_19803 = (state_19802[(1)]);
if((state_val_19803 === (7))){
var inst_19798 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19804_19845 = state_19802__$1;
(statearr_19804_19845[(2)] = inst_19798);

(statearr_19804_19845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (20))){
var inst_19768 = (state_19802[(7)]);
var inst_19779 = (state_19802[(2)]);
var inst_19780 = cljs.core.next.call(null,inst_19768);
var inst_19754 = inst_19780;
var inst_19755 = null;
var inst_19756 = (0);
var inst_19757 = (0);
var state_19802__$1 = (function (){var statearr_19805 = state_19802;
(statearr_19805[(8)] = inst_19755);

(statearr_19805[(9)] = inst_19757);

(statearr_19805[(10)] = inst_19779);

(statearr_19805[(11)] = inst_19754);

(statearr_19805[(12)] = inst_19756);

return statearr_19805;
})();
var statearr_19806_19846 = state_19802__$1;
(statearr_19806_19846[(2)] = null);

(statearr_19806_19846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (1))){
var state_19802__$1 = state_19802;
var statearr_19807_19847 = state_19802__$1;
(statearr_19807_19847[(2)] = null);

(statearr_19807_19847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (4))){
var inst_19743 = (state_19802[(13)]);
var inst_19743__$1 = (state_19802[(2)]);
var inst_19744 = (inst_19743__$1 == null);
var state_19802__$1 = (function (){var statearr_19808 = state_19802;
(statearr_19808[(13)] = inst_19743__$1);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19744)){
var statearr_19809_19848 = state_19802__$1;
(statearr_19809_19848[(1)] = (5));

} else {
var statearr_19810_19849 = state_19802__$1;
(statearr_19810_19849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (15))){
var state_19802__$1 = state_19802;
var statearr_19814_19850 = state_19802__$1;
(statearr_19814_19850[(2)] = null);

(statearr_19814_19850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (21))){
var state_19802__$1 = state_19802;
var statearr_19815_19851 = state_19802__$1;
(statearr_19815_19851[(2)] = null);

(statearr_19815_19851[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (13))){
var inst_19755 = (state_19802[(8)]);
var inst_19757 = (state_19802[(9)]);
var inst_19754 = (state_19802[(11)]);
var inst_19756 = (state_19802[(12)]);
var inst_19764 = (state_19802[(2)]);
var inst_19765 = (inst_19757 + (1));
var tmp19811 = inst_19755;
var tmp19812 = inst_19754;
var tmp19813 = inst_19756;
var inst_19754__$1 = tmp19812;
var inst_19755__$1 = tmp19811;
var inst_19756__$1 = tmp19813;
var inst_19757__$1 = inst_19765;
var state_19802__$1 = (function (){var statearr_19816 = state_19802;
(statearr_19816[(14)] = inst_19764);

(statearr_19816[(8)] = inst_19755__$1);

(statearr_19816[(9)] = inst_19757__$1);

(statearr_19816[(11)] = inst_19754__$1);

(statearr_19816[(12)] = inst_19756__$1);

return statearr_19816;
})();
var statearr_19817_19852 = state_19802__$1;
(statearr_19817_19852[(2)] = null);

(statearr_19817_19852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (22))){
var state_19802__$1 = state_19802;
var statearr_19818_19853 = state_19802__$1;
(statearr_19818_19853[(2)] = null);

(statearr_19818_19853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (6))){
var inst_19743 = (state_19802[(13)]);
var inst_19752 = f.call(null,inst_19743);
var inst_19753 = cljs.core.seq.call(null,inst_19752);
var inst_19754 = inst_19753;
var inst_19755 = null;
var inst_19756 = (0);
var inst_19757 = (0);
var state_19802__$1 = (function (){var statearr_19819 = state_19802;
(statearr_19819[(8)] = inst_19755);

(statearr_19819[(9)] = inst_19757);

(statearr_19819[(11)] = inst_19754);

(statearr_19819[(12)] = inst_19756);

return statearr_19819;
})();
var statearr_19820_19854 = state_19802__$1;
(statearr_19820_19854[(2)] = null);

(statearr_19820_19854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (17))){
var inst_19768 = (state_19802[(7)]);
var inst_19772 = cljs.core.chunk_first.call(null,inst_19768);
var inst_19773 = cljs.core.chunk_rest.call(null,inst_19768);
var inst_19774 = cljs.core.count.call(null,inst_19772);
var inst_19754 = inst_19773;
var inst_19755 = inst_19772;
var inst_19756 = inst_19774;
var inst_19757 = (0);
var state_19802__$1 = (function (){var statearr_19821 = state_19802;
(statearr_19821[(8)] = inst_19755);

(statearr_19821[(9)] = inst_19757);

(statearr_19821[(11)] = inst_19754);

(statearr_19821[(12)] = inst_19756);

return statearr_19821;
})();
var statearr_19822_19855 = state_19802__$1;
(statearr_19822_19855[(2)] = null);

(statearr_19822_19855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (3))){
var inst_19800 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19802__$1,inst_19800);
} else {
if((state_val_19803 === (12))){
var inst_19788 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19823_19856 = state_19802__$1;
(statearr_19823_19856[(2)] = inst_19788);

(statearr_19823_19856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (2))){
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19802__$1,(4),in$);
} else {
if((state_val_19803 === (23))){
var inst_19796 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19824_19857 = state_19802__$1;
(statearr_19824_19857[(2)] = inst_19796);

(statearr_19824_19857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (19))){
var inst_19783 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19825_19858 = state_19802__$1;
(statearr_19825_19858[(2)] = inst_19783);

(statearr_19825_19858[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (11))){
var inst_19768 = (state_19802[(7)]);
var inst_19754 = (state_19802[(11)]);
var inst_19768__$1 = cljs.core.seq.call(null,inst_19754);
var state_19802__$1 = (function (){var statearr_19826 = state_19802;
(statearr_19826[(7)] = inst_19768__$1);

return statearr_19826;
})();
if(inst_19768__$1){
var statearr_19827_19859 = state_19802__$1;
(statearr_19827_19859[(1)] = (14));

} else {
var statearr_19828_19860 = state_19802__$1;
(statearr_19828_19860[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (9))){
var inst_19790 = (state_19802[(2)]);
var inst_19791 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19802__$1 = (function (){var statearr_19829 = state_19802;
(statearr_19829[(15)] = inst_19790);

return statearr_19829;
})();
if(cljs.core.truth_(inst_19791)){
var statearr_19830_19861 = state_19802__$1;
(statearr_19830_19861[(1)] = (21));

} else {
var statearr_19831_19862 = state_19802__$1;
(statearr_19831_19862[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (5))){
var inst_19746 = cljs.core.async.close_BANG_.call(null,out);
var state_19802__$1 = state_19802;
var statearr_19832_19863 = state_19802__$1;
(statearr_19832_19863[(2)] = inst_19746);

(statearr_19832_19863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (14))){
var inst_19768 = (state_19802[(7)]);
var inst_19770 = cljs.core.chunked_seq_QMARK_.call(null,inst_19768);
var state_19802__$1 = state_19802;
if(inst_19770){
var statearr_19833_19864 = state_19802__$1;
(statearr_19833_19864[(1)] = (17));

} else {
var statearr_19834_19865 = state_19802__$1;
(statearr_19834_19865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (16))){
var inst_19786 = (state_19802[(2)]);
var state_19802__$1 = state_19802;
var statearr_19835_19866 = state_19802__$1;
(statearr_19835_19866[(2)] = inst_19786);

(statearr_19835_19866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19803 === (10))){
var inst_19755 = (state_19802[(8)]);
var inst_19757 = (state_19802[(9)]);
var inst_19762 = cljs.core._nth.call(null,inst_19755,inst_19757);
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19802__$1,(13),out,inst_19762);
} else {
if((state_val_19803 === (18))){
var inst_19768 = (state_19802[(7)]);
var inst_19777 = cljs.core.first.call(null,inst_19768);
var state_19802__$1 = state_19802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19802__$1,(20),out,inst_19777);
} else {
if((state_val_19803 === (8))){
var inst_19757 = (state_19802[(9)]);
var inst_19756 = (state_19802[(12)]);
var inst_19759 = (inst_19757 < inst_19756);
var inst_19760 = inst_19759;
var state_19802__$1 = state_19802;
if(cljs.core.truth_(inst_19760)){
var statearr_19836_19867 = state_19802__$1;
(statearr_19836_19867[(1)] = (10));

} else {
var statearr_19837_19868 = state_19802__$1;
(statearr_19837_19868[(1)] = (11));

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
var statearr_19841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19841[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__);

(statearr_19841[(1)] = (1));

return statearr_19841;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1 = (function (state_19802){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19842){if((e19842 instanceof Object)){
var ex__10631__auto__ = e19842;
var statearr_19843_19869 = state_19802;
(statearr_19843_19869[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19870 = state_19802;
state_19802 = G__19870;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__ = function(state_19802){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1.call(this,state_19802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10628__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto__))
})();
var state__10694__auto__ = (function (){var statearr_19844 = f__10693__auto__.call(null);
(statearr_19844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto__);

return statearr_19844;
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19871.length)].join('')));

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
var args19878 = [];
var len__6152__auto___19881 = arguments.length;
var i__6153__auto___19882 = (0);
while(true){
if((i__6153__auto___19882 < len__6152__auto___19881)){
args19878.push((arguments[i__6153__auto___19882]));

var G__19883 = (i__6153__auto___19882 + (1));
i__6153__auto___19882 = G__19883;
continue;
} else {
}
break;
}

var G__19880 = args19878.length;
switch (G__19880) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19878.length)].join('')));

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
var args19885 = [];
var len__6152__auto___19936 = arguments.length;
var i__6153__auto___19937 = (0);
while(true){
if((i__6153__auto___19937 < len__6152__auto___19936)){
args19885.push((arguments[i__6153__auto___19937]));

var G__19938 = (i__6153__auto___19937 + (1));
i__6153__auto___19937 = G__19938;
continue;
} else {
}
break;
}

var G__19887 = args19885.length;
switch (G__19887) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19885.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___19940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___19940,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___19940,out){
return (function (state_19911){
var state_val_19912 = (state_19911[(1)]);
if((state_val_19912 === (7))){
var inst_19906 = (state_19911[(2)]);
var state_19911__$1 = state_19911;
var statearr_19913_19941 = state_19911__$1;
(statearr_19913_19941[(2)] = inst_19906);

(statearr_19913_19941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (1))){
var inst_19888 = null;
var state_19911__$1 = (function (){var statearr_19914 = state_19911;
(statearr_19914[(7)] = inst_19888);

return statearr_19914;
})();
var statearr_19915_19942 = state_19911__$1;
(statearr_19915_19942[(2)] = null);

(statearr_19915_19942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (4))){
var inst_19891 = (state_19911[(8)]);
var inst_19891__$1 = (state_19911[(2)]);
var inst_19892 = (inst_19891__$1 == null);
var inst_19893 = cljs.core.not.call(null,inst_19892);
var state_19911__$1 = (function (){var statearr_19916 = state_19911;
(statearr_19916[(8)] = inst_19891__$1);

return statearr_19916;
})();
if(inst_19893){
var statearr_19917_19943 = state_19911__$1;
(statearr_19917_19943[(1)] = (5));

} else {
var statearr_19918_19944 = state_19911__$1;
(statearr_19918_19944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (6))){
var state_19911__$1 = state_19911;
var statearr_19919_19945 = state_19911__$1;
(statearr_19919_19945[(2)] = null);

(statearr_19919_19945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (3))){
var inst_19908 = (state_19911[(2)]);
var inst_19909 = cljs.core.async.close_BANG_.call(null,out);
var state_19911__$1 = (function (){var statearr_19920 = state_19911;
(statearr_19920[(9)] = inst_19908);

return statearr_19920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19911__$1,inst_19909);
} else {
if((state_val_19912 === (2))){
var state_19911__$1 = state_19911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19911__$1,(4),ch);
} else {
if((state_val_19912 === (11))){
var inst_19891 = (state_19911[(8)]);
var inst_19900 = (state_19911[(2)]);
var inst_19888 = inst_19891;
var state_19911__$1 = (function (){var statearr_19921 = state_19911;
(statearr_19921[(7)] = inst_19888);

(statearr_19921[(10)] = inst_19900);

return statearr_19921;
})();
var statearr_19922_19946 = state_19911__$1;
(statearr_19922_19946[(2)] = null);

(statearr_19922_19946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (9))){
var inst_19891 = (state_19911[(8)]);
var state_19911__$1 = state_19911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19911__$1,(11),out,inst_19891);
} else {
if((state_val_19912 === (5))){
var inst_19888 = (state_19911[(7)]);
var inst_19891 = (state_19911[(8)]);
var inst_19895 = cljs.core._EQ_.call(null,inst_19891,inst_19888);
var state_19911__$1 = state_19911;
if(inst_19895){
var statearr_19924_19947 = state_19911__$1;
(statearr_19924_19947[(1)] = (8));

} else {
var statearr_19925_19948 = state_19911__$1;
(statearr_19925_19948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (10))){
var inst_19903 = (state_19911[(2)]);
var state_19911__$1 = state_19911;
var statearr_19926_19949 = state_19911__$1;
(statearr_19926_19949[(2)] = inst_19903);

(statearr_19926_19949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19912 === (8))){
var inst_19888 = (state_19911[(7)]);
var tmp19923 = inst_19888;
var inst_19888__$1 = tmp19923;
var state_19911__$1 = (function (){var statearr_19927 = state_19911;
(statearr_19927[(7)] = inst_19888__$1);

return statearr_19927;
})();
var statearr_19928_19950 = state_19911__$1;
(statearr_19928_19950[(2)] = null);

(statearr_19928_19950[(1)] = (2));


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
});})(c__10692__auto___19940,out))
;
return ((function (switch__10627__auto__,c__10692__auto___19940,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_19932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19932[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_19932[(1)] = (1));

return statearr_19932;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19911){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e19933){if((e19933 instanceof Object)){
var ex__10631__auto__ = e19933;
var statearr_19934_19951 = state_19911;
(statearr_19934_19951[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19952 = state_19911;
state_19911 = G__19952;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___19940,out))
})();
var state__10694__auto__ = (function (){var statearr_19935 = f__10693__auto__.call(null);
(statearr_19935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___19940);

return statearr_19935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___19940,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19953 = [];
var len__6152__auto___20023 = arguments.length;
var i__6153__auto___20024 = (0);
while(true){
if((i__6153__auto___20024 < len__6152__auto___20023)){
args19953.push((arguments[i__6153__auto___20024]));

var G__20025 = (i__6153__auto___20024 + (1));
i__6153__auto___20024 = G__20025;
continue;
} else {
}
break;
}

var G__19955 = args19953.length;
switch (G__19955) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19953.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___20027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___20027,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___20027,out){
return (function (state_19993){
var state_val_19994 = (state_19993[(1)]);
if((state_val_19994 === (7))){
var inst_19989 = (state_19993[(2)]);
var state_19993__$1 = state_19993;
var statearr_19995_20028 = state_19993__$1;
(statearr_19995_20028[(2)] = inst_19989);

(statearr_19995_20028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (1))){
var inst_19956 = (new Array(n));
var inst_19957 = inst_19956;
var inst_19958 = (0);
var state_19993__$1 = (function (){var statearr_19996 = state_19993;
(statearr_19996[(7)] = inst_19957);

(statearr_19996[(8)] = inst_19958);

return statearr_19996;
})();
var statearr_19997_20029 = state_19993__$1;
(statearr_19997_20029[(2)] = null);

(statearr_19997_20029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (4))){
var inst_19961 = (state_19993[(9)]);
var inst_19961__$1 = (state_19993[(2)]);
var inst_19962 = (inst_19961__$1 == null);
var inst_19963 = cljs.core.not.call(null,inst_19962);
var state_19993__$1 = (function (){var statearr_19998 = state_19993;
(statearr_19998[(9)] = inst_19961__$1);

return statearr_19998;
})();
if(inst_19963){
var statearr_19999_20030 = state_19993__$1;
(statearr_19999_20030[(1)] = (5));

} else {
var statearr_20000_20031 = state_19993__$1;
(statearr_20000_20031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (15))){
var inst_19983 = (state_19993[(2)]);
var state_19993__$1 = state_19993;
var statearr_20001_20032 = state_19993__$1;
(statearr_20001_20032[(2)] = inst_19983);

(statearr_20001_20032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (13))){
var state_19993__$1 = state_19993;
var statearr_20002_20033 = state_19993__$1;
(statearr_20002_20033[(2)] = null);

(statearr_20002_20033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (6))){
var inst_19958 = (state_19993[(8)]);
var inst_19979 = (inst_19958 > (0));
var state_19993__$1 = state_19993;
if(cljs.core.truth_(inst_19979)){
var statearr_20003_20034 = state_19993__$1;
(statearr_20003_20034[(1)] = (12));

} else {
var statearr_20004_20035 = state_19993__$1;
(statearr_20004_20035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (3))){
var inst_19991 = (state_19993[(2)]);
var state_19993__$1 = state_19993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19993__$1,inst_19991);
} else {
if((state_val_19994 === (12))){
var inst_19957 = (state_19993[(7)]);
var inst_19981 = cljs.core.vec.call(null,inst_19957);
var state_19993__$1 = state_19993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19993__$1,(15),out,inst_19981);
} else {
if((state_val_19994 === (2))){
var state_19993__$1 = state_19993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19993__$1,(4),ch);
} else {
if((state_val_19994 === (11))){
var inst_19973 = (state_19993[(2)]);
var inst_19974 = (new Array(n));
var inst_19957 = inst_19974;
var inst_19958 = (0);
var state_19993__$1 = (function (){var statearr_20005 = state_19993;
(statearr_20005[(7)] = inst_19957);

(statearr_20005[(8)] = inst_19958);

(statearr_20005[(10)] = inst_19973);

return statearr_20005;
})();
var statearr_20006_20036 = state_19993__$1;
(statearr_20006_20036[(2)] = null);

(statearr_20006_20036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (9))){
var inst_19957 = (state_19993[(7)]);
var inst_19971 = cljs.core.vec.call(null,inst_19957);
var state_19993__$1 = state_19993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19993__$1,(11),out,inst_19971);
} else {
if((state_val_19994 === (5))){
var inst_19957 = (state_19993[(7)]);
var inst_19966 = (state_19993[(11)]);
var inst_19958 = (state_19993[(8)]);
var inst_19961 = (state_19993[(9)]);
var inst_19965 = (inst_19957[inst_19958] = inst_19961);
var inst_19966__$1 = (inst_19958 + (1));
var inst_19967 = (inst_19966__$1 < n);
var state_19993__$1 = (function (){var statearr_20007 = state_19993;
(statearr_20007[(11)] = inst_19966__$1);

(statearr_20007[(12)] = inst_19965);

return statearr_20007;
})();
if(cljs.core.truth_(inst_19967)){
var statearr_20008_20037 = state_19993__$1;
(statearr_20008_20037[(1)] = (8));

} else {
var statearr_20009_20038 = state_19993__$1;
(statearr_20009_20038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (14))){
var inst_19986 = (state_19993[(2)]);
var inst_19987 = cljs.core.async.close_BANG_.call(null,out);
var state_19993__$1 = (function (){var statearr_20011 = state_19993;
(statearr_20011[(13)] = inst_19986);

return statearr_20011;
})();
var statearr_20012_20039 = state_19993__$1;
(statearr_20012_20039[(2)] = inst_19987);

(statearr_20012_20039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (10))){
var inst_19977 = (state_19993[(2)]);
var state_19993__$1 = state_19993;
var statearr_20013_20040 = state_19993__$1;
(statearr_20013_20040[(2)] = inst_19977);

(statearr_20013_20040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19994 === (8))){
var inst_19957 = (state_19993[(7)]);
var inst_19966 = (state_19993[(11)]);
var tmp20010 = inst_19957;
var inst_19957__$1 = tmp20010;
var inst_19958 = inst_19966;
var state_19993__$1 = (function (){var statearr_20014 = state_19993;
(statearr_20014[(7)] = inst_19957__$1);

(statearr_20014[(8)] = inst_19958);

return statearr_20014;
})();
var statearr_20015_20041 = state_19993__$1;
(statearr_20015_20041[(2)] = null);

(statearr_20015_20041[(1)] = (2));


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
});})(c__10692__auto___20027,out))
;
return ((function (switch__10627__auto__,c__10692__auto___20027,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_20019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20019[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_20019[(1)] = (1));

return statearr_20019;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_19993){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_19993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e20020){if((e20020 instanceof Object)){
var ex__10631__auto__ = e20020;
var statearr_20021_20042 = state_19993;
(statearr_20021_20042[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20043 = state_19993;
state_19993 = G__20043;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_19993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_19993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___20027,out))
})();
var state__10694__auto__ = (function (){var statearr_20022 = f__10693__auto__.call(null);
(statearr_20022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___20027);

return statearr_20022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___20027,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20044 = [];
var len__6152__auto___20118 = arguments.length;
var i__6153__auto___20119 = (0);
while(true){
if((i__6153__auto___20119 < len__6152__auto___20118)){
args20044.push((arguments[i__6153__auto___20119]));

var G__20120 = (i__6153__auto___20119 + (1));
i__6153__auto___20119 = G__20120;
continue;
} else {
}
break;
}

var G__20046 = args20044.length;
switch (G__20046) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20044.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10692__auto___20122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10692__auto___20122,out){
return (function (){
var f__10693__auto__ = (function (){var switch__10627__auto__ = ((function (c__10692__auto___20122,out){
return (function (state_20088){
var state_val_20089 = (state_20088[(1)]);
if((state_val_20089 === (7))){
var inst_20084 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20090_20123 = state_20088__$1;
(statearr_20090_20123[(2)] = inst_20084);

(statearr_20090_20123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (1))){
var inst_20047 = [];
var inst_20048 = inst_20047;
var inst_20049 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20088__$1 = (function (){var statearr_20091 = state_20088;
(statearr_20091[(7)] = inst_20049);

(statearr_20091[(8)] = inst_20048);

return statearr_20091;
})();
var statearr_20092_20124 = state_20088__$1;
(statearr_20092_20124[(2)] = null);

(statearr_20092_20124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (4))){
var inst_20052 = (state_20088[(9)]);
var inst_20052__$1 = (state_20088[(2)]);
var inst_20053 = (inst_20052__$1 == null);
var inst_20054 = cljs.core.not.call(null,inst_20053);
var state_20088__$1 = (function (){var statearr_20093 = state_20088;
(statearr_20093[(9)] = inst_20052__$1);

return statearr_20093;
})();
if(inst_20054){
var statearr_20094_20125 = state_20088__$1;
(statearr_20094_20125[(1)] = (5));

} else {
var statearr_20095_20126 = state_20088__$1;
(statearr_20095_20126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (15))){
var inst_20078 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20096_20127 = state_20088__$1;
(statearr_20096_20127[(2)] = inst_20078);

(statearr_20096_20127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (13))){
var state_20088__$1 = state_20088;
var statearr_20097_20128 = state_20088__$1;
(statearr_20097_20128[(2)] = null);

(statearr_20097_20128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (6))){
var inst_20048 = (state_20088[(8)]);
var inst_20073 = inst_20048.length;
var inst_20074 = (inst_20073 > (0));
var state_20088__$1 = state_20088;
if(cljs.core.truth_(inst_20074)){
var statearr_20098_20129 = state_20088__$1;
(statearr_20098_20129[(1)] = (12));

} else {
var statearr_20099_20130 = state_20088__$1;
(statearr_20099_20130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (3))){
var inst_20086 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20088__$1,inst_20086);
} else {
if((state_val_20089 === (12))){
var inst_20048 = (state_20088[(8)]);
var inst_20076 = cljs.core.vec.call(null,inst_20048);
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20088__$1,(15),out,inst_20076);
} else {
if((state_val_20089 === (2))){
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20088__$1,(4),ch);
} else {
if((state_val_20089 === (11))){
var inst_20056 = (state_20088[(10)]);
var inst_20052 = (state_20088[(9)]);
var inst_20066 = (state_20088[(2)]);
var inst_20067 = [];
var inst_20068 = inst_20067.push(inst_20052);
var inst_20048 = inst_20067;
var inst_20049 = inst_20056;
var state_20088__$1 = (function (){var statearr_20100 = state_20088;
(statearr_20100[(7)] = inst_20049);

(statearr_20100[(11)] = inst_20066);

(statearr_20100[(8)] = inst_20048);

(statearr_20100[(12)] = inst_20068);

return statearr_20100;
})();
var statearr_20101_20131 = state_20088__$1;
(statearr_20101_20131[(2)] = null);

(statearr_20101_20131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (9))){
var inst_20048 = (state_20088[(8)]);
var inst_20064 = cljs.core.vec.call(null,inst_20048);
var state_20088__$1 = state_20088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20088__$1,(11),out,inst_20064);
} else {
if((state_val_20089 === (5))){
var inst_20049 = (state_20088[(7)]);
var inst_20056 = (state_20088[(10)]);
var inst_20052 = (state_20088[(9)]);
var inst_20056__$1 = f.call(null,inst_20052);
var inst_20057 = cljs.core._EQ_.call(null,inst_20056__$1,inst_20049);
var inst_20058 = cljs.core.keyword_identical_QMARK_.call(null,inst_20049,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20059 = (inst_20057) || (inst_20058);
var state_20088__$1 = (function (){var statearr_20102 = state_20088;
(statearr_20102[(10)] = inst_20056__$1);

return statearr_20102;
})();
if(cljs.core.truth_(inst_20059)){
var statearr_20103_20132 = state_20088__$1;
(statearr_20103_20132[(1)] = (8));

} else {
var statearr_20104_20133 = state_20088__$1;
(statearr_20104_20133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (14))){
var inst_20081 = (state_20088[(2)]);
var inst_20082 = cljs.core.async.close_BANG_.call(null,out);
var state_20088__$1 = (function (){var statearr_20106 = state_20088;
(statearr_20106[(13)] = inst_20081);

return statearr_20106;
})();
var statearr_20107_20134 = state_20088__$1;
(statearr_20107_20134[(2)] = inst_20082);

(statearr_20107_20134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (10))){
var inst_20071 = (state_20088[(2)]);
var state_20088__$1 = state_20088;
var statearr_20108_20135 = state_20088__$1;
(statearr_20108_20135[(2)] = inst_20071);

(statearr_20108_20135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20089 === (8))){
var inst_20048 = (state_20088[(8)]);
var inst_20056 = (state_20088[(10)]);
var inst_20052 = (state_20088[(9)]);
var inst_20061 = inst_20048.push(inst_20052);
var tmp20105 = inst_20048;
var inst_20048__$1 = tmp20105;
var inst_20049 = inst_20056;
var state_20088__$1 = (function (){var statearr_20109 = state_20088;
(statearr_20109[(7)] = inst_20049);

(statearr_20109[(8)] = inst_20048__$1);

(statearr_20109[(14)] = inst_20061);

return statearr_20109;
})();
var statearr_20110_20136 = state_20088__$1;
(statearr_20110_20136[(2)] = null);

(statearr_20110_20136[(1)] = (2));


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
});})(c__10692__auto___20122,out))
;
return ((function (switch__10627__auto__,c__10692__auto___20122,out){
return (function() {
var cljs$core$async$state_machine__10628__auto__ = null;
var cljs$core$async$state_machine__10628__auto____0 = (function (){
var statearr_20114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20114[(0)] = cljs$core$async$state_machine__10628__auto__);

(statearr_20114[(1)] = (1));

return statearr_20114;
});
var cljs$core$async$state_machine__10628__auto____1 = (function (state_20088){
while(true){
var ret_value__10629__auto__ = (function (){try{while(true){
var result__10630__auto__ = switch__10627__auto__.call(null,state_20088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10630__auto__;
}
break;
}
}catch (e20115){if((e20115 instanceof Object)){
var ex__10631__auto__ = e20115;
var statearr_20116_20137 = state_20088;
(statearr_20116_20137[(5)] = ex__10631__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20138 = state_20088;
state_20088 = G__20138;
continue;
} else {
return ret_value__10629__auto__;
}
break;
}
});
cljs$core$async$state_machine__10628__auto__ = function(state_20088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10628__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10628__auto____1.call(this,state_20088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10628__auto____0;
cljs$core$async$state_machine__10628__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10628__auto____1;
return cljs$core$async$state_machine__10628__auto__;
})()
;})(switch__10627__auto__,c__10692__auto___20122,out))
})();
var state__10694__auto__ = (function (){var statearr_20117 = f__10693__auto__.call(null);
(statearr_20117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10692__auto___20122);

return statearr_20117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10694__auto__);
});})(c__10692__auto___20122,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map