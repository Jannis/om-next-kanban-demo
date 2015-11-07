// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.components.boards_menu');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
kanban.components.boards_menu.BoardMenuItem = (function kanban$components$boards_menu$BoardMenuItem(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x8469_8481 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8469_8481.componentWillUpdate = ((function (x8469_8481){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8469_8481))
;

x8469_8481.shouldComponentUpdate = ((function (x8469_8481){
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
});})(x8469_8481))
;

x8469_8481.componentWillUnmount = ((function (x8469_8481){
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
});})(x8469_8481))
;

x8469_8481.componentDidUpdate = ((function (x8469_8481){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8469_8481))
;

x8469_8481.isMounted = ((function (x8469_8481){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8469_8481))
;

x8469_8481.componentWillMount = ((function (x8469_8481){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8469_8481))
;

x8469_8481.render = ((function (x8469_8481){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8470 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8471 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8472 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8473 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8474 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__8475 = om.next.props.call(null,this$);
var map__8475__$1 = ((((!((map__8475 == null)))?((((map__8475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8475):map__8475);
var name = cljs.core.get.call(null,map__8475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8476 = om.next.get_computed.call(null,this$);
var map__8476__$1 = ((((!((map__8476 == null)))?((((map__8476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8476):map__8476);
var activate_fn = cljs.core.get.call(null,map__8476__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__8475,map__8475__$1,name,map__8476,map__8476__$1,activate_fn,_STAR_reconciler_STAR_8470,_STAR_depth_STAR_8471,_STAR_shared_STAR_8472,_STAR_instrument_STAR_8473,_STAR_parent_STAR_8474,this$,x8469_8481){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8475,map__8475__$1,name,map__8476,map__8476__$1,activate_fn,_STAR_reconciler_STAR_8470,_STAR_depth_STAR_8471,_STAR_shared_STAR_8472,_STAR_instrument_STAR_8473,_STAR_parent_STAR_8474,this$,x8469_8481))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8474;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8473;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8472;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8471;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8470;
}});})(x8469_8481))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x8479_8482 = kanban.components.boards_menu.BoardMenuItem;
x8479_8482.om$next$Ident$ = true;

x8479_8482.om$next$Ident$ident$arity$2 = ((function (x8479_8482){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8479_8482))
;

x8479_8482.om$next$IQuery$ = true;

x8479_8482.om$next$IQuery$query$arity$1 = ((function (x8479_8482){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8479_8482))
;


var x8480_8483 = kanban.components.boards_menu.BoardMenuItem.prototype;
x8480_8483.om$next$Ident$ = true;

x8480_8483.om$next$Ident$ident$arity$2 = ((function (x8480_8483){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8480_8483))
;

x8480_8483.om$next$IQuery$ = true;

x8480_8483.om$next$IQuery$query$arity$1 = ((function (x8480_8483){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8480_8483))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__7936__auto__ = this;
React.Component.apply(this__7936__auto__,arguments);

if(!((this__7936__auto__.initLocalState == null))){
this__7936__auto__.state = this__7936__auto__.initLocalState();
} else {
this__7936__auto__.state = {};
}

return this__7936__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x8488_8504 = kanban.components.boards_menu.BoardsMenu.prototype;
x8488_8504.componentWillUpdate = ((function (x8488_8504){
return (function (next_props__7877__auto__,next_state__7878__auto__){
var this__7876__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7876__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7876__auto__);
});})(x8488_8504))
;

x8488_8504.shouldComponentUpdate = ((function (x8488_8504){
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
});})(x8488_8504))
;

x8488_8504.componentWillUnmount = ((function (x8488_8504){
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
});})(x8488_8504))
;

x8488_8504.componentDidUpdate = ((function (x8488_8504){
return (function (prev_props__7879__auto__,prev_state__7880__auto__){
var this__7876__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7876__auto__);
});})(x8488_8504))
;

x8488_8504.isMounted = ((function (x8488_8504){
return (function (){
var this__7876__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7876__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8488_8504))
;

x8488_8504.componentWillMount = ((function (x8488_8504){
return (function (){
var this__7876__auto__ = this;
var indexer__7881__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7876__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7881__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7881__auto__,this__7876__auto__);
}
});})(x8488_8504))
;

x8488_8504.render = ((function (x8488_8504){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8489 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8490 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8491 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8492 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8493 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8494 = om.next.props.call(null,this$);
var map__8494__$1 = ((((!((map__8494 == null)))?((((map__8494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8494):map__8494);
var boards = cljs.core.get.call(null,map__8494__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__8495 = om.next.get_computed.call(null,this$);
var map__8495__$1 = ((((!((map__8495 == null)))?((((map__8495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8495):map__8495);
var activate_fn = cljs.core.get.call(null,map__8495__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__8495__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5940__auto__ = ((function (map__8494,map__8494__$1,boards,map__8495,map__8495__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8489,_STAR_depth_STAR_8490,_STAR_shared_STAR_8491,_STAR_instrument_STAR_8492,_STAR_parent_STAR_8493,this$,x8488_8504){
return (function kanban$components$boards_menu$iter__8498(s__8499){
return (new cljs.core.LazySeq(null,((function (map__8494,map__8494__$1,boards,map__8495,map__8495__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8489,_STAR_depth_STAR_8490,_STAR_shared_STAR_8491,_STAR_instrument_STAR_8492,_STAR_parent_STAR_8493,this$,x8488_8504){
return (function (){
var s__8499__$1 = s__8499;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8499__$1);
if(temp__4425__auto__){
var s__8499__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8499__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__8499__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__8501 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__8500 = (0);
while(true){
if((i__8500 < size__5939__auto__)){
var board = cljs.core._nth.call(null,c__5938__auto__,i__8500);
cljs.core.chunk_append.call(null,b__8501,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__8505 = (i__8500 + (1));
i__8500 = G__8505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8501),kanban$components$boards_menu$iter__8498.call(null,cljs.core.chunk_rest.call(null,s__8499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8501),null);
}
} else {
var board = cljs.core.first.call(null,s__8499__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__8498.call(null,cljs.core.rest.call(null,s__8499__$2)));
}
} else {
return null;
}
break;
}
});})(map__8494,map__8494__$1,boards,map__8495,map__8495__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8489,_STAR_depth_STAR_8490,_STAR_shared_STAR_8491,_STAR_instrument_STAR_8492,_STAR_parent_STAR_8493,this$,x8488_8504))
,null,null));
});})(map__8494,map__8494__$1,boards,map__8495,map__8495__$1,activate_fn,create_fn,_STAR_reconciler_STAR_8489,_STAR_depth_STAR_8490,_STAR_shared_STAR_8491,_STAR_instrument_STAR_8492,_STAR_parent_STAR_8493,this$,x8488_8504))
;
return iter__5940__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8493;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8492;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8491;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8490;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8489;
}});})(x8488_8504))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x8502_8506 = kanban.components.boards_menu.BoardsMenu;


var x8503_8507 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7938__auto__,writer__7939__auto__,opt__7940__auto__){
return cljs.core._write.call(null,writer__7939__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map