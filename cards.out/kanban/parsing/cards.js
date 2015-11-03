// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__151475_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__151475_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__151476_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__151476_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__151477_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__151477_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038))))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__151479_SHARP_,p2__151478_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__151478_SHARP_], true),p1__151479_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__151480,key,_){
var map__151481 = p__151480;
var map__151481__$1 = ((((!((map__151481 == null)))?((((map__151481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151481):map__151481);
var state = cljs.core.get.call(null,map__151481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__151483,key,_){
var map__151484 = p__151483;
var map__151484__$1 = ((((!((map__151484 == null)))?((((map__151484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151484):map__151484);
var state = cljs.core.get.call(null,map__151484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__151486,_,params){
var map__151487 = p__151486;
var map__151487__$1 = ((((!((map__151487 == null)))?((((map__151487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151487):map__151487);
var state = cljs.core.get.call(null,map__151487__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151487,map__151487__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__151487,map__151487__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__151489,key,_){
var map__151490 = p__151489;
var map__151490__$1 = ((((!((map__151490 == null)))?((((map__151490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151490):map__151490);
var state = cljs.core.get.call(null,map__151490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__151492,_,p__151493){
var map__151494 = p__151492;
var map__151494__$1 = ((((!((map__151494 == null)))?((((map__151494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151494):map__151494);
var state = cljs.core.get.call(null,map__151494__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151495 = p__151493;
var map__151495__$1 = ((((!((map__151495 == null)))?((((map__151495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151495):map__151495);
var card = cljs.core.get.call(null,map__151495__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151494,map__151494__$1,state,map__151495,map__151495__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__151494,map__151494__$1,state,map__151495,map__151495__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__151499,_,p__151500){
var map__151501 = p__151499;
var map__151501__$1 = ((((!((map__151501 == null)))?((((map__151501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151501):map__151501);
var state = cljs.core.get.call(null,map__151501__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151502 = p__151500;
var map__151502__$1 = ((((!((map__151502 == null)))?((((map__151502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151502):map__151502);
var card = cljs.core.get.call(null,map__151502__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__151502__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151501,map__151501__$1,state,map__151502,map__151502__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__151501,map__151501__$1,state,map__151502,map__151502__$1,card,data){
return (function (p1__151498_SHARP_){
return cljs.core.merge.call(null,p1__151498_SHARP_,data);
});})(map__151501,map__151501__$1,state,map__151502,map__151502__$1,card,data))
);
});})(map__151501,map__151501__$1,state,map__151502,map__151502__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map