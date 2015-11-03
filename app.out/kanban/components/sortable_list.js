// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__152421 = x;
var G__152421__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__152421):G__152421);
return G__152421__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__152424 = x;
var G__152424__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__152424):G__152424);
return G__152424__$1;
})();
var G__152425 = props;
var G__152425__$1 = (((G__152425 == null))?null:om.next.get_computed.call(null,G__152425));
var G__152425__$2 = (((G__152425__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__152425__$1));
var G__152425__$3 = (((G__152425__$2 == null))?null:cljs.core.apply.call(null,G__152425__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__152425__$3;
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

var x152435_152450 = kanban.components.sortable_list.Sortable.prototype;
x152435_152450.componentWillUpdate = ((function (x152435_152450){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x152435_152450))
;

x152435_152450.shouldComponentUpdate = ((function (x152435_152450){
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
});})(x152435_152450))
;

x152435_152450.componentWillUnmount = ((function (x152435_152450){
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
});})(x152435_152450))
;

x152435_152450.componentDidUpdate = ((function (x152435_152450){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x152435_152450))
;

x152435_152450.isMounted = ((function (x152435_152450){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x152435_152450))
;

x152435_152450.componentWillMount = ((function (x152435_152450){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x152435_152450))
;

x152435_152450.render = ((function (x152435_152450){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_152436 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_152437 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_152438 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_152439 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_152440 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__152441 = om.next.get_computed.call(null,this$);
var map__152441__$1 = ((((!((map__152441 == null)))?((((map__152441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152441):map__152441);
var dragging = cljs.core.get.call(null,map__152441__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__152441__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__152441__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450){
return (function (p1__152426_SHARP_){
var G__152443 = drag_fns;
var G__152443__$1 = (((G__152443 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__152443));
var G__152443__$2 = (((G__152443__$1 == null))?null:cljs.core.apply.call(null,G__152443__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152426_SHARP_,this$], null)));
return G__152443__$2;
});})(map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450))
, "onDragEnd": ((function (map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450){
return (function (p1__152427_SHARP_){
var G__152444 = drag_fns;
var G__152444__$1 = (((G__152444 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__152444));
var G__152444__$2 = (((G__152444__$1 == null))?null:cljs.core.apply.call(null,G__152444__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152427_SHARP_,this$], null)));
return G__152444__$2;
});})(map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450))
, "onDragOver": ((function (map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450){
return (function (p1__152428_SHARP_){
var G__152445 = drag_fns;
var G__152445__$1 = (((G__152445 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__152445));
var G__152445__$2 = (((G__152445__$1 == null))?null:cljs.core.apply.call(null,G__152445__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152428_SHARP_,this$], null)));
return G__152445__$2;
});})(map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450))
, "onDrag": ((function (map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450){
return (function (p1__152429_SHARP_){
var G__152446 = drag_fns;
var G__152446__$1 = (((G__152446 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__152446));
var G__152446__$2 = (((G__152446__$1 == null))?null:cljs.core.apply.call(null,G__152446__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152429_SHARP_,this$], null)));
return G__152446__$2;
});})(map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450))
, "onDrop": ((function (map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450){
return (function (p1__152430_SHARP_){
var G__152447 = drag_fns;
var G__152447__$1 = (((G__152447 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__152447));
var G__152447__$2 = (((G__152447__$1 == null))?null:cljs.core.apply.call(null,G__152447__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__152430_SHARP_,this$], null)));
return G__152447__$2;
});})(map__152441,map__152441__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_152436,_STAR_depth_STAR_152437,_STAR_shared_STAR_152438,_STAR_instrument_STAR_152439,_STAR_parent_STAR_152440,this$,x152435_152450))
},(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_152440;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_152439;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_152438;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_152437;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_152436;
}});})(x152435_152450))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x152448_152451 = kanban.components.sortable_list.Sortable;


var x152449_152452 = kanban.components.sortable_list.Sortable.prototype;


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

var x152471_152491 = kanban.components.sortable_list.SortableList.prototype;
x152471_152491.componentWillUpdate = ((function (x152471_152491){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x152471_152491))
;

x152471_152491.shouldComponentUpdate = ((function (x152471_152491){
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
});})(x152471_152491))
;

x152471_152491.componentWillUnmount = ((function (x152471_152491){
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
});})(x152471_152491))
;

x152471_152491.componentDidUpdate = ((function (x152471_152491){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x152471_152491))
;

x152471_152491.isMounted = ((function (x152471_152491){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x152471_152491))
;

x152471_152491.componentWillMount = ((function (x152471_152491){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x152471_152491))
;

x152471_152491.item_for_key = ((function (x152471_152491){
return (function (key){
var this$ = this;
var map__152472 = om.next.props.call(null,this$);
var map__152472__$1 = ((((!((map__152472 == null)))?((((map__152472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152472):map__152472);
var items = cljs.core.get.call(null,map__152472__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__152472__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__152472,map__152472__$1,items,key_fn,this$,x152471_152491){
return (function (p1__152453_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__152453_SHARP_));
});})(map__152472,map__152472__$1,items,key_fn,this$,x152471_152491))
,items));
});})(x152471_152491))
;

x152471_152491.drag_start = ((function (x152471_152491){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x152471_152491))
;

x152471_152491.drag_end = ((function (x152471_152491){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x152471_152491){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x152471_152491))
);
});})(x152471_152491))
;

