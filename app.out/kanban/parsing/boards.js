// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__10679_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__10679_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10680_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__10680_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__10681,key,_){
var map__10682 = p__10681;
var map__10682__$1 = ((((!((map__10682 == null)))?((((map__10682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10682):map__10682);
var state = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__10684,key,_){
var map__10685 = p__10684;
var map__10685__$1 = ((((!((map__10685 == null)))?((((map__10685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10685):map__10685);
var state = cljs.core.get.call(null,map__10685__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__10687,_,p__10688){
var map__10689 = p__10687;
var map__10689__$1 = ((((!((map__10689 == null)))?((((map__10689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10689):map__10689);
var state = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10690 = p__10688;
var map__10690__$1 = ((((!((map__10690 == null)))?((((map__10690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);
var ref = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10689,map__10689__$1,state,map__10690,map__10690__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__10689,map__10689__$1,state,map__10690,map__10690__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__10693,key,_){
var map__10694 = p__10693;
var map__10694__$1 = ((((!((map__10694 == null)))?((((map__10694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10694):map__10694);
var state = cljs.core.get.call(null,map__10694__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__10696,_,p__10697){
var map__10698 = p__10696;
var map__10698__$1 = ((((!((map__10698 == null)))?((((map__10698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10698):map__10698);
var state = cljs.core.get.call(null,map__10698__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10699 = p__10697;
var map__10699__$1 = ((((!((map__10699 == null)))?((((map__10699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10699):map__10699);
var board = cljs.core.get.call(null,map__10699__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10698,map__10698__$1,state,map__10699,map__10699__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__10698,map__10698__$1,state,map__10699,map__10699__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__10703,_,p__10704){
var map__10705 = p__10703;
var map__10705__$1 = ((((!((map__10705 == null)))?((((map__10705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10705):map__10705);
var state = cljs.core.get.call(null,map__10705__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10706 = p__10704;
var map__10706__$1 = ((((!((map__10706 == null)))?((((map__10706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10706):map__10706);
var board = cljs.core.get.call(null,map__10706__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__10706__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10705,map__10705__$1,state,map__10706,map__10706__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__10705,map__10705__$1,state,map__10706,map__10706__$1,board,data){
return (function (p1__10702_SHARP_){
return cljs.core.merge.call(null,p1__10702_SHARP_,data);
});})(map__10705,map__10705__$1,state,map__10706,map__10706__$1,board,data))
);
});})(map__10705,map__10705__$1,state,map__10706,map__10706__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__10709,_,___$1){
var map__10710 = p__10709;
var map__10710__$1 = ((((!((map__10710 == null)))?((((map__10710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10710):map__10710);
var state = cljs.core.get.call(null,map__10710__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10710,map__10710__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__10710,map__10710__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map