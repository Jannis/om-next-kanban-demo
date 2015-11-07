// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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
cljs.core.enable_console_print_BANG_();
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__5168__auto__ = (function (){var and__5156__auto__ = typeof Symbol !== 'undefined';
if(and__5156__auto__){
var and__5156__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__5156__auto____$1){
var and__5156__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__5156__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__5156__auto____$2;
}
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__20561_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__20561_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5156__auto__ = cljs.core.map_QMARK_(c);
if(and__5156__auto__){
var map__20568 = c;
var map__20568__$1 = ((((!((map__20568 == null)))?((((map__20568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20568):map__20568);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20568__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20568__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__5156__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$card_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_card,c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str(cljs.core.hash(raw_html_str))].join(''),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
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
var base__19696__auto___20580 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__20570 = "pre";
var G__20571 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__20572 = (function (){var G__20573 = "code";
var G__20574 = {"className": (function (){var or__5168__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__20575 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__20573,G__20574,G__20575);
})();
return React.createElement(G__20570,G__20571,G__20572);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__19696__auto___20580);
}

var seq__20576_20581 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20577_20582 = null;
var count__20578_20583 = (0);
var i__20579_20584 = (0);
while(true){
if((i__20579_20584 < count__20578_20583)){
var property__19697__auto___20585 = chunk__20577_20582.cljs$core$IIndexed$_nth$arity$2(null,i__20579_20584);
if(cljs.core.truth_((base__19696__auto___20580[property__19697__auto___20585]))){
(devcards.core.CodeHighlight.prototype[property__19697__auto___20585] = (base__19696__auto___20580[property__19697__auto___20585]));
} else {
}

var G__20586 = seq__20576_20581;
var G__20587 = chunk__20577_20582;
var G__20588 = count__20578_20583;
var G__20589 = (i__20579_20584 + (1));
seq__20576_20581 = G__20586;
chunk__20577_20582 = G__20587;
count__20578_20583 = G__20588;
i__20579_20584 = G__20589;
continue;
} else {
var temp__4425__auto___20590 = cljs.core.seq(seq__20576_20581);
if(temp__4425__auto___20590){
var seq__20576_20591__$1 = temp__4425__auto___20590;
if(cljs.core.chunked_seq_QMARK_(seq__20576_20591__$1)){
var c__5971__auto___20592 = cljs.core.chunk_first(seq__20576_20591__$1);
var G__20593 = cljs.core.chunk_rest(seq__20576_20591__$1);
var G__20594 = c__5971__auto___20592;
var G__20595 = cljs.core.count(c__5971__auto___20592);
var G__20596 = (0);
seq__20576_20581 = G__20593;
chunk__20577_20582 = G__20594;
count__20578_20583 = G__20595;
i__20579_20584 = G__20596;
continue;
} else {
var property__19697__auto___20597 = cljs.core.first(seq__20576_20591__$1);
if(cljs.core.truth_((base__19696__auto___20580[property__19697__auto___20597]))){
(devcards.core.CodeHighlight.prototype[property__19697__auto___20597] = (base__19696__auto___20580[property__19697__auto___20597]));
} else {
}

var G__20598 = cljs.core.next(seq__20576_20591__$1);
var G__20599 = null;
var G__20600 = (0);
var G__20601 = (0);
seq__20576_20581 = G__20598;
chunk__20577_20582 = G__20599;
count__20578_20583 = G__20600;
i__20579_20584 = G__20601;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__20604 = devcards.core.CodeHighlight;
var G__20605 = {"code": code_str, "lang": lang};
return React.createElement(G__20604,G__20605);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__6081__auto__ = (function (){var G__20606 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20606) : cljs.core.atom.call(null,G__20606));
})();
var prefer_table__6082__auto__ = (function (){var G__20607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20607) : cljs.core.atom.call(null,G__20607));
})();
var method_cache__6083__auto__ = (function (){var G__20608 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20608) : cljs.core.atom.call(null,G__20608));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__20609 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20609) : cljs.core.atom.call(null,G__20609));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__20610){
var map__20611 = p__20610;
var map__20611__$1 = ((((!((map__20611 == null)))?((((map__20611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20611):map__20611);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20611__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__20613){
var map__20614 = p__20613;
var map__20614__$1 = ((((!((map__20614 == null)))?((((map__20614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20614):map__20614);
var block = map__20614__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20614__$1,cljs.core.cst$kw$content);
var G__20616 = devcards.core.CodeHighlight;
var G__20617 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__20616,G__20617);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6233__auto__ = [];
var len__6226__auto___20623 = arguments.length;
var i__6227__auto___20624 = (0);
while(true){
if((i__6227__auto___20624 < len__6226__auto___20623)){
args__6233__auto__.push((arguments[i__6227__auto___20624]));

var G__20625 = (i__6227__auto___20624 + (1));
i__6227__auto___20624 = G__20625;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code(x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.array_seq([strs__$1], 0));
var attrs20619 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20619))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs20619], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20619))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20619)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__20620 = "div";
var G__20621 = {"style": {"color": "#a94442"}};
var G__20622 = sablono.interpreter.interpret(message);
return React.createElement(G__20620,G__20621,G__20622);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq20618){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20618));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__20632 = "div";
var G__20633 = {"className": (function (){var G__20635 = devcards.system.devcards_rendered_card_class;
var G__20635__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__20635),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__20635);
var G__20635__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__20635__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__20635__$1);
return G__20635__$2;
})()};
var G__20634 = sablono.interpreter.interpret(children);
return React.createElement(G__20632,G__20633,G__20634);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args20636 = [];
var len__6226__auto___20656 = arguments.length;
var i__6227__auto___20657 = (0);
while(true){
if((i__6227__auto___20657 < len__6226__auto___20656)){
args20636.push((arguments[i__6227__auto___20657]));

var G__20658 = (i__6227__auto___20657 + (1));
i__6227__auto___20657 = G__20658;
continue;
} else {
}
break;
}

var G__20638 = args20636.length;
switch (G__20638) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20636.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__20639 = card;
var map__20639__$1 = ((((!((map__20639 == null)))?((((map__20639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20639):map__20639);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20639__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20639__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__20641 = "div";
var G__20642 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__20643 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20641,G__20642,G__20643);
} else {
var G__20645 = "div";
var G__20646 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__20647 = (function (){var attrs20644 = (cljs.core.truth_(path)?(function (){var G__20649 = "a";
var G__20650 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__20649,G__20645,G__20646,map__20639,map__20639__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__20649,G__20645,G__20646,map__20639,map__20639__$1,path,options))
)};
var G__20651 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__20652 = " ";
return React.createElement(G__20649,G__20650,G__20651,G__20652);
})():(function (){var attrs20653 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs20653))?sablono.interpreter.attributes(attrs20653):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20653))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20653)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20644))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs20644], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20644)], null))));
})();
var G__20648 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__20645,G__20646,G__20647,G__20648);
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
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto__.call(null,this$,devcard_opts));
} else {
var m__5824__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
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
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (devcards.core._devcard[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto__.call(null,this$,devcard_opts));
} else {
var m__5824__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5824__auto____$1.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
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
return (this$.props[cljs.core.name(k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name(k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__5168__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data) : cljs.core.atom.call(null,data));
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.atom_like_QMARK_;
var base__19696__auto___20670 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_base_DASH_)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(cljs.core.cst$kw$static_DASH_state.cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(initial_data) : cljs.core.deref.call(null,initial_data)):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),data)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom,data) : cljs.core.reset_BANG_.call(null,atom,data));
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
return this$.setState((function (){var or__5168__auto__ = (function (){var and__5156__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__5156__auto__)){
return this$.state;
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data(this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_((function (){var and__5156__auto__ = data_atom;
if(cljs.core.truth_(and__5156__auto__)){
return id;
} else {
return and__5156__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch(data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
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
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,this$) : m.call(null,data_atom,this$));
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_)))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__4425__auto__ = cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs20662 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20662))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20662], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20662))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20662)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__20663 = "div";
var G__20664 = {"className": "com-rigsomelight-devcards-frameless"};
var G__20665 = sablono.interpreter.interpret(children);
return React.createElement(G__20663,G__20664,G__20665);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__19696__auto___20670);
}

