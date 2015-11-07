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
if(typeof cljs.core.async.t_cljs$core$async16034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16034 = (function (fn_handler,f,meta16035){
this.fn_handler = fn_handler;
this.f = f;
this.meta16035 = meta16035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16036,meta16035__$1){
var self__ = this;
var _16036__$1 = this;
return (new cljs.core.async.t_cljs$core$async16034(self__.fn_handler,self__.f,meta16035__$1));
});

cljs.core.async.t_cljs$core$async16034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16036){
var self__ = this;
var _16036__$1 = this;
return self__.meta16035;
});

cljs.core.async.t_cljs$core$async16034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fn_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f], null)))], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$meta16035], null);
});

cljs.core.async.t_cljs$core$async16034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16034";

cljs.core.async.t_cljs$core$async16034.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async16034");
});

cljs.core.async.__GT_t_cljs$core$async16034 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async16034(fn_handler__$1,f__$1,meta16035){
return (new cljs.core.async.t_cljs$core$async16034(fn_handler__$1,f__$1,meta16035));
});

}

return (new cljs.core.async.t_cljs$core$async16034(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args16039 = [];
var len__6226__auto___16042 = arguments.length;
var i__6227__auto___16043 = (0);
while(true){
if((i__6227__auto___16043 < len__6226__auto___16042)){
args16039.push((arguments[i__6227__auto___16043]));

var G__16044 = (i__6227__auto___16043 + (1));
i__6227__auto___16043 = G__16044;
continue;
} else {
}
break;
}

var G__16041 = args16039.length;
switch (G__16041) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16039.length)].join('')));

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
var args16046 = [];
var len__6226__auto___16049 = arguments.length;
var i__6227__auto___16050 = (0);
while(true){
if((i__6227__auto___16050 < len__6226__auto___16049)){
args16046.push((arguments[i__6227__auto___16050]));

var G__16051 = (i__6227__auto___16050 + (1));
i__6227__auto___16050 = G__16051;
continue;
} else {
}
break;
}

var G__16048 = args16046.length;
switch (G__16048) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16046.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_16053 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16053) : fn1.call(null,val_16053));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16053,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16053) : fn1.call(null,val_16053));
});})(val_16053,ret))
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
var args16054 = [];
var len__6226__auto___16057 = arguments.length;
var i__6227__auto___16058 = (0);
while(true){
if((i__6227__auto___16058 < len__6226__auto___16057)){
args16054.push((arguments[i__6227__auto___16058]));

var G__16059 = (i__6227__auto___16058 + (1));
i__6227__auto___16058 = G__16059;
continue;
} else {
}
break;
}

var G__16056 = args16054.length;
switch (G__16056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16054.length)].join('')));

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
var n__6071__auto___16061 = n;
var x_16062 = (0);
while(true){
if((x_16062 < n__6071__auto___16061)){
(a[x_16062] = (0));

var G__16063 = (x_16062 + (1));
x_16062 = G__16063;
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

var G__16064 = (i + (1));
i = G__16064;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16068 = (function (alt_flag,flag,meta16069){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16069 = meta16069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16070,meta16069__$1){
var self__ = this;
var _16070__$1 = this;
return (new cljs.core.async.t_cljs$core$async16068(self__.alt_flag,self__.flag,meta16069__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16070){
var self__ = this;
var _16070__$1 = this;
return self__.meta16069;
});})(flag))
;

cljs.core.async.t_cljs$core$async16068.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16068.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16069], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16068";

cljs.core.async.t_cljs$core$async16068.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async16068");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16068 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16068(alt_flag__$1,flag__$1,meta16069){
return (new cljs.core.async.t_cljs$core$async16068(alt_flag__$1,flag__$1,meta16069));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16068(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16074 = (function (alt_handler,flag,cb,meta16075){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16075 = meta16075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16076,meta16075__$1){
var self__ = this;
var _16076__$1 = this;
return (new cljs.core.async.t_cljs$core$async16074(self__.alt_handler,self__.flag,self__.cb,meta16075__$1));
});

cljs.core.async.t_cljs$core$async16074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16076){
var self__ = this;
var _16076__$1 = this;
return self__.meta16075;
});

cljs.core.async.t_cljs$core$async16074.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16075], null);
});

cljs.core.async.t_cljs$core$async16074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16074";

cljs.core.async.t_cljs$core$async16074.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async16074");
});

cljs.core.async.__GT_t_cljs$core$async16074 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16074(alt_handler__$1,flag__$1,cb__$1,meta16075){
return (new cljs.core.async.t_cljs$core$async16074(alt_handler__$1,flag__$1,cb__$1,meta16075));
});

}

