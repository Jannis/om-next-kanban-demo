// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__8540_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__8540_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8541_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__8541_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__8542,key,_){
var map__8543 = p__8542;
var map__8543__$1 = ((((!((map__8543 == null)))?((((map__8543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8543):map__8543);
var state = cljs.core.get.call(null,map__8543__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__8545,key,_){
var map__8546 = p__8545;
var map__8546__$1 = ((((!((map__8546 == null)))?((((map__8546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8546):map__8546);
var state = cljs.core.get.call(null,map__8546__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__8548,_,p__8549){
var map__8550 = p__8548;
var map__8550__$1 = ((((!((map__8550 == null)))?((((map__8550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8550):map__8550);
var state = cljs.core.get.call(null,map__8550__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8551 = p__8549;
var map__8551__$1 = ((((!((map__8551 == null)))?((((map__8551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8551):map__8551);
var ref = cljs.core.get.call(null,map__8551__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8550,map__8550__$1,state,map__8551,map__8551__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__8550,map__8550__$1,state,map__8551,map__8551__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__8554,key,_){
var map__8555 = p__8554;
var map__8555__$1 = ((((!((map__8555 == null)))?((((map__8555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8555):map__8555);
var state = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__8557,_,p__8558){
var map__8559 = p__8557;
var map__8559__$1 = ((((!((map__8559 == null)))?((((map__8559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8559):map__8559);
var state = cljs.core.get.call(null,map__8559__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8560 = p__8558;
var map__8560__$1 = ((((!((map__8560 == null)))?((((map__8560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8560):map__8560);
var board = cljs.core.get.call(null,map__8560__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8559,map__8559__$1,state,map__8560,map__8560__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__8559,map__8559__$1,state,map__8560,map__8560__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__8564,_,p__8565){
var map__8566 = p__8564;
var map__8566__$1 = ((((!((map__8566 == null)))?((((map__8566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8566):map__8566);
var state = cljs.core.get.call(null,map__8566__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8567 = p__8565;
var map__8567__$1 = ((((!((map__8567 == null)))?((((map__8567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8567):map__8567);
var board = cljs.core.get.call(null,map__8567__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__8567__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8566,map__8566__$1,state,map__8567,map__8567__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__8566,map__8566__$1,state,map__8567,map__8567__$1,board,data){
return (function (p1__8563_SHARP_){
return cljs.core.merge.call(null,p1__8563_SHARP_,data);
});})(map__8566,map__8566__$1,state,map__8567,map__8567__$1,board,data))
);
});})(map__8566,map__8566__$1,state,map__8567,map__8567__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__8570,_,___$1){
var map__8571 = p__8570;
var map__8571__$1 = ((((!((map__8571 == null)))?((((map__8571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8571):map__8571);
var state = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8571,map__8571__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__8571,map__8571__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map