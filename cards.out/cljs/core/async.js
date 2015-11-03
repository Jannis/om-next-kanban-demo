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
if(typeof cljs.core.async.t_cljs$core$async17195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17195 = (function (fn_handler,f,meta17196){
this.fn_handler = fn_handler;
this.f = f;
this.meta17196 = meta17196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17197,meta17196__$1){
var self__ = this;
var _17197__$1 = this;
return (new cljs.core.async.t_cljs$core$async17195(self__.fn_handler,self__.f,meta17196__$1));
});

cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17197){
var self__ = this;
var _17197__$1 = this;
return self__.meta17196;
});

cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17196","meta17196",-1168708495,null)], null);
});

cljs.core.async.t_cljs$core$async17195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17195";

cljs.core.async.t_cljs$core$async17195.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17195");
});

cljs.core.async.__GT_t_cljs$core$async17195 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17195(fn_handler__$1,f__$1,meta17196){
return (new cljs.core.async.t_cljs$core$async17195(fn_handler__$1,f__$1,meta17196));
});

}

return (new cljs.core.async.t_cljs$core$async17195(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17200 = [];
var len__6152__auto___17203 = arguments.length;
var i__6153__auto___17204 = (0);
while(true){
if((i__6153__auto___17204 < len__6152__auto___17203)){
args17200.push((arguments[i__6153__auto___17204]));

var G__17205 = (i__6153__auto___17204 + (1));
i__6153__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var G__17202 = args17200.length;
switch (G__17202) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17200.length)].join('')));

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
var args17207 = [];
var len__6152__auto___17210 = arguments.length;
var i__6153__auto___17211 = (0);
while(true){
if((i__6153__auto___17211 < len__6152__auto___17210)){
args17207.push((arguments[i__6153__auto___17211]));

var G__17212 = (i__6153__auto___17211 + (1));
i__6153__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var G__17209 = args17207.length;
switch (G__17209) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17207.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17214 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17214);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17214,ret){
return (function (){
return fn1.call(null,val_17214);
});})(val_17214,ret))
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
var args17215 = [];
var len__6152__auto___17218 = arguments.length;
var i__6153__auto___17219 = (0);
while(true){
if((i__6153__auto___17219 < len__6152__auto___17218)){
args17215.push((arguments[i__6153__auto___17219]));

var G__17220 = (i__6153__auto___17219 + (1));
i__6153__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var G__17217 = args17215.length;
switch (G__17217) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17215.length)].join('')));

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
var n__5997__auto___17222 = n;
var x_17223 = (0);
while(true){
if((x_17223 < n__5997__auto___17222)){
(a[x_17223] = (0));

var G__17224 = (x_17223 + (1));
x_17223 = G__17224;
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

var G__17225 = (i + (1));
i = G__17225;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17229 = (function (alt_flag,flag,meta17230){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17230 = meta17230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17231,meta17230__$1){
var self__ = this;
var _17231__$1 = this;
return (new cljs.core.async.t_cljs$core$async17229(self__.alt_flag,self__.flag,meta17230__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17231){
var self__ = this;
var _17231__$1 = this;
return self__.meta17230;
});})(flag))
;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17229.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17230","meta17230",-713207607,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17229";

cljs.core.async.t_cljs$core$async17229.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17229");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17229 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17229(alt_flag__$1,flag__$1,meta17230){
return (new cljs.core.async.t_cljs$core$async17229(alt_flag__$1,flag__$1,meta17230));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17229(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17235 = (function (alt_handler,flag,cb,meta17236){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17236 = meta17236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17237,meta17236__$1){
var self__ = this;
var _17237__$1 = this;
return (new cljs.core.async.t_cljs$core$async17235(self__.alt_handler,self__.flag,self__.cb,meta17236__$1));
});

cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17237){
var self__ = this;
var _17237__$1 = this;
return self__.meta17236;
});

cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17236","meta17236",1332257062,null)], null);
});

cljs.core.async.t_cljs$core$async17235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17235";

cljs.core.async.t_cljs$core$async17235.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17235");
});

cljs.core.async.__GT_t_cljs$core$async17235 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17235(alt_handler__$1,flag__$1,cb__$1,meta17236){
return (new cljs.core.async.t_cljs$core$async17235(alt_handler__$1,flag__$1,cb__$1,meta17236));
});

}

