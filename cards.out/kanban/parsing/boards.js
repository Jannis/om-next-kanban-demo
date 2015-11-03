// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__81914_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__81914_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__81915_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__81915_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__81916,key,_){
var map__81917 = p__81916;
var map__81917__$1 = ((((!((map__81917 == null)))?((((map__81917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81917):map__81917);
var state = cljs.core.get.call(null,map__81917__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__81919,key,_){
var map__81920 = p__81919;
var map__81920__$1 = ((((!((map__81920 == null)))?((((map__81920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81920):map__81920);
var state = cljs.core.get.call(null,map__81920__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__81922,_,p__81923){
var map__81924 = p__81922;
var map__81924__$1 = ((((!((map__81924 == null)))?((((map__81924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81924):map__81924);
var state = cljs.core.get.call(null,map__81924__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__81925 = p__81923;
var map__81925__$1 = ((((!((map__81925 == null)))?((((map__81925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81925):map__81925);
var ref = cljs.core.get.call(null,map__81925__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81924,map__81924__$1,state,map__81925,map__81925__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__81924,map__81924__$1,state,map__81925,map__81925__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__81928,key,_){
var map__81929 = p__81928;
var map__81929__$1 = ((((!((map__81929 == null)))?((((map__81929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81929):map__81929);
var state = cljs.core.get.call(null,map__81929__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__81931,_,p__81932){
var map__81933 = p__81931;
var map__81933__$1 = ((((!((map__81933 == null)))?((((map__81933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81933):map__81933);
var state = cljs.core.get.call(null,map__81933__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__81934 = p__81932;
var map__81934__$1 = ((((!((map__81934 == null)))?((((map__81934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81934):map__81934);
var board = cljs.core.get.call(null,map__81934__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81933,map__81933__$1,state,map__81934,map__81934__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__81933,map__81933__$1,state,map__81934,map__81934__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__81938,_,p__81939){
var map__81940 = p__81938;
var map__81940__$1 = ((((!((map__81940 == null)))?((((map__81940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81940):map__81940);
var state = cljs.core.get.call(null,map__81940__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__81941 = p__81939;
var map__81941__$1 = ((((!((map__81941 == null)))?((((map__81941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81941):map__81941);
var board = cljs.core.get.call(null,map__81941__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__81941__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81940,map__81940__$1,state,map__81941,map__81941__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__81940,map__81940__$1,state,map__81941,map__81941__$1,board,data){
return (function (p1__81937_SHARP_){
return cljs.core.merge.call(null,p1__81937_SHARP_,data);
});})(map__81940,map__81940__$1,state,map__81941,map__81941__$1,board,data))
);
});})(map__81940,map__81940__$1,state,map__81941,map__81941__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__81944,_,___$1){
var map__81945 = p__81944;
var map__81945__$1 = ((((!((map__81945 == null)))?((((map__81945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81945):map__81945);
var state = cljs.core.get.call(null,map__81945__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__81945,map__81945__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__81945,map__81945__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map