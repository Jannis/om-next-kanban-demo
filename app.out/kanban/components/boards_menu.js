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
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x13344_13374 = kanban.components.boards_menu.BoardMenuItem.prototype;
x13344_13374.componentWillUpdate = ((function (x13344_13374){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13344_13374))
;

x13344_13374.shouldComponentUpdate = ((function (x13344_13374){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13347 = this__12403__auto__.state;
var G__13348 = "omcljs$state";
return goog.object.get(G__13347,G__13348);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13344_13374))
;

x13344_13374.componentWillUnmount = ((function (x13344_13374){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13344_13374))
;

x13344_13374.componentDidUpdate = ((function (x13344_13374){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13344_13374))
;

x13344_13374.isMounted = ((function (x13344_13374){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13344_13374))
;

x13344_13374.componentWillMount = ((function (x13344_13374){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13344_13374))
;

x13344_13374.render = ((function (x13344_13374){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13349 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13350 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13351 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13352 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13353 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var G__13362 = null;
var G__13363 = (function (){var map__13364 = om.next.props(this$);
var map__13364__$1 = ((((!((map__13364 == null)))?((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13364):map__13364);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$name);
var map__13365 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13365__$1 = ((((!((map__13365 == null)))?((((map__13365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13365):map__13365);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13365__$1,cljs.core.cst$kw$activate_DASH_fn);
var G__13369 = {"onClick": ((function (map__13364,map__13364__$1,name,map__13365,map__13365__$1,activate_fn,G__13362,_STAR_reconciler_STAR_13349,_STAR_depth_STAR_13350,_STAR_shared_STAR_13351,_STAR_instrument_STAR_13352,_STAR_parent_STAR_13353,this$,x13344_13374){
return (function (){
var G__13371 = om.next.get_ident(this$);
return (activate_fn.cljs$core$IFn$_invoke$arity$1 ? activate_fn.cljs$core$IFn$_invoke$arity$1(G__13371) : activate_fn.call(null,G__13371));
});})(map__13364,map__13364__$1,name,map__13365,map__13365__$1,activate_fn,G__13362,_STAR_reconciler_STAR_13349,_STAR_depth_STAR_13350,_STAR_shared_STAR_13351,_STAR_instrument_STAR_13352,_STAR_parent_STAR_13353,this$,x13344_13374))
};
var G__13370 = name;
return React.DOM.a(G__13369,G__13370);
})();
return React.DOM.li(G__13362,G__13363);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13353;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13352;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13351;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13350;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13349;
}});})(x13344_13374))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x13372_13375 = kanban.components.boards_menu.BoardMenuItem;
x13372_13375.om$next$Ident$ = true;

x13372_13375.om$next$Ident$ident$arity$2 = ((function (x13372_13375){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13372_13375))
;

x13372_13375.om$next$IQuery$ = true;

x13372_13375.om$next$IQuery$query$arity$1 = ((function (x13372_13375){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null);
});})(x13372_13375))
;


var x13373_13376 = kanban.components.boards_menu.BoardMenuItem.prototype;
x13373_13376.om$next$Ident$ = true;

x13373_13376.om$next$Ident$ident$arity$2 = ((function (x13373_13376){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x13373_13376))
;

x13373_13376.om$next$IQuery$ = true;

x13373_13376.om$next$IQuery$query$arity$1 = ((function (x13373_13376){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null);
});})(x13373_13376))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,cljs.core.cst$kw$id], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__12463__auto__ = this;
React.Component.apply(this__12463__auto__,arguments);

if(!((this__12463__auto__.initLocalState == null))){
this__12463__auto__.state = this__12463__auto__.initLocalState();
} else {
this__12463__auto__.state = {};
}

return this__12463__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x13381_13431 = kanban.components.boards_menu.BoardsMenu.prototype;
x13381_13431.componentWillUpdate = ((function (x13381_13431){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
om.next.merge_pending_props_BANG_(this__12403__auto__);

return om.next.merge_pending_state_BANG_(this__12403__auto__);
});})(x13381_13431))
;

x13381_13431.shouldComponentUpdate = ((function (x13381_13431){
return (function (next_props__12404__auto__,next_state__12405__auto__){
var this__12403__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12403__auto__),goog.object.get(next_props__12404__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__12403__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13384 = this__12403__auto__.state;
var G__13385 = "omcljs$state";
return goog.object.get(G__13384,G__13385);
})(),goog.object.get(next_state__12405__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x13381_13431))
;

x13381_13431.componentWillUnmount = ((function (x13381_13431){
return (function (){
var this__12403__auto__ = this;
var r__12409__auto__ = om.next.get_reconciler(this__12403__auto__);
var cfg__12410__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12409__auto__);
var st__12411__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
var indexer__12408__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12410__auto__);
if((st__12411__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12403__auto__], 0));
}

if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13381_13431))
;

x13381_13431.componentDidUpdate = ((function (x13381_13431){
return (function (prev_props__12406__auto__,prev_state__12407__auto__){
var this__12403__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12403__auto__);
});})(x13381_13431))
;

x13381_13431.isMounted = ((function (x13381_13431){
return (function (){
var this__12403__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12403__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13381_13431))
;

x13381_13431.componentWillMount = ((function (x13381_13431){
return (function (){
var this__12403__auto__ = this;
var indexer__12408__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12403__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12408__auto__,this__12403__auto__);
}
});})(x13381_13431))
;

x13381_13431.render = ((function (x13381_13431){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_13386 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13387 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13388 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13389 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13390 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__13391 = om.next.props(this$);
var map__13391__$1 = ((((!((map__13391 == null)))?((((map__13391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13391):map__13391);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13391__$1,cljs.core.cst$kw$boards);
var map__13392 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13392__$1 = ((((!((map__13392 == null)))?((((map__13392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13392):map__13392);
var activate_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13392__$1,cljs.core.cst$kw$activate_DASH_fn);
var create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13392__$1,cljs.core.cst$kw$create_DASH_fn);
var G__13395 = {"className": "header-menu"};
var G__13396 = React.DOM.a(null,"\u25BE Boards");
var G__13397 = (function (){var G__13408 = null;
var G__13409 = (function (){var iter__5940__auto__ = ((function (G__13408,G__13395,G__13396,map__13391,map__13391__$1,boards,map__13392,map__13392__$1,activate_fn,create_fn,_STAR_reconciler_STAR_13386,_STAR_depth_STAR_13387,_STAR_shared_STAR_13388,_STAR_instrument_STAR_13389,_STAR_parent_STAR_13390,this$,x13381_13431){
return (function kanban$components$boards_menu$iter__13412(s__13413){
return (new cljs.core.LazySeq(null,((function (G__13408,G__13395,G__13396,map__13391,map__13391__$1,boards,map__13392,map__13392__$1,activate_fn,create_fn,_STAR_reconciler_STAR_13386,_STAR_depth_STAR_13387,_STAR_shared_STAR_13388,_STAR_instrument_STAR_13389,_STAR_parent_STAR_13390,this$,x13381_13431){
return (function (){
var s__13413__$1 = s__13413;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13413__$1);
if(temp__4425__auto__){
var s__13413__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13413__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__13413__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__13415 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__13414 = (0);
while(true){
if((i__13414 < size__5939__auto__)){
var board = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__13414);
cljs.core.chunk_append(b__13415,(function (){var G__13420 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$activate_DASH_fn,activate_fn], null));
return (kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1(G__13420) : kanban.components.boards_menu.board_menu_item.call(null,G__13420));
})());

var G__13432 = (i__13414 + (1));
i__13414 = G__13432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13415),kanban$components$boards_menu$iter__13412(cljs.core.chunk_rest(s__13413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13415),null);
}
} else {
var board = cljs.core.first(s__13413__$2);
return cljs.core.cons((function (){var G__13421 = om.next.computed(board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$activate_DASH_fn,activate_fn], null));
return (kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1 ? kanban.components.boards_menu.board_menu_item.cljs$core$IFn$_invoke$arity$1(G__13421) : kanban.components.boards_menu.board_menu_item.call(null,G__13421));
})(),kanban$components$boards_menu$iter__13412(cljs.core.rest(s__13413__$2)));
}
} else {
return null;
}
break;
}
});})(G__13408,G__13395,G__13396,map__13391,map__13391__$1,boards,map__13392,map__13392__$1,activate_fn,create_fn,_STAR_reconciler_STAR_13386,_STAR_depth_STAR_13387,_STAR_shared_STAR_13388,_STAR_instrument_STAR_13389,_STAR_parent_STAR_13390,this$,x13381_13431))
,null,null));
});})(G__13408,G__13395,G__13396,map__13391,map__13391__$1,boards,map__13392,map__13392__$1,activate_fn,create_fn,_STAR_reconciler_STAR_13386,_STAR_depth_STAR_13387,_STAR_shared_STAR_13388,_STAR_instrument_STAR_13389,_STAR_parent_STAR_13390,this$,x13381_13431))
;
return iter__5940__auto__(boards);
})();
var G__13410 = (function (){var G__13422 = {"className": "header-menu-separator"};
return React.DOM.li(G__13422);
})();
var G__13411 = (function (){var G__13425 = null;
var G__13426 = (function (){var G__13427 = {"onClick": create_fn};
var G__13428 = "Create";
return React.DOM.a(G__13427,G__13428);
})();
return React.DOM.li(G__13425,G__13426);
})();
return React.DOM.ul(G__13408,G__13409,G__13410,G__13411);
})();
return React.DOM.div(G__13395,G__13396,G__13397);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13390;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13389;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13388;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13387;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13386;
}});})(x13381_13431))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x13429_13433 = kanban.components.boards_menu.BoardsMenu;


var x13430_13434 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__12465__auto__,writer__12466__auto__,opt__12467__auto__){
return cljs.core._write(writer__12466__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.cljs$core$IFn$_invoke$arity$1(kanban.components.boards_menu.BoardsMenu);