var seq__20666_20671 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20667_20672 = null;
var count__20668_20673 = (0);
var i__20669_20674 = (0);
while(true){
if((i__20669_20674 < count__20668_20673)){
var property__19697__auto___20675 = chunk__20667_20672.cljs$core$IIndexed$_nth$arity$2(null,i__20669_20674);
if(cljs.core.truth_((base__19696__auto___20670[property__19697__auto___20675]))){
(devcards.core.DevcardBase.prototype[property__19697__auto___20675] = (base__19696__auto___20670[property__19697__auto___20675]));
} else {
}

var G__20676 = seq__20666_20671;
var G__20677 = chunk__20667_20672;
var G__20678 = count__20668_20673;
var G__20679 = (i__20669_20674 + (1));
seq__20666_20671 = G__20676;
chunk__20667_20672 = G__20677;
count__20668_20673 = G__20678;
i__20669_20674 = G__20679;
continue;
} else {
var temp__4425__auto___20680 = cljs.core.seq(seq__20666_20671);
if(temp__4425__auto___20680){
var seq__20666_20681__$1 = temp__4425__auto___20680;
if(cljs.core.chunked_seq_QMARK_(seq__20666_20681__$1)){
var c__5971__auto___20682 = cljs.core.chunk_first(seq__20666_20681__$1);
var G__20683 = cljs.core.chunk_rest(seq__20666_20681__$1);
var G__20684 = c__5971__auto___20682;
var G__20685 = cljs.core.count(c__5971__auto___20682);
var G__20686 = (0);
seq__20666_20671 = G__20683;
chunk__20667_20672 = G__20684;
count__20668_20673 = G__20685;
i__20669_20674 = G__20686;
continue;
} else {
var property__19697__auto___20687 = cljs.core.first(seq__20666_20681__$1);
if(cljs.core.truth_((base__19696__auto___20670[property__19697__auto___20687]))){
(devcards.core.DevcardBase.prototype[property__19697__auto___20687] = (base__19696__auto___20670[property__19697__auto___20687]));
} else {
}

var G__20688 = cljs.core.next(seq__20666_20681__$1);
var G__20689 = null;
var G__20690 = (0);
var G__20691 = (0);
seq__20666_20671 = G__20688;
chunk__20667_20672 = G__20689;
count__20668_20673 = G__20690;
i__20669_20674 = G__20691;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
var G__20692 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20693 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__20692,G__20693) : node_fn.call(null,G__20692,G__20693));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__19696__auto___20700 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__5156__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,cljs.core.cst$kw$unique_id));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var G__20694 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__20695 = "Card has not mounted DOM node.";
return React.DOM.div(G__20694,G__20695);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__19696__auto___20700);
}

