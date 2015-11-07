// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.board_dialog');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
goog.require('kanban.components.sortable_list');
/**
 * @constructor
 */
kanban.components.board_dialog.BoardDialog = (function kanban$components$board_dialog$BoardDialog(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x13446_13514 = kanban.components.board_dialog.BoardDialog.prototype;
x13446_13514.componentWillUpdate = ((function (x13446_13514){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13446_13514))
;

x13446_13514.shouldComponentUpdate = ((function (x13446_13514){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13449 = this__12403__auto__.state;
var G__13450 = "omcljs$state";
return goog.object.get(G__13449,G__13450);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13446_13514))
;

x13446_13514.componentWillUnmount = ((function (x13446_13514){
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
});})(x13446_13514))
;

x13446_13514.componentDidUpdate = ((function (x13446_13514){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13446_13514))
;

x13446_13514.isMounted = ((function (x13446_13514){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13446_13514))
;

x13446_13514.componentWillMount = ((function (x13446_13514){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13446_13514))
;

x13446_13514.update = ((function (x13446_13514){
return (function (prop,value){
var this$ = this;
var map__13451 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13451__$1 = ((((!((map__13451 == null)))?((((map__13451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13451):map__13451);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13451__$1,cljs.core.cst$kw$update_DASH_fn);
var G__13453 = om.next.get_ident(this$);
var G__13454 = cljs.core.PersistentArrayMap.fromArray([prop,value], true, false);
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__13453,G__13454) : update_fn.call(null,G__13453,G__13454));
});})(x13446_13514))
;

x13446_13514.render = ((function (x13446_13514){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13455 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13456 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13457 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13458 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13459 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13460 = om.next.props(this$);
var map__13460__$1 = ((((!((map__13460 == null)))?((((map__13460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13460):map__13460);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,cljs.core.cst$kw$name);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,cljs.core.cst$kw$description);
var lanes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,cljs.core.cst$kw$lanes);
var map__13461 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13461__$1 = ((((!((map__13461 == null)))?((((map__13461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13461):map__13461);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13461__$1,cljs.core.cst$kw$close_DASH_fn);
var G__13464 = {"className": "dialog"};
var G__13465 = (function (){var G__13467 = {"className": "dialog-closer", "onClick": close_fn};
return React.DOM.div(G__13467);
})();
var G__13466 = (function (){var G__13468 = {"className": "dialog-content"};
var G__13469 = (function (){var G__13473 = {"className": "dialog-title"};
var G__13474 = "Edit board";
var G__13475 = (function (){var G__13476 = {"className": "board-name"};
var G__13477 = name;
return React.DOM.span(G__13476,G__13477);
})();
return React.DOM.h1(G__13473,G__13474,G__13475);
})();
var G__13470 = (function (){var G__13478 = {"onSubmit": ((function (G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (p1__13437_SHARP_){
return p1__13437_SHARP_.preventDefault();
});})(G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
};
var G__13479 = (function (){var G__13482 = {"className": "form-row"};
var G__13483 = React.DOM.label(null,"Name:");
var G__13484 = (function (){var G__13485 = {"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (G__13482,G__13483,G__13478,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (p1__13438_SHARP_){
return this$.update(cljs.core.cst$kw$name,p1__13438_SHARP_.target.value);
});})(G__13482,G__13483,G__13478,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__13485) : om.dom.input.call(null,G__13485));
})();
return React.DOM.div(G__13482,G__13483,G__13484);
})();
var G__13480 = (function (){var G__13486 = {"className": "form-row"};
var G__13487 = React.DOM.label(null,"Description:");
var G__13488 = (function (){var G__13489 = {"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (G__13486,G__13487,G__13478,G__13479,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (p1__13439_SHARP_){
return this$.update(cljs.core.cst$kw$description,p1__13439_SHARP_.target.value);
});})(G__13486,G__13487,G__13478,G__13479,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__13489) : om.dom.textarea.call(null,G__13489));
})();
return React.DOM.div(G__13486,G__13487,G__13488);
})();
var G__13481 = (function (){var G__13490 = {"className": "form-row"};
var G__13491 = React.DOM.label(null,"Lanes:");
var G__13492 = (function (){var G__13495 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$items,lanes,cljs.core.cst$kw$key_DASH_fn,cljs.core.cst$kw$id,cljs.core.cst$kw$element_DASH_fn,((function (G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (p1__13440_SHARP_){
var G__13496 = {"className": "lane-name"};
var G__13497 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__13440_SHARP_);
return React.DOM.span(G__13496,G__13497);
});})(G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
,cljs.core.cst$kw$change_DASH_fn,((function (G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (lanes__$1){
return this$.update(cljs.core.cst$kw$lanes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514){
return (function (p1__13441_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13441_SHARP_)], null);
});})(G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
,lanes__$1));
});})(G__13490,G__13491,G__13478,G__13479,G__13480,G__13468,G__13469,G__13464,G__13465,map__13460,map__13460__$1,id,name,description,lanes,map__13461,map__13461__$1,close_fn,_STAR_reconciler_STAR_13455,_STAR_depth_STAR_13456,_STAR_shared_STAR_13457,_STAR_instrument_STAR_13458,_STAR_parent_STAR_13459,this$,x13446_13514))
], null);
return (kanban.components.sortable_list.sortable_list.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable_list.cljs$core$IFn$_invoke$arity$1(G__13495) : kanban.components.sortable_list.sortable_list.call(null,G__13495));
})();
return React.DOM.div(G__13490,G__13491,G__13492);
})();
return React.DOM.form(G__13478,G__13479,G__13480,G__13481);
})();
var G__13471 = (function (){var G__13498 = {"className": "dialog-buttons"};
var G__13499 = (function (){var G__13500 = {"onClick": close_fn};
var G__13501 = "Close";
return React.DOM.button(G__13500,G__13501);
})();
return React.DOM.p(G__13498,G__13499);
})();
var G__13472 = (function (){var G__13502 = {"className": "help"};
var G__13503 = (function (){var G__13505 = {"className": "help-title"};
var G__13506 = "Help";
return React.DOM.h3(G__13505,G__13506);
})();
var G__13504 = (function (){var G__13507 = {"className": "instructions"};
var G__13508 = React.DOM.li(null,"Change the board name via the name field");
var G__13509 = React.DOM.li(null,"Change the board description via the description field");
var G__13510 = React.DOM.li(null,"Change the order of lanes via drag and drop");
var G__13511 = React.DOM.li(null,"Click anywhere to close the dialog");
return React.DOM.ul(G__13507,G__13508,G__13509,G__13510,G__13511);
})();
return React.DOM.div(G__13502,G__13503,G__13504);
})();
return React.DOM.div(G__13468,G__13469,G__13470,G__13471,G__13472);
})();
return React.DOM.div(G__13464,G__13465,G__13466);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13459;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13458;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13457;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13456;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13455;
}});})(x13446_13514))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x13512_13515 = kanban.components.board_dialog.BoardDialog;
x13512_13515.om$next$Ident$ = true;

x13512_13515.om$next$Ident$ident$arity$2 = ((function (x13512_13515){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13512_13515))
;

x13512_13515.om$next$IQuery$ = true;

x13512_13515.om$next$IQuery$query$arity$1 = ((function (x13512_13515){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,cljs.core.cst$kw$lanes], null);
});})(x13512_13515))
;


var x13513_13516 = kanban.components.board_dialog.BoardDialog.prototype;
x13513_13516.om$next$Ident$ = true;

x13513_13516.om$next$Ident$ident$arity$2 = ((function (x13513_13516){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13513_13516))
;

x13513_13516.om$next$IQuery$ = true;

x13513_13516.om$next$IQuery$query$arity$1 = ((function (x13513_13516){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,cljs.core.cst$kw$lanes], null);
});})(x13513_13516))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__13517_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_DASH_dialog,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13517_SHARP_)], null);
})], null));
