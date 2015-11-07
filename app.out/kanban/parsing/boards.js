// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.parsing.boards.resolve_lanes = (function kanban$parsing$boards$resolve_lanes(st,board){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(board,cljs.core.cst$kw$lanes,(function (p1__13666_SHARP_){
return kanban.parsing.lanes.resolve_lanes(st,p1__13666_SHARP_);
}));
});
kanban.parsing.boards.get_board = (function kanban$parsing$boards$get_board(st,ref){
return kanban.parsing.boards.resolve_lanes(st,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,ref));
});
kanban.parsing.boards.get_boards = (function kanban$parsing$boards$get_boards(st,key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13667_SHARP_){
return kanban.parsing.boards.get_board(st,p1__13667_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key));
});
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards,(function (p__13668,key,_){
var map__13669 = p__13668;
var map__13669__$1 = ((((!((map__13669 == null)))?((((map__13669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13669):map__13669);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13669__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.boards.get_boards(st,key)], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards_SLASH_active,(function (p__13671,key,_){
var map__13672 = p__13671;
var map__13672__$1 = ((((!((map__13672 == null)))?((((map__13672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13672):map__13672);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13672__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.boards.get_board(st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_activate,(function (p__13674,_,p__13675){
var map__13676 = p__13674;
var map__13676__$1 = ((((!((map__13676 == null)))?((((map__13676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13676):map__13676);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13676__$1,cljs.core.cst$kw$state);
var map__13677 = p__13675;
var map__13677__$1 = ((((!((map__13677 == null)))?((((map__13677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13677):map__13677);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13677__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards_SLASH_active], null),cljs.core.cst$kw$action,((function (map__13676,map__13676__$1,state,map__13677,map__13677__$1,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$boards_SLASH_active,ref);
});})(map__13676,map__13676__$1,state,map__13677,map__13677__$1,ref))
], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards_SLASH_editing,(function (p__13680,key,_){
var map__13681 = p__13680;
var map__13681__$1 = ((((!((map__13681 == null)))?((((map__13681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13681):map__13681);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13681__$1,cljs.core.cst$kw$state);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,kanban.parsing.boards.get_board(st,ref)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_edit,(function (p__13683,_,p__13684){
var map__13685 = p__13683;
var map__13685__$1 = ((((!((map__13685 == null)))?((((map__13685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13685):map__13685);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13685__$1,cljs.core.cst$kw$state);
var map__13686 = p__13684;
var map__13686__$1 = ((((!((map__13686 == null)))?((((map__13686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13686):map__13686);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13686__$1,cljs.core.cst$kw$board);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards_SLASH_editing], null),cljs.core.cst$kw$action,((function (map__13685,map__13685__$1,state,map__13686,map__13686__$1,board){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$boards_SLASH_editing,board);
});})(map__13685,map__13685__$1,state,map__13686,map__13686__$1,board))
], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_update,(function (p__13690,_,p__13691){
var map__13692 = p__13690;
var map__13692__$1 = ((((!((map__13692 == null)))?((((map__13692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13692):map__13692);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13692__$1,cljs.core.cst$kw$state);
var map__13693 = p__13691;
var map__13693__$1 = ((((!((map__13693 == null)))?((((map__13693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13693):map__13693);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13693__$1,cljs.core.cst$kw$board);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13693__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards,cljs.core.cst$kw$boards_SLASH_active], null),cljs.core.cst$kw$action,((function (map__13692,map__13692__$1,state,map__13693,map__13693__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,board,((function (map__13692,map__13692__$1,state,map__13693,map__13693__$1,board,data){
return (function (p1__13689_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__13689_SHARP_,data], 0));
});})(map__13692,map__13692__$1,state,map__13693,map__13693__$1,board,data))
);
});})(map__13692,map__13692__$1,state,map__13693,map__13693__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,kanban.parsing.boards.get_boards(st,cljs.core.cst$kw$boards)))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$name,"",cljs.core.cst$kw$lanes,cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,id], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(st,ref,board),cljs.core.cst$kw$boards,cljs.core.conj,ref),cljs.core.cst$kw$boards_SLASH_editing,ref);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_create_DASH_board,(function (p__13696,_,___$1){
var map__13697 = p__13696;
var map__13697__$1 = ((((!((map__13697 == null)))?((((map__13697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13697):map__13697);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13697__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards,cljs.core.cst$kw$boards_SLASH_editing], null),cljs.core.cst$kw$action,((function (map__13697,map__13697__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,kanban.parsing.boards.create_board);
});})(map__13697,map__13697__$1,state))
], null);
}));
