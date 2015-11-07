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
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.app.App.prototype = goog.object.clone(React.Component.prototype);

var x13936_13972 = kanban.app.App.prototype;
x13936_13972.componentWillUpdate = ((function (x13936_13972){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13936_13972))
;

x13936_13972.shouldComponentUpdate = ((function (x13936_13972){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13939 = this__12403__auto__.state;
var G__13940 = "omcljs$state";
return goog.object.get(G__13939,G__13940);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13936_13972))
;

x13936_13972.componentWillUnmount = ((function (x13936_13972){
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
});})(x13936_13972))
;

x13936_13972.componentDidUpdate = ((function (x13936_13972){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13936_13972))
;

x13936_13972.isMounted = ((function (x13936_13972){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13936_13972))
;

x13936_13972.componentWillMount = ((function (x13936_13972){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13936_13972))
;

x13936_13972.board_activate = ((function (x13936_13972){
return (function (ref){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_activate),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref),cljs.core._conj(cljs.core.List.EMPTY,ref)))))))))))))));
});})(x13936_13972))
;

x13936_13972.board_create = ((function (x13936_13972){
return (function (){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_create_DASH_board))))))))));
});})(x13936_13972))
;

x13936_13972.board_update = ((function (x13936_13972){
return (function (board,data){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$board),cljs.core._conj(cljs.core.List.EMPTY,board),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$data),cljs.core._conj(cljs.core.List.EMPTY,data)], 0)))))))))))))));
});})(x13936_13972))
;

x13936_13972.board_edit = ((function (x13936_13972){
return (function (board){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$boards_SLASH_edit),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$board),cljs.core._conj(cljs.core.List.EMPTY,board)))))))))))))));
});})(x13936_13972))
;

x13936_13972.card_drag_start = ((function (x13936_13972){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,lane),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card)], 0)))))))))))))));
});})(x13936_13972))
;

x13936_13972.card_drag_end = ((function (x13936_13972){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
});})(x13936_13972))
;

x13936_13972.card_drag_drop = ((function (x13936_13972){
return (function (lane){
var this$ = this;
var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_move_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(source)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$from),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$to),cljs.core._conj(cljs.core.List.EMPTY,lane)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x13936_13972))
;

x13936_13972.card_drag_delete = ((function (x13936_13972){
return (function (){
var this$ = this;
var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_delete_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(source)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1(source))], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_drag),cljs.core._conj(cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x13936_13972))
;

x13936_13972.card_create = ((function (x13936_13972){
return (function (lane){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$lanes_SLASH_create_DASH_card),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$lane),cljs.core._conj(cljs.core.List.EMPTY,lane)))))))))))))));
});})(x13936_13972))
;

x13936_13972.card_edit = ((function (x13936_13972){
return (function (card){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_edit),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card)))))))))))))));
});})(x13936_13972))
;

x13936_13972.card_update = ((function (x13936_13972){
return (function (card,data){
var this$ = this;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cards_SLASH_update),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$card),cljs.core._conj(cljs.core.List.EMPTY,card),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$data),cljs.core._conj(cljs.core.List.EMPTY,data)], 0)))))))))))))));
});})(x13936_13972))
;

