// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__23511 = x;
var G__23511__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__23511):G__23511);
return G__23511__$1;
})();
if(cljs.core.truth_(cljs.core.cst$kw$converted.cljs$core$IFn$_invoke$arity$1(om.next.get_computed.cljs$core$IFn$_invoke$arity$1(props)))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__23514 = x;
var G__23514__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__23514):G__23514);
return G__23514__$1;
})();
var G__23515 = props;
var G__23515__$1 = (((G__23515 == null))?null:om.next.get_computed.cljs$core$IFn$_invoke$arity$1(G__23515));
var G__23515__$2 = (((G__23515__$1 == null))?null:cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__23515__$1));
var G__23515__$3 = (((G__23515__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23515__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value(x)], null)));
return G__23515__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x23525_23552 = kanban.components.sortable_list.Sortable.prototype;
x23525_23552.componentWillUpdate = ((function (x23525_23552){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x23525_23552))
;

x23525_23552.shouldComponentUpdate = ((function (x23525_23552){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23528 = this__12855__auto__.state;
var G__23529 = "omcljs$state";
return goog.object.get(G__23528,G__23529);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x23525_23552))
;

x23525_23552.componentWillUnmount = ((function (x23525_23552){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x23525_23552))
;

x23525_23552.componentDidUpdate = ((function (x23525_23552){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x23525_23552))
;

x23525_23552.isMounted = ((function (x23525_23552){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23525_23552))
;

x23525_23552.componentWillMount = ((function (x23525_23552){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x23525_23552))
;

x23525_23552.render = ((function (x23525_23552){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_23530 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23531 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23532 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23533 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23534 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__23535 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__23535__$1 = ((((!((map__23535 == null)))?((((map__23535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23535):map__23535);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.cst$kw$dragging);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__23542 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable,true,cljs.core.cst$kw$dragging,dragging], null)), "draggable": true, "onDragStart": ((function (map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552){
return (function (p1__23516_SHARP_){
var G__23544 = drag_fns;
var G__23544__$1 = (((G__23544 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__23544));
var G__23544__$2 = (((G__23544__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23544__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23516_SHARP_,this$], null)));
return G__23544__$2;
});})(map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552))
, "onDragEnd": ((function (map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552){
return (function (p1__23517_SHARP_){
var G__23545 = drag_fns;
var G__23545__$1 = (((G__23545 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__23545));
var G__23545__$2 = (((G__23545__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23545__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23517_SHARP_,this$], null)));
return G__23545__$2;
});})(map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552))
, "onDragOver": ((function (map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552){
return (function (p1__23518_SHARP_){
var G__23546 = drag_fns;
var G__23546__$1 = (((G__23546 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__23546));
var G__23546__$2 = (((G__23546__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23546__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23518_SHARP_,this$], null)));
return G__23546__$2;
});})(map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552))
, "onDrag": ((function (map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552){
return (function (p1__23519_SHARP_){
var G__23547 = drag_fns;
var G__23547__$1 = (((G__23547 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__23547));
var G__23547__$2 = (((G__23547__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23547__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23519_SHARP_,this$], null)));
return G__23547__$2;
});})(map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552))
, "onDrop": ((function (map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552){
return (function (p1__23520_SHARP_){
var G__23548 = drag_fns;
var G__23548__$1 = (((G__23548 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__23548));
var G__23548__$2 = (((G__23548__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23548__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23520_SHARP_,this$], null)));
return G__23548__$2;
});})(map__23535,map__23535__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_23530,_STAR_depth_STAR_23531,_STAR_shared_STAR_23532,_STAR_instrument_STAR_23533,_STAR_parent_STAR_23534,this$,this__12854__auto__,x23525_23552))
};
var G__23543 = om.util.force_children((cljs.core.truth_(element_fn)?(function (){var G__23549 = kanban.components.sortable_list.sortable_value(this$);
return (element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__23549) : element_fn.call(null,G__23549));
})():null));
return React.DOM.li(G__23542,G__23543);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23534;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23533;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23532;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23531;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23530;
}});})(x23525_23552))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x23550_23553 = kanban.components.sortable_list.Sortable;


var x23551_23554 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x23573_23605 = kanban.components.sortable_list.SortableList.prototype;
x23573_23605.componentWillUpdate = ((function (x23573_23605){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x23573_23605))
;

x23573_23605.shouldComponentUpdate = ((function (x23573_23605){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23576 = this__12855__auto__.state;
var G__23577 = "omcljs$state";
return goog.object.get(G__23576,G__23577);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x23573_23605))
;

x23573_23605.componentWillUnmount = ((function (x23573_23605){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x23573_23605))
;

x23573_23605.componentDidUpdate = ((function (x23573_23605){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x23573_23605))
;

x23573_23605.isMounted = ((function (x23573_23605){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23573_23605))
;

x23573_23605.componentWillMount = ((function (x23573_23605){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x23573_23605))
;

x23573_23605.item_for_key = ((function (x23573_23605){
return (function (key){
var this$ = this;
var map__23578 = om.next.props(this$);
var map__23578__$1 = ((((!((map__23578 == null)))?((((map__23578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23578):map__23578);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23578__$1,cljs.core.cst$kw$items);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23578__$1,cljs.core.cst$kw$key_DASH_fn);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__23578,map__23578__$1,items,key_fn,this$,x23573_23605){
return (function (p1__23555_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__23555_SHARP_) : key_fn.call(null,p1__23555_SHARP_)));
});})(map__23578,map__23578__$1,items,key_fn,this$,x23573_23605))
,items));
});})(x23573_23605))
;

x23573_23605.drag_start = ((function (x23573_23605){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key(child);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_key,key);
});})(x23573_23605))
;

