// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__23440_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__23440_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23441_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__23441_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__23442,key,_){
var map__23443 = p__23442;
var map__23443__$1 = ((((!((map__23443 == null)))?((((map__23443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23443):map__23443);
var state = cljs.core.get.call(null,map__23443__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__23445,key,_){
var map__23446 = p__23445;
var map__23446__$1 = ((((!((map__23446 == null)))?((((map__23446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23446):map__23446);
var state = cljs.core.get.call(null,map__23446__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__23448,_,p__23449){
var map__23450 = p__23448;
var map__23450__$1 = ((((!((map__23450 == null)))?((((map__23450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23450):map__23450);
var state = cljs.core.get.call(null,map__23450__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23451 = p__23449;
var map__23451__$1 = ((((!((map__23451 == null)))?((((map__23451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23451):map__23451);
var ref = cljs.core.get.call(null,map__23451__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23450,map__23450__$1,state,map__23451,map__23451__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__23450,map__23450__$1,state,map__23451,map__23451__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__23454,key,_){
var map__23455 = p__23454;
var map__23455__$1 = ((((!((map__23455 == null)))?((((map__23455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);
var state = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__23457,_,p__23458){
var map__23459 = p__23457;
var map__23459__$1 = ((((!((map__23459 == null)))?((((map__23459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23459):map__23459);
var state = cljs.core.get.call(null,map__23459__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23460 = p__23458;
var map__23460__$1 = ((((!((map__23460 == null)))?((((map__23460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23460):map__23460);
var board = cljs.core.get.call(null,map__23460__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23459,map__23459__$1,state,map__23460,map__23460__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__23459,map__23459__$1,state,map__23460,map__23460__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__23464,_,p__23465){
var map__23466 = p__23464;
var map__23466__$1 = ((((!((map__23466 == null)))?((((map__23466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23466):map__23466);
var state = cljs.core.get.call(null,map__23466__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23467 = p__23465;
var map__23467__$1 = ((((!((map__23467 == null)))?((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23467):map__23467);
var board = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23466,map__23466__$1,state,map__23467,map__23467__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__23466,map__23466__$1,state,map__23467,map__23467__$1,board,data){
return (function (p1__23463_SHARP_){
return cljs.core.merge.call(null,p1__23463_SHARP_,data);
});})(map__23466,map__23466__$1,state,map__23467,map__23467__$1,board,data))
);
});})(map__23466,map__23466__$1,state,map__23467,map__23467__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__23470,_,___$1){
var map__23471 = p__23470;
var map__23471__$1 = ((((!((map__23471 == null)))?((((map__23471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23471):map__23471);
var state = cljs.core.get.call(null,map__23471__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23471,map__23471__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__23471,map__23471__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map