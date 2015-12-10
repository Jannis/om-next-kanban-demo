// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.boards_menu');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
kanban.components.boards_menu.BoardMenuItem = (function kanban$components$boards_menu$BoardMenuItem(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x14419_14449 = kanban.components.boards_menu.BoardMenuItem.prototype;
x14419_14449.componentWillUpdate = ((function (x14419_14449){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14419_14449))
;

x14419_14449.shouldComponentUpdate = ((function (x14419_14449){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14422 = this__12855__auto__.state;
var G__14423 = "omcljs$state";
return goog.object.get(G__14422,G__14423);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14419_14449))
;

x14419_14449.componentWillUnmount = ((function (x14419_14449){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14419_14449))
;

x14419_14449.componentDidUpdate = ((function (x14419_14449){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14419_14449))
;

x14419_14449.isMounted = ((function (x14419_14449){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14419_14449))
;

x14419_14449.componentWillMount = ((function (x14419_14449){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14419_14449))
;

x14419_14449.render = ((function (x14419_14449){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14424 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14425 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14426 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14427 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14428 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var G__14437 = null;
var G__14438 = om.util.force_children((function (){var map__14439 = om.next.props(this$);
var map__14439__$1 = ((((!((map__14439 == null)))?((((map__14439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14439):map__14439);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,cljs.core.cst$kw$name);
var map__14440 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14440__$1 = ((((!((map__14440 == null)))?((((map__14440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14440):map__14440);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14440__$1,cljs.core.cst$kw$activate_DASH_fn);
var G__14444 = {"onClick": ((function (map__14439,map__14439__$1,name,map__14440,map__14440__$1,activate_fn,G__14437,_STAR_reconciler_STAR_14424,_STAR_depth_STAR_14425,_STAR_shared_STAR_14426,_STAR_instrument_STAR_14427,_STAR_parent_STAR_14428,this$,this__12854__auto__,x14419_14449){
return (function (){
var G__14446 = om.next.get_ident(this$);
return (activate_fn.cljs$core$IFn$_invoke$arity$1 ? activate_fn.cljs$core$IFn$_invoke$arity$1(G__14446) : activate_fn.call(null,G__14446));
});})(map__14439,map__14439__$1,name,map__14440,map__14440__$1,activate_fn,G__14437,_STAR_reconciler_STAR_14424,_STAR_depth_STAR_14425,_STAR_shared_STAR_14426,_STAR_instrument_STAR_14427,_STAR_parent_STAR_14428,this$,this__12854__auto__,x14419_14449))
};
var G__14445 = om.util.force_children(name);
return React.DOM.a(G__14444,G__14445);
})());
return React.DOM.li(G__14437,G__14438);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14428;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14427;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14426;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14425;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14424;
}});})(x14419_14449))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x14447_14450 = kanban.components.boards_menu.BoardMenuItem;
x14447_14450.om$next$Ident$ = true;

x14447_14450.om$next$Ident$ident$arity$2 = ((function (x14447_14450){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14447_14450))
;

x14447_14450.om$next$IQuery$ = true;

x14447_14450.om$next$IQuery$query$arity$1 = ((function (x14447_14450){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null);
});})(x14447_14450))
;


var x14448_14451 = kanban.components.boards_menu.BoardMenuItem.prototype;
x14448_14451.om$next$Ident$ = true;

x14448_14451.om$next$Ident$ident$arity$2 = ((function (x14448_14451){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x14448_14451))
;

x14448_14451.om$next$IQuery$ = true;

x14448_14451.om$next$IQuery$query$arity$1 = ((function (x14448_14451){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null);
});})(x14448_14451))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x14456_14508 = kanban.components.boards_menu.BoardsMenu.prototype;
x14456_14508.componentWillUpdate = ((function (x14456_14508){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x14456_14508))
;

x14456_14508.shouldComponentUpdate = ((function (x14456_14508){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14459 = this__12855__auto__.state;
var G__14460 = "omcljs$state";
return goog.object.get(G__14459,G__14460);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x14456_14508))
;

x14456_14508.componentWillUnmount = ((function (x14456_14508){
return (function (){
var this__12855__auto__ = this;
var r__12861__auto__ = om.next.get_reconciler(this__12855__auto__);
var cfg__12862__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12861__auto__);
var st__12863__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
var indexer__12860__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12862__auto__);
if((st__12863__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12855__auto__], 0));
}

if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14456_14508))
;

x14456_14508.componentDidUpdate = ((function (x14456_14508){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x14456_14508))
;

x14456_14508.isMounted = ((function (x14456_14508){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14456_14508))
;

x14456_14508.componentWillMount = ((function (x14456_14508){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x14456_14508))
;

x14456_14508.render = ((function (x14456_14508){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_14461 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14462 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14463 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14464 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14465 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__14466 = om.next.props(this$);
var map__14466__$1 = ((((!((map__14466 == null)))?((((map__14466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14466):map__14466);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14466__$1,cljs.core.cst$kw$boards);
var map__14467 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14467__$1 = ((((!((map__14467 == null)))?((((map__14467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14467):map__14467);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,cljs.core.cst$kw$activate_DASH_fn);
var create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,cljs.core.cst$kw$create_DASH_fn);
var G__14470 = {"className": "header-menu"};
var G__14471 = om.util.force_children((function (){var G__14473 = null;
var G__14474 = om.util.force_children("\u25BE Boards");
return React.DOM.a(G__14473,G__14474);
})());
var G__14472 = om.util.force_children((function (){var G__14485 = null;
var G__14486 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__14485,G__14470,G__14471,map__14466,map__14466__$1,boards,map__14467,map__14467__$1,activate_fn,create_fn,_STAR_reconciler_STAR_14461,_STAR_depth_STAR_14462,_STAR_shared_STAR_14463,_STAR_instrument_STAR_14464,_STAR_parent_STAR_14465,this$,this__12854__auto__,x14456_14508){
return (function kanban$components$boards_menu$iter__14489(s__14490){
return (new cljs.core.LazySeq(null,((function (G__14485,G__14470,G__14471,map__14466,map__14466__$1,boards,map__14467,map__14467__$1,activate_fn,create_fn,_STAR_reconciler_STAR_14461,_STAR_depth_STAR_14462,_STAR_shared_STAR_14463,_STAR_instrument_STAR_14464,_STAR_parent_STAR_14465,this$,this__12854__auto__,x14456_14508){
return (function (){
var s__14490__$1 = s__14490;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14490__$1);
if(temp__4425__auto__){
var s__14490__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14490__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__14490__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__14492 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__14491 = (0);
while(true){
if((i__14491 < size__5757__auto__)){
var board = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__14491);
cljs.core.chunk_append(b__14492,(function (){var G__14497 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$activate_DASH_fn,activate_fn], null));
return (kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1(G__14497) : kanban.components.boards_menu.board_menu_item.call(null,G__14497));
})());

var G__14509 = (i__14491 + (1));
i__14491 = G__14509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14492),kanban$components$boards_menu$iter__14489(cljs.core.chunk_rest(s__14490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14492),null);
}
} else {
var board = cljs.core.first(s__14490__$2);
return cljs.core.cons((function (){var G__14498 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$activate_DASH_fn,activate_fn], null));
return (kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1(G__14498) : kanban.components.boards_menu.board_menu_item.call(null,G__14498));
})(),kanban$components$boards_menu$iter__14489(cljs.core.rest(s__14490__$2)));
}
} else {
return null;
}
break;
}
});})(G__14485,G__14470,G__14471,map__14466,map__14466__$1,boards,map__14467,map__14467__$1,activate_fn,create_fn,_STAR_reconciler_STAR_14461,_STAR_depth_STAR_14462,_STAR_shared_STAR_14463,_STAR_instrument_STAR_14464,_STAR_parent_STAR_14465,this$,this__12854__auto__,x14456_14508))
,null,null));
});})(G__14485,G__14470,G__14471,map__14466,map__14466__$1,boards,map__14467,map__14467__$1,activate_fn,create_fn,_STAR_reconciler_STAR_14461,_STAR_depth_STAR_14462,_STAR_shared_STAR_14463,_STAR_instrument_STAR_14464,_STAR_parent_STAR_14465,this$,this__12854__auto__,x14456_14508))
;
return iter__5758__auto__(boards);
})());
var G__14487 = om.util.force_children((function (){var G__14499 = {"className": "header-menu-separator"};
return React.DOM.li(G__14499);
})());
var G__14488 = om.util.force_children((function (){var G__14502 = null;
var G__14503 = om.util.force_children((function (){var G__14504 = {"onClick": create_fn};
var G__14505 = om.util.force_children("Create");
return React.DOM.a(G__14504,G__14505);
})());
return React.DOM.li(G__14502,G__14503);
})());
return React.DOM.ul(G__14485,G__14486,G__14487,G__14488);
})());
return React.DOM.div(G__14470,G__14471,G__14472);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14465;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14464;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14463;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14462;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14461;
}});})(x14456_14508))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x14506_14510 = kanban.components.boards_menu.BoardsMenu;


var x14507_14511 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.boards_menu.BoardsMenu);
