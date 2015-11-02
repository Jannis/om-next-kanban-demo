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

var x31179_31201 = kanban.components.card_dialog.CardDialog.prototype;
x31179_31201.componentWillUpdate = ((function (x31179_31201){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x31179_31201))
;

x31179_31201.shouldComponentUpdate = ((function (x31179_31201){
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
});})(x31179_31201))
;

x31179_31201.componentWillUnmount = ((function (x31179_31201){
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
});})(x31179_31201))
;

x31179_31201.componentDidUpdate = ((function (x31179_31201){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x31179_31201))
;

x31179_31201.isMounted = ((function (x31179_31201){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31179_31201))
;

x31179_31201.componentWillMount = ((function (x31179_31201){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x31179_31201))
;

x31179_31201.toggle_assignee = ((function (x31179_31201){
return (function (ref){
var this$ = this;
var map__31180 = om.next.props.call(null,this$);
var map__31180__$1 = ((((!((map__31180 == null)))?((((map__31180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31180):map__31180);
var assignees = cljs.core.get.call(null,map__31180__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__31181 = om.next.get_computed.call(null,this$);
var map__31181__$1 = ((((!((map__31181 == null)))?((((map__31181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31181):map__31181);
var update_fn = cljs.core.get.call(null,map__31181__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__31180,map__31180__$1,assignees,map__31181,map__31181__$1,update_fn,this$,x31179_31201){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__31180,map__31180__$1,assignees,map__31181,map__31181__$1,update_fn,this$,x31179_31201))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__31180,map__31180__$1,assignees,map__31181,map__31181__$1,update_fn,this$,x31179_31201){
return (function (p1__31171_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31171_SHARP_)], null);
});})(map__31180,map__31180__$1,assignees,map__31181,map__31181__$1,update_fn,this$,x31179_31201))
,assignees)))));
});})(x31179_31201))
;

x31179_31201.update_text = ((function (x31179_31201){
return (function (text){
var this$ = this;
var map__31184 = om.next.get_computed.call(null,this$);
var map__31184__$1 = ((((!((map__31184 == null)))?((((map__31184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31184):map__31184);
var update_fn = cljs.core.get.call(null,map__31184__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x31179_31201))
;

x31179_31201.render = ((function (x31179_31201){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_31186 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31187 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31188 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31189 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31190 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__31191 = om.next.props.call(null,this$);
var map__31191__$1 = ((((!((map__31191 == null)))?((((map__31191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31191):map__31191);
var id = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__31192 = om.next.get_computed.call(null,this$);
var map__31192__$1 = ((((!((map__31192 == null)))?((((map__31192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31192):map__31192);
var users = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__31192__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function (p1__31172_SHARP_){
return p1__31172_SHARP_.preventDefault();
});})(map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function kanban$components$card_dialog$iter__31195(s__31196){
return (new cljs.core.LazySeq(null,((function (map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function (){
var s__31196__$1 = s__31196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31196__$1);
if(temp__4425__auto__){
var s__31196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31196__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__31196__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__31198 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__31197 = (0);
while(true){
if((i__31197 < size__5865__auto__)){
var user = cljs.core._nth.call(null,c__5864__auto__,i__31197);
cljs.core.chunk_append.call(null,b__31198,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__31197,selected,user,c__5864__auto__,size__5865__auto__,b__31198,s__31196__$2,temp__4425__auto__,map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function (p1__31173_SHARP_){
return this$.toggle_assignee(p1__31173_SHARP_);
});})(i__31197,selected,user,c__5864__auto__,size__5865__auto__,b__31198,s__31196__$2,temp__4425__auto__,map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})());

var G__31202 = (i__31197 + (1));
i__31197 = G__31202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31198),kanban$components$card_dialog$iter__31195.call(null,cljs.core.chunk_rest.call(null,s__31196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31198),null);
}
} else {
var user = cljs.core.first.call(null,s__31196__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__31196__$2,temp__4425__auto__,map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function (p1__31173_SHARP_){
return this$.toggle_assignee(p1__31173_SHARP_);
});})(selected,user,s__31196__$2,temp__4425__auto__,map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})(),kanban$components$card_dialog$iter__31195.call(null,cljs.core.rest.call(null,s__31196__$2)));
}
} else {
return null;
}
break;
}
});})(map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
,null,null));
});})(map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
;
return iter__5866__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201){
return (function (p1__31174_SHARP_){
return this$.update_text(p1__31174_SHARP_.target.value);
});})(map__31191,map__31191__$1,id,text,assignees,map__31192,map__31192__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_31186,_STAR_depth_STAR_31187,_STAR_shared_STAR_31188,_STAR_instrument_STAR_31189,_STAR_parent_STAR_31190,this$,x31179_31201))
}))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Edit card assignees by clicking on their names"),React.DOM.li(null,"Change the card description via the text field"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31190;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31189;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31188;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31187;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31186;
}});})(x31179_31201))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x31199_31203 = kanban.components.card_dialog.CardDialog;
x31199_31203.om$next$Ident$ = true;

x31199_31203.om$next$Ident$ident$arity$2 = ((function (x31199_31203){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31199_31203))
;

x31199_31203.om$next$IQuery$ = true;

x31199_31203.om$next$IQuery$query$arity$1 = ((function (x31199_31203){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x31199_31203))
;


var x31200_31204 = kanban.components.card_dialog.CardDialog.prototype;
x31200_31204.om$next$Ident$ = true;

x31200_31204.om$next$Ident$ident$arity$2 = ((function (x31200_31204){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31200_31204))
;

x31200_31204.om$next$IQuery$ = true;

x31200_31204.om$next$IQuery$query$arity$1 = ((function (x31200_31204){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x31200_31204))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.call(null,kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__31205_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-dialog","card-dialog",1615998855),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31205_SHARP_)], null);
})], null));

//# sourceMappingURL=card_dialog.js.map