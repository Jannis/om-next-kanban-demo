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
if(typeof cljs.core.async.t_cljs$core$async17551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17551 = (function (fn_handler,f,meta17552){
this.fn_handler = fn_handler;
this.f = f;
this.meta17552 = meta17552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17553,meta17552__$1){
var self__ = this;
var _17553__$1 = this;
return (new cljs.core.async.t_cljs$core$async17551(self__.fn_handler,self__.f,meta17552__$1));
});

cljs.core.async.t_cljs$core$async17551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17553){
var self__ = this;
var _17553__$1 = this;
return self__.meta17552;
});

cljs.core.async.t_cljs$core$async17551.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17552","meta17552",-1950173785,null)], null);
});

cljs.core.async.t_cljs$core$async17551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17551";

cljs.core.async.t_cljs$core$async17551.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17551");
});

cljs.core.async.__GT_t_cljs$core$async17551 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17551(fn_handler__$1,f__$1,meta17552){
return (new cljs.core.async.t_cljs$core$async17551(fn_handler__$1,f__$1,meta17552));
});

}

return (new cljs.core.async.t_cljs$core$async17551(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17556 = [];
var len__6152__auto___17559 = arguments.length;
var i__6153__auto___17560 = (0);
while(true){
if((i__6153__auto___17560 < len__6152__auto___17559)){
args17556.push((arguments[i__6153__auto___17560]));

var G__17561 = (i__6153__auto___17560 + (1));
i__6153__auto___17560 = G__17561;
continue;
} else {
}
break;
}

var G__17558 = args17556.length;
switch (G__17558) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17556.length)].join('')));

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
var args17563 = [];
var len__6152__auto___17566 = arguments.length;
var i__6153__auto___17567 = (0);
while(true){
if((i__6153__auto___17567 < len__6152__auto___17566)){
args17563.push((arguments[i__6153__auto___17567]));

var G__17568 = (i__6153__auto___17567 + (1));
i__6153__auto___17567 = G__17568;
continue;
} else {
}
break;
}

var G__17565 = args17563.length;
switch (G__17565) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17563.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17570 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17570);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17570,ret){
return (function (){
return fn1.call(null,val_17570);
});})(val_17570,ret))
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
var args17571 = [];
var len__6152__auto___17574 = arguments.length;
var i__6153__auto___17575 = (0);
while(true){
if((i__6153__auto___17575 < len__6152__auto___17574)){
args17571.push((arguments[i__6153__auto___17575]));

var G__17576 = (i__6153__auto___17575 + (1));
i__6153__auto___17575 = G__17576;
continue;
} else {
}
break;
}

var G__17573 = args17571.length;
switch (G__17573) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17571.length)].join('')));

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
var n__5997__auto___17578 = n;
var x_17579 = (0);
while(true){
if((x_17579 < n__5997__auto___17578)){
(a[x_17579] = (0));

var G__17580 = (x_17579 + (1));
x_17579 = G__17580;
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

var G__17581 = (i + (1));
i = G__17581;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17585 = (function (alt_flag,flag,meta17586){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17586 = meta17586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17587,meta17586__$1){
var self__ = this;
var _17587__$1 = this;
return (new cljs.core.async.t_cljs$core$async17585(self__.alt_flag,self__.flag,meta17586__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17587){
var self__ = this;
var _17587__$1 = this;
return self__.meta17586;
});})(flag))
;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17585.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17586","meta17586",-1610012166,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17585";

cljs.core.async.t_cljs$core$async17585.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17585");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17585 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17585(alt_flag__$1,flag__$1,meta17586){
return (new cljs.core.async.t_cljs$core$async17585(alt_flag__$1,flag__$1,meta17586));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17585(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17591 = (function (alt_handler,flag,cb,meta17592){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17592 = meta17592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17593,meta17592__$1){
var self__ = this;
var _17593__$1 = this;
return (new cljs.core.async.t_cljs$core$async17591(self__.alt_handler,self__.flag,self__.cb,meta17592__$1));
});

cljs.core.async.t_cljs$core$async17591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17593){
var self__ = this;
var _17593__$1 = this;
return self__.meta17592;
});

cljs.core.async.t_cljs$core$async17591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17592","meta17592",-1182366963,null)], null);
});

cljs.core.async.t_cljs$core$async17591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17591";

cljs.core.async.t_cljs$core$async17591.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17591");
});

cljs.core.async.__GT_t_cljs$core$async17591 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17591(alt_handler__$1,flag__$1,cb__$1,meta17592){
return (new cljs.core.async.t_cljs$core$async17591(alt_handler__$1,flag__$1,cb__$1,meta17592));
});

}

