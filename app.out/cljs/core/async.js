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
if(typeof cljs.core.async.t_cljs$core$async17516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17516 = (function (fn_handler,f,meta17517){
this.fn_handler = fn_handler;
this.f = f;
this.meta17517 = meta17517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17518,meta17517__$1){
var self__ = this;
var _17518__$1 = this;
return (new cljs.core.async.t_cljs$core$async17516(self__.fn_handler,self__.f,meta17517__$1));
});

cljs.core.async.t_cljs$core$async17516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17518){
var self__ = this;
var _17518__$1 = this;
return self__.meta17517;
});

cljs.core.async.t_cljs$core$async17516.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17517","meta17517",-13834229,null)], null);
});

cljs.core.async.t_cljs$core$async17516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17516";

cljs.core.async.t_cljs$core$async17516.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17516");
});

cljs.core.async.__GT_t_cljs$core$async17516 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17516(fn_handler__$1,f__$1,meta17517){
return (new cljs.core.async.t_cljs$core$async17516(fn_handler__$1,f__$1,meta17517));
});

}

return (new cljs.core.async.t_cljs$core$async17516(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17521 = [];
var len__6152__auto___17524 = arguments.length;
var i__6153__auto___17525 = (0);
while(true){
if((i__6153__auto___17525 < len__6152__auto___17524)){
args17521.push((arguments[i__6153__auto___17525]));

var G__17526 = (i__6153__auto___17525 + (1));
i__6153__auto___17525 = G__17526;
continue;
} else {
}
break;
}

var G__17523 = args17521.length;
switch (G__17523) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17521.length)].join('')));

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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17528.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17535 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17535);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17535,ret){
return (function (){
return fn1.call(null,val_17535);
});})(val_17535,ret))
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
var args17536 = [];
var len__6152__auto___17539 = arguments.length;
var i__6153__auto___17540 = (0);
while(true){
if((i__6153__auto___17540 < len__6152__auto___17539)){
args17536.push((arguments[i__6153__auto___17540]));

var G__17541 = (i__6153__auto___17540 + (1));
i__6153__auto___17540 = G__17541;
continue;
} else {
}
break;
}

var G__17538 = args17536.length;
switch (G__17538) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17536.length)].join('')));

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
var n__5997__auto___17543 = n;
var x_17544 = (0);
while(true){
if((x_17544 < n__5997__auto___17543)){
(a[x_17544] = (0));

var G__17545 = (x_17544 + (1));
x_17544 = G__17545;
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

var G__17546 = (i + (1));
i = G__17546;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17550 = (function (alt_flag,flag,meta17551){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17551 = meta17551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17552,meta17551__$1){
var self__ = this;
var _17552__$1 = this;
return (new cljs.core.async.t_cljs$core$async17550(self__.alt_flag,self__.flag,meta17551__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17552){
var self__ = this;
var _17552__$1 = this;
return self__.meta17551;
});})(flag))
;

cljs.core.async.t_cljs$core$async17550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17550.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17551","meta17551",-1749832774,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17550";

cljs.core.async.t_cljs$core$async17550.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17550");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17550 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17550(alt_flag__$1,flag__$1,meta17551){
return (new cljs.core.async.t_cljs$core$async17550(alt_flag__$1,flag__$1,meta17551));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17550(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17556 = (function (alt_handler,flag,cb,meta17557){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17557 = meta17557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17558,meta17557__$1){
var self__ = this;
var _17558__$1 = this;
return (new cljs.core.async.t_cljs$core$async17556(self__.alt_handler,self__.flag,self__.cb,meta17557__$1));
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17558){
var self__ = this;
var _17558__$1 = this;
return self__.meta17557;
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17557","meta17557",417112085,null)], null);
});

cljs.core.async.t_cljs$core$async17556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17556";

cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17556");
});

cljs.core.async.__GT_t_cljs$core$async17556 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17556(alt_handler__$1,flag__$1,cb__$1,meta17557){
return (new cljs.core.async.t_cljs$core$async17556(alt_handler__$1,flag__$1,cb__$1,meta17557));
});

}

