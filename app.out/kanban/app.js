// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.app');
goog.require('cljs.core');
goog.require('kanban.components.card');
goog.require('om.dom');
goog.require('kanban.parsing.boards');
goog.require('kanban.components.boards_menu');
goog.require('kanban.components.board_dialog');
goog.require('kanban.components.about');
goog.require('kanban.components.board');
goog.require('kanban.reconciler');
goog.require('kanban.components.lane');
goog.require('kanban.components.card_dialog');
goog.require('om.next');
cljs.core.enable_console_print_BANG_();
/**
 * @constructor
 */
kanban.app.App = (function kanban$app$App(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.app.App.prototype = goog.object.clone(React.Component.prototype);

var x15232_15268 = kanban.app.App.prototype;
x15232_15268.componentWillUpdate = ((function (x15232_15268){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x15232_15268))
;

x15232_15268.shouldComponentUpdate = ((function (x15232_15268){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15235 = this__12855__auto__.state;
var G__15236 = "omcljs$state";
return goog.object.get(G__15235,G__15236);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x15232_15268))
;

x15232_15268.componentWillUnmount = ((function (x15232_15268){
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
});})(x15232_15268))
;

x15232_15268.componentDidUpdate = ((function (x15232_15268){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x15232_15268))
;

x15232_15268.isMounted = ((function (x15232_15268){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15232_15268))
;

x15232_15268.componentWillMount = ((function (x15232_15268){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x15232_15268))
;

x15232_15268.board_activate = ((function (x15232_15268){
return (function (ref){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_activate),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref),cljs.core._conj(cljs.core.List.EMPTY,ref)))))))))))))));
});})(x15232_15268))
;

x15232_15268.board_create = ((function (x15232_15268){
return (function (){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_create_DASH_board))))))))));
});})(x15232_15268))
;

x15232_15268.board_update = ((function (x15232_15268){
return (function (board,data){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$board),cljs.core._conj(cljs.core.List.EMPTY,board),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$data),cljs.core._conj(cljs.core.List.EMPTY,data)], 0)))))))))))))));
});})(x15232_15268))
;

x15232_15268.board_edit = ((function (x15232_15268){
return (function (board){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_edit),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$board),cljs.core._conj(cljs.core.List.EMPTY,board)))))))))))))));
});})(x15232_15268))
;

x15232_15268.card_drag_start = ((function (x15232_15268){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,lane),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card)], 0)))))))))))))));
});})(x15232_15268))
;

x15232_15268.card_drag_end = ((function (x15232_15268){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
});})(x15232_15268))
;

x15232_15268.card_drag_drop = ((function (x15232_15268){
return (function (lane){
var this$ = this;
var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_move_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(source)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$from),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$to),cljs.core._conj(cljs.core.List.EMPTY,lane)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x15232_15268))
;

x15232_15268.card_drag_delete = ((function (x15232_15268){
return (function (){
var this$ = this;
var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_delete_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(source)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1(source))], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x15232_15268))
;

x15232_15268.card_create = ((function (x15232_15268){
return (function (lane){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_create_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,lane)))))))))))))));
});})(x15232_15268))
;

x15232_15268.card_edit = ((function (x15232_15268){
return (function (card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_edit),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card)))))))))))))));
});})(x15232_15268))
;

x15232_15268.card_update = ((function (x15232_15268){
return (function (card,data){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$data),cljs.core._conj(cljs.core.List.EMPTY,data)], 0)))))))))))))));
});})(x15232_15268))
;

