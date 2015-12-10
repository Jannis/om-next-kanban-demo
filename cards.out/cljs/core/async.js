// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async16952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16952 = (function (fn_handler,f,meta16953){
this.fn_handler = fn_handler;
this.f = f;
this.meta16953 = meta16953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16954,meta16953__$1){
var self__ = this;
var _16954__$1 = this;
return (new cljs.core.async.t_cljs$core$async16952(self__.fn_handler,self__.f,meta16953__$1));
});

cljs.core.async.t_cljs$core$async16952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16954){
var self__ = this;
var _16954__$1 = this;
return self__.meta16953;
});

cljs.core.async.t_cljs$core$async16952.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta16953], null);
});

cljs.core.async.t_cljs$core$async16952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16952";

cljs.core.async.t_cljs$core$async16952.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async16952");
});

cljs.core.async.__GT_t_cljs$core$async16952 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async16952(fn_handler__$1,f__$1,meta16953){
return (new cljs.core.async.t_cljs$core$async16952(fn_handler__$1,f__$1,meta16953));
});

}

return (new cljs.core.async.t_cljs$core$async16952(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args16957 = [];
var len__6044__auto___16960 = arguments.length;
var i__6045__auto___16961 = (0);
while(true){
if((i__6045__auto___16961 < len__6044__auto___16960)){
args16957.push((arguments[i__6045__auto___16961]));

var G__16962 = (i__6045__auto___16961 + (1));
i__6045__auto___16961 = G__16962;
continue;
} else {
}
break;
}

var G__16959 = args16957.length;
switch (G__16959) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16957.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args16964 = [];
var len__6044__auto___16967 = arguments.length;
var i__6045__auto___16968 = (0);
while(true){
if((i__6045__auto___16968 < len__6044__auto___16967)){
args16964.push((arguments[i__6045__auto___16968]));

var G__16969 = (i__6045__auto___16968 + (1));
i__6045__auto___16968 = G__16969;
continue;
} else {
}
break;
}

var G__16966 = args16964.length;
switch (G__16966) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16964.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_16971 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16971) : fn1.call(null,val_16971));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16971,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16971) : fn1.call(null,val_16971));
});})(val_16971,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var args16972 = [];
var len__6044__auto___16975 = arguments.length;
var i__6045__auto___16976 = (0);
while(true){
if((i__6045__auto___16976 < len__6044__auto___16975)){
args16972.push((arguments[i__6045__auto___16976]));

var G__16977 = (i__6045__auto___16976 + (1));
i__6045__auto___16976 = G__16977;
continue;
} else {
}
break;
}

var G__16974 = args16972.length;
switch (G__16974) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16972.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5889__auto___16979 = n;
var x_16980 = (0);
while(true){
if((x_16980 < n__5889__auto___16979)){
(a[x_16980] = (0));

var G__16981 = (x_16980 + (1));
x_16980 = G__16981;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16982 = (i + (1));
i = G__16982;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16986 = (function (alt_flag,flag,meta16987){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16987 = meta16987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16988,meta16987__$1){
var self__ = this;
var _16988__$1 = this;
return (new cljs.core.async.t_cljs$core$async16986(self__.alt_flag,self__.flag,meta16987__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16988){
var self__ = this;
var _16988__$1 = this;
return self__.meta16987;
});})(flag))
;

cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16986.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16987], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16986";

cljs.core.async.t_cljs$core$async16986.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async16986");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16986 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16986(alt_flag__$1,flag__$1,meta16987){
return (new cljs.core.async.t_cljs$core$async16986(alt_flag__$1,flag__$1,meta16987));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16986(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16992 = (function (alt_handler,flag,cb,meta16993){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16993 = meta16993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16994,meta16993__$1){
var self__ = this;
var _16994__$1 = this;
return (new cljs.core.async.t_cljs$core$async16992(self__.alt_handler,self__.flag,self__.cb,meta16993__$1));
});

cljs.core.async.t_cljs$core$async16992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16994){
var self__ = this;
var _16994__$1 = this;
return self__.meta16993;
});

cljs.core.async.t_cljs$core$async16992.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16993], null);
});

cljs.core.async.t_cljs$core$async16992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16992";

cljs.core.async.t_cljs$core$async16992.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async16992");
});

cljs.core.async.__GT_t_cljs$core$async16992 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16992(alt_handler__$1,flag__$1,cb__$1,meta16993){
return (new cljs.core.async.t_cljs$core$async16992(alt_handler__$1,flag__$1,cb__$1,meta16993));
});

}

