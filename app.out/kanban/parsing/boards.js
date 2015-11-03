// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__83092_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__83092_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__83093_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__83093_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__83094,key,_){
var map__83095 = p__83094;
var map__83095__$1 = ((((!((map__83095 == null)))?((((map__83095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83095):map__83095);
var state = cljs.core.get.call(null,map__83095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__83097,key,_){
var map__83098 = p__83097;
var map__83098__$1 = ((((!((map__83098 == null)))?((((map__83098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83098):map__83098);
var state = cljs.core.get.call(null,map__83098__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__83100,_,p__83101){
var map__83102 = p__83100;
var map__83102__$1 = ((((!((map__83102 == null)))?((((map__83102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83102):map__83102);
var state = cljs.core.get.call(null,map__83102__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83103 = p__83101;
var map__83103__$1 = ((((!((map__83103 == null)))?((((map__83103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83103):map__83103);
var ref = cljs.core.get.call(null,map__83103__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83102,map__83102__$1,state,map__83103,map__83103__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__83102,map__83102__$1,state,map__83103,map__83103__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__83106,key,_){
var map__83107 = p__83106;
var map__83107__$1 = ((((!((map__83107 == null)))?((((map__83107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83107):map__83107);
var state = cljs.core.get.call(null,map__83107__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__83109,_,p__83110){
var map__83111 = p__83109;
var map__83111__$1 = ((((!((map__83111 == null)))?((((map__83111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83111):map__83111);
var state = cljs.core.get.call(null,map__83111__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83112 = p__83110;
var map__83112__$1 = ((((!((map__83112 == null)))?((((map__83112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83112):map__83112);
var board = cljs.core.get.call(null,map__83112__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83111,map__83111__$1,state,map__83112,map__83112__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__83111,map__83111__$1,state,map__83112,map__83112__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__83116,_,p__83117){
var map__83118 = p__83116;
var map__83118__$1 = ((((!((map__83118 == null)))?((((map__83118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83118):map__83118);
var state = cljs.core.get.call(null,map__83118__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83119 = p__83117;
var map__83119__$1 = ((((!((map__83119 == null)))?((((map__83119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83119):map__83119);
var board = cljs.core.get.call(null,map__83119__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__83119__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83118,map__83118__$1,state,map__83119,map__83119__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__83118,map__83118__$1,state,map__83119,map__83119__$1,board,data){
return (function (p1__83115_SHARP_){
return cljs.core.merge.call(null,p1__83115_SHARP_,data);
});})(map__83118,map__83118__$1,state,map__83119,map__83119__$1,board,data))
);
});})(map__83118,map__83118__$1,state,map__83119,map__83119__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__83122,_,___$1){
var map__83123 = p__83122;
var map__83123__$1 = ((((!((map__83123 == null)))?((((map__83123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83123):map__83123);
var state = cljs.core.get.call(null,map__83123__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83123,map__83123__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__83123,map__83123__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map