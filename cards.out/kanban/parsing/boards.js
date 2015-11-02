// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__31081_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__31081_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__31082_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__31082_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__31083,key,_){
var map__31084 = p__31083;
var map__31084__$1 = ((((!((map__31084 == null)))?((((map__31084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31084):map__31084);
var state = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__31086,key,_){
var map__31087 = p__31086;
var map__31087__$1 = ((((!((map__31087 == null)))?((((map__31087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31087):map__31087);
var state = cljs.core.get.call(null,map__31087__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__31089,_,p__31090){
var map__31091 = p__31089;
var map__31091__$1 = ((((!((map__31091 == null)))?((((map__31091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31091):map__31091);
var state = cljs.core.get.call(null,map__31091__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31092 = p__31090;
var map__31092__$1 = ((((!((map__31092 == null)))?((((map__31092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31092):map__31092);
var ref = cljs.core.get.call(null,map__31092__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31091,map__31091__$1,state,map__31092,map__31092__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__31091,map__31091__$1,state,map__31092,map__31092__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__31095,key,_){
var map__31096 = p__31095;
var map__31096__$1 = ((((!((map__31096 == null)))?((((map__31096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31096):map__31096);
var state = cljs.core.get.call(null,map__31096__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__31098,_,p__31099){
var map__31100 = p__31098;
var map__31100__$1 = ((((!((map__31100 == null)))?((((map__31100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31100):map__31100);
var state = cljs.core.get.call(null,map__31100__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31101 = p__31099;
var map__31101__$1 = ((((!((map__31101 == null)))?((((map__31101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31101):map__31101);
var board = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31100,map__31100__$1,state,map__31101,map__31101__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__31100,map__31100__$1,state,map__31101,map__31101__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__31105,_,p__31106){
var map__31107 = p__31105;
var map__31107__$1 = ((((!((map__31107 == null)))?((((map__31107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31107):map__31107);
var state = cljs.core.get.call(null,map__31107__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__31108 = p__31106;
var map__31108__$1 = ((((!((map__31108 == null)))?((((map__31108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31108):map__31108);
var board = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","active","boards/active",1298990951)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31107,map__31107__$1,state,map__31108,map__31108__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__31107,map__31107__$1,state,map__31108,map__31108__$1,board,data){
return (function (p1__31104_SHARP_){
return cljs.core.merge.call(null,p1__31104_SHARP_,data);
});})(map__31107,map__31107__$1,state,map__31108,map__31108__$1,board,data))
);
});})(map__31107,map__31107__$1,state,map__31108,map__31108__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),kanban.parsing.boards.get_boards.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694))))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__31111,_,___$1){
var map__31112 = p__31111;
var map__31112__$1 = ((((!((map__31112 == null)))?((((map__31112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31112):map__31112);
var state = cljs.core.get.call(null,map__31112__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__31112,map__31112__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__31112,map__31112__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map