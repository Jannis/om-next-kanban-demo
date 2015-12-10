// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.components.board_dialog');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
goog.require('kanban.components.sortable_list');
/**
 * @constructor
 */
kanban.components.board_dialog.BoardDialog = (function kanban$components$board_dialog$BoardDialog(){
var this__12915__auto__ = this;
React.Component.apply(this__12915__auto__,arguments);

if(!((this__12915__auto__.initLocalState == null))){
this__12915__auto__.state = this__12915__auto__.initLocalState();
} else {
this__12915__auto__.state = {};
}

return this__12915__auto__;
});

kanban.components.board_dialog.BoardDialog.prototype = goog.object.clone(React.Component.prototype);

var x15127_15209 = kanban.components.board_dialog.BoardDialog.prototype;
x15127_15209.componentWillUpdate = ((function (x15127_15209){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
om.next.merge_pending_props_BANG_(this__12855__auto__);

return om.next.merge_pending_state_BANG_(this__12855__auto__);
});})(x15127_15209))
;

x15127_15209.shouldComponentUpdate = ((function (x15127_15209){
return (function (next_props__12856__auto__,next_state__12857__auto__){
var this__12855__auto__ = this;
var or__4986__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12855__auto__),goog.object.get(next_props__12856__auto__,"omcljs$value"));
if(or__4986__auto__){
return or__4986__auto__;
} else {
var and__4974__auto__ = this__12855__auto__.state;
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__15130 = this__12855__auto__.state;
var G__15131 = "omcljs$state";
return goog.object.get(G__15130,G__15131);
})(),goog.object.get(next_state__12857__auto__,"omcljs$state"));
} else {
return and__4974__auto__;
}
}
});})(x15127_15209))
;

x15127_15209.componentWillUnmount = ((function (x15127_15209){
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
});})(x15127_15209))
;

x15127_15209.componentDidUpdate = ((function (x15127_15209){
return (function (prev_props__12858__auto__,prev_state__12859__auto__){
var this__12855__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12855__auto__);
});})(x15127_15209))
;

