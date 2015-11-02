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
if(typeof cljs.core.async.t_cljs$core$async17441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17441 = (function (fn_handler,f,meta17442){
this.fn_handler = fn_handler;
this.f = f;
this.meta17442 = meta17442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17443,meta17442__$1){
var self__ = this;
var _17443__$1 = this;
return (new cljs.core.async.t_cljs$core$async17441(self__.fn_handler,self__.f,meta17442__$1));
});

cljs.core.async.t_cljs$core$async17441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17443){
var self__ = this;
var _17443__$1 = this;
return self__.meta17442;
});

cljs.core.async.t_cljs$core$async17441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17442","meta17442",1322789903,null)], null);
});

cljs.core.async.t_cljs$core$async17441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17441";

cljs.core.async.t_cljs$core$async17441.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17441");
});

cljs.core.async.__GT_t_cljs$core$async17441 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async17441(fn_handler__$1,f__$1,meta17442){
return (new cljs.core.async.t_cljs$core$async17441(fn_handler__$1,f__$1,meta17442));
});

}

return (new cljs.core.async.t_cljs$core$async17441(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17446.length)].join('')));

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
var args17453 = [];
var len__6152__auto___17456 = arguments.length;
var i__6153__auto___17457 = (0);
while(true){
if((i__6153__auto___17457 < len__6152__auto___17456)){
args17453.push((arguments[i__6153__auto___17457]));

var G__17458 = (i__6153__auto___17457 + (1));
i__6153__auto___17457 = G__17458;
continue;
} else {
}
break;
}

var G__17455 = args17453.length;
switch (G__17455) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17453.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17460 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17460);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17460,ret){
return (function (){
return fn1.call(null,val_17460);
});})(val_17460,ret))
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
var args17461 = [];
var len__6152__auto___17464 = arguments.length;
var i__6153__auto___17465 = (0);
while(true){
if((i__6153__auto___17465 < len__6152__auto___17464)){
args17461.push((arguments[i__6153__auto___17465]));

var G__17466 = (i__6153__auto___17465 + (1));
i__6153__auto___17465 = G__17466;
continue;
} else {
}
break;
}

var G__17463 = args17461.length;
switch (G__17463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17461.length)].join('')));

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
var n__5997__auto___17468 = n;
var x_17469 = (0);
while(true){
if((x_17469 < n__5997__auto___17468)){
(a[x_17469] = (0));

var G__17470 = (x_17469 + (1));
x_17469 = G__17470;
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

var G__17471 = (i + (1));
i = G__17471;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17475 = (function (alt_flag,flag,meta17476){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17476 = meta17476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17477,meta17476__$1){
var self__ = this;
var _17477__$1 = this;
return (new cljs.core.async.t_cljs$core$async17475(self__.alt_flag,self__.flag,meta17476__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17477){
var self__ = this;
var _17477__$1 = this;
return self__.meta17476;
});})(flag))
;

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17475.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17476","meta17476",1563235257,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17475";

cljs.core.async.t_cljs$core$async17475.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17475");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17475 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17475(alt_flag__$1,flag__$1,meta17476){
return (new cljs.core.async.t_cljs$core$async17475(alt_flag__$1,flag__$1,meta17476));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17475(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17481 = (function (alt_handler,flag,cb,meta17482){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17482 = meta17482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17483,meta17482__$1){
var self__ = this;
var _17483__$1 = this;
return (new cljs.core.async.t_cljs$core$async17481(self__.alt_handler,self__.flag,self__.cb,meta17482__$1));
});

cljs.core.async.t_cljs$core$async17481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17483){
var self__ = this;
var _17483__$1 = this;
return self__.meta17482;
});

cljs.core.async.t_cljs$core$async17481.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17482","meta17482",637296152,null)], null);
});

cljs.core.async.t_cljs$core$async17481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17481";

cljs.core.async.t_cljs$core$async17481.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async17481");
});

cljs.core.async.__GT_t_cljs$core$async17481 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17481(alt_handler__$1,flag__$1,cb__$1,meta17482){
return (new cljs.core.async.t_cljs$core$async17481(alt_handler__$1,flag__$1,cb__$1,meta17482));
});

}

