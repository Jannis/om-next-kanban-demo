// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x13119_13139 = kanban.components.card.Assignee.prototype;
x13119_13139.componentWillUpdate = ((function (x13119_13139){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13119_13139))
;

x13119_13139.shouldComponentUpdate = ((function (x13119_13139){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13122 = this__12403__auto__.state;
var G__13123 = "omcljs$state";
return goog.object.get(G__13122,G__13123);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13119_13139))
;

x13119_13139.componentWillUnmount = ((function (x13119_13139){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13119_13139))
;

x13119_13139.componentDidUpdate = ((function (x13119_13139){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13119_13139))
;

x13119_13139.isMounted = ((function (x13119_13139){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13119_13139))
;

x13119_13139.componentWillMount = ((function (x13119_13139){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13119_13139))
;

x13119_13139.render = ((function (x13119_13139){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13124 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13125 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13126 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13127 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13128 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13129 = om.next.props(this$);
var map__13129__$1 = ((((!((map__13129 == null)))?((((map__13129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13129):map__13129);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,cljs.core.cst$kw$username);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13129__$1,cljs.core.cst$kw$name);
var map__13130 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13130__$1 = ((((!((map__13130 == null)))?((((map__13130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13130):map__13130);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13130__$1,cljs.core.cst$kw$selected);
var with_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13130__$1,cljs.core.cst$kw$with_DASH_name);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13130__$1,cljs.core.cst$kw$activate_DASH_fn);
var G__13134 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$assignee,true,cljs.core.cst$kw$selected,selected], null)), "onClick": ((function (map__13129,map__13129__$1,username,name,map__13130,map__13130__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_13124,_STAR_depth_STAR_13125,_STAR_shared_STAR_13126,_STAR_instrument_STAR_13127,_STAR_parent_STAR_13128,this$,x13119_13139){
return (function (){
var G__13136 = om.next.get_ident(this$);
return (activate_fn.cljs$core$IFn$_invoke$arity$1 ? activate_fn.cljs$core$IFn$_invoke$arity$1(G__13136) : activate_fn.call(null,G__13136));
});})(map__13129,map__13129__$1,username,name,map__13130,map__13130__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_13124,_STAR_depth_STAR_13125,_STAR_shared_STAR_13126,_STAR_instrument_STAR_13127,_STAR_parent_STAR_13128,this$,x13119_13139))
, "title": name};
var G__13135 = (cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username));
return React.DOM.span(G__13134,G__13135);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13128;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13127;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13126;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13125;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13124;
}});})(x13119_13139))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x13137_13140 = kanban.components.card.Assignee;
x13137_13140.om$next$Ident$ = true;

x13137_13140.om$next$Ident$ident$arity$2 = ((function (x13137_13140){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13137_13140))
;

x13137_13140.om$next$IQuery$ = true;

x13137_13140.om$next$IQuery$query$arity$1 = ((function (x13137_13140){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$name], null);
});})(x13137_13140))
;


var x13138_13141 = kanban.components.card.Assignee.prototype;
x13138_13141.om$next$Ident$ = true;

