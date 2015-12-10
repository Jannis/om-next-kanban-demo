// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,cljs.core.cst$kw$cards),st)))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$text,"",cljs.core.cst$kw$assignees,cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,id], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$card,ref,cljs.core.cst$kw$state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(st,ref,card),cljs.core.cst$kw$cards,cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(st,cljs.core.cst$kw$cards,(function (p1__14286_SHARP_,p2__14285_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__14285_SHARP_], true),p1__14286_SHARP_);
}),ref),cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.dissoc,cljs.core.second(ref));
});
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards,(function (p__14287,key,_){
var map__14288 = p__14287;
var map__14288__$1 = ((((!((map__14288 == null)))?((((map__14288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14288):map__14288);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14288__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14288__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards_SLASH_dragged,(function (p__14290,key,_){
var map__14291 = p__14290;
var map__14291__$1 = ((((!((map__14291 == null)))?((((map__14291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14291):map__14291);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14291__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key)], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_drag,(function (p__14293,_,params){
var map__14294 = p__14293;
var map__14294__$1 = ((((!((map__14294 == null)))?((((map__14294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14294):map__14294);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14294__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards_SLASH_dragged], null)], null),cljs.core.cst$kw$action,((function (map__14294,map__14294__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_(params))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_dragged,params);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_dragged,null);
}
});})(map__14294,map__14294__$1,state))
], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$cards_SLASH_editing,(function (p__14296,key,_){
var map__14297 = p__14296;
var map__14297__$1 = ((((!((map__14297 == null)))?((((map__14297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14297):map__14297);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14297__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14297__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_edit,(function (p__14299,_,p__14300){
var map__14301 = p__14299;
var map__14301__$1 = ((((!((map__14301 == null)))?((((map__14301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14301):map__14301);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14301__$1,cljs.core.cst$kw$state);
var map__14302 = p__14300;
var map__14302__$1 = ((((!((map__14302 == null)))?((((map__14302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14302):map__14302);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14302__$1,cljs.core.cst$kw$card);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards_SLASH_editing], null)], null),cljs.core.cst$kw$action,((function (map__14301,map__14301__$1,state,map__14302,map__14302__$1,card){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$cards_SLASH_editing,card);
});})(map__14301,map__14301__$1,state,map__14302,map__14302__$1,card))
], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cards_SLASH_update,(function (p__14306,_,p__14307){
var map__14308 = p__14306;
var map__14308__$1 = ((((!((map__14308 == null)))?((((map__14308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14308):map__14308);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14308__$1,cljs.core.cst$kw$state);
var map__14309 = p__14307;
var map__14309__$1 = ((((!((map__14309 == null)))?((((map__14309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14309):map__14309);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14309__$1,cljs.core.cst$kw$card);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14309__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card], null)], null),cljs.core.cst$kw$action,((function (map__14308,map__14308__$1,state,map__14309,map__14309__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,card,((function (map__14308,map__14308__$1,state,map__14309,map__14309__$1,card,data){
return (function (p1__14305_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14305_SHARP_,data], 0));
});})(map__14308,map__14308__$1,state,map__14309,map__14309__$1,card,data))
);
});})(map__14308,map__14308__$1,state,map__14309,map__14309__$1,card,data))
], null);
}));
