// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.board');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.lane');
/**
 * @constructor
 */
kanban.components.board.Board = (function kanban$components$board$Board(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.board.Board.prototype = goog.object.clone(React.Component.prototype);

var x14883_14947 = kanban.components.board.Board.prototype;
x14883_14947.componentWillUpdate = ((function (x14883_14947){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14883_14947))
;

x14883_14947.shouldComponentUpdate = ((function (x14883_14947){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14886 = this__12855__auto__.state;
var G__14887 = "omcljs$state";
return goog.object.get(G__14886,G__14887);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14883_14947))
;

x14883_14947.componentWillUnmount = ((function (x14883_14947){
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
});})(x14883_14947))
;

x14883_14947.componentDidUpdate = ((function (x14883_14947){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14883_14947))
;

x14883_14947.isMounted = ((function (x14883_14947){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14883_14947))
;

x14883_14947.componentWillMount = ((function (x14883_14947){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14883_14947))
;

x14883_14947.render = ((function (x14883_14947){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14888 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14889 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14890 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14891 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14892 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__14893 = om.next.props(this$);
var map__14893__$1 = ((((!((map__14893 == null)))?((((map__14893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14893):map__14893);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14893__$1,cljs.core.cst$kw$name);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14893__$1,cljs.core.cst$kw$description);
var lanes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14893__$1,cljs.core.cst$kw$lanes);
var map__14894 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14894__$1 = ((((!((map__14894 == null)))?((((map__14894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14894):map__14894);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,cljs.core.cst$kw$dragging);
var edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,cljs.core.cst$kw$edit_DASH_fn);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14894__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__14897 = {"className": "board"};
var G__14898 = om.util.force_children((function (){var G__14903 = {"className": "board-title"};
var G__14904 = om.util.force_children(name);
var G__14905 = om.util.force_children(" Board ");
var G__14906 = om.util.force_children((function (){var G__14908 = {"className": "board-edit", "onClick": ((function (G__14903,G__14904,G__14905,G__14897,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947){
return (function (){
var G__14910 = om.next.get_ident(this$);
return (edit_fn.cljs$core$IFn$_invoke$arity$1 ? edit_fn.cljs$core$IFn$_invoke$arity$1(G__14910) : edit_fn.call(null,G__14910));
});})(G__14903,G__14904,G__14905,G__14897,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947))
};
var G__14909 = om.util.force_children("Edit");
return React.DOM.a(G__14908,G__14909);
})());
return React.DOM.h2(G__14903,G__14904,G__14905,G__14906);
})());
var G__14899 = om.util.force_children((function (){var G__14911 = {"className": "board-description"};
var G__14912 = om.util.force_children(description);
return React.DOM.p(G__14911,G__14912);
})());
var G__14900 = om.util.force_children((cljs.core.truth_(dragging)?(function (){var G__14913 = {"className": "delete", "onDragOver": ((function (G__14897,G__14898,G__14899,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947){
return (function (e){
return e.preventDefault();
});})(G__14897,G__14898,G__14899,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947))
, "onDrop": cljs.core.cst$kw$delete.cljs$core$IFn$_invoke$arity$1(card_drag_fns)};
var G__14914 = om.util.force_children("Delete");
return React.DOM.div(G__14913,G__14914);
})():null));
var G__14901 = om.util.force_children((function (){var G__14915 = {"className": "lanes"};
var G__14916 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__14915,G__14897,G__14898,G__14899,G__14900,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947){
return (function kanban$components$board$iter__14917(s__14918){
return (new cljs.core.LazySeq(null,((function (G__14915,G__14897,G__14898,G__14899,G__14900,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947){
return (function (){
var s__14918__$1 = s__14918;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14918__$1);
if(temp__4425__auto__){
var s__14918__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14918__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__14918__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__14920 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__14919 = (0);
while(true){
if((i__14919 < size__5757__auto__)){
var l = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__14919);
cljs.core.chunk_append(b__14920,(function (){var G__14925 = om.next.computed(l,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card_DASH_create_DASH_fn,card_create_fn,cljs.core.cst$kw$card_DASH_drag_DASH_fns,card_drag_fns,cljs.core.cst$kw$card_DASH_edit_DASH_fn,card_edit_fn], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__14925) : kanban.components.lane.lane.call(null,G__14925));
})());

var G__14948 = (i__14919 + (1));
i__14919 = G__14948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14920),kanban$components$board$iter__14917(cljs.core.chunk_rest(s__14918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14920),null);
}
} else {
var l = cljs.core.first(s__14918__$2);
return cljs.core.cons((function (){var G__14926 = om.next.computed(l,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card_DASH_create_DASH_fn,card_create_fn,cljs.core.cst$kw$card_DASH_drag_DASH_fns,card_drag_fns,cljs.core.cst$kw$card_DASH_edit_DASH_fn,card_edit_fn], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__14926) : kanban.components.lane.lane.call(null,G__14926));
})(),kanban$components$board$iter__14917(cljs.core.rest(s__14918__$2)));
}
} else {
return null;
}
break;
}
});})(G__14915,G__14897,G__14898,G__14899,G__14900,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947))
,null,null));
});})(G__14915,G__14897,G__14898,G__14899,G__14900,map__14893,map__14893__$1,name,description,lanes,map__14894,map__14894__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_14888,_STAR_depth_STAR_14889,_STAR_shared_STAR_14890,_STAR_instrument_STAR_14891,_STAR_parent_STAR_14892,this$,this__12854__auto__,x14883_14947))
;
return iter__5758__auto__(lanes);
})());
return React.DOM.div(G__14915,G__14916);
})());
var G__14902 = om.util.force_children((function (){var G__14927 = {"className": "help"};
var G__14928 = om.util.force_children((function (){var G__14930 = {"className": "help-title"};
var G__14931 = om.util.force_children("Help");
return React.DOM.h3(G__14930,G__14931);
})());
var G__14929 = om.util.force_children((function (){var G__14932 = {"className": "instructions"};
var G__14933 = om.util.force_children((function (){var G__14937 = null;
var G__14938 = om.util.force_children("Move cards between lanes by dragging them");
return React.DOM.li(G__14937,G__14938);
})());
var G__14934 = om.util.force_children((function (){var G__14939 = null;
var G__14940 = om.util.force_children("Create new cards by clicking on the + in a lane");
return React.DOM.li(G__14939,G__14940);
})());
var G__14935 = om.util.force_children((function (){var G__14941 = null;
var G__14942 = om.util.force_children("Delete cards by dragging them to the delete area");
return React.DOM.li(G__14941,G__14942);
})());
var G__14936 = om.util.force_children((function (){var G__14943 = null;
var G__14944 = om.util.force_children("Edit cards by clicking on them");
return React.DOM.li(G__14943,G__14944);
})());
return React.DOM.ul(G__14932,G__14933,G__14934,G__14935,G__14936);
})());
return React.DOM.div(G__14927,G__14928,G__14929);
})());
return React.DOM.div(G__14897,G__14898,G__14899,G__14900,G__14901,G__14902);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14892;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14891;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14890;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14889;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14888;
}});})(x14883_14947))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x14945_14949 = kanban.components.board.Board;
x14945_14949.om$next$Ident$ = true;

x14945_14949.om$next$Ident$ident$arity$2 = ((function (x14945_14949){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14945_14949))
;

x14945_14949.om$next$IQuery$ = true;

x14945_14949.om$next$IQuery$query$arity$1 = ((function (x14945_14949){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null)], null);
});})(x14945_14949))
;


var x14946_14950 = kanban.components.board.Board.prototype;
x14946_14950.om$next$Ident$ = true;

x14946_14950.om$next$Ident$ident$arity$2 = ((function (x14946_14950){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14946_14950))
;

x14946_14950.om$next$IQuery$ = true;

x14946_14950.om$next$IQuery$query$arity$1 = ((function (x14946_14950){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null)], null);
});})(x14946_14950))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__14951_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__14951_SHARP_)], null);
})], null));
