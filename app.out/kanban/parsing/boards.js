// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__82014_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__82014_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__82015_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__82015_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__82016,key,_){
var map__82017 = p__82016;
var map__82017__$1 = ((((!((map__82017 == null)))?((((map__82017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82017):map__82017);
var state = cljs.core.get.call(null,map__82017__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__82019,key,_){
var map__82020 = p__82019;
var map__82020__$1 = ((((!((map__82020 == null)))?((((map__82020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82020):map__82020);
var state = cljs.core.get.call(null,map__82020__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__82022,_,p__82023){
var map__82024 = p__82022;
var map__82024__$1 = ((((!((map__82024 == null)))?((((map__82024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82024):map__82024);
var state = cljs.core.get.call(null,map__82024__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__82025 = p__82023;
var map__82025__$1 = ((((!((map__82025 == null)))?((((map__82025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82025):map__82025);
var ref = cljs.core.get.call(null,map__82025__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__82024,map__82024__$1,state,map__82025,map__82025__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__82024,map__82024__$1,state,map__82025,map__82025__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__82028,key,_){
var map__82029 = p__82028;
var map__82029__$1 = ((((!((map__82029 == null)))?((((map__82029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82029):map__82029);
var state = cljs.core.get.call(null,map__82029__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__82031,_,p__82032){
var map__82033 = p__82031;
var map__82033__$1 = ((((!((map__82033 == null)))?((((map__82033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82033):map__82033);
var state = cljs.core.get.call(null,map__82033__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__82034 = p__82032;
var map__82034__$1 = ((((!((map__82034 == null)))?((((map__82034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82034):map__82034);
var board = cljs.core.get.call(null,map__82034__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__82033,map__82033__$1,state,map__82034,map__82034__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__82033,map__82033__$1,state,map__82034,map__82034__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__82038,_,p__82039){
var map__82040 = p__82038;
var map__82040__$1 = ((((!((map__82040 == null)))?((((map__82040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82040):map__82040);
var state = cljs.core.get.call(null,map__82040__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__82041 = p__82039;
var map__82041__$1 = ((((!((map__82041 == null)))?((((map__82041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82041):map__82041);
var board = cljs.core.get.call(null,map__82041__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__82041__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__82040,map__82040__$1,state,map__82041,map__82041__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__82040,map__82040__$1,state,map__82041,map__82041__$1,board,data){
return (function (p1__82037_SHARP_){
return cljs.core.merge.call(null,p1__82037_SHARP_,data);
});})(map__82040,map__82040__$1,state,map__82041,map__82041__$1,board,data))
);
});})(map__82040,map__82040__$1,state,map__82041,map__82041__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__82044,_,___$1){
var map__82045 = p__82044;
var map__82045__$1 = ((((!((map__82045 == null)))?((((map__82045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82045):map__82045);
var state = cljs.core.get.call(null,map__82045__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__82045,map__82045__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__82045,map__82045__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map