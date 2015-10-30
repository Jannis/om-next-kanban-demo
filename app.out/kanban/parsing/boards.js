// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__10380_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__10380_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10381_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__10381_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__10382,key,_){
var map__10383 = p__10382;
var map__10383__$1 = ((((!((map__10383 == null)))?((((map__10383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10383):map__10383);
var state = cljs.core.get.call(null,map__10383__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__10385,key,_){
var map__10386 = p__10385;
var map__10386__$1 = ((((!((map__10386 == null)))?((((map__10386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10386):map__10386);
var state = cljs.core.get.call(null,map__10386__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__10388,_,p__10389){
var map__10390 = p__10388;
var map__10390__$1 = ((((!((map__10390 == null)))?((((map__10390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10390):map__10390);
var state = cljs.core.get.call(null,map__10390__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10391 = p__10389;
var map__10391__$1 = ((((!((map__10391 == null)))?((((map__10391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10391):map__10391);
var ref = cljs.core.get.call(null,map__10391__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10390,map__10390__$1,state,map__10391,map__10391__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__10390,map__10390__$1,state,map__10391,map__10391__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map