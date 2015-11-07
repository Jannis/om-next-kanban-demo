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
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x8421_8433 = kanban.components.card.Assignee.prototype;
x8421_8433.componentWillUpdate = ((function (x8421_8433){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8421_8433))
;

x8421_8433.shouldComponentUpdate = ((function (x8421_8433){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7876__auto__),goog.object.get(next_props__7877__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7876__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7876__auto__.state,"omcljs$state"),goog.object.get(next_state__7878__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8421_8433))
;

x8421_8433.componentWillUnmount = ((function (x8421_8433){
return (function (){
var this__7876__auto__ = this;
var r__7882__auto__ = om.next.get_reconciler.call(null,this__7876__auto__);
var cfg__7883__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7882__auto__);
var st__7884__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
var indexer__7881__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
if((st__7884__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7884__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7876__auto__);
}

if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8421_8433))
;

x8421_8433.componentDidUpdate = ((function (x8421_8433){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8421_8433))
;

x8421_8433.isMounted = ((function (x8421_8433){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8421_8433))
;

x8421_8433.componentWillMount = ((function (x8421_8433){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8421_8433))
;

x8421_8433.render = ((function (x8421_8433){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8422 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8423 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8424 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8425 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8426 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8427 = om.next.props.call(null,this$);
var map__8427__$1 = ((((!((map__8427 == null)))?((((map__8427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8427):map__8427);
var username = cljs.core.get.call(null,map__8427__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__8427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8428 = om.next.get_computed.call(null,this$);
var map__8428__$1 = ((((!((map__8428 == null)))?((((map__8428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8428):map__8428);
var selected = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__8428__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__8427,map__8427__$1,username,name,map__8428,map__8428__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8422,_STAR_depth_STAR_8423,_STAR_shared_STAR_8424,_STAR_instrument_STAR_8425,_STAR_parent_STAR_8426,this$,x8421_8433){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8427,map__8427__$1,username,name,map__8428,map__8428__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8422,_STAR_depth_STAR_8423,_STAR_shared_STAR_8424,_STAR_instrument_STAR_8425,_STAR_parent_STAR_8426,this$,x8421_8433))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8426;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8425;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8424;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8423;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8422;
}});})(x8421_8433))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x8431_8434 = kanban.components.card.Assignee;
x8431_8434.om$next$Ident$ = true;

x8431_8434.om$next$Ident$ident$arity$2 = ((function (x8431_8434){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8431_8434))
;

x8431_8434.om$next$IQuery$ = true;

x8431_8434.om$next$IQuery$query$arity$1 = ((function (x8431_8434){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8431_8434))
;


var x8432_8435 = kanban.components.card.Assignee.prototype;
x8432_8435.om$next$Ident$ = true;

x8432_8435.om$next$Ident$ident$arity$2 = ((function (x8432_8435){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8432_8435))
;

x8432_8435.om$next$IQuery$ = true;

x8432_8435.om$next$IQuery$query$arity$1 = ((function (x8432_8435){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8432_8435))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x8440_8459 = kanban.components.card.Card.prototype;
x8440_8459.componentWillUpdate = ((function (x8440_8459){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8440_8459))
;

x8440_8459.shouldComponentUpdate = ((function (x8440_8459){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7876__auto__),goog.object.get(next_props__7877__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__7876__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7876__auto__.state,"omcljs$state"),goog.object.get(next_state__7878__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x8440_8459))
;

x8440_8459.componentWillUnmount = ((function (x8440_8459){
return (function (){
var this__7876__auto__ = this;
var r__7882__auto__ = om.next.get_reconciler.call(null,this__7876__auto__);
var cfg__7883__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7882__auto__);
var st__7884__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
var indexer__7881__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7883__auto__);
if((st__7884__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7884__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7876__auto__);
}

if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8440_8459))
;

x8440_8459.componentDidUpdate = ((function (x8440_8459){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8440_8459))
;

x8440_8459.isMounted = ((function (x8440_8459){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8440_8459))
;

x8440_8459.componentWillMount = ((function (x8440_8459){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8440_8459))
;

x8440_8459.render = ((function (x8440_8459){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8441 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8442 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8443 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8444 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8445 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8446 = om.next.props.call(null,this$);
var map__8446__$1 = ((((!((map__8446 == null)))?((((map__8446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8446):map__8446);
var id = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8446__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8447 = om.next.get_computed.call(null,this$);
var map__8447__$1 = ((((!((map__8447 == null)))?((((map__8447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8447):map__8447);
var drag_fns = cljs.core.get.call(null,map__8447__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var activate_fn = cljs.core.get.call(null,map__8447__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459){
return (function (){
var G__8450 = activate_fn;
var G__8450__$1 = (((G__8450 == null))?null:cljs.core.apply.call(null,G__8450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8450__$1;
});})(ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459))
, "draggable": true, "onDragStart": ((function (ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__8451 = drag_fns;
var G__8451__$1 = (((G__8451 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__8451));
var G__8451__$2 = (((G__8451__$1 == null))?null:cljs.core.apply.call(null,G__8451__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8451__$2;
});})(ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459))
, "onDragEnd": ((function (ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459){
return (function (){
var G__8452 = drag_fns;
var G__8452__$1 = (((G__8452 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__8452));
var G__8452__$2 = (((G__8452__$1 == null))?null:cljs.core.apply.call(null,G__8452__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__8452__$2;
});})(ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5940__auto__ = ((function (ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459){
return (function kanban$components$card$iter__8453(s__8454){
return (new cljs.core.LazySeq(null,((function (ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459){
return (function (){
var s__8454__$1 = s__8454;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8454__$1);
if(temp__4425__auto__){
var s__8454__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8454__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8454__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8456 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8455 = (0);
while(true){
if((i__8455 < size__5939__auto__)){
var a = cljs.core._nth.call(null,c__5938__auto__,i__8455);
cljs.core.chunk_append.call(null,b__8456,kanban.components.card.assignee.call(null,a));

var G__8460 = (i__8455 + (1));
i__8455 = G__8460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8456),kanban$components$card$iter__8453.call(null,cljs.core.chunk_rest.call(null,s__8454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8456),null);
}
} else {
var a = cljs.core.first.call(null,s__8454__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__8453.call(null,cljs.core.rest.call(null,s__8454__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459))
,null,null));
});})(ref,map__8446,map__8446__$1,id,text,assignees,map__8447,map__8447__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_8441,_STAR_depth_STAR_8442,_STAR_shared_STAR_8443,_STAR_instrument_STAR_8444,_STAR_parent_STAR_8445,this$,x8440_8459))
;
return iter__5940__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8445;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8444;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8443;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8442;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8441;
}});})(x8440_8459))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x8457_8461 = kanban.components.card.Card;
x8457_8461.om$next$Ident$ = true;

x8457_8461.om$next$Ident$ident$arity$2 = ((function (x8457_8461){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8457_8461))
;

x8457_8461.om$next$IQuery$ = true;

x8457_8461.om$next$IQuery$query$arity$1 = ((function (x8457_8461){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8457_8461))
;


var x8458_8462 = kanban.components.card.Card.prototype;
x8458_8462.om$next$Ident$ = true;

x8458_8462.om$next$Ident$ident$arity$2 = ((function (x8458_8462){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8458_8462))
;

x8458_8462.om$next$IQuery$ = true;

x8458_8462.om$next$IQuery$query$arity$1 = ((function (x8458_8462){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8458_8462))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map