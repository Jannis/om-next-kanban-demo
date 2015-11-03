// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__152092_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__152092_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__152093_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__152093_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__152094,key,_){
var map__152095 = p__152094;
var map__152095__$1 = ((((!((map__152095 == null)))?((((map__152095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152095):map__152095);
var state = cljs.core.get.call(null,map__152095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__152097,key,_){
var map__152098 = p__152097;
var map__152098__$1 = ((((!((map__152098 == null)))?((((map__152098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152098):map__152098);
var state = cljs.core.get.call(null,map__152098__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__152100,_,p__152101){
var map__152102 = p__152100;
var map__152102__$1 = ((((!((map__152102 == null)))?((((map__152102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152102):map__152102);
var state = cljs.core.get.call(null,map__152102__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152103 = p__152101;
var map__152103__$1 = ((((!((map__152103 == null)))?((((map__152103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152103):map__152103);
var ref = cljs.core.get.call(null,map__152103__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152102,map__152102__$1,state,map__152103,map__152103__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__152102,map__152102__$1,state,map__152103,map__152103__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__152106,key,_){
var map__152107 = p__152106;
var map__152107__$1 = ((((!((map__152107 == null)))?((((map__152107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152107):map__152107);
var state = cljs.core.get.call(null,map__152107__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__152109,_,p__152110){
var map__152111 = p__152109;
var map__152111__$1 = ((((!((map__152111 == null)))?((((map__152111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152111):map__152111);
var state = cljs.core.get.call(null,map__152111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152112 = p__152110;
var map__152112__$1 = ((((!((map__152112 == null)))?((((map__152112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152112):map__152112);
var board = cljs.core.get.call(null,map__152112__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152111,map__152111__$1,state,map__152112,map__152112__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__152111,map__152111__$1,state,map__152112,map__152112__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__152116,_,p__152117){
var map__152118 = p__152116;
var map__152118__$1 = ((((!((map__152118 == null)))?((((map__152118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152118):map__152118);
var state = cljs.core.get.call(null,map__152118__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__152119 = p__152117;
var map__152119__$1 = ((((!((map__152119 == null)))?((((map__152119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152119):map__152119);
var board = cljs.core.get.call(null,map__152119__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__152119__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152118,map__152118__$1,state,map__152119,map__152119__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__152118,map__152118__$1,state,map__152119,map__152119__$1,board,data){
return (function (p1__152115_SHARP_){
return cljs.core.merge.call(null,p1__152115_SHARP_,data);
});})(map__152118,map__152118__$1,state,map__152119,map__152119__$1,board,data))
);
});})(map__152118,map__152118__$1,state,map__152119,map__152119__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__152122,_,___$1){
var map__152123 = p__152122;
var map__152123__$1 = ((((!((map__152123 == null)))?((((map__152123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152123):map__152123);
var state = cljs.core.get.call(null,map__152123__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__152123,map__152123__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__152123,map__152123__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map