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

var x33197_33209 = kanban.components.card.Assignee.prototype;
x33197_33209.componentWillUpdate = ((function (x33197_33209){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x33197_33209))
;

x33197_33209.shouldComponentUpdate = ((function (x33197_33209){
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
});})(x33197_33209))
;

x33197_33209.componentWillUnmount = ((function (x33197_33209){
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
});})(x33197_33209))
;

x33197_33209.componentDidUpdate = ((function (x33197_33209){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x33197_33209))
;

x33197_33209.isMounted = ((function (x33197_33209){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33197_33209))
;

x33197_33209.componentWillMount = ((function (x33197_33209){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x33197_33209))
;

x33197_33209.render = ((function (x33197_33209){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_33198 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33199 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33200 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33201 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33202 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__33203 = om.next.props.call(null,this$);
var map__33203__$1 = ((((!((map__33203 == null)))?((((map__33203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33203):map__33203);
var username = cljs.core.get.call(null,map__33203__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__33203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__33204 = om.next.get_computed.call(null,this$);
var map__33204__$1 = ((((!((map__33204 == null)))?((((map__33204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33204):map__33204);
var selected = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__33203,map__33203__$1,username,name,map__33204,map__33204__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_33198,_STAR_depth_STAR_33199,_STAR_shared_STAR_33200,_STAR_instrument_STAR_33201,_STAR_parent_STAR_33202,this$,x33197_33209){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__33203,map__33203__$1,username,name,map__33204,map__33204__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_33198,_STAR_depth_STAR_33199,_STAR_shared_STAR_33200,_STAR_instrument_STAR_33201,_STAR_parent_STAR_33202,this$,x33197_33209))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33202;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33201;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33200;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33199;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33198;
}});})(x33197_33209))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x33207_33210 = kanban.components.card.Assignee;
x33207_33210.om$next$Ident$ = true;

x33207_33210.om$next$Ident$ident$arity$2 = ((function (x33207_33210){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33207_33210))
;

x33207_33210.om$next$IQuery$ = true;

x33207_33210.om$next$IQuery$query$arity$1 = ((function (x33207_33210){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x33207_33210))
;


var x33208_33211 = kanban.components.card.Assignee.prototype;
x33208_33211.om$next$Ident$ = true;

x33208_33211.om$next$Ident$ident$arity$2 = ((function (x33208_33211){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33208_33211))
;

x33208_33211.om$next$IQuery$ = true;

x33208_33211.om$next$IQuery$query$arity$1 = ((function (x33208_33211){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x33208_33211))
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

var x33216_33232 = kanban.components.card.Card.prototype;
x33216_33232.componentWillUpdate = ((function (x33216_33232){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x33216_33232))
;

x33216_33232.shouldComponentUpdate = ((function (x33216_33232){
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
});})(x33216_33232))
;

x33216_33232.componentWillUnmount = ((function (x33216_33232){
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
});})(x33216_33232))
;

x33216_33232.componentDidUpdate = ((function (x33216_33232){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x33216_33232))
;

x33216_33232.isMounted = ((function (x33216_33232){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33216_33232))
;

x33216_33232.componentWillMount = ((function (x33216_33232){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x33216_33232))
;

x33216_33232.render = ((function (x33216_33232){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_33217 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33218 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33219 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33220 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33221 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__33222 = om.next.props.call(null,this$);
var map__33222__$1 = ((((!((map__33222 == null)))?((((map__33222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33222):map__33222);
var id = cljs.core.get.call(null,map__33222__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__33222__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__33222__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__33223 = om.next.get_computed.call(null,this$);
var map__33223__$1 = ((((!((map__33223 == null)))?((((map__33223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33223):map__33223);
var drag_fns = cljs.core.get.call(null,map__33223__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var edit_fn = cljs.core.get.call(null,map__33223__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232){
return (function (){
return edit_fn.call(null,ref);
});})(ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232))
, "draggable": true, "onDragStart": ((function (ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232){
return (function (){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232))
, "onDragEnd": ((function (ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232){
return (function (){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232){
return (function kanban$components$card$iter__33226(s__33227){
return (new cljs.core.LazySeq(null,((function (ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232){
return (function (){
var s__33227__$1 = s__33227;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33227__$1);
if(temp__4425__auto__){
var s__33227__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33227__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__33227__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__33229 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__33228 = (0);
while(true){
if((i__33228 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__33228);
cljs.core.chunk_append.call(null,b__33229,kanban.components.card.assignee.call(null,a));

var G__33233 = (i__33228 + (1));
i__33228 = G__33233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33229),kanban$components$card$iter__33226.call(null,cljs.core.chunk_rest.call(null,s__33227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33229),null);
}
} else {
var a = cljs.core.first.call(null,s__33227__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__33226.call(null,cljs.core.rest.call(null,s__33227__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232))
,null,null));
});})(ref,map__33222,map__33222__$1,id,text,assignees,map__33223,map__33223__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_33217,_STAR_depth_STAR_33218,_STAR_shared_STAR_33219,_STAR_instrument_STAR_33220,_STAR_parent_STAR_33221,this$,x33216_33232))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33221;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33220;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33219;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33218;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33217;
}});})(x33216_33232))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x33230_33234 = kanban.components.card.Card;
x33230_33234.om$next$Ident$ = true;

x33230_33234.om$next$Ident$ident$arity$2 = ((function (x33230_33234){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33230_33234))
;

x33230_33234.om$next$IQuery$ = true;

x33230_33234.om$next$IQuery$query$arity$1 = ((function (x33230_33234){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x33230_33234))
;


var x33231_33235 = kanban.components.card.Card.prototype;
x33231_33235.om$next$Ident$ = true;

x33231_33235.om$next$Ident$ident$arity$2 = ((function (x33231_33235){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33231_33235))
;

x33231_33235.om$next$IQuery$ = true;

x33231_33235.om$next$IQuery$query$arity$1 = ((function (x33231_33235){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x33231_33235))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map