// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__10403_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__10403_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10404_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__10404_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10405_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__10405_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__10406,key,_){
var map__10407 = p__10406;
var map__10407__$1 = ((((!((map__10407 == null)))?((((map__10407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10407):map__10407);
var state = cljs.core.get.call(null,map__10407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
var add_STAR_ = (function kanban$parsing$lanes$move_card_$_add_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__10416 = cards;
var G__10416__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.call(null,G__10416,ref):G__10416);
return G__10416__$1;
})());
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),add_STAR_,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__10417,_,p__10418){
var map__10419 = p__10417;
var map__10419__$1 = ((((!((map__10419 == null)))?((((map__10419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10419):map__10419);
var state = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10420 = p__10418;
var map__10420__$1 = ((((!((map__10420 == null)))?((((map__10420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10420):map__10420);
var card = cljs.core.get.call(null,map__10420__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__10420__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__10420__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10419,map__10419__$1,state,map__10420,map__10420__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__10419,map__10419__$1,state,map__10420,map__10420__$1,card,from,to))
], null);
}));

//# sourceMappingURL=lanes.js.map