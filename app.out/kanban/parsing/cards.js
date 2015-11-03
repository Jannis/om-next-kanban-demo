// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__81686_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__81686_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__81687_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__81687_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__81688_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__81688_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038))))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__81690_SHARP_,p2__81689_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__81689_SHARP_], true),p1__81690_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__81691,key,_){
var map__81692 = p__81691;
var map__81692__$1 = ((((!((map__81692 == null)))?((((map__81692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81692):map__81692);
var state = cljs.core.get.call(null,map__81692__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__81694,key,_){
var map__81695 = p__81694;
var map__81695__$1 = ((((!((map__81695 == null)))?((((map__81695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81695):map__81695);
var state = cljs.core.get.call(null,map__81695__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__81697,_,params){
var map__81698 = p__81697;
var map__81698__$1 = ((((!((map__81698 == null)))?((((map__81698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81698):map__81698);
var state = cljs.core.get.call(null,map__81698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81698,map__81698__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__81698,map__81698__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__81700,key,_){
var map__81701 = p__81700;
var map__81701__$1 = ((((!((map__81701 == null)))?((((map__81701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81701):map__81701);
var state = cljs.core.get.call(null,map__81701__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__81703,_,p__81704){
var map__81705 = p__81703;
var map__81705__$1 = ((((!((map__81705 == null)))?((((map__81705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81705):map__81705);
var state = cljs.core.get.call(null,map__81705__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__81706 = p__81704;
var map__81706__$1 = ((((!((map__81706 == null)))?((((map__81706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81706):map__81706);
var card = cljs.core.get.call(null,map__81706__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81705,map__81705__$1,state,map__81706,map__81706__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__81705,map__81705__$1,state,map__81706,map__81706__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__81710,_,p__81711){
var map__81712 = p__81710;
var map__81712__$1 = ((((!((map__81712 == null)))?((((map__81712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81712):map__81712);
var state = cljs.core.get.call(null,map__81712__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__81713 = p__81711;
var map__81713__$1 = ((((!((map__81713 == null)))?((((map__81713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81713):map__81713);
var card = cljs.core.get.call(null,map__81713__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__81713__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81712,map__81712__$1,state,map__81713,map__81713__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__81712,map__81712__$1,state,map__81713,map__81713__$1,card,data){
return (function (p1__81709_SHARP_){
return cljs.core.merge.call(null,p1__81709_SHARP_,data);
});})(map__81712,map__81712__$1,state,map__81713,map__81713__$1,card,data))
);
});})(map__81712,map__81712__$1,state,map__81713,map__81713__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map