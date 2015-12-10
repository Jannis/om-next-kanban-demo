// Compiled by ClojureScript 1.7.170 {}
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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x26953_26965 = kanban.components.card.Assignee.prototype;
x26953_26965.componentWillUpdate = ((function (x26953_26965){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x26953_26965))
;

x26953_26965.shouldComponentUpdate = ((function (x26953_26965){
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
});})(x26953_26965))
;

x26953_26965.componentWillUnmount = ((function (x26953_26965){
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
});})(x26953_26965))
;

x26953_26965.componentDidUpdate = ((function (x26953_26965){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x26953_26965))
;

x26953_26965.isMounted = ((function (x26953_26965){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26953_26965))
;

x26953_26965.componentWillMount = ((function (x26953_26965){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x26953_26965))
;

x26953_26965.render = ((function (x26953_26965){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_26954 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26955 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26956 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26957 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26958 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__26959 = om.next.props.call(null,this$);
var map__26959__$1 = ((((!((map__26959 == null)))?((((map__26959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);
var username = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__26960 = om.next.get_computed.call(null,this$);
var map__26960__$1 = ((((!((map__26960 == null)))?((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26960):map__26960);
var selected = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__26960__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__26959,map__26959__$1,username,name,map__26960,map__26960__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_26954,_STAR_depth_STAR_26955,_STAR_shared_STAR_26956,_STAR_instrument_STAR_26957,_STAR_parent_STAR_26958,this$,this__8200__auto__,x26953_26965){
return (function (){
if(cljs.core.truth_(activate_fn)){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
} else {
return null;
}
});})(map__26959,map__26959__$1,username,name,map__26960,map__26960__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_26954,_STAR_depth_STAR_26955,_STAR_shared_STAR_26956,_STAR_instrument_STAR_26957,_STAR_parent_STAR_26958,this$,this__8200__auto__,x26953_26965))
, "title": name},om.util.force_children.call(null,(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26958;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26957;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26956;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26955;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26954;
}});})(x26953_26965))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x26963_26966 = kanban.components.card.Assignee;
x26963_26966.om$next$Ident$ = true;

x26963_26966.om$next$Ident$ident$arity$2 = ((function (x26963_26966){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26963_26966))
;

x26963_26966.om$next$IQuery$ = true;

x26963_26966.om$next$IQuery$query$arity$1 = ((function (x26963_26966){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x26963_26966))
;


var x26964_26967 = kanban.components.card.Assignee.prototype;
x26964_26967.om$next$Ident$ = true;

x26964_26967.om$next$Ident$ident$arity$2 = ((function (x26964_26967){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26964_26967))
;

x26964_26967.om$next$IQuery$ = true;

x26964_26967.om$next$IQuery$query$arity$1 = ((function (x26964_26967){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x26964_26967))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x26972_26991 = kanban.components.card.Card.prototype;
x26972_26991.componentWillUpdate = ((function (x26972_26991){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x26972_26991))
;

x26972_26991.shouldComponentUpdate = ((function (x26972_26991){
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
});})(x26972_26991))
;

x26972_26991.componentWillUnmount = ((function (x26972_26991){
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
});})(x26972_26991))
;

x26972_26991.componentDidUpdate = ((function (x26972_26991){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x26972_26991))
;

x26972_26991.isMounted = ((function (x26972_26991){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26972_26991))
;

x26972_26991.componentWillMount = ((function (x26972_26991){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x26972_26991))
;

x26972_26991.render = ((function (x26972_26991){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_26973 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26974 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26975 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26976 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26977 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__26978 = om.next.props.call(null,this$);
var map__26978__$1 = ((((!((map__26978 == null)))?((((map__26978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26978):map__26978);
var id = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__26978__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__26979 = om.next.get_computed.call(null,this$);
var map__26979__$1 = ((((!((map__26979 == null)))?((((map__26979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26979):map__26979);
var drag_fns = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991){
return (function (){
var G__26982 = activate_fn;
var G__26982__$1 = (((G__26982 == null))?null:cljs.core.apply.call(null,G__26982,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__26982__$1;
});})(ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991))
, "draggable": true, "onDragStart": ((function (ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__26983 = drag_fns;
var G__26983__$1 = (((G__26983 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__26983));
var G__26983__$2 = (((G__26983__$1 == null))?null:cljs.core.apply.call(null,G__26983__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__26983__$2;
});})(ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991))
, "onDragEnd": ((function (ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991){
return (function (){
var G__26984 = drag_fns;
var G__26984__$1 = (((G__26984 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__26984));
var G__26984__$2 = (((G__26984__$1 == null))?null:cljs.core.apply.call(null,G__26984__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__26984__$2;
});})(ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991))
},om.util.force_children.call(null,React.DOM.span({"className": "card-id"},om.util.force_children.call(null,id))),om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991){
return (function kanban$components$card$iter__26985(s__26986){
return (new cljs.core.LazySeq(null,((function (ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991){
return (function (){
var s__26986__$1 = s__26986;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26986__$1);
if(temp__4425__auto__){
var s__26986__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26986__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__26986__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__26988 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__26987 = (0);
while(true){
if((i__26987 < size__5757__auto__)){
var a = cljs.core._nth.call(null,c__5756__auto__,i__26987);
cljs.core.chunk_append.call(null,b__26988,kanban.components.card.assignee.call(null,a));

var G__26992 = (i__26987 + (1));
i__26987 = G__26992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26988),kanban$components$card$iter__26985.call(null,cljs.core.chunk_rest.call(null,s__26986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26988),null);
}
} else {
var a = cljs.core.first.call(null,s__26986__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__26985.call(null,cljs.core.rest.call(null,s__26986__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991))
,null,null));
});})(ref,map__26978,map__26978__$1,id,text,assignees,map__26979,map__26979__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_26973,_STAR_depth_STAR_26974,_STAR_shared_STAR_26975,_STAR_instrument_STAR_26976,_STAR_parent_STAR_26977,this$,this__8200__auto__,x26972_26991))
;
return iter__5758__auto__.call(null,assignees);
})()),om.util.force_children.call(null,React.DOM.span({"className": "text"},om.util.force_children.call(null,text))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26977;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26976;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26975;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26974;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26973;
}});})(x26972_26991))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x26989_26993 = kanban.components.card.Card;
x26989_26993.om$next$Ident$ = true;

x26989_26993.om$next$Ident$ident$arity$2 = ((function (x26989_26993){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26989_26993))
;

x26989_26993.om$next$IQuery$ = true;

x26989_26993.om$next$IQuery$query$arity$1 = ((function (x26989_26993){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x26989_26993))
;


var x26990_26994 = kanban.components.card.Card.prototype;
x26990_26994.om$next$Ident$ = true;

x26990_26994.om$next$Ident$ident$arity$2 = ((function (x26990_26994){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26990_26994))
;

x26990_26994.om$next$IQuery$ = true;

x26990_26994.om$next$IQuery$query$arity$1 = ((function (x26990_26994){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x26990_26994))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map