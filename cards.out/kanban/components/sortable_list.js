// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__22432 = x;
var G__22432__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__22432):G__22432);
return G__22432__$1;
})();
if(cljs.core.truth_(cljs.core.cst$kw$converted.cljs$core$IFn$_invoke$arity$1(om.next.get_computed.cljs$core$IFn$_invoke$arity$1(props)))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__22435 = x;
var G__22435__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__22435):G__22435);
return G__22435__$1;
})();
var G__22436 = props;
var G__22436__$1 = (((G__22436 == null))?null:om.next.get_computed.cljs$core$IFn$_invoke$arity$1(G__22436));
var G__22436__$2 = (((G__22436__$1 == null))?null:cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__22436__$1));
var G__22436__$3 = (((G__22436__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22436__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value(x)], null)));
return G__22436__$3;
});
/**
 * @constructor
 */
kanban.components.sortable_list.Sortable = (function kanban$components$sortable_list$Sortable(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.sortable_list.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x22446_22473 = kanban.components.sortable_list.Sortable.prototype;
x22446_22473.componentWillUpdate = ((function (x22446_22473){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x22446_22473))
;

x22446_22473.shouldComponentUpdate = ((function (x22446_22473){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22449 = this__12403__auto__.state;
var G__22450 = "omcljs$state";
return goog.object.get(G__22449,G__22450);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x22446_22473))
;

x22446_22473.componentWillUnmount = ((function (x22446_22473){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x22446_22473))
;

x22446_22473.componentDidUpdate = ((function (x22446_22473){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x22446_22473))
;

x22446_22473.isMounted = ((function (x22446_22473){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22446_22473))
;

x22446_22473.componentWillMount = ((function (x22446_22473){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x22446_22473))
;

x22446_22473.render = ((function (x22446_22473){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22451 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22452 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22453 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22454 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22455 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22456 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__22456__$1 = ((((!((map__22456 == null)))?((((map__22456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22456):map__22456);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456__$1,cljs.core.cst$kw$dragging);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__22463 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable,true,cljs.core.cst$kw$dragging,dragging], null)), "draggable": true, "onDragStart": ((function (map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473){
return (function (p1__22437_SHARP_){
var G__22465 = drag_fns;
var G__22465__$1 = (((G__22465 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__22465));
var G__22465__$2 = (((G__22465__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22465__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22437_SHARP_,this$], null)));
return G__22465__$2;
});})(map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473))
, "onDragEnd": ((function (map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473){
return (function (p1__22438_SHARP_){
var G__22466 = drag_fns;
var G__22466__$1 = (((G__22466 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__22466));
var G__22466__$2 = (((G__22466__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22466__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22438_SHARP_,this$], null)));
return G__22466__$2;
});})(map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473))
, "onDragOver": ((function (map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473){
return (function (p1__22439_SHARP_){
var G__22467 = drag_fns;
var G__22467__$1 = (((G__22467 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__22467));
var G__22467__$2 = (((G__22467__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22467__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22439_SHARP_,this$], null)));
return G__22467__$2;
});})(map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473))
, "onDrag": ((function (map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473){
return (function (p1__22440_SHARP_){
var G__22468 = drag_fns;
var G__22468__$1 = (((G__22468 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__22468));
var G__22468__$2 = (((G__22468__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22468__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22440_SHARP_,this$], null)));
return G__22468__$2;
});})(map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473))
, "onDrop": ((function (map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473){
return (function (p1__22441_SHARP_){
var G__22469 = drag_fns;
var G__22469__$1 = (((G__22469 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__22469));
var G__22469__$2 = (((G__22469__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22469__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22441_SHARP_,this$], null)));
return G__22469__$2;
});})(map__22456,map__22456__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_22451,_STAR_depth_STAR_22452,_STAR_shared_STAR_22453,_STAR_instrument_STAR_22454,_STAR_parent_STAR_22455,this$,x22446_22473))
};
var G__22464 = (cljs.core.truth_(element_fn)?(function (){var G__22470 = kanban.components.sortable_list.sortable_value(this$);
return (element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__22470) : element_fn.call(null,G__22470));
})():null);
return React.DOM.li(G__22463,G__22464);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22455;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22454;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22453;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22452;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22451;
}});})(x22446_22473))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x22471_22474 = kanban.components.sortable_list.Sortable;


var x22472_22475 = kanban.components.sortable_list.Sortable.prototype;


kanban.components.sortable_list.Sortable.cljs$lang$type = true;

kanban.components.sortable_list.Sortable.cljs$lang$ctorStr = "kanban.components.sortable-list/Sortable";

kanban.components.sortable_list.Sortable.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.sortable-list/Sortable");
});
kanban.components.sortable_list.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.sortable_list.Sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,kanban.components.sortable_list.sortable_key], null));
/**
 * @constructor
 */
