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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x27083_27097 = kanban.components.board_dialog.BoardDialog.prototype;
x27083_27097.componentWillUpdate = ((function (x27083_27097){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27083_27097))
;

x27083_27097.shouldComponentUpdate = ((function (x27083_27097){
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
});})(x27083_27097))
;

x27083_27097.componentWillUnmount = ((function (x27083_27097){
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
});})(x27083_27097))
;

x27083_27097.componentDidUpdate = ((function (x27083_27097){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27083_27097))
;

x27083_27097.isMounted = ((function (x27083_27097){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27083_27097))
;

x27083_27097.componentWillMount = ((function (x27083_27097){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27083_27097))
;

x27083_27097.update = ((function (x27083_27097){
return (function (prop,value){
var this$ = this;
var map__27084 = om.next.get_computed.call(null,this$);
var map__27084__$1 = ((((!((map__27084 == null)))?((((map__27084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27084):map__27084);
var update_fn = cljs.core.get.call(null,map__27084__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.PersistentArrayMap.fromArray([prop,value], true, false));
});})(x27083_27097))
;

x27083_27097.render = ((function (x27083_27097){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27086 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27087 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27088 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27089 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27090 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__27091 = om.next.props.call(null,this$);
var map__27091__$1 = ((((!((map__27091 == null)))?((((map__27091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27091):map__27091);
var id = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__27091__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__27092 = om.next.get_computed.call(null,this$);
var map__27092__$1 = ((((!((map__27092 == null)))?((((map__27092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27092):map__27092);
var close_fn = cljs.core.get.call(null,map__27092__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return React.DOM.div({"className": "dialog"},om.util.force_children.call(null,React.DOM.div({"className": "dialog-closer", "onClick": close_fn})),om.util.force_children.call(null,React.DOM.div({"className": "dialog-content"},om.util.force_children.call(null,React.DOM.h1({"className": "dialog-title"},om.util.force_children.call(null,"Edit board"),om.util.force_children.call(null,React.DOM.span({"className": "board-name"},om.util.force_children.call(null,name))))),om.util.force_children.call(null,React.DOM.form({"onSubmit": ((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (p1__27074_SHARP_){
return p1__27074_SHARP_.preventDefault();
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
},om.util.force_children.call(null,React.DOM.div({"className": "form-row"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Name:"))),om.util.force_children.call(null,om.dom.input.call(null,{"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (p1__27075_SHARP_){
return this$.update(new cljs.core.Keyword(null,"name","name",1843675177),p1__27075_SHARP_.target.value);
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
})))),om.util.force_children.call(null,React.DOM.div({"className": "form-row"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Description:"))),om.util.force_children.call(null,om.dom.textarea.call(null,{"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (p1__27076_SHARP_){
return this$.update(new cljs.core.Keyword(null,"description","description",-1428560544),p1__27076_SHARP_.target.value);
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
})))),om.util.force_children.call(null,React.DOM.div({"className": "form-row"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Lanes:"))),om.util.force_children.call(null,kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),lanes,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"element-fn","element-fn",554034748),((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (p1__27077_SHARP_){
return React.DOM.span({"className": "lane-name"},om.util.force_children.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27077_SHARP_)));
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (lanes__$1){
return this$.update(new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.map.call(null,((function (map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097){
return (function (p1__27078_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27078_SHARP_)], null);
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
,lanes__$1));
});})(map__27091,map__27091__$1,id,name,description,lanes,map__27092,map__27092__$1,close_fn,_STAR_reconciler_STAR_27086,_STAR_depth_STAR_27087,_STAR_shared_STAR_27088,_STAR_instrument_STAR_27089,_STAR_parent_STAR_27090,this$,this__8200__auto__,x27083_27097))
], null))))))),om.util.force_children.call(null,React.DOM.p({"className": "dialog-buttons"},om.util.force_children.call(null,React.DOM.button({"onClick": close_fn},om.util.force_children.call(null,"Close"))))),om.util.force_children.call(null,React.DOM.div({"className": "help"},om.util.force_children.call(null,React.DOM.h3({"className": "help-title"},om.util.force_children.call(null,"Help"))),om.util.force_children.call(null,React.DOM.ul({"className": "instructions"},om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Change the board name via the name field"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Change the board description via the description field"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Change the order of lanes via drag and drop"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Click anywhere to close the dialog"))))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27090;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27089;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27088;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27087;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27086;
}});})(x27083_27097))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x27095_27098 = kanban.components.board_dialog.BoardDialog;
x27095_27098.om$next$Ident$ = true;

x27095_27098.om$next$Ident$ident$arity$2 = ((function (x27095_27098){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27095_27098))
;

x27095_27098.om$next$IQuery$ = true;

x27095_27098.om$next$IQuery$query$arity$1 = ((function (x27095_27098){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null)], null);
});})(x27095_27098))
;


var x27096_27099 = kanban.components.board_dialog.BoardDialog.prototype;
x27096_27099.om$next$Ident$ = true;

x27096_27099.om$next$Ident$ident$arity$2 = ((function (x27096_27099){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27096_27099))
;

x27096_27099.om$next$IQuery$ = true;

x27096_27099.om$next$IQuery$query$arity$1 = ((function (x27096_27099){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null)], null);
});})(x27096_27099))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.call(null,kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__27100_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board-dialog","board-dialog",-2008885585),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27100_SHARP_)], null);
})], null));

//# sourceMappingURL=board_dialog.js.map