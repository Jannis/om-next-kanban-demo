// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async11742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11742 = (function (fn_handler,f,meta11743){
this.fn_handler = fn_handler;
this.f = f;
this.meta11743 = meta11743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11744,meta11743__$1){
var self__ = this;
var _11744__$1 = this;
return (new cljs.core.async.t_cljs$core$async11742(self__.fn_handler,self__.f,meta11743__$1));
});

cljs.core.async.t_cljs$core$async11742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11744){
var self__ = this;
var _11744__$1 = this;
return self__.meta11743;
});

cljs.core.async.t_cljs$core$async11742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11743","meta11743",1990722176,null)], null);
});

cljs.core.async.t_cljs$core$async11742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11742";

cljs.core.async.t_cljs$core$async11742.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async11742");
});

cljs.core.async.__GT_t_cljs$core$async11742 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11742(fn_handler__$1,f__$1,meta11743){
return (new cljs.core.async.t_cljs$core$async11742(fn_handler__$1,f__$1,meta11743));
});

}

return (new cljs.core.async.t_cljs$core$async11742(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args11747 = [];
var len__6044__auto___11750 = arguments.length;
var i__6045__auto___11751 = (0);
while(true){
if((i__6045__auto___11751 < len__6044__auto___11750)){
args11747.push((arguments[i__6045__auto___11751]));

var G__11752 = (i__6045__auto___11751 + (1));
i__6045__auto___11751 = G__11752;
continue;
} else {
}
break;
}

var G__11749 = args11747.length;
switch (G__11749) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11747.length)].join('')));

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
var args11754 = [];
var len__6044__auto___11757 = arguments.length;
var i__6045__auto___11758 = (0);
while(true){
if((i__6045__auto___11758 < len__6044__auto___11757)){
args11754.push((arguments[i__6045__auto___11758]));

var G__11759 = (i__6045__auto___11758 + (1));
i__6045__auto___11758 = G__11759;
continue;
} else {
}
break;
}

var G__11756 = args11754.length;
switch (G__11756) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11754.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11761 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11761);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11761,ret){
return (function (){
return fn1.call(null,val_11761);
});})(val_11761,ret))
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
var args11762 = [];
var len__6044__auto___11765 = arguments.length;
var i__6045__auto___11766 = (0);
while(true){
if((i__6045__auto___11766 < len__6044__auto___11765)){
args11762.push((arguments[i__6045__auto___11766]));

var G__11767 = (i__6045__auto___11766 + (1));
i__6045__auto___11766 = G__11767;
continue;
} else {
}
break;
}

