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
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.card_dialog.CardDialog.prototype = goog.object.clone(React.Component.prototype);

var x13836_13912 = kanban.components.card_dialog.CardDialog.prototype;
x13836_13912.componentWillUpdate = ((function (x13836_13912){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13836_13912))
;

x13836_13912.shouldComponentUpdate = ((function (x13836_13912){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13839 = this__12403__auto__.state;
var G__13840 = "omcljs$state";
return goog.object.get(G__13839,G__13840);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13836_13912))
;

x13836_13912.componentWillUnmount = ((function (x13836_13912){
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
});})(x13836_13912))
;

x13836_13912.componentDidUpdate = ((function (x13836_13912){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13836_13912))
;

x13836_13912.isMounted = ((function (x13836_13912){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13836_13912))
;

x13836_13912.componentWillMount = ((function (x13836_13912){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13836_13912))
;

x13836_13912.toggle_assignee = ((function (x13836_13912){
return (function (ref){
var this$ = this;
var map__13841 = om.next.props(this$);
var map__13841__$1 = ((((!((map__13841 == null)))?((((map__13841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13841):map__13841);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13841__$1,cljs.core.cst$kw$assignees);
var map__13842 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13842__$1 = ((((!((map__13842 == null)))?((((map__13842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13842):map__13842);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13842__$1,cljs.core.cst$kw$update_DASH_fn);
var add_or_remove_STAR_ = ((function (map__13841,map__13841__$1,assignees,map__13842,map__13842__$1,update_fn,this$,x13836_13912){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,x);
}
});})(map__13841,map__13841__$1,assignees,map__13842,map__13842__$1,update_fn,this$,x13836_13912))
;
var G__13845 = om.next.get_ident(this$);
var G__13846 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$assignees,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_(ref,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__13845,map__13841,map__13841__$1,assignees,map__13842,map__13842__$1,update_fn,this$,x13836_13912){
return (function (p1__13828_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13828_SHARP_)], null);
});})(G__13845,map__13841,map__13841__$1,assignees,map__13842,map__13842__$1,update_fn,this$,x13836_13912))
,assignees))));
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__13845,G__13846) : update_fn.call(null,G__13845,G__13846));
});})(x13836_13912))
;

x13836_13912.update_text = ((function (x13836_13912){
return (function (text){
var this$ = this;
var map__13847 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13847__$1 = ((((!((map__13847 == null)))?((((map__13847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13847):map__13847);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.cst$kw$update_DASH_fn);
var G__13849 = om.next.get_ident(this$);
var G__13850 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,text], null);
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__13849,G__13850) : update_fn.call(null,G__13849,G__13850));
});})(x13836_13912))
;

