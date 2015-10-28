// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__8267_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__8267_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8268_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__8268_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8269_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__8269_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__8270,key,_){
var map__8271 = p__8270;
var map__8271__$1 = ((((!((map__8271 == null)))?((((map__8271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8271):map__8271);
var state = cljs.core.get.call(null,map__8271__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__8274 = cards;
var G__8274__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.call(null,G__8274,ref):G__8274);
return G__8274__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__8275,_,p__8276){
var map__8277 = p__8275;
var map__8277__$1 = ((((!((map__8277 == null)))?((((map__8277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8277):map__8277);
var state = cljs.core.get.call(null,map__8277__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8278 = p__8276;
var map__8278__$1 = ((((!((map__8278 == null)))?((((map__8278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8278):map__8278);
var card = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8277,map__8277__$1,state,map__8278,map__8278__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__8277,map__8277__$1,state,map__8278,map__8278__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__8283 = kanban.parsing.cards.create_card.call(null,st);
var map__8283__$1 = ((((!((map__8283 == null)))?((((map__8283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8283):map__8283);
var card = cljs.core.get.call(null,map__8283__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__8283__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__8285,_,p__8286){
var map__8287 = p__8285;
var map__8287__$1 = ((((!((map__8287 == null)))?((((map__8287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8287):map__8287);
var state = cljs.core.get.call(null,map__8287__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8288 = p__8286;
var map__8288__$1 = ((((!((map__8288 == null)))?((((map__8288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8288):map__8288);
var lane = cljs.core.get.call(null,map__8288__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8287,map__8287__$1,state,map__8288,map__8288__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__8287,map__8287__$1,state,map__8288,map__8288__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__8292_SHARP_,p2__8291_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__8291_SHARP_], true),p1__8292_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__8293,_,p__8294){
var map__8295 = p__8293;
var map__8295__$1 = ((((!((map__8295 == null)))?((((map__8295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8295):map__8295);
var state = cljs.core.get.call(null,map__8295__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8296 = p__8294;
var map__8296__$1 = ((((!((map__8296 == null)))?((((map__8296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8296):map__8296);
var lane = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__8296__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8295,map__8295__$1,state,map__8296,map__8296__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__8295,map__8295__$1,state,map__8296,map__8296__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map