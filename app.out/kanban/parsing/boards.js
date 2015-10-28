// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__10288_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__10288_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10289_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__10289_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__10290,key,_){
var map__10291 = p__10290;
var map__10291__$1 = ((((!((map__10291 == null)))?((((map__10291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10291):map__10291);
var state = cljs.core.get.call(null,map__10291__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__10293,key,_){
var map__10294 = p__10293;
var map__10294__$1 = ((((!((map__10294 == null)))?((((map__10294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10294):map__10294);
var state = cljs.core.get.call(null,map__10294__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__10296,_,p__10297){
var map__10298 = p__10296;
var map__10298__$1 = ((((!((map__10298 == null)))?((((map__10298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10298):map__10298);
var state = cljs.core.get.call(null,map__10298__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10299 = p__10297;
var map__10299__$1 = ((((!((map__10299 == null)))?((((map__10299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10299):map__10299);
var ref = cljs.core.get.call(null,map__10299__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10298,map__10298__$1,state,map__10299,map__10299__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__10298,map__10298__$1,state,map__10299,map__10299__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map