return (new cljs.core.async.t_cljs$core$async17591(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17594_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17594_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17595_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17595_SHARP_,port], null));
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
var G__17596 = (i + (1));
i = G__17596;
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
var len__6152__auto___17602 = arguments.length;
var i__6153__auto___17603 = (0);
while(true){
if((i__6153__auto___17603 < len__6152__auto___17602)){
args__6159__auto__.push((arguments[i__6153__auto___17603]));

var G__17604 = (i__6153__auto___17603 + (1));
i__6153__auto___17603 = G__17604;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17599){
var map__17600 = p__17599;
var map__17600__$1 = ((((!((map__17600 == null)))?((((map__17600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17600):map__17600);
var opts = map__17600__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17597){
var G__17598 = cljs.core.first.call(null,seq17597);
var seq17597__$1 = cljs.core.next.call(null,seq17597);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17598,seq17597__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17605 = [];
var len__6152__auto___17655 = arguments.length;
var i__6153__auto___17656 = (0);
while(true){
if((i__6153__auto___17656 < len__6152__auto___17655)){
args17605.push((arguments[i__6153__auto___17656]));

var G__17657 = (i__6153__auto___17656 + (1));
i__6153__auto___17656 = G__17657;
continue;
} else {
}
break;
}

var G__17607 = args17605.length;
switch (G__17607) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17605.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10274__auto___17659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___17659){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___17659){
return (function (state_17631){
var state_val_17632 = (state_17631[(1)]);
if((state_val_17632 === (7))){
var inst_17627 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17633_17660 = state_17631__$1;
(statearr_17633_17660[(2)] = inst_17627);

(statearr_17633_17660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (1))){
var state_17631__$1 = state_17631;
var statearr_17634_17661 = state_17631__$1;
(statearr_17634_17661[(2)] = null);

(statearr_17634_17661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (4))){
var inst_17610 = (state_17631[(7)]);
var inst_17610__$1 = (state_17631[(2)]);
var inst_17611 = (inst_17610__$1 == null);
var state_17631__$1 = (function (){var statearr_17635 = state_17631;
(statearr_17635[(7)] = inst_17610__$1);

return statearr_17635;
})();
if(cljs.core.truth_(inst_17611)){
var statearr_17636_17662 = state_17631__$1;
(statearr_17636_17662[(1)] = (5));

} else {
var statearr_17637_17663 = state_17631__$1;
(statearr_17637_17663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (13))){
var state_17631__$1 = state_17631;
var statearr_17638_17664 = state_17631__$1;
(statearr_17638_17664[(2)] = null);

(statearr_17638_17664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (6))){
var inst_17610 = (state_17631[(7)]);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17631__$1,(11),to,inst_17610);
} else {
if((state_val_17632 === (3))){
var inst_17629 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17631__$1,inst_17629);
} else {
if((state_val_17632 === (12))){
var state_17631__$1 = state_17631;
var statearr_17639_17665 = state_17631__$1;
(statearr_17639_17665[(2)] = null);

(statearr_17639_17665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (2))){
var state_17631__$1 = state_17631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17631__$1,(4),from);
} else {
if((state_val_17632 === (11))){
var inst_17620 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
if(cljs.core.truth_(inst_17620)){
var statearr_17640_17666 = state_17631__$1;
(statearr_17640_17666[(1)] = (12));

} else {
var statearr_17641_17667 = state_17631__$1;
(statearr_17641_17667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (9))){
var state_17631__$1 = state_17631;
var statearr_17642_17668 = state_17631__$1;
(statearr_17642_17668[(2)] = null);

(statearr_17642_17668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (5))){
var state_17631__$1 = state_17631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17643_17669 = state_17631__$1;
(statearr_17643_17669[(1)] = (8));

} else {
var statearr_17644_17670 = state_17631__$1;
(statearr_17644_17670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (14))){
var inst_17625 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17645_17671 = state_17631__$1;
(statearr_17645_17671[(2)] = inst_17625);

(statearr_17645_17671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (10))){
var inst_17617 = (state_17631[(2)]);
var state_17631__$1 = state_17631;
var statearr_17646_17672 = state_17631__$1;
(statearr_17646_17672[(2)] = inst_17617);

(statearr_17646_17672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17632 === (8))){
var inst_17614 = cljs.core.async.close_BANG_.call(null,to);
var state_17631__$1 = state_17631;
var statearr_17647_17673 = state_17631__$1;
(statearr_17647_17673[(2)] = inst_17614);

(statearr_17647_17673[(1)] = (10));


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
});})(c__10274__auto___17659))
;
return ((function (switch__10209__auto__,c__10274__auto___17659){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_17651 = [null,null,null,null,null,null,null,null];
(statearr_17651[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_17651[(1)] = (1));

return statearr_17651;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_17631){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17652){if((e17652 instanceof Object)){
var ex__10213__auto__ = e17652;
var statearr_17653_17674 = state_17631;
(statearr_17653_17674[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17675 = state_17631;
state_17631 = G__17675;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_17631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_17631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___17659))
})();
var state__10276__auto__ = (function (){var statearr_17654 = f__10275__auto__.call(null);
(statearr_17654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___17659);

return statearr_17654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___17659))
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
return (function (p__17859){
var vec__17860 = p__17859;
var v = cljs.core.nth.call(null,vec__17860,(0),null);
var p = cljs.core.nth.call(null,vec__17860,(1),null);
var job = vec__17860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10274__auto___18042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results){
return (function (state_17865){
var state_val_17866 = (state_17865[(1)]);
if((state_val_17866 === (1))){
var state_17865__$1 = state_17865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17865__$1,(2),res,v);
} else {
if((state_val_17866 === (2))){
var inst_17862 = (state_17865[(2)]);
var inst_17863 = cljs.core.async.close_BANG_.call(null,res);
var state_17865__$1 = (function (){var statearr_17867 = state_17865;
(statearr_17867[(7)] = inst_17862);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17865__$1,inst_17863);
} else {
return null;
}
}
});})(c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results))
;
return ((function (switch__10209__auto__,c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17871 = [null,null,null,null,null,null,null,null];
(statearr_17871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17871[(1)] = (1));

return statearr_17871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17865){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17872){if((e17872 instanceof Object)){
var ex__10213__auto__ = e17872;
var statearr_17873_18043 = state_17865;
(statearr_17873_18043[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18044 = state_17865;
state_17865 = G__18044;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results))
})();
var state__10276__auto__ = (function (){var statearr_17874 = f__10275__auto__.call(null);
(statearr_17874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18042);

return statearr_17874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18042,res,vec__17860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17875){
var vec__17876 = p__17875;
var v = cljs.core.nth.call(null,vec__17876,(0),null);
var p = cljs.core.nth.call(null,vec__17876,(1),null);
var job = vec__17876;
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
var n__5997__auto___18045 = n;
var __18046 = (0);
while(true){
if((__18046 < n__5997__auto___18045)){
var G__17877_18047 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17877_18047) {
case "compute":
var c__10274__auto___18049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18046,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (__18046,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function (state_17890){
var state_val_17891 = (state_17890[(1)]);
if((state_val_17891 === (1))){
var state_17890__$1 = state_17890;
var statearr_17892_18050 = state_17890__$1;
(statearr_17892_18050[(2)] = null);

(statearr_17892_18050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (2))){
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17890__$1,(4),jobs);
} else {
if((state_val_17891 === (3))){
var inst_17888 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17890__$1,inst_17888);
} else {
if((state_val_17891 === (4))){
var inst_17880 = (state_17890[(2)]);
var inst_17881 = process.call(null,inst_17880);
var state_17890__$1 = state_17890;
if(cljs.core.truth_(inst_17881)){
var statearr_17893_18051 = state_17890__$1;
(statearr_17893_18051[(1)] = (5));

} else {
var statearr_17894_18052 = state_17890__$1;
(statearr_17894_18052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (5))){
var state_17890__$1 = state_17890;
var statearr_17895_18053 = state_17890__$1;
(statearr_17895_18053[(2)] = null);

(statearr_17895_18053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (6))){
var state_17890__$1 = state_17890;
var statearr_17896_18054 = state_17890__$1;
(statearr_17896_18054[(2)] = null);

(statearr_17896_18054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (7))){
var inst_17886 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
var statearr_17897_18055 = state_17890__$1;
(statearr_17897_18055[(2)] = inst_17886);

(statearr_17897_18055[(1)] = (3));


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
});})(__18046,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
;
return ((function (__18046,switch__10209__auto__,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17901 = [null,null,null,null,null,null,null];
(statearr_17901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17901[(1)] = (1));

return statearr_17901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17890){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17902){if((e17902 instanceof Object)){
var ex__10213__auto__ = e17902;
var statearr_17903_18056 = state_17890;
(statearr_17903_18056[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18057 = state_17890;
state_17890 = G__18057;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(__18046,switch__10209__auto__,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17904 = f__10275__auto__.call(null);
(statearr_17904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18049);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(__18046,c__10274__auto___18049,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
);


break;
case "async":
var c__10274__auto___18058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18046,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (__18046,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (1))){
var state_17917__$1 = state_17917;
var statearr_17919_18059 = state_17917__$1;
(statearr_17919_18059[(2)] = null);

(statearr_17919_18059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (2))){
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,(4),jobs);
} else {
if((state_val_17918 === (3))){
var inst_17915 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17917__$1,inst_17915);
} else {
if((state_val_17918 === (4))){
var inst_17907 = (state_17917[(2)]);
var inst_17908 = async.call(null,inst_17907);
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17908)){
var statearr_17920_18060 = state_17917__$1;
(statearr_17920_18060[(1)] = (5));

} else {
var statearr_17921_18061 = state_17917__$1;
(statearr_17921_18061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (5))){
var state_17917__$1 = state_17917;
var statearr_17922_18062 = state_17917__$1;
(statearr_17922_18062[(2)] = null);

(statearr_17922_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (6))){
var state_17917__$1 = state_17917;
var statearr_17923_18063 = state_17917__$1;
(statearr_17923_18063[(2)] = null);

(statearr_17923_18063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (7))){
var inst_17913 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17924_18064 = state_17917__$1;
(statearr_17924_18064[(2)] = inst_17913);

(statearr_17924_18064[(1)] = (3));


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
});})(__18046,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
;
return ((function (__18046,switch__10209__auto__,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17928 = [null,null,null,null,null,null,null];
(statearr_17928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17928[(1)] = (1));

return statearr_17928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17917){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17929){if((e17929 instanceof Object)){
var ex__10213__auto__ = e17929;
var statearr_17930_18065 = state_17917;
(statearr_17930_18065[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18066 = state_17917;
state_17917 = G__18066;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(__18046,switch__10209__auto__,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17931 = f__10275__auto__.call(null);
(statearr_17931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18058);

return statearr_17931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(__18046,c__10274__auto___18058,G__17877_18047,n__5997__auto___18045,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18067 = (__18046 + (1));
__18046 = G__18067;
continue;
} else {
}
break;
}

var c__10274__auto___18068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18068,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18068,jobs,results,process,async){
return (function (state_17953){
var state_val_17954 = (state_17953[(1)]);
if((state_val_17954 === (1))){
var state_17953__$1 = state_17953;
var statearr_17955_18069 = state_17953__$1;
(statearr_17955_18069[(2)] = null);

(statearr_17955_18069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17954 === (2))){
var state_17953__$1 = state_17953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17953__$1,(4),from);
} else {
if((state_val_17954 === (3))){
var inst_17951 = (state_17953[(2)]);
var state_17953__$1 = state_17953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17953__$1,inst_17951);
} else {
if((state_val_17954 === (4))){
var inst_17934 = (state_17953[(7)]);
var inst_17934__$1 = (state_17953[(2)]);
var inst_17935 = (inst_17934__$1 == null);
var state_17953__$1 = (function (){var statearr_17956 = state_17953;
(statearr_17956[(7)] = inst_17934__$1);

return statearr_17956;
})();
if(cljs.core.truth_(inst_17935)){
var statearr_17957_18070 = state_17953__$1;
(statearr_17957_18070[(1)] = (5));

} else {
var statearr_17958_18071 = state_17953__$1;
(statearr_17958_18071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17954 === (5))){
var inst_17937 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17953__$1 = state_17953;
var statearr_17959_18072 = state_17953__$1;
(statearr_17959_18072[(2)] = inst_17937);

(statearr_17959_18072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17954 === (6))){
var inst_17939 = (state_17953[(8)]);
var inst_17934 = (state_17953[(7)]);
var inst_17939__$1 = cljs.core.async.chan.call(null,(1));
var inst_17940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17941 = [inst_17934,inst_17939__$1];
var inst_17942 = (new cljs.core.PersistentVector(null,2,(5),inst_17940,inst_17941,null));
var state_17953__$1 = (function (){var statearr_17960 = state_17953;
(statearr_17960[(8)] = inst_17939__$1);

return statearr_17960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17953__$1,(8),jobs,inst_17942);
} else {
if((state_val_17954 === (7))){
var inst_17949 = (state_17953[(2)]);
var state_17953__$1 = state_17953;
var statearr_17961_18073 = state_17953__$1;
(statearr_17961_18073[(2)] = inst_17949);

(statearr_17961_18073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17954 === (8))){
var inst_17939 = (state_17953[(8)]);
var inst_17944 = (state_17953[(2)]);
var state_17953__$1 = (function (){var statearr_17962 = state_17953;
(statearr_17962[(9)] = inst_17944);

return statearr_17962;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17953__$1,(9),results,inst_17939);
} else {
if((state_val_17954 === (9))){
var inst_17946 = (state_17953[(2)]);
var state_17953__$1 = (function (){var statearr_17963 = state_17953;
(statearr_17963[(10)] = inst_17946);

return statearr_17963;
})();
var statearr_17964_18074 = state_17953__$1;
(statearr_17964_18074[(2)] = null);

(statearr_17964_18074[(1)] = (2));


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
});})(c__10274__auto___18068,jobs,results,process,async))
;
return ((function (switch__10209__auto__,c__10274__auto___18068,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0 = (function (){
var statearr_17968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_17968[(1)] = (1));

return statearr_17968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_17953){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_17953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e17969){if((e17969 instanceof Object)){
var ex__10213__auto__ = e17969;
var statearr_17970_18075 = state_17953;
(statearr_17970_18075[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_17953;
state_17953 = G__18076;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_17953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_17953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18068,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_17971 = f__10275__auto__.call(null);
(statearr_17971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18068);

return statearr_17971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18068,jobs,results,process,async))
);


var c__10274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto__,jobs,results,process,async){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto__,jobs,results,process,async){
return (function (state_18009){
var state_val_18010 = (state_18009[(1)]);
if((state_val_18010 === (7))){
var inst_18005 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18011_18077 = state_18009__$1;
(statearr_18011_18077[(2)] = inst_18005);

(statearr_18011_18077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (20))){
var state_18009__$1 = state_18009;
var statearr_18012_18078 = state_18009__$1;
(statearr_18012_18078[(2)] = null);

(statearr_18012_18078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (1))){
var state_18009__$1 = state_18009;
var statearr_18013_18079 = state_18009__$1;
(statearr_18013_18079[(2)] = null);

(statearr_18013_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (4))){
var inst_17974 = (state_18009[(7)]);
var inst_17974__$1 = (state_18009[(2)]);
var inst_17975 = (inst_17974__$1 == null);
var state_18009__$1 = (function (){var statearr_18014 = state_18009;
(statearr_18014[(7)] = inst_17974__$1);

return statearr_18014;
})();
if(cljs.core.truth_(inst_17975)){
var statearr_18015_18080 = state_18009__$1;
(statearr_18015_18080[(1)] = (5));

} else {
var statearr_18016_18081 = state_18009__$1;
(statearr_18016_18081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (15))){
var inst_17987 = (state_18009[(8)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18009__$1,(18),to,inst_17987);
} else {
if((state_val_18010 === (21))){
var inst_18000 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18017_18082 = state_18009__$1;
(statearr_18017_18082[(2)] = inst_18000);

(statearr_18017_18082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (13))){
var inst_18002 = (state_18009[(2)]);
var state_18009__$1 = (function (){var statearr_18018 = state_18009;
(statearr_18018[(9)] = inst_18002);

return statearr_18018;
})();
var statearr_18019_18083 = state_18009__$1;
(statearr_18019_18083[(2)] = null);

(statearr_18019_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (6))){
var inst_17974 = (state_18009[(7)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18009__$1,(11),inst_17974);
} else {
if((state_val_18010 === (17))){
var inst_17995 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
if(cljs.core.truth_(inst_17995)){
var statearr_18020_18084 = state_18009__$1;
(statearr_18020_18084[(1)] = (19));

} else {
var statearr_18021_18085 = state_18009__$1;
(statearr_18021_18085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (3))){
var inst_18007 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18009__$1,inst_18007);
} else {
if((state_val_18010 === (12))){
var inst_17984 = (state_18009[(10)]);
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18009__$1,(14),inst_17984);
} else {
if((state_val_18010 === (2))){
var state_18009__$1 = state_18009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18009__$1,(4),results);
} else {
if((state_val_18010 === (19))){
var state_18009__$1 = state_18009;
var statearr_18022_18086 = state_18009__$1;
(statearr_18022_18086[(2)] = null);

(statearr_18022_18086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (11))){
var inst_17984 = (state_18009[(2)]);
var state_18009__$1 = (function (){var statearr_18023 = state_18009;
(statearr_18023[(10)] = inst_17984);

return statearr_18023;
})();
var statearr_18024_18087 = state_18009__$1;
(statearr_18024_18087[(2)] = null);

(statearr_18024_18087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (9))){
var state_18009__$1 = state_18009;
var statearr_18025_18088 = state_18009__$1;
(statearr_18025_18088[(2)] = null);

(statearr_18025_18088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (5))){
var state_18009__$1 = state_18009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18026_18089 = state_18009__$1;
(statearr_18026_18089[(1)] = (8));

} else {
var statearr_18027_18090 = state_18009__$1;
(statearr_18027_18090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (14))){
var inst_17987 = (state_18009[(8)]);
var inst_17989 = (state_18009[(11)]);
var inst_17987__$1 = (state_18009[(2)]);
var inst_17988 = (inst_17987__$1 == null);
var inst_17989__$1 = cljs.core.not.call(null,inst_17988);
var state_18009__$1 = (function (){var statearr_18028 = state_18009;
(statearr_18028[(8)] = inst_17987__$1);

(statearr_18028[(11)] = inst_17989__$1);

return statearr_18028;
})();
if(inst_17989__$1){
var statearr_18029_18091 = state_18009__$1;
(statearr_18029_18091[(1)] = (15));

} else {
var statearr_18030_18092 = state_18009__$1;
(statearr_18030_18092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (16))){
var inst_17989 = (state_18009[(11)]);
var state_18009__$1 = state_18009;
var statearr_18031_18093 = state_18009__$1;
(statearr_18031_18093[(2)] = inst_17989);

(statearr_18031_18093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (10))){
var inst_17981 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18032_18094 = state_18009__$1;
(statearr_18032_18094[(2)] = inst_17981);

(statearr_18032_18094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (18))){
var inst_17992 = (state_18009[(2)]);
var state_18009__$1 = state_18009;
var statearr_18033_18095 = state_18009__$1;
(statearr_18033_18095[(2)] = inst_17992);

(statearr_18033_18095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18010 === (8))){
var inst_17978 = cljs.core.async.close_BANG_.call(null,to);
var state_18009__$1 = state_18009;
var statearr_18034_18096 = state_18009__$1;
(statearr_18034_18096[(2)] = inst_17978);

(statearr_18034_18096[(1)] = (10));


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
var statearr_18038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__);

(statearr_18038[(1)] = (1));

return statearr_18038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1 = (function (state_18009){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18039){if((e18039 instanceof Object)){
var ex__10213__auto__ = e18039;
var statearr_18040_18097 = state_18009;
(statearr_18040_18097[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18098 = state_18009;
state_18009 = G__18098;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__ = function(state_18009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1.call(this,state_18009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__,jobs,results,process,async))
})();
var state__10276__auto__ = (function (){var statearr_18041 = f__10275__auto__.call(null);
(statearr_18041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18041;
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
var args18099 = [];
var len__6152__auto___18102 = arguments.length;
var i__6153__auto___18103 = (0);
while(true){
if((i__6153__auto___18103 < len__6152__auto___18102)){
args18099.push((arguments[i__6153__auto___18103]));

var G__18104 = (i__6153__auto___18103 + (1));
i__6153__auto___18103 = G__18104;
continue;
} else {
}
break;
}

var G__18101 = args18099.length;
switch (G__18101) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18099.length)].join('')));

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
var args18106 = [];
var len__6152__auto___18109 = arguments.length;
var i__6153__auto___18110 = (0);
while(true){
if((i__6153__auto___18110 < len__6152__auto___18109)){
args18106.push((arguments[i__6153__auto___18110]));

var G__18111 = (i__6153__auto___18110 + (1));
i__6153__auto___18110 = G__18111;
continue;
} else {
}
break;
}

var G__18108 = args18106.length;
switch (G__18108) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18106.length)].join('')));

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
var args18113 = [];
var len__6152__auto___18166 = arguments.length;
var i__6153__auto___18167 = (0);
while(true){
if((i__6153__auto___18167 < len__6152__auto___18166)){
args18113.push((arguments[i__6153__auto___18167]));

var G__18168 = (i__6153__auto___18167 + (1));
i__6153__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var G__18115 = args18113.length;
switch (G__18115) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18113.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10274__auto___18170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18170,tc,fc){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18170,tc,fc){
return (function (state_18141){
var state_val_18142 = (state_18141[(1)]);
if((state_val_18142 === (7))){
var inst_18137 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
var statearr_18143_18171 = state_18141__$1;
(statearr_18143_18171[(2)] = inst_18137);

(statearr_18143_18171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (1))){
var state_18141__$1 = state_18141;
var statearr_18144_18172 = state_18141__$1;
(statearr_18144_18172[(2)] = null);

(statearr_18144_18172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (4))){
var inst_18118 = (state_18141[(7)]);
var inst_18118__$1 = (state_18141[(2)]);
var inst_18119 = (inst_18118__$1 == null);
var state_18141__$1 = (function (){var statearr_18145 = state_18141;
(statearr_18145[(7)] = inst_18118__$1);

return statearr_18145;
})();
if(cljs.core.truth_(inst_18119)){
var statearr_18146_18173 = state_18141__$1;
(statearr_18146_18173[(1)] = (5));

} else {
var statearr_18147_18174 = state_18141__$1;
(statearr_18147_18174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (13))){
var state_18141__$1 = state_18141;
var statearr_18148_18175 = state_18141__$1;
(statearr_18148_18175[(2)] = null);

(statearr_18148_18175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (6))){
var inst_18118 = (state_18141[(7)]);
var inst_18124 = p.call(null,inst_18118);
var state_18141__$1 = state_18141;
if(cljs.core.truth_(inst_18124)){
var statearr_18149_18176 = state_18141__$1;
(statearr_18149_18176[(1)] = (9));

} else {
var statearr_18150_18177 = state_18141__$1;
(statearr_18150_18177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (3))){
var inst_18139 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18141__$1,inst_18139);
} else {
if((state_val_18142 === (12))){
var state_18141__$1 = state_18141;
var statearr_18151_18178 = state_18141__$1;
(statearr_18151_18178[(2)] = null);

(statearr_18151_18178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (2))){
var state_18141__$1 = state_18141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18141__$1,(4),ch);
} else {
if((state_val_18142 === (11))){
var inst_18118 = (state_18141[(7)]);
var inst_18128 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18141__$1,(8),inst_18128,inst_18118);
} else {
if((state_val_18142 === (9))){
var state_18141__$1 = state_18141;
var statearr_18152_18179 = state_18141__$1;
(statearr_18152_18179[(2)] = tc);

(statearr_18152_18179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (5))){
var inst_18121 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18122 = cljs.core.async.close_BANG_.call(null,fc);
var state_18141__$1 = (function (){var statearr_18153 = state_18141;
(statearr_18153[(8)] = inst_18121);

return statearr_18153;
})();
var statearr_18154_18180 = state_18141__$1;
(statearr_18154_18180[(2)] = inst_18122);

(statearr_18154_18180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (14))){
var inst_18135 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
var statearr_18155_18181 = state_18141__$1;
(statearr_18155_18181[(2)] = inst_18135);

(statearr_18155_18181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (10))){
var state_18141__$1 = state_18141;
var statearr_18156_18182 = state_18141__$1;
(statearr_18156_18182[(2)] = fc);

(statearr_18156_18182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18142 === (8))){
var inst_18130 = (state_18141[(2)]);
var state_18141__$1 = state_18141;
if(cljs.core.truth_(inst_18130)){
var statearr_18157_18183 = state_18141__$1;
(statearr_18157_18183[(1)] = (12));

} else {
var statearr_18158_18184 = state_18141__$1;
(statearr_18158_18184[(1)] = (13));

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
});})(c__10274__auto___18170,tc,fc))
;
return ((function (switch__10209__auto__,c__10274__auto___18170,tc,fc){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_18162 = [null,null,null,null,null,null,null,null,null];
(statearr_18162[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_18162[(1)] = (1));

return statearr_18162;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_18141){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18163){if((e18163 instanceof Object)){
var ex__10213__auto__ = e18163;
var statearr_18164_18185 = state_18141;
(statearr_18164_18185[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18186 = state_18141;
state_18141 = G__18186;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_18141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_18141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18170,tc,fc))
})();
var state__10276__auto__ = (function (){var statearr_18165 = f__10275__auto__.call(null);
(statearr_18165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18170);

return statearr_18165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18170,tc,fc))
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
return (function (state_18233){
var state_val_18234 = (state_18233[(1)]);
if((state_val_18234 === (1))){
var inst_18219 = init;
var state_18233__$1 = (function (){var statearr_18235 = state_18233;
(statearr_18235[(7)] = inst_18219);

return statearr_18235;
})();
var statearr_18236_18251 = state_18233__$1;
(statearr_18236_18251[(2)] = null);

(statearr_18236_18251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (2))){
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18233__$1,(4),ch);
} else {
if((state_val_18234 === (3))){
var inst_18231 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18233__$1,inst_18231);
} else {
if((state_val_18234 === (4))){
var inst_18222 = (state_18233[(8)]);
var inst_18222__$1 = (state_18233[(2)]);
var inst_18223 = (inst_18222__$1 == null);
var state_18233__$1 = (function (){var statearr_18237 = state_18233;
(statearr_18237[(8)] = inst_18222__$1);

return statearr_18237;
})();
if(cljs.core.truth_(inst_18223)){
var statearr_18238_18252 = state_18233__$1;
(statearr_18238_18252[(1)] = (5));

} else {
var statearr_18239_18253 = state_18233__$1;
(statearr_18239_18253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (5))){
var inst_18219 = (state_18233[(7)]);
var state_18233__$1 = state_18233;
var statearr_18240_18254 = state_18233__$1;
(statearr_18240_18254[(2)] = inst_18219);

(statearr_18240_18254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (6))){
var inst_18219 = (state_18233[(7)]);
var inst_18222 = (state_18233[(8)]);
var inst_18226 = f.call(null,inst_18219,inst_18222);
var inst_18219__$1 = inst_18226;
var state_18233__$1 = (function (){var statearr_18241 = state_18233;
(statearr_18241[(7)] = inst_18219__$1);

return statearr_18241;
})();
var statearr_18242_18255 = state_18233__$1;
(statearr_18242_18255[(2)] = null);

(statearr_18242_18255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (7))){
var inst_18229 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18243_18256 = state_18233__$1;
(statearr_18243_18256[(2)] = inst_18229);

(statearr_18243_18256[(1)] = (3));


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
var statearr_18247 = [null,null,null,null,null,null,null,null,null];
(statearr_18247[(0)] = cljs$core$async$reduce_$_state_machine__10210__auto__);

(statearr_18247[(1)] = (1));

return statearr_18247;
});
var cljs$core$async$reduce_$_state_machine__10210__auto____1 = (function (state_18233){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18248){if((e18248 instanceof Object)){
var ex__10213__auto__ = e18248;
var statearr_18249_18257 = state_18233;
(statearr_18249_18257[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18258 = state_18233;
state_18233 = G__18258;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10210__auto__ = function(state_18233){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10210__auto____1.call(this,state_18233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10210__auto____0;
cljs$core$async$reduce_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10210__auto____1;
return cljs$core$async$reduce_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_18250 = f__10275__auto__.call(null);
(statearr_18250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18250;
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
var args18259 = [];
var len__6152__auto___18311 = arguments.length;
var i__6153__auto___18312 = (0);
while(true){
if((i__6153__auto___18312 < len__6152__auto___18311)){
args18259.push((arguments[i__6153__auto___18312]));

var G__18313 = (i__6153__auto___18312 + (1));
i__6153__auto___18312 = G__18313;
continue;
} else {
}
break;
}

var G__18261 = args18259.length;
switch (G__18261) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18259.length)].join('')));

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
return (function (state_18286){
var state_val_18287 = (state_18286[(1)]);
if((state_val_18287 === (7))){
var inst_18268 = (state_18286[(2)]);
var state_18286__$1 = state_18286;
var statearr_18288_18315 = state_18286__$1;
(statearr_18288_18315[(2)] = inst_18268);

(statearr_18288_18315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (1))){
var inst_18262 = cljs.core.seq.call(null,coll);
var inst_18263 = inst_18262;
var state_18286__$1 = (function (){var statearr_18289 = state_18286;
(statearr_18289[(7)] = inst_18263);

return statearr_18289;
})();
var statearr_18290_18316 = state_18286__$1;
(statearr_18290_18316[(2)] = null);

(statearr_18290_18316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (4))){
var inst_18263 = (state_18286[(7)]);
var inst_18266 = cljs.core.first.call(null,inst_18263);
var state_18286__$1 = state_18286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18286__$1,(7),ch,inst_18266);
} else {
if((state_val_18287 === (13))){
var inst_18280 = (state_18286[(2)]);
var state_18286__$1 = state_18286;
var statearr_18291_18317 = state_18286__$1;
(statearr_18291_18317[(2)] = inst_18280);

(statearr_18291_18317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (6))){
var inst_18271 = (state_18286[(2)]);
var state_18286__$1 = state_18286;
if(cljs.core.truth_(inst_18271)){
var statearr_18292_18318 = state_18286__$1;
(statearr_18292_18318[(1)] = (8));

} else {
var statearr_18293_18319 = state_18286__$1;
(statearr_18293_18319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (3))){
var inst_18284 = (state_18286[(2)]);
var state_18286__$1 = state_18286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18286__$1,inst_18284);
} else {
if((state_val_18287 === (12))){
var state_18286__$1 = state_18286;
var statearr_18294_18320 = state_18286__$1;
(statearr_18294_18320[(2)] = null);

(statearr_18294_18320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (2))){
var inst_18263 = (state_18286[(7)]);
var state_18286__$1 = state_18286;
if(cljs.core.truth_(inst_18263)){
var statearr_18295_18321 = state_18286__$1;
(statearr_18295_18321[(1)] = (4));

} else {
var statearr_18296_18322 = state_18286__$1;
(statearr_18296_18322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (11))){
var inst_18277 = cljs.core.async.close_BANG_.call(null,ch);
var state_18286__$1 = state_18286;
var statearr_18297_18323 = state_18286__$1;
(statearr_18297_18323[(2)] = inst_18277);

(statearr_18297_18323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (9))){
var state_18286__$1 = state_18286;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18298_18324 = state_18286__$1;
(statearr_18298_18324[(1)] = (11));

} else {
var statearr_18299_18325 = state_18286__$1;
(statearr_18299_18325[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (5))){
var inst_18263 = (state_18286[(7)]);
var state_18286__$1 = state_18286;
var statearr_18300_18326 = state_18286__$1;
(statearr_18300_18326[(2)] = inst_18263);

(statearr_18300_18326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (10))){
var inst_18282 = (state_18286[(2)]);
var state_18286__$1 = state_18286;
var statearr_18301_18327 = state_18286__$1;
(statearr_18301_18327[(2)] = inst_18282);

(statearr_18301_18327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18287 === (8))){
var inst_18263 = (state_18286[(7)]);
var inst_18273 = cljs.core.next.call(null,inst_18263);
var inst_18263__$1 = inst_18273;
var state_18286__$1 = (function (){var statearr_18302 = state_18286;
(statearr_18302[(7)] = inst_18263__$1);

return statearr_18302;
})();
var statearr_18303_18328 = state_18286__$1;
(statearr_18303_18328[(2)] = null);

(statearr_18303_18328[(1)] = (2));


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
var statearr_18307 = [null,null,null,null,null,null,null,null];
(statearr_18307[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_18307[(1)] = (1));

return statearr_18307;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_18286){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18308){if((e18308 instanceof Object)){
var ex__10213__auto__ = e18308;
var statearr_18309_18329 = state_18286;
(statearr_18309_18329[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18330 = state_18286;
state_18286 = G__18330;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_18286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_18286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_18310 = f__10275__auto__.call(null);
(statearr_18310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_18310;
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
if(typeof cljs.core.async.t_cljs$core$async18552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18552 = (function (mult,ch,cs,meta18553){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18553 = meta18553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18554,meta18553__$1){
var self__ = this;
var _18554__$1 = this;
return (new cljs.core.async.t_cljs$core$async18552(self__.mult,self__.ch,self__.cs,meta18553__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18554){
var self__ = this;
var _18554__$1 = this;
return self__.meta18553;
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18553","meta18553",208883758,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18552";

cljs.core.async.t_cljs$core$async18552.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18552");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18552 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18552(mult__$1,ch__$1,cs__$1,meta18553){
return (new cljs.core.async.t_cljs$core$async18552(mult__$1,ch__$1,cs__$1,meta18553));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18552(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10274__auto___18773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___18773,cs,m,dchan,dctr,done){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___18773,cs,m,dchan,dctr,done){
return (function (state_18685){
var state_val_18686 = (state_18685[(1)]);
if((state_val_18686 === (7))){
var inst_18681 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18687_18774 = state_18685__$1;
(statearr_18687_18774[(2)] = inst_18681);

(statearr_18687_18774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (20))){
var inst_18586 = (state_18685[(7)]);
var inst_18596 = cljs.core.first.call(null,inst_18586);
var inst_18597 = cljs.core.nth.call(null,inst_18596,(0),null);
var inst_18598 = cljs.core.nth.call(null,inst_18596,(1),null);
var state_18685__$1 = (function (){var statearr_18688 = state_18685;
(statearr_18688[(8)] = inst_18597);

return statearr_18688;
})();
if(cljs.core.truth_(inst_18598)){
var statearr_18689_18775 = state_18685__$1;
(statearr_18689_18775[(1)] = (22));

} else {
var statearr_18690_18776 = state_18685__$1;
(statearr_18690_18776[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (27))){
var inst_18557 = (state_18685[(9)]);
var inst_18633 = (state_18685[(10)]);
var inst_18628 = (state_18685[(11)]);
var inst_18626 = (state_18685[(12)]);
var inst_18633__$1 = cljs.core._nth.call(null,inst_18626,inst_18628);
var inst_18634 = cljs.core.async.put_BANG_.call(null,inst_18633__$1,inst_18557,done);
var state_18685__$1 = (function (){var statearr_18691 = state_18685;
(statearr_18691[(10)] = inst_18633__$1);

return statearr_18691;
})();
if(cljs.core.truth_(inst_18634)){
var statearr_18692_18777 = state_18685__$1;
(statearr_18692_18777[(1)] = (30));

} else {
var statearr_18693_18778 = state_18685__$1;
(statearr_18693_18778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (1))){
var state_18685__$1 = state_18685;
var statearr_18694_18779 = state_18685__$1;
(statearr_18694_18779[(2)] = null);

(statearr_18694_18779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (24))){
var inst_18586 = (state_18685[(7)]);
var inst_18603 = (state_18685[(2)]);
var inst_18604 = cljs.core.next.call(null,inst_18586);
var inst_18566 = inst_18604;
var inst_18567 = null;
var inst_18568 = (0);
var inst_18569 = (0);
var state_18685__$1 = (function (){var statearr_18695 = state_18685;
(statearr_18695[(13)] = inst_18566);

(statearr_18695[(14)] = inst_18567);

(statearr_18695[(15)] = inst_18603);

(statearr_18695[(16)] = inst_18568);

(statearr_18695[(17)] = inst_18569);

return statearr_18695;
})();
var statearr_18696_18780 = state_18685__$1;
(statearr_18696_18780[(2)] = null);

(statearr_18696_18780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (39))){
var state_18685__$1 = state_18685;
var statearr_18700_18781 = state_18685__$1;
(statearr_18700_18781[(2)] = null);

(statearr_18700_18781[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (4))){
var inst_18557 = (state_18685[(9)]);
var inst_18557__$1 = (state_18685[(2)]);
var inst_18558 = (inst_18557__$1 == null);
var state_18685__$1 = (function (){var statearr_18701 = state_18685;
(statearr_18701[(9)] = inst_18557__$1);

return statearr_18701;
})();
if(cljs.core.truth_(inst_18558)){
var statearr_18702_18782 = state_18685__$1;
(statearr_18702_18782[(1)] = (5));

} else {
var statearr_18703_18783 = state_18685__$1;
(statearr_18703_18783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (15))){
var inst_18566 = (state_18685[(13)]);
var inst_18567 = (state_18685[(14)]);
var inst_18568 = (state_18685[(16)]);
var inst_18569 = (state_18685[(17)]);
var inst_18582 = (state_18685[(2)]);
var inst_18583 = (inst_18569 + (1));
var tmp18697 = inst_18566;
var tmp18698 = inst_18567;
var tmp18699 = inst_18568;
var inst_18566__$1 = tmp18697;
var inst_18567__$1 = tmp18698;
var inst_18568__$1 = tmp18699;
var inst_18569__$1 = inst_18583;
var state_18685__$1 = (function (){var statearr_18704 = state_18685;
(statearr_18704[(13)] = inst_18566__$1);

(statearr_18704[(14)] = inst_18567__$1);

(statearr_18704[(18)] = inst_18582);

(statearr_18704[(16)] = inst_18568__$1);

(statearr_18704[(17)] = inst_18569__$1);

return statearr_18704;
})();
var statearr_18705_18784 = state_18685__$1;
(statearr_18705_18784[(2)] = null);

(statearr_18705_18784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (21))){
var inst_18607 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18709_18785 = state_18685__$1;
(statearr_18709_18785[(2)] = inst_18607);

(statearr_18709_18785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (31))){
var inst_18633 = (state_18685[(10)]);
var inst_18637 = done.call(null,null);
var inst_18638 = cljs.core.async.untap_STAR_.call(null,m,inst_18633);
var state_18685__$1 = (function (){var statearr_18710 = state_18685;
(statearr_18710[(19)] = inst_18637);

return statearr_18710;
})();
var statearr_18711_18786 = state_18685__$1;
(statearr_18711_18786[(2)] = inst_18638);

(statearr_18711_18786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (32))){
var inst_18625 = (state_18685[(20)]);
var inst_18628 = (state_18685[(11)]);
var inst_18626 = (state_18685[(12)]);
var inst_18627 = (state_18685[(21)]);
var inst_18640 = (state_18685[(2)]);
var inst_18641 = (inst_18628 + (1));
var tmp18706 = inst_18625;
var tmp18707 = inst_18626;
var tmp18708 = inst_18627;
var inst_18625__$1 = tmp18706;
var inst_18626__$1 = tmp18707;
var inst_18627__$1 = tmp18708;
var inst_18628__$1 = inst_18641;
var state_18685__$1 = (function (){var statearr_18712 = state_18685;
(statearr_18712[(20)] = inst_18625__$1);

(statearr_18712[(11)] = inst_18628__$1);

(statearr_18712[(22)] = inst_18640);

(statearr_18712[(12)] = inst_18626__$1);

(statearr_18712[(21)] = inst_18627__$1);

return statearr_18712;
})();
var statearr_18713_18787 = state_18685__$1;
(statearr_18713_18787[(2)] = null);

(statearr_18713_18787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (40))){
var inst_18653 = (state_18685[(23)]);
var inst_18657 = done.call(null,null);
var inst_18658 = cljs.core.async.untap_STAR_.call(null,m,inst_18653);
var state_18685__$1 = (function (){var statearr_18714 = state_18685;
(statearr_18714[(24)] = inst_18657);

return statearr_18714;
})();
var statearr_18715_18788 = state_18685__$1;
(statearr_18715_18788[(2)] = inst_18658);

(statearr_18715_18788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (33))){
var inst_18644 = (state_18685[(25)]);
var inst_18646 = cljs.core.chunked_seq_QMARK_.call(null,inst_18644);
var state_18685__$1 = state_18685;
if(inst_18646){
var statearr_18716_18789 = state_18685__$1;
(statearr_18716_18789[(1)] = (36));

} else {
var statearr_18717_18790 = state_18685__$1;
(statearr_18717_18790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (13))){
var inst_18576 = (state_18685[(26)]);
var inst_18579 = cljs.core.async.close_BANG_.call(null,inst_18576);
var state_18685__$1 = state_18685;
var statearr_18718_18791 = state_18685__$1;
(statearr_18718_18791[(2)] = inst_18579);

(statearr_18718_18791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (22))){
var inst_18597 = (state_18685[(8)]);
var inst_18600 = cljs.core.async.close_BANG_.call(null,inst_18597);
var state_18685__$1 = state_18685;
var statearr_18719_18792 = state_18685__$1;
(statearr_18719_18792[(2)] = inst_18600);

(statearr_18719_18792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (36))){
var inst_18644 = (state_18685[(25)]);
var inst_18648 = cljs.core.chunk_first.call(null,inst_18644);
var inst_18649 = cljs.core.chunk_rest.call(null,inst_18644);
var inst_18650 = cljs.core.count.call(null,inst_18648);
var inst_18625 = inst_18649;
var inst_18626 = inst_18648;
var inst_18627 = inst_18650;
var inst_18628 = (0);
var state_18685__$1 = (function (){var statearr_18720 = state_18685;
(statearr_18720[(20)] = inst_18625);

(statearr_18720[(11)] = inst_18628);

(statearr_18720[(12)] = inst_18626);

(statearr_18720[(21)] = inst_18627);

return statearr_18720;
})();
var statearr_18721_18793 = state_18685__$1;
(statearr_18721_18793[(2)] = null);

(statearr_18721_18793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (41))){
var inst_18644 = (state_18685[(25)]);
var inst_18660 = (state_18685[(2)]);
var inst_18661 = cljs.core.next.call(null,inst_18644);
var inst_18625 = inst_18661;
var inst_18626 = null;
var inst_18627 = (0);
var inst_18628 = (0);
var state_18685__$1 = (function (){var statearr_18722 = state_18685;
(statearr_18722[(20)] = inst_18625);

(statearr_18722[(11)] = inst_18628);

(statearr_18722[(27)] = inst_18660);

(statearr_18722[(12)] = inst_18626);

(statearr_18722[(21)] = inst_18627);

return statearr_18722;
})();
var statearr_18723_18794 = state_18685__$1;
(statearr_18723_18794[(2)] = null);

(statearr_18723_18794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (43))){
var state_18685__$1 = state_18685;
var statearr_18724_18795 = state_18685__$1;
(statearr_18724_18795[(2)] = null);

(statearr_18724_18795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (29))){
var inst_18669 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18725_18796 = state_18685__$1;
(statearr_18725_18796[(2)] = inst_18669);

(statearr_18725_18796[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (44))){
var inst_18678 = (state_18685[(2)]);
var state_18685__$1 = (function (){var statearr_18726 = state_18685;
(statearr_18726[(28)] = inst_18678);

return statearr_18726;
})();
var statearr_18727_18797 = state_18685__$1;
(statearr_18727_18797[(2)] = null);

(statearr_18727_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (6))){
var inst_18617 = (state_18685[(29)]);
var inst_18616 = cljs.core.deref.call(null,cs);
var inst_18617__$1 = cljs.core.keys.call(null,inst_18616);
var inst_18618 = cljs.core.count.call(null,inst_18617__$1);
var inst_18619 = cljs.core.reset_BANG_.call(null,dctr,inst_18618);
var inst_18624 = cljs.core.seq.call(null,inst_18617__$1);
var inst_18625 = inst_18624;
var inst_18626 = null;
var inst_18627 = (0);
var inst_18628 = (0);
var state_18685__$1 = (function (){var statearr_18728 = state_18685;
(statearr_18728[(20)] = inst_18625);

(statearr_18728[(11)] = inst_18628);

(statearr_18728[(12)] = inst_18626);

(statearr_18728[(30)] = inst_18619);

(statearr_18728[(21)] = inst_18627);

(statearr_18728[(29)] = inst_18617__$1);

return statearr_18728;
})();
var statearr_18729_18798 = state_18685__$1;
(statearr_18729_18798[(2)] = null);

(statearr_18729_18798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (28))){
var inst_18644 = (state_18685[(25)]);
var inst_18625 = (state_18685[(20)]);
var inst_18644__$1 = cljs.core.seq.call(null,inst_18625);
var state_18685__$1 = (function (){var statearr_18730 = state_18685;
(statearr_18730[(25)] = inst_18644__$1);

return statearr_18730;
})();
if(inst_18644__$1){
var statearr_18731_18799 = state_18685__$1;
(statearr_18731_18799[(1)] = (33));

} else {
var statearr_18732_18800 = state_18685__$1;
(statearr_18732_18800[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (25))){
var inst_18628 = (state_18685[(11)]);
var inst_18627 = (state_18685[(21)]);
var inst_18630 = (inst_18628 < inst_18627);
var inst_18631 = inst_18630;
var state_18685__$1 = state_18685;
if(cljs.core.truth_(inst_18631)){
var statearr_18733_18801 = state_18685__$1;
(statearr_18733_18801[(1)] = (27));

} else {
var statearr_18734_18802 = state_18685__$1;
(statearr_18734_18802[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (34))){
var state_18685__$1 = state_18685;
var statearr_18735_18803 = state_18685__$1;
(statearr_18735_18803[(2)] = null);

(statearr_18735_18803[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (17))){
var state_18685__$1 = state_18685;
var statearr_18736_18804 = state_18685__$1;
(statearr_18736_18804[(2)] = null);

(statearr_18736_18804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (3))){
var inst_18683 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18685__$1,inst_18683);
} else {
if((state_val_18686 === (12))){
var inst_18612 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18737_18805 = state_18685__$1;
(statearr_18737_18805[(2)] = inst_18612);

(statearr_18737_18805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (2))){
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18685__$1,(4),ch);
} else {
if((state_val_18686 === (23))){
var state_18685__$1 = state_18685;
var statearr_18738_18806 = state_18685__$1;
(statearr_18738_18806[(2)] = null);

(statearr_18738_18806[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (35))){
var inst_18667 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18739_18807 = state_18685__$1;
(statearr_18739_18807[(2)] = inst_18667);

(statearr_18739_18807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (19))){
var inst_18586 = (state_18685[(7)]);
var inst_18590 = cljs.core.chunk_first.call(null,inst_18586);
var inst_18591 = cljs.core.chunk_rest.call(null,inst_18586);
var inst_18592 = cljs.core.count.call(null,inst_18590);
var inst_18566 = inst_18591;
var inst_18567 = inst_18590;
var inst_18568 = inst_18592;
var inst_18569 = (0);
var state_18685__$1 = (function (){var statearr_18740 = state_18685;
(statearr_18740[(13)] = inst_18566);

(statearr_18740[(14)] = inst_18567);

(statearr_18740[(16)] = inst_18568);

(statearr_18740[(17)] = inst_18569);

return statearr_18740;
})();
var statearr_18741_18808 = state_18685__$1;
(statearr_18741_18808[(2)] = null);

(statearr_18741_18808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (11))){
var inst_18586 = (state_18685[(7)]);
var inst_18566 = (state_18685[(13)]);
var inst_18586__$1 = cljs.core.seq.call(null,inst_18566);
var state_18685__$1 = (function (){var statearr_18742 = state_18685;
(statearr_18742[(7)] = inst_18586__$1);

return statearr_18742;
})();
if(inst_18586__$1){
var statearr_18743_18809 = state_18685__$1;
(statearr_18743_18809[(1)] = (16));

} else {
var statearr_18744_18810 = state_18685__$1;
(statearr_18744_18810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (9))){
var inst_18614 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18745_18811 = state_18685__$1;
(statearr_18745_18811[(2)] = inst_18614);

(statearr_18745_18811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (5))){
var inst_18564 = cljs.core.deref.call(null,cs);
var inst_18565 = cljs.core.seq.call(null,inst_18564);
var inst_18566 = inst_18565;
var inst_18567 = null;
var inst_18568 = (0);
var inst_18569 = (0);
var state_18685__$1 = (function (){var statearr_18746 = state_18685;
(statearr_18746[(13)] = inst_18566);

(statearr_18746[(14)] = inst_18567);

(statearr_18746[(16)] = inst_18568);

(statearr_18746[(17)] = inst_18569);

return statearr_18746;
})();
var statearr_18747_18812 = state_18685__$1;
(statearr_18747_18812[(2)] = null);

(statearr_18747_18812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (14))){
var state_18685__$1 = state_18685;
var statearr_18748_18813 = state_18685__$1;
(statearr_18748_18813[(2)] = null);

(statearr_18748_18813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (45))){
var inst_18675 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18749_18814 = state_18685__$1;
(statearr_18749_18814[(2)] = inst_18675);

(statearr_18749_18814[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (26))){
var inst_18617 = (state_18685[(29)]);
var inst_18671 = (state_18685[(2)]);
var inst_18672 = cljs.core.seq.call(null,inst_18617);
var state_18685__$1 = (function (){var statearr_18750 = state_18685;
(statearr_18750[(31)] = inst_18671);

return statearr_18750;
})();
if(inst_18672){
var statearr_18751_18815 = state_18685__$1;
(statearr_18751_18815[(1)] = (42));

} else {
var statearr_18752_18816 = state_18685__$1;
(statearr_18752_18816[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (16))){
var inst_18586 = (state_18685[(7)]);
var inst_18588 = cljs.core.chunked_seq_QMARK_.call(null,inst_18586);
var state_18685__$1 = state_18685;
if(inst_18588){
var statearr_18753_18817 = state_18685__$1;
(statearr_18753_18817[(1)] = (19));

} else {
var statearr_18754_18818 = state_18685__$1;
(statearr_18754_18818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (38))){
var inst_18664 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18755_18819 = state_18685__$1;
(statearr_18755_18819[(2)] = inst_18664);

(statearr_18755_18819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (30))){
var state_18685__$1 = state_18685;
var statearr_18756_18820 = state_18685__$1;
(statearr_18756_18820[(2)] = null);

(statearr_18756_18820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (10))){
var inst_18567 = (state_18685[(14)]);
var inst_18569 = (state_18685[(17)]);
var inst_18575 = cljs.core._nth.call(null,inst_18567,inst_18569);
var inst_18576 = cljs.core.nth.call(null,inst_18575,(0),null);
var inst_18577 = cljs.core.nth.call(null,inst_18575,(1),null);
var state_18685__$1 = (function (){var statearr_18757 = state_18685;
(statearr_18757[(26)] = inst_18576);

return statearr_18757;
})();
if(cljs.core.truth_(inst_18577)){
var statearr_18758_18821 = state_18685__$1;
(statearr_18758_18821[(1)] = (13));

} else {
var statearr_18759_18822 = state_18685__$1;
(statearr_18759_18822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (18))){
var inst_18610 = (state_18685[(2)]);
var state_18685__$1 = state_18685;
var statearr_18760_18823 = state_18685__$1;
(statearr_18760_18823[(2)] = inst_18610);

(statearr_18760_18823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (42))){
var state_18685__$1 = state_18685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18685__$1,(45),dchan);
} else {
if((state_val_18686 === (37))){
var inst_18644 = (state_18685[(25)]);
var inst_18557 = (state_18685[(9)]);
var inst_18653 = (state_18685[(23)]);
var inst_18653__$1 = cljs.core.first.call(null,inst_18644);
var inst_18654 = cljs.core.async.put_BANG_.call(null,inst_18653__$1,inst_18557,done);
var state_18685__$1 = (function (){var statearr_18761 = state_18685;
(statearr_18761[(23)] = inst_18653__$1);

return statearr_18761;
})();
if(cljs.core.truth_(inst_18654)){
var statearr_18762_18824 = state_18685__$1;
(statearr_18762_18824[(1)] = (39));

} else {
var statearr_18763_18825 = state_18685__$1;
(statearr_18763_18825[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18686 === (8))){
var inst_18568 = (state_18685[(16)]);
var inst_18569 = (state_18685[(17)]);
var inst_18571 = (inst_18569 < inst_18568);
var inst_18572 = inst_18571;
var state_18685__$1 = state_18685;
if(cljs.core.truth_(inst_18572)){
var statearr_18764_18826 = state_18685__$1;
(statearr_18764_18826[(1)] = (10));

} else {
var statearr_18765_18827 = state_18685__$1;
(statearr_18765_18827[(1)] = (11));

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
});})(c__10274__auto___18773,cs,m,dchan,dctr,done))
;
return ((function (switch__10209__auto__,c__10274__auto___18773,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10210__auto__ = null;
var cljs$core$async$mult_$_state_machine__10210__auto____0 = (function (){
var statearr_18769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18769[(0)] = cljs$core$async$mult_$_state_machine__10210__auto__);

(statearr_18769[(1)] = (1));

return statearr_18769;
});
var cljs$core$async$mult_$_state_machine__10210__auto____1 = (function (state_18685){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_18685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e18770){if((e18770 instanceof Object)){
var ex__10213__auto__ = e18770;
var statearr_18771_18828 = state_18685;
(statearr_18771_18828[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18829 = state_18685;
state_18685 = G__18829;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10210__auto__ = function(state_18685){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10210__auto____1.call(this,state_18685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10210__auto____0;
cljs$core$async$mult_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10210__auto____1;
return cljs$core$async$mult_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___18773,cs,m,dchan,dctr,done))
})();
var state__10276__auto__ = (function (){var statearr_18772 = f__10275__auto__.call(null);
(statearr_18772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___18773);

return statearr_18772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___18773,cs,m,dchan,dctr,done))
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
var args18830 = [];
var len__6152__auto___18833 = arguments.length;
var i__6153__auto___18834 = (0);
while(true){
if((i__6153__auto___18834 < len__6152__auto___18833)){
args18830.push((arguments[i__6153__auto___18834]));

var G__18835 = (i__6153__auto___18834 + (1));
i__6153__auto___18834 = G__18835;
continue;
} else {
}
break;
}

var G__18832 = args18830.length;
switch (G__18832) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18830.length)].join('')));

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
var len__6152__auto___18847 = arguments.length;
var i__6153__auto___18848 = (0);
while(true){
if((i__6153__auto___18848 < len__6152__auto___18847)){
args__6159__auto__.push((arguments[i__6153__auto___18848]));

var G__18849 = (i__6153__auto___18848 + (1));
i__6153__auto___18848 = G__18849;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18841){
var map__18842 = p__18841;
var map__18842__$1 = ((((!((map__18842 == null)))?((((map__18842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18842):map__18842);
var opts = map__18842__$1;
var statearr_18844_18850 = state;
(statearr_18844_18850[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18842,map__18842__$1,opts){
return (function (val){
var statearr_18845_18851 = state;
(statearr_18845_18851[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18842,map__18842__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18846_18852 = state;
(statearr_18846_18852[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18837){
var G__18838 = cljs.core.first.call(null,seq18837);
var seq18837__$1 = cljs.core.next.call(null,seq18837);
var G__18839 = cljs.core.first.call(null,seq18837__$1);
var seq18837__$2 = cljs.core.next.call(null,seq18837__$1);
var G__18840 = cljs.core.first.call(null,seq18837__$2);
var seq18837__$3 = cljs.core.next.call(null,seq18837__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18838,G__18839,G__18840,seq18837__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19016 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19017){
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
this.meta19017 = meta19017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19018,meta19017__$1){
var self__ = this;
var _19018__$1 = this;
return (new cljs.core.async.t_cljs$core$async19016(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19017__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19018){
var self__ = this;
var _19018__$1 = this;
return self__.meta19017;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19016.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19017","meta19017",415944172,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19016";

cljs.core.async.t_cljs$core$async19016.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19016");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19016 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19016(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19017){
return (new cljs.core.async.t_cljs$core$async19016(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19017));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19016(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10274__auto___19179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19116){
var state_val_19117 = (state_19116[(1)]);
if((state_val_19117 === (7))){
var inst_19034 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19118_19180 = state_19116__$1;
(statearr_19118_19180[(2)] = inst_19034);

(statearr_19118_19180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (20))){
var inst_19046 = (state_19116[(7)]);
var state_19116__$1 = state_19116;
var statearr_19119_19181 = state_19116__$1;
(statearr_19119_19181[(2)] = inst_19046);

(statearr_19119_19181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (27))){
var state_19116__$1 = state_19116;
var statearr_19120_19182 = state_19116__$1;
(statearr_19120_19182[(2)] = null);

(statearr_19120_19182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (1))){
var inst_19022 = (state_19116[(8)]);
var inst_19022__$1 = calc_state.call(null);
var inst_19024 = (inst_19022__$1 == null);
var inst_19025 = cljs.core.not.call(null,inst_19024);
var state_19116__$1 = (function (){var statearr_19121 = state_19116;
(statearr_19121[(8)] = inst_19022__$1);

return statearr_19121;
})();
if(inst_19025){
var statearr_19122_19183 = state_19116__$1;
(statearr_19122_19183[(1)] = (2));

} else {
var statearr_19123_19184 = state_19116__$1;
(statearr_19123_19184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (24))){
var inst_19069 = (state_19116[(9)]);
var inst_19090 = (state_19116[(10)]);
var inst_19076 = (state_19116[(11)]);
var inst_19090__$1 = inst_19069.call(null,inst_19076);
var state_19116__$1 = (function (){var statearr_19124 = state_19116;
(statearr_19124[(10)] = inst_19090__$1);

return statearr_19124;
})();
if(cljs.core.truth_(inst_19090__$1)){
var statearr_19125_19185 = state_19116__$1;
(statearr_19125_19185[(1)] = (29));

} else {
var statearr_19126_19186 = state_19116__$1;
(statearr_19126_19186[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (4))){
var inst_19037 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19037)){
var statearr_19127_19187 = state_19116__$1;
(statearr_19127_19187[(1)] = (8));

} else {
var statearr_19128_19188 = state_19116__$1;
(statearr_19128_19188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (15))){
var inst_19063 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19063)){
var statearr_19129_19189 = state_19116__$1;
(statearr_19129_19189[(1)] = (19));

} else {
var statearr_19130_19190 = state_19116__$1;
(statearr_19130_19190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (21))){
var inst_19068 = (state_19116[(12)]);
var inst_19068__$1 = (state_19116[(2)]);
var inst_19069 = cljs.core.get.call(null,inst_19068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19070 = cljs.core.get.call(null,inst_19068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19071 = cljs.core.get.call(null,inst_19068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19116__$1 = (function (){var statearr_19131 = state_19116;
(statearr_19131[(9)] = inst_19069);

(statearr_19131[(13)] = inst_19070);

(statearr_19131[(12)] = inst_19068__$1);

return statearr_19131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19116__$1,(22),inst_19071);
} else {
if((state_val_19117 === (31))){
var inst_19098 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19098)){
var statearr_19132_19191 = state_19116__$1;
(statearr_19132_19191[(1)] = (32));

} else {
var statearr_19133_19192 = state_19116__$1;
(statearr_19133_19192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (32))){
var inst_19075 = (state_19116[(14)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19116__$1,(35),out,inst_19075);
} else {
if((state_val_19117 === (33))){
var inst_19068 = (state_19116[(12)]);
var inst_19046 = inst_19068;
var state_19116__$1 = (function (){var statearr_19134 = state_19116;
(statearr_19134[(7)] = inst_19046);

return statearr_19134;
})();
var statearr_19135_19193 = state_19116__$1;
(statearr_19135_19193[(2)] = null);

(statearr_19135_19193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (13))){
var inst_19046 = (state_19116[(7)]);
var inst_19053 = inst_19046.cljs$lang$protocol_mask$partition0$;
var inst_19054 = (inst_19053 & (64));
var inst_19055 = inst_19046.cljs$core$ISeq$;
var inst_19056 = (inst_19054) || (inst_19055);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19056)){
var statearr_19136_19194 = state_19116__$1;
(statearr_19136_19194[(1)] = (16));

} else {
var statearr_19137_19195 = state_19116__$1;
(statearr_19137_19195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (22))){
var inst_19075 = (state_19116[(14)]);
var inst_19076 = (state_19116[(11)]);
var inst_19074 = (state_19116[(2)]);
var inst_19075__$1 = cljs.core.nth.call(null,inst_19074,(0),null);
var inst_19076__$1 = cljs.core.nth.call(null,inst_19074,(1),null);
var inst_19077 = (inst_19075__$1 == null);
var inst_19078 = cljs.core._EQ_.call(null,inst_19076__$1,change);
var inst_19079 = (inst_19077) || (inst_19078);
var state_19116__$1 = (function (){var statearr_19138 = state_19116;
(statearr_19138[(14)] = inst_19075__$1);

(statearr_19138[(11)] = inst_19076__$1);

return statearr_19138;
})();
if(cljs.core.truth_(inst_19079)){
var statearr_19139_19196 = state_19116__$1;
(statearr_19139_19196[(1)] = (23));

} else {
var statearr_19140_19197 = state_19116__$1;
(statearr_19140_19197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (36))){
var inst_19068 = (state_19116[(12)]);
var inst_19046 = inst_19068;
var state_19116__$1 = (function (){var statearr_19141 = state_19116;
(statearr_19141[(7)] = inst_19046);

return statearr_19141;
})();
var statearr_19142_19198 = state_19116__$1;
(statearr_19142_19198[(2)] = null);

(statearr_19142_19198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (29))){
var inst_19090 = (state_19116[(10)]);
var state_19116__$1 = state_19116;
var statearr_19143_19199 = state_19116__$1;
(statearr_19143_19199[(2)] = inst_19090);

(statearr_19143_19199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (6))){
var state_19116__$1 = state_19116;
var statearr_19144_19200 = state_19116__$1;
(statearr_19144_19200[(2)] = false);

(statearr_19144_19200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (28))){
var inst_19086 = (state_19116[(2)]);
var inst_19087 = calc_state.call(null);
var inst_19046 = inst_19087;
var state_19116__$1 = (function (){var statearr_19145 = state_19116;
(statearr_19145[(7)] = inst_19046);

(statearr_19145[(15)] = inst_19086);

return statearr_19145;
})();
var statearr_19146_19201 = state_19116__$1;
(statearr_19146_19201[(2)] = null);

(statearr_19146_19201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (25))){
var inst_19112 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19147_19202 = state_19116__$1;
(statearr_19147_19202[(2)] = inst_19112);

(statearr_19147_19202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (34))){
var inst_19110 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19148_19203 = state_19116__$1;
(statearr_19148_19203[(2)] = inst_19110);

(statearr_19148_19203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (17))){
var state_19116__$1 = state_19116;
var statearr_19149_19204 = state_19116__$1;
(statearr_19149_19204[(2)] = false);

(statearr_19149_19204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (3))){
var state_19116__$1 = state_19116;
var statearr_19150_19205 = state_19116__$1;
(statearr_19150_19205[(2)] = false);

(statearr_19150_19205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (12))){
var inst_19114 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19116__$1,inst_19114);
} else {
if((state_val_19117 === (2))){
var inst_19022 = (state_19116[(8)]);
var inst_19027 = inst_19022.cljs$lang$protocol_mask$partition0$;
var inst_19028 = (inst_19027 & (64));
var inst_19029 = inst_19022.cljs$core$ISeq$;
var inst_19030 = (inst_19028) || (inst_19029);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19030)){
var statearr_19151_19206 = state_19116__$1;
(statearr_19151_19206[(1)] = (5));

} else {
var statearr_19152_19207 = state_19116__$1;
(statearr_19152_19207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (23))){
var inst_19075 = (state_19116[(14)]);
var inst_19081 = (inst_19075 == null);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19081)){
var statearr_19153_19208 = state_19116__$1;
(statearr_19153_19208[(1)] = (26));

} else {
var statearr_19154_19209 = state_19116__$1;
(statearr_19154_19209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (35))){
var inst_19101 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19101)){
var statearr_19155_19210 = state_19116__$1;
(statearr_19155_19210[(1)] = (36));

} else {
var statearr_19156_19211 = state_19116__$1;
(statearr_19156_19211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (19))){
var inst_19046 = (state_19116[(7)]);
var inst_19065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19046);
var state_19116__$1 = state_19116;
var statearr_19157_19212 = state_19116__$1;
(statearr_19157_19212[(2)] = inst_19065);

(statearr_19157_19212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (11))){
var inst_19046 = (state_19116[(7)]);
var inst_19050 = (inst_19046 == null);
var inst_19051 = cljs.core.not.call(null,inst_19050);
var state_19116__$1 = state_19116;
if(inst_19051){
var statearr_19158_19213 = state_19116__$1;
(statearr_19158_19213[(1)] = (13));

} else {
var statearr_19159_19214 = state_19116__$1;
(statearr_19159_19214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (9))){
var inst_19022 = (state_19116[(8)]);
var state_19116__$1 = state_19116;
var statearr_19160_19215 = state_19116__$1;
(statearr_19160_19215[(2)] = inst_19022);

(statearr_19160_19215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (5))){
var state_19116__$1 = state_19116;
var statearr_19161_19216 = state_19116__$1;
(statearr_19161_19216[(2)] = true);

(statearr_19161_19216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (14))){
var state_19116__$1 = state_19116;
var statearr_19162_19217 = state_19116__$1;
(statearr_19162_19217[(2)] = false);

(statearr_19162_19217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (26))){
var inst_19076 = (state_19116[(11)]);
var inst_19083 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19076);
var state_19116__$1 = state_19116;
var statearr_19163_19218 = state_19116__$1;
(statearr_19163_19218[(2)] = inst_19083);

(statearr_19163_19218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (16))){
var state_19116__$1 = state_19116;
var statearr_19164_19219 = state_19116__$1;
(statearr_19164_19219[(2)] = true);

(statearr_19164_19219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (38))){
var inst_19106 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19165_19220 = state_19116__$1;
(statearr_19165_19220[(2)] = inst_19106);

(statearr_19165_19220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (30))){
var inst_19069 = (state_19116[(9)]);
var inst_19070 = (state_19116[(13)]);
var inst_19076 = (state_19116[(11)]);
var inst_19093 = cljs.core.empty_QMARK_.call(null,inst_19069);
var inst_19094 = inst_19070.call(null,inst_19076);
var inst_19095 = cljs.core.not.call(null,inst_19094);
var inst_19096 = (inst_19093) && (inst_19095);
var state_19116__$1 = state_19116;
var statearr_19166_19221 = state_19116__$1;
(statearr_19166_19221[(2)] = inst_19096);

(statearr_19166_19221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (10))){
var inst_19022 = (state_19116[(8)]);
var inst_19042 = (state_19116[(2)]);
var inst_19043 = cljs.core.get.call(null,inst_19042,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19044 = cljs.core.get.call(null,inst_19042,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19045 = cljs.core.get.call(null,inst_19042,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19046 = inst_19022;
var state_19116__$1 = (function (){var statearr_19167 = state_19116;
(statearr_19167[(16)] = inst_19043);

(statearr_19167[(17)] = inst_19045);

(statearr_19167[(7)] = inst_19046);

(statearr_19167[(18)] = inst_19044);

return statearr_19167;
})();
var statearr_19168_19222 = state_19116__$1;
(statearr_19168_19222[(2)] = null);

(statearr_19168_19222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (18))){
var inst_19060 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19169_19223 = state_19116__$1;
(statearr_19169_19223[(2)] = inst_19060);

(statearr_19169_19223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (37))){
var state_19116__$1 = state_19116;
var statearr_19170_19224 = state_19116__$1;
(statearr_19170_19224[(2)] = null);

(statearr_19170_19224[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (8))){
var inst_19022 = (state_19116[(8)]);
var inst_19039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19022);
var state_19116__$1 = state_19116;
var statearr_19171_19225 = state_19116__$1;
(statearr_19171_19225[(2)] = inst_19039);

(statearr_19171_19225[(1)] = (10));


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
});})(c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10209__auto__,c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10210__auto__ = null;
var cljs$core$async$mix_$_state_machine__10210__auto____0 = (function (){
var statearr_19175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19175[(0)] = cljs$core$async$mix_$_state_machine__10210__auto__);

(statearr_19175[(1)] = (1));

return statearr_19175;
});
var cljs$core$async$mix_$_state_machine__10210__auto____1 = (function (state_19116){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19176){if((e19176 instanceof Object)){
var ex__10213__auto__ = e19176;
var statearr_19177_19226 = state_19116;
(statearr_19177_19226[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19227 = state_19116;
state_19116 = G__19227;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10210__auto__ = function(state_19116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10210__auto____1.call(this,state_19116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10210__auto____0;
cljs$core$async$mix_$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10210__auto____1;
return cljs$core$async$mix_$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10276__auto__ = (function (){var statearr_19178 = f__10275__auto__.call(null);
(statearr_19178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19179);

return statearr_19178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19228 = [];
var len__6152__auto___19231 = arguments.length;
var i__6153__auto___19232 = (0);
while(true){
if((i__6153__auto___19232 < len__6152__auto___19231)){
args19228.push((arguments[i__6153__auto___19232]));

var G__19233 = (i__6153__auto___19232 + (1));
i__6153__auto___19232 = G__19233;
continue;
} else {
}
break;
}

var G__19230 = args19228.length;
switch (G__19230) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19228.length)].join('')));

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
var args19236 = [];
var len__6152__auto___19361 = arguments.length;
var i__6153__auto___19362 = (0);
while(true){
if((i__6153__auto___19362 < len__6152__auto___19361)){
args19236.push((arguments[i__6153__auto___19362]));

var G__19363 = (i__6153__auto___19362 + (1));
i__6153__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var G__19238 = args19236.length;
switch (G__19238) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19236.length)].join('')));

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
return (function (p1__19235_SHARP_){
if(cljs.core.truth_(p1__19235_SHARP_.call(null,topic))){
return p1__19235_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19239 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19240){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19240 = meta19240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19241,meta19240__$1){
var self__ = this;
var _19241__$1 = this;
return (new cljs.core.async.t_cljs$core$async19239(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19240__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19241){
var self__ = this;
var _19241__$1 = this;
return self__.meta19240;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19240","meta19240",987448798,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19239";

cljs.core.async.t_cljs$core$async19239.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19239");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19239 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19240){
return (new cljs.core.async.t_cljs$core$async19239(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19240));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19239(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10274__auto___19365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19365,mults,ensure_mult,p){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19365,mults,ensure_mult,p){
return (function (state_19313){
var state_val_19314 = (state_19313[(1)]);
if((state_val_19314 === (7))){
var inst_19309 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19315_19366 = state_19313__$1;
(statearr_19315_19366[(2)] = inst_19309);

(statearr_19315_19366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (20))){
var state_19313__$1 = state_19313;
var statearr_19316_19367 = state_19313__$1;
(statearr_19316_19367[(2)] = null);

(statearr_19316_19367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (1))){
var state_19313__$1 = state_19313;
var statearr_19317_19368 = state_19313__$1;
(statearr_19317_19368[(2)] = null);

(statearr_19317_19368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (24))){
var inst_19292 = (state_19313[(7)]);
var inst_19301 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19292);
var state_19313__$1 = state_19313;
var statearr_19318_19369 = state_19313__$1;
(statearr_19318_19369[(2)] = inst_19301);

(statearr_19318_19369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (4))){
var inst_19244 = (state_19313[(8)]);
var inst_19244__$1 = (state_19313[(2)]);
var inst_19245 = (inst_19244__$1 == null);
var state_19313__$1 = (function (){var statearr_19319 = state_19313;
(statearr_19319[(8)] = inst_19244__$1);

return statearr_19319;
})();
if(cljs.core.truth_(inst_19245)){
var statearr_19320_19370 = state_19313__$1;
(statearr_19320_19370[(1)] = (5));

} else {
var statearr_19321_19371 = state_19313__$1;
(statearr_19321_19371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (15))){
var inst_19286 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19322_19372 = state_19313__$1;
(statearr_19322_19372[(2)] = inst_19286);

(statearr_19322_19372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (21))){
var inst_19306 = (state_19313[(2)]);
var state_19313__$1 = (function (){var statearr_19323 = state_19313;
(statearr_19323[(9)] = inst_19306);

return statearr_19323;
})();
var statearr_19324_19373 = state_19313__$1;
(statearr_19324_19373[(2)] = null);

(statearr_19324_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (13))){
var inst_19268 = (state_19313[(10)]);
var inst_19270 = cljs.core.chunked_seq_QMARK_.call(null,inst_19268);
var state_19313__$1 = state_19313;
if(inst_19270){
var statearr_19325_19374 = state_19313__$1;
(statearr_19325_19374[(1)] = (16));

} else {
var statearr_19326_19375 = state_19313__$1;
(statearr_19326_19375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (22))){
var inst_19298 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
if(cljs.core.truth_(inst_19298)){
var statearr_19327_19376 = state_19313__$1;
(statearr_19327_19376[(1)] = (23));

} else {
var statearr_19328_19377 = state_19313__$1;
(statearr_19328_19377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (6))){
var inst_19292 = (state_19313[(7)]);
var inst_19244 = (state_19313[(8)]);
var inst_19294 = (state_19313[(11)]);
var inst_19292__$1 = topic_fn.call(null,inst_19244);
var inst_19293 = cljs.core.deref.call(null,mults);
var inst_19294__$1 = cljs.core.get.call(null,inst_19293,inst_19292__$1);
var state_19313__$1 = (function (){var statearr_19329 = state_19313;
(statearr_19329[(7)] = inst_19292__$1);

(statearr_19329[(11)] = inst_19294__$1);

return statearr_19329;
})();
if(cljs.core.truth_(inst_19294__$1)){
var statearr_19330_19378 = state_19313__$1;
(statearr_19330_19378[(1)] = (19));

} else {
var statearr_19331_19379 = state_19313__$1;
(statearr_19331_19379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (25))){
var inst_19303 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19332_19380 = state_19313__$1;
(statearr_19332_19380[(2)] = inst_19303);

(statearr_19332_19380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (17))){
var inst_19268 = (state_19313[(10)]);
var inst_19277 = cljs.core.first.call(null,inst_19268);
var inst_19278 = cljs.core.async.muxch_STAR_.call(null,inst_19277);
var inst_19279 = cljs.core.async.close_BANG_.call(null,inst_19278);
var inst_19280 = cljs.core.next.call(null,inst_19268);
var inst_19254 = inst_19280;
var inst_19255 = null;
var inst_19256 = (0);
var inst_19257 = (0);
var state_19313__$1 = (function (){var statearr_19333 = state_19313;
(statearr_19333[(12)] = inst_19256);

(statearr_19333[(13)] = inst_19257);

(statearr_19333[(14)] = inst_19254);

(statearr_19333[(15)] = inst_19279);

(statearr_19333[(16)] = inst_19255);

return statearr_19333;
})();
var statearr_19334_19381 = state_19313__$1;
(statearr_19334_19381[(2)] = null);

(statearr_19334_19381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (3))){
var inst_19311 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19313__$1,inst_19311);
} else {
if((state_val_19314 === (12))){
var inst_19288 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19335_19382 = state_19313__$1;
(statearr_19335_19382[(2)] = inst_19288);

(statearr_19335_19382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (2))){
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19313__$1,(4),ch);
} else {
if((state_val_19314 === (23))){
var state_19313__$1 = state_19313;
var statearr_19336_19383 = state_19313__$1;
(statearr_19336_19383[(2)] = null);

(statearr_19336_19383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (19))){
var inst_19244 = (state_19313[(8)]);
var inst_19294 = (state_19313[(11)]);
var inst_19296 = cljs.core.async.muxch_STAR_.call(null,inst_19294);
var state_19313__$1 = state_19313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19313__$1,(22),inst_19296,inst_19244);
} else {
if((state_val_19314 === (11))){
var inst_19254 = (state_19313[(14)]);
var inst_19268 = (state_19313[(10)]);
var inst_19268__$1 = cljs.core.seq.call(null,inst_19254);
var state_19313__$1 = (function (){var statearr_19337 = state_19313;
(statearr_19337[(10)] = inst_19268__$1);

return statearr_19337;
})();
if(inst_19268__$1){
var statearr_19338_19384 = state_19313__$1;
(statearr_19338_19384[(1)] = (13));

} else {
var statearr_19339_19385 = state_19313__$1;
(statearr_19339_19385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (9))){
var inst_19290 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19340_19386 = state_19313__$1;
(statearr_19340_19386[(2)] = inst_19290);

(statearr_19340_19386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (5))){
var inst_19251 = cljs.core.deref.call(null,mults);
var inst_19252 = cljs.core.vals.call(null,inst_19251);
var inst_19253 = cljs.core.seq.call(null,inst_19252);
var inst_19254 = inst_19253;
var inst_19255 = null;
var inst_19256 = (0);
var inst_19257 = (0);
var state_19313__$1 = (function (){var statearr_19341 = state_19313;
(statearr_19341[(12)] = inst_19256);

(statearr_19341[(13)] = inst_19257);

(statearr_19341[(14)] = inst_19254);

(statearr_19341[(16)] = inst_19255);

return statearr_19341;
})();
var statearr_19342_19387 = state_19313__$1;
(statearr_19342_19387[(2)] = null);

(statearr_19342_19387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (14))){
var state_19313__$1 = state_19313;
var statearr_19346_19388 = state_19313__$1;
(statearr_19346_19388[(2)] = null);

(statearr_19346_19388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (16))){
var inst_19268 = (state_19313[(10)]);
var inst_19272 = cljs.core.chunk_first.call(null,inst_19268);
var inst_19273 = cljs.core.chunk_rest.call(null,inst_19268);
var inst_19274 = cljs.core.count.call(null,inst_19272);
var inst_19254 = inst_19273;
var inst_19255 = inst_19272;
var inst_19256 = inst_19274;
var inst_19257 = (0);
var state_19313__$1 = (function (){var statearr_19347 = state_19313;
(statearr_19347[(12)] = inst_19256);

(statearr_19347[(13)] = inst_19257);

(statearr_19347[(14)] = inst_19254);

(statearr_19347[(16)] = inst_19255);

return statearr_19347;
})();
var statearr_19348_19389 = state_19313__$1;
(statearr_19348_19389[(2)] = null);

(statearr_19348_19389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (10))){
var inst_19256 = (state_19313[(12)]);
var inst_19257 = (state_19313[(13)]);
var inst_19254 = (state_19313[(14)]);
var inst_19255 = (state_19313[(16)]);
var inst_19262 = cljs.core._nth.call(null,inst_19255,inst_19257);
var inst_19263 = cljs.core.async.muxch_STAR_.call(null,inst_19262);
var inst_19264 = cljs.core.async.close_BANG_.call(null,inst_19263);
var inst_19265 = (inst_19257 + (1));
var tmp19343 = inst_19256;
var tmp19344 = inst_19254;
var tmp19345 = inst_19255;
var inst_19254__$1 = tmp19344;
var inst_19255__$1 = tmp19345;
var inst_19256__$1 = tmp19343;
var inst_19257__$1 = inst_19265;
var state_19313__$1 = (function (){var statearr_19349 = state_19313;
(statearr_19349[(12)] = inst_19256__$1);

(statearr_19349[(13)] = inst_19257__$1);

(statearr_19349[(17)] = inst_19264);

(statearr_19349[(14)] = inst_19254__$1);

(statearr_19349[(16)] = inst_19255__$1);

return statearr_19349;
})();
var statearr_19350_19390 = state_19313__$1;
(statearr_19350_19390[(2)] = null);

(statearr_19350_19390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (18))){
var inst_19283 = (state_19313[(2)]);
var state_19313__$1 = state_19313;
var statearr_19351_19391 = state_19313__$1;
(statearr_19351_19391[(2)] = inst_19283);

(statearr_19351_19391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19314 === (8))){
var inst_19256 = (state_19313[(12)]);
var inst_19257 = (state_19313[(13)]);
var inst_19259 = (inst_19257 < inst_19256);
var inst_19260 = inst_19259;
var state_19313__$1 = state_19313;
if(cljs.core.truth_(inst_19260)){
var statearr_19352_19392 = state_19313__$1;
(statearr_19352_19392[(1)] = (10));

} else {
var statearr_19353_19393 = state_19313__$1;
(statearr_19353_19393[(1)] = (11));

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
});})(c__10274__auto___19365,mults,ensure_mult,p))
;
return ((function (switch__10209__auto__,c__10274__auto___19365,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19357[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19357[(1)] = (1));

return statearr_19357;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19313){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19358){if((e19358 instanceof Object)){
var ex__10213__auto__ = e19358;
var statearr_19359_19394 = state_19313;
(statearr_19359_19394[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19395 = state_19313;
state_19313 = G__19395;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19365,mults,ensure_mult,p))
})();
var state__10276__auto__ = (function (){var statearr_19360 = f__10275__auto__.call(null);
(statearr_19360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19365);

return statearr_19360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19365,mults,ensure_mult,p))
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
var args19396 = [];
var len__6152__auto___19399 = arguments.length;
var i__6153__auto___19400 = (0);
while(true){
if((i__6153__auto___19400 < len__6152__auto___19399)){
args19396.push((arguments[i__6153__auto___19400]));

var G__19401 = (i__6153__auto___19400 + (1));
i__6153__auto___19400 = G__19401;
continue;
} else {
}
break;
}

var G__19398 = args19396.length;
switch (G__19398) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19396.length)].join('')));

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
var args19403 = [];
var len__6152__auto___19406 = arguments.length;
var i__6153__auto___19407 = (0);
while(true){
if((i__6153__auto___19407 < len__6152__auto___19406)){
args19403.push((arguments[i__6153__auto___19407]));

var G__19408 = (i__6153__auto___19407 + (1));
i__6153__auto___19407 = G__19408;
continue;
} else {
}
break;
}

var G__19405 = args19403.length;
switch (G__19405) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19403.length)].join('')));

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
var args19410 = [];
var len__6152__auto___19481 = arguments.length;
var i__6153__auto___19482 = (0);
while(true){
if((i__6153__auto___19482 < len__6152__auto___19481)){
args19410.push((arguments[i__6153__auto___19482]));

var G__19483 = (i__6153__auto___19482 + (1));
i__6153__auto___19482 = G__19483;
continue;
} else {
}
break;
}

var G__19412 = args19410.length;
switch (G__19412) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19410.length)].join('')));

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
var c__10274__auto___19485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19451){
var state_val_19452 = (state_19451[(1)]);
if((state_val_19452 === (7))){
var state_19451__$1 = state_19451;
var statearr_19453_19486 = state_19451__$1;
(statearr_19453_19486[(2)] = null);

(statearr_19453_19486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (1))){
var state_19451__$1 = state_19451;
var statearr_19454_19487 = state_19451__$1;
(statearr_19454_19487[(2)] = null);

(statearr_19454_19487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (4))){
var inst_19415 = (state_19451[(7)]);
var inst_19417 = (inst_19415 < cnt);
var state_19451__$1 = state_19451;
if(cljs.core.truth_(inst_19417)){
var statearr_19455_19488 = state_19451__$1;
(statearr_19455_19488[(1)] = (6));

} else {
var statearr_19456_19489 = state_19451__$1;
(statearr_19456_19489[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (15))){
var inst_19447 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
var statearr_19457_19490 = state_19451__$1;
(statearr_19457_19490[(2)] = inst_19447);

(statearr_19457_19490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (13))){
var inst_19440 = cljs.core.async.close_BANG_.call(null,out);
var state_19451__$1 = state_19451;
var statearr_19458_19491 = state_19451__$1;
(statearr_19458_19491[(2)] = inst_19440);

(statearr_19458_19491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (6))){
var state_19451__$1 = state_19451;
var statearr_19459_19492 = state_19451__$1;
(statearr_19459_19492[(2)] = null);

(statearr_19459_19492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (3))){
var inst_19449 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19451__$1,inst_19449);
} else {
if((state_val_19452 === (12))){
var inst_19437 = (state_19451[(8)]);
var inst_19437__$1 = (state_19451[(2)]);
var inst_19438 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19437__$1);
var state_19451__$1 = (function (){var statearr_19460 = state_19451;
(statearr_19460[(8)] = inst_19437__$1);

return statearr_19460;
})();
if(cljs.core.truth_(inst_19438)){
var statearr_19461_19493 = state_19451__$1;
(statearr_19461_19493[(1)] = (13));

} else {
var statearr_19462_19494 = state_19451__$1;
(statearr_19462_19494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (2))){
var inst_19414 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19415 = (0);
var state_19451__$1 = (function (){var statearr_19463 = state_19451;
(statearr_19463[(7)] = inst_19415);

(statearr_19463[(9)] = inst_19414);

return statearr_19463;
})();
var statearr_19464_19495 = state_19451__$1;
(statearr_19464_19495[(2)] = null);

(statearr_19464_19495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (11))){
var inst_19415 = (state_19451[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19451,(10),Object,null,(9));
var inst_19424 = chs__$1.call(null,inst_19415);
var inst_19425 = done.call(null,inst_19415);
var inst_19426 = cljs.core.async.take_BANG_.call(null,inst_19424,inst_19425);
var state_19451__$1 = state_19451;
var statearr_19465_19496 = state_19451__$1;
(statearr_19465_19496[(2)] = inst_19426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19451__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (9))){
var inst_19415 = (state_19451[(7)]);
var inst_19428 = (state_19451[(2)]);
var inst_19429 = (inst_19415 + (1));
var inst_19415__$1 = inst_19429;
var state_19451__$1 = (function (){var statearr_19466 = state_19451;
(statearr_19466[(10)] = inst_19428);

(statearr_19466[(7)] = inst_19415__$1);

return statearr_19466;
})();
var statearr_19467_19497 = state_19451__$1;
(statearr_19467_19497[(2)] = null);

(statearr_19467_19497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (5))){
var inst_19435 = (state_19451[(2)]);
var state_19451__$1 = (function (){var statearr_19468 = state_19451;
(statearr_19468[(11)] = inst_19435);

return statearr_19468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19451__$1,(12),dchan);
} else {
if((state_val_19452 === (14))){
var inst_19437 = (state_19451[(8)]);
var inst_19442 = cljs.core.apply.call(null,f,inst_19437);
var state_19451__$1 = state_19451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19451__$1,(16),out,inst_19442);
} else {
if((state_val_19452 === (16))){
var inst_19444 = (state_19451[(2)]);
var state_19451__$1 = (function (){var statearr_19469 = state_19451;
(statearr_19469[(12)] = inst_19444);

return statearr_19469;
})();
var statearr_19470_19498 = state_19451__$1;
(statearr_19470_19498[(2)] = null);

(statearr_19470_19498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (10))){
var inst_19419 = (state_19451[(2)]);
var inst_19420 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19451__$1 = (function (){var statearr_19471 = state_19451;
(statearr_19471[(13)] = inst_19419);

return statearr_19471;
})();
var statearr_19472_19499 = state_19451__$1;
(statearr_19472_19499[(2)] = inst_19420);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19451__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19452 === (8))){
var inst_19433 = (state_19451[(2)]);
var state_19451__$1 = state_19451;
var statearr_19473_19500 = state_19451__$1;
(statearr_19473_19500[(2)] = inst_19433);

(statearr_19473_19500[(1)] = (5));


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
});})(c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10209__auto__,c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19477[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19477[(1)] = (1));

return statearr_19477;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19451){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19478){if((e19478 instanceof Object)){
var ex__10213__auto__ = e19478;
var statearr_19479_19501 = state_19451;
(statearr_19479_19501[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19502 = state_19451;
state_19451 = G__19502;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10276__auto__ = (function (){var statearr_19480 = f__10275__auto__.call(null);
(statearr_19480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19485);

return statearr_19480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19485,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19504 = [];
var len__6152__auto___19560 = arguments.length;
var i__6153__auto___19561 = (0);
while(true){
if((i__6153__auto___19561 < len__6152__auto___19560)){
args19504.push((arguments[i__6153__auto___19561]));

var G__19562 = (i__6153__auto___19561 + (1));
i__6153__auto___19561 = G__19562;
continue;
} else {
}
break;
}

var G__19506 = args19504.length;
switch (G__19506) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19504.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19564,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19564,out){
return (function (state_19536){
var state_val_19537 = (state_19536[(1)]);
if((state_val_19537 === (7))){
var inst_19516 = (state_19536[(7)]);
var inst_19515 = (state_19536[(8)]);
var inst_19515__$1 = (state_19536[(2)]);
var inst_19516__$1 = cljs.core.nth.call(null,inst_19515__$1,(0),null);
var inst_19517 = cljs.core.nth.call(null,inst_19515__$1,(1),null);
var inst_19518 = (inst_19516__$1 == null);
var state_19536__$1 = (function (){var statearr_19538 = state_19536;
(statearr_19538[(7)] = inst_19516__$1);

(statearr_19538[(8)] = inst_19515__$1);

(statearr_19538[(9)] = inst_19517);

return statearr_19538;
})();
if(cljs.core.truth_(inst_19518)){
var statearr_19539_19565 = state_19536__$1;
(statearr_19539_19565[(1)] = (8));

} else {
var statearr_19540_19566 = state_19536__$1;
(statearr_19540_19566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (1))){
var inst_19507 = cljs.core.vec.call(null,chs);
var inst_19508 = inst_19507;
var state_19536__$1 = (function (){var statearr_19541 = state_19536;
(statearr_19541[(10)] = inst_19508);

return statearr_19541;
})();
var statearr_19542_19567 = state_19536__$1;
(statearr_19542_19567[(2)] = null);

(statearr_19542_19567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (4))){
var inst_19508 = (state_19536[(10)]);
var state_19536__$1 = state_19536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19536__$1,(7),inst_19508);
} else {
if((state_val_19537 === (6))){
var inst_19532 = (state_19536[(2)]);
var state_19536__$1 = state_19536;
var statearr_19543_19568 = state_19536__$1;
(statearr_19543_19568[(2)] = inst_19532);

(statearr_19543_19568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (3))){
var inst_19534 = (state_19536[(2)]);
var state_19536__$1 = state_19536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19536__$1,inst_19534);
} else {
if((state_val_19537 === (2))){
var inst_19508 = (state_19536[(10)]);
var inst_19510 = cljs.core.count.call(null,inst_19508);
var inst_19511 = (inst_19510 > (0));
var state_19536__$1 = state_19536;
if(cljs.core.truth_(inst_19511)){
var statearr_19545_19569 = state_19536__$1;
(statearr_19545_19569[(1)] = (4));

} else {
var statearr_19546_19570 = state_19536__$1;
(statearr_19546_19570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (11))){
var inst_19508 = (state_19536[(10)]);
var inst_19525 = (state_19536[(2)]);
var tmp19544 = inst_19508;
var inst_19508__$1 = tmp19544;
var state_19536__$1 = (function (){var statearr_19547 = state_19536;
(statearr_19547[(10)] = inst_19508__$1);

(statearr_19547[(11)] = inst_19525);

return statearr_19547;
})();
var statearr_19548_19571 = state_19536__$1;
(statearr_19548_19571[(2)] = null);

(statearr_19548_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (9))){
var inst_19516 = (state_19536[(7)]);
var state_19536__$1 = state_19536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19536__$1,(11),out,inst_19516);
} else {
if((state_val_19537 === (5))){
var inst_19530 = cljs.core.async.close_BANG_.call(null,out);
var state_19536__$1 = state_19536;
var statearr_19549_19572 = state_19536__$1;
(statearr_19549_19572[(2)] = inst_19530);

(statearr_19549_19572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (10))){
var inst_19528 = (state_19536[(2)]);
var state_19536__$1 = state_19536;
var statearr_19550_19573 = state_19536__$1;
(statearr_19550_19573[(2)] = inst_19528);

(statearr_19550_19573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19537 === (8))){
var inst_19508 = (state_19536[(10)]);
var inst_19516 = (state_19536[(7)]);
var inst_19515 = (state_19536[(8)]);
var inst_19517 = (state_19536[(9)]);
var inst_19520 = (function (){var cs = inst_19508;
var vec__19513 = inst_19515;
var v = inst_19516;
var c = inst_19517;
return ((function (cs,vec__19513,v,c,inst_19508,inst_19516,inst_19515,inst_19517,state_val_19537,c__10274__auto___19564,out){
return (function (p1__19503_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19503_SHARP_);
});
;})(cs,vec__19513,v,c,inst_19508,inst_19516,inst_19515,inst_19517,state_val_19537,c__10274__auto___19564,out))
})();
var inst_19521 = cljs.core.filterv.call(null,inst_19520,inst_19508);
var inst_19508__$1 = inst_19521;
var state_19536__$1 = (function (){var statearr_19551 = state_19536;
(statearr_19551[(10)] = inst_19508__$1);

return statearr_19551;
})();
var statearr_19552_19574 = state_19536__$1;
(statearr_19552_19574[(2)] = null);

(statearr_19552_19574[(1)] = (2));


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
});})(c__10274__auto___19564,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19564,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19556[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19556[(1)] = (1));

return statearr_19556;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19536){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19557){if((e19557 instanceof Object)){
var ex__10213__auto__ = e19557;
var statearr_19558_19575 = state_19536;
(statearr_19558_19575[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19576 = state_19536;
state_19536 = G__19576;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19564,out))
})();
var state__10276__auto__ = (function (){var statearr_19559 = f__10275__auto__.call(null);
(statearr_19559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19564);

return statearr_19559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19564,out))
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
var args19577 = [];
var len__6152__auto___19626 = arguments.length;
var i__6153__auto___19627 = (0);
while(true){
if((i__6153__auto___19627 < len__6152__auto___19626)){
args19577.push((arguments[i__6153__auto___19627]));

var G__19628 = (i__6153__auto___19627 + (1));
i__6153__auto___19627 = G__19628;
continue;
} else {
}
break;
}

var G__19579 = args19577.length;
switch (G__19579) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19577.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19630,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19630,out){
return (function (state_19603){
var state_val_19604 = (state_19603[(1)]);
if((state_val_19604 === (7))){
var inst_19585 = (state_19603[(7)]);
var inst_19585__$1 = (state_19603[(2)]);
var inst_19586 = (inst_19585__$1 == null);
var inst_19587 = cljs.core.not.call(null,inst_19586);
var state_19603__$1 = (function (){var statearr_19605 = state_19603;
(statearr_19605[(7)] = inst_19585__$1);

return statearr_19605;
})();
if(inst_19587){
var statearr_19606_19631 = state_19603__$1;
(statearr_19606_19631[(1)] = (8));

} else {
var statearr_19607_19632 = state_19603__$1;
(statearr_19607_19632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (1))){
var inst_19580 = (0);
var state_19603__$1 = (function (){var statearr_19608 = state_19603;
(statearr_19608[(8)] = inst_19580);

return statearr_19608;
})();
var statearr_19609_19633 = state_19603__$1;
(statearr_19609_19633[(2)] = null);

(statearr_19609_19633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (4))){
var state_19603__$1 = state_19603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19603__$1,(7),ch);
} else {
if((state_val_19604 === (6))){
var inst_19598 = (state_19603[(2)]);
var state_19603__$1 = state_19603;
var statearr_19610_19634 = state_19603__$1;
(statearr_19610_19634[(2)] = inst_19598);

(statearr_19610_19634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (3))){
var inst_19600 = (state_19603[(2)]);
var inst_19601 = cljs.core.async.close_BANG_.call(null,out);
var state_19603__$1 = (function (){var statearr_19611 = state_19603;
(statearr_19611[(9)] = inst_19600);

return statearr_19611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19603__$1,inst_19601);
} else {
if((state_val_19604 === (2))){
var inst_19580 = (state_19603[(8)]);
var inst_19582 = (inst_19580 < n);
var state_19603__$1 = state_19603;
if(cljs.core.truth_(inst_19582)){
var statearr_19612_19635 = state_19603__$1;
(statearr_19612_19635[(1)] = (4));

} else {
var statearr_19613_19636 = state_19603__$1;
(statearr_19613_19636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (11))){
var inst_19580 = (state_19603[(8)]);
var inst_19590 = (state_19603[(2)]);
var inst_19591 = (inst_19580 + (1));
var inst_19580__$1 = inst_19591;
var state_19603__$1 = (function (){var statearr_19614 = state_19603;
(statearr_19614[(8)] = inst_19580__$1);

(statearr_19614[(10)] = inst_19590);

return statearr_19614;
})();
var statearr_19615_19637 = state_19603__$1;
(statearr_19615_19637[(2)] = null);

(statearr_19615_19637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (9))){
var state_19603__$1 = state_19603;
var statearr_19616_19638 = state_19603__$1;
(statearr_19616_19638[(2)] = null);

(statearr_19616_19638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (5))){
var state_19603__$1 = state_19603;
var statearr_19617_19639 = state_19603__$1;
(statearr_19617_19639[(2)] = null);

(statearr_19617_19639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (10))){
var inst_19595 = (state_19603[(2)]);
var state_19603__$1 = state_19603;
var statearr_19618_19640 = state_19603__$1;
(statearr_19618_19640[(2)] = inst_19595);

(statearr_19618_19640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19604 === (8))){
var inst_19585 = (state_19603[(7)]);
var state_19603__$1 = state_19603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19603__$1,(11),out,inst_19585);
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
});})(c__10274__auto___19630,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19630,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19622[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19622[(1)] = (1));

return statearr_19622;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19603){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19623){if((e19623 instanceof Object)){
var ex__10213__auto__ = e19623;
var statearr_19624_19641 = state_19603;
(statearr_19624_19641[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19642 = state_19603;
state_19603 = G__19642;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19630,out))
})();
var state__10276__auto__ = (function (){var statearr_19625 = f__10275__auto__.call(null);
(statearr_19625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19630);

return statearr_19625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19630,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19650 = (function (map_LT_,f,ch,meta19651){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19651 = meta19651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19652,meta19651__$1){
var self__ = this;
var _19652__$1 = this;
return (new cljs.core.async.t_cljs$core$async19650(self__.map_LT_,self__.f,self__.ch,meta19651__$1));
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19652){
var self__ = this;
var _19652__$1 = this;
return self__.meta19651;
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19653 = (function (map_LT_,f,ch,meta19651,_,fn1,meta19654){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19651 = meta19651;
this._ = _;
this.fn1 = fn1;
this.meta19654 = meta19654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19655,meta19654__$1){
var self__ = this;
var _19655__$1 = this;
return (new cljs.core.async.t_cljs$core$async19653(self__.map_LT_,self__.f,self__.ch,self__.meta19651,self__._,self__.fn1,meta19654__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19655){
var self__ = this;
var _19655__$1 = this;
return self__.meta19654;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19643_SHARP_){
return f1.call(null,(((p1__19643_SHARP_ == null))?null:self__.f.call(null,p1__19643_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19653.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19651","meta19651",1174731739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19650","cljs.core.async/t_cljs$core$async19650",-59114135,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19654","meta19654",-1514820209,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19653";

cljs.core.async.t_cljs$core$async19653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19653");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19653 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19653(map_LT___$1,f__$1,ch__$1,meta19651__$1,___$2,fn1__$1,meta19654){
return (new cljs.core.async.t_cljs$core$async19653(map_LT___$1,f__$1,ch__$1,meta19651__$1,___$2,fn1__$1,meta19654));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19653(self__.map_LT_,self__.f,self__.ch,self__.meta19651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19651","meta19651",1174731739,null)], null);
});

cljs.core.async.t_cljs$core$async19650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19650";

cljs.core.async.t_cljs$core$async19650.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19650");
});

cljs.core.async.__GT_t_cljs$core$async19650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19650(map_LT___$1,f__$1,ch__$1,meta19651){
return (new cljs.core.async.t_cljs$core$async19650(map_LT___$1,f__$1,ch__$1,meta19651));
});

}

return (new cljs.core.async.t_cljs$core$async19650(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19659 = (function (map_GT_,f,ch,meta19660){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19660 = meta19660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19661,meta19660__$1){
var self__ = this;
var _19661__$1 = this;
return (new cljs.core.async.t_cljs$core$async19659(self__.map_GT_,self__.f,self__.ch,meta19660__$1));
});

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19661){
var self__ = this;
var _19661__$1 = this;
return self__.meta19660;
});

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19660","meta19660",-986507325,null)], null);
});

cljs.core.async.t_cljs$core$async19659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19659";

cljs.core.async.t_cljs$core$async19659.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19659");
});

cljs.core.async.__GT_t_cljs$core$async19659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19659(map_GT___$1,f__$1,ch__$1,meta19660){
return (new cljs.core.async.t_cljs$core$async19659(map_GT___$1,f__$1,ch__$1,meta19660));
});

}

return (new cljs.core.async.t_cljs$core$async19659(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19665 = (function (filter_GT_,p,ch,meta19666){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19666 = meta19666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19667,meta19666__$1){
var self__ = this;
var _19667__$1 = this;
return (new cljs.core.async.t_cljs$core$async19665(self__.filter_GT_,self__.p,self__.ch,meta19666__$1));
});

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19667){
var self__ = this;
var _19667__$1 = this;
return self__.meta19666;
});

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19666","meta19666",966945059,null)], null);
});

cljs.core.async.t_cljs$core$async19665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19665";

cljs.core.async.t_cljs$core$async19665.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19665");
});

cljs.core.async.__GT_t_cljs$core$async19665 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19665(filter_GT___$1,p__$1,ch__$1,meta19666){
return (new cljs.core.async.t_cljs$core$async19665(filter_GT___$1,p__$1,ch__$1,meta19666));
});

}

return (new cljs.core.async.t_cljs$core$async19665(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19668 = [];
var len__6152__auto___19712 = arguments.length;
var i__6153__auto___19713 = (0);
while(true){
if((i__6153__auto___19713 < len__6152__auto___19712)){
args19668.push((arguments[i__6153__auto___19713]));

var G__19714 = (i__6153__auto___19713 + (1));
i__6153__auto___19713 = G__19714;
continue;
} else {
}
break;
}

var G__19670 = args19668.length;
switch (G__19670) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19668.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___19716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___19716,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___19716,out){
return (function (state_19691){
var state_val_19692 = (state_19691[(1)]);
if((state_val_19692 === (7))){
var inst_19687 = (state_19691[(2)]);
var state_19691__$1 = state_19691;
var statearr_19693_19717 = state_19691__$1;
(statearr_19693_19717[(2)] = inst_19687);

(statearr_19693_19717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (1))){
var state_19691__$1 = state_19691;
var statearr_19694_19718 = state_19691__$1;
(statearr_19694_19718[(2)] = null);

(statearr_19694_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (4))){
var inst_19673 = (state_19691[(7)]);
var inst_19673__$1 = (state_19691[(2)]);
var inst_19674 = (inst_19673__$1 == null);
var state_19691__$1 = (function (){var statearr_19695 = state_19691;
(statearr_19695[(7)] = inst_19673__$1);

return statearr_19695;
})();
if(cljs.core.truth_(inst_19674)){
var statearr_19696_19719 = state_19691__$1;
(statearr_19696_19719[(1)] = (5));

} else {
var statearr_19697_19720 = state_19691__$1;
(statearr_19697_19720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (6))){
var inst_19673 = (state_19691[(7)]);
var inst_19678 = p.call(null,inst_19673);
var state_19691__$1 = state_19691;
if(cljs.core.truth_(inst_19678)){
var statearr_19698_19721 = state_19691__$1;
(statearr_19698_19721[(1)] = (8));

} else {
var statearr_19699_19722 = state_19691__$1;
(statearr_19699_19722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (3))){
var inst_19689 = (state_19691[(2)]);
var state_19691__$1 = state_19691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19691__$1,inst_19689);
} else {
if((state_val_19692 === (2))){
var state_19691__$1 = state_19691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19691__$1,(4),ch);
} else {
if((state_val_19692 === (11))){
var inst_19681 = (state_19691[(2)]);
var state_19691__$1 = state_19691;
var statearr_19700_19723 = state_19691__$1;
(statearr_19700_19723[(2)] = inst_19681);

(statearr_19700_19723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (9))){
var state_19691__$1 = state_19691;
var statearr_19701_19724 = state_19691__$1;
(statearr_19701_19724[(2)] = null);

(statearr_19701_19724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (5))){
var inst_19676 = cljs.core.async.close_BANG_.call(null,out);
var state_19691__$1 = state_19691;
var statearr_19702_19725 = state_19691__$1;
(statearr_19702_19725[(2)] = inst_19676);

(statearr_19702_19725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (10))){
var inst_19684 = (state_19691[(2)]);
var state_19691__$1 = (function (){var statearr_19703 = state_19691;
(statearr_19703[(8)] = inst_19684);

return statearr_19703;
})();
var statearr_19704_19726 = state_19691__$1;
(statearr_19704_19726[(2)] = null);

(statearr_19704_19726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19692 === (8))){
var inst_19673 = (state_19691[(7)]);
var state_19691__$1 = state_19691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19691__$1,(11),out,inst_19673);
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
});})(c__10274__auto___19716,out))
;
return ((function (switch__10209__auto__,c__10274__auto___19716,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_19708 = [null,null,null,null,null,null,null,null,null];
(statearr_19708[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_19708[(1)] = (1));

return statearr_19708;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_19691){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19709){if((e19709 instanceof Object)){
var ex__10213__auto__ = e19709;
var statearr_19710_19727 = state_19691;
(statearr_19710_19727[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19728 = state_19691;
state_19691 = G__19728;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_19691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_19691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___19716,out))
})();
var state__10276__auto__ = (function (){var statearr_19711 = f__10275__auto__.call(null);
(statearr_19711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___19716);

return statearr_19711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___19716,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19729 = [];
var len__6152__auto___19732 = arguments.length;
var i__6153__auto___19733 = (0);
while(true){
if((i__6153__auto___19733 < len__6152__auto___19732)){
args19729.push((arguments[i__6153__auto___19733]));

var G__19734 = (i__6153__auto___19733 + (1));
i__6153__auto___19733 = G__19734;
continue;
} else {
}
break;
}

var G__19731 = args19729.length;
switch (G__19731) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19729.length)].join('')));

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
return (function (state_19901){
var state_val_19902 = (state_19901[(1)]);
if((state_val_19902 === (7))){
var inst_19897 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19903_19944 = state_19901__$1;
(statearr_19903_19944[(2)] = inst_19897);

(statearr_19903_19944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (20))){
var inst_19867 = (state_19901[(7)]);
var inst_19878 = (state_19901[(2)]);
var inst_19879 = cljs.core.next.call(null,inst_19867);
var inst_19853 = inst_19879;
var inst_19854 = null;
var inst_19855 = (0);
var inst_19856 = (0);
var state_19901__$1 = (function (){var statearr_19904 = state_19901;
(statearr_19904[(8)] = inst_19878);

(statearr_19904[(9)] = inst_19853);

(statearr_19904[(10)] = inst_19854);

(statearr_19904[(11)] = inst_19856);

(statearr_19904[(12)] = inst_19855);

return statearr_19904;
})();
var statearr_19905_19945 = state_19901__$1;
(statearr_19905_19945[(2)] = null);

(statearr_19905_19945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (1))){
var state_19901__$1 = state_19901;
var statearr_19906_19946 = state_19901__$1;
(statearr_19906_19946[(2)] = null);

(statearr_19906_19946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (4))){
var inst_19842 = (state_19901[(13)]);
var inst_19842__$1 = (state_19901[(2)]);
var inst_19843 = (inst_19842__$1 == null);
var state_19901__$1 = (function (){var statearr_19907 = state_19901;
(statearr_19907[(13)] = inst_19842__$1);

return statearr_19907;
})();
if(cljs.core.truth_(inst_19843)){
var statearr_19908_19947 = state_19901__$1;
(statearr_19908_19947[(1)] = (5));

} else {
var statearr_19909_19948 = state_19901__$1;
(statearr_19909_19948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (15))){
var state_19901__$1 = state_19901;
var statearr_19913_19949 = state_19901__$1;
(statearr_19913_19949[(2)] = null);

(statearr_19913_19949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (21))){
var state_19901__$1 = state_19901;
var statearr_19914_19950 = state_19901__$1;
(statearr_19914_19950[(2)] = null);

(statearr_19914_19950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (13))){
var inst_19853 = (state_19901[(9)]);
var inst_19854 = (state_19901[(10)]);
var inst_19856 = (state_19901[(11)]);
var inst_19855 = (state_19901[(12)]);
var inst_19863 = (state_19901[(2)]);
var inst_19864 = (inst_19856 + (1));
var tmp19910 = inst_19853;
var tmp19911 = inst_19854;
var tmp19912 = inst_19855;
var inst_19853__$1 = tmp19910;
var inst_19854__$1 = tmp19911;
var inst_19855__$1 = tmp19912;
var inst_19856__$1 = inst_19864;
var state_19901__$1 = (function (){var statearr_19915 = state_19901;
(statearr_19915[(9)] = inst_19853__$1);

(statearr_19915[(10)] = inst_19854__$1);

(statearr_19915[(11)] = inst_19856__$1);

(statearr_19915[(12)] = inst_19855__$1);

(statearr_19915[(14)] = inst_19863);

return statearr_19915;
})();
var statearr_19916_19951 = state_19901__$1;
(statearr_19916_19951[(2)] = null);

(statearr_19916_19951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (22))){
var state_19901__$1 = state_19901;
var statearr_19917_19952 = state_19901__$1;
(statearr_19917_19952[(2)] = null);

(statearr_19917_19952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (6))){
var inst_19842 = (state_19901[(13)]);
var inst_19851 = f.call(null,inst_19842);
var inst_19852 = cljs.core.seq.call(null,inst_19851);
var inst_19853 = inst_19852;
var inst_19854 = null;
var inst_19855 = (0);
var inst_19856 = (0);
var state_19901__$1 = (function (){var statearr_19918 = state_19901;
(statearr_19918[(9)] = inst_19853);

(statearr_19918[(10)] = inst_19854);

(statearr_19918[(11)] = inst_19856);

(statearr_19918[(12)] = inst_19855);

return statearr_19918;
})();
var statearr_19919_19953 = state_19901__$1;
(statearr_19919_19953[(2)] = null);

(statearr_19919_19953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (17))){
var inst_19867 = (state_19901[(7)]);
var inst_19871 = cljs.core.chunk_first.call(null,inst_19867);
var inst_19872 = cljs.core.chunk_rest.call(null,inst_19867);
var inst_19873 = cljs.core.count.call(null,inst_19871);
var inst_19853 = inst_19872;
var inst_19854 = inst_19871;
var inst_19855 = inst_19873;
var inst_19856 = (0);
var state_19901__$1 = (function (){var statearr_19920 = state_19901;
(statearr_19920[(9)] = inst_19853);

(statearr_19920[(10)] = inst_19854);

(statearr_19920[(11)] = inst_19856);

(statearr_19920[(12)] = inst_19855);

return statearr_19920;
})();
var statearr_19921_19954 = state_19901__$1;
(statearr_19921_19954[(2)] = null);

(statearr_19921_19954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (3))){
var inst_19899 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19901__$1,inst_19899);
} else {
if((state_val_19902 === (12))){
var inst_19887 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19922_19955 = state_19901__$1;
(statearr_19922_19955[(2)] = inst_19887);

(statearr_19922_19955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (2))){
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19901__$1,(4),in$);
} else {
if((state_val_19902 === (23))){
var inst_19895 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19923_19956 = state_19901__$1;
(statearr_19923_19956[(2)] = inst_19895);

(statearr_19923_19956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (19))){
var inst_19882 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19924_19957 = state_19901__$1;
(statearr_19924_19957[(2)] = inst_19882);

(statearr_19924_19957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (11))){
var inst_19853 = (state_19901[(9)]);
var inst_19867 = (state_19901[(7)]);
var inst_19867__$1 = cljs.core.seq.call(null,inst_19853);
var state_19901__$1 = (function (){var statearr_19925 = state_19901;
(statearr_19925[(7)] = inst_19867__$1);

return statearr_19925;
})();
if(inst_19867__$1){
var statearr_19926_19958 = state_19901__$1;
(statearr_19926_19958[(1)] = (14));

} else {
var statearr_19927_19959 = state_19901__$1;
(statearr_19927_19959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (9))){
var inst_19889 = (state_19901[(2)]);
var inst_19890 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19901__$1 = (function (){var statearr_19928 = state_19901;
(statearr_19928[(15)] = inst_19889);

return statearr_19928;
})();
if(cljs.core.truth_(inst_19890)){
var statearr_19929_19960 = state_19901__$1;
(statearr_19929_19960[(1)] = (21));

} else {
var statearr_19930_19961 = state_19901__$1;
(statearr_19930_19961[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (5))){
var inst_19845 = cljs.core.async.close_BANG_.call(null,out);
var state_19901__$1 = state_19901;
var statearr_19931_19962 = state_19901__$1;
(statearr_19931_19962[(2)] = inst_19845);

(statearr_19931_19962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (14))){
var inst_19867 = (state_19901[(7)]);
var inst_19869 = cljs.core.chunked_seq_QMARK_.call(null,inst_19867);
var state_19901__$1 = state_19901;
if(inst_19869){
var statearr_19932_19963 = state_19901__$1;
(statearr_19932_19963[(1)] = (17));

} else {
var statearr_19933_19964 = state_19901__$1;
(statearr_19933_19964[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (16))){
var inst_19885 = (state_19901[(2)]);
var state_19901__$1 = state_19901;
var statearr_19934_19965 = state_19901__$1;
(statearr_19934_19965[(2)] = inst_19885);

(statearr_19934_19965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19902 === (10))){
var inst_19854 = (state_19901[(10)]);
var inst_19856 = (state_19901[(11)]);
var inst_19861 = cljs.core._nth.call(null,inst_19854,inst_19856);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19901__$1,(13),out,inst_19861);
} else {
if((state_val_19902 === (18))){
var inst_19867 = (state_19901[(7)]);
var inst_19876 = cljs.core.first.call(null,inst_19867);
var state_19901__$1 = state_19901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19901__$1,(20),out,inst_19876);
} else {
if((state_val_19902 === (8))){
var inst_19856 = (state_19901[(11)]);
var inst_19855 = (state_19901[(12)]);
var inst_19858 = (inst_19856 < inst_19855);
var inst_19859 = inst_19858;
var state_19901__$1 = state_19901;
if(cljs.core.truth_(inst_19859)){
var statearr_19935_19966 = state_19901__$1;
(statearr_19935_19966[(1)] = (10));

} else {
var statearr_19936_19967 = state_19901__$1;
(statearr_19936_19967[(1)] = (11));

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
var statearr_19940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__);

(statearr_19940[(1)] = (1));

return statearr_19940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1 = (function (state_19901){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_19901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e19941){if((e19941 instanceof Object)){
var ex__10213__auto__ = e19941;
var statearr_19942_19968 = state_19901;
(statearr_19942_19968[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19969 = state_19901;
state_19901 = G__19969;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__ = function(state_19901){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1.call(this,state_19901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto__))
})();
var state__10276__auto__ = (function (){var statearr_19943 = f__10275__auto__.call(null);
(statearr_19943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto__);

return statearr_19943;
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
var args19970 = [];
var len__6152__auto___19973 = arguments.length;
var i__6153__auto___19974 = (0);
while(true){
if((i__6153__auto___19974 < len__6152__auto___19973)){
args19970.push((arguments[i__6153__auto___19974]));

var G__19975 = (i__6153__auto___19974 + (1));
i__6153__auto___19974 = G__19975;
continue;
} else {
}
break;
}

var G__19972 = args19970.length;
switch (G__19972) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19970.length)].join('')));

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
var args19977 = [];
var len__6152__auto___19980 = arguments.length;
var i__6153__auto___19981 = (0);
while(true){
if((i__6153__auto___19981 < len__6152__auto___19980)){
args19977.push((arguments[i__6153__auto___19981]));

var G__19982 = (i__6153__auto___19981 + (1));
i__6153__auto___19981 = G__19982;
continue;
} else {
}
break;
}

var G__19979 = args19977.length;
switch (G__19979) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19977.length)].join('')));

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
var args19984 = [];
var len__6152__auto___20035 = arguments.length;
var i__6153__auto___20036 = (0);
while(true){
if((i__6153__auto___20036 < len__6152__auto___20035)){
args19984.push((arguments[i__6153__auto___20036]));

var G__20037 = (i__6153__auto___20036 + (1));
i__6153__auto___20036 = G__20037;
continue;
} else {
}
break;
}

var G__19986 = args19984.length;
switch (G__19986) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19984.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20039,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20039,out){
return (function (state_20010){
var state_val_20011 = (state_20010[(1)]);
if((state_val_20011 === (7))){
var inst_20005 = (state_20010[(2)]);
var state_20010__$1 = state_20010;
var statearr_20012_20040 = state_20010__$1;
(statearr_20012_20040[(2)] = inst_20005);

(statearr_20012_20040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (1))){
var inst_19987 = null;
var state_20010__$1 = (function (){var statearr_20013 = state_20010;
(statearr_20013[(7)] = inst_19987);

return statearr_20013;
})();
var statearr_20014_20041 = state_20010__$1;
(statearr_20014_20041[(2)] = null);

(statearr_20014_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (4))){
var inst_19990 = (state_20010[(8)]);
var inst_19990__$1 = (state_20010[(2)]);
var inst_19991 = (inst_19990__$1 == null);
var inst_19992 = cljs.core.not.call(null,inst_19991);
var state_20010__$1 = (function (){var statearr_20015 = state_20010;
(statearr_20015[(8)] = inst_19990__$1);

return statearr_20015;
})();
if(inst_19992){
var statearr_20016_20042 = state_20010__$1;
(statearr_20016_20042[(1)] = (5));

} else {
var statearr_20017_20043 = state_20010__$1;
(statearr_20017_20043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (6))){
var state_20010__$1 = state_20010;
var statearr_20018_20044 = state_20010__$1;
(statearr_20018_20044[(2)] = null);

(statearr_20018_20044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (3))){
var inst_20007 = (state_20010[(2)]);
var inst_20008 = cljs.core.async.close_BANG_.call(null,out);
var state_20010__$1 = (function (){var statearr_20019 = state_20010;
(statearr_20019[(9)] = inst_20007);

return statearr_20019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20010__$1,inst_20008);
} else {
if((state_val_20011 === (2))){
var state_20010__$1 = state_20010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20010__$1,(4),ch);
} else {
if((state_val_20011 === (11))){
var inst_19990 = (state_20010[(8)]);
var inst_19999 = (state_20010[(2)]);
var inst_19987 = inst_19990;
var state_20010__$1 = (function (){var statearr_20020 = state_20010;
(statearr_20020[(10)] = inst_19999);

(statearr_20020[(7)] = inst_19987);

return statearr_20020;
})();
var statearr_20021_20045 = state_20010__$1;
(statearr_20021_20045[(2)] = null);

(statearr_20021_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (9))){
var inst_19990 = (state_20010[(8)]);
var state_20010__$1 = state_20010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20010__$1,(11),out,inst_19990);
} else {
if((state_val_20011 === (5))){
var inst_19990 = (state_20010[(8)]);
var inst_19987 = (state_20010[(7)]);
var inst_19994 = cljs.core._EQ_.call(null,inst_19990,inst_19987);
var state_20010__$1 = state_20010;
if(inst_19994){
var statearr_20023_20046 = state_20010__$1;
(statearr_20023_20046[(1)] = (8));

} else {
var statearr_20024_20047 = state_20010__$1;
(statearr_20024_20047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (10))){
var inst_20002 = (state_20010[(2)]);
var state_20010__$1 = state_20010;
var statearr_20025_20048 = state_20010__$1;
(statearr_20025_20048[(2)] = inst_20002);

(statearr_20025_20048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20011 === (8))){
var inst_19987 = (state_20010[(7)]);
var tmp20022 = inst_19987;
var inst_19987__$1 = tmp20022;
var state_20010__$1 = (function (){var statearr_20026 = state_20010;
(statearr_20026[(7)] = inst_19987__$1);

return statearr_20026;
})();
var statearr_20027_20049 = state_20010__$1;
(statearr_20027_20049[(2)] = null);

(statearr_20027_20049[(1)] = (2));


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
});})(c__10274__auto___20039,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20039,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20031[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20031[(1)] = (1));

return statearr_20031;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20010){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20032){if((e20032 instanceof Object)){
var ex__10213__auto__ = e20032;
var statearr_20033_20050 = state_20010;
(statearr_20033_20050[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_20010;
state_20010 = G__20051;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20039,out))
})();
var state__10276__auto__ = (function (){var statearr_20034 = f__10275__auto__.call(null);
(statearr_20034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20039);

return statearr_20034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20039,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20052 = [];
var len__6152__auto___20122 = arguments.length;
var i__6153__auto___20123 = (0);
while(true){
if((i__6153__auto___20123 < len__6152__auto___20122)){
args20052.push((arguments[i__6153__auto___20123]));

var G__20124 = (i__6153__auto___20123 + (1));
i__6153__auto___20123 = G__20124;
continue;
} else {
}
break;
}

var G__20054 = args20052.length;
switch (G__20054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20052.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20126,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20126,out){
return (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20094_20127 = state_20092__$1;
(statearr_20094_20127[(2)] = inst_20088);

(statearr_20094_20127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var inst_20055 = (new Array(n));
var inst_20056 = inst_20055;
var inst_20057 = (0);
var state_20092__$1 = (function (){var statearr_20095 = state_20092;
(statearr_20095[(7)] = inst_20057);

(statearr_20095[(8)] = inst_20056);

return statearr_20095;
})();
var statearr_20096_20128 = state_20092__$1;
(statearr_20096_20128[(2)] = null);

(statearr_20096_20128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20060 = (state_20092[(9)]);
var inst_20060__$1 = (state_20092[(2)]);
var inst_20061 = (inst_20060__$1 == null);
var inst_20062 = cljs.core.not.call(null,inst_20061);
var state_20092__$1 = (function (){var statearr_20097 = state_20092;
(statearr_20097[(9)] = inst_20060__$1);

return statearr_20097;
})();
if(inst_20062){
var statearr_20098_20129 = state_20092__$1;
(statearr_20098_20129[(1)] = (5));

} else {
var statearr_20099_20130 = state_20092__$1;
(statearr_20099_20130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (15))){
var inst_20082 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20100_20131 = state_20092__$1;
(statearr_20100_20131[(2)] = inst_20082);

(statearr_20100_20131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (13))){
var state_20092__$1 = state_20092;
var statearr_20101_20132 = state_20092__$1;
(statearr_20101_20132[(2)] = null);

(statearr_20101_20132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (6))){
var inst_20057 = (state_20092[(7)]);
var inst_20078 = (inst_20057 > (0));
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20078)){
var statearr_20102_20133 = state_20092__$1;
(statearr_20102_20133[(1)] = (12));

} else {
var statearr_20103_20134 = state_20092__$1;
(statearr_20103_20134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (12))){
var inst_20056 = (state_20092[(8)]);
var inst_20080 = cljs.core.vec.call(null,inst_20056);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(15),out,inst_20080);
} else {
if((state_val_20093 === (2))){
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20092__$1,(4),ch);
} else {
if((state_val_20093 === (11))){
var inst_20072 = (state_20092[(2)]);
var inst_20073 = (new Array(n));
var inst_20056 = inst_20073;
var inst_20057 = (0);
var state_20092__$1 = (function (){var statearr_20104 = state_20092;
(statearr_20104[(10)] = inst_20072);

(statearr_20104[(7)] = inst_20057);

(statearr_20104[(8)] = inst_20056);

return statearr_20104;
})();
var statearr_20105_20135 = state_20092__$1;
(statearr_20105_20135[(2)] = null);

(statearr_20105_20135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var inst_20056 = (state_20092[(8)]);
var inst_20070 = cljs.core.vec.call(null,inst_20056);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(11),out,inst_20070);
} else {
if((state_val_20093 === (5))){
var inst_20060 = (state_20092[(9)]);
var inst_20057 = (state_20092[(7)]);
var inst_20056 = (state_20092[(8)]);
var inst_20065 = (state_20092[(11)]);
var inst_20064 = (inst_20056[inst_20057] = inst_20060);
var inst_20065__$1 = (inst_20057 + (1));
var inst_20066 = (inst_20065__$1 < n);
var state_20092__$1 = (function (){var statearr_20106 = state_20092;
(statearr_20106[(11)] = inst_20065__$1);

(statearr_20106[(12)] = inst_20064);

return statearr_20106;
})();
if(cljs.core.truth_(inst_20066)){
var statearr_20107_20136 = state_20092__$1;
(statearr_20107_20136[(1)] = (8));

} else {
var statearr_20108_20137 = state_20092__$1;
(statearr_20108_20137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (14))){
var inst_20085 = (state_20092[(2)]);
var inst_20086 = cljs.core.async.close_BANG_.call(null,out);
var state_20092__$1 = (function (){var statearr_20110 = state_20092;
(statearr_20110[(13)] = inst_20085);

return statearr_20110;
})();
var statearr_20111_20138 = state_20092__$1;
(statearr_20111_20138[(2)] = inst_20086);

(statearr_20111_20138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20076 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20112_20139 = state_20092__$1;
(statearr_20112_20139[(2)] = inst_20076);

(statearr_20112_20139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20056 = (state_20092[(8)]);
var inst_20065 = (state_20092[(11)]);
var tmp20109 = inst_20056;
var inst_20056__$1 = tmp20109;
var inst_20057 = inst_20065;
var state_20092__$1 = (function (){var statearr_20113 = state_20092;
(statearr_20113[(7)] = inst_20057);

(statearr_20113[(8)] = inst_20056__$1);

return statearr_20113;
})();
var statearr_20114_20140 = state_20092__$1;
(statearr_20114_20140[(2)] = null);

(statearr_20114_20140[(1)] = (2));


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
});})(c__10274__auto___20126,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20126,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20118[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20118[(1)] = (1));

return statearr_20118;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20092){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20119){if((e20119 instanceof Object)){
var ex__10213__auto__ = e20119;
var statearr_20120_20141 = state_20092;
(statearr_20120_20141[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20142 = state_20092;
state_20092 = G__20142;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20126,out))
})();
var state__10276__auto__ = (function (){var statearr_20121 = f__10275__auto__.call(null);
(statearr_20121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20126);

return statearr_20121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20126,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20143 = [];
var len__6152__auto___20217 = arguments.length;
var i__6153__auto___20218 = (0);
while(true){
if((i__6153__auto___20218 < len__6152__auto___20217)){
args20143.push((arguments[i__6153__auto___20218]));

var G__20219 = (i__6153__auto___20218 + (1));
i__6153__auto___20218 = G__20219;
continue;
} else {
}
break;
}

var G__20145 = args20143.length;
switch (G__20145) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20143.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10274__auto___20221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10274__auto___20221,out){
return (function (){
var f__10275__auto__ = (function (){var switch__10209__auto__ = ((function (c__10274__auto___20221,out){
return (function (state_20187){
var state_val_20188 = (state_20187[(1)]);
if((state_val_20188 === (7))){
var inst_20183 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
var statearr_20189_20222 = state_20187__$1;
(statearr_20189_20222[(2)] = inst_20183);

(statearr_20189_20222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (1))){
var inst_20146 = [];
var inst_20147 = inst_20146;
var inst_20148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20187__$1 = (function (){var statearr_20190 = state_20187;
(statearr_20190[(7)] = inst_20148);

(statearr_20190[(8)] = inst_20147);

return statearr_20190;
})();
var statearr_20191_20223 = state_20187__$1;
(statearr_20191_20223[(2)] = null);

(statearr_20191_20223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (4))){
var inst_20151 = (state_20187[(9)]);
var inst_20151__$1 = (state_20187[(2)]);
var inst_20152 = (inst_20151__$1 == null);
var inst_20153 = cljs.core.not.call(null,inst_20152);
var state_20187__$1 = (function (){var statearr_20192 = state_20187;
(statearr_20192[(9)] = inst_20151__$1);

return statearr_20192;
})();
if(inst_20153){
var statearr_20193_20224 = state_20187__$1;
(statearr_20193_20224[(1)] = (5));

} else {
var statearr_20194_20225 = state_20187__$1;
(statearr_20194_20225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (15))){
var inst_20177 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
var statearr_20195_20226 = state_20187__$1;
(statearr_20195_20226[(2)] = inst_20177);

(statearr_20195_20226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (13))){
var state_20187__$1 = state_20187;
var statearr_20196_20227 = state_20187__$1;
(statearr_20196_20227[(2)] = null);

(statearr_20196_20227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (6))){
var inst_20147 = (state_20187[(8)]);
var inst_20172 = inst_20147.length;
var inst_20173 = (inst_20172 > (0));
var state_20187__$1 = state_20187;
if(cljs.core.truth_(inst_20173)){
var statearr_20197_20228 = state_20187__$1;
(statearr_20197_20228[(1)] = (12));

} else {
var statearr_20198_20229 = state_20187__$1;
(statearr_20198_20229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (3))){
var inst_20185 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20187__$1,inst_20185);
} else {
if((state_val_20188 === (12))){
var inst_20147 = (state_20187[(8)]);
var inst_20175 = cljs.core.vec.call(null,inst_20147);
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20187__$1,(15),out,inst_20175);
} else {
if((state_val_20188 === (2))){
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20187__$1,(4),ch);
} else {
if((state_val_20188 === (11))){
var inst_20155 = (state_20187[(10)]);
var inst_20151 = (state_20187[(9)]);
var inst_20165 = (state_20187[(2)]);
var inst_20166 = [];
var inst_20167 = inst_20166.push(inst_20151);
var inst_20147 = inst_20166;
var inst_20148 = inst_20155;
var state_20187__$1 = (function (){var statearr_20199 = state_20187;
(statearr_20199[(7)] = inst_20148);

(statearr_20199[(8)] = inst_20147);

(statearr_20199[(11)] = inst_20165);

(statearr_20199[(12)] = inst_20167);

return statearr_20199;
})();
var statearr_20200_20230 = state_20187__$1;
(statearr_20200_20230[(2)] = null);

(statearr_20200_20230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (9))){
var inst_20147 = (state_20187[(8)]);
var inst_20163 = cljs.core.vec.call(null,inst_20147);
var state_20187__$1 = state_20187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20187__$1,(11),out,inst_20163);
} else {
if((state_val_20188 === (5))){
var inst_20148 = (state_20187[(7)]);
var inst_20155 = (state_20187[(10)]);
var inst_20151 = (state_20187[(9)]);
var inst_20155__$1 = f.call(null,inst_20151);
var inst_20156 = cljs.core._EQ_.call(null,inst_20155__$1,inst_20148);
var inst_20157 = cljs.core.keyword_identical_QMARK_.call(null,inst_20148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20158 = (inst_20156) || (inst_20157);
var state_20187__$1 = (function (){var statearr_20201 = state_20187;
(statearr_20201[(10)] = inst_20155__$1);

return statearr_20201;
})();
if(cljs.core.truth_(inst_20158)){
var statearr_20202_20231 = state_20187__$1;
(statearr_20202_20231[(1)] = (8));

} else {
var statearr_20203_20232 = state_20187__$1;
(statearr_20203_20232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (14))){
var inst_20180 = (state_20187[(2)]);
var inst_20181 = cljs.core.async.close_BANG_.call(null,out);
var state_20187__$1 = (function (){var statearr_20205 = state_20187;
(statearr_20205[(13)] = inst_20180);

return statearr_20205;
})();
var statearr_20206_20233 = state_20187__$1;
(statearr_20206_20233[(2)] = inst_20181);

(statearr_20206_20233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (10))){
var inst_20170 = (state_20187[(2)]);
var state_20187__$1 = state_20187;
var statearr_20207_20234 = state_20187__$1;
(statearr_20207_20234[(2)] = inst_20170);

(statearr_20207_20234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20188 === (8))){
var inst_20147 = (state_20187[(8)]);
var inst_20155 = (state_20187[(10)]);
var inst_20151 = (state_20187[(9)]);
var inst_20160 = inst_20147.push(inst_20151);
var tmp20204 = inst_20147;
var inst_20147__$1 = tmp20204;
var inst_20148 = inst_20155;
var state_20187__$1 = (function (){var statearr_20208 = state_20187;
(statearr_20208[(7)] = inst_20148);

(statearr_20208[(8)] = inst_20147__$1);

(statearr_20208[(14)] = inst_20160);

return statearr_20208;
})();
var statearr_20209_20235 = state_20187__$1;
(statearr_20209_20235[(2)] = null);

(statearr_20209_20235[(1)] = (2));


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
});})(c__10274__auto___20221,out))
;
return ((function (switch__10209__auto__,c__10274__auto___20221,out){
return (function() {
var cljs$core$async$state_machine__10210__auto__ = null;
var cljs$core$async$state_machine__10210__auto____0 = (function (){
var statearr_20213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20213[(0)] = cljs$core$async$state_machine__10210__auto__);

(statearr_20213[(1)] = (1));

return statearr_20213;
});
var cljs$core$async$state_machine__10210__auto____1 = (function (state_20187){
while(true){
var ret_value__10211__auto__ = (function (){try{while(true){
var result__10212__auto__ = switch__10209__auto__.call(null,state_20187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10212__auto__;
}
break;
}
}catch (e20214){if((e20214 instanceof Object)){
var ex__10213__auto__ = e20214;
var statearr_20215_20236 = state_20187;
(statearr_20215_20236[(5)] = ex__10213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20237 = state_20187;
state_20187 = G__20237;
continue;
} else {
return ret_value__10211__auto__;
}
break;
}
});
cljs$core$async$state_machine__10210__auto__ = function(state_20187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10210__auto____1.call(this,state_20187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10210__auto____0;
cljs$core$async$state_machine__10210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10210__auto____1;
return cljs$core$async$state_machine__10210__auto__;
})()
;})(switch__10209__auto__,c__10274__auto___20221,out))
})();
var state__10276__auto__ = (function (){var statearr_20216 = f__10275__auto__.call(null);
(statearr_20216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10274__auto___20221);

return statearr_20216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10276__auto__);
});})(c__10274__auto___20221,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map