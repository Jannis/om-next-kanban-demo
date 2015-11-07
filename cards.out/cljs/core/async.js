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
if(typeof cljs.core.async.t_cljs$core$async11247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11247 = (function (fn_handler,f,meta11248){
this.fn_handler = fn_handler;
this.f = f;
this.meta11248 = meta11248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11249,meta11248__$1){
var self__ = this;
var _11249__$1 = this;
return (new cljs.core.async.t_cljs$core$async11247(self__.fn_handler,self__.f,meta11248__$1));
});

cljs.core.async.t_cljs$core$async11247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11249){
var self__ = this;
var _11249__$1 = this;
return self__.meta11248;
});

cljs.core.async.t_cljs$core$async11247.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11248","meta11248",-833327089,null)], null);
});

cljs.core.async.t_cljs$core$async11247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11247";

cljs.core.async.t_cljs$core$async11247.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11247");
});

cljs.core.async.__GT_t_cljs$core$async11247 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11247(fn_handler__$1,f__$1,meta11248){
return (new cljs.core.async.t_cljs$core$async11247(fn_handler__$1,f__$1,meta11248));
});

}

return (new cljs.core.async.t_cljs$core$async11247(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args11252 = [];
var len__6226__auto___11255 = arguments.length;
var i__6227__auto___11256 = (0);
while(true){
if((i__6227__auto___11256 < len__6226__auto___11255)){
args11252.push((arguments[i__6227__auto___11256]));

var G__11257 = (i__6227__auto___11256 + (1));
i__6227__auto___11256 = G__11257;
continue;
} else {
}
break;
}

var G__11254 = args11252.length;
switch (G__11254) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11252.length)].join('')));

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
var args11259 = [];
var len__6226__auto___11262 = arguments.length;
var i__6227__auto___11263 = (0);
while(true){
if((i__6227__auto___11263 < len__6226__auto___11262)){
args11259.push((arguments[i__6227__auto___11263]));

var G__11264 = (i__6227__auto___11263 + (1));
i__6227__auto___11263 = G__11264;
continue;
} else {
}
break;
}

var G__11261 = args11259.length;
switch (G__11261) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11259.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11266 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11266);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11266,ret){
return (function (){
return fn1.call(null,val_11266);
});})(val_11266,ret))
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
var args11267 = [];
var len__6226__auto___11270 = arguments.length;
var i__6227__auto___11271 = (0);
while(true){
if((i__6227__auto___11271 < len__6226__auto___11270)){
args11267.push((arguments[i__6227__auto___11271]));

var G__11272 = (i__6227__auto___11271 + (1));
i__6227__auto___11271 = G__11272;
continue;
} else {
}
break;
}

var G__11269 = args11267.length;
switch (G__11269) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11267.length)].join('')));

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
var n__6071__auto___11274 = n;
var x_11275 = (0);
while(true){
if((x_11275 < n__6071__auto___11274)){
(a[x_11275] = (0));

var G__11276 = (x_11275 + (1));
x_11275 = G__11276;
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

var G__11277 = (i + (1));
i = G__11277;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11281 = (function (alt_flag,flag,meta11282){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11282 = meta11282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11283,meta11282__$1){
var self__ = this;
var _11283__$1 = this;
return (new cljs.core.async.t_cljs$core$async11281(self__.alt_flag,self__.flag,meta11282__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11283){
var self__ = this;
var _11283__$1 = this;
return self__.meta11282;
});})(flag))
;

cljs.core.async.t_cljs$core$async11281.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11281.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11282","meta11282",-808788400,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11281";

cljs.core.async.t_cljs$core$async11281.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11281");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11281 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11281(alt_flag__$1,flag__$1,meta11282){
return (new cljs.core.async.t_cljs$core$async11281(alt_flag__$1,flag__$1,meta11282));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11281(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11287 = (function (alt_handler,flag,cb,meta11288){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11288 = meta11288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11289,meta11288__$1){
var self__ = this;
var _11289__$1 = this;
return (new cljs.core.async.t_cljs$core$async11287(self__.alt_handler,self__.flag,self__.cb,meta11288__$1));
});

cljs.core.async.t_cljs$core$async11287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11289){
var self__ = this;
var _11289__$1 = this;
return self__.meta11288;
});

cljs.core.async.t_cljs$core$async11287.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11288","meta11288",1442300102,null)], null);
});

cljs.core.async.t_cljs$core$async11287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11287";

cljs.core.async.t_cljs$core$async11287.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async11287");
});

cljs.core.async.__GT_t_cljs$core$async11287 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11287(alt_handler__$1,flag__$1,cb__$1,meta11288){
return (new cljs.core.async.t_cljs$core$async11287(alt_handler__$1,flag__$1,cb__$1,meta11288));
});

}

