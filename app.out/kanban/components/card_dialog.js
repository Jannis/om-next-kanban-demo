// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.card_dialog');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.card_dialog.CardDialog = (function kanban$components$card_dialog$CardDialog(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.card_dialog.CardDialog.prototype = goog.object.clone(React.Component.prototype);

var x14962_15048 = kanban.components.card_dialog.CardDialog.prototype;
x14962_15048.componentWillUpdate = ((function (x14962_15048){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14962_15048))
;

x14962_15048.shouldComponentUpdate = ((function (x14962_15048){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14965 = this__12855__auto__.state;
var G__14966 = "omcljs$state";
return goog.object.get(G__14965,G__14966);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14962_15048))
;

x14962_15048.componentWillUnmount = ((function (x14962_15048){
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
});})(x14962_15048))
;

x14962_15048.componentDidUpdate = ((function (x14962_15048){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14962_15048))
;

x14962_15048.isMounted = ((function (x14962_15048){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14962_15048))
;

x14962_15048.componentWillMount = ((function (x14962_15048){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14962_15048))
;

x14962_15048.toggle_assignee = ((function (x14962_15048){
return (function (ref){
var this$ = this;
var map__14967 = om.next.props(this$);
var map__14967__$1 = ((((!((map__14967 == null)))?((((map__14967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14967):map__14967);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14967__$1,cljs.core.cst$kw$assignees);
var map__14968 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14968__$1 = ((((!((map__14968 == null)))?((((map__14968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14968):map__14968);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14968__$1,cljs.core.cst$kw$update_DASH_fn);
var add_or_remove_STAR_ = ((function (map__14967,map__14967__$1,assignees,map__14968,map__14968__$1,update_fn,this$,x14962_15048){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,x);
}
});})(map__14967,map__14967__$1,assignees,map__14968,map__14968__$1,update_fn,this$,x14962_15048))
;
var G__14971 = om.next.get_ident(this$);
var G__14972 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$assignees,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_(ref,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14971,map__14967,map__14967__$1,assignees,map__14968,map__14968__$1,update_fn,this$,x14962_15048){
return (function (p1__14954_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__14954_SHARP_)], null);
});})(G__14971,map__14967,map__14967__$1,assignees,map__14968,map__14968__$1,update_fn,this$,x14962_15048))
,assignees))));
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__14971,G__14972) : update_fn.call(null,G__14971,G__14972));
});})(x14962_15048))
;

x14962_15048.update_text = ((function (x14962_15048){
return (function (text){
var this$ = this;
var map__14973 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14973__$1 = ((((!((map__14973 == null)))?((((map__14973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14973):map__14973);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14973__$1,cljs.core.cst$kw$update_DASH_fn);
var G__14975 = om.next.get_ident(this$);
var G__14976 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,text], null);
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__14975,G__14976) : update_fn.call(null,G__14975,G__14976));
});})(x14962_15048))
;

