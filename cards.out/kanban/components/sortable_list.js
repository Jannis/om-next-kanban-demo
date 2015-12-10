// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__28352 = x;
var G__28352__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__28352):G__28352);
return G__28352__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"converted","converted",1590204425).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__28355 = x;
var G__28355__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__28355):G__28355);
return G__28355__$1;
})();
var G__28356 = props;
var G__28356__$1 = (((G__28356 == null))?null:om.next.get_computed.call(null,G__28356));
var G__28356__$2 = (((G__28356__$1 == null))?null:new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(G__28356__$1));
var G__28356__$3 = (((G__28356__$2 == null))?null:cljs.core.apply.call(null,G__28356__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value.call(null,x)], null)));
return G__28356__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__8349__auto__ = this;
React.Component.apply(this__8349__auto__,arguments);

if(!((this__8349__auto__.initLocalState == null))){
this__8349__auto__.state = this__8349__auto__.initLocalState();
} else {
this__8349__auto__.state = {};
}

return this__8349__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x28366_28381 = kanban.components.sortable_list.Sortable.prototype;
x28366_28381.componentWillUpdate = ((function (x28366_28381){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8289__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8289__auto__);
});})(x28366_28381))
;

x28366_28381.shouldComponentUpdate = ((function (x28366_28381){
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
});})(x28366_28381))
;

x28366_28381.componentWillUnmount = ((function (x28366_28381){
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
});})(x28366_28381))
;

x28366_28381.componentDidUpdate = ((function (x28366_28381){
return (function (prev_props__8292__auto__,prev_state__8293__auto__){
var this__8289__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8289__auto__);
});})(x28366_28381))
;

x28366_28381.isMounted = ((function (x28366_28381){
return (function (){
var this__8289__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8289__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28366_28381))
;

x28366_28381.componentWillMount = ((function (x28366_28381){
return (function (){
var this__8289__auto__ = this;
var indexer__8294__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8289__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28366_28381))
;

x28366_28381.render = ((function (x28366_28381){
return (function (){
var this__8288__auto__ = this;
var this$ = this__8288__auto__;
var _STAR_reconciler_STAR_28367 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28368 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28369 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28370 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28371 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8288__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8288__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8288__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8288__auto__);

om.next._STAR_parent_STAR_ = this__8288__auto__;

try{var map__28372 = om.next.get_computed.call(null,this$);
var map__28372__$1 = ((((!((map__28372 == null)))?((((map__28372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);
var dragging = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var element_fn = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),dragging], null)), "draggable": true, "onDragStart": ((function (map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381){
return (function (p1__28357_SHARP_){
var G__28374 = drag_fns;
var G__28374__$1 = (((G__28374 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__28374));
var G__28374__$2 = (((G__28374__$1 == null))?null:cljs.core.apply.call(null,G__28374__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28357_SHARP_,this$], null)));
return G__28374__$2;
});})(map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381))
, "onDragEnd": ((function (map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381){
return (function (p1__28358_SHARP_){
var G__28375 = drag_fns;
var G__28375__$1 = (((G__28375 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__28375));
var G__28375__$2 = (((G__28375__$1 == null))?null:cljs.core.apply.call(null,G__28375__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28358_SHARP_,this$], null)));
return G__28375__$2;
});})(map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381))
, "onDragOver": ((function (map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381){
return (function (p1__28359_SHARP_){
var G__28376 = drag_fns;
var G__28376__$1 = (((G__28376 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__28376));
var G__28376__$2 = (((G__28376__$1 == null))?null:cljs.core.apply.call(null,G__28376__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28359_SHARP_,this$], null)));
return G__28376__$2;
});})(map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381))
, "onDrag": ((function (map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381){
return (function (p1__28360_SHARP_){
var G__28377 = drag_fns;
var G__28377__$1 = (((G__28377 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__28377));
var G__28377__$2 = (((G__28377__$1 == null))?null:cljs.core.apply.call(null,G__28377__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28360_SHARP_,this$], null)));
return G__28377__$2;
});})(map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381))
, "onDrop": ((function (map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381){
return (function (p1__28361_SHARP_){
var G__28378 = drag_fns;
var G__28378__$1 = (((G__28378 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__28378));
var G__28378__$2 = (((G__28378__$1 == null))?null:cljs.core.apply.call(null,G__28378__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28361_SHARP_,this$], null)));
return G__28378__$2;
});})(map__28372,map__28372__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_28367,_STAR_depth_STAR_28368,_STAR_shared_STAR_28369,_STAR_instrument_STAR_28370,_STAR_parent_STAR_28371,this$,this__8288__auto__,x28366_28381))
},om.util.force_children.call(null,(cljs.core.truth_(element_fn)?element_fn.call(null,kanban.components.sortable_list.sortable_value.call(null,this$)):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28371;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28370;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28369;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28368;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28367;
}});})(x28366_28381))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x28379_28382 = kanban.components.sortable_list.Sortable;


var x28380_28383 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__8351__auto__,writer__8352__auto__,opt__8353__auto__){
return cljs.core._write.call(null,writer__8352__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.call(null,kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__8349__auto__ = this;
React.Component.apply(this__8349__auto__,arguments);

if(!((this__8349__auto__.initLocalState == null))){
this__8349__auto__.state = this__8349__auto__.initLocalState();
} else {
this__8349__auto__.state = {};
}

return this__8349__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x28402_28422 = kanban.components.sortable_list.SortableList.prototype;
x28402_28422.componentWillUpdate = ((function (x28402_28422){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8289__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8289__auto__);
});})(x28402_28422))
;

x28402_28422.shouldComponentUpdate = ((function (x28402_28422){
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
});})(x28402_28422))
;

