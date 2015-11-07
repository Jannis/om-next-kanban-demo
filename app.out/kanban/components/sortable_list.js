// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__8511 = x;
var G__8511__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__8511):G__8511);
return G__8511__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__8514 = x;
var G__8514__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__8514):G__8514);
return G__8514__$1;
})();
var G__8515 = props;
var G__8515__$1 = (((G__8515 == null))?null:om.next.get_computed.call(null,G__8515));
var G__8515__$2 = (((G__8515__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__8515__$1));
var G__8515__$3 = (((G__8515__$2 == null))?null:cljs.core.apply.call(null,G__8515__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__8515__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x8525_8540 = kanban.components.sortable_list.Sortable.prototype;
x8525_8540.componentWillUpdate = ((function (x8525_8540){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8525_8540))
;

x8525_8540.shouldComponentUpdate = ((function (x8525_8540){
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
});})(x8525_8540))
;

x8525_8540.componentWillUnmount = ((function (x8525_8540){
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
});})(x8525_8540))
;

x8525_8540.componentDidUpdate = ((function (x8525_8540){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8525_8540))
;

x8525_8540.isMounted = ((function (x8525_8540){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8525_8540))
;

x8525_8540.componentWillMount = ((function (x8525_8540){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8525_8540))
;

x8525_8540.render = ((function (x8525_8540){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8526 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8527 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8528 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8529 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8530 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8531 = om.next.get_computed.call(null,this$);
var map__8531__$1 = ((((!((map__8531 == null)))?((((map__8531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8531):map__8531);
var dragging = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__8531__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540){
return (function (p1__8516_SHARP_){
var G__8533 = drag_fns;
var G__8533__$1 = (((G__8533 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__8533));
var G__8533__$2 = (((G__8533__$1 == null))?null:cljs.core.apply.call(null,G__8533__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8516_SHARP_,this$], null)));
return G__8533__$2;
});})(map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540))
, "onDragEnd": ((function (map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540){
return (function (p1__8517_SHARP_){
var G__8534 = drag_fns;
var G__8534__$1 = (((G__8534 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__8534));
var G__8534__$2 = (((G__8534__$1 == null))?null:cljs.core.apply.call(null,G__8534__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8517_SHARP_,this$], null)));
return G__8534__$2;
});})(map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540))
, "onDragOver": ((function (map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540){
return (function (p1__8518_SHARP_){
var G__8535 = drag_fns;
var G__8535__$1 = (((G__8535 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__8535));
var G__8535__$2 = (((G__8535__$1 == null))?null:cljs.core.apply.call(null,G__8535__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8518_SHARP_,this$], null)));
return G__8535__$2;
});})(map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540))
, "onDrag": ((function (map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540){
return (function (p1__8519_SHARP_){
var G__8536 = drag_fns;
var G__8536__$1 = (((G__8536 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__8536));
var G__8536__$2 = (((G__8536__$1 == null))?null:cljs.core.apply.call(null,G__8536__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8519_SHARP_,this$], null)));
return G__8536__$2;
});})(map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540))
, "onDrop": ((function (map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540){
return (function (p1__8520_SHARP_){
var G__8537 = drag_fns;
var G__8537__$1 = (((G__8537 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__8537));
var G__8537__$2 = (((G__8537__$1 == null))?null:cljs.core.apply.call(null,G__8537__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8520_SHARP_,this$], null)));
return G__8537__$2;
});})(map__8531,map__8531__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_8526,_STAR_depth_STAR_8527,_STAR_shared_STAR_8528,_STAR_instrument_STAR_8529,_STAR_parent_STAR_8530,this$,x8525_8540))
},(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8530;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8529;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8528;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8527;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8526;
}});})(x8525_8540))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x8538_8541 = kanban.components.sortable_list.Sortable;


var x8539_8542 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.call(null,kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x8561_8581 = kanban.components.sortable_list.SortableList.prototype;
x8561_8581.componentWillUpdate = ((function (x8561_8581){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8561_8581))
;

x8561_8581.shouldComponentUpdate = ((function (x8561_8581){
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
});})(x8561_8581))
;

x8561_8581.componentWillUnmount = ((function (x8561_8581){
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
});})(x8561_8581))
;

x8561_8581.componentDidUpdate = ((function (x8561_8581){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8561_8581))
;

x8561_8581.isMounted = ((function (x8561_8581){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8561_8581))
;

x8561_8581.componentWillMount = ((function (x8561_8581){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8561_8581))
;

x8561_8581.item_for_key = ((function (x8561_8581){
return (function (key){
var this$ = this;
var map__8562 = om.next.props.call(null,this$);
var map__8562__$1 = ((((!((map__8562 == null)))?((((map__8562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8562):map__8562);
var items = cljs.core.get.call(null,map__8562__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__8562__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__8562,map__8562__$1,items,key_fn,this$,x8561_8581){
return (function (p1__8543_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__8543_SHARP_));
});})(map__8562,map__8562__$1,items,key_fn,this$,x8561_8581))
,items));
});})(x8561_8581))
;

x8561_8581.drag_start = ((function (x8561_8581){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x8561_8581))
;

x8561_8581.drag_end = ((function (x8561_8581){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x8561_8581){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x8561_8581))
);
});})(x8561_8581))
;