x14962_15048.render = ((function (x14962_15048){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14977 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14978 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14979 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14980 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14981 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__14982 = om.next.props(this$);
var map__14982__$1 = ((((!((map__14982 == null)))?((((map__14982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14982):map__14982);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14982__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14982__$1,cljs.core.cst$kw$text);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14982__$1,cljs.core.cst$kw$assignees);
var map__14983 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14983__$1 = ((((!((map__14983 == null)))?((((map__14983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14983):map__14983);
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$users);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$close_DASH_fn);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14983__$1,cljs.core.cst$kw$update_DASH_fn);
var G__14986 = {"className": "dialog"};
var G__14987 = om.util.force_children((function (){var G__14989 = {"className": "dialog-closer", "onClick": close_fn};
return React.DOM.div(G__14989);
})());
var G__14988 = om.util.force_children((function (){var G__14990 = {"className": "dialog-content"};
var G__14991 = om.util.force_children((function (){var G__14995 = {"className": "dialog-title"};
var G__14996 = om.util.force_children("Edit card");
var G__14997 = om.util.force_children((function (){var G__14998 = {"className": "card-id"};
var G__14999 = om.util.force_children(id);
return React.DOM.span(G__14998,G__14999);
})());
return React.DOM.h1(G__14995,G__14996,G__14997);
})());
var G__14992 = om.util.force_children((function (){var G__15000 = {"onSubmit": ((function (G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function (p1__14955_SHARP_){
return p1__14955_SHARP_.preventDefault();
});})(G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
};
var G__15001 = om.util.force_children((function (){var G__15003 = {"className": "form-row"};
var G__15004 = om.util.force_children((function (){var G__15006 = null;
var G__15007 = om.util.force_children("Assignees:");
return React.DOM.label(G__15006,G__15007);
})());
var G__15005 = om.util.force_children((function (){var G__15008 = {"className": "input"};
var G__15009 = om.util.force_children(null);
var G__15010 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function kanban$components$card_dialog$iter__15011(s__15012){
return (new cljs.core.LazySeq(null,((function (G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function (){
var s__15012__$1 = s__15012;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__15012__$1);
if(temp__4425__auto__){
var s__15012__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15012__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__15012__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__15014 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__15013 = (0);
while(true){
if((i__15013 < size__5757__auto__)){
var user = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__15013);
cljs.core.chunk_append(b__15014,(function (){var selected = cljs.core.some(cljs.core.PersistentHashSet.fromArray([user], true),assignees);
var G__15019 = om.next.computed(user,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_name,true,cljs.core.cst$kw$activate_DASH_fn,((function (i__15013,selected,user,c__5756__auto__,size__5757__auto__,b__15014,s__15012__$2,temp__4425__auto__,G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function (p1__14956_SHARP_){
return this$.toggle_assignee(p1__14956_SHARP_);
});})(i__15013,selected,user,c__5756__auto__,size__5757__auto__,b__15014,s__15012__$2,temp__4425__auto__,G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
,cljs.core.cst$kw$selected,selected], null));
return (kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(G__15019) : kanban.components.card.assignee.call(null,G__15019));
})());

var G__15049 = (i__15013 + (1));
i__15013 = G__15049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15014),kanban$components$card_dialog$iter__15011(cljs.core.chunk_rest(s__15012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15014),null);
}
} else {
var user = cljs.core.first(s__15012__$2);
return cljs.core.cons((function (){var selected = cljs.core.some(cljs.core.PersistentHashSet.fromArray([user], true),assignees);
var G__15020 = om.next.computed(user,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_name,true,cljs.core.cst$kw$activate_DASH_fn,((function (selected,user,s__15012__$2,temp__4425__auto__,G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function (p1__14956_SHARP_){
return this$.toggle_assignee(p1__14956_SHARP_);
});})(selected,user,s__15012__$2,temp__4425__auto__,G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
,cljs.core.cst$kw$selected,selected], null));
return (kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(G__15020) : kanban.components.card.assignee.call(null,G__15020));
})(),kanban$components$card_dialog$iter__15011(cljs.core.rest(s__15012__$2)));
}
} else {
return null;
}
break;
}
});})(G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
,null,null));
});})(G__15008,G__15009,G__15003,G__15004,G__15000,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
;
return iter__5758__auto__(users);
})());
return React.DOM.div(G__15008,G__15009,G__15010);
})());
return React.DOM.div(G__15003,G__15004,G__15005);
})());
var G__15002 = om.util.force_children((function (){var G__15021 = {"className": "form-row"};
var G__15022 = om.util.force_children((function (){var G__15024 = null;
var G__15025 = om.util.force_children("Text:");
return React.DOM.label(G__15024,G__15025);
})());
var G__15023 = om.util.force_children((function (){var G__15026 = {"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (G__15021,G__15022,G__15000,G__15001,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048){
return (function (p1__14957_SHARP_){
return this$.update_text(p1__14957_SHARP_.target.value);
});})(G__15021,G__15022,G__15000,G__15001,G__14990,G__14991,G__14986,G__14987,map__14982,map__14982__$1,id,text,assignees,map__14983,map__14983__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_14977,_STAR_depth_STAR_14978,_STAR_shared_STAR_14979,_STAR_instrument_STAR_14980,_STAR_parent_STAR_14981,this$,this__12854__auto__,x14962_15048))
};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__15026) : om.dom.textarea.call(null,G__15026));
})());
return React.DOM.div(G__15021,G__15022,G__15023);
})());
return React.DOM.form(G__15000,G__15001,G__15002);
})());
var G__14993 = om.util.force_children((function (){var G__15027 = {"className": "dialog-buttons"};
var G__15028 = om.util.force_children((function (){var G__15029 = {"onClick": close_fn};
var G__15030 = om.util.force_children("Close");
return React.DOM.button(G__15029,G__15030);
})());
return React.DOM.p(G__15027,G__15028);
})());
var G__14994 = om.util.force_children((function (){var G__15031 = {"className": "help"};
var G__15032 = om.util.force_children((function (){var G__15034 = {"className": "help-title"};
var G__15035 = om.util.force_children("Help");
return React.DOM.h3(G__15034,G__15035);
})());
var G__15033 = om.util.force_children((function (){var G__15036 = {"className": "instructions"};
var G__15037 = om.util.force_children((function (){var G__15040 = null;
var G__15041 = om.util.force_children("Edit card assignees by clicking on their names");
return React.DOM.li(G__15040,G__15041);
})());
var G__15038 = om.util.force_children((function (){var G__15042 = null;
var G__15043 = om.util.force_children("Change the card description via the text field");
return React.DOM.li(G__15042,G__15043);
})());
var G__15039 = om.util.force_children((function (){var G__15044 = null;
var G__15045 = om.util.force_children("Click anywhere to close the dialog");
return React.DOM.li(G__15044,G__15045);
})());
return React.DOM.ul(G__15036,G__15037,G__15038,G__15039);
})());
return React.DOM.div(G__15031,G__15032,G__15033);
})());
return React.DOM.div(G__14990,G__14991,G__14992,G__14993,G__14994);
})());
return React.DOM.div(G__14986,G__14987,G__14988);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14981;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14980;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14979;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14978;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14977;
}});})(x14962_15048))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x15046_15050 = kanban.components.card_dialog.CardDialog;
x15046_15050.om$next$Ident$ = true;

x15046_15050.om$next$Ident$ident$arity$2 = ((function (x15046_15050){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15046_15050))
;

x15046_15050.om$next$IQuery$ = true;

x15046_15050.om$next$IQuery$query$arity$1 = ((function (x15046_15050){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x15046_15050))
;


var x15047_15051 = kanban.components.card_dialog.CardDialog.prototype;
x15047_15051.om$next$Ident$ = true;

x15047_15051.om$next$Ident$ident$arity$2 = ((function (x15047_15051){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15047_15051))
;

x15047_15051.om$next$IQuery$ = true;

x15047_15051.om$next$IQuery$query$arity$1 = ((function (x15047_15051){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x15047_15051))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__15052_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_dialog,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15052_SHARP_)], null);
})], null));