return (new cljs.core.async.t_cljs$core$async16074(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16077_SHARP_){
var G__16081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16077_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16081) : fret.call(null,G__16081));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16078_SHARP_){
var G__16082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16078_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16082) : fret.call(null,G__16082));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16083 = (i + (1));
i = G__16083;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5168__auto__ = ret;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5156__auto__;
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
var args__6233__auto__ = [];
var len__6226__auto___16089 = arguments.length;
var i__6227__auto___16090 = (0);
while(true){
if((i__6227__auto___16090 < len__6226__auto___16089)){
args__6233__auto__.push((arguments[i__6227__auto___16090]));

var G__16091 = (i__6227__auto___16090 + (1));
i__6227__auto___16090 = G__16091;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16086){
var map__16087 = p__16086;
var map__16087__$1 = ((((!((map__16087 == null)))?((((map__16087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16087):map__16087);
var opts = map__16087__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16084){
var G__16085 = cljs.core.first(seq16084);
var seq16084__$1 = cljs.core.next(seq16084);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16085,seq16084__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args16092 = [];
var len__6226__auto___16142 = arguments.length;
var i__6227__auto___16143 = (0);
while(true){
if((i__6227__auto___16143 < len__6226__auto___16142)){
args16092.push((arguments[i__6227__auto___16143]));

var G__16144 = (i__6227__auto___16143 + (1));
i__6227__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var G__16094 = args16092.length;
switch (G__16094) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16092.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15986__auto___16146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___16146){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___16146){
return (function (state_16118){
var state_val_16119 = (state_16118[(1)]);
if((state_val_16119 === (7))){
var inst_16114 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16120_16147 = state_16118__$1;
(statearr_16120_16147[(2)] = inst_16114);

(statearr_16120_16147[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (1))){
var state_16118__$1 = state_16118;
var statearr_16121_16148 = state_16118__$1;
(statearr_16121_16148[(2)] = null);

(statearr_16121_16148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (4))){
var inst_16097 = (state_16118[(7)]);
var inst_16097__$1 = (state_16118[(2)]);
var inst_16098 = (inst_16097__$1 == null);
var state_16118__$1 = (function (){var statearr_16122 = state_16118;
(statearr_16122[(7)] = inst_16097__$1);

return statearr_16122;
})();
if(cljs.core.truth_(inst_16098)){
var statearr_16123_16149 = state_16118__$1;
(statearr_16123_16149[(1)] = (5));

} else {
var statearr_16124_16150 = state_16118__$1;
(statearr_16124_16150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (13))){
var state_16118__$1 = state_16118;
var statearr_16125_16151 = state_16118__$1;
(statearr_16125_16151[(2)] = null);

(statearr_16125_16151[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (6))){
var inst_16097 = (state_16118[(7)]);
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16118__$1,(11),to,inst_16097);
} else {
if((state_val_16119 === (3))){
var inst_16116 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16118__$1,inst_16116);
} else {
if((state_val_16119 === (12))){
var state_16118__$1 = state_16118;
var statearr_16126_16152 = state_16118__$1;
(statearr_16126_16152[(2)] = null);

(statearr_16126_16152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (2))){
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16118__$1,(4),from);
} else {
if((state_val_16119 === (11))){
var inst_16107 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
if(cljs.core.truth_(inst_16107)){
var statearr_16127_16153 = state_16118__$1;
(statearr_16127_16153[(1)] = (12));

} else {
var statearr_16128_16154 = state_16118__$1;
(statearr_16128_16154[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (9))){
var state_16118__$1 = state_16118;
var statearr_16129_16155 = state_16118__$1;
(statearr_16129_16155[(2)] = null);

(statearr_16129_16155[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (5))){
var state_16118__$1 = state_16118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16130_16156 = state_16118__$1;
(statearr_16130_16156[(1)] = (8));

} else {
var statearr_16131_16157 = state_16118__$1;
(statearr_16131_16157[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (14))){
var inst_16112 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16132_16158 = state_16118__$1;
(statearr_16132_16158[(2)] = inst_16112);

(statearr_16132_16158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (10))){
var inst_16104 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16133_16159 = state_16118__$1;
(statearr_16133_16159[(2)] = inst_16104);

(statearr_16133_16159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (8))){
var inst_16101 = cljs.core.async.close_BANG_(to);
var state_16118__$1 = state_16118;
var statearr_16134_16160 = state_16118__$1;
(statearr_16134_16160[(2)] = inst_16101);

(statearr_16134_16160[(1)] = (10));


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
});})(c__15986__auto___16146))
;
return ((function (switch__15872__auto__,c__15986__auto___16146){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_16118){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16118);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object)){
var ex__15876__auto__ = e16139;
var statearr_16140_16161 = state_16118;
(statearr_16140_16161[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16118);

return cljs.core.cst$kw$recur;
} else {
throw e16139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16162 = state_16118;
state_16118 = G__16162;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_16118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_16118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___16146))
})();
var state__15988__auto__ = (function (){var statearr_16141 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16146);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___16146))
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
return (function (p__16346){
var vec__16347 = p__16346;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16347,(1),null);
var job = vec__16347;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15986__auto___16529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results){
return (function (state_16352){
var state_val_16353 = (state_16352[(1)]);
if((state_val_16353 === (1))){
var state_16352__$1 = state_16352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16352__$1,(2),res,v);
} else {
if((state_val_16353 === (2))){
var inst_16349 = (state_16352[(2)]);
var inst_16350 = cljs.core.async.close_BANG_(res);
var state_16352__$1 = (function (){var statearr_16354 = state_16352;
(statearr_16354[(7)] = inst_16349);

return statearr_16354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16352__$1,inst_16350);
} else {
return null;
}
}
});})(c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results))
;
return ((function (switch__15872__auto__,c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_16358 = [null,null,null,null,null,null,null,null];
(statearr_16358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__);

(statearr_16358[(1)] = (1));

return statearr_16358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1 = (function (state_16352){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16352);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16359){if((e16359 instanceof Object)){
var ex__15876__auto__ = e16359;
var statearr_16360_16530 = state_16352;
(statearr_16360_16530[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16352);

return cljs.core.cst$kw$recur;
} else {
throw e16359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16531 = state_16352;
state_16352 = G__16531;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = function(state_16352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1.call(this,state_16352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results))
})();
var state__15988__auto__ = (function (){var statearr_16361 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16529);

return statearr_16361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___16529,res,vec__16347,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16362){
var vec__16363 = p__16362;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16363,(1),null);
var job = vec__16363;
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
var n__6071__auto___16532 = n;
var __16533 = (0);
while(true){
if((__16533 < n__6071__auto___16532)){
var G__16364_16534 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16364_16534) {
case "compute":
var c__15986__auto___16536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16533,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (__16533,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function (state_16377){
var state_val_16378 = (state_16377[(1)]);
if((state_val_16378 === (1))){
var state_16377__$1 = state_16377;
var statearr_16379_16537 = state_16377__$1;
(statearr_16379_16537[(2)] = null);

(statearr_16379_16537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16378 === (2))){
var state_16377__$1 = state_16377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16377__$1,(4),jobs);
} else {
if((state_val_16378 === (3))){
var inst_16375 = (state_16377[(2)]);
var state_16377__$1 = state_16377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16377__$1,inst_16375);
} else {
if((state_val_16378 === (4))){
var inst_16367 = (state_16377[(2)]);
var inst_16368 = process(inst_16367);
var state_16377__$1 = state_16377;
if(cljs.core.truth_(inst_16368)){
var statearr_16380_16538 = state_16377__$1;
(statearr_16380_16538[(1)] = (5));

} else {
var statearr_16381_16539 = state_16377__$1;
(statearr_16381_16539[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16378 === (5))){
var state_16377__$1 = state_16377;
var statearr_16382_16540 = state_16377__$1;
(statearr_16382_16540[(2)] = null);

(statearr_16382_16540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16378 === (6))){
var state_16377__$1 = state_16377;
var statearr_16383_16541 = state_16377__$1;
(statearr_16383_16541[(2)] = null);

(statearr_16383_16541[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16378 === (7))){
var inst_16373 = (state_16377[(2)]);
var state_16377__$1 = state_16377;
var statearr_16384_16542 = state_16377__$1;
(statearr_16384_16542[(2)] = inst_16373);

(statearr_16384_16542[(1)] = (3));


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
});})(__16533,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
;
return ((function (__16533,switch__15872__auto__,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_16388 = [null,null,null,null,null,null,null];
(statearr_16388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__);

(statearr_16388[(1)] = (1));

return statearr_16388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1 = (function (state_16377){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16377);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16389){if((e16389 instanceof Object)){
var ex__15876__auto__ = e16389;
var statearr_16390_16543 = state_16377;
(statearr_16390_16543[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16377);

return cljs.core.cst$kw$recur;
} else {
throw e16389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16544 = state_16377;
state_16377 = G__16544;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = function(state_16377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1.call(this,state_16377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__;
})()
;})(__16533,switch__15872__auto__,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
})();
var state__15988__auto__ = (function (){var statearr_16391 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16536);

return statearr_16391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(__16533,c__15986__auto___16536,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
);


break;
case "async":
var c__15986__auto___16545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16533,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (__16533,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function (state_16404){
var state_val_16405 = (state_16404[(1)]);
if((state_val_16405 === (1))){
var state_16404__$1 = state_16404;
var statearr_16406_16546 = state_16404__$1;
(statearr_16406_16546[(2)] = null);

(statearr_16406_16546[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (2))){
var state_16404__$1 = state_16404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16404__$1,(4),jobs);
} else {
if((state_val_16405 === (3))){
var inst_16402 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16404__$1,inst_16402);
} else {
if((state_val_16405 === (4))){
var inst_16394 = (state_16404[(2)]);
var inst_16395 = async(inst_16394);
var state_16404__$1 = state_16404;
if(cljs.core.truth_(inst_16395)){
var statearr_16407_16547 = state_16404__$1;
(statearr_16407_16547[(1)] = (5));

} else {
var statearr_16408_16548 = state_16404__$1;
(statearr_16408_16548[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (5))){
var state_16404__$1 = state_16404;
var statearr_16409_16549 = state_16404__$1;
(statearr_16409_16549[(2)] = null);

(statearr_16409_16549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (6))){
var state_16404__$1 = state_16404;
var statearr_16410_16550 = state_16404__$1;
(statearr_16410_16550[(2)] = null);

(statearr_16410_16550[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16405 === (7))){
var inst_16400 = (state_16404[(2)]);
var state_16404__$1 = state_16404;
var statearr_16411_16551 = state_16404__$1;
(statearr_16411_16551[(2)] = inst_16400);

(statearr_16411_16551[(1)] = (3));


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
});})(__16533,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
;
return ((function (__16533,switch__15872__auto__,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_16415 = [null,null,null,null,null,null,null];
(statearr_16415[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__);

(statearr_16415[(1)] = (1));

return statearr_16415;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1 = (function (state_16404){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16404);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16416){if((e16416 instanceof Object)){
var ex__15876__auto__ = e16416;
var statearr_16417_16552 = state_16404;
(statearr_16417_16552[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16404);

return cljs.core.cst$kw$recur;
} else {
throw e16416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16553 = state_16404;
state_16404 = G__16553;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = function(state_16404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1.call(this,state_16404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__;
})()
;})(__16533,switch__15872__auto__,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
})();
var state__15988__auto__ = (function (){var statearr_16418 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16545);

return statearr_16418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(__16533,c__15986__auto___16545,G__16364_16534,n__6071__auto___16532,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16554 = (__16533 + (1));
__16533 = G__16554;
continue;
} else {
}
break;
}

var c__15986__auto___16555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___16555,jobs,results,process,async){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___16555,jobs,results,process,async){
return (function (state_16440){
var state_val_16441 = (state_16440[(1)]);
if((state_val_16441 === (1))){
var state_16440__$1 = state_16440;
var statearr_16442_16556 = state_16440__$1;
(statearr_16442_16556[(2)] = null);

(statearr_16442_16556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16441 === (2))){
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16440__$1,(4),from);
} else {
if((state_val_16441 === (3))){
var inst_16438 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16440__$1,inst_16438);
} else {
if((state_val_16441 === (4))){
var inst_16421 = (state_16440[(7)]);
var inst_16421__$1 = (state_16440[(2)]);
var inst_16422 = (inst_16421__$1 == null);
var state_16440__$1 = (function (){var statearr_16443 = state_16440;
(statearr_16443[(7)] = inst_16421__$1);

return statearr_16443;
})();
if(cljs.core.truth_(inst_16422)){
var statearr_16444_16557 = state_16440__$1;
(statearr_16444_16557[(1)] = (5));

} else {
var statearr_16445_16558 = state_16440__$1;
(statearr_16445_16558[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16441 === (5))){
var inst_16424 = cljs.core.async.close_BANG_(jobs);
var state_16440__$1 = state_16440;
var statearr_16446_16559 = state_16440__$1;
(statearr_16446_16559[(2)] = inst_16424);

(statearr_16446_16559[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16441 === (6))){
var inst_16426 = (state_16440[(8)]);
var inst_16421 = (state_16440[(7)]);
var inst_16426__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16428 = [inst_16421,inst_16426__$1];
var inst_16429 = (new cljs.core.PersistentVector(null,2,(5),inst_16427,inst_16428,null));
var state_16440__$1 = (function (){var statearr_16447 = state_16440;
(statearr_16447[(8)] = inst_16426__$1);

return statearr_16447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16440__$1,(8),jobs,inst_16429);
} else {
if((state_val_16441 === (7))){
var inst_16436 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16448_16560 = state_16440__$1;
(statearr_16448_16560[(2)] = inst_16436);

(statearr_16448_16560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16441 === (8))){
var inst_16426 = (state_16440[(8)]);
var inst_16431 = (state_16440[(2)]);
var state_16440__$1 = (function (){var statearr_16449 = state_16440;
(statearr_16449[(9)] = inst_16431);

return statearr_16449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16440__$1,(9),results,inst_16426);
} else {
if((state_val_16441 === (9))){
var inst_16433 = (state_16440[(2)]);
var state_16440__$1 = (function (){var statearr_16450 = state_16440;
(statearr_16450[(10)] = inst_16433);

return statearr_16450;
})();
var statearr_16451_16561 = state_16440__$1;
(statearr_16451_16561[(2)] = null);

(statearr_16451_16561[(1)] = (2));


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
});})(c__15986__auto___16555,jobs,results,process,async))
;
return ((function (switch__15872__auto__,c__15986__auto___16555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_16455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__);

(statearr_16455[(1)] = (1));

return statearr_16455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1 = (function (state_16440){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16440);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16456){if((e16456 instanceof Object)){
var ex__15876__auto__ = e16456;
var statearr_16457_16562 = state_16440;
(statearr_16457_16562[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16440);

return cljs.core.cst$kw$recur;
} else {
throw e16456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16563 = state_16440;
state_16440 = G__16563;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = function(state_16440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1.call(this,state_16440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___16555,jobs,results,process,async))
})();
var state__15988__auto__ = (function (){var statearr_16458 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16555);

return statearr_16458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___16555,jobs,results,process,async))
);


var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__,jobs,results,process,async){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__,jobs,results,process,async){
return (function (state_16496){
var state_val_16497 = (state_16496[(1)]);
if((state_val_16497 === (7))){
var inst_16492 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16498_16564 = state_16496__$1;
(statearr_16498_16564[(2)] = inst_16492);

(statearr_16498_16564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (20))){
var state_16496__$1 = state_16496;
var statearr_16499_16565 = state_16496__$1;
(statearr_16499_16565[(2)] = null);

(statearr_16499_16565[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (1))){
var state_16496__$1 = state_16496;
var statearr_16500_16566 = state_16496__$1;
(statearr_16500_16566[(2)] = null);

(statearr_16500_16566[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (4))){
var inst_16461 = (state_16496[(7)]);
var inst_16461__$1 = (state_16496[(2)]);
var inst_16462 = (inst_16461__$1 == null);
var state_16496__$1 = (function (){var statearr_16501 = state_16496;
(statearr_16501[(7)] = inst_16461__$1);

return statearr_16501;
})();
if(cljs.core.truth_(inst_16462)){
var statearr_16502_16567 = state_16496__$1;
(statearr_16502_16567[(1)] = (5));

} else {
var statearr_16503_16568 = state_16496__$1;
(statearr_16503_16568[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (15))){
var inst_16474 = (state_16496[(8)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16496__$1,(18),to,inst_16474);
} else {
if((state_val_16497 === (21))){
var inst_16487 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16504_16569 = state_16496__$1;
(statearr_16504_16569[(2)] = inst_16487);

(statearr_16504_16569[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (13))){
var inst_16489 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16505 = state_16496;
(statearr_16505[(9)] = inst_16489);

return statearr_16505;
})();
var statearr_16506_16570 = state_16496__$1;
(statearr_16506_16570[(2)] = null);

(statearr_16506_16570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (6))){
var inst_16461 = (state_16496[(7)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16496__$1,(11),inst_16461);
} else {
if((state_val_16497 === (17))){
var inst_16482 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
if(cljs.core.truth_(inst_16482)){
var statearr_16507_16571 = state_16496__$1;
(statearr_16507_16571[(1)] = (19));

} else {
var statearr_16508_16572 = state_16496__$1;
(statearr_16508_16572[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (3))){
var inst_16494 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16496__$1,inst_16494);
} else {
if((state_val_16497 === (12))){
var inst_16471 = (state_16496[(10)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16496__$1,(14),inst_16471);
} else {
if((state_val_16497 === (2))){
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16496__$1,(4),results);
} else {
if((state_val_16497 === (19))){
var state_16496__$1 = state_16496;
var statearr_16509_16573 = state_16496__$1;
(statearr_16509_16573[(2)] = null);

(statearr_16509_16573[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (11))){
var inst_16471 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16510 = state_16496;
(statearr_16510[(10)] = inst_16471);

return statearr_16510;
})();
var statearr_16511_16574 = state_16496__$1;
(statearr_16511_16574[(2)] = null);

(statearr_16511_16574[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (9))){
var state_16496__$1 = state_16496;
var statearr_16512_16575 = state_16496__$1;
(statearr_16512_16575[(2)] = null);

(statearr_16512_16575[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (5))){
var state_16496__$1 = state_16496;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16513_16576 = state_16496__$1;
(statearr_16513_16576[(1)] = (8));

} else {
var statearr_16514_16577 = state_16496__$1;
(statearr_16514_16577[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (14))){
var inst_16476 = (state_16496[(11)]);
var inst_16474 = (state_16496[(8)]);
var inst_16474__$1 = (state_16496[(2)]);
var inst_16475 = (inst_16474__$1 == null);
var inst_16476__$1 = cljs.core.not(inst_16475);
var state_16496__$1 = (function (){var statearr_16515 = state_16496;
(statearr_16515[(11)] = inst_16476__$1);

(statearr_16515[(8)] = inst_16474__$1);

return statearr_16515;
})();
if(inst_16476__$1){
var statearr_16516_16578 = state_16496__$1;
(statearr_16516_16578[(1)] = (15));

} else {
var statearr_16517_16579 = state_16496__$1;
(statearr_16517_16579[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (16))){
var inst_16476 = (state_16496[(11)]);
var state_16496__$1 = state_16496;
var statearr_16518_16580 = state_16496__$1;
(statearr_16518_16580[(2)] = inst_16476);

(statearr_16518_16580[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (10))){
var inst_16468 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16519_16581 = state_16496__$1;
(statearr_16519_16581[(2)] = inst_16468);

(statearr_16519_16581[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (18))){
var inst_16479 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16520_16582 = state_16496__$1;
(statearr_16520_16582[(2)] = inst_16479);

(statearr_16520_16582[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (8))){
var inst_16465 = cljs.core.async.close_BANG_(to);
var state_16496__$1 = state_16496;
var statearr_16521_16583 = state_16496__$1;
(statearr_16521_16583[(2)] = inst_16465);

(statearr_16521_16583[(1)] = (10));


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
});})(c__15986__auto__,jobs,results,process,async))
;
return ((function (switch__15872__auto__,c__15986__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_16525 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__);

(statearr_16525[(1)] = (1));

return statearr_16525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1 = (function (state_16496){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16496);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16526){if((e16526 instanceof Object)){
var ex__15876__auto__ = e16526;
var statearr_16527_16584 = state_16496;
(statearr_16527_16584[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16496);

return cljs.core.cst$kw$recur;
} else {
throw e16526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16585 = state_16496;
state_16496 = G__16585;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__ = function(state_16496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1.call(this,state_16496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__,jobs,results,process,async))
})();
var state__15988__auto__ = (function (){var statearr_16528 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_16528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__,jobs,results,process,async))
);

return c__15986__auto__;
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
var args16586 = [];
var len__6226__auto___16589 = arguments.length;
var i__6227__auto___16590 = (0);
while(true){
if((i__6227__auto___16590 < len__6226__auto___16589)){
args16586.push((arguments[i__6227__auto___16590]));

var G__16591 = (i__6227__auto___16590 + (1));
i__6227__auto___16590 = G__16591;
continue;
} else {
}
break;
}

var G__16588 = args16586.length;
switch (G__16588) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16586.length)].join('')));

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
var args16593 = [];
var len__6226__auto___16596 = arguments.length;
var i__6227__auto___16597 = (0);
while(true){
if((i__6227__auto___16597 < len__6226__auto___16596)){
args16593.push((arguments[i__6227__auto___16597]));

var G__16598 = (i__6227__auto___16597 + (1));
i__6227__auto___16597 = G__16598;
continue;
} else {
}
break;
}

var G__16595 = args16593.length;
switch (G__16595) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16593.length)].join('')));

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
var args16600 = [];
var len__6226__auto___16653 = arguments.length;
var i__6227__auto___16654 = (0);
while(true){
if((i__6227__auto___16654 < len__6226__auto___16653)){
args16600.push((arguments[i__6227__auto___16654]));

var G__16655 = (i__6227__auto___16654 + (1));
i__6227__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var G__16602 = args16600.length;
switch (G__16602) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16600.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15986__auto___16657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___16657,tc,fc){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___16657,tc,fc){
return (function (state_16628){
var state_val_16629 = (state_16628[(1)]);
if((state_val_16629 === (7))){
var inst_16624 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16630_16658 = state_16628__$1;
(statearr_16630_16658[(2)] = inst_16624);

(statearr_16630_16658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (1))){
var state_16628__$1 = state_16628;
var statearr_16631_16659 = state_16628__$1;
(statearr_16631_16659[(2)] = null);

(statearr_16631_16659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (4))){
var inst_16605 = (state_16628[(7)]);
var inst_16605__$1 = (state_16628[(2)]);
var inst_16606 = (inst_16605__$1 == null);
var state_16628__$1 = (function (){var statearr_16632 = state_16628;
(statearr_16632[(7)] = inst_16605__$1);

return statearr_16632;
})();
if(cljs.core.truth_(inst_16606)){
var statearr_16633_16660 = state_16628__$1;
(statearr_16633_16660[(1)] = (5));

} else {
var statearr_16634_16661 = state_16628__$1;
(statearr_16634_16661[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (13))){
var state_16628__$1 = state_16628;
var statearr_16635_16662 = state_16628__$1;
(statearr_16635_16662[(2)] = null);

(statearr_16635_16662[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (6))){
var inst_16605 = (state_16628[(7)]);
var inst_16611 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16605) : p.call(null,inst_16605));
var state_16628__$1 = state_16628;
if(cljs.core.truth_(inst_16611)){
var statearr_16636_16663 = state_16628__$1;
(statearr_16636_16663[(1)] = (9));

} else {
var statearr_16637_16664 = state_16628__$1;
(statearr_16637_16664[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (3))){
var inst_16626 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16628__$1,inst_16626);
} else {
if((state_val_16629 === (12))){
var state_16628__$1 = state_16628;
var statearr_16638_16665 = state_16628__$1;
(statearr_16638_16665[(2)] = null);

(statearr_16638_16665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (2))){
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16628__$1,(4),ch);
} else {
if((state_val_16629 === (11))){
var inst_16605 = (state_16628[(7)]);
var inst_16615 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16628__$1,(8),inst_16615,inst_16605);
} else {
if((state_val_16629 === (9))){
var state_16628__$1 = state_16628;
var statearr_16639_16666 = state_16628__$1;
(statearr_16639_16666[(2)] = tc);

(statearr_16639_16666[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (5))){
var inst_16608 = cljs.core.async.close_BANG_(tc);
var inst_16609 = cljs.core.async.close_BANG_(fc);
var state_16628__$1 = (function (){var statearr_16640 = state_16628;
(statearr_16640[(8)] = inst_16608);

return statearr_16640;
})();
var statearr_16641_16667 = state_16628__$1;
(statearr_16641_16667[(2)] = inst_16609);

(statearr_16641_16667[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (14))){
var inst_16622 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16642_16668 = state_16628__$1;
(statearr_16642_16668[(2)] = inst_16622);

(statearr_16642_16668[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (10))){
var state_16628__$1 = state_16628;
var statearr_16643_16669 = state_16628__$1;
(statearr_16643_16669[(2)] = fc);

(statearr_16643_16669[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (8))){
var inst_16617 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
if(cljs.core.truth_(inst_16617)){
var statearr_16644_16670 = state_16628__$1;
(statearr_16644_16670[(1)] = (12));

} else {
var statearr_16645_16671 = state_16628__$1;
(statearr_16645_16671[(1)] = (13));

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
});})(c__15986__auto___16657,tc,fc))
;
return ((function (switch__15872__auto__,c__15986__auto___16657,tc,fc){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_16628){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16628);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16650){if((e16650 instanceof Object)){
var ex__15876__auto__ = e16650;
var statearr_16651_16672 = state_16628;
(statearr_16651_16672[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16628);

return cljs.core.cst$kw$recur;
} else {
throw e16650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16673 = state_16628;
state_16628 = G__16673;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_16628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_16628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___16657,tc,fc))
})();
var state__15988__auto__ = (function (){var statearr_16652 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___16657);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___16657,tc,fc))
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
var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__){
return (function (state_16720){
var state_val_16721 = (state_16720[(1)]);
if((state_val_16721 === (1))){
var inst_16706 = init;
var state_16720__$1 = (function (){var statearr_16722 = state_16720;
(statearr_16722[(7)] = inst_16706);

return statearr_16722;
})();
var statearr_16723_16738 = state_16720__$1;
(statearr_16723_16738[(2)] = null);

(statearr_16723_16738[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (2))){
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16720__$1,(4),ch);
} else {
if((state_val_16721 === (3))){
var inst_16718 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16720__$1,inst_16718);
} else {
if((state_val_16721 === (4))){
var inst_16709 = (state_16720[(8)]);
var inst_16709__$1 = (state_16720[(2)]);
var inst_16710 = (inst_16709__$1 == null);
var state_16720__$1 = (function (){var statearr_16724 = state_16720;
(statearr_16724[(8)] = inst_16709__$1);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16710)){
var statearr_16725_16739 = state_16720__$1;
(statearr_16725_16739[(1)] = (5));

} else {
var statearr_16726_16740 = state_16720__$1;
(statearr_16726_16740[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (5))){
var inst_16706 = (state_16720[(7)]);
var state_16720__$1 = state_16720;
var statearr_16727_16741 = state_16720__$1;
(statearr_16727_16741[(2)] = inst_16706);

(statearr_16727_16741[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (6))){
var inst_16709 = (state_16720[(8)]);
var inst_16706 = (state_16720[(7)]);
var inst_16713 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16706,inst_16709) : f.call(null,inst_16706,inst_16709));
var inst_16706__$1 = inst_16713;
var state_16720__$1 = (function (){var statearr_16728 = state_16720;
(statearr_16728[(7)] = inst_16706__$1);

return statearr_16728;
})();
var statearr_16729_16742 = state_16720__$1;
(statearr_16729_16742[(2)] = null);

(statearr_16729_16742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (7))){
var inst_16716 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
var statearr_16730_16743 = state_16720__$1;
(statearr_16730_16743[(2)] = inst_16716);

(statearr_16730_16743[(1)] = (3));


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
});})(c__15986__auto__))
;
return ((function (switch__15872__auto__,c__15986__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15873__auto____0 = (function (){
var statearr_16734 = [null,null,null,null,null,null,null,null,null];
(statearr_16734[(0)] = cljs$core$async$reduce_$_state_machine__15873__auto__);

(statearr_16734[(1)] = (1));

return statearr_16734;
});
var cljs$core$async$reduce_$_state_machine__15873__auto____1 = (function (state_16720){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16720);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object)){
var ex__15876__auto__ = e16735;
var statearr_16736_16744 = state_16720;
(statearr_16736_16744[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16720);

return cljs.core.cst$kw$recur;
} else {
throw e16735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16745 = state_16720;
state_16720 = G__16745;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15873__auto__ = function(state_16720){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15873__auto____1.call(this,state_16720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15873__auto____0;
cljs$core$async$reduce_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15873__auto____1;
return cljs$core$async$reduce_$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__))
})();
var state__15988__auto__ = (function (){var statearr_16737 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__))
);

return c__15986__auto__;
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
var args16746 = [];
var len__6226__auto___16798 = arguments.length;
var i__6227__auto___16799 = (0);
while(true){
if((i__6227__auto___16799 < len__6226__auto___16798)){
args16746.push((arguments[i__6227__auto___16799]));

var G__16800 = (i__6227__auto___16799 + (1));
i__6227__auto___16799 = G__16800;
continue;
} else {
}
break;
}

var G__16748 = args16746.length;
switch (G__16748) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16746.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__){
return (function (state_16773){
var state_val_16774 = (state_16773[(1)]);
if((state_val_16774 === (7))){
var inst_16755 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16775_16802 = state_16773__$1;
(statearr_16775_16802[(2)] = inst_16755);

(statearr_16775_16802[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (1))){
var inst_16749 = cljs.core.seq(coll);
var inst_16750 = inst_16749;
var state_16773__$1 = (function (){var statearr_16776 = state_16773;
(statearr_16776[(7)] = inst_16750);

return statearr_16776;
})();
var statearr_16777_16803 = state_16773__$1;
(statearr_16777_16803[(2)] = null);

(statearr_16777_16803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (4))){
var inst_16750 = (state_16773[(7)]);
var inst_16753 = cljs.core.first(inst_16750);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16773__$1,(7),ch,inst_16753);
} else {
if((state_val_16774 === (13))){
var inst_16767 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16778_16804 = state_16773__$1;
(statearr_16778_16804[(2)] = inst_16767);

(statearr_16778_16804[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (6))){
var inst_16758 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
if(cljs.core.truth_(inst_16758)){
var statearr_16779_16805 = state_16773__$1;
(statearr_16779_16805[(1)] = (8));

} else {
var statearr_16780_16806 = state_16773__$1;
(statearr_16780_16806[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (3))){
var inst_16771 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16773__$1,inst_16771);
} else {
if((state_val_16774 === (12))){
var state_16773__$1 = state_16773;
var statearr_16781_16807 = state_16773__$1;
(statearr_16781_16807[(2)] = null);

(statearr_16781_16807[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (2))){
var inst_16750 = (state_16773[(7)]);
var state_16773__$1 = state_16773;
if(cljs.core.truth_(inst_16750)){
var statearr_16782_16808 = state_16773__$1;
(statearr_16782_16808[(1)] = (4));

} else {
var statearr_16783_16809 = state_16773__$1;
(statearr_16783_16809[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (11))){
var inst_16764 = cljs.core.async.close_BANG_(ch);
var state_16773__$1 = state_16773;
var statearr_16784_16810 = state_16773__$1;
(statearr_16784_16810[(2)] = inst_16764);

(statearr_16784_16810[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (9))){
var state_16773__$1 = state_16773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16785_16811 = state_16773__$1;
(statearr_16785_16811[(1)] = (11));

} else {
var statearr_16786_16812 = state_16773__$1;
(statearr_16786_16812[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (5))){
var inst_16750 = (state_16773[(7)]);
var state_16773__$1 = state_16773;
var statearr_16787_16813 = state_16773__$1;
(statearr_16787_16813[(2)] = inst_16750);

(statearr_16787_16813[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (10))){
var inst_16769 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16788_16814 = state_16773__$1;
(statearr_16788_16814[(2)] = inst_16769);

(statearr_16788_16814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16774 === (8))){
var inst_16750 = (state_16773[(7)]);
var inst_16760 = cljs.core.next(inst_16750);
var inst_16750__$1 = inst_16760;
var state_16773__$1 = (function (){var statearr_16789 = state_16773;
(statearr_16789[(7)] = inst_16750__$1);

return statearr_16789;
})();
var statearr_16790_16815 = state_16773__$1;
(statearr_16790_16815[(2)] = null);

(statearr_16790_16815[(1)] = (2));


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
});})(c__15986__auto__))
;
return ((function (switch__15872__auto__,c__15986__auto__){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_16794 = [null,null,null,null,null,null,null,null];
(statearr_16794[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_16794[(1)] = (1));

return statearr_16794;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_16773){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_16773);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e16795){if((e16795 instanceof Object)){
var ex__15876__auto__ = e16795;
var statearr_16796_16816 = state_16773;
(statearr_16796_16816[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16773);

return cljs.core.cst$kw$recur;
} else {
throw e16795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__16817 = state_16773;
state_16773 = G__16817;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_16773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_16773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__))
})();
var state__15988__auto__ = (function (){var statearr_16797 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_16797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_16797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__))
);

return c__15986__auto__;
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
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto__.call(null,_));
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto____$1.call(null,_));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
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
var cs = (function (){var G__17042 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17042) : cljs.core.atom.call(null,G__17042));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17043 = (function (mult,ch,cs,meta17044){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17044 = meta17044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17045,meta17044__$1){
var self__ = this;
var _17045__$1 = this;
return (new cljs.core.async.t_cljs$core$async17043(self__.mult,self__.ch,self__.cs,meta17044__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17045){
var self__ = this;
var _17045__$1 = this;
return self__.meta17044;
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17046_17266 = self__.cs;
var G__17047_17267 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17046_17266,G__17047_17267) : cljs.core.reset_BANG_.call(null,G__17046_17266,G__17047_17267));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17044], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17043";

cljs.core.async.t_cljs$core$async17043.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17043");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17043 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17043(mult__$1,ch__$1,cs__$1,meta17044){
return (new cljs.core.async.t_cljs$core$async17043(mult__$1,ch__$1,cs__$1,meta17044));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17043(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15986__auto___17268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___17268,cs,m,dchan,dctr,done){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___17268,cs,m,dchan,dctr,done){
return (function (state_17178){
var state_val_17179 = (state_17178[(1)]);
if((state_val_17179 === (7))){
var inst_17174 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17180_17269 = state_17178__$1;
(statearr_17180_17269[(2)] = inst_17174);

(statearr_17180_17269[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (20))){
var inst_17079 = (state_17178[(7)]);
var inst_17089 = cljs.core.first(inst_17079);
var inst_17090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17089,(0),null);
var inst_17091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17089,(1),null);
var state_17178__$1 = (function (){var statearr_17181 = state_17178;
(statearr_17181[(8)] = inst_17090);

return statearr_17181;
})();
if(cljs.core.truth_(inst_17091)){
var statearr_17182_17270 = state_17178__$1;
(statearr_17182_17270[(1)] = (22));

} else {
var statearr_17183_17271 = state_17178__$1;
(statearr_17183_17271[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (27))){
var inst_17126 = (state_17178[(9)]);
var inst_17119 = (state_17178[(10)]);
var inst_17121 = (state_17178[(11)]);
var inst_17050 = (state_17178[(12)]);
var inst_17126__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17119,inst_17121);
var inst_17127 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17126__$1,inst_17050,done);
var state_17178__$1 = (function (){var statearr_17184 = state_17178;
(statearr_17184[(9)] = inst_17126__$1);

return statearr_17184;
})();
if(cljs.core.truth_(inst_17127)){
var statearr_17185_17272 = state_17178__$1;
(statearr_17185_17272[(1)] = (30));

} else {
var statearr_17186_17273 = state_17178__$1;
(statearr_17186_17273[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (1))){
var state_17178__$1 = state_17178;
var statearr_17187_17274 = state_17178__$1;
(statearr_17187_17274[(2)] = null);

(statearr_17187_17274[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (24))){
var inst_17079 = (state_17178[(7)]);
var inst_17096 = (state_17178[(2)]);
var inst_17097 = cljs.core.next(inst_17079);
var inst_17059 = inst_17097;
var inst_17060 = null;
var inst_17061 = (0);
var inst_17062 = (0);
var state_17178__$1 = (function (){var statearr_17188 = state_17178;
(statearr_17188[(13)] = inst_17062);

(statearr_17188[(14)] = inst_17060);

(statearr_17188[(15)] = inst_17096);

(statearr_17188[(16)] = inst_17061);

(statearr_17188[(17)] = inst_17059);

return statearr_17188;
})();
var statearr_17189_17275 = state_17178__$1;
(statearr_17189_17275[(2)] = null);

(statearr_17189_17275[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (39))){
var state_17178__$1 = state_17178;
var statearr_17193_17276 = state_17178__$1;
(statearr_17193_17276[(2)] = null);

(statearr_17193_17276[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (4))){
var inst_17050 = (state_17178[(12)]);
var inst_17050__$1 = (state_17178[(2)]);
var inst_17051 = (inst_17050__$1 == null);
var state_17178__$1 = (function (){var statearr_17194 = state_17178;
(statearr_17194[(12)] = inst_17050__$1);

return statearr_17194;
})();
if(cljs.core.truth_(inst_17051)){
var statearr_17195_17277 = state_17178__$1;
(statearr_17195_17277[(1)] = (5));

} else {
var statearr_17196_17278 = state_17178__$1;
(statearr_17196_17278[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (15))){
var inst_17062 = (state_17178[(13)]);
var inst_17060 = (state_17178[(14)]);
var inst_17061 = (state_17178[(16)]);
var inst_17059 = (state_17178[(17)]);
var inst_17075 = (state_17178[(2)]);
var inst_17076 = (inst_17062 + (1));
var tmp17190 = inst_17060;
var tmp17191 = inst_17061;
var tmp17192 = inst_17059;
var inst_17059__$1 = tmp17192;
var inst_17060__$1 = tmp17190;
var inst_17061__$1 = tmp17191;
var inst_17062__$1 = inst_17076;
var state_17178__$1 = (function (){var statearr_17197 = state_17178;
(statearr_17197[(18)] = inst_17075);

(statearr_17197[(13)] = inst_17062__$1);

(statearr_17197[(14)] = inst_17060__$1);

(statearr_17197[(16)] = inst_17061__$1);

(statearr_17197[(17)] = inst_17059__$1);

return statearr_17197;
})();
var statearr_17198_17279 = state_17178__$1;
(statearr_17198_17279[(2)] = null);

(statearr_17198_17279[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (21))){
var inst_17100 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17202_17280 = state_17178__$1;
(statearr_17202_17280[(2)] = inst_17100);

(statearr_17202_17280[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (31))){
var inst_17126 = (state_17178[(9)]);
var inst_17130 = done(null);
var inst_17131 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17126);
var state_17178__$1 = (function (){var statearr_17203 = state_17178;
(statearr_17203[(19)] = inst_17130);

return statearr_17203;
})();
var statearr_17204_17281 = state_17178__$1;
(statearr_17204_17281[(2)] = inst_17131);

(statearr_17204_17281[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (32))){
var inst_17120 = (state_17178[(20)]);
var inst_17119 = (state_17178[(10)]);
var inst_17121 = (state_17178[(11)]);
var inst_17118 = (state_17178[(21)]);
var inst_17133 = (state_17178[(2)]);
var inst_17134 = (inst_17121 + (1));
var tmp17199 = inst_17120;
var tmp17200 = inst_17119;
var tmp17201 = inst_17118;
var inst_17118__$1 = tmp17201;
var inst_17119__$1 = tmp17200;
var inst_17120__$1 = tmp17199;
var inst_17121__$1 = inst_17134;
var state_17178__$1 = (function (){var statearr_17205 = state_17178;
(statearr_17205[(20)] = inst_17120__$1);

(statearr_17205[(22)] = inst_17133);

(statearr_17205[(10)] = inst_17119__$1);

(statearr_17205[(11)] = inst_17121__$1);

(statearr_17205[(21)] = inst_17118__$1);

return statearr_17205;
})();
var statearr_17206_17282 = state_17178__$1;
(statearr_17206_17282[(2)] = null);

(statearr_17206_17282[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (40))){
var inst_17146 = (state_17178[(23)]);
var inst_17150 = done(null);
var inst_17151 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17146);
var state_17178__$1 = (function (){var statearr_17207 = state_17178;
(statearr_17207[(24)] = inst_17150);

return statearr_17207;
})();
var statearr_17208_17283 = state_17178__$1;
(statearr_17208_17283[(2)] = inst_17151);

(statearr_17208_17283[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (33))){
var inst_17137 = (state_17178[(25)]);
var inst_17139 = cljs.core.chunked_seq_QMARK_(inst_17137);
var state_17178__$1 = state_17178;
if(inst_17139){
var statearr_17209_17284 = state_17178__$1;
(statearr_17209_17284[(1)] = (36));

} else {
var statearr_17210_17285 = state_17178__$1;
(statearr_17210_17285[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (13))){
var inst_17069 = (state_17178[(26)]);
var inst_17072 = cljs.core.async.close_BANG_(inst_17069);
var state_17178__$1 = state_17178;
var statearr_17211_17286 = state_17178__$1;
(statearr_17211_17286[(2)] = inst_17072);

(statearr_17211_17286[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (22))){
var inst_17090 = (state_17178[(8)]);
var inst_17093 = cljs.core.async.close_BANG_(inst_17090);
var state_17178__$1 = state_17178;
var statearr_17212_17287 = state_17178__$1;
(statearr_17212_17287[(2)] = inst_17093);

(statearr_17212_17287[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (36))){
var inst_17137 = (state_17178[(25)]);
var inst_17141 = cljs.core.chunk_first(inst_17137);
var inst_17142 = cljs.core.chunk_rest(inst_17137);
var inst_17143 = cljs.core.count(inst_17141);
var inst_17118 = inst_17142;
var inst_17119 = inst_17141;
var inst_17120 = inst_17143;
var inst_17121 = (0);
var state_17178__$1 = (function (){var statearr_17213 = state_17178;
(statearr_17213[(20)] = inst_17120);

(statearr_17213[(10)] = inst_17119);

(statearr_17213[(11)] = inst_17121);

(statearr_17213[(21)] = inst_17118);

return statearr_17213;
})();
var statearr_17214_17288 = state_17178__$1;
(statearr_17214_17288[(2)] = null);

(statearr_17214_17288[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (41))){
var inst_17137 = (state_17178[(25)]);
var inst_17153 = (state_17178[(2)]);
var inst_17154 = cljs.core.next(inst_17137);
var inst_17118 = inst_17154;
var inst_17119 = null;
var inst_17120 = (0);
var inst_17121 = (0);
var state_17178__$1 = (function (){var statearr_17215 = state_17178;
(statearr_17215[(27)] = inst_17153);

(statearr_17215[(20)] = inst_17120);

(statearr_17215[(10)] = inst_17119);

(statearr_17215[(11)] = inst_17121);

(statearr_17215[(21)] = inst_17118);

return statearr_17215;
})();
var statearr_17216_17289 = state_17178__$1;
(statearr_17216_17289[(2)] = null);

(statearr_17216_17289[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (43))){
var state_17178__$1 = state_17178;
var statearr_17217_17290 = state_17178__$1;
(statearr_17217_17290[(2)] = null);

(statearr_17217_17290[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (29))){
var inst_17162 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17218_17291 = state_17178__$1;
(statearr_17218_17291[(2)] = inst_17162);

(statearr_17218_17291[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (44))){
var inst_17171 = (state_17178[(2)]);
var state_17178__$1 = (function (){var statearr_17219 = state_17178;
(statearr_17219[(28)] = inst_17171);

return statearr_17219;
})();
var statearr_17220_17292 = state_17178__$1;
(statearr_17220_17292[(2)] = null);

(statearr_17220_17292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (6))){
var inst_17110 = (state_17178[(29)]);
var inst_17109 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17110__$1 = cljs.core.keys(inst_17109);
var inst_17111 = cljs.core.count(inst_17110__$1);
var inst_17112 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17111) : cljs.core.reset_BANG_.call(null,dctr,inst_17111));
var inst_17117 = cljs.core.seq(inst_17110__$1);
var inst_17118 = inst_17117;
var inst_17119 = null;
var inst_17120 = (0);
var inst_17121 = (0);
var state_17178__$1 = (function (){var statearr_17221 = state_17178;
(statearr_17221[(20)] = inst_17120);

(statearr_17221[(29)] = inst_17110__$1);

(statearr_17221[(30)] = inst_17112);

(statearr_17221[(10)] = inst_17119);

(statearr_17221[(11)] = inst_17121);

(statearr_17221[(21)] = inst_17118);

return statearr_17221;
})();
var statearr_17222_17293 = state_17178__$1;
(statearr_17222_17293[(2)] = null);

(statearr_17222_17293[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (28))){
var inst_17118 = (state_17178[(21)]);
var inst_17137 = (state_17178[(25)]);
var inst_17137__$1 = cljs.core.seq(inst_17118);
var state_17178__$1 = (function (){var statearr_17223 = state_17178;
(statearr_17223[(25)] = inst_17137__$1);

return statearr_17223;
})();
if(inst_17137__$1){
var statearr_17224_17294 = state_17178__$1;
(statearr_17224_17294[(1)] = (33));

} else {
var statearr_17225_17295 = state_17178__$1;
(statearr_17225_17295[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (25))){
var inst_17120 = (state_17178[(20)]);
var inst_17121 = (state_17178[(11)]);
var inst_17123 = (inst_17121 < inst_17120);
var inst_17124 = inst_17123;
var state_17178__$1 = state_17178;
if(cljs.core.truth_(inst_17124)){
var statearr_17226_17296 = state_17178__$1;
(statearr_17226_17296[(1)] = (27));

} else {
var statearr_17227_17297 = state_17178__$1;
(statearr_17227_17297[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (34))){
var state_17178__$1 = state_17178;
var statearr_17228_17298 = state_17178__$1;
(statearr_17228_17298[(2)] = null);

(statearr_17228_17298[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (17))){
var state_17178__$1 = state_17178;
var statearr_17229_17299 = state_17178__$1;
(statearr_17229_17299[(2)] = null);

(statearr_17229_17299[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (3))){
var inst_17176 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17178__$1,inst_17176);
} else {
if((state_val_17179 === (12))){
var inst_17105 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17230_17300 = state_17178__$1;
(statearr_17230_17300[(2)] = inst_17105);

(statearr_17230_17300[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (2))){
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17178__$1,(4),ch);
} else {
if((state_val_17179 === (23))){
var state_17178__$1 = state_17178;
var statearr_17231_17301 = state_17178__$1;
(statearr_17231_17301[(2)] = null);

(statearr_17231_17301[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (35))){
var inst_17160 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17232_17302 = state_17178__$1;
(statearr_17232_17302[(2)] = inst_17160);

(statearr_17232_17302[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (19))){
var inst_17079 = (state_17178[(7)]);
var inst_17083 = cljs.core.chunk_first(inst_17079);
var inst_17084 = cljs.core.chunk_rest(inst_17079);
var inst_17085 = cljs.core.count(inst_17083);
var inst_17059 = inst_17084;
var inst_17060 = inst_17083;
var inst_17061 = inst_17085;
var inst_17062 = (0);
var state_17178__$1 = (function (){var statearr_17233 = state_17178;
(statearr_17233[(13)] = inst_17062);

(statearr_17233[(14)] = inst_17060);

(statearr_17233[(16)] = inst_17061);

(statearr_17233[(17)] = inst_17059);

return statearr_17233;
})();
var statearr_17234_17303 = state_17178__$1;
(statearr_17234_17303[(2)] = null);

(statearr_17234_17303[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (11))){
var inst_17079 = (state_17178[(7)]);
var inst_17059 = (state_17178[(17)]);
var inst_17079__$1 = cljs.core.seq(inst_17059);
var state_17178__$1 = (function (){var statearr_17235 = state_17178;
(statearr_17235[(7)] = inst_17079__$1);

return statearr_17235;
})();
if(inst_17079__$1){
var statearr_17236_17304 = state_17178__$1;
(statearr_17236_17304[(1)] = (16));

} else {
var statearr_17237_17305 = state_17178__$1;
(statearr_17237_17305[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (9))){
var inst_17107 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17238_17306 = state_17178__$1;
(statearr_17238_17306[(2)] = inst_17107);

(statearr_17238_17306[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (5))){
var inst_17057 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17058 = cljs.core.seq(inst_17057);
var inst_17059 = inst_17058;
var inst_17060 = null;
var inst_17061 = (0);
var inst_17062 = (0);
var state_17178__$1 = (function (){var statearr_17239 = state_17178;
(statearr_17239[(13)] = inst_17062);

(statearr_17239[(14)] = inst_17060);

(statearr_17239[(16)] = inst_17061);

(statearr_17239[(17)] = inst_17059);

return statearr_17239;
})();
var statearr_17240_17307 = state_17178__$1;
(statearr_17240_17307[(2)] = null);

(statearr_17240_17307[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (14))){
var state_17178__$1 = state_17178;
var statearr_17241_17308 = state_17178__$1;
(statearr_17241_17308[(2)] = null);

(statearr_17241_17308[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (45))){
var inst_17168 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17242_17309 = state_17178__$1;
(statearr_17242_17309[(2)] = inst_17168);

(statearr_17242_17309[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (26))){
var inst_17110 = (state_17178[(29)]);
var inst_17164 = (state_17178[(2)]);
var inst_17165 = cljs.core.seq(inst_17110);
var state_17178__$1 = (function (){var statearr_17243 = state_17178;
(statearr_17243[(31)] = inst_17164);

return statearr_17243;
})();
if(inst_17165){
var statearr_17244_17310 = state_17178__$1;
(statearr_17244_17310[(1)] = (42));

} else {
var statearr_17245_17311 = state_17178__$1;
(statearr_17245_17311[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (16))){
var inst_17079 = (state_17178[(7)]);
var inst_17081 = cljs.core.chunked_seq_QMARK_(inst_17079);
var state_17178__$1 = state_17178;
if(inst_17081){
var statearr_17246_17312 = state_17178__$1;
(statearr_17246_17312[(1)] = (19));

} else {
var statearr_17247_17313 = state_17178__$1;
(statearr_17247_17313[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (38))){
var inst_17157 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17248_17314 = state_17178__$1;
(statearr_17248_17314[(2)] = inst_17157);

(statearr_17248_17314[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (30))){
var state_17178__$1 = state_17178;
var statearr_17249_17315 = state_17178__$1;
(statearr_17249_17315[(2)] = null);

(statearr_17249_17315[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (10))){
var inst_17062 = (state_17178[(13)]);
var inst_17060 = (state_17178[(14)]);
var inst_17068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17060,inst_17062);
var inst_17069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17068,(0),null);
var inst_17070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17068,(1),null);
var state_17178__$1 = (function (){var statearr_17250 = state_17178;
(statearr_17250[(26)] = inst_17069);

return statearr_17250;
})();
if(cljs.core.truth_(inst_17070)){
var statearr_17251_17316 = state_17178__$1;
(statearr_17251_17316[(1)] = (13));

} else {
var statearr_17252_17317 = state_17178__$1;
(statearr_17252_17317[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (18))){
var inst_17103 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17253_17318 = state_17178__$1;
(statearr_17253_17318[(2)] = inst_17103);

(statearr_17253_17318[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (42))){
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17178__$1,(45),dchan);
} else {
if((state_val_17179 === (37))){
var inst_17146 = (state_17178[(23)]);
var inst_17050 = (state_17178[(12)]);
var inst_17137 = (state_17178[(25)]);
var inst_17146__$1 = cljs.core.first(inst_17137);
var inst_17147 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17146__$1,inst_17050,done);
var state_17178__$1 = (function (){var statearr_17254 = state_17178;
(statearr_17254[(23)] = inst_17146__$1);

return statearr_17254;
})();
if(cljs.core.truth_(inst_17147)){
var statearr_17255_17319 = state_17178__$1;
(statearr_17255_17319[(1)] = (39));

} else {
var statearr_17256_17320 = state_17178__$1;
(statearr_17256_17320[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17179 === (8))){
var inst_17062 = (state_17178[(13)]);
var inst_17061 = (state_17178[(16)]);
var inst_17064 = (inst_17062 < inst_17061);
var inst_17065 = inst_17064;
var state_17178__$1 = state_17178;
if(cljs.core.truth_(inst_17065)){
var statearr_17257_17321 = state_17178__$1;
(statearr_17257_17321[(1)] = (10));

} else {
var statearr_17258_17322 = state_17178__$1;
(statearr_17258_17322[(1)] = (11));

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
});})(c__15986__auto___17268,cs,m,dchan,dctr,done))
;
return ((function (switch__15872__auto__,c__15986__auto___17268,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15873__auto__ = null;
var cljs$core$async$mult_$_state_machine__15873__auto____0 = (function (){
var statearr_17262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17262[(0)] = cljs$core$async$mult_$_state_machine__15873__auto__);

(statearr_17262[(1)] = (1));

return statearr_17262;
});
var cljs$core$async$mult_$_state_machine__15873__auto____1 = (function (state_17178){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_17178);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e17263){if((e17263 instanceof Object)){
var ex__15876__auto__ = e17263;
var statearr_17264_17323 = state_17178;
(statearr_17264_17323[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17178);

return cljs.core.cst$kw$recur;
} else {
throw e17263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__17324 = state_17178;
state_17178 = G__17324;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15873__auto__ = function(state_17178){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15873__auto____1.call(this,state_17178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15873__auto____0;
cljs$core$async$mult_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15873__auto____1;
return cljs$core$async$mult_$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___17268,cs,m,dchan,dctr,done))
})();
var state__15988__auto__ = (function (){var statearr_17265 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_17265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___17268);

return statearr_17265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___17268,cs,m,dchan,dctr,done))
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
var args17325 = [];
var len__6226__auto___17328 = arguments.length;
var i__6227__auto___17329 = (0);
while(true){
if((i__6227__auto___17329 < len__6226__auto___17328)){
args17325.push((arguments[i__6227__auto___17329]));

var G__17330 = (i__6227__auto___17329 + (1));
i__6227__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var G__17327 = args17325.length;
switch (G__17327) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17325.length)].join('')));

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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto__.call(null,m,state_map));
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto____$1.call(null,m,state_map));
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto__.call(null,m,mode));
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17342 = arguments.length;
var i__6227__auto___17343 = (0);
while(true){
if((i__6227__auto___17343 < len__6226__auto___17342)){
args__6233__auto__.push((arguments[i__6227__auto___17343]));

var G__17344 = (i__6227__auto___17343 + (1));
i__6227__auto___17343 = G__17344;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17336){
var map__17337 = p__17336;
var map__17337__$1 = ((((!((map__17337 == null)))?((((map__17337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17337):map__17337);
var opts = map__17337__$1;
var statearr_17339_17345 = state;
(statearr_17339_17345[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__17337,map__17337__$1,opts){
return (function (val){
var statearr_17340_17346 = state;
(statearr_17340_17346[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17337,map__17337__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_17341_17347 = state;
(statearr_17341_17347[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17332){
var G__17333 = cljs.core.first(seq17332);
var seq17332__$1 = cljs.core.next(seq17332);
var G__17334 = cljs.core.first(seq17332__$1);
var seq17332__$2 = cljs.core.next(seq17332__$1);
var G__17335 = cljs.core.first(seq17332__$2);
var seq17332__$3 = cljs.core.next(seq17332__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17333,G__17334,G__17335,seq17332__$3);
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
var cs = (function (){var G__17514 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17514) : cljs.core.atom.call(null,G__17514));
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
if(typeof cljs.core.async.t_cljs$core$async17515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17515 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17516){
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
this.meta17516 = meta17516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17517,meta17516__$1){
var self__ = this;
var _17517__$1 = this;
return (new cljs.core.async.t_cljs$core$async17515(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17516__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17517){
var self__ = this;
var _17517__$1 = this;
return self__.meta17516;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17518_17680 = self__.cs;
var G__17519_17681 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17518_17680,G__17519_17681) : cljs.core.reset_BANG_.call(null,G__17518_17680,G__17519_17681));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17515.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17516], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17515";

cljs.core.async.t_cljs$core$async17515.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17515");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17515 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17515(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17516){
return (new cljs.core.async.t_cljs$core$async17515(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17516));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17515(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15986__auto___17682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17617){
var state_val_17618 = (state_17617[(1)]);
if((state_val_17618 === (7))){
var inst_17535 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17619_17683 = state_17617__$1;
(statearr_17619_17683[(2)] = inst_17535);

(statearr_17619_17683[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (20))){
var inst_17547 = (state_17617[(7)]);
var state_17617__$1 = state_17617;
var statearr_17620_17684 = state_17617__$1;
(statearr_17620_17684[(2)] = inst_17547);

(statearr_17620_17684[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (27))){
var state_17617__$1 = state_17617;
var statearr_17621_17685 = state_17617__$1;
(statearr_17621_17685[(2)] = null);

(statearr_17621_17685[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (1))){
var inst_17523 = (state_17617[(8)]);
var inst_17523__$1 = calc_state();
var inst_17525 = (inst_17523__$1 == null);
var inst_17526 = cljs.core.not(inst_17525);
var state_17617__$1 = (function (){var statearr_17622 = state_17617;
(statearr_17622[(8)] = inst_17523__$1);

return statearr_17622;
})();
if(inst_17526){
var statearr_17623_17686 = state_17617__$1;
(statearr_17623_17686[(1)] = (2));

} else {
var statearr_17624_17687 = state_17617__$1;
(statearr_17624_17687[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (24))){
var inst_17570 = (state_17617[(9)]);
var inst_17591 = (state_17617[(10)]);
var inst_17577 = (state_17617[(11)]);
var inst_17591__$1 = (inst_17570.cljs$core$IFn$_invoke$arity$1 ? inst_17570.cljs$core$IFn$_invoke$arity$1(inst_17577) : inst_17570.call(null,inst_17577));
var state_17617__$1 = (function (){var statearr_17625 = state_17617;
(statearr_17625[(10)] = inst_17591__$1);

return statearr_17625;
})();
if(cljs.core.truth_(inst_17591__$1)){
var statearr_17626_17688 = state_17617__$1;
(statearr_17626_17688[(1)] = (29));

} else {
var statearr_17627_17689 = state_17617__$1;
(statearr_17627_17689[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (4))){
var inst_17538 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17538)){
var statearr_17628_17690 = state_17617__$1;
(statearr_17628_17690[(1)] = (8));

} else {
var statearr_17629_17691 = state_17617__$1;
(statearr_17629_17691[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (15))){
var inst_17564 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17564)){
var statearr_17630_17692 = state_17617__$1;
(statearr_17630_17692[(1)] = (19));

} else {
var statearr_17631_17693 = state_17617__$1;
(statearr_17631_17693[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (21))){
var inst_17569 = (state_17617[(12)]);
var inst_17569__$1 = (state_17617[(2)]);
var inst_17570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17569__$1,cljs.core.cst$kw$solos);
var inst_17571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17569__$1,cljs.core.cst$kw$mutes);
var inst_17572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17569__$1,cljs.core.cst$kw$reads);
var state_17617__$1 = (function (){var statearr_17632 = state_17617;
(statearr_17632[(13)] = inst_17571);

(statearr_17632[(9)] = inst_17570);

(statearr_17632[(12)] = inst_17569__$1);

return statearr_17632;
})();
return cljs.core.async.ioc_alts_BANG_(state_17617__$1,(22),inst_17572);
} else {
if((state_val_17618 === (31))){
var inst_17599 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17599)){
var statearr_17633_17694 = state_17617__$1;
(statearr_17633_17694[(1)] = (32));

} else {
var statearr_17634_17695 = state_17617__$1;
(statearr_17634_17695[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (32))){
var inst_17576 = (state_17617[(14)]);
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17617__$1,(35),out,inst_17576);
} else {
if((state_val_17618 === (33))){
var inst_17569 = (state_17617[(12)]);
var inst_17547 = inst_17569;
var state_17617__$1 = (function (){var statearr_17635 = state_17617;
(statearr_17635[(7)] = inst_17547);

return statearr_17635;
})();
var statearr_17636_17696 = state_17617__$1;
(statearr_17636_17696[(2)] = null);

(statearr_17636_17696[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (13))){
var inst_17547 = (state_17617[(7)]);
var inst_17554 = inst_17547.cljs$lang$protocol_mask$partition0$;
var inst_17555 = (inst_17554 & (64));
var inst_17556 = inst_17547.cljs$core$ISeq$;
var inst_17557 = (inst_17555) || (inst_17556);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17557)){
var statearr_17637_17697 = state_17617__$1;
(statearr_17637_17697[(1)] = (16));

} else {
var statearr_17638_17698 = state_17617__$1;
(statearr_17638_17698[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (22))){
var inst_17576 = (state_17617[(14)]);
var inst_17577 = (state_17617[(11)]);
var inst_17575 = (state_17617[(2)]);
var inst_17576__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17575,(0),null);
var inst_17577__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17575,(1),null);
var inst_17578 = (inst_17576__$1 == null);
var inst_17579 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17577__$1,change);
var inst_17580 = (inst_17578) || (inst_17579);
var state_17617__$1 = (function (){var statearr_17639 = state_17617;
(statearr_17639[(14)] = inst_17576__$1);

(statearr_17639[(11)] = inst_17577__$1);

return statearr_17639;
})();
if(cljs.core.truth_(inst_17580)){
var statearr_17640_17699 = state_17617__$1;
(statearr_17640_17699[(1)] = (23));

} else {
var statearr_17641_17700 = state_17617__$1;
(statearr_17641_17700[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (36))){
var inst_17569 = (state_17617[(12)]);
var inst_17547 = inst_17569;
var state_17617__$1 = (function (){var statearr_17642 = state_17617;
(statearr_17642[(7)] = inst_17547);

return statearr_17642;
})();
var statearr_17643_17701 = state_17617__$1;
(statearr_17643_17701[(2)] = null);

(statearr_17643_17701[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (29))){
var inst_17591 = (state_17617[(10)]);
var state_17617__$1 = state_17617;
var statearr_17644_17702 = state_17617__$1;
(statearr_17644_17702[(2)] = inst_17591);

(statearr_17644_17702[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (6))){
var state_17617__$1 = state_17617;
var statearr_17645_17703 = state_17617__$1;
(statearr_17645_17703[(2)] = false);

(statearr_17645_17703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (28))){
var inst_17587 = (state_17617[(2)]);
var inst_17588 = calc_state();
var inst_17547 = inst_17588;
var state_17617__$1 = (function (){var statearr_17646 = state_17617;
(statearr_17646[(15)] = inst_17587);

(statearr_17646[(7)] = inst_17547);

return statearr_17646;
})();
var statearr_17647_17704 = state_17617__$1;
(statearr_17647_17704[(2)] = null);

(statearr_17647_17704[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (25))){
var inst_17613 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17648_17705 = state_17617__$1;
(statearr_17648_17705[(2)] = inst_17613);

(statearr_17648_17705[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (34))){
var inst_17611 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17649_17706 = state_17617__$1;
(statearr_17649_17706[(2)] = inst_17611);

(statearr_17649_17706[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (17))){
var state_17617__$1 = state_17617;
var statearr_17650_17707 = state_17617__$1;
(statearr_17650_17707[(2)] = false);

(statearr_17650_17707[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (3))){
var state_17617__$1 = state_17617;
var statearr_17651_17708 = state_17617__$1;
(statearr_17651_17708[(2)] = false);

(statearr_17651_17708[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (12))){
var inst_17615 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17617__$1,inst_17615);
} else {
if((state_val_17618 === (2))){
var inst_17523 = (state_17617[(8)]);
var inst_17528 = inst_17523.cljs$lang$protocol_mask$partition0$;
var inst_17529 = (inst_17528 & (64));
var inst_17530 = inst_17523.cljs$core$ISeq$;
var inst_17531 = (inst_17529) || (inst_17530);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17531)){
var statearr_17652_17709 = state_17617__$1;
(statearr_17652_17709[(1)] = (5));

} else {
var statearr_17653_17710 = state_17617__$1;
(statearr_17653_17710[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (23))){
var inst_17576 = (state_17617[(14)]);
var inst_17582 = (inst_17576 == null);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17582)){
var statearr_17654_17711 = state_17617__$1;
(statearr_17654_17711[(1)] = (26));

} else {
var statearr_17655_17712 = state_17617__$1;
(statearr_17655_17712[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (35))){
var inst_17602 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17602)){
var statearr_17656_17713 = state_17617__$1;
(statearr_17656_17713[(1)] = (36));

} else {
var statearr_17657_17714 = state_17617__$1;
(statearr_17657_17714[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (19))){
var inst_17547 = (state_17617[(7)]);
var inst_17566 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17547);
var state_17617__$1 = state_17617;
var statearr_17658_17715 = state_17617__$1;
(statearr_17658_17715[(2)] = inst_17566);

(statearr_17658_17715[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (11))){
var inst_17547 = (state_17617[(7)]);
var inst_17551 = (inst_17547 == null);
var inst_17552 = cljs.core.not(inst_17551);
var state_17617__$1 = state_17617;
if(inst_17552){
var statearr_17659_17716 = state_17617__$1;
(statearr_17659_17716[(1)] = (13));

} else {
var statearr_17660_17717 = state_17617__$1;
(statearr_17660_17717[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (9))){
var inst_17523 = (state_17617[(8)]);
var state_17617__$1 = state_17617;
var statearr_17661_17718 = state_17617__$1;
(statearr_17661_17718[(2)] = inst_17523);

(statearr_17661_17718[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (5))){
var state_17617__$1 = state_17617;
var statearr_17662_17719 = state_17617__$1;
(statearr_17662_17719[(2)] = true);

(statearr_17662_17719[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (14))){
var state_17617__$1 = state_17617;
var statearr_17663_17720 = state_17617__$1;
(statearr_17663_17720[(2)] = false);

(statearr_17663_17720[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (26))){
var inst_17577 = (state_17617[(11)]);
var inst_17584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17577);
var state_17617__$1 = state_17617;
var statearr_17664_17721 = state_17617__$1;
(statearr_17664_17721[(2)] = inst_17584);

(statearr_17664_17721[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (16))){
var state_17617__$1 = state_17617;
var statearr_17665_17722 = state_17617__$1;
(statearr_17665_17722[(2)] = true);

(statearr_17665_17722[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (38))){
var inst_17607 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17666_17723 = state_17617__$1;
(statearr_17666_17723[(2)] = inst_17607);

(statearr_17666_17723[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (30))){
var inst_17571 = (state_17617[(13)]);
var inst_17570 = (state_17617[(9)]);
var inst_17577 = (state_17617[(11)]);
var inst_17594 = cljs.core.empty_QMARK_(inst_17570);
var inst_17595 = (inst_17571.cljs$core$IFn$_invoke$arity$1 ? inst_17571.cljs$core$IFn$_invoke$arity$1(inst_17577) : inst_17571.call(null,inst_17577));
var inst_17596 = cljs.core.not(inst_17595);
var inst_17597 = (inst_17594) && (inst_17596);
var state_17617__$1 = state_17617;
var statearr_17667_17724 = state_17617__$1;
(statearr_17667_17724[(2)] = inst_17597);

(statearr_17667_17724[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (10))){
var inst_17523 = (state_17617[(8)]);
var inst_17543 = (state_17617[(2)]);
var inst_17544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17543,cljs.core.cst$kw$solos);
var inst_17545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17543,cljs.core.cst$kw$mutes);
var inst_17546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17543,cljs.core.cst$kw$reads);
var inst_17547 = inst_17523;
var state_17617__$1 = (function (){var statearr_17668 = state_17617;
(statearr_17668[(16)] = inst_17546);

(statearr_17668[(17)] = inst_17545);

(statearr_17668[(18)] = inst_17544);

(statearr_17668[(7)] = inst_17547);

return statearr_17668;
})();
var statearr_17669_17725 = state_17617__$1;
(statearr_17669_17725[(2)] = null);

(statearr_17669_17725[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (18))){
var inst_17561 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17670_17726 = state_17617__$1;
(statearr_17670_17726[(2)] = inst_17561);

(statearr_17670_17726[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (37))){
var state_17617__$1 = state_17617;
var statearr_17671_17727 = state_17617__$1;
(statearr_17671_17727[(2)] = null);

(statearr_17671_17727[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17618 === (8))){
var inst_17523 = (state_17617[(8)]);
var inst_17540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17523);
var state_17617__$1 = state_17617;
var statearr_17672_17728 = state_17617__$1;
(statearr_17672_17728[(2)] = inst_17540);

(statearr_17672_17728[(1)] = (10));


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
});})(c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15872__auto__,c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15873__auto__ = null;
var cljs$core$async$mix_$_state_machine__15873__auto____0 = (function (){
var statearr_17676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17676[(0)] = cljs$core$async$mix_$_state_machine__15873__auto__);

(statearr_17676[(1)] = (1));

return statearr_17676;
});
var cljs$core$async$mix_$_state_machine__15873__auto____1 = (function (state_17617){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_17617);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e17677){if((e17677 instanceof Object)){
var ex__15876__auto__ = e17677;
var statearr_17678_17729 = state_17617;
(statearr_17678_17729[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17617);

return cljs.core.cst$kw$recur;
} else {
throw e17677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__17730 = state_17617;
state_17617 = G__17730;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15873__auto__ = function(state_17617){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15873__auto____1.call(this,state_17617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15873__auto____0;
cljs$core$async$mix_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15873__auto____1;
return cljs$core$async$mix_$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15988__auto__ = (function (){var statearr_17679 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_17679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___17682);

return statearr_17679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___17682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto__.call(null,p,v,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17731 = [];
var len__6226__auto___17734 = arguments.length;
var i__6227__auto___17735 = (0);
while(true){
if((i__6227__auto___17735 < len__6226__auto___17734)){
args17731.push((arguments[i__6227__auto___17735]));

var G__17736 = (i__6227__auto___17735 + (1));
i__6227__auto___17735 = G__17736;
continue;
} else {
}
break;
}

var G__17733 = args17731.length;
switch (G__17733) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17731.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto__.call(null,p));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto____$1.call(null,p));
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto__.call(null,p,v));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto____$1.call(null,p,v));
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
var args17739 = [];
var len__6226__auto___17867 = arguments.length;
var i__6227__auto___17868 = (0);
while(true){
if((i__6227__auto___17868 < len__6226__auto___17867)){
args17739.push((arguments[i__6227__auto___17868]));

var G__17869 = (i__6227__auto___17868 + (1));
i__6227__auto___17868 = G__17869;
continue;
} else {
}
break;
}

var G__17741 = args17739.length;
switch (G__17741) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17739.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17742 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17742) : cljs.core.atom.call(null,G__17742));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5168__auto__,mults){
return (function (p1__17738_SHARP_){
if(cljs.core.truth_((p1__17738_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17738_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17738_SHARP_.call(null,topic)))){
return p1__17738_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17738_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17743 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17744){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17744 = meta17744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17745,meta17744__$1){
var self__ = this;
var _17745__$1 = this;
return (new cljs.core.async.t_cljs$core$async17743(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17744__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17745){
var self__ = this;
var _17745__$1 = this;
return self__.meta17744;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17746 = self__.mults;
var G__17747 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17746,G__17747) : cljs.core.reset_BANG_.call(null,G__17746,G__17747));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17744], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17743";

cljs.core.async.t_cljs$core$async17743.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async17743");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17743 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17744){
return (new cljs.core.async.t_cljs$core$async17743(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17744));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17743(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15986__auto___17871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___17871,mults,ensure_mult,p){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___17871,mults,ensure_mult,p){
return (function (state_17819){
var state_val_17820 = (state_17819[(1)]);
if((state_val_17820 === (7))){
var inst_17815 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17821_17872 = state_17819__$1;
(statearr_17821_17872[(2)] = inst_17815);

(statearr_17821_17872[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (20))){
var state_17819__$1 = state_17819;
var statearr_17822_17873 = state_17819__$1;
(statearr_17822_17873[(2)] = null);

(statearr_17822_17873[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (1))){
var state_17819__$1 = state_17819;
var statearr_17823_17874 = state_17819__$1;
(statearr_17823_17874[(2)] = null);

(statearr_17823_17874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (24))){
var inst_17798 = (state_17819[(7)]);
var inst_17807 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17798);
var state_17819__$1 = state_17819;
var statearr_17824_17875 = state_17819__$1;
(statearr_17824_17875[(2)] = inst_17807);

(statearr_17824_17875[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (4))){
var inst_17750 = (state_17819[(8)]);
var inst_17750__$1 = (state_17819[(2)]);
var inst_17751 = (inst_17750__$1 == null);
var state_17819__$1 = (function (){var statearr_17825 = state_17819;
(statearr_17825[(8)] = inst_17750__$1);

return statearr_17825;
})();
if(cljs.core.truth_(inst_17751)){
var statearr_17826_17876 = state_17819__$1;
(statearr_17826_17876[(1)] = (5));

} else {
var statearr_17827_17877 = state_17819__$1;
(statearr_17827_17877[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (15))){
var inst_17792 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17828_17878 = state_17819__$1;
(statearr_17828_17878[(2)] = inst_17792);

(statearr_17828_17878[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (21))){
var inst_17812 = (state_17819[(2)]);
var state_17819__$1 = (function (){var statearr_17829 = state_17819;
(statearr_17829[(9)] = inst_17812);

return statearr_17829;
})();
var statearr_17830_17879 = state_17819__$1;
(statearr_17830_17879[(2)] = null);

(statearr_17830_17879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (13))){
var inst_17774 = (state_17819[(10)]);
var inst_17776 = cljs.core.chunked_seq_QMARK_(inst_17774);
var state_17819__$1 = state_17819;
if(inst_17776){
var statearr_17831_17880 = state_17819__$1;
(statearr_17831_17880[(1)] = (16));

} else {
var statearr_17832_17881 = state_17819__$1;
(statearr_17832_17881[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (22))){
var inst_17804 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17804)){
var statearr_17833_17882 = state_17819__$1;
(statearr_17833_17882[(1)] = (23));

} else {
var statearr_17834_17883 = state_17819__$1;
(statearr_17834_17883[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (6))){
var inst_17800 = (state_17819[(11)]);
var inst_17750 = (state_17819[(8)]);
var inst_17798 = (state_17819[(7)]);
var inst_17798__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17750) : topic_fn.call(null,inst_17750));
var inst_17799 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17800__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17799,inst_17798__$1);
var state_17819__$1 = (function (){var statearr_17835 = state_17819;
(statearr_17835[(11)] = inst_17800__$1);

(statearr_17835[(7)] = inst_17798__$1);

return statearr_17835;
})();
if(cljs.core.truth_(inst_17800__$1)){
var statearr_17836_17884 = state_17819__$1;
(statearr_17836_17884[(1)] = (19));

} else {
var statearr_17837_17885 = state_17819__$1;
(statearr_17837_17885[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (25))){
var inst_17809 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17838_17886 = state_17819__$1;
(statearr_17838_17886[(2)] = inst_17809);

(statearr_17838_17886[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (17))){
var inst_17774 = (state_17819[(10)]);
var inst_17783 = cljs.core.first(inst_17774);
var inst_17784 = cljs.core.async.muxch_STAR_(inst_17783);
var inst_17785 = cljs.core.async.close_BANG_(inst_17784);
var inst_17786 = cljs.core.next(inst_17774);
var inst_17760 = inst_17786;
var inst_17761 = null;
var inst_17762 = (0);
var inst_17763 = (0);
var state_17819__$1 = (function (){var statearr_17839 = state_17819;
(statearr_17839[(12)] = inst_17761);

(statearr_17839[(13)] = inst_17785);

(statearr_17839[(14)] = inst_17763);

(statearr_17839[(15)] = inst_17760);

(statearr_17839[(16)] = inst_17762);

return statearr_17839;
})();
var statearr_17840_17887 = state_17819__$1;
(statearr_17840_17887[(2)] = null);

(statearr_17840_17887[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (3))){
var inst_17817 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17819__$1,inst_17817);
} else {
if((state_val_17820 === (12))){
var inst_17794 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17841_17888 = state_17819__$1;
(statearr_17841_17888[(2)] = inst_17794);

(statearr_17841_17888[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (2))){
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17819__$1,(4),ch);
} else {
if((state_val_17820 === (23))){
var state_17819__$1 = state_17819;
var statearr_17842_17889 = state_17819__$1;
(statearr_17842_17889[(2)] = null);

(statearr_17842_17889[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (19))){
var inst_17800 = (state_17819[(11)]);
var inst_17750 = (state_17819[(8)]);
var inst_17802 = cljs.core.async.muxch_STAR_(inst_17800);
var state_17819__$1 = state_17819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17819__$1,(22),inst_17802,inst_17750);
} else {
if((state_val_17820 === (11))){
var inst_17760 = (state_17819[(15)]);
var inst_17774 = (state_17819[(10)]);
var inst_17774__$1 = cljs.core.seq(inst_17760);
var state_17819__$1 = (function (){var statearr_17843 = state_17819;
(statearr_17843[(10)] = inst_17774__$1);

return statearr_17843;
})();
if(inst_17774__$1){
var statearr_17844_17890 = state_17819__$1;
(statearr_17844_17890[(1)] = (13));

} else {
var statearr_17845_17891 = state_17819__$1;
(statearr_17845_17891[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (9))){
var inst_17796 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17846_17892 = state_17819__$1;
(statearr_17846_17892[(2)] = inst_17796);

(statearr_17846_17892[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (5))){
var inst_17757 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17758 = cljs.core.vals(inst_17757);
var inst_17759 = cljs.core.seq(inst_17758);
var inst_17760 = inst_17759;
var inst_17761 = null;
var inst_17762 = (0);
var inst_17763 = (0);
var state_17819__$1 = (function (){var statearr_17847 = state_17819;
(statearr_17847[(12)] = inst_17761);

(statearr_17847[(14)] = inst_17763);

(statearr_17847[(15)] = inst_17760);

(statearr_17847[(16)] = inst_17762);

return statearr_17847;
})();
var statearr_17848_17893 = state_17819__$1;
(statearr_17848_17893[(2)] = null);

(statearr_17848_17893[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (14))){
var state_17819__$1 = state_17819;
var statearr_17852_17894 = state_17819__$1;
(statearr_17852_17894[(2)] = null);

(statearr_17852_17894[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (16))){
var inst_17774 = (state_17819[(10)]);
var inst_17778 = cljs.core.chunk_first(inst_17774);
var inst_17779 = cljs.core.chunk_rest(inst_17774);
var inst_17780 = cljs.core.count(inst_17778);
var inst_17760 = inst_17779;
var inst_17761 = inst_17778;
var inst_17762 = inst_17780;
var inst_17763 = (0);
var state_17819__$1 = (function (){var statearr_17853 = state_17819;
(statearr_17853[(12)] = inst_17761);

(statearr_17853[(14)] = inst_17763);

(statearr_17853[(15)] = inst_17760);

(statearr_17853[(16)] = inst_17762);

return statearr_17853;
})();
var statearr_17854_17895 = state_17819__$1;
(statearr_17854_17895[(2)] = null);

(statearr_17854_17895[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (10))){
var inst_17761 = (state_17819[(12)]);
var inst_17763 = (state_17819[(14)]);
var inst_17760 = (state_17819[(15)]);
var inst_17762 = (state_17819[(16)]);
var inst_17768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17761,inst_17763);
var inst_17769 = cljs.core.async.muxch_STAR_(inst_17768);
var inst_17770 = cljs.core.async.close_BANG_(inst_17769);
var inst_17771 = (inst_17763 + (1));
var tmp17849 = inst_17761;
var tmp17850 = inst_17760;
var tmp17851 = inst_17762;
var inst_17760__$1 = tmp17850;
var inst_17761__$1 = tmp17849;
var inst_17762__$1 = tmp17851;
var inst_17763__$1 = inst_17771;
var state_17819__$1 = (function (){var statearr_17855 = state_17819;
(statearr_17855[(12)] = inst_17761__$1);

(statearr_17855[(14)] = inst_17763__$1);

(statearr_17855[(17)] = inst_17770);

(statearr_17855[(15)] = inst_17760__$1);

(statearr_17855[(16)] = inst_17762__$1);

return statearr_17855;
})();
var statearr_17856_17896 = state_17819__$1;
(statearr_17856_17896[(2)] = null);

(statearr_17856_17896[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (18))){
var inst_17789 = (state_17819[(2)]);
var state_17819__$1 = state_17819;
var statearr_17857_17897 = state_17819__$1;
(statearr_17857_17897[(2)] = inst_17789);

(statearr_17857_17897[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17820 === (8))){
var inst_17763 = (state_17819[(14)]);
var inst_17762 = (state_17819[(16)]);
var inst_17765 = (inst_17763 < inst_17762);
var inst_17766 = inst_17765;
var state_17819__$1 = state_17819;
if(cljs.core.truth_(inst_17766)){
var statearr_17858_17898 = state_17819__$1;
(statearr_17858_17898[(1)] = (10));

} else {
var statearr_17859_17899 = state_17819__$1;
(statearr_17859_17899[(1)] = (11));

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
});})(c__15986__auto___17871,mults,ensure_mult,p))
;
return ((function (switch__15872__auto__,c__15986__auto___17871,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_17863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17863[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_17863[(1)] = (1));

return statearr_17863;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_17819){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_17819);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e17864){if((e17864 instanceof Object)){
var ex__15876__auto__ = e17864;
var statearr_17865_17900 = state_17819;
(statearr_17865_17900[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17819);

return cljs.core.cst$kw$recur;
} else {
throw e17864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__17901 = state_17819;
state_17819 = G__17901;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_17819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_17819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___17871,mults,ensure_mult,p))
})();
var state__15988__auto__ = (function (){var statearr_17866 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_17866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___17871);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___17871,mults,ensure_mult,p))
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
var args17902 = [];
var len__6226__auto___17905 = arguments.length;
var i__6227__auto___17906 = (0);
while(true){
if((i__6227__auto___17906 < len__6226__auto___17905)){
args17902.push((arguments[i__6227__auto___17906]));

var G__17907 = (i__6227__auto___17906 + (1));
i__6227__auto___17906 = G__17907;
continue;
} else {
}
break;
}

var G__17904 = args17902.length;
switch (G__17904) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17902.length)].join('')));

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
var args17909 = [];
var len__6226__auto___17912 = arguments.length;
var i__6227__auto___17913 = (0);
while(true){
if((i__6227__auto___17913 < len__6226__auto___17912)){
args17909.push((arguments[i__6227__auto___17913]));

var G__17914 = (i__6227__auto___17913 + (1));
i__6227__auto___17913 = G__17914;
continue;
} else {
}
break;
}

var G__17911 = args17909.length;
switch (G__17911) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17909.length)].join('')));

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
var args17916 = [];
var len__6226__auto___17987 = arguments.length;
var i__6227__auto___17988 = (0);
while(true){
if((i__6227__auto___17988 < len__6226__auto___17987)){
args17916.push((arguments[i__6227__auto___17988]));

var G__17989 = (i__6227__auto___17988 + (1));
i__6227__auto___17988 = G__17989;
continue;
} else {
}
break;
}

var G__17918 = args17916.length;
switch (G__17918) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17916.length)].join('')));

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
var c__15986__auto___17991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17957){
var state_val_17958 = (state_17957[(1)]);
if((state_val_17958 === (7))){
var state_17957__$1 = state_17957;
var statearr_17959_17992 = state_17957__$1;
(statearr_17959_17992[(2)] = null);

(statearr_17959_17992[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (1))){
var state_17957__$1 = state_17957;
var statearr_17960_17993 = state_17957__$1;
(statearr_17960_17993[(2)] = null);

(statearr_17960_17993[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (4))){
var inst_17921 = (state_17957[(7)]);
var inst_17923 = (inst_17921 < cnt);
var state_17957__$1 = state_17957;
if(cljs.core.truth_(inst_17923)){
var statearr_17961_17994 = state_17957__$1;
(statearr_17961_17994[(1)] = (6));

} else {
var statearr_17962_17995 = state_17957__$1;
(statearr_17962_17995[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (15))){
var inst_17953 = (state_17957[(2)]);
var state_17957__$1 = state_17957;
var statearr_17963_17996 = state_17957__$1;
(statearr_17963_17996[(2)] = inst_17953);

(statearr_17963_17996[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (13))){
var inst_17946 = cljs.core.async.close_BANG_(out);
var state_17957__$1 = state_17957;
var statearr_17964_17997 = state_17957__$1;
(statearr_17964_17997[(2)] = inst_17946);

(statearr_17964_17997[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (6))){
var state_17957__$1 = state_17957;
var statearr_17965_17998 = state_17957__$1;
(statearr_17965_17998[(2)] = null);

(statearr_17965_17998[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (3))){
var inst_17955 = (state_17957[(2)]);
var state_17957__$1 = state_17957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17957__$1,inst_17955);
} else {
if((state_val_17958 === (12))){
var inst_17943 = (state_17957[(8)]);
var inst_17943__$1 = (state_17957[(2)]);
var inst_17944 = cljs.core.some(cljs.core.nil_QMARK_,inst_17943__$1);
var state_17957__$1 = (function (){var statearr_17966 = state_17957;
(statearr_17966[(8)] = inst_17943__$1);

return statearr_17966;
})();
if(cljs.core.truth_(inst_17944)){
var statearr_17967_17999 = state_17957__$1;
(statearr_17967_17999[(1)] = (13));

} else {
var statearr_17968_18000 = state_17957__$1;
(statearr_17968_18000[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (2))){
var inst_17920 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17921 = (0);
var state_17957__$1 = (function (){var statearr_17969 = state_17957;
(statearr_17969[(7)] = inst_17921);

(statearr_17969[(9)] = inst_17920);

return statearr_17969;
})();
var statearr_17970_18001 = state_17957__$1;
(statearr_17970_18001[(2)] = null);

(statearr_17970_18001[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (11))){
var inst_17921 = (state_17957[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17957,(10),Object,null,(9));
var inst_17930 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17921) : chs__$1.call(null,inst_17921));
var inst_17931 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17921) : done.call(null,inst_17921));
var inst_17932 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17930,inst_17931);
var state_17957__$1 = state_17957;
var statearr_17971_18002 = state_17957__$1;
(statearr_17971_18002[(2)] = inst_17932);


cljs.core.async.impl.ioc_helpers.process_exception(state_17957__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (9))){
var inst_17921 = (state_17957[(7)]);
var inst_17934 = (state_17957[(2)]);
var inst_17935 = (inst_17921 + (1));
var inst_17921__$1 = inst_17935;
var state_17957__$1 = (function (){var statearr_17972 = state_17957;
(statearr_17972[(7)] = inst_17921__$1);

(statearr_17972[(10)] = inst_17934);

return statearr_17972;
})();
var statearr_17973_18003 = state_17957__$1;
(statearr_17973_18003[(2)] = null);

(statearr_17973_18003[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (5))){
var inst_17941 = (state_17957[(2)]);
var state_17957__$1 = (function (){var statearr_17974 = state_17957;
(statearr_17974[(11)] = inst_17941);

return statearr_17974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17957__$1,(12),dchan);
} else {
if((state_val_17958 === (14))){
var inst_17943 = (state_17957[(8)]);
var inst_17948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17943);
var state_17957__$1 = state_17957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17957__$1,(16),out,inst_17948);
} else {
if((state_val_17958 === (16))){
var inst_17950 = (state_17957[(2)]);
var state_17957__$1 = (function (){var statearr_17975 = state_17957;
(statearr_17975[(12)] = inst_17950);

return statearr_17975;
})();
var statearr_17976_18004 = state_17957__$1;
(statearr_17976_18004[(2)] = null);

(statearr_17976_18004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (10))){
var inst_17925 = (state_17957[(2)]);
var inst_17926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17957__$1 = (function (){var statearr_17977 = state_17957;
(statearr_17977[(13)] = inst_17925);

return statearr_17977;
})();
var statearr_17978_18005 = state_17957__$1;
(statearr_17978_18005[(2)] = inst_17926);


cljs.core.async.impl.ioc_helpers.process_exception(state_17957__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17958 === (8))){
var inst_17939 = (state_17957[(2)]);
var state_17957__$1 = state_17957;
var statearr_17979_18006 = state_17957__$1;
(statearr_17979_18006[(2)] = inst_17939);

(statearr_17979_18006[(1)] = (5));


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
});})(c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15872__auto__,c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_17983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17983[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_17983[(1)] = (1));

return statearr_17983;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_17957){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_17957);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e17984){if((e17984 instanceof Object)){
var ex__15876__auto__ = e17984;
var statearr_17985_18007 = state_17957;
(statearr_17985_18007[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17957);

return cljs.core.cst$kw$recur;
} else {
throw e17984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18008 = state_17957;
state_17957 = G__18008;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_17957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_17957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15988__auto__ = (function (){var statearr_17986 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_17986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___17991);

return statearr_17986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___17991,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18010 = [];
var len__6226__auto___18066 = arguments.length;
var i__6227__auto___18067 = (0);
while(true){
if((i__6227__auto___18067 < len__6226__auto___18066)){
args18010.push((arguments[i__6227__auto___18067]));

var G__18068 = (i__6227__auto___18067 + (1));
i__6227__auto___18067 = G__18068;
continue;
} else {
}
break;
}

var G__18012 = args18010.length;
switch (G__18012) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18010.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18070,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18070,out){
return (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18022 = (state_18042[(7)]);
var inst_18021 = (state_18042[(8)]);
var inst_18021__$1 = (state_18042[(2)]);
var inst_18022__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18021__$1,(0),null);
var inst_18023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18021__$1,(1),null);
var inst_18024 = (inst_18022__$1 == null);
var state_18042__$1 = (function (){var statearr_18044 = state_18042;
(statearr_18044[(7)] = inst_18022__$1);

(statearr_18044[(9)] = inst_18023);

(statearr_18044[(8)] = inst_18021__$1);

return statearr_18044;
})();
if(cljs.core.truth_(inst_18024)){
var statearr_18045_18071 = state_18042__$1;
(statearr_18045_18071[(1)] = (8));

} else {
var statearr_18046_18072 = state_18042__$1;
(statearr_18046_18072[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (1))){
var inst_18013 = cljs.core.vec(chs);
var inst_18014 = inst_18013;
var state_18042__$1 = (function (){var statearr_18047 = state_18042;
(statearr_18047[(10)] = inst_18014);

return statearr_18047;
})();
var statearr_18048_18073 = state_18042__$1;
(statearr_18048_18073[(2)] = null);

(statearr_18048_18073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (4))){
var inst_18014 = (state_18042[(10)]);
var state_18042__$1 = state_18042;
return cljs.core.async.ioc_alts_BANG_(state_18042__$1,(7),inst_18014);
} else {
if((state_val_18043 === (6))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18049_18074 = state_18042__$1;
(statearr_18049_18074[(2)] = inst_18038);

(statearr_18049_18074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (2))){
var inst_18014 = (state_18042[(10)]);
var inst_18016 = cljs.core.count(inst_18014);
var inst_18017 = (inst_18016 > (0));
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18017)){
var statearr_18051_18075 = state_18042__$1;
(statearr_18051_18075[(1)] = (4));

} else {
var statearr_18052_18076 = state_18042__$1;
(statearr_18052_18076[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (11))){
var inst_18014 = (state_18042[(10)]);
var inst_18031 = (state_18042[(2)]);
var tmp18050 = inst_18014;
var inst_18014__$1 = tmp18050;
var state_18042__$1 = (function (){var statearr_18053 = state_18042;
(statearr_18053[(11)] = inst_18031);

(statearr_18053[(10)] = inst_18014__$1);

return statearr_18053;
})();
var statearr_18054_18077 = state_18042__$1;
(statearr_18054_18077[(2)] = null);

(statearr_18054_18077[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (9))){
var inst_18022 = (state_18042[(7)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18042__$1,(11),out,inst_18022);
} else {
if((state_val_18043 === (5))){
var inst_18036 = cljs.core.async.close_BANG_(out);
var state_18042__$1 = state_18042;
var statearr_18055_18078 = state_18042__$1;
(statearr_18055_18078[(2)] = inst_18036);

(statearr_18055_18078[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (10))){
var inst_18034 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18056_18079 = state_18042__$1;
(statearr_18056_18079[(2)] = inst_18034);

(statearr_18056_18079[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18043 === (8))){
var inst_18022 = (state_18042[(7)]);
var inst_18014 = (state_18042[(10)]);
var inst_18023 = (state_18042[(9)]);
var inst_18021 = (state_18042[(8)]);
var inst_18026 = (function (){var cs = inst_18014;
var vec__18019 = inst_18021;
var v = inst_18022;
var c = inst_18023;
return ((function (cs,vec__18019,v,c,inst_18022,inst_18014,inst_18023,inst_18021,state_val_18043,c__15986__auto___18070,out){
return (function (p1__18009_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18009_SHARP_);
});
;})(cs,vec__18019,v,c,inst_18022,inst_18014,inst_18023,inst_18021,state_val_18043,c__15986__auto___18070,out))
})();
var inst_18027 = cljs.core.filterv(inst_18026,inst_18014);
var inst_18014__$1 = inst_18027;
var state_18042__$1 = (function (){var statearr_18057 = state_18042;
(statearr_18057[(10)] = inst_18014__$1);

return statearr_18057;
})();
var statearr_18058_18080 = state_18042__$1;
(statearr_18058_18080[(2)] = null);

(statearr_18058_18080[(1)] = (2));


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
});})(c__15986__auto___18070,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18070,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18062[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18062[(1)] = (1));

return statearr_18062;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18042){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18042);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18063){if((e18063 instanceof Object)){
var ex__15876__auto__ = e18063;
var statearr_18064_18081 = state_18042;
(statearr_18064_18081[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18042);

return cljs.core.cst$kw$recur;
} else {
throw e18063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18082 = state_18042;
state_18042 = G__18082;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18070,out))
})();
var state__15988__auto__ = (function (){var statearr_18065 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18070);

return statearr_18065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18070,out))
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
var args18083 = [];
var len__6226__auto___18132 = arguments.length;
var i__6227__auto___18133 = (0);
while(true){
if((i__6227__auto___18133 < len__6226__auto___18132)){
args18083.push((arguments[i__6227__auto___18133]));

var G__18134 = (i__6227__auto___18133 + (1));
i__6227__auto___18133 = G__18134;
continue;
} else {
}
break;
}

var G__18085 = args18083.length;
switch (G__18085) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18083.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18136,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18136,out){
return (function (state_18109){
var state_val_18110 = (state_18109[(1)]);
if((state_val_18110 === (7))){
var inst_18091 = (state_18109[(7)]);
var inst_18091__$1 = (state_18109[(2)]);
var inst_18092 = (inst_18091__$1 == null);
var inst_18093 = cljs.core.not(inst_18092);
var state_18109__$1 = (function (){var statearr_18111 = state_18109;
(statearr_18111[(7)] = inst_18091__$1);

return statearr_18111;
})();
if(inst_18093){
var statearr_18112_18137 = state_18109__$1;
(statearr_18112_18137[(1)] = (8));

} else {
var statearr_18113_18138 = state_18109__$1;
(statearr_18113_18138[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (1))){
var inst_18086 = (0);
var state_18109__$1 = (function (){var statearr_18114 = state_18109;
(statearr_18114[(8)] = inst_18086);

return statearr_18114;
})();
var statearr_18115_18139 = state_18109__$1;
(statearr_18115_18139[(2)] = null);

(statearr_18115_18139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (4))){
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18109__$1,(7),ch);
} else {
if((state_val_18110 === (6))){
var inst_18104 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18116_18140 = state_18109__$1;
(statearr_18116_18140[(2)] = inst_18104);

(statearr_18116_18140[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (3))){
var inst_18106 = (state_18109[(2)]);
var inst_18107 = cljs.core.async.close_BANG_(out);
var state_18109__$1 = (function (){var statearr_18117 = state_18109;
(statearr_18117[(9)] = inst_18106);

return statearr_18117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18109__$1,inst_18107);
} else {
if((state_val_18110 === (2))){
var inst_18086 = (state_18109[(8)]);
var inst_18088 = (inst_18086 < n);
var state_18109__$1 = state_18109;
if(cljs.core.truth_(inst_18088)){
var statearr_18118_18141 = state_18109__$1;
(statearr_18118_18141[(1)] = (4));

} else {
var statearr_18119_18142 = state_18109__$1;
(statearr_18119_18142[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (11))){
var inst_18086 = (state_18109[(8)]);
var inst_18096 = (state_18109[(2)]);
var inst_18097 = (inst_18086 + (1));
var inst_18086__$1 = inst_18097;
var state_18109__$1 = (function (){var statearr_18120 = state_18109;
(statearr_18120[(8)] = inst_18086__$1);

(statearr_18120[(10)] = inst_18096);

return statearr_18120;
})();
var statearr_18121_18143 = state_18109__$1;
(statearr_18121_18143[(2)] = null);

(statearr_18121_18143[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (9))){
var state_18109__$1 = state_18109;
var statearr_18122_18144 = state_18109__$1;
(statearr_18122_18144[(2)] = null);

(statearr_18122_18144[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (5))){
var state_18109__$1 = state_18109;
var statearr_18123_18145 = state_18109__$1;
(statearr_18123_18145[(2)] = null);

(statearr_18123_18145[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (10))){
var inst_18101 = (state_18109[(2)]);
var state_18109__$1 = state_18109;
var statearr_18124_18146 = state_18109__$1;
(statearr_18124_18146[(2)] = inst_18101);

(statearr_18124_18146[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18110 === (8))){
var inst_18091 = (state_18109[(7)]);
var state_18109__$1 = state_18109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18109__$1,(11),out,inst_18091);
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
});})(c__15986__auto___18136,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18136,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18128[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18128[(1)] = (1));

return statearr_18128;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18109){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18109);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18129){if((e18129 instanceof Object)){
var ex__15876__auto__ = e18129;
var statearr_18130_18147 = state_18109;
(statearr_18130_18147[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18109);

return cljs.core.cst$kw$recur;
} else {
throw e18129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18148 = state_18109;
state_18109 = G__18148;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18136,out))
})();
var state__15988__auto__ = (function (){var statearr_18131 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18136);

return statearr_18131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18136,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18158 = (function (map_LT_,f,ch,meta18159){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18159 = meta18159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18160,meta18159__$1){
var self__ = this;
var _18160__$1 = this;
return (new cljs.core.async.t_cljs$core$async18158(self__.map_LT_,self__.f,self__.ch,meta18159__$1));
});

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18160){
var self__ = this;
var _18160__$1 = this;
return self__.meta18159;
});

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18161 = (function (map_LT_,f,ch,meta18159,_,fn1,meta18162){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18159 = meta18159;
this._ = _;
this.fn1 = fn1;
this.meta18162 = meta18162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18163,meta18162__$1){
var self__ = this;
var _18163__$1 = this;
return (new cljs.core.async.t_cljs$core$async18161(self__.map_LT_,self__.f,self__.ch,self__.meta18159,self__._,self__.fn1,meta18162__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18163){
var self__ = this;
var _18163__$1 = this;
return self__.meta18162;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18161.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18149_SHARP_){
var G__18164 = (((p1__18149_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18149_SHARP_) : self__.f.call(null,p1__18149_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18164) : f1.call(null,G__18164));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18161.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18159,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18158], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18162], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18161";

cljs.core.async.t_cljs$core$async18161.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async18161");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18161 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18161(map_LT___$1,f__$1,ch__$1,meta18159__$1,___$2,fn1__$1,meta18162){
return (new cljs.core.async.t_cljs$core$async18161(map_LT___$1,f__$1,ch__$1,meta18159__$1,___$2,fn1__$1,meta18162));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18161(self__.map_LT_,self__.f,self__.ch,self__.meta18159,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18165 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18165) : self__.f.call(null,G__18165));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18159], null);
});

cljs.core.async.t_cljs$core$async18158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18158";

cljs.core.async.t_cljs$core$async18158.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async18158");
});

cljs.core.async.__GT_t_cljs$core$async18158 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18158(map_LT___$1,f__$1,ch__$1,meta18159){
return (new cljs.core.async.t_cljs$core$async18158(map_LT___$1,f__$1,ch__$1,meta18159));
});

}

return (new cljs.core.async.t_cljs$core$async18158(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18169 = (function (map_GT_,f,ch,meta18170){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18170 = meta18170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18171,meta18170__$1){
var self__ = this;
var _18171__$1 = this;
return (new cljs.core.async.t_cljs$core$async18169(self__.map_GT_,self__.f,self__.ch,meta18170__$1));
});

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18171){
var self__ = this;
var _18171__$1 = this;
return self__.meta18170;
});

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18170], null);
});

cljs.core.async.t_cljs$core$async18169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18169";

cljs.core.async.t_cljs$core$async18169.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async18169");
});

cljs.core.async.__GT_t_cljs$core$async18169 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18169(map_GT___$1,f__$1,ch__$1,meta18170){
return (new cljs.core.async.t_cljs$core$async18169(map_GT___$1,f__$1,ch__$1,meta18170));
});

}

return (new cljs.core.async.t_cljs$core$async18169(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18175 = (function (filter_GT_,p,ch,meta18176){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18176 = meta18176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18177,meta18176__$1){
var self__ = this;
var _18177__$1 = this;
return (new cljs.core.async.t_cljs$core$async18175(self__.filter_GT_,self__.p,self__.ch,meta18176__$1));
});

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18177){
var self__ = this;
var _18177__$1 = this;
return self__.meta18176;
});

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18176], null);
});

cljs.core.async.t_cljs$core$async18175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18175";

cljs.core.async.t_cljs$core$async18175.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async18175");
});

cljs.core.async.__GT_t_cljs$core$async18175 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18175(filter_GT___$1,p__$1,ch__$1,meta18176){
return (new cljs.core.async.t_cljs$core$async18175(filter_GT___$1,p__$1,ch__$1,meta18176));
});

}

return (new cljs.core.async.t_cljs$core$async18175(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18178 = [];
var len__6226__auto___18222 = arguments.length;
var i__6227__auto___18223 = (0);
while(true){
if((i__6227__auto___18223 < len__6226__auto___18222)){
args18178.push((arguments[i__6227__auto___18223]));

var G__18224 = (i__6227__auto___18223 + (1));
i__6227__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var G__18180 = args18178.length;
switch (G__18180) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18178.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18226,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18226,out){
return (function (state_18201){
var state_val_18202 = (state_18201[(1)]);
if((state_val_18202 === (7))){
var inst_18197 = (state_18201[(2)]);
var state_18201__$1 = state_18201;
var statearr_18203_18227 = state_18201__$1;
(statearr_18203_18227[(2)] = inst_18197);

(statearr_18203_18227[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (1))){
var state_18201__$1 = state_18201;
var statearr_18204_18228 = state_18201__$1;
(statearr_18204_18228[(2)] = null);

(statearr_18204_18228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (4))){
var inst_18183 = (state_18201[(7)]);
var inst_18183__$1 = (state_18201[(2)]);
var inst_18184 = (inst_18183__$1 == null);
var state_18201__$1 = (function (){var statearr_18205 = state_18201;
(statearr_18205[(7)] = inst_18183__$1);

return statearr_18205;
})();
if(cljs.core.truth_(inst_18184)){
var statearr_18206_18229 = state_18201__$1;
(statearr_18206_18229[(1)] = (5));

} else {
var statearr_18207_18230 = state_18201__$1;
(statearr_18207_18230[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (6))){
var inst_18183 = (state_18201[(7)]);
var inst_18188 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18183) : p.call(null,inst_18183));
var state_18201__$1 = state_18201;
if(cljs.core.truth_(inst_18188)){
var statearr_18208_18231 = state_18201__$1;
(statearr_18208_18231[(1)] = (8));

} else {
var statearr_18209_18232 = state_18201__$1;
(statearr_18209_18232[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (3))){
var inst_18199 = (state_18201[(2)]);
var state_18201__$1 = state_18201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18201__$1,inst_18199);
} else {
if((state_val_18202 === (2))){
var state_18201__$1 = state_18201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18201__$1,(4),ch);
} else {
if((state_val_18202 === (11))){
var inst_18191 = (state_18201[(2)]);
var state_18201__$1 = state_18201;
var statearr_18210_18233 = state_18201__$1;
(statearr_18210_18233[(2)] = inst_18191);

(statearr_18210_18233[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (9))){
var state_18201__$1 = state_18201;
var statearr_18211_18234 = state_18201__$1;
(statearr_18211_18234[(2)] = null);

(statearr_18211_18234[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (5))){
var inst_18186 = cljs.core.async.close_BANG_(out);
var state_18201__$1 = state_18201;
var statearr_18212_18235 = state_18201__$1;
(statearr_18212_18235[(2)] = inst_18186);

(statearr_18212_18235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (10))){
var inst_18194 = (state_18201[(2)]);
var state_18201__$1 = (function (){var statearr_18213 = state_18201;
(statearr_18213[(8)] = inst_18194);

return statearr_18213;
})();
var statearr_18214_18236 = state_18201__$1;
(statearr_18214_18236[(2)] = null);

(statearr_18214_18236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18202 === (8))){
var inst_18183 = (state_18201[(7)]);
var state_18201__$1 = state_18201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18201__$1,(11),out,inst_18183);
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
});})(c__15986__auto___18226,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18226,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18218 = [null,null,null,null,null,null,null,null,null];
(statearr_18218[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18218[(1)] = (1));

return statearr_18218;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18201){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18201);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18219){if((e18219 instanceof Object)){
var ex__15876__auto__ = e18219;
var statearr_18220_18237 = state_18201;
(statearr_18220_18237[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18201);

return cljs.core.cst$kw$recur;
} else {
throw e18219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18238 = state_18201;
state_18201 = G__18238;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18226,out))
})();
var state__15988__auto__ = (function (){var statearr_18221 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18226);

return statearr_18221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18226,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18239 = [];
var len__6226__auto___18242 = arguments.length;
var i__6227__auto___18243 = (0);
while(true){
if((i__6227__auto___18243 < len__6226__auto___18242)){
args18239.push((arguments[i__6227__auto___18243]));

var G__18244 = (i__6227__auto___18243 + (1));
i__6227__auto___18243 = G__18244;
continue;
} else {
}
break;
}

var G__18241 = args18239.length;
switch (G__18241) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18239.length)].join('')));

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
var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__){
return (function (state_18411){
var state_val_18412 = (state_18411[(1)]);
if((state_val_18412 === (7))){
var inst_18407 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
var statearr_18413_18454 = state_18411__$1;
(statearr_18413_18454[(2)] = inst_18407);

(statearr_18413_18454[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (20))){
var inst_18377 = (state_18411[(7)]);
var inst_18388 = (state_18411[(2)]);
var inst_18389 = cljs.core.next(inst_18377);
var inst_18363 = inst_18389;
var inst_18364 = null;
var inst_18365 = (0);
var inst_18366 = (0);
var state_18411__$1 = (function (){var statearr_18414 = state_18411;
(statearr_18414[(8)] = inst_18364);

(statearr_18414[(9)] = inst_18365);

(statearr_18414[(10)] = inst_18363);

(statearr_18414[(11)] = inst_18388);

(statearr_18414[(12)] = inst_18366);

return statearr_18414;
})();
var statearr_18415_18455 = state_18411__$1;
(statearr_18415_18455[(2)] = null);

(statearr_18415_18455[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (1))){
var state_18411__$1 = state_18411;
var statearr_18416_18456 = state_18411__$1;
(statearr_18416_18456[(2)] = null);

(statearr_18416_18456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (4))){
var inst_18352 = (state_18411[(13)]);
var inst_18352__$1 = (state_18411[(2)]);
var inst_18353 = (inst_18352__$1 == null);
var state_18411__$1 = (function (){var statearr_18417 = state_18411;
(statearr_18417[(13)] = inst_18352__$1);

return statearr_18417;
})();
if(cljs.core.truth_(inst_18353)){
var statearr_18418_18457 = state_18411__$1;
(statearr_18418_18457[(1)] = (5));

} else {
var statearr_18419_18458 = state_18411__$1;
(statearr_18419_18458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (15))){
var state_18411__$1 = state_18411;
var statearr_18423_18459 = state_18411__$1;
(statearr_18423_18459[(2)] = null);

(statearr_18423_18459[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (21))){
var state_18411__$1 = state_18411;
var statearr_18424_18460 = state_18411__$1;
(statearr_18424_18460[(2)] = null);

(statearr_18424_18460[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (13))){
var inst_18364 = (state_18411[(8)]);
var inst_18365 = (state_18411[(9)]);
var inst_18363 = (state_18411[(10)]);
var inst_18366 = (state_18411[(12)]);
var inst_18373 = (state_18411[(2)]);
var inst_18374 = (inst_18366 + (1));
var tmp18420 = inst_18364;
var tmp18421 = inst_18365;
var tmp18422 = inst_18363;
var inst_18363__$1 = tmp18422;
var inst_18364__$1 = tmp18420;
var inst_18365__$1 = tmp18421;
var inst_18366__$1 = inst_18374;
var state_18411__$1 = (function (){var statearr_18425 = state_18411;
(statearr_18425[(8)] = inst_18364__$1);

(statearr_18425[(9)] = inst_18365__$1);

(statearr_18425[(10)] = inst_18363__$1);

(statearr_18425[(14)] = inst_18373);

(statearr_18425[(12)] = inst_18366__$1);

return statearr_18425;
})();
var statearr_18426_18461 = state_18411__$1;
(statearr_18426_18461[(2)] = null);

(statearr_18426_18461[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (22))){
var state_18411__$1 = state_18411;
var statearr_18427_18462 = state_18411__$1;
(statearr_18427_18462[(2)] = null);

(statearr_18427_18462[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (6))){
var inst_18352 = (state_18411[(13)]);
var inst_18361 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18352) : f.call(null,inst_18352));
var inst_18362 = cljs.core.seq(inst_18361);
var inst_18363 = inst_18362;
var inst_18364 = null;
var inst_18365 = (0);
var inst_18366 = (0);
var state_18411__$1 = (function (){var statearr_18428 = state_18411;
(statearr_18428[(8)] = inst_18364);

(statearr_18428[(9)] = inst_18365);

(statearr_18428[(10)] = inst_18363);

(statearr_18428[(12)] = inst_18366);

return statearr_18428;
})();
var statearr_18429_18463 = state_18411__$1;
(statearr_18429_18463[(2)] = null);

(statearr_18429_18463[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (17))){
var inst_18377 = (state_18411[(7)]);
var inst_18381 = cljs.core.chunk_first(inst_18377);
var inst_18382 = cljs.core.chunk_rest(inst_18377);
var inst_18383 = cljs.core.count(inst_18381);
var inst_18363 = inst_18382;
var inst_18364 = inst_18381;
var inst_18365 = inst_18383;
var inst_18366 = (0);
var state_18411__$1 = (function (){var statearr_18430 = state_18411;
(statearr_18430[(8)] = inst_18364);

(statearr_18430[(9)] = inst_18365);

(statearr_18430[(10)] = inst_18363);

(statearr_18430[(12)] = inst_18366);

return statearr_18430;
})();
var statearr_18431_18464 = state_18411__$1;
(statearr_18431_18464[(2)] = null);

(statearr_18431_18464[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (3))){
var inst_18409 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18411__$1,inst_18409);
} else {
if((state_val_18412 === (12))){
var inst_18397 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
var statearr_18432_18465 = state_18411__$1;
(statearr_18432_18465[(2)] = inst_18397);

(statearr_18432_18465[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (2))){
var state_18411__$1 = state_18411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18411__$1,(4),in$);
} else {
if((state_val_18412 === (23))){
var inst_18405 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
var statearr_18433_18466 = state_18411__$1;
(statearr_18433_18466[(2)] = inst_18405);

(statearr_18433_18466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (19))){
var inst_18392 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
var statearr_18434_18467 = state_18411__$1;
(statearr_18434_18467[(2)] = inst_18392);

(statearr_18434_18467[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (11))){
var inst_18363 = (state_18411[(10)]);
var inst_18377 = (state_18411[(7)]);
var inst_18377__$1 = cljs.core.seq(inst_18363);
var state_18411__$1 = (function (){var statearr_18435 = state_18411;
(statearr_18435[(7)] = inst_18377__$1);

return statearr_18435;
})();
if(inst_18377__$1){
var statearr_18436_18468 = state_18411__$1;
(statearr_18436_18468[(1)] = (14));

} else {
var statearr_18437_18469 = state_18411__$1;
(statearr_18437_18469[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (9))){
var inst_18399 = (state_18411[(2)]);
var inst_18400 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18411__$1 = (function (){var statearr_18438 = state_18411;
(statearr_18438[(15)] = inst_18399);

return statearr_18438;
})();
if(cljs.core.truth_(inst_18400)){
var statearr_18439_18470 = state_18411__$1;
(statearr_18439_18470[(1)] = (21));

} else {
var statearr_18440_18471 = state_18411__$1;
(statearr_18440_18471[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (5))){
var inst_18355 = cljs.core.async.close_BANG_(out);
var state_18411__$1 = state_18411;
var statearr_18441_18472 = state_18411__$1;
(statearr_18441_18472[(2)] = inst_18355);

(statearr_18441_18472[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (14))){
var inst_18377 = (state_18411[(7)]);
var inst_18379 = cljs.core.chunked_seq_QMARK_(inst_18377);
var state_18411__$1 = state_18411;
if(inst_18379){
var statearr_18442_18473 = state_18411__$1;
(statearr_18442_18473[(1)] = (17));

} else {
var statearr_18443_18474 = state_18411__$1;
(statearr_18443_18474[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (16))){
var inst_18395 = (state_18411[(2)]);
var state_18411__$1 = state_18411;
var statearr_18444_18475 = state_18411__$1;
(statearr_18444_18475[(2)] = inst_18395);

(statearr_18444_18475[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18412 === (10))){
var inst_18364 = (state_18411[(8)]);
var inst_18366 = (state_18411[(12)]);
var inst_18371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18364,inst_18366);
var state_18411__$1 = state_18411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18411__$1,(13),out,inst_18371);
} else {
if((state_val_18412 === (18))){
var inst_18377 = (state_18411[(7)]);
var inst_18386 = cljs.core.first(inst_18377);
var state_18411__$1 = state_18411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18411__$1,(20),out,inst_18386);
} else {
if((state_val_18412 === (8))){
var inst_18365 = (state_18411[(9)]);
var inst_18366 = (state_18411[(12)]);
var inst_18368 = (inst_18366 < inst_18365);
var inst_18369 = inst_18368;
var state_18411__$1 = state_18411;
if(cljs.core.truth_(inst_18369)){
var statearr_18445_18476 = state_18411__$1;
(statearr_18445_18476[(1)] = (10));

} else {
var statearr_18446_18477 = state_18411__$1;
(statearr_18446_18477[(1)] = (11));

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
});})(c__15986__auto__))
;
return ((function (switch__15872__auto__,c__15986__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____0 = (function (){
var statearr_18450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18450[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__);

(statearr_18450[(1)] = (1));

return statearr_18450;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____1 = (function (state_18411){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18411);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18451){if((e18451 instanceof Object)){
var ex__15876__auto__ = e18451;
var statearr_18452_18478 = state_18411;
(statearr_18452_18478[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18411);

return cljs.core.cst$kw$recur;
} else {
throw e18451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18479 = state_18411;
state_18411 = G__18479;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__ = function(state_18411){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____1.call(this,state_18411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__))
})();
var state__15988__auto__ = (function (){var statearr_18453 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_18453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__))
);

return c__15986__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18480 = [];
var len__6226__auto___18483 = arguments.length;
var i__6227__auto___18484 = (0);
while(true){
if((i__6227__auto___18484 < len__6226__auto___18483)){
args18480.push((arguments[i__6227__auto___18484]));

var G__18485 = (i__6227__auto___18484 + (1));
i__6227__auto___18484 = G__18485;
continue;
} else {
}
break;
}

var G__18482 = args18480.length;
switch (G__18482) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18480.length)].join('')));

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
var args18487 = [];
var len__6226__auto___18490 = arguments.length;
var i__6227__auto___18491 = (0);
while(true){
if((i__6227__auto___18491 < len__6226__auto___18490)){
args18487.push((arguments[i__6227__auto___18491]));

var G__18492 = (i__6227__auto___18491 + (1));
i__6227__auto___18491 = G__18492;
continue;
} else {
}
break;
}

var G__18489 = args18487.length;
switch (G__18489) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18487.length)].join('')));

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
var args18494 = [];
var len__6226__auto___18545 = arguments.length;
var i__6227__auto___18546 = (0);
while(true){
if((i__6227__auto___18546 < len__6226__auto___18545)){
args18494.push((arguments[i__6227__auto___18546]));

var G__18547 = (i__6227__auto___18546 + (1));
i__6227__auto___18546 = G__18547;
continue;
} else {
}
break;
}

var G__18496 = args18494.length;
switch (G__18496) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18494.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18549,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18549,out){
return (function (state_18520){
var state_val_18521 = (state_18520[(1)]);
if((state_val_18521 === (7))){
var inst_18515 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18522_18550 = state_18520__$1;
(statearr_18522_18550[(2)] = inst_18515);

(statearr_18522_18550[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (1))){
var inst_18497 = null;
var state_18520__$1 = (function (){var statearr_18523 = state_18520;
(statearr_18523[(7)] = inst_18497);

return statearr_18523;
})();
var statearr_18524_18551 = state_18520__$1;
(statearr_18524_18551[(2)] = null);

(statearr_18524_18551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (4))){
var inst_18500 = (state_18520[(8)]);
var inst_18500__$1 = (state_18520[(2)]);
var inst_18501 = (inst_18500__$1 == null);
var inst_18502 = cljs.core.not(inst_18501);
var state_18520__$1 = (function (){var statearr_18525 = state_18520;
(statearr_18525[(8)] = inst_18500__$1);

return statearr_18525;
})();
if(inst_18502){
var statearr_18526_18552 = state_18520__$1;
(statearr_18526_18552[(1)] = (5));

} else {
var statearr_18527_18553 = state_18520__$1;
(statearr_18527_18553[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (6))){
var state_18520__$1 = state_18520;
var statearr_18528_18554 = state_18520__$1;
(statearr_18528_18554[(2)] = null);

(statearr_18528_18554[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (3))){
var inst_18517 = (state_18520[(2)]);
var inst_18518 = cljs.core.async.close_BANG_(out);
var state_18520__$1 = (function (){var statearr_18529 = state_18520;
(statearr_18529[(9)] = inst_18517);

return statearr_18529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18520__$1,inst_18518);
} else {
if((state_val_18521 === (2))){
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18520__$1,(4),ch);
} else {
if((state_val_18521 === (11))){
var inst_18500 = (state_18520[(8)]);
var inst_18509 = (state_18520[(2)]);
var inst_18497 = inst_18500;
var state_18520__$1 = (function (){var statearr_18530 = state_18520;
(statearr_18530[(10)] = inst_18509);

(statearr_18530[(7)] = inst_18497);

return statearr_18530;
})();
var statearr_18531_18555 = state_18520__$1;
(statearr_18531_18555[(2)] = null);

(statearr_18531_18555[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (9))){
var inst_18500 = (state_18520[(8)]);
var state_18520__$1 = state_18520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18520__$1,(11),out,inst_18500);
} else {
if((state_val_18521 === (5))){
var inst_18500 = (state_18520[(8)]);
var inst_18497 = (state_18520[(7)]);
var inst_18504 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18500,inst_18497);
var state_18520__$1 = state_18520;
if(inst_18504){
var statearr_18533_18556 = state_18520__$1;
(statearr_18533_18556[(1)] = (8));

} else {
var statearr_18534_18557 = state_18520__$1;
(statearr_18534_18557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (10))){
var inst_18512 = (state_18520[(2)]);
var state_18520__$1 = state_18520;
var statearr_18535_18558 = state_18520__$1;
(statearr_18535_18558[(2)] = inst_18512);

(statearr_18535_18558[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18521 === (8))){
var inst_18497 = (state_18520[(7)]);
var tmp18532 = inst_18497;
var inst_18497__$1 = tmp18532;
var state_18520__$1 = (function (){var statearr_18536 = state_18520;
(statearr_18536[(7)] = inst_18497__$1);

return statearr_18536;
})();
var statearr_18537_18559 = state_18520__$1;
(statearr_18537_18559[(2)] = null);

(statearr_18537_18559[(1)] = (2));


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
});})(c__15986__auto___18549,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18549,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18541[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18541[(1)] = (1));

return statearr_18541;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18520){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18520);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18542){if((e18542 instanceof Object)){
var ex__15876__auto__ = e18542;
var statearr_18543_18560 = state_18520;
(statearr_18543_18560[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18520);

return cljs.core.cst$kw$recur;
} else {
throw e18542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18561 = state_18520;
state_18520 = G__18561;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18549,out))
})();
var state__15988__auto__ = (function (){var statearr_18544 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18549);

return statearr_18544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18549,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18562 = [];
var len__6226__auto___18632 = arguments.length;
var i__6227__auto___18633 = (0);
while(true){
if((i__6227__auto___18633 < len__6226__auto___18632)){
args18562.push((arguments[i__6227__auto___18633]));

var G__18634 = (i__6227__auto___18633 + (1));
i__6227__auto___18633 = G__18634;
continue;
} else {
}
break;
}

var G__18564 = args18562.length;
switch (G__18564) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18562.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18636,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18636,out){
return (function (state_18602){
var state_val_18603 = (state_18602[(1)]);
if((state_val_18603 === (7))){
var inst_18598 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18604_18637 = state_18602__$1;
(statearr_18604_18637[(2)] = inst_18598);

(statearr_18604_18637[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (1))){
var inst_18565 = (new Array(n));
var inst_18566 = inst_18565;
var inst_18567 = (0);
var state_18602__$1 = (function (){var statearr_18605 = state_18602;
(statearr_18605[(7)] = inst_18566);

(statearr_18605[(8)] = inst_18567);

return statearr_18605;
})();
var statearr_18606_18638 = state_18602__$1;
(statearr_18606_18638[(2)] = null);

(statearr_18606_18638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (4))){
var inst_18570 = (state_18602[(9)]);
var inst_18570__$1 = (state_18602[(2)]);
var inst_18571 = (inst_18570__$1 == null);
var inst_18572 = cljs.core.not(inst_18571);
var state_18602__$1 = (function (){var statearr_18607 = state_18602;
(statearr_18607[(9)] = inst_18570__$1);

return statearr_18607;
})();
if(inst_18572){
var statearr_18608_18639 = state_18602__$1;
(statearr_18608_18639[(1)] = (5));

} else {
var statearr_18609_18640 = state_18602__$1;
(statearr_18609_18640[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (15))){
var inst_18592 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18610_18641 = state_18602__$1;
(statearr_18610_18641[(2)] = inst_18592);

(statearr_18610_18641[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (13))){
var state_18602__$1 = state_18602;
var statearr_18611_18642 = state_18602__$1;
(statearr_18611_18642[(2)] = null);

(statearr_18611_18642[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (6))){
var inst_18567 = (state_18602[(8)]);
var inst_18588 = (inst_18567 > (0));
var state_18602__$1 = state_18602;
if(cljs.core.truth_(inst_18588)){
var statearr_18612_18643 = state_18602__$1;
(statearr_18612_18643[(1)] = (12));

} else {
var statearr_18613_18644 = state_18602__$1;
(statearr_18613_18644[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (3))){
var inst_18600 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18602__$1,inst_18600);
} else {
if((state_val_18603 === (12))){
var inst_18566 = (state_18602[(7)]);
var inst_18590 = cljs.core.vec(inst_18566);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(15),out,inst_18590);
} else {
if((state_val_18603 === (2))){
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18602__$1,(4),ch);
} else {
if((state_val_18603 === (11))){
var inst_18582 = (state_18602[(2)]);
var inst_18583 = (new Array(n));
var inst_18566 = inst_18583;
var inst_18567 = (0);
var state_18602__$1 = (function (){var statearr_18614 = state_18602;
(statearr_18614[(7)] = inst_18566);

(statearr_18614[(8)] = inst_18567);

(statearr_18614[(10)] = inst_18582);

return statearr_18614;
})();
var statearr_18615_18645 = state_18602__$1;
(statearr_18615_18645[(2)] = null);

(statearr_18615_18645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (9))){
var inst_18566 = (state_18602[(7)]);
var inst_18580 = cljs.core.vec(inst_18566);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(11),out,inst_18580);
} else {
if((state_val_18603 === (5))){
var inst_18566 = (state_18602[(7)]);
var inst_18567 = (state_18602[(8)]);
var inst_18570 = (state_18602[(9)]);
var inst_18575 = (state_18602[(11)]);
var inst_18574 = (inst_18566[inst_18567] = inst_18570);
var inst_18575__$1 = (inst_18567 + (1));
var inst_18576 = (inst_18575__$1 < n);
var state_18602__$1 = (function (){var statearr_18616 = state_18602;
(statearr_18616[(11)] = inst_18575__$1);

(statearr_18616[(12)] = inst_18574);

return statearr_18616;
})();
if(cljs.core.truth_(inst_18576)){
var statearr_18617_18646 = state_18602__$1;
(statearr_18617_18646[(1)] = (8));

} else {
var statearr_18618_18647 = state_18602__$1;
(statearr_18618_18647[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (14))){
var inst_18595 = (state_18602[(2)]);
var inst_18596 = cljs.core.async.close_BANG_(out);
var state_18602__$1 = (function (){var statearr_18620 = state_18602;
(statearr_18620[(13)] = inst_18595);

return statearr_18620;
})();
var statearr_18621_18648 = state_18602__$1;
(statearr_18621_18648[(2)] = inst_18596);

(statearr_18621_18648[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (10))){
var inst_18586 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18622_18649 = state_18602__$1;
(statearr_18622_18649[(2)] = inst_18586);

(statearr_18622_18649[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (8))){
var inst_18566 = (state_18602[(7)]);
var inst_18575 = (state_18602[(11)]);
var tmp18619 = inst_18566;
var inst_18566__$1 = tmp18619;
var inst_18567 = inst_18575;
var state_18602__$1 = (function (){var statearr_18623 = state_18602;
(statearr_18623[(7)] = inst_18566__$1);

(statearr_18623[(8)] = inst_18567);

return statearr_18623;
})();
var statearr_18624_18650 = state_18602__$1;
(statearr_18624_18650[(2)] = null);

(statearr_18624_18650[(1)] = (2));


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
});})(c__15986__auto___18636,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18636,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18628[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18628[(1)] = (1));

return statearr_18628;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18602){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18602);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18629){if((e18629 instanceof Object)){
var ex__15876__auto__ = e18629;
var statearr_18630_18651 = state_18602;
(statearr_18630_18651[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18602);

return cljs.core.cst$kw$recur;
} else {
throw e18629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18652 = state_18602;
state_18602 = G__18652;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18636,out))
})();
var state__15988__auto__ = (function (){var statearr_18631 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18636);

return statearr_18631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18636,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18653 = [];
var len__6226__auto___18727 = arguments.length;
var i__6227__auto___18728 = (0);
while(true){
if((i__6227__auto___18728 < len__6226__auto___18727)){
args18653.push((arguments[i__6227__auto___18728]));

var G__18729 = (i__6227__auto___18728 + (1));
i__6227__auto___18728 = G__18729;
continue;
} else {
}
break;
}

var G__18655 = args18653.length;
switch (G__18655) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18653.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15986__auto___18731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto___18731,out){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto___18731,out){
return (function (state_18697){
var state_val_18698 = (state_18697[(1)]);
if((state_val_18698 === (7))){
var inst_18693 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18699_18732 = state_18697__$1;
(statearr_18699_18732[(2)] = inst_18693);

(statearr_18699_18732[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (1))){
var inst_18656 = [];
var inst_18657 = inst_18656;
var inst_18658 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18697__$1 = (function (){var statearr_18700 = state_18697;
(statearr_18700[(7)] = inst_18658);

(statearr_18700[(8)] = inst_18657);

return statearr_18700;
})();
var statearr_18701_18733 = state_18697__$1;
(statearr_18701_18733[(2)] = null);

(statearr_18701_18733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (4))){
var inst_18661 = (state_18697[(9)]);
var inst_18661__$1 = (state_18697[(2)]);
var inst_18662 = (inst_18661__$1 == null);
var inst_18663 = cljs.core.not(inst_18662);
var state_18697__$1 = (function (){var statearr_18702 = state_18697;
(statearr_18702[(9)] = inst_18661__$1);

return statearr_18702;
})();
if(inst_18663){
var statearr_18703_18734 = state_18697__$1;
(statearr_18703_18734[(1)] = (5));

} else {
var statearr_18704_18735 = state_18697__$1;
(statearr_18704_18735[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (15))){
var inst_18687 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18705_18736 = state_18697__$1;
(statearr_18705_18736[(2)] = inst_18687);

(statearr_18705_18736[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (13))){
var state_18697__$1 = state_18697;
var statearr_18706_18737 = state_18697__$1;
(statearr_18706_18737[(2)] = null);

(statearr_18706_18737[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (6))){
var inst_18657 = (state_18697[(8)]);
var inst_18682 = inst_18657.length;
var inst_18683 = (inst_18682 > (0));
var state_18697__$1 = state_18697;
if(cljs.core.truth_(inst_18683)){
var statearr_18707_18738 = state_18697__$1;
(statearr_18707_18738[(1)] = (12));

} else {
var statearr_18708_18739 = state_18697__$1;
(statearr_18708_18739[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (3))){
var inst_18695 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18697__$1,inst_18695);
} else {
if((state_val_18698 === (12))){
var inst_18657 = (state_18697[(8)]);
var inst_18685 = cljs.core.vec(inst_18657);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18697__$1,(15),out,inst_18685);
} else {
if((state_val_18698 === (2))){
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18697__$1,(4),ch);
} else {
if((state_val_18698 === (11))){
var inst_18661 = (state_18697[(9)]);
var inst_18665 = (state_18697[(10)]);
var inst_18675 = (state_18697[(2)]);
var inst_18676 = [];
var inst_18677 = inst_18676.push(inst_18661);
var inst_18657 = inst_18676;
var inst_18658 = inst_18665;
var state_18697__$1 = (function (){var statearr_18709 = state_18697;
(statearr_18709[(11)] = inst_18677);

(statearr_18709[(7)] = inst_18658);

(statearr_18709[(8)] = inst_18657);

(statearr_18709[(12)] = inst_18675);

return statearr_18709;
})();
var statearr_18710_18740 = state_18697__$1;
(statearr_18710_18740[(2)] = null);

(statearr_18710_18740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (9))){
var inst_18657 = (state_18697[(8)]);
var inst_18673 = cljs.core.vec(inst_18657);
var state_18697__$1 = state_18697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18697__$1,(11),out,inst_18673);
} else {
if((state_val_18698 === (5))){
var inst_18658 = (state_18697[(7)]);
var inst_18661 = (state_18697[(9)]);
var inst_18665 = (state_18697[(10)]);
var inst_18665__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18661) : f.call(null,inst_18661));
var inst_18666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18665__$1,inst_18658);
var inst_18667 = cljs.core.keyword_identical_QMARK_(inst_18658,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18668 = (inst_18666) || (inst_18667);
var state_18697__$1 = (function (){var statearr_18711 = state_18697;
(statearr_18711[(10)] = inst_18665__$1);

return statearr_18711;
})();
if(cljs.core.truth_(inst_18668)){
var statearr_18712_18741 = state_18697__$1;
(statearr_18712_18741[(1)] = (8));

} else {
var statearr_18713_18742 = state_18697__$1;
(statearr_18713_18742[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (14))){
var inst_18690 = (state_18697[(2)]);
var inst_18691 = cljs.core.async.close_BANG_(out);
var state_18697__$1 = (function (){var statearr_18715 = state_18697;
(statearr_18715[(13)] = inst_18690);

return statearr_18715;
})();
var statearr_18716_18743 = state_18697__$1;
(statearr_18716_18743[(2)] = inst_18691);

(statearr_18716_18743[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (10))){
var inst_18680 = (state_18697[(2)]);
var state_18697__$1 = state_18697;
var statearr_18717_18744 = state_18697__$1;
(statearr_18717_18744[(2)] = inst_18680);

(statearr_18717_18744[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18698 === (8))){
var inst_18657 = (state_18697[(8)]);
var inst_18661 = (state_18697[(9)]);
var inst_18665 = (state_18697[(10)]);
var inst_18670 = inst_18657.push(inst_18661);
var tmp18714 = inst_18657;
var inst_18657__$1 = tmp18714;
var inst_18658 = inst_18665;
var state_18697__$1 = (function (){var statearr_18718 = state_18697;
(statearr_18718[(7)] = inst_18658);

(statearr_18718[(8)] = inst_18657__$1);

(statearr_18718[(14)] = inst_18670);

return statearr_18718;
})();
var statearr_18719_18745 = state_18697__$1;
(statearr_18719_18745[(2)] = null);

(statearr_18719_18745[(1)] = (2));


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
});})(c__15986__auto___18731,out))
;
return ((function (switch__15872__auto__,c__15986__auto___18731,out){
return (function() {
var cljs$core$async$state_machine__15873__auto__ = null;
var cljs$core$async$state_machine__15873__auto____0 = (function (){
var statearr_18723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18723[(0)] = cljs$core$async$state_machine__15873__auto__);

(statearr_18723[(1)] = (1));

return statearr_18723;
});
var cljs$core$async$state_machine__15873__auto____1 = (function (state_18697){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_18697);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e18724){if((e18724 instanceof Object)){
var ex__15876__auto__ = e18724;
var statearr_18725_18746 = state_18697;
(statearr_18725_18746[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18697);

return cljs.core.cst$kw$recur;
} else {
throw e18724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__18747 = state_18697;
state_18697 = G__18747;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
cljs$core$async$state_machine__15873__auto__ = function(state_18697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15873__auto____1.call(this,state_18697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15873__auto____0;
cljs$core$async$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15873__auto____1;
return cljs$core$async$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto___18731,out))
})();
var state__15988__auto__ = (function (){var statearr_18726 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_18726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto___18731);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto___18731,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
