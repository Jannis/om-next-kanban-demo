// Compiled by ClojureScript 1.7.170 {}
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
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x8596_8610 = kanban.components.board_dialog.BoardDialog.prototype;
x8596_8610.componentWillUpdate = ((function (x8596_8610){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8596_8610))
;

x8596_8610.shouldComponentUpdate = ((function (x8596_8610){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7876__auto__),goog.object.get(next_props__7877__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7876__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7876__auto__.state,"omcljs$state"),goog.object.get(next_state__7878__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8596_8610))
;

x8596_8610.componentWillUnmount = ((function (x8596_8610){
return (function (){
var this__7876__auto__ = this;
var r__7882__auto__ = om.next.get_reconciler.call(null,this__7876__auto__);
var cfg__7883__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7882__auto__);
var st__7884__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
var indexer__7881__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
if((st__7884__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7884__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7876__auto__);
}

if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8596_8610))
;

x8596_8610.componentDidUpdate = ((function (x8596_8610){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8596_8610))
;

x8596_8610.isMounted = ((function (x8596_8610){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8596_8610))
;

x8596_8610.componentWillMount = ((function (x8596_8610){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8596_8610))
;

x8596_8610.update = ((function (x8596_8610){
return (function (prop,value){
var this$ = this;
var map__8597 = om.next.get_computed.call(null,this$);
var map__8597__$1 = ((((!((map__8597 == null)))?((((map__8597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8597):map__8597);
var update_fn = cljs.core.get.call(null,map__8597__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.PersistentArrayMap.fromArray([prop,value], true, false));
});})(x8596_8610))
;

x8596_8610.render = ((function (x8596_8610){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8599 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8600 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8601 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8602 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8603 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8604 = om.next.props.call(null,this$);
var map__8604__$1 = ((((!((map__8604 == null)))?((((map__8604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8604):map__8604);
var id = cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__8604__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__8605 = om.next.get_computed.call(null,this$);
var map__8605__$1 = ((((!((map__8605 == null)))?((((map__8605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8605):map__8605);
var close_fn = cljs.core.get.call(null,map__8605__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit board",React.DOM.span({"className": "board-name"},name)),React.DOM.form({"onSubmit": ((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (p1__8587_SHARP_){
return p1__8587_SHARP_.preventDefault();
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Name:"),om.dom.input.call(null,{"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (p1__8588_SHARP_){
return this$.update(new cljs.core.Keyword(null,"name","name",1843675177),p1__8588_SHARP_.target.value);
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Description:"),om.dom.textarea.call(null,{"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (p1__8589_SHARP_){
return this$.update(new cljs.core.Keyword(null,"description","description",-1428560544),p1__8589_SHARP_.target.value);
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Lanes:"),kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),lanes,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"element-fn","element-fn",554034748),((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (p1__8590_SHARP_){
return React.DOM.span({"className": "lane-name"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__8590_SHARP_));
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (lanes__$1){
return this$.update(new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.map.call(null,((function (map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610){
return (function (p1__8591_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8591_SHARP_)], null);
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
,lanes__$1));
});})(map__8604,map__8604__$1,id,name,description,lanes,map__8605,map__8605__$1,close_fn,_STAR_reconciler_STAR_8599,_STAR_depth_STAR_8600,_STAR_shared_STAR_8601,_STAR_instrument_STAR_8602,_STAR_parent_STAR_8603,this$,x8596_8610))
], null)))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Change the board name via the name field"),React.DOM.li(null,"Change the board description via the description field"),React.DOM.li(null,"Change the order of lanes via drag and drop"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8603;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8602;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8601;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8600;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8599;
}});})(x8596_8610))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x8608_8611 = kanban.components.board_dialog.BoardDialog;
x8608_8611.om$next$Ident$ = true;

x8608_8611.om$next$Ident$ident$arity$2 = ((function (x8608_8611){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8608_8611))
;

x8608_8611.om$next$IQuery$ = true;

x8608_8611.om$next$IQuery$query$arity$1 = ((function (x8608_8611){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x8608_8611))
;


var x8609_8612 = kanban.components.board_dialog.BoardDialog.prototype;
x8609_8612.om$next$Ident$ = true;

x8609_8612.om$next$Ident$ident$arity$2 = ((function (x8609_8612){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8609_8612))
;

x8609_8612.om$next$IQuery$ = true;

x8609_8612.om$next$IQuery$query$arity$1 = ((function (x8609_8612){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x8609_8612))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.call(null,kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__8613_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board-dialog","board-dialog",-2008885585),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8613_SHARP_)], null);
})], null));

//# sourceMappingURL=board_dialog.js.map