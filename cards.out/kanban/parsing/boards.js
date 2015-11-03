// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__151767_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__151767_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__151768_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__151768_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__151769,key,_){
var map__151770 = p__151769;
var map__151770__$1 = ((((!((map__151770 == null)))?((((map__151770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151770):map__151770);
var state = cljs.core.get.call(null,map__151770__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__151772,key,_){
var map__151773 = p__151772;
var map__151773__$1 = ((((!((map__151773 == null)))?((((map__151773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151773):map__151773);
var state = cljs.core.get.call(null,map__151773__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__151775,_,p__151776){
var map__151777 = p__151775;
var map__151777__$1 = ((((!((map__151777 == null)))?((((map__151777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151777):map__151777);
var state = cljs.core.get.call(null,map__151777__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151778 = p__151776;
var map__151778__$1 = ((((!((map__151778 == null)))?((((map__151778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151778):map__151778);
var ref = cljs.core.get.call(null,map__151778__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151777,map__151777__$1,state,map__151778,map__151778__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__151777,map__151777__$1,state,map__151778,map__151778__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__151781,key,_){
var map__151782 = p__151781;
var map__151782__$1 = ((((!((map__151782 == null)))?((((map__151782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151782):map__151782);
var state = cljs.core.get.call(null,map__151782__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__151784,_,p__151785){
var map__151786 = p__151784;
var map__151786__$1 = ((((!((map__151786 == null)))?((((map__151786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151786):map__151786);
var state = cljs.core.get.call(null,map__151786__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151787 = p__151785;
var map__151787__$1 = ((((!((map__151787 == null)))?((((map__151787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151787):map__151787);
var board = cljs.core.get.call(null,map__151787__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151786,map__151786__$1,state,map__151787,map__151787__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__151786,map__151786__$1,state,map__151787,map__151787__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__151791,_,p__151792){
var map__151793 = p__151791;
var map__151793__$1 = ((((!((map__151793 == null)))?((((map__151793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151793):map__151793);
var state = cljs.core.get.call(null,map__151793__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__151794 = p__151792;
var map__151794__$1 = ((((!((map__151794 == null)))?((((map__151794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151794):map__151794);
var board = cljs.core.get.call(null,map__151794__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__151794__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151793,map__151793__$1,state,map__151794,map__151794__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__151793,map__151793__$1,state,map__151794,map__151794__$1,board,data){
return (function (p1__151790_SHARP_){
return cljs.core.merge.call(null,p1__151790_SHARP_,data);
});})(map__151793,map__151793__$1,state,map__151794,map__151794__$1,board,data))
);
});})(map__151793,map__151793__$1,state,map__151794,map__151794__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__151797,_,___$1){
var map__151798 = p__151797;
var map__151798__$1 = ((((!((map__151798 == null)))?((((map__151798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151798):map__151798);
var state = cljs.core.get.call(null,map__151798__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__151798,map__151798__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__151798,map__151798__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map