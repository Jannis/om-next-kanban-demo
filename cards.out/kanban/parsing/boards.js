// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__23018_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__23018_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__23019_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__23019_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__23020,key,_){
var map__23021 = p__23020;
var map__23021__$1 = ((((!((map__23021 == null)))?((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23021):map__23021);
var state = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__23023,key,_){
var map__23024 = p__23023;
var map__23024__$1 = ((((!((map__23024 == null)))?((((map__23024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23024):map__23024);
var state = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__23026,_,p__23027){
var map__23028 = p__23026;
var map__23028__$1 = ((((!((map__23028 == null)))?((((map__23028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23028):map__23028);
var state = cljs.core.get.call(null,map__23028__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23029 = p__23027;
var map__23029__$1 = ((((!((map__23029 == null)))?((((map__23029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23029):map__23029);
var ref = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23028,map__23028__$1,state,map__23029,map__23029__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__23028,map__23028__$1,state,map__23029,map__23029__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__23032,key,_){
var map__23033 = p__23032;
var map__23033__$1 = ((((!((map__23033 == null)))?((((map__23033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23033):map__23033);
var state = cljs.core.get.call(null,map__23033__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__23035,_,p__23036){
var map__23037 = p__23035;
var map__23037__$1 = ((((!((map__23037 == null)))?((((map__23037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23037):map__23037);
var state = cljs.core.get.call(null,map__23037__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23038 = p__23036;
var map__23038__$1 = ((((!((map__23038 == null)))?((((map__23038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23038):map__23038);
var board = cljs.core.get.call(null,map__23038__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23037,map__23037__$1,state,map__23038,map__23038__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__23037,map__23037__$1,state,map__23038,map__23038__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__23042,_,p__23043){
var map__23044 = p__23042;
var map__23044__$1 = ((((!((map__23044 == null)))?((((map__23044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23044):map__23044);
var state = cljs.core.get.call(null,map__23044__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23045 = p__23043;
var map__23045__$1 = ((((!((map__23045 == null)))?((((map__23045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23045):map__23045);
var board = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__23045__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23044,map__23044__$1,state,map__23045,map__23045__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__23044,map__23044__$1,state,map__23045,map__23045__$1,board,data){
return (function (p1__23041_SHARP_){
return cljs.core.merge.call(null,p1__23041_SHARP_,data);
});})(map__23044,map__23044__$1,state,map__23045,map__23045__$1,board,data))
);
});})(map__23044,map__23044__$1,state,map__23045,map__23045__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__23048,_,___$1){
var map__23049 = p__23048;
var map__23049__$1 = ((((!((map__23049 == null)))?((((map__23049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23049):map__23049);
var state = cljs.core.get.call(null,map__23049__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23049,map__23049__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__23049,map__23049__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map