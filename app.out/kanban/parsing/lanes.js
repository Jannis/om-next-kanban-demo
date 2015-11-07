// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(lane,cljs.core.cst$kw$cards,(function (p1__13632_SHARP_){
return kanban.parsing.cards.resolve_cards(st,p1__13632_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards(st,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13633_SHARP_){
return kanban.parsing.lanes.get_lane(st,p1__13633_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13634_SHARP_){
return kanban.parsing.lanes.get_lane(st,p1__13634_SHARP_);
}),refs));
});
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$lanes,(function (p__13635,key,_){
var map__13636 = p__13635;
var map__13636__$1 = ((((!((map__13636 == null)))?((((map__13636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13636):map__13636);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13636__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.lanes.get_lanes(st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__13639 = cards;
var G__13639__$1 = ((cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13639,ref):G__13639);
return G__13639__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(from,cljs.core.cst$kw$cards),remove_STAR_,card),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$cards),kanban.parsing.lanes.add_to_cards,card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_move_DASH_card,(function (p__13640,_,p__13641){
var map__13642 = p__13640;
var map__13642__$1 = ((((!((map__13642 == null)))?((((map__13642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13642):map__13642);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$state);
var map__13643 = p__13641;
var map__13643__$1 = ((((!((map__13643 == null)))?((((map__13643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13643):map__13643);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13643__$1,cljs.core.cst$kw$card);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13643__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13643__$1,cljs.core.cst$kw$to);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lanes,cljs.core.cst$kw$cards], null),cljs.core.cst$kw$action,((function (map__13642,map__13642__$1,state,map__13643,map__13643__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,kanban.parsing.lanes.move_card,card,from,cljs.core.array_seq([to], 0));
});})(map__13642,map__13642__$1,state,map__13643,map__13643__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__13648 = kanban.parsing.cards.create_card(st);
var map__13648__$1 = ((((!((map__13648 == null)))?((((map__13648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13648):map__13648);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13648__$1,cljs.core.cst$kw$card);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13648__$1,cljs.core.cst$kw$state);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lane,cljs.core.cst$kw$cards),kanban.parsing.lanes.add_to_cards,card),cljs.core.cst$kw$cards_SLASH_editing,card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_create_DASH_card,(function (p__13650,_,p__13651){
var map__13652 = p__13650;
var map__13652__$1 = ((((!((map__13652 == null)))?((((map__13652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13652):map__13652);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13652__$1,cljs.core.cst$kw$state);
var map__13653 = p__13651;
var map__13653__$1 = ((((!((map__13653 == null)))?((((map__13653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13653):map__13653);
var lane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13653__$1,cljs.core.cst$kw$lane);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lanes,cljs.core.cst$kw$cards,cljs.core.cst$kw$cards_SLASH_editing], null),cljs.core.cst$kw$action,((function (map__13652,map__13652__$1,state,map__13653,map__13653__$1,lane){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,kanban.parsing.lanes.create_card,lane);
});})(map__13652,map__13652__$1,state,map__13653,map__13653__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(kanban.parsing.cards.delete_card(st,card),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lane,cljs.core.cst$kw$cards),(function (p1__13657_SHARP_,p2__13656_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__13656_SHARP_], true),p1__13657_SHARP_);
}),card);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$lanes_SLASH_delete_DASH_card,(function (p__13658,_,p__13659){
var map__13660 = p__13658;
var map__13660__$1 = ((((!((map__13660 == null)))?((((map__13660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13660):map__13660);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,cljs.core.cst$kw$state);
var map__13661 = p__13659;
var map__13661__$1 = ((((!((map__13661 == null)))?((((map__13661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13661):map__13661);
var lane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$lane);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,cljs.core.cst$kw$card);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lanes,cljs.core.cst$kw$cards], null),cljs.core.cst$kw$action,((function (map__13660,map__13660__$1,state,map__13661,map__13661__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__13660,map__13660__$1,state,map__13661,map__13661__$1,lane,card))
], null);
}));
