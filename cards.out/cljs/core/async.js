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
if(typeof cljs.core.async.t_cljs$core$async17306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17306 = (function (fn_handler,f,meta17307){
this.fn_handler = fn_handler;
this.f = f;
this.meta17307 = meta17307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17308,meta17307__$1){
var self__ = this;
var _17308__$1 = this;
return (new cljs.core.async.t_cljs$core$async17306(self__.fn_handler,self__.f,meta17307__$1));
});

cljs.core.async.t_cljs$core$async17306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17308){
var self__ = this;
var _17308__$1 = this;
return self__.meta17307;
});

cljs.core.async.t_cljs$core$async17306.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17307","meta17307",82925118,null)], null);
});

cljs.core.async.t_cljs$core$async17306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17306";

cljs.core.async.t_cljs$core$async17306.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17306");
});

cljs.core.async.__GT_t_cljs$core$async17306 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17306(fn_handler__$1,f__$1,meta17307){
return (new cljs.core.async.t_cljs$core$async17306(fn_handler__$1,f__$1,meta17307));
});

}

return (new cljs.core.async.t_cljs$core$async17306(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17311 = [];
var len__6152__auto___17314 = arguments.length;
var i__6153__auto___17315 = (0);
while(true){
if((i__6153__auto___17315 < len__6152__auto___17314)){
args17311.push((arguments[i__6153__auto___17315]));

var G__17316 = (i__6153__auto___17315 + (1));
i__6153__auto___17315 = G__17316;
continue;
} else {
}
break;
}

var G__17313 = args17311.length;
switch (G__17313) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17311.length)].join('')));

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
var args17318 = [];
var len__6152__auto___17321 = arguments.length;
var i__6153__auto___17322 = (0);
while(true){
if((i__6153__auto___17322 < len__6152__auto___17321)){
args17318.push((arguments[i__6153__auto___17322]));

var G__17323 = (i__6153__auto___17322 + (1));
i__6153__auto___17322 = G__17323;
continue;
} else {
}
break;
}

var G__17320 = args17318.length;
switch (G__17320) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17318.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17325 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17325);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17325,ret){
return (function (){
return fn1.call(null,val_17325);
});})(val_17325,ret))
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
var args17326 = [];
var len__6152__auto___17329 = arguments.length;
var i__6153__auto___17330 = (0);
while(true){
if((i__6153__auto___17330 < len__6152__auto___17329)){
args17326.push((arguments[i__6153__auto___17330]));

var G__17331 = (i__6153__auto___17330 + (1));
i__6153__auto___17330 = G__17331;
continue;
} else {
}
break;
}

var G__17328 = args17326.length;
switch (G__17328) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17326.length)].join('')));

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
var n__5997__auto___17333 = n;
var x_17334 = (0);
while(true){
if((x_17334 < n__5997__auto___17333)){
(a[x_17334] = (0));

var G__17335 = (x_17334 + (1));
x_17334 = G__17335;
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

var G__17336 = (i + (1));
i = G__17336;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17340 = (function (alt_flag,flag,meta17341){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17341 = meta17341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17342,meta17341__$1){
var self__ = this;
var _17342__$1 = this;
return (new cljs.core.async.t_cljs$core$async17340(self__.alt_flag,self__.flag,meta17341__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17342){
var self__ = this;
var _17342__$1 = this;
return self__.meta17341;
});})(flag))
;

cljs.core.async.t_cljs$core$async17340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17340.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17341","meta17341",2127191380,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17340";

cljs.core.async.t_cljs$core$async17340.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17340");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17340 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17340(alt_flag__$1,flag__$1,meta17341){
return (new cljs.core.async.t_cljs$core$async17340(alt_flag__$1,flag__$1,meta17341));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17340(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17346 = (function (alt_handler,flag,cb,meta17347){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17347 = meta17347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17348,meta17347__$1){
var self__ = this;
var _17348__$1 = this;
return (new cljs.core.async.t_cljs$core$async17346(self__.alt_handler,self__.flag,self__.cb,meta17347__$1));
});

cljs.core.async.t_cljs$core$async17346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17348){
var self__ = this;
var _17348__$1 = this;
return self__.meta17347;
});

cljs.core.async.t_cljs$core$async17346.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17347","meta17347",-1714160821,null)], null);
});

cljs.core.async.t_cljs$core$async17346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17346";

cljs.core.async.t_cljs$core$async17346.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17346");
});

cljs.core.async.__GT_t_cljs$core$async17346 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17346(alt_handler__$1,flag__$1,cb__$1,meta17347){
return (new cljs.core.async.t_cljs$core$async17346(alt_handler__$1,flag__$1,cb__$1,meta17347));
});

}

