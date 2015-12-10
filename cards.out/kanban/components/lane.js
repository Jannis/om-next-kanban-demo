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
var this__8349__auto__ = this;
React.Component.apply(this__8349__auto__,arguments);

if(!((this__8349__auto__.initLocalState == null))){
this__8349__auto__.state = this__8349__auto__.initLocalState();
} else {
this__8349__auto__.state = {};
}

return this__8349__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x28293_28314 = kanban.components.lane.Lane.prototype;
x28293_28314.componentWillUpdate = ((function (x28293_28314){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8289__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8289__auto__);
});})(x28293_28314))
;

x28293_28314.shouldComponentUpdate = ((function (x28293_28314){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8289__auto__),goog.object.get(next_props__8290__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8289__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8289__auto__.state,"omcljs$state"),goog.object.get(next_state__8291__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x28293_28314))
;

x28293_28314.componentWillUnmount = ((function (x28293_28314){
return (function (){
var this__8289__auto__ = this;
var r__8295__auto__ = om.next.get_reconciler.call(null,this__8289__auto__);
var cfg__8296__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8295__auto__);
var st__8297__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
var indexer__8294__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
if((st__8297__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8297__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8289__auto__);
}

if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28293_28314))
;

x28293_28314.componentDidUpdate = ((function (x28293_28314){
return (function (prev_props__8292__auto__,prev_state__8293__auto__){
var this__8289__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8289__auto__);
});})(x28293_28314))
;

x28293_28314.isMounted = ((function (x28293_28314){
return (function (){
var this__8289__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8289__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28293_28314))
;

x28293_28314.componentWillMount = ((function (x28293_28314){
return (function (){
var this__8289__auto__ = this;
var indexer__8294__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8289__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28293_28314))
;

x28293_28314.render = ((function (x28293_28314){
return (function (){
var this__8288__auto__ = this;
var this$ = this__8288__auto__;
var _STAR_reconciler_STAR_28294 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28295 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28296 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28297 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28298 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8288__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8288__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8288__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8288__auto__);

om.next._STAR_parent_STAR_ = this__8288__auto__;

try{var map__28299 = om.next.props.call(null,this$);
var map__28299__$1 = ((((!((map__28299 == null)))?((((map__28299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28299):map__28299);
var name = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards__$1 = cljs.core.get.call(null,map__28299__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__28300 = om.next.get_computed.call(null,this$);
var map__28300__$1 = ((((!((map__28300 == null)))?((((map__28300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28300):map__28300);
var card_create_fn = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function (e){
return e.preventDefault();
});})(map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
, "onDrop": ((function (map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function (e){
e.preventDefault();

var G__28303 = card_drag_fns;
var G__28303__$1 = (((G__28303 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__28303));
var G__28303__$2 = (((G__28303__$1 == null))?null:cljs.core.apply.call(null,G__28303__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__28303__$2;
});})(map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
},om.util.force_children.call(null,React.DOM.h3({"className": "lane-title"},om.util.force_children.call(null,React.DOM.span({"className": "text"},om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.span({"className": "count"},om.util.force_children.call(null,cljs.core.count.call(null,cards__$1)))))),om.util.force_children.call(null,React.DOM.div({"className": "add"},om.util.force_children.call(null,React.DOM.a({"onClick": ((function (map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function (){
var G__28304 = card_create_fn;
var G__28304__$1 = (((G__28304 == null))?null:cljs.core.apply.call(null,G__28304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__28304__$1;
});})(map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
},om.util.force_children.call(null,"+"))))),om.util.force_children.call(null,React.DOM.div({"className": "cards"},om.util.force_children.call(null,(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = (function (){var G__28305 = card_drag_fns;
var G__28305__$1 = (((G__28305 == null))?null:cljs.core.map.call(null,((function (G__28305,ref,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function (p__28306){
var vec__28307 = p__28306;
var k = cljs.core.nth.call(null,vec__28307,(0),null);
var f = cljs.core.nth.call(null,vec__28307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(G__28305,ref,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
,G__28305));
var G__28305__$2 = (((G__28305__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__28305__$1));
return G__28305__$2;
})();
var iter__5758__auto__ = ((function (ref,drag_fns,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function kanban$components$lane$iter__28308(s__28309){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314){
return (function (){
var s__28309__$1 = s__28309;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28309__$1);
if(temp__4425__auto__){
var s__28309__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28309__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__28309__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__28311 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__28310 = (0);
while(true){
if((i__28310 < size__5757__auto__)){
var c = cljs.core._nth.call(null,c__5756__auto__,i__28310);
cljs.core.chunk_append.call(null,b__28311,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__28315 = (i__28310 + (1));
i__28310 = G__28315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28311),kanban$components$lane$iter__28308.call(null,cljs.core.chunk_rest.call(null,s__28309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28311),null);
}
} else {
var c = cljs.core.first.call(null,s__28309__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__28308.call(null,cljs.core.rest.call(null,s__28309__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
,null,null));
});})(ref,drag_fns,map__28299,map__28299__$1,name,cards__$1,map__28300,map__28300__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_28294,_STAR_depth_STAR_28295,_STAR_shared_STAR_28296,_STAR_instrument_STAR_28297,_STAR_parent_STAR_28298,this$,this__8288__auto__,x28293_28314))
;
return iter__5758__auto__.call(null,cards__$1);
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28298;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28297;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28296;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28295;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28294;
}});})(x28293_28314))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x28312_28316 = kanban.components.lane.Lane;
x28312_28316.om$next$Ident$ = true;

x28312_28316.om$next$Ident$ident$arity$2 = ((function (x28312_28316){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28312_28316))
;

x28312_28316.om$next$IQuery$ = true;

x28312_28316.om$next$IQuery$query$arity$1 = ((function (x28312_28316){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x28312_28316))
;


var x28313_28317 = kanban.components.lane.Lane.prototype;
x28313_28317.om$next$Ident$ = true;

x28313_28317.om$next$Ident$ident$arity$2 = ((function (x28313_28317){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28313_28317))
;

x28313_28317.om$next$IQuery$ = true;

x28313_28317.om$next$IQuery$query$arity$1 = ((function (x28313_28317){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x28313_28317))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__8351__auto__,writer__8352__auto__,opt__8353__auto__){
return cljs.core._write.call(null,writer__8352__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map