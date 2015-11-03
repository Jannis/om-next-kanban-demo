// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.completion_input');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.completion_input.match_key = (function kanban$components$completion_input$match_key(x){
var props = (function (){var G__83001 = x;
var G__83001__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__83001):G__83001);
return G__83001__$1;
})();
return new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)).call(null,props);
});
/**
 * @constructor
 */
kanban.components.completion_input.CompletionMatch = (function kanban$components$completion_input$CompletionMatch(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.completion_input.CompletionMatch.prototype = goog.object.clone(React.Component.prototype);

var x83006_83016 = kanban.components.completion_input.CompletionMatch.prototype;
x83006_83016.componentWillUpdate = ((function (x83006_83016){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x83006_83016))
;

x83006_83016.shouldComponentUpdate = ((function (x83006_83016){
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
});})(x83006_83016))
;

x83006_83016.componentWillUnmount = ((function (x83006_83016){
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
});})(x83006_83016))
;

x83006_83016.componentDidUpdate = ((function (x83006_83016){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x83006_83016))
;

x83006_83016.isMounted = ((function (x83006_83016){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x83006_83016))
;

x83006_83016.componentWillMount = ((function (x83006_83016){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x83006_83016))
;

x83006_83016.render = ((function (x83006_83016){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_83007 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_83008 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_83009 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_83010 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_83011 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__83012 = om.next.get_computed.call(null,this$);
var map__83012__$1 = ((((!((map__83012 == null)))?((((map__83012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83012):map__83012);
var selected = cljs.core.get.call(null,map__83012__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var activate_fn = cljs.core.get.call(null,map__83012__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var element_fn = cljs.core.get.call(null,map__83012__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
return React.DOM.div({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completion-input-match","completion-input-match",1327544031),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__83012,map__83012__$1,selected,activate_fn,element_fn,_STAR_reconciler_STAR_83007,_STAR_depth_STAR_83008,_STAR_shared_STAR_83009,_STAR_instrument_STAR_83010,_STAR_parent_STAR_83011,this$,x83006_83016){
return (function (){
if(cljs.core.truth_(activate_fn)){
return activate_fn.call(null);
} else {
return null;
}
});})(map__83012,map__83012__$1,selected,activate_fn,element_fn,_STAR_reconciler_STAR_83007,_STAR_depth_STAR_83008,_STAR_shared_STAR_83009,_STAR_instrument_STAR_83010,_STAR_parent_STAR_83011,this$,x83006_83016))
},element_fn.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_83011;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_83010;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_83009;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_83008;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_83007;
}});})(x83006_83016))
;


kanban.components.completion_input.CompletionMatch.prototype.constructor = kanban.components.completion_input.CompletionMatch;

kanban.components.completion_input.CompletionMatch.prototype.om$isComponent = true;

var x83014_83017 = kanban.components.completion_input.CompletionMatch;


var x83015_83018 = kanban.components.completion_input.CompletionMatch.prototype;


kanban.components.completion_input.CompletionMatch.cljs$lang$type = true;

kanban.components.completion_input.CompletionMatch.cljs$lang$ctorStr = "kanban.components.completion-input/CompletionMatch";

kanban.components.completion_input.CompletionMatch.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.completion-input/CompletionMatch");
});
kanban.components.completion_input.completion_match = om.next.factory.call(null,kanban.components.completion_input.CompletionMatch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.completion_input.match_key], null));
/**
 * @constructor
 */
kanban.components.completion_input.CompletionInput = (function kanban$components$completion_input$CompletionInput(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.completion_input.CompletionInput.prototype = goog.object.clone(React.Component.prototype);

var x83025_83050 = kanban.components.completion_input.CompletionInput.prototype;
x83025_83050.componentWillUpdate = ((function (x83025_83050){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x83025_83050))
;

x83025_83050.shouldComponentUpdate = ((function (x83025_83050){
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
});})(x83025_83050))
;

x83025_83050.componentWillUnmount = ((function (x83025_83050){
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
});})(x83025_83050))
;

x83025_83050.componentDidUpdate = ((function (x83025_83050){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x83025_83050))
;

x83025_83050.isMounted = ((function (x83025_83050){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x83025_83050))
;

x83025_83050.update_matches = ((function (x83025_83050){
return (function (text){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x83025_83050){
return (function (state,matches){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"matches","matches",635497998),matches),new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),((function (this$,x83025_83050){
return (function (state__$1,selected_match){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([selected_match], true),matches))){
return selected_match;
} else {
return cljs.core.first.call(null,matches);
}
});})(this$,x83025_83050))
);
});})(this$,x83025_83050))
,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"match-fn","match-fn",1859208916).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),text),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)))));
});})(x83025_83050))
;

