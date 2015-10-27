// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__10373_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__10373_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10374_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__10374_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10375_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__10375_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__10376,key,_){
var map__10377 = p__10376;
var map__10377__$1 = ((((!((map__10377 == null)))?((((map__10377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10377):map__10377);
var state = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__10379,key,_){
var map__10380 = p__10379;
var map__10380__$1 = ((((!((map__10380 == null)))?((((map__10380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10380):map__10380);
var state = cljs.core.get.call(null,map__10380__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__10382,_,params){
var map__10383 = p__10382;
var map__10383__$1 = ((((!((map__10383 == null)))?((((map__10383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10383):map__10383);
var state = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10383,map__10383__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
});})(map__10383,map__10383__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__10385,key,_){
var map__10386 = p__10385;
var map__10386__$1 = ((((!((map__10386 == null)))?((((map__10386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10386):map__10386);
var state = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__10388,_,p__10389){
var map__10390 = p__10388;
var map__10390__$1 = ((((!((map__10390 == null)))?((((map__10390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10390):map__10390);
var state = cljs.core.get.call(null,map__10390__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10391 = p__10389;
var map__10391__$1 = ((((!((map__10391 == null)))?((((map__10391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10391):map__10391);
var card = cljs.core.get.call(null,map__10391__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10390,map__10390__$1,state,map__10391,map__10391__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__10390,map__10390__$1,state,map__10391,map__10391__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__10395,_,p__10396){
var map__10397 = p__10395;
var map__10397__$1 = ((((!((map__10397 == null)))?((((map__10397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10397):map__10397);
var state = cljs.core.get.call(null,map__10397__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10398 = p__10396;
var map__10398__$1 = ((((!((map__10398 == null)))?((((map__10398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10398):map__10398);
var card = cljs.core.get.call(null,map__10398__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__10398__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10397,map__10397__$1,state,map__10398,map__10398__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__10397,map__10397__$1,state,map__10398,map__10398__$1,card,data){
return (function (p1__10394_SHARP_){
return cljs.core.merge.call(null,p1__10394_SHARP_,data);
});})(map__10397,map__10397__$1,state,map__10398,map__10398__$1,card,data))
);
});})(map__10397,map__10397__$1,state,map__10398,map__10398__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map