return (new cljs.core.async.t_cljs$core$async16992(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16995_SHARP_){
var G__16999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16995_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16999) : fret.call(null,G__16999));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16996_SHARP_){
var G__17000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16996_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17000) : fret.call(null,G__17000));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__4986__auto__ = wport;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17001 = (i + (1));
i = G__17001;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__4974__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__6044__auto___17007 = arguments.length;
var i__6045__auto___17008 = (0);
while(true){
if((i__6045__auto___17008 < len__6044__auto___17007)){
args__6051__auto__.push((arguments[i__6045__auto___17008]));

var G__17009 = (i__6045__auto___17008 + (1));
i__6045__auto___17008 = G__17009;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17004){
var map__17005 = p__17004;
var map__17005__$1 = ((((!((map__17005 == null)))?((((map__17005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17005):map__17005);
var opts = map__17005__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17002){
var G__17003 = cljs.core.first(seq17002);
var seq17002__$1 = cljs.core.next(seq17002);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17003,seq17002__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17010 = [];
var len__6044__auto___17060 = arguments.length;
var i__6045__auto___17061 = (0);
while(true){
if((i__6045__auto___17061 < len__6044__auto___17060)){
args17010.push((arguments[i__6045__auto___17061]));

var G__17062 = (i__6045__auto___17061 + (1));
i__6045__auto___17061 = G__17062;
continue;
} else {
}
break;
}

var G__17012 = args17010.length;
switch (G__17012) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17010.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16904__auto___17064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___17064){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___17064){
return (function (state_17036){
var state_val_17037 = (state_17036[(1)]);
if((state_val_17037 === (7))){
var inst_17032 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17038_17065 = state_17036__$1;
(statearr_17038_17065[(2)] = inst_17032);

(statearr_17038_17065[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (1))){
var state_17036__$1 = state_17036;
var statearr_17039_17066 = state_17036__$1;
(statearr_17039_17066[(2)] = null);

(statearr_17039_17066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (4))){
var inst_17015 = (state_17036[(7)]);
var inst_17015__$1 = (state_17036[(2)]);
var inst_17016 = (inst_17015__$1 == null);
var state_17036__$1 = (function (){var statearr_17040 = state_17036;
(statearr_17040[(7)] = inst_17015__$1);

return statearr_17040;
})();
if(cljs.core.truth_(inst_17016)){
var statearr_17041_17067 = state_17036__$1;
(statearr_17041_17067[(1)] = (5));

} else {
var statearr_17042_17068 = state_17036__$1;
(statearr_17042_17068[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (13))){
var state_17036__$1 = state_17036;
var statearr_17043_17069 = state_17036__$1;
(statearr_17043_17069[(2)] = null);

(statearr_17043_17069[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (6))){
var inst_17015 = (state_17036[(7)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17036__$1,(11),to,inst_17015);
} else {
if((state_val_17037 === (3))){
var inst_17034 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17036__$1,inst_17034);
} else {
if((state_val_17037 === (12))){
var state_17036__$1 = state_17036;
var statearr_17044_17070 = state_17036__$1;
(statearr_17044_17070[(2)] = null);

(statearr_17044_17070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (2))){
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17036__$1,(4),from);
} else {
if((state_val_17037 === (11))){
var inst_17025 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
if(cljs.core.truth_(inst_17025)){
var statearr_17045_17071 = state_17036__$1;
(statearr_17045_17071[(1)] = (12));

} else {
var statearr_17046_17072 = state_17036__$1;
(statearr_17046_17072[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (9))){
var state_17036__$1 = state_17036;
var statearr_17047_17073 = state_17036__$1;
(statearr_17047_17073[(2)] = null);

(statearr_17047_17073[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (5))){
var state_17036__$1 = state_17036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17048_17074 = state_17036__$1;
(statearr_17048_17074[(1)] = (8));

} else {
var statearr_17049_17075 = state_17036__$1;
(statearr_17049_17075[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (14))){
var inst_17030 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17050_17076 = state_17036__$1;
(statearr_17050_17076[(2)] = inst_17030);

(statearr_17050_17076[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (10))){
var inst_17022 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17051_17077 = state_17036__$1;
(statearr_17051_17077[(2)] = inst_17022);

(statearr_17051_17077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17037 === (8))){
var inst_17019 = cljs.core.async.close_BANG_(to);
var state_17036__$1 = state_17036;
var statearr_17052_17078 = state_17036__$1;
(statearr_17052_17078[(2)] = inst_17019);

(statearr_17052_17078[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___17064))
;
return ((function (switch__16790__auto__,c__16904__auto___17064){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_17036){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17036);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object)){
var ex__16794__auto__ = e17057;
var statearr_17058_17079 = state_17036;
(statearr_17058_17079[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17036);

return cljs.core.cst$kw$recur;
} else {
throw e17057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17080 = state_17036;
state_17036 = G__17080;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___17064))
})();
var state__16906__auto__ = (function (){var statearr_17059 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17064);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___17064))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__17264){
var vec__17265 = p__17264;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265,(1),null);
var job = vec__17265;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16904__auto___17447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results){
return (function (state_17270){
var state_val_17271 = (state_17270[(1)]);
if((state_val_17271 === (1))){
var state_17270__$1 = state_17270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17270__$1,(2),res,v);
} else {
if((state_val_17271 === (2))){
var inst_17267 = (state_17270[(2)]);
var inst_17268 = cljs.core.async.close_BANG_(res);
var state_17270__$1 = (function (){var statearr_17272 = state_17270;
(statearr_17272[(7)] = inst_17267);

return statearr_17272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17270__$1,inst_17268);
} else {
return null;
}
}
});})(c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results))
;
return ((function (switch__16790__auto__,c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_17276 = [null,null,null,null,null,null,null,null];
(statearr_17276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__);

(statearr_17276[(1)] = (1));

return statearr_17276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1 = (function (state_17270){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17270);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17277){if((e17277 instanceof Object)){
var ex__16794__auto__ = e17277;
var statearr_17278_17448 = state_17270;
(statearr_17278_17448[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17270);

return cljs.core.cst$kw$recur;
} else {
throw e17277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17449 = state_17270;
state_17270 = G__17449;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = function(state_17270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1.call(this,state_17270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results))
})();
var state__16906__auto__ = (function (){var statearr_17279 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17447);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___17447,res,vec__17265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17280){
var vec__17281 = p__17280;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17281,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17281,(1),null);
var job = vec__17281;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5889__auto___17450 = n;
var __17451 = (0);
while(true){
if((__17451 < n__5889__auto___17450)){
var G__17282_17452 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17282_17452) {
case "compute":
var c__16904__auto___17454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17451,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (__17451,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function (state_17295){
var state_val_17296 = (state_17295[(1)]);
if((state_val_17296 === (1))){
var state_17295__$1 = state_17295;
var statearr_17297_17455 = state_17295__$1;
(statearr_17297_17455[(2)] = null);

(statearr_17297_17455[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17296 === (2))){
var state_17295__$1 = state_17295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17295__$1,(4),jobs);
} else {
if((state_val_17296 === (3))){
var inst_17293 = (state_17295[(2)]);
var state_17295__$1 = state_17295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17295__$1,inst_17293);
} else {
if((state_val_17296 === (4))){
var inst_17285 = (state_17295[(2)]);
var inst_17286 = process(inst_17285);
var state_17295__$1 = state_17295;
if(cljs.core.truth_(inst_17286)){
var statearr_17298_17456 = state_17295__$1;
(statearr_17298_17456[(1)] = (5));

} else {
var statearr_17299_17457 = state_17295__$1;
(statearr_17299_17457[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17296 === (5))){
var state_17295__$1 = state_17295;
var statearr_17300_17458 = state_17295__$1;
(statearr_17300_17458[(2)] = null);

(statearr_17300_17458[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17296 === (6))){
var state_17295__$1 = state_17295;
var statearr_17301_17459 = state_17295__$1;
(statearr_17301_17459[(2)] = null);

(statearr_17301_17459[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17296 === (7))){
var inst_17291 = (state_17295[(2)]);
var state_17295__$1 = state_17295;
var statearr_17302_17460 = state_17295__$1;
(statearr_17302_17460[(2)] = inst_17291);

(statearr_17302_17460[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17451,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
;
return ((function (__17451,switch__16790__auto__,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_17306 = [null,null,null,null,null,null,null];
(statearr_17306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__);

(statearr_17306[(1)] = (1));

return statearr_17306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1 = (function (state_17295){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17295);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17307){if((e17307 instanceof Object)){
var ex__16794__auto__ = e17307;
var statearr_17308_17461 = state_17295;
(statearr_17308_17461[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17295);

return cljs.core.cst$kw$recur;
} else {
throw e17307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17462 = state_17295;
state_17295 = G__17462;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = function(state_17295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1.call(this,state_17295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__;
})()
;})(__17451,switch__16790__auto__,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
})();
var state__16906__auto__ = (function (){var statearr_17309 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17454);

return statearr_17309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(__17451,c__16904__auto___17454,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
);


break;
case "async":
var c__16904__auto___17463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17451,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (__17451,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function (state_17322){
var state_val_17323 = (state_17322[(1)]);
if((state_val_17323 === (1))){
var state_17322__$1 = state_17322;
var statearr_17324_17464 = state_17322__$1;
(statearr_17324_17464[(2)] = null);

(statearr_17324_17464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17323 === (2))){
var state_17322__$1 = state_17322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17322__$1,(4),jobs);
} else {
if((state_val_17323 === (3))){
var inst_17320 = (state_17322[(2)]);
var state_17322__$1 = state_17322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17322__$1,inst_17320);
} else {
if((state_val_17323 === (4))){
var inst_17312 = (state_17322[(2)]);
var inst_17313 = async(inst_17312);
var state_17322__$1 = state_17322;
if(cljs.core.truth_(inst_17313)){
var statearr_17325_17465 = state_17322__$1;
(statearr_17325_17465[(1)] = (5));

} else {
var statearr_17326_17466 = state_17322__$1;
(statearr_17326_17466[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17323 === (5))){
var state_17322__$1 = state_17322;
var statearr_17327_17467 = state_17322__$1;
(statearr_17327_17467[(2)] = null);

(statearr_17327_17467[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17323 === (6))){
var state_17322__$1 = state_17322;
var statearr_17328_17468 = state_17322__$1;
(statearr_17328_17468[(2)] = null);

(statearr_17328_17468[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17323 === (7))){
var inst_17318 = (state_17322[(2)]);
var state_17322__$1 = state_17322;
var statearr_17329_17469 = state_17322__$1;
(statearr_17329_17469[(2)] = inst_17318);

(statearr_17329_17469[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__17451,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
;
return ((function (__17451,switch__16790__auto__,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_17333 = [null,null,null,null,null,null,null];
(statearr_17333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__);

(statearr_17333[(1)] = (1));

return statearr_17333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1 = (function (state_17322){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17322);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17334){if((e17334 instanceof Object)){
var ex__16794__auto__ = e17334;
var statearr_17335_17470 = state_17322;
(statearr_17335_17470[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17322);

return cljs.core.cst$kw$recur;
} else {
throw e17334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17471 = state_17322;
state_17322 = G__17471;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = function(state_17322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1.call(this,state_17322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__;
})()
;})(__17451,switch__16790__auto__,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
})();
var state__16906__auto__ = (function (){var statearr_17336 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17463);

return statearr_17336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(__17451,c__16904__auto___17463,G__17282_17452,n__5889__auto___17450,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17472 = (__17451 + (1));
__17451 = G__17472;
continue;
} else {
}
break;
}

var c__16904__auto___17473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___17473,jobs,results,process,async){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___17473,jobs,results,process,async){
return (function (state_17358){
var state_val_17359 = (state_17358[(1)]);
if((state_val_17359 === (1))){
var state_17358__$1 = state_17358;
var statearr_17360_17474 = state_17358__$1;
(statearr_17360_17474[(2)] = null);

(statearr_17360_17474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17359 === (2))){
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17358__$1,(4),from);
} else {
if((state_val_17359 === (3))){
var inst_17356 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17358__$1,inst_17356);
} else {
if((state_val_17359 === (4))){
var inst_17339 = (state_17358[(7)]);
var inst_17339__$1 = (state_17358[(2)]);
var inst_17340 = (inst_17339__$1 == null);
var state_17358__$1 = (function (){var statearr_17361 = state_17358;
(statearr_17361[(7)] = inst_17339__$1);

return statearr_17361;
})();
if(cljs.core.truth_(inst_17340)){
var statearr_17362_17475 = state_17358__$1;
(statearr_17362_17475[(1)] = (5));

} else {
var statearr_17363_17476 = state_17358__$1;
(statearr_17363_17476[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17359 === (5))){
var inst_17342 = cljs.core.async.close_BANG_(jobs);
var state_17358__$1 = state_17358;
var statearr_17364_17477 = state_17358__$1;
(statearr_17364_17477[(2)] = inst_17342);

(statearr_17364_17477[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17359 === (6))){
var inst_17339 = (state_17358[(7)]);
var inst_17344 = (state_17358[(8)]);
var inst_17344__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17346 = [inst_17339,inst_17344__$1];
var inst_17347 = (new cljs.core.PersistentVector(null,2,(5),inst_17345,inst_17346,null));
var state_17358__$1 = (function (){var statearr_17365 = state_17358;
(statearr_17365[(8)] = inst_17344__$1);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17358__$1,(8),jobs,inst_17347);
} else {
if((state_val_17359 === (7))){
var inst_17354 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17366_17478 = state_17358__$1;
(statearr_17366_17478[(2)] = inst_17354);

(statearr_17366_17478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17359 === (8))){
var inst_17344 = (state_17358[(8)]);
var inst_17349 = (state_17358[(2)]);
var state_17358__$1 = (function (){var statearr_17367 = state_17358;
(statearr_17367[(9)] = inst_17349);

return statearr_17367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17358__$1,(9),results,inst_17344);
} else {
if((state_val_17359 === (9))){
var inst_17351 = (state_17358[(2)]);
var state_17358__$1 = (function (){var statearr_17368 = state_17358;
(statearr_17368[(10)] = inst_17351);

return statearr_17368;
})();
var statearr_17369_17479 = state_17358__$1;
(statearr_17369_17479[(2)] = null);

(statearr_17369_17479[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___17473,jobs,results,process,async))
;
return ((function (switch__16790__auto__,c__16904__auto___17473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1 = (function (state_17358){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17358);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__16794__auto__ = e17374;
var statearr_17375_17480 = state_17358;
(statearr_17375_17480[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17358);

return cljs.core.cst$kw$recur;
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17481 = state_17358;
state_17358 = G__17481;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___17473,jobs,results,process,async))
})();
var state__16906__auto__ = (function (){var statearr_17376 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17473);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___17473,jobs,results,process,async))
);


var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__,jobs,results,process,async){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__,jobs,results,process,async){
return (function (state_17414){
var state_val_17415 = (state_17414[(1)]);
if((state_val_17415 === (7))){
var inst_17410 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17416_17482 = state_17414__$1;
(statearr_17416_17482[(2)] = inst_17410);

(statearr_17416_17482[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (20))){
var state_17414__$1 = state_17414;
var statearr_17417_17483 = state_17414__$1;
(statearr_17417_17483[(2)] = null);

(statearr_17417_17483[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (1))){
var state_17414__$1 = state_17414;
var statearr_17418_17484 = state_17414__$1;
(statearr_17418_17484[(2)] = null);

(statearr_17418_17484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (4))){
var inst_17379 = (state_17414[(7)]);
var inst_17379__$1 = (state_17414[(2)]);
var inst_17380 = (inst_17379__$1 == null);
var state_17414__$1 = (function (){var statearr_17419 = state_17414;
(statearr_17419[(7)] = inst_17379__$1);

return statearr_17419;
})();
if(cljs.core.truth_(inst_17380)){
var statearr_17420_17485 = state_17414__$1;
(statearr_17420_17485[(1)] = (5));

} else {
var statearr_17421_17486 = state_17414__$1;
(statearr_17421_17486[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (15))){
var inst_17392 = (state_17414[(8)]);
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17414__$1,(18),to,inst_17392);
} else {
if((state_val_17415 === (21))){
var inst_17405 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17422_17487 = state_17414__$1;
(statearr_17422_17487[(2)] = inst_17405);

(statearr_17422_17487[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (13))){
var inst_17407 = (state_17414[(2)]);
var state_17414__$1 = (function (){var statearr_17423 = state_17414;
(statearr_17423[(9)] = inst_17407);

return statearr_17423;
})();
var statearr_17424_17488 = state_17414__$1;
(statearr_17424_17488[(2)] = null);

(statearr_17424_17488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (6))){
var inst_17379 = (state_17414[(7)]);
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17414__$1,(11),inst_17379);
} else {
if((state_val_17415 === (17))){
var inst_17400 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
if(cljs.core.truth_(inst_17400)){
var statearr_17425_17489 = state_17414__$1;
(statearr_17425_17489[(1)] = (19));

} else {
var statearr_17426_17490 = state_17414__$1;
(statearr_17426_17490[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (3))){
var inst_17412 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17414__$1,inst_17412);
} else {
if((state_val_17415 === (12))){
var inst_17389 = (state_17414[(10)]);
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17414__$1,(14),inst_17389);
} else {
if((state_val_17415 === (2))){
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17414__$1,(4),results);
} else {
if((state_val_17415 === (19))){
var state_17414__$1 = state_17414;
var statearr_17427_17491 = state_17414__$1;
(statearr_17427_17491[(2)] = null);

(statearr_17427_17491[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (11))){
var inst_17389 = (state_17414[(2)]);
var state_17414__$1 = (function (){var statearr_17428 = state_17414;
(statearr_17428[(10)] = inst_17389);

return statearr_17428;
})();
var statearr_17429_17492 = state_17414__$1;
(statearr_17429_17492[(2)] = null);

(statearr_17429_17492[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (9))){
var state_17414__$1 = state_17414;
var statearr_17430_17493 = state_17414__$1;
(statearr_17430_17493[(2)] = null);

(statearr_17430_17493[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (5))){
var state_17414__$1 = state_17414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17431_17494 = state_17414__$1;
(statearr_17431_17494[(1)] = (8));

} else {
var statearr_17432_17495 = state_17414__$1;
(statearr_17432_17495[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (14))){
var inst_17392 = (state_17414[(8)]);
var inst_17394 = (state_17414[(11)]);
var inst_17392__$1 = (state_17414[(2)]);
var inst_17393 = (inst_17392__$1 == null);
var inst_17394__$1 = cljs.core.not(inst_17393);
var state_17414__$1 = (function (){var statearr_17433 = state_17414;
(statearr_17433[(8)] = inst_17392__$1);

(statearr_17433[(11)] = inst_17394__$1);

return statearr_17433;
})();
if(inst_17394__$1){
var statearr_17434_17496 = state_17414__$1;
(statearr_17434_17496[(1)] = (15));

} else {
var statearr_17435_17497 = state_17414__$1;
(statearr_17435_17497[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (16))){
var inst_17394 = (state_17414[(11)]);
var state_17414__$1 = state_17414;
var statearr_17436_17498 = state_17414__$1;
(statearr_17436_17498[(2)] = inst_17394);

(statearr_17436_17498[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (10))){
var inst_17386 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17437_17499 = state_17414__$1;
(statearr_17437_17499[(2)] = inst_17386);

(statearr_17437_17499[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (18))){
var inst_17397 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17438_17500 = state_17414__$1;
(statearr_17438_17500[(2)] = inst_17397);

(statearr_17438_17500[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17415 === (8))){
var inst_17383 = cljs.core.async.close_BANG_(to);
var state_17414__$1 = state_17414;
var statearr_17439_17501 = state_17414__$1;
(statearr_17439_17501[(2)] = inst_17383);

(statearr_17439_17501[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto__,jobs,results,process,async))
;
return ((function (switch__16790__auto__,c__16904__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_17443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__);

(statearr_17443[(1)] = (1));

return statearr_17443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1 = (function (state_17414){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17414);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17444){if((e17444 instanceof Object)){
var ex__16794__auto__ = e17444;
var statearr_17445_17502 = state_17414;
(statearr_17445_17502[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17414);

return cljs.core.cst$kw$recur;
} else {
throw e17444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17503 = state_17414;
state_17414 = G__17503;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__ = function(state_17414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1.call(this,state_17414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__,jobs,results,process,async))
})();
var state__16906__auto__ = (function (){var statearr_17446 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_17446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__,jobs,results,process,async))
);

return c__16904__auto__;
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
var args17504 = [];
var len__6044__auto___17507 = arguments.length;
var i__6045__auto___17508 = (0);
while(true){
if((i__6045__auto___17508 < len__6044__auto___17507)){
args17504.push((arguments[i__6045__auto___17508]));

var G__17509 = (i__6045__auto___17508 + (1));
i__6045__auto___17508 = G__17509;
continue;
} else {
}
break;
}

var G__17506 = args17504.length;
switch (G__17506) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17504.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var args17511 = [];
var len__6044__auto___17514 = arguments.length;
var i__6045__auto___17515 = (0);
while(true){
if((i__6045__auto___17515 < len__6044__auto___17514)){
args17511.push((arguments[i__6045__auto___17515]));

var G__17516 = (i__6045__auto___17515 + (1));
i__6045__auto___17515 = G__17516;
continue;
} else {
}
break;
}

var G__17513 = args17511.length;
switch (G__17513) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17511.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var args17518 = [];
var len__6044__auto___17571 = arguments.length;
var i__6045__auto___17572 = (0);
while(true){
if((i__6045__auto___17572 < len__6044__auto___17571)){
args17518.push((arguments[i__6045__auto___17572]));

var G__17573 = (i__6045__auto___17572 + (1));
i__6045__auto___17572 = G__17573;
continue;
} else {
}
break;
}

var G__17520 = args17518.length;
switch (G__17520) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17518.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16904__auto___17575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___17575,tc,fc){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___17575,tc,fc){
return (function (state_17546){
var state_val_17547 = (state_17546[(1)]);
if((state_val_17547 === (7))){
var inst_17542 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17548_17576 = state_17546__$1;
(statearr_17548_17576[(2)] = inst_17542);

(statearr_17548_17576[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (1))){
var state_17546__$1 = state_17546;
var statearr_17549_17577 = state_17546__$1;
(statearr_17549_17577[(2)] = null);

(statearr_17549_17577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (4))){
var inst_17523 = (state_17546[(7)]);
var inst_17523__$1 = (state_17546[(2)]);
var inst_17524 = (inst_17523__$1 == null);
var state_17546__$1 = (function (){var statearr_17550 = state_17546;
(statearr_17550[(7)] = inst_17523__$1);

return statearr_17550;
})();
if(cljs.core.truth_(inst_17524)){
var statearr_17551_17578 = state_17546__$1;
(statearr_17551_17578[(1)] = (5));

} else {
var statearr_17552_17579 = state_17546__$1;
(statearr_17552_17579[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (13))){
var state_17546__$1 = state_17546;
var statearr_17553_17580 = state_17546__$1;
(statearr_17553_17580[(2)] = null);

(statearr_17553_17580[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (6))){
var inst_17523 = (state_17546[(7)]);
var inst_17529 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17523) : p.call(null,inst_17523));
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17529)){
var statearr_17554_17581 = state_17546__$1;
(statearr_17554_17581[(1)] = (9));

} else {
var statearr_17555_17582 = state_17546__$1;
(statearr_17555_17582[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (3))){
var inst_17544 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17546__$1,inst_17544);
} else {
if((state_val_17547 === (12))){
var state_17546__$1 = state_17546;
var statearr_17556_17583 = state_17546__$1;
(statearr_17556_17583[(2)] = null);

(statearr_17556_17583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (2))){
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17546__$1,(4),ch);
} else {
if((state_val_17547 === (11))){
var inst_17523 = (state_17546[(7)]);
var inst_17533 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17546__$1,(8),inst_17533,inst_17523);
} else {
if((state_val_17547 === (9))){
var state_17546__$1 = state_17546;
var statearr_17557_17584 = state_17546__$1;
(statearr_17557_17584[(2)] = tc);

(statearr_17557_17584[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (5))){
var inst_17526 = cljs.core.async.close_BANG_(tc);
var inst_17527 = cljs.core.async.close_BANG_(fc);
var state_17546__$1 = (function (){var statearr_17558 = state_17546;
(statearr_17558[(8)] = inst_17526);

return statearr_17558;
})();
var statearr_17559_17585 = state_17546__$1;
(statearr_17559_17585[(2)] = inst_17527);

(statearr_17559_17585[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (14))){
var inst_17540 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
var statearr_17560_17586 = state_17546__$1;
(statearr_17560_17586[(2)] = inst_17540);

(statearr_17560_17586[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (10))){
var state_17546__$1 = state_17546;
var statearr_17561_17587 = state_17546__$1;
(statearr_17561_17587[(2)] = fc);

(statearr_17561_17587[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17547 === (8))){
var inst_17535 = (state_17546[(2)]);
var state_17546__$1 = state_17546;
if(cljs.core.truth_(inst_17535)){
var statearr_17562_17588 = state_17546__$1;
(statearr_17562_17588[(1)] = (12));

} else {
var statearr_17563_17589 = state_17546__$1;
(statearr_17563_17589[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___17575,tc,fc))
;
return ((function (switch__16790__auto__,c__16904__auto___17575,tc,fc){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_17567 = [null,null,null,null,null,null,null,null,null];
(statearr_17567[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_17567[(1)] = (1));

return statearr_17567;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_17546){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17546);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17568){if((e17568 instanceof Object)){
var ex__16794__auto__ = e17568;
var statearr_17569_17590 = state_17546;
(statearr_17569_17590[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17546);

return cljs.core.cst$kw$recur;
} else {
throw e17568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17591 = state_17546;
state_17546 = G__17591;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_17546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_17546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___17575,tc,fc))
})();
var state__16906__auto__ = (function (){var statearr_17570 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___17575);

return statearr_17570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___17575,tc,fc))
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
var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__){
return (function (state_17638){
var state_val_17639 = (state_17638[(1)]);
if((state_val_17639 === (1))){
var inst_17624 = init;
var state_17638__$1 = (function (){var statearr_17640 = state_17638;
(statearr_17640[(7)] = inst_17624);

return statearr_17640;
})();
var statearr_17641_17656 = state_17638__$1;
(statearr_17641_17656[(2)] = null);

(statearr_17641_17656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17639 === (2))){
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17638__$1,(4),ch);
} else {
if((state_val_17639 === (3))){
var inst_17636 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17638__$1,inst_17636);
} else {
if((state_val_17639 === (4))){
var inst_17627 = (state_17638[(8)]);
var inst_17627__$1 = (state_17638[(2)]);
var inst_17628 = (inst_17627__$1 == null);
var state_17638__$1 = (function (){var statearr_17642 = state_17638;
(statearr_17642[(8)] = inst_17627__$1);

return statearr_17642;
})();
if(cljs.core.truth_(inst_17628)){
var statearr_17643_17657 = state_17638__$1;
(statearr_17643_17657[(1)] = (5));

} else {
var statearr_17644_17658 = state_17638__$1;
(statearr_17644_17658[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17639 === (5))){
var inst_17624 = (state_17638[(7)]);
var state_17638__$1 = state_17638;
var statearr_17645_17659 = state_17638__$1;
(statearr_17645_17659[(2)] = inst_17624);

(statearr_17645_17659[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17639 === (6))){
var inst_17624 = (state_17638[(7)]);
var inst_17627 = (state_17638[(8)]);
var inst_17631 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17624,inst_17627) : f.call(null,inst_17624,inst_17627));
var inst_17624__$1 = inst_17631;
var state_17638__$1 = (function (){var statearr_17646 = state_17638;
(statearr_17646[(7)] = inst_17624__$1);

return statearr_17646;
})();
var statearr_17647_17660 = state_17638__$1;
(statearr_17647_17660[(2)] = null);

(statearr_17647_17660[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17639 === (7))){
var inst_17634 = (state_17638[(2)]);
var state_17638__$1 = state_17638;
var statearr_17648_17661 = state_17638__$1;
(statearr_17648_17661[(2)] = inst_17634);

(statearr_17648_17661[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16904__auto__))
;
return ((function (switch__16790__auto__,c__16904__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16791__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16791__auto____0 = (function (){
var statearr_17652 = [null,null,null,null,null,null,null,null,null];
(statearr_17652[(0)] = cljs$core$async$reduce_$_state_machine__16791__auto__);

(statearr_17652[(1)] = (1));

return statearr_17652;
});
var cljs$core$async$reduce_$_state_machine__16791__auto____1 = (function (state_17638){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17638);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17653){if((e17653 instanceof Object)){
var ex__16794__auto__ = e17653;
var statearr_17654_17662 = state_17638;
(statearr_17654_17662[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17638);

return cljs.core.cst$kw$recur;
} else {
throw e17653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17663 = state_17638;
state_17638 = G__17663;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16791__auto__ = function(state_17638){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16791__auto____1.call(this,state_17638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16791__auto____0;
cljs$core$async$reduce_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16791__auto____1;
return cljs$core$async$reduce_$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__))
})();
var state__16906__auto__ = (function (){var statearr_17655 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_17655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__))
);

return c__16904__auto__;
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
var args17664 = [];
var len__6044__auto___17716 = arguments.length;
var i__6045__auto___17717 = (0);
while(true){
if((i__6045__auto___17717 < len__6044__auto___17716)){
args17664.push((arguments[i__6045__auto___17717]));

var G__17718 = (i__6045__auto___17717 + (1));
i__6045__auto___17717 = G__17718;
continue;
} else {
}
break;
}

var G__17666 = args17664.length;
switch (G__17666) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17664.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__){
return (function (state_17691){
var state_val_17692 = (state_17691[(1)]);
if((state_val_17692 === (7))){
var inst_17673 = (state_17691[(2)]);
var state_17691__$1 = state_17691;
var statearr_17693_17720 = state_17691__$1;
(statearr_17693_17720[(2)] = inst_17673);

(statearr_17693_17720[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (1))){
var inst_17667 = cljs.core.seq(coll);
var inst_17668 = inst_17667;
var state_17691__$1 = (function (){var statearr_17694 = state_17691;
(statearr_17694[(7)] = inst_17668);

return statearr_17694;
})();
var statearr_17695_17721 = state_17691__$1;
(statearr_17695_17721[(2)] = null);

(statearr_17695_17721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (4))){
var inst_17668 = (state_17691[(7)]);
var inst_17671 = cljs.core.first(inst_17668);
var state_17691__$1 = state_17691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17691__$1,(7),ch,inst_17671);
} else {
if((state_val_17692 === (13))){
var inst_17685 = (state_17691[(2)]);
var state_17691__$1 = state_17691;
var statearr_17696_17722 = state_17691__$1;
(statearr_17696_17722[(2)] = inst_17685);

(statearr_17696_17722[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (6))){
var inst_17676 = (state_17691[(2)]);
var state_17691__$1 = state_17691;
if(cljs.core.truth_(inst_17676)){
var statearr_17697_17723 = state_17691__$1;
(statearr_17697_17723[(1)] = (8));

} else {
var statearr_17698_17724 = state_17691__$1;
(statearr_17698_17724[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (3))){
var inst_17689 = (state_17691[(2)]);
var state_17691__$1 = state_17691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17691__$1,inst_17689);
} else {
if((state_val_17692 === (12))){
var state_17691__$1 = state_17691;
var statearr_17699_17725 = state_17691__$1;
(statearr_17699_17725[(2)] = null);

(statearr_17699_17725[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (2))){
var inst_17668 = (state_17691[(7)]);
var state_17691__$1 = state_17691;
if(cljs.core.truth_(inst_17668)){
var statearr_17700_17726 = state_17691__$1;
(statearr_17700_17726[(1)] = (4));

} else {
var statearr_17701_17727 = state_17691__$1;
(statearr_17701_17727[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (11))){
var inst_17682 = cljs.core.async.close_BANG_(ch);
var state_17691__$1 = state_17691;
var statearr_17702_17728 = state_17691__$1;
(statearr_17702_17728[(2)] = inst_17682);

(statearr_17702_17728[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (9))){
var state_17691__$1 = state_17691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17703_17729 = state_17691__$1;
(statearr_17703_17729[(1)] = (11));

} else {
var statearr_17704_17730 = state_17691__$1;
(statearr_17704_17730[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (5))){
var inst_17668 = (state_17691[(7)]);
var state_17691__$1 = state_17691;
var statearr_17705_17731 = state_17691__$1;
(statearr_17705_17731[(2)] = inst_17668);

(statearr_17705_17731[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (10))){
var inst_17687 = (state_17691[(2)]);
var state_17691__$1 = state_17691;
var statearr_17706_17732 = state_17691__$1;
(statearr_17706_17732[(2)] = inst_17687);

(statearr_17706_17732[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17692 === (8))){
var inst_17668 = (state_17691[(7)]);
var inst_17678 = cljs.core.next(inst_17668);
var inst_17668__$1 = inst_17678;
var state_17691__$1 = (function (){var statearr_17707 = state_17691;
(statearr_17707[(7)] = inst_17668__$1);

return statearr_17707;
})();
var statearr_17708_17733 = state_17691__$1;
(statearr_17708_17733[(2)] = null);

(statearr_17708_17733[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto__))
;
return ((function (switch__16790__auto__,c__16904__auto__){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_17712 = [null,null,null,null,null,null,null,null];
(statearr_17712[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_17712[(1)] = (1));

return statearr_17712;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_17691){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_17691);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e17713){if((e17713 instanceof Object)){
var ex__16794__auto__ = e17713;
var statearr_17714_17734 = state_17691;
(statearr_17714_17734[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17691);

return cljs.core.cst$kw$recur;
} else {
throw e17713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__17735 = state_17691;
state_17691 = G__17735;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_17691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_17691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__))
})();
var state__16906__auto__ = (function (){var statearr_17715 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_17715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_17715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__))
);

return c__16904__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5642__auto__.call(null,_));
} else {
var m__5642__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5642__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5642__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5642__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5642__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto__.call(null,m,ch));
} else {
var m__5642__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5642__auto__.call(null,m));
} else {
var m__5642__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5642__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__17960 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17960) : cljs.core.atom.call(null,G__17960));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17961 = (function (mult,ch,cs,meta17962){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17962 = meta17962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17963,meta17962__$1){
var self__ = this;
var _17963__$1 = this;
return (new cljs.core.async.t_cljs$core$async17961(self__.mult,self__.ch,self__.cs,meta17962__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17963){
var self__ = this;
var _17963__$1 = this;
return self__.meta17962;
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17964_18184 = self__.cs;
var G__17965_18185 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17964_18184,G__17965_18185) : cljs.core.reset_BANG_.call(null,G__17964_18184,G__17965_18185));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17962], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17961";

cljs.core.async.t_cljs$core$async17961.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async17961");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17961 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17961(mult__$1,ch__$1,cs__$1,meta17962){
return (new cljs.core.async.t_cljs$core$async17961(mult__$1,ch__$1,cs__$1,meta17962));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17961(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16904__auto___18186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___18186,cs,m,dchan,dctr,done){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___18186,cs,m,dchan,dctr,done){
return (function (state_18096){
var state_val_18097 = (state_18096[(1)]);
if((state_val_18097 === (7))){
var inst_18092 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18098_18187 = state_18096__$1;
(statearr_18098_18187[(2)] = inst_18092);

(statearr_18098_18187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (20))){
var inst_17997 = (state_18096[(7)]);
var inst_18007 = cljs.core.first(inst_17997);
var inst_18008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18007,(0),null);
var inst_18009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18007,(1),null);
var state_18096__$1 = (function (){var statearr_18099 = state_18096;
(statearr_18099[(8)] = inst_18008);

return statearr_18099;
})();
if(cljs.core.truth_(inst_18009)){
var statearr_18100_18188 = state_18096__$1;
(statearr_18100_18188[(1)] = (22));

} else {
var statearr_18101_18189 = state_18096__$1;
(statearr_18101_18189[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (27))){
var inst_18037 = (state_18096[(9)]);
var inst_18044 = (state_18096[(10)]);
var inst_18039 = (state_18096[(11)]);
var inst_17968 = (state_18096[(12)]);
var inst_18044__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18037,inst_18039);
var inst_18045 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18044__$1,inst_17968,done);
var state_18096__$1 = (function (){var statearr_18102 = state_18096;
(statearr_18102[(10)] = inst_18044__$1);

return statearr_18102;
})();
if(cljs.core.truth_(inst_18045)){
var statearr_18103_18190 = state_18096__$1;
(statearr_18103_18190[(1)] = (30));

} else {
var statearr_18104_18191 = state_18096__$1;
(statearr_18104_18191[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (1))){
var state_18096__$1 = state_18096;
var statearr_18105_18192 = state_18096__$1;
(statearr_18105_18192[(2)] = null);

(statearr_18105_18192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (24))){
var inst_17997 = (state_18096[(7)]);
var inst_18014 = (state_18096[(2)]);
var inst_18015 = cljs.core.next(inst_17997);
var inst_17977 = inst_18015;
var inst_17978 = null;
var inst_17979 = (0);
var inst_17980 = (0);
var state_18096__$1 = (function (){var statearr_18106 = state_18096;
(statearr_18106[(13)] = inst_17978);

(statearr_18106[(14)] = inst_17979);

(statearr_18106[(15)] = inst_17977);

(statearr_18106[(16)] = inst_18014);

(statearr_18106[(17)] = inst_17980);

return statearr_18106;
})();
var statearr_18107_18193 = state_18096__$1;
(statearr_18107_18193[(2)] = null);

(statearr_18107_18193[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (39))){
var state_18096__$1 = state_18096;
var statearr_18111_18194 = state_18096__$1;
(statearr_18111_18194[(2)] = null);

(statearr_18111_18194[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (4))){
var inst_17968 = (state_18096[(12)]);
var inst_17968__$1 = (state_18096[(2)]);
var inst_17969 = (inst_17968__$1 == null);
var state_18096__$1 = (function (){var statearr_18112 = state_18096;
(statearr_18112[(12)] = inst_17968__$1);

return statearr_18112;
})();
if(cljs.core.truth_(inst_17969)){
var statearr_18113_18195 = state_18096__$1;
(statearr_18113_18195[(1)] = (5));

} else {
var statearr_18114_18196 = state_18096__$1;
(statearr_18114_18196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (15))){
var inst_17978 = (state_18096[(13)]);
var inst_17979 = (state_18096[(14)]);
var inst_17977 = (state_18096[(15)]);
var inst_17980 = (state_18096[(17)]);
var inst_17993 = (state_18096[(2)]);
var inst_17994 = (inst_17980 + (1));
var tmp18108 = inst_17978;
var tmp18109 = inst_17979;
var tmp18110 = inst_17977;
var inst_17977__$1 = tmp18110;
var inst_17978__$1 = tmp18108;
var inst_17979__$1 = tmp18109;
var inst_17980__$1 = inst_17994;
var state_18096__$1 = (function (){var statearr_18115 = state_18096;
(statearr_18115[(13)] = inst_17978__$1);

(statearr_18115[(14)] = inst_17979__$1);

(statearr_18115[(15)] = inst_17977__$1);

(statearr_18115[(18)] = inst_17993);

(statearr_18115[(17)] = inst_17980__$1);

return statearr_18115;
})();
var statearr_18116_18197 = state_18096__$1;
(statearr_18116_18197[(2)] = null);

(statearr_18116_18197[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (21))){
var inst_18018 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18120_18198 = state_18096__$1;
(statearr_18120_18198[(2)] = inst_18018);

(statearr_18120_18198[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (31))){
var inst_18044 = (state_18096[(10)]);
var inst_18048 = done(null);
var inst_18049 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18044);
var state_18096__$1 = (function (){var statearr_18121 = state_18096;
(statearr_18121[(19)] = inst_18048);

return statearr_18121;
})();
var statearr_18122_18199 = state_18096__$1;
(statearr_18122_18199[(2)] = inst_18049);

(statearr_18122_18199[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (32))){
var inst_18037 = (state_18096[(9)]);
var inst_18039 = (state_18096[(11)]);
var inst_18036 = (state_18096[(20)]);
var inst_18038 = (state_18096[(21)]);
var inst_18051 = (state_18096[(2)]);
var inst_18052 = (inst_18039 + (1));
var tmp18117 = inst_18037;
var tmp18118 = inst_18036;
var tmp18119 = inst_18038;
var inst_18036__$1 = tmp18118;
var inst_18037__$1 = tmp18117;
var inst_18038__$1 = tmp18119;
var inst_18039__$1 = inst_18052;
var state_18096__$1 = (function (){var statearr_18123 = state_18096;
(statearr_18123[(9)] = inst_18037__$1);

(statearr_18123[(22)] = inst_18051);

(statearr_18123[(11)] = inst_18039__$1);

(statearr_18123[(20)] = inst_18036__$1);

(statearr_18123[(21)] = inst_18038__$1);

return statearr_18123;
})();
var statearr_18124_18200 = state_18096__$1;
(statearr_18124_18200[(2)] = null);

(statearr_18124_18200[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (40))){
var inst_18064 = (state_18096[(23)]);
var inst_18068 = done(null);
var inst_18069 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18064);
var state_18096__$1 = (function (){var statearr_18125 = state_18096;
(statearr_18125[(24)] = inst_18068);

return statearr_18125;
})();
var statearr_18126_18201 = state_18096__$1;
(statearr_18126_18201[(2)] = inst_18069);

(statearr_18126_18201[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (33))){
var inst_18055 = (state_18096[(25)]);
var inst_18057 = cljs.core.chunked_seq_QMARK_(inst_18055);
var state_18096__$1 = state_18096;
if(inst_18057){
var statearr_18127_18202 = state_18096__$1;
(statearr_18127_18202[(1)] = (36));

} else {
var statearr_18128_18203 = state_18096__$1;
(statearr_18128_18203[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (13))){
var inst_17987 = (state_18096[(26)]);
var inst_17990 = cljs.core.async.close_BANG_(inst_17987);
var state_18096__$1 = state_18096;
var statearr_18129_18204 = state_18096__$1;
(statearr_18129_18204[(2)] = inst_17990);

(statearr_18129_18204[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (22))){
var inst_18008 = (state_18096[(8)]);
var inst_18011 = cljs.core.async.close_BANG_(inst_18008);
var state_18096__$1 = state_18096;
var statearr_18130_18205 = state_18096__$1;
(statearr_18130_18205[(2)] = inst_18011);

(statearr_18130_18205[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (36))){
var inst_18055 = (state_18096[(25)]);
var inst_18059 = cljs.core.chunk_first(inst_18055);
var inst_18060 = cljs.core.chunk_rest(inst_18055);
var inst_18061 = cljs.core.count(inst_18059);
var inst_18036 = inst_18060;
var inst_18037 = inst_18059;
var inst_18038 = inst_18061;
var inst_18039 = (0);
var state_18096__$1 = (function (){var statearr_18131 = state_18096;
(statearr_18131[(9)] = inst_18037);

(statearr_18131[(11)] = inst_18039);

(statearr_18131[(20)] = inst_18036);

(statearr_18131[(21)] = inst_18038);

return statearr_18131;
})();
var statearr_18132_18206 = state_18096__$1;
(statearr_18132_18206[(2)] = null);

(statearr_18132_18206[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (41))){
var inst_18055 = (state_18096[(25)]);
var inst_18071 = (state_18096[(2)]);
var inst_18072 = cljs.core.next(inst_18055);
var inst_18036 = inst_18072;
var inst_18037 = null;
var inst_18038 = (0);
var inst_18039 = (0);
var state_18096__$1 = (function (){var statearr_18133 = state_18096;
(statearr_18133[(9)] = inst_18037);

(statearr_18133[(11)] = inst_18039);

(statearr_18133[(20)] = inst_18036);

(statearr_18133[(27)] = inst_18071);

(statearr_18133[(21)] = inst_18038);

return statearr_18133;
})();
var statearr_18134_18207 = state_18096__$1;
(statearr_18134_18207[(2)] = null);

(statearr_18134_18207[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (43))){
var state_18096__$1 = state_18096;
var statearr_18135_18208 = state_18096__$1;
(statearr_18135_18208[(2)] = null);

(statearr_18135_18208[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (29))){
var inst_18080 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18136_18209 = state_18096__$1;
(statearr_18136_18209[(2)] = inst_18080);

(statearr_18136_18209[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (44))){
var inst_18089 = (state_18096[(2)]);
var state_18096__$1 = (function (){var statearr_18137 = state_18096;
(statearr_18137[(28)] = inst_18089);

return statearr_18137;
})();
var statearr_18138_18210 = state_18096__$1;
(statearr_18138_18210[(2)] = null);

(statearr_18138_18210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (6))){
var inst_18028 = (state_18096[(29)]);
var inst_18027 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_18028__$1 = cljs.core.keys(inst_18027);
var inst_18029 = cljs.core.count(inst_18028__$1);
var inst_18030 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_18029) : cljs.core.reset_BANG_.call(null,dctr,inst_18029));
var inst_18035 = cljs.core.seq(inst_18028__$1);
var inst_18036 = inst_18035;
var inst_18037 = null;
var inst_18038 = (0);
var inst_18039 = (0);
var state_18096__$1 = (function (){var statearr_18139 = state_18096;
(statearr_18139[(9)] = inst_18037);

(statearr_18139[(30)] = inst_18030);

(statearr_18139[(11)] = inst_18039);

(statearr_18139[(29)] = inst_18028__$1);

(statearr_18139[(20)] = inst_18036);

(statearr_18139[(21)] = inst_18038);

return statearr_18139;
})();
var statearr_18140_18211 = state_18096__$1;
(statearr_18140_18211[(2)] = null);

(statearr_18140_18211[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (28))){
var inst_18055 = (state_18096[(25)]);
var inst_18036 = (state_18096[(20)]);
var inst_18055__$1 = cljs.core.seq(inst_18036);
var state_18096__$1 = (function (){var statearr_18141 = state_18096;
(statearr_18141[(25)] = inst_18055__$1);

return statearr_18141;
})();
if(inst_18055__$1){
var statearr_18142_18212 = state_18096__$1;
(statearr_18142_18212[(1)] = (33));

} else {
var statearr_18143_18213 = state_18096__$1;
(statearr_18143_18213[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (25))){
var inst_18039 = (state_18096[(11)]);
var inst_18038 = (state_18096[(21)]);
var inst_18041 = (inst_18039 < inst_18038);
var inst_18042 = inst_18041;
var state_18096__$1 = state_18096;
if(cljs.core.truth_(inst_18042)){
var statearr_18144_18214 = state_18096__$1;
(statearr_18144_18214[(1)] = (27));

} else {
var statearr_18145_18215 = state_18096__$1;
(statearr_18145_18215[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (34))){
var state_18096__$1 = state_18096;
var statearr_18146_18216 = state_18096__$1;
(statearr_18146_18216[(2)] = null);

(statearr_18146_18216[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (17))){
var state_18096__$1 = state_18096;
var statearr_18147_18217 = state_18096__$1;
(statearr_18147_18217[(2)] = null);

(statearr_18147_18217[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (3))){
var inst_18094 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18096__$1,inst_18094);
} else {
if((state_val_18097 === (12))){
var inst_18023 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18148_18218 = state_18096__$1;
(statearr_18148_18218[(2)] = inst_18023);

(statearr_18148_18218[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (2))){
var state_18096__$1 = state_18096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18096__$1,(4),ch);
} else {
if((state_val_18097 === (23))){
var state_18096__$1 = state_18096;
var statearr_18149_18219 = state_18096__$1;
(statearr_18149_18219[(2)] = null);

(statearr_18149_18219[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (35))){
var inst_18078 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18150_18220 = state_18096__$1;
(statearr_18150_18220[(2)] = inst_18078);

(statearr_18150_18220[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (19))){
var inst_17997 = (state_18096[(7)]);
var inst_18001 = cljs.core.chunk_first(inst_17997);
var inst_18002 = cljs.core.chunk_rest(inst_17997);
var inst_18003 = cljs.core.count(inst_18001);
var inst_17977 = inst_18002;
var inst_17978 = inst_18001;
var inst_17979 = inst_18003;
var inst_17980 = (0);
var state_18096__$1 = (function (){var statearr_18151 = state_18096;
(statearr_18151[(13)] = inst_17978);

(statearr_18151[(14)] = inst_17979);

(statearr_18151[(15)] = inst_17977);

(statearr_18151[(17)] = inst_17980);

return statearr_18151;
})();
var statearr_18152_18221 = state_18096__$1;
(statearr_18152_18221[(2)] = null);

(statearr_18152_18221[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (11))){
var inst_17997 = (state_18096[(7)]);
var inst_17977 = (state_18096[(15)]);
var inst_17997__$1 = cljs.core.seq(inst_17977);
var state_18096__$1 = (function (){var statearr_18153 = state_18096;
(statearr_18153[(7)] = inst_17997__$1);

return statearr_18153;
})();
if(inst_17997__$1){
var statearr_18154_18222 = state_18096__$1;
(statearr_18154_18222[(1)] = (16));

} else {
var statearr_18155_18223 = state_18096__$1;
(statearr_18155_18223[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (9))){
var inst_18025 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18156_18224 = state_18096__$1;
(statearr_18156_18224[(2)] = inst_18025);

(statearr_18156_18224[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (5))){
var inst_17975 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17976 = cljs.core.seq(inst_17975);
var inst_17977 = inst_17976;
var inst_17978 = null;
var inst_17979 = (0);
var inst_17980 = (0);
var state_18096__$1 = (function (){var statearr_18157 = state_18096;
(statearr_18157[(13)] = inst_17978);

(statearr_18157[(14)] = inst_17979);

(statearr_18157[(15)] = inst_17977);

(statearr_18157[(17)] = inst_17980);

return statearr_18157;
})();
var statearr_18158_18225 = state_18096__$1;
(statearr_18158_18225[(2)] = null);

(statearr_18158_18225[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (14))){
var state_18096__$1 = state_18096;
var statearr_18159_18226 = state_18096__$1;
(statearr_18159_18226[(2)] = null);

(statearr_18159_18226[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (45))){
var inst_18086 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18160_18227 = state_18096__$1;
(statearr_18160_18227[(2)] = inst_18086);

(statearr_18160_18227[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (26))){
var inst_18028 = (state_18096[(29)]);
var inst_18082 = (state_18096[(2)]);
var inst_18083 = cljs.core.seq(inst_18028);
var state_18096__$1 = (function (){var statearr_18161 = state_18096;
(statearr_18161[(31)] = inst_18082);

return statearr_18161;
})();
if(inst_18083){
var statearr_18162_18228 = state_18096__$1;
(statearr_18162_18228[(1)] = (42));

} else {
var statearr_18163_18229 = state_18096__$1;
(statearr_18163_18229[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (16))){
var inst_17997 = (state_18096[(7)]);
var inst_17999 = cljs.core.chunked_seq_QMARK_(inst_17997);
var state_18096__$1 = state_18096;
if(inst_17999){
var statearr_18164_18230 = state_18096__$1;
(statearr_18164_18230[(1)] = (19));

} else {
var statearr_18165_18231 = state_18096__$1;
(statearr_18165_18231[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (38))){
var inst_18075 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18166_18232 = state_18096__$1;
(statearr_18166_18232[(2)] = inst_18075);

(statearr_18166_18232[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (30))){
var state_18096__$1 = state_18096;
var statearr_18167_18233 = state_18096__$1;
(statearr_18167_18233[(2)] = null);

(statearr_18167_18233[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (10))){
var inst_17978 = (state_18096[(13)]);
var inst_17980 = (state_18096[(17)]);
var inst_17986 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17978,inst_17980);
var inst_17987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17986,(0),null);
var inst_17988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17986,(1),null);
var state_18096__$1 = (function (){var statearr_18168 = state_18096;
(statearr_18168[(26)] = inst_17987);

return statearr_18168;
})();
if(cljs.core.truth_(inst_17988)){
var statearr_18169_18234 = state_18096__$1;
(statearr_18169_18234[(1)] = (13));

} else {
var statearr_18170_18235 = state_18096__$1;
(statearr_18170_18235[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (18))){
var inst_18021 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18171_18236 = state_18096__$1;
(statearr_18171_18236[(2)] = inst_18021);

(statearr_18171_18236[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (42))){
var state_18096__$1 = state_18096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18096__$1,(45),dchan);
} else {
if((state_val_18097 === (37))){
var inst_17968 = (state_18096[(12)]);
var inst_18055 = (state_18096[(25)]);
var inst_18064 = (state_18096[(23)]);
var inst_18064__$1 = cljs.core.first(inst_18055);
var inst_18065 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18064__$1,inst_17968,done);
var state_18096__$1 = (function (){var statearr_18172 = state_18096;
(statearr_18172[(23)] = inst_18064__$1);

return statearr_18172;
})();
if(cljs.core.truth_(inst_18065)){
var statearr_18173_18237 = state_18096__$1;
(statearr_18173_18237[(1)] = (39));

} else {
var statearr_18174_18238 = state_18096__$1;
(statearr_18174_18238[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18097 === (8))){
var inst_17979 = (state_18096[(14)]);
var inst_17980 = (state_18096[(17)]);
var inst_17982 = (inst_17980 < inst_17979);
var inst_17983 = inst_17982;
var state_18096__$1 = state_18096;
if(cljs.core.truth_(inst_17983)){
var statearr_18175_18239 = state_18096__$1;
(statearr_18175_18239[(1)] = (10));

} else {
var statearr_18176_18240 = state_18096__$1;
(statearr_18176_18240[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___18186,cs,m,dchan,dctr,done))
;
return ((function (switch__16790__auto__,c__16904__auto___18186,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16791__auto__ = null;
var cljs$core$async$mult_$_state_machine__16791__auto____0 = (function (){
var statearr_18180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18180[(0)] = cljs$core$async$mult_$_state_machine__16791__auto__);

(statearr_18180[(1)] = (1));

return statearr_18180;
});
var cljs$core$async$mult_$_state_machine__16791__auto____1 = (function (state_18096){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_18096);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e18181){if((e18181 instanceof Object)){
var ex__16794__auto__ = e18181;
var statearr_18182_18241 = state_18096;
(statearr_18182_18241[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18096);

return cljs.core.cst$kw$recur;
} else {
throw e18181;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__18242 = state_18096;
state_18096 = G__18242;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16791__auto__ = function(state_18096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16791__auto____1.call(this,state_18096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16791__auto____0;
cljs$core$async$mult_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16791__auto____1;
return cljs$core$async$mult_$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___18186,cs,m,dchan,dctr,done))
})();
var state__16906__auto__ = (function (){var statearr_18183 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_18183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___18186);

return statearr_18183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___18186,cs,m,dchan,dctr,done))
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
var args18243 = [];
var len__6044__auto___18246 = arguments.length;
var i__6045__auto___18247 = (0);
while(true){
if((i__6045__auto___18247 < len__6044__auto___18246)){
args18243.push((arguments[i__6045__auto___18247]));

var G__18248 = (i__6045__auto___18247 + (1));
i__6045__auto___18247 = G__18248;
continue;
} else {
}
break;
}

var G__18245 = args18243.length;
switch (G__18245) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18243.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto__.call(null,m,ch));
} else {
var m__5642__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto__.call(null,m,ch));
} else {
var m__5642__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5642__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5642__auto__.call(null,m));
} else {
var m__5642__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5642__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5642__auto__.call(null,m,state_map));
} else {
var m__5642__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5642__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5642__auto__.call(null,m,mode));
} else {
var m__5642__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5642__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___18260 = arguments.length;
var i__6045__auto___18261 = (0);
while(true){
if((i__6045__auto___18261 < len__6044__auto___18260)){
args__6051__auto__.push((arguments[i__6045__auto___18261]));

var G__18262 = (i__6045__auto___18261 + (1));
i__6045__auto___18261 = G__18262;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((3) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6052__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18254){
var map__18255 = p__18254;
var map__18255__$1 = ((((!((map__18255 == null)))?((((map__18255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18255):map__18255);
var opts = map__18255__$1;
var statearr_18257_18263 = state;
(statearr_18257_18263[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__18255,map__18255__$1,opts){
return (function (val){
var statearr_18258_18264 = state;
(statearr_18258_18264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18255,map__18255__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18259_18265 = state;
(statearr_18259_18265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18250){
var G__18251 = cljs.core.first(seq18250);
var seq18250__$1 = cljs.core.next(seq18250);
var G__18252 = cljs.core.first(seq18250__$1);
var seq18250__$2 = cljs.core.next(seq18250__$1);
var G__18253 = cljs.core.first(seq18250__$2);
var seq18250__$3 = cljs.core.next(seq18250__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18251,G__18252,G__18253,seq18250__$3);
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
var cs = (function (){var G__18432 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18432) : cljs.core.atom.call(null,G__18432));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18433 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18434){
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
this.meta18434 = meta18434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18435,meta18434__$1){
var self__ = this;
var _18435__$1 = this;
return (new cljs.core.async.t_cljs$core$async18433(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18434__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18435){
var self__ = this;
var _18435__$1 = this;
return self__.meta18434;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18436_18598 = self__.cs;
var G__18437_18599 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18436_18598,G__18437_18599) : cljs.core.reset_BANG_.call(null,G__18436_18598,G__18437_18599));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta18434], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18433";

cljs.core.async.t_cljs$core$async18433.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async18433");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18433 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18433(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18434){
return (new cljs.core.async.t_cljs$core$async18433(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18434));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18433(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16904__auto___18600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18535){
var state_val_18536 = (state_18535[(1)]);
if((state_val_18536 === (7))){
var inst_18453 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18537_18601 = state_18535__$1;
(statearr_18537_18601[(2)] = inst_18453);

(statearr_18537_18601[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (20))){
var inst_18465 = (state_18535[(7)]);
var state_18535__$1 = state_18535;
var statearr_18538_18602 = state_18535__$1;
(statearr_18538_18602[(2)] = inst_18465);

(statearr_18538_18602[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (27))){
var state_18535__$1 = state_18535;
var statearr_18539_18603 = state_18535__$1;
(statearr_18539_18603[(2)] = null);

(statearr_18539_18603[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (1))){
var inst_18441 = (state_18535[(8)]);
var inst_18441__$1 = calc_state();
var inst_18443 = (inst_18441__$1 == null);
var inst_18444 = cljs.core.not(inst_18443);
var state_18535__$1 = (function (){var statearr_18540 = state_18535;
(statearr_18540[(8)] = inst_18441__$1);

return statearr_18540;
})();
if(inst_18444){
var statearr_18541_18604 = state_18535__$1;
(statearr_18541_18604[(1)] = (2));

} else {
var statearr_18542_18605 = state_18535__$1;
(statearr_18542_18605[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (24))){
var inst_18509 = (state_18535[(9)]);
var inst_18488 = (state_18535[(10)]);
var inst_18495 = (state_18535[(11)]);
var inst_18509__$1 = (inst_18488.cljs$core$IFn$_invoke$arity$1 ? inst_18488.cljs$core$IFn$_invoke$arity$1(inst_18495) : inst_18488.call(null,inst_18495));
var state_18535__$1 = (function (){var statearr_18543 = state_18535;
(statearr_18543[(9)] = inst_18509__$1);

return statearr_18543;
})();
if(cljs.core.truth_(inst_18509__$1)){
var statearr_18544_18606 = state_18535__$1;
(statearr_18544_18606[(1)] = (29));

} else {
var statearr_18545_18607 = state_18535__$1;
(statearr_18545_18607[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (4))){
var inst_18456 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18456)){
var statearr_18546_18608 = state_18535__$1;
(statearr_18546_18608[(1)] = (8));

} else {
var statearr_18547_18609 = state_18535__$1;
(statearr_18547_18609[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (15))){
var inst_18482 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18482)){
var statearr_18548_18610 = state_18535__$1;
(statearr_18548_18610[(1)] = (19));

} else {
var statearr_18549_18611 = state_18535__$1;
(statearr_18549_18611[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (21))){
var inst_18487 = (state_18535[(12)]);
var inst_18487__$1 = (state_18535[(2)]);
var inst_18488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18487__$1,cljs.core.cst$kw$solos);
var inst_18489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18487__$1,cljs.core.cst$kw$mutes);
var inst_18490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18487__$1,cljs.core.cst$kw$reads);
var state_18535__$1 = (function (){var statearr_18550 = state_18535;
(statearr_18550[(12)] = inst_18487__$1);

(statearr_18550[(13)] = inst_18489);

(statearr_18550[(10)] = inst_18488);

return statearr_18550;
})();
return cljs.core.async.ioc_alts_BANG_(state_18535__$1,(22),inst_18490);
} else {
if((state_val_18536 === (31))){
var inst_18517 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18517)){
var statearr_18551_18612 = state_18535__$1;
(statearr_18551_18612[(1)] = (32));

} else {
var statearr_18552_18613 = state_18535__$1;
(statearr_18552_18613[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (32))){
var inst_18494 = (state_18535[(14)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18535__$1,(35),out,inst_18494);
} else {
if((state_val_18536 === (33))){
var inst_18487 = (state_18535[(12)]);
var inst_18465 = inst_18487;
var state_18535__$1 = (function (){var statearr_18553 = state_18535;
(statearr_18553[(7)] = inst_18465);

return statearr_18553;
})();
var statearr_18554_18614 = state_18535__$1;
(statearr_18554_18614[(2)] = null);

(statearr_18554_18614[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (13))){
var inst_18465 = (state_18535[(7)]);
var inst_18472 = inst_18465.cljs$lang$protocol_mask$partition0$;
var inst_18473 = (inst_18472 & (64));
var inst_18474 = inst_18465.cljs$core$ISeq$;
var inst_18475 = (inst_18473) || (inst_18474);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18475)){
var statearr_18555_18615 = state_18535__$1;
(statearr_18555_18615[(1)] = (16));

} else {
var statearr_18556_18616 = state_18535__$1;
(statearr_18556_18616[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (22))){
var inst_18494 = (state_18535[(14)]);
var inst_18495 = (state_18535[(11)]);
var inst_18493 = (state_18535[(2)]);
var inst_18494__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18493,(0),null);
var inst_18495__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18493,(1),null);
var inst_18496 = (inst_18494__$1 == null);
var inst_18497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18495__$1,change);
var inst_18498 = (inst_18496) || (inst_18497);
var state_18535__$1 = (function (){var statearr_18557 = state_18535;
(statearr_18557[(14)] = inst_18494__$1);

(statearr_18557[(11)] = inst_18495__$1);

return statearr_18557;
})();
if(cljs.core.truth_(inst_18498)){
var statearr_18558_18617 = state_18535__$1;
(statearr_18558_18617[(1)] = (23));

} else {
var statearr_18559_18618 = state_18535__$1;
(statearr_18559_18618[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (36))){
var inst_18487 = (state_18535[(12)]);
var inst_18465 = inst_18487;
var state_18535__$1 = (function (){var statearr_18560 = state_18535;
(statearr_18560[(7)] = inst_18465);

return statearr_18560;
})();
var statearr_18561_18619 = state_18535__$1;
(statearr_18561_18619[(2)] = null);

(statearr_18561_18619[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (29))){
var inst_18509 = (state_18535[(9)]);
var state_18535__$1 = state_18535;
var statearr_18562_18620 = state_18535__$1;
(statearr_18562_18620[(2)] = inst_18509);

(statearr_18562_18620[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (6))){
var state_18535__$1 = state_18535;
var statearr_18563_18621 = state_18535__$1;
(statearr_18563_18621[(2)] = false);

(statearr_18563_18621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (28))){
var inst_18505 = (state_18535[(2)]);
var inst_18506 = calc_state();
var inst_18465 = inst_18506;
var state_18535__$1 = (function (){var statearr_18564 = state_18535;
(statearr_18564[(7)] = inst_18465);

(statearr_18564[(15)] = inst_18505);

return statearr_18564;
})();
var statearr_18565_18622 = state_18535__$1;
(statearr_18565_18622[(2)] = null);

(statearr_18565_18622[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (25))){
var inst_18531 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18566_18623 = state_18535__$1;
(statearr_18566_18623[(2)] = inst_18531);

(statearr_18566_18623[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (34))){
var inst_18529 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18567_18624 = state_18535__$1;
(statearr_18567_18624[(2)] = inst_18529);

(statearr_18567_18624[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (17))){
var state_18535__$1 = state_18535;
var statearr_18568_18625 = state_18535__$1;
(statearr_18568_18625[(2)] = false);

(statearr_18568_18625[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (3))){
var state_18535__$1 = state_18535;
var statearr_18569_18626 = state_18535__$1;
(statearr_18569_18626[(2)] = false);

(statearr_18569_18626[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (12))){
var inst_18533 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18535__$1,inst_18533);
} else {
if((state_val_18536 === (2))){
var inst_18441 = (state_18535[(8)]);
var inst_18446 = inst_18441.cljs$lang$protocol_mask$partition0$;
var inst_18447 = (inst_18446 & (64));
var inst_18448 = inst_18441.cljs$core$ISeq$;
var inst_18449 = (inst_18447) || (inst_18448);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18449)){
var statearr_18570_18627 = state_18535__$1;
(statearr_18570_18627[(1)] = (5));

} else {
var statearr_18571_18628 = state_18535__$1;
(statearr_18571_18628[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (23))){
var inst_18494 = (state_18535[(14)]);
var inst_18500 = (inst_18494 == null);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18500)){
var statearr_18572_18629 = state_18535__$1;
(statearr_18572_18629[(1)] = (26));

} else {
var statearr_18573_18630 = state_18535__$1;
(statearr_18573_18630[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (35))){
var inst_18520 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
if(cljs.core.truth_(inst_18520)){
var statearr_18574_18631 = state_18535__$1;
(statearr_18574_18631[(1)] = (36));

} else {
var statearr_18575_18632 = state_18535__$1;
(statearr_18575_18632[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (19))){
var inst_18465 = (state_18535[(7)]);
var inst_18484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18465);
var state_18535__$1 = state_18535;
var statearr_18576_18633 = state_18535__$1;
(statearr_18576_18633[(2)] = inst_18484);

(statearr_18576_18633[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (11))){
var inst_18465 = (state_18535[(7)]);
var inst_18469 = (inst_18465 == null);
var inst_18470 = cljs.core.not(inst_18469);
var state_18535__$1 = state_18535;
if(inst_18470){
var statearr_18577_18634 = state_18535__$1;
(statearr_18577_18634[(1)] = (13));

} else {
var statearr_18578_18635 = state_18535__$1;
(statearr_18578_18635[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (9))){
var inst_18441 = (state_18535[(8)]);
var state_18535__$1 = state_18535;
var statearr_18579_18636 = state_18535__$1;
(statearr_18579_18636[(2)] = inst_18441);

(statearr_18579_18636[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (5))){
var state_18535__$1 = state_18535;
var statearr_18580_18637 = state_18535__$1;
(statearr_18580_18637[(2)] = true);

(statearr_18580_18637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (14))){
var state_18535__$1 = state_18535;
var statearr_18581_18638 = state_18535__$1;
(statearr_18581_18638[(2)] = false);

(statearr_18581_18638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (26))){
var inst_18495 = (state_18535[(11)]);
var inst_18502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18495);
var state_18535__$1 = state_18535;
var statearr_18582_18639 = state_18535__$1;
(statearr_18582_18639[(2)] = inst_18502);

(statearr_18582_18639[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (16))){
var state_18535__$1 = state_18535;
var statearr_18583_18640 = state_18535__$1;
(statearr_18583_18640[(2)] = true);

(statearr_18583_18640[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (38))){
var inst_18525 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18584_18641 = state_18535__$1;
(statearr_18584_18641[(2)] = inst_18525);

(statearr_18584_18641[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (30))){
var inst_18489 = (state_18535[(13)]);
var inst_18488 = (state_18535[(10)]);
var inst_18495 = (state_18535[(11)]);
var inst_18512 = cljs.core.empty_QMARK_(inst_18488);
var inst_18513 = (inst_18489.cljs$core$IFn$_invoke$arity$1 ? inst_18489.cljs$core$IFn$_invoke$arity$1(inst_18495) : inst_18489.call(null,inst_18495));
var inst_18514 = cljs.core.not(inst_18513);
var inst_18515 = (inst_18512) && (inst_18514);
var state_18535__$1 = state_18535;
var statearr_18585_18642 = state_18535__$1;
(statearr_18585_18642[(2)] = inst_18515);

(statearr_18585_18642[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (10))){
var inst_18441 = (state_18535[(8)]);
var inst_18461 = (state_18535[(2)]);
var inst_18462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18461,cljs.core.cst$kw$solos);
var inst_18463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18461,cljs.core.cst$kw$mutes);
var inst_18464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18461,cljs.core.cst$kw$reads);
var inst_18465 = inst_18441;
var state_18535__$1 = (function (){var statearr_18586 = state_18535;
(statearr_18586[(16)] = inst_18462);

(statearr_18586[(7)] = inst_18465);

(statearr_18586[(17)] = inst_18464);

(statearr_18586[(18)] = inst_18463);

return statearr_18586;
})();
var statearr_18587_18643 = state_18535__$1;
(statearr_18587_18643[(2)] = null);

(statearr_18587_18643[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (18))){
var inst_18479 = (state_18535[(2)]);
var state_18535__$1 = state_18535;
var statearr_18588_18644 = state_18535__$1;
(statearr_18588_18644[(2)] = inst_18479);

(statearr_18588_18644[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (37))){
var state_18535__$1 = state_18535;
var statearr_18589_18645 = state_18535__$1;
(statearr_18589_18645[(2)] = null);

(statearr_18589_18645[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18536 === (8))){
var inst_18441 = (state_18535[(8)]);
var inst_18458 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18441);
var state_18535__$1 = state_18535;
var statearr_18590_18646 = state_18535__$1;
(statearr_18590_18646[(2)] = inst_18458);

(statearr_18590_18646[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16790__auto__,c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16791__auto__ = null;
var cljs$core$async$mix_$_state_machine__16791__auto____0 = (function (){
var statearr_18594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18594[(0)] = cljs$core$async$mix_$_state_machine__16791__auto__);

(statearr_18594[(1)] = (1));

return statearr_18594;
});
var cljs$core$async$mix_$_state_machine__16791__auto____1 = (function (state_18535){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_18535);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e18595){if((e18595 instanceof Object)){
var ex__16794__auto__ = e18595;
var statearr_18596_18647 = state_18535;
(statearr_18596_18647[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18535);

return cljs.core.cst$kw$recur;
} else {
throw e18595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__18648 = state_18535;
state_18535 = G__18648;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16791__auto__ = function(state_18535){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16791__auto____1.call(this,state_18535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16791__auto____0;
cljs$core$async$mix_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16791__auto____1;
return cljs$core$async$mix_$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16906__auto__ = (function (){var statearr_18597 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_18597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___18600);

return statearr_18597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___18600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5642__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5642__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5642__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5642__auto__.call(null,p,v,ch));
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5642__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18649 = [];
var len__6044__auto___18652 = arguments.length;
var i__6045__auto___18653 = (0);
while(true){
if((i__6045__auto___18653 < len__6044__auto___18652)){
args18649.push((arguments[i__6045__auto___18653]));

var G__18654 = (i__6045__auto___18653 + (1));
i__6045__auto___18653 = G__18654;
continue;
} else {
}
break;
}

var G__18651 = args18649.length;
switch (G__18651) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18649.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5641__auto__ = (((p == null))?null:p);
var m__5642__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5642__auto__.call(null,p));
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5642__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5642__auto__.call(null,p,v));
} else {
var m__5642__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5642__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args18657 = [];
var len__6044__auto___18785 = arguments.length;
var i__6045__auto___18786 = (0);
while(true){
if((i__6045__auto___18786 < len__6044__auto___18785)){
args18657.push((arguments[i__6045__auto___18786]));

var G__18787 = (i__6045__auto___18786 + (1));
i__6045__auto___18786 = G__18787;
continue;
} else {
}
break;
}

var G__18659 = args18657.length;
switch (G__18659) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18657.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18660) : cljs.core.atom.call(null,G__18660));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4986__auto__,mults){
return (function (p1__18656_SHARP_){
if(cljs.core.truth_((p1__18656_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18656_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18656_SHARP_.call(null,topic)))){
return p1__18656_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18656_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4986__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18661 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18662){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18662 = meta18662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18663,meta18662__$1){
var self__ = this;
var _18663__$1 = this;
return (new cljs.core.async.t_cljs$core$async18661(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18662__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18663){
var self__ = this;
var _18663__$1 = this;
return self__.meta18662;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18664 = self__.mults;
var G__18665 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18664,G__18665) : cljs.core.reset_BANG_.call(null,G__18664,G__18665));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18662], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18661";

cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async18661");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18661 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18661(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18662){
return (new cljs.core.async.t_cljs$core$async18661(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18662));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18661(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16904__auto___18789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___18789,mults,ensure_mult,p){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___18789,mults,ensure_mult,p){
return (function (state_18737){
var state_val_18738 = (state_18737[(1)]);
if((state_val_18738 === (7))){
var inst_18733 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18739_18790 = state_18737__$1;
(statearr_18739_18790[(2)] = inst_18733);

(statearr_18739_18790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (20))){
var state_18737__$1 = state_18737;
var statearr_18740_18791 = state_18737__$1;
(statearr_18740_18791[(2)] = null);

(statearr_18740_18791[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (1))){
var state_18737__$1 = state_18737;
var statearr_18741_18792 = state_18737__$1;
(statearr_18741_18792[(2)] = null);

(statearr_18741_18792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (24))){
var inst_18716 = (state_18737[(7)]);
var inst_18725 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18716);
var state_18737__$1 = state_18737;
var statearr_18742_18793 = state_18737__$1;
(statearr_18742_18793[(2)] = inst_18725);

(statearr_18742_18793[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (4))){
var inst_18668 = (state_18737[(8)]);
var inst_18668__$1 = (state_18737[(2)]);
var inst_18669 = (inst_18668__$1 == null);
var state_18737__$1 = (function (){var statearr_18743 = state_18737;
(statearr_18743[(8)] = inst_18668__$1);

return statearr_18743;
})();
if(cljs.core.truth_(inst_18669)){
var statearr_18744_18794 = state_18737__$1;
(statearr_18744_18794[(1)] = (5));

} else {
var statearr_18745_18795 = state_18737__$1;
(statearr_18745_18795[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (15))){
var inst_18710 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18746_18796 = state_18737__$1;
(statearr_18746_18796[(2)] = inst_18710);

(statearr_18746_18796[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (21))){
var inst_18730 = (state_18737[(2)]);
var state_18737__$1 = (function (){var statearr_18747 = state_18737;
(statearr_18747[(9)] = inst_18730);

return statearr_18747;
})();
var statearr_18748_18797 = state_18737__$1;
(statearr_18748_18797[(2)] = null);

(statearr_18748_18797[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (13))){
var inst_18692 = (state_18737[(10)]);
var inst_18694 = cljs.core.chunked_seq_QMARK_(inst_18692);
var state_18737__$1 = state_18737;
if(inst_18694){
var statearr_18749_18798 = state_18737__$1;
(statearr_18749_18798[(1)] = (16));

} else {
var statearr_18750_18799 = state_18737__$1;
(statearr_18750_18799[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (22))){
var inst_18722 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
if(cljs.core.truth_(inst_18722)){
var statearr_18751_18800 = state_18737__$1;
(statearr_18751_18800[(1)] = (23));

} else {
var statearr_18752_18801 = state_18737__$1;
(statearr_18752_18801[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (6))){
var inst_18718 = (state_18737[(11)]);
var inst_18716 = (state_18737[(7)]);
var inst_18668 = (state_18737[(8)]);
var inst_18716__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18668) : topic_fn.call(null,inst_18668));
var inst_18717 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18718__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18717,inst_18716__$1);
var state_18737__$1 = (function (){var statearr_18753 = state_18737;
(statearr_18753[(11)] = inst_18718__$1);

(statearr_18753[(7)] = inst_18716__$1);

return statearr_18753;
})();
if(cljs.core.truth_(inst_18718__$1)){
var statearr_18754_18802 = state_18737__$1;
(statearr_18754_18802[(1)] = (19));

} else {
var statearr_18755_18803 = state_18737__$1;
(statearr_18755_18803[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (25))){
var inst_18727 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18756_18804 = state_18737__$1;
(statearr_18756_18804[(2)] = inst_18727);

(statearr_18756_18804[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (17))){
var inst_18692 = (state_18737[(10)]);
var inst_18701 = cljs.core.first(inst_18692);
var inst_18702 = cljs.core.async.muxch_STAR_(inst_18701);
var inst_18703 = cljs.core.async.close_BANG_(inst_18702);
var inst_18704 = cljs.core.next(inst_18692);
var inst_18678 = inst_18704;
var inst_18679 = null;
var inst_18680 = (0);
var inst_18681 = (0);
var state_18737__$1 = (function (){var statearr_18757 = state_18737;
(statearr_18757[(12)] = inst_18678);

(statearr_18757[(13)] = inst_18681);

(statearr_18757[(14)] = inst_18680);

(statearr_18757[(15)] = inst_18703);

(statearr_18757[(16)] = inst_18679);

return statearr_18757;
})();
var statearr_18758_18805 = state_18737__$1;
(statearr_18758_18805[(2)] = null);

(statearr_18758_18805[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (3))){
var inst_18735 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18737__$1,inst_18735);
} else {
if((state_val_18738 === (12))){
var inst_18712 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18759_18806 = state_18737__$1;
(statearr_18759_18806[(2)] = inst_18712);

(statearr_18759_18806[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (2))){
var state_18737__$1 = state_18737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18737__$1,(4),ch);
} else {
if((state_val_18738 === (23))){
var state_18737__$1 = state_18737;
var statearr_18760_18807 = state_18737__$1;
(statearr_18760_18807[(2)] = null);

(statearr_18760_18807[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (19))){
var inst_18718 = (state_18737[(11)]);
var inst_18668 = (state_18737[(8)]);
var inst_18720 = cljs.core.async.muxch_STAR_(inst_18718);
var state_18737__$1 = state_18737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18737__$1,(22),inst_18720,inst_18668);
} else {
if((state_val_18738 === (11))){
var inst_18678 = (state_18737[(12)]);
var inst_18692 = (state_18737[(10)]);
var inst_18692__$1 = cljs.core.seq(inst_18678);
var state_18737__$1 = (function (){var statearr_18761 = state_18737;
(statearr_18761[(10)] = inst_18692__$1);

return statearr_18761;
})();
if(inst_18692__$1){
var statearr_18762_18808 = state_18737__$1;
(statearr_18762_18808[(1)] = (13));

} else {
var statearr_18763_18809 = state_18737__$1;
(statearr_18763_18809[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (9))){
var inst_18714 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18764_18810 = state_18737__$1;
(statearr_18764_18810[(2)] = inst_18714);

(statearr_18764_18810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (5))){
var inst_18675 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18676 = cljs.core.vals(inst_18675);
var inst_18677 = cljs.core.seq(inst_18676);
var inst_18678 = inst_18677;
var inst_18679 = null;
var inst_18680 = (0);
var inst_18681 = (0);
var state_18737__$1 = (function (){var statearr_18765 = state_18737;
(statearr_18765[(12)] = inst_18678);

(statearr_18765[(13)] = inst_18681);

(statearr_18765[(14)] = inst_18680);

(statearr_18765[(16)] = inst_18679);

return statearr_18765;
})();
var statearr_18766_18811 = state_18737__$1;
(statearr_18766_18811[(2)] = null);

(statearr_18766_18811[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (14))){
var state_18737__$1 = state_18737;
var statearr_18770_18812 = state_18737__$1;
(statearr_18770_18812[(2)] = null);

(statearr_18770_18812[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (16))){
var inst_18692 = (state_18737[(10)]);
var inst_18696 = cljs.core.chunk_first(inst_18692);
var inst_18697 = cljs.core.chunk_rest(inst_18692);
var inst_18698 = cljs.core.count(inst_18696);
var inst_18678 = inst_18697;
var inst_18679 = inst_18696;
var inst_18680 = inst_18698;
var inst_18681 = (0);
var state_18737__$1 = (function (){var statearr_18771 = state_18737;
(statearr_18771[(12)] = inst_18678);

(statearr_18771[(13)] = inst_18681);

(statearr_18771[(14)] = inst_18680);

(statearr_18771[(16)] = inst_18679);

return statearr_18771;
})();
var statearr_18772_18813 = state_18737__$1;
(statearr_18772_18813[(2)] = null);

(statearr_18772_18813[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (10))){
var inst_18678 = (state_18737[(12)]);
var inst_18681 = (state_18737[(13)]);
var inst_18680 = (state_18737[(14)]);
var inst_18679 = (state_18737[(16)]);
var inst_18686 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18679,inst_18681);
var inst_18687 = cljs.core.async.muxch_STAR_(inst_18686);
var inst_18688 = cljs.core.async.close_BANG_(inst_18687);
var inst_18689 = (inst_18681 + (1));
var tmp18767 = inst_18678;
var tmp18768 = inst_18680;
var tmp18769 = inst_18679;
var inst_18678__$1 = tmp18767;
var inst_18679__$1 = tmp18769;
var inst_18680__$1 = tmp18768;
var inst_18681__$1 = inst_18689;
var state_18737__$1 = (function (){var statearr_18773 = state_18737;
(statearr_18773[(12)] = inst_18678__$1);

(statearr_18773[(17)] = inst_18688);

(statearr_18773[(13)] = inst_18681__$1);

(statearr_18773[(14)] = inst_18680__$1);

(statearr_18773[(16)] = inst_18679__$1);

return statearr_18773;
})();
var statearr_18774_18814 = state_18737__$1;
(statearr_18774_18814[(2)] = null);

(statearr_18774_18814[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (18))){
var inst_18707 = (state_18737[(2)]);
var state_18737__$1 = state_18737;
var statearr_18775_18815 = state_18737__$1;
(statearr_18775_18815[(2)] = inst_18707);

(statearr_18775_18815[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18738 === (8))){
var inst_18681 = (state_18737[(13)]);
var inst_18680 = (state_18737[(14)]);
var inst_18683 = (inst_18681 < inst_18680);
var inst_18684 = inst_18683;
var state_18737__$1 = state_18737;
if(cljs.core.truth_(inst_18684)){
var statearr_18776_18816 = state_18737__$1;
(statearr_18776_18816[(1)] = (10));

} else {
var statearr_18777_18817 = state_18737__$1;
(statearr_18777_18817[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___18789,mults,ensure_mult,p))
;
return ((function (switch__16790__auto__,c__16904__auto___18789,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_18781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18781[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_18781[(1)] = (1));

return statearr_18781;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_18737){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_18737);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e18782){if((e18782 instanceof Object)){
var ex__16794__auto__ = e18782;
var statearr_18783_18818 = state_18737;
(statearr_18783_18818[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18737);

return cljs.core.cst$kw$recur;
} else {
throw e18782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__18819 = state_18737;
state_18737 = G__18819;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_18737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_18737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___18789,mults,ensure_mult,p))
})();
var state__16906__auto__ = (function (){var statearr_18784 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_18784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___18789);

return statearr_18784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___18789,mults,ensure_mult,p))
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
var args18820 = [];
var len__6044__auto___18823 = arguments.length;
var i__6045__auto___18824 = (0);
while(true){
if((i__6045__auto___18824 < len__6044__auto___18823)){
args18820.push((arguments[i__6045__auto___18824]));

var G__18825 = (i__6045__auto___18824 + (1));
i__6045__auto___18824 = G__18825;
continue;
} else {
}
break;
}

var G__18822 = args18820.length;
switch (G__18822) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18820.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18827 = [];
var len__6044__auto___18830 = arguments.length;
var i__6045__auto___18831 = (0);
while(true){
if((i__6045__auto___18831 < len__6044__auto___18830)){
args18827.push((arguments[i__6045__auto___18831]));

var G__18832 = (i__6045__auto___18831 + (1));
i__6045__auto___18831 = G__18832;
continue;
} else {
}
break;
}

var G__18829 = args18827.length;
switch (G__18829) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18827.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args18834 = [];
var len__6044__auto___18905 = arguments.length;
var i__6045__auto___18906 = (0);
while(true){
if((i__6045__auto___18906 < len__6044__auto___18905)){
args18834.push((arguments[i__6045__auto___18906]));

var G__18907 = (i__6045__auto___18906 + (1));
i__6045__auto___18906 = G__18907;
continue;
} else {
}
break;
}

var G__18836 = args18834.length;
switch (G__18836) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18834.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16904__auto___18909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18875){
var state_val_18876 = (state_18875[(1)]);
if((state_val_18876 === (7))){
var state_18875__$1 = state_18875;
var statearr_18877_18910 = state_18875__$1;
(statearr_18877_18910[(2)] = null);

(statearr_18877_18910[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (1))){
var state_18875__$1 = state_18875;
var statearr_18878_18911 = state_18875__$1;
(statearr_18878_18911[(2)] = null);

(statearr_18878_18911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (4))){
var inst_18839 = (state_18875[(7)]);
var inst_18841 = (inst_18839 < cnt);
var state_18875__$1 = state_18875;
if(cljs.core.truth_(inst_18841)){
var statearr_18879_18912 = state_18875__$1;
(statearr_18879_18912[(1)] = (6));

} else {
var statearr_18880_18913 = state_18875__$1;
(statearr_18880_18913[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (15))){
var inst_18871 = (state_18875[(2)]);
var state_18875__$1 = state_18875;
var statearr_18881_18914 = state_18875__$1;
(statearr_18881_18914[(2)] = inst_18871);

(statearr_18881_18914[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (13))){
var inst_18864 = cljs.core.async.close_BANG_(out);
var state_18875__$1 = state_18875;
var statearr_18882_18915 = state_18875__$1;
(statearr_18882_18915[(2)] = inst_18864);

(statearr_18882_18915[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (6))){
var state_18875__$1 = state_18875;
var statearr_18883_18916 = state_18875__$1;
(statearr_18883_18916[(2)] = null);

(statearr_18883_18916[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (3))){
var inst_18873 = (state_18875[(2)]);
var state_18875__$1 = state_18875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18875__$1,inst_18873);
} else {
if((state_val_18876 === (12))){
var inst_18861 = (state_18875[(8)]);
var inst_18861__$1 = (state_18875[(2)]);
var inst_18862 = cljs.core.some(cljs.core.nil_QMARK_,inst_18861__$1);
var state_18875__$1 = (function (){var statearr_18884 = state_18875;
(statearr_18884[(8)] = inst_18861__$1);

return statearr_18884;
})();
if(cljs.core.truth_(inst_18862)){
var statearr_18885_18917 = state_18875__$1;
(statearr_18885_18917[(1)] = (13));

} else {
var statearr_18886_18918 = state_18875__$1;
(statearr_18886_18918[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (2))){
var inst_18838 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18839 = (0);
var state_18875__$1 = (function (){var statearr_18887 = state_18875;
(statearr_18887[(7)] = inst_18839);

(statearr_18887[(9)] = inst_18838);

return statearr_18887;
})();
var statearr_18888_18919 = state_18875__$1;
(statearr_18888_18919[(2)] = null);

(statearr_18888_18919[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (11))){
var inst_18839 = (state_18875[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18875,(10),Object,null,(9));
var inst_18848 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18839) : chs__$1.call(null,inst_18839));
var inst_18849 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18839) : done.call(null,inst_18839));
var inst_18850 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18848,inst_18849);
var state_18875__$1 = state_18875;
var statearr_18889_18920 = state_18875__$1;
(statearr_18889_18920[(2)] = inst_18850);


cljs.core.async.impl.ioc_helpers.process_exception(state_18875__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (9))){
var inst_18839 = (state_18875[(7)]);
var inst_18852 = (state_18875[(2)]);
var inst_18853 = (inst_18839 + (1));
var inst_18839__$1 = inst_18853;
var state_18875__$1 = (function (){var statearr_18890 = state_18875;
(statearr_18890[(7)] = inst_18839__$1);

(statearr_18890[(10)] = inst_18852);

return statearr_18890;
})();
var statearr_18891_18921 = state_18875__$1;
(statearr_18891_18921[(2)] = null);

(statearr_18891_18921[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (5))){
var inst_18859 = (state_18875[(2)]);
var state_18875__$1 = (function (){var statearr_18892 = state_18875;
(statearr_18892[(11)] = inst_18859);

return statearr_18892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18875__$1,(12),dchan);
} else {
if((state_val_18876 === (14))){
var inst_18861 = (state_18875[(8)]);
var inst_18866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18861);
var state_18875__$1 = state_18875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18875__$1,(16),out,inst_18866);
} else {
if((state_val_18876 === (16))){
var inst_18868 = (state_18875[(2)]);
var state_18875__$1 = (function (){var statearr_18893 = state_18875;
(statearr_18893[(12)] = inst_18868);

return statearr_18893;
})();
var statearr_18894_18922 = state_18875__$1;
(statearr_18894_18922[(2)] = null);

(statearr_18894_18922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (10))){
var inst_18843 = (state_18875[(2)]);
var inst_18844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18875__$1 = (function (){var statearr_18895 = state_18875;
(statearr_18895[(13)] = inst_18843);

return statearr_18895;
})();
var statearr_18896_18923 = state_18875__$1;
(statearr_18896_18923[(2)] = inst_18844);


cljs.core.async.impl.ioc_helpers.process_exception(state_18875__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18876 === (8))){
var inst_18857 = (state_18875[(2)]);
var state_18875__$1 = state_18875;
var statearr_18897_18924 = state_18875__$1;
(statearr_18897_18924[(2)] = inst_18857);

(statearr_18897_18924[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16790__auto__,c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_18901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18901[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_18901[(1)] = (1));

return statearr_18901;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_18875){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_18875);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e18902){if((e18902 instanceof Object)){
var ex__16794__auto__ = e18902;
var statearr_18903_18925 = state_18875;
(statearr_18903_18925[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18875);

return cljs.core.cst$kw$recur;
} else {
throw e18902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__18926 = state_18875;
state_18875 = G__18926;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_18875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_18875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16906__auto__ = (function (){var statearr_18904 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_18904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___18909);

return statearr_18904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___18909,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18928 = [];
var len__6044__auto___18984 = arguments.length;
var i__6045__auto___18985 = (0);
while(true){
if((i__6045__auto___18985 < len__6044__auto___18984)){
args18928.push((arguments[i__6045__auto___18985]));

var G__18986 = (i__6045__auto___18985 + (1));
i__6045__auto___18985 = G__18986;
continue;
} else {
}
break;
}

var G__18930 = args18928.length;
switch (G__18930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18928.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___18988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___18988,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___18988,out){
return (function (state_18960){
var state_val_18961 = (state_18960[(1)]);
if((state_val_18961 === (7))){
var inst_18939 = (state_18960[(7)]);
var inst_18940 = (state_18960[(8)]);
var inst_18939__$1 = (state_18960[(2)]);
var inst_18940__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18939__$1,(0),null);
var inst_18941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18939__$1,(1),null);
var inst_18942 = (inst_18940__$1 == null);
var state_18960__$1 = (function (){var statearr_18962 = state_18960;
(statearr_18962[(7)] = inst_18939__$1);

(statearr_18962[(8)] = inst_18940__$1);

(statearr_18962[(9)] = inst_18941);

return statearr_18962;
})();
if(cljs.core.truth_(inst_18942)){
var statearr_18963_18989 = state_18960__$1;
(statearr_18963_18989[(1)] = (8));

} else {
var statearr_18964_18990 = state_18960__$1;
(statearr_18964_18990[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (1))){
var inst_18931 = cljs.core.vec(chs);
var inst_18932 = inst_18931;
var state_18960__$1 = (function (){var statearr_18965 = state_18960;
(statearr_18965[(10)] = inst_18932);

return statearr_18965;
})();
var statearr_18966_18991 = state_18960__$1;
(statearr_18966_18991[(2)] = null);

(statearr_18966_18991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (4))){
var inst_18932 = (state_18960[(10)]);
var state_18960__$1 = state_18960;
return cljs.core.async.ioc_alts_BANG_(state_18960__$1,(7),inst_18932);
} else {
if((state_val_18961 === (6))){
var inst_18956 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18967_18992 = state_18960__$1;
(statearr_18967_18992[(2)] = inst_18956);

(statearr_18967_18992[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (3))){
var inst_18958 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18960__$1,inst_18958);
} else {
if((state_val_18961 === (2))){
var inst_18932 = (state_18960[(10)]);
var inst_18934 = cljs.core.count(inst_18932);
var inst_18935 = (inst_18934 > (0));
var state_18960__$1 = state_18960;
if(cljs.core.truth_(inst_18935)){
var statearr_18969_18993 = state_18960__$1;
(statearr_18969_18993[(1)] = (4));

} else {
var statearr_18970_18994 = state_18960__$1;
(statearr_18970_18994[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (11))){
var inst_18932 = (state_18960[(10)]);
var inst_18949 = (state_18960[(2)]);
var tmp18968 = inst_18932;
var inst_18932__$1 = tmp18968;
var state_18960__$1 = (function (){var statearr_18971 = state_18960;
(statearr_18971[(10)] = inst_18932__$1);

(statearr_18971[(11)] = inst_18949);

return statearr_18971;
})();
var statearr_18972_18995 = state_18960__$1;
(statearr_18972_18995[(2)] = null);

(statearr_18972_18995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (9))){
var inst_18940 = (state_18960[(8)]);
var state_18960__$1 = state_18960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18960__$1,(11),out,inst_18940);
} else {
if((state_val_18961 === (5))){
var inst_18954 = cljs.core.async.close_BANG_(out);
var state_18960__$1 = state_18960;
var statearr_18973_18996 = state_18960__$1;
(statearr_18973_18996[(2)] = inst_18954);

(statearr_18973_18996[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (10))){
var inst_18952 = (state_18960[(2)]);
var state_18960__$1 = state_18960;
var statearr_18974_18997 = state_18960__$1;
(statearr_18974_18997[(2)] = inst_18952);

(statearr_18974_18997[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18961 === (8))){
var inst_18939 = (state_18960[(7)]);
var inst_18940 = (state_18960[(8)]);
var inst_18932 = (state_18960[(10)]);
var inst_18941 = (state_18960[(9)]);
var inst_18944 = (function (){var cs = inst_18932;
var vec__18937 = inst_18939;
var v = inst_18940;
var c = inst_18941;
return ((function (cs,vec__18937,v,c,inst_18939,inst_18940,inst_18932,inst_18941,state_val_18961,c__16904__auto___18988,out){
return (function (p1__18927_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18927_SHARP_);
});
;})(cs,vec__18937,v,c,inst_18939,inst_18940,inst_18932,inst_18941,state_val_18961,c__16904__auto___18988,out))
})();
var inst_18945 = cljs.core.filterv(inst_18944,inst_18932);
var inst_18932__$1 = inst_18945;
var state_18960__$1 = (function (){var statearr_18975 = state_18960;
(statearr_18975[(10)] = inst_18932__$1);

return statearr_18975;
})();
var statearr_18976_18998 = state_18960__$1;
(statearr_18976_18998[(2)] = null);

(statearr_18976_18998[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___18988,out))
;
return ((function (switch__16790__auto__,c__16904__auto___18988,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_18980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18980[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_18980[(1)] = (1));

return statearr_18980;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_18960){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_18960);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e18981){if((e18981 instanceof Object)){
var ex__16794__auto__ = e18981;
var statearr_18982_18999 = state_18960;
(statearr_18982_18999[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18960);

return cljs.core.cst$kw$recur;
} else {
throw e18981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19000 = state_18960;
state_18960 = G__19000;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_18960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_18960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___18988,out))
})();
var state__16906__auto__ = (function (){var statearr_18983 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_18983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___18988);

return statearr_18983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___18988,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args19001 = [];
var len__6044__auto___19050 = arguments.length;
var i__6045__auto___19051 = (0);
while(true){
if((i__6045__auto___19051 < len__6044__auto___19050)){
args19001.push((arguments[i__6045__auto___19051]));

var G__19052 = (i__6045__auto___19051 + (1));
i__6045__auto___19051 = G__19052;
continue;
} else {
}
break;
}

var G__19003 = args19001.length;
switch (G__19003) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19001.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___19054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___19054,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___19054,out){
return (function (state_19027){
var state_val_19028 = (state_19027[(1)]);
if((state_val_19028 === (7))){
var inst_19009 = (state_19027[(7)]);
var inst_19009__$1 = (state_19027[(2)]);
var inst_19010 = (inst_19009__$1 == null);
var inst_19011 = cljs.core.not(inst_19010);
var state_19027__$1 = (function (){var statearr_19029 = state_19027;
(statearr_19029[(7)] = inst_19009__$1);

return statearr_19029;
})();
if(inst_19011){
var statearr_19030_19055 = state_19027__$1;
(statearr_19030_19055[(1)] = (8));

} else {
var statearr_19031_19056 = state_19027__$1;
(statearr_19031_19056[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (1))){
var inst_19004 = (0);
var state_19027__$1 = (function (){var statearr_19032 = state_19027;
(statearr_19032[(8)] = inst_19004);

return statearr_19032;
})();
var statearr_19033_19057 = state_19027__$1;
(statearr_19033_19057[(2)] = null);

(statearr_19033_19057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (4))){
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19027__$1,(7),ch);
} else {
if((state_val_19028 === (6))){
var inst_19022 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19034_19058 = state_19027__$1;
(statearr_19034_19058[(2)] = inst_19022);

(statearr_19034_19058[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (3))){
var inst_19024 = (state_19027[(2)]);
var inst_19025 = cljs.core.async.close_BANG_(out);
var state_19027__$1 = (function (){var statearr_19035 = state_19027;
(statearr_19035[(9)] = inst_19024);

return statearr_19035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19027__$1,inst_19025);
} else {
if((state_val_19028 === (2))){
var inst_19004 = (state_19027[(8)]);
var inst_19006 = (inst_19004 < n);
var state_19027__$1 = state_19027;
if(cljs.core.truth_(inst_19006)){
var statearr_19036_19059 = state_19027__$1;
(statearr_19036_19059[(1)] = (4));

} else {
var statearr_19037_19060 = state_19027__$1;
(statearr_19037_19060[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (11))){
var inst_19004 = (state_19027[(8)]);
var inst_19014 = (state_19027[(2)]);
var inst_19015 = (inst_19004 + (1));
var inst_19004__$1 = inst_19015;
var state_19027__$1 = (function (){var statearr_19038 = state_19027;
(statearr_19038[(8)] = inst_19004__$1);

(statearr_19038[(10)] = inst_19014);

return statearr_19038;
})();
var statearr_19039_19061 = state_19027__$1;
(statearr_19039_19061[(2)] = null);

(statearr_19039_19061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (9))){
var state_19027__$1 = state_19027;
var statearr_19040_19062 = state_19027__$1;
(statearr_19040_19062[(2)] = null);

(statearr_19040_19062[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (5))){
var state_19027__$1 = state_19027;
var statearr_19041_19063 = state_19027__$1;
(statearr_19041_19063[(2)] = null);

(statearr_19041_19063[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (10))){
var inst_19019 = (state_19027[(2)]);
var state_19027__$1 = state_19027;
var statearr_19042_19064 = state_19027__$1;
(statearr_19042_19064[(2)] = inst_19019);

(statearr_19042_19064[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19028 === (8))){
var inst_19009 = (state_19027[(7)]);
var state_19027__$1 = state_19027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19027__$1,(11),out,inst_19009);
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
});})(c__16904__auto___19054,out))
;
return ((function (switch__16790__auto__,c__16904__auto___19054,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_19046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19046[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_19046[(1)] = (1));

return statearr_19046;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_19027){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19027);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19047){if((e19047 instanceof Object)){
var ex__16794__auto__ = e19047;
var statearr_19048_19065 = state_19027;
(statearr_19048_19065[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19027);

return cljs.core.cst$kw$recur;
} else {
throw e19047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19066 = state_19027;
state_19027 = G__19066;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_19027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_19027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___19054,out))
})();
var state__16906__auto__ = (function (){var statearr_19049 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___19054);

return statearr_19049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___19054,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19076 = (function (map_LT_,f,ch,meta19077){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19077 = meta19077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19078,meta19077__$1){
var self__ = this;
var _19078__$1 = this;
return (new cljs.core.async.t_cljs$core$async19076(self__.map_LT_,self__.f,self__.ch,meta19077__$1));
});

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19078){
var self__ = this;
var _19078__$1 = this;
return self__.meta19077;
});

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19079 = (function (map_LT_,f,ch,meta19077,_,fn1,meta19080){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19077 = meta19077;
this._ = _;
this.fn1 = fn1;
this.meta19080 = meta19080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19081,meta19080__$1){
var self__ = this;
var _19081__$1 = this;
return (new cljs.core.async.t_cljs$core$async19079(self__.map_LT_,self__.f,self__.ch,self__.meta19077,self__._,self__.fn1,meta19080__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19081){
var self__ = this;
var _19081__$1 = this;
return self__.meta19080;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19067_SHARP_){
var G__19082 = (((p1__19067_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19067_SHARP_) : self__.f.call(null,p1__19067_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19082) : f1.call(null,G__19082));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19079.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19077,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19076], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19080], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19079";

cljs.core.async.t_cljs$core$async19079.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async19079");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19079 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19079(map_LT___$1,f__$1,ch__$1,meta19077__$1,___$2,fn1__$1,meta19080){
return (new cljs.core.async.t_cljs$core$async19079(map_LT___$1,f__$1,ch__$1,meta19077__$1,___$2,fn1__$1,meta19080));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19079(self__.map_LT_,self__.f,self__.ch,self__.meta19077,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4974__auto__ = ret;
if(cljs.core.truth_(and__4974__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__4974__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19083 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19083) : self__.f.call(null,G__19083));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19077], null);
});

cljs.core.async.t_cljs$core$async19076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19076";

cljs.core.async.t_cljs$core$async19076.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async19076");
});

cljs.core.async.__GT_t_cljs$core$async19076 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19076(map_LT___$1,f__$1,ch__$1,meta19077){
return (new cljs.core.async.t_cljs$core$async19076(map_LT___$1,f__$1,ch__$1,meta19077));
});

}

return (new cljs.core.async.t_cljs$core$async19076(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19087 = (function (map_GT_,f,ch,meta19088){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19088 = meta19088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19089,meta19088__$1){
var self__ = this;
var _19089__$1 = this;
return (new cljs.core.async.t_cljs$core$async19087(self__.map_GT_,self__.f,self__.ch,meta19088__$1));
});

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19089){
var self__ = this;
var _19089__$1 = this;
return self__.meta19088;
});

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19088], null);
});

cljs.core.async.t_cljs$core$async19087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19087";

cljs.core.async.t_cljs$core$async19087.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async19087");
});

cljs.core.async.__GT_t_cljs$core$async19087 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19087(map_GT___$1,f__$1,ch__$1,meta19088){
return (new cljs.core.async.t_cljs$core$async19087(map_GT___$1,f__$1,ch__$1,meta19088));
});

}

return (new cljs.core.async.t_cljs$core$async19087(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19093 = (function (filter_GT_,p,ch,meta19094){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19094 = meta19094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19095,meta19094__$1){
var self__ = this;
var _19095__$1 = this;
return (new cljs.core.async.t_cljs$core$async19093(self__.filter_GT_,self__.p,self__.ch,meta19094__$1));
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19095){
var self__ = this;
var _19095__$1 = this;
return self__.meta19094;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19094], null);
});

cljs.core.async.t_cljs$core$async19093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19093";

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"cljs.core.async/t_cljs$core$async19093");
});

cljs.core.async.__GT_t_cljs$core$async19093 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19093(filter_GT___$1,p__$1,ch__$1,meta19094){
return (new cljs.core.async.t_cljs$core$async19093(filter_GT___$1,p__$1,ch__$1,meta19094));
});

}

return (new cljs.core.async.t_cljs$core$async19093(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args19096 = [];
var len__6044__auto___19140 = arguments.length;
var i__6045__auto___19141 = (0);
while(true){
if((i__6045__auto___19141 < len__6044__auto___19140)){
args19096.push((arguments[i__6045__auto___19141]));

var G__19142 = (i__6045__auto___19141 + (1));
i__6045__auto___19141 = G__19142;
continue;
} else {
}
break;
}

var G__19098 = args19096.length;
switch (G__19098) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19096.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___19144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___19144,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___19144,out){
return (function (state_19119){
var state_val_19120 = (state_19119[(1)]);
if((state_val_19120 === (7))){
var inst_19115 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19121_19145 = state_19119__$1;
(statearr_19121_19145[(2)] = inst_19115);

(statearr_19121_19145[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (1))){
var state_19119__$1 = state_19119;
var statearr_19122_19146 = state_19119__$1;
(statearr_19122_19146[(2)] = null);

(statearr_19122_19146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (4))){
var inst_19101 = (state_19119[(7)]);
var inst_19101__$1 = (state_19119[(2)]);
var inst_19102 = (inst_19101__$1 == null);
var state_19119__$1 = (function (){var statearr_19123 = state_19119;
(statearr_19123[(7)] = inst_19101__$1);

return statearr_19123;
})();
if(cljs.core.truth_(inst_19102)){
var statearr_19124_19147 = state_19119__$1;
(statearr_19124_19147[(1)] = (5));

} else {
var statearr_19125_19148 = state_19119__$1;
(statearr_19125_19148[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (6))){
var inst_19101 = (state_19119[(7)]);
var inst_19106 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19101) : p.call(null,inst_19101));
var state_19119__$1 = state_19119;
if(cljs.core.truth_(inst_19106)){
var statearr_19126_19149 = state_19119__$1;
(statearr_19126_19149[(1)] = (8));

} else {
var statearr_19127_19150 = state_19119__$1;
(statearr_19127_19150[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (3))){
var inst_19117 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19119__$1,inst_19117);
} else {
if((state_val_19120 === (2))){
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19119__$1,(4),ch);
} else {
if((state_val_19120 === (11))){
var inst_19109 = (state_19119[(2)]);
var state_19119__$1 = state_19119;
var statearr_19128_19151 = state_19119__$1;
(statearr_19128_19151[(2)] = inst_19109);

(statearr_19128_19151[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (9))){
var state_19119__$1 = state_19119;
var statearr_19129_19152 = state_19119__$1;
(statearr_19129_19152[(2)] = null);

(statearr_19129_19152[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (5))){
var inst_19104 = cljs.core.async.close_BANG_(out);
var state_19119__$1 = state_19119;
var statearr_19130_19153 = state_19119__$1;
(statearr_19130_19153[(2)] = inst_19104);

(statearr_19130_19153[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (10))){
var inst_19112 = (state_19119[(2)]);
var state_19119__$1 = (function (){var statearr_19131 = state_19119;
(statearr_19131[(8)] = inst_19112);

return statearr_19131;
})();
var statearr_19132_19154 = state_19119__$1;
(statearr_19132_19154[(2)] = null);

(statearr_19132_19154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19120 === (8))){
var inst_19101 = (state_19119[(7)]);
var state_19119__$1 = state_19119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19119__$1,(11),out,inst_19101);
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
});})(c__16904__auto___19144,out))
;
return ((function (switch__16790__auto__,c__16904__auto___19144,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_19136 = [null,null,null,null,null,null,null,null,null];
(statearr_19136[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_19136[(1)] = (1));

return statearr_19136;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_19119){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19119);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19137){if((e19137 instanceof Object)){
var ex__16794__auto__ = e19137;
var statearr_19138_19155 = state_19119;
(statearr_19138_19155[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19119);

return cljs.core.cst$kw$recur;
} else {
throw e19137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19156 = state_19119;
state_19119 = G__19156;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_19119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_19119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___19144,out))
})();
var state__16906__auto__ = (function (){var statearr_19139 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___19144);

return statearr_19139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___19144,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19157 = [];
var len__6044__auto___19160 = arguments.length;
var i__6045__auto___19161 = (0);
while(true){
if((i__6045__auto___19161 < len__6044__auto___19160)){
args19157.push((arguments[i__6045__auto___19161]));

var G__19162 = (i__6045__auto___19161 + (1));
i__6045__auto___19161 = G__19162;
continue;
} else {
}
break;
}

var G__19159 = args19157.length;
switch (G__19159) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19157.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__){
return (function (state_19329){
var state_val_19330 = (state_19329[(1)]);
if((state_val_19330 === (7))){
var inst_19325 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19331_19372 = state_19329__$1;
(statearr_19331_19372[(2)] = inst_19325);

(statearr_19331_19372[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (20))){
var inst_19295 = (state_19329[(7)]);
var inst_19306 = (state_19329[(2)]);
var inst_19307 = cljs.core.next(inst_19295);
var inst_19281 = inst_19307;
var inst_19282 = null;
var inst_19283 = (0);
var inst_19284 = (0);
var state_19329__$1 = (function (){var statearr_19332 = state_19329;
(statearr_19332[(8)] = inst_19282);

(statearr_19332[(9)] = inst_19283);

(statearr_19332[(10)] = inst_19284);

(statearr_19332[(11)] = inst_19306);

(statearr_19332[(12)] = inst_19281);

return statearr_19332;
})();
var statearr_19333_19373 = state_19329__$1;
(statearr_19333_19373[(2)] = null);

(statearr_19333_19373[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (1))){
var state_19329__$1 = state_19329;
var statearr_19334_19374 = state_19329__$1;
(statearr_19334_19374[(2)] = null);

(statearr_19334_19374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (4))){
var inst_19270 = (state_19329[(13)]);
var inst_19270__$1 = (state_19329[(2)]);
var inst_19271 = (inst_19270__$1 == null);
var state_19329__$1 = (function (){var statearr_19335 = state_19329;
(statearr_19335[(13)] = inst_19270__$1);

return statearr_19335;
})();
if(cljs.core.truth_(inst_19271)){
var statearr_19336_19375 = state_19329__$1;
(statearr_19336_19375[(1)] = (5));

} else {
var statearr_19337_19376 = state_19329__$1;
(statearr_19337_19376[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (15))){
var state_19329__$1 = state_19329;
var statearr_19341_19377 = state_19329__$1;
(statearr_19341_19377[(2)] = null);

(statearr_19341_19377[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (21))){
var state_19329__$1 = state_19329;
var statearr_19342_19378 = state_19329__$1;
(statearr_19342_19378[(2)] = null);

(statearr_19342_19378[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (13))){
var inst_19282 = (state_19329[(8)]);
var inst_19283 = (state_19329[(9)]);
var inst_19284 = (state_19329[(10)]);
var inst_19281 = (state_19329[(12)]);
var inst_19291 = (state_19329[(2)]);
var inst_19292 = (inst_19284 + (1));
var tmp19338 = inst_19282;
var tmp19339 = inst_19283;
var tmp19340 = inst_19281;
var inst_19281__$1 = tmp19340;
var inst_19282__$1 = tmp19338;
var inst_19283__$1 = tmp19339;
var inst_19284__$1 = inst_19292;
var state_19329__$1 = (function (){var statearr_19343 = state_19329;
(statearr_19343[(8)] = inst_19282__$1);

(statearr_19343[(9)] = inst_19283__$1);

(statearr_19343[(10)] = inst_19284__$1);

(statearr_19343[(14)] = inst_19291);

(statearr_19343[(12)] = inst_19281__$1);

return statearr_19343;
})();
var statearr_19344_19379 = state_19329__$1;
(statearr_19344_19379[(2)] = null);

(statearr_19344_19379[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (22))){
var state_19329__$1 = state_19329;
var statearr_19345_19380 = state_19329__$1;
(statearr_19345_19380[(2)] = null);

(statearr_19345_19380[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (6))){
var inst_19270 = (state_19329[(13)]);
var inst_19279 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19270) : f.call(null,inst_19270));
var inst_19280 = cljs.core.seq(inst_19279);
var inst_19281 = inst_19280;
var inst_19282 = null;
var inst_19283 = (0);
var inst_19284 = (0);
var state_19329__$1 = (function (){var statearr_19346 = state_19329;
(statearr_19346[(8)] = inst_19282);

(statearr_19346[(9)] = inst_19283);

(statearr_19346[(10)] = inst_19284);

(statearr_19346[(12)] = inst_19281);

return statearr_19346;
})();
var statearr_19347_19381 = state_19329__$1;
(statearr_19347_19381[(2)] = null);

(statearr_19347_19381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (17))){
var inst_19295 = (state_19329[(7)]);
var inst_19299 = cljs.core.chunk_first(inst_19295);
var inst_19300 = cljs.core.chunk_rest(inst_19295);
var inst_19301 = cljs.core.count(inst_19299);
var inst_19281 = inst_19300;
var inst_19282 = inst_19299;
var inst_19283 = inst_19301;
var inst_19284 = (0);
var state_19329__$1 = (function (){var statearr_19348 = state_19329;
(statearr_19348[(8)] = inst_19282);

(statearr_19348[(9)] = inst_19283);

(statearr_19348[(10)] = inst_19284);

(statearr_19348[(12)] = inst_19281);

return statearr_19348;
})();
var statearr_19349_19382 = state_19329__$1;
(statearr_19349_19382[(2)] = null);

(statearr_19349_19382[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (3))){
var inst_19327 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19329__$1,inst_19327);
} else {
if((state_val_19330 === (12))){
var inst_19315 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19350_19383 = state_19329__$1;
(statearr_19350_19383[(2)] = inst_19315);

(statearr_19350_19383[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (2))){
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19329__$1,(4),in$);
} else {
if((state_val_19330 === (23))){
var inst_19323 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19351_19384 = state_19329__$1;
(statearr_19351_19384[(2)] = inst_19323);

(statearr_19351_19384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (19))){
var inst_19310 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19352_19385 = state_19329__$1;
(statearr_19352_19385[(2)] = inst_19310);

(statearr_19352_19385[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (11))){
var inst_19295 = (state_19329[(7)]);
var inst_19281 = (state_19329[(12)]);
var inst_19295__$1 = cljs.core.seq(inst_19281);
var state_19329__$1 = (function (){var statearr_19353 = state_19329;
(statearr_19353[(7)] = inst_19295__$1);

return statearr_19353;
})();
if(inst_19295__$1){
var statearr_19354_19386 = state_19329__$1;
(statearr_19354_19386[(1)] = (14));

} else {
var statearr_19355_19387 = state_19329__$1;
(statearr_19355_19387[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (9))){
var inst_19317 = (state_19329[(2)]);
var inst_19318 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19329__$1 = (function (){var statearr_19356 = state_19329;
(statearr_19356[(15)] = inst_19317);

return statearr_19356;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19357_19388 = state_19329__$1;
(statearr_19357_19388[(1)] = (21));

} else {
var statearr_19358_19389 = state_19329__$1;
(statearr_19358_19389[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (5))){
var inst_19273 = cljs.core.async.close_BANG_(out);
var state_19329__$1 = state_19329;
var statearr_19359_19390 = state_19329__$1;
(statearr_19359_19390[(2)] = inst_19273);

(statearr_19359_19390[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (14))){
var inst_19295 = (state_19329[(7)]);
var inst_19297 = cljs.core.chunked_seq_QMARK_(inst_19295);
var state_19329__$1 = state_19329;
if(inst_19297){
var statearr_19360_19391 = state_19329__$1;
(statearr_19360_19391[(1)] = (17));

} else {
var statearr_19361_19392 = state_19329__$1;
(statearr_19361_19392[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (16))){
var inst_19313 = (state_19329[(2)]);
var state_19329__$1 = state_19329;
var statearr_19362_19393 = state_19329__$1;
(statearr_19362_19393[(2)] = inst_19313);

(statearr_19362_19393[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19330 === (10))){
var inst_19282 = (state_19329[(8)]);
var inst_19284 = (state_19329[(10)]);
var inst_19289 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19282,inst_19284);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19329__$1,(13),out,inst_19289);
} else {
if((state_val_19330 === (18))){
var inst_19295 = (state_19329[(7)]);
var inst_19304 = cljs.core.first(inst_19295);
var state_19329__$1 = state_19329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19329__$1,(20),out,inst_19304);
} else {
if((state_val_19330 === (8))){
var inst_19283 = (state_19329[(9)]);
var inst_19284 = (state_19329[(10)]);
var inst_19286 = (inst_19284 < inst_19283);
var inst_19287 = inst_19286;
var state_19329__$1 = state_19329;
if(cljs.core.truth_(inst_19287)){
var statearr_19363_19394 = state_19329__$1;
(statearr_19363_19394[(1)] = (10));

} else {
var statearr_19364_19395 = state_19329__$1;
(statearr_19364_19395[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16904__auto__))
;
return ((function (switch__16790__auto__,c__16904__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____0 = (function (){
var statearr_19368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19368[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__);

(statearr_19368[(1)] = (1));

return statearr_19368;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____1 = (function (state_19329){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19329);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19369){if((e19369 instanceof Object)){
var ex__16794__auto__ = e19369;
var statearr_19370_19396 = state_19329;
(statearr_19370_19396[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19329);

return cljs.core.cst$kw$recur;
} else {
throw e19369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19397 = state_19329;
state_19329 = G__19397;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__ = function(state_19329){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____1.call(this,state_19329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16791__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__))
})();
var state__16906__auto__ = (function (){var statearr_19371 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_19371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__))
);

return c__16904__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19398 = [];
var len__6044__auto___19401 = arguments.length;
var i__6045__auto___19402 = (0);
while(true){
if((i__6045__auto___19402 < len__6044__auto___19401)){
args19398.push((arguments[i__6045__auto___19402]));

var G__19403 = (i__6045__auto___19402 + (1));
i__6045__auto___19402 = G__19403;
continue;
} else {
}
break;
}

var G__19400 = args19398.length;
switch (G__19400) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19398.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args19405 = [];
var len__6044__auto___19408 = arguments.length;
var i__6045__auto___19409 = (0);
while(true){
if((i__6045__auto___19409 < len__6044__auto___19408)){
args19405.push((arguments[i__6045__auto___19409]));

var G__19410 = (i__6045__auto___19409 + (1));
i__6045__auto___19409 = G__19410;
continue;
} else {
}
break;
}

var G__19407 = args19405.length;
switch (G__19407) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19405.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args19412 = [];
var len__6044__auto___19463 = arguments.length;
var i__6045__auto___19464 = (0);
while(true){
if((i__6045__auto___19464 < len__6044__auto___19463)){
args19412.push((arguments[i__6045__auto___19464]));

var G__19465 = (i__6045__auto___19464 + (1));
i__6045__auto___19464 = G__19465;
continue;
} else {
}
break;
}

var G__19414 = args19412.length;
switch (G__19414) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19412.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___19467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___19467,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___19467,out){
return (function (state_19438){
var state_val_19439 = (state_19438[(1)]);
if((state_val_19439 === (7))){
var inst_19433 = (state_19438[(2)]);
var state_19438__$1 = state_19438;
var statearr_19440_19468 = state_19438__$1;
(statearr_19440_19468[(2)] = inst_19433);

(statearr_19440_19468[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (1))){
var inst_19415 = null;
var state_19438__$1 = (function (){var statearr_19441 = state_19438;
(statearr_19441[(7)] = inst_19415);

return statearr_19441;
})();
var statearr_19442_19469 = state_19438__$1;
(statearr_19442_19469[(2)] = null);

(statearr_19442_19469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (4))){
var inst_19418 = (state_19438[(8)]);
var inst_19418__$1 = (state_19438[(2)]);
var inst_19419 = (inst_19418__$1 == null);
var inst_19420 = cljs.core.not(inst_19419);
var state_19438__$1 = (function (){var statearr_19443 = state_19438;
(statearr_19443[(8)] = inst_19418__$1);

return statearr_19443;
})();
if(inst_19420){
var statearr_19444_19470 = state_19438__$1;
(statearr_19444_19470[(1)] = (5));

} else {
var statearr_19445_19471 = state_19438__$1;
(statearr_19445_19471[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (6))){
var state_19438__$1 = state_19438;
var statearr_19446_19472 = state_19438__$1;
(statearr_19446_19472[(2)] = null);

(statearr_19446_19472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (3))){
var inst_19435 = (state_19438[(2)]);
var inst_19436 = cljs.core.async.close_BANG_(out);
var state_19438__$1 = (function (){var statearr_19447 = state_19438;
(statearr_19447[(9)] = inst_19435);

return statearr_19447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19438__$1,inst_19436);
} else {
if((state_val_19439 === (2))){
var state_19438__$1 = state_19438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19438__$1,(4),ch);
} else {
if((state_val_19439 === (11))){
var inst_19418 = (state_19438[(8)]);
var inst_19427 = (state_19438[(2)]);
var inst_19415 = inst_19418;
var state_19438__$1 = (function (){var statearr_19448 = state_19438;
(statearr_19448[(10)] = inst_19427);

(statearr_19448[(7)] = inst_19415);

return statearr_19448;
})();
var statearr_19449_19473 = state_19438__$1;
(statearr_19449_19473[(2)] = null);

(statearr_19449_19473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (9))){
var inst_19418 = (state_19438[(8)]);
var state_19438__$1 = state_19438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19438__$1,(11),out,inst_19418);
} else {
if((state_val_19439 === (5))){
var inst_19418 = (state_19438[(8)]);
var inst_19415 = (state_19438[(7)]);
var inst_19422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19418,inst_19415);
var state_19438__$1 = state_19438;
if(inst_19422){
var statearr_19451_19474 = state_19438__$1;
(statearr_19451_19474[(1)] = (8));

} else {
var statearr_19452_19475 = state_19438__$1;
(statearr_19452_19475[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (10))){
var inst_19430 = (state_19438[(2)]);
var state_19438__$1 = state_19438;
var statearr_19453_19476 = state_19438__$1;
(statearr_19453_19476[(2)] = inst_19430);

(statearr_19453_19476[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19439 === (8))){
var inst_19415 = (state_19438[(7)]);
var tmp19450 = inst_19415;
var inst_19415__$1 = tmp19450;
var state_19438__$1 = (function (){var statearr_19454 = state_19438;
(statearr_19454[(7)] = inst_19415__$1);

return statearr_19454;
})();
var statearr_19455_19477 = state_19438__$1;
(statearr_19455_19477[(2)] = null);

(statearr_19455_19477[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___19467,out))
;
return ((function (switch__16790__auto__,c__16904__auto___19467,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_19459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19459[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_19459[(1)] = (1));

return statearr_19459;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_19438){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19438);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19460){if((e19460 instanceof Object)){
var ex__16794__auto__ = e19460;
var statearr_19461_19478 = state_19438;
(statearr_19461_19478[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19438);

return cljs.core.cst$kw$recur;
} else {
throw e19460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19479 = state_19438;
state_19438 = G__19479;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_19438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_19438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___19467,out))
})();
var state__16906__auto__ = (function (){var statearr_19462 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___19467);

return statearr_19462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___19467,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19480 = [];
var len__6044__auto___19550 = arguments.length;
var i__6045__auto___19551 = (0);
while(true){
if((i__6045__auto___19551 < len__6044__auto___19550)){
args19480.push((arguments[i__6045__auto___19551]));

var G__19552 = (i__6045__auto___19551 + (1));
i__6045__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19482 = args19480.length;
switch (G__19482) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19480.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___19554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___19554,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___19554,out){
return (function (state_19520){
var state_val_19521 = (state_19520[(1)]);
if((state_val_19521 === (7))){
var inst_19516 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19522_19555 = state_19520__$1;
(statearr_19522_19555[(2)] = inst_19516);

(statearr_19522_19555[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (1))){
var inst_19483 = (new Array(n));
var inst_19484 = inst_19483;
var inst_19485 = (0);
var state_19520__$1 = (function (){var statearr_19523 = state_19520;
(statearr_19523[(7)] = inst_19485);

(statearr_19523[(8)] = inst_19484);

return statearr_19523;
})();
var statearr_19524_19556 = state_19520__$1;
(statearr_19524_19556[(2)] = null);

(statearr_19524_19556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (4))){
var inst_19488 = (state_19520[(9)]);
var inst_19488__$1 = (state_19520[(2)]);
var inst_19489 = (inst_19488__$1 == null);
var inst_19490 = cljs.core.not(inst_19489);
var state_19520__$1 = (function (){var statearr_19525 = state_19520;
(statearr_19525[(9)] = inst_19488__$1);

return statearr_19525;
})();
if(inst_19490){
var statearr_19526_19557 = state_19520__$1;
(statearr_19526_19557[(1)] = (5));

} else {
var statearr_19527_19558 = state_19520__$1;
(statearr_19527_19558[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (15))){
var inst_19510 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19528_19559 = state_19520__$1;
(statearr_19528_19559[(2)] = inst_19510);

(statearr_19528_19559[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (13))){
var state_19520__$1 = state_19520;
var statearr_19529_19560 = state_19520__$1;
(statearr_19529_19560[(2)] = null);

(statearr_19529_19560[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (6))){
var inst_19485 = (state_19520[(7)]);
var inst_19506 = (inst_19485 > (0));
var state_19520__$1 = state_19520;
if(cljs.core.truth_(inst_19506)){
var statearr_19530_19561 = state_19520__$1;
(statearr_19530_19561[(1)] = (12));

} else {
var statearr_19531_19562 = state_19520__$1;
(statearr_19531_19562[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (3))){
var inst_19518 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19520__$1,inst_19518);
} else {
if((state_val_19521 === (12))){
var inst_19484 = (state_19520[(8)]);
var inst_19508 = cljs.core.vec(inst_19484);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19520__$1,(15),out,inst_19508);
} else {
if((state_val_19521 === (2))){
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19520__$1,(4),ch);
} else {
if((state_val_19521 === (11))){
var inst_19500 = (state_19520[(2)]);
var inst_19501 = (new Array(n));
var inst_19484 = inst_19501;
var inst_19485 = (0);
var state_19520__$1 = (function (){var statearr_19532 = state_19520;
(statearr_19532[(7)] = inst_19485);

(statearr_19532[(10)] = inst_19500);

(statearr_19532[(8)] = inst_19484);

return statearr_19532;
})();
var statearr_19533_19563 = state_19520__$1;
(statearr_19533_19563[(2)] = null);

(statearr_19533_19563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (9))){
var inst_19484 = (state_19520[(8)]);
var inst_19498 = cljs.core.vec(inst_19484);
var state_19520__$1 = state_19520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19520__$1,(11),out,inst_19498);
} else {
if((state_val_19521 === (5))){
var inst_19485 = (state_19520[(7)]);
var inst_19488 = (state_19520[(9)]);
var inst_19493 = (state_19520[(11)]);
var inst_19484 = (state_19520[(8)]);
var inst_19492 = (inst_19484[inst_19485] = inst_19488);
var inst_19493__$1 = (inst_19485 + (1));
var inst_19494 = (inst_19493__$1 < n);
var state_19520__$1 = (function (){var statearr_19534 = state_19520;
(statearr_19534[(12)] = inst_19492);

(statearr_19534[(11)] = inst_19493__$1);

return statearr_19534;
})();
if(cljs.core.truth_(inst_19494)){
var statearr_19535_19564 = state_19520__$1;
(statearr_19535_19564[(1)] = (8));

} else {
var statearr_19536_19565 = state_19520__$1;
(statearr_19536_19565[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (14))){
var inst_19513 = (state_19520[(2)]);
var inst_19514 = cljs.core.async.close_BANG_(out);
var state_19520__$1 = (function (){var statearr_19538 = state_19520;
(statearr_19538[(13)] = inst_19513);

return statearr_19538;
})();
var statearr_19539_19566 = state_19520__$1;
(statearr_19539_19566[(2)] = inst_19514);

(statearr_19539_19566[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (10))){
var inst_19504 = (state_19520[(2)]);
var state_19520__$1 = state_19520;
var statearr_19540_19567 = state_19520__$1;
(statearr_19540_19567[(2)] = inst_19504);

(statearr_19540_19567[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19521 === (8))){
var inst_19493 = (state_19520[(11)]);
var inst_19484 = (state_19520[(8)]);
var tmp19537 = inst_19484;
var inst_19484__$1 = tmp19537;
var inst_19485 = inst_19493;
var state_19520__$1 = (function (){var statearr_19541 = state_19520;
(statearr_19541[(7)] = inst_19485);

(statearr_19541[(8)] = inst_19484__$1);

return statearr_19541;
})();
var statearr_19542_19568 = state_19520__$1;
(statearr_19542_19568[(2)] = null);

(statearr_19542_19568[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___19554,out))
;
return ((function (switch__16790__auto__,c__16904__auto___19554,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_19546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19546[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_19546[(1)] = (1));

return statearr_19546;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_19520){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19520);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19547){if((e19547 instanceof Object)){
var ex__16794__auto__ = e19547;
var statearr_19548_19569 = state_19520;
(statearr_19548_19569[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19520);

return cljs.core.cst$kw$recur;
} else {
throw e19547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19570 = state_19520;
state_19520 = G__19570;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_19520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_19520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___19554,out))
})();
var state__16906__auto__ = (function (){var statearr_19549 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___19554);

return statearr_19549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___19554,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19571 = [];
var len__6044__auto___19645 = arguments.length;
var i__6045__auto___19646 = (0);
while(true){
if((i__6045__auto___19646 < len__6044__auto___19645)){
args19571.push((arguments[i__6045__auto___19646]));

var G__19647 = (i__6045__auto___19646 + (1));
i__6045__auto___19646 = G__19647;
continue;
} else {
}
break;
}

var G__19573 = args19571.length;
switch (G__19573) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19571.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16904__auto___19649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto___19649,out){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto___19649,out){
return (function (state_19615){
var state_val_19616 = (state_19615[(1)]);
if((state_val_19616 === (7))){
var inst_19611 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
var statearr_19617_19650 = state_19615__$1;
(statearr_19617_19650[(2)] = inst_19611);

(statearr_19617_19650[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (1))){
var inst_19574 = [];
var inst_19575 = inst_19574;
var inst_19576 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19615__$1 = (function (){var statearr_19618 = state_19615;
(statearr_19618[(7)] = inst_19575);

(statearr_19618[(8)] = inst_19576);

return statearr_19618;
})();
var statearr_19619_19651 = state_19615__$1;
(statearr_19619_19651[(2)] = null);

(statearr_19619_19651[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (4))){
var inst_19579 = (state_19615[(9)]);
var inst_19579__$1 = (state_19615[(2)]);
var inst_19580 = (inst_19579__$1 == null);
var inst_19581 = cljs.core.not(inst_19580);
var state_19615__$1 = (function (){var statearr_19620 = state_19615;
(statearr_19620[(9)] = inst_19579__$1);

return statearr_19620;
})();
if(inst_19581){
var statearr_19621_19652 = state_19615__$1;
(statearr_19621_19652[(1)] = (5));

} else {
var statearr_19622_19653 = state_19615__$1;
(statearr_19622_19653[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (15))){
var inst_19605 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
var statearr_19623_19654 = state_19615__$1;
(statearr_19623_19654[(2)] = inst_19605);

(statearr_19623_19654[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (13))){
var state_19615__$1 = state_19615;
var statearr_19624_19655 = state_19615__$1;
(statearr_19624_19655[(2)] = null);

(statearr_19624_19655[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (6))){
var inst_19575 = (state_19615[(7)]);
var inst_19600 = inst_19575.length;
var inst_19601 = (inst_19600 > (0));
var state_19615__$1 = state_19615;
if(cljs.core.truth_(inst_19601)){
var statearr_19625_19656 = state_19615__$1;
(statearr_19625_19656[(1)] = (12));

} else {
var statearr_19626_19657 = state_19615__$1;
(statearr_19626_19657[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (3))){
var inst_19613 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19615__$1,inst_19613);
} else {
if((state_val_19616 === (12))){
var inst_19575 = (state_19615[(7)]);
var inst_19603 = cljs.core.vec(inst_19575);
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19615__$1,(15),out,inst_19603);
} else {
if((state_val_19616 === (2))){
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19615__$1,(4),ch);
} else {
if((state_val_19616 === (11))){
var inst_19583 = (state_19615[(10)]);
var inst_19579 = (state_19615[(9)]);
var inst_19593 = (state_19615[(2)]);
var inst_19594 = [];
var inst_19595 = inst_19594.push(inst_19579);
var inst_19575 = inst_19594;
var inst_19576 = inst_19583;
var state_19615__$1 = (function (){var statearr_19627 = state_19615;
(statearr_19627[(7)] = inst_19575);

(statearr_19627[(11)] = inst_19595);

(statearr_19627[(12)] = inst_19593);

(statearr_19627[(8)] = inst_19576);

return statearr_19627;
})();
var statearr_19628_19658 = state_19615__$1;
(statearr_19628_19658[(2)] = null);

(statearr_19628_19658[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (9))){
var inst_19575 = (state_19615[(7)]);
var inst_19591 = cljs.core.vec(inst_19575);
var state_19615__$1 = state_19615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19615__$1,(11),out,inst_19591);
} else {
if((state_val_19616 === (5))){
var inst_19583 = (state_19615[(10)]);
var inst_19579 = (state_19615[(9)]);
var inst_19576 = (state_19615[(8)]);
var inst_19583__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19579) : f.call(null,inst_19579));
var inst_19584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19583__$1,inst_19576);
var inst_19585 = cljs.core.keyword_identical_QMARK_(inst_19576,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19586 = (inst_19584) || (inst_19585);
var state_19615__$1 = (function (){var statearr_19629 = state_19615;
(statearr_19629[(10)] = inst_19583__$1);

return statearr_19629;
})();
if(cljs.core.truth_(inst_19586)){
var statearr_19630_19659 = state_19615__$1;
(statearr_19630_19659[(1)] = (8));

} else {
var statearr_19631_19660 = state_19615__$1;
(statearr_19631_19660[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (14))){
var inst_19608 = (state_19615[(2)]);
var inst_19609 = cljs.core.async.close_BANG_(out);
var state_19615__$1 = (function (){var statearr_19633 = state_19615;
(statearr_19633[(13)] = inst_19608);

return statearr_19633;
})();
var statearr_19634_19661 = state_19615__$1;
(statearr_19634_19661[(2)] = inst_19609);

(statearr_19634_19661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (10))){
var inst_19598 = (state_19615[(2)]);
var state_19615__$1 = state_19615;
var statearr_19635_19662 = state_19615__$1;
(statearr_19635_19662[(2)] = inst_19598);

(statearr_19635_19662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19616 === (8))){
var inst_19583 = (state_19615[(10)]);
var inst_19575 = (state_19615[(7)]);
var inst_19579 = (state_19615[(9)]);
var inst_19588 = inst_19575.push(inst_19579);
var tmp19632 = inst_19575;
var inst_19575__$1 = tmp19632;
var inst_19576 = inst_19583;
var state_19615__$1 = (function (){var statearr_19636 = state_19615;
(statearr_19636[(7)] = inst_19575__$1);

(statearr_19636[(14)] = inst_19588);

(statearr_19636[(8)] = inst_19576);

return statearr_19636;
})();
var statearr_19637_19663 = state_19615__$1;
(statearr_19637_19663[(2)] = null);

(statearr_19637_19663[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16904__auto___19649,out))
;
return ((function (switch__16790__auto__,c__16904__auto___19649,out){
return (function() {
var cljs$core$async$state_machine__16791__auto__ = null;
var cljs$core$async$state_machine__16791__auto____0 = (function (){
var statearr_19641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19641[(0)] = cljs$core$async$state_machine__16791__auto__);

(statearr_19641[(1)] = (1));

return statearr_19641;
});
var cljs$core$async$state_machine__16791__auto____1 = (function (state_19615){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_19615);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e19642){if((e19642 instanceof Object)){
var ex__16794__auto__ = e19642;
var statearr_19643_19664 = state_19615;
(statearr_19643_19664[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19615);

return cljs.core.cst$kw$recur;
} else {
throw e19642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__19665 = state_19615;
state_19615 = G__19665;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
cljs$core$async$state_machine__16791__auto__ = function(state_19615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16791__auto____1.call(this,state_19615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16791__auto____0;
cljs$core$async$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16791__auto____1;
return cljs$core$async$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto___19649,out))
})();
var state__16906__auto__ = (function (){var statearr_19644 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_19644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto___19649);

return statearr_19644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto___19649,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
