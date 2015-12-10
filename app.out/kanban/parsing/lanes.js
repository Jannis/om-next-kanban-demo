// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$lanes,(function (p__14755,key,_){
var map__14756 = p__14755;
var map__14756__$1 = ((((!((map__14756 == null)))?((((map__14756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14756):map__14756);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__14759 = cards;
var G__14759__$1 = ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__14759,ref):G__14759);
return G__14759__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(from,cljs.core.cst$kw$cards),remove_STAR_,card),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$cards),kanban.parsing.lanes.add_to_cards,card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_move_DASH_card,(function (p__14760,_,p__14761){
var map__14762 = p__14760;
var map__14762__$1 = ((((!((map__14762 == null)))?((((map__14762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14762):map__14762);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14762__$1,cljs.core.cst$kw$state);
var map__14763 = p__14761;
var map__14763__$1 = ((((!((map__14763 == null)))?((((map__14763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14763):map__14763);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14763__$1,cljs.core.cst$kw$card);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14763__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14763__$1,cljs.core.cst$kw$to);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [card,from,to], null)], null),cljs.core.cst$kw$action,((function (map__14762,map__14762__$1,state,map__14763,map__14763__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,kanban.parsing.lanes.move_card,card,from,cljs.core.array_seq([to], 0));
});})(map__14762,map__14762__$1,state,map__14763,map__14763__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__14768 = kanban.parsing.cards.create_card(st);
var map__14768__$1 = ((((!((map__14768 == null)))?((((map__14768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14768):map__14768);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,cljs.core.cst$kw$card);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,cljs.core.cst$kw$state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lane,cljs.core.cst$kw$cards),kanban.parsing.lanes.add_to_cards,card),cljs.core.cst$kw$cards_SLASH_editing,card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_create_DASH_card,(function (p__14770,_,p__14771){
var map__14772 = p__14770;
var map__14772__$1 = ((((!((map__14772 == null)))?((((map__14772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14772):map__14772);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14772__$1,cljs.core.cst$kw$state);
var map__14773 = p__14771;
var map__14773__$1 = ((((!((map__14773 == null)))?((((map__14773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14773):map__14773);
var lane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14773__$1,cljs.core.cst$kw$lane);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lane,cljs.core.cst$kw$cards,cljs.core.cst$kw$cards_SLASH_editing], null)], null),cljs.core.cst$kw$action,((function (map__14772,map__14772__$1,state,map__14773,map__14773__$1,lane){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,kanban.parsing.lanes.create_card,lane);
});})(map__14772,map__14772__$1,state,map__14773,map__14773__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(kanban.parsing.cards.delete_card(st,card),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lane,cljs.core.cst$kw$cards),(function (p1__14777_SHARP_,p2__14776_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__14776_SHARP_], true),p1__14777_SHARP_);
}),card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_delete_DASH_card,(function (p__14778,_,p__14779){
var map__14780 = p__14778;
var map__14780__$1 = ((((!((map__14780 == null)))?((((map__14780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14780):map__14780);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14780__$1,cljs.core.cst$kw$state);
var map__14781 = p__14779;
var map__14781__$1 = ((((!((map__14781 == null)))?((((map__14781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14781):map__14781);
var lane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,cljs.core.cst$kw$lane);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,cljs.core.cst$kw$card);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lane,card], null)], null),cljs.core.cst$kw$action,((function (map__14780,map__14780__$1,state,map__14781,map__14781__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__14780,map__14780__$1,state,map__14781,map__14781__$1,lane,card))
], null);
}));
