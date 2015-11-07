// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.sortable_list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.sortable_list.sortable_value = (function kanban$components$sortable_list$sortable_value(x){
var props = (function (){var G__13240 = x;
var G__13240__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__13240):G__13240);
return G__13240__$1;
})();
if(cljs.core.truth_(cljs.core.cst$kw$converted.cljs$core$IFn$_invoke$arity$1(om.next.get_computed.cljs$core$IFn$_invoke$arity$1(props)))){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(props);
} else {
return props;
}
});
kanban.components.sortable_list.sortable_key = (function kanban$components$sortable_list$sortable_key(x){
var props = (function (){var G__13243 = x;
var G__13243__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__13243):G__13243);
return G__13243__$1;
})();
var G__13244 = props;
var G__13244__$1 = (((G__13244 == null))?null:om.next.get_computed.cljs$core$IFn$_invoke$arity$1(G__13244));
var G__13244__$2 = (((G__13244__$1 == null))?null:cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__13244__$1));
var G__13244__$3 = (((G__13244__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13244__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kanban.components.sortable_list.sortable_value(x)], null)));
return G__13244__$3;
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

var x13254_13281 = kanban.components.sortable_list.Sortable.prototype;
x13254_13281.componentWillUpdate = ((function (x13254_13281){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13254_13281))
;

x13254_13281.shouldComponentUpdate = ((function (x13254_13281){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13257 = this__12403__auto__.state;
var G__13258 = "omcljs$state";
return goog.object.get(G__13257,G__13258);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13254_13281))
;

x13254_13281.componentWillUnmount = ((function (x13254_13281){
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
});})(x13254_13281))
;

x13254_13281.componentDidUpdate = ((function (x13254_13281){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13254_13281))
;

x13254_13281.isMounted = ((function (x13254_13281){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13254_13281))
;

x13254_13281.componentWillMount = ((function (x13254_13281){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13254_13281))
;

x13254_13281.render = ((function (x13254_13281){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13259 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13260 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13261 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13262 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13263 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13264 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13264__$1 = ((((!((map__13264 == null)))?((((map__13264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13264):map__13264);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,cljs.core.cst$kw$dragging);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13264__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__13271 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable,true,cljs.core.cst$kw$dragging,dragging], null)), "draggable": true, "onDragStart": ((function (map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281){
return (function (p1__13245_SHARP_){
var G__13273 = drag_fns;
var G__13273__$1 = (((G__13273 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__13273));
var G__13273__$2 = (((G__13273__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13273__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13245_SHARP_,this$], null)));
return G__13273__$2;
});})(map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281))
, "onDragEnd": ((function (map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281){
return (function (p1__13246_SHARP_){
var G__13274 = drag_fns;
var G__13274__$1 = (((G__13274 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__13274));
var G__13274__$2 = (((G__13274__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13274__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13246_SHARP_,this$], null)));
return G__13274__$2;
});})(map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281))
, "onDragOver": ((function (map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281){
return (function (p1__13247_SHARP_){
var G__13275 = drag_fns;
var G__13275__$1 = (((G__13275 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__13275));
var G__13275__$2 = (((G__13275__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13275__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13247_SHARP_,this$], null)));
return G__13275__$2;
});})(map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281))
, "onDrag": ((function (map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281){
return (function (p1__13248_SHARP_){
var G__13276 = drag_fns;
var G__13276__$1 = (((G__13276 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__13276));
var G__13276__$2 = (((G__13276__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13276__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13248_SHARP_,this$], null)));
return G__13276__$2;
});})(map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281))
, "onDrop": ((function (map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281){
return (function (p1__13249_SHARP_){
var G__13277 = drag_fns;
var G__13277__$1 = (((G__13277 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__13277));
var G__13277__$2 = (((G__13277__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13277__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13249_SHARP_,this$], null)));
return G__13277__$2;
});})(map__13264,map__13264__$1,dragging,element_fn,drag_fns,_STAR_reconciler_STAR_13259,_STAR_depth_STAR_13260,_STAR_shared_STAR_13261,_STAR_instrument_STAR_13262,_STAR_parent_STAR_13263,this$,x13254_13281))
};
var G__13272 = (cljs.core.truth_(element_fn)?(function (){var G__13278 = kanban.components.sortable_list.sortable_value(this$);
return (element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__13278) : element_fn.call(null,G__13278));
})():null);
return React.DOM.li(G__13271,G__13272);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13263;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13262;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13261;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13260;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13259;
}});})(x13254_13281))
;


kanban.components.sortable_list.Sortable.prototype.constructor = kanban.components.sortable_list.Sortable;

kanban.components.sortable_list.Sortable.prototype.om$isComponent = true;

