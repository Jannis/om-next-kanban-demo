// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,ref),cljs.core.cst$kw$assignees,(function (p1__13207_SHARP_){
return kanban.parsing.users.resolve_users(st,p1__13207_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13208_SHARP_){
return kanban.parsing.cards.get_card(st,p1__13208_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13209_SHARP_){
return kanban.parsing.cards.get_card(st,p1__13209_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,kanban.parsing.cards.get_cards(st,cljs.core.cst$kw$cards)))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$text,"",cljs.core.cst$kw$assignees,cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,id], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$card,ref,cljs.core.cst$kw$state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(st,ref,card),cljs.core.cst$kw$cards,cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(st,cljs.core.cst$kw$cards,(function (p1__13211_SHARP_,p2__13210_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__13210_SHARP_], true),p1__13211_SHARP_);
}),ref),cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.dissoc,cljs.core.second(ref));
});
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards,(function (p__13212,key,_){
var map__13213 = p__13212;
var map__13213__$1 = ((((!((map__13213 == null)))?((((map__13213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13213):map__13213);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13213__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.cards.get_cards(st,key)], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards_SLASH_dragged,(function (p__13215,key,_){
var map__13216 = p__13215;
var map__13216__$1 = ((((!((map__13216 == null)))?((((map__13216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13216):map__13216);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13216__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key)], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_drag,(function (p__13218,_,params){
var map__13219 = p__13218;
var map__13219__$1 = ((((!((map__13219 == null)))?((((map__13219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13219):map__13219);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13219__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards_SLASH_dragged], null),cljs.core.cst$kw$action,((function (map__13219,map__13219__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_(params))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_dragged,params);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_dragged,null);
}
});})(map__13219,map__13219__$1,state))
], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards_SLASH_editing,(function (p__13221,key,_){
var map__13222 = p__13221;
var map__13222__$1 = ((((!((map__13222 == null)))?((((map__13222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13222):map__13222);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13222__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.cards.get_card(st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_edit,(function (p__13224,_,p__13225){
var map__13226 = p__13224;
var map__13226__$1 = ((((!((map__13226 == null)))?((((map__13226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13226):map__13226);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13226__$1,cljs.core.cst$kw$state);
var map__13227 = p__13225;
var map__13227__$1 = ((((!((map__13227 == null)))?((((map__13227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13227):map__13227);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13227__$1,cljs.core.cst$kw$card);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards_SLASH_editing], null),cljs.core.cst$kw$action,((function (map__13226,map__13226__$1,state,map__13227,map__13227__$1,card){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_editing,card);
});})(map__13226,map__13226__$1,state,map__13227,map__13227__$1,card))
], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_update,(function (p__13231,_,p__13232){
var map__13233 = p__13231;
var map__13233__$1 = ((((!((map__13233 == null)))?((((map__13233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13233):map__13233);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,cljs.core.cst$kw$state);
var map__13234 = p__13232;
var map__13234__$1 = ((((!((map__13234 == null)))?((((map__13234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13234):map__13234);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13234__$1,cljs.core.cst$kw$card);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13234__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13233,map__13233__$1,state,map__13234,map__13234__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,card,((function (map__13233,map__13233__$1,state,map__13234,map__13234__$1,card,data){
return (function (p1__13230_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__13230_SHARP_,data], 0));
});})(map__13233,map__13233__$1,state,map__13234,map__13234__$1,card,data))
);
});})(map__13233,map__13233__$1,state,map__13234,map__13234__$1,card,data))
], null);
}));
