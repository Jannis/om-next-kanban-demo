// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.app');
goog.require('cljs.core');
goog.require('kanban.components.card');
goog.require('om.dom');
goog.require('kanban.parsing.boards');
goog.require('kanban.components.card_editor');
goog.require('kanban.components.boards_menu');
goog.require('kanban.components.about');
goog.require('kanban.components.board');
goog.require('kanban.reconciler');
goog.require('kanban.components.lane');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
kanban.app.App = (function kanban$app$App(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.app.App.prototype = goog.object.clone(React.Component.prototype);

var x10380_10388 = kanban.app.App.prototype;
x10380_10388.componentWillUpdate = ((function (x10380_10388){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10380_10388))
;

x10380_10388.shouldComponentUpdate = ((function (x10380_10388){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x10380_10388))
;

x10380_10388.componentWillUnmount = ((function (x10380_10388){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10380_10388))
;

x10380_10388.componentDidUpdate = ((function (x10380_10388){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10380_10388))
;

x10380_10388.isMounted = ((function (x10380_10388){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10380_10388))
;

x10380_10388.componentWillMount = ((function (x10380_10388){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10380_10388))
;

x10380_10388.activate_board = ((function (x10380_10388){
return (function (ref){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("boards","activate","boards/activate",714241560,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ref)))))))))))))));
});})(x10380_10388))
;

x10380_10388.card_drag_start = ((function (x10380_10388){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card)))))))))))))));
});})(x10380_10388))
;

x10380_10388.card_drag_end = ((function (x10380_10388){
return (function (lane,card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
});})(x10380_10388))
;

x10380_10388.card_drag_drop = ((function (x10380_10388){
return (function (lane){
var this$ = this;
var temp__4423__auto__ = new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","move-card","lanes/move-card",2080812989,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"from","from",1815293044)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"to","to",192099007)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x10380_10388))
;

x10380_10388.card_drag_delete = ((function (x10380_10388){
return (function (){
var this$ = this;
var temp__4423__auto__ = new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var source = temp__4423__auto__;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","delete-card","lanes/delete-card",-1265229741,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152).cljs$core$IFn$_invoke$arity$1(source)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(source))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","drag","cards/drag",1929040996,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))))));
} else {
return null;
}
});})(x10380_10388))
;

x10380_10388.card_add = ((function (x10380_10388){
return (function (lane){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("lanes","create-card","lanes/create-card",-1197172887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lane","lane",463787757)),cljs.core._conj.call(null,cljs.core.List.EMPTY,lane)))))))))))))));
});})(x10380_10388))
;

x10380_10388.card_edit = ((function (x10380_10388){
return (function (card){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","edit","cards/edit",93128254,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card)))))))))))))));
});})(x10380_10388))
;

x10380_10388.card_update = ((function (x10380_10388){
return (function (card,data){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cards","update","cards/update",-1682200138,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"card","card",-1430355152)),cljs.core._conj.call(null,cljs.core.List.EMPTY,card),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377)),cljs.core._conj.call(null,cljs.core.List.EMPTY,data)))))))))))))));
});})(x10380_10388))
;

x10380_10388.render = ((function (x10380_10388){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10381 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10382 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10383 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10384 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10385 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "app"},React.DOM.header({"className": "header"},React.DOM.h1(null,React.DOM.a({"onClick": ((function (_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (){
return this$.activate_board(null);
});})(_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
},"Om Next Kanban Demo")),React.DOM.nav(null,(function (){var props = cljs.core.select_keys.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boards","boards",1912049694)], null));
return kanban.components.boards_menu.boards_menu.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (props,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10366_SHARP_){
return this$.activate_board(p1__10366_SHARP_);
});})(props,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
));
})())),React.DOM.main(null,(function (){var temp__4423__auto__ = new cljs.core.Keyword("boards","active","boards/active",1298990951).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var active_board = temp__4423__auto__;
return kanban.components.board.board.call(null,cljs.core.assoc.call(null,active_board,new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"card-add-fn","card-add-fn",-1277517446),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10367_SHARP_){
return this$.card_add(p1__10367_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10368_SHARP_){
return this$.card_edit(p1__10368_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10369_SHARP_,p2__10370_SHARP_){
return this$.card_drag_start(p1__10369_SHARP_,p2__10370_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10371_SHARP_,p2__10372_SHARP_){
return this$.card_drag_end(p1__10371_SHARP_,p2__10372_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10373_SHARP_){
return this$.card_drag_drop(p1__10373_SHARP_);
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"delete","delete",-1768633620),((function (active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (){
return this$.card_drag_delete();
});})(active_board,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
], null)));
} else {
return kanban.components.about.about.call(null);
}
})(),(function (){var temp__4423__auto__ = new cljs.core.Keyword("cards","editing","cards/editing",1422138420).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
if(cljs.core.truth_(temp__4423__auto__)){
var card = temp__4423__auto__;
return kanban.components.card_editor.card_editor.call(null,cljs.core.assoc.call(null,card,new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (card,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (){
return this$.card_edit(null);
});})(card,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (card,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388){
return (function (p1__10374_SHARP_,p2__10375_SHARP_){
return this$.card_update(p1__10374_SHARP_,p2__10375_SHARP_);
});})(card,temp__4423__auto__,_STAR_reconciler_STAR_10381,_STAR_depth_STAR_10382,_STAR_shared_STAR_10383,_STAR_instrument_STAR_10384,_STAR_parent_STAR_10385,this$,x10380_10388))
));
} else {
return null;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10385;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10384;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10383;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10382;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10381;
}});})(x10380_10388))
;


kanban.app.App.prototype.constructor = kanban.app.App;

kanban.app.App.prototype.om$isComponent = true;

var x10386_10389 = kanban.app.App;
x10386_10389.om$next$IQuery$ = true;

x10386_10389.om$next$IQuery$query$arity$1 = ((function (x10386_10389){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boards","boards",1912049694),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","active","boards/active",1298990951),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),om.next.get_query.call(null,kanban.components.card.Assignee)], null),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420),om.next.get_query.call(null,kanban.components.card_editor.CardEditor)], null)], null);
});})(x10386_10389))
;


var x10387_10390 = kanban.app.App.prototype;
x10387_10390.om$next$IQuery$ = true;

x10387_10390.om$next$IQuery$query$arity$1 = ((function (x10387_10390){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boards","boards",1912049694),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("boards","active","boards/active",1298990951),om.next.get_query.call(null,kanban.components.board.Board)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),om.next.get_query.call(null,kanban.components.lane.Lane)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),om.next.get_query.call(null,kanban.components.card.Assignee)], null),new cljs.core.Keyword("cards","dragged","cards/dragged",311055420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cards","editing","cards/editing",1422138420),om.next.get_query.call(null,kanban.components.card_editor.CardEditor)], null)], null);
});})(x10387_10390))
;


kanban.app.App.cljs$lang$type = true;

kanban.app.App.cljs$lang$ctorStr = "kanban.app/App";

kanban.app.App.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.app/App");
});
kanban.app.run = (function kanban$app$run(){
return om.next.add_root_BANG_.call(null,kanban.reconciler.reconciler,kanban.app.App,document.getElementById("app"));
});

//# sourceMappingURL=app.js.map