x28402_28422.componentWillUnmount = ((function (x28402_28422){
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
});})(x28402_28422))
;

x28402_28422.componentDidUpdate = ((function (x28402_28422){
return (function (prev_props__8292__auto__,prev_state__8293__auto__){
var this__8289__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8289__auto__);
});})(x28402_28422))
;

x28402_28422.isMounted = ((function (x28402_28422){
return (function (){
var this__8289__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8289__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28402_28422))
;

x28402_28422.componentWillMount = ((function (x28402_28422){
return (function (){
var this__8289__auto__ = this;
var indexer__8294__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8289__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28402_28422))
;

x28402_28422.item_for_key = ((function (x28402_28422){
return (function (key){
var this$ = this;
var map__28403 = om.next.props.call(null,this$);
var map__28403__$1 = ((((!((map__28403 == null)))?((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var items = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28403,map__28403__$1,items,key_fn,this$,x28402_28422){
return (function (p1__28384_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__28384_SHARP_));
});})(map__28403,map__28403__$1,items,key_fn,this$,x28402_28422))
,items));
});})(x28402_28422))
;

x28402_28422.drag_start = ((function (x28402_28422){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x28402_28422))
;

x28402_28422.drag_end = ((function (x28402_28422){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x28402_28422){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x28402_28422))
);
});})(x28402_28422))
;

x28402_28422.drag_over = ((function (x28402_28422){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x28402_28422))
;

x28402_28422.drag = ((function (x28402_28422){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x28402_28422))
;

x28402_28422.drag_over_item = ((function (x28402_28422){
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
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x28402_28422){
return (function (p1__28385_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__28385_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x28402_28422))
,items);
var index = (function (){var G__28405 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__28405__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__28405 + (1)):G__28405);
return G__28405__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x28402_28422){
return (function (p1__28386_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__28386_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__28386_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x28402_28422))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x28402_28422))
;

x28402_28422.drag_drop = ((function (x28402_28422){
return (function (e){
var this$ = this;
var G__28406 = this$;
var G__28406__$1 = (((G__28406 == null))?null:om.next.props.call(null,G__28406));
var G__28406__$2 = (((G__28406__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__28406__$1));
var G__28406__$3 = (((G__28406__$2 == null))?null:cljs.core.apply.call(null,G__28406__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))], null)));
return G__28406__$3;
});})(x28402_28422))
;