x15127_15209.isMounted = ((function (x15127_15209){
return (function (){
var this__12855__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12855__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x15127_15209))
;

x15127_15209.componentWillMount = ((function (x15127_15209){
return (function (){
var this__12855__auto__ = this;
var indexer__12860__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12855__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12860__auto__,this__12855__auto__);
}
});})(x15127_15209))
;

x15127_15209.update = ((function (x15127_15209){
return (function (prop,value){
var this$ = this;
var map__15132 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__15132__$1 = ((((!((map__15132 == null)))?((((map__15132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15132):map__15132);
var update_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15132__$1,cljs.core.cst$kw$update_DASH_fn);
var G__15134 = om.next.get_ident(this$);
var G__15135 = cljs.core.PersistentArrayMap.fromArray([prop,value], true, false);
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(G__15134,G__15135) : update_fn.call(null,G__15134,G__15135));
});})(x15127_15209))
;

x15127_15209.render = ((function (x15127_15209){
return (function (){
var this__12854__auto__ = this;
var this$ = this__12854__auto__;
var _STAR_reconciler_STAR_15136 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_15137 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_15138 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_15139 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_15140 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12854__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12854__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12854__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12854__auto__);

om.next._STAR_parent_STAR_ = this__12854__auto__;

try{var map__15141 = om.next.props(this$);
var map__15141__$1 = ((((!((map__15141 == null)))?((((map__15141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15141):map__15141);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$name);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$description);
var lanes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,cljs.core.cst$kw$lanes);
var map__15142 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__15142__$1 = ((((!((map__15142 == null)))?((((map__15142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15142):map__15142);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15142__$1,cljs.core.cst$kw$close_DASH_fn);
var G__15145 = {"className": "dialog"};
var G__15146 = om.util.force_children((function (){var G__15148 = {"className": "dialog-closer", "onClick": close_fn};
return React.DOM.div(G__15148);
})());
var G__15147 = om.util.force_children((function (){var G__15149 = {"className": "dialog-content"};
var G__15150 = om.util.force_children((function (){var G__15154 = {"className": "dialog-title"};
var G__15155 = om.util.force_children("Edit board");
var G__15156 = om.util.force_children((function (){var G__15157 = {"className": "board-name"};
var G__15158 = om.util.force_children(name);
return React.DOM.span(G__15157,G__15158);
})());
return React.DOM.h1(G__15154,G__15155,G__15156);
})());
var G__15151 = om.util.force_children((function (){var G__15159 = {"onSubmit": ((function (G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (p1__15118_SHARP_){
return p1__15118_SHARP_.preventDefault();
});})(G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
};
var G__15160 = om.util.force_children((function (){var G__15163 = {"className": "form-row"};
var G__15164 = om.util.force_children((function (){var G__15166 = null;
var G__15167 = om.util.force_children("Name:");
return React.DOM.label(G__15166,G__15167);
})());
var G__15165 = om.util.force_children((function (){var G__15168 = {"value": name, "placeholder": "Enter the name of the board here...", "onChange": ((function (G__15163,G__15164,G__15159,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (p1__15119_SHARP_){
return this$.update(cljs.core.cst$kw$name,p1__15119_SHARP_.target.value);
});})(G__15163,G__15164,G__15159,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__15168) : om.dom.input.call(null,G__15168));
})());
return React.DOM.div(G__15163,G__15164,G__15165);
})());
var G__15161 = om.util.force_children((function (){var G__15169 = {"className": "form-row"};
var G__15170 = om.util.force_children((function (){var G__15172 = null;
var G__15173 = om.util.force_children("Description:");
return React.DOM.label(G__15172,G__15173);
})());
var G__15171 = om.util.force_children((function (){var G__15174 = {"value": description, "placeholder": "Enter a description for the board here...", "onChange": ((function (G__15169,G__15170,G__15159,G__15160,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (p1__15120_SHARP_){
return this$.update(cljs.core.cst$kw$description,p1__15120_SHARP_.target.value);
});})(G__15169,G__15170,G__15159,G__15160,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__15174) : om.dom.textarea.call(null,G__15174));
})());
return React.DOM.div(G__15169,G__15170,G__15171);
})());
var G__15162 = om.util.force_children((function (){var G__15175 = {"className": "form-row"};
var G__15176 = om.util.force_children((function (){var G__15178 = null;
var G__15179 = om.util.force_children("Lanes:");
return React.DOM.label(G__15178,G__15179);
})());
var G__15177 = om.util.force_children((function (){var G__15182 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$items,lanes,cljs.core.cst$kw$key_DASH_fn,cljs.core.cst$kw$id,cljs.core.cst$kw$element_DASH_fn,((function (G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (p1__15121_SHARP_){
var G__15183 = {"className": "lane-name"};
var G__15184 = om.util.force_children(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__15121_SHARP_));
return React.DOM.span(G__15183,G__15184);
});})(G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
,cljs.core.cst$kw$change_DASH_fn,((function (G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (lanes__$1){
return this$.update(cljs.core.cst$kw$lanes,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209){
return (function (p1__15122_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lane_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15122_SHARP_)], null);
});})(G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
,lanes__$1));
});})(G__15175,G__15176,G__15159,G__15160,G__15161,G__15149,G__15150,G__15145,G__15146,map__15141,map__15141__$1,id,name,description,lanes,map__15142,map__15142__$1,close_fn,_STAR_reconciler_STAR_15136,_STAR_depth_STAR_15137,_STAR_shared_STAR_15138,_STAR_instrument_STAR_15139,_STAR_parent_STAR_15140,this$,this__12854__auto__,x15127_15209))
], null);
return (kanban.components.sortable_list.sortable_list.cljs$core$IFn$_invoke$arity$1 ? kanban.components.sortable_list.sortable_list.cljs$core$IFn$_invoke$arity$1(G__15182) : kanban.components.sortable_list.sortable_list.call(null,G__15182));
})());
return React.DOM.div(G__15175,G__15176,G__15177);
})());
return React.DOM.form(G__15159,G__15160,G__15161,G__15162);
})());
var G__15152 = om.util.force_children((function (){var G__15185 = {"className": "dialog-buttons"};
var G__15186 = om.util.force_children((function (){var G__15187 = {"onClick": close_fn};
var G__15188 = om.util.force_children("Close");
return React.DOM.button(G__15187,G__15188);
})());
return React.DOM.p(G__15185,G__15186);
})());
var G__15153 = om.util.force_children((function (){var G__15189 = {"className": "help"};
var G__15190 = om.util.force_children((function (){var G__15192 = {"className": "help-title"};
var G__15193 = om.util.force_children("Help");
return React.DOM.h3(G__15192,G__15193);
})());
var G__15191 = om.util.force_children((function (){var G__15194 = {"className": "instructions"};
var G__15195 = om.util.force_children((function (){var G__15199 = null;
var G__15200 = om.util.force_children("Change the board name via the name field");
return React.DOM.li(G__15199,G__15200);
})());
var G__15196 = om.util.force_children((function (){var G__15201 = null;
var G__15202 = om.util.force_children("Change the board description via the description field");
return React.DOM.li(G__15201,G__15202);
})());
var G__15197 = om.util.force_children((function (){var G__15203 = null;
var G__15204 = om.util.force_children("Change the order of lanes via drag and drop");
return React.DOM.li(G__15203,G__15204);
})());
var G__15198 = om.util.force_children((function (){var G__15205 = null;
var G__15206 = om.util.force_children("Click anywhere to close the dialog");
return React.DOM.li(G__15205,G__15206);
})());
return React.DOM.ul(G__15194,G__15195,G__15196,G__15197,G__15198);
})());
return React.DOM.div(G__15189,G__15190,G__15191);
})());
return React.DOM.div(G__15149,G__15150,G__15151,G__15152,G__15153);
})());
return React.DOM.div(G__15145,G__15146,G__15147);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_15140;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_15139;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_15138;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_15137;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_15136;
}});})(x15127_15209))
;


kanban.components.board_dialog.BoardDialog.prototype.constructor = kanban.components.board_dialog.BoardDialog;

kanban.components.board_dialog.BoardDialog.prototype.om$isComponent = true;

var x15207_15210 = kanban.components.board_dialog.BoardDialog;
x15207_15210.om$next$Ident$ = true;

x15207_15210.om$next$Ident$ident$arity$2 = ((function (x15207_15210){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15207_15210))
;

x15207_15210.om$next$IQuery$ = true;

x15207_15210.om$next$IQuery$query$arity$1 = ((function (x15207_15210){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null)], null)], null);
});})(x15207_15210))
;


var x15208_15211 = kanban.components.board_dialog.BoardDialog.prototype;
x15208_15211.om$next$Ident$ = true;

x15208_15211.om$next$Ident$ident$arity$2 = ((function (x15208_15211){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_SLASH_by_DASH_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x15208_15211))
;

x15208_15211.om$next$IQuery$ = true;

x15208_15211.om$next$IQuery$query$arity$1 = ((function (x15208_15211){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name,cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$name], null)], null)], null);
});})(x15208_15211))
;


kanban.components.board_dialog.BoardDialog.cljs$lang$type = true;

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorStr = "kanban.components.board-dialog/BoardDialog";

kanban.components.board_dialog.BoardDialog.cljs$lang$ctorPrWriter = (function (this__12917__auto__,writer__12918__auto__,opt__12919__auto__){
return cljs.core._write(writer__12918__auto__,"kanban.components.board-dialog/BoardDialog");
});
kanban.components.board_dialog.board_dialog = om.next.factory.cljs$core$IFn$_invoke$arity$2(kanban.components.board_dialog.BoardDialog,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,(function (p1__15212_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board_DASH_dialog,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__15212_SHARP_)], null);
})], null));
