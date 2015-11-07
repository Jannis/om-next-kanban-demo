// Compiled by ClojureScript 1.7.170 {}
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
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.card_dialog.CardDialog.prototype = goog.object.clone(React.Component.prototype);

var x8796_8818 = kanban.components.card_dialog.CardDialog.prototype;
x8796_8818.componentWillUpdate = ((function (x8796_8818){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8796_8818))
;

x8796_8818.shouldComponentUpdate = ((function (x8796_8818){
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
});})(x8796_8818))
;

x8796_8818.componentWillUnmount = ((function (x8796_8818){
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
});})(x8796_8818))
;

x8796_8818.componentDidUpdate = ((function (x8796_8818){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8796_8818))
;

x8796_8818.isMounted = ((function (x8796_8818){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8796_8818))
;

x8796_8818.componentWillMount = ((function (x8796_8818){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8796_8818))
;

x8796_8818.toggle_assignee = ((function (x8796_8818){
return (function (ref){
var this$ = this;
var map__8797 = om.next.props.call(null,this$);
var map__8797__$1 = ((((!((map__8797 == null)))?((((map__8797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8797):map__8797);
var assignees = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8798 = om.next.get_computed.call(null,this$);
var map__8798__$1 = ((((!((map__8798 == null)))?((((map__8798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8798):map__8798);
var update_fn = cljs.core.get.call(null,map__8798__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
var add_or_remove_STAR_ = ((function (map__8797,map__8797__$1,assignees,map__8798,map__8798__$1,update_fn,this$,x8796_8818){
return (function kanban$components$card_dialog$add_or_remove_STAR_(x,xs){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([x], true),xs);
} else {
return cljs.core.conj.call(null,xs,x);
}
});})(map__8797,map__8797__$1,assignees,map__8798,map__8798__$1,update_fn,this$,x8796_8818))
;
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"assignees","assignees",-298534943),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,add_or_remove_STAR_.call(null,ref,cljs.core.map.call(null,((function (map__8797,map__8797__$1,assignees,map__8798,map__8798__$1,update_fn,this$,x8796_8818){
return (function (p1__8788_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8788_SHARP_)], null);
});})(map__8797,map__8797__$1,assignees,map__8798,map__8798__$1,update_fn,this$,x8796_8818))
,assignees)))));
});})(x8796_8818))
;

x8796_8818.update_text = ((function (x8796_8818){
return (function (text){
var this$ = this;
var map__8801 = om.next.get_computed.call(null,this$);
var map__8801__$1 = ((((!((map__8801 == null)))?((((map__8801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8801):map__8801);
var update_fn = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
});})(x8796_8818))
;

x8796_8818.render = ((function (x8796_8818){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8803 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8804 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8805 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8806 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8807 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8808 = om.next.props.call(null,this$);
var map__8808__$1 = ((((!((map__8808 == null)))?((((map__8808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8808):map__8808);
var id = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8808__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8809 = om.next.get_computed.call(null,this$);
var map__8809__$1 = ((((!((map__8809 == null)))?((((map__8809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8809):map__8809);
var users = cljs.core.get.call(null,map__8809__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var close_fn = cljs.core.get.call(null,map__8809__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var update_fn = cljs.core.get.call(null,map__8809__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit card",React.DOM.span({"className": "card-id"},id)),React.DOM.form({"onSubmit": ((function (map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function (p1__8789_SHARP_){
return p1__8789_SHARP_.preventDefault();
});})(map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Assignees:"),React.DOM.div({"className": "input"},null,(function (){var iter__5940__auto__ = ((function (map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function kanban$components$card_dialog$iter__8812(s__8813){
return (new cljs.core.LazySeq(null,((function (map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function (){
var s__8813__$1 = s__8813;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8813__$1);
if(temp__4425__auto__){
var s__8813__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8813__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8813__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8815 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8814 = (0);
while(true){
if((i__8814 < size__5939__auto__)){
var user = cljs.core._nth.call(null,c__5938__auto__,i__8814);
cljs.core.chunk_append.call(null,b__8815,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__8814,selected,user,c__5938__auto__,size__5939__auto__,b__8815,s__8813__$2,temp__4425__auto__,map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function (p1__8790_SHARP_){
return this$.toggle_assignee(p1__8790_SHARP_);
});})(i__8814,selected,user,c__5938__auto__,size__5939__auto__,b__8815,s__8813__$2,temp__4425__auto__,map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})());

var G__8819 = (i__8814 + (1));
i__8814 = G__8819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),kanban$components$card_dialog$iter__8812.call(null,cljs.core.chunk_rest.call(null,s__8813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),null);
}
} else {
var user = cljs.core.first.call(null,s__8813__$2);
return cljs.core.cons.call(null,(function (){var selected = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([user], true),assignees);
return kanban.components.card.assignee.call(null,om.next.computed.call(null,user,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"with-name","with-name",597826370),true,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (selected,user,s__8813__$2,temp__4425__auto__,map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function (p1__8790_SHARP_){
return this$.toggle_assignee(p1__8790_SHARP_);
});})(selected,user,s__8813__$2,temp__4425__auto__,map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)));
})(),kanban$components$card_dialog$iter__8812.call(null,cljs.core.rest.call(null,s__8813__$2)));
}
} else {
return null;
}
break;
}
});})(map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
,null,null));
});})(map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
;
return iter__5940__auto__.call(null,users);
})())),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Text:"),om.dom.textarea.call(null,{"value": text, "placeholder": "Enter a card description here...", "onChange": ((function (map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818){
return (function (p1__8791_SHARP_){
return this$.update_text(p1__8791_SHARP_.target.value);
});})(map__8808,map__8808__$1,id,text,assignees,map__8809,map__8809__$1,users,close_fn,update_fn,_STAR_reconciler_STAR_8803,_STAR_depth_STAR_8804,_STAR_shared_STAR_8805,_STAR_instrument_STAR_8806,_STAR_parent_STAR_8807,this$,x8796_8818))
}))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Edit card assignees by clicking on their names"),React.DOM.li(null,"Change the card description via the text field"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8807;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8806;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8805;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8804;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8803;
}});})(x8796_8818))
;