x83025_83050.update_text = ((function (x83025_83050){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),text);

return this$.update_matches(text);
});})(x83025_83050))
;

x83025_83050.show_matches = ((function (x83025_83050){
return (function (show){
var this$ = this;
cljs.core.println.call(null,"show matches",show);

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"show-matches","show-matches",410578763),show);
});})(x83025_83050))
;

x83025_83050.activate_match = ((function (x83025_83050){
return (function (match){
var this$ = this;
this$.show_matches(false);

this$.update_text("");

om.dom.node.call(null,om.next.react_ref.call(null,this$,new cljs.core.Keyword(null,"input","input",556931961))).focus();

var map__83026 = om.next.props.call(null,this$);
var map__83026__$1 = ((((!((map__83026 == null)))?((((map__83026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83026):map__83026);
var activate_fn = cljs.core.get.call(null,map__83026__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
if(cljs.core.truth_((function (){var and__5082__auto__ = activate_fn;
if(cljs.core.truth_(and__5082__auto__)){
return match;
} else {
return and__5082__auto__;
}
})())){
return activate_fn.call(null,match);
} else {
return null;
}
});})(x83025_83050))
;

x83025_83050.handle_backspace = ((function (x83025_83050){
return (function (e){
var this$ = this;
if(((e.target.selectionStart === (0))) && (cljs.core._EQ_.call(null,e.target.selectionStart,e.target.selectionEnd))){
var map__83028 = om.next.props.call(null,this$);
var map__83028__$1 = ((((!((map__83028 == null)))?((((map__83028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83028):map__83028);
var back_fn = cljs.core.get.call(null,map__83028__$1,new cljs.core.Keyword(null,"back-fn","back-fn",-187558063));
if(cljs.core.truth_(back_fn)){
back_fn.call(null,this$);

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(x83025_83050))
;

x83025_83050.handle_up = ((function (x83025_83050){
return (function (e){
var this$ = this;
var map__83030 = om.next.get_state.call(null,this$);
var map__83030__$1 = ((((!((map__83030 == null)))?((((map__83030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83030):map__83030);
var matches = cljs.core.get.call(null,map__83030__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var selected_match = cljs.core.get.call(null,map__83030__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var index = kanban.util.index_of.call(null,selected_match,matches);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),cljs.core.get.call(null,matches,(function (){var x__5425__auto__ = (index - (1));
var y__5426__auto__ = (0);
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()));
});})(x83025_83050))
;

x83025_83050.handle_down = ((function (x83025_83050){
return (function (e){
var this$ = this;
var map__83032 = om.next.get_state.call(null,this$);
var map__83032__$1 = ((((!((map__83032 == null)))?((((map__83032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83032):map__83032);
var matches = cljs.core.get.call(null,map__83032__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var selected_match = cljs.core.get.call(null,map__83032__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var index = kanban.util.index_of.call(null,selected_match,matches);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),cljs.core.get.call(null,matches,(function (){var x__5432__auto__ = (index + (1));
var y__5433__auto__ = (cljs.core.count.call(null,matches) - (1));
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})()));
});})(x83025_83050))
;

x83025_83050.handle_escape = ((function (x83025_83050){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x83025_83050))
;

x83025_83050.handle_return = ((function (x83025_83050){
return (function (e){
var this$ = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"selected-match","selected-match",2125084326).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return this$.activate_match(match);
} else {
return null;
}
});})(x83025_83050))
;

x83025_83050.key_down = ((function (x83025_83050){
return (function (e){
var this$ = this;
this$.show_matches(true);

var G__83034 = e.keyCode;
switch (G__83034) {
case (8):
return this$.handle_backspace(e);

break;
case (38):
return this$.handle_up(e);

break;
case (40):
return this$.handle_down(e);

break;
case (27):
return this$.handle_escape(e);

break;
case (13):
return this$.handle_return(e);

break;
default:
return cljs.core.println.call(null,"key down",e.keyCode);

}
});})(x83025_83050))
;

x83025_83050.componentWillMount = ((function (x83025_83050){
return (function (){
var this$ = this;
var indexer__7521__auto___83052 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7521__auto___83052 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__7521__auto___83052,this$);
}

return this$.update_text("");
});})(x83025_83050))
;

x83025_83050.componentWillReceiveProps = ((function (x83025_83050){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props.call(null,props,this$);
return this$.update_matches(om.next.react_ref.call(null,this$,new cljs.core.Keyword(null,"input","input",556931961)).value);
});})(x83025_83050))
;

x83025_83050.render = ((function (x83025_83050){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_83035 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_83036 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_83037 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_83038 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_83039 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "completion-input", "onFocus": ((function (_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (){
return this$.show_matches(true);
});})(_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
, "onFocusOut": ((function (_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (){
return this$.show_matches(false);
});})(_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
},om.dom.input.call(null,{"ref": new cljs.core.Keyword(null,"input","input",556931961), "value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)), "className": "completion-input-input", "onChange": ((function (_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (p1__83019_SHARP_){
return this$.update_text(p1__83019_SHARP_.target.value);
});})(_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
, "onKeyDown": ((function (_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (p1__83020_SHARP_){
return this$.key_down(p1__83020_SHARP_);
});})(_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
}),(function (){var map__83040 = om.next.get_state.call(null,this$);
var map__83040__$1 = ((((!((map__83040 == null)))?((((map__83040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83040):map__83040);
var matches = cljs.core.get.call(null,map__83040__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var show_matches = cljs.core.get.call(null,map__83040__$1,new cljs.core.Keyword(null,"show-matches","show-matches",410578763));
var selected_match = cljs.core.get.call(null,map__83040__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var map__83041 = om.next.props.call(null,this$);
var map__83041__$1 = ((((!((map__83041 == null)))?((((map__83041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83041):map__83041);
var key_fn = cljs.core.get.call(null,map__83041__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__83041__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
if(cljs.core.truth_((function (){var and__5082__auto__ = matches;
if(cljs.core.truth_(and__5082__auto__)){
return show_matches;
} else {
return and__5082__auto__;
}
})())){
return React.DOM.div({"className": "completion-input-matches"},(function (){var iter__5866__auto__ = ((function (map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function kanban$components$completion_input$iter__83044(s__83045){
return (new cljs.core.LazySeq(null,((function (map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (){
var s__83045__$1 = s__83045;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__83045__$1);
if(temp__4425__auto__){
var s__83045__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83045__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__83045__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__83047 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__83046 = (0);
while(true){
if((i__83046 < size__5865__auto__)){
var m = cljs.core._nth.call(null,c__5864__auto__,i__83046);
cljs.core.chunk_append.call(null,b__83047,kanban.components.completion_input.completion_match.call(null,om.next.computed.call(null,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,m,selected_match),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__83046,m,c__5864__auto__,size__5865__auto__,b__83047,s__83045__$2,temp__4425__auto__,map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (){
return this$.activate_match(m);
});})(i__83046,m,c__5864__auto__,size__5865__auto__,b__83047,s__83045__$2,temp__4425__auto__,map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn], null))));

var G__83053 = (i__83046 + (1));
i__83046 = G__83053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83047),kanban$components$completion_input$iter__83044.call(null,cljs.core.chunk_rest.call(null,s__83045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83047),null);
}
} else {
var m = cljs.core.first.call(null,s__83045__$2);
return cljs.core.cons.call(null,kanban.components.completion_input.completion_match.call(null,om.next.computed.call(null,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,m,selected_match),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (m,s__83045__$2,temp__4425__auto__,map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050){
return (function (){
return this$.activate_match(m);
});})(m,s__83045__$2,temp__4425__auto__,map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn], null))),kanban$components$completion_input$iter__83044.call(null,cljs.core.rest.call(null,s__83045__$2)));
}
} else {
return null;
}
break;
}
});})(map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
,null,null));
});})(map__83040,map__83040__$1,matches,show_matches,selected_match,map__83041,map__83041__$1,key_fn,element_fn,_STAR_reconciler_STAR_83035,_STAR_depth_STAR_83036,_STAR_shared_STAR_83037,_STAR_instrument_STAR_83038,_STAR_parent_STAR_83039,this$,x83025_83050))
;
return iter__5866__auto__.call(null,matches);
})());
} else {
return null;
}
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_83039;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_83038;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_83037;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_83036;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_83035;
}});})(x83025_83050))
;


kanban.components.completion_input.CompletionInput.prototype.constructor = kanban.components.completion_input.CompletionInput;

kanban.components.completion_input.CompletionInput.prototype.om$isComponent = true;

var x83048_83054 = kanban.components.completion_input.CompletionInput;


var x83049_83055 = kanban.components.completion_input.CompletionInput.prototype;


kanban.components.completion_input.CompletionInput.cljs$lang$type = true;

kanban.components.completion_input.CompletionInput.cljs$lang$ctorStr = "kanban.components.completion-input/CompletionInput";

kanban.components.completion_input.CompletionInput.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.completion-input/CompletionInput");
});
kanban.components.completion_input.completion_input = om.next.factory.call(null,kanban.components.completion_input.CompletionInput);

//# sourceMappingURL=completion_input.js.map