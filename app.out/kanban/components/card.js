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

var x10414_10426 = kanban.components.card.Assignee.prototype;
x10414_10426.componentWillUpdate = ((function (x10414_10426){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x10414_10426))
;

x10414_10426.shouldComponentUpdate = ((function (x10414_10426){
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
});})(x10414_10426))
;

x10414_10426.componentWillUnmount = ((function (x10414_10426){
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
});})(x10414_10426))
;

x10414_10426.componentDidUpdate = ((function (x10414_10426){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x10414_10426))
;

x10414_10426.isMounted = ((function (x10414_10426){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10414_10426))
;

x10414_10426.componentWillMount = ((function (x10414_10426){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x10414_10426))
;

x10414_10426.render = ((function (x10414_10426){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10415 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10416 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10417 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10418 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10419 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10420 = om.next.props.call(null,this$);
var map__10420__$1 = ((((!((map__10420 == null)))?((((map__10420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10420):map__10420);
var username = cljs.core.get.call(null,map__10420__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__10420__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__10421 = om.next.get_computed.call(null,this$);
var map__10421__$1 = ((((!((map__10421 == null)))?((((map__10421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10421):map__10421);
var selected = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__10420,map__10420__$1,username,name,map__10421,map__10421__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_10415,_STAR_depth_STAR_10416,_STAR_shared_STAR_10417,_STAR_instrument_STAR_10418,_STAR_parent_STAR_10419,this$,x10414_10426){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__10420,map__10420__$1,username,name,map__10421,map__10421__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_10415,_STAR_depth_STAR_10416,_STAR_shared_STAR_10417,_STAR_instrument_STAR_10418,_STAR_parent_STAR_10419,this$,x10414_10426))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10419;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10418;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10417;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10416;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10415;
}});})(x10414_10426))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x10424_10427 = kanban.components.card.Assignee;
x10424_10427.om$next$Ident$ = true;

x10424_10427.om$next$Ident$ident$arity$2 = ((function (x10424_10427){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10424_10427))
;

x10424_10427.om$next$IQuery$ = true;

x10424_10427.om$next$IQuery$query$arity$1 = ((function (x10424_10427){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10424_10427))
;


var x10425_10428 = kanban.components.card.Assignee.prototype;
x10425_10428.om$next$Ident$ = true;

x10425_10428.om$next$Ident$ident$arity$2 = ((function (x10425_10428){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10425_10428))
;

x10425_10428.om$next$IQuery$ = true;

x10425_10428.om$next$IQuery$query$arity$1 = ((function (x10425_10428){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10425_10428))
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

var x10433_10449 = kanban.components.card.Card.prototype;
x10433_10449.componentWillUpdate = ((function (x10433_10449){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x10433_10449))
;

x10433_10449.shouldComponentUpdate = ((function (x10433_10449){
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
});})(x10433_10449))
;

x10433_10449.componentWillUnmount = ((function (x10433_10449){
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
});})(x10433_10449))
;

x10433_10449.componentDidUpdate = ((function (x10433_10449){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x10433_10449))
;

x10433_10449.isMounted = ((function (x10433_10449){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10433_10449))
;

x10433_10449.componentWillMount = ((function (x10433_10449){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x10433_10449))
;

x10433_10449.render = ((function (x10433_10449){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10434 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10435 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10436 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10437 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10438 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10439 = om.next.props.call(null,this$);
var map__10439__$1 = ((((!((map__10439 == null)))?((((map__10439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10439):map__10439);
var id = cljs.core.get.call(null,map__10439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__10439__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__10439__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__10440 = om.next.get_computed.call(null,this$);
var map__10440__$1 = ((((!((map__10440 == null)))?((((map__10440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10440):map__10440);
var drag_fns = cljs.core.get.call(null,map__10440__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var edit_fn = cljs.core.get.call(null,map__10440__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449){
return (function (){
return edit_fn.call(null,ref);
});})(ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449))
, "draggable": true, "onDragStart": ((function (ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449){
return (function (){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449))
, "onDragEnd": ((function (ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449){
return (function (){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449){
return (function kanban$components$card$iter__10443(s__10444){
return (new cljs.core.LazySeq(null,((function (ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449){
return (function (){
var s__10444__$1 = s__10444;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10444__$1);
if(temp__4425__auto__){
var s__10444__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10444__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10444__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10446 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10445 = (0);
while(true){
if((i__10445 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__10445);
cljs.core.chunk_append.call(null,b__10446,kanban.components.card.assignee.call(null,a));

var G__10450 = (i__10445 + (1));
i__10445 = G__10450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10446),kanban$components$card$iter__10443.call(null,cljs.core.chunk_rest.call(null,s__10444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10446),null);
}
} else {
var a = cljs.core.first.call(null,s__10444__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__10443.call(null,cljs.core.rest.call(null,s__10444__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449))
,null,null));
});})(ref,map__10439,map__10439__$1,id,text,assignees,map__10440,map__10440__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_10434,_STAR_depth_STAR_10435,_STAR_shared_STAR_10436,_STAR_instrument_STAR_10437,_STAR_parent_STAR_10438,this$,x10433_10449))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10438;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10437;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10436;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10435;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10434;
}});})(x10433_10449))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x10447_10451 = kanban.components.card.Card;
x10447_10451.om$next$Ident$ = true;

x10447_10451.om$next$Ident$ident$arity$2 = ((function (x10447_10451){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10447_10451))
;

x10447_10451.om$next$IQuery$ = true;

x10447_10451.om$next$IQuery$query$arity$1 = ((function (x10447_10451){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10447_10451))
;


var x10448_10452 = kanban.components.card.Card.prototype;
x10448_10452.om$next$Ident$ = true;

x10448_10452.om$next$Ident$ident$arity$2 = ((function (x10448_10452){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10448_10452))
;

x10448_10452.om$next$IQuery$ = true;

x10448_10452.om$next$IQuery$query$arity$1 = ((function (x10448_10452){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x10448_10452))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map