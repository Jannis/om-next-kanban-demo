// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.lane');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.lane.Lane = (function kanban$components$lane$Lane(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x13705_13755 = kanban.components.lane.Lane.prototype;
x13705_13755.componentWillUpdate = ((function (x13705_13755){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13705_13755))
;

x13705_13755.shouldComponentUpdate = ((function (x13705_13755){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13708 = this__12403__auto__.state;
var G__13709 = "omcljs$state";
return goog.object.get(G__13708,G__13709);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13705_13755))
;

x13705_13755.componentWillUnmount = ((function (x13705_13755){
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
});})(x13705_13755))
;

x13705_13755.componentDidUpdate = ((function (x13705_13755){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13705_13755))
;

x13705_13755.isMounted = ((function (x13705_13755){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13705_13755))
;

x13705_13755.componentWillMount = ((function (x13705_13755){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13705_13755))
;

x13705_13755.render = ((function (x13705_13755){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13710 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13711 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13712 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13713 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13714 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13715 = om.next.props(this$);
var map__13715__$1 = ((((!((map__13715 == null)))?((((map__13715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13715):map__13715);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.cst$kw$name);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13715__$1,cljs.core.cst$kw$cards);
var map__13716 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13716__$1 = ((((!((map__13716 == null)))?((((map__13716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13716):map__13716);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13716__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13716__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13716__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__13720 = {"className": "lane", "onDragOver": ((function (map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function (e){
return e.preventDefault();
});})(map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
, "onDrop": ((function (map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function (e){
e.preventDefault();

var G__13724 = card_drag_fns;
var G__13724__$1 = (((G__13724 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__13724));
var G__13724__$2 = (((G__13724__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13724__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__13724__$2;
});})(map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
};
var G__13721 = (function (){var G__13725 = {"className": "lane-title"};
var G__13726 = (function (){var G__13728 = {"className": "text"};
var G__13729 = name;
return React.DOM.span(G__13728,G__13729);
})();
var G__13727 = (function (){var G__13730 = {"className": "count"};
var G__13731 = cljs.core.count(cards);
return React.DOM.span(G__13730,G__13731);
})();
return React.DOM.h3(G__13725,G__13726,G__13727);
})();
var G__13722 = (function (){var G__13732 = {"className": "add"};
var G__13733 = (function (){var G__13735 = {"onClick": ((function (G__13732,G__13720,G__13721,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function (){
var G__13737 = card_create_fn;
var G__13737__$1 = (((G__13737 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__13737__$1;
});})(G__13732,G__13720,G__13721,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
};
var G__13736 = "+";
return React.DOM.a(G__13735,G__13736);
})();
return React.DOM.div(G__13732,G__13733);
})();
var G__13723 = (function (){var G__13738 = {"className": "cards"};
var G__13739 = (function (){var ref = om.next.get_ident(this$);
var drag_fns = (function (){var G__13740 = card_drag_fns;
var G__13740__$1 = (((G__13740 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13740,ref,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function (p__13741){
var vec__13742 = p__13741;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13742,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13742,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,ref)], null);
});})(G__13740,ref,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
,G__13740));
var G__13740__$2 = (((G__13740__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13740__$1));
return G__13740__$2;
})();
var iter__5940__auto__ = ((function (ref,drag_fns,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function kanban$components$lane$iter__13743(s__13744){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755){
return (function (){
var s__13744__$1 = s__13744;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13744__$1);
if(temp__4425__auto__){
var s__13744__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13744__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13744__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13746 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13745 = (0);
while(true){
if((i__13745 < size__5939__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13745);
cljs.core.chunk_append(b__13746,(function (){var G__13751 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__13751) : kanban.components.card.card.call(null,G__13751));
})());

var G__13756 = (i__13745 + (1));
i__13745 = G__13756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13746),kanban$components$lane$iter__13743(cljs.core.chunk_rest(s__13744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13746),null);
}
} else {
var c = cljs.core.first(s__13744__$2);
return cljs.core.cons((function (){var G__13752 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__13752) : kanban.components.card.card.call(null,G__13752));
})(),kanban$components$lane$iter__13743(cljs.core.rest(s__13744__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
,null,null));
});})(ref,drag_fns,G__13738,G__13720,G__13721,G__13722,map__13715,map__13715__$1,name,cards,map__13716,map__13716__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13710,_STAR_depth_STAR_13711,_STAR_shared_STAR_13712,_STAR_instrument_STAR_13713,_STAR_parent_STAR_13714,this$,x13705_13755))
;
return iter__5940__auto__(cards);
})();
return React.DOM.div(G__13738,G__13739);
})();
return React.DOM.div(G__13720,G__13721,G__13722,G__13723);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13714;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13713;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13712;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13711;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13710;
}});})(x13705_13755))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x13753_13757 = kanban.components.lane.Lane;
x13753_13757.om$next$Ident$ = true;

x13753_13757.om$next$Ident$ident$arity$2 = ((function (x13753_13757){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13753_13757))
;

x13753_13757.om$next$IQuery$ = true;

x13753_13757.om$next$IQuery$query$arity$1 = ((function (x13753_13757){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x13753_13757))
;


var x13754_13758 = kanban.components.lane.Lane.prototype;
x13754_13758.om$next$Ident$ = true;

x13754_13758.om$next$Ident$ident$arity$2 = ((function (x13754_13758){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13754_13758))
;

x13754_13758.om$next$IQuery$ = true;

x13754_13758.om$next$IQuery$query$arity$1 = ((function (x13754_13758){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x13754_13758))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
