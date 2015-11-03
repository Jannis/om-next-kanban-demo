// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__83359 = x;
var G__83359__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__83359):G__83359);
return G__83359__$1;
})();
return new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)).call(null,props);
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

var x83368_83378 = kanban.components.sortable_list.Sortable.prototype;
x83368_83378.componentWillUpdate = ((function (x83368_83378){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x83368_83378))
;

x83368_83378.shouldComponentUpdate = ((function (x83368_83378){
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
});})(x83368_83378))
;

x83368_83378.componentWillUnmount = ((function (x83368_83378){
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
});})(x83368_83378))
;

x83368_83378.componentDidUpdate = ((function (x83368_83378){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x83368_83378))
;

x83368_83378.isMounted = ((function (x83368_83378){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x83368_83378))
;

x83368_83378.componentWillMount = ((function (x83368_83378){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x83368_83378))
;

x83368_83378.render = ((function (x83368_83378){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_83369 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_83370 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_83371 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_83372 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_83373 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__83374 = om.next.get_computed.call(null,this$);
var map__83374__$1 = ((((!((map__83374 == null)))?((((map__83374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83374):map__83374);
var placeholder = cljs.core.get.call(null,map__83374__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var element_fn = cljs.core.get.call(null,map__83374__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__83374__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)), "draggable": true, "onDragStart": ((function (map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378){
return (function (p1__83360_SHARP_){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__83360_SHARP_,this$);
});})(map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378))
, "onDragEnd": ((function (map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378){
return (function (p1__83361_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__83361_SHARP_,this$);
});})(map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378))
, "onDragOver": ((function (map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378){
return (function (p1__83362_SHARP_){
return new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__83362_SHARP_,this$);
});})(map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378))
, "onDrop": ((function (map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378){
return (function (p1__83363_SHARP_){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__83363_SHARP_,this$);
});})(map__83374,map__83374__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_83369,_STAR_depth_STAR_83370,_STAR_shared_STAR_83371,_STAR_instrument_STAR_83372,_STAR_parent_STAR_83373,this$,x83368_83378))
},element_fn.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_83373;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_83372;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_83371;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_83370;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_83369;
}});})(x83368_83378))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x83376_83379 = kanban.components.sortable_list.Sortable;


var x83377_83380 = kanban.components.sortable_list.Sortable.prototype;


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

var x83397_83418 = kanban.components.sortable_list.SortableList.prototype;
x83397_83418.componentWillUpdate = ((function (x83397_83418){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x83397_83418))
;

x83397_83418.shouldComponentUpdate = ((function (x83397_83418){
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
});})(x83397_83418))
;

x83397_83418.componentWillUnmount = ((function (x83397_83418){
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
});})(x83397_83418))
;

