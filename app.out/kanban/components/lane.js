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
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x15056_15074 = kanban.components.lane.Lane.prototype;
x15056_15074.componentWillUpdate = ((function (x15056_15074){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x15056_15074))
;

x15056_15074.shouldComponentUpdate = ((function (x15056_15074){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x15056_15074))
;

x15056_15074.componentWillUnmount = ((function (x15056_15074){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x15056_15074))
;

x15056_15074.componentDidUpdate = ((function (x15056_15074){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x15056_15074))
;

x15056_15074.isMounted = ((function (x15056_15074){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15056_15074))
;

x15056_15074.componentWillMount = ((function (x15056_15074){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x15056_15074))
;

x15056_15074.render = ((function (x15056_15074){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_15057 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15058 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15059 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15060 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15061 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__15062 = om.next.props.call(null,this$);
var map__15062__$1 = ((((!((map__15062 == null)))?((((map__15062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15062):map__15062);
var name = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__15063 = om.next.get_computed.call(null,this$);
var map__15063__$1 = ((((!((map__15063 == null)))?((((map__15063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15063):map__15063);
var card_add_fn = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446));
var card_drag_fns = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__15063__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function (e){
return e.preventDefault();
});})(map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
, "onDrop": ((function (map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function (){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(card_drag_fns).call(null,om.next.get_ident.call(null,this$));
});})(map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
},React.DOM.h3({"className": "lane-title"},name,React.DOM.span({"className": "count"},cljs.core.count.call(null,cards))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function (){
return card_add_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ref,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function (p__15066){
var vec__15067 = p__15066;
var k = cljs.core.nth.call(null,vec__15067,(0),null);
var f = cljs.core.nth.call(null,vec__15067,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(ref,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
,card_drag_fns));
var iter__5866__auto__ = ((function (ref,drag_fns,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function kanban$components$lane$iter__15068(s__15069){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074){
return (function (){
var s__15069__$1 = s__15069;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15069__$1);
if(temp__4425__auto__){
var s__15069__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15069__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__15069__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__15071 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__15070 = (0);
while(true){
if((i__15070 < size__5865__auto__)){
var c = cljs.core._nth.call(null,c__5864__auto__,i__15070);
cljs.core.chunk_append.call(null,b__15071,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),card_edit_fn], null))));

var G__15075 = (i__15070 + (1));
i__15070 = G__15075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15071),kanban$components$lane$iter__15068.call(null,cljs.core.chunk_rest.call(null,s__15069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15071),null);
}
} else {
var c = cljs.core.first.call(null,s__15069__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),card_edit_fn], null))),kanban$components$lane$iter__15068.call(null,cljs.core.rest.call(null,s__15069__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
,null,null));
});})(ref,drag_fns,map__15062,map__15062__$1,name,cards,map__15063,map__15063__$1,card_add_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_15057,_STAR_depth_STAR_15058,_STAR_shared_STAR_15059,_STAR_instrument_STAR_15060,_STAR_parent_STAR_15061,this$,x15056_15074))
;
return iter__5866__auto__.call(null,cards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15061;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15060;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15059;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15058;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15057;
}});})(x15056_15074))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x15072_15076 = kanban.components.lane.Lane;
x15072_15076.om$next$Ident$ = true;

x15072_15076.om$next$Ident$ident$arity$2 = ((function (x15072_15076){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15072_15076))
;

x15072_15076.om$next$IQuery$ = true;

x15072_15076.om$next$IQuery$query$arity$1 = ((function (x15072_15076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x15072_15076))
;


var x15073_15077 = kanban.components.lane.Lane.prototype;
x15073_15077.om$next$Ident$ = true;

x15073_15077.om$next$Ident$ident$arity$2 = ((function (x15073_15077){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15073_15077))
;

x15073_15077.om$next$IQuery$ = true;

x15073_15077.om$next$IQuery$query$arity$1 = ((function (x15073_15077){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x15073_15077))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map