x13936_13972.render = ((function (x13936_13972){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13941 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13942 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13943 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13944 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13945 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var G__13946 = {"className": "app"};
var G__13947 = (function (){var G__13949 = {"className": "header"};
var G__13950 = (function (){var G__13954 = null;
var G__13955 = (function (){var G__13956 = {"onClick": ((function (G__13954,G__13949,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (){
return this$.board_activate(null);
});})(G__13954,G__13949,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
};
var G__13957 = "Om Next Kanban Demo";
return React.DOM.a(G__13956,G__13957);
})();
return React.DOM.h1(G__13954,G__13955);
})();
var G__13951 = (function (){var G__13959 = null;
var G__13960 = (function (){var props = cljs.core.select_keys(om.next.props(this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boards], null));
var G__13961 = om.next.computed(props,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$activate_DASH_fn,((function (props,G__13959,G__13949,G__13950,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13919_SHARP_){
return this$.board_activate(p1__13919_SHARP_);
});})(props,G__13959,G__13949,G__13950,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$create_DASH_fn,((function (props,G__13959,G__13949,G__13950,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (){
return this$.board_create();
});})(props,G__13959,G__13949,G__13950,G__13946,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
], null));
return (kanban.components.boards_menu.boards_menu.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.boards_menu.cljs$core$IFn$_invoke$arity$1(G__13961) : kanban.components.boards_menu.boards_menu.call(null,G__13961));
})();
return React.DOM.nav(G__13959,G__13960);
})();
return React.DOM.header(G__13949,G__13950,G__13951);
})();
var G__13948 = (function (){var G__13963 = null;
var G__13964 = (function (){var temp__4423__auto__ = cljs.core.cst$kw$boards_SLASH_active.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var active_board = temp__4423__auto__;
var G__13967 = om.next.computed(active_board,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$dragging,cljs.core.cst$kw$cards_SLASH_dragged.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$edit_DASH_fn,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13920_SHARP_){
return this$.board_edit(p1__13920_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$card_DASH_create_DASH_fn,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13921_SHARP_){
return this$.card_create(p1__13921_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$card_DASH_edit_DASH_fn,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13922_SHARP_){
return this$.card_edit(p1__13922_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13923_SHARP_,p2__13924_SHARP_){
return this$.card_drag_start(p1__13923_SHARP_,p2__13924_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$end,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13925_SHARP_,p2__13926_SHARP_){
return this$.card_drag_end(p1__13925_SHARP_,p2__13926_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$drop,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13927_SHARP_){
return this$.card_drag_drop(p1__13927_SHARP_);
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$delete,((function (active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (){
return this$.card_drag_delete();
});})(active_board,temp__4423__auto__,G__13963,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
], null)], null));
return (kanban.components.board.board.cljs$core$IFn$_invoke$arity$1 ? kanban.components.board.board.cljs$core$IFn$_invoke$arity$1(G__13967) : kanban.components.board.board.call(null,G__13967));
} else {
return kanban.components.about.about();
}
})();
var G__13965 = (function (){var temp__4423__auto__ = cljs.core.cst$kw$boards_SLASH_editing.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var board = temp__4423__auto__;
var G__13968 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lanes,cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$close_DASH_fn,((function (board,temp__4423__auto__,G__13963,G__13964,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (){
return this$.board_edit(null);
});})(board,temp__4423__auto__,G__13963,G__13964,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$update_DASH_fn,((function (board,temp__4423__auto__,G__13963,G__13964,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13928_SHARP_,p2__13929_SHARP_){
return this$.board_update(p1__13928_SHARP_,p2__13929_SHARP_);
});})(board,temp__4423__auto__,G__13963,G__13964,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
], null));
return (kanban.components.board_dialog.board_dialog.cljs$core$IFn$_invoke$arity$1 ? kanban.components.board_dialog.board_dialog.cljs$core$IFn$_invoke$arity$1(G__13968) : kanban.components.board_dialog.board_dialog.call(null,G__13968));
} else {
return null;
}
})();
var G__13966 = (function (){var temp__4423__auto__ = cljs.core.cst$kw$cards_SLASH_editing.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
if(cljs.core.truth_(temp__4423__auto__)){
var card = temp__4423__auto__;
var G__13969 = om.next.computed(card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$users,cljs.core.cst$kw$users.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$close_DASH_fn,((function (card,temp__4423__auto__,G__13963,G__13964,G__13965,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (){
return this$.card_edit(null);
});})(card,temp__4423__auto__,G__13963,G__13964,G__13965,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
,cljs.core.cst$kw$update_DASH_fn,((function (card,temp__4423__auto__,G__13963,G__13964,G__13965,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972){
return (function (p1__13930_SHARP_,p2__13931_SHARP_){
return this$.card_update(p1__13930_SHARP_,p2__13931_SHARP_);
});})(card,temp__4423__auto__,G__13963,G__13964,G__13965,G__13946,G__13947,_STAR_reconciler_STAR_13941,_STAR_depth_STAR_13942,_STAR_shared_STAR_13943,_STAR_instrument_STAR_13944,_STAR_parent_STAR_13945,this$,x13936_13972))
], null));
return (kanban.components.card_dialog.card_dialog.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card_dialog.card_dialog.cljs$core$IFn$_invoke$arity$1(G__13969) : kanban.components.card_dialog.card_dialog.call(null,G__13969));
} else {
return null;
}
})();
return React.DOM.main(G__13963,G__13964,G__13965,G__13966);
})();
return React.DOM.div(G__13946,G__13947,G__13948);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13945;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13944;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13943;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13942;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13941;
}});})(x13936_13972))
;


kanban.app.App.prototype.constructor = kanban.app.App;

kanban.app.App.prototype.om$isComponent = true;

var x13970_13973 = kanban.app.App;
x13970_13973.om$next$IQuery$ = true;

x13970_13973.om$next$IQuery$query$arity$1 = ((function (x13970_13973){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_active,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_editing,om.next.get_query(kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null),cljs.core.cst$kw$cards_SLASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards_SLASH_editing,om.next.get_query(kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$users,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13970_13973))
;


var x13971_13974 = kanban.app.App.prototype;
x13971_13974.om$next$IQuery$ = true;

x13971_13974.om$next$IQuery$query$arity$1 = ((function (x13971_13974){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_active,om.next.get_query(kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boards_SLASH_editing,om.next.get_query(kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,om.next.get_query(kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards,om.next.get_query(kanban.components.card.Card)], null),cljs.core.cst$kw$cards_SLASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cards_SLASH_editing,om.next.get_query(kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$users,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13971_13974))
;


kanban.app.App.cljs$lang$type = true;

kanban.app.App.cljs$lang$ctorStr = "kanban.app/App";

kanban.app.App.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.app/App");
});
kanban.app.run = (function kanban$app$run(){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(kanban.reconciler.reconciler,kanban.app.App,document.getElementById("app"));
});