x13836_13912.render = ((function (x13836_13912){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13851 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13852 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13853 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13854 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13855 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13856 = om.next.props(this$);
var map__13856__$1 = ((((!((map__13856 == null)))?((((map__13856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13856):map__13856);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.cst$kw$text);
var assignees = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13856__$1,cljs.core.cst$kw$assignees);
var map__13857 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13857__$1 = ((((!((map__13857 == null)))?((((map__13857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13857):map__13857);
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$users);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$close_DASH_fn);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13857__$1,cljs.core.cst$kw$update_DASH_fn);
var G__13860 = {"className": "dialog"};
var G__13861 = (function (){var G__13863 = {"className": "dialog-closer", "onClick": close_fn};
return React.DOM.div(G__13863);
})();
var G__13862 = (function (){var G__13864 = {"className": "dialog-content"};
var G__13865 = (function (){var G__13869 = {"className": "dialog-title"};
var G__13870 = "Edit card";
var G__13871 = (function (){var G__13872 = {"className": "card-id"};
var G__13873 = id;
return React.DOM.span(G__13872,G__13873);
})();
return React.DOM.h1(G__13869,G__13870,G__13871);
})();
var G__13866 = (function (){var G__13874 = {"onSubmit": ((function (G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function (p1__13829_SHARP_){
return p1__13829_SHARP_.preventDefault();
});})(G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
};
var G__13875 = (function (){var G__13877 = {"className": "form-row"};
var G__13878 = React.DOM.label(null,"Assignees:");
var G__13879 = (function (){var G__13880 = {"className": "input"};
var G__13881 = null;
var G__13882 = (function (){var iter__5940__auto__ = ((function (G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function kanban$components$card_dialog$iter__13883(s__13884){
return (new cljs.core.LazySeq(null,((function (G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function (){
var s__13884__$1 = s__13884;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13884__$1);
if(temp__4425__auto__){
var s__13884__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13884__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13884__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13886 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13885 = (0);
while(true){
if((i__13885 < size__5939__auto__)){
var user = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13885);
cljs.core.chunk_append(b__13886,(function (){var selected = cljs.core.some(cljs.core.PersistentHashSet.fromArray([user], true),assignees);
var G__13891 = om.next.computed(user,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_name,true,cljs.core.cst$kw$activate_DASH_fn,((function (i__13885,selected,user,c__5938__auto__,size__5939__auto__,b__13886,s__13884__$2,temp__4425__auto__,G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function (p1__13830_SHARP_){
return this$.toggle_assignee(p1__13830_SHARP_);
});})(i__13885,selected,user,c__5938__auto__,size__5939__auto__,b__13886,s__13884__$2,temp__4425__auto__,G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
,cljs.core.cst$kw$selected,selected], null));
return (kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(G__13891) : kanban.components.card.assignee.call(null,G__13891));
})());

var G__13913 = (i__13885 + (1));
i__13885 = G__13913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13886),kanban$components$card_dialog$iter__13883(cljs.core.chunk_rest(s__13884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13886),null);
}
} else {
var user = cljs.core.first(s__13884__$2);
return cljs.core.cons((function (){var selected = cljs.core.some(cljs.core.PersistentHashSet.fromArray([user], true),assignees);
var G__13892 = om.next.computed(user,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$with_DASH_name,true,cljs.core.cst$kw$activate_DASH_fn,((function (selected,user,s__13884__$2,temp__4425__auto__,G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function (p1__13830_SHARP_){
return this$.toggle_assignee(p1__13830_SHARP_);
});})(selected,user,s__13884__$2,temp__4425__auto__,G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
,cljs.core.cst$kw$selected,selected], null));
return (kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1 ? kanban.components.card.assignee.cljs$core$IFn$_invoke$arity$1(G__13892) : kanban.components.card.assignee.call(null,G__13892));
})(),kanban$components$card_dialog$iter__13883(cljs.core.rest(s__13884__$2)));
}
} else {
return null;
}
break;
}
});})(G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
,null,null));
});})(G__13880,G__13881,G__13877,G__13878,G__13874,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
;
return iter__5940__auto__(users);
})();
return React.DOM.div(G__13880,G__13881,G__13882);
})();
return React.DOM.div(G__13877,G__13878,G__13879);
})();
var G__13876 = (function (){var G__13893 = {"className": "form-row"};
var G__13894 = React.DOM.label(null,"Text:");
var G__13895 = (function (){var G__13896 = {"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (G__13893,G__13894,G__13874,G__13875,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912){
return (function (p1__13831_SHARP_){
return this$.update_text(p1__13831_SHARP_.target.value);
});})(G__13893,G__13894,G__13874,G__13875,G__13864,G__13865,G__13860,G__13861,map__13856,map__13856__$1,id,text,assignees,map__13857,map__13857__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_13851,_STAR_depth_STAR_13852,_STAR_shared_STAR_13853,_STAR_instrument_STAR_13854,_STAR_parent_STAR_13855,this$,x13836_13912))
};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__13896) : om.dom.textarea.call(null,G__13896));
})();
return React.DOM.div(G__13893,G__13894,G__13895);
})();
return React.DOM.form(G__13874,G__13875,G__13876);
})();
var G__13867 = (function (){var G__13897 = {"className": "dialog-buttons"};
var G__13898 = (function (){var G__13899 = {"onClick": close_fn};
var G__13900 = "Close";
return React.DOM.button(G__13899,G__13900);
})();
return React.DOM.p(G__13897,G__13898);
})();
var G__13868 = (function (){var G__13901 = {"className": "help"};
var G__13902 = (function (){var G__13904 = {"className": "help-title"};
var G__13905 = "Help";
return React.DOM.h3(G__13904,G__13905);
})();
var G__13903 = (function (){var G__13906 = {"className": "instructions"};
var G__13907 = React.DOM.li(null,"Edit card assignees by clicking on their names");
var G__13908 = React.DOM.li(null,"Change the card description via the text field");
var G__13909 = React.DOM.li(null,"Click anywhere to close the dialog");
return React.DOM.ul(G__13906,G__13907,G__13908,G__13909);
})();
return React.DOM.div(G__13901,G__13902,G__13903);
})();
return React.DOM.div(G__13864,G__13865,G__13866,G__13867,G__13868);
})();
return React.DOM.div(G__13860,G__13861,G__13862);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13855;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13854;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13853;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13852;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13851;
}});})(x13836_13912))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x13910_13914 = kanban.components.card_dialog.CardDialog;
x13910_13914.om$next$Ident$ = true;

x13910_13914.om$next$Ident$ident$arity$2 = ((function (x13910_13914){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13910_13914))
;

x13910_13914.om$next$IQuery$ = true;

x13910_13914.om$next$IQuery$query$arity$1 = ((function (x13910_13914){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13910_13914))
;


var x13911_13915 = kanban.components.card_dialog.CardDialog.prototype;
x13911_13915.om$next$Ident$ = true;

x13911_13915.om$next$Ident$ident$arity$2 = ((function (x13911_13915){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13911_13915))
;

x13911_13915.om$next$IQuery$ = true;

x13911_13915.om$next$IQuery$query$arity$1 = ((function (x13911_13915){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$assignees,om.next.get_query(kanban.components.card.Assignee)], null)], null);
});})(x13911_13915))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__13916_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_dialog,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13916_SHARP_)], null);
})], null));
