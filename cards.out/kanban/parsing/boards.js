// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__82992_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__82992_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__82993_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__82993_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__82994,key,_){
var map__82995 = p__82994;
var map__82995__$1 = ((((!((map__82995 == null)))?((((map__82995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82995):map__82995);
var state = cljs.core.get.call(null,map__82995__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__82997,key,_){
var map__82998 = p__82997;
var map__82998__$1 = ((((!((map__82998 == null)))?((((map__82998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82998):map__82998);
var state = cljs.core.get.call(null,map__82998__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__83000,_,p__83001){
var map__83002 = p__83000;
var map__83002__$1 = ((((!((map__83002 == null)))?((((map__83002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83002):map__83002);
var state = cljs.core.get.call(null,map__83002__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83003 = p__83001;
var map__83003__$1 = ((((!((map__83003 == null)))?((((map__83003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83003):map__83003);
var ref = cljs.core.get.call(null,map__83003__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83002,map__83002__$1,state,map__83003,map__83003__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__83002,map__83002__$1,state,map__83003,map__83003__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__83006,key,_){
var map__83007 = p__83006;
var map__83007__$1 = ((((!((map__83007 == null)))?((((map__83007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83007):map__83007);
var state = cljs.core.get.call(null,map__83007__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__83009,_,p__83010){
var map__83011 = p__83009;
var map__83011__$1 = ((((!((map__83011 == null)))?((((map__83011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83011):map__83011);
var state = cljs.core.get.call(null,map__83011__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83012 = p__83010;
var map__83012__$1 = ((((!((map__83012 == null)))?((((map__83012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83012):map__83012);
var board = cljs.core.get.call(null,map__83012__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83011,map__83011__$1,state,map__83012,map__83012__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__83011,map__83011__$1,state,map__83012,map__83012__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__83016,_,p__83017){
var map__83018 = p__83016;
var map__83018__$1 = ((((!((map__83018 == null)))?((((map__83018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83018):map__83018);
var state = cljs.core.get.call(null,map__83018__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83019 = p__83017;
var map__83019__$1 = ((((!((map__83019 == null)))?((((map__83019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83019):map__83019);
var board = cljs.core.get.call(null,map__83019__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__83019__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83018,map__83018__$1,state,map__83019,map__83019__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__83018,map__83018__$1,state,map__83019,map__83019__$1,board,data){
return (function (p1__83015_SHARP_){
return cljs.core.merge.call(null,p1__83015_SHARP_,data);
});})(map__83018,map__83018__$1,state,map__83019,map__83019__$1,board,data))
);
});})(map__83018,map__83018__$1,state,map__83019,map__83019__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__83022,_,___$1){
var map__83023 = p__83022;
var map__83023__$1 = ((((!((map__83023 == null)))?((((map__83023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83023):map__83023);
var state = cljs.core.get.call(null,map__83023__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__83023,map__83023__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__83023,map__83023__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map