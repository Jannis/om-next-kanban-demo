// Compiled by ClojureScript 1.7.145 {}
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
adzerk.boot_reload.client.handle = (function (){var method_table__6007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6011__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"adzerk.boot-reload.client","handle"),((function (method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__){
return (function (msg,opts){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"reload","reload",863702807),(function (p__8359,opts){
var map__8360 = p__8359;
var map__8360__$1 = ((((!((map__8360 == null)))?((((map__8360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8360):map__8360);
var files = cljs.core.get.call(null,map__8360__$1,new cljs.core.Keyword(null,"files","files",-472457450));
return adzerk.boot_reload.reload.reload.call(null,files,opts);
}));
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"visual","visual",942787224),(function (state,opts){
return adzerk.boot_reload.display.display.call(null,state,opts);
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__6159__auto__ = [];
var len__6152__auto___8366 = arguments.length;
var i__6153__auto___8367 = (0);
while(true){
if((i__6153__auto___8367 < len__6152__auto___8366)){
args__6159__auto__.push((arguments[i__6153__auto___8367]));

var G__8368 = (i__6153__auto___8367 + (1));
i__6153__auto___8367 = G__8368;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__8364){
var vec__8365 = p__8364;
var opts = cljs.core.nth.call(null,vec__8365,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_.call(null))){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__8365,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-protocol","set-protocol",1849530943),new cljs.core.Keyword(null,"protocol","protocol",652470118),window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__8365,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__8365,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
return adzerk.boot_reload.client.handle.call(null,msg,opts);
});})(conn,vec__8365,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__8365,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__8365,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__8365,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__8365,opts))
);

return clojure.browser.net.connect.call(null,conn,url);
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq8362){
var G__8363 = cljs.core.first.call(null,seq8362);
var seq8362__$1 = cljs.core.next.call(null,seq8362);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__8363,seq8362__$1);
});

//# sourceMappingURL=client.js.map