return (new cljs.core.async.t_cljs$core$async17235(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17238_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17238_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17239_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17239_SHARP_,port], null));
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
var G__17240 = (i + (1));
i = G__17240;
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
var len__6152__auto___17246 = arguments.length;
var i__6153__auto___17247 = (0);
while(true){
if((i__6153__auto___17247 < len__6152__auto___17246)){
args__6159__auto__.push((arguments[i__6153__auto___17247]));

var G__17248 = (i__6153__auto___17247 + (1));
i__6153__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17243){
var map__17244 = p__17243;
var map__17244__$1 = ((((!((map__17244 == null)))?((((map__17244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17244):map__17244);
var opts = map__17244__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17241){
var G__17242 = cljs.core.first.call(null,seq17241);
var seq17241__$1 = cljs.core.next.call(null,seq17241);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17242,seq17241__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17249 = [];
var len__6152__auto___17299 = arguments.length;
var i__6153__auto___17300 = (0);
while(true){
if((i__6153__auto___17300 < len__6152__auto___17299)){
args17249.push((arguments[i__6153__auto___17300]));

var G__17301 = (i__6153__auto___17300 + (1));
i__6153__auto___17300 = G__17301;
continue;
} else {
}
break;
}

var G__17251 = args17249.length;
switch (G__17251) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17249.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9944__auto___17303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17303){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17303){
return (function (state_17275){
var state_val_17276 = (state_17275[(1)]);
if((state_val_17276 === (7))){
var inst_17271 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17277_17304 = state_17275__$1;
(statearr_17277_17304[(2)] = inst_17271);

(statearr_17277_17304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (1))){
var state_17275__$1 = state_17275;
var statearr_17278_17305 = state_17275__$1;
(statearr_17278_17305[(2)] = null);

(statearr_17278_17305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (4))){
var inst_17254 = (state_17275[(7)]);
var inst_17254__$1 = (state_17275[(2)]);
var inst_17255 = (inst_17254__$1 == null);
var state_17275__$1 = (function (){var statearr_17279 = state_17275;
(statearr_17279[(7)] = inst_17254__$1);

return statearr_17279;
})();
if(cljs.core.truth_(inst_17255)){
var statearr_17280_17306 = state_17275__$1;
(statearr_17280_17306[(1)] = (5));

} else {
var statearr_17281_17307 = state_17275__$1;
(statearr_17281_17307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (13))){
var state_17275__$1 = state_17275;
var statearr_17282_17308 = state_17275__$1;
(statearr_17282_17308[(2)] = null);

(statearr_17282_17308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (6))){
var inst_17254 = (state_17275[(7)]);
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17275__$1,(11),to,inst_17254);
} else {
if((state_val_17276 === (3))){
var inst_17273 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17275__$1,inst_17273);
} else {
if((state_val_17276 === (12))){
var state_17275__$1 = state_17275;
var statearr_17283_17309 = state_17275__$1;
(statearr_17283_17309[(2)] = null);

(statearr_17283_17309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (2))){
var state_17275__$1 = state_17275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17275__$1,(4),from);
} else {
if((state_val_17276 === (11))){
var inst_17264 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
if(cljs.core.truth_(inst_17264)){
var statearr_17284_17310 = state_17275__$1;
(statearr_17284_17310[(1)] = (12));

} else {
var statearr_17285_17311 = state_17275__$1;
(statearr_17285_17311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (9))){
var state_17275__$1 = state_17275;
var statearr_17286_17312 = state_17275__$1;
(statearr_17286_17312[(2)] = null);

(statearr_17286_17312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (5))){
var state_17275__$1 = state_17275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17287_17313 = state_17275__$1;
(statearr_17287_17313[(1)] = (8));

} else {
var statearr_17288_17314 = state_17275__$1;
(statearr_17288_17314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (14))){
var inst_17269 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17289_17315 = state_17275__$1;
(statearr_17289_17315[(2)] = inst_17269);

(statearr_17289_17315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (10))){
var inst_17261 = (state_17275[(2)]);
var state_17275__$1 = state_17275;
var statearr_17290_17316 = state_17275__$1;
(statearr_17290_17316[(2)] = inst_17261);

(statearr_17290_17316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17276 === (8))){
var inst_17258 = cljs.core.async.close_BANG_.call(null,to);
var state_17275__$1 = state_17275;
var statearr_17291_17317 = state_17275__$1;
(statearr_17291_17317[(2)] = inst_17258);

(statearr_17291_17317[(1)] = (10));


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
});})(c__9944__auto___17303))
;
return ((function (switch__9879__auto__,c__9944__auto___17303){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_17295 = [null,null,null,null,null,null,null,null];
(statearr_17295[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_17295[(1)] = (1));

return statearr_17295;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_17275){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17296){if((e17296 instanceof Object)){
var ex__9883__auto__ = e17296;
var statearr_17297_17318 = state_17275;
(statearr_17297_17318[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17319 = state_17275;
state_17275 = G__17319;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_17275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_17275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17303))
})();
var state__9946__auto__ = (function (){var statearr_17298 = f__9945__auto__.call(null);
(statearr_17298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17303);

return statearr_17298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17303))
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
return (function (p__17503){
var vec__17504 = p__17503;
var v = cljs.core.nth.call(null,vec__17504,(0),null);
var p = cljs.core.nth.call(null,vec__17504,(1),null);
var job = vec__17504;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9944__auto___17686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results){
return (function (state_17509){
var state_val_17510 = (state_17509[(1)]);
if((state_val_17510 === (1))){
var state_17509__$1 = state_17509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17509__$1,(2),res,v);
} else {
if((state_val_17510 === (2))){
var inst_17506 = (state_17509[(2)]);
var inst_17507 = cljs.core.async.close_BANG_.call(null,res);
var state_17509__$1 = (function (){var statearr_17511 = state_17509;
(statearr_17511[(7)] = inst_17506);

return statearr_17511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17509__$1,inst_17507);
} else {
return null;
}
}
});})(c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results))
;
return ((function (switch__9879__auto__,c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17515 = [null,null,null,null,null,null,null,null];
(statearr_17515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17515[(1)] = (1));

return statearr_17515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17509){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17516){if((e17516 instanceof Object)){
var ex__9883__auto__ = e17516;
var statearr_17517_17687 = state_17509;
(statearr_17517_17687[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17688 = state_17509;
state_17509 = G__17688;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results))
})();
var state__9946__auto__ = (function (){var statearr_17518 = f__9945__auto__.call(null);
(statearr_17518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17686);

return statearr_17518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17686,res,vec__17504,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17519){
var vec__17520 = p__17519;
var v = cljs.core.nth.call(null,vec__17520,(0),null);
var p = cljs.core.nth.call(null,vec__17520,(1),null);
var job = vec__17520;
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
var n__5997__auto___17689 = n;
var __17690 = (0);
while(true){
if((__17690 < n__5997__auto___17689)){
var G__17521_17691 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17521_17691) {
case "compute":
var c__9944__auto___17693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17690,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (__17690,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function (state_17534){
var state_val_17535 = (state_17534[(1)]);
if((state_val_17535 === (1))){
var state_17534__$1 = state_17534;
var statearr_17536_17694 = state_17534__$1;
(statearr_17536_17694[(2)] = null);

(statearr_17536_17694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (2))){
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17534__$1,(4),jobs);
} else {
if((state_val_17535 === (3))){
var inst_17532 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17534__$1,inst_17532);
} else {
if((state_val_17535 === (4))){
var inst_17524 = (state_17534[(2)]);
var inst_17525 = process.call(null,inst_17524);
var state_17534__$1 = state_17534;
if(cljs.core.truth_(inst_17525)){
var statearr_17537_17695 = state_17534__$1;
(statearr_17537_17695[(1)] = (5));

} else {
var statearr_17538_17696 = state_17534__$1;
(statearr_17538_17696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (5))){
var state_17534__$1 = state_17534;
var statearr_17539_17697 = state_17534__$1;
(statearr_17539_17697[(2)] = null);

(statearr_17539_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (6))){
var state_17534__$1 = state_17534;
var statearr_17540_17698 = state_17534__$1;
(statearr_17540_17698[(2)] = null);

(statearr_17540_17698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17535 === (7))){
var inst_17530 = (state_17534[(2)]);
var state_17534__$1 = state_17534;
var statearr_17541_17699 = state_17534__$1;
(statearr_17541_17699[(2)] = inst_17530);

(statearr_17541_17699[(1)] = (3));


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
});})(__17690,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
;
return ((function (__17690,switch__9879__auto__,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17545 = [null,null,null,null,null,null,null];
(statearr_17545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17545[(1)] = (1));

return statearr_17545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17534){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17546){if((e17546 instanceof Object)){
var ex__9883__auto__ = e17546;
var statearr_17547_17700 = state_17534;
(statearr_17547_17700[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17701 = state_17534;
state_17534 = G__17701;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(__17690,switch__9879__auto__,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17548 = f__9945__auto__.call(null);
(statearr_17548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17693);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(__17690,c__9944__auto___17693,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
);


break;
case "async":
var c__9944__auto___17702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17690,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (__17690,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function (state_17561){
var state_val_17562 = (state_17561[(1)]);
if((state_val_17562 === (1))){
var state_17561__$1 = state_17561;
var statearr_17563_17703 = state_17561__$1;
(statearr_17563_17703[(2)] = null);

(statearr_17563_17703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (2))){
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17561__$1,(4),jobs);
} else {
if((state_val_17562 === (3))){
var inst_17559 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17561__$1,inst_17559);
} else {
if((state_val_17562 === (4))){
var inst_17551 = (state_17561[(2)]);
var inst_17552 = async.call(null,inst_17551);
var state_17561__$1 = state_17561;
if(cljs.core.truth_(inst_17552)){
var statearr_17564_17704 = state_17561__$1;
(statearr_17564_17704[(1)] = (5));

} else {
var statearr_17565_17705 = state_17561__$1;
(statearr_17565_17705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (5))){
var state_17561__$1 = state_17561;
var statearr_17566_17706 = state_17561__$1;
(statearr_17566_17706[(2)] = null);

(statearr_17566_17706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (6))){
var state_17561__$1 = state_17561;
var statearr_17567_17707 = state_17561__$1;
(statearr_17567_17707[(2)] = null);

(statearr_17567_17707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (7))){
var inst_17557 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17568_17708 = state_17561__$1;
(statearr_17568_17708[(2)] = inst_17557);

(statearr_17568_17708[(1)] = (3));


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
});})(__17690,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
;
return ((function (__17690,switch__9879__auto__,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17572 = [null,null,null,null,null,null,null];
(statearr_17572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17572[(1)] = (1));

return statearr_17572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17561){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17573){if((e17573 instanceof Object)){
var ex__9883__auto__ = e17573;
var statearr_17574_17709 = state_17561;
(statearr_17574_17709[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17710 = state_17561;
state_17561 = G__17710;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(__17690,switch__9879__auto__,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17575 = f__9945__auto__.call(null);
(statearr_17575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17702);

return statearr_17575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(__17690,c__9944__auto___17702,G__17521_17691,n__5997__auto___17689,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17711 = (__17690 + (1));
__17690 = G__17711;
continue;
} else {
}
break;
}

var c__9944__auto___17712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17712,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17712,jobs,results,process,async){
return (function (state_17597){
var state_val_17598 = (state_17597[(1)]);
if((state_val_17598 === (1))){
var state_17597__$1 = state_17597;
var statearr_17599_17713 = state_17597__$1;
(statearr_17599_17713[(2)] = null);

(statearr_17599_17713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (2))){
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17597__$1,(4),from);
} else {
if((state_val_17598 === (3))){
var inst_17595 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17597__$1,inst_17595);
} else {
if((state_val_17598 === (4))){
var inst_17578 = (state_17597[(7)]);
var inst_17578__$1 = (state_17597[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var state_17597__$1 = (function (){var statearr_17600 = state_17597;
(statearr_17600[(7)] = inst_17578__$1);

return statearr_17600;
})();
if(cljs.core.truth_(inst_17579)){
var statearr_17601_17714 = state_17597__$1;
(statearr_17601_17714[(1)] = (5));

} else {
var statearr_17602_17715 = state_17597__$1;
(statearr_17602_17715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (5))){
var inst_17581 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17597__$1 = state_17597;
var statearr_17603_17716 = state_17597__$1;
(statearr_17603_17716[(2)] = inst_17581);

(statearr_17603_17716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (6))){
var inst_17583 = (state_17597[(8)]);
var inst_17578 = (state_17597[(7)]);
var inst_17583__$1 = cljs.core.async.chan.call(null,(1));
var inst_17584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17585 = [inst_17578,inst_17583__$1];
var inst_17586 = (new cljs.core.PersistentVector(null,2,(5),inst_17584,inst_17585,null));
var state_17597__$1 = (function (){var statearr_17604 = state_17597;
(statearr_17604[(8)] = inst_17583__$1);

return statearr_17604;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17597__$1,(8),jobs,inst_17586);
} else {
if((state_val_17598 === (7))){
var inst_17593 = (state_17597[(2)]);
var state_17597__$1 = state_17597;
var statearr_17605_17717 = state_17597__$1;
(statearr_17605_17717[(2)] = inst_17593);

(statearr_17605_17717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17598 === (8))){
var inst_17583 = (state_17597[(8)]);
var inst_17588 = (state_17597[(2)]);
var state_17597__$1 = (function (){var statearr_17606 = state_17597;
(statearr_17606[(9)] = inst_17588);

return statearr_17606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17597__$1,(9),results,inst_17583);
} else {
if((state_val_17598 === (9))){
var inst_17590 = (state_17597[(2)]);
var state_17597__$1 = (function (){var statearr_17607 = state_17597;
(statearr_17607[(10)] = inst_17590);

return statearr_17607;
})();
var statearr_17608_17718 = state_17597__$1;
(statearr_17608_17718[(2)] = null);

(statearr_17608_17718[(1)] = (2));


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
});})(c__9944__auto___17712,jobs,results,process,async))
;
return ((function (switch__9879__auto__,c__9944__auto___17712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0 = (function (){
var statearr_17612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17612[(1)] = (1));

return statearr_17612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17597){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17613){if((e17613 instanceof Object)){
var ex__9883__auto__ = e17613;
var statearr_17614_17719 = state_17597;
(statearr_17614_17719[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17720 = state_17597;
state_17597 = G__17720;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17712,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17615 = f__9945__auto__.call(null);
(statearr_17615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17712);

return statearr_17615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17712,jobs,results,process,async))
);


var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__,jobs,results,process,async){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__,jobs,results,process,async){
return (function (state_17653){
var state_val_17654 = (state_17653[(1)]);
if((state_val_17654 === (7))){
var inst_17649 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
var statearr_17655_17721 = state_17653__$1;
(statearr_17655_17721[(2)] = inst_17649);

(statearr_17655_17721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (20))){
var state_17653__$1 = state_17653;
var statearr_17656_17722 = state_17653__$1;
(statearr_17656_17722[(2)] = null);

(statearr_17656_17722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (1))){
var state_17653__$1 = state_17653;
var statearr_17657_17723 = state_17653__$1;
(statearr_17657_17723[(2)] = null);

(statearr_17657_17723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (4))){
var inst_17618 = (state_17653[(7)]);
var inst_17618__$1 = (state_17653[(2)]);
var inst_17619 = (inst_17618__$1 == null);
var state_17653__$1 = (function (){var statearr_17658 = state_17653;
(statearr_17658[(7)] = inst_17618__$1);

return statearr_17658;
})();
if(cljs.core.truth_(inst_17619)){
var statearr_17659_17724 = state_17653__$1;
(statearr_17659_17724[(1)] = (5));

} else {
var statearr_17660_17725 = state_17653__$1;
(statearr_17660_17725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (15))){
var inst_17631 = (state_17653[(8)]);
var state_17653__$1 = state_17653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17653__$1,(18),to,inst_17631);
} else {
if((state_val_17654 === (21))){
var inst_17644 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
var statearr_17661_17726 = state_17653__$1;
(statearr_17661_17726[(2)] = inst_17644);

(statearr_17661_17726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (13))){
var inst_17646 = (state_17653[(2)]);
var state_17653__$1 = (function (){var statearr_17662 = state_17653;
(statearr_17662[(9)] = inst_17646);

return statearr_17662;
})();
var statearr_17663_17727 = state_17653__$1;
(statearr_17663_17727[(2)] = null);

(statearr_17663_17727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (6))){
var inst_17618 = (state_17653[(7)]);
var state_17653__$1 = state_17653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17653__$1,(11),inst_17618);
} else {
if((state_val_17654 === (17))){
var inst_17639 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
if(cljs.core.truth_(inst_17639)){
var statearr_17664_17728 = state_17653__$1;
(statearr_17664_17728[(1)] = (19));

} else {
var statearr_17665_17729 = state_17653__$1;
(statearr_17665_17729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (3))){
var inst_17651 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17653__$1,inst_17651);
} else {
if((state_val_17654 === (12))){
var inst_17628 = (state_17653[(10)]);
var state_17653__$1 = state_17653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17653__$1,(14),inst_17628);
} else {
if((state_val_17654 === (2))){
var state_17653__$1 = state_17653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17653__$1,(4),results);
} else {
if((state_val_17654 === (19))){
var state_17653__$1 = state_17653;
var statearr_17666_17730 = state_17653__$1;
(statearr_17666_17730[(2)] = null);

(statearr_17666_17730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (11))){
var inst_17628 = (state_17653[(2)]);
var state_17653__$1 = (function (){var statearr_17667 = state_17653;
(statearr_17667[(10)] = inst_17628);

return statearr_17667;
})();
var statearr_17668_17731 = state_17653__$1;
(statearr_17668_17731[(2)] = null);

(statearr_17668_17731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (9))){
var state_17653__$1 = state_17653;
var statearr_17669_17732 = state_17653__$1;
(statearr_17669_17732[(2)] = null);

(statearr_17669_17732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (5))){
var state_17653__$1 = state_17653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17670_17733 = state_17653__$1;
(statearr_17670_17733[(1)] = (8));

} else {
var statearr_17671_17734 = state_17653__$1;
(statearr_17671_17734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (14))){
var inst_17631 = (state_17653[(8)]);
var inst_17633 = (state_17653[(11)]);
var inst_17631__$1 = (state_17653[(2)]);
var inst_17632 = (inst_17631__$1 == null);
var inst_17633__$1 = cljs.core.not.call(null,inst_17632);
var state_17653__$1 = (function (){var statearr_17672 = state_17653;
(statearr_17672[(8)] = inst_17631__$1);

(statearr_17672[(11)] = inst_17633__$1);

return statearr_17672;
})();
if(inst_17633__$1){
var statearr_17673_17735 = state_17653__$1;
(statearr_17673_17735[(1)] = (15));

} else {
var statearr_17674_17736 = state_17653__$1;
(statearr_17674_17736[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (16))){
var inst_17633 = (state_17653[(11)]);
var state_17653__$1 = state_17653;
var statearr_17675_17737 = state_17653__$1;
(statearr_17675_17737[(2)] = inst_17633);

(statearr_17675_17737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (10))){
var inst_17625 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
var statearr_17676_17738 = state_17653__$1;
(statearr_17676_17738[(2)] = inst_17625);

(statearr_17676_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (18))){
var inst_17636 = (state_17653[(2)]);
var state_17653__$1 = state_17653;
var statearr_17677_17739 = state_17653__$1;
(statearr_17677_17739[(2)] = inst_17636);

(statearr_17677_17739[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17654 === (8))){
var inst_17622 = cljs.core.async.close_BANG_.call(null,to);
var state_17653__$1 = state_17653;
var statearr_17678_17740 = state_17653__$1;
(statearr_17678_17740[(2)] = inst_17622);

(statearr_17678_17740[(1)] = (10));


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
var statearr_17682 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__);

(statearr_17682[(1)] = (1));

return statearr_17682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1 = (function (state_17653){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17683){if((e17683 instanceof Object)){
var ex__9883__auto__ = e17683;
var statearr_17684_17741 = state_17653;
(statearr_17684_17741[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17742 = state_17653;
state_17653 = G__17742;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__ = function(state_17653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1.call(this,state_17653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__,jobs,results,process,async))
})();
var state__9946__auto__ = (function (){var statearr_17685 = f__9945__auto__.call(null);
(statearr_17685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_17685;
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
var args17743 = [];
var len__6152__auto___17746 = arguments.length;
var i__6153__auto___17747 = (0);
while(true){
if((i__6153__auto___17747 < len__6152__auto___17746)){
args17743.push((arguments[i__6153__auto___17747]));

var G__17748 = (i__6153__auto___17747 + (1));
i__6153__auto___17747 = G__17748;
continue;
} else {
}
break;
}

var G__17745 = args17743.length;
switch (G__17745) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17743.length)].join('')));

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
var args17750 = [];
var len__6152__auto___17753 = arguments.length;
var i__6153__auto___17754 = (0);
while(true){
if((i__6153__auto___17754 < len__6152__auto___17753)){
args17750.push((arguments[i__6153__auto___17754]));

var G__17755 = (i__6153__auto___17754 + (1));
i__6153__auto___17754 = G__17755;
continue;
} else {
}
break;
}

var G__17752 = args17750.length;
switch (G__17752) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17750.length)].join('')));

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
var args17757 = [];
var len__6152__auto___17810 = arguments.length;
var i__6153__auto___17811 = (0);
while(true){
if((i__6153__auto___17811 < len__6152__auto___17810)){
args17757.push((arguments[i__6153__auto___17811]));

var G__17812 = (i__6153__auto___17811 + (1));
i__6153__auto___17811 = G__17812;
continue;
} else {
}
break;
}

var G__17759 = args17757.length;
switch (G__17759) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17757.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9944__auto___17814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___17814,tc,fc){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___17814,tc,fc){
return (function (state_17785){
var state_val_17786 = (state_17785[(1)]);
if((state_val_17786 === (7))){
var inst_17781 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17787_17815 = state_17785__$1;
(statearr_17787_17815[(2)] = inst_17781);

(statearr_17787_17815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (1))){
var state_17785__$1 = state_17785;
var statearr_17788_17816 = state_17785__$1;
(statearr_17788_17816[(2)] = null);

(statearr_17788_17816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (4))){
var inst_17762 = (state_17785[(7)]);
var inst_17762__$1 = (state_17785[(2)]);
var inst_17763 = (inst_17762__$1 == null);
var state_17785__$1 = (function (){var statearr_17789 = state_17785;
(statearr_17789[(7)] = inst_17762__$1);

return statearr_17789;
})();
if(cljs.core.truth_(inst_17763)){
var statearr_17790_17817 = state_17785__$1;
(statearr_17790_17817[(1)] = (5));

} else {
var statearr_17791_17818 = state_17785__$1;
(statearr_17791_17818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (13))){
var state_17785__$1 = state_17785;
var statearr_17792_17819 = state_17785__$1;
(statearr_17792_17819[(2)] = null);

(statearr_17792_17819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (6))){
var inst_17762 = (state_17785[(7)]);
var inst_17768 = p.call(null,inst_17762);
var state_17785__$1 = state_17785;
if(cljs.core.truth_(inst_17768)){
var statearr_17793_17820 = state_17785__$1;
(statearr_17793_17820[(1)] = (9));

} else {
var statearr_17794_17821 = state_17785__$1;
(statearr_17794_17821[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (3))){
var inst_17783 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17785__$1,inst_17783);
} else {
if((state_val_17786 === (12))){
var state_17785__$1 = state_17785;
var statearr_17795_17822 = state_17785__$1;
(statearr_17795_17822[(2)] = null);

(statearr_17795_17822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (2))){
var state_17785__$1 = state_17785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17785__$1,(4),ch);
} else {
if((state_val_17786 === (11))){
var inst_17762 = (state_17785[(7)]);
var inst_17772 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17785__$1,(8),inst_17772,inst_17762);
} else {
if((state_val_17786 === (9))){
var state_17785__$1 = state_17785;
var statearr_17796_17823 = state_17785__$1;
(statearr_17796_17823[(2)] = tc);

(statearr_17796_17823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (5))){
var inst_17765 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17766 = cljs.core.async.close_BANG_.call(null,fc);
var state_17785__$1 = (function (){var statearr_17797 = state_17785;
(statearr_17797[(8)] = inst_17765);

return statearr_17797;
})();
var statearr_17798_17824 = state_17785__$1;
(statearr_17798_17824[(2)] = inst_17766);

(statearr_17798_17824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (14))){
var inst_17779 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
var statearr_17799_17825 = state_17785__$1;
(statearr_17799_17825[(2)] = inst_17779);

(statearr_17799_17825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (10))){
var state_17785__$1 = state_17785;
var statearr_17800_17826 = state_17785__$1;
(statearr_17800_17826[(2)] = fc);

(statearr_17800_17826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17786 === (8))){
var inst_17774 = (state_17785[(2)]);
var state_17785__$1 = state_17785;
if(cljs.core.truth_(inst_17774)){
var statearr_17801_17827 = state_17785__$1;
(statearr_17801_17827[(1)] = (12));

} else {
var statearr_17802_17828 = state_17785__$1;
(statearr_17802_17828[(1)] = (13));

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
});})(c__9944__auto___17814,tc,fc))
;
return ((function (switch__9879__auto__,c__9944__auto___17814,tc,fc){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_17806 = [null,null,null,null,null,null,null,null,null];
(statearr_17806[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_17806[(1)] = (1));

return statearr_17806;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_17785){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17807){if((e17807 instanceof Object)){
var ex__9883__auto__ = e17807;
var statearr_17808_17829 = state_17785;
(statearr_17808_17829[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17830 = state_17785;
state_17785 = G__17830;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_17785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_17785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___17814,tc,fc))
})();
var state__9946__auto__ = (function (){var statearr_17809 = f__9945__auto__.call(null);
(statearr_17809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___17814);

return statearr_17809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___17814,tc,fc))
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
return (function (state_17877){
var state_val_17878 = (state_17877[(1)]);
if((state_val_17878 === (1))){
var inst_17863 = init;
var state_17877__$1 = (function (){var statearr_17879 = state_17877;
(statearr_17879[(7)] = inst_17863);

return statearr_17879;
})();
var statearr_17880_17895 = state_17877__$1;
(statearr_17880_17895[(2)] = null);

(statearr_17880_17895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (2))){
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17877__$1,(4),ch);
} else {
if((state_val_17878 === (3))){
var inst_17875 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17877__$1,inst_17875);
} else {
if((state_val_17878 === (4))){
var inst_17866 = (state_17877[(8)]);
var inst_17866__$1 = (state_17877[(2)]);
var inst_17867 = (inst_17866__$1 == null);
var state_17877__$1 = (function (){var statearr_17881 = state_17877;
(statearr_17881[(8)] = inst_17866__$1);

return statearr_17881;
})();
if(cljs.core.truth_(inst_17867)){
var statearr_17882_17896 = state_17877__$1;
(statearr_17882_17896[(1)] = (5));

} else {
var statearr_17883_17897 = state_17877__$1;
(statearr_17883_17897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (5))){
var inst_17863 = (state_17877[(7)]);
var state_17877__$1 = state_17877;
var statearr_17884_17898 = state_17877__$1;
(statearr_17884_17898[(2)] = inst_17863);

(statearr_17884_17898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (6))){
var inst_17866 = (state_17877[(8)]);
var inst_17863 = (state_17877[(7)]);
var inst_17870 = f.call(null,inst_17863,inst_17866);
var inst_17863__$1 = inst_17870;
var state_17877__$1 = (function (){var statearr_17885 = state_17877;
(statearr_17885[(7)] = inst_17863__$1);

return statearr_17885;
})();
var statearr_17886_17899 = state_17877__$1;
(statearr_17886_17899[(2)] = null);

(statearr_17886_17899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (7))){
var inst_17873 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17887_17900 = state_17877__$1;
(statearr_17887_17900[(2)] = inst_17873);

(statearr_17887_17900[(1)] = (3));


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
var statearr_17891 = [null,null,null,null,null,null,null,null,null];
(statearr_17891[(0)] = cljs$core$async$reduce_$_state_machine__9880__auto__);

(statearr_17891[(1)] = (1));

return statearr_17891;
});
var cljs$core$async$reduce_$_state_machine__9880__auto____1 = (function (state_17877){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17892){if((e17892 instanceof Object)){
var ex__9883__auto__ = e17892;
var statearr_17893_17901 = state_17877;
(statearr_17893_17901[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17902 = state_17877;
state_17877 = G__17902;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9880__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9880__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9880__auto____0;
cljs$core$async$reduce_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9880__auto____1;
return cljs$core$async$reduce_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_17894 = f__9945__auto__.call(null);
(statearr_17894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_17894;
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
var args17903 = [];
var len__6152__auto___17955 = arguments.length;
var i__6153__auto___17956 = (0);
while(true){
if((i__6153__auto___17956 < len__6152__auto___17955)){
args17903.push((arguments[i__6153__auto___17956]));

var G__17957 = (i__6153__auto___17956 + (1));
i__6153__auto___17956 = G__17957;
continue;
} else {
}
break;
}

var G__17905 = args17903.length;
switch (G__17905) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17903.length)].join('')));

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
return (function (state_17930){
var state_val_17931 = (state_17930[(1)]);
if((state_val_17931 === (7))){
var inst_17912 = (state_17930[(2)]);
var state_17930__$1 = state_17930;
var statearr_17932_17959 = state_17930__$1;
(statearr_17932_17959[(2)] = inst_17912);

(statearr_17932_17959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (1))){
var inst_17906 = cljs.core.seq.call(null,coll);
var inst_17907 = inst_17906;
var state_17930__$1 = (function (){var statearr_17933 = state_17930;
(statearr_17933[(7)] = inst_17907);

return statearr_17933;
})();
var statearr_17934_17960 = state_17930__$1;
(statearr_17934_17960[(2)] = null);

(statearr_17934_17960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (4))){
var inst_17907 = (state_17930[(7)]);
var inst_17910 = cljs.core.first.call(null,inst_17907);
var state_17930__$1 = state_17930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17930__$1,(7),ch,inst_17910);
} else {
if((state_val_17931 === (13))){
var inst_17924 = (state_17930[(2)]);
var state_17930__$1 = state_17930;
var statearr_17935_17961 = state_17930__$1;
(statearr_17935_17961[(2)] = inst_17924);

(statearr_17935_17961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (6))){
var inst_17915 = (state_17930[(2)]);
var state_17930__$1 = state_17930;
if(cljs.core.truth_(inst_17915)){
var statearr_17936_17962 = state_17930__$1;
(statearr_17936_17962[(1)] = (8));

} else {
var statearr_17937_17963 = state_17930__$1;
(statearr_17937_17963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (3))){
var inst_17928 = (state_17930[(2)]);
var state_17930__$1 = state_17930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17930__$1,inst_17928);
} else {
if((state_val_17931 === (12))){
var state_17930__$1 = state_17930;
var statearr_17938_17964 = state_17930__$1;
(statearr_17938_17964[(2)] = null);

(statearr_17938_17964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (2))){
var inst_17907 = (state_17930[(7)]);
var state_17930__$1 = state_17930;
if(cljs.core.truth_(inst_17907)){
var statearr_17939_17965 = state_17930__$1;
(statearr_17939_17965[(1)] = (4));

} else {
var statearr_17940_17966 = state_17930__$1;
(statearr_17940_17966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (11))){
var inst_17921 = cljs.core.async.close_BANG_.call(null,ch);
var state_17930__$1 = state_17930;
var statearr_17941_17967 = state_17930__$1;
(statearr_17941_17967[(2)] = inst_17921);

(statearr_17941_17967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (9))){
var state_17930__$1 = state_17930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17942_17968 = state_17930__$1;
(statearr_17942_17968[(1)] = (11));

} else {
var statearr_17943_17969 = state_17930__$1;
(statearr_17943_17969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (5))){
var inst_17907 = (state_17930[(7)]);
var state_17930__$1 = state_17930;
var statearr_17944_17970 = state_17930__$1;
(statearr_17944_17970[(2)] = inst_17907);

(statearr_17944_17970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (10))){
var inst_17926 = (state_17930[(2)]);
var state_17930__$1 = state_17930;
var statearr_17945_17971 = state_17930__$1;
(statearr_17945_17971[(2)] = inst_17926);

(statearr_17945_17971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17931 === (8))){
var inst_17907 = (state_17930[(7)]);
var inst_17917 = cljs.core.next.call(null,inst_17907);
var inst_17907__$1 = inst_17917;
var state_17930__$1 = (function (){var statearr_17946 = state_17930;
(statearr_17946[(7)] = inst_17907__$1);

return statearr_17946;
})();
var statearr_17947_17972 = state_17930__$1;
(statearr_17947_17972[(2)] = null);

(statearr_17947_17972[(1)] = (2));


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
var statearr_17951 = [null,null,null,null,null,null,null,null];
(statearr_17951[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_17951[(1)] = (1));

return statearr_17951;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_17930){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_17930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e17952){if((e17952 instanceof Object)){
var ex__9883__auto__ = e17952;
var statearr_17953_17973 = state_17930;
(statearr_17953_17973[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17974 = state_17930;
state_17930 = G__17974;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_17930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_17930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_17954 = f__9945__auto__.call(null);
(statearr_17954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_17954;
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
if(typeof cljs.core.async.t_cljs$core$async18196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18196 = (function (mult,ch,cs,meta18197){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18197 = meta18197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18198,meta18197__$1){
var self__ = this;
var _18198__$1 = this;
return (new cljs.core.async.t_cljs$core$async18196(self__.mult,self__.ch,self__.cs,meta18197__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18198){
var self__ = this;
var _18198__$1 = this;
return self__.meta18197;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18197","meta18197",-173670008,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18196";

cljs.core.async.t_cljs$core$async18196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18196");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18196(mult__$1,ch__$1,cs__$1,meta18197){
return (new cljs.core.async.t_cljs$core$async18196(mult__$1,ch__$1,cs__$1,meta18197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18196(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9944__auto___18417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___18417,cs,m,dchan,dctr,done){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___18417,cs,m,dchan,dctr,done){
return (function (state_18329){
var state_val_18330 = (state_18329[(1)]);
if((state_val_18330 === (7))){
var inst_18325 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18331_18418 = state_18329__$1;
(statearr_18331_18418[(2)] = inst_18325);

(statearr_18331_18418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (20))){
var inst_18230 = (state_18329[(7)]);
var inst_18240 = cljs.core.first.call(null,inst_18230);
var inst_18241 = cljs.core.nth.call(null,inst_18240,(0),null);
var inst_18242 = cljs.core.nth.call(null,inst_18240,(1),null);
var state_18329__$1 = (function (){var statearr_18332 = state_18329;
(statearr_18332[(8)] = inst_18241);

return statearr_18332;
})();
if(cljs.core.truth_(inst_18242)){
var statearr_18333_18419 = state_18329__$1;
(statearr_18333_18419[(1)] = (22));

} else {
var statearr_18334_18420 = state_18329__$1;
(statearr_18334_18420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (27))){
var inst_18272 = (state_18329[(9)]);
var inst_18277 = (state_18329[(10)]);
var inst_18201 = (state_18329[(11)]);
var inst_18270 = (state_18329[(12)]);
var inst_18277__$1 = cljs.core._nth.call(null,inst_18270,inst_18272);
var inst_18278 = cljs.core.async.put_BANG_.call(null,inst_18277__$1,inst_18201,done);
var state_18329__$1 = (function (){var statearr_18335 = state_18329;
(statearr_18335[(10)] = inst_18277__$1);

return statearr_18335;
})();
if(cljs.core.truth_(inst_18278)){
var statearr_18336_18421 = state_18329__$1;
(statearr_18336_18421[(1)] = (30));

} else {
var statearr_18337_18422 = state_18329__$1;
(statearr_18337_18422[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (1))){
var state_18329__$1 = state_18329;
var statearr_18338_18423 = state_18329__$1;
(statearr_18338_18423[(2)] = null);

(statearr_18338_18423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (24))){
var inst_18230 = (state_18329[(7)]);
var inst_18247 = (state_18329[(2)]);
var inst_18248 = cljs.core.next.call(null,inst_18230);
var inst_18210 = inst_18248;
var inst_18211 = null;
var inst_18212 = (0);
var inst_18213 = (0);
var state_18329__$1 = (function (){var statearr_18339 = state_18329;
(statearr_18339[(13)] = inst_18211);

(statearr_18339[(14)] = inst_18212);

(statearr_18339[(15)] = inst_18213);

(statearr_18339[(16)] = inst_18247);

(statearr_18339[(17)] = inst_18210);

return statearr_18339;
})();
var statearr_18340_18424 = state_18329__$1;
(statearr_18340_18424[(2)] = null);

(statearr_18340_18424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (39))){
var state_18329__$1 = state_18329;
var statearr_18344_18425 = state_18329__$1;
(statearr_18344_18425[(2)] = null);

(statearr_18344_18425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (4))){
var inst_18201 = (state_18329[(11)]);
var inst_18201__$1 = (state_18329[(2)]);
var inst_18202 = (inst_18201__$1 == null);
var state_18329__$1 = (function (){var statearr_18345 = state_18329;
(statearr_18345[(11)] = inst_18201__$1);

return statearr_18345;
})();
if(cljs.core.truth_(inst_18202)){
var statearr_18346_18426 = state_18329__$1;
(statearr_18346_18426[(1)] = (5));

} else {
var statearr_18347_18427 = state_18329__$1;
(statearr_18347_18427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (15))){
var inst_18211 = (state_18329[(13)]);
var inst_18212 = (state_18329[(14)]);
var inst_18213 = (state_18329[(15)]);
var inst_18210 = (state_18329[(17)]);
var inst_18226 = (state_18329[(2)]);
var inst_18227 = (inst_18213 + (1));
var tmp18341 = inst_18211;
var tmp18342 = inst_18212;
var tmp18343 = inst_18210;
var inst_18210__$1 = tmp18343;
var inst_18211__$1 = tmp18341;
var inst_18212__$1 = tmp18342;
var inst_18213__$1 = inst_18227;
var state_18329__$1 = (function (){var statearr_18348 = state_18329;
(statearr_18348[(13)] = inst_18211__$1);

(statearr_18348[(14)] = inst_18212__$1);

(statearr_18348[(15)] = inst_18213__$1);

(statearr_18348[(17)] = inst_18210__$1);

(statearr_18348[(18)] = inst_18226);

return statearr_18348;
})();
var statearr_18349_18428 = state_18329__$1;
(statearr_18349_18428[(2)] = null);

(statearr_18349_18428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (21))){
var inst_18251 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18353_18429 = state_18329__$1;
(statearr_18353_18429[(2)] = inst_18251);

(statearr_18353_18429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (31))){
var inst_18277 = (state_18329[(10)]);
var inst_18281 = done.call(null,null);
var inst_18282 = cljs.core.async.untap_STAR_.call(null,m,inst_18277);
var state_18329__$1 = (function (){var statearr_18354 = state_18329;
(statearr_18354[(19)] = inst_18281);

return statearr_18354;
})();
var statearr_18355_18430 = state_18329__$1;
(statearr_18355_18430[(2)] = inst_18282);

(statearr_18355_18430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (32))){
var inst_18272 = (state_18329[(9)]);
var inst_18269 = (state_18329[(20)]);
var inst_18270 = (state_18329[(12)]);
var inst_18271 = (state_18329[(21)]);
var inst_18284 = (state_18329[(2)]);
var inst_18285 = (inst_18272 + (1));
var tmp18350 = inst_18269;
var tmp18351 = inst_18270;
var tmp18352 = inst_18271;
var inst_18269__$1 = tmp18350;
var inst_18270__$1 = tmp18351;
var inst_18271__$1 = tmp18352;
var inst_18272__$1 = inst_18285;
var state_18329__$1 = (function (){var statearr_18356 = state_18329;
(statearr_18356[(9)] = inst_18272__$1);

(statearr_18356[(22)] = inst_18284);

(statearr_18356[(20)] = inst_18269__$1);

(statearr_18356[(12)] = inst_18270__$1);

(statearr_18356[(21)] = inst_18271__$1);

return statearr_18356;
})();
var statearr_18357_18431 = state_18329__$1;
(statearr_18357_18431[(2)] = null);

(statearr_18357_18431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (40))){
var inst_18297 = (state_18329[(23)]);
var inst_18301 = done.call(null,null);
var inst_18302 = cljs.core.async.untap_STAR_.call(null,m,inst_18297);
var state_18329__$1 = (function (){var statearr_18358 = state_18329;
(statearr_18358[(24)] = inst_18301);

return statearr_18358;
})();
var statearr_18359_18432 = state_18329__$1;
(statearr_18359_18432[(2)] = inst_18302);

(statearr_18359_18432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (33))){
var inst_18288 = (state_18329[(25)]);
var inst_18290 = cljs.core.chunked_seq_QMARK_.call(null,inst_18288);
var state_18329__$1 = state_18329;
if(inst_18290){
var statearr_18360_18433 = state_18329__$1;
(statearr_18360_18433[(1)] = (36));

} else {
var statearr_18361_18434 = state_18329__$1;
(statearr_18361_18434[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (13))){
var inst_18220 = (state_18329[(26)]);
var inst_18223 = cljs.core.async.close_BANG_.call(null,inst_18220);
var state_18329__$1 = state_18329;
var statearr_18362_18435 = state_18329__$1;
(statearr_18362_18435[(2)] = inst_18223);

(statearr_18362_18435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (22))){
var inst_18241 = (state_18329[(8)]);
var inst_18244 = cljs.core.async.close_BANG_.call(null,inst_18241);
var state_18329__$1 = state_18329;
var statearr_18363_18436 = state_18329__$1;
(statearr_18363_18436[(2)] = inst_18244);

(statearr_18363_18436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (36))){
var inst_18288 = (state_18329[(25)]);
var inst_18292 = cljs.core.chunk_first.call(null,inst_18288);
var inst_18293 = cljs.core.chunk_rest.call(null,inst_18288);
var inst_18294 = cljs.core.count.call(null,inst_18292);
var inst_18269 = inst_18293;
var inst_18270 = inst_18292;
var inst_18271 = inst_18294;
var inst_18272 = (0);
var state_18329__$1 = (function (){var statearr_18364 = state_18329;
(statearr_18364[(9)] = inst_18272);

(statearr_18364[(20)] = inst_18269);

(statearr_18364[(12)] = inst_18270);

(statearr_18364[(21)] = inst_18271);

return statearr_18364;
})();
var statearr_18365_18437 = state_18329__$1;
(statearr_18365_18437[(2)] = null);

(statearr_18365_18437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (41))){
var inst_18288 = (state_18329[(25)]);
var inst_18304 = (state_18329[(2)]);
var inst_18305 = cljs.core.next.call(null,inst_18288);
var inst_18269 = inst_18305;
var inst_18270 = null;
var inst_18271 = (0);
var inst_18272 = (0);
var state_18329__$1 = (function (){var statearr_18366 = state_18329;
(statearr_18366[(27)] = inst_18304);

(statearr_18366[(9)] = inst_18272);

(statearr_18366[(20)] = inst_18269);

(statearr_18366[(12)] = inst_18270);

(statearr_18366[(21)] = inst_18271);

return statearr_18366;
})();
var statearr_18367_18438 = state_18329__$1;
(statearr_18367_18438[(2)] = null);

(statearr_18367_18438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (43))){
var state_18329__$1 = state_18329;
var statearr_18368_18439 = state_18329__$1;
(statearr_18368_18439[(2)] = null);

(statearr_18368_18439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (29))){
var inst_18313 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18369_18440 = state_18329__$1;
(statearr_18369_18440[(2)] = inst_18313);

(statearr_18369_18440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (44))){
var inst_18322 = (state_18329[(2)]);
var state_18329__$1 = (function (){var statearr_18370 = state_18329;
(statearr_18370[(28)] = inst_18322);

return statearr_18370;
})();
var statearr_18371_18441 = state_18329__$1;
(statearr_18371_18441[(2)] = null);

(statearr_18371_18441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (6))){
var inst_18261 = (state_18329[(29)]);
var inst_18260 = cljs.core.deref.call(null,cs);
var inst_18261__$1 = cljs.core.keys.call(null,inst_18260);
var inst_18262 = cljs.core.count.call(null,inst_18261__$1);
var inst_18263 = cljs.core.reset_BANG_.call(null,dctr,inst_18262);
var inst_18268 = cljs.core.seq.call(null,inst_18261__$1);
var inst_18269 = inst_18268;
var inst_18270 = null;
var inst_18271 = (0);
var inst_18272 = (0);
var state_18329__$1 = (function (){var statearr_18372 = state_18329;
(statearr_18372[(9)] = inst_18272);

(statearr_18372[(30)] = inst_18263);

(statearr_18372[(20)] = inst_18269);

(statearr_18372[(12)] = inst_18270);

(statearr_18372[(29)] = inst_18261__$1);

(statearr_18372[(21)] = inst_18271);

return statearr_18372;
})();
var statearr_18373_18442 = state_18329__$1;
(statearr_18373_18442[(2)] = null);

(statearr_18373_18442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (28))){
var inst_18269 = (state_18329[(20)]);
var inst_18288 = (state_18329[(25)]);
var inst_18288__$1 = cljs.core.seq.call(null,inst_18269);
var state_18329__$1 = (function (){var statearr_18374 = state_18329;
(statearr_18374[(25)] = inst_18288__$1);

return statearr_18374;
})();
if(inst_18288__$1){
var statearr_18375_18443 = state_18329__$1;
(statearr_18375_18443[(1)] = (33));

} else {
var statearr_18376_18444 = state_18329__$1;
(statearr_18376_18444[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (25))){
var inst_18272 = (state_18329[(9)]);
var inst_18271 = (state_18329[(21)]);
var inst_18274 = (inst_18272 < inst_18271);
var inst_18275 = inst_18274;
var state_18329__$1 = state_18329;
if(cljs.core.truth_(inst_18275)){
var statearr_18377_18445 = state_18329__$1;
(statearr_18377_18445[(1)] = (27));

} else {
var statearr_18378_18446 = state_18329__$1;
(statearr_18378_18446[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (34))){
var state_18329__$1 = state_18329;
var statearr_18379_18447 = state_18329__$1;
(statearr_18379_18447[(2)] = null);

(statearr_18379_18447[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (17))){
var state_18329__$1 = state_18329;
var statearr_18380_18448 = state_18329__$1;
(statearr_18380_18448[(2)] = null);

(statearr_18380_18448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (3))){
var inst_18327 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18329__$1,inst_18327);
} else {
if((state_val_18330 === (12))){
var inst_18256 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18381_18449 = state_18329__$1;
(statearr_18381_18449[(2)] = inst_18256);

(statearr_18381_18449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (2))){
var state_18329__$1 = state_18329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18329__$1,(4),ch);
} else {
if((state_val_18330 === (23))){
var state_18329__$1 = state_18329;
var statearr_18382_18450 = state_18329__$1;
(statearr_18382_18450[(2)] = null);

(statearr_18382_18450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (35))){
var inst_18311 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18383_18451 = state_18329__$1;
(statearr_18383_18451[(2)] = inst_18311);

(statearr_18383_18451[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (19))){
var inst_18230 = (state_18329[(7)]);
var inst_18234 = cljs.core.chunk_first.call(null,inst_18230);
var inst_18235 = cljs.core.chunk_rest.call(null,inst_18230);
var inst_18236 = cljs.core.count.call(null,inst_18234);
var inst_18210 = inst_18235;
var inst_18211 = inst_18234;
var inst_18212 = inst_18236;
var inst_18213 = (0);
var state_18329__$1 = (function (){var statearr_18384 = state_18329;
(statearr_18384[(13)] = inst_18211);

(statearr_18384[(14)] = inst_18212);

(statearr_18384[(15)] = inst_18213);

(statearr_18384[(17)] = inst_18210);

return statearr_18384;
})();
var statearr_18385_18452 = state_18329__$1;
(statearr_18385_18452[(2)] = null);

(statearr_18385_18452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (11))){
var inst_18230 = (state_18329[(7)]);
var inst_18210 = (state_18329[(17)]);
var inst_18230__$1 = cljs.core.seq.call(null,inst_18210);
var state_18329__$1 = (function (){var statearr_18386 = state_18329;
(statearr_18386[(7)] = inst_18230__$1);

return statearr_18386;
})();
if(inst_18230__$1){
var statearr_18387_18453 = state_18329__$1;
(statearr_18387_18453[(1)] = (16));

} else {
var statearr_18388_18454 = state_18329__$1;
(statearr_18388_18454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (9))){
var inst_18258 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18389_18455 = state_18329__$1;
(statearr_18389_18455[(2)] = inst_18258);

(statearr_18389_18455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (5))){
var inst_18208 = cljs.core.deref.call(null,cs);
var inst_18209 = cljs.core.seq.call(null,inst_18208);
var inst_18210 = inst_18209;
var inst_18211 = null;
var inst_18212 = (0);
var inst_18213 = (0);
var state_18329__$1 = (function (){var statearr_18390 = state_18329;
(statearr_18390[(13)] = inst_18211);

(statearr_18390[(14)] = inst_18212);

(statearr_18390[(15)] = inst_18213);

(statearr_18390[(17)] = inst_18210);

return statearr_18390;
})();
var statearr_18391_18456 = state_18329__$1;
(statearr_18391_18456[(2)] = null);

(statearr_18391_18456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (14))){
var state_18329__$1 = state_18329;
var statearr_18392_18457 = state_18329__$1;
(statearr_18392_18457[(2)] = null);

(statearr_18392_18457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (45))){
var inst_18319 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18393_18458 = state_18329__$1;
(statearr_18393_18458[(2)] = inst_18319);

(statearr_18393_18458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (26))){
var inst_18261 = (state_18329[(29)]);
var inst_18315 = (state_18329[(2)]);
var inst_18316 = cljs.core.seq.call(null,inst_18261);
var state_18329__$1 = (function (){var statearr_18394 = state_18329;
(statearr_18394[(31)] = inst_18315);

return statearr_18394;
})();
if(inst_18316){
var statearr_18395_18459 = state_18329__$1;
(statearr_18395_18459[(1)] = (42));

} else {
var statearr_18396_18460 = state_18329__$1;
(statearr_18396_18460[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (16))){
var inst_18230 = (state_18329[(7)]);
var inst_18232 = cljs.core.chunked_seq_QMARK_.call(null,inst_18230);
var state_18329__$1 = state_18329;
if(inst_18232){
var statearr_18397_18461 = state_18329__$1;
(statearr_18397_18461[(1)] = (19));

} else {
var statearr_18398_18462 = state_18329__$1;
(statearr_18398_18462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (38))){
var inst_18308 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18399_18463 = state_18329__$1;
(statearr_18399_18463[(2)] = inst_18308);

(statearr_18399_18463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (30))){
var state_18329__$1 = state_18329;
var statearr_18400_18464 = state_18329__$1;
(statearr_18400_18464[(2)] = null);

(statearr_18400_18464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (10))){
var inst_18211 = (state_18329[(13)]);
var inst_18213 = (state_18329[(15)]);
var inst_18219 = cljs.core._nth.call(null,inst_18211,inst_18213);
var inst_18220 = cljs.core.nth.call(null,inst_18219,(0),null);
var inst_18221 = cljs.core.nth.call(null,inst_18219,(1),null);
var state_18329__$1 = (function (){var statearr_18401 = state_18329;
(statearr_18401[(26)] = inst_18220);

return statearr_18401;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18402_18465 = state_18329__$1;
(statearr_18402_18465[(1)] = (13));

} else {
var statearr_18403_18466 = state_18329__$1;
(statearr_18403_18466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (18))){
var inst_18254 = (state_18329[(2)]);
var state_18329__$1 = state_18329;
var statearr_18404_18467 = state_18329__$1;
(statearr_18404_18467[(2)] = inst_18254);

(statearr_18404_18467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (42))){
var state_18329__$1 = state_18329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18329__$1,(45),dchan);
} else {
if((state_val_18330 === (37))){
var inst_18201 = (state_18329[(11)]);
var inst_18297 = (state_18329[(23)]);
var inst_18288 = (state_18329[(25)]);
var inst_18297__$1 = cljs.core.first.call(null,inst_18288);
var inst_18298 = cljs.core.async.put_BANG_.call(null,inst_18297__$1,inst_18201,done);
var state_18329__$1 = (function (){var statearr_18405 = state_18329;
(statearr_18405[(23)] = inst_18297__$1);

return statearr_18405;
})();
if(cljs.core.truth_(inst_18298)){
var statearr_18406_18468 = state_18329__$1;
(statearr_18406_18468[(1)] = (39));

} else {
var statearr_18407_18469 = state_18329__$1;
(statearr_18407_18469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18330 === (8))){
var inst_18212 = (state_18329[(14)]);
var inst_18213 = (state_18329[(15)]);
var inst_18215 = (inst_18213 < inst_18212);
var inst_18216 = inst_18215;
var state_18329__$1 = state_18329;
if(cljs.core.truth_(inst_18216)){
var statearr_18408_18470 = state_18329__$1;
(statearr_18408_18470[(1)] = (10));

} else {
var statearr_18409_18471 = state_18329__$1;
(statearr_18409_18471[(1)] = (11));

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
});})(c__9944__auto___18417,cs,m,dchan,dctr,done))
;
return ((function (switch__9879__auto__,c__9944__auto___18417,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9880__auto__ = null;
var cljs$core$async$mult_$_state_machine__9880__auto____0 = (function (){
var statearr_18413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18413[(0)] = cljs$core$async$mult_$_state_machine__9880__auto__);

(statearr_18413[(1)] = (1));

return statearr_18413;
});
var cljs$core$async$mult_$_state_machine__9880__auto____1 = (function (state_18329){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18414){if((e18414 instanceof Object)){
var ex__9883__auto__ = e18414;
var statearr_18415_18472 = state_18329;
(statearr_18415_18472[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18473 = state_18329;
state_18329 = G__18473;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9880__auto__ = function(state_18329){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9880__auto____1.call(this,state_18329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9880__auto____0;
cljs$core$async$mult_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9880__auto____1;
return cljs$core$async$mult_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___18417,cs,m,dchan,dctr,done))
})();
var state__9946__auto__ = (function (){var statearr_18416 = f__9945__auto__.call(null);
(statearr_18416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___18417);

return statearr_18416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___18417,cs,m,dchan,dctr,done))
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
var args18474 = [];
var len__6152__auto___18477 = arguments.length;
var i__6153__auto___18478 = (0);
while(true){
if((i__6153__auto___18478 < len__6152__auto___18477)){
args18474.push((arguments[i__6153__auto___18478]));

var G__18479 = (i__6153__auto___18478 + (1));
i__6153__auto___18478 = G__18479;
continue;
} else {
}
break;
}

var G__18476 = args18474.length;
switch (G__18476) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18474.length)].join('')));

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
var len__6152__auto___18491 = arguments.length;
var i__6153__auto___18492 = (0);
while(true){
if((i__6153__auto___18492 < len__6152__auto___18491)){
args__6159__auto__.push((arguments[i__6153__auto___18492]));

var G__18493 = (i__6153__auto___18492 + (1));
i__6153__auto___18492 = G__18493;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18485){
var map__18486 = p__18485;
var map__18486__$1 = ((((!((map__18486 == null)))?((((map__18486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18486):map__18486);
var opts = map__18486__$1;
var statearr_18488_18494 = state;
(statearr_18488_18494[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18486,map__18486__$1,opts){
return (function (val){
var statearr_18489_18495 = state;
(statearr_18489_18495[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18486,map__18486__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18490_18496 = state;
(statearr_18490_18496[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18481){
var G__18482 = cljs.core.first.call(null,seq18481);
var seq18481__$1 = cljs.core.next.call(null,seq18481);
var G__18483 = cljs.core.first.call(null,seq18481__$1);
var seq18481__$2 = cljs.core.next.call(null,seq18481__$1);
var G__18484 = cljs.core.first.call(null,seq18481__$2);
var seq18481__$3 = cljs.core.next.call(null,seq18481__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18482,G__18483,G__18484,seq18481__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18660 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18661){
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
this.meta18661 = meta18661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18662,meta18661__$1){
var self__ = this;
var _18662__$1 = this;
return (new cljs.core.async.t_cljs$core$async18660(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18661__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18662){
var self__ = this;
var _18662__$1 = this;
return self__.meta18661;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18660.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18661","meta18661",1824213756,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18660";

cljs.core.async.t_cljs$core$async18660.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18660");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18660 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18660(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18661){
return (new cljs.core.async.t_cljs$core$async18660(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18661));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18660(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9944__auto___18823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18760){
var state_val_18761 = (state_18760[(1)]);
if((state_val_18761 === (7))){
var inst_18678 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18762_18824 = state_18760__$1;
(statearr_18762_18824[(2)] = inst_18678);

(statearr_18762_18824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (20))){
var inst_18690 = (state_18760[(7)]);
var state_18760__$1 = state_18760;
var statearr_18763_18825 = state_18760__$1;
(statearr_18763_18825[(2)] = inst_18690);

(statearr_18763_18825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (27))){
var state_18760__$1 = state_18760;
var statearr_18764_18826 = state_18760__$1;
(statearr_18764_18826[(2)] = null);

(statearr_18764_18826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (1))){
var inst_18666 = (state_18760[(8)]);
var inst_18666__$1 = calc_state.call(null);
var inst_18668 = (inst_18666__$1 == null);
var inst_18669 = cljs.core.not.call(null,inst_18668);
var state_18760__$1 = (function (){var statearr_18765 = state_18760;
(statearr_18765[(8)] = inst_18666__$1);

return statearr_18765;
})();
if(inst_18669){
var statearr_18766_18827 = state_18760__$1;
(statearr_18766_18827[(1)] = (2));

} else {
var statearr_18767_18828 = state_18760__$1;
(statearr_18767_18828[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (24))){
var inst_18713 = (state_18760[(9)]);
var inst_18734 = (state_18760[(10)]);
var inst_18720 = (state_18760[(11)]);
var inst_18734__$1 = inst_18713.call(null,inst_18720);
var state_18760__$1 = (function (){var statearr_18768 = state_18760;
(statearr_18768[(10)] = inst_18734__$1);

return statearr_18768;
})();
if(cljs.core.truth_(inst_18734__$1)){
var statearr_18769_18829 = state_18760__$1;
(statearr_18769_18829[(1)] = (29));

} else {
var statearr_18770_18830 = state_18760__$1;
(statearr_18770_18830[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (4))){
var inst_18681 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18681)){
var statearr_18771_18831 = state_18760__$1;
(statearr_18771_18831[(1)] = (8));

} else {
var statearr_18772_18832 = state_18760__$1;
(statearr_18772_18832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (15))){
var inst_18707 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18707)){
var statearr_18773_18833 = state_18760__$1;
(statearr_18773_18833[(1)] = (19));

} else {
var statearr_18774_18834 = state_18760__$1;
(statearr_18774_18834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (21))){
var inst_18712 = (state_18760[(12)]);
var inst_18712__$1 = (state_18760[(2)]);
var inst_18713 = cljs.core.get.call(null,inst_18712__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18714 = cljs.core.get.call(null,inst_18712__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18715 = cljs.core.get.call(null,inst_18712__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18760__$1 = (function (){var statearr_18775 = state_18760;
(statearr_18775[(13)] = inst_18714);

(statearr_18775[(9)] = inst_18713);

(statearr_18775[(12)] = inst_18712__$1);

return statearr_18775;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18760__$1,(22),inst_18715);
} else {
if((state_val_18761 === (31))){
var inst_18742 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18742)){
var statearr_18776_18835 = state_18760__$1;
(statearr_18776_18835[(1)] = (32));

} else {
var statearr_18777_18836 = state_18760__$1;
(statearr_18777_18836[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (32))){
var inst_18719 = (state_18760[(14)]);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18760__$1,(35),out,inst_18719);
} else {
if((state_val_18761 === (33))){
var inst_18712 = (state_18760[(12)]);
var inst_18690 = inst_18712;
var state_18760__$1 = (function (){var statearr_18778 = state_18760;
(statearr_18778[(7)] = inst_18690);

return statearr_18778;
})();
var statearr_18779_18837 = state_18760__$1;
(statearr_18779_18837[(2)] = null);

(statearr_18779_18837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (13))){
var inst_18690 = (state_18760[(7)]);
var inst_18697 = inst_18690.cljs$lang$protocol_mask$partition0$;
var inst_18698 = (inst_18697 & (64));
var inst_18699 = inst_18690.cljs$core$ISeq$;
var inst_18700 = (inst_18698) || (inst_18699);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18700)){
var statearr_18780_18838 = state_18760__$1;
(statearr_18780_18838[(1)] = (16));

} else {
var statearr_18781_18839 = state_18760__$1;
(statearr_18781_18839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (22))){
var inst_18719 = (state_18760[(14)]);
var inst_18720 = (state_18760[(11)]);
var inst_18718 = (state_18760[(2)]);
var inst_18719__$1 = cljs.core.nth.call(null,inst_18718,(0),null);
var inst_18720__$1 = cljs.core.nth.call(null,inst_18718,(1),null);
var inst_18721 = (inst_18719__$1 == null);
var inst_18722 = cljs.core._EQ_.call(null,inst_18720__$1,change);
var inst_18723 = (inst_18721) || (inst_18722);
var state_18760__$1 = (function (){var statearr_18782 = state_18760;
(statearr_18782[(14)] = inst_18719__$1);

(statearr_18782[(11)] = inst_18720__$1);

return statearr_18782;
})();
if(cljs.core.truth_(inst_18723)){
var statearr_18783_18840 = state_18760__$1;
(statearr_18783_18840[(1)] = (23));

} else {
var statearr_18784_18841 = state_18760__$1;
(statearr_18784_18841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (36))){
var inst_18712 = (state_18760[(12)]);
var inst_18690 = inst_18712;
var state_18760__$1 = (function (){var statearr_18785 = state_18760;
(statearr_18785[(7)] = inst_18690);

return statearr_18785;
})();
var statearr_18786_18842 = state_18760__$1;
(statearr_18786_18842[(2)] = null);

(statearr_18786_18842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (29))){
var inst_18734 = (state_18760[(10)]);
var state_18760__$1 = state_18760;
var statearr_18787_18843 = state_18760__$1;
(statearr_18787_18843[(2)] = inst_18734);

(statearr_18787_18843[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (6))){
var state_18760__$1 = state_18760;
var statearr_18788_18844 = state_18760__$1;
(statearr_18788_18844[(2)] = false);

(statearr_18788_18844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (28))){
var inst_18730 = (state_18760[(2)]);
var inst_18731 = calc_state.call(null);
var inst_18690 = inst_18731;
var state_18760__$1 = (function (){var statearr_18789 = state_18760;
(statearr_18789[(15)] = inst_18730);

(statearr_18789[(7)] = inst_18690);

return statearr_18789;
})();
var statearr_18790_18845 = state_18760__$1;
(statearr_18790_18845[(2)] = null);

(statearr_18790_18845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (25))){
var inst_18756 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18791_18846 = state_18760__$1;
(statearr_18791_18846[(2)] = inst_18756);

(statearr_18791_18846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (34))){
var inst_18754 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18792_18847 = state_18760__$1;
(statearr_18792_18847[(2)] = inst_18754);

(statearr_18792_18847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (17))){
var state_18760__$1 = state_18760;
var statearr_18793_18848 = state_18760__$1;
(statearr_18793_18848[(2)] = false);

(statearr_18793_18848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (3))){
var state_18760__$1 = state_18760;
var statearr_18794_18849 = state_18760__$1;
(statearr_18794_18849[(2)] = false);

(statearr_18794_18849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (12))){
var inst_18758 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18760__$1,inst_18758);
} else {
if((state_val_18761 === (2))){
var inst_18666 = (state_18760[(8)]);
var inst_18671 = inst_18666.cljs$lang$protocol_mask$partition0$;
var inst_18672 = (inst_18671 & (64));
var inst_18673 = inst_18666.cljs$core$ISeq$;
var inst_18674 = (inst_18672) || (inst_18673);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18674)){
var statearr_18795_18850 = state_18760__$1;
(statearr_18795_18850[(1)] = (5));

} else {
var statearr_18796_18851 = state_18760__$1;
(statearr_18796_18851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (23))){
var inst_18719 = (state_18760[(14)]);
var inst_18725 = (inst_18719 == null);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18725)){
var statearr_18797_18852 = state_18760__$1;
(statearr_18797_18852[(1)] = (26));

} else {
var statearr_18798_18853 = state_18760__$1;
(statearr_18798_18853[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (35))){
var inst_18745 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18745)){
var statearr_18799_18854 = state_18760__$1;
(statearr_18799_18854[(1)] = (36));

} else {
var statearr_18800_18855 = state_18760__$1;
(statearr_18800_18855[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (19))){
var inst_18690 = (state_18760[(7)]);
var inst_18709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18690);
var state_18760__$1 = state_18760;
var statearr_18801_18856 = state_18760__$1;
(statearr_18801_18856[(2)] = inst_18709);

(statearr_18801_18856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (11))){
var inst_18690 = (state_18760[(7)]);
var inst_18694 = (inst_18690 == null);
var inst_18695 = cljs.core.not.call(null,inst_18694);
var state_18760__$1 = state_18760;
if(inst_18695){
var statearr_18802_18857 = state_18760__$1;
(statearr_18802_18857[(1)] = (13));

} else {
var statearr_18803_18858 = state_18760__$1;
(statearr_18803_18858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (9))){
var inst_18666 = (state_18760[(8)]);
var state_18760__$1 = state_18760;
var statearr_18804_18859 = state_18760__$1;
(statearr_18804_18859[(2)] = inst_18666);

(statearr_18804_18859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (5))){
var state_18760__$1 = state_18760;
var statearr_18805_18860 = state_18760__$1;
(statearr_18805_18860[(2)] = true);

(statearr_18805_18860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (14))){
var state_18760__$1 = state_18760;
var statearr_18806_18861 = state_18760__$1;
(statearr_18806_18861[(2)] = false);

(statearr_18806_18861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (26))){
var inst_18720 = (state_18760[(11)]);
var inst_18727 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18720);
var state_18760__$1 = state_18760;
var statearr_18807_18862 = state_18760__$1;
(statearr_18807_18862[(2)] = inst_18727);

(statearr_18807_18862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (16))){
var state_18760__$1 = state_18760;
var statearr_18808_18863 = state_18760__$1;
(statearr_18808_18863[(2)] = true);

(statearr_18808_18863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (38))){
var inst_18750 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18809_18864 = state_18760__$1;
(statearr_18809_18864[(2)] = inst_18750);

(statearr_18809_18864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (30))){
var inst_18714 = (state_18760[(13)]);
var inst_18713 = (state_18760[(9)]);
var inst_18720 = (state_18760[(11)]);
var inst_18737 = cljs.core.empty_QMARK_.call(null,inst_18713);
var inst_18738 = inst_18714.call(null,inst_18720);
var inst_18739 = cljs.core.not.call(null,inst_18738);
var inst_18740 = (inst_18737) && (inst_18739);
var state_18760__$1 = state_18760;
var statearr_18810_18865 = state_18760__$1;
(statearr_18810_18865[(2)] = inst_18740);

(statearr_18810_18865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (10))){
var inst_18666 = (state_18760[(8)]);
var inst_18686 = (state_18760[(2)]);
var inst_18687 = cljs.core.get.call(null,inst_18686,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18688 = cljs.core.get.call(null,inst_18686,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18689 = cljs.core.get.call(null,inst_18686,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18690 = inst_18666;
var state_18760__$1 = (function (){var statearr_18811 = state_18760;
(statearr_18811[(16)] = inst_18688);

(statearr_18811[(17)] = inst_18687);

(statearr_18811[(18)] = inst_18689);

(statearr_18811[(7)] = inst_18690);

return statearr_18811;
})();
var statearr_18812_18866 = state_18760__$1;
(statearr_18812_18866[(2)] = null);

(statearr_18812_18866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (18))){
var inst_18704 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18813_18867 = state_18760__$1;
(statearr_18813_18867[(2)] = inst_18704);

(statearr_18813_18867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (37))){
var state_18760__$1 = state_18760;
var statearr_18814_18868 = state_18760__$1;
(statearr_18814_18868[(2)] = null);

(statearr_18814_18868[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18761 === (8))){
var inst_18666 = (state_18760[(8)]);
var inst_18683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18666);
var state_18760__$1 = state_18760;
var statearr_18815_18869 = state_18760__$1;
(statearr_18815_18869[(2)] = inst_18683);

(statearr_18815_18869[(1)] = (10));


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
});})(c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9879__auto__,c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9880__auto__ = null;
var cljs$core$async$mix_$_state_machine__9880__auto____0 = (function (){
var statearr_18819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18819[(0)] = cljs$core$async$mix_$_state_machine__9880__auto__);

(statearr_18819[(1)] = (1));

return statearr_18819;
});
var cljs$core$async$mix_$_state_machine__9880__auto____1 = (function (state_18760){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e18820){if((e18820 instanceof Object)){
var ex__9883__auto__ = e18820;
var statearr_18821_18870 = state_18760;
(statearr_18821_18870[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18871 = state_18760;
state_18760 = G__18871;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9880__auto__ = function(state_18760){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9880__auto____1.call(this,state_18760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9880__auto____0;
cljs$core$async$mix_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9880__auto____1;
return cljs$core$async$mix_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9946__auto__ = (function (){var statearr_18822 = f__9945__auto__.call(null);
(statearr_18822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___18823);

return statearr_18822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___18823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args18872 = [];
var len__6152__auto___18875 = arguments.length;
var i__6153__auto___18876 = (0);
while(true){
if((i__6153__auto___18876 < len__6152__auto___18875)){
args18872.push((arguments[i__6153__auto___18876]));

var G__18877 = (i__6153__auto___18876 + (1));
i__6153__auto___18876 = G__18877;
continue;
} else {
}
break;
}

var G__18874 = args18872.length;
switch (G__18874) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18872.length)].join('')));

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
var args18880 = [];
var len__6152__auto___19005 = arguments.length;
var i__6153__auto___19006 = (0);
while(true){
if((i__6153__auto___19006 < len__6152__auto___19005)){
args18880.push((arguments[i__6153__auto___19006]));

var G__19007 = (i__6153__auto___19006 + (1));
i__6153__auto___19006 = G__19007;
continue;
} else {
}
break;
}

var G__18882 = args18880.length;
switch (G__18882) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18880.length)].join('')));

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
return (function (p1__18879_SHARP_){
if(cljs.core.truth_(p1__18879_SHARP_.call(null,topic))){
return p1__18879_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18879_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18883 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18884){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18884 = meta18884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18885,meta18884__$1){
var self__ = this;
var _18885__$1 = this;
return (new cljs.core.async.t_cljs$core$async18883(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18884__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18885){
var self__ = this;
var _18885__$1 = this;
return self__.meta18884;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18884","meta18884",-2099647375,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18883";

cljs.core.async.t_cljs$core$async18883.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18883");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18883 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18884){
return (new cljs.core.async.t_cljs$core$async18883(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18884));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18883(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9944__auto___19009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19009,mults,ensure_mult,p){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19009,mults,ensure_mult,p){
return (function (state_18957){
var state_val_18958 = (state_18957[(1)]);
if((state_val_18958 === (7))){
var inst_18953 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18959_19010 = state_18957__$1;
(statearr_18959_19010[(2)] = inst_18953);

(statearr_18959_19010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (20))){
var state_18957__$1 = state_18957;
var statearr_18960_19011 = state_18957__$1;
(statearr_18960_19011[(2)] = null);

(statearr_18960_19011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (1))){
var state_18957__$1 = state_18957;
var statearr_18961_19012 = state_18957__$1;
(statearr_18961_19012[(2)] = null);

(statearr_18961_19012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (24))){
var inst_18936 = (state_18957[(7)]);
var inst_18945 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18936);
var state_18957__$1 = state_18957;
var statearr_18962_19013 = state_18957__$1;
(statearr_18962_19013[(2)] = inst_18945);

(statearr_18962_19013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (4))){
var inst_18888 = (state_18957[(8)]);
var inst_18888__$1 = (state_18957[(2)]);
var inst_18889 = (inst_18888__$1 == null);
var state_18957__$1 = (function (){var statearr_18963 = state_18957;
(statearr_18963[(8)] = inst_18888__$1);

return statearr_18963;
})();
if(cljs.core.truth_(inst_18889)){
var statearr_18964_19014 = state_18957__$1;
(statearr_18964_19014[(1)] = (5));

} else {
var statearr_18965_19015 = state_18957__$1;
(statearr_18965_19015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (15))){
var inst_18930 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18966_19016 = state_18957__$1;
(statearr_18966_19016[(2)] = inst_18930);

(statearr_18966_19016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (21))){
var inst_18950 = (state_18957[(2)]);
var state_18957__$1 = (function (){var statearr_18967 = state_18957;
(statearr_18967[(9)] = inst_18950);

return statearr_18967;
})();
var statearr_18968_19017 = state_18957__$1;
(statearr_18968_19017[(2)] = null);

(statearr_18968_19017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (13))){
var inst_18912 = (state_18957[(10)]);
var inst_18914 = cljs.core.chunked_seq_QMARK_.call(null,inst_18912);
var state_18957__$1 = state_18957;
if(inst_18914){
var statearr_18969_19018 = state_18957__$1;
(statearr_18969_19018[(1)] = (16));

} else {
var statearr_18970_19019 = state_18957__$1;
(statearr_18970_19019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (22))){
var inst_18942 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
if(cljs.core.truth_(inst_18942)){
var statearr_18971_19020 = state_18957__$1;
(statearr_18971_19020[(1)] = (23));

} else {
var statearr_18972_19021 = state_18957__$1;
(statearr_18972_19021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (6))){
var inst_18936 = (state_18957[(7)]);
var inst_18888 = (state_18957[(8)]);
var inst_18938 = (state_18957[(11)]);
var inst_18936__$1 = topic_fn.call(null,inst_18888);
var inst_18937 = cljs.core.deref.call(null,mults);
var inst_18938__$1 = cljs.core.get.call(null,inst_18937,inst_18936__$1);
var state_18957__$1 = (function (){var statearr_18973 = state_18957;
(statearr_18973[(7)] = inst_18936__$1);

(statearr_18973[(11)] = inst_18938__$1);

return statearr_18973;
})();
if(cljs.core.truth_(inst_18938__$1)){
var statearr_18974_19022 = state_18957__$1;
(statearr_18974_19022[(1)] = (19));

} else {
var statearr_18975_19023 = state_18957__$1;
(statearr_18975_19023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (25))){
var inst_18947 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18976_19024 = state_18957__$1;
(statearr_18976_19024[(2)] = inst_18947);

(statearr_18976_19024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (17))){
var inst_18912 = (state_18957[(10)]);
var inst_18921 = cljs.core.first.call(null,inst_18912);
var inst_18922 = cljs.core.async.muxch_STAR_.call(null,inst_18921);
var inst_18923 = cljs.core.async.close_BANG_.call(null,inst_18922);
var inst_18924 = cljs.core.next.call(null,inst_18912);
var inst_18898 = inst_18924;
var inst_18899 = null;
var inst_18900 = (0);
var inst_18901 = (0);
var state_18957__$1 = (function (){var statearr_18977 = state_18957;
(statearr_18977[(12)] = inst_18898);

(statearr_18977[(13)] = inst_18900);

(statearr_18977[(14)] = inst_18923);

(statearr_18977[(15)] = inst_18899);

(statearr_18977[(16)] = inst_18901);

return statearr_18977;
})();
var statearr_18978_19025 = state_18957__$1;
(statearr_18978_19025[(2)] = null);

(statearr_18978_19025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (3))){
var inst_18955 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18957__$1,inst_18955);
} else {
if((state_val_18958 === (12))){
var inst_18932 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18979_19026 = state_18957__$1;
(statearr_18979_19026[(2)] = inst_18932);

(statearr_18979_19026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (2))){
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18957__$1,(4),ch);
} else {
if((state_val_18958 === (23))){
var state_18957__$1 = state_18957;
var statearr_18980_19027 = state_18957__$1;
(statearr_18980_19027[(2)] = null);

(statearr_18980_19027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (19))){
var inst_18888 = (state_18957[(8)]);
var inst_18938 = (state_18957[(11)]);
var inst_18940 = cljs.core.async.muxch_STAR_.call(null,inst_18938);
var state_18957__$1 = state_18957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18957__$1,(22),inst_18940,inst_18888);
} else {
if((state_val_18958 === (11))){
var inst_18898 = (state_18957[(12)]);
var inst_18912 = (state_18957[(10)]);
var inst_18912__$1 = cljs.core.seq.call(null,inst_18898);
var state_18957__$1 = (function (){var statearr_18981 = state_18957;
(statearr_18981[(10)] = inst_18912__$1);

return statearr_18981;
})();
if(inst_18912__$1){
var statearr_18982_19028 = state_18957__$1;
(statearr_18982_19028[(1)] = (13));

} else {
var statearr_18983_19029 = state_18957__$1;
(statearr_18983_19029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (9))){
var inst_18934 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18984_19030 = state_18957__$1;
(statearr_18984_19030[(2)] = inst_18934);

(statearr_18984_19030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (5))){
var inst_18895 = cljs.core.deref.call(null,mults);
var inst_18896 = cljs.core.vals.call(null,inst_18895);
var inst_18897 = cljs.core.seq.call(null,inst_18896);
var inst_18898 = inst_18897;
var inst_18899 = null;
var inst_18900 = (0);
var inst_18901 = (0);
var state_18957__$1 = (function (){var statearr_18985 = state_18957;
(statearr_18985[(12)] = inst_18898);

(statearr_18985[(13)] = inst_18900);

(statearr_18985[(15)] = inst_18899);

(statearr_18985[(16)] = inst_18901);

return statearr_18985;
})();
var statearr_18986_19031 = state_18957__$1;
(statearr_18986_19031[(2)] = null);

(statearr_18986_19031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (14))){
var state_18957__$1 = state_18957;
var statearr_18990_19032 = state_18957__$1;
(statearr_18990_19032[(2)] = null);

(statearr_18990_19032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (16))){
var inst_18912 = (state_18957[(10)]);
var inst_18916 = cljs.core.chunk_first.call(null,inst_18912);
var inst_18917 = cljs.core.chunk_rest.call(null,inst_18912);
var inst_18918 = cljs.core.count.call(null,inst_18916);
var inst_18898 = inst_18917;
var inst_18899 = inst_18916;
var inst_18900 = inst_18918;
var inst_18901 = (0);
var state_18957__$1 = (function (){var statearr_18991 = state_18957;
(statearr_18991[(12)] = inst_18898);

(statearr_18991[(13)] = inst_18900);

(statearr_18991[(15)] = inst_18899);

(statearr_18991[(16)] = inst_18901);

return statearr_18991;
})();
var statearr_18992_19033 = state_18957__$1;
(statearr_18992_19033[(2)] = null);

(statearr_18992_19033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (10))){
var inst_18898 = (state_18957[(12)]);
var inst_18900 = (state_18957[(13)]);
var inst_18899 = (state_18957[(15)]);
var inst_18901 = (state_18957[(16)]);
var inst_18906 = cljs.core._nth.call(null,inst_18899,inst_18901);
var inst_18907 = cljs.core.async.muxch_STAR_.call(null,inst_18906);
var inst_18908 = cljs.core.async.close_BANG_.call(null,inst_18907);
var inst_18909 = (inst_18901 + (1));
var tmp18987 = inst_18898;
var tmp18988 = inst_18900;
var tmp18989 = inst_18899;
var inst_18898__$1 = tmp18987;
var inst_18899__$1 = tmp18989;
var inst_18900__$1 = tmp18988;
var inst_18901__$1 = inst_18909;
var state_18957__$1 = (function (){var statearr_18993 = state_18957;
(statearr_18993[(12)] = inst_18898__$1);

(statearr_18993[(13)] = inst_18900__$1);

(statearr_18993[(15)] = inst_18899__$1);

(statearr_18993[(16)] = inst_18901__$1);

(statearr_18993[(17)] = inst_18908);

return statearr_18993;
})();
var statearr_18994_19034 = state_18957__$1;
(statearr_18994_19034[(2)] = null);

(statearr_18994_19034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (18))){
var inst_18927 = (state_18957[(2)]);
var state_18957__$1 = state_18957;
var statearr_18995_19035 = state_18957__$1;
(statearr_18995_19035[(2)] = inst_18927);

(statearr_18995_19035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18958 === (8))){
var inst_18900 = (state_18957[(13)]);
var inst_18901 = (state_18957[(16)]);
var inst_18903 = (inst_18901 < inst_18900);
var inst_18904 = inst_18903;
var state_18957__$1 = state_18957;
if(cljs.core.truth_(inst_18904)){
var statearr_18996_19036 = state_18957__$1;
(statearr_18996_19036[(1)] = (10));

} else {
var statearr_18997_19037 = state_18957__$1;
(statearr_18997_19037[(1)] = (11));

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
});})(c__9944__auto___19009,mults,ensure_mult,p))
;
return ((function (switch__9879__auto__,c__9944__auto___19009,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19001[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19001[(1)] = (1));

return statearr_19001;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_18957){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_18957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19002){if((e19002 instanceof Object)){
var ex__9883__auto__ = e19002;
var statearr_19003_19038 = state_18957;
(statearr_19003_19038[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19039 = state_18957;
state_18957 = G__19039;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_18957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_18957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19009,mults,ensure_mult,p))
})();
var state__9946__auto__ = (function (){var statearr_19004 = f__9945__auto__.call(null);
(statearr_19004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19009);

return statearr_19004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19009,mults,ensure_mult,p))
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
var args19040 = [];
var len__6152__auto___19043 = arguments.length;
var i__6153__auto___19044 = (0);
while(true){
if((i__6153__auto___19044 < len__6152__auto___19043)){
args19040.push((arguments[i__6153__auto___19044]));

var G__19045 = (i__6153__auto___19044 + (1));
i__6153__auto___19044 = G__19045;
continue;
} else {
}
break;
}

var G__19042 = args19040.length;
switch (G__19042) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19040.length)].join('')));

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
var args19047 = [];
var len__6152__auto___19050 = arguments.length;
var i__6153__auto___19051 = (0);
while(true){
if((i__6153__auto___19051 < len__6152__auto___19050)){
args19047.push((arguments[i__6153__auto___19051]));

var G__19052 = (i__6153__auto___19051 + (1));
i__6153__auto___19051 = G__19052;
continue;
} else {
}
break;
}

var G__19049 = args19047.length;
switch (G__19049) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19047.length)].join('')));

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
var args19054 = [];
var len__6152__auto___19125 = arguments.length;
var i__6153__auto___19126 = (0);
while(true){
if((i__6153__auto___19126 < len__6152__auto___19125)){
args19054.push((arguments[i__6153__auto___19126]));

var G__19127 = (i__6153__auto___19126 + (1));
i__6153__auto___19126 = G__19127;
continue;
} else {
}
break;
}

var G__19056 = args19054.length;
switch (G__19056) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19054.length)].join('')));

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
var c__9944__auto___19129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19095){
var state_val_19096 = (state_19095[(1)]);
if((state_val_19096 === (7))){
var state_19095__$1 = state_19095;
var statearr_19097_19130 = state_19095__$1;
(statearr_19097_19130[(2)] = null);

(statearr_19097_19130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (1))){
var state_19095__$1 = state_19095;
var statearr_19098_19131 = state_19095__$1;
(statearr_19098_19131[(2)] = null);

(statearr_19098_19131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (4))){
var inst_19059 = (state_19095[(7)]);
var inst_19061 = (inst_19059 < cnt);
var state_19095__$1 = state_19095;
if(cljs.core.truth_(inst_19061)){
var statearr_19099_19132 = state_19095__$1;
(statearr_19099_19132[(1)] = (6));

} else {
var statearr_19100_19133 = state_19095__$1;
(statearr_19100_19133[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (15))){
var inst_19091 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19101_19134 = state_19095__$1;
(statearr_19101_19134[(2)] = inst_19091);

(statearr_19101_19134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (13))){
var inst_19084 = cljs.core.async.close_BANG_.call(null,out);
var state_19095__$1 = state_19095;
var statearr_19102_19135 = state_19095__$1;
(statearr_19102_19135[(2)] = inst_19084);

(statearr_19102_19135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (6))){
var state_19095__$1 = state_19095;
var statearr_19103_19136 = state_19095__$1;
(statearr_19103_19136[(2)] = null);

(statearr_19103_19136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (3))){
var inst_19093 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19095__$1,inst_19093);
} else {
if((state_val_19096 === (12))){
var inst_19081 = (state_19095[(8)]);
var inst_19081__$1 = (state_19095[(2)]);
var inst_19082 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19081__$1);
var state_19095__$1 = (function (){var statearr_19104 = state_19095;
(statearr_19104[(8)] = inst_19081__$1);

return statearr_19104;
})();
if(cljs.core.truth_(inst_19082)){
var statearr_19105_19137 = state_19095__$1;
(statearr_19105_19137[(1)] = (13));

} else {
var statearr_19106_19138 = state_19095__$1;
(statearr_19106_19138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (2))){
var inst_19058 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19059 = (0);
var state_19095__$1 = (function (){var statearr_19107 = state_19095;
(statearr_19107[(9)] = inst_19058);

(statearr_19107[(7)] = inst_19059);

return statearr_19107;
})();
var statearr_19108_19139 = state_19095__$1;
(statearr_19108_19139[(2)] = null);

(statearr_19108_19139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (11))){
var inst_19059 = (state_19095[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19095,(10),Object,null,(9));
var inst_19068 = chs__$1.call(null,inst_19059);
var inst_19069 = done.call(null,inst_19059);
var inst_19070 = cljs.core.async.take_BANG_.call(null,inst_19068,inst_19069);
var state_19095__$1 = state_19095;
var statearr_19109_19140 = state_19095__$1;
(statearr_19109_19140[(2)] = inst_19070);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (9))){
var inst_19059 = (state_19095[(7)]);
var inst_19072 = (state_19095[(2)]);
var inst_19073 = (inst_19059 + (1));
var inst_19059__$1 = inst_19073;
var state_19095__$1 = (function (){var statearr_19110 = state_19095;
(statearr_19110[(10)] = inst_19072);

(statearr_19110[(7)] = inst_19059__$1);

return statearr_19110;
})();
var statearr_19111_19141 = state_19095__$1;
(statearr_19111_19141[(2)] = null);

(statearr_19111_19141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (5))){
var inst_19079 = (state_19095[(2)]);
var state_19095__$1 = (function (){var statearr_19112 = state_19095;
(statearr_19112[(11)] = inst_19079);

return statearr_19112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19095__$1,(12),dchan);
} else {
if((state_val_19096 === (14))){
var inst_19081 = (state_19095[(8)]);
var inst_19086 = cljs.core.apply.call(null,f,inst_19081);
var state_19095__$1 = state_19095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19095__$1,(16),out,inst_19086);
} else {
if((state_val_19096 === (16))){
var inst_19088 = (state_19095[(2)]);
var state_19095__$1 = (function (){var statearr_19113 = state_19095;
(statearr_19113[(12)] = inst_19088);

return statearr_19113;
})();
var statearr_19114_19142 = state_19095__$1;
(statearr_19114_19142[(2)] = null);

(statearr_19114_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (10))){
var inst_19063 = (state_19095[(2)]);
var inst_19064 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19095__$1 = (function (){var statearr_19115 = state_19095;
(statearr_19115[(13)] = inst_19063);

return statearr_19115;
})();
var statearr_19116_19143 = state_19095__$1;
(statearr_19116_19143[(2)] = inst_19064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19096 === (8))){
var inst_19077 = (state_19095[(2)]);
var state_19095__$1 = state_19095;
var statearr_19117_19144 = state_19095__$1;
(statearr_19117_19144[(2)] = inst_19077);

(statearr_19117_19144[(1)] = (5));


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
});})(c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9879__auto__,c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19121[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19121[(1)] = (1));

return statearr_19121;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19095){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19122){if((e19122 instanceof Object)){
var ex__9883__auto__ = e19122;
var statearr_19123_19145 = state_19095;
(statearr_19123_19145[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19146 = state_19095;
state_19095 = G__19146;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9946__auto__ = (function (){var statearr_19124 = f__9945__auto__.call(null);
(statearr_19124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19129);

return statearr_19124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19129,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19148 = [];
var len__6152__auto___19204 = arguments.length;
var i__6153__auto___19205 = (0);
while(true){
if((i__6153__auto___19205 < len__6152__auto___19204)){
args19148.push((arguments[i__6153__auto___19205]));

var G__19206 = (i__6153__auto___19205 + (1));
i__6153__auto___19205 = G__19206;
continue;
} else {
}
break;
}

var G__19150 = args19148.length;
switch (G__19150) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19148.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19208,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19208,out){
return (function (state_19180){
var state_val_19181 = (state_19180[(1)]);
if((state_val_19181 === (7))){
var inst_19159 = (state_19180[(7)]);
var inst_19160 = (state_19180[(8)]);
var inst_19159__$1 = (state_19180[(2)]);
var inst_19160__$1 = cljs.core.nth.call(null,inst_19159__$1,(0),null);
var inst_19161 = cljs.core.nth.call(null,inst_19159__$1,(1),null);
var inst_19162 = (inst_19160__$1 == null);
var state_19180__$1 = (function (){var statearr_19182 = state_19180;
(statearr_19182[(7)] = inst_19159__$1);

(statearr_19182[(8)] = inst_19160__$1);

(statearr_19182[(9)] = inst_19161);

return statearr_19182;
})();
if(cljs.core.truth_(inst_19162)){
var statearr_19183_19209 = state_19180__$1;
(statearr_19183_19209[(1)] = (8));

} else {
var statearr_19184_19210 = state_19180__$1;
(statearr_19184_19210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (1))){
var inst_19151 = cljs.core.vec.call(null,chs);
var inst_19152 = inst_19151;
var state_19180__$1 = (function (){var statearr_19185 = state_19180;
(statearr_19185[(10)] = inst_19152);

return statearr_19185;
})();
var statearr_19186_19211 = state_19180__$1;
(statearr_19186_19211[(2)] = null);

(statearr_19186_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (4))){
var inst_19152 = (state_19180[(10)]);
var state_19180__$1 = state_19180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19180__$1,(7),inst_19152);
} else {
if((state_val_19181 === (6))){
var inst_19176 = (state_19180[(2)]);
var state_19180__$1 = state_19180;
var statearr_19187_19212 = state_19180__$1;
(statearr_19187_19212[(2)] = inst_19176);

(statearr_19187_19212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (3))){
var inst_19178 = (state_19180[(2)]);
var state_19180__$1 = state_19180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19180__$1,inst_19178);
} else {
if((state_val_19181 === (2))){
var inst_19152 = (state_19180[(10)]);
var inst_19154 = cljs.core.count.call(null,inst_19152);
var inst_19155 = (inst_19154 > (0));
var state_19180__$1 = state_19180;
if(cljs.core.truth_(inst_19155)){
var statearr_19189_19213 = state_19180__$1;
(statearr_19189_19213[(1)] = (4));

} else {
var statearr_19190_19214 = state_19180__$1;
(statearr_19190_19214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (11))){
var inst_19152 = (state_19180[(10)]);
var inst_19169 = (state_19180[(2)]);
var tmp19188 = inst_19152;
var inst_19152__$1 = tmp19188;
var state_19180__$1 = (function (){var statearr_19191 = state_19180;
(statearr_19191[(11)] = inst_19169);

(statearr_19191[(10)] = inst_19152__$1);

return statearr_19191;
})();
var statearr_19192_19215 = state_19180__$1;
(statearr_19192_19215[(2)] = null);

(statearr_19192_19215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (9))){
var inst_19160 = (state_19180[(8)]);
var state_19180__$1 = state_19180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19180__$1,(11),out,inst_19160);
} else {
if((state_val_19181 === (5))){
var inst_19174 = cljs.core.async.close_BANG_.call(null,out);
var state_19180__$1 = state_19180;
var statearr_19193_19216 = state_19180__$1;
(statearr_19193_19216[(2)] = inst_19174);

(statearr_19193_19216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (10))){
var inst_19172 = (state_19180[(2)]);
var state_19180__$1 = state_19180;
var statearr_19194_19217 = state_19180__$1;
(statearr_19194_19217[(2)] = inst_19172);

(statearr_19194_19217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19181 === (8))){
var inst_19159 = (state_19180[(7)]);
var inst_19152 = (state_19180[(10)]);
var inst_19160 = (state_19180[(8)]);
var inst_19161 = (state_19180[(9)]);
var inst_19164 = (function (){var cs = inst_19152;
var vec__19157 = inst_19159;
var v = inst_19160;
var c = inst_19161;
return ((function (cs,vec__19157,v,c,inst_19159,inst_19152,inst_19160,inst_19161,state_val_19181,c__9944__auto___19208,out){
return (function (p1__19147_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19147_SHARP_);
});
;})(cs,vec__19157,v,c,inst_19159,inst_19152,inst_19160,inst_19161,state_val_19181,c__9944__auto___19208,out))
})();
var inst_19165 = cljs.core.filterv.call(null,inst_19164,inst_19152);
var inst_19152__$1 = inst_19165;
var state_19180__$1 = (function (){var statearr_19195 = state_19180;
(statearr_19195[(10)] = inst_19152__$1);

return statearr_19195;
})();
var statearr_19196_19218 = state_19180__$1;
(statearr_19196_19218[(2)] = null);

(statearr_19196_19218[(1)] = (2));


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
});})(c__9944__auto___19208,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19208,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19200[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19200[(1)] = (1));

return statearr_19200;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19180){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19201){if((e19201 instanceof Object)){
var ex__9883__auto__ = e19201;
var statearr_19202_19219 = state_19180;
(statearr_19202_19219[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19220 = state_19180;
state_19180 = G__19220;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19208,out))
})();
var state__9946__auto__ = (function (){var statearr_19203 = f__9945__auto__.call(null);
(statearr_19203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19208);

return statearr_19203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19208,out))
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
var args19221 = [];
var len__6152__auto___19270 = arguments.length;
var i__6153__auto___19271 = (0);
while(true){
if((i__6153__auto___19271 < len__6152__auto___19270)){
args19221.push((arguments[i__6153__auto___19271]));

var G__19272 = (i__6153__auto___19271 + (1));
i__6153__auto___19271 = G__19272;
continue;
} else {
}
break;
}

var G__19223 = args19221.length;
switch (G__19223) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19221.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19274,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19274,out){
return (function (state_19247){
var state_val_19248 = (state_19247[(1)]);
if((state_val_19248 === (7))){
var inst_19229 = (state_19247[(7)]);
var inst_19229__$1 = (state_19247[(2)]);
var inst_19230 = (inst_19229__$1 == null);
var inst_19231 = cljs.core.not.call(null,inst_19230);
var state_19247__$1 = (function (){var statearr_19249 = state_19247;
(statearr_19249[(7)] = inst_19229__$1);

return statearr_19249;
})();
if(inst_19231){
var statearr_19250_19275 = state_19247__$1;
(statearr_19250_19275[(1)] = (8));

} else {
var statearr_19251_19276 = state_19247__$1;
(statearr_19251_19276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (1))){
var inst_19224 = (0);
var state_19247__$1 = (function (){var statearr_19252 = state_19247;
(statearr_19252[(8)] = inst_19224);

return statearr_19252;
})();
var statearr_19253_19277 = state_19247__$1;
(statearr_19253_19277[(2)] = null);

(statearr_19253_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (4))){
var state_19247__$1 = state_19247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19247__$1,(7),ch);
} else {
if((state_val_19248 === (6))){
var inst_19242 = (state_19247[(2)]);
var state_19247__$1 = state_19247;
var statearr_19254_19278 = state_19247__$1;
(statearr_19254_19278[(2)] = inst_19242);

(statearr_19254_19278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (3))){
var inst_19244 = (state_19247[(2)]);
var inst_19245 = cljs.core.async.close_BANG_.call(null,out);
var state_19247__$1 = (function (){var statearr_19255 = state_19247;
(statearr_19255[(9)] = inst_19244);

return statearr_19255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19247__$1,inst_19245);
} else {
if((state_val_19248 === (2))){
var inst_19224 = (state_19247[(8)]);
var inst_19226 = (inst_19224 < n);
var state_19247__$1 = state_19247;
if(cljs.core.truth_(inst_19226)){
var statearr_19256_19279 = state_19247__$1;
(statearr_19256_19279[(1)] = (4));

} else {
var statearr_19257_19280 = state_19247__$1;
(statearr_19257_19280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (11))){
var inst_19224 = (state_19247[(8)]);
var inst_19234 = (state_19247[(2)]);
var inst_19235 = (inst_19224 + (1));
var inst_19224__$1 = inst_19235;
var state_19247__$1 = (function (){var statearr_19258 = state_19247;
(statearr_19258[(10)] = inst_19234);

(statearr_19258[(8)] = inst_19224__$1);

return statearr_19258;
})();
var statearr_19259_19281 = state_19247__$1;
(statearr_19259_19281[(2)] = null);

(statearr_19259_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (9))){
var state_19247__$1 = state_19247;
var statearr_19260_19282 = state_19247__$1;
(statearr_19260_19282[(2)] = null);

(statearr_19260_19282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (5))){
var state_19247__$1 = state_19247;
var statearr_19261_19283 = state_19247__$1;
(statearr_19261_19283[(2)] = null);

(statearr_19261_19283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (10))){
var inst_19239 = (state_19247[(2)]);
var state_19247__$1 = state_19247;
var statearr_19262_19284 = state_19247__$1;
(statearr_19262_19284[(2)] = inst_19239);

(statearr_19262_19284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (8))){
var inst_19229 = (state_19247[(7)]);
var state_19247__$1 = state_19247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19247__$1,(11),out,inst_19229);
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
});})(c__9944__auto___19274,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19274,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19266[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19266[(1)] = (1));

return statearr_19266;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19247){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19267){if((e19267 instanceof Object)){
var ex__9883__auto__ = e19267;
var statearr_19268_19285 = state_19247;
(statearr_19268_19285[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19286 = state_19247;
state_19247 = G__19286;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19274,out))
})();
var state__9946__auto__ = (function (){var statearr_19269 = f__9945__auto__.call(null);
(statearr_19269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19274);

return statearr_19269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19274,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19294 = (function (map_LT_,f,ch,meta19295){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19295 = meta19295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19296,meta19295__$1){
var self__ = this;
var _19296__$1 = this;
return (new cljs.core.async.t_cljs$core$async19294(self__.map_LT_,self__.f,self__.ch,meta19295__$1));
});

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19296){
var self__ = this;
var _19296__$1 = this;
return self__.meta19295;
});

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19297 = (function (map_LT_,f,ch,meta19295,_,fn1,meta19298){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19295 = meta19295;
this._ = _;
this.fn1 = fn1;
this.meta19298 = meta19298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19299,meta19298__$1){
var self__ = this;
var _19299__$1 = this;
return (new cljs.core.async.t_cljs$core$async19297(self__.map_LT_,self__.f,self__.ch,self__.meta19295,self__._,self__.fn1,meta19298__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19299){
var self__ = this;
var _19299__$1 = this;
return self__.meta19298;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19297.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19287_SHARP_){
return f1.call(null,(((p1__19287_SHARP_ == null))?null:self__.f.call(null,p1__19287_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19297.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19295","meta19295",-1209771615,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19294","cljs.core.async/t_cljs$core$async19294",460880622,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19298","meta19298",1104999676,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19297";

cljs.core.async.t_cljs$core$async19297.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19297");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19297 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19297(map_LT___$1,f__$1,ch__$1,meta19295__$1,___$2,fn1__$1,meta19298){
return (new cljs.core.async.t_cljs$core$async19297(map_LT___$1,f__$1,ch__$1,meta19295__$1,___$2,fn1__$1,meta19298));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19297(self__.map_LT_,self__.f,self__.ch,self__.meta19295,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19295","meta19295",-1209771615,null)], null);
});

cljs.core.async.t_cljs$core$async19294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19294";

cljs.core.async.t_cljs$core$async19294.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19294");
});

cljs.core.async.__GT_t_cljs$core$async19294 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19294(map_LT___$1,f__$1,ch__$1,meta19295){
return (new cljs.core.async.t_cljs$core$async19294(map_LT___$1,f__$1,ch__$1,meta19295));
});

}

return (new cljs.core.async.t_cljs$core$async19294(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19303 = (function (map_GT_,f,ch,meta19304){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19304 = meta19304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19305,meta19304__$1){
var self__ = this;
var _19305__$1 = this;
return (new cljs.core.async.t_cljs$core$async19303(self__.map_GT_,self__.f,self__.ch,meta19304__$1));
});

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19305){
var self__ = this;
var _19305__$1 = this;
return self__.meta19304;
});

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19304","meta19304",266227628,null)], null);
});

cljs.core.async.t_cljs$core$async19303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19303";

cljs.core.async.t_cljs$core$async19303.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19303");
});

cljs.core.async.__GT_t_cljs$core$async19303 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19303(map_GT___$1,f__$1,ch__$1,meta19304){
return (new cljs.core.async.t_cljs$core$async19303(map_GT___$1,f__$1,ch__$1,meta19304));
});

}

return (new cljs.core.async.t_cljs$core$async19303(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19309 = (function (filter_GT_,p,ch,meta19310){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19310 = meta19310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19311,meta19310__$1){
var self__ = this;
var _19311__$1 = this;
return (new cljs.core.async.t_cljs$core$async19309(self__.filter_GT_,self__.p,self__.ch,meta19310__$1));
});

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19311){
var self__ = this;
var _19311__$1 = this;
return self__.meta19310;
});

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19310","meta19310",-68225620,null)], null);
});

cljs.core.async.t_cljs$core$async19309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19309";

cljs.core.async.t_cljs$core$async19309.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19309");
});

cljs.core.async.__GT_t_cljs$core$async19309 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19309(filter_GT___$1,p__$1,ch__$1,meta19310){
return (new cljs.core.async.t_cljs$core$async19309(filter_GT___$1,p__$1,ch__$1,meta19310));
});

}

return (new cljs.core.async.t_cljs$core$async19309(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19312 = [];
var len__6152__auto___19356 = arguments.length;
var i__6153__auto___19357 = (0);
while(true){
if((i__6153__auto___19357 < len__6152__auto___19356)){
args19312.push((arguments[i__6153__auto___19357]));

var G__19358 = (i__6153__auto___19357 + (1));
i__6153__auto___19357 = G__19358;
continue;
} else {
}
break;
}

var G__19314 = args19312.length;
switch (G__19314) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19312.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19360,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19360,out){
return (function (state_19335){
var state_val_19336 = (state_19335[(1)]);
if((state_val_19336 === (7))){
var inst_19331 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
var statearr_19337_19361 = state_19335__$1;
(statearr_19337_19361[(2)] = inst_19331);

(statearr_19337_19361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (1))){
var state_19335__$1 = state_19335;
var statearr_19338_19362 = state_19335__$1;
(statearr_19338_19362[(2)] = null);

(statearr_19338_19362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (4))){
var inst_19317 = (state_19335[(7)]);
var inst_19317__$1 = (state_19335[(2)]);
var inst_19318 = (inst_19317__$1 == null);
var state_19335__$1 = (function (){var statearr_19339 = state_19335;
(statearr_19339[(7)] = inst_19317__$1);

return statearr_19339;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19340_19363 = state_19335__$1;
(statearr_19340_19363[(1)] = (5));

} else {
var statearr_19341_19364 = state_19335__$1;
(statearr_19341_19364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (6))){
var inst_19317 = (state_19335[(7)]);
var inst_19322 = p.call(null,inst_19317);
var state_19335__$1 = state_19335;
if(cljs.core.truth_(inst_19322)){
var statearr_19342_19365 = state_19335__$1;
(statearr_19342_19365[(1)] = (8));

} else {
var statearr_19343_19366 = state_19335__$1;
(statearr_19343_19366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (3))){
var inst_19333 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19335__$1,inst_19333);
} else {
if((state_val_19336 === (2))){
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19335__$1,(4),ch);
} else {
if((state_val_19336 === (11))){
var inst_19325 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
var statearr_19344_19367 = state_19335__$1;
(statearr_19344_19367[(2)] = inst_19325);

(statearr_19344_19367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (9))){
var state_19335__$1 = state_19335;
var statearr_19345_19368 = state_19335__$1;
(statearr_19345_19368[(2)] = null);

(statearr_19345_19368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (5))){
var inst_19320 = cljs.core.async.close_BANG_.call(null,out);
var state_19335__$1 = state_19335;
var statearr_19346_19369 = state_19335__$1;
(statearr_19346_19369[(2)] = inst_19320);

(statearr_19346_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (10))){
var inst_19328 = (state_19335[(2)]);
var state_19335__$1 = (function (){var statearr_19347 = state_19335;
(statearr_19347[(8)] = inst_19328);

return statearr_19347;
})();
var statearr_19348_19370 = state_19335__$1;
(statearr_19348_19370[(2)] = null);

(statearr_19348_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (8))){
var inst_19317 = (state_19335[(7)]);
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19335__$1,(11),out,inst_19317);
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
});})(c__9944__auto___19360,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19360,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null,null,null];
(statearr_19352[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19335){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__9883__auto__ = e19353;
var statearr_19354_19371 = state_19335;
(statearr_19354_19371[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19372 = state_19335;
state_19335 = G__19372;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19360,out))
})();
var state__9946__auto__ = (function (){var statearr_19355 = f__9945__auto__.call(null);
(statearr_19355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19360);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19360,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19373 = [];
var len__6152__auto___19376 = arguments.length;
var i__6153__auto___19377 = (0);
while(true){
if((i__6153__auto___19377 < len__6152__auto___19376)){
args19373.push((arguments[i__6153__auto___19377]));

var G__19378 = (i__6153__auto___19377 + (1));
i__6153__auto___19377 = G__19378;
continue;
} else {
}
break;
}

var G__19375 = args19373.length;
switch (G__19375) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19373.length)].join('')));

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
return (function (state_19545){
var state_val_19546 = (state_19545[(1)]);
if((state_val_19546 === (7))){
var inst_19541 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
var statearr_19547_19588 = state_19545__$1;
(statearr_19547_19588[(2)] = inst_19541);

(statearr_19547_19588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (20))){
var inst_19511 = (state_19545[(7)]);
var inst_19522 = (state_19545[(2)]);
var inst_19523 = cljs.core.next.call(null,inst_19511);
var inst_19497 = inst_19523;
var inst_19498 = null;
var inst_19499 = (0);
var inst_19500 = (0);
var state_19545__$1 = (function (){var statearr_19548 = state_19545;
(statearr_19548[(8)] = inst_19497);

(statearr_19548[(9)] = inst_19522);

(statearr_19548[(10)] = inst_19499);

(statearr_19548[(11)] = inst_19500);

(statearr_19548[(12)] = inst_19498);

return statearr_19548;
})();
var statearr_19549_19589 = state_19545__$1;
(statearr_19549_19589[(2)] = null);

(statearr_19549_19589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (1))){
var state_19545__$1 = state_19545;
var statearr_19550_19590 = state_19545__$1;
(statearr_19550_19590[(2)] = null);

(statearr_19550_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (4))){
var inst_19486 = (state_19545[(13)]);
var inst_19486__$1 = (state_19545[(2)]);
var inst_19487 = (inst_19486__$1 == null);
var state_19545__$1 = (function (){var statearr_19551 = state_19545;
(statearr_19551[(13)] = inst_19486__$1);

return statearr_19551;
})();
if(cljs.core.truth_(inst_19487)){
var statearr_19552_19591 = state_19545__$1;
(statearr_19552_19591[(1)] = (5));

} else {
var statearr_19553_19592 = state_19545__$1;
(statearr_19553_19592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (15))){
var state_19545__$1 = state_19545;
var statearr_19557_19593 = state_19545__$1;
(statearr_19557_19593[(2)] = null);

(statearr_19557_19593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (21))){
var state_19545__$1 = state_19545;
var statearr_19558_19594 = state_19545__$1;
(statearr_19558_19594[(2)] = null);

(statearr_19558_19594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (13))){
var inst_19497 = (state_19545[(8)]);
var inst_19499 = (state_19545[(10)]);
var inst_19500 = (state_19545[(11)]);
var inst_19498 = (state_19545[(12)]);
var inst_19507 = (state_19545[(2)]);
var inst_19508 = (inst_19500 + (1));
var tmp19554 = inst_19497;
var tmp19555 = inst_19499;
var tmp19556 = inst_19498;
var inst_19497__$1 = tmp19554;
var inst_19498__$1 = tmp19556;
var inst_19499__$1 = tmp19555;
var inst_19500__$1 = inst_19508;
var state_19545__$1 = (function (){var statearr_19559 = state_19545;
(statearr_19559[(8)] = inst_19497__$1);

(statearr_19559[(10)] = inst_19499__$1);

(statearr_19559[(11)] = inst_19500__$1);

(statearr_19559[(12)] = inst_19498__$1);

(statearr_19559[(14)] = inst_19507);

return statearr_19559;
})();
var statearr_19560_19595 = state_19545__$1;
(statearr_19560_19595[(2)] = null);

(statearr_19560_19595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (22))){
var state_19545__$1 = state_19545;
var statearr_19561_19596 = state_19545__$1;
(statearr_19561_19596[(2)] = null);

(statearr_19561_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (6))){
var inst_19486 = (state_19545[(13)]);
var inst_19495 = f.call(null,inst_19486);
var inst_19496 = cljs.core.seq.call(null,inst_19495);
var inst_19497 = inst_19496;
var inst_19498 = null;
var inst_19499 = (0);
var inst_19500 = (0);
var state_19545__$1 = (function (){var statearr_19562 = state_19545;
(statearr_19562[(8)] = inst_19497);

(statearr_19562[(10)] = inst_19499);

(statearr_19562[(11)] = inst_19500);

(statearr_19562[(12)] = inst_19498);

return statearr_19562;
})();
var statearr_19563_19597 = state_19545__$1;
(statearr_19563_19597[(2)] = null);

(statearr_19563_19597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (17))){
var inst_19511 = (state_19545[(7)]);
var inst_19515 = cljs.core.chunk_first.call(null,inst_19511);
var inst_19516 = cljs.core.chunk_rest.call(null,inst_19511);
var inst_19517 = cljs.core.count.call(null,inst_19515);
var inst_19497 = inst_19516;
var inst_19498 = inst_19515;
var inst_19499 = inst_19517;
var inst_19500 = (0);
var state_19545__$1 = (function (){var statearr_19564 = state_19545;
(statearr_19564[(8)] = inst_19497);

(statearr_19564[(10)] = inst_19499);

(statearr_19564[(11)] = inst_19500);

(statearr_19564[(12)] = inst_19498);

return statearr_19564;
})();
var statearr_19565_19598 = state_19545__$1;
(statearr_19565_19598[(2)] = null);

(statearr_19565_19598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (3))){
var inst_19543 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19545__$1,inst_19543);
} else {
if((state_val_19546 === (12))){
var inst_19531 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
var statearr_19566_19599 = state_19545__$1;
(statearr_19566_19599[(2)] = inst_19531);

(statearr_19566_19599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (2))){
var state_19545__$1 = state_19545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19545__$1,(4),in$);
} else {
if((state_val_19546 === (23))){
var inst_19539 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
var statearr_19567_19600 = state_19545__$1;
(statearr_19567_19600[(2)] = inst_19539);

(statearr_19567_19600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (19))){
var inst_19526 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
var statearr_19568_19601 = state_19545__$1;
(statearr_19568_19601[(2)] = inst_19526);

(statearr_19568_19601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (11))){
var inst_19497 = (state_19545[(8)]);
var inst_19511 = (state_19545[(7)]);
var inst_19511__$1 = cljs.core.seq.call(null,inst_19497);
var state_19545__$1 = (function (){var statearr_19569 = state_19545;
(statearr_19569[(7)] = inst_19511__$1);

return statearr_19569;
})();
if(inst_19511__$1){
var statearr_19570_19602 = state_19545__$1;
(statearr_19570_19602[(1)] = (14));

} else {
var statearr_19571_19603 = state_19545__$1;
(statearr_19571_19603[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (9))){
var inst_19533 = (state_19545[(2)]);
var inst_19534 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19545__$1 = (function (){var statearr_19572 = state_19545;
(statearr_19572[(15)] = inst_19533);

return statearr_19572;
})();
if(cljs.core.truth_(inst_19534)){
var statearr_19573_19604 = state_19545__$1;
(statearr_19573_19604[(1)] = (21));

} else {
var statearr_19574_19605 = state_19545__$1;
(statearr_19574_19605[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (5))){
var inst_19489 = cljs.core.async.close_BANG_.call(null,out);
var state_19545__$1 = state_19545;
var statearr_19575_19606 = state_19545__$1;
(statearr_19575_19606[(2)] = inst_19489);

(statearr_19575_19606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (14))){
var inst_19511 = (state_19545[(7)]);
var inst_19513 = cljs.core.chunked_seq_QMARK_.call(null,inst_19511);
var state_19545__$1 = state_19545;
if(inst_19513){
var statearr_19576_19607 = state_19545__$1;
(statearr_19576_19607[(1)] = (17));

} else {
var statearr_19577_19608 = state_19545__$1;
(statearr_19577_19608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (16))){
var inst_19529 = (state_19545[(2)]);
var state_19545__$1 = state_19545;
var statearr_19578_19609 = state_19545__$1;
(statearr_19578_19609[(2)] = inst_19529);

(statearr_19578_19609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19546 === (10))){
var inst_19500 = (state_19545[(11)]);
var inst_19498 = (state_19545[(12)]);
var inst_19505 = cljs.core._nth.call(null,inst_19498,inst_19500);
var state_19545__$1 = state_19545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19545__$1,(13),out,inst_19505);
} else {
if((state_val_19546 === (18))){
var inst_19511 = (state_19545[(7)]);
var inst_19520 = cljs.core.first.call(null,inst_19511);
var state_19545__$1 = state_19545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19545__$1,(20),out,inst_19520);
} else {
if((state_val_19546 === (8))){
var inst_19499 = (state_19545[(10)]);
var inst_19500 = (state_19545[(11)]);
var inst_19502 = (inst_19500 < inst_19499);
var inst_19503 = inst_19502;
var state_19545__$1 = state_19545;
if(cljs.core.truth_(inst_19503)){
var statearr_19579_19610 = state_19545__$1;
(statearr_19579_19610[(1)] = (10));

} else {
var statearr_19580_19611 = state_19545__$1;
(statearr_19580_19611[(1)] = (11));

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
var statearr_19584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19584[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__);

(statearr_19584[(1)] = (1));

return statearr_19584;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1 = (function (state_19545){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19585){if((e19585 instanceof Object)){
var ex__9883__auto__ = e19585;
var statearr_19586_19612 = state_19545;
(statearr_19586_19612[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19613 = state_19545;
state_19545 = G__19613;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__ = function(state_19545){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1.call(this,state_19545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_19587 = f__9945__auto__.call(null);
(statearr_19587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_19587;
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
var args19614 = [];
var len__6152__auto___19617 = arguments.length;
var i__6153__auto___19618 = (0);
while(true){
if((i__6153__auto___19618 < len__6152__auto___19617)){
args19614.push((arguments[i__6153__auto___19618]));

var G__19619 = (i__6153__auto___19618 + (1));
i__6153__auto___19618 = G__19619;
continue;
} else {
}
break;
}

var G__19616 = args19614.length;
switch (G__19616) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19614.length)].join('')));

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
var args19621 = [];
var len__6152__auto___19624 = arguments.length;
var i__6153__auto___19625 = (0);
while(true){
if((i__6153__auto___19625 < len__6152__auto___19624)){
args19621.push((arguments[i__6153__auto___19625]));

var G__19626 = (i__6153__auto___19625 + (1));
i__6153__auto___19625 = G__19626;
continue;
} else {
}
break;
}

var G__19623 = args19621.length;
switch (G__19623) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19621.length)].join('')));

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
var args19628 = [];
var len__6152__auto___19679 = arguments.length;
var i__6153__auto___19680 = (0);
while(true){
if((i__6153__auto___19680 < len__6152__auto___19679)){
args19628.push((arguments[i__6153__auto___19680]));

var G__19681 = (i__6153__auto___19680 + (1));
i__6153__auto___19680 = G__19681;
continue;
} else {
}
break;
}

var G__19630 = args19628.length;
switch (G__19630) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19628.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19683,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19683,out){
return (function (state_19654){
var state_val_19655 = (state_19654[(1)]);
if((state_val_19655 === (7))){
var inst_19649 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
var statearr_19656_19684 = state_19654__$1;
(statearr_19656_19684[(2)] = inst_19649);

(statearr_19656_19684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (1))){
var inst_19631 = null;
var state_19654__$1 = (function (){var statearr_19657 = state_19654;
(statearr_19657[(7)] = inst_19631);

return statearr_19657;
})();
var statearr_19658_19685 = state_19654__$1;
(statearr_19658_19685[(2)] = null);

(statearr_19658_19685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (4))){
var inst_19634 = (state_19654[(8)]);
var inst_19634__$1 = (state_19654[(2)]);
var inst_19635 = (inst_19634__$1 == null);
var inst_19636 = cljs.core.not.call(null,inst_19635);
var state_19654__$1 = (function (){var statearr_19659 = state_19654;
(statearr_19659[(8)] = inst_19634__$1);

return statearr_19659;
})();
if(inst_19636){
var statearr_19660_19686 = state_19654__$1;
(statearr_19660_19686[(1)] = (5));

} else {
var statearr_19661_19687 = state_19654__$1;
(statearr_19661_19687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (6))){
var state_19654__$1 = state_19654;
var statearr_19662_19688 = state_19654__$1;
(statearr_19662_19688[(2)] = null);

(statearr_19662_19688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (3))){
var inst_19651 = (state_19654[(2)]);
var inst_19652 = cljs.core.async.close_BANG_.call(null,out);
var state_19654__$1 = (function (){var statearr_19663 = state_19654;
(statearr_19663[(9)] = inst_19651);

return statearr_19663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19654__$1,inst_19652);
} else {
if((state_val_19655 === (2))){
var state_19654__$1 = state_19654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19654__$1,(4),ch);
} else {
if((state_val_19655 === (11))){
var inst_19634 = (state_19654[(8)]);
var inst_19643 = (state_19654[(2)]);
var inst_19631 = inst_19634;
var state_19654__$1 = (function (){var statearr_19664 = state_19654;
(statearr_19664[(7)] = inst_19631);

(statearr_19664[(10)] = inst_19643);

return statearr_19664;
})();
var statearr_19665_19689 = state_19654__$1;
(statearr_19665_19689[(2)] = null);

(statearr_19665_19689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (9))){
var inst_19634 = (state_19654[(8)]);
var state_19654__$1 = state_19654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19654__$1,(11),out,inst_19634);
} else {
if((state_val_19655 === (5))){
var inst_19631 = (state_19654[(7)]);
var inst_19634 = (state_19654[(8)]);
var inst_19638 = cljs.core._EQ_.call(null,inst_19634,inst_19631);
var state_19654__$1 = state_19654;
if(inst_19638){
var statearr_19667_19690 = state_19654__$1;
(statearr_19667_19690[(1)] = (8));

} else {
var statearr_19668_19691 = state_19654__$1;
(statearr_19668_19691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (10))){
var inst_19646 = (state_19654[(2)]);
var state_19654__$1 = state_19654;
var statearr_19669_19692 = state_19654__$1;
(statearr_19669_19692[(2)] = inst_19646);

(statearr_19669_19692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19655 === (8))){
var inst_19631 = (state_19654[(7)]);
var tmp19666 = inst_19631;
var inst_19631__$1 = tmp19666;
var state_19654__$1 = (function (){var statearr_19670 = state_19654;
(statearr_19670[(7)] = inst_19631__$1);

return statearr_19670;
})();
var statearr_19671_19693 = state_19654__$1;
(statearr_19671_19693[(2)] = null);

(statearr_19671_19693[(1)] = (2));


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
});})(c__9944__auto___19683,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19683,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19675[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19675[(1)] = (1));

return statearr_19675;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19654){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19676){if((e19676 instanceof Object)){
var ex__9883__auto__ = e19676;
var statearr_19677_19694 = state_19654;
(statearr_19677_19694[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19695 = state_19654;
state_19654 = G__19695;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19683,out))
})();
var state__9946__auto__ = (function (){var statearr_19678 = f__9945__auto__.call(null);
(statearr_19678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19683);

return statearr_19678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19683,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19696 = [];
var len__6152__auto___19766 = arguments.length;
var i__6153__auto___19767 = (0);
while(true){
if((i__6153__auto___19767 < len__6152__auto___19766)){
args19696.push((arguments[i__6153__auto___19767]));

var G__19768 = (i__6153__auto___19767 + (1));
i__6153__auto___19767 = G__19768;
continue;
} else {
}
break;
}

var G__19698 = args19696.length;
switch (G__19698) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19696.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19770,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19770,out){
return (function (state_19736){
var state_val_19737 = (state_19736[(1)]);
if((state_val_19737 === (7))){
var inst_19732 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
var statearr_19738_19771 = state_19736__$1;
(statearr_19738_19771[(2)] = inst_19732);

(statearr_19738_19771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (1))){
var inst_19699 = (new Array(n));
var inst_19700 = inst_19699;
var inst_19701 = (0);
var state_19736__$1 = (function (){var statearr_19739 = state_19736;
(statearr_19739[(7)] = inst_19701);

(statearr_19739[(8)] = inst_19700);

return statearr_19739;
})();
var statearr_19740_19772 = state_19736__$1;
(statearr_19740_19772[(2)] = null);

(statearr_19740_19772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (4))){
var inst_19704 = (state_19736[(9)]);
var inst_19704__$1 = (state_19736[(2)]);
var inst_19705 = (inst_19704__$1 == null);
var inst_19706 = cljs.core.not.call(null,inst_19705);
var state_19736__$1 = (function (){var statearr_19741 = state_19736;
(statearr_19741[(9)] = inst_19704__$1);

return statearr_19741;
})();
if(inst_19706){
var statearr_19742_19773 = state_19736__$1;
(statearr_19742_19773[(1)] = (5));

} else {
var statearr_19743_19774 = state_19736__$1;
(statearr_19743_19774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (15))){
var inst_19726 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
var statearr_19744_19775 = state_19736__$1;
(statearr_19744_19775[(2)] = inst_19726);

(statearr_19744_19775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (13))){
var state_19736__$1 = state_19736;
var statearr_19745_19776 = state_19736__$1;
(statearr_19745_19776[(2)] = null);

(statearr_19745_19776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (6))){
var inst_19701 = (state_19736[(7)]);
var inst_19722 = (inst_19701 > (0));
var state_19736__$1 = state_19736;
if(cljs.core.truth_(inst_19722)){
var statearr_19746_19777 = state_19736__$1;
(statearr_19746_19777[(1)] = (12));

} else {
var statearr_19747_19778 = state_19736__$1;
(statearr_19747_19778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (3))){
var inst_19734 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19736__$1,inst_19734);
} else {
if((state_val_19737 === (12))){
var inst_19700 = (state_19736[(8)]);
var inst_19724 = cljs.core.vec.call(null,inst_19700);
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19736__$1,(15),out,inst_19724);
} else {
if((state_val_19737 === (2))){
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19736__$1,(4),ch);
} else {
if((state_val_19737 === (11))){
var inst_19716 = (state_19736[(2)]);
var inst_19717 = (new Array(n));
var inst_19700 = inst_19717;
var inst_19701 = (0);
var state_19736__$1 = (function (){var statearr_19748 = state_19736;
(statearr_19748[(7)] = inst_19701);

(statearr_19748[(8)] = inst_19700);

(statearr_19748[(10)] = inst_19716);

return statearr_19748;
})();
var statearr_19749_19779 = state_19736__$1;
(statearr_19749_19779[(2)] = null);

(statearr_19749_19779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (9))){
var inst_19700 = (state_19736[(8)]);
var inst_19714 = cljs.core.vec.call(null,inst_19700);
var state_19736__$1 = state_19736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19736__$1,(11),out,inst_19714);
} else {
if((state_val_19737 === (5))){
var inst_19709 = (state_19736[(11)]);
var inst_19704 = (state_19736[(9)]);
var inst_19701 = (state_19736[(7)]);
var inst_19700 = (state_19736[(8)]);
var inst_19708 = (inst_19700[inst_19701] = inst_19704);
var inst_19709__$1 = (inst_19701 + (1));
var inst_19710 = (inst_19709__$1 < n);
var state_19736__$1 = (function (){var statearr_19750 = state_19736;
(statearr_19750[(11)] = inst_19709__$1);

(statearr_19750[(12)] = inst_19708);

return statearr_19750;
})();
if(cljs.core.truth_(inst_19710)){
var statearr_19751_19780 = state_19736__$1;
(statearr_19751_19780[(1)] = (8));

} else {
var statearr_19752_19781 = state_19736__$1;
(statearr_19752_19781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (14))){
var inst_19729 = (state_19736[(2)]);
var inst_19730 = cljs.core.async.close_BANG_.call(null,out);
var state_19736__$1 = (function (){var statearr_19754 = state_19736;
(statearr_19754[(13)] = inst_19729);

return statearr_19754;
})();
var statearr_19755_19782 = state_19736__$1;
(statearr_19755_19782[(2)] = inst_19730);

(statearr_19755_19782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (10))){
var inst_19720 = (state_19736[(2)]);
var state_19736__$1 = state_19736;
var statearr_19756_19783 = state_19736__$1;
(statearr_19756_19783[(2)] = inst_19720);

(statearr_19756_19783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19737 === (8))){
var inst_19709 = (state_19736[(11)]);
var inst_19700 = (state_19736[(8)]);
var tmp19753 = inst_19700;
var inst_19700__$1 = tmp19753;
var inst_19701 = inst_19709;
var state_19736__$1 = (function (){var statearr_19757 = state_19736;
(statearr_19757[(7)] = inst_19701);

(statearr_19757[(8)] = inst_19700__$1);

return statearr_19757;
})();
var statearr_19758_19784 = state_19736__$1;
(statearr_19758_19784[(2)] = null);

(statearr_19758_19784[(1)] = (2));


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
});})(c__9944__auto___19770,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19770,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19762[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19762[(1)] = (1));

return statearr_19762;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19736){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19763){if((e19763 instanceof Object)){
var ex__9883__auto__ = e19763;
var statearr_19764_19785 = state_19736;
(statearr_19764_19785[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19786 = state_19736;
state_19736 = G__19786;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19770,out))
})();
var state__9946__auto__ = (function (){var statearr_19765 = f__9945__auto__.call(null);
(statearr_19765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19770);

return statearr_19765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19770,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19787 = [];
var len__6152__auto___19861 = arguments.length;
var i__6153__auto___19862 = (0);
while(true){
if((i__6153__auto___19862 < len__6152__auto___19861)){
args19787.push((arguments[i__6153__auto___19862]));

var G__19863 = (i__6153__auto___19862 + (1));
i__6153__auto___19862 = G__19863;
continue;
} else {
}
break;
}

var G__19789 = args19787.length;
switch (G__19789) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19787.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9944__auto___19865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto___19865,out){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto___19865,out){
return (function (state_19831){
var state_val_19832 = (state_19831[(1)]);
if((state_val_19832 === (7))){
var inst_19827 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
var statearr_19833_19866 = state_19831__$1;
(statearr_19833_19866[(2)] = inst_19827);

(statearr_19833_19866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (1))){
var inst_19790 = [];
var inst_19791 = inst_19790;
var inst_19792 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19831__$1 = (function (){var statearr_19834 = state_19831;
(statearr_19834[(7)] = inst_19791);

(statearr_19834[(8)] = inst_19792);

return statearr_19834;
})();
var statearr_19835_19867 = state_19831__$1;
(statearr_19835_19867[(2)] = null);

(statearr_19835_19867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (4))){
var inst_19795 = (state_19831[(9)]);
var inst_19795__$1 = (state_19831[(2)]);
var inst_19796 = (inst_19795__$1 == null);
var inst_19797 = cljs.core.not.call(null,inst_19796);
var state_19831__$1 = (function (){var statearr_19836 = state_19831;
(statearr_19836[(9)] = inst_19795__$1);

return statearr_19836;
})();
if(inst_19797){
var statearr_19837_19868 = state_19831__$1;
(statearr_19837_19868[(1)] = (5));

} else {
var statearr_19838_19869 = state_19831__$1;
(statearr_19838_19869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (15))){
var inst_19821 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
var statearr_19839_19870 = state_19831__$1;
(statearr_19839_19870[(2)] = inst_19821);

(statearr_19839_19870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (13))){
var state_19831__$1 = state_19831;
var statearr_19840_19871 = state_19831__$1;
(statearr_19840_19871[(2)] = null);

(statearr_19840_19871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (6))){
var inst_19791 = (state_19831[(7)]);
var inst_19816 = inst_19791.length;
var inst_19817 = (inst_19816 > (0));
var state_19831__$1 = state_19831;
if(cljs.core.truth_(inst_19817)){
var statearr_19841_19872 = state_19831__$1;
(statearr_19841_19872[(1)] = (12));

} else {
var statearr_19842_19873 = state_19831__$1;
(statearr_19842_19873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (3))){
var inst_19829 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19831__$1,inst_19829);
} else {
if((state_val_19832 === (12))){
var inst_19791 = (state_19831[(7)]);
var inst_19819 = cljs.core.vec.call(null,inst_19791);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19831__$1,(15),out,inst_19819);
} else {
if((state_val_19832 === (2))){
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19831__$1,(4),ch);
} else {
if((state_val_19832 === (11))){
var inst_19799 = (state_19831[(10)]);
var inst_19795 = (state_19831[(9)]);
var inst_19809 = (state_19831[(2)]);
var inst_19810 = [];
var inst_19811 = inst_19810.push(inst_19795);
var inst_19791 = inst_19810;
var inst_19792 = inst_19799;
var state_19831__$1 = (function (){var statearr_19843 = state_19831;
(statearr_19843[(7)] = inst_19791);

(statearr_19843[(11)] = inst_19809);

(statearr_19843[(8)] = inst_19792);

(statearr_19843[(12)] = inst_19811);

return statearr_19843;
})();
var statearr_19844_19874 = state_19831__$1;
(statearr_19844_19874[(2)] = null);

(statearr_19844_19874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (9))){
var inst_19791 = (state_19831[(7)]);
var inst_19807 = cljs.core.vec.call(null,inst_19791);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19831__$1,(11),out,inst_19807);
} else {
if((state_val_19832 === (5))){
var inst_19799 = (state_19831[(10)]);
var inst_19795 = (state_19831[(9)]);
var inst_19792 = (state_19831[(8)]);
var inst_19799__$1 = f.call(null,inst_19795);
var inst_19800 = cljs.core._EQ_.call(null,inst_19799__$1,inst_19792);
var inst_19801 = cljs.core.keyword_identical_QMARK_.call(null,inst_19792,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19802 = (inst_19800) || (inst_19801);
var state_19831__$1 = (function (){var statearr_19845 = state_19831;
(statearr_19845[(10)] = inst_19799__$1);

return statearr_19845;
})();
if(cljs.core.truth_(inst_19802)){
var statearr_19846_19875 = state_19831__$1;
(statearr_19846_19875[(1)] = (8));

} else {
var statearr_19847_19876 = state_19831__$1;
(statearr_19847_19876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (14))){
var inst_19824 = (state_19831[(2)]);
var inst_19825 = cljs.core.async.close_BANG_.call(null,out);
var state_19831__$1 = (function (){var statearr_19849 = state_19831;
(statearr_19849[(13)] = inst_19824);

return statearr_19849;
})();
var statearr_19850_19877 = state_19831__$1;
(statearr_19850_19877[(2)] = inst_19825);

(statearr_19850_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (10))){
var inst_19814 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
var statearr_19851_19878 = state_19831__$1;
(statearr_19851_19878[(2)] = inst_19814);

(statearr_19851_19878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19832 === (8))){
var inst_19799 = (state_19831[(10)]);
var inst_19795 = (state_19831[(9)]);
var inst_19791 = (state_19831[(7)]);
var inst_19804 = inst_19791.push(inst_19795);
var tmp19848 = inst_19791;
var inst_19791__$1 = tmp19848;
var inst_19792 = inst_19799;
var state_19831__$1 = (function (){var statearr_19852 = state_19831;
(statearr_19852[(7)] = inst_19791__$1);

(statearr_19852[(14)] = inst_19804);

(statearr_19852[(8)] = inst_19792);

return statearr_19852;
})();
var statearr_19853_19879 = state_19831__$1;
(statearr_19853_19879[(2)] = null);

(statearr_19853_19879[(1)] = (2));


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
});})(c__9944__auto___19865,out))
;
return ((function (switch__9879__auto__,c__9944__auto___19865,out){
return (function() {
var cljs$core$async$state_machine__9880__auto__ = null;
var cljs$core$async$state_machine__9880__auto____0 = (function (){
var statearr_19857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19857[(0)] = cljs$core$async$state_machine__9880__auto__);

(statearr_19857[(1)] = (1));

return statearr_19857;
});
var cljs$core$async$state_machine__9880__auto____1 = (function (state_19831){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_19831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e19858){if((e19858 instanceof Object)){
var ex__9883__auto__ = e19858;
var statearr_19859_19880 = state_19831;
(statearr_19859_19880[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19881 = state_19831;
state_19831 = G__19881;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
cljs$core$async$state_machine__9880__auto__ = function(state_19831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9880__auto____1.call(this,state_19831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9880__auto____0;
cljs$core$async$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9880__auto____1;
return cljs$core$async$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto___19865,out))
})();
var state__9946__auto__ = (function (){var statearr_19860 = f__9945__auto__.call(null);
(statearr_19860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto___19865);

return statearr_19860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto___19865,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map