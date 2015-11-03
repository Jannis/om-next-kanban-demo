// Compiled by ClojureScript 1.7.145 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__5094__auto__ = (function (){var and__5082__auto__ = typeof Symbol !== 'undefined';
if(and__5082__auto__){
var and__5082__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__5082__auto____$1){
var and__5082__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__5082__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__5082__auto____$2;
}
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__16244_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__16244_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16248 = arguments.length;
var i__6153__auto___16249 = (0);
while(true){
if((i__6153__auto___16249 < len__6152__auto___16248)){
args__6159__auto__.push((arguments[i__6153__auto___16249]));

var G__16250 = (i__6153__auto___16249 + (1));
i__6153__auto___16249 = G__16250;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16246){
var vec__16247 = p__16246;
var options = cljs.core.nth.call(null,vec__16247,(0),null);
var options_16251__$1 = (function (){var or__5094__auto__ = options;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"default-options","default-options",430743650),devcards.core.assert_options_map.call(null,options_16251__$1));

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = (0);

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$applyTo = (function (seq16245){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16245));
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5082__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__5082__auto__){
var map__16258 = c;
var map__16258__$1 = ((((!((map__16258 == null)))?((((map__16258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16258):map__16258);
var path = cljs.core.get.call(null,map__16258__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__16258__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__5082__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__12893__auto___16264 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":"")},React.createElement("code",{"className": (function (){var or__5094__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__12893__auto___16264);
}

var seq__16260_16265 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16261_16266 = null;
var count__16262_16267 = (0);
var i__16263_16268 = (0);
while(true){
if((i__16263_16268 < count__16262_16267)){
var property__12894__auto___16269 = cljs.core._nth.call(null,chunk__16261_16266,i__16263_16268);
if(cljs.core.truth_((base__12893__auto___16264[property__12894__auto___16269]))){
(devcards.core.CodeHighlight.prototype[property__12894__auto___16269] = (base__12893__auto___16264[property__12894__auto___16269]));
} else {
}

var G__16270 = seq__16260_16265;
var G__16271 = chunk__16261_16266;
var G__16272 = count__16262_16267;
var G__16273 = (i__16263_16268 + (1));
seq__16260_16265 = G__16270;
chunk__16261_16266 = G__16271;
count__16262_16267 = G__16272;
i__16263_16268 = G__16273;
continue;
} else {
var temp__4425__auto___16274 = cljs.core.seq.call(null,seq__16260_16265);
if(temp__4425__auto___16274){
var seq__16260_16275__$1 = temp__4425__auto___16274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16260_16275__$1)){
var c__5897__auto___16276 = cljs.core.chunk_first.call(null,seq__16260_16275__$1);
var G__16277 = cljs.core.chunk_rest.call(null,seq__16260_16275__$1);
var G__16278 = c__5897__auto___16276;
var G__16279 = cljs.core.count.call(null,c__5897__auto___16276);
var G__16280 = (0);
seq__16260_16265 = G__16277;
chunk__16261_16266 = G__16278;
count__16262_16267 = G__16279;
i__16263_16268 = G__16280;
continue;
} else {
var property__12894__auto___16281 = cljs.core.first.call(null,seq__16260_16275__$1);
if(cljs.core.truth_((base__12893__auto___16264[property__12894__auto___16281]))){
(devcards.core.CodeHighlight.prototype[property__12894__auto___16281] = (base__12893__auto___16264[property__12894__auto___16281]));
} else {
}

var G__16282 = cljs.core.next.call(null,seq__16260_16275__$1);
var G__16283 = null;
var G__16284 = (0);
var G__16285 = (0);
seq__16260_16265 = G__16282;
chunk__16261_16266 = G__16283;
count__16262_16267 = G__16284;
i__16263_16268 = G__16285;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__6007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6011__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16286){
var map__16287 = p__16286;
var map__16287__$1 = ((((!((map__16287 == null)))?((((map__16287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16287):map__16287);
var content = cljs.core.get.call(null,map__16287__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__16289){
var map__16290 = p__16289;
var map__16290__$1 = ((((!((map__16290 == null)))?((((map__16290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16290):map__16290);
var block = map__16290__$1;
var content = cljs.core.get.call(null,map__16290__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16294 = arguments.length;
var i__6153__auto___16295 = (0);
while(true){
if((i__6153__auto___16295 < len__6152__auto___16294)){
args__6159__auto__.push((arguments[i__6153__auto___16295]));

var G__16296 = (i__6153__auto___16295 + (1));
i__6153__auto___16295 = G__16296;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs16293 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16293))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs16293)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16293)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq16292){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16292));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"className": (function (){var G__16298 = devcards.system.devcards_rendered_card_class;
var G__16298__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__16298),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__16298);
var G__16298__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__16298__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__16298__$1);
return G__16298__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args16299 = [];
var len__6152__auto___16308 = arguments.length;
var i__6153__auto___16309 = (0);
while(true){
if((i__6153__auto___16309 < len__6152__auto___16308)){
args16299.push((arguments[i__6153__auto___16309]));

var G__16310 = (i__6153__auto___16309 + (1));
i__6153__auto___16309 = G__16310;
continue;
} else {
}
break;
}

var G__16301 = args16299.length;
switch (G__16301) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16299.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__16302 = card;
var map__16302__$1 = ((((!((map__16302 == null)))?((((map__16302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16302):map__16302);
var path = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__16302__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16304 = (cljs.core.truth_(path)?React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__16302,map__16302__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__16302,map__16302__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs16305 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16305))?sablono.interpreter.attributes.call(null,attrs16305):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16305))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16305)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16304))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs16304)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16304))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16304)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$,devcard_opts);
} else {
var m__5750__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (devcards.core._devcard[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$,devcard_opts);
} else {
var m__5750__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__5094__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__12893__auto___16319 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null))};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__5094__auto__ = (function (){var and__5082__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__5082__auto__)){
return this$.state;
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__5082__auto__ = data_atom;
if(cljs.core.truth_(and__5082__auto__)){
return id;
} else {
return and__5082__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs16314 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16314))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16314)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16314))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16314)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__12893__auto___16319);
}

var seq__16315_16320 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16316_16321 = null;
var count__16317_16322 = (0);
var i__16318_16323 = (0);
while(true){
if((i__16318_16323 < count__16317_16322)){
var property__12894__auto___16324 = cljs.core._nth.call(null,chunk__16316_16321,i__16318_16323);
if(cljs.core.truth_((base__12893__auto___16319[property__12894__auto___16324]))){
(devcards.core.DevcardBase.prototype[property__12894__auto___16324] = (base__12893__auto___16319[property__12894__auto___16324]));
} else {
}

var G__16325 = seq__16315_16320;
var G__16326 = chunk__16316_16321;
var G__16327 = count__16317_16322;
var G__16328 = (i__16318_16323 + (1));
seq__16315_16320 = G__16325;
chunk__16316_16321 = G__16326;
count__16317_16322 = G__16327;
i__16318_16323 = G__16328;
continue;
} else {
var temp__4425__auto___16329 = cljs.core.seq.call(null,seq__16315_16320);
if(temp__4425__auto___16329){
var seq__16315_16330__$1 = temp__4425__auto___16329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16315_16330__$1)){
var c__5897__auto___16331 = cljs.core.chunk_first.call(null,seq__16315_16330__$1);
var G__16332 = cljs.core.chunk_rest.call(null,seq__16315_16330__$1);
var G__16333 = c__5897__auto___16331;
var G__16334 = cljs.core.count.call(null,c__5897__auto___16331);
var G__16335 = (0);
seq__16315_16320 = G__16332;
chunk__16316_16321 = G__16333;
count__16317_16322 = G__16334;
i__16318_16323 = G__16335;
continue;
} else {
var property__12894__auto___16336 = cljs.core.first.call(null,seq__16315_16330__$1);
if(cljs.core.truth_((base__12893__auto___16319[property__12894__auto___16336]))){
(devcards.core.DevcardBase.prototype[property__12894__auto___16336] = (base__12893__auto___16319[property__12894__auto___16336]));
} else {
}

var G__16337 = cljs.core.next.call(null,seq__16315_16330__$1);
var G__16338 = null;
var G__16339 = (0);
var G__16340 = (0);
seq__16315_16320 = G__16337;
chunk__16316_16321 = G__16338;
count__16317_16322 = G__16339;
i__16318_16323 = G__16340;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__12893__auto___16345 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__5082__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__12893__auto___16345);
}

var seq__16341_16346 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16342_16347 = null;
var count__16343_16348 = (0);
var i__16344_16349 = (0);
while(true){
if((i__16344_16349 < count__16343_16348)){
var property__12894__auto___16350 = cljs.core._nth.call(null,chunk__16342_16347,i__16344_16349);
if(cljs.core.truth_((base__12893__auto___16345[property__12894__auto___16350]))){
(devcards.core.DomComponent.prototype[property__12894__auto___16350] = (base__12893__auto___16345[property__12894__auto___16350]));
} else {
}

var G__16351 = seq__16341_16346;
var G__16352 = chunk__16342_16347;
var G__16353 = count__16343_16348;
var G__16354 = (i__16344_16349 + (1));
seq__16341_16346 = G__16351;
chunk__16342_16347 = G__16352;
count__16343_16348 = G__16353;
i__16344_16349 = G__16354;
continue;
} else {
var temp__4425__auto___16355 = cljs.core.seq.call(null,seq__16341_16346);
if(temp__4425__auto___16355){
var seq__16341_16356__$1 = temp__4425__auto___16355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16341_16356__$1)){
var c__5897__auto___16357 = cljs.core.chunk_first.call(null,seq__16341_16356__$1);
var G__16358 = cljs.core.chunk_rest.call(null,seq__16341_16356__$1);
var G__16359 = c__5897__auto___16357;
var G__16360 = cljs.core.count.call(null,c__5897__auto___16357);
var G__16361 = (0);
seq__16341_16346 = G__16358;
chunk__16342_16347 = G__16359;
count__16343_16348 = G__16360;
i__16344_16349 = G__16361;
continue;
} else {
var property__12894__auto___16362 = cljs.core.first.call(null,seq__16341_16356__$1);
if(cljs.core.truth_((base__12893__auto___16345[property__12894__auto___16362]))){
(devcards.core.DomComponent.prototype[property__12894__auto___16362] = (base__12893__auto___16345[property__12894__auto___16362]));
} else {
}

var G__16363 = cljs.core.next.call(null,seq__16341_16356__$1);
var G__16364 = null;
var G__16365 = (0);
var G__16366 = (0);
seq__16341_16346 = G__16363;
chunk__16342_16347 = G__16364;
count__16343_16348 = G__16365;
i__16344_16349 = G__16366;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__5094__auto__ = x === true;
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = x === false;
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
var or__5094__auto____$2 = (x == null);
if(or__5094__auto____$2){
return or__5094__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__5094__auto__ = typeof x === 'string';
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = (x == null);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__5094__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__16367_SHARP_){
return !(p1__16367_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__16376 = opts;
var map__16376__$1 = ((((!((map__16376 == null)))?((((map__16376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16376):map__16376);
var name = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__16376__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5094__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = (options == null);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__5094__auto__ = (initial_data == null);
if(or__5094__auto__){
return or__5094__auto__;
} else {
var or__5094__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__5094__auto____$1){
return or__5094__auto____$1;
} else {
var or__5094__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__5094__auto____$2){
return or__5094__auto____$2;
} else {
var or__5094__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__5094__auto____$3){
return or__5094__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__16376,map__16376__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__16368_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__16368_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__16376,map__16376__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs16384 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16384))?sablono.interpreter.attributes.call(null,attrs16384):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16384))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16384)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16388 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16388))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs16388)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16388))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16388)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs16389 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16389))?sablono.interpreter.attributes.call(null,attrs16389):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16389))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16389)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs16390 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16390))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16390)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16390)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__16391_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16391_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.call(null,this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16393,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16395 = (((k16393 instanceof cljs.core.Keyword))?k16393.fqn:null);
switch (G__16395) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16393,else__5711__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5724__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16392){
var self__ = this;
var G__16392__$1 = this;
return (new cljs.core.RecordIter((0),G__16392__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap.call(null,this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map.call(null,this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5718__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16392){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16396 = cljs.core.keyword_identical_QMARK_;
var expr__16397 = k__5716__auto__;
if(cljs.core.truth_(pred__16396.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16397))){
return (new devcards.core.IdentiyOptions(G__16392,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16392),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16392){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__16392,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5714__auto__)){
return cljs.core._assoc.call(null,this__5713__auto____$1,cljs.core._nth.call(null,entry__5714__auto__,(0)),cljs.core._nth.call(null,entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write.call(null,writer__5743__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__16394){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16394),null,cljs.core.dissoc.call(null,G__16394,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__16400){
var map__16403 = p__16400;
var map__16403__$1 = ((((!((map__16403 == null)))?((((map__16403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16403):map__16403);
var devcard_opts = map__16403__$1;
var options = cljs.core.get.call(null,map__16403__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__16403,map__16403__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__16403,map__16403__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.call(null,this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16406,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16408 = (((k16406 instanceof cljs.core.Keyword))?k16406.fqn:null);
switch (G__16408) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16406,else__5711__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5724__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16405){
var self__ = this;
var G__16405__$1 = this;
return (new cljs.core.RecordIter((0),G__16405__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap.call(null,this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map.call(null,this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5718__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16405){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16409 = cljs.core.keyword_identical_QMARK_;
var expr__16410 = k__5716__auto__;
if(cljs.core.truth_(pred__16409.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16410))){
return (new devcards.core.AtomLikeOptions(G__16405,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16405),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16405){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__16405,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5714__auto__)){
return cljs.core._assoc.call(null,this__5713__auto____$1,cljs.core._nth.call(null,entry__5714__auto__,(0)),cljs.core._nth.call(null,entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write.call(null,writer__5743__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__16407){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16407),null,cljs.core.dissoc.call(null,G__16407,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.call(null,this__5708__auto____$1,k__5709__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16416,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16418 = (((k16416 instanceof cljs.core.Keyword))?k16416.fqn:null);
switch (G__16418) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16416,else__5711__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5723__auto__,pr_pair__5725__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5724__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16415){
var self__ = this;
var G__16415__$1 = this;
return (new cljs.core.RecordIter((0),G__16415__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap.call(null,this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map.call(null,this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5718__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5718__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16415){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16419 = cljs.core.keyword_identical_QMARK_;
var expr__16420 = k__5716__auto__;
if(cljs.core.truth_(pred__16419.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16420))){
return (new devcards.core.EdnLikeOptions(G__16415,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16415),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16415){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__16415,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5714__auto__)){
return cljs.core._assoc.call(null,this__5713__auto____$1,cljs.core._nth.call(null,entry__5714__auto__,(0)),cljs.core._nth.call(null,entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write.call(null,writer__5743__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__16417){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16417),null,cljs.core.dissoc.call(null,G__16417,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__5082__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__5082__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__5082__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.update.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_)),new cljs.core.Keyword(null,"options","options",99638489),(function (p1__16433_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"default-options","default-options",430743650).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16433_SHARP_);
}));
if((function (){var G__16435 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__16435 == null))){
if((false) || (G__16435.devcards$core$IDevcard$)){
return true;
} else {
if((!G__16435.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16435);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16435);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__16438 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__16438__$1 = ((((!((map__16438 == null)))?((((map__16438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16438):map__16438);
var history = cljs.core.get.call(null,map__16438__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16438__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__16442 = cljs.core.deref.call(null,history_atom);
var map__16442__$1 = ((((!((map__16442 == null)))?((((map__16442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16442):map__16442);
var history = cljs.core.get.call(null,map__16442__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16442__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__16446 = cljs.core.deref.call(null,history_atom);
var map__16446__$1 = ((((!((map__16446 == null)))?((((map__16446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16446):map__16446);
var history = cljs.core.get.call(null,map__16446__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16446__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__16450 = cljs.core.deref.call(null,history_atom);
var map__16450__$1 = ((((!((map__16450 == null)))?((((map__16450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16450):map__16450);
var history = cljs.core.get.call(null,map__16450__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__5082__auto__ = data_atom;
if(cljs.core.truth_(and__5082__auto__)){
return id;
} else {
return and__5082__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__16452){
var map__16453 = p__16452;
var map__16453__$1 = ((((!((map__16453 == null)))?((((map__16453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16453):map__16453);
var ha = map__16453__$1;
var pointer = cljs.core.get.call(null,map__16453__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__16453__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__16453__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__5094__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__5094__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_16468 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_16468;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__6007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6011__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs16469 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16469))?sablono.interpreter.attributes.call(null,attrs16469):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16469))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16469)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__16470,body){
var map__16474 = p__16470;
var map__16474__$1 = ((((!((map__16474 == null)))?((((map__16474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16474):map__16474);
var message = cljs.core.get.call(null,map__16474__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs16476 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16476))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs16476)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16476)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__16477){
var map__16480 = p__16477;
var map__16480__$1 = ((((!((map__16480 == null)))?((((map__16480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16480):map__16480);
var m = map__16480__$1;
var expected = cljs.core.get.call(null,map__16480__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs16484 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16484))?sablono.interpreter.attributes.call(null,attrs16484):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16484)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs16485 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16485))?sablono.interpreter.attributes.call(null,attrs16485):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16485))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16485)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__16486){
var map__16487 = p__16486;
var map__16487__$1 = ((((!((map__16487 == null)))?((((map__16487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16487):map__16487);
var testing_contexts = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs16489 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__16487,map__16487__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__16487,map__16487__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16489))?sablono.interpreter.attributes.call(null,attrs16489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16489))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16489)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs16494 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__16495,t){
var map__16496 = p__16495;
var map__16496__$1 = ((((!((map__16496 == null)))?((((map__16496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16496):map__16496);
var last_context = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__16496__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16494))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs16494)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16494))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16494)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__16510){
var map__16511 = p__16510;
var map__16511__$1 = ((((!((map__16511 == null)))?((((map__16511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16511):map__16511);
var type = cljs.core.get.call(null,map__16511__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__16509 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__16509__$1 = ((((!((map__16509 == null)))?((((map__16509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16509):map__16509);
var fail = cljs.core.get.call(null,map__16509__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__16509__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__16509__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (p__16514){
var map__16515 = p__16514;
var map__16515__$1 = ((((!((map__16515 == null)))?((((map__16515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16515):map__16515);
var type = cljs.core.get.call(null,map__16515__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1){
return (function (p__16517){
var map__16518 = p__16517;
var map__16518__$1 = ((((!((map__16518 == null)))?((((map__16518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16518):map__16518);
var type = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16509,map__16509__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__5094__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__){
return (function (state_16606){
var state_val_16607 = (state_16606[(1)]);
if((state_val_16607 === (7))){
var state_16606__$1 = state_16606;
var statearr_16608_16657 = state_16606__$1;
(statearr_16608_16657[(2)] = false);

(statearr_16608_16657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (20))){
var inst_16547 = (state_16606[(7)]);
var inst_16566 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16547);
var state_16606__$1 = state_16606;
var statearr_16609_16658 = state_16606__$1;
(statearr_16609_16658[(2)] = inst_16566);

(statearr_16609_16658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (27))){
var inst_16581 = (state_16606[(8)]);
var inst_16571 = (state_16606[(9)]);
var inst_16585 = inst_16571.call(null,inst_16581);
var state_16606__$1 = state_16606;
var statearr_16610_16659 = state_16606__$1;
(statearr_16610_16659[(2)] = inst_16585);

(statearr_16610_16659[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (1))){
var state_16606__$1 = state_16606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16606__$1,(2),devcards.core.test_channel);
} else {
if((state_val_16607 === (24))){
var state_16606__$1 = state_16606;
var statearr_16611_16660 = state_16606__$1;
(statearr_16611_16660[(2)] = null);

(statearr_16611_16660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (4))){
var state_16606__$1 = state_16606;
var statearr_16612_16661 = state_16606__$1;
(statearr_16612_16661[(2)] = false);

(statearr_16612_16661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (15))){
var state_16606__$1 = state_16606;
var statearr_16613_16662 = state_16606__$1;
(statearr_16613_16662[(2)] = false);

(statearr_16613_16662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (21))){
var inst_16547 = (state_16606[(7)]);
var state_16606__$1 = state_16606;
var statearr_16614_16663 = state_16606__$1;
(statearr_16614_16663[(2)] = inst_16547);

(statearr_16614_16663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (13))){
var inst_16604 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16606__$1,inst_16604);
} else {
if((state_val_16607 === (22))){
var inst_16570 = (state_16606[(10)]);
var inst_16569 = (state_16606[(2)]);
var inst_16570__$1 = cljs.core.get.call(null,inst_16569,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16571 = cljs.core.get.call(null,inst_16569,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_16606__$1 = (function (){var statearr_16615 = state_16606;
(statearr_16615[(10)] = inst_16570__$1);

(statearr_16615[(9)] = inst_16571);

return statearr_16615;
})();
if(cljs.core.truth_(inst_16570__$1)){
var statearr_16616_16664 = state_16606__$1;
(statearr_16616_16664[(1)] = (23));

} else {
var statearr_16617_16665 = state_16606__$1;
(statearr_16617_16665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (29))){
var inst_16595 = (state_16606[(2)]);
var inst_16596 = cljs.test.clear_env_BANG_.call(null);
var state_16606__$1 = (function (){var statearr_16618 = state_16606;
(statearr_16618[(11)] = inst_16595);

(statearr_16618[(12)] = inst_16596);

return statearr_16618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16606__$1,(30),devcards.core.test_channel);
} else {
if((state_val_16607 === (6))){
var state_16606__$1 = state_16606;
var statearr_16619_16666 = state_16606__$1;
(statearr_16619_16666[(2)] = true);

(statearr_16619_16666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (28))){
var inst_16571 = (state_16606[(9)]);
var inst_16587 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_16588 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_16589 = cljs.core.PersistentHashMap.fromArrays(inst_16587,inst_16588);
var inst_16590 = devcards.core.collect_test.call(null,inst_16589);
var inst_16591 = cljs.test.get_current_env.call(null);
var inst_16592 = cljs.core.assoc.call(null,inst_16591,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_16593 = inst_16571.call(null,inst_16592);
var state_16606__$1 = (function (){var statearr_16620 = state_16606;
(statearr_16620[(13)] = inst_16590);

return statearr_16620;
})();
var statearr_16621_16667 = state_16606__$1;
(statearr_16621_16667[(2)] = inst_16593);

(statearr_16621_16667[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (25))){
var inst_16602 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
var statearr_16622_16668 = state_16606__$1;
(statearr_16622_16668[(2)] = inst_16602);

(statearr_16622_16668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (17))){
var state_16606__$1 = state_16606;
var statearr_16623_16669 = state_16606__$1;
(statearr_16623_16669[(2)] = true);

(statearr_16623_16669[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (3))){
var inst_16524 = (state_16606[(14)]);
var inst_16529 = inst_16524.cljs$lang$protocol_mask$partition0$;
var inst_16530 = (inst_16529 & (64));
var inst_16531 = inst_16524.cljs$core$ISeq$;
var inst_16532 = (inst_16530) || (inst_16531);
var state_16606__$1 = state_16606;
if(cljs.core.truth_(inst_16532)){
var statearr_16624_16670 = state_16606__$1;
(statearr_16624_16670[(1)] = (6));

} else {
var statearr_16625_16671 = state_16606__$1;
(statearr_16625_16671[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (12))){
var inst_16547 = (state_16606[(7)]);
var inst_16551 = (inst_16547 == null);
var inst_16552 = cljs.core.not.call(null,inst_16551);
var state_16606__$1 = state_16606;
if(inst_16552){
var statearr_16626_16672 = state_16606__$1;
(statearr_16626_16672[(1)] = (14));

} else {
var statearr_16627_16673 = state_16606__$1;
(statearr_16627_16673[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (2))){
var inst_16524 = (state_16606[(14)]);
var inst_16524__$1 = (state_16606[(2)]);
var inst_16526 = (inst_16524__$1 == null);
var inst_16527 = cljs.core.not.call(null,inst_16526);
var state_16606__$1 = (function (){var statearr_16628 = state_16606;
(statearr_16628[(14)] = inst_16524__$1);

return statearr_16628;
})();
if(inst_16527){
var statearr_16629_16674 = state_16606__$1;
(statearr_16629_16674[(1)] = (3));

} else {
var statearr_16630_16675 = state_16606__$1;
(statearr_16630_16675[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (23))){
var inst_16570 = (state_16606[(10)]);
var inst_16574 = (state_16606[(15)]);
var inst_16574__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_16575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16576 = devcards.core.run_card_tests.call(null,inst_16570);
var inst_16577 = [inst_16576,inst_16574__$1];
var inst_16578 = (new cljs.core.PersistentVector(null,2,(5),inst_16575,inst_16577,null));
var state_16606__$1 = (function (){var statearr_16631 = state_16606;
(statearr_16631[(15)] = inst_16574__$1);

return statearr_16631;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16606__$1,(26),inst_16578);
} else {
if((state_val_16607 === (19))){
var inst_16561 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
var statearr_16632_16676 = state_16606__$1;
(statearr_16632_16676[(2)] = inst_16561);

(statearr_16632_16676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (11))){
var inst_16524 = (state_16606[(14)]);
var inst_16544 = (state_16606[(2)]);
var inst_16545 = cljs.core.get.call(null,inst_16544,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16546 = cljs.core.get.call(null,inst_16544,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_16547 = inst_16524;
var state_16606__$1 = (function (){var statearr_16633 = state_16606;
(statearr_16633[(7)] = inst_16547);

(statearr_16633[(16)] = inst_16545);

(statearr_16633[(17)] = inst_16546);

return statearr_16633;
})();
var statearr_16634_16677 = state_16606__$1;
(statearr_16634_16677[(2)] = null);

(statearr_16634_16677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (9))){
var inst_16524 = (state_16606[(14)]);
var inst_16541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16524);
var state_16606__$1 = state_16606;
var statearr_16635_16678 = state_16606__$1;
(statearr_16635_16678[(2)] = inst_16541);

(statearr_16635_16678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (5))){
var inst_16539 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
if(cljs.core.truth_(inst_16539)){
var statearr_16636_16679 = state_16606__$1;
(statearr_16636_16679[(1)] = (9));

} else {
var statearr_16637_16680 = state_16606__$1;
(statearr_16637_16680[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (14))){
var inst_16547 = (state_16606[(7)]);
var inst_16554 = inst_16547.cljs$lang$protocol_mask$partition0$;
var inst_16555 = (inst_16554 & (64));
var inst_16556 = inst_16547.cljs$core$ISeq$;
var inst_16557 = (inst_16555) || (inst_16556);
var state_16606__$1 = state_16606;
if(cljs.core.truth_(inst_16557)){
var statearr_16638_16681 = state_16606__$1;
(statearr_16638_16681[(1)] = (17));

} else {
var statearr_16639_16682 = state_16606__$1;
(statearr_16639_16682[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (26))){
var inst_16574 = (state_16606[(15)]);
var inst_16580 = (state_16606[(2)]);
var inst_16581 = cljs.core.nth.call(null,inst_16580,(0),null);
var inst_16582 = cljs.core.nth.call(null,inst_16580,(1),null);
var inst_16583 = cljs.core.not_EQ_.call(null,inst_16582,inst_16574);
var state_16606__$1 = (function (){var statearr_16640 = state_16606;
(statearr_16640[(8)] = inst_16581);

return statearr_16640;
})();
if(inst_16583){
var statearr_16641_16683 = state_16606__$1;
(statearr_16641_16683[(1)] = (27));

} else {
var statearr_16642_16684 = state_16606__$1;
(statearr_16642_16684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (16))){
var inst_16564 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
if(cljs.core.truth_(inst_16564)){
var statearr_16643_16685 = state_16606__$1;
(statearr_16643_16685[(1)] = (20));

} else {
var statearr_16644_16686 = state_16606__$1;
(statearr_16644_16686[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (30))){
var inst_16598 = (state_16606[(2)]);
var inst_16547 = inst_16598;
var state_16606__$1 = (function (){var statearr_16645 = state_16606;
(statearr_16645[(7)] = inst_16547);

return statearr_16645;
})();
var statearr_16646_16687 = state_16606__$1;
(statearr_16646_16687[(2)] = null);

(statearr_16646_16687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (10))){
var inst_16524 = (state_16606[(14)]);
var state_16606__$1 = state_16606;
var statearr_16647_16688 = state_16606__$1;
(statearr_16647_16688[(2)] = inst_16524);

(statearr_16647_16688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (18))){
var state_16606__$1 = state_16606;
var statearr_16648_16689 = state_16606__$1;
(statearr_16648_16689[(2)] = false);

(statearr_16648_16689[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (8))){
var inst_16536 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
var statearr_16649_16690 = state_16606__$1;
(statearr_16649_16690[(2)] = inst_16536);

(statearr_16649_16690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9944__auto__))
;
return ((function (switch__9879__auto__,c__9944__auto__){
return (function() {
var devcards$core$state_machine__9880__auto__ = null;
var devcards$core$state_machine__9880__auto____0 = (function (){
var statearr_16653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16653[(0)] = devcards$core$state_machine__9880__auto__);

(statearr_16653[(1)] = (1));

return statearr_16653;
});
var devcards$core$state_machine__9880__auto____1 = (function (state_16606){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_16606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e16654){if((e16654 instanceof Object)){
var ex__9883__auto__ = e16654;
var statearr_16655_16691 = state_16606;
(statearr_16655_16691[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16692 = state_16606;
state_16606 = G__16692;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
devcards$core$state_machine__9880__auto__ = function(state_16606){
switch(arguments.length){
case 0:
return devcards$core$state_machine__9880__auto____0.call(this);
case 1:
return devcards$core$state_machine__9880__auto____1.call(this,state_16606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__9880__auto____0;
devcards$core$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__9880__auto____1;
return devcards$core$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_16656 = f__9945__auto__.call(null);
(statearr_16656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_16656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__))
);

return c__9944__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__12893__auto___16697 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__12893__auto___16697);
}

var seq__16693_16698 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16694_16699 = null;
var count__16695_16700 = (0);
var i__16696_16701 = (0);
while(true){
if((i__16696_16701 < count__16695_16700)){
var property__12894__auto___16702 = cljs.core._nth.call(null,chunk__16694_16699,i__16696_16701);
if(cljs.core.truth_((base__12893__auto___16697[property__12894__auto___16702]))){
(devcards.core.TestDevcard.prototype[property__12894__auto___16702] = (base__12893__auto___16697[property__12894__auto___16702]));
} else {
}

var G__16703 = seq__16693_16698;
var G__16704 = chunk__16694_16699;
var G__16705 = count__16695_16700;
var G__16706 = (i__16696_16701 + (1));
seq__16693_16698 = G__16703;
chunk__16694_16699 = G__16704;
count__16695_16700 = G__16705;
i__16696_16701 = G__16706;
continue;
} else {
var temp__4425__auto___16707 = cljs.core.seq.call(null,seq__16693_16698);
if(temp__4425__auto___16707){
var seq__16693_16708__$1 = temp__4425__auto___16707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16693_16708__$1)){
var c__5897__auto___16709 = cljs.core.chunk_first.call(null,seq__16693_16708__$1);
var G__16710 = cljs.core.chunk_rest.call(null,seq__16693_16708__$1);
var G__16711 = c__5897__auto___16709;
var G__16712 = cljs.core.count.call(null,c__5897__auto___16709);
var G__16713 = (0);
seq__16693_16698 = G__16710;
chunk__16694_16699 = G__16711;
count__16695_16700 = G__16712;
i__16696_16701 = G__16713;
continue;
} else {
var property__12894__auto___16714 = cljs.core.first.call(null,seq__16693_16708__$1);
if(cljs.core.truth_((base__12893__auto___16697[property__12894__auto___16714]))){
(devcards.core.TestDevcard.prototype[property__12894__auto___16714] = (base__12893__auto___16697[property__12894__auto___16714]));
} else {
}

var G__16715 = cljs.core.next.call(null,seq__16693_16708__$1);
var G__16716 = null;
var G__16717 = (0);
var G__16718 = (0);
seq__16693_16698 = G__16715;
chunk__16694_16699 = G__16716;
count__16695_16700 = G__16717;
i__16696_16701 = G__16718;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16723 = arguments.length;
var i__6153__auto___16724 = (0);
while(true){
if((i__6153__auto___16724 < len__6152__auto___16723)){
args__6159__auto__.push((arguments[i__6153__auto___16724]));

var G__16725 = (i__6153__auto___16724 + (1));
i__6153__auto___16724 = G__16725;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core16720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core16720 = (function (test_thunks,meta16721){
this.test_thunks = test_thunks;
this.meta16721 = meta16721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core16720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16722,meta16721__$1){
var self__ = this;
var _16722__$1 = this;
return (new devcards.core.t_devcards$core16720(self__.test_thunks,meta16721__$1));
});

devcards.core.t_devcards$core16720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16722){
var self__ = this;
var _16722__$1 = this;
return self__.meta16721;
});

devcards.core.t_devcards$core16720.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core16720.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core16720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta16721","meta16721",-1831136573,null)], null);
});

devcards.core.t_devcards$core16720.cljs$lang$type = true;

devcards.core.t_devcards$core16720.cljs$lang$ctorStr = "devcards.core/t_devcards$core16720";

devcards.core.t_devcards$core16720.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"devcards.core/t_devcards$core16720");
});

devcards.core.__GT_t_devcards$core16720 = (function devcards$core$__GT_t_devcards$core16720(test_thunks__$1,meta16721){
return (new devcards.core.t_devcards$core16720(test_thunks__$1,meta16721));
});

}

return (new devcards.core.t_devcards$core16720(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq16719){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16719));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards__$1 = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs16727 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16727))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs16727)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16727)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs16729 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16729))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs16729)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16729)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__9944__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9944__auto__){
return (function (){
var f__9945__auto__ = (function (){var switch__9879__auto__ = ((function (c__9944__auto__){
return (function (state_16759){
var state_val_16760 = (state_16759[(1)]);
if((state_val_16760 === (1))){
var inst_16750 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16759__$1,(2),inst_16750);
} else {
if((state_val_16760 === (2))){
var inst_16752 = (state_16759[(2)]);
var inst_16753 = cljs.core.async.timeout.call(null,(100));
var state_16759__$1 = (function (){var statearr_16761 = state_16759;
(statearr_16761[(7)] = inst_16752);

return statearr_16761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16759__$1,(3),inst_16753);
} else {
if((state_val_16760 === (3))){
var inst_16755 = (state_16759[(2)]);
var inst_16756 = (function (){return ((function (inst_16755,state_val_16760,c__9944__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_16755,state_val_16760,c__9944__auto__))
})();
var inst_16757 = setTimeout(inst_16756,(0));
var state_16759__$1 = (function (){var statearr_16762 = state_16759;
(statearr_16762[(8)] = inst_16755);

return statearr_16762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16759__$1,inst_16757);
} else {
return null;
}
}
}
});})(c__9944__auto__))
;
return ((function (switch__9879__auto__,c__9944__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__9880__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__9880__auto____0 = (function (){
var statearr_16766 = [null,null,null,null,null,null,null,null,null];
(statearr_16766[(0)] = devcards$core$mount_namespace_$_state_machine__9880__auto__);

(statearr_16766[(1)] = (1));

return statearr_16766;
});
var devcards$core$mount_namespace_$_state_machine__9880__auto____1 = (function (state_16759){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_16759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e16767){if((e16767 instanceof Object)){
var ex__9883__auto__ = e16767;
var statearr_16768_16770 = state_16759;
(statearr_16768_16770[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16771 = state_16759;
state_16759 = G__16771;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__9880__auto__ = function(state_16759){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__9880__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__9880__auto____1.call(this,state_16759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__9880__auto____0;
devcards$core$mount_namespace_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__9880__auto____1;
return devcards$core$mount_namespace_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_16769 = f__9945__auto__.call(null);
(statearr_16769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9946__auto__);
});})(c__9944__auto__))
);

return c__9944__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map