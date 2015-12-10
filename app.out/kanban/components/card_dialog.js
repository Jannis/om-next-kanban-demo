// Compiled by ClojureScript 1.7.170 {}
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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.card_dialog.CardDialog.prototype = goog.object.clone(React.Component.prototype);

var x27267_27289 = kanban.components.card_dialog.CardDialog.prototype;
x27267_27289.componentWillUpdate = ((function (x27267_27289){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x27267_27289))
;

x27267_27289.shouldComponentUpdate = ((function (x27267_27289){
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
});})(x27267_27289))
;

x27267_27289.componentWillUnmount = ((function (x27267_27289){
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
});})(x27267_27289))
;

x27267_27289.componentDidUpdate = ((function (x27267_27289){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x27267_27289))
;

x27267_27289.isMounted = ((function (x27267_27289){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27267_27289))
;

x27267_27289.componentWillMount = ((function (x27267_27289){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x27267_27289))
;

x27267_27289.toggle_assignee = ((function (x27267_27289){
return (function (ref){
var this$ = this;
var map__27268 = om.next.props.call(null,this$);
var map__27268__$1 = ((((!((map__27268 == null)))?((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27268):map__27268);
var assignees = cljs.core.get.call(null,map__27268__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__27269 = om.next.get_computed.call(null,this$);
var map__27269__$1 = ((((!((map__27269 == null)))?((((map__27269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27269):map__27269);
var update_fn = cljs.core.get.call(null,map__27269__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__27268,map__27268__$1,assignees,map__27269,map__27269__$1,update_fn,this$,x27267_27289){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__27268,map__27268__$1,assignees,map__27269,map__27269__$1,update_fn,this$,x27267_27289))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__27268,map__27268__$1,assignees,map__27269,map__27269__$1,update_fn,this$,x27267_27289){
return (function (p1__27259_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27259_SHARP_)], null);
});})(map__27268,map__27268__$1,assignees,map__27269,map__27269__$1,update_fn,this$,x27267_27289))
,assignees)))));
});})(x27267_27289))
;

x27267_27289.update_text = ((function (x27267_27289){
return (function (text){
var this$ = this;
var map__27272 = om.next.get_computed.call(null,this$);
var map__27272__$1 = ((((!((map__27272 == null)))?((((map__27272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27272):map__27272);
var update_fn = cljs.core.get.call(null,map__27272__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x27267_27289))
;

x27267_27289.render = ((function (x27267_27289){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_27274 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27275 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27276 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27277 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27278 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__27279 = om.next.props.call(null,this$);
var map__27279__$1 = ((((!((map__27279 == null)))?((((map__27279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27279):map__27279);
var id = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__27279__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__27280 = om.next.get_computed.call(null,this$);
var map__27280__$1 = ((((!((map__27280 == null)))?((((map__27280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27280):map__27280);
var users = cljs.core.get.call(null,map__27280__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__27280__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__27280__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "dialog"},om.util.force_children.call(null,React.DOM.div({"className": "dialog-closer", "onClick": close_fn})),om.util.force_children.call(null,React.DOM.div({"className": "dialog-content"},om.util.force_children.call(null,React.DOM.h1({"className": "dialog-title"},om.util.force_children.call(null,"Edit card"),om.util.force_children.call(null,React.DOM.span({"className": "card-id"},om.util.force_children.call(null,id))))),om.util.force_children.call(null,React.DOM.form({"onSubmit": ((function (map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function (p1__27260_SHARP_){
return p1__27260_SHARP_.preventDefault();
});})(map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
},om.util.force_children.call(null,React.DOM.div({"className": "form-row"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Assignees:"))),om.util.force_children.call(null,React.DOM.div({"className": "input"},om.util.force_children.call(null,null),om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function kanban$components$card_dialog$iter__27283(s__27284){
return (new cljs.core.LazySeq(null,((function (map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function (){
var s__27284__$1 = s__27284;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27284__$1);
if(temp__4425__auto__){
var s__27284__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27284__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__27284__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__27286 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__27285 = (0);
while(true){
if((i__27285 < size__5757__auto__)){
var user = cljs.core._nth.call(null,c__5756__auto__,i__27285);
cljs.core.chunk_append.call(null,b__27286,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__27285,selected,user,c__5756__auto__,size__5757__auto__,b__27286,s__27284__$2,temp__4425__auto__,map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function (p1__27261_SHARP_){
return this$.toggle_assignee(p1__27261_SHARP_);
});})(i__27285,selected,user,c__5756__auto__,size__5757__auto__,b__27286,s__27284__$2,temp__4425__auto__,map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})());

var G__27290 = (i__27285 + (1));
i__27285 = G__27290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27286),kanban$components$card_dialog$iter__27283.call(null,cljs.core.chunk_rest.call(null,s__27284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27286),null);
}
} else {
var user = cljs.core.first.call(null,s__27284__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__27284__$2,temp__4425__auto__,map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function (p1__27261_SHARP_){
return this$.toggle_assignee(p1__27261_SHARP_);
});})(selected,user,s__27284__$2,temp__4425__auto__,map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})(),kanban$components$card_dialog$iter__27283.call(null,cljs.core.rest.call(null,s__27284__$2)));
}
} else {
return null;
}
break;
}
});})(map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
,null,null));
});})(map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
;
return iter__5758__auto__.call(null,users);
})()))))),om.util.force_children.call(null,React.DOM.div({"className": "form-row"},om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,"Text:"))),om.util.force_children.call(null,om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289){
return (function (p1__27262_SHARP_){
return this$.update_text(p1__27262_SHARP_.target.value);
});})(map__27279,map__27279__$1,id,text,assignees,map__27280,map__27280__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_27274,_STAR_depth_STAR_27275,_STAR_shared_STAR_27276,_STAR_instrument_STAR_27277,_STAR_parent_STAR_27278,this$,this__8200__auto__,x27267_27289))
})))))),om.util.force_children.call(null,React.DOM.p({"className": "dialog-buttons"},om.util.force_children.call(null,React.DOM.button({"onClick": close_fn},om.util.force_children.call(null,"Close"))))),om.util.force_children.call(null,React.DOM.div({"className": "help"},om.util.force_children.call(null,React.DOM.h3({"className": "help-title"},om.util.force_children.call(null,"Help"))),om.util.force_children.call(null,React.DOM.ul({"className": "instructions"},om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Edit card assignees by clicking on their names"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Change the card description via the text field"))),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,"Click anywhere to close the dialog"))))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27278;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27277;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27276;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27275;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27274;
}});})(x27267_27289))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x27287_27291 = kanban.components.card_dialog.CardDialog;
x27287_27291.om$next$Ident$ = true;

x27287_27291.om$next$Ident$ident$arity$2 = ((function (x27287_27291){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27287_27291))
;

x27287_27291.om$next$IQuery$ = true;

x27287_27291.om$next$IQuery$query$arity$1 = ((function (x27287_27291){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x27287_27291))
;


var x27288_27292 = kanban.components.card_dialog.CardDialog.prototype;
x27288_27292.om$next$Ident$ = true;

x27288_27292.om$next$Ident$ident$arity$2 = ((function (x27288_27292){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27288_27292))
;

x27288_27292.om$next$IQuery$ = true;

x27288_27292.om$next$IQuery$query$arity$1 = ((function (x27288_27292){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x27288_27292))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.call(null,kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__27293_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-dialog","card-dialog",1615998855),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27293_SHARP_)], null);
})], null));

//# sourceMappingURL=card_dialog.js.map