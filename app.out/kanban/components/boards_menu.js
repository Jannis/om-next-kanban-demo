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
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x11096_11106 = kanban.components.boards_menu.BoardMenuItem.prototype;
x11096_11106.componentWillUpdate = ((function (x11096_11106){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x11096_11106))
;

x11096_11106.shouldComponentUpdate = ((function (x11096_11106){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x11096_11106))
;

x11096_11106.componentWillUnmount = ((function (x11096_11106){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x11096_11106))
;

x11096_11106.componentDidUpdate = ((function (x11096_11106){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x11096_11106))
;

x11096_11106.isMounted = ((function (x11096_11106){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11096_11106))
;

x11096_11106.componentWillMount = ((function (x11096_11106){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x11096_11106))
;

x11096_11106.render = ((function (x11096_11106){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_11097 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11098 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11099 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11100 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11101 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__11102 = om.next.props.call(null,this$);
var map__11102__$1 = ((((!((map__11102 == null)))?((((map__11102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11102):map__11102);
var name = cljs.core.get.call(null,map__11102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var activate_fn = cljs.core.get.call(null,map__11102__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__11102,map__11102__$1,name,activate_fn,_STAR_reconciler_STAR_11097,_STAR_depth_STAR_11098,_STAR_shared_STAR_11099,_STAR_instrument_STAR_11100,_STAR_parent_STAR_11101,this$,x11096_11106){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__11102,map__11102__$1,name,activate_fn,_STAR_reconciler_STAR_11097,_STAR_depth_STAR_11098,_STAR_shared_STAR_11099,_STAR_instrument_STAR_11100,_STAR_parent_STAR_11101,this$,x11096_11106))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11101;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11100;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11099;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11098;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11097;
}});})(x11096_11106))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x11104_11107 = kanban.components.boards_menu.BoardMenuItem;
x11104_11107.om$next$Ident$ = true;

x11104_11107.om$next$Ident$ident$arity$2 = ((function (x11104_11107){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x11104_11107))
;

x11104_11107.om$next$IQuery$ = true;

x11104_11107.om$next$IQuery$query$arity$1 = ((function (x11104_11107){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x11104_11107))
;


var x11105_11108 = kanban.components.boards_menu.BoardMenuItem.prototype;
x11105_11108.om$next$Ident$ = true;

x11105_11108.om$next$Ident$ident$arity$2 = ((function (x11105_11108){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x11105_11108))
;

x11105_11108.om$next$IQuery$ = true;

x11105_11108.om$next$IQuery$query$arity$1 = ((function (x11105_11108){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x11105_11108))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__7580__auto__ = this;
React.Component.apply(this__7580__auto__,arguments);

if(!((this__7580__auto__.getInitialState == null))){
this__7580__auto__.state = this__7580__auto__.getInitialState();
} else {
this__7580__auto__.state = {};
}

return this__7580__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x11113_11127 = kanban.components.boards_menu.BoardsMenu.prototype;
x11113_11127.componentWillUpdate = ((function (x11113_11127){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x11113_11127))
;

x11113_11127.shouldComponentUpdate = ((function (x11113_11127){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7520__auto__),goog.object.get(next_props__7521__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7520__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7520__auto__.state,"omcljs$state"),goog.object.get(next_state__7522__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x11113_11127))
;

x11113_11127.componentWillUnmount = ((function (x11113_11127){
return (function (){
var this__7520__auto__ = this;
var r__7526__auto__ = om.next.get_reconciler.call(null,this__7520__auto__);
var cfg__7527__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7526__auto__);
var st__7528__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
var indexer__7525__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7527__auto__);
if((st__7528__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7528__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7520__auto__);
}

if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x11113_11127))
;

x11113_11127.componentDidUpdate = ((function (x11113_11127){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x11113_11127))
;

x11113_11127.isMounted = ((function (x11113_11127){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x11113_11127))
;

x11113_11127.componentWillMount = ((function (x11113_11127){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x11113_11127))
;

x11113_11127.render = ((function (x11113_11127){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_11114 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_11115 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_11116 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11117 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_11118 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"Boards"),React.DOM.ul(null,(function (){var map__11119 = om.next.props.call(null,this$);
var map__11119__$1 = ((((!((map__11119 == null)))?((((map__11119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11119):map__11119);
var boards = cljs.core.get.call(null,map__11119__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var activate_fn = cljs.core.get.call(null,map__11119__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var iter__5866__auto__ = ((function (map__11119,map__11119__$1,boards,activate_fn,_STAR_reconciler_STAR_11114,_STAR_depth_STAR_11115,_STAR_shared_STAR_11116,_STAR_instrument_STAR_11117,_STAR_parent_STAR_11118,this$,x11113_11127){
return (function kanban$components$boards_menu$iter__11121(s__11122){
return (new cljs.core.LazySeq(null,((function (map__11119,map__11119__$1,boards,activate_fn,_STAR_reconciler_STAR_11114,_STAR_depth_STAR_11115,_STAR_shared_STAR_11116,_STAR_instrument_STAR_11117,_STAR_parent_STAR_11118,this$,x11113_11127){
return (function (){
var s__11122__$1 = s__11122;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11122__$1);
if(temp__4425__auto__){
var s__11122__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11122__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__11122__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__11124 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__11123 = (0);
while(true){
if((i__11123 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__11123);
cljs.core.chunk_append.call(null,b__11124,kanban.components.boards_menu.board_menu_item.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn)));

var G__11128 = (i__11123 + (1));
i__11123 = G__11128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11124),kanban$components$boards_menu$iter__11121.call(null,cljs.core.chunk_rest.call(null,s__11122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11124),null);
}
} else {
var board = cljs.core.first.call(null,s__11122__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn)),kanban$components$boards_menu$iter__11121.call(null,cljs.core.rest.call(null,s__11122__$2)));
}
} else {
return null;
}
break;
}
});})(map__11119,map__11119__$1,boards,activate_fn,_STAR_reconciler_STAR_11114,_STAR_depth_STAR_11115,_STAR_shared_STAR_11116,_STAR_instrument_STAR_11117,_STAR_parent_STAR_11118,this$,x11113_11127))
,null,null));
});})(map__11119,map__11119__$1,boards,activate_fn,_STAR_reconciler_STAR_11114,_STAR_depth_STAR_11115,_STAR_shared_STAR_11116,_STAR_instrument_STAR_11117,_STAR_parent_STAR_11118,this$,x11113_11127))
;
return iter__5866__auto__.call(null,boards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_11118;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11117;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11116;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_11115;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11114;
}});})(x11113_11127))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x11125_11129 = kanban.components.boards_menu.BoardsMenu;


var x11126_11130 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map