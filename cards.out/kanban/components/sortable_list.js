// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__152096 = x;
var G__152096__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__152096):G__152096);
return G__152096__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__152099 = x;
var G__152099__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__152099):G__152099);
return G__152099__$1;
})();
var G__152100 = props;
var G__152100__$1 = (((G__152100 == null))?null:om.next.get_computed.call(null,G__152100));
var G__152100__$2 = (((G__152100__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__152100__$1));
var G__152100__$3 = (((G__152100__$2 == null))?null:cljs.core.apply.call(null,G__152100__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__152100__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x152110_152125 = kanban.components.sortable_list.Sortable.prototype;
x152110_152125.componentWillUpdate = ((function (x152110_152125){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x152110_152125))
;

x152110_152125.shouldComponentUpdate = ((function (x152110_152125){
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
});})(x152110_152125))
;

x152110_152125.componentWillUnmount = ((function (x152110_152125){
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
});})(x152110_152125))
;

x152110_152125.componentDidUpdate = ((function (x152110_152125){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x152110_152125))
;

x152110_152125.isMounted = ((function (x152110_152125){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x152110_152125))
;

x152110_152125.componentWillMount = ((function (x152110_152125){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x152110_152125))
;

x152110_152125.render = ((function (x152110_152125){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_152111 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_152112 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_152113 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_152114 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_152115 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__152116 = om.next.get_computed.call(null,this$);
var map__152116__$1 = ((((!((map__152116 == null)))?((((map__152116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152116):map__152116);
var dragging = cljs.core.get.call(null,map__152116__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__152116__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__152116__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125){
return (function (p1__152101_SHARP_){
var G__152118 = drag_fns;
var G__152118__$1 = (((G__152118 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__152118));
var G__152118__$2 = (((G__152118__$1 == null))?null:cljs.core.apply.call(null,G__152118__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152101_SHARP_,this$], null)));
return G__152118__$2;
});})(map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125))
, "onDragEnd": ((function (map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125){
return (function (p1__152102_SHARP_){
var G__152119 = drag_fns;
var G__152119__$1 = (((G__152119 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__152119));
var G__152119__$2 = (((G__152119__$1 == null))?null:cljs.core.apply.call(null,G__152119__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152102_SHARP_,this$], null)));
return G__152119__$2;
});})(map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125))
, "onDragOver": ((function (map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125){
return (function (p1__152103_SHARP_){
var G__152120 = drag_fns;
var G__152120__$1 = (((G__152120 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__152120));
var G__152120__$2 = (((G__152120__$1 == null))?null:cljs.core.apply.call(null,G__152120__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152103_SHARP_,this$], null)));
return G__152120__$2;
});})(map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125))
, "onDrag": ((function (map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125){
return (function (p1__152104_SHARP_){
var G__152121 = drag_fns;
var G__152121__$1 = (((G__152121 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__152121));
var G__152121__$2 = (((G__152121__$1 == null))?null:cljs.core.apply.call(null,G__152121__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152104_SHARP_,this$], null)));
return G__152121__$2;
});})(map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125))
, "onDrop": ((function (map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125){
return (function (p1__152105_SHARP_){
var G__152122 = drag_fns;
var G__152122__$1 = (((G__152122 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__152122));
var G__152122__$2 = (((G__152122__$1 == null))?null:cljs.core.apply.call(null,G__152122__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152105_SHARP_,this$], null)));
return G__152122__$2;
});})(map__152116,map__152116__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152111,_STAR_depth_STAR_152112,_STAR_shared_STAR_152113,_STAR_instrument_STAR_152114,_STAR_parent_STAR_152115,this$,x152110_152125))
},(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_152115;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_152114;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_152113;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_152112;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_152111;
}});})(x152110_152125))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x152123_152126 = kanban.components.sortable_list.Sortable;


var x152124_152127 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.call(null,kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x152146_152166 = kanban.components.sortable_list.SortableList.prototype;
x152146_152166.componentWillUpdate = ((function (x152146_152166){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x152146_152166))
;

x152146_152166.shouldComponentUpdate = ((function (x152146_152166){
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
});})(x152146_152166))
;

x152146_152166.componentWillUnmount = ((function (x152146_152166){
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
});})(x152146_152166))
;

x152146_152166.componentDidUpdate = ((function (x152146_152166){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x152146_152166))
;

x152146_152166.isMounted = ((function (x152146_152166){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x152146_152166))
;

x152146_152166.componentWillMount = ((function (x152146_152166){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x152146_152166))
;

x152146_152166.item_for_key = ((function (x152146_152166){
return (function (key){
var this$ = this;
var map__152147 = om.next.props.call(null,this$);
var map__152147__$1 = ((((!((map__152147 == null)))?((((map__152147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152147):map__152147);
var items = cljs.core.get.call(null,map__152147__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__152147__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__152147,map__152147__$1,items,key_fn,this$,x152146_152166){
return (function (p1__152128_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__152128_SHARP_));
});})(map__152147,map__152147__$1,items,key_fn,this$,x152146_152166))
,items));
});})(x152146_152166))
;

x152146_152166.drag_start = ((function (x152146_152166){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x152146_152166))
;

x152146_152166.drag_end = ((function (x152146_152166){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x152146_152166){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x152146_152166))
);
});})(x152146_152166))
;

