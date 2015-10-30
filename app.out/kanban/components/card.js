// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.card');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('kanban.util');
goog.require('om.next');
/**
 * @constructor
 */
kanban.components.card.Assignee = (function kanban$components$card$Assignee(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x8142_8154 = kanban.components.card.Assignee.prototype;
x8142_8154.componentWillUpdate = ((function (x8142_8154){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8142_8154))
;

x8142_8154.shouldComponentUpdate = ((function (x8142_8154){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8142_8154))
;

x8142_8154.componentWillUnmount = ((function (x8142_8154){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8142_8154))
;

x8142_8154.componentDidUpdate = ((function (x8142_8154){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8142_8154))
;

x8142_8154.isMounted = ((function (x8142_8154){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8142_8154))
;

x8142_8154.componentWillMount = ((function (x8142_8154){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8142_8154))
;

x8142_8154.render = ((function (x8142_8154){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8143 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8144 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8145 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8146 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8147 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8148 = om.next.props.call(null,this$);
var map__8148__$1 = ((((!((map__8148 == null)))?((((map__8148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8148):map__8148);
var username = cljs.core.get.call(null,map__8148__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__8148__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8149 = om.next.get_computed.call(null,this$);
var map__8149__$1 = ((((!((map__8149 == null)))?((((map__8149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8149):map__8149);
var selected = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__8149__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__8148,map__8148__$1,username,name,map__8149,map__8149__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8143,_STAR_depth_STAR_8144,_STAR_shared_STAR_8145,_STAR_instrument_STAR_8146,_STAR_parent_STAR_8147,this$,x8142_8154){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8148,map__8148__$1,username,name,map__8149,map__8149__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8143,_STAR_depth_STAR_8144,_STAR_shared_STAR_8145,_STAR_instrument_STAR_8146,_STAR_parent_STAR_8147,this$,x8142_8154))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8147;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8146;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8145;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8144;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8143;
}});})(x8142_8154))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x8152_8155 = kanban.components.card.Assignee;
x8152_8155.om$next$Ident$ = true;

x8152_8155.om$next$Ident$ident$arity$2 = ((function (x8152_8155){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8152_8155))
;

x8152_8155.om$next$IQuery$ = true;

x8152_8155.om$next$IQuery$query$arity$1 = ((function (x8152_8155){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8152_8155))
;


var x8153_8156 = kanban.components.card.Assignee.prototype;
x8153_8156.om$next$Ident$ = true;

x8153_8156.om$next$Ident$ident$arity$2 = ((function (x8153_8156){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8153_8156))
;

x8153_8156.om$next$IQuery$ = true;

x8153_8156.om$next$IQuery$query$arity$1 = ((function (x8153_8156){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8153_8156))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x8161_8177 = kanban.components.card.Card.prototype;
x8161_8177.componentWillUpdate = ((function (x8161_8177){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8161_8177))
;

x8161_8177.shouldComponentUpdate = ((function (x8161_8177){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8161_8177))
;

x8161_8177.componentWillUnmount = ((function (x8161_8177){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8161_8177))
;

x8161_8177.componentDidUpdate = ((function (x8161_8177){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8161_8177))
;

x8161_8177.isMounted = ((function (x8161_8177){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8161_8177))
;

x8161_8177.componentWillMount = ((function (x8161_8177){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8161_8177))
;

x8161_8177.render = ((function (x8161_8177){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8162 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8163 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8164 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8165 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8166 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8167 = om.next.props.call(null,this$);
var map__8167__$1 = ((((!((map__8167 == null)))?((((map__8167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8167):map__8167);
var id = cljs.core.get.call(null,map__8167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8167__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8167__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8168 = om.next.get_computed.call(null,this$);
var map__8168__$1 = ((((!((map__8168 == null)))?((((map__8168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8168):map__8168);
var drag_fns = cljs.core.get.call(null,map__8168__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var edit_fn = cljs.core.get.call(null,map__8168__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177){
return (function (){
return edit_fn.call(null,ref);
});})(ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177))
, "draggable": true, "onDragStart": ((function (ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177){
return (function (){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177))
, "onDragEnd": ((function (ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177){
return (function (){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177){
return (function kanban$components$card$iter__8171(s__8172){
return (new cljs.core.LazySeq(null,((function (ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177){
return (function (){
var s__8172__$1 = s__8172;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8172__$1);
if(temp__4425__auto__){
var s__8172__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8172__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8172__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8174 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8173 = (0);
while(true){
if((i__8173 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__8173);
cljs.core.chunk_append.call(null,b__8174,kanban.components.card.assignee.call(null,a));

var G__8178 = (i__8173 + (1));
i__8173 = G__8178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8174),kanban$components$card$iter__8171.call(null,cljs.core.chunk_rest.call(null,s__8172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8174),null);
}
} else {
var a = cljs.core.first.call(null,s__8172__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__8171.call(null,cljs.core.rest.call(null,s__8172__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177))
,null,null));
});})(ref,map__8167,map__8167__$1,id,text,assignees,map__8168,map__8168__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8162,_STAR_depth_STAR_8163,_STAR_shared_STAR_8164,_STAR_instrument_STAR_8165,_STAR_parent_STAR_8166,this$,x8161_8177))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8166;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8165;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8164;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8163;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8162;
}});})(x8161_8177))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x8175_8179 = kanban.components.card.Card;
x8175_8179.om$next$Ident$ = true;

x8175_8179.om$next$Ident$ident$arity$2 = ((function (x8175_8179){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8175_8179))
;

x8175_8179.om$next$IQuery$ = true;

x8175_8179.om$next$IQuery$query$arity$1 = ((function (x8175_8179){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8175_8179))
;


var x8176_8180 = kanban.components.card.Card.prototype;
x8176_8180.om$next$Ident$ = true;

x8176_8180.om$next$Ident$ident$arity$2 = ((function (x8176_8180){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8176_8180))
;

x8176_8180.om$next$IQuery$ = true;

x8176_8180.om$next$IQuery$query$arity$1 = ((function (x8176_8180){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8176_8180))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map