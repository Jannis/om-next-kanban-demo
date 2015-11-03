// Compiled by ClojureScript 1.7.145 {}
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
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x82978_82992 = kanban.components.board_dialog.BoardDialog.prototype;
x82978_82992.componentWillUpdate = ((function (x82978_82992){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x82978_82992))
;

x82978_82992.shouldComponentUpdate = ((function (x82978_82992){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7526__auto__),goog.object.get(next_props__7527__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7526__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7526__auto__.state,"omcljs$state"),goog.object.get(next_state__7528__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x82978_82992))
;

x82978_82992.componentWillUnmount = ((function (x82978_82992){
return (function (){
var this__7526__auto__ = this;
var r__7532__auto__ = om.next.get_reconciler.call(null,this__7526__auto__);
var cfg__7533__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7532__auto__);
var st__7534__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
var indexer__7531__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
if((st__7534__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7534__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7526__auto__);
}

if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x82978_82992))
;

x82978_82992.componentDidUpdate = ((function (x82978_82992){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x82978_82992))
;

x82978_82992.isMounted = ((function (x82978_82992){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x82978_82992))
;

x82978_82992.componentWillMount = ((function (x82978_82992){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x82978_82992))
;

x82978_82992.update = ((function (x82978_82992){
return (function (prop,value){
var this$ = this;
var map__82979 = om.next.get_computed.call(null,this$);
var map__82979__$1 = ((((!((map__82979 == null)))?((((map__82979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82979):map__82979);
var update_fn = cljs.core.get.call(null,map__82979__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.PersistentArrayMap.fromArray([prop,value], true, false));
});})(x82978_82992))
;

x82978_82992.render = ((function (x82978_82992){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_82981 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_82982 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_82983 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_82984 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_82985 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__82986 = om.next.props.call(null,this$);
var map__82986__$1 = ((((!((map__82986 == null)))?((((map__82986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82986):map__82986);
var id = cljs.core.get.call(null,map__82986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__82986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__82986__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__82986__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__82987 = om.next.get_computed.call(null,this$);
var map__82987__$1 = ((((!((map__82987 == null)))?((((map__82987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82987):map__82987);
var close_fn = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit board",React.DOM.span({"className": "board-name"},name)),React.DOM.form({"onSubmit": ((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (p1__82969_SHARP_){
return p1__82969_SHARP_.preventDefault();
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Name:"),om.dom.input.call(null,{"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (p1__82970_SHARP_){
return this$.update(new cljs.core.Keyword(null,"name","name",1843675177),p1__82970_SHARP_.target.value);
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Description:"),om.dom.textarea.call(null,{"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (p1__82971_SHARP_){
return this$.update(new cljs.core.Keyword(null,"description","description",-1428560544),p1__82971_SHARP_.target.value);
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Lanes:"),kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),lanes,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"element-fn","element-fn",554034748),((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (p1__82972_SHARP_){
return React.DOM.span({"className": "lane-name"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__82972_SHARP_));
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (lanes__$1){
return this$.update(new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.map.call(null,((function (map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992){
return (function (p1__82973_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82973_SHARP_)], null);
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
,lanes__$1));
});})(map__82986,map__82986__$1,id,name,description,lanes,map__82987,map__82987__$1,close_fn,_STAR_reconciler_STAR_82981,_STAR_depth_STAR_82982,_STAR_shared_STAR_82983,_STAR_instrument_STAR_82984,_STAR_parent_STAR_82985,this$,x82978_82992))
], null)))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Change the board name via the name field"),React.DOM.li(null,"Change the board description via the description field"),React.DOM.li(null,"Change the order of lanes via drag and drop"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_82985;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_82984;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_82983;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_82982;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_82981;
}});})(x82978_82992))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x82990_82993 = kanban.components.board_dialog.BoardDialog;
x82990_82993.om$next$Ident$ = true;

x82990_82993.om$next$Ident$ident$arity$2 = ((function (x82990_82993){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82990_82993))
;

x82990_82993.om$next$IQuery$ = true;

x82990_82993.om$next$IQuery$query$arity$1 = ((function (x82990_82993){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x82990_82993))
;


var x82991_82994 = kanban.components.board_dialog.BoardDialog.prototype;
x82991_82994.om$next$Ident$ = true;

x82991_82994.om$next$Ident$ident$arity$2 = ((function (x82991_82994){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82991_82994))
;

x82991_82994.om$next$IQuery$ = true;

x82991_82994.om$next$IQuery$query$arity$1 = ((function (x82991_82994){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x82991_82994))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.call(null,kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__82995_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board-dialog","board-dialog",-2008885585),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82995_SHARP_)], null);
})], null));

//# sourceMappingURL=board_dialog.js.map