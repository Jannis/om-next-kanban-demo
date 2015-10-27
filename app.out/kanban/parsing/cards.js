// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__15941_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__15941_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__15942_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__15942_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__15943_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__15943_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038)))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__15944,key,_){
var map__15945 = p__15944;
var map__15945__$1 = ((((!((map__15945 == null)))?((((map__15945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15945):map__15945);
var state = cljs.core.get.call(null,map__15945__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__15947,key,_){
var map__15948 = p__15947;
var map__15948__$1 = ((((!((map__15948 == null)))?((((map__15948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15948):map__15948);
var state = cljs.core.get.call(null,map__15948__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__15950,_,params){
var map__15951 = p__15950;
var map__15951__$1 = ((((!((map__15951 == null)))?((((map__15951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15951):map__15951);
var state = cljs.core.get.call(null,map__15951__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15951,map__15951__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
});})(map__15951,map__15951__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__15953,key,_){
var map__15954 = p__15953;
var map__15954__$1 = ((((!((map__15954 == null)))?((((map__15954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15954):map__15954);
var state = cljs.core.get.call(null,map__15954__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__15956,_,p__15957){
var map__15958 = p__15956;
var map__15958__$1 = ((((!((map__15958 == null)))?((((map__15958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15958):map__15958);
var state = cljs.core.get.call(null,map__15958__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__15959 = p__15957;
var map__15959__$1 = ((((!((map__15959 == null)))?((((map__15959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15959):map__15959);
var card = cljs.core.get.call(null,map__15959__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15958,map__15958__$1,state,map__15959,map__15959__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__15958,map__15958__$1,state,map__15959,map__15959__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__15963,_,p__15964){
var map__15965 = p__15963;
var map__15965__$1 = ((((!((map__15965 == null)))?((((map__15965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15965):map__15965);
var state = cljs.core.get.call(null,map__15965__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__15966 = p__15964;
var map__15966__$1 = ((((!((map__15966 == null)))?((((map__15966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15966):map__15966);
var card = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__15966__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15965,map__15965__$1,state,map__15966,map__15966__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__15965,map__15965__$1,state,map__15966,map__15966__$1,card,data){
return (function (p1__15962_SHARP_){
return cljs.core.merge.call(null,p1__15962_SHARP_,data);
});})(map__15965,map__15965__$1,state,map__15966,map__15966__$1,card,data))
);
});})(map__15965,map__15965__$1,state,map__15966,map__15966__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map