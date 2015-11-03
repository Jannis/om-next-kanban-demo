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

var x83031_83047 = kanban.components.board.Board.prototype;
x83031_83047.componentWillUpdate = ((function (x83031_83047){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x83031_83047))
;

x83031_83047.shouldComponentUpdate = ((function (x83031_83047){
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
});})(x83031_83047))
;

x83031_83047.componentWillUnmount = ((function (x83031_83047){
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
});})(x83031_83047))
;

x83031_83047.componentDidUpdate = ((function (x83031_83047){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x83031_83047))
;

x83031_83047.isMounted = ((function (x83031_83047){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x83031_83047))
;

x83031_83047.componentWillMount = ((function (x83031_83047){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x83031_83047))
;

x83031_83047.render = ((function (x83031_83047){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_83032 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_83033 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_83034 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_83035 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_83036 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__83037 = om.next.props.call(null,this$);
var map__83037__$1 = ((((!((map__83037 == null)))?((((map__83037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83037):map__83037);
var name = cljs.core.get.call(null,map__83037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__83037__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__83037__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__83038 = om.next.get_computed.call(null,this$);
var map__83038__$1 = ((((!((map__83038 == null)))?((((map__83038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83038):map__83038);
var dragging = cljs.core.get.call(null,map__83038__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var edit_fn = cljs.core.get.call(null,map__83038__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var card_create_fn = cljs.core.get.call(null,map__83038__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__83038__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__83038__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "board"},React.DOM.h2({"className": "board-title"},name," Board ",React.DOM.a({"className": "board-edit", "onClick": ((function (map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047){
return (function (){
return edit_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047))
},"Edit")),React.DOM.p({"className": "board-description"},description),(cljs.core.truth_(dragging)?React.DOM.div({"className": "delete", "onDragOver": ((function (map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047){
return (function (e){
return e.preventDefault();
});})(map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047))
, "onDrop": new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(card_drag_fns)},"Delete"):null),React.DOM.div({"className": "lanes"},(function (){var iter__5866__auto__ = ((function (map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047){
return (function kanban$components$board$iter__83041(s__83042){
return (new cljs.core.LazySeq(null,((function (map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047){
return (function (){
var s__83042__$1 = s__83042;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__83042__$1);
if(temp__4425__auto__){
var s__83042__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83042__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__83042__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__83044 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__83043 = (0);
while(true){
if((i__83043 < size__5865__auto__)){
var l = cljs.core._nth.call(null,c__5864__auto__,i__83043);
cljs.core.chunk_append.call(null,b__83044,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))));

var G__83048 = (i__83043 + (1));
i__83043 = G__83048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83044),kanban$components$board$iter__83041.call(null,cljs.core.chunk_rest.call(null,s__83042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83044),null);
}
} else {
var l = cljs.core.first.call(null,s__83042__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))),kanban$components$board$iter__83041.call(null,cljs.core.rest.call(null,s__83042__$2)));
}
} else {
return null;
}
break;
}
});})(map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047))
,null,null));
});})(map__83037,map__83037__$1,name,description,lanes,map__83038,map__83038__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_83032,_STAR_depth_STAR_83033,_STAR_shared_STAR_83034,_STAR_instrument_STAR_83035,_STAR_parent_STAR_83036,this$,x83031_83047))
;
return iter__5866__auto__.call(null,lanes);
})()),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Move cards between lanes by dragging them"),React.DOM.li(null,"Create new cards by clicking on the + in a lane"),React.DOM.li(null,"Delete cards by dragging them to the delete area"),React.DOM.li(null,"Edit cards by clicking on them"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_83036;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_83035;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_83034;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_83033;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_83032;
}});})(x83031_83047))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x83045_83049 = kanban.components.board.Board;
x83045_83049.om$next$Ident$ = true;

x83045_83049.om$next$Ident$ident$arity$2 = ((function (x83045_83049){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x83045_83049))
;

x83045_83049.om$next$IQuery$ = true;

x83045_83049.om$next$IQuery$query$arity$1 = ((function (x83045_83049){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x83045_83049))
;


var x83046_83050 = kanban.components.board.Board.prototype;
x83046_83050.om$next$Ident$ = true;

x83046_83050.om$next$Ident$ident$arity$2 = ((function (x83046_83050){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x83046_83050))
;

x83046_83050.om$next$IQuery$ = true;

x83046_83050.om$next$IQuery$query$arity$1 = ((function (x83046_83050){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x83046_83050))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.call(null,kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__83051_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__83051_SHARP_)], null);
})], null));

//# sourceMappingURL=board.js.map