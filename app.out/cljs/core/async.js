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
if(typeof cljs.core.async.t_cljs$core$async17434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17434 = (function (fn_handler,f,meta17435){
this.fn_handler = fn_handler;
this.f = f;
this.meta17435 = meta17435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17436,meta17435__$1){
var self__ = this;
var _17436__$1 = this;
return (new cljs.core.async.t_cljs$core$async17434(self__.fn_handler,self__.f,meta17435__$1));
});

cljs.core.async.t_cljs$core$async17434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17436){
var self__ = this;
var _17436__$1 = this;
return self__.meta17435;
});

cljs.core.async.t_cljs$core$async17434.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17435","meta17435",472407260,null)], null);
});

cljs.core.async.t_cljs$core$async17434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17434";

cljs.core.async.t_cljs$core$async17434.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17434");
});

cljs.core.async.__GT_t_cljs$core$async17434 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17434(fn_handler__$1,f__$1,meta17435){
return (new cljs.core.async.t_cljs$core$async17434(fn_handler__$1,f__$1,meta17435));
});

}

return (new cljs.core.async.t_cljs$core$async17434(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args17439 = [];
var len__6152__auto___17442 = arguments.length;
var i__6153__auto___17443 = (0);
while(true){
if((i__6153__auto___17443 < len__6152__auto___17442)){
args17439.push((arguments[i__6153__auto___17443]));

var G__17444 = (i__6153__auto___17443 + (1));
i__6153__auto___17443 = G__17444;
continue;
} else {
}
break;
}

var G__17441 = args17439.length;
switch (G__17441) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17439.length)].join('')));

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
var args17446 = [];
var len__6152__auto___17449 = arguments.length;
var i__6153__auto___17450 = (0);
while(true){
if((i__6153__auto___17450 < len__6152__auto___17449)){
args17446.push((arguments[i__6153__auto___17450]));

var G__17451 = (i__6153__auto___17450 + (1));
i__6153__auto___17450 = G__17451;
continue;
} else {
}
break;
}

var G__17448 = args17446.length;
switch (G__17448) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17446.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17453 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17453);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17453,ret){
return (function (){
return fn1.call(null,val_17453);
});})(val_17453,ret))
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
var args17454 = [];
var len__6152__auto___17457 = arguments.length;
var i__6153__auto___17458 = (0);
while(true){
if((i__6153__auto___17458 < len__6152__auto___17457)){
args17454.push((arguments[i__6153__auto___17458]));

var G__17459 = (i__6153__auto___17458 + (1));
i__6153__auto___17458 = G__17459;
continue;
} else {
}
break;
}

var G__17456 = args17454.length;
switch (G__17456) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17454.length)].join('')));

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
var n__5997__auto___17461 = n;
var x_17462 = (0);
while(true){
if((x_17462 < n__5997__auto___17461)){
(a[x_17462] = (0));

var G__17463 = (x_17462 + (1));
x_17462 = G__17463;
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

var G__17464 = (i + (1));
i = G__17464;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17468 = (function (alt_flag,flag,meta17469){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17469 = meta17469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17470,meta17469__$1){
var self__ = this;
var _17470__$1 = this;
return (new cljs.core.async.t_cljs$core$async17468(self__.alt_flag,self__.flag,meta17469__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17470){
var self__ = this;
var _17470__$1 = this;
return self__.meta17469;
});})(flag))
;

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17468.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17469","meta17469",-681977047,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17468";

cljs.core.async.t_cljs$core$async17468.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17468");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17468 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17468(alt_flag__$1,flag__$1,meta17469){
return (new cljs.core.async.t_cljs$core$async17468(alt_flag__$1,flag__$1,meta17469));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17468(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17474 = (function (alt_handler,flag,cb,meta17475){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17475 = meta17475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17476,meta17475__$1){
var self__ = this;
var _17476__$1 = this;
return (new cljs.core.async.t_cljs$core$async17474(self__.alt_handler,self__.flag,self__.cb,meta17475__$1));
});

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17476){
var self__ = this;
var _17476__$1 = this;
return self__.meta17475;
});

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17475","meta17475",508228667,null)], null);
});

cljs.core.async.t_cljs$core$async17474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17474";

cljs.core.async.t_cljs$core$async17474.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17474");
});

cljs.core.async.__GT_t_cljs$core$async17474 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17474(alt_handler__$1,flag__$1,cb__$1,meta17475){
return (new cljs.core.async.t_cljs$core$async17474(alt_handler__$1,flag__$1,cb__$1,meta17475));
});

}

