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
var this__8349__auto__ = this;
React.Component.apply(this__8349__auto__,arguments);

if(!((this__8349__auto__.initLocalState == null))){
this__8349__auto__.state = this__8349__auto__.initLocalState();
} else {
this__8349__auto__.state = {};
}

return this__8349__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x28241_28253 = kanban.components.card.Assignee.prototype;
x28241_28253.componentWillUpdate = ((function (x28241_28253){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8289__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8289__auto__);
});})(x28241_28253))
;

x28241_28253.shouldComponentUpdate = ((function (x28241_28253){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8289__auto__),goog.object.get(next_props__8290__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8289__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8289__auto__.state,"omcljs$state"),goog.object.get(next_state__8291__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x28241_28253))
;

x28241_28253.componentWillUnmount = ((function (x28241_28253){
return (function (){
var this__8289__auto__ = this;
var r__8295__auto__ = om.next.get_reconciler.call(null,this__8289__auto__);
var cfg__8296__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8295__auto__);
var st__8297__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
var indexer__8294__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
if((st__8297__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8297__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8289__auto__);
}

if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28241_28253))
;

x28241_28253.componentDidUpdate = ((function (x28241_28253){
return (function (prev_props__8292__auto__,prev_state__8293__auto__){
var this__8289__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8289__auto__);
});})(x28241_28253))
;

x28241_28253.isMounted = ((function (x28241_28253){
return (function (){
var this__8289__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8289__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28241_28253))
;

x28241_28253.componentWillMount = ((function (x28241_28253){
return (function (){
var this__8289__auto__ = this;
var indexer__8294__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8289__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28241_28253))
;

x28241_28253.render = ((function (x28241_28253){
return (function (){
var this__8288__auto__ = this;
var this$ = this__8288__auto__;
var _STAR_reconciler_STAR_28242 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28243 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28244 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28245 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28246 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8288__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8288__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8288__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8288__auto__);

om.next._STAR_parent_STAR_ = this__8288__auto__;

try{var map__28247 = om.next.props.call(null,this$);
var map__28247__$1 = ((((!((map__28247 == null)))?((((map__28247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28247):map__28247);
var username = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__28247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__28248 = om.next.get_computed.call(null,this$);
var map__28248__$1 = ((((!((map__28248 == null)))?((((map__28248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28248):map__28248);
var selected = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__28248__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__28247,map__28247__$1,username,name,map__28248,map__28248__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_28242,_STAR_depth_STAR_28243,_STAR_shared_STAR_28244,_STAR_instrument_STAR_28245,_STAR_parent_STAR_28246,this$,this__8288__auto__,x28241_28253){
return (function (){
if(cljs.core.truth_(activate_fn)){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
} else {
return null;
}
});})(map__28247,map__28247__$1,username,name,map__28248,map__28248__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_28242,_STAR_depth_STAR_28243,_STAR_shared_STAR_28244,_STAR_instrument_STAR_28245,_STAR_parent_STAR_28246,this$,this__8288__auto__,x28241_28253))
, "title": name},om.util.force_children.call(null,(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28246;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28245;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28244;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28243;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28242;
}});})(x28241_28253))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x28251_28254 = kanban.components.card.Assignee;
x28251_28254.om$next$Ident$ = true;

x28251_28254.om$next$Ident$ident$arity$2 = ((function (x28251_28254){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28251_28254))
;

x28251_28254.om$next$IQuery$ = true;

x28251_28254.om$next$IQuery$query$arity$1 = ((function (x28251_28254){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x28251_28254))
;


var x28252_28255 = kanban.components.card.Assignee.prototype;
x28252_28255.om$next$Ident$ = true;

x28252_28255.om$next$Ident$ident$arity$2 = ((function (x28252_28255){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28252_28255))
;

x28252_28255.om$next$IQuery$ = true;

x28252_28255.om$next$IQuery$query$arity$1 = ((function (x28252_28255){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x28252_28255))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__8351__auto__,writer__8352__auto__,opt__8353__auto__){
return cljs.core._write.call(null,writer__8352__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__8349__auto__ = this;
React.Component.apply(this__8349__auto__,arguments);

if(!((this__8349__auto__.initLocalState == null))){
this__8349__auto__.state = this__8349__auto__.initLocalState();
} else {
this__8349__auto__.state = {};
}

return this__8349__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x28260_28279 = kanban.components.card.Card.prototype;
x28260_28279.componentWillUpdate = ((function (x28260_28279){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8289__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8289__auto__);
});})(x28260_28279))
;

x28260_28279.shouldComponentUpdate = ((function (x28260_28279){
return (function (next_props__8290__auto__,next_state__8291__auto__){
var this__8289__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8289__auto__),goog.object.get(next_props__8290__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8289__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8289__auto__.state,"omcljs$state"),goog.object.get(next_state__8291__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x28260_28279))
;

x28260_28279.componentWillUnmount = ((function (x28260_28279){
return (function (){
var this__8289__auto__ = this;
var r__8295__auto__ = om.next.get_reconciler.call(null,this__8289__auto__);
var cfg__8296__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8295__auto__);
var st__8297__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
var indexer__8294__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8296__auto__);
if((st__8297__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8297__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8289__auto__);
}

if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28260_28279))
;

x28260_28279.componentDidUpdate = ((function (x28260_28279){
return (function (prev_props__8292__auto__,prev_state__8293__auto__){
var this__8289__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8289__auto__);
});})(x28260_28279))
;

x28260_28279.isMounted = ((function (x28260_28279){
return (function (){
var this__8289__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8289__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28260_28279))
;

x28260_28279.componentWillMount = ((function (x28260_28279){
return (function (){
var this__8289__auto__ = this;
var indexer__8294__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8289__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8294__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8294__auto__,this__8289__auto__);
}
});})(x28260_28279))
;

x28260_28279.render = ((function (x28260_28279){
return (function (){
var this__8288__auto__ = this;
var this$ = this__8288__auto__;
var _STAR_reconciler_STAR_28261 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28262 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28263 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28264 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28265 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8288__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8288__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8288__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8288__auto__);

om.next._STAR_parent_STAR_ = this__8288__auto__;

try{var map__28266 = om.next.props.call(null,this$);
var map__28266__$1 = ((((!((map__28266 == null)))?((((map__28266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28266):map__28266);
var id = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__28266__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__28267 = om.next.get_computed.call(null,this$);
var map__28267__$1 = ((((!((map__28267 == null)))?((((map__28267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28267):map__28267);
var drag_fns = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__28267__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279){
return (function (){
var G__28270 = activate_fn;
var G__28270__$1 = (((G__28270 == null))?null:cljs.core.apply.call(null,G__28270,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__28270__$1;
});})(ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279))
, "draggable": true, "onDragStart": ((function (ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__28271 = drag_fns;
var G__28271__$1 = (((G__28271 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__28271));
var G__28271__$2 = (((G__28271__$1 == null))?null:cljs.core.apply.call(null,G__28271__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__28271__$2;
});})(ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279))
, "onDragEnd": ((function (ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279){
return (function (){
var G__28272 = drag_fns;
var G__28272__$1 = (((G__28272 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__28272));
var G__28272__$2 = (((G__28272__$1 == null))?null:cljs.core.apply.call(null,G__28272__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__28272__$2;
});})(ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279))
},om.util.force_children.call(null,React.DOM.span({"className": "card-id"},om.util.force_children.call(null,id))),om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279){
return (function kanban$components$card$iter__28273(s__28274){
return (new cljs.core.LazySeq(null,((function (ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279){
return (function (){
var s__28274__$1 = s__28274;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28274__$1);
if(temp__4425__auto__){
var s__28274__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28274__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__28274__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__28276 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__28275 = (0);
while(true){
if((i__28275 < size__5757__auto__)){
var a = cljs.core._nth.call(null,c__5756__auto__,i__28275);
cljs.core.chunk_append.call(null,b__28276,kanban.components.card.assignee.call(null,a));

var G__28280 = (i__28275 + (1));
i__28275 = G__28280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28276),kanban$components$card$iter__28273.call(null,cljs.core.chunk_rest.call(null,s__28274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28276),null);
}
} else {
var a = cljs.core.first.call(null,s__28274__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__28273.call(null,cljs.core.rest.call(null,s__28274__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279))
,null,null));
});})(ref,map__28266,map__28266__$1,id,text,assignees,map__28267,map__28267__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_28261,_STAR_depth_STAR_28262,_STAR_shared_STAR_28263,_STAR_instrument_STAR_28264,_STAR_parent_STAR_28265,this$,this__8288__auto__,x28260_28279))
;
return iter__5758__auto__.call(null,assignees);
})()),om.util.force_children.call(null,React.DOM.span({"className": "text"},om.util.force_children.call(null,text))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28265;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28264;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28263;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28262;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28261;
}});})(x28260_28279))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x28277_28281 = kanban.components.card.Card;
x28277_28281.om$next$Ident$ = true;

x28277_28281.om$next$Ident$ident$arity$2 = ((function (x28277_28281){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28277_28281))
;

x28277_28281.om$next$IQuery$ = true;

x28277_28281.om$next$IQuery$query$arity$1 = ((function (x28277_28281){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x28277_28281))
;


var x28278_28282 = kanban.components.card.Card.prototype;
x28278_28282.om$next$Ident$ = true;

x28278_28282.om$next$Ident$ident$arity$2 = ((function (x28278_28282){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x28278_28282))
;

x28278_28282.om$next$IQuery$ = true;

x28278_28282.om$next$IQuery$query$arity$1 = ((function (x28278_28282){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x28278_28282))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__8351__auto__,writer__8352__auto__,opt__8353__auto__){
return cljs.core._write.call(null,writer__8352__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map