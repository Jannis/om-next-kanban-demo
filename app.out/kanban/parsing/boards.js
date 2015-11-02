// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__33457_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__33457_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__33458_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__33458_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__33459,key,_){
var map__33460 = p__33459;
var map__33460__$1 = ((((!((map__33460 == null)))?((((map__33460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);
var state = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__33462,key,_){
var map__33463 = p__33462;
var map__33463__$1 = ((((!((map__33463 == null)))?((((map__33463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33463):map__33463);
var state = cljs.core.get.call(null,map__33463__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__33465,_,p__33466){
var map__33467 = p__33465;
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var state = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33468 = p__33466;
var map__33468__$1 = ((((!((map__33468 == null)))?((((map__33468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33468):map__33468);
var ref = cljs.core.get.call(null,map__33468__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33467,map__33467__$1,state,map__33468,map__33468__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__33467,map__33467__$1,state,map__33468,map__33468__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__33471,key,_){
var map__33472 = p__33471;
var map__33472__$1 = ((((!((map__33472 == null)))?((((map__33472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33472):map__33472);
var state = cljs.core.get.call(null,map__33472__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__33474,_,p__33475){
var map__33476 = p__33474;
var map__33476__$1 = ((((!((map__33476 == null)))?((((map__33476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33476):map__33476);
var state = cljs.core.get.call(null,map__33476__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33477 = p__33475;
var map__33477__$1 = ((((!((map__33477 == null)))?((((map__33477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);
var board = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33476,map__33476__$1,state,map__33477,map__33477__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__33476,map__33476__$1,state,map__33477,map__33477__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__33481,_,p__33482){
var map__33483 = p__33481;
var map__33483__$1 = ((((!((map__33483 == null)))?((((map__33483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33483):map__33483);
var state = cljs.core.get.call(null,map__33483__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__33484 = p__33482;
var map__33484__$1 = ((((!((map__33484 == null)))?((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33484):map__33484);
var board = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33483,map__33483__$1,state,map__33484,map__33484__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__33483,map__33483__$1,state,map__33484,map__33484__$1,board,data){
return (function (p1__33480_SHARP_){
return cljs.core.merge.call(null,p1__33480_SHARP_,data);
});})(map__33483,map__33483__$1,state,map__33484,map__33484__$1,board,data))
);
});})(map__33483,map__33483__$1,state,map__33484,map__33484__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__33487,_,___$1){
var map__33488 = p__33487;
var map__33488__$1 = ((((!((map__33488 == null)))?((((map__33488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33488):map__33488);
var state = cljs.core.get.call(null,map__33488__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__33488,map__33488__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__33488,map__33488__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map