return (new cljs.core.async.t_cljs$core$async17346(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17349_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17349_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17350_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17350_SHARP_,port], null));
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
var G__17351 = (i + (1));
i = G__17351;
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
var len__6152__auto___17357 = arguments.length;
var i__6153__auto___17358 = (0);
while(true){
if((i__6153__auto___17358 < len__6152__auto___17357)){
args__6159__auto__.push((arguments[i__6153__auto___17358]));

var G__17359 = (i__6153__auto___17358 + (1));
i__6153__auto___17358 = G__17359;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17354){
var map__17355 = p__17354;
var map__17355__$1 = ((((!((map__17355 == null)))?((((map__17355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17355):map__17355);
var opts = map__17355__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17352){
var G__17353 = cljs.core.first.call(null,seq17352);
var seq17352__$1 = cljs.core.next.call(null,seq17352);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17353,seq17352__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17360 = [];
var len__6152__auto___17410 = arguments.length;
var i__6153__auto___17411 = (0);
while(true){
if((i__6153__auto___17411 < len__6152__auto___17410)){
args17360.push((arguments[i__6153__auto___17411]));

var G__17412 = (i__6153__auto___17411 + (1));
i__6153__auto___17411 = G__17412;
continue;
} else {
}
break;
}

var G__17362 = args17360.length;
switch (G__17362) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17360.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9944__auto___17414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17414){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17414){
return (function (state_17386){
var state_val_17387 = (state_17386[(1)]);
if((state_val_17387 === (7))){
var inst_17382 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
var statearr_17388_17415 = state_17386__$1;
(statearr_17388_17415[(2)] = inst_17382);

(statearr_17388_17415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (1))){
var state_17386__$1 = state_17386;
var statearr_17389_17416 = state_17386__$1;
(statearr_17389_17416[(2)] = null);

(statearr_17389_17416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (4))){
var inst_17365 = (state_17386[(7)]);
var inst_17365__$1 = (state_17386[(2)]);
var inst_17366 = (inst_17365__$1 == null);
var state_17386__$1 = (function (){var statearr_17390 = state_17386;
(statearr_17390[(7)] = inst_17365__$1);

return statearr_17390;
})();
if(cljs.core.truth_(inst_17366)){
var statearr_17391_17417 = state_17386__$1;
(statearr_17391_17417[(1)] = (5));

} else {
var statearr_17392_17418 = state_17386__$1;
(statearr_17392_17418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (13))){
var state_17386__$1 = state_17386;
var statearr_17393_17419 = state_17386__$1;
(statearr_17393_17419[(2)] = null);

(statearr_17393_17419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (6))){
var inst_17365 = (state_17386[(7)]);
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17386__$1,(11),to,inst_17365);
} else {
if((state_val_17387 === (3))){
var inst_17384 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17386__$1,inst_17384);
} else {
if((state_val_17387 === (12))){
var state_17386__$1 = state_17386;
var statearr_17394_17420 = state_17386__$1;
(statearr_17394_17420[(2)] = null);

(statearr_17394_17420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (2))){
var state_17386__$1 = state_17386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17386__$1,(4),from);
} else {
if((state_val_17387 === (11))){
var inst_17375 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
if(cljs.core.truth_(inst_17375)){
var statearr_17395_17421 = state_17386__$1;
(statearr_17395_17421[(1)] = (12));

} else {
var statearr_17396_17422 = state_17386__$1;
(statearr_17396_17422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (9))){
var state_17386__$1 = state_17386;
var statearr_17397_17423 = state_17386__$1;
(statearr_17397_17423[(2)] = null);

(statearr_17397_17423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (5))){
var state_17386__$1 = state_17386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17398_17424 = state_17386__$1;
(statearr_17398_17424[(1)] = (8));

} else {
var statearr_17399_17425 = state_17386__$1;
(statearr_17399_17425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (14))){
var inst_17380 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
var statearr_17400_17426 = state_17386__$1;
(statearr_17400_17426[(2)] = inst_17380);

(statearr_17400_17426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (10))){
var inst_17372 = (state_17386[(2)]);
var state_17386__$1 = state_17386;
var statearr_17401_17427 = state_17386__$1;
(statearr_17401_17427[(2)] = inst_17372);

(statearr_17401_17427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17387 === (8))){
var inst_17369 = cljs.core.async.close_BANG_.call(null,to);
var state_17386__$1 = state_17386;
var statearr_17402_17428 = state_17386__$1;
(statearr_17402_17428[(2)] = inst_17369);

(statearr_17402_17428[(1)] = (10));


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
});})(c__9944__auto___17414))
;
return ((function (switch__9879__auto__,c__9944__auto___17414){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_17406 = [null,null,null,null,null,null,null,null];
(statearr_17406[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_17406[(1)] = (1));

return statearr_17406;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_17386){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17407){if((e17407 instanceof Object)){
var ex__9883__auto__ = e17407;
var statearr_17408_17429 = state_17386;
(statearr_17408_17429[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17430 = state_17386;
state_17386 = G__17430;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_17386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_17386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17414))
})();
var state__9946__auto__ = (function (){var statearr_17409 = f__9945__auto__.call(null);
(statearr_17409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17414);

return statearr_17409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17414))
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
return (function (p__17614){
var vec__17615 = p__17614;
var v = cljs.core.nth.call(null,vec__17615,(0),null);
var p = cljs.core.nth.call(null,vec__17615,(1),null);
var job = vec__17615;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9944__auto___17797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results){
return (function (state_17620){
var state_val_17621 = (state_17620[(1)]);
if((state_val_17621 === (1))){
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17620__$1,(2),res,v);
} else {
if((state_val_17621 === (2))){
var inst_17617 = (state_17620[(2)]);
var inst_17618 = cljs.core.async.close_BANG_.call(null,res);
var state_17620__$1 = (function (){var statearr_17622 = state_17620;
(statearr_17622[(7)] = inst_17617);

return statearr_17622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17620__$1,inst_17618);
} else {
return null;
}
}
});})(c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results))
;
return ((function (switch__9879__auto__,c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17626 = [null,null,null,null,null,null,null,null];
(statearr_17626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17626[(1)] = (1));

return statearr_17626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17620){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17627){if((e17627 instanceof Object)){
var ex__9883__auto__ = e17627;
var statearr_17628_17798 = state_17620;
(statearr_17628_17798[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17799 = state_17620;
state_17620 = G__17799;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results))
})();
var state__9946__auto__ = (function (){var statearr_17629 = f__9945__auto__.call(null);
(statearr_17629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17797);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17797,res,vec__17615,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17630){
var vec__17631 = p__17630;
var v = cljs.core.nth.call(null,vec__17631,(0),null);
var p = cljs.core.nth.call(null,vec__17631,(1),null);
var job = vec__17631;
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
var n__5997__auto___17800 = n;
var __17801 = (0);
while(true){
if((__17801 < n__5997__auto___17800)){
var G__17632_17802 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17632_17802) {
case "compute":
var c__9944__auto___17804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17801,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (__17801,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function (state_17645){
var state_val_17646 = (state_17645[(1)]);
if((state_val_17646 === (1))){
var state_17645__$1 = state_17645;
var statearr_17647_17805 = state_17645__$1;
(statearr_17647_17805[(2)] = null);

(statearr_17647_17805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17646 === (2))){
var state_17645__$1 = state_17645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17645__$1,(4),jobs);
} else {
if((state_val_17646 === (3))){
var inst_17643 = (state_17645[(2)]);
var state_17645__$1 = state_17645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17645__$1,inst_17643);
} else {
if((state_val_17646 === (4))){
var inst_17635 = (state_17645[(2)]);
var inst_17636 = process.call(null,inst_17635);
var state_17645__$1 = state_17645;
if(cljs.core.truth_(inst_17636)){
var statearr_17648_17806 = state_17645__$1;
(statearr_17648_17806[(1)] = (5));

} else {
var statearr_17649_17807 = state_17645__$1;
(statearr_17649_17807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17646 === (5))){
var state_17645__$1 = state_17645;
var statearr_17650_17808 = state_17645__$1;
(statearr_17650_17808[(2)] = null);

(statearr_17650_17808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17646 === (6))){
var state_17645__$1 = state_17645;
var statearr_17651_17809 = state_17645__$1;
(statearr_17651_17809[(2)] = null);

(statearr_17651_17809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17646 === (7))){
var inst_17641 = (state_17645[(2)]);
var state_17645__$1 = state_17645;
var statearr_17652_17810 = state_17645__$1;
(statearr_17652_17810[(2)] = inst_17641);

(statearr_17652_17810[(1)] = (3));


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
});})(__17801,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
;
return ((function (__17801,switch__9879__auto__,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17656 = [null,null,null,null,null,null,null];
(statearr_17656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17656[(1)] = (1));

return statearr_17656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17645){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17657){if((e17657 instanceof Object)){
var ex__9883__auto__ = e17657;
var statearr_17658_17811 = state_17645;
(statearr_17658_17811[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17812 = state_17645;
state_17645 = G__17812;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(__17801,switch__9879__auto__,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17659 = f__9945__auto__.call(null);
(statearr_17659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17804);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(__17801,c__9944__auto___17804,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
);


break;
case "async":
var c__9944__auto___17813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17801,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (__17801,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function (state_17672){
var state_val_17673 = (state_17672[(1)]);
if((state_val_17673 === (1))){
var state_17672__$1 = state_17672;
var statearr_17674_17814 = state_17672__$1;
(statearr_17674_17814[(2)] = null);

(statearr_17674_17814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (2))){
var state_17672__$1 = state_17672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17672__$1,(4),jobs);
} else {
if((state_val_17673 === (3))){
var inst_17670 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17672__$1,inst_17670);
} else {
if((state_val_17673 === (4))){
var inst_17662 = (state_17672[(2)]);
var inst_17663 = async.call(null,inst_17662);
var state_17672__$1 = state_17672;
if(cljs.core.truth_(inst_17663)){
var statearr_17675_17815 = state_17672__$1;
(statearr_17675_17815[(1)] = (5));

} else {
var statearr_17676_17816 = state_17672__$1;
(statearr_17676_17816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (5))){
var state_17672__$1 = state_17672;
var statearr_17677_17817 = state_17672__$1;
(statearr_17677_17817[(2)] = null);

(statearr_17677_17817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (6))){
var state_17672__$1 = state_17672;
var statearr_17678_17818 = state_17672__$1;
(statearr_17678_17818[(2)] = null);

(statearr_17678_17818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (7))){
var inst_17668 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
var statearr_17679_17819 = state_17672__$1;
(statearr_17679_17819[(2)] = inst_17668);

(statearr_17679_17819[(1)] = (3));


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
});})(__17801,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
;
return ((function (__17801,switch__9879__auto__,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17683 = [null,null,null,null,null,null,null];
(statearr_17683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17683[(1)] = (1));

return statearr_17683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17672){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17684){if((e17684 instanceof Object)){
var ex__9883__auto__ = e17684;
var statearr_17685_17820 = state_17672;
(statearr_17685_17820[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17821 = state_17672;
state_17672 = G__17821;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(__17801,switch__9879__auto__,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17686 = f__9945__auto__.call(null);
(statearr_17686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17813);

return statearr_17686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(__17801,c__9944__auto___17813,G__17632_17802,n__5997__auto___17800,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17822 = (__17801 + (1));
__17801 = G__17822;
continue;
} else {
}
break;
}

var c__9944__auto___17823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17823,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17823,jobs,results,process,async){
return (function (state_17708){
var state_val_17709 = (state_17708[(1)]);
if((state_val_17709 === (1))){
var state_17708__$1 = state_17708;
var statearr_17710_17824 = state_17708__$1;
(statearr_17710_17824[(2)] = null);

(statearr_17710_17824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (2))){
var state_17708__$1 = state_17708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17708__$1,(4),from);
} else {
if((state_val_17709 === (3))){
var inst_17706 = (state_17708[(2)]);
var state_17708__$1 = state_17708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17708__$1,inst_17706);
} else {
if((state_val_17709 === (4))){
var inst_17689 = (state_17708[(7)]);
var inst_17689__$1 = (state_17708[(2)]);
var inst_17690 = (inst_17689__$1 == null);
var state_17708__$1 = (function (){var statearr_17711 = state_17708;
(statearr_17711[(7)] = inst_17689__$1);

return statearr_17711;
})();
if(cljs.core.truth_(inst_17690)){
var statearr_17712_17825 = state_17708__$1;
(statearr_17712_17825[(1)] = (5));

} else {
var statearr_17713_17826 = state_17708__$1;
(statearr_17713_17826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (5))){
var inst_17692 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17708__$1 = state_17708;
var statearr_17714_17827 = state_17708__$1;
(statearr_17714_17827[(2)] = inst_17692);

(statearr_17714_17827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (6))){
var inst_17689 = (state_17708[(7)]);
var inst_17694 = (state_17708[(8)]);
var inst_17694__$1 = cljs.core.async.chan.call(null,(1));
var inst_17695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17696 = [inst_17689,inst_17694__$1];
var inst_17697 = (new cljs.core.PersistentVector(null,2,(5),inst_17695,inst_17696,null));
var state_17708__$1 = (function (){var statearr_17715 = state_17708;
(statearr_17715[(8)] = inst_17694__$1);

return statearr_17715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17708__$1,(8),jobs,inst_17697);
} else {
if((state_val_17709 === (7))){
var inst_17704 = (state_17708[(2)]);
var state_17708__$1 = state_17708;
var statearr_17716_17828 = state_17708__$1;
(statearr_17716_17828[(2)] = inst_17704);

(statearr_17716_17828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17709 === (8))){
var inst_17694 = (state_17708[(8)]);
var inst_17699 = (state_17708[(2)]);
var state_17708__$1 = (function (){var statearr_17717 = state_17708;
(statearr_17717[(9)] = inst_17699);

return statearr_17717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17708__$1,(9),results,inst_17694);
} else {
if((state_val_17709 === (9))){
var inst_17701 = (state_17708[(2)]);
var state_17708__$1 = (function (){var statearr_17718 = state_17708;
(statearr_17718[(10)] = inst_17701);

return statearr_17718;
})();
var statearr_17719_17829 = state_17708__$1;
(statearr_17719_17829[(2)] = null);

(statearr_17719_17829[(1)] = (2));


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
});})(c__9944__auto___17823,jobs,results,process,async))
;
return ((function (switch__9879__auto__,c__9944__auto___17823,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17723[(1)] = (1));

return statearr_17723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17708){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17724){if((e17724 instanceof Object)){
var ex__9883__auto__ = e17724;
var statearr_17725_17830 = state_17708;
(statearr_17725_17830[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17831 = state_17708;
state_17708 = G__17831;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17708){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17823,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17726 = f__9945__auto__.call(null);
(statearr_17726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17823);

return statearr_17726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17823,jobs,results,process,async))
);


var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__,jobs,results,process,async){
return (function (state_17764){
var state_val_17765 = (state_17764[(1)]);
if((state_val_17765 === (7))){
var inst_17760 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17766_17832 = state_17764__$1;
(statearr_17766_17832[(2)] = inst_17760);

(statearr_17766_17832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (20))){
var state_17764__$1 = state_17764;
var statearr_17767_17833 = state_17764__$1;
(statearr_17767_17833[(2)] = null);

(statearr_17767_17833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (1))){
var state_17764__$1 = state_17764;
var statearr_17768_17834 = state_17764__$1;
(statearr_17768_17834[(2)] = null);

(statearr_17768_17834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (4))){
var inst_17729 = (state_17764[(7)]);
var inst_17729__$1 = (state_17764[(2)]);
var inst_17730 = (inst_17729__$1 == null);
var state_17764__$1 = (function (){var statearr_17769 = state_17764;
(statearr_17769[(7)] = inst_17729__$1);

return statearr_17769;
})();
if(cljs.core.truth_(inst_17730)){
var statearr_17770_17835 = state_17764__$1;
(statearr_17770_17835[(1)] = (5));

} else {
var statearr_17771_17836 = state_17764__$1;
(statearr_17771_17836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (15))){
var inst_17742 = (state_17764[(8)]);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17764__$1,(18),to,inst_17742);
} else {
if((state_val_17765 === (21))){
var inst_17755 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17772_17837 = state_17764__$1;
(statearr_17772_17837[(2)] = inst_17755);

(statearr_17772_17837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (13))){
var inst_17757 = (state_17764[(2)]);
var state_17764__$1 = (function (){var statearr_17773 = state_17764;
(statearr_17773[(9)] = inst_17757);

return statearr_17773;
})();
var statearr_17774_17838 = state_17764__$1;
(statearr_17774_17838[(2)] = null);

(statearr_17774_17838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (6))){
var inst_17729 = (state_17764[(7)]);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17764__$1,(11),inst_17729);
} else {
if((state_val_17765 === (17))){
var inst_17750 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
if(cljs.core.truth_(inst_17750)){
var statearr_17775_17839 = state_17764__$1;
(statearr_17775_17839[(1)] = (19));

} else {
var statearr_17776_17840 = state_17764__$1;
(statearr_17776_17840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (3))){
var inst_17762 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17764__$1,inst_17762);
} else {
if((state_val_17765 === (12))){
var inst_17739 = (state_17764[(10)]);
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17764__$1,(14),inst_17739);
} else {
if((state_val_17765 === (2))){
var state_17764__$1 = state_17764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17764__$1,(4),results);
} else {
if((state_val_17765 === (19))){
var state_17764__$1 = state_17764;
var statearr_17777_17841 = state_17764__$1;
(statearr_17777_17841[(2)] = null);

(statearr_17777_17841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (11))){
var inst_17739 = (state_17764[(2)]);
var state_17764__$1 = (function (){var statearr_17778 = state_17764;
(statearr_17778[(10)] = inst_17739);

return statearr_17778;
})();
var statearr_17779_17842 = state_17764__$1;
(statearr_17779_17842[(2)] = null);

(statearr_17779_17842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (9))){
var state_17764__$1 = state_17764;
var statearr_17780_17843 = state_17764__$1;
(statearr_17780_17843[(2)] = null);

(statearr_17780_17843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (5))){
var state_17764__$1 = state_17764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17781_17844 = state_17764__$1;
(statearr_17781_17844[(1)] = (8));

} else {
var statearr_17782_17845 = state_17764__$1;
(statearr_17782_17845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (14))){
var inst_17744 = (state_17764[(11)]);
var inst_17742 = (state_17764[(8)]);
var inst_17742__$1 = (state_17764[(2)]);
var inst_17743 = (inst_17742__$1 == null);
var inst_17744__$1 = cljs.core.not.call(null,inst_17743);
var state_17764__$1 = (function (){var statearr_17783 = state_17764;
(statearr_17783[(11)] = inst_17744__$1);

(statearr_17783[(8)] = inst_17742__$1);

return statearr_17783;
})();
if(inst_17744__$1){
var statearr_17784_17846 = state_17764__$1;
(statearr_17784_17846[(1)] = (15));

} else {
var statearr_17785_17847 = state_17764__$1;
(statearr_17785_17847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (16))){
var inst_17744 = (state_17764[(11)]);
var state_17764__$1 = state_17764;
var statearr_17786_17848 = state_17764__$1;
(statearr_17786_17848[(2)] = inst_17744);

(statearr_17786_17848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (10))){
var inst_17736 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17787_17849 = state_17764__$1;
(statearr_17787_17849[(2)] = inst_17736);

(statearr_17787_17849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (18))){
var inst_17747 = (state_17764[(2)]);
var state_17764__$1 = state_17764;
var statearr_17788_17850 = state_17764__$1;
(statearr_17788_17850[(2)] = inst_17747);

(statearr_17788_17850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17765 === (8))){
var inst_17733 = cljs.core.async.close_BANG_.call(null,to);
var state_17764__$1 = state_17764;
var statearr_17789_17851 = state_17764__$1;
(statearr_17789_17851[(2)] = inst_17733);

(statearr_17789_17851[(1)] = (10));


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
});})(c__9944__auto__,jobs,results,process,async))
;
return ((function (switch__9879__auto__,c__9944__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17793[(1)] = (1));

return statearr_17793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17764){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17794){if((e17794 instanceof Object)){
var ex__9883__auto__ = e17794;
var statearr_17795_17852 = state_17764;
(statearr_17795_17852[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17853 = state_17764;
state_17764 = G__17853;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17796 = f__9945__auto__.call(null);
(statearr_17796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_17796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__,jobs,results,process,async))
);

return c__9944__auto__;
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
var args17854 = [];
var len__6152__auto___17857 = arguments.length;
var i__6153__auto___17858 = (0);
while(true){
if((i__6153__auto___17858 < len__6152__auto___17857)){
args17854.push((arguments[i__6153__auto___17858]));

var G__17859 = (i__6153__auto___17858 + (1));
i__6153__auto___17858 = G__17859;
continue;
} else {
}
break;
}

var G__17856 = args17854.length;
switch (G__17856) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17854.length)].join('')));

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
var args17861 = [];
var len__6152__auto___17864 = arguments.length;
var i__6153__auto___17865 = (0);
while(true){
if((i__6153__auto___17865 < len__6152__auto___17864)){
args17861.push((arguments[i__6153__auto___17865]));

var G__17866 = (i__6153__auto___17865 + (1));
i__6153__auto___17865 = G__17866;
continue;
} else {
}
break;
}

var G__17863 = args17861.length;
switch (G__17863) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17861.length)].join('')));

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
var args17868 = [];
var len__6152__auto___17921 = arguments.length;
var i__6153__auto___17922 = (0);
while(true){
if((i__6153__auto___17922 < len__6152__auto___17921)){
args17868.push((arguments[i__6153__auto___17922]));

var G__17923 = (i__6153__auto___17922 + (1));
i__6153__auto___17922 = G__17923;
continue;
} else {
}
break;
}

var G__17870 = args17868.length;
switch (G__17870) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17868.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9944__auto___17925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17925,tc,fc){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17925,tc,fc){
return (function (state_17896){
var state_val_17897 = (state_17896[(1)]);
if((state_val_17897 === (7))){
var inst_17892 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
var statearr_17898_17926 = state_17896__$1;
(statearr_17898_17926[(2)] = inst_17892);

(statearr_17898_17926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (1))){
var state_17896__$1 = state_17896;
var statearr_17899_17927 = state_17896__$1;
(statearr_17899_17927[(2)] = null);

(statearr_17899_17927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (4))){
var inst_17873 = (state_17896[(7)]);
var inst_17873__$1 = (state_17896[(2)]);
var inst_17874 = (inst_17873__$1 == null);
var state_17896__$1 = (function (){var statearr_17900 = state_17896;
(statearr_17900[(7)] = inst_17873__$1);

return statearr_17900;
})();
if(cljs.core.truth_(inst_17874)){
var statearr_17901_17928 = state_17896__$1;
(statearr_17901_17928[(1)] = (5));

} else {
var statearr_17902_17929 = state_17896__$1;
(statearr_17902_17929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (13))){
var state_17896__$1 = state_17896;
var statearr_17903_17930 = state_17896__$1;
(statearr_17903_17930[(2)] = null);

(statearr_17903_17930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (6))){
var inst_17873 = (state_17896[(7)]);
var inst_17879 = p.call(null,inst_17873);
var state_17896__$1 = state_17896;
if(cljs.core.truth_(inst_17879)){
var statearr_17904_17931 = state_17896__$1;
(statearr_17904_17931[(1)] = (9));

} else {
var statearr_17905_17932 = state_17896__$1;
(statearr_17905_17932[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (3))){
var inst_17894 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17896__$1,inst_17894);
} else {
if((state_val_17897 === (12))){
var state_17896__$1 = state_17896;
var statearr_17906_17933 = state_17896__$1;
(statearr_17906_17933[(2)] = null);

(statearr_17906_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (2))){
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17896__$1,(4),ch);
} else {
if((state_val_17897 === (11))){
var inst_17873 = (state_17896[(7)]);
var inst_17883 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17896__$1,(8),inst_17883,inst_17873);
} else {
if((state_val_17897 === (9))){
var state_17896__$1 = state_17896;
var statearr_17907_17934 = state_17896__$1;
(statearr_17907_17934[(2)] = tc);

(statearr_17907_17934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (5))){
var inst_17876 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17877 = cljs.core.async.close_BANG_.call(null,fc);
var state_17896__$1 = (function (){var statearr_17908 = state_17896;
(statearr_17908[(8)] = inst_17876);

return statearr_17908;
})();
var statearr_17909_17935 = state_17896__$1;
(statearr_17909_17935[(2)] = inst_17877);

(statearr_17909_17935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (14))){
var inst_17890 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
var statearr_17910_17936 = state_17896__$1;
(statearr_17910_17936[(2)] = inst_17890);

(statearr_17910_17936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (10))){
var state_17896__$1 = state_17896;
var statearr_17911_17937 = state_17896__$1;
(statearr_17911_17937[(2)] = fc);

(statearr_17911_17937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17897 === (8))){
var inst_17885 = (state_17896[(2)]);
var state_17896__$1 = state_17896;
if(cljs.core.truth_(inst_17885)){
var statearr_17912_17938 = state_17896__$1;
(statearr_17912_17938[(1)] = (12));

} else {
var statearr_17913_17939 = state_17896__$1;
(statearr_17913_17939[(1)] = (13));

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
});})(c__9944__auto___17925,tc,fc))
;
return ((function (switch__9879__auto__,c__9944__auto___17925,tc,fc){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_17917 = [null,null,null,null,null,null,null,null,null];
(statearr_17917[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_17917[(1)] = (1));

return statearr_17917;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_17896){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17918){if((e17918 instanceof Object)){
var ex__9883__auto__ = e17918;
var statearr_17919_17940 = state_17896;
(statearr_17919_17940[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17941 = state_17896;
state_17896 = G__17941;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_17896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_17896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17925,tc,fc))
})();
var state__9946__auto__ = (function (){var statearr_17920 = f__9945__auto__.call(null);
(statearr_17920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17925);

return statearr_17920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17925,tc,fc))
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
var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__){
return (function (state_17988){
var state_val_17989 = (state_17988[(1)]);
if((state_val_17989 === (1))){
var inst_17974 = init;
var state_17988__$1 = (function (){var statearr_17990 = state_17988;
(statearr_17990[(7)] = inst_17974);

return statearr_17990;
})();
var statearr_17991_18006 = state_17988__$1;
(statearr_17991_18006[(2)] = null);

(statearr_17991_18006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (2))){
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17988__$1,(4),ch);
} else {
if((state_val_17989 === (3))){
var inst_17986 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17988__$1,inst_17986);
} else {
if((state_val_17989 === (4))){
var inst_17977 = (state_17988[(8)]);
var inst_17977__$1 = (state_17988[(2)]);
var inst_17978 = (inst_17977__$1 == null);
var state_17988__$1 = (function (){var statearr_17992 = state_17988;
(statearr_17992[(8)] = inst_17977__$1);

return statearr_17992;
})();
if(cljs.core.truth_(inst_17978)){
var statearr_17993_18007 = state_17988__$1;
(statearr_17993_18007[(1)] = (5));

} else {
var statearr_17994_18008 = state_17988__$1;
(statearr_17994_18008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (5))){
var inst_17974 = (state_17988[(7)]);
var state_17988__$1 = state_17988;
var statearr_17995_18009 = state_17988__$1;
(statearr_17995_18009[(2)] = inst_17974);

(statearr_17995_18009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (6))){
var inst_17974 = (state_17988[(7)]);
var inst_17977 = (state_17988[(8)]);
var inst_17981 = f.call(null,inst_17974,inst_17977);
var inst_17974__$1 = inst_17981;
var state_17988__$1 = (function (){var statearr_17996 = state_17988;
(statearr_17996[(7)] = inst_17974__$1);

return statearr_17996;
})();
var statearr_17997_18010 = state_17988__$1;
(statearr_17997_18010[(2)] = null);

(statearr_17997_18010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17989 === (7))){
var inst_17984 = (state_17988[(2)]);
var state_17988__$1 = state_17988;
var statearr_17998_18011 = state_17988__$1;
(statearr_17998_18011[(2)] = inst_17984);

(statearr_17998_18011[(1)] = (3));


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
});})(c__9944__auto__))
;
return ((function (switch__9879__auto__,c__9944__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9880__auto____0 = (function (){
var statearr_18002 = [null,null,null,null,null,null,null,null,null];
(statearr_18002[(0)] = cljs$core$async$reduce_$_state_machine__9880__auto__);

(statearr_18002[(1)] = (1));

return statearr_18002;
});
var cljs$core$async$reduce_$_state_machine__9880__auto____1 = (function (state_17988){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18003){if((e18003 instanceof Object)){
var ex__9883__auto__ = e18003;
var statearr_18004_18012 = state_17988;
(statearr_18004_18012[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18013 = state_17988;
state_17988 = G__18013;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9880__auto__ = function(state_17988){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9880__auto____1.call(this,state_17988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9880__auto____0;
cljs$core$async$reduce_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9880__auto____1;
return cljs$core$async$reduce_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_18005 = f__9945__auto__.call(null);
(statearr_18005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_18005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__))
);

return c__9944__auto__;
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
var args18014 = [];
var len__6152__auto___18066 = arguments.length;
var i__6153__auto___18067 = (0);
while(true){
if((i__6153__auto___18067 < len__6152__auto___18066)){
args18014.push((arguments[i__6153__auto___18067]));

var G__18068 = (i__6153__auto___18067 + (1));
i__6153__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var G__18016 = args18014.length;
switch (G__18016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18014.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__){
return (function (state_18041){
var state_val_18042 = (state_18041[(1)]);
if((state_val_18042 === (7))){
var inst_18023 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18043_18070 = state_18041__$1;
(statearr_18043_18070[(2)] = inst_18023);

(statearr_18043_18070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (1))){
var inst_18017 = cljs.core.seq.call(null,coll);
var inst_18018 = inst_18017;
var state_18041__$1 = (function (){var statearr_18044 = state_18041;
(statearr_18044[(7)] = inst_18018);

return statearr_18044;
})();
var statearr_18045_18071 = state_18041__$1;
(statearr_18045_18071[(2)] = null);

(statearr_18045_18071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (4))){
var inst_18018 = (state_18041[(7)]);
var inst_18021 = cljs.core.first.call(null,inst_18018);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18041__$1,(7),ch,inst_18021);
} else {
if((state_val_18042 === (13))){
var inst_18035 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18046_18072 = state_18041__$1;
(statearr_18046_18072[(2)] = inst_18035);

(statearr_18046_18072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (6))){
var inst_18026 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18026)){
var statearr_18047_18073 = state_18041__$1;
(statearr_18047_18073[(1)] = (8));

} else {
var statearr_18048_18074 = state_18041__$1;
(statearr_18048_18074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (3))){
var inst_18039 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18041__$1,inst_18039);
} else {
if((state_val_18042 === (12))){
var state_18041__$1 = state_18041;
var statearr_18049_18075 = state_18041__$1;
(statearr_18049_18075[(2)] = null);

(statearr_18049_18075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (2))){
var inst_18018 = (state_18041[(7)]);
var state_18041__$1 = state_18041;
if(cljs.core.truth_(inst_18018)){
var statearr_18050_18076 = state_18041__$1;
(statearr_18050_18076[(1)] = (4));

} else {
var statearr_18051_18077 = state_18041__$1;
(statearr_18051_18077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (11))){
var inst_18032 = cljs.core.async.close_BANG_.call(null,ch);
var state_18041__$1 = state_18041;
var statearr_18052_18078 = state_18041__$1;
(statearr_18052_18078[(2)] = inst_18032);

(statearr_18052_18078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (9))){
var state_18041__$1 = state_18041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18053_18079 = state_18041__$1;
(statearr_18053_18079[(1)] = (11));

} else {
var statearr_18054_18080 = state_18041__$1;
(statearr_18054_18080[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (5))){
var inst_18018 = (state_18041[(7)]);
var state_18041__$1 = state_18041;
var statearr_18055_18081 = state_18041__$1;
(statearr_18055_18081[(2)] = inst_18018);

(statearr_18055_18081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (10))){
var inst_18037 = (state_18041[(2)]);
var state_18041__$1 = state_18041;
var statearr_18056_18082 = state_18041__$1;
(statearr_18056_18082[(2)] = inst_18037);

(statearr_18056_18082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18042 === (8))){
var inst_18018 = (state_18041[(7)]);
var inst_18028 = cljs.core.next.call(null,inst_18018);
var inst_18018__$1 = inst_18028;
var state_18041__$1 = (function (){var statearr_18057 = state_18041;
(statearr_18057[(7)] = inst_18018__$1);

return statearr_18057;
})();
var statearr_18058_18083 = state_18041__$1;
(statearr_18058_18083[(2)] = null);

(statearr_18058_18083[(1)] = (2));


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
});})(c__9944__auto__))
;
return ((function (switch__9879__auto__,c__9944__auto__){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_18041){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__9883__auto__ = e18063;
var statearr_18064_18084 = state_18041;
(statearr_18064_18084[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18085 = state_18041;
state_18041 = G__18085;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_18041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_18041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_18065 = f__9945__auto__.call(null);
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__))
);

return c__9944__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18307 = (function (mult,ch,cs,meta18308){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18308 = meta18308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18309,meta18308__$1){
var self__ = this;
var _18309__$1 = this;
return (new cljs.core.async.t_cljs$core$async18307(self__.mult,self__.ch,self__.cs,meta18308__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18309){
var self__ = this;
var _18309__$1 = this;
return self__.meta18308;
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18308","meta18308",1947343869,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18307";

cljs.core.async.t_cljs$core$async18307.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18307");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18307 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18307(mult__$1,ch__$1,cs__$1,meta18308){
return (new cljs.core.async.t_cljs$core$async18307(mult__$1,ch__$1,cs__$1,meta18308));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18307(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9944__auto___18528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___18528,cs,m,dchan,dctr,done){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___18528,cs,m,dchan,dctr,done){
return (function (state_18440){
var state_val_18441 = (state_18440[(1)]);
if((state_val_18441 === (7))){
var inst_18436 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18442_18529 = state_18440__$1;
(statearr_18442_18529[(2)] = inst_18436);

(statearr_18442_18529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (20))){
var inst_18341 = (state_18440[(7)]);
var inst_18351 = cljs.core.first.call(null,inst_18341);
var inst_18352 = cljs.core.nth.call(null,inst_18351,(0),null);
var inst_18353 = cljs.core.nth.call(null,inst_18351,(1),null);
var state_18440__$1 = (function (){var statearr_18443 = state_18440;
(statearr_18443[(8)] = inst_18352);

return statearr_18443;
})();
if(cljs.core.truth_(inst_18353)){
var statearr_18444_18530 = state_18440__$1;
(statearr_18444_18530[(1)] = (22));

} else {
var statearr_18445_18531 = state_18440__$1;
(statearr_18445_18531[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (27))){
var inst_18388 = (state_18440[(9)]);
var inst_18383 = (state_18440[(10)]);
var inst_18312 = (state_18440[(11)]);
var inst_18381 = (state_18440[(12)]);
var inst_18388__$1 = cljs.core._nth.call(null,inst_18381,inst_18383);
var inst_18389 = cljs.core.async.put_BANG_.call(null,inst_18388__$1,inst_18312,done);
var state_18440__$1 = (function (){var statearr_18446 = state_18440;
(statearr_18446[(9)] = inst_18388__$1);

return statearr_18446;
})();
if(cljs.core.truth_(inst_18389)){
var statearr_18447_18532 = state_18440__$1;
(statearr_18447_18532[(1)] = (30));

} else {
var statearr_18448_18533 = state_18440__$1;
(statearr_18448_18533[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (1))){
var state_18440__$1 = state_18440;
var statearr_18449_18534 = state_18440__$1;
(statearr_18449_18534[(2)] = null);

(statearr_18449_18534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (24))){
var inst_18341 = (state_18440[(7)]);
var inst_18358 = (state_18440[(2)]);
var inst_18359 = cljs.core.next.call(null,inst_18341);
var inst_18321 = inst_18359;
var inst_18322 = null;
var inst_18323 = (0);
var inst_18324 = (0);
var state_18440__$1 = (function (){var statearr_18450 = state_18440;
(statearr_18450[(13)] = inst_18323);

(statearr_18450[(14)] = inst_18324);

(statearr_18450[(15)] = inst_18358);

(statearr_18450[(16)] = inst_18322);

(statearr_18450[(17)] = inst_18321);

return statearr_18450;
})();
var statearr_18451_18535 = state_18440__$1;
(statearr_18451_18535[(2)] = null);

(statearr_18451_18535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (39))){
var state_18440__$1 = state_18440;
var statearr_18455_18536 = state_18440__$1;
(statearr_18455_18536[(2)] = null);

(statearr_18455_18536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (4))){
var inst_18312 = (state_18440[(11)]);
var inst_18312__$1 = (state_18440[(2)]);
var inst_18313 = (inst_18312__$1 == null);
var state_18440__$1 = (function (){var statearr_18456 = state_18440;
(statearr_18456[(11)] = inst_18312__$1);

return statearr_18456;
})();
if(cljs.core.truth_(inst_18313)){
var statearr_18457_18537 = state_18440__$1;
(statearr_18457_18537[(1)] = (5));

} else {
var statearr_18458_18538 = state_18440__$1;
(statearr_18458_18538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (15))){
var inst_18323 = (state_18440[(13)]);
var inst_18324 = (state_18440[(14)]);
var inst_18322 = (state_18440[(16)]);
var inst_18321 = (state_18440[(17)]);
var inst_18337 = (state_18440[(2)]);
var inst_18338 = (inst_18324 + (1));
var tmp18452 = inst_18323;
var tmp18453 = inst_18322;
var tmp18454 = inst_18321;
var inst_18321__$1 = tmp18454;
var inst_18322__$1 = tmp18453;
var inst_18323__$1 = tmp18452;
var inst_18324__$1 = inst_18338;
var state_18440__$1 = (function (){var statearr_18459 = state_18440;
(statearr_18459[(13)] = inst_18323__$1);

(statearr_18459[(14)] = inst_18324__$1);

(statearr_18459[(16)] = inst_18322__$1);

(statearr_18459[(17)] = inst_18321__$1);

(statearr_18459[(18)] = inst_18337);

return statearr_18459;
})();
var statearr_18460_18539 = state_18440__$1;
(statearr_18460_18539[(2)] = null);

(statearr_18460_18539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (21))){
var inst_18362 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18464_18540 = state_18440__$1;
(statearr_18464_18540[(2)] = inst_18362);

(statearr_18464_18540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (31))){
var inst_18388 = (state_18440[(9)]);
var inst_18392 = done.call(null,null);
var inst_18393 = cljs.core.async.untap_STAR_.call(null,m,inst_18388);
var state_18440__$1 = (function (){var statearr_18465 = state_18440;
(statearr_18465[(19)] = inst_18392);

return statearr_18465;
})();
var statearr_18466_18541 = state_18440__$1;
(statearr_18466_18541[(2)] = inst_18393);

(statearr_18466_18541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (32))){
var inst_18380 = (state_18440[(20)]);
var inst_18382 = (state_18440[(21)]);
var inst_18383 = (state_18440[(10)]);
var inst_18381 = (state_18440[(12)]);
var inst_18395 = (state_18440[(2)]);
var inst_18396 = (inst_18383 + (1));
var tmp18461 = inst_18380;
var tmp18462 = inst_18382;
var tmp18463 = inst_18381;
var inst_18380__$1 = tmp18461;
var inst_18381__$1 = tmp18463;
var inst_18382__$1 = tmp18462;
var inst_18383__$1 = inst_18396;
var state_18440__$1 = (function (){var statearr_18467 = state_18440;
(statearr_18467[(20)] = inst_18380__$1);

(statearr_18467[(21)] = inst_18382__$1);

(statearr_18467[(10)] = inst_18383__$1);

(statearr_18467[(12)] = inst_18381__$1);

(statearr_18467[(22)] = inst_18395);

return statearr_18467;
})();
var statearr_18468_18542 = state_18440__$1;
(statearr_18468_18542[(2)] = null);

(statearr_18468_18542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (40))){
var inst_18408 = (state_18440[(23)]);
var inst_18412 = done.call(null,null);
var inst_18413 = cljs.core.async.untap_STAR_.call(null,m,inst_18408);
var state_18440__$1 = (function (){var statearr_18469 = state_18440;
(statearr_18469[(24)] = inst_18412);

return statearr_18469;
})();
var statearr_18470_18543 = state_18440__$1;
(statearr_18470_18543[(2)] = inst_18413);

(statearr_18470_18543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (33))){
var inst_18399 = (state_18440[(25)]);
var inst_18401 = cljs.core.chunked_seq_QMARK_.call(null,inst_18399);
var state_18440__$1 = state_18440;
if(inst_18401){
var statearr_18471_18544 = state_18440__$1;
(statearr_18471_18544[(1)] = (36));

} else {
var statearr_18472_18545 = state_18440__$1;
(statearr_18472_18545[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (13))){
var inst_18331 = (state_18440[(26)]);
var inst_18334 = cljs.core.async.close_BANG_.call(null,inst_18331);
var state_18440__$1 = state_18440;
var statearr_18473_18546 = state_18440__$1;
(statearr_18473_18546[(2)] = inst_18334);

(statearr_18473_18546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (22))){
var inst_18352 = (state_18440[(8)]);
var inst_18355 = cljs.core.async.close_BANG_.call(null,inst_18352);
var state_18440__$1 = state_18440;
var statearr_18474_18547 = state_18440__$1;
(statearr_18474_18547[(2)] = inst_18355);

(statearr_18474_18547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (36))){
var inst_18399 = (state_18440[(25)]);
var inst_18403 = cljs.core.chunk_first.call(null,inst_18399);
var inst_18404 = cljs.core.chunk_rest.call(null,inst_18399);
var inst_18405 = cljs.core.count.call(null,inst_18403);
var inst_18380 = inst_18404;
var inst_18381 = inst_18403;
var inst_18382 = inst_18405;
var inst_18383 = (0);
var state_18440__$1 = (function (){var statearr_18475 = state_18440;
(statearr_18475[(20)] = inst_18380);

(statearr_18475[(21)] = inst_18382);

(statearr_18475[(10)] = inst_18383);

(statearr_18475[(12)] = inst_18381);

return statearr_18475;
})();
var statearr_18476_18548 = state_18440__$1;
(statearr_18476_18548[(2)] = null);

(statearr_18476_18548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (41))){
var inst_18399 = (state_18440[(25)]);
var inst_18415 = (state_18440[(2)]);
var inst_18416 = cljs.core.next.call(null,inst_18399);
var inst_18380 = inst_18416;
var inst_18381 = null;
var inst_18382 = (0);
var inst_18383 = (0);
var state_18440__$1 = (function (){var statearr_18477 = state_18440;
(statearr_18477[(20)] = inst_18380);

(statearr_18477[(21)] = inst_18382);

(statearr_18477[(10)] = inst_18383);

(statearr_18477[(12)] = inst_18381);

(statearr_18477[(27)] = inst_18415);

return statearr_18477;
})();
var statearr_18478_18549 = state_18440__$1;
(statearr_18478_18549[(2)] = null);

(statearr_18478_18549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (43))){
var state_18440__$1 = state_18440;
var statearr_18479_18550 = state_18440__$1;
(statearr_18479_18550[(2)] = null);

(statearr_18479_18550[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (29))){
var inst_18424 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18480_18551 = state_18440__$1;
(statearr_18480_18551[(2)] = inst_18424);

(statearr_18480_18551[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (44))){
var inst_18433 = (state_18440[(2)]);
var state_18440__$1 = (function (){var statearr_18481 = state_18440;
(statearr_18481[(28)] = inst_18433);

return statearr_18481;
})();
var statearr_18482_18552 = state_18440__$1;
(statearr_18482_18552[(2)] = null);

(statearr_18482_18552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (6))){
var inst_18372 = (state_18440[(29)]);
var inst_18371 = cljs.core.deref.call(null,cs);
var inst_18372__$1 = cljs.core.keys.call(null,inst_18371);
var inst_18373 = cljs.core.count.call(null,inst_18372__$1);
var inst_18374 = cljs.core.reset_BANG_.call(null,dctr,inst_18373);
var inst_18379 = cljs.core.seq.call(null,inst_18372__$1);
var inst_18380 = inst_18379;
var inst_18381 = null;
var inst_18382 = (0);
var inst_18383 = (0);
var state_18440__$1 = (function (){var statearr_18483 = state_18440;
(statearr_18483[(20)] = inst_18380);

(statearr_18483[(21)] = inst_18382);

(statearr_18483[(10)] = inst_18383);

(statearr_18483[(12)] = inst_18381);

(statearr_18483[(29)] = inst_18372__$1);

(statearr_18483[(30)] = inst_18374);

return statearr_18483;
})();
var statearr_18484_18553 = state_18440__$1;
(statearr_18484_18553[(2)] = null);

(statearr_18484_18553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (28))){
var inst_18380 = (state_18440[(20)]);
var inst_18399 = (state_18440[(25)]);
var inst_18399__$1 = cljs.core.seq.call(null,inst_18380);
var state_18440__$1 = (function (){var statearr_18485 = state_18440;
(statearr_18485[(25)] = inst_18399__$1);

return statearr_18485;
})();
if(inst_18399__$1){
var statearr_18486_18554 = state_18440__$1;
(statearr_18486_18554[(1)] = (33));

} else {
var statearr_18487_18555 = state_18440__$1;
(statearr_18487_18555[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (25))){
var inst_18382 = (state_18440[(21)]);
var inst_18383 = (state_18440[(10)]);
var inst_18385 = (inst_18383 < inst_18382);
var inst_18386 = inst_18385;
var state_18440__$1 = state_18440;
if(cljs.core.truth_(inst_18386)){
var statearr_18488_18556 = state_18440__$1;
(statearr_18488_18556[(1)] = (27));

} else {
var statearr_18489_18557 = state_18440__$1;
(statearr_18489_18557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (34))){
var state_18440__$1 = state_18440;
var statearr_18490_18558 = state_18440__$1;
(statearr_18490_18558[(2)] = null);

(statearr_18490_18558[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (17))){
var state_18440__$1 = state_18440;
var statearr_18491_18559 = state_18440__$1;
(statearr_18491_18559[(2)] = null);

(statearr_18491_18559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (3))){
var inst_18438 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18440__$1,inst_18438);
} else {
if((state_val_18441 === (12))){
var inst_18367 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18492_18560 = state_18440__$1;
(statearr_18492_18560[(2)] = inst_18367);

(statearr_18492_18560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (2))){
var state_18440__$1 = state_18440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18440__$1,(4),ch);
} else {
if((state_val_18441 === (23))){
var state_18440__$1 = state_18440;
var statearr_18493_18561 = state_18440__$1;
(statearr_18493_18561[(2)] = null);

(statearr_18493_18561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (35))){
var inst_18422 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18494_18562 = state_18440__$1;
(statearr_18494_18562[(2)] = inst_18422);

(statearr_18494_18562[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (19))){
var inst_18341 = (state_18440[(7)]);
var inst_18345 = cljs.core.chunk_first.call(null,inst_18341);
var inst_18346 = cljs.core.chunk_rest.call(null,inst_18341);
var inst_18347 = cljs.core.count.call(null,inst_18345);
var inst_18321 = inst_18346;
var inst_18322 = inst_18345;
var inst_18323 = inst_18347;
var inst_18324 = (0);
var state_18440__$1 = (function (){var statearr_18495 = state_18440;
(statearr_18495[(13)] = inst_18323);

(statearr_18495[(14)] = inst_18324);

(statearr_18495[(16)] = inst_18322);

(statearr_18495[(17)] = inst_18321);

return statearr_18495;
})();
var statearr_18496_18563 = state_18440__$1;
(statearr_18496_18563[(2)] = null);

(statearr_18496_18563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (11))){
var inst_18321 = (state_18440[(17)]);
var inst_18341 = (state_18440[(7)]);
var inst_18341__$1 = cljs.core.seq.call(null,inst_18321);
var state_18440__$1 = (function (){var statearr_18497 = state_18440;
(statearr_18497[(7)] = inst_18341__$1);

return statearr_18497;
})();
if(inst_18341__$1){
var statearr_18498_18564 = state_18440__$1;
(statearr_18498_18564[(1)] = (16));

} else {
var statearr_18499_18565 = state_18440__$1;
(statearr_18499_18565[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (9))){
var inst_18369 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18500_18566 = state_18440__$1;
(statearr_18500_18566[(2)] = inst_18369);

(statearr_18500_18566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (5))){
var inst_18319 = cljs.core.deref.call(null,cs);
var inst_18320 = cljs.core.seq.call(null,inst_18319);
var inst_18321 = inst_18320;
var inst_18322 = null;
var inst_18323 = (0);
var inst_18324 = (0);
var state_18440__$1 = (function (){var statearr_18501 = state_18440;
(statearr_18501[(13)] = inst_18323);

(statearr_18501[(14)] = inst_18324);

(statearr_18501[(16)] = inst_18322);

(statearr_18501[(17)] = inst_18321);

return statearr_18501;
})();
var statearr_18502_18567 = state_18440__$1;
(statearr_18502_18567[(2)] = null);

(statearr_18502_18567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (14))){
var state_18440__$1 = state_18440;
var statearr_18503_18568 = state_18440__$1;
(statearr_18503_18568[(2)] = null);

(statearr_18503_18568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (45))){
var inst_18430 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18504_18569 = state_18440__$1;
(statearr_18504_18569[(2)] = inst_18430);

(statearr_18504_18569[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (26))){
var inst_18372 = (state_18440[(29)]);
var inst_18426 = (state_18440[(2)]);
var inst_18427 = cljs.core.seq.call(null,inst_18372);
var state_18440__$1 = (function (){var statearr_18505 = state_18440;
(statearr_18505[(31)] = inst_18426);

return statearr_18505;
})();
if(inst_18427){
var statearr_18506_18570 = state_18440__$1;
(statearr_18506_18570[(1)] = (42));

} else {
var statearr_18507_18571 = state_18440__$1;
(statearr_18507_18571[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (16))){
var inst_18341 = (state_18440[(7)]);
var inst_18343 = cljs.core.chunked_seq_QMARK_.call(null,inst_18341);
var state_18440__$1 = state_18440;
if(inst_18343){
var statearr_18508_18572 = state_18440__$1;
(statearr_18508_18572[(1)] = (19));

} else {
var statearr_18509_18573 = state_18440__$1;
(statearr_18509_18573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (38))){
var inst_18419 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18510_18574 = state_18440__$1;
(statearr_18510_18574[(2)] = inst_18419);

(statearr_18510_18574[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (30))){
var state_18440__$1 = state_18440;
var statearr_18511_18575 = state_18440__$1;
(statearr_18511_18575[(2)] = null);

(statearr_18511_18575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (10))){
var inst_18324 = (state_18440[(14)]);
var inst_18322 = (state_18440[(16)]);
var inst_18330 = cljs.core._nth.call(null,inst_18322,inst_18324);
var inst_18331 = cljs.core.nth.call(null,inst_18330,(0),null);
var inst_18332 = cljs.core.nth.call(null,inst_18330,(1),null);
var state_18440__$1 = (function (){var statearr_18512 = state_18440;
(statearr_18512[(26)] = inst_18331);

return statearr_18512;
})();
if(cljs.core.truth_(inst_18332)){
var statearr_18513_18576 = state_18440__$1;
(statearr_18513_18576[(1)] = (13));

} else {
var statearr_18514_18577 = state_18440__$1;
(statearr_18514_18577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (18))){
var inst_18365 = (state_18440[(2)]);
var state_18440__$1 = state_18440;
var statearr_18515_18578 = state_18440__$1;
(statearr_18515_18578[(2)] = inst_18365);

(statearr_18515_18578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (42))){
var state_18440__$1 = state_18440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18440__$1,(45),dchan);
} else {
if((state_val_18441 === (37))){
var inst_18408 = (state_18440[(23)]);
var inst_18312 = (state_18440[(11)]);
var inst_18399 = (state_18440[(25)]);
var inst_18408__$1 = cljs.core.first.call(null,inst_18399);
var inst_18409 = cljs.core.async.put_BANG_.call(null,inst_18408__$1,inst_18312,done);
var state_18440__$1 = (function (){var statearr_18516 = state_18440;
(statearr_18516[(23)] = inst_18408__$1);

return statearr_18516;
})();
if(cljs.core.truth_(inst_18409)){
var statearr_18517_18579 = state_18440__$1;
(statearr_18517_18579[(1)] = (39));

} else {
var statearr_18518_18580 = state_18440__$1;
(statearr_18518_18580[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18441 === (8))){
var inst_18323 = (state_18440[(13)]);
var inst_18324 = (state_18440[(14)]);
var inst_18326 = (inst_18324 < inst_18323);
var inst_18327 = inst_18326;
var state_18440__$1 = state_18440;
if(cljs.core.truth_(inst_18327)){
var statearr_18519_18581 = state_18440__$1;
(statearr_18519_18581[(1)] = (10));

} else {
var statearr_18520_18582 = state_18440__$1;
(statearr_18520_18582[(1)] = (11));

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
});})(c__9944__auto___18528,cs,m,dchan,dctr,done))
;
return ((function (switch__9879__auto__,c__9944__auto___18528,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9880__auto__ = null;
var cljs$core$async$mult_$_state_machine__9880__auto____0 = (function (){
var statearr_18524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18524[(0)] = cljs$core$async$mult_$_state_machine__9880__auto__);

(statearr_18524[(1)] = (1));

return statearr_18524;
});
var cljs$core$async$mult_$_state_machine__9880__auto____1 = (function (state_18440){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18525){if((e18525 instanceof Object)){
var ex__9883__auto__ = e18525;
var statearr_18526_18583 = state_18440;
(statearr_18526_18583[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18584 = state_18440;
state_18440 = G__18584;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9880__auto__ = function(state_18440){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9880__auto____1.call(this,state_18440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9880__auto____0;
cljs$core$async$mult_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9880__auto____1;
return cljs$core$async$mult_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___18528,cs,m,dchan,dctr,done))
})();
var state__9946__auto__ = (function (){var statearr_18527 = f__9945__auto__.call(null);
(statearr_18527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___18528);

return statearr_18527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___18528,cs,m,dchan,dctr,done))
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
var args18585 = [];
var len__6152__auto___18588 = arguments.length;
var i__6153__auto___18589 = (0);
while(true){
if((i__6153__auto___18589 < len__6152__auto___18588)){
args18585.push((arguments[i__6153__auto___18589]));

var G__18590 = (i__6153__auto___18589 + (1));
i__6153__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var G__18587 = args18585.length;
switch (G__18587) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18585.length)].join('')));

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
var len__6152__auto___18602 = arguments.length;
var i__6153__auto___18603 = (0);
while(true){
if((i__6153__auto___18603 < len__6152__auto___18602)){
args__6159__auto__.push((arguments[i__6153__auto___18603]));

var G__18604 = (i__6153__auto___18603 + (1));
i__6153__auto___18603 = G__18604;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18596){
var map__18597 = p__18596;
var map__18597__$1 = ((((!((map__18597 == null)))?((((map__18597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18597):map__18597);
var opts = map__18597__$1;
var statearr_18599_18605 = state;
(statearr_18599_18605[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18597,map__18597__$1,opts){
return (function (val){
var statearr_18600_18606 = state;
(statearr_18600_18606[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18597,map__18597__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18601_18607 = state;
(statearr_18601_18607[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18592){
var G__18593 = cljs.core.first.call(null,seq18592);
var seq18592__$1 = cljs.core.next.call(null,seq18592);
var G__18594 = cljs.core.first.call(null,seq18592__$1);
var seq18592__$2 = cljs.core.next.call(null,seq18592__$1);
var G__18595 = cljs.core.first.call(null,seq18592__$2);
var seq18592__$3 = cljs.core.next.call(null,seq18592__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18593,G__18594,G__18595,seq18592__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18771 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18772){
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
this.meta18772 = meta18772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18773,meta18772__$1){
var self__ = this;
var _18773__$1 = this;
return (new cljs.core.async.t_cljs$core$async18771(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18772__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18773){
var self__ = this;
var _18773__$1 = this;
return self__.meta18772;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18771.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18772","meta18772",-554933180,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18771";

cljs.core.async.t_cljs$core$async18771.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18771");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18771 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18771(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18772){
return (new cljs.core.async.t_cljs$core$async18771(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18772));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18771(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9944__auto___18934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18871){
var state_val_18872 = (state_18871[(1)]);
if((state_val_18872 === (7))){
var inst_18789 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18873_18935 = state_18871__$1;
(statearr_18873_18935[(2)] = inst_18789);

(statearr_18873_18935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (20))){
var inst_18801 = (state_18871[(7)]);
var state_18871__$1 = state_18871;
var statearr_18874_18936 = state_18871__$1;
(statearr_18874_18936[(2)] = inst_18801);

(statearr_18874_18936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (27))){
var state_18871__$1 = state_18871;
var statearr_18875_18937 = state_18871__$1;
(statearr_18875_18937[(2)] = null);

(statearr_18875_18937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (1))){
var inst_18777 = (state_18871[(8)]);
var inst_18777__$1 = calc_state.call(null);
var inst_18779 = (inst_18777__$1 == null);
var inst_18780 = cljs.core.not.call(null,inst_18779);
var state_18871__$1 = (function (){var statearr_18876 = state_18871;
(statearr_18876[(8)] = inst_18777__$1);

return statearr_18876;
})();
if(inst_18780){
var statearr_18877_18938 = state_18871__$1;
(statearr_18877_18938[(1)] = (2));

} else {
var statearr_18878_18939 = state_18871__$1;
(statearr_18878_18939[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (24))){
var inst_18845 = (state_18871[(9)]);
var inst_18824 = (state_18871[(10)]);
var inst_18831 = (state_18871[(11)]);
var inst_18845__$1 = inst_18824.call(null,inst_18831);
var state_18871__$1 = (function (){var statearr_18879 = state_18871;
(statearr_18879[(9)] = inst_18845__$1);

return statearr_18879;
})();
if(cljs.core.truth_(inst_18845__$1)){
var statearr_18880_18940 = state_18871__$1;
(statearr_18880_18940[(1)] = (29));

} else {
var statearr_18881_18941 = state_18871__$1;
(statearr_18881_18941[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (4))){
var inst_18792 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18792)){
var statearr_18882_18942 = state_18871__$1;
(statearr_18882_18942[(1)] = (8));

} else {
var statearr_18883_18943 = state_18871__$1;
(statearr_18883_18943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (15))){
var inst_18818 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18818)){
var statearr_18884_18944 = state_18871__$1;
(statearr_18884_18944[(1)] = (19));

} else {
var statearr_18885_18945 = state_18871__$1;
(statearr_18885_18945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (21))){
var inst_18823 = (state_18871[(12)]);
var inst_18823__$1 = (state_18871[(2)]);
var inst_18824 = cljs.core.get.call(null,inst_18823__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18825 = cljs.core.get.call(null,inst_18823__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18826 = cljs.core.get.call(null,inst_18823__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18871__$1 = (function (){var statearr_18886 = state_18871;
(statearr_18886[(10)] = inst_18824);

(statearr_18886[(12)] = inst_18823__$1);

(statearr_18886[(13)] = inst_18825);

return statearr_18886;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18871__$1,(22),inst_18826);
} else {
if((state_val_18872 === (31))){
var inst_18853 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18853)){
var statearr_18887_18946 = state_18871__$1;
(statearr_18887_18946[(1)] = (32));

} else {
var statearr_18888_18947 = state_18871__$1;
(statearr_18888_18947[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (32))){
var inst_18830 = (state_18871[(14)]);
var state_18871__$1 = state_18871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18871__$1,(35),out,inst_18830);
} else {
if((state_val_18872 === (33))){
var inst_18823 = (state_18871[(12)]);
var inst_18801 = inst_18823;
var state_18871__$1 = (function (){var statearr_18889 = state_18871;
(statearr_18889[(7)] = inst_18801);

return statearr_18889;
})();
var statearr_18890_18948 = state_18871__$1;
(statearr_18890_18948[(2)] = null);

(statearr_18890_18948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (13))){
var inst_18801 = (state_18871[(7)]);
var inst_18808 = inst_18801.cljs$lang$protocol_mask$partition0$;
var inst_18809 = (inst_18808 & (64));
var inst_18810 = inst_18801.cljs$core$ISeq$;
var inst_18811 = (inst_18809) || (inst_18810);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18811)){
var statearr_18891_18949 = state_18871__$1;
(statearr_18891_18949[(1)] = (16));

} else {
var statearr_18892_18950 = state_18871__$1;
(statearr_18892_18950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (22))){
var inst_18830 = (state_18871[(14)]);
var inst_18831 = (state_18871[(11)]);
var inst_18829 = (state_18871[(2)]);
var inst_18830__$1 = cljs.core.nth.call(null,inst_18829,(0),null);
var inst_18831__$1 = cljs.core.nth.call(null,inst_18829,(1),null);
var inst_18832 = (inst_18830__$1 == null);
var inst_18833 = cljs.core._EQ_.call(null,inst_18831__$1,change);
var inst_18834 = (inst_18832) || (inst_18833);
var state_18871__$1 = (function (){var statearr_18893 = state_18871;
(statearr_18893[(14)] = inst_18830__$1);

(statearr_18893[(11)] = inst_18831__$1);

return statearr_18893;
})();
if(cljs.core.truth_(inst_18834)){
var statearr_18894_18951 = state_18871__$1;
(statearr_18894_18951[(1)] = (23));

} else {
var statearr_18895_18952 = state_18871__$1;
(statearr_18895_18952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (36))){
var inst_18823 = (state_18871[(12)]);
var inst_18801 = inst_18823;
var state_18871__$1 = (function (){var statearr_18896 = state_18871;
(statearr_18896[(7)] = inst_18801);

return statearr_18896;
})();
var statearr_18897_18953 = state_18871__$1;
(statearr_18897_18953[(2)] = null);

(statearr_18897_18953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (29))){
var inst_18845 = (state_18871[(9)]);
var state_18871__$1 = state_18871;
var statearr_18898_18954 = state_18871__$1;
(statearr_18898_18954[(2)] = inst_18845);

(statearr_18898_18954[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (6))){
var state_18871__$1 = state_18871;
var statearr_18899_18955 = state_18871__$1;
(statearr_18899_18955[(2)] = false);

(statearr_18899_18955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (28))){
var inst_18841 = (state_18871[(2)]);
var inst_18842 = calc_state.call(null);
var inst_18801 = inst_18842;
var state_18871__$1 = (function (){var statearr_18900 = state_18871;
(statearr_18900[(7)] = inst_18801);

(statearr_18900[(15)] = inst_18841);

return statearr_18900;
})();
var statearr_18901_18956 = state_18871__$1;
(statearr_18901_18956[(2)] = null);

(statearr_18901_18956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (25))){
var inst_18867 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18902_18957 = state_18871__$1;
(statearr_18902_18957[(2)] = inst_18867);

(statearr_18902_18957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (34))){
var inst_18865 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18903_18958 = state_18871__$1;
(statearr_18903_18958[(2)] = inst_18865);

(statearr_18903_18958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (17))){
var state_18871__$1 = state_18871;
var statearr_18904_18959 = state_18871__$1;
(statearr_18904_18959[(2)] = false);

(statearr_18904_18959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (3))){
var state_18871__$1 = state_18871;
var statearr_18905_18960 = state_18871__$1;
(statearr_18905_18960[(2)] = false);

(statearr_18905_18960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (12))){
var inst_18869 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18871__$1,inst_18869);
} else {
if((state_val_18872 === (2))){
var inst_18777 = (state_18871[(8)]);
var inst_18782 = inst_18777.cljs$lang$protocol_mask$partition0$;
var inst_18783 = (inst_18782 & (64));
var inst_18784 = inst_18777.cljs$core$ISeq$;
var inst_18785 = (inst_18783) || (inst_18784);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18785)){
var statearr_18906_18961 = state_18871__$1;
(statearr_18906_18961[(1)] = (5));

} else {
var statearr_18907_18962 = state_18871__$1;
(statearr_18907_18962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (23))){
var inst_18830 = (state_18871[(14)]);
var inst_18836 = (inst_18830 == null);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18836)){
var statearr_18908_18963 = state_18871__$1;
(statearr_18908_18963[(1)] = (26));

} else {
var statearr_18909_18964 = state_18871__$1;
(statearr_18909_18964[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (35))){
var inst_18856 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18856)){
var statearr_18910_18965 = state_18871__$1;
(statearr_18910_18965[(1)] = (36));

} else {
var statearr_18911_18966 = state_18871__$1;
(statearr_18911_18966[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (19))){
var inst_18801 = (state_18871[(7)]);
var inst_18820 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18801);
var state_18871__$1 = state_18871;
var statearr_18912_18967 = state_18871__$1;
(statearr_18912_18967[(2)] = inst_18820);

(statearr_18912_18967[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (11))){
var inst_18801 = (state_18871[(7)]);
var inst_18805 = (inst_18801 == null);
var inst_18806 = cljs.core.not.call(null,inst_18805);
var state_18871__$1 = state_18871;
if(inst_18806){
var statearr_18913_18968 = state_18871__$1;
(statearr_18913_18968[(1)] = (13));

} else {
var statearr_18914_18969 = state_18871__$1;
(statearr_18914_18969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (9))){
var inst_18777 = (state_18871[(8)]);
var state_18871__$1 = state_18871;
var statearr_18915_18970 = state_18871__$1;
(statearr_18915_18970[(2)] = inst_18777);

(statearr_18915_18970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (5))){
var state_18871__$1 = state_18871;
var statearr_18916_18971 = state_18871__$1;
(statearr_18916_18971[(2)] = true);

(statearr_18916_18971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (14))){
var state_18871__$1 = state_18871;
var statearr_18917_18972 = state_18871__$1;
(statearr_18917_18972[(2)] = false);

(statearr_18917_18972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (26))){
var inst_18831 = (state_18871[(11)]);
var inst_18838 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18831);
var state_18871__$1 = state_18871;
var statearr_18918_18973 = state_18871__$1;
(statearr_18918_18973[(2)] = inst_18838);

(statearr_18918_18973[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (16))){
var state_18871__$1 = state_18871;
var statearr_18919_18974 = state_18871__$1;
(statearr_18919_18974[(2)] = true);

(statearr_18919_18974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (38))){
var inst_18861 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18920_18975 = state_18871__$1;
(statearr_18920_18975[(2)] = inst_18861);

(statearr_18920_18975[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (30))){
var inst_18824 = (state_18871[(10)]);
var inst_18831 = (state_18871[(11)]);
var inst_18825 = (state_18871[(13)]);
var inst_18848 = cljs.core.empty_QMARK_.call(null,inst_18824);
var inst_18849 = inst_18825.call(null,inst_18831);
var inst_18850 = cljs.core.not.call(null,inst_18849);
var inst_18851 = (inst_18848) && (inst_18850);
var state_18871__$1 = state_18871;
var statearr_18921_18976 = state_18871__$1;
(statearr_18921_18976[(2)] = inst_18851);

(statearr_18921_18976[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (10))){
var inst_18777 = (state_18871[(8)]);
var inst_18797 = (state_18871[(2)]);
var inst_18798 = cljs.core.get.call(null,inst_18797,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18799 = cljs.core.get.call(null,inst_18797,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18800 = cljs.core.get.call(null,inst_18797,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18801 = inst_18777;
var state_18871__$1 = (function (){var statearr_18922 = state_18871;
(statearr_18922[(16)] = inst_18800);

(statearr_18922[(17)] = inst_18798);

(statearr_18922[(7)] = inst_18801);

(statearr_18922[(18)] = inst_18799);

return statearr_18922;
})();
var statearr_18923_18977 = state_18871__$1;
(statearr_18923_18977[(2)] = null);

(statearr_18923_18977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (18))){
var inst_18815 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18924_18978 = state_18871__$1;
(statearr_18924_18978[(2)] = inst_18815);

(statearr_18924_18978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (37))){
var state_18871__$1 = state_18871;
var statearr_18925_18979 = state_18871__$1;
(statearr_18925_18979[(2)] = null);

(statearr_18925_18979[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (8))){
var inst_18777 = (state_18871[(8)]);
var inst_18794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18777);
var state_18871__$1 = state_18871;
var statearr_18926_18980 = state_18871__$1;
(statearr_18926_18980[(2)] = inst_18794);

(statearr_18926_18980[(1)] = (10));


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
});})(c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9879__auto__,c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9880__auto__ = null;
var cljs$core$async$mix_$_state_machine__9880__auto____0 = (function (){
var statearr_18930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18930[(0)] = cljs$core$async$mix_$_state_machine__9880__auto__);

(statearr_18930[(1)] = (1));

return statearr_18930;
});
var cljs$core$async$mix_$_state_machine__9880__auto____1 = (function (state_18871){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18931){if((e18931 instanceof Object)){
var ex__9883__auto__ = e18931;
var statearr_18932_18981 = state_18871;
(statearr_18932_18981[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18982 = state_18871;
state_18871 = G__18982;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9880__auto__ = function(state_18871){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9880__auto____1.call(this,state_18871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9880__auto____0;
cljs$core$async$mix_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9880__auto____1;
return cljs$core$async$mix_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9946__auto__ = (function (){var statearr_18933 = f__9945__auto__.call(null);
(statearr_18933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___18934);

return statearr_18933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___18934,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args18983 = [];
var len__6152__auto___18986 = arguments.length;
var i__6153__auto___18987 = (0);
while(true){
if((i__6153__auto___18987 < len__6152__auto___18986)){
args18983.push((arguments[i__6153__auto___18987]));

var G__18988 = (i__6153__auto___18987 + (1));
i__6153__auto___18987 = G__18988;
continue;
} else {
}
break;
}

var G__18985 = args18983.length;
switch (G__18985) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18983.length)].join('')));

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
var args18991 = [];
var len__6152__auto___19116 = arguments.length;
var i__6153__auto___19117 = (0);
while(true){
if((i__6153__auto___19117 < len__6152__auto___19116)){
args18991.push((arguments[i__6153__auto___19117]));

var G__19118 = (i__6153__auto___19117 + (1));
i__6153__auto___19117 = G__19118;
continue;
} else {
}
break;
}

var G__18993 = args18991.length;
switch (G__18993) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18991.length)].join('')));

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
return (function (p1__18990_SHARP_){
if(cljs.core.truth_(p1__18990_SHARP_.call(null,topic))){
return p1__18990_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18990_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18994 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18995){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18995 = meta18995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18996,meta18995__$1){
var self__ = this;
var _18996__$1 = this;
return (new cljs.core.async.t_cljs$core$async18994(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18995__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18996){
var self__ = this;
var _18996__$1 = this;
return self__.meta18995;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18995","meta18995",676729897,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18994";

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18994");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18994 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18994(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18995){
return (new cljs.core.async.t_cljs$core$async18994(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18995));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18994(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9944__auto___19120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19120,mults,ensure_mult,p){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19120,mults,ensure_mult,p){
return (function (state_19068){
var state_val_19069 = (state_19068[(1)]);
if((state_val_19069 === (7))){
var inst_19064 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19070_19121 = state_19068__$1;
(statearr_19070_19121[(2)] = inst_19064);

(statearr_19070_19121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (20))){
var state_19068__$1 = state_19068;
var statearr_19071_19122 = state_19068__$1;
(statearr_19071_19122[(2)] = null);

(statearr_19071_19122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (1))){
var state_19068__$1 = state_19068;
var statearr_19072_19123 = state_19068__$1;
(statearr_19072_19123[(2)] = null);

(statearr_19072_19123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (24))){
var inst_19047 = (state_19068[(7)]);
var inst_19056 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19047);
var state_19068__$1 = state_19068;
var statearr_19073_19124 = state_19068__$1;
(statearr_19073_19124[(2)] = inst_19056);

(statearr_19073_19124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (4))){
var inst_18999 = (state_19068[(8)]);
var inst_18999__$1 = (state_19068[(2)]);
var inst_19000 = (inst_18999__$1 == null);
var state_19068__$1 = (function (){var statearr_19074 = state_19068;
(statearr_19074[(8)] = inst_18999__$1);

return statearr_19074;
})();
if(cljs.core.truth_(inst_19000)){
var statearr_19075_19125 = state_19068__$1;
(statearr_19075_19125[(1)] = (5));

} else {
var statearr_19076_19126 = state_19068__$1;
(statearr_19076_19126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (15))){
var inst_19041 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19077_19127 = state_19068__$1;
(statearr_19077_19127[(2)] = inst_19041);

(statearr_19077_19127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (21))){
var inst_19061 = (state_19068[(2)]);
var state_19068__$1 = (function (){var statearr_19078 = state_19068;
(statearr_19078[(9)] = inst_19061);

return statearr_19078;
})();
var statearr_19079_19128 = state_19068__$1;
(statearr_19079_19128[(2)] = null);

(statearr_19079_19128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (13))){
var inst_19023 = (state_19068[(10)]);
var inst_19025 = cljs.core.chunked_seq_QMARK_.call(null,inst_19023);
var state_19068__$1 = state_19068;
if(inst_19025){
var statearr_19080_19129 = state_19068__$1;
(statearr_19080_19129[(1)] = (16));

} else {
var statearr_19081_19130 = state_19068__$1;
(statearr_19081_19130[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (22))){
var inst_19053 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
if(cljs.core.truth_(inst_19053)){
var statearr_19082_19131 = state_19068__$1;
(statearr_19082_19131[(1)] = (23));

} else {
var statearr_19083_19132 = state_19068__$1;
(statearr_19083_19132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (6))){
var inst_19047 = (state_19068[(7)]);
var inst_18999 = (state_19068[(8)]);
var inst_19049 = (state_19068[(11)]);
var inst_19047__$1 = topic_fn.call(null,inst_18999);
var inst_19048 = cljs.core.deref.call(null,mults);
var inst_19049__$1 = cljs.core.get.call(null,inst_19048,inst_19047__$1);
var state_19068__$1 = (function (){var statearr_19084 = state_19068;
(statearr_19084[(7)] = inst_19047__$1);

(statearr_19084[(11)] = inst_19049__$1);

return statearr_19084;
})();
if(cljs.core.truth_(inst_19049__$1)){
var statearr_19085_19133 = state_19068__$1;
(statearr_19085_19133[(1)] = (19));

} else {
var statearr_19086_19134 = state_19068__$1;
(statearr_19086_19134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (25))){
var inst_19058 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19087_19135 = state_19068__$1;
(statearr_19087_19135[(2)] = inst_19058);

(statearr_19087_19135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (17))){
var inst_19023 = (state_19068[(10)]);
var inst_19032 = cljs.core.first.call(null,inst_19023);
var inst_19033 = cljs.core.async.muxch_STAR_.call(null,inst_19032);
var inst_19034 = cljs.core.async.close_BANG_.call(null,inst_19033);
var inst_19035 = cljs.core.next.call(null,inst_19023);
var inst_19009 = inst_19035;
var inst_19010 = null;
var inst_19011 = (0);
var inst_19012 = (0);
var state_19068__$1 = (function (){var statearr_19088 = state_19068;
(statearr_19088[(12)] = inst_19034);

(statearr_19088[(13)] = inst_19012);

(statearr_19088[(14)] = inst_19011);

(statearr_19088[(15)] = inst_19009);

(statearr_19088[(16)] = inst_19010);

return statearr_19088;
})();
var statearr_19089_19136 = state_19068__$1;
(statearr_19089_19136[(2)] = null);

(statearr_19089_19136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (3))){
var inst_19066 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19068__$1,inst_19066);
} else {
if((state_val_19069 === (12))){
var inst_19043 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19090_19137 = state_19068__$1;
(statearr_19090_19137[(2)] = inst_19043);

(statearr_19090_19137[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (2))){
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19068__$1,(4),ch);
} else {
if((state_val_19069 === (23))){
var state_19068__$1 = state_19068;
var statearr_19091_19138 = state_19068__$1;
(statearr_19091_19138[(2)] = null);

(statearr_19091_19138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (19))){
var inst_18999 = (state_19068[(8)]);
var inst_19049 = (state_19068[(11)]);
var inst_19051 = cljs.core.async.muxch_STAR_.call(null,inst_19049);
var state_19068__$1 = state_19068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19068__$1,(22),inst_19051,inst_18999);
} else {
if((state_val_19069 === (11))){
var inst_19009 = (state_19068[(15)]);
var inst_19023 = (state_19068[(10)]);
var inst_19023__$1 = cljs.core.seq.call(null,inst_19009);
var state_19068__$1 = (function (){var statearr_19092 = state_19068;
(statearr_19092[(10)] = inst_19023__$1);

return statearr_19092;
})();
if(inst_19023__$1){
var statearr_19093_19139 = state_19068__$1;
(statearr_19093_19139[(1)] = (13));

} else {
var statearr_19094_19140 = state_19068__$1;
(statearr_19094_19140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (9))){
var inst_19045 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19095_19141 = state_19068__$1;
(statearr_19095_19141[(2)] = inst_19045);

(statearr_19095_19141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (5))){
var inst_19006 = cljs.core.deref.call(null,mults);
var inst_19007 = cljs.core.vals.call(null,inst_19006);
var inst_19008 = cljs.core.seq.call(null,inst_19007);
var inst_19009 = inst_19008;
var inst_19010 = null;
var inst_19011 = (0);
var inst_19012 = (0);
var state_19068__$1 = (function (){var statearr_19096 = state_19068;
(statearr_19096[(13)] = inst_19012);

(statearr_19096[(14)] = inst_19011);

(statearr_19096[(15)] = inst_19009);

(statearr_19096[(16)] = inst_19010);

return statearr_19096;
})();
var statearr_19097_19142 = state_19068__$1;
(statearr_19097_19142[(2)] = null);

(statearr_19097_19142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (14))){
var state_19068__$1 = state_19068;
var statearr_19101_19143 = state_19068__$1;
(statearr_19101_19143[(2)] = null);

(statearr_19101_19143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (16))){
var inst_19023 = (state_19068[(10)]);
var inst_19027 = cljs.core.chunk_first.call(null,inst_19023);
var inst_19028 = cljs.core.chunk_rest.call(null,inst_19023);
var inst_19029 = cljs.core.count.call(null,inst_19027);
var inst_19009 = inst_19028;
var inst_19010 = inst_19027;
var inst_19011 = inst_19029;
var inst_19012 = (0);
var state_19068__$1 = (function (){var statearr_19102 = state_19068;
(statearr_19102[(13)] = inst_19012);

(statearr_19102[(14)] = inst_19011);

(statearr_19102[(15)] = inst_19009);

(statearr_19102[(16)] = inst_19010);

return statearr_19102;
})();
var statearr_19103_19144 = state_19068__$1;
(statearr_19103_19144[(2)] = null);

(statearr_19103_19144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (10))){
var inst_19012 = (state_19068[(13)]);
var inst_19011 = (state_19068[(14)]);
var inst_19009 = (state_19068[(15)]);
var inst_19010 = (state_19068[(16)]);
var inst_19017 = cljs.core._nth.call(null,inst_19010,inst_19012);
var inst_19018 = cljs.core.async.muxch_STAR_.call(null,inst_19017);
var inst_19019 = cljs.core.async.close_BANG_.call(null,inst_19018);
var inst_19020 = (inst_19012 + (1));
var tmp19098 = inst_19011;
var tmp19099 = inst_19009;
var tmp19100 = inst_19010;
var inst_19009__$1 = tmp19099;
var inst_19010__$1 = tmp19100;
var inst_19011__$1 = tmp19098;
var inst_19012__$1 = inst_19020;
var state_19068__$1 = (function (){var statearr_19104 = state_19068;
(statearr_19104[(13)] = inst_19012__$1);

(statearr_19104[(17)] = inst_19019);

(statearr_19104[(14)] = inst_19011__$1);

(statearr_19104[(15)] = inst_19009__$1);

(statearr_19104[(16)] = inst_19010__$1);

return statearr_19104;
})();
var statearr_19105_19145 = state_19068__$1;
(statearr_19105_19145[(2)] = null);

(statearr_19105_19145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (18))){
var inst_19038 = (state_19068[(2)]);
var state_19068__$1 = state_19068;
var statearr_19106_19146 = state_19068__$1;
(statearr_19106_19146[(2)] = inst_19038);

(statearr_19106_19146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19069 === (8))){
var inst_19012 = (state_19068[(13)]);
var inst_19011 = (state_19068[(14)]);
var inst_19014 = (inst_19012 < inst_19011);
var inst_19015 = inst_19014;
var state_19068__$1 = state_19068;
if(cljs.core.truth_(inst_19015)){
var statearr_19107_19147 = state_19068__$1;
(statearr_19107_19147[(1)] = (10));

} else {
var statearr_19108_19148 = state_19068__$1;
(statearr_19108_19148[(1)] = (11));

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
});})(c__9944__auto___19120,mults,ensure_mult,p))
;
return ((function (switch__9879__auto__,c__9944__auto___19120,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19068){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19113){if((e19113 instanceof Object)){
var ex__9883__auto__ = e19113;
var statearr_19114_19149 = state_19068;
(statearr_19114_19149[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19150 = state_19068;
state_19068 = G__19150;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19120,mults,ensure_mult,p))
})();
var state__9946__auto__ = (function (){var statearr_19115 = f__9945__auto__.call(null);
(statearr_19115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19120);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19120,mults,ensure_mult,p))
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
var args19151 = [];
var len__6152__auto___19154 = arguments.length;
var i__6153__auto___19155 = (0);
while(true){
if((i__6153__auto___19155 < len__6152__auto___19154)){
args19151.push((arguments[i__6153__auto___19155]));

var G__19156 = (i__6153__auto___19155 + (1));
i__6153__auto___19155 = G__19156;
continue;
} else {
}
break;
}

var G__19153 = args19151.length;
switch (G__19153) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19151.length)].join('')));

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
var args19158 = [];
var len__6152__auto___19161 = arguments.length;
var i__6153__auto___19162 = (0);
while(true){
if((i__6153__auto___19162 < len__6152__auto___19161)){
args19158.push((arguments[i__6153__auto___19162]));

var G__19163 = (i__6153__auto___19162 + (1));
i__6153__auto___19162 = G__19163;
continue;
} else {
}
break;
}

var G__19160 = args19158.length;
switch (G__19160) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19158.length)].join('')));

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
var args19165 = [];
var len__6152__auto___19236 = arguments.length;
var i__6153__auto___19237 = (0);
while(true){
if((i__6153__auto___19237 < len__6152__auto___19236)){
args19165.push((arguments[i__6153__auto___19237]));

var G__19238 = (i__6153__auto___19237 + (1));
i__6153__auto___19237 = G__19238;
continue;
} else {
}
break;
}

var G__19167 = args19165.length;
switch (G__19167) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19165.length)].join('')));

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
var c__9944__auto___19240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19206){
var state_val_19207 = (state_19206[(1)]);
if((state_val_19207 === (7))){
var state_19206__$1 = state_19206;
var statearr_19208_19241 = state_19206__$1;
(statearr_19208_19241[(2)] = null);

(statearr_19208_19241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (1))){
var state_19206__$1 = state_19206;
var statearr_19209_19242 = state_19206__$1;
(statearr_19209_19242[(2)] = null);

(statearr_19209_19242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (4))){
var inst_19170 = (state_19206[(7)]);
var inst_19172 = (inst_19170 < cnt);
var state_19206__$1 = state_19206;
if(cljs.core.truth_(inst_19172)){
var statearr_19210_19243 = state_19206__$1;
(statearr_19210_19243[(1)] = (6));

} else {
var statearr_19211_19244 = state_19206__$1;
(statearr_19211_19244[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (15))){
var inst_19202 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19212_19245 = state_19206__$1;
(statearr_19212_19245[(2)] = inst_19202);

(statearr_19212_19245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (13))){
var inst_19195 = cljs.core.async.close_BANG_.call(null,out);
var state_19206__$1 = state_19206;
var statearr_19213_19246 = state_19206__$1;
(statearr_19213_19246[(2)] = inst_19195);

(statearr_19213_19246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (6))){
var state_19206__$1 = state_19206;
var statearr_19214_19247 = state_19206__$1;
(statearr_19214_19247[(2)] = null);

(statearr_19214_19247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (3))){
var inst_19204 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19206__$1,inst_19204);
} else {
if((state_val_19207 === (12))){
var inst_19192 = (state_19206[(8)]);
var inst_19192__$1 = (state_19206[(2)]);
var inst_19193 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19192__$1);
var state_19206__$1 = (function (){var statearr_19215 = state_19206;
(statearr_19215[(8)] = inst_19192__$1);

return statearr_19215;
})();
if(cljs.core.truth_(inst_19193)){
var statearr_19216_19248 = state_19206__$1;
(statearr_19216_19248[(1)] = (13));

} else {
var statearr_19217_19249 = state_19206__$1;
(statearr_19217_19249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (2))){
var inst_19169 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19170 = (0);
var state_19206__$1 = (function (){var statearr_19218 = state_19206;
(statearr_19218[(7)] = inst_19170);

(statearr_19218[(9)] = inst_19169);

return statearr_19218;
})();
var statearr_19219_19250 = state_19206__$1;
(statearr_19219_19250[(2)] = null);

(statearr_19219_19250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (11))){
var inst_19170 = (state_19206[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19206,(10),Object,null,(9));
var inst_19179 = chs__$1.call(null,inst_19170);
var inst_19180 = done.call(null,inst_19170);
var inst_19181 = cljs.core.async.take_BANG_.call(null,inst_19179,inst_19180);
var state_19206__$1 = state_19206;
var statearr_19220_19251 = state_19206__$1;
(statearr_19220_19251[(2)] = inst_19181);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19206__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (9))){
var inst_19170 = (state_19206[(7)]);
var inst_19183 = (state_19206[(2)]);
var inst_19184 = (inst_19170 + (1));
var inst_19170__$1 = inst_19184;
var state_19206__$1 = (function (){var statearr_19221 = state_19206;
(statearr_19221[(7)] = inst_19170__$1);

(statearr_19221[(10)] = inst_19183);

return statearr_19221;
})();
var statearr_19222_19252 = state_19206__$1;
(statearr_19222_19252[(2)] = null);

(statearr_19222_19252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (5))){
var inst_19190 = (state_19206[(2)]);
var state_19206__$1 = (function (){var statearr_19223 = state_19206;
(statearr_19223[(11)] = inst_19190);

return statearr_19223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19206__$1,(12),dchan);
} else {
if((state_val_19207 === (14))){
var inst_19192 = (state_19206[(8)]);
var inst_19197 = cljs.core.apply.call(null,f,inst_19192);
var state_19206__$1 = state_19206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19206__$1,(16),out,inst_19197);
} else {
if((state_val_19207 === (16))){
var inst_19199 = (state_19206[(2)]);
var state_19206__$1 = (function (){var statearr_19224 = state_19206;
(statearr_19224[(12)] = inst_19199);

return statearr_19224;
})();
var statearr_19225_19253 = state_19206__$1;
(statearr_19225_19253[(2)] = null);

(statearr_19225_19253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (10))){
var inst_19174 = (state_19206[(2)]);
var inst_19175 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19206__$1 = (function (){var statearr_19226 = state_19206;
(statearr_19226[(13)] = inst_19174);

return statearr_19226;
})();
var statearr_19227_19254 = state_19206__$1;
(statearr_19227_19254[(2)] = inst_19175);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19206__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19207 === (8))){
var inst_19188 = (state_19206[(2)]);
var state_19206__$1 = state_19206;
var statearr_19228_19255 = state_19206__$1;
(statearr_19228_19255[(2)] = inst_19188);

(statearr_19228_19255[(1)] = (5));


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
});})(c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9879__auto__,c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19232[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19232[(1)] = (1));

return statearr_19232;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19206){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19233){if((e19233 instanceof Object)){
var ex__9883__auto__ = e19233;
var statearr_19234_19256 = state_19206;
(statearr_19234_19256[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19257 = state_19206;
state_19206 = G__19257;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9946__auto__ = (function (){var statearr_19235 = f__9945__auto__.call(null);
(statearr_19235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19240);

return statearr_19235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19240,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19259 = [];
var len__6152__auto___19315 = arguments.length;
var i__6153__auto___19316 = (0);
while(true){
if((i__6153__auto___19316 < len__6152__auto___19315)){
args19259.push((arguments[i__6153__auto___19316]));

var G__19317 = (i__6153__auto___19316 + (1));
i__6153__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var G__19261 = args19259.length;
switch (G__19261) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19259.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19319,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19319,out){
return (function (state_19291){
var state_val_19292 = (state_19291[(1)]);
if((state_val_19292 === (7))){
var inst_19271 = (state_19291[(7)]);
var inst_19270 = (state_19291[(8)]);
var inst_19270__$1 = (state_19291[(2)]);
var inst_19271__$1 = cljs.core.nth.call(null,inst_19270__$1,(0),null);
var inst_19272 = cljs.core.nth.call(null,inst_19270__$1,(1),null);
var inst_19273 = (inst_19271__$1 == null);
var state_19291__$1 = (function (){var statearr_19293 = state_19291;
(statearr_19293[(7)] = inst_19271__$1);

(statearr_19293[(8)] = inst_19270__$1);

(statearr_19293[(9)] = inst_19272);

return statearr_19293;
})();
if(cljs.core.truth_(inst_19273)){
var statearr_19294_19320 = state_19291__$1;
(statearr_19294_19320[(1)] = (8));

} else {
var statearr_19295_19321 = state_19291__$1;
(statearr_19295_19321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (1))){
var inst_19262 = cljs.core.vec.call(null,chs);
var inst_19263 = inst_19262;
var state_19291__$1 = (function (){var statearr_19296 = state_19291;
(statearr_19296[(10)] = inst_19263);

return statearr_19296;
})();
var statearr_19297_19322 = state_19291__$1;
(statearr_19297_19322[(2)] = null);

(statearr_19297_19322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (4))){
var inst_19263 = (state_19291[(10)]);
var state_19291__$1 = state_19291;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19291__$1,(7),inst_19263);
} else {
if((state_val_19292 === (6))){
var inst_19287 = (state_19291[(2)]);
var state_19291__$1 = state_19291;
var statearr_19298_19323 = state_19291__$1;
(statearr_19298_19323[(2)] = inst_19287);

(statearr_19298_19323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (3))){
var inst_19289 = (state_19291[(2)]);
var state_19291__$1 = state_19291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19291__$1,inst_19289);
} else {
if((state_val_19292 === (2))){
var inst_19263 = (state_19291[(10)]);
var inst_19265 = cljs.core.count.call(null,inst_19263);
var inst_19266 = (inst_19265 > (0));
var state_19291__$1 = state_19291;
if(cljs.core.truth_(inst_19266)){
var statearr_19300_19324 = state_19291__$1;
(statearr_19300_19324[(1)] = (4));

} else {
var statearr_19301_19325 = state_19291__$1;
(statearr_19301_19325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (11))){
var inst_19263 = (state_19291[(10)]);
var inst_19280 = (state_19291[(2)]);
var tmp19299 = inst_19263;
var inst_19263__$1 = tmp19299;
var state_19291__$1 = (function (){var statearr_19302 = state_19291;
(statearr_19302[(10)] = inst_19263__$1);

(statearr_19302[(11)] = inst_19280);

return statearr_19302;
})();
var statearr_19303_19326 = state_19291__$1;
(statearr_19303_19326[(2)] = null);

(statearr_19303_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (9))){
var inst_19271 = (state_19291[(7)]);
var state_19291__$1 = state_19291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19291__$1,(11),out,inst_19271);
} else {
if((state_val_19292 === (5))){
var inst_19285 = cljs.core.async.close_BANG_.call(null,out);
var state_19291__$1 = state_19291;
var statearr_19304_19327 = state_19291__$1;
(statearr_19304_19327[(2)] = inst_19285);

(statearr_19304_19327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (10))){
var inst_19283 = (state_19291[(2)]);
var state_19291__$1 = state_19291;
var statearr_19305_19328 = state_19291__$1;
(statearr_19305_19328[(2)] = inst_19283);

(statearr_19305_19328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19292 === (8))){
var inst_19263 = (state_19291[(10)]);
var inst_19271 = (state_19291[(7)]);
var inst_19270 = (state_19291[(8)]);
var inst_19272 = (state_19291[(9)]);
var inst_19275 = (function (){var cs = inst_19263;
var vec__19268 = inst_19270;
var v = inst_19271;
var c = inst_19272;
return ((function (cs,vec__19268,v,c,inst_19263,inst_19271,inst_19270,inst_19272,state_val_19292,c__9944__auto___19319,out){
return (function (p1__19258_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19258_SHARP_);
});
;})(cs,vec__19268,v,c,inst_19263,inst_19271,inst_19270,inst_19272,state_val_19292,c__9944__auto___19319,out))
})();
var inst_19276 = cljs.core.filterv.call(null,inst_19275,inst_19263);
var inst_19263__$1 = inst_19276;
var state_19291__$1 = (function (){var statearr_19306 = state_19291;
(statearr_19306[(10)] = inst_19263__$1);

return statearr_19306;
})();
var statearr_19307_19329 = state_19291__$1;
(statearr_19307_19329[(2)] = null);

(statearr_19307_19329[(1)] = (2));


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
});})(c__9944__auto___19319,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19319,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19311[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19311[(1)] = (1));

return statearr_19311;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19291){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19312){if((e19312 instanceof Object)){
var ex__9883__auto__ = e19312;
var statearr_19313_19330 = state_19291;
(statearr_19313_19330[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19331 = state_19291;
state_19291 = G__19331;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19319,out))
})();
var state__9946__auto__ = (function (){var statearr_19314 = f__9945__auto__.call(null);
(statearr_19314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19319);

return statearr_19314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19319,out))
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
var args19332 = [];
var len__6152__auto___19381 = arguments.length;
var i__6153__auto___19382 = (0);
while(true){
if((i__6153__auto___19382 < len__6152__auto___19381)){
args19332.push((arguments[i__6153__auto___19382]));

var G__19383 = (i__6153__auto___19382 + (1));
i__6153__auto___19382 = G__19383;
continue;
} else {
}
break;
}

var G__19334 = args19332.length;
switch (G__19334) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19332.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19385,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19385,out){
return (function (state_19358){
var state_val_19359 = (state_19358[(1)]);
if((state_val_19359 === (7))){
var inst_19340 = (state_19358[(7)]);
var inst_19340__$1 = (state_19358[(2)]);
var inst_19341 = (inst_19340__$1 == null);
var inst_19342 = cljs.core.not.call(null,inst_19341);
var state_19358__$1 = (function (){var statearr_19360 = state_19358;
(statearr_19360[(7)] = inst_19340__$1);

return statearr_19360;
})();
if(inst_19342){
var statearr_19361_19386 = state_19358__$1;
(statearr_19361_19386[(1)] = (8));

} else {
var statearr_19362_19387 = state_19358__$1;
(statearr_19362_19387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (1))){
var inst_19335 = (0);
var state_19358__$1 = (function (){var statearr_19363 = state_19358;
(statearr_19363[(8)] = inst_19335);

return statearr_19363;
})();
var statearr_19364_19388 = state_19358__$1;
(statearr_19364_19388[(2)] = null);

(statearr_19364_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (4))){
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19358__$1,(7),ch);
} else {
if((state_val_19359 === (6))){
var inst_19353 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19365_19389 = state_19358__$1;
(statearr_19365_19389[(2)] = inst_19353);

(statearr_19365_19389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (3))){
var inst_19355 = (state_19358[(2)]);
var inst_19356 = cljs.core.async.close_BANG_.call(null,out);
var state_19358__$1 = (function (){var statearr_19366 = state_19358;
(statearr_19366[(9)] = inst_19355);

return statearr_19366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19358__$1,inst_19356);
} else {
if((state_val_19359 === (2))){
var inst_19335 = (state_19358[(8)]);
var inst_19337 = (inst_19335 < n);
var state_19358__$1 = state_19358;
if(cljs.core.truth_(inst_19337)){
var statearr_19367_19390 = state_19358__$1;
(statearr_19367_19390[(1)] = (4));

} else {
var statearr_19368_19391 = state_19358__$1;
(statearr_19368_19391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (11))){
var inst_19335 = (state_19358[(8)]);
var inst_19345 = (state_19358[(2)]);
var inst_19346 = (inst_19335 + (1));
var inst_19335__$1 = inst_19346;
var state_19358__$1 = (function (){var statearr_19369 = state_19358;
(statearr_19369[(10)] = inst_19345);

(statearr_19369[(8)] = inst_19335__$1);

return statearr_19369;
})();
var statearr_19370_19392 = state_19358__$1;
(statearr_19370_19392[(2)] = null);

(statearr_19370_19392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (9))){
var state_19358__$1 = state_19358;
var statearr_19371_19393 = state_19358__$1;
(statearr_19371_19393[(2)] = null);

(statearr_19371_19393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (5))){
var state_19358__$1 = state_19358;
var statearr_19372_19394 = state_19358__$1;
(statearr_19372_19394[(2)] = null);

(statearr_19372_19394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (10))){
var inst_19350 = (state_19358[(2)]);
var state_19358__$1 = state_19358;
var statearr_19373_19395 = state_19358__$1;
(statearr_19373_19395[(2)] = inst_19350);

(statearr_19373_19395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19359 === (8))){
var inst_19340 = (state_19358[(7)]);
var state_19358__$1 = state_19358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19358__$1,(11),out,inst_19340);
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
});})(c__9944__auto___19385,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19385,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19377[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19377[(1)] = (1));

return statearr_19377;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19358){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19378){if((e19378 instanceof Object)){
var ex__9883__auto__ = e19378;
var statearr_19379_19396 = state_19358;
(statearr_19379_19396[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19397 = state_19358;
state_19358 = G__19397;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19385,out))
})();
var state__9946__auto__ = (function (){var statearr_19380 = f__9945__auto__.call(null);
(statearr_19380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19385);

return statearr_19380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19385,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19405 = (function (map_LT_,f,ch,meta19406){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19406 = meta19406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19407,meta19406__$1){
var self__ = this;
var _19407__$1 = this;
return (new cljs.core.async.t_cljs$core$async19405(self__.map_LT_,self__.f,self__.ch,meta19406__$1));
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19407){
var self__ = this;
var _19407__$1 = this;
return self__.meta19406;
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19408 = (function (map_LT_,f,ch,meta19406,_,fn1,meta19409){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19406 = meta19406;
this._ = _;
this.fn1 = fn1;
this.meta19409 = meta19409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19410,meta19409__$1){
var self__ = this;
var _19410__$1 = this;
return (new cljs.core.async.t_cljs$core$async19408(self__.map_LT_,self__.f,self__.ch,self__.meta19406,self__._,self__.fn1,meta19409__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19410){
var self__ = this;
var _19410__$1 = this;
return self__.meta19409;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19408.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19398_SHARP_){
return f1.call(null,(((p1__19398_SHARP_ == null))?null:self__.f.call(null,p1__19398_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19408.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19406","meta19406",1218431652,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19405","cljs.core.async/t_cljs$core$async19405",646918458,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19409","meta19409",76476260,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19408";

cljs.core.async.t_cljs$core$async19408.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19408");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19408 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19408(map_LT___$1,f__$1,ch__$1,meta19406__$1,___$2,fn1__$1,meta19409){
return (new cljs.core.async.t_cljs$core$async19408(map_LT___$1,f__$1,ch__$1,meta19406__$1,___$2,fn1__$1,meta19409));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19408(self__.map_LT_,self__.f,self__.ch,self__.meta19406,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19406","meta19406",1218431652,null)], null);
});

cljs.core.async.t_cljs$core$async19405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19405";

cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19405");
});

cljs.core.async.__GT_t_cljs$core$async19405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19405(map_LT___$1,f__$1,ch__$1,meta19406){
return (new cljs.core.async.t_cljs$core$async19405(map_LT___$1,f__$1,ch__$1,meta19406));
});

}

return (new cljs.core.async.t_cljs$core$async19405(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19414 = (function (map_GT_,f,ch,meta19415){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19415 = meta19415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19416,meta19415__$1){
var self__ = this;
var _19416__$1 = this;
return (new cljs.core.async.t_cljs$core$async19414(self__.map_GT_,self__.f,self__.ch,meta19415__$1));
});

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19416){
var self__ = this;
var _19416__$1 = this;
return self__.meta19415;
});

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19415","meta19415",1970918886,null)], null);
});

cljs.core.async.t_cljs$core$async19414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19414";

cljs.core.async.t_cljs$core$async19414.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19414");
});

cljs.core.async.__GT_t_cljs$core$async19414 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19414(map_GT___$1,f__$1,ch__$1,meta19415){
return (new cljs.core.async.t_cljs$core$async19414(map_GT___$1,f__$1,ch__$1,meta19415));
});

}

return (new cljs.core.async.t_cljs$core$async19414(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19420 = (function (filter_GT_,p,ch,meta19421){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19421 = meta19421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19422,meta19421__$1){
var self__ = this;
var _19422__$1 = this;
return (new cljs.core.async.t_cljs$core$async19420(self__.filter_GT_,self__.p,self__.ch,meta19421__$1));
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19422){
var self__ = this;
var _19422__$1 = this;
return self__.meta19421;
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19421","meta19421",1915013714,null)], null);
});

cljs.core.async.t_cljs$core$async19420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19420";

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19420");
});

cljs.core.async.__GT_t_cljs$core$async19420 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19420(filter_GT___$1,p__$1,ch__$1,meta19421){
return (new cljs.core.async.t_cljs$core$async19420(filter_GT___$1,p__$1,ch__$1,meta19421));
});

}

return (new cljs.core.async.t_cljs$core$async19420(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19423 = [];
var len__6152__auto___19467 = arguments.length;
var i__6153__auto___19468 = (0);
while(true){
if((i__6153__auto___19468 < len__6152__auto___19467)){
args19423.push((arguments[i__6153__auto___19468]));

var G__19469 = (i__6153__auto___19468 + (1));
i__6153__auto___19468 = G__19469;
continue;
} else {
}
break;
}

var G__19425 = args19423.length;
switch (G__19425) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19423.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19471,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19471,out){
return (function (state_19446){
var state_val_19447 = (state_19446[(1)]);
if((state_val_19447 === (7))){
var inst_19442 = (state_19446[(2)]);
var state_19446__$1 = state_19446;
var statearr_19448_19472 = state_19446__$1;
(statearr_19448_19472[(2)] = inst_19442);

(statearr_19448_19472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (1))){
var state_19446__$1 = state_19446;
var statearr_19449_19473 = state_19446__$1;
(statearr_19449_19473[(2)] = null);

(statearr_19449_19473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (4))){
var inst_19428 = (state_19446[(7)]);
var inst_19428__$1 = (state_19446[(2)]);
var inst_19429 = (inst_19428__$1 == null);
var state_19446__$1 = (function (){var statearr_19450 = state_19446;
(statearr_19450[(7)] = inst_19428__$1);

return statearr_19450;
})();
if(cljs.core.truth_(inst_19429)){
var statearr_19451_19474 = state_19446__$1;
(statearr_19451_19474[(1)] = (5));

} else {
var statearr_19452_19475 = state_19446__$1;
(statearr_19452_19475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (6))){
var inst_19428 = (state_19446[(7)]);
var inst_19433 = p.call(null,inst_19428);
var state_19446__$1 = state_19446;
if(cljs.core.truth_(inst_19433)){
var statearr_19453_19476 = state_19446__$1;
(statearr_19453_19476[(1)] = (8));

} else {
var statearr_19454_19477 = state_19446__$1;
(statearr_19454_19477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (3))){
var inst_19444 = (state_19446[(2)]);
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19446__$1,inst_19444);
} else {
if((state_val_19447 === (2))){
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19446__$1,(4),ch);
} else {
if((state_val_19447 === (11))){
var inst_19436 = (state_19446[(2)]);
var state_19446__$1 = state_19446;
var statearr_19455_19478 = state_19446__$1;
(statearr_19455_19478[(2)] = inst_19436);

(statearr_19455_19478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (9))){
var state_19446__$1 = state_19446;
var statearr_19456_19479 = state_19446__$1;
(statearr_19456_19479[(2)] = null);

(statearr_19456_19479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (5))){
var inst_19431 = cljs.core.async.close_BANG_.call(null,out);
var state_19446__$1 = state_19446;
var statearr_19457_19480 = state_19446__$1;
(statearr_19457_19480[(2)] = inst_19431);

(statearr_19457_19480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (10))){
var inst_19439 = (state_19446[(2)]);
var state_19446__$1 = (function (){var statearr_19458 = state_19446;
(statearr_19458[(8)] = inst_19439);

return statearr_19458;
})();
var statearr_19459_19481 = state_19446__$1;
(statearr_19459_19481[(2)] = null);

(statearr_19459_19481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19447 === (8))){
var inst_19428 = (state_19446[(7)]);
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19446__$1,(11),out,inst_19428);
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
});})(c__9944__auto___19471,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19471,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19463 = [null,null,null,null,null,null,null,null,null];
(statearr_19463[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19463[(1)] = (1));

return statearr_19463;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19446){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19464){if((e19464 instanceof Object)){
var ex__9883__auto__ = e19464;
var statearr_19465_19482 = state_19446;
(statearr_19465_19482[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19483 = state_19446;
state_19446 = G__19483;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19471,out))
})();
var state__9946__auto__ = (function (){var statearr_19466 = f__9945__auto__.call(null);
(statearr_19466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19471);

return statearr_19466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19471,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19484 = [];
var len__6152__auto___19487 = arguments.length;
var i__6153__auto___19488 = (0);
while(true){
if((i__6153__auto___19488 < len__6152__auto___19487)){
args19484.push((arguments[i__6153__auto___19488]));

var G__19489 = (i__6153__auto___19488 + (1));
i__6153__auto___19488 = G__19489;
continue;
} else {
}
break;
}

var G__19486 = args19484.length;
switch (G__19486) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19484.length)].join('')));

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
var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__){
return (function (state_19656){
var state_val_19657 = (state_19656[(1)]);
if((state_val_19657 === (7))){
var inst_19652 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19658_19699 = state_19656__$1;
(statearr_19658_19699[(2)] = inst_19652);

(statearr_19658_19699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (20))){
var inst_19622 = (state_19656[(7)]);
var inst_19633 = (state_19656[(2)]);
var inst_19634 = cljs.core.next.call(null,inst_19622);
var inst_19608 = inst_19634;
var inst_19609 = null;
var inst_19610 = (0);
var inst_19611 = (0);
var state_19656__$1 = (function (){var statearr_19659 = state_19656;
(statearr_19659[(8)] = inst_19609);

(statearr_19659[(9)] = inst_19610);

(statearr_19659[(10)] = inst_19608);

(statearr_19659[(11)] = inst_19611);

(statearr_19659[(12)] = inst_19633);

return statearr_19659;
})();
var statearr_19660_19700 = state_19656__$1;
(statearr_19660_19700[(2)] = null);

(statearr_19660_19700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (1))){
var state_19656__$1 = state_19656;
var statearr_19661_19701 = state_19656__$1;
(statearr_19661_19701[(2)] = null);

(statearr_19661_19701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (4))){
var inst_19597 = (state_19656[(13)]);
var inst_19597__$1 = (state_19656[(2)]);
var inst_19598 = (inst_19597__$1 == null);
var state_19656__$1 = (function (){var statearr_19662 = state_19656;
(statearr_19662[(13)] = inst_19597__$1);

return statearr_19662;
})();
if(cljs.core.truth_(inst_19598)){
var statearr_19663_19702 = state_19656__$1;
(statearr_19663_19702[(1)] = (5));

} else {
var statearr_19664_19703 = state_19656__$1;
(statearr_19664_19703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (15))){
var state_19656__$1 = state_19656;
var statearr_19668_19704 = state_19656__$1;
(statearr_19668_19704[(2)] = null);

(statearr_19668_19704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (21))){
var state_19656__$1 = state_19656;
var statearr_19669_19705 = state_19656__$1;
(statearr_19669_19705[(2)] = null);

(statearr_19669_19705[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (13))){
var inst_19609 = (state_19656[(8)]);
var inst_19610 = (state_19656[(9)]);
var inst_19608 = (state_19656[(10)]);
var inst_19611 = (state_19656[(11)]);
var inst_19618 = (state_19656[(2)]);
var inst_19619 = (inst_19611 + (1));
var tmp19665 = inst_19609;
var tmp19666 = inst_19610;
var tmp19667 = inst_19608;
var inst_19608__$1 = tmp19667;
var inst_19609__$1 = tmp19665;
var inst_19610__$1 = tmp19666;
var inst_19611__$1 = inst_19619;
var state_19656__$1 = (function (){var statearr_19670 = state_19656;
(statearr_19670[(8)] = inst_19609__$1);

(statearr_19670[(9)] = inst_19610__$1);

(statearr_19670[(10)] = inst_19608__$1);

(statearr_19670[(11)] = inst_19611__$1);

(statearr_19670[(14)] = inst_19618);

return statearr_19670;
})();
var statearr_19671_19706 = state_19656__$1;
(statearr_19671_19706[(2)] = null);

(statearr_19671_19706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (22))){
var state_19656__$1 = state_19656;
var statearr_19672_19707 = state_19656__$1;
(statearr_19672_19707[(2)] = null);

(statearr_19672_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (6))){
var inst_19597 = (state_19656[(13)]);
var inst_19606 = f.call(null,inst_19597);
var inst_19607 = cljs.core.seq.call(null,inst_19606);
var inst_19608 = inst_19607;
var inst_19609 = null;
var inst_19610 = (0);
var inst_19611 = (0);
var state_19656__$1 = (function (){var statearr_19673 = state_19656;
(statearr_19673[(8)] = inst_19609);

(statearr_19673[(9)] = inst_19610);

(statearr_19673[(10)] = inst_19608);

(statearr_19673[(11)] = inst_19611);

return statearr_19673;
})();
var statearr_19674_19708 = state_19656__$1;
(statearr_19674_19708[(2)] = null);

(statearr_19674_19708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (17))){
var inst_19622 = (state_19656[(7)]);
var inst_19626 = cljs.core.chunk_first.call(null,inst_19622);
var inst_19627 = cljs.core.chunk_rest.call(null,inst_19622);
var inst_19628 = cljs.core.count.call(null,inst_19626);
var inst_19608 = inst_19627;
var inst_19609 = inst_19626;
var inst_19610 = inst_19628;
var inst_19611 = (0);
var state_19656__$1 = (function (){var statearr_19675 = state_19656;
(statearr_19675[(8)] = inst_19609);

(statearr_19675[(9)] = inst_19610);

(statearr_19675[(10)] = inst_19608);

(statearr_19675[(11)] = inst_19611);

return statearr_19675;
})();
var statearr_19676_19709 = state_19656__$1;
(statearr_19676_19709[(2)] = null);

(statearr_19676_19709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (3))){
var inst_19654 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19656__$1,inst_19654);
} else {
if((state_val_19657 === (12))){
var inst_19642 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19677_19710 = state_19656__$1;
(statearr_19677_19710[(2)] = inst_19642);

(statearr_19677_19710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (2))){
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19656__$1,(4),in$);
} else {
if((state_val_19657 === (23))){
var inst_19650 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19678_19711 = state_19656__$1;
(statearr_19678_19711[(2)] = inst_19650);

(statearr_19678_19711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (19))){
var inst_19637 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19679_19712 = state_19656__$1;
(statearr_19679_19712[(2)] = inst_19637);

(statearr_19679_19712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (11))){
var inst_19622 = (state_19656[(7)]);
var inst_19608 = (state_19656[(10)]);
var inst_19622__$1 = cljs.core.seq.call(null,inst_19608);
var state_19656__$1 = (function (){var statearr_19680 = state_19656;
(statearr_19680[(7)] = inst_19622__$1);

return statearr_19680;
})();
if(inst_19622__$1){
var statearr_19681_19713 = state_19656__$1;
(statearr_19681_19713[(1)] = (14));

} else {
var statearr_19682_19714 = state_19656__$1;
(statearr_19682_19714[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (9))){
var inst_19644 = (state_19656[(2)]);
var inst_19645 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19656__$1 = (function (){var statearr_19683 = state_19656;
(statearr_19683[(15)] = inst_19644);

return statearr_19683;
})();
if(cljs.core.truth_(inst_19645)){
var statearr_19684_19715 = state_19656__$1;
(statearr_19684_19715[(1)] = (21));

} else {
var statearr_19685_19716 = state_19656__$1;
(statearr_19685_19716[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (5))){
var inst_19600 = cljs.core.async.close_BANG_.call(null,out);
var state_19656__$1 = state_19656;
var statearr_19686_19717 = state_19656__$1;
(statearr_19686_19717[(2)] = inst_19600);

(statearr_19686_19717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (14))){
var inst_19622 = (state_19656[(7)]);
var inst_19624 = cljs.core.chunked_seq_QMARK_.call(null,inst_19622);
var state_19656__$1 = state_19656;
if(inst_19624){
var statearr_19687_19718 = state_19656__$1;
(statearr_19687_19718[(1)] = (17));

} else {
var statearr_19688_19719 = state_19656__$1;
(statearr_19688_19719[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (16))){
var inst_19640 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19689_19720 = state_19656__$1;
(statearr_19689_19720[(2)] = inst_19640);

(statearr_19689_19720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (10))){
var inst_19609 = (state_19656[(8)]);
var inst_19611 = (state_19656[(11)]);
var inst_19616 = cljs.core._nth.call(null,inst_19609,inst_19611);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19656__$1,(13),out,inst_19616);
} else {
if((state_val_19657 === (18))){
var inst_19622 = (state_19656[(7)]);
var inst_19631 = cljs.core.first.call(null,inst_19622);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19656__$1,(20),out,inst_19631);
} else {
if((state_val_19657 === (8))){
var inst_19610 = (state_19656[(9)]);
var inst_19611 = (state_19656[(11)]);
var inst_19613 = (inst_19611 < inst_19610);
var inst_19614 = inst_19613;
var state_19656__$1 = state_19656;
if(cljs.core.truth_(inst_19614)){
var statearr_19690_19721 = state_19656__$1;
(statearr_19690_19721[(1)] = (10));

} else {
var statearr_19691_19722 = state_19656__$1;
(statearr_19691_19722[(1)] = (11));

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
});})(c__9944__auto__))
;
return ((function (switch__9879__auto__,c__9944__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_19695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19695[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__);

(statearr_19695[(1)] = (1));

return statearr_19695;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1 = (function (state_19656){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19696){if((e19696 instanceof Object)){
var ex__9883__auto__ = e19696;
var statearr_19697_19723 = state_19656;
(statearr_19697_19723[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19724 = state_19656;
state_19656 = G__19724;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__ = function(state_19656){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1.call(this,state_19656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_19698 = f__9945__auto__.call(null);
(statearr_19698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_19698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__))
);

return c__9944__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19725 = [];
var len__6152__auto___19728 = arguments.length;
var i__6153__auto___19729 = (0);
while(true){
if((i__6153__auto___19729 < len__6152__auto___19728)){
args19725.push((arguments[i__6153__auto___19729]));

var G__19730 = (i__6153__auto___19729 + (1));
i__6153__auto___19729 = G__19730;
continue;
} else {
}
break;
}

var G__19727 = args19725.length;
switch (G__19727) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19725.length)].join('')));

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
var args19732 = [];
var len__6152__auto___19735 = arguments.length;
var i__6153__auto___19736 = (0);
while(true){
if((i__6153__auto___19736 < len__6152__auto___19735)){
args19732.push((arguments[i__6153__auto___19736]));

var G__19737 = (i__6153__auto___19736 + (1));
i__6153__auto___19736 = G__19737;
continue;
} else {
}
break;
}

var G__19734 = args19732.length;
switch (G__19734) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19732.length)].join('')));

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
var args19739 = [];
var len__6152__auto___19790 = arguments.length;
var i__6153__auto___19791 = (0);
while(true){
if((i__6153__auto___19791 < len__6152__auto___19790)){
args19739.push((arguments[i__6153__auto___19791]));

var G__19792 = (i__6153__auto___19791 + (1));
i__6153__auto___19791 = G__19792;
continue;
} else {
}
break;
}

var G__19741 = args19739.length;
switch (G__19741) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19739.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19794,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19794,out){
return (function (state_19765){
var state_val_19766 = (state_19765[(1)]);
if((state_val_19766 === (7))){
var inst_19760 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19767_19795 = state_19765__$1;
(statearr_19767_19795[(2)] = inst_19760);

(statearr_19767_19795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (1))){
var inst_19742 = null;
var state_19765__$1 = (function (){var statearr_19768 = state_19765;
(statearr_19768[(7)] = inst_19742);

return statearr_19768;
})();
var statearr_19769_19796 = state_19765__$1;
(statearr_19769_19796[(2)] = null);

(statearr_19769_19796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (4))){
var inst_19745 = (state_19765[(8)]);
var inst_19745__$1 = (state_19765[(2)]);
var inst_19746 = (inst_19745__$1 == null);
var inst_19747 = cljs.core.not.call(null,inst_19746);
var state_19765__$1 = (function (){var statearr_19770 = state_19765;
(statearr_19770[(8)] = inst_19745__$1);

return statearr_19770;
})();
if(inst_19747){
var statearr_19771_19797 = state_19765__$1;
(statearr_19771_19797[(1)] = (5));

} else {
var statearr_19772_19798 = state_19765__$1;
(statearr_19772_19798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (6))){
var state_19765__$1 = state_19765;
var statearr_19773_19799 = state_19765__$1;
(statearr_19773_19799[(2)] = null);

(statearr_19773_19799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (3))){
var inst_19762 = (state_19765[(2)]);
var inst_19763 = cljs.core.async.close_BANG_.call(null,out);
var state_19765__$1 = (function (){var statearr_19774 = state_19765;
(statearr_19774[(9)] = inst_19762);

return statearr_19774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19765__$1,inst_19763);
} else {
if((state_val_19766 === (2))){
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19765__$1,(4),ch);
} else {
if((state_val_19766 === (11))){
var inst_19745 = (state_19765[(8)]);
var inst_19754 = (state_19765[(2)]);
var inst_19742 = inst_19745;
var state_19765__$1 = (function (){var statearr_19775 = state_19765;
(statearr_19775[(10)] = inst_19754);

(statearr_19775[(7)] = inst_19742);

return statearr_19775;
})();
var statearr_19776_19800 = state_19765__$1;
(statearr_19776_19800[(2)] = null);

(statearr_19776_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (9))){
var inst_19745 = (state_19765[(8)]);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19765__$1,(11),out,inst_19745);
} else {
if((state_val_19766 === (5))){
var inst_19745 = (state_19765[(8)]);
var inst_19742 = (state_19765[(7)]);
var inst_19749 = cljs.core._EQ_.call(null,inst_19745,inst_19742);
var state_19765__$1 = state_19765;
if(inst_19749){
var statearr_19778_19801 = state_19765__$1;
(statearr_19778_19801[(1)] = (8));

} else {
var statearr_19779_19802 = state_19765__$1;
(statearr_19779_19802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (10))){
var inst_19757 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19780_19803 = state_19765__$1;
(statearr_19780_19803[(2)] = inst_19757);

(statearr_19780_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (8))){
var inst_19742 = (state_19765[(7)]);
var tmp19777 = inst_19742;
var inst_19742__$1 = tmp19777;
var state_19765__$1 = (function (){var statearr_19781 = state_19765;
(statearr_19781[(7)] = inst_19742__$1);

return statearr_19781;
})();
var statearr_19782_19804 = state_19765__$1;
(statearr_19782_19804[(2)] = null);

(statearr_19782_19804[(1)] = (2));


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
});})(c__9944__auto___19794,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19794,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19786[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19786[(1)] = (1));

return statearr_19786;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19765){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19787){if((e19787 instanceof Object)){
var ex__9883__auto__ = e19787;
var statearr_19788_19805 = state_19765;
(statearr_19788_19805[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_19765;
state_19765 = G__19806;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19794,out))
})();
var state__9946__auto__ = (function (){var statearr_19789 = f__9945__auto__.call(null);
(statearr_19789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19794);

return statearr_19789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19794,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19807 = [];
var len__6152__auto___19877 = arguments.length;
var i__6153__auto___19878 = (0);
while(true){
if((i__6153__auto___19878 < len__6152__auto___19877)){
args19807.push((arguments[i__6153__auto___19878]));

var G__19879 = (i__6153__auto___19878 + (1));
i__6153__auto___19878 = G__19879;
continue;
} else {
}
break;
}

var G__19809 = args19807.length;
switch (G__19809) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19807.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19881,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19881,out){
return (function (state_19847){
var state_val_19848 = (state_19847[(1)]);
if((state_val_19848 === (7))){
var inst_19843 = (state_19847[(2)]);
var state_19847__$1 = state_19847;
var statearr_19849_19882 = state_19847__$1;
(statearr_19849_19882[(2)] = inst_19843);

(statearr_19849_19882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (1))){
var inst_19810 = (new Array(n));
var inst_19811 = inst_19810;
var inst_19812 = (0);
var state_19847__$1 = (function (){var statearr_19850 = state_19847;
(statearr_19850[(7)] = inst_19812);

(statearr_19850[(8)] = inst_19811);

return statearr_19850;
})();
var statearr_19851_19883 = state_19847__$1;
(statearr_19851_19883[(2)] = null);

(statearr_19851_19883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (4))){
var inst_19815 = (state_19847[(9)]);
var inst_19815__$1 = (state_19847[(2)]);
var inst_19816 = (inst_19815__$1 == null);
var inst_19817 = cljs.core.not.call(null,inst_19816);
var state_19847__$1 = (function (){var statearr_19852 = state_19847;
(statearr_19852[(9)] = inst_19815__$1);

return statearr_19852;
})();
if(inst_19817){
var statearr_19853_19884 = state_19847__$1;
(statearr_19853_19884[(1)] = (5));

} else {
var statearr_19854_19885 = state_19847__$1;
(statearr_19854_19885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (15))){
var inst_19837 = (state_19847[(2)]);
var state_19847__$1 = state_19847;
var statearr_19855_19886 = state_19847__$1;
(statearr_19855_19886[(2)] = inst_19837);

(statearr_19855_19886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (13))){
var state_19847__$1 = state_19847;
var statearr_19856_19887 = state_19847__$1;
(statearr_19856_19887[(2)] = null);

(statearr_19856_19887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (6))){
var inst_19812 = (state_19847[(7)]);
var inst_19833 = (inst_19812 > (0));
var state_19847__$1 = state_19847;
if(cljs.core.truth_(inst_19833)){
var statearr_19857_19888 = state_19847__$1;
(statearr_19857_19888[(1)] = (12));

} else {
var statearr_19858_19889 = state_19847__$1;
(statearr_19858_19889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (3))){
var inst_19845 = (state_19847[(2)]);
var state_19847__$1 = state_19847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19847__$1,inst_19845);
} else {
if((state_val_19848 === (12))){
var inst_19811 = (state_19847[(8)]);
var inst_19835 = cljs.core.vec.call(null,inst_19811);
var state_19847__$1 = state_19847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19847__$1,(15),out,inst_19835);
} else {
if((state_val_19848 === (2))){
var state_19847__$1 = state_19847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19847__$1,(4),ch);
} else {
if((state_val_19848 === (11))){
var inst_19827 = (state_19847[(2)]);
var inst_19828 = (new Array(n));
var inst_19811 = inst_19828;
var inst_19812 = (0);
var state_19847__$1 = (function (){var statearr_19859 = state_19847;
(statearr_19859[(10)] = inst_19827);

(statearr_19859[(7)] = inst_19812);

(statearr_19859[(8)] = inst_19811);

return statearr_19859;
})();
var statearr_19860_19890 = state_19847__$1;
(statearr_19860_19890[(2)] = null);

(statearr_19860_19890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (9))){
var inst_19811 = (state_19847[(8)]);
var inst_19825 = cljs.core.vec.call(null,inst_19811);
var state_19847__$1 = state_19847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19847__$1,(11),out,inst_19825);
} else {
if((state_val_19848 === (5))){
var inst_19815 = (state_19847[(9)]);
var inst_19820 = (state_19847[(11)]);
var inst_19812 = (state_19847[(7)]);
var inst_19811 = (state_19847[(8)]);
var inst_19819 = (inst_19811[inst_19812] = inst_19815);
var inst_19820__$1 = (inst_19812 + (1));
var inst_19821 = (inst_19820__$1 < n);
var state_19847__$1 = (function (){var statearr_19861 = state_19847;
(statearr_19861[(11)] = inst_19820__$1);

(statearr_19861[(12)] = inst_19819);

return statearr_19861;
})();
if(cljs.core.truth_(inst_19821)){
var statearr_19862_19891 = state_19847__$1;
(statearr_19862_19891[(1)] = (8));

} else {
var statearr_19863_19892 = state_19847__$1;
(statearr_19863_19892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (14))){
var inst_19840 = (state_19847[(2)]);
var inst_19841 = cljs.core.async.close_BANG_.call(null,out);
var state_19847__$1 = (function (){var statearr_19865 = state_19847;
(statearr_19865[(13)] = inst_19840);

return statearr_19865;
})();
var statearr_19866_19893 = state_19847__$1;
(statearr_19866_19893[(2)] = inst_19841);

(statearr_19866_19893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (10))){
var inst_19831 = (state_19847[(2)]);
var state_19847__$1 = state_19847;
var statearr_19867_19894 = state_19847__$1;
(statearr_19867_19894[(2)] = inst_19831);

(statearr_19867_19894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19848 === (8))){
var inst_19820 = (state_19847[(11)]);
var inst_19811 = (state_19847[(8)]);
var tmp19864 = inst_19811;
var inst_19811__$1 = tmp19864;
var inst_19812 = inst_19820;
var state_19847__$1 = (function (){var statearr_19868 = state_19847;
(statearr_19868[(7)] = inst_19812);

(statearr_19868[(8)] = inst_19811__$1);

return statearr_19868;
})();
var statearr_19869_19895 = state_19847__$1;
(statearr_19869_19895[(2)] = null);

(statearr_19869_19895[(1)] = (2));


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
});})(c__9944__auto___19881,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19881,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19873[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19873[(1)] = (1));

return statearr_19873;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19847){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19874){if((e19874 instanceof Object)){
var ex__9883__auto__ = e19874;
var statearr_19875_19896 = state_19847;
(statearr_19875_19896[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19897 = state_19847;
state_19847 = G__19897;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19881,out))
})();
var state__9946__auto__ = (function (){var statearr_19876 = f__9945__auto__.call(null);
(statearr_19876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19881);

return statearr_19876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19881,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19898 = [];
var len__6152__auto___19972 = arguments.length;
var i__6153__auto___19973 = (0);
while(true){
if((i__6153__auto___19973 < len__6152__auto___19972)){
args19898.push((arguments[i__6153__auto___19973]));

var G__19974 = (i__6153__auto___19973 + (1));
i__6153__auto___19973 = G__19974;
continue;
} else {
}
break;
}

var G__19900 = args19898.length;
switch (G__19900) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19898.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19976,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19976,out){
return (function (state_19942){
var state_val_19943 = (state_19942[(1)]);
if((state_val_19943 === (7))){
var inst_19938 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19944_19977 = state_19942__$1;
(statearr_19944_19977[(2)] = inst_19938);

(statearr_19944_19977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (1))){
var inst_19901 = [];
var inst_19902 = inst_19901;
var inst_19903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19942__$1 = (function (){var statearr_19945 = state_19942;
(statearr_19945[(7)] = inst_19903);

(statearr_19945[(8)] = inst_19902);

return statearr_19945;
})();
var statearr_19946_19978 = state_19942__$1;
(statearr_19946_19978[(2)] = null);

(statearr_19946_19978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (4))){
var inst_19906 = (state_19942[(9)]);
var inst_19906__$1 = (state_19942[(2)]);
var inst_19907 = (inst_19906__$1 == null);
var inst_19908 = cljs.core.not.call(null,inst_19907);
var state_19942__$1 = (function (){var statearr_19947 = state_19942;
(statearr_19947[(9)] = inst_19906__$1);

return statearr_19947;
})();
if(inst_19908){
var statearr_19948_19979 = state_19942__$1;
(statearr_19948_19979[(1)] = (5));

} else {
var statearr_19949_19980 = state_19942__$1;
(statearr_19949_19980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (15))){
var inst_19932 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19950_19981 = state_19942__$1;
(statearr_19950_19981[(2)] = inst_19932);

(statearr_19950_19981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (13))){
var state_19942__$1 = state_19942;
var statearr_19951_19982 = state_19942__$1;
(statearr_19951_19982[(2)] = null);

(statearr_19951_19982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (6))){
var inst_19902 = (state_19942[(8)]);
var inst_19927 = inst_19902.length;
var inst_19928 = (inst_19927 > (0));
var state_19942__$1 = state_19942;
if(cljs.core.truth_(inst_19928)){
var statearr_19952_19983 = state_19942__$1;
(statearr_19952_19983[(1)] = (12));

} else {
var statearr_19953_19984 = state_19942__$1;
(statearr_19953_19984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (3))){
var inst_19940 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19942__$1,inst_19940);
} else {
if((state_val_19943 === (12))){
var inst_19902 = (state_19942[(8)]);
var inst_19930 = cljs.core.vec.call(null,inst_19902);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19942__$1,(15),out,inst_19930);
} else {
if((state_val_19943 === (2))){
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19942__$1,(4),ch);
} else {
if((state_val_19943 === (11))){
var inst_19906 = (state_19942[(9)]);
var inst_19910 = (state_19942[(10)]);
var inst_19920 = (state_19942[(2)]);
var inst_19921 = [];
var inst_19922 = inst_19921.push(inst_19906);
var inst_19902 = inst_19921;
var inst_19903 = inst_19910;
var state_19942__$1 = (function (){var statearr_19954 = state_19942;
(statearr_19954[(7)] = inst_19903);

(statearr_19954[(11)] = inst_19922);

(statearr_19954[(8)] = inst_19902);

(statearr_19954[(12)] = inst_19920);

return statearr_19954;
})();
var statearr_19955_19985 = state_19942__$1;
(statearr_19955_19985[(2)] = null);

(statearr_19955_19985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (9))){
var inst_19902 = (state_19942[(8)]);
var inst_19918 = cljs.core.vec.call(null,inst_19902);
var state_19942__$1 = state_19942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19942__$1,(11),out,inst_19918);
} else {
if((state_val_19943 === (5))){
var inst_19903 = (state_19942[(7)]);
var inst_19906 = (state_19942[(9)]);
var inst_19910 = (state_19942[(10)]);
var inst_19910__$1 = f.call(null,inst_19906);
var inst_19911 = cljs.core._EQ_.call(null,inst_19910__$1,inst_19903);
var inst_19912 = cljs.core.keyword_identical_QMARK_.call(null,inst_19903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19913 = (inst_19911) || (inst_19912);
var state_19942__$1 = (function (){var statearr_19956 = state_19942;
(statearr_19956[(10)] = inst_19910__$1);

return statearr_19956;
})();
if(cljs.core.truth_(inst_19913)){
var statearr_19957_19986 = state_19942__$1;
(statearr_19957_19986[(1)] = (8));

} else {
var statearr_19958_19987 = state_19942__$1;
(statearr_19958_19987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (14))){
var inst_19935 = (state_19942[(2)]);
var inst_19936 = cljs.core.async.close_BANG_.call(null,out);
var state_19942__$1 = (function (){var statearr_19960 = state_19942;
(statearr_19960[(13)] = inst_19935);

return statearr_19960;
})();
var statearr_19961_19988 = state_19942__$1;
(statearr_19961_19988[(2)] = inst_19936);

(statearr_19961_19988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (10))){
var inst_19925 = (state_19942[(2)]);
var state_19942__$1 = state_19942;
var statearr_19962_19989 = state_19942__$1;
(statearr_19962_19989[(2)] = inst_19925);

(statearr_19962_19989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19943 === (8))){
var inst_19906 = (state_19942[(9)]);
var inst_19902 = (state_19942[(8)]);
var inst_19910 = (state_19942[(10)]);
var inst_19915 = inst_19902.push(inst_19906);
var tmp19959 = inst_19902;
var inst_19902__$1 = tmp19959;
var inst_19903 = inst_19910;
var state_19942__$1 = (function (){var statearr_19963 = state_19942;
(statearr_19963[(7)] = inst_19903);

(statearr_19963[(14)] = inst_19915);

(statearr_19963[(8)] = inst_19902__$1);

return statearr_19963;
})();
var statearr_19964_19990 = state_19942__$1;
(statearr_19964_19990[(2)] = null);

(statearr_19964_19990[(1)] = (2));


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
});})(c__9944__auto___19976,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19976,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19968[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19968[(1)] = (1));

return statearr_19968;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19942){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19969){if((e19969 instanceof Object)){
var ex__9883__auto__ = e19969;
var statearr_19970_19991 = state_19942;
(statearr_19970_19991[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19992 = state_19942;
state_19942 = G__19992;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19976,out))
})();
var state__9946__auto__ = (function (){var statearr_19971 = f__9945__auto__.call(null);
(statearr_19971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19976);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19976,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map