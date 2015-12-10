// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__26998 = x;
var G__26998__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__26998):G__26998);
return G__26998__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__27001 = x;
var G__27001__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__27001):G__27001);
return G__27001__$1;
})();
var G__27002 = props;
var G__27002__$1 = (((G__27002 == null))?null:om.next.get_computed.call(null,G__27002));
var G__27002__$2 = (((G__27002__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__27002__$1));
var G__27002__$3 = (((G__27002__$2 == null))?null:cljs.core.apply.call(null,G__27002__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__27002__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x27012_27027 = kanban.components.sortable_list.Sortable.prototype;
x27012_27027.componentWillUpdate = ((function (x27012_27027){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27012_27027))
;

x27012_27027.shouldComponentUpdate = ((function (x27012_27027){
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
});})(x27012_27027))
;

x27012_27027.componentWillUnmount = ((function (x27012_27027){
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
});})(x27012_27027))
;

x27012_27027.componentDidUpdate = ((function (x27012_27027){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27012_27027))
;

x27012_27027.isMounted = ((function (x27012_27027){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27012_27027))
;

x27012_27027.componentWillMount = ((function (x27012_27027){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27012_27027))
;

x27012_27027.render = ((function (x27012_27027){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27013 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27014 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27015 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27016 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27017 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__27018 = om.next.get_computed.call(null,this$);
var map__27018__$1 = ((((!((map__27018 == null)))?((((map__27018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27018):map__27018);
var dragging = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__27018__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027){
return (function (p1__27003_SHARP_){
var G__27020 = drag_fns;
var G__27020__$1 = (((G__27020 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__27020));
var G__27020__$2 = (((G__27020__$1 == null))?null:cljs.core.apply.call(null,G__27020__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27003_SHARP_,this$], null)));
return G__27020__$2;
});})(map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027))
, "onDragEnd": ((function (map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027){
return (function (p1__27004_SHARP_){
var G__27021 = drag_fns;
var G__27021__$1 = (((G__27021 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__27021));
var G__27021__$2 = (((G__27021__$1 == null))?null:cljs.core.apply.call(null,G__27021__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27004_SHARP_,this$], null)));
return G__27021__$2;
});})(map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027))
, "onDragOver": ((function (map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027){
return (function (p1__27005_SHARP_){
var G__27022 = drag_fns;
var G__27022__$1 = (((G__27022 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__27022));
var G__27022__$2 = (((G__27022__$1 == null))?null:cljs.core.apply.call(null,G__27022__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27005_SHARP_,this$], null)));
return G__27022__$2;
});})(map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027))
, "onDrag": ((function (map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027){
return (function (p1__27006_SHARP_){
var G__27023 = drag_fns;
var G__27023__$1 = (((G__27023 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__27023));
var G__27023__$2 = (((G__27023__$1 == null))?null:cljs.core.apply.call(null,G__27023__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27006_SHARP_,this$], null)));
return G__27023__$2;
});})(map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027))
, "onDrop": ((function (map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027){
return (function (p1__27007_SHARP_){
var G__27024 = drag_fns;
var G__27024__$1 = (((G__27024 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__27024));
var G__27024__$2 = (((G__27024__$1 == null))?null:cljs.core.apply.call(null,G__27024__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27007_SHARP_,this$], null)));
return G__27024__$2;
});})(map__27018,map__27018__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_27013,_STAR_depth_STAR_27014,_STAR_shared_STAR_27015,_STAR_instrument_STAR_27016,_STAR_parent_STAR_27017,this$,this__8200__auto__,x27012_27027))
},om.util.force_children.call(null,(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27017;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27016;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27015;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27014;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27013;
}});})(x27012_27027))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x27025_27028 = kanban.components.sortable_list.Sortable;


var x27026_27029 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.call(null,kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x27048_27068 = kanban.components.sortable_list.SortableList.prototype;
x27048_27068.componentWillUpdate = ((function (x27048_27068){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27048_27068))
;

x27048_27068.shouldComponentUpdate = ((function (x27048_27068){
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
});})(x27048_27068))
;

x27048_27068.componentWillUnmount = ((function (x27048_27068){
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
});})(x27048_27068))
;

x27048_27068.componentDidUpdate = ((function (x27048_27068){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27048_27068))
;

x27048_27068.isMounted = ((function (x27048_27068){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27048_27068))
;

x27048_27068.componentWillMount = ((function (x27048_27068){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27048_27068))
;

x27048_27068.item_for_key = ((function (x27048_27068){
return (function (key){
var this$ = this;
var map__27049 = om.next.props.call(null,this$);
var map__27049__$1 = ((((!((map__27049 == null)))?((((map__27049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27049):map__27049);
var items = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__27049__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__27049,map__27049__$1,items,key_fn,this$,x27048_27068){
return (function (p1__27030_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__27030_SHARP_));
});})(map__27049,map__27049__$1,items,key_fn,this$,x27048_27068))
,items));
});})(x27048_27068))
;

x27048_27068.drag_start = ((function (x27048_27068){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x27048_27068))
;

x27048_27068.drag_end = ((function (x27048_27068){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x27048_27068){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x27048_27068))
);
});})(x27048_27068))
;

