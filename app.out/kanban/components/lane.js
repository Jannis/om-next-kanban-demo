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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x27205_27226 = kanban.components.lane.Lane.prototype;
x27205_27226.componentWillUpdate = ((function (x27205_27226){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27205_27226))
;

x27205_27226.shouldComponentUpdate = ((function (x27205_27226){
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
});})(x27205_27226))
;

x27205_27226.componentWillUnmount = ((function (x27205_27226){
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
});})(x27205_27226))
;

x27205_27226.componentDidUpdate = ((function (x27205_27226){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27205_27226))
;

x27205_27226.isMounted = ((function (x27205_27226){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27205_27226))
;

x27205_27226.componentWillMount = ((function (x27205_27226){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27205_27226))
;

x27205_27226.render = ((function (x27205_27226){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27206 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27207 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27208 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27209 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27210 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__27211 = om.next.props.call(null,this$);
var map__27211__$1 = ((((!((map__27211 == null)))?((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27211):map__27211);
var name = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards = cljs.core.get.call(null,map__27211__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__27212 = om.next.get_computed.call(null,this$);
var map__27212__$1 = ((((!((map__27212 == null)))?((((map__27212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27212):map__27212);
var card_create_fn = cljs.core.get.call(null,map__27212__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__27212__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__27212__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function (e){
return e.preventDefault();
});})(map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
, "onDrop": ((function (map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function (e){
e.preventDefault();

var G__27215 = card_drag_fns;
var G__27215__$1 = (((G__27215 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__27215));
var G__27215__$2 = (((G__27215__$1 == null))?null:cljs.core.apply.call(null,G__27215__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__27215__$2;
});})(map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
},om.util.force_children.call(null,React.DOM.h3({"className": "lane-title"},om.util.force_children.call(null,React.DOM.span({"className": "text"},om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.span({"className": "count"},om.util.force_children.call(null,cljs.core.count.call(null,cards)))))),om.util.force_children.call(null,React.DOM.div({"className": "add"},om.util.force_children.call(null,React.DOM.a({"onClick": ((function (map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function (){
var G__27216 = card_create_fn;
var G__27216__$1 = (((G__27216 == null))?null:cljs.core.apply.call(null,G__27216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__27216__$1;
});})(map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
},om.util.force_children.call(null,"+"))))),om.util.force_children.call(null,React.DOM.div({"className": "cards"},om.util.force_children.call(null,(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = (function (){var G__27217 = card_drag_fns;
var G__27217__$1 = (((G__27217 == null))?null:cljs.core.map.call(null,((function (G__27217,ref,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function (p__27218){
var vec__27219 = p__27218;
var k = cljs.core.nth.call(null,vec__27219,(0),null);
var f = cljs.core.nth.call(null,vec__27219,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(G__27217,ref,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
,G__27217));
var G__27217__$2 = (((G__27217__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27217__$1));
return G__27217__$2;
})();
var iter__5758__auto__ = ((function (ref,drag_fns,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function kanban$components$lane$iter__27220(s__27221){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226){
return (function (){
var s__27221__$1 = s__27221;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27221__$1);
if(temp__4425__auto__){
var s__27221__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27221__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__27221__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__27223 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__27222 = (0);
while(true){
if((i__27222 < size__5757__auto__)){
var c = cljs.core._nth.call(null,c__5756__auto__,i__27222);
cljs.core.chunk_append.call(null,b__27223,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__27227 = (i__27222 + (1));
i__27222 = G__27227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27223),kanban$components$lane$iter__27220.call(null,cljs.core.chunk_rest.call(null,s__27221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27223),null);
}
} else {
var c = cljs.core.first.call(null,s__27221__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__27220.call(null,cljs.core.rest.call(null,s__27221__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
,null,null));
});})(ref,drag_fns,map__27211,map__27211__$1,name,cards,map__27212,map__27212__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_27206,_STAR_depth_STAR_27207,_STAR_shared_STAR_27208,_STAR_instrument_STAR_27209,_STAR_parent_STAR_27210,this$,this__8200__auto__,x27205_27226))
;
return iter__5758__auto__.call(null,cards);
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27210;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27209;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27208;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27207;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27206;
}});})(x27205_27226))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x27224_27228 = kanban.components.lane.Lane;
x27224_27228.om$next$Ident$ = true;

x27224_27228.om$next$Ident$ident$arity$2 = ((function (x27224_27228){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27224_27228))
;

x27224_27228.om$next$IQuery$ = true;

x27224_27228.om$next$IQuery$query$arity$1 = ((function (x27224_27228){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x27224_27228))
;


var x27225_27229 = kanban.components.lane.Lane.prototype;
x27225_27229.om$next$Ident$ = true;

x27225_27229.om$next$Ident$ident$arity$2 = ((function (x27225_27229){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27225_27229))
;

x27225_27229.om$next$IQuery$ = true;

x27225_27229.om$next$IQuery$query$arity$1 = ((function (x27225_27229){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x27225_27229))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map