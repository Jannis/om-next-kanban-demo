// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__24422_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__24422_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__24423_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__24423_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__24424,key,_){
var map__24425 = p__24424;
var map__24425__$1 = ((((!((map__24425 == null)))?((((map__24425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24425):map__24425);
var state = cljs.core.get.call(null,map__24425__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__24427,key,_){
var map__24428 = p__24427;
var map__24428__$1 = ((((!((map__24428 == null)))?((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var state = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__24430,_,p__24431){
var map__24432 = p__24430;
var map__24432__$1 = ((((!((map__24432 == null)))?((((map__24432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24432):map__24432);
var state = cljs.core.get.call(null,map__24432__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24433 = p__24431;
var map__24433__$1 = ((((!((map__24433 == null)))?((((map__24433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);
var ref = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24432,map__24432__$1,state,map__24433,map__24433__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__24432,map__24432__$1,state,map__24433,map__24433__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__24436,key,_){
var map__24437 = p__24436;
var map__24437__$1 = ((((!((map__24437 == null)))?((((map__24437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);
var state = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__24439,_,p__24440){
var map__24441 = p__24439;
var map__24441__$1 = ((((!((map__24441 == null)))?((((map__24441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24441):map__24441);
var state = cljs.core.get.call(null,map__24441__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24442 = p__24440;
var map__24442__$1 = ((((!((map__24442 == null)))?((((map__24442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24442):map__24442);
var board = cljs.core.get.call(null,map__24442__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24441,map__24441__$1,state,map__24442,map__24442__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__24441,map__24441__$1,state,map__24442,map__24442__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__24446,_,p__24447){
var map__24448 = p__24446;
var map__24448__$1 = ((((!((map__24448 == null)))?((((map__24448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24448):map__24448);
var state = cljs.core.get.call(null,map__24448__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__24449 = p__24447;
var map__24449__$1 = ((((!((map__24449 == null)))?((((map__24449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24449):map__24449);
var board = cljs.core.get.call(null,map__24449__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__24449__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24448,map__24448__$1,state,map__24449,map__24449__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__24448,map__24448__$1,state,map__24449,map__24449__$1,board,data){
return (function (p1__24445_SHARP_){
return cljs.core.merge.call(null,p1__24445_SHARP_,data);
});})(map__24448,map__24448__$1,state,map__24449,map__24449__$1,board,data))
);
});})(map__24448,map__24448__$1,state,map__24449,map__24449__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__24452,_,___$1){
var map__24453 = p__24452;
var map__24453__$1 = ((((!((map__24453 == null)))?((((map__24453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24453):map__24453);
var state = cljs.core.get.call(null,map__24453__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__24453,map__24453__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__24453,map__24453__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map