// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__14132_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__14132_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__14133_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__14133_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__14134,key,_){
var map__14135 = p__14134;
var map__14135__$1 = ((((!((map__14135 == null)))?((((map__14135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14135):map__14135);
var state = cljs.core.get.call(null,map__14135__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__14137,key,_){
var map__14138 = p__14137;
var map__14138__$1 = ((((!((map__14138 == null)))?((((map__14138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14138):map__14138);
var state = cljs.core.get.call(null,map__14138__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__14140,_,p__14141){
var map__14142 = p__14140;
var map__14142__$1 = ((((!((map__14142 == null)))?((((map__14142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14142):map__14142);
var state = cljs.core.get.call(null,map__14142__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__14143 = p__14141;
var map__14143__$1 = ((((!((map__14143 == null)))?((((map__14143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14143):map__14143);
var ref = cljs.core.get.call(null,map__14143__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__14142,map__14142__$1,state,map__14143,map__14143__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__14142,map__14142__$1,state,map__14143,map__14143__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map