x83397_83418.componentDidUpdate = ((function (x83397_83418){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x83397_83418))
;

x83397_83418.isMounted = ((function (x83397_83418){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x83397_83418))
;

x83397_83418.componentWillMount = ((function (x83397_83418){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x83397_83418))
;

x83397_83418.item_for_key = ((function (x83397_83418){
return (function (key){
var this$ = this;
var map__83398 = om.next.props.call(null,this$);
var map__83398__$1 = ((((!((map__83398 == null)))?((((map__83398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83398):map__83398);
var items = cljs.core.get.call(null,map__83398__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__83398__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__83398,map__83398__$1,items,key_fn,this$,x83397_83418){
return (function (p1__83381_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__83381_SHARP_));
});})(map__83398,map__83398__$1,items,key_fn,this$,x83397_83418))
,items));
});})(x83397_83418))
;

x83397_83418.drag_start = ((function (x83397_83418){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x83397_83418))
;

x83397_83418.drag_end = ((function (x83397_83418){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
});})(x83397_83418))
;

x83397_83418.drag_over = ((function (x83397_83418){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x83397_83418))
;

x83397_83418.drag_over_item = ((function (x83397_83418){
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
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x83397_83418){
return (function (p1__83382_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__83382_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x83397_83418))
,items);
var index = (function (){var G__83400 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__83400__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__83400 + (1)):G__83400);
return G__83400__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x83397_83418){
return (function (p1__83383_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__83383_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__83383_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x83397_83418))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x83397_83418))
;

x83397_83418.drag_drop = ((function (x83397_83418){
return (function (e){
var this$ = this;
var map__83401 = om.next.props.call(null,this$);
var map__83401__$1 = ((((!((map__83401 == null)))?((((map__83401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83401):map__83401);
var change_fn = cljs.core.get.call(null,map__83401__$1,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825));
return change_fn.call(null,om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938)));
});})(x83397_83418))
;

x83397_83418.render = ((function (x83397_83418){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_83403 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_83404 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_83405 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_83406 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_83407 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__83408 = om.next.props.call(null,this$);
var map__83408__$1 = ((((!((map__83408 == null)))?((((map__83408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83408):map__83408);
var key_fn = cljs.core.get.call(null,map__83408__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__83408__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__83409 = om.next.get_state.call(null,this$);
var map__83409__$1 = ((((!((map__83409 == null)))?((((map__83409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83409):map__83409);
var drag_key = cljs.core.get.call(null,map__83409__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": "sortable-list", "onDragOver": ((function (items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83384_SHARP_){
return this$.drag_over(p1__83384_SHARP_);
});})(items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
, "onDrop": ((function (items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83385_SHARP_){
return this$.drag_drop(p1__83385_SHARP_);
});})(items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
},(function (){var iter__5866__auto__ = ((function (items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function kanban$components$sortable_list$iter__83412(s__83413){
return (new cljs.core.LazySeq(null,((function (items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (){
var s__83413__$1 = s__83413;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__83413__$1);
if(temp__4425__auto__){
var s__83413__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83413__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__83413__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__83415 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__83414 = (0);
while(true){
if((i__83414 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__83414);
cljs.core.chunk_append.call(null,b__83415,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83386_SHARP_,p2__83387_SHARP_){
return this$.drag_start(p1__83386_SHARP_,p2__83387_SHARP_);
});})(i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83388_SHARP_,p2__83389_SHARP_){
return this$.drag_end(p1__83388_SHARP_,p2__83389_SHARP_);
});})(i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83390_SHARP_,p2__83391_SHARP_){
return this$.drag_over_item(p1__83390_SHARP_,p2__83391_SHARP_);
});})(i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83392_SHARP_){
return this$.drag_drop(p1__83392_SHARP_);
});})(i__83414,item,c__5864__auto__,size__5865__auto__,b__83415,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
], null)], null))));

var G__83419 = (i__83414 + (1));
i__83414 = G__83419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83415),kanban$components$sortable_list$iter__83412.call(null,cljs.core.chunk_rest.call(null,s__83413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83415),null);
}
} else {
var item = cljs.core.first.call(null,s__83413__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83386_SHARP_,p2__83387_SHARP_){
return this$.drag_start(p1__83386_SHARP_,p2__83387_SHARP_);
});})(item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83388_SHARP_,p2__83389_SHARP_){
return this$.drag_end(p1__83388_SHARP_,p2__83389_SHARP_);
});})(item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83390_SHARP_,p2__83391_SHARP_){
return this$.drag_over_item(p1__83390_SHARP_,p2__83391_SHARP_);
});})(item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418){
return (function (p1__83392_SHARP_){
return this$.drag_drop(p1__83392_SHARP_);
});})(item,s__83413__$2,temp__4425__auto__,items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
], null)], null))),kanban$components$sortable_list$iter__83412.call(null,cljs.core.rest.call(null,s__83413__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
,null,null));
});})(items,map__83408,map__83408__$1,key_fn,element_fn,map__83409,map__83409__$1,drag_key,_STAR_reconciler_STAR_83403,_STAR_depth_STAR_83404,_STAR_shared_STAR_83405,_STAR_instrument_STAR_83406,_STAR_parent_STAR_83407,this$,x83397_83418))
;
return iter__5866__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_83407;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_83406;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_83405;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_83404;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_83403;
}});})(x83397_83418))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x83416_83420 = kanban.components.sortable_list.SortableList;


var x83417_83421 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map