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
var this__8024__auto__ = this;
React.Component.apply(this__8024__auto__,arguments);

if(!((this__8024__auto__.initLocalState == null))){
this__8024__auto__.state = this__8024__auto__.initLocalState();
} else {
this__8024__auto__.state = {};
}

return this__8024__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x16994_17015 = kanban.components.lane.Lane.prototype;
x16994_17015.componentWillUpdate = ((function (x16994_17015){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7964__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7964__auto__);
});})(x16994_17015))
;

x16994_17015.shouldComponentUpdate = ((function (x16994_17015){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7964__auto__),goog.object.get(next_props__7965__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7964__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7964__auto__.state,"omcljs$state"),goog.object.get(next_state__7966__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x16994_17015))
;

x16994_17015.componentWillUnmount = ((function (x16994_17015){
return (function (){
var this__7964__auto__ = this;
var r__7970__auto__ = om.next.get_reconciler.call(null,this__7964__auto__);
var cfg__7971__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7970__auto__);
var st__7972__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
var indexer__7969__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
if((st__7972__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7972__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7964__auto__);
}

if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x16994_17015))
;

x16994_17015.componentDidUpdate = ((function (x16994_17015){
return (function (prev_props__7967__auto__,prev_state__7968__auto__){
var this__7964__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7964__auto__);
});})(x16994_17015))
;

x16994_17015.isMounted = ((function (x16994_17015){
return (function (){
var this__7964__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7964__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16994_17015))
;

x16994_17015.componentWillMount = ((function (x16994_17015){
return (function (){
var this__7964__auto__ = this;
var indexer__7969__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7964__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x16994_17015))
;

x16994_17015.render = ((function (x16994_17015){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16995 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16996 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16997 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16998 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16999 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__17000 = om.next.props.call(null,this$);
var map__17000__$1 = ((((!((map__17000 == null)))?((((map__17000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17000):map__17000);
var name = cljs.core.get.call(null,map__17000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards__$1 = cljs.core.get.call(null,map__17000__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__17001 = om.next.get_computed.call(null,this$);
var map__17001__$1 = ((((!((map__17001 == null)))?((((map__17001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17001):map__17001);
var card_create_fn = cljs.core.get.call(null,map__17001__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__17001__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__17001__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function (e){
return e.preventDefault();
});})(map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
, "onDrop": ((function (map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function (e){
e.preventDefault();

var G__17004 = card_drag_fns;
var G__17004__$1 = (((G__17004 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__17004));
var G__17004__$2 = (((G__17004__$1 == null))?null:cljs.core.apply.call(null,G__17004__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__17004__$2;
});})(map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
},React.DOM.h3({"className": "lane-title"},React.DOM.span({"className": "text"},name),React.DOM.span({"className": "count"},cljs.core.count.call(null,cards__$1))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function (){
var G__17005 = card_create_fn;
var G__17005__$1 = (((G__17005 == null))?null:cljs.core.apply.call(null,G__17005,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__17005__$1;
});})(map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = (function (){var G__17006 = card_drag_fns;
var G__17006__$1 = (((G__17006 == null))?null:cljs.core.map.call(null,((function (G__17006,ref,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function (p__17007){
var vec__17008 = p__17007;
var k = cljs.core.nth.call(null,vec__17008,(0),null);
var f = cljs.core.nth.call(null,vec__17008,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(G__17006,ref,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
,G__17006));
var G__17006__$2 = (((G__17006__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17006__$1));
return G__17006__$2;
})();
var iter__5940__auto__ = ((function (ref,drag_fns,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function kanban$components$lane$iter__17009(s__17010){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015){
return (function (){
var s__17010__$1 = s__17010;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17010__$1);
if(temp__4425__auto__){
var s__17010__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17010__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17010__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17012 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17011 = (0);
while(true){
if((i__17011 < size__5939__auto__)){
var c = cljs.core._nth.call(null,c__5938__auto__,i__17011);
cljs.core.chunk_append.call(null,b__17012,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__17016 = (i__17011 + (1));
i__17011 = G__17016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17012),kanban$components$lane$iter__17009.call(null,cljs.core.chunk_rest.call(null,s__17010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17012),null);
}
} else {
var c = cljs.core.first.call(null,s__17010__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__17009.call(null,cljs.core.rest.call(null,s__17010__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
,null,null));
});})(ref,drag_fns,map__17000,map__17000__$1,name,cards__$1,map__17001,map__17001__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_16995,_STAR_depth_STAR_16996,_STAR_shared_STAR_16997,_STAR_instrument_STAR_16998,_STAR_parent_STAR_16999,this$,x16994_17015))
;
return iter__5940__auto__.call(null,cards__$1);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16999;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16998;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16997;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16996;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16995;
}});})(x16994_17015))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x17013_17017 = kanban.components.lane.Lane;
x17013_17017.om$next$Ident$ = true;

x17013_17017.om$next$Ident$ident$arity$2 = ((function (x17013_17017){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x17013_17017))
;

x17013_17017.om$next$IQuery$ = true;

x17013_17017.om$next$IQuery$query$arity$1 = ((function (x17013_17017){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x17013_17017))
;


var x17014_17018 = kanban.components.lane.Lane.prototype;
x17014_17018.om$next$Ident$ = true;

x17014_17018.om$next$Ident$ident$arity$2 = ((function (x17014_17018){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x17014_17018))
;

x17014_17018.om$next$IQuery$ = true;

x17014_17018.om$next$IQuery$query$arity$1 = ((function (x17014_17018){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x17014_17018))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__8026__auto__,writer__8027__auto__,opt__8028__auto__){
return cljs.core._write.call(null,writer__8027__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map