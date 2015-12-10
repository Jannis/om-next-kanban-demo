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
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.boards_menu.BoardMenuItem.prototype = goog.object.clone(React.Component.prototype);

var x9924_9936 = kanban.components.boards_menu.BoardMenuItem.prototype;
x9924_9936.componentWillUpdate = ((function (x9924_9936){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x9924_9936))
;

x9924_9936.shouldComponentUpdate = ((function (x9924_9936){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8201__auto__),goog.object.get(next_props__8202__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8201__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8201__auto__.state,"omcljs$state"),goog.object.get(next_state__8203__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x9924_9936))
;

x9924_9936.componentWillUnmount = ((function (x9924_9936){
return (function (){
var this__8201__auto__ = this;
var r__8207__auto__ = om.next.get_reconciler.call(null,this__8201__auto__);
var cfg__8208__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8207__auto__);
var st__8209__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
var indexer__8206__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
if((st__8209__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8209__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8201__auto__);
}

if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x9924_9936))
;

x9924_9936.componentDidUpdate = ((function (x9924_9936){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x9924_9936))
;

x9924_9936.isMounted = ((function (x9924_9936){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x9924_9936))
;

x9924_9936.componentWillMount = ((function (x9924_9936){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x9924_9936))
;

x9924_9936.render = ((function (x9924_9936){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_9925 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_9926 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_9927 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_9928 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_9929 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{return React.DOM.li(null,om.util.force_children.call(null,(function (){var map__9930 = om.next.props.call(null,this$);
var map__9930__$1 = ((((!((map__9930 == null)))?((((map__9930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9930):map__9930);
var name = cljs.core.get.call(null,map__9930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__9931 = om.next.get_computed.call(null,this$);
var map__9931__$1 = ((((!((map__9931 == null)))?((((map__9931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9931):map__9931);
var activate_fn = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.a({"onClick": ((function (map__9930,map__9930__$1,name,map__9931,map__9931__$1,activate_fn,_STAR_reconciler_STAR_9925,_STAR_depth_STAR_9926,_STAR_shared_STAR_9927,_STAR_instrument_STAR_9928,_STAR_parent_STAR_9929,this$,this__8200__auto__,x9924_9936){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__9930,map__9930__$1,name,map__9931,map__9931__$1,activate_fn,_STAR_reconciler_STAR_9925,_STAR_depth_STAR_9926,_STAR_shared_STAR_9927,_STAR_instrument_STAR_9928,_STAR_parent_STAR_9929,this$,this__8200__auto__,x9924_9936))
},om.util.force_children.call(null,name));
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_9929;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_9928;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_9927;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_9926;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_9925;
}});})(x9924_9936))
;


kanban.components.boards_menu.BoardMenuItem.prototype.constructor = kanban.components.boards_menu.BoardMenuItem;

kanban.components.boards_menu.BoardMenuItem.prototype.om$isComponent = true;

var x9934_9937 = kanban.components.boards_menu.BoardMenuItem;
x9934_9937.om$next$Ident$ = true;

x9934_9937.om$next$Ident$ident$arity$2 = ((function (x9934_9937){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x9934_9937))
;

x9934_9937.om$next$IQuery$ = true;

x9934_9937.om$next$IQuery$query$arity$1 = ((function (x9934_9937){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x9934_9937))
;


var x9935_9938 = kanban.components.boards_menu.BoardMenuItem.prototype;
x9935_9938.om$next$Ident$ = true;

x9935_9938.om$next$Ident$ident$arity$2 = ((function (x9935_9938){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","by-id","board/by-id",-2089033891),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x9935_9938))
;

x9935_9938.om$next$IQuery$ = true;

x9935_9938.om$next$IQuery$query$arity$1 = ((function (x9935_9938){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x9935_9938))
;


kanban.components.boards_menu.BoardMenuItem.cljs$lang$type = true;

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardMenuItem";

kanban.components.boards_menu.BoardMenuItem.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.boards-menu/BoardMenuItem");
});
kanban.components.boards_menu.board_menu_item = om.next.factory.call(null,kanban.components.boards_menu.BoardMenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.boards_menu.BoardsMenu = (function kanban$components$boards_menu$BoardsMenu(){
var this__8261__auto__ = this;
React.Component.apply(this__8261__auto__,arguments);

if(!((this__8261__auto__.initLocalState == null))){
this__8261__auto__.state = this__8261__auto__.initLocalState();
} else {
this__8261__auto__.state = {};
}

return this__8261__auto__;
});

kanban.components.boards_menu.BoardsMenu.prototype = goog.object.clone(React.Component.prototype);

var x9943_9959 = kanban.components.boards_menu.BoardsMenu.prototype;
x9943_9959.componentWillUpdate = ((function (x9943_9959){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__8201__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__8201__auto__);
});})(x9943_9959))
;

x9943_9959.shouldComponentUpdate = ((function (x9943_9959){
return (function (next_props__8202__auto__,next_state__8203__auto__){
var this__8201__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__8201__auto__),goog.object.get(next_props__8202__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__8201__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__8201__auto__.state,"omcljs$state"),goog.object.get(next_state__8203__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x9943_9959))
;

x9943_9959.componentWillUnmount = ((function (x9943_9959){
return (function (){
var this__8201__auto__ = this;
var r__8207__auto__ = om.next.get_reconciler.call(null,this__8201__auto__);
var cfg__8208__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__8207__auto__);
var st__8209__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
var indexer__8206__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__8208__auto__);
if((st__8209__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__8209__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__8201__auto__);
}

if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x9943_9959))
;

x9943_9959.componentDidUpdate = ((function (x9943_9959){
return (function (prev_props__8204__auto__,prev_state__8205__auto__){
var this__8201__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__8201__auto__);
});})(x9943_9959))
;

x9943_9959.isMounted = ((function (x9943_9959){
return (function (){
var this__8201__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__8201__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x9943_9959))
;

x9943_9959.componentWillMount = ((function (x9943_9959){
return (function (){
var this__8201__auto__ = this;
var indexer__8206__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__8201__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__8206__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__8206__auto__,this__8201__auto__);
}
});})(x9943_9959))
;

x9943_9959.render = ((function (x9943_9959){
return (function (){
var this__8200__auto__ = this;
var this$ = this__8200__auto__;
var _STAR_reconciler_STAR_9944 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_9945 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_9946 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_9947 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_9948 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__8200__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__8200__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__8200__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__8200__auto__);

om.next._STAR_parent_STAR_ = this__8200__auto__;

try{var map__9949 = om.next.props.call(null,this$);
var map__9949__$1 = ((((!((map__9949 == null)))?((((map__9949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9949):map__9949);
var boards = cljs.core.get.call(null,map__9949__$1,new cljs.core.Keyword(null,"boards","boards",1912049694));
var map__9950 = om.next.get_computed.call(null,this$);
var map__9950__$1 = ((((!((map__9950 == null)))?((((map__9950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9950):map__9950);
var activate_fn = cljs.core.get.call(null,map__9950__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var create_fn = cljs.core.get.call(null,map__9950__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
return React.DOM.div({"className": "header-menu"},om.util.force_children.call(null,React.DOM.a(null,om.util.force_children.call(null,"\u25BE Boards"))),om.util.force_children.call(null,React.DOM.ul(null,om.util.force_children.call(null,(function (){var iter__5758__auto__ = ((function (map__9949,map__9949__$1,boards,map__9950,map__9950__$1,activate_fn,create_fn,_STAR_reconciler_STAR_9944,_STAR_depth_STAR_9945,_STAR_shared_STAR_9946,_STAR_instrument_STAR_9947,_STAR_parent_STAR_9948,this$,this__8200__auto__,x9943_9959){
return (function kanban$components$boards_menu$iter__9953(s__9954){
return (new cljs.core.LazySeq(null,((function (map__9949,map__9949__$1,boards,map__9950,map__9950__$1,activate_fn,create_fn,_STAR_reconciler_STAR_9944,_STAR_depth_STAR_9945,_STAR_shared_STAR_9946,_STAR_instrument_STAR_9947,_STAR_parent_STAR_9948,this$,this__8200__auto__,x9943_9959){
return (function (){
var s__9954__$1 = s__9954;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9954__$1);
if(temp__4425__auto__){
var s__9954__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9954__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__9954__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__9956 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__9955 = (0);
while(true){
if((i__9955 < size__5757__auto__)){
var board = cljs.core._nth.call(null,c__5756__auto__,i__9955);
cljs.core.chunk_append.call(null,b__9956,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))));

var G__9960 = (i__9955 + (1));
i__9955 = G__9960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9956),kanban$components$boards_menu$iter__9953.call(null,cljs.core.chunk_rest.call(null,s__9954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9956),null);
}
} else {
var board = cljs.core.first.call(null,s__9954__$2);
return cljs.core.cons.call(null,kanban.components.boards_menu.board_menu_item.call(null,om.next.computed.call(null,board,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),activate_fn], null))),kanban$components$boards_menu$iter__9953.call(null,cljs.core.rest.call(null,s__9954__$2)));
}
} else {
return null;
}
break;
}
});})(map__9949,map__9949__$1,boards,map__9950,map__9950__$1,activate_fn,create_fn,_STAR_reconciler_STAR_9944,_STAR_depth_STAR_9945,_STAR_shared_STAR_9946,_STAR_instrument_STAR_9947,_STAR_parent_STAR_9948,this$,this__8200__auto__,x9943_9959))
,null,null));
});})(map__9949,map__9949__$1,boards,map__9950,map__9950__$1,activate_fn,create_fn,_STAR_reconciler_STAR_9944,_STAR_depth_STAR_9945,_STAR_shared_STAR_9946,_STAR_instrument_STAR_9947,_STAR_parent_STAR_9948,this$,this__8200__auto__,x9943_9959))
;
return iter__5758__auto__.call(null,boards);
})()),om.util.force_children.call(null,React.DOM.li({"className": "header-menu-separator"})),om.util.force_children.call(null,React.DOM.li(null,om.util.force_children.call(null,React.DOM.a({"onClick": create_fn},om.util.force_children.call(null,"Create"))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_9948;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_9947;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_9946;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_9945;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_9944;
}});})(x9943_9959))
;


kanban.components.boards_menu.BoardsMenu.prototype.constructor = kanban.components.boards_menu.BoardsMenu;

kanban.components.boards_menu.BoardsMenu.prototype.om$isComponent = true;

var x9957_9961 = kanban.components.boards_menu.BoardsMenu;


var x9958_9962 = kanban.components.boards_menu.BoardsMenu.prototype;


kanban.components.boards_menu.BoardsMenu.cljs$lang$type = true;

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorStr = "kanban.components.boards-menu/BoardsMenu";

kanban.components.boards_menu.BoardsMenu.cljs$lang$ctorPrWriter = (function (this__8263__auto__,writer__8264__auto__,opt__8265__auto__){
return cljs.core._write.call(null,writer__8264__auto__,"kanban.components.boards-menu/BoardsMenu");
});
kanban.components.boards_menu.boards_menu = om.next.factory.call(null,kanban.components.boards_menu.BoardsMenu);

//# sourceMappingURL=boards_menu.js.map