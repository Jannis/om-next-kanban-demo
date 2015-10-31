// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.boards_menu');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
kanban.components.boards_menu.BoardMenuItem = (function kanban$components$boards_menu$BoardMenuItem(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x10510_10522 = kanban.components.boards_menu.BoardMenuItem.prototype;
x10510_10522.componentWillUpdate = ((function (x10510_10522){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x10510_10522))
;

x10510_10522.shouldComponentUpdate = ((function (x10510_10522){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x10510_10522))
;

x10510_10522.componentWillUnmount = ((function (x10510_10522){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x10510_10522))
;

x10510_10522.componentDidUpdate = ((function (x10510_10522){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x10510_10522))
;

x10510_10522.isMounted = ((function (x10510_10522){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10510_10522))
;

x10510_10522.componentWillMount = ((function (x10510_10522){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x10510_10522))
;

x10510_10522.render = ((function (x10510_10522){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10511 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10512 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10513 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10514 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10515 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__10516 = om.next.props.call(null,this$);
var map__10516__$1 = ((((!((map__10516 == null)))?((((map__10516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10516):map__10516);
var name = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__10517 = om.next.get_computed.call(null,this$);
var map__10517__$1 = ((((!((map__10517 == null)))?((((map__10517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10517):map__10517);
var activate_fn = cljs.core.get.call(null,map__10517__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__10516,map__10516__$1,name,map__10517,map__10517__$1,activate_fn,_STAR_reconciler_STAR_10511,_STAR_depth_STAR_10512,_STAR_shared_STAR_10513,_STAR_instrument_STAR_10514,_STAR_parent_STAR_10515,this$,x10510_10522){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__10516,map__10516__$1,name,map__10517,map__10517__$1,activate_fn,_STAR_reconciler_STAR_10511,_STAR_depth_STAR_10512,_STAR_shared_STAR_10513,_STAR_instrument_STAR_10514,_STAR_parent_STAR_10515,this$,x10510_10522))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10515;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10514;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10513;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10512;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10511;
}});})(x10510_10522))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x10520_10523 = kanban.components.boards_menu.BoardMenuItem;
x10520_10523.om$next$Ident$ = true;

x10520_10523.om$next$Ident$ident$arity$2 = ((function (x10520_10523){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10520_10523))
;

x10520_10523.om$next$IQuery$ = true;

x10520_10523.om$next$IQuery$query$arity$1 = ((function (x10520_10523){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10520_10523))
;


var x10521_10524 = kanban.components.boards_menu.BoardMenuItem.prototype;
x10521_10524.om$next$Ident$ = true;

x10521_10524.om$next$Ident$ident$arity$2 = ((function (x10521_10524){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10521_10524))
;

x10521_10524.om$next$IQuery$ = true;

x10521_10524.om$next$IQuery$query$arity$1 = ((function (x10521_10524){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10521_10524))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x10529_10545 = kanban.components.boards_menu.BoardsMenu.prototype;
x10529_10545.componentWillUpdate = ((function (x10529_10545){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x10529_10545))
;

x10529_10545.shouldComponentUpdate = ((function (x10529_10545){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x10529_10545))
;

x10529_10545.componentWillUnmount = ((function (x10529_10545){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x10529_10545))
;

x10529_10545.componentDidUpdate = ((function (x10529_10545){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x10529_10545))
;

x10529_10545.isMounted = ((function (x10529_10545){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10529_10545))
;

x10529_10545.componentWillMount = ((function (x10529_10545){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x10529_10545))
;

x10529_10545.render = ((function (x10529_10545){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10530 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10531 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10532 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10533 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10534 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var map__10535 = om.next.props.call(null,this$);
var map__10535__$1 = ((((!((map__10535 == null)))?((((map__10535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10535):map__10535);
var boards = cljs.core.get.call(null,map__10535__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__10536 = om.next.get_computed.call(null,this$);
var map__10536__$1 = ((((!((map__10536 == null)))?((((map__10536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10536):map__10536);
var activate_fn = cljs.core.get.call(null,map__10536__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var iter__5866__auto__ = ((function (map__10535,map__10535__$1,boards,map__10536,map__10536__$1,activate_fn,_STAR_reconciler_STAR_10530,_STAR_depth_STAR_10531,_STAR_shared_STAR_10532,_STAR_instrument_STAR_10533,_STAR_parent_STAR_10534,this$,x10529_10545){
return (function kanban$components$boards_menu$iter__10539(s__10540){
return (new cljs.core.LazySeq(null,((function (map__10535,map__10535__$1,boards,map__10536,map__10536__$1,activate_fn,_STAR_reconciler_STAR_10530,_STAR_depth_STAR_10531,_STAR_shared_STAR_10532,_STAR_instrument_STAR_10533,_STAR_parent_STAR_10534,this$,x10529_10545){
return (function (){
var s__10540__$1 = s__10540;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10540__$1);
if(temp__4425__auto__){
var s__10540__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10540__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10540__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10542 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10541 = (0);
while(true){
if((i__10541 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__10541);
cljs.core.chunk_append.call(null,b__10542,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__10546 = (i__10541 + (1));
i__10541 = G__10546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),kanban$components$boards_menu$iter__10539.call(null,cljs.core.chunk_rest.call(null,s__10540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),null);
}
} else {
var board = cljs.core.first.call(null,s__10540__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__10539.call(null,cljs.core.rest.call(null,s__10540__$2)));
}
} else {
return null;
}
break;
}
});})(map__10535,map__10535__$1,boards,map__10536,map__10536__$1,activate_fn,_STAR_reconciler_STAR_10530,_STAR_depth_STAR_10531,_STAR_shared_STAR_10532,_STAR_instrument_STAR_10533,_STAR_parent_STAR_10534,this$,x10529_10545))
,null,null));
});})(map__10535,map__10535__$1,boards,map__10536,map__10536__$1,activate_fn,_STAR_reconciler_STAR_10530,_STAR_depth_STAR_10531,_STAR_shared_STAR_10532,_STAR_instrument_STAR_10533,_STAR_parent_STAR_10534,this$,x10529_10545))
;
return iter__5866__auto__.call(null,boards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10534;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10533;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10532;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10531;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10530;
}});})(x10529_10545))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x10543_10547 = kanban.components.boards_menu.BoardsMenu;


var x10544_10548 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map