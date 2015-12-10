// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.boards');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.parsing.lanes');
goog.require('kanban.reconciler');
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"boards","boards",1912049694),(function (p__27168,key,_){
var map__27169 = p__27168;
var map__27169__$1 = ((((!((map__27169 == null)))?((((map__27169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27169):map__27169);
var state = cljs.core.get.call(null,map__27169__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27169__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","active","boards/active",1298990951),(function (p__27171,key,_){
var map__27172 = p__27171;
var map__27172__$1 = ((((!((map__27172 == null)))?((((map__27172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27172):map__27172);
var state = cljs.core.get.call(null,map__27172__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27172__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null),(function (p__27174,_,p__27175){
var map__27176 = p__27174;
var map__27176__$1 = ((((!((map__27176 == null)))?((((map__27176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27176):map__27176);
var state = cljs.core.get.call(null,map__27176__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27177 = p__27175;
var map__27177__$1 = ((((!((map__27177 == null)))?((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var ref = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","active","boards/active",1298990951)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27176,map__27176__$1,state,map__27177,map__27177__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","active","boards/active",1298990951),ref);
});})(map__27176,map__27176__$1,state,map__27177,map__27177__$1,ref))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),(function (p__27180,key,_){
var map__27181 = p__27180;
var map__27181__$1 = ((((!((map__27181 == null)))?((((map__27181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27181):map__27181);
var state = cljs.core.get.call(null,map__27181__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27181__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var ref = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null),(function (p__27183,_,p__27184){
var map__27185 = p__27183;
var map__27185__$1 = ((((!((map__27185 == null)))?((((map__27185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27185):map__27185);
var state = cljs.core.get.call(null,map__27185__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27186 = p__27184;
var map__27186__$1 = ((((!((map__27186 == null)))?((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27186):map__27186);
var board = cljs.core.get.call(null,map__27186__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27185,map__27185__$1,state,map__27186,map__27186__$1,board){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("boards","editing","boards/editing",2095068454),board);
});})(map__27185,map__27185__$1,state,map__27186,map__27186__$1,board))
], null);
}));
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","update","boards/update",-207105828,null),(function (p__27190,_,p__27191){
var map__27192 = p__27190;
var map__27192__$1 = ((((!((map__27192 == null)))?((((map__27192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27192):map__27192);
var state = cljs.core.get.call(null,map__27192__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__27193 = p__27191;
var map__27193__$1 = ((((!((map__27193 == null)))?((((map__27193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27193):map__27193);
var board = cljs.core.get.call(null,map__27193__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var data = cljs.core.get.call(null,map__27193__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [board], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27192,map__27192__$1,state,map__27193,map__27193__$1,board,data){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,board,((function (map__27192,map__27192__$1,state,map__27193,map__27193__$1,board,data){
return (function (p1__27189_SHARP_){
return cljs.core.merge.call(null,p1__27189_SHARP_,data);
});})(map__27192,map__27192__$1,state,map__27193,map__27193__$1,board,data))
);
});})(map__27192,map__27192__$1,state,map__27193,map__27193__$1,board,data))
], null);
}));
kanban.parsing.boards.create_board = (function kanban$parsing$boards$create_board(st){
var id = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),om.next.db__GT_tree.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.get.call(null,st,new cljs.core.Keyword(null,"boards","boards",1912049694)),st)))) + (1));
var board = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.PersistentVector.EMPTY], null);
var ref = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),id], null);
return cljs.core.assoc.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,st,ref,board),new cljs.core.Keyword(null,"boards","boards",1912049694),cljs.core.conj,ref),new cljs.core.Keyword("boards","editing","boards/editing",2095068454),ref);
});
cljs.core._add_method.call(null,kanban.reconciler.mutate,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null),(function (p__27196,_,___$1){
var map__27197 = p__27196;
var map__27197__$1 = ((((!((map__27197 == null)))?((((map__27197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27197):map__27197);
var state = cljs.core.get.call(null,map__27197__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694),new cljs.core.Keyword("boards","editing","boards/editing",2095068454)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__27197,map__27197__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,kanban.parsing.boards.create_board);
});})(map__27197,map__27197__$1,state))
], null);
}));

//# sourceMappingURL=boards.js.map