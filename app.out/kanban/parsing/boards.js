// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__8695_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__8695_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__8696_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__8696_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__8697,key,_){
var map__8698 = p__8697;
var map__8698__$1 = ((((!((map__8698 == null)))?((((map__8698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8698):map__8698);
var state = cljs.core.get.call(null,map__8698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__8700,key,_){
var map__8701 = p__8700;
var map__8701__$1 = ((((!((map__8701 == null)))?((((map__8701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8701):map__8701);
var state = cljs.core.get.call(null,map__8701__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__8703,_,p__8704){
var map__8705 = p__8703;
var map__8705__$1 = ((((!((map__8705 == null)))?((((map__8705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8705):map__8705);
var state = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8706 = p__8704;
var map__8706__$1 = ((((!((map__8706 == null)))?((((map__8706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8706):map__8706);
var ref = cljs.core.get.call(null,map__8706__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8705,map__8705__$1,state,map__8706,map__8706__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__8705,map__8705__$1,state,map__8706,map__8706__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__8709,key,_){
var map__8710 = p__8709;
var map__8710__$1 = ((((!((map__8710 == null)))?((((map__8710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8710):map__8710);
var state = cljs.core.get.call(null,map__8710__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__8712,_,p__8713){
var map__8714 = p__8712;
var map__8714__$1 = ((((!((map__8714 == null)))?((((map__8714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8714):map__8714);
var state = cljs.core.get.call(null,map__8714__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8715 = p__8713;
var map__8715__$1 = ((((!((map__8715 == null)))?((((map__8715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8715):map__8715);
var board = cljs.core.get.call(null,map__8715__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8714,map__8714__$1,state,map__8715,map__8715__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__8714,map__8714__$1,state,map__8715,map__8715__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__8719,_,p__8720){
var map__8721 = p__8719;
var map__8721__$1 = ((((!((map__8721 == null)))?((((map__8721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8721):map__8721);
var state = cljs.core.get.call(null,map__8721__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__8722 = p__8720;
var map__8722__$1 = ((((!((map__8722 == null)))?((((map__8722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8722):map__8722);
var board = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__8722__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8721,map__8721__$1,state,map__8722,map__8722__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__8721,map__8721__$1,state,map__8722,map__8722__$1,board,data){
return (function (p1__8718_SHARP_){
return cljs.core.merge.call(null,p1__8718_SHARP_,data);
});})(map__8721,map__8721__$1,state,map__8722,map__8722__$1,board,data))
);
});})(map__8721,map__8721__$1,state,map__8722,map__8722__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__8725,_,___$1){
var map__8726 = p__8725;
var map__8726__$1 = ((((!((map__8726 == null)))?((((map__8726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8726):map__8726);
var state = cljs.core.get.call(null,map__8726__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__8726,map__8726__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__8726,map__8726__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map