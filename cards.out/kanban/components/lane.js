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

var x23324_23374 = kanban.components.lane.Lane.prototype;
x23324_23374.componentWillUpdate = ((function (x23324_23374){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x23324_23374))
;

x23324_23374.shouldComponentUpdate = ((function (x23324_23374){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23327 = this__12855__auto__.state;
var G__23328 = "omcljs$state";
return goog.object.get(G__23327,G__23328);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x23324_23374))
;

x23324_23374.componentWillUnmount = ((function (x23324_23374){
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
});})(x23324_23374))
;

x23324_23374.componentDidUpdate = ((function (x23324_23374){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x23324_23374))
;

x23324_23374.isMounted = ((function (x23324_23374){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23324_23374))
;

x23324_23374.componentWillMount = ((function (x23324_23374){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x23324_23374))
;

x23324_23374.render = ((function (x23324_23374){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_23329 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23330 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23331 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23332 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23333 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__23334 = om.next.props(this$);
var map__23334__$1 = ((((!((map__23334 == null)))?((((map__23334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23334):map__23334);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23334__$1,cljs.core.cst$kw$name);
var cards__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23334__$1,cljs.core.cst$kw$cards);
var map__23335 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__23335__$1 = ((((!((map__23335 == null)))?((((map__23335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23335):map__23335);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__23339 = {"className": "lane", "onDragOver": ((function (map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function (e){
return e.preventDefault();
});})(map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
, "onDrop": ((function (map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function (e){
e.preventDefault();

var G__23343 = card_drag_fns;
var G__23343__$1 = (((G__23343 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__23343));
var G__23343__$2 = (((G__23343__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23343__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__23343__$2;
});})(map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
};
var G__23340 = om.util.force_children((function (){var G__23344 = {"className": "lane-title"};
var G__23345 = om.util.force_children((function (){var G__23347 = {"className": "text"};
var G__23348 = om.util.force_children(name);
return React.DOM.span(G__23347,G__23348);
})());
var G__23346 = om.util.force_children((function (){var G__23349 = {"className": "count"};
var G__23350 = om.util.force_children(cljs.core.count(cards__$1));
return React.DOM.span(G__23349,G__23350);
})());
return React.DOM.h3(G__23344,G__23345,G__23346);
})());
var G__23341 = om.util.force_children((function (){var G__23351 = {"className": "add"};
var G__23352 = om.util.force_children((function (){var G__23354 = {"onClick": ((function (G__23351,G__23339,G__23340,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function (){
var G__23356 = card_create_fn;
var G__23356__$1 = (((G__23356 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__23356__$1;
});})(G__23351,G__23339,G__23340,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
};
var G__23355 = om.util.force_children("+");
return React.DOM.a(G__23354,G__23355);
})());
return React.DOM.div(G__23351,G__23352);
})());
var G__23342 = om.util.force_children((function (){var G__23357 = {"className": "cards"};
var G__23358 = om.util.force_children((function (){var ref = om.next.get_ident(this$);
var drag_fns = (function (){var G__23359 = card_drag_fns;
var G__23359__$1 = (((G__23359 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23359,ref,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function (p__23360){
var vec__23361 = p__23360;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23361,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,ref)], null);
});})(G__23359,ref,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
,G__23359));
var G__23359__$2 = (((G__23359__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23359__$1));
return G__23359__$2;
})();
var iter__5758__auto__ = ((function (ref,drag_fns,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function kanban$components$lane$iter__23362(s__23363){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374){
return (function (){
var s__23363__$1 = s__23363;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23363__$1);
if(temp__4425__auto__){
var s__23363__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23363__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23363__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23365 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23364 = (0);
while(true){
if((i__23364 < size__5757__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23364);
cljs.core.chunk_append(b__23365,(function (){var G__23370 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__23370) : kanban.components.card.card.call(null,G__23370));
})());

var G__23375 = (i__23364 + (1));
i__23364 = G__23375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23365),kanban$components$lane$iter__23362(cljs.core.chunk_rest(s__23363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23365),null);
}
} else {
var c = cljs.core.first(s__23363__$2);
return cljs.core.cons((function (){var G__23371 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__23371) : kanban.components.card.card.call(null,G__23371));
})(),kanban$components$lane$iter__23362(cljs.core.rest(s__23363__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
,null,null));
});})(ref,drag_fns,G__23357,G__23339,G__23340,G__23341,map__23334,map__23334__$1,name,cards__$1,map__23335,map__23335__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_23329,_STAR_depth_STAR_23330,_STAR_shared_STAR_23331,_STAR_instrument_STAR_23332,_STAR_parent_STAR_23333,this$,this__12854__auto__,x23324_23374))
;
return iter__5758__auto__(cards__$1);
})());
return React.DOM.div(G__23357,G__23358);
})());
return React.DOM.div(G__23339,G__23340,G__23341,G__23342);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23333;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23332;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23331;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23330;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23329;
}});})(x23324_23374))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x23372_23376 = kanban.components.lane.Lane;
x23372_23376.om$next$Ident$ = true;

x23372_23376.om$next$Ident$ident$arity$2 = ((function (x23372_23376){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x23372_23376))
;

x23372_23376.om$next$IQuery$ = true;

x23372_23376.om$next$IQuery$query$arity$1 = ((function (x23372_23376){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x23372_23376))
;


var x23373_23377 = kanban.components.lane.Lane.prototype;
x23373_23377.om$next$Ident$ = true;

x23373_23377.om$next$Ident$ident$arity$2 = ((function (x23373_23377){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x23373_23377))
;

x23373_23377.om$next$IQuery$ = true;

x23373_23377.om$next$IQuery$query$arity$1 = ((function (x23373_23377){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x23373_23377))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
