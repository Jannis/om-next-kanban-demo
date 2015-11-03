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
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x82828_82840 = kanban.components.boards_menu.BoardMenuItem.prototype;
x82828_82840.componentWillUpdate = ((function (x82828_82840){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x82828_82840))
;

x82828_82840.shouldComponentUpdate = ((function (x82828_82840){
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
});})(x82828_82840))
;

x82828_82840.componentWillUnmount = ((function (x82828_82840){
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
});})(x82828_82840))
;

x82828_82840.componentDidUpdate = ((function (x82828_82840){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x82828_82840))
;

x82828_82840.isMounted = ((function (x82828_82840){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x82828_82840))
;

x82828_82840.componentWillMount = ((function (x82828_82840){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x82828_82840))
;

x82828_82840.render = ((function (x82828_82840){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_82829 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_82830 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_82831 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_82832 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_82833 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__82834 = om.next.props.call(null,this$);
var map__82834__$1 = ((((!((map__82834 == null)))?((((map__82834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82834):map__82834);
var name = cljs.core.get.call(null,map__82834__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__82835 = om.next.get_computed.call(null,this$);
var map__82835__$1 = ((((!((map__82835 == null)))?((((map__82835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82835):map__82835);
var activate_fn = cljs.core.get.call(null,map__82835__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__82834,map__82834__$1,name,map__82835,map__82835__$1,activate_fn,_STAR_reconciler_STAR_82829,_STAR_depth_STAR_82830,_STAR_shared_STAR_82831,_STAR_instrument_STAR_82832,_STAR_parent_STAR_82833,this$,x82828_82840){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__82834,map__82834__$1,name,map__82835,map__82835__$1,activate_fn,_STAR_reconciler_STAR_82829,_STAR_depth_STAR_82830,_STAR_shared_STAR_82831,_STAR_instrument_STAR_82832,_STAR_parent_STAR_82833,this$,x82828_82840))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_82833;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_82832;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_82831;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_82830;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_82829;
}});})(x82828_82840))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x82838_82841 = kanban.components.boards_menu.BoardMenuItem;
x82838_82841.om$next$Ident$ = true;

x82838_82841.om$next$Ident$ident$arity$2 = ((function (x82838_82841){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82838_82841))
;

x82838_82841.om$next$IQuery$ = true;

x82838_82841.om$next$IQuery$query$arity$1 = ((function (x82838_82841){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x82838_82841))
;


var x82839_82842 = kanban.components.boards_menu.BoardMenuItem.prototype;
x82839_82842.om$next$Ident$ = true;

x82839_82842.om$next$Ident$ident$arity$2 = ((function (x82839_82842){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x82839_82842))
;

x82839_82842.om$next$IQuery$ = true;

x82839_82842.om$next$IQuery$query$arity$1 = ((function (x82839_82842){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x82839_82842))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x82847_82863 = kanban.components.boards_menu.BoardsMenu.prototype;
x82847_82863.componentWillUpdate = ((function (x82847_82863){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x82847_82863))
;

x82847_82863.shouldComponentUpdate = ((function (x82847_82863){
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
});})(x82847_82863))
;

x82847_82863.componentWillUnmount = ((function (x82847_82863){
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
});})(x82847_82863))
;

x82847_82863.componentDidUpdate = ((function (x82847_82863){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x82847_82863))
;

x82847_82863.isMounted = ((function (x82847_82863){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x82847_82863))
;

x82847_82863.componentWillMount = ((function (x82847_82863){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x82847_82863))
;

x82847_82863.render = ((function (x82847_82863){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_82848 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_82849 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_82850 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_82851 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_82852 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__82853 = om.next.props.call(null,this$);
var map__82853__$1 = ((((!((map__82853 == null)))?((((map__82853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82853):map__82853);
var boards = cljs.core.get.call(null,map__82853__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__82854 = om.next.get_computed.call(null,this$);
var map__82854__$1 = ((((!((map__82854 == null)))?((((map__82854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82854):map__82854);
var activate_fn = cljs.core.get.call(null,map__82854__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__82854__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5866__auto__ = ((function (map__82853,map__82853__$1,boards,map__82854,map__82854__$1,activate_fn,create_fn,_STAR_reconciler_STAR_82848,_STAR_depth_STAR_82849,_STAR_shared_STAR_82850,_STAR_instrument_STAR_82851,_STAR_parent_STAR_82852,this$,x82847_82863){
return (function kanban$components$boards_menu$iter__82857(s__82858){
return (new cljs.core.LazySeq(null,((function (map__82853,map__82853__$1,boards,map__82854,map__82854__$1,activate_fn,create_fn,_STAR_reconciler_STAR_82848,_STAR_depth_STAR_82849,_STAR_shared_STAR_82850,_STAR_instrument_STAR_82851,_STAR_parent_STAR_82852,this$,x82847_82863){
return (function (){
var s__82858__$1 = s__82858;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__82858__$1);
if(temp__4425__auto__){
var s__82858__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82858__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__82858__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__82860 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__82859 = (0);
while(true){
if((i__82859 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__82859);
cljs.core.chunk_append.call(null,b__82860,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__82864 = (i__82859 + (1));
i__82859 = G__82864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82860),kanban$components$boards_menu$iter__82857.call(null,cljs.core.chunk_rest.call(null,s__82858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82860),null);
}
} else {
var board = cljs.core.first.call(null,s__82858__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__82857.call(null,cljs.core.rest.call(null,s__82858__$2)));
}
} else {
return null;
}
break;
}
});})(map__82853,map__82853__$1,boards,map__82854,map__82854__$1,activate_fn,create_fn,_STAR_reconciler_STAR_82848,_STAR_depth_STAR_82849,_STAR_shared_STAR_82850,_STAR_instrument_STAR_82851,_STAR_parent_STAR_82852,this$,x82847_82863))
,null,null));
});})(map__82853,map__82853__$1,boards,map__82854,map__82854__$1,activate_fn,create_fn,_STAR_reconciler_STAR_82848,_STAR_depth_STAR_82849,_STAR_shared_STAR_82850,_STAR_instrument_STAR_82851,_STAR_parent_STAR_82852,this$,x82847_82863))
;
return iter__5866__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_82852;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_82851;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_82850;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_82849;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_82848;
}});})(x82847_82863))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x82861_82865 = kanban.components.boards_menu.BoardsMenu;


var x82862_82866 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map