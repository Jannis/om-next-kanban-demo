// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__10942_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__10942_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10943_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__10943_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__10944,key,_){
var map__10945 = p__10944;
var map__10945__$1 = ((((!((map__10945 == null)))?((((map__10945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10945):map__10945);
var state = cljs.core.get.call(null,map__10945__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__10947,key,_){
var map__10948 = p__10947;
var map__10948__$1 = ((((!((map__10948 == null)))?((((map__10948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10948):map__10948);
var state = cljs.core.get.call(null,map__10948__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__10950,_,p__10951){
var map__10952 = p__10950;
var map__10952__$1 = ((((!((map__10952 == null)))?((((map__10952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10952):map__10952);
var state = cljs.core.get.call(null,map__10952__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10953 = p__10951;
var map__10953__$1 = ((((!((map__10953 == null)))?((((map__10953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10953):map__10953);
var ref = cljs.core.get.call(null,map__10953__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10952,map__10952__$1,state,map__10953,map__10953__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__10952,map__10952__$1,state,map__10953,map__10953__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__10956,key,_){
var map__10957 = p__10956;
var map__10957__$1 = ((((!((map__10957 == null)))?((((map__10957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10957):map__10957);
var state = cljs.core.get.call(null,map__10957__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__10959,_,p__10960){
var map__10961 = p__10959;
var map__10961__$1 = ((((!((map__10961 == null)))?((((map__10961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10961):map__10961);
var state = cljs.core.get.call(null,map__10961__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10962 = p__10960;
var map__10962__$1 = ((((!((map__10962 == null)))?((((map__10962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10962):map__10962);
var board = cljs.core.get.call(null,map__10962__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10961,map__10961__$1,state,map__10962,map__10962__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__10961,map__10961__$1,state,map__10962,map__10962__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__10966,_,p__10967){
var map__10968 = p__10966;
var map__10968__$1 = ((((!((map__10968 == null)))?((((map__10968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10968):map__10968);
var state = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10969 = p__10967;
var map__10969__$1 = ((((!((map__10969 == null)))?((((map__10969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10969):map__10969);
var board = cljs.core.get.call(null,map__10969__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__10969__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10968,map__10968__$1,state,map__10969,map__10969__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__10968,map__10968__$1,state,map__10969,map__10969__$1,board,data){
return (function (p1__10965_SHARP_){
return cljs.core.merge.call(null,p1__10965_SHARP_,data);
});})(map__10968,map__10968__$1,state,map__10969,map__10969__$1,board,data))
);
});})(map__10968,map__10968__$1,state,map__10969,map__10969__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__10972,_,___$1){
var map__10973 = p__10972;
var map__10973__$1 = ((((!((map__10973 == null)))?((((map__10973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10973):map__10973);
var state = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10973,map__10973__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__10973,map__10973__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map