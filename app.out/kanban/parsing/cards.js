// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__14066_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__14066_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__14067_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__14067_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__14068_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__14068_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038)))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__14070_SHARP_,p2__14069_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__14069_SHARP_], true),p1__14070_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__14071,key,_){
var map__14072 = p__14071;
var map__14072__$1 = ((((!((map__14072 == null)))?((((map__14072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14072):map__14072);
var state = cljs.core.get.call(null,map__14072__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__14074,key,_){
var map__14075 = p__14074;
var map__14075__$1 = ((((!((map__14075 == null)))?((((map__14075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14075):map__14075);
var state = cljs.core.get.call(null,map__14075__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__14077,_,params){
var map__14078 = p__14077;
var map__14078__$1 = ((((!((map__14078 == null)))?((((map__14078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14078):map__14078);
var state = cljs.core.get.call(null,map__14078__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__14078,map__14078__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__14078,map__14078__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__14080,key,_){
var map__14081 = p__14080;
var map__14081__$1 = ((((!((map__14081 == null)))?((((map__14081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14081):map__14081);
var state = cljs.core.get.call(null,map__14081__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__14083,_,p__14084){
var map__14085 = p__14083;
var map__14085__$1 = ((((!((map__14085 == null)))?((((map__14085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14085):map__14085);
var state = cljs.core.get.call(null,map__14085__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__14086 = p__14084;
var map__14086__$1 = ((((!((map__14086 == null)))?((((map__14086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14086):map__14086);
var card = cljs.core.get.call(null,map__14086__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__14085,map__14085__$1,state,map__14086,map__14086__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__14085,map__14085__$1,state,map__14086,map__14086__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__14090,_,p__14091){
var map__14092 = p__14090;
var map__14092__$1 = ((((!((map__14092 == null)))?((((map__14092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14092):map__14092);
var state = cljs.core.get.call(null,map__14092__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__14093 = p__14091;
var map__14093__$1 = ((((!((map__14093 == null)))?((((map__14093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14093):map__14093);
var card = cljs.core.get.call(null,map__14093__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__14093__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__14092,map__14092__$1,state,map__14093,map__14093__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__14092,map__14092__$1,state,map__14093,map__14093__$1,card,data){
return (function (p1__14089_SHARP_){
return cljs.core.merge.call(null,p1__14089_SHARP_,data);
});})(map__14092,map__14092__$1,state,map__14093,map__14093__$1,card,data))
);
});})(map__14092,map__14092__$1,state,map__14093,map__14093__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map