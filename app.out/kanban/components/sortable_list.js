// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__14315 = x;
var G__14315__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__14315):G__14315);
return G__14315__$1;
})();
if(cljs.core.truth_(cljs.core.cst$kw$converted.cljs$core$IFn$_invoke$arity$1(om.next.get_computed.cljs$core$IFn$_invoke$arity$1(props)))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__14318 = x;
var G__14318__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__14318):G__14318);
return G__14318__$1;
})();
var G__14319 = props;
var G__14319__$1 = (((G__14319 == null))?null:om.next.get_computed.cljs$core$IFn$_invoke$arity$1(G__14319));
var G__14319__$2 = (((G__14319__$1 == null))?null:cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__14319__$1));
var G__14319__$3 = (((G__14319__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14319__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value(x)], null)));
return G__14319__$3;
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

var x14329_14356 = kanban.components.sortable_list.Sortable.prototype;
x14329_14356.componentWillUpdate = ((function (x14329_14356){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14329_14356))
;

x14329_14356.shouldComponentUpdate = ((function (x14329_14356){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14332 = this__12855__auto__.state;
var G__14333 = "omcljs$state";
return goog.object.get(G__14332,G__14333);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14329_14356))
;

x14329_14356.componentWillUnmount = ((function (x14329_14356){
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
});})(x14329_14356))
;

x14329_14356.componentDidUpdate = ((function (x14329_14356){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14329_14356))
;

x14329_14356.isMounted = ((function (x14329_14356){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14329_14356))
;

x14329_14356.componentWillMount = ((function (x14329_14356){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14329_14356))
;

x14329_14356.render = ((function (x14329_14356){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14334 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14335 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14336 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14337 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14338 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__14339 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14339__$1 = ((((!((map__14339 == null)))?((((map__14339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14339):map__14339);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$dragging);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__14346 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable,true,cljs.core.cst$kw$dragging,dragging], null)), "draggable": true, "onDragStart": ((function (map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356){
return (function (p1__14320_SHARP_){
var G__14348 = drag_fns;
var G__14348__$1 = (((G__14348 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__14348));
var G__14348__$2 = (((G__14348__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14348__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14320_SHARP_,this$], null)));
return G__14348__$2;
});})(map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356))
, "onDragEnd": ((function (map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356){
return (function (p1__14321_SHARP_){
var G__14349 = drag_fns;
var G__14349__$1 = (((G__14349 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__14349));
var G__14349__$2 = (((G__14349__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14349__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14321_SHARP_,this$], null)));
return G__14349__$2;
});})(map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356))
, "onDragOver": ((function (map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356){
return (function (p1__14322_SHARP_){
var G__14350 = drag_fns;
var G__14350__$1 = (((G__14350 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__14350));
var G__14350__$2 = (((G__14350__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14350__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14322_SHARP_,this$], null)));
return G__14350__$2;
});})(map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356))
, "onDrag": ((function (map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356){
return (function (p1__14323_SHARP_){
var G__14351 = drag_fns;
var G__14351__$1 = (((G__14351 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__14351));
var G__14351__$2 = (((G__14351__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14351__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14323_SHARP_,this$], null)));
return G__14351__$2;
});})(map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356))
, "onDrop": ((function (map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356){
return (function (p1__14324_SHARP_){
var G__14352 = drag_fns;
var G__14352__$1 = (((G__14352 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__14352));
var G__14352__$2 = (((G__14352__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14352__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14324_SHARP_,this$], null)));
return G__14352__$2;
});})(map__14339,map__14339__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_14334,_STAR_depth_STAR_14335,_STAR_shared_STAR_14336,_STAR_instrument_STAR_14337,_STAR_parent_STAR_14338,this$,this__12854__auto__,x14329_14356))
};
var G__14347 = om.util.force_children((cljs.core.truth_(element_fn)?(function (){var G__14353 = kanban.components.sortable_list.sortable_value(this$);
return (element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__14353) : element_fn.call(null,G__14353));
})():null));
return React.DOM.li(G__14346,G__14347);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14338;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14337;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14336;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14335;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14334;
}});})(x14329_14356))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x14354_14357 = kanban.components.sortable_list.Sortable;