x152471_152491.drag_over = ((function (x152471_152491){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x152471_152491))
;

x152471_152491.drag = ((function (x152471_152491){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x152471_152491))
;

x152471_152491.drag_over_item = ((function (x152471_152491){
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
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x152471_152491){
return (function (p1__152454_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__152454_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x152471_152491))
,items);
var index = (function (){var G__152474 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__152474__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__152474 + (1)):G__152474);
return G__152474__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x152471_152491){
return (function (p1__152455_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__152455_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__152455_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x152471_152491))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x152471_152491))
;

x152471_152491.drag_drop = ((function (x152471_152491){
return (function (e){
var this$ = this;
var G__152475 = this$;
var G__152475__$1 = (((G__152475 == null))?null:om.next.props.call(null,G__152475));
var G__152475__$2 = (((G__152475__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__152475__$1));
var G__152475__$3 = (((G__152475__$2 == null))?null:cljs.core.apply.call(null,G__152475__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__152475__$3;
});})(x152471_152491))
;

x152471_152491.render = ((function (x152471_152491){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_152476 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_152477 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_152478 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_152479 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_152480 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__152481 = om.next.props.call(null,this$);
var map__152481__$1 = ((((!((map__152481 == null)))?((((map__152481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152481):map__152481);
var key_fn = cljs.core.get.call(null,map__152481__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__152481__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__152482 = om.next.get_state.call(null,this$);
var map__152482__$1 = ((((!((map__152482 == null)))?((((map__152482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152482):map__152482);
var dragging = cljs.core.get.call(null,map__152482__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__152482__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": "sortable-list", "onDragOver": ((function (items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152456_SHARP_){
return this$.drag_over(p1__152456_SHARP_);
});})(items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
, "onDrop": ((function (items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152457_SHARP_){
return this$.drag_drop(p1__152457_SHARP_);
});})(items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
},(function (){var iter__5866__auto__ = ((function (items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function kanban$components$sortable_list$iter__152485(s__152486){
return (new cljs.core.LazySeq(null,((function (items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (){
var s__152486__$1 = s__152486;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__152486__$1);
if(temp__4425__auto__){
var s__152486__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__152486__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__152486__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__152488 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__152487 = (0);
while(true){
if((i__152487 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__152487);
cljs.core.chunk_append.call(null,b__152488,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152458_SHARP_,p2__152459_SHARP_){
return this$.drag_start(p1__152458_SHARP_,p2__152459_SHARP_);
});})(i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152460_SHARP_,p2__152461_SHARP_){
return this$.drag_end(p1__152460_SHARP_,p2__152461_SHARP_);
});})(i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152462_SHARP_,p2__152463_SHARP_){
return this$.drag_over_item(p1__152462_SHARP_,p2__152463_SHARP_);
});})(i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152464_SHARP_,p2__152465_SHARP_){
return this$.drag(p1__152464_SHARP_,p2__152465_SHARP_);
});})(i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152466_SHARP_){
return this$.drag_drop(p1__152466_SHARP_);
});})(i__152487,item,c__5864__auto__,size__5865__auto__,b__152488,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
], null)], null))));

var G__152492 = (i__152487 + (1));
i__152487 = G__152492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__152488),kanban$components$sortable_list$iter__152485.call(null,cljs.core.chunk_rest.call(null,s__152486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__152488),null);
}
} else {
var item = cljs.core.first.call(null,s__152486__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152458_SHARP_,p2__152459_SHARP_){
return this$.drag_start(p1__152458_SHARP_,p2__152459_SHARP_);
});})(item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152460_SHARP_,p2__152461_SHARP_){
return this$.drag_end(p1__152460_SHARP_,p2__152461_SHARP_);
});})(item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152462_SHARP_,p2__152463_SHARP_){
return this$.drag_over_item(p1__152462_SHARP_,p2__152463_SHARP_);
});})(item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152464_SHARP_,p2__152465_SHARP_){
return this$.drag(p1__152464_SHARP_,p2__152465_SHARP_);
});})(item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491){
return (function (p1__152466_SHARP_){
return this$.drag_drop(p1__152466_SHARP_);
});})(item,s__152486__$2,temp__4425__auto__,items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
], null)], null))),kanban$components$sortable_list$iter__152485.call(null,cljs.core.rest.call(null,s__152486__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
,null,null));
});})(items,map__152481,map__152481__$1,key_fn,element_fn,map__152482,map__152482__$1,dragging,drag_key,_STAR_reconciler_STAR_152476,_STAR_depth_STAR_152477,_STAR_shared_STAR_152478,_STAR_instrument_STAR_152479,_STAR_parent_STAR_152480,this$,x152471_152491))
;
return iter__5866__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_152480;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_152479;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_152478;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_152477;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_152476;
}});})(x152471_152491))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x152489_152493 = kanban.components.sortable_list.SortableList;


var x152490_152494 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map