// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__22736 = x;
var G__22736__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__22736):G__22736);
return G__22736__$1;
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

var x22745_22755 = kanban.components.sortable_list.Sortable.prototype;
x22745_22755.componentWillUpdate = ((function (x22745_22755){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x22745_22755))
;

x22745_22755.shouldComponentUpdate = ((function (x22745_22755){
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
});})(x22745_22755))
;

x22745_22755.componentWillUnmount = ((function (x22745_22755){
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
});})(x22745_22755))
;

x22745_22755.componentDidUpdate = ((function (x22745_22755){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x22745_22755))
;

x22745_22755.isMounted = ((function (x22745_22755){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22745_22755))
;

x22745_22755.componentWillMount = ((function (x22745_22755){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x22745_22755))
;

x22745_22755.render = ((function (x22745_22755){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22746 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22747 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22748 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22749 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22750 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22751 = om.next.get_computed.call(null,this$);
var map__22751__$1 = ((((!((map__22751 == null)))?((((map__22751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22751):map__22751);
var placeholder = cljs.core.get.call(null,map__22751__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var element_fn = cljs.core.get.call(null,map__22751__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__22751__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.li({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)), "draggable": true, "onDragStart": ((function (map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755){
return (function (p1__22737_SHARP_){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__22737_SHARP_,this$);
});})(map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755))
, "onDragEnd": ((function (map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755){
return (function (p1__22738_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__22738_SHARP_,this$);
});})(map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755))
, "onDragOver": ((function (map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755){
return (function (p1__22739_SHARP_){
return new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__22739_SHARP_,this$);
});})(map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755))
, "onDrop": ((function (map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755){
return (function (p1__22740_SHARP_){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,p1__22740_SHARP_,this$);
});})(map__22751,map__22751__$1,placeholder,element_fn,drag_fns,_STAR_reconciler_STAR_22746,_STAR_depth_STAR_22747,_STAR_shared_STAR_22748,_STAR_instrument_STAR_22749,_STAR_parent_STAR_22750,this$,x22745_22755))
},element_fn.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22750;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22749;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22748;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22747;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22746;
}});})(x22745_22755))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x22753_22756 = kanban.components.sortable_list.Sortable;


var x22754_22757 = kanban.components.sortable_list.Sortable.prototype;


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

var x22774_22795 = kanban.components.sortable_list.SortableList.prototype;
x22774_22795.componentWillUpdate = ((function (x22774_22795){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x22774_22795))
;

x22774_22795.shouldComponentUpdate = ((function (x22774_22795){
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
});})(x22774_22795))
;

x22774_22795.componentWillUnmount = ((function (x22774_22795){
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
});})(x22774_22795))
;

x22774_22795.componentDidUpdate = ((function (x22774_22795){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x22774_22795))
;

x22774_22795.isMounted = ((function (x22774_22795){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22774_22795))
;

x22774_22795.componentWillMount = ((function (x22774_22795){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x22774_22795))
;

x22774_22795.item_for_key = ((function (x22774_22795){
return (function (key){
var this$ = this;
var map__22775 = om.next.props.call(null,this$);
var map__22775__$1 = ((((!((map__22775 == null)))?((((map__22775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775):map__22775);
var items = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var key_fn = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__22775,map__22775__$1,items,key_fn,this$,x22774_22795){
return (function (p1__22758_SHARP_){
return cljs.core._EQ_.call(null,key,key_fn.call(null,p1__22758_SHARP_));
});})(map__22775,map__22775__$1,items,key_fn,this$,x22774_22795))
,items));
});})(x22774_22795))
;

x22774_22795.drag_start = ((function (x22774_22795){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key.call(null,child);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949),key);
});})(x22774_22795))
;

x22774_22795.drag_end = ((function (x22774_22795){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
});})(x22774_22795))
;

