// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__17573_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__17573_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__17574_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__17574_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__17575_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__17575_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__17576,key,_){
var map__17577 = p__17576;
var map__17577__$1 = ((((!((map__17577 == null)))?((((map__17577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17577):map__17577);
var state = cljs.core.get.call(null,map__17577__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__17580 = cards;
var G__17580__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.call(null,G__17580,ref):G__17580);
return G__17580__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__17581,_,p__17582){
var map__17583 = p__17581;
var map__17583__$1 = ((((!((map__17583 == null)))?((((map__17583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17583):map__17583);
var state = cljs.core.get.call(null,map__17583__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17584 = p__17582;
var map__17584__$1 = ((((!((map__17584 == null)))?((((map__17584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17584):map__17584);
var card = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__17583,map__17583__$1,state,map__17584,map__17584__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__17583,map__17583__$1,state,map__17584,map__17584__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__17589 = kanban.parsing.cards.create_card.call(null,st);
var map__17589__$1 = ((((!((map__17589 == null)))?((((map__17589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17589):map__17589);
var card = cljs.core.get.call(null,map__17589__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__17589__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__17591,_,p__17592){
var map__17593 = p__17591;
var map__17593__$1 = ((((!((map__17593 == null)))?((((map__17593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17593):map__17593);
var state = cljs.core.get.call(null,map__17593__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17594 = p__17592;
var map__17594__$1 = ((((!((map__17594 == null)))?((((map__17594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17594):map__17594);
var lane = cljs.core.get.call(null,map__17594__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__17593,map__17593__$1,state,map__17594,map__17594__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__17593,map__17593__$1,state,map__17594,map__17594__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__17598_SHARP_,p2__17597_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__17597_SHARP_], true),p1__17598_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__17599,_,p__17600){
var map__17601 = p__17599;
var map__17601__$1 = ((((!((map__17601 == null)))?((((map__17601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17601):map__17601);
var state = cljs.core.get.call(null,map__17601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17602 = p__17600;
var map__17602__$1 = ((((!((map__17602 == null)))?((((map__17602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17602):map__17602);
var lane = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__17602__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__17601,map__17601__$1,state,map__17602,map__17602__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__17601,map__17601__$1,state,map__17602,map__17602__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map