x28402_28422.render = ((function (x28402_28422){
return (function (){
var this__8288__auto__ = this;
var this$ = this__8288__auto__;
var _STAR_reconciler_STAR_28407 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28408 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28409 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28410 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28411 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8288__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8288__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8288__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8288__auto__);

om.next._STAR_parent_STAR_ = this__8288__auto__;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__28412 = om.next.props.call(null,this$);
var map__28412__$1 = ((((!((map__28412 == null)))?((((map__28412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28412):map__28412);
var direction = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var key_fn = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__28412__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__28413 = om.next.get_state.call(null,this$);
var map__28413__$1 = ((((!((map__28413 == null)))?((((map__28413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28413):map__28413);
var dragging = cljs.core.get.call(null,map__28413__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_key = cljs.core.get.call(null,map__28413__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable-list","sortable-list",-233142892),true,new cljs.core.Keyword(null,"sortable-list-vertical","sortable-list-vertical",1967461537),cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"vertical","vertical",718696748))], null)), "onDragOver": ((function (items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28387_SHARP_){
return this$.drag_over(p1__28387_SHARP_);
});})(items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
, "onDrop": ((function (items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28388_SHARP_){
return this$.drag_drop(p1__28388_SHARP_);
});})(items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
},om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function kanban$components$sortable_list$iter__28416(s__28417){
return (new cljs.core.LazySeq(null,((function (items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (){
var s__28417__$1 = s__28417;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28417__$1);
if(temp__4425__auto__){
var s__28417__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28417__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__28417__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__28419 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__28418 = (0);
while(true){
if((i__28418 < size__5757__auto__)){
var item = cljs.core._nth.call(null,c__5756__auto__,i__28418);
cljs.core.chunk_append.call(null,b__28419,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__4974__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28389_SHARP_,p2__28390_SHARP_){
return this$.drag_start(p1__28389_SHARP_,p2__28390_SHARP_);
});})(i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28391_SHARP_,p2__28392_SHARP_){
return this$.drag_end(p1__28391_SHARP_,p2__28392_SHARP_);
});})(i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28393_SHARP_,p2__28394_SHARP_){
return this$.drag_over_item(p1__28393_SHARP_,p2__28394_SHARP_);
});})(i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28395_SHARP_,p2__28396_SHARP_){
return this$.drag(p1__28395_SHARP_,p2__28396_SHARP_);
});})(i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28397_SHARP_){
return this$.drag_drop(p1__28397_SHARP_);
});})(i__28418,item,c__5756__auto__,size__5757__auto__,b__28419,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
], null)], null))));

var G__28423 = (i__28418 + (1));
i__28418 = G__28423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28419),kanban$components$sortable_list$iter__28416.call(null,cljs.core.chunk_rest.call(null,s__28417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28419),null);
}
} else {
var item = cljs.core.first.call(null,s__28417__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,((!(cljs.core.map_QMARK_.call(null,item)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null):item),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"converted","converted",1590204425),!(cljs.core.map_QMARK_.call(null,item)),new cljs.core.Keyword(null,"dragging","dragging",1185097613),(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item));
} else {
return and__4974__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28389_SHARP_,p2__28390_SHARP_){
return this$.drag_start(p1__28389_SHARP_,p2__28390_SHARP_);
});})(item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28391_SHARP_,p2__28392_SHARP_){
return this$.drag_end(p1__28391_SHARP_,p2__28392_SHARP_);
});})(item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28393_SHARP_,p2__28394_SHARP_){
return this$.drag_over_item(p1__28393_SHARP_,p2__28394_SHARP_);
});})(item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28395_SHARP_,p2__28396_SHARP_){
return this$.drag(p1__28395_SHARP_,p2__28396_SHARP_);
});})(item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422){
return (function (p1__28397_SHARP_){
return this$.drag_drop(p1__28397_SHARP_);
});})(item,s__28417__$2,temp__4425__auto__,items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
], null)], null))),kanban$components$sortable_list$iter__28416.call(null,cljs.core.rest.call(null,s__28417__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
,null,null));
});})(items,map__28412,map__28412__$1,direction,key_fn,element_fn,map__28413,map__28413__$1,dragging,drag_key,_STAR_reconciler_STAR_28407,_STAR_depth_STAR_28408,_STAR_shared_STAR_28409,_STAR_instrument_STAR_28410,_STAR_parent_STAR_28411,this$,this__8288__auto__,x28402_28422))
;
return iter__5758__auto__.call(null,items);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28411;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28410;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28409;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28408;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28407;
}});})(x28402_28422))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x28420_28424 = kanban.components.sortable_list.SortableList;


var x28421_28425 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__8351__auto__,writer__8352__auto__,opt__8353__auto__){
return cljs.core._write.call(null,writer__8352__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map