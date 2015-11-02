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

var x22655_22667 = kanban.components.card.Assignee.prototype;
x22655_22667.componentWillUpdate = ((function (x22655_22667){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x22655_22667))
;

x22655_22667.shouldComponentUpdate = ((function (x22655_22667){
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
});})(x22655_22667))
;

x22655_22667.componentWillUnmount = ((function (x22655_22667){
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
});})(x22655_22667))
;

x22655_22667.componentDidUpdate = ((function (x22655_22667){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x22655_22667))
;

x22655_22667.isMounted = ((function (x22655_22667){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22655_22667))
;

x22655_22667.componentWillMount = ((function (x22655_22667){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x22655_22667))
;

x22655_22667.render = ((function (x22655_22667){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22656 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22657 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22658 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22659 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22660 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22661 = om.next.props.call(null,this$);
var map__22661__$1 = ((((!((map__22661 == null)))?((((map__22661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22661):map__22661);
var username = cljs.core.get.call(null,map__22661__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__22661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__22662 = om.next.get_computed.call(null,this$);
var map__22662__$1 = ((((!((map__22662 == null)))?((((map__22662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22662):map__22662);
var selected = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__22661,map__22661__$1,username,name,map__22662,map__22662__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_22656,_STAR_depth_STAR_22657,_STAR_shared_STAR_22658,_STAR_instrument_STAR_22659,_STAR_parent_STAR_22660,this$,x22655_22667){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__22661,map__22661__$1,username,name,map__22662,map__22662__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_22656,_STAR_depth_STAR_22657,_STAR_shared_STAR_22658,_STAR_instrument_STAR_22659,_STAR_parent_STAR_22660,this$,x22655_22667))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22660;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22659;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22658;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22657;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22656;
}});})(x22655_22667))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x22665_22668 = kanban.components.card.Assignee;
x22665_22668.om$next$Ident$ = true;

x22665_22668.om$next$Ident$ident$arity$2 = ((function (x22665_22668){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22665_22668))
;

x22665_22668.om$next$IQuery$ = true;

x22665_22668.om$next$IQuery$query$arity$1 = ((function (x22665_22668){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x22665_22668))
;


var x22666_22669 = kanban.components.card.Assignee.prototype;
x22666_22669.om$next$Ident$ = true;

x22666_22669.om$next$Ident$ident$arity$2 = ((function (x22666_22669){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22666_22669))
;

x22666_22669.om$next$IQuery$ = true;

x22666_22669.om$next$IQuery$query$arity$1 = ((function (x22666_22669){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x22666_22669))
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

var x22674_22693 = kanban.components.card.Card.prototype;
x22674_22693.componentWillUpdate = ((function (x22674_22693){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x22674_22693))
;

x22674_22693.shouldComponentUpdate = ((function (x22674_22693){
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
});})(x22674_22693))
;

x22674_22693.componentWillUnmount = ((function (x22674_22693){
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
});})(x22674_22693))
;

x22674_22693.componentDidUpdate = ((function (x22674_22693){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x22674_22693))
;

x22674_22693.isMounted = ((function (x22674_22693){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22674_22693))
;

x22674_22693.componentWillMount = ((function (x22674_22693){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x22674_22693))
;

x22674_22693.render = ((function (x22674_22693){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22675 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22676 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22677 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22678 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22679 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22680 = om.next.props.call(null,this$);
var map__22680__$1 = ((((!((map__22680 == null)))?((((map__22680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22680):map__22680);
var id = cljs.core.get.call(null,map__22680__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__22680__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__22680__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__22681 = om.next.get_computed.call(null,this$);
var map__22681__$1 = ((((!((map__22681 == null)))?((((map__22681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22681):map__22681);
var drag_fns = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__22681__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693){
return (function (){
var G__22684 = activate_fn;
var G__22684__$1 = (((G__22684 == null))?null:cljs.core.apply.call(null,G__22684,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__22684__$1;
});})(ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693))
, "draggable": true, "onDragStart": ((function (ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693){
return (function (){
var G__22685 = drag_fns;
var G__22685__$1 = (((G__22685 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__22685));
var G__22685__$2 = (((G__22685__$1 == null))?null:cljs.core.apply.call(null,G__22685__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__22685__$2;
});})(ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693))
, "onDragEnd": ((function (ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693){
return (function (){
var G__22686 = drag_fns;
var G__22686__$1 = (((G__22686 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__22686));
var G__22686__$2 = (((G__22686__$1 == null))?null:cljs.core.apply.call(null,G__22686__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__22686__$2;
});})(ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693){
return (function kanban$components$card$iter__22687(s__22688){
return (new cljs.core.LazySeq(null,((function (ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693){
return (function (){
var s__22688__$1 = s__22688;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22688__$1);
if(temp__4425__auto__){
var s__22688__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22688__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__22688__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__22690 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__22689 = (0);
while(true){
if((i__22689 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__22689);
cljs.core.chunk_append.call(null,b__22690,kanban.components.card.assignee.call(null,a));

var G__22694 = (i__22689 + (1));
i__22689 = G__22694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22690),kanban$components$card$iter__22687.call(null,cljs.core.chunk_rest.call(null,s__22688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22690),null);
}
} else {
var a = cljs.core.first.call(null,s__22688__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__22687.call(null,cljs.core.rest.call(null,s__22688__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693))
,null,null));
});})(ref,map__22680,map__22680__$1,id,text,assignees,map__22681,map__22681__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_22675,_STAR_depth_STAR_22676,_STAR_shared_STAR_22677,_STAR_instrument_STAR_22678,_STAR_parent_STAR_22679,this$,x22674_22693))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22679;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22678;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22677;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22676;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22675;
}});})(x22674_22693))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x22691_22695 = kanban.components.card.Card;
x22691_22695.om$next$Ident$ = true;

x22691_22695.om$next$Ident$ident$arity$2 = ((function (x22691_22695){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22691_22695))
;

x22691_22695.om$next$IQuery$ = true;

x22691_22695.om$next$IQuery$query$arity$1 = ((function (x22691_22695){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x22691_22695))
;


var x22692_22696 = kanban.components.card.Card.prototype;
x22692_22696.om$next$Ident$ = true;

x22692_22696.om$next$Ident$ident$arity$2 = ((function (x22692_22696){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22692_22696))
;

x22692_22696.om$next$IQuery$ = true;

x22692_22696.om$next$IQuery$query$arity$1 = ((function (x22692_22696){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x22692_22696))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map