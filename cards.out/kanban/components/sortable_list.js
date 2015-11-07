// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__17053 = x;
var G__17053__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__17053):G__17053);
return G__17053__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__17056 = x;
var G__17056__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__17056):G__17056);
return G__17056__$1;
})();
var G__17057 = props;
var G__17057__$1 = (((G__17057 == null))?null:om.next.get_computed.call(null,G__17057));
var G__17057__$2 = (((G__17057__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__17057__$1));
var G__17057__$3 = (((G__17057__$2 == null))?null:cljs.core.apply.call(null,G__17057__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__17057__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__8024__auto__ = this;
React.Component.apply(this__8024__auto__,arguments);

if(!((this__8024__auto__.initLocalState == null))){
this__8024__auto__.state = this__8024__auto__.initLocalState();
} else {
this__8024__auto__.state = {};
}

return this__8024__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x17067_17082 = kanban.components.sortable_list.Sortable.prototype;
x17067_17082.componentWillUpdate = ((function (x17067_17082){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7964__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7964__auto__);
});})(x17067_17082))
;

x17067_17082.shouldComponentUpdate = ((function (x17067_17082){
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
});})(x17067_17082))
;

x17067_17082.componentWillUnmount = ((function (x17067_17082){
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
});})(x17067_17082))
;

x17067_17082.componentDidUpdate = ((function (x17067_17082){
return (function (prev_props__7967__auto__,prev_state__7968__auto__){
var this__7964__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7964__auto__);
});})(x17067_17082))
;

x17067_17082.isMounted = ((function (x17067_17082){
return (function (){
var this__7964__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7964__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17067_17082))
;

x17067_17082.componentWillMount = ((function (x17067_17082){
return (function (){
var this__7964__auto__ = this;
var indexer__7969__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7964__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x17067_17082))
;

x17067_17082.render = ((function (x17067_17082){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_17068 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17069 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17070 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17071 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17072 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__17073 = om.next.get_computed.call(null,this$);
var map__17073__$1 = ((((!((map__17073 == null)))?((((map__17073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17073):map__17073);
var dragging = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082){
return (function (p1__17058_SHARP_){
var G__17075 = drag_fns;
var G__17075__$1 = (((G__17075 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__17075));
var G__17075__$2 = (((G__17075__$1 == null))?null:cljs.core.apply.call(null,G__17075__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17058_SHARP_,this$], null)));
return G__17075__$2;
});})(map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082))
, "onDragEnd": ((function (map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082){
return (function (p1__17059_SHARP_){
var G__17076 = drag_fns;
var G__17076__$1 = (((G__17076 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__17076));
var G__17076__$2 = (((G__17076__$1 == null))?null:cljs.core.apply.call(null,G__17076__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17059_SHARP_,this$], null)));
return G__17076__$2;
});})(map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082))
, "onDragOver": ((function (map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082){
return (function (p1__17060_SHARP_){
var G__17077 = drag_fns;
var G__17077__$1 = (((G__17077 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__17077));
var G__17077__$2 = (((G__17077__$1 == null))?null:cljs.core.apply.call(null,G__17077__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17060_SHARP_,this$], null)));
return G__17077__$2;
});})(map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082))
, "onDrag": ((function (map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082){
return (function (p1__17061_SHARP_){
var G__17078 = drag_fns;
var G__17078__$1 = (((G__17078 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__17078));
var G__17078__$2 = (((G__17078__$1 == null))?null:cljs.core.apply.call(null,G__17078__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17061_SHARP_,this$], null)));
return G__17078__$2;
});})(map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082))
, "onDrop": ((function (map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082){
return (function (p1__17062_SHARP_){
var G__17079 = drag_fns;
var G__17079__$1 = (((G__17079 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__17079));
var G__17079__$2 = (((G__17079__$1 == null))?null:cljs.core.apply.call(null,G__17079__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17062_SHARP_,this$], null)));
return G__17079__$2;
});})(map__17073,map__17073__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_17068,_STAR_depth_STAR_17069,_STAR_shared_STAR_17070,_STAR_instrument_STAR_17071,_STAR_parent_STAR_17072,this$,x17067_17082))
},(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17072;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17071;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17070;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17069;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17068;
}});})(x17067_17082))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x17080_17083 = kanban.components.sortable_list.Sortable;


