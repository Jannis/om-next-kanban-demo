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
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x13827_13847 = kanban.components.card.Assignee.prototype;
x13827_13847.componentWillUpdate = ((function (x13827_13847){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x13827_13847))
;

x13827_13847.shouldComponentUpdate = ((function (x13827_13847){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13830 = this__12855__auto__.state;
var G__13831 = "omcljs$state";
return goog.object.get(G__13830,G__13831);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x13827_13847))
;

x13827_13847.componentWillUnmount = ((function (x13827_13847){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x13827_13847))
;

x13827_13847.componentDidUpdate = ((function (x13827_13847){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x13827_13847))
;

x13827_13847.isMounted = ((function (x13827_13847){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13827_13847))
;

x13827_13847.componentWillMount = ((function (x13827_13847){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x13827_13847))
;

x13827_13847.render = ((function (x13827_13847){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_13832 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13833 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13834 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13835 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13836 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__13837 = om.next.props(this$);
var map__13837__$1 = ((((!((map__13837 == null)))?((((map__13837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13837):map__13837);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,cljs.core.cst$kw$username);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,cljs.core.cst$kw$name);
var map__13838 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13838__$1 = ((((!((map__13838 == null)))?((((map__13838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13838):map__13838);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13838__$1,cljs.core.cst$kw$selected);
var with_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13838__$1,cljs.core.cst$kw$with_DASH_name);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13838__$1,cljs.core.cst$kw$activate_DASH_fn);
var G__13842 = {"className": kanban.util.class_names(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$assignee,true,cljs.core.cst$kw$selected,selected], null)), "onClick": ((function (map__13837,map__13837__$1,username,name,map__13838,map__13838__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_13832,_STAR_depth_STAR_13833,_STAR_shared_STAR_13834,_STAR_instrument_STAR_13835,_STAR_parent_STAR_13836,this$,this__12854__auto__,x13827_13847){
return (function (){
if(cljs.core.truth_(activate_fn)){
var G__13844 = om.next.get_ident(this$);
return (activate_fn.cljs$core$IFn$_invoke$arity$1 ? activate_fn.cljs$core$IFn$_invoke$arity$1(G__13844) : activate_fn.call(null,G__13844));
} else {
return null;
}
});})(map__13837,map__13837__$1,username,name,map__13838,map__13838__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_13832,_STAR_depth_STAR_13833,_STAR_shared_STAR_13834,_STAR_instrument_STAR_13835,_STAR_parent_STAR_13836,this$,this__12854__auto__,x13827_13847))
, "title": name};
var G__13843 = om.util.force_children((cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
return React.DOM.span(G__13842,G__13843);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13836;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13835;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13834;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13833;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13832;
}});})(x13827_13847))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x13845_13848 = kanban.components.card.Assignee;
x13845_13848.om$next$Ident$ = true;

x13845_13848.om$next$Ident$ident$arity$2 = ((function (x13845_13848){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13845_13848))
;

x13845_13848.om$next$IQuery$ = true;

x13845_13848.om$next$IQuery$query$arity$1 = ((function (x13845_13848){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$name], null);
});})(x13845_13848))
;


var x13846_13849 = kanban.components.card.Assignee.prototype;
x13846_13849.om$next$Ident$ = true;

x13846_13849.om$next$Ident$ident$arity$2 = ((function (x13846_13849){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13846_13849))
;

x13846_13849.om$next$IQuery$ = true;

x13846_13849.om$next$IQuery$query$arity$1 = ((function (x13846_13849){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$username,cljs.core.cst$kw$name], null);
});})(x13846_13849))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x13854_13890 = kanban.components.card.Card.prototype;
x13854_13890.componentWillUpdate = ((function (x13854_13890){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x13854_13890))
;

x13854_13890.shouldComponentUpdate = ((function (x13854_13890){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13857 = this__12855__auto__.state;
var G__13858 = "omcljs$state";
return goog.object.get(G__13857,G__13858);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x13854_13890))
;

x13854_13890.componentWillUnmount = ((function (x13854_13890){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x13854_13890))
;

x13854_13890.componentDidUpdate = ((function (x13854_13890){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x13854_13890))
;

x13854_13890.isMounted = ((function (x13854_13890){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13854_13890))
;

x13854_13890.componentWillMount = ((function (x13854_13890){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x13854_13890))
;

x13854_13890.render = ((function (x13854_13890){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_13859 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13860 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13861 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13862 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13863 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__13864 = om.next.props(this$);
var map__13864__$1 = ((((!((map__13864 == null)))?((((map__13864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13864):map__13864);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.cst$kw$text);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.cst$kw$assignees);
var map__13865 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13865__$1 = ((((!((map__13865 == null)))?((((map__13865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13865):map__13865);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$drag_DASH_fns);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13865__$1,cljs.core.cst$kw$activate_DASH_fn);
var ref = om.next.get_ident(this$);
var G__13871 = {"className": "card", "onClick": ((function (ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890){
return (function (){
var G__13875 = activate_fn;
var G__13875__$1 = (((G__13875 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13875__$1;
});})(ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890))
, "draggable": true, "onDragStart": ((function (ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890){
return (function (e){
e.dataTransfer.setData("text/plain",[cljs.core.str(ref)].join(''));

var G__13876 = drag_fns;
var G__13876__$1 = (((G__13876 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__13876));
var G__13876__$2 = (((G__13876__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13876__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13876__$2;
});})(ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890))
, "onDragEnd": ((function (ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890){
return (function (){
var G__13877 = drag_fns;
var G__13877__$1 = (((G__13877 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__13877));
var G__13877__$2 = (((G__13877__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__13877__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null)));
return G__13877__$2;
});})(ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890))
};
var G__13872 = om.util.force_children((function (){var G__13878 = {"className": "card-id"};
var G__13879 = om.util.force_children(id);
return React.DOM.span(G__13878,G__13879);
})());
var G__13873 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__13871,G__13872,ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890){
return (function kanban$components$card$iter__13880(s__13881){
return (new cljs.core.LazySeq(null,((function (G__13871,G__13872,ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890){
return (function (){
var s__13881__$1 = s__13881;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13881__$1);
if(temp__4425__auto__){
var s__13881__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13881__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__13881__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__13883 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__13882 = (0);
while(true){
if((i__13882 < size__5757__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__13882);
cljs.core.chunk_append(b__13883,(kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(a) : kanban.components.card.assignee.call(null,a)));

var G__13891 = (i__13882 + (1));
i__13882 = G__13891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13883),kanban$components$card$iter__13880(cljs.core.chunk_rest(s__13881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13883),null);
}
} else {
var a = cljs.core.first(s__13881__$2);
return cljs.core.cons((kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(a) : kanban.components.card.assignee.call(null,a)),kanban$components$card$iter__13880(cljs.core.rest(s__13881__$2)));
}
} else {
return null;
}
break;
}
});})(G__13871,G__13872,ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890))
,null,null));
});})(G__13871,G__13872,ref,map__13864,map__13864__$1,id,text,assignees,map__13865,map__13865__$1,drag_fns,activate_fn,_STAR_reconciler_STAR_13859,_STAR_depth_STAR_13860,_STAR_shared_STAR_13861,_STAR_instrument_STAR_13862,_STAR_parent_STAR_13863,this$,this__12854__auto__,x13854_13890))
;
return iter__5758__auto__(assignees);
})());
var G__13874 = om.util.force_children((function (){var G__13886 = {"className": "text"};
var G__13887 = om.util.force_children(text);
return React.DOM.span(G__13886,G__13887);
})());
return React.DOM.div(G__13871,G__13872,G__13873,G__13874);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13863;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13862;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13861;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13860;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13859;
}});})(x13854_13890))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x13888_13892 = kanban.components.card.Card;
x13888_13892.om$next$Ident$ = true;

x13888_13892.om$next$Ident$ident$arity$2 = ((function (x13888_13892){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13888_13892))
;

x13888_13892.om$next$IQuery$ = true;

x13888_13892.om$next$IQuery$query$arity$1 = ((function (x13888_13892){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13888_13892))
;


var x13889_13893 = kanban.components.card.Card.prototype;
x13889_13893.om$next$Ident$ = true;

x13889_13893.om$next$Ident$ident$arity$2 = ((function (x13889_13893){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13889_13893))
;

x13889_13893.om$next$IQuery$ = true;

x13889_13893.om$next$IQuery$query$arity$1 = ((function (x13889_13893){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13889_13893))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
