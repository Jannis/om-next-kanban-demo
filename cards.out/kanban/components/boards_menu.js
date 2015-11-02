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

var x29894_29906 = kanban.components.boards_menu.BoardMenuItem.prototype;
x29894_29906.componentWillUpdate = ((function (x29894_29906){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x29894_29906))
;

x29894_29906.shouldComponentUpdate = ((function (x29894_29906){
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
});})(x29894_29906))
;

x29894_29906.componentWillUnmount = ((function (x29894_29906){
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
});})(x29894_29906))
;

x29894_29906.componentDidUpdate = ((function (x29894_29906){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x29894_29906))
;

x29894_29906.isMounted = ((function (x29894_29906){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29894_29906))
;

x29894_29906.componentWillMount = ((function (x29894_29906){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x29894_29906))
;

x29894_29906.render = ((function (x29894_29906){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29895 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29896 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29897 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29898 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29899 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__29900 = om.next.props.call(null,this$);
var map__29900__$1 = ((((!((map__29900 == null)))?((((map__29900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);
var name = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__29901 = om.next.get_computed.call(null,this$);
var map__29901__$1 = ((((!((map__29901 == null)))?((((map__29901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29901):map__29901);
var activate_fn = cljs.core.get.call(null,map__29901__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__29900,map__29900__$1,name,map__29901,map__29901__$1,activate_fn,_STAR_reconciler_STAR_29895,_STAR_depth_STAR_29896,_STAR_shared_STAR_29897,_STAR_instrument_STAR_29898,_STAR_parent_STAR_29899,this$,x29894_29906){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__29900,map__29900__$1,name,map__29901,map__29901__$1,activate_fn,_STAR_reconciler_STAR_29895,_STAR_depth_STAR_29896,_STAR_shared_STAR_29897,_STAR_instrument_STAR_29898,_STAR_parent_STAR_29899,this$,x29894_29906))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29899;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29898;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29897;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29896;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29895;
}});})(x29894_29906))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x29904_29907 = kanban.components.boards_menu.BoardMenuItem;
x29904_29907.om$next$Ident$ = true;

x29904_29907.om$next$Ident$ident$arity$2 = ((function (x29904_29907){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x29904_29907))
;

x29904_29907.om$next$IQuery$ = true;

x29904_29907.om$next$IQuery$query$arity$1 = ((function (x29904_29907){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x29904_29907))
;


var x29905_29908 = kanban.components.boards_menu.BoardMenuItem.prototype;
x29905_29908.om$next$Ident$ = true;

x29905_29908.om$next$Ident$ident$arity$2 = ((function (x29905_29908){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x29905_29908))
;

x29905_29908.om$next$IQuery$ = true;

x29905_29908.om$next$IQuery$query$arity$1 = ((function (x29905_29908){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x29905_29908))
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

var x29913_29929 = kanban.components.boards_menu.BoardsMenu.prototype;
x29913_29929.componentWillUpdate = ((function (x29913_29929){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x29913_29929))
;

x29913_29929.shouldComponentUpdate = ((function (x29913_29929){
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
});})(x29913_29929))
;

x29913_29929.componentWillUnmount = ((function (x29913_29929){
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
});})(x29913_29929))
;

x29913_29929.componentDidUpdate = ((function (x29913_29929){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x29913_29929))
;

x29913_29929.isMounted = ((function (x29913_29929){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29913_29929))
;

x29913_29929.componentWillMount = ((function (x29913_29929){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x29913_29929))
;

x29913_29929.render = ((function (x29913_29929){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29914 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29915 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29916 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29917 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29918 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__29919 = om.next.props.call(null,this$);
var map__29919__$1 = ((((!((map__29919 == null)))?((((map__29919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29919):map__29919);
var boards = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__29920 = om.next.get_computed.call(null,this$);
var map__29920__$1 = ((((!((map__29920 == null)))?((((map__29920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29920):map__29920);
var activate_fn = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5866__auto__ = ((function (map__29919,map__29919__$1,boards,map__29920,map__29920__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29914,_STAR_depth_STAR_29915,_STAR_shared_STAR_29916,_STAR_instrument_STAR_29917,_STAR_parent_STAR_29918,this$,x29913_29929){
return (function kanban$components$boards_menu$iter__29923(s__29924){
return (new cljs.core.LazySeq(null,((function (map__29919,map__29919__$1,boards,map__29920,map__29920__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29914,_STAR_depth_STAR_29915,_STAR_shared_STAR_29916,_STAR_instrument_STAR_29917,_STAR_parent_STAR_29918,this$,x29913_29929){
return (function (){
var s__29924__$1 = s__29924;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29924__$1);
if(temp__4425__auto__){
var s__29924__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29924__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__29924__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__29926 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__29925 = (0);
while(true){
if((i__29925 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__29925);
cljs.core.chunk_append.call(null,b__29926,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__29930 = (i__29925 + (1));
i__29925 = G__29930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29926),kanban$components$boards_menu$iter__29923.call(null,cljs.core.chunk_rest.call(null,s__29924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29926),null);
}
} else {
var board = cljs.core.first.call(null,s__29924__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__29923.call(null,cljs.core.rest.call(null,s__29924__$2)));
}
} else {
return null;
}
break;
}
});})(map__29919,map__29919__$1,boards,map__29920,map__29920__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29914,_STAR_depth_STAR_29915,_STAR_shared_STAR_29916,_STAR_instrument_STAR_29917,_STAR_parent_STAR_29918,this$,x29913_29929))
,null,null));
});})(map__29919,map__29919__$1,boards,map__29920,map__29920__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29914,_STAR_depth_STAR_29915,_STAR_shared_STAR_29916,_STAR_instrument_STAR_29917,_STAR_parent_STAR_29918,this$,x29913_29929))
;
return iter__5866__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29918;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29917;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29916;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29915;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29914;
}});})(x29913_29929))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x29927_29931 = kanban.components.boards_menu.BoardsMenu;


var x29928_29932 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map