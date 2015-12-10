// Compiled by ClojureScript 1.7.170 {}
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
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
kanban.app.App = (function kanban$app$App(){
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.app.App.prototype = goog.object.clone(React.Component.prototype);

var x27313_27321 = kanban.app.App.prototype;
x27313_27321.componentWillUpdate = ((function (x27313_27321){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27313_27321))
;

x27313_27321.shouldComponentUpdate = ((function (x27313_27321){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8201__auto__),goog.object.get(next_props__8202__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8201__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8201__auto__.state,"omcljs$state"),goog.object.get(next_state__8203__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x27313_27321))
;

x27313_27321.componentWillUnmount = ((function (x27313_27321){
return (function (){
var this__8201__auto__ = this;
var r__8207__auto__ = om.next.get_reconciler.call(null,this__8201__auto__);
var cfg__8208__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8207__auto__);
var st__8209__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
var indexer__8206__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
if((st__8209__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8209__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8201__auto__);
}

if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27313_27321))
;

x27313_27321.componentDidUpdate = ((function (x27313_27321){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27313_27321))
;

x27313_27321.isMounted = ((function (x27313_27321){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27313_27321))
;

x27313_27321.componentWillMount = ((function (x27313_27321){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27313_27321))
;

x27313_27321.board_activate = ((function (x27313_27321){
return (function (ref){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ref)))))))))))))));
});})(x27313_27321))
;

x27313_27321.board_create = ((function (x27313_27321){
return (function (){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("boards","create-board","boards/create-board",1984933972,null)))))))))));
});})(x27313_27321))
;

x27313_27321.board_update = ((function (x27313_27321){
return (function (board,data){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("boards","update","boards/update",-207105828,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,board),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core._conj.call(null,cljs.core.List.EMPTY,data)))))))))))))));
});})(x27313_27321))
;

x27313_27321.board_edit = ((function (x27313_27321){
return (function (board){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("boards","edit","boards/edit",-1385627196,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,board)))))))))))))));
});})(x27313_27321))
;

x27313_27321.card_drag_start = ((function (x27313_27321){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card)))))))))))))));
});})(x27313_27321))
;

x27313_27321.card_drag_end = ((function (x27313_27321){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
});})(x27313_27321))
;

x27313_27321.card_drag_drop = ((function (x27313_27321){
return (function (lane){
var this$ = this;
var temp__4423__auto__ = new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"from","from",1815293044)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"to","to",192099007)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x27313_27321))
;

x27313_27321.card_drag_delete = ((function (x27313_27321){
return (function (){
var this$ = this;
var temp__4423__auto__ = new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(source))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x27313_27321))
;

x27313_27321.card_create = ((function (x27313_27321){
return (function (lane){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane)))))))))))))));
});})(x27313_27321))
;

x27313_27321.card_edit = ((function (x27313_27321){
return (function (card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card)))))))))))))));
});})(x27313_27321))
;

x27313_27321.card_update = ((function (x27313_27321){
return (function (card,data){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core._conj.call(null,cljs.core.List.EMPTY,data)))))))))))))));
});})(x27313_27321))
;

x27313_27321.render = ((function (x27313_27321){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27314 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27315 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27316 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27317 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27318 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{return React.DOM.div({"className": "app"},om.util.force_children.call(null,React.DOM.header({"className": "header"},om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,React.DOM.a({"onClick": ((function (_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (){
return this$.board_activate(null);
});})(_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
},om.util.force_children.call(null,"Om Next Kanban Demo"))))),om.util.force_children.call(null,React.DOM.nav(null,om.util.force_children.call(null,(function (){var props = cljs.core.select_keys.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694)], null));
return kanban.components.boards_menu.boards_menu.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (props,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27296_SHARP_){
return this$.board_activate(p1__27296_SHARP_);
});})(props,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813),((function (props,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (){
return this$.board_create();
});})(props,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
], null)));
})()))))),om.util.force_children.call(null,React.DOM.main(null,om.util.force_children.call(null,(function (){var temp__4423__auto__ = new cljs.core.Keyword("boards","active","boards/active",1298990951).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var active_board = temp__4423__auto__;
return kanban.components.board.board.call(null,om.next.computed.call(null,active_board,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27297_SHARP_){
return this$.board_edit(p1__27297_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27298_SHARP_){
return this$.card_create(p1__27298_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27299_SHARP_){
return this$.card_edit(p1__27299_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27300_SHARP_,p2__27301_SHARP_){
return this$.card_drag_start(p1__27300_SHARP_,p2__27301_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27302_SHARP_,p2__27303_SHARP_){
return this$.card_drag_end(p1__27302_SHARP_,p2__27303_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27304_SHARP_){
return this$.card_drag_drop(p1__27304_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"delete","delete",-1768633620),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (){
return this$.card_drag_delete();
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
], null)], null)));
} else {
return kanban.components.about.about.call(null);
}
})()),om.util.force_children.call(null,(function (){var temp__4423__auto__ = new cljs.core.Keyword("boards","editing","boards/editing",2095068454).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var board = temp__4423__auto__;
return kanban.components.board_dialog.board_dialog.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (){
return this$.board_edit(null);
});})(board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27305_SHARP_,p2__27306_SHARP_){
return this$.board_update(p1__27305_SHARP_,p2__27306_SHARP_);
});})(board,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
], null)));
} else {
return null;
}
})()),om.util.force_children.call(null,(function (){var temp__4423__auto__ = new cljs.core.Keyword("cards","editing","cards/editing",1422138420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var card = temp__4423__auto__;
return kanban.components.card_dialog.card_dialog.call(null,om.next.computed.call(null,card,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (card,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (){
return this$.card_edit(null);
});})(card,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (card,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321){
return (function (p1__27307_SHARP_,p2__27308_SHARP_){
return this$.card_update(p1__27307_SHARP_,p2__27308_SHARP_);
});})(card,temp__4423__auto__,_STAR_reconciler_STAR_27314,_STAR_depth_STAR_27315,_STAR_shared_STAR_27316,_STAR_instrument_STAR_27317,_STAR_parent_STAR_27318,this$,this__8200__auto__,x27313_27321))
], null)));
} else {
return null;
}
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27318;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27317;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27316;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27315;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27314;
}});})(x27313_27321))
;


kanban.app.App.prototype.constructor = kanban.app.App;

kanban.app.App.prototype.om$isComponent = true;

var x27319_27322 = kanban.app.App;
x27319_27322.om$next$IQuery$ = true;

x27319_27322.om$next$IQuery$query$arity$1 = ((function (x27319_27322){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boards","boards",1912049694),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","active","boards/active",1298990951),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454),om.next.get_query.call(null,kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420),om.next.get_query.call(null,kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x27319_27322))
;


var x27320_27323 = kanban.app.App.prototype;
x27320_27323.om$next$IQuery$ = true;

x27320_27323.om$next$IQuery$query$arity$1 = ((function (x27320_27323){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boards","boards",1912049694),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","active","boards/active",1298990951),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","editing","boards/editing",2095068454),om.next.get_query.call(null,kanban.components.board_dialog.BoardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420),om.next.get_query.call(null,kanban.components.card_dialog.CardDialog)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x27320_27323))
;


kanban.app.App.cljs$lang$type = true;

kanban.app.App.cljs$lang$ctorStr = "kanban.app/App";

kanban.app.App.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.app/App");
});
kanban.app.run = (function kanban$app$run(){
return om.next.add_root_BANG_.call(null,kanban.reconciler.reconciler,kanban.app.App,document.getElementById("app"));
});

//# sourceMappingURL=app.js.map