return (new cljs.core.async.t_cljs$core$async17481(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17484_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17485_SHARP_,port], null));
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
var G__17486 = (i + (1));
i = G__17486;
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
var len__6152__auto___17492 = arguments.length;
var i__6153__auto___17493 = (0);
while(true){
if((i__6153__auto___17493 < len__6152__auto___17492)){
args__6159__auto__.push((arguments[i__6153__auto___17493]));

var G__17494 = (i__6153__auto___17493 + (1));
i__6153__auto___17493 = G__17494;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17489){
var map__17490 = p__17489;
var map__17490__$1 = ((((!((map__17490 == null)))?((((map__17490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17490):map__17490);
var opts = map__17490__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17487){
var G__17488 = cljs.core.first.call(null,seq17487);
var seq17487__$1 = cljs.core.next.call(null,seq17487);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17488,seq17487__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args17495 = [];
var len__6152__auto___17545 = arguments.length;
var i__6153__auto___17546 = (0);
while(true){
if((i__6153__auto___17546 < len__6152__auto___17545)){
args17495.push((arguments[i__6153__auto___17546]));

var G__17547 = (i__6153__auto___17546 + (1));
i__6153__auto___17546 = G__17547;
continue;
} else {
}
break;
}

var G__17497 = args17495.length;
switch (G__17497) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17495.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10686__auto___17549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17549){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17549){
return (function (state_17521){
var state_val_17522 = (state_17521[(1)]);
if((state_val_17522 === (7))){
var inst_17517 = (state_17521[(2)]);
var state_17521__$1 = state_17521;
var statearr_17523_17550 = state_17521__$1;
(statearr_17523_17550[(2)] = inst_17517);

(statearr_17523_17550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (1))){
var state_17521__$1 = state_17521;
var statearr_17524_17551 = state_17521__$1;
(statearr_17524_17551[(2)] = null);

(statearr_17524_17551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (4))){
var inst_17500 = (state_17521[(7)]);
var inst_17500__$1 = (state_17521[(2)]);
var inst_17501 = (inst_17500__$1 == null);
var state_17521__$1 = (function (){var statearr_17525 = state_17521;
(statearr_17525[(7)] = inst_17500__$1);

return statearr_17525;
})();
if(cljs.core.truth_(inst_17501)){
var statearr_17526_17552 = state_17521__$1;
(statearr_17526_17552[(1)] = (5));

} else {
var statearr_17527_17553 = state_17521__$1;
(statearr_17527_17553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (13))){
var state_17521__$1 = state_17521;
var statearr_17528_17554 = state_17521__$1;
(statearr_17528_17554[(2)] = null);

(statearr_17528_17554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (6))){
var inst_17500 = (state_17521[(7)]);
var state_17521__$1 = state_17521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17521__$1,(11),to,inst_17500);
} else {
if((state_val_17522 === (3))){
var inst_17519 = (state_17521[(2)]);
var state_17521__$1 = state_17521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17521__$1,inst_17519);
} else {
if((state_val_17522 === (12))){
var state_17521__$1 = state_17521;
var statearr_17529_17555 = state_17521__$1;
(statearr_17529_17555[(2)] = null);

(statearr_17529_17555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (2))){
var state_17521__$1 = state_17521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17521__$1,(4),from);
} else {
if((state_val_17522 === (11))){
var inst_17510 = (state_17521[(2)]);
var state_17521__$1 = state_17521;
if(cljs.core.truth_(inst_17510)){
var statearr_17530_17556 = state_17521__$1;
(statearr_17530_17556[(1)] = (12));

} else {
var statearr_17531_17557 = state_17521__$1;
(statearr_17531_17557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (9))){
var state_17521__$1 = state_17521;
var statearr_17532_17558 = state_17521__$1;
(statearr_17532_17558[(2)] = null);

(statearr_17532_17558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (5))){
var state_17521__$1 = state_17521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17533_17559 = state_17521__$1;
(statearr_17533_17559[(1)] = (8));

} else {
var statearr_17534_17560 = state_17521__$1;
(statearr_17534_17560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (14))){
var inst_17515 = (state_17521[(2)]);
var state_17521__$1 = state_17521;
var statearr_17535_17561 = state_17521__$1;
(statearr_17535_17561[(2)] = inst_17515);

(statearr_17535_17561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (10))){
var inst_17507 = (state_17521[(2)]);
var state_17521__$1 = state_17521;
var statearr_17536_17562 = state_17521__$1;
(statearr_17536_17562[(2)] = inst_17507);

(statearr_17536_17562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17522 === (8))){
var inst_17504 = cljs.core.async.close_BANG_.call(null,to);
var state_17521__$1 = state_17521;
var statearr_17537_17563 = state_17521__$1;
(statearr_17537_17563[(2)] = inst_17504);

(statearr_17537_17563[(1)] = (10));


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
});})(c__10686__auto___17549))
;
return ((function (switch__10621__auto__,c__10686__auto___17549){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_17541 = [null,null,null,null,null,null,null,null];
(statearr_17541[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_17541[(1)] = (1));

return statearr_17541;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_17521){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17542){if((e17542 instanceof Object)){
var ex__10625__auto__ = e17542;
var statearr_17543_17564 = state_17521;
(statearr_17543_17564[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17565 = state_17521;
state_17521 = G__17565;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_17521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_17521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17549))
})();
var state__10688__auto__ = (function (){var statearr_17544 = f__10687__auto__.call(null);
(statearr_17544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17549);

return statearr_17544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17549))
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
return (function (p__17749){
var vec__17750 = p__17749;
var v = cljs.core.nth.call(null,vec__17750,(0),null);
var p = cljs.core.nth.call(null,vec__17750,(1),null);
var job = vec__17750;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10686__auto___17932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results){
return (function (state_17755){
var state_val_17756 = (state_17755[(1)]);
if((state_val_17756 === (1))){
var state_17755__$1 = state_17755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17755__$1,(2),res,v);
} else {
if((state_val_17756 === (2))){
var inst_17752 = (state_17755[(2)]);
var inst_17753 = cljs.core.async.close_BANG_.call(null,res);
var state_17755__$1 = (function (){var statearr_17757 = state_17755;
(statearr_17757[(7)] = inst_17752);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17755__$1,inst_17753);
} else {
return null;
}
}
});})(c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results))
;
return ((function (switch__10621__auto__,c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17761 = [null,null,null,null,null,null,null,null];
(statearr_17761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17761[(1)] = (1));

return statearr_17761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17755){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17762){if((e17762 instanceof Object)){
var ex__10625__auto__ = e17762;
var statearr_17763_17933 = state_17755;
(statearr_17763_17933[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17934 = state_17755;
state_17755 = G__17934;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results))
})();
var state__10688__auto__ = (function (){var statearr_17764 = f__10687__auto__.call(null);
(statearr_17764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17932);

return statearr_17764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17932,res,vec__17750,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17765){
var vec__17766 = p__17765;
var v = cljs.core.nth.call(null,vec__17766,(0),null);
var p = cljs.core.nth.call(null,vec__17766,(1),null);
var job = vec__17766;
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
var n__5997__auto___17935 = n;
var __17936 = (0);
while(true){
if((__17936 < n__5997__auto___17935)){
var G__17767_17937 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17767_17937) {
case "compute":
var c__10686__auto___17939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17936,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (__17936,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function (state_17780){
var state_val_17781 = (state_17780[(1)]);
if((state_val_17781 === (1))){
var state_17780__$1 = state_17780;
var statearr_17782_17940 = state_17780__$1;
(statearr_17782_17940[(2)] = null);

(statearr_17782_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (2))){
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17780__$1,(4),jobs);
} else {
if((state_val_17781 === (3))){
var inst_17778 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17780__$1,inst_17778);
} else {
if((state_val_17781 === (4))){
var inst_17770 = (state_17780[(2)]);
var inst_17771 = process.call(null,inst_17770);
var state_17780__$1 = state_17780;
if(cljs.core.truth_(inst_17771)){
var statearr_17783_17941 = state_17780__$1;
(statearr_17783_17941[(1)] = (5));

} else {
var statearr_17784_17942 = state_17780__$1;
(statearr_17784_17942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (5))){
var state_17780__$1 = state_17780;
var statearr_17785_17943 = state_17780__$1;
(statearr_17785_17943[(2)] = null);

(statearr_17785_17943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (6))){
var state_17780__$1 = state_17780;
var statearr_17786_17944 = state_17780__$1;
(statearr_17786_17944[(2)] = null);

(statearr_17786_17944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (7))){
var inst_17776 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17787_17945 = state_17780__$1;
(statearr_17787_17945[(2)] = inst_17776);

(statearr_17787_17945[(1)] = (3));


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
});})(__17936,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
;
return ((function (__17936,switch__10621__auto__,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17791 = [null,null,null,null,null,null,null];
(statearr_17791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17791[(1)] = (1));

return statearr_17791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17780){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17792){if((e17792 instanceof Object)){
var ex__10625__auto__ = e17792;
var statearr_17793_17946 = state_17780;
(statearr_17793_17946[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17947 = state_17780;
state_17780 = G__17947;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(__17936,switch__10621__auto__,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17794 = f__10687__auto__.call(null);
(statearr_17794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17939);

return statearr_17794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(__17936,c__10686__auto___17939,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
);


break;
case "async":
var c__10686__auto___17948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17936,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (__17936,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function (state_17807){
var state_val_17808 = (state_17807[(1)]);
if((state_val_17808 === (1))){
var state_17807__$1 = state_17807;
var statearr_17809_17949 = state_17807__$1;
(statearr_17809_17949[(2)] = null);

(statearr_17809_17949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (2))){
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(4),jobs);
} else {
if((state_val_17808 === (3))){
var inst_17805 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else {
if((state_val_17808 === (4))){
var inst_17797 = (state_17807[(2)]);
var inst_17798 = async.call(null,inst_17797);
var state_17807__$1 = state_17807;
if(cljs.core.truth_(inst_17798)){
var statearr_17810_17950 = state_17807__$1;
(statearr_17810_17950[(1)] = (5));

} else {
var statearr_17811_17951 = state_17807__$1;
(statearr_17811_17951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (5))){
var state_17807__$1 = state_17807;
var statearr_17812_17952 = state_17807__$1;
(statearr_17812_17952[(2)] = null);

(statearr_17812_17952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (6))){
var state_17807__$1 = state_17807;
var statearr_17813_17953 = state_17807__$1;
(statearr_17813_17953[(2)] = null);

(statearr_17813_17953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (7))){
var inst_17803 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
var statearr_17814_17954 = state_17807__$1;
(statearr_17814_17954[(2)] = inst_17803);

(statearr_17814_17954[(1)] = (3));


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
});})(__17936,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
;
return ((function (__17936,switch__10621__auto__,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17818 = [null,null,null,null,null,null,null];
(statearr_17818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17818[(1)] = (1));

return statearr_17818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17807){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17819){if((e17819 instanceof Object)){
var ex__10625__auto__ = e17819;
var statearr_17820_17955 = state_17807;
(statearr_17820_17955[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17956 = state_17807;
state_17807 = G__17956;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(__17936,switch__10621__auto__,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17821 = f__10687__auto__.call(null);
(statearr_17821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17948);

return statearr_17821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(__17936,c__10686__auto___17948,G__17767_17937,n__5997__auto___17935,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17957 = (__17936 + (1));
__17936 = G__17957;
continue;
} else {
}
break;
}

var c__10686__auto___17958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___17958,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___17958,jobs,results,process,async){
return (function (state_17843){
var state_val_17844 = (state_17843[(1)]);
if((state_val_17844 === (1))){
var state_17843__$1 = state_17843;
var statearr_17845_17959 = state_17843__$1;
(statearr_17845_17959[(2)] = null);

(statearr_17845_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17844 === (2))){
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17843__$1,(4),from);
} else {
if((state_val_17844 === (3))){
var inst_17841 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17843__$1,inst_17841);
} else {
if((state_val_17844 === (4))){
var inst_17824 = (state_17843[(7)]);
var inst_17824__$1 = (state_17843[(2)]);
var inst_17825 = (inst_17824__$1 == null);
var state_17843__$1 = (function (){var statearr_17846 = state_17843;
(statearr_17846[(7)] = inst_17824__$1);

return statearr_17846;
})();
if(cljs.core.truth_(inst_17825)){
var statearr_17847_17960 = state_17843__$1;
(statearr_17847_17960[(1)] = (5));

} else {
var statearr_17848_17961 = state_17843__$1;
(statearr_17848_17961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17844 === (5))){
var inst_17827 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17843__$1 = state_17843;
var statearr_17849_17962 = state_17843__$1;
(statearr_17849_17962[(2)] = inst_17827);

(statearr_17849_17962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17844 === (6))){
var inst_17829 = (state_17843[(8)]);
var inst_17824 = (state_17843[(7)]);
var inst_17829__$1 = cljs.core.async.chan.call(null,(1));
var inst_17830 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17831 = [inst_17824,inst_17829__$1];
var inst_17832 = (new cljs.core.PersistentVector(null,2,(5),inst_17830,inst_17831,null));
var state_17843__$1 = (function (){var statearr_17850 = state_17843;
(statearr_17850[(8)] = inst_17829__$1);

return statearr_17850;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17843__$1,(8),jobs,inst_17832);
} else {
if((state_val_17844 === (7))){
var inst_17839 = (state_17843[(2)]);
var state_17843__$1 = state_17843;
var statearr_17851_17963 = state_17843__$1;
(statearr_17851_17963[(2)] = inst_17839);

(statearr_17851_17963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17844 === (8))){
var inst_17829 = (state_17843[(8)]);
var inst_17834 = (state_17843[(2)]);
var state_17843__$1 = (function (){var statearr_17852 = state_17843;
(statearr_17852[(9)] = inst_17834);

return statearr_17852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17843__$1,(9),results,inst_17829);
} else {
if((state_val_17844 === (9))){
var inst_17836 = (state_17843[(2)]);
var state_17843__$1 = (function (){var statearr_17853 = state_17843;
(statearr_17853[(10)] = inst_17836);

return statearr_17853;
})();
var statearr_17854_17964 = state_17843__$1;
(statearr_17854_17964[(2)] = null);

(statearr_17854_17964[(1)] = (2));


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
});})(c__10686__auto___17958,jobs,results,process,async))
;
return ((function (switch__10621__auto__,c__10686__auto___17958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0 = (function (){
var statearr_17858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17858[(1)] = (1));

return statearr_17858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17843){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17859){if((e17859 instanceof Object)){
var ex__10625__auto__ = e17859;
var statearr_17860_17965 = state_17843;
(statearr_17860_17965[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17966 = state_17843;
state_17843 = G__17966;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___17958,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17861 = f__10687__auto__.call(null);
(statearr_17861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___17958);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___17958,jobs,results,process,async))
);


var c__10686__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto__,jobs,results,process,async){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto__,jobs,results,process,async){
return (function (state_17899){
var state_val_17900 = (state_17899[(1)]);
if((state_val_17900 === (7))){
var inst_17895 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17901_17967 = state_17899__$1;
(statearr_17901_17967[(2)] = inst_17895);

(statearr_17901_17967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (20))){
var state_17899__$1 = state_17899;
var statearr_17902_17968 = state_17899__$1;
(statearr_17902_17968[(2)] = null);

(statearr_17902_17968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (1))){
var state_17899__$1 = state_17899;
var statearr_17903_17969 = state_17899__$1;
(statearr_17903_17969[(2)] = null);

(statearr_17903_17969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (4))){
var inst_17864 = (state_17899[(7)]);
var inst_17864__$1 = (state_17899[(2)]);
var inst_17865 = (inst_17864__$1 == null);
var state_17899__$1 = (function (){var statearr_17904 = state_17899;
(statearr_17904[(7)] = inst_17864__$1);

return statearr_17904;
})();
if(cljs.core.truth_(inst_17865)){
var statearr_17905_17970 = state_17899__$1;
(statearr_17905_17970[(1)] = (5));

} else {
var statearr_17906_17971 = state_17899__$1;
(statearr_17906_17971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (15))){
var inst_17877 = (state_17899[(8)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17899__$1,(18),to,inst_17877);
} else {
if((state_val_17900 === (21))){
var inst_17890 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17907_17972 = state_17899__$1;
(statearr_17907_17972[(2)] = inst_17890);

(statearr_17907_17972[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (13))){
var inst_17892 = (state_17899[(2)]);
var state_17899__$1 = (function (){var statearr_17908 = state_17899;
(statearr_17908[(9)] = inst_17892);

return statearr_17908;
})();
var statearr_17909_17973 = state_17899__$1;
(statearr_17909_17973[(2)] = null);

(statearr_17909_17973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (6))){
var inst_17864 = (state_17899[(7)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17899__$1,(11),inst_17864);
} else {
if((state_val_17900 === (17))){
var inst_17885 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
if(cljs.core.truth_(inst_17885)){
var statearr_17910_17974 = state_17899__$1;
(statearr_17910_17974[(1)] = (19));

} else {
var statearr_17911_17975 = state_17899__$1;
(statearr_17911_17975[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (3))){
var inst_17897 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17899__$1,inst_17897);
} else {
if((state_val_17900 === (12))){
var inst_17874 = (state_17899[(10)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17899__$1,(14),inst_17874);
} else {
if((state_val_17900 === (2))){
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17899__$1,(4),results);
} else {
if((state_val_17900 === (19))){
var state_17899__$1 = state_17899;
var statearr_17912_17976 = state_17899__$1;
(statearr_17912_17976[(2)] = null);

(statearr_17912_17976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (11))){
var inst_17874 = (state_17899[(2)]);
var state_17899__$1 = (function (){var statearr_17913 = state_17899;
(statearr_17913[(10)] = inst_17874);

return statearr_17913;
})();
var statearr_17914_17977 = state_17899__$1;
(statearr_17914_17977[(2)] = null);

(statearr_17914_17977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (9))){
var state_17899__$1 = state_17899;
var statearr_17915_17978 = state_17899__$1;
(statearr_17915_17978[(2)] = null);

(statearr_17915_17978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (5))){
var state_17899__$1 = state_17899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17916_17979 = state_17899__$1;
(statearr_17916_17979[(1)] = (8));

} else {
var statearr_17917_17980 = state_17899__$1;
(statearr_17917_17980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (14))){
var inst_17879 = (state_17899[(11)]);
var inst_17877 = (state_17899[(8)]);
var inst_17877__$1 = (state_17899[(2)]);
var inst_17878 = (inst_17877__$1 == null);
var inst_17879__$1 = cljs.core.not.call(null,inst_17878);
var state_17899__$1 = (function (){var statearr_17918 = state_17899;
(statearr_17918[(11)] = inst_17879__$1);

(statearr_17918[(8)] = inst_17877__$1);

return statearr_17918;
})();
if(inst_17879__$1){
var statearr_17919_17981 = state_17899__$1;
(statearr_17919_17981[(1)] = (15));

} else {
var statearr_17920_17982 = state_17899__$1;
(statearr_17920_17982[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (16))){
var inst_17879 = (state_17899[(11)]);
var state_17899__$1 = state_17899;
var statearr_17921_17983 = state_17899__$1;
(statearr_17921_17983[(2)] = inst_17879);

(statearr_17921_17983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (10))){
var inst_17871 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17922_17984 = state_17899__$1;
(statearr_17922_17984[(2)] = inst_17871);

(statearr_17922_17984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (18))){
var inst_17882 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17923_17985 = state_17899__$1;
(statearr_17923_17985[(2)] = inst_17882);

(statearr_17923_17985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (8))){
var inst_17868 = cljs.core.async.close_BANG_.call(null,to);
var state_17899__$1 = state_17899;
var statearr_17924_17986 = state_17899__$1;
(statearr_17924_17986[(2)] = inst_17868);

(statearr_17924_17986[(1)] = (10));


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
var statearr_17928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__);

(statearr_17928[(1)] = (1));

return statearr_17928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1 = (function (state_17899){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_17899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e17929){if((e17929 instanceof Object)){
var ex__10625__auto__ = e17929;
var statearr_17930_17987 = state_17899;
(statearr_17930_17987[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17988 = state_17899;
state_17899 = G__17988;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__ = function(state_17899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1.call(this,state_17899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__,jobs,results,process,async))
})();
var state__10688__auto__ = (function (){var statearr_17931 = f__10687__auto__.call(null);
(statearr_17931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_17931;
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17989.length)].join('')));

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
var args17996 = [];
var len__6152__auto___17999 = arguments.length;
var i__6153__auto___18000 = (0);
while(true){
if((i__6153__auto___18000 < len__6152__auto___17999)){
args17996.push((arguments[i__6153__auto___18000]));

var G__18001 = (i__6153__auto___18000 + (1));
i__6153__auto___18000 = G__18001;
continue;
} else {
}
break;
}

var G__17998 = args17996.length;
switch (G__17998) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17996.length)].join('')));

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
var args18003 = [];
var len__6152__auto___18056 = arguments.length;
var i__6153__auto___18057 = (0);
while(true){
if((i__6153__auto___18057 < len__6152__auto___18056)){
args18003.push((arguments[i__6153__auto___18057]));

var G__18058 = (i__6153__auto___18057 + (1));
i__6153__auto___18057 = G__18058;
continue;
} else {
}
break;
}

var G__18005 = args18003.length;
switch (G__18005) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18003.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10686__auto___18060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___18060,tc,fc){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___18060,tc,fc){
return (function (state_18031){
var state_val_18032 = (state_18031[(1)]);
if((state_val_18032 === (7))){
var inst_18027 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18033_18061 = state_18031__$1;
(statearr_18033_18061[(2)] = inst_18027);

(statearr_18033_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (1))){
var state_18031__$1 = state_18031;
var statearr_18034_18062 = state_18031__$1;
(statearr_18034_18062[(2)] = null);

(statearr_18034_18062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (4))){
var inst_18008 = (state_18031[(7)]);
var inst_18008__$1 = (state_18031[(2)]);
var inst_18009 = (inst_18008__$1 == null);
var state_18031__$1 = (function (){var statearr_18035 = state_18031;
(statearr_18035[(7)] = inst_18008__$1);

return statearr_18035;
})();
if(cljs.core.truth_(inst_18009)){
var statearr_18036_18063 = state_18031__$1;
(statearr_18036_18063[(1)] = (5));

} else {
var statearr_18037_18064 = state_18031__$1;
(statearr_18037_18064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (13))){
var state_18031__$1 = state_18031;
var statearr_18038_18065 = state_18031__$1;
(statearr_18038_18065[(2)] = null);

(statearr_18038_18065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (6))){
var inst_18008 = (state_18031[(7)]);
var inst_18014 = p.call(null,inst_18008);
var state_18031__$1 = state_18031;
if(cljs.core.truth_(inst_18014)){
var statearr_18039_18066 = state_18031__$1;
(statearr_18039_18066[(1)] = (9));

} else {
var statearr_18040_18067 = state_18031__$1;
(statearr_18040_18067[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (3))){
var inst_18029 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18031__$1,inst_18029);
} else {
if((state_val_18032 === (12))){
var state_18031__$1 = state_18031;
var statearr_18041_18068 = state_18031__$1;
(statearr_18041_18068[(2)] = null);

(statearr_18041_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (2))){
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18031__$1,(4),ch);
} else {
if((state_val_18032 === (11))){
var inst_18008 = (state_18031[(7)]);
var inst_18018 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18031__$1,(8),inst_18018,inst_18008);
} else {
if((state_val_18032 === (9))){
var state_18031__$1 = state_18031;
var statearr_18042_18069 = state_18031__$1;
(statearr_18042_18069[(2)] = tc);

(statearr_18042_18069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (5))){
var inst_18011 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18012 = cljs.core.async.close_BANG_.call(null,fc);
var state_18031__$1 = (function (){var statearr_18043 = state_18031;
(statearr_18043[(8)] = inst_18011);

return statearr_18043;
})();
var statearr_18044_18070 = state_18031__$1;
(statearr_18044_18070[(2)] = inst_18012);

(statearr_18044_18070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (14))){
var inst_18025 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
var statearr_18045_18071 = state_18031__$1;
(statearr_18045_18071[(2)] = inst_18025);

(statearr_18045_18071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (10))){
var state_18031__$1 = state_18031;
var statearr_18046_18072 = state_18031__$1;
(statearr_18046_18072[(2)] = fc);

(statearr_18046_18072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18032 === (8))){
var inst_18020 = (state_18031[(2)]);
var state_18031__$1 = state_18031;
if(cljs.core.truth_(inst_18020)){
var statearr_18047_18073 = state_18031__$1;
(statearr_18047_18073[(1)] = (12));

} else {
var statearr_18048_18074 = state_18031__$1;
(statearr_18048_18074[(1)] = (13));

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
});})(c__10686__auto___18060,tc,fc))
;
return ((function (switch__10621__auto__,c__10686__auto___18060,tc,fc){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_18052 = [null,null,null,null,null,null,null,null,null];
(statearr_18052[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_18052[(1)] = (1));

return statearr_18052;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_18031){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18053){if((e18053 instanceof Object)){
var ex__10625__auto__ = e18053;
var statearr_18054_18075 = state_18031;
(statearr_18054_18075[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_18031;
state_18031 = G__18076;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_18031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_18031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___18060,tc,fc))
})();
var state__10688__auto__ = (function (){var statearr_18055 = f__10687__auto__.call(null);
(statearr_18055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___18060);

return statearr_18055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___18060,tc,fc))
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
return (function (state_18123){
var state_val_18124 = (state_18123[(1)]);
if((state_val_18124 === (1))){
var inst_18109 = init;
var state_18123__$1 = (function (){var statearr_18125 = state_18123;
(statearr_18125[(7)] = inst_18109);

return statearr_18125;
})();
var statearr_18126_18141 = state_18123__$1;
(statearr_18126_18141[(2)] = null);

(statearr_18126_18141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (2))){
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18123__$1,(4),ch);
} else {
if((state_val_18124 === (3))){
var inst_18121 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18123__$1,inst_18121);
} else {
if((state_val_18124 === (4))){
var inst_18112 = (state_18123[(8)]);
var inst_18112__$1 = (state_18123[(2)]);
var inst_18113 = (inst_18112__$1 == null);
var state_18123__$1 = (function (){var statearr_18127 = state_18123;
(statearr_18127[(8)] = inst_18112__$1);

return statearr_18127;
})();
if(cljs.core.truth_(inst_18113)){
var statearr_18128_18142 = state_18123__$1;
(statearr_18128_18142[(1)] = (5));

} else {
var statearr_18129_18143 = state_18123__$1;
(statearr_18129_18143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (5))){
var inst_18109 = (state_18123[(7)]);
var state_18123__$1 = state_18123;
var statearr_18130_18144 = state_18123__$1;
(statearr_18130_18144[(2)] = inst_18109);

(statearr_18130_18144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (6))){
var inst_18112 = (state_18123[(8)]);
var inst_18109 = (state_18123[(7)]);
var inst_18116 = f.call(null,inst_18109,inst_18112);
var inst_18109__$1 = inst_18116;
var state_18123__$1 = (function (){var statearr_18131 = state_18123;
(statearr_18131[(7)] = inst_18109__$1);

return statearr_18131;
})();
var statearr_18132_18145 = state_18123__$1;
(statearr_18132_18145[(2)] = null);

(statearr_18132_18145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18124 === (7))){
var inst_18119 = (state_18123[(2)]);
var state_18123__$1 = state_18123;
var statearr_18133_18146 = state_18123__$1;
(statearr_18133_18146[(2)] = inst_18119);

(statearr_18133_18146[(1)] = (3));


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
var statearr_18137 = [null,null,null,null,null,null,null,null,null];
(statearr_18137[(0)] = cljs$core$async$reduce_$_state_machine__10622__auto__);

(statearr_18137[(1)] = (1));

return statearr_18137;
});
var cljs$core$async$reduce_$_state_machine__10622__auto____1 = (function (state_18123){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18138){if((e18138 instanceof Object)){
var ex__10625__auto__ = e18138;
var statearr_18139_18147 = state_18123;
(statearr_18139_18147[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18148 = state_18123;
state_18123 = G__18148;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10622__auto__ = function(state_18123){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10622__auto____1.call(this,state_18123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10622__auto____0;
cljs$core$async$reduce_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10622__auto____1;
return cljs$core$async$reduce_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_18140 = f__10687__auto__.call(null);
(statearr_18140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_18140;
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
var args18149 = [];
var len__6152__auto___18201 = arguments.length;
var i__6153__auto___18202 = (0);
while(true){
if((i__6153__auto___18202 < len__6152__auto___18201)){
args18149.push((arguments[i__6153__auto___18202]));

var G__18203 = (i__6153__auto___18202 + (1));
i__6153__auto___18202 = G__18203;
continue;
} else {
}
break;
}

var G__18151 = args18149.length;
switch (G__18151) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18149.length)].join('')));

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
return (function (state_18176){
var state_val_18177 = (state_18176[(1)]);
if((state_val_18177 === (7))){
var inst_18158 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
var statearr_18178_18205 = state_18176__$1;
(statearr_18178_18205[(2)] = inst_18158);

(statearr_18178_18205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (1))){
var inst_18152 = cljs.core.seq.call(null,coll);
var inst_18153 = inst_18152;
var state_18176__$1 = (function (){var statearr_18179 = state_18176;
(statearr_18179[(7)] = inst_18153);

return statearr_18179;
})();
var statearr_18180_18206 = state_18176__$1;
(statearr_18180_18206[(2)] = null);

(statearr_18180_18206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (4))){
var inst_18153 = (state_18176[(7)]);
var inst_18156 = cljs.core.first.call(null,inst_18153);
var state_18176__$1 = state_18176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18176__$1,(7),ch,inst_18156);
} else {
if((state_val_18177 === (13))){
var inst_18170 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
var statearr_18181_18207 = state_18176__$1;
(statearr_18181_18207[(2)] = inst_18170);

(statearr_18181_18207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (6))){
var inst_18161 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
if(cljs.core.truth_(inst_18161)){
var statearr_18182_18208 = state_18176__$1;
(statearr_18182_18208[(1)] = (8));

} else {
var statearr_18183_18209 = state_18176__$1;
(statearr_18183_18209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (3))){
var inst_18174 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18176__$1,inst_18174);
} else {
if((state_val_18177 === (12))){
var state_18176__$1 = state_18176;
var statearr_18184_18210 = state_18176__$1;
(statearr_18184_18210[(2)] = null);

(statearr_18184_18210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (2))){
var inst_18153 = (state_18176[(7)]);
var state_18176__$1 = state_18176;
if(cljs.core.truth_(inst_18153)){
var statearr_18185_18211 = state_18176__$1;
(statearr_18185_18211[(1)] = (4));

} else {
var statearr_18186_18212 = state_18176__$1;
(statearr_18186_18212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (11))){
var inst_18167 = cljs.core.async.close_BANG_.call(null,ch);
var state_18176__$1 = state_18176;
var statearr_18187_18213 = state_18176__$1;
(statearr_18187_18213[(2)] = inst_18167);

(statearr_18187_18213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (9))){
var state_18176__$1 = state_18176;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18188_18214 = state_18176__$1;
(statearr_18188_18214[(1)] = (11));

} else {
var statearr_18189_18215 = state_18176__$1;
(statearr_18189_18215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (5))){
var inst_18153 = (state_18176[(7)]);
var state_18176__$1 = state_18176;
var statearr_18190_18216 = state_18176__$1;
(statearr_18190_18216[(2)] = inst_18153);

(statearr_18190_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (10))){
var inst_18172 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
var statearr_18191_18217 = state_18176__$1;
(statearr_18191_18217[(2)] = inst_18172);

(statearr_18191_18217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18177 === (8))){
var inst_18153 = (state_18176[(7)]);
var inst_18163 = cljs.core.next.call(null,inst_18153);
var inst_18153__$1 = inst_18163;
var state_18176__$1 = (function (){var statearr_18192 = state_18176;
(statearr_18192[(7)] = inst_18153__$1);

return statearr_18192;
})();
var statearr_18193_18218 = state_18176__$1;
(statearr_18193_18218[(2)] = null);

(statearr_18193_18218[(1)] = (2));


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
var statearr_18197 = [null,null,null,null,null,null,null,null];
(statearr_18197[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_18197[(1)] = (1));

return statearr_18197;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_18176){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18198){if((e18198 instanceof Object)){
var ex__10625__auto__ = e18198;
var statearr_18199_18219 = state_18176;
(statearr_18199_18219[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18220 = state_18176;
state_18176 = G__18220;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_18176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_18176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_18200 = f__10687__auto__.call(null);
(statearr_18200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_18200;
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
if(typeof cljs.core.async.t_cljs$core$async18442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18442 = (function (mult,ch,cs,meta18443){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18443 = meta18443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18444,meta18443__$1){
var self__ = this;
var _18444__$1 = this;
return (new cljs.core.async.t_cljs$core$async18442(self__.mult,self__.ch,self__.cs,meta18443__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18444){
var self__ = this;
var _18444__$1 = this;
return self__.meta18443;
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18443","meta18443",-1376700987,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18442";

cljs.core.async.t_cljs$core$async18442.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18442");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18442 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18442(mult__$1,ch__$1,cs__$1,meta18443){
return (new cljs.core.async.t_cljs$core$async18442(mult__$1,ch__$1,cs__$1,meta18443));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18442(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10686__auto___18663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___18663,cs,m,dchan,dctr,done){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___18663,cs,m,dchan,dctr,done){
return (function (state_18575){
var state_val_18576 = (state_18575[(1)]);
if((state_val_18576 === (7))){
var inst_18571 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18577_18664 = state_18575__$1;
(statearr_18577_18664[(2)] = inst_18571);

(statearr_18577_18664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (20))){
var inst_18476 = (state_18575[(7)]);
var inst_18486 = cljs.core.first.call(null,inst_18476);
var inst_18487 = cljs.core.nth.call(null,inst_18486,(0),null);
var inst_18488 = cljs.core.nth.call(null,inst_18486,(1),null);
var state_18575__$1 = (function (){var statearr_18578 = state_18575;
(statearr_18578[(8)] = inst_18487);

return statearr_18578;
})();
if(cljs.core.truth_(inst_18488)){
var statearr_18579_18665 = state_18575__$1;
(statearr_18579_18665[(1)] = (22));

} else {
var statearr_18580_18666 = state_18575__$1;
(statearr_18580_18666[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (27))){
var inst_18447 = (state_18575[(9)]);
var inst_18516 = (state_18575[(10)]);
var inst_18523 = (state_18575[(11)]);
var inst_18518 = (state_18575[(12)]);
var inst_18523__$1 = cljs.core._nth.call(null,inst_18516,inst_18518);
var inst_18524 = cljs.core.async.put_BANG_.call(null,inst_18523__$1,inst_18447,done);
var state_18575__$1 = (function (){var statearr_18581 = state_18575;
(statearr_18581[(11)] = inst_18523__$1);

return statearr_18581;
})();
if(cljs.core.truth_(inst_18524)){
var statearr_18582_18667 = state_18575__$1;
(statearr_18582_18667[(1)] = (30));

} else {
var statearr_18583_18668 = state_18575__$1;
(statearr_18583_18668[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (1))){
var state_18575__$1 = state_18575;
var statearr_18584_18669 = state_18575__$1;
(statearr_18584_18669[(2)] = null);

(statearr_18584_18669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (24))){
var inst_18476 = (state_18575[(7)]);
var inst_18493 = (state_18575[(2)]);
var inst_18494 = cljs.core.next.call(null,inst_18476);
var inst_18456 = inst_18494;
var inst_18457 = null;
var inst_18458 = (0);
var inst_18459 = (0);
var state_18575__$1 = (function (){var statearr_18585 = state_18575;
(statearr_18585[(13)] = inst_18493);

(statearr_18585[(14)] = inst_18456);

(statearr_18585[(15)] = inst_18458);

(statearr_18585[(16)] = inst_18457);

(statearr_18585[(17)] = inst_18459);

return statearr_18585;
})();
var statearr_18586_18670 = state_18575__$1;
(statearr_18586_18670[(2)] = null);

(statearr_18586_18670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (39))){
var state_18575__$1 = state_18575;
var statearr_18590_18671 = state_18575__$1;
(statearr_18590_18671[(2)] = null);

(statearr_18590_18671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (4))){
var inst_18447 = (state_18575[(9)]);
var inst_18447__$1 = (state_18575[(2)]);
var inst_18448 = (inst_18447__$1 == null);
var state_18575__$1 = (function (){var statearr_18591 = state_18575;
(statearr_18591[(9)] = inst_18447__$1);

return statearr_18591;
})();
if(cljs.core.truth_(inst_18448)){
var statearr_18592_18672 = state_18575__$1;
(statearr_18592_18672[(1)] = (5));

} else {
var statearr_18593_18673 = state_18575__$1;
(statearr_18593_18673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (15))){
var inst_18456 = (state_18575[(14)]);
var inst_18458 = (state_18575[(15)]);
var inst_18457 = (state_18575[(16)]);
var inst_18459 = (state_18575[(17)]);
var inst_18472 = (state_18575[(2)]);
var inst_18473 = (inst_18459 + (1));
var tmp18587 = inst_18456;
var tmp18588 = inst_18458;
var tmp18589 = inst_18457;
var inst_18456__$1 = tmp18587;
var inst_18457__$1 = tmp18589;
var inst_18458__$1 = tmp18588;
var inst_18459__$1 = inst_18473;
var state_18575__$1 = (function (){var statearr_18594 = state_18575;
(statearr_18594[(14)] = inst_18456__$1);

(statearr_18594[(18)] = inst_18472);

(statearr_18594[(15)] = inst_18458__$1);

(statearr_18594[(16)] = inst_18457__$1);

(statearr_18594[(17)] = inst_18459__$1);

return statearr_18594;
})();
var statearr_18595_18674 = state_18575__$1;
(statearr_18595_18674[(2)] = null);

(statearr_18595_18674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (21))){
var inst_18497 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18599_18675 = state_18575__$1;
(statearr_18599_18675[(2)] = inst_18497);

(statearr_18599_18675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (31))){
var inst_18523 = (state_18575[(11)]);
var inst_18527 = done.call(null,null);
var inst_18528 = cljs.core.async.untap_STAR_.call(null,m,inst_18523);
var state_18575__$1 = (function (){var statearr_18600 = state_18575;
(statearr_18600[(19)] = inst_18527);

return statearr_18600;
})();
var statearr_18601_18676 = state_18575__$1;
(statearr_18601_18676[(2)] = inst_18528);

(statearr_18601_18676[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (32))){
var inst_18516 = (state_18575[(10)]);
var inst_18517 = (state_18575[(20)]);
var inst_18515 = (state_18575[(21)]);
var inst_18518 = (state_18575[(12)]);
var inst_18530 = (state_18575[(2)]);
var inst_18531 = (inst_18518 + (1));
var tmp18596 = inst_18516;
var tmp18597 = inst_18517;
var tmp18598 = inst_18515;
var inst_18515__$1 = tmp18598;
var inst_18516__$1 = tmp18596;
var inst_18517__$1 = tmp18597;
var inst_18518__$1 = inst_18531;
var state_18575__$1 = (function (){var statearr_18602 = state_18575;
(statearr_18602[(22)] = inst_18530);

(statearr_18602[(10)] = inst_18516__$1);

(statearr_18602[(20)] = inst_18517__$1);

(statearr_18602[(21)] = inst_18515__$1);

(statearr_18602[(12)] = inst_18518__$1);

return statearr_18602;
})();
var statearr_18603_18677 = state_18575__$1;
(statearr_18603_18677[(2)] = null);

(statearr_18603_18677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (40))){
var inst_18543 = (state_18575[(23)]);
var inst_18547 = done.call(null,null);
var inst_18548 = cljs.core.async.untap_STAR_.call(null,m,inst_18543);
var state_18575__$1 = (function (){var statearr_18604 = state_18575;
(statearr_18604[(24)] = inst_18547);

return statearr_18604;
})();
var statearr_18605_18678 = state_18575__$1;
(statearr_18605_18678[(2)] = inst_18548);

(statearr_18605_18678[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (33))){
var inst_18534 = (state_18575[(25)]);
var inst_18536 = cljs.core.chunked_seq_QMARK_.call(null,inst_18534);
var state_18575__$1 = state_18575;
if(inst_18536){
var statearr_18606_18679 = state_18575__$1;
(statearr_18606_18679[(1)] = (36));

} else {
var statearr_18607_18680 = state_18575__$1;
(statearr_18607_18680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (13))){
var inst_18466 = (state_18575[(26)]);
var inst_18469 = cljs.core.async.close_BANG_.call(null,inst_18466);
var state_18575__$1 = state_18575;
var statearr_18608_18681 = state_18575__$1;
(statearr_18608_18681[(2)] = inst_18469);

(statearr_18608_18681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (22))){
var inst_18487 = (state_18575[(8)]);
var inst_18490 = cljs.core.async.close_BANG_.call(null,inst_18487);
var state_18575__$1 = state_18575;
var statearr_18609_18682 = state_18575__$1;
(statearr_18609_18682[(2)] = inst_18490);

(statearr_18609_18682[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (36))){
var inst_18534 = (state_18575[(25)]);
var inst_18538 = cljs.core.chunk_first.call(null,inst_18534);
var inst_18539 = cljs.core.chunk_rest.call(null,inst_18534);
var inst_18540 = cljs.core.count.call(null,inst_18538);
var inst_18515 = inst_18539;
var inst_18516 = inst_18538;
var inst_18517 = inst_18540;
var inst_18518 = (0);
var state_18575__$1 = (function (){var statearr_18610 = state_18575;
(statearr_18610[(10)] = inst_18516);

(statearr_18610[(20)] = inst_18517);

(statearr_18610[(21)] = inst_18515);

(statearr_18610[(12)] = inst_18518);

return statearr_18610;
})();
var statearr_18611_18683 = state_18575__$1;
(statearr_18611_18683[(2)] = null);

(statearr_18611_18683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (41))){
var inst_18534 = (state_18575[(25)]);
var inst_18550 = (state_18575[(2)]);
var inst_18551 = cljs.core.next.call(null,inst_18534);
var inst_18515 = inst_18551;
var inst_18516 = null;
var inst_18517 = (0);
var inst_18518 = (0);
var state_18575__$1 = (function (){var statearr_18612 = state_18575;
(statearr_18612[(27)] = inst_18550);

(statearr_18612[(10)] = inst_18516);

(statearr_18612[(20)] = inst_18517);

(statearr_18612[(21)] = inst_18515);

(statearr_18612[(12)] = inst_18518);

return statearr_18612;
})();
var statearr_18613_18684 = state_18575__$1;
(statearr_18613_18684[(2)] = null);

(statearr_18613_18684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (43))){
var state_18575__$1 = state_18575;
var statearr_18614_18685 = state_18575__$1;
(statearr_18614_18685[(2)] = null);

(statearr_18614_18685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (29))){
var inst_18559 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18615_18686 = state_18575__$1;
(statearr_18615_18686[(2)] = inst_18559);

(statearr_18615_18686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (44))){
var inst_18568 = (state_18575[(2)]);
var state_18575__$1 = (function (){var statearr_18616 = state_18575;
(statearr_18616[(28)] = inst_18568);

return statearr_18616;
})();
var statearr_18617_18687 = state_18575__$1;
(statearr_18617_18687[(2)] = null);

(statearr_18617_18687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (6))){
var inst_18507 = (state_18575[(29)]);
var inst_18506 = cljs.core.deref.call(null,cs);
var inst_18507__$1 = cljs.core.keys.call(null,inst_18506);
var inst_18508 = cljs.core.count.call(null,inst_18507__$1);
var inst_18509 = cljs.core.reset_BANG_.call(null,dctr,inst_18508);
var inst_18514 = cljs.core.seq.call(null,inst_18507__$1);
var inst_18515 = inst_18514;
var inst_18516 = null;
var inst_18517 = (0);
var inst_18518 = (0);
var state_18575__$1 = (function (){var statearr_18618 = state_18575;
(statearr_18618[(30)] = inst_18509);

(statearr_18618[(10)] = inst_18516);

(statearr_18618[(29)] = inst_18507__$1);

(statearr_18618[(20)] = inst_18517);

(statearr_18618[(21)] = inst_18515);

(statearr_18618[(12)] = inst_18518);

return statearr_18618;
})();
var statearr_18619_18688 = state_18575__$1;
(statearr_18619_18688[(2)] = null);

(statearr_18619_18688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (28))){
var inst_18534 = (state_18575[(25)]);
var inst_18515 = (state_18575[(21)]);
var inst_18534__$1 = cljs.core.seq.call(null,inst_18515);
var state_18575__$1 = (function (){var statearr_18620 = state_18575;
(statearr_18620[(25)] = inst_18534__$1);

return statearr_18620;
})();
if(inst_18534__$1){
var statearr_18621_18689 = state_18575__$1;
(statearr_18621_18689[(1)] = (33));

} else {
var statearr_18622_18690 = state_18575__$1;
(statearr_18622_18690[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (25))){
var inst_18517 = (state_18575[(20)]);
var inst_18518 = (state_18575[(12)]);
var inst_18520 = (inst_18518 < inst_18517);
var inst_18521 = inst_18520;
var state_18575__$1 = state_18575;
if(cljs.core.truth_(inst_18521)){
var statearr_18623_18691 = state_18575__$1;
(statearr_18623_18691[(1)] = (27));

} else {
var statearr_18624_18692 = state_18575__$1;
(statearr_18624_18692[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (34))){
var state_18575__$1 = state_18575;
var statearr_18625_18693 = state_18575__$1;
(statearr_18625_18693[(2)] = null);

(statearr_18625_18693[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (17))){
var state_18575__$1 = state_18575;
var statearr_18626_18694 = state_18575__$1;
(statearr_18626_18694[(2)] = null);

(statearr_18626_18694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (3))){
var inst_18573 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18575__$1,inst_18573);
} else {
if((state_val_18576 === (12))){
var inst_18502 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18627_18695 = state_18575__$1;
(statearr_18627_18695[(2)] = inst_18502);

(statearr_18627_18695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (2))){
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18575__$1,(4),ch);
} else {
if((state_val_18576 === (23))){
var state_18575__$1 = state_18575;
var statearr_18628_18696 = state_18575__$1;
(statearr_18628_18696[(2)] = null);

(statearr_18628_18696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (35))){
var inst_18557 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18629_18697 = state_18575__$1;
(statearr_18629_18697[(2)] = inst_18557);

(statearr_18629_18697[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (19))){
var inst_18476 = (state_18575[(7)]);
var inst_18480 = cljs.core.chunk_first.call(null,inst_18476);
var inst_18481 = cljs.core.chunk_rest.call(null,inst_18476);
var inst_18482 = cljs.core.count.call(null,inst_18480);
var inst_18456 = inst_18481;
var inst_18457 = inst_18480;
var inst_18458 = inst_18482;
var inst_18459 = (0);
var state_18575__$1 = (function (){var statearr_18630 = state_18575;
(statearr_18630[(14)] = inst_18456);

(statearr_18630[(15)] = inst_18458);

(statearr_18630[(16)] = inst_18457);

(statearr_18630[(17)] = inst_18459);

return statearr_18630;
})();
var statearr_18631_18698 = state_18575__$1;
(statearr_18631_18698[(2)] = null);

(statearr_18631_18698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (11))){
var inst_18456 = (state_18575[(14)]);
var inst_18476 = (state_18575[(7)]);
var inst_18476__$1 = cljs.core.seq.call(null,inst_18456);
var state_18575__$1 = (function (){var statearr_18632 = state_18575;
(statearr_18632[(7)] = inst_18476__$1);

return statearr_18632;
})();
if(inst_18476__$1){
var statearr_18633_18699 = state_18575__$1;
(statearr_18633_18699[(1)] = (16));

} else {
var statearr_18634_18700 = state_18575__$1;
(statearr_18634_18700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (9))){
var inst_18504 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18635_18701 = state_18575__$1;
(statearr_18635_18701[(2)] = inst_18504);

(statearr_18635_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (5))){
var inst_18454 = cljs.core.deref.call(null,cs);
var inst_18455 = cljs.core.seq.call(null,inst_18454);
var inst_18456 = inst_18455;
var inst_18457 = null;
var inst_18458 = (0);
var inst_18459 = (0);
var state_18575__$1 = (function (){var statearr_18636 = state_18575;
(statearr_18636[(14)] = inst_18456);

(statearr_18636[(15)] = inst_18458);

(statearr_18636[(16)] = inst_18457);

(statearr_18636[(17)] = inst_18459);

return statearr_18636;
})();
var statearr_18637_18702 = state_18575__$1;
(statearr_18637_18702[(2)] = null);

(statearr_18637_18702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (14))){
var state_18575__$1 = state_18575;
var statearr_18638_18703 = state_18575__$1;
(statearr_18638_18703[(2)] = null);

(statearr_18638_18703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (45))){
var inst_18565 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18639_18704 = state_18575__$1;
(statearr_18639_18704[(2)] = inst_18565);

(statearr_18639_18704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (26))){
var inst_18507 = (state_18575[(29)]);
var inst_18561 = (state_18575[(2)]);
var inst_18562 = cljs.core.seq.call(null,inst_18507);
var state_18575__$1 = (function (){var statearr_18640 = state_18575;
(statearr_18640[(31)] = inst_18561);

return statearr_18640;
})();
if(inst_18562){
var statearr_18641_18705 = state_18575__$1;
(statearr_18641_18705[(1)] = (42));

} else {
var statearr_18642_18706 = state_18575__$1;
(statearr_18642_18706[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (16))){
var inst_18476 = (state_18575[(7)]);
var inst_18478 = cljs.core.chunked_seq_QMARK_.call(null,inst_18476);
var state_18575__$1 = state_18575;
if(inst_18478){
var statearr_18643_18707 = state_18575__$1;
(statearr_18643_18707[(1)] = (19));

} else {
var statearr_18644_18708 = state_18575__$1;
(statearr_18644_18708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (38))){
var inst_18554 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18645_18709 = state_18575__$1;
(statearr_18645_18709[(2)] = inst_18554);

(statearr_18645_18709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (30))){
var state_18575__$1 = state_18575;
var statearr_18646_18710 = state_18575__$1;
(statearr_18646_18710[(2)] = null);

(statearr_18646_18710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (10))){
var inst_18457 = (state_18575[(16)]);
var inst_18459 = (state_18575[(17)]);
var inst_18465 = cljs.core._nth.call(null,inst_18457,inst_18459);
var inst_18466 = cljs.core.nth.call(null,inst_18465,(0),null);
var inst_18467 = cljs.core.nth.call(null,inst_18465,(1),null);
var state_18575__$1 = (function (){var statearr_18647 = state_18575;
(statearr_18647[(26)] = inst_18466);

return statearr_18647;
})();
if(cljs.core.truth_(inst_18467)){
var statearr_18648_18711 = state_18575__$1;
(statearr_18648_18711[(1)] = (13));

} else {
var statearr_18649_18712 = state_18575__$1;
(statearr_18649_18712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (18))){
var inst_18500 = (state_18575[(2)]);
var state_18575__$1 = state_18575;
var statearr_18650_18713 = state_18575__$1;
(statearr_18650_18713[(2)] = inst_18500);

(statearr_18650_18713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (42))){
var state_18575__$1 = state_18575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18575__$1,(45),dchan);
} else {
if((state_val_18576 === (37))){
var inst_18534 = (state_18575[(25)]);
var inst_18447 = (state_18575[(9)]);
var inst_18543 = (state_18575[(23)]);
var inst_18543__$1 = cljs.core.first.call(null,inst_18534);
var inst_18544 = cljs.core.async.put_BANG_.call(null,inst_18543__$1,inst_18447,done);
var state_18575__$1 = (function (){var statearr_18651 = state_18575;
(statearr_18651[(23)] = inst_18543__$1);

return statearr_18651;
})();
if(cljs.core.truth_(inst_18544)){
var statearr_18652_18714 = state_18575__$1;
(statearr_18652_18714[(1)] = (39));

} else {
var statearr_18653_18715 = state_18575__$1;
(statearr_18653_18715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18576 === (8))){
var inst_18458 = (state_18575[(15)]);
var inst_18459 = (state_18575[(17)]);
var inst_18461 = (inst_18459 < inst_18458);
var inst_18462 = inst_18461;
var state_18575__$1 = state_18575;
if(cljs.core.truth_(inst_18462)){
var statearr_18654_18716 = state_18575__$1;
(statearr_18654_18716[(1)] = (10));

} else {
var statearr_18655_18717 = state_18575__$1;
(statearr_18655_18717[(1)] = (11));

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
});})(c__10686__auto___18663,cs,m,dchan,dctr,done))
;
return ((function (switch__10621__auto__,c__10686__auto___18663,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10622__auto__ = null;
var cljs$core$async$mult_$_state_machine__10622__auto____0 = (function (){
var statearr_18659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18659[(0)] = cljs$core$async$mult_$_state_machine__10622__auto__);

(statearr_18659[(1)] = (1));

return statearr_18659;
});
var cljs$core$async$mult_$_state_machine__10622__auto____1 = (function (state_18575){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_18575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e18660){if((e18660 instanceof Object)){
var ex__10625__auto__ = e18660;
var statearr_18661_18718 = state_18575;
(statearr_18661_18718[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18719 = state_18575;
state_18575 = G__18719;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10622__auto__ = function(state_18575){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10622__auto____1.call(this,state_18575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10622__auto____0;
cljs$core$async$mult_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10622__auto____1;
return cljs$core$async$mult_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___18663,cs,m,dchan,dctr,done))
})();
var state__10688__auto__ = (function (){var statearr_18662 = f__10687__auto__.call(null);
(statearr_18662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___18663);

return statearr_18662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___18663,cs,m,dchan,dctr,done))
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
var args18720 = [];
var len__6152__auto___18723 = arguments.length;
var i__6153__auto___18724 = (0);
while(true){
if((i__6153__auto___18724 < len__6152__auto___18723)){
args18720.push((arguments[i__6153__auto___18724]));

var G__18725 = (i__6153__auto___18724 + (1));
i__6153__auto___18724 = G__18725;
continue;
} else {
}
break;
}

var G__18722 = args18720.length;
switch (G__18722) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18720.length)].join('')));

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
var len__6152__auto___18737 = arguments.length;
var i__6153__auto___18738 = (0);
while(true){
if((i__6153__auto___18738 < len__6152__auto___18737)){
args__6159__auto__.push((arguments[i__6153__auto___18738]));

var G__18739 = (i__6153__auto___18738 + (1));
i__6153__auto___18738 = G__18739;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18731){
var map__18732 = p__18731;
var map__18732__$1 = ((((!((map__18732 == null)))?((((map__18732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18732):map__18732);
var opts = map__18732__$1;
var statearr_18734_18740 = state;
(statearr_18734_18740[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18732,map__18732__$1,opts){
return (function (val){
var statearr_18735_18741 = state;
(statearr_18735_18741[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18732,map__18732__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18736_18742 = state;
(statearr_18736_18742[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18727){
var G__18728 = cljs.core.first.call(null,seq18727);
var seq18727__$1 = cljs.core.next.call(null,seq18727);
var G__18729 = cljs.core.first.call(null,seq18727__$1);
var seq18727__$2 = cljs.core.next.call(null,seq18727__$1);
var G__18730 = cljs.core.first.call(null,seq18727__$2);
var seq18727__$3 = cljs.core.next.call(null,seq18727__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18728,G__18729,G__18730,seq18727__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18906 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18907){
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
this.meta18907 = meta18907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18908,meta18907__$1){
var self__ = this;
var _18908__$1 = this;
return (new cljs.core.async.t_cljs$core$async18906(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18907__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18908){
var self__ = this;
var _18908__$1 = this;
return self__.meta18907;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18906.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18907","meta18907",-1584535690,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18906";

cljs.core.async.t_cljs$core$async18906.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async18906");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18906 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18906(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18907){
return (new cljs.core.async.t_cljs$core$async18906(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18907));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18906(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10686__auto___19069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19006){
var state_val_19007 = (state_19006[(1)]);
if((state_val_19007 === (7))){
var inst_18924 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
var statearr_19008_19070 = state_19006__$1;
(statearr_19008_19070[(2)] = inst_18924);

(statearr_19008_19070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (20))){
var inst_18936 = (state_19006[(7)]);
var state_19006__$1 = state_19006;
var statearr_19009_19071 = state_19006__$1;
(statearr_19009_19071[(2)] = inst_18936);

(statearr_19009_19071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (27))){
var state_19006__$1 = state_19006;
var statearr_19010_19072 = state_19006__$1;
(statearr_19010_19072[(2)] = null);

(statearr_19010_19072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (1))){
var inst_18912 = (state_19006[(8)]);
var inst_18912__$1 = calc_state.call(null);
var inst_18914 = (inst_18912__$1 == null);
var inst_18915 = cljs.core.not.call(null,inst_18914);
var state_19006__$1 = (function (){var statearr_19011 = state_19006;
(statearr_19011[(8)] = inst_18912__$1);

return statearr_19011;
})();
if(inst_18915){
var statearr_19012_19073 = state_19006__$1;
(statearr_19012_19073[(1)] = (2));

} else {
var statearr_19013_19074 = state_19006__$1;
(statearr_19013_19074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (24))){
var inst_18966 = (state_19006[(9)]);
var inst_18959 = (state_19006[(10)]);
var inst_18980 = (state_19006[(11)]);
var inst_18980__$1 = inst_18959.call(null,inst_18966);
var state_19006__$1 = (function (){var statearr_19014 = state_19006;
(statearr_19014[(11)] = inst_18980__$1);

return statearr_19014;
})();
if(cljs.core.truth_(inst_18980__$1)){
var statearr_19015_19075 = state_19006__$1;
(statearr_19015_19075[(1)] = (29));

} else {
var statearr_19016_19076 = state_19006__$1;
(statearr_19016_19076[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (4))){
var inst_18927 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18927)){
var statearr_19017_19077 = state_19006__$1;
(statearr_19017_19077[(1)] = (8));

} else {
var statearr_19018_19078 = state_19006__$1;
(statearr_19018_19078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (15))){
var inst_18953 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18953)){
var statearr_19019_19079 = state_19006__$1;
(statearr_19019_19079[(1)] = (19));

} else {
var statearr_19020_19080 = state_19006__$1;
(statearr_19020_19080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (21))){
var inst_18958 = (state_19006[(12)]);
var inst_18958__$1 = (state_19006[(2)]);
var inst_18959 = cljs.core.get.call(null,inst_18958__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18960 = cljs.core.get.call(null,inst_18958__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18961 = cljs.core.get.call(null,inst_18958__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19006__$1 = (function (){var statearr_19021 = state_19006;
(statearr_19021[(12)] = inst_18958__$1);

(statearr_19021[(10)] = inst_18959);

(statearr_19021[(13)] = inst_18960);

return statearr_19021;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19006__$1,(22),inst_18961);
} else {
if((state_val_19007 === (31))){
var inst_18988 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18988)){
var statearr_19022_19081 = state_19006__$1;
(statearr_19022_19081[(1)] = (32));

} else {
var statearr_19023_19082 = state_19006__$1;
(statearr_19023_19082[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (32))){
var inst_18965 = (state_19006[(14)]);
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19006__$1,(35),out,inst_18965);
} else {
if((state_val_19007 === (33))){
var inst_18958 = (state_19006[(12)]);
var inst_18936 = inst_18958;
var state_19006__$1 = (function (){var statearr_19024 = state_19006;
(statearr_19024[(7)] = inst_18936);

return statearr_19024;
})();
var statearr_19025_19083 = state_19006__$1;
(statearr_19025_19083[(2)] = null);

(statearr_19025_19083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (13))){
var inst_18936 = (state_19006[(7)]);
var inst_18943 = inst_18936.cljs$lang$protocol_mask$partition0$;
var inst_18944 = (inst_18943 & (64));
var inst_18945 = inst_18936.cljs$core$ISeq$;
var inst_18946 = (inst_18944) || (inst_18945);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18946)){
var statearr_19026_19084 = state_19006__$1;
(statearr_19026_19084[(1)] = (16));

} else {
var statearr_19027_19085 = state_19006__$1;
(statearr_19027_19085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (22))){
var inst_18966 = (state_19006[(9)]);
var inst_18965 = (state_19006[(14)]);
var inst_18964 = (state_19006[(2)]);
var inst_18965__$1 = cljs.core.nth.call(null,inst_18964,(0),null);
var inst_18966__$1 = cljs.core.nth.call(null,inst_18964,(1),null);
var inst_18967 = (inst_18965__$1 == null);
var inst_18968 = cljs.core._EQ_.call(null,inst_18966__$1,change);
var inst_18969 = (inst_18967) || (inst_18968);
var state_19006__$1 = (function (){var statearr_19028 = state_19006;
(statearr_19028[(9)] = inst_18966__$1);

(statearr_19028[(14)] = inst_18965__$1);

return statearr_19028;
})();
if(cljs.core.truth_(inst_18969)){
var statearr_19029_19086 = state_19006__$1;
(statearr_19029_19086[(1)] = (23));

} else {
var statearr_19030_19087 = state_19006__$1;
(statearr_19030_19087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (36))){
var inst_18958 = (state_19006[(12)]);
var inst_18936 = inst_18958;
var state_19006__$1 = (function (){var statearr_19031 = state_19006;
(statearr_19031[(7)] = inst_18936);

return statearr_19031;
})();
var statearr_19032_19088 = state_19006__$1;
(statearr_19032_19088[(2)] = null);

(statearr_19032_19088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (29))){
var inst_18980 = (state_19006[(11)]);
var state_19006__$1 = state_19006;
var statearr_19033_19089 = state_19006__$1;
(statearr_19033_19089[(2)] = inst_18980);

(statearr_19033_19089[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (6))){
var state_19006__$1 = state_19006;
var statearr_19034_19090 = state_19006__$1;
(statearr_19034_19090[(2)] = false);

(statearr_19034_19090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (28))){
var inst_18976 = (state_19006[(2)]);
var inst_18977 = calc_state.call(null);
var inst_18936 = inst_18977;
var state_19006__$1 = (function (){var statearr_19035 = state_19006;
(statearr_19035[(15)] = inst_18976);

(statearr_19035[(7)] = inst_18936);

return statearr_19035;
})();
var statearr_19036_19091 = state_19006__$1;
(statearr_19036_19091[(2)] = null);

(statearr_19036_19091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (25))){
var inst_19002 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
var statearr_19037_19092 = state_19006__$1;
(statearr_19037_19092[(2)] = inst_19002);

(statearr_19037_19092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (34))){
var inst_19000 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
var statearr_19038_19093 = state_19006__$1;
(statearr_19038_19093[(2)] = inst_19000);

(statearr_19038_19093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (17))){
var state_19006__$1 = state_19006;
var statearr_19039_19094 = state_19006__$1;
(statearr_19039_19094[(2)] = false);

(statearr_19039_19094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (3))){
var state_19006__$1 = state_19006;
var statearr_19040_19095 = state_19006__$1;
(statearr_19040_19095[(2)] = false);

(statearr_19040_19095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (12))){
var inst_19004 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19006__$1,inst_19004);
} else {
if((state_val_19007 === (2))){
var inst_18912 = (state_19006[(8)]);
var inst_18917 = inst_18912.cljs$lang$protocol_mask$partition0$;
var inst_18918 = (inst_18917 & (64));
var inst_18919 = inst_18912.cljs$core$ISeq$;
var inst_18920 = (inst_18918) || (inst_18919);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18920)){
var statearr_19041_19096 = state_19006__$1;
(statearr_19041_19096[(1)] = (5));

} else {
var statearr_19042_19097 = state_19006__$1;
(statearr_19042_19097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (23))){
var inst_18965 = (state_19006[(14)]);
var inst_18971 = (inst_18965 == null);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18971)){
var statearr_19043_19098 = state_19006__$1;
(statearr_19043_19098[(1)] = (26));

} else {
var statearr_19044_19099 = state_19006__$1;
(statearr_19044_19099[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (35))){
var inst_18991 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
if(cljs.core.truth_(inst_18991)){
var statearr_19045_19100 = state_19006__$1;
(statearr_19045_19100[(1)] = (36));

} else {
var statearr_19046_19101 = state_19006__$1;
(statearr_19046_19101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (19))){
var inst_18936 = (state_19006[(7)]);
var inst_18955 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18936);
var state_19006__$1 = state_19006;
var statearr_19047_19102 = state_19006__$1;
(statearr_19047_19102[(2)] = inst_18955);

(statearr_19047_19102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (11))){
var inst_18936 = (state_19006[(7)]);
var inst_18940 = (inst_18936 == null);
var inst_18941 = cljs.core.not.call(null,inst_18940);
var state_19006__$1 = state_19006;
if(inst_18941){
var statearr_19048_19103 = state_19006__$1;
(statearr_19048_19103[(1)] = (13));

} else {
var statearr_19049_19104 = state_19006__$1;
(statearr_19049_19104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (9))){
var inst_18912 = (state_19006[(8)]);
var state_19006__$1 = state_19006;
var statearr_19050_19105 = state_19006__$1;
(statearr_19050_19105[(2)] = inst_18912);

(statearr_19050_19105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (5))){
var state_19006__$1 = state_19006;
var statearr_19051_19106 = state_19006__$1;
(statearr_19051_19106[(2)] = true);

(statearr_19051_19106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (14))){
var state_19006__$1 = state_19006;
var statearr_19052_19107 = state_19006__$1;
(statearr_19052_19107[(2)] = false);

(statearr_19052_19107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (26))){
var inst_18966 = (state_19006[(9)]);
var inst_18973 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18966);
var state_19006__$1 = state_19006;
var statearr_19053_19108 = state_19006__$1;
(statearr_19053_19108[(2)] = inst_18973);

(statearr_19053_19108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (16))){
var state_19006__$1 = state_19006;
var statearr_19054_19109 = state_19006__$1;
(statearr_19054_19109[(2)] = true);

(statearr_19054_19109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (38))){
var inst_18996 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
var statearr_19055_19110 = state_19006__$1;
(statearr_19055_19110[(2)] = inst_18996);

(statearr_19055_19110[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (30))){
var inst_18966 = (state_19006[(9)]);
var inst_18959 = (state_19006[(10)]);
var inst_18960 = (state_19006[(13)]);
var inst_18983 = cljs.core.empty_QMARK_.call(null,inst_18959);
var inst_18984 = inst_18960.call(null,inst_18966);
var inst_18985 = cljs.core.not.call(null,inst_18984);
var inst_18986 = (inst_18983) && (inst_18985);
var state_19006__$1 = state_19006;
var statearr_19056_19111 = state_19006__$1;
(statearr_19056_19111[(2)] = inst_18986);

(statearr_19056_19111[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (10))){
var inst_18912 = (state_19006[(8)]);
var inst_18932 = (state_19006[(2)]);
var inst_18933 = cljs.core.get.call(null,inst_18932,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18934 = cljs.core.get.call(null,inst_18932,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18935 = cljs.core.get.call(null,inst_18932,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18936 = inst_18912;
var state_19006__$1 = (function (){var statearr_19057 = state_19006;
(statearr_19057[(7)] = inst_18936);

(statearr_19057[(16)] = inst_18935);

(statearr_19057[(17)] = inst_18934);

(statearr_19057[(18)] = inst_18933);

return statearr_19057;
})();
var statearr_19058_19112 = state_19006__$1;
(statearr_19058_19112[(2)] = null);

(statearr_19058_19112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (18))){
var inst_18950 = (state_19006[(2)]);
var state_19006__$1 = state_19006;
var statearr_19059_19113 = state_19006__$1;
(statearr_19059_19113[(2)] = inst_18950);

(statearr_19059_19113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (37))){
var state_19006__$1 = state_19006;
var statearr_19060_19114 = state_19006__$1;
(statearr_19060_19114[(2)] = null);

(statearr_19060_19114[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19007 === (8))){
var inst_18912 = (state_19006[(8)]);
var inst_18929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18912);
var state_19006__$1 = state_19006;
var statearr_19061_19115 = state_19006__$1;
(statearr_19061_19115[(2)] = inst_18929);

(statearr_19061_19115[(1)] = (10));


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
});})(c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10621__auto__,c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10622__auto__ = null;
var cljs$core$async$mix_$_state_machine__10622__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19065[(0)] = cljs$core$async$mix_$_state_machine__10622__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var cljs$core$async$mix_$_state_machine__10622__auto____1 = (function (state_19006){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object)){
var ex__10625__auto__ = e19066;
var statearr_19067_19116 = state_19006;
(statearr_19067_19116[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19117 = state_19006;
state_19006 = G__19117;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10622__auto__ = function(state_19006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10622__auto____1.call(this,state_19006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10622__auto____0;
cljs$core$async$mix_$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10622__auto____1;
return cljs$core$async$mix_$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10688__auto__ = (function (){var statearr_19068 = f__10687__auto__.call(null);
(statearr_19068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19069);

return statearr_19068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19069,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args19118 = [];
var len__6152__auto___19121 = arguments.length;
var i__6153__auto___19122 = (0);
while(true){
if((i__6153__auto___19122 < len__6152__auto___19121)){
args19118.push((arguments[i__6153__auto___19122]));

var G__19123 = (i__6153__auto___19122 + (1));
i__6153__auto___19122 = G__19123;
continue;
} else {
}
break;
}

var G__19120 = args19118.length;
switch (G__19120) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19118.length)].join('')));

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
var args19126 = [];
var len__6152__auto___19251 = arguments.length;
var i__6153__auto___19252 = (0);
while(true){
if((i__6153__auto___19252 < len__6152__auto___19251)){
args19126.push((arguments[i__6153__auto___19252]));

var G__19253 = (i__6153__auto___19252 + (1));
i__6153__auto___19252 = G__19253;
continue;
} else {
}
break;
}

var G__19128 = args19126.length;
switch (G__19128) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19126.length)].join('')));

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
return (function (p1__19125_SHARP_){
if(cljs.core.truth_(p1__19125_SHARP_.call(null,topic))){
return p1__19125_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19125_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19129 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19130){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19130 = meta19130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19131,meta19130__$1){
var self__ = this;
var _19131__$1 = this;
return (new cljs.core.async.t_cljs$core$async19129(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19130__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19131){
var self__ = this;
var _19131__$1 = this;
return self__.meta19130;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19130","meta19130",730597249,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19129";

cljs.core.async.t_cljs$core$async19129.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19129");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19129 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19130){
return (new cljs.core.async.t_cljs$core$async19129(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19130));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19129(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10686__auto___19255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19255,mults,ensure_mult,p){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19255,mults,ensure_mult,p){
return (function (state_19203){
var state_val_19204 = (state_19203[(1)]);
if((state_val_19204 === (7))){
var inst_19199 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19205_19256 = state_19203__$1;
(statearr_19205_19256[(2)] = inst_19199);

(statearr_19205_19256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (20))){
var state_19203__$1 = state_19203;
var statearr_19206_19257 = state_19203__$1;
(statearr_19206_19257[(2)] = null);

(statearr_19206_19257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (1))){
var state_19203__$1 = state_19203;
var statearr_19207_19258 = state_19203__$1;
(statearr_19207_19258[(2)] = null);

(statearr_19207_19258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (24))){
var inst_19182 = (state_19203[(7)]);
var inst_19191 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19182);
var state_19203__$1 = state_19203;
var statearr_19208_19259 = state_19203__$1;
(statearr_19208_19259[(2)] = inst_19191);

(statearr_19208_19259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (4))){
var inst_19134 = (state_19203[(8)]);
var inst_19134__$1 = (state_19203[(2)]);
var inst_19135 = (inst_19134__$1 == null);
var state_19203__$1 = (function (){var statearr_19209 = state_19203;
(statearr_19209[(8)] = inst_19134__$1);

return statearr_19209;
})();
if(cljs.core.truth_(inst_19135)){
var statearr_19210_19260 = state_19203__$1;
(statearr_19210_19260[(1)] = (5));

} else {
var statearr_19211_19261 = state_19203__$1;
(statearr_19211_19261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (15))){
var inst_19176 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19212_19262 = state_19203__$1;
(statearr_19212_19262[(2)] = inst_19176);

(statearr_19212_19262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (21))){
var inst_19196 = (state_19203[(2)]);
var state_19203__$1 = (function (){var statearr_19213 = state_19203;
(statearr_19213[(9)] = inst_19196);

return statearr_19213;
})();
var statearr_19214_19263 = state_19203__$1;
(statearr_19214_19263[(2)] = null);

(statearr_19214_19263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (13))){
var inst_19158 = (state_19203[(10)]);
var inst_19160 = cljs.core.chunked_seq_QMARK_.call(null,inst_19158);
var state_19203__$1 = state_19203;
if(inst_19160){
var statearr_19215_19264 = state_19203__$1;
(statearr_19215_19264[(1)] = (16));

} else {
var statearr_19216_19265 = state_19203__$1;
(statearr_19216_19265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (22))){
var inst_19188 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
if(cljs.core.truth_(inst_19188)){
var statearr_19217_19266 = state_19203__$1;
(statearr_19217_19266[(1)] = (23));

} else {
var statearr_19218_19267 = state_19203__$1;
(statearr_19218_19267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (6))){
var inst_19184 = (state_19203[(11)]);
var inst_19182 = (state_19203[(7)]);
var inst_19134 = (state_19203[(8)]);
var inst_19182__$1 = topic_fn.call(null,inst_19134);
var inst_19183 = cljs.core.deref.call(null,mults);
var inst_19184__$1 = cljs.core.get.call(null,inst_19183,inst_19182__$1);
var state_19203__$1 = (function (){var statearr_19219 = state_19203;
(statearr_19219[(11)] = inst_19184__$1);

(statearr_19219[(7)] = inst_19182__$1);

return statearr_19219;
})();
if(cljs.core.truth_(inst_19184__$1)){
var statearr_19220_19268 = state_19203__$1;
(statearr_19220_19268[(1)] = (19));

} else {
var statearr_19221_19269 = state_19203__$1;
(statearr_19221_19269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (25))){
var inst_19193 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19222_19270 = state_19203__$1;
(statearr_19222_19270[(2)] = inst_19193);

(statearr_19222_19270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (17))){
var inst_19158 = (state_19203[(10)]);
var inst_19167 = cljs.core.first.call(null,inst_19158);
var inst_19168 = cljs.core.async.muxch_STAR_.call(null,inst_19167);
var inst_19169 = cljs.core.async.close_BANG_.call(null,inst_19168);
var inst_19170 = cljs.core.next.call(null,inst_19158);
var inst_19144 = inst_19170;
var inst_19145 = null;
var inst_19146 = (0);
var inst_19147 = (0);
var state_19203__$1 = (function (){var statearr_19223 = state_19203;
(statearr_19223[(12)] = inst_19144);

(statearr_19223[(13)] = inst_19146);

(statearr_19223[(14)] = inst_19169);

(statearr_19223[(15)] = inst_19145);

(statearr_19223[(16)] = inst_19147);

return statearr_19223;
})();
var statearr_19224_19271 = state_19203__$1;
(statearr_19224_19271[(2)] = null);

(statearr_19224_19271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (3))){
var inst_19201 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19203__$1,inst_19201);
} else {
if((state_val_19204 === (12))){
var inst_19178 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19225_19272 = state_19203__$1;
(statearr_19225_19272[(2)] = inst_19178);

(statearr_19225_19272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (2))){
var state_19203__$1 = state_19203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19203__$1,(4),ch);
} else {
if((state_val_19204 === (23))){
var state_19203__$1 = state_19203;
var statearr_19226_19273 = state_19203__$1;
(statearr_19226_19273[(2)] = null);

(statearr_19226_19273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (19))){
var inst_19184 = (state_19203[(11)]);
var inst_19134 = (state_19203[(8)]);
var inst_19186 = cljs.core.async.muxch_STAR_.call(null,inst_19184);
var state_19203__$1 = state_19203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19203__$1,(22),inst_19186,inst_19134);
} else {
if((state_val_19204 === (11))){
var inst_19144 = (state_19203[(12)]);
var inst_19158 = (state_19203[(10)]);
var inst_19158__$1 = cljs.core.seq.call(null,inst_19144);
var state_19203__$1 = (function (){var statearr_19227 = state_19203;
(statearr_19227[(10)] = inst_19158__$1);

return statearr_19227;
})();
if(inst_19158__$1){
var statearr_19228_19274 = state_19203__$1;
(statearr_19228_19274[(1)] = (13));

} else {
var statearr_19229_19275 = state_19203__$1;
(statearr_19229_19275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (9))){
var inst_19180 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19230_19276 = state_19203__$1;
(statearr_19230_19276[(2)] = inst_19180);

(statearr_19230_19276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (5))){
var inst_19141 = cljs.core.deref.call(null,mults);
var inst_19142 = cljs.core.vals.call(null,inst_19141);
var inst_19143 = cljs.core.seq.call(null,inst_19142);
var inst_19144 = inst_19143;
var inst_19145 = null;
var inst_19146 = (0);
var inst_19147 = (0);
var state_19203__$1 = (function (){var statearr_19231 = state_19203;
(statearr_19231[(12)] = inst_19144);

(statearr_19231[(13)] = inst_19146);

(statearr_19231[(15)] = inst_19145);

(statearr_19231[(16)] = inst_19147);

return statearr_19231;
})();
var statearr_19232_19277 = state_19203__$1;
(statearr_19232_19277[(2)] = null);

(statearr_19232_19277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (14))){
var state_19203__$1 = state_19203;
var statearr_19236_19278 = state_19203__$1;
(statearr_19236_19278[(2)] = null);

(statearr_19236_19278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (16))){
var inst_19158 = (state_19203[(10)]);
var inst_19162 = cljs.core.chunk_first.call(null,inst_19158);
var inst_19163 = cljs.core.chunk_rest.call(null,inst_19158);
var inst_19164 = cljs.core.count.call(null,inst_19162);
var inst_19144 = inst_19163;
var inst_19145 = inst_19162;
var inst_19146 = inst_19164;
var inst_19147 = (0);
var state_19203__$1 = (function (){var statearr_19237 = state_19203;
(statearr_19237[(12)] = inst_19144);

(statearr_19237[(13)] = inst_19146);

(statearr_19237[(15)] = inst_19145);

(statearr_19237[(16)] = inst_19147);

return statearr_19237;
})();
var statearr_19238_19279 = state_19203__$1;
(statearr_19238_19279[(2)] = null);

(statearr_19238_19279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (10))){
var inst_19144 = (state_19203[(12)]);
var inst_19146 = (state_19203[(13)]);
var inst_19145 = (state_19203[(15)]);
var inst_19147 = (state_19203[(16)]);
var inst_19152 = cljs.core._nth.call(null,inst_19145,inst_19147);
var inst_19153 = cljs.core.async.muxch_STAR_.call(null,inst_19152);
var inst_19154 = cljs.core.async.close_BANG_.call(null,inst_19153);
var inst_19155 = (inst_19147 + (1));
var tmp19233 = inst_19144;
var tmp19234 = inst_19146;
var tmp19235 = inst_19145;
var inst_19144__$1 = tmp19233;
var inst_19145__$1 = tmp19235;
var inst_19146__$1 = tmp19234;
var inst_19147__$1 = inst_19155;
var state_19203__$1 = (function (){var statearr_19239 = state_19203;
(statearr_19239[(12)] = inst_19144__$1);

(statearr_19239[(17)] = inst_19154);

(statearr_19239[(13)] = inst_19146__$1);

(statearr_19239[(15)] = inst_19145__$1);

(statearr_19239[(16)] = inst_19147__$1);

return statearr_19239;
})();
var statearr_19240_19280 = state_19203__$1;
(statearr_19240_19280[(2)] = null);

(statearr_19240_19280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (18))){
var inst_19173 = (state_19203[(2)]);
var state_19203__$1 = state_19203;
var statearr_19241_19281 = state_19203__$1;
(statearr_19241_19281[(2)] = inst_19173);

(statearr_19241_19281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19204 === (8))){
var inst_19146 = (state_19203[(13)]);
var inst_19147 = (state_19203[(16)]);
var inst_19149 = (inst_19147 < inst_19146);
var inst_19150 = inst_19149;
var state_19203__$1 = state_19203;
if(cljs.core.truth_(inst_19150)){
var statearr_19242_19282 = state_19203__$1;
(statearr_19242_19282[(1)] = (10));

} else {
var statearr_19243_19283 = state_19203__$1;
(statearr_19243_19283[(1)] = (11));

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
});})(c__10686__auto___19255,mults,ensure_mult,p))
;
return ((function (switch__10621__auto__,c__10686__auto___19255,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19247[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19247[(1)] = (1));

return statearr_19247;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19203){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19248){if((e19248 instanceof Object)){
var ex__10625__auto__ = e19248;
var statearr_19249_19284 = state_19203;
(statearr_19249_19284[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19285 = state_19203;
state_19203 = G__19285;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19255,mults,ensure_mult,p))
})();
var state__10688__auto__ = (function (){var statearr_19250 = f__10687__auto__.call(null);
(statearr_19250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19255);

return statearr_19250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19255,mults,ensure_mult,p))
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
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19286.length)].join('')));

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
var args19293 = [];
var len__6152__auto___19296 = arguments.length;
var i__6153__auto___19297 = (0);
while(true){
if((i__6153__auto___19297 < len__6152__auto___19296)){
args19293.push((arguments[i__6153__auto___19297]));

var G__19298 = (i__6153__auto___19297 + (1));
i__6153__auto___19297 = G__19298;
continue;
} else {
}
break;
}

var G__19295 = args19293.length;
switch (G__19295) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19293.length)].join('')));

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
var args19300 = [];
var len__6152__auto___19371 = arguments.length;
var i__6153__auto___19372 = (0);
while(true){
if((i__6153__auto___19372 < len__6152__auto___19371)){
args19300.push((arguments[i__6153__auto___19372]));

var G__19373 = (i__6153__auto___19372 + (1));
i__6153__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var G__19302 = args19300.length;
switch (G__19302) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19300.length)].join('')));

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
var c__10686__auto___19375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19341){
var state_val_19342 = (state_19341[(1)]);
if((state_val_19342 === (7))){
var state_19341__$1 = state_19341;
var statearr_19343_19376 = state_19341__$1;
(statearr_19343_19376[(2)] = null);

(statearr_19343_19376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (1))){
var state_19341__$1 = state_19341;
var statearr_19344_19377 = state_19341__$1;
(statearr_19344_19377[(2)] = null);

(statearr_19344_19377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (4))){
var inst_19305 = (state_19341[(7)]);
var inst_19307 = (inst_19305 < cnt);
var state_19341__$1 = state_19341;
if(cljs.core.truth_(inst_19307)){
var statearr_19345_19378 = state_19341__$1;
(statearr_19345_19378[(1)] = (6));

} else {
var statearr_19346_19379 = state_19341__$1;
(statearr_19346_19379[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (15))){
var inst_19337 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
var statearr_19347_19380 = state_19341__$1;
(statearr_19347_19380[(2)] = inst_19337);

(statearr_19347_19380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (13))){
var inst_19330 = cljs.core.async.close_BANG_.call(null,out);
var state_19341__$1 = state_19341;
var statearr_19348_19381 = state_19341__$1;
(statearr_19348_19381[(2)] = inst_19330);

(statearr_19348_19381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (6))){
var state_19341__$1 = state_19341;
var statearr_19349_19382 = state_19341__$1;
(statearr_19349_19382[(2)] = null);

(statearr_19349_19382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (3))){
var inst_19339 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19341__$1,inst_19339);
} else {
if((state_val_19342 === (12))){
var inst_19327 = (state_19341[(8)]);
var inst_19327__$1 = (state_19341[(2)]);
var inst_19328 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19327__$1);
var state_19341__$1 = (function (){var statearr_19350 = state_19341;
(statearr_19350[(8)] = inst_19327__$1);

return statearr_19350;
})();
if(cljs.core.truth_(inst_19328)){
var statearr_19351_19383 = state_19341__$1;
(statearr_19351_19383[(1)] = (13));

} else {
var statearr_19352_19384 = state_19341__$1;
(statearr_19352_19384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (2))){
var inst_19304 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19305 = (0);
var state_19341__$1 = (function (){var statearr_19353 = state_19341;
(statearr_19353[(7)] = inst_19305);

(statearr_19353[(9)] = inst_19304);

return statearr_19353;
})();
var statearr_19354_19385 = state_19341__$1;
(statearr_19354_19385[(2)] = null);

(statearr_19354_19385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (11))){
var inst_19305 = (state_19341[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19341,(10),Object,null,(9));
var inst_19314 = chs__$1.call(null,inst_19305);
var inst_19315 = done.call(null,inst_19305);
var inst_19316 = cljs.core.async.take_BANG_.call(null,inst_19314,inst_19315);
var state_19341__$1 = state_19341;
var statearr_19355_19386 = state_19341__$1;
(statearr_19355_19386[(2)] = inst_19316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19341__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (9))){
var inst_19305 = (state_19341[(7)]);
var inst_19318 = (state_19341[(2)]);
var inst_19319 = (inst_19305 + (1));
var inst_19305__$1 = inst_19319;
var state_19341__$1 = (function (){var statearr_19356 = state_19341;
(statearr_19356[(7)] = inst_19305__$1);

(statearr_19356[(10)] = inst_19318);

return statearr_19356;
})();
var statearr_19357_19387 = state_19341__$1;
(statearr_19357_19387[(2)] = null);

(statearr_19357_19387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (5))){
var inst_19325 = (state_19341[(2)]);
var state_19341__$1 = (function (){var statearr_19358 = state_19341;
(statearr_19358[(11)] = inst_19325);

return statearr_19358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19341__$1,(12),dchan);
} else {
if((state_val_19342 === (14))){
var inst_19327 = (state_19341[(8)]);
var inst_19332 = cljs.core.apply.call(null,f,inst_19327);
var state_19341__$1 = state_19341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19341__$1,(16),out,inst_19332);
} else {
if((state_val_19342 === (16))){
var inst_19334 = (state_19341[(2)]);
var state_19341__$1 = (function (){var statearr_19359 = state_19341;
(statearr_19359[(12)] = inst_19334);

return statearr_19359;
})();
var statearr_19360_19388 = state_19341__$1;
(statearr_19360_19388[(2)] = null);

(statearr_19360_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (10))){
var inst_19309 = (state_19341[(2)]);
var inst_19310 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19341__$1 = (function (){var statearr_19361 = state_19341;
(statearr_19361[(13)] = inst_19309);

return statearr_19361;
})();
var statearr_19362_19389 = state_19341__$1;
(statearr_19362_19389[(2)] = inst_19310);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19341__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19342 === (8))){
var inst_19323 = (state_19341[(2)]);
var state_19341__$1 = state_19341;
var statearr_19363_19390 = state_19341__$1;
(statearr_19363_19390[(2)] = inst_19323);

(statearr_19363_19390[(1)] = (5));


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
});})(c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10621__auto__,c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19367[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19367[(1)] = (1));

return statearr_19367;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19341){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19368){if((e19368 instanceof Object)){
var ex__10625__auto__ = e19368;
var statearr_19369_19391 = state_19341;
(statearr_19369_19391[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19392 = state_19341;
state_19341 = G__19392;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10688__auto__ = (function (){var statearr_19370 = f__10687__auto__.call(null);
(statearr_19370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19375);

return statearr_19370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19375,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args19394 = [];
var len__6152__auto___19450 = arguments.length;
var i__6153__auto___19451 = (0);
while(true){
if((i__6153__auto___19451 < len__6152__auto___19450)){
args19394.push((arguments[i__6153__auto___19451]));

var G__19452 = (i__6153__auto___19451 + (1));
i__6153__auto___19451 = G__19452;
continue;
} else {
}
break;
}

var G__19396 = args19394.length;
switch (G__19396) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19394.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19454,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19454,out){
return (function (state_19426){
var state_val_19427 = (state_19426[(1)]);
if((state_val_19427 === (7))){
var inst_19406 = (state_19426[(7)]);
var inst_19405 = (state_19426[(8)]);
var inst_19405__$1 = (state_19426[(2)]);
var inst_19406__$1 = cljs.core.nth.call(null,inst_19405__$1,(0),null);
var inst_19407 = cljs.core.nth.call(null,inst_19405__$1,(1),null);
var inst_19408 = (inst_19406__$1 == null);
var state_19426__$1 = (function (){var statearr_19428 = state_19426;
(statearr_19428[(7)] = inst_19406__$1);

(statearr_19428[(9)] = inst_19407);

(statearr_19428[(8)] = inst_19405__$1);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19408)){
var statearr_19429_19455 = state_19426__$1;
(statearr_19429_19455[(1)] = (8));

} else {
var statearr_19430_19456 = state_19426__$1;
(statearr_19430_19456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (1))){
var inst_19397 = cljs.core.vec.call(null,chs);
var inst_19398 = inst_19397;
var state_19426__$1 = (function (){var statearr_19431 = state_19426;
(statearr_19431[(10)] = inst_19398);

return statearr_19431;
})();
var statearr_19432_19457 = state_19426__$1;
(statearr_19432_19457[(2)] = null);

(statearr_19432_19457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (4))){
var inst_19398 = (state_19426[(10)]);
var state_19426__$1 = state_19426;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19426__$1,(7),inst_19398);
} else {
if((state_val_19427 === (6))){
var inst_19422 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19433_19458 = state_19426__$1;
(statearr_19433_19458[(2)] = inst_19422);

(statearr_19433_19458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (3))){
var inst_19424 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19426__$1,inst_19424);
} else {
if((state_val_19427 === (2))){
var inst_19398 = (state_19426[(10)]);
var inst_19400 = cljs.core.count.call(null,inst_19398);
var inst_19401 = (inst_19400 > (0));
var state_19426__$1 = state_19426;
if(cljs.core.truth_(inst_19401)){
var statearr_19435_19459 = state_19426__$1;
(statearr_19435_19459[(1)] = (4));

} else {
var statearr_19436_19460 = state_19426__$1;
(statearr_19436_19460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (11))){
var inst_19398 = (state_19426[(10)]);
var inst_19415 = (state_19426[(2)]);
var tmp19434 = inst_19398;
var inst_19398__$1 = tmp19434;
var state_19426__$1 = (function (){var statearr_19437 = state_19426;
(statearr_19437[(10)] = inst_19398__$1);

(statearr_19437[(11)] = inst_19415);

return statearr_19437;
})();
var statearr_19438_19461 = state_19426__$1;
(statearr_19438_19461[(2)] = null);

(statearr_19438_19461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (9))){
var inst_19406 = (state_19426[(7)]);
var state_19426__$1 = state_19426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19426__$1,(11),out,inst_19406);
} else {
if((state_val_19427 === (5))){
var inst_19420 = cljs.core.async.close_BANG_.call(null,out);
var state_19426__$1 = state_19426;
var statearr_19439_19462 = state_19426__$1;
(statearr_19439_19462[(2)] = inst_19420);

(statearr_19439_19462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (10))){
var inst_19418 = (state_19426[(2)]);
var state_19426__$1 = state_19426;
var statearr_19440_19463 = state_19426__$1;
(statearr_19440_19463[(2)] = inst_19418);

(statearr_19440_19463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19427 === (8))){
var inst_19398 = (state_19426[(10)]);
var inst_19406 = (state_19426[(7)]);
var inst_19407 = (state_19426[(9)]);
var inst_19405 = (state_19426[(8)]);
var inst_19410 = (function (){var cs = inst_19398;
var vec__19403 = inst_19405;
var v = inst_19406;
var c = inst_19407;
return ((function (cs,vec__19403,v,c,inst_19398,inst_19406,inst_19407,inst_19405,state_val_19427,c__10686__auto___19454,out){
return (function (p1__19393_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19393_SHARP_);
});
;})(cs,vec__19403,v,c,inst_19398,inst_19406,inst_19407,inst_19405,state_val_19427,c__10686__auto___19454,out))
})();
var inst_19411 = cljs.core.filterv.call(null,inst_19410,inst_19398);
var inst_19398__$1 = inst_19411;
var state_19426__$1 = (function (){var statearr_19441 = state_19426;
(statearr_19441[(10)] = inst_19398__$1);

return statearr_19441;
})();
var statearr_19442_19464 = state_19426__$1;
(statearr_19442_19464[(2)] = null);

(statearr_19442_19464[(1)] = (2));


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
});})(c__10686__auto___19454,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19454,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19446[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19446[(1)] = (1));

return statearr_19446;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19426){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19447){if((e19447 instanceof Object)){
var ex__10625__auto__ = e19447;
var statearr_19448_19465 = state_19426;
(statearr_19448_19465[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19466 = state_19426;
state_19426 = G__19466;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19454,out))
})();
var state__10688__auto__ = (function (){var statearr_19449 = f__10687__auto__.call(null);
(statearr_19449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19454);

return statearr_19449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19454,out))
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
var args19467 = [];
var len__6152__auto___19516 = arguments.length;
var i__6153__auto___19517 = (0);
while(true){
if((i__6153__auto___19517 < len__6152__auto___19516)){
args19467.push((arguments[i__6153__auto___19517]));

var G__19518 = (i__6153__auto___19517 + (1));
i__6153__auto___19517 = G__19518;
continue;
} else {
}
break;
}

var G__19469 = args19467.length;
switch (G__19469) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19467.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19520,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19520,out){
return (function (state_19493){
var state_val_19494 = (state_19493[(1)]);
if((state_val_19494 === (7))){
var inst_19475 = (state_19493[(7)]);
var inst_19475__$1 = (state_19493[(2)]);
var inst_19476 = (inst_19475__$1 == null);
var inst_19477 = cljs.core.not.call(null,inst_19476);
var state_19493__$1 = (function (){var statearr_19495 = state_19493;
(statearr_19495[(7)] = inst_19475__$1);

return statearr_19495;
})();
if(inst_19477){
var statearr_19496_19521 = state_19493__$1;
(statearr_19496_19521[(1)] = (8));

} else {
var statearr_19497_19522 = state_19493__$1;
(statearr_19497_19522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (1))){
var inst_19470 = (0);
var state_19493__$1 = (function (){var statearr_19498 = state_19493;
(statearr_19498[(8)] = inst_19470);

return statearr_19498;
})();
var statearr_19499_19523 = state_19493__$1;
(statearr_19499_19523[(2)] = null);

(statearr_19499_19523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (4))){
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19493__$1,(7),ch);
} else {
if((state_val_19494 === (6))){
var inst_19488 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19500_19524 = state_19493__$1;
(statearr_19500_19524[(2)] = inst_19488);

(statearr_19500_19524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (3))){
var inst_19490 = (state_19493[(2)]);
var inst_19491 = cljs.core.async.close_BANG_.call(null,out);
var state_19493__$1 = (function (){var statearr_19501 = state_19493;
(statearr_19501[(9)] = inst_19490);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19493__$1,inst_19491);
} else {
if((state_val_19494 === (2))){
var inst_19470 = (state_19493[(8)]);
var inst_19472 = (inst_19470 < n);
var state_19493__$1 = state_19493;
if(cljs.core.truth_(inst_19472)){
var statearr_19502_19525 = state_19493__$1;
(statearr_19502_19525[(1)] = (4));

} else {
var statearr_19503_19526 = state_19493__$1;
(statearr_19503_19526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (11))){
var inst_19470 = (state_19493[(8)]);
var inst_19480 = (state_19493[(2)]);
var inst_19481 = (inst_19470 + (1));
var inst_19470__$1 = inst_19481;
var state_19493__$1 = (function (){var statearr_19504 = state_19493;
(statearr_19504[(10)] = inst_19480);

(statearr_19504[(8)] = inst_19470__$1);

return statearr_19504;
})();
var statearr_19505_19527 = state_19493__$1;
(statearr_19505_19527[(2)] = null);

(statearr_19505_19527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (9))){
var state_19493__$1 = state_19493;
var statearr_19506_19528 = state_19493__$1;
(statearr_19506_19528[(2)] = null);

(statearr_19506_19528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (5))){
var state_19493__$1 = state_19493;
var statearr_19507_19529 = state_19493__$1;
(statearr_19507_19529[(2)] = null);

(statearr_19507_19529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (10))){
var inst_19485 = (state_19493[(2)]);
var state_19493__$1 = state_19493;
var statearr_19508_19530 = state_19493__$1;
(statearr_19508_19530[(2)] = inst_19485);

(statearr_19508_19530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19494 === (8))){
var inst_19475 = (state_19493[(7)]);
var state_19493__$1 = state_19493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19493__$1,(11),out,inst_19475);
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
});})(c__10686__auto___19520,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19520,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19512[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19512[(1)] = (1));

return statearr_19512;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19493){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19513){if((e19513 instanceof Object)){
var ex__10625__auto__ = e19513;
var statearr_19514_19531 = state_19493;
(statearr_19514_19531[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19532 = state_19493;
state_19493 = G__19532;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19520,out))
})();
var state__10688__auto__ = (function (){var statearr_19515 = f__10687__auto__.call(null);
(statearr_19515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19520);

return statearr_19515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19520,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19540 = (function (map_LT_,f,ch,meta19541){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19541 = meta19541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19542,meta19541__$1){
var self__ = this;
var _19542__$1 = this;
return (new cljs.core.async.t_cljs$core$async19540(self__.map_LT_,self__.f,self__.ch,meta19541__$1));
});

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19542){
var self__ = this;
var _19542__$1 = this;
return self__.meta19541;
});

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19543 = (function (map_LT_,f,ch,meta19541,_,fn1,meta19544){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19541 = meta19541;
this._ = _;
this.fn1 = fn1;
this.meta19544 = meta19544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19545,meta19544__$1){
var self__ = this;
var _19545__$1 = this;
return (new cljs.core.async.t_cljs$core$async19543(self__.map_LT_,self__.f,self__.ch,self__.meta19541,self__._,self__.fn1,meta19544__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19545){
var self__ = this;
var _19545__$1 = this;
return self__.meta19544;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19533_SHARP_){
return f1.call(null,(((p1__19533_SHARP_ == null))?null:self__.f.call(null,p1__19533_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19543.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19541","meta19541",-1595572354,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19540","cljs.core.async/t_cljs$core$async19540",658945702,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19544","meta19544",363783224,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19543";

cljs.core.async.t_cljs$core$async19543.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19543");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19543 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19543(map_LT___$1,f__$1,ch__$1,meta19541__$1,___$2,fn1__$1,meta19544){
return (new cljs.core.async.t_cljs$core$async19543(map_LT___$1,f__$1,ch__$1,meta19541__$1,___$2,fn1__$1,meta19544));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19543(self__.map_LT_,self__.f,self__.ch,self__.meta19541,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19541","meta19541",-1595572354,null)], null);
});

cljs.core.async.t_cljs$core$async19540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19540";

cljs.core.async.t_cljs$core$async19540.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19540");
});

cljs.core.async.__GT_t_cljs$core$async19540 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19540(map_LT___$1,f__$1,ch__$1,meta19541){
return (new cljs.core.async.t_cljs$core$async19540(map_LT___$1,f__$1,ch__$1,meta19541));
});

}

return (new cljs.core.async.t_cljs$core$async19540(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19549 = (function (map_GT_,f,ch,meta19550){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19550 = meta19550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19551,meta19550__$1){
var self__ = this;
var _19551__$1 = this;
return (new cljs.core.async.t_cljs$core$async19549(self__.map_GT_,self__.f,self__.ch,meta19550__$1));
});

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19551){
var self__ = this;
var _19551__$1 = this;
return self__.meta19550;
});

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19550","meta19550",1512735768,null)], null);
});

cljs.core.async.t_cljs$core$async19549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19549";

cljs.core.async.t_cljs$core$async19549.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19549");
});

cljs.core.async.__GT_t_cljs$core$async19549 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19549(map_GT___$1,f__$1,ch__$1,meta19550){
return (new cljs.core.async.t_cljs$core$async19549(map_GT___$1,f__$1,ch__$1,meta19550));
});

}

return (new cljs.core.async.t_cljs$core$async19549(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19555 = (function (filter_GT_,p,ch,meta19556){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19556 = meta19556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19557,meta19556__$1){
var self__ = this;
var _19557__$1 = this;
return (new cljs.core.async.t_cljs$core$async19555(self__.filter_GT_,self__.p,self__.ch,meta19556__$1));
});

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19557){
var self__ = this;
var _19557__$1 = this;
return self__.meta19556;
});

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async19555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19556","meta19556",-1790235977,null)], null);
});

cljs.core.async.t_cljs$core$async19555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19555";

cljs.core.async.t_cljs$core$async19555.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async19555");
});

cljs.core.async.__GT_t_cljs$core$async19555 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19555(filter_GT___$1,p__$1,ch__$1,meta19556){
return (new cljs.core.async.t_cljs$core$async19555(filter_GT___$1,p__$1,ch__$1,meta19556));
});

}

return (new cljs.core.async.t_cljs$core$async19555(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19558 = [];
var len__6152__auto___19602 = arguments.length;
var i__6153__auto___19603 = (0);
while(true){
if((i__6153__auto___19603 < len__6152__auto___19602)){
args19558.push((arguments[i__6153__auto___19603]));

var G__19604 = (i__6153__auto___19603 + (1));
i__6153__auto___19603 = G__19604;
continue;
} else {
}
break;
}

var G__19560 = args19558.length;
switch (G__19560) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19558.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19606,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19606,out){
return (function (state_19581){
var state_val_19582 = (state_19581[(1)]);
if((state_val_19582 === (7))){
var inst_19577 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19583_19607 = state_19581__$1;
(statearr_19583_19607[(2)] = inst_19577);

(statearr_19583_19607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (1))){
var state_19581__$1 = state_19581;
var statearr_19584_19608 = state_19581__$1;
(statearr_19584_19608[(2)] = null);

(statearr_19584_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (4))){
var inst_19563 = (state_19581[(7)]);
var inst_19563__$1 = (state_19581[(2)]);
var inst_19564 = (inst_19563__$1 == null);
var state_19581__$1 = (function (){var statearr_19585 = state_19581;
(statearr_19585[(7)] = inst_19563__$1);

return statearr_19585;
})();
if(cljs.core.truth_(inst_19564)){
var statearr_19586_19609 = state_19581__$1;
(statearr_19586_19609[(1)] = (5));

} else {
var statearr_19587_19610 = state_19581__$1;
(statearr_19587_19610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (6))){
var inst_19563 = (state_19581[(7)]);
var inst_19568 = p.call(null,inst_19563);
var state_19581__$1 = state_19581;
if(cljs.core.truth_(inst_19568)){
var statearr_19588_19611 = state_19581__$1;
(statearr_19588_19611[(1)] = (8));

} else {
var statearr_19589_19612 = state_19581__$1;
(statearr_19589_19612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (3))){
var inst_19579 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19581__$1,inst_19579);
} else {
if((state_val_19582 === (2))){
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19581__$1,(4),ch);
} else {
if((state_val_19582 === (11))){
var inst_19571 = (state_19581[(2)]);
var state_19581__$1 = state_19581;
var statearr_19590_19613 = state_19581__$1;
(statearr_19590_19613[(2)] = inst_19571);

(statearr_19590_19613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (9))){
var state_19581__$1 = state_19581;
var statearr_19591_19614 = state_19581__$1;
(statearr_19591_19614[(2)] = null);

(statearr_19591_19614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (5))){
var inst_19566 = cljs.core.async.close_BANG_.call(null,out);
var state_19581__$1 = state_19581;
var statearr_19592_19615 = state_19581__$1;
(statearr_19592_19615[(2)] = inst_19566);

(statearr_19592_19615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (10))){
var inst_19574 = (state_19581[(2)]);
var state_19581__$1 = (function (){var statearr_19593 = state_19581;
(statearr_19593[(8)] = inst_19574);

return statearr_19593;
})();
var statearr_19594_19616 = state_19581__$1;
(statearr_19594_19616[(2)] = null);

(statearr_19594_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19582 === (8))){
var inst_19563 = (state_19581[(7)]);
var state_19581__$1 = state_19581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19581__$1,(11),out,inst_19563);
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
});})(c__10686__auto___19606,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19606,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19598 = [null,null,null,null,null,null,null,null,null];
(statearr_19598[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19598[(1)] = (1));

return statearr_19598;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19581){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19599){if((e19599 instanceof Object)){
var ex__10625__auto__ = e19599;
var statearr_19600_19617 = state_19581;
(statearr_19600_19617[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19618 = state_19581;
state_19581 = G__19618;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19606,out))
})();
var state__10688__auto__ = (function (){var statearr_19601 = f__10687__auto__.call(null);
(statearr_19601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19606);

return statearr_19601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19606,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19619 = [];
var len__6152__auto___19622 = arguments.length;
var i__6153__auto___19623 = (0);
while(true){
if((i__6153__auto___19623 < len__6152__auto___19622)){
args19619.push((arguments[i__6153__auto___19623]));

var G__19624 = (i__6153__auto___19623 + (1));
i__6153__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var G__19621 = args19619.length;
switch (G__19621) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19619.length)].join('')));

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
return (function (state_19791){
var state_val_19792 = (state_19791[(1)]);
if((state_val_19792 === (7))){
var inst_19787 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
var statearr_19793_19834 = state_19791__$1;
(statearr_19793_19834[(2)] = inst_19787);

(statearr_19793_19834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (20))){
var inst_19757 = (state_19791[(7)]);
var inst_19768 = (state_19791[(2)]);
var inst_19769 = cljs.core.next.call(null,inst_19757);
var inst_19743 = inst_19769;
var inst_19744 = null;
var inst_19745 = (0);
var inst_19746 = (0);
var state_19791__$1 = (function (){var statearr_19794 = state_19791;
(statearr_19794[(8)] = inst_19745);

(statearr_19794[(9)] = inst_19768);

(statearr_19794[(10)] = inst_19744);

(statearr_19794[(11)] = inst_19743);

(statearr_19794[(12)] = inst_19746);

return statearr_19794;
})();
var statearr_19795_19835 = state_19791__$1;
(statearr_19795_19835[(2)] = null);

(statearr_19795_19835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (1))){
var state_19791__$1 = state_19791;
var statearr_19796_19836 = state_19791__$1;
(statearr_19796_19836[(2)] = null);

(statearr_19796_19836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (4))){
var inst_19732 = (state_19791[(13)]);
var inst_19732__$1 = (state_19791[(2)]);
var inst_19733 = (inst_19732__$1 == null);
var state_19791__$1 = (function (){var statearr_19797 = state_19791;
(statearr_19797[(13)] = inst_19732__$1);

return statearr_19797;
})();
if(cljs.core.truth_(inst_19733)){
var statearr_19798_19837 = state_19791__$1;
(statearr_19798_19837[(1)] = (5));

} else {
var statearr_19799_19838 = state_19791__$1;
(statearr_19799_19838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (15))){
var state_19791__$1 = state_19791;
var statearr_19803_19839 = state_19791__$1;
(statearr_19803_19839[(2)] = null);

(statearr_19803_19839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (21))){
var state_19791__$1 = state_19791;
var statearr_19804_19840 = state_19791__$1;
(statearr_19804_19840[(2)] = null);

(statearr_19804_19840[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (13))){
var inst_19745 = (state_19791[(8)]);
var inst_19744 = (state_19791[(10)]);
var inst_19743 = (state_19791[(11)]);
var inst_19746 = (state_19791[(12)]);
var inst_19753 = (state_19791[(2)]);
var inst_19754 = (inst_19746 + (1));
var tmp19800 = inst_19745;
var tmp19801 = inst_19744;
var tmp19802 = inst_19743;
var inst_19743__$1 = tmp19802;
var inst_19744__$1 = tmp19801;
var inst_19745__$1 = tmp19800;
var inst_19746__$1 = inst_19754;
var state_19791__$1 = (function (){var statearr_19805 = state_19791;
(statearr_19805[(8)] = inst_19745__$1);

(statearr_19805[(10)] = inst_19744__$1);

(statearr_19805[(14)] = inst_19753);

(statearr_19805[(11)] = inst_19743__$1);

(statearr_19805[(12)] = inst_19746__$1);

return statearr_19805;
})();
var statearr_19806_19841 = state_19791__$1;
(statearr_19806_19841[(2)] = null);

(statearr_19806_19841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (22))){
var state_19791__$1 = state_19791;
var statearr_19807_19842 = state_19791__$1;
(statearr_19807_19842[(2)] = null);

(statearr_19807_19842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (6))){
var inst_19732 = (state_19791[(13)]);
var inst_19741 = f.call(null,inst_19732);
var inst_19742 = cljs.core.seq.call(null,inst_19741);
var inst_19743 = inst_19742;
var inst_19744 = null;
var inst_19745 = (0);
var inst_19746 = (0);
var state_19791__$1 = (function (){var statearr_19808 = state_19791;
(statearr_19808[(8)] = inst_19745);

(statearr_19808[(10)] = inst_19744);

(statearr_19808[(11)] = inst_19743);

(statearr_19808[(12)] = inst_19746);

return statearr_19808;
})();
var statearr_19809_19843 = state_19791__$1;
(statearr_19809_19843[(2)] = null);

(statearr_19809_19843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (17))){
var inst_19757 = (state_19791[(7)]);
var inst_19761 = cljs.core.chunk_first.call(null,inst_19757);
var inst_19762 = cljs.core.chunk_rest.call(null,inst_19757);
var inst_19763 = cljs.core.count.call(null,inst_19761);
var inst_19743 = inst_19762;
var inst_19744 = inst_19761;
var inst_19745 = inst_19763;
var inst_19746 = (0);
var state_19791__$1 = (function (){var statearr_19810 = state_19791;
(statearr_19810[(8)] = inst_19745);

(statearr_19810[(10)] = inst_19744);

(statearr_19810[(11)] = inst_19743);

(statearr_19810[(12)] = inst_19746);

return statearr_19810;
})();
var statearr_19811_19844 = state_19791__$1;
(statearr_19811_19844[(2)] = null);

(statearr_19811_19844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (3))){
var inst_19789 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19791__$1,inst_19789);
} else {
if((state_val_19792 === (12))){
var inst_19777 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
var statearr_19812_19845 = state_19791__$1;
(statearr_19812_19845[(2)] = inst_19777);

(statearr_19812_19845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (2))){
var state_19791__$1 = state_19791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19791__$1,(4),in$);
} else {
if((state_val_19792 === (23))){
var inst_19785 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
var statearr_19813_19846 = state_19791__$1;
(statearr_19813_19846[(2)] = inst_19785);

(statearr_19813_19846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (19))){
var inst_19772 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
var statearr_19814_19847 = state_19791__$1;
(statearr_19814_19847[(2)] = inst_19772);

(statearr_19814_19847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (11))){
var inst_19757 = (state_19791[(7)]);
var inst_19743 = (state_19791[(11)]);
var inst_19757__$1 = cljs.core.seq.call(null,inst_19743);
var state_19791__$1 = (function (){var statearr_19815 = state_19791;
(statearr_19815[(7)] = inst_19757__$1);

return statearr_19815;
})();
if(inst_19757__$1){
var statearr_19816_19848 = state_19791__$1;
(statearr_19816_19848[(1)] = (14));

} else {
var statearr_19817_19849 = state_19791__$1;
(statearr_19817_19849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (9))){
var inst_19779 = (state_19791[(2)]);
var inst_19780 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19791__$1 = (function (){var statearr_19818 = state_19791;
(statearr_19818[(15)] = inst_19779);

return statearr_19818;
})();
if(cljs.core.truth_(inst_19780)){
var statearr_19819_19850 = state_19791__$1;
(statearr_19819_19850[(1)] = (21));

} else {
var statearr_19820_19851 = state_19791__$1;
(statearr_19820_19851[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (5))){
var inst_19735 = cljs.core.async.close_BANG_.call(null,out);
var state_19791__$1 = state_19791;
var statearr_19821_19852 = state_19791__$1;
(statearr_19821_19852[(2)] = inst_19735);

(statearr_19821_19852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (14))){
var inst_19757 = (state_19791[(7)]);
var inst_19759 = cljs.core.chunked_seq_QMARK_.call(null,inst_19757);
var state_19791__$1 = state_19791;
if(inst_19759){
var statearr_19822_19853 = state_19791__$1;
(statearr_19822_19853[(1)] = (17));

} else {
var statearr_19823_19854 = state_19791__$1;
(statearr_19823_19854[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (16))){
var inst_19775 = (state_19791[(2)]);
var state_19791__$1 = state_19791;
var statearr_19824_19855 = state_19791__$1;
(statearr_19824_19855[(2)] = inst_19775);

(statearr_19824_19855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19792 === (10))){
var inst_19744 = (state_19791[(10)]);
var inst_19746 = (state_19791[(12)]);
var inst_19751 = cljs.core._nth.call(null,inst_19744,inst_19746);
var state_19791__$1 = state_19791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19791__$1,(13),out,inst_19751);
} else {
if((state_val_19792 === (18))){
var inst_19757 = (state_19791[(7)]);
var inst_19766 = cljs.core.first.call(null,inst_19757);
var state_19791__$1 = state_19791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19791__$1,(20),out,inst_19766);
} else {
if((state_val_19792 === (8))){
var inst_19745 = (state_19791[(8)]);
var inst_19746 = (state_19791[(12)]);
var inst_19748 = (inst_19746 < inst_19745);
var inst_19749 = inst_19748;
var state_19791__$1 = state_19791;
if(cljs.core.truth_(inst_19749)){
var statearr_19825_19856 = state_19791__$1;
(statearr_19825_19856[(1)] = (10));

} else {
var statearr_19826_19857 = state_19791__$1;
(statearr_19826_19857[(1)] = (11));

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
var statearr_19830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19830[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__);

(statearr_19830[(1)] = (1));

return statearr_19830;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1 = (function (state_19791){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19831){if((e19831 instanceof Object)){
var ex__10625__auto__ = e19831;
var statearr_19832_19858 = state_19791;
(statearr_19832_19858[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19859 = state_19791;
state_19791 = G__19859;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__ = function(state_19791){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1.call(this,state_19791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10622__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto__))
})();
var state__10688__auto__ = (function (){var statearr_19833 = f__10687__auto__.call(null);
(statearr_19833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto__);

return statearr_19833;
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19860.length)].join('')));

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
var args19867 = [];
var len__6152__auto___19870 = arguments.length;
var i__6153__auto___19871 = (0);
while(true){
if((i__6153__auto___19871 < len__6152__auto___19870)){
args19867.push((arguments[i__6153__auto___19871]));

var G__19872 = (i__6153__auto___19871 + (1));
i__6153__auto___19871 = G__19872;
continue;
} else {
}
break;
}

var G__19869 = args19867.length;
switch (G__19869) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19867.length)].join('')));

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
var args19874 = [];
var len__6152__auto___19925 = arguments.length;
var i__6153__auto___19926 = (0);
while(true){
if((i__6153__auto___19926 < len__6152__auto___19925)){
args19874.push((arguments[i__6153__auto___19926]));

var G__19927 = (i__6153__auto___19926 + (1));
i__6153__auto___19926 = G__19927;
continue;
} else {
}
break;
}

var G__19876 = args19874.length;
switch (G__19876) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19874.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___19929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___19929,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___19929,out){
return (function (state_19900){
var state_val_19901 = (state_19900[(1)]);
if((state_val_19901 === (7))){
var inst_19895 = (state_19900[(2)]);
var state_19900__$1 = state_19900;
var statearr_19902_19930 = state_19900__$1;
(statearr_19902_19930[(2)] = inst_19895);

(statearr_19902_19930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (1))){
var inst_19877 = null;
var state_19900__$1 = (function (){var statearr_19903 = state_19900;
(statearr_19903[(7)] = inst_19877);

return statearr_19903;
})();
var statearr_19904_19931 = state_19900__$1;
(statearr_19904_19931[(2)] = null);

(statearr_19904_19931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (4))){
var inst_19880 = (state_19900[(8)]);
var inst_19880__$1 = (state_19900[(2)]);
var inst_19881 = (inst_19880__$1 == null);
var inst_19882 = cljs.core.not.call(null,inst_19881);
var state_19900__$1 = (function (){var statearr_19905 = state_19900;
(statearr_19905[(8)] = inst_19880__$1);

return statearr_19905;
})();
if(inst_19882){
var statearr_19906_19932 = state_19900__$1;
(statearr_19906_19932[(1)] = (5));

} else {
var statearr_19907_19933 = state_19900__$1;
(statearr_19907_19933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (6))){
var state_19900__$1 = state_19900;
var statearr_19908_19934 = state_19900__$1;
(statearr_19908_19934[(2)] = null);

(statearr_19908_19934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (3))){
var inst_19897 = (state_19900[(2)]);
var inst_19898 = cljs.core.async.close_BANG_.call(null,out);
var state_19900__$1 = (function (){var statearr_19909 = state_19900;
(statearr_19909[(9)] = inst_19897);

return statearr_19909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19900__$1,inst_19898);
} else {
if((state_val_19901 === (2))){
var state_19900__$1 = state_19900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19900__$1,(4),ch);
} else {
if((state_val_19901 === (11))){
var inst_19880 = (state_19900[(8)]);
var inst_19889 = (state_19900[(2)]);
var inst_19877 = inst_19880;
var state_19900__$1 = (function (){var statearr_19910 = state_19900;
(statearr_19910[(10)] = inst_19889);

(statearr_19910[(7)] = inst_19877);

return statearr_19910;
})();
var statearr_19911_19935 = state_19900__$1;
(statearr_19911_19935[(2)] = null);

(statearr_19911_19935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (9))){
var inst_19880 = (state_19900[(8)]);
var state_19900__$1 = state_19900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19900__$1,(11),out,inst_19880);
} else {
if((state_val_19901 === (5))){
var inst_19880 = (state_19900[(8)]);
var inst_19877 = (state_19900[(7)]);
var inst_19884 = cljs.core._EQ_.call(null,inst_19880,inst_19877);
var state_19900__$1 = state_19900;
if(inst_19884){
var statearr_19913_19936 = state_19900__$1;
(statearr_19913_19936[(1)] = (8));

} else {
var statearr_19914_19937 = state_19900__$1;
(statearr_19914_19937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (10))){
var inst_19892 = (state_19900[(2)]);
var state_19900__$1 = state_19900;
var statearr_19915_19938 = state_19900__$1;
(statearr_19915_19938[(2)] = inst_19892);

(statearr_19915_19938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19901 === (8))){
var inst_19877 = (state_19900[(7)]);
var tmp19912 = inst_19877;
var inst_19877__$1 = tmp19912;
var state_19900__$1 = (function (){var statearr_19916 = state_19900;
(statearr_19916[(7)] = inst_19877__$1);

return statearr_19916;
})();
var statearr_19917_19939 = state_19900__$1;
(statearr_19917_19939[(2)] = null);

(statearr_19917_19939[(1)] = (2));


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
});})(c__10686__auto___19929,out))
;
return ((function (switch__10621__auto__,c__10686__auto___19929,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_19921 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19921[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_19921[(1)] = (1));

return statearr_19921;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19900){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e19922){if((e19922 instanceof Object)){
var ex__10625__auto__ = e19922;
var statearr_19923_19940 = state_19900;
(statearr_19923_19940[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19941 = state_19900;
state_19900 = G__19941;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___19929,out))
})();
var state__10688__auto__ = (function (){var statearr_19924 = f__10687__auto__.call(null);
(statearr_19924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___19929);

return statearr_19924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___19929,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19942 = [];
var len__6152__auto___20012 = arguments.length;
var i__6153__auto___20013 = (0);
while(true){
if((i__6153__auto___20013 < len__6152__auto___20012)){
args19942.push((arguments[i__6153__auto___20013]));

var G__20014 = (i__6153__auto___20013 + (1));
i__6153__auto___20013 = G__20014;
continue;
} else {
}
break;
}

var G__19944 = args19942.length;
switch (G__19944) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19942.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___20016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___20016,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___20016,out){
return (function (state_19982){
var state_val_19983 = (state_19982[(1)]);
if((state_val_19983 === (7))){
var inst_19978 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19984_20017 = state_19982__$1;
(statearr_19984_20017[(2)] = inst_19978);

(statearr_19984_20017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (1))){
var inst_19945 = (new Array(n));
var inst_19946 = inst_19945;
var inst_19947 = (0);
var state_19982__$1 = (function (){var statearr_19985 = state_19982;
(statearr_19985[(7)] = inst_19947);

(statearr_19985[(8)] = inst_19946);

return statearr_19985;
})();
var statearr_19986_20018 = state_19982__$1;
(statearr_19986_20018[(2)] = null);

(statearr_19986_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (4))){
var inst_19950 = (state_19982[(9)]);
var inst_19950__$1 = (state_19982[(2)]);
var inst_19951 = (inst_19950__$1 == null);
var inst_19952 = cljs.core.not.call(null,inst_19951);
var state_19982__$1 = (function (){var statearr_19987 = state_19982;
(statearr_19987[(9)] = inst_19950__$1);

return statearr_19987;
})();
if(inst_19952){
var statearr_19988_20019 = state_19982__$1;
(statearr_19988_20019[(1)] = (5));

} else {
var statearr_19989_20020 = state_19982__$1;
(statearr_19989_20020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (15))){
var inst_19972 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_19990_20021 = state_19982__$1;
(statearr_19990_20021[(2)] = inst_19972);

(statearr_19990_20021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (13))){
var state_19982__$1 = state_19982;
var statearr_19991_20022 = state_19982__$1;
(statearr_19991_20022[(2)] = null);

(statearr_19991_20022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (6))){
var inst_19947 = (state_19982[(7)]);
var inst_19968 = (inst_19947 > (0));
var state_19982__$1 = state_19982;
if(cljs.core.truth_(inst_19968)){
var statearr_19992_20023 = state_19982__$1;
(statearr_19992_20023[(1)] = (12));

} else {
var statearr_19993_20024 = state_19982__$1;
(statearr_19993_20024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (3))){
var inst_19980 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19982__$1,inst_19980);
} else {
if((state_val_19983 === (12))){
var inst_19946 = (state_19982[(8)]);
var inst_19970 = cljs.core.vec.call(null,inst_19946);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19982__$1,(15),out,inst_19970);
} else {
if((state_val_19983 === (2))){
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19982__$1,(4),ch);
} else {
if((state_val_19983 === (11))){
var inst_19962 = (state_19982[(2)]);
var inst_19963 = (new Array(n));
var inst_19946 = inst_19963;
var inst_19947 = (0);
var state_19982__$1 = (function (){var statearr_19994 = state_19982;
(statearr_19994[(7)] = inst_19947);

(statearr_19994[(8)] = inst_19946);

(statearr_19994[(10)] = inst_19962);

return statearr_19994;
})();
var statearr_19995_20025 = state_19982__$1;
(statearr_19995_20025[(2)] = null);

(statearr_19995_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (9))){
var inst_19946 = (state_19982[(8)]);
var inst_19960 = cljs.core.vec.call(null,inst_19946);
var state_19982__$1 = state_19982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19982__$1,(11),out,inst_19960);
} else {
if((state_val_19983 === (5))){
var inst_19947 = (state_19982[(7)]);
var inst_19946 = (state_19982[(8)]);
var inst_19955 = (state_19982[(11)]);
var inst_19950 = (state_19982[(9)]);
var inst_19954 = (inst_19946[inst_19947] = inst_19950);
var inst_19955__$1 = (inst_19947 + (1));
var inst_19956 = (inst_19955__$1 < n);
var state_19982__$1 = (function (){var statearr_19996 = state_19982;
(statearr_19996[(12)] = inst_19954);

(statearr_19996[(11)] = inst_19955__$1);

return statearr_19996;
})();
if(cljs.core.truth_(inst_19956)){
var statearr_19997_20026 = state_19982__$1;
(statearr_19997_20026[(1)] = (8));

} else {
var statearr_19998_20027 = state_19982__$1;
(statearr_19998_20027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (14))){
var inst_19975 = (state_19982[(2)]);
var inst_19976 = cljs.core.async.close_BANG_.call(null,out);
var state_19982__$1 = (function (){var statearr_20000 = state_19982;
(statearr_20000[(13)] = inst_19975);

return statearr_20000;
})();
var statearr_20001_20028 = state_19982__$1;
(statearr_20001_20028[(2)] = inst_19976);

(statearr_20001_20028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (10))){
var inst_19966 = (state_19982[(2)]);
var state_19982__$1 = state_19982;
var statearr_20002_20029 = state_19982__$1;
(statearr_20002_20029[(2)] = inst_19966);

(statearr_20002_20029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19983 === (8))){
var inst_19946 = (state_19982[(8)]);
var inst_19955 = (state_19982[(11)]);
var tmp19999 = inst_19946;
var inst_19946__$1 = tmp19999;
var inst_19947 = inst_19955;
var state_19982__$1 = (function (){var statearr_20003 = state_19982;
(statearr_20003[(7)] = inst_19947);

(statearr_20003[(8)] = inst_19946__$1);

return statearr_20003;
})();
var statearr_20004_20030 = state_19982__$1;
(statearr_20004_20030[(2)] = null);

(statearr_20004_20030[(1)] = (2));


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
});})(c__10686__auto___20016,out))
;
return ((function (switch__10621__auto__,c__10686__auto___20016,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_20008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20008[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_20008[(1)] = (1));

return statearr_20008;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_19982){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_19982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e20009){if((e20009 instanceof Object)){
var ex__10625__auto__ = e20009;
var statearr_20010_20031 = state_19982;
(statearr_20010_20031[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20032 = state_19982;
state_19982 = G__20032;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_19982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_19982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___20016,out))
})();
var state__10688__auto__ = (function (){var statearr_20011 = f__10687__auto__.call(null);
(statearr_20011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___20016);

return statearr_20011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___20016,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args20033 = [];
var len__6152__auto___20107 = arguments.length;
var i__6153__auto___20108 = (0);
while(true){
if((i__6153__auto___20108 < len__6152__auto___20107)){
args20033.push((arguments[i__6153__auto___20108]));

var G__20109 = (i__6153__auto___20108 + (1));
i__6153__auto___20108 = G__20109;
continue;
} else {
}
break;
}

var G__20035 = args20033.length;
switch (G__20035) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20033.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10686__auto___20111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10686__auto___20111,out){
return (function (){
var f__10687__auto__ = (function (){var switch__10621__auto__ = ((function (c__10686__auto___20111,out){
return (function (state_20077){
var state_val_20078 = (state_20077[(1)]);
if((state_val_20078 === (7))){
var inst_20073 = (state_20077[(2)]);
var state_20077__$1 = state_20077;
var statearr_20079_20112 = state_20077__$1;
(statearr_20079_20112[(2)] = inst_20073);

(statearr_20079_20112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (1))){
var inst_20036 = [];
var inst_20037 = inst_20036;
var inst_20038 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20077__$1 = (function (){var statearr_20080 = state_20077;
(statearr_20080[(7)] = inst_20037);

(statearr_20080[(8)] = inst_20038);

return statearr_20080;
})();
var statearr_20081_20113 = state_20077__$1;
(statearr_20081_20113[(2)] = null);

(statearr_20081_20113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (4))){
var inst_20041 = (state_20077[(9)]);
var inst_20041__$1 = (state_20077[(2)]);
var inst_20042 = (inst_20041__$1 == null);
var inst_20043 = cljs.core.not.call(null,inst_20042);
var state_20077__$1 = (function (){var statearr_20082 = state_20077;
(statearr_20082[(9)] = inst_20041__$1);

return statearr_20082;
})();
if(inst_20043){
var statearr_20083_20114 = state_20077__$1;
(statearr_20083_20114[(1)] = (5));

} else {
var statearr_20084_20115 = state_20077__$1;
(statearr_20084_20115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (15))){
var inst_20067 = (state_20077[(2)]);
var state_20077__$1 = state_20077;
var statearr_20085_20116 = state_20077__$1;
(statearr_20085_20116[(2)] = inst_20067);

(statearr_20085_20116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (13))){
var state_20077__$1 = state_20077;
var statearr_20086_20117 = state_20077__$1;
(statearr_20086_20117[(2)] = null);

(statearr_20086_20117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (6))){
var inst_20037 = (state_20077[(7)]);
var inst_20062 = inst_20037.length;
var inst_20063 = (inst_20062 > (0));
var state_20077__$1 = state_20077;
if(cljs.core.truth_(inst_20063)){
var statearr_20087_20118 = state_20077__$1;
(statearr_20087_20118[(1)] = (12));

} else {
var statearr_20088_20119 = state_20077__$1;
(statearr_20088_20119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (3))){
var inst_20075 = (state_20077[(2)]);
var state_20077__$1 = state_20077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20077__$1,inst_20075);
} else {
if((state_val_20078 === (12))){
var inst_20037 = (state_20077[(7)]);
var inst_20065 = cljs.core.vec.call(null,inst_20037);
var state_20077__$1 = state_20077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20077__$1,(15),out,inst_20065);
} else {
if((state_val_20078 === (2))){
var state_20077__$1 = state_20077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20077__$1,(4),ch);
} else {
if((state_val_20078 === (11))){
var inst_20041 = (state_20077[(9)]);
var inst_20045 = (state_20077[(10)]);
var inst_20055 = (state_20077[(2)]);
var inst_20056 = [];
var inst_20057 = inst_20056.push(inst_20041);
var inst_20037 = inst_20056;
var inst_20038 = inst_20045;
var state_20077__$1 = (function (){var statearr_20089 = state_20077;
(statearr_20089[(7)] = inst_20037);

(statearr_20089[(11)] = inst_20057);

(statearr_20089[(12)] = inst_20055);

(statearr_20089[(8)] = inst_20038);

return statearr_20089;
})();
var statearr_20090_20120 = state_20077__$1;
(statearr_20090_20120[(2)] = null);

(statearr_20090_20120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (9))){
var inst_20037 = (state_20077[(7)]);
var inst_20053 = cljs.core.vec.call(null,inst_20037);
var state_20077__$1 = state_20077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20077__$1,(11),out,inst_20053);
} else {
if((state_val_20078 === (5))){
var inst_20041 = (state_20077[(9)]);
var inst_20045 = (state_20077[(10)]);
var inst_20038 = (state_20077[(8)]);
var inst_20045__$1 = f.call(null,inst_20041);
var inst_20046 = cljs.core._EQ_.call(null,inst_20045__$1,inst_20038);
var inst_20047 = cljs.core.keyword_identical_QMARK_.call(null,inst_20038,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20048 = (inst_20046) || (inst_20047);
var state_20077__$1 = (function (){var statearr_20091 = state_20077;
(statearr_20091[(10)] = inst_20045__$1);

return statearr_20091;
})();
if(cljs.core.truth_(inst_20048)){
var statearr_20092_20121 = state_20077__$1;
(statearr_20092_20121[(1)] = (8));

} else {
var statearr_20093_20122 = state_20077__$1;
(statearr_20093_20122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (14))){
var inst_20070 = (state_20077[(2)]);
var inst_20071 = cljs.core.async.close_BANG_.call(null,out);
var state_20077__$1 = (function (){var statearr_20095 = state_20077;
(statearr_20095[(13)] = inst_20070);

return statearr_20095;
})();
var statearr_20096_20123 = state_20077__$1;
(statearr_20096_20123[(2)] = inst_20071);

(statearr_20096_20123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (10))){
var inst_20060 = (state_20077[(2)]);
var state_20077__$1 = state_20077;
var statearr_20097_20124 = state_20077__$1;
(statearr_20097_20124[(2)] = inst_20060);

(statearr_20097_20124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20078 === (8))){
var inst_20037 = (state_20077[(7)]);
var inst_20041 = (state_20077[(9)]);
var inst_20045 = (state_20077[(10)]);
var inst_20050 = inst_20037.push(inst_20041);
var tmp20094 = inst_20037;
var inst_20037__$1 = tmp20094;
var inst_20038 = inst_20045;
var state_20077__$1 = (function (){var statearr_20098 = state_20077;
(statearr_20098[(7)] = inst_20037__$1);

(statearr_20098[(14)] = inst_20050);

(statearr_20098[(8)] = inst_20038);

return statearr_20098;
})();
var statearr_20099_20125 = state_20077__$1;
(statearr_20099_20125[(2)] = null);

(statearr_20099_20125[(1)] = (2));


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
});})(c__10686__auto___20111,out))
;
return ((function (switch__10621__auto__,c__10686__auto___20111,out){
return (function() {
var cljs$core$async$state_machine__10622__auto__ = null;
var cljs$core$async$state_machine__10622__auto____0 = (function (){
var statearr_20103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20103[(0)] = cljs$core$async$state_machine__10622__auto__);

(statearr_20103[(1)] = (1));

return statearr_20103;
});
var cljs$core$async$state_machine__10622__auto____1 = (function (state_20077){
while(true){
var ret_value__10623__auto__ = (function (){try{while(true){
var result__10624__auto__ = switch__10621__auto__.call(null,state_20077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10624__auto__;
}
break;
}
}catch (e20104){if((e20104 instanceof Object)){
var ex__10625__auto__ = e20104;
var statearr_20105_20126 = state_20077;
(statearr_20105_20126[(5)] = ex__10625__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10623__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20127 = state_20077;
state_20077 = G__20127;
continue;
} else {
return ret_value__10623__auto__;
}
break;
}
});
cljs$core$async$state_machine__10622__auto__ = function(state_20077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10622__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10622__auto____1.call(this,state_20077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10622__auto____0;
cljs$core$async$state_machine__10622__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10622__auto____1;
return cljs$core$async$state_machine__10622__auto__;
})()
;})(switch__10621__auto__,c__10686__auto___20111,out))
})();
var state__10688__auto__ = (function (){var statearr_20106 = f__10687__auto__.call(null);
(statearr_20106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10686__auto___20111);

return statearr_20106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10688__auto__);
});})(c__10686__auto___20111,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map