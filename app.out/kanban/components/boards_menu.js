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

var x29849_29861 = kanban.components.boards_menu.BoardMenuItem.prototype;
x29849_29861.componentWillUpdate = ((function (x29849_29861){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x29849_29861))
;

x29849_29861.shouldComponentUpdate = ((function (x29849_29861){
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
});})(x29849_29861))
;

x29849_29861.componentWillUnmount = ((function (x29849_29861){
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
});})(x29849_29861))
;

x29849_29861.componentDidUpdate = ((function (x29849_29861){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x29849_29861))
;

x29849_29861.isMounted = ((function (x29849_29861){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29849_29861))
;

x29849_29861.componentWillMount = ((function (x29849_29861){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x29849_29861))
;

x29849_29861.render = ((function (x29849_29861){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29850 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29851 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29852 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29853 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29854 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.li(null,(function (){var map__29855 = om.next.props.call(null,this$);
var map__29855__$1 = ((((!((map__29855 == null)))?((((map__29855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855):map__29855);
var name = cljs.core.get.call(null,map__29855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__29856 = om.next.get_computed.call(null,this$);
var map__29856__$1 = ((((!((map__29856 == null)))?((((map__29856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);
var activate_fn = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__29855,map__29855__$1,name,map__29856,map__29856__$1,activate_fn,_STAR_reconciler_STAR_29850,_STAR_depth_STAR_29851,_STAR_shared_STAR_29852,_STAR_instrument_STAR_29853,_STAR_parent_STAR_29854,this$,x29849_29861){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__29855,map__29855__$1,name,map__29856,map__29856__$1,activate_fn,_STAR_reconciler_STAR_29850,_STAR_depth_STAR_29851,_STAR_shared_STAR_29852,_STAR_instrument_STAR_29853,_STAR_parent_STAR_29854,this$,x29849_29861))
},name);
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29854;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29853;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29852;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29851;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29850;
}});})(x29849_29861))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x29859_29862 = kanban.components.boards_menu.BoardMenuItem;
x29859_29862.om$next$Ident$ = true;

x29859_29862.om$next$Ident$ident$arity$2 = ((function (x29859_29862){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x29859_29862))
;

x29859_29862.om$next$IQuery$ = true;

x29859_29862.om$next$IQuery$query$arity$1 = ((function (x29859_29862){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x29859_29862))
;


var x29860_29863 = kanban.components.boards_menu.BoardMenuItem.prototype;
x29860_29863.om$next$Ident$ = true;

x29860_29863.om$next$Ident$ident$arity$2 = ((function (x29860_29863){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x29860_29863))
;

x29860_29863.om$next$IQuery$ = true;

x29860_29863.om$next$IQuery$query$arity$1 = ((function (x29860_29863){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x29860_29863))
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

var x29868_29884 = kanban.components.boards_menu.BoardsMenu.prototype;
x29868_29884.componentWillUpdate = ((function (x29868_29884){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x29868_29884))
;

x29868_29884.shouldComponentUpdate = ((function (x29868_29884){
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
});})(x29868_29884))
;

x29868_29884.componentWillUnmount = ((function (x29868_29884){
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
});})(x29868_29884))
;

x29868_29884.componentDidUpdate = ((function (x29868_29884){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x29868_29884))
;

x29868_29884.isMounted = ((function (x29868_29884){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29868_29884))
;

x29868_29884.componentWillMount = ((function (x29868_29884){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x29868_29884))
;

x29868_29884.render = ((function (x29868_29884){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29869 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29870 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29871 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29872 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29873 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__29874 = om.next.props.call(null,this$);
var map__29874__$1 = ((((!((map__29874 == null)))?((((map__29874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29874):map__29874);
var boards = cljs.core.get.call(null,map__29874__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__29875 = om.next.get_computed.call(null,this$);
var map__29875__$1 = ((((!((map__29875 == null)))?((((map__29875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29875):map__29875);
var activate_fn = cljs.core.get.call(null,map__29875__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__29875__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},React.DOM.a(null,"\u25BE Boards"),React.DOM.ul(null,(function (){var iter__5866__auto__ = ((function (map__29874,map__29874__$1,boards,map__29875,map__29875__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29869,_STAR_depth_STAR_29870,_STAR_shared_STAR_29871,_STAR_instrument_STAR_29872,_STAR_parent_STAR_29873,this$,x29868_29884){
return (function kanban$components$boards_menu$iter__29878(s__29879){
return (new cljs.core.LazySeq(null,((function (map__29874,map__29874__$1,boards,map__29875,map__29875__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29869,_STAR_depth_STAR_29870,_STAR_shared_STAR_29871,_STAR_instrument_STAR_29872,_STAR_parent_STAR_29873,this$,x29868_29884){
return (function (){
var s__29879__$1 = s__29879;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29879__$1);
if(temp__4425__auto__){
var s__29879__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29879__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__29879__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__29881 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__29880 = (0);
while(true){
if((i__29880 < size__5865__auto__)){
var board = cljs.core._nth.call(null,c__5864__auto__,i__29880);
cljs.core.chunk_append.call(null,b__29881,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__29885 = (i__29880 + (1));
i__29880 = G__29885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29881),kanban$components$boards_menu$iter__29878.call(null,cljs.core.chunk_rest.call(null,s__29879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29881),null);
}
} else {
var board = cljs.core.first.call(null,s__29879__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__29878.call(null,cljs.core.rest.call(null,s__29879__$2)));
}
} else {
return null;
}
break;
}
});})(map__29874,map__29874__$1,boards,map__29875,map__29875__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29869,_STAR_depth_STAR_29870,_STAR_shared_STAR_29871,_STAR_instrument_STAR_29872,_STAR_parent_STAR_29873,this$,x29868_29884))
,null,null));
});})(map__29874,map__29874__$1,boards,map__29875,map__29875__$1,activate_fn,create_fn,_STAR_reconciler_STAR_29869,_STAR_depth_STAR_29870,_STAR_shared_STAR_29871,_STAR_instrument_STAR_29872,_STAR_parent_STAR_29873,this$,x29868_29884))
;
return iter__5866__auto__.call(null,boards);
})(),React.DOM.li({"className": "header-menu-separator"}),React.DOM.li(null,React.DOM.a({"onClick": create_fn},"Create"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29873;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29872;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29871;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29870;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29869;
}});})(x29868_29884))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x29882_29886 = kanban.components.boards_menu.BoardsMenu;


var x29883_29887 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map