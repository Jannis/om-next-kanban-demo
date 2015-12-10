// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.users');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.reconciler');
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$users,(function (p__14118,key,_){
var map__14119 = p__14118;
var map__14119__$1 = ((((!((map__14119 == null)))?((((map__14119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14119):map__14119);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14119__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14119__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
}));
