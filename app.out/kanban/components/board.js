// Compiled by ClojureScript 1.7.170 {}
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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.board.Board.prototype = goog.object.clone(React.Component.prototype);

var x27236_27252 = kanban.components.board.Board.prototype;
x27236_27252.componentWillUpdate = ((function (x27236_27252){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27236_27252))
;

x27236_27252.shouldComponentUpdate = ((function (x27236_27252){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8201__auto__),goog.object.get(next_props__8202__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8201__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8201__auto__.state,"omcljs$state"),goog.object.get(next_state__8203__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x27236_27252))
;

x27236_27252.componentWillUnmount = ((function (x27236_27252){
return (function (){
var this__8201__auto__ = this;
var r__8207__auto__ = om.next.get_reconciler.call(null,this__8201__auto__);
var cfg__8208__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8207__auto__);
var st__8209__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
var indexer__8206__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
if((st__8209__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8209__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8201__auto__);
}

if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27236_27252))
;

x27236_27252.componentDidUpdate = ((function (x27236_27252){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27236_27252))
;

x27236_27252.isMounted = ((function (x27236_27252){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27236_27252))
;

x27236_27252.componentWillMount = ((function (x27236_27252){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27236_27252))
;

x27236_27252.render = ((function (x27236_27252){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27237 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27238 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27239 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27240 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27241 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__27242 = om.next.props.call(null,this$);
var map__27242__$1 = ((((!((map__27242 == null)))?((((map__27242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27242):map__27242);
var name = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__27242__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__27243 = om.next.get_computed.call(null,this$);
var map__27243__$1 = ((((!((map__27243 == null)))?((((map__27243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27243):map__27243);
var dragging = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var edit_fn = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var card_create_fn = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__27243__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "board"},om.util.force_children.call(null,React.DOM.h2({"className": "board-title"},om.util.force_children.call(null,name),om.util.force_children.call(null," Board "),om.util.force_children.call(null,React.DOM.a({"className": "board-edit", "onClick": ((function (map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252){
return (function (){
return edit_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252))
},om.util.force_children.call(null,"Edit"))))),om.util.force_children.call(null,React.DOM.p({"className": "board-description"},om.util.force_children.call(null,description))),om.util.force_children.call(null,(cljs.core.truth_(dragging)?React.DOM.div({"className": "delete", "onDragOver": ((function (map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252){
return (function (e){
return e.preventDefault();
});})(map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252))
, "onDrop": new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(card_drag_fns)},om.util.force_children.call(null,"Delete")):null)),om.util.force_children.call(null,React.DOM.div({"className": "lanes"},om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252){
return (function kanban$components$board$iter__27246(s__27247){
return (new cljs.core.LazySeq(null,((function (map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252){
return (function (){
var s__27247__$1 = s__27247;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27247__$1);
if(temp__4425__auto__){
var s__27247__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27247__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__27247__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__27249 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__27248 = (0);
while(true){
if((i__27248 < size__5757__auto__)){
var l = cljs.core._nth.call(null,c__5756__auto__,i__27248);
cljs.core.chunk_append.call(null,b__27249,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))));

var G__27253 = (i__27248 + (1));
i__27248 = G__27253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27249),kanban$components$board$iter__27246.call(null,cljs.core.chunk_rest.call(null,s__27247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27249),null);
}
} else {
var l = cljs.core.first.call(null,s__27247__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,l,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),card_create_fn,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),card_drag_fns,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),card_edit_fn], null))),kanban$components$board$iter__27246.call(null,cljs.core.rest.call(null,s__27247__$2)));
}
} else {
return null;
}
break;
}
});})(map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252))
,null,null));
});})(map__27242,map__27242__$1,name,description,lanes,map__27243,map__27243__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27237,_STAR_depth_STAR_27238,_STAR_shared_STAR_27239,_STAR_instrument_STAR_27240,_STAR_parent_STAR_27241,this$,this__8200__auto__,x27236_27252))
;
return iter__5758__auto__.call(null,lanes);
})()))),om.util.force_children.call(null,React.DOM.div({"className": "help"},om.util.force_children.call(null,React.DOM.h3({"className": "help-title"},om.util.force_children.call(null,"Help"))),om.util.force_children.call(null,React.DOM.ul({"className": "instructions"},om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Move cards between lanes by dragging them"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Create new cards by clicking on the + in a lane"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Delete cards by dragging them to the delete area"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Edit cards by clicking on them"))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27241;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27240;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27239;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27238;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27237;
}});})(x27236_27252))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x27250_27254 = kanban.components.board.Board;
x27250_27254.om$next$Ident$ = true;

x27250_27254.om$next$Ident$ident$arity$2 = ((function (x27250_27254){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27250_27254))
;

x27250_27254.om$next$IQuery$ = true;

x27250_27254.om$next$IQuery$query$arity$1 = ((function (x27250_27254){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x27250_27254))
;


var x27251_27255 = kanban.components.board.Board.prototype;
x27251_27255.om$next$Ident$ = true;

x27251_27255.om$next$Ident$ident$arity$2 = ((function (x27251_27255){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27251_27255))
;

x27251_27255.om$next$IQuery$ = true;

x27251_27255.om$next$IQuery$query$arity$1 = ((function (x27251_27255){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null)], null);
});})(x27251_27255))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.call(null,kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__27256_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27256_SHARP_)], null);
})], null));

//# sourceMappingURL=board.js.map