var seq__20696_20701 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__20697_20702 = null;
var count__20698_20703 = (0);
var i__20699_20704 = (0);
while(true){
if((i__20699_20704 < count__20698_20703)){
var property__19697__auto___20705 = chunk__20697_20702.cljs$core$IIndexed$_nth$arity$2(null,i__20699_20704);
if(cljs.core.truth_((base__19696__auto___20700[property__19697__auto___20705]))){
(devcards.core.DomComponent.prototype[property__19697__auto___20705] = (base__19696__auto___20700[property__19697__auto___20705]));
} else {
}

var G__20706 = seq__20696_20701;
var G__20707 = chunk__20697_20702;
var G__20708 = count__20698_20703;
var G__20709 = (i__20699_20704 + (1));
seq__20696_20701 = G__20706;
chunk__20697_20702 = G__20707;
count__20698_20703 = G__20708;
i__20699_20704 = G__20709;
continue;
} else {
var temp__4425__auto___20710 = cljs.core.seq(seq__20696_20701);
if(temp__4425__auto___20710){
var seq__20696_20711__$1 = temp__4425__auto___20710;
if(cljs.core.chunked_seq_QMARK_(seq__20696_20711__$1)){
var c__5971__auto___20712 = cljs.core.chunk_first(seq__20696_20711__$1);
var G__20713 = cljs.core.chunk_rest(seq__20696_20711__$1);
var G__20714 = c__5971__auto___20712;
var G__20715 = cljs.core.count(c__5971__auto___20712);
var G__20716 = (0);
seq__20696_20701 = G__20713;
chunk__20697_20702 = G__20714;
count__20698_20703 = G__20715;
i__20699_20704 = G__20716;
continue;
} else {
var property__19697__auto___20717 = cljs.core.first(seq__20696_20711__$1);
if(cljs.core.truth_((base__19696__auto___20700[property__19697__auto___20717]))){
(devcards.core.DomComponent.prototype[property__19697__auto___20717] = (base__19696__auto___20700[property__19697__auto___20717]));
} else {
}

var G__20718 = cljs.core.next(seq__20696_20711__$1);
var G__20719 = null;
var G__20720 = (0);
var G__20721 = (0);
seq__20696_20701 = G__20718;
chunk__20697_20702 = G__20719;
count__20698_20703 = G__20720;
i__20699_20704 = G__20721;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5168__auto__ = x === true;
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = x === false;
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
var or__5168__auto____$2 = (x == null);
if(or__5168__auto____$2){
return or__5168__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__5168__auto__ = typeof x === 'string';
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (x == null);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__5168__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__20722_SHARP_){
return !(p1__20722_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__20731 = opts;
var map__20731__$1 = ((((!((map__20731 == null)))?((((map__20731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20731):map__20731);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5168__auto__ = cljs.core.map_QMARK_(options);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (options == null);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__5168__auto__ = (initial_data == null);
if(or__5168__auto__){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__5168__auto____$1){
return or__5168__auto____$1;
} else {
var or__5168__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__5168__auto____$2){
return or__5168__auto____$2;
} else {
var or__5168__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__5168__auto____$3){
return or__5168__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__20731,map__20731__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__20723_SHARP_){
return devcards.core.booler_QMARK_(p1__20723_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__20731,map__20731__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__20755 = "div";
var G__20756 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__20757 = sablono.interpreter.interpret((function (){var G__20760 = "code";
var G__20761 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__20762 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__20760,G__20761,G__20762);
})());
var G__20758 = (function (){var G__20763 = "span";
var G__20764 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__20765 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__20763,G__20764,G__20765);
})();
var G__20759 = (function (){var G__20766 = "span";
var G__20767 = {"style": {"flex": "1 100px"}};
var G__20768 = " Received: ";
var G__20769 = (function (){var attrs20754 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs20754))?sablono.interpreter.attributes(attrs20754):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20754))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20754)], null))));
})();
return React.createElement(G__20766,G__20767,G__20768,G__20769);
})();
return React.createElement(G__20755,G__20756,G__20757,G__20758,G__20759);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__20783 = "div";
var G__20784 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__20785 = (function (){var attrs20782 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20782))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs20782], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20782)], null))));
})();
var G__20786 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__20789 = "div";
var G__20790 = null;
var G__20791 = (function (){var attrs20787 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20787))?sablono.interpreter.attributes(attrs20787):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20787))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20787)], null))));
})();
var G__20792 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs20793 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs20793))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs20793], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20793))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20793)], null))));
})():null));
return React.createElement(G__20789,G__20790,G__20791,G__20792);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__20783,G__20784,G__20785,G__20786);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__20794_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__20794_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__20797 = devcards.core.DevcardBase;
var G__20798 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__20797,G__20798);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20800,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20802 = (((k20800 instanceof cljs.core.Keyword))?k20800.fqn:null);
switch (G__20802) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20800,else__5785__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20799){
var self__ = this;
var G__20799__$1 = this;
return (new cljs.core.RecordIter((0),G__20799__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20799){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20803 = cljs.core.keyword_identical_QMARK_;
var expr__20804 = k__5790__auto__;
if(cljs.core.truth_((pred__20803.cljs$core$IFn$_invoke$arity$2 ? pred__20803.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20804) : pred__20803.call(null,cljs.core.cst$kw$obj,expr__20804)))){
return (new devcards.core.IdentiyOptions(G__20799,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20799),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20799){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__20799,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__20801){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20801),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20801,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__20807){
var map__20810 = p__20807;
var map__20810__$1 = ((((!((map__20810 == null)))?((((map__20810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20810):map__20810);
var devcard_opts = map__20810__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20810__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__20810,map__20810__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__20810,map__20810__$1,devcard_opts,options))
,cljs.core.array_seq([cljs.core.cst$kw$initial_DASH_data,main_obj,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$history,true], null),devcards.core.assert_options_map(options)], 0))], 0));
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20813,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20815 = (((k20813 instanceof cljs.core.Keyword))?k20813.fqn:null);
switch (G__20815) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20813,else__5785__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20812){
var self__ = this;
var G__20812__$1 = this;
return (new cljs.core.RecordIter((0),G__20812__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20812){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20816 = cljs.core.keyword_identical_QMARK_;
var expr__20817 = k__5790__auto__;
if(cljs.core.truth_((pred__20816.cljs$core$IFn$_invoke$arity$2 ? pred__20816.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20817) : pred__20816.call(null,cljs.core.cst$kw$obj,expr__20817)))){
return (new devcards.core.AtomLikeOptions(G__20812,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20812),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20812){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__20812,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__20814){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20814),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20814,cljs.core.cst$kw$obj),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,cljs.core.cst$kw$main_DASH_obj,devcards.util.edn_renderer.html_edn(((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(main_obj) : cljs.core.deref.call(null,main_obj)):main_obj)));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5782__auto__,k__5783__auto__){
var self__ = this;
var this__5782__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5782__auto____$1,k__5783__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5784__auto__,k20823,else__5785__auto__){
var self__ = this;
var this__5784__auto____$1 = this;
var G__20825 = (((k20823 instanceof cljs.core.Keyword))?k20823.fqn:null);
switch (G__20825) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20823,else__5785__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5796__auto__,writer__5797__auto__,opts__5798__auto__){
var self__ = this;
var this__5796__auto____$1 = this;
var pr_pair__5799__auto__ = ((function (this__5796__auto____$1){
return (function (keyval__5800__auto__){
return cljs.core.pr_sequential_writer(writer__5797__auto__,cljs.core.pr_writer,""," ","",opts__5798__auto__,keyval__5800__auto__);
});})(this__5796__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5797__auto__,pr_pair__5799__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5798__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20822){
var self__ = this;
var G__20822__$1 = this;
return (new cljs.core.RecordIter((0),G__20822__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5780__auto__){
var self__ = this;
var this__5780__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5776__auto__){
var self__ = this;
var this__5776__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5786__auto__){
var self__ = this;
var this__5786__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5777__auto__){
var self__ = this;
var this__5777__auto____$1 = this;
var h__5603__auto__ = self__.__hash;
if(!((h__5603__auto__ == null))){
return h__5603__auto__;
} else {
var h__5603__auto____$1 = cljs.core.hash_imap(this__5777__auto____$1);
self__.__hash = h__5603__auto____$1;

return h__5603__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5778__auto__,other__5779__auto__){
var self__ = this;
var this__5778__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5156__auto__ = other__5779__auto__;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = (this__5778__auto____$1.constructor === other__5779__auto__.constructor);
if(and__5156__auto____$1){
return cljs.core.equiv_map(this__5778__auto____$1,other__5779__auto__);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5791__auto__,k__5792__auto__){
var self__ = this;
var this__5791__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5792__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5791__auto____$1),self__.__meta),k__5792__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5792__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5789__auto__,k__5790__auto__,G__20822){
var self__ = this;
var this__5789__auto____$1 = this;
var pred__20826 = cljs.core.keyword_identical_QMARK_;
var expr__20827 = k__5790__auto__;
if(cljs.core.truth_((pred__20826.cljs$core$IFn$_invoke$arity$2 ? pred__20826.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__20827) : pred__20826.call(null,cljs.core.cst$kw$obj,expr__20827)))){
return (new devcards.core.EdnLikeOptions(G__20822,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5790__auto__,G__20822),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5794__auto__){
var self__ = this;
var this__5794__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5781__auto__,G__20822){
var self__ = this;
var this__5781__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__20822,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5787__auto__,entry__5788__auto__){
var self__ = this;
var this__5787__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5788__auto__)){
return cljs.core._assoc(this__5787__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5788__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5787__auto____$1,entry__5788__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5816__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5816__auto__,writer__5817__auto__){
return cljs.core._write(writer__5817__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__20824){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__20824),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20824,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__5156__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__5156__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return and__5156__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_(main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_(main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$path,cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__20841 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__20841 == null))){
if((false) || (G__20841.devcards$core$IDevcard$)){
return true;
} else {
if((!G__20841.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20841);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__20841);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__20844 = devcards.core.DomComponent;
var G__20845 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__20844,G__20845);
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__20849 = (function (){var G__20850 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20850) : cljs.core.deref.call(null,G__20850));
})();
var map__20849__$1 = ((((!((map__20849 == null)))?((((map__20849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20849):map__20849);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20853 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20853) : cljs.core.deref.call(null,G__20853));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__20855 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20855) : cljs.core.deref.call(null,G__20855));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20860 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20860__$1 = ((((!((map__20860 == null)))?((((map__20860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20860):map__20860);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20860__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20860__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20862_20864 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20863_20865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20862_20864,G__20863_20865) : cljs.core.reset_BANG_.call(null,G__20862_20864,G__20863_20865));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20870 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20870__$1 = ((((!((map__20870 == null)))?((((map__20870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20870):map__20870);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20870__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20872_20874 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20873_20875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20872_20874,G__20873_20875) : cljs.core.reset_BANG_.call(null,G__20872_20874,G__20873_20875));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__20880 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__20880__$1 = ((((!((map__20880 == null)))?((((map__20880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20880):map__20880);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__20882_20884 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20883_20885 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20882_20884,G__20883_20885) : cljs.core.reset_BANG_.call(null,G__20882_20884,G__20883_20885));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__20940 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__20941 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20941) : cljs.core.atom.call(null,G__20941));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__20942 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20942) : cljs.core.deref.call(null,G__20942));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__5156__auto__ = data_atom;
if(cljs.core.truth_(and__5156__auto__)){
return id;
} else {
return and__5156__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__20943){
var map__20944 = p__20943;
var map__20944__$1 = ((((!((map__20944 == null)))?((((map__20944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20944):map__20944);
var ha = map__20944__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944__$1,cljs.core.cst$kw$ignore_DASH_click);
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,cljs.core.cst$kw$ignore_DASH_click,false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,cljs.core.cst$kw$history,(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$pointer,(0)], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$history,(function (){var hist = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,false], 0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__5168__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__20946 = "div";
var G__20947 = {"style": {"display": (cljs.core.truth_((function (){var or__5168__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__20948 = sablono.interpreter.interpret((function (){var action = ((function (G__20946,G__20947,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__20946,G__20947,this$))
;
var G__20954 = "button";
var G__20955 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__20956 = (function (){var G__20957 = "span";
var G__20958 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__20959 = "";
return React.createElement(G__20957,G__20958,G__20959);
})();
return React.createElement(G__20954,G__20955,G__20956);
})());
var G__20949 = sablono.interpreter.interpret((function (){var action = ((function (G__20946,G__20947,G__20948,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__20960 = data_atom;
var G__20961 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20960,G__20961) : cljs.core.reset_BANG_.call(null,G__20960,G__20961));
});})(G__20946,G__20947,G__20948,this$))
;
var G__20964 = "button";
var G__20965 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__20966 = (function (){var G__20967 = "span";
var G__20968 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__20969 = "";
return React.createElement(G__20967,G__20968,G__20969);
})();
return React.createElement(G__20964,G__20965,G__20966);
})());
var G__20950 = sablono.interpreter.interpret((function (){var action = ((function (G__20946,G__20947,G__20948,G__20949,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__20946,G__20947,G__20948,G__20949,this$))
;
var G__20972 = "button";
var G__20973 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__20974 = (function (){var G__20975 = "span";
var G__20976 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__20977 = "";
return React.createElement(G__20975,G__20976,G__20977);
})();
return React.createElement(G__20972,G__20973,G__20974);
})());
var G__20951 = sablono.interpreter.interpret((function (){var listener = ((function (G__20946,G__20947,G__20948,G__20949,G__20950,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__20946,G__20947,G__20948,G__20949,G__20950,this$))
;
var G__20984 = "button";
var G__20985 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__20986 = (function (){var G__20989 = "span";
var G__20990 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__20989,G__20990);
})();
var G__20987 = (function (){var G__20991 = "span";
var G__20992 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__20991,G__20992);
})();
var G__20988 = (function (){var G__20993 = "span";
var G__20994 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__20993,G__20994);
})();
return React.createElement(G__20984,G__20985,G__20986,G__20987,G__20988);
})());
return React.createElement(G__20946,G__20947,G__20948,G__20949,G__20950,G__20951);
} else {
return null;
}
})};
return React.createClass(G__20940);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__20997 = devcards.core.HistoryComponent;
var G__20998 = {"data_atom": data_atom};
return React.createElement(G__20997,G__20998);
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_collect_tests], null),cljs.core.conj,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$pass], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_devcards_test_card_reporter,cljs.core.cst$kw$test_DASH_doc], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_21000 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_21000;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__6081__auto__ = (function (){var G__21001 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21001) : cljs.core.atom.call(null,G__21001));
})();
var prefer_table__6082__auto__ = (function (){var G__21002 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21002) : cljs.core.atom.call(null,G__21002));
})();
var method_cache__6083__auto__ = (function (){var G__21003 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21003) : cljs.core.atom.call(null,G__21003));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__21004 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21004) : cljs.core.atom.call(null,G__21004));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21005 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21005))?sablono.interpreter.attributes(attrs21005):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21005))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21005)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21006,body){
var map__21014 = p__21006;
var map__21014__$1 = ((((!((map__21014 == null)))?((((map__21014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21014):map__21014);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21014__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21017 = "div";
var G__21018 = null;
var G__21019 = (function (){var attrs21016 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21016))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21016], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21016))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21016)], null))));
})();
var G__21020 = sablono.interpreter.interpret(body);
return React.createElement(G__21017,G__21018,G__21019,G__21020);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21021){
var map__21026 = p__21021;
var map__21026__$1 = ((((!((map__21026 == null)))?((((map__21026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21026):map__21026);
var m = map__21026__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21026__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__21028 = devcards.core.CodeHighlight;
var G__21029 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__21028,G__21029);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__21033 = "div";
var G__21034 = null;
var G__21035 = React.createElement("strong",null,"Error: ");
var G__21036 = (function (){var attrs21032 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21032))?sablono.interpreter.attributes(attrs21032):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21032))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21032)], null))));
})();
return React.createElement(G__21033,G__21034,G__21035,G__21036);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21037 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21037))?sablono.interpreter.attributes(attrs21037):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21037))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21037)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21038){
var map__21039 = p__21038;
var map__21039__$1 = ((((!((map__21039 == null)))?((((map__21039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21039):map__21039);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21041 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21039,map__21039__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21039,map__21039__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21041))?sablono.interpreter.attributes(attrs21041):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21041))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21041)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21043 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21043) : cljs.test.report.call(null,G__21043));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21048 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21049,t){
var map__21050 = p__21049;
var map__21050__$1 = ((((!((map__21050 == null)))?((((map__21050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21050):map__21050);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21050__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21048))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21048], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21048))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21048)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__21095){
var map__21096 = p__21095;
var map__21096__$1 = ((((!((map__21096 == null)))?((((map__21096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21096):map__21096);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__21094 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__21094__$1 = ((((!((map__21094 == null)))?((((map__21094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21094):map__21094);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__21099 = "div";
var G__21100 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__21101 = (function (){var G__21103 = "div";
var G__21104 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__21105 = (function (){var G__21109 = "a";
var G__21110 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21109,G__21103,G__21104,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21109,G__21103,G__21104,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
)};
var G__21111 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__21109,G__21110,G__21111);
})();
var G__21106 = (function (){var G__21112 = "button";
var G__21113 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__21112,G__21103,G__21104,G__21105,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__21112,G__21103,G__21104,G__21105,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__21114 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__21112,G__21113,G__21114);
})();
var G__21107 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__21118 = "button";
var G__21119 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__21118,G__21103,G__21104,G__21105,G__21106,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__21118,G__21103,G__21104,G__21105,G__21106,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (p__21121){
var map__21122 = p__21121;
var map__21122__$1 = ((((!((map__21122 == null)))?((((map__21122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21122):map__21122);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__21118,G__21103,G__21104,G__21105,G__21106,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
});
});})(G__21118,G__21103,G__21104,G__21105,G__21106,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__21120 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__21118,G__21119,G__21120);
})()));
var G__21108 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__21127 = "button";
var G__21128 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__21127,G__21103,G__21104,G__21105,G__21106,G__21107,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__21127,G__21103,G__21104,G__21105,G__21106,G__21107,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1){
return (function (p__21130){
var map__21131 = p__21130;
var map__21131__$1 = ((((!((map__21131 == null)))?((((map__21131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21131):map__21131);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__21127,G__21103,G__21104,G__21105,G__21106,G__21107,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
});
});})(G__21127,G__21103,G__21104,G__21105,G__21106,G__21107,G__21099,G__21100,error_QMARK_,tests,some_tests,total_tests,map__21094,map__21094__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__21129 = sablono.interpreter.interpret(pass);
return React.createElement(G__21127,G__21128,G__21129);
})()));
return React.createElement(G__21103,G__21104,G__21105,G__21106,G__21107,G__21108);
})();
var G__21102 = (function (){var G__21133 = "div";
var G__21134 = {"className": devcards.system.devcards_rendered_card_class};
var G__21135 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__5168__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__21133,G__21134,G__21135);
})();
return React.createElement(G__21099,G__21100,G__21101,G__21102);
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
});})(out,test_env))
], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__){
return (function (state_21222){
var state_val_21223 = (state_21222[(1)]);
if((state_val_21223 === (7))){
var state_21222__$1 = state_21222;
var statearr_21224_21273 = state_21222__$1;
(statearr_21224_21273[(2)] = false);

(statearr_21224_21273[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (20))){
var inst_21163 = (state_21222[(7)]);
var inst_21182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21163);
var state_21222__$1 = state_21222;
var statearr_21225_21274 = state_21222__$1;
(statearr_21225_21274[(2)] = inst_21182);

(statearr_21225_21274[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (27))){
var inst_21197 = (state_21222[(8)]);
var inst_21187 = (state_21222[(9)]);
var inst_21201 = (inst_21187.cljs$core$IFn$_invoke$arity$1 ? inst_21187.cljs$core$IFn$_invoke$arity$1(inst_21197) : inst_21187.call(null,inst_21197));
var state_21222__$1 = state_21222;
var statearr_21226_21275 = state_21222__$1;
(statearr_21226_21275[(2)] = inst_21201);

(statearr_21226_21275[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (1))){
var state_21222__$1 = state_21222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21222__$1,(2),devcards.core.test_channel);
} else {
if((state_val_21223 === (24))){
var state_21222__$1 = state_21222;
var statearr_21227_21276 = state_21222__$1;
(statearr_21227_21276[(2)] = null);

(statearr_21227_21276[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (4))){
var state_21222__$1 = state_21222;
var statearr_21228_21277 = state_21222__$1;
(statearr_21228_21277[(2)] = false);

(statearr_21228_21277[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (15))){
var state_21222__$1 = state_21222;
var statearr_21229_21278 = state_21222__$1;
(statearr_21229_21278[(2)] = false);

(statearr_21229_21278[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (21))){
var inst_21163 = (state_21222[(7)]);
var state_21222__$1 = state_21222;
var statearr_21230_21279 = state_21222__$1;
(statearr_21230_21279[(2)] = inst_21163);

(statearr_21230_21279[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (13))){
var inst_21220 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21222__$1,inst_21220);
} else {
if((state_val_21223 === (22))){
var inst_21186 = (state_21222[(10)]);
var inst_21185 = (state_21222[(2)]);
var inst_21186__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21185,cljs.core.cst$kw$tests);
var inst_21187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21185,cljs.core.cst$kw$callback);
var state_21222__$1 = (function (){var statearr_21231 = state_21222;
(statearr_21231[(10)] = inst_21186__$1);

(statearr_21231[(9)] = inst_21187);

return statearr_21231;
})();
if(cljs.core.truth_(inst_21186__$1)){
var statearr_21232_21280 = state_21222__$1;
(statearr_21232_21280[(1)] = (23));

} else {
var statearr_21233_21281 = state_21222__$1;
(statearr_21233_21281[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (29))){
var inst_21211 = (state_21222[(2)]);
var inst_21212 = cljs.test.clear_env_BANG_();
var state_21222__$1 = (function (){var statearr_21234 = state_21222;
(statearr_21234[(11)] = inst_21211);

(statearr_21234[(12)] = inst_21212);

return statearr_21234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21222__$1,(30),devcards.core.test_channel);
} else {
if((state_val_21223 === (6))){
var state_21222__$1 = state_21222;
var statearr_21235_21282 = state_21222__$1;
(statearr_21235_21282[(2)] = true);

(statearr_21235_21282[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (28))){
var inst_21187 = (state_21222[(9)]);
var inst_21203 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_21204 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_21205 = cljs.core.PersistentHashMap.fromArrays(inst_21203,inst_21204);
var inst_21206 = devcards.core.collect_test(inst_21205);
var inst_21207 = cljs.test.get_current_env();
var inst_21208 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_21207,cljs.core.cst$kw$error,"Execution timed out!");
var inst_21209 = (inst_21187.cljs$core$IFn$_invoke$arity$1 ? inst_21187.cljs$core$IFn$_invoke$arity$1(inst_21208) : inst_21187.call(null,inst_21208));
var state_21222__$1 = (function (){var statearr_21236 = state_21222;
(statearr_21236[(13)] = inst_21206);

return statearr_21236;
})();
var statearr_21237_21283 = state_21222__$1;
(statearr_21237_21283[(2)] = inst_21209);

(statearr_21237_21283[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (25))){
var inst_21218 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
var statearr_21238_21284 = state_21222__$1;
(statearr_21238_21284[(2)] = inst_21218);

(statearr_21238_21284[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (17))){
var state_21222__$1 = state_21222;
var statearr_21239_21285 = state_21222__$1;
(statearr_21239_21285[(2)] = true);

(statearr_21239_21285[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (3))){
var inst_21140 = (state_21222[(14)]);
var inst_21145 = inst_21140.cljs$lang$protocol_mask$partition0$;
var inst_21146 = (inst_21145 & (64));
var inst_21147 = inst_21140.cljs$core$ISeq$;
var inst_21148 = (inst_21146) || (inst_21147);
var state_21222__$1 = state_21222;
if(cljs.core.truth_(inst_21148)){
var statearr_21240_21286 = state_21222__$1;
(statearr_21240_21286[(1)] = (6));

} else {
var statearr_21241_21287 = state_21222__$1;
(statearr_21241_21287[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (12))){
var inst_21163 = (state_21222[(7)]);
var inst_21167 = (inst_21163 == null);
var inst_21168 = cljs.core.not(inst_21167);
var state_21222__$1 = state_21222;
if(inst_21168){
var statearr_21242_21288 = state_21222__$1;
(statearr_21242_21288[(1)] = (14));

} else {
var statearr_21243_21289 = state_21222__$1;
(statearr_21243_21289[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (2))){
var inst_21140 = (state_21222[(14)]);
var inst_21140__$1 = (state_21222[(2)]);
var inst_21142 = (inst_21140__$1 == null);
var inst_21143 = cljs.core.not(inst_21142);
var state_21222__$1 = (function (){var statearr_21244 = state_21222;
(statearr_21244[(14)] = inst_21140__$1);

return statearr_21244;
})();
if(inst_21143){
var statearr_21245_21290 = state_21222__$1;
(statearr_21245_21290[(1)] = (3));

} else {
var statearr_21246_21291 = state_21222__$1;
(statearr_21246_21291[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (23))){
var inst_21190 = (state_21222[(15)]);
var inst_21186 = (state_21222[(10)]);
var inst_21190__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_21191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21192 = devcards.core.run_card_tests(inst_21186);
var inst_21193 = [inst_21192,inst_21190__$1];
var inst_21194 = (new cljs.core.PersistentVector(null,2,(5),inst_21191,inst_21193,null));
var state_21222__$1 = (function (){var statearr_21247 = state_21222;
(statearr_21247[(15)] = inst_21190__$1);

return statearr_21247;
})();
return cljs.core.async.ioc_alts_BANG_(state_21222__$1,(26),inst_21194);
} else {
if((state_val_21223 === (19))){
var inst_21177 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
var statearr_21248_21292 = state_21222__$1;
(statearr_21248_21292[(2)] = inst_21177);

(statearr_21248_21292[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (11))){
var inst_21140 = (state_21222[(14)]);
var inst_21160 = (state_21222[(2)]);
var inst_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21160,cljs.core.cst$kw$tests);
var inst_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21160,cljs.core.cst$kw$callback);
var inst_21163 = inst_21140;
var state_21222__$1 = (function (){var statearr_21249 = state_21222;
(statearr_21249[(7)] = inst_21163);

(statearr_21249[(16)] = inst_21162);

(statearr_21249[(17)] = inst_21161);

return statearr_21249;
})();
var statearr_21250_21293 = state_21222__$1;
(statearr_21250_21293[(2)] = null);

(statearr_21250_21293[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (9))){
var inst_21140 = (state_21222[(14)]);
var inst_21157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21140);
var state_21222__$1 = state_21222;
var statearr_21251_21294 = state_21222__$1;
(statearr_21251_21294[(2)] = inst_21157);

(statearr_21251_21294[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (5))){
var inst_21155 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
if(cljs.core.truth_(inst_21155)){
var statearr_21252_21295 = state_21222__$1;
(statearr_21252_21295[(1)] = (9));

} else {
var statearr_21253_21296 = state_21222__$1;
(statearr_21253_21296[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (14))){
var inst_21163 = (state_21222[(7)]);
var inst_21170 = inst_21163.cljs$lang$protocol_mask$partition0$;
var inst_21171 = (inst_21170 & (64));
var inst_21172 = inst_21163.cljs$core$ISeq$;
var inst_21173 = (inst_21171) || (inst_21172);
var state_21222__$1 = state_21222;
if(cljs.core.truth_(inst_21173)){
var statearr_21254_21297 = state_21222__$1;
(statearr_21254_21297[(1)] = (17));

} else {
var statearr_21255_21298 = state_21222__$1;
(statearr_21255_21298[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (26))){
var inst_21190 = (state_21222[(15)]);
var inst_21196 = (state_21222[(2)]);
var inst_21197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21196,(0),null);
var inst_21198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21196,(1),null);
var inst_21199 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_21198,inst_21190);
var state_21222__$1 = (function (){var statearr_21256 = state_21222;
(statearr_21256[(8)] = inst_21197);

return statearr_21256;
})();
if(inst_21199){
var statearr_21257_21299 = state_21222__$1;
(statearr_21257_21299[(1)] = (27));

} else {
var statearr_21258_21300 = state_21222__$1;
(statearr_21258_21300[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (16))){
var inst_21180 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
if(cljs.core.truth_(inst_21180)){
var statearr_21259_21301 = state_21222__$1;
(statearr_21259_21301[(1)] = (20));

} else {
var statearr_21260_21302 = state_21222__$1;
(statearr_21260_21302[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (30))){
var inst_21214 = (state_21222[(2)]);
var inst_21163 = inst_21214;
var state_21222__$1 = (function (){var statearr_21261 = state_21222;
(statearr_21261[(7)] = inst_21163);

return statearr_21261;
})();
var statearr_21262_21303 = state_21222__$1;
(statearr_21262_21303[(2)] = null);

(statearr_21262_21303[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (10))){
var inst_21140 = (state_21222[(14)]);
var state_21222__$1 = state_21222;
var statearr_21263_21304 = state_21222__$1;
(statearr_21263_21304[(2)] = inst_21140);

(statearr_21263_21304[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (18))){
var state_21222__$1 = state_21222;
var statearr_21264_21305 = state_21222__$1;
(statearr_21264_21305[(2)] = false);

(statearr_21264_21305[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21223 === (8))){
var inst_21152 = (state_21222[(2)]);
var state_21222__$1 = state_21222;
var statearr_21265_21306 = state_21222__$1;
(statearr_21265_21306[(2)] = inst_21152);

(statearr_21265_21306[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15986__auto__))
;
return ((function (switch__15872__auto__,c__15986__auto__){
return (function() {
var devcards$core$state_machine__15873__auto__ = null;
var devcards$core$state_machine__15873__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = devcards$core$state_machine__15873__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var devcards$core$state_machine__15873__auto____1 = (function (state_21222){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_21222);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__15876__auto__ = e21270;
var statearr_21271_21307 = state_21222;
(statearr_21271_21307[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21222);

return cljs.core.cst$kw$recur;
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__21308 = state_21222;
state_21222 = G__21308;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
devcards$core$state_machine__15873__auto__ = function(state_21222){
switch(arguments.length){
case 0:
return devcards$core$state_machine__15873__auto____0.call(this);
case 1:
return devcards$core$state_machine__15873__auto____1.call(this,state_21222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__15873__auto____0;
devcards$core$state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__15873__auto____1;
return devcards$core$state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__))
})();
var state__15988__auto__ = (function (){var statearr_21272 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_21272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__))
);

return c__15986__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__19696__auto___21313 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$test_thunks);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name(cljs.core.cst$kw$test_thunks)]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,cljs.core.cst$kw$test_results);
var path = devcards.core.get_props(this$,cljs.core.cst$kw$path);
return devcards.core.render_tests(this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__19696__auto___21313);
}

var seq__21309_21314 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21310_21315 = null;
var count__21311_21316 = (0);
var i__21312_21317 = (0);
while(true){
if((i__21312_21317 < count__21311_21316)){
var property__19697__auto___21318 = chunk__21310_21315.cljs$core$IIndexed$_nth$arity$2(null,i__21312_21317);
if(cljs.core.truth_((base__19696__auto___21313[property__19697__auto___21318]))){
(devcards.core.TestDevcard.prototype[property__19697__auto___21318] = (base__19696__auto___21313[property__19697__auto___21318]));
} else {
}

var G__21319 = seq__21309_21314;
var G__21320 = chunk__21310_21315;
var G__21321 = count__21311_21316;
var G__21322 = (i__21312_21317 + (1));
seq__21309_21314 = G__21319;
chunk__21310_21315 = G__21320;
count__21311_21316 = G__21321;
i__21312_21317 = G__21322;
continue;
} else {
var temp__4425__auto___21323 = cljs.core.seq(seq__21309_21314);
if(temp__4425__auto___21323){
var seq__21309_21324__$1 = temp__4425__auto___21323;
if(cljs.core.chunked_seq_QMARK_(seq__21309_21324__$1)){
var c__5971__auto___21325 = cljs.core.chunk_first(seq__21309_21324__$1);
var G__21326 = cljs.core.chunk_rest(seq__21309_21324__$1);
var G__21327 = c__5971__auto___21325;
var G__21328 = cljs.core.count(c__5971__auto___21325);
var G__21329 = (0);
seq__21309_21314 = G__21326;
chunk__21310_21315 = G__21327;
count__21311_21316 = G__21328;
i__21312_21317 = G__21329;
continue;
} else {
var property__19697__auto___21330 = cljs.core.first(seq__21309_21324__$1);
if(cljs.core.truth_((base__19696__auto___21313[property__19697__auto___21330]))){
(devcards.core.TestDevcard.prototype[property__19697__auto___21330] = (base__19696__auto___21313[property__19697__auto___21330]));
} else {
}

var G__21331 = cljs.core.next(seq__21309_21324__$1);
var G__21332 = null;
var G__21333 = (0);
var G__21334 = (0);
seq__21309_21314 = G__21331;
chunk__21310_21315 = G__21332;
count__21311_21316 = G__21333;
i__21312_21317 = G__21334;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6233__auto__ = [];
var len__6226__auto___21341 = arguments.length;
var i__6227__auto___21342 = (0);
while(true){
if((i__6227__auto___21342 < len__6226__auto___21341)){
args__6233__auto__.push((arguments[i__6227__auto___21342]));

var G__21343 = (i__6227__auto___21342 + (1));
i__6227__auto___21342 = G__21343;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core21336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core21336 = (function (test_thunks,meta21337){
this.test_thunks = test_thunks;
this.meta21337 = meta21337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core21336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21338,meta21337__$1){
var self__ = this;
var _21338__$1 = this;
return (new devcards.core.t_devcards$core21336(self__.test_thunks,meta21337__$1));
});

devcards.core.t_devcards$core21336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21338){
var self__ = this;
var _21338__$1 = this;
return self__.meta21337;
});

devcards.core.t_devcards$core21336.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core21336.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__21339 = devcards.core.TestDevcard;
var G__21340 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__21339,G__21340);
});

devcards.core.t_devcards$core21336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta21337], null);
});

devcards.core.t_devcards$core21336.cljs$lang$type = true;

devcards.core.t_devcards$core21336.cljs$lang$ctorStr = "devcards.core/t_devcards$core21336";

devcards.core.t_devcards$core21336.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"devcards.core/t_devcards$core21336");
});

devcards.core.__GT_t_devcards$core21336 = (function devcards$core$__GT_t_devcards$core21336(test_thunks__$1,meta21337){
return (new devcards.core.t_devcards$core21336(test_thunks__$1,meta21337));
});

}

return (new devcards.core.t_devcards$core21336(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq21335){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21335));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.aget,goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state)));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns_symbol)], null));
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
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$base_DASH_card_DASH_options], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([opts,base_card_options], 0));
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__21348 = (function (){var attrs21349 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21349))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21349], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21349))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21349)], null))));
})();
return React.renderToString(G__21348);
})()),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
var G__21355 = (function (){var attrs21357 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21357))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs21357], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21357)], null))));
})();
var G__21356 = devcards.system.devcards_app_node();
return React.render(G__21355,G__21356);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__15986__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15986__auto__){
return (function (){
var f__15987__auto__ = (function (){var switch__15872__auto__ = ((function (c__15986__auto__){
return (function (state_21387){
var state_val_21388 = (state_21387[(1)]);
if((state_val_21388 === (1))){
var inst_21378 = devcards.core.load_data_from_channel_BANG_();
var state_21387__$1 = state_21387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21387__$1,(2),inst_21378);
} else {
if((state_val_21388 === (2))){
var inst_21380 = (state_21387[(2)]);
var inst_21381 = cljs.core.async.timeout((100));
var state_21387__$1 = (function (){var statearr_21389 = state_21387;
(statearr_21389[(7)] = inst_21380);

return statearr_21389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21387__$1,(3),inst_21381);
} else {
if((state_val_21388 === (3))){
var inst_21383 = (state_21387[(2)]);
var inst_21384 = (function (){return ((function (inst_21383,state_val_21388,c__15986__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_21383,state_val_21388,c__15986__auto__))
})();
var inst_21385 = setTimeout(inst_21384,(0));
var state_21387__$1 = (function (){var statearr_21390 = state_21387;
(statearr_21390[(8)] = inst_21383);

return statearr_21390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21387__$1,inst_21385);
} else {
return null;
}
}
}
});})(c__15986__auto__))
;
return ((function (switch__15872__auto__,c__15986__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__15873__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__15873__auto____0 = (function (){
var statearr_21394 = [null,null,null,null,null,null,null,null,null];
(statearr_21394[(0)] = devcards$core$mount_namespace_$_state_machine__15873__auto__);

(statearr_21394[(1)] = (1));

return statearr_21394;
});
var devcards$core$mount_namespace_$_state_machine__15873__auto____1 = (function (state_21387){
while(true){
var ret_value__15874__auto__ = (function (){try{while(true){
var result__15875__auto__ = switch__15872__auto__(state_21387);
if(cljs.core.keyword_identical_QMARK_(result__15875__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15875__auto__;
}
break;
}
}catch (e21395){if((e21395 instanceof Object)){
var ex__15876__auto__ = e21395;
var statearr_21396_21398 = state_21387;
(statearr_21396_21398[(5)] = ex__15876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21387);

return cljs.core.cst$kw$recur;
} else {
throw e21395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15874__auto__,cljs.core.cst$kw$recur)){
var G__21399 = state_21387;
state_21387 = G__21399;
continue;
} else {
return ret_value__15874__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__15873__auto__ = function(state_21387){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__15873__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__15873__auto____1.call(this,state_21387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__15873__auto____0;
devcards$core$mount_namespace_$_state_machine__15873__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__15873__auto____1;
return devcards$core$mount_namespace_$_state_machine__15873__auto__;
})()
;})(switch__15872__auto__,c__15986__auto__))
})();
var state__15988__auto__ = (function (){var statearr_21397 = (f__15987__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15987__auto__.cljs$core$IFn$_invoke$arity$0() : f__15987__auto__.call(null));
(statearr_21397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15986__auto__);

return statearr_21397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15988__auto__);
});})(c__15986__auto__))
);

return c__15986__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
