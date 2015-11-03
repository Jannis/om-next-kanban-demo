// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__83692_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__83692_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__83693_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__83693_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__83694,key,_){
var map__83695 = p__83694;
var map__83695__$1 = ((((!((map__83695 == null)))?((((map__83695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83695):map__83695);
var state = cljs.core.get.call(null,map__83695__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__83697,key,_){
var map__83698 = p__83697;
var map__83698__$1 = ((((!((map__83698 == null)))?((((map__83698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83698):map__83698);
var state = cljs.core.get.call(null,map__83698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__83700,_,p__83701){
var map__83702 = p__83700;
var map__83702__$1 = ((((!((map__83702 == null)))?((((map__83702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83702):map__83702);
var state = cljs.core.get.call(null,map__83702__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83703 = p__83701;
var map__83703__$1 = ((((!((map__83703 == null)))?((((map__83703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83703):map__83703);
var ref = cljs.core.get.call(null,map__83703__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83702,map__83702__$1,state,map__83703,map__83703__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__83702,map__83702__$1,state,map__83703,map__83703__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__83706,key,_){
var map__83707 = p__83706;
var map__83707__$1 = ((((!((map__83707 == null)))?((((map__83707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83707):map__83707);
var state = cljs.core.get.call(null,map__83707__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__83709,_,p__83710){
var map__83711 = p__83709;
var map__83711__$1 = ((((!((map__83711 == null)))?((((map__83711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83711):map__83711);
var state = cljs.core.get.call(null,map__83711__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83712 = p__83710;
var map__83712__$1 = ((((!((map__83712 == null)))?((((map__83712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83712):map__83712);
var board = cljs.core.get.call(null,map__83712__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83711,map__83711__$1,state,map__83712,map__83712__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__83711,map__83711__$1,state,map__83712,map__83712__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__83716,_,p__83717){
var map__83718 = p__83716;
var map__83718__$1 = ((((!((map__83718 == null)))?((((map__83718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83718):map__83718);
var state = cljs.core.get.call(null,map__83718__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83719 = p__83717;
var map__83719__$1 = ((((!((map__83719 == null)))?((((map__83719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83719):map__83719);
var board = cljs.core.get.call(null,map__83719__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__83719__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83718,map__83718__$1,state,map__83719,map__83719__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__83718,map__83718__$1,state,map__83719,map__83719__$1,board,data){
return (function (p1__83715_SHARP_){
return cljs.core.merge.call(null,p1__83715_SHARP_,data);
});})(map__83718,map__83718__$1,state,map__83719,map__83719__$1,board,data))
);
});})(map__83718,map__83718__$1,state,map__83719,map__83719__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__83722,_,___$1){
var map__83723 = p__83722;
var map__83723__$1 = ((((!((map__83723 == null)))?((((map__83723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83723):map__83723);
var state = cljs.core.get.call(null,map__83723__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83723,map__83723__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__83723,map__83723__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map