var x14355_14358 = kanban.components.sortable_list.Sortable.prototype;


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

var x14377_14409 = kanban.components.sortable_list.SortableList.prototype;
x14377_14409.componentWillUpdate = ((function (x14377_14409){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14377_14409))
;

x14377_14409.shouldComponentUpdate = ((function (x14377_14409){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14380 = this__12855__auto__.state;
var G__14381 = "omcljs$state";
return goog.object.get(G__14380,G__14381);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14377_14409))
;

x14377_14409.componentWillUnmount = ((function (x14377_14409){
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
});})(x14377_14409))
;

x14377_14409.componentDidUpdate = ((function (x14377_14409){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14377_14409))
;

x14377_14409.isMounted = ((function (x14377_14409){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14377_14409))
;

x14377_14409.componentWillMount = ((function (x14377_14409){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14377_14409))
;

x14377_14409.item_for_key = ((function (x14377_14409){
return (function (key){
var this$ = this;
var map__14382 = om.next.props(this$);
var map__14382__$1 = ((((!((map__14382 == null)))?((((map__14382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14382):map__14382);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14382__$1,cljs.core.cst$kw$items);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14382__$1,cljs.core.cst$kw$key_DASH_fn);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14382,map__14382__$1,items,key_fn,this$,x14377_14409){
return (function (p1__14359_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__14359_SHARP_) : key_fn.call(null,p1__14359_SHARP_)));
});})(map__14382,map__14382__$1,items,key_fn,this$,x14377_14409))
,items));
});})(x14377_14409))
;

x14377_14409.drag_start = ((function (x14377_14409){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key(child);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_key,key);
});})(x14377_14409))
;

x14377_14409.drag_end = ((function (x14377_14409){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x14377_14409){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_key),cljs.core.cst$kw$dragging);
});})(this$,x14377_14409))
);
});})(x14377_14409))
;

x14377_14409.drag_over = ((function (x14377_14409){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x14377_14409))
;

x14377_14409.drag = ((function (x14377_14409){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x14377_14409))
;

x14377_14409.drag_over_item = ((function (x14377_14409){
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
var items_without_drag = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x14377_14409){
return (function (p1__14360_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__14360_SHARP_) : key_fn.call(null,p1__14360_SHARP_)));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x14377_14409))
,items);
var index = (function (){var G__14384 = kanban.util.index_of(target_key,cljs.core.map.cljs$core$IFn$_invoke$arity$2(key_fn,items_without_drag));
var G__14384__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(where,cljs.core.cst$kw$after))?(G__14384 + (1)):G__14384);
return G__14384__$1;
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x14377_14409){
return (function (p1__14361_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(p1__14361_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.array_seq([cljs.core.second(p1__14361_SHARP_)], 0));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x14377_14409))
.call(null,cljs.core.split_at(index,items_without_drag)));
}
});})(x14377_14409))
;

x14377_14409.drag_drop = ((function (x14377_14409){
return (function (e){
var this$ = this;
var G__14385 = this$;
var G__14385__$1 = (((G__14385 == null))?null:om.next.props(G__14385));
var G__14385__$2 = (((G__14385__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__14385__$1));
var G__14385__$3 = (((G__14385__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14385__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$items)], null)));
return G__14385__$3;
});})(x14377_14409))
;

