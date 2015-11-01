// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__8518_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__8518_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8519_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__8519_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__8520,key,_){
var map__8521 = p__8520;
var map__8521__$1 = ((((!((map__8521 == null)))?((((map__8521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8521):map__8521);
var state = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__8523,key,_){
var map__8524 = p__8523;
var map__8524__$1 = ((((!((map__8524 == null)))?((((map__8524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8524):map__8524);
var state = cljs.core.get.call(null,map__8524__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__8526,_,p__8527){
var map__8528 = p__8526;
var map__8528__$1 = ((((!((map__8528 == null)))?((((map__8528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8528):map__8528);
var state = cljs.core.get.call(null,map__8528__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8529 = p__8527;
var map__8529__$1 = ((((!((map__8529 == null)))?((((map__8529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8529):map__8529);
var ref = cljs.core.get.call(null,map__8529__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8528,map__8528__$1,state,map__8529,map__8529__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__8528,map__8528__$1,state,map__8529,map__8529__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__8532,key,_){
var map__8533 = p__8532;
var map__8533__$1 = ((((!((map__8533 == null)))?((((map__8533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8533):map__8533);
var state = cljs.core.get.call(null,map__8533__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__8535,_,p__8536){
var map__8537 = p__8535;
var map__8537__$1 = ((((!((map__8537 == null)))?((((map__8537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8537):map__8537);
var state = cljs.core.get.call(null,map__8537__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8538 = p__8536;
var map__8538__$1 = ((((!((map__8538 == null)))?((((map__8538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8538):map__8538);
var board = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8537,map__8537__$1,state,map__8538,map__8538__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__8537,map__8537__$1,state,map__8538,map__8538__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__8542,_,p__8543){
var map__8544 = p__8542;
var map__8544__$1 = ((((!((map__8544 == null)))?((((map__8544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8544):map__8544);
var state = cljs.core.get.call(null,map__8544__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8545 = p__8543;
var map__8545__$1 = ((((!((map__8545 == null)))?((((map__8545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8545):map__8545);
var board = cljs.core.get.call(null,map__8545__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__8545__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8544,map__8544__$1,state,map__8545,map__8545__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__8544,map__8544__$1,state,map__8545,map__8545__$1,board,data){
return (function (p1__8541_SHARP_){
return cljs.core.merge.call(null,p1__8541_SHARP_,data);
});})(map__8544,map__8544__$1,state,map__8545,map__8545__$1,board,data))
);
});})(map__8544,map__8544__$1,state,map__8545,map__8545__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__8548,_,___$1){
var map__8549 = p__8548;
var map__8549__$1 = ((((!((map__8549 == null)))?((((map__8549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8549):map__8549);
var state = cljs.core.get.call(null,map__8549__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8549,map__8549__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__8549,map__8549__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map