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

var x10138_10148 = kanban.components.boards_menu.BoardMenuItem.prototype;
x10138_10148.componentWillUpdate = ((function (x10138_10148){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10138_10148))
;

x10138_10148.shouldComponentUpdate = ((function (x10138_10148){
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
});})(x10138_10148))
;

x10138_10148.componentWillUnmount = ((function (x10138_10148){
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
});})(x10138_10148))
;

x10138_10148.componentDidUpdate = ((function (x10138_10148){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10138_10148))
;

x10138_10148.isMounted = ((function (x10138_10148){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10138_10148))
;

x10138_10148.componentWillMount = ((function (x10138_10148){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10138_10148))
;

x10138_10148.render = ((function (x10138_10148){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10139 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10140 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10141 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10142 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10143 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__10144 = om.next.props.call(null,this$);
var map__10144__$1 = ((((!((map__10144 == null)))?((((map__10144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10144):map__10144);
var name = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var activate_fn = cljs.core.get.call(null,map__10144__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__10144,map__10144__$1,name,activate_fn,_STAR_reconciler_STAR_10139,_STAR_depth_STAR_10140,_STAR_shared_STAR_10141,_STAR_instrument_STAR_10142,_STAR_parent_STAR_10143,this$,x10138_10148){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__10144,map__10144__$1,name,activate_fn,_STAR_reconciler_STAR_10139,_STAR_depth_STAR_10140,_STAR_shared_STAR_10141,_STAR_instrument_STAR_10142,_STAR_parent_STAR_10143,this$,x10138_10148))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10143;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10142;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10141;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10140;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10139;
}});})(x10138_10148))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x10146_10149 = kanban.components.boards_menu.BoardMenuItem;
x10146_10149.om$next$Ident$ = true;

x10146_10149.om$next$Ident$ident$arity$2 = ((function (x10146_10149){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10146_10149))
;

x10146_10149.om$next$IQuery$ = true;

x10146_10149.om$next$IQuery$query$arity$1 = ((function (x10146_10149){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10146_10149))
;


var x10147_10150 = kanban.components.boards_menu.BoardMenuItem.prototype;
x10147_10150.om$next$Ident$ = true;

x10147_10150.om$next$Ident$ident$arity$2 = ((function (x10147_10150){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x10147_10150))
;

x10147_10150.om$next$IQuery$ = true;

x10147_10150.om$next$IQuery$query$arity$1 = ((function (x10147_10150){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x10147_10150))
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

var x10155_10169 = kanban.components.boards_menu.BoardsMenu.prototype;
x10155_10169.componentWillUpdate = ((function (x10155_10169){
return (function (next_props__7521__auto__,next_state__7522__auto__){
var this__7520__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7520__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7520__auto__);
});})(x10155_10169))
;

x10155_10169.shouldComponentUpdate = ((function (x10155_10169){
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
});})(x10155_10169))
;

x10155_10169.componentWillUnmount = ((function (x10155_10169){
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
});})(x10155_10169))
;

x10155_10169.componentDidUpdate = ((function (x10155_10169){
return (function (prev_props__7523__auto__,prev_state__7524__auto__){
var this__7520__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7520__auto__);
});})(x10155_10169))
;

x10155_10169.isMounted = ((function (x10155_10169){
return (function (){
var this__7520__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7520__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x10155_10169))
;

x10155_10169.componentWillMount = ((function (x10155_10169){
return (function (){
var this__7520__auto__ = this;
var indexer__7525__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7520__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7525__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7525__auto__,this__7520__auto__);
}
});})(x10155_10169))
;

x10155_10169.render = ((function (x10155_10169){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_10156 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_10157 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_10158 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_10159 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_10160 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"Boards"),React.DOM.ul(null,(function (){var map__10161 = om.next.props.call(null,this$);
var map__10161__$1 = ((((!((map__10161 == null)))?((((map__10161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10161):map__10161);
var boards = cljs.core.get.call(null,map__10161__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var activate_fn = cljs.core.get.call(null,map__10161__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var iter__5866__auto__ = ((function (map__10161,map__10161__$1,boards,activate_fn,_STAR_reconciler_STAR_10156,_STAR_depth_STAR_10157,_STAR_shared_STAR_10158,_STAR_instrument_STAR_10159,_STAR_parent_STAR_10160,this$,x10155_10169){
return (function kanban$components$boards_menu$iter__10163(s__10164){
return (new cljs.core.LazySeq(null,((function (map__10161,map__10161__$1,boards,activate_fn,_STAR_reconciler_STAR_10156,_STAR_depth_STAR_10157,_STAR_shared_STAR_10158,_STAR_instrument_STAR_10159,_STAR_parent_STAR_10160,this$,x10155_10169){
return (function (){
var s__10164__$1 = s__10164;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10164__$1);
if(temp__4425__auto__){
var s__10164__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10164__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__10164__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__10166 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__10165 = (0);
while(true){
if((i__10165 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__10165);
cljs.core.chunk_append.call(null,b__10166,kanban.components.boards_menu.board_menu_item.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn)));

var G__10170 = (i__10165 + (1));
i__10165 = G__10170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10166),kanban$components$boards_menu$iter__10163.call(null,cljs.core.chunk_rest.call(null,s__10164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10166),null);
}
} else {
var board = cljs.core.first.call(null,s__10164__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn)),kanban$components$boards_menu$iter__10163.call(null,cljs.core.rest.call(null,s__10164__$2)));
}
} else {
return null;
}
break;
}
});})(map__10161,map__10161__$1,boards,activate_fn,_STAR_reconciler_STAR_10156,_STAR_depth_STAR_10157,_STAR_shared_STAR_10158,_STAR_instrument_STAR_10159,_STAR_parent_STAR_10160,this$,x10155_10169))
,null,null));
});})(map__10161,map__10161__$1,boards,activate_fn,_STAR_reconciler_STAR_10156,_STAR_depth_STAR_10157,_STAR_shared_STAR_10158,_STAR_instrument_STAR_10159,_STAR_parent_STAR_10160,this$,x10155_10169))
;
return iter__5866__auto__.call(null,boards);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_10160;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_10159;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_10158;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_10157;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_10156;
}});})(x10155_10169))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x10167_10171 = kanban.components.boards_menu.BoardsMenu;


var x10168_10172 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7582__auto__,writer__7583__auto__,opt__7584__auto__){
return cljs.core._write.call(null,writer__7583__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map