var x13279_13282 = kanban.components.sortable_list.Sortable;


var x13280_13283 = kanban.components.sortable_list.Sortable.prototype;


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

var x13302_13334 = kanban.components.sortable_list.SortableList.prototype;
x13302_13334.componentWillUpdate = ((function (x13302_13334){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13302_13334))
;

x13302_13334.shouldComponentUpdate = ((function (x13302_13334){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13305 = this__12403__auto__.state;
var G__13306 = "omcljs$state";
return goog.object.get(G__13305,G__13306);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13302_13334))
;

x13302_13334.componentWillUnmount = ((function (x13302_13334){
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
});})(x13302_13334))
;

x13302_13334.componentDidUpdate = ((function (x13302_13334){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13302_13334))
;

x13302_13334.isMounted = ((function (x13302_13334){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13302_13334))
;

x13302_13334.componentWillMount = ((function (x13302_13334){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13302_13334))
;

x13302_13334.item_for_key = ((function (x13302_13334){
return (function (key){
var this$ = this;
var map__13307 = om.next.props(this$);
var map__13307__$1 = ((((!((map__13307 == null)))?((((map__13307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13307):map__13307);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,cljs.core.cst$kw$items);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13307__$1,cljs.core.cst$kw$key_DASH_fn);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13307,map__13307__$1,items,key_fn,this$,x13302_13334){
return (function (p1__13284_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__13284_SHARP_) : key_fn.call(null,p1__13284_SHARP_)));
});})(map__13307,map__13307__$1,items,key_fn,this$,x13302_13334))
,items));
});})(x13302_13334))
;

x13302_13334.drag_start = ((function (x13302_13334){
return (function (e,child){
var this$ = this;
var key = kanban.components.sortable_list.sortable_key(child);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_key,key);
});})(x13302_13334))
;

x13302_13334.drag_end = ((function (x13302_13334){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x13302_13334){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_key),cljs.core.cst$kw$dragging);
});})(this$,x13302_13334))
);
});})(x13302_13334))
;

x13302_13334.drag_over = ((function (x13302_13334){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x13302_13334))
;

x13302_13334.drag = ((function (x13302_13334){
return (function (e){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x13302_13334))
;

x13302_13334.drag_over_item = ((function (x13302_13334){
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
var items_without_drag = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x13302_13334){
return (function (p1__13285_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(p1__13285_SHARP_) : key_fn.call(null,p1__13285_SHARP_)));
});})(x,y,node,rect,center_x,center_y,where,items,target_key,drag_key,key_fn,direction,this$,x13302_13334))
,items);
var index = (function (){var G__13309 = kanban.util.index_of(target_key,cljs.core.map.cljs$core$IFn$_invoke$arity$2(key_fn,items_without_drag));
var G__13309__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(where,cljs.core.cst$kw$after))?(G__13309 + (1)):G__13309);
return G__13309__$1;
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,((function (x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x13302_13334){
return (function (p1__13286_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(p1__13286_SHARP_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.item_for_key(drag_key)], null),cljs.core.array_seq([cljs.core.second(p1__13286_SHARP_)], 0));
});})(x,y,node,rect,center_x,center_y,where,items,items_without_drag,index,target_key,drag_key,key_fn,direction,this$,x13302_13334))
.call(null,cljs.core.split_at(index,items_without_drag)));
}
});})(x13302_13334))
;

x13302_13334.drag_drop = ((function (x13302_13334){
return (function (e){
var this$ = this;
var G__13310 = this$;
var G__13310__$1 = (((G__13310 == null))?null:om.next.props(G__13310));
var G__13310__$2 = (((G__13310__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__13310__$1));
var G__13310__$3 = (((G__13310__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13310__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$items)], null)));
return G__13310__$3;
});})(x13302_13334))
;

