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
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x82700_82721 = kanban.components.lane.Lane.prototype;
x82700_82721.componentWillUpdate = ((function (x82700_82721){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x82700_82721))
;

x82700_82721.shouldComponentUpdate = ((function (x82700_82721){
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
});})(x82700_82721))
;

x82700_82721.componentWillUnmount = ((function (x82700_82721){
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
});})(x82700_82721))
;

x82700_82721.componentDidUpdate = ((function (x82700_82721){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x82700_82721))
;

x82700_82721.isMounted = ((function (x82700_82721){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x82700_82721))
;

x82700_82721.componentWillMount = ((function (x82700_82721){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x82700_82721))
;

x82700_82721.render = ((function (x82700_82721){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_82701 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_82702 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_82703 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_82704 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_82705 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__82706 = om.next.props.call(null,this$);
var map__82706__$1 = ((((!((map__82706 == null)))?((((map__82706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82706):map__82706);
var name = cljs.core.get.call(null,map__82706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards__$1 = cljs.core.get.call(null,map__82706__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__82707 = om.next.get_computed.call(null,this$);
var map__82707__$1 = ((((!((map__82707 == null)))?((((map__82707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82707):map__82707);
var card_create_fn = cljs.core.get.call(null,map__82707__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__82707__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__82707__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function (e){
return e.preventDefault();
});})(map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
, "onDrop": ((function (map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function (){
var G__82710 = card_drag_fns;
var G__82710__$1 = (((G__82710 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__82710));
var G__82710__$2 = (((G__82710__$1 == null))?null:cljs.core.apply.call(null,G__82710__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__82710__$2;
});})(map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
},React.DOM.h3({"className": "lane-title"},React.DOM.span({"className": "text"},name),React.DOM.span({"className": "count"},cljs.core.count.call(null,cards__$1))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function (){
var G__82711 = card_create_fn;
var G__82711__$1 = (((G__82711 == null))?null:cljs.core.apply.call(null,G__82711,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident.call(null,this$)], null)));
return G__82711__$1;
});})(map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = (function (){var G__82712 = card_drag_fns;
var G__82712__$1 = (((G__82712 == null))?null:cljs.core.map.call(null,((function (G__82712,ref,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function (p__82713){
var vec__82714 = p__82713;
var k = cljs.core.nth.call(null,vec__82714,(0),null);
var f = cljs.core.nth.call(null,vec__82714,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(G__82712,ref,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
,G__82712));
var G__82712__$2 = (((G__82712__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__82712__$1));
return G__82712__$2;
})();
var iter__5866__auto__ = ((function (ref,drag_fns,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function kanban$components$lane$iter__82715(s__82716){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721){
return (function (){
var s__82716__$1 = s__82716;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__82716__$1);
if(temp__4425__auto__){
var s__82716__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82716__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__82716__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__82718 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__82717 = (0);
while(true){
if((i__82717 < size__5865__auto__)){
var c = cljs.core._nth.call(null,c__5864__auto__,i__82717);
cljs.core.chunk_append.call(null,b__82718,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__82722 = (i__82717 + (1));
i__82717 = G__82722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82718),kanban$components$lane$iter__82715.call(null,cljs.core.chunk_rest.call(null,s__82716__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82718),null);
}
} else {
var c = cljs.core.first.call(null,s__82716__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__82715.call(null,cljs.core.rest.call(null,s__82716__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
,null,null));
});})(ref,drag_fns,map__82706,map__82706__$1,name,cards__$1,map__82707,map__82707__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_82701,_STAR_depth_STAR_82702,_STAR_shared_STAR_82703,_STAR_instrument_STAR_82704,_STAR_parent_STAR_82705,this$,x82700_82721))
;
return iter__5866__auto__.call(null,cards__$1);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_82705;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_82704;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_82703;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_82702;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_82701;
}});})(x82700_82721))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x82719_82723 = kanban.components.lane.Lane;
x82719_82723.om$next$Ident$ = true;

x82719_82723.om$next$Ident$ident$arity$2 = ((function (x82719_82723){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82719_82723))
;

x82719_82723.om$next$IQuery$ = true;

x82719_82723.om$next$IQuery$query$arity$1 = ((function (x82719_82723){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x82719_82723))
;


var x82720_82724 = kanban.components.lane.Lane.prototype;
x82720_82724.om$next$Ident$ = true;

x82720_82724.om$next$Ident$ident$arity$2 = ((function (x82720_82724){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82720_82724))
;

x82720_82724.om$next$IQuery$ = true;

x82720_82724.om$next$IQuery$query$arity$1 = ((function (x82720_82724){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x82720_82724))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map