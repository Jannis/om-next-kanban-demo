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

var x8294_8306 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8294_8306.componentWillUpdate = ((function (x8294_8306){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8294_8306))
;

x8294_8306.shouldComponentUpdate = ((function (x8294_8306){
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
});})(x8294_8306))
;

x8294_8306.componentWillUnmount = ((function (x8294_8306){
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
});})(x8294_8306))
;

x8294_8306.componentDidUpdate = ((function (x8294_8306){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8294_8306))
;

x8294_8306.isMounted = ((function (x8294_8306){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8294_8306))
;

x8294_8306.componentWillMount = ((function (x8294_8306){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8294_8306))
;

x8294_8306.render = ((function (x8294_8306){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8295 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8296 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8297 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8298 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8299 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__8300 = om.next.props.call(null,this$);
var map__8300__$1 = ((((!((map__8300 == null)))?((((map__8300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8300):map__8300);
var name = cljs.core.get.call(null,map__8300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8301 = om.next.get_computed.call(null,this$);
var map__8301__$1 = ((((!((map__8301 == null)))?((((map__8301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8301):map__8301);
var activate_fn = cljs.core.get.call(null,map__8301__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__8300,map__8300__$1,name,map__8301,map__8301__$1,activate_fn,_STAR_reconciler_STAR_8295,_STAR_depth_STAR_8296,_STAR_shared_STAR_8297,_STAR_instrument_STAR_8298,_STAR_parent_STAR_8299,this$,x8294_8306){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8300,map__8300__$1,name,map__8301,map__8301__$1,activate_fn,_STAR_reconciler_STAR_8295,_STAR_depth_STAR_8296,_STAR_shared_STAR_8297,_STAR_instrument_STAR_8298,_STAR_parent_STAR_8299,this$,x8294_8306))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8299;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8298;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8297;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8296;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8295;
}});})(x8294_8306))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x8304_8307 = kanban.components.boards_menu.BoardMenuItem;
x8304_8307.om$next$Ident$ = true;

x8304_8307.om$next$Ident$ident$arity$2 = ((function (x8304_8307){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8304_8307))
;

x8304_8307.om$next$IQuery$ = true;

x8304_8307.om$next$IQuery$query$arity$1 = ((function (x8304_8307){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8304_8307))
;


var x8305_8308 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8305_8308.om$next$Ident$ = true;

x8305_8308.om$next$Ident$ident$arity$2 = ((function (x8305_8308){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8305_8308))
;

x8305_8308.om$next$IQuery$ = true;

x8305_8308.om$next$IQuery$query$arity$1 = ((function (x8305_8308){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8305_8308))
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

var x8313_8329 = kanban.components.boards_menu.BoardsMenu.prototype;
x8313_8329.componentWillUpdate = ((function (x8313_8329){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x8313_8329))
;

x8313_8329.shouldComponentUpdate = ((function (x8313_8329){
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
});})(x8313_8329))
;

x8313_8329.componentWillUnmount = ((function (x8313_8329){
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
});})(x8313_8329))
;

x8313_8329.componentDidUpdate = ((function (x8313_8329){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x8313_8329))
;

x8313_8329.isMounted = ((function (x8313_8329){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8313_8329))
;

x8313_8329.componentWillMount = ((function (x8313_8329){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x8313_8329))
;

x8313_8329.render = ((function (x8313_8329){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8314 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8315 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8316 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8317 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8318 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8319 = om.next.props.call(null,this$);
var map__8319__$1 = ((((!((map__8319 == null)))?((((map__8319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8319):map__8319);
var boards = cljs.core.get.call(null,map__8319__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__8320 = om.next.get_computed.call(null,this$);
var map__8320__$1 = ((((!((map__8320 == null)))?((((map__8320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8320):map__8320);
var activate_fn = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__8320__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5866__auto__ = ((function (map__8319,map__8319__$1,boards,map__8320,map__8320__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8314,_STAR_depth_STAR_8315,_STAR_shared_STAR_8316,_STAR_instrument_STAR_8317,_STAR_parent_STAR_8318,this$,x8313_8329){
return (function kanban$components$boards_menu$iter__8323(s__8324){
return (new cljs.core.LazySeq(null,((function (map__8319,map__8319__$1,boards,map__8320,map__8320__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8314,_STAR_depth_STAR_8315,_STAR_shared_STAR_8316,_STAR_instrument_STAR_8317,_STAR_parent_STAR_8318,this$,x8313_8329){
return (function (){
var s__8324__$1 = s__8324;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8324__$1);
if(temp__4425__auto__){
var s__8324__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8324__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8324__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8326 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8325 = (0);
while(true){
if((i__8325 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__8325);
cljs.core.chunk_append.call(null,b__8326,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__8330 = (i__8325 + (1));
i__8325 = G__8330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8326),kanban$components$boards_menu$iter__8323.call(null,cljs.core.chunk_rest.call(null,s__8324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8326),null);
}
} else {
var board = cljs.core.first.call(null,s__8324__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__8323.call(null,cljs.core.rest.call(null,s__8324__$2)));
}
} else {
return null;
}
break;
}
});})(map__8319,map__8319__$1,boards,map__8320,map__8320__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8314,_STAR_depth_STAR_8315,_STAR_shared_STAR_8316,_STAR_instrument_STAR_8317,_STAR_parent_STAR_8318,this$,x8313_8329))
,null,null));
});})(map__8319,map__8319__$1,boards,map__8320,map__8320__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8314,_STAR_depth_STAR_8315,_STAR_shared_STAR_8316,_STAR_instrument_STAR_8317,_STAR_parent_STAR_8318,this$,x8313_8329))
;
return iter__5866__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8318;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8317;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8316;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8315;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8314;
}});})(x8313_8329))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x8327_8331 = kanban.components.boards_menu.BoardsMenu;


var x8328_8332 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map