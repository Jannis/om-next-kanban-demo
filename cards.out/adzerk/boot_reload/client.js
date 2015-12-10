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
adzerk.boot_reload.client.handle = (function (){var method_table__5899__auto__ = (function (){var G__23302 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23302) : cljs.core.atom.call(null,G__23302));
})();
var prefer_table__5900__auto__ = (function (){var G__23303 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23303) : cljs.core.atom.call(null,G__23303));
})();
var method_cache__5901__auto__ = (function (){var G__23304 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23304) : cljs.core.atom.call(null,G__23304));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__23305 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23305) : cljs.core.atom.call(null,G__23305));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("adzerk.boot-reload.client","handle"),((function (method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__){
return (function (msg,opts){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__,hierarchy__5903__auto__))
,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reload,(function (p__23306,opts){
var map__23307 = p__23306;
var map__23307__$1 = ((((!((map__23307 == null)))?((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23307):map__23307);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23307__$1,cljs.core.cst$kw$files);
return adzerk.boot_reload.reload.reload(files,opts);
}));
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$visual,(function (state,opts){
return adzerk.boot_reload.display.display(state,opts);
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__6051__auto__ = [];
var len__6044__auto___23313 = arguments.length;
var i__6045__auto___23314 = (0);
while(true){
if((i__6045__auto___23314 < len__6044__auto___23313)){
args__6051__auto__.push((arguments[i__6045__auto___23314]));

var G__23315 = (i__6045__auto___23314 + (1));
i__6045__auto___23314 = G__23315;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__23311){
var vec__23312 = p__23311;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23312,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_())){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
adzerk.boot_reload.client.patch_goog_base_BANG_();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,conn) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$opened,((function (conn,vec__23312,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$set_DASH_protocol,cljs.core.cst$kw$protocol,window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__23312,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$message,((function (conn,vec__23312,opts){
return (function (evt){
var msg = cljs.reader.read_string(evt.message);
return (adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2 ? adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2(msg,opts) : adzerk.boot_reload.client.handle.call(null,msg,opts));
});})(conn,vec__23312,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$closed,((function (conn,vec__23312,opts){
return (function (evt){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,null) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null));

return console.info("Reload websocket connection closed.");
});})(conn,vec__23312,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,((function (conn,vec__23312,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__23312,opts))
);

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(conn,url);
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq23309){
var G__23310 = cljs.core.first(seq23309);
var seq23309__$1 = cljs.core.next(seq23309);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__23310,seq23309__$1);
});
