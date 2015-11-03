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

var x151731_151743 = kanban.components.card.Assignee.prototype;
x151731_151743.componentWillUpdate = ((function (x151731_151743){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x151731_151743))
;

x151731_151743.shouldComponentUpdate = ((function (x151731_151743){
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
});})(x151731_151743))
;

x151731_151743.componentWillUnmount = ((function (x151731_151743){
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
});})(x151731_151743))
;

x151731_151743.componentDidUpdate = ((function (x151731_151743){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x151731_151743))
;

x151731_151743.isMounted = ((function (x151731_151743){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x151731_151743))
;

x151731_151743.componentWillMount = ((function (x151731_151743){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x151731_151743))
;

x151731_151743.render = ((function (x151731_151743){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_151732 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_151733 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_151734 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_151735 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_151736 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__151737 = om.next.props.call(null,this$);
var map__151737__$1 = ((((!((map__151737 == null)))?((((map__151737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151737):map__151737);
var username = cljs.core.get.call(null,map__151737__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__151737__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__151738 = om.next.get_computed.call(null,this$);
var map__151738__$1 = ((((!((map__151738 == null)))?((((map__151738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151738):map__151738);
var selected = cljs.core.get.call(null,map__151738__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__151738__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__151738__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__151737,map__151737__$1,username,name,map__151738,map__151738__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_151732,_STAR_depth_STAR_151733,_STAR_shared_STAR_151734,_STAR_instrument_STAR_151735,_STAR_parent_STAR_151736,this$,x151731_151743){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__151737,map__151737__$1,username,name,map__151738,map__151738__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_151732,_STAR_depth_STAR_151733,_STAR_shared_STAR_151734,_STAR_instrument_STAR_151735,_STAR_parent_STAR_151736,this$,x151731_151743))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_151736;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_151735;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_151734;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_151733;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_151732;
}});})(x151731_151743))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x151741_151744 = kanban.components.card.Assignee;
x151741_151744.om$next$Ident$ = true;

x151741_151744.om$next$Ident$ident$arity$2 = ((function (x151741_151744){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x151741_151744))
;

x151741_151744.om$next$IQuery$ = true;

x151741_151744.om$next$IQuery$query$arity$1 = ((function (x151741_151744){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x151741_151744))
;


var x151742_151745 = kanban.components.card.Assignee.prototype;
x151742_151745.om$next$Ident$ = true;

x151742_151745.om$next$Ident$ident$arity$2 = ((function (x151742_151745){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x151742_151745))
;

x151742_151745.om$next$IQuery$ = true;

x151742_151745.om$next$IQuery$query$arity$1 = ((function (x151742_151745){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x151742_151745))
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

var x151750_151769 = kanban.components.card.Card.prototype;
x151750_151769.componentWillUpdate = ((function (x151750_151769){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x151750_151769))
;

x151750_151769.shouldComponentUpdate = ((function (x151750_151769){
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
});})(x151750_151769))
;

x151750_151769.componentWillUnmount = ((function (x151750_151769){
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
});})(x151750_151769))
;

x151750_151769.componentDidUpdate = ((function (x151750_151769){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x151750_151769))
;

x151750_151769.isMounted = ((function (x151750_151769){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x151750_151769))
;

x151750_151769.componentWillMount = ((function (x151750_151769){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x151750_151769))
;

x151750_151769.render = ((function (x151750_151769){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_151751 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_151752 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_151753 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_151754 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_151755 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__151756 = om.next.props.call(null,this$);
var map__151756__$1 = ((((!((map__151756 == null)))?((((map__151756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151756):map__151756);
var id = cljs.core.get.call(null,map__151756__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__151756__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__151756__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__151757 = om.next.get_computed.call(null,this$);
var map__151757__$1 = ((((!((map__151757 == null)))?((((map__151757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__151757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__151757):map__151757);
var drag_fns = cljs.core.get.call(null,map__151757__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__151757__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769){
return (function (){
var G__151760 = activate_fn;
var G__151760__$1 = (((G__151760 == null))?null:cljs.core.apply.call(null,G__151760,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__151760__$1;
});})(ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769))
, "draggable": true, "onDragStart": ((function (ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769){
return (function (){
var G__151761 = drag_fns;
var G__151761__$1 = (((G__151761 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__151761));
var G__151761__$2 = (((G__151761__$1 == null))?null:cljs.core.apply.call(null,G__151761__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__151761__$2;
});})(ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769))
, "onDragEnd": ((function (ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769){
return (function (){
var G__151762 = drag_fns;
var G__151762__$1 = (((G__151762 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__151762));
var G__151762__$2 = (((G__151762__$1 == null))?null:cljs.core.apply.call(null,G__151762__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__151762__$2;
});})(ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769){
return (function kanban$components$card$iter__151763(s__151764){
return (new cljs.core.LazySeq(null,((function (ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769){
return (function (){
var s__151764__$1 = s__151764;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__151764__$1);
if(temp__4425__auto__){
var s__151764__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__151764__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__151764__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__151766 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__151765 = (0);
while(true){
if((i__151765 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__151765);
cljs.core.chunk_append.call(null,b__151766,kanban.components.card.assignee.call(null,a));

var G__151770 = (i__151765 + (1));
i__151765 = G__151770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151766),kanban$components$card$iter__151763.call(null,cljs.core.chunk_rest.call(null,s__151764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151766),null);
}
} else {
var a = cljs.core.first.call(null,s__151764__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__151763.call(null,cljs.core.rest.call(null,s__151764__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769))
,null,null));
});})(ref,map__151756,map__151756__$1,id,text,assignees,map__151757,map__151757__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_151751,_STAR_depth_STAR_151752,_STAR_shared_STAR_151753,_STAR_instrument_STAR_151754,_STAR_parent_STAR_151755,this$,x151750_151769))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_151755;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_151754;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_151753;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_151752;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_151751;
}});})(x151750_151769))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x151767_151771 = kanban.components.card.Card;
x151767_151771.om$next$Ident$ = true;

x151767_151771.om$next$Ident$ident$arity$2 = ((function (x151767_151771){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x151767_151771))
;

x151767_151771.om$next$IQuery$ = true;

x151767_151771.om$next$IQuery$query$arity$1 = ((function (x151767_151771){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x151767_151771))
;


var x151768_151772 = kanban.components.card.Card.prototype;
x151768_151772.om$next$Ident$ = true;

x151768_151772.om$next$Ident$ident$arity$2 = ((function (x151768_151772){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x151768_151772))
;

x151768_151772.om$next$IQuery$ = true;

x151768_151772.om$next$IQuery$query$arity$1 = ((function (x151768_151772){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x151768_151772))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map