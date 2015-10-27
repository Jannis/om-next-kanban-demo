// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.board');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.lane');
/**
 * @constructor
 */
kanban.components.board.Board = (function kanban$components$board$Board(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.board.Board.prototype = goog.object.clone(React.Component.prototype);

var x12064_12078 = kanban.components.board.Board.prototype;
x12064_12078.componentWillUpdate = ((function (x12064_12078){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x12064_12078))
;

x12064_12078.shouldComponentUpdate = ((function (x12064_12078){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x12064_12078))
;

x12064_12078.componentWillUnmount = ((function (x12064_12078){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x12064_12078))
;

x12064_12078.componentDidUpdate = ((function (x12064_12078){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x12064_12078))
;

x12064_12078.isMounted = ((function (x12064_12078){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x12064_12078))
;

x12064_12078.componentWillMount = ((function (x12064_12078){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x12064_12078))
;

x12064_12078.render = ((function (x12064_12078){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_12065 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_12066 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_12067 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_12068 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_12069 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__12070 = om.next.props.call(null,this$);
var map__12070__$1 = ((((!((map__12070 == null)))?((((map__12070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12070):map__12070);
var name = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var dragging = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var card_add_fn = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446));
var card_drag_fns = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__12070__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "board"},React.DOM.h2({"className": "board-title"},name," Board"),React.DOM.p({"className": "board-description"},description),(cljs.core.truth_(dragging)?React.DOM.div({"className": "delete", "onDragOver": ((function (map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078){
return (function (e){
return e.preventDefault();
});})(map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078))
, "onDrop": new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(card_drag_fns)},"Delete"):null),React.DOM.div({"className": "lanes"},(function (){var iter__5866__auto__ = ((function (map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078){
return (function kanban$components$board$iter__12072(s__12073){
return (new cljs.core.LazySeq(null,((function (map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078){
return (function (){
var s__12073__$1 = s__12073;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12073__$1);
if(temp__4425__auto__){
var s__12073__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12073__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__12073__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__12075 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__12074 = (0);
while(true){
if((i__12074 < size__5865__auto__)){
var l = cljs.core._nth.call(null,c__5864__auto__,i__12074);
cljs.core.chunk_append.call(null,b__12075,kanban.components.lane.lane.call(null,cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446),card_add_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn)));

var G__12079 = (i__12074 + (1));
i__12074 = G__12079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12075),kanban$components$board$iter__12072.call(null,cljs.core.chunk_rest.call(null,s__12073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12075),null);
}
} else {
var l = cljs.core.first.call(null,s__12073__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,cljs.core.assoc.call(null,l,new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446),card_add_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn)),kanban$components$board$iter__12072.call(null,cljs.core.rest.call(null,s__12073__$2)));
}
} else {
return null;
}
break;
}
});})(map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078))
,null,null));
});})(map__12070,map__12070__$1,name,description,lanes,dragging,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_12065,_STAR_depth_STAR_12066,_STAR_shared_STAR_12067,_STAR_instrument_STAR_12068,_STAR_parent_STAR_12069,this$,x12064_12078))
;
return iter__5866__auto__.call(null,lanes);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_12069;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_12068;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_12067;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_12066;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_12065;
}});})(x12064_12078))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x12076_12080 = kanban.components.board.Board;
x12076_12080.om$next$Ident$ = true;

x12076_12080.om$next$Ident$ident$arity$2 = ((function (x12076_12080){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x12076_12080))
;

x12076_12080.om$next$IQuery$ = true;

x12076_12080.om$next$IQuery$query$arity$1 = ((function (x12076_12080){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x12076_12080))
;


var x12077_12081 = kanban.components.board.Board.prototype;
x12077_12081.om$next$Ident$ = true;

x12077_12081.om$next$Ident$ident$arity$2 = ((function (x12077_12081){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x12077_12081))
;

x12077_12081.om$next$IQuery$ = true;

x12077_12081.om$next$IQuery$query$arity$1 = ((function (x12077_12081){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x12077_12081))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.call(null,kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=board.js.map