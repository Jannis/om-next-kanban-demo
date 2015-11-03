// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__151733_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__151733_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__151734_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__151734_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__151735_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__151735_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__151736,key,_){
var map__151737 = p__151736;
var map__151737__$1 = ((((!((map__151737 == null)))?((((map__151737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151737):map__151737);
var state = cljs.core.get.call(null,map__151737__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards__$1,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__151740 = cards__$1;
var G__151740__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards__$1)))?cljs.core.conj.call(null,G__151740,ref):G__151740);
return G__151740__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards__$1,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards__$1));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__151741,_,p__151742){
var map__151743 = p__151741;
var map__151743__$1 = ((((!((map__151743 == null)))?((((map__151743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151743):map__151743);
var state = cljs.core.get.call(null,map__151743__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151744 = p__151742;
var map__151744__$1 = ((((!((map__151744 == null)))?((((map__151744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151744):map__151744);
var card = cljs.core.get.call(null,map__151744__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__151744__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__151744__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151743,map__151743__$1,state,map__151744,map__151744__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__151743,map__151743__$1,state,map__151744,map__151744__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__151749 = kanban.parsing.cards.create_card.call(null,st);
var map__151749__$1 = ((((!((map__151749 == null)))?((((map__151749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151749):map__151749);
var card = cljs.core.get.call(null,map__151749__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__151749__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__151751,_,p__151752){
var map__151753 = p__151751;
var map__151753__$1 = ((((!((map__151753 == null)))?((((map__151753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151753):map__151753);
var state = cljs.core.get.call(null,map__151753__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151754 = p__151752;
var map__151754__$1 = ((((!((map__151754 == null)))?((((map__151754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151754):map__151754);
var lane = cljs.core.get.call(null,map__151754__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151753,map__151753__$1,state,map__151754,map__151754__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__151753,map__151753__$1,state,map__151754,map__151754__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__151758_SHARP_,p2__151757_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__151757_SHARP_], true),p1__151758_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__151759,_,p__151760){
var map__151761 = p__151759;
var map__151761__$1 = ((((!((map__151761 == null)))?((((map__151761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151761):map__151761);
var state = cljs.core.get.call(null,map__151761__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151762 = p__151760;
var map__151762__$1 = ((((!((map__151762 == null)))?((((map__151762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151762):map__151762);
var lane = cljs.core.get.call(null,map__151762__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__151762__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151761,map__151761__$1,state,map__151762,map__151762__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__151761,map__151761__$1,state,map__151762,map__151762__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map