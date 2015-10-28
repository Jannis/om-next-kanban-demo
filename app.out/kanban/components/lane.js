// Compiled by ClojureScript 1.7.145 {}
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
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x11347_11363 = kanban.components.lane.Lane.prototype;
x11347_11363.componentWillUpdate = ((function (x11347_11363){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x11347_11363))
;

x11347_11363.shouldComponentUpdate = ((function (x11347_11363){
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
});})(x11347_11363))
;

x11347_11363.componentWillUnmount = ((function (x11347_11363){
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
});})(x11347_11363))
;

x11347_11363.componentDidUpdate = ((function (x11347_11363){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x11347_11363))
;

x11347_11363.isMounted = ((function (x11347_11363){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11347_11363))
;

x11347_11363.componentWillMount = ((function (x11347_11363){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x11347_11363))
;

x11347_11363.render = ((function (x11347_11363){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_11348 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11349 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11350 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11351 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11352 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__11353 = om.next.props.call(null,this$);
var map__11353__$1 = ((((!((map__11353 == null)))?((((map__11353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353):map__11353);
var name = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var card_add_fn = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446));
var card_drag_fns = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__11353__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function (e){
return e.preventDefault();
});})(map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
, "onDrop": ((function (map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function (){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(card_drag_fns).call(null,om.next.get_ident.call(null,this$));
});})(map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
},React.DOM.h3({"className": "lane-title"},name,React.DOM.span({"className": "count"},cljs.core.count.call(null,cards))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function (){
return card_add_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ref,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function (p__11355){
var vec__11356 = p__11355;
var k = cljs.core.nth.call(null,vec__11356,(0),null);
var f = cljs.core.nth.call(null,vec__11356,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(ref,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
,card_drag_fns));
var iter__5866__auto__ = ((function (ref,drag_fns,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function kanban$components$lane$iter__11357(s__11358){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363){
return (function (){
var s__11358__$1 = s__11358;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11358__$1);
if(temp__4425__auto__){
var s__11358__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11358__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__11358__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__11360 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__11359 = (0);
while(true){
if((i__11359 < size__5865__auto__)){
var c = cljs.core._nth.call(null,c__5864__auto__,i__11359);
cljs.core.chunk_append.call(null,b__11360,kanban.components.card.card.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),card_edit_fn)));

var G__11364 = (i__11359 + (1));
i__11359 = G__11364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11360),kanban$components$lane$iter__11357.call(null,cljs.core.chunk_rest.call(null,s__11358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11360),null);
}
} else {
var c = cljs.core.first.call(null,s__11358__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),card_edit_fn)),kanban$components$lane$iter__11357.call(null,cljs.core.rest.call(null,s__11358__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
,null,null));
});})(ref,drag_fns,map__11353,map__11353__$1,name,cards,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_11348,_STAR_depth_STAR_11349,_STAR_shared_STAR_11350,_STAR_instrument_STAR_11351,_STAR_parent_STAR_11352,this$,x11347_11363))
;
return iter__5866__auto__.call(null,cards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11352;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11351;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11350;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11349;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11348;
}});})(x11347_11363))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x11361_11365 = kanban.components.lane.Lane;
x11361_11365.om$next$Ident$ = true;

x11361_11365.om$next$Ident$ident$arity$2 = ((function (x11361_11365){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x11361_11365))
;

x11361_11365.om$next$IQuery$ = true;

x11361_11365.om$next$IQuery$query$arity$1 = ((function (x11361_11365){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x11361_11365))
;


var x11362_11366 = kanban.components.lane.Lane.prototype;
x11362_11366.om$next$Ident$ = true;

x11362_11366.om$next$Ident$ident$arity$2 = ((function (x11362_11366){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x11362_11366))
;

x11362_11366.om$next$IQuery$ = true;

x11362_11366.om$next$IQuery$query$arity$1 = ((function (x11362_11366){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x11362_11366))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map