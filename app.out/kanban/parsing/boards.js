// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.call(null,board,new cljs.core.Keyword(null,"lanes","lanes",1843627072),(function (p1__10299_SHARP_){
return kanban.parsing.lanes.resolve_lanes.call(null,st,p1__10299_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes.call(null,st,cljs.core.get_in.call(null,st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__10300_SHARP_){
return kanban.parsing.boards.get_board.call(null,st,p1__10300_SHARP_);
})),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__10301,key,_){
var map__10302 = p__10301;
var map__10302__$1 = ((((!((map__10302 == null)))?((((map__10302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10302):map__10302);
var state = cljs.core.get.call(null,map__10302__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_boards.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__10304,key,_){
var map__10305 = p__10304;
var map__10305__$1 = ((((!((map__10305 == null)))?((((map__10305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10305):map__10305);
var state = cljs.core.get.call(null,map__10305__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.boards.get_board.call(null,st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__10307,_,p__10308){
var map__10309 = p__10307;
var map__10309__$1 = ((((!((map__10309 == null)))?((((map__10309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10309):map__10309);
var state = cljs.core.get.call(null,map__10309__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__10310 = p__10308;
var map__10310__$1 = ((((!((map__10310 == null)))?((((map__10310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10310):map__10310);
var ref = cljs.core.get.call(null,map__10310__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__10309,map__10309__$1,state,map__10310,map__10310__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__10309,map__10309__$1,state,map__10310,map__10310__$1,ref))
], null);
}));

//# sourceMappingURL=boards.js.map