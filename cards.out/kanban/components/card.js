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
var this__8024__auto__ = this;
React.Component.apply(this__8024__auto__,arguments);

if(!((this__8024__auto__.initLocalState == null))){
this__8024__auto__.state = this__8024__auto__.initLocalState();
} else {
this__8024__auto__.state = {};
}

return this__8024__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x8509_8521 = kanban.components.card.Assignee.prototype;
x8509_8521.componentWillUpdate = ((function (x8509_8521){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7964__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7964__auto__);
});})(x8509_8521))
;

x8509_8521.shouldComponentUpdate = ((function (x8509_8521){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7964__auto__),goog.object.get(next_props__7965__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7964__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7964__auto__.state,"omcljs$state"),goog.object.get(next_state__7966__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8509_8521))
;

x8509_8521.componentWillUnmount = ((function (x8509_8521){
return (function (){
var this__7964__auto__ = this;
var r__7970__auto__ = om.next.get_reconciler.call(null,this__7964__auto__);
var cfg__7971__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7970__auto__);
var st__7972__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
var indexer__7969__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
if((st__7972__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7972__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7964__auto__);
}

if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x8509_8521))
;

x8509_8521.componentDidUpdate = ((function (x8509_8521){
return (function (prev_props__7967__auto__,prev_state__7968__auto__){
var this__7964__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7964__auto__);
});})(x8509_8521))
;

x8509_8521.isMounted = ((function (x8509_8521){
return (function (){
var this__7964__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7964__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8509_8521))
;

x8509_8521.componentWillMount = ((function (x8509_8521){
return (function (){
var this__7964__auto__ = this;
var indexer__7969__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7964__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x8509_8521))
;

x8509_8521.render = ((function (x8509_8521){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8510 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8511 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8512 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8513 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8514 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8515 = om.next.props.call(null,this$);
var map__8515__$1 = ((((!((map__8515 == null)))?((((map__8515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8515):map__8515);
var username = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__8515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8516 = om.next.get_computed.call(null,this$);
var map__8516__$1 = ((((!((map__8516 == null)))?((((map__8516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8516):map__8516);
var selected = cljs.core.get.call(null,map__8516__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__8516__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__8516__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__8515,map__8515__$1,username,name,map__8516,map__8516__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8510,_STAR_depth_STAR_8511,_STAR_shared_STAR_8512,_STAR_instrument_STAR_8513,_STAR_parent_STAR_8514,this$,x8509_8521){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8515,map__8515__$1,username,name,map__8516,map__8516__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8510,_STAR_depth_STAR_8511,_STAR_shared_STAR_8512,_STAR_instrument_STAR_8513,_STAR_parent_STAR_8514,this$,x8509_8521))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8514;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8513;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8512;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8511;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8510;
}});})(x8509_8521))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x8519_8522 = kanban.components.card.Assignee;
x8519_8522.om$next$Ident$ = true;

x8519_8522.om$next$Ident$ident$arity$2 = ((function (x8519_8522){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8519_8522))
;

x8519_8522.om$next$IQuery$ = true;

x8519_8522.om$next$IQuery$query$arity$1 = ((function (x8519_8522){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8519_8522))
;


var x8520_8523 = kanban.components.card.Assignee.prototype;
x8520_8523.om$next$Ident$ = true;

x8520_8523.om$next$Ident$ident$arity$2 = ((function (x8520_8523){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8520_8523))
;

x8520_8523.om$next$IQuery$ = true;

x8520_8523.om$next$IQuery$query$arity$1 = ((function (x8520_8523){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8520_8523))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__8026__auto__,writer__8027__auto__,opt__8028__auto__){
return cljs.core._write.call(null,writer__8027__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__8024__auto__ = this;
React.Component.apply(this__8024__auto__,arguments);

if(!((this__8024__auto__.initLocalState == null))){
this__8024__auto__.state = this__8024__auto__.initLocalState();
} else {
this__8024__auto__.state = {};
}

return this__8024__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x8528_8547 = kanban.components.card.Card.prototype;
x8528_8547.componentWillUpdate = ((function (x8528_8547){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7964__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7964__auto__);
});})(x8528_8547))
;

x8528_8547.shouldComponentUpdate = ((function (x8528_8547){
return (function (next_props__7965__auto__,next_state__7966__auto__){
var this__7964__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7964__auto__),goog.object.get(next_props__7965__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7964__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7964__auto__.state,"omcljs$state"),goog.object.get(next_state__7966__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8528_8547))
;

x8528_8547.componentWillUnmount = ((function (x8528_8547){
return (function (){
var this__7964__auto__ = this;
var r__7970__auto__ = om.next.get_reconciler.call(null,this__7964__auto__);
var cfg__7971__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7970__auto__);
var st__7972__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
var indexer__7969__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7971__auto__);
if((st__7972__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7972__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7964__auto__);
}

if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x8528_8547))
;

x8528_8547.componentDidUpdate = ((function (x8528_8547){
return (function (prev_props__7967__auto__,prev_state__7968__auto__){
var this__7964__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7964__auto__);
});})(x8528_8547))
;

x8528_8547.isMounted = ((function (x8528_8547){
return (function (){
var this__7964__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7964__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8528_8547))
;

x8528_8547.componentWillMount = ((function (x8528_8547){
return (function (){
var this__7964__auto__ = this;
var indexer__7969__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7964__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7969__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7969__auto__,this__7964__auto__);
}
});})(x8528_8547))
;

x8528_8547.render = ((function (x8528_8547){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8529 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8530 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8531 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8532 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8533 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8534 = om.next.props.call(null,this$);
var map__8534__$1 = ((((!((map__8534 == null)))?((((map__8534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8534):map__8534);
var id = cljs.core.get.call(null,map__8534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8534__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8534__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8535 = om.next.get_computed.call(null,this$);
var map__8535__$1 = ((((!((map__8535 == null)))?((((map__8535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8535):map__8535);
var drag_fns = cljs.core.get.call(null,map__8535__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__8535__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547){
return (function (){
var G__8538 = activate_fn;
var G__8538__$1 = (((G__8538 == null))?null:cljs.core.apply.call(null,G__8538,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8538__$1;
});})(ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547))
, "draggable": true, "onDragStart": ((function (ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__8539 = drag_fns;
var G__8539__$1 = (((G__8539 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__8539));
var G__8539__$2 = (((G__8539__$1 == null))?null:cljs.core.apply.call(null,G__8539__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8539__$2;
});})(ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547))
, "onDragEnd": ((function (ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547){
return (function (){
var G__8540 = drag_fns;
var G__8540__$1 = (((G__8540 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__8540));
var G__8540__$2 = (((G__8540__$1 == null))?null:cljs.core.apply.call(null,G__8540__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8540__$2;
});})(ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5940__auto__ = ((function (ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547){
return (function kanban$components$card$iter__8541(s__8542){
return (new cljs.core.LazySeq(null,((function (ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547){
return (function (){
var s__8542__$1 = s__8542;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8542__$1);
if(temp__4425__auto__){
var s__8542__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8542__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8542__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8544 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8543 = (0);
while(true){
if((i__8543 < size__5939__auto__)){
var a = cljs.core._nth.call(null,c__5938__auto__,i__8543);
cljs.core.chunk_append.call(null,b__8544,kanban.components.card.assignee.call(null,a));

var G__8548 = (i__8543 + (1));
i__8543 = G__8548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8544),kanban$components$card$iter__8541.call(null,cljs.core.chunk_rest.call(null,s__8542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8544),null);
}
} else {
var a = cljs.core.first.call(null,s__8542__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__8541.call(null,cljs.core.rest.call(null,s__8542__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547))
,null,null));
});})(ref,map__8534,map__8534__$1,id,text,assignees,map__8535,map__8535__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8529,_STAR_depth_STAR_8530,_STAR_shared_STAR_8531,_STAR_instrument_STAR_8532,_STAR_parent_STAR_8533,this$,x8528_8547))
;
return iter__5940__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8533;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8532;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8531;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8530;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8529;
}});})(x8528_8547))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x8545_8549 = kanban.components.card.Card;
x8545_8549.om$next$Ident$ = true;

x8545_8549.om$next$Ident$ident$arity$2 = ((function (x8545_8549){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8545_8549))
;

x8545_8549.om$next$IQuery$ = true;

x8545_8549.om$next$IQuery$query$arity$1 = ((function (x8545_8549){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8545_8549))
;


var x8546_8550 = kanban.components.card.Card.prototype;
x8546_8550.om$next$Ident$ = true;

x8546_8550.om$next$Ident$ident$arity$2 = ((function (x8546_8550){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8546_8550))
;

x8546_8550.om$next$IQuery$ = true;

x8546_8550.om$next$IQuery$query$arity$1 = ((function (x8546_8550){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8546_8550))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__8026__auto__,writer__8027__auto__,opt__8028__auto__){
return cljs.core._write.call(null,writer__8027__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map