kanban.components.sortable_list.SortableList = (function kanban$components$sortable_list$SortableList(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.sortable_list.SortableList.prototype = goog.object.clone(React.Component.prototype);

var x22494_22526 = kanban.components.sortable_list.SortableList.prototype;
x22494_22526.componentWillUpdate = ((function (x22494_22526){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x22494_22526))
;

x22494_22526.shouldComponentUpdate = ((function (x22494_22526){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22497 = this__12403__auto__.state;
var G__22498 = "omcljs$state";
return goog.object.get(G__22497,G__22498);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x22494_22526))
;

x22494_22526.componentWillUnmount = ((function (x22494_22526){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x22494_22526))
;

x22494_22526.componentDidUpdate = ((function (x22494_22526){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x22494_22526))
;

x22494_22526.isMounted = ((function (x22494_22526){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22494_22526))
;

x22494_22526.componentWillMount = ((function (x22494_22526){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x22494_22526))
;

x22494_22526.item_for_key = ((function (x22494_22526){
return (function (key){
var this$ = this;
var map__22499 = om.next.props(this$);
var map__22499__$1 = ((((!((map__22499 == null)))?((((map__22499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22499):map__22499);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499__$1,cljs.core.cst$kw$items);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22499__$1,cljs.core.cst$kw$key_DASH_fn);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22499,map__22499__$1,items,key_fn,this$,x22494_22526){
return (function (p1__22476_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__22476_SHARP_) : key_fn.call(null,p1__22476_SHARP_)));
});})(map__22499,map__22499__$1,items,key_fn,this$,x22494_22526))
,items));
});})(x22494_22526))
;

x22494_22526.drag_start = ((function (x22494_22526){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key(child);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_key,key);
});})(x22494_22526))
;

x22494_22526.drag_end = ((function (x22494_22526){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x22494_22526){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_key),cljs.core.cst$kw$dragging);
});})(this$,x22494_22526))
);
});})(x22494_22526))
;

x22494_22526.drag_over = ((function (x22494_22526){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x22494_22526))
;

x22494_22526.drag = ((function (x22494_22526){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x22494_22526))
;

x22494_22526.drag_over_item = ((function (x22494_22526){
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
var items = (function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var items_without_drag = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x22494_22526){
return (function (p1__22477_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__22477_SHARP_) : key_fn.call(null,p1__22477_SHARP_)));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x22494_22526))
,items);
var index = (function (){var G__22501 = kanban.util.index_of(target_key,cljs.core.map.cljs$core$IFn$_invoke$arity$2(key_fn,items_without_drag));
var G__22501__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(where,cljs.core.cst$kw$after))?(G__22501 + (1)):G__22501);
return G__22501__$1;
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x22494_22526){
return (function (p1__22478_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(p1__22478_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.array_seq([cljs.core.second(p1__22478_SHARP_)], 0));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x22494_22526))
.call(null,cljs.core.split_at(index,items_without_drag)));
}
});})(x22494_22526))
;

x22494_22526.drag_drop = ((function (x22494_22526){
return (function (e){
var this$ = this;
var G__22502 = this$;
var G__22502__$1 = (((G__22502 == null))?null:om.next.props(G__22502));
var G__22502__$2 = (((G__22502__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__22502__$1));
var G__22502__$3 = (((G__22502__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22502__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$items)], null)));
return G__22502__$3;
});})(x22494_22526))
;

