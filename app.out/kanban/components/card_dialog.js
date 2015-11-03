// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.card_dialog');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.card_dialog.CardDialog = (function kanban$components$card_dialog$CardDialog(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.card_dialog.CardDialog.prototype = goog.object.clone(React.Component.prototype);

var x8641_8663 = kanban.components.card_dialog.CardDialog.prototype;
x8641_8663.componentWillUpdate = ((function (x8641_8663){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8641_8663))
;

x8641_8663.shouldComponentUpdate = ((function (x8641_8663){
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
});})(x8641_8663))
;

x8641_8663.componentWillUnmount = ((function (x8641_8663){
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
});})(x8641_8663))
;

x8641_8663.componentDidUpdate = ((function (x8641_8663){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8641_8663))
;

x8641_8663.isMounted = ((function (x8641_8663){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8641_8663))
;

x8641_8663.componentWillMount = ((function (x8641_8663){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8641_8663))
;

x8641_8663.toggle_assignee = ((function (x8641_8663){
return (function (ref){
var this$ = this;
var map__8642 = om.next.props.call(null,this$);
var map__8642__$1 = ((((!((map__8642 == null)))?((((map__8642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8642):map__8642);
var assignees = cljs.core.get.call(null,map__8642__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8643 = om.next.get_computed.call(null,this$);
var map__8643__$1 = ((((!((map__8643 == null)))?((((map__8643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8643):map__8643);
var update_fn = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__8642,map__8642__$1,assignees,map__8643,map__8643__$1,update_fn,this$,x8641_8663){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__8642,map__8642__$1,assignees,map__8643,map__8643__$1,update_fn,this$,x8641_8663))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__8642,map__8642__$1,assignees,map__8643,map__8643__$1,update_fn,this$,x8641_8663){
return (function (p1__8633_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8633_SHARP_)], null);
});})(map__8642,map__8642__$1,assignees,map__8643,map__8643__$1,update_fn,this$,x8641_8663))
,assignees)))));
});})(x8641_8663))
;

x8641_8663.update_text = ((function (x8641_8663){
return (function (text){
var this$ = this;
var map__8646 = om.next.get_computed.call(null,this$);
var map__8646__$1 = ((((!((map__8646 == null)))?((((map__8646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8646):map__8646);
var update_fn = cljs.core.get.call(null,map__8646__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x8641_8663))
;

x8641_8663.render = ((function (x8641_8663){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8648 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8649 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8650 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8651 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8652 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8653 = om.next.props.call(null,this$);
var map__8653__$1 = ((((!((map__8653 == null)))?((((map__8653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8653):map__8653);
var id = cljs.core.get.call(null,map__8653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8653__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8653__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8654 = om.next.get_computed.call(null,this$);
var map__8654__$1 = ((((!((map__8654 == null)))?((((map__8654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8654):map__8654);
var users = cljs.core.get.call(null,map__8654__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__8654__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__8654__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function (p1__8634_SHARP_){
return p1__8634_SHARP_.preventDefault();
});})(map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function kanban$components$card_dialog$iter__8657(s__8658){
return (new cljs.core.LazySeq(null,((function (map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function (){
var s__8658__$1 = s__8658;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8658__$1);
if(temp__4425__auto__){
var s__8658__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8658__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8658__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8660 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8659 = (0);
while(true){
if((i__8659 < size__5865__auto__)){
var user = cljs.core._nth.call(null,c__5864__auto__,i__8659);
cljs.core.chunk_append.call(null,b__8660,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__8659,selected,user,c__5864__auto__,size__5865__auto__,b__8660,s__8658__$2,temp__4425__auto__,map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function (p1__8635_SHARP_){
return this$.toggle_assignee(p1__8635_SHARP_);
});})(i__8659,selected,user,c__5864__auto__,size__5865__auto__,b__8660,s__8658__$2,temp__4425__auto__,map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})());

var G__8664 = (i__8659 + (1));
i__8659 = G__8664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),kanban$components$card_dialog$iter__8657.call(null,cljs.core.chunk_rest.call(null,s__8658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8660),null);
}
} else {
var user = cljs.core.first.call(null,s__8658__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__8658__$2,temp__4425__auto__,map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function (p1__8635_SHARP_){
return this$.toggle_assignee(p1__8635_SHARP_);
});})(selected,user,s__8658__$2,temp__4425__auto__,map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})(),kanban$components$card_dialog$iter__8657.call(null,cljs.core.rest.call(null,s__8658__$2)));
}
} else {
return null;
}
break;
}
});})(map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
,null,null));
});})(map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
;
return iter__5866__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663){
return (function (p1__8636_SHARP_){
return this$.update_text(p1__8636_SHARP_.target.value);
});})(map__8653,map__8653__$1,id,text,assignees,map__8654,map__8654__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8648,_STAR_depth_STAR_8649,_STAR_shared_STAR_8650,_STAR_instrument_STAR_8651,_STAR_parent_STAR_8652,this$,x8641_8663))
}))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Edit card assignees by clicking on their names"),React.DOM.li(null,"Change the card description via the text field"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8652;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8651;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8650;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8649;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8648;
}});})(x8641_8663))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x8661_8665 = kanban.components.card_dialog.CardDialog;
x8661_8665.om$next$Ident$ = true;

x8661_8665.om$next$Ident$ident$arity$2 = ((function (x8661_8665){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8661_8665))
;

x8661_8665.om$next$IQuery$ = true;

x8661_8665.om$next$IQuery$query$arity$1 = ((function (x8661_8665){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8661_8665))
;


var x8662_8666 = kanban.components.card_dialog.CardDialog.prototype;
x8662_8666.om$next$Ident$ = true;

x8662_8666.om$next$Ident$ident$arity$2 = ((function (x8662_8666){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8662_8666))
;

x8662_8666.om$next$IQuery$ = true;

x8662_8666.om$next$IQuery$query$arity$1 = ((function (x8662_8666){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8662_8666))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.call(null,kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__8667_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-dialog","card-dialog",1615998855),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8667_SHARP_)], null);
})], null));

//# sourceMappingURL=card_dialog.js.map