return (new cljs.core.async.t_cljs$core$async11287(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11290_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11291_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11291_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11292 = (i + (1));
i = G__11292;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5156__auto__;
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
var args__6233__auto__ = [];
var len__6226__auto___11298 = arguments.length;
var i__6227__auto___11299 = (0);
while(true){
if((i__6227__auto___11299 < len__6226__auto___11298)){
args__6233__auto__.push((arguments[i__6227__auto___11299]));

var G__11300 = (i__6227__auto___11299 + (1));
i__6227__auto___11299 = G__11300;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11295){
var map__11296 = p__11295;
var map__11296__$1 = ((((!((map__11296 == null)))?((((map__11296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11296):map__11296);
var opts = map__11296__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11293){
var G__11294 = cljs.core.first.call(null,seq11293);
var seq11293__$1 = cljs.core.next.call(null,seq11293);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11294,seq11293__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11301 = [];
var len__6226__auto___11351 = arguments.length;
var i__6227__auto___11352 = (0);
while(true){
if((i__6227__auto___11352 < len__6226__auto___11351)){
args11301.push((arguments[i__6227__auto___11352]));

var G__11353 = (i__6227__auto___11352 + (1));
i__6227__auto___11352 = G__11353;
continue;
} else {
}
break;
}

var G__11303 = args11301.length;
switch (G__11303) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11301.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11199__auto___11355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___11355){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___11355){
return (function (state_11327){
var state_val_11328 = (state_11327[(1)]);
if((state_val_11328 === (7))){
var inst_11323 = (state_11327[(2)]);
var state_11327__$1 = state_11327;
var statearr_11329_11356 = state_11327__$1;
(statearr_11329_11356[(2)] = inst_11323);

(statearr_11329_11356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (1))){
var state_11327__$1 = state_11327;
var statearr_11330_11357 = state_11327__$1;
(statearr_11330_11357[(2)] = null);

(statearr_11330_11357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (4))){
var inst_11306 = (state_11327[(7)]);
var inst_11306__$1 = (state_11327[(2)]);
var inst_11307 = (inst_11306__$1 == null);
var state_11327__$1 = (function (){var statearr_11331 = state_11327;
(statearr_11331[(7)] = inst_11306__$1);

return statearr_11331;
})();
if(cljs.core.truth_(inst_11307)){
var statearr_11332_11358 = state_11327__$1;
(statearr_11332_11358[(1)] = (5));

} else {
var statearr_11333_11359 = state_11327__$1;
(statearr_11333_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (13))){
var state_11327__$1 = state_11327;
var statearr_11334_11360 = state_11327__$1;
(statearr_11334_11360[(2)] = null);

(statearr_11334_11360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (6))){
var inst_11306 = (state_11327[(7)]);
var state_11327__$1 = state_11327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11327__$1,(11),to,inst_11306);
} else {
if((state_val_11328 === (3))){
var inst_11325 = (state_11327[(2)]);
var state_11327__$1 = state_11327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11327__$1,inst_11325);
} else {
if((state_val_11328 === (12))){
var state_11327__$1 = state_11327;
var statearr_11335_11361 = state_11327__$1;
(statearr_11335_11361[(2)] = null);

(statearr_11335_11361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (2))){
var state_11327__$1 = state_11327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11327__$1,(4),from);
} else {
if((state_val_11328 === (11))){
var inst_11316 = (state_11327[(2)]);
var state_11327__$1 = state_11327;
if(cljs.core.truth_(inst_11316)){
var statearr_11336_11362 = state_11327__$1;
(statearr_11336_11362[(1)] = (12));

} else {
var statearr_11337_11363 = state_11327__$1;
(statearr_11337_11363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (9))){
var state_11327__$1 = state_11327;
var statearr_11338_11364 = state_11327__$1;
(statearr_11338_11364[(2)] = null);

(statearr_11338_11364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (5))){
var state_11327__$1 = state_11327;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11339_11365 = state_11327__$1;
(statearr_11339_11365[(1)] = (8));

} else {
var statearr_11340_11366 = state_11327__$1;
(statearr_11340_11366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (14))){
var inst_11321 = (state_11327[(2)]);
var state_11327__$1 = state_11327;
var statearr_11341_11367 = state_11327__$1;
(statearr_11341_11367[(2)] = inst_11321);

(statearr_11341_11367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (10))){
var inst_11313 = (state_11327[(2)]);
var state_11327__$1 = state_11327;
var statearr_11342_11368 = state_11327__$1;
(statearr_11342_11368[(2)] = inst_11313);

(statearr_11342_11368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11328 === (8))){
var inst_11310 = cljs.core.async.close_BANG_.call(null,to);
var state_11327__$1 = state_11327;
var statearr_11343_11369 = state_11327__$1;
(statearr_11343_11369[(2)] = inst_11310);

(statearr_11343_11369[(1)] = (10));


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
});})(c__11199__auto___11355))
;
return ((function (switch__11087__auto__,c__11199__auto___11355){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_11347 = [null,null,null,null,null,null,null,null];
(statearr_11347[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_11347[(1)] = (1));

return statearr_11347;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_11327){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11348){if((e11348 instanceof Object)){
var ex__11091__auto__ = e11348;
var statearr_11349_11370 = state_11327;
(statearr_11349_11370[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11371 = state_11327;
state_11327 = G__11371;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_11327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_11327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___11355))
})();
var state__11201__auto__ = (function (){var statearr_11350 = f__11200__auto__.call(null);
(statearr_11350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11355);

return statearr_11350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___11355))
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
return (function (p__11555){
var vec__11556 = p__11555;
var v = cljs.core.nth.call(null,vec__11556,(0),null);
var p = cljs.core.nth.call(null,vec__11556,(1),null);
var job = vec__11556;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11199__auto___11738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results){
return (function (state_11561){
var state_val_11562 = (state_11561[(1)]);
if((state_val_11562 === (1))){
var state_11561__$1 = state_11561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11561__$1,(2),res,v);
} else {
if((state_val_11562 === (2))){
var inst_11558 = (state_11561[(2)]);
var inst_11559 = cljs.core.async.close_BANG_.call(null,res);
var state_11561__$1 = (function (){var statearr_11563 = state_11561;
(statearr_11563[(7)] = inst_11558);

return statearr_11563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11561__$1,inst_11559);
} else {
return null;
}
}
});})(c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results))
;
return ((function (switch__11087__auto__,c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_11567 = [null,null,null,null,null,null,null,null];
(statearr_11567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__);

(statearr_11567[(1)] = (1));

return statearr_11567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1 = (function (state_11561){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11568){if((e11568 instanceof Object)){
var ex__11091__auto__ = e11568;
var statearr_11569_11739 = state_11561;
(statearr_11569_11739[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11740 = state_11561;
state_11561 = G__11740;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = function(state_11561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1.call(this,state_11561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results))
})();
var state__11201__auto__ = (function (){var statearr_11570 = f__11200__auto__.call(null);
(statearr_11570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11738);

return statearr_11570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___11738,res,vec__11556,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11571){
var vec__11572 = p__11571;
var v = cljs.core.nth.call(null,vec__11572,(0),null);
var p = cljs.core.nth.call(null,vec__11572,(1),null);
var job = vec__11572;
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
var n__6071__auto___11741 = n;
var __11742 = (0);
while(true){
if((__11742 < n__6071__auto___11741)){
var G__11573_11743 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11573_11743) {
case "compute":
var c__11199__auto___11745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11742,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (__11742,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function (state_11586){
var state_val_11587 = (state_11586[(1)]);
if((state_val_11587 === (1))){
var state_11586__$1 = state_11586;
var statearr_11588_11746 = state_11586__$1;
(statearr_11588_11746[(2)] = null);

(statearr_11588_11746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (2))){
var state_11586__$1 = state_11586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11586__$1,(4),jobs);
} else {
if((state_val_11587 === (3))){
var inst_11584 = (state_11586[(2)]);
var state_11586__$1 = state_11586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11586__$1,inst_11584);
} else {
if((state_val_11587 === (4))){
var inst_11576 = (state_11586[(2)]);
var inst_11577 = process.call(null,inst_11576);
var state_11586__$1 = state_11586;
if(cljs.core.truth_(inst_11577)){
var statearr_11589_11747 = state_11586__$1;
(statearr_11589_11747[(1)] = (5));

} else {
var statearr_11590_11748 = state_11586__$1;
(statearr_11590_11748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (5))){
var state_11586__$1 = state_11586;
var statearr_11591_11749 = state_11586__$1;
(statearr_11591_11749[(2)] = null);

(statearr_11591_11749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (6))){
var state_11586__$1 = state_11586;
var statearr_11592_11750 = state_11586__$1;
(statearr_11592_11750[(2)] = null);

(statearr_11592_11750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11587 === (7))){
var inst_11582 = (state_11586[(2)]);
var state_11586__$1 = state_11586;
var statearr_11593_11751 = state_11586__$1;
(statearr_11593_11751[(2)] = inst_11582);

(statearr_11593_11751[(1)] = (3));


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
});})(__11742,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
;
return ((function (__11742,switch__11087__auto__,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_11597 = [null,null,null,null,null,null,null];
(statearr_11597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__);

(statearr_11597[(1)] = (1));

return statearr_11597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1 = (function (state_11586){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11598){if((e11598 instanceof Object)){
var ex__11091__auto__ = e11598;
var statearr_11599_11752 = state_11586;
(statearr_11599_11752[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11753 = state_11586;
state_11586 = G__11753;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = function(state_11586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1.call(this,state_11586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__;
})()
;})(__11742,switch__11087__auto__,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
})();
var state__11201__auto__ = (function (){var statearr_11600 = f__11200__auto__.call(null);
(statearr_11600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11745);

return statearr_11600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(__11742,c__11199__auto___11745,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
);


break;
case "async":
var c__11199__auto___11754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11742,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (__11742,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function (state_11613){
var state_val_11614 = (state_11613[(1)]);
if((state_val_11614 === (1))){
var state_11613__$1 = state_11613;
var statearr_11615_11755 = state_11613__$1;
(statearr_11615_11755[(2)] = null);

(statearr_11615_11755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (2))){
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11613__$1,(4),jobs);
} else {
if((state_val_11614 === (3))){
var inst_11611 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11613__$1,inst_11611);
} else {
if((state_val_11614 === (4))){
var inst_11603 = (state_11613[(2)]);
var inst_11604 = async.call(null,inst_11603);
var state_11613__$1 = state_11613;
if(cljs.core.truth_(inst_11604)){
var statearr_11616_11756 = state_11613__$1;
(statearr_11616_11756[(1)] = (5));

} else {
var statearr_11617_11757 = state_11613__$1;
(statearr_11617_11757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (5))){
var state_11613__$1 = state_11613;
var statearr_11618_11758 = state_11613__$1;
(statearr_11618_11758[(2)] = null);

(statearr_11618_11758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (6))){
var state_11613__$1 = state_11613;
var statearr_11619_11759 = state_11613__$1;
(statearr_11619_11759[(2)] = null);

(statearr_11619_11759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11614 === (7))){
var inst_11609 = (state_11613[(2)]);
var state_11613__$1 = state_11613;
var statearr_11620_11760 = state_11613__$1;
(statearr_11620_11760[(2)] = inst_11609);

(statearr_11620_11760[(1)] = (3));


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
});})(__11742,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
;
return ((function (__11742,switch__11087__auto__,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_11624 = [null,null,null,null,null,null,null];
(statearr_11624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__);

(statearr_11624[(1)] = (1));

return statearr_11624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1 = (function (state_11613){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11625){if((e11625 instanceof Object)){
var ex__11091__auto__ = e11625;
var statearr_11626_11761 = state_11613;
(statearr_11626_11761[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11762 = state_11613;
state_11613 = G__11762;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = function(state_11613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1.call(this,state_11613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__;
})()
;})(__11742,switch__11087__auto__,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
})();
var state__11201__auto__ = (function (){var statearr_11627 = f__11200__auto__.call(null);
(statearr_11627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11754);

return statearr_11627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(__11742,c__11199__auto___11754,G__11573_11743,n__6071__auto___11741,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11763 = (__11742 + (1));
__11742 = G__11763;
continue;
} else {
}
break;
}

var c__11199__auto___11764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___11764,jobs,results,process,async){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___11764,jobs,results,process,async){
return (function (state_11649){
var state_val_11650 = (state_11649[(1)]);
if((state_val_11650 === (1))){
var state_11649__$1 = state_11649;
var statearr_11651_11765 = state_11649__$1;
(statearr_11651_11765[(2)] = null);

(statearr_11651_11765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11650 === (2))){
var state_11649__$1 = state_11649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11649__$1,(4),from);
} else {
if((state_val_11650 === (3))){
var inst_11647 = (state_11649[(2)]);
var state_11649__$1 = state_11649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11649__$1,inst_11647);
} else {
if((state_val_11650 === (4))){
var inst_11630 = (state_11649[(7)]);
var inst_11630__$1 = (state_11649[(2)]);
var inst_11631 = (inst_11630__$1 == null);
var state_11649__$1 = (function (){var statearr_11652 = state_11649;
(statearr_11652[(7)] = inst_11630__$1);

return statearr_11652;
})();
if(cljs.core.truth_(inst_11631)){
var statearr_11653_11766 = state_11649__$1;
(statearr_11653_11766[(1)] = (5));

} else {
var statearr_11654_11767 = state_11649__$1;
(statearr_11654_11767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11650 === (5))){
var inst_11633 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11649__$1 = state_11649;
var statearr_11655_11768 = state_11649__$1;
(statearr_11655_11768[(2)] = inst_11633);

(statearr_11655_11768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11650 === (6))){
var inst_11630 = (state_11649[(7)]);
var inst_11635 = (state_11649[(8)]);
var inst_11635__$1 = cljs.core.async.chan.call(null,(1));
var inst_11636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11637 = [inst_11630,inst_11635__$1];
var inst_11638 = (new cljs.core.PersistentVector(null,2,(5),inst_11636,inst_11637,null));
var state_11649__$1 = (function (){var statearr_11656 = state_11649;
(statearr_11656[(8)] = inst_11635__$1);

return statearr_11656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11649__$1,(8),jobs,inst_11638);
} else {
if((state_val_11650 === (7))){
var inst_11645 = (state_11649[(2)]);
var state_11649__$1 = state_11649;
var statearr_11657_11769 = state_11649__$1;
(statearr_11657_11769[(2)] = inst_11645);

(statearr_11657_11769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11650 === (8))){
var inst_11635 = (state_11649[(8)]);
var inst_11640 = (state_11649[(2)]);
var state_11649__$1 = (function (){var statearr_11658 = state_11649;
(statearr_11658[(9)] = inst_11640);

return statearr_11658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11649__$1,(9),results,inst_11635);
} else {
if((state_val_11650 === (9))){
var inst_11642 = (state_11649[(2)]);
var state_11649__$1 = (function (){var statearr_11659 = state_11649;
(statearr_11659[(10)] = inst_11642);

return statearr_11659;
})();
var statearr_11660_11770 = state_11649__$1;
(statearr_11660_11770[(2)] = null);

(statearr_11660_11770[(1)] = (2));


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
});})(c__11199__auto___11764,jobs,results,process,async))
;
return ((function (switch__11087__auto__,c__11199__auto___11764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_11664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__);

(statearr_11664[(1)] = (1));

return statearr_11664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1 = (function (state_11649){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11665){if((e11665 instanceof Object)){
var ex__11091__auto__ = e11665;
var statearr_11666_11771 = state_11649;
(statearr_11666_11771[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11772 = state_11649;
state_11649 = G__11772;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = function(state_11649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1.call(this,state_11649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___11764,jobs,results,process,async))
})();
var state__11201__auto__ = (function (){var statearr_11667 = f__11200__auto__.call(null);
(statearr_11667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11764);

return statearr_11667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___11764,jobs,results,process,async))
);


var c__11199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto__,jobs,results,process,async){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto__,jobs,results,process,async){
return (function (state_11705){
var state_val_11706 = (state_11705[(1)]);
if((state_val_11706 === (7))){
var inst_11701 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11707_11773 = state_11705__$1;
(statearr_11707_11773[(2)] = inst_11701);

(statearr_11707_11773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (20))){
var state_11705__$1 = state_11705;
var statearr_11708_11774 = state_11705__$1;
(statearr_11708_11774[(2)] = null);

(statearr_11708_11774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (1))){
var state_11705__$1 = state_11705;
var statearr_11709_11775 = state_11705__$1;
(statearr_11709_11775[(2)] = null);

(statearr_11709_11775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (4))){
var inst_11670 = (state_11705[(7)]);
var inst_11670__$1 = (state_11705[(2)]);
var inst_11671 = (inst_11670__$1 == null);
var state_11705__$1 = (function (){var statearr_11710 = state_11705;
(statearr_11710[(7)] = inst_11670__$1);

return statearr_11710;
})();
if(cljs.core.truth_(inst_11671)){
var statearr_11711_11776 = state_11705__$1;
(statearr_11711_11776[(1)] = (5));

} else {
var statearr_11712_11777 = state_11705__$1;
(statearr_11712_11777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (15))){
var inst_11683 = (state_11705[(8)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11705__$1,(18),to,inst_11683);
} else {
if((state_val_11706 === (21))){
var inst_11696 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11713_11778 = state_11705__$1;
(statearr_11713_11778[(2)] = inst_11696);

(statearr_11713_11778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (13))){
var inst_11698 = (state_11705[(2)]);
var state_11705__$1 = (function (){var statearr_11714 = state_11705;
(statearr_11714[(9)] = inst_11698);

return statearr_11714;
})();
var statearr_11715_11779 = state_11705__$1;
(statearr_11715_11779[(2)] = null);

(statearr_11715_11779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (6))){
var inst_11670 = (state_11705[(7)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11705__$1,(11),inst_11670);
} else {
if((state_val_11706 === (17))){
var inst_11691 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
if(cljs.core.truth_(inst_11691)){
var statearr_11716_11780 = state_11705__$1;
(statearr_11716_11780[(1)] = (19));

} else {
var statearr_11717_11781 = state_11705__$1;
(statearr_11717_11781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (3))){
var inst_11703 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else {
if((state_val_11706 === (12))){
var inst_11680 = (state_11705[(10)]);
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11705__$1,(14),inst_11680);
} else {
if((state_val_11706 === (2))){
var state_11705__$1 = state_11705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11705__$1,(4),results);
} else {
if((state_val_11706 === (19))){
var state_11705__$1 = state_11705;
var statearr_11718_11782 = state_11705__$1;
(statearr_11718_11782[(2)] = null);

(statearr_11718_11782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (11))){
var inst_11680 = (state_11705[(2)]);
var state_11705__$1 = (function (){var statearr_11719 = state_11705;
(statearr_11719[(10)] = inst_11680);

return statearr_11719;
})();
var statearr_11720_11783 = state_11705__$1;
(statearr_11720_11783[(2)] = null);

(statearr_11720_11783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (9))){
var state_11705__$1 = state_11705;
var statearr_11721_11784 = state_11705__$1;
(statearr_11721_11784[(2)] = null);

(statearr_11721_11784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (5))){
var state_11705__$1 = state_11705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11722_11785 = state_11705__$1;
(statearr_11722_11785[(1)] = (8));

} else {
var statearr_11723_11786 = state_11705__$1;
(statearr_11723_11786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (14))){
var inst_11683 = (state_11705[(8)]);
var inst_11685 = (state_11705[(11)]);
var inst_11683__$1 = (state_11705[(2)]);
var inst_11684 = (inst_11683__$1 == null);
var inst_11685__$1 = cljs.core.not.call(null,inst_11684);
var state_11705__$1 = (function (){var statearr_11724 = state_11705;
(statearr_11724[(8)] = inst_11683__$1);

(statearr_11724[(11)] = inst_11685__$1);

return statearr_11724;
})();
if(inst_11685__$1){
var statearr_11725_11787 = state_11705__$1;
(statearr_11725_11787[(1)] = (15));

} else {
var statearr_11726_11788 = state_11705__$1;
(statearr_11726_11788[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (16))){
var inst_11685 = (state_11705[(11)]);
var state_11705__$1 = state_11705;
var statearr_11727_11789 = state_11705__$1;
(statearr_11727_11789[(2)] = inst_11685);

(statearr_11727_11789[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (10))){
var inst_11677 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11728_11790 = state_11705__$1;
(statearr_11728_11790[(2)] = inst_11677);

(statearr_11728_11790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (18))){
var inst_11688 = (state_11705[(2)]);
var state_11705__$1 = state_11705;
var statearr_11729_11791 = state_11705__$1;
(statearr_11729_11791[(2)] = inst_11688);

(statearr_11729_11791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11706 === (8))){
var inst_11674 = cljs.core.async.close_BANG_.call(null,to);
var state_11705__$1 = state_11705;
var statearr_11730_11792 = state_11705__$1;
(statearr_11730_11792[(2)] = inst_11674);

(statearr_11730_11792[(1)] = (10));


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
});})(c__11199__auto__,jobs,results,process,async))
;
return ((function (switch__11087__auto__,c__11199__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_11734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__);

(statearr_11734[(1)] = (1));

return statearr_11734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1 = (function (state_11705){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11735){if((e11735 instanceof Object)){
var ex__11091__auto__ = e11735;
var statearr_11736_11793 = state_11705;
(statearr_11736_11793[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11794 = state_11705;
state_11705 = G__11794;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto__,jobs,results,process,async))
})();
var state__11201__auto__ = (function (){var statearr_11737 = f__11200__auto__.call(null);
(statearr_11737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto__);

return statearr_11737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto__,jobs,results,process,async))
);

return c__11199__auto__;
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
var args11795 = [];
var len__6226__auto___11798 = arguments.length;
var i__6227__auto___11799 = (0);
while(true){
if((i__6227__auto___11799 < len__6226__auto___11798)){
args11795.push((arguments[i__6227__auto___11799]));

var G__11800 = (i__6227__auto___11799 + (1));
i__6227__auto___11799 = G__11800;
continue;
} else {
}
break;
}

var G__11797 = args11795.length;
switch (G__11797) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11795.length)].join('')));

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
var args11802 = [];
var len__6226__auto___11805 = arguments.length;
var i__6227__auto___11806 = (0);
while(true){
if((i__6227__auto___11806 < len__6226__auto___11805)){
args11802.push((arguments[i__6227__auto___11806]));

var G__11807 = (i__6227__auto___11806 + (1));
i__6227__auto___11806 = G__11807;
continue;
} else {
}
break;
}

var G__11804 = args11802.length;
switch (G__11804) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11802.length)].join('')));

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
var args11809 = [];
var len__6226__auto___11862 = arguments.length;
var i__6227__auto___11863 = (0);
while(true){
if((i__6227__auto___11863 < len__6226__auto___11862)){
args11809.push((arguments[i__6227__auto___11863]));

var G__11864 = (i__6227__auto___11863 + (1));
i__6227__auto___11863 = G__11864;
continue;
} else {
}
break;
}

var G__11811 = args11809.length;
switch (G__11811) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11809.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11199__auto___11866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___11866,tc,fc){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___11866,tc,fc){
return (function (state_11837){
var state_val_11838 = (state_11837[(1)]);
if((state_val_11838 === (7))){
var inst_11833 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
var statearr_11839_11867 = state_11837__$1;
(statearr_11839_11867[(2)] = inst_11833);

(statearr_11839_11867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (1))){
var state_11837__$1 = state_11837;
var statearr_11840_11868 = state_11837__$1;
(statearr_11840_11868[(2)] = null);

(statearr_11840_11868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (4))){
var inst_11814 = (state_11837[(7)]);
var inst_11814__$1 = (state_11837[(2)]);
var inst_11815 = (inst_11814__$1 == null);
var state_11837__$1 = (function (){var statearr_11841 = state_11837;
(statearr_11841[(7)] = inst_11814__$1);

return statearr_11841;
})();
if(cljs.core.truth_(inst_11815)){
var statearr_11842_11869 = state_11837__$1;
(statearr_11842_11869[(1)] = (5));

} else {
var statearr_11843_11870 = state_11837__$1;
(statearr_11843_11870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (13))){
var state_11837__$1 = state_11837;
var statearr_11844_11871 = state_11837__$1;
(statearr_11844_11871[(2)] = null);

(statearr_11844_11871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (6))){
var inst_11814 = (state_11837[(7)]);
var inst_11820 = p.call(null,inst_11814);
var state_11837__$1 = state_11837;
if(cljs.core.truth_(inst_11820)){
var statearr_11845_11872 = state_11837__$1;
(statearr_11845_11872[(1)] = (9));

} else {
var statearr_11846_11873 = state_11837__$1;
(statearr_11846_11873[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (3))){
var inst_11835 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11837__$1,inst_11835);
} else {
if((state_val_11838 === (12))){
var state_11837__$1 = state_11837;
var statearr_11847_11874 = state_11837__$1;
(statearr_11847_11874[(2)] = null);

(statearr_11847_11874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (2))){
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11837__$1,(4),ch);
} else {
if((state_val_11838 === (11))){
var inst_11814 = (state_11837[(7)]);
var inst_11824 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11837__$1,(8),inst_11824,inst_11814);
} else {
if((state_val_11838 === (9))){
var state_11837__$1 = state_11837;
var statearr_11848_11875 = state_11837__$1;
(statearr_11848_11875[(2)] = tc);

(statearr_11848_11875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (5))){
var inst_11817 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11818 = cljs.core.async.close_BANG_.call(null,fc);
var state_11837__$1 = (function (){var statearr_11849 = state_11837;
(statearr_11849[(8)] = inst_11817);

return statearr_11849;
})();
var statearr_11850_11876 = state_11837__$1;
(statearr_11850_11876[(2)] = inst_11818);

(statearr_11850_11876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (14))){
var inst_11831 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
var statearr_11851_11877 = state_11837__$1;
(statearr_11851_11877[(2)] = inst_11831);

(statearr_11851_11877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (10))){
var state_11837__$1 = state_11837;
var statearr_11852_11878 = state_11837__$1;
(statearr_11852_11878[(2)] = fc);

(statearr_11852_11878[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11838 === (8))){
var inst_11826 = (state_11837[(2)]);
var state_11837__$1 = state_11837;
if(cljs.core.truth_(inst_11826)){
var statearr_11853_11879 = state_11837__$1;
(statearr_11853_11879[(1)] = (12));

} else {
var statearr_11854_11880 = state_11837__$1;
(statearr_11854_11880[(1)] = (13));

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
});})(c__11199__auto___11866,tc,fc))
;
return ((function (switch__11087__auto__,c__11199__auto___11866,tc,fc){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_11858 = [null,null,null,null,null,null,null,null,null];
(statearr_11858[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_11858[(1)] = (1));

return statearr_11858;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_11837){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11859){if((e11859 instanceof Object)){
var ex__11091__auto__ = e11859;
var statearr_11860_11881 = state_11837;
(statearr_11860_11881[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11882 = state_11837;
state_11837 = G__11882;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_11837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_11837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___11866,tc,fc))
})();
var state__11201__auto__ = (function (){var statearr_11861 = f__11200__auto__.call(null);
(statearr_11861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___11866);

return statearr_11861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___11866,tc,fc))
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
var c__11199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto__){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto__){
return (function (state_11929){
var state_val_11930 = (state_11929[(1)]);
if((state_val_11930 === (1))){
var inst_11915 = init;
var state_11929__$1 = (function (){var statearr_11931 = state_11929;
(statearr_11931[(7)] = inst_11915);

return statearr_11931;
})();
var statearr_11932_11947 = state_11929__$1;
(statearr_11932_11947[(2)] = null);

(statearr_11932_11947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (2))){
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11929__$1,(4),ch);
} else {
if((state_val_11930 === (3))){
var inst_11927 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11929__$1,inst_11927);
} else {
if((state_val_11930 === (4))){
var inst_11918 = (state_11929[(8)]);
var inst_11918__$1 = (state_11929[(2)]);
var inst_11919 = (inst_11918__$1 == null);
var state_11929__$1 = (function (){var statearr_11933 = state_11929;
(statearr_11933[(8)] = inst_11918__$1);

return statearr_11933;
})();
if(cljs.core.truth_(inst_11919)){
var statearr_11934_11948 = state_11929__$1;
(statearr_11934_11948[(1)] = (5));

} else {
var statearr_11935_11949 = state_11929__$1;
(statearr_11935_11949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (5))){
var inst_11915 = (state_11929[(7)]);
var state_11929__$1 = state_11929;
var statearr_11936_11950 = state_11929__$1;
(statearr_11936_11950[(2)] = inst_11915);

(statearr_11936_11950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (6))){
var inst_11918 = (state_11929[(8)]);
var inst_11915 = (state_11929[(7)]);
var inst_11922 = f.call(null,inst_11915,inst_11918);
var inst_11915__$1 = inst_11922;
var state_11929__$1 = (function (){var statearr_11937 = state_11929;
(statearr_11937[(7)] = inst_11915__$1);

return statearr_11937;
})();
var statearr_11938_11951 = state_11929__$1;
(statearr_11938_11951[(2)] = null);

(statearr_11938_11951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11930 === (7))){
var inst_11925 = (state_11929[(2)]);
var state_11929__$1 = state_11929;
var statearr_11939_11952 = state_11929__$1;
(statearr_11939_11952[(2)] = inst_11925);

(statearr_11939_11952[(1)] = (3));


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
});})(c__11199__auto__))
;
return ((function (switch__11087__auto__,c__11199__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11088__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11088__auto____0 = (function (){
var statearr_11943 = [null,null,null,null,null,null,null,null,null];
(statearr_11943[(0)] = cljs$core$async$reduce_$_state_machine__11088__auto__);

(statearr_11943[(1)] = (1));

return statearr_11943;
});
var cljs$core$async$reduce_$_state_machine__11088__auto____1 = (function (state_11929){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e11944){if((e11944 instanceof Object)){
var ex__11091__auto__ = e11944;
var statearr_11945_11953 = state_11929;
(statearr_11945_11953[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11954 = state_11929;
state_11929 = G__11954;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11088__auto__ = function(state_11929){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11088__auto____1.call(this,state_11929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11088__auto____0;
cljs$core$async$reduce_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11088__auto____1;
return cljs$core$async$reduce_$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto__))
})();
var state__11201__auto__ = (function (){var statearr_11946 = f__11200__auto__.call(null);
(statearr_11946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto__);

return statearr_11946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto__))
);

return c__11199__auto__;
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
var args11955 = [];
var len__6226__auto___12007 = arguments.length;
var i__6227__auto___12008 = (0);
while(true){
if((i__6227__auto___12008 < len__6226__auto___12007)){
args11955.push((arguments[i__6227__auto___12008]));

var G__12009 = (i__6227__auto___12008 + (1));
i__6227__auto___12008 = G__12009;
continue;
} else {
}
break;
}

var G__11957 = args11955.length;
switch (G__11957) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11955.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto__){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto__){
return (function (state_11982){
var state_val_11983 = (state_11982[(1)]);
if((state_val_11983 === (7))){
var inst_11964 = (state_11982[(2)]);
var state_11982__$1 = state_11982;
var statearr_11984_12011 = state_11982__$1;
(statearr_11984_12011[(2)] = inst_11964);

(statearr_11984_12011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (1))){
var inst_11958 = cljs.core.seq.call(null,coll);
var inst_11959 = inst_11958;
var state_11982__$1 = (function (){var statearr_11985 = state_11982;
(statearr_11985[(7)] = inst_11959);

return statearr_11985;
})();
var statearr_11986_12012 = state_11982__$1;
(statearr_11986_12012[(2)] = null);

(statearr_11986_12012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (4))){
var inst_11959 = (state_11982[(7)]);
var inst_11962 = cljs.core.first.call(null,inst_11959);
var state_11982__$1 = state_11982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11982__$1,(7),ch,inst_11962);
} else {
if((state_val_11983 === (13))){
var inst_11976 = (state_11982[(2)]);
var state_11982__$1 = state_11982;
var statearr_11987_12013 = state_11982__$1;
(statearr_11987_12013[(2)] = inst_11976);

(statearr_11987_12013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (6))){
var inst_11967 = (state_11982[(2)]);
var state_11982__$1 = state_11982;
if(cljs.core.truth_(inst_11967)){
var statearr_11988_12014 = state_11982__$1;
(statearr_11988_12014[(1)] = (8));

} else {
var statearr_11989_12015 = state_11982__$1;
(statearr_11989_12015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (3))){
var inst_11980 = (state_11982[(2)]);
var state_11982__$1 = state_11982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11982__$1,inst_11980);
} else {
if((state_val_11983 === (12))){
var state_11982__$1 = state_11982;
var statearr_11990_12016 = state_11982__$1;
(statearr_11990_12016[(2)] = null);

(statearr_11990_12016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (2))){
var inst_11959 = (state_11982[(7)]);
var state_11982__$1 = state_11982;
if(cljs.core.truth_(inst_11959)){
var statearr_11991_12017 = state_11982__$1;
(statearr_11991_12017[(1)] = (4));

} else {
var statearr_11992_12018 = state_11982__$1;
(statearr_11992_12018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (11))){
var inst_11973 = cljs.core.async.close_BANG_.call(null,ch);
var state_11982__$1 = state_11982;
var statearr_11993_12019 = state_11982__$1;
(statearr_11993_12019[(2)] = inst_11973);

(statearr_11993_12019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (9))){
var state_11982__$1 = state_11982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11994_12020 = state_11982__$1;
(statearr_11994_12020[(1)] = (11));

} else {
var statearr_11995_12021 = state_11982__$1;
(statearr_11995_12021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (5))){
var inst_11959 = (state_11982[(7)]);
var state_11982__$1 = state_11982;
var statearr_11996_12022 = state_11982__$1;
(statearr_11996_12022[(2)] = inst_11959);

(statearr_11996_12022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (10))){
var inst_11978 = (state_11982[(2)]);
var state_11982__$1 = state_11982;
var statearr_11997_12023 = state_11982__$1;
(statearr_11997_12023[(2)] = inst_11978);

(statearr_11997_12023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11983 === (8))){
var inst_11959 = (state_11982[(7)]);
var inst_11969 = cljs.core.next.call(null,inst_11959);
var inst_11959__$1 = inst_11969;
var state_11982__$1 = (function (){var statearr_11998 = state_11982;
(statearr_11998[(7)] = inst_11959__$1);

return statearr_11998;
})();
var statearr_11999_12024 = state_11982__$1;
(statearr_11999_12024[(2)] = null);

(statearr_11999_12024[(1)] = (2));


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
});})(c__11199__auto__))
;
return ((function (switch__11087__auto__,c__11199__auto__){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_12003 = [null,null,null,null,null,null,null,null];
(statearr_12003[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_12003[(1)] = (1));

return statearr_12003;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_11982){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_11982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e12004){if((e12004 instanceof Object)){
var ex__11091__auto__ = e12004;
var statearr_12005_12025 = state_11982;
(statearr_12005_12025[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12026 = state_11982;
state_11982 = G__12026;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_11982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_11982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto__))
})();
var state__11201__auto__ = (function (){var statearr_12006 = f__11200__auto__.call(null);
(statearr_12006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto__);

return statearr_12006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto__))
);

return c__11199__auto__;
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
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,_);
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,_);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async12248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12248 = (function (mult,ch,cs,meta12249){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12249 = meta12249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12250,meta12249__$1){
var self__ = this;
var _12250__$1 = this;
return (new cljs.core.async.t_cljs$core$async12248(self__.mult,self__.ch,self__.cs,meta12249__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12250){
var self__ = this;
var _12250__$1 = this;
return self__.meta12249;
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12249","meta12249",-237788521,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12248";

cljs.core.async.t_cljs$core$async12248.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async12248");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12248 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12248(mult__$1,ch__$1,cs__$1,meta12249){
return (new cljs.core.async.t_cljs$core$async12248(mult__$1,ch__$1,cs__$1,meta12249));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12248(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11199__auto___12469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___12469,cs,m,dchan,dctr,done){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___12469,cs,m,dchan,dctr,done){
return (function (state_12381){
var state_val_12382 = (state_12381[(1)]);
if((state_val_12382 === (7))){
var inst_12377 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12383_12470 = state_12381__$1;
(statearr_12383_12470[(2)] = inst_12377);

(statearr_12383_12470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (20))){
var inst_12282 = (state_12381[(7)]);
var inst_12292 = cljs.core.first.call(null,inst_12282);
var inst_12293 = cljs.core.nth.call(null,inst_12292,(0),null);
var inst_12294 = cljs.core.nth.call(null,inst_12292,(1),null);
var state_12381__$1 = (function (){var statearr_12384 = state_12381;
(statearr_12384[(8)] = inst_12293);

return statearr_12384;
})();
if(cljs.core.truth_(inst_12294)){
var statearr_12385_12471 = state_12381__$1;
(statearr_12385_12471[(1)] = (22));

} else {
var statearr_12386_12472 = state_12381__$1;
(statearr_12386_12472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (27))){
var inst_12329 = (state_12381[(9)]);
var inst_12253 = (state_12381[(10)]);
var inst_12324 = (state_12381[(11)]);
var inst_12322 = (state_12381[(12)]);
var inst_12329__$1 = cljs.core._nth.call(null,inst_12322,inst_12324);
var inst_12330 = cljs.core.async.put_BANG_.call(null,inst_12329__$1,inst_12253,done);
var state_12381__$1 = (function (){var statearr_12387 = state_12381;
(statearr_12387[(9)] = inst_12329__$1);

return statearr_12387;
})();
if(cljs.core.truth_(inst_12330)){
var statearr_12388_12473 = state_12381__$1;
(statearr_12388_12473[(1)] = (30));

} else {
var statearr_12389_12474 = state_12381__$1;
(statearr_12389_12474[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (1))){
var state_12381__$1 = state_12381;
var statearr_12390_12475 = state_12381__$1;
(statearr_12390_12475[(2)] = null);

(statearr_12390_12475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (24))){
var inst_12282 = (state_12381[(7)]);
var inst_12299 = (state_12381[(2)]);
var inst_12300 = cljs.core.next.call(null,inst_12282);
var inst_12262 = inst_12300;
var inst_12263 = null;
var inst_12264 = (0);
var inst_12265 = (0);
var state_12381__$1 = (function (){var statearr_12391 = state_12381;
(statearr_12391[(13)] = inst_12264);

(statearr_12391[(14)] = inst_12299);

(statearr_12391[(15)] = inst_12262);

(statearr_12391[(16)] = inst_12265);

(statearr_12391[(17)] = inst_12263);

return statearr_12391;
})();
var statearr_12392_12476 = state_12381__$1;
(statearr_12392_12476[(2)] = null);

(statearr_12392_12476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (39))){
var state_12381__$1 = state_12381;
var statearr_12396_12477 = state_12381__$1;
(statearr_12396_12477[(2)] = null);

(statearr_12396_12477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (4))){
var inst_12253 = (state_12381[(10)]);
var inst_12253__$1 = (state_12381[(2)]);
var inst_12254 = (inst_12253__$1 == null);
var state_12381__$1 = (function (){var statearr_12397 = state_12381;
(statearr_12397[(10)] = inst_12253__$1);

return statearr_12397;
})();
if(cljs.core.truth_(inst_12254)){
var statearr_12398_12478 = state_12381__$1;
(statearr_12398_12478[(1)] = (5));

} else {
var statearr_12399_12479 = state_12381__$1;
(statearr_12399_12479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (15))){
var inst_12264 = (state_12381[(13)]);
var inst_12262 = (state_12381[(15)]);
var inst_12265 = (state_12381[(16)]);
var inst_12263 = (state_12381[(17)]);
var inst_12278 = (state_12381[(2)]);
var inst_12279 = (inst_12265 + (1));
var tmp12393 = inst_12264;
var tmp12394 = inst_12262;
var tmp12395 = inst_12263;
var inst_12262__$1 = tmp12394;
var inst_12263__$1 = tmp12395;
var inst_12264__$1 = tmp12393;
var inst_12265__$1 = inst_12279;
var state_12381__$1 = (function (){var statearr_12400 = state_12381;
(statearr_12400[(13)] = inst_12264__$1);

(statearr_12400[(18)] = inst_12278);

(statearr_12400[(15)] = inst_12262__$1);

(statearr_12400[(16)] = inst_12265__$1);

(statearr_12400[(17)] = inst_12263__$1);

return statearr_12400;
})();
var statearr_12401_12480 = state_12381__$1;
(statearr_12401_12480[(2)] = null);

(statearr_12401_12480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (21))){
var inst_12303 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12405_12481 = state_12381__$1;
(statearr_12405_12481[(2)] = inst_12303);

(statearr_12405_12481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (31))){
var inst_12329 = (state_12381[(9)]);
var inst_12333 = done.call(null,null);
var inst_12334 = cljs.core.async.untap_STAR_.call(null,m,inst_12329);
var state_12381__$1 = (function (){var statearr_12406 = state_12381;
(statearr_12406[(19)] = inst_12333);

return statearr_12406;
})();
var statearr_12407_12482 = state_12381__$1;
(statearr_12407_12482[(2)] = inst_12334);

(statearr_12407_12482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (32))){
var inst_12324 = (state_12381[(11)]);
var inst_12321 = (state_12381[(20)]);
var inst_12323 = (state_12381[(21)]);
var inst_12322 = (state_12381[(12)]);
var inst_12336 = (state_12381[(2)]);
var inst_12337 = (inst_12324 + (1));
var tmp12402 = inst_12321;
var tmp12403 = inst_12323;
var tmp12404 = inst_12322;
var inst_12321__$1 = tmp12402;
var inst_12322__$1 = tmp12404;
var inst_12323__$1 = tmp12403;
var inst_12324__$1 = inst_12337;
var state_12381__$1 = (function (){var statearr_12408 = state_12381;
(statearr_12408[(11)] = inst_12324__$1);

(statearr_12408[(20)] = inst_12321__$1);

(statearr_12408[(21)] = inst_12323__$1);

(statearr_12408[(12)] = inst_12322__$1);

(statearr_12408[(22)] = inst_12336);

return statearr_12408;
})();
var statearr_12409_12483 = state_12381__$1;
(statearr_12409_12483[(2)] = null);

(statearr_12409_12483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (40))){
var inst_12349 = (state_12381[(23)]);
var inst_12353 = done.call(null,null);
var inst_12354 = cljs.core.async.untap_STAR_.call(null,m,inst_12349);
var state_12381__$1 = (function (){var statearr_12410 = state_12381;
(statearr_12410[(24)] = inst_12353);

return statearr_12410;
})();
var statearr_12411_12484 = state_12381__$1;
(statearr_12411_12484[(2)] = inst_12354);

(statearr_12411_12484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (33))){
var inst_12340 = (state_12381[(25)]);
var inst_12342 = cljs.core.chunked_seq_QMARK_.call(null,inst_12340);
var state_12381__$1 = state_12381;
if(inst_12342){
var statearr_12412_12485 = state_12381__$1;
(statearr_12412_12485[(1)] = (36));

} else {
var statearr_12413_12486 = state_12381__$1;
(statearr_12413_12486[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (13))){
var inst_12272 = (state_12381[(26)]);
var inst_12275 = cljs.core.async.close_BANG_.call(null,inst_12272);
var state_12381__$1 = state_12381;
var statearr_12414_12487 = state_12381__$1;
(statearr_12414_12487[(2)] = inst_12275);

(statearr_12414_12487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (22))){
var inst_12293 = (state_12381[(8)]);
var inst_12296 = cljs.core.async.close_BANG_.call(null,inst_12293);
var state_12381__$1 = state_12381;
var statearr_12415_12488 = state_12381__$1;
(statearr_12415_12488[(2)] = inst_12296);

(statearr_12415_12488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (36))){
var inst_12340 = (state_12381[(25)]);
var inst_12344 = cljs.core.chunk_first.call(null,inst_12340);
var inst_12345 = cljs.core.chunk_rest.call(null,inst_12340);
var inst_12346 = cljs.core.count.call(null,inst_12344);
var inst_12321 = inst_12345;
var inst_12322 = inst_12344;
var inst_12323 = inst_12346;
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12416 = state_12381;
(statearr_12416[(11)] = inst_12324);

(statearr_12416[(20)] = inst_12321);

(statearr_12416[(21)] = inst_12323);

(statearr_12416[(12)] = inst_12322);

return statearr_12416;
})();
var statearr_12417_12489 = state_12381__$1;
(statearr_12417_12489[(2)] = null);

(statearr_12417_12489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (41))){
var inst_12340 = (state_12381[(25)]);
var inst_12356 = (state_12381[(2)]);
var inst_12357 = cljs.core.next.call(null,inst_12340);
var inst_12321 = inst_12357;
var inst_12322 = null;
var inst_12323 = (0);
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12418 = state_12381;
(statearr_12418[(27)] = inst_12356);

(statearr_12418[(11)] = inst_12324);

(statearr_12418[(20)] = inst_12321);

(statearr_12418[(21)] = inst_12323);

(statearr_12418[(12)] = inst_12322);

return statearr_12418;
})();
var statearr_12419_12490 = state_12381__$1;
(statearr_12419_12490[(2)] = null);

(statearr_12419_12490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (43))){
var state_12381__$1 = state_12381;
var statearr_12420_12491 = state_12381__$1;
(statearr_12420_12491[(2)] = null);

(statearr_12420_12491[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (29))){
var inst_12365 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12421_12492 = state_12381__$1;
(statearr_12421_12492[(2)] = inst_12365);

(statearr_12421_12492[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (44))){
var inst_12374 = (state_12381[(2)]);
var state_12381__$1 = (function (){var statearr_12422 = state_12381;
(statearr_12422[(28)] = inst_12374);

return statearr_12422;
})();
var statearr_12423_12493 = state_12381__$1;
(statearr_12423_12493[(2)] = null);

(statearr_12423_12493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (6))){
var inst_12313 = (state_12381[(29)]);
var inst_12312 = cljs.core.deref.call(null,cs);
var inst_12313__$1 = cljs.core.keys.call(null,inst_12312);
var inst_12314 = cljs.core.count.call(null,inst_12313__$1);
var inst_12315 = cljs.core.reset_BANG_.call(null,dctr,inst_12314);
var inst_12320 = cljs.core.seq.call(null,inst_12313__$1);
var inst_12321 = inst_12320;
var inst_12322 = null;
var inst_12323 = (0);
var inst_12324 = (0);
var state_12381__$1 = (function (){var statearr_12424 = state_12381;
(statearr_12424[(11)] = inst_12324);

(statearr_12424[(30)] = inst_12315);

(statearr_12424[(20)] = inst_12321);

(statearr_12424[(21)] = inst_12323);

(statearr_12424[(29)] = inst_12313__$1);

(statearr_12424[(12)] = inst_12322);

return statearr_12424;
})();
var statearr_12425_12494 = state_12381__$1;
(statearr_12425_12494[(2)] = null);

(statearr_12425_12494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (28))){
var inst_12340 = (state_12381[(25)]);
var inst_12321 = (state_12381[(20)]);
var inst_12340__$1 = cljs.core.seq.call(null,inst_12321);
var state_12381__$1 = (function (){var statearr_12426 = state_12381;
(statearr_12426[(25)] = inst_12340__$1);

return statearr_12426;
})();
if(inst_12340__$1){
var statearr_12427_12495 = state_12381__$1;
(statearr_12427_12495[(1)] = (33));

} else {
var statearr_12428_12496 = state_12381__$1;
(statearr_12428_12496[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (25))){
var inst_12324 = (state_12381[(11)]);
var inst_12323 = (state_12381[(21)]);
var inst_12326 = (inst_12324 < inst_12323);
var inst_12327 = inst_12326;
var state_12381__$1 = state_12381;
if(cljs.core.truth_(inst_12327)){
var statearr_12429_12497 = state_12381__$1;
(statearr_12429_12497[(1)] = (27));

} else {
var statearr_12430_12498 = state_12381__$1;
(statearr_12430_12498[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (34))){
var state_12381__$1 = state_12381;
var statearr_12431_12499 = state_12381__$1;
(statearr_12431_12499[(2)] = null);

(statearr_12431_12499[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (17))){
var state_12381__$1 = state_12381;
var statearr_12432_12500 = state_12381__$1;
(statearr_12432_12500[(2)] = null);

(statearr_12432_12500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (3))){
var inst_12379 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12381__$1,inst_12379);
} else {
if((state_val_12382 === (12))){
var inst_12308 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12433_12501 = state_12381__$1;
(statearr_12433_12501[(2)] = inst_12308);

(statearr_12433_12501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (2))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12381__$1,(4),ch);
} else {
if((state_val_12382 === (23))){
var state_12381__$1 = state_12381;
var statearr_12434_12502 = state_12381__$1;
(statearr_12434_12502[(2)] = null);

(statearr_12434_12502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (35))){
var inst_12363 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12435_12503 = state_12381__$1;
(statearr_12435_12503[(2)] = inst_12363);

(statearr_12435_12503[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (19))){
var inst_12282 = (state_12381[(7)]);
var inst_12286 = cljs.core.chunk_first.call(null,inst_12282);
var inst_12287 = cljs.core.chunk_rest.call(null,inst_12282);
var inst_12288 = cljs.core.count.call(null,inst_12286);
var inst_12262 = inst_12287;
var inst_12263 = inst_12286;
var inst_12264 = inst_12288;
var inst_12265 = (0);
var state_12381__$1 = (function (){var statearr_12436 = state_12381;
(statearr_12436[(13)] = inst_12264);

(statearr_12436[(15)] = inst_12262);

(statearr_12436[(16)] = inst_12265);

(statearr_12436[(17)] = inst_12263);

return statearr_12436;
})();
var statearr_12437_12504 = state_12381__$1;
(statearr_12437_12504[(2)] = null);

(statearr_12437_12504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (11))){
var inst_12262 = (state_12381[(15)]);
var inst_12282 = (state_12381[(7)]);
var inst_12282__$1 = cljs.core.seq.call(null,inst_12262);
var state_12381__$1 = (function (){var statearr_12438 = state_12381;
(statearr_12438[(7)] = inst_12282__$1);

return statearr_12438;
})();
if(inst_12282__$1){
var statearr_12439_12505 = state_12381__$1;
(statearr_12439_12505[(1)] = (16));

} else {
var statearr_12440_12506 = state_12381__$1;
(statearr_12440_12506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (9))){
var inst_12310 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12441_12507 = state_12381__$1;
(statearr_12441_12507[(2)] = inst_12310);

(statearr_12441_12507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (5))){
var inst_12260 = cljs.core.deref.call(null,cs);
var inst_12261 = cljs.core.seq.call(null,inst_12260);
var inst_12262 = inst_12261;
var inst_12263 = null;
var inst_12264 = (0);
var inst_12265 = (0);
var state_12381__$1 = (function (){var statearr_12442 = state_12381;
(statearr_12442[(13)] = inst_12264);

(statearr_12442[(15)] = inst_12262);

(statearr_12442[(16)] = inst_12265);

(statearr_12442[(17)] = inst_12263);

return statearr_12442;
})();
var statearr_12443_12508 = state_12381__$1;
(statearr_12443_12508[(2)] = null);

(statearr_12443_12508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (14))){
var state_12381__$1 = state_12381;
var statearr_12444_12509 = state_12381__$1;
(statearr_12444_12509[(2)] = null);

(statearr_12444_12509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (45))){
var inst_12371 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12445_12510 = state_12381__$1;
(statearr_12445_12510[(2)] = inst_12371);

(statearr_12445_12510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (26))){
var inst_12313 = (state_12381[(29)]);
var inst_12367 = (state_12381[(2)]);
var inst_12368 = cljs.core.seq.call(null,inst_12313);
var state_12381__$1 = (function (){var statearr_12446 = state_12381;
(statearr_12446[(31)] = inst_12367);

return statearr_12446;
})();
if(inst_12368){
var statearr_12447_12511 = state_12381__$1;
(statearr_12447_12511[(1)] = (42));

} else {
var statearr_12448_12512 = state_12381__$1;
(statearr_12448_12512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (16))){
var inst_12282 = (state_12381[(7)]);
var inst_12284 = cljs.core.chunked_seq_QMARK_.call(null,inst_12282);
var state_12381__$1 = state_12381;
if(inst_12284){
var statearr_12449_12513 = state_12381__$1;
(statearr_12449_12513[(1)] = (19));

} else {
var statearr_12450_12514 = state_12381__$1;
(statearr_12450_12514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (38))){
var inst_12360 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12451_12515 = state_12381__$1;
(statearr_12451_12515[(2)] = inst_12360);

(statearr_12451_12515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (30))){
var state_12381__$1 = state_12381;
var statearr_12452_12516 = state_12381__$1;
(statearr_12452_12516[(2)] = null);

(statearr_12452_12516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (10))){
var inst_12265 = (state_12381[(16)]);
var inst_12263 = (state_12381[(17)]);
var inst_12271 = cljs.core._nth.call(null,inst_12263,inst_12265);
var inst_12272 = cljs.core.nth.call(null,inst_12271,(0),null);
var inst_12273 = cljs.core.nth.call(null,inst_12271,(1),null);
var state_12381__$1 = (function (){var statearr_12453 = state_12381;
(statearr_12453[(26)] = inst_12272);

return statearr_12453;
})();
if(cljs.core.truth_(inst_12273)){
var statearr_12454_12517 = state_12381__$1;
(statearr_12454_12517[(1)] = (13));

} else {
var statearr_12455_12518 = state_12381__$1;
(statearr_12455_12518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (18))){
var inst_12306 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12456_12519 = state_12381__$1;
(statearr_12456_12519[(2)] = inst_12306);

(statearr_12456_12519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (42))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12381__$1,(45),dchan);
} else {
if((state_val_12382 === (37))){
var inst_12349 = (state_12381[(23)]);
var inst_12253 = (state_12381[(10)]);
var inst_12340 = (state_12381[(25)]);
var inst_12349__$1 = cljs.core.first.call(null,inst_12340);
var inst_12350 = cljs.core.async.put_BANG_.call(null,inst_12349__$1,inst_12253,done);
var state_12381__$1 = (function (){var statearr_12457 = state_12381;
(statearr_12457[(23)] = inst_12349__$1);

return statearr_12457;
})();
if(cljs.core.truth_(inst_12350)){
var statearr_12458_12520 = state_12381__$1;
(statearr_12458_12520[(1)] = (39));

} else {
var statearr_12459_12521 = state_12381__$1;
(statearr_12459_12521[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (8))){
var inst_12264 = (state_12381[(13)]);
var inst_12265 = (state_12381[(16)]);
var inst_12267 = (inst_12265 < inst_12264);
var inst_12268 = inst_12267;
var state_12381__$1 = state_12381;
if(cljs.core.truth_(inst_12268)){
var statearr_12460_12522 = state_12381__$1;
(statearr_12460_12522[(1)] = (10));

} else {
var statearr_12461_12523 = state_12381__$1;
(statearr_12461_12523[(1)] = (11));

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
});})(c__11199__auto___12469,cs,m,dchan,dctr,done))
;
return ((function (switch__11087__auto__,c__11199__auto___12469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11088__auto__ = null;
var cljs$core$async$mult_$_state_machine__11088__auto____0 = (function (){
var statearr_12465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12465[(0)] = cljs$core$async$mult_$_state_machine__11088__auto__);

(statearr_12465[(1)] = (1));

return statearr_12465;
});
var cljs$core$async$mult_$_state_machine__11088__auto____1 = (function (state_12381){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_12381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e12466){if((e12466 instanceof Object)){
var ex__11091__auto__ = e12466;
var statearr_12467_12524 = state_12381;
(statearr_12467_12524[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12525 = state_12381;
state_12381 = G__12525;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11088__auto__ = function(state_12381){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11088__auto____1.call(this,state_12381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11088__auto____0;
cljs$core$async$mult_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11088__auto____1;
return cljs$core$async$mult_$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___12469,cs,m,dchan,dctr,done))
})();
var state__11201__auto__ = (function (){var statearr_12468 = f__11200__auto__.call(null);
(statearr_12468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___12469);

return statearr_12468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___12469,cs,m,dchan,dctr,done))
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
var args12526 = [];
var len__6226__auto___12529 = arguments.length;
var i__6227__auto___12530 = (0);
while(true){
if((i__6227__auto___12530 < len__6226__auto___12529)){
args12526.push((arguments[i__6227__auto___12530]));

var G__12531 = (i__6227__auto___12530 + (1));
i__6227__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12528 = args12526.length;
switch (G__12528) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12526.length)].join('')));

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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,ch);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m);
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,state_map);
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,state_map);
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
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,m,mode);
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___12543 = arguments.length;
var i__6227__auto___12544 = (0);
while(true){
if((i__6227__auto___12544 < len__6226__auto___12543)){
args__6233__auto__.push((arguments[i__6227__auto___12544]));

var G__12545 = (i__6227__auto___12544 + (1));
i__6227__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12537){
var map__12538 = p__12537;
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);
var opts = map__12538__$1;
var statearr_12540_12546 = state;
(statearr_12540_12546[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12538,map__12538__$1,opts){
return (function (val){
var statearr_12541_12547 = state;
(statearr_12541_12547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12538,map__12538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12542_12548 = state;
(statearr_12542_12548[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12533){
var G__12534 = cljs.core.first.call(null,seq12533);
var seq12533__$1 = cljs.core.next.call(null,seq12533);
var G__12535 = cljs.core.first.call(null,seq12533__$1);
var seq12533__$2 = cljs.core.next.call(null,seq12533__$1);
var G__12536 = cljs.core.first.call(null,seq12533__$2);
var seq12533__$3 = cljs.core.next.call(null,seq12533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12534,G__12535,G__12536,seq12533__$3);
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
if(typeof cljs.core.async.t_cljs$core$async12712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12712 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12713){
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
this.meta12713 = meta12713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12714,meta12713__$1){
var self__ = this;
var _12714__$1 = this;
return (new cljs.core.async.t_cljs$core$async12712(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12713__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12714){
var self__ = this;
var _12714__$1 = this;
return self__.meta12713;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async12712.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12713","meta12713",-1772831912,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12712";

cljs.core.async.t_cljs$core$async12712.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async12712");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12712 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12713){
return (new cljs.core.async.t_cljs$core$async12712(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12713));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12712(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11199__auto___12875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12812){
var state_val_12813 = (state_12812[(1)]);
if((state_val_12813 === (7))){
var inst_12730 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
var statearr_12814_12876 = state_12812__$1;
(statearr_12814_12876[(2)] = inst_12730);

(statearr_12814_12876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (20))){
var inst_12742 = (state_12812[(7)]);
var state_12812__$1 = state_12812;
var statearr_12815_12877 = state_12812__$1;
(statearr_12815_12877[(2)] = inst_12742);

(statearr_12815_12877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (27))){
var state_12812__$1 = state_12812;
var statearr_12816_12878 = state_12812__$1;
(statearr_12816_12878[(2)] = null);

(statearr_12816_12878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (1))){
var inst_12718 = (state_12812[(8)]);
var inst_12718__$1 = calc_state.call(null);
var inst_12720 = (inst_12718__$1 == null);
var inst_12721 = cljs.core.not.call(null,inst_12720);
var state_12812__$1 = (function (){var statearr_12817 = state_12812;
(statearr_12817[(8)] = inst_12718__$1);

return statearr_12817;
})();
if(inst_12721){
var statearr_12818_12879 = state_12812__$1;
(statearr_12818_12879[(1)] = (2));

} else {
var statearr_12819_12880 = state_12812__$1;
(statearr_12819_12880[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (24))){
var inst_12786 = (state_12812[(9)]);
var inst_12765 = (state_12812[(10)]);
var inst_12772 = (state_12812[(11)]);
var inst_12786__$1 = inst_12765.call(null,inst_12772);
var state_12812__$1 = (function (){var statearr_12820 = state_12812;
(statearr_12820[(9)] = inst_12786__$1);

return statearr_12820;
})();
if(cljs.core.truth_(inst_12786__$1)){
var statearr_12821_12881 = state_12812__$1;
(statearr_12821_12881[(1)] = (29));

} else {
var statearr_12822_12882 = state_12812__$1;
(statearr_12822_12882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (4))){
var inst_12733 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12733)){
var statearr_12823_12883 = state_12812__$1;
(statearr_12823_12883[(1)] = (8));

} else {
var statearr_12824_12884 = state_12812__$1;
(statearr_12824_12884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (15))){
var inst_12759 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12759)){
var statearr_12825_12885 = state_12812__$1;
(statearr_12825_12885[(1)] = (19));

} else {
var statearr_12826_12886 = state_12812__$1;
(statearr_12826_12886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (21))){
var inst_12764 = (state_12812[(12)]);
var inst_12764__$1 = (state_12812[(2)]);
var inst_12765 = cljs.core.get.call(null,inst_12764__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12766 = cljs.core.get.call(null,inst_12764__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12767 = cljs.core.get.call(null,inst_12764__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12812__$1 = (function (){var statearr_12827 = state_12812;
(statearr_12827[(10)] = inst_12765);

(statearr_12827[(12)] = inst_12764__$1);

(statearr_12827[(13)] = inst_12766);

return statearr_12827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12812__$1,(22),inst_12767);
} else {
if((state_val_12813 === (31))){
var inst_12794 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12794)){
var statearr_12828_12887 = state_12812__$1;
(statearr_12828_12887[(1)] = (32));

} else {
var statearr_12829_12888 = state_12812__$1;
(statearr_12829_12888[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (32))){
var inst_12771 = (state_12812[(14)]);
var state_12812__$1 = state_12812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12812__$1,(35),out,inst_12771);
} else {
if((state_val_12813 === (33))){
var inst_12764 = (state_12812[(12)]);
var inst_12742 = inst_12764;
var state_12812__$1 = (function (){var statearr_12830 = state_12812;
(statearr_12830[(7)] = inst_12742);

return statearr_12830;
})();
var statearr_12831_12889 = state_12812__$1;
(statearr_12831_12889[(2)] = null);

(statearr_12831_12889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (13))){
var inst_12742 = (state_12812[(7)]);
var inst_12749 = inst_12742.cljs$lang$protocol_mask$partition0$;
var inst_12750 = (inst_12749 & (64));
var inst_12751 = inst_12742.cljs$core$ISeq$;
var inst_12752 = (inst_12750) || (inst_12751);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12752)){
var statearr_12832_12890 = state_12812__$1;
(statearr_12832_12890[(1)] = (16));

} else {
var statearr_12833_12891 = state_12812__$1;
(statearr_12833_12891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (22))){
var inst_12771 = (state_12812[(14)]);
var inst_12772 = (state_12812[(11)]);
var inst_12770 = (state_12812[(2)]);
var inst_12771__$1 = cljs.core.nth.call(null,inst_12770,(0),null);
var inst_12772__$1 = cljs.core.nth.call(null,inst_12770,(1),null);
var inst_12773 = (inst_12771__$1 == null);
var inst_12774 = cljs.core._EQ_.call(null,inst_12772__$1,change);
var inst_12775 = (inst_12773) || (inst_12774);
var state_12812__$1 = (function (){var statearr_12834 = state_12812;
(statearr_12834[(14)] = inst_12771__$1);

(statearr_12834[(11)] = inst_12772__$1);

return statearr_12834;
})();
if(cljs.core.truth_(inst_12775)){
var statearr_12835_12892 = state_12812__$1;
(statearr_12835_12892[(1)] = (23));

} else {
var statearr_12836_12893 = state_12812__$1;
(statearr_12836_12893[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (36))){
var inst_12764 = (state_12812[(12)]);
var inst_12742 = inst_12764;
var state_12812__$1 = (function (){var statearr_12837 = state_12812;
(statearr_12837[(7)] = inst_12742);

return statearr_12837;
})();
var statearr_12838_12894 = state_12812__$1;
(statearr_12838_12894[(2)] = null);

(statearr_12838_12894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (29))){
var inst_12786 = (state_12812[(9)]);
var state_12812__$1 = state_12812;
var statearr_12839_12895 = state_12812__$1;
(statearr_12839_12895[(2)] = inst_12786);

(statearr_12839_12895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (6))){
var state_12812__$1 = state_12812;
var statearr_12840_12896 = state_12812__$1;
(statearr_12840_12896[(2)] = false);

(statearr_12840_12896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (28))){
var inst_12782 = (state_12812[(2)]);
var inst_12783 = calc_state.call(null);
var inst_12742 = inst_12783;
var state_12812__$1 = (function (){var statearr_12841 = state_12812;
(statearr_12841[(15)] = inst_12782);

(statearr_12841[(7)] = inst_12742);

return statearr_12841;
})();
var statearr_12842_12897 = state_12812__$1;
(statearr_12842_12897[(2)] = null);

(statearr_12842_12897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (25))){
var inst_12808 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
var statearr_12843_12898 = state_12812__$1;
(statearr_12843_12898[(2)] = inst_12808);

(statearr_12843_12898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (34))){
var inst_12806 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
var statearr_12844_12899 = state_12812__$1;
(statearr_12844_12899[(2)] = inst_12806);

(statearr_12844_12899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (17))){
var state_12812__$1 = state_12812;
var statearr_12845_12900 = state_12812__$1;
(statearr_12845_12900[(2)] = false);

(statearr_12845_12900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (3))){
var state_12812__$1 = state_12812;
var statearr_12846_12901 = state_12812__$1;
(statearr_12846_12901[(2)] = false);

(statearr_12846_12901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (12))){
var inst_12810 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12812__$1,inst_12810);
} else {
if((state_val_12813 === (2))){
var inst_12718 = (state_12812[(8)]);
var inst_12723 = inst_12718.cljs$lang$protocol_mask$partition0$;
var inst_12724 = (inst_12723 & (64));
var inst_12725 = inst_12718.cljs$core$ISeq$;
var inst_12726 = (inst_12724) || (inst_12725);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12726)){
var statearr_12847_12902 = state_12812__$1;
(statearr_12847_12902[(1)] = (5));

} else {
var statearr_12848_12903 = state_12812__$1;
(statearr_12848_12903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (23))){
var inst_12771 = (state_12812[(14)]);
var inst_12777 = (inst_12771 == null);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12777)){
var statearr_12849_12904 = state_12812__$1;
(statearr_12849_12904[(1)] = (26));

} else {
var statearr_12850_12905 = state_12812__$1;
(statearr_12850_12905[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (35))){
var inst_12797 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
if(cljs.core.truth_(inst_12797)){
var statearr_12851_12906 = state_12812__$1;
(statearr_12851_12906[(1)] = (36));

} else {
var statearr_12852_12907 = state_12812__$1;
(statearr_12852_12907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (19))){
var inst_12742 = (state_12812[(7)]);
var inst_12761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12742);
var state_12812__$1 = state_12812;
var statearr_12853_12908 = state_12812__$1;
(statearr_12853_12908[(2)] = inst_12761);

(statearr_12853_12908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (11))){
var inst_12742 = (state_12812[(7)]);
var inst_12746 = (inst_12742 == null);
var inst_12747 = cljs.core.not.call(null,inst_12746);
var state_12812__$1 = state_12812;
if(inst_12747){
var statearr_12854_12909 = state_12812__$1;
(statearr_12854_12909[(1)] = (13));

} else {
var statearr_12855_12910 = state_12812__$1;
(statearr_12855_12910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (9))){
var inst_12718 = (state_12812[(8)]);
var state_12812__$1 = state_12812;
var statearr_12856_12911 = state_12812__$1;
(statearr_12856_12911[(2)] = inst_12718);

(statearr_12856_12911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (5))){
var state_12812__$1 = state_12812;
var statearr_12857_12912 = state_12812__$1;
(statearr_12857_12912[(2)] = true);

(statearr_12857_12912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (14))){
var state_12812__$1 = state_12812;
var statearr_12858_12913 = state_12812__$1;
(statearr_12858_12913[(2)] = false);

(statearr_12858_12913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (26))){
var inst_12772 = (state_12812[(11)]);
var inst_12779 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12772);
var state_12812__$1 = state_12812;
var statearr_12859_12914 = state_12812__$1;
(statearr_12859_12914[(2)] = inst_12779);

(statearr_12859_12914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (16))){
var state_12812__$1 = state_12812;
var statearr_12860_12915 = state_12812__$1;
(statearr_12860_12915[(2)] = true);

(statearr_12860_12915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (38))){
var inst_12802 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
var statearr_12861_12916 = state_12812__$1;
(statearr_12861_12916[(2)] = inst_12802);

(statearr_12861_12916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (30))){
var inst_12765 = (state_12812[(10)]);
var inst_12766 = (state_12812[(13)]);
var inst_12772 = (state_12812[(11)]);
var inst_12789 = cljs.core.empty_QMARK_.call(null,inst_12765);
var inst_12790 = inst_12766.call(null,inst_12772);
var inst_12791 = cljs.core.not.call(null,inst_12790);
var inst_12792 = (inst_12789) && (inst_12791);
var state_12812__$1 = state_12812;
var statearr_12862_12917 = state_12812__$1;
(statearr_12862_12917[(2)] = inst_12792);

(statearr_12862_12917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (10))){
var inst_12718 = (state_12812[(8)]);
var inst_12738 = (state_12812[(2)]);
var inst_12739 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12740 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12741 = cljs.core.get.call(null,inst_12738,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12742 = inst_12718;
var state_12812__$1 = (function (){var statearr_12863 = state_12812;
(statearr_12863[(16)] = inst_12741);

(statearr_12863[(17)] = inst_12740);

(statearr_12863[(7)] = inst_12742);

(statearr_12863[(18)] = inst_12739);

return statearr_12863;
})();
var statearr_12864_12918 = state_12812__$1;
(statearr_12864_12918[(2)] = null);

(statearr_12864_12918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (18))){
var inst_12756 = (state_12812[(2)]);
var state_12812__$1 = state_12812;
var statearr_12865_12919 = state_12812__$1;
(statearr_12865_12919[(2)] = inst_12756);

(statearr_12865_12919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (37))){
var state_12812__$1 = state_12812;
var statearr_12866_12920 = state_12812__$1;
(statearr_12866_12920[(2)] = null);

(statearr_12866_12920[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12813 === (8))){
var inst_12718 = (state_12812[(8)]);
var inst_12735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12718);
var state_12812__$1 = state_12812;
var statearr_12867_12921 = state_12812__$1;
(statearr_12867_12921[(2)] = inst_12735);

(statearr_12867_12921[(1)] = (10));


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
});})(c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11087__auto__,c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11088__auto__ = null;
var cljs$core$async$mix_$_state_machine__11088__auto____0 = (function (){
var statearr_12871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12871[(0)] = cljs$core$async$mix_$_state_machine__11088__auto__);

(statearr_12871[(1)] = (1));

return statearr_12871;
});
var cljs$core$async$mix_$_state_machine__11088__auto____1 = (function (state_12812){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_12812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e12872){if((e12872 instanceof Object)){
var ex__11091__auto__ = e12872;
var statearr_12873_12922 = state_12812;
(statearr_12873_12922[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12923 = state_12812;
state_12812 = G__12923;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11088__auto__ = function(state_12812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11088__auto____1.call(this,state_12812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11088__auto____0;
cljs$core$async$mix_$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11088__auto____1;
return cljs$core$async$mix_$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11201__auto__ = (function (){var statearr_12874 = f__11200__auto__.call(null);
(statearr_12874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___12875);

return statearr_12874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v,ch);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12924 = [];
var len__6226__auto___12927 = arguments.length;
var i__6227__auto___12928 = (0);
while(true){
if((i__6227__auto___12928 < len__6226__auto___12927)){
args12924.push((arguments[i__6227__auto___12928]));

var G__12929 = (i__6227__auto___12928 + (1));
i__6227__auto___12928 = G__12929;
continue;
} else {
}
break;
}

var G__12926 = args12924.length;
switch (G__12926) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12924.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p);
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
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,p,v);
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,p,v);
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
var args12932 = [];
var len__6226__auto___13057 = arguments.length;
var i__6227__auto___13058 = (0);
while(true){
if((i__6227__auto___13058 < len__6226__auto___13057)){
args12932.push((arguments[i__6227__auto___13058]));

var G__13059 = (i__6227__auto___13058 + (1));
i__6227__auto___13058 = G__13059;
continue;
} else {
}
break;
}

var G__12934 = args12932.length;
switch (G__12934) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12932.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5168__auto__,mults){
return (function (p1__12931_SHARP_){
if(cljs.core.truth_(p1__12931_SHARP_.call(null,topic))){
return p1__12931_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12931_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12936 = meta12936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12937,meta12936__$1){
var self__ = this;
var _12937__$1 = this;
return (new cljs.core.async.t_cljs$core$async12935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12936__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12937){
var self__ = this;
var _12937__$1 = this;
return self__.meta12936;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12936","meta12936",-1105995341,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12935";

cljs.core.async.t_cljs$core$async12935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async12935");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12935 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12936){
return (new cljs.core.async.t_cljs$core$async12935(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12936));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11199__auto___13061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13061,mults,ensure_mult,p){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13061,mults,ensure_mult,p){
return (function (state_13009){
var state_val_13010 = (state_13009[(1)]);
if((state_val_13010 === (7))){
var inst_13005 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13011_13062 = state_13009__$1;
(statearr_13011_13062[(2)] = inst_13005);

(statearr_13011_13062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (20))){
var state_13009__$1 = state_13009;
var statearr_13012_13063 = state_13009__$1;
(statearr_13012_13063[(2)] = null);

(statearr_13012_13063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (1))){
var state_13009__$1 = state_13009;
var statearr_13013_13064 = state_13009__$1;
(statearr_13013_13064[(2)] = null);

(statearr_13013_13064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (24))){
var inst_12988 = (state_13009[(7)]);
var inst_12997 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12988);
var state_13009__$1 = state_13009;
var statearr_13014_13065 = state_13009__$1;
(statearr_13014_13065[(2)] = inst_12997);

(statearr_13014_13065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (4))){
var inst_12940 = (state_13009[(8)]);
var inst_12940__$1 = (state_13009[(2)]);
var inst_12941 = (inst_12940__$1 == null);
var state_13009__$1 = (function (){var statearr_13015 = state_13009;
(statearr_13015[(8)] = inst_12940__$1);

return statearr_13015;
})();
if(cljs.core.truth_(inst_12941)){
var statearr_13016_13066 = state_13009__$1;
(statearr_13016_13066[(1)] = (5));

} else {
var statearr_13017_13067 = state_13009__$1;
(statearr_13017_13067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (15))){
var inst_12982 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13018_13068 = state_13009__$1;
(statearr_13018_13068[(2)] = inst_12982);

(statearr_13018_13068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (21))){
var inst_13002 = (state_13009[(2)]);
var state_13009__$1 = (function (){var statearr_13019 = state_13009;
(statearr_13019[(9)] = inst_13002);

return statearr_13019;
})();
var statearr_13020_13069 = state_13009__$1;
(statearr_13020_13069[(2)] = null);

(statearr_13020_13069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (13))){
var inst_12964 = (state_13009[(10)]);
var inst_12966 = cljs.core.chunked_seq_QMARK_.call(null,inst_12964);
var state_13009__$1 = state_13009;
if(inst_12966){
var statearr_13021_13070 = state_13009__$1;
(statearr_13021_13070[(1)] = (16));

} else {
var statearr_13022_13071 = state_13009__$1;
(statearr_13022_13071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (22))){
var inst_12994 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
if(cljs.core.truth_(inst_12994)){
var statearr_13023_13072 = state_13009__$1;
(statearr_13023_13072[(1)] = (23));

} else {
var statearr_13024_13073 = state_13009__$1;
(statearr_13024_13073[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (6))){
var inst_12988 = (state_13009[(7)]);
var inst_12940 = (state_13009[(8)]);
var inst_12990 = (state_13009[(11)]);
var inst_12988__$1 = topic_fn.call(null,inst_12940);
var inst_12989 = cljs.core.deref.call(null,mults);
var inst_12990__$1 = cljs.core.get.call(null,inst_12989,inst_12988__$1);
var state_13009__$1 = (function (){var statearr_13025 = state_13009;
(statearr_13025[(7)] = inst_12988__$1);

(statearr_13025[(11)] = inst_12990__$1);

return statearr_13025;
})();
if(cljs.core.truth_(inst_12990__$1)){
var statearr_13026_13074 = state_13009__$1;
(statearr_13026_13074[(1)] = (19));

} else {
var statearr_13027_13075 = state_13009__$1;
(statearr_13027_13075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (25))){
var inst_12999 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13028_13076 = state_13009__$1;
(statearr_13028_13076[(2)] = inst_12999);

(statearr_13028_13076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (17))){
var inst_12964 = (state_13009[(10)]);
var inst_12973 = cljs.core.first.call(null,inst_12964);
var inst_12974 = cljs.core.async.muxch_STAR_.call(null,inst_12973);
var inst_12975 = cljs.core.async.close_BANG_.call(null,inst_12974);
var inst_12976 = cljs.core.next.call(null,inst_12964);
var inst_12950 = inst_12976;
var inst_12951 = null;
var inst_12952 = (0);
var inst_12953 = (0);
var state_13009__$1 = (function (){var statearr_13029 = state_13009;
(statearr_13029[(12)] = inst_12950);

(statearr_13029[(13)] = inst_12952);

(statearr_13029[(14)] = inst_12975);

(statearr_13029[(15)] = inst_12953);

(statearr_13029[(16)] = inst_12951);

return statearr_13029;
})();
var statearr_13030_13077 = state_13009__$1;
(statearr_13030_13077[(2)] = null);

(statearr_13030_13077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (3))){
var inst_13007 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13009__$1,inst_13007);
} else {
if((state_val_13010 === (12))){
var inst_12984 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13031_13078 = state_13009__$1;
(statearr_13031_13078[(2)] = inst_12984);

(statearr_13031_13078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (2))){
var state_13009__$1 = state_13009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13009__$1,(4),ch);
} else {
if((state_val_13010 === (23))){
var state_13009__$1 = state_13009;
var statearr_13032_13079 = state_13009__$1;
(statearr_13032_13079[(2)] = null);

(statearr_13032_13079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (19))){
var inst_12940 = (state_13009[(8)]);
var inst_12990 = (state_13009[(11)]);
var inst_12992 = cljs.core.async.muxch_STAR_.call(null,inst_12990);
var state_13009__$1 = state_13009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13009__$1,(22),inst_12992,inst_12940);
} else {
if((state_val_13010 === (11))){
var inst_12950 = (state_13009[(12)]);
var inst_12964 = (state_13009[(10)]);
var inst_12964__$1 = cljs.core.seq.call(null,inst_12950);
var state_13009__$1 = (function (){var statearr_13033 = state_13009;
(statearr_13033[(10)] = inst_12964__$1);

return statearr_13033;
})();
if(inst_12964__$1){
var statearr_13034_13080 = state_13009__$1;
(statearr_13034_13080[(1)] = (13));

} else {
var statearr_13035_13081 = state_13009__$1;
(statearr_13035_13081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (9))){
var inst_12986 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13036_13082 = state_13009__$1;
(statearr_13036_13082[(2)] = inst_12986);

(statearr_13036_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (5))){
var inst_12947 = cljs.core.deref.call(null,mults);
var inst_12948 = cljs.core.vals.call(null,inst_12947);
var inst_12949 = cljs.core.seq.call(null,inst_12948);
var inst_12950 = inst_12949;
var inst_12951 = null;
var inst_12952 = (0);
var inst_12953 = (0);
var state_13009__$1 = (function (){var statearr_13037 = state_13009;
(statearr_13037[(12)] = inst_12950);

(statearr_13037[(13)] = inst_12952);

(statearr_13037[(15)] = inst_12953);

(statearr_13037[(16)] = inst_12951);

return statearr_13037;
})();
var statearr_13038_13083 = state_13009__$1;
(statearr_13038_13083[(2)] = null);

(statearr_13038_13083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (14))){
var state_13009__$1 = state_13009;
var statearr_13042_13084 = state_13009__$1;
(statearr_13042_13084[(2)] = null);

(statearr_13042_13084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (16))){
var inst_12964 = (state_13009[(10)]);
var inst_12968 = cljs.core.chunk_first.call(null,inst_12964);
var inst_12969 = cljs.core.chunk_rest.call(null,inst_12964);
var inst_12970 = cljs.core.count.call(null,inst_12968);
var inst_12950 = inst_12969;
var inst_12951 = inst_12968;
var inst_12952 = inst_12970;
var inst_12953 = (0);
var state_13009__$1 = (function (){var statearr_13043 = state_13009;
(statearr_13043[(12)] = inst_12950);

(statearr_13043[(13)] = inst_12952);

(statearr_13043[(15)] = inst_12953);

(statearr_13043[(16)] = inst_12951);

return statearr_13043;
})();
var statearr_13044_13085 = state_13009__$1;
(statearr_13044_13085[(2)] = null);

(statearr_13044_13085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (10))){
var inst_12950 = (state_13009[(12)]);
var inst_12952 = (state_13009[(13)]);
var inst_12953 = (state_13009[(15)]);
var inst_12951 = (state_13009[(16)]);
var inst_12958 = cljs.core._nth.call(null,inst_12951,inst_12953);
var inst_12959 = cljs.core.async.muxch_STAR_.call(null,inst_12958);
var inst_12960 = cljs.core.async.close_BANG_.call(null,inst_12959);
var inst_12961 = (inst_12953 + (1));
var tmp13039 = inst_12950;
var tmp13040 = inst_12952;
var tmp13041 = inst_12951;
var inst_12950__$1 = tmp13039;
var inst_12951__$1 = tmp13041;
var inst_12952__$1 = tmp13040;
var inst_12953__$1 = inst_12961;
var state_13009__$1 = (function (){var statearr_13045 = state_13009;
(statearr_13045[(12)] = inst_12950__$1);

(statearr_13045[(17)] = inst_12960);

(statearr_13045[(13)] = inst_12952__$1);

(statearr_13045[(15)] = inst_12953__$1);

(statearr_13045[(16)] = inst_12951__$1);

return statearr_13045;
})();
var statearr_13046_13086 = state_13009__$1;
(statearr_13046_13086[(2)] = null);

(statearr_13046_13086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (18))){
var inst_12979 = (state_13009[(2)]);
var state_13009__$1 = state_13009;
var statearr_13047_13087 = state_13009__$1;
(statearr_13047_13087[(2)] = inst_12979);

(statearr_13047_13087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13010 === (8))){
var inst_12952 = (state_13009[(13)]);
var inst_12953 = (state_13009[(15)]);
var inst_12955 = (inst_12953 < inst_12952);
var inst_12956 = inst_12955;
var state_13009__$1 = state_13009;
if(cljs.core.truth_(inst_12956)){
var statearr_13048_13088 = state_13009__$1;
(statearr_13048_13088[(1)] = (10));

} else {
var statearr_13049_13089 = state_13009__$1;
(statearr_13049_13089[(1)] = (11));

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
});})(c__11199__auto___13061,mults,ensure_mult,p))
;
return ((function (switch__11087__auto__,c__11199__auto___13061,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13053[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13053[(1)] = (1));

return statearr_13053;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13009){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13054){if((e13054 instanceof Object)){
var ex__11091__auto__ = e13054;
var statearr_13055_13090 = state_13009;
(statearr_13055_13090[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13091 = state_13009;
state_13009 = G__13091;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13061,mults,ensure_mult,p))
})();
var state__11201__auto__ = (function (){var statearr_13056 = f__11200__auto__.call(null);
(statearr_13056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13061);

return statearr_13056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13061,mults,ensure_mult,p))
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
var args13092 = [];
var len__6226__auto___13095 = arguments.length;
var i__6227__auto___13096 = (0);
while(true){
if((i__6227__auto___13096 < len__6226__auto___13095)){
args13092.push((arguments[i__6227__auto___13096]));

var G__13097 = (i__6227__auto___13096 + (1));
i__6227__auto___13096 = G__13097;
continue;
} else {
}
break;
}

var G__13094 = args13092.length;
switch (G__13094) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13092.length)].join('')));

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
var args13099 = [];
var len__6226__auto___13102 = arguments.length;
var i__6227__auto___13103 = (0);
while(true){
if((i__6227__auto___13103 < len__6226__auto___13102)){
args13099.push((arguments[i__6227__auto___13103]));

var G__13104 = (i__6227__auto___13103 + (1));
i__6227__auto___13103 = G__13104;
continue;
} else {
}
break;
}

var G__13101 = args13099.length;
switch (G__13101) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13099.length)].join('')));

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
var args13106 = [];
var len__6226__auto___13177 = arguments.length;
var i__6227__auto___13178 = (0);
while(true){
if((i__6227__auto___13178 < len__6226__auto___13177)){
args13106.push((arguments[i__6227__auto___13178]));

var G__13179 = (i__6227__auto___13178 + (1));
i__6227__auto___13178 = G__13179;
continue;
} else {
}
break;
}

var G__13108 = args13106.length;
switch (G__13108) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13106.length)].join('')));

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
var c__11199__auto___13181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13147){
var state_val_13148 = (state_13147[(1)]);
if((state_val_13148 === (7))){
var state_13147__$1 = state_13147;
var statearr_13149_13182 = state_13147__$1;
(statearr_13149_13182[(2)] = null);

(statearr_13149_13182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (1))){
var state_13147__$1 = state_13147;
var statearr_13150_13183 = state_13147__$1;
(statearr_13150_13183[(2)] = null);

(statearr_13150_13183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (4))){
var inst_13111 = (state_13147[(7)]);
var inst_13113 = (inst_13111 < cnt);
var state_13147__$1 = state_13147;
if(cljs.core.truth_(inst_13113)){
var statearr_13151_13184 = state_13147__$1;
(statearr_13151_13184[(1)] = (6));

} else {
var statearr_13152_13185 = state_13147__$1;
(statearr_13152_13185[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (15))){
var inst_13143 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13153_13186 = state_13147__$1;
(statearr_13153_13186[(2)] = inst_13143);

(statearr_13153_13186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (13))){
var inst_13136 = cljs.core.async.close_BANG_.call(null,out);
var state_13147__$1 = state_13147;
var statearr_13154_13187 = state_13147__$1;
(statearr_13154_13187[(2)] = inst_13136);

(statearr_13154_13187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (6))){
var state_13147__$1 = state_13147;
var statearr_13155_13188 = state_13147__$1;
(statearr_13155_13188[(2)] = null);

(statearr_13155_13188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (3))){
var inst_13145 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13147__$1,inst_13145);
} else {
if((state_val_13148 === (12))){
var inst_13133 = (state_13147[(8)]);
var inst_13133__$1 = (state_13147[(2)]);
var inst_13134 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13133__$1);
var state_13147__$1 = (function (){var statearr_13156 = state_13147;
(statearr_13156[(8)] = inst_13133__$1);

return statearr_13156;
})();
if(cljs.core.truth_(inst_13134)){
var statearr_13157_13189 = state_13147__$1;
(statearr_13157_13189[(1)] = (13));

} else {
var statearr_13158_13190 = state_13147__$1;
(statearr_13158_13190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (2))){
var inst_13110 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13111 = (0);
var state_13147__$1 = (function (){var statearr_13159 = state_13147;
(statearr_13159[(7)] = inst_13111);

(statearr_13159[(9)] = inst_13110);

return statearr_13159;
})();
var statearr_13160_13191 = state_13147__$1;
(statearr_13160_13191[(2)] = null);

(statearr_13160_13191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (11))){
var inst_13111 = (state_13147[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13147,(10),Object,null,(9));
var inst_13120 = chs__$1.call(null,inst_13111);
var inst_13121 = done.call(null,inst_13111);
var inst_13122 = cljs.core.async.take_BANG_.call(null,inst_13120,inst_13121);
var state_13147__$1 = state_13147;
var statearr_13161_13192 = state_13147__$1;
(statearr_13161_13192[(2)] = inst_13122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (9))){
var inst_13111 = (state_13147[(7)]);
var inst_13124 = (state_13147[(2)]);
var inst_13125 = (inst_13111 + (1));
var inst_13111__$1 = inst_13125;
var state_13147__$1 = (function (){var statearr_13162 = state_13147;
(statearr_13162[(7)] = inst_13111__$1);

(statearr_13162[(10)] = inst_13124);

return statearr_13162;
})();
var statearr_13163_13193 = state_13147__$1;
(statearr_13163_13193[(2)] = null);

(statearr_13163_13193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (5))){
var inst_13131 = (state_13147[(2)]);
var state_13147__$1 = (function (){var statearr_13164 = state_13147;
(statearr_13164[(11)] = inst_13131);

return statearr_13164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13147__$1,(12),dchan);
} else {
if((state_val_13148 === (14))){
var inst_13133 = (state_13147[(8)]);
var inst_13138 = cljs.core.apply.call(null,f,inst_13133);
var state_13147__$1 = state_13147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13147__$1,(16),out,inst_13138);
} else {
if((state_val_13148 === (16))){
var inst_13140 = (state_13147[(2)]);
var state_13147__$1 = (function (){var statearr_13165 = state_13147;
(statearr_13165[(12)] = inst_13140);

return statearr_13165;
})();
var statearr_13166_13194 = state_13147__$1;
(statearr_13166_13194[(2)] = null);

(statearr_13166_13194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (10))){
var inst_13115 = (state_13147[(2)]);
var inst_13116 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13147__$1 = (function (){var statearr_13167 = state_13147;
(statearr_13167[(13)] = inst_13115);

return statearr_13167;
})();
var statearr_13168_13195 = state_13147__$1;
(statearr_13168_13195[(2)] = inst_13116);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13147__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13148 === (8))){
var inst_13129 = (state_13147[(2)]);
var state_13147__$1 = state_13147;
var statearr_13169_13196 = state_13147__$1;
(statearr_13169_13196[(2)] = inst_13129);

(statearr_13169_13196[(1)] = (5));


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
});})(c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11087__auto__,c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13173[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13173[(1)] = (1));

return statearr_13173;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13147){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13174){if((e13174 instanceof Object)){
var ex__11091__auto__ = e13174;
var statearr_13175_13197 = state_13147;
(statearr_13175_13197[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13198 = state_13147;
state_13147 = G__13198;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11201__auto__ = (function (){var statearr_13176 = f__11200__auto__.call(null);
(statearr_13176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13181);

return statearr_13176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13181,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args13200 = [];
var len__6226__auto___13256 = arguments.length;
var i__6227__auto___13257 = (0);
while(true){
if((i__6227__auto___13257 < len__6226__auto___13256)){
args13200.push((arguments[i__6227__auto___13257]));

var G__13258 = (i__6227__auto___13257 + (1));
i__6227__auto___13257 = G__13258;
continue;
} else {
}
break;
}

var G__13202 = args13200.length;
switch (G__13202) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13200.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13260,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13260,out){
return (function (state_13232){
var state_val_13233 = (state_13232[(1)]);
if((state_val_13233 === (7))){
var inst_13212 = (state_13232[(7)]);
var inst_13211 = (state_13232[(8)]);
var inst_13211__$1 = (state_13232[(2)]);
var inst_13212__$1 = cljs.core.nth.call(null,inst_13211__$1,(0),null);
var inst_13213 = cljs.core.nth.call(null,inst_13211__$1,(1),null);
var inst_13214 = (inst_13212__$1 == null);
var state_13232__$1 = (function (){var statearr_13234 = state_13232;
(statearr_13234[(7)] = inst_13212__$1);

(statearr_13234[(9)] = inst_13213);

(statearr_13234[(8)] = inst_13211__$1);

return statearr_13234;
})();
if(cljs.core.truth_(inst_13214)){
var statearr_13235_13261 = state_13232__$1;
(statearr_13235_13261[(1)] = (8));

} else {
var statearr_13236_13262 = state_13232__$1;
(statearr_13236_13262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (1))){
var inst_13203 = cljs.core.vec.call(null,chs);
var inst_13204 = inst_13203;
var state_13232__$1 = (function (){var statearr_13237 = state_13232;
(statearr_13237[(10)] = inst_13204);

return statearr_13237;
})();
var statearr_13238_13263 = state_13232__$1;
(statearr_13238_13263[(2)] = null);

(statearr_13238_13263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (4))){
var inst_13204 = (state_13232[(10)]);
var state_13232__$1 = state_13232;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13232__$1,(7),inst_13204);
} else {
if((state_val_13233 === (6))){
var inst_13228 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
var statearr_13239_13264 = state_13232__$1;
(statearr_13239_13264[(2)] = inst_13228);

(statearr_13239_13264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (3))){
var inst_13230 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else {
if((state_val_13233 === (2))){
var inst_13204 = (state_13232[(10)]);
var inst_13206 = cljs.core.count.call(null,inst_13204);
var inst_13207 = (inst_13206 > (0));
var state_13232__$1 = state_13232;
if(cljs.core.truth_(inst_13207)){
var statearr_13241_13265 = state_13232__$1;
(statearr_13241_13265[(1)] = (4));

} else {
var statearr_13242_13266 = state_13232__$1;
(statearr_13242_13266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (11))){
var inst_13204 = (state_13232[(10)]);
var inst_13221 = (state_13232[(2)]);
var tmp13240 = inst_13204;
var inst_13204__$1 = tmp13240;
var state_13232__$1 = (function (){var statearr_13243 = state_13232;
(statearr_13243[(10)] = inst_13204__$1);

(statearr_13243[(11)] = inst_13221);

return statearr_13243;
})();
var statearr_13244_13267 = state_13232__$1;
(statearr_13244_13267[(2)] = null);

(statearr_13244_13267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (9))){
var inst_13212 = (state_13232[(7)]);
var state_13232__$1 = state_13232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13232__$1,(11),out,inst_13212);
} else {
if((state_val_13233 === (5))){
var inst_13226 = cljs.core.async.close_BANG_.call(null,out);
var state_13232__$1 = state_13232;
var statearr_13245_13268 = state_13232__$1;
(statearr_13245_13268[(2)] = inst_13226);

(statearr_13245_13268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (10))){
var inst_13224 = (state_13232[(2)]);
var state_13232__$1 = state_13232;
var statearr_13246_13269 = state_13232__$1;
(statearr_13246_13269[(2)] = inst_13224);

(statearr_13246_13269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13233 === (8))){
var inst_13204 = (state_13232[(10)]);
var inst_13212 = (state_13232[(7)]);
var inst_13213 = (state_13232[(9)]);
var inst_13211 = (state_13232[(8)]);
var inst_13216 = (function (){var cs = inst_13204;
var vec__13209 = inst_13211;
var v = inst_13212;
var c = inst_13213;
return ((function (cs,vec__13209,v,c,inst_13204,inst_13212,inst_13213,inst_13211,state_val_13233,c__11199__auto___13260,out){
return (function (p1__13199_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13199_SHARP_);
});
;})(cs,vec__13209,v,c,inst_13204,inst_13212,inst_13213,inst_13211,state_val_13233,c__11199__auto___13260,out))
})();
var inst_13217 = cljs.core.filterv.call(null,inst_13216,inst_13204);
var inst_13204__$1 = inst_13217;
var state_13232__$1 = (function (){var statearr_13247 = state_13232;
(statearr_13247[(10)] = inst_13204__$1);

return statearr_13247;
})();
var statearr_13248_13270 = state_13232__$1;
(statearr_13248_13270[(2)] = null);

(statearr_13248_13270[(1)] = (2));


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
});})(c__11199__auto___13260,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13260,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13252 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13252[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13252[(1)] = (1));

return statearr_13252;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13232){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13253){if((e13253 instanceof Object)){
var ex__11091__auto__ = e13253;
var statearr_13254_13271 = state_13232;
(statearr_13254_13271[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13272 = state_13232;
state_13232 = G__13272;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13260,out))
})();
var state__11201__auto__ = (function (){var statearr_13255 = f__11200__auto__.call(null);
(statearr_13255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13260);

return statearr_13255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13260,out))
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
var args13273 = [];
var len__6226__auto___13322 = arguments.length;
var i__6227__auto___13323 = (0);
while(true){
if((i__6227__auto___13323 < len__6226__auto___13322)){
args13273.push((arguments[i__6227__auto___13323]));

var G__13324 = (i__6227__auto___13323 + (1));
i__6227__auto___13323 = G__13324;
continue;
} else {
}
break;
}

var G__13275 = args13273.length;
switch (G__13275) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13273.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13326,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13326,out){
return (function (state_13299){
var state_val_13300 = (state_13299[(1)]);
if((state_val_13300 === (7))){
var inst_13281 = (state_13299[(7)]);
var inst_13281__$1 = (state_13299[(2)]);
var inst_13282 = (inst_13281__$1 == null);
var inst_13283 = cljs.core.not.call(null,inst_13282);
var state_13299__$1 = (function (){var statearr_13301 = state_13299;
(statearr_13301[(7)] = inst_13281__$1);

return statearr_13301;
})();
if(inst_13283){
var statearr_13302_13327 = state_13299__$1;
(statearr_13302_13327[(1)] = (8));

} else {
var statearr_13303_13328 = state_13299__$1;
(statearr_13303_13328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (1))){
var inst_13276 = (0);
var state_13299__$1 = (function (){var statearr_13304 = state_13299;
(statearr_13304[(8)] = inst_13276);

return statearr_13304;
})();
var statearr_13305_13329 = state_13299__$1;
(statearr_13305_13329[(2)] = null);

(statearr_13305_13329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (4))){
var state_13299__$1 = state_13299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13299__$1,(7),ch);
} else {
if((state_val_13300 === (6))){
var inst_13294 = (state_13299[(2)]);
var state_13299__$1 = state_13299;
var statearr_13306_13330 = state_13299__$1;
(statearr_13306_13330[(2)] = inst_13294);

(statearr_13306_13330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (3))){
var inst_13296 = (state_13299[(2)]);
var inst_13297 = cljs.core.async.close_BANG_.call(null,out);
var state_13299__$1 = (function (){var statearr_13307 = state_13299;
(statearr_13307[(9)] = inst_13296);

return statearr_13307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13299__$1,inst_13297);
} else {
if((state_val_13300 === (2))){
var inst_13276 = (state_13299[(8)]);
var inst_13278 = (inst_13276 < n);
var state_13299__$1 = state_13299;
if(cljs.core.truth_(inst_13278)){
var statearr_13308_13331 = state_13299__$1;
(statearr_13308_13331[(1)] = (4));

} else {
var statearr_13309_13332 = state_13299__$1;
(statearr_13309_13332[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (11))){
var inst_13276 = (state_13299[(8)]);
var inst_13286 = (state_13299[(2)]);
var inst_13287 = (inst_13276 + (1));
var inst_13276__$1 = inst_13287;
var state_13299__$1 = (function (){var statearr_13310 = state_13299;
(statearr_13310[(8)] = inst_13276__$1);

(statearr_13310[(10)] = inst_13286);

return statearr_13310;
})();
var statearr_13311_13333 = state_13299__$1;
(statearr_13311_13333[(2)] = null);

(statearr_13311_13333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (9))){
var state_13299__$1 = state_13299;
var statearr_13312_13334 = state_13299__$1;
(statearr_13312_13334[(2)] = null);

(statearr_13312_13334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (5))){
var state_13299__$1 = state_13299;
var statearr_13313_13335 = state_13299__$1;
(statearr_13313_13335[(2)] = null);

(statearr_13313_13335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (10))){
var inst_13291 = (state_13299[(2)]);
var state_13299__$1 = state_13299;
var statearr_13314_13336 = state_13299__$1;
(statearr_13314_13336[(2)] = inst_13291);

(statearr_13314_13336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (8))){
var inst_13281 = (state_13299[(7)]);
var state_13299__$1 = state_13299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13299__$1,(11),out,inst_13281);
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
});})(c__11199__auto___13326,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13326,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13318[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13318[(1)] = (1));

return statearr_13318;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13299){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13319){if((e13319 instanceof Object)){
var ex__11091__auto__ = e13319;
var statearr_13320_13337 = state_13299;
(statearr_13320_13337[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13338 = state_13299;
state_13299 = G__13338;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13326,out))
})();
var state__11201__auto__ = (function (){var statearr_13321 = f__11200__auto__.call(null);
(statearr_13321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13326);

return statearr_13321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13326,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13346 = (function (map_LT_,f,ch,meta13347){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13347 = meta13347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13348,meta13347__$1){
var self__ = this;
var _13348__$1 = this;
return (new cljs.core.async.t_cljs$core$async13346(self__.map_LT_,self__.f,self__.ch,meta13347__$1));
});

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13348){
var self__ = this;
var _13348__$1 = this;
return self__.meta13347;
});

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13349 = (function (map_LT_,f,ch,meta13347,_,fn1,meta13350){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13347 = meta13347;
this._ = _;
this.fn1 = fn1;
this.meta13350 = meta13350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13351,meta13350__$1){
var self__ = this;
var _13351__$1 = this;
return (new cljs.core.async.t_cljs$core$async13349(self__.map_LT_,self__.f,self__.ch,self__.meta13347,self__._,self__.fn1,meta13350__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13351){
var self__ = this;
var _13351__$1 = this;
return self__.meta13350;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13339_SHARP_){
return f1.call(null,(((p1__13339_SHARP_ == null))?null:self__.f.call(null,p1__13339_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13349.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13347","meta13347",-779252368,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13346","cljs.core.async/t_cljs$core$async13346",983761631,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13350","meta13350",-774865906,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13349";

cljs.core.async.t_cljs$core$async13349.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13349");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13349 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13349(map_LT___$1,f__$1,ch__$1,meta13347__$1,___$2,fn1__$1,meta13350){
return (new cljs.core.async.t_cljs$core$async13349(map_LT___$1,f__$1,ch__$1,meta13347__$1,___$2,fn1__$1,meta13350));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13349(self__.map_LT_,self__.f,self__.ch,self__.meta13347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13347","meta13347",-779252368,null)], null);
});

cljs.core.async.t_cljs$core$async13346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13346";

cljs.core.async.t_cljs$core$async13346.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13346");
});

cljs.core.async.__GT_t_cljs$core$async13346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13346(map_LT___$1,f__$1,ch__$1,meta13347){
return (new cljs.core.async.t_cljs$core$async13346(map_LT___$1,f__$1,ch__$1,meta13347));
});

}

return (new cljs.core.async.t_cljs$core$async13346(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13355 = (function (map_GT_,f,ch,meta13356){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13356 = meta13356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13357,meta13356__$1){
var self__ = this;
var _13357__$1 = this;
return (new cljs.core.async.t_cljs$core$async13355(self__.map_GT_,self__.f,self__.ch,meta13356__$1));
});

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13357){
var self__ = this;
var _13357__$1 = this;
return self__.meta13356;
});

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13355.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13356","meta13356",-376158939,null)], null);
});

cljs.core.async.t_cljs$core$async13355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13355";

cljs.core.async.t_cljs$core$async13355.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13355");
});

cljs.core.async.__GT_t_cljs$core$async13355 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13355(map_GT___$1,f__$1,ch__$1,meta13356){
return (new cljs.core.async.t_cljs$core$async13355(map_GT___$1,f__$1,ch__$1,meta13356));
});

}

return (new cljs.core.async.t_cljs$core$async13355(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13361 = (function (filter_GT_,p,ch,meta13362){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13362 = meta13362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13363,meta13362__$1){
var self__ = this;
var _13363__$1 = this;
return (new cljs.core.async.t_cljs$core$async13361(self__.filter_GT_,self__.p,self__.ch,meta13362__$1));
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13363){
var self__ = this;
var _13363__$1 = this;
return self__.meta13362;
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13362","meta13362",-1440819362,null)], null);
});

cljs.core.async.t_cljs$core$async13361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13361";

cljs.core.async.t_cljs$core$async13361.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"cljs.core.async/t_cljs$core$async13361");
});

cljs.core.async.__GT_t_cljs$core$async13361 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13361(filter_GT___$1,p__$1,ch__$1,meta13362){
return (new cljs.core.async.t_cljs$core$async13361(filter_GT___$1,p__$1,ch__$1,meta13362));
});

}

return (new cljs.core.async.t_cljs$core$async13361(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args13364 = [];
var len__6226__auto___13408 = arguments.length;
var i__6227__auto___13409 = (0);
while(true){
if((i__6227__auto___13409 < len__6226__auto___13408)){
args13364.push((arguments[i__6227__auto___13409]));

var G__13410 = (i__6227__auto___13409 + (1));
i__6227__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var G__13366 = args13364.length;
switch (G__13366) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13364.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13412,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13412,out){
return (function (state_13387){
var state_val_13388 = (state_13387[(1)]);
if((state_val_13388 === (7))){
var inst_13383 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13389_13413 = state_13387__$1;
(statearr_13389_13413[(2)] = inst_13383);

(statearr_13389_13413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (1))){
var state_13387__$1 = state_13387;
var statearr_13390_13414 = state_13387__$1;
(statearr_13390_13414[(2)] = null);

(statearr_13390_13414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (4))){
var inst_13369 = (state_13387[(7)]);
var inst_13369__$1 = (state_13387[(2)]);
var inst_13370 = (inst_13369__$1 == null);
var state_13387__$1 = (function (){var statearr_13391 = state_13387;
(statearr_13391[(7)] = inst_13369__$1);

return statearr_13391;
})();
if(cljs.core.truth_(inst_13370)){
var statearr_13392_13415 = state_13387__$1;
(statearr_13392_13415[(1)] = (5));

} else {
var statearr_13393_13416 = state_13387__$1;
(statearr_13393_13416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (6))){
var inst_13369 = (state_13387[(7)]);
var inst_13374 = p.call(null,inst_13369);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13374)){
var statearr_13394_13417 = state_13387__$1;
(statearr_13394_13417[(1)] = (8));

} else {
var statearr_13395_13418 = state_13387__$1;
(statearr_13395_13418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (3))){
var inst_13385 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13387__$1,inst_13385);
} else {
if((state_val_13388 === (2))){
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13387__$1,(4),ch);
} else {
if((state_val_13388 === (11))){
var inst_13377 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13396_13419 = state_13387__$1;
(statearr_13396_13419[(2)] = inst_13377);

(statearr_13396_13419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (9))){
var state_13387__$1 = state_13387;
var statearr_13397_13420 = state_13387__$1;
(statearr_13397_13420[(2)] = null);

(statearr_13397_13420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (5))){
var inst_13372 = cljs.core.async.close_BANG_.call(null,out);
var state_13387__$1 = state_13387;
var statearr_13398_13421 = state_13387__$1;
(statearr_13398_13421[(2)] = inst_13372);

(statearr_13398_13421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (10))){
var inst_13380 = (state_13387[(2)]);
var state_13387__$1 = (function (){var statearr_13399 = state_13387;
(statearr_13399[(8)] = inst_13380);

return statearr_13399;
})();
var statearr_13400_13422 = state_13387__$1;
(statearr_13400_13422[(2)] = null);

(statearr_13400_13422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (8))){
var inst_13369 = (state_13387[(7)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(11),out,inst_13369);
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
});})(c__11199__auto___13412,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13412,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13404 = [null,null,null,null,null,null,null,null,null];
(statearr_13404[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13404[(1)] = (1));

return statearr_13404;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13387){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13405){if((e13405 instanceof Object)){
var ex__11091__auto__ = e13405;
var statearr_13406_13423 = state_13387;
(statearr_13406_13423[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13424 = state_13387;
state_13387 = G__13424;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13412,out))
})();
var state__11201__auto__ = (function (){var statearr_13407 = f__11200__auto__.call(null);
(statearr_13407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13412);

return statearr_13407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13412,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13425 = [];
var len__6226__auto___13428 = arguments.length;
var i__6227__auto___13429 = (0);
while(true){
if((i__6227__auto___13429 < len__6226__auto___13428)){
args13425.push((arguments[i__6227__auto___13429]));

var G__13430 = (i__6227__auto___13429 + (1));
i__6227__auto___13429 = G__13430;
continue;
} else {
}
break;
}

var G__13427 = args13425.length;
switch (G__13427) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13425.length)].join('')));

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
var c__11199__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto__){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto__){
return (function (state_13597){
var state_val_13598 = (state_13597[(1)]);
if((state_val_13598 === (7))){
var inst_13593 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
var statearr_13599_13640 = state_13597__$1;
(statearr_13599_13640[(2)] = inst_13593);

(statearr_13599_13640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (20))){
var inst_13563 = (state_13597[(7)]);
var inst_13574 = (state_13597[(2)]);
var inst_13575 = cljs.core.next.call(null,inst_13563);
var inst_13549 = inst_13575;
var inst_13550 = null;
var inst_13551 = (0);
var inst_13552 = (0);
var state_13597__$1 = (function (){var statearr_13600 = state_13597;
(statearr_13600[(8)] = inst_13550);

(statearr_13600[(9)] = inst_13549);

(statearr_13600[(10)] = inst_13551);

(statearr_13600[(11)] = inst_13552);

(statearr_13600[(12)] = inst_13574);

return statearr_13600;
})();
var statearr_13601_13641 = state_13597__$1;
(statearr_13601_13641[(2)] = null);

(statearr_13601_13641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (1))){
var state_13597__$1 = state_13597;
var statearr_13602_13642 = state_13597__$1;
(statearr_13602_13642[(2)] = null);

(statearr_13602_13642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (4))){
var inst_13538 = (state_13597[(13)]);
var inst_13538__$1 = (state_13597[(2)]);
var inst_13539 = (inst_13538__$1 == null);
var state_13597__$1 = (function (){var statearr_13603 = state_13597;
(statearr_13603[(13)] = inst_13538__$1);

return statearr_13603;
})();
if(cljs.core.truth_(inst_13539)){
var statearr_13604_13643 = state_13597__$1;
(statearr_13604_13643[(1)] = (5));

} else {
var statearr_13605_13644 = state_13597__$1;
(statearr_13605_13644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (15))){
var state_13597__$1 = state_13597;
var statearr_13609_13645 = state_13597__$1;
(statearr_13609_13645[(2)] = null);

(statearr_13609_13645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (21))){
var state_13597__$1 = state_13597;
var statearr_13610_13646 = state_13597__$1;
(statearr_13610_13646[(2)] = null);

(statearr_13610_13646[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (13))){
var inst_13550 = (state_13597[(8)]);
var inst_13549 = (state_13597[(9)]);
var inst_13551 = (state_13597[(10)]);
var inst_13552 = (state_13597[(11)]);
var inst_13559 = (state_13597[(2)]);
var inst_13560 = (inst_13552 + (1));
var tmp13606 = inst_13550;
var tmp13607 = inst_13549;
var tmp13608 = inst_13551;
var inst_13549__$1 = tmp13607;
var inst_13550__$1 = tmp13606;
var inst_13551__$1 = tmp13608;
var inst_13552__$1 = inst_13560;
var state_13597__$1 = (function (){var statearr_13611 = state_13597;
(statearr_13611[(8)] = inst_13550__$1);

(statearr_13611[(9)] = inst_13549__$1);

(statearr_13611[(10)] = inst_13551__$1);

(statearr_13611[(14)] = inst_13559);

(statearr_13611[(11)] = inst_13552__$1);

return statearr_13611;
})();
var statearr_13612_13647 = state_13597__$1;
(statearr_13612_13647[(2)] = null);

(statearr_13612_13647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (22))){
var state_13597__$1 = state_13597;
var statearr_13613_13648 = state_13597__$1;
(statearr_13613_13648[(2)] = null);

(statearr_13613_13648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (6))){
var inst_13538 = (state_13597[(13)]);
var inst_13547 = f.call(null,inst_13538);
var inst_13548 = cljs.core.seq.call(null,inst_13547);
var inst_13549 = inst_13548;
var inst_13550 = null;
var inst_13551 = (0);
var inst_13552 = (0);
var state_13597__$1 = (function (){var statearr_13614 = state_13597;
(statearr_13614[(8)] = inst_13550);

(statearr_13614[(9)] = inst_13549);

(statearr_13614[(10)] = inst_13551);

(statearr_13614[(11)] = inst_13552);

return statearr_13614;
})();
var statearr_13615_13649 = state_13597__$1;
(statearr_13615_13649[(2)] = null);

(statearr_13615_13649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (17))){
var inst_13563 = (state_13597[(7)]);
var inst_13567 = cljs.core.chunk_first.call(null,inst_13563);
var inst_13568 = cljs.core.chunk_rest.call(null,inst_13563);
var inst_13569 = cljs.core.count.call(null,inst_13567);
var inst_13549 = inst_13568;
var inst_13550 = inst_13567;
var inst_13551 = inst_13569;
var inst_13552 = (0);
var state_13597__$1 = (function (){var statearr_13616 = state_13597;
(statearr_13616[(8)] = inst_13550);

(statearr_13616[(9)] = inst_13549);

(statearr_13616[(10)] = inst_13551);

(statearr_13616[(11)] = inst_13552);

return statearr_13616;
})();
var statearr_13617_13650 = state_13597__$1;
(statearr_13617_13650[(2)] = null);

(statearr_13617_13650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (3))){
var inst_13595 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13597__$1,inst_13595);
} else {
if((state_val_13598 === (12))){
var inst_13583 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
var statearr_13618_13651 = state_13597__$1;
(statearr_13618_13651[(2)] = inst_13583);

(statearr_13618_13651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (2))){
var state_13597__$1 = state_13597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13597__$1,(4),in$);
} else {
if((state_val_13598 === (23))){
var inst_13591 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
var statearr_13619_13652 = state_13597__$1;
(statearr_13619_13652[(2)] = inst_13591);

(statearr_13619_13652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (19))){
var inst_13578 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
var statearr_13620_13653 = state_13597__$1;
(statearr_13620_13653[(2)] = inst_13578);

(statearr_13620_13653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (11))){
var inst_13549 = (state_13597[(9)]);
var inst_13563 = (state_13597[(7)]);
var inst_13563__$1 = cljs.core.seq.call(null,inst_13549);
var state_13597__$1 = (function (){var statearr_13621 = state_13597;
(statearr_13621[(7)] = inst_13563__$1);

return statearr_13621;
})();
if(inst_13563__$1){
var statearr_13622_13654 = state_13597__$1;
(statearr_13622_13654[(1)] = (14));

} else {
var statearr_13623_13655 = state_13597__$1;
(statearr_13623_13655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (9))){
var inst_13585 = (state_13597[(2)]);
var inst_13586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13597__$1 = (function (){var statearr_13624 = state_13597;
(statearr_13624[(15)] = inst_13585);

return statearr_13624;
})();
if(cljs.core.truth_(inst_13586)){
var statearr_13625_13656 = state_13597__$1;
(statearr_13625_13656[(1)] = (21));

} else {
var statearr_13626_13657 = state_13597__$1;
(statearr_13626_13657[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (5))){
var inst_13541 = cljs.core.async.close_BANG_.call(null,out);
var state_13597__$1 = state_13597;
var statearr_13627_13658 = state_13597__$1;
(statearr_13627_13658[(2)] = inst_13541);

(statearr_13627_13658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (14))){
var inst_13563 = (state_13597[(7)]);
var inst_13565 = cljs.core.chunked_seq_QMARK_.call(null,inst_13563);
var state_13597__$1 = state_13597;
if(inst_13565){
var statearr_13628_13659 = state_13597__$1;
(statearr_13628_13659[(1)] = (17));

} else {
var statearr_13629_13660 = state_13597__$1;
(statearr_13629_13660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (16))){
var inst_13581 = (state_13597[(2)]);
var state_13597__$1 = state_13597;
var statearr_13630_13661 = state_13597__$1;
(statearr_13630_13661[(2)] = inst_13581);

(statearr_13630_13661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13598 === (10))){
var inst_13550 = (state_13597[(8)]);
var inst_13552 = (state_13597[(11)]);
var inst_13557 = cljs.core._nth.call(null,inst_13550,inst_13552);
var state_13597__$1 = state_13597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13597__$1,(13),out,inst_13557);
} else {
if((state_val_13598 === (18))){
var inst_13563 = (state_13597[(7)]);
var inst_13572 = cljs.core.first.call(null,inst_13563);
var state_13597__$1 = state_13597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13597__$1,(20),out,inst_13572);
} else {
if((state_val_13598 === (8))){
var inst_13551 = (state_13597[(10)]);
var inst_13552 = (state_13597[(11)]);
var inst_13554 = (inst_13552 < inst_13551);
var inst_13555 = inst_13554;
var state_13597__$1 = state_13597;
if(cljs.core.truth_(inst_13555)){
var statearr_13631_13662 = state_13597__$1;
(statearr_13631_13662[(1)] = (10));

} else {
var statearr_13632_13663 = state_13597__$1;
(statearr_13632_13663[(1)] = (11));

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
});})(c__11199__auto__))
;
return ((function (switch__11087__auto__,c__11199__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____0 = (function (){
var statearr_13636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__);

(statearr_13636[(1)] = (1));

return statearr_13636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____1 = (function (state_13597){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13637){if((e13637 instanceof Object)){
var ex__11091__auto__ = e13637;
var statearr_13638_13664 = state_13597;
(statearr_13638_13664[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13665 = state_13597;
state_13597 = G__13665;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__ = function(state_13597){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____1.call(this,state_13597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11088__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto__))
})();
var state__11201__auto__ = (function (){var statearr_13639 = f__11200__auto__.call(null);
(statearr_13639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto__);

return statearr_13639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto__))
);

return c__11199__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13666 = [];
var len__6226__auto___13669 = arguments.length;
var i__6227__auto___13670 = (0);
while(true){
if((i__6227__auto___13670 < len__6226__auto___13669)){
args13666.push((arguments[i__6227__auto___13670]));

var G__13671 = (i__6227__auto___13670 + (1));
i__6227__auto___13670 = G__13671;
continue;
} else {
}
break;
}

var G__13668 = args13666.length;
switch (G__13668) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13666.length)].join('')));

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
var args13673 = [];
var len__6226__auto___13676 = arguments.length;
var i__6227__auto___13677 = (0);
while(true){
if((i__6227__auto___13677 < len__6226__auto___13676)){
args13673.push((arguments[i__6227__auto___13677]));

var G__13678 = (i__6227__auto___13677 + (1));
i__6227__auto___13677 = G__13678;
continue;
} else {
}
break;
}

var G__13675 = args13673.length;
switch (G__13675) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13673.length)].join('')));

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
var args13680 = [];
var len__6226__auto___13731 = arguments.length;
var i__6227__auto___13732 = (0);
while(true){
if((i__6227__auto___13732 < len__6226__auto___13731)){
args13680.push((arguments[i__6227__auto___13732]));

var G__13733 = (i__6227__auto___13732 + (1));
i__6227__auto___13732 = G__13733;
continue;
} else {
}
break;
}

var G__13682 = args13680.length;
switch (G__13682) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13680.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13735,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13735,out){
return (function (state_13706){
var state_val_13707 = (state_13706[(1)]);
if((state_val_13707 === (7))){
var inst_13701 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13708_13736 = state_13706__$1;
(statearr_13708_13736[(2)] = inst_13701);

(statearr_13708_13736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (1))){
var inst_13683 = null;
var state_13706__$1 = (function (){var statearr_13709 = state_13706;
(statearr_13709[(7)] = inst_13683);

return statearr_13709;
})();
var statearr_13710_13737 = state_13706__$1;
(statearr_13710_13737[(2)] = null);

(statearr_13710_13737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (4))){
var inst_13686 = (state_13706[(8)]);
var inst_13686__$1 = (state_13706[(2)]);
var inst_13687 = (inst_13686__$1 == null);
var inst_13688 = cljs.core.not.call(null,inst_13687);
var state_13706__$1 = (function (){var statearr_13711 = state_13706;
(statearr_13711[(8)] = inst_13686__$1);

return statearr_13711;
})();
if(inst_13688){
var statearr_13712_13738 = state_13706__$1;
(statearr_13712_13738[(1)] = (5));

} else {
var statearr_13713_13739 = state_13706__$1;
(statearr_13713_13739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (6))){
var state_13706__$1 = state_13706;
var statearr_13714_13740 = state_13706__$1;
(statearr_13714_13740[(2)] = null);

(statearr_13714_13740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (3))){
var inst_13703 = (state_13706[(2)]);
var inst_13704 = cljs.core.async.close_BANG_.call(null,out);
var state_13706__$1 = (function (){var statearr_13715 = state_13706;
(statearr_13715[(9)] = inst_13703);

return statearr_13715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else {
if((state_val_13707 === (2))){
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13706__$1,(4),ch);
} else {
if((state_val_13707 === (11))){
var inst_13686 = (state_13706[(8)]);
var inst_13695 = (state_13706[(2)]);
var inst_13683 = inst_13686;
var state_13706__$1 = (function (){var statearr_13716 = state_13706;
(statearr_13716[(10)] = inst_13695);

(statearr_13716[(7)] = inst_13683);

return statearr_13716;
})();
var statearr_13717_13741 = state_13706__$1;
(statearr_13717_13741[(2)] = null);

(statearr_13717_13741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (9))){
var inst_13686 = (state_13706[(8)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,(11),out,inst_13686);
} else {
if((state_val_13707 === (5))){
var inst_13686 = (state_13706[(8)]);
var inst_13683 = (state_13706[(7)]);
var inst_13690 = cljs.core._EQ_.call(null,inst_13686,inst_13683);
var state_13706__$1 = state_13706;
if(inst_13690){
var statearr_13719_13742 = state_13706__$1;
(statearr_13719_13742[(1)] = (8));

} else {
var statearr_13720_13743 = state_13706__$1;
(statearr_13720_13743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (10))){
var inst_13698 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13721_13744 = state_13706__$1;
(statearr_13721_13744[(2)] = inst_13698);

(statearr_13721_13744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (8))){
var inst_13683 = (state_13706[(7)]);
var tmp13718 = inst_13683;
var inst_13683__$1 = tmp13718;
var state_13706__$1 = (function (){var statearr_13722 = state_13706;
(statearr_13722[(7)] = inst_13683__$1);

return statearr_13722;
})();
var statearr_13723_13745 = state_13706__$1;
(statearr_13723_13745[(2)] = null);

(statearr_13723_13745[(1)] = (2));


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
});})(c__11199__auto___13735,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13735,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13727[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13727[(1)] = (1));

return statearr_13727;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13706){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13728){if((e13728 instanceof Object)){
var ex__11091__auto__ = e13728;
var statearr_13729_13746 = state_13706;
(statearr_13729_13746[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13747 = state_13706;
state_13706 = G__13747;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13735,out))
})();
var state__11201__auto__ = (function (){var statearr_13730 = f__11200__auto__.call(null);
(statearr_13730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13735);

return statearr_13730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13748 = [];
var len__6226__auto___13818 = arguments.length;
var i__6227__auto___13819 = (0);
while(true){
if((i__6227__auto___13819 < len__6226__auto___13818)){
args13748.push((arguments[i__6227__auto___13819]));

var G__13820 = (i__6227__auto___13819 + (1));
i__6227__auto___13819 = G__13820;
continue;
} else {
}
break;
}

var G__13750 = args13748.length;
switch (G__13750) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13748.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13822,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13822,out){
return (function (state_13788){
var state_val_13789 = (state_13788[(1)]);
if((state_val_13789 === (7))){
var inst_13784 = (state_13788[(2)]);
var state_13788__$1 = state_13788;
var statearr_13790_13823 = state_13788__$1;
(statearr_13790_13823[(2)] = inst_13784);

(statearr_13790_13823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (1))){
var inst_13751 = (new Array(n));
var inst_13752 = inst_13751;
var inst_13753 = (0);
var state_13788__$1 = (function (){var statearr_13791 = state_13788;
(statearr_13791[(7)] = inst_13753);

(statearr_13791[(8)] = inst_13752);

return statearr_13791;
})();
var statearr_13792_13824 = state_13788__$1;
(statearr_13792_13824[(2)] = null);

(statearr_13792_13824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (4))){
var inst_13756 = (state_13788[(9)]);
var inst_13756__$1 = (state_13788[(2)]);
var inst_13757 = (inst_13756__$1 == null);
var inst_13758 = cljs.core.not.call(null,inst_13757);
var state_13788__$1 = (function (){var statearr_13793 = state_13788;
(statearr_13793[(9)] = inst_13756__$1);

return statearr_13793;
})();
if(inst_13758){
var statearr_13794_13825 = state_13788__$1;
(statearr_13794_13825[(1)] = (5));

} else {
var statearr_13795_13826 = state_13788__$1;
(statearr_13795_13826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (15))){
var inst_13778 = (state_13788[(2)]);
var state_13788__$1 = state_13788;
var statearr_13796_13827 = state_13788__$1;
(statearr_13796_13827[(2)] = inst_13778);

(statearr_13796_13827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (13))){
var state_13788__$1 = state_13788;
var statearr_13797_13828 = state_13788__$1;
(statearr_13797_13828[(2)] = null);

(statearr_13797_13828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (6))){
var inst_13753 = (state_13788[(7)]);
var inst_13774 = (inst_13753 > (0));
var state_13788__$1 = state_13788;
if(cljs.core.truth_(inst_13774)){
var statearr_13798_13829 = state_13788__$1;
(statearr_13798_13829[(1)] = (12));

} else {
var statearr_13799_13830 = state_13788__$1;
(statearr_13799_13830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (3))){
var inst_13786 = (state_13788[(2)]);
var state_13788__$1 = state_13788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13788__$1,inst_13786);
} else {
if((state_val_13789 === (12))){
var inst_13752 = (state_13788[(8)]);
var inst_13776 = cljs.core.vec.call(null,inst_13752);
var state_13788__$1 = state_13788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13788__$1,(15),out,inst_13776);
} else {
if((state_val_13789 === (2))){
var state_13788__$1 = state_13788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13788__$1,(4),ch);
} else {
if((state_val_13789 === (11))){
var inst_13768 = (state_13788[(2)]);
var inst_13769 = (new Array(n));
var inst_13752 = inst_13769;
var inst_13753 = (0);
var state_13788__$1 = (function (){var statearr_13800 = state_13788;
(statearr_13800[(7)] = inst_13753);

(statearr_13800[(8)] = inst_13752);

(statearr_13800[(10)] = inst_13768);

return statearr_13800;
})();
var statearr_13801_13831 = state_13788__$1;
(statearr_13801_13831[(2)] = null);

(statearr_13801_13831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (9))){
var inst_13752 = (state_13788[(8)]);
var inst_13766 = cljs.core.vec.call(null,inst_13752);
var state_13788__$1 = state_13788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13788__$1,(11),out,inst_13766);
} else {
if((state_val_13789 === (5))){
var inst_13761 = (state_13788[(11)]);
var inst_13753 = (state_13788[(7)]);
var inst_13752 = (state_13788[(8)]);
var inst_13756 = (state_13788[(9)]);
var inst_13760 = (inst_13752[inst_13753] = inst_13756);
var inst_13761__$1 = (inst_13753 + (1));
var inst_13762 = (inst_13761__$1 < n);
var state_13788__$1 = (function (){var statearr_13802 = state_13788;
(statearr_13802[(11)] = inst_13761__$1);

(statearr_13802[(12)] = inst_13760);

return statearr_13802;
})();
if(cljs.core.truth_(inst_13762)){
var statearr_13803_13832 = state_13788__$1;
(statearr_13803_13832[(1)] = (8));

} else {
var statearr_13804_13833 = state_13788__$1;
(statearr_13804_13833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (14))){
var inst_13781 = (state_13788[(2)]);
var inst_13782 = cljs.core.async.close_BANG_.call(null,out);
var state_13788__$1 = (function (){var statearr_13806 = state_13788;
(statearr_13806[(13)] = inst_13781);

return statearr_13806;
})();
var statearr_13807_13834 = state_13788__$1;
(statearr_13807_13834[(2)] = inst_13782);

(statearr_13807_13834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (10))){
var inst_13772 = (state_13788[(2)]);
var state_13788__$1 = state_13788;
var statearr_13808_13835 = state_13788__$1;
(statearr_13808_13835[(2)] = inst_13772);

(statearr_13808_13835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13789 === (8))){
var inst_13761 = (state_13788[(11)]);
var inst_13752 = (state_13788[(8)]);
var tmp13805 = inst_13752;
var inst_13752__$1 = tmp13805;
var inst_13753 = inst_13761;
var state_13788__$1 = (function (){var statearr_13809 = state_13788;
(statearr_13809[(7)] = inst_13753);

(statearr_13809[(8)] = inst_13752__$1);

return statearr_13809;
})();
var statearr_13810_13836 = state_13788__$1;
(statearr_13810_13836[(2)] = null);

(statearr_13810_13836[(1)] = (2));


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
});})(c__11199__auto___13822,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13822,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13814[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13814[(1)] = (1));

return statearr_13814;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13788){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13815){if((e13815 instanceof Object)){
var ex__11091__auto__ = e13815;
var statearr_13816_13837 = state_13788;
(statearr_13816_13837[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13838 = state_13788;
state_13788 = G__13838;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13822,out))
})();
var state__11201__auto__ = (function (){var statearr_13817 = f__11200__auto__.call(null);
(statearr_13817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13822);

return statearr_13817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13822,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13839 = [];
var len__6226__auto___13913 = arguments.length;
var i__6227__auto___13914 = (0);
while(true){
if((i__6227__auto___13914 < len__6226__auto___13913)){
args13839.push((arguments[i__6227__auto___13914]));

var G__13915 = (i__6227__auto___13914 + (1));
i__6227__auto___13914 = G__13915;
continue;
} else {
}
break;
}

var G__13841 = args13839.length;
switch (G__13841) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13839.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11199__auto___13917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11199__auto___13917,out){
return (function (){
var f__11200__auto__ = (function (){var switch__11087__auto__ = ((function (c__11199__auto___13917,out){
return (function (state_13883){
var state_val_13884 = (state_13883[(1)]);
if((state_val_13884 === (7))){
var inst_13879 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
var statearr_13885_13918 = state_13883__$1;
(statearr_13885_13918[(2)] = inst_13879);

(statearr_13885_13918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (1))){
var inst_13842 = [];
var inst_13843 = inst_13842;
var inst_13844 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13883__$1 = (function (){var statearr_13886 = state_13883;
(statearr_13886[(7)] = inst_13844);

(statearr_13886[(8)] = inst_13843);

return statearr_13886;
})();
var statearr_13887_13919 = state_13883__$1;
(statearr_13887_13919[(2)] = null);

(statearr_13887_13919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (4))){
var inst_13847 = (state_13883[(9)]);
var inst_13847__$1 = (state_13883[(2)]);
var inst_13848 = (inst_13847__$1 == null);
var inst_13849 = cljs.core.not.call(null,inst_13848);
var state_13883__$1 = (function (){var statearr_13888 = state_13883;
(statearr_13888[(9)] = inst_13847__$1);

return statearr_13888;
})();
if(inst_13849){
var statearr_13889_13920 = state_13883__$1;
(statearr_13889_13920[(1)] = (5));

} else {
var statearr_13890_13921 = state_13883__$1;
(statearr_13890_13921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (15))){
var inst_13873 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
var statearr_13891_13922 = state_13883__$1;
(statearr_13891_13922[(2)] = inst_13873);

(statearr_13891_13922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (13))){
var state_13883__$1 = state_13883;
var statearr_13892_13923 = state_13883__$1;
(statearr_13892_13923[(2)] = null);

(statearr_13892_13923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (6))){
var inst_13843 = (state_13883[(8)]);
var inst_13868 = inst_13843.length;
var inst_13869 = (inst_13868 > (0));
var state_13883__$1 = state_13883;
if(cljs.core.truth_(inst_13869)){
var statearr_13893_13924 = state_13883__$1;
(statearr_13893_13924[(1)] = (12));

} else {
var statearr_13894_13925 = state_13883__$1;
(statearr_13894_13925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (3))){
var inst_13881 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13883__$1,inst_13881);
} else {
if((state_val_13884 === (12))){
var inst_13843 = (state_13883[(8)]);
var inst_13871 = cljs.core.vec.call(null,inst_13843);
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13883__$1,(15),out,inst_13871);
} else {
if((state_val_13884 === (2))){
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13883__$1,(4),ch);
} else {
if((state_val_13884 === (11))){
var inst_13851 = (state_13883[(10)]);
var inst_13847 = (state_13883[(9)]);
var inst_13861 = (state_13883[(2)]);
var inst_13862 = [];
var inst_13863 = inst_13862.push(inst_13847);
var inst_13843 = inst_13862;
var inst_13844 = inst_13851;
var state_13883__$1 = (function (){var statearr_13895 = state_13883;
(statearr_13895[(7)] = inst_13844);

(statearr_13895[(11)] = inst_13863);

(statearr_13895[(12)] = inst_13861);

(statearr_13895[(8)] = inst_13843);

return statearr_13895;
})();
var statearr_13896_13926 = state_13883__$1;
(statearr_13896_13926[(2)] = null);

(statearr_13896_13926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (9))){
var inst_13843 = (state_13883[(8)]);
var inst_13859 = cljs.core.vec.call(null,inst_13843);
var state_13883__$1 = state_13883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13883__$1,(11),out,inst_13859);
} else {
if((state_val_13884 === (5))){
var inst_13844 = (state_13883[(7)]);
var inst_13851 = (state_13883[(10)]);
var inst_13847 = (state_13883[(9)]);
var inst_13851__$1 = f.call(null,inst_13847);
var inst_13852 = cljs.core._EQ_.call(null,inst_13851__$1,inst_13844);
var inst_13853 = cljs.core.keyword_identical_QMARK_.call(null,inst_13844,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13854 = (inst_13852) || (inst_13853);
var state_13883__$1 = (function (){var statearr_13897 = state_13883;
(statearr_13897[(10)] = inst_13851__$1);

return statearr_13897;
})();
if(cljs.core.truth_(inst_13854)){
var statearr_13898_13927 = state_13883__$1;
(statearr_13898_13927[(1)] = (8));

} else {
var statearr_13899_13928 = state_13883__$1;
(statearr_13899_13928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (14))){
var inst_13876 = (state_13883[(2)]);
var inst_13877 = cljs.core.async.close_BANG_.call(null,out);
var state_13883__$1 = (function (){var statearr_13901 = state_13883;
(statearr_13901[(13)] = inst_13876);

return statearr_13901;
})();
var statearr_13902_13929 = state_13883__$1;
(statearr_13902_13929[(2)] = inst_13877);

(statearr_13902_13929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (10))){
var inst_13866 = (state_13883[(2)]);
var state_13883__$1 = state_13883;
var statearr_13903_13930 = state_13883__$1;
(statearr_13903_13930[(2)] = inst_13866);

(statearr_13903_13930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13884 === (8))){
var inst_13851 = (state_13883[(10)]);
var inst_13847 = (state_13883[(9)]);
var inst_13843 = (state_13883[(8)]);
var inst_13856 = inst_13843.push(inst_13847);
var tmp13900 = inst_13843;
var inst_13843__$1 = tmp13900;
var inst_13844 = inst_13851;
var state_13883__$1 = (function (){var statearr_13904 = state_13883;
(statearr_13904[(7)] = inst_13844);

(statearr_13904[(14)] = inst_13856);

(statearr_13904[(8)] = inst_13843__$1);

return statearr_13904;
})();
var statearr_13905_13931 = state_13883__$1;
(statearr_13905_13931[(2)] = null);

(statearr_13905_13931[(1)] = (2));


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
});})(c__11199__auto___13917,out))
;
return ((function (switch__11087__auto__,c__11199__auto___13917,out){
return (function() {
var cljs$core$async$state_machine__11088__auto__ = null;
var cljs$core$async$state_machine__11088__auto____0 = (function (){
var statearr_13909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13909[(0)] = cljs$core$async$state_machine__11088__auto__);

(statearr_13909[(1)] = (1));

return statearr_13909;
});
var cljs$core$async$state_machine__11088__auto____1 = (function (state_13883){
while(true){
var ret_value__11089__auto__ = (function (){try{while(true){
var result__11090__auto__ = switch__11087__auto__.call(null,state_13883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11090__auto__;
}
break;
}
}catch (e13910){if((e13910 instanceof Object)){
var ex__11091__auto__ = e13910;
var statearr_13911_13932 = state_13883;
(statearr_13911_13932[(5)] = ex__11091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13933 = state_13883;
state_13883 = G__13933;
continue;
} else {
return ret_value__11089__auto__;
}
break;
}
});
cljs$core$async$state_machine__11088__auto__ = function(state_13883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11088__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11088__auto____1.call(this,state_13883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11088__auto____0;
cljs$core$async$state_machine__11088__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11088__auto____1;
return cljs$core$async$state_machine__11088__auto__;
})()
;})(switch__11087__auto__,c__11199__auto___13917,out))
})();
var state__11201__auto__ = (function (){var statearr_13912 = f__11200__auto__.call(null);
(statearr_13912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11199__auto___13917);

return statearr_13912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11201__auto__);
});})(c__11199__auto___13917,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map