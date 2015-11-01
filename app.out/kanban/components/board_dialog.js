// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.board_dialog');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
goog.require('kanban.components.sortable_list');
/**
 * @constructor
 */
kanban.components.board_dialog.BoardDialog = (function kanban$components$board_dialog$BoardDialog(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x10848_10866 = kanban.components.board_dialog.BoardDialog.prototype;
x10848_10866.componentWillUpdate = ((function (x10848_10866){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x10848_10866))
;

x10848_10866.shouldComponentUpdate = ((function (x10848_10866){
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
});})(x10848_10866))
;

x10848_10866.componentWillUnmount = ((function (x10848_10866){
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
});})(x10848_10866))
;

x10848_10866.componentDidUpdate = ((function (x10848_10866){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x10848_10866))
;

x10848_10866.isMounted = ((function (x10848_10866){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10848_10866))
;

x10848_10866.componentWillMount = ((function (x10848_10866){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x10848_10866))
;

x10848_10866.update = ((function (x10848_10866){
return (function (prop,value){
var this$ = this;
var map__10849 = om.next.get_computed.call(null,this$);
var map__10849__$1 = ((((!((map__10849 == null)))?((((map__10849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10849):map__10849);
var update_fn = cljs.core.get.call(null,map__10849__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),cljs.core.PersistentArrayMap.fromArray([prop,value], true, false));
});})(x10848_10866))
;

x10848_10866.render = ((function (x10848_10866){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10851 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10852 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10853 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10854 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10855 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__10856 = om.next.props.call(null,this$);
var map__10856__$1 = ((((!((map__10856 == null)))?((((map__10856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10856):map__10856);
var id = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var lanes = cljs.core.get.call(null,map__10856__$1,new cljs.core.Keyword(null,"lanes","lanes",1843627072));
var map__10857 = om.next.get_computed.call(null,this$);
var map__10857__$1 = ((((!((map__10857 == null)))?((((map__10857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10857):map__10857);
var close_fn = cljs.core.get.call(null,map__10857__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return React.DOM.div({"className": "dialog"},React.DOM.div({"className": "dialog-closer", "onClick": close_fn}),React.DOM.div({"className": "dialog-content"},React.DOM.h1({"className": "dialog-title"},"Edit board",React.DOM.span({"className": "board-name"},name)),React.DOM.form({"onSubmit": ((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (p1__10840_SHARP_){
return p1__10840_SHARP_.preventDefault();
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
},React.DOM.div({"className": "form-row"},React.DOM.label(null,"Name:"),om.dom.input.call(null,{"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (p1__10841_SHARP_){
return this$.update(new cljs.core.Keyword(null,"name","name",1843675177),p1__10841_SHARP_.target.value);
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Description:"),om.dom.textarea.call(null,{"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (p1__10842_SHARP_){
return this$.update(new cljs.core.Keyword(null,"description","description",-1428560544),p1__10842_SHARP_.target.value);
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
})),React.DOM.div({"className": "form-row"},React.DOM.label(null,"Lanes:"),kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (lanes__$1){
return this$.update(new cljs.core.Keyword(null,"lanes","lanes",1843627072),cljs.core.map.call(null,((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (p1__10843_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10843_SHARP_)], null);
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
,lanes__$1));
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var iter__5866__auto__ = ((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function kanban$components$board_dialog$iter__10860(s__10861){
return (new cljs.core.LazySeq(null,((function (map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866){
return (function (){
var s__10861__$1 = s__10861;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10861__$1);
if(temp__4425__auto__){
var s__10861__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10861__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10861__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10863 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10862 = (0);
while(true){
if((i__10862 < size__5865__auto__)){
var lane = cljs.core._nth.call(null,c__5864__auto__,i__10862);
cljs.core.chunk_append.call(null,b__10863,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lane),new cljs.core.Keyword(null,"data","data",-232669377),lane,new cljs.core.Keyword(null,"element","element",1974019749),React.DOM.span({"className": "lane-name"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lane))], null));

var G__10867 = (i__10862 + (1));
i__10862 = G__10867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10863),kanban$components$board_dialog$iter__10860.call(null,cljs.core.chunk_rest.call(null,s__10861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10863),null);
}
} else {
var lane = cljs.core.first.call(null,s__10861__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lane),new cljs.core.Keyword(null,"data","data",-232669377),lane,new cljs.core.Keyword(null,"element","element",1974019749),React.DOM.span({"className": "lane-name"},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lane))], null),kanban$components$board_dialog$iter__10860.call(null,cljs.core.rest.call(null,s__10861__$2)));
}
} else {
return null;
}
break;
}
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
,null,null));
});})(map__10856,map__10856__$1,id,name,description,lanes,map__10857,map__10857__$1,close_fn,_STAR_reconciler_STAR_10851,_STAR_depth_STAR_10852,_STAR_shared_STAR_10853,_STAR_instrument_STAR_10854,_STAR_parent_STAR_10855,this$,x10848_10866))
;
return iter__5866__auto__.call(null,lanes);
})()], null)))),React.DOM.p({"className": "dialog-buttons"},React.DOM.button({"onClick": close_fn},"Close")),React.DOM.div({"className": "help"},React.DOM.h3({"className": "help-title"},"Help"),React.DOM.ul({"className": "instructions"},React.DOM.li(null,"Change the board name via the name field"),React.DOM.li(null,"Change the board description via the description field"),React.DOM.li(null,"Click anywhere to close the dialog")))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10855;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10854;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10853;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10852;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10851;
}});})(x10848_10866))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x10864_10868 = kanban.components.board_dialog.BoardDialog;
x10864_10868.om$next$Ident$ = true;

x10864_10868.om$next$Ident$ident$arity$2 = ((function (x10864_10868){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10864_10868))
;

x10864_10868.om$next$IQuery$ = true;

x10864_10868.om$next$IQuery$query$arity$1 = ((function (x10864_10868){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x10864_10868))
;


var x10865_10869 = kanban.components.board_dialog.BoardDialog.prototype;
x10865_10869.om$next$Ident$ = true;

x10865_10869.om$next$Ident$ident$arity$2 = ((function (x10865_10869){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10865_10869))
;

x10865_10869.om$next$IQuery$ = true;

x10865_10869.om$next$IQuery$query$arity$1 = ((function (x10865_10869){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"lanes","lanes",1843627072)], null);
});})(x10865_10869))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.call(null,kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),(function (p1__10870_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board-dialog","board-dialog",-2008885585),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10870_SHARP_)], null);
})], null));

//# sourceMappingURL=board_dialog.js.map