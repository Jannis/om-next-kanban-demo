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
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x8266_8278 = kanban.components.card.Assignee.prototype;
x8266_8278.componentWillUpdate = ((function (x8266_8278){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8266_8278))
;

x8266_8278.shouldComponentUpdate = ((function (x8266_8278){
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
});})(x8266_8278))
;

x8266_8278.componentWillUnmount = ((function (x8266_8278){
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
});})(x8266_8278))
;

x8266_8278.componentDidUpdate = ((function (x8266_8278){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8266_8278))
;

x8266_8278.isMounted = ((function (x8266_8278){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8266_8278))
;

x8266_8278.componentWillMount = ((function (x8266_8278){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8266_8278))
;

x8266_8278.render = ((function (x8266_8278){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8267 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8268 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8269 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8270 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8271 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8272 = om.next.props.call(null,this$);
var map__8272__$1 = ((((!((map__8272 == null)))?((((map__8272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8272):map__8272);
var username = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8273 = om.next.get_computed.call(null,this$);
var map__8273__$1 = ((((!((map__8273 == null)))?((((map__8273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8273):map__8273);
var selected = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__8272,map__8272__$1,username,name,map__8273,map__8273__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8278){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8272,map__8272__$1,username,name,map__8273,map__8273__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8278))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8271;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8270;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8269;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8268;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8267;
}});})(x8266_8278))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x8276_8279 = kanban.components.card.Assignee;
x8276_8279.om$next$Ident$ = true;

x8276_8279.om$next$Ident$ident$arity$2 = ((function (x8276_8279){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8276_8279))
;

x8276_8279.om$next$IQuery$ = true;

x8276_8279.om$next$IQuery$query$arity$1 = ((function (x8276_8279){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8276_8279))
;


var x8277_8280 = kanban.components.card.Assignee.prototype;
x8277_8280.om$next$Ident$ = true;

x8277_8280.om$next$Ident$ident$arity$2 = ((function (x8277_8280){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8277_8280))
;

x8277_8280.om$next$IQuery$ = true;

x8277_8280.om$next$IQuery$query$arity$1 = ((function (x8277_8280){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8277_8280))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x8285_8304 = kanban.components.card.Card.prototype;
x8285_8304.componentWillUpdate = ((function (x8285_8304){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8285_8304))
;

x8285_8304.shouldComponentUpdate = ((function (x8285_8304){
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
});})(x8285_8304))
;

x8285_8304.componentWillUnmount = ((function (x8285_8304){
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
});})(x8285_8304))
;

x8285_8304.componentDidUpdate = ((function (x8285_8304){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8285_8304))
;

x8285_8304.isMounted = ((function (x8285_8304){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8285_8304))
;

x8285_8304.componentWillMount = ((function (x8285_8304){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8285_8304))
;

x8285_8304.render = ((function (x8285_8304){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8286 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8287 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8288 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8289 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8290 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8291 = om.next.props.call(null,this$);
var map__8291__$1 = ((((!((map__8291 == null)))?((((map__8291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8291):map__8291);
var id = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8292 = om.next.get_computed.call(null,this$);
var map__8292__$1 = ((((!((map__8292 == null)))?((((map__8292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8292):map__8292);
var drag_fns = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304){
return (function (){
var G__8295 = activate_fn;
var G__8295__$1 = (((G__8295 == null))?null:cljs.core.apply.call(null,G__8295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8295__$1;
});})(ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304))
, "draggable": true, "onDragStart": ((function (ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304){
return (function (){
var G__8296 = drag_fns;
var G__8296__$1 = (((G__8296 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__8296));
var G__8296__$2 = (((G__8296__$1 == null))?null:cljs.core.apply.call(null,G__8296__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8296__$2;
});})(ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304))
, "onDragEnd": ((function (ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304){
return (function (){
var G__8297 = drag_fns;
var G__8297__$1 = (((G__8297 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__8297));
var G__8297__$2 = (((G__8297__$1 == null))?null:cljs.core.apply.call(null,G__8297__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8297__$2;
});})(ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304){
return (function kanban$components$card$iter__8298(s__8299){
return (new cljs.core.LazySeq(null,((function (ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304){
return (function (){
var s__8299__$1 = s__8299;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8299__$1);
if(temp__4425__auto__){
var s__8299__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8299__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8299__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8301 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8300 = (0);
while(true){
if((i__8300 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__8300);
cljs.core.chunk_append.call(null,b__8301,kanban.components.card.assignee.call(null,a));

var G__8305 = (i__8300 + (1));
i__8300 = G__8305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),kanban$components$card$iter__8298.call(null,cljs.core.chunk_rest.call(null,s__8299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),null);
}
} else {
var a = cljs.core.first.call(null,s__8299__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__8298.call(null,cljs.core.rest.call(null,s__8299__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304))
,null,null));
});})(ref,map__8291,map__8291__$1,id,text,assignees,map__8292,map__8292__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8286,_STAR_depth_STAR_8287,_STAR_shared_STAR_8288,_STAR_instrument_STAR_8289,_STAR_parent_STAR_8290,this$,x8285_8304))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8290;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8289;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8288;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8287;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8286;
}});})(x8285_8304))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x8302_8306 = kanban.components.card.Card;
x8302_8306.om$next$Ident$ = true;

x8302_8306.om$next$Ident$ident$arity$2 = ((function (x8302_8306){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8302_8306))
;

x8302_8306.om$next$IQuery$ = true;

x8302_8306.om$next$IQuery$query$arity$1 = ((function (x8302_8306){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8302_8306))
;


var x8303_8307 = kanban.components.card.Card.prototype;
x8303_8307.om$next$Ident$ = true;

x8303_8307.om$next$Ident$ident$arity$2 = ((function (x8303_8307){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8303_8307))
;

x8303_8307.om$next$IQuery$ = true;

x8303_8307.om$next$IQuery$query$arity$1 = ((function (x8303_8307){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8303_8307))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map