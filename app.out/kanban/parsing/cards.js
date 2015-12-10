// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.cards');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.users');
goog.require('kanban.reconciler');
kanban.parsing.cards.create_card = (function kanban$parsing$cards$create_card(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),om.next.db__GT_tree.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.get.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038)),st)))) + (1));
var card = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),ref,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,card),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,ref)], null);
});
kanban.parsing.cards.delete_card = (function kanban$parsing$cards$delete_card(st,ref){
return cljs.core.update.call(null,cljs.core.update.call(null,st,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p1__27109_SHARP_,p2__27108_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__27108_SHARP_], true),p1__27109_SHARP_);
}),ref),new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),cljs.core.dissoc,cljs.core.second.call(null,ref));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"cards","cards",169174038),(function (p__27110,key,_){
var map__27111 = p__27110;
var map__27111__$1 = ((((!((map__27111 == null)))?((((map__27111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27111):map__27111);
var state = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27111__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),(function (p__27113,key,_){
var map__27114 = p__27113;
var map__27114__$1 = ((((!((map__27114 == null)))?((((map__27114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27114):map__27114);
var state = cljs.core.get.call(null,map__27114__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null),(function (p__27116,_,params){
var map__27117 = p__27116;
var map__27117__$1 = ((((!((map__27117 == null)))?((((map__27117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27117):map__27117);
var state = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","dragged","cards/dragged",311055420)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27117,map__27117__$1,state){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),params);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),null);
}
});})(map__27117,map__27117__$1,state))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),(function (p__27119,key,_){
var map__27120 = p__27119;
var map__27120__$1 = ((((!((map__27120 == null)))?((((map__27120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27120):map__27120);
var state = cljs.core.get.call(null,map__27120__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27120__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null),(function (p__27122,_,p__27123){
var map__27124 = p__27122;
var map__27124__$1 = ((((!((map__27124 == null)))?((((map__27124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27124):map__27124);
var state = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27125 = p__27123;
var map__27125__$1 = ((((!((map__27125 == null)))?((((map__27125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27125):map__27125);
var card = cljs.core.get.call(null,map__27125__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27124,map__27124__$1,state,map__27125,map__27125__$1,card){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("cards","editing","cards/editing",1422138420),card);
});})(map__27124,map__27124__$1,state,map__27125,map__27125__$1,card))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null),(function (p__27129,_,p__27130){
var map__27131 = p__27129;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27131):map__27131);
var state = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27132 = p__27130;
var map__27132__$1 = ((((!((map__27132 == null)))?((((map__27132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27132):map__27132);
var card = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword(null,"card","card",-1430355152));
var data = cljs.core.get.call(null,map__27132__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [card], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27131,map__27131__$1,state,map__27132,map__27132__$1,card,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,card,((function (map__27131,map__27131__$1,state,map__27132,map__27132__$1,card,data){
return (function (p1__27128_SHARP_){
return cljs.core.merge.call(null,p1__27128_SHARP_,data);
});})(map__27131,map__27131__$1,state,map__27132,map__27132__$1,card,data))
);
});})(map__27131,map__27131__$1,state,map__27132,map__27132__$1,card,data))
], null);
}));

//# sourceMappingURL=cards.js.map