return (new cljs.core.async.t_cljs$core$async17556(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17559_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17559_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17560_SHARP_,port], null));
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
var G__17561 = (i + (1));
i = G__17561;
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
var len__6152__auto___17567 = arguments.length;
var i__6153__auto___17568 = (0);
while(true){
if((i__6153__auto___17568 < len__6152__auto___17567)){
args__6159__auto__.push((arguments[i__6153__auto___17568]));

var G__17569 = (i__6153__auto___17568 + (1));
i__6153__auto___17568 = G__17569;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17564){
var map__17565 = p__17564;
var map__17565__$1 = ((((!((map__17565 == null)))?((((map__17565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17565):map__17565);
var opts = map__17565__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17562){
var G__17563 = cljs.core.first.call(null,seq17562);
var seq17562__$1 = cljs.core.next.call(null,seq17562);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17563,seq17562__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17570 = [];
var len__6152__auto___17620 = arguments.length;
var i__6153__auto___17621 = (0);
while(true){
if((i__6153__auto___17621 < len__6152__auto___17620)){
args17570.push((arguments[i__6153__auto___17621]));

var G__17622 = (i__6153__auto___17621 + (1));
i__6153__auto___17621 = G__17622;
continue;
} else {
}
break;
}

var G__17572 = args17570.length;
switch (G__17572) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17570.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10732__auto___17624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___17624){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___17624){
return (function (state_17596){
var state_val_17597 = (state_17596[(1)]);
if((state_val_17597 === (7))){
var inst_17592 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17598_17625 = state_17596__$1;
(statearr_17598_17625[(2)] = inst_17592);

(statearr_17598_17625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (1))){
var state_17596__$1 = state_17596;
var statearr_17599_17626 = state_17596__$1;
(statearr_17599_17626[(2)] = null);

(statearr_17599_17626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (4))){
var inst_17575 = (state_17596[(7)]);
var inst_17575__$1 = (state_17596[(2)]);
var inst_17576 = (inst_17575__$1 == null);
var state_17596__$1 = (function (){var statearr_17600 = state_17596;
(statearr_17600[(7)] = inst_17575__$1);

return statearr_17600;
})();
if(cljs.core.truth_(inst_17576)){
var statearr_17601_17627 = state_17596__$1;
(statearr_17601_17627[(1)] = (5));

} else {
var statearr_17602_17628 = state_17596__$1;
(statearr_17602_17628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (13))){
var state_17596__$1 = state_17596;
var statearr_17603_17629 = state_17596__$1;
(statearr_17603_17629[(2)] = null);

(statearr_17603_17629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (6))){
var inst_17575 = (state_17596[(7)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17596__$1,(11),to,inst_17575);
} else {
if((state_val_17597 === (3))){
var inst_17594 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17596__$1,inst_17594);
} else {
if((state_val_17597 === (12))){
var state_17596__$1 = state_17596;
var statearr_17604_17630 = state_17596__$1;
(statearr_17604_17630[(2)] = null);

(statearr_17604_17630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (2))){
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17596__$1,(4),from);
} else {
if((state_val_17597 === (11))){
var inst_17585 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17585)){
var statearr_17605_17631 = state_17596__$1;
(statearr_17605_17631[(1)] = (12));

} else {
var statearr_17606_17632 = state_17596__$1;
(statearr_17606_17632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (9))){
var state_17596__$1 = state_17596;
var statearr_17607_17633 = state_17596__$1;
(statearr_17607_17633[(2)] = null);

(statearr_17607_17633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (5))){
var state_17596__$1 = state_17596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17608_17634 = state_17596__$1;
(statearr_17608_17634[(1)] = (8));

} else {
var statearr_17609_17635 = state_17596__$1;
(statearr_17609_17635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (14))){
var inst_17590 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17610_17636 = state_17596__$1;
(statearr_17610_17636[(2)] = inst_17590);

(statearr_17610_17636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (10))){
var inst_17582 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17611_17637 = state_17596__$1;
(statearr_17611_17637[(2)] = inst_17582);

(statearr_17611_17637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (8))){
var inst_17579 = cljs.core.async.close_BANG_.call(null,to);
var state_17596__$1 = state_17596;
var statearr_17612_17638 = state_17596__$1;
(statearr_17612_17638[(2)] = inst_17579);

(statearr_17612_17638[(1)] = (10));


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
});})(c__10732__auto___17624))
;
return ((function (switch__10667__auto__,c__10732__auto___17624){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_17616 = [null,null,null,null,null,null,null,null];
(statearr_17616[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_17616[(1)] = (1));

return statearr_17616;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_17596){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17617){if((e17617 instanceof Object)){
var ex__10671__auto__ = e17617;
var statearr_17618_17639 = state_17596;
(statearr_17618_17639[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17640 = state_17596;
state_17596 = G__17640;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_17596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_17596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___17624))
})();
var state__10734__auto__ = (function (){var statearr_17619 = f__10733__auto__.call(null);
(statearr_17619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___17624);

return statearr_17619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___17624))
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
return (function (p__17824){
var vec__17825 = p__17824;
var v = cljs.core.nth.call(null,vec__17825,(0),null);
var p = cljs.core.nth.call(null,vec__17825,(1),null);
var job = vec__17825;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10732__auto___18007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results){
return (function (state_17830){
var state_val_17831 = (state_17830[(1)]);
if((state_val_17831 === (1))){
var state_17830__$1 = state_17830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17830__$1,(2),res,v);
} else {
if((state_val_17831 === (2))){
var inst_17827 = (state_17830[(2)]);
var inst_17828 = cljs.core.async.close_BANG_.call(null,res);
var state_17830__$1 = (function (){var statearr_17832 = state_17830;
(statearr_17832[(7)] = inst_17827);

return statearr_17832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17830__$1,inst_17828);
} else {
return null;
}
}
});})(c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results))
;
return ((function (switch__10667__auto__,c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17836 = [null,null,null,null,null,null,null,null];
(statearr_17836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17836[(1)] = (1));

return statearr_17836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17830){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17837){if((e17837 instanceof Object)){
var ex__10671__auto__ = e17837;
var statearr_17838_18008 = state_17830;
(statearr_17838_18008[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18009 = state_17830;
state_17830 = G__18009;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results))
})();
var state__10734__auto__ = (function (){var statearr_17839 = f__10733__auto__.call(null);
(statearr_17839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18007);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18007,res,vec__17825,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17840){
var vec__17841 = p__17840;
var v = cljs.core.nth.call(null,vec__17841,(0),null);
var p = cljs.core.nth.call(null,vec__17841,(1),null);
var job = vec__17841;
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
var n__5997__auto___18010 = n;
var __18011 = (0);
while(true){
if((__18011 < n__5997__auto___18010)){
var G__17842_18012 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17842_18012) {
case "compute":
var c__10732__auto___18014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18011,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (__18011,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function (state_17855){
var state_val_17856 = (state_17855[(1)]);
if((state_val_17856 === (1))){
var state_17855__$1 = state_17855;
var statearr_17857_18015 = state_17855__$1;
(statearr_17857_18015[(2)] = null);

(statearr_17857_18015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (2))){
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17855__$1,(4),jobs);
} else {
if((state_val_17856 === (3))){
var inst_17853 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17855__$1,inst_17853);
} else {
if((state_val_17856 === (4))){
var inst_17845 = (state_17855[(2)]);
var inst_17846 = process.call(null,inst_17845);
var state_17855__$1 = state_17855;
if(cljs.core.truth_(inst_17846)){
var statearr_17858_18016 = state_17855__$1;
(statearr_17858_18016[(1)] = (5));

} else {
var statearr_17859_18017 = state_17855__$1;
(statearr_17859_18017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (5))){
var state_17855__$1 = state_17855;
var statearr_17860_18018 = state_17855__$1;
(statearr_17860_18018[(2)] = null);

(statearr_17860_18018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (6))){
var state_17855__$1 = state_17855;
var statearr_17861_18019 = state_17855__$1;
(statearr_17861_18019[(2)] = null);

(statearr_17861_18019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17856 === (7))){
var inst_17851 = (state_17855[(2)]);
var state_17855__$1 = state_17855;
var statearr_17862_18020 = state_17855__$1;
(statearr_17862_18020[(2)] = inst_17851);

(statearr_17862_18020[(1)] = (3));


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
});})(__18011,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
;
return ((function (__18011,switch__10667__auto__,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17866 = [null,null,null,null,null,null,null];
(statearr_17866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17866[(1)] = (1));

return statearr_17866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17855){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17867){if((e17867 instanceof Object)){
var ex__10671__auto__ = e17867;
var statearr_17868_18021 = state_17855;
(statearr_17868_18021[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18022 = state_17855;
state_17855 = G__18022;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(__18011,switch__10667__auto__,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17869 = f__10733__auto__.call(null);
(statearr_17869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18014);

return statearr_17869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(__18011,c__10732__auto___18014,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
);


break;
case "async":
var c__10732__auto___18023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18011,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (__18011,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function (state_17882){
var state_val_17883 = (state_17882[(1)]);
if((state_val_17883 === (1))){
var state_17882__$1 = state_17882;
var statearr_17884_18024 = state_17882__$1;
(statearr_17884_18024[(2)] = null);

(statearr_17884_18024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (2))){
var state_17882__$1 = state_17882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17882__$1,(4),jobs);
} else {
if((state_val_17883 === (3))){
var inst_17880 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17882__$1,inst_17880);
} else {
if((state_val_17883 === (4))){
var inst_17872 = (state_17882[(2)]);
var inst_17873 = async.call(null,inst_17872);
var state_17882__$1 = state_17882;
if(cljs.core.truth_(inst_17873)){
var statearr_17885_18025 = state_17882__$1;
(statearr_17885_18025[(1)] = (5));

} else {
var statearr_17886_18026 = state_17882__$1;
(statearr_17886_18026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (5))){
var state_17882__$1 = state_17882;
var statearr_17887_18027 = state_17882__$1;
(statearr_17887_18027[(2)] = null);

(statearr_17887_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (6))){
var state_17882__$1 = state_17882;
var statearr_17888_18028 = state_17882__$1;
(statearr_17888_18028[(2)] = null);

(statearr_17888_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (7))){
var inst_17878 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17889_18029 = state_17882__$1;
(statearr_17889_18029[(2)] = inst_17878);

(statearr_17889_18029[(1)] = (3));


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
});})(__18011,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
;
return ((function (__18011,switch__10667__auto__,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17893 = [null,null,null,null,null,null,null];
(statearr_17893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17893[(1)] = (1));

return statearr_17893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17882){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17894){if((e17894 instanceof Object)){
var ex__10671__auto__ = e17894;
var statearr_17895_18030 = state_17882;
(statearr_17895_18030[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18031 = state_17882;
state_17882 = G__18031;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(__18011,switch__10667__auto__,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17896 = f__10733__auto__.call(null);
(statearr_17896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18023);

return statearr_17896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(__18011,c__10732__auto___18023,G__17842_18012,n__5997__auto___18010,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18032 = (__18011 + (1));
__18011 = G__18032;
continue;
} else {
}
break;
}

var c__10732__auto___18033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18033,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18033,jobs,results,process,async){
return (function (state_17918){
var state_val_17919 = (state_17918[(1)]);
if((state_val_17919 === (1))){
var state_17918__$1 = state_17918;
var statearr_17920_18034 = state_17918__$1;
(statearr_17920_18034[(2)] = null);

(statearr_17920_18034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (2))){
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17918__$1,(4),from);
} else {
if((state_val_17919 === (3))){
var inst_17916 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17918__$1,inst_17916);
} else {
if((state_val_17919 === (4))){
var inst_17899 = (state_17918[(7)]);
var inst_17899__$1 = (state_17918[(2)]);
var inst_17900 = (inst_17899__$1 == null);
var state_17918__$1 = (function (){var statearr_17921 = state_17918;
(statearr_17921[(7)] = inst_17899__$1);

return statearr_17921;
})();
if(cljs.core.truth_(inst_17900)){
var statearr_17922_18035 = state_17918__$1;
(statearr_17922_18035[(1)] = (5));

} else {
var statearr_17923_18036 = state_17918__$1;
(statearr_17923_18036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (5))){
var inst_17902 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17918__$1 = state_17918;
var statearr_17924_18037 = state_17918__$1;
(statearr_17924_18037[(2)] = inst_17902);

(statearr_17924_18037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (6))){
var inst_17899 = (state_17918[(7)]);
var inst_17904 = (state_17918[(8)]);
var inst_17904__$1 = cljs.core.async.chan.call(null,(1));
var inst_17905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17906 = [inst_17899,inst_17904__$1];
var inst_17907 = (new cljs.core.PersistentVector(null,2,(5),inst_17905,inst_17906,null));
var state_17918__$1 = (function (){var statearr_17925 = state_17918;
(statearr_17925[(8)] = inst_17904__$1);

return statearr_17925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17918__$1,(8),jobs,inst_17907);
} else {
if((state_val_17919 === (7))){
var inst_17914 = (state_17918[(2)]);
var state_17918__$1 = state_17918;
var statearr_17926_18038 = state_17918__$1;
(statearr_17926_18038[(2)] = inst_17914);

(statearr_17926_18038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17919 === (8))){
var inst_17904 = (state_17918[(8)]);
var inst_17909 = (state_17918[(2)]);
var state_17918__$1 = (function (){var statearr_17927 = state_17918;
(statearr_17927[(9)] = inst_17909);

return statearr_17927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17918__$1,(9),results,inst_17904);
} else {
if((state_val_17919 === (9))){
var inst_17911 = (state_17918[(2)]);
var state_17918__$1 = (function (){var statearr_17928 = state_17918;
(statearr_17928[(10)] = inst_17911);

return statearr_17928;
})();
var statearr_17929_18039 = state_17918__$1;
(statearr_17929_18039[(2)] = null);

(statearr_17929_18039[(1)] = (2));


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
});})(c__10732__auto___18033,jobs,results,process,async))
;
return ((function (switch__10667__auto__,c__10732__auto___18033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0 = (function (){
var statearr_17933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_17933[(1)] = (1));

return statearr_17933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17918){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e17934){if((e17934 instanceof Object)){
var ex__10671__auto__ = e17934;
var statearr_17935_18040 = state_17918;
(statearr_17935_18040[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18041 = state_17918;
state_17918 = G__18041;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18033,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_17936 = f__10733__auto__.call(null);
(statearr_17936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18033);

return statearr_17936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18033,jobs,results,process,async))
);


var c__10732__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto__,jobs,results,process,async){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto__,jobs,results,process,async){
return (function (state_17974){
var state_val_17975 = (state_17974[(1)]);
if((state_val_17975 === (7))){
var inst_17970 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17976_18042 = state_17974__$1;
(statearr_17976_18042[(2)] = inst_17970);

(statearr_17976_18042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (20))){
var state_17974__$1 = state_17974;
var statearr_17977_18043 = state_17974__$1;
(statearr_17977_18043[(2)] = null);

(statearr_17977_18043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (1))){
var state_17974__$1 = state_17974;
var statearr_17978_18044 = state_17974__$1;
(statearr_17978_18044[(2)] = null);

(statearr_17978_18044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (4))){
var inst_17939 = (state_17974[(7)]);
var inst_17939__$1 = (state_17974[(2)]);
var inst_17940 = (inst_17939__$1 == null);
var state_17974__$1 = (function (){var statearr_17979 = state_17974;
(statearr_17979[(7)] = inst_17939__$1);

return statearr_17979;
})();
if(cljs.core.truth_(inst_17940)){
var statearr_17980_18045 = state_17974__$1;
(statearr_17980_18045[(1)] = (5));

} else {
var statearr_17981_18046 = state_17974__$1;
(statearr_17981_18046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (15))){
var inst_17952 = (state_17974[(8)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17974__$1,(18),to,inst_17952);
} else {
if((state_val_17975 === (21))){
var inst_17965 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17982_18047 = state_17974__$1;
(statearr_17982_18047[(2)] = inst_17965);

(statearr_17982_18047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (13))){
var inst_17967 = (state_17974[(2)]);
var state_17974__$1 = (function (){var statearr_17983 = state_17974;
(statearr_17983[(9)] = inst_17967);

return statearr_17983;
})();
var statearr_17984_18048 = state_17974__$1;
(statearr_17984_18048[(2)] = null);

(statearr_17984_18048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (6))){
var inst_17939 = (state_17974[(7)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17974__$1,(11),inst_17939);
} else {
if((state_val_17975 === (17))){
var inst_17960 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
if(cljs.core.truth_(inst_17960)){
var statearr_17985_18049 = state_17974__$1;
(statearr_17985_18049[(1)] = (19));

} else {
var statearr_17986_18050 = state_17974__$1;
(statearr_17986_18050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (3))){
var inst_17972 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17974__$1,inst_17972);
} else {
if((state_val_17975 === (12))){
var inst_17949 = (state_17974[(10)]);
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17974__$1,(14),inst_17949);
} else {
if((state_val_17975 === (2))){
var state_17974__$1 = state_17974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17974__$1,(4),results);
} else {
if((state_val_17975 === (19))){
var state_17974__$1 = state_17974;
var statearr_17987_18051 = state_17974__$1;
(statearr_17987_18051[(2)] = null);

(statearr_17987_18051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (11))){
var inst_17949 = (state_17974[(2)]);
var state_17974__$1 = (function (){var statearr_17988 = state_17974;
(statearr_17988[(10)] = inst_17949);

return statearr_17988;
})();
var statearr_17989_18052 = state_17974__$1;
(statearr_17989_18052[(2)] = null);

(statearr_17989_18052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (9))){
var state_17974__$1 = state_17974;
var statearr_17990_18053 = state_17974__$1;
(statearr_17990_18053[(2)] = null);

(statearr_17990_18053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (5))){
var state_17974__$1 = state_17974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17991_18054 = state_17974__$1;
(statearr_17991_18054[(1)] = (8));

} else {
var statearr_17992_18055 = state_17974__$1;
(statearr_17992_18055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (14))){
var inst_17954 = (state_17974[(11)]);
var inst_17952 = (state_17974[(8)]);
var inst_17952__$1 = (state_17974[(2)]);
var inst_17953 = (inst_17952__$1 == null);
var inst_17954__$1 = cljs.core.not.call(null,inst_17953);
var state_17974__$1 = (function (){var statearr_17993 = state_17974;
(statearr_17993[(11)] = inst_17954__$1);

(statearr_17993[(8)] = inst_17952__$1);

return statearr_17993;
})();
if(inst_17954__$1){
var statearr_17994_18056 = state_17974__$1;
(statearr_17994_18056[(1)] = (15));

} else {
var statearr_17995_18057 = state_17974__$1;
(statearr_17995_18057[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (16))){
var inst_17954 = (state_17974[(11)]);
var state_17974__$1 = state_17974;
var statearr_17996_18058 = state_17974__$1;
(statearr_17996_18058[(2)] = inst_17954);

(statearr_17996_18058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (10))){
var inst_17946 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17997_18059 = state_17974__$1;
(statearr_17997_18059[(2)] = inst_17946);

(statearr_17997_18059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (18))){
var inst_17957 = (state_17974[(2)]);
var state_17974__$1 = state_17974;
var statearr_17998_18060 = state_17974__$1;
(statearr_17998_18060[(2)] = inst_17957);

(statearr_17998_18060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17975 === (8))){
var inst_17943 = cljs.core.async.close_BANG_.call(null,to);
var state_17974__$1 = state_17974;
var statearr_17999_18061 = state_17974__$1;
(statearr_17999_18061[(2)] = inst_17943);

(statearr_17999_18061[(1)] = (10));


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
var statearr_18003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__);

(statearr_18003[(1)] = (1));

return statearr_18003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1 = (function (state_17974){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_17974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18004){if((e18004 instanceof Object)){
var ex__10671__auto__ = e18004;
var statearr_18005_18062 = state_17974;
(statearr_18005_18062[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18063 = state_17974;
state_17974 = G__18063;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__ = function(state_17974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1.call(this,state_17974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__,jobs,results,process,async))
})();
var state__10734__auto__ = (function (){var statearr_18006 = f__10733__auto__.call(null);
(statearr_18006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18006;
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
var args18064 = [];
var len__6152__auto___18067 = arguments.length;
var i__6153__auto___18068 = (0);
while(true){
if((i__6153__auto___18068 < len__6152__auto___18067)){
args18064.push((arguments[i__6153__auto___18068]));

var G__18069 = (i__6153__auto___18068 + (1));
i__6153__auto___18068 = G__18069;
continue;
} else {
}
break;
}

var G__18066 = args18064.length;
switch (G__18066) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18064.length)].join('')));

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
var args18071 = [];
var len__6152__auto___18074 = arguments.length;
var i__6153__auto___18075 = (0);
while(true){
if((i__6153__auto___18075 < len__6152__auto___18074)){
args18071.push((arguments[i__6153__auto___18075]));

var G__18076 = (i__6153__auto___18075 + (1));
i__6153__auto___18075 = G__18076;
continue;
} else {
}
break;
}

var G__18073 = args18071.length;
switch (G__18073) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18071.length)].join('')));

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
var args18078 = [];
var len__6152__auto___18131 = arguments.length;
var i__6153__auto___18132 = (0);
while(true){
if((i__6153__auto___18132 < len__6152__auto___18131)){
args18078.push((arguments[i__6153__auto___18132]));

var G__18133 = (i__6153__auto___18132 + (1));
i__6153__auto___18132 = G__18133;
continue;
} else {
}
break;
}

var G__18080 = args18078.length;
switch (G__18080) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18078.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10732__auto___18135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18135,tc,fc){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18135,tc,fc){
return (function (state_18106){
var state_val_18107 = (state_18106[(1)]);
if((state_val_18107 === (7))){
var inst_18102 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18108_18136 = state_18106__$1;
(statearr_18108_18136[(2)] = inst_18102);

(statearr_18108_18136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (1))){
var state_18106__$1 = state_18106;
var statearr_18109_18137 = state_18106__$1;
(statearr_18109_18137[(2)] = null);

(statearr_18109_18137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (4))){
var inst_18083 = (state_18106[(7)]);
var inst_18083__$1 = (state_18106[(2)]);
var inst_18084 = (inst_18083__$1 == null);
var state_18106__$1 = (function (){var statearr_18110 = state_18106;
(statearr_18110[(7)] = inst_18083__$1);

return statearr_18110;
})();
if(cljs.core.truth_(inst_18084)){
var statearr_18111_18138 = state_18106__$1;
(statearr_18111_18138[(1)] = (5));

} else {
var statearr_18112_18139 = state_18106__$1;
(statearr_18112_18139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (13))){
var state_18106__$1 = state_18106;
var statearr_18113_18140 = state_18106__$1;
(statearr_18113_18140[(2)] = null);

(statearr_18113_18140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (6))){
var inst_18083 = (state_18106[(7)]);
var inst_18089 = p.call(null,inst_18083);
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18089)){
var statearr_18114_18141 = state_18106__$1;
(statearr_18114_18141[(1)] = (9));

} else {
var statearr_18115_18142 = state_18106__$1;
(statearr_18115_18142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (3))){
var inst_18104 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18106__$1,inst_18104);
} else {
if((state_val_18107 === (12))){
var state_18106__$1 = state_18106;
var statearr_18116_18143 = state_18106__$1;
(statearr_18116_18143[(2)] = null);

(statearr_18116_18143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (2))){
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18106__$1,(4),ch);
} else {
if((state_val_18107 === (11))){
var inst_18083 = (state_18106[(7)]);
var inst_18093 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18106__$1,(8),inst_18093,inst_18083);
} else {
if((state_val_18107 === (9))){
var state_18106__$1 = state_18106;
var statearr_18117_18144 = state_18106__$1;
(statearr_18117_18144[(2)] = tc);

(statearr_18117_18144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (5))){
var inst_18086 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18087 = cljs.core.async.close_BANG_.call(null,fc);
var state_18106__$1 = (function (){var statearr_18118 = state_18106;
(statearr_18118[(8)] = inst_18086);

return statearr_18118;
})();
var statearr_18119_18145 = state_18106__$1;
(statearr_18119_18145[(2)] = inst_18087);

(statearr_18119_18145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (14))){
var inst_18100 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
var statearr_18120_18146 = state_18106__$1;
(statearr_18120_18146[(2)] = inst_18100);

(statearr_18120_18146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (10))){
var state_18106__$1 = state_18106;
var statearr_18121_18147 = state_18106__$1;
(statearr_18121_18147[(2)] = fc);

(statearr_18121_18147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18107 === (8))){
var inst_18095 = (state_18106[(2)]);
var state_18106__$1 = state_18106;
if(cljs.core.truth_(inst_18095)){
var statearr_18122_18148 = state_18106__$1;
(statearr_18122_18148[(1)] = (12));

} else {
var statearr_18123_18149 = state_18106__$1;
(statearr_18123_18149[(1)] = (13));

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
});})(c__10732__auto___18135,tc,fc))
;
return ((function (switch__10667__auto__,c__10732__auto___18135,tc,fc){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_18127 = [null,null,null,null,null,null,null,null,null];
(statearr_18127[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_18127[(1)] = (1));

return statearr_18127;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_18106){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18128){if((e18128 instanceof Object)){
var ex__10671__auto__ = e18128;
var statearr_18129_18150 = state_18106;
(statearr_18129_18150[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18151 = state_18106;
state_18106 = G__18151;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_18106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_18106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18135,tc,fc))
})();
var state__10734__auto__ = (function (){var statearr_18130 = f__10733__auto__.call(null);
(statearr_18130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18135);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18135,tc,fc))
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
return (function (state_18198){
var state_val_18199 = (state_18198[(1)]);
if((state_val_18199 === (1))){
var inst_18184 = init;
var state_18198__$1 = (function (){var statearr_18200 = state_18198;
(statearr_18200[(7)] = inst_18184);

return statearr_18200;
})();
var statearr_18201_18216 = state_18198__$1;
(statearr_18201_18216[(2)] = null);

(statearr_18201_18216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (2))){
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18198__$1,(4),ch);
} else {
if((state_val_18199 === (3))){
var inst_18196 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18198__$1,inst_18196);
} else {
if((state_val_18199 === (4))){
var inst_18187 = (state_18198[(8)]);
var inst_18187__$1 = (state_18198[(2)]);
var inst_18188 = (inst_18187__$1 == null);
var state_18198__$1 = (function (){var statearr_18202 = state_18198;
(statearr_18202[(8)] = inst_18187__$1);

return statearr_18202;
})();
if(cljs.core.truth_(inst_18188)){
var statearr_18203_18217 = state_18198__$1;
(statearr_18203_18217[(1)] = (5));

} else {
var statearr_18204_18218 = state_18198__$1;
(statearr_18204_18218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (5))){
var inst_18184 = (state_18198[(7)]);
var state_18198__$1 = state_18198;
var statearr_18205_18219 = state_18198__$1;
(statearr_18205_18219[(2)] = inst_18184);

(statearr_18205_18219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (6))){
var inst_18187 = (state_18198[(8)]);
var inst_18184 = (state_18198[(7)]);
var inst_18191 = f.call(null,inst_18184,inst_18187);
var inst_18184__$1 = inst_18191;
var state_18198__$1 = (function (){var statearr_18206 = state_18198;
(statearr_18206[(7)] = inst_18184__$1);

return statearr_18206;
})();
var statearr_18207_18220 = state_18198__$1;
(statearr_18207_18220[(2)] = null);

(statearr_18207_18220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (7))){
var inst_18194 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18208_18221 = state_18198__$1;
(statearr_18208_18221[(2)] = inst_18194);

(statearr_18208_18221[(1)] = (3));


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
var statearr_18212 = [null,null,null,null,null,null,null,null,null];
(statearr_18212[(0)] = cljs$core$async$reduce_$_state_machine__10668__auto__);

(statearr_18212[(1)] = (1));

return statearr_18212;
});
var cljs$core$async$reduce_$_state_machine__10668__auto____1 = (function (state_18198){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18213){if((e18213 instanceof Object)){
var ex__10671__auto__ = e18213;
var statearr_18214_18222 = state_18198;
(statearr_18214_18222[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18223 = state_18198;
state_18198 = G__18223;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10668__auto__ = function(state_18198){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10668__auto____1.call(this,state_18198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10668__auto____0;
cljs$core$async$reduce_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10668__auto____1;
return cljs$core$async$reduce_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_18215 = f__10733__auto__.call(null);
(statearr_18215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18215;
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
var args18224 = [];
var len__6152__auto___18276 = arguments.length;
var i__6153__auto___18277 = (0);
while(true){
if((i__6153__auto___18277 < len__6152__auto___18276)){
args18224.push((arguments[i__6153__auto___18277]));

var G__18278 = (i__6153__auto___18277 + (1));
i__6153__auto___18277 = G__18278;
continue;
} else {
}
break;
}

var G__18226 = args18224.length;
switch (G__18226) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18224.length)].join('')));

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
return (function (state_18251){
var state_val_18252 = (state_18251[(1)]);
if((state_val_18252 === (7))){
var inst_18233 = (state_18251[(2)]);
var state_18251__$1 = state_18251;
var statearr_18253_18280 = state_18251__$1;
(statearr_18253_18280[(2)] = inst_18233);

(statearr_18253_18280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (1))){
var inst_18227 = cljs.core.seq.call(null,coll);
var inst_18228 = inst_18227;
var state_18251__$1 = (function (){var statearr_18254 = state_18251;
(statearr_18254[(7)] = inst_18228);

return statearr_18254;
})();
var statearr_18255_18281 = state_18251__$1;
(statearr_18255_18281[(2)] = null);

(statearr_18255_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (4))){
var inst_18228 = (state_18251[(7)]);
var inst_18231 = cljs.core.first.call(null,inst_18228);
var state_18251__$1 = state_18251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18251__$1,(7),ch,inst_18231);
} else {
if((state_val_18252 === (13))){
var inst_18245 = (state_18251[(2)]);
var state_18251__$1 = state_18251;
var statearr_18256_18282 = state_18251__$1;
(statearr_18256_18282[(2)] = inst_18245);

(statearr_18256_18282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (6))){
var inst_18236 = (state_18251[(2)]);
var state_18251__$1 = state_18251;
if(cljs.core.truth_(inst_18236)){
var statearr_18257_18283 = state_18251__$1;
(statearr_18257_18283[(1)] = (8));

} else {
var statearr_18258_18284 = state_18251__$1;
(statearr_18258_18284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (3))){
var inst_18249 = (state_18251[(2)]);
var state_18251__$1 = state_18251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18251__$1,inst_18249);
} else {
if((state_val_18252 === (12))){
var state_18251__$1 = state_18251;
var statearr_18259_18285 = state_18251__$1;
(statearr_18259_18285[(2)] = null);

(statearr_18259_18285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (2))){
var inst_18228 = (state_18251[(7)]);
var state_18251__$1 = state_18251;
if(cljs.core.truth_(inst_18228)){
var statearr_18260_18286 = state_18251__$1;
(statearr_18260_18286[(1)] = (4));

} else {
var statearr_18261_18287 = state_18251__$1;
(statearr_18261_18287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (11))){
var inst_18242 = cljs.core.async.close_BANG_.call(null,ch);
var state_18251__$1 = state_18251;
var statearr_18262_18288 = state_18251__$1;
(statearr_18262_18288[(2)] = inst_18242);

(statearr_18262_18288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (9))){
var state_18251__$1 = state_18251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18263_18289 = state_18251__$1;
(statearr_18263_18289[(1)] = (11));

} else {
var statearr_18264_18290 = state_18251__$1;
(statearr_18264_18290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (5))){
var inst_18228 = (state_18251[(7)]);
var state_18251__$1 = state_18251;
var statearr_18265_18291 = state_18251__$1;
(statearr_18265_18291[(2)] = inst_18228);

(statearr_18265_18291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (10))){
var inst_18247 = (state_18251[(2)]);
var state_18251__$1 = state_18251;
var statearr_18266_18292 = state_18251__$1;
(statearr_18266_18292[(2)] = inst_18247);

(statearr_18266_18292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18252 === (8))){
var inst_18228 = (state_18251[(7)]);
var inst_18238 = cljs.core.next.call(null,inst_18228);
var inst_18228__$1 = inst_18238;
var state_18251__$1 = (function (){var statearr_18267 = state_18251;
(statearr_18267[(7)] = inst_18228__$1);

return statearr_18267;
})();
var statearr_18268_18293 = state_18251__$1;
(statearr_18268_18293[(2)] = null);

(statearr_18268_18293[(1)] = (2));


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
var statearr_18272 = [null,null,null,null,null,null,null,null];
(statearr_18272[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_18272[(1)] = (1));

return statearr_18272;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_18251){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18273){if((e18273 instanceof Object)){
var ex__10671__auto__ = e18273;
var statearr_18274_18294 = state_18251;
(statearr_18274_18294[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18295 = state_18251;
state_18251 = G__18295;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_18251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_18251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_18275 = f__10733__auto__.call(null);
(statearr_18275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_18275;
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
if(typeof cljs.core.async.t_cljs$core$async18517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18517 = (function (mult,ch,cs,meta18518){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18518 = meta18518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18519,meta18518__$1){
var self__ = this;
var _18519__$1 = this;
return (new cljs.core.async.t_cljs$core$async18517(self__.mult,self__.ch,self__.cs,meta18518__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18519){
var self__ = this;
var _18519__$1 = this;
return self__.meta18518;
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18518","meta18518",950721633,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18517";

cljs.core.async.t_cljs$core$async18517.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18517");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18517 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18517(mult__$1,ch__$1,cs__$1,meta18518){
return (new cljs.core.async.t_cljs$core$async18517(mult__$1,ch__$1,cs__$1,meta18518));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18517(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10732__auto___18738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___18738,cs,m,dchan,dctr,done){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___18738,cs,m,dchan,dctr,done){
return (function (state_18650){
var state_val_18651 = (state_18650[(1)]);
if((state_val_18651 === (7))){
var inst_18646 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18652_18739 = state_18650__$1;
(statearr_18652_18739[(2)] = inst_18646);

(statearr_18652_18739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (20))){
var inst_18551 = (state_18650[(7)]);
var inst_18561 = cljs.core.first.call(null,inst_18551);
var inst_18562 = cljs.core.nth.call(null,inst_18561,(0),null);
var inst_18563 = cljs.core.nth.call(null,inst_18561,(1),null);
var state_18650__$1 = (function (){var statearr_18653 = state_18650;
(statearr_18653[(8)] = inst_18562);

return statearr_18653;
})();
if(cljs.core.truth_(inst_18563)){
var statearr_18654_18740 = state_18650__$1;
(statearr_18654_18740[(1)] = (22));

} else {
var statearr_18655_18741 = state_18650__$1;
(statearr_18655_18741[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (27))){
var inst_18593 = (state_18650[(9)]);
var inst_18598 = (state_18650[(10)]);
var inst_18591 = (state_18650[(11)]);
var inst_18522 = (state_18650[(12)]);
var inst_18598__$1 = cljs.core._nth.call(null,inst_18591,inst_18593);
var inst_18599 = cljs.core.async.put_BANG_.call(null,inst_18598__$1,inst_18522,done);
var state_18650__$1 = (function (){var statearr_18656 = state_18650;
(statearr_18656[(10)] = inst_18598__$1);

return statearr_18656;
})();
if(cljs.core.truth_(inst_18599)){
var statearr_18657_18742 = state_18650__$1;
(statearr_18657_18742[(1)] = (30));

} else {
var statearr_18658_18743 = state_18650__$1;
(statearr_18658_18743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (1))){
var state_18650__$1 = state_18650;
var statearr_18659_18744 = state_18650__$1;
(statearr_18659_18744[(2)] = null);

(statearr_18659_18744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (24))){
var inst_18551 = (state_18650[(7)]);
var inst_18568 = (state_18650[(2)]);
var inst_18569 = cljs.core.next.call(null,inst_18551);
var inst_18531 = inst_18569;
var inst_18532 = null;
var inst_18533 = (0);
var inst_18534 = (0);
var state_18650__$1 = (function (){var statearr_18660 = state_18650;
(statearr_18660[(13)] = inst_18534);

(statearr_18660[(14)] = inst_18531);

(statearr_18660[(15)] = inst_18532);

(statearr_18660[(16)] = inst_18533);

(statearr_18660[(17)] = inst_18568);

return statearr_18660;
})();
var statearr_18661_18745 = state_18650__$1;
(statearr_18661_18745[(2)] = null);

(statearr_18661_18745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (39))){
var state_18650__$1 = state_18650;
var statearr_18665_18746 = state_18650__$1;
(statearr_18665_18746[(2)] = null);

(statearr_18665_18746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (4))){
var inst_18522 = (state_18650[(12)]);
var inst_18522__$1 = (state_18650[(2)]);
var inst_18523 = (inst_18522__$1 == null);
var state_18650__$1 = (function (){var statearr_18666 = state_18650;
(statearr_18666[(12)] = inst_18522__$1);

return statearr_18666;
})();
if(cljs.core.truth_(inst_18523)){
var statearr_18667_18747 = state_18650__$1;
(statearr_18667_18747[(1)] = (5));

} else {
var statearr_18668_18748 = state_18650__$1;
(statearr_18668_18748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (15))){
var inst_18534 = (state_18650[(13)]);
var inst_18531 = (state_18650[(14)]);
var inst_18532 = (state_18650[(15)]);
var inst_18533 = (state_18650[(16)]);
var inst_18547 = (state_18650[(2)]);
var inst_18548 = (inst_18534 + (1));
var tmp18662 = inst_18531;
var tmp18663 = inst_18532;
var tmp18664 = inst_18533;
var inst_18531__$1 = tmp18662;
var inst_18532__$1 = tmp18663;
var inst_18533__$1 = tmp18664;
var inst_18534__$1 = inst_18548;
var state_18650__$1 = (function (){var statearr_18669 = state_18650;
(statearr_18669[(18)] = inst_18547);

(statearr_18669[(13)] = inst_18534__$1);

(statearr_18669[(14)] = inst_18531__$1);

(statearr_18669[(15)] = inst_18532__$1);

(statearr_18669[(16)] = inst_18533__$1);

return statearr_18669;
})();
var statearr_18670_18749 = state_18650__$1;
(statearr_18670_18749[(2)] = null);

(statearr_18670_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (21))){
var inst_18572 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18674_18750 = state_18650__$1;
(statearr_18674_18750[(2)] = inst_18572);

(statearr_18674_18750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (31))){
var inst_18598 = (state_18650[(10)]);
var inst_18602 = done.call(null,null);
var inst_18603 = cljs.core.async.untap_STAR_.call(null,m,inst_18598);
var state_18650__$1 = (function (){var statearr_18675 = state_18650;
(statearr_18675[(19)] = inst_18602);

return statearr_18675;
})();
var statearr_18676_18751 = state_18650__$1;
(statearr_18676_18751[(2)] = inst_18603);

(statearr_18676_18751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (32))){
var inst_18593 = (state_18650[(9)]);
var inst_18592 = (state_18650[(20)]);
var inst_18591 = (state_18650[(11)]);
var inst_18590 = (state_18650[(21)]);
var inst_18605 = (state_18650[(2)]);
var inst_18606 = (inst_18593 + (1));
var tmp18671 = inst_18592;
var tmp18672 = inst_18591;
var tmp18673 = inst_18590;
var inst_18590__$1 = tmp18673;
var inst_18591__$1 = tmp18672;
var inst_18592__$1 = tmp18671;
var inst_18593__$1 = inst_18606;
var state_18650__$1 = (function (){var statearr_18677 = state_18650;
(statearr_18677[(9)] = inst_18593__$1);

(statearr_18677[(20)] = inst_18592__$1);

(statearr_18677[(11)] = inst_18591__$1);

(statearr_18677[(22)] = inst_18605);

(statearr_18677[(21)] = inst_18590__$1);

return statearr_18677;
})();
var statearr_18678_18752 = state_18650__$1;
(statearr_18678_18752[(2)] = null);

(statearr_18678_18752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (40))){
var inst_18618 = (state_18650[(23)]);
var inst_18622 = done.call(null,null);
var inst_18623 = cljs.core.async.untap_STAR_.call(null,m,inst_18618);
var state_18650__$1 = (function (){var statearr_18679 = state_18650;
(statearr_18679[(24)] = inst_18622);

return statearr_18679;
})();
var statearr_18680_18753 = state_18650__$1;
(statearr_18680_18753[(2)] = inst_18623);

(statearr_18680_18753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (33))){
var inst_18609 = (state_18650[(25)]);
var inst_18611 = cljs.core.chunked_seq_QMARK_.call(null,inst_18609);
var state_18650__$1 = state_18650;
if(inst_18611){
var statearr_18681_18754 = state_18650__$1;
(statearr_18681_18754[(1)] = (36));

} else {
var statearr_18682_18755 = state_18650__$1;
(statearr_18682_18755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (13))){
var inst_18541 = (state_18650[(26)]);
var inst_18544 = cljs.core.async.close_BANG_.call(null,inst_18541);
var state_18650__$1 = state_18650;
var statearr_18683_18756 = state_18650__$1;
(statearr_18683_18756[(2)] = inst_18544);

(statearr_18683_18756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (22))){
var inst_18562 = (state_18650[(8)]);
var inst_18565 = cljs.core.async.close_BANG_.call(null,inst_18562);
var state_18650__$1 = state_18650;
var statearr_18684_18757 = state_18650__$1;
(statearr_18684_18757[(2)] = inst_18565);

(statearr_18684_18757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (36))){
var inst_18609 = (state_18650[(25)]);
var inst_18613 = cljs.core.chunk_first.call(null,inst_18609);
var inst_18614 = cljs.core.chunk_rest.call(null,inst_18609);
var inst_18615 = cljs.core.count.call(null,inst_18613);
var inst_18590 = inst_18614;
var inst_18591 = inst_18613;
var inst_18592 = inst_18615;
var inst_18593 = (0);
var state_18650__$1 = (function (){var statearr_18685 = state_18650;
(statearr_18685[(9)] = inst_18593);

(statearr_18685[(20)] = inst_18592);

(statearr_18685[(11)] = inst_18591);

(statearr_18685[(21)] = inst_18590);

return statearr_18685;
})();
var statearr_18686_18758 = state_18650__$1;
(statearr_18686_18758[(2)] = null);

(statearr_18686_18758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (41))){
var inst_18609 = (state_18650[(25)]);
var inst_18625 = (state_18650[(2)]);
var inst_18626 = cljs.core.next.call(null,inst_18609);
var inst_18590 = inst_18626;
var inst_18591 = null;
var inst_18592 = (0);
var inst_18593 = (0);
var state_18650__$1 = (function (){var statearr_18687 = state_18650;
(statearr_18687[(9)] = inst_18593);

(statearr_18687[(20)] = inst_18592);

(statearr_18687[(27)] = inst_18625);

(statearr_18687[(11)] = inst_18591);

(statearr_18687[(21)] = inst_18590);

return statearr_18687;
})();
var statearr_18688_18759 = state_18650__$1;
(statearr_18688_18759[(2)] = null);

(statearr_18688_18759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (43))){
var state_18650__$1 = state_18650;
var statearr_18689_18760 = state_18650__$1;
(statearr_18689_18760[(2)] = null);

(statearr_18689_18760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (29))){
var inst_18634 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18690_18761 = state_18650__$1;
(statearr_18690_18761[(2)] = inst_18634);

(statearr_18690_18761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (44))){
var inst_18643 = (state_18650[(2)]);
var state_18650__$1 = (function (){var statearr_18691 = state_18650;
(statearr_18691[(28)] = inst_18643);

return statearr_18691;
})();
var statearr_18692_18762 = state_18650__$1;
(statearr_18692_18762[(2)] = null);

(statearr_18692_18762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (6))){
var inst_18582 = (state_18650[(29)]);
var inst_18581 = cljs.core.deref.call(null,cs);
var inst_18582__$1 = cljs.core.keys.call(null,inst_18581);
var inst_18583 = cljs.core.count.call(null,inst_18582__$1);
var inst_18584 = cljs.core.reset_BANG_.call(null,dctr,inst_18583);
var inst_18589 = cljs.core.seq.call(null,inst_18582__$1);
var inst_18590 = inst_18589;
var inst_18591 = null;
var inst_18592 = (0);
var inst_18593 = (0);
var state_18650__$1 = (function (){var statearr_18693 = state_18650;
(statearr_18693[(30)] = inst_18584);

(statearr_18693[(9)] = inst_18593);

(statearr_18693[(20)] = inst_18592);

(statearr_18693[(11)] = inst_18591);

(statearr_18693[(29)] = inst_18582__$1);

(statearr_18693[(21)] = inst_18590);

return statearr_18693;
})();
var statearr_18694_18763 = state_18650__$1;
(statearr_18694_18763[(2)] = null);

(statearr_18694_18763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (28))){
var inst_18609 = (state_18650[(25)]);
var inst_18590 = (state_18650[(21)]);
var inst_18609__$1 = cljs.core.seq.call(null,inst_18590);
var state_18650__$1 = (function (){var statearr_18695 = state_18650;
(statearr_18695[(25)] = inst_18609__$1);

return statearr_18695;
})();
if(inst_18609__$1){
var statearr_18696_18764 = state_18650__$1;
(statearr_18696_18764[(1)] = (33));

} else {
var statearr_18697_18765 = state_18650__$1;
(statearr_18697_18765[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (25))){
var inst_18593 = (state_18650[(9)]);
var inst_18592 = (state_18650[(20)]);
var inst_18595 = (inst_18593 < inst_18592);
var inst_18596 = inst_18595;
var state_18650__$1 = state_18650;
if(cljs.core.truth_(inst_18596)){
var statearr_18698_18766 = state_18650__$1;
(statearr_18698_18766[(1)] = (27));

} else {
var statearr_18699_18767 = state_18650__$1;
(statearr_18699_18767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (34))){
var state_18650__$1 = state_18650;
var statearr_18700_18768 = state_18650__$1;
(statearr_18700_18768[(2)] = null);

(statearr_18700_18768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (17))){
var state_18650__$1 = state_18650;
var statearr_18701_18769 = state_18650__$1;
(statearr_18701_18769[(2)] = null);

(statearr_18701_18769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (3))){
var inst_18648 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18650__$1,inst_18648);
} else {
if((state_val_18651 === (12))){
var inst_18577 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18702_18770 = state_18650__$1;
(statearr_18702_18770[(2)] = inst_18577);

(statearr_18702_18770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (2))){
var state_18650__$1 = state_18650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18650__$1,(4),ch);
} else {
if((state_val_18651 === (23))){
var state_18650__$1 = state_18650;
var statearr_18703_18771 = state_18650__$1;
(statearr_18703_18771[(2)] = null);

(statearr_18703_18771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (35))){
var inst_18632 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18704_18772 = state_18650__$1;
(statearr_18704_18772[(2)] = inst_18632);

(statearr_18704_18772[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (19))){
var inst_18551 = (state_18650[(7)]);
var inst_18555 = cljs.core.chunk_first.call(null,inst_18551);
var inst_18556 = cljs.core.chunk_rest.call(null,inst_18551);
var inst_18557 = cljs.core.count.call(null,inst_18555);
var inst_18531 = inst_18556;
var inst_18532 = inst_18555;
var inst_18533 = inst_18557;
var inst_18534 = (0);
var state_18650__$1 = (function (){var statearr_18705 = state_18650;
(statearr_18705[(13)] = inst_18534);

(statearr_18705[(14)] = inst_18531);

(statearr_18705[(15)] = inst_18532);

(statearr_18705[(16)] = inst_18533);

return statearr_18705;
})();
var statearr_18706_18773 = state_18650__$1;
(statearr_18706_18773[(2)] = null);

(statearr_18706_18773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (11))){
var inst_18551 = (state_18650[(7)]);
var inst_18531 = (state_18650[(14)]);
var inst_18551__$1 = cljs.core.seq.call(null,inst_18531);
var state_18650__$1 = (function (){var statearr_18707 = state_18650;
(statearr_18707[(7)] = inst_18551__$1);

return statearr_18707;
})();
if(inst_18551__$1){
var statearr_18708_18774 = state_18650__$1;
(statearr_18708_18774[(1)] = (16));

} else {
var statearr_18709_18775 = state_18650__$1;
(statearr_18709_18775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (9))){
var inst_18579 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18710_18776 = state_18650__$1;
(statearr_18710_18776[(2)] = inst_18579);

(statearr_18710_18776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (5))){
var inst_18529 = cljs.core.deref.call(null,cs);
var inst_18530 = cljs.core.seq.call(null,inst_18529);
var inst_18531 = inst_18530;
var inst_18532 = null;
var inst_18533 = (0);
var inst_18534 = (0);
var state_18650__$1 = (function (){var statearr_18711 = state_18650;
(statearr_18711[(13)] = inst_18534);

(statearr_18711[(14)] = inst_18531);

(statearr_18711[(15)] = inst_18532);

(statearr_18711[(16)] = inst_18533);

return statearr_18711;
})();
var statearr_18712_18777 = state_18650__$1;
(statearr_18712_18777[(2)] = null);

(statearr_18712_18777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (14))){
var state_18650__$1 = state_18650;
var statearr_18713_18778 = state_18650__$1;
(statearr_18713_18778[(2)] = null);

(statearr_18713_18778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (45))){
var inst_18640 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18714_18779 = state_18650__$1;
(statearr_18714_18779[(2)] = inst_18640);

(statearr_18714_18779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (26))){
var inst_18582 = (state_18650[(29)]);
var inst_18636 = (state_18650[(2)]);
var inst_18637 = cljs.core.seq.call(null,inst_18582);
var state_18650__$1 = (function (){var statearr_18715 = state_18650;
(statearr_18715[(31)] = inst_18636);

return statearr_18715;
})();
if(inst_18637){
var statearr_18716_18780 = state_18650__$1;
(statearr_18716_18780[(1)] = (42));

} else {
var statearr_18717_18781 = state_18650__$1;
(statearr_18717_18781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (16))){
var inst_18551 = (state_18650[(7)]);
var inst_18553 = cljs.core.chunked_seq_QMARK_.call(null,inst_18551);
var state_18650__$1 = state_18650;
if(inst_18553){
var statearr_18718_18782 = state_18650__$1;
(statearr_18718_18782[(1)] = (19));

} else {
var statearr_18719_18783 = state_18650__$1;
(statearr_18719_18783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (38))){
var inst_18629 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18720_18784 = state_18650__$1;
(statearr_18720_18784[(2)] = inst_18629);

(statearr_18720_18784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (30))){
var state_18650__$1 = state_18650;
var statearr_18721_18785 = state_18650__$1;
(statearr_18721_18785[(2)] = null);

(statearr_18721_18785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (10))){
var inst_18534 = (state_18650[(13)]);
var inst_18532 = (state_18650[(15)]);
var inst_18540 = cljs.core._nth.call(null,inst_18532,inst_18534);
var inst_18541 = cljs.core.nth.call(null,inst_18540,(0),null);
var inst_18542 = cljs.core.nth.call(null,inst_18540,(1),null);
var state_18650__$1 = (function (){var statearr_18722 = state_18650;
(statearr_18722[(26)] = inst_18541);

return statearr_18722;
})();
if(cljs.core.truth_(inst_18542)){
var statearr_18723_18786 = state_18650__$1;
(statearr_18723_18786[(1)] = (13));

} else {
var statearr_18724_18787 = state_18650__$1;
(statearr_18724_18787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (18))){
var inst_18575 = (state_18650[(2)]);
var state_18650__$1 = state_18650;
var statearr_18725_18788 = state_18650__$1;
(statearr_18725_18788[(2)] = inst_18575);

(statearr_18725_18788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (42))){
var state_18650__$1 = state_18650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18650__$1,(45),dchan);
} else {
if((state_val_18651 === (37))){
var inst_18618 = (state_18650[(23)]);
var inst_18609 = (state_18650[(25)]);
var inst_18522 = (state_18650[(12)]);
var inst_18618__$1 = cljs.core.first.call(null,inst_18609);
var inst_18619 = cljs.core.async.put_BANG_.call(null,inst_18618__$1,inst_18522,done);
var state_18650__$1 = (function (){var statearr_18726 = state_18650;
(statearr_18726[(23)] = inst_18618__$1);

return statearr_18726;
})();
if(cljs.core.truth_(inst_18619)){
var statearr_18727_18789 = state_18650__$1;
(statearr_18727_18789[(1)] = (39));

} else {
var statearr_18728_18790 = state_18650__$1;
(statearr_18728_18790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18651 === (8))){
var inst_18534 = (state_18650[(13)]);
var inst_18533 = (state_18650[(16)]);
var inst_18536 = (inst_18534 < inst_18533);
var inst_18537 = inst_18536;
var state_18650__$1 = state_18650;
if(cljs.core.truth_(inst_18537)){
var statearr_18729_18791 = state_18650__$1;
(statearr_18729_18791[(1)] = (10));

} else {
var statearr_18730_18792 = state_18650__$1;
(statearr_18730_18792[(1)] = (11));

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
});})(c__10732__auto___18738,cs,m,dchan,dctr,done))
;
return ((function (switch__10667__auto__,c__10732__auto___18738,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10668__auto__ = null;
var cljs$core$async$mult_$_state_machine__10668__auto____0 = (function (){
var statearr_18734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18734[(0)] = cljs$core$async$mult_$_state_machine__10668__auto__);

(statearr_18734[(1)] = (1));

return statearr_18734;
});
var cljs$core$async$mult_$_state_machine__10668__auto____1 = (function (state_18650){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_18650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e18735){if((e18735 instanceof Object)){
var ex__10671__auto__ = e18735;
var statearr_18736_18793 = state_18650;
(statearr_18736_18793[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18794 = state_18650;
state_18650 = G__18794;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10668__auto__ = function(state_18650){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10668__auto____1.call(this,state_18650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10668__auto____0;
cljs$core$async$mult_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10668__auto____1;
return cljs$core$async$mult_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___18738,cs,m,dchan,dctr,done))
})();
var state__10734__auto__ = (function (){var statearr_18737 = f__10733__auto__.call(null);
(statearr_18737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___18738);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___18738,cs,m,dchan,dctr,done))
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
var args18795 = [];
var len__6152__auto___18798 = arguments.length;
var i__6153__auto___18799 = (0);
while(true){
if((i__6153__auto___18799 < len__6152__auto___18798)){
args18795.push((arguments[i__6153__auto___18799]));

var G__18800 = (i__6153__auto___18799 + (1));
i__6153__auto___18799 = G__18800;
continue;
} else {
}
break;
}

var G__18797 = args18795.length;
switch (G__18797) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18795.length)].join('')));

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
var len__6152__auto___18812 = arguments.length;
var i__6153__auto___18813 = (0);
while(true){
if((i__6153__auto___18813 < len__6152__auto___18812)){
args__6159__auto__.push((arguments[i__6153__auto___18813]));

var G__18814 = (i__6153__auto___18813 + (1));
i__6153__auto___18813 = G__18814;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18806){
var map__18807 = p__18806;
var map__18807__$1 = ((((!((map__18807 == null)))?((((map__18807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18807):map__18807);
var opts = map__18807__$1;
var statearr_18809_18815 = state;
(statearr_18809_18815[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18807,map__18807__$1,opts){
return (function (val){
var statearr_18810_18816 = state;
(statearr_18810_18816[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18807,map__18807__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18811_18817 = state;
(statearr_18811_18817[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18802){
var G__18803 = cljs.core.first.call(null,seq18802);
var seq18802__$1 = cljs.core.next.call(null,seq18802);
var G__18804 = cljs.core.first.call(null,seq18802__$1);
var seq18802__$2 = cljs.core.next.call(null,seq18802__$1);
var G__18805 = cljs.core.first.call(null,seq18802__$2);
var seq18802__$3 = cljs.core.next.call(null,seq18802__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18803,G__18804,G__18805,seq18802__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18981 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18982){
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
this.meta18982 = meta18982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18983,meta18982__$1){
var self__ = this;
var _18983__$1 = this;
return (new cljs.core.async.t_cljs$core$async18981(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18982__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18983){
var self__ = this;
var _18983__$1 = this;
return self__.meta18982;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18981.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18982","meta18982",1535622489,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18981";

cljs.core.async.t_cljs$core$async18981.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18981");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18981 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18981(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18982){
return (new cljs.core.async.t_cljs$core$async18981(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18982));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18981(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10732__auto___19144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19081){
var state_val_19082 = (state_19081[(1)]);
if((state_val_19082 === (7))){
var inst_18999 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19083_19145 = state_19081__$1;
(statearr_19083_19145[(2)] = inst_18999);

(statearr_19083_19145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (20))){
var inst_19011 = (state_19081[(7)]);
var state_19081__$1 = state_19081;
var statearr_19084_19146 = state_19081__$1;
(statearr_19084_19146[(2)] = inst_19011);

(statearr_19084_19146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (27))){
var state_19081__$1 = state_19081;
var statearr_19085_19147 = state_19081__$1;
(statearr_19085_19147[(2)] = null);

(statearr_19085_19147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (1))){
var inst_18987 = (state_19081[(8)]);
var inst_18987__$1 = calc_state.call(null);
var inst_18989 = (inst_18987__$1 == null);
var inst_18990 = cljs.core.not.call(null,inst_18989);
var state_19081__$1 = (function (){var statearr_19086 = state_19081;
(statearr_19086[(8)] = inst_18987__$1);

return statearr_19086;
})();
if(inst_18990){
var statearr_19087_19148 = state_19081__$1;
(statearr_19087_19148[(1)] = (2));

} else {
var statearr_19088_19149 = state_19081__$1;
(statearr_19088_19149[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (24))){
var inst_19034 = (state_19081[(9)]);
var inst_19041 = (state_19081[(10)]);
var inst_19055 = (state_19081[(11)]);
var inst_19055__$1 = inst_19034.call(null,inst_19041);
var state_19081__$1 = (function (){var statearr_19089 = state_19081;
(statearr_19089[(11)] = inst_19055__$1);

return statearr_19089;
})();
if(cljs.core.truth_(inst_19055__$1)){
var statearr_19090_19150 = state_19081__$1;
(statearr_19090_19150[(1)] = (29));

} else {
var statearr_19091_19151 = state_19081__$1;
(statearr_19091_19151[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (4))){
var inst_19002 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19002)){
var statearr_19092_19152 = state_19081__$1;
(statearr_19092_19152[(1)] = (8));

} else {
var statearr_19093_19153 = state_19081__$1;
(statearr_19093_19153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (15))){
var inst_19028 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19028)){
var statearr_19094_19154 = state_19081__$1;
(statearr_19094_19154[(1)] = (19));

} else {
var statearr_19095_19155 = state_19081__$1;
(statearr_19095_19155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (21))){
var inst_19033 = (state_19081[(12)]);
var inst_19033__$1 = (state_19081[(2)]);
var inst_19034 = cljs.core.get.call(null,inst_19033__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19035 = cljs.core.get.call(null,inst_19033__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19036 = cljs.core.get.call(null,inst_19033__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19081__$1 = (function (){var statearr_19096 = state_19081;
(statearr_19096[(9)] = inst_19034);

(statearr_19096[(13)] = inst_19035);

(statearr_19096[(12)] = inst_19033__$1);

return statearr_19096;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19081__$1,(22),inst_19036);
} else {
if((state_val_19082 === (31))){
var inst_19063 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19063)){
var statearr_19097_19156 = state_19081__$1;
(statearr_19097_19156[(1)] = (32));

} else {
var statearr_19098_19157 = state_19081__$1;
(statearr_19098_19157[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (32))){
var inst_19040 = (state_19081[(14)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19081__$1,(35),out,inst_19040);
} else {
if((state_val_19082 === (33))){
var inst_19033 = (state_19081[(12)]);
var inst_19011 = inst_19033;
var state_19081__$1 = (function (){var statearr_19099 = state_19081;
(statearr_19099[(7)] = inst_19011);

return statearr_19099;
})();
var statearr_19100_19158 = state_19081__$1;
(statearr_19100_19158[(2)] = null);

(statearr_19100_19158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (13))){
var inst_19011 = (state_19081[(7)]);
var inst_19018 = inst_19011.cljs$lang$protocol_mask$partition0$;
var inst_19019 = (inst_19018 & (64));
var inst_19020 = inst_19011.cljs$core$ISeq$;
var inst_19021 = (inst_19019) || (inst_19020);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19021)){
var statearr_19101_19159 = state_19081__$1;
(statearr_19101_19159[(1)] = (16));

} else {
var statearr_19102_19160 = state_19081__$1;
(statearr_19102_19160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (22))){
var inst_19041 = (state_19081[(10)]);
var inst_19040 = (state_19081[(14)]);
var inst_19039 = (state_19081[(2)]);
var inst_19040__$1 = cljs.core.nth.call(null,inst_19039,(0),null);
var inst_19041__$1 = cljs.core.nth.call(null,inst_19039,(1),null);
var inst_19042 = (inst_19040__$1 == null);
var inst_19043 = cljs.core._EQ_.call(null,inst_19041__$1,change);
var inst_19044 = (inst_19042) || (inst_19043);
var state_19081__$1 = (function (){var statearr_19103 = state_19081;
(statearr_19103[(10)] = inst_19041__$1);

(statearr_19103[(14)] = inst_19040__$1);

return statearr_19103;
})();
if(cljs.core.truth_(inst_19044)){
var statearr_19104_19161 = state_19081__$1;
(statearr_19104_19161[(1)] = (23));

} else {
var statearr_19105_19162 = state_19081__$1;
(statearr_19105_19162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (36))){
var inst_19033 = (state_19081[(12)]);
var inst_19011 = inst_19033;
var state_19081__$1 = (function (){var statearr_19106 = state_19081;
(statearr_19106[(7)] = inst_19011);

return statearr_19106;
})();
var statearr_19107_19163 = state_19081__$1;
(statearr_19107_19163[(2)] = null);

(statearr_19107_19163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (29))){
var inst_19055 = (state_19081[(11)]);
var state_19081__$1 = state_19081;
var statearr_19108_19164 = state_19081__$1;
(statearr_19108_19164[(2)] = inst_19055);

(statearr_19108_19164[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (6))){
var state_19081__$1 = state_19081;
var statearr_19109_19165 = state_19081__$1;
(statearr_19109_19165[(2)] = false);

(statearr_19109_19165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (28))){
var inst_19051 = (state_19081[(2)]);
var inst_19052 = calc_state.call(null);
var inst_19011 = inst_19052;
var state_19081__$1 = (function (){var statearr_19110 = state_19081;
(statearr_19110[(7)] = inst_19011);

(statearr_19110[(15)] = inst_19051);

return statearr_19110;
})();
var statearr_19111_19166 = state_19081__$1;
(statearr_19111_19166[(2)] = null);

(statearr_19111_19166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (25))){
var inst_19077 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19112_19167 = state_19081__$1;
(statearr_19112_19167[(2)] = inst_19077);

(statearr_19112_19167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (34))){
var inst_19075 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19113_19168 = state_19081__$1;
(statearr_19113_19168[(2)] = inst_19075);

(statearr_19113_19168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (17))){
var state_19081__$1 = state_19081;
var statearr_19114_19169 = state_19081__$1;
(statearr_19114_19169[(2)] = false);

(statearr_19114_19169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (3))){
var state_19081__$1 = state_19081;
var statearr_19115_19170 = state_19081__$1;
(statearr_19115_19170[(2)] = false);

(statearr_19115_19170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (12))){
var inst_19079 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19081__$1,inst_19079);
} else {
if((state_val_19082 === (2))){
var inst_18987 = (state_19081[(8)]);
var inst_18992 = inst_18987.cljs$lang$protocol_mask$partition0$;
var inst_18993 = (inst_18992 & (64));
var inst_18994 = inst_18987.cljs$core$ISeq$;
var inst_18995 = (inst_18993) || (inst_18994);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_18995)){
var statearr_19116_19171 = state_19081__$1;
(statearr_19116_19171[(1)] = (5));

} else {
var statearr_19117_19172 = state_19081__$1;
(statearr_19117_19172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (23))){
var inst_19040 = (state_19081[(14)]);
var inst_19046 = (inst_19040 == null);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19046)){
var statearr_19118_19173 = state_19081__$1;
(statearr_19118_19173[(1)] = (26));

} else {
var statearr_19119_19174 = state_19081__$1;
(statearr_19119_19174[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (35))){
var inst_19066 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
if(cljs.core.truth_(inst_19066)){
var statearr_19120_19175 = state_19081__$1;
(statearr_19120_19175[(1)] = (36));

} else {
var statearr_19121_19176 = state_19081__$1;
(statearr_19121_19176[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (19))){
var inst_19011 = (state_19081[(7)]);
var inst_19030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19011);
var state_19081__$1 = state_19081;
var statearr_19122_19177 = state_19081__$1;
(statearr_19122_19177[(2)] = inst_19030);

(statearr_19122_19177[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (11))){
var inst_19011 = (state_19081[(7)]);
var inst_19015 = (inst_19011 == null);
var inst_19016 = cljs.core.not.call(null,inst_19015);
var state_19081__$1 = state_19081;
if(inst_19016){
var statearr_19123_19178 = state_19081__$1;
(statearr_19123_19178[(1)] = (13));

} else {
var statearr_19124_19179 = state_19081__$1;
(statearr_19124_19179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (9))){
var inst_18987 = (state_19081[(8)]);
var state_19081__$1 = state_19081;
var statearr_19125_19180 = state_19081__$1;
(statearr_19125_19180[(2)] = inst_18987);

(statearr_19125_19180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (5))){
var state_19081__$1 = state_19081;
var statearr_19126_19181 = state_19081__$1;
(statearr_19126_19181[(2)] = true);

(statearr_19126_19181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (14))){
var state_19081__$1 = state_19081;
var statearr_19127_19182 = state_19081__$1;
(statearr_19127_19182[(2)] = false);

(statearr_19127_19182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (26))){
var inst_19041 = (state_19081[(10)]);
var inst_19048 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19041);
var state_19081__$1 = state_19081;
var statearr_19128_19183 = state_19081__$1;
(statearr_19128_19183[(2)] = inst_19048);

(statearr_19128_19183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (16))){
var state_19081__$1 = state_19081;
var statearr_19129_19184 = state_19081__$1;
(statearr_19129_19184[(2)] = true);

(statearr_19129_19184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (38))){
var inst_19071 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19130_19185 = state_19081__$1;
(statearr_19130_19185[(2)] = inst_19071);

(statearr_19130_19185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (30))){
var inst_19034 = (state_19081[(9)]);
var inst_19041 = (state_19081[(10)]);
var inst_19035 = (state_19081[(13)]);
var inst_19058 = cljs.core.empty_QMARK_.call(null,inst_19034);
var inst_19059 = inst_19035.call(null,inst_19041);
var inst_19060 = cljs.core.not.call(null,inst_19059);
var inst_19061 = (inst_19058) && (inst_19060);
var state_19081__$1 = state_19081;
var statearr_19131_19186 = state_19081__$1;
(statearr_19131_19186[(2)] = inst_19061);

(statearr_19131_19186[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (10))){
var inst_18987 = (state_19081[(8)]);
var inst_19007 = (state_19081[(2)]);
var inst_19008 = cljs.core.get.call(null,inst_19007,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19009 = cljs.core.get.call(null,inst_19007,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19010 = cljs.core.get.call(null,inst_19007,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19011 = inst_18987;
var state_19081__$1 = (function (){var statearr_19132 = state_19081;
(statearr_19132[(7)] = inst_19011);

(statearr_19132[(16)] = inst_19008);

(statearr_19132[(17)] = inst_19009);

(statearr_19132[(18)] = inst_19010);

return statearr_19132;
})();
var statearr_19133_19187 = state_19081__$1;
(statearr_19133_19187[(2)] = null);

(statearr_19133_19187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (18))){
var inst_19025 = (state_19081[(2)]);
var state_19081__$1 = state_19081;
var statearr_19134_19188 = state_19081__$1;
(statearr_19134_19188[(2)] = inst_19025);

(statearr_19134_19188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (37))){
var state_19081__$1 = state_19081;
var statearr_19135_19189 = state_19081__$1;
(statearr_19135_19189[(2)] = null);

(statearr_19135_19189[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19082 === (8))){
var inst_18987 = (state_19081[(8)]);
var inst_19004 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18987);
var state_19081__$1 = state_19081;
var statearr_19136_19190 = state_19081__$1;
(statearr_19136_19190[(2)] = inst_19004);

(statearr_19136_19190[(1)] = (10));


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
});})(c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10667__auto__,c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10668__auto__ = null;
var cljs$core$async$mix_$_state_machine__10668__auto____0 = (function (){
var statearr_19140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19140[(0)] = cljs$core$async$mix_$_state_machine__10668__auto__);

(statearr_19140[(1)] = (1));

return statearr_19140;
});
var cljs$core$async$mix_$_state_machine__10668__auto____1 = (function (state_19081){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19141){if((e19141 instanceof Object)){
var ex__10671__auto__ = e19141;
var statearr_19142_19191 = state_19081;
(statearr_19142_19191[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19192 = state_19081;
state_19081 = G__19192;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10668__auto__ = function(state_19081){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10668__auto____1.call(this,state_19081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10668__auto____0;
cljs$core$async$mix_$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10668__auto____1;
return cljs$core$async$mix_$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10734__auto__ = (function (){var statearr_19143 = f__10733__auto__.call(null);
(statearr_19143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19144);

return statearr_19143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19144,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19193 = [];
var len__6152__auto___19196 = arguments.length;
var i__6153__auto___19197 = (0);
while(true){
if((i__6153__auto___19197 < len__6152__auto___19196)){
args19193.push((arguments[i__6153__auto___19197]));

var G__19198 = (i__6153__auto___19197 + (1));
i__6153__auto___19197 = G__19198;
continue;
} else {
}
break;
}

var G__19195 = args19193.length;
switch (G__19195) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19193.length)].join('')));

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
var args19201 = [];
var len__6152__auto___19326 = arguments.length;
var i__6153__auto___19327 = (0);
while(true){
if((i__6153__auto___19327 < len__6152__auto___19326)){
args19201.push((arguments[i__6153__auto___19327]));

var G__19328 = (i__6153__auto___19327 + (1));
i__6153__auto___19327 = G__19328;
continue;
} else {
}
break;
}

var G__19203 = args19201.length;
switch (G__19203) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19201.length)].join('')));

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
return (function (p1__19200_SHARP_){
if(cljs.core.truth_(p1__19200_SHARP_.call(null,topic))){
return p1__19200_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19200_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19204 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19205){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19205 = meta19205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19206,meta19205__$1){
var self__ = this;
var _19206__$1 = this;
return (new cljs.core.async.t_cljs$core$async19204(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19205__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19206){
var self__ = this;
var _19206__$1 = this;
return self__.meta19205;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19205","meta19205",-154994537,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19204";

cljs.core.async.t_cljs$core$async19204.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19204");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19204 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19204(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19205){
return (new cljs.core.async.t_cljs$core$async19204(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19205));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19204(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10732__auto___19330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19330,mults,ensure_mult,p){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19330,mults,ensure_mult,p){
return (function (state_19278){
var state_val_19279 = (state_19278[(1)]);
if((state_val_19279 === (7))){
var inst_19274 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19280_19331 = state_19278__$1;
(statearr_19280_19331[(2)] = inst_19274);

(statearr_19280_19331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (20))){
var state_19278__$1 = state_19278;
var statearr_19281_19332 = state_19278__$1;
(statearr_19281_19332[(2)] = null);

(statearr_19281_19332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (1))){
var state_19278__$1 = state_19278;
var statearr_19282_19333 = state_19278__$1;
(statearr_19282_19333[(2)] = null);

(statearr_19282_19333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (24))){
var inst_19257 = (state_19278[(7)]);
var inst_19266 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19257);
var state_19278__$1 = state_19278;
var statearr_19283_19334 = state_19278__$1;
(statearr_19283_19334[(2)] = inst_19266);

(statearr_19283_19334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (4))){
var inst_19209 = (state_19278[(8)]);
var inst_19209__$1 = (state_19278[(2)]);
var inst_19210 = (inst_19209__$1 == null);
var state_19278__$1 = (function (){var statearr_19284 = state_19278;
(statearr_19284[(8)] = inst_19209__$1);

return statearr_19284;
})();
if(cljs.core.truth_(inst_19210)){
var statearr_19285_19335 = state_19278__$1;
(statearr_19285_19335[(1)] = (5));

} else {
var statearr_19286_19336 = state_19278__$1;
(statearr_19286_19336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (15))){
var inst_19251 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19287_19337 = state_19278__$1;
(statearr_19287_19337[(2)] = inst_19251);

(statearr_19287_19337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (21))){
var inst_19271 = (state_19278[(2)]);
var state_19278__$1 = (function (){var statearr_19288 = state_19278;
(statearr_19288[(9)] = inst_19271);

return statearr_19288;
})();
var statearr_19289_19338 = state_19278__$1;
(statearr_19289_19338[(2)] = null);

(statearr_19289_19338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (13))){
var inst_19233 = (state_19278[(10)]);
var inst_19235 = cljs.core.chunked_seq_QMARK_.call(null,inst_19233);
var state_19278__$1 = state_19278;
if(inst_19235){
var statearr_19290_19339 = state_19278__$1;
(statearr_19290_19339[(1)] = (16));

} else {
var statearr_19291_19340 = state_19278__$1;
(statearr_19291_19340[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (22))){
var inst_19263 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
if(cljs.core.truth_(inst_19263)){
var statearr_19292_19341 = state_19278__$1;
(statearr_19292_19341[(1)] = (23));

} else {
var statearr_19293_19342 = state_19278__$1;
(statearr_19293_19342[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (6))){
var inst_19257 = (state_19278[(7)]);
var inst_19259 = (state_19278[(11)]);
var inst_19209 = (state_19278[(8)]);
var inst_19257__$1 = topic_fn.call(null,inst_19209);
var inst_19258 = cljs.core.deref.call(null,mults);
var inst_19259__$1 = cljs.core.get.call(null,inst_19258,inst_19257__$1);
var state_19278__$1 = (function (){var statearr_19294 = state_19278;
(statearr_19294[(7)] = inst_19257__$1);

(statearr_19294[(11)] = inst_19259__$1);

return statearr_19294;
})();
if(cljs.core.truth_(inst_19259__$1)){
var statearr_19295_19343 = state_19278__$1;
(statearr_19295_19343[(1)] = (19));

} else {
var statearr_19296_19344 = state_19278__$1;
(statearr_19296_19344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (25))){
var inst_19268 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19297_19345 = state_19278__$1;
(statearr_19297_19345[(2)] = inst_19268);

(statearr_19297_19345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (17))){
var inst_19233 = (state_19278[(10)]);
var inst_19242 = cljs.core.first.call(null,inst_19233);
var inst_19243 = cljs.core.async.muxch_STAR_.call(null,inst_19242);
var inst_19244 = cljs.core.async.close_BANG_.call(null,inst_19243);
var inst_19245 = cljs.core.next.call(null,inst_19233);
var inst_19219 = inst_19245;
var inst_19220 = null;
var inst_19221 = (0);
var inst_19222 = (0);
var state_19278__$1 = (function (){var statearr_19298 = state_19278;
(statearr_19298[(12)] = inst_19221);

(statearr_19298[(13)] = inst_19219);

(statearr_19298[(14)] = inst_19244);

(statearr_19298[(15)] = inst_19222);

(statearr_19298[(16)] = inst_19220);

return statearr_19298;
})();
var statearr_19299_19346 = state_19278__$1;
(statearr_19299_19346[(2)] = null);

(statearr_19299_19346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (3))){
var inst_19276 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19278__$1,inst_19276);
} else {
if((state_val_19279 === (12))){
var inst_19253 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19300_19347 = state_19278__$1;
(statearr_19300_19347[(2)] = inst_19253);

(statearr_19300_19347[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (2))){
var state_19278__$1 = state_19278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19278__$1,(4),ch);
} else {
if((state_val_19279 === (23))){
var state_19278__$1 = state_19278;
var statearr_19301_19348 = state_19278__$1;
(statearr_19301_19348[(2)] = null);

(statearr_19301_19348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (19))){
var inst_19259 = (state_19278[(11)]);
var inst_19209 = (state_19278[(8)]);
var inst_19261 = cljs.core.async.muxch_STAR_.call(null,inst_19259);
var state_19278__$1 = state_19278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19278__$1,(22),inst_19261,inst_19209);
} else {
if((state_val_19279 === (11))){
var inst_19219 = (state_19278[(13)]);
var inst_19233 = (state_19278[(10)]);
var inst_19233__$1 = cljs.core.seq.call(null,inst_19219);
var state_19278__$1 = (function (){var statearr_19302 = state_19278;
(statearr_19302[(10)] = inst_19233__$1);

return statearr_19302;
})();
if(inst_19233__$1){
var statearr_19303_19349 = state_19278__$1;
(statearr_19303_19349[(1)] = (13));

} else {
var statearr_19304_19350 = state_19278__$1;
(statearr_19304_19350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (9))){
var inst_19255 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19305_19351 = state_19278__$1;
(statearr_19305_19351[(2)] = inst_19255);

(statearr_19305_19351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (5))){
var inst_19216 = cljs.core.deref.call(null,mults);
var inst_19217 = cljs.core.vals.call(null,inst_19216);
var inst_19218 = cljs.core.seq.call(null,inst_19217);
var inst_19219 = inst_19218;
var inst_19220 = null;
var inst_19221 = (0);
var inst_19222 = (0);
var state_19278__$1 = (function (){var statearr_19306 = state_19278;
(statearr_19306[(12)] = inst_19221);

(statearr_19306[(13)] = inst_19219);

(statearr_19306[(15)] = inst_19222);

(statearr_19306[(16)] = inst_19220);

return statearr_19306;
})();
var statearr_19307_19352 = state_19278__$1;
(statearr_19307_19352[(2)] = null);

(statearr_19307_19352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (14))){
var state_19278__$1 = state_19278;
var statearr_19311_19353 = state_19278__$1;
(statearr_19311_19353[(2)] = null);

(statearr_19311_19353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (16))){
var inst_19233 = (state_19278[(10)]);
var inst_19237 = cljs.core.chunk_first.call(null,inst_19233);
var inst_19238 = cljs.core.chunk_rest.call(null,inst_19233);
var inst_19239 = cljs.core.count.call(null,inst_19237);
var inst_19219 = inst_19238;
var inst_19220 = inst_19237;
var inst_19221 = inst_19239;
var inst_19222 = (0);
var state_19278__$1 = (function (){var statearr_19312 = state_19278;
(statearr_19312[(12)] = inst_19221);

(statearr_19312[(13)] = inst_19219);

(statearr_19312[(15)] = inst_19222);

(statearr_19312[(16)] = inst_19220);

return statearr_19312;
})();
var statearr_19313_19354 = state_19278__$1;
(statearr_19313_19354[(2)] = null);

(statearr_19313_19354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (10))){
var inst_19221 = (state_19278[(12)]);
var inst_19219 = (state_19278[(13)]);
var inst_19222 = (state_19278[(15)]);
var inst_19220 = (state_19278[(16)]);
var inst_19227 = cljs.core._nth.call(null,inst_19220,inst_19222);
var inst_19228 = cljs.core.async.muxch_STAR_.call(null,inst_19227);
var inst_19229 = cljs.core.async.close_BANG_.call(null,inst_19228);
var inst_19230 = (inst_19222 + (1));
var tmp19308 = inst_19221;
var tmp19309 = inst_19219;
var tmp19310 = inst_19220;
var inst_19219__$1 = tmp19309;
var inst_19220__$1 = tmp19310;
var inst_19221__$1 = tmp19308;
var inst_19222__$1 = inst_19230;
var state_19278__$1 = (function (){var statearr_19314 = state_19278;
(statearr_19314[(12)] = inst_19221__$1);

(statearr_19314[(13)] = inst_19219__$1);

(statearr_19314[(15)] = inst_19222__$1);

(statearr_19314[(16)] = inst_19220__$1);

(statearr_19314[(17)] = inst_19229);

return statearr_19314;
})();
var statearr_19315_19355 = state_19278__$1;
(statearr_19315_19355[(2)] = null);

(statearr_19315_19355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (18))){
var inst_19248 = (state_19278[(2)]);
var state_19278__$1 = state_19278;
var statearr_19316_19356 = state_19278__$1;
(statearr_19316_19356[(2)] = inst_19248);

(statearr_19316_19356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19279 === (8))){
var inst_19221 = (state_19278[(12)]);
var inst_19222 = (state_19278[(15)]);
var inst_19224 = (inst_19222 < inst_19221);
var inst_19225 = inst_19224;
var state_19278__$1 = state_19278;
if(cljs.core.truth_(inst_19225)){
var statearr_19317_19357 = state_19278__$1;
(statearr_19317_19357[(1)] = (10));

} else {
var statearr_19318_19358 = state_19278__$1;
(statearr_19318_19358[(1)] = (11));

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
});})(c__10732__auto___19330,mults,ensure_mult,p))
;
return ((function (switch__10667__auto__,c__10732__auto___19330,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19322[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19322[(1)] = (1));

return statearr_19322;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19278){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19323){if((e19323 instanceof Object)){
var ex__10671__auto__ = e19323;
var statearr_19324_19359 = state_19278;
(statearr_19324_19359[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19360 = state_19278;
state_19278 = G__19360;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19330,mults,ensure_mult,p))
})();
var state__10734__auto__ = (function (){var statearr_19325 = f__10733__auto__.call(null);
(statearr_19325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19330);

return statearr_19325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19330,mults,ensure_mult,p))
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
var args19361 = [];
var len__6152__auto___19364 = arguments.length;
var i__6153__auto___19365 = (0);
while(true){
if((i__6153__auto___19365 < len__6152__auto___19364)){
args19361.push((arguments[i__6153__auto___19365]));

var G__19366 = (i__6153__auto___19365 + (1));
i__6153__auto___19365 = G__19366;
continue;
} else {
}
break;
}

var G__19363 = args19361.length;
switch (G__19363) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19361.length)].join('')));

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
var args19368 = [];
var len__6152__auto___19371 = arguments.length;
var i__6153__auto___19372 = (0);
while(true){
if((i__6153__auto___19372 < len__6152__auto___19371)){
args19368.push((arguments[i__6153__auto___19372]));

var G__19373 = (i__6153__auto___19372 + (1));
i__6153__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var G__19370 = args19368.length;
switch (G__19370) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19368.length)].join('')));

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
var args19375 = [];
var len__6152__auto___19446 = arguments.length;
var i__6153__auto___19447 = (0);
while(true){
if((i__6153__auto___19447 < len__6152__auto___19446)){
args19375.push((arguments[i__6153__auto___19447]));

var G__19448 = (i__6153__auto___19447 + (1));
i__6153__auto___19447 = G__19448;
continue;
} else {
}
break;
}

var G__19377 = args19375.length;
switch (G__19377) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19375.length)].join('')));

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
var c__10732__auto___19450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19416){
var state_val_19417 = (state_19416[(1)]);
if((state_val_19417 === (7))){
var state_19416__$1 = state_19416;
var statearr_19418_19451 = state_19416__$1;
(statearr_19418_19451[(2)] = null);

(statearr_19418_19451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (1))){
var state_19416__$1 = state_19416;
var statearr_19419_19452 = state_19416__$1;
(statearr_19419_19452[(2)] = null);

(statearr_19419_19452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (4))){
var inst_19380 = (state_19416[(7)]);
var inst_19382 = (inst_19380 < cnt);
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19382)){
var statearr_19420_19453 = state_19416__$1;
(statearr_19420_19453[(1)] = (6));

} else {
var statearr_19421_19454 = state_19416__$1;
(statearr_19421_19454[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (15))){
var inst_19412 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19422_19455 = state_19416__$1;
(statearr_19422_19455[(2)] = inst_19412);

(statearr_19422_19455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (13))){
var inst_19405 = cljs.core.async.close_BANG_.call(null,out);
var state_19416__$1 = state_19416;
var statearr_19423_19456 = state_19416__$1;
(statearr_19423_19456[(2)] = inst_19405);

(statearr_19423_19456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (6))){
var state_19416__$1 = state_19416;
var statearr_19424_19457 = state_19416__$1;
(statearr_19424_19457[(2)] = null);

(statearr_19424_19457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (3))){
var inst_19414 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19416__$1,inst_19414);
} else {
if((state_val_19417 === (12))){
var inst_19402 = (state_19416[(8)]);
var inst_19402__$1 = (state_19416[(2)]);
var inst_19403 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19402__$1);
var state_19416__$1 = (function (){var statearr_19425 = state_19416;
(statearr_19425[(8)] = inst_19402__$1);

return statearr_19425;
})();
if(cljs.core.truth_(inst_19403)){
var statearr_19426_19458 = state_19416__$1;
(statearr_19426_19458[(1)] = (13));

} else {
var statearr_19427_19459 = state_19416__$1;
(statearr_19427_19459[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (2))){
var inst_19379 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19380 = (0);
var state_19416__$1 = (function (){var statearr_19428 = state_19416;
(statearr_19428[(9)] = inst_19379);

(statearr_19428[(7)] = inst_19380);

return statearr_19428;
})();
var statearr_19429_19460 = state_19416__$1;
(statearr_19429_19460[(2)] = null);

(statearr_19429_19460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (11))){
var inst_19380 = (state_19416[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19416,(10),Object,null,(9));
var inst_19389 = chs__$1.call(null,inst_19380);
var inst_19390 = done.call(null,inst_19380);
var inst_19391 = cljs.core.async.take_BANG_.call(null,inst_19389,inst_19390);
var state_19416__$1 = state_19416;
var statearr_19430_19461 = state_19416__$1;
(statearr_19430_19461[(2)] = inst_19391);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19416__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (9))){
var inst_19380 = (state_19416[(7)]);
var inst_19393 = (state_19416[(2)]);
var inst_19394 = (inst_19380 + (1));
var inst_19380__$1 = inst_19394;
var state_19416__$1 = (function (){var statearr_19431 = state_19416;
(statearr_19431[(7)] = inst_19380__$1);

(statearr_19431[(10)] = inst_19393);

return statearr_19431;
})();
var statearr_19432_19462 = state_19416__$1;
(statearr_19432_19462[(2)] = null);

(statearr_19432_19462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (5))){
var inst_19400 = (state_19416[(2)]);
var state_19416__$1 = (function (){var statearr_19433 = state_19416;
(statearr_19433[(11)] = inst_19400);

return statearr_19433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19416__$1,(12),dchan);
} else {
if((state_val_19417 === (14))){
var inst_19402 = (state_19416[(8)]);
var inst_19407 = cljs.core.apply.call(null,f,inst_19402);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19416__$1,(16),out,inst_19407);
} else {
if((state_val_19417 === (16))){
var inst_19409 = (state_19416[(2)]);
var state_19416__$1 = (function (){var statearr_19434 = state_19416;
(statearr_19434[(12)] = inst_19409);

return statearr_19434;
})();
var statearr_19435_19463 = state_19416__$1;
(statearr_19435_19463[(2)] = null);

(statearr_19435_19463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (10))){
var inst_19384 = (state_19416[(2)]);
var inst_19385 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19416__$1 = (function (){var statearr_19436 = state_19416;
(statearr_19436[(13)] = inst_19384);

return statearr_19436;
})();
var statearr_19437_19464 = state_19416__$1;
(statearr_19437_19464[(2)] = inst_19385);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19416__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (8))){
var inst_19398 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19438_19465 = state_19416__$1;
(statearr_19438_19465[(2)] = inst_19398);

(statearr_19438_19465[(1)] = (5));


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
});})(c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10667__auto__,c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19442[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19442[(1)] = (1));

return statearr_19442;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19416){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19443){if((e19443 instanceof Object)){
var ex__10671__auto__ = e19443;
var statearr_19444_19466 = state_19416;
(statearr_19444_19466[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19467 = state_19416;
state_19416 = G__19467;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10734__auto__ = (function (){var statearr_19445 = f__10733__auto__.call(null);
(statearr_19445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19450);

return statearr_19445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19450,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19469 = [];
var len__6152__auto___19525 = arguments.length;
var i__6153__auto___19526 = (0);
while(true){
if((i__6153__auto___19526 < len__6152__auto___19525)){
args19469.push((arguments[i__6153__auto___19526]));

var G__19527 = (i__6153__auto___19526 + (1));
i__6153__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19471 = args19469.length;
switch (G__19471) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19469.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19529,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19529,out){
return (function (state_19501){
var state_val_19502 = (state_19501[(1)]);
if((state_val_19502 === (7))){
var inst_19480 = (state_19501[(7)]);
var inst_19481 = (state_19501[(8)]);
var inst_19480__$1 = (state_19501[(2)]);
var inst_19481__$1 = cljs.core.nth.call(null,inst_19480__$1,(0),null);
var inst_19482 = cljs.core.nth.call(null,inst_19480__$1,(1),null);
var inst_19483 = (inst_19481__$1 == null);
var state_19501__$1 = (function (){var statearr_19503 = state_19501;
(statearr_19503[(7)] = inst_19480__$1);

(statearr_19503[(8)] = inst_19481__$1);

(statearr_19503[(9)] = inst_19482);

return statearr_19503;
})();
if(cljs.core.truth_(inst_19483)){
var statearr_19504_19530 = state_19501__$1;
(statearr_19504_19530[(1)] = (8));

} else {
var statearr_19505_19531 = state_19501__$1;
(statearr_19505_19531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (1))){
var inst_19472 = cljs.core.vec.call(null,chs);
var inst_19473 = inst_19472;
var state_19501__$1 = (function (){var statearr_19506 = state_19501;
(statearr_19506[(10)] = inst_19473);

return statearr_19506;
})();
var statearr_19507_19532 = state_19501__$1;
(statearr_19507_19532[(2)] = null);

(statearr_19507_19532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (4))){
var inst_19473 = (state_19501[(10)]);
var state_19501__$1 = state_19501;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19501__$1,(7),inst_19473);
} else {
if((state_val_19502 === (6))){
var inst_19497 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19508_19533 = state_19501__$1;
(statearr_19508_19533[(2)] = inst_19497);

(statearr_19508_19533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (3))){
var inst_19499 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19501__$1,inst_19499);
} else {
if((state_val_19502 === (2))){
var inst_19473 = (state_19501[(10)]);
var inst_19475 = cljs.core.count.call(null,inst_19473);
var inst_19476 = (inst_19475 > (0));
var state_19501__$1 = state_19501;
if(cljs.core.truth_(inst_19476)){
var statearr_19510_19534 = state_19501__$1;
(statearr_19510_19534[(1)] = (4));

} else {
var statearr_19511_19535 = state_19501__$1;
(statearr_19511_19535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (11))){
var inst_19473 = (state_19501[(10)]);
var inst_19490 = (state_19501[(2)]);
var tmp19509 = inst_19473;
var inst_19473__$1 = tmp19509;
var state_19501__$1 = (function (){var statearr_19512 = state_19501;
(statearr_19512[(10)] = inst_19473__$1);

(statearr_19512[(11)] = inst_19490);

return statearr_19512;
})();
var statearr_19513_19536 = state_19501__$1;
(statearr_19513_19536[(2)] = null);

(statearr_19513_19536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (9))){
var inst_19481 = (state_19501[(8)]);
var state_19501__$1 = state_19501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19501__$1,(11),out,inst_19481);
} else {
if((state_val_19502 === (5))){
var inst_19495 = cljs.core.async.close_BANG_.call(null,out);
var state_19501__$1 = state_19501;
var statearr_19514_19537 = state_19501__$1;
(statearr_19514_19537[(2)] = inst_19495);

(statearr_19514_19537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (10))){
var inst_19493 = (state_19501[(2)]);
var state_19501__$1 = state_19501;
var statearr_19515_19538 = state_19501__$1;
(statearr_19515_19538[(2)] = inst_19493);

(statearr_19515_19538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19502 === (8))){
var inst_19473 = (state_19501[(10)]);
var inst_19480 = (state_19501[(7)]);
var inst_19481 = (state_19501[(8)]);
var inst_19482 = (state_19501[(9)]);
var inst_19485 = (function (){var cs = inst_19473;
var vec__19478 = inst_19480;
var v = inst_19481;
var c = inst_19482;
return ((function (cs,vec__19478,v,c,inst_19473,inst_19480,inst_19481,inst_19482,state_val_19502,c__10732__auto___19529,out){
return (function (p1__19468_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19468_SHARP_);
});
;})(cs,vec__19478,v,c,inst_19473,inst_19480,inst_19481,inst_19482,state_val_19502,c__10732__auto___19529,out))
})();
var inst_19486 = cljs.core.filterv.call(null,inst_19485,inst_19473);
var inst_19473__$1 = inst_19486;
var state_19501__$1 = (function (){var statearr_19516 = state_19501;
(statearr_19516[(10)] = inst_19473__$1);

return statearr_19516;
})();
var statearr_19517_19539 = state_19501__$1;
(statearr_19517_19539[(2)] = null);

(statearr_19517_19539[(1)] = (2));


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
});})(c__10732__auto___19529,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19529,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19521[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19521[(1)] = (1));

return statearr_19521;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19501){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19522){if((e19522 instanceof Object)){
var ex__10671__auto__ = e19522;
var statearr_19523_19540 = state_19501;
(statearr_19523_19540[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19541 = state_19501;
state_19501 = G__19541;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19529,out))
})();
var state__10734__auto__ = (function (){var statearr_19524 = f__10733__auto__.call(null);
(statearr_19524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19529);

return statearr_19524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19529,out))
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
var args19542 = [];
var len__6152__auto___19591 = arguments.length;
var i__6153__auto___19592 = (0);
while(true){
if((i__6153__auto___19592 < len__6152__auto___19591)){
args19542.push((arguments[i__6153__auto___19592]));

var G__19593 = (i__6153__auto___19592 + (1));
i__6153__auto___19592 = G__19593;
continue;
} else {
}
break;
}

var G__19544 = args19542.length;
switch (G__19544) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19542.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19595,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19595,out){
return (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19550 = (state_19568[(7)]);
var inst_19550__$1 = (state_19568[(2)]);
var inst_19551 = (inst_19550__$1 == null);
var inst_19552 = cljs.core.not.call(null,inst_19551);
var state_19568__$1 = (function (){var statearr_19570 = state_19568;
(statearr_19570[(7)] = inst_19550__$1);

return statearr_19570;
})();
if(inst_19552){
var statearr_19571_19596 = state_19568__$1;
(statearr_19571_19596[(1)] = (8));

} else {
var statearr_19572_19597 = state_19568__$1;
(statearr_19572_19597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var inst_19545 = (0);
var state_19568__$1 = (function (){var statearr_19573 = state_19568;
(statearr_19573[(8)] = inst_19545);

return statearr_19573;
})();
var statearr_19574_19598 = state_19568__$1;
(statearr_19574_19598[(2)] = null);

(statearr_19574_19598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19568__$1,(7),ch);
} else {
if((state_val_19569 === (6))){
var inst_19563 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19575_19599 = state_19568__$1;
(statearr_19575_19599[(2)] = inst_19563);

(statearr_19575_19599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19565 = (state_19568[(2)]);
var inst_19566 = cljs.core.async.close_BANG_.call(null,out);
var state_19568__$1 = (function (){var statearr_19576 = state_19568;
(statearr_19576[(9)] = inst_19565);

return statearr_19576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (2))){
var inst_19545 = (state_19568[(8)]);
var inst_19547 = (inst_19545 < n);
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19547)){
var statearr_19577_19600 = state_19568__$1;
(statearr_19577_19600[(1)] = (4));

} else {
var statearr_19578_19601 = state_19568__$1;
(statearr_19578_19601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (11))){
var inst_19545 = (state_19568[(8)]);
var inst_19555 = (state_19568[(2)]);
var inst_19556 = (inst_19545 + (1));
var inst_19545__$1 = inst_19556;
var state_19568__$1 = (function (){var statearr_19579 = state_19568;
(statearr_19579[(10)] = inst_19555);

(statearr_19579[(8)] = inst_19545__$1);

return statearr_19579;
})();
var statearr_19580_19602 = state_19568__$1;
(statearr_19580_19602[(2)] = null);

(statearr_19580_19602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var state_19568__$1 = state_19568;
var statearr_19581_19603 = state_19568__$1;
(statearr_19581_19603[(2)] = null);

(statearr_19581_19603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (5))){
var state_19568__$1 = state_19568;
var statearr_19582_19604 = state_19568__$1;
(statearr_19582_19604[(2)] = null);

(statearr_19582_19604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19560 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19583_19605 = state_19568__$1;
(statearr_19583_19605[(2)] = inst_19560);

(statearr_19583_19605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19550 = (state_19568[(7)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19568__$1,(11),out,inst_19550);
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
});})(c__10732__auto___19595,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19595,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19587[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19587[(1)] = (1));

return statearr_19587;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19568){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19588){if((e19588 instanceof Object)){
var ex__10671__auto__ = e19588;
var statearr_19589_19606 = state_19568;
(statearr_19589_19606[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19607 = state_19568;
state_19568 = G__19607;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19595,out))
})();
var state__10734__auto__ = (function (){var statearr_19590 = f__10733__auto__.call(null);
(statearr_19590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19595);

return statearr_19590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19595,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19615 = (function (map_LT_,f,ch,meta19616){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19616 = meta19616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19617,meta19616__$1){
var self__ = this;
var _19617__$1 = this;
return (new cljs.core.async.t_cljs$core$async19615(self__.map_LT_,self__.f,self__.ch,meta19616__$1));
});

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19617){
var self__ = this;
var _19617__$1 = this;
return self__.meta19616;
});

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19618 = (function (map_LT_,f,ch,meta19616,_,fn1,meta19619){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19616 = meta19616;
this._ = _;
this.fn1 = fn1;
this.meta19619 = meta19619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19620,meta19619__$1){
var self__ = this;
var _19620__$1 = this;
return (new cljs.core.async.t_cljs$core$async19618(self__.map_LT_,self__.f,self__.ch,self__.meta19616,self__._,self__.fn1,meta19619__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19620){
var self__ = this;
var _19620__$1 = this;
return self__.meta19619;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19618.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19608_SHARP_){
return f1.call(null,(((p1__19608_SHARP_ == null))?null:self__.f.call(null,p1__19608_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19618.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19616","meta19616",362243533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19615","cljs.core.async/t_cljs$core$async19615",241897200,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19619","meta19619",292143767,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19618";

cljs.core.async.t_cljs$core$async19618.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19618");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19618 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19618(map_LT___$1,f__$1,ch__$1,meta19616__$1,___$2,fn1__$1,meta19619){
return (new cljs.core.async.t_cljs$core$async19618(map_LT___$1,f__$1,ch__$1,meta19616__$1,___$2,fn1__$1,meta19619));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19618(self__.map_LT_,self__.f,self__.ch,self__.meta19616,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19616","meta19616",362243533,null)], null);
});

cljs.core.async.t_cljs$core$async19615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19615";

cljs.core.async.t_cljs$core$async19615.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19615");
});

cljs.core.async.__GT_t_cljs$core$async19615 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19615(map_LT___$1,f__$1,ch__$1,meta19616){
return (new cljs.core.async.t_cljs$core$async19615(map_LT___$1,f__$1,ch__$1,meta19616));
});

}

return (new cljs.core.async.t_cljs$core$async19615(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19624 = (function (map_GT_,f,ch,meta19625){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19625 = meta19625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19626,meta19625__$1){
var self__ = this;
var _19626__$1 = this;
return (new cljs.core.async.t_cljs$core$async19624(self__.map_GT_,self__.f,self__.ch,meta19625__$1));
});

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19626){
var self__ = this;
var _19626__$1 = this;
return self__.meta19625;
});

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19625","meta19625",-786615847,null)], null);
});

cljs.core.async.t_cljs$core$async19624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19624";

cljs.core.async.t_cljs$core$async19624.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19624");
});

cljs.core.async.__GT_t_cljs$core$async19624 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19624(map_GT___$1,f__$1,ch__$1,meta19625){
return (new cljs.core.async.t_cljs$core$async19624(map_GT___$1,f__$1,ch__$1,meta19625));
});

}

return (new cljs.core.async.t_cljs$core$async19624(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19630 = (function (filter_GT_,p,ch,meta19631){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19631 = meta19631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19632,meta19631__$1){
var self__ = this;
var _19632__$1 = this;
return (new cljs.core.async.t_cljs$core$async19630(self__.filter_GT_,self__.p,self__.ch,meta19631__$1));
});

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19632){
var self__ = this;
var _19632__$1 = this;
return self__.meta19631;
});

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19631","meta19631",-701634132,null)], null);
});

cljs.core.async.t_cljs$core$async19630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19630";

cljs.core.async.t_cljs$core$async19630.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19630");
});

cljs.core.async.__GT_t_cljs$core$async19630 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19630(filter_GT___$1,p__$1,ch__$1,meta19631){
return (new cljs.core.async.t_cljs$core$async19630(filter_GT___$1,p__$1,ch__$1,meta19631));
});

}

return (new cljs.core.async.t_cljs$core$async19630(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19633 = [];
var len__6152__auto___19677 = arguments.length;
var i__6153__auto___19678 = (0);
while(true){
if((i__6153__auto___19678 < len__6152__auto___19677)){
args19633.push((arguments[i__6153__auto___19678]));

var G__19679 = (i__6153__auto___19678 + (1));
i__6153__auto___19678 = G__19679;
continue;
} else {
}
break;
}

var G__19635 = args19633.length;
switch (G__19635) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19633.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___19681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___19681,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___19681,out){
return (function (state_19656){
var state_val_19657 = (state_19656[(1)]);
if((state_val_19657 === (7))){
var inst_19652 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19658_19682 = state_19656__$1;
(statearr_19658_19682[(2)] = inst_19652);

(statearr_19658_19682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (1))){
var state_19656__$1 = state_19656;
var statearr_19659_19683 = state_19656__$1;
(statearr_19659_19683[(2)] = null);

(statearr_19659_19683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (4))){
var inst_19638 = (state_19656[(7)]);
var inst_19638__$1 = (state_19656[(2)]);
var inst_19639 = (inst_19638__$1 == null);
var state_19656__$1 = (function (){var statearr_19660 = state_19656;
(statearr_19660[(7)] = inst_19638__$1);

return statearr_19660;
})();
if(cljs.core.truth_(inst_19639)){
var statearr_19661_19684 = state_19656__$1;
(statearr_19661_19684[(1)] = (5));

} else {
var statearr_19662_19685 = state_19656__$1;
(statearr_19662_19685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (6))){
var inst_19638 = (state_19656[(7)]);
var inst_19643 = p.call(null,inst_19638);
var state_19656__$1 = state_19656;
if(cljs.core.truth_(inst_19643)){
var statearr_19663_19686 = state_19656__$1;
(statearr_19663_19686[(1)] = (8));

} else {
var statearr_19664_19687 = state_19656__$1;
(statearr_19664_19687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (3))){
var inst_19654 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19656__$1,inst_19654);
} else {
if((state_val_19657 === (2))){
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19656__$1,(4),ch);
} else {
if((state_val_19657 === (11))){
var inst_19646 = (state_19656[(2)]);
var state_19656__$1 = state_19656;
var statearr_19665_19688 = state_19656__$1;
(statearr_19665_19688[(2)] = inst_19646);

(statearr_19665_19688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (9))){
var state_19656__$1 = state_19656;
var statearr_19666_19689 = state_19656__$1;
(statearr_19666_19689[(2)] = null);

(statearr_19666_19689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (5))){
var inst_19641 = cljs.core.async.close_BANG_.call(null,out);
var state_19656__$1 = state_19656;
var statearr_19667_19690 = state_19656__$1;
(statearr_19667_19690[(2)] = inst_19641);

(statearr_19667_19690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (10))){
var inst_19649 = (state_19656[(2)]);
var state_19656__$1 = (function (){var statearr_19668 = state_19656;
(statearr_19668[(8)] = inst_19649);

return statearr_19668;
})();
var statearr_19669_19691 = state_19656__$1;
(statearr_19669_19691[(2)] = null);

(statearr_19669_19691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19657 === (8))){
var inst_19638 = (state_19656[(7)]);
var state_19656__$1 = state_19656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19656__$1,(11),out,inst_19638);
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
});})(c__10732__auto___19681,out))
;
return ((function (switch__10667__auto__,c__10732__auto___19681,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19673 = [null,null,null,null,null,null,null,null,null];
(statearr_19673[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19673[(1)] = (1));

return statearr_19673;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19656){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19674){if((e19674 instanceof Object)){
var ex__10671__auto__ = e19674;
var statearr_19675_19692 = state_19656;
(statearr_19675_19692[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19693 = state_19656;
state_19656 = G__19693;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___19681,out))
})();
var state__10734__auto__ = (function (){var statearr_19676 = f__10733__auto__.call(null);
(statearr_19676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___19681);

return statearr_19676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___19681,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19694 = [];
var len__6152__auto___19697 = arguments.length;
var i__6153__auto___19698 = (0);
while(true){
if((i__6153__auto___19698 < len__6152__auto___19697)){
args19694.push((arguments[i__6153__auto___19698]));

var G__19699 = (i__6153__auto___19698 + (1));
i__6153__auto___19698 = G__19699;
continue;
} else {
}
break;
}

var G__19696 = args19694.length;
switch (G__19696) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19694.length)].join('')));

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
return (function (state_19866){
var state_val_19867 = (state_19866[(1)]);
if((state_val_19867 === (7))){
var inst_19862 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19868_19909 = state_19866__$1;
(statearr_19868_19909[(2)] = inst_19862);

(statearr_19868_19909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (20))){
var inst_19832 = (state_19866[(7)]);
var inst_19843 = (state_19866[(2)]);
var inst_19844 = cljs.core.next.call(null,inst_19832);
var inst_19818 = inst_19844;
var inst_19819 = null;
var inst_19820 = (0);
var inst_19821 = (0);
var state_19866__$1 = (function (){var statearr_19869 = state_19866;
(statearr_19869[(8)] = inst_19818);

(statearr_19869[(9)] = inst_19843);

(statearr_19869[(10)] = inst_19820);

(statearr_19869[(11)] = inst_19821);

(statearr_19869[(12)] = inst_19819);

return statearr_19869;
})();
var statearr_19870_19910 = state_19866__$1;
(statearr_19870_19910[(2)] = null);

(statearr_19870_19910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (1))){
var state_19866__$1 = state_19866;
var statearr_19871_19911 = state_19866__$1;
(statearr_19871_19911[(2)] = null);

(statearr_19871_19911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (4))){
var inst_19807 = (state_19866[(13)]);
var inst_19807__$1 = (state_19866[(2)]);
var inst_19808 = (inst_19807__$1 == null);
var state_19866__$1 = (function (){var statearr_19872 = state_19866;
(statearr_19872[(13)] = inst_19807__$1);

return statearr_19872;
})();
if(cljs.core.truth_(inst_19808)){
var statearr_19873_19912 = state_19866__$1;
(statearr_19873_19912[(1)] = (5));

} else {
var statearr_19874_19913 = state_19866__$1;
(statearr_19874_19913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (15))){
var state_19866__$1 = state_19866;
var statearr_19878_19914 = state_19866__$1;
(statearr_19878_19914[(2)] = null);

(statearr_19878_19914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (21))){
var state_19866__$1 = state_19866;
var statearr_19879_19915 = state_19866__$1;
(statearr_19879_19915[(2)] = null);

(statearr_19879_19915[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (13))){
var inst_19818 = (state_19866[(8)]);
var inst_19820 = (state_19866[(10)]);
var inst_19821 = (state_19866[(11)]);
var inst_19819 = (state_19866[(12)]);
var inst_19828 = (state_19866[(2)]);
var inst_19829 = (inst_19821 + (1));
var tmp19875 = inst_19818;
var tmp19876 = inst_19820;
var tmp19877 = inst_19819;
var inst_19818__$1 = tmp19875;
var inst_19819__$1 = tmp19877;
var inst_19820__$1 = tmp19876;
var inst_19821__$1 = inst_19829;
var state_19866__$1 = (function (){var statearr_19880 = state_19866;
(statearr_19880[(8)] = inst_19818__$1);

(statearr_19880[(10)] = inst_19820__$1);

(statearr_19880[(14)] = inst_19828);

(statearr_19880[(11)] = inst_19821__$1);

(statearr_19880[(12)] = inst_19819__$1);

return statearr_19880;
})();
var statearr_19881_19916 = state_19866__$1;
(statearr_19881_19916[(2)] = null);

(statearr_19881_19916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (22))){
var state_19866__$1 = state_19866;
var statearr_19882_19917 = state_19866__$1;
(statearr_19882_19917[(2)] = null);

(statearr_19882_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (6))){
var inst_19807 = (state_19866[(13)]);
var inst_19816 = f.call(null,inst_19807);
var inst_19817 = cljs.core.seq.call(null,inst_19816);
var inst_19818 = inst_19817;
var inst_19819 = null;
var inst_19820 = (0);
var inst_19821 = (0);
var state_19866__$1 = (function (){var statearr_19883 = state_19866;
(statearr_19883[(8)] = inst_19818);

(statearr_19883[(10)] = inst_19820);

(statearr_19883[(11)] = inst_19821);

(statearr_19883[(12)] = inst_19819);

return statearr_19883;
})();
var statearr_19884_19918 = state_19866__$1;
(statearr_19884_19918[(2)] = null);

(statearr_19884_19918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (17))){
var inst_19832 = (state_19866[(7)]);
var inst_19836 = cljs.core.chunk_first.call(null,inst_19832);
var inst_19837 = cljs.core.chunk_rest.call(null,inst_19832);
var inst_19838 = cljs.core.count.call(null,inst_19836);
var inst_19818 = inst_19837;
var inst_19819 = inst_19836;
var inst_19820 = inst_19838;
var inst_19821 = (0);
var state_19866__$1 = (function (){var statearr_19885 = state_19866;
(statearr_19885[(8)] = inst_19818);

(statearr_19885[(10)] = inst_19820);

(statearr_19885[(11)] = inst_19821);

(statearr_19885[(12)] = inst_19819);

return statearr_19885;
})();
var statearr_19886_19919 = state_19866__$1;
(statearr_19886_19919[(2)] = null);

(statearr_19886_19919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (3))){
var inst_19864 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19866__$1,inst_19864);
} else {
if((state_val_19867 === (12))){
var inst_19852 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19887_19920 = state_19866__$1;
(statearr_19887_19920[(2)] = inst_19852);

(statearr_19887_19920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (2))){
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19866__$1,(4),in$);
} else {
if((state_val_19867 === (23))){
var inst_19860 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19888_19921 = state_19866__$1;
(statearr_19888_19921[(2)] = inst_19860);

(statearr_19888_19921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (19))){
var inst_19847 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19889_19922 = state_19866__$1;
(statearr_19889_19922[(2)] = inst_19847);

(statearr_19889_19922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (11))){
var inst_19818 = (state_19866[(8)]);
var inst_19832 = (state_19866[(7)]);
var inst_19832__$1 = cljs.core.seq.call(null,inst_19818);
var state_19866__$1 = (function (){var statearr_19890 = state_19866;
(statearr_19890[(7)] = inst_19832__$1);

return statearr_19890;
})();
if(inst_19832__$1){
var statearr_19891_19923 = state_19866__$1;
(statearr_19891_19923[(1)] = (14));

} else {
var statearr_19892_19924 = state_19866__$1;
(statearr_19892_19924[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (9))){
var inst_19854 = (state_19866[(2)]);
var inst_19855 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19866__$1 = (function (){var statearr_19893 = state_19866;
(statearr_19893[(15)] = inst_19854);

return statearr_19893;
})();
if(cljs.core.truth_(inst_19855)){
var statearr_19894_19925 = state_19866__$1;
(statearr_19894_19925[(1)] = (21));

} else {
var statearr_19895_19926 = state_19866__$1;
(statearr_19895_19926[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (5))){
var inst_19810 = cljs.core.async.close_BANG_.call(null,out);
var state_19866__$1 = state_19866;
var statearr_19896_19927 = state_19866__$1;
(statearr_19896_19927[(2)] = inst_19810);

(statearr_19896_19927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (14))){
var inst_19832 = (state_19866[(7)]);
var inst_19834 = cljs.core.chunked_seq_QMARK_.call(null,inst_19832);
var state_19866__$1 = state_19866;
if(inst_19834){
var statearr_19897_19928 = state_19866__$1;
(statearr_19897_19928[(1)] = (17));

} else {
var statearr_19898_19929 = state_19866__$1;
(statearr_19898_19929[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (16))){
var inst_19850 = (state_19866[(2)]);
var state_19866__$1 = state_19866;
var statearr_19899_19930 = state_19866__$1;
(statearr_19899_19930[(2)] = inst_19850);

(statearr_19899_19930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19867 === (10))){
var inst_19821 = (state_19866[(11)]);
var inst_19819 = (state_19866[(12)]);
var inst_19826 = cljs.core._nth.call(null,inst_19819,inst_19821);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19866__$1,(13),out,inst_19826);
} else {
if((state_val_19867 === (18))){
var inst_19832 = (state_19866[(7)]);
var inst_19841 = cljs.core.first.call(null,inst_19832);
var state_19866__$1 = state_19866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19866__$1,(20),out,inst_19841);
} else {
if((state_val_19867 === (8))){
var inst_19820 = (state_19866[(10)]);
var inst_19821 = (state_19866[(11)]);
var inst_19823 = (inst_19821 < inst_19820);
var inst_19824 = inst_19823;
var state_19866__$1 = state_19866;
if(cljs.core.truth_(inst_19824)){
var statearr_19900_19931 = state_19866__$1;
(statearr_19900_19931[(1)] = (10));

} else {
var statearr_19901_19932 = state_19866__$1;
(statearr_19901_19932[(1)] = (11));

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
var statearr_19905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19905[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__);

(statearr_19905[(1)] = (1));

return statearr_19905;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1 = (function (state_19866){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19906){if((e19906 instanceof Object)){
var ex__10671__auto__ = e19906;
var statearr_19907_19933 = state_19866;
(statearr_19907_19933[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19934 = state_19866;
state_19866 = G__19934;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__ = function(state_19866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1.call(this,state_19866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10668__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto__))
})();
var state__10734__auto__ = (function (){var statearr_19908 = f__10733__auto__.call(null);
(statearr_19908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto__);

return statearr_19908;
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
var args19935 = [];
var len__6152__auto___19938 = arguments.length;
var i__6153__auto___19939 = (0);
while(true){
if((i__6153__auto___19939 < len__6152__auto___19938)){
args19935.push((arguments[i__6153__auto___19939]));

var G__19940 = (i__6153__auto___19939 + (1));
i__6153__auto___19939 = G__19940;
continue;
} else {
}
break;
}

var G__19937 = args19935.length;
switch (G__19937) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19935.length)].join('')));

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
var args19942 = [];
var len__6152__auto___19945 = arguments.length;
var i__6153__auto___19946 = (0);
while(true){
if((i__6153__auto___19946 < len__6152__auto___19945)){
args19942.push((arguments[i__6153__auto___19946]));

var G__19947 = (i__6153__auto___19946 + (1));
i__6153__auto___19946 = G__19947;
continue;
} else {
}
break;
}

var G__19944 = args19942.length;
switch (G__19944) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19942.length)].join('')));

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
var args19949 = [];
var len__6152__auto___20000 = arguments.length;
var i__6153__auto___20001 = (0);
while(true){
if((i__6153__auto___20001 < len__6152__auto___20000)){
args19949.push((arguments[i__6153__auto___20001]));

var G__20002 = (i__6153__auto___20001 + (1));
i__6153__auto___20001 = G__20002;
continue;
} else {
}
break;
}

var G__19951 = args19949.length;
switch (G__19951) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19949.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20004,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20004,out){
return (function (state_19975){
var state_val_19976 = (state_19975[(1)]);
if((state_val_19976 === (7))){
var inst_19970 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
var statearr_19977_20005 = state_19975__$1;
(statearr_19977_20005[(2)] = inst_19970);

(statearr_19977_20005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (1))){
var inst_19952 = null;
var state_19975__$1 = (function (){var statearr_19978 = state_19975;
(statearr_19978[(7)] = inst_19952);

return statearr_19978;
})();
var statearr_19979_20006 = state_19975__$1;
(statearr_19979_20006[(2)] = null);

(statearr_19979_20006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (4))){
var inst_19955 = (state_19975[(8)]);
var inst_19955__$1 = (state_19975[(2)]);
var inst_19956 = (inst_19955__$1 == null);
var inst_19957 = cljs.core.not.call(null,inst_19956);
var state_19975__$1 = (function (){var statearr_19980 = state_19975;
(statearr_19980[(8)] = inst_19955__$1);

return statearr_19980;
})();
if(inst_19957){
var statearr_19981_20007 = state_19975__$1;
(statearr_19981_20007[(1)] = (5));

} else {
var statearr_19982_20008 = state_19975__$1;
(statearr_19982_20008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (6))){
var state_19975__$1 = state_19975;
var statearr_19983_20009 = state_19975__$1;
(statearr_19983_20009[(2)] = null);

(statearr_19983_20009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (3))){
var inst_19972 = (state_19975[(2)]);
var inst_19973 = cljs.core.async.close_BANG_.call(null,out);
var state_19975__$1 = (function (){var statearr_19984 = state_19975;
(statearr_19984[(9)] = inst_19972);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19975__$1,inst_19973);
} else {
if((state_val_19976 === (2))){
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19975__$1,(4),ch);
} else {
if((state_val_19976 === (11))){
var inst_19955 = (state_19975[(8)]);
var inst_19964 = (state_19975[(2)]);
var inst_19952 = inst_19955;
var state_19975__$1 = (function (){var statearr_19985 = state_19975;
(statearr_19985[(7)] = inst_19952);

(statearr_19985[(10)] = inst_19964);

return statearr_19985;
})();
var statearr_19986_20010 = state_19975__$1;
(statearr_19986_20010[(2)] = null);

(statearr_19986_20010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (9))){
var inst_19955 = (state_19975[(8)]);
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19975__$1,(11),out,inst_19955);
} else {
if((state_val_19976 === (5))){
var inst_19952 = (state_19975[(7)]);
var inst_19955 = (state_19975[(8)]);
var inst_19959 = cljs.core._EQ_.call(null,inst_19955,inst_19952);
var state_19975__$1 = state_19975;
if(inst_19959){
var statearr_19988_20011 = state_19975__$1;
(statearr_19988_20011[(1)] = (8));

} else {
var statearr_19989_20012 = state_19975__$1;
(statearr_19989_20012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (10))){
var inst_19967 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
var statearr_19990_20013 = state_19975__$1;
(statearr_19990_20013[(2)] = inst_19967);

(statearr_19990_20013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (8))){
var inst_19952 = (state_19975[(7)]);
var tmp19987 = inst_19952;
var inst_19952__$1 = tmp19987;
var state_19975__$1 = (function (){var statearr_19991 = state_19975;
(statearr_19991[(7)] = inst_19952__$1);

return statearr_19991;
})();
var statearr_19992_20014 = state_19975__$1;
(statearr_19992_20014[(2)] = null);

(statearr_19992_20014[(1)] = (2));


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
});})(c__10732__auto___20004,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20004,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_19996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19996[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_19996[(1)] = (1));

return statearr_19996;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_19975){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_19975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e19997){if((e19997 instanceof Object)){
var ex__10671__auto__ = e19997;
var statearr_19998_20015 = state_19975;
(statearr_19998_20015[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20016 = state_19975;
state_19975 = G__20016;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_19975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_19975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20004,out))
})();
var state__10734__auto__ = (function (){var statearr_19999 = f__10733__auto__.call(null);
(statearr_19999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20004);

return statearr_19999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20004,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args20017 = [];
var len__6152__auto___20087 = arguments.length;
var i__6153__auto___20088 = (0);
while(true){
if((i__6153__auto___20088 < len__6152__auto___20087)){
args20017.push((arguments[i__6153__auto___20088]));

var G__20089 = (i__6153__auto___20088 + (1));
i__6153__auto___20088 = G__20089;
continue;
} else {
}
break;
}

var G__20019 = args20017.length;
switch (G__20019) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20017.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20091,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20091,out){
return (function (state_20057){
var state_val_20058 = (state_20057[(1)]);
if((state_val_20058 === (7))){
var inst_20053 = (state_20057[(2)]);
var state_20057__$1 = state_20057;
var statearr_20059_20092 = state_20057__$1;
(statearr_20059_20092[(2)] = inst_20053);

(statearr_20059_20092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (1))){
var inst_20020 = (new Array(n));
var inst_20021 = inst_20020;
var inst_20022 = (0);
var state_20057__$1 = (function (){var statearr_20060 = state_20057;
(statearr_20060[(7)] = inst_20021);

(statearr_20060[(8)] = inst_20022);

return statearr_20060;
})();
var statearr_20061_20093 = state_20057__$1;
(statearr_20061_20093[(2)] = null);

(statearr_20061_20093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (4))){
var inst_20025 = (state_20057[(9)]);
var inst_20025__$1 = (state_20057[(2)]);
var inst_20026 = (inst_20025__$1 == null);
var inst_20027 = cljs.core.not.call(null,inst_20026);
var state_20057__$1 = (function (){var statearr_20062 = state_20057;
(statearr_20062[(9)] = inst_20025__$1);

return statearr_20062;
})();
if(inst_20027){
var statearr_20063_20094 = state_20057__$1;
(statearr_20063_20094[(1)] = (5));

} else {
var statearr_20064_20095 = state_20057__$1;
(statearr_20064_20095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (15))){
var inst_20047 = (state_20057[(2)]);
var state_20057__$1 = state_20057;
var statearr_20065_20096 = state_20057__$1;
(statearr_20065_20096[(2)] = inst_20047);

(statearr_20065_20096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (13))){
var state_20057__$1 = state_20057;
var statearr_20066_20097 = state_20057__$1;
(statearr_20066_20097[(2)] = null);

(statearr_20066_20097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (6))){
var inst_20022 = (state_20057[(8)]);
var inst_20043 = (inst_20022 > (0));
var state_20057__$1 = state_20057;
if(cljs.core.truth_(inst_20043)){
var statearr_20067_20098 = state_20057__$1;
(statearr_20067_20098[(1)] = (12));

} else {
var statearr_20068_20099 = state_20057__$1;
(statearr_20068_20099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (3))){
var inst_20055 = (state_20057[(2)]);
var state_20057__$1 = state_20057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20057__$1,inst_20055);
} else {
if((state_val_20058 === (12))){
var inst_20021 = (state_20057[(7)]);
var inst_20045 = cljs.core.vec.call(null,inst_20021);
var state_20057__$1 = state_20057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20057__$1,(15),out,inst_20045);
} else {
if((state_val_20058 === (2))){
var state_20057__$1 = state_20057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20057__$1,(4),ch);
} else {
if((state_val_20058 === (11))){
var inst_20037 = (state_20057[(2)]);
var inst_20038 = (new Array(n));
var inst_20021 = inst_20038;
var inst_20022 = (0);
var state_20057__$1 = (function (){var statearr_20069 = state_20057;
(statearr_20069[(10)] = inst_20037);

(statearr_20069[(7)] = inst_20021);

(statearr_20069[(8)] = inst_20022);

return statearr_20069;
})();
var statearr_20070_20100 = state_20057__$1;
(statearr_20070_20100[(2)] = null);

(statearr_20070_20100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (9))){
var inst_20021 = (state_20057[(7)]);
var inst_20035 = cljs.core.vec.call(null,inst_20021);
var state_20057__$1 = state_20057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20057__$1,(11),out,inst_20035);
} else {
if((state_val_20058 === (5))){
var inst_20025 = (state_20057[(9)]);
var inst_20021 = (state_20057[(7)]);
var inst_20030 = (state_20057[(11)]);
var inst_20022 = (state_20057[(8)]);
var inst_20029 = (inst_20021[inst_20022] = inst_20025);
var inst_20030__$1 = (inst_20022 + (1));
var inst_20031 = (inst_20030__$1 < n);
var state_20057__$1 = (function (){var statearr_20071 = state_20057;
(statearr_20071[(12)] = inst_20029);

(statearr_20071[(11)] = inst_20030__$1);

return statearr_20071;
})();
if(cljs.core.truth_(inst_20031)){
var statearr_20072_20101 = state_20057__$1;
(statearr_20072_20101[(1)] = (8));

} else {
var statearr_20073_20102 = state_20057__$1;
(statearr_20073_20102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (14))){
var inst_20050 = (state_20057[(2)]);
var inst_20051 = cljs.core.async.close_BANG_.call(null,out);
var state_20057__$1 = (function (){var statearr_20075 = state_20057;
(statearr_20075[(13)] = inst_20050);

return statearr_20075;
})();
var statearr_20076_20103 = state_20057__$1;
(statearr_20076_20103[(2)] = inst_20051);

(statearr_20076_20103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (10))){
var inst_20041 = (state_20057[(2)]);
var state_20057__$1 = state_20057;
var statearr_20077_20104 = state_20057__$1;
(statearr_20077_20104[(2)] = inst_20041);

(statearr_20077_20104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20058 === (8))){
var inst_20021 = (state_20057[(7)]);
var inst_20030 = (state_20057[(11)]);
var tmp20074 = inst_20021;
var inst_20021__$1 = tmp20074;
var inst_20022 = inst_20030;
var state_20057__$1 = (function (){var statearr_20078 = state_20057;
(statearr_20078[(7)] = inst_20021__$1);

(statearr_20078[(8)] = inst_20022);

return statearr_20078;
})();
var statearr_20079_20105 = state_20057__$1;
(statearr_20079_20105[(2)] = null);

(statearr_20079_20105[(1)] = (2));


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
});})(c__10732__auto___20091,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20091,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_20083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20083[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_20083[(1)] = (1));

return statearr_20083;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_20057){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_20057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e20084){if((e20084 instanceof Object)){
var ex__10671__auto__ = e20084;
var statearr_20085_20106 = state_20057;
(statearr_20085_20106[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20107 = state_20057;
state_20057 = G__20107;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_20057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_20057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20091,out))
})();
var state__10734__auto__ = (function (){var statearr_20086 = f__10733__auto__.call(null);
(statearr_20086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20091);

return statearr_20086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20091,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20108 = [];
var len__6152__auto___20182 = arguments.length;
var i__6153__auto___20183 = (0);
while(true){
if((i__6153__auto___20183 < len__6152__auto___20182)){
args20108.push((arguments[i__6153__auto___20183]));

var G__20184 = (i__6153__auto___20183 + (1));
i__6153__auto___20183 = G__20184;
continue;
} else {
}
break;
}

var G__20110 = args20108.length;
switch (G__20110) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20108.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10732__auto___20186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10732__auto___20186,out){
return (function (){
var f__10733__auto__ = (function (){var switch__10667__auto__ = ((function (c__10732__auto___20186,out){
return (function (state_20152){
var state_val_20153 = (state_20152[(1)]);
if((state_val_20153 === (7))){
var inst_20148 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
var statearr_20154_20187 = state_20152__$1;
(statearr_20154_20187[(2)] = inst_20148);

(statearr_20154_20187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (1))){
var inst_20111 = [];
var inst_20112 = inst_20111;
var inst_20113 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20152__$1 = (function (){var statearr_20155 = state_20152;
(statearr_20155[(7)] = inst_20112);

(statearr_20155[(8)] = inst_20113);

return statearr_20155;
})();
var statearr_20156_20188 = state_20152__$1;
(statearr_20156_20188[(2)] = null);

(statearr_20156_20188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (4))){
var inst_20116 = (state_20152[(9)]);
var inst_20116__$1 = (state_20152[(2)]);
var inst_20117 = (inst_20116__$1 == null);
var inst_20118 = cljs.core.not.call(null,inst_20117);
var state_20152__$1 = (function (){var statearr_20157 = state_20152;
(statearr_20157[(9)] = inst_20116__$1);

return statearr_20157;
})();
if(inst_20118){
var statearr_20158_20189 = state_20152__$1;
(statearr_20158_20189[(1)] = (5));

} else {
var statearr_20159_20190 = state_20152__$1;
(statearr_20159_20190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (15))){
var inst_20142 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
var statearr_20160_20191 = state_20152__$1;
(statearr_20160_20191[(2)] = inst_20142);

(statearr_20160_20191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (13))){
var state_20152__$1 = state_20152;
var statearr_20161_20192 = state_20152__$1;
(statearr_20161_20192[(2)] = null);

(statearr_20161_20192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (6))){
var inst_20112 = (state_20152[(7)]);
var inst_20137 = inst_20112.length;
var inst_20138 = (inst_20137 > (0));
var state_20152__$1 = state_20152;
if(cljs.core.truth_(inst_20138)){
var statearr_20162_20193 = state_20152__$1;
(statearr_20162_20193[(1)] = (12));

} else {
var statearr_20163_20194 = state_20152__$1;
(statearr_20163_20194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (3))){
var inst_20150 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20152__$1,inst_20150);
} else {
if((state_val_20153 === (12))){
var inst_20112 = (state_20152[(7)]);
var inst_20140 = cljs.core.vec.call(null,inst_20112);
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20152__$1,(15),out,inst_20140);
} else {
if((state_val_20153 === (2))){
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20152__$1,(4),ch);
} else {
if((state_val_20153 === (11))){
var inst_20120 = (state_20152[(10)]);
var inst_20116 = (state_20152[(9)]);
var inst_20130 = (state_20152[(2)]);
var inst_20131 = [];
var inst_20132 = inst_20131.push(inst_20116);
var inst_20112 = inst_20131;
var inst_20113 = inst_20120;
var state_20152__$1 = (function (){var statearr_20164 = state_20152;
(statearr_20164[(7)] = inst_20112);

(statearr_20164[(8)] = inst_20113);

(statearr_20164[(11)] = inst_20132);

(statearr_20164[(12)] = inst_20130);

return statearr_20164;
})();
var statearr_20165_20195 = state_20152__$1;
(statearr_20165_20195[(2)] = null);

(statearr_20165_20195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (9))){
var inst_20112 = (state_20152[(7)]);
var inst_20128 = cljs.core.vec.call(null,inst_20112);
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20152__$1,(11),out,inst_20128);
} else {
if((state_val_20153 === (5))){
var inst_20113 = (state_20152[(8)]);
var inst_20120 = (state_20152[(10)]);
var inst_20116 = (state_20152[(9)]);
var inst_20120__$1 = f.call(null,inst_20116);
var inst_20121 = cljs.core._EQ_.call(null,inst_20120__$1,inst_20113);
var inst_20122 = cljs.core.keyword_identical_QMARK_.call(null,inst_20113,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20123 = (inst_20121) || (inst_20122);
var state_20152__$1 = (function (){var statearr_20166 = state_20152;
(statearr_20166[(10)] = inst_20120__$1);

return statearr_20166;
})();
if(cljs.core.truth_(inst_20123)){
var statearr_20167_20196 = state_20152__$1;
(statearr_20167_20196[(1)] = (8));

} else {
var statearr_20168_20197 = state_20152__$1;
(statearr_20168_20197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (14))){
var inst_20145 = (state_20152[(2)]);
var inst_20146 = cljs.core.async.close_BANG_.call(null,out);
var state_20152__$1 = (function (){var statearr_20170 = state_20152;
(statearr_20170[(13)] = inst_20145);

return statearr_20170;
})();
var statearr_20171_20198 = state_20152__$1;
(statearr_20171_20198[(2)] = inst_20146);

(statearr_20171_20198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (10))){
var inst_20135 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
var statearr_20172_20199 = state_20152__$1;
(statearr_20172_20199[(2)] = inst_20135);

(statearr_20172_20199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (8))){
var inst_20112 = (state_20152[(7)]);
var inst_20120 = (state_20152[(10)]);
var inst_20116 = (state_20152[(9)]);
var inst_20125 = inst_20112.push(inst_20116);
var tmp20169 = inst_20112;
var inst_20112__$1 = tmp20169;
var inst_20113 = inst_20120;
var state_20152__$1 = (function (){var statearr_20173 = state_20152;
(statearr_20173[(7)] = inst_20112__$1);

(statearr_20173[(8)] = inst_20113);

(statearr_20173[(14)] = inst_20125);

return statearr_20173;
})();
var statearr_20174_20200 = state_20152__$1;
(statearr_20174_20200[(2)] = null);

(statearr_20174_20200[(1)] = (2));


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
});})(c__10732__auto___20186,out))
;
return ((function (switch__10667__auto__,c__10732__auto___20186,out){
return (function() {
var cljs$core$async$state_machine__10668__auto__ = null;
var cljs$core$async$state_machine__10668__auto____0 = (function (){
var statearr_20178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20178[(0)] = cljs$core$async$state_machine__10668__auto__);

(statearr_20178[(1)] = (1));

return statearr_20178;
});
var cljs$core$async$state_machine__10668__auto____1 = (function (state_20152){
while(true){
var ret_value__10669__auto__ = (function (){try{while(true){
var result__10670__auto__ = switch__10667__auto__.call(null,state_20152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10670__auto__;
}
break;
}
}catch (e20179){if((e20179 instanceof Object)){
var ex__10671__auto__ = e20179;
var statearr_20180_20201 = state_20152;
(statearr_20180_20201[(5)] = ex__10671__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20202 = state_20152;
state_20152 = G__20202;
continue;
} else {
return ret_value__10669__auto__;
}
break;
}
});
cljs$core$async$state_machine__10668__auto__ = function(state_20152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10668__auto____1.call(this,state_20152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10668__auto____0;
cljs$core$async$state_machine__10668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10668__auto____1;
return cljs$core$async$state_machine__10668__auto__;
})()
;})(switch__10667__auto__,c__10732__auto___20186,out))
})();
var state__10734__auto__ = (function (){var statearr_20181 = f__10733__auto__.call(null);
(statearr_20181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10732__auto___20186);

return statearr_20181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10734__auto__);
});})(c__10732__auto___20186,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map