x23573_23605.drag_end = ((function (x23573_23605){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x23573_23605){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_key),cljs.core.cst$kw$dragging);
});})(this$,x23573_23605))
);
});})(x23573_23605))
;

x23573_23605.drag_over = ((function (x23573_23605){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x23573_23605))
;

x23573_23605.drag = ((function (x23573_23605){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x23573_23605))
;

x23573_23605.drag_over_item = ((function (x23573_23605){
return (function (e,target_child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var target_key = kanban.components.sortable_list.sortable_key(target_child);
var drag_key = cljs.core.cst$kw$drag_DASH_key.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var direction = cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,target_key)){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var node = om.dom.node.cljs$core$IFn$_invoke$arity$1(target_child);
var rect = node.getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var where = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$vertical))?(((y < center_y))?cljs.core.cst$kw$before:cljs.core.cst$kw$after):(((x < center_x))?cljs.core.cst$kw$before:cljs.core.cst$kw$after));
var items = (function (){var or__4986__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var items_without_drag = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x23573_23605){
return (function (p1__23556_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__23556_SHARP_) : key_fn.call(null,p1__23556_SHARP_)));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x23573_23605))
,items);
var index = (function (){var G__23580 = kanban.util.index_of(target_key,cljs.core.map.cljs$core$IFn$_invoke$arity$2(key_fn,items_without_drag));
var G__23580__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(where,cljs.core.cst$kw$after))?(G__23580 + (1)):G__23580);
return G__23580__$1;
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x23573_23605){
return (function (p1__23557_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(p1__23557_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.array_seq([cljs.core.second(p1__23557_SHARP_)], 0));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x23573_23605))
.call(null,cljs.core.split_at(index,items_without_drag)));
}
});})(x23573_23605))
;

x23573_23605.drag_drop = ((function (x23573_23605){
return (function (e){
var this$ = this;
var G__23581 = this$;
var G__23581__$1 = (((G__23581 == null))?null:om.next.props(G__23581));
var G__23581__$2 = (((G__23581__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__23581__$1));
var G__23581__$3 = (((G__23581__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23581__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$items)], null)));
return G__23581__$3;
});})(x23573_23605))
;

