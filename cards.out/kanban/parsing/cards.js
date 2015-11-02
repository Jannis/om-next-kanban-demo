// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__33395_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__33395_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__33396_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__33396_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__33397_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__33397_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038))))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__33399_SHARP_,p2__33398_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__33398_SHARP_], true),p1__33399_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__33400,key,_){
var map__33401 = p__33400;
var map__33401__$1 = ((((!((map__33401 == null)))?((((map__33401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401):map__33401);
var state = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__33403,key,_){
var map__33404 = p__33403;
var map__33404__$1 = ((((!((map__33404 == null)))?((((map__33404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33404):map__33404);
var state = cljs.core.get.call(null,map__33404__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__33406,_,params){
var map__33407 = p__33406;
var map__33407__$1 = ((((!((map__33407 == null)))?((((map__33407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33407):map__33407);
var state = cljs.core.get.call(null,map__33407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33407,map__33407__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__33407,map__33407__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__33409,key,_){
var map__33410 = p__33409;
var map__33410__$1 = ((((!((map__33410 == null)))?((((map__33410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33410):map__33410);
var state = cljs.core.get.call(null,map__33410__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__33412,_,p__33413){
var map__33414 = p__33412;
var map__33414__$1 = ((((!((map__33414 == null)))?((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33414):map__33414);
var state = cljs.core.get.call(null,map__33414__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33415 = p__33413;
var map__33415__$1 = ((((!((map__33415 == null)))?((((map__33415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33415):map__33415);
var card = cljs.core.get.call(null,map__33415__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33414,map__33414__$1,state,map__33415,map__33415__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__33414,map__33414__$1,state,map__33415,map__33415__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__33419,_,p__33420){
var map__33421 = p__33419;
var map__33421__$1 = ((((!((map__33421 == null)))?((((map__33421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var state = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33422 = p__33420;
var map__33422__$1 = ((((!((map__33422 == null)))?((((map__33422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33422):map__33422);
var card = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33421,map__33421__$1,state,map__33422,map__33422__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__33421,map__33421__$1,state,map__33422,map__33422__$1,card,data){
return (function (p1__33418_SHARP_){
return cljs.core.merge.call(null,p1__33418_SHARP_,data);
});})(map__33421,map__33421__$1,state,map__33422,map__33422__$1,card,data))
);
});})(map__33421,map__33421__$1,state,map__33422,map__33422__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map