return (new cljs.core.async.t_cljs$core$async17474(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17477_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17477_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17478_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17478_SHARP_,port], null));
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
var G__17479 = (i + (1));
i = G__17479;
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
var len__6152__auto___17485 = arguments.length;
var i__6153__auto___17486 = (0);
while(true){
if((i__6153__auto___17486 < len__6152__auto___17485)){
args__6159__auto__.push((arguments[i__6153__auto___17486]));

var G__17487 = (i__6153__auto___17486 + (1));
i__6153__auto___17486 = G__17487;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17482){
var map__17483 = p__17482;
var map__17483__$1 = ((((!((map__17483 == null)))?((((map__17483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17483):map__17483);
var opts = map__17483__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17480){
var G__17481 = cljs.core.first.call(null,seq17480);
var seq17480__$1 = cljs.core.next.call(null,seq17480);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17481,seq17480__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17488 = [];
var len__6152__auto___17538 = arguments.length;
var i__6153__auto___17539 = (0);
while(true){
if((i__6153__auto___17539 < len__6152__auto___17538)){
args17488.push((arguments[i__6153__auto___17539]));

var G__17540 = (i__6153__auto___17539 + (1));
i__6153__auto___17539 = G__17540;
continue;
} else {
}
break;
}

var G__17490 = args17488.length;
switch (G__17490) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17488.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10686__auto___17542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17542){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17542){
return (function (state_17514){
var state_val_17515 = (state_17514[(1)]);
if((state_val_17515 === (7))){
var inst_17510 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
var statearr_17516_17543 = state_17514__$1;
(statearr_17516_17543[(2)] = inst_17510);

(statearr_17516_17543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (1))){
var state_17514__$1 = state_17514;
var statearr_17517_17544 = state_17514__$1;
(statearr_17517_17544[(2)] = null);

(statearr_17517_17544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (4))){
var inst_17493 = (state_17514[(7)]);
var inst_17493__$1 = (state_17514[(2)]);
var inst_17494 = (inst_17493__$1 == null);
var state_17514__$1 = (function (){var statearr_17518 = state_17514;
(statearr_17518[(7)] = inst_17493__$1);

return statearr_17518;
})();
if(cljs.core.truth_(inst_17494)){
var statearr_17519_17545 = state_17514__$1;
(statearr_17519_17545[(1)] = (5));

} else {
var statearr_17520_17546 = state_17514__$1;
(statearr_17520_17546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (13))){
var state_17514__$1 = state_17514;
var statearr_17521_17547 = state_17514__$1;
(statearr_17521_17547[(2)] = null);

(statearr_17521_17547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (6))){
var inst_17493 = (state_17514[(7)]);
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17514__$1,(11),to,inst_17493);
} else {
if((state_val_17515 === (3))){
var inst_17512 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17514__$1,inst_17512);
} else {
if((state_val_17515 === (12))){
var state_17514__$1 = state_17514;
var statearr_17522_17548 = state_17514__$1;
(statearr_17522_17548[(2)] = null);

(statearr_17522_17548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (2))){
var state_17514__$1 = state_17514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17514__$1,(4),from);
} else {
if((state_val_17515 === (11))){
var inst_17503 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
if(cljs.core.truth_(inst_17503)){
var statearr_17523_17549 = state_17514__$1;
(statearr_17523_17549[(1)] = (12));

} else {
var statearr_17524_17550 = state_17514__$1;
(statearr_17524_17550[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (9))){
var state_17514__$1 = state_17514;
var statearr_17525_17551 = state_17514__$1;
(statearr_17525_17551[(2)] = null);

(statearr_17525_17551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (5))){
var state_17514__$1 = state_17514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17526_17552 = state_17514__$1;
(statearr_17526_17552[(1)] = (8));

} else {
var statearr_17527_17553 = state_17514__$1;
(statearr_17527_17553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (14))){
var inst_17508 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
var statearr_17528_17554 = state_17514__$1;
(statearr_17528_17554[(2)] = inst_17508);

(statearr_17528_17554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (10))){
var inst_17500 = (state_17514[(2)]);
var state_17514__$1 = state_17514;
var statearr_17529_17555 = state_17514__$1;
(statearr_17529_17555[(2)] = inst_17500);

(statearr_17529_17555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17515 === (8))){
var inst_17497 = cljs.core.async.close_BANG_.call(null,to);
var state_17514__$1 = state_17514;
var statearr_17530_17556 = state_17514__$1;
(statearr_17530_17556[(2)] = inst_17497);

(statearr_17530_17556[(1)] = (10));


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
});})(c__10686__auto___17542))
;
return ((function (switch__10621__auto__,c__10686__auto___17542){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_17534 = [null,null,null,null,null,null,null,null];
(statearr_17534[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_17534[(1)] = (1));

return statearr_17534;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_17514){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17535){if((e17535 instanceof Object)){
var ex__10625__auto__ = e17535;
var statearr_17536_17557 = state_17514;
(statearr_17536_17557[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17558 = state_17514;
state_17514 = G__17558;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_17514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_17514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17542))
})();
var state__10688__auto__ = (function (){var statearr_17537 = f__10687__auto__.call(null);
(statearr_17537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17542);

return statearr_17537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17542))
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
return (function (p__17742){
var vec__17743 = p__17742;
var v = cljs.core.nth.call(null,vec__17743,(0),null);
var p = cljs.core.nth.call(null,vec__17743,(1),null);
var job = vec__17743;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10686__auto___17925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results){
return (function (state_17748){
var state_val_17749 = (state_17748[(1)]);
if((state_val_17749 === (1))){
var state_17748__$1 = state_17748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17748__$1,(2),res,v);
} else {
if((state_val_17749 === (2))){
var inst_17745 = (state_17748[(2)]);
var inst_17746 = cljs.core.async.close_BANG_.call(null,res);
var state_17748__$1 = (function (){var statearr_17750 = state_17748;
(statearr_17750[(7)] = inst_17745);

return statearr_17750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17748__$1,inst_17746);
} else {
return null;
}
}
});})(c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results))
;
return ((function (switch__10621__auto__,c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17748){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17755){if((e17755 instanceof Object)){
var ex__10625__auto__ = e17755;
var statearr_17756_17926 = state_17748;
(statearr_17756_17926[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17927 = state_17748;
state_17748 = G__17927;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results))
})();
var state__10688__auto__ = (function (){var statearr_17757 = f__10687__auto__.call(null);
(statearr_17757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17925);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17925,res,vec__17743,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17758){
var vec__17759 = p__17758;
var v = cljs.core.nth.call(null,vec__17759,(0),null);
var p = cljs.core.nth.call(null,vec__17759,(1),null);
var job = vec__17759;
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
var n__5997__auto___17928 = n;
var __17929 = (0);
while(true){
if((__17929 < n__5997__auto___17928)){
var G__17760_17930 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17760_17930) {
case "compute":
var c__10686__auto___17932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17929,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (__17929,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function (state_17773){
var state_val_17774 = (state_17773[(1)]);
if((state_val_17774 === (1))){
var state_17773__$1 = state_17773;
var statearr_17775_17933 = state_17773__$1;
(statearr_17775_17933[(2)] = null);

(statearr_17775_17933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (2))){
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17773__$1,(4),jobs);
} else {
if((state_val_17774 === (3))){
var inst_17771 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17773__$1,inst_17771);
} else {
if((state_val_17774 === (4))){
var inst_17763 = (state_17773[(2)]);
var inst_17764 = process.call(null,inst_17763);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17764)){
var statearr_17776_17934 = state_17773__$1;
(statearr_17776_17934[(1)] = (5));

} else {
var statearr_17777_17935 = state_17773__$1;
(statearr_17777_17935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (5))){
var state_17773__$1 = state_17773;
var statearr_17778_17936 = state_17773__$1;
(statearr_17778_17936[(2)] = null);

(statearr_17778_17936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (6))){
var state_17773__$1 = state_17773;
var statearr_17779_17937 = state_17773__$1;
(statearr_17779_17937[(2)] = null);

(statearr_17779_17937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17774 === (7))){
var inst_17769 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17780_17938 = state_17773__$1;
(statearr_17780_17938[(2)] = inst_17769);

(statearr_17780_17938[(1)] = (3));


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
});})(__17929,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
;
return ((function (__17929,switch__10621__auto__,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17784 = [null,null,null,null,null,null,null];
(statearr_17784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17784[(1)] = (1));

return statearr_17784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17773){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17785){if((e17785 instanceof Object)){
var ex__10625__auto__ = e17785;
var statearr_17786_17939 = state_17773;
(statearr_17786_17939[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17940 = state_17773;
state_17773 = G__17940;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(__17929,switch__10621__auto__,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17787 = f__10687__auto__.call(null);
(statearr_17787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17932);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(__17929,c__10686__auto___17932,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
);


break;
case "async":
var c__10686__auto___17941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17929,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (__17929,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function (state_17800){
var state_val_17801 = (state_17800[(1)]);
if((state_val_17801 === (1))){
var state_17800__$1 = state_17800;
var statearr_17802_17942 = state_17800__$1;
(statearr_17802_17942[(2)] = null);

(statearr_17802_17942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (2))){
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17800__$1,(4),jobs);
} else {
if((state_val_17801 === (3))){
var inst_17798 = (state_17800[(2)]);
var state_17800__$1 = state_17800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17800__$1,inst_17798);
} else {
if((state_val_17801 === (4))){
var inst_17790 = (state_17800[(2)]);
var inst_17791 = async.call(null,inst_17790);
var state_17800__$1 = state_17800;
if(cljs.core.truth_(inst_17791)){
var statearr_17803_17943 = state_17800__$1;
(statearr_17803_17943[(1)] = (5));

} else {
var statearr_17804_17944 = state_17800__$1;
(statearr_17804_17944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (5))){
var state_17800__$1 = state_17800;
var statearr_17805_17945 = state_17800__$1;
(statearr_17805_17945[(2)] = null);

(statearr_17805_17945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (6))){
var state_17800__$1 = state_17800;
var statearr_17806_17946 = state_17800__$1;
(statearr_17806_17946[(2)] = null);

(statearr_17806_17946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17801 === (7))){
var inst_17796 = (state_17800[(2)]);
var state_17800__$1 = state_17800;
var statearr_17807_17947 = state_17800__$1;
(statearr_17807_17947[(2)] = inst_17796);

(statearr_17807_17947[(1)] = (3));


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
});})(__17929,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
;
return ((function (__17929,switch__10621__auto__,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17811 = [null,null,null,null,null,null,null];
(statearr_17811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17811[(1)] = (1));

return statearr_17811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17800){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17812){if((e17812 instanceof Object)){
var ex__10625__auto__ = e17812;
var statearr_17813_17948 = state_17800;
(statearr_17813_17948[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_17800;
state_17800 = G__17949;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(__17929,switch__10621__auto__,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17814 = f__10687__auto__.call(null);
(statearr_17814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17941);

return statearr_17814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(__17929,c__10686__auto___17941,G__17760_17930,n__5997__auto___17928,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17950 = (__17929 + (1));
__17929 = G__17950;
continue;
} else {
}
break;
}

var c__10686__auto___17951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17951,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17951,jobs,results,process,async){
return (function (state_17836){
var state_val_17837 = (state_17836[(1)]);
if((state_val_17837 === (1))){
var state_17836__$1 = state_17836;
var statearr_17838_17952 = state_17836__$1;
(statearr_17838_17952[(2)] = null);

(statearr_17838_17952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (2))){
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17836__$1,(4),from);
} else {
if((state_val_17837 === (3))){
var inst_17834 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17836__$1,inst_17834);
} else {
if((state_val_17837 === (4))){
var inst_17817 = (state_17836[(7)]);
var inst_17817__$1 = (state_17836[(2)]);
var inst_17818 = (inst_17817__$1 == null);
var state_17836__$1 = (function (){var statearr_17839 = state_17836;
(statearr_17839[(7)] = inst_17817__$1);

return statearr_17839;
})();
if(cljs.core.truth_(inst_17818)){
var statearr_17840_17953 = state_17836__$1;
(statearr_17840_17953[(1)] = (5));

} else {
var statearr_17841_17954 = state_17836__$1;
(statearr_17841_17954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (5))){
var inst_17820 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17836__$1 = state_17836;
var statearr_17842_17955 = state_17836__$1;
(statearr_17842_17955[(2)] = inst_17820);

(statearr_17842_17955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (6))){
var inst_17822 = (state_17836[(8)]);
var inst_17817 = (state_17836[(7)]);
var inst_17822__$1 = cljs.core.async.chan.call(null,(1));
var inst_17823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17824 = [inst_17817,inst_17822__$1];
var inst_17825 = (new cljs.core.PersistentVector(null,2,(5),inst_17823,inst_17824,null));
var state_17836__$1 = (function (){var statearr_17843 = state_17836;
(statearr_17843[(8)] = inst_17822__$1);

return statearr_17843;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17836__$1,(8),jobs,inst_17825);
} else {
if((state_val_17837 === (7))){
var inst_17832 = (state_17836[(2)]);
var state_17836__$1 = state_17836;
var statearr_17844_17956 = state_17836__$1;
(statearr_17844_17956[(2)] = inst_17832);

(statearr_17844_17956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17837 === (8))){
var inst_17822 = (state_17836[(8)]);
var inst_17827 = (state_17836[(2)]);
var state_17836__$1 = (function (){var statearr_17845 = state_17836;
(statearr_17845[(9)] = inst_17827);

return statearr_17845;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17836__$1,(9),results,inst_17822);
} else {
if((state_val_17837 === (9))){
var inst_17829 = (state_17836[(2)]);
var state_17836__$1 = (function (){var statearr_17846 = state_17836;
(statearr_17846[(10)] = inst_17829);

return statearr_17846;
})();
var statearr_17847_17957 = state_17836__$1;
(statearr_17847_17957[(2)] = null);

(statearr_17847_17957[(1)] = (2));


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
});})(c__10686__auto___17951,jobs,results,process,async))
;
return ((function (switch__10621__auto__,c__10686__auto___17951,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17851[(1)] = (1));

return statearr_17851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17836){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17852){if((e17852 instanceof Object)){
var ex__10625__auto__ = e17852;
var statearr_17853_17958 = state_17836;
(statearr_17853_17958[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_17836;
state_17836 = G__17959;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17951,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17854 = f__10687__auto__.call(null);
(statearr_17854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17951);

return statearr_17854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17951,jobs,results,process,async))
);


var c__10686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto__,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto__,jobs,results,process,async){
return (function (state_17892){
var state_val_17893 = (state_17892[(1)]);
if((state_val_17893 === (7))){
var inst_17888 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17894_17960 = state_17892__$1;
(statearr_17894_17960[(2)] = inst_17888);

(statearr_17894_17960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (20))){
var state_17892__$1 = state_17892;
var statearr_17895_17961 = state_17892__$1;
(statearr_17895_17961[(2)] = null);

(statearr_17895_17961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (1))){
var state_17892__$1 = state_17892;
var statearr_17896_17962 = state_17892__$1;
(statearr_17896_17962[(2)] = null);

(statearr_17896_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (4))){
var inst_17857 = (state_17892[(7)]);
var inst_17857__$1 = (state_17892[(2)]);
var inst_17858 = (inst_17857__$1 == null);
var state_17892__$1 = (function (){var statearr_17897 = state_17892;
(statearr_17897[(7)] = inst_17857__$1);

return statearr_17897;
})();
if(cljs.core.truth_(inst_17858)){
var statearr_17898_17963 = state_17892__$1;
(statearr_17898_17963[(1)] = (5));

} else {
var statearr_17899_17964 = state_17892__$1;
(statearr_17899_17964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (15))){
var inst_17870 = (state_17892[(8)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17892__$1,(18),to,inst_17870);
} else {
if((state_val_17893 === (21))){
var inst_17883 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17900_17965 = state_17892__$1;
(statearr_17900_17965[(2)] = inst_17883);

(statearr_17900_17965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (13))){
var inst_17885 = (state_17892[(2)]);
var state_17892__$1 = (function (){var statearr_17901 = state_17892;
(statearr_17901[(9)] = inst_17885);

return statearr_17901;
})();
var statearr_17902_17966 = state_17892__$1;
(statearr_17902_17966[(2)] = null);

(statearr_17902_17966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (6))){
var inst_17857 = (state_17892[(7)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17892__$1,(11),inst_17857);
} else {
if((state_val_17893 === (17))){
var inst_17878 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
if(cljs.core.truth_(inst_17878)){
var statearr_17903_17967 = state_17892__$1;
(statearr_17903_17967[(1)] = (19));

} else {
var statearr_17904_17968 = state_17892__$1;
(statearr_17904_17968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (3))){
var inst_17890 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17892__$1,inst_17890);
} else {
if((state_val_17893 === (12))){
var inst_17867 = (state_17892[(10)]);
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17892__$1,(14),inst_17867);
} else {
if((state_val_17893 === (2))){
var state_17892__$1 = state_17892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17892__$1,(4),results);
} else {
if((state_val_17893 === (19))){
var state_17892__$1 = state_17892;
var statearr_17905_17969 = state_17892__$1;
(statearr_17905_17969[(2)] = null);

(statearr_17905_17969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (11))){
var inst_17867 = (state_17892[(2)]);
var state_17892__$1 = (function (){var statearr_17906 = state_17892;
(statearr_17906[(10)] = inst_17867);

return statearr_17906;
})();
var statearr_17907_17970 = state_17892__$1;
(statearr_17907_17970[(2)] = null);

(statearr_17907_17970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (9))){
var state_17892__$1 = state_17892;
var statearr_17908_17971 = state_17892__$1;
(statearr_17908_17971[(2)] = null);

(statearr_17908_17971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (5))){
var state_17892__$1 = state_17892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17909_17972 = state_17892__$1;
(statearr_17909_17972[(1)] = (8));

} else {
var statearr_17910_17973 = state_17892__$1;
(statearr_17910_17973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (14))){
var inst_17872 = (state_17892[(11)]);
var inst_17870 = (state_17892[(8)]);
var inst_17870__$1 = (state_17892[(2)]);
var inst_17871 = (inst_17870__$1 == null);
var inst_17872__$1 = cljs.core.not.call(null,inst_17871);
var state_17892__$1 = (function (){var statearr_17911 = state_17892;
(statearr_17911[(11)] = inst_17872__$1);

(statearr_17911[(8)] = inst_17870__$1);

return statearr_17911;
})();
if(inst_17872__$1){
var statearr_17912_17974 = state_17892__$1;
(statearr_17912_17974[(1)] = (15));

} else {
var statearr_17913_17975 = state_17892__$1;
(statearr_17913_17975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (16))){
var inst_17872 = (state_17892[(11)]);
var state_17892__$1 = state_17892;
var statearr_17914_17976 = state_17892__$1;
(statearr_17914_17976[(2)] = inst_17872);

(statearr_17914_17976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (10))){
var inst_17864 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17915_17977 = state_17892__$1;
(statearr_17915_17977[(2)] = inst_17864);

(statearr_17915_17977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (18))){
var inst_17875 = (state_17892[(2)]);
var state_17892__$1 = state_17892;
var statearr_17916_17978 = state_17892__$1;
(statearr_17916_17978[(2)] = inst_17875);

(statearr_17916_17978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17893 === (8))){
var inst_17861 = cljs.core.async.close_BANG_.call(null,to);
var state_17892__$1 = state_17892;
var statearr_17917_17979 = state_17892__$1;
(statearr_17917_17979[(2)] = inst_17861);

(statearr_17917_17979[(1)] = (10));


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
});})(c__10686__auto__,jobs,results,process,async))
;
return ((function (switch__10621__auto__,c__10686__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17921[(1)] = (1));

return statearr_17921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17892){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17922){if((e17922 instanceof Object)){
var ex__10625__auto__ = e17922;
var statearr_17923_17980 = state_17892;
(statearr_17923_17980[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17981 = state_17892;
state_17892 = G__17981;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17924 = f__10687__auto__.call(null);
(statearr_17924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_17924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto__,jobs,results,process,async))
);

return c__10686__auto__;
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
var args17982 = [];
var len__6152__auto___17985 = arguments.length;
var i__6153__auto___17986 = (0);
while(true){
if((i__6153__auto___17986 < len__6152__auto___17985)){
args17982.push((arguments[i__6153__auto___17986]));

var G__17987 = (i__6153__auto___17986 + (1));
i__6153__auto___17986 = G__17987;
continue;
} else {
}
break;
}

var G__17984 = args17982.length;
switch (G__17984) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17982.length)].join('')));

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
var args17989 = [];
var len__6152__auto___17992 = arguments.length;
var i__6153__auto___17993 = (0);
while(true){
if((i__6153__auto___17993 < len__6152__auto___17992)){
args17989.push((arguments[i__6153__auto___17993]));

var G__17994 = (i__6153__auto___17993 + (1));
i__6153__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var G__17991 = args17989.length;
switch (G__17991) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17989.length)].join('')));

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
var args17996 = [];
var len__6152__auto___18049 = arguments.length;
var i__6153__auto___18050 = (0);
while(true){
if((i__6153__auto___18050 < len__6152__auto___18049)){
args17996.push((arguments[i__6153__auto___18050]));

var G__18051 = (i__6153__auto___18050 + (1));
i__6153__auto___18050 = G__18051;
continue;
} else {
}
break;
}

var G__17998 = args17996.length;
switch (G__17998) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17996.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10686__auto___18053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___18053,tc,fc){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___18053,tc,fc){
return (function (state_18024){
var state_val_18025 = (state_18024[(1)]);
if((state_val_18025 === (7))){
var inst_18020 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
var statearr_18026_18054 = state_18024__$1;
(statearr_18026_18054[(2)] = inst_18020);

(statearr_18026_18054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (1))){
var state_18024__$1 = state_18024;
var statearr_18027_18055 = state_18024__$1;
(statearr_18027_18055[(2)] = null);

(statearr_18027_18055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (4))){
var inst_18001 = (state_18024[(7)]);
var inst_18001__$1 = (state_18024[(2)]);
var inst_18002 = (inst_18001__$1 == null);
var state_18024__$1 = (function (){var statearr_18028 = state_18024;
(statearr_18028[(7)] = inst_18001__$1);

return statearr_18028;
})();
if(cljs.core.truth_(inst_18002)){
var statearr_18029_18056 = state_18024__$1;
(statearr_18029_18056[(1)] = (5));

} else {
var statearr_18030_18057 = state_18024__$1;
(statearr_18030_18057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (13))){
var state_18024__$1 = state_18024;
var statearr_18031_18058 = state_18024__$1;
(statearr_18031_18058[(2)] = null);

(statearr_18031_18058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (6))){
var inst_18001 = (state_18024[(7)]);
var inst_18007 = p.call(null,inst_18001);
var state_18024__$1 = state_18024;
if(cljs.core.truth_(inst_18007)){
var statearr_18032_18059 = state_18024__$1;
(statearr_18032_18059[(1)] = (9));

} else {
var statearr_18033_18060 = state_18024__$1;
(statearr_18033_18060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (3))){
var inst_18022 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18024__$1,inst_18022);
} else {
if((state_val_18025 === (12))){
var state_18024__$1 = state_18024;
var statearr_18034_18061 = state_18024__$1;
(statearr_18034_18061[(2)] = null);

(statearr_18034_18061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (2))){
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18024__$1,(4),ch);
} else {
if((state_val_18025 === (11))){
var inst_18001 = (state_18024[(7)]);
var inst_18011 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18024__$1,(8),inst_18011,inst_18001);
} else {
if((state_val_18025 === (9))){
var state_18024__$1 = state_18024;
var statearr_18035_18062 = state_18024__$1;
(statearr_18035_18062[(2)] = tc);

(statearr_18035_18062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (5))){
var inst_18004 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18005 = cljs.core.async.close_BANG_.call(null,fc);
var state_18024__$1 = (function (){var statearr_18036 = state_18024;
(statearr_18036[(8)] = inst_18004);

return statearr_18036;
})();
var statearr_18037_18063 = state_18024__$1;
(statearr_18037_18063[(2)] = inst_18005);

(statearr_18037_18063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (14))){
var inst_18018 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
var statearr_18038_18064 = state_18024__$1;
(statearr_18038_18064[(2)] = inst_18018);

(statearr_18038_18064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (10))){
var state_18024__$1 = state_18024;
var statearr_18039_18065 = state_18024__$1;
(statearr_18039_18065[(2)] = fc);

(statearr_18039_18065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18025 === (8))){
var inst_18013 = (state_18024[(2)]);
var state_18024__$1 = state_18024;
if(cljs.core.truth_(inst_18013)){
var statearr_18040_18066 = state_18024__$1;
(statearr_18040_18066[(1)] = (12));

} else {
var statearr_18041_18067 = state_18024__$1;
(statearr_18041_18067[(1)] = (13));

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
});})(c__10686__auto___18053,tc,fc))
;
return ((function (switch__10621__auto__,c__10686__auto___18053,tc,fc){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_18045 = [null,null,null,null,null,null,null,null,null];
(statearr_18045[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_18045[(1)] = (1));

return statearr_18045;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_18024){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18046){if((e18046 instanceof Object)){
var ex__10625__auto__ = e18046;
var statearr_18047_18068 = state_18024;
(statearr_18047_18068[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_18024;
state_18024 = G__18069;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_18024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_18024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___18053,tc,fc))
})();
var state__10688__auto__ = (function (){var statearr_18048 = f__10687__auto__.call(null);
(statearr_18048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___18053);

return statearr_18048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___18053,tc,fc))
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
var c__10686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto__){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto__){
return (function (state_18116){
var state_val_18117 = (state_18116[(1)]);
if((state_val_18117 === (1))){
var inst_18102 = init;
var state_18116__$1 = (function (){var statearr_18118 = state_18116;
(statearr_18118[(7)] = inst_18102);

return statearr_18118;
})();
var statearr_18119_18134 = state_18116__$1;
(statearr_18119_18134[(2)] = null);

(statearr_18119_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (2))){
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18116__$1,(4),ch);
} else {
if((state_val_18117 === (3))){
var inst_18114 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18116__$1,inst_18114);
} else {
if((state_val_18117 === (4))){
var inst_18105 = (state_18116[(8)]);
var inst_18105__$1 = (state_18116[(2)]);
var inst_18106 = (inst_18105__$1 == null);
var state_18116__$1 = (function (){var statearr_18120 = state_18116;
(statearr_18120[(8)] = inst_18105__$1);

return statearr_18120;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18121_18135 = state_18116__$1;
(statearr_18121_18135[(1)] = (5));

} else {
var statearr_18122_18136 = state_18116__$1;
(statearr_18122_18136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (5))){
var inst_18102 = (state_18116[(7)]);
var state_18116__$1 = state_18116;
var statearr_18123_18137 = state_18116__$1;
(statearr_18123_18137[(2)] = inst_18102);

(statearr_18123_18137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (6))){
var inst_18105 = (state_18116[(8)]);
var inst_18102 = (state_18116[(7)]);
var inst_18109 = f.call(null,inst_18102,inst_18105);
var inst_18102__$1 = inst_18109;
var state_18116__$1 = (function (){var statearr_18124 = state_18116;
(statearr_18124[(7)] = inst_18102__$1);

return statearr_18124;
})();
var statearr_18125_18138 = state_18116__$1;
(statearr_18125_18138[(2)] = null);

(statearr_18125_18138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (7))){
var inst_18112 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
var statearr_18126_18139 = state_18116__$1;
(statearr_18126_18139[(2)] = inst_18112);

(statearr_18126_18139[(1)] = (3));


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
});})(c__10686__auto__))
;
return ((function (switch__10621__auto__,c__10686__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10622__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10622__auto____0 = (function (){
var statearr_18130 = [null,null,null,null,null,null,null,null,null];
(statearr_18130[(0)] = cljs$core$async$reduce_$_state_machine__10622__auto__);

(statearr_18130[(1)] = (1));

return statearr_18130;
});
var cljs$core$async$reduce_$_state_machine__10622__auto____1 = (function (state_18116){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18131){if((e18131 instanceof Object)){
var ex__10625__auto__ = e18131;
var statearr_18132_18140 = state_18116;
(statearr_18132_18140[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18141 = state_18116;
state_18116 = G__18141;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10622__auto__ = function(state_18116){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10622__auto____1.call(this,state_18116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10622__auto____0;
cljs$core$async$reduce_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10622__auto____1;
return cljs$core$async$reduce_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_18133 = f__10687__auto__.call(null);
(statearr_18133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_18133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto__))
);

return c__10686__auto__;
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
var args18142 = [];
var len__6152__auto___18194 = arguments.length;
var i__6153__auto___18195 = (0);
while(true){
if((i__6153__auto___18195 < len__6152__auto___18194)){
args18142.push((arguments[i__6153__auto___18195]));

var G__18196 = (i__6153__auto___18195 + (1));
i__6153__auto___18195 = G__18196;
continue;
} else {
}
break;
}

var G__18144 = args18142.length;
switch (G__18144) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18142.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto__){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto__){
return (function (state_18169){
var state_val_18170 = (state_18169[(1)]);
if((state_val_18170 === (7))){
var inst_18151 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18171_18198 = state_18169__$1;
(statearr_18171_18198[(2)] = inst_18151);

(statearr_18171_18198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (1))){
var inst_18145 = cljs.core.seq.call(null,coll);
var inst_18146 = inst_18145;
var state_18169__$1 = (function (){var statearr_18172 = state_18169;
(statearr_18172[(7)] = inst_18146);

return statearr_18172;
})();
var statearr_18173_18199 = state_18169__$1;
(statearr_18173_18199[(2)] = null);

(statearr_18173_18199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (4))){
var inst_18146 = (state_18169[(7)]);
var inst_18149 = cljs.core.first.call(null,inst_18146);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18169__$1,(7),ch,inst_18149);
} else {
if((state_val_18170 === (13))){
var inst_18163 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18174_18200 = state_18169__$1;
(statearr_18174_18200[(2)] = inst_18163);

(statearr_18174_18200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (6))){
var inst_18154 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18154)){
var statearr_18175_18201 = state_18169__$1;
(statearr_18175_18201[(1)] = (8));

} else {
var statearr_18176_18202 = state_18169__$1;
(statearr_18176_18202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (3))){
var inst_18167 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18169__$1,inst_18167);
} else {
if((state_val_18170 === (12))){
var state_18169__$1 = state_18169;
var statearr_18177_18203 = state_18169__$1;
(statearr_18177_18203[(2)] = null);

(statearr_18177_18203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (2))){
var inst_18146 = (state_18169[(7)]);
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18146)){
var statearr_18178_18204 = state_18169__$1;
(statearr_18178_18204[(1)] = (4));

} else {
var statearr_18179_18205 = state_18169__$1;
(statearr_18179_18205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (11))){
var inst_18160 = cljs.core.async.close_BANG_.call(null,ch);
var state_18169__$1 = state_18169;
var statearr_18180_18206 = state_18169__$1;
(statearr_18180_18206[(2)] = inst_18160);

(statearr_18180_18206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (9))){
var state_18169__$1 = state_18169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18181_18207 = state_18169__$1;
(statearr_18181_18207[(1)] = (11));

} else {
var statearr_18182_18208 = state_18169__$1;
(statearr_18182_18208[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (5))){
var inst_18146 = (state_18169[(7)]);
var state_18169__$1 = state_18169;
var statearr_18183_18209 = state_18169__$1;
(statearr_18183_18209[(2)] = inst_18146);

(statearr_18183_18209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (10))){
var inst_18165 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18184_18210 = state_18169__$1;
(statearr_18184_18210[(2)] = inst_18165);

(statearr_18184_18210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (8))){
var inst_18146 = (state_18169[(7)]);
var inst_18156 = cljs.core.next.call(null,inst_18146);
var inst_18146__$1 = inst_18156;
var state_18169__$1 = (function (){var statearr_18185 = state_18169;
(statearr_18185[(7)] = inst_18146__$1);

return statearr_18185;
})();
var statearr_18186_18211 = state_18169__$1;
(statearr_18186_18211[(2)] = null);

(statearr_18186_18211[(1)] = (2));


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
});})(c__10686__auto__))
;
return ((function (switch__10621__auto__,c__10686__auto__){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_18190 = [null,null,null,null,null,null,null,null];
(statearr_18190[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_18190[(1)] = (1));

return statearr_18190;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_18169){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18191){if((e18191 instanceof Object)){
var ex__10625__auto__ = e18191;
var statearr_18192_18212 = state_18169;
(statearr_18192_18212[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18213 = state_18169;
state_18169 = G__18213;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_18193 = f__10687__auto__.call(null);
(statearr_18193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto__))
);

return c__10686__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18435 = (function (mult,ch,cs,meta18436){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18436 = meta18436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18437,meta18436__$1){
var self__ = this;
var _18437__$1 = this;
return (new cljs.core.async.t_cljs$core$async18435(self__.mult,self__.ch,self__.cs,meta18436__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18437){
var self__ = this;
var _18437__$1 = this;
return self__.meta18436;
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18436","meta18436",236183060,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18435";

cljs.core.async.t_cljs$core$async18435.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18435");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18435 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18435(mult__$1,ch__$1,cs__$1,meta18436){
return (new cljs.core.async.t_cljs$core$async18435(mult__$1,ch__$1,cs__$1,meta18436));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18435(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10686__auto___18656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___18656,cs,m,dchan,dctr,done){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___18656,cs,m,dchan,dctr,done){
return (function (state_18568){
var state_val_18569 = (state_18568[(1)]);
if((state_val_18569 === (7))){
var inst_18564 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18570_18657 = state_18568__$1;
(statearr_18570_18657[(2)] = inst_18564);

(statearr_18570_18657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (20))){
var inst_18469 = (state_18568[(7)]);
var inst_18479 = cljs.core.first.call(null,inst_18469);
var inst_18480 = cljs.core.nth.call(null,inst_18479,(0),null);
var inst_18481 = cljs.core.nth.call(null,inst_18479,(1),null);
var state_18568__$1 = (function (){var statearr_18571 = state_18568;
(statearr_18571[(8)] = inst_18480);

return statearr_18571;
})();
if(cljs.core.truth_(inst_18481)){
var statearr_18572_18658 = state_18568__$1;
(statearr_18572_18658[(1)] = (22));

} else {
var statearr_18573_18659 = state_18568__$1;
(statearr_18573_18659[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (27))){
var inst_18509 = (state_18568[(9)]);
var inst_18516 = (state_18568[(10)]);
var inst_18511 = (state_18568[(11)]);
var inst_18440 = (state_18568[(12)]);
var inst_18516__$1 = cljs.core._nth.call(null,inst_18509,inst_18511);
var inst_18517 = cljs.core.async.put_BANG_.call(null,inst_18516__$1,inst_18440,done);
var state_18568__$1 = (function (){var statearr_18574 = state_18568;
(statearr_18574[(10)] = inst_18516__$1);

return statearr_18574;
})();
if(cljs.core.truth_(inst_18517)){
var statearr_18575_18660 = state_18568__$1;
(statearr_18575_18660[(1)] = (30));

} else {
var statearr_18576_18661 = state_18568__$1;
(statearr_18576_18661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (1))){
var state_18568__$1 = state_18568;
var statearr_18577_18662 = state_18568__$1;
(statearr_18577_18662[(2)] = null);

(statearr_18577_18662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (24))){
var inst_18469 = (state_18568[(7)]);
var inst_18486 = (state_18568[(2)]);
var inst_18487 = cljs.core.next.call(null,inst_18469);
var inst_18449 = inst_18487;
var inst_18450 = null;
var inst_18451 = (0);
var inst_18452 = (0);
var state_18568__$1 = (function (){var statearr_18578 = state_18568;
(statearr_18578[(13)] = inst_18452);

(statearr_18578[(14)] = inst_18486);

(statearr_18578[(15)] = inst_18449);

(statearr_18578[(16)] = inst_18450);

(statearr_18578[(17)] = inst_18451);

return statearr_18578;
})();
var statearr_18579_18663 = state_18568__$1;
(statearr_18579_18663[(2)] = null);

(statearr_18579_18663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (39))){
var state_18568__$1 = state_18568;
var statearr_18583_18664 = state_18568__$1;
(statearr_18583_18664[(2)] = null);

(statearr_18583_18664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (4))){
var inst_18440 = (state_18568[(12)]);
var inst_18440__$1 = (state_18568[(2)]);
var inst_18441 = (inst_18440__$1 == null);
var state_18568__$1 = (function (){var statearr_18584 = state_18568;
(statearr_18584[(12)] = inst_18440__$1);

return statearr_18584;
})();
if(cljs.core.truth_(inst_18441)){
var statearr_18585_18665 = state_18568__$1;
(statearr_18585_18665[(1)] = (5));

} else {
var statearr_18586_18666 = state_18568__$1;
(statearr_18586_18666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (15))){
var inst_18452 = (state_18568[(13)]);
var inst_18449 = (state_18568[(15)]);
var inst_18450 = (state_18568[(16)]);
var inst_18451 = (state_18568[(17)]);
var inst_18465 = (state_18568[(2)]);
var inst_18466 = (inst_18452 + (1));
var tmp18580 = inst_18449;
var tmp18581 = inst_18450;
var tmp18582 = inst_18451;
var inst_18449__$1 = tmp18580;
var inst_18450__$1 = tmp18581;
var inst_18451__$1 = tmp18582;
var inst_18452__$1 = inst_18466;
var state_18568__$1 = (function (){var statearr_18587 = state_18568;
(statearr_18587[(13)] = inst_18452__$1);

(statearr_18587[(15)] = inst_18449__$1);

(statearr_18587[(18)] = inst_18465);

(statearr_18587[(16)] = inst_18450__$1);

(statearr_18587[(17)] = inst_18451__$1);

return statearr_18587;
})();
var statearr_18588_18667 = state_18568__$1;
(statearr_18588_18667[(2)] = null);

(statearr_18588_18667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (21))){
var inst_18490 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18592_18668 = state_18568__$1;
(statearr_18592_18668[(2)] = inst_18490);

(statearr_18592_18668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (31))){
var inst_18516 = (state_18568[(10)]);
var inst_18520 = done.call(null,null);
var inst_18521 = cljs.core.async.untap_STAR_.call(null,m,inst_18516);
var state_18568__$1 = (function (){var statearr_18593 = state_18568;
(statearr_18593[(19)] = inst_18520);

return statearr_18593;
})();
var statearr_18594_18669 = state_18568__$1;
(statearr_18594_18669[(2)] = inst_18521);

(statearr_18594_18669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (32))){
var inst_18509 = (state_18568[(9)]);
var inst_18511 = (state_18568[(11)]);
var inst_18510 = (state_18568[(20)]);
var inst_18508 = (state_18568[(21)]);
var inst_18523 = (state_18568[(2)]);
var inst_18524 = (inst_18511 + (1));
var tmp18589 = inst_18509;
var tmp18590 = inst_18510;
var tmp18591 = inst_18508;
var inst_18508__$1 = tmp18591;
var inst_18509__$1 = tmp18589;
var inst_18510__$1 = tmp18590;
var inst_18511__$1 = inst_18524;
var state_18568__$1 = (function (){var statearr_18595 = state_18568;
(statearr_18595[(9)] = inst_18509__$1);

(statearr_18595[(11)] = inst_18511__$1);

(statearr_18595[(22)] = inst_18523);

(statearr_18595[(20)] = inst_18510__$1);

(statearr_18595[(21)] = inst_18508__$1);

return statearr_18595;
})();
var statearr_18596_18670 = state_18568__$1;
(statearr_18596_18670[(2)] = null);

(statearr_18596_18670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (40))){
var inst_18536 = (state_18568[(23)]);
var inst_18540 = done.call(null,null);
var inst_18541 = cljs.core.async.untap_STAR_.call(null,m,inst_18536);
var state_18568__$1 = (function (){var statearr_18597 = state_18568;
(statearr_18597[(24)] = inst_18540);

return statearr_18597;
})();
var statearr_18598_18671 = state_18568__$1;
(statearr_18598_18671[(2)] = inst_18541);

(statearr_18598_18671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (33))){
var inst_18527 = (state_18568[(25)]);
var inst_18529 = cljs.core.chunked_seq_QMARK_.call(null,inst_18527);
var state_18568__$1 = state_18568;
if(inst_18529){
var statearr_18599_18672 = state_18568__$1;
(statearr_18599_18672[(1)] = (36));

} else {
var statearr_18600_18673 = state_18568__$1;
(statearr_18600_18673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (13))){
var inst_18459 = (state_18568[(26)]);
var inst_18462 = cljs.core.async.close_BANG_.call(null,inst_18459);
var state_18568__$1 = state_18568;
var statearr_18601_18674 = state_18568__$1;
(statearr_18601_18674[(2)] = inst_18462);

(statearr_18601_18674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (22))){
var inst_18480 = (state_18568[(8)]);
var inst_18483 = cljs.core.async.close_BANG_.call(null,inst_18480);
var state_18568__$1 = state_18568;
var statearr_18602_18675 = state_18568__$1;
(statearr_18602_18675[(2)] = inst_18483);

(statearr_18602_18675[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (36))){
var inst_18527 = (state_18568[(25)]);
var inst_18531 = cljs.core.chunk_first.call(null,inst_18527);
var inst_18532 = cljs.core.chunk_rest.call(null,inst_18527);
var inst_18533 = cljs.core.count.call(null,inst_18531);
var inst_18508 = inst_18532;
var inst_18509 = inst_18531;
var inst_18510 = inst_18533;
var inst_18511 = (0);
var state_18568__$1 = (function (){var statearr_18603 = state_18568;
(statearr_18603[(9)] = inst_18509);

(statearr_18603[(11)] = inst_18511);

(statearr_18603[(20)] = inst_18510);

(statearr_18603[(21)] = inst_18508);

return statearr_18603;
})();
var statearr_18604_18676 = state_18568__$1;
(statearr_18604_18676[(2)] = null);

(statearr_18604_18676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (41))){
var inst_18527 = (state_18568[(25)]);
var inst_18543 = (state_18568[(2)]);
var inst_18544 = cljs.core.next.call(null,inst_18527);
var inst_18508 = inst_18544;
var inst_18509 = null;
var inst_18510 = (0);
var inst_18511 = (0);
var state_18568__$1 = (function (){var statearr_18605 = state_18568;
(statearr_18605[(9)] = inst_18509);

(statearr_18605[(27)] = inst_18543);

(statearr_18605[(11)] = inst_18511);

(statearr_18605[(20)] = inst_18510);

(statearr_18605[(21)] = inst_18508);

return statearr_18605;
})();
var statearr_18606_18677 = state_18568__$1;
(statearr_18606_18677[(2)] = null);

(statearr_18606_18677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (43))){
var state_18568__$1 = state_18568;
var statearr_18607_18678 = state_18568__$1;
(statearr_18607_18678[(2)] = null);

(statearr_18607_18678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (29))){
var inst_18552 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18608_18679 = state_18568__$1;
(statearr_18608_18679[(2)] = inst_18552);

(statearr_18608_18679[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (44))){
var inst_18561 = (state_18568[(2)]);
var state_18568__$1 = (function (){var statearr_18609 = state_18568;
(statearr_18609[(28)] = inst_18561);

return statearr_18609;
})();
var statearr_18610_18680 = state_18568__$1;
(statearr_18610_18680[(2)] = null);

(statearr_18610_18680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (6))){
var inst_18500 = (state_18568[(29)]);
var inst_18499 = cljs.core.deref.call(null,cs);
var inst_18500__$1 = cljs.core.keys.call(null,inst_18499);
var inst_18501 = cljs.core.count.call(null,inst_18500__$1);
var inst_18502 = cljs.core.reset_BANG_.call(null,dctr,inst_18501);
var inst_18507 = cljs.core.seq.call(null,inst_18500__$1);
var inst_18508 = inst_18507;
var inst_18509 = null;
var inst_18510 = (0);
var inst_18511 = (0);
var state_18568__$1 = (function (){var statearr_18611 = state_18568;
(statearr_18611[(30)] = inst_18502);

(statearr_18611[(9)] = inst_18509);

(statearr_18611[(11)] = inst_18511);

(statearr_18611[(29)] = inst_18500__$1);

(statearr_18611[(20)] = inst_18510);

(statearr_18611[(21)] = inst_18508);

return statearr_18611;
})();
var statearr_18612_18681 = state_18568__$1;
(statearr_18612_18681[(2)] = null);

(statearr_18612_18681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (28))){
var inst_18527 = (state_18568[(25)]);
var inst_18508 = (state_18568[(21)]);
var inst_18527__$1 = cljs.core.seq.call(null,inst_18508);
var state_18568__$1 = (function (){var statearr_18613 = state_18568;
(statearr_18613[(25)] = inst_18527__$1);

return statearr_18613;
})();
if(inst_18527__$1){
var statearr_18614_18682 = state_18568__$1;
(statearr_18614_18682[(1)] = (33));

} else {
var statearr_18615_18683 = state_18568__$1;
(statearr_18615_18683[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (25))){
var inst_18511 = (state_18568[(11)]);
var inst_18510 = (state_18568[(20)]);
var inst_18513 = (inst_18511 < inst_18510);
var inst_18514 = inst_18513;
var state_18568__$1 = state_18568;
if(cljs.core.truth_(inst_18514)){
var statearr_18616_18684 = state_18568__$1;
(statearr_18616_18684[(1)] = (27));

} else {
var statearr_18617_18685 = state_18568__$1;
(statearr_18617_18685[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (34))){
var state_18568__$1 = state_18568;
var statearr_18618_18686 = state_18568__$1;
(statearr_18618_18686[(2)] = null);

(statearr_18618_18686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (17))){
var state_18568__$1 = state_18568;
var statearr_18619_18687 = state_18568__$1;
(statearr_18619_18687[(2)] = null);

(statearr_18619_18687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (3))){
var inst_18566 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18568__$1,inst_18566);
} else {
if((state_val_18569 === (12))){
var inst_18495 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18620_18688 = state_18568__$1;
(statearr_18620_18688[(2)] = inst_18495);

(statearr_18620_18688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (2))){
var state_18568__$1 = state_18568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18568__$1,(4),ch);
} else {
if((state_val_18569 === (23))){
var state_18568__$1 = state_18568;
var statearr_18621_18689 = state_18568__$1;
(statearr_18621_18689[(2)] = null);

(statearr_18621_18689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (35))){
var inst_18550 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18622_18690 = state_18568__$1;
(statearr_18622_18690[(2)] = inst_18550);

(statearr_18622_18690[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (19))){
var inst_18469 = (state_18568[(7)]);
var inst_18473 = cljs.core.chunk_first.call(null,inst_18469);
var inst_18474 = cljs.core.chunk_rest.call(null,inst_18469);
var inst_18475 = cljs.core.count.call(null,inst_18473);
var inst_18449 = inst_18474;
var inst_18450 = inst_18473;
var inst_18451 = inst_18475;
var inst_18452 = (0);
var state_18568__$1 = (function (){var statearr_18623 = state_18568;
(statearr_18623[(13)] = inst_18452);

(statearr_18623[(15)] = inst_18449);

(statearr_18623[(16)] = inst_18450);

(statearr_18623[(17)] = inst_18451);

return statearr_18623;
})();
var statearr_18624_18691 = state_18568__$1;
(statearr_18624_18691[(2)] = null);

(statearr_18624_18691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (11))){
var inst_18469 = (state_18568[(7)]);
var inst_18449 = (state_18568[(15)]);
var inst_18469__$1 = cljs.core.seq.call(null,inst_18449);
var state_18568__$1 = (function (){var statearr_18625 = state_18568;
(statearr_18625[(7)] = inst_18469__$1);

return statearr_18625;
})();
if(inst_18469__$1){
var statearr_18626_18692 = state_18568__$1;
(statearr_18626_18692[(1)] = (16));

} else {
var statearr_18627_18693 = state_18568__$1;
(statearr_18627_18693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (9))){
var inst_18497 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18628_18694 = state_18568__$1;
(statearr_18628_18694[(2)] = inst_18497);

(statearr_18628_18694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (5))){
var inst_18447 = cljs.core.deref.call(null,cs);
var inst_18448 = cljs.core.seq.call(null,inst_18447);
var inst_18449 = inst_18448;
var inst_18450 = null;
var inst_18451 = (0);
var inst_18452 = (0);
var state_18568__$1 = (function (){var statearr_18629 = state_18568;
(statearr_18629[(13)] = inst_18452);

(statearr_18629[(15)] = inst_18449);

(statearr_18629[(16)] = inst_18450);

(statearr_18629[(17)] = inst_18451);

return statearr_18629;
})();
var statearr_18630_18695 = state_18568__$1;
(statearr_18630_18695[(2)] = null);

(statearr_18630_18695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (14))){
var state_18568__$1 = state_18568;
var statearr_18631_18696 = state_18568__$1;
(statearr_18631_18696[(2)] = null);

(statearr_18631_18696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (45))){
var inst_18558 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18632_18697 = state_18568__$1;
(statearr_18632_18697[(2)] = inst_18558);

(statearr_18632_18697[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (26))){
var inst_18500 = (state_18568[(29)]);
var inst_18554 = (state_18568[(2)]);
var inst_18555 = cljs.core.seq.call(null,inst_18500);
var state_18568__$1 = (function (){var statearr_18633 = state_18568;
(statearr_18633[(31)] = inst_18554);

return statearr_18633;
})();
if(inst_18555){
var statearr_18634_18698 = state_18568__$1;
(statearr_18634_18698[(1)] = (42));

} else {
var statearr_18635_18699 = state_18568__$1;
(statearr_18635_18699[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (16))){
var inst_18469 = (state_18568[(7)]);
var inst_18471 = cljs.core.chunked_seq_QMARK_.call(null,inst_18469);
var state_18568__$1 = state_18568;
if(inst_18471){
var statearr_18636_18700 = state_18568__$1;
(statearr_18636_18700[(1)] = (19));

} else {
var statearr_18637_18701 = state_18568__$1;
(statearr_18637_18701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (38))){
var inst_18547 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18638_18702 = state_18568__$1;
(statearr_18638_18702[(2)] = inst_18547);

(statearr_18638_18702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (30))){
var state_18568__$1 = state_18568;
var statearr_18639_18703 = state_18568__$1;
(statearr_18639_18703[(2)] = null);

(statearr_18639_18703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (10))){
var inst_18452 = (state_18568[(13)]);
var inst_18450 = (state_18568[(16)]);
var inst_18458 = cljs.core._nth.call(null,inst_18450,inst_18452);
var inst_18459 = cljs.core.nth.call(null,inst_18458,(0),null);
var inst_18460 = cljs.core.nth.call(null,inst_18458,(1),null);
var state_18568__$1 = (function (){var statearr_18640 = state_18568;
(statearr_18640[(26)] = inst_18459);

return statearr_18640;
})();
if(cljs.core.truth_(inst_18460)){
var statearr_18641_18704 = state_18568__$1;
(statearr_18641_18704[(1)] = (13));

} else {
var statearr_18642_18705 = state_18568__$1;
(statearr_18642_18705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (18))){
var inst_18493 = (state_18568[(2)]);
var state_18568__$1 = state_18568;
var statearr_18643_18706 = state_18568__$1;
(statearr_18643_18706[(2)] = inst_18493);

(statearr_18643_18706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (42))){
var state_18568__$1 = state_18568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18568__$1,(45),dchan);
} else {
if((state_val_18569 === (37))){
var inst_18536 = (state_18568[(23)]);
var inst_18440 = (state_18568[(12)]);
var inst_18527 = (state_18568[(25)]);
var inst_18536__$1 = cljs.core.first.call(null,inst_18527);
var inst_18537 = cljs.core.async.put_BANG_.call(null,inst_18536__$1,inst_18440,done);
var state_18568__$1 = (function (){var statearr_18644 = state_18568;
(statearr_18644[(23)] = inst_18536__$1);

return statearr_18644;
})();
if(cljs.core.truth_(inst_18537)){
var statearr_18645_18707 = state_18568__$1;
(statearr_18645_18707[(1)] = (39));

} else {
var statearr_18646_18708 = state_18568__$1;
(statearr_18646_18708[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18569 === (8))){
var inst_18452 = (state_18568[(13)]);
var inst_18451 = (state_18568[(17)]);
var inst_18454 = (inst_18452 < inst_18451);
var inst_18455 = inst_18454;
var state_18568__$1 = state_18568;
if(cljs.core.truth_(inst_18455)){
var statearr_18647_18709 = state_18568__$1;
(statearr_18647_18709[(1)] = (10));

} else {
var statearr_18648_18710 = state_18568__$1;
(statearr_18648_18710[(1)] = (11));

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
});})(c__10686__auto___18656,cs,m,dchan,dctr,done))
;
return ((function (switch__10621__auto__,c__10686__auto___18656,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10622__auto__ = null;
var cljs$core$async$mult_$_state_machine__10622__auto____0 = (function (){
var statearr_18652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18652[(0)] = cljs$core$async$mult_$_state_machine__10622__auto__);

(statearr_18652[(1)] = (1));

return statearr_18652;
});
var cljs$core$async$mult_$_state_machine__10622__auto____1 = (function (state_18568){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18653){if((e18653 instanceof Object)){
var ex__10625__auto__ = e18653;
var statearr_18654_18711 = state_18568;
(statearr_18654_18711[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18712 = state_18568;
state_18568 = G__18712;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10622__auto__ = function(state_18568){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10622__auto____1.call(this,state_18568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10622__auto____0;
cljs$core$async$mult_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10622__auto____1;
return cljs$core$async$mult_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___18656,cs,m,dchan,dctr,done))
})();
var state__10688__auto__ = (function (){var statearr_18655 = f__10687__auto__.call(null);
(statearr_18655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___18656);

return statearr_18655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___18656,cs,m,dchan,dctr,done))
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
var args18713 = [];
var len__6152__auto___18716 = arguments.length;
var i__6153__auto___18717 = (0);
while(true){
if((i__6153__auto___18717 < len__6152__auto___18716)){
args18713.push((arguments[i__6153__auto___18717]));

var G__18718 = (i__6153__auto___18717 + (1));
i__6153__auto___18717 = G__18718;
continue;
} else {
}
break;
}

var G__18715 = args18713.length;
switch (G__18715) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18713.length)].join('')));

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
var len__6152__auto___18730 = arguments.length;
var i__6153__auto___18731 = (0);
while(true){
if((i__6153__auto___18731 < len__6152__auto___18730)){
args__6159__auto__.push((arguments[i__6153__auto___18731]));

var G__18732 = (i__6153__auto___18731 + (1));
i__6153__auto___18731 = G__18732;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18724){
var map__18725 = p__18724;
var map__18725__$1 = ((((!((map__18725 == null)))?((((map__18725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18725):map__18725);
var opts = map__18725__$1;
var statearr_18727_18733 = state;
(statearr_18727_18733[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18725,map__18725__$1,opts){
return (function (val){
var statearr_18728_18734 = state;
(statearr_18728_18734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18725,map__18725__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18729_18735 = state;
(statearr_18729_18735[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18720){
var G__18721 = cljs.core.first.call(null,seq18720);
var seq18720__$1 = cljs.core.next.call(null,seq18720);
var G__18722 = cljs.core.first.call(null,seq18720__$1);
var seq18720__$2 = cljs.core.next.call(null,seq18720__$1);
var G__18723 = cljs.core.first.call(null,seq18720__$2);
var seq18720__$3 = cljs.core.next.call(null,seq18720__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18721,G__18722,G__18723,seq18720__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18899 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18900){
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
this.meta18900 = meta18900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18901,meta18900__$1){
var self__ = this;
var _18901__$1 = this;
return (new cljs.core.async.t_cljs$core$async18899(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18900__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18901){
var self__ = this;
var _18901__$1 = this;
return self__.meta18900;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18899.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18900","meta18900",89689892,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18899";

cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18899");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18899 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18900){
return (new cljs.core.async.t_cljs$core$async18899(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18900));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18899(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10686__auto___19062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18999){
var state_val_19000 = (state_18999[(1)]);
if((state_val_19000 === (7))){
var inst_18917 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19001_19063 = state_18999__$1;
(statearr_19001_19063[(2)] = inst_18917);

(statearr_19001_19063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (20))){
var inst_18929 = (state_18999[(7)]);
var state_18999__$1 = state_18999;
var statearr_19002_19064 = state_18999__$1;
(statearr_19002_19064[(2)] = inst_18929);

(statearr_19002_19064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (27))){
var state_18999__$1 = state_18999;
var statearr_19003_19065 = state_18999__$1;
(statearr_19003_19065[(2)] = null);

(statearr_19003_19065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (1))){
var inst_18905 = (state_18999[(8)]);
var inst_18905__$1 = calc_state.call(null);
var inst_18907 = (inst_18905__$1 == null);
var inst_18908 = cljs.core.not.call(null,inst_18907);
var state_18999__$1 = (function (){var statearr_19004 = state_18999;
(statearr_19004[(8)] = inst_18905__$1);

return statearr_19004;
})();
if(inst_18908){
var statearr_19005_19066 = state_18999__$1;
(statearr_19005_19066[(1)] = (2));

} else {
var statearr_19006_19067 = state_18999__$1;
(statearr_19006_19067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (24))){
var inst_18959 = (state_18999[(9)]);
var inst_18952 = (state_18999[(10)]);
var inst_18973 = (state_18999[(11)]);
var inst_18973__$1 = inst_18952.call(null,inst_18959);
var state_18999__$1 = (function (){var statearr_19007 = state_18999;
(statearr_19007[(11)] = inst_18973__$1);

return statearr_19007;
})();
if(cljs.core.truth_(inst_18973__$1)){
var statearr_19008_19068 = state_18999__$1;
(statearr_19008_19068[(1)] = (29));

} else {
var statearr_19009_19069 = state_18999__$1;
(statearr_19009_19069[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (4))){
var inst_18920 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18920)){
var statearr_19010_19070 = state_18999__$1;
(statearr_19010_19070[(1)] = (8));

} else {
var statearr_19011_19071 = state_18999__$1;
(statearr_19011_19071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (15))){
var inst_18946 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18946)){
var statearr_19012_19072 = state_18999__$1;
(statearr_19012_19072[(1)] = (19));

} else {
var statearr_19013_19073 = state_18999__$1;
(statearr_19013_19073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (21))){
var inst_18951 = (state_18999[(12)]);
var inst_18951__$1 = (state_18999[(2)]);
var inst_18952 = cljs.core.get.call(null,inst_18951__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18953 = cljs.core.get.call(null,inst_18951__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18954 = cljs.core.get.call(null,inst_18951__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18999__$1 = (function (){var statearr_19014 = state_18999;
(statearr_19014[(12)] = inst_18951__$1);

(statearr_19014[(13)] = inst_18953);

(statearr_19014[(10)] = inst_18952);

return statearr_19014;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18999__$1,(22),inst_18954);
} else {
if((state_val_19000 === (31))){
var inst_18981 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18981)){
var statearr_19015_19074 = state_18999__$1;
(statearr_19015_19074[(1)] = (32));

} else {
var statearr_19016_19075 = state_18999__$1;
(statearr_19016_19075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (32))){
var inst_18958 = (state_18999[(14)]);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18999__$1,(35),out,inst_18958);
} else {
if((state_val_19000 === (33))){
var inst_18951 = (state_18999[(12)]);
var inst_18929 = inst_18951;
var state_18999__$1 = (function (){var statearr_19017 = state_18999;
(statearr_19017[(7)] = inst_18929);

return statearr_19017;
})();
var statearr_19018_19076 = state_18999__$1;
(statearr_19018_19076[(2)] = null);

(statearr_19018_19076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (13))){
var inst_18929 = (state_18999[(7)]);
var inst_18936 = inst_18929.cljs$lang$protocol_mask$partition0$;
var inst_18937 = (inst_18936 & (64));
var inst_18938 = inst_18929.cljs$core$ISeq$;
var inst_18939 = (inst_18937) || (inst_18938);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18939)){
var statearr_19019_19077 = state_18999__$1;
(statearr_19019_19077[(1)] = (16));

} else {
var statearr_19020_19078 = state_18999__$1;
(statearr_19020_19078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (22))){
var inst_18958 = (state_18999[(14)]);
var inst_18959 = (state_18999[(9)]);
var inst_18957 = (state_18999[(2)]);
var inst_18958__$1 = cljs.core.nth.call(null,inst_18957,(0),null);
var inst_18959__$1 = cljs.core.nth.call(null,inst_18957,(1),null);
var inst_18960 = (inst_18958__$1 == null);
var inst_18961 = cljs.core._EQ_.call(null,inst_18959__$1,change);
var inst_18962 = (inst_18960) || (inst_18961);
var state_18999__$1 = (function (){var statearr_19021 = state_18999;
(statearr_19021[(14)] = inst_18958__$1);

(statearr_19021[(9)] = inst_18959__$1);

return statearr_19021;
})();
if(cljs.core.truth_(inst_18962)){
var statearr_19022_19079 = state_18999__$1;
(statearr_19022_19079[(1)] = (23));

} else {
var statearr_19023_19080 = state_18999__$1;
(statearr_19023_19080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (36))){
var inst_18951 = (state_18999[(12)]);
var inst_18929 = inst_18951;
var state_18999__$1 = (function (){var statearr_19024 = state_18999;
(statearr_19024[(7)] = inst_18929);

return statearr_19024;
})();
var statearr_19025_19081 = state_18999__$1;
(statearr_19025_19081[(2)] = null);

(statearr_19025_19081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (29))){
var inst_18973 = (state_18999[(11)]);
var state_18999__$1 = state_18999;
var statearr_19026_19082 = state_18999__$1;
(statearr_19026_19082[(2)] = inst_18973);

(statearr_19026_19082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (6))){
var state_18999__$1 = state_18999;
var statearr_19027_19083 = state_18999__$1;
(statearr_19027_19083[(2)] = false);

(statearr_19027_19083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (28))){
var inst_18969 = (state_18999[(2)]);
var inst_18970 = calc_state.call(null);
var inst_18929 = inst_18970;
var state_18999__$1 = (function (){var statearr_19028 = state_18999;
(statearr_19028[(15)] = inst_18969);

(statearr_19028[(7)] = inst_18929);

return statearr_19028;
})();
var statearr_19029_19084 = state_18999__$1;
(statearr_19029_19084[(2)] = null);

(statearr_19029_19084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (25))){
var inst_18995 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19030_19085 = state_18999__$1;
(statearr_19030_19085[(2)] = inst_18995);

(statearr_19030_19085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (34))){
var inst_18993 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19031_19086 = state_18999__$1;
(statearr_19031_19086[(2)] = inst_18993);

(statearr_19031_19086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (17))){
var state_18999__$1 = state_18999;
var statearr_19032_19087 = state_18999__$1;
(statearr_19032_19087[(2)] = false);

(statearr_19032_19087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (3))){
var state_18999__$1 = state_18999;
var statearr_19033_19088 = state_18999__$1;
(statearr_19033_19088[(2)] = false);

(statearr_19033_19088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (12))){
var inst_18997 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18999__$1,inst_18997);
} else {
if((state_val_19000 === (2))){
var inst_18905 = (state_18999[(8)]);
var inst_18910 = inst_18905.cljs$lang$protocol_mask$partition0$;
var inst_18911 = (inst_18910 & (64));
var inst_18912 = inst_18905.cljs$core$ISeq$;
var inst_18913 = (inst_18911) || (inst_18912);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18913)){
var statearr_19034_19089 = state_18999__$1;
(statearr_19034_19089[(1)] = (5));

} else {
var statearr_19035_19090 = state_18999__$1;
(statearr_19035_19090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (23))){
var inst_18958 = (state_18999[(14)]);
var inst_18964 = (inst_18958 == null);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18964)){
var statearr_19036_19091 = state_18999__$1;
(statearr_19036_19091[(1)] = (26));

} else {
var statearr_19037_19092 = state_18999__$1;
(statearr_19037_19092[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (35))){
var inst_18984 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
if(cljs.core.truth_(inst_18984)){
var statearr_19038_19093 = state_18999__$1;
(statearr_19038_19093[(1)] = (36));

} else {
var statearr_19039_19094 = state_18999__$1;
(statearr_19039_19094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (19))){
var inst_18929 = (state_18999[(7)]);
var inst_18948 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18929);
var state_18999__$1 = state_18999;
var statearr_19040_19095 = state_18999__$1;
(statearr_19040_19095[(2)] = inst_18948);

(statearr_19040_19095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (11))){
var inst_18929 = (state_18999[(7)]);
var inst_18933 = (inst_18929 == null);
var inst_18934 = cljs.core.not.call(null,inst_18933);
var state_18999__$1 = state_18999;
if(inst_18934){
var statearr_19041_19096 = state_18999__$1;
(statearr_19041_19096[(1)] = (13));

} else {
var statearr_19042_19097 = state_18999__$1;
(statearr_19042_19097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (9))){
var inst_18905 = (state_18999[(8)]);
var state_18999__$1 = state_18999;
var statearr_19043_19098 = state_18999__$1;
(statearr_19043_19098[(2)] = inst_18905);

(statearr_19043_19098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (5))){
var state_18999__$1 = state_18999;
var statearr_19044_19099 = state_18999__$1;
(statearr_19044_19099[(2)] = true);

(statearr_19044_19099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (14))){
var state_18999__$1 = state_18999;
var statearr_19045_19100 = state_18999__$1;
(statearr_19045_19100[(2)] = false);

(statearr_19045_19100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (26))){
var inst_18959 = (state_18999[(9)]);
var inst_18966 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18959);
var state_18999__$1 = state_18999;
var statearr_19046_19101 = state_18999__$1;
(statearr_19046_19101[(2)] = inst_18966);

(statearr_19046_19101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (16))){
var state_18999__$1 = state_18999;
var statearr_19047_19102 = state_18999__$1;
(statearr_19047_19102[(2)] = true);

(statearr_19047_19102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (38))){
var inst_18989 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19048_19103 = state_18999__$1;
(statearr_19048_19103[(2)] = inst_18989);

(statearr_19048_19103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (30))){
var inst_18953 = (state_18999[(13)]);
var inst_18959 = (state_18999[(9)]);
var inst_18952 = (state_18999[(10)]);
var inst_18976 = cljs.core.empty_QMARK_.call(null,inst_18952);
var inst_18977 = inst_18953.call(null,inst_18959);
var inst_18978 = cljs.core.not.call(null,inst_18977);
var inst_18979 = (inst_18976) && (inst_18978);
var state_18999__$1 = state_18999;
var statearr_19049_19104 = state_18999__$1;
(statearr_19049_19104[(2)] = inst_18979);

(statearr_19049_19104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (10))){
var inst_18905 = (state_18999[(8)]);
var inst_18925 = (state_18999[(2)]);
var inst_18926 = cljs.core.get.call(null,inst_18925,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18927 = cljs.core.get.call(null,inst_18925,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18928 = cljs.core.get.call(null,inst_18925,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18929 = inst_18905;
var state_18999__$1 = (function (){var statearr_19050 = state_18999;
(statearr_19050[(16)] = inst_18926);

(statearr_19050[(17)] = inst_18928);

(statearr_19050[(7)] = inst_18929);

(statearr_19050[(18)] = inst_18927);

return statearr_19050;
})();
var statearr_19051_19105 = state_18999__$1;
(statearr_19051_19105[(2)] = null);

(statearr_19051_19105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (18))){
var inst_18943 = (state_18999[(2)]);
var state_18999__$1 = state_18999;
var statearr_19052_19106 = state_18999__$1;
(statearr_19052_19106[(2)] = inst_18943);

(statearr_19052_19106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (37))){
var state_18999__$1 = state_18999;
var statearr_19053_19107 = state_18999__$1;
(statearr_19053_19107[(2)] = null);

(statearr_19053_19107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19000 === (8))){
var inst_18905 = (state_18999[(8)]);
var inst_18922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18905);
var state_18999__$1 = state_18999;
var statearr_19054_19108 = state_18999__$1;
(statearr_19054_19108[(2)] = inst_18922);

(statearr_19054_19108[(1)] = (10));


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
});})(c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10621__auto__,c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10622__auto__ = null;
var cljs$core$async$mix_$_state_machine__10622__auto____0 = (function (){
var statearr_19058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19058[(0)] = cljs$core$async$mix_$_state_machine__10622__auto__);

(statearr_19058[(1)] = (1));

return statearr_19058;
});
var cljs$core$async$mix_$_state_machine__10622__auto____1 = (function (state_18999){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19059){if((e19059 instanceof Object)){
var ex__10625__auto__ = e19059;
var statearr_19060_19109 = state_18999;
(statearr_19060_19109[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19110 = state_18999;
state_18999 = G__19110;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10622__auto__ = function(state_18999){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10622__auto____1.call(this,state_18999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10622__auto____0;
cljs$core$async$mix_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10622__auto____1;
return cljs$core$async$mix_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10688__auto__ = (function (){var statearr_19061 = f__10687__auto__.call(null);
(statearr_19061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19062);

return statearr_19061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19111 = [];
var len__6152__auto___19114 = arguments.length;
var i__6153__auto___19115 = (0);
while(true){
if((i__6153__auto___19115 < len__6152__auto___19114)){
args19111.push((arguments[i__6153__auto___19115]));

var G__19116 = (i__6153__auto___19115 + (1));
i__6153__auto___19115 = G__19116;
continue;
} else {
}
break;
}

var G__19113 = args19111.length;
switch (G__19113) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19111.length)].join('')));

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
var args19119 = [];
var len__6152__auto___19244 = arguments.length;
var i__6153__auto___19245 = (0);
while(true){
if((i__6153__auto___19245 < len__6152__auto___19244)){
args19119.push((arguments[i__6153__auto___19245]));

var G__19246 = (i__6153__auto___19245 + (1));
i__6153__auto___19245 = G__19246;
continue;
} else {
}
break;
}

var G__19121 = args19119.length;
switch (G__19121) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19119.length)].join('')));

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
return (function (p1__19118_SHARP_){
if(cljs.core.truth_(p1__19118_SHARP_.call(null,topic))){
return p1__19118_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19118_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19122 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19123){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19123 = meta19123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19124,meta19123__$1){
var self__ = this;
var _19124__$1 = this;
return (new cljs.core.async.t_cljs$core$async19122(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19123__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19124){
var self__ = this;
var _19124__$1 = this;
return self__.meta19123;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19123","meta19123",2068753847,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19122";

cljs.core.async.t_cljs$core$async19122.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19122");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19122 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19123){
return (new cljs.core.async.t_cljs$core$async19122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19123));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19122(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10686__auto___19248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19248,mults,ensure_mult,p){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19248,mults,ensure_mult,p){
return (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (7))){
var inst_19192 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19198_19249 = state_19196__$1;
(statearr_19198_19249[(2)] = inst_19192);

(statearr_19198_19249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (20))){
var state_19196__$1 = state_19196;
var statearr_19199_19250 = state_19196__$1;
(statearr_19199_19250[(2)] = null);

(statearr_19199_19250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (1))){
var state_19196__$1 = state_19196;
var statearr_19200_19251 = state_19196__$1;
(statearr_19200_19251[(2)] = null);

(statearr_19200_19251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (24))){
var inst_19175 = (state_19196[(7)]);
var inst_19184 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19175);
var state_19196__$1 = state_19196;
var statearr_19201_19252 = state_19196__$1;
(statearr_19201_19252[(2)] = inst_19184);

(statearr_19201_19252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (4))){
var inst_19127 = (state_19196[(8)]);
var inst_19127__$1 = (state_19196[(2)]);
var inst_19128 = (inst_19127__$1 == null);
var state_19196__$1 = (function (){var statearr_19202 = state_19196;
(statearr_19202[(8)] = inst_19127__$1);

return statearr_19202;
})();
if(cljs.core.truth_(inst_19128)){
var statearr_19203_19253 = state_19196__$1;
(statearr_19203_19253[(1)] = (5));

} else {
var statearr_19204_19254 = state_19196__$1;
(statearr_19204_19254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (15))){
var inst_19169 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19205_19255 = state_19196__$1;
(statearr_19205_19255[(2)] = inst_19169);

(statearr_19205_19255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (21))){
var inst_19189 = (state_19196[(2)]);
var state_19196__$1 = (function (){var statearr_19206 = state_19196;
(statearr_19206[(9)] = inst_19189);

return statearr_19206;
})();
var statearr_19207_19256 = state_19196__$1;
(statearr_19207_19256[(2)] = null);

(statearr_19207_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (13))){
var inst_19151 = (state_19196[(10)]);
var inst_19153 = cljs.core.chunked_seq_QMARK_.call(null,inst_19151);
var state_19196__$1 = state_19196;
if(inst_19153){
var statearr_19208_19257 = state_19196__$1;
(statearr_19208_19257[(1)] = (16));

} else {
var statearr_19209_19258 = state_19196__$1;
(statearr_19209_19258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (22))){
var inst_19181 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
if(cljs.core.truth_(inst_19181)){
var statearr_19210_19259 = state_19196__$1;
(statearr_19210_19259[(1)] = (23));

} else {
var statearr_19211_19260 = state_19196__$1;
(statearr_19211_19260[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (6))){
var inst_19175 = (state_19196[(7)]);
var inst_19177 = (state_19196[(11)]);
var inst_19127 = (state_19196[(8)]);
var inst_19175__$1 = topic_fn.call(null,inst_19127);
var inst_19176 = cljs.core.deref.call(null,mults);
var inst_19177__$1 = cljs.core.get.call(null,inst_19176,inst_19175__$1);
var state_19196__$1 = (function (){var statearr_19212 = state_19196;
(statearr_19212[(7)] = inst_19175__$1);

(statearr_19212[(11)] = inst_19177__$1);

return statearr_19212;
})();
if(cljs.core.truth_(inst_19177__$1)){
var statearr_19213_19261 = state_19196__$1;
(statearr_19213_19261[(1)] = (19));

} else {
var statearr_19214_19262 = state_19196__$1;
(statearr_19214_19262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (25))){
var inst_19186 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19215_19263 = state_19196__$1;
(statearr_19215_19263[(2)] = inst_19186);

(statearr_19215_19263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (17))){
var inst_19151 = (state_19196[(10)]);
var inst_19160 = cljs.core.first.call(null,inst_19151);
var inst_19161 = cljs.core.async.muxch_STAR_.call(null,inst_19160);
var inst_19162 = cljs.core.async.close_BANG_.call(null,inst_19161);
var inst_19163 = cljs.core.next.call(null,inst_19151);
var inst_19137 = inst_19163;
var inst_19138 = null;
var inst_19139 = (0);
var inst_19140 = (0);
var state_19196__$1 = (function (){var statearr_19216 = state_19196;
(statearr_19216[(12)] = inst_19162);

(statearr_19216[(13)] = inst_19139);

(statearr_19216[(14)] = inst_19138);

(statearr_19216[(15)] = inst_19137);

(statearr_19216[(16)] = inst_19140);

return statearr_19216;
})();
var statearr_19217_19264 = state_19196__$1;
(statearr_19217_19264[(2)] = null);

(statearr_19217_19264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (3))){
var inst_19194 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (12))){
var inst_19171 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19218_19265 = state_19196__$1;
(statearr_19218_19265[(2)] = inst_19171);

(statearr_19218_19265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (2))){
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19196__$1,(4),ch);
} else {
if((state_val_19197 === (23))){
var state_19196__$1 = state_19196;
var statearr_19219_19266 = state_19196__$1;
(statearr_19219_19266[(2)] = null);

(statearr_19219_19266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (19))){
var inst_19177 = (state_19196[(11)]);
var inst_19127 = (state_19196[(8)]);
var inst_19179 = cljs.core.async.muxch_STAR_.call(null,inst_19177);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19196__$1,(22),inst_19179,inst_19127);
} else {
if((state_val_19197 === (11))){
var inst_19137 = (state_19196[(15)]);
var inst_19151 = (state_19196[(10)]);
var inst_19151__$1 = cljs.core.seq.call(null,inst_19137);
var state_19196__$1 = (function (){var statearr_19220 = state_19196;
(statearr_19220[(10)] = inst_19151__$1);

return statearr_19220;
})();
if(inst_19151__$1){
var statearr_19221_19267 = state_19196__$1;
(statearr_19221_19267[(1)] = (13));

} else {
var statearr_19222_19268 = state_19196__$1;
(statearr_19222_19268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (9))){
var inst_19173 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19223_19269 = state_19196__$1;
(statearr_19223_19269[(2)] = inst_19173);

(statearr_19223_19269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (5))){
var inst_19134 = cljs.core.deref.call(null,mults);
var inst_19135 = cljs.core.vals.call(null,inst_19134);
var inst_19136 = cljs.core.seq.call(null,inst_19135);
var inst_19137 = inst_19136;
var inst_19138 = null;
var inst_19139 = (0);
var inst_19140 = (0);
var state_19196__$1 = (function (){var statearr_19224 = state_19196;
(statearr_19224[(13)] = inst_19139);

(statearr_19224[(14)] = inst_19138);

(statearr_19224[(15)] = inst_19137);

(statearr_19224[(16)] = inst_19140);

return statearr_19224;
})();
var statearr_19225_19270 = state_19196__$1;
(statearr_19225_19270[(2)] = null);

(statearr_19225_19270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (14))){
var state_19196__$1 = state_19196;
var statearr_19229_19271 = state_19196__$1;
(statearr_19229_19271[(2)] = null);

(statearr_19229_19271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (16))){
var inst_19151 = (state_19196[(10)]);
var inst_19155 = cljs.core.chunk_first.call(null,inst_19151);
var inst_19156 = cljs.core.chunk_rest.call(null,inst_19151);
var inst_19157 = cljs.core.count.call(null,inst_19155);
var inst_19137 = inst_19156;
var inst_19138 = inst_19155;
var inst_19139 = inst_19157;
var inst_19140 = (0);
var state_19196__$1 = (function (){var statearr_19230 = state_19196;
(statearr_19230[(13)] = inst_19139);

(statearr_19230[(14)] = inst_19138);

(statearr_19230[(15)] = inst_19137);

(statearr_19230[(16)] = inst_19140);

return statearr_19230;
})();
var statearr_19231_19272 = state_19196__$1;
(statearr_19231_19272[(2)] = null);

(statearr_19231_19272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (10))){
var inst_19139 = (state_19196[(13)]);
var inst_19138 = (state_19196[(14)]);
var inst_19137 = (state_19196[(15)]);
var inst_19140 = (state_19196[(16)]);
var inst_19145 = cljs.core._nth.call(null,inst_19138,inst_19140);
var inst_19146 = cljs.core.async.muxch_STAR_.call(null,inst_19145);
var inst_19147 = cljs.core.async.close_BANG_.call(null,inst_19146);
var inst_19148 = (inst_19140 + (1));
var tmp19226 = inst_19139;
var tmp19227 = inst_19138;
var tmp19228 = inst_19137;
var inst_19137__$1 = tmp19228;
var inst_19138__$1 = tmp19227;
var inst_19139__$1 = tmp19226;
var inst_19140__$1 = inst_19148;
var state_19196__$1 = (function (){var statearr_19232 = state_19196;
(statearr_19232[(13)] = inst_19139__$1);

(statearr_19232[(14)] = inst_19138__$1);

(statearr_19232[(15)] = inst_19137__$1);

(statearr_19232[(16)] = inst_19140__$1);

(statearr_19232[(17)] = inst_19147);

return statearr_19232;
})();
var statearr_19233_19273 = state_19196__$1;
(statearr_19233_19273[(2)] = null);

(statearr_19233_19273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (18))){
var inst_19166 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19234_19274 = state_19196__$1;
(statearr_19234_19274[(2)] = inst_19166);

(statearr_19234_19274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19197 === (8))){
var inst_19139 = (state_19196[(13)]);
var inst_19140 = (state_19196[(16)]);
var inst_19142 = (inst_19140 < inst_19139);
var inst_19143 = inst_19142;
var state_19196__$1 = state_19196;
if(cljs.core.truth_(inst_19143)){
var statearr_19235_19275 = state_19196__$1;
(statearr_19235_19275[(1)] = (10));

} else {
var statearr_19236_19276 = state_19196__$1;
(statearr_19236_19276[(1)] = (11));

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
});})(c__10686__auto___19248,mults,ensure_mult,p))
;
return ((function (switch__10621__auto__,c__10686__auto___19248,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19240[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19240[(1)] = (1));

return statearr_19240;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19196){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19241){if((e19241 instanceof Object)){
var ex__10625__auto__ = e19241;
var statearr_19242_19277 = state_19196;
(statearr_19242_19277[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19278 = state_19196;
state_19196 = G__19278;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19248,mults,ensure_mult,p))
})();
var state__10688__auto__ = (function (){var statearr_19243 = f__10687__auto__.call(null);
(statearr_19243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19248);

return statearr_19243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19248,mults,ensure_mult,p))
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
var args19279 = [];
var len__6152__auto___19282 = arguments.length;
var i__6153__auto___19283 = (0);
while(true){
if((i__6153__auto___19283 < len__6152__auto___19282)){
args19279.push((arguments[i__6153__auto___19283]));

var G__19284 = (i__6153__auto___19283 + (1));
i__6153__auto___19283 = G__19284;
continue;
} else {
}
break;
}

var G__19281 = args19279.length;
switch (G__19281) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19279.length)].join('')));

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
var args19286 = [];
var len__6152__auto___19289 = arguments.length;
var i__6153__auto___19290 = (0);
while(true){
if((i__6153__auto___19290 < len__6152__auto___19289)){
args19286.push((arguments[i__6153__auto___19290]));

var G__19291 = (i__6153__auto___19290 + (1));
i__6153__auto___19290 = G__19291;
continue;
} else {
}
break;
}

var G__19288 = args19286.length;
switch (G__19288) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19286.length)].join('')));

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
var args19293 = [];
var len__6152__auto___19364 = arguments.length;
var i__6153__auto___19365 = (0);
while(true){
if((i__6153__auto___19365 < len__6152__auto___19364)){
args19293.push((arguments[i__6153__auto___19365]));

var G__19366 = (i__6153__auto___19365 + (1));
i__6153__auto___19365 = G__19366;
continue;
} else {
}
break;
}

var G__19295 = args19293.length;
switch (G__19295) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19293.length)].join('')));

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
var c__10686__auto___19368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19334){
var state_val_19335 = (state_19334[(1)]);
if((state_val_19335 === (7))){
var state_19334__$1 = state_19334;
var statearr_19336_19369 = state_19334__$1;
(statearr_19336_19369[(2)] = null);

(statearr_19336_19369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (1))){
var state_19334__$1 = state_19334;
var statearr_19337_19370 = state_19334__$1;
(statearr_19337_19370[(2)] = null);

(statearr_19337_19370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (4))){
var inst_19298 = (state_19334[(7)]);
var inst_19300 = (inst_19298 < cnt);
var state_19334__$1 = state_19334;
if(cljs.core.truth_(inst_19300)){
var statearr_19338_19371 = state_19334__$1;
(statearr_19338_19371[(1)] = (6));

} else {
var statearr_19339_19372 = state_19334__$1;
(statearr_19339_19372[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (15))){
var inst_19330 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
var statearr_19340_19373 = state_19334__$1;
(statearr_19340_19373[(2)] = inst_19330);

(statearr_19340_19373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (13))){
var inst_19323 = cljs.core.async.close_BANG_.call(null,out);
var state_19334__$1 = state_19334;
var statearr_19341_19374 = state_19334__$1;
(statearr_19341_19374[(2)] = inst_19323);

(statearr_19341_19374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (6))){
var state_19334__$1 = state_19334;
var statearr_19342_19375 = state_19334__$1;
(statearr_19342_19375[(2)] = null);

(statearr_19342_19375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (3))){
var inst_19332 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19334__$1,inst_19332);
} else {
if((state_val_19335 === (12))){
var inst_19320 = (state_19334[(8)]);
var inst_19320__$1 = (state_19334[(2)]);
var inst_19321 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19320__$1);
var state_19334__$1 = (function (){var statearr_19343 = state_19334;
(statearr_19343[(8)] = inst_19320__$1);

return statearr_19343;
})();
if(cljs.core.truth_(inst_19321)){
var statearr_19344_19376 = state_19334__$1;
(statearr_19344_19376[(1)] = (13));

} else {
var statearr_19345_19377 = state_19334__$1;
(statearr_19345_19377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (2))){
var inst_19297 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19298 = (0);
var state_19334__$1 = (function (){var statearr_19346 = state_19334;
(statearr_19346[(7)] = inst_19298);

(statearr_19346[(9)] = inst_19297);

return statearr_19346;
})();
var statearr_19347_19378 = state_19334__$1;
(statearr_19347_19378[(2)] = null);

(statearr_19347_19378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (11))){
var inst_19298 = (state_19334[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19334,(10),Object,null,(9));
var inst_19307 = chs__$1.call(null,inst_19298);
var inst_19308 = done.call(null,inst_19298);
var inst_19309 = cljs.core.async.take_BANG_.call(null,inst_19307,inst_19308);
var state_19334__$1 = state_19334;
var statearr_19348_19379 = state_19334__$1;
(statearr_19348_19379[(2)] = inst_19309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (9))){
var inst_19298 = (state_19334[(7)]);
var inst_19311 = (state_19334[(2)]);
var inst_19312 = (inst_19298 + (1));
var inst_19298__$1 = inst_19312;
var state_19334__$1 = (function (){var statearr_19349 = state_19334;
(statearr_19349[(10)] = inst_19311);

(statearr_19349[(7)] = inst_19298__$1);

return statearr_19349;
})();
var statearr_19350_19380 = state_19334__$1;
(statearr_19350_19380[(2)] = null);

(statearr_19350_19380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (5))){
var inst_19318 = (state_19334[(2)]);
var state_19334__$1 = (function (){var statearr_19351 = state_19334;
(statearr_19351[(11)] = inst_19318);

return statearr_19351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19334__$1,(12),dchan);
} else {
if((state_val_19335 === (14))){
var inst_19320 = (state_19334[(8)]);
var inst_19325 = cljs.core.apply.call(null,f,inst_19320);
var state_19334__$1 = state_19334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19334__$1,(16),out,inst_19325);
} else {
if((state_val_19335 === (16))){
var inst_19327 = (state_19334[(2)]);
var state_19334__$1 = (function (){var statearr_19352 = state_19334;
(statearr_19352[(12)] = inst_19327);

return statearr_19352;
})();
var statearr_19353_19381 = state_19334__$1;
(statearr_19353_19381[(2)] = null);

(statearr_19353_19381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (10))){
var inst_19302 = (state_19334[(2)]);
var inst_19303 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19334__$1 = (function (){var statearr_19354 = state_19334;
(statearr_19354[(13)] = inst_19302);

return statearr_19354;
})();
var statearr_19355_19382 = state_19334__$1;
(statearr_19355_19382[(2)] = inst_19303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19335 === (8))){
var inst_19316 = (state_19334[(2)]);
var state_19334__$1 = state_19334;
var statearr_19356_19383 = state_19334__$1;
(statearr_19356_19383[(2)] = inst_19316);

(statearr_19356_19383[(1)] = (5));


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
});})(c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10621__auto__,c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19360[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19360[(1)] = (1));

return statearr_19360;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19334){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19361){if((e19361 instanceof Object)){
var ex__10625__auto__ = e19361;
var statearr_19362_19384 = state_19334;
(statearr_19362_19384[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19385 = state_19334;
state_19334 = G__19385;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10688__auto__ = (function (){var statearr_19363 = f__10687__auto__.call(null);
(statearr_19363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19368);

return statearr_19363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19368,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19387 = [];
var len__6152__auto___19443 = arguments.length;
var i__6153__auto___19444 = (0);
while(true){
if((i__6153__auto___19444 < len__6152__auto___19443)){
args19387.push((arguments[i__6153__auto___19444]));

var G__19445 = (i__6153__auto___19444 + (1));
i__6153__auto___19444 = G__19445;
continue;
} else {
}
break;
}

var G__19389 = args19387.length;
switch (G__19389) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19387.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19447,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19447,out){
return (function (state_19419){
var state_val_19420 = (state_19419[(1)]);
if((state_val_19420 === (7))){
var inst_19398 = (state_19419[(7)]);
var inst_19399 = (state_19419[(8)]);
var inst_19398__$1 = (state_19419[(2)]);
var inst_19399__$1 = cljs.core.nth.call(null,inst_19398__$1,(0),null);
var inst_19400 = cljs.core.nth.call(null,inst_19398__$1,(1),null);
var inst_19401 = (inst_19399__$1 == null);
var state_19419__$1 = (function (){var statearr_19421 = state_19419;
(statearr_19421[(9)] = inst_19400);

(statearr_19421[(7)] = inst_19398__$1);

(statearr_19421[(8)] = inst_19399__$1);

return statearr_19421;
})();
if(cljs.core.truth_(inst_19401)){
var statearr_19422_19448 = state_19419__$1;
(statearr_19422_19448[(1)] = (8));

} else {
var statearr_19423_19449 = state_19419__$1;
(statearr_19423_19449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (1))){
var inst_19390 = cljs.core.vec.call(null,chs);
var inst_19391 = inst_19390;
var state_19419__$1 = (function (){var statearr_19424 = state_19419;
(statearr_19424[(10)] = inst_19391);

return statearr_19424;
})();
var statearr_19425_19450 = state_19419__$1;
(statearr_19425_19450[(2)] = null);

(statearr_19425_19450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (4))){
var inst_19391 = (state_19419[(10)]);
var state_19419__$1 = state_19419;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19419__$1,(7),inst_19391);
} else {
if((state_val_19420 === (6))){
var inst_19415 = (state_19419[(2)]);
var state_19419__$1 = state_19419;
var statearr_19426_19451 = state_19419__$1;
(statearr_19426_19451[(2)] = inst_19415);

(statearr_19426_19451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (3))){
var inst_19417 = (state_19419[(2)]);
var state_19419__$1 = state_19419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19419__$1,inst_19417);
} else {
if((state_val_19420 === (2))){
var inst_19391 = (state_19419[(10)]);
var inst_19393 = cljs.core.count.call(null,inst_19391);
var inst_19394 = (inst_19393 > (0));
var state_19419__$1 = state_19419;
if(cljs.core.truth_(inst_19394)){
var statearr_19428_19452 = state_19419__$1;
(statearr_19428_19452[(1)] = (4));

} else {
var statearr_19429_19453 = state_19419__$1;
(statearr_19429_19453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (11))){
var inst_19391 = (state_19419[(10)]);
var inst_19408 = (state_19419[(2)]);
var tmp19427 = inst_19391;
var inst_19391__$1 = tmp19427;
var state_19419__$1 = (function (){var statearr_19430 = state_19419;
(statearr_19430[(10)] = inst_19391__$1);

(statearr_19430[(11)] = inst_19408);

return statearr_19430;
})();
var statearr_19431_19454 = state_19419__$1;
(statearr_19431_19454[(2)] = null);

(statearr_19431_19454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (9))){
var inst_19399 = (state_19419[(8)]);
var state_19419__$1 = state_19419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19419__$1,(11),out,inst_19399);
} else {
if((state_val_19420 === (5))){
var inst_19413 = cljs.core.async.close_BANG_.call(null,out);
var state_19419__$1 = state_19419;
var statearr_19432_19455 = state_19419__$1;
(statearr_19432_19455[(2)] = inst_19413);

(statearr_19432_19455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (10))){
var inst_19411 = (state_19419[(2)]);
var state_19419__$1 = state_19419;
var statearr_19433_19456 = state_19419__$1;
(statearr_19433_19456[(2)] = inst_19411);

(statearr_19433_19456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19420 === (8))){
var inst_19400 = (state_19419[(9)]);
var inst_19391 = (state_19419[(10)]);
var inst_19398 = (state_19419[(7)]);
var inst_19399 = (state_19419[(8)]);
var inst_19403 = (function (){var cs = inst_19391;
var vec__19396 = inst_19398;
var v = inst_19399;
var c = inst_19400;
return ((function (cs,vec__19396,v,c,inst_19400,inst_19391,inst_19398,inst_19399,state_val_19420,c__10686__auto___19447,out){
return (function (p1__19386_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19386_SHARP_);
});
;})(cs,vec__19396,v,c,inst_19400,inst_19391,inst_19398,inst_19399,state_val_19420,c__10686__auto___19447,out))
})();
var inst_19404 = cljs.core.filterv.call(null,inst_19403,inst_19391);
var inst_19391__$1 = inst_19404;
var state_19419__$1 = (function (){var statearr_19434 = state_19419;
(statearr_19434[(10)] = inst_19391__$1);

return statearr_19434;
})();
var statearr_19435_19457 = state_19419__$1;
(statearr_19435_19457[(2)] = null);

(statearr_19435_19457[(1)] = (2));


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
});})(c__10686__auto___19447,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19447,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19439[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19439[(1)] = (1));

return statearr_19439;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19419){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19440){if((e19440 instanceof Object)){
var ex__10625__auto__ = e19440;
var statearr_19441_19458 = state_19419;
(statearr_19441_19458[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19459 = state_19419;
state_19419 = G__19459;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19447,out))
})();
var state__10688__auto__ = (function (){var statearr_19442 = f__10687__auto__.call(null);
(statearr_19442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19447);

return statearr_19442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19447,out))
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
var args19460 = [];
var len__6152__auto___19509 = arguments.length;
var i__6153__auto___19510 = (0);
while(true){
if((i__6153__auto___19510 < len__6152__auto___19509)){
args19460.push((arguments[i__6153__auto___19510]));

var G__19511 = (i__6153__auto___19510 + (1));
i__6153__auto___19510 = G__19511;
continue;
} else {
}
break;
}

var G__19462 = args19460.length;
switch (G__19462) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19460.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19513,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19513,out){
return (function (state_19486){
var state_val_19487 = (state_19486[(1)]);
if((state_val_19487 === (7))){
var inst_19468 = (state_19486[(7)]);
var inst_19468__$1 = (state_19486[(2)]);
var inst_19469 = (inst_19468__$1 == null);
var inst_19470 = cljs.core.not.call(null,inst_19469);
var state_19486__$1 = (function (){var statearr_19488 = state_19486;
(statearr_19488[(7)] = inst_19468__$1);

return statearr_19488;
})();
if(inst_19470){
var statearr_19489_19514 = state_19486__$1;
(statearr_19489_19514[(1)] = (8));

} else {
var statearr_19490_19515 = state_19486__$1;
(statearr_19490_19515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (1))){
var inst_19463 = (0);
var state_19486__$1 = (function (){var statearr_19491 = state_19486;
(statearr_19491[(8)] = inst_19463);

return statearr_19491;
})();
var statearr_19492_19516 = state_19486__$1;
(statearr_19492_19516[(2)] = null);

(statearr_19492_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (4))){
var state_19486__$1 = state_19486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19486__$1,(7),ch);
} else {
if((state_val_19487 === (6))){
var inst_19481 = (state_19486[(2)]);
var state_19486__$1 = state_19486;
var statearr_19493_19517 = state_19486__$1;
(statearr_19493_19517[(2)] = inst_19481);

(statearr_19493_19517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (3))){
var inst_19483 = (state_19486[(2)]);
var inst_19484 = cljs.core.async.close_BANG_.call(null,out);
var state_19486__$1 = (function (){var statearr_19494 = state_19486;
(statearr_19494[(9)] = inst_19483);

return statearr_19494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19486__$1,inst_19484);
} else {
if((state_val_19487 === (2))){
var inst_19463 = (state_19486[(8)]);
var inst_19465 = (inst_19463 < n);
var state_19486__$1 = state_19486;
if(cljs.core.truth_(inst_19465)){
var statearr_19495_19518 = state_19486__$1;
(statearr_19495_19518[(1)] = (4));

} else {
var statearr_19496_19519 = state_19486__$1;
(statearr_19496_19519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (11))){
var inst_19463 = (state_19486[(8)]);
var inst_19473 = (state_19486[(2)]);
var inst_19474 = (inst_19463 + (1));
var inst_19463__$1 = inst_19474;
var state_19486__$1 = (function (){var statearr_19497 = state_19486;
(statearr_19497[(10)] = inst_19473);

(statearr_19497[(8)] = inst_19463__$1);

return statearr_19497;
})();
var statearr_19498_19520 = state_19486__$1;
(statearr_19498_19520[(2)] = null);

(statearr_19498_19520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (9))){
var state_19486__$1 = state_19486;
var statearr_19499_19521 = state_19486__$1;
(statearr_19499_19521[(2)] = null);

(statearr_19499_19521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (5))){
var state_19486__$1 = state_19486;
var statearr_19500_19522 = state_19486__$1;
(statearr_19500_19522[(2)] = null);

(statearr_19500_19522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (10))){
var inst_19478 = (state_19486[(2)]);
var state_19486__$1 = state_19486;
var statearr_19501_19523 = state_19486__$1;
(statearr_19501_19523[(2)] = inst_19478);

(statearr_19501_19523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (8))){
var inst_19468 = (state_19486[(7)]);
var state_19486__$1 = state_19486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19486__$1,(11),out,inst_19468);
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
});})(c__10686__auto___19513,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19513,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19505[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19505[(1)] = (1));

return statearr_19505;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19486){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19506){if((e19506 instanceof Object)){
var ex__10625__auto__ = e19506;
var statearr_19507_19524 = state_19486;
(statearr_19507_19524[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19525 = state_19486;
state_19486 = G__19525;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19513,out))
})();
var state__10688__auto__ = (function (){var statearr_19508 = f__10687__auto__.call(null);
(statearr_19508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19513);

return statearr_19508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19513,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19533 = (function (map_LT_,f,ch,meta19534){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19534 = meta19534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19535,meta19534__$1){
var self__ = this;
var _19535__$1 = this;
return (new cljs.core.async.t_cljs$core$async19533(self__.map_LT_,self__.f,self__.ch,meta19534__$1));
});

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19535){
var self__ = this;
var _19535__$1 = this;
return self__.meta19534;
});

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19536 = (function (map_LT_,f,ch,meta19534,_,fn1,meta19537){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19534 = meta19534;
this._ = _;
this.fn1 = fn1;
this.meta19537 = meta19537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19538,meta19537__$1){
var self__ = this;
var _19538__$1 = this;
return (new cljs.core.async.t_cljs$core$async19536(self__.map_LT_,self__.f,self__.ch,self__.meta19534,self__._,self__.fn1,meta19537__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19538){
var self__ = this;
var _19538__$1 = this;
return self__.meta19537;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19536.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19526_SHARP_){
return f1.call(null,(((p1__19526_SHARP_ == null))?null:self__.f.call(null,p1__19526_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19536.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19534","meta19534",1203209657,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19533","cljs.core.async/t_cljs$core$async19533",2008166624,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19537","meta19537",240087486,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19536";

cljs.core.async.t_cljs$core$async19536.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19536");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19536 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19536(map_LT___$1,f__$1,ch__$1,meta19534__$1,___$2,fn1__$1,meta19537){
return (new cljs.core.async.t_cljs$core$async19536(map_LT___$1,f__$1,ch__$1,meta19534__$1,___$2,fn1__$1,meta19537));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19536(self__.map_LT_,self__.f,self__.ch,self__.meta19534,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19534","meta19534",1203209657,null)], null);
});

cljs.core.async.t_cljs$core$async19533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19533";

cljs.core.async.t_cljs$core$async19533.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19533");
});

cljs.core.async.__GT_t_cljs$core$async19533 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19533(map_LT___$1,f__$1,ch__$1,meta19534){
return (new cljs.core.async.t_cljs$core$async19533(map_LT___$1,f__$1,ch__$1,meta19534));
});

}

return (new cljs.core.async.t_cljs$core$async19533(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19542 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19542 = (function (map_GT_,f,ch,meta19543){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19543 = meta19543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19544,meta19543__$1){
var self__ = this;
var _19544__$1 = this;
return (new cljs.core.async.t_cljs$core$async19542(self__.map_GT_,self__.f,self__.ch,meta19543__$1));
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19544){
var self__ = this;
var _19544__$1 = this;
return self__.meta19543;
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19543","meta19543",-199984465,null)], null);
});

cljs.core.async.t_cljs$core$async19542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19542";

cljs.core.async.t_cljs$core$async19542.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19542");
});

cljs.core.async.__GT_t_cljs$core$async19542 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19542(map_GT___$1,f__$1,ch__$1,meta19543){
return (new cljs.core.async.t_cljs$core$async19542(map_GT___$1,f__$1,ch__$1,meta19543));
});

}

return (new cljs.core.async.t_cljs$core$async19542(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19548 = (function (filter_GT_,p,ch,meta19549){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19549 = meta19549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19550,meta19549__$1){
var self__ = this;
var _19550__$1 = this;
return (new cljs.core.async.t_cljs$core$async19548(self__.filter_GT_,self__.p,self__.ch,meta19549__$1));
});

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19550){
var self__ = this;
var _19550__$1 = this;
return self__.meta19549;
});

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19549","meta19549",2073156055,null)], null);
});

cljs.core.async.t_cljs$core$async19548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19548";

cljs.core.async.t_cljs$core$async19548.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19548");
});

cljs.core.async.__GT_t_cljs$core$async19548 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19548(filter_GT___$1,p__$1,ch__$1,meta19549){
return (new cljs.core.async.t_cljs$core$async19548(filter_GT___$1,p__$1,ch__$1,meta19549));
});

}

return (new cljs.core.async.t_cljs$core$async19548(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19551 = [];
var len__6152__auto___19595 = arguments.length;
var i__6153__auto___19596 = (0);
while(true){
if((i__6153__auto___19596 < len__6152__auto___19595)){
args19551.push((arguments[i__6153__auto___19596]));

var G__19597 = (i__6153__auto___19596 + (1));
i__6153__auto___19596 = G__19597;
continue;
} else {
}
break;
}

var G__19553 = args19551.length;
switch (G__19553) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19551.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19599,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19599,out){
return (function (state_19574){
var state_val_19575 = (state_19574[(1)]);
if((state_val_19575 === (7))){
var inst_19570 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19576_19600 = state_19574__$1;
(statearr_19576_19600[(2)] = inst_19570);

(statearr_19576_19600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (1))){
var state_19574__$1 = state_19574;
var statearr_19577_19601 = state_19574__$1;
(statearr_19577_19601[(2)] = null);

(statearr_19577_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (4))){
var inst_19556 = (state_19574[(7)]);
var inst_19556__$1 = (state_19574[(2)]);
var inst_19557 = (inst_19556__$1 == null);
var state_19574__$1 = (function (){var statearr_19578 = state_19574;
(statearr_19578[(7)] = inst_19556__$1);

return statearr_19578;
})();
if(cljs.core.truth_(inst_19557)){
var statearr_19579_19602 = state_19574__$1;
(statearr_19579_19602[(1)] = (5));

} else {
var statearr_19580_19603 = state_19574__$1;
(statearr_19580_19603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (6))){
var inst_19556 = (state_19574[(7)]);
var inst_19561 = p.call(null,inst_19556);
var state_19574__$1 = state_19574;
if(cljs.core.truth_(inst_19561)){
var statearr_19581_19604 = state_19574__$1;
(statearr_19581_19604[(1)] = (8));

} else {
var statearr_19582_19605 = state_19574__$1;
(statearr_19582_19605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (3))){
var inst_19572 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19574__$1,inst_19572);
} else {
if((state_val_19575 === (2))){
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19574__$1,(4),ch);
} else {
if((state_val_19575 === (11))){
var inst_19564 = (state_19574[(2)]);
var state_19574__$1 = state_19574;
var statearr_19583_19606 = state_19574__$1;
(statearr_19583_19606[(2)] = inst_19564);

(statearr_19583_19606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (9))){
var state_19574__$1 = state_19574;
var statearr_19584_19607 = state_19574__$1;
(statearr_19584_19607[(2)] = null);

(statearr_19584_19607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (5))){
var inst_19559 = cljs.core.async.close_BANG_.call(null,out);
var state_19574__$1 = state_19574;
var statearr_19585_19608 = state_19574__$1;
(statearr_19585_19608[(2)] = inst_19559);

(statearr_19585_19608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (10))){
var inst_19567 = (state_19574[(2)]);
var state_19574__$1 = (function (){var statearr_19586 = state_19574;
(statearr_19586[(8)] = inst_19567);

return statearr_19586;
})();
var statearr_19587_19609 = state_19574__$1;
(statearr_19587_19609[(2)] = null);

(statearr_19587_19609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19575 === (8))){
var inst_19556 = (state_19574[(7)]);
var state_19574__$1 = state_19574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19574__$1,(11),out,inst_19556);
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
});})(c__10686__auto___19599,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19599,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19591 = [null,null,null,null,null,null,null,null,null];
(statearr_19591[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19591[(1)] = (1));

return statearr_19591;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19574){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19592){if((e19592 instanceof Object)){
var ex__10625__auto__ = e19592;
var statearr_19593_19610 = state_19574;
(statearr_19593_19610[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19611 = state_19574;
state_19574 = G__19611;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19599,out))
})();
var state__10688__auto__ = (function (){var statearr_19594 = f__10687__auto__.call(null);
(statearr_19594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19599);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19599,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19612 = [];
var len__6152__auto___19615 = arguments.length;
var i__6153__auto___19616 = (0);
while(true){
if((i__6153__auto___19616 < len__6152__auto___19615)){
args19612.push((arguments[i__6153__auto___19616]));

var G__19617 = (i__6153__auto___19616 + (1));
i__6153__auto___19616 = G__19617;
continue;
} else {
}
break;
}

var G__19614 = args19612.length;
switch (G__19614) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19612.length)].join('')));

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
var c__10686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto__){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto__){
return (function (state_19784){
var state_val_19785 = (state_19784[(1)]);
if((state_val_19785 === (7))){
var inst_19780 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19786_19827 = state_19784__$1;
(statearr_19786_19827[(2)] = inst_19780);

(statearr_19786_19827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (20))){
var inst_19750 = (state_19784[(7)]);
var inst_19761 = (state_19784[(2)]);
var inst_19762 = cljs.core.next.call(null,inst_19750);
var inst_19736 = inst_19762;
var inst_19737 = null;
var inst_19738 = (0);
var inst_19739 = (0);
var state_19784__$1 = (function (){var statearr_19787 = state_19784;
(statearr_19787[(8)] = inst_19739);

(statearr_19787[(9)] = inst_19761);

(statearr_19787[(10)] = inst_19737);

(statearr_19787[(11)] = inst_19738);

(statearr_19787[(12)] = inst_19736);

return statearr_19787;
})();
var statearr_19788_19828 = state_19784__$1;
(statearr_19788_19828[(2)] = null);

(statearr_19788_19828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (1))){
var state_19784__$1 = state_19784;
var statearr_19789_19829 = state_19784__$1;
(statearr_19789_19829[(2)] = null);

(statearr_19789_19829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (4))){
var inst_19725 = (state_19784[(13)]);
var inst_19725__$1 = (state_19784[(2)]);
var inst_19726 = (inst_19725__$1 == null);
var state_19784__$1 = (function (){var statearr_19790 = state_19784;
(statearr_19790[(13)] = inst_19725__$1);

return statearr_19790;
})();
if(cljs.core.truth_(inst_19726)){
var statearr_19791_19830 = state_19784__$1;
(statearr_19791_19830[(1)] = (5));

} else {
var statearr_19792_19831 = state_19784__$1;
(statearr_19792_19831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (15))){
var state_19784__$1 = state_19784;
var statearr_19796_19832 = state_19784__$1;
(statearr_19796_19832[(2)] = null);

(statearr_19796_19832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (21))){
var state_19784__$1 = state_19784;
var statearr_19797_19833 = state_19784__$1;
(statearr_19797_19833[(2)] = null);

(statearr_19797_19833[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (13))){
var inst_19739 = (state_19784[(8)]);
var inst_19737 = (state_19784[(10)]);
var inst_19738 = (state_19784[(11)]);
var inst_19736 = (state_19784[(12)]);
var inst_19746 = (state_19784[(2)]);
var inst_19747 = (inst_19739 + (1));
var tmp19793 = inst_19737;
var tmp19794 = inst_19738;
var tmp19795 = inst_19736;
var inst_19736__$1 = tmp19795;
var inst_19737__$1 = tmp19793;
var inst_19738__$1 = tmp19794;
var inst_19739__$1 = inst_19747;
var state_19784__$1 = (function (){var statearr_19798 = state_19784;
(statearr_19798[(8)] = inst_19739__$1);

(statearr_19798[(10)] = inst_19737__$1);

(statearr_19798[(11)] = inst_19738__$1);

(statearr_19798[(14)] = inst_19746);

(statearr_19798[(12)] = inst_19736__$1);

return statearr_19798;
})();
var statearr_19799_19834 = state_19784__$1;
(statearr_19799_19834[(2)] = null);

(statearr_19799_19834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (22))){
var state_19784__$1 = state_19784;
var statearr_19800_19835 = state_19784__$1;
(statearr_19800_19835[(2)] = null);

(statearr_19800_19835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (6))){
var inst_19725 = (state_19784[(13)]);
var inst_19734 = f.call(null,inst_19725);
var inst_19735 = cljs.core.seq.call(null,inst_19734);
var inst_19736 = inst_19735;
var inst_19737 = null;
var inst_19738 = (0);
var inst_19739 = (0);
var state_19784__$1 = (function (){var statearr_19801 = state_19784;
(statearr_19801[(8)] = inst_19739);

(statearr_19801[(10)] = inst_19737);

(statearr_19801[(11)] = inst_19738);

(statearr_19801[(12)] = inst_19736);

return statearr_19801;
})();
var statearr_19802_19836 = state_19784__$1;
(statearr_19802_19836[(2)] = null);

(statearr_19802_19836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (17))){
var inst_19750 = (state_19784[(7)]);
var inst_19754 = cljs.core.chunk_first.call(null,inst_19750);
var inst_19755 = cljs.core.chunk_rest.call(null,inst_19750);
var inst_19756 = cljs.core.count.call(null,inst_19754);
var inst_19736 = inst_19755;
var inst_19737 = inst_19754;
var inst_19738 = inst_19756;
var inst_19739 = (0);
var state_19784__$1 = (function (){var statearr_19803 = state_19784;
(statearr_19803[(8)] = inst_19739);

(statearr_19803[(10)] = inst_19737);

(statearr_19803[(11)] = inst_19738);

(statearr_19803[(12)] = inst_19736);

return statearr_19803;
})();
var statearr_19804_19837 = state_19784__$1;
(statearr_19804_19837[(2)] = null);

(statearr_19804_19837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (3))){
var inst_19782 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19784__$1,inst_19782);
} else {
if((state_val_19785 === (12))){
var inst_19770 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19805_19838 = state_19784__$1;
(statearr_19805_19838[(2)] = inst_19770);

(statearr_19805_19838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (2))){
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19784__$1,(4),in$);
} else {
if((state_val_19785 === (23))){
var inst_19778 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19806_19839 = state_19784__$1;
(statearr_19806_19839[(2)] = inst_19778);

(statearr_19806_19839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (19))){
var inst_19765 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19807_19840 = state_19784__$1;
(statearr_19807_19840[(2)] = inst_19765);

(statearr_19807_19840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (11))){
var inst_19750 = (state_19784[(7)]);
var inst_19736 = (state_19784[(12)]);
var inst_19750__$1 = cljs.core.seq.call(null,inst_19736);
var state_19784__$1 = (function (){var statearr_19808 = state_19784;
(statearr_19808[(7)] = inst_19750__$1);

return statearr_19808;
})();
if(inst_19750__$1){
var statearr_19809_19841 = state_19784__$1;
(statearr_19809_19841[(1)] = (14));

} else {
var statearr_19810_19842 = state_19784__$1;
(statearr_19810_19842[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (9))){
var inst_19772 = (state_19784[(2)]);
var inst_19773 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19784__$1 = (function (){var statearr_19811 = state_19784;
(statearr_19811[(15)] = inst_19772);

return statearr_19811;
})();
if(cljs.core.truth_(inst_19773)){
var statearr_19812_19843 = state_19784__$1;
(statearr_19812_19843[(1)] = (21));

} else {
var statearr_19813_19844 = state_19784__$1;
(statearr_19813_19844[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (5))){
var inst_19728 = cljs.core.async.close_BANG_.call(null,out);
var state_19784__$1 = state_19784;
var statearr_19814_19845 = state_19784__$1;
(statearr_19814_19845[(2)] = inst_19728);

(statearr_19814_19845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (14))){
var inst_19750 = (state_19784[(7)]);
var inst_19752 = cljs.core.chunked_seq_QMARK_.call(null,inst_19750);
var state_19784__$1 = state_19784;
if(inst_19752){
var statearr_19815_19846 = state_19784__$1;
(statearr_19815_19846[(1)] = (17));

} else {
var statearr_19816_19847 = state_19784__$1;
(statearr_19816_19847[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (16))){
var inst_19768 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19817_19848 = state_19784__$1;
(statearr_19817_19848[(2)] = inst_19768);

(statearr_19817_19848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (10))){
var inst_19739 = (state_19784[(8)]);
var inst_19737 = (state_19784[(10)]);
var inst_19744 = cljs.core._nth.call(null,inst_19737,inst_19739);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19784__$1,(13),out,inst_19744);
} else {
if((state_val_19785 === (18))){
var inst_19750 = (state_19784[(7)]);
var inst_19759 = cljs.core.first.call(null,inst_19750);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19784__$1,(20),out,inst_19759);
} else {
if((state_val_19785 === (8))){
var inst_19739 = (state_19784[(8)]);
var inst_19738 = (state_19784[(11)]);
var inst_19741 = (inst_19739 < inst_19738);
var inst_19742 = inst_19741;
var state_19784__$1 = state_19784;
if(cljs.core.truth_(inst_19742)){
var statearr_19818_19849 = state_19784__$1;
(statearr_19818_19849[(1)] = (10));

} else {
var statearr_19819_19850 = state_19784__$1;
(statearr_19819_19850[(1)] = (11));

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
});})(c__10686__auto__))
;
return ((function (switch__10621__auto__,c__10686__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_19823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19823[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__);

(statearr_19823[(1)] = (1));

return statearr_19823;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1 = (function (state_19784){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19824){if((e19824 instanceof Object)){
var ex__10625__auto__ = e19824;
var statearr_19825_19851 = state_19784;
(statearr_19825_19851[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19852 = state_19784;
state_19784 = G__19852;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__ = function(state_19784){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1.call(this,state_19784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_19826 = f__10687__auto__.call(null);
(statearr_19826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_19826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto__))
);

return c__10686__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19853 = [];
var len__6152__auto___19856 = arguments.length;
var i__6153__auto___19857 = (0);
while(true){
if((i__6153__auto___19857 < len__6152__auto___19856)){
args19853.push((arguments[i__6153__auto___19857]));

var G__19858 = (i__6153__auto___19857 + (1));
i__6153__auto___19857 = G__19858;
continue;
} else {
}
break;
}

var G__19855 = args19853.length;
switch (G__19855) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19853.length)].join('')));

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
var args19860 = [];
var len__6152__auto___19863 = arguments.length;
var i__6153__auto___19864 = (0);
while(true){
if((i__6153__auto___19864 < len__6152__auto___19863)){
args19860.push((arguments[i__6153__auto___19864]));

var G__19865 = (i__6153__auto___19864 + (1));
i__6153__auto___19864 = G__19865;
continue;
} else {
}
break;
}

var G__19862 = args19860.length;
switch (G__19862) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19860.length)].join('')));

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
var args19867 = [];
var len__6152__auto___19918 = arguments.length;
var i__6153__auto___19919 = (0);
while(true){
if((i__6153__auto___19919 < len__6152__auto___19918)){
args19867.push((arguments[i__6153__auto___19919]));

var G__19920 = (i__6153__auto___19919 + (1));
i__6153__auto___19919 = G__19920;
continue;
} else {
}
break;
}

var G__19869 = args19867.length;
switch (G__19869) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19867.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19922,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19922,out){
return (function (state_19893){
var state_val_19894 = (state_19893[(1)]);
if((state_val_19894 === (7))){
var inst_19888 = (state_19893[(2)]);
var state_19893__$1 = state_19893;
var statearr_19895_19923 = state_19893__$1;
(statearr_19895_19923[(2)] = inst_19888);

(statearr_19895_19923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (1))){
var inst_19870 = null;
var state_19893__$1 = (function (){var statearr_19896 = state_19893;
(statearr_19896[(7)] = inst_19870);

return statearr_19896;
})();
var statearr_19897_19924 = state_19893__$1;
(statearr_19897_19924[(2)] = null);

(statearr_19897_19924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (4))){
var inst_19873 = (state_19893[(8)]);
var inst_19873__$1 = (state_19893[(2)]);
var inst_19874 = (inst_19873__$1 == null);
var inst_19875 = cljs.core.not.call(null,inst_19874);
var state_19893__$1 = (function (){var statearr_19898 = state_19893;
(statearr_19898[(8)] = inst_19873__$1);

return statearr_19898;
})();
if(inst_19875){
var statearr_19899_19925 = state_19893__$1;
(statearr_19899_19925[(1)] = (5));

} else {
var statearr_19900_19926 = state_19893__$1;
(statearr_19900_19926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (6))){
var state_19893__$1 = state_19893;
var statearr_19901_19927 = state_19893__$1;
(statearr_19901_19927[(2)] = null);

(statearr_19901_19927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (3))){
var inst_19890 = (state_19893[(2)]);
var inst_19891 = cljs.core.async.close_BANG_.call(null,out);
var state_19893__$1 = (function (){var statearr_19902 = state_19893;
(statearr_19902[(9)] = inst_19890);

return statearr_19902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19893__$1,inst_19891);
} else {
if((state_val_19894 === (2))){
var state_19893__$1 = state_19893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19893__$1,(4),ch);
} else {
if((state_val_19894 === (11))){
var inst_19873 = (state_19893[(8)]);
var inst_19882 = (state_19893[(2)]);
var inst_19870 = inst_19873;
var state_19893__$1 = (function (){var statearr_19903 = state_19893;
(statearr_19903[(7)] = inst_19870);

(statearr_19903[(10)] = inst_19882);

return statearr_19903;
})();
var statearr_19904_19928 = state_19893__$1;
(statearr_19904_19928[(2)] = null);

(statearr_19904_19928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (9))){
var inst_19873 = (state_19893[(8)]);
var state_19893__$1 = state_19893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19893__$1,(11),out,inst_19873);
} else {
if((state_val_19894 === (5))){
var inst_19870 = (state_19893[(7)]);
var inst_19873 = (state_19893[(8)]);
var inst_19877 = cljs.core._EQ_.call(null,inst_19873,inst_19870);
var state_19893__$1 = state_19893;
if(inst_19877){
var statearr_19906_19929 = state_19893__$1;
(statearr_19906_19929[(1)] = (8));

} else {
var statearr_19907_19930 = state_19893__$1;
(statearr_19907_19930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (10))){
var inst_19885 = (state_19893[(2)]);
var state_19893__$1 = state_19893;
var statearr_19908_19931 = state_19893__$1;
(statearr_19908_19931[(2)] = inst_19885);

(statearr_19908_19931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19894 === (8))){
var inst_19870 = (state_19893[(7)]);
var tmp19905 = inst_19870;
var inst_19870__$1 = tmp19905;
var state_19893__$1 = (function (){var statearr_19909 = state_19893;
(statearr_19909[(7)] = inst_19870__$1);

return statearr_19909;
})();
var statearr_19910_19932 = state_19893__$1;
(statearr_19910_19932[(2)] = null);

(statearr_19910_19932[(1)] = (2));


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
});})(c__10686__auto___19922,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19922,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19914[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19914[(1)] = (1));

return statearr_19914;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19893){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19915){if((e19915 instanceof Object)){
var ex__10625__auto__ = e19915;
var statearr_19916_19933 = state_19893;
(statearr_19916_19933[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19934 = state_19893;
state_19893 = G__19934;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19922,out))
})();
var state__10688__auto__ = (function (){var statearr_19917 = f__10687__auto__.call(null);
(statearr_19917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19922);

return statearr_19917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19922,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19935 = [];
var len__6152__auto___20005 = arguments.length;
var i__6153__auto___20006 = (0);
while(true){
if((i__6153__auto___20006 < len__6152__auto___20005)){
args19935.push((arguments[i__6153__auto___20006]));

var G__20007 = (i__6153__auto___20006 + (1));
i__6153__auto___20006 = G__20007;
continue;
} else {
}
break;
}

var G__19937 = args19935.length;
switch (G__19937) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19935.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___20009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___20009,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___20009,out){
return (function (state_19975){
var state_val_19976 = (state_19975[(1)]);
if((state_val_19976 === (7))){
var inst_19971 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
var statearr_19977_20010 = state_19975__$1;
(statearr_19977_20010[(2)] = inst_19971);

(statearr_19977_20010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (1))){
var inst_19938 = (new Array(n));
var inst_19939 = inst_19938;
var inst_19940 = (0);
var state_19975__$1 = (function (){var statearr_19978 = state_19975;
(statearr_19978[(7)] = inst_19940);

(statearr_19978[(8)] = inst_19939);

return statearr_19978;
})();
var statearr_19979_20011 = state_19975__$1;
(statearr_19979_20011[(2)] = null);

(statearr_19979_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (4))){
var inst_19943 = (state_19975[(9)]);
var inst_19943__$1 = (state_19975[(2)]);
var inst_19944 = (inst_19943__$1 == null);
var inst_19945 = cljs.core.not.call(null,inst_19944);
var state_19975__$1 = (function (){var statearr_19980 = state_19975;
(statearr_19980[(9)] = inst_19943__$1);

return statearr_19980;
})();
if(inst_19945){
var statearr_19981_20012 = state_19975__$1;
(statearr_19981_20012[(1)] = (5));

} else {
var statearr_19982_20013 = state_19975__$1;
(statearr_19982_20013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (15))){
var inst_19965 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
var statearr_19983_20014 = state_19975__$1;
(statearr_19983_20014[(2)] = inst_19965);

(statearr_19983_20014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (13))){
var state_19975__$1 = state_19975;
var statearr_19984_20015 = state_19975__$1;
(statearr_19984_20015[(2)] = null);

(statearr_19984_20015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (6))){
var inst_19940 = (state_19975[(7)]);
var inst_19961 = (inst_19940 > (0));
var state_19975__$1 = state_19975;
if(cljs.core.truth_(inst_19961)){
var statearr_19985_20016 = state_19975__$1;
(statearr_19985_20016[(1)] = (12));

} else {
var statearr_19986_20017 = state_19975__$1;
(statearr_19986_20017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (3))){
var inst_19973 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19975__$1,inst_19973);
} else {
if((state_val_19976 === (12))){
var inst_19939 = (state_19975[(8)]);
var inst_19963 = cljs.core.vec.call(null,inst_19939);
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19975__$1,(15),out,inst_19963);
} else {
if((state_val_19976 === (2))){
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19975__$1,(4),ch);
} else {
if((state_val_19976 === (11))){
var inst_19955 = (state_19975[(2)]);
var inst_19956 = (new Array(n));
var inst_19939 = inst_19956;
var inst_19940 = (0);
var state_19975__$1 = (function (){var statearr_19987 = state_19975;
(statearr_19987[(7)] = inst_19940);

(statearr_19987[(10)] = inst_19955);

(statearr_19987[(8)] = inst_19939);

return statearr_19987;
})();
var statearr_19988_20018 = state_19975__$1;
(statearr_19988_20018[(2)] = null);

(statearr_19988_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (9))){
var inst_19939 = (state_19975[(8)]);
var inst_19953 = cljs.core.vec.call(null,inst_19939);
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19975__$1,(11),out,inst_19953);
} else {
if((state_val_19976 === (5))){
var inst_19948 = (state_19975[(11)]);
var inst_19940 = (state_19975[(7)]);
var inst_19943 = (state_19975[(9)]);
var inst_19939 = (state_19975[(8)]);
var inst_19947 = (inst_19939[inst_19940] = inst_19943);
var inst_19948__$1 = (inst_19940 + (1));
var inst_19949 = (inst_19948__$1 < n);
var state_19975__$1 = (function (){var statearr_19989 = state_19975;
(statearr_19989[(12)] = inst_19947);

(statearr_19989[(11)] = inst_19948__$1);

return statearr_19989;
})();
if(cljs.core.truth_(inst_19949)){
var statearr_19990_20019 = state_19975__$1;
(statearr_19990_20019[(1)] = (8));

} else {
var statearr_19991_20020 = state_19975__$1;
(statearr_19991_20020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (14))){
var inst_19968 = (state_19975[(2)]);
var inst_19969 = cljs.core.async.close_BANG_.call(null,out);
var state_19975__$1 = (function (){var statearr_19993 = state_19975;
(statearr_19993[(13)] = inst_19968);

return statearr_19993;
})();
var statearr_19994_20021 = state_19975__$1;
(statearr_19994_20021[(2)] = inst_19969);

(statearr_19994_20021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (10))){
var inst_19959 = (state_19975[(2)]);
var state_19975__$1 = state_19975;
var statearr_19995_20022 = state_19975__$1;
(statearr_19995_20022[(2)] = inst_19959);

(statearr_19995_20022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19976 === (8))){
var inst_19948 = (state_19975[(11)]);
var inst_19939 = (state_19975[(8)]);
var tmp19992 = inst_19939;
var inst_19939__$1 = tmp19992;
var inst_19940 = inst_19948;
var state_19975__$1 = (function (){var statearr_19996 = state_19975;
(statearr_19996[(7)] = inst_19940);

(statearr_19996[(8)] = inst_19939__$1);

return statearr_19996;
})();
var statearr_19997_20023 = state_19975__$1;
(statearr_19997_20023[(2)] = null);

(statearr_19997_20023[(1)] = (2));


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
});})(c__10686__auto___20009,out))
;
return ((function (switch__10621__auto__,c__10686__auto___20009,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_20001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20001[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_20001[(1)] = (1));

return statearr_20001;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19975){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e20002){if((e20002 instanceof Object)){
var ex__10625__auto__ = e20002;
var statearr_20003_20024 = state_19975;
(statearr_20003_20024[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20025 = state_19975;
state_19975 = G__20025;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___20009,out))
})();
var state__10688__auto__ = (function (){var statearr_20004 = f__10687__auto__.call(null);
(statearr_20004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___20009);

return statearr_20004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___20009,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20026 = [];
var len__6152__auto___20100 = arguments.length;
var i__6153__auto___20101 = (0);
while(true){
if((i__6153__auto___20101 < len__6152__auto___20100)){
args20026.push((arguments[i__6153__auto___20101]));

var G__20102 = (i__6153__auto___20101 + (1));
i__6153__auto___20101 = G__20102;
continue;
} else {
}
break;
}

var G__20028 = args20026.length;
switch (G__20028) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20026.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___20104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___20104,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___20104,out){
return (function (state_20070){
var state_val_20071 = (state_20070[(1)]);
if((state_val_20071 === (7))){
var inst_20066 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20072_20105 = state_20070__$1;
(statearr_20072_20105[(2)] = inst_20066);

(statearr_20072_20105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (1))){
var inst_20029 = [];
var inst_20030 = inst_20029;
var inst_20031 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20070__$1 = (function (){var statearr_20073 = state_20070;
(statearr_20073[(7)] = inst_20031);

(statearr_20073[(8)] = inst_20030);

return statearr_20073;
})();
var statearr_20074_20106 = state_20070__$1;
(statearr_20074_20106[(2)] = null);

(statearr_20074_20106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (4))){
var inst_20034 = (state_20070[(9)]);
var inst_20034__$1 = (state_20070[(2)]);
var inst_20035 = (inst_20034__$1 == null);
var inst_20036 = cljs.core.not.call(null,inst_20035);
var state_20070__$1 = (function (){var statearr_20075 = state_20070;
(statearr_20075[(9)] = inst_20034__$1);

return statearr_20075;
})();
if(inst_20036){
var statearr_20076_20107 = state_20070__$1;
(statearr_20076_20107[(1)] = (5));

} else {
var statearr_20077_20108 = state_20070__$1;
(statearr_20077_20108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (15))){
var inst_20060 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20078_20109 = state_20070__$1;
(statearr_20078_20109[(2)] = inst_20060);

(statearr_20078_20109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (13))){
var state_20070__$1 = state_20070;
var statearr_20079_20110 = state_20070__$1;
(statearr_20079_20110[(2)] = null);

(statearr_20079_20110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (6))){
var inst_20030 = (state_20070[(8)]);
var inst_20055 = inst_20030.length;
var inst_20056 = (inst_20055 > (0));
var state_20070__$1 = state_20070;
if(cljs.core.truth_(inst_20056)){
var statearr_20080_20111 = state_20070__$1;
(statearr_20080_20111[(1)] = (12));

} else {
var statearr_20081_20112 = state_20070__$1;
(statearr_20081_20112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (3))){
var inst_20068 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20070__$1,inst_20068);
} else {
if((state_val_20071 === (12))){
var inst_20030 = (state_20070[(8)]);
var inst_20058 = cljs.core.vec.call(null,inst_20030);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20070__$1,(15),out,inst_20058);
} else {
if((state_val_20071 === (2))){
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20070__$1,(4),ch);
} else {
if((state_val_20071 === (11))){
var inst_20038 = (state_20070[(10)]);
var inst_20034 = (state_20070[(9)]);
var inst_20048 = (state_20070[(2)]);
var inst_20049 = [];
var inst_20050 = inst_20049.push(inst_20034);
var inst_20030 = inst_20049;
var inst_20031 = inst_20038;
var state_20070__$1 = (function (){var statearr_20082 = state_20070;
(statearr_20082[(7)] = inst_20031);

(statearr_20082[(11)] = inst_20048);

(statearr_20082[(8)] = inst_20030);

(statearr_20082[(12)] = inst_20050);

return statearr_20082;
})();
var statearr_20083_20113 = state_20070__$1;
(statearr_20083_20113[(2)] = null);

(statearr_20083_20113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (9))){
var inst_20030 = (state_20070[(8)]);
var inst_20046 = cljs.core.vec.call(null,inst_20030);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20070__$1,(11),out,inst_20046);
} else {
if((state_val_20071 === (5))){
var inst_20031 = (state_20070[(7)]);
var inst_20038 = (state_20070[(10)]);
var inst_20034 = (state_20070[(9)]);
var inst_20038__$1 = f.call(null,inst_20034);
var inst_20039 = cljs.core._EQ_.call(null,inst_20038__$1,inst_20031);
var inst_20040 = cljs.core.keyword_identical_QMARK_.call(null,inst_20031,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20041 = (inst_20039) || (inst_20040);
var state_20070__$1 = (function (){var statearr_20084 = state_20070;
(statearr_20084[(10)] = inst_20038__$1);

return statearr_20084;
})();
if(cljs.core.truth_(inst_20041)){
var statearr_20085_20114 = state_20070__$1;
(statearr_20085_20114[(1)] = (8));

} else {
var statearr_20086_20115 = state_20070__$1;
(statearr_20086_20115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (14))){
var inst_20063 = (state_20070[(2)]);
var inst_20064 = cljs.core.async.close_BANG_.call(null,out);
var state_20070__$1 = (function (){var statearr_20088 = state_20070;
(statearr_20088[(13)] = inst_20063);

return statearr_20088;
})();
var statearr_20089_20116 = state_20070__$1;
(statearr_20089_20116[(2)] = inst_20064);

(statearr_20089_20116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (10))){
var inst_20053 = (state_20070[(2)]);
var state_20070__$1 = state_20070;
var statearr_20090_20117 = state_20070__$1;
(statearr_20090_20117[(2)] = inst_20053);

(statearr_20090_20117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20071 === (8))){
var inst_20030 = (state_20070[(8)]);
var inst_20038 = (state_20070[(10)]);
var inst_20034 = (state_20070[(9)]);
var inst_20043 = inst_20030.push(inst_20034);
var tmp20087 = inst_20030;
var inst_20030__$1 = tmp20087;
var inst_20031 = inst_20038;
var state_20070__$1 = (function (){var statearr_20091 = state_20070;
(statearr_20091[(7)] = inst_20031);

(statearr_20091[(8)] = inst_20030__$1);

(statearr_20091[(14)] = inst_20043);

return statearr_20091;
})();
var statearr_20092_20118 = state_20070__$1;
(statearr_20092_20118[(2)] = null);

(statearr_20092_20118[(1)] = (2));


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
});})(c__10686__auto___20104,out))
;
return ((function (switch__10621__auto__,c__10686__auto___20104,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_20096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20096[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_20096[(1)] = (1));

return statearr_20096;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_20070){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_20070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e20097){if((e20097 instanceof Object)){
var ex__10625__auto__ = e20097;
var statearr_20098_20119 = state_20070;
(statearr_20098_20119[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20120 = state_20070;
state_20070 = G__20120;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_20070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_20070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___20104,out))
})();
var state__10688__auto__ = (function (){var statearr_20099 = f__10687__auto__.call(null);
(statearr_20099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___20104);

return statearr_20099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___20104,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map