// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.lane');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.lane.Lane = (function kanban$components$lane$Lane(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x8734_8755 = kanban.components.lane.Lane.prototype;
x8734_8755.componentWillUpdate = ((function (x8734_8755){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8734_8755))
;

x8734_8755.shouldComponentUpdate = ((function (x8734_8755){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7876__auto__),goog.object.get(next_props__7877__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7876__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7876__auto__.state,"omcljs$state"),goog.object.get(next_state__7878__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8734_8755))
;

x8734_8755.componentWillUnmount = ((function (x8734_8755){
return (function (){
var this__7876__auto__ = this;
var r__7882__auto__ = om.next.get_reconciler.call(null,this__7876__auto__);
var cfg__7883__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7882__auto__);
var st__7884__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
var indexer__7881__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
if((st__7884__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7884__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7876__auto__);
}

if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8734_8755))
;

x8734_8755.componentDidUpdate = ((function (x8734_8755){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8734_8755))
;

x8734_8755.isMounted = ((function (x8734_8755){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8734_8755))
;

x8734_8755.componentWillMount = ((function (x8734_8755){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8734_8755))
;

x8734_8755.render = ((function (x8734_8755){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8735 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8736 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8737 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8738 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8739 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8740 = om.next.props.call(null,this$);
var map__8740__$1 = ((((!((map__8740 == null)))?((((map__8740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8740):map__8740);
var name = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards = cljs.core.get.call(null,map__8740__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__8741 = om.next.get_computed.call(null,this$);
var map__8741__$1 = ((((!((map__8741 == null)))?((((map__8741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8741):map__8741);
var card_create_fn = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__8741__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function (e){
return e.preventDefault();
});})(map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
, "onDrop": ((function (map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function (e){
e.preventDefault();

var G__8744 = card_drag_fns;
var G__8744__$1 = (((G__8744 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__8744));
var G__8744__$2 = (((G__8744__$1 == null))?null:cljs.core.apply.call(null,G__8744__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__8744__$2;
});})(map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
},React.DOM.h3({"className": "lane-title"},React.DOM.span({"className": "text"},name),React.DOM.span({"className": "count"},cljs.core.count.call(null,cards))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function (){
var G__8745 = card_create_fn;
var G__8745__$1 = (((G__8745 == null))?null:cljs.core.apply.call(null,G__8745,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__8745__$1;
});})(map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = (function (){var G__8746 = card_drag_fns;
var G__8746__$1 = (((G__8746 == null))?null:cljs.core.map.call(null,((function (G__8746,ref,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function (p__8747){
var vec__8748 = p__8747;
var k = cljs.core.nth.call(null,vec__8748,(0),null);
var f = cljs.core.nth.call(null,vec__8748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(G__8746,ref,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
,G__8746));
var G__8746__$2 = (((G__8746__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__8746__$1));
return G__8746__$2;
})();
var iter__5940__auto__ = ((function (ref,drag_fns,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function kanban$components$lane$iter__8749(s__8750){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755){
return (function (){
var s__8750__$1 = s__8750;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8750__$1);
if(temp__4425__auto__){
var s__8750__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8750__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8750__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8752 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8751 = (0);
while(true){
if((i__8751 < size__5939__auto__)){
var c = cljs.core._nth.call(null,c__5938__auto__,i__8751);
cljs.core.chunk_append.call(null,b__8752,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__8756 = (i__8751 + (1));
i__8751 = G__8756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8752),kanban$components$lane$iter__8749.call(null,cljs.core.chunk_rest.call(null,s__8750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8752),null);
}
} else {
var c = cljs.core.first.call(null,s__8750__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__8749.call(null,cljs.core.rest.call(null,s__8750__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
,null,null));
});})(ref,drag_fns,map__8740,map__8740__$1,name,cards,map__8741,map__8741__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_8735,_STAR_depth_STAR_8736,_STAR_shared_STAR_8737,_STAR_instrument_STAR_8738,_STAR_parent_STAR_8739,this$,x8734_8755))
;
return iter__5940__auto__.call(null,cards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8739;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8738;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8737;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8736;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8735;
}});})(x8734_8755))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x8753_8757 = kanban.components.lane.Lane;
x8753_8757.om$next$Ident$ = true;

x8753_8757.om$next$Ident$ident$arity$2 = ((function (x8753_8757){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8753_8757))
;

x8753_8757.om$next$IQuery$ = true;

x8753_8757.om$next$IQuery$query$arity$1 = ((function (x8753_8757){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x8753_8757))
;


var x8754_8758 = kanban.components.lane.Lane.prototype;
x8754_8758.om$next$Ident$ = true;

x8754_8758.om$next$Ident$ident$arity$2 = ((function (x8754_8758){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8754_8758))
;

x8754_8758.om$next$IQuery$ = true;

x8754_8758.om$next$IQuery$query$arity$1 = ((function (x8754_8758){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x8754_8758))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map