x152146_152166.drag_over = ((function (x152146_152166){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x152146_152166))
;

x152146_152166.drag = ((function (x152146_152166){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x152146_152166))
;

x152146_152166.drag_over_item = ((function (x152146_152166){
return (function (e,target_child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var target_key = kanban.components.sortable_list.sortable_key.call(null,target_child);
var drag_key = new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var key_fn = new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core._EQ_.call(null,drag_key,target_key)){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var node = om.dom.node.call(null,target_child);
var rect = node.getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var where = (((x < center_x))?new cljs.core.Keyword(null,"before","before",-1633692388):new cljs.core.Keyword(null,"after","after",594996914));
var items = (function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x152146_152166){
return (function (p1__152129_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__152129_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x152146_152166))
,items);
var index = (function (){var G__152149 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__152149__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__152149 + (1)):G__152149);
return G__152149__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x152146_152166){
return (function (p1__152130_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__152130_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__152130_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x152146_152166))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x152146_152166))
;

x152146_152166.drag_drop = ((function (x152146_152166){
return (function (e){
var this$ = this;
var G__152150 = this$;
var G__152150__$1 = (((G__152150 == null))?null:om.next.props.call(null,G__152150));
var G__152150__$2 = (((G__152150__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__152150__$1));
var G__152150__$3 = (((G__152150__$2 == null))?null:cljs.core.apply.call(null,G__152150__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__152150__$3;
});})(x152146_152166))
;

x152146_152166.render = ((function (x152146_152166){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_152151 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_152152 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_152153 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_152154 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_152155 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__152156 = om.next.props.call(null,this$);
var map__152156__$1 = ((((!((map__152156 == null)))?((((map__152156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152156):map__152156);
var key_fn = cljs.core.get.call(null,map__152156__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__152156__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__152157 = om.next.get_state.call(null,this$);
var map__152157__$1 = ((((!((map__152157 == null)))?((((map__152157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152157):map__152157);
var dragging = cljs.core.get.call(null,map__152157__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__152157__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": "sortable-list", "onDragOver": ((function (items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152131_SHARP_){
return this$.drag_over(p1__152131_SHARP_);
});})(items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
, "onDrop": ((function (items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152132_SHARP_){
return this$.drag_drop(p1__152132_SHARP_);
});})(items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
},(function (){var iter__5866__auto__ = ((function (items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function kanban$components$sortable_list$iter__152160(s__152161){
return (new cljs.core.LazySeq(null,((function (items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (){
var s__152161__$1 = s__152161;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__152161__$1);
if(temp__4425__auto__){
var s__152161__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__152161__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__152161__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__152163 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__152162 = (0);
while(true){
if((i__152162 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__152162);
cljs.core.chunk_append.call(null,b__152163,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152133_SHARP_,p2__152134_SHARP_){
return this$.drag_start(p1__152133_SHARP_,p2__152134_SHARP_);
});})(i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152135_SHARP_,p2__152136_SHARP_){
return this$.drag_end(p1__152135_SHARP_,p2__152136_SHARP_);
});})(i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152137_SHARP_,p2__152138_SHARP_){
return this$.drag_over_item(p1__152137_SHARP_,p2__152138_SHARP_);
});})(i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152139_SHARP_,p2__152140_SHARP_){
return this$.drag(p1__152139_SHARP_,p2__152140_SHARP_);
});})(i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152141_SHARP_){
return this$.drag_drop(p1__152141_SHARP_);
});})(i__152162,item,c__5864__auto__,size__5865__auto__,b__152163,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
], null)], null))));

var G__152167 = (i__152162 + (1));
i__152162 = G__152167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__152163),kanban$components$sortable_list$iter__152160.call(null,cljs.core.chunk_rest.call(null,s__152161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__152163),null);
}
} else {
var item = cljs.core.first.call(null,s__152161__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152133_SHARP_,p2__152134_SHARP_){
return this$.drag_start(p1__152133_SHARP_,p2__152134_SHARP_);
});})(item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152135_SHARP_,p2__152136_SHARP_){
return this$.drag_end(p1__152135_SHARP_,p2__152136_SHARP_);
});})(item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152137_SHARP_,p2__152138_SHARP_){
return this$.drag_over_item(p1__152137_SHARP_,p2__152138_SHARP_);
});})(item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152139_SHARP_,p2__152140_SHARP_){
return this$.drag(p1__152139_SHARP_,p2__152140_SHARP_);
});})(item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166){
return (function (p1__152141_SHARP_){
return this$.drag_drop(p1__152141_SHARP_);
});})(item,s__152161__$2,temp__4425__auto__,items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
], null)], null))),kanban$components$sortable_list$iter__152160.call(null,cljs.core.rest.call(null,s__152161__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
,null,null));
});})(items,map__152156,map__152156__$1,key_fn,element_fn,map__152157,map__152157__$1,dragging,drag_key,_STAR_reconciler_STAR_152151,_STAR_depth_STAR_152152,_STAR_shared_STAR_152153,_STAR_instrument_STAR_152154,_STAR_parent_STAR_152155,this$,x152146_152166))
;
return iter__5866__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_152155;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_152154;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_152153;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_152152;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_152151;
}});})(x152146_152166))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x152164_152168 = kanban.components.sortable_list.SortableList;


var x152165_152169 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map