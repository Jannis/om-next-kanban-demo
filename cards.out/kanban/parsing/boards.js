// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__83592_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__83592_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__83593_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__83593_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__83594,key,_){
var map__83595 = p__83594;
var map__83595__$1 = ((((!((map__83595 == null)))?((((map__83595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83595):map__83595);
var state = cljs.core.get.call(null,map__83595__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__83597,key,_){
var map__83598 = p__83597;
var map__83598__$1 = ((((!((map__83598 == null)))?((((map__83598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83598):map__83598);
var state = cljs.core.get.call(null,map__83598__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__83600,_,p__83601){
var map__83602 = p__83600;
var map__83602__$1 = ((((!((map__83602 == null)))?((((map__83602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83602):map__83602);
var state = cljs.core.get.call(null,map__83602__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83603 = p__83601;
var map__83603__$1 = ((((!((map__83603 == null)))?((((map__83603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83603):map__83603);
var ref = cljs.core.get.call(null,map__83603__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83602,map__83602__$1,state,map__83603,map__83603__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__83602,map__83602__$1,state,map__83603,map__83603__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__83606,key,_){
var map__83607 = p__83606;
var map__83607__$1 = ((((!((map__83607 == null)))?((((map__83607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83607):map__83607);
var state = cljs.core.get.call(null,map__83607__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__83609,_,p__83610){
var map__83611 = p__83609;
var map__83611__$1 = ((((!((map__83611 == null)))?((((map__83611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83611):map__83611);
var state = cljs.core.get.call(null,map__83611__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83612 = p__83610;
var map__83612__$1 = ((((!((map__83612 == null)))?((((map__83612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83612):map__83612);
var board = cljs.core.get.call(null,map__83612__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83611,map__83611__$1,state,map__83612,map__83612__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__83611,map__83611__$1,state,map__83612,map__83612__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__83616,_,p__83617){
var map__83618 = p__83616;
var map__83618__$1 = ((((!((map__83618 == null)))?((((map__83618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83618):map__83618);
var state = cljs.core.get.call(null,map__83618__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83619 = p__83617;
var map__83619__$1 = ((((!((map__83619 == null)))?((((map__83619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83619):map__83619);
var board = cljs.core.get.call(null,map__83619__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__83619__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83618,map__83618__$1,state,map__83619,map__83619__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__83618,map__83618__$1,state,map__83619,map__83619__$1,board,data){
return (function (p1__83615_SHARP_){
return cljs.core.merge.call(null,p1__83615_SHARP_,data);
});})(map__83618,map__83618__$1,state,map__83619,map__83619__$1,board,data))
);
});})(map__83618,map__83618__$1,state,map__83619,map__83619__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__83622,_,___$1){
var map__83623 = p__83622;
var map__83623__$1 = ((((!((map__83623 == null)))?((((map__83623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83623):map__83623);
var state = cljs.core.get.call(null,map__83623__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83623,map__83623__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__83623,map__83623__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map