x22774_22795.drag_over = ((function (x22774_22795){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x22774_22795))
;

x22774_22795.drag_over_item = ((function (x22774_22795){
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
var items_without_drag = cljs.core.remove.call(null,((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x22774_22795){
return (function (p1__22759_SHARP_){
return cljs.core._EQ_.call(null,drag_key,key_fn.call(null,p1__22759_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,this$,x22774_22795))
,items);
var index = (function (){var G__22777 = kanban.util.index_of.call(null,target_key,cljs.core.map.call(null,key_fn,items_without_drag));
var G__22777__$1 = ((cljs.core._EQ_.call(null,where,new cljs.core.Keyword(null,"after","after",594996914)))?(G__22777 + (1)):G__22777);
return G__22777__$1;
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x22774_22795){
return (function (p1__22760_SHARP_){
return cljs.core.concat.call(null,cljs.core.first.call(null,p1__22760_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.second.call(null,p1__22760_SHARP_));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,this$,x22774_22795))
.call(null,cljs.core.split_at.call(null,index,items_without_drag)));
}
});})(x22774_22795))
;

x22774_22795.drag_drop = ((function (x22774_22795){
return (function (e){
var this$ = this;
var map__22778 = om.next.props.call(null,this$);
var map__22778__$1 = ((((!((map__22778 == null)))?((((map__22778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);
var change_fn = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825));
return change_fn.call(null,om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"items","items",1031954938)));
});})(x22774_22795))
;

x22774_22795.render = ((function (x22774_22795){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22780 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22781 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22782 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22783 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22784 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$2(om.next.get_state.call(null,this$),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
var map__22785 = om.next.props.call(null,this$);
var map__22785__$1 = ((((!((map__22785 == null)))?((((map__22785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22785):map__22785);
var key_fn = cljs.core.get.call(null,map__22785__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__22785__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__22786 = om.next.get_state.call(null,this$);
var map__22786__$1 = ((((!((map__22786 == null)))?((((map__22786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22786):map__22786);
var drag_key = cljs.core.get.call(null,map__22786__$1,new cljs.core.Keyword(null,"drag-key","drag-key",-1423488949));
return React.DOM.ul({"className": "sortable-list", "onDragOver": ((function (items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22761_SHARP_){
return this$.drag_over(p1__22761_SHARP_);
});})(items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
, "onDrop": ((function (items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22762_SHARP_){
return this$.drag_drop(p1__22762_SHARP_);
});})(items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
},(function (){var iter__5866__auto__ = ((function (items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function kanban$components$sortable_list$iter__22789(s__22790){
return (new cljs.core.LazySeq(null,((function (items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (){
var s__22790__$1 = s__22790;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22790__$1);
if(temp__4425__auto__){
var s__22790__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22790__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__22790__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__22792 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__22791 = (0);
while(true){
if((i__22791 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__22791);
cljs.core.chunk_append.call(null,b__22792,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22763_SHARP_,p2__22764_SHARP_){
return this$.drag_start(p1__22763_SHARP_,p2__22764_SHARP_);
});})(i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22765_SHARP_,p2__22766_SHARP_){
return this$.drag_end(p1__22765_SHARP_,p2__22766_SHARP_);
});})(i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22767_SHARP_,p2__22768_SHARP_){
return this$.drag_over_item(p1__22767_SHARP_,p2__22768_SHARP_);
});})(i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22769_SHARP_){
return this$.drag_drop(p1__22769_SHARP_);
});})(i__22791,item,c__5864__auto__,size__5865__auto__,b__22792,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
], null)], null))));

var G__22796 = (i__22791 + (1));
i__22791 = G__22796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22792),kanban$components$sortable_list$iter__22789.call(null,cljs.core.chunk_rest.call(null,s__22790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22792),null);
}
} else {
var item = cljs.core.first.call(null,s__22790__$2);
return cljs.core.cons.call(null,kanban.components.sortable_list.sortable.call(null,om.next.computed.call(null,item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core._EQ_.call(null,drag_key,key_fn.call(null,item)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22763_SHARP_,p2__22764_SHARP_){
return this$.drag_start(p1__22763_SHARP_,p2__22764_SHARP_);
});})(item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22765_SHARP_,p2__22766_SHARP_){
return this$.drag_end(p1__22765_SHARP_,p2__22766_SHARP_);
});})(item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22767_SHARP_,p2__22768_SHARP_){
return this$.drag_over_item(p1__22767_SHARP_,p2__22768_SHARP_);
});})(item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795){
return (function (p1__22769_SHARP_){
return this$.drag_drop(p1__22769_SHARP_);
});})(item,s__22790__$2,temp__4425__auto__,items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
], null)], null))),kanban$components$sortable_list$iter__22789.call(null,cljs.core.rest.call(null,s__22790__$2)));
}
} else {
return null;
}
break;
}
});})(items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
,null,null));
});})(items,map__22785,map__22785__$1,key_fn,element_fn,map__22786,map__22786__$1,drag_key,_STAR_reconciler_STAR_22780,_STAR_depth_STAR_22781,_STAR_shared_STAR_22782,_STAR_instrument_STAR_22783,_STAR_parent_STAR_22784,this$,x22774_22795))
;
return iter__5866__auto__.call(null,items);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22784;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22783;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22782;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22781;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22780;
}});})(x22774_22795))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x22793_22797 = kanban.components.sortable_list.SortableList;


var x22794_22798 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.call(null,kanban.components.sortable_list.SortableList);

//# sourceMappingURL=sortable_list.js.map