// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards,(function (p__14786,key,_){
var map__14787 = p__14786;
var map__14787__$1 = ((((!((map__14787 == null)))?((((map__14787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14787):map__14787);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14787__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14787__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards_SLASH_active,(function (p__14789,key,_){
var map__14790 = p__14789;
var map__14790__$1 = ((((!((map__14790 == null)))?((((map__14790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14790):map__14790);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14790__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14790__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_activate,(function (p__14792,_,p__14793){
var map__14794 = p__14792;
var map__14794__$1 = ((((!((map__14794 == null)))?((((map__14794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14794):map__14794);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14794__$1,cljs.core.cst$kw$state);
var map__14795 = p__14793;
var map__14795__$1 = ((((!((map__14795 == null)))?((((map__14795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14795):map__14795);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14795__$1,cljs.core.cst$kw$ref);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards_SLASH_active], null)], null),cljs.core.cst$kw$action,((function (map__14794,map__14794__$1,state,map__14795,map__14795__$1,ref){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$boards_SLASH_active,ref);
});})(map__14794,map__14794__$1,state,map__14795,map__14795__$1,ref))
], null);
}));
kanban.reconciler.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boards_SLASH_editing,(function (p__14798,key,_){
var map__14799 = p__14798;
var map__14799__$1 = ((((!((map__14799 == null)))?((((map__14799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14799):map__14799);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14799__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14799__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(query,cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_edit,(function (p__14801,_,p__14802){
var map__14803 = p__14801;
var map__14803__$1 = ((((!((map__14803 == null)))?((((map__14803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14803):map__14803);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14803__$1,cljs.core.cst$kw$state);
var map__14804 = p__14802;
var map__14804__$1 = ((((!((map__14804 == null)))?((((map__14804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14804):map__14804);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14804__$1,cljs.core.cst$kw$board);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards_SLASH_editing], null)], null),cljs.core.cst$kw$action,((function (map__14803,map__14803__$1,state,map__14804,map__14804__$1,board){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$boards_SLASH_editing,board);
});})(map__14803,map__14803__$1,state,map__14804,map__14804__$1,board))
], null);
}));
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_update,(function (p__14808,_,p__14809){
var map__14810 = p__14808;
var map__14810__$1 = ((((!((map__14810 == null)))?((((map__14810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14810):map__14810);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810__$1,cljs.core.cst$kw$state);
var map__14811 = p__14809;
var map__14811__$1 = ((((!((map__14811 == null)))?((((map__14811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14811):map__14811);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14811__$1,cljs.core.cst$kw$board);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14811__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [board], null)], null),cljs.core.cst$kw$action,((function (map__14810,map__14810__$1,state,map__14811,map__14811__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,board,((function (map__14810,map__14810__$1,state,map__14811,map__14811__$1,board,data){
return (function (p1__14807_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14807_SHARP_,data], 0));
});})(map__14810,map__14810__$1,state,map__14811,map__14811__$1,board,data))
);
});})(map__14810,map__14810__$1,state,map__14811,map__14811__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.cons((0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(st,cljs.core.cst$kw$boards),st)))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$name,"",cljs.core.cst$kw$lanes,cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,id], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(st,ref,board),cljs.core.cst$kw$boards,cljs.core.conj,ref),cljs.core.cst$kw$boards_SLASH_editing,ref);
});
kanban.reconciler.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$boards_SLASH_create_DASH_board,(function (p__14814,_,___$1){
var map__14815 = p__14814;
var map__14815__$1 = ((((!((map__14815 == null)))?((((map__14815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14815):map__14815);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards,cljs.core.cst$kw$boards_SLASH_editing], null)], null),cljs.core.cst$kw$action,((function (map__14815,map__14815__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,kanban.parsing.boards.create_board);
});})(map__14815,map__14815__$1,state))
], null);
}));