x22494_22526.render = ((function (x22494_22526){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22503 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22504 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22505 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22506 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22507 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$2(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
var map__22508 = om.next.props(this$);
var map__22508__$1 = ((((!((map__22508 == null)))?((((map__22508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22508):map__22508);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$direction);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508__$1,cljs.core.cst$kw$element_DASH_fn);
var map__22509 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__22509__$1 = ((((!((map__22509 == null)))?((((map__22509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22509):map__22509);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,cljs.core.cst$kw$dragging);
var drag_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22509__$1,cljs.core.cst$kw$drag_DASH_key);
var G__22512 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable_DASH_list,true,cljs.core.cst$kw$sortable_DASH_list_DASH_vertical,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$vertical)], null)), "onDragOver": ((function (items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22479_SHARP_){
return this$.drag_over(p1__22479_SHARP_);
});})(items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
, "onDrop": ((function (items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22480_SHARP_){
return this$.drag_drop(p1__22480_SHARP_);
});})(items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
};
var G__22513 = (function (){var iter__5940__auto__ = ((function (G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function kanban$components$sortable_list$iter__22514(s__22515){
return (new cljs.core.LazySeq(null,((function (G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (){
var s__22515__$1 = s__22515;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22515__$1);
if(temp__4425__auto__){
var s__22515__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22515__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22515__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22517 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22516 = (0);
while(true){
if((i__22516 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22516);
cljs.core.chunk_append(b__22517,(function (){var G__22522 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22481_SHARP_,p2__22482_SHARP_){
return this$.drag_start(p1__22481_SHARP_,p2__22482_SHARP_);
});})(i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$end,((function (i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22483_SHARP_,p2__22484_SHARP_){
return this$.drag_end(p1__22483_SHARP_,p2__22484_SHARP_);
});})(i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$over,((function (i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22485_SHARP_,p2__22486_SHARP_){
return this$.drag_over_item(p1__22485_SHARP_,p2__22486_SHARP_);
});})(i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$drag,((function (i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22487_SHARP_,p2__22488_SHARP_){
return this$.drag(p1__22487_SHARP_,p2__22488_SHARP_);
});})(i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$drop,((function (i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22489_SHARP_){
return this$.drag_drop(p1__22489_SHARP_);
});})(i__22516,item,c__5938__auto__,size__5939__auto__,b__22517,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__22522) : kanban.components.sortable_list.sortable.call(null,G__22522));
})());

var G__22527 = (i__22516 + (1));
i__22516 = G__22527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22517),kanban$components$sortable_list$iter__22514(cljs.core.chunk_rest(s__22515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22517),null);
}
} else {
var item = cljs.core.first(s__22515__$2);
return cljs.core.cons((function (){var G__22523 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22481_SHARP_,p2__22482_SHARP_){
return this$.drag_start(p1__22481_SHARP_,p2__22482_SHARP_);
});})(item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$end,((function (item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22483_SHARP_,p2__22484_SHARP_){
return this$.drag_end(p1__22483_SHARP_,p2__22484_SHARP_);
});})(item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$over,((function (item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22485_SHARP_,p2__22486_SHARP_){
return this$.drag_over_item(p1__22485_SHARP_,p2__22486_SHARP_);
});})(item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$drag,((function (item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22487_SHARP_,p2__22488_SHARP_){
return this$.drag(p1__22487_SHARP_,p2__22488_SHARP_);
});})(item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,cljs.core.cst$kw$drop,((function (item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526){
return (function (p1__22489_SHARP_){
return this$.drag_drop(p1__22489_SHARP_);
});})(item,s__22515__$2,temp__4425__auto__,G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__22523) : kanban.components.sortable_list.sortable.call(null,G__22523));
})(),kanban$components$sortable_list$iter__22514(cljs.core.rest(s__22515__$2)));
}
} else {
return null;
}
break;
}
});})(G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
,null,null));
});})(G__22512,items,map__22508,map__22508__$1,direction,key_fn,element_fn,map__22509,map__22509__$1,dragging,drag_key,_STAR_reconciler_STAR_22503,_STAR_depth_STAR_22504,_STAR_shared_STAR_22505,_STAR_instrument_STAR_22506,_STAR_parent_STAR_22507,this$,x22494_22526))
;
return iter__5940__auto__(items);
})();
return React.DOM.ul(G__22512,G__22513);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22507;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22506;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22505;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22504;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22503;
}});})(x22494_22526))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x22524_22528 = kanban.components.sortable_list.SortableList;


var x22525_22529 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.sortable_list.SortableList);
