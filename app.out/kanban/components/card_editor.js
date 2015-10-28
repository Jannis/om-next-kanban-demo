// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.card_editor');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.card_editor.CardEditor = (function kanban$components$card_editor$CardEditor(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.card_editor.CardEditor.prototype = goog.object.clone(React.Component.prototype);

var x10418_10436 = kanban.components.card_editor.CardEditor.prototype;
x10418_10436.componentWillUpdate = ((function (x10418_10436){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10418_10436))
;

x10418_10436.shouldComponentUpdate = ((function (x10418_10436){
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
});})(x10418_10436))
;

x10418_10436.componentWillUnmount = ((function (x10418_10436){
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
});})(x10418_10436))
;

x10418_10436.componentDidUpdate = ((function (x10418_10436){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10418_10436))
;

x10418_10436.isMounted = ((function (x10418_10436){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10418_10436))
;

x10418_10436.componentWillMount = ((function (x10418_10436){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10418_10436))
;

x10418_10436.toggle_assignee = ((function (x10418_10436){
return (function (ref){
var this$ = this;
var map__10419 = om.next.props.call(null,this$);
var map__10419__$1 = ((((!((map__10419 == null)))?((((map__10419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10419):map__10419);
var assignees = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var update_fn = cljs.core.get.call(null,map__10419__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__10419,map__10419__$1,assignees,update_fn,this$,x10418_10436){
return (function kanban$components$card_editor$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__10419,map__10419__$1,assignees,update_fn,this$,x10418_10436))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__10419,map__10419__$1,assignees,update_fn,this$,x10418_10436){
return (function (p1__10410_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10410_SHARP_)], null);
});})(map__10419,map__10419__$1,assignees,update_fn,this$,x10418_10436))
,assignees)))));
});})(x10418_10436))
;

x10418_10436.update_text = ((function (x10418_10436){
return (function (text){
var this$ = this;
var map__10421 = om.next.props.call(null,this$);
var map__10421__$1 = ((((!((map__10421 == null)))?((((map__10421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10421):map__10421);
var update_fn = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x10418_10436))
;

x10418_10436.render = ((function (x10418_10436){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10423 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10424 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10425 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10426 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10427 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10428 = om.next.props.call(null,this$);
var map__10428__$1 = ((((!((map__10428 == null)))?((((map__10428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10428):map__10428);
var id = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var users = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "card-editor"},React.DOM.div({"className": "closer", "onClick": close_fn}),React.DOM.div({"className": "content"},React.DOM.h1({"className": "title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function (p1__10411_SHARP_){
return p1__10411_SHARP_.preventDefault();
});})(map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function kanban$components$card_editor$iter__10430(s__10431){
return (new cljs.core.LazySeq(null,((function (map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function (){
var s__10431__$1 = s__10431;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10431__$1);
if(temp__4425__auto__){
var s__10431__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10431__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10431__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10433 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10432 = (0);
while(true){
if((i__10432 < size__5865__auto__)){
var user = cljs.core._nth.call(null,c__5864__auto__,i__10432);
cljs.core.chunk_append.call(null,b__10433,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__10432,selected,user,c__5864__auto__,size__5865__auto__,b__10433,s__10431__$2,temp__4425__auto__,map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function (p1__10412_SHARP_){
return this$.toggle_assignee(p1__10412_SHARP_);
});})(i__10432,selected,user,c__5864__auto__,size__5865__auto__,b__10433,s__10431__$2,temp__4425__auto__,map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})());

var G__10437 = (i__10432 + (1));
i__10432 = G__10437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10433),kanban$components$card_editor$iter__10430.call(null,cljs.core.chunk_rest.call(null,s__10431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10433),null);
}
} else {
var user = cljs.core.first.call(null,s__10431__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__10431__$2,temp__4425__auto__,map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function (p1__10412_SHARP_){
return this$.toggle_assignee(p1__10412_SHARP_);
});})(selected,user,s__10431__$2,temp__4425__auto__,map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})(),kanban$components$card_editor$iter__10430.call(null,cljs.core.rest.call(null,s__10431__$2)));
}
} else {
return null;
}
break;
}
});})(map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
,null,null));
});})(map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
;
return iter__5866__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436){
return (function (p1__10413_SHARP_){
return this$.update_text(p1__10413_SHARP_.target.value);
});})(map__10428,map__10428__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_10423,_STAR_depth_STAR_10424,_STAR_shared_STAR_10425,_STAR_instrument_STAR_10426,_STAR_parent_STAR_10427,this$,x10418_10436))
}))),React.DOM.p({"className": "buttons"},React.DOM.button({"onClick": close_fn},"Close"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10427;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10426;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10425;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10424;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10423;
}});})(x10418_10436))
;


kanban.components.card_editor.CardEditor.prototype.constructor = kanban.components.card_editor.CardEditor;

kanban.components.card_editor.CardEditor.prototype.om$isComponent = true;

var x10434_10438 = kanban.components.card_editor.CardEditor;
x10434_10438.om$next$Ident$ = true;

x10434_10438.om$next$Ident$ident$arity$2 = ((function (x10434_10438){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10434_10438))
;

x10434_10438.om$next$IQuery$ = true;

x10434_10438.om$next$IQuery$query$arity$1 = ((function (x10434_10438){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10434_10438))
;


var x10435_10439 = kanban.components.card_editor.CardEditor.prototype;
x10435_10439.om$next$Ident$ = true;

x10435_10439.om$next$Ident$ident$arity$2 = ((function (x10435_10439){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10435_10439))
;

x10435_10439.om$next$IQuery$ = true;

x10435_10439.om$next$IQuery$query$arity$1 = ((function (x10435_10439){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10435_10439))
;


kanban.components.card_editor.CardEditor.cljs$lang$type = true;

kanban.components.card_editor.CardEditor.cljs$lang$ctorStr = "kanban.components.card-editor/CardEditor";

kanban.components.card_editor.CardEditor.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card-editor/CardEditor");
});
kanban.components.card_editor.card_editor = om.next.factory.call(null,kanban.components.card_editor.CardEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card_editor.js.map