x23573_23605.render = ((function (x23573_23605){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_23582 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23583 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23584 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23585 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23586 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$2(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
var map__23587 = om.next.props(this$);
var map__23587__$1 = ((((!((map__23587 == null)))?((((map__23587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23587):map__23587);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,cljs.core.cst$kw$direction);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23587__$1,cljs.core.cst$kw$element_DASH_fn);
var map__23588 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__23588__$1 = ((((!((map__23588 == null)))?((((map__23588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23588):map__23588);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,cljs.core.cst$kw$dragging);
var drag_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23588__$1,cljs.core.cst$kw$drag_DASH_key);
var G__23591 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable_DASH_list,true,cljs.core.cst$kw$sortable_DASH_list_DASH_vertical,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$vertical)], null)), "onDragOver": ((function (items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23558_SHARP_){
return this$.drag_over(p1__23558_SHARP_);
});})(items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
, "onDrop": ((function (items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23559_SHARP_){
return this$.drag_drop(p1__23559_SHARP_);
});})(items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
};
var G__23592 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function kanban$components$sortable_list$iter__23593(s__23594){
return (new cljs.core.LazySeq(null,((function (G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (){
var s__23594__$1 = s__23594;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23594__$1);
if(temp__4425__auto__){
var s__23594__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23594__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23594__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23596 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23595 = (0);
while(true){
if((i__23595 < size__5757__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23595);
cljs.core.chunk_append(b__23596,(function (){var G__23601 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__4974__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23560_SHARP_,p2__23561_SHARP_){
return this$.drag_start(p1__23560_SHARP_,p2__23561_SHARP_);
});})(i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$end,((function (i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23562_SHARP_,p2__23563_SHARP_){
return this$.drag_end(p1__23562_SHARP_,p2__23563_SHARP_);
});})(i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$over,((function (i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23564_SHARP_,p2__23565_SHARP_){
return this$.drag_over_item(p1__23564_SHARP_,p2__23565_SHARP_);
});})(i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$drag,((function (i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23566_SHARP_,p2__23567_SHARP_){
return this$.drag(p1__23566_SHARP_,p2__23567_SHARP_);
});})(i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$drop,((function (i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23568_SHARP_){
return this$.drag_drop(p1__23568_SHARP_);
});})(i__23595,item,c__5756__auto__,size__5757__auto__,b__23596,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__23601) : kanban.components.sortable_list.sortable.call(null,G__23601));
})());

var G__23606 = (i__23595 + (1));
i__23595 = G__23606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23596),kanban$components$sortable_list$iter__23593(cljs.core.chunk_rest(s__23594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23596),null);
}
} else {
var item = cljs.core.first(s__23594__$2);
return cljs.core.cons((function (){var G__23602 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__4974__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23560_SHARP_,p2__23561_SHARP_){
return this$.drag_start(p1__23560_SHARP_,p2__23561_SHARP_);
});})(item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$end,((function (item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23562_SHARP_,p2__23563_SHARP_){
return this$.drag_end(p1__23562_SHARP_,p2__23563_SHARP_);
});})(item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$over,((function (item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23564_SHARP_,p2__23565_SHARP_){
return this$.drag_over_item(p1__23564_SHARP_,p2__23565_SHARP_);
});})(item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$drag,((function (item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23566_SHARP_,p2__23567_SHARP_){
return this$.drag(p1__23566_SHARP_,p2__23567_SHARP_);
});})(item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,cljs.core.cst$kw$drop,((function (item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605){
return (function (p1__23568_SHARP_){
return this$.drag_drop(p1__23568_SHARP_);
});})(item,s__23594__$2,temp__4425__auto__,G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__23602) : kanban.components.sortable_list.sortable.call(null,G__23602));
})(),kanban$components$sortable_list$iter__23593(cljs.core.rest(s__23594__$2)));
}
} else {
return null;
}
break;
}
});})(G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
,null,null));
});})(G__23591,items,map__23587,map__23587__$1,direction,key_fn,element_fn,map__23588,map__23588__$1,dragging,drag_key,_STAR_reconciler_STAR_23582,_STAR_depth_STAR_23583,_STAR_shared_STAR_23584,_STAR_instrument_STAR_23585,_STAR_parent_STAR_23586,this$,this__12854__auto__,x23573_23605))
;
return iter__5758__auto__(items);
})());
return React.DOM.ul(G__23591,G__23592);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23586;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23585;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23584;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23583;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23582;
}});})(x23573_23605))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x23603_23607 = kanban.components.sortable_list.SortableList;


var x23604_23608 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.sortable_list.SortableList);