x13138_13141.om$next$Ident$ident$arity$2 = ((function (x13138_13141){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13138_13141))
;

x13138_13141.om$next$IQuery$ = true;

x13138_13141.om$next$IQuery$query$arity$1 = ((function (x13138_13141){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$name], null);
});})(x13138_13141))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x13146_13182 = kanban.components.card.Card.prototype;
x13146_13182.componentWillUpdate = ((function (x13146_13182){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13146_13182))
;

x13146_13182.shouldComponentUpdate = ((function (x13146_13182){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13149 = this__12403__auto__.state;
var G__13150 = "omcljs$state";
return goog.object.get(G__13149,G__13150);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13146_13182))
;

x13146_13182.componentWillUnmount = ((function (x13146_13182){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13146_13182))
;

x13146_13182.componentDidUpdate = ((function (x13146_13182){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13146_13182))
;

x13146_13182.isMounted = ((function (x13146_13182){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13146_13182))
;

x13146_13182.componentWillMount = ((function (x13146_13182){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13146_13182))
;

x13146_13182.render = ((function (x13146_13182){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13151 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13152 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13153 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13154 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13155 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13156 = om.next.props(this$);
var map__13156__$1 = ((((!((map__13156 == null)))?((((map__13156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13156):map__13156);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$text);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13156__$1,cljs.core.cst$kw$assignees);
var map__13157 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13157__$1 = ((((!((map__13157 == null)))?((((map__13157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13157):map__13157);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,cljs.core.cst$kw$drag_DASH_fns);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,cljs.core.cst$kw$activate_DASH_fn);
var ref = om.next.get_ident(this$);
var G__13163 = {"className": "card", "onClick": ((function (ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182){
return (function (){
var G__13167 = activate_fn;
var G__13167__$1 = (((G__13167 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13167__$1;
});})(ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182))
, "draggable": true, "onDragStart": ((function (ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__13168 = drag_fns;
var G__13168__$1 = (((G__13168 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__13168));
var G__13168__$2 = (((G__13168__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13168__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13168__$2;
});})(ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182))
, "onDragEnd": ((function (ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182){
return (function (){
var G__13169 = drag_fns;
var G__13169__$1 = (((G__13169 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__13169));
var G__13169__$2 = (((G__13169__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13169__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13169__$2;
});})(ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182))
};
var G__13164 = (function (){var G__13170 = {"className": "card-id"};
var G__13171 = id;
return React.DOM.span(G__13170,G__13171);
})();
var G__13165 = (function (){var iter__5940__auto__ = ((function (G__13163,G__13164,ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182){
return (function kanban$components$card$iter__13172(s__13173){
return (new cljs.core.LazySeq(null,((function (G__13163,G__13164,ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182){
return (function (){
var s__13173__$1 = s__13173;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13173__$1);
if(temp__4425__auto__){
var s__13173__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13173__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13173__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13175 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13174 = (0);
while(true){
if((i__13174 < size__5939__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13174);
cljs.core.chunk_append(b__13175,(kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(a) : kanban.components.card.assignee.call(null,a)));

var G__13183 = (i__13174 + (1));
i__13174 = G__13183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13175),kanban$components$card$iter__13172(cljs.core.chunk_rest(s__13173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13175),null);
}
} else {
var a = cljs.core.first(s__13173__$2);
return cljs.core.cons((kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(a) : kanban.components.card.assignee.call(null,a)),kanban$components$card$iter__13172(cljs.core.rest(s__13173__$2)));
}
} else {
return null;
}
break;
}
});})(G__13163,G__13164,ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182))
,null,null));
});})(G__13163,G__13164,ref,map__13156,map__13156__$1,id,text,assignees,map__13157,map__13157__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13151,_STAR_depth_STAR_13152,_STAR_shared_STAR_13153,_STAR_instrument_STAR_13154,_STAR_parent_STAR_13155,this$,x13146_13182))
;
return iter__5940__auto__(assignees);
})();
var G__13166 = (function (){var G__13178 = {"className": "text"};
var G__13179 = text;
return React.DOM.span(G__13178,G__13179);
})();
return React.DOM.div(G__13163,G__13164,G__13165,G__13166);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13155;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13154;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13153;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13152;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13151;
}});})(x13146_13182))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x13180_13184 = kanban.components.card.Card;
x13180_13184.om$next$Ident$ = true;

x13180_13184.om$next$Ident$ident$arity$2 = ((function (x13180_13184){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13180_13184))
;

x13180_13184.om$next$IQuery$ = true;

x13180_13184.om$next$IQuery$query$arity$1 = ((function (x13180_13184){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13180_13184))
;


var x13181_13185 = kanban.components.card.Card.prototype;
x13181_13185.om$next$Ident$ = true;

x13181_13185.om$next$Ident$ident$arity$2 = ((function (x13181_13185){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13181_13185))
;

x13181_13185.om$next$IQuery$ = true;

x13181_13185.om$next$IQuery$query$arity$1 = ((function (x13181_13185){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13181_13185))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
