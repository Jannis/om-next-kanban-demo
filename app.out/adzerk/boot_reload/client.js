// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.connection');
goog.require('adzerk.boot_reload.reload');
goog.require('adzerk.boot_reload.display');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
if(typeof adzerk.boot_reload.client.handle !== 'undefined'){
} else {
adzerk.boot_reload.client.handle = (function (){var method_table__5899__auto__ = (function (){var G__14264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14264) : cljs.core.atom.call(null,G__14264));
})();
var prefer_table__5900__auto__ = (function (){var G__14265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14265) : cljs.core.atom.call(null,G__14265));
})();
var method_cache__5901__auto__ = (function (){var G__14266 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14266) : cljs.core.atom.call(null,G__14266));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__14267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14267) : cljs.core.atom.call(null,G__14267));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("adzerk.boot-reload.client","handle"),((function (method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__){
return (function (msg,opts){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__))
,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reload,(function (p__14268,opts){
var map__14269 = p__14268;
var map__14269__$1 = ((((!((map__14269 == null)))?((((map__14269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14269):map__14269);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14269__$1,cljs.core.cst$kw$files);
return adzerk.boot_reload.reload.reload(files,opts);
}));
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$visual,(function (state,opts){
return adzerk.boot_reload.display.display(state,opts);
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__6051__auto__ = [];
var len__6044__auto___14275 = arguments.length;
var i__6045__auto___14276 = (0);
while(true){
if((i__6045__auto___14276 < len__6044__auto___14275)){
args__6051__auto__.push((arguments[i__6045__auto___14276]));

var G__14277 = (i__6045__auto___14276 + (1));
i__6045__auto___14276 = G__14277;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__14273){
var vec__14274 = p__14273;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_())){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
adzerk.boot_reload.client.patch_goog_base_BANG_();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,conn) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$opened,((function (conn,vec__14274,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$set_DASH_protocol,cljs.core.cst$kw$protocol,window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__14274,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$message,((function (conn,vec__14274,opts){
return (function (evt){
var msg = cljs.reader.read_string(evt.message);
return (adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2 ? adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2(msg,opts) : adzerk.boot_reload.client.handle.call(null,msg,opts));
});})(conn,vec__14274,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$closed,((function (conn,vec__14274,opts){
return (function (evt){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,null) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null));

return console.info("Reload websocket connection closed.");
});})(conn,vec__14274,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,((function (conn,vec__14274,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__14274,opts))
);

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(conn,url);
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq14271){
var G__14272 = cljs.core.first(seq14271);
var seq14271__$1 = cljs.core.next(seq14271);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__14272,seq14271__$1);
});
