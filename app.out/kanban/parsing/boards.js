// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__16433_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__16433_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__16434_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__16434_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__16435,key,_){
var map__16436 = p__16435;
var map__16436__$1 = ((((!((map__16436 == null)))?((((map__16436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16436):map__16436);
var state = cljs.core.get.call(null,map__16436__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__16438,key,_){
var map__16439 = p__16438;
var map__16439__$1 = ((((!((map__16439 == null)))?((((map__16439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16439):map__16439);
var state = cljs.core.get.call(null,map__16439__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__16441,_,p__16442){
var map__16443 = p__16441;
var map__16443__$1 = ((((!((map__16443 == null)))?((((map__16443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16443):map__16443);
var state = cljs.core.get.call(null,map__16443__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16444 = p__16442;
var map__16444__$1 = ((((!((map__16444 == null)))?((((map__16444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16444):map__16444);
var ref = cljs.core.get.call(null,map__16444__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16443,map__16443__$1,state,map__16444,map__16444__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__16443,map__16443__$1,state,map__16444,map__16444__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map