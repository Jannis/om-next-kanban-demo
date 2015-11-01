// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
/**
 * @constructor
 */
kanban.components.sortable_list.SortableItem = (function kanban$components$sortable_list$SortableItem(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.sortable_list.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x8347_8363 = kanban.components.sortable_list.SortableItem.prototype;
x8347_8363.componentWillUpdate = ((function (x8347_8363){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8347_8363))
;

x8347_8363.shouldComponentUpdate = ((function (x8347_8363){
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
});})(x8347_8363))
;

x8347_8363.componentWillUnmount = ((function (x8347_8363){
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
});})(x8347_8363))
;

x8347_8363.componentDidUpdate = ((function (x8347_8363){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8347_8363))
;

x8347_8363.isMounted = ((function (x8347_8363){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8347_8363))
;

x8347_8363.componentWillMount = ((function (x8347_8363){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8347_8363))
;

x8347_8363.get_item = ((function (x8347_8363){
return (function (){
var this$ = this;
return cljs.core.select_keys.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"element","element",1974019749)], null));
});})(x8347_8363))
;

x8347_8363.drag_start = ((function (x8347_8363){
return (function (e){
var this$ = this;
var map__8348 = om.next.props.call(null,this$);
var map__8348__$1 = ((((!((map__8348 == null)))?((((map__8348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8348):map__8348);
var key = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var data = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var element = cljs.core.get.call(null,map__8348__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var map__8349 = om.next.get_computed.call(null,this$);
var map__8349__$1 = ((((!((map__8349 == null)))?((((map__8349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8349):map__8349);
var drag_fns = cljs.core.get.call(null,map__8349__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
e.dataTransfer.effectAllowed = "move";

e.dataTransfer.setData("text/html",element);

return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,e,this$);
});})(x8347_8363))
;

x8347_8363.render = ((function (x8347_8363){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8352 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8353 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8354 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8355 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8356 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8357 = om.next.props.call(null,this$);
var map__8357__$1 = ((((!((map__8357 == null)))?((((map__8357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8357):map__8357);
var key = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var data = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var element = cljs.core.get.call(null,map__8357__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var map__8358 = om.next.get_computed.call(null,this$);
var map__8358__$1 = ((((!((map__8358 == null)))?((((map__8358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8358):map__8358);
var placeholder = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var drag_fns = cljs.core.get.call(null,map__8358__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable-item","sortable-item",-15504423),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)), "draggable": true, "onDragStart": ((function (map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363){
return (function (p1__8339_SHARP_){
return this$.drag_start(p1__8339_SHARP_);
});})(map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363))
, "onDragEnd": ((function (map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363){
return (function (p1__8340_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__8340_SHARP_,this$);
});})(map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363))
, "onDragOver": ((function (map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363){
return (function (p1__8341_SHARP_){
return new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__8341_SHARP_,this$);
});})(map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363))
, "onDrop": ((function (map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363){
return (function (p1__8342_SHARP_){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__8342_SHARP_,this$);
});})(map__8357,map__8357__$1,key,data,element,map__8358,map__8358__$1,placeholder,drag_fns,_STAR_reconciler_STAR_8352,_STAR_depth_STAR_8353,_STAR_shared_STAR_8354,_STAR_instrument_STAR_8355,_STAR_parent_STAR_8356,this$,x8347_8363))
},element);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8356;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8355;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8354;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8353;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8352;
}});})(x8347_8363))
;


kanban.components.sortable_list.SortableItem.prototype.constructor = kanban.components.sortable_list.SortableItem;

kanban.components.sortable_list.SortableItem.prototype.om$isComponent = true;

var x8361_8364 = kanban.components.sortable_list.SortableItem;


var x8362_8365 = kanban.components.sortable_list.SortableItem.prototype;


kanban.components.sortable_list.SortableItem.cljs$lang$type = true;

kanban.components.sortable_list.SortableItem.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableItem";

kanban.components.sortable_list.SortableItem.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableItem");
});
kanban.components.sortable_list.sortable_item = om.next.factory.call(null,kanban.components.sortable_list.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
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

var x8379_8400 = kanban.components.sortable_list.SortableList.prototype;
x8379_8400.componentWillUpdate = ((function (x8379_8400){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8379_8400))
;

x8379_8400.shouldComponentUpdate = ((function (x8379_8400){
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
});})(x8379_8400))
;

x8379_8400.componentWillUnmount = ((function (x8379_8400){
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
});})(x8379_8400))
;

x8379_8400.componentDidUpdate = ((function (x8379_8400){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8379_8400))
;

x8379_8400.isMounted = ((function (x8379_8400){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8379_8400))
;

x8379_8400.componentWillMount = ((function (x8379_8400){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8379_8400))
;

x8379_8400.drag_start = ((function (x8379_8400){
return (function (e,item){
var this$ = this;
var node = om.dom.node.call(null,item);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047),item);
});})(x8379_8400))
;

x8379_8400.drag_end = ((function (x8379_8400){
return (function (e,item){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047));
});})(x8379_8400))
;

x8379_8400.drag_over_item = ((function (x8379_8400){
return (function (e,target_item){
var this$ = this;
var drag_item = new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
e.dataTransfer.dropEffect = "move";

e.preventDefault();

if(cljs.core._EQ_.call(null,drag_item,target_item)){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var node = om.dom.node.call(null,target_item);
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
var items_without_drag = cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([drag_item.get_item()], true),items);
var index = (function (){var G__8380 = kanban.util.index_of.call(null,target_item.get_item(),items_without_drag);
var G__8380__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"before","before",-1633692388)))?cljs.core.identity.call(null,G__8380):G__8380);
var G__8380__$2 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__8380__$1 + (1)):G__8380__$1);
return G__8380__$2;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,drag_item,this$,x8379_8400){
return (function (p1__8366_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__8366_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item.get_item()], null),cljs.core.second.call(null,p1__8366_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,drag_item,this$,x8379_8400))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x8379_8400))
;

x8379_8400.drag_drop = ((function (x8379_8400){
return (function (e,target_item){
var this$ = this;
var map__8381 = om.next.props.call(null,this$);
var map__8381__$1 = ((((!((map__8381 == null)))?((((map__8381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);
var update_fn = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938))));
});})(x8379_8400))
;

x8379_8400.render = ((function (x8379_8400){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8383 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8384 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8385 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8386 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8387 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__8388 = om.next.get_state.call(null,this$);
var map__8388__$1 = ((((!((map__8388 == null)))?((((map__8388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8388):map__8388);
var drag_item = cljs.core.get.call(null,map__8388__$1,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047));
return React.DOM.ul({"className": "sortable-list"},(function (){var iter__5866__auto__ = ((function (items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function kanban$components$sortable_list$iter__8390(s__8391){
return (new cljs.core.LazySeq(null,((function (items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (){
var s__8391__$1 = s__8391;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8391__$1);
if(temp__4425__auto__){
var s__8391__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8391__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8391__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8393 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8392 = (0);
while(true){
if((i__8392 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__8392);
cljs.core.chunk_append.call(null,b__8393,kanban.components.sortable_list.sortable_item.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,item,(function (){var G__8396 = drag_item;
var G__8396__$1 = (((G__8396 == null))?null:G__8396.get_item());
return G__8396__$1;
})()),new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8367_SHARP_,p2__8368_SHARP_){
return this$.drag_start(p1__8367_SHARP_,p2__8368_SHARP_);
});})(i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8369_SHARP_,p2__8370_SHARP_){
return this$.drag_end(p1__8369_SHARP_,p2__8370_SHARP_);
});})(i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8371_SHARP_,p2__8372_SHARP_){
return this$.drag_over_item(p1__8371_SHARP_,p2__8372_SHARP_);
});})(i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8373_SHARP_,p2__8374_SHARP_){
return this$.drag_drop(p1__8373_SHARP_,p2__8374_SHARP_);
});})(i__8392,item,c__5864__auto__,size__5865__auto__,b__8393,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
], null)], null))));

var G__8401 = (i__8392 + (1));
i__8392 = G__8401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),kanban$components$sortable_list$iter__8390.call(null,cljs.core.chunk_rest.call(null,s__8391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8393),null);
}
} else {
var item = cljs.core.first.call(null,s__8391__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable_item.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,item,(function (){var G__8397 = drag_item;
var G__8397__$1 = (((G__8397 == null))?null:G__8397.get_item());
return G__8397__$1;
})()),new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8367_SHARP_,p2__8368_SHARP_){
return this$.drag_start(p1__8367_SHARP_,p2__8368_SHARP_);
});})(item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8369_SHARP_,p2__8370_SHARP_){
return this$.drag_end(p1__8369_SHARP_,p2__8370_SHARP_);
});})(item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8371_SHARP_,p2__8372_SHARP_){
return this$.drag_over_item(p1__8371_SHARP_,p2__8372_SHARP_);
});})(item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400){
return (function (p1__8373_SHARP_,p2__8374_SHARP_){
return this$.drag_drop(p1__8373_SHARP_,p2__8374_SHARP_);
});})(item,s__8391__$2,temp__4425__auto__,items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
], null)], null))),kanban$components$sortable_list$iter__8390.call(null,cljs.core.rest.call(null,s__8391__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
,null,null));
});})(items,map__8388,map__8388__$1,drag_item,_STAR_reconciler_STAR_8383,_STAR_depth_STAR_8384,_STAR_shared_STAR_8385,_STAR_instrument_STAR_8386,_STAR_parent_STAR_8387,this$,x8379_8400))
;
return iter__5866__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8387;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8386;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8385;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8384;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8383;
}});})(x8379_8400))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x8398_8402 = kanban.components.sortable_list.SortableList;


var x8399_8403 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map