x14377_14409.render = ((function (x14377_14409){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14386 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14387 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14388 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14389 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14390 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$2(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
var map__14391 = om.next.props(this$);
var map__14391__$1 = ((((!((map__14391 == null)))?((((map__14391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14391):map__14391);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$direction);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$element_DASH_fn);
var map__14392 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__14392__$1 = ((((!((map__14392 == null)))?((((map__14392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14392):map__14392);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,cljs.core.cst$kw$dragging);
var drag_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,cljs.core.cst$kw$drag_DASH_key);
var G__14395 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable_DASH_list,true,cljs.core.cst$kw$sortable_DASH_list_DASH_vertical,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$vertical)], null)), "onDragOver": ((function (items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14362_SHARP_){
return this$.drag_over(p1__14362_SHARP_);
});})(items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
, "onDrop": ((function (items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14363_SHARP_){
return this$.drag_drop(p1__14363_SHARP_);
});})(items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
};
var G__14396 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function kanban$components$sortable_list$iter__14397(s__14398){
return (new cljs.core.LazySeq(null,((function (G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (){
var s__14398__$1 = s__14398;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14398__$1);
if(temp__4425__auto__){
var s__14398__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14398__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__14398__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__14400 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__14399 = (0);
while(true){
if((i__14399 < size__5757__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__14399);
cljs.core.chunk_append(b__14400,(function (){var G__14405 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__4974__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14364_SHARP_,p2__14365_SHARP_){
return this$.drag_start(p1__14364_SHARP_,p2__14365_SHARP_);
});})(i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$end,((function (i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14366_SHARP_,p2__14367_SHARP_){
return this$.drag_end(p1__14366_SHARP_,p2__14367_SHARP_);
});})(i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$over,((function (i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14368_SHARP_,p2__14369_SHARP_){
return this$.drag_over_item(p1__14368_SHARP_,p2__14369_SHARP_);
});})(i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$drag,((function (i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14370_SHARP_,p2__14371_SHARP_){
return this$.drag(p1__14370_SHARP_,p2__14371_SHARP_);
});})(i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$drop,((function (i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14372_SHARP_){
return this$.drag_drop(p1__14372_SHARP_);
});})(i__14399,item,c__5756__auto__,size__5757__auto__,b__14400,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__14405) : kanban.components.sortable_list.sortable.call(null,G__14405));
})());

var G__14410 = (i__14399 + (1));
i__14399 = G__14410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14400),kanban$components$sortable_list$iter__14397(cljs.core.chunk_rest(s__14398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14400),null);
}
} else {
var item = cljs.core.first(s__14398__$2);
return cljs.core.cons((function (){var G__14406 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__4974__auto__ = dragging;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__4974__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14364_SHARP_,p2__14365_SHARP_){
return this$.drag_start(p1__14364_SHARP_,p2__14365_SHARP_);
});})(item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$end,((function (item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14366_SHARP_,p2__14367_SHARP_){
return this$.drag_end(p1__14366_SHARP_,p2__14367_SHARP_);
});})(item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$over,((function (item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14368_SHARP_,p2__14369_SHARP_){
return this$.drag_over_item(p1__14368_SHARP_,p2__14369_SHARP_);
});})(item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$drag,((function (item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14370_SHARP_,p2__14371_SHARP_){
return this$.drag(p1__14370_SHARP_,p2__14371_SHARP_);
});})(item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,cljs.core.cst$kw$drop,((function (item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409){
return (function (p1__14372_SHARP_){
return this$.drag_drop(p1__14372_SHARP_);
});})(item,s__14398__$2,temp__4425__auto__,G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__14406) : kanban.components.sortable_list.sortable.call(null,G__14406));
})(),kanban$components$sortable_list$iter__14397(cljs.core.rest(s__14398__$2)));
}
} else {
return null;
}
break;
}
});})(G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
,null,null));
});})(G__14395,items,map__14391,map__14391__$1,direction,key_fn,element_fn,map__14392,map__14392__$1,dragging,drag_key,_STAR_reconciler_STAR_14386,_STAR_depth_STAR_14387,_STAR_shared_STAR_14388,_STAR_instrument_STAR_14389,_STAR_parent_STAR_14390,this$,this__12854__auto__,x14377_14409))
;
return iter__5758__auto__(items);
})());
return React.DOM.ul(G__14395,G__14396);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14390;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14389;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14388;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14387;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14386;
}});})(x14377_14409))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x14407_14411 = kanban.components.sortable_list.SortableList;


var x14408_14412 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.sortable_list.SortableList);
