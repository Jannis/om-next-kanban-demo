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
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x14823_14873 = kanban.components.lane.Lane.prototype;
x14823_14873.componentWillUpdate = ((function (x14823_14873){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14823_14873))
;

x14823_14873.shouldComponentUpdate = ((function (x14823_14873){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14826 = this__12855__auto__.state;
var G__14827 = "omcljs$state";
return goog.object.get(G__14826,G__14827);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14823_14873))
;

x14823_14873.componentWillUnmount = ((function (x14823_14873){
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
});})(x14823_14873))
;

x14823_14873.componentDidUpdate = ((function (x14823_14873){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14823_14873))
;

x14823_14873.isMounted = ((function (x14823_14873){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14823_14873))
;

x14823_14873.componentWillMount = ((function (x14823_14873){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14823_14873))
;

x14823_14873.render = ((function (x14823_14873){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14828 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14829 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14830 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14831 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14832 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__14833 = om.next.props(this$);
var map__14833__$1 = ((((!((map__14833 == null)))?((((map__14833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14833):map__14833);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,cljs.core.cst$kw$name);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,cljs.core.cst$kw$cards);
var map__14834 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14834__$1 = ((((!((map__14834 == null)))?((((map__14834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14834):map__14834);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14834__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14834__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14834__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__14838 = {"className": "lane", "onDragOver": ((function (map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function (e){
return e.preventDefault();
});})(map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
, "onDrop": ((function (map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function (e){
e.preventDefault();

var G__14842 = card_drag_fns;
var G__14842__$1 = (((G__14842 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__14842));
var G__14842__$2 = (((G__14842__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14842__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__14842__$2;
});})(map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
};
var G__14839 = om.util.force_children((function (){var G__14843 = {"className": "lane-title"};
var G__14844 = om.util.force_children((function (){var G__14846 = {"className": "text"};
var G__14847 = om.util.force_children(name);
return React.DOM.span(G__14846,G__14847);
})());
var G__14845 = om.util.force_children((function (){var G__14848 = {"className": "count"};
var G__14849 = om.util.force_children(cljs.core.count(cards));
return React.DOM.span(G__14848,G__14849);
})());
return React.DOM.h3(G__14843,G__14844,G__14845);
})());
var G__14840 = om.util.force_children((function (){var G__14850 = {"className": "add"};
var G__14851 = om.util.force_children((function (){var G__14853 = {"onClick": ((function (G__14850,G__14838,G__14839,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function (){
var G__14855 = card_create_fn;
var G__14855__$1 = (((G__14855 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__14855,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__14855__$1;
});})(G__14850,G__14838,G__14839,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
};
var G__14854 = om.util.force_children("+");
return React.DOM.a(G__14853,G__14854);
})());
return React.DOM.div(G__14850,G__14851);
})());
var G__14841 = om.util.force_children((function (){var G__14856 = {"className": "cards"};
var G__14857 = om.util.force_children((function (){var ref = om.next.get_ident(this$);
var drag_fns = (function (){var G__14858 = card_drag_fns;
var G__14858__$1 = (((G__14858 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14858,ref,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function (p__14859){
var vec__14860 = p__14859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,ref)], null);
});})(G__14858,ref,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
,G__14858));
var G__14858__$2 = (((G__14858__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14858__$1));
return G__14858__$2;
})();
var iter__5758__auto__ = ((function (ref,drag_fns,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function kanban$components$lane$iter__14861(s__14862){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873){
return (function (){
var s__14862__$1 = s__14862;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14862__$1);
if(temp__4425__auto__){
var s__14862__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14862__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__14862__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__14864 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__14863 = (0);
while(true){
if((i__14863 < size__5757__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__14863);
cljs.core.chunk_append(b__14864,(function (){var G__14869 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__14869) : kanban.components.card.card.call(null,G__14869));
})());

var G__14874 = (i__14863 + (1));
i__14863 = G__14874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14864),kanban$components$lane$iter__14861(cljs.core.chunk_rest(s__14862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14864),null);
}
} else {
var c = cljs.core.first(s__14862__$2);
return cljs.core.cons((function (){var G__14870 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__14870) : kanban.components.card.card.call(null,G__14870));
})(),kanban$components$lane$iter__14861(cljs.core.rest(s__14862__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
,null,null));
});})(ref,drag_fns,G__14856,G__14838,G__14839,G__14840,map__14833,map__14833__$1,name,cards,map__14834,map__14834__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14828,_STAR_depth_STAR_14829,_STAR_shared_STAR_14830,_STAR_instrument_STAR_14831,_STAR_parent_STAR_14832,this$,this__12854__auto__,x14823_14873))
;
return iter__5758__auto__(cards);
})());
return React.DOM.div(G__14856,G__14857);
})());
return React.DOM.div(G__14838,G__14839,G__14840,G__14841);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14832;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14831;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14830;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14829;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14828;
}});})(x14823_14873))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x14871_14875 = kanban.components.lane.Lane;
x14871_14875.om$next$Ident$ = true;

x14871_14875.om$next$Ident$ident$arity$2 = ((function (x14871_14875){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14871_14875))
;

x14871_14875.om$next$IQuery$ = true;

x14871_14875.om$next$IQuery$query$arity$1 = ((function (x14871_14875){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x14871_14875))
;


var x14872_14876 = kanban.components.lane.Lane.prototype;
x14872_14876.om$next$Ident$ = true;

x14872_14876.om$next$Ident$ident$arity$2 = ((function (x14872_14876){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14872_14876))
;

x14872_14876.om$next$IQuery$ = true;

x14872_14876.om$next$IQuery$query$arity$1 = ((function (x14872_14876){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x14872_14876))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
