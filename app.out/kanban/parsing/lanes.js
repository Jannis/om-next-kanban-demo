// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.lanes');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.cards');
goog.require('kanban.reconciler');
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p__27137,key,_){
var map__27138 = p__27137;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var state = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
}));
kanban.parsing.lanes.add_to_cards = (function kanban$parsing$lanes$add_to_cards(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var G__27141 = cards;
var G__27141__$1 = ((cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards)))?cljs.core.conj.call(null,G__27141,ref):G__27141);
return G__27141__$1;
})());
});
kanban.parsing.lanes.move_card = (function kanban$parsing$lanes$move_card(state,card,from,to){
var remove_STAR_ = (function kanban$parsing$lanes$move_card_$_remove_STAR_(cards,ref){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([ref], true),cards));
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038)),remove_STAR_,card),cljs.core.conj.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null),(function (p__27142,_,p__27143){
var map__27144 = p__27142;
var map__27144__$1 = ((((!((map__27144 == null)))?((((map__27144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27144):map__27144);
var state = cljs.core.get.call(null,map__27144__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27145 = p__27143;
var map__27145__$1 = ((((!((map__27145 == null)))?((((map__27145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27145):map__27145);
var card = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var from = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__27145__$1,new cljs.core.Keyword(null,"to","to",192099007));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [card,from,to], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27144,map__27144__$1,state,map__27145,map__27145__$1,card,from,to){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.move_card,card,from,to);
});})(map__27144,map__27144__$1,state,map__27145,map__27145__$1,card,from,to))
], null);
}));
kanban.parsing.lanes.create_card = (function kanban$parsing$lanes$create_card(st,lane){
var map__27150 = kanban.parsing.cards.create_card.call(null,st);
var map__27150__$1 = ((((!((map__27150 == null)))?((((map__27150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27150):map__27150);
var card = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var state = cljs.core.get.call(null,map__27150__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),kanban.parsing.lanes.add_to_cards,card),new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null),(function (p__27152,_,p__27153){
var map__27154 = p__27152;
var map__27154__$1 = ((((!((map__27154 == null)))?((((map__27154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27154):map__27154);
var state = cljs.core.get.call(null,map__27154__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27155 = p__27153;
var map__27155__$1 = ((((!((map__27155 == null)))?((((map__27155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27155):map__27155);
var lane = cljs.core.get.call(null,map__27155__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lane,new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27154,map__27154__$1,state,map__27155,map__27155__$1,lane){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.create_card,lane);
});})(map__27154,map__27154__$1,state,map__27155,map__27155__$1,lane))
], null);
}));
kanban.parsing.lanes.delete_card = (function kanban$parsing$lanes$delete_card(st,lane,card){
return cljs.core.update_in.call(null,kanban.parsing.cards.delete_card.call(null,st,card),cljs.core.conj.call(null,lane,new cljs.core.Keyword(null,"cards","cards",169174038)),(function (p1__27159_SHARP_,p2__27158_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__27158_SHARP_], true),p1__27159_SHARP_);
}),card);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null),(function (p__27160,_,p__27161){
var map__27162 = p__27160;
var map__27162__$1 = ((((!((map__27162 == null)))?((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27162):map__27162);
var state = cljs.core.get.call(null,map__27162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27163 = p__27161;
var map__27163__$1 = ((((!((map__27163 == null)))?((((map__27163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27163):map__27163);
var lane = cljs.core.get.call(null,map__27163__$1,new cljs.core.Keyword(null,"lane","lane",463787757));
var card = cljs.core.get.call(null,map__27163__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lane,card], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27162,map__27162__$1,state,map__27163,map__27163__$1,lane,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.lanes.delete_card,lane,card);
});})(map__27162,map__27162__$1,state,map__27163,map__27163__$1,lane,card))
], null);
}));

//# sourceMappingURL=lanes.js.map