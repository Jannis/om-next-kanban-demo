// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__22983_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__22983_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__22984_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__22984_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__22985,key,_){
var map__22986 = p__22985;
var map__22986__$1 = ((((!((map__22986 == null)))?((((map__22986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22986):map__22986);
var state = cljs.core.get.call(null,map__22986__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__22988,key,_){
var map__22989 = p__22988;
var map__22989__$1 = ((((!((map__22989 == null)))?((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22989):map__22989);
var state = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__22991,_,p__22992){
var map__22993 = p__22991;
var map__22993__$1 = ((((!((map__22993 == null)))?((((map__22993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22993):map__22993);
var state = cljs.core.get.call(null,map__22993__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22994 = p__22992;
var map__22994__$1 = ((((!((map__22994 == null)))?((((map__22994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22994):map__22994);
var ref = cljs.core.get.call(null,map__22994__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__22993,map__22993__$1,state,map__22994,map__22994__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__22993,map__22993__$1,state,map__22994,map__22994__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__22997,key,_){
var map__22998 = p__22997;
var map__22998__$1 = ((((!((map__22998 == null)))?((((map__22998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22998):map__22998);
var state = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__23000,_,p__23001){
var map__23002 = p__23000;
var map__23002__$1 = ((((!((map__23002 == null)))?((((map__23002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23002):map__23002);
var state = cljs.core.get.call(null,map__23002__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23003 = p__23001;
var map__23003__$1 = ((((!((map__23003 == null)))?((((map__23003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23003):map__23003);
var board = cljs.core.get.call(null,map__23003__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23002,map__23002__$1,state,map__23003,map__23003__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__23002,map__23002__$1,state,map__23003,map__23003__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__23007,_,p__23008){
var map__23009 = p__23007;
var map__23009__$1 = ((((!((map__23009 == null)))?((((map__23009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23009):map__23009);
var state = cljs.core.get.call(null,map__23009__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23010 = p__23008;
var map__23010__$1 = ((((!((map__23010 == null)))?((((map__23010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23010):map__23010);
var board = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__23010__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23009,map__23009__$1,state,map__23010,map__23010__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__23009,map__23009__$1,state,map__23010,map__23010__$1,board,data){
return (function (p1__23006_SHARP_){
return cljs.core.merge.call(null,p1__23006_SHARP_,data);
});})(map__23009,map__23009__$1,state,map__23010,map__23010__$1,board,data))
);
});})(map__23009,map__23009__$1,state,map__23010,map__23010__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__23013,_,___$1){
var map__23014 = p__23013;
var map__23014__$1 = ((((!((map__23014 == null)))?((((map__23014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23014):map__23014);
var state = cljs.core.get.call(null,map__23014__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23014,map__23014__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__23014,map__23014__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map