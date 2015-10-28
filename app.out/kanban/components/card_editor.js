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

var x12842_12858 = kanban.components.card_editor.CardEditor.prototype;
x12842_12858.componentWillUpdate = ((function (x12842_12858){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x12842_12858))
;

x12842_12858.shouldComponentUpdate = ((function (x12842_12858){
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
});})(x12842_12858))
;

x12842_12858.componentWillUnmount = ((function (x12842_12858){
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
});})(x12842_12858))
;

x12842_12858.componentDidUpdate = ((function (x12842_12858){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x12842_12858))
;

x12842_12858.isMounted = ((function (x12842_12858){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x12842_12858))
;

x12842_12858.componentWillMount = ((function (x12842_12858){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x12842_12858))
;

x12842_12858.toggle_assignee = ((function (x12842_12858){
return (function (ref){
var this$ = this;
cljs.core.println.call(null,"toggle assignee",ref);

var map__12843 = om.next.props.call(null,this$);
var map__12843__$1 = ((((!((map__12843 == null)))?((((map__12843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12843):map__12843);
var assignees = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var update_fn = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
cljs.core.println.call(null,"assignees",assignees);

var add_or_remove_STAR_ = ((function (map__12843,map__12843__$1,assignees,update_fn,this$,x12842_12858){
return (function kanban$components$card_editor$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__12843,map__12843__$1,assignees,update_fn,this$,x12842_12858))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__12843,map__12843__$1,assignees,update_fn,this$,x12842_12858){
return (function (p1__12834_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12834_SHARP_)], null);
});})(map__12843,map__12843__$1,assignees,update_fn,this$,x12842_12858))
,assignees)))));
});})(x12842_12858))
;

x12842_12858.render = ((function (x12842_12858){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_12845 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_12846 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_12847 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_12848 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_12849 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__12850 = om.next.props.call(null,this$);
var map__12850__$1 = ((((!((map__12850 == null)))?((((map__12850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12850):map__12850);
var id = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var users = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "card-editor"},React.DOM.div({"className": "closer", "onClick": close_fn}),React.DOM.div({"className": "content"},React.DOM.h1({"className": "title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function (p1__12835_SHARP_){
return p1__12835_SHARP_.preventDefault();
});})(map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5866__auto__ = ((function (map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function kanban$components$card_editor$iter__12852(s__12853){
return (new cljs.core.LazySeq(null,((function (map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function (){
var s__12853__$1 = s__12853;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12853__$1);
if(temp__4425__auto__){
var s__12853__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12853__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__12853__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__12855 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__12854 = (0);
while(true){
if((i__12854 < size__5865__auto__)){
var user = cljs.core._nth.call(null,c__5864__auto__,i__12854);
cljs.core.chunk_append.call(null,b__12855,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__12854,selected,user,c__5864__auto__,size__5865__auto__,b__12855,s__12853__$2,temp__4425__auto__,map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function (p1__12836_SHARP_){
return this$.toggle_assignee(p1__12836_SHARP_);
});})(i__12854,selected,user,c__5864__auto__,size__5865__auto__,b__12855,s__12853__$2,temp__4425__auto__,map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})());

var G__12859 = (i__12854 + (1));
i__12854 = G__12859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12855),kanban$components$card_editor$iter__12852.call(null,cljs.core.chunk_rest.call(null,s__12853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12855),null);
}
} else {
var user = cljs.core.first.call(null,s__12853__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__12853__$2,temp__4425__auto__,map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function (p1__12836_SHARP_){
return this$.toggle_assignee(p1__12836_SHARP_);
});})(selected,user,s__12853__$2,temp__4425__auto__,map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected));
})(),kanban$components$card_editor$iter__12852.call(null,cljs.core.rest.call(null,s__12853__$2)));
}
} else {
return null;
}
break;
}
});})(map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
,null,null));
});})(map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
;
return iter__5866__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858){
return (function (p1__12837_SHARP_){
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__12837_SHARP_.target.value], null));
});})(map__12850,map__12850__$1,id,text,assignees,users,close_fn,update_fn,_STAR_reconciler_STAR_12845,_STAR_depth_STAR_12846,_STAR_shared_STAR_12847,_STAR_instrument_STAR_12848,_STAR_parent_STAR_12849,this$,x12842_12858))
}))),React.DOM.p({"className": "buttons"},React.DOM.button({"onClick": close_fn},"Close"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_12849;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_12848;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_12847;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_12846;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_12845;
}});})(x12842_12858))
;


kanban.components.card_editor.CardEditor.prototype.constructor = kanban.components.card_editor.CardEditor;

kanban.components.card_editor.CardEditor.prototype.om$isComponent = true;

var x12856_12860 = kanban.components.card_editor.CardEditor;
x12856_12860.om$next$Ident$ = true;

x12856_12860.om$next$Ident$ident$arity$2 = ((function (x12856_12860){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x12856_12860))
;

x12856_12860.om$next$IQuery$ = true;

x12856_12860.om$next$IQuery$query$arity$1 = ((function (x12856_12860){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x12856_12860))
;


var x12857_12861 = kanban.components.card_editor.CardEditor.prototype;
x12857_12861.om$next$Ident$ = true;

x12857_12861.om$next$Ident$ident$arity$2 = ((function (x12857_12861){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x12857_12861))
;

x12857_12861.om$next$IQuery$ = true;

x12857_12861.om$next$IQuery$query$arity$1 = ((function (x12857_12861){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x12857_12861))
;


kanban.components.card_editor.CardEditor.cljs$lang$type = true;

kanban.components.card_editor.CardEditor.cljs$lang$ctorStr = "kanban.components.card-editor/CardEditor";

kanban.components.card_editor.CardEditor.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.card-editor/CardEditor");
});
kanban.components.card_editor.card_editor = om.next.factory.call(null,kanban.components.card_editor.CardEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card_editor.js.map