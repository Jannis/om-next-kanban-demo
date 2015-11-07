// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.users');
goog.require('cljs.core');
goog.require('kanban.reconciler');
kanban.parsing.users.get_user = (function kanban$parsing$users$get_user(st,ref){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,ref);
});
kanban.parsing.users.get_users = (function kanban$parsing$users$get_users(st,key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13200_SHARP_){
return kanban.parsing.users.get_user(st,p1__13200_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key));
});
kanban.parsing.users.resolve_users = (function kanban$parsing$users$resolve_users(st,refs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13201_SHARP_){
return kanban.parsing.users.get_user(st,p1__13201_SHARP_);
}),refs));
});
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$users,(function (p__13202,key,_){
var map__13203 = p__13202;
var map__13203__$1 = ((((!((map__13203 == null)))?((((map__13203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13203):map__13203);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13203__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.users.get_users(st,key)], null);
}));
