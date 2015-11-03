// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__15352_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__15352_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__15353_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__15353_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__15354,key,_){
var map__15355 = p__15354;
var map__15355__$1 = ((((!((map__15355 == null)))?((((map__15355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15355):map__15355);
var state = cljs.core.get.call(null,map__15355__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__15357,key,_){
var map__15358 = p__15357;
var map__15358__$1 = ((((!((map__15358 == null)))?((((map__15358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15358):map__15358);
var state = cljs.core.get.call(null,map__15358__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__15360,_,p__15361){
var map__15362 = p__15360;
var map__15362__$1 = ((((!((map__15362 == null)))?((((map__15362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15362):map__15362);
var state = cljs.core.get.call(null,map__15362__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__15363 = p__15361;
var map__15363__$1 = ((((!((map__15363 == null)))?((((map__15363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15363):map__15363);
var ref = cljs.core.get.call(null,map__15363__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15362,map__15362__$1,state,map__15363,map__15363__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__15362,map__15362__$1,state,map__15363,map__15363__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__15366,key,_){
var map__15367 = p__15366;
var map__15367__$1 = ((((!((map__15367 == null)))?((((map__15367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15367):map__15367);
var state = cljs.core.get.call(null,map__15367__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__15369,_,p__15370){
var map__15371 = p__15369;
var map__15371__$1 = ((((!((map__15371 == null)))?((((map__15371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15371):map__15371);
var state = cljs.core.get.call(null,map__15371__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__15372 = p__15370;
var map__15372__$1 = ((((!((map__15372 == null)))?((((map__15372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15372):map__15372);
var board = cljs.core.get.call(null,map__15372__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15371,map__15371__$1,state,map__15372,map__15372__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__15371,map__15371__$1,state,map__15372,map__15372__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__15376,_,p__15377){
var map__15378 = p__15376;
var map__15378__$1 = ((((!((map__15378 == null)))?((((map__15378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15378):map__15378);
var state = cljs.core.get.call(null,map__15378__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__15379 = p__15377;
var map__15379__$1 = ((((!((map__15379 == null)))?((((map__15379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15379):map__15379);
var board = cljs.core.get.call(null,map__15379__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__15379__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15378,map__15378__$1,state,map__15379,map__15379__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__15378,map__15378__$1,state,map__15379,map__15379__$1,board,data){
return (function (p1__15375_SHARP_){
return cljs.core.merge.call(null,p1__15375_SHARP_,data);
});})(map__15378,map__15378__$1,state,map__15379,map__15379__$1,board,data))
);
});})(map__15378,map__15378__$1,state,map__15379,map__15379__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__15382,_,___$1){
var map__15383 = p__15382;
var map__15383__$1 = ((((!((map__15383 == null)))?((((map__15383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15383):map__15383);
var state = cljs.core.get.call(null,map__15383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__15383,map__15383__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__15383,map__15383__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map