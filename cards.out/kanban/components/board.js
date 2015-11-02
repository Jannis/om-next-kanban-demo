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
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.board.Board.prototype = goog.object.clone(React.Component.prototype);

var x31148_31164 = kanban.components.board.Board.prototype;
x31148_31164.componentWillUpdate = ((function (x31148_31164){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x31148_31164))
;

x31148_31164.shouldComponentUpdate = ((function (x31148_31164){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7526__auto__),goog.object.get(next_props__7527__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7526__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7526__auto__.state,"omcljs$state"),goog.object.get(next_state__7528__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x31148_31164))
;

x31148_31164.componentWillUnmount = ((function (x31148_31164){
return (function (){
var this__7526__auto__ = this;
var r__7532__auto__ = om.next.get_reconciler.call(null,this__7526__auto__);
var cfg__7533__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7532__auto__);
var st__7534__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
var indexer__7531__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
if((st__7534__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7534__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7526__auto__);
}

if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x31148_31164))
;

x31148_31164.componentDidUpdate = ((function (x31148_31164){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x31148_31164))
;

x31148_31164.isMounted = ((function (x31148_31164){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31148_31164))
;

x31148_31164.componentWillMount = ((function (x31148_31164){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x31148_31164))
;

x31148_31164.render = ((function (x31148_31164){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_31149 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31150 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31151 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31152 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31153 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__31154 = om.next.props.call(null,this$);
var map__31154__$1 = ((((!((map__31154 == null)))?((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var name = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__31155 = om.next.get_computed.call(null,this$);
var map__31155__$1 = ((((!((map__31155 == null)))?((((map__31155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31155):map__31155);
var dragging = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var edit_fn = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var card_create_fn = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__31155__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "board"},React.DOM.h2({"className": "board-title"},name," Board ",React.DOM.a({"className": "board-edit", "onClick": ((function (map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164){
return (function (){
return edit_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164))
},"Edit")),React.DOM.p({"className": "board-description"},description),(cljs.core.truth_(dragging)?React.DOM.div({"className": "delete", "onDragOver": ((function (map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164){
return (function (e){
return e.preventDefault();
});})(map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164))
, "onDrop": new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(card_drag_fns)},"Delete"):null),React.DOM.div({"className": "lanes"},(function (){var iter__5866__auto__ = ((function (map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164){
return (function kanban$components$board$iter__31158(s__31159){
return (new cljs.core.LazySeq(null,((function (map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164){
return (function (){
var s__31159__$1 = s__31159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31159__$1);
if(temp__4425__auto__){
var s__31159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31159__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__31159__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__31161 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__31160 = (0);
while(true){
if((i__31160 < size__5865__auto__)){
var l = cljs.core._nth.call(null,c__5864__auto__,i__31160);
cljs.core.chunk_append.call(null,b__31161,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))));

var G__31165 = (i__31160 + (1));
i__31160 = G__31165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),kanban$components$board$iter__31158.call(null,cljs.core.chunk_rest.call(null,s__31159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31161),null);
}
} else {
var l = cljs.core.first.call(null,s__31159__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))),kanban$components$board$iter__31158.call(null,cljs.core.rest.call(null,s__31159__$2)));
}
} else {
return null;
}
break;
}
});})(map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164))
,null,null));
});})(map__31154,map__31154__$1,name,description,lanes,map__31155,map__31155__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31149,_STAR_depth_STAR_31150,_STAR_shared_STAR_31151,_STAR_instrument_STAR_31152,_STAR_parent_STAR_31153,this$,x31148_31164))
;
return iter__5866__auto__.call(null,lanes);
})()),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Move cards between lanes by dragging them"),React.DOM.li(null,"Create new cards by clicking on the + in a lane"),React.DOM.li(null,"Delete cards by dragging them to the delete area"),React.DOM.li(null,"Edit cards by clicking on them"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31153;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31152;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31151;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31150;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31149;
}});})(x31148_31164))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x31162_31166 = kanban.components.board.Board;
x31162_31166.om$next$Ident$ = true;

x31162_31166.om$next$Ident$ident$arity$2 = ((function (x31162_31166){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31162_31166))
;

x31162_31166.om$next$IQuery$ = true;

x31162_31166.om$next$IQuery$query$arity$1 = ((function (x31162_31166){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x31162_31166))
;


var x31163_31167 = kanban.components.board.Board.prototype;
x31163_31167.om$next$Ident$ = true;

x31163_31167.om$next$Ident$ident$arity$2 = ((function (x31163_31167){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31163_31167))
;

x31163_31167.om$next$IQuery$ = true;

x31163_31167.om$next$IQuery$query$arity$1 = ((function (x31163_31167){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x31163_31167))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.call(null,kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__31168_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31168_SHARP_)], null);
})], null));

//# sourceMappingURL=board.js.map