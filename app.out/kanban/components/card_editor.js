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

var x8156_8174 = kanban.components.card_editor.CardEditor.prototype;
x8156_8174.componentWillUpdate = ((function (x8156_8174){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x8156_8174))
;

x8156_8174.shouldComponentUpdate = ((function (x8156_8174){
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
});})(x8156_8174))
;

x8156_8174.componentWillUnmount = ((function (x8156_8174){
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
});})(x8156_8174))
;

x8156_8174.componentDidUpdate = ((function (x8156_8174){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x8156_8174))
;

x8156_8174.isMounted = ((function (x8156_8174){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8156_8174))
;

x8156_8174.componentWillMount = ((function (x8156_8174){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x8156_8174))
;

x8156_8174.toggle_assignee = ((function (x8156_8174){
return (function (ref){
var this$ = this;
var map__8157 = om.next.props.call(null,this$);
var map__8157__$1 = ((((!((map__8157 == null)))?((((map__8157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8157):map__8157);
var assignees = cljs.core.get.call(null,map__8157__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var update_fn = cljs.core.get.call(null,map__8157__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__8157,map__8157__$1,assignees,update_fn,this$,x8156_8174){
return (function kanban$components$card_editor$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__8157,map__8157__$1,assignees,update_fn,this$,x8156_8174))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__8157,map__8157__$1,assignees,update_fn,this$,x8156_8174){
return (function (p1__8148_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8148_SHARP_)], null);
});})(map__8157,map__8157__$1,assignees,update_fn,this$,x8156_8174))
,assignees)))));
});})(x8156_8174))
;

x8156_8174.update_text = ((function (x8156_8174){
return (function (text){
var this$ = this;
var map__8159 = om.next.props.call(null,this$);
var map__8159__$1 = ((((!((map__8159 == null)))?((((map__8159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8159):map__8159);
var update_fn = cljs.core.get.call(null,map__8159__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x8156_8174))
;

x8156_8174.render = ((function (x8156_8174){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8161 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8162 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8163 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8164 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8165 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8166 = om.next.props.call(null,this$);
var map__8166__$1 = ((((!((map__8166 == null)))?((((map__8166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8166):map__8166);
var id = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var users = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__8166__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "card-editor"},React.DOM.div({"className": "closer", "onClick": close_fn}),React.DOM.div({"className": "content"},React.DOM.h1({"className": "title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function (p1__8149_SHARP_){
return p1__8149_SHARP_.preventDefault();
});})(map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function kanban$components$card_editor$iter__8168(s__8169){
return (new cljs.core.LazySeq(null,((function (map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function (){
var s__8169__$1 = s__8169;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8169__$1);
if(temp__4425__auto__){
var s__8169__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8169__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8169__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8171 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8170 = (0);
while(true){
if((i__8170 < size__5865__auto__)){
var user = cljs.core._nth.call(null,c__5864__auto__,i__8170);
cljs.core.chunk_append.call(null,b__8171,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__8170,selected,user,c__5864__auto__,size__5865__auto__,b__8171,s__8169__$2,temp__4425__auto__,map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function (p1__8150_SHARP_){
return this$.toggle_assignee(p1__8150_SHARP_);
});})(i__8170,selected,user,c__5864__auto__,size__5865__auto__,b__8171,s__8169__$2,temp__4425__auto__,map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})());

var G__8175 = (i__8170 + (1));
i__8170 = G__8175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8171),kanban$components$card_editor$iter__8168.call(null,cljs.core.chunk_rest.call(null,s__8169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8171),null);
}
} else {
var user = cljs.core.first.call(null,s__8169__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__8169__$2,temp__4425__auto__,map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function (p1__8150_SHARP_){
return this$.toggle_assignee(p1__8150_SHARP_);
});})(selected,user,s__8169__$2,temp__4425__auto__,map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})(),kanban$components$card_editor$iter__8168.call(null,cljs.core.rest.call(null,s__8169__$2)));
}
} else {
return null;
}
break;
}
});})(map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
,null,null));
});})(map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
;
return iter__5866__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174){
return (function (p1__8151_SHARP_){
return this$.update_text(p1__8151_SHARP_.target.value);
});})(map__8166,map__8166__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_8161,_STAR_depth_STAR_8162,_STAR_shared_STAR_8163,_STAR_instrument_STAR_8164,_STAR_parent_STAR_8165,this$,x8156_8174))
}))),React.DOM.p({"className": "buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Edit card assignees by clicking on their names"),React.DOM.li(null,"Change the card description via the text field"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8165;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8164;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8163;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8162;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8161;
}});})(x8156_8174))
;


kanban.components.card_editor.CardEditor.prototype.constructor = kanban.components.card_editor.CardEditor;

kanban.components.card_editor.CardEditor.prototype.om$isComponent = true;

var x8172_8176 = kanban.components.card_editor.CardEditor;
x8172_8176.om$next$Ident$ = true;

x8172_8176.om$next$Ident$ident$arity$2 = ((function (x8172_8176){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8172_8176))
;

x8172_8176.om$next$IQuery$ = true;

x8172_8176.om$next$IQuery$query$arity$1 = ((function (x8172_8176){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8172_8176))
;


var x8173_8177 = kanban.components.card_editor.CardEditor.prototype;
x8173_8177.om$next$Ident$ = true;

x8173_8177.om$next$Ident$ident$arity$2 = ((function (x8173_8177){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8173_8177))
;

x8173_8177.om$next$IQuery$ = true;

x8173_8177.om$next$IQuery$query$arity$1 = ((function (x8173_8177){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8173_8177))
;


kanban.components.card_editor.CardEditor.cljs$lang$type = true;

kanban.components.card_editor.CardEditor.cljs$lang$ctorStr = "kanban.components.card-editor/CardEditor";

kanban.components.card_editor.CardEditor.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card-editor/CardEditor");
});
kanban.components.card_editor.card_editor = om.next.factory.call(null,kanban.components.card_editor.CardEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__8178_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-editor","card-editor",540666404),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8178_SHARP_)], null);
})], null));

//# sourceMappingURL=card_editor.js.map