x27048_27068.drag_over = ((function (x27048_27068){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x27048_27068))
;

x27048_27068.drag = ((function (x27048_27068){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x27048_27068))
;

x27048_27068.drag_over_item = ((function (x27048_27068){
return (function (e,target_child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var target_key = kanban.components.sortable_list.sortable_key.call(null,target_child);
var drag_key = new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var key_fn = new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core._EQ_.call(null,drag_key,target_key)){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var node = om.dom.node.call(null,target_child);
var rect = node.getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var where = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?(((y < center_y))?new cljs.core.Keyword(null,"before","before",-1633692388):new cljs.core.Keyword(null,"after","after",594996914)):(((x < center_x))?new cljs.core.Keyword(null,"before","before",-1633692388):new cljs.core.Keyword(null,"after","after",594996914)));
var items = (function (){var or__4986__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x27048_27068){
return (function (p1__27031_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__27031_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x27048_27068))
,items);
var index = (function (){var G__27051 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__27051__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__27051 + (1)):G__27051);
return G__27051__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x27048_27068){
return (function (p1__27032_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__27032_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__27032_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x27048_27068))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x27048_27068))
;

x27048_27068.drag_drop = ((function (x27048_27068){
return (function (e){
var this$ = this;
var G__27052 = this$;
var G__27052__$1 = (((G__27052 == null))?null:om.next.props.call(null,G__27052));
var G__27052__$2 = (((G__27052__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__27052__$1));
var G__27052__$3 = (((G__27052__$2 == null))?null:cljs.core.apply.call(null,G__27052__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__27052__$3;
});})(x27048_27068))
;

x27048_27068.render = ((function (x27048_27068){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27053 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27054 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27055 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27056 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27057 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__27058 = om.next.props.call(null,this$);
var map__27058__$1 = ((((!((map__27058 == null)))?((((map__27058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27058):map__27058);
var direction = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var key_fn = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__27059 = om.next.get_state.call(null,this$);
var map__27059__$1 = ((((!((map__27059 == null)))?((((map__27059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27059):map__27059);
var dragging = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__27059__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable-list","sortable-list",-233142892),true,new cljs.core.Keyword(null,"sortable-list-vertical","sortable-list-vertical",1967461537),cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"vertical","vertical",718696748))], null)), "onDragOver": ((function (items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27033_SHARP_){
return this$.drag_over(p1__27033_SHARP_);
});})(items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
, "onDrop": ((function (items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27034_SHARP_){
return this$.drag_drop(p1__27034_SHARP_);
});})(items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
},om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function kanban$components$sortable_list$iter__27062(s__27063){
return (new cljs.core.LazySeq(null,((function (items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (){
var s__27063__$1 = s__27063;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27063__$1);
if(temp__4425__auto__){
var s__27063__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27063__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__27063__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__27065 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__27064 = (0);
while(true){
if((i__27064 < size__5757__auto__)){
var item = cljs.core._nth.call(null,c__5756__auto__,i__27064);
cljs.core.chunk_append.call(null,b__27065,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__4974__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27035_SHARP_,p2__27036_SHARP_){
return this$.drag_start(p1__27035_SHARP_,p2__27036_SHARP_);
});})(i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27037_SHARP_,p2__27038_SHARP_){
return this$.drag_end(p1__27037_SHARP_,p2__27038_SHARP_);
});})(i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27039_SHARP_,p2__27040_SHARP_){
return this$.drag_over_item(p1__27039_SHARP_,p2__27040_SHARP_);
});})(i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27041_SHARP_,p2__27042_SHARP_){
return this$.drag(p1__27041_SHARP_,p2__27042_SHARP_);
});})(i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27043_SHARP_){
return this$.drag_drop(p1__27043_SHARP_);
});})(i__27064,item,c__5756__auto__,size__5757__auto__,b__27065,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
], null)], null))));

var G__27069 = (i__27064 + (1));
i__27064 = G__27069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27065),kanban$components$sortable_list$iter__27062.call(null,cljs.core.chunk_rest.call(null,s__27063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27065),null);
}
} else {
var item = cljs.core.first.call(null,s__27063__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__4974__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27035_SHARP_,p2__27036_SHARP_){
return this$.drag_start(p1__27035_SHARP_,p2__27036_SHARP_);
});})(item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27037_SHARP_,p2__27038_SHARP_){
return this$.drag_end(p1__27037_SHARP_,p2__27038_SHARP_);
});})(item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27039_SHARP_,p2__27040_SHARP_){
return this$.drag_over_item(p1__27039_SHARP_,p2__27040_SHARP_);
});})(item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27041_SHARP_,p2__27042_SHARP_){
return this$.drag(p1__27041_SHARP_,p2__27042_SHARP_);
});})(item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068){
return (function (p1__27043_SHARP_){
return this$.drag_drop(p1__27043_SHARP_);
});})(item,s__27063__$2,temp__4425__auto__,items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
], null)], null))),kanban$components$sortable_list$iter__27062.call(null,cljs.core.rest.call(null,s__27063__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
,null,null));
});})(items,map__27058,map__27058__$1,direction,key_fn,element_fn,map__27059,map__27059__$1,dragging,drag_key,_STAR_reconciler_STAR_27053,_STAR_depth_STAR_27054,_STAR_shared_STAR_27055,_STAR_instrument_STAR_27056,_STAR_parent_STAR_27057,this$,this__8200__auto__,x27048_27068))
;
return iter__5758__auto__.call(null,items);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27057;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27056;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27055;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27054;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27053;
}});})(x27048_27068))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x27066_27070 = kanban.components.sortable_list.SortableList;


var x27067_27071 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map