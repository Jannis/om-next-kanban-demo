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

var x33246_33258 = kanban.components.boards_menu.BoardMenuItem.prototype;
x33246_33258.componentWillUpdate = ((function (x33246_33258){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x33246_33258))
;

x33246_33258.shouldComponentUpdate = ((function (x33246_33258){
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
});})(x33246_33258))
;

x33246_33258.componentWillUnmount = ((function (x33246_33258){
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
});})(x33246_33258))
;

x33246_33258.componentDidUpdate = ((function (x33246_33258){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x33246_33258))
;

x33246_33258.isMounted = ((function (x33246_33258){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33246_33258))
;

x33246_33258.componentWillMount = ((function (x33246_33258){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x33246_33258))
;

x33246_33258.render = ((function (x33246_33258){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_33247 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33248 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33249 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33250 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33251 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__33252 = om.next.props.call(null,this$);
var map__33252__$1 = ((((!((map__33252 == null)))?((((map__33252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33252):map__33252);
var name = cljs.core.get.call(null,map__33252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__33253 = om.next.get_computed.call(null,this$);
var map__33253__$1 = ((((!((map__33253 == null)))?((((map__33253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);
var activate_fn = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__33252,map__33252__$1,name,map__33253,map__33253__$1,activate_fn,_STAR_reconciler_STAR_33247,_STAR_depth_STAR_33248,_STAR_shared_STAR_33249,_STAR_instrument_STAR_33250,_STAR_parent_STAR_33251,this$,x33246_33258){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__33252,map__33252__$1,name,map__33253,map__33253__$1,activate_fn,_STAR_reconciler_STAR_33247,_STAR_depth_STAR_33248,_STAR_shared_STAR_33249,_STAR_instrument_STAR_33250,_STAR_parent_STAR_33251,this$,x33246_33258))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33251;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33250;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33249;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33248;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33247;
}});})(x33246_33258))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x33256_33259 = kanban.components.boards_menu.BoardMenuItem;
x33256_33259.om$next$Ident$ = true;

x33256_33259.om$next$Ident$ident$arity$2 = ((function (x33256_33259){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33256_33259))
;

x33256_33259.om$next$IQuery$ = true;

x33256_33259.om$next$IQuery$query$arity$1 = ((function (x33256_33259){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x33256_33259))
;


var x33257_33260 = kanban.components.boards_menu.BoardMenuItem.prototype;
x33257_33260.om$next$Ident$ = true;

x33257_33260.om$next$Ident$ident$arity$2 = ((function (x33257_33260){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x33257_33260))
;

x33257_33260.om$next$IQuery$ = true;

x33257_33260.om$next$IQuery$query$arity$1 = ((function (x33257_33260){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x33257_33260))
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

var x33265_33281 = kanban.components.boards_menu.BoardsMenu.prototype;
x33265_33281.componentWillUpdate = ((function (x33265_33281){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x33265_33281))
;

x33265_33281.shouldComponentUpdate = ((function (x33265_33281){
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
});})(x33265_33281))
;

x33265_33281.componentWillUnmount = ((function (x33265_33281){
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
});})(x33265_33281))
;

x33265_33281.componentDidUpdate = ((function (x33265_33281){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x33265_33281))
;

x33265_33281.isMounted = ((function (x33265_33281){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33265_33281))
;

x33265_33281.componentWillMount = ((function (x33265_33281){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x33265_33281))
;

x33265_33281.render = ((function (x33265_33281){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_33266 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33267 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33268 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33269 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33270 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__33271 = om.next.props.call(null,this$);
var map__33271__$1 = ((((!((map__33271 == null)))?((((map__33271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33271):map__33271);
var boards = cljs.core.get.call(null,map__33271__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__33272 = om.next.get_computed.call(null,this$);
var map__33272__$1 = ((((!((map__33272 == null)))?((((map__33272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33272):map__33272);
var activate_fn = cljs.core.get.call(null,map__33272__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__33272__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5866__auto__ = ((function (map__33271,map__33271__$1,boards,map__33272,map__33272__$1,activate_fn,create_fn,_STAR_reconciler_STAR_33266,_STAR_depth_STAR_33267,_STAR_shared_STAR_33268,_STAR_instrument_STAR_33269,_STAR_parent_STAR_33270,this$,x33265_33281){
return (function kanban$components$boards_menu$iter__33275(s__33276){
return (new cljs.core.LazySeq(null,((function (map__33271,map__33271__$1,boards,map__33272,map__33272__$1,activate_fn,create_fn,_STAR_reconciler_STAR_33266,_STAR_depth_STAR_33267,_STAR_shared_STAR_33268,_STAR_instrument_STAR_33269,_STAR_parent_STAR_33270,this$,x33265_33281){
return (function (){
var s__33276__$1 = s__33276;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33276__$1);
if(temp__4425__auto__){
var s__33276__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33276__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__33276__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__33278 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__33277 = (0);
while(true){
if((i__33277 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__33277);
cljs.core.chunk_append.call(null,b__33278,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__33282 = (i__33277 + (1));
i__33277 = G__33282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33278),kanban$components$boards_menu$iter__33275.call(null,cljs.core.chunk_rest.call(null,s__33276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33278),null);
}
} else {
var board = cljs.core.first.call(null,s__33276__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__33275.call(null,cljs.core.rest.call(null,s__33276__$2)));
}
} else {
return null;
}
break;
}
});})(map__33271,map__33271__$1,boards,map__33272,map__33272__$1,activate_fn,create_fn,_STAR_reconciler_STAR_33266,_STAR_depth_STAR_33267,_STAR_shared_STAR_33268,_STAR_instrument_STAR_33269,_STAR_parent_STAR_33270,this$,x33265_33281))
,null,null));
});})(map__33271,map__33271__$1,boards,map__33272,map__33272__$1,activate_fn,create_fn,_STAR_reconciler_STAR_33266,_STAR_depth_STAR_33267,_STAR_shared_STAR_33268,_STAR_instrument_STAR_33269,_STAR_parent_STAR_33270,this$,x33265_33281))
;
return iter__5866__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33270;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33269;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33268;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33267;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33266;
}});})(x33265_33281))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x33279_33283 = kanban.components.boards_menu.BoardsMenu;


var x33280_33284 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map