x13302_13334.render = ((function (x13302_13334){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13311 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13312 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13313 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13314 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13315 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$2(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
var map__13316 = om.next.props(this$);
var map__13316__$1 = ((((!((map__13316 == null)))?((((map__13316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13316):map__13316);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,cljs.core.cst$kw$direction);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,cljs.core.cst$kw$element_DASH_fn);
var map__13317 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__13317__$1 = ((((!((map__13317 == null)))?((((map__13317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13317):map__13317);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13317__$1,cljs.core.cst$kw$dragging);
var drag_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13317__$1,cljs.core.cst$kw$drag_DASH_key);
var G__13320 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sortable_DASH_list,true,cljs.core.cst$kw$sortable_DASH_list_DASH_vertical,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$vertical)], null)), "onDragOver": ((function (items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13287_SHARP_){
return this$.drag_over(p1__13287_SHARP_);
});})(items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
, "onDrop": ((function (items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13288_SHARP_){
return this$.drag_drop(p1__13288_SHARP_);
});})(items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
};
var G__13321 = (function (){var iter__5940__auto__ = ((function (G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function kanban$components$sortable_list$iter__13322(s__13323){
return (new cljs.core.LazySeq(null,((function (G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (){
var s__13323__$1 = s__13323;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13323__$1);
if(temp__4425__auto__){
var s__13323__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13323__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13323__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13325 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13324 = (0);
while(true){
if((i__13324 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13324);
cljs.core.chunk_append(b__13325,(function (){var G__13330 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13289_SHARP_,p2__13290_SHARP_){
return this$.drag_start(p1__13289_SHARP_,p2__13290_SHARP_);
});})(i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$end,((function (i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13291_SHARP_,p2__13292_SHARP_){
return this$.drag_end(p1__13291_SHARP_,p2__13292_SHARP_);
});})(i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$over,((function (i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13293_SHARP_,p2__13294_SHARP_){
return this$.drag_over_item(p1__13293_SHARP_,p2__13294_SHARP_);
});})(i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$drag,((function (i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13295_SHARP_,p2__13296_SHARP_){
return this$.drag(p1__13295_SHARP_,p2__13296_SHARP_);
});})(i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$drop,((function (i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13297_SHARP_){
return this$.drag_drop(p1__13297_SHARP_);
});})(i__13324,item,c__5938__auto__,size__5939__auto__,b__13325,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__13330) : kanban.components.sortable_list.sortable.call(null,G__13330));
})());

var G__13335 = (i__13324 + (1));
i__13324 = G__13335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13325),kanban$components$sortable_list$iter__13322(cljs.core.chunk_rest(s__13323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13325),null);
}
} else {
var item = cljs.core.first(s__13323__$2);
return cljs.core.cons((function (){var G__13331 = om.next.computed(((!(cljs.core.map_QMARK_(item)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,item], null):item),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$converted,!(cljs.core.map_QMARK_(item)),cljs.core.cst$kw$dragging,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_key,(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(item) : key_fn.call(null,item)));
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13289_SHARP_,p2__13290_SHARP_){
return this$.drag_start(p1__13289_SHARP_,p2__13290_SHARP_);
});})(item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$end,((function (item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13291_SHARP_,p2__13292_SHARP_){
return this$.drag_end(p1__13291_SHARP_,p2__13292_SHARP_);
});})(item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$over,((function (item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13293_SHARP_,p2__13294_SHARP_){
return this$.drag_over_item(p1__13293_SHARP_,p2__13294_SHARP_);
});})(item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$drag,((function (item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13295_SHARP_,p2__13296_SHARP_){
return this$.drag(p1__13295_SHARP_,p2__13296_SHARP_);
});})(item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,cljs.core.cst$kw$drop,((function (item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334){
return (function (p1__13297_SHARP_){
return this$.drag_drop(p1__13297_SHARP_);
});})(item,s__13323__$2,temp__4425__auto__,G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
], null)], null));
return (kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable.cljs$core$IFn$_invoke$arity$1(G__13331) : kanban.components.sortable_list.sortable.call(null,G__13331));
})(),kanban$components$sortable_list$iter__13322(cljs.core.rest(s__13323__$2)));
}
} else {
return null;
}
break;
}
});})(G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
,null,null));
});})(G__13320,items,map__13316,map__13316__$1,direction,key_fn,element_fn,map__13317,map__13317__$1,dragging,drag_key,_STAR_reconciler_STAR_13311,_STAR_depth_STAR_13312,_STAR_shared_STAR_13313,_STAR_instrument_STAR_13314,_STAR_parent_STAR_13315,this$,x13302_13334))
;
return iter__5940__auto__(items);
})();
return React.DOM.ul(G__13320,G__13321);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13315;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13314;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13313;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13312;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13311;
}});})(x13302_13334))
;


kanban.components.sortable_list.SortableList.prototype.constructor = kanban.components.sortable_list.SortableList;

kanban.components.sortable_list.SortableList.prototype.om$isComponent = true;

var x13332_13336 = kanban.components.sortable_list.SortableList;


var x13333_13337 = kanban.components.sortable_list.SortableList.prototype;


kanban.components.sortable_list.SortableList.cljs$lang$type = true;

kanban.components.sortable_list.SortableList.cljs$lang$ctorStr = "kanban.components.sortable-list/SortableList";

kanban.components.sortable_list.SortableList.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.sortable-list/SortableList");
});
kanban.components.sortable_list.sortable_list = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.sortable_list.SortableList);