var x17081_17084 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__8026__auto__,writer__8027__auto__,opt__8028__auto__){
return cljs.core._write.call(null,writer__8027__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.call(null,kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__8024__auto__ = this;
React.Component.apply(this__8024__auto__,arguments);

if(!((this__8024__auto__.initLocalState == null))){
this__8024__auto__.state = this__8024__auto__.initLocalState();
} else {
this__8024__auto__.state = {};
}

return this__8024__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x17103_17123 = kanban.components.sortable_list.SortableList.prototype;
x17103_17123.componentWillUpdate = ((function (x17103_17123){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7964__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7964__auto__);
});})(x17103_17123))
;

x17103_17123.shouldComponentUpdate = ((function (x17103_17123){
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
});})(x17103_17123))
;

x17103_17123.componentWillUnmount = ((function (x17103_17123){
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
});})(x17103_17123))
;

x17103_17123.componentDidUpdate = ((function (x17103_17123){
return (function (prev_props__7967__auto__,prev_state__7968__auto__){
var this__7964__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7964__auto__);
});})(x17103_17123))
;

x17103_17123.isMounted = ((function (x17103_17123){
return (function (){
var this__7964__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7964__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x17103_17123))
;

x17103_17123.componentWillMount = ((function (x17103_17123){
return (function (){
var this__7964__auto__ = this;
var indexer__7969__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7964__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x17103_17123))
;

x17103_17123.item_for_key = ((function (x17103_17123){
return (function (key){
var this$ = this;
var map__17104 = om.next.props.call(null,this$);
var map__17104__$1 = ((((!((map__17104 == null)))?((((map__17104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17104):map__17104);
var items = cljs.core.get.call(null,map__17104__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__17104__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__17104,map__17104__$1,items,key_fn,this$,x17103_17123){
return (function (p1__17085_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__17085_SHARP_));
});})(map__17104,map__17104__$1,items,key_fn,this$,x17103_17123))
,items));
});})(x17103_17123))
;

x17103_17123.drag_start = ((function (x17103_17123){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x17103_17123))
;

x17103_17123.drag_end = ((function (x17103_17123){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x17103_17123){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x17103_17123))
);
});})(x17103_17123))
;

x17103_17123.drag_over = ((function (x17103_17123){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x17103_17123))
;

x17103_17123.drag = ((function (x17103_17123){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x17103_17123))
;

x17103_17123.drag_over_item = ((function (x17103_17123){
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
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x17103_17123){
return (function (p1__17086_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__17086_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x17103_17123))
,items);
var index = (function (){var G__17106 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__17106__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__17106 + (1)):G__17106);
return G__17106__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x17103_17123){
return (function (p1__17087_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__17087_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__17087_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x17103_17123))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x17103_17123))
;

x17103_17123.drag_drop = ((function (x17103_17123){
return (function (e){
var this$ = this;
var G__17107 = this$;
var G__17107__$1 = (((G__17107 == null))?null:om.next.props.call(null,G__17107));
var G__17107__$2 = (((G__17107__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__17107__$1));
var G__17107__$3 = (((G__17107__$2 == null))?null:cljs.core.apply.call(null,G__17107__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__17107__$3;
});})(x17103_17123))
;

x17103_17123.render = ((function (x17103_17123){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_17108 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_17109 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_17110 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_17111 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_17112 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__17113 = om.next.props.call(null,this$);
var map__17113__$1 = ((((!((map__17113 == null)))?((((map__17113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17113):map__17113);
var direction = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var key_fn = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__17114 = om.next.get_state.call(null,this$);
var map__17114__$1 = ((((!((map__17114 == null)))?((((map__17114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17114):map__17114);
var dragging = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable-list","sortable-list",-233142892),true,new cljs.core.Keyword(null,"sortable-list-vertical","sortable-list-vertical",1967461537),cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"vertical","vertical",718696748))], null)), "onDragOver": ((function (items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17088_SHARP_){
return this$.drag_over(p1__17088_SHARP_);
});})(items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
, "onDrop": ((function (items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17089_SHARP_){
return this$.drag_drop(p1__17089_SHARP_);
});})(items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
},(function (){var iter__5940__auto__ = ((function (items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function kanban$components$sortable_list$iter__17117(s__17118){
return (new cljs.core.LazySeq(null,((function (items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (){
var s__17118__$1 = s__17118;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17118__$1);
if(temp__4425__auto__){
var s__17118__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17118__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__17118__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__17120 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__17119 = (0);
while(true){
if((i__17119 < size__5939__auto__)){
var item = cljs.core._nth.call(null,c__5938__auto__,i__17119);
cljs.core.chunk_append.call(null,b__17120,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5156__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17090_SHARP_,p2__17091_SHARP_){
return this$.drag_start(p1__17090_SHARP_,p2__17091_SHARP_);
});})(i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17092_SHARP_,p2__17093_SHARP_){
return this$.drag_end(p1__17092_SHARP_,p2__17093_SHARP_);
});})(i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17094_SHARP_,p2__17095_SHARP_){
return this$.drag_over_item(p1__17094_SHARP_,p2__17095_SHARP_);
});})(i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17096_SHARP_,p2__17097_SHARP_){
return this$.drag(p1__17096_SHARP_,p2__17097_SHARP_);
});})(i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17098_SHARP_){
return this$.drag_drop(p1__17098_SHARP_);
});})(i__17119,item,c__5938__auto__,size__5939__auto__,b__17120,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
], null)], null))));

var G__17124 = (i__17119 + (1));
i__17119 = G__17124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17120),kanban$components$sortable_list$iter__17117.call(null,cljs.core.chunk_rest.call(null,s__17118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17120),null);
}
} else {
var item = cljs.core.first.call(null,s__17118__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5156__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17090_SHARP_,p2__17091_SHARP_){
return this$.drag_start(p1__17090_SHARP_,p2__17091_SHARP_);
});})(item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17092_SHARP_,p2__17093_SHARP_){
return this$.drag_end(p1__17092_SHARP_,p2__17093_SHARP_);
});})(item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17094_SHARP_,p2__17095_SHARP_){
return this$.drag_over_item(p1__17094_SHARP_,p2__17095_SHARP_);
});})(item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17096_SHARP_,p2__17097_SHARP_){
return this$.drag(p1__17096_SHARP_,p2__17097_SHARP_);
});})(item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123){
return (function (p1__17098_SHARP_){
return this$.drag_drop(p1__17098_SHARP_);
});})(item,s__17118__$2,temp__4425__auto__,items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
], null)], null))),kanban$components$sortable_list$iter__17117.call(null,cljs.core.rest.call(null,s__17118__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
,null,null));
});})(items,map__17113,map__17113__$1,direction,key_fn,element_fn,map__17114,map__17114__$1,dragging,drag_key,_STAR_reconciler_STAR_17108,_STAR_depth_STAR_17109,_STAR_shared_STAR_17110,_STAR_instrument_STAR_17111,_STAR_parent_STAR_17112,this$,x17103_17123))
;
return iter__5940__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_17112;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_17111;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_17110;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_17109;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_17108;
}});})(x17103_17123))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x17121_17125 = kanban.components.sortable_list.SortableList;


var x17122_17126 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__8026__auto__,writer__8027__auto__,opt__8028__auto__){
return cljs.core._write.call(null,writer__8027__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map