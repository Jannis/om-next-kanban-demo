// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_reload.connection');
goog.require('cljs.core');
goog.require('clojure.browser.net');
adzerk.boot_reload.connection.ws_conn = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
adzerk.boot_reload.connection.alive_QMARK_ = (function adzerk$boot_reload$connection$alive_QMARK_(){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(adzerk.boot_reload.connection.ws_conn) : cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn)) == null));
});
adzerk.boot_reload.connection.send_message_BANG_ = (function adzerk$boot_reload$connection$send_message_BANG_(message){
var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(adzerk.boot_reload.connection.ws_conn) : cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn));
if(cljs.core.truth_(temp__4425__auto__)){
var conn = temp__4425__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0)));
} else {
return null;
}
});
