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
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.board.Board.prototype = goog.object.clone(React.Component.prototype);

var x13765_13821 = kanban.components.board.Board.prototype;
x13765_13821.componentWillUpdate = ((function (x13765_13821){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13765_13821))
;

x13765_13821.shouldComponentUpdate = ((function (x13765_13821){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13768 = this__12403__auto__.state;
var G__13769 = "omcljs$state";
return goog.object.get(G__13768,G__13769);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13765_13821))
;

x13765_13821.componentWillUnmount = ((function (x13765_13821){
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
});})(x13765_13821))
;

x13765_13821.componentDidUpdate = ((function (x13765_13821){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13765_13821))
;

x13765_13821.isMounted = ((function (x13765_13821){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13765_13821))
;

x13765_13821.componentWillMount = ((function (x13765_13821){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13765_13821))
;

x13765_13821.render = ((function (x13765_13821){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13770 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13771 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13772 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13773 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13774 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13775 = om.next.props(this$);
var map__13775__$1 = ((((!((map__13775 == null)))?((((map__13775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13775):map__13775);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13775__$1,cljs.core.cst$kw$name);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13775__$1,cljs.core.cst$kw$description);
var lanes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13775__$1,cljs.core.cst$kw$lanes);
var map__13776 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13776__$1 = ((((!((map__13776 == null)))?((((map__13776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13776):map__13776);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$dragging);
var edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$edit_DASH_fn);
var card_create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$card_DASH_create_DASH_fn);
var card_drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$card_DASH_drag_DASH_fns);
var card_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$card_DASH_edit_DASH_fn);
var G__13779 = {"className": "board"};
var G__13780 = (function (){var G__13785 = {"className": "board-title"};
var G__13786 = name;
var G__13787 = " Board ";
var G__13788 = (function (){var G__13790 = {"className": "board-edit", "onClick": ((function (G__13785,G__13786,G__13787,G__13779,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821){
return (function (){
var G__13792 = om.next.get_ident(this$);
return (edit_fn.cljs$core$IFn$_invoke$arity$1 ? edit_fn.cljs$core$IFn$_invoke$arity$1(G__13792) : edit_fn.call(null,G__13792));
});})(G__13785,G__13786,G__13787,G__13779,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821))
};
var G__13791 = "Edit";
return React.DOM.a(G__13790,G__13791);
})();
return React.DOM.h2(G__13785,G__13786,G__13787,G__13788);
})();
var G__13781 = (function (){var G__13793 = {"className": "board-description"};
var G__13794 = description;
return React.DOM.p(G__13793,G__13794);
})();
var G__13782 = (cljs.core.truth_(dragging)?(function (){var G__13795 = {"className": "delete", "onDragOver": ((function (G__13779,G__13780,G__13781,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821){
return (function (e){
return e.preventDefault();
});})(G__13779,G__13780,G__13781,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821))
, "onDrop": cljs.core.cst$kw$delete.cljs$core$IFn$_invoke$arity$1(card_drag_fns)};
var G__13796 = "Delete";
return React.DOM.div(G__13795,G__13796);
})():null);
var G__13783 = (function (){var G__13797 = {"className": "lanes"};
var G__13798 = (function (){var iter__5940__auto__ = ((function (G__13797,G__13779,G__13780,G__13781,G__13782,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821){
return (function kanban$components$board$iter__13799(s__13800){
return (new cljs.core.LazySeq(null,((function (G__13797,G__13779,G__13780,G__13781,G__13782,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821){
return (function (){
var s__13800__$1 = s__13800;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13800__$1);
if(temp__4425__auto__){
var s__13800__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13800__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13800__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13802 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13801 = (0);
while(true){
if((i__13801 < size__5939__auto__)){
var l = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13801);
cljs.core.chunk_append(b__13802,(function (){var G__13807 = om.next.computed(l,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card_DASH_create_DASH_fn,card_create_fn,cljs.core.cst$kw$card_DASH_drag_DASH_fns,card_drag_fns,cljs.core.cst$kw$card_DASH_edit_DASH_fn,card_edit_fn], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__13807) : kanban.components.lane.lane.call(null,G__13807));
})());

var G__13822 = (i__13801 + (1));
i__13801 = G__13822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13802),kanban$components$board$iter__13799(cljs.core.chunk_rest(s__13800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13802),null);
}
} else {
var l = cljs.core.first(s__13800__$2);
return cljs.core.cons((function (){var G__13808 = om.next.computed(l,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card_DASH_create_DASH_fn,card_create_fn,cljs.core.cst$kw$card_DASH_drag_DASH_fns,card_drag_fns,cljs.core.cst$kw$card_DASH_edit_DASH_fn,card_edit_fn], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__13808) : kanban.components.lane.lane.call(null,G__13808));
})(),kanban$components$board$iter__13799(cljs.core.rest(s__13800__$2)));
}
} else {
return null;
}
break;
}
});})(G__13797,G__13779,G__13780,G__13781,G__13782,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821))
,null,null));
});})(G__13797,G__13779,G__13780,G__13781,G__13782,map__13775,map__13775__$1,name,description,lanes,map__13776,map__13776__$1,dragging,edit_fn,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_13770,_STAR_depth_STAR_13771,_STAR_shared_STAR_13772,_STAR_instrument_STAR_13773,_STAR_parent_STAR_13774,this$,x13765_13821))
;
return iter__5940__auto__(lanes);
})();
return React.DOM.div(G__13797,G__13798);
})();
var G__13784 = (function (){var G__13809 = {"className": "help"};
var G__13810 = (function (){var G__13812 = {"className": "help-title"};
var G__13813 = "Help";
return React.DOM.h3(G__13812,G__13813);
})();
var G__13811 = (function (){var G__13814 = {"className": "instructions"};
var G__13815 = React.DOM.li(null,"Move cards between lanes by dragging them");
var G__13816 = React.DOM.li(null,"Create new cards by clicking on the + in a lane");
var G__13817 = React.DOM.li(null,"Delete cards by dragging them to the delete area");
var G__13818 = React.DOM.li(null,"Edit cards by clicking on them");
return React.DOM.ul(G__13814,G__13815,G__13816,G__13817,G__13818);
})();
return React.DOM.div(G__13809,G__13810,G__13811);
})();
return React.DOM.div(G__13779,G__13780,G__13781,G__13782,G__13783,G__13784);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13774;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13773;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13772;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13771;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13770;
}});})(x13765_13821))
;


kanban.components.board.Board.prototype.constructor = kanban.components.board.Board;

kanban.components.board.Board.prototype.om$isComponent = true;

var x13819_13823 = kanban.components.board.Board;
x13819_13823.om$next$Ident$ = true;

x13819_13823.om$next$Ident$ident$arity$2 = ((function (x13819_13823){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13819_13823))
;

x13819_13823.om$next$IQuery$ = true;

x13819_13823.om$next$IQuery$query$arity$1 = ((function (x13819_13823){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null)], null);
});})(x13819_13823))
;


var x13820_13824 = kanban.components.board.Board.prototype;
x13820_13824.om$next$Ident$ = true;

x13820_13824.om$next$Ident$ident$arity$2 = ((function (x13820_13824){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13820_13824))
;

x13820_13824.om$next$IQuery$ = true;

x13820_13824.om$next$IQuery$query$arity$1 = ((function (x13820_13824){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null)], null);
});})(x13820_13824))
;


kanban.components.board.Board.cljs$lang$type = true;

kanban.components.board.Board.cljs$lang$ctorStr = "kanban.components.board/Board";

kanban.components.board.Board.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.board/Board");
});
kanban.components.board.board = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.board.Board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__13825_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13825_SHARP_)], null);
})], null));