var G__11764 = args11762.length;
switch (G__11764) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11762.length)].join('')));

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
var n__5889__auto___11769 = n;
var x_11770 = (0);
while(true){
if((x_11770 < n__5889__auto___11769)){
(a[x_11770] = (0));

var G__11771 = (x_11770 + (1));
x_11770 = G__11771;
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

var G__11772 = (i + (1));
i = G__11772;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11776 = (function (alt_flag,flag,meta11777){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11777 = meta11777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11778,meta11777__$1){
var self__ = this;
var _11778__$1 = this;
return (new cljs.core.async.t_cljs$core$async11776(self__.alt_flag,self__.flag,meta11777__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11778){
var self__ = this;
var _11778__$1 = this;
return self__.meta11777;
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11777","meta11777",-1403954279,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11776";

cljs.core.async.t_cljs$core$async11776.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async11776");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11776 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11776(alt_flag__$1,flag__$1,meta11777){
return (new cljs.core.async.t_cljs$core$async11776(alt_flag__$1,flag__$1,meta11777));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11776(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11782 = (function (alt_handler,flag,cb,meta11783){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11783 = meta11783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11784,meta11783__$1){
var self__ = this;
var _11784__$1 = this;
return (new cljs.core.async.t_cljs$core$async11782(self__.alt_handler,self__.flag,self__.cb,meta11783__$1));
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11784){
var self__ = this;
var _11784__$1 = this;
return self__.meta11783;
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11783","meta11783",-84704816,null)], null);
});

cljs.core.async.t_cljs$core$async11782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11782";

cljs.core.async.t_cljs$core$async11782.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async11782");
});

cljs.core.async.__GT_t_cljs$core$async11782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11782(alt_handler__$1,flag__$1,cb__$1,meta11783){
return (new cljs.core.async.t_cljs$core$async11782(alt_handler__$1,flag__$1,cb__$1,meta11783));
});

}

return (new cljs.core.async.t_cljs$core$async11782(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11785_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11786_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4986__auto__ = wport;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11787 = (i + (1));
i = G__11787;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4986__auto__ = ret;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4974__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4974__auto__;
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
var args__6051__auto__ = [];
var len__6044__auto___11793 = arguments.length;
var i__6045__auto___11794 = (0);
while(true){
if((i__6045__auto___11794 < len__6044__auto___11793)){
args__6051__auto__.push((arguments[i__6045__auto___11794]));

var G__11795 = (i__6045__auto___11794 + (1));
i__6045__auto___11794 = G__11795;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11790){
var map__11791 = p__11790;
var map__11791__$1 = ((((!((map__11791 == null)))?((((map__11791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11791):map__11791);
var opts = map__11791__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11788){
var G__11789 = cljs.core.first.call(null,seq11788);
var seq11788__$1 = cljs.core.next.call(null,seq11788);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11789,seq11788__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11796 = [];
var len__6044__auto___11846 = arguments.length;
var i__6045__auto___11847 = (0);
while(true){
if((i__6045__auto___11847 < len__6044__auto___11846)){
args11796.push((arguments[i__6045__auto___11847]));

var G__11848 = (i__6045__auto___11847 + (1));
i__6045__auto___11847 = G__11848;
continue;
} else {
}
break;
}

var G__11798 = args11796.length;
switch (G__11798) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11796.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11694__auto___11850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___11850){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___11850){
return (function (state_11822){
var state_val_11823 = (state_11822[(1)]);
if((state_val_11823 === (7))){
var inst_11818 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11824_11851 = state_11822__$1;
(statearr_11824_11851[(2)] = inst_11818);

(statearr_11824_11851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (1))){
var state_11822__$1 = state_11822;
var statearr_11825_11852 = state_11822__$1;
(statearr_11825_11852[(2)] = null);

(statearr_11825_11852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (4))){
var inst_11801 = (state_11822[(7)]);
var inst_11801__$1 = (state_11822[(2)]);
var inst_11802 = (inst_11801__$1 == null);
var state_11822__$1 = (function (){var statearr_11826 = state_11822;
(statearr_11826[(7)] = inst_11801__$1);

return statearr_11826;
})();
if(cljs.core.truth_(inst_11802)){
var statearr_11827_11853 = state_11822__$1;
(statearr_11827_11853[(1)] = (5));

} else {
var statearr_11828_11854 = state_11822__$1;
(statearr_11828_11854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (13))){
var state_11822__$1 = state_11822;
var statearr_11829_11855 = state_11822__$1;
(statearr_11829_11855[(2)] = null);

(statearr_11829_11855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (6))){
var inst_11801 = (state_11822[(7)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11822__$1,(11),to,inst_11801);
} else {
if((state_val_11823 === (3))){
var inst_11820 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11822__$1,inst_11820);
} else {
if((state_val_11823 === (12))){
var state_11822__$1 = state_11822;
var statearr_11830_11856 = state_11822__$1;
(statearr_11830_11856[(2)] = null);

(statearr_11830_11856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (2))){
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11822__$1,(4),from);
} else {
if((state_val_11823 === (11))){
var inst_11811 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
if(cljs.core.truth_(inst_11811)){
var statearr_11831_11857 = state_11822__$1;
(statearr_11831_11857[(1)] = (12));

} else {
var statearr_11832_11858 = state_11822__$1;
(statearr_11832_11858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (9))){
var state_11822__$1 = state_11822;
var statearr_11833_11859 = state_11822__$1;
(statearr_11833_11859[(2)] = null);

(statearr_11833_11859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (5))){
var state_11822__$1 = state_11822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11834_11860 = state_11822__$1;
(statearr_11834_11860[(1)] = (8));

} else {
var statearr_11835_11861 = state_11822__$1;
(statearr_11835_11861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (14))){
var inst_11816 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11836_11862 = state_11822__$1;
(statearr_11836_11862[(2)] = inst_11816);

(statearr_11836_11862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (10))){
var inst_11808 = (state_11822[(2)]);
var state_11822__$1 = state_11822;
var statearr_11837_11863 = state_11822__$1;
(statearr_11837_11863[(2)] = inst_11808);

(statearr_11837_11863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11823 === (8))){
var inst_11805 = cljs.core.async.close_BANG_.call(null,to);
var state_11822__$1 = state_11822;
var statearr_11838_11864 = state_11822__$1;
(statearr_11838_11864[(2)] = inst_11805);

(statearr_11838_11864[(1)] = (10));


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
});})(c__11694__auto___11850))
;
return ((function (switch__11582__auto__,c__11694__auto___11850){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_11842 = [null,null,null,null,null,null,null,null];
(statearr_11842[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_11842[(1)] = (1));

return statearr_11842;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_11822){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_11822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e11843){if((e11843 instanceof Object)){
var ex__11586__auto__ = e11843;
var statearr_11844_11865 = state_11822;
(statearr_11844_11865[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11866 = state_11822;
state_11822 = G__11866;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_11822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_11822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___11850))
})();
var state__11696__auto__ = (function (){var statearr_11845 = f__11695__auto__.call(null);
(statearr_11845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___11850);

return statearr_11845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___11850))
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
return (function (p__12050){
var vec__12051 = p__12050;
var v = cljs.core.nth.call(null,vec__12051,(0),null);
var p = cljs.core.nth.call(null,vec__12051,(1),null);
var job = vec__12051;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11694__auto___12233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results){
return (function (state_12056){
var state_val_12057 = (state_12056[(1)]);
if((state_val_12057 === (1))){
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12056__$1,(2),res,v);
} else {
if((state_val_12057 === (2))){
var inst_12053 = (state_12056[(2)]);
var inst_12054 = cljs.core.async.close_BANG_.call(null,res);
var state_12056__$1 = (function (){var statearr_12058 = state_12056;
(statearr_12058[(7)] = inst_12053);

return statearr_12058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else {
return null;
}
}
});})(c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results))
;
return ((function (switch__11582__auto__,c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_12062 = [null,null,null,null,null,null,null,null];
(statearr_12062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__);

(statearr_12062[(1)] = (1));

return statearr_12062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1 = (function (state_12056){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12063){if((e12063 instanceof Object)){
var ex__11586__auto__ = e12063;
var statearr_12064_12234 = state_12056;
(statearr_12064_12234[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12235 = state_12056;
state_12056 = G__12235;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results))
})();
var state__11696__auto__ = (function (){var statearr_12065 = f__11695__auto__.call(null);
(statearr_12065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12233);

return statearr_12065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___12233,res,vec__12051,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12066){
var vec__12067 = p__12066;
var v = cljs.core.nth.call(null,vec__12067,(0),null);
var p = cljs.core.nth.call(null,vec__12067,(1),null);
var job = vec__12067;
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
var n__5889__auto___12236 = n;
var __12237 = (0);
while(true){
if((__12237 < n__5889__auto___12236)){
var G__12068_12238 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12068_12238) {
case "compute":
var c__11694__auto___12240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12237,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (__12237,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function (state_12081){
var state_val_12082 = (state_12081[(1)]);
if((state_val_12082 === (1))){
var state_12081__$1 = state_12081;
var statearr_12083_12241 = state_12081__$1;
(statearr_12083_12241[(2)] = null);

(statearr_12083_12241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12082 === (2))){
var state_12081__$1 = state_12081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12081__$1,(4),jobs);
} else {
if((state_val_12082 === (3))){
var inst_12079 = (state_12081[(2)]);
var state_12081__$1 = state_12081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12081__$1,inst_12079);
} else {
if((state_val_12082 === (4))){
var inst_12071 = (state_12081[(2)]);
var inst_12072 = process.call(null,inst_12071);
var state_12081__$1 = state_12081;
if(cljs.core.truth_(inst_12072)){
var statearr_12084_12242 = state_12081__$1;
(statearr_12084_12242[(1)] = (5));

} else {
var statearr_12085_12243 = state_12081__$1;
(statearr_12085_12243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12082 === (5))){
var state_12081__$1 = state_12081;
var statearr_12086_12244 = state_12081__$1;
(statearr_12086_12244[(2)] = null);

(statearr_12086_12244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12082 === (6))){
var state_12081__$1 = state_12081;
var statearr_12087_12245 = state_12081__$1;
(statearr_12087_12245[(2)] = null);

(statearr_12087_12245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12082 === (7))){
var inst_12077 = (state_12081[(2)]);
var state_12081__$1 = state_12081;
var statearr_12088_12246 = state_12081__$1;
(statearr_12088_12246[(2)] = inst_12077);

(statearr_12088_12246[(1)] = (3));


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
});})(__12237,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
;
return ((function (__12237,switch__11582__auto__,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_12092 = [null,null,null,null,null,null,null];
(statearr_12092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__);

(statearr_12092[(1)] = (1));

return statearr_12092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1 = (function (state_12081){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object)){
var ex__11586__auto__ = e12093;
var statearr_12094_12247 = state_12081;
(statearr_12094_12247[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12248 = state_12081;
state_12081 = G__12248;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = function(state_12081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1.call(this,state_12081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__;
})()
;})(__12237,switch__11582__auto__,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
})();
var state__11696__auto__ = (function (){var statearr_12095 = f__11695__auto__.call(null);
(statearr_12095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12240);

return statearr_12095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(__12237,c__11694__auto___12240,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
);


break;
case "async":
var c__11694__auto___12249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12237,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (__12237,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function (state_12108){
var state_val_12109 = (state_12108[(1)]);
if((state_val_12109 === (1))){
var state_12108__$1 = state_12108;
var statearr_12110_12250 = state_12108__$1;
(statearr_12110_12250[(2)] = null);

(statearr_12110_12250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (2))){
var state_12108__$1 = state_12108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12108__$1,(4),jobs);
} else {
if((state_val_12109 === (3))){
var inst_12106 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12108__$1,inst_12106);
} else {
if((state_val_12109 === (4))){
var inst_12098 = (state_12108[(2)]);
var inst_12099 = async.call(null,inst_12098);
var state_12108__$1 = state_12108;
if(cljs.core.truth_(inst_12099)){
var statearr_12111_12251 = state_12108__$1;
(statearr_12111_12251[(1)] = (5));

} else {
var statearr_12112_12252 = state_12108__$1;
(statearr_12112_12252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (5))){
var state_12108__$1 = state_12108;
var statearr_12113_12253 = state_12108__$1;
(statearr_12113_12253[(2)] = null);

(statearr_12113_12253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (6))){
var state_12108__$1 = state_12108;
var statearr_12114_12254 = state_12108__$1;
(statearr_12114_12254[(2)] = null);

(statearr_12114_12254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12109 === (7))){
var inst_12104 = (state_12108[(2)]);
var state_12108__$1 = state_12108;
var statearr_12115_12255 = state_12108__$1;
(statearr_12115_12255[(2)] = inst_12104);

(statearr_12115_12255[(1)] = (3));


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
});})(__12237,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
;
return ((function (__12237,switch__11582__auto__,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_12119 = [null,null,null,null,null,null,null];
(statearr_12119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__);

(statearr_12119[(1)] = (1));

return statearr_12119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1 = (function (state_12108){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12120){if((e12120 instanceof Object)){
var ex__11586__auto__ = e12120;
var statearr_12121_12256 = state_12108;
(statearr_12121_12256[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12257 = state_12108;
state_12108 = G__12257;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = function(state_12108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1.call(this,state_12108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__;
})()
;})(__12237,switch__11582__auto__,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
})();
var state__11696__auto__ = (function (){var statearr_12122 = f__11695__auto__.call(null);
(statearr_12122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12249);

return statearr_12122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(__12237,c__11694__auto___12249,G__12068_12238,n__5889__auto___12236,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12258 = (__12237 + (1));
__12237 = G__12258;
continue;
} else {
}
break;
}

var c__11694__auto___12259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___12259,jobs,results,process,async){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___12259,jobs,results,process,async){
return (function (state_12144){
var state_val_12145 = (state_12144[(1)]);
if((state_val_12145 === (1))){
var state_12144__$1 = state_12144;
var statearr_12146_12260 = state_12144__$1;
(statearr_12146_12260[(2)] = null);

(statearr_12146_12260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12145 === (2))){
var state_12144__$1 = state_12144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12144__$1,(4),from);
} else {
if((state_val_12145 === (3))){
var inst_12142 = (state_12144[(2)]);
var state_12144__$1 = state_12144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12144__$1,inst_12142);
} else {
if((state_val_12145 === (4))){
var inst_12125 = (state_12144[(7)]);
var inst_12125__$1 = (state_12144[(2)]);
var inst_12126 = (inst_12125__$1 == null);
var state_12144__$1 = (function (){var statearr_12147 = state_12144;
(statearr_12147[(7)] = inst_12125__$1);

return statearr_12147;
})();
if(cljs.core.truth_(inst_12126)){
var statearr_12148_12261 = state_12144__$1;
(statearr_12148_12261[(1)] = (5));

} else {
var statearr_12149_12262 = state_12144__$1;
(statearr_12149_12262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12145 === (5))){
var inst_12128 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12144__$1 = state_12144;
var statearr_12150_12263 = state_12144__$1;
(statearr_12150_12263[(2)] = inst_12128);

(statearr_12150_12263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12145 === (6))){
var inst_12125 = (state_12144[(7)]);
var inst_12130 = (state_12144[(8)]);
var inst_12130__$1 = cljs.core.async.chan.call(null,(1));
var inst_12131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12132 = [inst_12125,inst_12130__$1];
var inst_12133 = (new cljs.core.PersistentVector(null,2,(5),inst_12131,inst_12132,null));
var state_12144__$1 = (function (){var statearr_12151 = state_12144;
(statearr_12151[(8)] = inst_12130__$1);

return statearr_12151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12144__$1,(8),jobs,inst_12133);
} else {
if((state_val_12145 === (7))){
var inst_12140 = (state_12144[(2)]);
var state_12144__$1 = state_12144;
var statearr_12152_12264 = state_12144__$1;
(statearr_12152_12264[(2)] = inst_12140);

(statearr_12152_12264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12145 === (8))){
var inst_12130 = (state_12144[(8)]);
var inst_12135 = (state_12144[(2)]);
var state_12144__$1 = (function (){var statearr_12153 = state_12144;
(statearr_12153[(9)] = inst_12135);

return statearr_12153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12144__$1,(9),results,inst_12130);
} else {
if((state_val_12145 === (9))){
var inst_12137 = (state_12144[(2)]);
var state_12144__$1 = (function (){var statearr_12154 = state_12144;
(statearr_12154[(10)] = inst_12137);

return statearr_12154;
})();
var statearr_12155_12265 = state_12144__$1;
(statearr_12155_12265[(2)] = null);

(statearr_12155_12265[(1)] = (2));


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
});})(c__11694__auto___12259,jobs,results,process,async))
;
return ((function (switch__11582__auto__,c__11694__auto___12259,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_12159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__);

(statearr_12159[(1)] = (1));

return statearr_12159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1 = (function (state_12144){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12160){if((e12160 instanceof Object)){
var ex__11586__auto__ = e12160;
var statearr_12161_12266 = state_12144;
(statearr_12161_12266[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12267 = state_12144;
state_12144 = G__12267;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = function(state_12144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1.call(this,state_12144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___12259,jobs,results,process,async))
})();
var state__11696__auto__ = (function (){var statearr_12162 = f__11695__auto__.call(null);
(statearr_12162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12259);

return statearr_12162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___12259,jobs,results,process,async))
);


var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__,jobs,results,process,async){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto__,jobs,results,process,async){
return (function (state_12200){
var state_val_12201 = (state_12200[(1)]);
if((state_val_12201 === (7))){
var inst_12196 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
var statearr_12202_12268 = state_12200__$1;
(statearr_12202_12268[(2)] = inst_12196);

(statearr_12202_12268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (20))){
var state_12200__$1 = state_12200;
var statearr_12203_12269 = state_12200__$1;
(statearr_12203_12269[(2)] = null);

(statearr_12203_12269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (1))){
var state_12200__$1 = state_12200;
var statearr_12204_12270 = state_12200__$1;
(statearr_12204_12270[(2)] = null);

(statearr_12204_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (4))){
var inst_12165 = (state_12200[(7)]);
var inst_12165__$1 = (state_12200[(2)]);
var inst_12166 = (inst_12165__$1 == null);
var state_12200__$1 = (function (){var statearr_12205 = state_12200;
(statearr_12205[(7)] = inst_12165__$1);

return statearr_12205;
})();
if(cljs.core.truth_(inst_12166)){
var statearr_12206_12271 = state_12200__$1;
(statearr_12206_12271[(1)] = (5));

} else {
var statearr_12207_12272 = state_12200__$1;
(statearr_12207_12272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (15))){
var inst_12178 = (state_12200[(8)]);
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12200__$1,(18),to,inst_12178);
} else {
if((state_val_12201 === (21))){
var inst_12191 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
var statearr_12208_12273 = state_12200__$1;
(statearr_12208_12273[(2)] = inst_12191);

(statearr_12208_12273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (13))){
var inst_12193 = (state_12200[(2)]);
var state_12200__$1 = (function (){var statearr_12209 = state_12200;
(statearr_12209[(9)] = inst_12193);

return statearr_12209;
})();
var statearr_12210_12274 = state_12200__$1;
(statearr_12210_12274[(2)] = null);

(statearr_12210_12274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (6))){
var inst_12165 = (state_12200[(7)]);
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12200__$1,(11),inst_12165);
} else {
if((state_val_12201 === (17))){
var inst_12186 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
if(cljs.core.truth_(inst_12186)){
var statearr_12211_12275 = state_12200__$1;
(statearr_12211_12275[(1)] = (19));

} else {
var statearr_12212_12276 = state_12200__$1;
(statearr_12212_12276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (3))){
var inst_12198 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12200__$1,inst_12198);
} else {
if((state_val_12201 === (12))){
var inst_12175 = (state_12200[(10)]);
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12200__$1,(14),inst_12175);
} else {
if((state_val_12201 === (2))){
var state_12200__$1 = state_12200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12200__$1,(4),results);
} else {
if((state_val_12201 === (19))){
var state_12200__$1 = state_12200;
var statearr_12213_12277 = state_12200__$1;
(statearr_12213_12277[(2)] = null);

(statearr_12213_12277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (11))){
var inst_12175 = (state_12200[(2)]);
var state_12200__$1 = (function (){var statearr_12214 = state_12200;
(statearr_12214[(10)] = inst_12175);

return statearr_12214;
})();
var statearr_12215_12278 = state_12200__$1;
(statearr_12215_12278[(2)] = null);

(statearr_12215_12278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (9))){
var state_12200__$1 = state_12200;
var statearr_12216_12279 = state_12200__$1;
(statearr_12216_12279[(2)] = null);

(statearr_12216_12279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (5))){
var state_12200__$1 = state_12200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12217_12280 = state_12200__$1;
(statearr_12217_12280[(1)] = (8));

} else {
var statearr_12218_12281 = state_12200__$1;
(statearr_12218_12281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (14))){
var inst_12178 = (state_12200[(8)]);
var inst_12180 = (state_12200[(11)]);
var inst_12178__$1 = (state_12200[(2)]);
var inst_12179 = (inst_12178__$1 == null);
var inst_12180__$1 = cljs.core.not.call(null,inst_12179);
var state_12200__$1 = (function (){var statearr_12219 = state_12200;
(statearr_12219[(8)] = inst_12178__$1);

(statearr_12219[(11)] = inst_12180__$1);

return statearr_12219;
})();
if(inst_12180__$1){
var statearr_12220_12282 = state_12200__$1;
(statearr_12220_12282[(1)] = (15));

} else {
var statearr_12221_12283 = state_12200__$1;
(statearr_12221_12283[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (16))){
var inst_12180 = (state_12200[(11)]);
var state_12200__$1 = state_12200;
var statearr_12222_12284 = state_12200__$1;
(statearr_12222_12284[(2)] = inst_12180);

(statearr_12222_12284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (10))){
var inst_12172 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
var statearr_12223_12285 = state_12200__$1;
(statearr_12223_12285[(2)] = inst_12172);

(statearr_12223_12285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (18))){
var inst_12183 = (state_12200[(2)]);
var state_12200__$1 = state_12200;
var statearr_12224_12286 = state_12200__$1;
(statearr_12224_12286[(2)] = inst_12183);

(statearr_12224_12286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12201 === (8))){
var inst_12169 = cljs.core.async.close_BANG_.call(null,to);
var state_12200__$1 = state_12200;
var statearr_12225_12287 = state_12200__$1;
(statearr_12225_12287[(2)] = inst_12169);

(statearr_12225_12287[(1)] = (10));


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
});})(c__11694__auto__,jobs,results,process,async))
;
return ((function (switch__11582__auto__,c__11694__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_12229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__);

(statearr_12229[(1)] = (1));

return statearr_12229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1 = (function (state_12200){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12230){if((e12230 instanceof Object)){
var ex__11586__auto__ = e12230;
var statearr_12231_12288 = state_12200;
(statearr_12231_12288[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12289 = state_12200;
state_12200 = G__12289;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__ = function(state_12200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1.call(this,state_12200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto__,jobs,results,process,async))
})();
var state__11696__auto__ = (function (){var statearr_12232 = f__11695__auto__.call(null);
(statearr_12232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_12232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__,jobs,results,process,async))
);

return c__11694__auto__;
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
var args12290 = [];
var len__6044__auto___12293 = arguments.length;
var i__6045__auto___12294 = (0);
while(true){
if((i__6045__auto___12294 < len__6044__auto___12293)){
args12290.push((arguments[i__6045__auto___12294]));

var G__12295 = (i__6045__auto___12294 + (1));
i__6045__auto___12294 = G__12295;
continue;
} else {
}
break;
}

var G__12292 = args12290.length;
switch (G__12292) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12290.length)].join('')));

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
var args12297 = [];
var len__6044__auto___12300 = arguments.length;
var i__6045__auto___12301 = (0);
while(true){
if((i__6045__auto___12301 < len__6044__auto___12300)){
args12297.push((arguments[i__6045__auto___12301]));

var G__12302 = (i__6045__auto___12301 + (1));
i__6045__auto___12301 = G__12302;
continue;
} else {
}
break;
}

var G__12299 = args12297.length;
switch (G__12299) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12297.length)].join('')));

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
var args12304 = [];
var len__6044__auto___12357 = arguments.length;
var i__6045__auto___12358 = (0);
while(true){
if((i__6045__auto___12358 < len__6044__auto___12357)){
args12304.push((arguments[i__6045__auto___12358]));

var G__12359 = (i__6045__auto___12358 + (1));
i__6045__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var G__12306 = args12304.length;
switch (G__12306) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12304.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11694__auto___12361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___12361,tc,fc){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___12361,tc,fc){
return (function (state_12332){
var state_val_12333 = (state_12332[(1)]);
if((state_val_12333 === (7))){
var inst_12328 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12334_12362 = state_12332__$1;
(statearr_12334_12362[(2)] = inst_12328);

(statearr_12334_12362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (1))){
var state_12332__$1 = state_12332;
var statearr_12335_12363 = state_12332__$1;
(statearr_12335_12363[(2)] = null);

(statearr_12335_12363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (4))){
var inst_12309 = (state_12332[(7)]);
var inst_12309__$1 = (state_12332[(2)]);
var inst_12310 = (inst_12309__$1 == null);
var state_12332__$1 = (function (){var statearr_12336 = state_12332;
(statearr_12336[(7)] = inst_12309__$1);

return statearr_12336;
})();
if(cljs.core.truth_(inst_12310)){
var statearr_12337_12364 = state_12332__$1;
(statearr_12337_12364[(1)] = (5));

} else {
var statearr_12338_12365 = state_12332__$1;
(statearr_12338_12365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (13))){
var state_12332__$1 = state_12332;
var statearr_12339_12366 = state_12332__$1;
(statearr_12339_12366[(2)] = null);

(statearr_12339_12366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (6))){
var inst_12309 = (state_12332[(7)]);
var inst_12315 = p.call(null,inst_12309);
var state_12332__$1 = state_12332;
if(cljs.core.truth_(inst_12315)){
var statearr_12340_12367 = state_12332__$1;
(statearr_12340_12367[(1)] = (9));

} else {
var statearr_12341_12368 = state_12332__$1;
(statearr_12341_12368[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (3))){
var inst_12330 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12332__$1,inst_12330);
} else {
if((state_val_12333 === (12))){
var state_12332__$1 = state_12332;
var statearr_12342_12369 = state_12332__$1;
(statearr_12342_12369[(2)] = null);

(statearr_12342_12369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (2))){
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12332__$1,(4),ch);
} else {
if((state_val_12333 === (11))){
var inst_12309 = (state_12332[(7)]);
var inst_12319 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12332__$1,(8),inst_12319,inst_12309);
} else {
if((state_val_12333 === (9))){
var state_12332__$1 = state_12332;
var statearr_12343_12370 = state_12332__$1;
(statearr_12343_12370[(2)] = tc);

(statearr_12343_12370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (5))){
var inst_12312 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12313 = cljs.core.async.close_BANG_.call(null,fc);
var state_12332__$1 = (function (){var statearr_12344 = state_12332;
(statearr_12344[(8)] = inst_12312);

return statearr_12344;
})();
var statearr_12345_12371 = state_12332__$1;
(statearr_12345_12371[(2)] = inst_12313);

(statearr_12345_12371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (14))){
var inst_12326 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
var statearr_12346_12372 = state_12332__$1;
(statearr_12346_12372[(2)] = inst_12326);

(statearr_12346_12372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (10))){
var state_12332__$1 = state_12332;
var statearr_12347_12373 = state_12332__$1;
(statearr_12347_12373[(2)] = fc);

(statearr_12347_12373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12333 === (8))){
var inst_12321 = (state_12332[(2)]);
var state_12332__$1 = state_12332;
if(cljs.core.truth_(inst_12321)){
var statearr_12348_12374 = state_12332__$1;
(statearr_12348_12374[(1)] = (12));

} else {
var statearr_12349_12375 = state_12332__$1;
(statearr_12349_12375[(1)] = (13));

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
});})(c__11694__auto___12361,tc,fc))
;
return ((function (switch__11582__auto__,c__11694__auto___12361,tc,fc){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_12353 = [null,null,null,null,null,null,null,null,null];
(statearr_12353[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_12353[(1)] = (1));

return statearr_12353;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_12332){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12354){if((e12354 instanceof Object)){
var ex__11586__auto__ = e12354;
var statearr_12355_12376 = state_12332;
(statearr_12355_12376[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12377 = state_12332;
state_12332 = G__12377;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_12332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_12332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___12361,tc,fc))
})();
var state__11696__auto__ = (function (){var statearr_12356 = f__11695__auto__.call(null);
(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12361);

return statearr_12356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___12361,tc,fc))
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
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto__){
return (function (state_12424){
var state_val_12425 = (state_12424[(1)]);
if((state_val_12425 === (1))){
var inst_12410 = init;
var state_12424__$1 = (function (){var statearr_12426 = state_12424;
(statearr_12426[(7)] = inst_12410);

return statearr_12426;
})();
var statearr_12427_12442 = state_12424__$1;
(statearr_12427_12442[(2)] = null);

(statearr_12427_12442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12425 === (2))){
var state_12424__$1 = state_12424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12424__$1,(4),ch);
} else {
if((state_val_12425 === (3))){
var inst_12422 = (state_12424[(2)]);
var state_12424__$1 = state_12424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12424__$1,inst_12422);
} else {
if((state_val_12425 === (4))){
var inst_12413 = (state_12424[(8)]);
var inst_12413__$1 = (state_12424[(2)]);
var inst_12414 = (inst_12413__$1 == null);
var state_12424__$1 = (function (){var statearr_12428 = state_12424;
(statearr_12428[(8)] = inst_12413__$1);

return statearr_12428;
})();
if(cljs.core.truth_(inst_12414)){
var statearr_12429_12443 = state_12424__$1;
(statearr_12429_12443[(1)] = (5));

} else {
var statearr_12430_12444 = state_12424__$1;
(statearr_12430_12444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12425 === (5))){
var inst_12410 = (state_12424[(7)]);
var state_12424__$1 = state_12424;
var statearr_12431_12445 = state_12424__$1;
(statearr_12431_12445[(2)] = inst_12410);

(statearr_12431_12445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12425 === (6))){
var inst_12413 = (state_12424[(8)]);
var inst_12410 = (state_12424[(7)]);
var inst_12417 = f.call(null,inst_12410,inst_12413);
var inst_12410__$1 = inst_12417;
var state_12424__$1 = (function (){var statearr_12432 = state_12424;
(statearr_12432[(7)] = inst_12410__$1);

return statearr_12432;
})();
var statearr_12433_12446 = state_12424__$1;
(statearr_12433_12446[(2)] = null);

(statearr_12433_12446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12425 === (7))){
var inst_12420 = (state_12424[(2)]);
var state_12424__$1 = state_12424;
var statearr_12434_12447 = state_12424__$1;
(statearr_12434_12447[(2)] = inst_12420);

(statearr_12434_12447[(1)] = (3));


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
});})(c__11694__auto__))
;
return ((function (switch__11582__auto__,c__11694__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11583__auto____0 = (function (){
var statearr_12438 = [null,null,null,null,null,null,null,null,null];
(statearr_12438[(0)] = cljs$core$async$reduce_$_state_machine__11583__auto__);

(statearr_12438[(1)] = (1));

return statearr_12438;
});
var cljs$core$async$reduce_$_state_machine__11583__auto____1 = (function (state_12424){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12439){if((e12439 instanceof Object)){
var ex__11586__auto__ = e12439;
var statearr_12440_12448 = state_12424;
(statearr_12440_12448[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12449 = state_12424;
state_12424 = G__12449;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11583__auto__ = function(state_12424){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11583__auto____1.call(this,state_12424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11583__auto____0;
cljs$core$async$reduce_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11583__auto____1;
return cljs$core$async$reduce_$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_12441 = f__11695__auto__.call(null);
(statearr_12441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_12441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
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
var args12450 = [];
var len__6044__auto___12502 = arguments.length;
var i__6045__auto___12503 = (0);
while(true){
if((i__6045__auto___12503 < len__6044__auto___12502)){
args12450.push((arguments[i__6045__auto___12503]));

var G__12504 = (i__6045__auto___12503 + (1));
i__6045__auto___12503 = G__12504;
continue;
} else {
}
break;
}

var G__12452 = args12450.length;
switch (G__12452) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12450.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto__){
return (function (state_12477){
var state_val_12478 = (state_12477[(1)]);
if((state_val_12478 === (7))){
var inst_12459 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12479_12506 = state_12477__$1;
(statearr_12479_12506[(2)] = inst_12459);

(statearr_12479_12506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (1))){
var inst_12453 = cljs.core.seq.call(null,coll);
var inst_12454 = inst_12453;
var state_12477__$1 = (function (){var statearr_12480 = state_12477;
(statearr_12480[(7)] = inst_12454);

return statearr_12480;
})();
var statearr_12481_12507 = state_12477__$1;
(statearr_12481_12507[(2)] = null);

(statearr_12481_12507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (4))){
var inst_12454 = (state_12477[(7)]);
var inst_12457 = cljs.core.first.call(null,inst_12454);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12477__$1,(7),ch,inst_12457);
} else {
if((state_val_12478 === (13))){
var inst_12471 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12482_12508 = state_12477__$1;
(statearr_12482_12508[(2)] = inst_12471);

(statearr_12482_12508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (6))){
var inst_12462 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12462)){
var statearr_12483_12509 = state_12477__$1;
(statearr_12483_12509[(1)] = (8));

} else {
var statearr_12484_12510 = state_12477__$1;
(statearr_12484_12510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (3))){
var inst_12475 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12477__$1,inst_12475);
} else {
if((state_val_12478 === (12))){
var state_12477__$1 = state_12477;
var statearr_12485_12511 = state_12477__$1;
(statearr_12485_12511[(2)] = null);

(statearr_12485_12511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (2))){
var inst_12454 = (state_12477[(7)]);
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12454)){
var statearr_12486_12512 = state_12477__$1;
(statearr_12486_12512[(1)] = (4));

} else {
var statearr_12487_12513 = state_12477__$1;
(statearr_12487_12513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (11))){
var inst_12468 = cljs.core.async.close_BANG_.call(null,ch);
var state_12477__$1 = state_12477;
var statearr_12488_12514 = state_12477__$1;
(statearr_12488_12514[(2)] = inst_12468);

(statearr_12488_12514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (9))){
var state_12477__$1 = state_12477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12489_12515 = state_12477__$1;
(statearr_12489_12515[(1)] = (11));

} else {
var statearr_12490_12516 = state_12477__$1;
(statearr_12490_12516[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (5))){
var inst_12454 = (state_12477[(7)]);
var state_12477__$1 = state_12477;
var statearr_12491_12517 = state_12477__$1;
(statearr_12491_12517[(2)] = inst_12454);

(statearr_12491_12517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (10))){
var inst_12473 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12492_12518 = state_12477__$1;
(statearr_12492_12518[(2)] = inst_12473);

(statearr_12492_12518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (8))){
var inst_12454 = (state_12477[(7)]);
var inst_12464 = cljs.core.next.call(null,inst_12454);
var inst_12454__$1 = inst_12464;
var state_12477__$1 = (function (){var statearr_12493 = state_12477;
(statearr_12493[(7)] = inst_12454__$1);

return statearr_12493;
})();
var statearr_12494_12519 = state_12477__$1;
(statearr_12494_12519[(2)] = null);

(statearr_12494_12519[(1)] = (2));


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
});})(c__11694__auto__))
;
return ((function (switch__11582__auto__,c__11694__auto__){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_12498 = [null,null,null,null,null,null,null,null];
(statearr_12498[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_12498[(1)] = (1));

return statearr_12498;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_12477){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12499){if((e12499 instanceof Object)){
var ex__11586__auto__ = e12499;
var statearr_12500_12520 = state_12477;
(statearr_12500_12520[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12521 = state_12477;
state_12477 = G__12521;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_12501 = f__11695__auto__.call(null);
(statearr_12501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_12501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
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
var x__5641__auto__ = (((_ == null))?null:_);
var m__5642__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,_);
} else {
var m__5642__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,_);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5642__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,ch);
} else {
var m__5642__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,ch);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m);
} else {
var m__5642__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async12743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12743 = (function (mult,ch,cs,meta12744){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12744 = meta12744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12745,meta12744__$1){
var self__ = this;
var _12745__$1 = this;
return (new cljs.core.async.t_cljs$core$async12743(self__.mult,self__.ch,self__.cs,meta12744__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12745){
var self__ = this;
var _12745__$1 = this;
return self__.meta12744;
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12744","meta12744",-1609325398,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12743";

cljs.core.async.t_cljs$core$async12743.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async12743");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12743 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12743(mult__$1,ch__$1,cs__$1,meta12744){
return (new cljs.core.async.t_cljs$core$async12743(mult__$1,ch__$1,cs__$1,meta12744));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12743(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11694__auto___12964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___12964,cs,m,dchan,dctr,done){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___12964,cs,m,dchan,dctr,done){
return (function (state_12876){
var state_val_12877 = (state_12876[(1)]);
if((state_val_12877 === (7))){
var inst_12872 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12878_12965 = state_12876__$1;
(statearr_12878_12965[(2)] = inst_12872);

(statearr_12878_12965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (20))){
var inst_12777 = (state_12876[(7)]);
var inst_12787 = cljs.core.first.call(null,inst_12777);
var inst_12788 = cljs.core.nth.call(null,inst_12787,(0),null);
var inst_12789 = cljs.core.nth.call(null,inst_12787,(1),null);
var state_12876__$1 = (function (){var statearr_12879 = state_12876;
(statearr_12879[(8)] = inst_12788);

return statearr_12879;
})();
if(cljs.core.truth_(inst_12789)){
var statearr_12880_12966 = state_12876__$1;
(statearr_12880_12966[(1)] = (22));

} else {
var statearr_12881_12967 = state_12876__$1;
(statearr_12881_12967[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (27))){
var inst_12748 = (state_12876[(9)]);
var inst_12817 = (state_12876[(10)]);
var inst_12819 = (state_12876[(11)]);
var inst_12824 = (state_12876[(12)]);
var inst_12824__$1 = cljs.core._nth.call(null,inst_12817,inst_12819);
var inst_12825 = cljs.core.async.put_BANG_.call(null,inst_12824__$1,inst_12748,done);
var state_12876__$1 = (function (){var statearr_12882 = state_12876;
(statearr_12882[(12)] = inst_12824__$1);

return statearr_12882;
})();
if(cljs.core.truth_(inst_12825)){
var statearr_12883_12968 = state_12876__$1;
(statearr_12883_12968[(1)] = (30));

} else {
var statearr_12884_12969 = state_12876__$1;
(statearr_12884_12969[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (1))){
var state_12876__$1 = state_12876;
var statearr_12885_12970 = state_12876__$1;
(statearr_12885_12970[(2)] = null);

(statearr_12885_12970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (24))){
var inst_12777 = (state_12876[(7)]);
var inst_12794 = (state_12876[(2)]);
var inst_12795 = cljs.core.next.call(null,inst_12777);
var inst_12757 = inst_12795;
var inst_12758 = null;
var inst_12759 = (0);
var inst_12760 = (0);
var state_12876__$1 = (function (){var statearr_12886 = state_12876;
(statearr_12886[(13)] = inst_12757);

(statearr_12886[(14)] = inst_12758);

(statearr_12886[(15)] = inst_12794);

(statearr_12886[(16)] = inst_12760);

(statearr_12886[(17)] = inst_12759);

return statearr_12886;
})();
var statearr_12887_12971 = state_12876__$1;
(statearr_12887_12971[(2)] = null);

(statearr_12887_12971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (39))){
var state_12876__$1 = state_12876;
var statearr_12891_12972 = state_12876__$1;
(statearr_12891_12972[(2)] = null);

(statearr_12891_12972[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (4))){
var inst_12748 = (state_12876[(9)]);
var inst_12748__$1 = (state_12876[(2)]);
var inst_12749 = (inst_12748__$1 == null);
var state_12876__$1 = (function (){var statearr_12892 = state_12876;
(statearr_12892[(9)] = inst_12748__$1);

return statearr_12892;
})();
if(cljs.core.truth_(inst_12749)){
var statearr_12893_12973 = state_12876__$1;
(statearr_12893_12973[(1)] = (5));

} else {
var statearr_12894_12974 = state_12876__$1;
(statearr_12894_12974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (15))){
var inst_12757 = (state_12876[(13)]);
var inst_12758 = (state_12876[(14)]);
var inst_12760 = (state_12876[(16)]);
var inst_12759 = (state_12876[(17)]);
var inst_12773 = (state_12876[(2)]);
var inst_12774 = (inst_12760 + (1));
var tmp12888 = inst_12757;
var tmp12889 = inst_12758;
var tmp12890 = inst_12759;
var inst_12757__$1 = tmp12888;
var inst_12758__$1 = tmp12889;
var inst_12759__$1 = tmp12890;
var inst_12760__$1 = inst_12774;
var state_12876__$1 = (function (){var statearr_12895 = state_12876;
(statearr_12895[(18)] = inst_12773);

(statearr_12895[(13)] = inst_12757__$1);

(statearr_12895[(14)] = inst_12758__$1);

(statearr_12895[(16)] = inst_12760__$1);

(statearr_12895[(17)] = inst_12759__$1);

return statearr_12895;
})();
var statearr_12896_12975 = state_12876__$1;
(statearr_12896_12975[(2)] = null);

(statearr_12896_12975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (21))){
var inst_12798 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12900_12976 = state_12876__$1;
(statearr_12900_12976[(2)] = inst_12798);

(statearr_12900_12976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (31))){
var inst_12824 = (state_12876[(12)]);
var inst_12828 = done.call(null,null);
var inst_12829 = cljs.core.async.untap_STAR_.call(null,m,inst_12824);
var state_12876__$1 = (function (){var statearr_12901 = state_12876;
(statearr_12901[(19)] = inst_12828);

return statearr_12901;
})();
var statearr_12902_12977 = state_12876__$1;
(statearr_12902_12977[(2)] = inst_12829);

(statearr_12902_12977[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (32))){
var inst_12818 = (state_12876[(20)]);
var inst_12817 = (state_12876[(10)]);
var inst_12819 = (state_12876[(11)]);
var inst_12816 = (state_12876[(21)]);
var inst_12831 = (state_12876[(2)]);
var inst_12832 = (inst_12819 + (1));
var tmp12897 = inst_12818;
var tmp12898 = inst_12817;
var tmp12899 = inst_12816;
var inst_12816__$1 = tmp12899;
var inst_12817__$1 = tmp12898;
var inst_12818__$1 = tmp12897;
var inst_12819__$1 = inst_12832;
var state_12876__$1 = (function (){var statearr_12903 = state_12876;
(statearr_12903[(20)] = inst_12818__$1);

(statearr_12903[(22)] = inst_12831);

(statearr_12903[(10)] = inst_12817__$1);

(statearr_12903[(11)] = inst_12819__$1);

(statearr_12903[(21)] = inst_12816__$1);

return statearr_12903;
})();
var statearr_12904_12978 = state_12876__$1;
(statearr_12904_12978[(2)] = null);

(statearr_12904_12978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (40))){
var inst_12844 = (state_12876[(23)]);
var inst_12848 = done.call(null,null);
var inst_12849 = cljs.core.async.untap_STAR_.call(null,m,inst_12844);
var state_12876__$1 = (function (){var statearr_12905 = state_12876;
(statearr_12905[(24)] = inst_12848);

return statearr_12905;
})();
var statearr_12906_12979 = state_12876__$1;
(statearr_12906_12979[(2)] = inst_12849);

(statearr_12906_12979[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (33))){
var inst_12835 = (state_12876[(25)]);
var inst_12837 = cljs.core.chunked_seq_QMARK_.call(null,inst_12835);
var state_12876__$1 = state_12876;
if(inst_12837){
var statearr_12907_12980 = state_12876__$1;
(statearr_12907_12980[(1)] = (36));

} else {
var statearr_12908_12981 = state_12876__$1;
(statearr_12908_12981[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (13))){
var inst_12767 = (state_12876[(26)]);
var inst_12770 = cljs.core.async.close_BANG_.call(null,inst_12767);
var state_12876__$1 = state_12876;
var statearr_12909_12982 = state_12876__$1;
(statearr_12909_12982[(2)] = inst_12770);

(statearr_12909_12982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (22))){
var inst_12788 = (state_12876[(8)]);
var inst_12791 = cljs.core.async.close_BANG_.call(null,inst_12788);
var state_12876__$1 = state_12876;
var statearr_12910_12983 = state_12876__$1;
(statearr_12910_12983[(2)] = inst_12791);

(statearr_12910_12983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (36))){
var inst_12835 = (state_12876[(25)]);
var inst_12839 = cljs.core.chunk_first.call(null,inst_12835);
var inst_12840 = cljs.core.chunk_rest.call(null,inst_12835);
var inst_12841 = cljs.core.count.call(null,inst_12839);
var inst_12816 = inst_12840;
var inst_12817 = inst_12839;
var inst_12818 = inst_12841;
var inst_12819 = (0);
var state_12876__$1 = (function (){var statearr_12911 = state_12876;
(statearr_12911[(20)] = inst_12818);

(statearr_12911[(10)] = inst_12817);

(statearr_12911[(11)] = inst_12819);

(statearr_12911[(21)] = inst_12816);

return statearr_12911;
})();
var statearr_12912_12984 = state_12876__$1;
(statearr_12912_12984[(2)] = null);

(statearr_12912_12984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (41))){
var inst_12835 = (state_12876[(25)]);
var inst_12851 = (state_12876[(2)]);
var inst_12852 = cljs.core.next.call(null,inst_12835);
var inst_12816 = inst_12852;
var inst_12817 = null;
var inst_12818 = (0);
var inst_12819 = (0);
var state_12876__$1 = (function (){var statearr_12913 = state_12876;
(statearr_12913[(20)] = inst_12818);

(statearr_12913[(27)] = inst_12851);

(statearr_12913[(10)] = inst_12817);

(statearr_12913[(11)] = inst_12819);

(statearr_12913[(21)] = inst_12816);

return statearr_12913;
})();
var statearr_12914_12985 = state_12876__$1;
(statearr_12914_12985[(2)] = null);

(statearr_12914_12985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (43))){
var state_12876__$1 = state_12876;
var statearr_12915_12986 = state_12876__$1;
(statearr_12915_12986[(2)] = null);

(statearr_12915_12986[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (29))){
var inst_12860 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12916_12987 = state_12876__$1;
(statearr_12916_12987[(2)] = inst_12860);

(statearr_12916_12987[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (44))){
var inst_12869 = (state_12876[(2)]);
var state_12876__$1 = (function (){var statearr_12917 = state_12876;
(statearr_12917[(28)] = inst_12869);

return statearr_12917;
})();
var statearr_12918_12988 = state_12876__$1;
(statearr_12918_12988[(2)] = null);

(statearr_12918_12988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (6))){
var inst_12808 = (state_12876[(29)]);
var inst_12807 = cljs.core.deref.call(null,cs);
var inst_12808__$1 = cljs.core.keys.call(null,inst_12807);
var inst_12809 = cljs.core.count.call(null,inst_12808__$1);
var inst_12810 = cljs.core.reset_BANG_.call(null,dctr,inst_12809);
var inst_12815 = cljs.core.seq.call(null,inst_12808__$1);
var inst_12816 = inst_12815;
var inst_12817 = null;
var inst_12818 = (0);
var inst_12819 = (0);
var state_12876__$1 = (function (){var statearr_12919 = state_12876;
(statearr_12919[(20)] = inst_12818);

(statearr_12919[(29)] = inst_12808__$1);

(statearr_12919[(10)] = inst_12817);

(statearr_12919[(30)] = inst_12810);

(statearr_12919[(11)] = inst_12819);

(statearr_12919[(21)] = inst_12816);

return statearr_12919;
})();
var statearr_12920_12989 = state_12876__$1;
(statearr_12920_12989[(2)] = null);

(statearr_12920_12989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (28))){
var inst_12835 = (state_12876[(25)]);
var inst_12816 = (state_12876[(21)]);
var inst_12835__$1 = cljs.core.seq.call(null,inst_12816);
var state_12876__$1 = (function (){var statearr_12921 = state_12876;
(statearr_12921[(25)] = inst_12835__$1);

return statearr_12921;
})();
if(inst_12835__$1){
var statearr_12922_12990 = state_12876__$1;
(statearr_12922_12990[(1)] = (33));

} else {
var statearr_12923_12991 = state_12876__$1;
(statearr_12923_12991[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (25))){
var inst_12818 = (state_12876[(20)]);
var inst_12819 = (state_12876[(11)]);
var inst_12821 = (inst_12819 < inst_12818);
var inst_12822 = inst_12821;
var state_12876__$1 = state_12876;
if(cljs.core.truth_(inst_12822)){
var statearr_12924_12992 = state_12876__$1;
(statearr_12924_12992[(1)] = (27));

} else {
var statearr_12925_12993 = state_12876__$1;
(statearr_12925_12993[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (34))){
var state_12876__$1 = state_12876;
var statearr_12926_12994 = state_12876__$1;
(statearr_12926_12994[(2)] = null);

(statearr_12926_12994[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (17))){
var state_12876__$1 = state_12876;
var statearr_12927_12995 = state_12876__$1;
(statearr_12927_12995[(2)] = null);

(statearr_12927_12995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (3))){
var inst_12874 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12876__$1,inst_12874);
} else {
if((state_val_12877 === (12))){
var inst_12803 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12928_12996 = state_12876__$1;
(statearr_12928_12996[(2)] = inst_12803);

(statearr_12928_12996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (2))){
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12876__$1,(4),ch);
} else {
if((state_val_12877 === (23))){
var state_12876__$1 = state_12876;
var statearr_12929_12997 = state_12876__$1;
(statearr_12929_12997[(2)] = null);

(statearr_12929_12997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (35))){
var inst_12858 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12930_12998 = state_12876__$1;
(statearr_12930_12998[(2)] = inst_12858);

(statearr_12930_12998[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (19))){
var inst_12777 = (state_12876[(7)]);
var inst_12781 = cljs.core.chunk_first.call(null,inst_12777);
var inst_12782 = cljs.core.chunk_rest.call(null,inst_12777);
var inst_12783 = cljs.core.count.call(null,inst_12781);
var inst_12757 = inst_12782;
var inst_12758 = inst_12781;
var inst_12759 = inst_12783;
var inst_12760 = (0);
var state_12876__$1 = (function (){var statearr_12931 = state_12876;
(statearr_12931[(13)] = inst_12757);

(statearr_12931[(14)] = inst_12758);

(statearr_12931[(16)] = inst_12760);

(statearr_12931[(17)] = inst_12759);

return statearr_12931;
})();
var statearr_12932_12999 = state_12876__$1;
(statearr_12932_12999[(2)] = null);

(statearr_12932_12999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (11))){
var inst_12777 = (state_12876[(7)]);
var inst_12757 = (state_12876[(13)]);
var inst_12777__$1 = cljs.core.seq.call(null,inst_12757);
var state_12876__$1 = (function (){var statearr_12933 = state_12876;
(statearr_12933[(7)] = inst_12777__$1);

return statearr_12933;
})();
if(inst_12777__$1){
var statearr_12934_13000 = state_12876__$1;
(statearr_12934_13000[(1)] = (16));

} else {
var statearr_12935_13001 = state_12876__$1;
(statearr_12935_13001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (9))){
var inst_12805 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12936_13002 = state_12876__$1;
(statearr_12936_13002[(2)] = inst_12805);

(statearr_12936_13002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (5))){
var inst_12755 = cljs.core.deref.call(null,cs);
var inst_12756 = cljs.core.seq.call(null,inst_12755);
var inst_12757 = inst_12756;
var inst_12758 = null;
var inst_12759 = (0);
var inst_12760 = (0);
var state_12876__$1 = (function (){var statearr_12937 = state_12876;
(statearr_12937[(13)] = inst_12757);

(statearr_12937[(14)] = inst_12758);

(statearr_12937[(16)] = inst_12760);

(statearr_12937[(17)] = inst_12759);

return statearr_12937;
})();
var statearr_12938_13003 = state_12876__$1;
(statearr_12938_13003[(2)] = null);

(statearr_12938_13003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (14))){
var state_12876__$1 = state_12876;
var statearr_12939_13004 = state_12876__$1;
(statearr_12939_13004[(2)] = null);

(statearr_12939_13004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (45))){
var inst_12866 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12940_13005 = state_12876__$1;
(statearr_12940_13005[(2)] = inst_12866);

(statearr_12940_13005[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (26))){
var inst_12808 = (state_12876[(29)]);
var inst_12862 = (state_12876[(2)]);
var inst_12863 = cljs.core.seq.call(null,inst_12808);
var state_12876__$1 = (function (){var statearr_12941 = state_12876;
(statearr_12941[(31)] = inst_12862);

return statearr_12941;
})();
if(inst_12863){
var statearr_12942_13006 = state_12876__$1;
(statearr_12942_13006[(1)] = (42));

} else {
var statearr_12943_13007 = state_12876__$1;
(statearr_12943_13007[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (16))){
var inst_12777 = (state_12876[(7)]);
var inst_12779 = cljs.core.chunked_seq_QMARK_.call(null,inst_12777);
var state_12876__$1 = state_12876;
if(inst_12779){
var statearr_12944_13008 = state_12876__$1;
(statearr_12944_13008[(1)] = (19));

} else {
var statearr_12945_13009 = state_12876__$1;
(statearr_12945_13009[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (38))){
var inst_12855 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12946_13010 = state_12876__$1;
(statearr_12946_13010[(2)] = inst_12855);

(statearr_12946_13010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (30))){
var state_12876__$1 = state_12876;
var statearr_12947_13011 = state_12876__$1;
(statearr_12947_13011[(2)] = null);

(statearr_12947_13011[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (10))){
var inst_12758 = (state_12876[(14)]);
var inst_12760 = (state_12876[(16)]);
var inst_12766 = cljs.core._nth.call(null,inst_12758,inst_12760);
var inst_12767 = cljs.core.nth.call(null,inst_12766,(0),null);
var inst_12768 = cljs.core.nth.call(null,inst_12766,(1),null);
var state_12876__$1 = (function (){var statearr_12948 = state_12876;
(statearr_12948[(26)] = inst_12767);

return statearr_12948;
})();
if(cljs.core.truth_(inst_12768)){
var statearr_12949_13012 = state_12876__$1;
(statearr_12949_13012[(1)] = (13));

} else {
var statearr_12950_13013 = state_12876__$1;
(statearr_12950_13013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (18))){
var inst_12801 = (state_12876[(2)]);
var state_12876__$1 = state_12876;
var statearr_12951_13014 = state_12876__$1;
(statearr_12951_13014[(2)] = inst_12801);

(statearr_12951_13014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (42))){
var state_12876__$1 = state_12876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12876__$1,(45),dchan);
} else {
if((state_val_12877 === (37))){
var inst_12748 = (state_12876[(9)]);
var inst_12844 = (state_12876[(23)]);
var inst_12835 = (state_12876[(25)]);
var inst_12844__$1 = cljs.core.first.call(null,inst_12835);
var inst_12845 = cljs.core.async.put_BANG_.call(null,inst_12844__$1,inst_12748,done);
var state_12876__$1 = (function (){var statearr_12952 = state_12876;
(statearr_12952[(23)] = inst_12844__$1);

return statearr_12952;
})();
if(cljs.core.truth_(inst_12845)){
var statearr_12953_13015 = state_12876__$1;
(statearr_12953_13015[(1)] = (39));

} else {
var statearr_12954_13016 = state_12876__$1;
(statearr_12954_13016[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12877 === (8))){
var inst_12760 = (state_12876[(16)]);
var inst_12759 = (state_12876[(17)]);
var inst_12762 = (inst_12760 < inst_12759);
var inst_12763 = inst_12762;
var state_12876__$1 = state_12876;
if(cljs.core.truth_(inst_12763)){
var statearr_12955_13017 = state_12876__$1;
(statearr_12955_13017[(1)] = (10));

} else {
var statearr_12956_13018 = state_12876__$1;
(statearr_12956_13018[(1)] = (11));

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
});})(c__11694__auto___12964,cs,m,dchan,dctr,done))
;
return ((function (switch__11582__auto__,c__11694__auto___12964,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11583__auto__ = null;
var cljs$core$async$mult_$_state_machine__11583__auto____0 = (function (){
var statearr_12960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12960[(0)] = cljs$core$async$mult_$_state_machine__11583__auto__);

(statearr_12960[(1)] = (1));

return statearr_12960;
});
var cljs$core$async$mult_$_state_machine__11583__auto____1 = (function (state_12876){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_12876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e12961){if((e12961 instanceof Object)){
var ex__11586__auto__ = e12961;
var statearr_12962_13019 = state_12876;
(statearr_12962_13019[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13020 = state_12876;
state_12876 = G__13020;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11583__auto__ = function(state_12876){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11583__auto____1.call(this,state_12876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11583__auto____0;
cljs$core$async$mult_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11583__auto____1;
return cljs$core$async$mult_$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___12964,cs,m,dchan,dctr,done))
})();
var state__11696__auto__ = (function (){var statearr_12963 = f__11695__auto__.call(null);
(statearr_12963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___12964);

return statearr_12963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___12964,cs,m,dchan,dctr,done))
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
var args13021 = [];
var len__6044__auto___13024 = arguments.length;
var i__6045__auto___13025 = (0);
while(true){
if((i__6045__auto___13025 < len__6044__auto___13024)){
args13021.push((arguments[i__6045__auto___13025]));

var G__13026 = (i__6045__auto___13025 + (1));
i__6045__auto___13025 = G__13026;
continue;
} else {
}
break;
}

var G__13023 = args13021.length;
switch (G__13023) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13021.length)].join('')));

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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,ch);
} else {
var m__5642__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,ch);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,ch);
} else {
var m__5642__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,ch);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m);
} else {
var m__5642__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,state_map);
} else {
var m__5642__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,state_map);
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
var x__5641__auto__ = (((m == null))?null:m);
var m__5642__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,m,mode);
} else {
var m__5642__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___13038 = arguments.length;
var i__6045__auto___13039 = (0);
while(true){
if((i__6045__auto___13039 < len__6044__auto___13038)){
args__6051__auto__.push((arguments[i__6045__auto___13039]));

var G__13040 = (i__6045__auto___13039 + (1));
i__6045__auto___13039 = G__13040;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((3) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6052__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13032){
var map__13033 = p__13032;
var map__13033__$1 = ((((!((map__13033 == null)))?((((map__13033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13033):map__13033);
var opts = map__13033__$1;
var statearr_13035_13041 = state;
(statearr_13035_13041[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13033,map__13033__$1,opts){
return (function (val){
var statearr_13036_13042 = state;
(statearr_13036_13042[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13033,map__13033__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13037_13043 = state;
(statearr_13037_13043[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13028){
var G__13029 = cljs.core.first.call(null,seq13028);
var seq13028__$1 = cljs.core.next.call(null,seq13028);
var G__13030 = cljs.core.first.call(null,seq13028__$1);
var seq13028__$2 = cljs.core.next.call(null,seq13028__$1);
var G__13031 = cljs.core.first.call(null,seq13028__$2);
var seq13028__$3 = cljs.core.next.call(null,seq13028__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13029,G__13030,G__13031,seq13028__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13207 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13208){
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
this.meta13208 = meta13208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13209,meta13208__$1){
var self__ = this;
var _13209__$1 = this;
return (new cljs.core.async.t_cljs$core$async13207(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13208__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13209){
var self__ = this;
var _13209__$1 = this;
return self__.meta13208;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13207.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13208","meta13208",1259608997,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13207";

cljs.core.async.t_cljs$core$async13207.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13207");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13207 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13208){
return (new cljs.core.async.t_cljs$core$async13207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13208));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13207(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11694__auto___13370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13307){
var state_val_13308 = (state_13307[(1)]);
if((state_val_13308 === (7))){
var inst_13225 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
var statearr_13309_13371 = state_13307__$1;
(statearr_13309_13371[(2)] = inst_13225);

(statearr_13309_13371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (20))){
var inst_13237 = (state_13307[(7)]);
var state_13307__$1 = state_13307;
var statearr_13310_13372 = state_13307__$1;
(statearr_13310_13372[(2)] = inst_13237);

(statearr_13310_13372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (27))){
var state_13307__$1 = state_13307;
var statearr_13311_13373 = state_13307__$1;
(statearr_13311_13373[(2)] = null);

(statearr_13311_13373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (1))){
var inst_13213 = (state_13307[(8)]);
var inst_13213__$1 = calc_state.call(null);
var inst_13215 = (inst_13213__$1 == null);
var inst_13216 = cljs.core.not.call(null,inst_13215);
var state_13307__$1 = (function (){var statearr_13312 = state_13307;
(statearr_13312[(8)] = inst_13213__$1);

return statearr_13312;
})();
if(inst_13216){
var statearr_13313_13374 = state_13307__$1;
(statearr_13313_13374[(1)] = (2));

} else {
var statearr_13314_13375 = state_13307__$1;
(statearr_13314_13375[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (24))){
var inst_13267 = (state_13307[(9)]);
var inst_13281 = (state_13307[(10)]);
var inst_13260 = (state_13307[(11)]);
var inst_13281__$1 = inst_13260.call(null,inst_13267);
var state_13307__$1 = (function (){var statearr_13315 = state_13307;
(statearr_13315[(10)] = inst_13281__$1);

return statearr_13315;
})();
if(cljs.core.truth_(inst_13281__$1)){
var statearr_13316_13376 = state_13307__$1;
(statearr_13316_13376[(1)] = (29));

} else {
var statearr_13317_13377 = state_13307__$1;
(statearr_13317_13377[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (4))){
var inst_13228 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13228)){
var statearr_13318_13378 = state_13307__$1;
(statearr_13318_13378[(1)] = (8));

} else {
var statearr_13319_13379 = state_13307__$1;
(statearr_13319_13379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (15))){
var inst_13254 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13254)){
var statearr_13320_13380 = state_13307__$1;
(statearr_13320_13380[(1)] = (19));

} else {
var statearr_13321_13381 = state_13307__$1;
(statearr_13321_13381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (21))){
var inst_13259 = (state_13307[(12)]);
var inst_13259__$1 = (state_13307[(2)]);
var inst_13260 = cljs.core.get.call(null,inst_13259__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13261 = cljs.core.get.call(null,inst_13259__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13262 = cljs.core.get.call(null,inst_13259__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13307__$1 = (function (){var statearr_13322 = state_13307;
(statearr_13322[(12)] = inst_13259__$1);

(statearr_13322[(13)] = inst_13261);

(statearr_13322[(11)] = inst_13260);

return statearr_13322;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13307__$1,(22),inst_13262);
} else {
if((state_val_13308 === (31))){
var inst_13289 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13289)){
var statearr_13323_13382 = state_13307__$1;
(statearr_13323_13382[(1)] = (32));

} else {
var statearr_13324_13383 = state_13307__$1;
(statearr_13324_13383[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (32))){
var inst_13266 = (state_13307[(14)]);
var state_13307__$1 = state_13307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13307__$1,(35),out,inst_13266);
} else {
if((state_val_13308 === (33))){
var inst_13259 = (state_13307[(12)]);
var inst_13237 = inst_13259;
var state_13307__$1 = (function (){var statearr_13325 = state_13307;
(statearr_13325[(7)] = inst_13237);

return statearr_13325;
})();
var statearr_13326_13384 = state_13307__$1;
(statearr_13326_13384[(2)] = null);

(statearr_13326_13384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (13))){
var inst_13237 = (state_13307[(7)]);
var inst_13244 = inst_13237.cljs$lang$protocol_mask$partition0$;
var inst_13245 = (inst_13244 & (64));
var inst_13246 = inst_13237.cljs$core$ISeq$;
var inst_13247 = (inst_13245) || (inst_13246);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13247)){
var statearr_13327_13385 = state_13307__$1;
(statearr_13327_13385[(1)] = (16));

} else {
var statearr_13328_13386 = state_13307__$1;
(statearr_13328_13386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (22))){
var inst_13267 = (state_13307[(9)]);
var inst_13266 = (state_13307[(14)]);
var inst_13265 = (state_13307[(2)]);
var inst_13266__$1 = cljs.core.nth.call(null,inst_13265,(0),null);
var inst_13267__$1 = cljs.core.nth.call(null,inst_13265,(1),null);
var inst_13268 = (inst_13266__$1 == null);
var inst_13269 = cljs.core._EQ_.call(null,inst_13267__$1,change);
var inst_13270 = (inst_13268) || (inst_13269);
var state_13307__$1 = (function (){var statearr_13329 = state_13307;
(statearr_13329[(9)] = inst_13267__$1);

(statearr_13329[(14)] = inst_13266__$1);

return statearr_13329;
})();
if(cljs.core.truth_(inst_13270)){
var statearr_13330_13387 = state_13307__$1;
(statearr_13330_13387[(1)] = (23));

} else {
var statearr_13331_13388 = state_13307__$1;
(statearr_13331_13388[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (36))){
var inst_13259 = (state_13307[(12)]);
var inst_13237 = inst_13259;
var state_13307__$1 = (function (){var statearr_13332 = state_13307;
(statearr_13332[(7)] = inst_13237);

return statearr_13332;
})();
var statearr_13333_13389 = state_13307__$1;
(statearr_13333_13389[(2)] = null);

(statearr_13333_13389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (29))){
var inst_13281 = (state_13307[(10)]);
var state_13307__$1 = state_13307;
var statearr_13334_13390 = state_13307__$1;
(statearr_13334_13390[(2)] = inst_13281);

(statearr_13334_13390[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (6))){
var state_13307__$1 = state_13307;
var statearr_13335_13391 = state_13307__$1;
(statearr_13335_13391[(2)] = false);

(statearr_13335_13391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (28))){
var inst_13277 = (state_13307[(2)]);
var inst_13278 = calc_state.call(null);
var inst_13237 = inst_13278;
var state_13307__$1 = (function (){var statearr_13336 = state_13307;
(statearr_13336[(7)] = inst_13237);

(statearr_13336[(15)] = inst_13277);

return statearr_13336;
})();
var statearr_13337_13392 = state_13307__$1;
(statearr_13337_13392[(2)] = null);

(statearr_13337_13392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (25))){
var inst_13303 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
var statearr_13338_13393 = state_13307__$1;
(statearr_13338_13393[(2)] = inst_13303);

(statearr_13338_13393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (34))){
var inst_13301 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
var statearr_13339_13394 = state_13307__$1;
(statearr_13339_13394[(2)] = inst_13301);

(statearr_13339_13394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (17))){
var state_13307__$1 = state_13307;
var statearr_13340_13395 = state_13307__$1;
(statearr_13340_13395[(2)] = false);

(statearr_13340_13395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (3))){
var state_13307__$1 = state_13307;
var statearr_13341_13396 = state_13307__$1;
(statearr_13341_13396[(2)] = false);

(statearr_13341_13396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (12))){
var inst_13305 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13307__$1,inst_13305);
} else {
if((state_val_13308 === (2))){
var inst_13213 = (state_13307[(8)]);
var inst_13218 = inst_13213.cljs$lang$protocol_mask$partition0$;
var inst_13219 = (inst_13218 & (64));
var inst_13220 = inst_13213.cljs$core$ISeq$;
var inst_13221 = (inst_13219) || (inst_13220);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13221)){
var statearr_13342_13397 = state_13307__$1;
(statearr_13342_13397[(1)] = (5));

} else {
var statearr_13343_13398 = state_13307__$1;
(statearr_13343_13398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (23))){
var inst_13266 = (state_13307[(14)]);
var inst_13272 = (inst_13266 == null);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13272)){
var statearr_13344_13399 = state_13307__$1;
(statearr_13344_13399[(1)] = (26));

} else {
var statearr_13345_13400 = state_13307__$1;
(statearr_13345_13400[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (35))){
var inst_13292 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
if(cljs.core.truth_(inst_13292)){
var statearr_13346_13401 = state_13307__$1;
(statearr_13346_13401[(1)] = (36));

} else {
var statearr_13347_13402 = state_13307__$1;
(statearr_13347_13402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (19))){
var inst_13237 = (state_13307[(7)]);
var inst_13256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13237);
var state_13307__$1 = state_13307;
var statearr_13348_13403 = state_13307__$1;
(statearr_13348_13403[(2)] = inst_13256);

(statearr_13348_13403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (11))){
var inst_13237 = (state_13307[(7)]);
var inst_13241 = (inst_13237 == null);
var inst_13242 = cljs.core.not.call(null,inst_13241);
var state_13307__$1 = state_13307;
if(inst_13242){
var statearr_13349_13404 = state_13307__$1;
(statearr_13349_13404[(1)] = (13));

} else {
var statearr_13350_13405 = state_13307__$1;
(statearr_13350_13405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (9))){
var inst_13213 = (state_13307[(8)]);
var state_13307__$1 = state_13307;
var statearr_13351_13406 = state_13307__$1;
(statearr_13351_13406[(2)] = inst_13213);

(statearr_13351_13406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (5))){
var state_13307__$1 = state_13307;
var statearr_13352_13407 = state_13307__$1;
(statearr_13352_13407[(2)] = true);

(statearr_13352_13407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (14))){
var state_13307__$1 = state_13307;
var statearr_13353_13408 = state_13307__$1;
(statearr_13353_13408[(2)] = false);

(statearr_13353_13408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (26))){
var inst_13267 = (state_13307[(9)]);
var inst_13274 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13267);
var state_13307__$1 = state_13307;
var statearr_13354_13409 = state_13307__$1;
(statearr_13354_13409[(2)] = inst_13274);

(statearr_13354_13409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (16))){
var state_13307__$1 = state_13307;
var statearr_13355_13410 = state_13307__$1;
(statearr_13355_13410[(2)] = true);

(statearr_13355_13410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (38))){
var inst_13297 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
var statearr_13356_13411 = state_13307__$1;
(statearr_13356_13411[(2)] = inst_13297);

(statearr_13356_13411[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (30))){
var inst_13261 = (state_13307[(13)]);
var inst_13267 = (state_13307[(9)]);
var inst_13260 = (state_13307[(11)]);
var inst_13284 = cljs.core.empty_QMARK_.call(null,inst_13260);
var inst_13285 = inst_13261.call(null,inst_13267);
var inst_13286 = cljs.core.not.call(null,inst_13285);
var inst_13287 = (inst_13284) && (inst_13286);
var state_13307__$1 = state_13307;
var statearr_13357_13412 = state_13307__$1;
(statearr_13357_13412[(2)] = inst_13287);

(statearr_13357_13412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (10))){
var inst_13213 = (state_13307[(8)]);
var inst_13233 = (state_13307[(2)]);
var inst_13234 = cljs.core.get.call(null,inst_13233,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13235 = cljs.core.get.call(null,inst_13233,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13236 = cljs.core.get.call(null,inst_13233,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13237 = inst_13213;
var state_13307__$1 = (function (){var statearr_13358 = state_13307;
(statearr_13358[(16)] = inst_13236);

(statearr_13358[(7)] = inst_13237);

(statearr_13358[(17)] = inst_13234);

(statearr_13358[(18)] = inst_13235);

return statearr_13358;
})();
var statearr_13359_13413 = state_13307__$1;
(statearr_13359_13413[(2)] = null);

(statearr_13359_13413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (18))){
var inst_13251 = (state_13307[(2)]);
var state_13307__$1 = state_13307;
var statearr_13360_13414 = state_13307__$1;
(statearr_13360_13414[(2)] = inst_13251);

(statearr_13360_13414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (37))){
var state_13307__$1 = state_13307;
var statearr_13361_13415 = state_13307__$1;
(statearr_13361_13415[(2)] = null);

(statearr_13361_13415[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13308 === (8))){
var inst_13213 = (state_13307[(8)]);
var inst_13230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13213);
var state_13307__$1 = state_13307;
var statearr_13362_13416 = state_13307__$1;
(statearr_13362_13416[(2)] = inst_13230);

(statearr_13362_13416[(1)] = (10));


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
});})(c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11582__auto__,c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11583__auto__ = null;
var cljs$core$async$mix_$_state_machine__11583__auto____0 = (function (){
var statearr_13366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13366[(0)] = cljs$core$async$mix_$_state_machine__11583__auto__);

(statearr_13366[(1)] = (1));

return statearr_13366;
});
var cljs$core$async$mix_$_state_machine__11583__auto____1 = (function (state_13307){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object)){
var ex__11586__auto__ = e13367;
var statearr_13368_13417 = state_13307;
(statearr_13368_13417[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13418 = state_13307;
state_13307 = G__13418;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11583__auto__ = function(state_13307){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11583__auto____1.call(this,state_13307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11583__auto____0;
cljs$core$async$mix_$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11583__auto____1;
return cljs$core$async$mix_$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11696__auto__ = (function (){var statearr_13369 = f__11695__auto__.call(null);
(statearr_13369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13370);

return statearr_13369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13370,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5641__auto__ = (((p == null))?null:p);
var m__5642__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5642__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5641__auto__ = (((p == null))?null:p);
var m__5642__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,p,v,ch);
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args13419 = [];
var len__6044__auto___13422 = arguments.length;
var i__6045__auto___13423 = (0);
while(true){
if((i__6045__auto___13423 < len__6044__auto___13422)){
args13419.push((arguments[i__6045__auto___13423]));

var G__13424 = (i__6045__auto___13423 + (1));
i__6045__auto___13423 = G__13424;
continue;
} else {
}
break;
}

var G__13421 = args13419.length;
switch (G__13421) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13419.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5641__auto__ = (((p == null))?null:p);
var m__5642__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,p);
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,p);
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
var x__5641__auto__ = (((p == null))?null:p);
var m__5642__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return m__5642__auto__.call(null,p,v);
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return m__5642__auto____$1.call(null,p,v);
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
var args13427 = [];
var len__6044__auto___13552 = arguments.length;
var i__6045__auto___13553 = (0);
while(true){
if((i__6045__auto___13553 < len__6044__auto___13552)){
args13427.push((arguments[i__6045__auto___13553]));

var G__13554 = (i__6045__auto___13553 + (1));
i__6045__auto___13553 = G__13554;
continue;
} else {
}
break;
}

var G__13429 = args13427.length;
switch (G__13429) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13427.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4986__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4986__auto__,mults){
return (function (p1__13426_SHARP_){
if(cljs.core.truth_(p1__13426_SHARP_.call(null,topic))){
return p1__13426_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4986__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13430 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13431){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13431 = meta13431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13432,meta13431__$1){
var self__ = this;
var _13432__$1 = this;
return (new cljs.core.async.t_cljs$core$async13430(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13431__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13432){
var self__ = this;
var _13432__$1 = this;
return self__.meta13431;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13431","meta13431",1022855735,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13430";

cljs.core.async.t_cljs$core$async13430.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13430");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13430 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13431){
return (new cljs.core.async.t_cljs$core$async13430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13431));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13430(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11694__auto___13556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13556,mults,ensure_mult,p){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13556,mults,ensure_mult,p){
return (function (state_13504){
var state_val_13505 = (state_13504[(1)]);
if((state_val_13505 === (7))){
var inst_13500 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13506_13557 = state_13504__$1;
(statearr_13506_13557[(2)] = inst_13500);

(statearr_13506_13557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (20))){
var state_13504__$1 = state_13504;
var statearr_13507_13558 = state_13504__$1;
(statearr_13507_13558[(2)] = null);

(statearr_13507_13558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (1))){
var state_13504__$1 = state_13504;
var statearr_13508_13559 = state_13504__$1;
(statearr_13508_13559[(2)] = null);

(statearr_13508_13559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (24))){
var inst_13483 = (state_13504[(7)]);
var inst_13492 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13483);
var state_13504__$1 = state_13504;
var statearr_13509_13560 = state_13504__$1;
(statearr_13509_13560[(2)] = inst_13492);

(statearr_13509_13560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (4))){
var inst_13435 = (state_13504[(8)]);
var inst_13435__$1 = (state_13504[(2)]);
var inst_13436 = (inst_13435__$1 == null);
var state_13504__$1 = (function (){var statearr_13510 = state_13504;
(statearr_13510[(8)] = inst_13435__$1);

return statearr_13510;
})();
if(cljs.core.truth_(inst_13436)){
var statearr_13511_13561 = state_13504__$1;
(statearr_13511_13561[(1)] = (5));

} else {
var statearr_13512_13562 = state_13504__$1;
(statearr_13512_13562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (15))){
var inst_13477 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13513_13563 = state_13504__$1;
(statearr_13513_13563[(2)] = inst_13477);

(statearr_13513_13563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (21))){
var inst_13497 = (state_13504[(2)]);
var state_13504__$1 = (function (){var statearr_13514 = state_13504;
(statearr_13514[(9)] = inst_13497);

return statearr_13514;
})();
var statearr_13515_13564 = state_13504__$1;
(statearr_13515_13564[(2)] = null);

(statearr_13515_13564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (13))){
var inst_13459 = (state_13504[(10)]);
var inst_13461 = cljs.core.chunked_seq_QMARK_.call(null,inst_13459);
var state_13504__$1 = state_13504;
if(inst_13461){
var statearr_13516_13565 = state_13504__$1;
(statearr_13516_13565[(1)] = (16));

} else {
var statearr_13517_13566 = state_13504__$1;
(statearr_13517_13566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (22))){
var inst_13489 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13489)){
var statearr_13518_13567 = state_13504__$1;
(statearr_13518_13567[(1)] = (23));

} else {
var statearr_13519_13568 = state_13504__$1;
(statearr_13519_13568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (6))){
var inst_13483 = (state_13504[(7)]);
var inst_13435 = (state_13504[(8)]);
var inst_13485 = (state_13504[(11)]);
var inst_13483__$1 = topic_fn.call(null,inst_13435);
var inst_13484 = cljs.core.deref.call(null,mults);
var inst_13485__$1 = cljs.core.get.call(null,inst_13484,inst_13483__$1);
var state_13504__$1 = (function (){var statearr_13520 = state_13504;
(statearr_13520[(7)] = inst_13483__$1);

(statearr_13520[(11)] = inst_13485__$1);

return statearr_13520;
})();
if(cljs.core.truth_(inst_13485__$1)){
var statearr_13521_13569 = state_13504__$1;
(statearr_13521_13569[(1)] = (19));

} else {
var statearr_13522_13570 = state_13504__$1;
(statearr_13522_13570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (25))){
var inst_13494 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13523_13571 = state_13504__$1;
(statearr_13523_13571[(2)] = inst_13494);

(statearr_13523_13571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (17))){
var inst_13459 = (state_13504[(10)]);
var inst_13468 = cljs.core.first.call(null,inst_13459);
var inst_13469 = cljs.core.async.muxch_STAR_.call(null,inst_13468);
var inst_13470 = cljs.core.async.close_BANG_.call(null,inst_13469);
var inst_13471 = cljs.core.next.call(null,inst_13459);
var inst_13445 = inst_13471;
var inst_13446 = null;
var inst_13447 = (0);
var inst_13448 = (0);
var state_13504__$1 = (function (){var statearr_13524 = state_13504;
(statearr_13524[(12)] = inst_13446);

(statearr_13524[(13)] = inst_13447);

(statearr_13524[(14)] = inst_13445);

(statearr_13524[(15)] = inst_13448);

(statearr_13524[(16)] = inst_13470);

return statearr_13524;
})();
var statearr_13525_13572 = state_13504__$1;
(statearr_13525_13572[(2)] = null);

(statearr_13525_13572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (3))){
var inst_13502 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13504__$1,inst_13502);
} else {
if((state_val_13505 === (12))){
var inst_13479 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13526_13573 = state_13504__$1;
(statearr_13526_13573[(2)] = inst_13479);

(statearr_13526_13573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (2))){
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13504__$1,(4),ch);
} else {
if((state_val_13505 === (23))){
var state_13504__$1 = state_13504;
var statearr_13527_13574 = state_13504__$1;
(statearr_13527_13574[(2)] = null);

(statearr_13527_13574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (19))){
var inst_13435 = (state_13504[(8)]);
var inst_13485 = (state_13504[(11)]);
var inst_13487 = cljs.core.async.muxch_STAR_.call(null,inst_13485);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13504__$1,(22),inst_13487,inst_13435);
} else {
if((state_val_13505 === (11))){
var inst_13445 = (state_13504[(14)]);
var inst_13459 = (state_13504[(10)]);
var inst_13459__$1 = cljs.core.seq.call(null,inst_13445);
var state_13504__$1 = (function (){var statearr_13528 = state_13504;
(statearr_13528[(10)] = inst_13459__$1);

return statearr_13528;
})();
if(inst_13459__$1){
var statearr_13529_13575 = state_13504__$1;
(statearr_13529_13575[(1)] = (13));

} else {
var statearr_13530_13576 = state_13504__$1;
(statearr_13530_13576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (9))){
var inst_13481 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13531_13577 = state_13504__$1;
(statearr_13531_13577[(2)] = inst_13481);

(statearr_13531_13577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (5))){
var inst_13442 = cljs.core.deref.call(null,mults);
var inst_13443 = cljs.core.vals.call(null,inst_13442);
var inst_13444 = cljs.core.seq.call(null,inst_13443);
var inst_13445 = inst_13444;
var inst_13446 = null;
var inst_13447 = (0);
var inst_13448 = (0);
var state_13504__$1 = (function (){var statearr_13532 = state_13504;
(statearr_13532[(12)] = inst_13446);

(statearr_13532[(13)] = inst_13447);

(statearr_13532[(14)] = inst_13445);

(statearr_13532[(15)] = inst_13448);

return statearr_13532;
})();
var statearr_13533_13578 = state_13504__$1;
(statearr_13533_13578[(2)] = null);

(statearr_13533_13578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (14))){
var state_13504__$1 = state_13504;
var statearr_13537_13579 = state_13504__$1;
(statearr_13537_13579[(2)] = null);

(statearr_13537_13579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (16))){
var inst_13459 = (state_13504[(10)]);
var inst_13463 = cljs.core.chunk_first.call(null,inst_13459);
var inst_13464 = cljs.core.chunk_rest.call(null,inst_13459);
var inst_13465 = cljs.core.count.call(null,inst_13463);
var inst_13445 = inst_13464;
var inst_13446 = inst_13463;
var inst_13447 = inst_13465;
var inst_13448 = (0);
var state_13504__$1 = (function (){var statearr_13538 = state_13504;
(statearr_13538[(12)] = inst_13446);

(statearr_13538[(13)] = inst_13447);

(statearr_13538[(14)] = inst_13445);

(statearr_13538[(15)] = inst_13448);

return statearr_13538;
})();
var statearr_13539_13580 = state_13504__$1;
(statearr_13539_13580[(2)] = null);

(statearr_13539_13580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (10))){
var inst_13446 = (state_13504[(12)]);
var inst_13447 = (state_13504[(13)]);
var inst_13445 = (state_13504[(14)]);
var inst_13448 = (state_13504[(15)]);
var inst_13453 = cljs.core._nth.call(null,inst_13446,inst_13448);
var inst_13454 = cljs.core.async.muxch_STAR_.call(null,inst_13453);
var inst_13455 = cljs.core.async.close_BANG_.call(null,inst_13454);
var inst_13456 = (inst_13448 + (1));
var tmp13534 = inst_13446;
var tmp13535 = inst_13447;
var tmp13536 = inst_13445;
var inst_13445__$1 = tmp13536;
var inst_13446__$1 = tmp13534;
var inst_13447__$1 = tmp13535;
var inst_13448__$1 = inst_13456;
var state_13504__$1 = (function (){var statearr_13540 = state_13504;
(statearr_13540[(17)] = inst_13455);

(statearr_13540[(12)] = inst_13446__$1);

(statearr_13540[(13)] = inst_13447__$1);

(statearr_13540[(14)] = inst_13445__$1);

(statearr_13540[(15)] = inst_13448__$1);

return statearr_13540;
})();
var statearr_13541_13581 = state_13504__$1;
(statearr_13541_13581[(2)] = null);

(statearr_13541_13581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (18))){
var inst_13474 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13542_13582 = state_13504__$1;
(statearr_13542_13582[(2)] = inst_13474);

(statearr_13542_13582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (8))){
var inst_13447 = (state_13504[(13)]);
var inst_13448 = (state_13504[(15)]);
var inst_13450 = (inst_13448 < inst_13447);
var inst_13451 = inst_13450;
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13451)){
var statearr_13543_13583 = state_13504__$1;
(statearr_13543_13583[(1)] = (10));

} else {
var statearr_13544_13584 = state_13504__$1;
(statearr_13544_13584[(1)] = (11));

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
});})(c__11694__auto___13556,mults,ensure_mult,p))
;
return ((function (switch__11582__auto__,c__11694__auto___13556,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_13548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13548[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_13548[(1)] = (1));

return statearr_13548;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_13504){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13549){if((e13549 instanceof Object)){
var ex__11586__auto__ = e13549;
var statearr_13550_13585 = state_13504;
(statearr_13550_13585[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13586 = state_13504;
state_13504 = G__13586;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_13504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_13504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13556,mults,ensure_mult,p))
})();
var state__11696__auto__ = (function (){var statearr_13551 = f__11695__auto__.call(null);
(statearr_13551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13556);

return statearr_13551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13556,mults,ensure_mult,p))
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
var args13587 = [];
var len__6044__auto___13590 = arguments.length;
var i__6045__auto___13591 = (0);
while(true){
if((i__6045__auto___13591 < len__6044__auto___13590)){
args13587.push((arguments[i__6045__auto___13591]));

var G__13592 = (i__6045__auto___13591 + (1));
i__6045__auto___13591 = G__13592;
continue;
} else {
}
break;
}

var G__13589 = args13587.length;
switch (G__13589) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13587.length)].join('')));

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
var args13594 = [];
var len__6044__auto___13597 = arguments.length;
var i__6045__auto___13598 = (0);
while(true){
if((i__6045__auto___13598 < len__6044__auto___13597)){
args13594.push((arguments[i__6045__auto___13598]));

var G__13599 = (i__6045__auto___13598 + (1));
i__6045__auto___13598 = G__13599;
continue;
} else {
}
break;
}

var G__13596 = args13594.length;
switch (G__13596) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13594.length)].join('')));

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
var args13601 = [];
var len__6044__auto___13672 = arguments.length;
var i__6045__auto___13673 = (0);
while(true){
if((i__6045__auto___13673 < len__6044__auto___13672)){
args13601.push((arguments[i__6045__auto___13673]));

var G__13674 = (i__6045__auto___13673 + (1));
i__6045__auto___13673 = G__13674;
continue;
} else {
}
break;
}

var G__13603 = args13601.length;
switch (G__13603) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13601.length)].join('')));

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
var c__11694__auto___13676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13642){
var state_val_13643 = (state_13642[(1)]);
if((state_val_13643 === (7))){
var state_13642__$1 = state_13642;
var statearr_13644_13677 = state_13642__$1;
(statearr_13644_13677[(2)] = null);

(statearr_13644_13677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (1))){
var state_13642__$1 = state_13642;
var statearr_13645_13678 = state_13642__$1;
(statearr_13645_13678[(2)] = null);

(statearr_13645_13678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (4))){
var inst_13606 = (state_13642[(7)]);
var inst_13608 = (inst_13606 < cnt);
var state_13642__$1 = state_13642;
if(cljs.core.truth_(inst_13608)){
var statearr_13646_13679 = state_13642__$1;
(statearr_13646_13679[(1)] = (6));

} else {
var statearr_13647_13680 = state_13642__$1;
(statearr_13647_13680[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (15))){
var inst_13638 = (state_13642[(2)]);
var state_13642__$1 = state_13642;
var statearr_13648_13681 = state_13642__$1;
(statearr_13648_13681[(2)] = inst_13638);

(statearr_13648_13681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (13))){
var inst_13631 = cljs.core.async.close_BANG_.call(null,out);
var state_13642__$1 = state_13642;
var statearr_13649_13682 = state_13642__$1;
(statearr_13649_13682[(2)] = inst_13631);

(statearr_13649_13682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (6))){
var state_13642__$1 = state_13642;
var statearr_13650_13683 = state_13642__$1;
(statearr_13650_13683[(2)] = null);

(statearr_13650_13683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (3))){
var inst_13640 = (state_13642[(2)]);
var state_13642__$1 = state_13642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13642__$1,inst_13640);
} else {
if((state_val_13643 === (12))){
var inst_13628 = (state_13642[(8)]);
var inst_13628__$1 = (state_13642[(2)]);
var inst_13629 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13628__$1);
var state_13642__$1 = (function (){var statearr_13651 = state_13642;
(statearr_13651[(8)] = inst_13628__$1);

return statearr_13651;
})();
if(cljs.core.truth_(inst_13629)){
var statearr_13652_13684 = state_13642__$1;
(statearr_13652_13684[(1)] = (13));

} else {
var statearr_13653_13685 = state_13642__$1;
(statearr_13653_13685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (2))){
var inst_13605 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13606 = (0);
var state_13642__$1 = (function (){var statearr_13654 = state_13642;
(statearr_13654[(7)] = inst_13606);

(statearr_13654[(9)] = inst_13605);

return statearr_13654;
})();
var statearr_13655_13686 = state_13642__$1;
(statearr_13655_13686[(2)] = null);

(statearr_13655_13686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (11))){
var inst_13606 = (state_13642[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13642,(10),Object,null,(9));
var inst_13615 = chs__$1.call(null,inst_13606);
var inst_13616 = done.call(null,inst_13606);
var inst_13617 = cljs.core.async.take_BANG_.call(null,inst_13615,inst_13616);
var state_13642__$1 = state_13642;
var statearr_13656_13687 = state_13642__$1;
(statearr_13656_13687[(2)] = inst_13617);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (9))){
var inst_13606 = (state_13642[(7)]);
var inst_13619 = (state_13642[(2)]);
var inst_13620 = (inst_13606 + (1));
var inst_13606__$1 = inst_13620;
var state_13642__$1 = (function (){var statearr_13657 = state_13642;
(statearr_13657[(7)] = inst_13606__$1);

(statearr_13657[(10)] = inst_13619);

return statearr_13657;
})();
var statearr_13658_13688 = state_13642__$1;
(statearr_13658_13688[(2)] = null);

(statearr_13658_13688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (5))){
var inst_13626 = (state_13642[(2)]);
var state_13642__$1 = (function (){var statearr_13659 = state_13642;
(statearr_13659[(11)] = inst_13626);

return statearr_13659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13642__$1,(12),dchan);
} else {
if((state_val_13643 === (14))){
var inst_13628 = (state_13642[(8)]);
var inst_13633 = cljs.core.apply.call(null,f,inst_13628);
var state_13642__$1 = state_13642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13642__$1,(16),out,inst_13633);
} else {
if((state_val_13643 === (16))){
var inst_13635 = (state_13642[(2)]);
var state_13642__$1 = (function (){var statearr_13660 = state_13642;
(statearr_13660[(12)] = inst_13635);

return statearr_13660;
})();
var statearr_13661_13689 = state_13642__$1;
(statearr_13661_13689[(2)] = null);

(statearr_13661_13689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (10))){
var inst_13610 = (state_13642[(2)]);
var inst_13611 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13642__$1 = (function (){var statearr_13662 = state_13642;
(statearr_13662[(13)] = inst_13610);

return statearr_13662;
})();
var statearr_13663_13690 = state_13642__$1;
(statearr_13663_13690[(2)] = inst_13611);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13643 === (8))){
var inst_13624 = (state_13642[(2)]);
var state_13642__$1 = state_13642;
var statearr_13664_13691 = state_13642__$1;
(statearr_13664_13691[(2)] = inst_13624);

(statearr_13664_13691[(1)] = (5));


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
});})(c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11582__auto__,c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_13668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13668[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_13668[(1)] = (1));

return statearr_13668;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_13642){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13669){if((e13669 instanceof Object)){
var ex__11586__auto__ = e13669;
var statearr_13670_13692 = state_13642;
(statearr_13670_13692[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13693 = state_13642;
state_13642 = G__13693;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_13642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_13642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11696__auto__ = (function (){var statearr_13671 = f__11695__auto__.call(null);
(statearr_13671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13676);

return statearr_13671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13676,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13695 = [];
var len__6044__auto___13751 = arguments.length;
var i__6045__auto___13752 = (0);
while(true){
if((i__6045__auto___13752 < len__6044__auto___13751)){
args13695.push((arguments[i__6045__auto___13752]));

var G__13753 = (i__6045__auto___13752 + (1));
i__6045__auto___13752 = G__13753;
continue;
} else {
}
break;
}

var G__13697 = args13695.length;
switch (G__13697) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13695.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___13755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13755,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13755,out){
return (function (state_13727){
var state_val_13728 = (state_13727[(1)]);
if((state_val_13728 === (7))){
var inst_13706 = (state_13727[(7)]);
var inst_13707 = (state_13727[(8)]);
var inst_13706__$1 = (state_13727[(2)]);
var inst_13707__$1 = cljs.core.nth.call(null,inst_13706__$1,(0),null);
var inst_13708 = cljs.core.nth.call(null,inst_13706__$1,(1),null);
var inst_13709 = (inst_13707__$1 == null);
var state_13727__$1 = (function (){var statearr_13729 = state_13727;
(statearr_13729[(9)] = inst_13708);

(statearr_13729[(7)] = inst_13706__$1);

(statearr_13729[(8)] = inst_13707__$1);

return statearr_13729;
})();
if(cljs.core.truth_(inst_13709)){
var statearr_13730_13756 = state_13727__$1;
(statearr_13730_13756[(1)] = (8));

} else {
var statearr_13731_13757 = state_13727__$1;
(statearr_13731_13757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (1))){
var inst_13698 = cljs.core.vec.call(null,chs);
var inst_13699 = inst_13698;
var state_13727__$1 = (function (){var statearr_13732 = state_13727;
(statearr_13732[(10)] = inst_13699);

return statearr_13732;
})();
var statearr_13733_13758 = state_13727__$1;
(statearr_13733_13758[(2)] = null);

(statearr_13733_13758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (4))){
var inst_13699 = (state_13727[(10)]);
var state_13727__$1 = state_13727;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13727__$1,(7),inst_13699);
} else {
if((state_val_13728 === (6))){
var inst_13723 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
var statearr_13734_13759 = state_13727__$1;
(statearr_13734_13759[(2)] = inst_13723);

(statearr_13734_13759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (3))){
var inst_13725 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13727__$1,inst_13725);
} else {
if((state_val_13728 === (2))){
var inst_13699 = (state_13727[(10)]);
var inst_13701 = cljs.core.count.call(null,inst_13699);
var inst_13702 = (inst_13701 > (0));
var state_13727__$1 = state_13727;
if(cljs.core.truth_(inst_13702)){
var statearr_13736_13760 = state_13727__$1;
(statearr_13736_13760[(1)] = (4));

} else {
var statearr_13737_13761 = state_13727__$1;
(statearr_13737_13761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (11))){
var inst_13699 = (state_13727[(10)]);
var inst_13716 = (state_13727[(2)]);
var tmp13735 = inst_13699;
var inst_13699__$1 = tmp13735;
var state_13727__$1 = (function (){var statearr_13738 = state_13727;
(statearr_13738[(10)] = inst_13699__$1);

(statearr_13738[(11)] = inst_13716);

return statearr_13738;
})();
var statearr_13739_13762 = state_13727__$1;
(statearr_13739_13762[(2)] = null);

(statearr_13739_13762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (9))){
var inst_13707 = (state_13727[(8)]);
var state_13727__$1 = state_13727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13727__$1,(11),out,inst_13707);
} else {
if((state_val_13728 === (5))){
var inst_13721 = cljs.core.async.close_BANG_.call(null,out);
var state_13727__$1 = state_13727;
var statearr_13740_13763 = state_13727__$1;
(statearr_13740_13763[(2)] = inst_13721);

(statearr_13740_13763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (10))){
var inst_13719 = (state_13727[(2)]);
var state_13727__$1 = state_13727;
var statearr_13741_13764 = state_13727__$1;
(statearr_13741_13764[(2)] = inst_13719);

(statearr_13741_13764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13728 === (8))){
var inst_13708 = (state_13727[(9)]);
var inst_13706 = (state_13727[(7)]);
var inst_13699 = (state_13727[(10)]);
var inst_13707 = (state_13727[(8)]);
var inst_13711 = (function (){var cs = inst_13699;
var vec__13704 = inst_13706;
var v = inst_13707;
var c = inst_13708;
return ((function (cs,vec__13704,v,c,inst_13708,inst_13706,inst_13699,inst_13707,state_val_13728,c__11694__auto___13755,out){
return (function (p1__13694_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13694_SHARP_);
});
;})(cs,vec__13704,v,c,inst_13708,inst_13706,inst_13699,inst_13707,state_val_13728,c__11694__auto___13755,out))
})();
var inst_13712 = cljs.core.filterv.call(null,inst_13711,inst_13699);
var inst_13699__$1 = inst_13712;
var state_13727__$1 = (function (){var statearr_13742 = state_13727;
(statearr_13742[(10)] = inst_13699__$1);

return statearr_13742;
})();
var statearr_13743_13765 = state_13727__$1;
(statearr_13743_13765[(2)] = null);

(statearr_13743_13765[(1)] = (2));


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
});})(c__11694__auto___13755,out))
;
return ((function (switch__11582__auto__,c__11694__auto___13755,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_13747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13747[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_13747[(1)] = (1));

return statearr_13747;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_13727){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13748){if((e13748 instanceof Object)){
var ex__11586__auto__ = e13748;
var statearr_13749_13766 = state_13727;
(statearr_13749_13766[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13767 = state_13727;
state_13727 = G__13767;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_13727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_13727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13755,out))
})();
var state__11696__auto__ = (function (){var statearr_13750 = f__11695__auto__.call(null);
(statearr_13750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13755);

return statearr_13750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13755,out))
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
var args13768 = [];
var len__6044__auto___13817 = arguments.length;
var i__6045__auto___13818 = (0);
while(true){
if((i__6045__auto___13818 < len__6044__auto___13817)){
args13768.push((arguments[i__6045__auto___13818]));

var G__13819 = (i__6045__auto___13818 + (1));
i__6045__auto___13818 = G__13819;
continue;
} else {
}
break;
}

var G__13770 = args13768.length;
switch (G__13770) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13768.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___13821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13821,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13821,out){
return (function (state_13794){
var state_val_13795 = (state_13794[(1)]);
if((state_val_13795 === (7))){
var inst_13776 = (state_13794[(7)]);
var inst_13776__$1 = (state_13794[(2)]);
var inst_13777 = (inst_13776__$1 == null);
var inst_13778 = cljs.core.not.call(null,inst_13777);
var state_13794__$1 = (function (){var statearr_13796 = state_13794;
(statearr_13796[(7)] = inst_13776__$1);

return statearr_13796;
})();
if(inst_13778){
var statearr_13797_13822 = state_13794__$1;
(statearr_13797_13822[(1)] = (8));

} else {
var statearr_13798_13823 = state_13794__$1;
(statearr_13798_13823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (1))){
var inst_13771 = (0);
var state_13794__$1 = (function (){var statearr_13799 = state_13794;
(statearr_13799[(8)] = inst_13771);

return statearr_13799;
})();
var statearr_13800_13824 = state_13794__$1;
(statearr_13800_13824[(2)] = null);

(statearr_13800_13824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (4))){
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13794__$1,(7),ch);
} else {
if((state_val_13795 === (6))){
var inst_13789 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
var statearr_13801_13825 = state_13794__$1;
(statearr_13801_13825[(2)] = inst_13789);

(statearr_13801_13825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (3))){
var inst_13791 = (state_13794[(2)]);
var inst_13792 = cljs.core.async.close_BANG_.call(null,out);
var state_13794__$1 = (function (){var statearr_13802 = state_13794;
(statearr_13802[(9)] = inst_13791);

return statearr_13802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13794__$1,inst_13792);
} else {
if((state_val_13795 === (2))){
var inst_13771 = (state_13794[(8)]);
var inst_13773 = (inst_13771 < n);
var state_13794__$1 = state_13794;
if(cljs.core.truth_(inst_13773)){
var statearr_13803_13826 = state_13794__$1;
(statearr_13803_13826[(1)] = (4));

} else {
var statearr_13804_13827 = state_13794__$1;
(statearr_13804_13827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (11))){
var inst_13771 = (state_13794[(8)]);
var inst_13781 = (state_13794[(2)]);
var inst_13782 = (inst_13771 + (1));
var inst_13771__$1 = inst_13782;
var state_13794__$1 = (function (){var statearr_13805 = state_13794;
(statearr_13805[(10)] = inst_13781);

(statearr_13805[(8)] = inst_13771__$1);

return statearr_13805;
})();
var statearr_13806_13828 = state_13794__$1;
(statearr_13806_13828[(2)] = null);

(statearr_13806_13828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (9))){
var state_13794__$1 = state_13794;
var statearr_13807_13829 = state_13794__$1;
(statearr_13807_13829[(2)] = null);

(statearr_13807_13829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (5))){
var state_13794__$1 = state_13794;
var statearr_13808_13830 = state_13794__$1;
(statearr_13808_13830[(2)] = null);

(statearr_13808_13830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (10))){
var inst_13786 = (state_13794[(2)]);
var state_13794__$1 = state_13794;
var statearr_13809_13831 = state_13794__$1;
(statearr_13809_13831[(2)] = inst_13786);

(statearr_13809_13831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13795 === (8))){
var inst_13776 = (state_13794[(7)]);
var state_13794__$1 = state_13794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13794__$1,(11),out,inst_13776);
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
});})(c__11694__auto___13821,out))
;
return ((function (switch__11582__auto__,c__11694__auto___13821,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_13813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13813[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_13813[(1)] = (1));

return statearr_13813;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_13794){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13814){if((e13814 instanceof Object)){
var ex__11586__auto__ = e13814;
var statearr_13815_13832 = state_13794;
(statearr_13815_13832[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13833 = state_13794;
state_13794 = G__13833;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_13794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_13794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13821,out))
})();
var state__11696__auto__ = (function (){var statearr_13816 = f__11695__auto__.call(null);
(statearr_13816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13821);

return statearr_13816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13821,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13841 = (function (map_LT_,f,ch,meta13842){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13842 = meta13842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13843,meta13842__$1){
var self__ = this;
var _13843__$1 = this;
return (new cljs.core.async.t_cljs$core$async13841(self__.map_LT_,self__.f,self__.ch,meta13842__$1));
});

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13843){
var self__ = this;
var _13843__$1 = this;
return self__.meta13842;
});

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13844 = (function (map_LT_,f,ch,meta13842,_,fn1,meta13845){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13842 = meta13842;
this._ = _;
this.fn1 = fn1;
this.meta13845 = meta13845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13846,meta13845__$1){
var self__ = this;
var _13846__$1 = this;
return (new cljs.core.async.t_cljs$core$async13844(self__.map_LT_,self__.f,self__.ch,self__.meta13842,self__._,self__.fn1,meta13845__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13846){
var self__ = this;
var _13846__$1 = this;
return self__.meta13845;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13834_SHARP_){
return f1.call(null,(((p1__13834_SHARP_ == null))?null:self__.f.call(null,p1__13834_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13844.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13842","meta13842",844829707,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13841","cljs.core.async/t_cljs$core$async13841",-515739389,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13845","meta13845",-815187015,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13844";

cljs.core.async.t_cljs$core$async13844.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13844");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13844 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13844(map_LT___$1,f__$1,ch__$1,meta13842__$1,___$2,fn1__$1,meta13845){
return (new cljs.core.async.t_cljs$core$async13844(map_LT___$1,f__$1,ch__$1,meta13842__$1,___$2,fn1__$1,meta13845));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13844(self__.map_LT_,self__.f,self__.ch,self__.meta13842,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4974__auto__ = ret;
if(cljs.core.truth_(and__4974__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4974__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13842","meta13842",844829707,null)], null);
});

cljs.core.async.t_cljs$core$async13841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13841";

cljs.core.async.t_cljs$core$async13841.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13841");
});

cljs.core.async.__GT_t_cljs$core$async13841 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13841(map_LT___$1,f__$1,ch__$1,meta13842){
return (new cljs.core.async.t_cljs$core$async13841(map_LT___$1,f__$1,ch__$1,meta13842));
});

}

return (new cljs.core.async.t_cljs$core$async13841(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13850 = (function (map_GT_,f,ch,meta13851){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13851 = meta13851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13852,meta13851__$1){
var self__ = this;
var _13852__$1 = this;
return (new cljs.core.async.t_cljs$core$async13850(self__.map_GT_,self__.f,self__.ch,meta13851__$1));
});

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13852){
var self__ = this;
var _13852__$1 = this;
return self__.meta13851;
});

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13851","meta13851",-562510346,null)], null);
});

cljs.core.async.t_cljs$core$async13850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13850";

cljs.core.async.t_cljs$core$async13850.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13850");
});

cljs.core.async.__GT_t_cljs$core$async13850 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13850(map_GT___$1,f__$1,ch__$1,meta13851){
return (new cljs.core.async.t_cljs$core$async13850(map_GT___$1,f__$1,ch__$1,meta13851));
});

}

return (new cljs.core.async.t_cljs$core$async13850(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13856 = (function (filter_GT_,p,ch,meta13857){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13857 = meta13857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13858,meta13857__$1){
var self__ = this;
var _13858__$1 = this;
return (new cljs.core.async.t_cljs$core$async13856(self__.filter_GT_,self__.p,self__.ch,meta13857__$1));
});

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13858){
var self__ = this;
var _13858__$1 = this;
return self__.meta13857;
});

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13857","meta13857",-1748867313,null)], null);
});

cljs.core.async.t_cljs$core$async13856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13856";

cljs.core.async.t_cljs$core$async13856.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write.call(null,writer__5585__auto__,"cljs.core.async/t_cljs$core$async13856");
});

cljs.core.async.__GT_t_cljs$core$async13856 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13856(filter_GT___$1,p__$1,ch__$1,meta13857){
return (new cljs.core.async.t_cljs$core$async13856(filter_GT___$1,p__$1,ch__$1,meta13857));
});

}

return (new cljs.core.async.t_cljs$core$async13856(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13859 = [];
var len__6044__auto___13903 = arguments.length;
var i__6045__auto___13904 = (0);
while(true){
if((i__6045__auto___13904 < len__6044__auto___13903)){
args13859.push((arguments[i__6045__auto___13904]));

var G__13905 = (i__6045__auto___13904 + (1));
i__6045__auto___13904 = G__13905;
continue;
} else {
}
break;
}

var G__13861 = args13859.length;
switch (G__13861) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13859.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___13907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___13907,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___13907,out){
return (function (state_13882){
var state_val_13883 = (state_13882[(1)]);
if((state_val_13883 === (7))){
var inst_13878 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13884_13908 = state_13882__$1;
(statearr_13884_13908[(2)] = inst_13878);

(statearr_13884_13908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (1))){
var state_13882__$1 = state_13882;
var statearr_13885_13909 = state_13882__$1;
(statearr_13885_13909[(2)] = null);

(statearr_13885_13909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (4))){
var inst_13864 = (state_13882[(7)]);
var inst_13864__$1 = (state_13882[(2)]);
var inst_13865 = (inst_13864__$1 == null);
var state_13882__$1 = (function (){var statearr_13886 = state_13882;
(statearr_13886[(7)] = inst_13864__$1);

return statearr_13886;
})();
if(cljs.core.truth_(inst_13865)){
var statearr_13887_13910 = state_13882__$1;
(statearr_13887_13910[(1)] = (5));

} else {
var statearr_13888_13911 = state_13882__$1;
(statearr_13888_13911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (6))){
var inst_13864 = (state_13882[(7)]);
var inst_13869 = p.call(null,inst_13864);
var state_13882__$1 = state_13882;
if(cljs.core.truth_(inst_13869)){
var statearr_13889_13912 = state_13882__$1;
(statearr_13889_13912[(1)] = (8));

} else {
var statearr_13890_13913 = state_13882__$1;
(statearr_13890_13913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (3))){
var inst_13880 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13882__$1,inst_13880);
} else {
if((state_val_13883 === (2))){
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13882__$1,(4),ch);
} else {
if((state_val_13883 === (11))){
var inst_13872 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13891_13914 = state_13882__$1;
(statearr_13891_13914[(2)] = inst_13872);

(statearr_13891_13914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (9))){
var state_13882__$1 = state_13882;
var statearr_13892_13915 = state_13882__$1;
(statearr_13892_13915[(2)] = null);

(statearr_13892_13915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (5))){
var inst_13867 = cljs.core.async.close_BANG_.call(null,out);
var state_13882__$1 = state_13882;
var statearr_13893_13916 = state_13882__$1;
(statearr_13893_13916[(2)] = inst_13867);

(statearr_13893_13916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (10))){
var inst_13875 = (state_13882[(2)]);
var state_13882__$1 = (function (){var statearr_13894 = state_13882;
(statearr_13894[(8)] = inst_13875);

return statearr_13894;
})();
var statearr_13895_13917 = state_13882__$1;
(statearr_13895_13917[(2)] = null);

(statearr_13895_13917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (8))){
var inst_13864 = (state_13882[(7)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13882__$1,(11),out,inst_13864);
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
});})(c__11694__auto___13907,out))
;
return ((function (switch__11582__auto__,c__11694__auto___13907,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_13899 = [null,null,null,null,null,null,null,null,null];
(statearr_13899[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_13899[(1)] = (1));

return statearr_13899;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_13882){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_13882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e13900){if((e13900 instanceof Object)){
var ex__11586__auto__ = e13900;
var statearr_13901_13918 = state_13882;
(statearr_13901_13918[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13919 = state_13882;
state_13882 = G__13919;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_13882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_13882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___13907,out))
})();
var state__11696__auto__ = (function (){var statearr_13902 = f__11695__auto__.call(null);
(statearr_13902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___13907);

return statearr_13902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___13907,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13920 = [];
var len__6044__auto___13923 = arguments.length;
var i__6045__auto___13924 = (0);
while(true){
if((i__6045__auto___13924 < len__6044__auto___13923)){
args13920.push((arguments[i__6045__auto___13924]));

var G__13925 = (i__6045__auto___13924 + (1));
i__6045__auto___13924 = G__13925;
continue;
} else {
}
break;
}

var G__13922 = args13920.length;
switch (G__13922) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13920.length)].join('')));

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
var c__11694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto__){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto__){
return (function (state_14092){
var state_val_14093 = (state_14092[(1)]);
if((state_val_14093 === (7))){
var inst_14088 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14094_14135 = state_14092__$1;
(statearr_14094_14135[(2)] = inst_14088);

(statearr_14094_14135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (20))){
var inst_14058 = (state_14092[(7)]);
var inst_14069 = (state_14092[(2)]);
var inst_14070 = cljs.core.next.call(null,inst_14058);
var inst_14044 = inst_14070;
var inst_14045 = null;
var inst_14046 = (0);
var inst_14047 = (0);
var state_14092__$1 = (function (){var statearr_14095 = state_14092;
(statearr_14095[(8)] = inst_14045);

(statearr_14095[(9)] = inst_14044);

(statearr_14095[(10)] = inst_14046);

(statearr_14095[(11)] = inst_14069);

(statearr_14095[(12)] = inst_14047);

return statearr_14095;
})();
var statearr_14096_14136 = state_14092__$1;
(statearr_14096_14136[(2)] = null);

(statearr_14096_14136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (1))){
var state_14092__$1 = state_14092;
var statearr_14097_14137 = state_14092__$1;
(statearr_14097_14137[(2)] = null);

(statearr_14097_14137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (4))){
var inst_14033 = (state_14092[(13)]);
var inst_14033__$1 = (state_14092[(2)]);
var inst_14034 = (inst_14033__$1 == null);
var state_14092__$1 = (function (){var statearr_14098 = state_14092;
(statearr_14098[(13)] = inst_14033__$1);

return statearr_14098;
})();
if(cljs.core.truth_(inst_14034)){
var statearr_14099_14138 = state_14092__$1;
(statearr_14099_14138[(1)] = (5));

} else {
var statearr_14100_14139 = state_14092__$1;
(statearr_14100_14139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (15))){
var state_14092__$1 = state_14092;
var statearr_14104_14140 = state_14092__$1;
(statearr_14104_14140[(2)] = null);

(statearr_14104_14140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (21))){
var state_14092__$1 = state_14092;
var statearr_14105_14141 = state_14092__$1;
(statearr_14105_14141[(2)] = null);

(statearr_14105_14141[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (13))){
var inst_14045 = (state_14092[(8)]);
var inst_14044 = (state_14092[(9)]);
var inst_14046 = (state_14092[(10)]);
var inst_14047 = (state_14092[(12)]);
var inst_14054 = (state_14092[(2)]);
var inst_14055 = (inst_14047 + (1));
var tmp14101 = inst_14045;
var tmp14102 = inst_14044;
var tmp14103 = inst_14046;
var inst_14044__$1 = tmp14102;
var inst_14045__$1 = tmp14101;
var inst_14046__$1 = tmp14103;
var inst_14047__$1 = inst_14055;
var state_14092__$1 = (function (){var statearr_14106 = state_14092;
(statearr_14106[(8)] = inst_14045__$1);

(statearr_14106[(9)] = inst_14044__$1);

(statearr_14106[(10)] = inst_14046__$1);

(statearr_14106[(14)] = inst_14054);

(statearr_14106[(12)] = inst_14047__$1);

return statearr_14106;
})();
var statearr_14107_14142 = state_14092__$1;
(statearr_14107_14142[(2)] = null);

(statearr_14107_14142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (22))){
var state_14092__$1 = state_14092;
var statearr_14108_14143 = state_14092__$1;
(statearr_14108_14143[(2)] = null);

(statearr_14108_14143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (6))){
var inst_14033 = (state_14092[(13)]);
var inst_14042 = f.call(null,inst_14033);
var inst_14043 = cljs.core.seq.call(null,inst_14042);
var inst_14044 = inst_14043;
var inst_14045 = null;
var inst_14046 = (0);
var inst_14047 = (0);
var state_14092__$1 = (function (){var statearr_14109 = state_14092;
(statearr_14109[(8)] = inst_14045);

(statearr_14109[(9)] = inst_14044);

(statearr_14109[(10)] = inst_14046);

(statearr_14109[(12)] = inst_14047);

return statearr_14109;
})();
var statearr_14110_14144 = state_14092__$1;
(statearr_14110_14144[(2)] = null);

(statearr_14110_14144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (17))){
var inst_14058 = (state_14092[(7)]);
var inst_14062 = cljs.core.chunk_first.call(null,inst_14058);
var inst_14063 = cljs.core.chunk_rest.call(null,inst_14058);
var inst_14064 = cljs.core.count.call(null,inst_14062);
var inst_14044 = inst_14063;
var inst_14045 = inst_14062;
var inst_14046 = inst_14064;
var inst_14047 = (0);
var state_14092__$1 = (function (){var statearr_14111 = state_14092;
(statearr_14111[(8)] = inst_14045);

(statearr_14111[(9)] = inst_14044);

(statearr_14111[(10)] = inst_14046);

(statearr_14111[(12)] = inst_14047);

return statearr_14111;
})();
var statearr_14112_14145 = state_14092__$1;
(statearr_14112_14145[(2)] = null);

(statearr_14112_14145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (3))){
var inst_14090 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14092__$1,inst_14090);
} else {
if((state_val_14093 === (12))){
var inst_14078 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14113_14146 = state_14092__$1;
(statearr_14113_14146[(2)] = inst_14078);

(statearr_14113_14146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (2))){
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14092__$1,(4),in$);
} else {
if((state_val_14093 === (23))){
var inst_14086 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14114_14147 = state_14092__$1;
(statearr_14114_14147[(2)] = inst_14086);

(statearr_14114_14147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (19))){
var inst_14073 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14115_14148 = state_14092__$1;
(statearr_14115_14148[(2)] = inst_14073);

(statearr_14115_14148[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (11))){
var inst_14044 = (state_14092[(9)]);
var inst_14058 = (state_14092[(7)]);
var inst_14058__$1 = cljs.core.seq.call(null,inst_14044);
var state_14092__$1 = (function (){var statearr_14116 = state_14092;
(statearr_14116[(7)] = inst_14058__$1);

return statearr_14116;
})();
if(inst_14058__$1){
var statearr_14117_14149 = state_14092__$1;
(statearr_14117_14149[(1)] = (14));

} else {
var statearr_14118_14150 = state_14092__$1;
(statearr_14118_14150[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (9))){
var inst_14080 = (state_14092[(2)]);
var inst_14081 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14092__$1 = (function (){var statearr_14119 = state_14092;
(statearr_14119[(15)] = inst_14080);

return statearr_14119;
})();
if(cljs.core.truth_(inst_14081)){
var statearr_14120_14151 = state_14092__$1;
(statearr_14120_14151[(1)] = (21));

} else {
var statearr_14121_14152 = state_14092__$1;
(statearr_14121_14152[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (5))){
var inst_14036 = cljs.core.async.close_BANG_.call(null,out);
var state_14092__$1 = state_14092;
var statearr_14122_14153 = state_14092__$1;
(statearr_14122_14153[(2)] = inst_14036);

(statearr_14122_14153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (14))){
var inst_14058 = (state_14092[(7)]);
var inst_14060 = cljs.core.chunked_seq_QMARK_.call(null,inst_14058);
var state_14092__$1 = state_14092;
if(inst_14060){
var statearr_14123_14154 = state_14092__$1;
(statearr_14123_14154[(1)] = (17));

} else {
var statearr_14124_14155 = state_14092__$1;
(statearr_14124_14155[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (16))){
var inst_14076 = (state_14092[(2)]);
var state_14092__$1 = state_14092;
var statearr_14125_14156 = state_14092__$1;
(statearr_14125_14156[(2)] = inst_14076);

(statearr_14125_14156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14093 === (10))){
var inst_14045 = (state_14092[(8)]);
var inst_14047 = (state_14092[(12)]);
var inst_14052 = cljs.core._nth.call(null,inst_14045,inst_14047);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14092__$1,(13),out,inst_14052);
} else {
if((state_val_14093 === (18))){
var inst_14058 = (state_14092[(7)]);
var inst_14067 = cljs.core.first.call(null,inst_14058);
var state_14092__$1 = state_14092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14092__$1,(20),out,inst_14067);
} else {
if((state_val_14093 === (8))){
var inst_14046 = (state_14092[(10)]);
var inst_14047 = (state_14092[(12)]);
var inst_14049 = (inst_14047 < inst_14046);
var inst_14050 = inst_14049;
var state_14092__$1 = state_14092;
if(cljs.core.truth_(inst_14050)){
var statearr_14126_14157 = state_14092__$1;
(statearr_14126_14157[(1)] = (10));

} else {
var statearr_14127_14158 = state_14092__$1;
(statearr_14127_14158[(1)] = (11));

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
});})(c__11694__auto__))
;
return ((function (switch__11582__auto__,c__11694__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____0 = (function (){
var statearr_14131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14131[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__);

(statearr_14131[(1)] = (1));

return statearr_14131;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____1 = (function (state_14092){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_14092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e14132){if((e14132 instanceof Object)){
var ex__11586__auto__ = e14132;
var statearr_14133_14159 = state_14092;
(statearr_14133_14159[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14160 = state_14092;
state_14092 = G__14160;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__ = function(state_14092){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____1.call(this,state_14092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto__))
})();
var state__11696__auto__ = (function (){var statearr_14134 = f__11695__auto__.call(null);
(statearr_14134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto__);

return statearr_14134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto__))
);

return c__11694__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14161 = [];
var len__6044__auto___14164 = arguments.length;
var i__6045__auto___14165 = (0);
while(true){
if((i__6045__auto___14165 < len__6044__auto___14164)){
args14161.push((arguments[i__6045__auto___14165]));

var G__14166 = (i__6045__auto___14165 + (1));
i__6045__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var G__14163 = args14161.length;
switch (G__14163) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14161.length)].join('')));

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
var args14168 = [];
var len__6044__auto___14171 = arguments.length;
var i__6045__auto___14172 = (0);
while(true){
if((i__6045__auto___14172 < len__6044__auto___14171)){
args14168.push((arguments[i__6045__auto___14172]));

var G__14173 = (i__6045__auto___14172 + (1));
i__6045__auto___14172 = G__14173;
continue;
} else {
}
break;
}

var G__14170 = args14168.length;
switch (G__14170) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14168.length)].join('')));

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
var args14175 = [];
var len__6044__auto___14226 = arguments.length;
var i__6045__auto___14227 = (0);
while(true){
if((i__6045__auto___14227 < len__6044__auto___14226)){
args14175.push((arguments[i__6045__auto___14227]));

var G__14228 = (i__6045__auto___14227 + (1));
i__6045__auto___14227 = G__14228;
continue;
} else {
}
break;
}

var G__14177 = args14175.length;
switch (G__14177) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14175.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___14230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___14230,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___14230,out){
return (function (state_14201){
var state_val_14202 = (state_14201[(1)]);
if((state_val_14202 === (7))){
var inst_14196 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14203_14231 = state_14201__$1;
(statearr_14203_14231[(2)] = inst_14196);

(statearr_14203_14231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (1))){
var inst_14178 = null;
var state_14201__$1 = (function (){var statearr_14204 = state_14201;
(statearr_14204[(7)] = inst_14178);

return statearr_14204;
})();
var statearr_14205_14232 = state_14201__$1;
(statearr_14205_14232[(2)] = null);

(statearr_14205_14232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (4))){
var inst_14181 = (state_14201[(8)]);
var inst_14181__$1 = (state_14201[(2)]);
var inst_14182 = (inst_14181__$1 == null);
var inst_14183 = cljs.core.not.call(null,inst_14182);
var state_14201__$1 = (function (){var statearr_14206 = state_14201;
(statearr_14206[(8)] = inst_14181__$1);

return statearr_14206;
})();
if(inst_14183){
var statearr_14207_14233 = state_14201__$1;
(statearr_14207_14233[(1)] = (5));

} else {
var statearr_14208_14234 = state_14201__$1;
(statearr_14208_14234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (6))){
var state_14201__$1 = state_14201;
var statearr_14209_14235 = state_14201__$1;
(statearr_14209_14235[(2)] = null);

(statearr_14209_14235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (3))){
var inst_14198 = (state_14201[(2)]);
var inst_14199 = cljs.core.async.close_BANG_.call(null,out);
var state_14201__$1 = (function (){var statearr_14210 = state_14201;
(statearr_14210[(9)] = inst_14198);

return statearr_14210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14201__$1,inst_14199);
} else {
if((state_val_14202 === (2))){
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14201__$1,(4),ch);
} else {
if((state_val_14202 === (11))){
var inst_14181 = (state_14201[(8)]);
var inst_14190 = (state_14201[(2)]);
var inst_14178 = inst_14181;
var state_14201__$1 = (function (){var statearr_14211 = state_14201;
(statearr_14211[(10)] = inst_14190);

(statearr_14211[(7)] = inst_14178);

return statearr_14211;
})();
var statearr_14212_14236 = state_14201__$1;
(statearr_14212_14236[(2)] = null);

(statearr_14212_14236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (9))){
var inst_14181 = (state_14201[(8)]);
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14201__$1,(11),out,inst_14181);
} else {
if((state_val_14202 === (5))){
var inst_14178 = (state_14201[(7)]);
var inst_14181 = (state_14201[(8)]);
var inst_14185 = cljs.core._EQ_.call(null,inst_14181,inst_14178);
var state_14201__$1 = state_14201;
if(inst_14185){
var statearr_14214_14237 = state_14201__$1;
(statearr_14214_14237[(1)] = (8));

} else {
var statearr_14215_14238 = state_14201__$1;
(statearr_14215_14238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (10))){
var inst_14193 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
var statearr_14216_14239 = state_14201__$1;
(statearr_14216_14239[(2)] = inst_14193);

(statearr_14216_14239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14202 === (8))){
var inst_14178 = (state_14201[(7)]);
var tmp14213 = inst_14178;
var inst_14178__$1 = tmp14213;
var state_14201__$1 = (function (){var statearr_14217 = state_14201;
(statearr_14217[(7)] = inst_14178__$1);

return statearr_14217;
})();
var statearr_14218_14240 = state_14201__$1;
(statearr_14218_14240[(2)] = null);

(statearr_14218_14240[(1)] = (2));


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
});})(c__11694__auto___14230,out))
;
return ((function (switch__11582__auto__,c__11694__auto___14230,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_14222 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14222[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_14222[(1)] = (1));

return statearr_14222;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_14201){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_14201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e14223){if((e14223 instanceof Object)){
var ex__11586__auto__ = e14223;
var statearr_14224_14241 = state_14201;
(statearr_14224_14241[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14242 = state_14201;
state_14201 = G__14242;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_14201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_14201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___14230,out))
})();
var state__11696__auto__ = (function (){var statearr_14225 = f__11695__auto__.call(null);
(statearr_14225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___14230);

return statearr_14225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___14230,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14243 = [];
var len__6044__auto___14313 = arguments.length;
var i__6045__auto___14314 = (0);
while(true){
if((i__6045__auto___14314 < len__6044__auto___14313)){
args14243.push((arguments[i__6045__auto___14314]));

var G__14315 = (i__6045__auto___14314 + (1));
i__6045__auto___14314 = G__14315;
continue;
} else {
}
break;
}

var G__14245 = args14243.length;
switch (G__14245) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14243.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___14317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___14317,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___14317,out){
return (function (state_14283){
var state_val_14284 = (state_14283[(1)]);
if((state_val_14284 === (7))){
var inst_14279 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14285_14318 = state_14283__$1;
(statearr_14285_14318[(2)] = inst_14279);

(statearr_14285_14318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (1))){
var inst_14246 = (new Array(n));
var inst_14247 = inst_14246;
var inst_14248 = (0);
var state_14283__$1 = (function (){var statearr_14286 = state_14283;
(statearr_14286[(7)] = inst_14248);

(statearr_14286[(8)] = inst_14247);

return statearr_14286;
})();
var statearr_14287_14319 = state_14283__$1;
(statearr_14287_14319[(2)] = null);

(statearr_14287_14319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (4))){
var inst_14251 = (state_14283[(9)]);
var inst_14251__$1 = (state_14283[(2)]);
var inst_14252 = (inst_14251__$1 == null);
var inst_14253 = cljs.core.not.call(null,inst_14252);
var state_14283__$1 = (function (){var statearr_14288 = state_14283;
(statearr_14288[(9)] = inst_14251__$1);

return statearr_14288;
})();
if(inst_14253){
var statearr_14289_14320 = state_14283__$1;
(statearr_14289_14320[(1)] = (5));

} else {
var statearr_14290_14321 = state_14283__$1;
(statearr_14290_14321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (15))){
var inst_14273 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14291_14322 = state_14283__$1;
(statearr_14291_14322[(2)] = inst_14273);

(statearr_14291_14322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (13))){
var state_14283__$1 = state_14283;
var statearr_14292_14323 = state_14283__$1;
(statearr_14292_14323[(2)] = null);

(statearr_14292_14323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (6))){
var inst_14248 = (state_14283[(7)]);
var inst_14269 = (inst_14248 > (0));
var state_14283__$1 = state_14283;
if(cljs.core.truth_(inst_14269)){
var statearr_14293_14324 = state_14283__$1;
(statearr_14293_14324[(1)] = (12));

} else {
var statearr_14294_14325 = state_14283__$1;
(statearr_14294_14325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (3))){
var inst_14281 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14283__$1,inst_14281);
} else {
if((state_val_14284 === (12))){
var inst_14247 = (state_14283[(8)]);
var inst_14271 = cljs.core.vec.call(null,inst_14247);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(15),out,inst_14271);
} else {
if((state_val_14284 === (2))){
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14283__$1,(4),ch);
} else {
if((state_val_14284 === (11))){
var inst_14263 = (state_14283[(2)]);
var inst_14264 = (new Array(n));
var inst_14247 = inst_14264;
var inst_14248 = (0);
var state_14283__$1 = (function (){var statearr_14295 = state_14283;
(statearr_14295[(7)] = inst_14248);

(statearr_14295[(10)] = inst_14263);

(statearr_14295[(8)] = inst_14247);

return statearr_14295;
})();
var statearr_14296_14326 = state_14283__$1;
(statearr_14296_14326[(2)] = null);

(statearr_14296_14326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (9))){
var inst_14247 = (state_14283[(8)]);
var inst_14261 = cljs.core.vec.call(null,inst_14247);
var state_14283__$1 = state_14283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14283__$1,(11),out,inst_14261);
} else {
if((state_val_14284 === (5))){
var inst_14248 = (state_14283[(7)]);
var inst_14256 = (state_14283[(11)]);
var inst_14247 = (state_14283[(8)]);
var inst_14251 = (state_14283[(9)]);
var inst_14255 = (inst_14247[inst_14248] = inst_14251);
var inst_14256__$1 = (inst_14248 + (1));
var inst_14257 = (inst_14256__$1 < n);
var state_14283__$1 = (function (){var statearr_14297 = state_14283;
(statearr_14297[(12)] = inst_14255);

(statearr_14297[(11)] = inst_14256__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14257)){
var statearr_14298_14327 = state_14283__$1;
(statearr_14298_14327[(1)] = (8));

} else {
var statearr_14299_14328 = state_14283__$1;
(statearr_14299_14328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (14))){
var inst_14276 = (state_14283[(2)]);
var inst_14277 = cljs.core.async.close_BANG_.call(null,out);
var state_14283__$1 = (function (){var statearr_14301 = state_14283;
(statearr_14301[(13)] = inst_14276);

return statearr_14301;
})();
var statearr_14302_14329 = state_14283__$1;
(statearr_14302_14329[(2)] = inst_14277);

(statearr_14302_14329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (10))){
var inst_14267 = (state_14283[(2)]);
var state_14283__$1 = state_14283;
var statearr_14303_14330 = state_14283__$1;
(statearr_14303_14330[(2)] = inst_14267);

(statearr_14303_14330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14284 === (8))){
var inst_14256 = (state_14283[(11)]);
var inst_14247 = (state_14283[(8)]);
var tmp14300 = inst_14247;
var inst_14247__$1 = tmp14300;
var inst_14248 = inst_14256;
var state_14283__$1 = (function (){var statearr_14304 = state_14283;
(statearr_14304[(7)] = inst_14248);

(statearr_14304[(8)] = inst_14247__$1);

return statearr_14304;
})();
var statearr_14305_14331 = state_14283__$1;
(statearr_14305_14331[(2)] = null);

(statearr_14305_14331[(1)] = (2));


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
});})(c__11694__auto___14317,out))
;
return ((function (switch__11582__auto__,c__11694__auto___14317,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_14309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14309[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_14309[(1)] = (1));

return statearr_14309;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_14283){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_14283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e14310){if((e14310 instanceof Object)){
var ex__11586__auto__ = e14310;
var statearr_14311_14332 = state_14283;
(statearr_14311_14332[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14333 = state_14283;
state_14283 = G__14333;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_14283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_14283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___14317,out))
})();
var state__11696__auto__ = (function (){var statearr_14312 = f__11695__auto__.call(null);
(statearr_14312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___14317);

return statearr_14312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___14317,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14334 = [];
var len__6044__auto___14408 = arguments.length;
var i__6045__auto___14409 = (0);
while(true){
if((i__6045__auto___14409 < len__6044__auto___14408)){
args14334.push((arguments[i__6045__auto___14409]));

var G__14410 = (i__6045__auto___14409 + (1));
i__6045__auto___14409 = G__14410;
continue;
} else {
}
break;
}

var G__14336 = args14334.length;
switch (G__14336) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14334.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11694__auto___14412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11694__auto___14412,out){
return (function (){
var f__11695__auto__ = (function (){var switch__11582__auto__ = ((function (c__11694__auto___14412,out){
return (function (state_14378){
var state_val_14379 = (state_14378[(1)]);
if((state_val_14379 === (7))){
var inst_14374 = (state_14378[(2)]);
var state_14378__$1 = state_14378;
var statearr_14380_14413 = state_14378__$1;
(statearr_14380_14413[(2)] = inst_14374);

(statearr_14380_14413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (1))){
var inst_14337 = [];
var inst_14338 = inst_14337;
var inst_14339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14378__$1 = (function (){var statearr_14381 = state_14378;
(statearr_14381[(7)] = inst_14339);

(statearr_14381[(8)] = inst_14338);

return statearr_14381;
})();
var statearr_14382_14414 = state_14378__$1;
(statearr_14382_14414[(2)] = null);

(statearr_14382_14414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (4))){
var inst_14342 = (state_14378[(9)]);
var inst_14342__$1 = (state_14378[(2)]);
var inst_14343 = (inst_14342__$1 == null);
var inst_14344 = cljs.core.not.call(null,inst_14343);
var state_14378__$1 = (function (){var statearr_14383 = state_14378;
(statearr_14383[(9)] = inst_14342__$1);

return statearr_14383;
})();
if(inst_14344){
var statearr_14384_14415 = state_14378__$1;
(statearr_14384_14415[(1)] = (5));

} else {
var statearr_14385_14416 = state_14378__$1;
(statearr_14385_14416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (15))){
var inst_14368 = (state_14378[(2)]);
var state_14378__$1 = state_14378;
var statearr_14386_14417 = state_14378__$1;
(statearr_14386_14417[(2)] = inst_14368);

(statearr_14386_14417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (13))){
var state_14378__$1 = state_14378;
var statearr_14387_14418 = state_14378__$1;
(statearr_14387_14418[(2)] = null);

(statearr_14387_14418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (6))){
var inst_14338 = (state_14378[(8)]);
var inst_14363 = inst_14338.length;
var inst_14364 = (inst_14363 > (0));
var state_14378__$1 = state_14378;
if(cljs.core.truth_(inst_14364)){
var statearr_14388_14419 = state_14378__$1;
(statearr_14388_14419[(1)] = (12));

} else {
var statearr_14389_14420 = state_14378__$1;
(statearr_14389_14420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (3))){
var inst_14376 = (state_14378[(2)]);
var state_14378__$1 = state_14378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14378__$1,inst_14376);
} else {
if((state_val_14379 === (12))){
var inst_14338 = (state_14378[(8)]);
var inst_14366 = cljs.core.vec.call(null,inst_14338);
var state_14378__$1 = state_14378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14378__$1,(15),out,inst_14366);
} else {
if((state_val_14379 === (2))){
var state_14378__$1 = state_14378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14378__$1,(4),ch);
} else {
if((state_val_14379 === (11))){
var inst_14342 = (state_14378[(9)]);
var inst_14346 = (state_14378[(10)]);
var inst_14356 = (state_14378[(2)]);
var inst_14357 = [];
var inst_14358 = inst_14357.push(inst_14342);
var inst_14338 = inst_14357;
var inst_14339 = inst_14346;
var state_14378__$1 = (function (){var statearr_14390 = state_14378;
(statearr_14390[(11)] = inst_14356);

(statearr_14390[(12)] = inst_14358);

(statearr_14390[(7)] = inst_14339);

(statearr_14390[(8)] = inst_14338);

return statearr_14390;
})();
var statearr_14391_14421 = state_14378__$1;
(statearr_14391_14421[(2)] = null);

(statearr_14391_14421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (9))){
var inst_14338 = (state_14378[(8)]);
var inst_14354 = cljs.core.vec.call(null,inst_14338);
var state_14378__$1 = state_14378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14378__$1,(11),out,inst_14354);
} else {
if((state_val_14379 === (5))){
var inst_14342 = (state_14378[(9)]);
var inst_14346 = (state_14378[(10)]);
var inst_14339 = (state_14378[(7)]);
var inst_14346__$1 = f.call(null,inst_14342);
var inst_14347 = cljs.core._EQ_.call(null,inst_14346__$1,inst_14339);
var inst_14348 = cljs.core.keyword_identical_QMARK_.call(null,inst_14339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14349 = (inst_14347) || (inst_14348);
var state_14378__$1 = (function (){var statearr_14392 = state_14378;
(statearr_14392[(10)] = inst_14346__$1);

return statearr_14392;
})();
if(cljs.core.truth_(inst_14349)){
var statearr_14393_14422 = state_14378__$1;
(statearr_14393_14422[(1)] = (8));

} else {
var statearr_14394_14423 = state_14378__$1;
(statearr_14394_14423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (14))){
var inst_14371 = (state_14378[(2)]);
var inst_14372 = cljs.core.async.close_BANG_.call(null,out);
var state_14378__$1 = (function (){var statearr_14396 = state_14378;
(statearr_14396[(13)] = inst_14371);

return statearr_14396;
})();
var statearr_14397_14424 = state_14378__$1;
(statearr_14397_14424[(2)] = inst_14372);

(statearr_14397_14424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (10))){
var inst_14361 = (state_14378[(2)]);
var state_14378__$1 = state_14378;
var statearr_14398_14425 = state_14378__$1;
(statearr_14398_14425[(2)] = inst_14361);

(statearr_14398_14425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14379 === (8))){
var inst_14342 = (state_14378[(9)]);
var inst_14346 = (state_14378[(10)]);
var inst_14338 = (state_14378[(8)]);
var inst_14351 = inst_14338.push(inst_14342);
var tmp14395 = inst_14338;
var inst_14338__$1 = tmp14395;
var inst_14339 = inst_14346;
var state_14378__$1 = (function (){var statearr_14399 = state_14378;
(statearr_14399[(14)] = inst_14351);

(statearr_14399[(7)] = inst_14339);

(statearr_14399[(8)] = inst_14338__$1);

return statearr_14399;
})();
var statearr_14400_14426 = state_14378__$1;
(statearr_14400_14426[(2)] = null);

(statearr_14400_14426[(1)] = (2));


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
});})(c__11694__auto___14412,out))
;
return ((function (switch__11582__auto__,c__11694__auto___14412,out){
return (function() {
var cljs$core$async$state_machine__11583__auto__ = null;
var cljs$core$async$state_machine__11583__auto____0 = (function (){
var statearr_14404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14404[(0)] = cljs$core$async$state_machine__11583__auto__);

(statearr_14404[(1)] = (1));

return statearr_14404;
});
var cljs$core$async$state_machine__11583__auto____1 = (function (state_14378){
while(true){
var ret_value__11584__auto__ = (function (){try{while(true){
var result__11585__auto__ = switch__11582__auto__.call(null,state_14378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11585__auto__;
}
break;
}
}catch (e14405){if((e14405 instanceof Object)){
var ex__11586__auto__ = e14405;
var statearr_14406_14427 = state_14378;
(statearr_14406_14427[(5)] = ex__11586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14428 = state_14378;
state_14378 = G__14428;
continue;
} else {
return ret_value__11584__auto__;
}
break;
}
});
cljs$core$async$state_machine__11583__auto__ = function(state_14378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11583__auto____1.call(this,state_14378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11583__auto____0;
cljs$core$async$state_machine__11583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11583__auto____1;
return cljs$core$async$state_machine__11583__auto__;
})()
;})(switch__11582__auto__,c__11694__auto___14412,out))
})();
var state__11696__auto__ = (function (){var statearr_14407 = f__11695__auto__.call(null);
(statearr_14407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11694__auto___14412);

return statearr_14407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11696__auto__);
});})(c__11694__auto___14412,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map