kanban.components.card_dialog.CardDialog.prototype.constructor = kanban.components.card_dialog.CardDialog;

kanban.components.card_dialog.CardDialog.prototype.om$isComponent = true;

var x8816_8820 = kanban.components.card_dialog.CardDialog;
x8816_8820.om$next$Ident$ = true;

x8816_8820.om$next$Ident$ident$arity$2 = ((function (x8816_8820){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8816_8820))
;

x8816_8820.om$next$IQuery$ = true;

x8816_8820.om$next$IQuery$query$arity$1 = ((function (x8816_8820){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8816_8820))
;


var x8817_8821 = kanban.components.card_dialog.CardDialog.prototype;
x8817_8821.om$next$Ident$ = true;

x8817_8821.om$next$Ident$ident$arity$2 = ((function (x8817_8821){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8817_8821))
;

x8817_8821.om$next$IQuery$ = true;

x8817_8821.om$next$IQuery$query$arity$1 = ((function (x8817_8821){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8817_8821))
;


kanban.components.card_dialog.CardDialog.cljs$lang$type = true;

kanban.components.card_dialog.CardDialog.cljs$lang$ctorStr = "kanban.components.card-dialog/CardDialog";

kanban.components.card_dialog.CardDialog.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.card-dialog/CardDialog");
});
kanban.components.card_dialog.card_dialog = om.next.factory.call(null,kanban.components.card_dialog.CardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__8822_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-dialog","card-dialog",1615998855),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8822_SHARP_)], null);
})], null));

//# sourceMappingURL=card_dialog.js.map