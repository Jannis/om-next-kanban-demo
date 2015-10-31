// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('thi.ng.validate.core');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.get_card = (function kanban$parsing$cards$get_card(st,ref){
return cljs.core.update.call(null,cljs.core.get_in.call(null,st,ref),new cljs.core.Keyword(null,"assignees","assignees",-298534943),(function (p1__8387_SHARP_){
return kanban.parsing.users.resolve_users.call(null,st,p1__8387_SHARP_);
}));
});
kanban.parsing.cards.get_cards = (function kanban$parsing$cards$get_cards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8388_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__8388_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.cards.resolve_cards = (function kanban$parsing$cards$resolve_cards(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8389_SHARP_){
return kanban.parsing.cards.get_card.call(null,st,p1__8389_SHARP_);
}),refs));
});
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.cards.get_cards.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038))))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__8391_SHARP_,p2__8390_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__8390_SHARP_], true),p1__8391_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__8392,key,_){
var map__8393 = p__8392;
var map__8393__$1 = ((((!((map__8393 == null)))?((((map__8393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8393):map__8393);
var state = cljs.core.get.call(null,map__8393__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_cards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__8395,key,_){
var map__8396 = p__8395;
var map__8396__$1 = ((((!((map__8396 == null)))?((((map__8396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8396):map__8396);
var state = cljs.core.get.call(null,map__8396__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__8398,_,params){
var map__8399 = p__8398;
var map__8399__$1 = ((((!((map__8399 == null)))?((((map__8399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8399):map__8399);
var state = cljs.core.get.call(null,map__8399__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8399,map__8399__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__8399,map__8399__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__8401,key,_){
var map__8402 = p__8401;
var map__8402__$1 = ((((!((map__8402 == null)))?((((map__8402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8402):map__8402);
var state = cljs.core.get.call(null,map__8402__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.cards.get_card.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing-errors","cards/editing-errors",1037911846),(function (p__8404,key,_){
var map__8405 = p__8404;
var map__8405__$1 = ((((!((map__8405 == null)))?((((map__8405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8405):map__8405);
var state = cljs.core.get.call(null,map__8405__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
cljs.core.println.call(null,cljs.core.get.call(null,st,key));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5094__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__8407,_,p__8408){
var map__8409 = p__8407;
var map__8409__$1 = ((((!((map__8409 == null)))?((((map__8409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8409):map__8409);
var state = cljs.core.get.call(null,map__8409__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8410 = p__8408;
var map__8410__$1 = ((((!((map__8410 == null)))?((((map__8410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8410):map__8410);
var card = cljs.core.get.call(null,map__8410__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8409,map__8409__$1,state,map__8410,map__8410__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__8409,map__8409__$1,state,map__8410,map__8410__$1,card))
], null);
}));
kanban.parsing.cards.card_schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.validate.core.number.call(null),thi.ng.validate.core.pos.call(null)], null),new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.validate.core.optional.call(null,thi.ng.validate.core.vector.call(null))], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.validate.core.string.call(null),thi.ng.validate.core.min_length.call(null,(1),"The description may not be empty")], null)], null);
kanban.parsing.cards.validate_card = (function kanban$parsing$cards$validate_card(card){
return cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.second.call(null,thi.ng.validate.core.validate.call(null,card,kanban.parsing.cards.card_schema)));
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__8413,_,p__8414){
var map__8415 = p__8413;
var map__8415__$1 = ((((!((map__8415 == null)))?((((map__8415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8415):map__8415);
var state = cljs.core.get.call(null,map__8415__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8416 = p__8414;
var map__8416__$1 = ((((!((map__8416 == null)))?((((map__8416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8416):map__8416);
var card = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__8416__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8415,map__8415__$1,state,map__8416,map__8416__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,cljs.core.comp.call(null,kanban.parsing.cards.validate_card,cljs.core.merge),data);
});})(map__8415,map__8415__$1,state,map__8416,map__8416__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map