x8561_8581.drag_over = ((function (x8561_8581){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x8561_8581))
;

x8561_8581.drag = ((function (x8561_8581){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x8561_8581))
;

x8561_8581.drag_over_item = ((function (x8561_8581){
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
var items = (function (){var or__5168__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x8561_8581){
return (function (p1__8544_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__8544_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x8561_8581))
,items);
var index = (function (){var G__8564 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__8564__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__8564 + (1)):G__8564);
return G__8564__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x8561_8581){
return (function (p1__8545_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__8545_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__8545_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x8561_8581))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x8561_8581))
;

x8561_8581.drag_drop = ((function (x8561_8581){
return (function (e){
var this$ = this;
var G__8565 = this$;
var G__8565__$1 = (((G__8565 == null))?null:om.next.props.call(null,G__8565));
var G__8565__$2 = (((G__8565__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__8565__$1));
var G__8565__$3 = (((G__8565__$2 == null))?null:cljs.core.apply.call(null,G__8565__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__8565__$3;
});})(x8561_8581))
;

x8561_8581.render = ((function (x8561_8581){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8566 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8567 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8568 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8569 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8570 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__8571 = om.next.props.call(null,this$);
var map__8571__$1 = ((((!((map__8571 == null)))?((((map__8571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8571):map__8571);
var direction = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var key_fn = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__8571__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__8572 = om.next.get_state.call(null,this$);
var map__8572__$1 = ((((!((map__8572 == null)))?((((map__8572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8572):map__8572);
var dragging = cljs.core.get.call(null,map__8572__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__8572__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable-list","sortable-list",-233142892),true,new cljs.core.Keyword(null,"sortable-list-vertical","sortable-list-vertical",1967461537),cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"vertical","vertical",718696748))], null)), "onDragOver": ((function (items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8546_SHARP_){
return this$.drag_over(p1__8546_SHARP_);
});})(items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
, "onDrop": ((function (items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8547_SHARP_){
return this$.drag_drop(p1__8547_SHARP_);
});})(items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
},(function (){var iter__5940__auto__ = ((function (items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function kanban$components$sortable_list$iter__8575(s__8576){
return (new cljs.core.LazySeq(null,((function (items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (){
var s__8576__$1 = s__8576;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8576__$1);
if(temp__4425__auto__){
var s__8576__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8576__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8576__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8578 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8577 = (0);
while(true){
if((i__8577 < size__5939__auto__)){
var item = cljs.core._nth.call(null,c__5938__auto__,i__8577);
cljs.core.chunk_append.call(null,b__8578,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5156__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8548_SHARP_,p2__8549_SHARP_){
return this$.drag_start(p1__8548_SHARP_,p2__8549_SHARP_);
});})(i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8550_SHARP_,p2__8551_SHARP_){
return this$.drag_end(p1__8550_SHARP_,p2__8551_SHARP_);
});})(i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8552_SHARP_,p2__8553_SHARP_){
return this$.drag_over_item(p1__8552_SHARP_,p2__8553_SHARP_);
});})(i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8554_SHARP_,p2__8555_SHARP_){
return this$.drag(p1__8554_SHARP_,p2__8555_SHARP_);
});})(i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8556_SHARP_){
return this$.drag_drop(p1__8556_SHARP_);
});})(i__8577,item,c__5938__auto__,size__5939__auto__,b__8578,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
], null)], null))));

var G__8582 = (i__8577 + (1));
i__8577 = G__8582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8578),kanban$components$sortable_list$iter__8575.call(null,cljs.core.chunk_rest.call(null,s__8576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8578),null);
}
} else {
var item = cljs.core.first.call(null,s__8576__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5156__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8548_SHARP_,p2__8549_SHARP_){
return this$.drag_start(p1__8548_SHARP_,p2__8549_SHARP_);
});})(item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8550_SHARP_,p2__8551_SHARP_){
return this$.drag_end(p1__8550_SHARP_,p2__8551_SHARP_);
});})(item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8552_SHARP_,p2__8553_SHARP_){
return this$.drag_over_item(p1__8552_SHARP_,p2__8553_SHARP_);
});})(item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8554_SHARP_,p2__8555_SHARP_){
return this$.drag(p1__8554_SHARP_,p2__8555_SHARP_);
});})(item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581){
return (function (p1__8556_SHARP_){
return this$.drag_drop(p1__8556_SHARP_);
});})(item,s__8576__$2,temp__4425__auto__,items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
], null)], null))),kanban$components$sortable_list$iter__8575.call(null,cljs.core.rest.call(null,s__8576__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
,null,null));
});})(items,map__8571,map__8571__$1,direction,key_fn,element_fn,map__8572,map__8572__$1,dragging,drag_key,_STAR_reconciler_STAR_8566,_STAR_depth_STAR_8567,_STAR_shared_STAR_8568,_STAR_instrument_STAR_8569,_STAR_parent_STAR_8570,this$,x8561_8581))
;
return iter__5940__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8570;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8569;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8568;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8567;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8566;
}});})(x8561_8581))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x8579_8583 = kanban.components.sortable_list.SortableList;


var x8580_8584 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map