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
document.body.addEventListener("figwheel.js-reload",(function (p1__16524_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__16524_SHARP_.detail], null));
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
var len__6152__auto___16528 = arguments.length;
var i__6153__auto___16529 = (0);
while(true){
if((i__6153__auto___16529 < len__6152__auto___16528)){
args__6159__auto__.push((arguments[i__6153__auto___16529]));

var G__16530 = (i__6153__auto___16529 + (1));
i__6153__auto___16529 = G__16530;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16526){
var vec__16527 = p__16526;
var options = cljs.core.nth.call(null,vec__16527,(0),null);
var options_16531__$1 = (function (){var or__5094__auto__ = options;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"default-options","default-options",430743650),devcards.core.assert_options_map.call(null,options_16531__$1));

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = (0);

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$applyTo = (function (seq16525){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16525));
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5082__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__5082__auto__){
var map__16538 = c;
var map__16538__$1 = ((((!((map__16538 == null)))?((((map__16538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16538):map__16538);
var path = cljs.core.get.call(null,map__16538__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__16538__$1,new cljs.core.Keyword(null,"func","func",-238706040));
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
var base__13276__auto___16544 = {"componentDidMount": (function (){
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
devcards.core.CodeHighlight = React.createClass(base__13276__auto___16544);
}

var seq__16540_16545 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16541_16546 = null;
var count__16542_16547 = (0);
var i__16543_16548 = (0);
while(true){
if((i__16543_16548 < count__16542_16547)){
var property__13277__auto___16549 = cljs.core._nth.call(null,chunk__16541_16546,i__16543_16548);
if(cljs.core.truth_((base__13276__auto___16544[property__13277__auto___16549]))){
(devcards.core.CodeHighlight.prototype[property__13277__auto___16549] = (base__13276__auto___16544[property__13277__auto___16549]));
} else {
}

var G__16550 = seq__16540_16545;
var G__16551 = chunk__16541_16546;
var G__16552 = count__16542_16547;
var G__16553 = (i__16543_16548 + (1));
seq__16540_16545 = G__16550;
chunk__16541_16546 = G__16551;
count__16542_16547 = G__16552;
i__16543_16548 = G__16553;
continue;
} else {
var temp__4425__auto___16554 = cljs.core.seq.call(null,seq__16540_16545);
if(temp__4425__auto___16554){
var seq__16540_16555__$1 = temp__4425__auto___16554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16540_16555__$1)){
var c__5897__auto___16556 = cljs.core.chunk_first.call(null,seq__16540_16555__$1);
var G__16557 = cljs.core.chunk_rest.call(null,seq__16540_16555__$1);
var G__16558 = c__5897__auto___16556;
var G__16559 = cljs.core.count.call(null,c__5897__auto___16556);
var G__16560 = (0);
seq__16540_16545 = G__16557;
chunk__16541_16546 = G__16558;
count__16542_16547 = G__16559;
i__16543_16548 = G__16560;
continue;
} else {
var property__13277__auto___16561 = cljs.core.first.call(null,seq__16540_16555__$1);
if(cljs.core.truth_((base__13276__auto___16544[property__13277__auto___16561]))){
(devcards.core.CodeHighlight.prototype[property__13277__auto___16561] = (base__13276__auto___16544[property__13277__auto___16561]));
} else {
}

var G__16562 = cljs.core.next.call(null,seq__16540_16555__$1);
var G__16563 = null;
var G__16564 = (0);
var G__16565 = (0);
seq__16540_16545 = G__16562;
chunk__16541_16546 = G__16563;
count__16542_16547 = G__16564;
i__16543_16548 = G__16565;
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
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16566){
var map__16567 = p__16566;
var map__16567__$1 = ((((!((map__16567 == null)))?((((map__16567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16567):map__16567);
var content = cljs.core.get.call(null,map__16567__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__16569){
var map__16570 = p__16569;
var map__16570__$1 = ((((!((map__16570 == null)))?((((map__16570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16570):map__16570);
var block = map__16570__$1;
var content = cljs.core.get.call(null,map__16570__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16574 = arguments.length;
var i__6153__auto___16575 = (0);
while(true){
if((i__6153__auto___16575 < len__6152__auto___16574)){
args__6159__auto__.push((arguments[i__6153__auto___16575]));

var G__16576 = (i__6153__auto___16575 + (1));
i__6153__auto___16575 = G__16576;
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
var attrs16573 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16573))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs16573)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16573))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16573)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq16572){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16572));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"className": (function (){var G__16578 = devcards.system.devcards_rendered_card_class;
var G__16578__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__16578),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__16578);
var G__16578__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__16578__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__16578__$1);
return G__16578__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args16579 = [];
var len__6152__auto___16588 = arguments.length;
var i__6153__auto___16589 = (0);
while(true){
if((i__6153__auto___16589 < len__6152__auto___16588)){
args16579.push((arguments[i__6153__auto___16589]));

var G__16590 = (i__6153__auto___16589 + (1));
i__6153__auto___16589 = G__16590;
continue;
} else {
}
break;
}

var G__16581 = args16579.length;
switch (G__16581) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16579.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__16582 = card;
var map__16582__$1 = ((((!((map__16582 == null)))?((((map__16582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16582):map__16582);
var path = cljs.core.get.call(null,map__16582__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__16582__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16584 = (cljs.core.truth_(path)?React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__16582,map__16582__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__16582,map__16582__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs16585 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16585))?sablono.interpreter.attributes.call(null,attrs16585):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16585))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16585)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16584))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs16584)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16584)], null))));
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
var base__13276__auto___16599 = {"getInitialState": (function (){
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
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs16594 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16594))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16594)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16594)], null))));
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
devcards.core.DevcardBase = React.createClass(base__13276__auto___16599);
}

var seq__16595_16600 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16596_16601 = null;
var count__16597_16602 = (0);
var i__16598_16603 = (0);
while(true){
if((i__16598_16603 < count__16597_16602)){
var property__13277__auto___16604 = cljs.core._nth.call(null,chunk__16596_16601,i__16598_16603);
if(cljs.core.truth_((base__13276__auto___16599[property__13277__auto___16604]))){
(devcards.core.DevcardBase.prototype[property__13277__auto___16604] = (base__13276__auto___16599[property__13277__auto___16604]));
} else {
}

var G__16605 = seq__16595_16600;
var G__16606 = chunk__16596_16601;
var G__16607 = count__16597_16602;
var G__16608 = (i__16598_16603 + (1));
seq__16595_16600 = G__16605;
chunk__16596_16601 = G__16606;
count__16597_16602 = G__16607;
i__16598_16603 = G__16608;
continue;
} else {
var temp__4425__auto___16609 = cljs.core.seq.call(null,seq__16595_16600);
if(temp__4425__auto___16609){
var seq__16595_16610__$1 = temp__4425__auto___16609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16595_16610__$1)){
var c__5897__auto___16611 = cljs.core.chunk_first.call(null,seq__16595_16610__$1);
var G__16612 = cljs.core.chunk_rest.call(null,seq__16595_16610__$1);
var G__16613 = c__5897__auto___16611;
var G__16614 = cljs.core.count.call(null,c__5897__auto___16611);
var G__16615 = (0);
seq__16595_16600 = G__16612;
chunk__16596_16601 = G__16613;
count__16597_16602 = G__16614;
i__16598_16603 = G__16615;
continue;
} else {
var property__13277__auto___16616 = cljs.core.first.call(null,seq__16595_16610__$1);
if(cljs.core.truth_((base__13276__auto___16599[property__13277__auto___16616]))){
(devcards.core.DevcardBase.prototype[property__13277__auto___16616] = (base__13276__auto___16599[property__13277__auto___16616]));
} else {
}

var G__16617 = cljs.core.next.call(null,seq__16595_16610__$1);
var G__16618 = null;
var G__16619 = (0);
var G__16620 = (0);
seq__16595_16600 = G__16617;
chunk__16596_16601 = G__16618;
count__16597_16602 = G__16619;
i__16598_16603 = G__16620;
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
var base__13276__auto___16625 = {"getInitialState": (function (){
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
devcards.core.DomComponent = React.createClass(base__13276__auto___16625);
}

var seq__16621_16626 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16622_16627 = null;
var count__16623_16628 = (0);
var i__16624_16629 = (0);
while(true){
if((i__16624_16629 < count__16623_16628)){
var property__13277__auto___16630 = cljs.core._nth.call(null,chunk__16622_16627,i__16624_16629);
if(cljs.core.truth_((base__13276__auto___16625[property__13277__auto___16630]))){
(devcards.core.DomComponent.prototype[property__13277__auto___16630] = (base__13276__auto___16625[property__13277__auto___16630]));
} else {
}

var G__16631 = seq__16621_16626;
var G__16632 = chunk__16622_16627;
var G__16633 = count__16623_16628;
var G__16634 = (i__16624_16629 + (1));
seq__16621_16626 = G__16631;
chunk__16622_16627 = G__16632;
count__16623_16628 = G__16633;
i__16624_16629 = G__16634;
continue;
} else {
var temp__4425__auto___16635 = cljs.core.seq.call(null,seq__16621_16626);
if(temp__4425__auto___16635){
var seq__16621_16636__$1 = temp__4425__auto___16635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16621_16636__$1)){
var c__5897__auto___16637 = cljs.core.chunk_first.call(null,seq__16621_16636__$1);
var G__16638 = cljs.core.chunk_rest.call(null,seq__16621_16636__$1);
var G__16639 = c__5897__auto___16637;
var G__16640 = cljs.core.count.call(null,c__5897__auto___16637);
var G__16641 = (0);
seq__16621_16626 = G__16638;
chunk__16622_16627 = G__16639;
count__16623_16628 = G__16640;
i__16624_16629 = G__16641;
continue;
} else {
var property__13277__auto___16642 = cljs.core.first.call(null,seq__16621_16636__$1);
if(cljs.core.truth_((base__13276__auto___16625[property__13277__auto___16642]))){
(devcards.core.DomComponent.prototype[property__13277__auto___16642] = (base__13276__auto___16625[property__13277__auto___16642]));
} else {
}

var G__16643 = cljs.core.next.call(null,seq__16621_16636__$1);
var G__16644 = null;
var G__16645 = (0);
var G__16646 = (0);
seq__16621_16626 = G__16643;
chunk__16622_16627 = G__16644;
count__16623_16628 = G__16645;
i__16624_16629 = G__16646;
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
return (function (p1__16647_SHARP_){
return !(p1__16647_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__16656 = opts;
var map__16656__$1 = ((((!((map__16656 == null)))?((((map__16656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16656):map__16656);
var name = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__16656__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
})()], null),cljs.core.mapv.call(null,((function (map__16656,map__16656__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__16648_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__16648_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__16656,map__16656__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs16664 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16664))?sablono.interpreter.attributes.call(null,attrs16664):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16664))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16664)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16668 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16668))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs16668)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16668))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16668)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs16669 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16669))?sablono.interpreter.attributes.call(null,attrs16669):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16669))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16669)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs16670 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16670))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16670)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16670))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16670)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__16671_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16671_SHARP_);
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

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16673,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16675 = (((k16673 instanceof cljs.core.Keyword))?k16673.fqn:null);
switch (G__16675) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16673,else__5711__auto__);

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

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16672){
var self__ = this;
var G__16672__$1 = this;
return (new cljs.core.RecordIter((0),G__16672__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16672){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16676 = cljs.core.keyword_identical_QMARK_;
var expr__16677 = k__5716__auto__;
if(cljs.core.truth_(pred__16676.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16677))){
return (new devcards.core.IdentiyOptions(G__16672,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16672),null));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16672){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__16672,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__16674){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16674),null,cljs.core.dissoc.call(null,G__16674,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__16680){
var map__16683 = p__16680;
var map__16683__$1 = ((((!((map__16683 == null)))?((((map__16683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16683):map__16683);
var devcard_opts = map__16683__$1;
var options = cljs.core.get.call(null,map__16683__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__16683,map__16683__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__16683,map__16683__$1,devcard_opts,options))
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

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16686,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16688 = (((k16686 instanceof cljs.core.Keyword))?k16686.fqn:null);
switch (G__16688) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16686,else__5711__auto__);

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

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16685){
var self__ = this;
var G__16685__$1 = this;
return (new cljs.core.RecordIter((0),G__16685__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16685){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16689 = cljs.core.keyword_identical_QMARK_;
var expr__16690 = k__5716__auto__;
if(cljs.core.truth_(pred__16689.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16690))){
return (new devcards.core.AtomLikeOptions(G__16685,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16685),null));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16685){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__16685,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__16687){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16687),null,cljs.core.dissoc.call(null,G__16687,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16696,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16698 = (((k16696 instanceof cljs.core.Keyword))?k16696.fqn:null);
switch (G__16698) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16696,else__5711__auto__);

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

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16695){
var self__ = this;
var G__16695__$1 = this;
return (new cljs.core.RecordIter((0),G__16695__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16695){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16699 = cljs.core.keyword_identical_QMARK_;
var expr__16700 = k__5716__auto__;
if(cljs.core.truth_(pred__16699.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16700))){
return (new devcards.core.EdnLikeOptions(G__16695,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16695),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16695){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__16695,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__16697){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16697),null,cljs.core.dissoc.call(null,G__16697,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
var opts__$1 = cljs.core.update.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_)),new cljs.core.Keyword(null,"options","options",99638489),(function (p1__16713_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"default-options","default-options",430743650).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16713_SHARP_);
}));
if((function (){var G__16715 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__16715 == null))){
if((false) || (G__16715.devcards$core$IDevcard$)){
return true;
} else {
if((!G__16715.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16715);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16715);
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
var map__16718 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__16718__$1 = ((((!((map__16718 == null)))?((((map__16718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16718):map__16718);
var history = cljs.core.get.call(null,map__16718__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16718__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16722 = cljs.core.deref.call(null,history_atom);
var map__16722__$1 = ((((!((map__16722 == null)))?((((map__16722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16722):map__16722);
var history = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16722__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16726 = cljs.core.deref.call(null,history_atom);
var map__16726__$1 = ((((!((map__16726 == null)))?((((map__16726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16726):map__16726);
var history = cljs.core.get.call(null,map__16726__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16726__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16730 = cljs.core.deref.call(null,history_atom);
var map__16730__$1 = ((((!((map__16730 == null)))?((((map__16730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16730):map__16730);
var history = cljs.core.get.call(null,map__16730__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return (function (p__16732){
var map__16733 = p__16732;
var map__16733__$1 = ((((!((map__16733 == null)))?((((map__16733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16733):map__16733);
var ha = map__16733__$1;
var pointer = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__16733__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
var _STAR_current_env_STAR_16748 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_16748;
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
var attrs16749 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16749))?sablono.interpreter.attributes.call(null,attrs16749):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16749))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16749)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__16750,body){
var map__16754 = p__16750;
var map__16754__$1 = ((((!((map__16754 == null)))?((((map__16754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16754):map__16754);
var message = cljs.core.get.call(null,map__16754__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs16756 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16756))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs16756)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16756))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16756)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__16757){
var map__16760 = p__16757;
var map__16760__$1 = ((((!((map__16760 == null)))?((((map__16760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16760):map__16760);
var m = map__16760__$1;
var expected = cljs.core.get.call(null,map__16760__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs16764 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16764))?sablono.interpreter.attributes.call(null,attrs16764):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16764))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16764)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs16765 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16765))?sablono.interpreter.attributes.call(null,attrs16765):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16765))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16765)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__16766){
var map__16767 = p__16766;
var map__16767__$1 = ((((!((map__16767 == null)))?((((map__16767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16767):map__16767);
var testing_contexts = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs16769 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__16767,map__16767__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__16767,map__16767__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16769))?sablono.interpreter.attributes.call(null,attrs16769):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16769))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16769)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs16774 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__16775,t){
var map__16776 = p__16775;
var map__16776__$1 = ((((!((map__16776 == null)))?((((map__16776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16776):map__16776);
var last_context = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__16776__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16774))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs16774)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16774))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16774)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__16790){
var map__16791 = p__16790;
var map__16791__$1 = ((((!((map__16791 == null)))?((((map__16791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16791):map__16791);
var type = cljs.core.get.call(null,map__16791__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__16789 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__16789__$1 = ((((!((map__16789 == null)))?((((map__16789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16789):map__16789);
var fail = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (p__16794){
var map__16795 = p__16794;
var map__16795__$1 = ((((!((map__16795 == null)))?((((map__16795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16795):map__16795);
var type = cljs.core.get.call(null,map__16795__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1){
return (function (p__16797){
var map__16798 = p__16797;
var map__16798__$1 = ((((!((map__16798 == null)))?((((map__16798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16798):map__16798);
var type = cljs.core.get.call(null,map__16798__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16789,map__16789__$1,fail,pass,error,error__$1))
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
devcards.core.test_loop = (function (){var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_16886){
var state_val_16887 = (state_16886[(1)]);
if((state_val_16887 === (7))){
var state_16886__$1 = state_16886;
var statearr_16888_16937 = state_16886__$1;
(statearr_16888_16937[(2)] = false);

(statearr_16888_16937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (20))){
var inst_16827 = (state_16886[(7)]);
var inst_16846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16827);
var state_16886__$1 = state_16886;
var statearr_16889_16938 = state_16886__$1;
(statearr_16889_16938[(2)] = inst_16846);

(statearr_16889_16938[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (27))){
var inst_16851 = (state_16886[(8)]);
var inst_16861 = (state_16886[(9)]);
var inst_16865 = inst_16851.call(null,inst_16861);
var state_16886__$1 = state_16886;
var statearr_16890_16939 = state_16886__$1;
(statearr_16890_16939[(2)] = inst_16865);

(statearr_16890_16939[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (1))){
var state_16886__$1 = state_16886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16886__$1,(2),devcards.core.test_channel);
} else {
if((state_val_16887 === (24))){
var state_16886__$1 = state_16886;
var statearr_16891_16940 = state_16886__$1;
(statearr_16891_16940[(2)] = null);

(statearr_16891_16940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (4))){
var state_16886__$1 = state_16886;
var statearr_16892_16941 = state_16886__$1;
(statearr_16892_16941[(2)] = false);

(statearr_16892_16941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (15))){
var state_16886__$1 = state_16886;
var statearr_16893_16942 = state_16886__$1;
(statearr_16893_16942[(2)] = false);

(statearr_16893_16942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (21))){
var inst_16827 = (state_16886[(7)]);
var state_16886__$1 = state_16886;
var statearr_16894_16943 = state_16886__$1;
(statearr_16894_16943[(2)] = inst_16827);

(statearr_16894_16943[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (13))){
var inst_16884 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16886__$1,inst_16884);
} else {
if((state_val_16887 === (22))){
var inst_16850 = (state_16886[(10)]);
var inst_16849 = (state_16886[(2)]);
var inst_16850__$1 = cljs.core.get.call(null,inst_16849,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16851 = cljs.core.get.call(null,inst_16849,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_16886__$1 = (function (){var statearr_16895 = state_16886;
(statearr_16895[(8)] = inst_16851);

(statearr_16895[(10)] = inst_16850__$1);

return statearr_16895;
})();
if(cljs.core.truth_(inst_16850__$1)){
var statearr_16896_16944 = state_16886__$1;
(statearr_16896_16944[(1)] = (23));

} else {
var statearr_16897_16945 = state_16886__$1;
(statearr_16897_16945[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (29))){
var inst_16875 = (state_16886[(2)]);
var inst_16876 = cljs.test.clear_env_BANG_.call(null);
var state_16886__$1 = (function (){var statearr_16898 = state_16886;
(statearr_16898[(11)] = inst_16875);

(statearr_16898[(12)] = inst_16876);

return statearr_16898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16886__$1,(30),devcards.core.test_channel);
} else {
if((state_val_16887 === (6))){
var state_16886__$1 = state_16886;
var statearr_16899_16946 = state_16886__$1;
(statearr_16899_16946[(2)] = true);

(statearr_16899_16946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (28))){
var inst_16851 = (state_16886[(8)]);
var inst_16867 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_16868 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_16869 = cljs.core.PersistentHashMap.fromArrays(inst_16867,inst_16868);
var inst_16870 = devcards.core.collect_test.call(null,inst_16869);
var inst_16871 = cljs.test.get_current_env.call(null);
var inst_16872 = cljs.core.assoc.call(null,inst_16871,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_16873 = inst_16851.call(null,inst_16872);
var state_16886__$1 = (function (){var statearr_16900 = state_16886;
(statearr_16900[(13)] = inst_16870);

return statearr_16900;
})();
var statearr_16901_16947 = state_16886__$1;
(statearr_16901_16947[(2)] = inst_16873);

(statearr_16901_16947[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (25))){
var inst_16882 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16902_16948 = state_16886__$1;
(statearr_16902_16948[(2)] = inst_16882);

(statearr_16902_16948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (17))){
var state_16886__$1 = state_16886;
var statearr_16903_16949 = state_16886__$1;
(statearr_16903_16949[(2)] = true);

(statearr_16903_16949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (3))){
var inst_16804 = (state_16886[(14)]);
var inst_16809 = inst_16804.cljs$lang$protocol_mask$partition0$;
var inst_16810 = (inst_16809 & (64));
var inst_16811 = inst_16804.cljs$core$ISeq$;
var inst_16812 = (inst_16810) || (inst_16811);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16812)){
var statearr_16904_16950 = state_16886__$1;
(statearr_16904_16950[(1)] = (6));

} else {
var statearr_16905_16951 = state_16886__$1;
(statearr_16905_16951[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (12))){
var inst_16827 = (state_16886[(7)]);
var inst_16831 = (inst_16827 == null);
var inst_16832 = cljs.core.not.call(null,inst_16831);
var state_16886__$1 = state_16886;
if(inst_16832){
var statearr_16906_16952 = state_16886__$1;
(statearr_16906_16952[(1)] = (14));

} else {
var statearr_16907_16953 = state_16886__$1;
(statearr_16907_16953[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (2))){
var inst_16804 = (state_16886[(14)]);
var inst_16804__$1 = (state_16886[(2)]);
var inst_16806 = (inst_16804__$1 == null);
var inst_16807 = cljs.core.not.call(null,inst_16806);
var state_16886__$1 = (function (){var statearr_16908 = state_16886;
(statearr_16908[(14)] = inst_16804__$1);

return statearr_16908;
})();
if(inst_16807){
var statearr_16909_16954 = state_16886__$1;
(statearr_16909_16954[(1)] = (3));

} else {
var statearr_16910_16955 = state_16886__$1;
(statearr_16910_16955[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (23))){
var inst_16850 = (state_16886[(10)]);
var inst_16854 = (state_16886[(15)]);
var inst_16854__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_16855 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16856 = devcards.core.run_card_tests.call(null,inst_16850);
var inst_16857 = [inst_16856,inst_16854__$1];
var inst_16858 = (new cljs.core.PersistentVector(null,2,(5),inst_16855,inst_16857,null));
var state_16886__$1 = (function (){var statearr_16911 = state_16886;
(statearr_16911[(15)] = inst_16854__$1);

return statearr_16911;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16886__$1,(26),inst_16858);
} else {
if((state_val_16887 === (19))){
var inst_16841 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16912_16956 = state_16886__$1;
(statearr_16912_16956[(2)] = inst_16841);

(statearr_16912_16956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (11))){
var inst_16804 = (state_16886[(14)]);
var inst_16824 = (state_16886[(2)]);
var inst_16825 = cljs.core.get.call(null,inst_16824,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16826 = cljs.core.get.call(null,inst_16824,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_16827 = inst_16804;
var state_16886__$1 = (function (){var statearr_16913 = state_16886;
(statearr_16913[(16)] = inst_16825);

(statearr_16913[(17)] = inst_16826);

(statearr_16913[(7)] = inst_16827);

return statearr_16913;
})();
var statearr_16914_16957 = state_16886__$1;
(statearr_16914_16957[(2)] = null);

(statearr_16914_16957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (9))){
var inst_16804 = (state_16886[(14)]);
var inst_16821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16804);
var state_16886__$1 = state_16886;
var statearr_16915_16958 = state_16886__$1;
(statearr_16915_16958[(2)] = inst_16821);

(statearr_16915_16958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (5))){
var inst_16819 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16819)){
var statearr_16916_16959 = state_16886__$1;
(statearr_16916_16959[(1)] = (9));

} else {
var statearr_16917_16960 = state_16886__$1;
(statearr_16917_16960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (14))){
var inst_16827 = (state_16886[(7)]);
var inst_16834 = inst_16827.cljs$lang$protocol_mask$partition0$;
var inst_16835 = (inst_16834 & (64));
var inst_16836 = inst_16827.cljs$core$ISeq$;
var inst_16837 = (inst_16835) || (inst_16836);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16837)){
var statearr_16918_16961 = state_16886__$1;
(statearr_16918_16961[(1)] = (17));

} else {
var statearr_16919_16962 = state_16886__$1;
(statearr_16919_16962[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (26))){
var inst_16854 = (state_16886[(15)]);
var inst_16860 = (state_16886[(2)]);
var inst_16861 = cljs.core.nth.call(null,inst_16860,(0),null);
var inst_16862 = cljs.core.nth.call(null,inst_16860,(1),null);
var inst_16863 = cljs.core.not_EQ_.call(null,inst_16862,inst_16854);
var state_16886__$1 = (function (){var statearr_16920 = state_16886;
(statearr_16920[(9)] = inst_16861);

return statearr_16920;
})();
if(inst_16863){
var statearr_16921_16963 = state_16886__$1;
(statearr_16921_16963[(1)] = (27));

} else {
var statearr_16922_16964 = state_16886__$1;
(statearr_16922_16964[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (16))){
var inst_16844 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16844)){
var statearr_16923_16965 = state_16886__$1;
(statearr_16923_16965[(1)] = (20));

} else {
var statearr_16924_16966 = state_16886__$1;
(statearr_16924_16966[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (30))){
var inst_16878 = (state_16886[(2)]);
var inst_16827 = inst_16878;
var state_16886__$1 = (function (){var statearr_16925 = state_16886;
(statearr_16925[(7)] = inst_16827);

return statearr_16925;
})();
var statearr_16926_16967 = state_16886__$1;
(statearr_16926_16967[(2)] = null);

(statearr_16926_16967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (10))){
var inst_16804 = (state_16886[(14)]);
var state_16886__$1 = state_16886;
var statearr_16927_16968 = state_16886__$1;
(statearr_16927_16968[(2)] = inst_16804);

(statearr_16927_16968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (18))){
var state_16886__$1 = state_16886;
var statearr_16928_16969 = state_16886__$1;
(statearr_16928_16969[(2)] = false);

(statearr_16928_16969[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16887 === (8))){
var inst_16816 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16929_16970 = state_16886__$1;
(statearr_16929_16970[(2)] = inst_16816);

(statearr_16929_16970[(1)] = (5));


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
});})(c__10327__auto__))
;
return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var devcards$core$state_machine__10263__auto__ = null;
var devcards$core$state_machine__10263__auto____0 = (function (){
var statearr_16933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16933[(0)] = devcards$core$state_machine__10263__auto__);

(statearr_16933[(1)] = (1));

return statearr_16933;
});
var devcards$core$state_machine__10263__auto____1 = (function (state_16886){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_16886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e16934){if((e16934 instanceof Object)){
var ex__10266__auto__ = e16934;
var statearr_16935_16971 = state_16886;
(statearr_16935_16971[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16972 = state_16886;
state_16886 = G__16972;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
devcards$core$state_machine__10263__auto__ = function(state_16886){
switch(arguments.length){
case 0:
return devcards$core$state_machine__10263__auto____0.call(this);
case 1:
return devcards$core$state_machine__10263__auto____1.call(this,state_16886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__10263__auto____0;
devcards$core$state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__10263__auto____1;
return devcards$core$state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();
var state__10329__auto__ = (function (){var statearr_16936 = f__10328__auto__.call(null);
(statearr_16936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_16936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);

return c__10327__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__13276__auto___16977 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__13276__auto___16977);
}

var seq__16973_16978 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16974_16979 = null;
var count__16975_16980 = (0);
var i__16976_16981 = (0);
while(true){
if((i__16976_16981 < count__16975_16980)){
var property__13277__auto___16982 = cljs.core._nth.call(null,chunk__16974_16979,i__16976_16981);
if(cljs.core.truth_((base__13276__auto___16977[property__13277__auto___16982]))){
(devcards.core.TestDevcard.prototype[property__13277__auto___16982] = (base__13276__auto___16977[property__13277__auto___16982]));
} else {
}

var G__16983 = seq__16973_16978;
var G__16984 = chunk__16974_16979;
var G__16985 = count__16975_16980;
var G__16986 = (i__16976_16981 + (1));
seq__16973_16978 = G__16983;
chunk__16974_16979 = G__16984;
count__16975_16980 = G__16985;
i__16976_16981 = G__16986;
continue;
} else {
var temp__4425__auto___16987 = cljs.core.seq.call(null,seq__16973_16978);
if(temp__4425__auto___16987){
var seq__16973_16988__$1 = temp__4425__auto___16987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16973_16988__$1)){
var c__5897__auto___16989 = cljs.core.chunk_first.call(null,seq__16973_16988__$1);
var G__16990 = cljs.core.chunk_rest.call(null,seq__16973_16988__$1);
var G__16991 = c__5897__auto___16989;
var G__16992 = cljs.core.count.call(null,c__5897__auto___16989);
var G__16993 = (0);
seq__16973_16978 = G__16990;
chunk__16974_16979 = G__16991;
count__16975_16980 = G__16992;
i__16976_16981 = G__16993;
continue;
} else {
var property__13277__auto___16994 = cljs.core.first.call(null,seq__16973_16988__$1);
if(cljs.core.truth_((base__13276__auto___16977[property__13277__auto___16994]))){
(devcards.core.TestDevcard.prototype[property__13277__auto___16994] = (base__13276__auto___16977[property__13277__auto___16994]));
} else {
}

var G__16995 = cljs.core.next.call(null,seq__16973_16988__$1);
var G__16996 = null;
var G__16997 = (0);
var G__16998 = (0);
seq__16973_16978 = G__16995;
chunk__16974_16979 = G__16996;
count__16975_16980 = G__16997;
i__16976_16981 = G__16998;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17003 = arguments.length;
var i__6153__auto___17004 = (0);
while(true){
if((i__6153__auto___17004 < len__6152__auto___17003)){
args__6159__auto__.push((arguments[i__6153__auto___17004]));

var G__17005 = (i__6153__auto___17004 + (1));
i__6153__auto___17004 = G__17005;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core17000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core17000 = (function (test_thunks,meta17001){
this.test_thunks = test_thunks;
this.meta17001 = meta17001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core17000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17002,meta17001__$1){
var self__ = this;
var _17002__$1 = this;
return (new devcards.core.t_devcards$core17000(self__.test_thunks,meta17001__$1));
});

devcards.core.t_devcards$core17000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17002){
var self__ = this;
var _17002__$1 = this;
return self__.meta17001;
});

devcards.core.t_devcards$core17000.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core17000.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core17000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta17001","meta17001",-2075649397,null)], null);
});

devcards.core.t_devcards$core17000.cljs$lang$type = true;

devcards.core.t_devcards$core17000.cljs$lang$ctorStr = "devcards.core/t_devcards$core17000";

devcards.core.t_devcards$core17000.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"devcards.core/t_devcards$core17000");
});

devcards.core.__GT_t_devcards$core17000 = (function devcards$core$__GT_t_devcards$core17000(test_thunks__$1,meta17001){
return (new devcards.core.t_devcards$core17000(test_thunks__$1,meta17001));
});

}

return (new devcards.core.t_devcards$core17000(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq16999){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16999));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs17007 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs17007))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs17007)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17007))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17007)], null))));
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
return React.render((function (){var attrs17009 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs17009))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs17009)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17009)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__10327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10327__auto__){
return (function (){
var f__10328__auto__ = (function (){var switch__10262__auto__ = ((function (c__10327__auto__){
return (function (state_17039){
var state_val_17040 = (state_17039[(1)]);
if((state_val_17040 === (1))){
var inst_17030 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_17039__$1 = state_17039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17039__$1,(2),inst_17030);
} else {
if((state_val_17040 === (2))){
var inst_17032 = (state_17039[(2)]);
var inst_17033 = cljs.core.async.timeout.call(null,(100));
var state_17039__$1 = (function (){var statearr_17041 = state_17039;
(statearr_17041[(7)] = inst_17032);

return statearr_17041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17039__$1,(3),inst_17033);
} else {
if((state_val_17040 === (3))){
var inst_17035 = (state_17039[(2)]);
var inst_17036 = (function (){return ((function (inst_17035,state_val_17040,c__10327__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_17035,state_val_17040,c__10327__auto__))
})();
var inst_17037 = setTimeout(inst_17036,(0));
var state_17039__$1 = (function (){var statearr_17042 = state_17039;
(statearr_17042[(8)] = inst_17035);

return statearr_17042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17039__$1,inst_17037);
} else {
return null;
}
}
}
});})(c__10327__auto__))
;
return ((function (switch__10262__auto__,c__10327__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__10263__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__10263__auto____0 = (function (){
var statearr_17046 = [null,null,null,null,null,null,null,null,null];
(statearr_17046[(0)] = devcards$core$mount_namespace_$_state_machine__10263__auto__);

(statearr_17046[(1)] = (1));

return statearr_17046;
});
var devcards$core$mount_namespace_$_state_machine__10263__auto____1 = (function (state_17039){
while(true){
var ret_value__10264__auto__ = (function (){try{while(true){
var result__10265__auto__ = switch__10262__auto__.call(null,state_17039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10265__auto__;
}
break;
}
}catch (e17047){if((e17047 instanceof Object)){
var ex__10266__auto__ = e17047;
var statearr_17048_17050 = state_17039;
(statearr_17048_17050[(5)] = ex__10266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17051 = state_17039;
state_17039 = G__17051;
continue;
} else {
return ret_value__10264__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__10263__auto__ = function(state_17039){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__10263__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__10263__auto____1.call(this,state_17039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__10263__auto____0;
devcards$core$mount_namespace_$_state_machine__10263__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__10263__auto____1;
return devcards$core$mount_namespace_$_state_machine__10263__auto__;
})()
;})(switch__10262__auto__,c__10327__auto__))
})();
var state__10329__auto__ = (function (){var statearr_17049 = f__10328__auto__.call(null);
(statearr_17049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10327__auto__);

return statearr_17049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10329__auto__);
});})(c__10327__auto__))
);

return c__10327__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map