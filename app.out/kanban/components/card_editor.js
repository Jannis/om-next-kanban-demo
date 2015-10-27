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

var x16245_16259 = kanban.components.card_editor.CardEditor.prototype;
x16245_16259.componentWillUpdate = ((function (x16245_16259){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x16245_16259))
;

x16245_16259.shouldComponentUpdate = ((function (x16245_16259){
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
});})(x16245_16259))
;

x16245_16259.componentWillUnmount = ((function (x16245_16259){
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
});})(x16245_16259))
;

x16245_16259.componentDidUpdate = ((function (x16245_16259){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x16245_16259))
;

x16245_16259.isMounted = ((function (x16245_16259){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16245_16259))
;

x16245_16259.componentWillMount = ((function (x16245_16259){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x16245_16259))
;

x16245_16259.render = ((function (x16245_16259){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16246 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16247 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16248 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16249 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16250 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16251 = om.next.props.call(null,this$);
var map__16251__$1 = ((((!((map__16251 == null)))?((((map__16251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16251):map__16251);
var id = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var close_fn = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "card-editor"},React.DOM.div({"className": "closer", "onClick": close_fn}),React.DOM.div({"className": "content"},React.DOM.h1({"className": "title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259){
return (function (p1__16239_SHARP_){
return p1__16239_SHARP_.preventDefault();
});})(map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259){
return (function kanban$components$card_editor$iter__16253(s__16254){
return (new cljs.core.LazySeq(null,((function (map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259){
return (function (){
var s__16254__$1 = s__16254;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16254__$1);
if(temp__4425__auto__){
var s__16254__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16254__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16254__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16256 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16255 = (0);
while(true){
if((i__16255 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__16255);
cljs.core.chunk_append.call(null,b__16256,kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"with-name","with-name",597826370),true)));

var G__16260 = (i__16255 + (1));
i__16255 = G__16260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16256),kanban$components$card_editor$iter__16253.call(null,cljs.core.chunk_rest.call(null,s__16254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16256),null);
}
} else {
var a = cljs.core.first.call(null,s__16254__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"with-name","with-name",597826370),true)),kanban$components$card_editor$iter__16253.call(null,cljs.core.rest.call(null,s__16254__$2)));
}
} else {
return null;
}
break;
}
});})(map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259))
,null,null));
});})(map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259))
;
return iter__5866__auto__.call(null,assignees);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259){
return (function (p1__16240_SHARP_){
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__16240_SHARP_.target.value], null));
});})(map__16251,map__16251__$1,id,text,assignees,close_fn,update_fn,_STAR_reconciler_STAR_16246,_STAR_depth_STAR_16247,_STAR_shared_STAR_16248,_STAR_instrument_STAR_16249,_STAR_parent_STAR_16250,this$,x16245_16259))
}))),React.DOM.p({"className": "buttons"},React.DOM.button({"onClick": close_fn},"Close"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16250;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16249;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16248;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16247;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16246;
}});})(x16245_16259))
;


kanban.components.card_editor.CardEditor.prototype.constructor = kanban.components.card_editor.CardEditor;

kanban.components.card_editor.CardEditor.prototype.om$isComponent = true;

var x16257_16261 = kanban.components.card_editor.CardEditor;
x16257_16261.om$next$Ident$ = true;

x16257_16261.om$next$Ident$ident$arity$2 = ((function (x16257_16261){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x16257_16261))
;

x16257_16261.om$next$IQuery$ = true;

x16257_16261.om$next$IQuery$query$arity$1 = ((function (x16257_16261){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x16257_16261))
;


var x16258_16262 = kanban.components.card_editor.CardEditor.prototype;
x16258_16262.om$next$Ident$ = true;

x16258_16262.om$next$Ident$ident$arity$2 = ((function (x16258_16262){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x16258_16262))
;

x16258_16262.om$next$IQuery$ = true;

x16258_16262.om$next$IQuery$query$arity$1 = ((function (x16258_16262){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x16258_16262))
;


kanban.components.card_editor.CardEditor.cljs$lang$type = true;

kanban.components.card_editor.CardEditor.cljs$lang$ctorStr = "kanban.components.card-editor/CardEditor";

kanban.components.card_editor.CardEditor.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card-editor/CardEditor");
});
kanban.components.card_editor.card_editor = om.next.factory.call(null,kanban.components.card_editor.CardEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card_editor.js.map