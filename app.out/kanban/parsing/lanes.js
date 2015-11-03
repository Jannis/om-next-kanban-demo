// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
kanban.parsing.lanes.resolve_cards = (function kanban$parsing$lanes$resolve_cards(st,lane){
return cljs.core.update.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__152058_SHARP_){
return kanban.parsing.cards.resolve_cards.call(null,st,p1__152058_SHARP_);
}));
});
kanban.parsing.lanes.get_lane = (function kanban$parsing$lanes$get_lane(st,ref){
return kanban.parsing.lanes.resolve_cards.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.lanes.get_lanes = (function kanban$parsing$lanes$get_lanes(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__152059_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__152059_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.lanes.resolve_lanes = (function kanban$parsing$lanes$resolve_lanes(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__152060_SHARP_){
return kanban.parsing.lanes.get_lane.call(null,st,p1__152060_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__152061,key,_){
var map__152062 = p__152061;
var map__152062__$1 = ((((!((map__152062 == null)))?((((map__152062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152062):map__152062);
var state = cljs.core.get.call(null,map__152062__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.lanes.get_lanes.call(null,st,key)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards__$1,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__152065 = cards__$1;
var G__152065__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards__$1)))?cljs.core.conj.call(null,G__152065,ref):G__152065);
return G__152065__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards__$1,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards__$1));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__152066,_,p__152067){
var map__152068 = p__152066;
var map__152068__$1 = ((((!((map__152068 == null)))?((((map__152068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152068):map__152068);
var state = cljs.core.get.call(null,map__152068__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152069 = p__152067;
var map__152069__$1 = ((((!((map__152069 == null)))?((((map__152069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152069):map__152069);
var card = cljs.core.get.call(null,map__152069__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__152069__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__152069__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152068,map__152068__$1,state,map__152069,map__152069__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__152068,map__152068__$1,state,map__152069,map__152069__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__152074 = kanban.parsing.cards.create_card.call(null,st);
var map__152074__$1 = ((((!((map__152074 == null)))?((((map__152074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152074):map__152074);
var card = cljs.core.get.call(null,map__152074__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__152074__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__152076,_,p__152077){
var map__152078 = p__152076;
var map__152078__$1 = ((((!((map__152078 == null)))?((((map__152078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152078):map__152078);
var state = cljs.core.get.call(null,map__152078__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152079 = p__152077;
var map__152079__$1 = ((((!((map__152079 == null)))?((((map__152079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152079):map__152079);
var lane = cljs.core.get.call(null,map__152079__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152078,map__152078__$1,state,map__152079,map__152079__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__152078,map__152078__$1,state,map__152079,map__152079__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__152083_SHARP_,p2__152082_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__152082_SHARP_], true),p1__152083_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__152084,_,p__152085){
var map__152086 = p__152084;
var map__152086__$1 = ((((!((map__152086 == null)))?((((map__152086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152086):map__152086);
var state = cljs.core.get.call(null,map__152086__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152087 = p__152085;
var map__152087__$1 = ((((!((map__152087 == null)))?((((map__152087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152087):map__152087);
var lane = cljs.core.get.call(null,map__152087__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__152087__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152086,map__152086__$1,state,map__152087,map__152087__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__152086,map__152086__$1,state,map__152087,map__152087__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map