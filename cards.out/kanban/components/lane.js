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

var x22245_22295 = kanban.components.lane.Lane.prototype;
x22245_22295.componentWillUpdate = ((function (x22245_22295){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x22245_22295))
;

x22245_22295.shouldComponentUpdate = ((function (x22245_22295){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__22248 = this__12403__auto__.state;
var G__22249 = "omcljs$state";
return goog.object.get(G__22248,G__22249);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x22245_22295))
;

x22245_22295.componentWillUnmount = ((function (x22245_22295){
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
});})(x22245_22295))
;

x22245_22295.componentDidUpdate = ((function (x22245_22295){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x22245_22295))
;

x22245_22295.isMounted = ((function (x22245_22295){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22245_22295))
;

x22245_22295.componentWillMount = ((function (x22245_22295){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x22245_22295))
;

x22245_22295.render = ((function (x22245_22295){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22250 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22251 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22252 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22253 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22254 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22255 = om.next.props(this$);
var map__22255__$1 = ((((!((map__22255 == null)))?((((map__22255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22255):map__22255);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22255__$1,cljs.core.cst$kw$name);
var cards__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22255__$1,cljs.core.cst$kw$cards);
var map__22256 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__22256__$1 = ((((!((map__22256 == null)))?((((map__22256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22256):map__22256);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22256__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22256__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22256__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__22260 = {"className": "lane", "onDragOver": ((function (map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function (e){
return e.preventDefault();
});})(map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
, "onDrop": ((function (map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function (e){
e.preventDefault();

var G__22264 = card_drag_fns;
var G__22264__$1 = (((G__22264 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__22264));
var G__22264__$2 = (((G__22264__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22264__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__22264__$2;
});})(map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
};
var G__22261 = (function (){var G__22265 = {"className": "lane-title"};
var G__22266 = (function (){var G__22268 = {"className": "text"};
var G__22269 = name;
return React.DOM.span(G__22268,G__22269);
})();
var G__22267 = (function (){var G__22270 = {"className": "count"};
var G__22271 = cljs.core.count(cards__$1);
return React.DOM.span(G__22270,G__22271);
})();
return React.DOM.h3(G__22265,G__22266,G__22267);
})();
var G__22262 = (function (){var G__22272 = {"className": "add"};
var G__22273 = (function (){var G__22275 = {"onClick": ((function (G__22272,G__22260,G__22261,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function (){
var G__22277 = card_create_fn;
var G__22277__$1 = (((G__22277 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__22277,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_ident(this$)], null)));
return G__22277__$1;
});})(G__22272,G__22260,G__22261,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
};
var G__22276 = "+";
return React.DOM.a(G__22275,G__22276);
})();
return React.DOM.div(G__22272,G__22273);
})();
var G__22263 = (function (){var G__22278 = {"className": "cards"};
var G__22279 = (function (){var ref = om.next.get_ident(this$);
var drag_fns = (function (){var G__22280 = card_drag_fns;
var G__22280__$1 = (((G__22280 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__22280,ref,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function (p__22281){
var vec__22282 = p__22281;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,ref)], null);
});})(G__22280,ref,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
,G__22280));
var G__22280__$2 = (((G__22280__$1 == null))?null:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22280__$1));
return G__22280__$2;
})();
var iter__5940__auto__ = ((function (ref,drag_fns,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function kanban$components$lane$iter__22283(s__22284){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295){
return (function (){
var s__22284__$1 = s__22284;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22284__$1);
if(temp__4425__auto__){
var s__22284__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22284__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22284__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22286 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22285 = (0);
while(true){
if((i__22285 < size__5939__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22285);
cljs.core.chunk_append(b__22286,(function (){var G__22291 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__22291) : kanban.components.card.card.call(null,G__22291));
})());

var G__22296 = (i__22285 + (1));
i__22285 = G__22296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22286),kanban$components$lane$iter__22283(cljs.core.chunk_rest(s__22284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22286),null);
}
} else {
var c = cljs.core.first(s__22284__$2);
return cljs.core.cons((function (){var G__22292 = om.next.computed(c,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$drag_DASH_fns,drag_fns,cljs.core.cst$kw$activate_DASH_fn,card_edit_fn], null));
return (kanban.components.card.card.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.card.cljs$core$IFn$_invoke$arity$1(G__22292) : kanban.components.card.card.call(null,G__22292));
})(),kanban$components$lane$iter__22283(cljs.core.rest(s__22284__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
,null,null));
});})(ref,drag_fns,G__22278,G__22260,G__22261,G__22262,map__22255,map__22255__$1,name,cards__$1,map__22256,map__22256__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_22250,_STAR_depth_STAR_22251,_STAR_shared_STAR_22252,_STAR_instrument_STAR_22253,_STAR_parent_STAR_22254,this$,x22245_22295))
;
return iter__5940__auto__(cards__$1);
})();
return React.DOM.div(G__22278,G__22279);
})();
return React.DOM.div(G__22260,G__22261,G__22262,G__22263);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22254;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22253;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22252;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22251;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22250;
}});})(x22245_22295))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x22293_22297 = kanban.components.lane.Lane;
x22293_22297.om$next$Ident$ = true;

x22293_22297.om$next$Ident$ident$arity$2 = ((function (x22293_22297){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22293_22297))
;

x22293_22297.om$next$IQuery$ = true;

x22293_22297.om$next$IQuery$query$arity$1 = ((function (x22293_22297){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x22293_22297))
;


var x22294_22298 = kanban.components.lane.Lane.prototype;
x22294_22298.om$next$Ident$ = true;

x22294_22298.om$next$Ident$ident$arity$2 = ((function (x22294_22298){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22294_22298))
;

x22294_22298.om$next$IQuery$ = true;

x22294_22298.om$next$IQuery$query$arity$1 = ((function (x22294_22298){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null)], null);
});})(x22294_22298))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