x15232_15268.render = ((function (x15232_15268){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_15237 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15238 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15239 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15240 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15241 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var G__15242 = {"className": "app"};
var G__15243 = om.util.force_children((function (){var G__15245 = {"className": "header"};
var G__15246 = om.util.force_children((function (){var G__15250 = null;
var G__15251 = om.util.force_children((function (){var G__15252 = {"onClick": ((function (G__15250,G__15245,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (){
return this$.board_activate(null);
});})(G__15250,G__15245,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
};
var G__15253 = om.util.force_children("Om Next Kanban Demo");
return React.DOM.a(G__15252,G__15253);
})());
return React.DOM.h1(G__15250,G__15251);
})());
var G__15247 = om.util.force_children((function (){var G__15255 = null;
var G__15256 = om.util.force_children((function (){var props = cljs.core.select_keys(om.next.props(this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards], null));
var G__15257 = om.next.computed(props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$activate_DASH_fn,((function (props,G__15255,G__15245,G__15246,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15215_SHARP_){
return this$.board_activate(p1__15215_SHARP_);
});})(props,G__15255,G__15245,G__15246,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$create_DASH_fn,((function (props,G__15255,G__15245,G__15246,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (){
return this$.board_create();
});})(props,G__15255,G__15245,G__15246,G__15242,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
], null));
return (kanban.components.boards_menu.boards_menu.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.boards_menu.cljs$core$IFn$_invoke$arity$1(G__15257) : kanban.components.boards_menu.boards_menu.call(null,G__15257));
})());
return React.DOM.nav(G__15255,G__15256);
})());
return React.DOM.header(G__15245,G__15246,G__15247);
})());
var G__15244 = om.util.force_children((function (){var G__15259 = null;
var G__15260 = om.util.force_children((function (){var temp__4423__auto__ = cljs.core.cst$kw$boards_SLASH_active.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var active_board = temp__4423__auto__;
var G__15263 = om.next.computed(active_board,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$dragging,cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$edit_DASH_fn,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15216_SHARP_){
return this$.board_edit(p1__15216_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$card_DASH_create_DASH_fn,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15217_SHARP_){
return this$.card_create(p1__15217_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$card_DASH_edit_DASH_fn,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15218_SHARP_){
return this$.card_edit(p1__15218_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15219_SHARP_,p2__15220_SHARP_){
return this$.card_drag_start(p1__15219_SHARP_,p2__15220_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$end,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15221_SHARP_,p2__15222_SHARP_){
return this$.card_drag_end(p1__15221_SHARP_,p2__15222_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$drop,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15223_SHARP_){
return this$.card_drag_drop(p1__15223_SHARP_);
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$delete,((function (active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (){
return this$.card_drag_delete();
});})(active_board,temp__4423__auto__,G__15259,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
], null)], null));
return (kanban.components.board.board.cljs$core$IFn$_invoke$arity$1 ? kanban.components.board.board.cljs$core$IFn$_invoke$arity$1(G__15263) : kanban.components.board.board.call(null,G__15263));
} else {
return kanban.components.about.about();
}
})());
var G__15261 = om.util.force_children((function (){var temp__4423__auto__ = cljs.core.cst$kw$boards_SLASH_editing.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var board = temp__4423__auto__;
var G__15264 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lanes,cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$close_DASH_fn,((function (board,temp__4423__auto__,G__15259,G__15260,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (){
return this$.board_edit(null);
});})(board,temp__4423__auto__,G__15259,G__15260,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$update_DASH_fn,((function (board,temp__4423__auto__,G__15259,G__15260,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15224_SHARP_,p2__15225_SHARP_){
return this$.board_update(p1__15224_SHARP_,p2__15225_SHARP_);
});})(board,temp__4423__auto__,G__15259,G__15260,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
], null));
return (kanban.components.board_dialog.board_dialog.cljs$core$IFn$_invoke$arity$1 ? kanban.components.board_dialog.board_dialog.cljs$core$IFn$_invoke$arity$1(G__15264) : kanban.components.board_dialog.board_dialog.call(null,G__15264));
} else {
return null;
}
})());
var G__15262 = om.util.force_children((function (){var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_editing.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var card = temp__4423__auto__;
var G__15265 = om.next.computed(card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$users,cljs.core.cst$kw$users.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$close_DASH_fn,((function (card,temp__4423__auto__,G__15259,G__15260,G__15261,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (){
return this$.card_edit(null);
});})(card,temp__4423__auto__,G__15259,G__15260,G__15261,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
,cljs.core.cst$kw$update_DASH_fn,((function (card,temp__4423__auto__,G__15259,G__15260,G__15261,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268){
return (function (p1__15226_SHARP_,p2__15227_SHARP_){
return this$.card_update(p1__15226_SHARP_,p2__15227_SHARP_);
});})(card,temp__4423__auto__,G__15259,G__15260,G__15261,G__15242,G__15243,_STAR_reconciler_STAR_15237,_STAR_depth_STAR_15238,_STAR_shared_STAR_15239,_STAR_instrument_STAR_15240,_STAR_parent_STAR_15241,this$,this__12854__auto__,x15232_15268))
], null));
return (kanban.components.card_dialog.card_dialog.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card_dialog.card_dialog.cljs$core$IFn$_invoke$arity$1(G__15265) : kanban.components.card_dialog.card_dialog.call(null,G__15265));
} else {
return null;
}
})());
return React.DOM.main(G__15259,G__15260,G__15261,G__15262);
})());
return React.DOM.div(G__15242,G__15243,G__15244);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15241;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15240;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15239;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15238;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15237;
}});})(x15232_15268))
;


kanban.app.App.prototype.constructor = kanban.app.App;

kanban.app.App.prototype.om$isComponent = true;

var x15266_15269 = kanban.app.App;
x15266_15269.om$next$IQuery$ = true;

x15266_15269.om$next$IQuery$query$arity$1 = ((function (x15266_15269){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_active,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_editing,om.next.get_query(kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null),cljs.core.cst$kw$cards_SLASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards_SLASH_editing,om.next.get_query(kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$users,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x15266_15269))
;


var x15267_15270 = kanban.app.App.prototype;
x15267_15270.om$next$IQuery$ = true;

x15267_15270.om$next$IQuery$query$arity$1 = ((function (x15267_15270){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_active,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_editing,om.next.get_query(kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null),cljs.core.cst$kw$cards_SLASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards_SLASH_editing,om.next.get_query(kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$users,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x15267_15270))
;


kanban.app.App.cljs$lang$type = true;

kanban.app.App.cljs$lang$ctorStr = "kanban.app/App";

kanban.app.App.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.app/App");
});
kanban.app.run = (function kanban$app$run(){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(kanban.reconciler.reconciler,kanban.app.App,document.getElementById("app"));
});
