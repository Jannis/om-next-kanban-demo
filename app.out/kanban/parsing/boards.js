// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__17607_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__17607_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__17608_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__17608_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__17609,key,_){
var map__17610 = p__17609;
var map__17610__$1 = ((((!((map__17610 == null)))?((((map__17610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17610):map__17610);
var state = cljs.core.get.call(null,map__17610__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__17612,key,_){
var map__17613 = p__17612;
var map__17613__$1 = ((((!((map__17613 == null)))?((((map__17613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17613):map__17613);
var state = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__17615,_,p__17616){
var map__17617 = p__17615;
var map__17617__$1 = ((((!((map__17617 == null)))?((((map__17617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17617):map__17617);
var state = cljs.core.get.call(null,map__17617__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17618 = p__17616;
var map__17618__$1 = ((((!((map__17618 == null)))?((((map__17618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17618):map__17618);
var ref = cljs.core.get.call(null,map__17618__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__17617,map__17617__$1,state,map__17618,map__17618__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__17617,map__17617__$1,state,map__17618,map__17618__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map